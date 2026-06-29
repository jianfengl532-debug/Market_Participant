/**
 * config.js — 全局 API 配置
 *
 * 前端所有显示页共享：
 *   1. API 基础地址（本地开发 → localhost:8000，线上 → Funnel HTTPS）
 *   2. API 密钥（X-API-Key 请求头）
 *
 * 引入方式（从任一显示页，路径均为 ../../../js/config.js）：
 *   <script src="../../../js/config.js"></script>
 */
(function (global) {
    'use strict';

    var hostname = window.location.hostname || '';

    // 判断是否为本地开发环境
    var isLocal = hostname === 'localhost'
        || hostname === '127.0.0.1'
        || hostname.startsWith('192.168.')
        || hostname === '100.105.237.93';

    global.API_CONFIG = {
        // API 基础 URL（不带尾部斜杠）
        baseUrl: isLocal
            ? 'http://' + hostname + ':8000'
            : 'https://jefflu.tail9f69ce.ts.net',

        // API 密钥 — 与后端 db_config.php 中 API_KEY 保持一致
        apiKey: 'mk_jfl_a8f3c9e2b7d4p6q5r1'
    };
})(window);

/* ============================================================
   DB 密码保护 — 所有显示页共享
   点击「🗄️ DB 接続・データ読み込み」时弹出密码验证
   初始密码: 000000，可在控制台调用 changeDbPassword() 修改
   ============================================================ */
(function() {
    'use strict';

    var STORAGE_KEY = 'db_access_password';
    var DEFAULT_PASSWORD = '000000';

    function getPassword() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            return saved || DEFAULT_PASSWORD;
        } catch(e) {
            return DEFAULT_PASSWORD;
        }
    }

    /** 验证密码并打开 DB 链接（弹窗形式） */
    window.openDbLink = function(url) {
        var password = prompt('🔐 请输入 DB 访问密码：');
        if (password === null) return false;
        if (password === getPassword()) {
            window.open(url, '_blank', 'noopener,noreferrer');
            return false;
        } else {
            alert('❌ 密码错误，请重试。默认密码: 000000');
            return false;
        }
    };

    /** 修改密码（在控制台调用 window.changeDbPassword()） */
    window.changeDbPassword = function() {
        var current = prompt('请输入当前密码：');
        if (current === null) return;
        if (current !== getPassword()) {
            alert('❌ 当前密码错误');
            return;
        }
        var newPwd = prompt('请输入新密码（至少4位）：');
        if (!newPwd || newPwd.length < 4) {
            alert('❌ 密码至少4位');
            return;
        }
        var confirmPwd = prompt('请再次输入新密码：');
        if (newPwd !== confirmPwd) {
            alert('❌ 两次输入不一致');
            return;
        }
        try {
            localStorage.setItem(STORAGE_KEY, newPwd);
            alert('✅ 密码已更新');
        } catch(e) {
            alert('❌ 保存失败');
        }
    };
})();
