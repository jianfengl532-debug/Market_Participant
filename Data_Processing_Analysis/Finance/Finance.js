/* ============================================================
   Finance.js — 金融数据模块 · 价格支撑/压力查询 & 现货信息
   功能：代码检索、斐波那契计算、记录管理
   风格统一于 InvStrat.js 体系
   ============================================================ */
(function () {
    'use strict';

    // ============================================================
    //  配置
    // ============================================================
    var _cfg = window.API_CONFIG || { baseUrl: 'http://' + (window.location.hostname || 'localhost') + ':8000', apiKey: '' };
    var API = _cfg.baseUrl.replace(/\/+$/, '') + '/Price_Data/api.php';
    var API_KEY = _cfg.apiKey;
    var STORAGE_KEY = 'finance_price_records';

    var FIB = [
        { v: 0.236, l: '0.236' },
        { v: 0.382, l: '0.382' },
        { v: 0.500, l: '0.500' },
        { v: 0.618, l: '0.618', gold: true },
        { v: 0.786, l: '0.786' },
        { v: 1.272, l: '1.272' },
        { v: 1.618, l: '1.618', gold: true }
    ];

    var _records = [];
    var _known = [];

    // ============================================================
    //  工具
    // ============================================================
    function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

    function nowISO() {
        var d = new Date();
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        return d.toISOString().slice(0,16);
    }

    function $(id) { return document.getElementById(id); }
    function qs(sel, ctx) { return (ctx||document).querySelector(sel); }

    // ============================================================
    //  Toast
    // ============================================================
    function toast(text, type) {
        type = type||'info';
        var c = $('msgArea');
        if (!c) { c = document.createElement('div'); c.id='msgArea'; c.className='message-area'; document.body.appendChild(c); }
        var t = document.createElement('div');
        t.className = 'message-toast ' + type;
        var icons = {success:'✅',error:'❌',info:'ℹ️',warning:'⚠️'};
        t.innerHTML = (icons[type]||'') + ' ' + text;
        c.appendChild(t);
        setTimeout(function(){ t.style.animation='slideOut 0.3s forwards'; setTimeout(function(){t.remove()},300); }, 3500);
    }

    // ============================================================
    //  本地存储
    // ============================================================
    function loadLocal() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'); } catch(e) { return []; }
    }
    function saveLocal(records) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); } catch(e) {}
    }

    // ============================================================
    //  API
    // ============================================================
    function queryAPI(code) {
        return fetch(API+'?action=query&code='+encodeURIComponent(code), { headers: { 'X-API-Key': API_KEY } })
            .then(function(r){return r.json();})
            .then(function(res){
                if (res.success) return res.records||res.data||[];
                return queryLocal(code);
            })
            .catch(function(){ return queryLocal(code); });
    }

    function queryLocal(code) {
        if (!code) return [];
        var c = code.trim().toLowerCase();
        return loadLocal().filter(function(r){ return ((r.data||r).code||'').toLowerCase()===c; });
    }

    function fetchAll() {
        return fetch(API+'?action=list', { headers: { 'X-API-Key': API_KEY } })
            .then(function(r){return r.json();})
            .then(function(res){
                if (res.success) return res.records||res.data||[];
                return loadLocal();
            })
            .catch(function(){ return loadLocal(); });
    }

    function delRecord(id) {
        return fetch(API+'?action=delete&id='+id, {method:'POST', headers: { 'X-API-Key': API_KEY }})
            .then(function(r){return r.json();})
            .then(function(){ return true; })
            .catch(function(){
                var rs = loadLocal().filter(function(r){ return String(r.id)!==String(id); });
                saveLocal(rs); _records=rs; return true;
            });
    }

    // ============================================================
    //  斐波那契计算
    // ============================================================
    function calcFib(prices) {
        var r = [];
        for (var p=0; p<prices.length; p++) {
            var price = parseFloat(prices[p])||0;
            if (price===0) continue;
            for (var m=0; m<FIB.length; m++) {
                r.push({
                    pi: p+1, price: price,
                    mult: FIB[m].v, mlab: FIB[m].l,
                    result: price * FIB[m].v,
                    gold: !!FIB[m].gold
                });
            }
        }
        r.sort(function(a,b){ return b.result - a.result; });
        return r;
    }

    function renderResults(results, containerId) {
        var el = $(containerId);
        if (!el) return;
        if (!results||!results.length) {
            el.innerHTML = '<div class="calc-empty"><div class="icon">📊</div><p>输入代码后自动计算</p></div>';
            return;
        }
        var h = '<div class="results-wrap"><table><thead><tr><th>#</th><th>来源</th><th>价格</th><th>乘数</th><th>位</th></tr></thead><tbody>';
        for (var i=0; i<results.length; i++) {
            var r = results[i];
            h += '<tr'+(r.gold?' class="gold-row"':'')+'>'
                + '<td>'+(i+1)+'</td><td>P'+r.pi+'</td><td>'+r.price.toFixed(2)+'</td><td>'+r.mlab+'</td><td class="result-num">'+r.result.toFixed(2)+'</td></tr>';
        }
        h += '</tbody></table></div>';
        h += '<div class="calc-legend"><span><span class="gold-dot"></span> 金色 = 0.618 / 1.618（关键位）</span><span>乘数: 0.236 · 0.382 · 0.5 · 0.618 · 0.786 · 1.272 · 1.618</span></div>';
        el.innerHTML = h;
    }

    // ============================================================
    //  面板填充
    // ============================================================
    function setDisplay(id, val, isPrice) {
        var el = $(id);
        if (!el) return;
        if (val!==undefined && val!==null && val!=='') {
            el.textContent = isPrice ? parseFloat(val).toFixed(2) : String(val);
            el.className = 'display-box has-data' + (isPrice ? ' price-highlight' : '');
        } else {
            el.textContent = '—';
            el.className = 'display-box empty';
        }
    }

    function fillLeft(data) {
        setDisplay('sr_variety', data.variety);
        var prices = data.prices||data.price_list||[];
        for (var i=1; i<=5; i++) {
            setDisplay('sr_p'+i, prices[i-1]);
        }
        var calcPrices = [];
        for (var j=0; j<5; j++) calcPrices.push(prices[j]||0);
        renderResults(calcFib(calcPrices), 'sr_results');
    }

    function clearLeft() {
        setDisplay('sr_variety');
        for (var i=1; i<=5; i++) setDisplay('sr_p'+i);
        renderResults([], 'sr_results');
    }

    function fillRight(data) {
        setDisplay('sp_variety', data.variety);
        setDisplay('sp_model', data.model);
        setDisplay('sp_spec', data.spec);
        setDisplay('sp_quality', data.quality);
        setDisplay('sp_price', data.price, true);
    }

    function clearRight() {
        ['sp_variety','sp_model','sp_spec','sp_quality','sp_price'].forEach(function(id){ setDisplay(id); });
    }

    // ============================================================
    //  代码检索
    // ============================================================
    function search(side) {
        var code = $(side+'_code').value.trim();
        if (!code) { side==='sr'?clearLeft():clearRight(); return; }
        var sp = $(side+'_spinner');
        if (sp) sp.classList.add('show');

        queryAPI(code).then(function(records){
            if (sp) sp.classList.remove('show');
            if (records&&records.length) {
                var data = records[0].data||records[0];
                // 右侧（现货面板）：只接受有现货字段的数据
                if (side==='sp' && data._source!=='spot') {
                    clearRight();
                    toast('未找到「'+code+'」的现货数据','info');
                    return;
                }
                if (side==='sr') fillLeft(data);
                else fillRight(data);
                toast('已检索到「'+code+'」的数据','success');
            } else {
                side==='sr'?clearLeft():clearRight();
                toast('未找到「'+code+'」的记录','info');
            }
        });
    }

    // ============================================================
    //  代码建议
    // ============================================================
    function buildKnown() {
        _known = [];
        for (var i=0; i<_records.length; i++) {
            var d = _records[i].data||_records[i];
            var c = (d.code||'').trim().toUpperCase();
            if (c && !_known.some(function(k){return k.code===c;})) {
                _known.push({code:c, variety:d.variety||''});
            }
        }
    }

    function showSug(side, val) {
        var el = $(side+'_sug');
        if (!el) return;
        if (!val||!_known.length) { el.classList.remove('show'); return; }
        var v = val.trim().toUpperCase();
        var m = _known.filter(function(k){ return k.code.indexOf(v)!==-1 || (k.variety||'').indexOf(v)!==-1; });
        if (!m.length||m.length>10) { el.classList.remove('show'); return; }
        el.innerHTML = m.map(function(k){
            return '<div class="sug-item" data-code="'+esc(k.code)+'" data-side="'+side+'">'+esc(k.code)
                + (k.variety?'<span class="sug-meta">'+esc(k.variety)+'</span>':'')+'</div>';
        }).join('');
        el.classList.add('show');
    }

    // ============================================================
    //  记录列表
    // ============================================================
    function renderRecords(records) {
        var el = $('recordsList');
        if (!el) return;
        _records = records;
        buildKnown();

        var ft = ($('searchInput').value||'').trim().toLowerCase();
        if (!records||!records.length) {
            el.innerHTML = '<div class="empty-state"><div class="icon">📂</div><p>暂无数据</p><p class="text-muted" style="font-size:0.85rem;color:#8ba3bc;">在数据录入页添加记录后可见</p></div>';
            $('recordsCount').textContent='0'; $('recordsCountLabel').textContent='0';
            return;
        }
        var f = ft ? records.filter(function(r){return JSON.stringify(r.data||r).toLowerCase().indexOf(ft)!==-1;}) : records;
        $('recordsCount').textContent=f.length; $('recordsCountLabel').textContent=f.length;
        if (!f.length) { el.innerHTML='<div class="empty-state"><div class="icon">🔍</div><p>未找到匹配记录</p></div>'; return; }

        var h = '<div class="record-list">';
        for (var i=0; i<f.length; i++) {
            var rec = f[i], d = rec.data||rec, id = rec.id||i;
            var code = d.code||'-', variety = d.variety||'-', price = d.price||'-', createdAt = d.created_at||rec.created_at||'';
            h += '<div class="record-card" data-id="'+id+'">'
                + '<div class="record-header" onclick="PF.toggle(this)">'
                + '<span class="expand-icon">▶</span>'
                + '<div class="rec-info"><div class="rec-title">'+esc(code)+' · '+esc(variety)+'</div>'
                + '<div class="rec-meta">'+(createdAt?'<span>📅 '+esc(createdAt.slice(0,10))+'</span>':'')+(price!=='-'?'<span>💰 <strong>'+esc(price)+'</strong></span>':'')+'</div></div>'
                + '</div>'
                + '<div class="record-detail"><div class="record-detail-inner">'
                + '<div class="detail-field"><div class="det-label">代码</div><div class="det-value">'+esc(code)+'</div></div>'
                + '<div class="detail-field"><div class="det-label">品种</div><div class="det-value">'+esc(variety)+'</div></div>'
                + (d.model?'<div class="detail-field"><div class="det-label">型号</div><div class="det-value">'+esc(d.model)+'</div></div>':'')
                + (d.spec?'<div class="detail-field"><div class="det-label">规格</div><div class="det-value">'+esc(d.spec)+'</div></div>':'')
                + (d.quality?'<div class="detail-field"><div class="det-label">质量</div><div class="det-value">'+esc(d.quality)+'</div></div>':'')
                + (price!=='-'?'<div class="detail-field"><div class="det-label">价格</div><div class="det-value"><strong>'+esc(price)+'</strong></div></div>':'')
                + (createdAt?'<div class="detail-field"><div class="det-label">录入时间</div><div class="det-value">'+esc(createdAt)+'</div></div>':'')
                + '</div></div></div>';
        }
        h += '</div>';
        el.innerHTML = h;
    }

    function loadRecords() {
        var el=$('recordsList');
        if (el) el.innerHTML='<div class="loading-skeleton"><div class="skeleton-item"></div><div class="skeleton-item"></div></div>';
        fetchAll().then(renderRecords);
    }

    // ============================================================
    //  CRUD & 公开方法
    // ============================================================
    function loadToView(id) {
        var rec = null;
        for (var i=0; i<_records.length; i++) { if (String(_records[i].id)===String(id)) { rec=_records[i]; break; } }
        if (!rec) { toast('未找到该记录','error'); return; }
        var d = rec.data||rec;
        fillLeft(d); fillRight(d);
        if (d.code) { $('sr_code').value=d.code; $('sp_code').value=d.code; }
        window.scrollTo({top:0,behavior:'smooth'});
        toast('已加载记录到视图','success');
    }

    function deleteRec(id) {
        if (!confirm('确定删除此记录？')) return;
        delRecord(id).then(function(){ toast('已删除','success'); loadRecords(); });
    }

    function toggleRecord(header) {
        var card = header.closest('.record-card');
        if (card) card.classList.toggle('expanded');
    }

    function clearAll() {
        clearLeft(); clearRight();
        $('sr_code').value=''; $('sp_code').value='';
        toast('已清空','info');
    }

    // ============================================================
    //  防抖工具
    // ============================================================
    function debounce(fn, ms) {
        var t;
        return function(){ var a=arguments,c=this; clearTimeout(t); t=setTimeout(function(){fn.apply(c,a);},ms); };
    }

    // ============================================================
    //  初始化
    // ============================================================
    function init() {
        // 左侧代码检索
        var sr = $('sr_code');
        if (sr) {
            var srFn = debounce(function(){search('sr');}, 400);
            sr.addEventListener('input', function(e){
                showSug('sr', e.target.value);
                srFn();
            });
            sr.addEventListener('blur', function(){setTimeout(function(){var el=$('sr_sug');if(el)el.classList.remove('show');},200);});
            sr.addEventListener('keydown', function(e){if(e.key==='Enter')search('sr');});
        }

        // 右侧代码检索
        var sp = $('sp_code');
        if (sp) {
            var spFn = debounce(function(){search('sp');}, 400);
            sp.addEventListener('input', function(e){
                showSug('sp', e.target.value);
                spFn();
            });
            sp.addEventListener('blur', function(){setTimeout(function(){var el=$('sp_sug');if(el)el.classList.remove('show');},200);});
            sp.addEventListener('keydown', function(e){if(e.key==='Enter')search('sp');});
        }

        // 建议点击委托
        document.addEventListener('click', function(e){
            var item = e.target.closest('.sug-item');
            if (item) {
                var code = item.dataset.code, side = item.dataset.side;
                $(side+'_code').value = code;
                $(side+'_sug').classList.remove('show');
                search(side);
            }
        });

        // 搜索
        var si = $('searchInput');
        if (si) si.addEventListener('input', function(){ renderRecords(_records); });

        // 刷新
        var rf = $('refreshBtn');
        if (rf) rf.addEventListener('click', loadRecords);

        // 加载初始数据
        loadRecords();
    }

    // ============================================================
    //  全局暴露
    // ============================================================
    window.PF = {
        init: init,
        toggle: toggleRecord,
        del: deleteRec,
        load: loadToView,
        clearAll: clearAll
    };
})();
