import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as r}from"./app.40343dc0.js";const l={},t=r('<h1 id="http2" tabindex="-1"><a class="header-anchor" href="#http2" aria-hidden="true">#</a> HTTP2</h1><blockquote><p>HTTP/2 \u534F\u8BAE\u662F\u57FA\u4E8E HTTPS \u7684\uFF0C\u6240\u4EE5 HTTP/2 \u7684\u5B89\u5168\u6027\u4E5F\u662F\u6709\u4FDD\u969C\u7684\u3002</p></blockquote><h2 id="http-2-\u76F8\u6BD4-http-1-1-\u6027\u80FD\u4E0A\u7684\u6539\u8FDB" tabindex="-1"><a class="header-anchor" href="#http-2-\u76F8\u6BD4-http-1-1-\u6027\u80FD\u4E0A\u7684\u6539\u8FDB" aria-hidden="true">#</a> HTTP/2 \u76F8\u2F50 HTTP/1.1 \u6027\u80FD\u4E0A\u7684\u6539\u8FDB</h2><h3 id="\u5934\u90E8\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u5934\u90E8\u538B\u7F29" aria-hidden="true">#</a> \u5934\u90E8\u538B\u7F29</h3><ul><li>\u540C\u65F6\u53D1\u9001\u591A\u4E2A\u5934\u90E8\u76F8\u540C\u6216\u76F8\u4F3C\u7684\u8BF7\u6C42\uFF0C\u534F\u8BAE\u4F1A\u6D88\u9664\u91CD\u590D\u7684\u90E8\u5206</li><li>\u7528\u7684\u662FHPACK \u7B97\u6CD5\uFF1A\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u540C\u65F6\u7EF4\u62A4\u2F00\u5F20\u5934\u4FE1\u606F\u8868\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u4F1A\u5B58\u2F0A\u8FD9\u4E2A\u8868\uFF0C\u2F63\u6210\u2F00\u4E2A\u7D22\u5F15\u53F7\uFF0C\u4EE5\u540E\u5C31\u4E0D\u53D1\u9001\u540C\u6837\u5B57\u6BB5\u4E86\uFF0C\u53EA\u53D1\u9001\u7D22\u5F15\u53F7\uFF0C\u63D0\u2FBC\u901F\u5EA6\u3002</li></ul><p>HTTP/2 \u6CA1\u4F7F\u7528\u5E38\u89C1\u7684 gzip \u538B\u7F29\u65B9\u5F0F\u6765\u538B\u7F29\u5934\u90E8\uFF0C\u800C\u662F\u5F00\u53D1\u4E86 HPACK \u7B97\u6CD5\uFF0CHPACK \u7B97\u6CD5\u4E3B\u8981\u5305\u542B\u4E09\u4E2A\u7EC4\u6210\u90E8\u5206\uFF1A</p><ul><li>\u9759\u6001\u5B57\u5178\uFF1B</li><li>\u52A8\u6001\u5B57\u5178\uFF1B</li><li>Huffman \u7F16\u7801\uFF08\u538B\u7F29\u7B97\u6CD5\uFF09\uFF1B</li></ul><p>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E24\u7AEF\u90FD\u4F1A\u5EFA\u7ACB\u548C\u7EF4\u62A4\u300C\u5B57\u5178\u300D\uFF0C\u7528\u957F\u5EA6\u8F83\u5C0F\u7684\u7D22\u5F15\u53F7\u8868\u793A\u91CD\u590D\u7684\u5B57\u7B26\u4E32\uFF0C\u518D\u7528 Huffman \u7F16\u7801\u538B\u7F29\u6570\u636E\uFF0C\u53EF\u8FBE\u5230 50%~90% \u7684\u9AD8\u538B\u7F29\u7387\u3002</p><h3 id="\u4E8C\u8FDB\u5236\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u683C\u5F0F" aria-hidden="true">#</a> \u2F06\u8FDB\u5236\u683C\u5F0F</h3><ul><li>\u4E0D\u91C7\u7528HTTP/1.1 \u2FA5\u7684\u7EAF\u2F42\u672C\u5F62\u5F0F\u7684\u62A5\u2F42\uFF0C\u5168\u2FAF\u91C7\u2F64\u4E86\u2F06\u8FDB\u5236\u683C\u5F0F\uFF0C\u5934\u4FE1\u606F\u548C\u6570\u636E\u4F53\u90FD\u662F\u2F06\u8FDB\u5236\uFF0C\u7EDF\u79F0\u4E3A\u5E27\uFF08frame\uFF09\uFF1A\u5934\u4FE1\u606F\u5E27\u548C\u6570\u636E\u5E27\u3002</li></ul><h3 id="\u591A\u8DEF\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a> \u591A\u8DEF\u590D\u7528</h3><ul><li>\u4E00\u4E2A\u8FDE\u63A5\u4E2D\u5E76\u53D1\u591A\u4E2A\u8BF7\u6C42\u6216\u56DE\u5E94\uFF0C\u4E0D\u7528\u6309\u987A\u5E8F\u4E00\u4E00\u5BF9\u5E94</li><li>\u4E0D\u9700\u8981\u6392\u961F\u7B49\u5F85\uFF0C\u4E5F\u5C31\u4E0D\u4F1A\u518D\u51FA\u73B0\u300C\u961F\u5934\u963B\u585E\u300D\u95EE\u9898\uFF0C\u964D\u4F4E\u4E86\u5EF6\u8FDF</li><li>\u5F53\u4E00\u4E2A\u8BF7\u6C42\u975E\u5E38\u8017\u65F6\uFF0C\u5148\u56DE\u5E94\u5DF2\u5904\u7406\u597D\u7684\u90E8\u5206\uFF0C\u56DE\u5E94\u5176\u4ED6\u8BF7\u6C42\u540E\u518D\u56DE\u5E94\u8BE5\u8BF7\u6C42\u5269\u4E0B\u7684\u90E8\u5206</li></ul><h3 id="\u6570\u636E\u6D41" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6D41" aria-hidden="true">#</a> \u6570\u636E\u6D41</h3><ul><li>\u6BCF\u4E2A\u8BF7\u6C42\u6216\u56DE\u5E94\u7684\u6240\u6709\u6570\u636E\u5305\uFF0C\u79F0\u4E3A\u2F00\u4E2A\u6570\u636E\u6D41\uFF08 Stream \uFF09\uFF0C\u6BCF\u4E2A\u6570\u636E\u6D41\u90FD\u6709\u7F16\u53F7</li><li>\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6307\u5B9A\u6570\u636E\u6D41\u7684\u4F18\u5148\u7EA7\u3002\u4F18\u5148\u7EA7\u2FBC\u670D\u52A1\u5668\u5C31\u5148\u54CD\u5E94\u3002</li></ul><p>\u901A\u8FC7 Stream \u8FD9\u4E2A\u8BBE\u8BA1\uFF0C<b>\u591A\u4E2A Stream \u590D\u7528\u4E00\u6761 TCP \u8FDE\u63A5</b> \uFF0C\u8FBE\u5230\u5E76\u53D1\u7684\u6548\u679C\uFF0C\u89E3\u51B3\u4E86 HTTP/1.1 \u961F\u5934\u963B\u585E\u7684\u95EE\u9898\uFF0C\u63D0\u9AD8\u4E86 HTTP \u4F20\u8F93\u7684\u541E\u5410\u91CF\u3002</p><ol><li>1 \u4E2A TCP \u8FDE\u63A5\u5305\u542B\u4E00\u4E2A\u6216\u8005\u591A\u4E2A Stream\uFF0CStream \u662F HTTP/2 \u5E76\u53D1\u7684\u5173\u952E\u6280\u672F\uFF1B</li><li>Stream \u91CC\u53EF\u4EE5\u5305\u542B 1 \u4E2A\u6216\u591A\u4E2A Message\uFF0CMessage \u5BF9\u5E94 HTTP/1 \u4E2D\u7684\u8BF7\u6C42\u6216\u54CD\u5E94\uFF0C\u7531 HTTP \u5934\u90E8\u548C\u5305\u4F53\u6784\u6210\uFF1B</li><li>Message \u91CC\u5305\u542B\u4E00\u6761\u6216\u8005\u591A\u4E2A Frame\uFF0CFrame \u662F HTTP/2 \u6700\u5C0F\u5355\u4F4D\uFF0C\u4EE5\u4E8C\u8FDB\u5236\u538B\u7F29\u683C\u5F0F\u5B58\u653E HTTP/1 \u4E2D\u7684\u5185\u5BB9\uFF08\u5934\u90E8\u548C\u5305\u4F53\uFF09</li><li>HTTP \u6D88\u606F\u53EF\u4EE5\u7531\u591A\u4E2A Frame \u6784\u6210\uFF0C \u4E00\u4E2A Frame \u53EF\u4EE5\u7531\u591A\u4E2A TCP \u62A5\u6587\u6784\u6210\u3002</li></ol><h3 id="\u670D\u52A1\u5668\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u63A8\u9001" aria-hidden="true">#</a> \u670D\u52A1\u5668\u63A8\u9001</h3><ul><li>\u670D\u52A1\u4E0D\u518D\u662F\u88AB\u52A8\u5730\u54CD\u5E94\uFF0C\u4E5F\u53EF\u4EE5\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6D88\u606F\u3002</li><li>\u6D4F\u89C8\u5668\u8BF7\u6C42HTML\u65F6\uFF0C\u63D0\u524D\u5427\u53EF\u80FD\u4F1A\u7528\u5230\u7684JS\uFF0CCSS\u7B49\u63A8\u9001\u7ED9\u5BA2\u6237\u7AEF</li></ul><p>\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u8BF7\u6C42\uFF0C\u5FC5\u987B\u4F7F\u7528\u7684\u662F<b>\u5947\u6570\u53F7 Stream</b>\uFF0C\u670D\u52A1\u5668\u4E3B\u52A8\u7684\u63A8\u9001\uFF0C\u4F7F\u7528\u7684\u662F<b>\u5076\u6570\u53F7 Stream</b>\u3002\u670D\u52A1\u5668\u5728\u63A8\u9001\u8D44\u6E90\u65F6\uFF0C\u4F1A\u901A\u8FC7 PUSH_PROMISE \u5E27\u4F20\u8F93 HTTP \u5934\u90E8\uFF0C\u5E76\u901A\u8FC7\u5E27\u4E2D\u7684 Promised Stream ID \u5B57\u6BB5\u544A\u77E5\u5BA2\u6237\u7AEF\uFF0C\u63A5\u4E0B\u6765\u4F1A\u5728\u54EA\u4E2A\u5076\u6570\u53F7 Stream \u4E2D\u53D1\u9001\u5305\u4F53\u3002</p><h2 id="\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677" aria-hidden="true">#</a> \u7F3A\u9677</h2><p>HTTP/2 \u591A\u4E2A\u8BF7\u6C42\u590D\u2F64\u2F00\u4E2ATCP\u8FDE\u63A5\uFF0C\u2F00\u65E6\u53D1\u2F63\u4E22\u5305\uFF0C\u89E6\u53D1TCP\u91CD\u4F20\u673A\u5236\uFF0C\u5C31\u4F1A\u963B\u585E\u4F4F\u6240\u6709\u7684 HTTP \u8BF7\u6C42\u3002</p><p>HTTP/2 \u662F\u57FA\u4E8E TCP \u534F\u8BAE\u6765\u4F20\u8F93\u6570\u636E\u7684\uFF0CTCP \u662F\u5B57\u8282\u6D41\u534F\u8BAE\uFF0CTCP \u5C42\u5FC5\u987B\u4FDD\u8BC1\u6536\u5230\u7684\u5B57\u8282\u6570\u636E\u662F\u5B8C\u6574\u4E14\u8FDE\u7EED\u7684\uFF0C\u8FD9\u6837\u5185\u6838\u624D\u4F1A\u5C06\u7F13\u51B2\u533A\u91CC\u7684\u6570\u636E\u8FD4\u56DE\u7ED9 HTTP \u5E94\u7528\uFF0C\u90A3\u4E48\u5F53\u300C\u524D 1 \u4E2A\u5B57\u8282\u6570\u636E\u300D\u6CA1\u6709\u5230\u8FBE\u65F6\uFF0C\u540E\u6536\u5230\u7684\u5B57\u8282\u6570\u636E\u53EA\u80FD\u5B58\u653E\u5728\u5185\u6838\u7F13\u51B2\u533A\u91CC\uFF0C\u53EA\u6709\u7B49\u5230\u8FD9 1 \u4E2A\u5B57\u8282\u6570\u636E\u5230\u8FBE\u65F6\uFF0CHTTP/2 \u5E94\u7528\u5C42\u624D\u80FD\u4ECE\u5185\u6838\u4E2D\u62FF\u5230\u6570\u636E\uFF0C\u8FD9\u5C31\u662F HTTP/2 <code>\u961F\u5934\u963B\u585E</code>\u95EE\u9898\u3002</p>',22),h=[t];function T(d,P){return e(),i("div",null,h)}var s=a(l,[["render",T],["__file","HTTP2.html.vue"]]);export{s as default};
