import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.946a5a33.js";const p={},t=e(`<h1 id="webpack\u5F00\u53D1\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u5F00\u53D1\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> webpack\u5F00\u53D1\u73AF\u5883\u914D\u7F6E</h1><ul><li>\u6253\u5305\u6837\u5F0F\u8D44\u6E90</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i css-loader style-loader less-loader <span class="token function">less</span> -D   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6253\u5305html\u8D44\u6E90</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6253\u5305\u56FE\u7247\u8D44\u6E90</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-loader url-loader file-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6253\u5305\u5176\u4ED6\u8D44\u6E90</li><li>devServer</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
  \u5F00\u53D1\u73AF\u5883\u914D\u7F6E\uFF1A\u80FD\u8BA9\u4EE3\u7801\u8FD0\u884C
    \u8FD0\u884C\u9879\u76EE\u6307\u4EE4\uFF1A
      webpack \u4F1A\u5C06\u6253\u5305\u7ED3\u679C\u8F93\u51FA\u51FA\u53BB
      npx webpack-dev-server \u53EA\u4F1A\u5728\u5185\u5B58\u4E2D\u7F16\u8BD1\u6253\u5305\uFF0C\u6CA1\u6709\u8F93\u51FA
*/</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader\u7684\u914D\u7F6E</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406less\u8D44\u6E90</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
         <span class="token comment">// use\u6570\u7EC4\u4E2Dloader\u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE\u4E0B\u5230\u4E0A \u4F9D\u6B21\u6267\u884C</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u521B\u5EFAstyle\u6807\u7B7E\uFF0C\u5C06js\u4E2D\u7684\u6837\u5F0F\u8D44\u6E90\u63D2\u5165\u8FDB\u884C\uFF0C\u6DFB\u52A0\u5230head\u4E2D\u751F\u6548</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> 
          <span class="token comment">// \u5C06css\u6587\u4EF6\u53D8\u6210commonjs\u6A21\u5757\u52A0\u8F7Djs\u4E2D\uFF0C\u91CC\u9762\u5185\u5BB9\u662F\u6837\u5F0F\u5B57\u7B26\u4E32</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> 
          <span class="token comment">// \u5C06less\u6587\u4EF6\u7F16\u8BD1\u6210css\u6587\u4EF6</span>
          <span class="token comment">// \u9700\u8981\u4E0B\u8F7D less-loader\u548Cless</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406css\u8D44\u6E90</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406\u56FE\u7247\u8D44\u6E90</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u56FE\u7247\u5927\u5C0F\u5C0F\u4E8E8kb\uFF0C\u5C31\u4F1A\u88ABbase64\u5904\u7406</span>
          <span class="token comment">// \u4F18\u70B9: \u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\uFF08\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B\uFF09</span>
          <span class="token comment">// \u7F3A\u70B9\uFF1A\u56FE\u7247\u4F53\u79EF\u4F1A\u66F4\u5927\uFF08\u6587\u4EF6\u8BF7\u6C42\u901F\u5EA6\u66F4\u6162\uFF09</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token comment">// \u7ED9\u56FE\u7247\u8FDB\u884C\u91CD\u547D\u540D</span>
          <span class="token comment">// [hash:10]\u53D6\u56FE\u7247\u7684hash\u7684\u524D10\u4F4D</span>
          <span class="token comment">// [ext]\u53D6\u6587\u4EF6\u539F\u6765\u6269\u5C55\u540D</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u95EE\u9898\uFF1A\u56E0\u4E3Aurl-loader\u9ED8\u8BA4\u4F7F\u7528es6\u6A21\u5757\u5316\u89E3\u6790\uFF0C\u800Chtml-loader\u5F15\u5165\u56FE\u7247\u662Fcommonjs</span>
          <span class="token comment">// \u89E3\u6790\u65F6\u4F1A\u51FA\u95EE\u9898\uFF1A[object Module]</span>
          <span class="token comment">// \u89E3\u51B3\uFF1A\u5173\u95EDurl-loader\u7684es6\u6A21\u5757\u5316\uFF0C\u4F7F\u7528commonjs\u89E3\u6790</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;imgs&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406html\u4E2Dimg\u8D44\u6E90</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406\u5176\u4ED6\u8D44\u6E90</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(html|js|css|less|jpg|png|gif)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;media&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// plugins\u7684\u914D\u7F6E</span>
    <span class="token comment">// html-webpack-plugin </span>
    <span class="token comment">// \u529F\u80FD\uFF1A\u9ED8\u8BA4\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 HTML\uFF0C\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u6240\u6709\u8D44\u6E90\uFF08JS/CSS\uFF09</span>
   <span class="token comment">// \u9700\u6C42\uFF1A\u9700\u8981\u6709\u7ED3\u6784\u7684 HTML \u6587\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u5F00\u53D1\u670D\u52A1\u5668 devServer\uFF1A\u7528\u6765\u81EA\u52A8\u5316\uFF08\u81EA\u52A8\u7F16\u8BD1\uFF0C\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u81EA\u52A8\u5237\u65B0\u6D4F\u89C8\u5668~~\uFF09</span>
  <span class="token comment">// \u7279\u70B9\uFF1A\u53EA\u4F1A\u5728\u5185\u5B58\u4E2D\u7F16\u8BD1\u6253\u5305\uFF0C\u4E0D\u4F1A\u6709\u4EFB\u4F55\u8F93\u51FA</span>
  <span class="token comment">// \u542F\u52A8devServer\u6307\u4EE4\u4E3A\uFF1Anpx webpack-dev-server</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9879\u76EE\u6784\u5EFA\u540E\u8DEF\u5F84</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u542F\u52A8gzip\u538B\u7F29</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7AEF\u53E3\u53F7</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[t];function o(i,c){return s(),a("div",null,l)}var d=n(p,[["render",o],["__file","development.html.vue"]]);export{d as default};
