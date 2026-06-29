<?php
// update_db_links.php — 为所有页面添加 DB 密码保护
$pages = [
    '/share/www/Data_Processing_Analysis/InvStrat/GeoEnv/GeoEnv.html',
    '/share/www/Data_Processing_Analysis/InvStrat/FxCap/FxCap.html',
    '/share/www/Data_Processing_Analysis/InvStrat/IndBiz/IndBiz.html',
    '/share/www/Data_Processing_Analysis/Finance/Price/Price.html',
    '/share/www/Data_Processing_Analysis/Finance/PerAcc/PerAcc.html',
    '/share/www/Data_Processing_Analysis/Finance/FinData/FinData.html',
];

foreach ($pages as $file) {
    $c = file_get_contents($file);
    if ($c === false) { echo "❌ 无法读取: " . basename($file) . "\n"; continue; }

    $fname = basename($file);

    // 提取原始 URL
    if (preg_match('/<a[^>]*href="(http[^"]+)"[^>]*class="[^"]*db-link[^"]*"[^>]*>/', $c, $m)) {
        $oldUrl = $m[1];

        // 精确替换整个 <a 标签到 > 的结尾
        $oldTag = $m[0];
        $newTag = '<a href="javascript:void(0)" class="db-link" onclick="openDbLink(\'' . $oldUrl . '\')" target="_blank" rel="noopener noreferrer"';

        $c2 = str_replace($oldTag, $newTag, $c, $count);
        if ($count > 0) {
            file_put_contents($file, $c2);
            echo "✅ {$fname} - 已更新密码保护\n";
        } else {
            echo "⚠️  {$fname} - 替换失败\n";
        }
    } elseif (preg_match('/DB 接/', $c)) {
        echo "⚠️  {$fname} - 找到 DB 文字但未匹配到 class=\"db-link\" 模式\n";
    } else {
        echo "⚠️  {$fname} - 未找到 DB 链接\n";
    }
}

echo "\n完成！\n";
