import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.946a5a33.js";const t={},e=p(`<h1 id="react\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#react\u57FA\u7840" aria-hidden="true">#</a> React\u57FA\u7840</h1><h2 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h2><p>React\u91C7\u7528MVC, Vue\u91C7\u7528\u7684\u662FMVVM\u4F53\u7CFB</p><ul><li>MVC: model\u6570\u636E\u5C42+view\u89C6\u56FE\u5C42+controller\u63A7\u5236\u5C42 <ul><li>React\u901A\u8FC7jsx\u6784\u5EFA\u89C6\u56FE</li><li>\u6784\u5EFA\u6570\u636E\u5C42\uFF0C\u89C6\u56FE\u4E2D\u9700\u8981\u52A8\u6001\u5904\u7406\u7684\u90FD\u9700\u8981\u6709\u5BF9\u5E94\u7684\u6570\u636E\u6A21\u578B</li><li>\u63A7\u5236\u5C42\uFF1A\u5728\u89C6\u56FE\u4E2D\u8FDB\u884C\u67D0\u4E9B\u64CD\u4F5C\u65F6\uFF0C\u90FD\u662F\u53BB\u4FEE\u6539\u76F8\u5173\u7684\u6570\u636E\uFF0CReact\u4F1A\u6309\u7167\u6700\u65B0\u7684\u6570\u636E\u91CD\u65B0\u6E32\u67D3</li></ul></li></ul><p>\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u6E32\u67D3</p><p>\u89C6\u56FE\u4E2D\u7684\u8868\u5355\u5185\u5BB9\u6539\u53D8\uFF0C\u60F3\u8981\u4FEE\u6539\u6570\u636E\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u5199\u4EE3\u7801\u5B9E\u73B0</p><ul><li>MVVM\uFF1Amodel\u6570\u636E\u5C42+view\u89C6\u56FE\u5C42+viewModel\u6570\u636E/\u89C6\u56FE\u76D1\u542C\u5C42 - \u6570\u636E\u9A71\u52A8\u89C6\u56FE\u7684\u6E32\u67D3\uFF1A\u76D1\u542C\u6570\u636E\u66F4\u65B0\uFF0C\u89C6\u56FE\u91CD\u65B0\u6E32\u67D3 - \u89C6\u56FE\u9A71\u52A8\u6570\u636E\u7684\u66F4\u6539\uFF1A\u76D1\u542C\u9875\u9762\u4E2D\u8868\u5355\u5143\u7D20\u5185\u5BB9\u6539\u53D8\uFF0C\u81EA\u52A8\u4FEE\u6539\u76F8\u5173\u7684\u6570\u636E</li></ul><h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2><h3 id="jsx\u4F7F\u7528\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#jsx\u4F7F\u7528\u7EC6\u8282" aria-hidden="true">#</a> JSX\u4F7F\u7528\u7EC6\u8282</h3><p>JSX: JavaScript and xml(html) \u628Ajs\u548Chtml\u6807\u7B7E\u6DF7\u5408\u5728\u4E86\u4E00\u8D77</p><ul><li>HTML\u9875\u9762\u4E2D\u5D4C\u5165\u2019JS\u8868\u8FBE\u5F0F\u2018 \uFF0C\u501F\u52A9**{ js\u8868\u8FBE\u5F0F }**</li><li>ReactDOM.createRoot()\u65F6\uFF0C\u4E0D\u8981\u76F4\u63A5\u628Ahtml/body\u4F5C\u4E3A\u6839\u5BB9\u5668\uFF0C\u6307\u5B9A\u4E00\u4E2A\u989D\u5916\u7684\u76D2\u5B50\u5982\u2019#root\u2018</li><li>\u6BCF\u4E00\u4E2A\u6784\u5EFA\u7684\u89C6\u56FE\uFF0C\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u8282\u70B9</li><li>React\u63D0\u4F9B\u7279\u6B8A\u7684\u8282\u70B9(\u6807\u7B7E): React.Fragment \u7A7A\u6587\u6863\u6807\u8BB0\u6807\u7B7E &lt;&gt;&lt;/&gt; <ul><li>\u65E2\u4FDD\u8BC1\u53EA\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF0C\u53C8\u4E0D\u4F1A\u65B0\u589EHTML\u5C42\u7EA7\u7ED3\u6784</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
<span class="token operator">&lt;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx\u5177\u4F53\u8FD0\u7528" tabindex="-1"><a class="header-anchor" href="#jsx\u5177\u4F53\u8FD0\u7528" aria-hidden="true">#</a> JSX\u5177\u4F53\u8FD0\u7528</h3><p>{} \u5D4C\u5165\u4E0D\u540C\u7684\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> text <span class="token operator">=</span> 
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
   <span class="token punctuation">{</span> text <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>number/string: \u503C\u662F\u4EC0\u4E48\uFF0C\u5C31\u6E32\u67D3\u51FA\u6765\u4EC0\u4E48</p></li><li><p>boolean/null/undefined/Symbol/BigInt\uFF1A \u6E32\u67D3\u5185\u5BB9\u4E3A\u7A7A</p></li><li><p>\u666E\u901A\u5BF9\u8C61\uFF1A \u4E0D\u652F\u6301\u6E32\u67D3\uFF0C\u9664\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5176\u4F59\u4E00\u822C\u90FD\u4E0D\u652F\u6301\uFF08\u6B63\u5219\u3001\u65E5\u671F\u3001\u5305\u88C5\u7C7B\u578B\uFF09\uFF0C\u4E5F\u6709\u7279\u6B8A\u60C5\u51B5</p><ul><li>JSX\u865A\u62DFDOM\u5BF9\u8C61</li><li>\u7ED9\u5143\u7D20\u8BBE\u7F6Estyle\u884C\u5185\u6837\u5F0F\uFF0C\u9700\u8981\u8BBE\u7F6E\u6210\u5BF9\u8C61\u683C\u5F0F</li></ul></li><li><p>\u6570\u7EC4\uFF1A\u628A\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879<strong>\u5206\u522B\u62FF\u51FA\u6765\u6E32\u67D3</strong>\uFF0C<strong>\u5E76\u4E0D\u662F\u53D8\u6210\u5B57\u7B26\u4E32</strong>\uFF0C \u6CA1\u6709\u9017\u53F7</p></li><li><p>\u51FD\u6570\u5BF9\u8C61\uFF1A\u4E0D\u652F\u6301\u5728{}\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u51FD\u6570\u7EC4\u4EF6\u6E32\u67D3</p></li></ul><p>\u5BC6\u96C6\u6570\u7EC4\uFF1A\u6BCF\u4E00\u9879\u90FD\u6709\u503C\uFF0C\u54EA\u6015\u503C\u662Fnull\uFF0C\u4E0E\u4E4B\u5BF9\u5E94\u7684\u662F\u7A00\u758F\u6570\u7EC4</p><p><strong>\u7A00\u758F\u6570\u7EC4\u4E0D\u80FD\u4F7F\u7528\u6570\u7EC4\u7684\u8FED\u4EE3\u65B9\u6CD5</strong>\uFF0C\u6BD4\u5982forEach\u548Cmap</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ &lt;5 empty items&gt; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ &#39;4&#39; ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 3, 10 ]</span>
arr1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u4F1A\u8F93\u51FA5\u4E2Aok</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;OK&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8F93\u51FA5\u4E2AOK</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx\u5E95\u5C42\u6E32\u67D3\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#jsx\u5E95\u5C42\u6E32\u67D3\u673A\u5236" aria-hidden="true">#</a> JSX\u5E95\u5C42\u6E32\u67D3\u673A\u5236</h3><ol><li><p>\u628A\u7F16\u5199\u7684JSX\u8BED\u6CD5\uFF0C\u7F16\u8BD1\u4E3A\u865B\u62DFDOM\u5BF9\u8C61 \u300CvirtualDOM\u300D</p><ul><li><p>\u865B\u62DFDOM\u5BF9\u8C61\uFF1A\u6846\u67B6\u81EA\u5DF1\u5185\u90E8\u6784\u5EFA\u7684\u4E00\u5957\u5BF9\u8C61\u4F53\u7CFB \uFF08\u5BF9\u8C61\u7684\u76F8\u5173\u6210\u5458\u90FD\u662FReact\u5185\u90E8\u89C4\u5B9A\u7684\uFF09\uFF0C\u57FA\u4E8E\u8FD9\u4E9B\u5C5E\u6027\u63CF\u8FF0\u51FA\uFF0C\u6211\u4EEC\u6240\u6784\u5EFA\u89C6\u56FE\u4E2D\u7684DOM\u8282\u70B9\u7684\u76F8\u5173\u7279\u5F81.</p><ul><li>\u57FA\u4E8E <code>babel-preset-react-app</code>\u628AJSX\u7F16\u8BD1\u4E3A React.createElement(...\uFF09\u8FD9\u79CD\u683C\u5F0F,\u53EA\u8981\u662F\u5143\u7D20\u8282\u70B9\uFF0C\u5FC5\u7136\u4F1A\u57FA\u4E8EcreateElement\u8FDB\u884C\u5904\u7406<br> React . createElement (ele,props, children)</li><li>ele\uFF1A \u5143\u7D20\u6807\u7B7E\u540D\u300C\u6216\u7EC4\u4EF6\u300D</li><li>props\uFF1A\u5143\u7D20\u7684\u5C5E\u6027\u96C6\u5408(\u5BF9\u8C61\uFF09\u300C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u8FC7\u4EFB\u4F55\u7684\u5C5E\u6027\uFF0C\u5219\u6B64\u503C\u662Fnull</li><li>children\uFF1A\u7B2C\u4E09\u4E2A\u53CA\u4EE5\u540E\u7684\u53C2\u6570\uFF0C\u90FD\u662F\u5F53\u524D\u5143\u7D20\u7684\u5B50\u8282\u70B9</li></ul></li><li><p>\u518D\u628A createElement \u65B9\u6CD5\u6267\u884C\uFF0C\u521B\u5EFA\u51FAvirtualDOM\u865A\u62DFDOM\u5BF9\u8C61\u300C\u4E5F\u6709\u79F0\u4E4B\u4E3A\uFF1AJSX\u5143\u7D20\u3001JSX\u5BF9\u8C61\u3001ReactChild\u5BF9\u8C61\u300D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>virtualDoM <span class="token operator">=</span><span class="token punctuation">{</span>
$$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span>react<span class="token punctuation">.</span>element<span class="token punctuation">)</span> <span class="token punctuation">,</span>
<span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
type\uFF1A\u6807\u7B7E\u540D\u300C\u6216\u7EC4\u4EF6\u300D
<span class="token comment">// \u5B58\u50A8\u4E86\u5143\u7D20\u7684\u76F8\u5173\u5C5E\u6027 &amp;&amp; \u5B50\u8282\u70B9\u4FE1\u606F</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    \u5143\u7D20\u7684\u76F8\u5173\u5C5E\u6027\uFF0C
    <span class="token literal-property property">children</span><span class="token operator">:</span>\u5B50\u8282\u70B9\u4FE1\u606F\u300C\u6CA1\u6709\u5B50\u8282\u70B9\u5219\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\u3001\u5C5E\u6027\u503C\u53EF\u80FD\u662F\u4E00\u4E2A\u503C\u3001\u4E5F\u53EF\u80FD\u662F\u4E00\u4E2A\u6570\u7EC4\u300D
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> props<span class="token punctuation">,</span> <span class="token operator">...</span>children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> virtualDOM <span class="token operator">=</span> <span class="token punctuation">{</span>
    $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;react element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  virtualDOM<span class="token punctuation">.</span>type <span class="token operator">=</span> ele<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    virtualDOM<span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> virtualDOM<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> virtualDOM<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
  <span class="token keyword">return</span> virtualDOM<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="2"><li><p>\u628A\u6784\u5EFA\u7684virtualDOM\u6E32\u67D3\u4E3A\u771F\u5B9EDOM</p><ul><li>\u771F\u5B9EDOM\uFF1A\u6D4F\u89C8\u5668\u9875\u9762\u4E2D\uFF0C\u6700\u540E\u6E32\u67D3\u51FA\u6765\uFF0C\u8BA9\u7528\u6237\u770B\u89C1\u7684DOM\u5143\u7D20</li></ul><ul><li>\u8865\u5145\u8BF4\u660E\uFF1A\u7B2C\u4E00\u6B21\u6E32\u67D3\u9875\u9762\u662F\u76F4\u63A5\u4ECEvirtualDOM-\uFF1E\u771F\u5B9EDOM\uFF1B\u4F46\u662F\u540E\u671F\u89C6\u56FE\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u9700\u8981\u7ECF\u8FC7\u2014\u4E2A<strong>DOM-DIFF</strong>\u7684\u5BF9\u6BD4\uFF0C\u8BA1\u7B97\u51FA<strong>\u8865\u4E01\u5305PATCH(\u4E24\u6B21\u89C6\u56FE\u5DEE\u5F02\u7684\u90E8\u5206\uFF09</strong>\uFF0C\u628APATCH\u8865\u4E01\u5305\u8FDB\u884C\u6E32\u67D3</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">virtualDOM<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> virtualDOM<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u50A8\u7684\u662F\u6807\u7B7E\u540D\uFF1A\u52A8\u6001\u521B\u5EFA\u6807\u7B7E</span>
    <span class="token keyword">let</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E3A\u6807\u7B7E\u8BBE\u7F6E\u5C5E\u6027</span>
    <span class="token function">each</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// className\u7684\u5904\u7406</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;className&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ele<span class="token punctuation">.</span>className <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// style\u7684\u5904\u7406</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;style&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">each</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> attr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          ele<span class="token punctuation">.</span>style<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//   \u5B50\u8282\u70B9\u5904\u7406</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&quot;children&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> children <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> children <span class="token operator">=</span> <span class="token punctuation">[</span>children<span class="token punctuation">]</span><span class="token punctuation">;</span>
        children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(string|number)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> child<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ele<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// \u5B50\u8282\u70B9\u53C8\u662F\u4E00\u4E2AvirtualDOM,\u9012\u5F52</span>
          <span class="token function">render</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      ele<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u628A\u65B0\u589E\u7684\u6807\u7B7E\u589E\u52A0\u5230\u6307\u5B9A\u5BB9\u5668</span>
    container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><ul><li><p>\u5C01\u88C5\u4E00\u4E2A\u5BF9\u8C61\u8FED\u4EE3\u7684\u65B9\u6CD5</p><ul><li><p>\u57FA\u4E8E\u4F20\u7EDF\u7684for/ in\u5FAA\u73AF\uFF0C\u4F1A\u5B58\u5728\u4E00\u4E9B\u5F0A\u7AEF\u300C\u6027\u80FD\u8F83\u5DEE(\u65E2\u53EF\u4EE5\u8FED\u4EE3\u79C1\u6709\u7684\uFF0C\u4E5F\u53EF\u4EE5\u8FED\u4EE3\u516C\u6709\u7684\uFF09\uFF1B\u53EA\u80FD\u8FED\u4EE3\u201C\u53EF\u679A\u4E3E\u3001\u975ESymbol\u7C7B\u578B\u7684\u201D\u5C5E\u6027\u3002</p></li><li><p>\u89E3\u51B3\u601D\u8DEF\uFF1A\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u79C1\u6709\u5C5E\u6027\u300C\u79C1\u6709\u7684\u3001\u4E0D\u8BBA\u662F\u5426\u53EF\u679A\u4E3E\u3001\u4E0D\u8BBA\u7C7B\u578B\u300D</p><ul><li><p>Obiect. getOwnPropertyNames (arr\uFF09-\uFF1E\u83B7\u53D6\u5BF9\u8C61\u975ESymbol\u7C7B\u578B\u7684\u79C1\u6709\u5C5E\u6027\u300C\u65E0\u5173\u662F\u5426\u53EF\u679A\u4E3E\u300D</p></li><li><p>Object.getOwnPropertySymbols(arr)\u4E00\uFF1E\u83B7\u53D6Symbol\u7C7B\u578B\u7684\u79C1\u6709\u5C5E\u6027<br> \u83B7\u53D6\u6240\u6709\u7684\u79C1\u6709\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

<span class="token constant">ES6</span><span class="token operator">:</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>\u4E0D\u517C\u5BB9<span class="token constant">IE</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> keys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">each</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">each</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;obj is not a object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;callback is not a function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> keys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>\u4E3A\u5143\u7D20\u8BBE\u7F6E\u5C5E\u6027\uFF08\u81EA\u5B9A\u4E49/\u5185\u7F6E)</p><ol><li>\u5143\u7D20.\u5C5E\u6027=\u5C5E\u6027\u503C<br> \u539F\u7406\uFF1A\u5BF9\u4E8E\u5185\u7F6E\u5C5E\u6027\uFF0C\u662F\u8BBE\u7F6E\u5728\u5143\u7D20\u7684\u6807\u7B7E\u4E0A\uFF1B</li></ol><p>\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u5C5E\u6027\u6765\u8BB2\uFF0C\u662F\u7ED9\u5BF9\u8C61\u7684\u5806\u5185\u5B58\u7A7A\u95F4\u4E2D\u65B0\u589E\u6210\u5458 \u300C\u4E0D\u4F1A\u8BBE\u7F6E\u5230\u6807\u7B7E\u4E0A\u300D<br> \u83B7\u53D6\uFF1A\u5143\u7D20.\u5C5E\u6027<br> \u5220\u9664\uFF1Adelete \u5143\u7D20.\u5C5E\u6027</p><ol start="2"><li>\u5143\u7D20.setAttribute(\u5C5E\u6027.\u5C5E\u6027\u503C\uFF09<br> \u539F\u7406\uFF1A\u76F4\u63A5\u5199\u5728\u5143\u7D20\u7684\u6807\u7B7E\u4E0A<br> \u83B7\u53D6\uFF1AgetAttribute<br> \u5220\u9664\uFF1AremoveAttribute<br> \u4E8C\u8005\u4E0D\u80FD\u6DF7\u6DC6\uFF01\uFF01\u300C\u6392\u9664\u5185\u7F6E\u5C5E\u6027\u7684\u7279\u6B8A\u6027\u300D</li></ol></li><li><p>\u5173\u4E8E\u5BF9\u8C61\u7684\u89C4\u5219\u8BBE\u7F6E</p><ul><li>\u51BB\u7ED3<br> \u51BB\u7ED3\u5BF9\u8C61\uFF1A0bject . freeze (obj)<br> \u68C0\u6D4B\u662F\u5426\u88AB\u51BB\u7ED3\uFF1AObject.isFrozen(obj)=true/ false <ul><li>\u88AB\u51BB\u7ED3\u7684\u5BF9\u8C61\uFF1A\u4E0D\u80FD\u4FEE\u6539\u6210\u5458\u503C\u3001\u4E0D\u80FD\u65B0\u589E\u6210\u5458\u3001\u4E0D\u80FD\u5220\u9664\u73B0\u6709\u6210\u5458\u3001\u4E0D\u80FD\u7ED9\u6210\u5458\u505A\u52AB\u6301 \u300Cobject.defineProperty\u300D</li></ul></li><li>\u5BC6\u5C01 \u5BC6\u5C01\u5BF9\u8C61\uFF1Aobject.seal(obj)<br> \u68C0\u6D4B\u662F\u5426\u88AB\u5BC6\u5C01\uFF1AObject.issealed(obj\uFF09 <ul><li>\u88AB\u5BC6\u5C01\u7684\u5BF9\u8C61\uFF1A\u53EF\u4EE5\u4FEE\u6539\u6210\u5458\u7684\u503C\uFF0C\u4F46\u4E5F\u4E0D\u80FD\u5220\u3001\u4E0D\u80FD\u65B0\u589E\u3001\u4E0D\u80FD\u52AB\u6301</li></ul></li><li>\u6269\u5C55 \u628A\u5BF9\u8C61\u8BBE\u7F6E\u4E3A\u4E0D\u53EF\u6269\u5C55\uFF1AObiect.preventExtensions (obj)<br> \u68C0\u6D4B\u662F\u5426\u53EF\u6269\u5C55\uFF1AObiect.isExtensible(obj) <ul><li>\u88AB\u8BBE\u7F6E\u4E0D\u53EF\u6269\u5C55\u7684\u5BF9\u8C61\uFF1A\u9664\u4E86\u4E0D\u80FD\u65B0\u589E\u6210\u5458\u3001\u5176\u4F59\u7684\u64CD\u4F5C\u90FD\u53EF\u4EE5\u5904\u7406</li></ul></li><li>\u88AB\u51BB\u7ED3\u7684\u5BF9\u8C61\uFF0C\u5373\u662F\u4E0D\u53EF\u6269\u5C55\u7684\uFF0C\u4E5F\u662F\u5BC6\u5C01\u7684, \u540C\u7406\uFF0C\u88AB\u5BC6\u5C01\u7684\u5BF9\u8C61\uFF0C\u4E5F\u662F\u4E0D\u53EF\u6269\u5C55\u7684</li></ul></li></ul>`,22),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","react_basis.html.vue"]]);export{k as default};