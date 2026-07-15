/* ============================================================
   script.js — 工具库页面交互逻辑
   包含：卡片渲染、三段式下载弹窗（支付→解锁码→下载）
   ============================================================ */

// ============================================================
// 1. 工具数据（包含链接和提取码，用于演示）
// ============================================================
const tools = [
    {
        id: 1,
        name: 'PDF 合并助手',
        icon: '📄',
        desc: '一键合并多个PDF文件，支持自定义顺序和页码范围。',
        tags: ['办公', 'PDF'],
        version: 'v2.3',
        link: 'https://pan.baidu.com/s/1abc123',
        extract: 'abcd'
    },
    {
        id: 2,
        name: '图片批量压缩',
        icon: '🖼️',
        desc: '批量压缩JPG/PNG，保持画质前提下减小体积，支持WebP。',
        tags: ['图像', '效率'],
        version: 'v1.8',
        link: 'https://pan.baidu.com/s/1xyz789',
        extract: 'efgh'
    },
    {
        id: 3,
        name: 'Excel 拆分工具',
        icon: '📊',
        desc: '按指定列拆分Excel工作表为独立文件，支持大数据量。',
        tags: ['办公', '数据处理'],
        version: 'v3.1',
        link: 'https://pan.baidu.com/s/1def456',
        extract: 'ijkl'
    },
    {
        id: 4,
        name: '文本差异对比',
        icon: '🔍',
        desc: '快速对比两份文本的差异，高亮显示增删改，支持大文件。',
        tags: ['开发', '文本'],
        version: 'v1.2',
        link: 'https://pan.baidu.com/s/1ghi789',
        extract: 'mnop'
    },
    {
        id: 5,
        name: '视频转GIF',
        icon: '🎬',
        desc: '将视频片段转为高质量GIF动画，可调节帧率和尺寸。',
        tags: ['多媒体', '转换'],
        version: 'v2.0',
        link: 'https://pan.baidu.com/s/1jkl012',
        extract: 'qrst'
    },
    {
        id: 6,
        name: 'JSON 格式化工具',
        icon: '📋',
        desc: '在线JSON校验、格式化、压缩，支持树形视图和错误定位。',
        tags: ['开发', 'JSON'],
        version: 'v1.5',
        link: 'https://pan.baidu.com/s/1mno345',
        extract: 'uvwx'
    },
    {
        id: 7,
        name: '007 初露锋芒',
        icon: '🔫',
        desc: '这是一个示例工具，点击卡片跳转到详情页。',
        tags: ['示例', '演示'],
        version: 'v1.0',
        link: 'https://pan.baidu.com/s/examaple007',
        extract: '007'
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
// 3. 弹窗控制（三段式）
// ============================================================
const modal = document.getElementById('downloadModal');
const modalClose = document.getElementById('modalCloseBtn');
const modalToolName = document.getElementById('modalToolName');
const modalSub = document.getElementById('modalSub');
const modalLink = document.getElementById('modalLink');
const modalExtract = document.getElementById('modalExtract');

// 三个区域的元素
const paySection = document.getElementById('paySection');
const unlockSection = document.getElementById('unlockSection');
const downloadSection = document.getElementById('downloadSection');

// 支付按钮
const mockPayBtn = document.getElementById('mockPayBtn');

// 解锁码相关
const unlockCodeDisplay = document.getElementById('unlockCodeDisplay');
const unlockInput = document.getElementById('unlockInput');
const verifyUnlockBtn = document.getElementById('verifyUnlockBtn');
const unlockError = document.getElementById('unlockError');

// 存储当前工具和生成的解锁码
let pendingTool = null;
let currentUnlockCode = '';

/**
 * 生成随机解锁码（格式：XXXX-XXXX）
 */
function generateUnlockCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let part1 = '', part2 = '';
    for (let i = 0; i < 4; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return part1 + '-' + part2;
}

/**
 * 打开下载弹窗（初始显示支付区）
 */
function showToolModal(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;

    pendingTool = tool;
    // 生成新的解锁码
    currentUnlockCode = generateUnlockCode();

    // 重置所有区域：显示支付区，隐藏其他
    paySection.style.display = 'block';
    unlockSection.style.display = 'none';
    downloadSection.style.display = 'none';

    // 清空错误提示和输入框
    unlockError.textContent = '';
    unlockInput.value = '';
    // 更新解锁码显示
    unlockCodeDisplay.textContent = currentUnlockCode;

    modal.classList.add('active');
}

/**
 * 支付确认（模拟）：切换到解锁码验证区
 */
function confirmPayment() {
    if (!pendingTool) {
        alert('未找到工具信息，请重新打开弹窗');
        return;
    }
    // 隐藏支付区，显示解锁码区
    paySection.style.display = 'none';
    unlockSection.style.display = 'block';
    downloadSection.style.display = 'none';
    // 清空错误和输入框
    unlockError.textContent = '';
    unlockInput.value = '';
    // 聚焦输入框
    unlockInput.focus();
}

/**
 * 验证解锁码
 */
function verifyUnlockCode() {
    const inputValue = unlockInput.value.trim().toUpperCase();
    if (inputValue === '') {
        unlockError.textContent = '请输入解锁码';
        return;
    }
    if (inputValue === currentUnlockCode) {
        // 验证通过，显示下载区
        unlockError.textContent = '';
        unlockSection.style.display = 'none';
        downloadSection.style.display = 'block';

        // 填充下载信息
        modalToolName.textContent = pendingTool.name;
        modalSub.textContent = '感谢支持，点击下方链接下载';
        modalLink.href = pendingTool.link;
        modalLink.textContent = pendingTool.link;
        modalExtract.textContent = `提取码：${pendingTool.extract}`;
    } else {
        unlockError.textContent = '解锁码错误，请重新输入';
        unlockInput.value = '';
        unlockInput.focus();
    }
}

// 绑定支付按钮事件
if (mockPayBtn) {
    mockPayBtn.addEventListener('click', confirmPayment);
}

// 绑定验证按钮事件
if (verifyUnlockBtn) {
    verifyUnlockBtn.addEventListener('click', verifyUnlockCode);
}

// 输入框按回车键也可触发验证
if (unlockInput) {
    unlockInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            verifyUnlockCode();
        }
    });
}

/**
 * 关闭弹窗
 */
function closeModal() {
    modal.classList.remove('active');
    // 重置状态（可选）
    // 但下次打开会重新生成解锁码
}

/**
 * 赞赏弹窗（简单提示）
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

// 4.2 卡片点击跳转详情（所有卡片）
// 4.2 卡片点击跳转详情
document.addEventListener('click', function (e) {
    if (e.target.closest('.btn-download')) return;
    const card = e.target.closest('.tool-card');
    if (!card) return;
    const toolId = parseInt(card.dataset.id);
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
        // 判断是否为 id=7 的工具（007）
        let targetPage = 'detail.html';
        if (toolId === 7) {
            targetPage = 'detail%20copy.html'; // 如果文件名有空格，用 %20 编码
            // 或者重命名文件后使用 'detail_copy.html'
        }
        window.location.href = `${targetPage}?toolId=${toolId}`;
    }
});

// 4.3 赞赏按钮
document.getElementById('donateSideBtn').addEventListener('click', showDonateModal);

// 4.4 关闭按钮
modalClose.addEventListener('click', closeModal);

// 4.5 点击遮罩背景关闭
modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
});