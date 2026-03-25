# 数据清洗全流程（按标准工作流排序）
---
## 行业术语注释（按流程对应排序）
| 流程步骤 | 专业术语 | 注释 |
|----|----|----|
| 数据读取 | pd.read_csv / pd.read_excel | pandas库读取CSV/Excel文件的函数，用于加载原始数据 |
| 数据探索 | df.info() | 查看数据表的列名、数据类型、非空数量等基础信息 |
| 数据探索 | df.describe() | 生成数据描述性统计（均值、最值、分位数等） |
| 重复值处理 | duplicated() | 检测数据表中重复的行 |
| 重复值处理 | drop_duplicates() | 删除数据表中的重复行 |
| 缺失值处理 | 缺失值 | 数据中未记录、为空的内容（常用 NaN 表示） |
| 缺失值处理 | 均值填补法 | 用列的平均值填充缺失值 |
| 缺失值处理 | 向前/向后填充 | 用前一个/后一个有效值填充空值（适合时间序列） |
| 缺失值处理 | 模型填补法 | 用机器学习模型（随机森林）预测并填充缺失值 |
| 缺失值处理 | 随机森林 | 常用机器学习算法，可用于缺失值预测、分类/回归 |
| 异常值处理 | 异常值 | 明显偏离正常范围的极端数值 |
| 异常值处理 | 盖帽法修正 | 将超出范围的异常值截断为安全阈值 |
| 文本处理 | replace() | 替换文本中的符号、字符 |
| 文本处理 | 正则表达式 | 提取、匹配、清洗复杂文本的工具 |
| 时间处理 | 时间戳 | 用数字表示时间，方便计算机存储与计算 |

---
# 数据清洗全流程 · 代码+关键词合并清单（最完整版）
这份清单**按标准工作流排序**，**每一步都包含：流程名称 + 核心关键词 + 可直接运行代码**，逻辑清晰、学习/工作都能用。

---

## 一、数据读取（加载数据）
**核心关键词**：数据加载、pd.read_csv、pd.read_excel、DataFrame、文件路径
```python
import pandas as pd
import numpy as np

# 读取数据
df = pd.read_csv("数据文件.csv")    # CSV格式
df = pd.read_excel("数据文件.xlsx") # Excel格式
```

---

## 二、数据探索（查看概况）
**核心关键词**：数据形状、数据结构、描述性统计、非空值、缺失值、数据类型
```python
df.shape          # 查看行数、列数
df.info()         # 查看列名、数据类型、非空值数量
df.describe()     # 查看数值列统计值（均值、最值、分位数）
df.head()         # 查看前5行数据
df.isnull().sum() # 统计每列缺失值数量
```

---

## 三、基础格式清洗
**核心关键词**：去除空格、大小写转换、replace、格式统一、特殊符号清理
```python
# 去除文本前后空格
df = df.apply(lambda x: x.str.strip() if x.dtype == "object" else x)

# 英文大小写统一
df["列名"] = df["列名"].str.lower()  # 转小写
df["列名"] = df["列名"].str.upper()  # 转大写

# 替换特殊符号
df["数值列"] = df["数值列"].replace(",", "", regex=True)
```

---

## 四、重复值处理
**核心关键词**：重复行、去重、duplicated、drop_duplicates、唯一值
```python
df.duplicated().sum()   # 统计重复行数
df = df.drop_duplicates()  # 删除重复行
```

---

## 五、缺失值处理
**核心关键词**：缺失值、NaN、fillna、dropna、均值填补、向前填充、向后填充
```python
# 删除缺失值
df = df.dropna()

# 均值填补
df["数值列"] = df["数值列"].fillna(df["数值列"].mean())

# 向前/向后填充（时间序列常用）
df = df.fillna(method="ffill")  # 前值填充
df = df.fillna(method="bfill")  # 后值填充
```

---

## 六、异常值处理
**核心关键词**：异常值、极端值、盖帽法、分位数、clip、箱线图、修正异常值
```python
# 盖帽法：限制极端值在合理范围
def cap_outliers(series):
    lower = series.quantile(0.05)
    upper = series.quantile(0.95)
    return series.clip(lower, upper)

df["数值列"] = cap_outliers(df["数值列"])
```

---

## 七、文本字符串处理
**核心关键词**：文本清洗、正则表达式、extract、数据提取、字符串替换
```python
# 正则提取数字
df["文本列"] = df["文本列"].str.extract(r"(\d+)")

# 批量清理无用符号
df["文本列"] = df["文本列"].replace(["-", "_", "/"], "", regex=True)
```

---

## 八、时间格式处理
**核心关键词**：时间格式化、时间戳、to_datetime、提取年月日、日期解析
```python
# 转为标准时间格式
df["时间列"] = pd.to_datetime(df["时间列"])

# 提取年月日
df["年份"] = df["时间列"].dt.year
df["月份"] = df["时间列"].dt.month
df["日期"] = df["时间列"].dt.day

# 时间戳转换
df["时间戳"] = df["时间列"].apply(lambda x: x.timestamp())
```

---

## 九、清洗完成 → 保存数据
**核心关键词**：数据导出、保存文件、to_csv、to_excel
```python
df.to_csv("清洗完成数据.csv", index=False)
df.to_excel("清洗完成数据.xlsx", index=False)
```

---

# 极简记忆版（流程+关键词）
1. **读取**：read_csv、read_excel、DataFrame
2. **探索**：shape、info、describe、isnull
3. **格式**：strip、replace、大小写、统一格式
4. **去重**：duplicated、drop_duplicates
5. **缺失值**：fillna、dropna、均值填充、前后填充
6. **异常值**：盖帽法、clip、分位数、极端值
7. **文本**：正则、extract、替换符号
8. **时间**：to_datetime、提取年月日、时间戳
9. **保存**：to_csv、to_excel

---
需要我把这份清单**导出成可打印的PDF/Word文档**吗？方便你随时查看背诵。

---

