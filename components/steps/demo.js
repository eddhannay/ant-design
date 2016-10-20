webpackJsonp([12,197],{892:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(132),a(131)),e=t(p),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 Steps \u7684 ",["code","status"]," \u5c5e\u6027\u6765\u6307\u5b9a\u5f53\u524d\u6b65\u9aa4\u7684\u72b6\u6001\u3002"]],"en-US":[["p","By using ",["code","status"]," of ",["code","Steps"],", you can specify the state for current step."]]},meta:{order:6,title:{"zh-CN":"\u6b65\u9aa4\u8fd0\u884c\u9519\u8bef","en-US":"Error status"},filename:"components/steps/demo/error.md",id:"components-steps-demo-error"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Finished<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>In</span> <span class="token attr-name" >Process"</span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Waiting<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description"</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].Step;return c["default"].createElement(e["default"],{current:1,status:"error"},c["default"].createElement(n,{title:"Finished",description:"This is a description"}),c["default"].createElement(n,{title:"In Process",description:"This is a description"}),c["default"].createElement(n,{title:"Waiting",description:"This is a description"}))}}},893:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(15),a(13)),e=t(p),o=(a(132),a(131)),c=t(o),l=a(1),u=t(l),i=a(2);t(i);n.exports={content:{"zh-CN":[["p","\u901a\u8fc7\u8bbe\u7f6e ",["code","Steps.Step"]," \u7684 ",["code","icon"]," \u5c5e\u6027\uff0c\u53ef\u4ee5\u542f\u7528\u81ea\u5b9a\u4e49\u56fe\u6807\u3002"]],"en-US":[["p","You can use your own custom icons by setting the property ",["code","icon"]," for ",["code","Steps.Step"],"."]]},meta:{order:2,title:{"zh-CN":"\u5e26\u56fe\u6807\u7684\u6b65\u9aa4\u6761","en-US":"With icon"},filename:"components/steps/demo/icon.md",id:"components-steps-demo-icon"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>finish<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Step</span> <span class="token attr-name" >1"</span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>cloud<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>process<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Step</span> <span class="token attr-name" >2"</span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>apple<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>wait<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Step</span> <span class="token attr-name" >3"</span> <span class="token attr-name" >icon={&lt;Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>github<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].Step;return u["default"].createElement(c["default"],null,u["default"].createElement(n,{status:"finish",title:"Step 1",icon:"cloud"}),u["default"].createElement(n,{status:"process",title:"Step 2",icon:"apple"}),u["default"].createElement(n,{status:"wait",title:"Step 3",icon:u["default"].createElement(e["default"],{type:"github"})}))}}},894:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(132),a(131)),e=t(p),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u6b65\u9aa4\u6761\u3002"]],"en-US":[["p","The most basic step bar."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"Basic"},filename:"components/steps/demo/simple.md",id:"components-steps-demo-simple"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Finished<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>In</span> <span class="token attr-name" >Progress"</span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Waiting<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].Step;return c["default"].createElement(e["default"],{current:1},c["default"].createElement(n,{title:"Finished",description:"This is a description."}),c["default"].createElement(n,{title:"In Progress",description:"This is a description."}),c["default"].createElement(n,{title:"Waiting",description:"This is a description."}))}}},895:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(132),a(131)),e=t(p),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u8ff7\u4f60\u7248\u7684\u6b65\u9aa4\u6761\uff0c\u901a\u8fc7\u8bbe\u7f6e ",["code",'<Steps size="small">']," \u542f\u7528."]],"en-US":[["p","By setting like this: ",["code",'<Steps size="small">'],", you can get a mini version."]]},meta:{order:1,title:{"zh-CN":"\u8ff7\u4f60\u7248","en-US":"Mini version"},filename:"components/steps/demo/small-size.md",id:"components-steps-demo-small-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Finished<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>In</span> <span class="token attr-name" >Progress"</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Waiting<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].Step;return c["default"].createElement(e["default"],{size:"small",current:1},c["default"].createElement(n,{title:"Finished"}),c["default"].createElement(n,{title:"In Progress"}),c["default"].createElement(n,{title:"Waiting"}))}}},896:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(10),a(9)),e=t(p),o=a(96),c=t(o),l=(a(132),a(131)),u=t(l),i=a(1),k=t(i),r=a(2);t(r);n.exports={content:{"zh-CN":[["p","\u968f\u673a\u751f\u6210 3~6 \u4e2a\u6b65\u9aa4\uff0c\u521d\u59cb\u968f\u673a\u8fdb\u884c\u5230\u5176\u4e2d\u4e00\u4e2a\u6b65\u9aa4\u3002"]],"en-US":[["p","Let's generate 3~6 steps randomly, and proceed to a random step."]]},meta:{order:3,title:{"zh-CN":"\u5207\u6362\u5230\u4e0b\u4e00\u6b65","en-US":"Switch to next"},filename:"components/steps/demo/step-next.md",id:"components-steps-demo-step-next"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> array <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >Array</span><span class="token punctuation" >(</span>Math<span class="token punctuation" >.</span><span class="token function" >floor</span><span class="token punctuation" >(</span>Math<span class="token punctuation" >.</span><span class="token function" >random</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >*</span> <span class="token number" >3</span><span class="token punctuation" >)</span> <span class="token operator" >+</span> <span class="token number" >3</span><span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> steps <span class="token operator" >=</span> array<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>item<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`Step </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i <span class="token operator" >+</span> <span class="token number" >1</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> Math<span class="token punctuation" >.</span><span class="token function" >floor</span><span class="token punctuation" >(</span>Math<span class="token punctuation" >.</span><span class="token function" >random</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >*</span> steps<span class="token punctuation" >.</span>length<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >next</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> current <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>current <span class="token operator" >+</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>current <span class="token operator" >===</span> steps<span class="token punctuation" >.</span>length<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      current <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> current <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> current <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token number" >24</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Curent Step <span class="token punctuation" >{</span>current <span class="token operator" >+</span> <span class="token number" >1</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>current<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token punctuation" >{</span>steps<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>s<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span></span> <span class="token attr-name" >description</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>description<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >24</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>next<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Next Step<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].Step,s=[].concat((0,c["default"])(Array(Math.floor(3*Math.random())+3))),a=s.map(function(n,s){return{title:"Step "+(s+1)}}),t=k["default"].createClass({displayName:"App",getInitialState:function(){return{current:Math.floor(Math.random()*a.length)}},next:function(){var n=this.state.current+1;n===a.length&&(n=0),this.setState({current:n})},render:function(){var s=this.state.current;return k["default"].createElement("div",null,k["default"].createElement("div",{style:{marginBottom:24}},"Curent Step ",s+1),k["default"].createElement(u["default"],{current:s},a.map(function(s,a){return k["default"].createElement(n,{key:a,title:s.title,description:s.description})})),k["default"].createElement("div",{style:{marginTop:24}},k["default"].createElement(e["default"],{onClick:this.next},"Next Step")))}});return k["default"].createElement(t,null)}}},897:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(132),a(131)),e=t(p),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u7ad6\u76f4\u65b9\u5411\u7684\u5c0f\u578b\u6b65\u9aa4\u6761\u3002"]],"en-US":[["p","A simple mini version step bar in the vertical direction."]]},meta:{order:5,title:{"zh-CN":"\u7ad6\u76f4\u65b9\u5411\u7684\u5c0f\u578b\u6b65\u9aa4\u6761","en-US":"Vertical mini version"},filename:"components/steps/demo/vertical-small.md",id:"components-steps-demo-vertical-small"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >direction</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>vertical<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Finished<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>In</span> <span class="token attr-name" >Progress"</span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Waiting<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=e["default"].Step;return c["default"].createElement(e["default"],{direction:"vertical",size:"small",current:1},c["default"].createElement(n,{title:"Finished",description:"This is a description."}),c["default"].createElement(n,{title:"In Progress",description:"This is a description."}),c["default"].createElement(n,{title:"Waiting",description:"This is a description."}))}}},898:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(132),a(131)),e=t(p),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u7ad6\u76f4\u65b9\u5411\u7684\u6b65\u9aa4\u6761\u3002"]],"en-US":[["p","A simple step bar in the vertical direction."]]},meta:{order:4,title:{"zh-CN":"\u7ad6\u76f4\u65b9\u5411\u7684\u6b65\u9aa4\u6761","en-US":"Vertical"},filename:"components/steps/demo/vertical.md",id:"components-steps-demo-vertical"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >direction</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>vertical<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Finished<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>In</span> <span class="token attr-name" >Progress"</span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Waiting<span class="token punctuation" >"</span></span> <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>This</span> <span class="token attr-name" >is</span> <span class="token attr-name" >a</span> <span class="token attr-name" >description."</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].Step;return c["default"].createElement(e["default"],{direction:"vertical",current:1},c["default"].createElement(n,{title:"Finished",description:"This is a description."}),c["default"].createElement(n,{title:"In Progress",description:"This is a description."}),c["default"].createElement(n,{title:"Waiting",description:"This is a description."}))}}},1181:function(n,s,a){n.exports={error:a(892),icon:a(893),simple:a(894),"small-size":a(895),"step-next":a(896),"vertical-small":a(897),vertical:a(898)}}});