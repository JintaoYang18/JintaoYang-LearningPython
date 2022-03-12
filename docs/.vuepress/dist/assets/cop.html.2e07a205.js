import{r as o,o as l,a as i,b as n,d as e,w as p,F as c,e as s,c as t}from"./app.6b69b8f5.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";var d="/JintaoYang-LearningPython/assets/pagination.5fa91d4f.png",b="/JintaoYang-LearningPython/assets/simple-pagination.c7069ee5.png";const m={},h=n("h1",{id:"options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),s(" Options")],-1),g=n("h2",{id:"dateformat",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dateformat","aria-hidden":"true"},"#"),s(" dateFormat")],-1),f=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"string")]),n("li",null,[s("Default: "),n("code",null,"'ddd MMM DD YYYY'")])],-1),_=s("The "),y=s("date"),k=s(" will be displayed in the layout with this format. You can find all available formats "),v={href:"https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#displaying",target:"_blank",rel:"noopener noreferrer"},x=s("here"),S=t(`<p>e.g.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dateFormat</span><span class="token operator">:</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="nav" tabindex="-1"><a class="header-anchor" href="#nav" aria-hidden="true">#</a> nav</h2><ul><li>Type: <code>Array&lt;{ text: string, link: string }&gt;</code></li><li>Default: <code>See below</code></li></ul><p>Links you wish to be displayed at navbar.</p><p>Here&#39;s the default:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Blog&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Tags&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/tag/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h2><h3 id="footer-contact" tabindex="-1"><a class="header-anchor" href="#footer-contact" aria-hidden="true">#</a> footer.contact</h3><ul><li>Type: <code>Array&lt;{ type: ContactType, link: string }&gt;</code></li><li>Default: <code>undefined</code></li></ul><p>Contact information, displayed on the left side of footer.</p><p>e.g.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">contact</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuejs/vuepress&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;twitter&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuejs/vuepress&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>For now <code>ContactType</code> supports following enums:</p><ul><li>codepen</li><li>codesandbox</li><li>facebook</li><li>github</li><li>gitlab</li><li>instagram</li><li>linkedin</li><li>mail</li><li>messenger</li><li>music</li><li>phone</li><li>twitter</li><li>video</li><li>web</li><li>youtube</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Welcome contribution of adding more built-in contact type.</p></div><h3 id="footer-copyright" tabindex="-1"><a class="header-anchor" href="#footer-copyright" aria-hidden="true">#</a> footer.copyright</h3><ul><li>Type: <code>Array&lt;{ text: string, link?: string }&gt;</code></li><li>Default: <code>undefined</code></li></ul><p>Copyright information, displayed on the right side of footer.</p><p>e.g.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">copyright</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Privacy Policy&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://policies.google.com/privacy?hl=en-US&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;MIT Licensed | Copyright \xA9 2018-present Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="directories" tabindex="-1"><a class="header-anchor" href="#directories" aria-hidden="true">#</a> directories</h2><ul><li>Type: <code>DirectoryClassifier[]</code></li><li>Default: <code>See below</code></li></ul><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>[
  {
    id: &#39;post&#39;,
    dirname: &#39;_posts&#39;,
    path: &#39;/&#39;,
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>By default, pages are placed in <code>_post</code>, and the path for post list is <code>/</code>. Here&#39;s an example if you wish to customize it:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>[
  {
    id: &#39;writing&#39;, // Unique id for current classifier
    dirname: &#39;_writings&#39;, // Matched directory name
    path: &#39;/writings/&#39;, // Entry page for current classifier
    title: &#39;\u96A8\u7B46&#39;, // Entry and pagination page titles for current classifier.
    layout: &#39;IndexWriting&#39;, // Layout component name for entry page.
    frontmatter:{ //Front matter for entry page.
      tag: &#39;vuepress&#39;
    },
    itemLayout: &#39;Writing&#39;, // Layout for matched pages.
    itemPermalink: &#39;/writings/:year/:month/:day/:slug&#39;, // Permalink for matched pages.
    pagination: { // Pagination behavior
      lengthPerPage: 2,
    },
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Reference:</p>`,27),w={href:"https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#document-classifier",target:"_blank",rel:"noopener noreferrer"},J=s("document classifiers"),T=t(`<h2 id="frontmatters" tabindex="-1"><a class="header-anchor" href="#frontmatters" aria-hidden="true">#</a> frontmatters</h2><ul><li>Type: <code>FrontmatterClassifier[]</code></li><li>Default: <code>See below</code></li></ul><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>[
  {
    id: &#39;tag&#39;,
    keys: [&#39;tag&#39;, &#39;tags&#39;],
    path: &#39;/tag/&#39;,
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Only <code>tag</code> and <code>tags</code> in front matter will be classified, and the path for it is <code>&#39;/tag/&#39;</code> by default. Let&#39;s see how to customize it:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>[
  {
    id: &#39;location&#39;, // Unique id for current classifier
    keys: [&#39;location&#39;], // Frontmatter keys used to classify pages
    path: &#39;/location/&#39;, // Entry page for current classifier
    title: &#39;\u5730\u9EDE&#39;, // Entry, scope and pagination page titles for current classifier.
    layout: &#39;IndexLocation&#39;, // Layout component name for entry page.
    scopeLayout: &#39;ScopeLocation&#39;, // Layout component name for scope page.
    frontmatter: { //Front matter for entry page.
      description: &#39;Hello&#39;
    }, 
    pagination: { // Pagination behavior
      lengthPerPage: 2,
    }, 
  },
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Reference:</p>`,6),P={href:"https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#frontmatter-classifier",target:"_blank",rel:"noopener noreferrer"},j=s("Frontmatter Classifier"),D=t(`<h2 id="globalpagination" tabindex="-1"><a class="header-anchor" href="#globalpagination" aria-hidden="true">#</a> globalPagination</h2><ul><li>Type: <code>object</code></li><li>Default: <code>{ lengthPerPage: 5 }</code></li></ul><p>Pagination config for all directories and frontmatters. For example:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>{
  prevText:&#39;\u4E0A\u4E00\u9801&#39;, // Text for previous links.
  nextText:&#39;\u4E0B\u4E00\u9801&#39;, // Text for next links.
  lengthPerPage:&#39;2&#39;, // Maximum number of posts per page.
  layout:&#39;Pagination&#39;, // Layout for pagination page
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,4),L=s("For more information, please visit "),Y={href:"https://vuepress-plugin-blog.billyyyyy3320.com/pagination/#sorter",target:"_blank",rel:"noopener noreferrer"},C=s("Pagination Config"),q=s("."),F=t(`<h2 id="sitemap" tabindex="-1"><a class="header-anchor" href="#sitemap" aria-hidden="true">#</a> sitemap</h2><ul><li>Type: <code>object</code></li><li>Default: <code>undefined</code></li></ul><p>You can simply enable it by filling out <code>hostname</code> property with your host name:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>{
  hostname: &#39;https://yourdomain&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),I=s("Please head "),M={href:"https://github.com/ekoeryanto/vuepress-plugin-sitemap#options",target:"_blank",rel:"noopener noreferrer"},A=s("vuepress-plugin-sitemap"),W=s(" for more details."),E=t(`<h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h2><ul><li>Type: <code>object</code></li><li>Default: <code>undefined</code></li></ul><p>Vssue and Disqus are our built-in comment services. Here&#39;s the required properties to enable:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// Disqus
{
  service: &quot;disqus&quot;,
  shortname: &quot;Your blog&#39;s shortname&quot;,
}

// Vssue
{
  service: &#39;vssue&#39;,
  owner: &#39;You&#39;,
  repo: &#39;Your repo&#39;, 
  clientId: &#39;Your clientId&#39;,
  clientSecret: &#39;Your clientSecret&#39;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4),R=s("For setting the shortname for disqus, visit "),V={href:"https://help.disqus.com/en/articles/1717111-what-s-a-shortname",target:"_blank",rel:"noopener noreferrer"},B=s("here"),N=n("p",null,"Further configuration, please visit:",-1),H={href:"https://vuepress-plugin-disqus.netlify.com/#usage",target:"_blank",rel:"noopener noreferrer"},U=s("vuepress-plugin-disqus-comment"),z={href:"https://vssue.js.org/guide/vuepress.html#usage",target:"_blank",rel:"noopener noreferrer"},O=s("vuepress-plugin-vssue"),G=t(`<h2 id="newsletter" tabindex="-1"><a class="header-anchor" href="#newsletter" aria-hidden="true">#</a> newsletter</h2><ul><li>Type: <code>object</code></li><li>Default: <code>undefined</code></li></ul><p>Mailchimp is our default newsletter service. The only required property to enable newsletter is <code>endpoint</code>:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>{
  endpoint: &#39;https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;amp;id=bd18d40138&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),K=s("Please head "),Q={href:"https://vuepress-plugin-mailchimp.billyyyyy3320.com/#config",target:"_blank",rel:"noopener noreferrer"},X=s("vuepress-plugin-mailchimp"),Z=s(" to see how to get your "),$=n("code",null,"endpoint",-1),nn=s("."),sn=t(`<h2 id="feed" tabindex="-1"><a class="header-anchor" href="#feed" aria-hidden="true">#</a> feed</h2><ul><li>Type: <code>object</code></li><li>Default: <code>undefined</code></li></ul><p>RSS, Atom, and even JSON feeds are supported. The only required property to enable feed is <code>canonical_base</code>:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>{
  canonical_base:&#39;http://yoursite&#39;,
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>RSS is the default type of feed.</p>`,5),en=s("All the options in "),an={href:"https://github.com/webmasterish/vuepress-plugin-feed#options",target:"_blank",rel:"noopener noreferrer"},tn=s("vuepress-plugin-feed"),rn=s(" are available. Moreover, we present an easier approach to enable/disable the feed types, for instance:"),on=t(`<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>{
  canonical_base:&#39;http://yoursite&#39;,
  rss:false
  atom:true,
  json:false
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1),pn={class:"custom-container tip"},ln=n("p",{class:"custom-container-title"},"TIP",-1),cn=s("If you plan to deploy your site under a sub path, and you have configured "),un={href:"https://vuepress.vuejs.org/config/#base",target:"_blank",rel:"noopener noreferrer"},dn=s("base URL"),bn=s(", you won't need to pass it again to "),mn=n("code",null,"canonical_base",-1),hn=s("."),gn=n("h2",{id:"summary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),s(" summary")],-1),fn=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"boolean")]),n("li",null,[s("Default: "),n("code",null,"true")])],-1),_n=s("Whether to automatically extract summary from source markdowns. You can write summary manually by "),yn=s("front matter"),kn=s(". Summary is not only for displaying but also page meta description."),vn=t('<h2 id="summarylength" tabindex="-1"><a class="header-anchor" href="#summarylength" aria-hidden="true">#</a> summaryLength</h2><ul><li>Type: <code>number</code></li><li>Default: <code>200</code></li></ul><p>Set the length of summary.</p><h2 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> pwa</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul>',5),xn=s("Whether to enable PWA support. this option is powered by the "),Sn={href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html",target:"_blank",rel:"noopener noreferrer"},wn=s("official PWA plugin"),Jn=s("."),Tn=t(`<p>if you enable this option, the default options of the internal PWA plugin is as follows:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">serviceWorker</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">updatePopup</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="paginationcomponent" tabindex="-1"><a class="header-anchor" href="#paginationcomponent" aria-hidden="true">#</a> paginationComponent</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;Pagination&#39;</code></li></ul><p>Custom the pagination component.</p>`,5),Pn=s("The default is the "),jn={href:"https://vuepress-plugin-blog.billyyyyy3320.com/components/#pagination",target:"_blank",rel:"noopener noreferrer"},Dn=s("pagination component"),Ln=s(" powerful by "),Yn={href:"https://github.com/ulivz/vuepress-plugin-blog",target:"_blank",rel:"noopener noreferrer"},Cn=s("@vuepress/plugin-blog"),qn=s(":"),Fn=n("img",{src:d,width:"250",height:"",style:{}},null,-1),In=s("You can set this option to "),Mn=n("code",null,"SimplePagination",-1),An=s(" to enable another out-of-box "),Wn={href:"https://vuepress-plugin-blog.billyyyyy3320.com/components/#simplepagination",target:"_blank",rel:"noopener noreferrer"},En=s("simple pagination component"),Rn=s(":"),Vn=t('<img src="'+b+`" width="250" height="" style=""><p>You can also write a custom pagination component and register it as a global component. then pass its name to this option.</p><h2 id="smoothscroll" tabindex="-1"><a class="header-anchor" href="#smoothscroll" aria-hidden="true">#</a> smoothScroll</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>The <code>themeConfig.smoothScroll</code> option allows you to enable smooth scrolling.</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// .vuepress/config.js
module.exports = {
  themeConfig: {
    smoothScroll: true
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,6);function Bn(Nn,Hn){const r=o("RouterLink"),a=o("ExternalLinkIcon");return l(),i(c,null,[h,g,f,n("p",null,[_,e(r,{to:"/config/front-matter.html#date"},{default:p(()=>[y]),_:1}),k,n("a",v,[x,e(a)])]),S,n("ul",null,[n("li",null,[n("a",w,[J,e(a)])])]),T,n("ul",null,[n("li",null,[n("a",P,[j,e(a)])])]),D,n("p",null,[L,n("a",Y,[C,e(a)]),q]),F,n("p",null,[I,n("a",M,[A,e(a)]),W]),E,n("p",null,[R,n("a",V,[B,e(a)])]),N,n("ul",null,[n("li",null,[n("a",H,[U,e(a)])]),n("li",null,[n("a",z,[O,e(a)])])]),G,n("p",null,[K,n("a",Q,[X,e(a)]),Z,$,nn]),sn,n("p",null,[en,n("a",an,[tn,e(a)]),rn]),on,n("div",pn,[ln,n("p",null,[cn,n("a",un,[dn,e(a)]),bn,mn,hn])]),gn,fn,n("p",null,[_n,e(r,{to:"/config/front-matter.html#summary"},{default:p(()=>[yn]),_:1}),kn]),vn,n("p",null,[xn,n("a",Sn,[wn,e(a)]),Jn]),Tn,n("p",null,[Pn,n("a",jn,[Dn,e(a)]),Ln,n("a",Yn,[Cn,e(a)]),qn]),Fn,n("p",null,[In,Mn,An,n("a",Wn,[En,e(a)]),Rn]),Vn],64)}var On=u(m,[["render",Bn]]);export{On as default};
