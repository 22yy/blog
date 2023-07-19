import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,a as n,b as a,d as s,e as d,r as c}from"./app.12e1e5a4.js";const r={},o=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" git")],-1),m=s("\u5728\u7EBF\u5B66\u4E60\u7F51\u7AD9\uFF1A"),u={href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"},p=s("https://learngitbranching.js.org/"),v=n("h2",{id:"git\u57FA\u7840\u64CD\u4F5C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git\u57FA\u7840\u64CD\u4F5C","aria-hidden":"true"},"#"),s(" git\u57FA\u7840\u64CD\u4F5C")],-1),b=n("p",null,"Git \u5DE5\u5177\u5728Linux \u4E0A\u662F\u96C6\u6210\u7684\uFF0C\u53EA\u8981cmd\u547D\u4EE4\u884C\u6267\u884C sudo apt-get install git-core \u547D\u4EE4\u5373\u53EF\u3002",-1),g=s("Windows \u7CFB\u7EDF\u9700\u8981\u5230 "),h={href:"https://git-for-windows.github.io/",target:"_blank",rel:"noopener noreferrer"},k=s("https://git-for-windows.github.io/"),f=s(" \u8FDB\u884C\u4E0B\u8F7D\u5373\u53EF"),x=d(`<h3 id="\u5E38\u89C1\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9009\u9879" aria-hidden="true">#</a> \u5E38\u89C1\u9009\u9879</h3><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u7F29\u5199</th><th style="text-align:left;">\u610F\u601D</th></tr></thead><tbody><tr><td style="text-align:left;">--all</td><td style="text-align:left;">-a</td><td style="text-align:left;">\u5168\u90E8</td></tr><tr><td style="text-align:left;">--force</td><td style="text-align:left;">-f</td><td style="text-align:left;">\u5F3A\u5236</td></tr><tr><td style="text-align:left;">--delete</td><td style="text-align:left;">-d</td><td style="text-align:left;">\u5220\u9664</td></tr><tr><td style="text-align:left;">--delete --force</td><td style="text-align:left;">-D</td><td style="text-align:left;">\u5F3A\u5236\u5220\u9664</td></tr><tr><td style="text-align:left;">--move</td><td style="text-align:left;">-m</td><td style="text-align:left;">\u79FB\u52A8\u6216\u91CD\u547D\u540D</td></tr><tr><td style="text-align:left;">--move --force</td><td style="text-align:left;">-M</td><td style="text-align:left;">\u5F3A\u5236\u79FB\u52A8\u6216\u91CD\u547D\u540D</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;"></td><td style="text-align:left;">\u8BBE\u7F6E\u9ED8\u8BA4\u8FDC\u7A0B\u5206\u652F</td></tr></tbody></table><h3 id="\u521B\u5EFA\u63D0\u4EA4\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u63D0\u4EA4\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> \u521B\u5EFA\u63D0\u4EA4\u7528\u6237\u540D\u548C\u90AE\u7BB1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;Tony&quot;</span>

<span class="token function">git</span> config --global user.email <span class="token string">&quot;tony@gmail.com&quot;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u672C\u5730\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u672C\u5730\u4ED3\u5E93</h3><p>\u8FDB\u5165\u6307\u5B9A\u6587\u4EF6\u5939\u9F20\u6807\u53F3\u952E\u5355\u51FB\u9009\u4E2D <code>Git Base Here</code> \u6267\u884C\u5982\u4E0B\u8BED\u53E5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u6682\u5B58\u533A" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6682\u5B58\u533A" aria-hidden="true">#</a> \u6DFB\u52A0\u6682\u5B58\u533A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5C06\u5F53\u524D\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u4E0B\u6240\u6709\u53D8\u66F4\u6DFB\u52A0\u5230\u6682\u5B58\u533A \uFF08 \u6CE8\u610F\u4E0D\u8981\u5FFD\u7565 \u201C . \u201D\uFF09</span>
 <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> 
<span class="token comment">#\u5C06\u672C\u5730\u5E93\u6240\u6709\u53D8\u66F4\u6DFB\u52A0\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> -A       
<span class="token comment">#\u6307\u5B9A\u6587\u4EF6\u6DFB\u52A0\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> file1 file2 <span class="token punctuation">..</span>.   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a> \u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F1A\u6253\u5F00 vim \u7F16\u8F91\u5668\uFF0Cvim \u7F16\u8F91\u5668\u64CD\u4F5C\u5728\u4E0B\u9762\u5C55\u5F00\u8BF4\u660E</span>
<span class="token function">git</span> commit

<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6587\u4EF6\u5230\u672C\u5730\u4ED3\u5E93\uFF0C\u5E76\u5907\u6CE8\u5F53\u524D commit \u8BB0\u5F55</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;\u5907\u6CE8\u4FE1\u606F&#39;</span>

<span class="token comment"># \u76F8\u5F53\u4E8E git add . \u52A0\u4E0A git commit -m &#39;xxxx&#39;</span>
<span class="token function">git</span> commit -am <span class="token string">&#39;xxxx&#39;</span>

<span class="token comment"># \u7528\u672C\u5730\u63D0\u4EA4\u66FF\u6362\u4E0A\u6B21\u63D0\u4EA4\uFF0C\u6BD4\u5982\u4E0D\u60F3\u4FDD\u7559\u4E0A\u4E00\u6B21\u63D0\u4EA4\u6216\u8005\u4E0A\u4E00\u6B21\u63D0\u4EA4\u63CF\u8FF0\u4FE1\u606F\u5199\u9519\u4E86\u4E4B\u7C7B\u7684</span>
<span class="token function">git</span> commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><p>pull \u548C fetch \u90FD\u662F\u4E0B\u8F7D\u8FDC\u7A0B\u5206\u652F\uFF0C\u533A\u522B\u662F pull \u4F1A\u548C\u5F53\u524D\u5206\u652F\u5408\u5E76\uFF0Cfetch \u4E0D\u4F1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6 remote origin \u5BF9\u5E94\u8FDC\u7A0B\u4ED3\u5E93\u6307\u5B9A master \u5206\u652F\u7684\u53D8\u66F4\uFF0C\u4F46\u662F\u4E0D\u548C\u672C\u5730\u7684\u5408\u5E76</span>
<span class="token function">git</span> fetch origin master 

<span class="token comment"># \u610F\u601D\u4E00\u4E2A\u6837\uFF0C\u62C9\u9ED8\u8BA4\u7684\u5206\u652F\u800C\u5DF2</span>
<span class="token function">git</span> fetch origin

<span class="token comment"># \u4E5F\u662F\uFF0C\u7B49\u6548\u4E8E git fetch origin master:master\uFF0C\u5C31\u662F\u5206\u652F\u914D\u7F6E\u7684\u9ED8\u8BA4\u503C</span>
<span class="token function">git</span> fetch

<span class="token comment"># \u83B7\u53D6\u9ED8\u8BA4\u8FDC\u7A0B\u4ED3\u5E93\u6240\u6709\u5206\u652F\u7684\u53D8\u66F4</span>
<span class="token function">git</span> fetch -a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u53D6 remote origin \u5BF9\u5E94\u7684\u8FDC\u7A0B\u4ED3\u5E93\u7684 master \u5206\u652F\u5408\u5E76\u5230\u672C\u5730\u7684 test \u5206\u652F</span>
<span class="token function">git</span> pull origin master:test

<span class="token comment"># \u8FD9\u79CD\u540C\u7406\u5C31\u4E0D\u89E3\u91CA\u4E86</span>
<span class="token function">git</span> pull origin

<span class="token comment"># git pull --merge \u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4\u662F --merge \u6A21\u5F0F</span>
<span class="token comment"># \u7B49\u4E8E git fetch \u52A0\u4E0A git merge\uFF0C\u62C9\u8FDC\u7A0B\u9ED8\u8BA4\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> pull

<span class="token comment"># \u628A\u5408\u5E76\u6A21\u5F0F\u5207\u6362\u6210 rebase\uFF0C\u7B49\u4E8E git fetch \u52A0\u4E0A git rebase\uFF0Crebase \u540E\u9762\u8FDB\u9636\u6709\u4ECB\u7ECD</span>
<span class="token function">git</span> pull --rebase origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u652F\u64CD\u4F5C</h2><h3 id="\u521B\u5EFA\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u652F" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u57FA\u4E8E\u5F53\u524D\u5206\u652F\u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch \u65B0\u5206\u652F  

<span class="token comment"># \u521B\u5EFA test \u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230 test \u5206\u652F</span>
<span class="token function">git</span> branch -M <span class="token builtin class-name">test</span>

<span class="token comment"># \u521B\u5EFA test \u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230 test \u5206\u652F</span>
<span class="token function">git</span> checkout -b <span class="token builtin class-name">test</span>

<span class="token comment"># \u521B\u5EFA\u672C\u5730\u4E0E\u8FDC\u7A0B\u5BF9\u5E94\u7684 test \u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230 test \u5206\u652F\uFF0C\u5168\u79F0\u6700\u597D\u4E00\u81F4</span>
<span class="token function">git</span> checkout -b <span class="token builtin class-name">test</span> origin/test

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u672C\u5730\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch

<span class="token comment"># \u67E5\u770B\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -r

<span class="token comment"># \u67E5\u770B\u672C\u5730\u548C\u8FDC\u7A0B\u6240\u6709\u5206\u652F</span>
<span class="token function">git</span> branch -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u5168\u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -d \u5206\u652F  

<span class="token comment">#\u5F3A\u5236\u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -D \u5206\u652F 

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u4E3B\u673A\u7684 master \u5206\u652F</span>
<span class="token function">git</span> push origin -d master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> \u5207\u6362\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u5230 test \u5206\u652F</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">test</span>

<span class="token comment"># \u65B0\u5EFA test \u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230 test \u5206\u652F</span>
<span class="token function">git</span> checkout -b <span class="token builtin class-name">test</span>

<span class="token comment"># \u5207\u6362\u5230 test \u5206\u652F</span>
<span class="token function">git</span> switch <span class="token builtin class-name">test</span>

<span class="token comment"># \u65B0\u5EFA test \u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230 test \u5206\u652F</span>
<span class="token function">git</span> switch -c <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h3><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u628A\u672C\u5730\u7684 test \u5206\u652F\u5206\u5E76\u5230\u6211\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> merge <span class="token builtin class-name">test</span>

<span class="token comment"># \u5408\u5E76 remote origin \u5BF9\u5E94\u8FDC\u7A0B\u4ED3\u5E93\u7684 master \u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> merge origin/master

<span class="token comment"># --on-ff \u662F no-fast-forward\u7B80\u5199\uFF0C\u5408\u5E76\u5E76\u4E14\u4F1A\u5728\u5206\u652F\u4E0A\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u65B0\u7684 commit \u8282\u70B9</span>
<span class="token function">git</span> merge --on-ff origin/master

<span class="token comment"># \u52A0\u5165 --squash \u8868\u793A\u5408\u5E76\uFF0C\u4F46\u662F\u4E0D\u751F\u6210 commit \u8BB0\u5F55\uFF0C\u901A\u5E38\u7528\u4E8E\u628A\u672C\u5730\u5206\u652F\u5408\u5165\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> merge <span class="token builtin class-name">test</span> --squash

<span class="token comment"># \u53D6\u6D88\u5408\u5E76</span>
<span class="token function">git</span> merge --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5F53\u524D\u5206\u2F40\u57FA\u4E8E B \u5206\u2F40\u505A rebase\uFF0C\u4EE5\u4FBF\u628A B \u5206\u2F40\u5408\u2F0A\u5230\u5F53\u524D\u5206\u2F40</span>
<span class="token function">git</span> rebase B

<span class="token comment">#\u628A A \u5206\u2F40\u57FA\u4E8E B \u5206\u2F40\u505A rebase\uFF0C\u4EE5\u4FBF\u628A B \u5206\u2F40\u5408\u2F0A\u5230 A \u5206\u2F40</span>
<span class="token function">git</span> rebase B A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h4><blockquote><p>git merge \u548C git rebase \u90FD\u662F\u53EF\u4EE5\u5408\u5E76\u5206\u652F\uFF0C\u5408\u5E76\u7528\u6CD5\u4E5F\u662F\u4E00\u6837\uFF0C\u4E0D\u540C\u7684\u4E00\u4E2A\u662F\u5728 commit \u8BB0\u5F55\u7684\u5904\u7406\u4E0A</p></blockquote><ul><li><p>git merge \u4F1A\u65B0\u5EFA\u4E00\u6761\u65B0\u7684 commit\uFF0C\u7136\u540E\u4E24\u4E2A\u5206\u652F\u4EE5\u524D\u7684 commit \u8BB0\u5F55\u90FD\u6307\u5411\u8FD9\u4E2A\u65B0 commit \u8BB0\u5F55\u3002\u8FD9\u79CD\u65B9\u6CD5\u4F1A\u4FDD\u7559\u4E4B\u524D\u6BCF\u4E2A\u5206\u652F\u7684 commit \u5386\u53F2\u3002</p></li><li><p>git rebase\u4F1A\u5148\u627E\u5230\u4E24\u4E2A\u5206\u652F\u7684\u7B2C\u4E00\u4E2A\u5171\u540C\u7684 commit \u7956\u5148\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u63D0\u53D6\u5F53\u524D\u5206\u652F\u8FD9\u4E4B\u540E\u7684\u6240\u6709 commit \u8BB0\u5F55\uFF0C\u653E\u5230\u76EE\u6807\u5206\u7684\u6700\u65B0\u63D0\u4EA4\u540E\u9762\u3002\u7ECF\u8FC7\u8FD9\u4E2A\u5408\u5E76\u540E\uFF0C\u4E24\u4E2A\u5206\u652F\u5408\u5E76\u540E\u7684 commit \u8BB0\u5F55\u5C31\u53D8\u4E3A\u4E86\u7EBF\u6027\u7684\u8BB0\u5F55\u4E86\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u4E0B\uFF0C\u9700\u8981\u628A\u672C\u5730 test \u5206\u652F\u5408\u5165 dev</span>
<span class="token comment"># \u4E3A\u65B9\u4FBF\u7406\u89E3\uFF0C\u5B57\u6BCD\u8868\u793Acommit\u8BB0\u5F55\uFF0C\u6570\u5B57\u8868\u793A\u63D0\u4EA4\u65F6\u95F4\u987A\u5E8F\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A1\u5C31\u662F1\u70B9\u63D0\u4EA4\u7684</span>
dev -<span class="token operator">&gt;</span> A1 -<span class="token operator">&gt;</span> B3 -<span class="token operator">&gt;</span>    \u8FD9\u4E00\u884C\u662F\u8FDC\u7A0B dev \u5206\u652F\u7684commit\u8BB0\u5F55\uFF0CA1/B3\u662F\u4F60\u540C\u4E8B\u63D0\u4EA4\u7684
      \u2198 X2 -<span class="token operator">&gt;</span> Y4\u2197   \u8FD9\u4E00\u884C\u662F\u62C9\u53D6\u4E86 dev \u5206\u652F\u540E\u5728\u672C\u5730\u7684 <span class="token builtin class-name">test</span> \u5206\u652F commit \u8BB0\u5F55

<span class="token comment"># \u73B0\u5728\u9700\u8981\u628A\u4F60\u672C\u5730\u7684\u5206\u652F\u5408\u5E76\u5230\u8FDC\u7A0B\u7684\u5206\u652F\u53BB</span>
<span class="token comment"># \u7528merge\u5408\u5E76\u540E\uFF0Cdev \u5206\u652F\u770B\u5230\u7684\u8BB0\u5F55\u662F\u8FD9\u6837\u7684\uFF0CM\u4E3Amerge\u8BB0\u5F55\u7684commit</span>
dev -<span class="token operator">&gt;</span> A1 -<span class="token operator">&gt;</span> X2 -<span class="token operator">&gt;</span> B3 -<span class="token operator">&gt;</span> Y4 -<span class="token operator">&gt;</span> M

<span class="token comment"># \u7528rebase\u5408\u5E76\u540E\uFF0Cdev \u5206\u652F\u770B\u5230\u7684\u8BB0\u5F55\u662F\u8FD9\u6837\u7684\uFF0C\u6CE8\u610F\u987A\u5E8F\uFF0C\u4E14\u6CA1\u6709\u5408\u5E76\u8BB0\u5F55\u7684commit</span>
<span class="token comment"># \u7B80\u5355\u8BF4\u5C31\u662F\u76F4\u63A5\u628A test \u5206\u652F\u7684\u6240\u6709\u65B0\u7684 commit \u62FF\u51FA\u6765\u76F4\u63A5\u62FC\u5230 dev \u5206\u652F\u672B\u5C3E\uFF0C\u4E0D\u7BA1\u63D0\u4EA4\u65F6\u95F4\u5148\u540E</span>
dev -<span class="token operator">&gt;</span> A1 -<span class="token operator">&gt;</span> B3 -<span class="token operator">&gt;</span> X2 -<span class="token operator">&gt;</span> Y4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>rebase</code>\u5BF9\u6BD4<code>merge</code>,\u4F18\u52BF\u5728\u4E8E\u5408\u5E76\u540E\u7684\u7ED3\u679C\u5F88\u6E05\u6670\uFF0C\u53EA\u6709\u4E00\u6761\u7EBF\uFF0C\u52A3\u52BF\u5728\u4E8E\u5982\u679C\u4E00\u65E6\u51FA\u73B0\u51B2\u7A81\uFF0C\u89E3\u51B3\u4F1A\u5F88\u9EBB\u70E6\uFF0C\u4F46\u662F<code>merge</code>\u51FA\u73B0\u51B2\u7A81\u53EA\u9700\u8981\u89E3\u51B3\u4E00\u6B21</p><p>\u4F7F\u7528<code>rebase</code>\u5E94\u8BE5\u5728\u9700\u8981\u88AB<code>rebase</code>\u7684\u5206\u652F\u4E0A\u64CD\u4F5C\uFF0C\u5E76\u4E14\u8BE5\u5206\u652F\u662F\u672C\u5730\u5206\u652F\uFF0C\u5982\u679C<code>develop</code>\u5206\u652F\u9700\u8981<code>rebase</code>\u5230<code>master</code>\u4E0A\u53BB\uFF0C\u5E94\u8BE5\u5982\u4E0B\u64CD\u4F5C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## branch develop</span>
<span class="token function">git</span> rebase master
<span class="token function">git</span> checkout master
<span class="token comment">## \u7528\u4E8E\u5C06\`master\`\u4E0A\u7684HEAD \u79FB\u52A8\u5230\u6700\u65B0\u7684commit</span>
<span class="token function">git</span> merge develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92" aria-hidden="true">#</a> \u8FDC\u7A0B\u4ED3\u5E93\u4EA4\u4E92</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u5230\u672C\u5730</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u64A4\u9500\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#git-\u64A4\u9500\u64CD\u4F5C" aria-hidden="true">#</a> git \u64A4\u9500\u64CD\u4F5C</h2><ol><li>git add</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u540E\u9762\u4EC0\u4E48\u90FD\u4E0D\u8DDF \u5C31\u662F\u4E0A\u4E00\u6B21add \u91CC\u9762\u7684\u5168\u90E8\u64A4\u9500\u4E86</span>
<span class="token function">git</span> reset HEAD 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>git commit\u9519\u8BEF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5148\u4F7F\u7528</span>
<span class="token function">git</span> log <span class="token comment">#\u67E5\u770B\u8282\u70B9</span>
commit xxxxxxxxxxxxxxxxxxxxxxxxxx
Merge:
Author:
Date:

<span class="token comment"># \u7136\u540E</span>
<span class="token function">git</span> reset commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528" aria-hidden="true">#</a> \u5E38\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone \u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740

<span class="token function">git</span> pull 

<span class="token function">git</span> checkout \u5206\u652F\u540D

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">git</span> commit -m <span class="token string">&#39;\u65E5\u5FD7\u4FE1\u606F&#39;</span>

<span class="token function">git</span> push

<span class="token function">git</span> checkout main

<span class="token function">git</span> merge \u5206\u652F\u540D

<span class="token function">git</span> push

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0D\u5C0F\u5FC3\u628A\u4E0D\u9700\u8981\u7684\u6587\u4EF6\u6DFB\u52A0\u5230\u6682\u5B58\u533A" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5C0F\u5FC3\u628A\u4E0D\u9700\u8981\u7684\u6587\u4EF6\u6DFB\u52A0\u5230\u6682\u5B58\u533A" aria-hidden="true">#</a> \u4E0D\u5C0F\u5FC3\u628A\u4E0D\u9700\u8981\u7684\u6587\u4EF6\u6DFB\u52A0\u5230\u6682\u5B58\u533A</h2><p>\u4E0D\u5C0F\u5FC3\u628A\u4F9D\u8D56\u5305\u6587\u4EF6\u5939node_modules\uFF08\u8FD9\u4E2A\u5F88\u5927\u800C\u4E14\u6CA1\u5FC5\u8981git\u7BA1\u7406\u8FD9\u4EFD\u4EE3\u7801\uFF09add\u4E86</p><p>\u7B2C\u4E00\u79CD\u65B9\u6CD5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset HEAD -- node_modules   
\u6CE8\u610F\uFF1A\u53CC\u6760--\u540E\u9762\u6709\u4E00\u4E2A\u7A7A\u683C\uFF0C\u540E\u9762\u518D\u8DDF\u6587\u4EF6\u540D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\u65B9\u6CD5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">rm</span> -r --cached node_modules  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u628A\u672C\u5730\u9879\u76EE\u4E0A\u4F20\u5230github" tabindex="-1"><a class="header-anchor" href="#\u628A\u672C\u5730\u9879\u76EE\u4E0A\u4F20\u5230github" aria-hidden="true">#</a> \u628A\u672C\u5730\u9879\u76EE\u4E0A\u4F20\u5230github</h2><p>\u672C\u5730\u4ED3\u5E93\uFF1A</p><ol><li><p>git init \u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2AGit\u4ED3\u5E93\uFF08clone\u7684\u522B\u4EBA\u7684\u4ED3\u5E93\u5C31\u5148\u5220\u9664.git\u6587\u4EF6\u5939\uFF09</p></li><li><p>git add . \u5C06\u9879\u76EE\u6DFB\u52A0\u5230\u6682\u5B58\u533A\uFF1B</p></li><li><p>git commit -m &quot;\u6CE8\u91CA\u5185\u5BB9&quot; \u5C06\u9879\u76EE\u63D0\u4EA4\u5230Git\u4ED3\u5E93\uFF1B</p></li></ol><p>\u8FDC\u7A0B\u4ED3\u5E93\uFF1A</p><ol><li><p>\u6DFB\u52A0SSH KEY\uFF1B</p></li><li><p>\u65B0\u5EFArepositories\uFF1B</p></li></ol><p>\u672C\u5730\u4ED3\u5E93\uFF1A</p><ol><li><p>git remote add origin git@github.com:UserName/projectName.git \u5C06\u672C\u5730\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u5173\u8054\uFF1B</p></li><li><p>git push -u origin master \u5C06\u672C\u5730\u9879\u76EE\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u3002</p></li></ol><blockquote><p>\u65B0\u5EFArepositories\u65F6\u6700\u597D\u4E0D\u8981\u52FE\u9009\u6DFB\u52A0README.md\u6587\u4EF6\uFF0Cgit push\u65F6\u4F1A\u62A5\u9519 ,\u56E0\u4E3A\u65B0\u5EFA\u7684Github\u4ED3\u5E93\u7684README.md\u6587\u4EF6\u4E0D\u5728\u672C\u5730\u4ED3\u5E93\u7684\u76EE\u5F55\u4E2D</p></blockquote><p>\u5982\u679C\u5728\u9009\u62E9\u4E86Initialize this repository with a README,\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u6700\u65B0\u7684\u66F4\u65B0\u62C9\u53D6\u5230\u672C\u5730\uFF0C\u5E76\u5408\u5E76\u5230\u4E3B\u652F\u5E72\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull --rebase origin master   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u518D\u91CD\u65B0push\u5C31\u53EF\u4EE5</p><h2 id="\u4FEE\u6539git-remote-url" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539git-remote-url" aria-hidden="true">#</a> \u4FEE\u6539git remote url</h2><ol><li>\u4FEE\u6539\u547D\u4EE4</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin <span class="token punctuation">[</span>url<span class="token punctuation">]</span>  

\u4F8B\u5982: 
<span class="token function">git</span> remote set-url origin git@gitee.com:xigexige/ztjs.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5148\u5220\u540E\u52A0</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rm</span> origin 
<span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u76F4\u63A5\u4FEE\u6539.git\u91CC\u7684config\u6587\u4EF6</li></ol>`,68);function _(y,A){const e=c("ExternalLinkIcon");return t(),l("div",null,[o,n("p",null,[m,n("a",u,[p,a(e)])]),v,b,n("p",null,[g,n("a",h,[k,a(e)]),f]),x])}var q=i(r,[["render",_],["__file","git.html.vue"]]);export{q as default};
