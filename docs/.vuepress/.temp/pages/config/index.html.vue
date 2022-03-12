<template><h1 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h1>
<h2 id="dateformat" tabindex="-1"><a class="header-anchor" href="#dateformat" aria-hidden="true">#</a> dateFormat</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Default: <code>'ddd MMM DD YYYY'</code></li>
</ul>
<p>The <RouterLink to="/config/front-matter.html#date">date</RouterLink> will be displayed in the layout with this format.
You can find all available formats <a href="https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#displaying" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a></p>
<p>e.g.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dateFormat</span><span class="token operator">:</span> <span class="token string">'YYYY-MM-DD'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="nav" tabindex="-1"><a class="header-anchor" href="#nav" aria-hidden="true">#</a> nav</h2>
<ul>
<li>Type: <code>Array&lt;{ text: string, link: string }&gt;</code></li>
<li>Default: <code>See below</code></li>
</ul>
<p>Links you wish to be displayed at navbar.</p>
<p>Here's the default:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Blog'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Tags'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/tag/'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h2>
<h3 id="footer-contact" tabindex="-1"><a class="header-anchor" href="#footer-contact" aria-hidden="true">#</a> footer.contact</h3>
<ul>
<li>Type: <code>Array&lt;{ type: ContactType, link: string }&gt;</code></li>
<li>Default: <code>undefined</code></li>
</ul>
<p>Contact information, displayed on the left side of footer.</p>
<p>e.g.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://github.com/vuejs/vuepress'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://github.com/vuejs/vuepress'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>For now <code>ContactType</code> supports following enums:</p>
<ul>
<li>codepen</li>
<li>codesandbox</li>
<li>facebook</li>
<li>github</li>
<li>gitlab</li>
<li>instagram</li>
<li>linkedin</li>
<li>mail</li>
<li>messenger</li>
<li>music</li>
<li>phone</li>
<li>twitter</li>
<li>video</li>
<li>web</li>
<li>youtube</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Welcome contribution of adding more built-in contact type.</p>
</div>
<h3 id="footer-copyright" tabindex="-1"><a class="header-anchor" href="#footer-copyright" aria-hidden="true">#</a> footer.copyright</h3>
<ul>
<li>Type: <code>Array&lt;{ text: string, link?: string }&gt;</code></li>
<li>Default: <code>undefined</code></li>
</ul>
<p>Copyright information, displayed on the right side of footer.</p>
<p>e.g.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">copyright</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Privacy Policy'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://policies.google.com/privacy?hl=en-US'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'MIT Licensed | Copyright © 2018-present Vue.js'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="directories" tabindex="-1"><a class="header-anchor" href="#directories" aria-hidden="true">#</a> directories</h2>
<ul>
<li>Type: <code>DirectoryClassifier[]</code></li>
<li>Default: <code>See below</code></li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>[
  {
    id: 'post',
    dirname: '_posts',
    path: '/',
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>By default, pages are placed in <code>_post</code>, and the path for post list is <code>/</code>. Here's an example if you wish to customize it:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>[
  {
    id: 'writing', // Unique id for current classifier
    dirname: '_writings', // Matched directory name
    path: '/writings/', // Entry page for current classifier
    title: '隨筆', // Entry and pagination page titles for current classifier.
    layout: 'IndexWriting', // Layout component name for entry page.
    frontmatter:{ //Front matter for entry page.
      tag: 'vuepress'
    },
    itemLayout: 'Writing', // Layout for matched pages.
    itemPermalink: '/writings/:year/:month/:day/:slug', // Permalink for matched pages.
    pagination: { // Pagination behavior
      lengthPerPage: 2,
    },
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Reference:</p>
<ul>
<li><a href="https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#document-classifier" target="_blank" rel="noopener noreferrer">document classifiers<ExternalLinkIcon/></a></li>
</ul>
<h2 id="frontmatters" tabindex="-1"><a class="header-anchor" href="#frontmatters" aria-hidden="true">#</a> frontmatters</h2>
<ul>
<li>Type: <code>FrontmatterClassifier[]</code></li>
<li>Default: <code>See below</code></li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>[
  {
    id: 'tag',
    keys: ['tag', 'tags'],
    path: '/tag/',
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Only <code>tag</code> and <code>tags</code> in front matter will be classified, and the path for it is <code>'/tag/'</code> by default. Let's see how to customize it:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>[
  {
    id: 'location', // Unique id for current classifier
    keys: ['location'], // Frontmatter keys used to classify pages
    path: '/location/', // Entry page for current classifier
    title: '地點', // Entry, scope and pagination page titles for current classifier.
    layout: 'IndexLocation', // Layout component name for entry page.
    scopeLayout: 'ScopeLocation', // Layout component name for scope page.
    frontmatter: { //Front matter for entry page.
      description: 'Hello'
    }, 
    pagination: { // Pagination behavior
      lengthPerPage: 2,
    }, 
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Reference:</p>
<ul>
<li><a href="https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#frontmatter-classifier" target="_blank" rel="noopener noreferrer">Frontmatter Classifier<ExternalLinkIcon/></a></li>
</ul>
<h2 id="globalpagination" tabindex="-1"><a class="header-anchor" href="#globalpagination" aria-hidden="true">#</a> globalPagination</h2>
<ul>
<li>Type: <code>object</code></li>
<li>Default: <code>{ lengthPerPage: 5 }</code></li>
</ul>
<p>Pagination config for all directories and frontmatters. For example:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
  prevText:'上一頁', // Text for previous links.
  nextText:'下一頁', // Text for next links.
  lengthPerPage:'2', // Maximum number of posts per page.
  layout:'Pagination', // Layout for pagination page
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>For more information, please visit <a href="https://vuepress-plugin-blog.billyyyyy3320.com/pagination/#sorter" target="_blank" rel="noopener noreferrer">Pagination Config<ExternalLinkIcon/></a>.</p>
<h2 id="sitemap" tabindex="-1"><a class="header-anchor" href="#sitemap" aria-hidden="true">#</a> sitemap</h2>
<ul>
<li>Type: <code>object</code></li>
<li>Default: <code>undefined</code></li>
</ul>
<p>You can simply enable it by filling out <code>hostname</code> property with your host name:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
  hostname: 'https://yourdomain'
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Please head <a href="https://github.com/ekoeryanto/vuepress-plugin-sitemap#options" target="_blank" rel="noopener noreferrer">vuepress-plugin-sitemap<ExternalLinkIcon/></a> for more details.</p>
<h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h2>
<ul>
<li>Type: <code>object</code></li>
<li>Default: <code>undefined</code></li>
</ul>
<p>Vssue and Disqus are our built-in comment services. Here's the required properties to enable:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// Disqus
{
  service: &quot;disqus&quot;,
  shortname: &quot;Your blog's shortname&quot;,
}

// Vssue
{
  service: 'vssue',
  owner: 'You',
  repo: 'Your repo', 
  clientId: 'Your clientId',
  clientSecret: 'Your clientSecret',
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>For setting the shortname for disqus, visit <a href="https://help.disqus.com/en/articles/1717111-what-s-a-shortname" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a></p>
<p>Further configuration, please visit:</p>
<ul>
<li><a href="https://vuepress-plugin-disqus.netlify.com/#usage" target="_blank" rel="noopener noreferrer">vuepress-plugin-disqus-comment<ExternalLinkIcon/></a></li>
<li><a href="https://vssue.js.org/guide/vuepress.html#usage" target="_blank" rel="noopener noreferrer">vuepress-plugin-vssue<ExternalLinkIcon/></a></li>
</ul>
<h2 id="newsletter" tabindex="-1"><a class="header-anchor" href="#newsletter" aria-hidden="true">#</a> newsletter</h2>
<ul>
<li>Type: <code>object</code></li>
<li>Default: <code>undefined</code></li>
</ul>
<p>Mailchimp is our default newsletter service. The only required property to enable newsletter is <code>endpoint</code>:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
  endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;amp;id=bd18d40138'
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Please head <a href="https://vuepress-plugin-mailchimp.billyyyyy3320.com/#config" target="_blank" rel="noopener noreferrer">vuepress-plugin-mailchimp<ExternalLinkIcon/></a> to see how to get your <code>endpoint</code>.</p>
<h2 id="feed" tabindex="-1"><a class="header-anchor" href="#feed" aria-hidden="true">#</a> feed</h2>
<ul>
<li>Type: <code>object</code></li>
<li>Default: <code>undefined</code></li>
</ul>
<p>RSS, Atom, and even JSON feeds are supported. The only required property to enable feed is <code>canonical_base</code>:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
  canonical_base:'http://yoursite',
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>RSS is the default type of feed.</p>
<p>All the options in <a href="https://github.com/webmasterish/vuepress-plugin-feed#options" target="_blank" rel="noopener noreferrer">vuepress-plugin-feed<ExternalLinkIcon/></a> are available.
Moreover, we present an easier approach to enable/disable the feed types, for instance:</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
  canonical_base:'http://yoursite',
  rss:false
  atom:true,
  json:false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you plan to deploy your site under a sub path, and you have configured <a href="https://vuepress.vuejs.org/config/#base" target="_blank" rel="noopener noreferrer">base URL<ExternalLinkIcon/></a>, you won't need to pass it again to <code>canonical_base</code>.</p>
</div>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>true</code></li>
</ul>
<p>Whether to automatically extract summary from source markdowns. You can write summary manually by <RouterLink to="/config/front-matter.html#summary">front matter</RouterLink>. Summary is not only for displaying but also page meta description.</p>
<h2 id="summarylength" tabindex="-1"><a class="header-anchor" href="#summarylength" aria-hidden="true">#</a> summaryLength</h2>
<ul>
<li>Type: <code>number</code></li>
<li>Default: <code>200</code></li>
</ul>
<p>Set the length of summary.</p>
<h2 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> pwa</h2>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>false</code></li>
</ul>
<p>Whether to enable PWA support. this option is powered by the <a href="https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html" target="_blank" rel="noopener noreferrer">official
PWA plugin<ExternalLinkIcon/></a>.</p>
<p>if you enable this option, the default options of the internal PWA
plugin is as follows:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">serviceWorker</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">updatePopup</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="paginationcomponent" tabindex="-1"><a class="header-anchor" href="#paginationcomponent" aria-hidden="true">#</a> paginationComponent</h2>
<ul>
<li>Type: <code>string</code></li>
<li>Default: <code>'Pagination'</code></li>
</ul>
<p>Custom the pagination component.</p>
<p>The default is the
<a href="https://vuepress-plugin-blog.billyyyyy3320.com/components/#pagination" target="_blank" rel="noopener noreferrer">pagination component<ExternalLinkIcon/></a> powerful by
<a href="https://github.com/ulivz/vuepress-plugin-blog" target="_blank" rel="noopener noreferrer">@vuepress/plugin-blog<ExternalLinkIcon/></a>:</p>
<img src="@source/assets/pagination.png" width="250" height="" style=""/>
<p>You can set this option to <code>SimplePagination</code> to enable another out-of-box
<a href="https://vuepress-plugin-blog.billyyyyy3320.com/components/#simplepagination" target="_blank" rel="noopener noreferrer">simple pagination component<ExternalLinkIcon/></a>:</p>
<img src="@source/assets/simple-pagination.png" width="250" height="" style=""/>
<p>You can also write a custom pagination component and register it as a global component. then pass its
name to this option.</p>
<h2 id="smoothscroll" tabindex="-1"><a class="header-anchor" href="#smoothscroll" aria-hidden="true">#</a> smoothScroll</h2>
<ul>
<li>Type: <code>boolean</code></li>
<li>Default: <code>false</code></li>
</ul>
<p>The <code>themeConfig.smoothScroll</code> option allows you to enable smooth scrolling.</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// .vuepress/config.js
module.exports = {
  themeConfig: {
    smoothScroll: true
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
