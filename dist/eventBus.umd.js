!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.eventbus=e()}(this,function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),r=e(function(t){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)}),o=(r.version,function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}),i=function(t){try{return!!t()}catch(t){return!0}},u=!i(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});We(We.S+We.F*!u,"Object",{defineProperty:Ge.f});var f=r.Object,c=function(t,e,n){return f.defineProperty(t,e,n)},s=e(function(t){t.exports={default:c,__esModule:!0}}),a=t(s),l=Math.ceil,p=Math.floor,y=function(t){return isNaN(t=+t)?0:(t>0?p:l)(t)},d=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},v=Re;We(We.S+We.F*!u,"Object",{defineProperties:H});var h=r.Object,b=function(t,e){return h.defineProperties(t,e)},g=t(e(function(t){t.exports={default:b,__esModule:!0}})),m=function(t){return Object(d(t))},_=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),We(We.S+We.F*i(function(){n(1)}),"Object",o)};_("keys",function(){return function(t){return K(m(t))}});var S,O=r.Object.keys,w=t(e(function(t){t.exports={default:O,__esModule:!0}})),E={}.hasOwnProperty,j=function(t,e){return E.call(t,e)},M={}.toString,P=function(t){return M.call(t).slice(8,-1)},x=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==P(t)?t.split(""):Object(t)},T=function(t){return x(d(t))},L=Math.min,k=Math.max,A=Math.min,F=e(function(t){var e=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:"pure",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),N=0,C=Math.random(),I=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++N+C).toString(36))},D=F("keys"),G=function(t){return D[t]||(D[t]=I(t))},R=(S=!1,function(t,e,n){var r,o,i=T(t),u=(r=i.length)>0?L(y(r),9007199254740991):0,f=function(t,e){return(t=y(t))<0?k(t+e,0):A(t,e)}(n,u);if(S&&e!=e){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((S||f in i)&&i[f]===e)return S||f||0;return!S&&-1}),V=G("IE_PROTO"),W=function(t,e){var n,r=T(t),o=0,i=[];for(n in r)n!=V&&j(r,n)&&i.push(n);for(;e.length>o;)j(r,n=e[o++])&&(~R(i,n)||i.push(n));return i},z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),K=w||function(t){return W(t,z)},H=u?g:function(t,e){Ie(t);for(var n,r=K(e),o=r.length,i=0;o>i;)Ge.f(t,n=r[i++],e[n]);return t},J=n.document,B=Ce(J)&&Ce(J.createElement),Y=function(t){return B?J.createElement(t):{}},q=n.document,Q=q&&q.documentElement,U=G("IE_PROTO"),$=function(){},X=function(){var t,e=Y("iframe"),n=z.length;for(e.style.display="none",Q.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),X=t.F;n--;)delete X.prototype[z[n]];return X()},Z=He||function(t,e){var n;return null!==t?($.prototype=Ie(t),n=new $,$.prototype=null,n[U]=t):n=X(),void 0===e?n:H(n,e)},tt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},et=e(function(t){var e=F("wks"),r=n.Symbol,o="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=o&&r[t]||(o?r:I)("Symbol."+t))}).store=e}),nt=Ge.f,rt=et("toStringTag"),ot=function(t,e,n){t&&!j(t=n?t:t.prototype,rt)&&nt(t,rt,{configurable:!0,value:e})},it={};Re(it,et("iterator"),function(){return this});var ut=function(t,e,n){t.prototype=Z(it,{next:tt(1,n)}),ot(t,e+" Iterator")};_("getPrototypeOf",function(){return function(t){return pt(m(t))}});var ft,ct=r.Object.getPrototypeOf,st=t(e(function(t){t.exports={default:ct,__esModule:!0}})),at=G("IE_PROTO"),lt=Object.prototype,pt=st||function(t){return t=m(t),j(t,at)?t[at]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?lt:null},yt=et("iterator"),dt=!([].keys&&"next"in[].keys()),vt=function(t,e,n,r,o,i,u){ut(n,e,r);var f,c,s,a=function(t){if(!dt&&t in d)return d[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",p="values"==o,y=!1,d=t.prototype,h=d[yt]||d["@@iterator"]||o&&d[o],b=h||a(o),g=o?p?a("entries"):b:void 0,m="Array"==e&&d.entries||h;if(m&&(s=pt(m.call(new t)))!==Object.prototype&&s.next&&ot(s,l,!0),p&&h&&"values"!==h.name&&(y=!0,b=function(){return h.call(this)}),u&&(dt||y||!d[yt])&&Re(d,yt,b),o)if(f={values:p?b:a("values"),keys:i?b:a("keys"),entries:g},u)for(c in f)c in d||v(d,c,f[c]);else We(We.P+We.F*(dt||y),e,f);return f},ht=(ft=!0,function(t,e){var n,r,o=String(d(t)),i=y(e),u=o.length;return i<0||i>=u?ft?"":void 0:(n=o.charCodeAt(i))<55296||n>56319||i+1===u||(r=o.charCodeAt(i+1))<56320||r>57343?ft?o.charAt(i):n:ft?o.slice(i,i+2):r-56320+(n-55296<<10)+65536});vt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=ht(e,n),this._i+=t.length,{value:t,done:!1})});for(var bt=function(t,e){return{value:e,done:!!t}},gt=(vt(Array,"Array",function(t,e){this._t=T(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,bt(1)):bt(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),et("toStringTag")),mt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),_t=0;_t<mt.length;_t++){var St=mt[_t],Ot=n[St],wt=Ot&&Ot.prototype;wt&&!wt[gt]&&Re(wt,gt,St)}var Et={f:et},jt=Et.f("iterator"),Mt=e(function(t){t.exports={default:jt,__esModule:!0}});t(Mt);var Pt=At.onFreeze;_("preventExtensions",function(t){return function(e){return t&&Ce(e)?t(Pt(e)):e}});var xt=r.Object.preventExtensions,Tt=t(e(function(t){t.exports={default:xt,__esModule:!0}}));_("isExtensible",function(t){return function(e){return!!Ce(e)&&(!t||t(e))}});var Lt=r.Object.isExtensible,kt=t(e(function(t){t.exports={default:Lt,__esModule:!0}})),At=e(function(t){var e=I("meta"),n=Ge.f,r=0,o=kt||function(){return!0},u=!i(function(){return o(Tt({}))}),f=function(t){n(t,e,{value:{i:"O"+ ++r,w:{}}})},c=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!Ce(t))return"symbol"==(void 0===t?"undefined":Ne(t))?t:("string"==typeof t?"S":"P")+t;if(!j(t,e)){if(!o(t))return"F";if(!n)return"E";f(t)}return t[e].i},getWeak:function(t,n){if(!j(t,e)){if(!o(t))return!0;if(!n)return!1;f(t)}return t[e].w},onFreeze:function(t){return u&&c.NEED&&o(t)&&!j(t,e)&&f(t),t}}}),Ft=(At.KEY,At.NEED,At.fastKey,At.getWeak,At.onFreeze,Ge.f),Nt=function(t){var e=r.Symbol||(r.Symbol={});"_"==t.charAt(0)||t in e||Ft(e,t,{value:Et.f(t)})},Ct=r.Object.getOwnPropertySymbols,It={f:t(e(function(t){t.exports={default:Ct,__esModule:!0}}))},Dt={f:{}.propertyIsEnumerable},Gt=Array.isArray||function(t){return"Array"==P(t)},Rt=function(t,e){if(!Ce(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!Ce(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!Ce(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!Ce(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")};_("getOwnPropertyNames",function(){return qt.f});var Vt=r.Object,Wt=function(t){return Vt.getOwnPropertyNames(t)},zt=t(e(function(t){t.exports={default:Wt,__esModule:!0}})),Kt=z.concat("length","prototype"),Ht={f:zt||function(t){return W(t,Kt)}},Jt=Ht.f,Bt={}.toString,Yt="object"==("undefined"==typeof window?"undefined":Ne(window))&&window&&zt?zt(window):[],qt={f:function(t){return Yt&&"[object Window]"==Bt.call(t)?function(t){try{return Jt(t)}catch(t){return Yt.slice()}}(t):Jt(T(t))}},Qt=ee.f;_("getOwnPropertyDescriptor",function(){return function(t,e){return Qt(T(t),e)}});var Ut=r.Object,$t=function(t,e){return Ut.getOwnPropertyDescriptor(t,e)},Xt=t(e(function(t){t.exports={default:$t,__esModule:!0}})),Zt=!u&&!i(function(){return 7!=Object.defineProperty(Y("div"),"a",{get:function(){return 7}}).a}),te=Xt,ee={f:u?te:function(t,e){if(t=T(t),e=Rt(e,!0),Zt)try{return te(t,e)}catch(t){}if(j(t,e))return tt(!Dt.f.call(t,e),t[e])}},ne=At.KEY,re=ee.f,oe=Ge.f,ie=qt.f,ue=n.Symbol,fe=n.JSON,ce=fe&&fe.stringify,se=et("_hidden"),ae=et("toPrimitive"),le={}.propertyIsEnumerable,pe=F("symbol-registry"),ye=F("symbols"),de=F("op-symbols"),ve=Object.prototype,he="function"==typeof ue,be=n.QObject,ge=!be||!be.prototype||!be.prototype.findChild,me=u&&i(function(){return 7!=Z(oe({},"a",{get:function(){return oe(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=re(ve,e);r&&delete ve[e],oe(t,e,n),r&&t!==ve&&oe(ve,e,r)}:oe,_e=function(t){var e=ye[t]=Z(ue.prototype);return e._k=t,e},Se=he&&"symbol"==Ne(ue.iterator)?function(t){return"symbol"==(void 0===t?"undefined":Ne(t))}:function(t){return t instanceof ue},Oe=function(t,e,n){return t===ve&&Oe(de,e,n),Ie(t),e=Rt(e,!0),Ie(n),j(ye,e)?(n.enumerable?(j(t,se)&&t[se][e]&&(t[se][e]=!1),n=Z(n,{enumerable:tt(0,!1)})):(j(t,se)||oe(t,se,tt(1,{})),t[se][e]=!0),me(t,e,n)):oe(t,e,n)},we=function(t,e){Ie(t);for(var n,r=function(t){var e=K(t),n=It.f;if(n)for(var r,o=n(t),i=Dt.f,u=0;o.length>u;)i.call(t,r=o[u++])&&e.push(r);return e}(e=T(e)),o=0,i=r.length;i>o;)Oe(t,n=r[o++],e[n]);return t},Ee=function(t){var e=le.call(this,t=Rt(t,!0));return!(this===ve&&j(ye,t)&&!j(de,t))&&(!(e||!j(this,t)||!j(ye,t)||j(this,se)&&this[se][t])||e)},je=function(t,e){if(t=T(t),e=Rt(e,!0),t!==ve||!j(ye,e)||j(de,e)){var n=re(t,e);return!n||!j(ye,e)||j(t,se)&&t[se][e]||(n.enumerable=!0),n}},Me=function(t){for(var e,n=ie(T(t)),r=[],o=0;n.length>o;)j(ye,e=n[o++])||e==se||e==ne||r.push(e);return r},Pe=function(t){for(var e,n=t===ve,r=ie(n?de:T(t)),o=[],i=0;r.length>i;)!j(ye,e=r[i++])||n&&!j(ve,e)||o.push(ye[e]);return o};he||(v((ue=function(){if(this instanceof ue)throw TypeError("Symbol is not a constructor!");var t=I(arguments.length>0?arguments[0]:void 0);return u&&ge&&me(ve,t,{configurable:!0,set:function e(n){this===ve&&e.call(de,n),j(this,se)&&j(this[se],t)&&(this[se][t]=!1),me(this,t,tt(1,n))}}),_e(t)}).prototype,"toString",function(){return this._k}),ee.f=je,Ge.f=Oe,Ht.f=qt.f=Me,Dt.f=Ee,It.f=Pe,Et.f=function(t){return _e(et(t))}),We(We.G+We.W+We.F*!he,{Symbol:ue});for(var xe="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Te=0;xe.length>Te;)et(xe[Te++]);for(var Le=K(et.store),ke=0;Le.length>ke;)Nt(Le[ke++]);We(We.S+We.F*!he,"Symbol",{for:function(t){return j(pe,t+="")?pe[t]:pe[t]=ue(t)},keyFor:function(t){if(!Se(t))throw TypeError(t+" is not a symbol!");for(var e in pe)if(pe[e]===t)return e},useSetter:function(){ge=!0},useSimple:function(){ge=!1}}),We(We.S+We.F*!he,"Object",{create:function(t,e){return void 0===e?Z(t):we(Z(t),e)},defineProperty:Oe,defineProperties:we,getOwnPropertyDescriptor:je,getOwnPropertyNames:Me,getOwnPropertySymbols:Pe}),fe&&We(We.S+We.F*(!he||i(function(){var t=ue();return"[null]"!=ce([t])||"{}"!=ce({a:t})||"{}"!=ce(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(Ce(e)||void 0!==t)&&!Se(t))return Gt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Se(e))return e}),r[1]=e,ce.apply(fe,r)}}),ue.prototype[ae]||Re(ue.prototype,ae,ue.prototype.valueOf),ot(ue,"Symbol"),ot(Math,"Math",!0),ot(n.JSON,"JSON",!0),Nt("asyncIterator"),Nt("observable");var Ae=r.Symbol,Fe=e(function(t){t.exports={default:Ae,__esModule:!0}});t(Fe);var Ne=t(e(function(t,e){e.__esModule=!0;var n=i(Mt),r=i(Fe),o="function"==typeof r.default&&"symbol"===Ne(n.default)?function(t){return void 0===t?"undefined":Ne(t)}:function(t){return t&&"function"==typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":void 0===t?"undefined":Ne(t)};function i(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof r.default&&"symbol"===o(n.default)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":void 0===t?"undefined":o(t)}})),Ce=function(t){return"object"===(void 0===t?"undefined":Ne(t))?null!==t:"function"==typeof t},Ie=function(t){if(!Ce(t))throw TypeError(t+" is not an object!");return t},De=a,Ge={f:u?a:function(t,e,n){if(Ie(t),e=Rt(e,!0),Ie(n),Zt)try{return De(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},Re=u?function(t,e,n){return Ge.f(t,e,tt(1,n))}:function(t,e,n){return t[e]=n,t},Ve=function t(e,i,u){var f,c,s,a=e&t.F,l=e&t.G,p=e&t.S,y=e&t.P,d=e&t.B,v=e&t.W,h=l?r:r[i]||(r[i]={}),b=h.prototype,g=l?n:p?n[i]:(n[i]||{}).prototype;for(f in l&&(u=i),u)(c=!a&&g&&void 0!==g[f])&&j(h,f)||(s=c?g[f]:u[f],h[f]=l&&"function"!=typeof g[f]?u[f]:d&&c?o(s,n):v&&g[f]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):y&&"function"==typeof s?o(Function.call,s):s,y&&((h.virtual||(h.virtual={}))[f]=s,e&t.R&&b&&!b[f]&&Re(b,f,s)))};Ve.F=1,Ve.G=2,Ve.S=4,Ve.P=8,Ve.B=16,Ve.W=32,Ve.U=64,Ve.R=128;var We=Ve;We(We.S,"Object",{create:Z});var ze=r.Object,Ke=function(t,e){return ze.create(t,e)},He=t(e(function(t){t.exports={default:Ke,__esModule:!0}})),Je=t(e(function(t,e){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),Be=t(e(function(t,e){e.__esModule=!0;var n,r=(n=s)&&n.__esModule?n:{default:n};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()}));return function(){function t(){Je(this,t),this.listeners=He(null)}return Be(t,[{key:"on",value:function(t,e){var n=this;if(!("string"==typeof t||Array.isArray(t)))throw new TypeError("event is expected to be string or array");if(Array.isArray(t))t.forEach(function(t){n.on(t,e)});else if(/\s+/.test(t.trim()))t.split(/\s+/).forEach(function(t){n.on(t,e)});else{this.listeners[t]?this.listeners[t].push(e):this.listeners[t]=[e]}}},{key:"once",value:function(t,e){var n=this,r=arguments,o=function(){n.off(t,e),e.apply(n,r)};o.fn=e,this.$on(t,o)}},{key:"off",value:function(t,e){var n=this;if(!("string"==typeof t||Array.isArray(t)))throw new TypeError("event is expected to be string or array");if(Array.isArray(t))t.forEach(function(t){n.off(t,e)});else if(/\s+/.test(t.trim()))t.split(/\s+/).forEach(function(t){n.off(t,e)});else{var r=this.listeners[t];if(!r)return void console.error("No subscribers for event "+envent);var o=r.findIndex(function(t,e,n){return t===cb});if(-1===o)return;if(r.splice(o,1),0===r.length)return void(this.listeners[t]=null);this.listeners[t]=r}}},{key:"trigger",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this.listeners[t];o?o.forEach(function(t){return t.apply(void 0,n)}):console.error("No subscribers for event "+t)}}]),t}()});