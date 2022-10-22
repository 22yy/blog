import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a,b as e,d as n,e as c,r}from"./app.0b0fc47d.js";const p={},i=a("h1",{id:"react\u5165\u95E8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#react\u5165\u95E8","aria-hidden":"true"},"#"),n(" React\u5165\u95E8")],-1),d=n("\u82F1\u6587\u5B98\u7F51: "),u={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},k=n("https://reactjs.org/"),h=a("br",null,null,-1),m=n(" \u4E2D\u6587\u5B98\u7F51: "),v={href:"https://doc.react-china.org/",target:"_blank",rel:"noopener noreferrer"},b=n("https://doc.react-china.org/"),_=c(`<h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><ul><li>Declarative(\u58F0\u660E\u5F0F\u7F16\u7801)</li><li>Component-Based(\u7EC4\u4EF6\u5316\u7F16\u7801)</li><li>Learn Once, Write Anywhere(\u652F\u6301\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u6E32\u67D3)</li><li>\u9AD8\u6548: \u865A\u62DFDOM</li><li>\u5355\u5411\u6570\u636E\u6D41</li></ul><h2 id="jsx-javascript-xml" tabindex="-1"><a class="header-anchor" href="#jsx-javascript-xml" aria-hidden="true">#</a> JSX\uFF08JavaScript XML)</h2><ul><li>react\u5B9A\u4E49\u7684\u4E00\u79CD\u7C7B\u4F3C\u4E8EXML\u7684JS\u6269\u5C55\u8BED\u6CD5: XML+JS</li><li>\u7528\u6765\u521B\u5EFAreact\u865A\u62DFDOM <code>var ele = &lt;h1&gt;Hello JSX!&lt;/h1&gt;</code></li><li>\u6D4F\u89C8\u5668\u4E0D\u80FD\u89E3\u6790JSX\u4EE3\u7801\uFF0C\u9700\u8981babel\u8F6C\u8BD1\u4E3A\u7EAFJS\uFF0C\u53EA\u8981\u7528\u4E86 JSX\uFF0C\u90FD\u8981\u52A0\u4E0A type=&quot;text/babel&quot;, \u58F0\u660E\u9700\u8981 babel \u6765\u5904\u7406</li></ul><p>\u6CE8\u610F:</p><ul><li>\u6807\u7B7E\u5FC5\u987B\u6709\u7ED3\u675F</li><li>\u6807\u7B7E\u7684class\u5C5E\u6027\u5FC5\u987B\u6539\u4E3AclassName\u5C5E\u6027</li><li>\u6807\u7B7E\u7684style\u5C5E\u6027\u503C\u5FC5\u987B\u4E3A: <code>{{color:&#39;red&#39;, width:12}}</code></li><li>js\u4E2D\u76F4\u63A5\u53EF\u4EE5\u5957\u6807\u7B7E, \u4F46\u6807\u7B7E\u8981\u5957js\u9700\u8981\u653E\u5728{}\u4E2D</li></ul><h2 id="\u7EC4\u4EF6\u5316" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5316" aria-hidden="true">#</a> \u7EC4\u4EF6\u5316</h2><blockquote><p>\u521B\u5EFA\u7EC4\u4EF6\u7C7B</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u5F0F\u4E00\uFF1A\u65E0\u72B6\u6001\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token number">111111</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1AES6\u7C7B\u8BED\u6CD5</span>
<span class="token keyword">class</span> <span class="token class-name">myComponents</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token number">111111</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6E32\u67D3\u7EC4\u4EF6\u6807\u7B7E</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyComp <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>  cotainerEle<span class="token punctuation">)</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>ReactDOM.render()\u6E32\u67D3\u7EC4\u4EF6\u6807\u7B7E\u7684\u57FA\u672C\u6D41\u7A0B</p></blockquote><ul><li>React\u5185\u90E8\u4F1A\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61/\u8C03\u7528\u7EC4\u4EF6\u51FD\u6570, \u5F97\u5230\u865A\u62DFDOM\u5BF9\u8C61</li><li>\u5C06\u865A\u62DFDOM\u5E76\u89E3\u6790\u4E3A\u771F\u5B9EDOM</li><li>\u63D2\u5165\u5230\u6307\u5B9A\u7684\u9875\u9762\u5143\u7D20\u5185\u90E8</li></ul>`,13);function g(f,x){const s=r("ExternalLinkIcon");return o(),l("div",null,[i,a("p",null,[d,a("a",u,[k,e(s)]),h,m,a("a",v,[b,e(s)])]),_])}var M=t(p,[["render",g],["__file","react_basis.html.vue"]]);export{M as default};
