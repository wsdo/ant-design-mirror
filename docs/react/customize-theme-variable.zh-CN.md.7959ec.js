(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{3074:function(n,s){n.exports={content:["article",["p","\u9664\u4E86 ",["a",{title:null,href:"/docs/react/customize-theme"},"less \u5B9A\u5236\u4E3B\u9898\u5916"]," \u5916\uFF0C\u6211\u4EEC\u8FD8\u63D0\u4F9B\u4E86 CSS Variable \u7248\u672C\u4EE5\u652F\u6301\u52A8\u6001\u5207\u6362\u4E3B\u9898\u80FD\u529B\u3002\u4F60\u53EF\u4EE5\u5728 ",["a",{title:null,href:"/components/config-provider/#components-config-provider-demo-theme"},"ConfigProvider"]," \u8FDB\u884C\u4F53\u9A8C\u3002"],["h2","\u6CE8\u610F\u4E8B\u9879"],["p","\u8BE5\u529F\u80FD\u901A\u8FC7\u52A8\u6001\u4FEE\u6539 CSS Variable \u5B9E\u73B0\uFF0C\u56E0\u800C\u5728 IE \u4E2D\u9875\u9762\u5C06\u65E0\u6CD5\u6B63\u5E38\u5C55\u793A\u3002\u8BF7\u5148\u786E\u8BA4\u4F60\u7684\u7528\u6237\u73AF\u5883\u662F\u5426\u9700\u8981\u652F\u6301 IE\u3002"],["h2","\u5982\u4F55\u4F7F\u7528"],["h3","\u5F15\u5165 antd.variable.min.css"],["p","\u66FF\u6362\u5F53\u524D\u9879\u76EE\u5F15\u5165\u6837\u5F0F\u6587\u4EF6\u4E3A CSS Variable \u7248\u672C\uFF1A"],["pre",{lang:"diff",highlighted:`<span class="token deleted">-- import 'antd/dist/antd.min.css';</span>
<span class="token inserted">++ import 'antd/dist/antd.variable.min.css';</span>`},["code",`-- import 'antd/dist/antd.min.css';
++ import 'antd/dist/antd.variable.min.css';`]],["p","\u6CE8\uFF1A\u5982\u679C\u4F60\u4F7F\u7528\u4E86 ",["code","babel-plugin-import"],"\uFF0C\u9700\u8981\u5C06\u5176\u53BB\u9664\u3002"],["h3","\u9759\u6001\u65B9\u6CD5\u914D\u7F6E"],["p","\u8C03\u7528 ConfigProvider \u914D\u7F6E\u65B9\u6CD5\u8BBE\u7F6E\u4E3B\u9898\u8272\uFF1A"],["pre",{lang:"ts",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token punctuation">:</span> <span class="token string">'#25b864'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});`]],["h2","\u51B2\u7A81\u89E3\u51B3"],["p","\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CCSS Variable \u4F1A\u4EE5 ",["code","--ant"]," \u4F5C\u4E3A\u524D\u7F00\u3002\u5F53\u4F60\u7684\u9879\u76EE\u4E2D\u5F15\u7528\u591A\u4EFD css \u6587\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u524D\u7F00\u7684\u65B9\u5F0F\u907F\u514D\u51B2\u7A81\u3002"],["h3","\u4EE3\u7801\u8C03\u6574"],["p","\u901A\u8FC7 ConfigProvider \u5728\u9876\u5C42\u4FEE\u6539 ",["code","prefixCls"],"\uFF1A"],["pre",{lang:"tsx",highlighted:`import { ConfigProvider } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>ConfigProvider prefixCls<span class="token operator">=</span><span class="token string">"custom"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>MyApp <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ConfigProvider<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`import { ConfigProvider } from 'antd';

export default () => (
  <ConfigProvider prefixCls="custom">
    <MyApp />
  </ConfigProvider>
);`]],["p","\u901A\u8FC7\u9759\u6001\u65B9\u6CD5\u8BBE\u7F6E\u4E3B\u9898\u8272\u4EE5\u53CA\u5BF9\u5E94 ",["code","prefixCls"],"\uFF1A"],["pre",{lang:"ts",highlighted:`ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">:</span> <span class="token string">'custom'</span><span class="token punctuation">,</span>
  theme<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    primaryColor<span class="token punctuation">:</span> <span class="token string">'#25b864'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`ConfigProvider.config({
  prefixCls: 'custom',
  theme: {
    primaryColor: '#25b864',
  },
});`]],["h3","\u7F16\u8BD1 less"],["p","\u7531\u4E8E\u524D\u7F00\u53D8\u66F4\uFF0C\u4F60\u9700\u8981\u91CD\u65B0\u751F\u6210\u4E00\u4EFD\u5BF9\u5E94\u7684 css \u6587\u4EF6\u3002"],["pre",{lang:"bash",highlighted:'lessc --modify-var<span class="token operator">=</span><span class="token string">"ant-prefix=custom"</span> antd/dist/antd.variable.less modified.css'},["code",'lessc --modify-var="ant-prefix=custom" antd/dist/antd.variable.less modified.css']]],meta:{order:7.1,title:"\u52A8\u6001\u4E3B\u9898\uFF08\u5B9E\u9A8C\u6027\uFF09",filename:"docs/react/customize-theme-variable.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6CE8\u610F\u4E8B\u9879",title:"\u6CE8\u610F\u4E8B\u9879"},"\u6CE8\u610F\u4E8B\u9879"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},"\u5982\u4F55\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u51B2\u7A81\u89E3\u51B3",title:"\u51B2\u7A81\u89E3\u51B3"},"\u51B2\u7A81\u89E3\u51B3"]]]}}}]);
