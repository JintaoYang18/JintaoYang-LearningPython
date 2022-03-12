<template><h1 id="front-matter" tabindex="-1"><a class="header-anchor" href="#front-matter" aria-hidden="true">#</a> Front Matter</h1>
<h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Default: <code>undefined</code></li>
<li>Required: <code>true</code></li>
</ul>
<p>The title for the page and content.</p>
<p>e.g.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Hello World</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h2>
<ul>
<li>Type: <code>string|string[]</code></li>
<li>Default: <code>undefined</code></li>
<li>Required: <code>false</code></li>
</ul>
<p>The key to classifier pages and will also be displayed in the post:</p>
<img src="@source/assets/tags.png" width="350px"/>
<img src="@source/assets/content-tags.png" width="350px"/>
<p>e.g.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">tags</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> JavaScript
  <span class="token punctuation">-</span> DOM</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h2>
<ul>
<li>Type: <code>YYYY-MM-DD</code></li>
<li>Default: <code>undefined</code></li>
<li>Required: <code>false</code></li>
</ul>
<p>Our recommended format is <code>YYYY-MM-DD</code>, but it actually accepts multi formats. VuePress is using <code>js-yaml</code> which follows standard yaml types, so you can find all available formats <a href="https://yaml.org/type/timestamp.html" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<p>Date for the post. This will be used for permalink, sorting and displayed in the layout:</p>
<img src="@source/assets/date.png" width="350px"/>
<img src="@source/assets/content-date.png" width="350px"/>
<p>e.g.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2016-10-20</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Default: <code>undefined</code></li>
<li>Required: <code>false</code></li>
</ul>
<p>Author for the post. This will be displayed in the post:</p>
<img src="@source/assets/author.png" width="350px"/>
<img src="@source/assets/content-author.png" width="350px"/>
<p>e.g.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">author</span><span class="token punctuation">:</span> ULIVZ</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Default: <code>undefined</code></li>
<li>Required: <code>false</code></li>
</ul>
<p>Location for the post. This will be displayed in the post:</p>
<img src="@source/assets/location.png" width="350px"/>
<img src="@source/assets/content-location.png" width="350px"/>
<p>e.g.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">location</span><span class="token punctuation">:</span> Hangzhou</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Default: <code>undefined</code></li>
<li>Required: <code>false</code></li>
</ul>
<p>Summary for the post. This will be displayed in the post:</p>
<p><img src="@source/assets/summary.png" alt="Summary"></p>
<p>e.g.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">summary</span><span class="token punctuation">:</span> Here's a quick post on what I found.</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
