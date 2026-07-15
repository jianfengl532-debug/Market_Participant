/* ============================================================
   script.js — 工具库页面交互逻辑（数据库版）
   包含：卡片渲染、三段式下载弹窗（支付→解锁码→验证→下载）
   API 对接后端 get_tool.php
   ============================================================ */

// ============================================================
// 0. API 配置（自动适配开发/生产环境）
// ============================================================
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:8000/Lucifer_Data'
    : 'https://jefflu.tail9f69ce.ts.net/Lucifer_Data';

// ============================================================
// 1. 工具数据（仅用于展示卡片，不含下载链接）
// ============================================================
const tools = [
    {
        id: 1,
        name: 'PDF 合并助手',
        icon: '📄',
        desc: '一键合并多个PDF文件，支持自定义顺序和页码范围。',
        tags: ['办公', 'PDF'],
        version: 'v2.3'
    },
    {
        id: 2,
        name: '图片批量压缩',
        icon: '🖼️',
        desc: '批量压缩JPG/PNG，保持画质前提下减小体积，支持WebP。',
        tags: ['图像', '效率'],
        version: 'v1.8'
    },
    {
        id: 3,
        name: 'Excel 拆分工具',
        icon: '📊',
        desc: '按指定列拆分Excel工作表为独立文件，支持大数据量。',
        tags: ['办公', '数据处理'],
        version: 'v3.1'
    },
    {
        id: 4,
        name: '文本差异对比',
        icon: '🔍',
        desc: '快速对比两份文本的差异，高亮显示增删改，支持大文件。',
        tags: ['开发', '文本'],
        version: 'v1.2'
    },
    {
        id: 5,
        name: '视频转GIF',
        icon: '🎬',
        desc: '将视频片段转为高质量GIF动画，可调节帧率和尺寸。',
        tags: ['多媒体', '转换'],
        version: 'v2.0'
    },
    {
        id: 6,
        name: 'JSON 格式化工具',
        icon: '📋',
        desc: '在线JSON校验、格式化、压缩，支持树形视图和错误定位。',
        tags: ['开发', 'JSON'],
        version: 'v1.5'
    },
    {
        id: 7,
        name: '007 初露锋芒',
        icon: '🔫',
        desc: '这是一个示例工具，点击卡片跳转到详情页。',
        tags: ['示例', '演示'],
        version: 'v1.0'
    }
];

// ============================================================
// 2. 卡片渲染
// ============================================================
const grid = document.getElementById('toolGrid');

function renderCards() {
    if (!grid) return;
    grid.innerHTML = '';
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.id = tool.id;
        card.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-desc">${tool.desc}</div>
            <div class="tool-tags">${tool.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <div class="tool-footer">
                <span class="tool-version">${tool.version}</span>
                <button class="btn-download" data-id="${tool.id}">下载</button>
            </div>
        `;
        grid.appendChild(card);
    });
}
renderCards();

// ============================================================
// 3. 弹窗控制（三段式：支付 → 解锁码 → 下载）
// ============================================================
const modal = document.getElementById('downloadModal');
const modalClose = document.getElementById('modalCloseBtn');
const modalToolName = document.getElementById('modalToolName');
const modalLink = document.getElementById('modalLink');
const modalExtract = document.getElementById('modalExtract');
const modalSub = document.getElementById('modalSub');

const paySection = document.getElementById('paySection');
const unlockSection = document.getElementById('unlockSection');
const downloadSection = document.getElementById('downloadSection');

const mockPayBtn = document.getElementById('mockPayBtn');
const unlockCodeDisplay = document.getElementById('unlockCodeDisplay');
const unlockInput = document.getElementById('unlockInput');
const verifyUnlockBtn = document.getElementById('verifyUnlockBtn');
const unlockError = document.getElementById('unlockError');

// 存储当前工具信息
let pendingTool = null;
let pendingToolId = null;

/**
 * 打开下载弹窗（初始显示支付区）
 */
function showToolModal(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) {
        alert('未找到该工具');
        return;
    }

    pendingTool = tool;
    pendingToolId = toolId;

    // 重置：显示支付区，隐藏其他
    paySection.style.display = 'block';
    unlockSection.style.display = 'none';
    downloadSection.style.display = 'none';
    unlockError.textContent = '';
    unlockInput.value = '';

    modal.classList.add('active');
}

/**
 * 支付确认：调用后端生成解锁码
 */
async function confirmPayment() {
    if (!pendingToolId) {
        alert('未找到工具信息，请重新打开弹窗');
        return;
    }

    mockPayBtn.disabled = true;
    mockPayBtn.textContent = '⏳ 正在生成解锁码...';

    try {
        const response = await fetch(`${API_BASE}/get_tool.php?action=request_code&tool_id=${pendingToolId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'mk_jfl_a8f3c9e2b7d4p6q5r1'
            },
            body: JSON.stringify({ tool_id: pendingToolId })
        });
        const data = await response.json();

        if (!data.success) {
            alert('获取解锁码失败：' + (data.error || '未知错误'));
            mockPayBtn.disabled = false;
            mockPayBtn.textContent = '✅ 我已支付，获取解锁码';
            return;
        }

        // 显示解锁码
        unlockCodeDisplay.textContent = data.unlock_code;
        paySection.style.display = 'none';
        unlockSection.style.display = 'block';
        unlockInput.focus();

    } catch (error) {
        console.error('请求解锁码失败:', error);
        alert('网络错误，请稍后重试');
    } finally {
        mockPayBtn.disabled = false;
        mockPayBtn.textContent = '✅ 我已支付，获取解锁码';
    }
}

/**
 * 验证解锁码
 */
async function verifyUnlockCode() {
    const code = unlockInput.value.trim().toUpperCase();
    if (code === '') {
        unlockError.textContent = '请输入解锁码';
        return;
    }

    verifyUnlockBtn.disabled = true;
    verifyUnlockBtn.textContent = '⏳ 验证中...';
    unlockError.textContent = '';

    try {
        const response = await fetch(`${API_BASE}/get_tool.php?action=verify_code&tool_id=${pendingToolId}&code=${encodeURIComponent(code)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': 'mk_jfl_a8f3c9e2b7d4p6q5r1'
            },
            body: JSON.stringify({ tool_id: pendingToolId, code: code })
        });
        const data = await response.json();

        if (!data.success) {
            unlockError.textContent = data.error || '验证失败';
            unlockInput.value = '';
            unlockInput.focus();
            return;
        }

        // 验证通过，显示下载区
        unlockSection.style.display = 'none';
        downloadSection.style.display = 'block';

        modalToolName.textContent = data.name || pendingTool.name;
        modalSub.textContent = '感谢支持，点击下方链接下载';
        modalLink.href = data.download_link;
        modalLink.textContent = data.download_link;
        modalExtract.textContent = data.extract_code ? `提取码：${data.extract_code}` : '无需提取码';

    } catch (error) {
        console.error('验证解锁码失败:', error);
        unlockError.textContent = '网络错误，请稍后重试';
    } finally {
        verifyUnlockBtn.disabled = false;
        verifyUnlockBtn.textContent = '验证';
    }
}

/**
 * 关闭弹窗
 */
function closeModal() {
    modal.classList.remove('active');
    // 重置输入状态
    unlockError.textContent = '';
    unlockInput.value = '';
}

/**
 * 赞赏弹窗
 */
function showDonateModal() {
    alert('☕ 感谢支持！\n如果这些小工具帮到了你，欢迎请我喝杯咖啡～');
}

// ============================================================
// 4. 事件绑定
// ============================================================

// 4.1 下载按钮 — 触发弹窗
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-download')) {
        const id = parseInt(e.target.dataset.id);
        showToolModal(id);
    }
});

// 4.2 卡片点击跳转详情
document.addEventListener('click', function (e) {
    if (e.target.closest('.btn-download')) return;
    const card = e.target.closest('.tool-card');
    if (!card) return;
    const toolId = parseInt(card.dataset.id);
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
        window.location.href = `detail.html?name=${encodeURIComponent(tool.name)}`;
    }
});

// 4.3 支付按钮
if (mockPayBtn) {
    mockPayBtn.addEventListener('click', confirmPayment);
}

// 4.4 验证解锁码按钮
if (verifyUnlockBtn) {
    verifyUnlockBtn.addEventListener('click', verifyUnlockCode);
}

// 4.5 回车触发验证
if (unlockInput) {
    unlockInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            verifyUnlockCode();
        }
    });
}

// 4.6 赞赏按钮
const donateBtn = document.getElementById('donateSideBtn');
if (donateBtn) {
    donateBtn.addEventListener('click', showDonateModal);
}

// 4.7 关闭按钮
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// 4.8 点击遮罩关闭
if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });
}
