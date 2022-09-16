import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as l,a as n,b as a,d as s,e as c,r as t}from"./app.12d55cba.js";var r="/assets/git1.254f3121.jpg",o="/assets/config.b5df4447.jpg",m="/assets/merge.e6e3c520.jpg",v="/assets/rebase.641924ad.jpg";const u={},p=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" git")],-1),b=s("\u5728\u7EBF\u5B66\u4E60\u7F51\u7AD9\uFF1A"),h={href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"},g=s("https://learngitbranching.js.org/"),k=n("h2",{id:"_1-git\u57FA\u7840\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-git\u57FA\u7840\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" 1.git\u57FA\u7840\u64CD\u4F5C")],-1),f=n("p",null,"Git \u5DE5\u5177\u5728Linux \u4E0A\u662F\u96C6\u6210\u7684\uFF0C\u53EA\u8981cmd\u547D\u4EE4\u884C\u6267\u884C sudo apt-get install git-core \u547D\u4EE4\u5373\u53EF\u3002",-1),_=s("Windows \u7CFB\u7EDF\u9700\u8981\u5230 "),x={href:"https://git-for-windows.github.io/",target:"_blank",rel:"noopener noreferrer"},B=s("https://git-for-windows.github.io/"),A=s(" \u8FDB\u884C\u4E0B\u8F7D\u5373\u53EF"),j=c('<p><img src="'+r+`" alt="git"></p><h3 id="_1-1-\u521B\u5EFA\u63D0\u4EA4\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFA\u63D0\u4EA4\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> 1.1 \u521B\u5EFA\u63D0\u4EA4\u7528\u6237\u540D\u548C\u90AE\u7BB1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;Tony&quot;</span>

<span class="token function">git</span> config --global user.email <span class="token string">&quot;tony@gmail.com&quot;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="config"></p><h3 id="_1-2-\u521B\u5EFA\u672C\u5730\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-2-\u521B\u5EFA\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a> 1.2 \u521B\u5EFA\u672C\u5730\u4ED3\u5E93</h3><p>\u8FDB\u5165\u6307\u5B9A\u6587\u4EF6\u5939\u9F20\u6807\u53F3\u952E\u5355\u51FB\u9009\u4E2D <code>Git Base Here</code> \u6267\u884C\u5982\u4E0B\u8BED\u53E5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-\u6DFB\u52A0\u6682\u5B58\u533A" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6DFB\u52A0\u6682\u5B58\u533A" aria-hidden="true">#</a> 1.3 \u6DFB\u52A0\u6682\u5B58\u533A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5C06\u5F53\u524D\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u4E0B\u6240\u6709\u53D8\u66F4\u6DFB\u52A0\u5230\u6682\u5B58\u533A \uFF08 \u6CE8\u610F\u4E0D\u8981\u5FFD\u7565 \u201C . \u201D\uFF09</span>
 <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> 
<span class="token comment">#\u5C06\u672C\u5730\u5E93\u6240\u6709\u53D8\u66F4\u6DFB\u52A0\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> -A       
<span class="token comment">#\u6307\u5B9A\u6587\u4EF6\u6DFB\u52A0\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> file1 file2 <span class="token punctuation">..</span>.   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-4-\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a> 1.4 \u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u63D0\u4EA4\u6240\u6709\u53D8\u66F4</span>
<span class="token function">git</span> commit
<span class="token comment"># or</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;\u65E5\u5FD7\u4FE1\u606F&#39;</span> -a  

<span class="token comment">#\u63D0\u4EA4\u5F53\u524D\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u7684\u53D8\u66F4</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;\u65E5\u5FD7\u4FE1\u606F&#39;</span> <span class="token builtin class-name">.</span>  

<span class="token comment">#\u63D0\u4EA4\u6307\u5B9A\u6587\u4EF6</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;\u65E5\u5FD7\u4FE1\u606F&#39;</span> fileName

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> 2.\u5206\u652F\u64CD\u4F5C</h2><h3 id="_2-1-\u521B\u5EFA\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u521B\u5EFA\u5206\u652F" aria-hidden="true">#</a> 2.1 \u521B\u5EFA\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u57FA\u4E8E\u5F53\u524D\u5206\u652F\u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5206\u652F  

<span class="token comment">#\u57FA\u4E8E\u6307\u5B9A\u5206\u652F\u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5206\u652F \u5DF2\u6709\u5206\u652F

<span class="token comment">#\u57FA\u4E8E\u67D0\u4E2A commit \u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5206\u652F commitID

<span class="token comment">#\u57FA\u4E8E\u5F53\u524D\u5206\u652F\u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362\u5230\u65B0\u5206\u652F</span>
<span class="token function">git</span> checkout -b \u65B0\u5206\u652F

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u67E5\u770B\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u67E5\u770B\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> 2.2 \u67E5\u770B\u672C\u5730\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> 2.3 \u5220\u9664\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u5168\u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -d \u5206\u652F  

<span class="token comment">#\u5F3A\u5236\u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -D \u5206\u652F

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> 2.3 \u5207\u6362\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout \u5206\u652F\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> 2.4 \u5408\u5E76\u5206\u652F</h3><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5C06 A \u5206\u652F\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\uFF0C\u4E14\u4E3A merge \u521B\u5EFA commit</span>
<span class="token function">git</span> merge A  

<span class="token comment">#\u5C06 A \u5206\u652F\u5408\u5E76\u5230 B \u5206\u652F\uFF0C\u4E14\u4E3A merge \u521B\u5EFA commit</span>
<span class="token function">git</span> merge A B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5F53\u524D\u5206\u2F40\u57FA\u4E8E B \u5206\u2F40\u505A rebase\uFF0C\u4EE5\u4FBF\u628A B \u5206\u2F40\u5408\u2F0A\u5230\u5F53\u524D\u5206\u2F40</span>
<span class="token function">git</span> rebase B

<span class="token comment">#\u628A A \u5206\u2F40\u57FA\u4E8E B \u5206\u2F40\u505A rebase\uFF0C\u4EE5\u4FBF\u628A B \u5206\u2F40\u5408\u2F0A\u5230 A \u5206\u2F40</span>
<span class="token function">git</span> rebase B A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h4><p><img src="`+m+'" alt="merge"></p><p><img src="'+v+`" alt="rebase"></p><p><code>rebase</code>\u5BF9\u6BD4<code>merge</code>,\u4F18\u52BF\u5728\u4E8E\u5408\u5E76\u540E\u7684\u7ED3\u679C\u5F88\u6E05\u6670\uFF0C\u53EA\u6709\u4E00\u6761\u7EBF\uFF0C\u52A3\u52BF\u5728\u4E8E\u5982\u679C\u4E00\u65E6\u51FA\u73B0\u51B2\u7A81\uFF0C\u89E3\u51B3\u4F1A\u5F88\u9EBB\u70E6\uFF0C\u4F46\u662F<code>merge</code>\u51FA\u73B0\u51B2\u7A81\u53EA\u9700\u8981\u89E3\u51B3\u4E00\u6B21</p><p>\u4F7F\u7528<code>rebase</code>\u5E94\u8BE5\u5728\u9700\u8981\u88AB<code>rebase</code>\u7684\u5206\u652F\u4E0A\u64CD\u4F5C\uFF0C\u5E76\u4E14\u8BE5\u5206\u652F\u662F\u672C\u5730\u5206\u652F\uFF0C\u5982\u679C<code>develop</code>\u5206\u652F\u9700\u8981<code>rebase</code>\u5230<code>master</code>\u4E0A\u53BB\uFF0C\u5E94\u8BE5\u5982\u4E0B\u64CD\u4F5C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## branch develop</span>
<span class="token function">git</span> rebase master
<span class="token function">git</span> checkout master
<span class="token comment">## \u7528\u4E8E\u5C06\`master\`\u4E0A\u7684HEAD \u79FB\u52A8\u5230\u6700\u65B0\u7684commit</span>
<span class="token function">git</span> merge develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92" aria-hidden="true">#</a> 3.\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u5230\u672C\u5730</span>
<span class="token function">git</span> clone \u5730\u5740

<span class="token comment"># \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u6307\u5B9A\u5206\u652F\u5230\u672C\u5730</span>
<span class="token function">git</span> clone -b \u8FDC\u7A0B\u4ED3\u5E93\u5206\u652F\u540D \u5730\u5740  

<span class="token comment"># \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span>
<span class="token function">git</span> pull \u522B\u540D \u5206\u652F\u540D  

<span class="token comment"># \u63A8\u9001\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u4ED3\u5E93\u6307\u5B9A\u5206\u652F</span>
<span class="token function">git</span> push \u522B\u540D \u672C\u5730\u5206\u652F:\u8FDC\u7A0B\u5206\u652F  

<span class="token comment"># \u67E5\u770B\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u522B\u540D</span>
<span class="token function">git</span> remote -v

<span class="token comment"># \u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u8D77\u522B\u540D</span>
<span class="token function">git</span> remote <span class="token function">add</span> \u522B\u540D \u5730\u5740  

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93\u522B\u540D</span>
<span class="token function">git</span> remote remove \u522B\u540D

<span class="token comment"># \u4FEE\u6539\u522B\u540D</span>
<span class="token function">git</span> remote <span class="token function">rename</span> \u65E7 \u65B0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-git-\u64A4\u9500\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_4-git-\u64A4\u9500\u64CD\u4F5C" aria-hidden="true">#</a> 4.git \u64A4\u9500\u64CD\u4F5C</h2><ol><li>git add</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u540E\u9762\u4EC0\u4E48\u90FD\u4E0D\u8DDF \u5C31\u662F\u4E0A\u4E00\u6B21add \u91CC\u9762\u7684\u5168\u90E8\u64A4\u9500\u4E86</span>
<span class="token function">git</span> reset HEAD 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>git commit\u9519\u8BEF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5148\u4F7F\u7528</span>
<span class="token function">git</span> log <span class="token comment">#\u67E5\u770B\u8282\u70B9</span>
commit xxxxxxxxxxxxxxxxxxxxxxxxxx
Merge:
Author:
Date:

<span class="token comment"># \u7136\u540E</span>
<span class="token function">git</span> reset commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#_5-\u5E38\u7528" aria-hidden="true">#</a> 5.\u5E38\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone \u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740

<span class="token function">git</span> pull 

<span class="token function">git</span> checkout \u5206\u652F\u540D

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">git</span> commit -m <span class="token string">&#39;\u65E5\u5FD7\u4FE1\u606F&#39;</span>

<span class="token function">git</span> push

<span class="token function">git</span> checkout main

<span class="token function">git</span> merge \u5206\u652F\u540D

<span class="token function">git</span> push

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function w(D,E){const e=t("ExternalLinkIcon");return d(),l("div",null,[p,n("p",null,[b,n("a",h,[g,a(e)])]),k,f,n("p",null,[_,n("a",x,[B,a(e)]),A]),j])}var V=i(u,[["render",w],["__file","git.html.vue"]]);export{V as default};
