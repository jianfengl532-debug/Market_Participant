# 🗄️ 本机 MariaDB 数据库概述

> 采集时间：2026-06-30  
> 采集方式：直接查询 MariaDB 服务器

---

## 服务器信息

| 项目 | 值 |
|------|-----|
| **数据库引擎** | MariaDB **11.4.11** |
| **监听地址** | `127.0.0.1:3306`（仅本地访问，不对外暴露） |
| **默认字符集** | `utf8mb4` / `utf8mb4_unicode_ci` |
| **存储引擎** | 全部 `InnoDB` |

---

## 数据库列表

本机安装一个 MariaDB 实例，除系统库外仅含 **1 个业务数据库**：

| 数据库 | 表数 | 数据大小 | 索引大小 | 总大小 |
|--------|:----:|:--------:|:--------:|:------:|
| **`InvStrat_db`** | **23** | 0.59 MB | 0.42 MB | **1.02 MB** |
| `information_schema` | — | 系统库 | — | — |
| `mysql` | — | 系统库 | — | — |
| `performance_schema` | — | 系统库 | — | — |
| `sys` | — | 系统库 | — | — |

---

## 📊 InvStrat_db — 完整表明细

23 张表按逻辑模块分组，每表标注实时行数（截至采集时间）。

### 💳 PerAcc — 个人账户管理（8 表）

最活跃模块，占数据总量的 **90% 以上**。四级 FK 链：人员 → 券商 → 持仓/出入金/交易/期货日表。全部 `ON DELETE CASCADE`。

| 表名 | 行数 | 引擎 | 数据大小 | 索引大小 | 说明 |
|------|:----:|:----:|:--------:|:--------:|------|
| `per_accounts` | 4 | InnoDB | 16 KB | 48 KB | 人员主表（身份证唯一约束） |
| `per_account_brokers` | 3 | InnoDB | 16 KB | 32 KB | 券商账户（券商+账号联合唯一） |
| `per_account_positions` | 10 | InnoDB | 32 KB | 16 KB | 持仓明细（含期货字段） |
| `per_account_cash_flows` | **181** | InnoDB | 48 KB | 32 KB | ⭐ 出入金记录（最活跃表） |
| `per_account_trade_records` | 82 | InnoDB | 48 KB | 48 KB | 逐笔交易记录（期货+股票） |
| `per_account_import_logs` | 39 | InnoDB | 16 KB | 48 KB | 导入日志（SHA256 幂等检测） |
| `per_account_futures_daily` | 31 | InnoDB | 16 KB | 16 KB | 期货每日资金快照 |
| `per_account_futures_positions_daily` | 21 | InnoDB | 16 KB | 32 KB | 期货每日持仓明细 |
| **小计** | **371** | — | **208 KB** | **272 KB** | |

### 📊 Price — 价格数据（2 表）

两张表相互独立，无外键约束。`price_spot_data` 使用 upsert 模式（同 code 更新价格）。

| 表名 | 行数 | 引擎 | 数据大小 | 索引大小 | 说明 |
|------|:----:|:----:|:--------:|:--------:|------|
| `price_spot_data` | 2 | InnoDB | 16 KB | 0 B | 现货价格（uk_price_code 唯一） |
| `price_calc_records` | 19 | InnoDB | 128 KB | 0 B | 斐波那契计算结果（JSON 存储） |
| **小计** | **21** | — | **144 KB** | **0 B** | |

### 🏢 FinData — 企业财务数据（2 表）

`fin_enterprises` 以 LONGTEXT JSON 存储多周期财务报告，`fin_bank_flows` 独立表按 `uscc` 与企业关联。

| 表名 | 行数 | 引擎 | 数据大小 | 索引大小 | 说明 |
|------|:----:|:----:|:--------:|:--------:|------|
| `fin_enterprises` | 5 | InnoDB | 64 KB | 16 KB | 企业主表（JSON 多周期报告） |
| `fin_bank_flows` | 2 | InnoDB | 16 KB | 16 KB | 银行流水（uk_company_month 唯一） |
| **小计** | **7** | — | **80 KB** | **32 KB** | |

### 🌍 GeoEnv — 地缘政治分析（3 表）

主-子表模式：`event_id` 外键关联子表，含影响评估和来源引用。

| 表名 | 行数 | 引擎 | 数据大小 | 索引大小 |
|------|:----:|:----:|:--------:|:--------:|
| `geo_env_events` | 2 | InnoDB | 16 KB | 0 B |
| `geo_impact_assessments` | 2 | InnoDB | 16 KB | 16 KB |
| `geo_event_sources` | 2 | InnoDB | 16 KB | 16 KB |
| **小计** | **6** | — | **48 KB** | **32 KB** |

### 💱 FxCap — 汇率利率分析（4 表）

主表含 9 种事件类型枚举（加息/降息/升值/贬值/通胀等），三张子表分别追踪汇率、利率和来源。

| 表名 | 行数 | 引擎 | 数据大小 | 索引大小 |
|------|:----:|:----:|:--------:|:--------:|
| `currency_interest_events` | 2 | InnoDB | 16 KB | 0 B |
| `currency_exchange_rates` | **0** | InnoDB | 16 KB | 16 KB |
| `currency_interest_changes` | 2 | InnoDB | 16 KB | 16 KB |
| `currency_event_sources` | 2 | InnoDB | 16 KB | 16 KB |
| **小计** | **6** | — | **64 KB** | **48 KB** |

### 🏭 IndBiz — 产业分析（4 表）

表结构已创建完毕但尚无数据录入。含产业影响、数据指标和来源三张子表。

| 表名 | 行数 | 引擎 | 数据大小 | 索引大小 |
|------|:----:|:----:|:--------:|:--------:|
| `industry_business_events` | **0** | InnoDB | 16 KB | 0 B |
| `industry_impacts` | **0** | InnoDB | 16 KB | 16 KB |
| `industry_data_points` | **0** | InnoDB | 16 KB | 16 KB |
| `industry_event_sources` | **0** | InnoDB | 16 KB | 16 KB |
| **小计** | **0** | — | **64 KB** | **48 KB** |

---

## 汇总统计

| 指标 | 值 |
|------|-----|
| **总表数** | **23 张** |
| **总数据行数** | **~411 行** |
| **数据库总大小** | **1.02 MB** |
| **数据大小** | 0.59 MB |
| **索引大小** | 0.42 MB |
| **最大数据表** | `per_account_cash_flows`（181 行，48 KB） |
| **最大索引表** | `per_account_trade_records` + `per_account_import_logs`（各 48 KB） |
| **空表（有结构无数据）** | `industry_*` 4 张 + `currency_exchange_rates` 1 张 = **5 张** |
| **含数据表** | 18 张 |
| **最近建表** | 2026-06-29（PerAcc 期货日表 v2 升级） |
| **最早建表** | 2026-06-06（GeoEnv 首发） |

### 模块数据分布

```
PerAcc (8表)  ████████████████████████████████████████ 371 行 (90.0%)
Price  (2表)  ██                                         21 行 (5.1%)
FinData(2表)  ▏                                           7 行 (1.7%)
GeoEnv (3表)  ▏                                           6 行 (1.5%)
FxCap  (4表)  ▏                                           6 行 (1.5%)
IndBiz (4表)  ▏                                           0 行 (0.0%)
```

### 数据库对象约束

| 约束类型 | 数量 | 具体位置 |
|---------|:----:|---------|
| **PK 主键** | 23 | 每表一个 `id BIGINT UNSIGNED AUTO_INCREMENT` |
| **FK 外键** | 17 | 全部 `ON DELETE CASCADE` |
| **UNIQUE 唯一约束** | 5 | `uk_price_code`(code)、`uk_id_number`(身份证)、`uk_broker_account`(券商+账号)、`uk_uscc`(统一代码)、`uk_company_month`(企业+月份) |

---

## 数据库架构全景

```
┌─────────────────────────────────────────────────────────┐
│                    MariaDB 11.4.11                       │
│                    127.0.0.1:3306                        │
│                   utf8mb4_unicode_ci                     │
└─────────────────────────────────────────────────────────┘
                           │
                    InvStrat_db (1.02 MB)
                           │
         ┌─────────────────┼──────────────────┐
         │                 │                  │
    ┌────┴────┐      ┌────┴────┐       ┌─────┴────┐
    │ 分析模块 │      │ 数据模块 │       │ 账户管理  │
    │ 11 表   │      │  4 表   │       │  8 表    │
    │ 主-子FK  │      │ 无FK约束 │       │ 四级FK链  │
    │ CASCADE │      │ upsert  │       │ CASCADE  │
    └─────────┘      └─────────┘       └──────────┘
         │                │                 │
    ┌────┼────┐      ┌────┴────┐      ┌─────┼─────┐
    │    │    │      │         │      │     │     │
  GeoEnv FxCap IndBiz  Price  FinData  PerAcc(核)
   (3)   (4)   (4)    (2)     (2)      (8)
```

---

## 备注

- 数据库处于**早期运营阶段**，总量仅 1 MB，但架构已完整就绪（23 表全覆盖）。
- PerAcc 模块自 2026-06-29 刚刚完成 v3 全面升级，导入管道投产，数据仍在持续积累。
- IndBiz（产业分析）4 张表已建好但尚未录入数据。
- 数据库仅在本机 127.0.0.1 监听，通过 PHP API → Tailscale Funnel HTTPS 对外提供服务。
- 所有 API 层配备：API Key 校验 + CORS 白名单 + PDO 参数化查询（防 SQL 注入）三层防护。
