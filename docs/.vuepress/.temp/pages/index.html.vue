<template><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide" aria-hidden="true">#</a> Guide</h1>
<h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> Intro</h2>
<blockquote>
<p>Python</p>
</blockquote>
<p><img src="@source/assets/python-logo-master-v3-TM.png" alt="学习Python"></p>
<p>Learning Python.</p>
<p>We try to implement all the common and necessary blog features in the plugin.</p>
<h2 id="getting-started-from-scratch" tabindex="-1"><a class="header-anchor" href="#getting-started-from-scratch" aria-hidden="true">#</a> Getting Started from scratch</h2>
<p>In this guide, you'll learn how to add default blog theme to a new project manually.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> blog <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> blog <span class="token comment"># Create an empty directory and go into it</span>

<span class="token function">yarn</span> <span class="token function">add</span> vuepress @vuepress/theme-blog -D <span class="token comment"># Install the dependencies</span>
<span class="token comment"># OR npm install vuepress @vuepress/theme-blog -D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="folder-structure" tabindex="-1"><a class="header-anchor" href="#folder-structure" aria-hidden="true">#</a> Folder structure</h3>
<p>Here's the recommended project structure:</p>
<p><strong>Required</strong>:</p>
<ul>
<li><code>blog/.vuepress/config.js</code>: Entry file of configuration, can also be <code>yml</code> or <code>toml</code>.</li>
<li><code>blog/_posts</code>: Stores your post content.</li>
</ul>
<p><strong>Optional</strong>:</p>
<ul>
<li><code>blog/.vuepress/components</code>: The Vue components .</li>
</ul>
<h3 id="using-vuepress-theme-blog" tabindex="-1"><a class="header-anchor" href="#using-vuepress-theme-blog" aria-hidden="true">#</a> Using @vuepress/theme-blog</h3>
<p>You must add <code>@vuepress/theme-blog</code> as a theme in <code>.vuepress/config.js</code>.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'VuePress Blog Example'</span><span class="token punctuation">,</span> <span class="token comment">// Title for the site. This will be displayed in the navbar.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>From now on, you can run <code>yarn dev</code> or <code>npm run dev</code> and head <code>localhost:8080</code> to see your blog!</p>
<h3 id="generating-content" tabindex="-1"><a class="header-anchor" href="#generating-content" aria-hidden="true">#</a> Generating content</h3>
<p>The <code>_posts</code> folder is where your blog posts live. You can simply write blog posts in Markdown.</p>
<p>All blog post files can begin with front matter. Only <code>title</code> is required, but we recommend you define all frontmatter variables as below. They'll be used to set the corresponding layout. Check out <a href="config/front-matter">frontmatter</a> for more details.</p>
<h3 id="blog-tags" tabindex="-1"><a class="header-anchor" href="#blog-tags" aria-hidden="true">#</a> Blog tags</h3>
<p>By default, Navigate to <code>/tag/</code>, you'll see the tag entry page.
You can set you own tags in front matter, and they'll automatically be classified:</p>
<h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h3>
<p>By default, summary will be extracted from source markdowns. If you need to override it, we present the following two approaches:</p>
<ol>
<li><RouterLink to="/front-matter.html#summary">Writing the summary manually in frontmatter</RouterLink></li>
</ol>
<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2>
<p>Step 1: Scaffolding out a VuePress blog</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> create vuepress <span class="token punctuation">[</span>blogName<span class="token punctuation">]</span>

<span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>blogName<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Step 2: Develop &amp; Build</p>
<p>By default, VuePress dev server is listening at <code>http://localhost:8080/</code>, whereas the built files will be in <code>.vuepress/dist</code>.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.</p>
</div>
<h2 id="final" tabindex="-1"><a class="header-anchor" href="#final" aria-hidden="true">#</a> Final</h2>
<p>Now, Check out your blog at <code>localhost:8080</code>, if everything is ok, you might be interested in the following topics:</p>
<ul>
<li>Configure this theme: We'll discuss in <a href="../config">the next section</a></li>
</ul>
</template>
