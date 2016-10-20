webpackJsonp([46,197],{634:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(281),s(280)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u4f7f\u7528\u3002\u901a\u8fc7 dataSource \u8bbe\u7f6e\u81ea\u52a8\u5b8c\u6210\u7684\u6570\u636e\u6e90"]],"en-US":[["p","Basic Usage, set datasource of autocomplete with ",["code","dataSource"]," property."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u4f7f\u7528","en-US":"Basic Usage"},filename:"components/auto-complete/demo/basic.md",id:"components-auto-complete-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AutoComplete <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onSelect</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onSelect\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> Complete <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      dataSource<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      dataSource<span class="token punctuation" >:</span> <span class="token operator" >!</span>value <span class="token operator" >?</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        value<span class="token punctuation" >,</span>\n        value <span class="token operator" >+</span> value<span class="token punctuation" >,</span>\n        value <span class="token operator" >+</span> value <span class="token operator" >+</span> value<span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> dataSource <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>AutoComplete</span>\n        <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>dataSource<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onSelect</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onSelect<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Complete</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("onSelect",n)}var a=c["default"].createClass({displayName:"Complete",getInitialState:function(){return{dataSource:[]}},handleChange:function(n){this.setState({dataSource:n?[n,n+n,n+n+n]:[]})},render:function(){var a=this.state.dataSource;return c["default"].createElement(o["default"],{dataSource:a,style:{width:200},onSelect:n,onChange:this.handleChange})}});return c["default"].createElement(a,null)}}},635:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(281),s(280)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f20 ",["code","AutoComplete.Option"]," \u4f5c\u4e3a ",["code","AutoComplete"]," \u7684 ",["code","children"],"\uff0c\u800c\u975e\u4f7f\u7528 ",["code","dataSource"],"\u3002"]],"en-US":[["p","You could pass ",["code","AutoComplete.Option"]," as children of ",["code","AutoComplete"],", instead of using ",["code","dataSource"],"\u3002"]]},meta:{order:2,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u9009\u9879","en-US":"Customized"},filename:"components/auto-complete/demo/options.md",id:"components-auto-complete-demo-options"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AutoComplete <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> AutoComplete<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Complete <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      result<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> result<span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>value <span class="token operator" >||</span> value<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span><span class="token string" >\'@\'</span><span class="token punctuation" >)</span> <span class="token operator" >>=</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      result <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      result <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'gmail.com\'</span><span class="token punctuation" >,</span> <span class="token string" >\'163.com\'</span><span class="token punctuation" >,</span> <span class="token string" >\'qq.com\'</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>domain <span class="token operator" >=</span><span class="token operator" >></span> <span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >@</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>domain<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> result <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> result <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> children <span class="token operator" >=</span> result<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>email<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>email<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>email<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>AutoComplete</span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>children<span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>AutoComplete</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Complete</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Option,a=c["default"].createClass({displayName:"Complete",getInitialState:function(){return{result:[]}},handleChange:function(n){var a=void 0;a=!n||n.indexOf("@")>=0?[]:["gmail.com","163.com","qq.com"].map(function(a){return n+"@"+a}),this.setState({result:a})},render:function(){var a=this.state.result,s=a.map(function(a){return c["default"].createElement(n,{key:a},a)});return c["default"].createElement(o["default"],{style:{width:200},onChange:this.handleChange},s)}});return c["default"].createElement(a,null)}}},1149:function(n,a,s){n.exports={basic:s(634),options:s(635)}}});