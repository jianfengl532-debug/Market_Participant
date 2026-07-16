<?php
/**
 * 根据工具名称查询数据库，返回 JSON 详情（包含下载链接和提取码）
 * 访问示例：/api/get_tool.php?name=PDF%20合并助手
 */

// ========== 数据库配置（请修改为你的实际信息） ==========
$db_host = '127.0.0.1';
$db_port = '3306';
$db_name = 'InvStrat_db';       // 你的数据库名
$db_user = '你的数据库用户名';    // 例如 'root'
$db_pass = '你的数据库密码';

// ========== 表名和字段映射（请根据实际调整） ==========
$table_name = 'tools';  // 假设工具信息存在这个表里
$field_map = [
    'name'          => 'name',
    'cover'         => 'cover', 
    'version'       => 'version',
    'release_date'  => 'release_date',
    'developer'     => 'developer',
    'category'      => 'category',
    'rating'        => 'rating',
    'update_date'   => 'update_date',
    'description'   => 'description',
    'screenshots'   => 'screenshots',
    'download_link' => 'download_link',   // 下载链接
    'extract_code'  => 'extract_code'     // 提取码
];
// ============================================================

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// 获取工具名称参数
$name = isset($_GET['name']) ? trim($_GET['name']) : '';
if (empty($name)) {
    echo json_encode(['error' => '缺少工具名称参数']);
    exit;
}

try {
    $pdo = new PDO("mysql:host=$db_host;port=$db_port;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $select_fields = implode(', ', array_keys($field_map));
    $sql = "SELECT $select_fields FROM $table_name WHERE name = :name";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':name' => $name]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $output = [];
        foreach ($field_map as $db_field => $front_key) {
            $output[$front_key] = isset($result[$db_field]) ? $result[$db_field] : null;
        }

        // 处理 screenshots（JSON 或逗号分隔）
        if (isset($output['screenshots']) && is_string($output['screenshots'])) {
            $decoded = json_decode($output['screenshots'], true);
            if (json_last_error() === JSON_ERROR_NONE) {
                $output['screenshots'] = $decoded;
            } else {
                $output['screenshots'] = array_map('trim', explode(',', $output['screenshots']));
            }
        }

        if (isset($output['rating'])) {
            $output['rating'] = floatval($output['rating']);
        }

        echo json_encode($output);
    } else {
        echo json_encode(['error' => '未找到该工具']);
    }
} catch (PDOException $e) {
    echo json_encode(['error' => '数据库查询失败: ' . $e->getMessage()]);
}
?>