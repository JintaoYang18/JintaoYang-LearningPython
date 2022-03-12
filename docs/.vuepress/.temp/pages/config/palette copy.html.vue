<template><h1 id="palette" tabindex="-1"><a class="header-anchor" href="#palette" aria-hidden="true">#</a> Palette</h1>
<p>We've mentioned <code>palette.styl</code> in <RouterLink to="/#folder-structure">Folder structure</RouterLink>, it should be under the <code>styles</code> folder. Its purpose is to override global color settings. With <code>palette.styl</code>, you have the ability to modify not only colors but also layout. Here's what you can configure:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// colors</span>
<span class="token variable-declaration"><span class="token variable">$accentColor</span> <span class="token operator">=</span> <span class="token func"><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token hexcode">#4a154b</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>

<span class="token variable-declaration"><span class="token variable">$textColor</span> <span class="token operator">=</span> <span class="token hexcode">#2c3e50</span></span>
<span class="token variable-declaration"><span class="token variable">$darkTextColor</span> <span class="token operator">=</span> <span class="token hexcode">#000</span></span>

<span class="token variable-declaration"><span class="token variable">$borderColor</span> <span class="token operator">=</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$darkTextColor<span class="token punctuation">,</span><span class="token number">.05</span><span class="token punctuation">)</span></span></span>
<span class="token variable-declaration"><span class="token variable">$darkBorderColor</span> <span class="token operator">=</span> $darkTextColor</span>

<span class="token variable-declaration"><span class="token variable">$codeBgColor</span> <span class="token operator">=</span> $darkTextColor</span>

<span class="token variable-declaration"><span class="token variable">$bgColor</span> <span class="token operator">=</span> <span class="token hexcode">#fff</span></span>
<span class="token variable-declaration"><span class="token variable">$headerBgColor</span> <span class="token operator">=</span> $bgColor<span class="token punctuation">;</span></span>

<span class="token variable-declaration"><span class="token variable">$footerBgColor</span> <span class="token operator">=</span> $darkTextColor</span>
<span class="token variable-declaration"><span class="token variable">$footerColor</span> <span class="token operator">=</span> <span class="token hexcode">#828282</span></span>

<span class="token variable-declaration"><span class="token variable">$newsletterBgColor</span> <span class="token operator">=</span> <span class="token hexcode">#f8f8f8</span></span>

<span class="token comment">// layout</span>
<span class="token variable-declaration"><span class="token variable">$contentWidth</span> <span class="token operator">=</span> <span class="token number">740</span><span class="token unit">px</span></span>

<span class="token comment">// responsive breakpoints</span>
<span class="token variable-declaration"><span class="token variable">$MQNarrow</span> <span class="token operator">=</span> <span class="token number">959</span><span class="token unit">px</span></span>
<span class="token variable-declaration"><span class="token variable">$MQMobile</span> <span class="token operator">=</span> <span class="token number">719</span><span class="token unit">px</span></span>
<span class="token variable-declaration"><span class="token variable">$MQMobileNarrow</span> <span class="token operator">=</span> <span class="token number">419</span><span class="token unit">px</span></span>

<span class="token comment">// code</span>
<span class="token variable-declaration"><span class="token variable">$lineNumbersWrapperWidth</span> <span class="token operator">=</span> <span class="token number">3.5</span><span class="token unit">rem</span></span>
<span class="token variable-declaration"><span class="token variable">$codeLang</span> <span class="token operator">=</span> js ts html md vue css sass scss less stylus go java c sh yaml py docker dockerfile makefile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Reference:</p>
<ul>
<li><a href="https://vuepress.vuejs.org/config/#styling" target="_blank" rel="noopener noreferrer">palette-styl<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Tip</p>
<p>Another easy approach to modify styles is <a href="https://vuepress.vuejs.org/config/#index-styl" target="_blank" rel="noopener noreferrer">index.styl<ExternalLinkIcon/></a>. The extra styles you add has a higher priority than what this theme provides.</p>
</div>
</template>
