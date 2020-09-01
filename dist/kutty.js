(function(){'use strict';!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Alpine=t();}(window,function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i);}return n}function n(n){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach(function(t){e(n,t,r[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e));});}return n}function i(e){return Array.from(new Set(e))}function r(){return navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")}function s(e,t){"template"!==e.tagName.toLowerCase()?console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`):1!==e.content.childElementCount&&console.warn(`Alpine: <template> tag with [${t}] encountered with multiple element roots. Make sure <template> only has a single child node.`);}function o(e){return e.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function a(e,t){var n;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){n=null,e.apply(i,r);},t);}}function l(e,t,n={}){return "function"==typeof e?e.call(t):new Function(["$data",...Object.keys(n)],`var __alpine_result; with($data) { __alpine_result = ${e} }; return __alpine_result`)(t,...Object.values(n))}const c=/^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;function u(e){const t=m(e.name);return c.test(t)}function d(e,t,n){let i=Array.from(e.attributes).filter(u).map(f),r=i.filter(e=>"spread"===e.type)[0];if(r){let e=l(r.expression,t.$data);i=i.concat(Object.entries(e).map(([e,t])=>f({name:e,value:t})));}return n?i.filter(e=>e.type===n):function(e){let t=["bind","model","show","catch-all"];return e.sort((e,n)=>{let i=-1===t.indexOf(e.type)?"catch-all":e.type,r=-1===t.indexOf(n.type)?"catch-all":n.type;return t.indexOf(i)-t.indexOf(r)})}(i)}function f({name:e,value:t}){const n=m(e),i=n.match(c),r=n.match(/:([a-zA-Z0-9\-:]+)/),s=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[];return {type:i?i[1]:null,value:r?r[1]:null,modifiers:s.map(e=>e.replace(".","")),expression:t}}function m(e){return e.startsWith("@")?e.replace("@","x-on:"):e.startsWith(":")?e.replace(":","x-bind:"):e}function p(e,t=Boolean){return e.split(" ").filter(t)}const h="in",v="out";function b(e,t,n,i=!1){if(i)return t();if(e.__x_transition&&e.__x_transition.type===h)return;const r=d(e,n,"transition"),s=d(e,n,"show")[0];if(s&&s.modifiers.includes("transition")){let n=s.modifiers;if(n.includes("out")&&!n.includes("in"))return t();const i=n.includes("in")&&n.includes("out");(function(e,t,n){const i={duration:g(t,"duration",150),origin:g(t,"origin","center"),first:{opacity:0,scale:g(t,"scale",95)},second:{opacity:1,scale:100}};x(e,t,n,()=>{},i,h);})(e,n=i?n.filter((e,t)=>t<n.indexOf("out")):n,t);}else r.some(e=>["enter","enter-start","enter-end"].includes(e.value))?function(e,t,n,i){let r=n=>"function"==typeof n?t.evaluateReturnExpression(e,n):n;const s=p(r((n.find(e=>"enter"===e.value)||{expression:""}).expression)),o=p(r((n.find(e=>"enter-start"===e.value)||{expression:""}).expression)),a=p(r((n.find(e=>"enter-end"===e.value)||{expression:""}).expression));_(e,s,o,a,i,()=>{},h);}(e,n,r,t):t();}function y(e,t,n,i=!1){if(i)return t();if(e.__x_transition&&e.__x_transition.type===v)return;const r=d(e,n,"transition"),s=d(e,n,"show")[0];if(s&&s.modifiers.includes("transition")){let n=s.modifiers;if(n.includes("in")&&!n.includes("out"))return t();const i=n.includes("in")&&n.includes("out");(function(e,t,n,i){const r={duration:n?g(t,"duration",150):g(t,"duration",150)/2,origin:g(t,"origin","center"),first:{opacity:1,scale:100},second:{opacity:0,scale:g(t,"scale",95)}};x(e,t,()=>{},i,r,v);})(e,n=i?n.filter((e,t)=>t>n.indexOf("out")):n,i,t);}else r.some(e=>["leave","leave-start","leave-end"].includes(e.value))?function(e,t,n,i){const r=p((n.find(e=>"leave"===e.value)||{expression:""}).expression),s=p((n.find(e=>"leave-start"===e.value)||{expression:""}).expression),o=p((n.find(e=>"leave-end"===e.value)||{expression:""}).expression);_(e,r,s,o,()=>{},i,v);}(e,0,r,t):t();}function g(e,t,n){if(-1===e.indexOf(t))return n;const i=e[e.indexOf(t)+1];if(!i)return n;if("scale"===t&&!E(i))return n;if("duration"===t){let e=i.match(/([0-9]+)ms/);if(e)return e[1]}return "origin"===t&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[i,e[e.indexOf(t)+2]].join(" "):i}function x(e,t,n,i,r,s){e.__x_transition&&(cancelAnimationFrame(e.__x_transition.nextFrame),e.__x_transition.callback&&e.__x_transition.callback());const o=e.style.opacity,a=e.style.transform,l=e.style.transformOrigin,c=!t.includes("opacity")&&!t.includes("scale"),u=c||t.includes("opacity"),d=c||t.includes("scale"),f={start(){u&&(e.style.opacity=r.first.opacity),d&&(e.style.transform=`scale(${r.first.scale/100})`);},during(){d&&(e.style.transformOrigin=r.origin),e.style.transitionProperty=[u?"opacity":"",d?"transform":""].join(" ").trim(),e.style.transitionDuration=`${r.duration/1e3}s`,e.style.transitionTimingFunction="cubic-bezier(0.4, 0.0, 0.2, 1)";},show(){n();},end(){u&&(e.style.opacity=r.second.opacity),d&&(e.style.transform=`scale(${r.second.scale/100})`);},hide(){i();},cleanup(){u&&(e.style.opacity=o),d&&(e.style.transform=a),d&&(e.style.transformOrigin=l),e.style.transitionProperty=null,e.style.transitionDuration=null,e.style.transitionTimingFunction=null;}};w(e,f,s);}function _(e,t,n,i,r,s,o){e.__x_transition&&(cancelAnimationFrame(e.__x_transition.nextFrame),e.__x_transition.callback&&e.__x_transition.callback());const a=e.__x_original_classes||[],l={start(){e.classList.add(...n);},during(){e.classList.add(...t);},show(){r();},end(){e.classList.remove(...n.filter(e=>!a.includes(e))),e.classList.add(...i);},hide(){s();},cleanup(){e.classList.remove(...t.filter(e=>!a.includes(e))),e.classList.remove(...i.filter(e=>!a.includes(e)));}};w(e,l,o);}function w(e,t,n){e.__x_transition={type:n,callback:O(()=>{t.hide(),e.isConnected&&t.cleanup(),delete e.__x_transition;}),nextFrame:null},t.start(),t.during(),e.__x_transition.nextFrame=requestAnimationFrame(()=>{let n=1e3*Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""));0===n&&(n=1e3*Number(getComputedStyle(e).animationDuration.replace("s",""))),t.show(),e.__x_transition.nextFrame=requestAnimationFrame(()=>{t.end(),setTimeout(e.__x_transition.callback,n);});});}function E(e){return !isNaN(e)}function O(e){let t=!1;return function(){t||(t=!0,e.apply(this,arguments));}}function k(e,t,i,r,o){s(t,"x-for");let a=A("function"==typeof i?e.evaluateReturnExpression(t,i):i),l=function(e,t,n,i){let r=d(t,e,"if")[0];if(r&&!e.evaluateReturnExpression(t,r.expression))return [];return e.evaluateReturnExpression(t,n.items,i)}(e,t,a,o),c=t;l.forEach((i,s)=>{let u=function(e,t,i,r,s){let o=s?n({},s):{};o[e.item]=t,e.index&&(o[e.index]=i);e.collection&&(o[e.collection]=r);return o}(a,i,s,l,o()),f=function(e,t,n,i){let r=d(t,e,"bind").filter(e=>"key"===e.value)[0];return r?e.evaluateReturnExpression(t,r.expression,()=>i):n}(e,t,s,u),m=function(e,t){if(!e)return;if(e.__x_for_key===t)return e;let n=e;for(;n;){if(n.__x_for_key===t)return n.parentElement.insertBefore(n,e);n=!(!n.nextElementSibling||void 0===n.nextElementSibling.__x_for_key)&&n.nextElementSibling;}}(c.nextElementSibling,f);m?(delete m.__x_for_key,m.__x_for=u,e.updateElements(m,()=>m.__x_for)):(b(m=function(e,t){let n=document.importNode(e.content,!0);return t.parentElement.insertBefore(n,t.nextElementSibling),t.nextElementSibling}(t,c),()=>{},e,r),m.__x_for=u,e.initializeElements(m,()=>m.__x_for)),(c=m).__x_for_key=f;}),function(e,t){var n=!(!e.nextElementSibling||void 0===e.nextElementSibling.__x_for_key)&&e.nextElementSibling;for(;n;){let e=n,i=n.nextElementSibling;y(n,()=>{e.remove();},t),n=!(!i||void 0===i.__x_for_key)&&i;}}(c,e);}function A(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!n)return;let i={};i.items=n[2].trim();let r=n[1].trim().replace(/^\(|\)$/g,""),s=r.match(t);return s?(i.item=r.replace(t,"").trim(),i.index=s[1].trim(),s[2]&&(i.collection=s[2].trim())):i.item=r,i}function S(e,t,n,r,s,a,l){var c=e.evaluateReturnExpression(t,r,s);if("value"===n){if(me.ignoreFocusedForValueBinding&&document.activeElement.isSameNode(t))return;if(void 0===c&&r.match(/\./)&&(c=""),"radio"===t.type)void 0===t.attributes.value&&"bind"===a?t.value=c:"bind"!==a&&(t.checked=t.value==c);else if("checkbox"===t.type)"string"==typeof c&&"bind"===a?t.value=c:"bind"!==a&&(Array.isArray(c)?t.checked=c.some(e=>e==t.value):t.checked=!!c);else if("SELECT"===t.tagName)!function(e,t){const n=[].concat(t).map(e=>e+"");Array.from(e.options).forEach(e=>{e.selected=n.includes(e.value||e.text);});}(t,c);else {if(t.value===c)return;t.value=c;}}else if("class"===n)if(Array.isArray(c)){const e=t.__x_original_classes||[];t.setAttribute("class",i(e.concat(c)).join(" "));}else if("object"==typeof c){Object.keys(c).sort((e,t)=>c[e]-c[t]).forEach(e=>{c[e]?p(e).forEach(e=>t.classList.add(e)):p(e).forEach(e=>t.classList.remove(e));});}else {const e=t.__x_original_classes||[],n=p(c);t.setAttribute("class",i(e.concat(n)).join(" "));}else n=l.includes("camel")?o(n):n,[null,void 0,!1].includes(c)?t.removeAttribute(n):!function(e){return ["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}(n)?$(t,n,c):$(t,n,n);}function $(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n);}function P(e,t,n,i,r,s={}){const l={passive:i.includes("passive")};if(i.includes("camel")&&(n=o(n)),i.includes("away")){let o=a=>{t.contains(a.target)||t.offsetWidth<1&&t.offsetHeight<1||(C(e,r,a,s),i.includes("once")&&document.removeEventListener(n,o,l));};document.addEventListener(n,o,l);}else {let o=i.includes("window")?window:i.includes("document")?document:t,c=a=>{if(o!==window&&o!==document||document.body.contains(t)){if(!(function(e){return ["keydown","keyup"].includes(e)}(n)&&function(e,t){let n=t.filter(e=>!["window","document","prevent","stop"].includes(e));if(n.includes("debounce")){let e=n.indexOf("debounce");n.splice(e,E((n[e+1]||"invalid-wait").split("ms")[0])?2:1);}if(0===n.length)return !1;if(1===n.length&&n[0]===D(e.key))return !1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(e=>n.includes(e));if(n=n.filter(e=>!i.includes(e)),i.length>0){const t=i.filter(t=>("cmd"!==t&&"super"!==t||(t="meta"),e[`${t}Key`]));if(t.length===i.length&&n[0]===D(e.key))return !1}return !0}(a,i)||(i.includes("prevent")&&a.preventDefault(),i.includes("stop")&&a.stopPropagation(),i.includes("self")&&a.target!==t))){C(e,r,a,s).then(e=>{!1===e?a.preventDefault():i.includes("once")&&o.removeEventListener(n,c,l);});}}else o.removeEventListener(n,c,l);};if(i.includes("debounce")){let e=i[i.indexOf("debounce")+1]||"invalid-wait",t=E(e.split("ms")[0])?Number(e.split("ms")[0]):250;c=a(c,t);}o.addEventListener(n,c,l);}}function C(e,t,i,r){return e.evaluateCommandExpression(i.target,t,()=>n(n({},r()),{},{$event:i}))}function D(e){switch(e){case"/":return "slash";case" ":case"Spacebar":return "space";default:return e&&e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}}function j(e,t,n){return "radio"===e.type&&(e.hasAttribute("name")||e.setAttribute("name",n)),(n,i)=>{if(n instanceof CustomEvent&&n.detail)return n.detail;if("checkbox"===e.type){if(Array.isArray(i)){const e=t.includes("number")?T(n.target.value):n.target.value;return n.target.checked?i.concat([e]):i.filter(t=>t!==e)}return n.target.checked}if("select"===e.tagName.toLowerCase()&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(e=>{return T(e.value||e.text)}):Array.from(n.target.selectedOptions).map(e=>e.value||e.text);{const e=n.target.value;return t.includes("number")?T(e):t.includes("trim")?e.trim():e}}}function T(e){const t=e?parseFloat(e):null;return E(t)?t:e}const{isArray:L}=Array,{getPrototypeOf:N,create:z,defineProperty:R,defineProperties:F,isExtensible:I,getOwnPropertyDescriptor:M,getOwnPropertyNames:B,getOwnPropertySymbols:U,preventExtensions:q,hasOwnProperty:W}=Object,{push:K,concat:G,map:H}=Array.prototype;function V(e){return void 0===e}function Z(e){return "function"==typeof e}const J=new WeakMap;function Q(e,t){J.set(e,t);}const X=e=>J.get(e)||e;function Y(e,t){return e.valueIsObservable(t)?e.getProxy(t):t}function ee(e,t,n){G.call(B(n),U(n)).forEach(i=>{let r=M(n,i);r.configurable||(r=ue(e,r,Y)),R(t,i,r);}),q(t);}class te{constructor(e,t){this.originalTarget=t,this.membrane=e;}get(e,t){const{originalTarget:n,membrane:i}=this,r=n[t],{valueObserved:s}=i;return s(n,t),i.getProxy(r)}set(e,t,n){const{originalTarget:i,membrane:{valueMutated:r}}=this;return i[t]!==n?(i[t]=n,r(i,t)):"length"===t&&L(i)&&r(i,t),!0}deleteProperty(e,t){const{originalTarget:n,membrane:{valueMutated:i}}=this;return delete n[t],i(n,t),!0}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return G.call(B(t),U(t))}isExtensible(e){const t=I(e);if(!t)return t;const{originalTarget:n,membrane:i}=this,r=I(n);return r||ee(i,e,n),r}setPrototypeOf(e,t){}getPrototypeOf(e){const{originalTarget:t}=this;return N(t)}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=this.membrane;r(n,t);let s=M(n,t);if(V(s))return s;const o=M(e,t);return V(o)?((s=ue(i,s,Y)).configurable||R(e,t,s),s):o}preventExtensions(e){const{originalTarget:t,membrane:n}=this;return ee(n,e,t),q(t),!0}defineProperty(e,t,n){const{originalTarget:i,membrane:r}=this,{valueMutated:s}=r,{configurable:o}=n;if(W.call(n,"writable")&&!W.call(n,"value")){const e=M(i,t);n.value=e.value;}return R(i,t,function(e){return W.call(e,"value")&&(e.value=X(e.value)),e}(n)),!1===o&&R(e,t,ue(r,n,Y)),s(i,t),!0}}function ne(e,t){return e.valueIsObservable(t)?e.getReadOnlyProxy(t):t}class ie{constructor(e,t){this.originalTarget=t,this.membrane=e;}get(e,t){const{membrane:n,originalTarget:i}=this,r=i[t],{valueObserved:s}=n;return s(i,t),n.getReadOnlyProxy(r)}set(e,t,n){return !1}deleteProperty(e,t){return !1}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return G.call(B(t),U(t))}setPrototypeOf(e,t){}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=i;r(n,t);let s=M(n,t);if(V(s))return s;const o=M(e,t);return V(o)?(s=ue(i,s,ne),W.call(s,"set")&&(s.set=void 0),s.configurable||R(e,t,s),s):o}preventExtensions(e){return !1}defineProperty(e,t,n){return !1}}function re(e){let t=void 0;return L(e)?t=[]:"object"==typeof e&&(t={}),t}const se=Object.prototype;function oe(e){if(null===e)return !1;if("object"!=typeof e)return !1;if(L(e))return !0;const t=N(e);return t===se||null===t||null===N(t)}const ae=(e,t)=>{},le=(e,t)=>{},ce=e=>e;function ue(e,t,n){const{set:i,get:r}=t;return W.call(t,"value")?t.value=n(e,t.value):(V(r)||(t.get=function(){return n(e,r.call(X(this)))}),V(i)||(t.set=function(t){i.call(X(this),e.unwrapProxy(t));})),t}class de{constructor(e){if(this.valueDistortion=ce,this.valueMutated=le,this.valueObserved=ae,this.valueIsObservable=oe,this.objectGraph=new WeakMap,!V(e)){const{valueDistortion:t,valueMutated:n,valueObserved:i,valueIsObservable:r}=e;this.valueDistortion=Z(t)?t:ce,this.valueMutated=Z(n)?n:le,this.valueObserved=Z(i)?i:ae,this.valueIsObservable=Z(r)?r:oe;}}getProxy(e){const t=X(e),n=this.valueDistortion(t);if(this.valueIsObservable(n)){const i=this.getReactiveState(t,n);return i.readOnly===e?e:i.reactive}return n}getReadOnlyProxy(e){e=X(e);const t=this.valueDistortion(e);return this.valueIsObservable(t)?this.getReactiveState(e,t).readOnly:t}unwrapProxy(e){return X(e)}getReactiveState(e,t){const{objectGraph:n}=this;let i=n.get(t);if(i)return i;const r=this;return i={get reactive(){const n=new te(r,t),i=new Proxy(re(t),n);return Q(i,e),R(this,"reactive",{value:i}),i},get readOnly(){const n=new ie(r,t),i=new Proxy(re(t),n);return Q(i,e),R(this,"readOnly",{value:i}),i}},n.set(t,i),i}}class fe{constructor(e,t=null){this.$el=e;const n=this.$el.getAttribute("x-data"),i=""===n?"{}":n,r=this.$el.getAttribute("x-init");let s={$el:this.$el},o=t?t.$el:this.$el;Object.entries(me.magicProperties).forEach(([e,t])=>{Object.defineProperty(s,`$${e}`,{get:function(){return t(o)}});}),this.unobservedData=t?t.getUnobservedData():l(i,s);let{membrane:a,data:c}=this.wrapDataInObservable(this.unobservedData);var u;this.$data=c,this.membrane=a,this.unobservedData.$el=this.$el,this.unobservedData.$refs=this.getRefsProxy(),this.nextTickStack=[],this.unobservedData.$nextTick=(e=>{this.nextTickStack.push(e);}),this.watchers={},this.unobservedData.$watch=((e,t)=>{this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t);}),Object.entries(me.magicProperties).forEach(([e,t])=>{Object.defineProperty(this.unobservedData,`$${e}`,{get:function(){return t(o)}});}),this.showDirectiveStack=[],this.showDirectiveLastElement,t||me.onBeforeComponentInitializeds.forEach(e=>e(this)),r&&!t&&(this.pauseReactivity=!0,u=this.evaluateReturnExpression(this.$el,r),this.pauseReactivity=!1),this.initializeElements(this.$el),this.listenForNewElementsToInitialize(),"function"==typeof u&&u.call(this.$data),t||setTimeout(()=>{me.onComponentInitializeds.forEach(e=>e(this));},0);}getUnobservedData(){return function(e,t){let n=e.unwrapProxy(t),i={};return Object.keys(n).forEach(e=>{["$el","$refs","$nextTick","$watch"].includes(e)||(i[e]=n[e]);}),i}(this.membrane,this.$data)}wrapDataInObservable(e){var t=this;let n=a(function(){t.updateElements(t.$el);},0);return function(e,t){let n=new de({valueMutated(e,n){t(e,n);}});return {data:n.getProxy(e),membrane:n}}(e,(e,i)=>{t.watchers[i]?t.watchers[i].forEach(t=>t(e[i])):Object.keys(t.watchers).filter(e=>e.includes(".")).forEach(n=>{let r=n.split(".");i===r[r.length-1]&&r.reduce((r,s)=>(Object.is(e,r)&&t.watchers[n].forEach(t=>t(e[i])),r[s]),t.getUnobservedData());}),t.pauseReactivity||n();})}walkAndSkipNestedComponents(e,t,n=(()=>{})){!function e(t,n){if(!1===n(t))return;let i=t.firstElementChild;for(;i;)e(i,n),i=i.nextElementSibling;}(e,e=>e.hasAttribute("x-data")&&!e.isSameNode(this.$el)?(e.__x||n(e),!1):t(e));}initializeElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,e=>void 0===e.__x_for_key&&(void 0===e.__x_inserted_me&&void this.initializeElement(e,t)),e=>{e.__x=new fe(e);}),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e);}initializeElement(e,t){e.hasAttribute("class")&&d(e,this).length>0&&(e.__x_original_classes=p(e.getAttribute("class"))),this.registerListeners(e,t),this.resolveBoundAttributes(e,!0,t);}updateElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,e=>{if(void 0!==e.__x_for_key&&!e.isSameNode(this.$el))return !1;this.updateElement(e,t);},e=>{e.__x=new fe(e);}),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e);}executeAndClearNextTickStack(e){e===this.$el&&this.nextTickStack.length>0&&requestAnimationFrame(()=>{for(;this.nextTickStack.length>0;)this.nextTickStack.shift()();});}executeAndClearRemainingShowDirectiveStack(){this.showDirectiveStack.reverse().map(e=>new Promise(t=>{e(e=>{t(e);});})).reduce((e,t)=>e.then(()=>t.then(e=>e())),Promise.resolve(()=>{})),this.showDirectiveStack=[],this.showDirectiveLastElement=void 0;}updateElement(e,t){this.resolveBoundAttributes(e,!1,t);}registerListeners(e,t){d(e,this).forEach(({type:i,value:r,modifiers:s,expression:o})=>{switch(i){case"on":P(this,e,r,s,o,t);break;case"model":!function(e,t,i,r,s){var o="select"===t.tagName.toLowerCase()||["checkbox","radio"].includes(t.type)||i.includes("lazy")?"change":"input";P(e,t,o,i,`${r} = rightSideOfExpression($event, ${r})`,()=>n(n({},s()),{},{rightSideOfExpression:j(t,i,r)}));}(this,e,s,o,t);}});}resolveBoundAttributes(e,t=!1,n){let i=d(e,this);i.forEach(({type:r,value:o,modifiers:a,expression:l})=>{switch(r){case"model":S(this,e,"value",l,n,r,a);break;case"bind":if("template"===e.tagName.toLowerCase()&&"key"===o)return;S(this,e,o,l,n,r,a);break;case"text":var c=this.evaluateReturnExpression(e,l,n);!function(e,t,n){void 0===t&&n.match(/\./)&&(t=""),e.innerText=t;}(e,c,l);break;case"html":!function(e,t,n,i){t.innerHTML=e.evaluateReturnExpression(t,n,i);}(this,e,l,n);break;case"show":c=this.evaluateReturnExpression(e,l,n);!function(e,t,n,i,r=!1){const s=()=>{t.style.display="none";},o=()=>{1===t.style.length&&"none"===t.style.display?t.removeAttribute("style"):t.style.removeProperty("display");};if(!0===r)return void(n?o():s());const a=i=>{n?(("none"===t.style.display||t.__x_transition)&&b(t,()=>{o();},e),i(()=>{})):"none"!==t.style.display?y(t,()=>{i(()=>{s();});},e):i(()=>{});};i.includes("immediate")?a(e=>e()):(e.showDirectiveLastElement&&!e.showDirectiveLastElement.contains(t)&&e.executeAndClearRemainingShowDirectiveStack(),e.showDirectiveStack.push(a),e.showDirectiveLastElement=t);}(this,e,c,a,t);break;case"if":if(i.some(e=>"for"===e.type))return;c=this.evaluateReturnExpression(e,l,n);!function(e,t,n,i,r){s(t,"x-if");const o=t.nextElementSibling&&!0===t.nextElementSibling.__x_inserted_me;if(!n||o&&!t.__x_transition)!n&&o&&y(t.nextElementSibling,()=>{t.nextElementSibling.remove();},e,i);else {const n=document.importNode(t.content,!0);t.parentElement.insertBefore(n,t.nextElementSibling),b(t.nextElementSibling,()=>{},e,i),e.initializeElements(t.nextElementSibling,r),t.nextElementSibling.__x_inserted_me=!0;}}(this,e,c,t,n);break;case"for":k(this,e,l,t,n);break;case"cloak":e.removeAttribute("x-cloak");}});}evaluateReturnExpression(e,t,i=(()=>{})){return l(t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}evaluateCommandExpression(e,t,i=(()=>{})){return function(e,t,n={}){if("function"==typeof e)return Promise.resolve(e.call(t,n.$event));let i=Function;if(i=Object.getPrototypeOf(async function(){}).constructor,Object.keys(t).includes(e)){let i=new Function(["dataContext",...Object.keys(n)],`with(dataContext) { return ${e} }`)(t,...Object.values(n));return "function"==typeof i?Promise.resolve(i.call(t,n.$event)):Promise.resolve()}return Promise.resolve(new i(["dataContext",...Object.keys(n)],`with(dataContext) { ${e} }`)(t,...Object.values(n)))}(t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}getDispatchFunction(e){return (t,n={})=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0}));}}listenForNewElementsToInitialize(){const e=this.$el;new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t].target.closest("[x-data]");if(n&&n.isSameNode(this.$el)){if("attributes"===e[t].type&&"x-data"===e[t].attributeName){const n=l(e[t].target.getAttribute("x-data")||"{}",{$el:this.$el});Object.keys(n).forEach(e=>{this.$data[e]!==n[e]&&(this.$data[e]=n[e]);});}e[t].addedNodes.length>0&&e[t].addedNodes.forEach(e=>{1!==e.nodeType||e.__x_inserted_me||(!e.matches("[x-data]")||e.__x?this.initializeElements(e):e.__x=new fe(e));});}}}).observe(e,{childList:!0,attributes:!0,subtree:!0});}getRefsProxy(){var e=this;return new Proxy({},{get(t,n){return "$isAlpineProxy"===n||(e.walkAndSkipNestedComponents(e.$el,e=>{e.hasAttribute("x-ref")&&e.getAttribute("x-ref")===n&&(i=e);}),i);var i;}})}}const me={version:"2.6.0",pauseMutationObserver:!1,magicProperties:{},onComponentInitializeds:[],onBeforeComponentInitializeds:[],ignoreFocusedForValueBinding:!1,start:async function(){r()||await new Promise(e=>{"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e):e();}),this.discoverComponents(e=>{this.initializeComponent(e);}),document.addEventListener("turbolinks:load",()=>{this.discoverUninitializedComponents(e=>{this.initializeComponent(e);});}),this.listenForNewUninitializedComponentsAtRunTime(e=>{this.initializeComponent(e);});},discoverComponents:function(e){document.querySelectorAll("[x-data]").forEach(t=>{e(t);});},discoverUninitializedComponents:function(e,t=null){const n=(t||document).querySelectorAll("[x-data]");Array.from(n).filter(e=>void 0===e.__x).forEach(t=>{e(t);});},listenForNewUninitializedComponentsAtRunTime:function(e){const t=document.querySelector("body");new MutationObserver(e=>{if(!this.pauseMutationObserver)for(let t=0;t<e.length;t++)e[t].addedNodes.length>0&&e[t].addedNodes.forEach(e=>{1===e.nodeType&&(e.parentElement&&e.parentElement.closest("[x-data]")||this.discoverUninitializedComponents(e=>{this.initializeComponent(e);},e.parentElement));});}).observe(t,{childList:!0,attributes:!0,subtree:!0});},initializeComponent:function(e){if(!e.__x)try{e.__x=new fe(e);}catch(e){setTimeout(()=>{throw e},0);}},clone:function(e,t){t.__x||(t.__x=new fe(t,e));},addMagicProperty:function(e,t){this.magicProperties[e]=t;},onComponentInitialized:function(e){this.onComponentInitializeds.push(e);},onBeforeComponentInitialized:function(e){this.onBeforeComponentInitializeds.push(e);}};return r()||(window.Alpine=me,window.deferLoadingAlpine?window.deferLoadingAlpine(function(){window.Alpine.start();}):window.Alpine.start()),me});
window.collapse = function () {
  return {
    open: false,
    trigger: {
      ["@click"]() {
        const triggerElement = this.$el.querySelector("[x-spread]", "trigger");
        this.open === false ? ((this.open = true), triggerElement.setAttribute("aria-expanded", true)) : ((this.open = false), triggerElement.setAttribute("aria-expanded", false));
      },
    },
    collapse: {
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
    },
  };
};// Focus an element
// elements - array of dropdown elements
const focus =
    (elements, focussedIndex) => {
      // Use of % for infinite iterations
      var index = Math.abs(focussedIndex) % elements.length;
      if (index >= 0) {
        elements[index].focus();
      }
    };

// Refocus trigger element
const refocusTrigger =
    element => {
      var dialogTrigger = element.querySelector('[x-spread="trigger"]');
      if (dialogTrigger) {
        dialogTrigger.focus();
      }
    };

const adjustScrollBar =
    (isOpen) => {
      if (isOpen) {
        var htmlDocument = document.querySelector('html');
        htmlDocument.style.overflow = 'hidden';
        var body = document.querySelector('body');
        body.style.paddingRight = getScrollbarWidth() + 'px';
      } else {
        var htmlDocument = document.querySelector('html');
        htmlDocument.style.overflow = null;
        var body = document.querySelector('body');
        body.style.paddingRight = null;
      }
    };

// Private
// From bootstrap
const getScrollbarWidth =
    () => {
      const scrollDiv = document.createElement('div');
      scrollDiv.className = 'scrollbar-measure';
      document.body.appendChild(scrollDiv);
      const scrollbarWidth =
          scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };// Todo

var lastOpenedElement = null;

// Normalize itertion counter - Arrow Up
// Check if the focussedIndex reached a negative number
// If so, assign it to (elements.length - 1)
// Else, decrement the counter
function normalizeNegativeCounter(elements, focussedIndex) {
  if (focussedIndex <= 0) {
    return elements.length - 1;
  } else {
    return focussedIndex - 1;
  }
}

// Toggle aria atrributes based on the dropdown state
function toggleAriaAtrributes(dropdown, open) {
  var trigger = dropdown.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    if (open) {
      trigger.setAttribute('aria-expanded', true);
      var dropdownList = dropdown.querySelectorAll('[x-spread="dropdown"]');
      if (dropdownList.length) {
        dropdownList = dropdownList[0];
        dropdownList.setAttribute('aria-hidden', false);
      }
    } else {
      trigger.setAttribute('aria-expanded', false);
      var dropdownList = dropdown.querySelectorAll('[x-spread="dropdown"]');
      if (dropdownList.length) {
        dropdownList = dropdownList[0];
        dropdownList.setAttribute('aria-hidden', true);
      }
    }
  }
}

// Set attributes when the component is initialized
function init(dropdown) {
  var trigger = dropdown.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute('aria-haspopup', true);
    trigger.setAttribute('aria-expanded', false);
    var dropdown = dropdown.querySelectorAll('[x-spread="dropdown"]');
    if (dropdown.length) {
      dropdown = dropdown[0];
      trigger.setAttribute('aria-controls', dropdown.id);
      dropdown.setAttribute('role', 'menu');
      dropdown.setAttribute('aria-labelledby', trigger.id);
      dropdown.setAttribute('aria-hidden', true);
      var dropdownItems = dropdown.querySelectorAll('.dropdown-item');
      if (dropdownItems.length) {
        [...dropdownItems].forEach(function(dropdownItem) {
          dropdownItem.setAttribute('role', 'menuitem');
          dropdownItem.setAttribute('tabindex', -1);
        });
      }
    }
  }
}

// Initialize attribute for all dropdown elements
var dropdowns = document.querySelectorAll('[x-data="dropdown()"]');
dropdowns.forEach(function(dropdown) {
  init(dropdown);
});

window.dropdown = function() {
  const DROPDOWN_ITEM_SELECTOR = '.dropdown-item';
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ['@keydown.escape']() {
        this.open = false;
        refocusTrigger(this.$el);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ['@click']() {
        this.open = !this.open;
        focussedIndex = -1;
        if (this.open) {
          lastOpenedElement = this.$el;
        } else {
          refocusTrigger(this.$el);
        }
        toggleAriaAtrributes(this.$el, this.open);
      },
      ['@keydown.arrow-down'](e) {
        e.preventDefault();
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ['@keydown.arrow-up'](e) {
        e.preventDefault();
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
      ['@keydown.home'](e) {
        e.preventDefault();
        focussedIndex = -1;
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ['@keydown.end'](e) {
        e.preventDefault();
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
    },
    dropdown: {
      ['@keydown.escape']() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(this.$el);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ['x-show.transition.in.origin.top.left.opacity.scale.90.out.origin.top.left.opacity.scale.90']() {
        return this.open;
      },
      ['@click.away']() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ['@keydown.arrow-down'](e) {
        e.preventDefault();
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ['@keydown.arrow-up'](e) {
        e.preventDefault();
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex =
            normalizeNegativeCounter(dropdownElements, focussedIndex);
        focus(dropdownElements, focussedIndex);
      },
      ['@keydown.home'](e) {
        e.preventDefault();
        focussedIndex = -1;
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ['@keydown.end'](e) {
        e.preventDefault();
        var dropdownElements =
            this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
    },
  };
};const FOCUSABLE_ELEMENTS = [
  '[href]:not([tabindex^="-"])',
  'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])',
  'input[type="radio"]:checked',
  'select:not([disabled]):not([tabindex^="-"])',
  'textarea:not([disabled]):not([tabindex^="-"])',
  'button:not([disabled]):not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])',
  '[contenteditable="true"]:not([tabindex^="-"])',
];// Data
var lastOpenedElement$1 = null;

// Set attributes when the component is initialized
function init$1(drawer) {
  var trigger = drawer.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute("aria-haspopup", "dialog");
    var drawer = drawer.querySelectorAll('[x-spread="drawer"]');
    if (drawer.length) {
      drawer = drawer[0];
      drawer.setAttribute("role", "drawer");
      drawer.setAttribute("aria-hidden", true);
      drawer.setAttribute("aria-modal", true);
      drawer.setAttribute("tabindex", -1);
    }
  }
}

// Toggle aria atrributes based on the drawer state
function toggleAriaAtrributes$1(drawer, isOpen) {
  drawer = drawer.querySelectorAll('[x-spread="drawer"]');
  if (drawer.length) {
    drawer = drawer[0];
    if (isOpen) {
      drawer.setAttribute("aria-hidden", false);
    } else {
      drawer.setAttribute("aria-hidden", true);
    }
  }
}

// Initialize attribute for all drawer elements
var drawers = document.querySelectorAll('[x-data="drawer()"]');
drawers.forEach(function (drawer) {
  init$1(drawer);
});

window.drawer = function () {
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ["@click"]() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement$1 = this.$el;
          var drawer = this.$el.querySelector('[x-spread="drawer"]');
          var drawerElements = drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
          focussedIndex++;
          focus(drawerElements, focussedIndex);
        } else {
          focussedIndex = -1;
        }
        adjustScrollBar(this.open);
        toggleAriaAtrributes$1(this.$el, this.open);
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$1);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$1(this.$el, this.open);
      },
    },
    drawer: {
      ["x-show.transition.opacity.duration.100ms"]() {
        const drawerContent = this.$el.querySelector('[x-spread="drawer"]');
        if (this.open) {
          setTimeout(() => drawerContent.classList.add("active"), 100);
        } else {
          drawerContent.classList.remove("active");
        }
        return this.open;
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$1);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$1(this.$el, this.open);
      },
      ["@keydown.tab"](e) {
        e.preventDefault();
        var drawer = this.$el.querySelector('[x-spread="drawer"]');
        var drawerElements = drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        focussedIndex++;
        focus(drawerElements, focussedIndex);
      },
      ["@click"](e) {
        if (this.open && e.target.hasAttribute("x-spread")) {
          this.open = false;
          focussedIndex = -1;
          refocusTrigger(lastOpenedElement$1);
          adjustScrollBar(this.open);
          toggleAriaAtrributes$1(this.$el, this.open);
        }
      },
    },
    close() {
      this.open = false;
      focussedIndex = -1;
      refocusTrigger(lastOpenedElement$1);
      adjustScrollBar(this.open);
      toggleAriaAtrributes$1(this.$el, this.open);
    },
  };
};// Todo

// Data
var lastOpenedElement$2 = null;

// Set attributes when the component is initialized
function init$2(dialog) {
  var trigger = dialog.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute('aria-haspopup', 'dialog');
    var dialog = dialog.querySelectorAll('[x-spread="dialog"]');
    if (dialog.length) {
      dialog = dialog[0];
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-hidden', true);
      dialog.setAttribute('aria-modal', true);
      dialog.setAttribute('tabindex', -1);
    }
  }
}

// Toggle aria atrributes based on the dialog state
function toggleAriaAtrributes$2(dialog, isOpen) {
  dialog = dialog.querySelectorAll('[x-spread="dialog"]');
  if (dialog.length) {
    dialog = dialog[0];
    if (isOpen) {
      dialog.setAttribute('aria-hidden', false);
    } else {
      dialog.setAttribute('aria-hidden', true);
    }
  }
}

// Initialize attribute for all dialog elements
var dialogs = document.querySelectorAll('[x-data="dialog()"]');
dialogs.forEach(function(dialog) {
  init$2(dialog);
});

window.dialog = function() {
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ['@click']() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement$2 = this.$el;
          var dialog = this.$el.querySelector('[x-spread="dialog"]');
          var dialogElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
          focussedIndex++;
          focus(dialogElements, focussedIndex);
        } else {
          focussedIndex = -1;
        }
        adjustScrollBar(this.open);
        toggleAriaAtrributes$2(this.$el, this.open);
      },
      ['@keydown.escape']() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$2);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$2(this.$el, this.open);
      },
    },
    dialog: {
      ['x-show.transition.opacity.duration.100ms.origin.center.center.scale.105']() {
        return this.open;
      },
      ['@keydown.escape']() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$2);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$2(this.$el, this.open);
      },
      ['@keydown.tab'](e) {
        e.preventDefault();
        var dialog = this.$el.querySelector('[x-spread="dialog"]');
        var dialogElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
        focussedIndex++;
        focus(dialogElements, focussedIndex);
      },
      ['@click'](e) {
        if (this.open && e.target.hasAttribute('x-spread')) {
          this.open = false;
          focussedIndex = -1;
          refocusTrigger(lastOpenedElement$2);
          adjustScrollBar(this.open);
          toggleAriaAtrributes$2(this.$el, this.open);
        }
      },
    },
    close() {
      this.open = false;
      focussedIndex = -1;
      refocusTrigger(lastOpenedElement$2);
      adjustScrollBar(this.open);
      toggleAriaAtrributes$2(this.$el, this.open);
    },
  };
};const getTooltipPlacement = function (element, tooltip) {
  let placement = element.getAttribute("x-position") || "top";
  let triggerElement = element.getBoundingClientRect();
  let tooltipElement = tooltip.getBoundingClientRect();
  let transform = {};
  switch (placement) {
    case "top": {
      transform = {
        x: tooltipElement.width > triggerElement.width
            ? Math.round(triggerElement.x - Math.abs(triggerElement.width - tooltipElement.width) / 2)
            : Math.round(triggerElement.x + Math.abs(triggerElement.width - tooltipElement.width) / 2),
        y: Math.round(triggerElement.y- tooltipElement.height - 10),
      };
      break;
    }
    case "left": {
      transform = {
        x: Math.round(triggerElement.x - tooltipElement.width - 10),
        y: Math.round(triggerElement.y + triggerElement.height / 2 - tooltipElement.height / 2),
      };
      break;
    }
    case "bottom": {
      transform = {
        x: tooltipElement.width > triggerElement.width
            ? Math.round(triggerElement.x - Math.abs(triggerElement.width - tooltipElement.width) / 2)
            : Math.round(triggerElement.x + Math.abs(triggerElement.width - tooltipElement.width) / 2),
        y: Math.round(triggerElement.y + triggerElement.height + 10),
      };
      break;
    }
    case "right": {
      transform = {
        x: Math.round(triggerElement.x + triggerElement.width + 10),
        y: Math.round(triggerElement.y + triggerElement.height / 2 - tooltipElement.height / 2),
      };
      break;
    }
    default: {
      transform = {
        x: tooltipElement.width > triggerElement.width
            ? Math.round(triggerElement.x - Math.abs(triggerElement.width - tooltipElement.width) / 2)
            : Math.round(triggerElement.x + Math.abs(triggerElement.width - tooltipElement.width) / 2),
        y: Math.round(triggerElement.y - tooltipElement.height - 10),
      };
      break;
    }
  }
  transform.y += window.scrollY;
  return `translate3d(${transform.x}px, ${transform.y}px, 0px)`;
};

const createTooltip = function (element) {
  let tooltipElement = document.createElement("div");
  tooltipElement.setAttribute("class", "tooltip");
  tooltipElement.setAttribute("role", "tooltip");
  tooltipElement.setAttribute("id", "tooltip-kutty");
  tooltipElement.innerText = element.getAttribute("title");
  document.body.append(tooltipElement);
  tooltipElement.style.transform = getTooltipPlacement(element, tooltipElement);
};

const destroyTooltip = function (element) {
  let tooltipElement = document.getElementById("tooltip-kutty");
  return tooltipElement.parentNode.removeChild(tooltipElement);
};

window.tooltip = function () {
  return {
    tooltip: {
      ["@mouseenter"]() {
        createTooltip(this.$el);
      },
      ["@mouseleave"]() {
        destroyTooltip(this.$el);
      },
    },
  };
};}());