import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,a as s,b as l,e as a,d as n,r as i}from"./app.4f4a5eae.js";const r={},c=a('<h1 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode" aria-hidden="true">#</a> vnode</h1><h2 id="\u865A\u62DFdom\u548Cdiff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DFdom\u548Cdiff\u7B97\u6CD5" aria-hidden="true">#</a> \u865A\u62DFDOM\u548Cdiff\u7B97\u6CD5</h2><h3 id="snabbdom\u7B80\u4ECB\u548C\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#snabbdom\u7B80\u4ECB\u548C\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> snabbdom\u7B80\u4ECB\u548C\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA</h3>',3),d=s("li",null,"snabbdom\u662F\u8457\u540D\u7684\u865A\u62DFDOM\u5E93\uFF0C\u662Fdiff\u7B97\u6CD5\u7684\u9F3B\u7956\uFF0CVue\u6E90\u7801\u501F\u9274\u4E86snabbdom\uFF1B",-1),u=n("\u5B98\u65B9git\uFF1A"),k={href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"},v=n("https://github.com/snabbdom/snabbdom"),m=a(`<li>\u5728git\u4E0A\u7684snabbdom\u6E90\u7801\u662F\u7528TypeScript\u5199\u7684\uFF0Cgit\u4E0A\u5E76\u4E0D\u63D0\u4F9B\u7F16\u8BD1\u597D\u7684 JavaScript\u7248\u672C\uFF1B</li><li>\u5982\u679C\u8981\u76F4\u63A5\u4F7F\u7528build\u51FA\u6765\u7684JavaScript\u7248\u7684snabbdom\u5E93\uFF0C\u53EF\u4EE5\u4ECEnpm\u4E0A\u4E0B\u8F7D\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> npm i <span class="token operator">-</span><span class="token constant">D</span> snabbdom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>snabbdom\u5E93\u662FDOM\u5E93\uFF0C\u5F53\u7136\u4E0D\u80FD\u5728nodejs\u73AF\u5883\u8FD0\u884C\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u642D\u5EFAwebpack\u548Cwebpack-dev-server\u5F00\u53D1\u73AF\u5883\uFF0C\u597D\u6D88\u606F\u662F\u4E0D\u9700\u8981\u5B89\u88C5\u4EFB\u4F55loader</li><li>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\uFF0C\u5FC5\u987B\u5B89\u88C5\u6700\u65B0\u7248webpack@5\uFF0C\u4E0D\u80FD\u5B89\u88C5webpack@4\uFF0C\u8FD9\u662F\u56E0\u4E3Awebpack4\u6CA1\u6709\u8BFB\u53D6\u8EAB\u4EFD\u8BC1\u4E2Dexports\u7684\u80FD\u529B\uFF0C\u5EFA\u8BAE\u5927\u5BB6\u4F7F\u7528\u8FD9\u6837\u7684\u7248\u672C\uFF1A</li>`,4),b=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  npm i <span class="token operator">-</span><span class="token constant">D</span> webpack@<span class="token number">5</span> webpack<span class="token operator">-</span>cli@<span class="token number">3</span> webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u53C2\u8003webpack\u5B98\u7F51\uFF0C\u4E66\u5199\u597Dwebpack.config.js\u6587\u4EF6</li><li>\u8DD1\u901Asnabbdom\u5B98\u65B9git\u9996\u9875\u7684demo\u7A0B\u5E8F\uFF0C\u5373\u8BC1\u660E\u8C03\u8BD5\u73AF\u5883\u5DF2\u7ECF\u642D\u5EFA\u6210\u529F</li><li>https://github.com/snabbdom/snabbdom</li><li>\u4E0D\u8981\u5FD8\u8BB0\u5728index.html\u4E2D\u653E\u7F6E\u4E00\u4E2Adiv#container</li></ul><h3 id="\u865A\u62DFdom\u548Ch\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DFdom\u548Ch\u51FD\u6570" aria-hidden="true">#</a> \u865A\u62DFDOM\u548Ch\u51FD\u6570</h3><ul><li><p>\u865A\u62DFDOM\uFF1A\u7528JavaScript\u5BF9\u8C61\u63CF\u8FF0DOM\u7684\u5C42\u6B21\u7ED3\u6784\u3002DOM \u4E2D\u7684\u4E00\u5207\u5C5E\u6027\u90FD\u5728\u865ADOM\u4E2D\u6709\u5BF9\u5E94\u7684\u5C5E\u6027</p></li><li><p><strong>diff\u662F\u53D1\u751F\u5728\u865A\u62DFDOM\u4E0A\u7684</strong></p></li><li><p>\u65B0\u865A\u62DFDOM\u548C\u8001\u865A\u62DFDOM\u8FDB\u884Cdiff\uFF08\u7CBE\u7EC6\u5316\u6BD4\u8F83\uFF09\uFF0C\u7B97\u51FA\u5E94\u8BE5\u5982\u4F55\u6700\u5C0F\u91CF\u66F4\u65B0\uFF0C\u6700\u540E\u53CD\u6620\u5230\u771F\u6B63\u7684DOM\u4E0A\u3002</p></li><li><p>h\u51FD\u6570\u7528\u6765\u4EA7\u751F\u865A\u62DF\u8282\u70B9\uFF08vnode\uFF09</p></li><li><p>\u6BD4\u5982\u8FD9\u6837\u8C03\u7528h\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;http://www.atguigu.com&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C1A\u7845\u8C37&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5C06\u5F97\u5230\u8FD9\u6837\u7684\u865A\u62DF\u8282\u70B9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token string-property property">&quot;sel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;http://www.atguigu.com&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C1A\u7845\u8C37&quot;</span> <span class="token punctuation">}</span>

<span class="token comment">//\u5B83\u8868\u793A\u7684\u771F\u6B63\u7684DOM\u8282\u70B9</span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;http://www.atguigu.com&quot;</span><span class="token operator">&gt;</span>\u5C1A\u7845\u8C37<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E00\u4E2A\u865A\u62DF\u8282\u70B9\u6709\u54EA\u4E9B\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token punctuation">{</span>  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
 <span class="token literal-property property">elm</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
 <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
 <span class="token literal-property property">sel</span><span class="token operator">:</span> <span class="token string">&quot;div&quot;</span>
 <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u4E00\u4E2A\u76D2\u5B50&quot;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="vue\u68C0\u6D4B\u6570\u636E\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vue\u68C0\u6D4B\u6570\u636E\u7684\u539F\u7406" aria-hidden="true">#</a> vue\u68C0\u6D4B\u6570\u636E\u7684\u539F\u7406</h2><p>Vue\u76D1\u89C6\u6570\u636E\u7684\u539F\u7406\uFF1A</p><ol><li><p>vue\u4F1A\u76D1\u89C6data\u4E2D\u6240\u6709\u5C42\u6B21\u7684\u6570\u636E\u3002</p></li><li><p>\u5982\u4F55\u76D1\u6D4B\u5BF9\u8C61\u4E2D\u7684\u6570\u636E\uFF1F</p><ul><li><p>\u901A\u8FC7setter\u5B9E\u73B0\u76D1\u89C6\uFF0C\u4E14\u8981\u5728new Vue\u65F6\u5C31\u4F20\u5165\u8981\u76D1\u6D4B\u7684\u6570\u636E\u3002</p></li><li><p>\u5BF9\u8C61\u4E2D\u540E\u8FFD\u52A0\u7684\u5C5E\u6027\uFF0CVue\u9ED8\u8BA4\u4E0D\u505A\u54CD\u5E94\u5F0F\u5904\u7406</p></li><li><p>\u5982\u9700\u7ED9\u540E\u6DFB\u52A0\u7684\u5C5E\u6027\u505A\u54CD\u5E94\u5F0F\uFF0C\u8BF7\u4F7F\u7528\u5982\u4E0BAPI\uFF1A</p><ul><li>Vue.set(target\uFF0CpropertyName/index\uFF0Cvalue) \u6216</li><li>vm.$set(target\uFF0CpropertyName/index\uFF0Cvalue)</li></ul></li></ul></li><li><p>\u5982\u4F55\u76D1\u6D4B\u6570\u7EC4\u4E2D\u7684\u6570\u636E\uFF1F<br> \u901A\u8FC7\u5305\u88F9\u6570\u7EC4\u66F4\u65B0\u5143\u7D20\u7684\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u672C\u8D28\u5C31\u662F\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li><p>\u8C03\u7528\u539F\u751F\u5BF9\u5E94\u7684\u65B9\u6CD5\u5BF9\u6570\u7EC4\u8FDB\u884C\u66F4\u65B0\u3002</p></li><li><p>\u91CD\u65B0\u89E3\u6790\u6A21\u677F\uFF0C\u8FDB\u800C\u66F4\u65B0\u9875\u9762</p></li></ul></li><li><p>\u5728Vue\u4FEE\u6539\u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u5143\u7D20\u4E00\u5B9A\u8981\u7528\u5982\u4E0B\u65B9\u6CD5\uFF1A</p><ul><li>\u4F7F\u7528\u8FD9\u4E9BAPI:push()\u3001pop()\u3001shift()\u3001unshift()\u3001splice()\u3001sort()\u3001reverse()</li><li>Vue.set() \u6216 vm.$set()</li></ul></li></ol><p><strong>\u7279\u522B\u6CE8\u610F</strong>\uFF1AVue.set() \u548C vm.$set() \u4E0D\u80FD\u7ED9vm \u6216 vm\u7684\u6839\u6570\u636E\u5BF9\u8C61 \u6DFB\u52A0\u5C5E\u6027\uFF01\uFF01\uFF01</p>`,8);function h(g,f){const e=i("ExternalLinkIcon");return t(),o("div",null,[c,s("ul",null,[d,s("li",null,[u,s("a",k,[v,l(e)])]),m]),b])}var w=p(r,[["render",h],["__file","vnode.html.vue"]]);export{w as default};