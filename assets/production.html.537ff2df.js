import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.6627d77d.js";const p={},t=e(`<h1 id="webpack\u751F\u4EA7\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u751F\u4EA7\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> webpack\u751F\u4EA7\u73AF\u5883\u914D\u7F6E</h1><ul><li>\u63D0\u53D6 css \u6210\u5355\u72EC\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>css \u517C\u5BB9\u6027\u5904\u7406</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev postcss-loader postcss-preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u538B\u7F29 css</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev optimize-css-assets-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>js\u8BED\u6CD5\u68C0\u67E5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>js \u517C\u5BB9\u6027\u5904\u7406</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-loader @babel/core @babel/preset-env @babel/polyfill core-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>js \u538B\u7F29</li><li>HTML \u538B\u7F29</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49nodejs\u73AF\u5883\u53D8\u91CF\uFF1A\u51B3\u5B9A\u4F7F\u7528browserslist\u7684\u54EA\u4E2A\u73AF\u5883</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u590D\u7528loader</span>
<span class="token keyword">const</span> commonCssLoader <span class="token operator">=</span> <span class="token punctuation">[</span>
  MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
  <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD8\u9700\u8981\u5728package.json\u4E2D\u5B9A\u4E49browserslist</span>
    <span class="token comment">// css\u517C\u5BB9\u6027\u5904\u7406\uFF1Apostcss --&gt; postcss-loader postcss-preset-env</span>
    <span class="token comment">// \u5E2Epostcss\u627E\u5230package.json\u4E2Dbrowserslist\u91CC\u9762\u7684\u914D\u7F6E\uFF0C\u901A\u8FC7\u914D\u7F6E\u52A0\u8F7D\u6307\u5B9A\u7684css\u517C\u5BB9\u6027\u6837\u5F0F</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">plugins</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/built.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>commonCssLoader<span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">/*
        \u6B63\u5E38\u6765\u8BB2\uFF0C\u4E00\u4E2A\u6587\u4EF6\u53EA\u80FD\u88AB\u4E00\u4E2Aloader\u5904\u7406\u3002
        \u5F53\u4E00\u4E2A\u6587\u4EF6\u8981\u88AB\u591A\u4E2Aloader\u5904\u7406\uFF0C\u90A3\u4E48\u4E00\u5B9A\u8981\u6307\u5B9Aloader\u6267\u884C\u7684\u5148\u540E\u987A\u5E8F\uFF1A
          \u5148\u6267\u884Ceslint \u5728\u6267\u884Cbabel
      */</span>
      <span class="token punctuation">{</span>
         <span class="token comment">/*
        \u8BED\u6CD5\u68C0\u67E5\uFF1A eslint-loader  eslint
          \u6CE8\u610F\uFF1A\u53EA\u68C0\u67E5\u81EA\u5DF1\u5199\u7684\u6E90\u4EE3\u7801\uFF0C\u7B2C\u4E09\u65B9\u7684\u5E93\u662F\u4E0D\u7528\u68C0\u67E5\u7684
          \u8BBE\u7F6E\u68C0\u67E5\u89C4\u5219\uFF1A
            package.json\u4E2DeslintConfig\u4E2D\u8BBE\u7F6E~
              &quot;eslintConfig&quot;: {
                &quot;extends&quot;: &quot;airbnb-base&quot;
              }
            airbnb --&gt; eslint-config-airbnb-base  eslint-plugin-import eslint
      */</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u4F18\u5148\u6267\u884C</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u81EA\u52A8\u4FEE\u590Deslint\u7684\u9519\u8BEF</span>
          <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token comment">/*
        js\u517C\u5BB9\u6027\u5904\u7406\uFF1Ababel-loader @babel/core 
          1. \u57FA\u672Cjs\u517C\u5BB9\u6027\u5904\u7406 --&gt; @babel/preset-env
            \u95EE\u9898\uFF1A\u53EA\u80FD\u8F6C\u6362\u57FA\u672C\u8BED\u6CD5\uFF0C\u5982promise\u9AD8\u7EA7\u8BED\u6CD5\u4E0D\u80FD\u8F6C\u6362
          2. \u5168\u90E8js\u517C\u5BB9\u6027\u5904\u7406 --&gt; @babel/polyfill  
            \u95EE\u9898\uFF1A\u6211\u53EA\u8981\u89E3\u51B3\u90E8\u5206\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u4F46\u662F\u5C06\u6240\u6709\u517C\u5BB9\u6027\u4EE3\u7801\u5168\u90E8\u5F15\u5165\uFF0C\u4F53\u79EF\u592A\u5927\u4E86~
          3. \u9700\u8981\u505A\u517C\u5BB9\u6027\u5904\u7406\u7684\u5C31\u505A\uFF1A\u6309\u9700\u52A0\u8F7D  --&gt; core-js
      */</span>  
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token comment">// \u9884\u8BBE\uFF1A\u6307\u793Ababel\u505A\u600E\u4E48\u6837\u7684\u517C\u5BB9\u6027\u5904\u7406</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
              <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token comment">// \u6309\u9700\u52A0\u8F7D</span>
                <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// \u6307\u5B9Acore-js\u7248\u672C</span>
                <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// \u6307\u5B9A\u517C\u5BB9\u6027\u505A\u5230\u54EA\u4E2A\u7248\u672C\u6D4F\u89C8\u5668</span>
                <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">ie</span><span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;imgs&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|css|less|html|jpg|png|gif)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;media&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token comment">// \u5BF9\u8F93\u51FA\u7684css\u6587\u4EF6\u8FDB\u884C\u91CD\u547D\u540D</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/built.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u538B\u7F29css</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u538B\u7F29html\u4EE3\u7801</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u79FB\u9664\u7A7A\u683C</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u79FB\u9664\u6CE8\u91CA</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u751F\u4EA7\u73AF\u5883\u4E0B\u4F1A\u81EA\u52A8\u538B\u7F29js\u4EE3\u7801</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function o(i,c){return n(),a("div",null,l)}var d=s(p,[["render",o],["__file","production.html.vue"]]);export{d as default};
