/* ============================================================
   script.js — 工具库页面交互逻辑
   包含：卡片渲染、支付弹窗（预加载下载信息）、卡片点击跳转详情
   ============================================================ */

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
        name: '007 示例工具',
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
// 3. 弹窗控制（支付 + 下载，数据预加载）
// ============================================================
const modal = document.getElementById('downloadModal');
const modalClose = document.getElementById('modalCloseBtn');
const modalToolName = document.getElementById('modalToolName');
const modalLink = document.getElementById('modalLink');
const modalExtract = document.getElementById('modalExtract');
const modalSub = document.getElementById('modalSub');
const paySection = document.getElementById('paySection');
const downloadSection = document.getElementById('downloadSection');
const mockPayBtn = document.getElementById('mockPayBtn');

// 存储预加载的下载信息
let pendingDownload = null;

/**
 * 打开下载弹窗（先显示支付区域，并预加载下载信息）
 * @param {number} toolId
 */
async function showToolModal(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) {
        alert('未找到该工具');
        return;
    }

    // 重置弹窗状态：显示支付区域，隐藏下载区域
    paySection.style.display = 'block';
    downloadSection.style.display = 'none';
    modal.classList.add('active');

    // 预加载下载信息（异步）
    try {
        const response = await fetch(`/api/get_tool.php?name=${encodeURIComponent(tool.name)}`);
        const data = await response.json();
        if (data.error) {
            pendingDownload = { error: data.error };
        } else {
            pendingDownload = {
                link: data.download_link || '#',
                extract: data.extract_code || '无提取码',
                name: data.name || tool.name
            };
        }
    } catch (error) {
        console.error('预加载下载信息失败:', error);
        pendingDownload = { error: '网络错误，请重试' };
    }
}

/**
 * 模拟支付确认，显示下载信息（从预加载的数据中读取）
 */
function confirmPayment() {
    if (!pendingDownload) {
        alert('下载信息尚未加载，请稍后重试');
        return;
    }
    if (pendingDownload.error) {
        alert('获取下载信息失败：' + pendingDownload.error);
        return;
    }

    // 填充下载区域
    modalToolName.textContent = pendingDownload.name;
    modalSub.textContent = '感谢支持，点击下方链接下载';
    modalLink.href = pendingDownload.link;
    modalLink.textContent = pendingDownload.link;
    modalExtract.textContent = pendingDownload.extract ? `提取码：${pendingDownload.extract}` : '无提取码';

    // 切换显示
    paySection.style.display = 'none';
    downloadSection.style.display = 'block';
}

// 绑定模拟支付按钮
if (mockPayBtn) {
    mockPayBtn.addEventListener('click', confirmPayment);
}

/**
 * 打开赞赏弹窗（简单提示）
 */
function showDonateModal() {
    alert('☕ 感谢支持！\n如果这些小工具帮到了你，欢迎请我喝杯咖啡～');
}

/**
 * 关闭弹窗
 */
function closeModal() {
    modal.classList.remove('active');
    // 可选：关闭时重置状态（但保留 pendingDownload 以便下次复用，但下次打开会重新获取）
    // 这里不做重置，因为每次打开都会重新请求并覆盖 pendingDownload
}

// ============================================================
// 4. 事件绑定
// ============================================================

// 4.1 下载按钮（卡片上的 .btn-download）— 触发弹窗
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-download')) {
        const id = parseInt(e.target.dataset.id);
        showToolModal(id);
    }
});

// 4.2 卡片点击跳转详情（所有卡片）
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

// 4.3 赞赏按钮
document.getElementById('donateSideBtn').addEventListener('click', showDonateModal);

// 4.4 关闭按钮
modalClose.addEventListener('click', closeModal);

// 4.5 点击遮罩背景关闭
modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
});