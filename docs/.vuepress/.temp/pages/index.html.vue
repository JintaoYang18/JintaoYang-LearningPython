<template><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南" aria-hidden="true">#</a> 指南</h1>
<h2 id="介绍-📘" tabindex="-1"><a class="header-anchor" href="#介绍-📘" aria-hidden="true">#</a> 介绍 📘</h2>
<blockquote>
<p>Python由荷兰数学和计算机科学研究学会的吉多·范罗苏姆 于1990 年代初设计，作为一门叫做ABC语言的替代品。 Python提供了高效的高级数据结构，还能简单有效地面向对象编程。Python语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言，随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。</p>
</blockquote>
<p><img src="@source/assets/python-logo-master-v3-TM.png" alt="学习Python"></p>
<p>学习 Python.</p>
<h2 id="安装-🔩" tabindex="-1"><a class="header-anchor" href="#安装-🔩" aria-hidden="true">#</a> 安装 🔩</h2>
<p>略。</p>
<h2 id="依赖环境等-🕹️" tabindex="-1"><a class="header-anchor" href="#依赖环境等-🕹️" aria-hidden="true">#</a> 依赖环境等 🕹️</h2>
<p>略。</p>
<h2 id="使用-🔘" tabindex="-1"><a class="header-anchor" href="#使用-🔘" aria-hidden="true">#</a> 使用 🔘</h2>
<p>掌握尚不完全，此处还不会梳理目录架构，想到哪写到哪。</p>
<h3 id="sys-stdout-file-日志记录-📓" tabindex="-1"><a class="header-anchor" href="#sys-stdout-file-日志记录-📓" aria-hidden="true">#</a> sys.stdout = file 日志记录 📓</h3>
<p>Python 标准输出 <code>sys.stdout</code> 重定向 （<em>从控制台重定向到文件</em>）</p>
<p>原始的 sys.stdout 指向控制台，如果把文件的对象的引用赋给 <code>sys.stdout</code>，那么 <code>print</code> 调用的就是文件对象的 <code>write</code> 方法：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

f_handler<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'out.log'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>stdout<span class="token operator">=</span>f_handler
<span class="token keyword">print</span> <span class="token string">'hello'</span> 
<span class="token comment"># 这个 hello 不能在控制台查看</span>
<span class="token comment"># 这个 hello 在文件 out.log 中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="时间戳-🕡️" tabindex="-1"><a class="header-anchor" href="#时间戳-🕡️" aria-hidden="true">#</a> 时间戳 🕡️</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token comment"># 现在时间-格式化</span>
datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">'%Y-%m-%d-%H:%M:%S'</span><span class="token punctuation">)</span>
<span class="token comment"># 打印现在时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="目录有无判断及新建-📇" tabindex="-1"><a class="header-anchor" href="#目录有无判断及新建-📇" aria-hidden="true">#</a> 目录有无判断及新建 📇</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token comment"># 判断有无</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>save_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># 新建目录</span>
  os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>save_dir<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="argparse-参数传入-⚙️" tabindex="-1"><a class="header-anchor" href="#argparse-参数传入-⚙️" aria-hidden="true">#</a> argparse 参数传入 ⚙️</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> argparse

parser <span class="token operator">=</span> argparse<span class="token punctuation">.</span>ArgumentParser<span class="token punctuation">(</span>description<span class="token operator">=</span><span class="token string">'Python'</span><span class="token punctuation">)</span>
parser<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">'-sd'</span><span class="token punctuation">,</span> <span class="token string">'--save-dir'</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">'./results'</span><span class="token punctuation">,</span> <span class="token builtin">help</span><span class="token operator">=</span><span class="token string">'path to save'</span><span class="token punctuation">)</span>
args <span class="token operator">=</span> parser<span class="token punctuation">.</span>parse_args<span class="token punctuation">(</span><span class="token punctuation">)</span>
  
main<span class="token punctuation">(</span>args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="assert-断言-❓️" tabindex="-1"><a class="header-anchor" href="#assert-断言-❓️" aria-hidden="true">#</a> assert 断言 ❓️</h3>
<p>还不会</p>
<h3 id="yaml文件的读写-📄" tabindex="-1"><a class="header-anchor" href="#yaml文件的读写-📄" aria-hidden="true">#</a> YAML文件的读写 📄</h3>
<p>还不会</p>
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
<h2 id="最后-🔚" tabindex="-1"><a class="header-anchor" href="#最后-🔚" aria-hidden="true">#</a> 最后 🔚</h2>
<p>顺顺利利，多学多用。</p>
<!-- Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
</template>
