# 个人/家庭本地电脑搭建 RAG 知识库 **超详细傻瓜式流程**
全程**不用云服务器、不用付费API、本地离线运行**，用你自己的电脑搭建专属私有 RAG 知识库，可导入PDF/Word/笔记/代码文档。

我给你整理成 **一步一步照着做** 的版本，小白也能成功。

---

# 一、先搞懂：本地 RAG 需要什么？
只需要 4 样东西（全部免费）：
1. **Python**（运行环境）
2. **本地大模型**（比如 Llama 3、Qwen、ChatGLM）
3. **向量数据库**（存知识库）
4. **文档处理 + 检索框架**（LangChain 最简单）

---

# 二、完整搭建流程（共 8 步）
## 第1步：安装 Python（必须 3.10~3.11）
去官网下载：
https://www.python.org/downloads/release/python-3118/

安装时 **一定要勾选 Add Python to PATH**

验证：
打开 cmd 输入
```bash
python --version
pip --version
```

---

## 第2步：创建项目文件夹
随便在桌面建一个文件夹，例如
`本地RAG知识库`

然后打开 cmd，进入目录：
```bash
cd 桌面\本地RAG知识库
```

---

## 第3步：安装依赖（一条命令）
```bash
pip install langchain chromadb pypdf python-docx sentence-transformers transformers torch
```

包含：
- 文档读取（PDF/Word）
- 本地向量库
- 本地 embedding 模型
- 本地大模型运行

---

## 第4步：下载 **本地大模型**（离线可用）
推荐使用 **阿里通义千问开源模型（Qwen-7B-Chat）**
速度快、中文强、本地能跑。

下载地址（选择GGUF量化版，最适合个人电脑）：
https://huggingface.co/Qwen/Qwen-7B-Chat-GGUF

下载其中一个：
`qwen-7b-chat.Q4_K_M.gguf`

下载后放在项目文件夹里。

---

## 第5步：放入你的知识库文件
在项目文件夹里新建一个文件夹：
`docs`

把你要导入的资料放进去：
- PDF
- Word
- TXT笔记
- 代码文档
- 数据清洗流程（你之前整理的内容）

---

## 第6步：创建 RAG 主程序（复制即可）
在项目文件夹新建文件：
`rag_local.py`

把下面代码**完整复制进去**：

```python
# ======================
# 本地个人RAG知识库
# ======================
from langchain.vectorstores import Chroma
from langchain.document_loaders import PyPDFLoader, Docx2txtLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain.llms import LlamaCpp
import glob

# 1. 加载所有文档
def load_docs():
    docs = []
    for f in glob.glob("docs/*"):
        if f.endswith(".pdf"):
            loader = PyPDFLoader(f)
        elif f.endswith(".docx"):
            loader = Docx2txtLoader(f)
        elif f.endswith(".txt"):
            loader = TextLoader(f, encoding="utf-8")
        else:
            continue
        docs.extend(loader.load())
    return docs

# 2. 切分文档
def split_docs(docs):
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    return splitter.split_documents(docs)

# 3. 本地向量库
def create_vector_db(chunks):
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    db = Chroma.from_documents(chunks, embeddings, persist_directory="./db")
    db.persist()
    return db

# 4. 本地大模型
def load_local_llm():
    llm = LlamaCpp(
        model_path="qwen-7b-chat.Q4_K_M.gguf",  # 你下载的模型名
        temperature=0.1,
        max_tokens=2048,
        n_ctx=4096,
        verbose=False
    )
    return llm

# ======================
# 启动 RAG
# ======================
if __name__ == "__main__":
    print("正在加载知识库...")
    docs = load_docs()
    chunks = split_docs(docs)
    db = create_vector_db(chunks)
    llm = load_local_llm()

    rag = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=db.as_retriever(search_kwargs={"k": 3}),
        return_source_documents=True
    )

    print("✅ 本地RAG知识库启动完成！你可以提问了")
    while True:
        q = input("\n你：")
        if q in ["exit", "quit", "退出"]:
            break
        res = rag({"query": q})
        print("\n🤖 回答：", res["result"])
```

---

## 第7步：第一次运行
cmd 输入：
```bash
python rag_local.py
```

第一次会自动下载：
- 本地向量化模型
- 构建向量数据库

等待完成即可。

---

## 第8步：开始使用你的本地 RAG 知识库
你可以直接问：
- 数据清洗流程是什么？
- 缺失值处理有哪些方法？
- df.info() 能看到什么？

AI 会**只根据你导入的文档回答**，不会乱编！

---

# 三、超简版原理（一看就懂）
1. 你把文档放进 `docs` 文件夹
2. 程序自动切片 → 向量化 → 存入本地数据库
3. 你提问 → 系统检索最相关片段 → 本地大模型生成回答
4. **全程本地、离线、私有、安全**

---

# 四、适合个人/家庭的最强特点
✅ 完全本地，不上传任何数据
✅ 支持 PDF / Word / TXT
✅ 可做：学习笔记、题库、代码库、家庭档案、知识库
✅ 速度快，电脑 16G 内存就能流畅跑
✅ 不用 GPU 也能跑（CPU 可运行）

---
