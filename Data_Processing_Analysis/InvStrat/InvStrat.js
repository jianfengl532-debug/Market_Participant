/* ============================================================
   InvStrat.js — 投资策略分析全局功能脚本
   汇总自: InvStrat_js/geoenv.js + FxCap.html 内联脚本
   ============================================================ */

/* ==================================================================
   GeoEnv — 地政环境分析 · 智能采集系统
   功能：智能解析、表单填充、动态子表、提交预览
   ================================================================== */
(function() {
    // 辅助函数：清理字符串（去首尾空格，合并内部多余空格）
    function cleanStr(str) {
        if (!str) return '';
        return str.trim().replace(/\s+/g, ' ');
    }

    // ========== 解析规则引擎 ==========
    function parseNewsToForm(newsText) {
        let event = {
            title: "",
            source: "",
            event_time: "",
            region: "",
            country_involved: "",
            event_type: "other",
            severity_level: 3,
            risk_score: null,
            tags: "",
            description: "",
            impact_summary: "",
            raw_content: newsText
        };
        let impacts = [];
        let sources = [];

        // 1. 提取标题
        let firstLine = newsText.split(/\n/)[0].trim();
        if (firstLine.length > 10) {
            event.title = firstLine.substring(0, 120);
        } else {
            let firstSentence = newsText.match(/^[^。！？]*[。！？]/);
            if (firstSentence) event.title = firstSentence[0].substring(0, 120);
            else event.title = newsText.substring(0, 80);
        }

        // 2. 提取时间
        let dateMatch = newsText.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        if (!dateMatch) dateMatch = newsText.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
        if (dateMatch) {
            let year = dateMatch[1], month = dateMatch[2].padStart(2,'0'), day = dateMatch[3].padStart(2,'0');
            event.event_time = `${year}-${month}-${day}T12:00:00`;
        } else {
            let today = new Date();
            today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
            event.event_time = today.toISOString().slice(0,16);
        }

        // 3. 来源
        let sourceMatch = newsText.match(/(新华社|路透社|法新社|美联社|央视|共同社|韩联社)/);
        if (sourceMatch) event.source = sourceMatch[1];

        // 4. 地区和国家
        let countryKeywords = ["中国","美国","俄罗斯","英国","法国","德国","日本","印度","巴西","南非","缅甸","乌克兰","以色列","伊朗","沙特","土耳其","朝鲜","韩国","越南","菲律宾","澳大利亚","加拿大","墨西哥","欧盟","中东","非洲","亚太","欧洲","拉丁美洲"];
        let foundCountries = [];
        for (let kw of countryKeywords) {
            if (newsText.includes(kw)) foundCountries.push(kw);
        }
        if (foundCountries.length > 0) event.country_involved = foundCountries.join(",");
        if (foundCountries.includes("中东") || foundCountries.includes("伊朗") || foundCountries.includes("以色列") || foundCountries.includes("沙特")) event.region = "中东";
        else if (foundCountries.includes("欧洲") || foundCountries.includes("德国") || foundCountries.includes("法国") || foundCountries.includes("英国")) event.region = "欧洲";
        else if (foundCountries.includes("亚太") || foundCountries.includes("中国") || foundCountries.includes("日本") || foundCountries.includes("韩国")) event.region = "亚太";
        else if (foundCountries.includes("非洲")) event.region = "非洲";
        else if (foundCountries.includes("美国") || foundCountries.includes("加拿大")) event.region = "美洲";

        // 5. 事件类型
        if (newsText.match(/会见|会谈|访问|联合声明|外交|大使|外长/)) event.event_type = "diplomacy";
        if (newsText.match(/冲突|袭击|战争|军事行动|炮击|爆炸/)) event.event_type = "conflict";
        if (newsText.match(/疫情|病毒|疫苗|卫生|流感/)) event.event_type = "health";
        if (newsText.match(/制裁|关税|贸易|经济衰退|通胀|加息/)) event.event_type = "economy";
        if (newsText.match(/军演|演习|部署|军队/)) event.event_type = "security";

        // 6. 严重程度
        if (newsText.match(/严重|重大|致命|激烈/)) event.severity_level = 4;
        if (newsText.match(/灾难|战争|大规模|极端/)) event.severity_level = 5;
        if (newsText.match(/轻微|小规模|低烈度/)) event.severity_level = 2;

        // 7. 风险评分估算
        let baseRisk = event.severity_level * 15;
        if (newsText.match(/风险|不确定性|波动/)) baseRisk += 10;
        if (newsText.match(/升级|恶化|威胁/)) baseRisk += 15;
        event.risk_score = Math.min(100, Math.max(0, baseRisk));

        // 8. 标签
        let tagSet = new Set();
        let tagKeywords = ["俄乌","中美","中东","能源危机","粮食安全","制裁","一带一路","台海","朝鲜","原油","天然气"];
        for (let kw of tagKeywords) {
            if (newsText.includes(kw)) tagSet.add(kw);
        }
        if (event.event_type === "diplomacy") tagSet.add("外交");
        if (event.event_type === "conflict") tagSet.add("冲突");
        event.tags = Array.from(tagSet).join(",");

        // 9. 事件描述
        event.description = newsText.length > 200 ? newsText.substring(0,200) : newsText;

        // 10. 影响总结
        let impactSentences = [];
        if (event.event_type === "diplomacy") impactSentences.push("外交互动有利于双边关系稳定，可能带动相关领域合作。");
        if (event.event_type === "conflict") impactSentences.push("冲突升级可能引发避险情绪，影响当地能源和金融市场。");
        if (event.event_type === "economy") impactSentences.push("经济政策变化将影响贸易流向和资本流动。");
        if (newsText.includes("石油") || newsText.includes("原油")) impactSentences.push("原油供应存在不确定性，短期油价可能波动。");
        if (newsText.includes("制裁")) impactSentences.push("制裁措施将冲击特定行业和货币稳定性。");
        event.impact_summary = impactSentences.join(" ");

        // 11. 来源引用子表
        let sourceItem = { source_name: event.source || "未知", source_url: "", author: "", publish_time: event.event_time, excerpt: "" };
        let authorMatch = newsText.match(/(记者|作者|文\/)([一-龥a-zA-Z]+)/);
        if (authorMatch) sourceItem.author = authorMatch[2];
        let firstSentence = newsText.match(/[^。]*[。]/);
        if (firstSentence) sourceItem.excerpt = firstSentence[0].substring(0, 100);
        sources.push(sourceItem);

        // 12. 影响评估子表
        let impact = { asset_class: "other", industry: "", direction: "neutral", level: 3, duration: "short", desc: "" };
        if (newsText.includes("石油") || newsText.includes("原油")) impact.asset_class = "oil";
        else if (newsText.includes("汇率") || newsText.includes("货币") || newsText.includes("美元") || newsText.includes("人民币")) impact.asset_class = "currency";
        else if (newsText.includes("股市") || newsText.includes("股票")) impact.asset_class = "stock";
        else if (newsText.includes("大宗商品") || newsText.includes("粮食") || newsText.includes("金属")) impact.asset_class = "commodity";

        if (event.event_type === "conflict" || newsText.includes("制裁")) impact.direction = "negative";
        if (event.event_type === "diplomacy" && !newsText.includes("对抗")) impact.direction = "positive";
        if (impact.direction === "positive") impact.level = 2;
        if (impact.direction === "negative") impact.level = 4;
        if (newsText.includes("长期")) impact.duration = "long";
        else if (newsText.includes("短期")) impact.duration = "short";
        impact.desc = `根据报道，该事件可能对${impact.asset_class === "oil" ? "油价" : impact.asset_class === "currency" ? "汇率" : "相关资产"}产生影响。`;
        impacts.push(impact);

        return { event, impacts, sources };
    }

    // ========== 动态子表操作 ==========
    function attachRemoveEvent(btn) {
        btn.addEventListener('click', function(e) {
            let row = this.closest('tr');
            let tbody = row.parentNode;
            if (tbody.children.length > 1) {
                row.remove();
            } else {
                alert('至少保留一行');
            }
        });
    }

    function attachSourceRemoveEvent(btn) {
        btn.addEventListener('click', function(e) {
            let row = this.closest('tr');
            let tbody = row.parentNode;
            if (tbody.children.length > 1) {
                row.remove();
            } else {
                alert('至少保留一行');
            }
        });
    }

    function addImpactRow() {
        let tbody = document.getElementById('impactBody');
        let newRow = document.createElement('tr');
        newRow.className = 'impact-row';
        newRow.innerHTML = `
            <td><select class="assetClass"><option value="oil">石油</option><option value="stock">股票</option><option value="currency">货币</option><option value="commodity">大宗商品</option><option value="bond">债券</option><option value="other">其他</option></select></td>
            <td><input type="text" class="industry" placeholder="能源/国防/农业"></td>
            <td><select class="impactDirection"><option value="positive">正面</option><option value="negative">负面</option><option value="neutral">中性</option><option value="mixed">混合</option></select></td>
            <td><input type="number" class="impactLevel" min="1" max="5" value="3"></td>
            <td><select class="expectedDuration"><option value="short">短期</option><option value="medium">中期</option><option value="long">长期</option></select></td>
            <td><input type="text" class="impactDesc" placeholder="具体影响"></td>
            <td><button type="button" class="btn btn-sm btn-danger removeRow">删除</button></td>
        `;
        tbody.appendChild(newRow);
        attachRemoveEvent(newRow.querySelector('.removeRow'));
    }

    function addSourceRow() {
        let tbody = document.getElementById('sourceBody');
        let newRow = document.createElement('tr');
        newRow.className = 'source-row';
        newRow.innerHTML = `
            <td><input type="text" class="sourceName" placeholder="新华社"></td>
            <td><input type="url" class="sourceUrl" placeholder="https://..."></td>
            <td><input type="text" class="author" placeholder="作者"></td>
            <td><input type="datetime-local" class="publishTime"></td>
            <td><input type="text" class="excerpt" placeholder="关键摘录"></td>
            <td><button type="button" class="btn btn-sm btn-danger removeSourceRow">删除</button></td>
        `;
        tbody.appendChild(newRow);
        attachSourceRemoveEvent(newRow.querySelector('.removeSourceRow'));
    }

    // 清空所有表单内容
    function clearForm() {
        document.getElementById('rawNewsInput').value = '';
        document.getElementById('title').value = '';
        document.getElementById('source').value = '';
        let now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.getElementById('eventTime').value = now.toISOString().slice(0,16);
        document.getElementById('region').value = '';
        document.getElementById('countryInvolved').value = '';
        document.getElementById('eventType').value = 'other';
        document.getElementById('severityLevel').value = '3';
        document.getElementById('riskScore').value = '';
        document.getElementById('tags').value = '';
        document.getElementById('description').value = '';
        document.getElementById('impactSummary').value = '';
        document.getElementById('rawContent').value = '';
        // 重置子表：清空并添加一个空行
        let impactBody = document.getElementById('impactBody');
        impactBody.innerHTML = '';
        addImpactRow();
        let sourceBody = document.getElementById('sourceBody');
        sourceBody.innerHTML = '';
        addSourceRow();
    }

    // 填充表单（解析后调用）
    function fillForm(parsed) {
        let ev = parsed.event;
        document.getElementById('title').value = ev.title || '';
        document.getElementById('source').value = ev.source || '';
        if (ev.event_time) document.getElementById('eventTime').value = ev.event_time;
        document.getElementById('region').value = ev.region || '';
        document.getElementById('countryInvolved').value = ev.country_involved || '';
        document.getElementById('eventType').value = ev.event_type;
        document.getElementById('severityLevel').value = ev.severity_level;
        document.getElementById('riskScore').value = ev.risk_score !== null ? ev.risk_score : '';
        document.getElementById('tags').value = ev.tags;
        document.getElementById('description').value = ev.description;
        document.getElementById('impactSummary').value = ev.impact_summary;
        document.getElementById('rawContent').value = ev.raw_content;

        // 填充影响评估子表
        let impactBody = document.getElementById('impactBody');
        impactBody.innerHTML = '';
        if (parsed.impacts.length === 0) {
            addImpactRow();
        } else {
            for (let imp of parsed.impacts) {
                let newRow = document.createElement('tr');
                newRow.className = 'impact-row';
                newRow.innerHTML = `
                    <td><select class="assetClass"><option value="oil">石油</option><option value="stock">股票</option><option value="currency">货币</option><option value="commodity">大宗商品</option><option value="bond">债券</option><option value="other">其他</option></select></td>
                    <td><input type="text" class="industry" placeholder="能源/国防/农业"></td>
                    <td><select class="impactDirection"><option value="positive">正面</option><option value="negative">负面</option><option value="neutral">中性</option><option value="mixed">混合</option></select></td>
                    <td><input type="number" class="impactLevel" min="1" max="5" value="3"></td>
                    <td><select class="expectedDuration"><option value="short">短期</option><option value="medium">中期</option><option value="long">长期</option></select></td>
                    <td><input type="text" class="impactDesc" placeholder="具体影响"></td>
                    <td><button type="button" class="btn btn-sm btn-danger removeRow">删除</button></td>
                `;
                newRow.querySelector('.assetClass').value = imp.asset_class;
                if (imp.industry) newRow.querySelector('.industry').value = imp.industry;
                newRow.querySelector('.impactDirection').value = imp.direction;
                newRow.querySelector('.impactLevel').value = imp.level;
                newRow.querySelector('.expectedDuration').value = imp.duration;
                newRow.querySelector('.impactDesc').value = imp.desc;
                impactBody.appendChild(newRow);
                attachRemoveEvent(newRow.querySelector('.removeRow'));
            }
        }

        // 填充来源子表
        let sourceBody = document.getElementById('sourceBody');
        sourceBody.innerHTML = '';
        if (parsed.sources.length === 0) {
            addSourceRow();
        } else {
            for (let src of parsed.sources) {
                let newRow = document.createElement('tr');
                newRow.className = 'source-row';
                newRow.innerHTML = `
                    <td><input type="text" class="sourceName" placeholder="新华社"></td>
                    <td><input type="url" class="sourceUrl" placeholder="https://..."></td>
                    <td><input type="text" class="author" placeholder="作者"></td>
                    <td><input type="datetime-local" class="publishTime"></td>
                    <td><input type="text" class="excerpt" placeholder="关键摘录"></td>
                    <td><button type="button" class="btn btn-sm btn-danger removeSourceRow">删除</button></td>
                `;
                if (src.source_name) newRow.querySelector('.sourceName').value = src.source_name;
                if (src.author) newRow.querySelector('.author').value = src.author;
                if (src.publish_time) newRow.querySelector('.publishTime').value = src.publish_time;
                if (src.excerpt) newRow.querySelector('.excerpt').value = src.excerpt;
                sourceBody.appendChild(newRow);
                attachSourceRemoveEvent(newRow.querySelector('.removeSourceRow'));
            }
        }
    }

    // 智能解析入口
    function onParse() {
        let rawText = document.getElementById('rawNewsInput').value.trim();
        if (!rawText) {
            alert('请先粘贴信息全文');
            return;
        }
        let parsed = parseNewsToForm(rawText);
        fillForm(parsed);
        document.getElementById('messageArea').innerHTML = '<div class="success-msg">✅ 解析完成，请检查并修改表单，然后提交。</div>';
    }

    // 从表单获取提交数据
    function getPayloadFromForm() {
        let main = {
            user_id: parseInt(document.getElementById('userId').value) || 1,
            event_time: document.getElementById('eventTime').value,
            title: document.getElementById('title').value,
            source: document.getElementById('source').value,
            region: document.getElementById('region').value,
            country_involved: document.getElementById('countryInvolved').value.split(',').map(s=>s.trim()).filter(s=>s),
            event_type: document.getElementById('eventType').value,
            severity_level: parseInt(document.getElementById('severityLevel').value),
            description: document.getElementById('description').value,
            impact_summary: document.getElementById('impactSummary').value,
            risk_score: document.getElementById('riskScore').value ? parseFloat(document.getElementById('riskScore').value) : null,
            tags: document.getElementById('tags').value.split(',').map(s=>s.trim()).filter(s=>s),
            raw_content: document.getElementById('rawContent').value
        };
        let impacts = [];
        document.querySelectorAll('#impactBody .impact-row').forEach(row => {
            impacts.push({
                asset_class: row.querySelector('.assetClass').value,
                industry: row.querySelector('.industry').value,
                impact_direction: row.querySelector('.impactDirection').value,
                impact_level: parseInt(row.querySelector('.impactLevel').value),
                expected_duration: row.querySelector('.expectedDuration').value,
                description: row.querySelector('.impactDesc').value
            });
        });
        let sources = [];
        document.querySelectorAll('#sourceBody .source-row').forEach(row => {
            let srcName = row.querySelector('.sourceName').value.trim();
            if (srcName) {
                sources.push({
                    source_name: srcName,
                    source_url: row.querySelector('.sourceUrl').value,
                    author: row.querySelector('.author').value,
                    publish_time: row.querySelector('.publishTime').value,
                    excerpt: row.querySelector('.excerpt').value
                });
            }
        });
        return { event: main, impact_assessments: impacts, sources: sources };
    }

    function previewJSON() {
        let payload = getPayloadFromForm();
        let previewDiv = document.getElementById('previewArea');
        previewDiv.style.display = 'block';
        previewDiv.textContent = JSON.stringify(payload, null, 2);
    }

    // ========== 提交数据到后端 ==========
    function submitData() {
        let payload = getPayloadFromForm();
        if (!payload.event.title) {
            alert('标题不能为空');
            return;
        }
        if (!payload.event.event_time) {
            alert('事件时间不能为空');
            return;
        }
        if (payload.event.country_involved.length === 0) {
            alert('至少填写一个国家/地区');
            return;
        }

        // 请根据您的实际情况修改下面的URL
        const API_URL = 'http://192.168.0.106:8000/submit.php';
        // 如果使用 Tailscale，请改为：'http://100.105.237.93:8000/submit.php'

        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('messageArea').innerHTML = `<div class="success-msg">✅ 提交成功！事件ID: ${data.event_id}</div>`;
                // 可选：清空表单或跳转
                // clearForm();
            } else {
                document.getElementById('messageArea').innerHTML = `<div class="error-msg">❌ 提交失败: ${data.error}</div>`;
            }
        })
        .catch(err => {
            document.getElementById('messageArea').innerHTML = `<div class="error-msg">❌ 网络错误: ${err.message}</div>`;
        });
    }

    // 初始化事件绑定与示例数据
    function initGeoEnv() {
        // 只在 GeoEnv 页面存在对应元素时才执行
        if (!document.getElementById('parseBtn')) return;

        document.getElementById('parseBtn').addEventListener('click', onParse);
        document.getElementById('clearFormBtn').addEventListener('click', clearForm);
        document.getElementById('addImpactRow').addEventListener('click', addImpactRow);
        document.getElementById('addSourceRow').addEventListener('click', addSourceRow);
        document.getElementById('previewBtn').addEventListener('click', previewJSON);
        document.getElementById('geoForm').addEventListener('submit', (e) => { e.preventDefault(); submitData(); });

        let exampleNews = `新华社北京6月5日电 中共中央政治局委员、全国人大常委会副委员长李鸿忠5日在京会见缅甸外交部长丁貌瑞。李鸿忠表示，习近平主席同敏昂莱阁下去年两次会晤，推动中缅命运共同体建设走深走实。中方将一如既往支持缅方走好符合本国国情的发展道路，愿深化全面战略合作，加强立法机构友好交往，促进民心相通，推动中缅关系持续向前发展。丁貌瑞表示，缅甸坚定恪守一个中国原则，愿弘扬胞波情谊，共同落实四大全球倡议，深化务实合作，促进立法机构交流。（新华社）`;
        document.getElementById('rawNewsInput').value = exampleNews;

        clearForm();
        document.getElementById('rawNewsInput').value = exampleNews;
        setTimeout(() => { onParse(); }, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGeoEnv);
    } else {
        initGeoEnv();
    }
})();


/* ==================================================================
   FxCap — 為替・金利・株債分析ダッシュボード
   功能：图表渲染、数据展示、市场模拟
   ================================================================== */
(function() {
    // 只在 FxCap 页面存在对应元素时才执行
    if (!document.getElementById('forexChart')) return;

    // ---------- 模拟数据集: 汇率 (USD/JPY最近7天) ----------
    const forexData = [141.82, 142.15, 142.58, 142.30, 141.95, 142.62, 143.05];
    // 利率板块 (短期利率 日本无担保隔夜拆借利率 模拟趋势%)
    const shortRateData = [0.070, 0.072, 0.073, 0.074, 0.076, 0.078, 0.080];
    // 股票数据 (日经225模拟)
    const stockData = [38720, 38850, 39140, 39020, 39280, 39350, 39210];
    // 债券数据 (日本10年国债收益率%)
    const bondData = [0.855, 0.862, 0.874, 0.881, 0.896, 0.905, 0.910];

    // 辅助函数: 计算最新值和涨跌(与前一日比较)
    function getLatestAndChange(arr) {
        if (!arr.length) return { latest: 0, change: 0, changePercent: 0 };
        const latest = arr[arr.length - 1];
        const prev = arr[arr.length - 2] || latest;
        const change = latest - prev;
        const changePercent = (change / prev) * 100;
        return { latest, change, changePercent };
    }

    // 汇率最新数据
    const usdJpyStat = getLatestAndChange(forexData);
    const shortRateStat = getLatestAndChange(shortRateData);
    const nikkeiStat = getLatestAndChange(stockData);
    const bondStat = getLatestAndChange(bondData);

    // 显示主要数值与变化
    const usdJpyValueElem = document.getElementById('usdJpyValue');
    const usdJpyChangeElem = document.getElementById('usdJpyChange');
    if (usdJpyValueElem) usdJpyValueElem.innerText = usdJpyStat.latest.toFixed(2);
    if (usdJpyChangeElem) {
        const chg = usdJpyStat.change;
        const chgPct = usdJpyStat.changePercent;
        const sign = chg >= 0 ? '+' : '';
        const className = chg >= 0 ? 'positive' : 'negative';
        usdJpyChangeElem.innerText = `${sign}${chg.toFixed(2)} (${sign}${chgPct.toFixed(2)}%)`;
        usdJpyChangeElem.className = `change-badge ${className}`;
    }

    // 短期利率显示 (百分比)
    const shortRateElem = document.getElementById('shortRateVal');
    const shortRateChangeElem = document.getElementById('shortRateChange');
    if (shortRateElem) shortRateElem.innerText = shortRateStat.latest.toFixed(3) + '%';
    if (shortRateChangeElem) {
        const chg = shortRateStat.change;
        const chgPct = shortRateStat.changePercent;
        const sign = chg >= 0 ? '+' : '';
        const className = chg >= 0 ? 'positive' : 'negative';
        shortRateChangeElem.innerText = `${sign}${chg.toFixed(3)}% (${sign}${chgPct.toFixed(2)}%)`;
        shortRateChangeElem.className = `change-badge ${className}`;
    }

    // 日经指数
    const nikkeiElem = document.getElementById('nikkeiVal');
    const nikkeiChangeElem = document.getElementById('nikkeiChange');
    if (nikkeiElem) nikkeiElem.innerText = Math.round(nikkeiStat.latest).toLocaleString();
    if (nikkeiChangeElem) {
        const chg = nikkeiStat.change;
        const chgPct = nikkeiStat.changePercent;
        const sign = chg >= 0 ? '+' : '';
        const className = chg >= 0 ? 'positive' : 'negative';
        nikkeiChangeElem.innerText = `${sign}${Math.abs(chg).toFixed(0)} (${sign}${chgPct.toFixed(2)}%)`;
        nikkeiChangeElem.className = `change-badge ${className}`;
    }

    // 债券收益率显示
    const bondYieldElem = document.getElementById('jgb10YVal');
    const bondChangeBadge = document.getElementById('bondYieldChangeBadge');
    if (bondYieldElem) bondYieldElem.innerText = bondStat.latest.toFixed(3) + '%';
    if (bondChangeBadge) {
        const chg = bondStat.change;
        const chgPct = bondStat.changePercent;
        const sign = chg >= 0 ? '+' : '';
        const className = chg >= 0 ? 'positive' : 'negative';
        bondChangeBadge.innerText = `${sign}${chg.toFixed(3)}% (${sign}${chgPct.toFixed(2)}%)`;
        bondChangeBadge.className = `change-badge ${className}`;
    }

    // 债券板块中右侧参考也显示相同动态
    const bondYieldRefSpan = document.getElementById('bondYieldRef');
    const bondYieldChgRef = document.getElementById('bondYieldChgRef');
    if(bondYieldRefSpan) bondYieldRefSpan.innerText = bondStat.latest.toFixed(2) + '%';
    if(bondYieldChgRef) {
        const sign = bondStat.change >= 0 ? '+' : '';
        bondYieldChgRef.innerText = `${sign}${bondStat.change.toFixed(2)}bp`;
        bondYieldChgRef.style.color = bondStat.change >= 0 ? '#0e7c32' : '#c2412c';
    }

    // 其他汇率模拟数据（交叉盘）
    const crossRates = {
        eurJpy: { now: 155.34, prev: 155.02 },
        gbpJpy: { now: 185.92, prev: 185.45 },
        audJpy: { now: 94.78, prev: 94.52 }
    };
    function setCrossRate(id, now, prev) {
        const elem = document.getElementById(id);
        const changeSpan = document.getElementById(id+'Chg');
        if(elem) elem.innerText = now.toFixed(2);
        if(changeSpan) {
            const diff = now - prev;
            const sign = diff >= 0 ? '+' : '';
            const colorClass = diff >= 0 ? 'positive' : 'negative';
            changeSpan.innerText = `${sign}${diff.toFixed(2)}`;
            changeSpan.style.color = diff >= 0 ? '#0e7c32' : '#c2412c';
            changeSpan.style.fontWeight = '500';
        }
    }
    setCrossRate('eurJpyVal', crossRates.eurJpy.now, crossRates.eurJpy.prev);
    setCrossRate('gbpJpyVal', crossRates.gbpJpy.now, crossRates.gbpJpy.prev);
    setCrossRate('audJpyVal', crossRates.audJpy.now, crossRates.audJpy.prev);

    // 补充TOPIX微动展示
    const topixSpan = document.getElementById('topixVal');
    if(topixSpan) topixSpan.innerText = '2,721';
    const topixChgSpan = document.getElementById('topixChg');
    if(topixChgSpan) topixChgSpan.innerHTML = '+0.31%';

    // ---------- 所有图表初始化 ----------
    const labels = ['06/09', '06/10', '06/11', '06/12', '06/13', '06/14', '06/15'];

    // 汇率图: USD/JPY
    const forexCtx = document.getElementById('forexChart').getContext('2d');
    new Chart(forexCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'USD/JPY',
                data: forexData,
                borderColor: '#2c6e9e',
                backgroundColor: 'rgba(44, 110, 158, 0.05)',
                borderWidth: 2.5,
                pointRadius: 3,
                pointBackgroundColor: '#2c6e9e',
                pointBorderColor: '#fff',
                tension: 0.2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } }, tooltip: { mode: 'index' } },
            scales: { y: { grid: { color: '#e9edf2' }, title: { display: true, text: 'JPY / USD', font: { size: 9 } } } }
        }
    });

    // 利率图表 (短期利率 %)
    const rateCtx = document.getElementById('rateChart').getContext('2d');
    new Chart(rateCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '短期金利 (日本無担保O/N %)',
                data: shortRateData,
                borderColor: '#2f8b5a',
                backgroundColor: 'rgba(47, 139, 90, 0.05)',
                borderWidth: 2.5,
                pointRadius: 3,
                fill: true,
                tension: 0.2,
            }]
        },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' } }, scales: { y: { ticks: { callback: (val) => val + '%' } } } }
    });

    // 股票图表 (日经225)
    const stockCtx = document.getElementById('stockChart').getContext('2d');
    new Chart(stockCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '日経平均 (Nikkei 225)',
                data: stockData,
                borderColor: '#db7e2a',
                backgroundColor: 'rgba(219, 126, 42, 0.03)',
                borderWidth: 2.5,
                pointRadius: 3,
                fill: true,
                tension: 0.2,
            }]
        },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' } }, scales: { y: { ticks: { callback: (val) => val.toLocaleString() } } } }
    });

    // 债券图表 (日本10年国债收益率)
    const bondCtx = document.getElementById('bondChart').getContext('2d');
    new Chart(bondCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '日本10年国債利回り (%)',
                data: bondData,
                borderColor: '#5f6caf',
                backgroundColor: 'rgba(95, 108, 175, 0.05)',
                borderWidth: 2.5,
                pointRadius: 3,
                fill: true,
                tension: 0.2,
            }]
        },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' } }, scales: { y: { ticks: { callback: (val) => val + '%' } } } }
    });

    // 附加：利率板块参考国债收益率变化
    const bondDiff = bondStat.change;
    const bondRefChgSpan = document.getElementById('bondYieldChgRef');
    if(bondRefChgSpan) {
        const signB = bondDiff >= 0 ? '+' : '';
        bondRefChgSpan.innerText = `${signB}${bondDiff.toFixed(2)}bp`;
        bondRefChgSpan.style.color = bondDiff >= 0 ? '#0e7c32' : '#c2412c';
    }
})();
