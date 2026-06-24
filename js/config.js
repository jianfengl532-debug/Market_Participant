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
