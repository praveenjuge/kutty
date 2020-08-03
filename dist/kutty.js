(function(){'use strict';!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Alpine=t();}(window,function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i);}return n}function n(n){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach(function(t){e(n,t,r[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e));});}return n}function i(e){return Array.from(new Set(e))}function r(){return navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")}function s(e,t){"template"!==e.tagName.toLowerCase()?console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`):1!==e.content.childElementCount&&console.warn(`Alpine: <template> tag with [${t}] encountered with multiple element roots. Make sure <template> only has a single child node.`);}function a(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,t)=>t.toUpperCase())}function o(e,t){var n;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){n=null,e.apply(i,r);},t);}}function l(e,t,n={}){return "function"==typeof e?e.call(t):new Function(["$data",...Object.keys(n)],`var __alpine_result; with($data) { __alpine_result = ${e} }; return __alpine_result`)(t,...Object.values(n))}const c=/^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;function u(e){const t=m(e.name);return c.test(t)}function d(e,t,n){let i=Array.from(e.attributes).filter(u).map(f),r=i.filter(e=>"spread"===e.type)[0];if(r){let e=l(r.expression,t.$data);i=i.concat(Object.entries(e).map(([e,t])=>f({name:e,value:t})));}return n?i.filter(e=>e.type===n):function(e){let t=["bind","model","show","catch-all"];return e.sort((e,n)=>{let i=-1===t.indexOf(e.type)?"catch-all":e.type,r=-1===t.indexOf(n.type)?"catch-all":n.type;return t.indexOf(i)-t.indexOf(r)})}(i)}function f({name:e,value:t}){const n=m(e),i=n.match(c),r=n.match(/:([a-zA-Z\-:]+)/),s=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[];return {type:i?i[1]:null,value:r?r[1]:null,modifiers:s.map(e=>e.replace(".","")),expression:t}}function m(e){return e.startsWith("@")?e.replace("@","x-on:"):e.startsWith(":")?e.replace(":","x-bind:"):e}function p(e,t=Boolean){return e.split(" ").filter(t)}const h="in",v="out";function b(e,t,n,i=!1){if(i)return t();if(e.__x_transition&&e.__x_transition.type===h)return;const r=d(e,n,"transition"),s=d(e,n,"show")[0];if(s&&s.modifiers.includes("transition")){let n=s.modifiers;if(n.includes("out")&&!n.includes("in"))return t();const i=n.includes("in")&&n.includes("out");(function(e,t,n){const i={duration:x(t,"duration",150),origin:x(t,"origin","center"),first:{opacity:0,scale:x(t,"scale",95)},second:{opacity:1,scale:100}};g(e,t,n,()=>{},i,h);})(e,n=i?n.filter((e,t)=>t<n.indexOf("out")):n,t);}else r.some(e=>["enter","enter-start","enter-end"].includes(e.value))?function(e,t,n,i){let r=n=>"function"==typeof n?t.evaluateReturnExpression(e,n):n;const s=p(r((n.find(e=>"enter"===e.value)||{expression:""}).expression)),a=p(r((n.find(e=>"enter-start"===e.value)||{expression:""}).expression)),o=p(r((n.find(e=>"enter-end"===e.value)||{expression:""}).expression));_(e,s,a,o,i,()=>{},h);}(e,n,r,t):t();}function y(e,t,n,i=!1){if(i)return t();if(e.__x_transition&&e.__x_transition.type===v)return;const r=d(e,n,"transition"),s=d(e,n,"show")[0];if(s&&s.modifiers.includes("transition")){let n=s.modifiers;if(n.includes("in")&&!n.includes("out"))return t();const i=n.includes("in")&&n.includes("out");(function(e,t,n,i){const r={duration:n?x(t,"duration",150):x(t,"duration",150)/2,origin:x(t,"origin","center"),first:{opacity:1,scale:100},second:{opacity:0,scale:x(t,"scale",95)}};g(e,t,()=>{},i,r,v);})(e,n=i?n.filter((e,t)=>t>n.indexOf("out")):n,i,t);}else r.some(e=>["leave","leave-start","leave-end"].includes(e.value))?function(e,t,n,i){const r=p((n.find(e=>"leave"===e.value)||{expression:""}).expression),s=p((n.find(e=>"leave-start"===e.value)||{expression:""}).expression),a=p((n.find(e=>"leave-end"===e.value)||{expression:""}).expression);_(e,r,s,a,()=>{},i,v);}(e,0,r,t):t();}function x(e,t,n){if(-1===e.indexOf(t))return n;const i=e[e.indexOf(t)+1];if(!i)return n;if("scale"===t&&!E(i))return n;if("duration"===t){let e=i.match(/([0-9]+)ms/);if(e)return e[1]}return "origin"===t&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[i,e[e.indexOf(t)+2]].join(" "):i}function g(e,t,n,i,r,s){e.__x_transition&&(cancelAnimationFrame(e.__x_transition.nextFrame),e.__x_transition.callback&&e.__x_transition.callback());const a=e.style.opacity,o=e.style.transform,l=e.style.transformOrigin,c=!t.includes("opacity")&&!t.includes("scale"),u=c||t.includes("opacity"),d=c||t.includes("scale"),f={start(){u&&(e.style.opacity=r.first.opacity),d&&(e.style.transform=`scale(${r.first.scale/100})`);},during(){d&&(e.style.transformOrigin=r.origin),e.style.transitionProperty=[u?"opacity":"",d?"transform":""].join(" ").trim(),e.style.transitionDuration=`${r.duration/1e3}s`,e.style.transitionTimingFunction="cubic-bezier(0.4, 0.0, 0.2, 1)";},show(){n();},end(){u&&(e.style.opacity=r.second.opacity),d&&(e.style.transform=`scale(${r.second.scale/100})`);},hide(){i();},cleanup(){u&&(e.style.opacity=a),d&&(e.style.transform=o),d&&(e.style.transformOrigin=l),e.style.transitionProperty=null,e.style.transitionDuration=null,e.style.transitionTimingFunction=null;}};w(e,f,s);}function _(e,t,n,i,r,s,a){e.__x_transition&&(cancelAnimationFrame(e.__x_transition.nextFrame),e.__x_transition.callback&&e.__x_transition.callback());const o=e.__x_original_classes||[],l={start(){e.classList.add(...n);},during(){e.classList.add(...t);},show(){r();},end(){e.classList.remove(...n.filter(e=>!o.includes(e))),e.classList.add(...i);},hide(){s();},cleanup(){e.classList.remove(...t.filter(e=>!o.includes(e))),e.classList.remove(...i.filter(e=>!o.includes(e)));}};w(e,l,a);}function w(e,t,n){e.__x_transition={type:n,callback:O(()=>{t.hide(),e.isConnected&&t.cleanup(),delete e.__x_transition;}),nextFrame:null},t.start(),t.during(),e.__x_transition.nextFrame=requestAnimationFrame(()=>{let n=1e3*Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""));0===n&&(n=1e3*Number(getComputedStyle(e).animationDuration.replace("s",""))),t.show(),e.__x_transition.nextFrame=requestAnimationFrame(()=>{t.end(),setTimeout(e.__x_transition.callback,n);});});}function E(e){return !isNaN(e)}function O(e){let t=!1;return function(){t||(t=!0,e.apply(this,arguments));}}function k(e,t,i,r,a){s(t,"x-for");let o=A("function"==typeof i?e.evaluateReturnExpression(t,i):i),l=function(e,t,n,i){let r=d(t,e,"if")[0];if(r&&!e.evaluateReturnExpression(t,r.expression))return [];return e.evaluateReturnExpression(t,n.items,i)}(e,t,o,a),c=t;l.forEach((i,s)=>{let u=function(e,t,i,r,s){let a=s?n({},s):{};a[e.item]=t,e.index&&(a[e.index]=i);e.collection&&(a[e.collection]=r);return a}(o,i,s,l,a()),f=function(e,t,n,i){let r=d(t,e,"bind").filter(e=>"key"===e.value)[0];return r?e.evaluateReturnExpression(t,r.expression,()=>i):n}(e,t,s,u),m=function(e,t){if(!e)return;if(e.__x_for_key===t)return e;let n=e;for(;n;){if(n.__x_for_key===t)return n.parentElement.insertBefore(n,e);n=!(!n.nextElementSibling||void 0===n.nextElementSibling.__x_for_key)&&n.nextElementSibling;}}(c.nextElementSibling,f);m?(delete m.__x_for_key,m.__x_for=u,e.updateElements(m,()=>m.__x_for)):(b(m=function(e,t){let n=document.importNode(e.content,!0);return t.parentElement.insertBefore(n,t.nextElementSibling),t.nextElementSibling}(t,c),()=>{},e,r),m.__x_for=u,e.initializeElements(m,()=>m.__x_for)),(c=m).__x_for_key=f;}),function(e,t){var n=!(!e.nextElementSibling||void 0===e.nextElementSibling.__x_for_key)&&e.nextElementSibling;for(;n;){let e=n,i=n.nextElementSibling;y(n,()=>{e.remove();},t),n=!(!i||void 0===i.__x_for_key)&&i;}}(c,e);}function A(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!n)return;let i={};i.items=n[2].trim();let r=n[1].trim().replace(/^\(|\)$/g,""),s=r.match(t);return s?(i.item=r.replace(t,"").trim(),i.index=s[1].trim(),s[2]&&(i.collection=s[2].trim())):i.item=r,i}function S(e,t,n,r,s,o,l){var c=e.evaluateReturnExpression(t,r,s);if("value"===n)if(void 0===c&&r.match(/\./).length&&(c=""),"radio"===t.type)void 0===t.attributes.value&&"bind"===o?t.value=c:"bind"!==o&&(t.checked=t.value==c);else if("checkbox"===t.type)"string"==typeof c&&"bind"===o?t.value=c:"bind"!==o&&(Array.isArray(c)?t.checked=c.some(e=>e==t.value):t.checked=!!c);else if("SELECT"===t.tagName)!function(e,t){const n=[].concat(t).map(e=>e+"");Array.from(e.options).forEach(e=>{e.selected=n.includes(e.value||e.text);});}(t,c);else {if(t.value===c)return;t.value=c;}else if("class"===n)if(Array.isArray(c)){const e=t.__x_original_classes||[];t.setAttribute("class",i(e.concat(c)).join(" "));}else if("object"==typeof c){Object.keys(c).sort((e,t)=>c[e]-c[t]).forEach(e=>{c[e]?p(e).forEach(e=>t.classList.add(e)):p(e).forEach(e=>t.classList.remove(e));});}else {const e=t.__x_original_classes||[],n=p(c);t.setAttribute("class",i(e.concat(n)).join(" "));}else n=l.includes("camel")?a(n):n,[null,void 0,!1].includes(c)?t.removeAttribute(n):!function(e){return ["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}(n)?$(t,n,c):$(t,n,n);}function $(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n);}function P(e,t,n,i,r,s={}){const l={passive:i.includes("passive")};if(i.includes("camel")&&(n=a(n)),i.includes("away")){let a=o=>{t.contains(o.target)||t.offsetWidth<1&&t.offsetHeight<1||(C(e,r,o,s),i.includes("once")&&document.removeEventListener(n,a,l));};document.addEventListener(n,a,l);}else {let a=i.includes("window")?window:i.includes("document")?document:t,c=o=>{if(a!==window&&a!==document||document.body.contains(t)){if(!(function(e){return ["keydown","keyup"].includes(e)}(n)&&function(e,t){let n=t.filter(e=>!["window","document","prevent","stop"].includes(e));if(n.includes("debounce")){let e=n.indexOf("debounce");n.splice(e,E((n[e+1]||"invalid-wait").split("ms")[0])?2:1);}if(0===n.length)return !1;if(1===n.length&&n[0]===D(e.key))return !1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(e=>n.includes(e));if(n=n.filter(e=>!i.includes(e)),i.length>0){const t=i.filter(t=>("cmd"!==t&&"super"!==t||(t="meta"),e[`${t}Key`]));if(t.length===i.length&&n[0]===D(e.key))return !1}return !0}(o,i)||(i.includes("prevent")&&o.preventDefault(),i.includes("stop")&&o.stopPropagation(),i.includes("self")&&o.target!==t))){!1===C(e,r,o,s)?o.preventDefault():i.includes("once")&&a.removeEventListener(n,c,l);}}else a.removeEventListener(n,c,l);};if(i.includes("debounce")){let e=i[i.indexOf("debounce")+1]||"invalid-wait",t=E(e.split("ms")[0])?Number(e.split("ms")[0]):250;c=o(c,t);}a.addEventListener(n,c,l);}}function C(e,t,i,r){return e.evaluateCommandExpression(i.target,t,()=>n(n({},r()),{},{$event:i}))}function D(e){switch(e){case"/":return "slash";case" ":case"Spacebar":return "space";default:return e&&e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}}function j(e,t,n){return "radio"===e.type&&(e.hasAttribute("name")||e.setAttribute("name",n)),(n,i)=>{if(n instanceof CustomEvent&&n.detail)return n.detail;if("checkbox"===e.type){if(Array.isArray(i)){const e=t.includes("number")?T(n.target.value):n.target.value;return n.target.checked?i.concat([e]):i.filter(t=>t!==e)}return n.target.checked}if("select"===e.tagName.toLowerCase()&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(e=>{return T(e.value||e.text)}):Array.from(n.target.selectedOptions).map(e=>e.value||e.text);{const e=n.target.value;return t.includes("number")?T(e):t.includes("trim")?e.trim():e}}}function T(e){const t=e?parseFloat(e):null;return E(t)?t:e}const{isArray:L}=Array,{getPrototypeOf:N,create:R,defineProperty:z,defineProperties:F,isExtensible:M,getOwnPropertyDescriptor:I,getOwnPropertyNames:U,getOwnPropertySymbols:q,preventExtensions:B,hasOwnProperty:W}=Object,{push:K,concat:Z,map:G}=Array.prototype;function H(e){return void 0===e}function J(e){return "function"==typeof e}const Q=new WeakMap;function V(e,t){Q.set(e,t);}const X=e=>Q.get(e)||e;function Y(e,t){return e.valueIsObservable(t)?e.getProxy(t):t}function ee(e,t,n){Z.call(U(n),q(n)).forEach(i=>{let r=I(n,i);r.configurable||(r=ue(e,r,Y)),z(t,i,r);}),B(t);}class te{constructor(e,t){this.originalTarget=t,this.membrane=e;}get(e,t){const{originalTarget:n,membrane:i}=this,r=n[t],{valueObserved:s}=i;return s(n,t),i.getProxy(r)}set(e,t,n){const{originalTarget:i,membrane:{valueMutated:r}}=this;return i[t]!==n?(i[t]=n,r(i,t)):"length"===t&&L(i)&&r(i,t),!0}deleteProperty(e,t){const{originalTarget:n,membrane:{valueMutated:i}}=this;return delete n[t],i(n,t),!0}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return Z.call(U(t),q(t))}isExtensible(e){const t=M(e);if(!t)return t;const{originalTarget:n,membrane:i}=this,r=M(n);return r||ee(i,e,n),r}setPrototypeOf(e,t){}getPrototypeOf(e){const{originalTarget:t}=this;return N(t)}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=this.membrane;r(n,t);let s=I(n,t);if(H(s))return s;const a=I(e,t);return H(a)?((s=ue(i,s,Y)).configurable||z(e,t,s),s):a}preventExtensions(e){const{originalTarget:t,membrane:n}=this;return ee(n,e,t),B(t),!0}defineProperty(e,t,n){const{originalTarget:i,membrane:r}=this,{valueMutated:s}=r,{configurable:a}=n;if(W.call(n,"writable")&&!W.call(n,"value")){const e=I(i,t);n.value=e.value;}return z(i,t,function(e){return W.call(e,"value")&&(e.value=X(e.value)),e}(n)),!1===a&&z(e,t,ue(r,n,Y)),s(i,t),!0}}function ne(e,t){return e.valueIsObservable(t)?e.getReadOnlyProxy(t):t}class ie{constructor(e,t){this.originalTarget=t,this.membrane=e;}get(e,t){const{membrane:n,originalTarget:i}=this,r=i[t],{valueObserved:s}=n;return s(i,t),n.getReadOnlyProxy(r)}set(e,t,n){return !1}deleteProperty(e,t){return !1}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return Z.call(U(t),q(t))}setPrototypeOf(e,t){}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=i;r(n,t);let s=I(n,t);if(H(s))return s;const a=I(e,t);return H(a)?(s=ue(i,s,ne),W.call(s,"set")&&(s.set=void 0),s.configurable||z(e,t,s),s):a}preventExtensions(e){return !1}defineProperty(e,t,n){return !1}}function re(e){let t=void 0;return L(e)?t=[]:"object"==typeof e&&(t={}),t}const se=Object.prototype;function ae(e){if(null===e)return !1;if("object"!=typeof e)return !1;if(L(e))return !0;const t=N(e);return t===se||null===t||null===N(t)}const oe=(e,t)=>{},le=(e,t)=>{},ce=e=>e;function ue(e,t,n){const{set:i,get:r}=t;return W.call(t,"value")?t.value=n(e,t.value):(H(r)||(t.get=function(){return n(e,r.call(X(this)))}),H(i)||(t.set=function(t){i.call(X(this),e.unwrapProxy(t));})),t}class de{constructor(e){if(this.valueDistortion=ce,this.valueMutated=le,this.valueObserved=oe,this.valueIsObservable=ae,this.objectGraph=new WeakMap,!H(e)){const{valueDistortion:t,valueMutated:n,valueObserved:i,valueIsObservable:r}=e;this.valueDistortion=J(t)?t:ce,this.valueMutated=J(n)?n:le,this.valueObserved=J(i)?i:oe,this.valueIsObservable=J(r)?r:ae;}}getProxy(e){const t=X(e),n=this.valueDistortion(t);if(this.valueIsObservable(n)){const i=this.getReactiveState(t,n);return i.readOnly===e?e:i.reactive}return n}getReadOnlyProxy(e){e=X(e);const t=this.valueDistortion(e);return this.valueIsObservable(t)?this.getReactiveState(e,t).readOnly:t}unwrapProxy(e){return X(e)}getReactiveState(e,t){const{objectGraph:n}=this;let i=n.get(t);if(i)return i;const r=this;return i={get reactive(){const n=new te(r,t),i=new Proxy(re(t),n);return V(i,e),z(this,"reactive",{value:i}),i},get readOnly(){const n=new ie(r,t),i=new Proxy(re(t),n);return V(i,e),z(this,"readOnly",{value:i}),i}},n.set(t,i),i}}class fe{constructor(e,t=null){this.$el=e;const n=this.$el.getAttribute("x-data"),i=""===n?"{}":n,r=this.$el.getAttribute("x-init");this.unobservedData=t?t.getUnobservedData():l(i,{$el:this.$el});let{membrane:s,data:a}=this.wrapDataInObservable(this.unobservedData);this.$data=a,this.membrane=s,this.unobservedData.$el=this.$el,this.unobservedData.$refs=this.getRefsProxy(),this.nextTickStack=[],this.unobservedData.$nextTick=(e=>{this.nextTickStack.push(e);}),this.watchers={},this.unobservedData.$watch=((e,t)=>{this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t);});let o=t?t.$el:this.$el;var c;Object.entries(me.magicProperties).forEach(([e,t])=>{Object.defineProperty(this.unobservedData,`$${e}`,{get:function(){return t(o)}});}),this.showDirectiveStack=[],this.showDirectiveLastElement,r&&!t&&(this.pauseReactivity=!0,c=this.evaluateReturnExpression(this.$el,r),this.pauseReactivity=!1),this.initializeElements(this.$el),this.listenForNewElementsToInitialize(),"function"==typeof c&&c.call(this.$data),t||setTimeout(()=>{me.onComponentInitializeds.forEach(e=>e(this));},0);}getUnobservedData(){return function(e,t){let n=e.unwrapProxy(t),i={};return Object.keys(n).forEach(e=>{["$el","$refs","$nextTick","$watch"].includes(e)||(i[e]=n[e]);}),i}(this.membrane,this.$data)}wrapDataInObservable(e){var t=this;let n=o(function(){t.updateElements(t.$el);},0);return function(e,t){let n=new de({valueMutated(e,n){t(e,n);}});return {data:n.getProxy(e),membrane:n}}(e,(e,i)=>{t.watchers[i]?t.watchers[i].forEach(t=>t(e[i])):Object.keys(t.watchers).filter(e=>e.includes(".")).forEach(n=>{let r=n.split(".");i===r[r.length-1]&&r.reduce((r,s)=>(Object.is(e,r)&&t.watchers[n].forEach(t=>t(e[i])),r[s]),t.getUnobservedData());}),t.pauseReactivity||n();})}walkAndSkipNestedComponents(e,t,n=(()=>{})){!function e(t,n){if(!1===n(t))return;let i=t.firstElementChild;for(;i;)e(i,n),i=i.nextElementSibling;}(e,e=>e.hasAttribute("x-data")&&!e.isSameNode(this.$el)?(e.__x||n(e),!1):t(e));}initializeElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,e=>void 0===e.__x_for_key&&(void 0===e.__x_inserted_me&&void this.initializeElement(e,t)),e=>{e.__x=new fe(e);}),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e);}initializeElement(e,t){e.hasAttribute("class")&&d(e,this).length>0&&(e.__x_original_classes=p(e.getAttribute("class"))),this.registerListeners(e,t),this.resolveBoundAttributes(e,!0,t);}updateElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,e=>{if(void 0!==e.__x_for_key&&!e.isSameNode(this.$el))return !1;this.updateElement(e,t);},e=>{e.__x=new fe(e);}),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e);}executeAndClearNextTickStack(e){e===this.$el&&this.nextTickStack.length>0&&requestAnimationFrame(()=>{for(;this.nextTickStack.length>0;)this.nextTickStack.shift()();});}executeAndClearRemainingShowDirectiveStack(){this.showDirectiveStack.reverse().map(e=>new Promise(t=>{e(e=>{t(e);});})).reduce((e,t)=>e.then(()=>t.then(e=>e())),Promise.resolve(()=>{})),this.showDirectiveStack=[],this.showDirectiveLastElement=void 0;}updateElement(e,t){this.resolveBoundAttributes(e,!1,t);}registerListeners(e,t){d(e,this).forEach(({type:i,value:r,modifiers:s,expression:a})=>{switch(i){case"on":P(this,e,r,s,a,t);break;case"model":!function(e,t,i,r,s){var a="select"===t.tagName.toLowerCase()||["checkbox","radio"].includes(t.type)||i.includes("lazy")?"change":"input";P(e,t,a,i,`${r} = rightSideOfExpression($event, ${r})`,()=>n(n({},s()),{},{rightSideOfExpression:j(t,i,r)}));}(this,e,s,a,t);}});}resolveBoundAttributes(e,t=!1,n){let i=d(e,this);if(void 0!==e.type&&"radio"===e.type){const e=i.findIndex(e=>"model"===e.type);e>-1&&i.push(i.splice(e,1)[0]);}i.forEach(({type:r,value:a,modifiers:o,expression:l})=>{switch(r){case"model":S(this,e,"value",l,n,r,o);break;case"bind":if("template"===e.tagName.toLowerCase()&&"key"===a)return;S(this,e,a,l,n,r,o);break;case"text":var c=this.evaluateReturnExpression(e,l,n);!function(e,t,n){void 0===t&&n.match(/\./)&&(t=""),e.innerText=t;}(e,c,l);break;case"html":!function(e,t,n,i){t.innerHTML=e.evaluateReturnExpression(t,n,i);}(this,e,l,n);break;case"show":c=this.evaluateReturnExpression(e,l,n);!function(e,t,n,i,r=!1){const s=()=>{t.style.display="none";},a=()=>{1===t.style.length&&"none"===t.style.display?t.removeAttribute("style"):t.style.removeProperty("display");};if(!0===r)return void(n?a():s());const o=i=>{n?(("none"===t.style.display||t.__x_transition)&&b(t,()=>{a();},e),i(()=>{})):"none"!==t.style.display?y(t,()=>{i(()=>{s();});},e):i(()=>{});};i.includes("immediate")?o(e=>e()):(e.showDirectiveLastElement&&!e.showDirectiveLastElement.contains(t)&&e.executeAndClearRemainingShowDirectiveStack(),e.showDirectiveStack.push(o),e.showDirectiveLastElement=t);}(this,e,c,o,t);break;case"if":if(i.some(e=>"for"===e.type))return;c=this.evaluateReturnExpression(e,l,n);!function(e,t,n,i,r){s(t,"x-if");const a=t.nextElementSibling&&!0===t.nextElementSibling.__x_inserted_me;if(!n||a&&!t.__x_transition)!n&&a&&y(t.nextElementSibling,()=>{t.nextElementSibling.remove();},e,i);else {const n=document.importNode(t.content,!0);t.parentElement.insertBefore(n,t.nextElementSibling),b(t.nextElementSibling,()=>{},e,i),e.initializeElements(t.nextElementSibling,r),t.nextElementSibling.__x_inserted_me=!0;}}(this,e,c,t,n);break;case"for":k(this,e,l,t,n);break;case"cloak":e.removeAttribute("x-cloak");}});}evaluateReturnExpression(e,t,i=(()=>{})){return l(t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}evaluateCommandExpression(e,t,i=(()=>{})){return function(e,t,n={}){if("function"==typeof e)return e.call(t,n.$event);if(Object.keys(t).includes(e)){let i=new Function(["dataContext",...Object.keys(n)],`with(dataContext) { return ${e} }`)(t,...Object.values(n));if("function"==typeof i)return i.call(t,n.$event)}return new Function(["dataContext",...Object.keys(n)],`with(dataContext) { ${e} }`)(t,...Object.values(n))}(t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}getDispatchFunction(e){return (t,n={})=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0}));}}listenForNewElementsToInitialize(){const e=this.$el;new MutationObserver(e=>{for(let t=0;t<e.length;t++){const n=e[t].target.closest("[x-data]");if(n&&n.isSameNode(this.$el)){if("attributes"===e[t].type&&"x-data"===e[t].attributeName){const n=l(e[t].target.getAttribute("x-data")||"{}",{$el:this.$el});Object.keys(n).forEach(e=>{this.$data[e]!==n[e]&&(this.$data[e]=n[e]);});}e[t].addedNodes.length>0&&e[t].addedNodes.forEach(e=>{1!==e.nodeType||e.__x_inserted_me||(!e.matches("[x-data]")||e.__x?this.initializeElements(e):e.__x=new fe(e));});}}}).observe(e,{childList:!0,attributes:!0,subtree:!0});}getRefsProxy(){var e=this;return new Proxy({},{get(t,n){return "$isAlpineProxy"===n||(e.walkAndSkipNestedComponents(e.$el,e=>{e.hasAttribute("x-ref")&&e.getAttribute("x-ref")===n&&(i=e);}),i);var i;}})}}const me={version:"2.5.0",pauseMutationObserver:!1,magicProperties:{},onComponentInitializeds:[],start:async function(){r()||await new Promise(e=>{"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e):e();}),this.discoverComponents(e=>{this.initializeComponent(e);}),document.addEventListener("turbolinks:load",()=>{this.discoverUninitializedComponents(e=>{this.initializeComponent(e);});}),this.listenForNewUninitializedComponentsAtRunTime(e=>{this.initializeComponent(e);});},discoverComponents:function(e){document.querySelectorAll("[x-data]").forEach(t=>{e(t);});},discoverUninitializedComponents:function(e,t=null){const n=(t||document).querySelectorAll("[x-data]");Array.from(n).filter(e=>void 0===e.__x).forEach(t=>{e(t);});},listenForNewUninitializedComponentsAtRunTime:function(e){const t=document.querySelector("body");new MutationObserver(e=>{if(!this.pauseMutationObserver)for(let t=0;t<e.length;t++)e[t].addedNodes.length>0&&e[t].addedNodes.forEach(e=>{1===e.nodeType&&(e.parentElement&&e.parentElement.closest("[x-data]")||this.discoverUninitializedComponents(e=>{this.initializeComponent(e);},e.parentElement));});}).observe(t,{childList:!0,attributes:!0,subtree:!0});},initializeComponent:function(e){if(!e.__x)try{e.__x=new fe(e);}catch(e){setTimeout(()=>{throw e},0);}},clone:function(e,t){t.__x||(t.__x=new fe(t,e));},addMagicProperty:function(e,t){this.magicProperties[e]=t;},onComponentInitialized:function(e){this.onComponentInitializeds.push(e);}};return r()||(window.Alpine=me,window.deferLoadingAlpine?window.deferLoadingAlpine(function(){window.Alpine.start();}):window.Alpine.start()),me});
window.collapse = function () {
  return {
    open: false,
    trigger: {
      ["@click"]() {
        const triggerElement = this.$el.querySelector("[x-spread]", "trigger");
        this.open === false ? ((this.open = true), triggerElement.setAttribute("aria-expanded", true)) : ((this.open = false), triggerElement.setAttribute("aria-expanded", false));
      },
    },
    arrow: {
      [":class"]() {
        return { "transition ease-out duration-200 transform rotate-180": this.open === true };
      },
    },
    collapse: {
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
    },
  };
};// Todo
// - Focus on the first focusable element when dialog is opened

const Dialog = (() => {
  const dialogSelector = ".dialog";
  const openingSelector = ".dialog-open";
  const closingTrigger = ".dialog-close";
  const labelledby = "dialog-title";
  const disabledClass = "overflow-hidden";
  const animationClass = "dialog-animation";

  // Use Symbols to create private methods
  const onClick = Symbol("onClick");
  const onKeydown = Symbol("onKeydown");
  const addEventDelegation = Symbol("addEventDelegation");
  const addEventListeners = Symbol("addEventListeners");
  const removeEventListeners = Symbol("removeEventListeners");
  const addAttributes = Symbol("addAttributes");
  const removeAttributes = Symbol("removeAttributes");
  const setAttributes = Symbol("setAttributes");
  const setFocusableElements = Symbol("setFocusableElements");
  const setFocus = Symbol("setFocus");
  const restoreFocus = Symbol("restoreFocus");
  const switchFocus = Symbol("switchFocus");
  const maintainFocus = Symbol("maintainFocus");
  const addObserver = Symbol("addObserver");
  const removeObserver = Symbol("removeObserver");

  const focusableElements = [
    '[href]:not([tabindex^="-"])',
    'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])',
    'input[type="radio"]:checked',
    'select:not([disabled]):not([tabindex^="-"])',
    'textarea:not([disabled]):not([tabindex^="-"])',
    'button:not([disabled]):not([tabindex^="-"])',
    '[tabindex]:not([tabindex^="-"])',
    '[contenteditable="true"]:not([tabindex^="-"])',
  ];

  const keyCodes = {
    escape: "Escape",
    tab: "Tab",
    f6: "F6",
  };

  function getVisibleElements(elements) {
    const visibleElements = [];

    elements.forEach((element) => {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.width > 0 || bounding.height > 0;

      if (isVisible) visibleElements.push(element);
    });

    return visibleElements;
  }

  // Only get no nested elements
  function getNoNestedElements(context, selector, elements) {
    const nestedComponents = context.querySelectorAll(selector);
    const noNestedElements = [];
    let isNested = false;

    if (nestedComponents.length === 0) return elements;

    elements.forEach((element) => {
      nestedComponents.forEach((nestedComponent) => {
        if (nestedComponent.contains(element)) isNested = true;
      });

      if (!isNested) noNestedElements.push(element);

      isNested = false;
    });

    return noNestedElements;
  }

  // Check if the parent elements match the target
  function closest(element, target) {
    let currentElement = element;

    while (currentElement !== target && currentElement) {
      currentElement = currentElement.parentNode;
    }

    return !!currentElement;
  }

  // From bootstrap
  function getScrollbarWidth() {
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  class Dialog {
    constructor(options, { onOpen = () => {}, onClose = () => {}, describedby, isModal = true, isOpen = false, isCreated = true, disableScroll = true } = {}) {
      // Check if the dialog exists, if not, set `isInitialized` to false
      if (!document.querySelector(dialogSelector)) {
        this.isInitialized = false;
        return;
      }

      // Save the initial configuration
      this.config = {
        onOpen,
        onClose,
        describedby,
        isModal,
        isCreated,
        isOpen,
        disableScroll,
      };

      this.dialog = options.dialogContainer;
      this.openingTrigger = options.trigger;
      this.backdropTrigger = options.dialogContainer;
      this.dialogArea = `${dialogSelector}, ${openingSelector}`;

      this.document = document.querySelector("html");
      this.documentIsAlreadyDisabled = false;
      this.focusableElements = [];
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;

      this.scrollbarWidth = getScrollbarWidth();

      this.isCreated = false;
      this.isOpen = false;

      this.close = this.close.bind(this);
      this.toggle = this.toggle.bind(this);
      this[onClick] = this[onClick].bind(this);
      this[onKeydown] = this[onKeydown].bind(this);
      this[addEventDelegation] = this[addEventDelegation].bind(this);
      this[switchFocus] = this[switchFocus].bind(this);

      // Add mutation observer to update focusable elements
      this.observer = new MutationObserver((mutations) => mutations.forEach(() => this[setFocusableElements]()));

      // initialize the dialog
      this.isInitialized = true;
    }

    [onClick](event) {
      if (!event.target.closest(this.dialogArea)) this.close(event);
      if (event.target === this.backdropTrigger) this.close(event);
    }

    [onKeydown](event) {
      switch (event.key) {
        case keyCodes.escape:
          event.stopPropagation();
          this.close(event);
          break;
        case keyCodes.f6:
          if (!this.config.isModal) this[restoreFocus]();
          break;
        case keyCodes.tab:
          this[maintainFocus](event);
          break;
      }
    }

    [addEventDelegation](event) {
      if (closest(event.target, this.openingTrigger)) this.toggle(event);

      document.querySelectorAll(closingTrigger).forEach((closeButton) => {
        if (closest(event.target, closeButton)) this.close();
      });
    }

    [addEventListeners]() {
      document.addEventListener("click", this[onClick], { capture: true });
      this.dialog.addEventListener("keydown", this[onKeydown]);
    }

    [removeEventListeners]() {
      document.removeEventListener("click", this[onClick], { capture: true });
      this.dialog.removeEventListener("keydown", this[onKeydown]);

      if (this.openingTrigger) this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
    }

    [addAttributes]() {
      this.dialog.setAttribute("role", "dialog");
      this.dialog.setAttribute("tabindex", -1);
      this.dialog.setAttribute("aria-modal", true);
      this.dialog.setAttribute("aria-hidden", true);

      this.dialog.setAttribute("aria-labelledby", labelledby);
      if (this.config.describedby) this.dialog.setAttribute("aria-describedby", this.config.describedby);

      this.openingTrigger.setAttribute("aria-haspopup", "dialog");
    }

    [removeAttributes]() {
      this.dialog.removeAttribute("role");
      this.dialog.removeAttribute("tabindex");
      this.dialog.removeAttribute("aria-modal");
      this.dialog.removeAttribute("aria-hidden");
      this.dialog.removeAttribute("aria-labelledby");
      this.dialog.removeAttribute("aria-describedby");

      if (this.config.disableScroll && this.isOpen && !this.documentIsAlreadyDisabled) {
        this.document.classList.remove(disabledClass);
        document.body.removeAttribute("style");
      }

      this.openingTrigger.removeAttribute("aria-haspopup");
    }

    [setAttributes]() {
      this.dialog.setAttribute("aria-hidden", !this.isOpen);

      if (this.config.disableScroll && !this.documentIsAlreadyDisabled) {
        if (this.isOpen) {
          this.document.classList.add(disabledClass);
          document.body.style.paddingRight = this.scrollbarWidth + "px";
        } else {
          this.document.classList.remove(disabledClass);
          document.body.removeAttribute("style");
        }
      }
    }

    [setFocusableElements]() {
      const visibleFocusableElements = getVisibleElements(this.dialog.querySelectorAll(focusableElements));
      const filteredFocusableElements = getNoNestedElements(this.dialog, '[role="dialog"]', visibleFocusableElements);

      this.focusableElements = filteredFocusableElements.length > 0 ? filteredFocusableElements : [this.dialog];
      [this.firstFocusableElement] = this.focusableElements;
      this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    }

    [setFocus]() {
      this.firstFocusableElement.focus();
    }

    [restoreFocus]() {
      this.openingTrigger.focus();

      // Switch focus between the current opening trigger and the non-modal dialog
      if (this.isOpen) this.openingTrigger.addEventListener("keydown", this[switchFocus]);
    }

    [switchFocus](event) {
      if (event.key === keyCodes.f6) {
        this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
        this[setFocus]();
      }
    }

    [maintainFocus](event) {
      if (event.shiftKey && event.target === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement.focus();
      }

      if (!event.shiftKey && event.target === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement.focus();
      }
    }

    [addObserver]() {
      this.observer.observe(this.dialog, { childList: true, attributes: true, subtree: true });
    }

    [removeObserver]() {
      this.observer.disconnect();
    }

    open() {
      if (!this.isInitialized || !this.isCreated || this.isOpen) return;

      this.isOpen = true;
      this.documentIsAlreadyDisabled = this.document.classList.contains(disabledClass);

      this[setAttributes]();
      this[addEventListeners]();
      this[setFocus]();

      setTimeout(() => this.dialog.classList.add(animationClass), 1);

      this.config.onOpen(this.dialog, this.openingTrigger);
    }

    close(event) {
      if (!this.isInitialized || !this.isCreated || !this.isOpen) return;

      this.isOpen = false;

      if (event) event.preventDefault();

      this.dialog.classList.remove(animationClass);

      setTimeout(() => this[setAttributes](), 100);
      this[removeEventListeners]();

      // Restore focus except for tooltip click events
      if (this.openingTrigger) this[restoreFocus]();

      this.config.onClose(this.dialog, this.openingTrigger);
    }

    toggle(event) {
      if (!this.isInitialized || !this.isCreated) return;

      if (event) event.preventDefault();

      this.isOpen ? this.close() : this.open();
    }

    create() {
      if (!this.isInitialized || this.isCreated) return;

      this.isCreated = true;

      this[addAttributes]();
      this[setFocusableElements]();
      this[addObserver]();

      document.addEventListener("click", this[addEventDelegation], { capture: true });
    }

    destroy() {
      if (!this.isInitialized || !this.isCreated) return;

      this.close();

      this.isCreated = false;

      this[removeAttributes]();
      this[removeEventListeners]();
      this[removeObserver]();

      document.removeEventListener("click", this[addEventDelegation], { capture: true });
    }
  }

  const init = () => {
    // Select all dialogs in the page
    const triggers = document.querySelectorAll(openingSelector);
    const options = {};

    triggers.forEach((trigger) => {
      // Select dialog and trigger
      options.trigger = trigger;
      options.dialogContainer = document.querySelector(trigger.dataset.dialog);

      const singleDialog = new Dialog(options);
      singleDialog.create();
    });
  };

  return { init };
})();// Todo
// - Focus on the first focusable element when drawer is opened

const Drawer = (() => {
  const drawerSelector = ".drawer";
  const openingSelector = ".drawer-open";
  const closingTrigger = ".drawer-close";
  const labelledby = "drawer-title";
  const disabledClass = "overflow-hidden";
  const animationClass = "drawer-animation";

  // Use Symbols to create private methods
  const onClick = Symbol("onClick");
  const onKeydown = Symbol("onKeydown");
  const addEventDelegation = Symbol("addEventDelegation");
  const addEventListeners = Symbol("addEventListeners");
  const removeEventListeners = Symbol("removeEventListeners");
  const addAttributes = Symbol("addAttributes");
  const removeAttributes = Symbol("removeAttributes");
  const setAttributes = Symbol("setAttributes");
  const setFocusableElements = Symbol("setFocusableElements");
  const setFocus = Symbol("setFocus");
  const restoreFocus = Symbol("restoreFocus");
  const switchFocus = Symbol("switchFocus");
  const maintainFocus = Symbol("maintainFocus");
  const addObserver = Symbol("addObserver");
  const removeObserver = Symbol("removeObserver");

  const focusableElements = [
    '[href]:not([tabindex^="-"])',
    'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])',
    'input[type="radio"]:checked',
    'select:not([disabled]):not([tabindex^="-"])',
    'textarea:not([disabled]):not([tabindex^="-"])',
    'button:not([disabled]):not([tabindex^="-"])',
    '[tabindex]:not([tabindex^="-"])',
    '[contenteditable="true"]:not([tabindex^="-"])',
  ];

  const keyCodes = {
    escape: "Escape",
    tab: "Tab",
    f6: "F6",
  };

  function getVisibleElements(elements) {
    const visibleElements = [];

    elements.forEach((element) => {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.width > 0 || bounding.height > 0;

      if (isVisible) visibleElements.push(element);
    });

    return visibleElements;
  }

  // Only get no nested elements
  function getNoNestedElements(context, selector, elements) {
    const nestedComponents = context.querySelectorAll(selector);
    const noNestedElements = [];
    let isNested = false;

    if (nestedComponents.length === 0) return elements;

    elements.forEach((element) => {
      nestedComponents.forEach((nestedComponent) => {
        if (nestedComponent.contains(element)) isNested = true;
      });

      if (!isNested) noNestedElements.push(element);

      isNested = false;
    });

    return noNestedElements;
  }

  // Check if the parent elements match the target
  function closest(element, target) {
    let currentElement = element;

    while (currentElement !== target && currentElement) {
      currentElement = currentElement.parentNode;
    }

    return !!currentElement;
  }

  // From bootstrap
  function getScrollbarWidth() {
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  class Drawer {
    constructor(options, { onOpen = () => {}, onClose = () => {}, describedby, isModal = true, isOpen = false, isCreated = true, disableScroll = true } = {}) {
      // Check if the drawer exists, if not, set `isInitialized` to false
      if (!document.querySelector(drawerSelector)) {
        this.isInitialized = false;
        return;
      }

      // Save the initial configuration
      this.config = {
        onOpen,
        onClose,
        describedby,
        isModal,
        isCreated,
        isOpen,
        disableScroll,
      };

      this.drawer = options.drawerContainer;
      this.openingTrigger = options.trigger;
      this.backdropTrigger = options.drawerContainer;
      this.drawerArea = `${drawerSelector}, ${openingSelector}`;

      this.document = document.querySelector("html");
      this.documentIsAlreadyDisabled = false;
      this.focusableElements = [];
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;

      this.scrollbarWidth = getScrollbarWidth();

      this.isCreated = false;
      this.isOpen = false;

      this.close = this.close.bind(this);
      this.toggle = this.toggle.bind(this);
      this[onClick] = this[onClick].bind(this);
      this[onKeydown] = this[onKeydown].bind(this);
      this[addEventDelegation] = this[addEventDelegation].bind(this);
      this[switchFocus] = this[switchFocus].bind(this);

      // Add mutation observer to update focusable elements
      this.observer = new MutationObserver((mutations) => mutations.forEach(() => this[setFocusableElements]()));

      // initialize the drawer
      this.isInitialized = true;
    }

    [onClick](event) {
      if (!event.target.closest(this.drawerArea)) this.close(event);
      if (event.target === this.backdropTrigger) this.close(event);
    }

    [onKeydown](event) {
      switch (event.key) {
        case keyCodes.escape:
          event.stopPropagation();
          this.close(event);
          break;
        case keyCodes.f6:
          if (!this.config.isModal) this[restoreFocus]();
          break;
        case keyCodes.tab:
          this[maintainFocus](event);
          break;
      }
    }

    [addEventDelegation](event) {
      if (closest(event.target, this.openingTrigger)) this.toggle(event);

      document.querySelectorAll(closingTrigger).forEach((closeButton) => {
        if (closest(event.target, closeButton)) this.close();
      });
    }

    [addEventListeners]() {
      document.addEventListener("click", this[onClick], { capture: true });
      this.drawer.addEventListener("keydown", this[onKeydown]);
    }

    [removeEventListeners]() {
      document.removeEventListener("click", this[onClick], { capture: true });
      this.drawer.removeEventListener("keydown", this[onKeydown]);

      if (this.openingTrigger) this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
    }

    [addAttributes]() {
      this.drawer.setAttribute("role", "dialog");
      this.drawer.setAttribute("tabindex", -1);
      this.drawer.setAttribute("aria-modal", true);
      this.drawer.setAttribute("aria-hidden", true);

      this.drawer.setAttribute("aria-labelledby", labelledby);
      if (this.config.describedby) this.drawer.setAttribute("aria-describedby", this.config.describedby);

      this.openingTrigger.setAttribute("aria-haspopup", "drawer");
    }

    [removeAttributes]() {
      this.drawer.removeAttribute("role");
      this.drawer.removeAttribute("tabindex");
      this.drawer.removeAttribute("aria-modal");
      this.drawer.removeAttribute("aria-hidden");
      this.drawer.removeAttribute("aria-labelledby");
      this.drawer.removeAttribute("aria-describedby");

      if (this.config.disableScroll && this.isOpen && !this.documentIsAlreadyDisabled) {
        this.document.classList.remove(disabledClass);
        document.body.removeAttribute("style");
      }

      this.openingTrigger.removeAttribute("aria-haspopup");
    }

    [setAttributes]() {
      this.drawer.setAttribute("aria-hidden", !this.isOpen);

      if (this.config.disableScroll && !this.documentIsAlreadyDisabled) {
        if (this.isOpen) {
          this.document.classList.add(disabledClass);
          document.body.style.paddingRight = this.scrollbarWidth + "px";
        } else {
          this.document.classList.remove(disabledClass);
          document.body.removeAttribute("style");
        }
      }
    }

    [setFocusableElements]() {
      const visibleFocusableElements = getVisibleElements(this.drawer.querySelectorAll(focusableElements));
      const filteredFocusableElements = getNoNestedElements(this.drawer, '[role="drawer"]', visibleFocusableElements);

      this.focusableElements = filteredFocusableElements.length > 0 ? filteredFocusableElements : [this.drawer];
      [this.firstFocusableElement] = this.focusableElements;
      this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    }

    [setFocus]() {
      this.firstFocusableElement.focus();
    }

    [restoreFocus]() {
      this.openingTrigger.focus();

      // Switch focus between the current opening trigger and the non-modal drawer
      if (this.isOpen) this.openingTrigger.addEventListener("keydown", this[switchFocus]);
    }

    [switchFocus](event) {
      if (event.key === keyCodes.f6) {
        this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
        this[setFocus]();
      }
    }

    [maintainFocus](event) {
      if (event.shiftKey && event.target === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement.focus();
      }

      if (!event.shiftKey && event.target === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement.focus();
      }
    }

    [addObserver]() {
      this.observer.observe(this.drawer, { childList: true, attributes: true, subtree: true });
    }

    [removeObserver]() {
      this.observer.disconnect();
    }

    open() {
      if (!this.isInitialized || !this.isCreated || this.isOpen) return;

      this.isOpen = true;
      this.documentIsAlreadyDisabled = this.document.classList.contains(disabledClass);

      this[setAttributes]();
      this[addEventListeners]();
      this[setFocus]();

      setTimeout(() => this.drawer.classList.add(animationClass), 1);

      this.config.onOpen(this.drawer, this.openingTrigger);
    }

    close(event) {
      if (!this.isInitialized || !this.isCreated || !this.isOpen) return;

      this.isOpen = false;

      if (event) event.preventDefault();

      this.drawer.classList.remove(animationClass);

      setTimeout(() => this[setAttributes](), 100);
      this[removeEventListeners]();

      // Restore focus except for tooltip click events
      if (this.openingTrigger) this[restoreFocus]();

      this.config.onClose(this.drawer, this.openingTrigger);
    }

    toggle(event) {
      if (!this.isInitialized || !this.isCreated) return;

      if (event) event.preventDefault();

      this.isOpen ? this.close() : this.open();
    }

    create() {
      if (!this.isInitialized || this.isCreated) return;

      this.isCreated = true;

      this[addAttributes]();
      this[setFocusableElements]();
      this[addObserver]();

      document.addEventListener("click", this[addEventDelegation], { capture: true });
    }

    destroy() {
      if (!this.isInitialized || !this.isCreated) return;

      this.close();

      this.isCreated = false;

      this[removeAttributes]();
      this[removeEventListeners]();
      this[removeObserver]();

      document.removeEventListener("click", this[addEventDelegation], { capture: true });
    }
  }

  const init = () => {
    // Select all drawers in the page
    const triggers = document.querySelectorAll(openingSelector);
    const options = {};

    triggers.forEach((trigger) => {
      // Select drawer and trigger
      options.trigger = trigger;
      options.drawerContainer = document.querySelector(trigger.dataset.drawer);

      const singleDrawer = new Drawer(options);
      singleDrawer.create();
    });
  };

  return { init };
})();// TODO
// - On pressing A-Z, a-z the focus moves to the corresponding list item

// DONE
// - Click, press enter or press space on the dropdown button to open/close dropdown menu
// - Press escape or click outside to close the dropdown menu when opened
// - Up arrow, down arrow focuses on each dropdown item
// - Home, end button moves the focus to top and bottom of the dropdown menu
// - Set aria-haspopup attribute to dropdown button
// - Set aria-controls attribute to dropdown button mapped to dropdown menu
// - Set aria-labelledby attribute to dropdown menu mapped to dropdown button
// - Toggle aria-expanded attribute to dropdown button
// - Set role="menu" attribute to dropdown menu
// - Set role="menuitem" attribute to dropdown menu items
// - Toggle aria-hidden attribute to dropdown menu based on it's open state
// - Add tabindex="-1" to dropdown menu items
// - Restore focus to the dropdown button once the dropdown menu is closed

const Dropdown = (() => {
  const dropdownClass = ".dropdown";
  const triggerClass = ".dropdown-trigger";
  const listClass = ".dropdown-list";
  const dropdownItemClass = ".dropdown-item";
  const dropdownLinkClass = "a.dropdown-item";
  const animationClass = "dropdown-animation";

  const keyboardKey = {
    escape: 27,
    end: 35,
    home: 36,
    up: 38,
    down: 40,
  };

  class Dropdown {
    // Initialize objects for the dropdown class
    constructor(options) {
      this.trigger = options.trigger;
      this.dropdown = options.dropdownList;
      this.items = this.dropdown.querySelectorAll(dropdownItemClass);
      this.links = this.dropdown.querySelectorAll(dropdownLinkClass);
      [this.firstLink] = this.links;
      this.lastLink = this.links[this.links.length - 1];

      this.state = [];
      this.currentFocusedIndex = 0;
      this.isOpen = false;

      this.open = this.open.bind(this);
      this.toggle = this.toggle.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onFocus = this.onFocus.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }

    onClick(event) {
      // Close the dropdown menu when clicked outside and on other dropdown trigger
      if (event.target.closest(triggerClass) !== this.trigger.closest(triggerClass)) {
        this.close();
      }
      if (event) event.target.focus();
    }

    onFocus(event) {
      // Managing dropdown menu focus state
      this.state.forEach((section, index) => {
        if (event.target === section.link) {
          this.currentFocusedIndex = index;
        }
      });
    }

    setFocus(event) {
      // Managing dropdown menu focus state
      event.preventDefault();
      if (event.target === this.trigger) this.currentFocusedIndex = 0;

      switch (event.which) {
        case keyboardKey.up:
          this.state[this.currentFocusedIndex].prevLink.focus();
          break;
        case keyboardKey.home:
          this.firstLink.focus();
          break;
        case keyboardKey.end:
          this.lastLink.focus();
          break;
        case keyboardKey.down:
          if (event.target !== this.trigger) {
            this.state[this.currentFocusedIndex].nextLink.focus();
          } else {
            this.firstLink.focus();
          }
          break;
      }
    }

    onKeydown(event) {
      // Capturing all keyboard events needed
      switch (event.which) {
        case keyboardKey.escape:
          this.close(event);
          break;
        case keyboardKey.up:
        case keyboardKey.down:
        case keyboardKey.home:
        case keyboardKey.end:
          this.setFocus(event);
          break;
      }
    }

    addAttributes() {
      // Add all the attributes needed to the dropdown
      this.trigger.setAttribute("aria-haspopup", true);
      this.trigger.setAttribute("aria-controls", this.dropdown.id);
      this.dropdown.setAttribute("role", "menu");
      this.dropdown.setAttribute("aria-labelledby", this.trigger.id);
      this.dropdown.setAttribute("tabindex", -1);
      this.dropdown.setAttribute("aria-hidden", !this.isOpen);

      this.state.forEach((section) => {
        if (section.item) section.item.setAttribute("role", "none");
        section.link.setAttribute("role", "menuitem");
        section.link.setAttribute("tabindex", -1);
      });
    }

    removeAttributes() {
      // Remove all the attributes attached to the dropdown
      this.trigger.removeAttribute("aria-haspopup");
      this.trigger.removeAttribute("aria-controls");
      this.trigger.removeAttribute("aria-expanded");
      this.dropdown.removeAttribute("role");
      this.dropdown.removeAttribute("aria-labelledby");
      this.dropdown.removeAttribute("tabindex");
      this.dropdown.removeAttribute("aria-hidden");

      this.state.forEach((section) => {
        if (section.item) section.item.removeAttribute("role");
        section.link.removeAttribute("role");
        section.link.removeAttribute("tabindex");
      });
    }

    addEventListeners() {
      // Add all the listeners to the dropdown
      if (event) this.trigger.focus();
      document.addEventListener("click", this.onClick);
      this.trigger.addEventListener("keydown", this.onKeydown);
      this.dropdown.addEventListener("keydown", this.onKeydown);
      this.links.forEach((link) => {
        link.addEventListener("focus", this.onFocus);
      });
    }

    removeEventListeners() {
      // Remove all the listeners attached to the dropdown
      document.removeEventListener("click", this.onClick);
      this.trigger.removeEventListener("keydown", this.onKeydown);
      this.dropdown.removeEventListener("keydown", this.onKeydown);
      this.links.forEach((link) => {
        link.removeEventListener("focus", this.onFocus);
      });
    }

    open() {
      // Open dropdown
      this.isOpen = true;
      this.trigger.setAttribute("aria-expanded", true);
      this.dropdown.setAttribute("aria-hidden", false);
      setTimeout(() => this.dropdown.classList.add(animationClass), 1);

      // Add event listeners
      this.addEventListeners();
    }

    close(event) {
      // Close dropdown
      this.isOpen = false;
      this.dropdown.classList.remove(animationClass);
      this.trigger.setAttribute("aria-expanded", false);
      setTimeout(() => this.dropdown.setAttribute("aria-hidden", true), 100);

      // Remove event listeners
      this.removeEventListeners();

      // Restoring focus
      this.trigger.focus();
    }

    toggle(event) {
      // Toggle open and close state of the dropdown
      event.preventDefault();
      this.isOpen = !this.isOpen;
      this.isOpen ? this.open() : this.close();
    }

    destroy() {
      // Remove attributes
      this.removeAttributes();

      // Remove event listeners
      this.removeEventListeners();

      // Remove event listener on the trigger button
      this.trigger.removeEventListener("click", this.toggle);
    }

    render() {
      // Get list of menu items
      this.links.forEach((link, index) => {
        this.state.push({
          item: this.items[index],
          link,
          prevLink: this.links[index - 1] || this.lastLink,
          nextLink: this.links[index + 1] || this.firstLink,
        });
      });

      // Add Attributes
      this.addAttributes();

      // Add click to toggle dropdown
      this.trigger.addEventListener("click", this.toggle);
    }
  }

  const init = () => {
    // Select all dropdown in the page
    const triggers = document.querySelectorAll(dropdownClass);
    const options = {};

    triggers.forEach((trigger) => {
      // Select dropdown trigger and list
      options.trigger = trigger.querySelector(triggerClass);
      options.dropdownList = trigger.querySelector(listClass);

      const singleDropdown = new Dropdown(options);
      singleDropdown.render();
    });
  };

  return { init };
})();

// Alpine Variant

// window.dropdown = function () {
//   return {
//     open: false,
//     trigger: {
//       ["@keydown.escape"]() {
//         this.open = false;
//       },
//       ["@click"]() {
//         this.open = true;
//       },
//     },
//     dropdown: {
//       ["@keydown.escape"]() {
//         this.open = false;
//       },
//       ["x-show.transition.in.origin.top.left.opacity.scale.90.out.origin.top.left.opacity.scale.90"]() {
//         return this.open;
//       },
//       ["@click.away"]() {
//         this.open = false;
//       },
//     },
//   };
// };
const Sidebar = (() => {
  const sidebarSelector = ".sidebar";
  const openingSelector = ".sidebar-open";
  const closingTrigger = ".sidebar-close";
  const labelledby = "sidebar-title";
  const disabledClass = "overflow-hidden";

  // Use Symbols to create private methods
  const onClick = Symbol("onClick");
  const onKeydown = Symbol("onKeydown");
  const addEventDelegation = Symbol("addEventDelegation");
  const addEventListeners = Symbol("addEventListeners");
  const removeEventListeners = Symbol("removeEventListeners");
  const addAttributes = Symbol("addAttributes");
  const removeAttributes = Symbol("removeAttributes");
  const setAttributes = Symbol("setAttributes");
  const setFocusableElements = Symbol("setFocusableElements");
  const setFocus = Symbol("setFocus");
  const restoreFocus = Symbol("restoreFocus");
  const switchFocus = Symbol("switchFocus");
  const maintainFocus = Symbol("maintainFocus");
  const addObserver = Symbol("addObserver");
  const removeObserver = Symbol("removeObserver");

  const focusableElements = [
    '[href]:not([tabindex^="-"])',
    'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])',
    'input[type="radio"]:checked',
    'select:not([disabled]):not([tabindex^="-"])',
    'textarea:not([disabled]):not([tabindex^="-"])',
    'button:not([disabled]):not([tabindex^="-"])',
    '[tabindex]:not([tabindex^="-"])',
    '[contenteditable="true"]:not([tabindex^="-"])',
  ];

  const keyCodes = {
    escape: "Escape",
    tab: "Tab",
    f6: "F6",
  };

  function getVisibleElements(elements) {
    const visibleElements = [];

    elements.forEach((element) => {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.width > 0 || bounding.height > 0;

      if (isVisible) visibleElements.push(element);
    });

    return visibleElements;
  }

  // Only get no nested elements
  function getNoNestedElements(context, selector, elements) {
    const nestedComponents = context.querySelectorAll(selector);
    const noNestedElements = [];
    let isNested = false;

    if (nestedComponents.length === 0) return elements;

    elements.forEach((element) => {
      nestedComponents.forEach((nestedComponent) => {
        if (nestedComponent.contains(element)) isNested = true;
      });

      if (!isNested) noNestedElements.push(element);

      isNested = false;
    });

    return noNestedElements;
  }

  // Check if the parent elements match the target
  function closest(element, target) {
    let currentElement = element;

    while (currentElement !== target && currentElement) {
      currentElement = currentElement.parentNode;
    }

    return !!currentElement;
  }

  class Sidebar {
    constructor(options, { onOpen = () => {}, onClose = () => {}, describedby, isModal = true, isOpen = false, isCreated = true, disableScroll = true } = {}) {
      // Check if the sidebar exists, if not, set `isInitialized` to false
      if (!document.querySelector(sidebarSelector)) {
        this.isInitialized = false;
        return;
      }

      // Save the initial configuration
      this.config = {
        onOpen,
        onClose,
        describedby,
        isModal,
        isCreated,
        isOpen,
        disableScroll,
      };

      this.sidebar = options.sidebarContainer;
      this.openingTrigger = options.trigger;
      this.backdropTrigger = options.sidebarContainer;
      this.sidebarArea = `${sidebarSelector}, ${openingSelector}`;

      this.document = document.querySelector("html");
      this.documentIsAlreadyDisabled = false;
      this.focusableElements = [];
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;

      this.isCreated = false;
      this.isOpen = false;

      this.close = this.close.bind(this);
      this.toggle = this.toggle.bind(this);
      this[onClick] = this[onClick].bind(this);
      this[onKeydown] = this[onKeydown].bind(this);
      this[addEventDelegation] = this[addEventDelegation].bind(this);
      this[switchFocus] = this[switchFocus].bind(this);

      // Add mutation observer to update focusable elements
      this.observer = new MutationObserver((mutations) => mutations.forEach(() => this[setFocusableElements]()));

      // initialize the sidebar
      this.isInitialized = true;
    }

    [onClick](event) {
      if (!event.target.closest(this.sidebarArea)) this.close(event);
      if (event.target === this.backdropTrigger) this.close(event);
    }

    [onKeydown](event) {
      switch (event.key) {
        case keyCodes.escape:
          event.stopPropagation();
          this.close(event);
          break;
        case keyCodes.f6:
          if (!this.config.isModal) this[restoreFocus]();
          break;
        case keyCodes.tab:
          this[maintainFocus](event);
          break;
      }
    }

    [addEventDelegation](event) {
      if (closest(event.target, this.openingTrigger)) this.toggle(event);

      document.querySelectorAll(closingTrigger).forEach((closeButton) => {
        if (closest(event.target, closeButton)) this.close();
      });
    }

    [addEventListeners]() {
      document.addEventListener("click", this[onClick], { capture: true });
      this.sidebar.addEventListener("keydown", this[onKeydown]);
    }

    [removeEventListeners]() {
      document.removeEventListener("click", this[onClick], { capture: true });
      this.sidebar.removeEventListener("keydown", this[onKeydown]);

      if (this.openingTrigger) this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
    }

    [addAttributes]() {
      this.sidebar.setAttribute("aria-labelledby", labelledby);
      if (this.config.describedby) this.sidebar.setAttribute("aria-describedby", this.config.describedby);

      this.openingTrigger.setAttribute("aria-haspopup", "sidebar");
    }

    [removeAttributes]() {
      this.sidebar.removeAttribute("aria-labelledby");
      this.sidebar.removeAttribute("aria-describedby");

      if (this.config.disableScroll && this.isOpen && !this.documentIsAlreadyDisabled) {
        this.document.classList.remove(disabledClass);
      }

      this.openingTrigger.removeAttribute("aria-haspopup");
    }

    [setAttributes]() {
      if (this.config.disableScroll && !this.documentIsAlreadyDisabled) {
        if (this.isOpen) {
          this.document.classList.add(disabledClass);
        } else {
          this.document.classList.remove(disabledClass);
        }
      }
    }

    [setFocusableElements]() {
      const visibleFocusableElements = getVisibleElements(this.sidebar.querySelectorAll(focusableElements));
      const filteredFocusableElements = getNoNestedElements(this.sidebar, '[role="sidebar"]', visibleFocusableElements);

      this.focusableElements = filteredFocusableElements.length > 0 ? filteredFocusableElements : [this.sidebar];
      [this.firstFocusableElement] = this.focusableElements;
      this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    }

    [setFocus]() {
      this.firstFocusableElement.focus();
    }

    [restoreFocus]() {
      this.openingTrigger.focus();

      // Switch focus between the current opening trigger and the non-modal sidebar
      if (this.isOpen) this.openingTrigger.addEventListener("keydown", this[switchFocus]);
    }

    [switchFocus](event) {
      if (event.key === keyCodes.f6) {
        this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
        this[setFocus]();
      }
    }

    [maintainFocus](event) {
      if (event.shiftKey && event.target === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement.focus();
      }

      if (!event.shiftKey && event.target === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement.focus();
      }
    }

    [addObserver]() {
      this.observer.observe(this.sidebar, { childList: true, attributes: true, subtree: true });
    }

    [removeObserver]() {
      this.observer.disconnect();
    }

    open() {
      if (!this.isInitialized || !this.isCreated || this.isOpen) return;

      this.isOpen = true;
      this.documentIsAlreadyDisabled = this.document.classList.contains(disabledClass);

      this[setAttributes]();
      this[addEventListeners]();
      this[setFocus]();
      this.sidebar.classList.add("translate-x-0");

      this.config.onOpen(this.sidebar, this.openingTrigger);
    }

    close(event) {
      if (!this.isInitialized || !this.isCreated || !this.isOpen) return;

      this.isOpen = false;

      if (event) event.preventDefault();

      setTimeout(() => this[setAttributes](), 100);

      this.sidebar.classList.remove("translate-x-0");
      this[removeEventListeners]();

      // Restore focus except for tooltip click events
      if (this.openingTrigger) this[restoreFocus]();

      this.config.onClose(this.sidebar, this.openingTrigger);
    }

    toggle(event) {
      if (!this.isInitialized || !this.isCreated) return;

      if (event) event.preventDefault();

      this.isOpen ? this.close() : this.open();
    }

    create() {
      if (!this.isInitialized || this.isCreated) return;

      this.isCreated = true;

      this[addAttributes]();
      this[setFocusableElements]();
      this[addObserver]();

      document.addEventListener("click", this[addEventDelegation], { capture: true });
    }

    destroy() {
      if (!this.isInitialized || !this.isCreated) return;

      this.close();

      this.isCreated = false;

      this[removeAttributes]();
      this[removeEventListeners]();
      this[removeObserver]();

      document.removeEventListener("click", this[addEventDelegation], { capture: true });
    }
  }

  const init = () => {
    // Select all sidebars in the page
    const triggers = document.querySelectorAll(openingSelector);
    const options = {};

    triggers.forEach((trigger) => {
      // Select sidebar and trigger
      options.trigger = trigger;
      options.sidebarContainer = document.querySelector(trigger.dataset.sidebar);

      const singleSidebar = new Sidebar(options);
      singleSidebar.create();
    });
  };

  return { init };
})();document.addEventListener("DOMContentLoaded", () => {
  Dialog.init();
  Drawer.init();
  Dropdown.init();
  Sidebar.init();
});}());