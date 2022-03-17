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
from datetime import datetime

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

### print 动态打印 🖨️

实现原地输出动态进度。

```python
import time
for i in range(50):
    print("Loading" + "."*i, end="\r")
    time.sleep(0.1)
print("")
```

### PyTorch model.train() ⛹‍♂️

```python
model.train():
# 在使用pytorch构建神经网络的时候，训练过程中会在程序上方添加一句model.train()，作用是启用batch normalization和drop out。
model.eval():
# 测试过程中会使用model.eval()，这时神经网络会沿用batch normalization的值，并不使用drop out。
```

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

### Pytorch .pth 保存数据 💾

```python
i=1
for ... :
  if i == 1 :
      x_save_pt = out_resize_tensor #torch.from_numpy(out_display_img1).unsqueeze(0)
      y_save_pt = test_labels
  else :
      x_save_pt = torch.cat([x_save_pt, out_resize_tensor], dim=0) #x_save_pt = torch.cat([x_save_pt, torch.from_numpy(out_display_img1).unsqueeze(0)], dim=0)
      y_save_pt = torch.cat([y_save_pt, test_labels], dim=0)
  i = i+1

torch.save({'data': x_save_pt, 'target': y_save_pt}, "./12_googlenet_" + Atk_Type + ".pt")
```

### Pytorch 数据之间转换 🔌

**1. PIL, Numpy to Tensor**

```python
import torchvision.transforms as transforms
x_Tensor = transforms.ToTensor()(x_PIL).unsqueeze(0)
x_Tensor = transforms.ToTensor()(x_Numpy).unsqueeze(0)
```

**2. Tensor to PIL**

```python
import torchvision.transforms as transforms

unloader = transforms.ToPILImage()

def trans_image(tensor):
    image = tensor.cpu().clone()
    image = image.squeeze(0)
    image = unloader(image)
    image = image.resize((299, 299), Image.ANTIALIAS) # 缩放
    return image

x_PIL = trans_image(x_Tensor)
```

**3. PIL to Numpy**

```python
x_Numpy = numpy.array(x_PIL, dtype = numpy.float32) # 数据类型
```

### Pytorch Tensor数据维度交换 ⛗

```python
b = a.permute(0, 3, 1, 2)
```

### Shell 脚本 🗔

```bash
for TYPE in clean adv
do
    echo  "TYPE:  ${TYPE}"
    python googlenet.py --data_test Demo --scale 2 --pre_train download --test_only --save_results --type ${TYPE}
    python eval_googlenet.py --atk-type ${TYPE} --test-batch-size 64  --date 20220316
done
```

### Normalization的扰动求解Torch保存 ➖

```python
import torch

unloader = transforms.ToPILImage()

perturb = (img_fgm - img)
p_min = torch.min(perturb)
p_max = torch.max(perturb)
normal_p = (perturb + p_min) / (p_max - p_min)
normal_p = torch.squeeze(normal_p, dim=0)
normal_p = unloader(normal_p)
name = 'adv_perturb.bmp'
normal_p.save('./fgsm_test/' + name)
```

### MarkDown 写目录，带跳转 ↪️

不能带空格

```markdown
# 目录

- [论文解读](#论文解读)
  - [III. 防御模型](#III_防御模型)
    - [A. Image Reconstruction Network](#A_Image_Reconstruction_Network)
      - [残差块](#残差块)
      - [随机化层](#随机化层)
    - [B. Perceptual Loss](#B_Perceptual_Loss)
  - [IV. 实验](#IV_实验)
    - [A. Preparation](#A_Preparation)
      - [目标模型](#目标模型)
      - [攻击方法](#攻击方法)
      - [数据集](#数据集)
      - [实施细节](#实施细节)
- [代码运行](#代码运行)
  - [进入目录](#进入目录)
- [参考文献](#参考文献)
```

## 最后 🔚

顺顺利利，多学多用。
<!-- Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
