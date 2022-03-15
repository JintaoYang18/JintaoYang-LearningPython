---
sidebar: auto
next: /config/cop
---

# 指南


## 介绍 📘

> Python由荷兰数学和计算机科学研究学会的吉多·范罗苏姆 于1990 年代初设计，作为一门叫做ABC语言的替代品。 Python提供了高效的高级数据结构，还能简单有效地面向对象编程。Python语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言，随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。

![学习Python](./assets/python-logo-master-v3-TM.png)

学习 Python.


## 安装 🔩

略。

## 依赖环境等 🕹️

略。

## 使用 🔘

掌握尚不完全，此处还不会梳理目录架构，想到哪写到哪。

### sys.stdout = file 日志记录 📓

Python 标准输出 `sys.stdout` 重定向 （*从控制台重定向到文件*）

原始的 sys.stdout 指向控制台，如果把文件的对象的引用赋给 `sys.stdout`，那么 `print` 调用的就是文件对象的 `write` 方法：

```python
import os
import sys

f_handler=open('out.log', 'w')
sys.stdout=f_handler
print 'hello' 
# 这个 hello 不能在控制台查看
# 这个 hello 在文件 out.log 中
```

### 时间戳 🕡️

```python
import time

# 现在时间-格式化
datetime.now().strftime('%Y-%m-%d-%H:%M:%S')
# 打印现在时间
print(datetime.now())
```

### 目录有无判断及新建 📇
```python
import os

# 判断有无
if not os.path.exists(save_dir):
  # 新建目录
  os.makedirs(save_dir)
```

### argparse 参数传入 ⚙️
```python
import argparse

parser = argparse.ArgumentParser(description='Python')
parser.add_argument('-sd', '--save-dir', default='./results', help='path to save')
args = parser.parse_args()
  
main(args)
```

### 多卡训练 🖥🖥🖥🖥

`torch.nn.DataParallel`多卡训练，可能会影响性能和可复现性，谨慎使用。

```python
# torch.nn.DataParallel
device_ids = [0, 1]
net = torch.nn.DataParallel(net, device_ids=device_ids)
```
[参考1:知乎](https://zhuanlan.zhihu.com/p/102697821)

[参考2:问题](https://www.zhihu.com/pin/1324807219972300800)

### Torch加速训练GPU ⏩️

`torch.backends.cudnn.benchmark = True`将会让程序在开始时花费一点额外时间，为整个网络的每个卷积层搜索最适合它的卷积实现算法，进而实现网络的加速。

适用场景是**网络结构固定（不是动态变化的），网络的输入形状（包括 batch size，图片大小，输入的通道）是不变的**，其实也就是一般情况下都比较适用。

反之，如果卷积层的设置一直变化，将会导致程序不停地做优化，反而会耗费更多的时间。

```python
if args.use_gpu and torch.cuda.is_available():
    device = torch.device('cuda')
    torch.backends.cudnn.benchmark = True # 一般加在开头
else:
    device = torch.device('cpu')
```

[参考:知乎](https://zhuanlan.zhihu.com/p/73711222)

### assert 断言 ❓️

还不会

### YAML文件的读写 📄

还不会

<!-- 
**Required**:
Check out [frontmatter](config/front-matter) for more details.
1. [Writing the summary manually in frontmatter](./front-matter.md#summary)
:::warning
However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
::: -->

## 最后 🔚

顺顺利利，多学多用。
<!-- Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
