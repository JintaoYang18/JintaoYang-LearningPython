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

### assert 断言 ❓️

还不会

### YAML文件的读写 📄

还不会

<!-- ```bash
mkdir blog && cd blog # Create an empty directory and go into it

yarn add vuepress @vuepress/theme-blog -D # Install the dependencies
# OR npm install vuepress @vuepress/theme-blog -D
```
### Folder structure

Here's the recommended project structure:

**Required**:

- `blog/.vuepress/config.js`: Entry file of configuration, can also be `yml` or `toml`.
- `blog/_posts`: Stores your post content.

**Optional**:

- `blog/.vuepress/components`: The Vue components .


### Using @vuepress/theme-blog

You must add `@vuepress/theme-blog` as a theme in `.vuepress/config.js`.

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
}
```


From now on, you can run `yarn dev` or `npm run dev` and head `localhost:8080` to see your blog!

### Generating content

The `_posts` folder is where your blog posts live. You can simply write blog posts in Markdown.

All blog post files can begin with front matter. Only `title` is required, but we recommend you define all frontmatter variables as below. They'll be used to set the corresponding layout. Check out [frontmatter](config/front-matter) for more details.


### Blog tags

By default, Navigate to `/tag/`, you'll see the tag entry page.
You can set you own tags in front matter, and they'll automatically be classified:


### Summary

By default, summary will be extracted from source markdowns. If you need to override it, we present the following two approaches:

1. [Writing the summary manually in frontmatter](./front-matter.md#summary)



## Quick Start

Step 1: Scaffolding out a VuePress blog
```bash
yarn create vuepress [blogName]

cd [blogName] && yarn
```

Step 2: Develop & Build


By default, VuePress dev server is listening at `http://localhost:8080/`, whereas the built files will be in `.vuepress/dist`.

:::warning

However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
::: -->

## 最后 🔚

顺顺利利，多学多用。
<!-- Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
