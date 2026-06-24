// ============================================================
// main.js — 全局功能：复制命令、SSH 连接、代码块
// 合并自 pages_script.js（点击 pre / 独立 code 复制）
// ============================================================

(function() {
    'use strict';

    // -------- Toast 元素与函数（推迟到 DOM 就绪后创建） --------

    var toast = null;
    var timeoutId = null;

    function showCopyMessage(cmdText) {
        if (!toast) return;
        if (timeoutId) clearTimeout(timeoutId);
        toast.textContent = '✅ 已复制: ' + cmdText;
        toast.style.opacity = '1';
        timeoutId = setTimeout(function() {
            toast.style.opacity = '0';
        }, 1500);
    }

    // -------- 异步复制函数（兼容降级） --------

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            showCopyMessage(text);
        } catch (err) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showCopyMessage(text);
        }
    }

    // -------- 事件绑定（等 DOM 就绪，此时 document.body 一定存在） --------

    document.addEventListener('DOMContentLoaded', function() {
        if (document.body.hasAttribute('data-no-copy')) return;

        // 等 DOM 就绪后再创建 Toast，避免 <head> 中执行时 body 为 null
        toast = document.createElement('div');
        toast.className = 'copy-toast';
        document.body.appendChild(toast);

        // 1. 事件委托：点击 .cmd-line code 复制命令（首页命令卡片）
        document.body.addEventListener('click', function(e) {
            var target = e.target;
            if (target.tagName !== 'CODE') {
                target = target.closest('code');
            }
            if (target && target.closest('.cmd-line')) {
                var cmdText = target.textContent.trim();
                if (cmdText) {
                    e.preventDefault();
                    copyToClipboard(cmdText);
                }
                return;
            }
        });

        // 2. 事件委托：点击 .copy-ssh 复制 SSH 连接
        document.body.addEventListener('click', function(e) {
            var target = e.target;
            var sshSpan = target.closest('.copy-ssh');
            if (sshSpan) {
                var sshCmd = sshSpan.textContent.trim();
                if (sshCmd) {
                    e.preventDefault();
                    copyToClipboard(sshCmd);
                }
            }
        });

        // 3. 点击 <pre> 代码块复制整个内容（手册页面多行命令）
        document.querySelectorAll('pre').forEach(function(el) {
            el.classList.add('copyable');
            el.addEventListener('click', function() {
                copyToClipboard(el.textContent.trim());
            });
        });

        // 4. 点击独立 <code> 复制单条命令（跳过 <pre> 和 .cmd-line 内的）
        document.querySelectorAll('code').forEach(function(el) {
            if (el.closest('pre')) return;
            if (el.closest('.cmd-line')) return;
            el.classList.add('copyable');
            el.addEventListener('click', function(e) {
                e.stopPropagation();
                copyToClipboard(el.textContent.trim());
            });
        });

        // 5. 搜索框（事件委托）：监听所有 .category-search 的输入
        document.body.addEventListener('input', function(e) {
            var input = e.target.closest('.category-search');
            if (!input) return;

            var wrapper = input.closest('.search-box-wrapper');
            if (!wrapper) return;

            var resultsBox = wrapper.querySelector('.search-results');
            if (!resultsBox) return;

            var footerEl = wrapper.closest('footer');
            if (!footerEl) return;

            var keyword = input.value.trim().toLowerCase();
            resultsBox.innerHTML = '';
            if (!keyword) { resultsBox.style.display = 'none'; return; }

            var matches = [];

            // 所有搜索框：限定在第一个 category-label 区域内的卡片标题（.cmd-line）
            var firstLabel = footerEl.querySelector('.category-label');
            if (firstLabel) {
                var cmdLines = [];
                var nextEl = firstLabel.nextElementSibling;
                while (nextEl && !nextEl.classList.contains('category-label')) {
                    var found = nextEl.querySelectorAll('.cmd-line');
                    for (var j = 0; j < found.length; j++) {
                        cmdLines.push(found[j]);
                    }
                    nextEl = nextEl.nextElementSibling;
                }
                for (var k = 0; k < cmdLines.length; k++) {
                    var text = cmdLines[k].textContent.trim();
                    if (text.toLowerCase().indexOf(keyword) !== -1) {
                        matches.push({ el: cmdLines[k], text: text });
                    }
                }
            }

            if (matches.length >= 1) {
                matches.forEach(function(match) {
                    var item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.textContent = match.text;
                    item.addEventListener('click', function() {
                        match.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        input.value = match.text;
                        resultsBox.style.display = 'none';
                    });
                    resultsBox.appendChild(item);
                });
                resultsBox.style.display = 'block';
            } else {
                resultsBox.style.display = 'none';
            }
        });

        // 回车键（事件委托）
        document.body.addEventListener('keydown', function(e) {
            if (e.key !== 'Enter') return;
            var input = e.target.closest('.category-search');
            if (!input) return;
            var wrapper = input.closest('.search-box-wrapper');
            if (!wrapper) return;
            var resultsBox = wrapper.querySelector('.search-results');
            if (!resultsBox) return;
            var firstItem = resultsBox.querySelector('.search-result-item');
            if (firstItem) firstItem.click();
        });

        // 隐藏下拉：点击任何搜索框外部时
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-box-wrapper')) {
                document.querySelectorAll('.search-results').forEach(function(el) {
                    el.style.display = 'none';
                });
            }
        });
    });
})();
