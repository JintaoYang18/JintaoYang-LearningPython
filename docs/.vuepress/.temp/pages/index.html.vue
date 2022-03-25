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
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="多卡训练-🖥🖥🖥🖥" tabindex="-1"><a class="header-anchor" href="#多卡训练-🖥🖥🖥🖥" aria-hidden="true">#</a> 多卡训练 🖥🖥🖥🖥</h3>
<p><code>torch.nn.DataParallel</code>多卡训练，可能会影响性能和可复现性，谨慎使用。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># torch.nn.DataParallel</span>
device_ids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
net <span class="token operator">=</span> torch<span class="token punctuation">.</span>nn<span class="token punctuation">.</span>DataParallel<span class="token punctuation">(</span>net<span class="token punctuation">,</span> device_ids<span class="token operator">=</span>device_ids<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://zhuanlan.zhihu.com/p/102697821" target="_blank" rel="noopener noreferrer">参考1:知乎<ExternalLinkIcon/></a></p>
<p><a href="https://www.zhihu.com/pin/1324807219972300800" target="_blank" rel="noopener noreferrer">参考2:问题<ExternalLinkIcon/></a></p>
<h3 id="torch加速训练gpu-⏩️" tabindex="-1"><a class="header-anchor" href="#torch加速训练gpu-⏩️" aria-hidden="true">#</a> Torch加速训练GPU ⏩️</h3>
<p><code>torch.backends.cudnn.benchmark = True</code>将会让程序在开始时花费一点额外时间，为整个网络的每个卷积层搜索最适合它的卷积实现算法，进而实现网络的加速。</p>
<p>适用场景是<strong>网络结构固定（不是动态变化的），网络的输入形状（包括 batch size，图片大小，输入的通道）是不变的</strong>，其实也就是一般情况下都比较适用。</p>
<p>反之，如果卷积层的设置一直变化，将会导致程序不停地做优化，反而会耗费更多的时间。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">if</span> args<span class="token punctuation">.</span>use_gpu <span class="token keyword">and</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    device <span class="token operator">=</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">'cuda'</span><span class="token punctuation">)</span>
    torch<span class="token punctuation">.</span>backends<span class="token punctuation">.</span>cudnn<span class="token punctuation">.</span>benchmark <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token comment"># 一般加在开头</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    device <span class="token operator">=</span> torch<span class="token punctuation">.</span>device<span class="token punctuation">(</span><span class="token string">'cpu'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="https://zhuanlan.zhihu.com/p/73711222" target="_blank" rel="noopener noreferrer">参考:知乎<ExternalLinkIcon/></a></p>
<h3 id="print-动态打印-🖨️" tabindex="-1"><a class="header-anchor" href="#print-动态打印-🖨️" aria-hidden="true">#</a> print 动态打印 🖨️</h3>
<p>实现原地输出动态进度。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Loading"</span> <span class="token operator">+</span> <span class="token string">"."</span><span class="token operator">*</span>i<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">"\r"</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="pytorch-model-train-⛹‍♂️" tabindex="-1"><a class="header-anchor" href="#pytorch-model-train-⛹‍♂️" aria-hidden="true">#</a> PyTorch model.train() ⛹‍♂️</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment"># 在使用pytorch构建神经网络的时候，训练过程中会在程序上方添加一句model.train()，作用是启用batch normalization和drop out。</span>
model<span class="token punctuation">.</span><span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment"># 测试过程中会使用model.eval()，这时神经网络会沿用batch normalization的值，并不使用drop out。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="assert-断言-❓️" tabindex="-1"><a class="header-anchor" href="#assert-断言-❓️" aria-hidden="true">#</a> assert 断言 ❓️</h3>
<p>还不会</p>
<h3 id="yaml文件的读写-📄" tabindex="-1"><a class="header-anchor" href="#yaml文件的读写-📄" aria-hidden="true">#</a> YAML文件的读写 📄</h3>
<p>还不会</p>
<!-- 
**Required**:
Check out [frontmatter](config/front-matter) for more details.
1. [Writing the summary manually in frontmatter](./front-matter.md#summary)
:::warning
However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
::: -->
<h3 id="pytorch-pth-保存数据-💾" tabindex="-1"><a class="header-anchor" href="#pytorch-pth-保存数据-💾" aria-hidden="true">#</a> Pytorch .pth 保存数据 💾</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>i<span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">:</span>
      x_save_pt <span class="token operator">=</span> out_resize_tensor <span class="token comment">#torch.from_numpy(out_display_img1).unsqueeze(0)</span>
      y_save_pt <span class="token operator">=</span> test_labels
  <span class="token keyword">else</span> <span class="token punctuation">:</span>
      x_save_pt <span class="token operator">=</span> torch<span class="token punctuation">.</span>cat<span class="token punctuation">(</span><span class="token punctuation">[</span>x_save_pt<span class="token punctuation">,</span> out_resize_tensor<span class="token punctuation">]</span><span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">#x_save_pt = torch.cat([x_save_pt, torch.from_numpy(out_display_img1).unsqueeze(0)], dim=0)</span>
      y_save_pt <span class="token operator">=</span> torch<span class="token punctuation">.</span>cat<span class="token punctuation">(</span><span class="token punctuation">[</span>y_save_pt<span class="token punctuation">,</span> test_labels<span class="token punctuation">]</span><span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
  i <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span>

torch<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'data'</span><span class="token punctuation">:</span> x_save_pt<span class="token punctuation">,</span> <span class="token string">'target'</span><span class="token punctuation">:</span> y_save_pt<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"./12_googlenet_"</span> <span class="token operator">+</span> Atk_Type <span class="token operator">+</span> <span class="token string">".pt"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="pytorch-数据之间转换-🔌" tabindex="-1"><a class="header-anchor" href="#pytorch-数据之间转换-🔌" aria-hidden="true">#</a> Pytorch 数据之间转换 🔌</h3>
<p><strong>1. PIL, Numpy to Tensor</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torchvision<span class="token punctuation">.</span>transforms <span class="token keyword">as</span> transforms
x_Tensor <span class="token operator">=</span> transforms<span class="token punctuation">.</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x_PIL<span class="token punctuation">)</span><span class="token punctuation">.</span>unsqueeze<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
x_Tensor <span class="token operator">=</span> transforms<span class="token punctuation">.</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x_Numpy<span class="token punctuation">)</span><span class="token punctuation">.</span>unsqueeze<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>2. Tensor to PIL</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torchvision<span class="token punctuation">.</span>transforms <span class="token keyword">as</span> transforms

unloader <span class="token operator">=</span> transforms<span class="token punctuation">.</span>ToPILImage<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">trans_image</span><span class="token punctuation">(</span>tensor<span class="token punctuation">)</span><span class="token punctuation">:</span>
    image <span class="token operator">=</span> tensor<span class="token punctuation">.</span>cpu<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>clone<span class="token punctuation">(</span><span class="token punctuation">)</span>
    image <span class="token operator">=</span> image<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    image <span class="token operator">=</span> unloader<span class="token punctuation">(</span>image<span class="token punctuation">)</span>
    image <span class="token operator">=</span> image<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">299</span><span class="token punctuation">,</span> <span class="token number">299</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Image<span class="token punctuation">.</span>ANTIALIAS<span class="token punctuation">)</span> <span class="token comment"># 缩放</span>
    <span class="token keyword">return</span> image

x_PIL <span class="token operator">=</span> trans_image<span class="token punctuation">(</span>x_Tensor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>3. PIL to Numpy</strong></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>x_Numpy <span class="token operator">=</span> numpy<span class="token punctuation">.</span>array<span class="token punctuation">(</span>x_PIL<span class="token punctuation">,</span> dtype <span class="token operator">=</span> numpy<span class="token punctuation">.</span>float32<span class="token punctuation">)</span> <span class="token comment"># 数据类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="pytorch-tensor数据维度交换-⛗" tabindex="-1"><a class="header-anchor" href="#pytorch-tensor数据维度交换-⛗" aria-hidden="true">#</a> Pytorch Tensor数据维度交换 ⛗</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>b <span class="token operator">=</span> a<span class="token punctuation">.</span>permute<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="shell-脚本-🗔" tabindex="-1"><a class="header-anchor" href="#shell-脚本-🗔" aria-hidden="true">#</a> Shell 脚本 🗔</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">TYPE</span> <span class="token keyword">in</span> clean adv
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span>  <span class="token string">"TYPE:  <span class="token variable">${TYPE}</span>"</span>
    python googlenet.py --data_test Demo --scale <span class="token number">2</span> --pre_train download --test_only --save_results --type <span class="token variable">${TYPE}</span>
    python eval_googlenet.py --atk-type <span class="token variable">${TYPE}</span> --test-batch-size <span class="token number">64</span>  --date <span class="token number">20220316</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="shell-脚本-带运行时间记录-🗔🕡️" tabindex="-1"><a class="header-anchor" href="#shell-脚本-带运行时间记录-🗔🕡️" aria-hidden="true">#</a> Shell 脚本-带运行时间记录 🗔🕡️</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">starttime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +<span class="token string">'%Y-%m-%d %H:%M:%S'</span><span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"Shell_Start_Time :            "</span><span class="token variable">$starttime</span>

<span class="token comment">#sleep 1m</span>
<span class="token comment">#sleep 1s</span>

<span class="token assign-left variable">endtime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +<span class="token string">'%Y-%m-%d %H:%M:%S'</span><span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"Shell_End_Time :              "</span><span class="token variable">$endtime</span>
<span class="token assign-left variable">time1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$<span class="token punctuation">(</span>date <span class="token operator">+</span><span class="token operator">%</span>s <span class="token operator">-</span>d "$endtime"<span class="token punctuation">)</span> <span class="token operator">-</span> $<span class="token punctuation">(</span>date <span class="token operator">+</span><span class="token operator">%</span>s <span class="token operator">-</span>d "$starttime"<span class="token variable">))</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">" "</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Total_Shell_Time :            "</span>   <span class="token variable"><span class="token variable">$((</span>$time1<span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">24</span><span class="token variable">))</span></span> <span class="token string">"days  "</span> <span class="token variable"><span class="token variable">$((</span>$time1<span class="token operator">/</span><span class="token number">60</span><span class="token operator">/</span><span class="token number">60</span><span class="token variable">))</span></span> <span class="token string">"hours  "</span> <span class="token variable"><span class="token variable">$((</span>$time1<span class="token operator">/</span><span class="token number">60</span><span class="token variable">))</span></span> <span class="token string">"minutes  "</span> <span class="token variable"><span class="token variable">$((</span>$time1<span class="token operator">%</span><span class="token number">60</span><span class="token variable">))</span></span> <span class="token string">"seconds"</span>
<span class="token builtin class-name">echo</span> <span class="token string">" "</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="normalization的扰动求解torch保存-➖" tabindex="-1"><a class="header-anchor" href="#normalization的扰动求解torch保存-➖" aria-hidden="true">#</a> Normalization的扰动求解Torch保存 ➖</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> torch

unloader <span class="token operator">=</span> transforms<span class="token punctuation">.</span>ToPILImage<span class="token punctuation">(</span><span class="token punctuation">)</span>

perturb <span class="token operator">=</span> <span class="token punctuation">(</span>img_fgm <span class="token operator">-</span> img<span class="token punctuation">)</span>
p_min <span class="token operator">=</span> torch<span class="token punctuation">.</span><span class="token builtin">min</span><span class="token punctuation">(</span>perturb<span class="token punctuation">)</span>
p_max <span class="token operator">=</span> torch<span class="token punctuation">.</span><span class="token builtin">max</span><span class="token punctuation">(</span>perturb<span class="token punctuation">)</span>
normal_p <span class="token operator">=</span> <span class="token punctuation">(</span>perturb <span class="token operator">+</span> p_min<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>p_max <span class="token operator">-</span> p_min<span class="token punctuation">)</span>
normal_p <span class="token operator">=</span> torch<span class="token punctuation">.</span>squeeze<span class="token punctuation">(</span>normal_p<span class="token punctuation">,</span> dim<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
normal_p <span class="token operator">=</span> unloader<span class="token punctuation">(</span>normal_p<span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token string">'adv_perturb.bmp'</span>
normal_p<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">'./fgsm_test/'</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="markdown-写目录-带跳转-↪️" tabindex="-1"><a class="header-anchor" href="#markdown-写目录-带跳转-↪️" aria-hidden="true">#</a> MarkDown 写目录，带跳转 ↪️</h3>
<p>不能带空格</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 目录</span>

<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">论文解读</span>](<span class="token url">#论文解读</span>)</span>
  <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">III. 防御模型</span>](<span class="token url">#III_防御模型</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">A. Image Reconstruction Network</span>](<span class="token url">#A_Image_Reconstruction_Network</span>)</span>
      <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">残差块</span>](<span class="token url">#残差块</span>)</span>
      <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">随机化层</span>](<span class="token url">#随机化层</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">B. Perceptual Loss</span>](<span class="token url">#B_Perceptual_Loss</span>)</span>
  <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">IV. 实验</span>](<span class="token url">#IV_实验</span>)</span>
    <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">A. Preparation</span>](<span class="token url">#A_Preparation</span>)</span>
      <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">目标模型</span>](<span class="token url">#目标模型</span>)</span>
      <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">攻击方法</span>](<span class="token url">#攻击方法</span>)</span>
      <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">数据集</span>](<span class="token url">#数据集</span>)</span>
      <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">实施细节</span>](<span class="token url">#实施细节</span>)</span>
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">代码运行</span>](<span class="token url">#代码运行</span>)</span>
  <span class="token list punctuation">-</span> <span class="token url">[<span class="token content">进入目录</span>](<span class="token url">#进入目录</span>)</span>
<span class="token list punctuation">-</span> <span class="token url">[<span class="token content">参考文献</span>](<span class="token url">#参考文献</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="pdb调试器-👨🏻‍💻" tabindex="-1"><a class="header-anchor" href="#pdb调试器-👨🏻‍💻" aria-hidden="true">#</a> pdb调试器 👨🏻‍💻</h3>
<ul>
<li>ENTER (重复上次命令)</li>
<li>c (继续)</li>
<li>l (查找当前位于哪里)</li>
<li>s (进入子程序,如果当前有一个函数调用，那么 s 会进入被调用的函数体)</li>
<li>n(ext) 让程序运行下一行，如果当前语句有一个函数调用，用 n 是不会进入被调用的函数体中的</li>
<li>r (运行直到子程序结束)</li>
<li>!&lt;python 命令&gt;</li>
<li>h (帮助)</li>
<li>a(rgs) 打印当前函数的参数</li>
<li>j(ump) 让程序跳转到指定的行数</li>
<li>l(ist) 可以列出当前将要运行的代码块</li>
<li>p(rint) 最有用的命令之一，打印某个变量</li>
<li>q(uit) 退出调试</li>
<li>r(eturn) 继续执行，直到函数体返回</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> pdb

pdb<span class="token punctuation">.</span>set_trace<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="pytorch-n-dataloader-同序训练-✌️" tabindex="-1"><a class="header-anchor" href="#pytorch-n-dataloader-同序训练-✌️" aria-hidden="true">#</a> PyTorch-N_DataLoader-同序训练 ✌️</h3>
<ul>
<li>读取DataLoader, 设定generator</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">data_loader_folder</span><span class="token punctuation">(</span>samples_dir<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
                       b_s<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
                       shuffle_bi<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
                       n_workers<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
                       ran_num<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Data<span class="token punctuation">.</span>DataLoader<span class="token punctuation">:</span>
    data_transform <span class="token operator">=</span> transforms<span class="token punctuation">.</span>Compose<span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        transforms<span class="token punctuation">.</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    train_data <span class="token operator">=</span> Datasets<span class="token punctuation">.</span>ImageFolder<span class="token punctuation">(</span>root<span class="token operator">=</span>samples_dir<span class="token punctuation">,</span> 
                                      transform<span class="token operator">=</span>data_transform<span class="token punctuation">)</span>
    g <span class="token operator">=</span> torch<span class="token punctuation">.</span>Generator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    g<span class="token punctuation">.</span>manual_seed<span class="token punctuation">(</span>ran_num<span class="token punctuation">)</span>
    train_data_loader <span class="token operator">=</span> Data<span class="token punctuation">.</span>DataLoader<span class="token punctuation">(</span>train_data<span class="token punctuation">,</span> 
                                        batch_size<span class="token operator">=</span>b_s<span class="token punctuation">,</span> 
                                        shuffle<span class="token operator">=</span>shuffle_bi<span class="token punctuation">,</span>
                                        num_workers<span class="token operator">=</span>n_workers<span class="token punctuation">,</span> 
                                        generator<span class="token operator">=</span>g<span class="token punctuation">)</span>
    <span class="token keyword">return</span> train_data_loader
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>每个epoch，产生不同随机数，传给DataLoader中的generator</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">data_loader_hook</span><span class="token punctuation">(</span>dir2<span class="token punctuation">,</span> dir3<span class="token punctuation">,</span> batch_size1<span class="token punctuation">,</span> epoch<span class="token punctuation">)</span><span class="token punctuation">:</span>
    rdx <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    loaders1 <span class="token operator">=</span> data_loader_folder<span class="token punctuation">(</span>dir2<span class="token punctuation">,</span> 
                                  b_s<span class="token operator">=</span>batch_size1<span class="token punctuation">,</span> 
                                  shuffle_bi<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> 
                                  n_workers<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> 
                                  ran_num<span class="token operator">=</span>rdx<span class="token punctuation">)</span>
    loaders2 <span class="token operator">=</span> data_loader_folder<span class="token punctuation">(</span>dir3<span class="token punctuation">,</span> 
                                  b_s<span class="token operator">=</span>batch_size1<span class="token punctuation">,</span> 
                                  shuffle_bi<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> 
                                  n_workers<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> 
                                  ran_num<span class="token operator">=</span>rdx<span class="token punctuation">)</span>
    <span class="token keyword">return</span> loaders1<span class="token punctuation">,</span> loaders2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>N_DataLoader训练-zip-zip(*)读取</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">for</span> epoch <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_epoch<span class="token punctuation">,</span> end_epoch<span class="token punctuation">)</span><span class="token punctuation">:</span>
    data_loader1<span class="token punctuation">,</span> data_loader2 <span class="token operator">=</span> data_loader_hook<span class="token punctuation">(</span>dir4<span class="token punctuation">,</span> 
                                                  dir5<span class="token punctuation">,</span> 
                                                  batch_size1<span class="token punctuation">,</span> 
                                                  epoch<span class="token punctuation">)</span>
    model<span class="token punctuation">.</span>train<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> num_batches<span class="token punctuation">,</span> data_fuse <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>data_loader1<span class="token punctuation">,</span> data_loader2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        load_img<span class="token punctuation">,</span> load_lab <span class="token operator">=</span> <span class="token builtin">zip</span><span class="token punctuation">(</span><span class="token operator">*</span>data_fuse<span class="token punctuation">)</span>
        images_adv<span class="token punctuation">,</span> images_clean <span class="token operator">=</span> load_img
        target_adv<span class="token punctuation">,</span> target_clean <span class="token operator">=</span> load_lab
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="最后-🔚" tabindex="-1"><a class="header-anchor" href="#最后-🔚" aria-hidden="true">#</a> 最后 🔚</h2>
<p>顺顺利利，多学多用。</p>
<!-- Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
</template>
