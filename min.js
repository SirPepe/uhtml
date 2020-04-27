var uhtml=function(e){"use strict";function t(n){return{get:function(e){return n.get(e)},set:function(e,t){return n.set(e,t),t}}}function u(e,t,n){return i.test(t)?e:"<".concat(t).concat(n.replace(p,""),"></").concat(t,">")}function f(t,a,e){for(var n=[],r=t.length,o=function(r){var e=t[r-1];n.push(l.test(e)&&function e(t,n){return 0<n--&&(s.test(t[n])||!d.test(t[n])&&e(t,n))}(t,r)?e.replace(l,function(e,t,n){return"".concat(a).concat(r-1,"=").concat(n||'"').concat(t).concat(n?"":'"')}):"".concat(e,"\x3c!--").concat(a).concat(r-1,"--\x3e"))},c=1;c<r;c++)o(c);n.push(t[r-1]);var i=n.join("").trim();return e?i:i.replace(v,u)}function r(e,t){return 111===e.nodeType?1/t<0?t?(r=(n=e).firstChild,a=n.lastChild,(o=document.createRange()).setStartAfter(r),o.setEndAfter(a),o.deleteContents(),r):e.lastChild:t?e.valueOf():e.firstChild:e;var n,r,a,o}var n,o,c,a,l=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,i=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,s=/<[a-z][^>]+$/i,d=/>[^<>]*$/,v=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,p=/\s+$/,g=Array.isArray,h=[],m=h.indexOf,y=h.slice,b=(n=document,o="fragment",a="content"in N(c="template")?function(e){var t=N(c);return t.innerHTML=e,t.content}:function(e){var t=N(o),n=N(c),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;n.innerHTML="<table>"+e+"</table>",r=n.querySelectorAll(a)}else n.innerHTML=e,r=n.childNodes;return w(t,r),t},function(e,t){return("svg"===t?function(e){var t=N(o),n=N("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",w(t,n.firstChild.childNodes),t}:a)(e)});function w(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function N(e){return e===o?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",e)}function C(e,t){return e.childNodes[t]}function x(e){for(var t=[],n=e.parentNode;n;)t.push(m.call(n.childNodes,e)),n=(e=n).parentNode;return t}function A(e,t,n){return function(e,t,n,r,a){for(var o=n.length,c=t.length,i=o,u=0,l=0,f=null;u<c||l<i;)if(c===u)for(var s=i<o?l?r(n[l-1],-0).nextSibling:r(n[i-l],0):a;l<i;)e.insertBefore(r(n[l++],1),s);else if(i===l)for(;u<c;)f&&f.has(t[u])||e.removeChild(r(t[u],-1)),u++;else if(t[u]===n[l])u++,l++;else if(t[c-1]===n[i-1])c--,i--;else if(t[u]===n[i-1]&&n[l]===t[c-1]){var d=r(t[--c],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[u++],-1).nextSibling),e.insertBefore(r(n[--i],1),d),t[c]=n[i]}else{if(!f){f=new Map;for(var v=l;v<i;)f.set(n[v],v++)}if(f.has(t[u])){var p=f.get(t[u]);if(l<p&&p<i){for(var h=u,g=1;++h<c&&h<i&&f.get(t[h])===p+g;)g++;if(p-l<g)for(var m=r(t[u],0);l<p;)e.insertBefore(r(n[l++],1),m);else e.replaceChild(r(n[l++],1),r(t[u++],-1))}else u++}else e.removeChild(r(t[u++],-1))}return n}(e.parentNode,t,n,r,e)}function E(e,t){return"ref"===t?(n=e,function(e){"function"==typeof e?e(n):e.current=n}):"aria"===t?(r=e,function(e){for(var t in e)r.setAttribute("role"===t?t:"aria-".concat(t),e[t])}):"data"===t?(a=e.dataset,function(e){for(var t in e)a[t]=e[t]}):"."===t.slice(0,1)?(o=e,c=t.slice(1),function(e){o[c]=e}):"on"===t.slice(0,2)?(i=e,f=(u=t).slice(2),!(u in i)&&u.toLowerCase()in i&&(f=f.toLowerCase()),function(e){var t=g(e)?e:[e,!1];l!==t[0]&&(l&&i.removeEventListener(f,l,t[1]),(l=t[0])&&i.addEventListener(f,l,t[1]))}):(s=e,d=t,p=!0,h=document.createAttributeNS(null,d),function(e){v!==e&&(null==(v=e)?p||(s.removeAttributeNodeNS(h),p=!0):(h.value=e,p&&(s.setAttributeNodeNS(h),p=!1)))});var n,r,a,o,c,i,u,l,f,s,d,v,p,h}var k=document,T=k.createTreeWalker,S=k.importNode,L=1!=S.length,M=L?function(e,t){return S.call(document,b(e,t),!0)}:b,O=L?function(e){return T.call(document,e,129,null,!1)}:function(e){return T.call(document,e,129)};function $(e){var t,n,r,a,o,c,i=e.type,u=e.path.reduceRight(C,this);return"node"===i?(r=u,c=[],function e(t){switch(typeof t){case"string":case"number":case"boolean":a!==t&&(a=t,o?o.textContent=t:o=document.createTextNode(t),c=A(r,c,[o]));break;case"object":case"undefined":if(null==t){a!=t&&(a=t,c=A(r,c,[]));break}if(g(t)){0===(a=t).length?c=A(r,c,[]):"object"==typeof t[0]?c=A(r,c,t):e(String(t));break}"ELEMENT_NODE"in t&&a!==t&&(c=A(r,c,11===(a=t).nodeType?y.call(t.childNodes):[t]))}}):"attr"===i?E(u,e.name):(t=u,function(e){n!=e&&(n=e,t.textContent=null==e?"":e)})}function j(){return{stack:[],entry:null,wire:null}}function B(e,t){var n=t.type,r=t.template,a=t.values,o=a.length;D(e,a,o);var c,i,u,l=e.entry;l&&l.template===r&&l.type===n||(e.entry=(u=z(c=n,i=r),l={type:c,template:i,content:u.content,updates:u.updates,wire:null}));for(var f=l.content,s=l.updates,d=l.wire,v=0;v<o;v++)s[v](a[v]);return d||(l.wire=function(t){var n=t.childNodes,r=n.length;if(r<2)return n[0];var a=y.call(n,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:a[0],lastChild:a[r-1],valueOf:function(){if(n.length!==r)for(var e=0;e<r;)t.appendChild(a[e++]);return t}}}(f))}var H="isµ",W=t(new WeakMap),z=function(e,t){var n=W.get(t)||W.set(t,function(e,t){for(var n=f(t,H,"svg"===e),r=M(n,e),a=O(r),o=[],c=t.length-1,i=0,u="".concat(H).concat(i);i<c;){var l=a.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===u&&(o.push({type:"node",path:x(l)}),u="".concat(H).concat(++i));else{for(;l.hasAttribute(u);)o.push({type:"attr",path:x(l),name:l.getAttribute(u)}),l.removeAttribute(u),u="".concat(H).concat(++i);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(u,"--\x3e")&&(o.push({type:"text",path:x(l)}),u="".concat(H).concat(++i))}}return{content:r,nodes:o}}(e,t)),r=n.content,a=n.nodes,o=S.call(document,r,!0);return{content:o,updates:a.map($,o)}},D=function e(t,n,r){for(var a=t.stack,o=0;o<r;o++){var c=n[o];c instanceof R?n[o]=B(a[o]||(a[o]=j()),c):g(c)?e(a[o]||(a[o]=j()),c,c.length):a[o]=null}r<a.length&&a.splice(r)};function R(e,t,n){this.type=e,this.template=t,this.values=n}function _(o){var r=t(new WeakMap);return F(function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new R(o,e,n)},{for:{value:function(e,t){var a,n=r.get(e)||r.set(e,q(null));return n[t]||(n[t]=(a=j(),function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return B(a,{type:o,template:e,values:n})}))}},node:{value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return B(j(),{type:o,template:e,values:n}).valueOf()}}})}var q=Object.create,F=Object.defineProperties,P=t(new WeakMap),G=_("html"),I=_("svg");return e.html=G,e.render=function(e,t){var n="function"==typeof t?t():t,r=P.get(e)||P.set(e,j()),a=n instanceof R?B(r,n):n;return a!==r.wire&&(r.wire=a,e.textContent="",e.appendChild(a.valueOf())),e},e.svg=I,e}({});