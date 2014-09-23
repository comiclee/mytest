function FastClick(t,e){"use strict";function n(t,e){return function(){return t.apply(e,arguments)}}var i;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,!FastClick.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,s=0,a=r.length;a>s;s++)o[r[s]]=n(o[r[s]],o);deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var r=Node.prototype.removeEventListener;"click"===e?r.call(t,e,n.hijacked||n,i):r.call(t,e,n,i)},t.addEventListener=function(e,n,i){var r=Node.prototype.addEventListener;"click"===e?r.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):r.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}}var Zepto=function(){function t(t){return null==t?String(t):Y[V.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return j.call(t,function(t){return null!=t})}function c(t){return t.length>0?k.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||P[u(t)]?e:e+"px"}function h(t){var e,n;return F[t]||(e=I.createElement(t),I.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),F[t]=n),F[t]}function d(t){return"children"in t?O.call(t.children):k.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e,n){for(b in e)n&&(o(e[b])||G(e[b]))?(o(e[b])&&!o(t[b])&&(t[b]={}),G(e[b])&&!G(t[b])&&(t[b]=[]),p(t[b],e[b],n)):e[b]!==w&&(t[b]=e[b])}function m(t,e){return null==e?k(t):k(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function E(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?k.parseJSON(t):t:e):t}catch(n){return t}}function C(t,e){e(t);for(var n in t.childNodes)C(t.childNodes[n],e)}var w,b,k,x,S,T,N=[],O=N.slice,j=N.filter,I=window.document,F={},L={},P={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,Z=/([A-Z])/g,$=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],X=I.createElement("table"),q=I.createElement("tr"),z={tr:I.createElement("tbody"),tbody:X,thead:X,tfoot:X,td:q,th:q,"*":I.createElement("div")},H=/complete|loaded|interactive/,B=/^[\w-]*$/,Y={},V=Y.toString,U={},W=I.createElement("div"),J={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return U.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=W).appendChild(t),i=~U.qsa(r,e).indexOf(t),o&&W.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return j.call(t,function(e,n){return t.indexOf(e)==n})},U.fragment=function(t,e,n){var i,r,s;return M.test(t)&&(i=k(I.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(D,"<$1></$2>")),e===w&&(e=A.test(t)&&RegExp.$1),e in z||(e="*"),s=z[e],s.innerHTML=""+t,i=k.each(O.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(r=k(i),k.each(n,function(t,e){$.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},U.Z=function(t,e){return t=t||[],t.__proto__=k.fn,t.selector=e||"",t},U.isZ=function(t){return t instanceof U.Z},U.init=function(t,n){var i;if(!t)return U.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&A.test(t))i=U.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return k(n).find(t);i=U.qsa(I,t)}else{if(e(t))return k(I).ready(t);if(U.isZ(t))return t;if(G(t))i=a(t);else if(r(t))i=[t],t=null;else if(A.test(t))i=U.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return k(n).find(t);i=U.qsa(I,t)}}return U.Z(i,t)},k=function(t,e){return U.init(t,e)},k.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},U.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],s=r||o?e.slice(1):e,a=B.test(s);return i(t)&&a&&r?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(a&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},k.contains=function(t,e){return t!==e&&t.contains(e)},k.type=t,k.isFunction=e,k.isWindow=n,k.isArray=G,k.isPlainObject=o,k.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},k.inArray=function(t,e,n){return N.indexOf.call(e,t,n)},k.camelCase=S,k.trim=function(t){return null==t?"":String.prototype.trim.call(t)},k.uuid=0,k.support={},k.expr={},k.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},k.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},k.grep=function(t,e){return j.call(t,e)},window.JSON&&(k.parseJSON=JSON.parse),k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()}),k.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(t){return k(k.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return k(O.apply(this,arguments))},ready:function(t){return H.test(I.readyState)&&I.body?t(k):I.addEventListener("DOMContentLoaded",function(){t(k)},!1),this},get:function(t){return t===w?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return N.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):k(j.call(this,function(e){return U.matches(e,t)}))},add:function(t,e){return k(T(this.concat(k(t,e))))},is:function(t){return this.length>0&&U.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?O.call(t):k(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return k(n)},has:function(t){return this.filter(function(){return r(t)?k.contains(this,t):k(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:k(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:k(t)},find:function(t){var e,n=this;return e="object"==typeof t?k(t).filter(function(){var t=this;return N.some.call(n,function(e){return k.contains(e,t)})}):1==this.length?k(U.qsa(this[0],t)):this.map(function(){return U.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=k(t));n&&!(r?r.indexOf(n)>=0:U.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return k(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=k.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return j.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return k.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=k(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){k(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){k(this[0]).before(t=k(t));for(var e;(e=t.children()).length;)t=e.first();k(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=k(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){k(this).replaceWith(k(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=k(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return k(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return k(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;k(this).empty().append(v(this,t,e,n))})},text:function(t){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t===w?"":""+t})},attr:function(t,e){var n;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(b in t)g(this,b,t[b]);else g(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=J[t]||t,e===w?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+t.replace(Z,"-$1").toLowerCase(),e);return null!==n?E(n):w},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?k(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=k(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[S(e)]||r.getPropertyValue(e);if(G(e)){var o={};return k.each(G(e)?e:[e],function(t,e){o[e]=i.style[S(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(b in e)e[b]||0===e[b]?s+=u(b)+":"+f(b,e[b])+";":this.each(function(){this.style.removeProperty(u(b))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(k(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?N.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){x=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){k(this).hasClass(t)||x.push(t)},this),x.length&&y(this,n+(n?" ":"")+x.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===w?y(this,""):(x=y(this),v(this,t,e,x).split(/\s+/g).forEach(function(t){x=x.replace(l(t)," ")}),void y(this,x.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=k(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=_.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(k(t).css("margin-top"))||0,n.left-=parseFloat(k(t).css("margin-left"))||0,i.top+=parseFloat(k(e[0]).css("border-top-width"))||0,i.left+=parseFloat(k(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||I.body;t&&!_.test(t.nodeName)&&"static"==k(t).css("position");)t=t.offsetParent;return t})}},k.fn.detach=k.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});k.fn[t]=function(r){var o,s=this[0];return r===w?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=k(this),s.css(t,v(this,r,e,s[t]()))})}}),R.forEach(function(e,n){var i=n%2;k.fn[e]=function(){var e,r,o=k.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:U.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return k(t).remove();C(r.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},k.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return k(t)[e](this),this}}),U.Z.prototype=k.fn,U.uniq=T,U.deserializeValue=E,k.zepto=U,k}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in E||!!e}function s(t){return C[t]||y&&E[t]||t}function a(n,r,a,c,l,h,d){var p=e(n),m=v[p]||(v[p]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=l,r.e in C&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var p=h||a;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(s(r.e),r.proxy,o(r,d))})}function c(t,i,r,a,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(x,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=b}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)k.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,d=Array.prototype.slice,p=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,E={focus:"focusin",blur:"focusout"},C={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:a,remove:c},t.proxy=function(n,i){if(p(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if(m(i))return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},b=function(){return!1},k=/^([A-Z]|returnValue$|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var s,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||p(r)||r===!1||(r=i,i=n,n=f),(p(i)||i===!1)&&(r=i,i=f),r===!1&&(r=b),h.each(function(f,h){o&&(s=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||r).apply(o,[i].concat(d.call(arguments,1)))):void 0}),a(h,e,r,i,n,u||s)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||p(i)||i===!1||(i=n,n=f),i===!1&&(i=b),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l(m(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function s(t,e,i,r){var o=i.context,s="success";i.success.call(o,t,s,e),r&&r.resolveWith(o,[t,s,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(s,e,i)}function a(t,e,i,r,o){var s=r.context;r.error.call(s,i,e,t),o&&o.rejectWith(s,[i,e,t]),n(r,s,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==k?"html":t==b?"json":C.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function p(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(c.name,c.value):"array"==o||!i&&"object"==o?p(e,c,i,n):e.add(n,c)})}var m,v,g=0,y=window.document,E=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,C=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,b="application/json",k="text/html",x=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},d={abort:h};return n&&n.promise(d),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?s(i[0],d,e,n):a(null,c||"error",d,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(d,e)===!1?(h("abort"),d):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:b,xml:"application/xml, text/xml",html:k,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var c=n.dataType,d=/\?.+=\?/.test(n.url);if("jsonp"==c||d)return d||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var p,g=n.accepts[c],y={},E=function(t,e){y[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=n.xhr(),b=w.setRequestHeader;if(r&&r.promise(w),n.crossDomain||E("X-Requested-With","XMLHttpRequest"),E("Accept",g||"*/*"),(g=n.mimeType||g)&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(g)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&E("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(v in n.headers)E(v,n.headers[v]);if(w.setRequestHeader=E,w.onreadystatechange=function(){if(4==w.readyState){w.onreadystatechange=u,clearTimeout(p);var e,i=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==C){c=c||l(n.mimeType||w.getResponseHeader("content-type")),e=w.responseText;try{"script"==c?(1,eval)(e):"xml"==c?e=w.responseXML:"json"==c&&(e=x.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?a(i,"parsererror",w,n,r):s(e,w,n,r)}else a(w.statusText||null,w.status?"error":"abort",w,n,r)}},o(w,n)===!1)return w.abort(),a(null,"abort",w,n,r),w;if(n.xhrFields)for(v in n.xhrFields)w[v]=n.xhrFields[v];var k="async"in n?n.async:!0;w.open(n.type,n.url,k,n.username,n.password);for(v in y)b.apply(w,y[v]);return n.timeout>0&&(p=setTimeout(function(){w.onreadystatechange=u,w.abort(),a(null,"timeout",w,n,r)},n.timeout)),w.send(n.data?n.data:null),w},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=d(e,n,i),c=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(E,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(a),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},FastClick.prototype.determineEventType=function(t){"use strict";return deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(t){"use strict";var e;deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},FastClick.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,n,i,r,o,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(o=t.changedTouches[0],s=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=s.tagName.toLowerCase(),"label"===i){if(e=this.findControl(s)){if(this.focus(s),deviceIsAndroid)return!1;s=e}}else if(this.needsFocus(s))return t.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,t),deviceIsIOS&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(r=s.fastClickScrollParent,r&&r.fastClickLastScrollTop!==r.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(t){"use strict";var e,n;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}return"none"===t.style.msTouchAction?!0:!1},FastClick.attach=function(t,e){"use strict";return new FastClick(t,e)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";
return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;