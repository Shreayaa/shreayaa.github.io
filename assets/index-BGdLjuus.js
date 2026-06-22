(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&c(x)}).observe(document,{childList:!0,subtree:!0});function d(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=d(f);fetch(f.href,h)}})();function $0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ro={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function P0(){if(Zm)return Dn;Zm=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function d(c,f,h){var x=null;if(h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),"key"in f){h={};for(var E in f)E!=="key"&&(h[E]=f[E])}else h=f;return f=h.ref,{$$typeof:r,type:c,key:x,ref:f!==void 0?f:null,props:h}}return Dn.Fragment=m,Dn.jsx=d,Dn.jsxs=d,Dn}var Jm;function eg(){return Jm||(Jm=1,Ro.exports=P0()),Ro.exports}var n=eg(),Oo={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function tg(){if(Fm)return se;Fm=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.iterator;function M(b){return b===null||typeof b!="object"?null:(b=j&&b[j]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,G={};function H(b,B,K){this.props=b,this.context=B,this.refs=G,this.updater=K||L}H.prototype.isReactComponent={},H.prototype.setState=function(b,B){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,B,"setState")},H.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function S(){}S.prototype=H.prototype;function U(b,B,K){this.props=b,this.context=B,this.refs=G,this.updater=K||L}var q=U.prototype=new S;q.constructor=U,Y(q,H.prototype),q.isPureReactComponent=!0;var ie=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},oe=Object.prototype.hasOwnProperty;function ue(b,B,K,V,W,fe){return K=fe.ref,{$$typeof:r,type:b,key:B,ref:K!==void 0?K:null,props:fe}}function Q(b,B){return ue(b.type,B,void 0,void 0,void 0,b.props)}function X(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function ne(b){var B={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(K){return B[K]})}var we=/\/+/g;function Me(b,B){return typeof b=="object"&&b!==null&&b.key!=null?ne(""+b.key):B.toString(36)}function Fe(){}function $e(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Fe,Fe):(b.status="pending",b.then(function(B){b.status==="pending"&&(b.status="fulfilled",b.value=B)},function(B){b.status==="pending"&&(b.status="rejected",b.reason=B)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ie(b,B,K,V,W){var fe=typeof b;(fe==="undefined"||fe==="boolean")&&(b=null);var ae=!1;if(b===null)ae=!0;else switch(fe){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(b.$$typeof){case r:case m:ae=!0;break;case y:return ae=b._init,Ie(ae(b._payload),B,K,V,W)}}if(ae)return W=W(b),ae=V===""?"."+Me(b,0):V,ie(W)?(K="",ae!=null&&(K=ae.replace(we,"$&/")+"/"),Ie(W,B,K,"",function(ta){return ta})):W!=null&&(X(W)&&(W=Q(W,K+(W.key==null||b&&b.key===W.key?"":(""+W.key).replace(we,"$&/")+"/")+ae)),B.push(W)),1;ae=0;var nt=V===""?".":V+":";if(ie(b))for(var ke=0;ke<b.length;ke++)V=b[ke],fe=nt+Me(V,ke),ae+=Ie(V,B,K,fe,W);else if(ke=M(b),typeof ke=="function")for(b=ke.call(b),ke=0;!(V=b.next()).done;)V=V.value,fe=nt+Me(V,ke++),ae+=Ie(V,B,K,fe,W);else if(fe==="object"){if(typeof b.then=="function")return Ie($e(b),B,K,V,W);throw B=String(b),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ae}function R(b,B,K){if(b==null)return b;var V=[],W=0;return Ie(b,V,"","",function(fe){return B.call(K,fe,W++)}),V}function I(b){if(b._status===-1){var B=b._result;B=B(),B.then(function(K){(b._status===0||b._status===-1)&&(b._status=1,b._result=K)},function(K){(b._status===0||b._status===-1)&&(b._status=2,b._result=K)}),b._status===-1&&(b._status=0,b._result=B)}if(b._status===1)return b._result.default;throw b._result}var ee=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function je(){}return se.Children={map:R,forEach:function(b,B,K){R(b,function(){B.apply(this,arguments)},K)},count:function(b){var B=0;return R(b,function(){B++}),B},toArray:function(b){return R(b,function(B){return B})||[]},only:function(b){if(!X(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},se.Component=H,se.Fragment=d,se.Profiler=f,se.PureComponent=U,se.StrictMode=c,se.Suspense=w,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,se.__COMPILER_RUNTIME={__proto__:null,c:function(b){return J.H.useMemoCache(b)}},se.cache=function(b){return function(){return b.apply(null,arguments)}},se.cloneElement=function(b,B,K){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var V=Y({},b.props),W=b.key,fe=void 0;if(B!=null)for(ae in B.ref!==void 0&&(fe=void 0),B.key!==void 0&&(W=""+B.key),B)!oe.call(B,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&B.ref===void 0||(V[ae]=B[ae]);var ae=arguments.length-2;if(ae===1)V.children=K;else if(1<ae){for(var nt=Array(ae),ke=0;ke<ae;ke++)nt[ke]=arguments[ke+2];V.children=nt}return ue(b.type,W,void 0,void 0,fe,V)},se.createContext=function(b){return b={$$typeof:x,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},se.createElement=function(b,B,K){var V,W={},fe=null;if(B!=null)for(V in B.key!==void 0&&(fe=""+B.key),B)oe.call(B,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(W[V]=B[V]);var ae=arguments.length-2;if(ae===1)W.children=K;else if(1<ae){for(var nt=Array(ae),ke=0;ke<ae;ke++)nt[ke]=arguments[ke+2];W.children=nt}if(b&&b.defaultProps)for(V in ae=b.defaultProps,ae)W[V]===void 0&&(W[V]=ae[V]);return ue(b,fe,void 0,void 0,null,W)},se.createRef=function(){return{current:null}},se.forwardRef=function(b){return{$$typeof:E,render:b}},se.isValidElement=X,se.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:I}},se.memo=function(b,B){return{$$typeof:p,type:b,compare:B===void 0?null:B}},se.startTransition=function(b){var B=J.T,K={};J.T=K;try{var V=b(),W=J.S;W!==null&&W(K,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(je,ee)}catch(fe){ee(fe)}finally{J.T=B}},se.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},se.use=function(b){return J.H.use(b)},se.useActionState=function(b,B,K){return J.H.useActionState(b,B,K)},se.useCallback=function(b,B){return J.H.useCallback(b,B)},se.useContext=function(b){return J.H.useContext(b)},se.useDebugValue=function(){},se.useDeferredValue=function(b,B){return J.H.useDeferredValue(b,B)},se.useEffect=function(b,B,K){var V=J.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(b,B)},se.useId=function(){return J.H.useId()},se.useImperativeHandle=function(b,B,K){return J.H.useImperativeHandle(b,B,K)},se.useInsertionEffect=function(b,B){return J.H.useInsertionEffect(b,B)},se.useLayoutEffect=function(b,B){return J.H.useLayoutEffect(b,B)},se.useMemo=function(b,B){return J.H.useMemo(b,B)},se.useOptimistic=function(b,B){return J.H.useOptimistic(b,B)},se.useReducer=function(b,B,K){return J.H.useReducer(b,B,K)},se.useRef=function(b){return J.H.useRef(b)},se.useState=function(b){return J.H.useState(b)},se.useSyncExternalStore=function(b,B,K){return J.H.useSyncExternalStore(b,B,K)},se.useTransition=function(){return J.H.useTransition()},se.version="19.1.0",se}var Wm;function Jo(){return Wm||(Wm=1,Oo.exports=tg()),Oo.exports}var A=Jo();const ag=$0(A);var _o={exports:{}},Rn={},Uo={exports:{}},Bo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function ig(){return $m||($m=1,function(r){function m(R,I){var ee=R.length;R.push(I);e:for(;0<ee;){var je=ee-1>>>1,b=R[je];if(0<f(b,I))R[je]=I,R[ee]=b,ee=je;else break e}}function d(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var I=R[0],ee=R.pop();if(ee!==I){R[0]=ee;e:for(var je=0,b=R.length,B=b>>>1;je<B;){var K=2*(je+1)-1,V=R[K],W=K+1,fe=R[W];if(0>f(V,ee))W<b&&0>f(fe,V)?(R[je]=fe,R[W]=ee,je=W):(R[je]=V,R[K]=ee,je=K);else if(W<b&&0>f(fe,ee))R[je]=fe,R[W]=ee,je=W;else break e}}return I}function f(R,I){var ee=R.sortIndex-I.sortIndex;return ee!==0?ee:R.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var x=Date,E=x.now();r.unstable_now=function(){return x.now()-E}}var w=[],p=[],y=1,j=null,M=3,L=!1,Y=!1,G=!1,H=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function ie(R){for(var I=d(p);I!==null;){if(I.callback===null)c(p);else if(I.startTime<=R)c(p),I.sortIndex=I.expirationTime,m(w,I);else break;I=d(p)}}function J(R){if(G=!1,ie(R),!Y)if(d(w)!==null)Y=!0,oe||(oe=!0,Me());else{var I=d(p);I!==null&&Ie(J,I.startTime-R)}}var oe=!1,ue=-1,Q=5,X=-1;function ne(){return H?!0:!(r.unstable_now()-X<Q)}function we(){if(H=!1,oe){var R=r.unstable_now();X=R;var I=!0;try{e:{Y=!1,G&&(G=!1,U(ue),ue=-1),L=!0;var ee=M;try{t:{for(ie(R),j=d(w);j!==null&&!(j.expirationTime>R&&ne());){var je=j.callback;if(typeof je=="function"){j.callback=null,M=j.priorityLevel;var b=je(j.expirationTime<=R);if(R=r.unstable_now(),typeof b=="function"){j.callback=b,ie(R),I=!0;break t}j===d(w)&&c(w),ie(R)}else c(w);j=d(w)}if(j!==null)I=!0;else{var B=d(p);B!==null&&Ie(J,B.startTime-R),I=!1}}break e}finally{j=null,M=ee,L=!1}I=void 0}}finally{I?Me():oe=!1}}}var Me;if(typeof q=="function")Me=function(){q(we)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,$e=Fe.port2;Fe.port1.onmessage=we,Me=function(){$e.postMessage(null)}}else Me=function(){S(we,0)};function Ie(R,I){ue=S(function(){R(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(R){switch(M){case 1:case 2:case 3:var I=3;break;default:I=M}var ee=M;M=I;try{return R()}finally{M=ee}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ee=M;M=R;try{return I()}finally{M=ee}},r.unstable_scheduleCallback=function(R,I,ee){var je=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?je+ee:je):ee=je,R){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=ee+b,R={id:y++,callback:I,priorityLevel:R,startTime:ee,expirationTime:b,sortIndex:-1},ee>je?(R.sortIndex=ee,m(p,R),d(w)===null&&R===d(p)&&(G?(U(ue),ue=-1):G=!0,Ie(J,ee-je))):(R.sortIndex=b,m(w,R),Y||L||(Y=!0,oe||(oe=!0,Me()))),R},r.unstable_shouldYield=ne,r.unstable_wrapCallback=function(R){var I=M;return function(){var ee=M;M=I;try{return R.apply(this,arguments)}finally{M=ee}}}}(Bo)),Bo}var Pm;function ng(){return Pm||(Pm=1,Uo.exports=ig()),Uo.exports}var Lo={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function sg(){if(ef)return Je;ef=1;var r=Jo();function m(w){var p="https://react.dev/errors/"+w;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+w+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(m(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(w,p,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:j==null?null:""+j,children:w,containerInfo:p,implementation:y}}var x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(w,p){if(w==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Je.createPortal=function(w,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(m(299));return h(w,p,null,y)},Je.flushSync=function(w){var p=x.T,y=c.p;try{if(x.T=null,c.p=2,w)return w()}finally{x.T=p,c.p=y,c.d.f()}},Je.preconnect=function(w,p){typeof w=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(w,p))},Je.prefetchDNS=function(w){typeof w=="string"&&c.d.D(w)},Je.preinit=function(w,p){if(typeof w=="string"&&p&&typeof p.as=="string"){var y=p.as,j=E(y,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?c.d.S(w,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:j,integrity:M,fetchPriority:L}):y==="script"&&c.d.X(w,{crossOrigin:j,integrity:M,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(w,p){if(typeof w=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=E(p.as,p.crossOrigin);c.d.M(w,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(w)},Je.preload=function(w,p){if(typeof w=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,j=E(y,p.crossOrigin);c.d.L(w,y,{crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(w,p){if(typeof w=="string")if(p){var y=E(p.as,p.crossOrigin);c.d.m(w,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(w)},Je.requestFormReset=function(w){c.d.r(w)},Je.unstable_batchedUpdates=function(w,p){return w(p)},Je.useFormState=function(w,p,y){return x.H.useFormState(w,p,y)},Je.useFormStatus=function(){return x.H.useHostTransitionStatus()},Je.version="19.1.0",Je}var tf;function Vf(){if(tf)return Lo.exports;tf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),Lo.exports=sg(),Lo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function lg(){if(af)return Rn;af=1;var r=ng(),m=Jo(),d=Vf();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(h(e)!==e)throw Error(c(188))}function w(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var s=a.return;if(s===null)break;var l=s.alternate;if(l===null){if(i=s.return,i!==null){a=i;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===a)return E(s),e;if(l===i)return E(s),t;l=l.sibling}throw Error(c(188))}if(a.return!==i.return)a=s,i=l;else{for(var o=!1,u=s.child;u;){if(u===a){o=!0,a=s,i=l;break}if(u===i){o=!0,i=s,a=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===a){o=!0,a=l,i=s;break}if(u===i){o=!0,i=l,a=s;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,j=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),q=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function $e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case H:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case q:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return t=e.displayName||null,t!==null?t:$e(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return $e(e(t))}catch{}}return null}var Ie=Array.isArray,R=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},je=[],b=-1;function B(e){return{current:e}}function K(e){0>b||(e.current=je[b],je[b]=null,b--)}function V(e,t){b++,je[b]=e.current,e.current=t}var W=B(null),fe=B(null),ae=B(null),nt=B(null);function ke(e,t){switch(V(ae,t),V(fe,e),V(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jm(t),e=Am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(W),V(W,e)}function ta(){K(W),K(fe),K(ae)}function xl(e){e.memoizedState!==null&&V(nt,e);var t=W.current,a=Am(t,e.type);t!==a&&(V(fe,e),V(W,a))}function qn(e){fe.current===e&&(K(W),K(fe)),nt.current===e&&(K(nt),zn._currentValue=ee)}var bl=Object.prototype.hasOwnProperty,yl=r.unstable_scheduleCallback,vl=r.unstable_cancelCallback,Tp=r.unstable_shouldYield,Mp=r.unstable_requestPaint,Et=r.unstable_now,Dp=r.unstable_getCurrentPriorityLevel,ac=r.unstable_ImmediatePriority,ic=r.unstable_UserBlockingPriority,Qn=r.unstable_NormalPriority,Rp=r.unstable_LowPriority,nc=r.unstable_IdlePriority,Op=r.log,_p=r.unstable_setDisableYieldValue,Oi=null,st=null;function aa(e){if(typeof Op=="function"&&_p(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Oi,e)}catch{}}var lt=Math.clz32?Math.clz32:Lp,Up=Math.log,Bp=Math.LN2;function Lp(e){return e>>>=0,e===0?32:31-(Up(e)/Bp|0)|0}var Xn=256,Vn=4194304;function Sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var s=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~l,i!==0?s=Sa(i):(o&=u,o!==0?s=Sa(o):a||(a=u&~e,a!==0&&(s=Sa(a))))):(u=i&~l,u!==0?s=Sa(u):o!==0?s=Sa(o):a||(a=i&~e,a!==0&&(s=Sa(a)))),s===0?0:t!==0&&t!==s&&(t&l)===0&&(l=s&-s,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:s}function _i(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sc(){var e=Xn;return Xn<<=1,(Xn&4194048)===0&&(Xn=256),e}function lc(){var e=Vn;return Vn<<=1,(Vn&62914560)===0&&(Vn=4194304),e}function wl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ui(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yp(e,t,a,i,s,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,g=e.expirationTimes,z=e.hiddenUpdates;for(a=o&~a;0<a;){var D=31-lt(a),_=1<<D;u[D]=0,g[D]=-1;var C=z[D];if(C!==null)for(z[D]=null,D=0;D<C.length;D++){var T=C[D];T!==null&&(T.lane&=-536870913)}a&=~_}i!==0&&rc(e,i,0),l!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function rc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-lt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function oc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-lt(a),s=1<<i;s&t|e[i]&t&&(e[i]|=t),a&=~s}}function jl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Al(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cc(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:qm(e.type))}function Gp(e,t){var a=I.p;try{return I.p=e,t()}finally{I.p=a}}var ia=Math.random().toString(36).slice(2),Ke="__reactFiber$"+ia,Pe="__reactProps$"+ia,Va="__reactContainer$"+ia,Nl="__reactEvents$"+ia,qp="__reactListeners$"+ia,Qp="__reactHandles$"+ia,dc="__reactResources$"+ia,Bi="__reactMarker$"+ia;function kl(e){delete e[Ke],delete e[Pe],delete e[Nl],delete e[qp],delete e[Qp]}function Ia(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Va]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=zm(e);e!==null;){if(a=e[Ke])return a;e=zm(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[Ke]||e[Va]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Za(e){var t=e[dc];return t||(t=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Bi]=!0}var uc=new Set,mc={};function za(e,t){Ja(e,t),Ja(e+"Capture",t)}function Ja(e,t){for(mc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},pc={};function Vp(e){return bl.call(pc,e)?!0:bl.call(fc,e)?!1:Xp.test(e)?pc[e]=!0:(fc[e]=!0,!1)}function Kn(e,t,a){if(Vp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ut(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var Sl,hc;function Fa(e){if(Sl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||"",hc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sl+e+hc}var zl=!1;function El(e,t){if(!e||zl)return"";zl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(T){var C=T}Reflect.construct(e,[],_)}else{try{_.call()}catch(T){C=T}e.call(_.prototype)}}else{try{throw Error()}catch(T){C=T}(_=e())&&typeof _.catch=="function"&&_.catch(function(){})}}catch(T){if(T&&C&&typeof T.stack=="string")return[T.stack,C.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],u=l[1];if(o&&u){var g=o.split(`
`),z=u.split(`
`);for(s=i=0;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;for(;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;if(i===g.length||s===z.length)for(i=g.length-1,s=z.length-1;1<=i&&0<=s&&g[i]!==z[s];)s--;for(;1<=i&&0<=s;i--,s--)if(g[i]!==z[s]){if(i!==1||s!==1)do if(i--,s--,0>s||g[i]!==z[s]){var D=`
`+g[i].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=i&&0<=s);break}}}finally{zl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Fa(a):""}function Ip(e){switch(e.tag){case 26:case 27:case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return El(e.type,!1);case 11:return El(e.type.render,!1);case 1:return El(e.type,!0);case 31:return Fa("Activity");default:return""}}function gc(e){try{var t="";do t+=Ip(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(e){var t=xc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jn(e){e._valueTracker||(e._valueTracker=Kp(e))}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=xc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zp=/[\n"\\]/g;function ht(e){return e.replace(Zp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cl(e,t,a,i,s,l,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pt(t)):e.value!==""+pt(t)&&(e.value=""+pt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Tl(e,o,pt(t)):a!=null?Tl(e,o,pt(a)):i!=null&&e.removeAttribute("value"),s==null&&l!=null&&(e.defaultChecked=!!l),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+pt(u):e.removeAttribute("name")}function yc(e,t,a,i,s,l,o,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;a=a!=null?""+pt(a):"",t=t!=null?""+pt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Tl(e,t,a){t==="number"&&Fn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Wa(e,t,a,i){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&i&&(e[a].defaultSelected=!0)}else{for(a=""+pt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function vc(e,t,a){if(t!=null&&(t=""+pt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+pt(a):""}function wc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(Ie(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=pt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function $a(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Jp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ac(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&a[s]!==i&&jc(e,s,i)}else for(var l in t)t.hasOwnProperty(l)&&jc(e,l,t[l])}function Ml(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wn(e){return Wp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Dl=null;function Rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,ei=null;function Nc(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var s=i[Pe]||null;if(!s)throw Error(c(90));Cl(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&bc(i)}break e;case"textarea":vc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Wa(e,!!a.multiple,t,!1)}}}var Ol=!1;function kc(e,t,a){if(Ol)return e(t,a);Ol=!0;try{var i=e(t);return i}finally{if(Ol=!1,(Pa!==null||ei!==null)&&(Us(),Pa&&(t=Pa,e=ei,ei=Pa=null,Nc(t),e)))for(t=0;t<e.length;t++)Nc(e[t])}}function Hi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Pe]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=!1;if(Bt)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{_l=!1}var na=null,Ul=null,$n=null;function Sc(){if($n)return $n;var e,t=Ul,a=t.length,i,s="value"in na?na.value:na.textContent,l=s.length;for(e=0;e<a&&t[e]===s[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===s[l-i];i++);return $n=s.slice(e,1<i?1-i:void 0)}function Pn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function es(){return!0}function zc(){return!1}function et(e){function t(a,i,s,l,o){this._reactName=a,this._targetInst=s,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?es:zc,this.isPropagationStopped=zc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=es)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=es)},persist:function(){},isPersistent:es}),t}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=et(Ea),Gi=y({},Ea,{view:0,detail:0}),$p=et(Gi),Bl,Ll,qi,as=y({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Bl=e.screenX-qi.screenX,Ll=e.screenY-qi.screenY):Ll=Bl=0,qi=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Ec=et(as),Pp=y({},as,{dataTransfer:0}),eh=et(Pp),th=y({},Gi,{relatedTarget:0}),Hl=et(th),ah=y({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=et(ah),nh=y({},Ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=et(nh),lh=y({},Ea,{data:0}),Cc=et(lh),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function Yl(){return dh}var uh=y({},Gi,{key:function(e){if(e.key){var t=rh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mh=et(uh),fh=y({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tc=et(fh),ph=y({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),hh=et(ph),gh=y({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=et(gh),bh=y({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=et(bh),vh=y({},Ea,{newState:0,oldState:0}),wh=et(vh),jh=[9,13,27,32],Gl=Bt&&"CompositionEvent"in window,Qi=null;Bt&&"documentMode"in document&&(Qi=document.documentMode);var Ah=Bt&&"TextEvent"in window&&!Qi,Mc=Bt&&(!Gl||Qi&&8<Qi&&11>=Qi),Dc=" ",Rc=!1;function Oc(e,t){switch(e){case"keyup":return jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ti=!1;function Nh(e,t){switch(e){case"compositionend":return _c(t);case"keypress":return t.which!==32?null:(Rc=!0,Dc);case"textInput":return e=t.data,e===Dc&&Rc?null:e;default:return null}}function kh(e,t){if(ti)return e==="compositionend"||!Gl&&Oc(e,t)?(e=Sc(),$n=Ul=na=null,ti=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sh[e.type]:t==="textarea"}function Bc(e,t,a,i){Pa?ei?ei.push(i):ei=[i]:Pa=i,t=qs(t,"onChange"),0<t.length&&(a=new ts("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Xi=null,Vi=null;function zh(e){xm(e,0)}function is(e){var t=Li(e);if(bc(t))return e}function Lc(e,t){if(e==="change")return t}var Hc=!1;if(Bt){var ql;if(Bt){var Ql="oninput"in document;if(!Ql){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Ql=typeof Yc.oninput=="function"}ql=Ql}else ql=!1;Hc=ql&&(!document.documentMode||9<document.documentMode)}function Gc(){Xi&&(Xi.detachEvent("onpropertychange",qc),Vi=Xi=null)}function qc(e){if(e.propertyName==="value"&&is(Vi)){var t=[];Bc(t,Vi,e,Rl(e)),kc(zh,t)}}function Eh(e,t,a){e==="focusin"?(Gc(),Xi=t,Vi=a,Xi.attachEvent("onpropertychange",qc)):e==="focusout"&&Gc()}function Ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(Vi)}function Th(e,t){if(e==="click")return is(t)}function Mh(e,t){if(e==="input"||e==="change")return is(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Dh;function Ii(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var s=a[i];if(!bl.call(t,s)||!rt(e[s],t[s]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var a=Qc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qc(a)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Fn(e.document)}return t}function Xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rh=Bt&&"documentMode"in document&&11>=document.documentMode,ai=null,Vl=null,Ki=null,Il=!1;function Kc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Il||ai==null||ai!==Fn(i)||(i=ai,"selectionStart"in i&&Xl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&Ii(Ki,i)||(Ki=i,i=qs(Vl,"onSelect"),0<i.length&&(t=new ts("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=ai)))}function Ca(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ii={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Kl={},Zc={};Bt&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function Ta(e){if(Kl[e])return Kl[e];if(!ii[e])return e;var t=ii[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Zc)return Kl[e]=t[a];return e}var Jc=Ta("animationend"),Fc=Ta("animationiteration"),Wc=Ta("animationstart"),Oh=Ta("transitionrun"),_h=Ta("transitionstart"),Uh=Ta("transitioncancel"),$c=Ta("transitionend"),Pc=new Map,Zl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zl.push("scrollEnd");function Nt(e,t){Pc.set(e,t),za(t,[e])}var ed=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var a=ed.get(e);return a!==void 0?a:(t={value:e,source:t,stack:gc(t)},ed.set(e,t),t)}return{value:e,source:t,stack:gc(t)}}var xt=[],ni=0,Jl=0;function ns(){for(var e=ni,t=Jl=ni=0;t<e;){var a=xt[t];xt[t++]=null;var i=xt[t];xt[t++]=null;var s=xt[t];xt[t++]=null;var l=xt[t];if(xt[t++]=null,i!==null&&s!==null){var o=i.pending;o===null?s.next=s:(s.next=o.next,o.next=s),i.pending=s}l!==0&&td(a,s,l)}}function ss(e,t,a,i){xt[ni++]=e,xt[ni++]=t,xt[ni++]=a,xt[ni++]=i,Jl|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Fl(e,t,a,i){return ss(e,t,a,i),ls(e)}function si(e,t){return ss(e,null,null,t),ls(e)}function td(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var s=!1,l=e.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(s=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,s&&t!==null&&(s=31-lt(a),e=l.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=a|536870912),l):null}function ls(e){if(50<yn)throw yn=0,ao=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function Bh(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,i){return new Bh(e,t,a,i)}function Wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ad(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rs(e,t,a,i,s,l){var o=0;if(i=e,typeof e=="function")Wl(e)&&(o=1);else if(typeof e=="string")o=H0(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=ot(31,a,t,s),e.elementType=X,e.lanes=l,e;case Y:return Ma(a.children,s,l,t);case G:o=8,s|=24;break;case H:return e=ot(12,a,t,s|2),e.elementType=H,e.lanes=l,e;case J:return e=ot(13,a,t,s),e.elementType=J,e.lanes=l,e;case oe:return e=ot(19,a,t,s),e.elementType=oe,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case q:o=10;break e;case U:o=9;break e;case ie:o=11;break e;case ue:o=14;break e;case Q:o=16,i=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=ot(o,a,t,s),t.elementType=e,t.type=i,t.lanes=l,t}function Ma(e,t,a,i){return e=ot(7,e,i,t),e.lanes=a,e}function $l(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function Pl(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ri=[],oi=0,os=null,cs=0,bt=[],yt=0,Da=null,Ht=1,Yt="";function Ra(e,t){ri[oi++]=cs,ri[oi++]=os,os=e,cs=t}function id(e,t,a){bt[yt++]=Ht,bt[yt++]=Yt,bt[yt++]=Da,Da=e;var i=Ht;e=Yt;var s=32-lt(i)-1;i&=~(1<<s),a+=1;var l=32-lt(t)+s;if(30<l){var o=s-s%5;l=(i&(1<<o)-1).toString(32),i>>=o,s-=o,Ht=1<<32-lt(t)+s|a<<s|i,Yt=l+e}else Ht=1<<l|a<<s|i,Yt=e}function er(e){e.return!==null&&(Ra(e,1),id(e,1,0))}function tr(e){for(;e===os;)os=ri[--oi],ri[oi]=null,cs=ri[--oi],ri[oi]=null;for(;e===Da;)Da=bt[--yt],bt[yt]=null,Yt=bt[--yt],bt[yt]=null,Ht=bt[--yt],bt[yt]=null}var We=null,Ce=null,he=!1,Oa=null,Ct=!1,ar=Error(c(519));function _a(e){var t=Error(c(418,""));throw Fi(gt(t,e)),ar}function nd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Ke]=e,t[Pe]=i,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<wn.length;a++)de(wn[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),yc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Jn(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),wc(t,i.value,i.defaultValue,i.children),Jn(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||wm(t.textContent,a)?(i.popover!=null&&(de("beforetoggle",t),de("toggle",t)),i.onScroll!=null&&de("scroll",t),i.onScrollEnd!=null&&de("scrollend",t),i.onClick!=null&&(t.onclick=Qs),t=!0):t=!1,t||_a(e)}function sd(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:We=We.return}}function Zi(e){if(e!==We)return!1;if(!he)return sd(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yo(e.type,e.memoizedProps)),a=!a),a&&Ce&&_a(e),sd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ce=St(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ce=null}}else t===27?(t=Ce,va(e.type)?(e=Ao,Ao=null,Ce=e):Ce=t):Ce=We?St(e.stateNode.nextSibling):null;return!0}function Ji(){Ce=We=null,he=!1}function ld(){var e=Oa;return e!==null&&(it===null?it=e:it.push.apply(it,e),Oa=null),e}function Fi(e){Oa===null?Oa=[e]:Oa.push(e)}var ir=B(null),Ua=null,Gt=null;function sa(e,t,a){V(ir,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=ir.current,K(ir)}function nr(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function sr(e,t,a,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){var o=s.child;l=l.firstContext;e:for(;l!==null;){var u=l;l=s;for(var g=0;g<t.length;g++)if(u.context===t[g]){l.lanes|=a,u=l.alternate,u!==null&&(u.lanes|=a),nr(l.return,a,e),i||(o=null);break e}l=u.next}}else if(s.tag===18){if(o=s.return,o===null)throw Error(c(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),nr(o,a,e),o=null}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}}function Wi(e,t,a,i){e=null;for(var s=t,l=!1;s!==null;){if(!l){if((s.flags&524288)!==0)l=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var o=s.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=s.type;rt(s.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(s===nt.current){if(o=s.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(zn):e=[zn])}s=s.return}e!==null&&sr(t,e,a,i),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Ua=e,Gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return rd(Ua,e)}function us(e,t){return Ua===null&&Ba(e),rd(e,t)}function rd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Gt===null){if(e===null)throw Error(c(308));Gt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gt=Gt.next=t;return a}var Lh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Hh=r.unstable_scheduleCallback,Yh=r.unstable_NormalPriority,Ue={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lr(){return{controller:new Lh,data:new Map,refCount:0}}function $i(e){e.refCount--,e.refCount===0&&Hh(Yh,function(){e.controller.abort()})}var Pi=null,rr=0,ci=0,di=null;function Gh(e,t){if(Pi===null){var a=Pi=[];rr=0,ci=co(),di={status:"pending",value:void 0,then:function(i){a.push(i)}}}return rr++,t.then(od,od),t}function od(){if(--rr===0&&Pi!==null){di!==null&&(di.status="fulfilled");var e=Pi;Pi=null,ci=0,di=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qh(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),i}var cd=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),cd!==null&&cd(e,t)};var La=B(null);function or(){var e=La.current;return e!==null?e:Ne.pooledCache}function ms(e,t){t===null?V(La,La.current):V(La,t.pool)}function dd(){var e=or();return e===null?null:{parent:Ue._currentValue,pool:e}}var en=Error(c(460)),ud=Error(c(474)),fs=Error(c(542)),cr={then:function(){}};function md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ps(){}function fd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ps,ps),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hd(e),e;default:if(typeof t.status=="string")t.then(ps,ps);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hd(e),e}throw tn=t,en}}var tn=null;function pd(){if(tn===null)throw Error(c(459));var e=tn;return tn=null,e}function hd(e){if(e===en||e===fs)throw Error(c(483))}var la=!1;function dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ur(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ls(e),td(e,null,a),t}return ss(e,i,t,a),ls(e)}function an(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,oc(e,a)}}function mr(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var s=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?s=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?s=l=t:l=l.next=t}else s=l=t;a={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var fr=!1;function nn(){if(fr){var e=di;if(e!==null)throw e}}function sn(e,t,a,i){fr=!1;var s=e.updateQueue;la=!1;var l=s.firstBaseUpdate,o=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var g=u,z=g.next;g.next=null,o===null?l=z:o.next=z,o=g;var D=e.alternate;D!==null&&(D=D.updateQueue,u=D.lastBaseUpdate,u!==o&&(u===null?D.firstBaseUpdate=z:u.next=z,D.lastBaseUpdate=g))}if(l!==null){var _=s.baseState;o=0,D=z=g=null,u=l;do{var C=u.lane&-536870913,T=C!==u.lane;if(T?(me&C)===C:(i&C)===C){C!==0&&C===ci&&(fr=!0),D!==null&&(D=D.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var te=e,$=u;C=t;var ve=a;switch($.tag){case 1:if(te=$.payload,typeof te=="function"){_=te.call(ve,_,C);break e}_=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=$.payload,C=typeof te=="function"?te.call(ve,_,C):te,C==null)break e;_=y({},_,C);break e;case 2:la=!0}}C=u.callback,C!==null&&(e.flags|=64,T&&(e.flags|=8192),T=s.callbacks,T===null?s.callbacks=[C]:T.push(C))}else T={lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},D===null?(z=D=T,g=_):D=D.next=T,o|=C;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;T=u,u=T.next,T.next=null,s.lastBaseUpdate=T,s.shared.pending=null}}while(!0);D===null&&(g=_),s.baseState=g,s.firstBaseUpdate=z,s.lastBaseUpdate=D,l===null&&(s.shared.lanes=0),ga|=o,e.lanes=o,e.memoizedState=_}}function gd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function xd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gd(a[e],t)}var ui=B(null),hs=B(0);function bd(e,t){e=Jt,V(hs,e),V(ui,t),Jt=e|t.baseLanes}function pr(){V(hs,Jt),V(ui,ui.current)}function hr(){Jt=hs.current,K(ui),K(hs)}var ca=0,le=null,be=null,Oe=null,gs=!1,mi=!1,Ha=!1,xs=0,ln=0,fi=null,Qh=0;function De(){throw Error(c(321))}function gr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function xr(e,t,a,i,s,l){return ca=l,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?tu:au,Ha=!1,l=a(i,s),Ha=!1,mi&&(l=vd(t,a,i,s)),yd(e),l}function yd(e){R.H=As;var t=be!==null&&be.next!==null;if(ca=0,Oe=be=le=null,gs=!1,ln=0,fi=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&ds(e)&&(He=!0))}function vd(e,t,a,i){le=e;var s=0;do{if(mi&&(fi=null),ln=0,mi=!1,25<=s)throw Error(c(301));if(s+=1,Oe=be=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}R.H=Fh,l=t(a,i)}while(mi);return l}function Xh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?rn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(le.flags|=1024),t}function br(){var e=xs!==0;return xs=0,e}function yr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vr(e){if(gs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gs=!1}ca=0,Oe=be=le=null,mi=!1,ln=xs=0,fi=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?le.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function _e(){if(be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Oe===null?le.memoizedState:Oe.next;if(t!==null)Oe=t,be=e;else{if(e===null)throw le.alternate===null?Error(c(467)):Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Oe===null?le.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function wr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rn(e){var t=ln;return ln+=1,fi===null&&(fi=[]),e=fd(fi,e,t),t=le,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?tu:au),e}function bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rn(e);if(e.$$typeof===q)return Ze(e)}throw Error(c(438,String(e)))}function jr(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=le.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=wr(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ne;return t.index++,a}function Qt(e,t){return typeof t=="function"?t(e):t}function ys(e){var t=_e();return Ar(t,be,e)}function Ar(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var s=e.baseQueue,l=i.pending;if(l!==null){if(s!==null){var o=s.next;s.next=l.next,l.next=o}t.baseQueue=s=l,i.pending=null}if(l=e.baseState,s===null)e.memoizedState=l;else{t=s.next;var u=o=null,g=null,z=t,D=!1;do{var _=z.lane&-536870913;if(_!==z.lane?(me&_)===_:(ca&_)===_){var C=z.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),_===ci&&(D=!0);else if((ca&C)===C){z=z.next,C===ci&&(D=!0);continue}else _={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(u=g=_,o=l):g=g.next=_,le.lanes|=C,ga|=C;_=z.action,Ha&&a(l,_),l=z.hasEagerState?z.eagerState:a(l,_)}else C={lane:_,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(u=g=C,o=l):g=g.next=C,le.lanes|=_,ga|=_;z=z.next}while(z!==null&&z!==t);if(g===null?o=l:g.next=u,!rt(l,e.memoizedState)&&(He=!0,D&&(a=di,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=g,i.lastRenderedState=l}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Nr(e){var t=_e(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,s=a.pending,l=t.memoizedState;if(s!==null){a.pending=null;var o=s=s.next;do l=e(l,o.action),o=o.next;while(o!==s);rt(l,t.memoizedState)||(He=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,i]}function wd(e,t,a){var i=le,s=_e(),l=he;if(l){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!rt((be||s).memoizedState,a);o&&(s.memoizedState=a,He=!0),s=s.queue;var u=Nd.bind(null,i,s,e);if(on(2048,8,u,[e]),s.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,pi(9,vs(),Ad.bind(null,i,s,a,t),null),Ne===null)throw Error(c(349));l||(ca&124)!==0||jd(i,t,a)}return a}function jd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=wr(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ad(e,t,a,i){t.value=a,t.getSnapshot=i,kd(t)&&Sd(e)}function Nd(e,t,a){return a(function(){kd(t)&&Sd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function Sd(e){var t=si(e,2);t!==null&&ft(t,e,2)}function kr(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),Ha){aa(!0);try{a()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function zd(e,t,a,i){return e.baseState=a,Ar(e,be,typeof i=="function"?i:Qt)}function Vh(e,t,a,i,s){if(js(e))throw Error(c(485));if(e=t.action,e!==null){var l={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};R.T!==null?a(!0):l.isTransition=!1,i(l),a=t.pending,a===null?(l.next=t.pending=l,Ed(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Ed(e,t){var a=t.action,i=t.payload,s=e.state;if(t.isTransition){var l=R.T,o={};R.T=o;try{var u=a(s,i),g=R.S;g!==null&&g(o,u),Cd(e,t,u)}catch(z){Sr(e,t,z)}finally{R.T=l}}else try{l=a(s,i),Cd(e,t,l)}catch(z){Sr(e,t,z)}}function Cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Td(e,t,i)},function(i){return Sr(e,t,i)}):Td(e,t,a)}function Td(e,t,a){t.status="fulfilled",t.value=a,Md(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ed(e,a)))}function Sr(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Md(t),t=t.next;while(t!==i)}e.action=null}function Md(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dd(e,t){return t}function Rd(e,t){if(he){var a=Ne.formState;if(a!==null){e:{var i=le;if(he){if(Ce){t:{for(var s=Ce,l=Ct;s.nodeType!==8;){if(!l){s=null;break t}if(s=St(s.nextSibling),s===null){s=null;break t}}l=s.data,s=l==="F!"||l==="F"?s:null}if(s){Ce=St(s.nextSibling),i=s.data==="F!";break e}}_a(i)}i=!1}i&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dd,lastRenderedState:t},a.queue=i,a=$d.bind(null,le,i),i.dispatch=a,i=kr(!1),l=Mr.bind(null,le,!1,i.queue),i=tt(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,a=Vh.bind(null,le,s,l,a),s.dispatch=a,i.memoizedState=e,[t,a,!1]}function Od(e){var t=_e();return _d(t,be,e)}function _d(e,t,a){if(t=Ar(e,t,Dd)[0],e=ys(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=rn(t)}catch(o){throw o===en?fs:o}else i=t;t=_e();var s=t.queue,l=s.dispatch;return a!==t.memoizedState&&(le.flags|=2048,pi(9,vs(),Ih.bind(null,s,a),null)),[i,l,e]}function Ih(e,t){e.action=t}function Ud(e){var t=_e(),a=be;if(a!==null)return _d(t,a,e);_e(),t=t.memoizedState,a=_e();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function pi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=le.updateQueue,t===null&&(t=wr(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function vs(){return{destroy:void 0,resource:void 0}}function Bd(){return _e().memoizedState}function ws(e,t,a,i){var s=tt();i=i===void 0?null:i,le.flags|=e,s.memoizedState=pi(1|t,vs(),a,i)}function on(e,t,a,i){var s=_e();i=i===void 0?null:i;var l=s.memoizedState.inst;be!==null&&i!==null&&gr(i,be.memoizedState.deps)?s.memoizedState=pi(t,l,a,i):(le.flags|=e,s.memoizedState=pi(1|t,l,a,i))}function Ld(e,t){ws(8390656,8,e,t)}function Hd(e,t){on(2048,8,e,t)}function Yd(e,t){return on(4,2,e,t)}function Gd(e,t){return on(4,4,e,t)}function qd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qd(e,t,a){a=a!=null?a.concat([e]):null,on(4,4,qd.bind(null,t,e),a)}function zr(){}function Xd(e,t){var a=_e();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&gr(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Vd(e,t){var a=_e();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&gr(t,i[1]))return i[0];if(i=e(),Ha){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[i,t],i}function Er(e,t,a){return a===void 0||(ca&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Zu(),le.lanes|=e,ga|=e,a)}function Id(e,t,a,i){return rt(a,t)?a:ui.current!==null?(e=Er(e,a,i),rt(e,t)||(He=!0),e):(ca&42)===0?(He=!0,e.memoizedState=a):(e=Zu(),le.lanes|=e,ga|=e,t)}function Kd(e,t,a,i,s){var l=I.p;I.p=l!==0&&8>l?l:8;var o=R.T,u={};R.T=u,Mr(e,!1,t,a);try{var g=s(),z=R.S;if(z!==null&&z(u,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=qh(g,i);cn(e,t,D,mt(e))}else cn(e,t,i,mt(e))}catch(_){cn(e,t,{then:function(){},status:"rejected",reason:_},mt())}finally{I.p=l,R.T=o}}function Kh(){}function Cr(e,t,a,i){if(e.tag!==5)throw Error(c(476));var s=Zd(e).queue;Kd(e,s,t,ee,a===null?Kh:function(){return Jd(e),a(i)})}function Zd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jd(e){var t=Zd(e).next.queue;cn(e,t,{},mt())}function Tr(){return Ze(zn)}function Fd(){return _e().memoizedState}function Wd(){return _e().memoizedState}function Zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=ra(a);var i=oa(t,e,a);i!==null&&(ft(i,t,a),an(i,t,a)),t={cache:lr()},e.payload=t;return}t=t.return}}function Jh(e,t,a){var i=mt();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},js(e)?Pd(t,a):(a=Fl(e,t,a,i),a!==null&&(ft(a,e,i),eu(a,t,i)))}function $d(e,t,a){var i=mt();cn(e,t,a,i)}function cn(e,t,a,i){var s={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(js(e))Pd(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,u=l(o,a);if(s.hasEagerState=!0,s.eagerState=u,rt(u,o))return ss(e,t,s,0),Ne===null&&ns(),!1}catch{}finally{}if(a=Fl(e,t,s,i),a!==null)return ft(a,e,i),eu(a,t,i),!0}return!1}function Mr(e,t,a,i){if(i={lane:2,revertLane:co(),action:i,hasEagerState:!1,eagerState:null,next:null},js(e)){if(t)throw Error(c(479))}else t=Fl(e,a,i,2),t!==null&&ft(t,e,2)}function js(e){var t=e.alternate;return e===le||t!==null&&t===le}function Pd(e,t){mi=gs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function eu(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,oc(e,a)}}var As={readContext:Ze,use:bs,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},tu={readContext:Ze,use:bs,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ld,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ws(4194308,4,qd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){ws(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var i=e();if(Ha){aa(!0);try{e()}finally{aa(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=tt();if(a!==void 0){var s=a(t);if(Ha){aa(!0);try{a(t)}finally{aa(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Jh.bind(null,le,e),[i.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=kr(e);var t=e.queue,a=$d.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:zr,useDeferredValue:function(e,t){var a=tt();return Er(a,e,t)},useTransition:function(){var e=kr(!1);return e=Kd.bind(null,le,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=le,s=tt();if(he){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ne===null)throw Error(c(349));(me&124)!==0||jd(i,t,a)}s.memoizedState=a;var l={value:a,getSnapshot:t};return s.queue=l,Ld(Nd.bind(null,i,l,e),[e]),i.flags|=2048,pi(9,vs(),Ad.bind(null,i,l,a,t),null),a},useId:function(){var e=tt(),t=Ne.identifierPrefix;if(he){var a=Yt,i=Ht;a=(i&~(1<<32-lt(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=xs++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Qh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Tr,useFormState:Rd,useActionState:Rd,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mr.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:jr,useCacheRefresh:function(){return tt().memoizedState=Zh.bind(null,le)}},au={readContext:Ze,use:bs,useCallback:Xd,useContext:Ze,useEffect:Hd,useImperativeHandle:Qd,useInsertionEffect:Yd,useLayoutEffect:Gd,useMemo:Vd,useReducer:ys,useRef:Bd,useState:function(){return ys(Qt)},useDebugValue:zr,useDeferredValue:function(e,t){var a=_e();return Id(a,be.memoizedState,e,t)},useTransition:function(){var e=ys(Qt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:rn(e),t]},useSyncExternalStore:wd,useId:Fd,useHostTransitionStatus:Tr,useFormState:Od,useActionState:Od,useOptimistic:function(e,t){var a=_e();return zd(a,be,e,t)},useMemoCache:jr,useCacheRefresh:Wd},Fh={readContext:Ze,use:bs,useCallback:Xd,useContext:Ze,useEffect:Hd,useImperativeHandle:Qd,useInsertionEffect:Yd,useLayoutEffect:Gd,useMemo:Vd,useReducer:Nr,useRef:Bd,useState:function(){return Nr(Qt)},useDebugValue:zr,useDeferredValue:function(e,t){var a=_e();return be===null?Er(a,e,t):Id(a,be.memoizedState,e,t)},useTransition:function(){var e=Nr(Qt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:rn(e),t]},useSyncExternalStore:wd,useId:Fd,useHostTransitionStatus:Tr,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,t){var a=_e();return be!==null?zd(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jr,useCacheRefresh:Wd},hi=null,dn=0;function Ns(e){var t=dn;return dn+=1,hi===null&&(hi=[]),fd(hi,e,t)}function un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ks(e,t){throw t.$$typeof===j?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function iu(e){var t=e._init;return t(e._payload)}function nu(e){function t(N,v){if(e){var k=N.deletions;k===null?(N.deletions=[v],N.flags|=16):k.push(v)}}function a(N,v){if(!e)return null;for(;v!==null;)t(N,v),v=v.sibling;return null}function i(N){for(var v=new Map;N!==null;)N.key!==null?v.set(N.key,N):v.set(N.index,N),N=N.sibling;return v}function s(N,v){return N=Lt(N,v),N.index=0,N.sibling=null,N}function l(N,v,k){return N.index=k,e?(k=N.alternate,k!==null?(k=k.index,k<v?(N.flags|=67108866,v):k):(N.flags|=67108866,v)):(N.flags|=1048576,v)}function o(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function u(N,v,k,O){return v===null||v.tag!==6?(v=$l(k,N.mode,O),v.return=N,v):(v=s(v,k),v.return=N,v)}function g(N,v,k,O){var Z=k.type;return Z===Y?D(N,v,k.props.children,O,k.key):v!==null&&(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Q&&iu(Z)===v.type)?(v=s(v,k.props),un(v,k),v.return=N,v):(v=rs(k.type,k.key,k.props,null,N.mode,O),un(v,k),v.return=N,v)}function z(N,v,k,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=Pl(k,N.mode,O),v.return=N,v):(v=s(v,k.children||[]),v.return=N,v)}function D(N,v,k,O,Z){return v===null||v.tag!==7?(v=Ma(k,N.mode,O,Z),v.return=N,v):(v=s(v,k),v.return=N,v)}function _(N,v,k){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=$l(""+v,N.mode,k),v.return=N,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case M:return k=rs(v.type,v.key,v.props,null,N.mode,k),un(k,v),k.return=N,k;case L:return v=Pl(v,N.mode,k),v.return=N,v;case Q:var O=v._init;return v=O(v._payload),_(N,v,k)}if(Ie(v)||Me(v))return v=Ma(v,N.mode,k,null),v.return=N,v;if(typeof v.then=="function")return _(N,Ns(v),k);if(v.$$typeof===q)return _(N,us(N,v),k);ks(N,v)}return null}function C(N,v,k,O){var Z=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return Z!==null?null:u(N,v,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return k.key===Z?g(N,v,k,O):null;case L:return k.key===Z?z(N,v,k,O):null;case Q:return Z=k._init,k=Z(k._payload),C(N,v,k,O)}if(Ie(k)||Me(k))return Z!==null?null:D(N,v,k,O,null);if(typeof k.then=="function")return C(N,v,Ns(k),O);if(k.$$typeof===q)return C(N,v,us(N,k),O);ks(N,k)}return null}function T(N,v,k,O,Z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return N=N.get(k)||null,u(v,N,""+O,Z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case M:return N=N.get(O.key===null?k:O.key)||null,g(v,N,O,Z);case L:return N=N.get(O.key===null?k:O.key)||null,z(v,N,O,Z);case Q:var re=O._init;return O=re(O._payload),T(N,v,k,O,Z)}if(Ie(O)||Me(O))return N=N.get(k)||null,D(v,N,O,Z,null);if(typeof O.then=="function")return T(N,v,k,Ns(O),Z);if(O.$$typeof===q)return T(N,v,k,us(v,O),Z);ks(v,O)}return null}function te(N,v,k,O){for(var Z=null,re=null,F=v,P=v=0,Ge=null;F!==null&&P<k.length;P++){F.index>P?(Ge=F,F=null):Ge=F.sibling;var pe=C(N,F,k[P],O);if(pe===null){F===null&&(F=Ge);break}e&&F&&pe.alternate===null&&t(N,F),v=l(pe,v,P),re===null?Z=pe:re.sibling=pe,re=pe,F=Ge}if(P===k.length)return a(N,F),he&&Ra(N,P),Z;if(F===null){for(;P<k.length;P++)F=_(N,k[P],O),F!==null&&(v=l(F,v,P),re===null?Z=F:re.sibling=F,re=F);return he&&Ra(N,P),Z}for(F=i(F);P<k.length;P++)Ge=T(F,N,P,k[P],O),Ge!==null&&(e&&Ge.alternate!==null&&F.delete(Ge.key===null?P:Ge.key),v=l(Ge,v,P),re===null?Z=Ge:re.sibling=Ge,re=Ge);return e&&F.forEach(function(ka){return t(N,ka)}),he&&Ra(N,P),Z}function $(N,v,k,O){if(k==null)throw Error(c(151));for(var Z=null,re=null,F=v,P=v=0,Ge=null,pe=k.next();F!==null&&!pe.done;P++,pe=k.next()){F.index>P?(Ge=F,F=null):Ge=F.sibling;var ka=C(N,F,pe.value,O);if(ka===null){F===null&&(F=Ge);break}e&&F&&ka.alternate===null&&t(N,F),v=l(ka,v,P),re===null?Z=ka:re.sibling=ka,re=ka,F=Ge}if(pe.done)return a(N,F),he&&Ra(N,P),Z;if(F===null){for(;!pe.done;P++,pe=k.next())pe=_(N,pe.value,O),pe!==null&&(v=l(pe,v,P),re===null?Z=pe:re.sibling=pe,re=pe);return he&&Ra(N,P),Z}for(F=i(F);!pe.done;P++,pe=k.next())pe=T(F,N,P,pe.value,O),pe!==null&&(e&&pe.alternate!==null&&F.delete(pe.key===null?P:pe.key),v=l(pe,v,P),re===null?Z=pe:re.sibling=pe,re=pe);return e&&F.forEach(function(W0){return t(N,W0)}),he&&Ra(N,P),Z}function ve(N,v,k,O){if(typeof k=="object"&&k!==null&&k.type===Y&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case M:e:{for(var Z=k.key;v!==null;){if(v.key===Z){if(Z=k.type,Z===Y){if(v.tag===7){a(N,v.sibling),O=s(v,k.props.children),O.return=N,N=O;break e}}else if(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Q&&iu(Z)===v.type){a(N,v.sibling),O=s(v,k.props),un(O,k),O.return=N,N=O;break e}a(N,v);break}else t(N,v);v=v.sibling}k.type===Y?(O=Ma(k.props.children,N.mode,O,k.key),O.return=N,N=O):(O=rs(k.type,k.key,k.props,null,N.mode,O),un(O,k),O.return=N,N=O)}return o(N);case L:e:{for(Z=k.key;v!==null;){if(v.key===Z)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){a(N,v.sibling),O=s(v,k.children||[]),O.return=N,N=O;break e}else{a(N,v);break}else t(N,v);v=v.sibling}O=Pl(k,N.mode,O),O.return=N,N=O}return o(N);case Q:return Z=k._init,k=Z(k._payload),ve(N,v,k,O)}if(Ie(k))return te(N,v,k,O);if(Me(k)){if(Z=Me(k),typeof Z!="function")throw Error(c(150));return k=Z.call(k),$(N,v,k,O)}if(typeof k.then=="function")return ve(N,v,Ns(k),O);if(k.$$typeof===q)return ve(N,v,us(N,k),O);ks(N,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,v!==null&&v.tag===6?(a(N,v.sibling),O=s(v,k),O.return=N,N=O):(a(N,v),O=$l(k,N.mode,O),O.return=N,N=O),o(N)):a(N,v)}return function(N,v,k,O){try{dn=0;var Z=ve(N,v,k,O);return hi=null,Z}catch(F){if(F===en||F===fs)throw F;var re=ot(29,F,null,N.mode);return re.lanes=O,re.return=N,re}finally{}}}var gi=nu(!0),su=nu(!1),vt=B(null),Tt=null;function da(e){var t=e.alternate;V(Be,Be.current&1),V(vt,e),Tt===null&&(t===null||ui.current!==null||t.memoizedState!==null)&&(Tt=e)}function lu(e){if(e.tag===22){if(V(Be,Be.current),V(vt,e),Tt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Tt=e)}}else ua()}function ua(){V(Be,Be.current),V(vt,vt.current)}function Xt(e){K(vt),Tt===e&&(Tt=null),K(Be)}var Be=B(0);function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jo(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Dr(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rr={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=mt(),s=ra(i);s.payload=t,a!=null&&(s.callback=a),t=oa(e,s,i),t!==null&&(ft(t,e,i),an(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=mt(),s=ra(i);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=oa(e,s,i),t!==null&&(ft(t,e,i),an(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),i=ra(a);i.tag=2,t!=null&&(i.callback=t),t=oa(e,i,a),t!==null&&(ft(t,e,a),an(t,e,a))}};function ru(e,t,a,i,s,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ii(a,i)||!Ii(s,l):!0}function ou(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Rr.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}var zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function cu(e){zs(e)}function du(e){console.error(e)}function uu(e){zs(e)}function Es(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function mu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Or(e,t,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Es(e,t)},a}function fu(e){return e=ra(e),e.tag=3,e}function pu(e,t,a,i){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var l=i.value;e.payload=function(){return s(l)},e.callback=function(){mu(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){mu(t,a,i),typeof s!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function Wh(e,t,a,i,s){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Wi(t,a,s,!0),a=vt.current,a!==null){switch(a.tag){case 13:return Tt===null?no():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=s,i===cr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),lo(e,i,s)),!1;case 22:return a.flags|=65536,i===cr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),lo(e,i,s)),!1}throw Error(c(435,a.tag))}return lo(e,i,s),no(),!1}if(he)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ar&&(e=Error(c(422),{cause:i}),Fi(gt(e,a)))):(i!==ar&&(t=Error(c(423),{cause:i}),Fi(gt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=gt(i,a),s=Or(e.stateNode,i,s),mr(e,s),Te!==4&&(Te=2)),!1;var l=Error(c(520),{cause:i});if(l=gt(l,a),bn===null?bn=[l]:bn.push(l),Te!==4&&(Te=2),t===null)return!0;i=gt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Or(a.stateNode,i,e),mr(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(xa===null||!xa.has(l))))return a.flags|=65536,s&=-s,a.lanes|=s,s=fu(s),pu(s,e,a,i),mr(a,s),!1}a=a.return}while(a!==null);return!1}var hu=Error(c(461)),He=!1;function qe(e,t,a,i){t.child=e===null?su(t,null,a,i):gi(t,e.child,a,i)}function gu(e,t,a,i,s){a=a.render;var l=t.ref;if("ref"in i){var o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}else o=i;return Ba(t),i=xr(e,t,a,o,l,s),u=br(),e!==null&&!He?(yr(e,t,s),Vt(e,t,s)):(he&&u&&er(t),t.flags|=1,qe(e,t,i,s),t.child)}function xu(e,t,a,i,s){if(e===null){var l=a.type;return typeof l=="function"&&!Wl(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,bu(e,t,l,i,s)):(e=rs(a.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!qr(e,s)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Ii,a(o,i)&&e.ref===t.ref)return Vt(e,t,s)}return t.flags|=1,e=Lt(l,i),e.ref=t.ref,e.return=t,t.child=e}function bu(e,t,a,i,s){if(e!==null){var l=e.memoizedProps;if(Ii(l,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=l,qr(e,s))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Vt(e,t,s)}return _r(e,t,a,i,s)}function yu(e,t,a){var i=t.pendingProps,s=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=l!==null?l.baseLanes|a:a,e!==null){for(s=t.child=e.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;t.childLanes=l&~i}else t.childLanes=0,t.child=null;return vu(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ms(t,l!==null?l.cachePool:null),l!==null?bd(t,l):pr(),lu(t);else return t.lanes=t.childLanes=536870912,vu(e,t,l!==null?l.baseLanes|a:a,a)}else l!==null?(ms(t,l.cachePool),bd(t,l),ua(),t.memoizedState=null):(e!==null&&ms(t,null),pr(),ua());return qe(e,t,s,a),t.child}function vu(e,t,a,i){var s=or();return s=s===null?null:{parent:Ue._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&ms(t,null),pr(),lu(t),e!==null&&Wi(e,t,i,!0),null}function Cs(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _r(e,t,a,i,s){return Ba(t),a=xr(e,t,a,i,void 0,s),i=br(),e!==null&&!He?(yr(e,t,s),Vt(e,t,s)):(he&&i&&er(t),t.flags|=1,qe(e,t,a,s),t.child)}function wu(e,t,a,i,s,l){return Ba(t),t.updateQueue=null,a=vd(t,i,a,s),yd(e),i=br(),e!==null&&!He?(yr(e,t,l),Vt(e,t,l)):(he&&i&&er(t),t.flags|=1,qe(e,t,a,l),t.child)}function ju(e,t,a,i,s){if(Ba(t),t.stateNode===null){var l=li,o=a.contextType;typeof o=="object"&&o!==null&&(l=Ze(o)),l=new a(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Rr,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},dr(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Ze(o):li,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Dr(t,a,o,i),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Rr.enqueueReplaceState(l,l.state,null),sn(t,i,l,s),nn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var u=t.memoizedProps,g=Ya(a,u);l.props=g;var z=l.context,D=a.contextType;o=li,typeof D=="object"&&D!==null&&(o=Ze(D));var _=a.getDerivedStateFromProps;D=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,D||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||z!==o)&&ou(t,l,i,o),la=!1;var C=t.memoizedState;l.state=C,sn(t,i,l,s),nn(),z=t.memoizedState,u||C!==z||la?(typeof _=="function"&&(Dr(t,a,_,i),z=t.memoizedState),(g=la||ru(t,a,g,i,C,z,o))?(D||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),l.props=i,l.state=z,l.context=o,i=g):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,ur(e,t),o=t.memoizedProps,D=Ya(a,o),l.props=D,_=t.pendingProps,C=l.context,z=a.contextType,g=li,typeof z=="object"&&z!==null&&(g=Ze(z)),u=a.getDerivedStateFromProps,(z=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==_||C!==g)&&ou(t,l,i,g),la=!1,C=t.memoizedState,l.state=C,sn(t,i,l,s),nn();var T=t.memoizedState;o!==_||C!==T||la||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof u=="function"&&(Dr(t,a,u,i),T=t.memoizedState),(D=la||ru(t,a,D,i,C,T,g)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(z||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,T,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,T,g)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=T),l.props=i,l.state=T,l.context=g,i=D):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,Cs(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=gi(t,e.child,null,s),t.child=gi(t,null,a,s)):qe(e,t,a,s),t.memoizedState=l.state,e=t.child):e=Vt(e,t,s),e}function Au(e,t,a,i){return Ji(),t.flags|=256,qe(e,t,a,i),t.child}var Ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Br(e){return{baseLanes:e,cachePool:dd()}}function Lr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function Nu(e,t,a){var i=t.pendingProps,s=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),o&&(s=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(s?da(t):ua(),he){var u=Ce,g;if(g=u){e:{for(g=u,u=Ct;g.nodeType!==8;){if(!u){u=null;break e}if(g=St(g.nextSibling),g===null){u=null;break e}}u=g}u!==null?(t.memoizedState={dehydrated:u,treeContext:Da!==null?{id:Ht,overflow:Yt}:null,retryLane:536870912,hydrationErrors:null},g=ot(18,null,null,0),g.stateNode=u,g.return=t,t.child=g,We=t,Ce=null,g=!0):g=!1}g||_a(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return jo(u)?t.lanes=32:t.lanes=536870912,null;Xt(t)}return u=i.children,i=i.fallback,s?(ua(),s=t.mode,u=Ts({mode:"hidden",children:u},s),i=Ma(i,s,a,null),u.return=t,i.return=t,u.sibling=i,t.child=u,s=t.child,s.memoizedState=Br(a),s.childLanes=Lr(e,o,a),t.memoizedState=Ur,i):(da(t),Hr(t,u))}if(g=e.memoizedState,g!==null&&(u=g.dehydrated,u!==null)){if(l)t.flags&256?(da(t),t.flags&=-257,t=Yr(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),s=i.fallback,u=t.mode,i=Ts({mode:"visible",children:i.children},u),s=Ma(s,u,a,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,gi(t,e.child,null,a),i=t.child,i.memoizedState=Br(a),i.childLanes=Lr(e,o,a),t.memoizedState=Ur,t=s);else if(da(t),jo(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var z=o.dgst;o=z,i=Error(c(419)),i.stack="",i.digest=o,Fi({value:i,source:null,stack:null}),t=Yr(e,t,a)}else if(He||Wi(e,t,a,!1),o=(a&e.childLanes)!==0,He||o){if(o=Ne,o!==null&&(i=a&-a,i=(i&42)!==0?1:jl(i),i=(i&(o.suspendedLanes|a))!==0?0:i,i!==0&&i!==g.retryLane))throw g.retryLane=i,si(e,i),ft(o,e,i),hu;u.data==="$?"||no(),t=Yr(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ce=St(u.nextSibling),We=t,he=!0,Oa=null,Ct=!1,e!==null&&(bt[yt++]=Ht,bt[yt++]=Yt,bt[yt++]=Da,Ht=e.id,Yt=e.overflow,Da=t),t=Hr(t,i.children),t.flags|=4096);return t}return s?(ua(),s=i.fallback,u=t.mode,g=e.child,z=g.sibling,i=Lt(g,{mode:"hidden",children:i.children}),i.subtreeFlags=g.subtreeFlags&65011712,z!==null?s=Lt(z,s):(s=Ma(s,u,a,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,u=e.child.memoizedState,u===null?u=Br(a):(g=u.cachePool,g!==null?(z=Ue._currentValue,g=g.parent!==z?{parent:z,pool:z}:g):g=dd(),u={baseLanes:u.baseLanes|a,cachePool:g}),s.memoizedState=u,s.childLanes=Lr(e,o,a),t.memoizedState=Ur,i):(da(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Hr(e,t){return t=Ts({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ts(e,t){return e=ot(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Yr(e,t,a){return gi(t,e.child,null,a),e=Hr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ku(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),nr(e.return,t,a)}function Gr(e,t,a,i,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=a,l.tailMode=s)}function Su(e,t,a){var i=t.pendingProps,s=i.revealOrder,l=i.tail;if(qe(e,t,i.children,a),i=Be.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,a,t);else if(e.tag===19)ku(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(V(Be,i),s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&Ss(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Gr(t,!1,s,a,l);break;case"backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ss(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Gr(t,!0,a,null,l);break;case"together":Gr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function $h(e,t,a){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),sa(t,Ue,e.memoizedState.cache),Ji();break;case 27:case 5:xl(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(da(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Nu(e,t,a):(da(t),e=Vt(e,t,a),e!==null?e.sibling:null);da(t);break;case 19:var s=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Wi(e,t,a,!1),i=(a&t.childLanes)!==0),s){if(i)return Su(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),V(Be,Be.current),i)break;return null;case 22:case 23:return t.lanes=0,yu(e,t,a);case 24:sa(t,Ue,e.memoizedState.cache)}return Vt(e,t,a)}function zu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!qr(e,a)&&(t.flags&128)===0)return He=!1,$h(e,t,a);He=(e.flags&131072)!==0}else He=!1,he&&(t.flags&1048576)!==0&&id(t,cs,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")Wl(i)?(e=Ya(i,e),t.tag=1,t=ju(null,t,i,e,a)):(t.tag=0,t=_r(null,t,i,e,a));else{if(i!=null){if(s=i.$$typeof,s===ie){t.tag=11,t=gu(null,t,i,e,a);break e}else if(s===ue){t.tag=14,t=xu(null,t,i,e,a);break e}}throw t=$e(i)||i,Error(c(306,t,""))}}return t;case 0:return _r(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,s=Ya(i,t.pendingProps),ju(e,t,i,s,a);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var l=t.memoizedState;s=l.element,ur(e,t),sn(t,i,null,a);var o=t.memoizedState;if(i=o.cache,sa(t,Ue,i),i!==l.cache&&sr(t,[Ue],a,!0),nn(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Au(e,t,i,a);break e}else if(i!==s){s=gt(Error(c(424)),t),Fi(s),t=Au(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=St(e.firstChild),We=t,he=!0,Oa=null,Ct=!0,a=su(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ji(),i===s){t=Vt(e,t,a);break e}qe(e,t,i,a)}t=t.child}return t;case 26:return Cs(e,t),e===null?(a=Mm(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,i=Xs(ae.current).createElement(a),i[Ke]=t,i[Pe]=e,Xe(i,a,e),Le(i),t.stateNode=i):t.memoizedState=Mm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xl(t),e===null&&he&&(i=t.stateNode=Em(t.type,t.pendingProps,ae.current),We=t,Ct=!0,s=Ce,va(t.type)?(Ao=s,Ce=St(i.firstChild)):Ce=s),qe(e,t,t.pendingProps.children,a),Cs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((s=i=Ce)&&(i=S0(i,t.type,t.pendingProps,Ct),i!==null?(t.stateNode=i,We=t,Ce=St(i.firstChild),Ct=!1,s=!0):s=!1),s||_a(t)),xl(t),s=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,yo(s,l)?i=null:o!==null&&yo(s,o)&&(t.flags|=32),t.memoizedState!==null&&(s=xr(e,t,Xh,null,null,a),zn._currentValue=s),Cs(e,t),qe(e,t,i,a),t.child;case 6:return e===null&&he&&((e=a=Ce)&&(a=z0(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,We=t,Ce=null,e=!0):e=!1),e||_a(t)),null;case 13:return Nu(e,t,a);case 4:return ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gi(t,null,i,a):qe(e,t,i,a),t.child;case 11:return gu(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,sa(t,t.type,i.value),qe(e,t,i.children,a),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ba(t),s=Ze(s),i=i(s),t.flags|=1,qe(e,t,i,a),t.child;case 14:return xu(e,t,t.type,t.pendingProps,a);case 15:return bu(e,t,t.type,t.pendingProps,a);case 19:return Su(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=Ts(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Lt(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return yu(e,t,a);case 24:return Ba(t),i=Ze(Ue),e===null?(s=or(),s===null&&(s=Ne,l=lr(),s.pooledCache=l,l.refCount++,l!==null&&(s.pooledCacheLanes|=a),s=l),t.memoizedState={parent:i,cache:s},dr(t),sa(t,Ue,s)):((e.lanes&a)!==0&&(ur(e,t),sn(t,null,null,a),nn()),s=e.memoizedState,l=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),sa(t,Ue,i)):(i=l.cache,sa(t,Ue,i),i!==s.cache&&sr(t,[Ue],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function It(e){e.flags|=4}function Eu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Um(t)){if(t=vt.current,t!==null&&((me&4194048)===me?Tt!==null:(me&62914560)!==me&&(me&536870912)===0||t!==Tt))throw tn=cr,ud;e.flags|=8192}}function Ms(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,vi|=t)}function mn(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Ph(e,t,a){var i=t.pendingProps;switch(tr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qt(Ue),ta(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ld())),ze(t),null;case 26:return a=t.memoizedState,e===null?(It(t),a!==null?(ze(t),Eu(t,a)):(ze(t),t.flags&=-16777217)):a?a!==e.memoizedState?(It(t),ze(t),Eu(t,a)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==i&&It(t),ze(t),t.flags&=-16777217),null;case 27:qn(t),a=ae.current;var s=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&It(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=W.current,Zi(t)?nd(t):(e=Em(s,i,a),t.stateNode=e,It(t))}return ze(t),null;case 5:if(qn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&It(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(e=W.current,Zi(t))nd(t);else{switch(s=Xs(ae.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}e[Ke]=t,e[Pe]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=e;e:switch(Xe(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&It(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&It(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,Zi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,s=We,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||wm(e.nodeValue,a)),e||_a(t)}else e=Xs(e).createTextNode(i),e[Ke]=t,t.stateNode=e}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Zi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Ke]=t}else Ji(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else s=ld(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Xt(t),t):(Xt(t),null)}if(Xt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var l=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ms(t,t.updateQueue),ze(t),null;case 4:return ta(),e===null&&po(t.stateNode.containerInfo),ze(t),null;case 10:return qt(t.type),ze(t),null;case 19:if(K(Be),s=t.memoizedState,s===null)return ze(t),null;if(i=(t.flags&128)!==0,l=s.rendering,l===null)if(i)mn(s,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ss(e),l!==null){for(t.flags|=128,mn(s,!1),e=l.updateQueue,t.updateQueue=e,Ms(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ad(a,e),a=a.sibling;return V(Be,Be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Et()>Os&&(t.flags|=128,i=!0,mn(s,!1),t.lanes=4194304)}else{if(!i)if(e=Ss(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ms(t,e),mn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!he)return ze(t),null}else 2*Et()-s.renderingStartTime>Os&&a!==536870912&&(t.flags|=128,i=!0,mn(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(e=s.last,e!==null?e.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Et(),t.sibling=null,e=Be.current,V(Be,i?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Xt(t),hr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ms(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&K(La),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function e0(e,t){switch(tr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(Ue),ta(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qn(t),null;case 13:if(Xt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Be),null;case 4:return ta(),null;case 10:return qt(t.type),null;case 22:case 23:return Xt(t),hr(),e!==null&&K(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(Ue),null;case 25:return null;default:return null}}function Cu(e,t){switch(tr(t),t.tag){case 3:qt(Ue),ta();break;case 26:case 27:case 5:qn(t);break;case 4:ta();break;case 13:Xt(t);break;case 19:K(Be);break;case 10:qt(t.type);break;case 22:case 23:Xt(t),hr(),e!==null&&K(La);break;case 24:qt(Ue)}}function fn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){i=void 0;var l=a.create,o=a.inst;i=l(),o.destroy=i}a=a.next}while(a!==s)}}catch(u){Ae(t,t.return,u)}}function ma(e,t,a){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var l=s.next;i=l;do{if((i.tag&e)===e){var o=i.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,s=t;var g=a,z=u;try{z()}catch(D){Ae(s,g,D)}}}i=i.next}while(i!==l)}}catch(D){Ae(t,t.return,D)}}function Tu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{xd(t,a)}catch(i){Ae(e,e.return,i)}}}function Mu(e,t,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Ae(e,t,i)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(s){Ae(e,t,s)}}function Mt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(s){Ae(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Ae(e,t,s)}else a.current=null}function Du(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(s){Ae(e,e.return,s)}}function Qr(e,t,a){try{var i=e.stateNode;w0(i,e.type,a,t),i[Pe]=t}catch(s){Ae(e,e.return,s)}}function Ru(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function Xr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Qs));else if(i!==4&&(i===27&&va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vr(e,t,a),e=e.sibling;e!==null;)Vr(e,t,a),e=e.sibling}function Ds(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ds(e,t,a),e=e.sibling;e!==null;)Ds(e,t,a),e=e.sibling}function Ou(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Xe(t,i,a),t[Ke]=e,t[Pe]=a}catch(l){Ae(e,e.return,l)}}var Kt=!1,Re=!1,Ir=!1,_u=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function t0(e,t){if(e=e.containerInfo,xo=Fs,e=Ic(e),Xl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var s=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,u=-1,g=-1,z=0,D=0,_=e,C=null;t:for(;;){for(var T;_!==a||s!==0&&_.nodeType!==3||(u=o+s),_!==l||i!==0&&_.nodeType!==3||(g=o+i),_.nodeType===3&&(o+=_.nodeValue.length),(T=_.firstChild)!==null;)C=_,_=T;for(;;){if(_===e)break t;if(C===a&&++z===s&&(u=o),C===l&&++D===i&&(g=o),(T=_.nextSibling)!==null)break;_=C,C=_.parentNode}_=T}a=u===-1||g===-1?null:{start:u,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(bo={focusedElem:e,selectionRange:a},Fs=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,s=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var te=Ya(a.type,s,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(te,l),i.__reactInternalSnapshotBeforeUpdate=e}catch($){Ae(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)wo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Uu(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),i&4&&fn(5,a);break;case 1:if(fa(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ae(a,a.return,o)}else{var s=Ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ae(a,a.return,o)}}i&64&&Tu(a),i&512&&pn(a,a.return);break;case 3:if(fa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{xd(e,t)}catch(o){Ae(a,a.return,o)}}break;case 27:t===null&&i&4&&Ou(a);case 26:case 5:fa(e,a),t===null&&i&4&&Du(a),i&512&&pn(a,a.return);break;case 12:fa(e,a);break;case 13:fa(e,a),i&4&&Hu(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=d0.bind(null,a),E0(e,a))));break;case 22:if(i=a.memoizedState!==null||Kt,!i){t=t!==null&&t.memoizedState!==null||Re,s=Kt;var l=Re;Kt=i,(Re=t)&&!l?pa(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),Kt=s,Re=l}break;case 30:break;default:fa(e,a)}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&kl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,at=!1;function Zt(e,t,a){for(a=a.child;a!==null;)Lu(e,t,a),a=a.sibling}function Lu(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 26:Re||Mt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Mt(a,t);var i=Se,s=at;va(a.type)&&(Se=a.stateNode,at=!1),Zt(e,t,a),An(a.stateNode),Se=i,at=s;break;case 5:Re||Mt(a,t);case 6:if(i=Se,s=at,Se=null,Zt(e,t,a),Se=i,at=s,Se!==null)if(at)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(l){Ae(a,t,l)}else try{Se.removeChild(a.stateNode)}catch(l){Ae(a,t,l)}break;case 18:Se!==null&&(at?(e=Se,Sm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mn(e)):Sm(Se,a.stateNode));break;case 4:i=Se,s=at,Se=a.stateNode.containerInfo,at=!0,Zt(e,t,a),Se=i,at=s;break;case 0:case 11:case 14:case 15:Re||ma(2,a,t),Re||ma(4,a,t),Zt(e,t,a);break;case 1:Re||(Mt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Mu(a,t,i)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Re=(i=Re)||a.memoizedState!==null,Zt(e,t,a),Re=i;break;default:Zt(e,t,a)}}function Hu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mn(e)}catch(a){Ae(t,t.return,a)}}function a0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _u),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _u),t;default:throw Error(c(435,e.tag))}}function Kr(e,t){var a=a0(e);t.forEach(function(i){var s=u0.bind(null,e,i);a.has(i)||(a.add(i),i.then(s,s))})}function ct(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var s=a[i],l=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(va(u.type)){Se=u.stateNode,at=!1;break e}break;case 5:Se=u.stateNode,at=!1;break e;case 3:case 4:Se=u.stateNode.containerInfo,at=!0;break e}u=u.return}if(Se===null)throw Error(c(160));Lu(l,o,s),Se=null,at=!1,l=s.alternate,l!==null&&(l.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}var kt=null;function Yu(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),dt(e),i&4&&(ma(3,e,e.return),fn(3,e),ma(5,e,e.return));break;case 1:ct(t,e),dt(e),i&512&&(Re||a===null||Mt(a,a.return)),i&64&&Kt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var s=kt;if(ct(t,e),dt(e),i&512&&(Re||a===null||Mt(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":l=s.getElementsByTagName("title")[0],(!l||l[Bi]||l[Ke]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=s.createElement(i),s.head.insertBefore(l,s.querySelector("head > title"))),Xe(l,i,a),l[Ke]=e,Le(l),i=l;break e;case"link":var o=Om("link","href",s).get(i+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(l=o[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}l=s.createElement(i),Xe(l,i,a),s.head.appendChild(l);break;case"meta":if(o=Om("meta","content",s).get(i+(a.content||""))){for(u=0;u<o.length;u++)if(l=o[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}l=s.createElement(i),Xe(l,i,a),s.head.appendChild(l);break;default:throw Error(c(468,i))}l[Ke]=e,Le(l),i=l}e.stateNode=i}else _m(s,e.type,e.stateNode);else e.stateNode=Rm(s,i,e.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?_m(s,e.type,e.stateNode):Rm(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Qr(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),dt(e),i&512&&(Re||a===null||Mt(a,a.return)),a!==null&&i&4&&Qr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),dt(e),i&512&&(Re||a===null||Mt(a,a.return)),e.flags&32){s=e.stateNode;try{$a(s,"")}catch(T){Ae(e,e.return,T)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Qr(e,s,a!==null?a.memoizedProps:s)),i&1024&&(Ir=!0);break;case 6:if(ct(t,e),dt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(T){Ae(e,e.return,T)}}break;case 3:if(Ks=null,s=kt,kt=Vs(t.containerInfo),ct(t,e),kt=s,dt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(T){Ae(e,e.return,T)}Ir&&(Ir=!1,Gu(e));break;case 4:i=kt,kt=Vs(e.stateNode.containerInfo),ct(t,e),dt(e),kt=i;break;case 12:ct(t,e),dt(e);break;case 13:ct(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pr=Et()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 22:s=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,z=Kt,D=Re;if(Kt=z||s,Re=D||g,ct(t,e),Re=D,Kt=z,dt(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||g||Kt||Re||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(l=g.stateNode,s)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=g.stateNode;var _=g.memoizedProps.style,C=_!=null&&_.hasOwnProperty("display")?_.display:null;u.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(T){Ae(g,g.return,T)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=s?"":g.memoizedProps}catch(T){Ae(g,g.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Kr(e,a))));break;case 19:ct(t,e),dt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Kr(e,i)));break;case 30:break;case 21:break;default:ct(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Ru(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var s=a.stateNode,l=Xr(e);Ds(e,l,s);break;case 5:var o=a.stateNode;a.flags&32&&($a(o,""),a.flags&=-33);var u=Xr(e);Ds(e,u,o);break;case 3:case 4:var g=a.stateNode.containerInfo,z=Xr(e);Vr(e,z,g);break;default:throw Error(c(161))}}catch(D){Ae(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Uu(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Ga(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Mu(t,t.return,a),Ga(t);break;case 27:An(t.stateNode);case 26:case 5:Mt(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function pa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:pa(s,l,a),fn(4,l);break;case 1:if(pa(s,l,a),i=l,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(z){Ae(i,i.return,z)}if(i=l,s=i.updateQueue,s!==null){var u=i.stateNode;try{var g=s.shared.hiddenCallbacks;if(g!==null)for(s.shared.hiddenCallbacks=null,s=0;s<g.length;s++)gd(g[s],u)}catch(z){Ae(i,i.return,z)}}a&&o&64&&Tu(l),pn(l,l.return);break;case 27:Ou(l);case 26:case 5:pa(s,l,a),a&&i===null&&o&4&&Du(l),pn(l,l.return);break;case 12:pa(s,l,a);break;case 13:pa(s,l,a),a&&o&4&&Hu(s,l);break;case 22:l.memoizedState===null&&pa(s,l,a),pn(l,l.return);break;case 30:break;default:pa(s,l,a)}t=t.sibling}}function Zr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$i(a))}function Jr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e))}function Dt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qu(e,t,a,i),t=t.sibling}function qu(e,t,a,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,i),s&2048&&fn(9,t);break;case 1:Dt(e,t,a,i);break;case 3:Dt(e,t,a,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e)));break;case 12:if(s&2048){Dt(e,t,a,i),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,u=l.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ae(t,t.return,g)}}else Dt(e,t,a,i);break;case 13:Dt(e,t,a,i);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?Dt(e,t,a,i):hn(e,t):l._visibility&2?Dt(e,t,a,i):(l._visibility|=2,xi(e,t,a,i,(t.subtreeFlags&10256)!==0)),s&2048&&Zr(o,t);break;case 24:Dt(e,t,a,i),s&2048&&Jr(t.alternate,t);break;default:Dt(e,t,a,i)}}function xi(e,t,a,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,o=t,u=a,g=i,z=o.flags;switch(o.tag){case 0:case 11:case 15:xi(l,o,u,g,s),fn(8,o);break;case 23:break;case 22:var D=o.stateNode;o.memoizedState!==null?D._visibility&2?xi(l,o,u,g,s):hn(l,o):(D._visibility|=2,xi(l,o,u,g,s)),s&&z&2048&&Zr(o.alternate,o);break;case 24:xi(l,o,u,g,s),s&&z&2048&&Jr(o.alternate,o);break;default:xi(l,o,u,g,s)}t=t.sibling}}function hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,s=i.flags;switch(i.tag){case 22:hn(a,i),s&2048&&Zr(i.alternate,i);break;case 24:hn(a,i),s&2048&&Jr(i.alternate,i);break;default:hn(a,i)}t=t.sibling}}var gn=8192;function bi(e){if(e.subtreeFlags&gn)for(e=e.child;e!==null;)Qu(e),e=e.sibling}function Qu(e){switch(e.tag){case 26:bi(e),e.flags&gn&&e.memoizedState!==null&&G0(kt,e.memoizedState,e.memoizedProps);break;case 5:bi(e);break;case 3:case 4:var t=kt;kt=Vs(e.stateNode.containerInfo),bi(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=gn,gn=16777216,bi(e),gn=t):bi(e));break;default:bi(e)}}function Xu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ye=i,Iu(i,e)}Xu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vu(e),e=e.sibling}function Vu(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&ma(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rs(e)):xn(e);break;default:xn(e)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ye=i,Iu(i,e)}Xu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),Rs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Rs(t));break;default:Rs(t)}e=e.sibling}}function Iu(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:$i(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ye=i;else e:for(a=e;Ye!==null;){i=Ye;var s=i.sibling,l=i.return;if(Bu(i),i===a){Ye=null;break e}if(s!==null){s.return=l,Ye=s;break e}Ye=l}}}var i0={getCacheForType:function(e){var t=Ze(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},n0=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ne=null,ce=null,me=0,xe=0,ut=null,ha=!1,yi=!1,Fr=!1,Jt=0,Te=0,ga=0,qa=0,Wr=0,wt=0,vi=0,bn=null,it=null,$r=!1,Pr=0,Os=1/0,_s=null,xa=null,Qe=0,ba=null,wi=null,ji=0,eo=0,to=null,Ku=null,yn=0,ao=null;function mt(){if((ge&2)!==0&&me!==0)return me&-me;if(R.T!==null){var e=ci;return e!==0?e:co()}return cc()}function Zu(){wt===0&&(wt=(me&536870912)===0||he?sc():536870912);var e=vt.current;return e!==null&&(e.flags|=32),wt}function ft(e,t,a){(e===Ne&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Ai(e,0),ya(e,me,wt,!1)),Ui(e,a),((ge&2)===0||e!==Ne)&&(e===Ne&&((ge&2)===0&&(qa|=a),Te===4&&ya(e,me,wt,!1)),Rt(e))}function Ju(e,t,a){if((ge&6)!==0)throw Error(c(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||_i(e,t),s=i?r0(e,t):so(e,t,!0),l=i;do{if(s===0){yi&&!i&&ya(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!s0(a)){s=so(e,t,!1),l=!1;continue}if(s===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;s=bn;var g=u.current.memoizedState.isDehydrated;if(g&&(Ai(u,o).flags|=256),o=so(u,o,!1),o!==2){if(Fr&&!g){u.errorRecoveryDisabledLanes|=l,qa|=l,s=4;break e}l=it,it=s,l!==null&&(it===null?it=l:it.push.apply(it,l))}s=o}if(l=!1,s!==2)continue}}if(s===1){Ai(e,0),ya(e,t,0,!0);break}e:{switch(i=e,l=s,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ya(i,t,wt,!ha);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(s=Pr+300-Et(),10<s)){if(ya(i,t,wt,!ha),In(i,0,!0)!==0)break e;i.timeoutHandle=Nm(Fu.bind(null,i,a,it,_s,$r,t,wt,qa,vi,ha,l,2,-0,0),s);break e}Fu(i,a,it,_s,$r,t,wt,qa,vi,ha,l,0,-0,0)}}break}while(!0);Rt(e)}function Fu(e,t,a,i,s,l,o,u,g,z,D,_,C,T){if(e.timeoutHandle=-1,_=t.subtreeFlags,(_&8192||(_&16785408)===16785408)&&(Sn={stylesheets:null,count:0,unsuspend:Y0},Qu(t),_=q0(),_!==null)){e.cancelPendingCommit=_(im.bind(null,e,t,l,a,i,s,o,u,g,D,1,C,T)),ya(e,l,o,!z);return}im(e,t,l,a,i,s,o,u,g)}function s0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var s=a[i],l=s.getSnapshot;s=s.value;try{if(!rt(l(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ya(e,t,a,i){t&=~Wr,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var l=31-lt(s),o=1<<l;i[l]=-1,s&=~o}a!==0&&rc(e,a,t)}function Us(){return(ge&6)===0?(vn(0),!1):!0}function io(){if(ce!==null){if(xe===0)var e=ce.return;else e=ce,Gt=Ua=null,vr(e),hi=null,dn=0,e=ce;for(;e!==null;)Cu(e.alternate,e),e=e.return;ce=null}}function Ai(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,A0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),io(),Ne=e,ce=a=Lt(e.current,null),me=t,xe=0,ut=null,ha=!1,yi=_i(e,t),Fr=!1,vi=wt=Wr=qa=ga=Te=0,it=bn=null,$r=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-lt(i),l=1<<s;t|=e[s],i&=~l}return Jt=t,ns(),a}function Wu(e,t){le=null,R.H=As,t===en||t===fs?(t=pd(),xe=3):t===ud?(t=pd(),xe=4):xe=t===hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,ce===null&&(Te=1,Es(e,gt(t,e.current)))}function $u(){var e=R.H;return R.H=As,e===null?As:e}function Pu(){var e=R.A;return R.A=i0,e}function no(){Te=4,ha||(me&4194048)!==me&&vt.current!==null||(yi=!0),(ga&134217727)===0&&(qa&134217727)===0||Ne===null||ya(Ne,me,wt,!1)}function so(e,t,a){var i=ge;ge|=2;var s=$u(),l=Pu();(Ne!==e||me!==t)&&(_s=null,Ai(e,t)),t=!1;var o=Te;e:do try{if(xe!==0&&ce!==null){var u=ce,g=ut;switch(xe){case 8:io(),o=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var z=xe;if(xe=0,ut=null,Ni(e,u,g,z),a&&yi){o=0;break e}break;default:z=xe,xe=0,ut=null,Ni(e,u,g,z)}}l0(),o=Te;break}catch(D){Wu(e,D)}while(!0);return t&&e.shellSuspendCounter++,Gt=Ua=null,ge=i,R.H=s,R.A=l,ce===null&&(Ne=null,me=0,ns()),o}function l0(){for(;ce!==null;)em(ce)}function r0(e,t){var a=ge;ge|=2;var i=$u(),s=Pu();Ne!==e||me!==t?(_s=null,Os=Et()+500,Ai(e,t)):yi=_i(e,t);e:do try{if(xe!==0&&ce!==null){t=ce;var l=ut;t:switch(xe){case 1:xe=0,ut=null,Ni(e,t,l,1);break;case 2:case 9:if(md(l)){xe=0,ut=null,tm(t);break}t=function(){xe!==2&&xe!==9||Ne!==e||(xe=7),Rt(e)},l.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:md(l)?(xe=0,ut=null,tm(t)):(xe=0,ut=null,Ni(e,t,l,7));break;case 5:var o=null;switch(ce.tag){case 26:o=ce.memoizedState;case 5:case 27:var u=ce;if(!o||Um(o)){xe=0,ut=null;var g=u.sibling;if(g!==null)ce=g;else{var z=u.return;z!==null?(ce=z,Bs(z)):ce=null}break t}}xe=0,ut=null,Ni(e,t,l,5);break;case 6:xe=0,ut=null,Ni(e,t,l,6);break;case 8:io(),Te=6;break e;default:throw Error(c(462))}}o0();break}catch(D){Wu(e,D)}while(!0);return Gt=Ua=null,R.H=i,R.A=s,ge=a,ce!==null?0:(Ne=null,me=0,ns(),Te)}function o0(){for(;ce!==null&&!Tp();)em(ce)}function em(e){var t=zu(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Bs(e):ce=t}function tm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=wu(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=wu(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:vr(t);default:Cu(a,t),t=ce=ad(t,Jt),t=zu(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?Bs(e):ce=t}function Ni(e,t,a,i){Gt=Ua=null,vr(t),hi=null,dn=0;var s=t.return;try{if(Wh(e,s,t,a,me)){Te=1,Es(e,gt(a,e.current)),ce=null;return}}catch(l){if(s!==null)throw ce=s,l;Te=1,Es(e,gt(a,e.current)),ce=null;return}t.flags&32768?(he||i===1?e=!0:yi||(me&536870912)!==0?e=!1:(ha=e=!0,(i===2||i===9||i===3||i===6)&&(i=vt.current,i!==null&&i.tag===13&&(i.flags|=16384))),am(t,e)):Bs(t)}function Bs(e){var t=e;do{if((t.flags&32768)!==0){am(t,ha);return}e=t.return;var a=Ph(t.alternate,t,Jt);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Te===0&&(Te=5)}function am(e,t){do{var a=e0(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);Te=6,ce=null}function im(e,t,a,i,s,l,o,u,g){e.cancelPendingCommit=null;do Ls();while(Qe!==0);if((ge&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(l=t.lanes|t.childLanes,l|=Jl,Yp(e,a,l,o,u,g),e===Ne&&(ce=Ne=null,me=0),wi=t,ba=e,ji=a,eo=l,to=s,Ku=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,m0(Qn,function(){return om(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,s=I.p,I.p=2,o=ge,ge|=4;try{t0(e,t,a)}finally{ge=o,I.p=s,R.T=i}}Qe=1,nm(),sm(),lm()}}function nm(){if(Qe===1){Qe=0;var e=ba,t=wi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var i=I.p;I.p=2;var s=ge;ge|=4;try{Yu(t,e);var l=bo,o=Ic(e.containerInfo),u=l.focusedElem,g=l.selectionRange;if(o!==u&&u&&u.ownerDocument&&Vc(u.ownerDocument.documentElement,u)){if(g!==null&&Xl(u)){var z=g.start,D=g.end;if(D===void 0&&(D=z),"selectionStart"in u)u.selectionStart=z,u.selectionEnd=Math.min(D,u.value.length);else{var _=u.ownerDocument||document,C=_&&_.defaultView||window;if(C.getSelection){var T=C.getSelection(),te=u.textContent.length,$=Math.min(g.start,te),ve=g.end===void 0?$:Math.min(g.end,te);!T.extend&&$>ve&&(o=ve,ve=$,$=o);var N=Xc(u,$),v=Xc(u,ve);if(N&&v&&(T.rangeCount!==1||T.anchorNode!==N.node||T.anchorOffset!==N.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var k=_.createRange();k.setStart(N.node,N.offset),T.removeAllRanges(),$>ve?(T.addRange(k),T.extend(v.node,v.offset)):(k.setEnd(v.node,v.offset),T.addRange(k))}}}}for(_=[],T=u;T=T.parentNode;)T.nodeType===1&&_.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<_.length;u++){var O=_[u];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Fs=!!xo,bo=xo=null}finally{ge=s,I.p=i,R.T=a}}e.current=t,Qe=2}}function sm(){if(Qe===2){Qe=0;var e=ba,t=wi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var i=I.p;I.p=2;var s=ge;ge|=4;try{Uu(e,t.alternate,t)}finally{ge=s,I.p=i,R.T=a}}Qe=3}}function lm(){if(Qe===4||Qe===3){Qe=0,Mp();var e=ba,t=wi,a=ji,i=Ku;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,wi=ba=null,rm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(xa=null),Al(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Oi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,s=I.p,I.p=2,R.T=null;try{for(var l=e.onRecoverableError,o=0;o<i.length;o++){var u=i[o];l(u.value,{componentStack:u.stack})}}finally{R.T=t,I.p=s}}(ji&3)!==0&&Ls(),Rt(e),s=e.pendingLanes,(a&4194090)!==0&&(s&42)!==0?e===ao?yn++:(yn=0,ao=e):yn=0,vn(0)}}function rm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$i(t)))}function Ls(e){return nm(),sm(),lm(),om()}function om(){if(Qe!==5)return!1;var e=ba,t=eo;eo=0;var a=Al(ji),i=R.T,s=I.p;try{I.p=32>a?32:a,R.T=null,a=to,to=null;var l=ba,o=ji;if(Qe=0,wi=ba=null,ji=0,(ge&6)!==0)throw Error(c(331));var u=ge;if(ge|=4,Vu(l.current),qu(l,l.current,o,a),ge=u,vn(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Oi,l)}catch{}return!0}finally{I.p=s,R.T=i,rm(e,t)}}function cm(e,t,a){t=gt(a,t),t=Or(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(Ui(e,2),Rt(e))}function Ae(e,t,a){if(e.tag===3)cm(e,e,a);else for(;t!==null;){if(t.tag===3){cm(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xa===null||!xa.has(i))){e=gt(a,e),a=fu(2),i=oa(t,a,2),i!==null&&(pu(a,i,t,e),Ui(i,2),Rt(i));break}}t=t.return}}function lo(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new n0;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(a)||(Fr=!0,s.add(a),e=c0.bind(null,e,t,a),t.then(e,e))}function c0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ne===e&&(me&a)===a&&(Te===4||Te===3&&(me&62914560)===me&&300>Et()-Pr?(ge&2)===0&&Ai(e,0):Wr|=a,vi===me&&(vi=0)),Rt(e)}function dm(e,t){t===0&&(t=lc()),e=si(e,t),e!==null&&(Ui(e,t),Rt(e))}function d0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),dm(e,a)}function u0(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),dm(e,a)}function m0(e,t){return yl(e,t)}var Hs=null,ki=null,ro=!1,Ys=!1,oo=!1,Qa=0;function Rt(e){e!==ki&&e.next===null&&(ki===null?Hs=ki=e:ki=ki.next=e),Ys=!0,ro||(ro=!0,p0())}function vn(e,t){if(!oo&&Ys){oo=!0;do for(var a=!1,i=Hs;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var l=0;else{var o=i.suspendedLanes,u=i.pingedLanes;l=(1<<31-lt(42|e)+1)-1,l&=s&~(o&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,pm(i,l))}else l=me,l=In(i,i===Ne?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||_i(i,l)||(a=!0,pm(i,l));i=i.next}while(a);oo=!1}}function f0(){um()}function um(){Ys=ro=!1;var e=0;Qa!==0&&(j0()&&(e=Qa),Qa=0);for(var t=Et(),a=null,i=Hs;i!==null;){var s=i.next,l=mm(i,t);l===0?(i.next=null,a===null?Hs=s:a.next=s,s===null&&(ki=a)):(a=i,(e!==0||(l&3)!==0)&&(Ys=!0)),i=s}vn(e)}function mm(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-lt(l),u=1<<o,g=s[o];g===-1?((u&a)===0||(u&i)!==0)&&(s[o]=Hp(u,t)):g<=t&&(e.expiredLanes|=u),l&=~u}if(t=Ne,a=me,a=In(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vl(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_i(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&vl(i),Al(a)){case 2:case 8:a=ic;break;case 32:a=Qn;break;case 268435456:a=nc;break;default:a=Qn}return i=fm.bind(null,e),a=yl(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&vl(i),e.callbackPriority=2,e.callbackNode=null,2}function fm(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ls()&&e.callbackNode!==a)return null;var i=me;return i=In(e,e===Ne?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ju(e,i,t),mm(e,Et()),e.callbackNode!=null&&e.callbackNode===a?fm.bind(null,e):null)}function pm(e,t){if(Ls())return null;Ju(e,t,!0)}function p0(){N0(function(){(ge&6)!==0?yl(ac,f0):um()})}function co(){return Qa===0&&(Qa=sc()),Qa}function hm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wn(""+e)}function gm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function h0(e,t,a,i,s){if(t==="submit"&&a&&a.stateNode===s){var l=hm((s[Pe]||null).action),o=i.submitter;o&&(t=(t=o[Pe]||null)?hm(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var u=new ts("action","action",null,i,s);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Qa!==0){var g=o?gm(s,o):new FormData(s);Cr(a,{pending:!0,data:g,method:s.method,action:l},null,g)}}else typeof l=="function"&&(u.preventDefault(),g=o?gm(s,o):new FormData(s),Cr(a,{pending:!0,data:g,method:s.method,action:l},l,g))},currentTarget:s}]})}}for(var uo=0;uo<Zl.length;uo++){var mo=Zl[uo],g0=mo.toLowerCase(),x0=mo[0].toUpperCase()+mo.slice(1);Nt(g0,"on"+x0)}Nt(Jc,"onAnimationEnd"),Nt(Fc,"onAnimationIteration"),Nt(Wc,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Oh,"onTransitionRun"),Nt(_h,"onTransitionStart"),Nt(Uh,"onTransitionCancel"),Nt($c,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),za("onBeforeInput",["compositionend","keypress","textInput","paste"]),za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));function xm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],s=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var o=i.length-1;0<=o;o--){var u=i[o],g=u.instance,z=u.currentTarget;if(u=u.listener,g!==l&&s.isPropagationStopped())break e;l=u,s.currentTarget=z;try{l(s)}catch(D){zs(D)}s.currentTarget=null,l=g}else for(o=0;o<i.length;o++){if(u=i[o],g=u.instance,z=u.currentTarget,u=u.listener,g!==l&&s.isPropagationStopped())break e;l=u,s.currentTarget=z;try{l(s)}catch(D){zs(D)}s.currentTarget=null,l=g}}}}function de(e,t){var a=t[Nl];a===void 0&&(a=t[Nl]=new Set);var i=e+"__bubble";a.has(i)||(bm(t,e,2,!1),a.add(i))}function fo(e,t,a){var i=0;t&&(i|=4),bm(a,e,i,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[Gs]){e[Gs]=!0,uc.forEach(function(a){a!=="selectionchange"&&(b0.has(a)||fo(a,!1,e),fo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,fo("selectionchange",!1,t))}}function bm(e,t,a,i){switch(qm(t)){case 2:var s=V0;break;case 8:s=I0;break;default:s=Eo}a=s.bind(null,t,a,e),s=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function ho(e,t,a,i,s){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===s)break;if(o===4)for(o=i.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===s)return;o=o.return}for(;u!==null;){if(o=Ia(u),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){i=l=o;continue e}u=u.parentNode}}i=i.return}kc(function(){var z=l,D=Rl(a),_=[];e:{var C=Pc.get(e);if(C!==void 0){var T=ts,te=e;switch(e){case"keypress":if(Pn(a)===0)break e;case"keydown":case"keyup":T=mh;break;case"focusin":te="focus",T=Hl;break;case"focusout":te="blur",T=Hl;break;case"beforeblur":case"afterblur":T=Hl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=hh;break;case Jc:case Fc:case Wc:T=ih;break;case $c:T=xh;break;case"scroll":case"scrollend":T=$p;break;case"wheel":T=yh;break;case"copy":case"cut":case"paste":T=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Tc;break;case"toggle":case"beforetoggle":T=wh}var $=(t&4)!==0,ve=!$&&(e==="scroll"||e==="scrollend"),N=$?C!==null?C+"Capture":null:C;$=[];for(var v=z,k;v!==null;){var O=v;if(k=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||k===null||N===null||(O=Hi(v,N),O!=null&&$.push(jn(v,O,k))),ve)break;v=v.return}0<$.length&&(C=new T(C,te,null,a,D),_.push({event:C,listeners:$}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",C&&a!==Dl&&(te=a.relatedTarget||a.fromElement)&&(Ia(te)||te[Va]))break e;if((T||C)&&(C=D.window===D?D:(C=D.ownerDocument)?C.defaultView||C.parentWindow:window,T?(te=a.relatedTarget||a.toElement,T=z,te=te?Ia(te):null,te!==null&&(ve=h(te),$=te.tag,te!==ve||$!==5&&$!==27&&$!==6)&&(te=null)):(T=null,te=z),T!==te)){if($=Ec,O="onMouseLeave",N="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&($=Tc,O="onPointerLeave",N="onPointerEnter",v="pointer"),ve=T==null?C:Li(T),k=te==null?C:Li(te),C=new $(O,v+"leave",T,a,D),C.target=ve,C.relatedTarget=k,O=null,Ia(D)===z&&($=new $(N,v+"enter",te,a,D),$.target=k,$.relatedTarget=ve,O=$),ve=O,T&&te)t:{for($=T,N=te,v=0,k=$;k;k=Si(k))v++;for(k=0,O=N;O;O=Si(O))k++;for(;0<v-k;)$=Si($),v--;for(;0<k-v;)N=Si(N),k--;for(;v--;){if($===N||N!==null&&$===N.alternate)break t;$=Si($),N=Si(N)}$=null}else $=null;T!==null&&ym(_,C,T,$,!1),te!==null&&ve!==null&&ym(_,ve,te,$,!0)}}e:{if(C=z?Li(z):window,T=C.nodeName&&C.nodeName.toLowerCase(),T==="select"||T==="input"&&C.type==="file")var Z=Lc;else if(Uc(C))if(Hc)Z=Mh;else{Z=Ch;var re=Eh}else T=C.nodeName,!T||T.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?z&&Ml(z.elementType)&&(Z=Lc):Z=Th;if(Z&&(Z=Z(e,z))){Bc(_,Z,a,D);break e}re&&re(e,C,z),e==="focusout"&&z&&C.type==="number"&&z.memoizedProps.value!=null&&Tl(C,"number",C.value)}switch(re=z?Li(z):window,e){case"focusin":(Uc(re)||re.contentEditable==="true")&&(ai=re,Vl=z,Ki=null);break;case"focusout":Ki=Vl=ai=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Kc(_,a,D);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":Kc(_,a,D)}var F;if(Gl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ti?Oc(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(Mc&&a.locale!=="ko"&&(ti||P!=="onCompositionStart"?P==="onCompositionEnd"&&ti&&(F=Sc()):(na=D,Ul="value"in na?na.value:na.textContent,ti=!0)),re=qs(z,P),0<re.length&&(P=new Cc(P,e,null,a,D),_.push({event:P,listeners:re}),F?P.data=F:(F=_c(a),F!==null&&(P.data=F)))),(F=Ah?Nh(e,a):kh(e,a))&&(P=qs(z,"onBeforeInput"),0<P.length&&(re=new Cc("onBeforeInput","beforeinput",null,a,D),_.push({event:re,listeners:P}),re.data=F)),h0(_,e,z,a,D)}xm(_,t)})}function jn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function qs(e,t){for(var a=t+"Capture",i=[];e!==null;){var s=e,l=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||l===null||(s=Hi(e,a),s!=null&&i.unshift(jn(e,s,l)),s=Hi(e,t),s!=null&&i.push(jn(e,s,l))),e.tag===3)return i;e=e.return}return[]}function Si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ym(e,t,a,i,s){for(var l=t._reactName,o=[];a!==null&&a!==i;){var u=a,g=u.alternate,z=u.stateNode;if(u=u.tag,g!==null&&g===i)break;u!==5&&u!==26&&u!==27||z===null||(g=z,s?(z=Hi(a,l),z!=null&&o.unshift(jn(a,z,g))):s||(z=Hi(a,l),z!=null&&o.push(jn(a,z,g)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var y0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function vm(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(v0,"")}function wm(e,t){return t=vm(t),vm(e)===t}function Qs(){}function ye(e,t,a,i,s,l){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||$a(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&$a(e,""+i);break;case"className":Zn(e,"class",i);break;case"tabIndex":Zn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,i);break;case"style":Ac(e,i,l);break;case"data":if(t!=="object"){Zn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Wn(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",s.name,s,null),ye(e,t,"formEncType",s.formEncType,s,null),ye(e,t,"formMethod",s.formMethod,s,null),ye(e,t,"formTarget",s.formTarget,s,null)):(ye(e,t,"encType",s.encType,s,null),ye(e,t,"method",s.method,s,null),ye(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Wn(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Qs);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Wn(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":de("beforetoggle",e),de("toggle",e),Kn(e,"popover",i);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Kn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fp.get(a)||a,Kn(e,a,i))}}function go(e,t,a,i,s,l){switch(a){case"style":Ac(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?$a(e,i):(typeof i=="number"||typeof i=="bigint")&&$a(e,""+i);break;case"onScroll":i!=null&&de("scroll",e);break;case"onScrollEnd":i!=null&&de("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),l=e[Pe]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,s),typeof i=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,s);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Kn(e,a,i)}}}function Xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var i=!1,s=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,l,o,a,null)}}s&&ye(e,t,"srcSet",a.srcSet,a,null),i&&ye(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var u=l=o=s=null,g=null,z=null;for(i in a)if(a.hasOwnProperty(i)){var D=a[i];if(D!=null)switch(i){case"name":s=D;break;case"type":o=D;break;case"checked":g=D;break;case"defaultChecked":z=D;break;case"value":l=D;break;case"defaultValue":u=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:ye(e,t,i,D,a,null)}}yc(e,l,u,g,z,o,s,!1),Jn(e);return;case"select":de("invalid",e),i=o=l=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":l=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:ye(e,t,s,u,a,null)}t=l,a=o,e.multiple=!!i,t!=null?Wa(e,!!i,t,!1):a!=null&&Wa(e,!!i,a,!0);return;case"textarea":de("invalid",e),l=s=i=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":i=u;break;case"defaultValue":s=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:ye(e,t,o,u,a,null)}wc(e,i,s,l),Jn(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(i=a[g],i!=null))switch(g){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ye(e,t,g,i,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(i=0;i<wn.length;i++)de(wn[i],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(i=a[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,z,i,a,null)}return;default:if(Ml(t)){for(D in a)a.hasOwnProperty(D)&&(i=a[D],i!==void 0&&go(e,t,D,i,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(i=a[u],i!=null&&ye(e,t,u,i,a,null))}function w0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,l=null,o=null,u=null,g=null,z=null,D=null;for(T in a){var _=a[T];if(a.hasOwnProperty(T)&&_!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=_;default:i.hasOwnProperty(T)||ye(e,t,T,null,i,_)}}for(var C in i){var T=i[C];if(_=a[C],i.hasOwnProperty(C)&&(T!=null||_!=null))switch(C){case"type":l=T;break;case"name":s=T;break;case"checked":z=T;break;case"defaultChecked":D=T;break;case"value":o=T;break;case"defaultValue":u=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==_&&ye(e,t,C,T,i,_)}}Cl(e,o,u,g,z,D,l,s);return;case"select":T=o=u=C=null;for(l in a)if(g=a[l],a.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":T=g;default:i.hasOwnProperty(l)||ye(e,t,l,null,i,g)}for(s in i)if(l=i[s],g=a[s],i.hasOwnProperty(s)&&(l!=null||g!=null))switch(s){case"value":C=l;break;case"defaultValue":u=l;break;case"multiple":o=l;default:l!==g&&ye(e,t,s,l,i,g)}t=u,a=o,i=T,C!=null?Wa(e,!!a,C,!1):!!i!=!!a&&(t!=null?Wa(e,!!a,t,!0):Wa(e,!!a,a?[]:"",!1));return;case"textarea":T=C=null;for(u in a)if(s=a[u],a.hasOwnProperty(u)&&s!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ye(e,t,u,null,i,s)}for(o in i)if(s=i[o],l=a[o],i.hasOwnProperty(o)&&(s!=null||l!=null))switch(o){case"value":C=s;break;case"defaultValue":T=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:s!==l&&ye(e,t,o,s,i,l)}vc(e,C,T);return;case"option":for(var te in a)if(C=a[te],a.hasOwnProperty(te)&&C!=null&&!i.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:ye(e,t,te,null,i,C)}for(g in i)if(C=i[g],T=a[g],i.hasOwnProperty(g)&&C!==T&&(C!=null||T!=null))switch(g){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:ye(e,t,g,C,i,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)C=a[$],a.hasOwnProperty($)&&C!=null&&!i.hasOwnProperty($)&&ye(e,t,$,null,i,C);for(z in i)if(C=i[z],T=a[z],i.hasOwnProperty(z)&&C!==T&&(C!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:ye(e,t,z,C,i,T)}return;default:if(Ml(t)){for(var ve in a)C=a[ve],a.hasOwnProperty(ve)&&C!==void 0&&!i.hasOwnProperty(ve)&&go(e,t,ve,void 0,i,C);for(D in i)C=i[D],T=a[D],!i.hasOwnProperty(D)||C===T||C===void 0&&T===void 0||go(e,t,D,C,i,T);return}}for(var N in a)C=a[N],a.hasOwnProperty(N)&&C!=null&&!i.hasOwnProperty(N)&&ye(e,t,N,null,i,C);for(_ in i)C=i[_],T=a[_],!i.hasOwnProperty(_)||C===T||C==null&&T==null||ye(e,t,_,C,i,T)}var xo=null,bo=null;function Xs(e){return e.nodeType===9?e:e.ownerDocument}function jm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=null;function j0(){var e=window.event;return e&&e.type==="popstate"?e===vo?!1:(vo=e,!0):(vo=null,!1)}var Nm=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(e){return km.resolve(null).then(e).catch(k0)}:Nm;function k0(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function Sm(e,t){var a=t,i=0,s=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(0<i&&8>i){a=i;var o=e.ownerDocument;if(a&1&&An(o.documentElement),a&2&&An(o.body),a&4)for(a=o.head,An(a),o=a.firstChild;o;){var u=o.nextSibling,g=o.nodeName;o[Bi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(s===0){e.removeChild(l),Mn(t);return}s--}else a==="$"||a==="$?"||a==="$!"?s++:i=a.charCodeAt(0)-48;else i=0;a=l}while(a);Mn(t)}function wo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wo(a),kl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function S0(e,t,a,i){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Bi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=St(e.nextSibling),e===null)break}return null}function z0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=St(e.nextSibling),e===null))return null;return e}function jo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function E0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ao=null;function zm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Em(e,t,a){switch(t=Xs(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function An(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);kl(e)}var jt=new Map,Cm=new Set;function Vs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=I.d;I.d={f:C0,r:T0,D:M0,C:D0,L:R0,m:O0,X:U0,S:_0,M:B0};function C0(){var e=Ft.f(),t=Us();return e||t}function T0(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?Jd(t):Ft.r(e)}var zi=typeof document>"u"?null:document;function Tm(e,t,a){var i=zi;if(i&&typeof t=="string"&&t){var s=ht(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Cm.has(s)||(Cm.add(s),e={rel:e,crossOrigin:a,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Xe(t,"link",e),Le(t),i.head.appendChild(t)))}}function M0(e){Ft.D(e),Tm("dns-prefetch",e,null)}function D0(e,t){Ft.C(e,t),Tm("preconnect",e,t)}function R0(e,t,a){Ft.L(e,t,a);var i=zi;if(i&&e&&t){var s='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+ht(a.imageSizes)+'"]')):s+='[href="'+ht(e)+'"]';var l=s;switch(t){case"style":l=Ei(e);break;case"script":l=Ci(e)}jt.has(l)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),jt.set(l,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Nn(l))||t==="script"&&i.querySelector(kn(l))||(t=i.createElement("link"),Xe(t,"link",e),Le(t),i.head.appendChild(t)))}}function O0(e,t){Ft.m(e,t);var a=zi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ht(i)+'"][href="'+ht(e)+'"]',l=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ci(e)}if(!jt.has(l)&&(e=y({rel:"modulepreload",href:e},t),jt.set(l,e),a.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kn(l)))return}i=a.createElement("link"),Xe(i,"link",e),Le(i),a.head.appendChild(i)}}}function _0(e,t,a){Ft.S(e,t,a);var i=zi;if(i&&e){var s=Za(i).hoistableStyles,l=Ei(e);t=t||"default";var o=s.get(l);if(!o){var u={loading:0,preload:null};if(o=i.querySelector(Nn(l)))u.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=jt.get(l))&&No(e,a);var g=o=i.createElement("link");Le(g),Xe(g,"link",e),g._p=new Promise(function(z,D){g.onload=z,g.onerror=D}),g.addEventListener("load",function(){u.loading|=1}),g.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Is(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:u},s.set(l,o)}}}function U0(e,t){Ft.X(e,t);var a=zi;if(a&&e){var i=Za(a).hoistableScripts,s=Ci(e),l=i.get(s);l||(l=a.querySelector(kn(s)),l||(e=y({src:e,async:!0},t),(t=jt.get(s))&&ko(e,t),l=a.createElement("script"),Le(l),Xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(s,l))}}function B0(e,t){Ft.M(e,t);var a=zi;if(a&&e){var i=Za(a).hoistableScripts,s=Ci(e),l=i.get(s);l||(l=a.querySelector(kn(s)),l||(e=y({src:e,async:!0,type:"module"},t),(t=jt.get(s))&&ko(e,t),l=a.createElement("script"),Le(l),Xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(s,l))}}function Mm(e,t,a,i){var s=(s=ae.current)?Vs(s):null;if(!s)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ei(a.href),a=Za(s).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ei(a.href);var l=Za(s).hoistableStyles,o=l.get(e);if(o||(s=s.ownerDocument||s,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=s.querySelector(Nn(e)))&&!l._p&&(o.instance=l,o.state.loading=5),jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jt.set(e,a),l||L0(s,e,a,o.state))),t&&i===null)throw Error(c(528,""));return o}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(a),a=Za(s).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ei(e){return'href="'+ht(e)+'"'}function Nn(e){return'link[rel="stylesheet"]['+e+"]"}function Dm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function L0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Xe(t,"link",a),Le(t),e.head.appendChild(t))}function Ci(e){return'[src="'+ht(e)+'"]'}function kn(e){return"script[async]"+e}function Rm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(i)return t.instance=i,Le(i),i;var s=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Le(i),Xe(i,"style",s),Is(i,a.precedence,e),t.instance=i;case"stylesheet":s=Ei(a.href);var l=e.querySelector(Nn(s));if(l)return t.state.loading|=4,t.instance=l,Le(l),l;i=Dm(a),(s=jt.get(s))&&No(i,s),l=(e.ownerDocument||e).createElement("link"),Le(l);var o=l;return o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Xe(l,"link",i),t.state.loading|=4,Is(l,a.precedence,e),t.instance=l;case"script":return l=Ci(a.src),(s=e.querySelector(kn(l)))?(t.instance=s,Le(s),s):(i=a,(s=jt.get(l))&&(i=y({},a),ko(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Le(s),Xe(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Is(i,a.precedence,e));return t.instance}function Is(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,l=s,o=0;o<i.length;o++){var u=i[o];if(u.dataset.precedence===t)l=u;else if(l!==s)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function No(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ks=null;function Om(e,t,a){if(Ks===null){var i=new Map,s=Ks=new Map;s.set(a,i)}else s=Ks,i=s.get(a),i||(i=new Map,s.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var l=a[s];if(!(l[Bi]||l[Ke]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var u=i.get(o);u?u.push(l):i.set(o,[l])}}return i}function _m(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function H0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Um(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sn=null;function Y0(){}function G0(e,t,a){if(Sn===null)throw Error(c(475));var i=Sn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=Ei(a.href),l=e.querySelector(Nn(s));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Zs.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=l,Le(l);return}l=e.ownerDocument||e,a=Dm(a),(s=jt.get(s))&&No(a,s),l=l.createElement("link"),Le(l);var o=l;o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Xe(l,"link",a),t.instance=l}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Zs.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function q0(){if(Sn===null)throw Error(c(475));var e=Sn;return e.stylesheets&&e.count===0&&So(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&So(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zs(){if(this.count--,this.count===0){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Js=null;function So(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Js=new Map,t.forEach(Q0,e),Js=null,Zs.call(e))}function Q0(e,t){if(!(t.state.loading&4)){var a=Js.get(e);if(a)var i=a.get(null);else{a=new Map,Js.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<s.length;l++){var o=s[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}s=t.instance,o=s.getAttribute("data-precedence"),l=a.get(o)||i,l===i&&a.set(null,s),a.set(o,s),this.count++,i=Zs.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),l?l.parentNode.insertBefore(s,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var zn={$$typeof:q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function X0(e,t,a,i,s,l,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.hiddenUpdates=wl(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Bm(e,t,a,i,s,l,o,u,g,z,D,_){return e=new X0(e,t,a,o,u,g,z,_),t=1,l===!0&&(t|=24),l=ot(3,null,null,t),e.current=l,l.stateNode=e,t=lr(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:t},dr(l),e}function Lm(e){return e?(e=li,e):li}function Hm(e,t,a,i,s,l){s=Lm(s),i.context===null?i.context=s:i.pendingContext=s,i=ra(t),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=oa(e,i,t),a!==null&&(ft(a,e,t),an(a,e,t))}function Ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function zo(e,t){Ym(e,t),(e=e.alternate)&&Ym(e,t)}function Gm(e){if(e.tag===13){var t=si(e,67108864);t!==null&&ft(t,e,67108864),zo(e,67108864)}}var Fs=!0;function V0(e,t,a,i){var s=R.T;R.T=null;var l=I.p;try{I.p=2,Eo(e,t,a,i)}finally{I.p=l,R.T=s}}function I0(e,t,a,i){var s=R.T;R.T=null;var l=I.p;try{I.p=8,Eo(e,t,a,i)}finally{I.p=l,R.T=s}}function Eo(e,t,a,i){if(Fs){var s=Co(i);if(s===null)ho(e,t,i,Ws,a),Qm(e,i);else if(Z0(s,e,t,a,i))i.stopPropagation();else if(Qm(e,i),t&4&&-1<K0.indexOf(e)){for(;s!==null;){var l=Ka(s);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Sa(l.pendingLanes);if(o!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var g=1<<31-lt(o);u.entanglements[1]|=g,o&=~g}Rt(l),(ge&6)===0&&(Os=Et()+500,vn(0))}}break;case 13:u=si(l,2),u!==null&&ft(u,l,2),Us(),zo(l,2)}if(l=Co(i),l===null&&ho(e,t,i,Ws,a),l===s)break;s=l}s!==null&&i.stopPropagation()}else ho(e,t,i,null,a)}}function Co(e){return e=Rl(e),To(e)}var Ws=null;function To(e){if(Ws=null,e=Ia(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ws=e,null}function qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dp()){case ac:return 2;case ic:return 8;case Qn:case Rp:return 32;case nc:return 268435456;default:return 32}default:return 32}}var Mo=!1,wa=null,ja=null,Aa=null,En=new Map,Cn=new Map,Na=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function Tn(e,t,a,i,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[s]},t!==null&&(t=Ka(t),t!==null&&Gm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Z0(e,t,a,i,s){switch(t){case"focusin":return wa=Tn(wa,e,t,a,i,s),!0;case"dragenter":return ja=Tn(ja,e,t,a,i,s),!0;case"mouseover":return Aa=Tn(Aa,e,t,a,i,s),!0;case"pointerover":var l=s.pointerId;return En.set(l,Tn(En.get(l)||null,e,t,a,i,s)),!0;case"gotpointercapture":return l=s.pointerId,Cn.set(l,Tn(Cn.get(l)||null,e,t,a,i,s)),!0}return!1}function Xm(e){var t=Ia(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,Gp(e.priority,function(){if(a.tag===13){var i=mt();i=jl(i);var s=si(a,i);s!==null&&ft(s,a,i),zo(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Co(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Dl=i,a.target.dispatchEvent(i),Dl=null}else return t=Ka(a),t!==null&&Gm(t),e.blockedOn=a,!1;t.shift()}return!0}function Vm(e,t,a){$s(e)&&a.delete(t)}function J0(){Mo=!1,wa!==null&&$s(wa)&&(wa=null),ja!==null&&$s(ja)&&(ja=null),Aa!==null&&$s(Aa)&&(Aa=null),En.forEach(Vm),Cn.forEach(Vm)}function Ps(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,J0)))}var el=null;function Im(e){el!==e&&(el=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){el===e&&(el=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(To(i||a)===null)continue;break}var l=Ka(a);l!==null&&(e.splice(t,3),t-=3,Cr(l,{pending:!0,data:s,method:a.method,action:i},i,s))}}))}function Mn(e){function t(g){return Ps(g,e)}wa!==null&&Ps(wa,e),ja!==null&&Ps(ja,e),Aa!==null&&Ps(Aa,e),En.forEach(t),Cn.forEach(t);for(var a=0;a<Na.length;a++){var i=Na[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)Xm(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var s=a[i],l=a[i+1],o=s[Pe]||null;if(typeof l=="function")o||Im(a);else if(o){var u=null;if(l&&l.hasAttribute("formAction")){if(s=l,o=l[Pe]||null)u=o.formAction;else if(To(s)!==null)continue}else u=o.action;typeof u=="function"?a[i+1]=u:(a.splice(i,3),i-=3),Im(a)}}}function Do(e){this._internalRoot=e}tl.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=mt();Hm(a,i,e,t,null,null)},tl.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hm(e.current,2,null,e,null,null),Us(),t[Va]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Na.length&&t!==0&&t<Na[a].priority;a++);Na.splice(a,0,e),a===0&&Xm(e)}};var Km=m.version;if(Km!=="19.1.0")throw Error(c(527,Km,"19.1.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=w(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var F0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Oi=al.inject(F0),st=al}catch{}}return Rn.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,i="",s=cu,l=du,o=uu,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=Bm(e,1,!1,null,null,a,i,s,l,o,u,null),e[Va]=t.current,po(e),new Do(t)},Rn.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var i=!1,s="",l=cu,o=du,u=uu,g=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=Bm(e,1,!0,t,a??null,i,s,l,o,u,g,z),t.context=Lm(null),a=t.current,i=mt(),i=jl(i),s=ra(i),s.callback=null,oa(a,s,i),a=i,t.current.lanes=a,Ui(t,a),Rt(t),e[Va]=t.current,po(e),new tl(t)},Rn.version="19.1.0",Rn}var nf;function rg(){if(nf)return _o.exports;nf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),_o.exports=lg(),_o.exports}var og=rg(),cg=Vf();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var sf="popstate";function dg(r={}){function m(c,f){let{pathname:h,search:x,hash:E}=c.location;return Vo("",{pathname:h,search:x,hash:E},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(c,f){return typeof f=="string"?f:_n(f)}return mg(m,d,null,r)}function Ee(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function Ot(r,m){if(!r){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function ug(){return Math.random().toString(36).substring(2,10)}function lf(r,m){return{usr:r.state,key:r.key,idx:m}}function Vo(r,m,d=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof m=="string"?Di(m):m,state:d,key:m&&m.key||c||ug()}}function _n({pathname:r="/",search:m="",hash:d=""}){return m&&m!=="?"&&(r+=m.charAt(0)==="?"?m:"?"+m),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Di(r){let m={};if(r){let d=r.indexOf("#");d>=0&&(m.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(m.search=r.substring(c),r=r.substring(0,c)),r&&(m.pathname=r)}return m}function mg(r,m,d,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,x=f.history,E="POP",w=null,p=y();p==null&&(p=0,x.replaceState({...x.state,idx:p},""));function y(){return(x.state||{idx:null}).idx}function j(){E="POP";let H=y(),S=H==null?null:H-p;p=H,w&&w({action:E,location:G.location,delta:S})}function M(H,S){E="PUSH";let U=Vo(G.location,H,S);p=y()+1;let q=lf(U,p),ie=G.createHref(U);try{x.pushState(q,"",ie)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;f.location.assign(ie)}h&&w&&w({action:E,location:G.location,delta:1})}function L(H,S){E="REPLACE";let U=Vo(G.location,H,S);p=y();let q=lf(U,p),ie=G.createHref(U);x.replaceState(q,"",ie),h&&w&&w({action:E,location:G.location,delta:0})}function Y(H){return fg(H)}let G={get action(){return E},get location(){return r(f,x)},listen(H){if(w)throw new Error("A history only accepts one active listener");return f.addEventListener(sf,j),w=H,()=>{f.removeEventListener(sf,j),w=null}},createHref(H){return m(f,H)},createURL:Y,encodeLocation(H){let S=Y(H);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:M,replace:L,go(H){return x.go(H)}};return G}function fg(r,m=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:_n(r);return c=c.replace(/ $/,"%20"),!m&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function If(r,m,d="/"){return pg(r,m,d,!1)}function pg(r,m,d,c){let f=typeof m=="string"?Di(m):m,h=$t(f.pathname||"/",d);if(h==null)return null;let x=Kf(r);hg(x);let E=null;for(let w=0;E==null&&w<x.length;++w){let p=Sg(h);E=Ng(x[w],p,c)}return E}function Kf(r,m=[],d=[],c="",f=!1){let h=(x,E,w=f,p)=>{let y={relativePath:p===void 0?x.path||"":p,caseSensitive:x.caseSensitive===!0,childrenIndex:E,route:x};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(c)&&w)return;Ee(y.relativePath.startsWith(c),`Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(c.length)}let j=Wt([c,y.relativePath]),M=d.concat(y);x.children&&x.children.length>0&&(Ee(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),Kf(x.children,m,M,j,w)),!(x.path==null&&!x.index)&&m.push({path:j,score:jg(j,x.index),routesMeta:M})};return r.forEach((x,E)=>{if(x.path===""||!x.path?.includes("?"))h(x,E);else for(let w of Zf(x.path))h(x,E,!0,w)}),m}function Zf(r){let m=r.split("/");if(m.length===0)return[];let[d,...c]=m,f=d.endsWith("?"),h=d.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let x=Zf(c.join("/")),E=[];return E.push(...x.map(w=>w===""?h:[h,w].join("/"))),f&&E.push(...x),E.map(w=>r.startsWith("/")&&w===""?"/":w)}function hg(r){r.sort((m,d)=>m.score!==d.score?d.score-m.score:Ag(m.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var gg=/^:[\w-]+$/,xg=3,bg=2,yg=1,vg=10,wg=-2,rf=r=>r==="*";function jg(r,m){let d=r.split("/"),c=d.length;return d.some(rf)&&(c+=wg),m&&(c+=bg),d.filter(f=>!rf(f)).reduce((f,h)=>f+(gg.test(h)?xg:h===""?yg:vg),c)}function Ag(r,m){return r.length===m.length&&r.slice(0,-1).every((c,f)=>c===m[f])?r[r.length-1]-m[m.length-1]:0}function Ng(r,m,d=!1){let{routesMeta:c}=r,f={},h="/",x=[];for(let E=0;E<c.length;++E){let w=c[E],p=E===c.length-1,y=h==="/"?m:m.slice(h.length)||"/",j=dl({path:w.relativePath,caseSensitive:w.caseSensitive,end:p},y),M=w.route;if(!j&&p&&d&&!c[c.length-1].route.index&&(j=dl({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},y)),!j)return null;Object.assign(f,j.params),x.push({params:f,pathname:Wt([h,j.pathname]),pathnameBase:Tg(Wt([h,j.pathnameBase])),route:M}),j.pathnameBase!=="/"&&(h=Wt([h,j.pathnameBase]))}return x}function dl(r,m){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=kg(r.path,r.caseSensitive,r.end),f=m.match(d);if(!f)return null;let h=f[0],x=h.replace(/(.)\/+$/,"$1"),E=f.slice(1);return{params:c.reduce((p,{paramName:y,isOptional:j},M)=>{if(y==="*"){let Y=E[M]||"";x=h.slice(0,h.length-Y.length).replace(/(.)\/+$/,"$1")}const L=E[M];return j&&!L?p[y]=void 0:p[y]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:x,pattern:r}}function kg(r,m=!1,d=!0){Ot(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,E,w)=>(c.push({paramName:E,isOptional:w!=null}),w?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,m?void 0:"i"),c]}function Sg(r){try{return r.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Ot(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),r}}function $t(r,m){if(m==="/")return r;if(!r.toLowerCase().startsWith(m.toLowerCase()))return null;let d=m.endsWith("/")?m.length-1:m.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}function zg(r,m="/"){let{pathname:d,search:c="",hash:f=""}=typeof r=="string"?Di(r):r;return{pathname:d?d.startsWith("/")?d:Eg(d,m):m,search:Mg(c),hash:Dg(f)}}function Eg(r,m){let d=m.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function Ho(r,m,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${m}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cg(r){return r.filter((m,d)=>d===0||m.route.path&&m.route.path.length>0)}function Jf(r){let m=Cg(r);return m.map((d,c)=>c===m.length-1?d.pathname:d.pathnameBase)}function Ff(r,m,d,c=!1){let f;typeof r=="string"?f=Di(r):(f={...r},Ee(!f.pathname||!f.pathname.includes("?"),Ho("?","pathname","search",f)),Ee(!f.pathname||!f.pathname.includes("#"),Ho("#","pathname","hash",f)),Ee(!f.search||!f.search.includes("#"),Ho("#","search","hash",f)));let h=r===""||f.pathname==="",x=h?"/":f.pathname,E;if(x==null)E=d;else{let j=m.length-1;if(!c&&x.startsWith("..")){let M=x.split("/");for(;M[0]==="..";)M.shift(),j-=1;f.pathname=M.join("/")}E=j>=0?m[j]:"/"}let w=zg(f,E),p=x&&x!=="/"&&x.endsWith("/"),y=(h||x===".")&&d.endsWith("/");return!w.pathname.endsWith("/")&&(p||y)&&(w.pathname+="/"),w}var Wt=r=>r.join("/").replace(/\/\/+/g,"/"),Tg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Mg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Dg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Rg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Wf=["POST","PUT","PATCH","DELETE"];new Set(Wf);var Og=["GET",...Wf];new Set(Og);var Ri=A.createContext(null);Ri.displayName="DataRouter";var fl=A.createContext(null);fl.displayName="DataRouterState";A.createContext(!1);var $f=A.createContext({isTransitioning:!1});$f.displayName="ViewTransition";var _g=A.createContext(new Map);_g.displayName="Fetchers";var Ug=A.createContext(null);Ug.displayName="Await";var _t=A.createContext(null);_t.displayName="Navigation";var Bn=A.createContext(null);Bn.displayName="Location";var Pt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var Fo=A.createContext(null);Fo.displayName="RouteError";function Bg(r,{relative:m}={}){Ee(Ln(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=A.useContext(_t),{hash:f,pathname:h,search:x}=Hn(r,{relative:m}),E=h;return d!=="/"&&(E=h==="/"?d:Wt([d,h])),c.createHref({pathname:E,search:x,hash:f})}function Ln(){return A.useContext(Bn)!=null}function Xa(){return Ee(Ln(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Bn).location}var Pf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ep(r){A.useContext(_t).static||A.useLayoutEffect(r)}function Lg(){let{isDataRoute:r}=A.useContext(Pt);return r?Wg():Hg()}function Hg(){Ee(Ln(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Ri),{basename:m,navigator:d}=A.useContext(_t),{matches:c}=A.useContext(Pt),{pathname:f}=Xa(),h=JSON.stringify(Jf(c)),x=A.useRef(!1);return ep(()=>{x.current=!0}),A.useCallback((w,p={})=>{if(Ot(x.current,Pf),!x.current)return;if(typeof w=="number"){d.go(w);return}let y=Ff(w,JSON.parse(h),f,p.relative==="path");r==null&&m!=="/"&&(y.pathname=y.pathname==="/"?m:Wt([m,y.pathname])),(p.replace?d.replace:d.push)(y,p.state,p)},[m,d,h,f,r])}A.createContext(null);function Hn(r,{relative:m}={}){let{matches:d}=A.useContext(Pt),{pathname:c}=Xa(),f=JSON.stringify(Jf(d));return A.useMemo(()=>Ff(r,JSON.parse(f),c,m==="path"),[r,f,c,m])}function Yg(r,m){return tp(r,m)}function tp(r,m,d,c,f){Ee(Ln(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=A.useContext(_t),{matches:x}=A.useContext(Pt),E=x[x.length-1],w=E?E.params:{},p=E?E.pathname:"/",y=E?E.pathnameBase:"/",j=E&&E.route;{let U=j&&j.path||"";ap(p,!j||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let M=Xa(),L;if(m){let U=typeof m=="string"?Di(m):m;Ee(y==="/"||U.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${U.pathname}" was given in the \`location\` prop.`),L=U}else L=M;let Y=L.pathname||"/",G=Y;if(y!=="/"){let U=y.replace(/^\//,"").split("/");G="/"+Y.replace(/^\//,"").split("/").slice(U.length).join("/")}let H=If(r,{pathname:G});Ot(j||H!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Ot(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Vg(H&&H.map(U=>Object.assign({},U,{params:Object.assign({},w,U.params),pathname:Wt([y,h.encodeLocation?h.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?y:Wt([y,h.encodeLocation?h.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),x,d,c,f);return m&&S?A.createElement(Bn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},S):S}function Gg(){let r=Fg(),m=Rg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},x=null;return console.error("Error handled by React Router default ErrorBoundary:",r),x=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},m),d?A.createElement("pre",{style:f},d):null,x)}var qg=A.createElement(Gg,null),Qg=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,m){return m.location!==r.location||m.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:m.error,location:m.location,revalidation:r.revalidation||m.revalidation}}componentDidCatch(r,m){this.props.unstable_onError?this.props.unstable_onError(r,m):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?A.createElement(Pt.Provider,{value:this.props.routeContext},A.createElement(Fo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xg({routeContext:r,match:m,children:d}){let c=A.useContext(Ri);return c&&c.static&&c.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=m.route.id),A.createElement(Pt.Provider,{value:r},d)}function Vg(r,m=[],d=null,c=null,f=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(m.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let h=r,x=d?.errors;if(x!=null){let p=h.findIndex(y=>y.route.id&&x?.[y.route.id]!==void 0);Ee(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),h=h.slice(0,Math.min(h.length,p+1))}let E=!1,w=-1;if(d)for(let p=0;p<h.length;p++){let y=h[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(w=p),y.route.id){let{loaderData:j,errors:M}=d,L=y.route.loader&&!j.hasOwnProperty(y.route.id)&&(!M||M[y.route.id]===void 0);if(y.route.lazy||L){E=!0,w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}return h.reduceRight((p,y,j)=>{let M,L=!1,Y=null,G=null;d&&(M=x&&y.route.id?x[y.route.id]:void 0,Y=y.route.errorElement||qg,E&&(w<0&&j===0?(ap("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,G=null):w===j&&(L=!0,G=y.route.hydrateFallbackElement||null)));let H=m.concat(h.slice(0,j+1)),S=()=>{let U;return M?U=Y:L?U=G:y.route.Component?U=A.createElement(y.route.Component,null):y.route.element?U=y.route.element:U=p,A.createElement(Xg,{match:y,routeContext:{outlet:p,matches:H,isDataRoute:d!=null},children:U})};return d&&(y.route.ErrorBoundary||y.route.errorElement||j===0)?A.createElement(Qg,{location:d.location,revalidation:d.revalidation,component:Y,error:M,children:S(),routeContext:{outlet:null,matches:H,isDataRoute:!0},unstable_onError:c}):S()},null)}function Wo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ig(r){let m=A.useContext(Ri);return Ee(m,Wo(r)),m}function Kg(r){let m=A.useContext(fl);return Ee(m,Wo(r)),m}function Zg(r){let m=A.useContext(Pt);return Ee(m,Wo(r)),m}function $o(r){let m=Zg(r),d=m.matches[m.matches.length-1];return Ee(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Jg(){return $o("useRouteId")}function Fg(){let r=A.useContext(Fo),m=Kg("useRouteError"),d=$o("useRouteError");return r!==void 0?r:m.errors?.[d]}function Wg(){let{router:r}=Ig("useNavigate"),m=$o("useNavigate"),d=A.useRef(!1);return ep(()=>{d.current=!0}),A.useCallback(async(f,h={})=>{Ot(d.current,Pf),d.current&&(typeof f=="number"?r.navigate(f):await r.navigate(f,{fromRouteId:m,...h}))},[r,m])}var of={};function ap(r,m,d){!m&&!of[r]&&(of[r]=!0,Ot(!1,d))}A.memo($g);function $g({routes:r,future:m,state:d,unstable_onError:c}){return tp(r,void 0,d,c,m)}function zt(r){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Pg({basename:r="/",children:m=null,location:d,navigationType:c="POP",navigator:f,static:h=!1}){Ee(!Ln(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=r.replace(/^\/*/,"/"),E=A.useMemo(()=>({basename:x,navigator:f,static:h,future:{}}),[x,f,h]);typeof d=="string"&&(d=Di(d));let{pathname:w="/",search:p="",hash:y="",state:j=null,key:M="default"}=d,L=A.useMemo(()=>{let Y=$t(w,x);return Y==null?null:{location:{pathname:Y,search:p,hash:y,state:j,key:M},navigationType:c}},[x,w,p,y,j,M,c]);return Ot(L!=null,`<Router basename="${x}"> is not able to match the URL "${w}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:A.createElement(_t.Provider,{value:E},A.createElement(Bn.Provider,{children:m,value:L}))}function e1({children:r,location:m}){return Yg(Io(r),m)}function Io(r,m=[]){let d=[];return A.Children.forEach(r,(c,f)=>{if(!A.isValidElement(c))return;let h=[...m,f];if(c.type===A.Fragment){d.push.apply(d,Io(c.props.children,h));return}Ee(c.type===zt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!c.props.index||!c.props.children,"An index route cannot have child routes.");let x={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(x.children=Io(c.props.children,h)),d.push(x)}),d}var rl="get",ol="application/x-www-form-urlencoded";function pl(r){return r!=null&&typeof r.tagName=="string"}function t1(r){return pl(r)&&r.tagName.toLowerCase()==="button"}function a1(r){return pl(r)&&r.tagName.toLowerCase()==="form"}function i1(r){return pl(r)&&r.tagName.toLowerCase()==="input"}function n1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function s1(r,m){return r.button===0&&(!m||m==="_self")&&!n1(r)}var il=null;function l1(){if(il===null)try{new FormData(document.createElement("form"),0),il=!1}catch{il=!0}return il}var r1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yo(r){return r!=null&&!r1.has(r)?(Ot(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ol}"`),null):r}function o1(r,m){let d,c,f,h,x;if(a1(r)){let E=r.getAttribute("action");c=E?$t(E,m):null,d=r.getAttribute("method")||rl,f=Yo(r.getAttribute("enctype"))||ol,h=new FormData(r)}else if(t1(r)||i1(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=r.getAttribute("formaction")||E.getAttribute("action");if(c=w?$t(w,m):null,d=r.getAttribute("formmethod")||E.getAttribute("method")||rl,f=Yo(r.getAttribute("formenctype"))||Yo(E.getAttribute("enctype"))||ol,h=new FormData(E,r),!l1()){let{name:p,type:y,value:j}=r;if(y==="image"){let M=p?`${p}.`:"";h.append(`${M}x`,"0"),h.append(`${M}y`,"0")}else p&&h.append(p,j)}}else{if(pl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=rl,c=null,f=ol,x=r}return h&&f==="text/plain"&&(x=h,h=void 0),{action:c,method:d.toLowerCase(),encType:f,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Po(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function c1(r,m,d){let c=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c.pathname==="/"?c.pathname=`_root.${d}`:m&&$t(c.pathname,m)==="/"?c.pathname=`${m.replace(/\/$/,"")}/_root.${d}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${d}`,c}async function d1(r,m){if(r.id in m)return m[r.id];try{let d=await import(r.module);return m[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function u1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function m1(r,m,d){let c=await Promise.all(r.map(async f=>{let h=m.routes[f.route.id];if(h){let x=await d1(h,d);return x.links?x.links():[]}return[]}));return g1(c.flat(1).filter(u1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function cf(r,m,d,c,f,h){let x=(w,p)=>d[p]?w.route.id!==d[p].route.id:!0,E=(w,p)=>d[p].pathname!==w.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==w.params["*"];return h==="assets"?m.filter((w,p)=>x(w,p)||E(w,p)):h==="data"?m.filter((w,p)=>{let y=c.routes[w.route.id];if(!y||!y.hasLoader)return!1;if(x(w,p)||E(w,p))return!0;if(w.route.shouldRevalidate){let j=w.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function f1(r,m,{includeHydrateFallback:d}={}){return p1(r.map(c=>{let f=m.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function p1(r){return[...new Set(r)]}function h1(r){let m={},d=Object.keys(r).sort();for(let c of d)m[c]=r[c];return m}function g1(r,m){let d=new Set;return new Set(m),r.reduce((c,f)=>{let h=JSON.stringify(h1(f));return d.has(h)||(d.add(h),c.push({key:h,link:f})),c},[])}function ip(){let r=A.useContext(Ri);return Po(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function x1(){let r=A.useContext(fl);return Po(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ec=A.createContext(void 0);ec.displayName="FrameworkContext";function np(){let r=A.useContext(ec);return Po(r,"You must render this element inside a <HydratedRouter> element"),r}function b1(r,m){let d=A.useContext(ec),[c,f]=A.useState(!1),[h,x]=A.useState(!1),{onFocus:E,onBlur:w,onMouseEnter:p,onMouseLeave:y,onTouchStart:j}=m,M=A.useRef(null);A.useEffect(()=>{if(r==="render"&&x(!0),r==="viewport"){let G=S=>{S.forEach(U=>{x(U.isIntersecting)})},H=new IntersectionObserver(G,{threshold:.5});return M.current&&H.observe(M.current),()=>{H.disconnect()}}},[r]),A.useEffect(()=>{if(c){let G=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(G)}}},[c]);let L=()=>{f(!0)},Y=()=>{f(!1),x(!1)};return d?r!=="intent"?[h,M,{}]:[h,M,{onFocus:On(E,L),onBlur:On(w,Y),onMouseEnter:On(p,L),onMouseLeave:On(y,Y),onTouchStart:On(j,L)}]:[!1,M,{}]}function On(r,m){return d=>{r&&r(d),d.defaultPrevented||m(d)}}function y1({page:r,...m}){let{router:d}=ip(),c=A.useMemo(()=>If(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?A.createElement(w1,{page:r,matches:c,...m}):null}function v1(r){let{manifest:m,routeModules:d}=np(),[c,f]=A.useState([]);return A.useEffect(()=>{let h=!1;return m1(r,m,d).then(x=>{h||f(x)}),()=>{h=!0}},[r,m,d]),c}function w1({page:r,matches:m,...d}){let c=Xa(),{manifest:f,routeModules:h}=np(),{basename:x}=ip(),{loaderData:E,matches:w}=x1(),p=A.useMemo(()=>cf(r,m,w,f,c,"data"),[r,m,w,f,c]),y=A.useMemo(()=>cf(r,m,w,f,c,"assets"),[r,m,w,f,c]),j=A.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let Y=new Set,G=!1;if(m.forEach(S=>{let U=f.routes[S.route.id];!U||!U.hasLoader||(!p.some(q=>q.route.id===S.route.id)&&S.route.id in E&&h[S.route.id]?.shouldRevalidate||U.hasClientLoader?G=!0:Y.add(S.route.id))}),Y.size===0)return[];let H=c1(r,x,"data");return G&&Y.size>0&&H.searchParams.set("_routes",m.filter(S=>Y.has(S.route.id)).map(S=>S.route.id).join(",")),[H.pathname+H.search]},[x,E,c,f,p,m,r,h]),M=A.useMemo(()=>f1(y,f),[y,f]),L=v1(y);return A.createElement(A.Fragment,null,j.map(Y=>A.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...d})),M.map(Y=>A.createElement("link",{key:Y,rel:"modulepreload",href:Y,...d})),L.map(({key:Y,link:G})=>A.createElement("link",{key:Y,nonce:d.nonce,...G})))}function j1(...r){return m=>{r.forEach(d=>{typeof d=="function"?d(m):d!=null&&(d.current=m)})}}var sp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sp&&(window.__reactRouterVersion="7.9.1")}catch{}function A1({basename:r,children:m,window:d}){let c=A.useRef();c.current==null&&(c.current=dg({window:d,v5Compat:!0}));let f=c.current,[h,x]=A.useState({action:f.action,location:f.location}),E=A.useCallback(w=>{A.startTransition(()=>x(w))},[x]);return A.useLayoutEffect(()=>f.listen(E),[f,E]),A.createElement(Pg,{basename:r,children:m,location:h.location,navigationType:h.action,navigator:f})}var lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rp=A.forwardRef(function({onClick:m,discover:d="render",prefetch:c="none",relative:f,reloadDocument:h,replace:x,state:E,target:w,to:p,preventScrollReset:y,viewTransition:j,...M},L){let{basename:Y}=A.useContext(_t),G=typeof p=="string"&&lp.test(p),H,S=!1;if(typeof p=="string"&&G&&(H=p,sp))try{let X=new URL(window.location.href),ne=p.startsWith("//")?new URL(X.protocol+p):new URL(p),we=$t(ne.pathname,Y);ne.origin===X.origin&&we!=null?p=we+ne.search+ne.hash:S=!0}catch{Ot(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=Bg(p,{relative:f}),[q,ie,J]=b1(c,M),oe=z1(p,{replace:x,state:E,target:w,preventScrollReset:y,relative:f,viewTransition:j});function ue(X){m&&m(X),X.defaultPrevented||oe(X)}let Q=A.createElement("a",{...M,...J,href:H||U,onClick:S||h?m:ue,ref:j1(L,ie),target:w,"data-discover":!G&&d==="render"?"true":void 0});return q&&!G?A.createElement(A.Fragment,null,Q,A.createElement(y1,{page:U})):Q});rp.displayName="Link";var N1=A.forwardRef(function({"aria-current":m="page",caseSensitive:d=!1,className:c="",end:f=!1,style:h,to:x,viewTransition:E,children:w,...p},y){let j=Hn(x,{relative:p.relative}),M=Xa(),L=A.useContext(fl),{navigator:Y,basename:G}=A.useContext(_t),H=L!=null&&D1(j)&&E===!0,S=Y.encodeLocation?Y.encodeLocation(j).pathname:j.pathname,U=M.pathname,q=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;d||(U=U.toLowerCase(),q=q?q.toLowerCase():null,S=S.toLowerCase()),q&&G&&(q=$t(q,G)||q);const ie=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let J=U===S||!f&&U.startsWith(S)&&U.charAt(ie)==="/",oe=q!=null&&(q===S||!f&&q.startsWith(S)&&q.charAt(S.length)==="/"),ue={isActive:J,isPending:oe,isTransitioning:H},Q=J?m:void 0,X;typeof c=="function"?X=c(ue):X=[c,J?"active":null,oe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ne=typeof h=="function"?h(ue):h;return A.createElement(rp,{...p,"aria-current":Q,className:X,ref:y,style:ne,to:x,viewTransition:E},typeof w=="function"?w(ue):w)});N1.displayName="NavLink";var k1=A.forwardRef(({discover:r="render",fetcherKey:m,navigate:d,reloadDocument:c,replace:f,state:h,method:x=rl,action:E,onSubmit:w,relative:p,preventScrollReset:y,viewTransition:j,...M},L)=>{let Y=T1(),G=M1(E,{relative:p}),H=x.toLowerCase()==="get"?"get":"post",S=typeof E=="string"&&lp.test(E),U=q=>{if(w&&w(q),q.defaultPrevented)return;q.preventDefault();let ie=q.nativeEvent.submitter,J=ie?.getAttribute("formmethod")||x;Y(ie||q.currentTarget,{fetcherKey:m,method:J,navigate:d,replace:f,state:h,relative:p,preventScrollReset:y,viewTransition:j})};return A.createElement("form",{ref:L,method:H,action:G,onSubmit:c?w:U,...M,"data-discover":!S&&r==="render"?"true":void 0})});k1.displayName="Form";function S1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function op(r){let m=A.useContext(Ri);return Ee(m,S1(r)),m}function z1(r,{target:m,replace:d,state:c,preventScrollReset:f,relative:h,viewTransition:x}={}){let E=Lg(),w=Xa(),p=Hn(r,{relative:h});return A.useCallback(y=>{if(s1(y,m)){y.preventDefault();let j=d!==void 0?d:_n(w)===_n(p);E(r,{replace:j,state:c,preventScrollReset:f,relative:h,viewTransition:x})}},[w,E,p,d,c,m,r,f,h,x])}var E1=0,C1=()=>`__${String(++E1)}__`;function T1(){let{router:r}=op("useSubmit"),{basename:m}=A.useContext(_t),d=Jg();return A.useCallback(async(c,f={})=>{let{action:h,method:x,encType:E,formData:w,body:p}=o1(c,m);if(f.navigate===!1){let y=f.fetcherKey||C1();await r.fetch(y,d,f.action||h,{preventScrollReset:f.preventScrollReset,formData:w,body:p,formMethod:f.method||x,formEncType:f.encType||E,flushSync:f.flushSync})}else await r.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:w,body:p,formMethod:f.method||x,formEncType:f.encType||E,replace:f.replace,state:f.state,fromRouteId:d,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,m,d])}function M1(r,{relative:m}={}){let{basename:d}=A.useContext(_t),c=A.useContext(Pt);Ee(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...Hn(r||".",{relative:m})},x=Xa();if(r==null){h.search=x.search;let E=new URLSearchParams(h.search),w=E.getAll("index");if(w.some(y=>y==="")){E.delete("index"),w.filter(j=>j).forEach(j=>E.append("index",j));let y=E.toString();h.search=y?`?${y}`:""}}return(!r||r===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:Wt([d,h.pathname])),_n(h)}function D1(r,{relative:m}={}){let d=A.useContext($f);Ee(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=op("useViewTransitionState"),f=Hn(r,{relative:m});if(!d.isTransitioning)return!1;let h=$t(d.currentLocation.pathname,c)||d.currentLocation.pathname,x=$t(d.nextLocation.pathname,c)||d.nextLocation.pathname;return dl(f.pathname,x)!=null||dl(f.pathname,h)!=null}const cp="/assets/profile-Dvg5Mrpq.png",R1="/assets/email-BmktBa-H.png";function ea(){return n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:cp,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/",onClick:r=>{if(r.preventDefault(),window.location.pathname==="/"){const m=document.getElementById("google-cloud");m&&m.scrollIntoView({behavior:"smooth"})}else sessionStorage.setItem("scrollTo","google-cloud"),window.location.href="/"},children:"WORK"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1npO4k4AAveQdBizDO5rMsA64DmfxBzLA/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email me",style:{lineHeight:0},children:n.jsx("img",{src:R1,alt:"Email",style:{width:"20px",height:"20px",objectFit:"contain"}})})]})]})})})}function df(){return n.jsxs("svg",{className:"footer-arrow",viewBox:"0 0 46 40",fill:"none","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M 40 34 L 8 7",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round"}),n.jsx("path",{d:"M 8 7 L 19 10 M 8 7 L 11 18",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round"})]})}function Yn(){return n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Let's Connect! 🤝"})}),n.jsxs("div",{className:"footer-links",children:[n.jsxs("a",{className:"footer-link",href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",children:[n.jsx(df,{}),n.jsx("span",{children:"LinkedIn"})]}),n.jsxs("a",{className:"footer-link",href:"mailto:shreayaasrini@gmail.com",children:[n.jsx(df,{}),n.jsx("span",{children:"Email"})]})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026"})]})})}const O1="/assets/heroImage-CWryvvzx.png",_1="/assets/Venn-wSdGeou3.png",Ko="/assets/trophy-B47DuTBs.png",U1="/assets/Gilly-Nl1MrirQ.jpeg",B1="/assets/Jeremy-CKFkZdhU.jpeg",L1="/assets/Hrishika-CL87yrMH.jpeg";/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,d,c)=>c?c.toUpperCase():d.toLowerCase()),uf=r=>{const m=Y1(r);return m.charAt(0).toUpperCase()+m.slice(1)},dp=(...r)=>r.filter((m,d,c)=>!!m&&m.trim()!==""&&c.indexOf(m)===d).join(" ").trim(),G1=r=>{for(const m in r)if(m.startsWith("aria-")||m==="role"||m==="title")return!0};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=A.forwardRef(({color:r="currentColor",size:m=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:f="",children:h,iconNode:x,...E},w)=>A.createElement("svg",{ref:w,...q1,width:m,height:m,stroke:r,strokeWidth:c?Number(d)*24/Number(m):d,className:dp("lucide",f),...!h&&!G1(E)&&{"aria-hidden":"true"},...E},[...x.map(([p,y])=>A.createElement(p,y)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=(r,m)=>{const d=A.forwardRef(({className:c,...f},h)=>A.createElement(Q1,{ref:h,iconNode:m,className:dp(`lucide-${H1(uf(r))}`,`lucide-${r}`,c),...f}));return d.displayName=uf(r),d};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],V1=Gn("arrow-left",X1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],K1=Gn("briefcase",I1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],J1=Gn("map-pin",Z1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],W1=Gn("rotate-ccw",F1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]],mf=Gn("sprout",$1),P1="/assets/figma-BrWkYh4v.png",ex="/assets/Miro-Icon-CLoaKXku.png",tx="/assets/notion-logo-no-background-C1XUKvDk.png",ax="/assets/GitHub-BLfHCd-g.png",ix="/assets/Vue.js-DgkQqFWc.png",nx="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M27.255%2080.719c0%207.33-5.978%2013.317-13.309%2013.317C6.616%2094.036.63%2088.049.63%2080.719s5.987-13.317%2013.317-13.317h13.309zm6.709%200c0-7.33%205.987-13.317%2013.317-13.317s13.317%205.986%2013.317%2013.317v33.335c0%207.33-5.986%2013.317-13.317%2013.317-7.33%200-13.317-5.987-13.317-13.317zm0%200'%20fill='%23de1c59'/%3e%3cpath%20d='M47.281%2027.255c-7.33%200-13.317-5.978-13.317-13.309C33.964%206.616%2039.951.63%2047.281.63s13.317%205.987%2013.317%2013.317v13.309zm0%206.709c7.33%200%2013.317%205.987%2013.317%2013.317s-5.986%2013.317-13.317%2013.317H13.946C6.616%2060.598.63%2054.612.63%2047.281c0-7.33%205.987-13.317%2013.317-13.317zm0%200'%20fill='%2335c5f0'/%3e%3cpath%20d='M100.745%2047.281c0-7.33%205.978-13.317%2013.309-13.317%207.33%200%2013.317%205.987%2013.317%2013.317s-5.987%2013.317-13.317%2013.317h-13.309zm-6.709%200c0%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.986-13.317-13.317V13.946C67.402%206.616%2073.388.63%2080.719.63c7.33%200%2013.317%205.987%2013.317%2013.317zm0%200'%20fill='%232eb57d'/%3e%3cpath%20d='M80.719%20100.745c7.33%200%2013.317%205.978%2013.317%2013.309%200%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33%200-13.317-5.987-13.317-13.317s5.986-13.317%2013.317-13.317h33.335c7.33%200%2013.317%205.986%2013.317%2013.317%200%207.33-5.987%2013.317-13.317%2013.317zm0%200'%20fill='%23ebb02e'/%3e%3c/svg%3e",sx="/assets/R-BNsrwNRK.png",lx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAMAAAA7EzkRAAAAFVBMVEVMaXHZd1fZd1babUjZd1faf1rZd1epRaWRAAAABnRSTlMAXawH8g5t5RLrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFOklEQVR42u3WUQ6EIAxAQcDV+x95r1Bjk2Kdid81wkMdAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADebtHa9gFedPYTIAIUoAAFiAAFKEABIkABClCACFCAAhQgAkSAAkSACFCACBABChABIkABIkAEKEAEiAAFiAARoAARIAIUIAJEgAJEgAhQgAgQAQoQASJAAQpQgAhQgAIUIAIUoAAFiAAFKEABIkABClCACBABChABIkABIkAEKEAEiAAFiAARoAARIAIUIAJEgAJEgAhQgAgQAQoQASJAASJABChABIgABShAASJAAQpQgAhQgAIUIAIUoAAFiAARoAARIAIUIAJEgAJEgAhQgAjwnjNmfq2EGVwYAT4UvO33AqzZDwEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoACTHTHfCzC4MNkBHsnGBYUEiAARIAgQAYIAESAIEAGCABEgCBABggARIAgQAYIAESAIEAGCABEgCBABggARIAgQAYIAESAIEAEiQBAgAgQBIkAQIAIEASJAECACBAEiQBAgAgQBIkAQIAIEASJAECACBAEiQBAgAgQBIkAQIAIEASJABAgCRIAgQAQIAkSAIEAECAJEgCBABAgCRIDwNMCVzJL2lt3LyGaLmr+xdmeLBChABIgABYgAEaAAESACFCACRIACRIAIUIAIEAEKEAEiQAEiQAQoQASIAAWIABGgABEgAhQgAkSAAhSgABGgAAUoQAQoQAEKEAEKUIACRIAIUIAIEAEKEAEiQAEiQAQoQASIAAWIABGgABEgAhQgAkSAAkSACFCACBABChABIkABIkAEKEABChABClCAAkSAAhSgABGgAAUoQAQoQAEKEAEiQAEiQAQoQASIAAWIABGgABEgAhQgAkSAAkSACDDJjFnRBy6aVyb6HKto3mhiJp+4W/OOXa8bX5CZ/EVqU9YbAuzwCyNAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKcEvnDCqaV3cyg86ieQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJv8Af3P8SOrUE9bAAAAAElFTkSuQmCC",rx="/assets/python-Dz9eQFi4.png",ox="/assets/webflow-Dh5T2Dhk.png",cx="/assets/adobe-7c3gxfIi.png",dx="/assets/database-Y4cnJNVp.png",ux="/assets/physics-DmQed7ww.png",mx="/assets/picture-cSGQrkyS.png",fx="/assets/shopping%20cart-KdPjy6I3.png",px="/assets/01956daf-188e-495e-bc0f-251abf3b48ed-WN6Cz8SU.JPG",hx="/assets/IMG_1779-CwtVEQNl.JPG",gx="/assets/IMG_1864-TCcz0Hyz.JPG",xx="/assets/IMG_2558-B31_H-W5.jpeg",bx="/assets/IMG_2649-Dq9FPoGj.jpeg",yx="/assets/IMG_2801-DTf2SAxw.jpeg",vx="/assets/IMG_3139-Bs8i1A7o.jpeg",wx="/assets/IMG_3556-CZlIGG0j.JPG",jx="/assets/IMG_3849-BiWl6fr8.jpeg",Ax="/assets/IMG_3954-Diuzxg-g.jpeg",Nx="/assets/e5c101e2-8a86-45d0-af32-bba8116e26dd-DWy7hsYs.JPG",kx="/assets/f0d1cf2b-9103-47e6-ae39-8120952977a6-B2PnEKOd.JPG",Sx="/assets/IMG_0918-CryJjCdq.jpeg",zx="/assets/IMG_1935-tYr4Wfuj.JPG",Ex="/assets/IMG_3968-8X4J9Nmf.jpeg",Cx=[{date:"May 2020",place:"Chennai, India",type:"location",body:"After wrapping up high school with a suitcase full of dreams in hand, I made one of the biggest and best decisions of my life, to pursue my bachelor's degree in the United States. Little did I know, this was just the start of an incredible adventure."},{date:"Aug 2020",place:"UMass Amherst",type:"location",body:"I stepped foot on the beautiful UMass Amherst campus! I was really interested in both tech and psychology. So I decided to double major in Computer Science and Psychology. Why choose one when you can have both, right?",hl:["double major in Computer Science and Psychology"]},{date:"Aug 2022",place:"Resident Assistant",type:"job",body:"Two years into my bachelor's journey, I got my first job, yayyy! Being an RA taught me how to create community, from late night on-call duties to organizing fun floor events, I learned how to understand people's needs and build environments where everyone could thrive.",hl:["how to create community","understand people's needs"]},{date:"Feb 2024",place:"Head Teaching Assistant",type:"job",body:'I had taken up a volunteer position and realized I love helping others learn, so I applied to be a Teaching Assistant. A semester later I was promoted to Head TA, leading a team of TAs and supporting 80+ students in the course "Human-Computer Interaction."',hl:["I love helping others learn","leading a team of TAs and supporting 80+ students"]},{date:"Aug 2024",place:"Cornell University, Ithaca",type:"location",body:"Bachelor's degree in hand, I wasn't ready to stop learning. Enter Cornell University and a masters in Information Science with a UX focus! I absolutely loved choosing a field that combined my passion for psychology and my skills in technology. I learned about user research methods, design, prototyping and strategy. Plus the campus is absolutely stunning, I loved being so close to nature, the hiking trails, the waterfalls it was all so breathtaking.",hl:["loved choosing a field that combined my passion for psychology and my skills in technology","I loved being so close to nature, the hiking trails, the waterfalls"]},{date:"Aug 2024",place:"Graduate Teaching Specialist",type:"job",body:"With some experience in teaching from my time at UMass and my passion to help others learn I accepted a role as a Graduate Teaching Specialist, supporting 200+ students across design and programming coursework. I graded assignments and mentored students as they explored design practices.",hl:["supporting 200+ students across design and programming coursework"]},{date:"Jan 2025",place:"UX Designer + Researcher",type:"job",body:"I lived my capstone dream, getting to work directly with Google Cloud. Our team was mentored by some of the nicest folks at Google Cloud, and I got to learn so much about enterprise design and research.",hl:["getting to work directly with Google Cloud"]},{date:"May 2025",place:"Research Assistant",type:"job",body:`During summer 2025 I worked as an RA with a PhD student, Tuan-He-Lee, diving into co-design research with remote mental health support systems.

 And then starting Nov 2025 I have been working with a PhD student, Jeremy Faulk, creating and testing interactive systems that connect physiological sensors (e.g., heart rate monitors) with real-time lighting and sound applications (e.g., Philips Hue, Ableton Live), while logging and processing experimental data using Python.`,hl:["diving into co-design research with remote mental health support systems","creating and testing interactive systems","experimental data using Python"]},{date:"Present",place:"Actively looking for full-time roles",type:"job",bodyPlace:!0,badge:"Open to relocation nationwide"}];function Tx(r,m=[]){if(!m.length)return r;const d=m.map(h=>h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),c=new RegExp(`(${d.join("|")})`,"g");return r.split(c).map((h,x)=>m.includes(h)?n.jsx("span",{className:"journey-hl",children:h},x):h)}const Mx=[{img:px,rotate:"-4deg",landscape:!1},{img:hx,rotate:"3deg",landscape:!1},{img:gx,rotate:"-2deg",landscape:!0},{img:xx,rotate:"5deg",landscape:!1},{img:bx,rotate:"-3deg",landscape:!1},{img:yx,rotate:"2deg",landscape:!1},{img:vx,rotate:"-5deg",landscape:!1},{img:Ax,rotate:"3deg",landscape:!1},{img:wx,rotate:"4deg",landscape:!0},{img:jx,rotate:"-2deg",landscape:!1},{img:Nx,rotate:"-4deg",landscape:!0},{img:kx,rotate:"2deg",landscape:!0},{img:Sx,rotate:"-3deg",landscape:!1},{img:zx,rotate:"4deg",landscape:!1},{img:Ex,rotate:"-2deg",landscape:!1}],Go=[{src:P1,alt:"Figma",rotate:"-8deg",x:"15%",y:"5%",size:52},{src:ex,alt:"Miro",rotate:"6deg",x:"62%",y:"3%",size:46},{src:tx,alt:"Notion",rotate:"-4deg",x:"38%",y:"14%",size:44},{src:ax,alt:"GitHub",rotate:"9deg",x:"72%",y:"18%",size:48},{src:ix,alt:"Vue",rotate:"-6deg",x:"20%",y:"28%",size:42},{src:nx,alt:"Slack",rotate:"5deg",x:"55%",y:"32%",size:44},{src:sx,alt:"R",rotate:"-9deg",x:"10%",y:"48%",size:40},{src:lx,alt:"Claude Code",rotate:"7deg",x:"68%",y:"46%",size:46},{src:rx,alt:"Python",rotate:"-5deg",x:"30%",y:"56%",size:42},{src:ox,alt:"Webflow",rotate:"8deg",x:"75%",y:"62%",size:40},{src:cx,alt:"Adobe CC",rotate:"-7deg",x:"18%",y:"70%",size:42},{src:dx,alt:"SQL",rotate:"6deg",x:"58%",y:"74%",size:40},{src:ux,alt:"React JS",rotate:"-4deg",x:"40%",y:"84%",size:38},{src:mx,alt:"Framer",rotate:"5deg",x:"45%",y:"38%",size:38}];function Dx(){const r=A.useRef([]),m=A.useRef(null);A.useEffect(()=>{const j=new IntersectionObserver(M=>M.forEach(L=>{L.isIntersecting&&L.target.classList.add("in")}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(M=>M&&j.observe(M)),()=>j.disconnect()},[]);const d=j=>{j&&!r.current.includes(j)&&r.current.push(j)},c=()=>{const j=m.current;if(!j)return;const M=performance.now(),L=Y=>{j.scrollLeft=Math.max(0,(j.scrollWidth-j.clientWidth)/2),Y-M<700&&requestAnimationFrame(L)};requestAnimationFrame(L)},[f,h]=A.useState(()=>Go.map(()=>null)),x=A.useRef(0),E=A.useRef(null),w=(j,M)=>{if(f[M]||!E.current)return;const L=j.currentTarget.getBoundingClientRect(),Y=E.current.getBoundingClientRect(),G=x.current++,H=(Math.random()-.5)*Y.width*.26,S=(Math.random()-.5)*10,U=Math.min(G*6,40),q=Y.left+Y.width*.36+H,ie=Y.top+Y.height*.56-U+S,J=q-(L.left+L.width/2),oe=ie-(L.top+L.height/2),ue=(Math.random()-.5)*70;h(Q=>Q.map((X,ne)=>ne===M?{tx:J,ty:oe,spin:ue,z:100+G}:X))},p=()=>{x.current=0,h(Go.map(()=>null))},y=f.some(Boolean);return n.jsxs("div",{className:"about-page",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fjalla+One&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }

        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        .about-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background:
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
        }

        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); filter: blur(0px); }
          25% { transform: translateY(-30px) rotate(2deg) scale(1.05); filter: blur(1px); }
          50% { transform: translateY(-20px) rotate(-1deg) scale(0.95); filter: blur(0.5px); }
          75% { transform: translateY(-40px) rotate(1deg) scale(1.02); filter: blur(1.5px); }
        }

        .content-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

        /* About section wash */
        .about-section {
          padding: 5rem 0 4rem;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(20px);
          position: relative;
        }

        /* Reveal animation */
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.in { opacity: 1; transform: none; }

        /* Section title — "How I Got Here": Fjalla One, pink */
        .section-title {
          font-family: 'Fjalla One', sans-serif;
          font-weight: 400;
          color: var(--rose-pompadour);
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          letter-spacing: 0.01em;
          margin-bottom: 3rem;
        }

        /* Journey — left-aligned timeline */
        .journey { position: relative; padding-left: 2.5rem; margin-bottom: 1rem; }
        .journey-entry {
          position: relative;
          margin-bottom: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
        }
        .journey-entry:last-child { margin-bottom: 0; }
        /* dot */
        .journey-entry::before {
          content: '';
          position: absolute;
          left: calc(-2.5rem + 1px);
          top: 8px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--rose-pompadour);
          border: 4px solid #fff;
          box-shadow: 0 2px 8px rgba(226, 115, 150, 0.4);
          z-index: 2;
        }
        /* connecting line to the next dot — hidden on the last entry */
        .journey-entry::after {
          content: '';
          position: absolute;
          left: calc(-2.5rem + 7px);
          top: 24px;
          bottom: calc(-2.75rem - 8px);
          width: 3px;
          background: linear-gradient(to bottom, var(--rose-pompadour), var(--amaranth-pink));
          border-radius: 2px;
          z-index: 1;
        }
        .journey-entry:last-child::after { display: none; }
        .journey-text { max-width: 640px; }
        .journey-heading {
          font-family: 'Fjalla One', sans-serif;
          font-size: 1.35rem;
          color: #1a1a1a;
          letter-spacing: 0.01em;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .journey-place { display: inline-flex; align-items: center; gap: 0.3rem; }
        .journey-place svg { color: var(--rose-pompadour); flex-shrink: 0; }
        .journey-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.78;
          max-width: 640px;
          white-space: pre-wrap;
        }
        .journey-hl {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        .journey-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 115, 150, 0.25);
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
        }

        /* pulsing dot for the Present entry's badge */
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          position: relative;
        }
        .badge-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.4);
          animation: badgePulse 1.8s ease-out infinite;
        }
        @keyframes badgePulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          70%  { transform: scale(2);   opacity: 0; }
          100% { transform: scale(2);   opacity: 0; }
        }

        /* dot on the timeline for the Present entry — pink, static */
        .journey-entry--present::before {
          background: var(--rose-pompadour) !important;
        }

        /* ── Tool basket widget ── */
        .journey-basket-wrap {
          flex-shrink: 0;
          width: 360px;
          position: relative;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          padding-bottom: 0.5rem;
        }
        /* sticker zone spans the full height above the cart */
        .sticker-zone {
          position: absolute;
          top: 0; left: 0; right: 0;
          bottom: 155px;
          pointer-events: none;
        }
        /* tappable wrapper — a tap drops the sticker into the cart */
        .tool-sticker-drag {
          position: absolute;
          pointer-events: auto;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          color: inherit;
          user-select: none;
          -webkit-user-select: none;
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 3;
        }
        .tool-sticker-drag:hover { z-index: 50; }
        .tool-sticker-drag:active { transform: scale(0.9); transition: transform 0.1s ease; }
        /* tool tipped into the cart: drop + settle, then stay put */
        .tool-sticker-drag.in-cart {
          animation: fallIntoCart 0.72s forwards;
          pointer-events: none;
          cursor: default;
        }
        @keyframes fallIntoCart {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            animation-timing-function: cubic-bezier(0.5, 0, 0.85, 0.35);
          }
          62% {
            transform: translate(var(--tx, 0), calc(var(--ty, 0) + 15px))
                       rotate(var(--spin, 0deg)) scale(0.6);
            animation-timing-function: cubic-bezier(0.3, 0, 0.4, 1);
          }
          100% {
            transform: translate(var(--tx, 0), var(--ty, 0))
                       rotate(var(--spin, 0deg)) scale(0.64);
          }
        }
        .tool-sticker {
          position: relative;
          display: flex; flex-direction: column; align-items: center;
          filter: drop-shadow(0 4px 8px rgba(226, 115, 150, 0.3));
          animation: stickerDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .tool-sticker-drag.in-cart .tool-sticker::after { opacity: 0 !important; }
        @keyframes stickerDrop {
          from { opacity: 0; transform: translateY(-28px) scale(0.65) rotate(var(--rot,0deg)); }
          to   { opacity: 1; transform: translateY(0)      scale(1)    rotate(var(--rot,0deg)); }
        }
        .tool-sticker img {
          object-fit: contain;
          border-radius: 8px;
          display: block;
          transition: transform 0.2s ease;
        }
        .tool-sticker:hover img { transform: scale(1.18); }

        /* CSS tooltip */
        .tool-sticker {
          --tooltip-text: '';
        }
        .tool-sticker::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(45, 45, 45, 0.88);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          white-space: nowrap;
          padding: 4px 9px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.18s ease;
          z-index: 20;
        }
        .tool-sticker:hover::after { opacity: 1; }

        /* basket image container — right-aligned to match cart position */
        .basket-svg-wrap {
          position: relative; z-index: 2;
          width: 320px;
          filter: drop-shadow(0 10px 24px rgba(226, 115, 150, 0.3));
          margin-top: 160px;
        }
        .basket-svg-wrap img { width: 100%; height: auto; display: block; }

        /* Cart status — hint and tidy button cross-fade in the same spot */
        .cart-status {
          align-self: center;
          margin-top: 1rem;
          z-index: 5;
          display: grid;
          place-items: center;
          min-height: 2.4rem;
        }
        .cart-status > * { grid-area: 1 / 1; }

        .cart-hint {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-style: italic;
          color: var(--deep-rose);
          text-align: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .cart-hint.show { opacity: 1; }

        .tidy-btn {
          border: none;
          background: var(--rose-pompadour);
          color: #fff;
          font-family: 'Fjalla One', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(226, 115, 150, 0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.2s ease, background 0.2s ease;
        }
        .tidy-btn.show {
          opacity: 1;
          pointer-events: auto;
        }
        .tidy-btn:hover {
          background: var(--deep-rose);
          transform: translateY(-2px) scale(1.05);
        }


        /* Polaroid strip — horizontal scroll, no visible scrollbar */
        .polaroid-hint {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-style: italic;
          color: var(--deep-rose);
          margin: 0.25rem 0 1.5rem;
        }

        /* ── Polaroid strip ──
           Mobile (base): simple horizontal scroll.
           Desktop (>=769px): full-bleed, overlapped+centered by default,
           fans apart on hover and overflows to the window edges. */
        .polaroids-strip-wrap {
          margin: 4rem -2rem 0.75rem;
          overflow-x: auto;
          padding: 1.5rem 2rem 2.5rem;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .polaroids-strip-wrap::-webkit-scrollbar { display: none; }
        .polaroids {
          display: flex;
          flex-wrap: nowrap;
          gap: 1.25rem;
          width: max-content;
          padding: 0.5rem 0;
          align-items: center;
        }
        /* Pink polaroid frame — portrait */
        .polaroid {
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          width: 190px;
          background: #f2a8bf;
          border-radius: 4px;
          box-shadow: 0 8px 24px rgba(226, 115, 150, 0.3);
          padding: 10px 10px 20px;
          display: flex; flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          cursor: pointer;
        }
        /* Pink polaroid frame — landscape */
        .polaroid.landscape {
          width: 270px;
        }
        .polaroid:hover {
          transform: rotate(0deg) scale(1.06) translateY(-10px) !important;
          z-index: 30;
        }
        /* Portrait photo: square crop */
        .polaroid .pol-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 2px;
          display: block;
        }
        /* Landscape photo: wider crop */
        .polaroid.landscape .pol-img {
          aspect-ratio: 4 / 3;
        }

        /* Desktop: 3 polaroids by default, fan out + scroll on hover */
        @media (min-width: 769px) {
          .polaroids-strip-wrap {
            width: 100vw;
            margin: 4rem 0 0.75rem;
            margin-left: calc(50% - 50vw);
            overflow: visible;
            padding: 1.5rem 0 2.5rem;
          }
          .polaroids {
            display: flex;
            width: 100%;
            align-items: center;
            /* DEFAULT: flexbox centers the 3 cards — no scroll, so nothing can shift */
            justify-content: center;
            gap: 0;
            overflow-x: hidden;
            overflow-y: hidden;
            scrollbar-width: none;
            padding: 1.5rem 0;
          }
          .polaroids::-webkit-scrollbar { display: none; }
          /* side spacers collapse by default, expand on hover so the row is scrollable */
          .polaroids::before,
          .polaroids::after { content: ''; flex: 0 0 0; }
          /* every polaroid collapsed by default... */
          .polaroid {
            max-width: 0;
            opacity: 0;
            margin-left: 0;
            padding: 0;
            overflow: hidden;
            transition: max-width 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        margin-left 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        padding 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                        opacity 0.45s ease,
                        transform 0.35s ease, box-shadow 0.35s ease;
          }
          /* ...except the middle three, shown by default */
          .polaroid:nth-child(6),
          .polaroid:nth-child(7),
          .polaroid:nth-child(8) {
            max-width: 320px;
            opacity: 1;
            margin-left: 1.75rem;
            padding: 10px 10px 20px;
          }
          .polaroid:nth-child(6) { margin-left: 0; }

          /* HOVER: switch to a left-aligned scrollable row + full-width spacers */
          .polaroids-strip-wrap:hover .polaroids {
            justify-content: flex-start;
            overflow-x: auto;
          }
          .polaroids-strip-wrap:hover .polaroids::before,
          .polaroids-strip-wrap:hover .polaroids::after { flex: 0 0 50vw; }
          .polaroids-strip-wrap:hover .polaroid {
            max-width: 320px;
            opacity: 1;
            margin-left: 1.75rem;
            padding: 10px 10px 20px;
          }
          .polaroids-strip-wrap:hover .polaroid:nth-child(6) { margin-left: 1.75rem; }
        }

        /* Footer */
        /* Responsive */
        @media (max-width: 768px) {
          .about-section { padding: 3rem 0; }
          .journey { padding-left: 2rem; }
          .journey-entry::before { left: calc(-2rem + 1px); }
          .journey-basket-wrap { display: none; }
        }
        @media (max-width: 480px) {
          .polaroid { width: 150px; }
          .polaroid.landscape { width: 220px; }
          .polaroids-strip-wrap { margin: 3rem -1rem 2.5rem; padding: 1rem 1rem 2rem; }
        }
        `}),n.jsx(ea,{}),n.jsx("section",{className:"about-section",children:n.jsxs("div",{className:"content-container",children:[n.jsx("h1",{className:"section-title reveal",ref:d,children:"How I Got Here"}),n.jsxs("div",{style:{display:"flex",gap:"2.5rem",alignItems:"flex-start"},children:[n.jsx("div",{className:"journey",style:{flex:1},children:Cx.map((j,M)=>n.jsx("div",{className:`journey-entry reveal${j.date==="Present"?" journey-entry--present":""}`,ref:d,children:n.jsxs("div",{className:"journey-text",children:[n.jsxs("h3",{className:"journey-heading",children:[j.date,!j.bodyPlace&&",",!j.bodyPlace&&n.jsxs("span",{className:"journey-place",children:[j.type==="location"?n.jsx(J1,{size:16}):n.jsx(K1,{size:16}),j.place]})]}),j.bodyPlace&&n.jsx("p",{className:"journey-body",children:j.place}),j.body&&n.jsx("p",{className:"journey-body",children:Tx(j.body,j.hl)}),j.badge&&n.jsxs("span",{className:"journey-badge",children:[n.jsx("span",{className:"badge-dot"}),j.badge]})]})},M))}),n.jsxs("div",{className:"journey-basket-wrap reveal",ref:d,children:[n.jsx("div",{className:"sticker-zone",children:Go.map((j,M)=>{const L=f[M];return n.jsx("button",{type:"button",className:`tool-sticker-drag${L?" in-cart":""}`,style:{left:j.x,top:j.y,...L&&{"--tx":`${L.tx}px`,"--ty":`${L.ty}px`,"--spin":`${L.spin}deg`,zIndex:L.z}},onClick:Y=>w(Y,M),"aria-label":`Add ${j.alt} to the cart`,children:n.jsx("div",{className:"tool-sticker","data-tooltip":j.alt,style:{"--rot":j.rotate,animationDelay:`${M*.07}s`},children:n.jsx("img",{src:j.src,alt:j.alt,draggable:!1,style:{width:j.size,height:j.size}})})},M)})}),n.jsx("div",{className:"basket-svg-wrap",ref:E,children:n.jsx("img",{src:fx,alt:"Skills shopping cart",style:{width:"100%",height:"auto",display:"block"}})}),n.jsxs("div",{className:"cart-status",children:[n.jsx("p",{className:`cart-hint${y?"":" show"}`,children:"Tap on the tools to add them to the cart"}),n.jsx("button",{className:`tidy-btn${y?" show":""}`,onClick:p,children:"✦ Reorient"})]})]})]}),n.jsx("div",{className:"polaroids-strip-wrap reveal",ref:d,onMouseEnter:c,children:n.jsx("div",{className:"polaroids",ref:m,children:Mx.map((j,M)=>n.jsx("div",{className:`polaroid${j.landscape?" landscape":""}`,style:{transform:`rotate(${j.rotate})`},children:n.jsx("img",{src:j.img,alt:`Memory ${M+1}`,className:"pol-img"})},M))})}),n.jsx("p",{className:"polaroid-hint reveal",ref:d,children:"hover to see more memories"})]})}),n.jsx(Yn,{})]})}const hl="/assets/capstone-mockup-DhJqv6Er.png",Un="/assets/ithaca-soap-mockup-DK_124JI.png",up="/assets/iName-CvX8Q2r4.png",gl="/assets/routes-aVjpSWBA.png",mp="/assets/ecoCart-DN4gWc14.png",fp="/assets/rShiny-DeYEsmp9.png",pp="/assets/Dialogflow%20CX-BhfPPEZi.png",hp="/assets/Google_Gemini_logo.svg-DssHf0Y7.png",ul="/assets/OpenAI-black-monoblossom-xl2KzdHb.png",gp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M27.255%2080.719c0%207.33-5.978%2013.317-13.309%2013.317C6.616%2094.036.63%2088.049.63%2080.719s5.987-13.317%2013.317-13.317h13.309zm6.709%200c0-7.33%205.987-13.317%2013.317-13.317s13.317%205.986%2013.317%2013.317v33.335c0%207.33-5.986%2013.317-13.317%2013.317-7.33%200-13.317-5.987-13.317-13.317zm0%200'%20fill='%23de1c59'/%3e%3cpath%20d='M47.281%2027.255c-7.33%200-13.317-5.978-13.317-13.309C33.964%206.616%2039.951.63%2047.281.63s13.317%205.987%2013.317%2013.317v13.309zm0%206.709c7.33%200%2013.317%205.987%2013.317%2013.317s-5.986%2013.317-13.317%2013.317H13.946C6.616%2060.598.63%2054.612.63%2047.281c0-7.33%205.987-13.317%2013.317-13.317zm0%200'%20fill='%2335c5f0'/%3e%3cpath%20d='M100.745%2047.281c0-7.33%205.978-13.317%2013.309-13.317%207.33%200%2013.317%205.987%2013.317%2013.317s-5.987%2013.317-13.317%2013.317h-13.309zm-6.709%200c0%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.986-13.317-13.317V13.946C67.402%206.616%2073.388.63%2080.719.63c7.33%200%2013.317%205.987%2013.317%2013.317zm0%200'%20fill='%232eb57d'/%3e%3cpath%20d='M80.719%20100.745c7.33%200%2013.317%205.978%2013.317%2013.309%200%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33%200-13.317-5.987-13.317-13.317s5.986-13.317%2013.317-13.317h33.335c7.33%200%2013.317%205.986%2013.317%2013.317%200%207.33-5.987%2013.317-13.317%2013.317zm0%200'%20fill='%23ebb02e'/%3e%3c/svg%3e",xp="/assets/Vertex%20AI-lFv2_HRt.png",bp="data:image/svg+xml,%3csvg%20width='128'%20height='128'%20viewBox='0%200%20128%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.7127%2050.141L10.9614%2037.3896C-3.6538%2052.0049%20-3.6538%2075.7036%2010.9614%2090.3188L23.7127%2077.5674C20.0761%2073.9303%2018.033%2068.9976%2018.033%2063.8542C18.033%2058.7109%2020.0761%2053.7781%2023.7127%2050.141Z'%20fill='%23E8710A'/%3e%3cpath%20d='M10.9614%2037.3898L23.7128%2050.1411C27.3499%2046.5044%2032.2826%2044.4614%2037.426%2044.4614C42.5693%2044.4614%2047.5021%2046.5044%2051.1392%2050.1411L60.3949%2034.3002C60.2115%2034.1567%2060.0243%2034.0157%2059.8335%2033.8773C45.1808%2022.8868%2024.2929%2024.0564%2010.9614%2037.3898Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M60.4435%2093.3635L51.1298%2077.5675C47.4927%2081.2042%2042.56%2083.2472%2037.4166%2083.2472C32.2733%2083.2472%2027.3405%2081.2042%2023.7034%2077.5675L10.9614%2090.3189C24.2929%20103.65%2045.1827%20104.822%2059.841%2093.8314C60.0468%2093.6779%2060.4529%2093.3635%2060.4529%2093.3635'%20fill='%23F9AB00'/%3e%3cpath%20d='M64.1075%2037.3897C49.4923%2052.0049%2049.4923%2075.7036%2064.1075%2090.3188L76.8589%2077.5675C75.025%2075.774%2073.5651%2073.6345%2072.5637%2071.2729C71.5623%2068.9113%2071.0393%2066.3746%2071.025%2063.8095C71.0107%2061.2444%2071.5054%2058.702%2072.4804%2056.3294C73.4555%2053.9568%2074.8914%2051.8012%2076.7053%2049.9874C78.5191%2048.1736%2080.6747%2046.7376%2083.0472%2045.7626C85.4198%2044.7876%2087.9623%2044.2929%2090.5273%2044.3072C93.0924%2044.3215%2095.6292%2044.8444%2097.9908%2045.8458C100.352%2046.8472%20102.492%2048.3071%20104.285%2050.141L117.037%2037.3897C102.421%2022.7726%2078.7227%2022.7726%2064.1075%2037.3897Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M117.037%2037.3896L104.285%2050.141C107.856%2053.7917%20109.842%2058.7032%20109.814%2063.8095C109.785%2068.9157%20107.744%2073.8048%20104.133%2077.4155C100.523%2081.0262%2095.6336%2083.0673%2090.5274%2083.0958C85.4211%2083.1242%2080.5096%2081.1377%2076.8589%2077.5674L64.1075%2090.3188C78.7227%20104.934%20102.421%20104.934%20117.037%2090.3188C131.652%2075.7036%20131.654%2052.0049%20117.037%2037.3896Z'%20fill='%23E8710A'/%3e%3c/svg%3e",Mi="/assets/figma-BrWkYh4v.png",Zo="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2022.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%202385.7%201919.9'%20style='enable-background:new%200%200%202385.7%201919.9;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23EA4335;}%20.st1{fill:%234285F4;}%20.st2{fill:%2334A853;}%20.st3{fill:%23FBBC05;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M1513.8,528.7h72.8l207.4-207.4l10.2-88c-385.9-340.6-975-303.9-1315.6,82C393.9,422.5,325.2,550,287.8,688%20c23.1-9.5,48.7-11,72.8-4.4l414.7-68.4c0,0,21.1-34.9,32-32.7c184.5-202.6,495-226.2,708-53.8H1513.8z'/%3e%3cpath%20class='st1'%20d='M2089.4,688c-47.7-175.5-145.5-333.3-281.6-454l-291,291c122.9,100.4,192.9,251.7,189.9,410.4v51.7%20c143.1,0,259,116,259,259c0,143.1-116,259-259,259h-518.1l-51.7,52.4v310.7l51.7,51.7h518.1c297,2.3,560.5-190.2,648.7-473.8%20C2443.4,1162.4,2335.4,854.4,2089.4,688L2089.4,688z'/%3e%3cpath%20class='st2'%20d='M669.8,1917h518.1v-414.7H669.8c-36.9,0-73.4-7.9-107-23.3l-72.8,22.5l-208.8,207.4l-18.2,72.8%20C380.1,1870.1,523,1917.6,669.8,1917L669.8,1917z'/%3e%3cpath%20class='st3'%20d='M669.8,571.6c-287.8,1.7-542.7,186-634.5,458.7c-91.8,272.7-0.3,573.7,227.8,749.1l300.5-300.5%20c-130.4-58.9-188.3-212.3-129.4-342.7c58.9-130.4,212.3-188.3,342.7-129.4c57.4,26,103.4,72,129.4,129.4l300.5-300.5%20C1078.9,668.6,880.2,570.9,669.8,571.6L669.8,571.6z'/%3e%3c/g%3e%3c/svg%3e",yp="/assets/notion-logo-no-background-C1XUKvDk.png",vp="/assets/python-logo-only-Bt12VGEE.png",wp="/assets/Miro-Icon-CLoaKXku.png",Rx="/assets/RStudio-DE7lGCGx.png",Ox="/assets/google-docs-4ZYrWyNZ.png",jp="/assets/Adobe%20Photoshop-Uqk2Zb6I.png",Ap="/assets/Vue.js-DgkQqFWc.png",Np="/assets/Veutify-GjC5VotX.png",kp="/assets/GitHub-BLfHCd-g.png",Sp="/assets/copilot-color-CWHkV5zn.png",ml="/assets/Canva-BLQe5K32.png",zp=[{id:1,title:"Capstone Project with Google Cloud",description:"Redesigned the Google Cloud platform to offer a linear onboarding flow that creates a guided experience for users of all skill levels.",image:hl,imageType:"laptop",caseStudyUrl:"/google-cloud-case-study",toolLogos:[Mi,gp,yp,Zo,bp,hp,vp,pp,xp],tags:["UX Research","Product Design","UX Strategy","Google Cloud"]},{id:2,title:"Ithaca Soap App",description:"Designed and developed a sustainable-first mobile app using Vue.js for a local business called Ithaca Soap.",image:Un,imageType:"mobile",caseStudyUrl:"/ithaca-soap-case-study",toolLogos:[Ap,Np,kp,Sp,Mi,ml,ul],tags:["Mobile App Design","AI Workflows","Development","UX Research","Vue.js"]},{id:3,title:"Routes to Roots",description:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.",image:gl,imageType:"mobile",caseStudyUrl:"/routes-to-roots-case-study",toolLogos:[Mi,wp,ml,Rx,ul,Ox,jp],tags:["UX Research","Interaction Design","Cultural Probes","Auto Ethnography"],award:"Awarded best project for social impact and uniqueness amongst 75+ others in class"},{id:4,title:"iName App",description:"Built a mobile app and wearable environment that helps people pronounce and remember names correctly, fostering identity and inclusion.",image:up,imageType:"mobile",caseStudyUrl:"/iname-case-study",tags:["Mobile App Design","Wearable Technology","UX Research","Inclusivity Design"]},{id:5,title:"EcoCart App",description:"Designed a mobile app that makes sustainable grocery shopping simple and actionable by turning confusing eco-labels into clear choices.",image:mp,imageType:"laptop",caseStudyUrl:"/ecocart-case-study",tags:["Product Design","Sustainability","UX Research","Mobile App Design"]},{id:6,title:"Immunization Data Analysis Dashboard",description:"Developed an interactive dashboard that transforms messy vaccination data into clear insights for educators and policymakers.",image:fp,imageType:"mobile",caseStudyUrl:"/rshiny-case-study",tags:["Data Visualization","Interactive Design","R Shiny","Data Analysis"]}];function _x(){const r=A.useRef([]);A.useEffect(()=>{const d=[];return r.current.forEach((c,f)=>{if(c){const h=new IntersectionObserver(x=>{x.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${f*.2}s`,E.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-100px"});h.observe(c),d.push(h)}}),()=>{d.forEach(c=>c.disconnect())}},[]);const m=d=>{window.location.href=d};return n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        /* Animated Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: floatBackground 25s ease-in-out infinite;
        }

        @keyframes floatBackground {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) rotate(1deg) scale(1.02);
          }
          66% { 
            transform: translateY(-30px) rotate(-1deg) scale(0.98);
          }
        }

        /* Content Container - Same as About.jsx */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header - Fixed to match About.jsx structure */
        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInHeader 1s ease-out 0.2s forwards;
        }

        @keyframes slideInHeader {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .custom-logo {
          height: 3.5rem;
          width: auto;
          object-fit: contain;
          display: inline-block;
          transition: transform 0.3s ease, filter 0.3s ease;
          vertical-align: middle;
        }

        .custom-logo:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px rgba(226, 115, 150, 0.4));
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-links a:hover {
          transform: scale(1.05);
          color: var(--rose-pompadour);
        }

        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: var(--rose-pompadour);
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-links a:hover:after {
          width: 100%;
        }

        /* Tools row below project descriptions */
        .tools-row {
          display: flex;
          gap: 0.6rem;
          margin-top: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .tool-badge {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.04);
          font-size: 0.7rem;
          color: var(--text-primary);
        }

        .tool-text {
          padding: 0 6px;
          text-align: center;
        }

        /* Tool logos row (Cornell project) */
        .tool-logos-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .tool-logo {
          width: 48px !important;
          height: 48px !important;
          object-fit: contain;
          padding: 0;
          display: inline-block;
        }

        /* Work Section */
        .work-section {
          padding: 4rem 0;
          position: relative;
        }

        /* Project Row - Alternating Layout with Animation */
        .project-row {
          display: flex;
          align-items: center;
          gap: 4rem;
          margin-bottom: 6rem;
          min-height: 500px;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-row.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Reverse layout for even rows */
        .project-row.reverse {
          flex-direction: row-reverse;
        }

        .project-row:hover {
          transform: translateY(-5px) scale(1.01);
        }

        /* Mockup Side */
        .mockup-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          position: relative;
        }

        /* Smaller hover text - FIXED SIZE */
        .mockup-side::after {
          content: 'Click to read case study';
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          font-family: 'Roboto', sans-serif;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 10;
          white-space: nowrap;
          /* Smaller dimensions */
          width: 160px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Smaller hover area for the text */
        .mockup-side::before {
          content: '';
          position: absolute;
          bottom: -45px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 50px;
          z-index: 5;
        }

        .project-row:hover .mockup-side::after {
          opacity: 1;
          transform: translateX(-50%) translateY(-3px);
        }

        /* Direct mockup without container */
        .mockup-image-wrapper {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-row:hover .mockup-image-wrapper {
          transform: translateY(-8px) scale(1.02);
        }

        /* Different sizing for laptop vs mobile mockups */
        .mockup-image-wrapper.laptop .mockup-image {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .mockup-image-wrapper.mobile .mockup-image {
          height: 90%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
        }

        .mockup-image {
          image-rendering: high-quality;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: -webkit-crisp-edges;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          filter: contrast(1.02) brightness(1.01);
          transition: all 0.6s ease;
          border-radius: 12px;
        }

        .mockup-placeholder {
          color: #999;
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          text-align: center;
          padding: 3rem;
          border: 2px dashed rgba(153, 153, 153, 0.3);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          width: 80%;
          height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Content Side with Animation */
        .content-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 0;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          line-height: 1.2;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-title {
          transform: translateX(0);
          opacity: 1;
        }

        .project-row:hover .project-title {
          color: var(--rose-pompadour);
          transform: translateX(5px);
        }

        .project-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.7;
          font-family: 'Roboto', sans-serif;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-description {
          transform: translateX(0);
          opacity: 1;
        }

        /* Left side content animation */
        .project-row.reverse .project-title,
        .project-row.reverse .project-description {
          transform: translateX(-20px);
        }

        .project-row.reverse.animate-in .project-title,
        .project-row.reverse.animate-in .project-description {
          transform: translateX(0);
        }

        .project-row.reverse:hover .project-title {
          transform: translateX(-5px);
        }

        /* Main Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 650px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-message {
          margin-bottom: 2rem;
        }

        .footer-message h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          padding: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-links a:hover {
          transform: translateY(-2px) scale(1.1);
        }

        .footer-icon {
          width: 28px;
          height: 28px;
          fill: white;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-links a:hover .footer-icon {
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
          font-weight: 400;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .project-row {
            gap: 3rem;
            min-height: 450px;
          }
          
          .mockup-side {
            min-height: 450px;
          }

          .mockup-image-wrapper {
            height: 450px;
          }

          .project-title {
            font-size: 2.2rem;
          }

          .project-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .project-row,
          .project-row.reverse {
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 4rem;
            min-height: auto;
          }

          .mockup-side::after {
            bottom: -25px;
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
            width: 140px;
            height: 30px;
            border-radius: 12px;
          }

          .mockup-side::before {
            bottom: -35px;
            width: 160px;
            height: 45px;
          }

          .mockup-side {
            min-height: 350px;
            width: 100%;
          }

          .mockup-image-wrapper {
            height: 350px;
          }

          .content-side {
            text-align: center;
            padding: 1rem 0;
          }

          .project-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .project-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }

          /* Reset transforms for mobile */
          .project-row .project-title,
          .project-row .project-description,
          .project-row.reverse .project-title,
          .project-row.reverse .project-description {
            transform: translateY(20px);
          }

          .project-row.animate-in .project-title,
          .project-row.animate-in .project-description,
          .project-row.reverse.animate-in .project-title,
          .project-row.reverse.animate-in .project-description {
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .content-container {
            padding: 0 1rem;
          }

          .project-row {
            margin-bottom: 3rem;
          }

          .mockup-side::after {
            bottom: -20px;
            font-size: 0.65rem;
            padding: 0.3rem 0.6rem;
            width: 120px;
            height: 25px;
            border-radius: 10px;
          }

          .mockup-side::before {
            bottom: -30px;
            width: 140px;
            height: 40px;
          }

          .mockup-side {
            min-height: 280px;
          }

          .mockup-image-wrapper {
            height: 280px;
          }

          .project-title {
            font-size: 1.7rem;
          }

          .project-description {
            font-size: 0.95rem;
          }

          .mockup-placeholder {
            height: 250px;
            padding: 2rem;
            font-size: 1rem;
          }
        }
        `}),n.jsx(ea,{}),n.jsx("section",{className:"work-section",children:n.jsx("div",{className:"content-container",children:zp.map((d,c)=>n.jsxs("div",{ref:f=>r.current[c]=f,className:`project-row ${c%2===1?"reverse":""}`,onClick:()=>m(d.caseStudyUrl),children:[n.jsx("div",{className:"mockup-side",children:n.jsx("div",{className:`mockup-image-wrapper ${d.imageType}`,children:d.image?n.jsx("img",{src:d.image,alt:`${d.title} mockup`,className:"mockup-image"}):n.jsxs("div",{className:"mockup-placeholder",children:[n.jsx("div",{children:"Project Mockup Image"}),n.jsxs("small",{children:["(",d.imageType," mockup)"]})]})})}),n.jsxs("div",{className:"content-side",children:[n.jsx("h2",{className:"project-title",children:d.title}),n.jsx("p",{className:"project-description",children:d.description}),d.tools&&n.jsx("div",{className:"tools-row",children:d.tools.map((f,h)=>n.jsx("div",{className:"tool-badge",title:f,children:n.jsx("span",{className:"tool-text",children:f})},h))}),d.toolLogos&&n.jsx("div",{className:"tool-logos-row",children:d.toolLogos.map((f,h)=>n.jsx("img",{src:f,alt:`tool-${h}`,className:"tool-logo"},h))}),d.id===3&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.75rem"},children:[n.jsx("img",{src:Ko,alt:"Trophy",style:{width:"28px",height:"28px",objectFit:"contain",marginRight:"0.5rem"}}),n.jsx("span",{style:{fontSize:"1.2rem",color:"#4a4a4a",fontWeight:400,lineHeight:"1.7"},children:"Awarded best project for social impact and uniqueness amongst 15+ teams in class"})]}),d.id===4&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.75rem"},children:[n.jsx("img",{src:Ko,alt:"Trophy",style:{width:"28px",height:"28px",objectFit:"contain",marginRight:"0.5rem"}}),n.jsx("span",{style:{fontSize:"1.2rem",color:"#4a4a4a",fontWeight:400,lineHeight:"1.7"},children:"Awarded best project for social impact amongst 250+ students in class"})]})]})]},d.id))})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026 "})]})})]})}function At({end:r,suffix:m="",label:d,inView:c}){const[f,h]=A.useState(0),x=A.useRef(null);return A.useEffect(()=>{if(!c)return;const E=parseInt(r,10),w=3200,p=performance.now(),y=j=>{const M=Math.min((j-p)/w,1),L=1-(1-M)**3;h(Math.floor(L*E)),M<1?x.current=requestAnimationFrame(y):h(E)};return x.current=requestAnimationFrame(y),()=>cancelAnimationFrame(x.current)},[c,r]),n.jsxs("div",{className:"impact-item",children:[n.jsx("div",{className:`impact-box${c?" impact-visible":""}`,children:n.jsxs("span",{className:"impact-num",children:[f,m]})}),n.jsx("p",{className:"impact-lbl",children:d})]})}function tc({cards:r}){const[m,d]=A.useState(0),[c,f]=A.useState(!1),[h,x]=A.useState(!1),E=A.useRef(null);A.useEffect(()=>{if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches){d(r.length);return}const y=()=>{const M=E.current;if(!M)return!1;const L=M.getBoundingClientRect();return L.top<window.innerHeight*.85&&L.bottom>0};if(y()){x(!0);return}const j=()=>{y()&&(x(!0),window.removeEventListener("scroll",j))};return window.addEventListener("scroll",j,{passive:!0}),()=>window.removeEventListener("scroll",j)},[r.length]),A.useEffect(()=>{if(!h||m>=r.length)return;const p=Math.min(1500,600+r[m].msg.length*15);let y;const j=setTimeout(()=>{f(!0),y=setTimeout(()=>{f(!1),d(M=>M+1)},p)},m===0?300:450);return()=>{clearTimeout(j),clearTimeout(y)}},[h,m,r]);const w=m+(c?1:0);return n.jsx("div",{className:"pain-chat",role:"list",ref:E,children:r.slice(0,w).map((p,y)=>{const j=y%2===0?"is-left":"is-right",M=c&&y===m;return n.jsxs("div",{role:"listitem",className:`pain-chat-row ${j}${M?" pain-chat-row--typing":""}`,children:[n.jsx("span",{className:"pain-chat-avatar","aria-hidden":"true",children:p.num}),M?n.jsxs("div",{className:"pain-chat-bubble pain-chat-typing","aria-label":"typing",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}):n.jsx("p",{className:"pain-chat-bubble",children:p.msg})]},p.num)})})}function Ve({flip:r=!1}){const m=r?"M 255,5 C 255,60 40,20 40,75":"M 45,5 C 45,60 260,20 260,75";return n.jsx("div",{className:"road-connector","aria-hidden":"true",children:n.jsxs("svg",{viewBox:"0 0 300 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:m,stroke:"rgba(30,30,30,0.85)",strokeWidth:"28",strokeLinecap:"round"}),n.jsx("path",{d:m,stroke:"rgba(255,255,255,0.4)",strokeWidth:"1.5"}),n.jsx("path",{d:m,stroke:"rgba(255,255,255,0.8)",strokeWidth:"2",strokeDasharray:"12,9"}),n.jsxs("g",{children:[n.jsx("rect",{x:"-9",y:"-5.5",width:"18",height:"11",rx:"3.5",fill:"#e27396",stroke:"white",strokeWidth:"1"}),n.jsx("rect",{x:"-3",y:"-3.5",width:"6",height:"7",rx:"1.5",fill:"#fbd9e3"}),n.jsx("animateMotion",{dur:"12s",repeatCount:"indefinite",rotate:"auto",path:m})]}),n.jsxs("g",{children:[n.jsx("rect",{x:"-8",y:"-5",width:"16",height:"10",rx:"3.5",fill:"#74b5c6",stroke:"white",strokeWidth:"1"}),n.jsx("rect",{x:"-2.5",y:"-3",width:"5",height:"6",rx:"1.5",fill:"#d8eef3"}),n.jsx("animateMotion",{dur:"12s",begin:"-6s",repeatCount:"indefinite",rotate:"auto",path:m})]})]})})}const ff="/assets/ImpactFeas-BnxEt4jt.png",Ux="/assets/designPrinciple1-CHipiyAz.png",Bx="/assets/designPrinciple2-CgjPv5UU.png",Lx="/assets/designPrinciple3-Ctta_cph.png",pf="/assets/pic1-C_TrIBke.png",hf="/assets/pic2-B0OVuRD6.png",gf="/assets/pic3-fothOjgn.png",xf="/assets/pic4-BdM-WB0-.png",bf="/assets/pic5-CVAkf2az.png",yf="/assets/mov1-B29nh02v.gif",vf="/assets/mov2-DxZgrtJC.gif",Hx="/assets/designer-BFcu7eYU.png",Yx="/assets/userresearcher-CXtnJ60P.png",Gx="/assets/productmanager-CdG6H-Kd.png",qx=[{num:"01",label:"Navigation",msg:"Overwhelming navigation and amount of content"},{num:"02",label:"Search",msg:"Irrelevant search results and poor query matching"},{num:"03",label:"No Path",msg:"Lack of clear path to finding answers to a question"},{num:"04",label:"Guidance",msg:"No step-by-step guidance for non-technical users"}];function qo({direction:r="left"}){return n.jsx("div",{className:`fd-arrow fd-arrow-${r}`,"aria-hidden":"true",children:n.jsxs("svg",{viewBox:"0 0 96 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M 88 10 C 68 30, 58 2, 44 16 C 34 26, 26 14, 12 28",stroke:"#2d2d2d",strokeWidth:"2.5",strokeLinecap:"round"}),n.jsx("path",{d:"M 23 24.5 L 12 28 L 16.5 17.5",stroke:"#2d2d2d",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}function Qx(){const[r,m]=A.useState(!1),[d,c]=A.useState("context"),[f,h]=A.useState(null),x=A.useRef(null);A.useEffect(()=>{const y=new IntersectionObserver(Y=>Y.forEach(G=>G.isIntersecting&&G.target.classList.add("visible")),{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(Y=>y.observe(Y));const j=new IntersectionObserver(([Y])=>{Y.isIntersecting&&(m(!0),j.disconnect())},{threshold:.1});x.current&&j.observe(x.current);const M=["context","overview","problem","solution-preview","impact","design-process","final-design","not-to-build","takeaways","skills"],L=()=>{const Y=window.innerHeight*.35;let G=M[0];for(const H of M){const S=document.getElementById(H);S&&S.getBoundingClientRect().top<=Y&&(G=H)}c(G)};return L(),window.addEventListener("scroll",L,{passive:!0}),()=>{y.disconnect(),j.disconnect(),window.removeEventListener("scroll",L)}},[]);const E=()=>document.getElementById("final-design")?.scrollIntoView({behavior:"smooth"}),w=[{src:Mi,name:"Figma"},{src:gp,name:"Slack"},{src:yp,name:"Notion"},{src:Zo,name:"Google Cloud"},{src:bp,name:"Google Colab"},{src:hp,name:"Gemini"},{src:vp,name:"Python"},{src:pp,name:"DialogFlow CX"},{src:xp,name:"Vision AI"}],p=[{id:"context",label:"Context"},{id:"overview",label:"Overview"},{id:"problem",label:"Problem"},{id:"solution-preview",label:"Solution"},{id:"impact",label:"Key Outputs"},{id:"design-process",label:"Design Process"},{id:"final-design",label:"Final Design"},{id:"not-to-build",label:"Prioritization"},{id:"takeaways",label:"3 Lessons Learned"},{id:"skills",label:"Skills Built"}];return n.jsxs("div",{className:"cs-root",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: #ECEBE1;
        }
        body {
          min-height: 100%;
        }

        .cs-root {
          min-height: 100vh;
          color: #2d2d2d;
          font-family: 'DM Sans', sans-serif;
          /* clip instead of hidden — hidden promotes overflow-y to auto,
             which breaks position:sticky on all descendants */
          overflow-x: clip;
        }

        /* ── HERO ──────────────────────────────────────────────── */
        .cs-hero {
          width: 100%;
          padding: 3.5rem 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: transparent;
          overflow: hidden;
          gap: 0.75rem;
        }
        .cs-hero-img {
          width: 100%;
          max-width: 880px;
          height: auto;
          object-fit: contain;
          display: block;
          opacity: 0;
          animation: heroFade 1.2s ease-out .2s forwards;
        }
        .cs-hero-subtitle {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          opacity: 0;
          animation: heroFade 1.2s ease-out .4s forwards;
        }
        @keyframes heroFade { to { opacity: 1; } }

        /* ── CONTENT COLUMN ────────────────────────────────────── */
        .cs-content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0;
          /* allow the grid track to shrink below children's min-content so a
             single nowrap/wide element can't blow the column past the viewport */
          min-width: 0;
        }

        .cs-page-layout {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 200px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .cs-sidebar {
          position: sticky;
          /* sits just below the sticky header (~6.5 rem) when scrolling */
          top: 7.5rem;
          align-self: start;
          width: 200px;
          /* align first nav link with the Cornell logo inside .cs-intro (padding-top: 4.5rem) */
          padding-top: 4.5rem;
        }
        .cs-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: .95rem;
        }
        .cs-sidebar-link {
          text-decoration: none;
          color: #aaa;
          font-family: 'DM Sans', sans-serif;
          font-size: .75rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          transition: color .2s ease, padding-left .2s ease;
          position: relative;
          padding-left: 1rem;
          display: block;
          line-height: 1.4;
        }
        /* left‑bar indicator */
        .cs-sidebar-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 100%;
          border-radius: 2px;
          background: transparent;
          transition: background .2s ease;
        }
        .cs-sidebar-link:hover {
          color: #e27396;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link:hover::before {
          background: rgba(226, 115, 150, .35);
        }
        /* ── active state: bold pink + solid left bar ── */
        .cs-sidebar-link.active {
          color: #e27396;
          font-weight: 700;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link.active::before {
          background: #e27396;
        }

        /* ── INTRO ─────────────────────────────────────────────── */
        .cs-intro { padding: 4.5rem 0 3rem; }

        .cs-logo-bar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          justify-content: flex-start;
        }
        .cs-cornell-badge {
          background: #b31b1b;
          color: white;
          font-family: 'Fjalla One', sans-serif;
          font-size: .82rem;
          padding: .35rem .9rem;
          border-radius: 4px;
          letter-spacing: .04em;
        }
        .cs-gc-logo { height: 34px; width: auto; object-fit: contain; }
        .cs-logo-sep { font-size: 1.3rem; color: #ccc; font-weight: 300; }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 2.5rem;
        }
        .cs-tag {
          border: 1.5px solid rgba(45,45,45,.22);
          border-radius: 50px;
          padding: .3rem 1rem;
          font-size: .83rem;
          color: #555;
          background: rgba(255,255,255,.5);
          font-family: 'DM Sans', sans-serif;
        }

        .cs-sublabel {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: .55rem;
        }

        .cs-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin-bottom: 3rem;
          max-width: none;
          white-space: nowrap;
          display: block;
        }
        .cs-solution-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin: 1.25rem 0 1.5rem;
          max-width: none;
          white-space: nowrap;
          display: block;
        }

        /* metadata grid — explicit rows to match sketch */
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 3.5rem auto 2.5rem auto;
          max-width: 1200px;
          background: transparent;
          border: none;
        }
        .cs-meta-row {
          display: grid;
          gap: 0;
          width: 100%;
        }
        .cs-meta-row-top {
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 6px 6px 0 0;
          overflow: hidden;
        }
        .cs-meta-row-mid {
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          align-items: center;
        }
        .cs-meta-row-tools {
          grid-template-columns: 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 0 0 6px 6px;
        }
        .cs-meta-cell {
          padding: 1.25rem 1.5rem;
          border-right: 1px solid rgba(226, 115, 150, 0.25);
          text-align: center;
          min-height: 100%;
        }
        .cs-meta-row-top .cs-meta-cell:last-child,
        .cs-meta-row-mid .cs-meta-cell:last-child,
        .cs-meta-row-tools .cs-meta-cell {
          border-right: none;
        }
        .cs-meta-row-mid .cs-meta-cell {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-meta-team {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .75rem;
        }
        .cs-meta-team-avatars {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cs-meta-team-role {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .35rem;
        }
        .cs-team-avatar {
          width: 34px;
          height: 34px;
          object-fit: cover;
          border-radius: 0;
          border: none;
          box-shadow: none;
        }
        .cs-team-role-label {
          font-family: 'DM Sans', sans-serif;
          font-size: .8rem;
          color: #444;
          line-height: 1.2;
          text-align: center;
        }
        .cs-team-caption {
          font-size: .82rem;
          color: #444;
          font-family: 'DM Sans', sans-serif;
          line-height: 1.35;
        }

        .cs-meta-key {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: #8b8b8b;
          margin-bottom: .6rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
        }
        .cs-meta-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: #2d2d2d;
          line-height: 1.4;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-tool-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          margin-top: .35rem;
          justify-content: center;
        }
        .cs-tool-logo {
          height: 30px;
          width: auto;
          object-fit: contain;
          filter: grayscale(15%);
          transition: filter .2s, transform .2s;
        }
        .cs-tool-logo:hover { filter: grayscale(0%); transform: scale(1.12); }
        .cs-tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .cs-tool-name {
          font-size: 0.7rem;
          color: #555;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
          max-width: 60px;
        }
        /* ── SECTION ANATOMY ───────────────────────────────────── */
        .cs-section {
          padding: 4.5rem 0;
          border-top: 1px solid rgba(0,0,0,.08);
        }

        /* CHANGE 6: section labels jet black */
        .cs-section-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 1.75rem;
        }

        .cs-body {
          font-size: 1rem;
          line-height: 1.85;
          color: #444;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-body p { margin-bottom: 1.2rem; }
        .cs-body p:last-child { margin-bottom: 0; }
        .cs-bold-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.4rem;
          line-height: 1.5;
          color: #e27396; /* pink */
          margin-bottom: 1.5rem;
        }
        .cs-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
        .cs-placeholder {
          background: rgba(255,255,255,.4);
          border: 2px dashed rgba(0,0,0,.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: .85rem;
          font-style: italic;
        }

        /* ── SOLUTION VIDEO ────────────────────────────────────── */
        .cs-video-wrap {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,.14);
          margin: 2rem 0 1.5rem;
        }
        .cs-video-wrap iframe {
          display: block;
          width: 100%;
          aspect-ratio: 16/9;
          border: none;
        }
        .cs-skip-btn {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          background: transparent;
          border: 1.5px solid #e27396;
          color: #e27396;
          border-radius: 9999px;
          padding: .6rem 1.25rem;
          font-size: .95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all .18s ease;
          margin: 1.25rem auto 0 auto;
          display: inline-flex;
        }
        .cs-skip-btn:hover { background: #e27396; color: white; }
        .cs-skip-icon {
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(226,115,150,0.12);
          color: #e27396;
          flex-shrink: 0;
        }
        .cs-skip-icon svg { width: 16px; height: 16px; }
        .cs-skip-label { display: inline-block; font-family: 'DM Sans', sans-serif; font-weight:700; }

        /* ── IMPACT ────────────────────────────────────────────── */
        .impact-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin: 2.5rem 0 2rem;
        }

        /* "An invaluable impact" — Georgia/serif, pink, no border, no italic */
        .impact-note {
          font-size: 1.1rem;
          color: #e27396;
          font-style: normal;
          font-family: ui-serif, Georgia, serif;
          font-weight: 500;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          border-left: 4px solid #000;
          padding-left: 1rem;
          margin-left: 0.5rem;
        }
        .impact-note a { color: #e27396; text-decoration: underline; }

        /* ── DESIGN PROCESS ────────────────────────────────────── */
        .process-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          color: #e27396;
          font-style: normal;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }
        .process-timeline { margin-top: 0; }
        .process-step {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          position: relative;
        }
        .ps-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ps-num {
          /* Georgia/serif to match sketch annotation */
          font-family: ui-serif, Georgia, serif;
          font-size: .8rem;
          font-weight: 600;
          color: #e27396;
          margin-bottom: .35rem;
          letter-spacing: .04em;
        }
        .ps-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0;
        }
        .ps-text {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
          margin-top: -0.7rem;
          margin-bottom: 0;
        }
        .ps-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,.1);
        }
        .ps-img img { width: 100%; height: auto; display: block; }

        /* video placeholder — subtle pink tint + play icon */
        .cs-video-ph {
          background: rgba(226,115,150,0.05) !important;
          border-color: rgba(226,115,150,0.25) !important;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: 10px;
        }

        /* ── FINAL DESIGN ──────────────────────────────────────── */
        .fd-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4.5rem;
          position: relative;
        }
        .fd-row:last-child { margin-bottom: 0; }
        /* squiggly arrow floating in the gap between text and image */
        .fd-arrow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 78px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 3;
        }
        .fd-arrow svg { width: 100%; height: auto; display: block; }
        .fd-arrow-right { transform: translate(-50%, -50%) scaleX(-1); }
        .fd-pain-point {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: .9rem;
          line-height: 1.5;
        }
        .fd-why {
          font-size: .68rem;
          font-family: 'Fjalla One', sans-serif;
          text-transform: uppercase;
          letter-spacing: .2em;
          color: #e27396;
          margin-bottom: .5rem;
        }
        .fd-principle {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: .9rem;
          line-height: 1.3;
        }
        .fd-desc {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }
        .fd-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 6px 26px rgba(0,0,0,.1);
        }
        .fd-img img { width: 100%; height: auto; display: block; }
        .fd-img-caption {
          font-family: 'DM Sans', sans-serif;
          font-size: .85rem;
          font-weight: 400;
          font-style: italic;
          color: #1a1a1a;
          text-align: center;
          margin-top: .85rem;
          line-height: 1.4;
        }

        /* ── NOT TO BUILD ──────────────────────────────────────── */
        .ntb-layout {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3rem;
          align-items: start;
          margin-top: 2.5rem;
        }
        .ntb-cards { display: flex; flex-direction: column; gap: 1.25rem; }
        .ntb-card {
          background: rgba(255,255,255,.75);
          border-radius: 12px;
          padding: 1.4rem;
          box-shadow: 0 2px 14px rgba(0,0,0,.06);
        }
        .ntb-card-title {
          font-weight: 700;
          font-size: .95rem;
          color: #1a1a1a;
          margin-bottom: .65rem;
          font-family: 'DM Sans', sans-serif;
        }
        .ntb-tag {
          display: inline-flex;
          align-items: center;
          gap: .35rem;
          border-radius: 50px;
          padding: .2rem .8rem;
          font-size: .75rem;
          font-weight: 600;
          margin-bottom: .7rem;
          font-family: 'DM Sans', sans-serif;
        }
        .ntb-tag.built { background: #e8f5e9; color: #2e7d32; border: 1.5px solid #2e7d32; }
        .ntb-tag.cut   { background: #fff3e0; color: #e65100; border: 1.5px solid #e65100; }
        .ntb-desc {
          font-size: .88rem;
          color: #555;
          line-height: 1.68;
          font-family: 'DM Sans', sans-serif;
        }
        .matrix-container {
          width: 100%;
        }
        .matrix-caption {
          font-size: .88rem;
          color: #555;
          line-height: 1.68;
          font-family: 'DM Sans', sans-serif;
          text-align: center;
          margin-top: 1rem;
        }
        .ntb-matrix {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 22px rgba(0,0,0,.1);
          position: sticky;
          top: 90px;
        }
        .ntb-matrix img { width: 100%; height: auto; display: block; }

        /* ── LEARNINGS ─────────────────────────────────────────── */
        .learnings-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-family: 'DM Sans', sans-serif;
        }
        .learning-item {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        .learning-n {
          font-size: 4rem;
          font-weight: 900;
          color: rgba(226,115,150,.18);
          line-height: .85;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 52px;
          text-align: right;
        }
        .learning-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          padding-top: 0;
          flex: 1;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── PROBLEM LIST (numbered items) ───────────────────── */
        .problem-list {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .problem-item {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .problem-n {
          font-size: 2.4rem;
          font-weight: 900;
          color: rgba(226,115,150,.18);
          line-height: 1;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 56px;
          text-align: right;
          padding-top: 0;
        }
        .problem-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── SKILLS ────────────────────────────────────────────── */
        .skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-top: 1.5rem;
        }
        .skill-pill {
          background: rgba(255,255,255,.75);
          border: 1.5px solid rgba(226,115,150,.45);
          color: #c55577;
          border-radius: 50px;
          padding: .42rem 1.2rem;
          font-size: .87rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          transition: background .2s, color .2s;
        }
        .skill-pill:hover { background: #e27396; color: white; }

        /* CHANGE 7: "THE END" — Fjalla One, uppercase, bold, not italic, not faded */
        .cs-the-end {
          text-align: center;
          padding: 5rem 2rem 3.5rem;
        }
        .cs-the-end-text {
          font-family: 'Fjalla One', sans-serif;
          font-size: 5rem;
          color: #2d2d2d;
          text-transform: uppercase;
          letter-spacing: .08em;
          line-height: 1;
        }

        /* ── SEE NEXT ──────────────────────────────────────────── */
        .see-next {
          padding: 4rem 2rem 2rem;
          max-width: 1120px;
          margin: 0 auto;
        }
        .see-next-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 2rem;
        }
        .see-next-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .see-next-card {
          background: rgba(255,255,255,.6);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,.08);
          text-decoration: none;
          color: inherit;
          transition: transform .25s ease, box-shadow .25s ease;
          display: flex;
          flex-direction: column;
        }
        .see-next-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 36px rgba(0,0,0,.13);
        }
        .see-next-img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: contain;
          display: block;
          background: rgba(255,255,255,.6);
        }
        .see-next-body {
          padding: 1.4rem 1.6rem 1.8rem;
        }
        .see-next-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: .6rem;
        }
        .see-next-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .9rem;
          color: #555;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .see-next-grid { grid-template-columns: 1fr; }
        }

        /* ── NAV BUTTONS ───────────────────────────────────────── */
        .cs-nav-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 3.5rem 2rem;
          flex-wrap: wrap;
        }
        .cs-btn {
          padding: .78rem 2rem;
          border-radius: 50px;
          font-size: .95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all .25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: .45rem;
          border: none;
        }
        .cs-btn.primary { background: #e27396; color: white; box-shadow: 0 4px 16px rgba(226,115,150,.3); }
        .cs-btn.primary:hover { background: #c55577; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(226,115,150,.38); }
        .cs-btn.secondary { background: rgba(255,255,255,.85); color: #2d2d2d; border: 1.5px solid rgba(226,115,150,.4); }
        .cs-btn.secondary:hover { background: #e27396; color: white; border-color: #e27396; transform: translateY(-2px); }

        /* ── SCROLL ANIMATIONS ─────────────────────────────────── */
        .fade-up    { opacity: 0; transform: translateY(24px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-left  { opacity: 0; transform: translateX(-36px); transition: opacity .65s ease, transform .65s ease; }
        .fade-right { opacity: 0; transform: translateX(36px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-up.visible,
        .fade-left.visible,
        .fade-right.visible { opacity: 1; transform: none; }

        /* ── RESPONSIVE ────────────────────────────────────────── */
        @media (max-width: 768px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-oneliner       { font-size: 1.2rem; white-space: normal; }
          .cs-solution-oneliner { font-size: 1.2rem; white-space: normal; }
          .cs-meta           { grid-template-columns: repeat(2, 1fr); }
          .cs-meta-tools     { grid-column: span 1; }
          .impact-row        { grid-template-columns: repeat(2, 1fr); }
          .process-step      { grid-template-columns: 1fr; gap: 1.5rem; }
          .fd-row            { grid-template-columns: 1fr; gap: 2rem; }
          .fd-arrow          { display: none; }
          .ntb-layout        { grid-template-columns: 1fr; }
          .ntb-matrix        { position: static; }
          .cs-the-end-text   { font-size: 3.5rem; }
        }
        /* Medium screens (tablets) */
        @media (max-width: 1024px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-bold-intro    { font-size: 1.15rem; }
          .cs-oneliner      { font-size: 18px; white-space: normal; }
          .cs-solution-oneliner { font-size: 18px; white-space: normal; }
          .cs-meta-row-top  { grid-template-columns: 1fr; }
          .cs-meta-row-mid  { grid-template-columns: 1fr; }
          .cs-meta-row-tools{ grid-template-columns: 1fr; }
          .problem-n        { width: 42px; font-size: 2rem; }
          .problem-text     { font-size: 0.98rem; }
        }
        @media (max-width: 480px) {
          .cs-page-layout    { padding: 0 1rem; }
          .impact-row        { grid-template-columns: 1fr 1fr; gap: .9rem; }
          .impact-num        { font-size: 2.5rem; }
          .cs-the-end-text   { font-size: 2.5rem; }
        }

        /* ── IMAGE MODAL (click-to-view) ───────────────────────────── */
        .clickable-image {
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.3s ease;
        }
        .clickable-image:hover {
          opacity: 0.88;
        }
        .image-subtext {
          font-size: 0.75rem;
          color: #999;
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
          font-family: 'DM Sans', sans-serif;
        }
        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: csModalFadeIn 0.3s ease;
          cursor: pointer;
        }
        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 10px 60px rgba(0, 0, 0, 0.3);
          cursor: default;
        }
        .image-modal-content img {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: calc(90vh - 2rem);
          display: block;
        }
        .image-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .image-modal-close:hover {
          transform: scale(1.2);
        }
        @keyframes csModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}),n.jsx(ea,{}),n.jsxs("div",{className:"cs-hero",children:[n.jsx("img",{src:hl,alt:"Google Cloud Capstone Project — Final Product",className:"cs-hero-img"}),n.jsx("p",{className:"cs-hero-subtitle",children:"Final Product View"})]}),n.jsxs("div",{className:"cs-page-layout",children:[n.jsx("aside",{className:"cs-sidebar","aria-label":"Section navigation",children:n.jsx("nav",{className:"cs-sidebar-nav",children:p.map(y=>n.jsx("a",{href:`#${y.id}`,className:`cs-sidebar-link${d===y.id?" active":""}`,onClick:j=>{j.preventDefault(),document.getElementById(y.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:y.label},y.id))})}),n.jsxs("div",{className:"cs-content",children:[n.jsxs("div",{className:"cs-intro",id:"context",children:[n.jsxs("div",{className:"cs-logo-bar fade-up",children:[n.jsx("div",{className:"cs-cornell-badge",children:"Cornell University"}),n.jsx("span",{className:"cs-logo-sep",children:"×"}),n.jsx("img",{src:Zo,alt:"Google Cloud",className:"cs-gc-logo"})]}),n.jsx("div",{className:"cs-tags fade-up",children:["UX Research","Product Design","UX Strategy","Google Cloud"].map(y=>n.jsx("span",{className:"cs-tag",children:y},y))}),n.jsx("p",{className:"cs-sublabel fade-up",children:"What is this project?"}),n.jsx("p",{className:"cs-oneliner fade-up",children:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users."}),n.jsxs("div",{className:"cs-meta fade-up",children:[n.jsxs("div",{className:"cs-meta-row cs-meta-row-top",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Client"}),n.jsx("div",{className:"cs-meta-val",children:"Google Cloud (CGC)"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Institution"}),n.jsx("div",{className:"cs-meta-val",children:"Cornell University"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"My Role"}),n.jsx("div",{className:"cs-meta-val",children:"UX Researcher & Product Designer"})]})]}),n.jsxs("div",{className:"cs-meta-row cs-meta-row-mid",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Timeline"}),n.jsx("div",{className:"cs-meta-val",children:"13 Weeks · May 2025"})]}),n.jsxs("div",{className:"cs-meta-cell cs-meta-team",children:[n.jsx("div",{className:"cs-meta-key",children:"Team"}),n.jsxs("div",{className:"cs-meta-team-avatars","aria-label":"Project team avatars",children:[n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:Hx,alt:"Designer icon",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:"3 Designers"})]}),n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:Yx,alt:"Researcher icon",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:"3 Researchers"})]}),n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:Gx,alt:"Product manager icon",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:"2 Product Managers"})]})]})]})]}),n.jsx("div",{className:"cs-meta-row cs-meta-row-tools",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-tools",children:[n.jsx("div",{className:"cs-meta-key",children:"Tools"}),n.jsx("div",{className:"cs-tool-logos",children:w.map(y=>n.jsxs("div",{className:"cs-tool-item",children:[n.jsx("img",{src:y.src,alt:y.name,title:y.name,className:"cs-tool-logo"}),n.jsx("p",{className:"cs-tool-name",children:y.name})]},y.name))})]})})]})]}),n.jsxs("div",{className:"cs-section",id:"overview",children:[n.jsx("p",{className:"cs-section-label",children:"Overview"}),n.jsxs("div",{className:"cs-body fade-up",children:[n.jsx("p",{children:"This project was my capstone project in collaboration with Google Cloud. It was an amazing opportunity to work directly with one of the leading companies in the industry. I was beyond excited to gain such an opportunity."}),n.jsxs("p",{children:["Our team worked with the wonderful Alex Pytlarz on this project, who mentored us and gave us something unusual to work on. The plot of the project was to"," ",n.jsx("span",{className:"cs-highlight",children:"redesign the Google Cloud platform by designing two Gen-AI-centric apps using Google Cloud products"})," ","and understanding their product. We had to identify areas for improvement by keeping a diary study and then"," ",n.jsx("span",{className:"cs-highlight",children:"building a well-rounded UX and content strategy solution"}),"."]}),n.jsxs("p",{children:["We weren't observing the users. We were the users. In the next 6 weeks, we ran diary studies while building two working GenAI applications. Furthermore, we conducted"," ",n.jsx("span",{className:"cs-highlight",children:"external interviews with engineers"}),", synthesized the findings into a"," ",n.jsx("span",{className:"cs-highlight",children:"UX design solution proposal"}),", and presented it live to our Google stakeholders."]}),n.jsxs("p",{children:["Our client was not only happy with our solution proposal, but to"," ",n.jsx("span",{className:"cs-highlight",children:"see the live changes on cloud.google.com months later"})," ","was the rewarding part of this project."]})]})]}),n.jsxs("div",{className:"cs-section",id:"problem",children:[n.jsx("p",{className:"cs-section-label",children:"Problem"}),n.jsxs("div",{className:"cs-body",children:[n.jsx("p",{className:"cs-bold-intro fade-up",children:"Google Cloud is an incredibly powerful platform. But getting started as someone new felt like being dropped in the ocean without a map."}),n.jsx("p",{className:"fade-up",children:"From the moment I started engaging with Google Cloud, I started to get the hang of the sheer amount of content. As part of the project, we built two Gen AI products:"}),n.jsxs("div",{className:"problem-list",children:[n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"1"}),n.jsxs("div",{className:"problem-text",children:[n.jsx("strong",{children:"Photo-Haiku App:"})," An App that takes in a picture from the user and turns it into a beautiful haiku. "]})]}),n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"2"}),n.jsxs("div",{className:"problem-text",children:[n.jsx("strong",{children:"Cornell Chatbot:"})," A chatbot for Cornell University to answer enrollment questions for new admits."]})]})]}),n.jsxs("p",{className:"fade-up",style:{marginTop:"2rem"},children:["While using Google Cloud products to aid us with the development of these apps,"," ",n.jsx("span",{className:"cs-highlight",children:"we realized the Google Cloud solution generator was text-heavy and unreliable."})," ","There were times when the"," ",n.jsx("span",{className:"cs-highlight",children:"documentation was outdated"}),", so we had to resort to using other resources like LLMs and YouTube. Once both the apps were built, we put together the major pain points faced."]})]}),n.jsx(tc,{cards:qx})]}),n.jsxs("div",{className:"cs-section",id:"solution-preview",children:[n.jsx("p",{className:"cs-section-label",children:"Solution Preview"}),n.jsx("p",{className:"cs-solution-oneliner fade-up",children:"Watch a walkthrough of the final design solution we built."}),n.jsx("div",{className:"cs-video-wrap fade-up",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/g4A4sPdYbSs",title:"Google Cloud Guided Onboarding Experience",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),n.jsxs("button",{className:"cs-skip-btn fade-up",onClick:E,children:[n.jsx("span",{className:"cs-skip-icon","aria-hidden":!0,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v10M7 12l5 5 5-5"})})}),n.jsx("span",{className:"cs-skip-label",children:"In a hurry? Skip to the final design"})]})]}),n.jsxs("div",{className:"cs-section",id:"impact",ref:x,children:[n.jsx("p",{className:"cs-section-label",children:"Key Outputs"}),n.jsxs("p",{className:"impact-note fade-up",children:["An invaluable impact was seeing our design proposal implemented live on"," ",n.jsx("a",{href:"https://cloud.google.com",target:"_blank",rel:"noopener noreferrer",children:"cloud.google.com"}),"."]}),n.jsxs("div",{className:"impact-row",children:[n.jsx(At,{end:2,suffix:"",inView:r,label:"GenAI-centric apps built from scratch using Google Cloud products"}),n.jsx(At,{end:10,suffix:"+",inView:r,label:"User interviews conducted across internal and external participants"}),n.jsx(At,{end:20,suffix:"+",inView:r,label:"How might we? questions generated to guide the design process"}),n.jsx(At,{end:1,suffix:"",inView:r,label:"High-fidelity prototype presented live to Google stakeholders"})]})]}),n.jsxs("div",{className:"cs-section",id:"design-process",children:[n.jsx("p",{className:"cs-section-label",children:"Design Process"}),n.jsx("p",{className:"process-intro fade-up",children:"The design process was a messy long road, every insight led to new questions, and every iteration surfaced something we had missed."}),n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:yf,alt:"Haiku App Creation",className:"clickable-image",onClick:()=>h(yf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"01"}),n.jsx("h3",{className:"ps-title",children:"Haiku App Creation"}),n.jsx("p",{className:"ps-text",children:"Created an app that took in an image and turned it into a beautiful haiku. Used Google Cloud's solution generator, Vertex AI, cloud documentation, and tools like ChatGPT and Gemini to build it. Coded in Python on Google Colab and deployed on Streamlit."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:vf,alt:"Chatbot Creation",className:"clickable-image",onClick:()=>h(vf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"02"}),n.jsx("h3",{className:"ps-title",children:"Chatbot Creation"}),n.jsx("p",{className:"ps-text",children:"Created a chatbot to answer questions about Cornell programs, deadlines, and contacts. Designed and trained it in Dialogflow CX, integrating Gemini for advanced language understanding. Built the HTML front-end and deployed on Firebase Hosting."})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:pf,alt:"Diary Study Research",className:"clickable-image",onClick:()=>h(pf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"03"}),n.jsx("h3",{className:"ps-title",children:"Diary Study Research"}),n.jsx("p",{className:"ps-text",children:"Kept individual and team diary studies, noting key obstacles, resources that helped overcome them, and more. Every frustration, every workaround, every moment of clarity became a data point for what to improve."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:hf,alt:"Research Synthesis",className:"clickable-image",onClick:()=>h(hf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"04"}),n.jsx("h3",{className:"ps-title",children:"Research Synthesis"}),n.jsx("p",{className:"ps-text",children:"Analyzed common pain points using affinity mapping and prioritized four main friction areas. Brought both teams' diary studies together to find patterns and turn scattered observations into clear pain points."})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:gf,alt:"Identifying Opportunities",className:"clickable-image",onClick:()=>h(gf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"05"}),n.jsx("h3",{className:"ps-title",children:"Identifying Opportunities"}),n.jsx("p",{className:"ps-text",children:"Brainstormed opportunity areas to solve the main friction points identified. Created an impact-feasibility matrix to prioritize which opportunities were worth designing for within our timeline."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:xf,alt:"How Might We",className:"clickable-image",onClick:()=>h(xf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"06"}),n.jsx("h3",{className:"ps-title",children:"How Might We?"}),n.jsx("p",{className:"ps-text",children:'Brainstormed 20+ "How Might We?" questions to guide the design process. Reframing pain points into opportunities helped us shift from describing problems to designing solutions. We converged on one final HMW to drive the entire design.'})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:bf,alt:"Design Ideation",className:"clickable-image",onClick:()=>h(bf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"07"}),n.jsx("h3",{className:"ps-title",children:"Design Ideation"}),n.jsx("p",{className:"ps-text",children:"Connected the HMW questions to possible design solutions by sketching low-fi expressions of each feature. Iterated the designs multiple times and incorporated stakeholder feedback before arriving at the final design."})]}),n.jsx("div",{})]})]})]}),n.jsxs("div",{className:"cs-section",id:"final-design",children:[n.jsx("p",{className:"cs-section-label",children:"Final Design"}),n.jsxs("div",{className:"fd-row",children:[n.jsx(qo,{direction:"left"}),n.jsxs("div",{className:"fade-left",children:[n.jsx("div",{className:"fd-img",children:n.jsx("img",{src:Ux,alt:"Interactivity by Default design principle"})}),n.jsx("p",{className:"fd-img-caption",children:"Interactivity by Default"})]}),n.jsxs("div",{className:"fade-right",children:[n.jsx("p",{className:"fd-why",children:"Pain point 1"}),n.jsx("p",{className:"fd-pain-point",children:"No clear path to find answers the users were looking for"}),n.jsx("p",{className:"fd-why",children:"Why this works"}),n.jsx("p",{className:"fd-desc",children:"Your steps are personalized to your use case, combating overwhelming navigation. Instead of confronting users with walls of content, the experience adapts to whatever you're building, making Google Cloud feel like it was designed for you."})]})]}),n.jsxs("div",{className:"fd-row",children:[n.jsx(qo,{direction:"right"}),n.jsxs("div",{className:"fade-left",children:[n.jsx("p",{className:"fd-why",children:"Pain point 2"}),n.jsx("p",{className:"fd-pain-point",children:"Overwhelming navigation and amount of content"}),n.jsx("p",{className:"fd-why",children:"Why this works"}),n.jsx("p",{className:"fd-desc",children:"Reduces cognitive load while providing a clear and linear guide to even non-technical users. Information is revealed incrementally, only what's needed at each stage, so users never feel overwhelmed by the depth of Google Cloud's ecosystem."})]}),n.jsxs("div",{className:"fade-right",children:[n.jsx("div",{className:"fd-img",children:n.jsx("img",{src:Bx,alt:"Step-by-step guidance with progressive disclosure"})}),n.jsx("p",{className:"fd-img-caption",children:"Step-by-Step Guidance with Progressive Disclosure"})]})]}),n.jsxs("div",{className:"fd-row",children:[n.jsx(qo,{direction:"left"}),n.jsxs("div",{className:"fade-left",children:[n.jsx("div",{className:"fd-img",children:n.jsx("img",{src:Lx,alt:"Clarity through concise visual communication"})}),n.jsx("p",{className:"fd-img-caption",children:"Clarity through Concise Visual Communication"})]}),n.jsxs("div",{className:"fade-right",children:[n.jsx("p",{className:"fd-why",children:"Pain point 3"}),n.jsx("p",{className:"fd-pain-point",children:"Irrelevant search results and poor query matching"}),n.jsx("p",{className:"fd-why",children:"Why this works"}),n.jsx("p",{className:"fd-desc",children:"Reduces cognitive load while solving irrelevant results and poor query matching. Visuals, icons, and concise language replace dense text, so users can scan, understand, and act without getting lost in documentation."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"not-to-build",children:[n.jsx("p",{className:"cs-section-label",children:"What We Decided Not to Build & Why"}),n.jsxs("div",{className:"matrix-container fade-up",children:[n.jsx("img",{src:ff,alt:"Impact vs Feasibility Matrix",className:"clickable-image",onClick:()=>h(ff),style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"matrix-caption",children:"We had to prioritize to build the most impactful solution within the deadline"})]})]}),n.jsxs("div",{className:"cs-section",id:"takeaways",children:[n.jsx("p",{className:"cs-section-label",children:"3 Things This Project Taught Me"}),n.jsxs("div",{className:"learnings-list",children:[n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"1"}),n.jsx("p",{className:"learning-text",children:"We need to rethink interaction flows and features beyond the classic text chatbot. It needs to be a seamless guiding experience."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"2"}),n.jsx("p",{className:"learning-text",children:"LLMs changed so much over the course of this project. This really taught me the crucial importance of flexibility and the rapid ability to adopt new technologies."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"3"}),n.jsx("p",{className:"learning-text",children:"AI is really lowering the bar to entry for non-technical users, opening the door to innovation like never before."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"skills",children:[n.jsx("p",{className:"cs-section-label",children:"Skills Built Through This Project"}),n.jsx("div",{className:"skills-pills",children:["Diary Study Design","Contextual & Exit Interviews","AutoEthnography Method","Cloud Design","Insight Synthesis","UX Strategy","High-fi Prototyping","Impact-Feasibility Prioritization","Cross-Functional Leadership","Stakeholder Communication","AI app development"].map(y=>n.jsx("span",{className:"skill-pill fade-up",children:y},y))})]}),n.jsx("div",{className:"cs-the-end",children:n.jsx("p",{className:"cs-the-end-text fade-up",children:"THE END"})})]})]}),n.jsxs("div",{className:"see-next",children:[n.jsx("p",{className:"see-next-label fade-up",children:"See Next"}),n.jsxs("div",{className:"see-next-grid",children:[n.jsxs("a",{href:"/ithaca-soap-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:Un,alt:"Ithaca Soap Redesign",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Ithaca Soap Redesign"}),n.jsx("p",{className:"see-next-desc",children:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap."})]})]}),n.jsxs("a",{href:"/routes-to-roots-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:gl,alt:"Routes to Roots App",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Routes to Roots App"}),n.jsx("p",{className:"see-next-desc",children:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life."})]})]})]})]}),n.jsx(Yn,{}),f&&n.jsx("div",{className:"image-modal-overlay",onClick:()=>h(null),children:n.jsxs("div",{className:"image-modal-content",onClick:y=>y.stopPropagation(),children:[n.jsx("button",{className:"image-modal-close",onClick:()=>h(null),children:"×"}),n.jsx("img",{src:f,alt:"Enlarged view"})]})})]})}const wf="/assets/research-Dy-Yj-XN.png",Xx="/assets/personas-Cb3OfggG.png",jf="/assets/taskscenarios-BLZBGHwT.png",Af="/assets/lowfi-faHI8EVU.jpeg",Nf="/assets/usability-eVp3xNT-.png",kf="/assets/home-Ba7_dTQe.png",Sf="/assets/product-DLjul-A_.png",zf="/assets/community-Dx9d02AZ.png",Ef="/assets/deals-Dp1FQkOi.png",Vx="/assets/founders-9LKqJv-z.png",Ix="/assets/team-D-qvVc-h.JPG",Qo="/assets/girl-DyRSX-Uk.png",Kx=[{num:"01",msg:"Users prefer products that are easy to use and store, especially in small living spaces."},{num:"02",msg:"Fragrance and how the products feel on the skin are consistently important across users."},{num:"03",msg:"Ingredient transparency and simple explanations are critical to building trust."},{num:"04",msg:"Design and presentation of the product influence purchasing decisions, especially for new users."},{num:"05",msg:"Users are open to sustainability when it aligns with comfort, price, and clarity."},{num:"06",msg:"Users want clarity on whether one product can really do it all."}];function Zx(){const[r,m]=A.useState(!1),[d,c]=A.useState("context"),[f,h]=A.useState(null),x=A.useRef(null);A.useEffect(()=>{const j=new IntersectionObserver(G=>G.forEach(H=>H.isIntersecting&&H.target.classList.add("visible")),{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(G=>j.observe(G));const M=new IntersectionObserver(([G])=>{G.isIntersecting&&(m(!0),M.disconnect())},{threshold:.1});x.current&&M.observe(x.current);const L=["context","overview","problem","solution-preview","impact","design-process","final-design","takeaways","skills"],Y=()=>{const G=window.innerHeight*.35;let H=L[0];for(const S of L){const U=document.getElementById(S);U&&U.getBoundingClientRect().top<=G&&(H=S)}c(H)};return Y(),window.addEventListener("scroll",Y,{passive:!0}),()=>{j.disconnect(),M.disconnect(),window.removeEventListener("scroll",Y)}},[]);const E=()=>document.getElementById("final-design")?.scrollIntoView({behavior:"smooth"}),w=[{src:Ap,name:"Vue.js"},{src:Np,name:"Vuetify"},{src:kp,name:"GitHub"},{src:Sp,name:"Microsoft Copilot"},{src:Mi,name:"Figma"},{src:ml,name:"Canva"},{src:ul,name:"ChatGPT"}],p=[{name:"Shreayaa Srinivasan",avatar:Qo},{name:"Hrishika Jotwani",avatar:Qo},{name:"Siying Wang",avatar:Qo}],y=[{id:"context",label:"Context"},{id:"overview",label:"Overview"},{id:"problem",label:"Problem"},{id:"solution-preview",label:"Solution"},{id:"impact",label:"Key Output"},{id:"design-process",label:"Design Process"},{id:"final-design",label:"Final Design"},{id:"takeaways",label:"3 Lessons Learned"},{id:"skills",label:"Skills Built"}];return n.jsxs("div",{className:"cs-root",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: #ECEBE1;
        }
        body {
          min-height: 100%;
        }

        .cs-root {
          min-height: 100vh;
          color: #2d2d2d;
          font-family: 'DM Sans', sans-serif;
          overflow-x: clip;
        }

        /* ── HERO ──────────────────────────────────────────────── */
        .cs-hero {
          width: 100%;
          padding: 3.5rem 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: transparent;
          overflow: hidden;
          gap: 0.75rem;
        }
        .cs-hero-img {
          width: 100%;
          max-width: 700px;
          height: auto;
          object-fit: contain;
          display: block;
          opacity: 0;
          animation: heroFade 1.2s ease-out .2s forwards;
        }
        .cs-hero-subtitle {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          opacity: 0;
          animation: heroFade 1.2s ease-out .4s forwards;
        }
        @keyframes heroFade { to { opacity: 1; } }

        /* ── CONTENT COLUMN ────────────────────────────────────── */
        .cs-content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0;
        }

        .cs-page-layout {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 200px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .cs-sidebar {
          position: sticky;
          top: 7.5rem;
          align-self: start;
          width: 200px;
          padding-top: 4.5rem;
        }
        .cs-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: .95rem;
        }
        .cs-sidebar-link {
          text-decoration: none;
          color: #aaa;
          font-family: 'DM Sans', sans-serif;
          font-size: .75rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          transition: color .2s ease, padding-left .2s ease;
          position: relative;
          padding-left: 1rem;
          display: block;
          line-height: 1.4;
        }
        .cs-sidebar-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 100%;
          border-radius: 2px;
          background: transparent;
          transition: background .2s ease;
        }
        .cs-sidebar-link:hover {
          color: #e27396;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link:hover::before {
          background: rgba(226, 115, 150, .35);
        }
        .cs-sidebar-link.active {
          color: #e27396;
          font-weight: 700;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link.active::before {
          background: #e27396;
        }

        /* ── INTRO ─────────────────────────────────────────────── */
        .cs-intro { padding: 4.5rem 0 3rem; }

        .cs-logo-bar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          justify-content: flex-start;
        }
        .cs-cornell-badge {
          background: #b31b1b;
          color: white;
          font-family: 'Fjalla One', sans-serif;
          font-size: .82rem;
          padding: .35rem .9rem;
          border-radius: 4px;
          letter-spacing: .04em;
        }
        .cs-brand-logo {
          font-family: 'Fjalla One', sans-serif;
          font-size: 1.15rem;
          letter-spacing: .02em;
          color: #2d2d2d;
        }
        .cs-logo-sep { font-size: 1.3rem; color: #ccc; font-weight: 300; }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 2.5rem;
        }
        .cs-tag {
          border: 1.5px solid rgba(45,45,45,.22);
          border-radius: 50px;
          padding: .3rem 1rem;
          font-size: .83rem;
          color: #555;
          background: rgba(255,255,255,.5);
          font-family: 'DM Sans', sans-serif;
        }

        .cs-sublabel {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: .55rem;
        }

        .cs-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin-bottom: 3rem;
          max-width: none;
          white-space: nowrap;
          display: block;
        }
        .cs-solution-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin: 1.25rem 0 1.5rem;
          max-width: none;
          white-space: nowrap;
          display: block;
        }

        /* metadata grid */
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 3.5rem auto 2.5rem auto;
          max-width: 1200px;
          background: transparent;
          border: none;
        }
        .cs-meta-row {
          display: grid;
          gap: 0;
          width: 100%;
        }
        .cs-meta-row-top {
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 6px 6px 0 0;
          overflow: hidden;
        }
        .cs-meta-row-mid {
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          align-items: center;
        }
        .cs-meta-row-tools {
          grid-template-columns: 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 0 0 6px 6px;
        }
        .cs-meta-cell {
          padding: 1.25rem 1.5rem;
          border-right: 1px solid rgba(226, 115, 150, 0.25);
          text-align: center;
          min-height: 100%;
        }
        .cs-meta-row-top .cs-meta-cell:last-child,
        .cs-meta-row-mid .cs-meta-cell:last-child,
        .cs-meta-row-tools .cs-meta-cell {
          border-right: none;
        }
        .cs-meta-row-mid .cs-meta-cell {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cs-meta-key {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: #8b8b8b;
          margin-bottom: .6rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
        }
        .cs-meta-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: #2d2d2d;
          line-height: 1.4;
          font-family: 'DM Sans', sans-serif;
        }

        .cs-meta-team {
          align-items: center;
        }
        .cs-meta-team-avatars {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: .35rem;
        }
        .cs-meta-team-role {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .5rem;
          width: 90px;
        }
        .cs-team-avatar {
          height: 60px;
          width: 60px;
          object-fit: cover;
          border: none;
        }
        .cs-team-role-label {
          font-size: .75rem;
          color: #2d2d2d;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          line-height: 1.3;
        }

        .cs-tool-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          margin-top: .35rem;
          justify-content: center;
        }
        .cs-tool-logo {
          height: 30px;
          width: auto;
          object-fit: contain;
          filter: grayscale(15%);
          transition: filter .2s, transform .2s;
        }
        .cs-tool-logo:hover { filter: grayscale(0%); transform: scale(1.12); }
        .cs-tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .cs-tool-name {
          font-size: 0.7rem;
          color: #555;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
          max-width: 50px;
        }

        /* ── SECTION ANATOMY ───────────────────────────────────── */
        .cs-section {
          padding: 4.5rem 0;
          border-top: 1px solid rgba(0,0,0,.08);
        }
        .cs-section-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 1.75rem;
        }

        .cs-body {
          font-size: 1rem;
          line-height: 1.85;
          color: #444;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-body p { margin-bottom: 1.2rem; }
        .cs-body p:last-child { margin-bottom: 0; }
        .cs-bold-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.4rem;
          line-height: 1.5;
          color: #e27396;
          margin-bottom: 1.5rem;
        }
        .cs-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        .people-img-wrap {
          position: relative;
          z-index: 2;
          border-radius: 12px;
          overflow: hidden;
          max-width: 500px;
          margin: 0 auto;
        }
        .people-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
        }
        .cs-placeholder {
          background: rgba(255,255,255,.4);
          border: 2px dashed rgba(0,0,0,.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: .85rem;
          font-style: italic;
        }

        /* ── SOLUTION VIDEO ────────────────────────────────────── */
        .cs-video-wrap {
          margin: 2rem auto 1.5rem;
          max-width: 420px;
          display: flex;
          justify-content: center;
        }
        .cs-video-wrap iframe {
          display: block;
          width: 100%;
          aspect-ratio: 9/16;
          border: none;
          border-radius: 20px;
        }
        .cs-skip-btn {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          background: transparent;
          border: 1.5px solid #e27396;
          color: #e27396;
          border-radius: 9999px;
          padding: .6rem 1.25rem;
          font-size: .95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all .18s ease;
          margin: 1.25rem auto 0 auto;
        }
        .cs-skip-btn:hover { background: #e27396; color: white; }
        .cs-skip-icon {
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(226,115,150,0.12);
          color: #e27396;
          flex-shrink: 0;
        }
        .cs-skip-icon svg { width: 16px; height: 16px; }
        .cs-skip-label { display: inline-block; font-family: 'DM Sans', sans-serif; font-weight:700; }

        /* ── IMPACT ────────────────────────────────────────────── */
        .impact-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin: 2.5rem 0 2rem;
        }
        /* ── DESIGN PROCESS ────────────────────────────────────── */
        .process-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          color: #e27396;
          font-style: normal;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }
        .process-timeline { margin-top: 0; }
        .process-step {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          position: relative;
        }
        .ps-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ps-num {
          font-family: ui-serif, Georgia, serif;
          font-size: .8rem;
          font-weight: 600;
          color: #e27396;
          margin-bottom: .35rem;
          letter-spacing: .04em;
        }
        .ps-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: .75rem;
        }
        .ps-text {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }
        .ps-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,.1);
        }
        .ps-img img { width: 100%; height: auto; display: block; }

        /* sub-content inside a process step */
        .ps-sublist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .55rem;
          margin-top: .25rem;
        }
        .ps-sublist li {
          font-size: .92rem;
          color: #555;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
          padding-left: 1.1rem;
          position: relative;
        }
        .ps-sublist li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .62em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e27396;
        }
        .ps-scenario { margin-top: .5rem; }
        .ps-scenario-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .62rem;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: #e27396;
          margin-bottom: .25rem;
        }
        .ps-scenario-text {
          font-size: .92rem;
          color: #555;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }
        .ps-testing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: .85rem;
          margin-top: .5rem;
        }
        .ps-testing-item {
          background: rgba(255,255,255,.55);
          border: 1px solid rgba(226,115,150,.25);
          border-radius: 10px;
          padding: .7rem .85rem;
        }
        .ps-testing-key {
          font-family: 'Fjalla One', sans-serif;
          font-size: .6rem;
          text-transform: uppercase;
          letter-spacing: .16em;
          color: #e27396;
          margin-bottom: .3rem;
        }
        .ps-testing-val {
          font-size: .85rem;
          color: #555;
          line-height: 1.55;
          font-family: 'DM Sans', sans-serif;
        }

        /* video placeholder — subtle pink tint + play icon */
        .cs-video-ph {
          background: rgba(226,115,150,0.05) !important;
          border-color: rgba(226,115,150,0.25) !important;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: 10px;
        }

        /* ── FINAL DESIGN ──────────────────────────────────────── */
        .fd-empty-note {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.15rem;
          color: #999;
          font-style: italic;
          line-height: 1.6;
          margin-top: 1rem;
        }

        /* ── LEARNINGS ─────────────────────────────────────────── */
        .learnings-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-family: 'DM Sans', sans-serif;
        }
        .learning-item {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        .learning-n {
          font-size: 4rem;
          font-weight: 900;
          color: rgba(226,115,150,.4);
          line-height: .85;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 52px;
          text-align: right;
        }
        .learning-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          padding-top: 0;
          flex: 1;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── PROBLEM LIST (numbered items) ───────────────────── */
        .problem-list {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .problem-item {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .problem-n {
          font-size: 2.4rem;
          font-weight: 900;
          color: rgba(226,115,150,.18);
          line-height: 1;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 56px;
          text-align: right;
          padding-top: 0;
        }
        .problem-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── SKILLS ────────────────────────────────────────────── */
        .skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-top: 1.5rem;
        }
        .skill-pill {
          background: rgba(255,255,255,.75);
          border: 1.5px solid rgba(226,115,150,.45);
          color: #c55577;
          border-radius: 50px;
          padding: .42rem 1.2rem;
          font-size: .87rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          transition: background .2s, color .2s;
        }
        .skill-pill:hover { background: #e27396; color: white; }

        /* ── THE END ───────────────────────────────────────────── */
        .cs-the-end {
          text-align: center;
          padding: 5rem 2rem 3.5rem;
        }
        .cs-the-end-text {
          font-family: 'Fjalla One', sans-serif;
          font-size: 5rem;
          color: #2d2d2d;
          text-transform: uppercase;
          letter-spacing: .08em;
          line-height: 1;
        }

        /* ── SEE NEXT ──────────────────────────────────────────── */
        .see-next {
          padding: 4rem 2rem 2rem;
          max-width: 1120px;
          margin: 0 auto;
        }
        .see-next-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 2rem;
        }
        .see-next-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .see-next-card {
          background: rgba(255,255,255,.6);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,.08);
          text-decoration: none;
          color: inherit;
          transition: transform .25s ease, box-shadow .25s ease;
          display: flex;
          flex-direction: column;
        }
        .see-next-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 36px rgba(0,0,0,.13);
        }
        .see-next-img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: contain;
          display: block;
          background: rgba(255,255,255,.6);
        }
        .see-next-body {
          padding: 1.4rem 1.6rem 1.8rem;
        }
        .see-next-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: .6rem;
        }
        .see-next-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .9rem;
          color: #555;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .see-next-grid { grid-template-columns: 1fr; }
        }

        /* ── IMAGE MODAL ───────────────────────────────────────── */
        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          cursor: pointer;
        }
        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 10px 60px rgba(0, 0, 0, 0.3);
          cursor: default;
        }
        .image-modal-content img {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: calc(90vh - 2rem);
          display: block;
        }
        .image-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .image-modal-close:hover {
          transform: scale(1.2);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .clickable-image {
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .clickable-image:hover {
          opacity: 0.85;
        }
        .image-subtext {
          font-size: 0.75rem;
          color: #999;
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── SCROLL ANIMATIONS ─────────────────────────────────── */
        .fade-up    { opacity: 0; transform: translateY(24px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-left  { opacity: 0; transform: translateX(-36px); transition: opacity .65s ease, transform .65s ease; }
        .fade-right { opacity: 0; transform: translateX(36px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-up.visible,
        .fade-left.visible,
        .fade-right.visible { opacity: 1; transform: none; }

        /* ── RESPONSIVE ────────────────────────────────────────── */
        @media (max-width: 768px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-oneliner       { font-size: 1.2rem; white-space: normal; }
          .impact-row        { grid-template-columns: repeat(2, 1fr); }
          .process-step      { grid-template-columns: 1fr; gap: 1.5rem; }
          .ps-testing-grid   { grid-template-columns: 1fr; }
          .cs-the-end-text   { font-size: 3.5rem; }
        }
        @media (max-width: 1024px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-bold-intro    { font-size: 1.15rem; }
          .cs-oneliner      { font-size: 18px; white-space: normal; }
          .cs-solution-oneliner { font-size: 18px; white-space: normal; }
          .cs-meta-row-top  { grid-template-columns: 1fr; }
          .cs-meta-row-mid  { grid-template-columns: 1fr; }
          .cs-meta-row-tools{ grid-template-columns: 1fr; }
          .impact-row       { grid-template-columns: repeat(3, 1fr); }
          .problem-n        { width: 42px; font-size: 2rem; }
          .problem-text     { font-size: 0.98rem; }
        }
        @media (max-width: 480px) {
          .cs-page-layout    { padding: 0 1rem; }
          .impact-row        { grid-template-columns: 1fr 1fr; gap: .9rem; }
          .impact-num        { font-size: 2.5rem; }
          .cs-the-end-text   { font-size: 2.5rem; }
        }
      `}),n.jsx(ea,{}),n.jsxs("div",{className:"cs-hero",children:[n.jsx("img",{src:Un,alt:"Ithaca Soap Mobile App — Final Product",className:"cs-hero-img"}),n.jsx("p",{className:"cs-hero-subtitle",children:"Final Product View"})]}),n.jsxs("div",{className:"cs-page-layout",children:[n.jsx("aside",{className:"cs-sidebar","aria-label":"Section navigation",children:n.jsx("nav",{className:"cs-sidebar-nav",children:y.map(j=>n.jsx("a",{href:`#${j.id}`,className:`cs-sidebar-link${d===j.id?" active":""}`,onClick:M=>{M.preventDefault(),document.getElementById(j.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:j.label},j.id))})}),n.jsxs("div",{className:"cs-content",children:[n.jsxs("div",{className:"cs-intro",id:"context",children:[n.jsx("div",{className:"cs-tags fade-up",children:["Mobile App Design","AI Workflows","Product Design","Development","UX Research","Vue.js"].map(j=>n.jsx("span",{className:"cs-tag",children:j},j))}),n.jsx("p",{className:"cs-sublabel fade-up",children:"What is this project?"}),n.jsx("p",{className:"cs-oneliner fade-up",children:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap."}),n.jsxs("div",{className:"cs-meta fade-up",children:[n.jsxs("div",{className:"cs-meta-row cs-meta-row-top",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Client"}),n.jsx("div",{className:"cs-meta-val",children:"Ithaca Soap"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Institution"}),n.jsx("div",{className:"cs-meta-val",children:"Cornell University"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"My Role"}),n.jsx("div",{className:"cs-meta-val",children:"UX Engineer & UX Researcher"})]})]}),n.jsxs("div",{className:"cs-meta-row cs-meta-row-mid",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Timeline"}),n.jsx("div",{className:"cs-meta-val",children:"13 Weeks · May 2025"})]}),n.jsxs("div",{className:"cs-meta-cell cs-meta-team",children:[n.jsx("div",{className:"cs-meta-key",children:"Team"}),n.jsx("div",{className:"cs-meta-team-avatars","aria-label":"Project team",children:p.map(j=>n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:j.avatar,alt:j.name,className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:j.name.split(" ")[0]})]},j.name))})]})]}),n.jsx("div",{className:"cs-meta-row cs-meta-row-tools",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-tools",children:[n.jsx("div",{className:"cs-meta-key",children:"Tools"}),n.jsx("div",{className:"cs-tool-logos",children:w.map(j=>n.jsxs("div",{className:"cs-tool-item",children:[n.jsx("img",{src:j.src,alt:j.name,title:j.name,className:"cs-tool-logo"}),n.jsx("p",{className:"cs-tool-name",children:j.name})]},j.name))})]})})]})]}),n.jsxs("div",{className:"cs-section",id:"overview",children:[n.jsx("p",{className:"cs-section-label",children:"Overview"}),n.jsxs("div",{className:"cs-body fade-up",children:[n.jsx("p",{className:"cs-bold-intro",children:"Ithaca Soap is a local small business brand in Ithaca."}),n.jsxs("p",{children:["They are known for their sustainable products like water-free, plastic-free soaps and ingredient transparency. They have a ",n.jsx("span",{className:"cs-highlight",children:"regular customer base in the local Ithaca farmers' market"}),". But their online presence didn't have a good reach, and their website didn't quite reflect what made them different. Our team ",n.jsx("span",{className:"cs-highlight",children:"partnered with Ithaca Soap to design and build their mobile app from scratch"}),"."]}),n.jsxs("p",{children:["We started from the research, ",n.jsx("span",{className:"cs-highlight",children:"talked to the users to understand their goals"}),", created user personas, task scenarios, ",n.jsx("span",{className:"cs-highlight",children:"prototyped the product with APIs,"})," and ",n.jsx("span",{className:"cs-highlight",children:"built an installable PWA (progressive web app) using Vue.js"}),". This case study captures my process with this project in a gist."]})]})]}),n.jsxs("div",{className:"cs-section",id:"problem",children:[n.jsx("p",{className:"cs-section-label",children:"Problem"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",alignItems:"center"},children:[n.jsxs("div",{className:"cs-body",children:[n.jsx("p",{className:"cs-bold-intro fade-up",children:"When we first sat down with Wendy, the Ithaca Soap co-founder, two things became pretty clear."}),n.jsxs("div",{className:"problem-list",children:[n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"1"}),n.jsx("div",{className:"problem-text",children:"Most customers found them by stumbling onto their farmers' market stall, or they were people who found the product by word of mouth. There was not much reach through their existing website."})]}),n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"2"}),n.jsx("div",{className:"problem-text",children:"The product itself was genuinely confusing to people who hadn't tried it. One soap for everything? That sounds like an unreliable claim."})]})]}),n.jsx("p",{className:"fade-up",style:{marginTop:"1.5rem"},children:"After understanding the stakeholders' branding and expectations, we moved on to the users. I conducted interviews and field studies with several users to understand their goals."})]}),n.jsx("img",{src:Vx,alt:"Ithaca Soap founders",className:"fade-up",style:{width:"100%",maxWidth:"360px",height:"auto",display:"block",borderRadius:"10px"}})]}),n.jsx(tc,{cards:Kx})]}),n.jsxs("div",{className:"cs-section",id:"solution-preview",children:[n.jsx("p",{className:"cs-section-label",children:"Solution Preview"}),n.jsx("p",{className:"cs-solution-oneliner fade-up",children:"Here is a walkthrough of the final design solution."}),n.jsx("div",{className:"cs-video-wrap fade-up",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/GDo7jKW1DII",title:"Ithaca Soap App Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),n.jsxs("button",{className:"cs-skip-btn fade-up",onClick:E,children:[n.jsx("span",{className:"cs-skip-icon","aria-hidden":!0,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v10M7 12l5 5 5-5"})})}),n.jsx("span",{className:"cs-skip-label",children:"In a hurry? Skip to the final design"})]})]}),n.jsxs("div",{className:"cs-section",id:"impact",ref:x,children:[n.jsx("p",{className:"cs-section-label",children:"Key Output"}),n.jsxs("div",{className:"impact-row",children:[n.jsx(At,{end:10,suffix:"",inView:r,label:"User interviews across 3 target groups"}),n.jsx(At,{end:3,suffix:"",inView:r,label:"Personas built from real research"}),n.jsx(At,{end:3,suffix:"",inView:r,label:"Task scenarios created to map user goals to features"}),n.jsx(At,{end:5,suffix:"",inView:r,label:"App screens fully designed and coded"}),n.jsx(At,{end:1,suffix:"",inView:r,label:"Working & installable Vue.js app shipped and deployed"})]})]}),n.jsxs("div",{className:"cs-section",id:"design-process",children:[n.jsx("p",{className:"cs-section-label",children:"Design Process"}),n.jsx("p",{className:"process-intro fade-up",children:"The process wasn't linear, each phase informed the next. The research uncovered needs, design translated them, and testing revealed what still needed work."}),n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:wf,alt:"Research & field studies",className:"clickable-image",onClick:()=>h(wf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"01"}),n.jsx("h3",{className:"ps-title",children:"Research"}),n.jsx("p",{className:"ps-text",children:"When it came to research, we chose user interviews and field studies. Field studies, because we wanted to see the relationship the users have with their products live. For example, one of our users explained how she wanted the product to fit in a particular space in her shower, which we understood clearly through field research."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("img",{src:Xx,alt:"Persona cards",style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"ps-num",children:"02"}),n.jsx("h3",{className:"ps-title",children:"Personas"}),n.jsx("p",{className:"ps-text",children:"Once the initial user research was completed, we created three user personas to guide us through the design process. By focusing on the three personas, we wanted to resist the temptation to design for everyone."}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Priya Malhotra"}),", a busy PhD student open to sustainable products if they're convenient and feel luxurious."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Sharon Kim"}),", a small business owner and eco-product advocate who values clear ingredients."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Dr. Florence Morris"}),", a professor with sensitive skin who values dermatologist-backed, biodegradable options."]})]})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:jf,alt:"Task scenarios",className:"clickable-image",onClick:()=>h(jf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"03"}),n.jsx("h3",{className:"ps-title",children:"Task Scenarios"}),n.jsx("p",{className:"ps-text",children:"We brainstormed: What are the most important things that every user must be able to accomplish on this app? Once that was figured out, we wrote down three task scenarios that helped provide context during usability testing so users could engage with the interface and pretend to perform the intended tasks."}),n.jsxs("div",{className:"ps-scenario",children:[n.jsx("p",{className:"ps-scenario-label",children:"Scenario 1 · Priya"}),n.jsx("p",{className:"ps-scenario-text",children:"You're looking for a sustainable personal care product that combines multiple uses, is gentle on the skin, and has a pleasant scent. Find a product on the app that meets these needs and learn more about how to use it."})]}),n.jsxs("div",{className:"ps-scenario",children:[n.jsx("p",{className:"ps-scenario-label",children:"Scenario 2 · Sharon"}),n.jsx("p",{className:"ps-scenario-text",children:"You're ready to restock your favorite soap and are curious if there are any current offers or rewards available. Explore the app to find a product you haven't tried before and discover how you can earn a reward by participating in the community."})]}),n.jsxs("div",{className:"ps-scenario",children:[n.jsx("p",{className:"ps-scenario-label",children:"Scenario 3 · Dr. Morris"}),n.jsx("p",{className:"ps-scenario-text",children:"You want to know whether any of the products are safe for your skin and want to read more about the company's values before deciding whether to buy. Use the app to evaluate product options and learn about the company's sustainability efforts."})]})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Af,alt:"Low-fidelity sketches",className:"clickable-image",onClick:()=>h(Af)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"04"}),n.jsx("h3",{className:"ps-title",children:"Low-fi Designs"}),n.jsx("p",{className:"ps-text",children:"Finally, when the design phase started, we connected the user goals to the features the app needed to have the specific screens that they had to be placed in. The design ideation started with low-fidelity paper sketches, and then, after three iterations, moved to a more mid-fidelity prototype coded with Vue.js."})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Nf,alt:"Usability testing",className:"clickable-image",onClick:()=>h(Nf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"05"}),n.jsx("h3",{className:"ps-title",children:"Usability Testing & Iteration"}),n.jsx("p",{className:"ps-text",children:"To evaluate the prototype efficiently, we used the task scenarios to understand how users reacted to the product in a real-time setting."}),n.jsxs("div",{className:"ps-testing-grid",children:[n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Participants"}),n.jsx("p",{className:"ps-testing-val",children:"3 individuals, each representing a core persona."})]}),n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Device"}),n.jsx("p",{className:"ps-testing-val",children:"Testing was conducted on a mobile phone with the PWA installed to reflect a real-time setting."})]}),n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Method"}),n.jsx("p",{className:"ps-testing-val",children:"Each participant completed all three task scenarios in a randomized order. No help or push was given during testing, and our real-time observations were documented."})]}),n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Consent"}),n.jsx("p",{className:"ps-testing-val",children:"Verbal consent was obtained. No audio or video recordings were made. Notes were taken anonymously and stored securely."})]})]}),n.jsx("p",{className:"ps-text",style:{marginTop:".75rem"},children:"After the usability testing, we analyzed the insights to extract key findings like what worked well and what needed improvement."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("img",{src:Un,alt:"High-fidelity prototype",style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"ps-num",children:"06"}),n.jsx("h3",{className:"ps-title",children:"Hi-fi Prototype"}),n.jsx("p",{className:"ps-text",children:"We made revisions to the mid-fidelity prototype to reflect the issues raised during usability testing."}),n.jsx("p",{className:"ps-text",children:"This high-fidelity prototype of the Ithaca Soap mobile app translates the brand's mission of sustainability and ingredient transparency into a polished user-centered digital experience. Built using Vue.js and Vuetify, the app simulates the full customer journey from discovering gentle, multi-use soaps to engaging with community stories and local retail partners."})]})]})]})]}),n.jsxs("div",{className:"cs-section",id:"final-design",children:[n.jsx("p",{className:"cs-section-label",children:"Final Design"}),n.jsx("img",{src:kf,alt:"Ithaca Soap final design — homepage",className:"fade-up clickable-image",onClick:()=>h(kf),style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("img",{src:Sf,alt:"Ithaca Soap final design — product",className:"fade-up clickable-image",onClick:()=>h(Sf),style:{width:"100%",height:"auto",display:"block",marginTop:"2rem"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("img",{src:zf,alt:"Ithaca Soap final design — community",className:"fade-up clickable-image",onClick:()=>h(zf),style:{width:"100%",height:"auto",display:"block",marginTop:"2rem"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("img",{src:Ef,alt:"Ithaca Soap final design — deals",className:"fade-up clickable-image",onClick:()=>h(Ef),style:{width:"100%",height:"auto",display:"block",marginTop:"2rem"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"})]}),n.jsxs("div",{className:"cs-section",id:"takeaways",children:[n.jsx("p",{className:"cs-section-label",children:"3 Things This Project Taught Me"}),n.jsxs("div",{className:"learnings-list",children:[n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"1"}),n.jsx("p",{className:"learning-text",children:"Field studies are really powerful in terms of observing the users in the context."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"2"}),n.jsx("p",{className:"learning-text",children:"Designing for sustainability taught me a lot. This only works when the product doesn't ask users to compromise on anything they actually care about like price and comfort on their skin. So the design had to be really intentional about how to communicating sustainability without compromise."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"3"}),n.jsx("p",{className:"learning-text",children:"The founder obviously knew her customers better than we did, and learning to design with that knowledge rather than around it made the product better."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"skills",children:[n.jsx("p",{className:"cs-section-label",children:"Skills Gained Through This Project"}),n.jsx("div",{className:"skills-pills",children:["Semi-structured User Interviewing","Field Studies","Persona Development","Task Scenario Mapping","Vue.js Frontend Development","UI Architecture (Vuetify)","Scope Decision-Making","AI Assisted Prototyping Methods","Prototyping","Client Communication"].map(j=>n.jsx("span",{className:"skill-pill fade-up",children:j},j))})]}),n.jsxs("div",{className:"cs-section",id:"people",children:[n.jsx("p",{className:"cs-section-label",children:"The People Behind All This"}),n.jsx("div",{className:"people-img-wrap fade-up",children:n.jsx("img",{src:Ix,alt:"Ithaca Soap team"})})]}),n.jsx("div",{className:"cs-the-end",children:n.jsx("p",{className:"cs-the-end-text fade-up",children:"THE END"})})]})]}),n.jsxs("div",{className:"see-next",children:[n.jsx("p",{className:"see-next-label fade-up",children:"See Next"}),n.jsxs("div",{className:"see-next-grid",children:[n.jsxs("a",{href:"/google-cloud-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:hl,alt:"Google Cloud Capstone",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Google Cloud Capstone"}),n.jsx("p",{className:"see-next-desc",children:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users."})]})]}),n.jsxs("a",{href:"/routes-to-roots-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:gl,alt:"Routes to Roots App",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Routes to Roots App"}),n.jsx("p",{className:"see-next-desc",children:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life."})]})]})]})]}),n.jsx(Yn,{}),f&&n.jsx("div",{className:"image-modal-overlay",onClick:()=>h(null),children:n.jsxs("div",{className:"image-modal-content",onClick:j=>j.stopPropagation(),children:[n.jsx("button",{className:"image-modal-close",onClick:()=>h(null),children:"×"}),n.jsx("img",{src:f,alt:"Enlarged view"})]})})]})}const nl="/assets/girl-DyRSX-Uk.png",Jx="/assets/boy-Cb2QXxrt.png",Fx="/assets/R-BNsrwNRK.png",Wx="/assets/interview-DHTek2Tf.JPG",Cf="/assets/item1-DFIblHDH.jpeg",$x="/assets/item2-CLnbi5Ua.jpg",Px="/assets/item3-w30zsngq.jpeg",e2="/assets/item4-BO-K9wjc.JPG",t2="/assets/item5-m0BflQys.png",a2="/assets/method2data1-CB-Xj_my.png",i2="/assets/method2data2-BV3rMy1-.png",n2="/assets/method2data3-DJSjeAJM.png",Tf="/assets/method2data4-CX7-ch5h.png",Mf="/assets/Persona-CPVysNhA.jpg",Df="/assets/Auto-k09FEg30.png",Rf="/assets/ideation-C_AaJiq9.jpeg",Of="/assets/finaldesign-CeLaHIWl.JPG",s2="/assets/group-ox7_dPtn.JPG",_f="/assets/fd1-DGrdkDVD.png",Uf="/assets/fd2-B4x0VKCx.png",Bf="/assets/fd3-BStAD8Tk.png",Lf="/assets/fd4-DZjRWk0I.png",l2=[{num:"01",msg:"How do students currently experience and emotionally relate to their cultural hobbies while navigating academic life?"},{num:"02",msg:"What barriers, emotional, institutional, or social, prevent consistent engagement in cultural hobbies?"},{num:"03",msg:"How might digital or physical systems better support students in building a sustainable, emotionally reflective cultural hobby practice?"}];function r2(){const[r,m]=A.useState(!1),[d,c]=A.useState("context"),[f,h]=A.useState(null),[x,E]=A.useState(0),w=A.useRef(null),p=(S,U=0)=>{h(Array.isArray(S)?S:[S]),E(U)},y=()=>h(null),j=S=>{S.stopPropagation(),E(U=>(U+1)%f.length)},M=S=>{S.stopPropagation(),E(U=>(U-1+f.length)%f.length)};A.useEffect(()=>{const S=new IntersectionObserver(J=>J.forEach(oe=>oe.isIntersecting&&oe.target.classList.add("visible")),{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(J=>S.observe(J));const U=new IntersectionObserver(([J])=>{J.isIntersecting&&(m(!0),U.disconnect())},{threshold:.1});w.current&&U.observe(w.current);const q=["context","overview","problem","solution-preview","impact","design-process","final-design","not-to-build","takeaways","skills"],ie=()=>{const J=window.innerHeight*.35;let oe=q[0];for(const ue of q){const Q=document.getElementById(ue);Q&&Q.getBoundingClientRect().top<=J&&(oe=ue)}c(oe)};return ie(),window.addEventListener("scroll",ie,{passive:!0}),()=>{S.disconnect(),U.disconnect(),window.removeEventListener("scroll",ie)}},[]),A.useEffect(()=>{if(!f)return;const S=U=>{U.key==="Escape"?h(null):f.length>1&&U.key==="ArrowRight"?E(q=>(q+1)%f.length):f.length>1&&U.key==="ArrowLeft"&&E(q=>(q-1+f.length)%f.length)};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[f]);const L=()=>document.getElementById("final-design")?.scrollIntoView({behavior:"smooth"}),Y=[{src:Mi,name:"Figma"},{src:wp,name:"Miro"},{src:ml,name:"Canva"},{src:Fx,name:"R"},{src:ul,name:"ChatGPT"},{src:jp,name:"Photoshop"}],G=[{name:"Ashley Huang",avatar:nl},{name:"Carrie Kim",avatar:nl},{name:"Hrishika Jotwani",avatar:nl},{name:"Shreayaa Srinivasan",avatar:nl},{name:"Sumit Gawali",avatar:Jx}],H=[{id:"context",label:"Context"},{id:"overview",label:"Overview"},{id:"problem",label:"Problem"},{id:"solution-preview",label:"Solution"},{id:"impact",label:"Key Outputs"},{id:"design-process",label:"Research Process"},{id:"final-design",label:"Final Design"},{id:"not-to-build",label:"Decisions Made"},{id:"takeaways",label:"3 Lessons Learned"},{id:"skills",label:"Skills Built"}];return n.jsxs("div",{className:"cs-root",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: #ECEBE1;
        }
        body {
          min-height: 100%;
        }

        .cs-root {
          min-height: 100vh;
          color: #2d2d2d;
          font-family: 'DM Sans', sans-serif;
          overflow-x: clip;
        }

        /* ── HERO ──────────────────────────────────────────────── */
        .cs-hero {
          width: 100%;
          padding: 3.5rem 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: transparent;
          overflow: hidden;
          gap: 0.75rem;
        }
        .cs-hero-img {
          width: 100%;
          max-width: 500px;
          height: auto;
          object-fit: contain;
          display: block;
          opacity: 0;
          animation: heroFade 1.2s ease-out .2s forwards;
        }
        .cs-hero-subtitle {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          opacity: 0;
          animation: heroFade 1.2s ease-out .4s forwards;
        }
        @keyframes heroFade { to { opacity: 1; } }

        /* ── CONTENT COLUMN ────────────────────────────────────── */
        .cs-content {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0;
        }

        .cs-page-layout {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 200px minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .cs-sidebar {
          position: sticky;
          top: 7.5rem;
          align-self: start;
          width: 200px;
          padding-top: 4.5rem;
        }
        .cs-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: .95rem;
        }
        .cs-sidebar-link {
          text-decoration: none;
          color: #aaa;
          font-family: 'DM Sans', sans-serif;
          font-size: .75rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          transition: color .2s ease, padding-left .2s ease;
          position: relative;
          padding-left: 1rem;
          display: block;
          line-height: 1.4;
        }
        .cs-sidebar-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 100%;
          border-radius: 2px;
          background: transparent;
          transition: background .2s ease;
        }
        .cs-sidebar-link:hover {
          color: #e27396;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link:hover::before {
          background: rgba(226, 115, 150, .35);
        }
        .cs-sidebar-link.active {
          color: #e27396;
          font-weight: 700;
          padding-left: 1.3rem;
        }
        .cs-sidebar-link.active::before {
          background: #e27396;
        }

        /* ── INTRO ─────────────────────────────────────────────── */
        .cs-intro { padding: 4.5rem 0 3rem; }

        .cs-logo-bar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          justify-content: flex-start;
        }
        .cs-cornell-badge {
          background: #b31b1b;
          color: white;
          font-family: 'Fjalla One', sans-serif;
          font-size: .82rem;
          padding: .35rem .9rem;
          border-radius: 4px;
          letter-spacing: .04em;
        }
        .cs-logo-sep { font-size: 1.3rem; color: #ccc; font-weight: 300; }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 2.5rem;
        }
        .cs-tag {
          border: 1.5px solid rgba(45,45,45,.22);
          border-radius: 50px;
          padding: .3rem 1rem;
          font-size: .83rem;
          color: #555;
          background: rgba(255,255,255,.5);
          font-family: 'DM Sans', sans-serif;
        }

        .cs-sublabel {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: .55rem;
        }

        .cs-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin-bottom: 3rem;
          max-width: none;
          display: block;
        }
        .cs-solution-oneliner {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          line-height: 1.45;
          color: #e27396;
          margin: 1.25rem 0 1.5rem;
          max-width: none;
          display: block;
        }

        /* metadata grid */
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 3.5rem auto 2.5rem auto;
          max-width: 1200px;
          background: transparent;
          border: none;
        }
        .cs-meta-row {
          display: grid;
          gap: 0;
          width: 100%;
        }
        .cs-meta-row-top {
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 6px 6px 0 0;
          overflow: hidden;
        }
        .cs-meta-row-mid {
          grid-template-columns: 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          align-items: center;
        }
        .cs-meta-row-tools {
          grid-template-columns: 1fr;
          border-left: 1px solid rgba(226, 115, 150, 0.35);
          border-right: 1px solid rgba(226, 115, 150, 0.35);
          border-bottom: 1px solid rgba(226, 115, 150, 0.35);
          border-radius: 0 0 6px 6px;
        }
        .cs-meta-cell {
          padding: 1.25rem 1.5rem;
          border-right: 1px solid rgba(226, 115, 150, 0.25);
          text-align: center;
          min-height: 100%;
        }
        .cs-meta-row-top .cs-meta-cell:last-child,
        .cs-meta-row-mid .cs-meta-cell:last-child,
        .cs-meta-row-tools .cs-meta-cell {
          border-right: none;
        }
        .cs-meta-row-mid .cs-meta-cell {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-meta-team {
          align-items: center;
        }
        .cs-meta-team-avatars {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: .35rem;
        }
        .cs-meta-team-role {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .5rem;
          width: 90px;
        }
        .cs-team-avatar {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }
        .cs-team-role-label {
          font-family: 'DM Sans', sans-serif;
          font-size: .8rem;
          font-weight: 600;
          color: #2d2d2d;
          line-height: 1.25;
          text-align: center;
        }

        .cs-meta-key {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: .18em;
          color: #8b8b8b;
          margin-bottom: .6rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
        }
        .cs-meta-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: #2d2d2d;
          line-height: 1.4;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-tool-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          margin-top: .35rem;
          justify-content: center;
        }
        .cs-tool-logo {
          height: 30px;
          width: auto;
          object-fit: contain;
          filter: grayscale(15%);
          transition: filter .2s, transform .2s;
        }
        .cs-tool-logo:hover { filter: grayscale(0%); transform: scale(1.12); }
        .cs-tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }
        .cs-tool-name {
          font-size: 0.7rem;
          color: #555;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
          max-width: 60px;
        }

        /* ── SECTION ANATOMY ───────────────────────────────────── */
        .cs-section {
          padding: 4.5rem 0;
          border-top: 1px solid rgba(0,0,0,.08);
        }
        .cs-section-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 1.75rem;
        }

        .cs-body {
          font-size: 1rem;
          line-height: 1.85;
          color: #444;
          font-family: 'DM Sans', sans-serif;
        }
        .cs-body p { margin-bottom: 1.2rem; }
        .cs-body p:last-child { margin-bottom: 0; }
        .cs-bold-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.4rem;
          line-height: 1.5;
          color: #e27396;
          margin-bottom: 1.5rem;
        }
        .cs-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }
        .cs-placeholder {
          background: rgba(255,255,255,.4);
          border: 2px dashed rgba(0,0,0,.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #bbb;
          font-size: .85rem;
          font-style: italic;
        }

        /* ── STACKING iMESSAGE CARDS ──────────────────────────── */
        /* base styles live in components/caseStudy.css; wider bubble
           here because the research questions are longer */
        .psc-bubble { max-width: 460px; }

        /* ── SOLUTION VIDEO ────────────────────────────────────── */
        .cs-video-wrap {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,.14);
          margin: 2rem 0 1.5rem;
        }
        .cs-video-wrap iframe {
          display: block;
          width: 100%;
          aspect-ratio: 16/9;
          border: none;
        }
        .cs-skip-btn {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          background: transparent;
          border: 1.5px solid #e27396;
          color: #e27396;
          border-radius: 9999px;
          padding: .6rem 1.25rem;
          font-size: .95rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all .18s ease;
          margin: 1.25rem auto 0 auto;
        }
        .cs-skip-btn:hover { background: #e27396; color: white; }
        .cs-skip-icon {
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(226,115,150,0.12);
          color: #e27396;
          flex-shrink: 0;
        }
        .cs-skip-icon svg { width: 16px; height: 16px; }
        .cs-skip-label { display: inline-block; font-family: 'DM Sans', sans-serif; font-weight:700; }

        /* ── IMPACT ────────────────────────────────────────────── */
        .impact-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin: 2.5rem 0 2rem;
        }
        .impact-note {
          font-size: 1.1rem;
          color: #e27396;
          font-style: normal;
          font-family: ui-serif, Georgia, serif;
          font-weight: 500;
          margin-top: 1.5rem;
          line-height: 1.6;
          border-left: 4px solid #000;
          padding-left: 1rem;
          margin-left: 0.5rem;
        }

        /* ── DESIGN PROCESS ────────────────────────────────────── */
        .process-intro {
          font-family: ui-serif, Georgia, serif;
          font-size: 22.4px;
          color: #e27396;
          font-style: normal;
          font-weight: 500;
          line-height: 1.5;
          margin-bottom: 2.5rem;
        }
        .process-timeline { margin-top: 0; }
        .process-step {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          position: relative;
        }
        .ps-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .ps-num {
          font-family: ui-serif, Georgia, serif;
          font-size: .8rem;
          font-weight: 600;
          color: #e27396;
          margin-bottom: .35rem;
          letter-spacing: .04em;
        }
        .ps-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: .75rem;
        }
        .ps-text {
          font-size: .95rem;
          color: #555;
          line-height: 1.78;
          font-family: 'DM Sans', sans-serif;
        }
        .ps-img {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,.1);
        }
        .ps-img img { width: 100%; height: auto; display: block; }
        .process-timeline > .process-step:nth-child(3) .ps-img,
        .process-timeline > .process-step:nth-child(7) .ps-img,
        .process-timeline > .process-step:nth-child(13) .ps-img {
          max-width: 85%;
        }

        /* sub-content inside a process step */
        .ps-list-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: .95rem;
          color: #1a1a1a;
          margin-top: .5rem;
        }
        .ps-sublist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .55rem;
          margin-top: .25rem;
        }
        .ps-sublist li {
          font-size: .92rem;
          color: #555;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
          padding-left: 1.1rem;
          position: relative;
        }
        .ps-sublist li::before {
          content: '';
          position: absolute;
          left: 0;
          top: .62em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e27396;
        }

        /* video placeholder — subtle pink tint + play icon */
        .cs-video-ph {
          background: rgba(226,115,150,0.05) !important;
          border-color: rgba(226,115,150,0.25) !important;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: 10px;
        }

        /* ── FINAL DESIGN ──────────────────────────────────────── */
        .fd-empty-note {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.15rem;
          color: #999;
          font-style: italic;
          line-height: 1.6;
          margin-top: 1rem;
        }
        .fd-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }
        .fd-item {
          width: 100%;
        }
        .fd-item img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── NOT TO BUILD ──────────────────────────────────────── */
        .ntb-list { display: flex; flex-direction: column; gap: 2.25rem; margin-top: 1rem; }
        .ntb-item-title {
          font-family: ui-serif, Georgia, serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: #e27396;
          margin-bottom: .65rem;
        }
        .ntb-desc {
          font-size: 1rem;
          color: #444;
          line-height: 1.85;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── LEARNINGS ─────────────────────────────────────────── */
        .learnings-list {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          font-family: 'DM Sans', sans-serif;
        }
        .learning-item {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }
        .learning-n {
          font-size: 4rem;
          font-weight: 900;
          color: rgba(226,115,150,.4);
          line-height: .85;
          font-family: 'Fjalla One', sans-serif;
          flex-shrink: 0;
          width: 52px;
          text-align: right;
        }
        .learning-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          padding-top: 0;
          flex: 1;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── PROBLEM ─────────────────────────────────────────── */
        .problem-lead { margin-bottom: 1rem; }

        /* ── SKILLS ────────────────────────────────────────────── */
        .skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-top: 1.5rem;
        }
        .skill-pill {
          background: rgba(255,255,255,.75);
          border: 1.5px solid rgba(226,115,150,.45);
          color: #c55577;
          border-radius: 50px;
          padding: .42rem 1.2rem;
          font-size: .87rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          transition: background .2s, color .2s;
        }
        .skill-pill:hover { background: #e27396; color: white; }

        /* ── THE PEOPLE BEHIND ALL THIS ────────────────────────── */
        .people-img-wrap {
          width: 100%;
          max-width: 900px;
          margin: 2rem auto;
        }
        .people-img-wrap img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 8px 40px rgba(0,0,0,.14);
          display: block;
        }

        /* ── THE END ───────────────────────────────────────────── */
        .cs-the-end {
          text-align: center;
          padding: 5rem 2rem 3.5rem;
        }
        .cs-the-end-text {
          font-family: 'Fjalla One', sans-serif;
          font-size: 5rem;
          color: #2d2d2d;
          text-transform: uppercase;
          letter-spacing: .08em;
          line-height: 1;
        }

        /* ── SEE NEXT ──────────────────────────────────────────── */
        .see-next {
          padding: 4rem 2rem 2rem;
          max-width: 1120px;
          margin: 0 auto;
        }
        .see-next-label {
          font-family: 'Fjalla One', sans-serif;
          font-size: .68rem;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: #111;
          margin-bottom: 2rem;
        }
        .see-next-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .see-next-card {
          background: rgba(255,255,255,.6);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,.08);
          text-decoration: none;
          color: inherit;
          transition: transform .25s ease, box-shadow .25s ease;
          display: flex;
          flex-direction: column;
        }
        .see-next-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 36px rgba(0,0,0,.13);
        }
        .see-next-img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: contain;
          display: block;
          background: rgba(255,255,255,.6);
        }
        .see-next-body {
          padding: 1.4rem 1.6rem 1.8rem;
        }
        .see-next-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: .6rem;
        }
        .see-next-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .9rem;
          color: #555;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .see-next-grid { grid-template-columns: 1fr; }
        }

        /* ── IMAGE MODAL ───────────────────────────────────────── */
        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          cursor: pointer;
        }
        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 10px 60px rgba(0, 0, 0, 0.3);
          cursor: default;
        }
        .image-modal-content img {
          width: 100%;
          height: auto;
          max-width: 100%;
          max-height: calc(90vh - 2rem);
          display: block;
        }
        .image-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }
        .image-modal-close:hover {
          transform: scale(1.2);
        }
        .image-modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 9999px;
          border: none;
          background: rgba(255,255,255,.9);
          color: #2d2d2d;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,.25);
          transition: background .2s, transform .2s;
          z-index: 2;
        }
        .image-modal-nav svg { width: 22px; height: 22px; }
        .image-modal-nav.prev { left: -23px; }
        .image-modal-nav.next { right: -23px; }
        .image-modal-nav:hover { background: #e27396; color: white; transform: translateY(-50%) scale(1.08); }
        .image-modal-counter {
          position: absolute;
          bottom: -34px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: .85rem;
          letter-spacing: .05em;
        }
        @media (max-width: 600px) {
          .image-modal-nav.prev { left: 6px; }
          .image-modal-nav.next { right: 6px; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .clickable-image {
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .clickable-image:hover {
          opacity: 0.85;
        }
        .image-subtext {
          font-size: 0.75rem;
          color: #999;
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── SCROLL ANIMATIONS ─────────────────────────────────── */
        .fade-up    { opacity: 0; transform: translateY(24px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-left  { opacity: 0; transform: translateX(-36px); transition: opacity .65s ease, transform .65s ease; }
        .fade-right { opacity: 0; transform: translateX(36px);  transition: opacity .65s ease, transform .65s ease; }
        .fade-up.visible,
        .fade-left.visible,
        .fade-right.visible { opacity: 1; transform: none; }

        /* ── RESPONSIVE ────────────────────────────────────────── */
        @media (max-width: 768px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-oneliner       { font-size: 1.2rem; }
          .impact-row        { grid-template-columns: repeat(2, 1fr); }
          .process-step      { grid-template-columns: 1fr; gap: 1.5rem; }
          .cs-the-end-text   { font-size: 3.5rem; }
        }
        @media (max-width: 1024px) {
          .cs-page-layout   { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .cs-sidebar       { display: none; }
          .cs-content       { max-width: none; }
          .cs-bold-intro    { font-size: 1.15rem; }
          .cs-oneliner      { font-size: 18px; }
          .cs-solution-oneliner { font-size: 18px; }
          .cs-meta-row-top  { grid-template-columns: 1fr; }
          .cs-meta-row-mid  { grid-template-columns: 1fr; }
          .cs-meta-row-tools{ grid-template-columns: 1fr; }
          .impact-row       { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .cs-page-layout    { padding: 0 1rem; }
          .impact-row        { grid-template-columns: 1fr 1fr; gap: .9rem; }
          .impact-num        { font-size: 2.5rem; }
          .cs-the-end-text   { font-size: 2.5rem; }
        }
      `}),n.jsx(ea,{}),n.jsxs("div",{className:"cs-hero",children:[n.jsx("img",{src:gl,alt:"Routes to Roots — Final Product",className:"cs-hero-img"}),n.jsx("p",{className:"cs-hero-subtitle",children:"Final Product View"})]}),n.jsxs("div",{className:"cs-page-layout",children:[n.jsx("aside",{className:"cs-sidebar","aria-label":"Section navigation",children:n.jsx("nav",{className:"cs-sidebar-nav",children:H.map(S=>n.jsx("a",{href:`#${S.id}`,className:`cs-sidebar-link${d===S.id?" active":""}`,onClick:U=>{U.preventDefault(),document.getElementById(S.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:S.label},S.id))})}),n.jsxs("div",{className:"cs-content",children:[n.jsxs("div",{className:"cs-intro",id:"context",children:[n.jsx("div",{className:"cs-tags fade-up",children:["UX Research","Interaction Design","Cultural Probes","Auto Ethnography","Diary Studies"].map(S=>n.jsx("span",{className:"cs-tag",children:S},S))}),n.jsx("p",{className:"cs-sublabel fade-up",children:"What is this project?"}),n.jsx("p",{className:"cs-oneliner fade-up",children:"Designed a research-driven solution to support students who want to practice their cultural hobbies and manage them along with hectic academic schedules."}),n.jsxs("div",{className:"cs-meta fade-up",children:[n.jsxs("div",{className:"cs-meta-row cs-meta-row-top",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Institution"}),n.jsx("div",{className:"cs-meta-val",children:"Cornell University"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"My Role"}),n.jsx("div",{className:"cs-meta-val",children:"UX Researcher & Interaction Designer"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Timeline"}),n.jsx("div",{className:"cs-meta-val",children:"13 Weeks · May 2025"})]})]}),n.jsx("div",{className:"cs-meta-row cs-meta-row-mid",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-team",children:[n.jsx("div",{className:"cs-meta-key",children:"Team"}),n.jsx("div",{className:"cs-meta-team-avatars","aria-label":"Project team",children:G.map(S=>n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:S.avatar,alt:"",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:S.name})]},S.name))})]})}),n.jsx("div",{className:"cs-meta-row cs-meta-row-tools",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-tools",children:[n.jsx("div",{className:"cs-meta-key",children:"Tools"}),n.jsx("div",{className:"cs-tool-logos",children:Y.map(S=>n.jsxs("div",{className:"cs-tool-item",children:[n.jsx("img",{src:S.src,alt:S.name,title:S.name,className:"cs-tool-logo"}),n.jsx("p",{className:"cs-tool-name",children:S.name})]},S.name))})]})})]})]}),n.jsxs("div",{className:"cs-section",id:"overview",children:[n.jsx("p",{className:"cs-section-label",children:"Overview"}),n.jsxs("div",{className:"cs-body fade-up",children:[n.jsx("p",{className:"cs-bold-intro",children:"Cornell brings together students from culturally diverse backgrounds."}),n.jsx("p",{children:"And somewhere between orientation week and finals season, a lot of them quietly stop doing the things that they grew up loving, traditional cooking, dance, music, art, the cultural hobbies that tied them to home."}),n.jsxs("p",{children:["It is because they ",n.jsx("span",{className:"cs-highlight",children:"struggle to maintain these hobbies while navigating the demands of university life."})," Because there was no time, no space, no community, and honestly, no easy way to find any of those things."]}),n.jsxs("p",{children:["Now you might think that there are cultural clubs one could join. But they're not built for this. To join ",n.jsx("span",{className:"cs-highlight",children:"most cultural clubs, you need to already be skilled."})," They're not designed for the student who grew up folding dumplings with their grandmother, or who learned Bharatanatyam basics as a child but never trained formally, someone who loves the practice, feels culturally grounded by it, and wants to get back to it, but has no entry point. There was ",n.jsx("span",{className:"cs-highlight",children:"no one holistic system where you could pursue your own cultural hobby at your own level"}),", stumble into someone else's tradition, and feel welcome doing either. That gap is what we were designing for."]}),n.jsxs("p",{children:["Over the course of this project, we ran ",n.jsx("span",{className:"cs-highlight",children:"contextual interviews"}),", designed and distributed ",n.jsx("span",{className:"cs-highlight",children:"physical cultural probe kits"})," to participants, conducted an ",n.jsx("span",{className:"cs-highlight",children:"autoethnographic research"})," within our research team, synthesized everything through ",n.jsx("span",{className:"cs-highlight",children:"affinity mapping and personas"}),", and landed on a ",n.jsx("span",{className:"cs-highlight",children:"design concept"}),". This case study is a gist of my process throughout this project."]})]})]}),n.jsxs("div",{className:"cs-section",id:"problem",children:[n.jsx("p",{className:"cs-section-label",children:"Problem"}),n.jsx("div",{className:"cs-body",children:n.jsx("p",{className:"cs-bold-intro fade-up problem-lead",children:"Once the problem was clear, we put forth a list of research questions to guide us through the research process."})}),n.jsx(tc,{cards:l2})]}),n.jsxs("div",{className:"cs-section",id:"solution-preview",children:[n.jsx("p",{className:"cs-section-label",children:"Solution Preview"}),n.jsx("p",{className:"cs-solution-oneliner fade-up",children:"Here is a walkthrough of the final design solution."}),n.jsx("div",{className:"cs-video-wrap fade-up",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/NbugF3D0B9k",title:"Routes to Roots — Final Design Demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),n.jsxs("button",{className:"cs-skip-btn fade-up",onClick:L,children:[n.jsx("span",{className:"cs-skip-icon","aria-hidden":!0,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v10M7 12l5 5 5-5"})})}),n.jsx("span",{className:"cs-skip-label",children:"In a hurry? Skip to the final design"})]})]}),n.jsxs("div",{className:"cs-section",id:"impact",ref:w,children:[n.jsx("p",{className:"cs-section-label",children:"Key Outputs"}),n.jsxs("div",{className:"impact-row",children:[n.jsx(At,{end:10,suffix:"+",inView:r,label:"Cornell students recruited across cultural clubs as research participants"}),n.jsx(At,{end:2,suffix:"",inView:r,label:"Complementary research methods in this mixed-method research study (cultural probes and autoethnography)"}),n.jsx(At,{end:1,suffix:"",inView:r,label:"High-fidelity prototype presented to the class"})]}),n.jsx("p",{className:"impact-note fade-up",children:'The most meaningful impact was winning "Best Project for Social Impact and Uniqueness" amongst 75+ students.'})]}),n.jsxs("div",{className:"cs-section",id:"design-process",children:[n.jsx("p",{className:"cs-section-label",children:"Research Process"}),n.jsx("p",{className:"process-intro fade-up",children:"The research process was messy and interesting. Every diary study entry surfaced the emotional depth of the problem, and every research method revealed something we had overlooked."}),n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Wx,alt:"Contextual interviews"})}),n.jsx("p",{className:"ps-num",children:"01"}),n.jsx("h3",{className:"ps-title",children:"Contextual Interviews"}),n.jsx("p",{className:"ps-text",children:"We started off the research process by interviewing and observing students who practiced cultural hobbies. We wanted to understand what these hobbies meant to the users and analyze the space that we had to design for."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Cf,alt:"Cultural probe kit",className:"clickable-image",onClick:()=>p([Cf,$x,Px,e2,t2],0)})}),n.jsx("p",{className:"image-subtext",children:"Click to browse the full probe kit →"}),n.jsx("p",{className:"ps-num",children:"02"}),n.jsx("h3",{className:"ps-title",children:"Method: Cultural Probes & Diary Studies"}),n.jsxs("p",{className:"ps-text",children:[n.jsx("strong",{children:"Why?"})," The first method was a cultural probe kit. We wanted participants to show us things they couldn't easily say out loud. So we chose a cultural probe kit with scrapbooks, postcards, and timeline maps, low-pressure creative materials that let emotions surface naturally, without the awkwardness of a formal interview. Alongside that, we had them fill out daily diary prompts for a week, capturing their actual routines in real time."]})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Mf,alt:"Persona",className:"clickable-image",onClick:()=>p(Mf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"03"}),n.jsx("h3",{className:"ps-title",children:"Persona Creation"}),n.jsx("p",{className:"ps-text",children:"Once we had completed probe kits and conducted exit interviews with participants. The findings from method 1 helped us weave a persona representing the user group we were solving for."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Df,alt:"Autoethnography study",className:"clickable-image",onClick:()=>p(Df)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"04"}),n.jsx("h3",{className:"ps-title",children:"Method: Autoethnography"}),n.jsxs("p",{className:"ps-text",children:[n.jsx("strong",{children:"Why?"})," Every person on our team came from a culturally diverse background, and most of us had felt that quiet drift away from our own cultural practices at some point in college. So it made sense to turn inward. We ran an autoethnography study after Method 1, making ourselves the participants. We genuinely fit the people we were designing for, and there's something you can only learn from your own honest experience that no interview script can pull out of someone else."]})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Tf,alt:"Findings & synthesis",className:"clickable-image",onClick:()=>p([Tf,a2,i2,n2],0)})}),n.jsx("p",{className:"image-subtext",children:"Click to browse the findings →"}),n.jsx("p",{className:"ps-num",children:"05"}),n.jsx("h3",{className:"ps-title",children:"Findings"}),n.jsx("p",{className:"ps-list-label",children:"The cultural probe method revealed:"}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsx("li",{children:"Cultural hobbies help the students to sustain a connection to their heritage and strengthen social bonds."}),n.jsx("li",{children:"Cultural hobbies act as anchors of self-identity and aspiration."}),n.jsx("li",{children:"Cultural engagement is often deprioritized in hectic academic schedules"})]}),n.jsx("p",{className:"ps-list-label",children:"The autoethnography study revealed:"}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsx("li",{children:"Most apps lacked built-in motivators, resulting in self-driven participation."}),n.jsx("li",{children:"Participants desired tools for reflection and growth tracking."}),n.jsx("li",{children:"Cultural connection fluctuated with the tone and depth of content."})]})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Rf,alt:"Design ideation sketches",className:"clickable-image",onClick:()=>p(Rf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"06"}),n.jsx("h3",{className:"ps-title",children:"Design Ideation"}),n.jsx("p",{className:"ps-text",children:"We sketched low-fidelity sketches of multiple concepts, including apps, community boards, and event platforms. A competitor analysis of existing hobby apps (YouTube, Duolingo-style trackers, cooking platforms) revealed they all prioritized productivity over cultural connection."}),n.jsx("p",{className:"ps-text",children:n.jsx("strong",{children:"We decided not to build another app."})})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Of,alt:"Routes to Roots kiosk concept",className:"clickable-image",onClick:()=>p(Of)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"07"}),n.jsx("h3",{className:"ps-title",children:"Final Design"}),n.jsx("p",{className:"ps-text",children:"We developed a final concept, Routes to Roots, a physical kiosk placed in visible spaces across the Cornell campus (eg, Duffield, Sage Atrium). It offers students an accessible, reflective way to rediscover and connect with their cultural hobbies through peers, events, and visible spaces. The kiosk steps in to fill the gaps of:"}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Visibility:"})," Making culturally meaningful hobbies public and discoverable."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Agency:"})," Empowering students to define and share their own practices."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Emotional resonance:"})," Prioritizing curiosity and reflection over achievement."]})]})]}),n.jsx("div",{})]})]})]}),n.jsxs("div",{className:"cs-section",id:"final-design",children:[n.jsx("p",{className:"cs-section-label",children:"Final Design"}),n.jsxs("div",{className:"fd-grid fade-up",children:[n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:_f,alt:"Final design concept 1",className:"clickable-image",onClick:()=>p(_f)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]}),n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:Uf,alt:"Final design concept 2",className:"clickable-image",onClick:()=>p(Uf)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]}),n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:Bf,alt:"Final design concept 3",className:"clickable-image",onClick:()=>p(Bf)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]}),n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:Lf,alt:"Final design concept 4",className:"clickable-image",onClick:()=>p(Lf)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]})]})]}),n.jsxs("div",{className:"cs-section",id:"not-to-build",children:[n.jsx("p",{className:"cs-section-label",children:"What We Decided Not to Build & Why"}),n.jsxs("div",{className:"ntb-list",children:[n.jsxs("div",{className:"ntb-item fade-up",children:[n.jsx("h3",{className:"ntb-item-title",children:"A physical cultural center"}),n.jsx("p",{className:"ntb-desc",children:"One concept we seriously explored was a dedicated campus space with different rooms dedicated to different hobbies: instruments you could borrow, art supplies, and cooking equipment. The idea was that if you used to play violin as a kid but don't have one here, you shouldn't have to buy a new one just to reconnect with something that's always been part of you. It was a compelling concept. But we kept coming back to the same problem: visibility. Cornell is already full of resources that students don't know about. A cultural center, however well-equipped, risks becoming just another thing that exists on campus without reaching the people who need it most, exactly like the cultural clubs we started this project trying to understand. So we let it go."})]}),n.jsxs("div",{className:"ntb-item fade-up",children:[n.jsx("h3",{className:"ntb-item-title",children:"A mobile app"}),n.jsx("p",{className:"ntb-desc",children:"Our autoethnography showed clearly that apps don't sustain cultural engagement on their own. Emotional connection doesn't come from an app; it comes from a triggering memory. An app would have replicated the same hollow experience we were trying to fix."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"takeaways",children:[n.jsx("p",{className:"cs-section-label",children:"3 Things That This Project Taught Me"}),n.jsxs("div",{className:"learnings-list",children:[n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"1"}),n.jsxs("p",{className:"learning-text",children:[n.jsx("strong",{children:"Design beyond usability."}),` This project shifted something for me. I'm used to asking "Is this intuitive?" or "Can users complete the task?" But Routes to Roots asked a completely different question: Does this make someone feel like they belong? Designing for that, for the feeling of being seen, required me to slow down and sit with the research in a way I hadn't before. It was uncomfortable in a good way.`]})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"2"}),n.jsxs("p",{className:"learning-text",children:[n.jsx("strong",{children:"Mixed method research is highly useful when used the right way."})," Cultural probes let participants show us things they couldn't have said in an interview, grief about lost hobbies, longing in a postcard, pride in a scrapbook drawing. Autoethnography let us feel those same things ourselves. Neither would have been enough on its own. Together, they gave us a kind of view of the problem that I think showed up in the depth of our final design."]})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"3"}),n.jsxs("p",{className:"learning-text",children:[n.jsx("strong",{children:"Not only this project but this course taught me that the most impactful design is not always an app or something digital."})," That sounds obvious when I say it out loud, but it really wasn't during the project. Every design instinct pulls you toward a screen. What changed for us was paying attention to where students actually were, walking through Duffield, sitting in Sage Atrium, passing through spaces they use every single day. A kiosk in those spaces does something an app notification never could: it catches you when you weren't looking for it."]})]})]})]}),n.jsxs("div",{className:"cs-section",id:"skills",children:[n.jsx("p",{className:"cs-section-label",children:"Skills Gained Through This Project"}),n.jsx("div",{className:"skills-pills",children:["Cultural Probes Design","Diary Study","Autoethnography","Affinity Mapping","Persona Development","Interaction Design","Kiosk UX","Figma Prototyping","Qualitative Data Analysis","R (data visualization)","Physical Research Artifact Design"].map(S=>n.jsx("span",{className:"skill-pill fade-up",children:S},S))})]}),n.jsxs("div",{className:"cs-section",id:"people",children:[n.jsx("p",{className:"cs-section-label",children:"The People Behind All This"}),n.jsx("div",{className:"people-img-wrap fade-up",children:n.jsx("img",{src:s2,alt:"Routes to Roots team"})})]}),n.jsx("div",{className:"cs-the-end",children:n.jsx("p",{className:"cs-the-end-text fade-up",children:"THE END"})})]})]}),n.jsxs("div",{className:"see-next",children:[n.jsx("p",{className:"see-next-label fade-up",children:"See Next"}),n.jsxs("div",{className:"see-next-grid",children:[n.jsxs("a",{href:"/google-cloud-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:hl,alt:"Google Cloud Capstone",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Google Cloud Capstone"}),n.jsx("p",{className:"see-next-desc",children:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users."})]})]}),n.jsxs("a",{href:"/ithaca-soap-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:Un,alt:"Ithaca Soap Redesign",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Ithaca Soap Redesign"}),n.jsx("p",{className:"see-next-desc",children:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap."})]})]})]})]}),n.jsx(Yn,{}),f&&n.jsx("div",{className:"image-modal-overlay",onClick:y,children:n.jsxs("div",{className:"image-modal-content",onClick:S=>S.stopPropagation(),children:[n.jsx("button",{className:"image-modal-close",onClick:y,children:"×"}),f.length>1&&n.jsx("button",{className:"image-modal-nav prev",onClick:M,"aria-label":"Previous image",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:n.jsx("path",{d:"M15 18l-6-6 6-6"})})}),n.jsx("img",{src:f[x],alt:"Enlarged view"}),f.length>1&&n.jsx("button",{className:"image-modal-nav next",onClick:j,"aria-label":"Next image",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:n.jsx("path",{d:"M9 18l6-6-6-6"})})}),f.length>1&&n.jsxs("div",{className:"image-modal-counter",children:[x+1," / ",f.length]})]})})]})}const o2="/assets/storyboard1-fBactef1.png",c2="/assets/storyboard2-Dq1tlHVE.png",d2="/assets/storyboard3-NQAMn8Tz.png",u2="/assets/prototype1-CqnRYqh1.png",m2="/assets/prototype2-wMH44h2A.png",f2="/assets/prototype3-CAUpV1-q.png",p2="/assets/prototype4-BHIa9hNy.png",h2="/assets/prototype5-CsczmHRT.png",Hf=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:`Imagine landing in a new country for the first time. You're excited, nervous, and ready to meet people, except every introduction turns into a mini struggle. Your name gets mispronounced again and again. You start shortening it, giving an "easy version," or just avoiding correcting people altogether. Over time, this chips away at your confidence in classrooms, networking events, and even casual conversations.`}),n.jsxs("p",{children:["That frustration sparked our team's project: ",n.jsx("strong",{children:"iName"})," — a mobile and wearable app designed to make introductions smoother by helping people pronounce and remember names correctly while also honoring the cultural stories behind them."]})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"I wore many hats in this project:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"researcher"}),", I interviewed international participants, analyzed the data, and conducted usability tests."]}),n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"strategist"}),", I sketched and storyboarded scenarios, imagining how technology could work in real life."]}),n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"designer"}),", I built prototypes in Figma, turning our rough sketches into something people could actually use."]})]}),n.jsx("p",{children:"More than anything, I focused on making sure the voices of our users stayed at the center of every decision."})]})},{id:3,title:"Understanding Our Users",content:n.jsxs("div",{children:[n.jsx("p",{children:"We focused on non-native English speakers at Cornell — students, visiting scholars, and newcomers navigating a new world."}),n.jsx("p",{children:`One student told us, "I stopped correcting because I was tired of repeating my name ten times." Another said, "It feels like I'm asking people for too much just to say it right."`}),n.jsx("p",{children:"These stories shaped our problem: people don't just need their names pronounced correctly; they need their identity respected and remembered."})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("h4",{children:"01 Research"}),n.jsx("p",{children:"Our research showed that existing solutions like Google Translate or simple name tags fell short; they either lacked cultural context, felt outdated, or weren't built just for social/professional environments."}),n.jsx("p",{children:'We also explored tools like RescueTime in the productivity space (from our inspiration case) and saw a parallel: they solved the "what" but not the "how." Similarly, apps stored names, but none combined memory, pronunciation, and cultural meaning in one. That gap was our opportunity.'}),n.jsx("h4",{children:"02 Early Concepts"}),n.jsx("p",{children:"We started with imagination. What if you could rent smart glasses at an event, and when you met someone new, their name floated above them with the correct pronunciation whispered in your ear?"}),n.jsx("p",{children:"What if there was an interactive map that let you dive into the syllables of Irish, Mandarin, or Hindi names?"}),n.jsx("p",{children:"What if, before a networking event, you could know the names of all the attendees so you never had to stumble through introductions again?"}),n.jsx("p",{children:'These "what ifs" turned into sketches, and the sketches turned into storyboards.'}),n.jsx("ul",{children:n.jsx("li",{children:"Liu, a student from China, records his pronunciation during sign-up, finally feeling like people will hear his name the way his family intended."})}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",margin:"2rem 0"},children:[n.jsx("img",{src:o2,alt:"Storyboard panels 1-2: User signs up and tries iName app"}),n.jsx("img",{src:c2,alt:"Storyboard panels 3-4: User learns phonics and accesses family name pronunciation"}),n.jsx("img",{src:d2,alt:"Storyboard panels 5-6: User explores China/Mandarin meaning and successfully uses iName"})]}),n.jsx("h4",{children:"03 Prototyping"}),n.jsx("p",{children:"From there, we built wireframes: clean flows for creating profiles, saving names, exploring the world map, and connecting to smart devices. As fidelity increased, we experimented with typography, color palettes, and interactions until the app felt warm and inclusive."}),n.jsx("h4",{children:"04 Testing"}),n.jsx("p",{children:"Then came the real test: putting iName into the hands of students. We gave them tasks like signing up, saving names from a group, or exploring the cultural map. That's when we realized some things weren't working:"}),n.jsxs("ul",{children:[n.jsx("li",{children:'The "Starred Names" icon confused people; nobody knew what it did.'}),n.jsx("li",{children:"The Explore map looked pretty, but users didn't know they could click into it."}),n.jsx("li",{children:"Dense blocks of cultural content overwhelmed readers."}),n.jsx("li",{children:"Everyone wanted profile pictures to connect faces with names."})]}),n.jsx("p",{children:"So we iterated"}),n.jsxs("ul",{children:[n.jsx("li",{children:'We turned "Starred Names" into a clearly labeled Saved tab.'}),n.jsx("li",{children:"We added tooltips and markers to the map."}),n.jsx("li",{children:"We broke content into bite-sized sections with visuals."}),n.jsx("li",{children:"We redesigned event attendee lists into profile cards with photos and play buttons."})]}),n.jsx("p",{children:"Each cycle of testing pulled us closer to the product our users actually needed."})]})},{id:5,title:"Final Design Solution",content:n.jsxs("div",{children:[n.jsx("p",{children:"The final iName experience combines mobile and wearable design with fun features:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Sign Up"}),": Users can record their pronunciation, add phonetic hints, and share the meaning of their name."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Explore"}),": An interactive world map that connects names to cultures, syllables, and stories."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Saved"}),": A dedicated space to bookmark and organize names you want to remember for events."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Event Prep"}),": Attendees get pronunciation reminders ahead of time."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Smart Devices"}),": Glasses and earbuds that display and pronounce names in real time at events."]})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"nowrap",gap:"2rem",justifyContent:"center",alignItems:"flex-start",margin:"2.5rem 0",overflowX:"auto",width:"calc(100% + 480px)",marginLeft:"-240px",marginRight:"-240px",paddingLeft:"240px",paddingRight:"240px"},children:[n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:u2,alt:"Sign Up screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:m2,alt:"Profile screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:f2,alt:"Groups screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:p2,alt:"Explore screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:h2,alt:"Devices screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})})]}),n.jsxs("div",{style:{marginTop:"1.5rem"},children:[n.jsx("h3",{style:{margin:0,color:"var(--text-secondary)"},children:"Watch how the solution works in real life"}),n.jsx("div",{style:{maxWidth:"100%",marginTop:"1rem",borderRadius:"12px"},children:n.jsx("iframe",{width:"100%",height:"506",src:"https://www.youtube.com/embed/hC4MDLmYAGg",title:"iName Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"900px",height:"506px",display:"block"}})})]})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"Storyboards helped us communicate user needs more vividly to our team, ensuring alignment before we invested in prototypes."}),n.jsx("li",{children:"During think-aloud sessions, the most valuable feedback came from moments of hesitation, when users weren't sure what to tap or why a feature existed."}),n.jsx("li",{children:"Learning to observe confusion without intervening gave me clearer signals on where the design was failing."})]})})}];function g2(){const r=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},m=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(h=>{h.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(h=>c.observe(h)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
          --yellow-bg: #F4E84C;
          --case-study-bg: #b3b7ee;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        /* Animated Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: floatBackground 25s ease-in-out infinite;
        }

        @keyframes floatBackground {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) rotate(1deg) scale(1.02);
          }
          66% { 
            transform: translateY(-30px) rotate(-1deg) scale(0.98);
          }
        }

        .content-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInHeader 1s ease-out 0.2s forwards;
        }

        @keyframes slideInHeader {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .custom-logo {
          height: 3.5rem;
          width: auto;
          object-fit: contain;
          display: inline-block;
          transition: transform 0.3s ease, filter 0.3s ease;
          vertical-align: middle;
        }

        .custom-logo:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px rgba(226, 115, 150, 0.4));
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-links a:hover {
          transform: scale(1.05);
          color: var(--rose-pompadour);
        }

        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: var(--rose-pompadour);
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-links a:hover:after {
          width: 100%;
        }

        /* Main Layout */
        .case-study-layout {
          padding: 4rem 0;
        }

        /* Mockup Section - No Container */
        .mockup-section {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.4s forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mockup-image {
          width: auto;
          max-width: 1600px;
          height: auto;
          max-height: 1000px;
          object-fit: contain;
          object-position: center;
          transition: all 0.4s ease;
        }

        .mockup-image:hover {
          transform: scale(1.02);
        }

        /* Project Metadata */
        .project-metadata {
          display: flex;
          justify-content: center;
          gap: 6rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.6s forwards;
        }

        .metadata-item {
          text-align: center;
        }

        .metadata-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Fjalla One', sans-serif;
        }

        .metadata-value {
          font-size: 1.3rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Cascading Cards Section - HORIZONTAL STACKING */
        .cascade-section {
          display: flex;
          justify-content: center;
          margin-bottom: 8rem;
          margin-top: 4rem; /* Add space above to push cards down */
          opacity: 0;
          animation: slideInUp 1s ease-out 0.8s forwards;
          width: 100%;
          overflow-x: auto; /* Allow horizontal scroll if needed */
          padding: 0 20px; /* Add padding to prevent edge cutoff */
        }

        .cascade-container {
          position: relative;
          width: 1400px; /* Further increased to ensure no cutoff */
          height: 600px; /* Increased height for taller cards */
          margin: 0 auto; /* Center the container */
        }

        /* Section cards - stacked horizontally to the right - BEHIND yellow card */
        .cascade-card {
          position: absolute;
          width: 380px; /* Updated to requested size */
          height: 320px; /* Updated to requested size */
          background: #b3dee2;;
          backdrop-filter: blur(25px);
          border-radius: 12px;
          border: 3px solid #2d2d2d;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: flex-start; /* Align text to top */
          justify-content: center;
          padding-top: 10px; /* Reduced from 25px to move text closer to top */
          opacity: 0;
          animation: cascadeIn 0.6s ease-out forwards;
        }

        .cascade-card h3 {
          font-size: 1.3rem; /* Increased for better consistency */
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          line-height: 1.3;
          margin: 0;
          padding: 0 15px; /* Add some horizontal padding */
        }

        /* ADD THE MISSING ANIMATION */
        @keyframes cascadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .cascade-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          z-index: 11; /* Even higher on hover */
        }

        /* Horizontal stacking - adjusted for larger card sizes */
        .cascade-card:nth-child(1) { /* Overview */
          bottom: 0px; /* Adjusted for taller cards */
          left: 200px; /* More spacing for wider cards */
          z-index: 6;
          animation-delay: 1s;
        }

        .cascade-card:nth-child(1) h3 { /* Ensure first card font size is consistent */
          font-size: 1.3rem;
          font-weight: 600;
        }

        .cascade-card:nth-child(2) { /* My Role */
          bottom: 50px;
          left: 300px;
          z-index: 5;
          animation-delay: 1.2s;
        }

        .cascade-card:nth-child(3) { /* Understanding Our */
          bottom: 100px;
          left: 400px;
          z-index: 4;
          animation-delay: 1.4s;
        }

        .cascade-card:nth-child(4) { /* Design Process */
          bottom: 150px;
          left: 500px;
          z-index: 3;
          animation-delay: 1.6s;
        }

        .cascade-card:nth-child(5) { /* Final Design Solution */
          bottom: 200px;
          left: 600px;
          z-index: 2;
          animation-delay: 1.8s;
        }

        .cascade-card:nth-child(6) { /* What Did I Learn */
          bottom:250px;
          left: 700px;
          z-index: 1;
          animation-delay: 2s;
        }

        /* Content Sections - SIMPLIFIED HEADERS */
        .content-sections {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .content-section {
          margin-bottom: 2rem;
          padding: 1rem 0;
        }

        .section-header {
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          line-height: 1.2;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .section-content {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Extra rules for PDF-style formatting */
        .section-content p {
          margin-bottom: 1rem;
        }
        .section-content ul,
        .section-content ol {
          margin: 1rem 0 1rem 2rem;
          padding-left: 1rem;
        }
        .section-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .section-content em {
          display: block;
          margin: 1.5rem 0;
          color: #888;
          font-style: italic;
          text-align: center;
        }
        
        /* Direct image styling for build process images */
        .section-content img {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* Video styling */
        .section-content video {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        /* Hover animation for images */
        .section-content img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Hover animation for videos */
        .section-content video:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Scroll animation classes */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Image captions */
        .image-caption {
          text-align: center;
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0.5rem auto 2rem auto;
          max-width: 80%;
        }
        
        .section-content h4, .section-content h5, .section-content h6 {
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        
        /* Main section headings (01, 02, 03) */
        .section-content h4 {
          font-size: 1.3rem;
          margin-left: 0;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        /* Sub-section headings (01.1, 01.2, 02.1, etc.) */
        .section-content h5 {
          font-size: 1.1rem;
          margin-left: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 1.2rem;
          margin-bottom: 0.7rem;
        }
        
        /* Sub-sub-section headings (02.4.1, etc.) */
        .section-content h6 {
          font-size: 1rem;
          margin-left: 3rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Content indentation following sub-headings */
        .section-content h5 + p,
        .section-content h5 + ul,
        .section-content h5 + ol {
          margin-left: 1.5rem;
        }

        .section-content h6 + p,
        .section-content h6 + ul,
        .section-content h6 + ol {
          margin-left: 3rem;
        }

        /* Navigation Buttons */
        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 4rem 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .nav-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Roboto', sans-serif;
          min-width: 180px;
          justify-content: center;
        }

        .nav-button.primary {
          background: var(--rose-pompadour);
          color: white;
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.3);
        }

        .nav-button.primary:hover {
          background: var(--deep-rose);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.4);
        }

        .nav-button.secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          border: 2px solid var(--rose-pompadour);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .nav-button.secondary:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.3);
        }

        @media (max-width: 768px) {
          .nav-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem 1rem;
          }
        }

        /* Responsive Design */
        @media (max-width: 1600px) {
          .cascade-container {
            width: 1350px;
            height: 550px;
            margin: 0 auto;
          }
        }

        @media (max-width: 1400px) {
          .cascade-container {
            width: 1300px;
            height: 500px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 320px;
            height: 260px;
          }

          /* Adjust positioning for smaller container */
          .cascade-card:nth-child(1) { left: 80px; bottom: 40px; }
          .cascade-card:nth-child(2) { left: 180px; bottom: 80px; }
          .cascade-card:nth-child(3) { left: 280px; bottom: 120px; }
          .cascade-card:nth-child(4) { left: 380px; bottom: 160px; }
          .cascade-card:nth-child(5) { left: 480px; bottom: 200px; }
          .cascade-card:nth-child(6) { left: 580px; bottom: 240px; }
        }

        @media (max-width: 1200px) {
          .cascade-container {
            width: 1000px;
            height: 400px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 250px;
            height: 200px;
          }

          /* Tighter positioning */
          .cascade-card:nth-child(1) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(2) { left: 140px; bottom: 60px; }
          .cascade-card:nth-child(3) { left: 220px; bottom: 90px; }
          .cascade-card:nth-child(4) { left: 300px; bottom: 120px; }
          .cascade-card:nth-child(5) { left: 380px; bottom: 150px; }
          .cascade-card:nth-child(6) { left: 460px; bottom: 180px; }
        }

        @media (max-width: 768px) {
          .cascade-container {
            width: 90%;
            height: auto;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 1rem;
          }

          .cascade-card {
            position: static !important;
            width: 100%;
            height: auto;
            min-height: 120px;
            padding: 1rem;
            margin: 0;
            transform: none !important;
          }

          .cascade-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          /* Reset all positioning for mobile stack layout */
          .cascade-card:nth-child(1),
          .cascade-card:nth-child(2),
          .cascade-card:nth-child(3),
          .cascade-card:nth-child(4),
          .cascade-card:nth-child(5),
          .cascade-card:nth-child(6) { 
            left: auto !important;
            bottom: auto !important;
            right: auto !important;
            top: auto !important;
          }

          }

          .project-metadata {
            flex-direction: row;
            gap: 2rem;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .cascade-card {
            min-height: 100px;
            padding: 0.8rem;
          }

          .cascade-card h3 {
            font-size: 0.75rem;
          }

          .project-metadata {
            gap: 1.5rem;
          }

          .metadata-label {
            font-size: 0.8rem;
          }

          .metadata-value {
            font-size: 0.9rem;
          }
        }          .mockup-image {
            max-width: 90%;
            max-height: 350px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .content-container {
            padding: 0 1rem;
          }

          .cascade-container {
            width: 95%;
            height: 250px;
            max-width: 400px;
          }

          .cascade-card {
            width: 140px;
            height: 110px;
            padding-top: 5px; /* Further reduced for smallest screens */
          }

          .cascade-card h3 {
            font-size: 0.75rem;
          }

          /* Very tight mobile positioning */
          .cascade-card:nth-child(1) { left: 30px; bottom: 15px; }
          .cascade-card:nth-child(2) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(3) { left: 90px; bottom: 45px; }
          .cascade-card:nth-child(4) { left: 120px; bottom: 60px; }
          .cascade-card:nth-child(5) { left: 150px; bottom: 75px; }
          .cascade-card:nth-child(6) { left: 180px; bottom: 90px; }

          .section-title {
            font-size: 1.3rem;
          }

          .metadata-value {
            font-size: 1.1rem;
          }
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 650px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-message {
          margin-bottom: 2rem;
        }

        .footer-message h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          padding: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-links a:hover {
          transform: translateY(-2px) scale(1.1);
        }

        .footer-icon {
          width: 28px;
          height: 28px;
          fill: white;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-links a:hover .footer-icon {
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
          font-weight: 400;
        }
        `}),n.jsx(ea,{}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:up,alt:"iName Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer + Developer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Ariel, Chaowei, and Qiqiu"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Hf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>r(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>r(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Hf.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/#work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:m,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2026"})]})})]})}const x2="/assets/features-bUjuRKn3.png",b2="/assets/comicStrip-BmdIqTwL.png",y2="/assets/keytakeaways-B24h4SkF.png",Yf=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:"Picture this: it’s Sunday afternoon, you’re at the grocery store, and you’re staring at two brands of pasta. One claims to be organic, the other is cheaper, but you have no idea which is actually environmentally friendly. You care about sustainability, but with confusing labels, it’s hard to know what the “right” choice really is."}),n.jsxs("p",{children:["That exact frustration is what inspired us to create ",n.jsx("strong",{children:"EcoCart"}),"."]}),n.jsx("p",{children:"Our goal? To make sustainable grocery shopping less complicated and more rewarding by giving people real-time insights, clear alternatives, and even incentives for choosing eco-friendly options."})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"I worked as part of a cross-disciplinary team of designers and researchers."}),n.jsxs("ul",{children:[n.jsx("li",{children:"As a researcher, I conducted interviews, field studies, and affinity mapping. Evaluated by running usability tests and analyzing key takeaways."}),n.jsx("li",{children:"As a designer, I created wireframes, prototypes, and tested flows."})]})]})},{id:3,title:"Our Users",content:n.jsxs("div",{children:[n.jsx("p",{children:"We began by exploring two groups:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Individuals whose choices are primarily shaped by cost and availability."}),n.jsx("li",{children:"Sustainability shoppers who have the means to shop responsibly but lack clarity and guidance."})]}),n.jsx("p",{children:"Through interviews with students, professors, and grocery staff, we realized a hard truth: food-insecure communities can’t realistically prioritize sustainability when survival is at stake."}),n.jsx("p",{children:"Instead, EcoCart would be more impactful if designed for users who already want to shop sustainably but feel confused or unsupported by existing tools."})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("h4",{children:"01 Research & Definition"}),n.jsx("p",{children:"We started with field studies, interviews, and secondary research into food sustainability."}),n.jsx("p",{children:"“Shoppers wanted sustainability simplified into a single score rather than fragmented eco-labels.”"}),n.jsx("p",{children:"An affinity map helped us synthesize competing priorities: affordability vs. eco-consciousness. From this, we refined our problem statement:"}),n.jsx("p",{children:n.jsx("em",{children:n.jsx("strong",{children:"“People who are unaware of food sustainability but want to make better choices need a clear, intuitive way to understand the impact of their shopping habits.”"})})}),n.jsx("h4",{children:"02 Early Design Goals"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Clear Sustainability Insight: provide transparency and actionable data."}),n.jsx("li",{children:"Secure Scanning: ensure trust in how scanning works."}),n.jsx("li",{children:"Seamless Integration: fit into both in-store and at-home shopping habits."})]}),n.jsx("h4",{children:"03 Prototyping"}),n.jsx("p",{children:"We developed low- and mid-fidelity prototypes to test interactions, focusing on tasks like scanning, comparing alternatives, and managing wishlists. Wireframes mapped flows such as real-time in-store use and remote browsing from home."}),n.jsx("h4",{children:"04 Evaluations"}),n.jsx("p",{children:"To test usability and intuitiveness, we ran structured walkthroughs where users performed five key tasks:"}),n.jsxs("ol",{children:[n.jsx("li",{children:"Selecting Products In-Store: Participants had to add items to a cart quickly and clearly."}),n.jsx("li",{children:"Real-time Scanning & Alternatives: They had to scan a product and review suggested sustainable swaps."}),n.jsx("li",{children:"Evaluating Sustainability Metrics: They compared alternatives based on environmental scores."}),n.jsx("li",{children:"Adding Products to Wishlist: Simply save items for later shopping."}),n.jsx("li",{children:"Exploring Search-from-Home: Had to transition smoothly from store use to remote browsing EcoCart."})]}),n.jsx("h4",{children:"05 Key Takeaways"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Users felt that the app currently lacks incentives to encourage them to pick out the more sustainable alternatives."}),n.jsx("li",{children:"Users wanted an intuitive way to interact with products, such as tapping the product container to receive confirmation for adding alternatives."}),n.jsx("li",{children:"Users struggled to navigate back to the home screen from the profile section, leading to frustration, indicating the need for a ‘home’ button on each page."}),n.jsx("li",{children:"Users found it difficult to locate specific saved items in a long list, with no clear filtering or organization options."})]}),n.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:n.jsx("img",{src:y2,alt:"Key takeaways",style:{maxWidth:"85%",height:"auto",borderRadius:"8px"}})})]})},{id:5,title:"Final Solution",content:n.jsxs("div",{children:[n.jsx("p",{children:"After iterating over all the evaluations, our final product had 4 key features:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Scan products, instantly see eco-metrics, and explore sustainable alternatives."}),n.jsx("li",{children:"Plan shopping remotely, save items, and check store availability."}),n.jsx("li",{children:"Incentivize eco-friendly purchases with points that translate into savings."}),n.jsx("li",{children:"Support local small-scale businesses alongside sustainability goals."})]}),n.jsx("div",{style:{textAlign:"center",margin:"1rem 0"},children:n.jsx("img",{src:x2,alt:"EcoCart features",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})}),n.jsx("h5",{children:"Why would people use EcoCart?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"It turns confusing sustainability choices into clear comparisons."}),n.jsx("li",{children:"It makes eco-friendly habits practical by blending seamlessly into shopping."}),n.jsx("li",{children:"It rewards users for doing good, proving that climate action can also feel like a personal win."})]}),n.jsx("p",{children:"“Imagine scanning your usual pasta and instantly seeing: this swap saves 2kg of CO₂. You add it to your cart, earn reward points, and leave the store not just with dinner, but while creating impact.”"}),n.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:n.jsx("img",{src:b2,alt:"EcoCart comic strip",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsx("ul",{children:n.jsx("li",{children:"Behavior change requires reinforcement: people need prompts, reminders, and rewards, not just information."})})})}];function v2(){const r=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},m=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(h=>{h.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(h=>c.observe(h)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
          --yellow-bg: #F4E84C;
          --case-study-bg: #b3b7ee;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        /* Animated Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: floatBackground 25s ease-in-out infinite;
        }

        @keyframes floatBackground {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) rotate(1deg) scale(1.02);
          }
          66% { 
            transform: translateY(-30px) rotate(-1deg) scale(0.98);
          }
        }

        .content-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInHeader 1s ease-out 0.2s forwards;
        }

        @keyframes slideInHeader {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .custom-logo {
          height: 3.5rem;
          width: auto;
          object-fit: contain;
          display: inline-block;
          transition: transform 0.3s ease, filter 0.3s ease;
          vertical-align: middle;
        }

        .custom-logo:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px rgba(226, 115, 150, 0.4));
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-links a:hover {
          transform: scale(1.05);
          color: var(--rose-pompadour);
        }

        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: var(--rose-pompadour);
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-links a:hover:after {
          width: 100%;
        }

        /* Main Layout */
        .case-study-layout {
          padding: 4rem 0;
        }

        /* Mockup Section - No Container */
        .mockup-section {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.4s forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mockup-image {
          width: auto;
          max-width: 1000px; /* increased from 800px */
          height: auto;
          max-height: 700px; /* increased from 500px */
          object-fit: contain;
          object-position: center;
          transition: all 0.4s ease;
        }

        .mockup-image:hover {
          transform: scale(1.02);
        }

        /* Project Metadata */
        .project-metadata {
          display: flex;
          justify-content: center;
          gap: 6rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.6s forwards;
        }

        .metadata-item {
          text-align: center;
        }

        .metadata-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Fjalla One', sans-serif;
        }

        .metadata-value {
          font-size: 1.3rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Cascading Cards Section - HORIZONTAL STACKING */
        .cascade-section {
          display: flex;
          justify-content: center;
          margin-bottom: 8rem;
          margin-top: 4rem; /* Add space above to push cards down */
          opacity: 0;
          animation: slideInUp 1s ease-out 0.8s forwards;
          width: 100%;
          overflow-x: auto; /* Allow horizontal scroll if needed */
          padding: 0 20px; /* Add padding to prevent edge cutoff */
        }

        .cascade-container {
          position: relative;
          width: 1400px; /* Further increased to ensure no cutoff */
          height: 600px; /* Increased height for taller cards */
          margin: 0 auto; /* Center the container */
        }

        /* Section cards - stacked horizontally to the right - BEHIND yellow card */
        .cascade-card {
          position: absolute;
          width: 380px; /* Updated to requested size */
          height: 320px; /* Updated to requested size */
          background: #b3dee2;;
          backdrop-filter: blur(25px);
          border-radius: 12px;
          border: 3px solid #2d2d2d;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: flex-start; /* Align text to top */
          justify-content: center;
          padding-top: 10px; /* Reduced from 25px to move text closer to top */
          opacity: 0;
          animation: cascadeIn 0.6s ease-out forwards;
        }



        .cascade-card h3 {
          font-size: 1.3rem; /* Increased for better consistency */
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          line-height: 1.3;
          margin: 0;
          padding: 0 15px; /* Add some horizontal padding */
        }

        /* ADD THE MISSING ANIMATION */
        @keyframes cascadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .case-study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          z-index: 11; /* Even higher on hover */
        }

        /* Horizontal stacking - adjusted for larger card sizes */
        .cascade-card:nth-child(1) { /* Overview */
          bottom: 0px; /* Adjusted for taller cards */
          left: 200px; /* More spacing for wider cards */
          z-index: 6;
          animation-delay: 1s;
        }

        .cascade-card:nth-child(1) h3 { /* Ensure first card font size is consistent */
          font-size: 1.3rem;
          font-weight: 600;
        }

        .cascade-card:nth-child(2) { /* My Role */
          bottom: 50px;
          left: 300px;
          z-index: 5;
          animation-delay: 1.2s;
        }

        .cascade-card:nth-child(3) { /* Understanding Our */
          bottom: 100px;
          left: 400px;
          z-index: 4;
          animation-delay: 1.4s;
        }

        .cascade-card:nth-child(4) { /* Design Process */
          bottom: 150px;
          left: 500px;
          z-index: 3;
          animation-delay: 1.6s;
        }

        .cascade-card:nth-child(5) { /* Final Design Solution */
          bottom: 200px;
          left: 600px;
          z-index: 2;
          animation-delay: 1.8s;
        }

        .cascade-card:nth-child(6) { /* What Did I Learn */
          bottom:250px;
          left: 700px;
          z-index: 1;
          animation-delay: 2s;
        }

        /* Content Sections - SIMPLIFIED HEADERS */
        .content-sections {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .content-section {
          margin-bottom: 2rem;
          padding: 1rem 0;
        }

        .section-header {
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          line-height: 1.2;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .section-content {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Extra rules for PDF-style formatting */
        .section-content p {
          margin-bottom: 1rem;
        }
        .section-content ul,
        .section-content ol {
          margin: 1rem 0 1rem 2rem;
          padding-left: 1rem;
        }
        .section-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .section-content em {
          display: block;
          margin: 1.5rem 0;
          color: #888;
          font-style: italic;
          text-align: center;
        }
        
        /* Direct image styling for build process images */
        .section-content img {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* Video styling */
        .section-content video {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        /* Hover animation for images */
        .section-content img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Hover animation for videos */
        .section-content video:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Scroll animation classes */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Image captions */
        .image-caption {
          text-align: center;
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0.5rem auto 2rem auto;
          max-width: 80%;
        }
        
        .section-content h4, .section-content h5, .section-content h6 {
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        
        /* Main section headings (01, 02, 03) */
        .section-content h4 {
          font-size: 1.3rem;
          margin-left: 0;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        /* Sub-section headings (01.1, 01.2, 02.1, etc.) */
        .section-content h5 {
          font-size: 1.1rem;
          margin-left: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 1.2rem;
          margin-bottom: 0.7rem;
        }
        
        /* Sub-sub-section headings (02.4.1, etc.) */
        .section-content h6 {
          font-size: 1rem;
          margin-left: 3rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Content indentation following sub-headings */
        .section-content h5 + p,
        .section-content h5 + ul,
        .section-content h5 + ol {
          margin-left: 1.5rem;
        }

        .section-content h6 + p,
        .section-content h6 + ul,
        .section-content h6 + ol {
          margin-left: 3rem;
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 650px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-message {
          margin-bottom: 2rem;
        }

        .footer-message h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          padding: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-links a:hover {
          transform: translateY(-2px) scale(1.1);
        }

        .footer-icon {
          width: 28px;
          height: 28px;
          fill: white;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-links a:hover .footer-icon {
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
          font-weight: 400;
        }

        /* Navigation Buttons */
        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 4rem 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .nav-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Roboto', sans-serif;
          min-width: 180px;
          justify-content: center;
        }

        .nav-button.primary {
          background: var(--rose-pompadour);
          color: white;
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.3);
        }

        .nav-button.primary:hover {
          background: var(--deep-rose);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.4);
        }

        .nav-button.secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          border: 2px solid var(--rose-pompadour);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .nav-button.secondary:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.3);
        }

        @media (max-width: 768px) {
          .nav-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem 1rem;
          }
        }

        /* Responsive Design */
        @media (max-width: 1600px) {
          .cascade-container {
            width: 1350px;
            height: 550px;
            margin: 0 auto;
          }
        }

        @media (max-width: 1400px) {
          .cascade-container {
            width: 1300px;
            height: 500px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 320px;
            height: 260px;
          }

          /* Adjust positioning for smaller container */
          .cascade-card:nth-child(1) { left: 80px; bottom: 40px; }
          .cascade-card:nth-child(2) { left: 180px; bottom: 80px; }
          .cascade-card:nth-child(3) { left: 280px; bottom: 120px; }
          .cascade-card:nth-child(4) { left: 380px; bottom: 160px; }
          .cascade-card:nth-child(5) { left: 480px; bottom: 200px; }
          .cascade-card:nth-child(6) { left: 580px; bottom: 240px; }
        }

        @media (max-width: 1200px) {
          .cascade-container {
            width: 1000px;
            height: 400px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 250px;
            height: 200px;
          }

          /* Tighter positioning */
          .cascade-card:nth-child(1) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(2) { left: 140px; bottom: 60px; }
          .cascade-card:nth-child(3) { left: 220px; bottom: 90px; }
          .cascade-card:nth-child(4) { left: 300px; bottom: 120px; }
          .cascade-card:nth-child(5) { left: 380px; bottom: 150px; }
          .cascade-card:nth-child(6) { left: 460px; bottom: 180px; }
        }

        @media (max-width: 768px) {
          .cascade-container {
            width: 90%;
            height: auto;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 1rem;
          }

          .cascade-card {
            position: static !important;
            width: 100%;
            height: auto;
            min-height: 120px;
            padding: 1rem;
            margin: 0;
            transform: none !important;
          }

          .cascade-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          /* Reset all positioning for mobile stack layout */
          .cascade-card:nth-child(1),
          .cascade-card:nth-child(2),
          .cascade-card:nth-child(3),
          .cascade-card:nth-child(4),
          .cascade-card:nth-child(5),
          .cascade-card:nth-child(6) { 
            left: auto !important;
            bottom: auto !important;
            right: auto !important;
            top: auto !important;
          }

          }

          .project-metadata {
            flex-direction: row;
            gap: 2rem;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .cascade-card {
            min-height: 100px;
            padding: 0.8rem;
          }

          .cascade-card h3 {
            font-size: 1rem;
          }

          .project-metadata {
            gap: 1.5rem;
          }

          .metadata-label {
            font-size: 0.8rem;
          }

          .metadata-value {
            font-size: 0.9rem;
          }
        }          .mockup-image {
            max-width: 90%;
            max-height: 350px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .content-container {
            padding: 0 1rem;
          }

          .cascade-container {
            width: 95%;
            height: 250px;
            max-width: 400px;
          }

          .cascade-card {
            width: 140px;
            height: 110px;
            padding-top: 5px; /* Further reduced for smallest screens */
          }

          .cascade-card h3 {
            font-size: 0.75rem;
          }

          /* Very tight mobile positioning */
          .cascade-card:nth-child(1) { left: 30px; bottom: 15px; }
          .cascade-card:nth-child(2) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(3) { left: 90px; bottom: 45px; }
          .cascade-card:nth-child(4) { left: 120px; bottom: 60px; }
          .cascade-card:nth-child(5) { left: 150px; bottom: 75px; }
          .cascade-card:nth-child(6) { left: 180px; bottom: 90px; }

          .section-title {
            font-size: 1.3rem;
          }

          .metadata-value {
            font-size: 1.1rem;
          }
        }
        `}),n.jsx(ea,{}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:mp,alt:"EcoCart Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika, Ashley, and Bakhtawar"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Yf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>r(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>r(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Yf.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/#work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:m,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2026"})]})})]})}const w2="/assets/finalProduct1-CB1LE1Sm.png",j2="/assets/finalProduct2-CNhrKZ4S.png",Gf=[{id:1,title:"Overview",content:n.jsx("div",{children:n.jsx("p",{children:"Between 2012 and 2022, the Connecticut Department of Public Health collected annual school-level vaccination and exemption data. The challenge? Making sense of more than 500 rows of data covering different vaccines, grades, and school types, and finding a way to turn it into actionable insights for educators, policymakers, and health officials."})})},{id:2,title:"My Role",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"As an analyst cleaned and restructured messy, incomplete records, explored relationships between exemptions, enrollment size, school type, and grade level."}),n.jsx("li",{children:"As a developer built an interactive Shiny web application to bring the data to life."}),n.jsx("li",{children:"Translated raw numbers into trends that could be understood outside of a technical context."})]})})},{id:3,title:"Coding It Up",content:n.jsxs("div",{children:[n.jsx("p",{children:"This wasn’t just “load a dataset and plot a chart.” The coding process involved several critical steps:"}),n.jsx("h4",{children:"01 Data Cleaning"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We handled missing values by replacing NA with 0 where appropriate."}),n.jsx("li",{children:"Renamed columns for readability."}),n.jsx("li",{children:"Converted grade levels into factors for easier grouping and analysis."}),n.jsx("li",{children:"Removed redundant percentage columns to avoid duplication."})]}),n.jsx("h4",{children:"02 Exploratory Data Analysis (EDA)"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We compared vaccination rates between public and private schools."}),n.jsx("li",{children:"Looked at grade-level patterns, e.g., compliance differences in kindergarten vs. middle school."}),n.jsx("li",{children:"Studied trends over time, checking whether exemption rates were increasing."})]})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("p",{children:"After evaluating the options, we selected the main visualizations to include in our product. We decided that a Shiny application would be the best way to showcase the data, allowing users to apply filters to control the dataset and explore various visualizations."}),n.jsx("p",{children:"We aimed to ensure that policymakers could easily view and interpret the results to make informed decisions regarding vaccinations for school children. We developed a responsive Shiny application to achieve our product goals, putting significant effort into designing an interface that is user-friendly, even for non-tech-savvy individuals."}),n.jsx("p",{children:"We used a gradient scale of orange for our color palettes to evoke a sense of warmth and energy. Additionally, we utilized Midjourney to generate a descriptive image for the sidebar. This image aims to clearly illustrate our intention of drawing attention to the children’s immunization guidelines."}),n.jsx("h4",{children:"01 Building in Shiny"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We added filters for school year, grade, vaccine type, and school type."}),n.jsx("li",{children:"Used ggplot2 for clean, interpretable visualizations."}),n.jsx("li",{children:"Structured the app so users could quickly switch between vaccination coverage, exemptions, and compliance metrics."})]})]})},{id:5,title:"Final Product",content:n.jsxs("div",{children:[n.jsx("p",{children:"The end result a interactive Shiny application that allows users to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Filter vaccination data by school type, grade, vaccine, and time period."}),n.jsx("li",{children:"Visualize exemption rates alongside enrollment counts."}),n.jsx("li",{children:"Track compliance trends over the 10-year period."})]}),n.jsxs("div",{className:"final-images",children:[n.jsx("img",{src:w2,alt:"Final product 1",className:"final-image"}),n.jsx("img",{src:j2,alt:"Final product 2",className:"final-image"})]})]})},{id:6,title:"What Did I Learn?",content:n.jsxs("div",{children:[n.jsxs("ul",{children:[n.jsx("li",{children:"A static report would have buried these insights, but an interactive app made them accessible."}),n.jsx("li",{children:"I learned how to clean messy datasets in R turning raw, inconsistent records into usable structures."}),n.jsx("li",{children:"I got comfortable with data visualization in ggplot2, learning how small tweaks in aesthetics can make a chart either confusing or crystal clear."}),n.jsx("li",{children:"I learnt the power of Shiny apps, and how interactivity transforms static numbers into tools people can actually use."})]}),n.jsxs("p",{children:["✅ Acknowledgments",n.jsx("br",{}),"Thanks to the Connecticut Department of Public Health for the dataset, the R/Shiny community for tools and documentation."]})]})}];function A2(){const r=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},m=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(h=>{h.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(h=>c.observe(h)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
          --yellow-bg: #F4E84C;
          --case-study-bg: #b3b7ee;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        /* Animated Background */
        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: floatBackground 25s ease-in-out infinite;
        }

        @keyframes floatBackground {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) rotate(1deg) scale(1.02);
          }
          66% { 
            transform: translateY(-30px) rotate(-1deg) scale(0.98);
          }
        }

        .content-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInHeader 1s ease-out 0.2s forwards;
        }

        @keyframes slideInHeader {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .custom-logo {
          height: 3.5rem;
          width: auto;
          object-fit: contain;
          display: inline-block;
          transition: transform 0.3s ease, filter 0.3s ease;
          vertical-align: middle;
        }

        .custom-logo:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 6px rgba(226, 115, 150, 0.4));
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-links a:hover {
          transform: scale(1.05);
          color: var(--rose-pompadour);
        }

        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: var(--rose-pompadour);
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-links a:hover:after {
          width: 100%;
        }

        /* Main Layout */
        .case-study-layout {
          padding: 4rem 0;
        }

        /* Mockup Section - No Container */
        .mockup-section {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.4s forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mockup-image {
          width: auto;
          max-width: 800px;
          height: auto;
          max-height: 500px;
          object-fit: contain;
          object-position: center;
          transition: all 0.4s ease;
        }

        .mockup-image:hover {
          transform: scale(1.02);
        }

        /* Final product images */
        .final-images {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: center;
          margin-top: 1.25rem;
        }

        .final-image {
          width: 85%;
          max-width: 1000px;
          height: auto;
          border-radius: 8px;
          border: 2px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
        }

        /* Project Metadata */
        .project-metadata {
          display: flex;
          justify-content: center;
          gap: 6rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: slideInUp 1s ease-out 0.6s forwards;
        }

        .metadata-item {
          text-align: center;
        }

        .metadata-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Fjalla One', sans-serif;
        }

        .metadata-value {
          font-size: 1.3rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Cascading Cards Section - HORIZONTAL STACKING */
        .cascade-section {
          display: flex;
          justify-content: center;
          margin-bottom: 8rem;
          margin-top: 4rem; /* Add space above to push cards down */
          opacity: 0;
          animation: slideInUp 1s ease-out 0.8s forwards;
          width: 100%;
          overflow-x: auto; /* Allow horizontal scroll if needed */
          padding: 0 20px; /* Add padding to prevent edge cutoff */
        }

        .cascade-container {
          position: relative;
          width: 1400px; /* Further increased to ensure no cutoff */
          height: 600px; /* Increased height for taller cards */
          margin: 0 auto; /* Center the container */
        }

        /* Section cards - stacked horizontally to the right - BEHIND yellow card */
        .cascade-card {
          position: absolute;
          width: 380px; /* Updated to requested size */
          height: 320px; /* Updated to requested size */
          background: #b3dee2;;
          backdrop-filter: blur(25px);
          border-radius: 12px;
          border: 3px solid #2d2d2d;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: flex;
          align-items: flex-start; /* Align text to top */
          justify-content: center;
          padding-top: 10px; /* Reduced from 25px to move text closer to top */
          opacity: 0;
          animation: cascadeIn 0.6s ease-out forwards;
        }



        .cascade-card h3 {
          font-size: 1.3rem; /* Increased for better consistency */
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          line-height: 1.3;
          margin: 0;
          padding: 0 15px; /* Add some horizontal padding */
        }

        /* ADD THE MISSING ANIMATION */
        @keyframes cascadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .case-study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          z-index: 11; /* Even higher on hover */
        }

        /* Horizontal stacking - adjusted for larger card sizes */
        .cascade-card:nth-child(1) { /* Overview */
          bottom: 0px; /* Adjusted for taller cards */
          left: 200px; /* More spacing for wider cards */
          z-index: 6;
          animation-delay: 1s;
        }

        .cascade-card:nth-child(1) h3 { /* Ensure first card font size is consistent */
          font-size: 1.3rem;
          font-weight: 600;
        }

        .cascade-card:nth-child(2) { /* My Role */
          bottom: 50px;
          left: 300px;
          z-index: 5;
          animation-delay: 1.2s;
        }

        .cascade-card:nth-child(3) { /* Understanding Our */
          bottom: 100px;
          left: 400px;
          z-index: 4;
          animation-delay: 1.4s;
        }

        .cascade-card:nth-child(4) { /* Design Process */
          bottom: 150px;
          left: 500px;
          z-index: 3;
          animation-delay: 1.6s;
        }

        .cascade-card:nth-child(5) { /* Final Design Solution */
          bottom: 200px;
          left: 600px;
          z-index: 2;
          animation-delay: 1.8s;
        }

        .cascade-card:nth-child(6) { /* What Did I Learn */
          bottom:250px;
          left: 700px;
          z-index: 1;
          animation-delay: 2s;
        }

        /* Content Sections - SIMPLIFIED HEADERS */
        .content-sections {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .content-section {
          margin-bottom: 2rem;
          padding: 1rem 0;
        }

        .section-header {
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          line-height: 1.2;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .section-content {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* Extra rules for PDF-style formatting */
        .section-content p {
          margin-bottom: 1rem;
        }
        .section-content ul,
        .section-content ol {
          margin: 1rem 0 1rem 2rem;
          padding-left: 1rem;
        }
        .section-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .section-content em {
          display: block;
          margin: 1.5rem 0;
          color: #888;
          font-style: italic;
          text-align: center;
        }
        
        /* Direct image styling for build process images */
        .section-content img {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* Video styling */
        .section-content video {
          display: block;
          max-width: 90%;
          height: auto;
          margin: 2rem auto 0.5rem auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        /* Hover animation for images */
        .section-content img:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Hover animation for videos */
        .section-content video:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
        }

        /* Scroll animation classes */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Image captions */
        .image-caption {
          text-align: center;
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0.5rem auto 2rem auto;
          max-width: 80%;
        }
        
        .section-content h4, .section-content h5, .section-content h6 {
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        
        /* Main section headings (01, 02, 03) */
        .section-content h4 {
          font-size: 1.3rem;
          margin-left: 0;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        /* Sub-section headings (01.1, 01.2, 02.1, etc.) */
        .section-content h5 {
          font-size: 1.1rem;
          margin-left: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 1.2rem;
          margin-bottom: 0.7rem;
        }
        
        /* Sub-sub-section headings (02.4.1, etc.) */
        .section-content h6 {
          font-size: 1rem;
          margin-left: 3rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Content indentation following sub-headings */
        .section-content h5 + p,
        .section-content h5 + ul,
        .section-content h5 + ol {
          margin-left: 1.5rem;
        }

        .section-content h6 + p,
        .section-content h6 + ul,
        .section-content h6 + ol {
          margin-left: 3rem;
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
          margin-top: 4rem;
        }

        .footer-content {
          max-width: 650px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-message {
          margin-bottom: 2rem;
        }

        .footer-message h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          padding: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-links a:hover {
          transform: translateY(-2px) scale(1.1);
        }

        .footer-icon {
          width: 28px;
          height: 28px;
          fill: white;
          color: white;
          transition: all 0.3s ease;
        }

        .footer-links a:hover .footer-icon {
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
          font-weight: 400;
        }

        /* Navigation Buttons */
        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 4rem 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .nav-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Roboto', sans-serif;
          min-width: 180px;
          justify-content: center;
        }

        .nav-button.primary {
          background: var(--rose-pompadour);
          color: white;
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.3);
        }

        .nav-button.primary:hover {
          background: var(--deep-rose);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.4);
        }

        .nav-button.secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          border: 2px solid var(--rose-pompadour);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .nav-button.secondary:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.3);
        }

        @media (max-width: 768px) {
          .nav-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem 1rem;
          }
        }

        /* Responsive Design */
        @media (max-width: 1600px) {
          .cascade-container {
            width: 1350px;
            height: 550px;
            margin: 0 auto;
          }
        }

        @media (max-width: 1400px) {
          .cascade-container {
            width: 1300px;
            height: 500px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 320px;
            height: 260px;
          }

          /* Adjust positioning for smaller container */
          .cascade-card:nth-child(1) { left: 80px; bottom: 40px; }
          .cascade-card:nth-child(2) { left: 180px; bottom: 80px; }
          .cascade-card:nth-child(3) { left: 280px; bottom: 120px; }
          .cascade-card:nth-child(4) { left: 380px; bottom: 160px; }
          .cascade-card:nth-child(5) { left: 480px; bottom: 200px; }
          .cascade-card:nth-child(6) { left: 580px; bottom: 240px; }
        }

        @media (max-width: 1200px) {
          .cascade-container {
            width: 1000px;
            height: 400px;
            margin: 0 auto;
          }

          .cascade-card {
            width: 250px;
            height: 200px;
          }

          /* Tighter positioning */
          .cascade-card:nth-child(1) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(2) { left: 140px; bottom: 60px; }
          .cascade-card:nth-child(3) { left: 220px; bottom: 90px; }
          .cascade-card:nth-child(4) { left: 300px; bottom: 120px; }
          .cascade-card:nth-child(5) { left: 380px; bottom: 150px; }
          .cascade-card:nth-child(6) { left: 460px; bottom: 180px; }
        }

        @media (max-width: 768px) {
          .cascade-container {
            width: 90%;
            height: auto;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 1rem;
          }

          .cascade-card {
            position: static !important;
            width: 100%;
            height: auto;
            min-height: 120px;
            padding: 1rem;
            margin: 0;
            transform: none !important;
          }

          .cascade-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          /* Reset all positioning for mobile stack layout */
          .cascade-card:nth-child(1),
          .cascade-card:nth-child(2),
          .cascade-card:nth-child(3),
          .cascade-card:nth-child(4),
          .cascade-card:nth-child(5),
          .cascade-card:nth-child(6) { 
            left: auto !important;
            bottom: auto !important;
            right: auto !important;
            top: auto !important;
          }

          }

          .project-metadata {
            flex-direction: row;
            gap: 2rem;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .cascade-card {
            min-height: 100px;
            padding: 0.8rem;
          }

          .cascade-card h3 {
            font-size: 1rem;
          }

          .project-metadata {
            gap: 1.5rem;
          }

          .metadata-label {
            font-size: 0.8rem;
          }

          .metadata-value {
            font-size: 0.9rem;
          }
        }          .mockup-image {
            max-width: 90%;
            max-height: 350px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .content-container {
            padding: 0 1rem;
          }

          .cascade-container {
            width: 95%;
            height: 250px;
            max-width: 400px;
          }

          .cascade-card {
            width: 140px;
            height: 110px;
            padding-top: 5px; /* Further reduced for smallest screens */
          }

          .cascade-card h3 {
            font-size: 0.75rem;
          }

          /* Very tight mobile positioning */
          .cascade-card:nth-child(1) { left: 30px; bottom: 15px; }
          .cascade-card:nth-child(2) { left: 60px; bottom: 30px; }
          .cascade-card:nth-child(3) { left: 90px; bottom: 45px; }
          .cascade-card:nth-child(4) { left: 120px; bottom: 60px; }
          .cascade-card:nth-child(5) { left: 150px; bottom: 75px; }
          .cascade-card:nth-child(6) { left: 180px; bottom: 90px; }

          .section-title {
            font-size: 1.3rem;
          }

          .metadata-value {
            font-size: 1.1rem;
          }
        }
        `}),n.jsx(ea,{}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:fp,alt:"rShiny Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata",children:[n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"Data Scientist"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Xihan, and Yuzu"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Gf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>r(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>r(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Gf.map(d=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons",children:[n.jsxs("a",{href:"/#work",className:"nav-button primary",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:m,className:"nav-button secondary",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2026"})]})})]})}const qf=23060,Xo=12,Ep=[{id:"rose",name:"Rose",petal:"#e27396",center:"#a73e5a"},{id:"tulip",name:"Tulip",petal:"#ea9ab2",center:"#c55577",petals:5,rx:8,ry:15,cr:6},{id:"sunflower",name:"Sunflower",petal:"#f6c453",center:"#7a5230",petals:13,rx:5,ry:16,cr:11},{id:"daisy",name:"Daisy",petal:"#ffffff",center:"#f6c453",petals:11,rx:5,ry:13,cr:7},{id:"lavender",name:"Lavender",petal:"#b39ddb",center:"#7e57c2"},{id:"sapling",name:"Sapling",petal:"#7cb342",center:"#5d4037"}],cl=r=>Ep.find(m=>m.id===r);function N2({seed:r}){if(r.id==="sapling")return n.jsxs("g",{children:[n.jsx("circle",{cx:50,cy:40,r:17,fill:"#8bc34a"}),n.jsx("circle",{cx:36,cy:50,r:13,fill:"#689f38"}),n.jsx("circle",{cx:64,cy:50,r:13,fill:"#7cb342"}),n.jsx("circle",{cx:50,cy:54,r:15,fill:"#7cb342"}),n.jsx("circle",{cx:45,cy:44,r:9,fill:"#9ccc65"})]});if(r.id==="lavender")return n.jsxs("g",{children:[Array.from({length:7}).map((E,w)=>n.jsx("circle",{cx:50+(w%2?4:-4),cy:20+w*5,r:5,fill:r.petal},w)),n.jsx("circle",{cx:50,cy:18,r:4,fill:"#9575cd"})]});if(r.id==="rose")return n.jsxs("g",{children:[Array.from({length:6}).map((E,w)=>n.jsx("ellipse",{cx:50,cy:24,rx:7,ry:13,fill:r.petal,transform:`rotate(${360/6*w} 50 38)`},`o${w}`)),Array.from({length:5}).map((E,w)=>n.jsx("ellipse",{cx:50,cy:30,rx:5,ry:8,fill:"#d65f82",transform:`rotate(${360/5*w+36} 50 38)`},`i${w}`)),n.jsx("circle",{cx:50,cy:38,r:6,fill:r.center})]});const c=r.petals||8,f=r.rx||6,h=r.ry||13,x=r.cr||9;return n.jsxs("g",{children:[Array.from({length:c}).map((E,w)=>n.jsx("ellipse",{cx:50,cy:38-h+1,rx:f,ry:h,fill:r.petal,stroke:r.id==="daisy"?"#f0d7c0":"none",strokeWidth:r.id==="daisy"?.6:0,transform:`rotate(${360/c*w} 50 38)`},w)),n.jsx("circle",{cx:50,cy:38,r:x,fill:r.center})]})}function Qf({seedId:r,stage:m}){const d=cl(r);if(!d)return null;if(m===0)return n.jsxs("svg",{viewBox:"0 0 100 120",className:"plant-svg",children:[n.jsx("ellipse",{cx:50,cy:101,rx:10,ry:7,fill:"#6d4c2f"}),n.jsx("path",{d:"M50 96 q3 4 0 8",stroke:"#8a6440",strokeWidth:"1.5",fill:"none"})]});const c=m===2,f=c?42:82,h=c?74:88,x=c?12:8;return n.jsxs("svg",{viewBox:"0 0 100 120",className:"plant-svg",children:[n.jsx("path",{d:`M50 108 Q 47 ${(108+f)/2} 50 ${f}`,stroke:"#5a8f3c",strokeWidth:c?5:4,fill:"none",strokeLinecap:"round"}),n.jsx("ellipse",{cx:50-x,cy:h,rx:x,ry:x*.55,fill:"#6aa84f",transform:`rotate(-28 ${50-x} ${h})`}),n.jsx("ellipse",{cx:50+x,cy:h,rx:x,ry:x*.55,fill:"#7cb85f",transform:`rotate(28 ${50+x} ${h})`}),c&&n.jsx(N2,{seed:d})]})}const sl=(r,m)=>{try{const d=localStorage.getItem(r);return d===null?m:JSON.parse(d)}catch{return m}};function k2(){const[r,m]=A.useState(()=>sl("garden_step","seeds")),[d,c]=A.useState(()=>sl("garden_chosen",[])),[f,h]=A.useState(null),[x,E]=A.useState(()=>{const Q=sl("garden_plots",null);return Array.isArray(Q)&&Q.length===Xo?Q:Array(Xo).fill(null)}),[w,p]=A.useState(()=>sl("garden_planted",0)),[y,j]=A.useState(null),[M,L]=A.useState(null),[Y,G]=A.useState(null);A.useEffect(()=>{r==="garden"&&d.length&&!d.includes(f)&&h(d[0])},[r,d,f]),A.useEffect(()=>{localStorage.setItem("garden_step",JSON.stringify(r))},[r]),A.useEffect(()=>{localStorage.setItem("garden_chosen",JSON.stringify(d))},[d]),A.useEffect(()=>{localStorage.setItem("garden_plots",JSON.stringify(x))},[x]),A.useEffect(()=>{localStorage.setItem("garden_planted",JSON.stringify(w))},[w]);const H=Q=>{c(X=>X.includes(Q)?X.filter(ne=>ne!==Q):[...X,Q])},S=A.useCallback(Q=>{const X=x[Q];if(!X){if(!f)return;E(ne=>{const we=[...ne];return we[Q]={seedId:f,stage:0},we});return}if(X.stage<2){const ne=X.stage+1;E(we=>{const Me=[...we];return Me[Q]={...X,stage:ne},Me}),j(Q),setTimeout(()=>j(we=>we===Q?null:we),750),ne===2&&(p(we=>we+1),L(Q),setTimeout(()=>L(we=>we===Q?null:we),1300));return}G(Q),setTimeout(()=>G(ne=>ne===Q?null:ne),500)},[x,f]),U=()=>{window.confirm("Clear your garden? Your total planted count stays.")&&E(Array(Xo).fill(null))},q=()=>{d.length&&(h(d[0]),m("garden"))},ie=Math.min(100,w/qf*100),J=x.some(Q=>!Q),oe=x.some(Q=>Q&&Q.stage<2);let ue;return x.some(Boolean)?oe?ue="Click a seedling to water it 💧 — water it twice and it blooms.":J?ue="Keep sowing, or water any seedlings until they bloom.":ue="Your garden is in full bloom! 🌸 Reset it to plant more.":ue=f?`Click any plot to sow your ${cl(f).name.toLowerCase()}.`:"Pick a seed from your pouch below, then click a plot to sow it.",n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
          --soil: #7b5536;
          --soil-dark: #5e3f27;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          min-height: 100vh;
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        .app::before {
          content: '';
          position: fixed; inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%);
          pointer-events: none; z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
        }
        @keyframes waveFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(0.97); }
        }

        .content-container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

        /* Header (shared with the rest of the site) */
        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative; z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
        }
        .header-content { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; }
        .custom-logo { height: 3.5rem; width: auto; object-fit: contain; transition: transform .3s ease, filter .3s ease; }
        .custom-logo:hover { transform: scale(1.15); filter: drop-shadow(0 0 6px rgba(226,115,150,.4)); }
        .nav-links { display: flex; gap: 2.5rem; font-family: 'Fjalla One', sans-serif; align-items: center; }
        .nav-links a {
          text-decoration: none; color: var(--text-primary); font-weight: 400; font-size: 1rem;
          transition: all .3s ease; position: relative; padding: .5rem 0; display: flex; align-items: center; gap: .35rem;
        }
        .nav-links a:hover { transform: scale(1.05); color: var(--rose-pompadour); }
        .nav-links a.active-leaf { color: var(--deep-rose); }
        .nav-links a:after {
          content: ''; position: absolute; width: 0; height: 2px; bottom: -2px; left: 0;
          background: var(--rose-pompadour); transition: width .4s cubic-bezier(.175,.885,.32,1.275);
        }
        .nav-links a:hover:after { width: 100%; }

        /* Garden shell */
        .garden-wrap { padding: 3rem 0 4rem; min-height: calc(100vh - 100px); }
        .garden-head { text-align: center; margin-bottom: 2.5rem; }
        .garden-head h1 {
          font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 700; color: var(--text-primary);
          letter-spacing: -.02em; margin-bottom: .6rem;
        }
        .garden-head p { color: var(--text-secondary); font-family: 'DM Sans', sans-serif; font-size: 1.05rem; max-width: 620px; margin: 0 auto; }

        /* Progress toward the world record */
        .record-card {
          max-width: 640px; margin: 0 auto 2.5rem; background: rgba(255,255,255,.6);
          border: 1px solid rgba(226,115,150,.2); border-radius: 20px; padding: 1.4rem 1.8rem;
          box-shadow: 0 12px 30px rgba(226,115,150,.1); backdrop-filter: blur(10px);
        }
        .record-top { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: .8rem; flex-wrap: wrap; }
        .record-count { font-family: ui-serif, Georgia, serif; font-size: 1.9rem; font-weight: 700; color: var(--deep-rose); }
        .record-count small { font-size: 1rem; color: var(--text-secondary); font-weight: 400; }
        .record-label { font-family: 'DM Sans', sans-serif; font-size: .85rem; color: var(--text-secondary); }
        .record-bar { height: 12px; border-radius: 999px; background: rgba(226,115,150,.15); overflow: hidden; }
        .record-fill {
          height: 100%; border-radius: 999px;
          background: linear-gradient(90deg, #7cb342, var(--rose-pompadour));
          transition: width .6s cubic-bezier(.25,.46,.45,.94);
          min-width: 6px;
        }

        /* Seed selection */
        .seed-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1.4rem; max-width: 760px; margin: 0 auto 2.5rem;
        }
        .seed-packet {
          border: 2px dashed rgba(226,115,150,.4); border-radius: 18px; background: rgba(255,255,255,.55);
          padding: 1.1rem 1rem 1rem; cursor: pointer; text-align: center;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
          position: relative;
        }
        .seed-packet:hover { transform: translateY(-5px); box-shadow: 0 14px 28px rgba(226,115,150,.16); border-color: var(--rose-pompadour); }
        .seed-packet.selected {
          border-style: solid; border-color: var(--rose-pompadour); background: rgba(255,255,255,.85);
          box-shadow: 0 14px 30px rgba(226,115,150,.22);
        }
        .seed-packet .plant-svg { width: 84px; height: 100px; display: block; margin: 0 auto; }
        .seed-name { font-family: 'DM Sans', sans-serif; font-weight: 700; color: var(--text-primary); margin-top: .3rem; }
        .seed-check {
          position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%;
          background: var(--rose-pompadour); color: #fff; display: flex; align-items: center; justify-content: center;
          font-size: .9rem; box-shadow: 0 3px 8px rgba(226,115,150,.4);
        }

        .center-actions { text-align: center; }
        .btn {
          padding: .95rem 2.4rem; border: none; border-radius: 50px; font-weight: 600; font-size: 1rem;
          cursor: pointer; font-family: 'DM Sans', sans-serif; display: inline-flex; align-items: center; gap: .5rem;
          transition: all .35s cubic-bezier(.175,.885,.32,1.275);
        }
        .btn-primary { background: var(--rose-pompadour); color: #fff; box-shadow: 0 8px 22px rgba(226,115,150,.3); }
        .btn-primary:hover:not(:disabled) { transform: translateY(-3px) scale(1.02); background: var(--deep-rose); }
        .btn-primary:disabled { opacity: .45; cursor: not-allowed; }
        .btn-ghost {
          background: rgba(255,255,255,.7); color: var(--text-primary); border: 1px solid rgba(226,115,150,.3);
          padding: .6rem 1.2rem; font-size: .9rem;
        }
        .btn-ghost:hover { background: #fff; color: var(--deep-rose); }

        /* Garden toolbar + grid */
        .garden-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; max-width: 760px; margin: 0 auto 1rem; flex-wrap: wrap; }
        .seed-pouch { display: flex; gap: .6rem; flex-wrap: wrap; }
        .pouch-seed {
          display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .85rem .4rem .5rem;
          border-radius: 999px; border: 1px solid rgba(226,115,150,.3); background: rgba(255,255,255,.6);
          cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: .9rem; color: var(--text-secondary);
          transition: all .2s ease;
        }
        .pouch-seed:hover { transform: translateY(-2px); }
        .pouch-seed.active { background: var(--rose-pompadour); color: #fff; border-color: var(--rose-pompadour); box-shadow: 0 6px 16px rgba(226,115,150,.3); }
        .pouch-seed .swatch { width: 16px; height: 16px; border-radius: 50%; }

        .hint {
          text-align: center; font-family: 'DM Sans', sans-serif; color: var(--text-secondary);
          font-size: .98rem; margin: 0 auto 1.6rem; max-width: 620px; min-height: 1.4em;
        }

        .garden-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
          max-width: 760px; margin: 0 auto;
        }
        @media (max-width: 640px) { .garden-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 420px) { .garden-grid { grid-template-columns: repeat(2, 1fr); } }

        .plot {
          position: relative; aspect-ratio: 1 / 1; border-radius: 16px; cursor: pointer; overflow: hidden;
          background: linear-gradient(180deg, #936844 0%, var(--soil) 55%, var(--soil-dark) 100%);
          box-shadow: inset 0 -6px 12px rgba(0,0,0,.25), inset 0 4px 8px rgba(255,255,255,.12), 0 6px 16px rgba(94,63,39,.25);
          transition: transform .2s ease, box-shadow .2s ease;
          display: flex; align-items: flex-end; justify-content: center;
        }
        .plot.empty {
          background: rgba(123,85,54,.18);
          box-shadow: inset 0 0 0 2px rgba(123,85,54,.35);
          border: 2px dashed rgba(94,63,39,.35);
        }
        .plot.empty::after {
          content: '+'; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          font-size: 2rem; color: rgba(94,63,39,.4); font-weight: 300;
        }
        .plot.empty.sowable:hover { background: rgba(124,179,66,.25); border-color: var(--rose-pompadour); transform: translateY(-3px); }
        .plot.empty.sowable:hover::after { color: var(--deep-rose); }
        .plot.planted:hover { transform: translateY(-3px); box-shadow: inset 0 -6px 12px rgba(0,0,0,.25), 0 10px 22px rgba(94,63,39,.3); }

        .plant-svg { width: 78%; height: 92%; }
        .plot.sowing .plant-svg { animation: pop .4s cubic-bezier(.34,1.56,.64,1); }
        .plot.grown .plant-svg { animation: bloomPop .6s cubic-bezier(.34,1.56,.64,1); }
        .plot.wiggle .plant-svg { animation: sway .5s ease; transform-origin: bottom center; }
        @keyframes pop { from { transform: translateY(8px) scale(.4); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes bloomPop { 0% { transform: scale(.6); } 60% { transform: scale(1.12); } 100% { transform: scale(1); } }
        @keyframes sway { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-7deg); } 75% { transform: rotate(7deg); } }

        /* gentle idle sway for grown plants */
        .plot.bloomed .plant-svg { animation: idleSway 5s ease-in-out infinite; transform-origin: bottom center; }
        @keyframes idleSway { 0%,100% { transform: rotate(-1.5deg); } 50% { transform: rotate(1.5deg); } }

        /* watering droplets */
        .droplets { position: absolute; inset: 0; pointer-events: none; }
        .droplet {
          position: absolute; top: -12px; width: 6px; height: 10px; border-radius: 0 100% 100% 100%;
          background: var(--light-blue); transform: rotate(45deg); opacity: 0;
          animation: drop .75s ease-in forwards;
        }
        @keyframes drop {
          0% { top: -12px; opacity: 0; }
          20% { opacity: 1; }
          100% { top: 70%; opacity: 0; }
        }

        /* sparkle burst on bloom */
        .sparkles { position: absolute; inset: 0; pointer-events: none; }
        .sparkle { position: absolute; font-size: 1rem; opacity: 0; animation: spark 1.2s ease-out forwards; }
        @keyframes spark {
          0% { opacity: 0; transform: translateY(0) scale(.4); }
          25% { opacity: 1; transform: translateY(-14px) scale(1.1); }
          100% { opacity: 0; transform: translateY(-40px) scale(.6); }
        }

        .garden-footer-actions { text-align: center; margin-top: 2.2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

        /* Footer */
        .footer { text-align: center; padding: 3rem 0; background: #ea9ab2; position: relative; }
        .footer-content { max-width: 650px; margin: 0 auto; padding: 0 2rem; }
        .footer-copyright { color: rgba(255,255,255,.9); font-size: .9rem; }
        .footer h3 { font-size: 1.3rem; color: #fff; margin-bottom: 1rem; }
      `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:cp,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/",onClick:Q=>{Q.preventDefault(),sessionStorage.setItem("scrollTo","google-cloud"),window.location.href="/"},children:"WORK"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"/garden",className:"active-leaf",title:"The Garden",children:n.jsx(mf,{size:20})})]})]})})}),n.jsx("section",{className:"garden-wrap",children:n.jsxs("div",{className:"content-container",children:[n.jsxs("div",{className:"garden-head",children:[n.jsx("h1",{children:r==="seeds"?"Plant a little garden 🌱":"Your garden"}),n.jsx("p",{children:r==="seeds"?"Pick the seeds you’d like to grow. Every plant you raise here counts toward the world record.":"Sow your seeds, water them, and watch them bloom. Each bloom is one more toward the record."})]}),n.jsxs("div",{className:"record-card",children:[n.jsxs("div",{className:"record-top",children:[n.jsxs("span",{className:"record-count",children:[w.toLocaleString()," ",n.jsxs("small",{children:["/ ",qf.toLocaleString()]})]}),n.jsxs("span",{className:"record-label",children:[n.jsx("span",{role:"img","aria-label":"tree",style:{marginRight:".35em"},children:"🌳"}),"plants grown toward the 24-hour world record"]})]}),n.jsx("div",{className:"record-bar",children:n.jsx("div",{className:"record-fill",style:{width:`${ie}%`}})})]}),r==="seeds"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"seed-grid",children:Ep.map(Q=>{const X=d.includes(Q.id);return n.jsxs("div",{className:`seed-packet ${X?"selected":""}`,onClick:()=>H(Q.id),role:"button",tabIndex:0,onKeyDown:ne=>{(ne.key==="Enter"||ne.key===" ")&&(ne.preventDefault(),H(Q.id))},"aria-pressed":X,children:[X&&n.jsx("span",{className:"seed-check",children:"✓"}),n.jsx(Qf,{seedId:Q.id,stage:2}),n.jsx("div",{className:"seed-name",children:Q.name})]},Q.id)})}),n.jsx("div",{className:"center-actions",children:n.jsxs("button",{className:"btn btn-primary",onClick:q,disabled:!d.length,children:[n.jsx(mf,{size:20})," Go to my garden",d.length?` (${d.length})`:""]})})]}),r==="garden"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"garden-toolbar",children:[n.jsxs("button",{className:"btn btn-ghost",onClick:()=>m("seeds"),children:[n.jsx(V1,{size:16})," Choose seeds"]}),n.jsx("div",{className:"seed-pouch",children:d.map(Q=>{const X=cl(Q);return n.jsxs("button",{className:`pouch-seed ${f===Q?"active":""}`,onClick:()=>h(Q),children:[n.jsx("span",{className:"swatch",style:{background:X.petal}}),X.name]},Q)})})]}),n.jsx("p",{className:"hint",children:ue}),n.jsx("div",{className:"garden-grid",children:x.map((Q,X)=>{const ne=!Q,we=Q&&Q.stage===2,Me=["plot",ne?"empty":"planted",ne&&f?"sowable":"",we?"bloomed":"",y===X?"sowing":"",M===X?"grown":"",Y===X?"wiggle":""].filter(Boolean).join(" ");return n.jsxs("div",{className:Me,onClick:()=>S(X),role:"button",tabIndex:0,"aria-label":ne?"Empty plot":`${cl(Q.seedId).name}, ${["seed","sprout","bloom"][Q.stage]}`,onKeyDown:Fe=>{(Fe.key==="Enter"||Fe.key===" ")&&(Fe.preventDefault(),S(X))},children:[Q&&n.jsx(Qf,{seedId:Q.seedId,stage:Q.stage}),y===X&&n.jsx("div",{className:"droplets",children:[20,42,60,78].map((Fe,$e)=>n.jsx("span",{className:"droplet",style:{left:`${Fe}%`,animationDelay:`${$e*.08}s`}},$e))}),M===X&&n.jsx("div",{className:"sparkles",children:["✨","🌟","✨"].map((Fe,$e)=>n.jsx("span",{className:"sparkle",style:{left:`${25+$e*25}%`,top:"30%",animationDelay:`${$e*.12}s`},children:Fe},$e))})]},X)})}),n.jsx("div",{className:"garden-footer-actions",children:n.jsxs("button",{className:"btn btn-ghost",onClick:U,children:[n.jsx(W1,{size:16})," Clear garden"]})})]})]})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("h3",{children:"Grow something today 🌷"}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026"})]})})]})}const S2="M12 21 C12 21 3 14.5 3 8.5 C3 5.4 5.4 3 8.5 3 C10.3 3 11.6 4 12 4.8 C12.4 4 13.7 3 15.5 3 C18.6 3 21 5.4 21 8.5 C21 14.5 12 21 12 21 Z";function z2(){return n.jsxs("span",{className:"env__art","aria-hidden":"true",children:[n.jsxs("svg",{className:"env__base",viewBox:"0 0 240 168",preserveAspectRatio:"none",fill:"none",children:[n.jsx("rect",{x:"5",y:"5",width:"230",height:"158",rx:"14",fill:"rgba(255,255,255,0.5)",stroke:"var(--env-stroke)",strokeWidth:"3.5"}),n.jsx("path",{d:"M6 159 L120 102 L234 159",stroke:"var(--env-stroke)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),n.jsx("svg",{className:"env__flap",viewBox:"0 0 240 168",preserveAspectRatio:"none",fill:"none",children:n.jsx("path",{d:"M6 9 L120 102 L234 9 Z",fill:"rgba(255,255,255,0.72)",stroke:"var(--env-stroke)",strokeWidth:"3.5",strokeLinejoin:"round"})}),n.jsx("svg",{className:"env__heart",viewBox:"0 0 24 24",fill:"none",children:n.jsx("path",{d:S2,fill:"var(--env-heart)"})})]})}function E2({testimonial:r,onClose:m}){return n.jsxs("div",{className:"postcard",children:[n.jsx("button",{type:"button",className:"postcard__close",onClick:m,"aria-label":"Close letter",children:"×"}),n.jsxs("div",{className:"postcard__inner",children:[n.jsx("div",{className:"postcard__content",children:n.jsx("p",{className:"testimonial-quote",children:r.quote})}),n.jsx("div",{className:"postcard__divider"}),n.jsxs("div",{className:"postcard__side",children:[n.jsx("img",{src:r.photo,alt:r.name,className:"postcard__photo"}),n.jsx("span",{className:"postcard__name",children:r.name}),r.role&&n.jsx("span",{className:"postcard__role",children:r.role}),r.note&&n.jsx("span",{className:"postcard__note",children:r.note})]})]})]})}const ll=["Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing","AI Workflows","Claude Code","Github Copilot"];function C2(){const r=A.useRef(null),m=A.useRef(!1),d=A.useRef(0),c=A.useRef(0),f=A.useRef(0),h=(p=1200)=>{d.current=performance.now()+p};A.useEffect(()=>{const p=r.current;if(!p)return;const j=window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:.4,M=()=>{f.current=p.scrollWidth/3};M(),p.scrollLeft=f.current,document.fonts&&document.fonts.ready&&document.fonts.ready.then(M);const L=()=>{const X=f.current;X<=0||(p.scrollLeft>=X*2?p.scrollLeft-=X:p.scrollLeft<X&&(p.scrollLeft+=X))};let Y=0;const G=()=>{const X=m.current||performance.now()<d.current;let ne=c.current;X||(ne+=j),ne&&(p.scrollLeft+=ne),L(),c.current*=.9,Math.abs(c.current)<.04&&(c.current=0),Y=requestAnimationFrame(G)};Y=requestAnimationFrame(G);const H=X=>{h();const ne=Math.abs(X.deltaX)>=Math.abs(X.deltaY)?X.deltaX:X.deltaY;p.scrollLeft+=ne,L(),X.preventDefault()};let S=!1,U=0,q=0;const ie=X=>{if(X.pointerType!=="mouse"){h();return}S=!0,U=X.clientX,q=p.scrollLeft;try{p.setPointerCapture(X.pointerId)}catch{}p.classList.add("is-grabbing"),h(),X.preventDefault()},J=X=>{S&&(p.scrollLeft=q-(X.clientX-U),L(),h())},oe=X=>{if(S){S=!1;try{p.releasePointerCapture(X.pointerId)}catch{}p.classList.remove("is-grabbing")}h()},ue=()=>h();p.addEventListener("wheel",H,{passive:!1}),p.addEventListener("pointerdown",ie),p.addEventListener("pointermove",J),p.addEventListener("pointerup",oe),p.addEventListener("pointercancel",oe),p.addEventListener("touchstart",ue,{passive:!0}),p.addEventListener("touchmove",ue,{passive:!0});const Q=new ResizeObserver(M);return Q.observe(p),()=>{cancelAnimationFrame(Y),p.removeEventListener("wheel",H),p.removeEventListener("pointerdown",ie),p.removeEventListener("pointermove",J),p.removeEventListener("pointerup",oe),p.removeEventListener("pointercancel",oe),p.removeEventListener("touchstart",ue),p.removeEventListener("touchmove",ue),Q.disconnect()}},[]);const x=p=>{c.current+=p*22,h(1400)},E=p=>{p.key==="ArrowRight"?(x(1),p.preventDefault()):p.key==="ArrowLeft"&&(x(-1),p.preventDefault())},w=[...ll,...ll,...ll];return n.jsx("section",{className:"skills",children:n.jsxs("div",{className:"skills-carousel",onMouseEnter:()=>{m.current=!0},onMouseLeave:()=>{m.current=!1},children:[n.jsx("button",{type:"button",className:"skills-arrow skills-arrow--left",onClick:()=>x(-1),"aria-label":"Scroll skills left",children:"‹"}),n.jsx("div",{className:"skills-track",ref:r,tabIndex:0,role:"group","aria-label":"Skills — scroll, drag, or use the arrows",onKeyDown:E,children:w.map((p,y)=>n.jsx("span",{className:"skill-chip","aria-hidden":y>=ll.length?"true":void 0,children:p},y))}),n.jsx("button",{type:"button",className:"skills-arrow skills-arrow--right",onClick:()=>x(1),"aria-label":"Scroll skills right",children:"›"})]})})}const T2="Hi, this is Shreayaa!",M2="Welcome to my little corner of the internet 🩷",Ti=[...T2],Cp=[...M2],Xf=Ti.length+Cp.length;function D2(){const r=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[m,d]=A.useState(()=>{if(r)return!1;try{return!sessionStorage.getItem("introSeen")}catch{return!0}}),[c,f]=A.useState(0),[h,x]=A.useState(!1),E=A.useRef([]),w=A.useRef(!1),p=(H,S)=>{E.current.push(setTimeout(H,S))},y=()=>{E.current.forEach(clearTimeout),E.current=[]},j=()=>{w.current||(w.current=!0,y(),x(!0),p(()=>d(!1),900))};if(A.useEffect(()=>{if(!m)return;try{sessionStorage.setItem("introSeen","1")}catch{}document.body.style.overflow="hidden";let H=0;const S=()=>{H+=1,f(H),H<Xf?p(S,42):p(j,950)};return p(S,400),()=>{y(),document.body.style.overflow=""}},[m]),!m)return null;const M=()=>{f(Xf),j()},L=Ti.slice(0,Math.min(c,Ti.length)).join(""),Y=c>Ti.length?Cp.slice(0,c-Ti.length).join(""):"",G=c<Ti.length;return n.jsx("div",{className:`intro-overlay${h?" is-leaving":""}`,onClick:M,role:"presentation","aria-hidden":"true",children:n.jsxs("p",{className:"intro-text",children:[n.jsxs("span",{className:"intro-line1",children:[L,G&&n.jsx("span",{className:"intro-caret"})]}),n.jsxs("span",{className:"intro-line2",children:[Y,!G&&n.jsx("span",{className:"intro-caret"})]})]})})}function R2(){const[r,m]=A.useState(0),[d,c]=A.useState(""),[f,h]=A.useState(!1),x=ag.useMemo(()=>["designer.","researcher.","strategist."],[]);A.useEffect(()=>{const S=setTimeout(()=>{const U=x[r];f?(c(U.substring(0,d.length-1)),d===""&&(h(!1),m(q=>(q+1)%x.length))):(c(U.substring(0,d.length+1)),d===U&&setTimeout(()=>h(!0),1500))},f?50:80);return()=>clearTimeout(S)},[d,f,r,x]);const E=A.useRef([]),w=A.useRef(null),[p,y]=A.useState(!1),[j,M]=A.useState(null),L=A.useRef(null);A.useEffect(()=>{if(!j)return;const S=q=>{q.key==="Escape"&&M(null)};document.addEventListener("keydown",S);const U=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",S),document.body.style.overflow=U}},[j]),A.useEffect(()=>{const S=[];return E.current.forEach((U,q)=>{if(U){const ie=new IntersectionObserver(J=>{J.forEach(oe=>{oe.isIntersecting&&(oe.target.style.animationDelay=`${q*.2}s`,oe.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-100px"});ie.observe(U),S.push(ie)}}),()=>{S.forEach(U=>U.disconnect())}},[]),A.useEffect(()=>{const S=w.current;if(!S)return;const U=new IntersectionObserver(([q])=>{q.isIntersecting&&(y(!0),U.disconnect())},{threshold:.2,rootMargin:"-80px"});return U.observe(S),()=>U.disconnect()},[]),A.useEffect(()=>{const S=()=>{const U=sessionStorage.getItem("scrollTo");if(U){const q=document.getElementById(U);q&&setTimeout(()=>q.scrollIntoView({behavior:"smooth"}),50),sessionStorage.removeItem("scrollTo")}};return S(),window.addEventListener("storage",S),()=>window.removeEventListener("storage",S)},[]);const Y=S=>{window.location.href=S},G=[{id:"gilly",name:"Gilly Leshed",role:"Teaching Professor, Cornell University",photo:U1,note:"Words from one of the most talented professors I learnt from",quote:n.jsxs(n.Fragment,{children:["“I have witnessed her journey and growth toward becoming an exceptional UX professional. Her projects were exemplary — literally —"," ",n.jsx("span",{className:"tq-highlight",children:"I have been using her projects as examples in the following semesters"}),". Her designs were grounded in systematic, in-depth user research that followed ethical principles. Shreayaa is a remarkably effective and"," ",n.jsx("span",{className:"tq-highlight",children:"proactive collaborator"}),". She was the de-facto driver behind the group projects, with"," ",n.jsx("span",{className:"tq-highlight",children:"high work ethic and endless positive can-do attitude"}),". I have no doubt that Shreayaa will make a strong, long-lasting impact in any organization that she will join.”"]})},{id:"jeremy",name:"Jeremy D. Faulk",role:"Design Researcher, Cornell University",photo:B1,note:"One of the most creative person I have collaborated with",quote:n.jsxs(n.Fragment,{children:["“Shreayaa has met every milestone of our human-computer-interaction project. Her competence as a"," ",n.jsx("span",{className:"tq-highlight",children:"software-to-hardware engineer"})," has enabled our interactive gallery installation to feature heart rate monitors that capture scientific data while also triggering automated lighting and sound effects. She is"," ",n.jsx("span",{className:"tq-highlight",children:"kind, skillful, and a good communicator"}),". I would work with Shreayaa on every HCI project if I could.”"]})},{id:"hrishika",name:"Hrishika Jotwani",photo:L1,note:"I have the best peers to learn from and grow together",quote:n.jsxs(n.Fragment,{children:["“Shreayaa and I worked on many group projects together, and"," ",n.jsx("span",{className:"tq-highlight",children:"she was a delight to work with, as a collaborator"}),". We spent hours and hours brainstorming ideas, researching techniques and implementation methods, discussing new strategies and"," ",n.jsx("span",{className:"tq-highlight",children:"learning a lot from each other"}),". I truly miss work with her, and I’m sure she has a lot to contribute to every team she works with!!”"]})}];j&&(L.current=j);const H=G.find(S=>S.id===(j||L.current));return n.jsxs("div",{className:"app",children:[n.jsx(D2,{}),n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        @font-face {
          font-family: 'Lovely Coffee';
          src: url('/fonts/LovelyCoffee.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        :root {
          --rose-pompadour: #e27396;
          --amaranth-pink: #ea9ab2;
          --mimi-pink: #efcfe3;
          --beige: #eaf2d7;
          --light-blue: #b3dee2;
          --deep-rose: #c55577;
          --darker-rose: #a73e5a;
          --text-primary: #2d2d2d;
          --text-secondary: #4a4a4a;
        }

        /* ── Opening intro overlay ─────────────────────────────────── */
        .intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 35%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          cursor: pointer;
          transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);
          will-change: transform;
        }
        .intro-overlay.is-leaving { transform: translateY(-105%); }

        .intro-text {
          font-family: 'Cedarville Cursive', cursive;
          font-size: clamp(1.5rem, 3.8vw, 2.4rem);
          line-height: 1.4;
          color: var(--text-primary);
          max-width: min(95vw, 1200px);
          margin: 0;
        }

        .intro-line1 {
          display: block;
          min-height: 1.15em;
          font-family: 'Lovely Coffee', 'Petit Formal Script', cursive;
          font-size: clamp(2rem, 8vw, 5.2rem);
          line-height: 1.15;
          color: var(--rose-pompadour);
          -webkit-text-stroke: 0.5px var(--rose-pompadour);
          margin-bottom: 0.05em;
        }

        .intro-line2 {
          display: block;
          min-height: 1.2em;
          color: var(--text-primary);
        }

        .intro-caret {
          display: inline-block;
          width: 3px;
          height: 0.9em;
          margin-left: 0.06em;
          vertical-align: -0.08em;
          border-radius: 2px;
          background: currentColor;
          animation: introBlink 0.9s steps(1, end) infinite;
        }
        @keyframes introBlink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }

        .dm-sans {
          font-family: 'DM Sans', sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        .content-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
        }

        .app::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 120%;
          height: 120%;
          background: 
            radial-gradient(ellipse 800px 600px at 10% 40%, rgba(234, 154, 178, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 600px 400px at 90% 70%, rgba(179, 222, 226, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 400px 300px at 50% 20%, rgba(239, 207, 227, 0.1) 0%, transparent 60%);
          pointer-events: none;
          z-index: -1;
          animation: waveMove 25s ease-in-out infinite reverse;
        }

        @keyframes waveFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            filter: blur(0px);
          }
          25% { 
            transform: translateY(-30px) rotate(2deg) scale(1.05);
            filter: blur(1px);
          }
          50% { 
            transform: translateY(-20px) rotate(-1deg) scale(0.95);
            filter: blur(0.5px);
          }
          75% { 
            transform: translateY(-40px) rotate(1deg) scale(1.02);
            filter: blur(1.5px);
          }
        }

        @keyframes waveMove {
          0%, 100% { 
            transform: translateX(-10%) translateY(-5%) rotate(0deg);
          }
          25% { 
            transform: translateX(5%) translateY(-10%) rotate(1deg);
          }
          50% { 
            transform: translateX(-5%) translateY(5%) rotate(-0.5deg);
          }
          75% { 
            transform: translateX(3%) translateY(-3%) rotate(0.5deg);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero {
          padding: 6rem 0;
          min-height: 85vh;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          width: 100%;
        }

        .hero-text {
          flex: 1;
          max-width: 650px;
          animation: slideInLeft 1s ease-out;
          position: relative;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-text h1 {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        /* keeps "Hi, I'm Shreayaa." on a single line at all viewport sizes */
        .greeting-line {
          white-space: nowrap;
          display: block;
        }

        .typewriter {
          color: var(--rose-pompadour);
          position: relative;
          display: block;
          margin-top: -0.4em;
        }

        .hero-text p {
          font-size: 1.1rem; /* ~17.6px */
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          max-width: 550px;
          line-height: 1.6;
          font-weight: 400;
          font-family: 'DM Sans', sans-serif;
        }

        /* "Open to full-time roles" availability pill (matches the About page badge) */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 115, 150, 0.25);
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
        }
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          position: relative;
        }
        .hero-badge-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.4);
          animation: heroBadgePulse 1.8s ease-out infinite;
        }
        @keyframes heroBadgePulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          70%  { transform: scale(2);   opacity: 0; }
          100% { transform: scale(2);   opacity: 0; }
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Roboto', sans-serif;
        }

        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .btn:hover::before {
          transform: translateX(100%);
        }

        .btn-primary {
          background: var(--rose-pompadour);
          color: white;
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 35px rgba(226, 115, 150, 0.4);
          background: var(--deep-rose);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-primary);
          border: 2px solid var(--rose-pompadour);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: translateY(-4px) scale(1.02);
        }

        .hero-image {
          flex-shrink: 0;
          animation: slideInRight 1s ease-out;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          margin-top: 0;
          /* Pull image up to align with text baseline */
          margin-bottom: 2.5rem;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-photo {
          /* enable 3D space for a subtle tilt effect */
          perspective: 1200px;
        }

        .hero-photo img {
          width: clamp(350px, 35vw, 480px);
          height: auto;
          object-fit: contain;
          object-position: center bottom;
          transition: transform 450ms cubic-bezier(0.2, 0.9, 0.2, 1), box-shadow 350ms ease;
          transform-origin: center center;
          will-change: transform;
          display: block;
        }

        /* Zoom on hover/focus */
        .hero-photo img:hover,
        .hero-photo img:focus {
          transform: scale(1.08);
          box-shadow: 0 20px 50px rgba(45,45,45,0.14);
        }

        .skills {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          padding: 1.2rem 0; /* reduced height */
          position: relative;
          border-top: 1px solid rgba(226, 115, 150, 0.1);
          border-bottom: 1px solid rgba(226, 115, 150, 0.1);
        }

        .skills-carousel {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-track {
          display: flex;
          gap: 3rem;
          align-items: center;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0.7rem 2.9rem;
          touch-action: pan-x;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          user-select: none;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%);
        }
        .skills-track::-webkit-scrollbar { display: none; }
        .skills-track.is-grabbing { cursor: grabbing; }
        .skills-track:focus-visible { outline: 2px solid var(--rose-pompadour); outline-offset: 3px; border-radius: 10px; }

        .skill-chip {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-secondary);
          padding: 0.4rem 1.1rem;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 9999px;
          border: 1px solid rgba(226, 115, 150, 0.12);
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 6px 18px rgba(226, 115, 150, 0.09);
          white-space: nowrap;
          line-height: 1;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .skill-chip:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(226, 115, 150, 0.14);
        }

        .skills-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(226, 115, 150, 0.18);
          background: rgba(255, 255, 255, 0.92);
          color: var(--deep-rose);
          font-size: 1.5rem;
          line-height: 1;
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(226, 115, 150, 0.18);
          transition: transform 0.18s ease, background 0.18s ease;
        }
        .skills-arrow:hover { background: #fff; transform: translateY(-50%) scale(1.12); }
        .skills-arrow:active { transform: translateY(-50%) scale(0.95); }
        .skills-arrow--left { left: 0.35rem; }
        .skills-arrow--right { right: 0.35rem; }

        .design-section {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          position: relative;
          padding: 7rem 0 0;
        }

        .design-content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5rem;
        }

        .design-left {
          flex: 0 0 520px;
          max-width: 520px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .design-left h2 {
          font-size: clamp(2.2rem, 3vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .design-left p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 400;
          margin-bottom: 1.5rem;
          font-family: 'DM Sans', sans-serif;
        }

        .soft-green-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }

        .design-gallery {
          flex: 1;
          max-width: 600px;
          height: 480px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 0;
        }

        .gallery-container {
          position: relative;
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(8px); /* nudge down a bit */
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 0;
          box-shadow: none;
          background: transparent;
        }

        .gallery-card {
          position: absolute;
          width: 450px;
          height: 300px;
          background: #b3b7ee;
          color: #2d2d2d;
          backdrop-filter: blur(25px) saturate(180%);
          border-radius: 20px;
          border: 1px solid #b3b7ee;
          box-shadow: 
            0 15px 40px rgba(179, 183, 238, 0.12),
            0 5px 20px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          opacity: 0;
          transform: translateX(100px) scale(0.8);
        }

        .gallery-card.active {
          opacity: 1;
          transform: translateX(0) scale(1);
          z-index: 3;
        }

        .gallery-card.prev {
          opacity: 0.6;
          transform: translateX(-80px) scale(0.9);
          z-index: 2;
        }

        .gallery-card.next {
          opacity: 0.6;
          transform: translateX(80px) scale(0.9);
          z-index: 2;
        }

        .gallery-card:hover.active {
          transform: translateX(0) scale(1.03);
          box-shadow: 
            0 25px 60px rgba(226, 115, 150, 0.18),
            0 8px 30px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .card-content {
          padding: 2rem 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .card-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          color: #2d2d2d;
          font-family: 'Roboto', sans-serif;
          line-height: 1.3;
        }

        .card-content p {
          font-size: 1.25rem;
          color: #2d2d2d;
          font-family: 'Roboto', sans-serif;
          line-height: 1.7;
          font-weight: 600;
        }

        .gallery-nav {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 2rem;
        }

        .nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid var(--rose-pompadour);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--rose-pompadour);
        }

        .nav-btn:hover {
          background: var(--rose-pompadour);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.3);
        }

        .gallery-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(226, 115, 150, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--rose-pompadour);
          transform: scale(1.3);
        }

        .dot:hover {
          background: var(--rose-pompadour);
          transform: scale(1.1);
        }

        /* Work Section (copied from Work.jsx) */
        .work-section {
          padding: 4rem 0;
          position: relative;
        }

        .project-row {
          display: flex;
          align-items: center;
          gap: 4rem;
          margin-bottom: 6rem;
          min-height: 500px;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .work-section .project-row:last-child {
          margin-bottom: 0;
        }

        .project-row.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .project-row.reverse {
          flex-direction: row-reverse;
        }

        .project-row:hover {
          transform: translateY(-5px) scale(1.01);
        }

        .mockup-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          position: relative;
        }

        .mockup-image-wrapper {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-row:hover .mockup-image-wrapper {
          transform: translateY(-8px) scale(1.02);
        }

        .mockup-image-wrapper.laptop .mockup-image {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
        }

        .mockup-image-wrapper.mobile .mockup-image {
          height: 90%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
        }

        .mockup-image {
          image-rendering: high-quality;
          transition: all 0.6s ease;
          border-radius: 12px;
        }

        .mockup-placeholder {
          color: #999;
          font-size: 1.2rem;
          text-align: center;
          padding: 3rem;
          border: 2px dashed rgba(153, 153, 153, 0.3);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          width: 80%;
          height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .content-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 0;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          line-height: 1.2;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-title {
          transform: translateX(0);
          opacity: 1;
        }

        .project-row:hover .project-title {
          color: var(--rose-pompadour);
          transform: translateX(5px);
        }

        .project-description {
          font-size: 1.1rem; /* match hero ~17.6px */
          color: var(--text-secondary);
          line-height: 1.6;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          transition: all 0.4s ease;
          transform: translateX(20px);
          opacity: 0.8;
        }

        .project-row.animate-in .project-description {
          transform: translateX(0);
          opacity: 1;
        }

        .tool-logos-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .tool-logo {
          width: 48px !important;
          height: 48px !important;
          object-fit: contain;
          padding: 0;
          display: inline-block;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
        }

        .project-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: var(--text-secondary);
          background: rgba(226, 115, 150, 0.08);
          border: 1px solid rgba(226, 115, 150, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .project-row:hover .project-tag {
          background: rgba(226, 115, 150, 0.15);
          border-color: rgba(226, 115, 150, 0.4);
        }

        .award-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .award-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .award-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: #4a4a4a;
          line-height: 1.5;
          font-weight: 400;
        }

        /* Testimonial Section (under Routes to Roots) */
        .testimonial-section {
          max-width: 1000px;
          margin: 0 auto;
          padding: 5rem 0 7rem;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .testimonial-section.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Heading ─────────────────────────────────────────────── */
        .testimonial-heading {
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          line-height: 1.2;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .testimonial-hint {
          text-align: center;
          font-family: 'Cedarville Cursive', cursive;
          font-size: 1.2rem;
          color: var(--deep-rose);
          margin-bottom: 3rem;
        }

        /* ── Envelope row ────────────────────────────────────────── */
        .envelope-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: clamp(1.5rem, 6vw, 4.5rem);
          padding-top: 2.5rem; /* headroom for the flap as it lifts open */
        }

        .env {
          --env-stroke: #e7a3c0;
          --env-heart: #e2503a;
          appearance: none;
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.9rem;
        }

        .env__art {
          position: relative;
          width: clamp(156px, 19vw, 190px);
          aspect-ratio: 240 / 168;
          perspective: 750px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 12px 18px rgba(197, 85, 119, 0.2));
        }
        .env:hover .env__art,
        .env:focus-visible .env__art { transform: translateY(-7px) rotate(-1deg); }

        .env__base,
        .env__flap { position: absolute; inset: 0; width: 100%; height: 100%; }
        .env__base { z-index: 1; }
        .env__flap {
          z-index: 3;
          transform-origin: 50% 5.5%;
          transform: rotateX(0deg);
          transition: transform 0.55s cubic-bezier(0.6, 0.04, 0.3, 1);
          backface-visibility: visible;
        }
        .env:hover .env__flap,
        .env:focus-visible .env__flap { transform: rotateX(26deg); }

        .env__heart {
          position: absolute;
          left: 50%;
          top: 60.5%;
          width: 14%;
          transform: translate(-50%, -50%);
          z-index: 4;
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .env.is-open .env__flap { transform: rotateX(174deg); z-index: 2; }
        .env.is-open .env__heart { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
        .env.is-open .env__art { transform: translateY(-3px); }

        .env__caption {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }
        .env:hover .env__caption,
        .env.is-open .env__caption { color: var(--deep-rose); }

        /* ── Inline air-mail postcard reveal ─────────────────────── */
        .postcard-wrap {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          margin-top: 0;
          transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease, margin-top 0.5s ease;
        }
        .postcard-wrap.open { grid-template-rows: 1fr; opacity: 1; margin-top: 3.25rem; }
        .postcard-min { overflow: hidden; min-height: 0; }

        .postcard {
          position: relative;
          background: repeating-linear-gradient(45deg,
            #e23b3b 0 13px, #f4a6c0 13px 26px, #ffffff 26px 39px);
          padding: 14px;
          border-radius: 18px;
          box-shadow: 0 26px 55px rgba(45, 45, 45, 0.22);
          transform: translateY(14px);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .postcard-wrap.open .postcard { transform: translateY(0); }

        /* Modal variant: full-screen overlay (rendered via portal to <body>) */
        .postcard-modal {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 3rem);
          background: rgba(58, 34, 44, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          animation: postcardFade 0.28s ease;
        }
        @keyframes postcardFade { from { opacity: 0; } to { opacity: 1; } }

        .postcard-modal__card {
          width: min(940px, 100%);
          max-height: 90vh;
          overflow: auto;
          animation: postcardPop 0.42s cubic-bezier(0.34, 1.4, 0.6, 1);
        }
        @keyframes postcardPop {
          from { opacity: 0; transform: translateY(22px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .postcard-modal__card .postcard { transform: none; }

        .postcard__close {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 6;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.92);
          color: #c5375a;
          font-size: 1.4rem;
          line-height: 1;
          display: grid;
          place-items: center;
          box-shadow: 0 3px 9px rgba(0, 0, 0, 0.18);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .postcard__close:hover { transform: scale(1.12); background: #fff; }

        .postcard__inner {
          position: relative;
          background: #fffdf7;
          border-radius: 9px;
          display: flex;
          gap: 2.5rem;
          padding: 2.6rem 2.8rem;
          min-height: 290px;
        }

        .postcard__content { flex: 1.4; display: flex; align-items: center; }
        .postcard__content .testimonial-quote { margin: 0; font-size: 1.05rem; line-height: 1.75; }

        .postcard__divider { width: 1px; background: rgba(45, 45, 45, 0.16); align-self: stretch; }

        .postcard__side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.3rem;
        }

        .postcard__photo {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
          box-shadow: 0 8px 20px rgba(197, 85, 119, 0.22);
          margin-bottom: 0.4rem;
        }
        .postcard__name {
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
          font-weight: 700;
          font-size: 1.12rem;
          color: var(--text-primary);
        }
        .postcard__role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .postcard__note {
          margin-top: 0.7rem;
          max-width: 210px;
          font-family: 'Cedarville Cursive', cursive;
          font-size: 1.1rem;
          line-height: 1.25;
          color: var(--deep-rose);
          transform: rotate(-2deg);
        }

        .testimonial-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-primary);
        }

        .tq-highlight {
          background: rgba(152, 223, 138, 0.5);
          padding: 0.08em 0.16em;
          border-radius: 0.5em 0.28em 0.45em 0.3em;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }



        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            gap: 3rem;
            text-align: center;
          }

          .hero-text {
            max-width: 100%;
          }

          /* clamp floor of 350px overflows narrow screens — scale the photo to the viewport */
          .hero-photo img {
            width: min(340px, 72vw);
          }

          .design-content {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }

          .design-left {
            text-align: center;
            max-width: 100%;
          }

          .design-gallery {
            width: 100%;
            max-width: 100%;
            height: 400px;
          }

          .gallery-container {
            height: 320px;
          }

          .gallery-card {
            width: 90%;
            min-width: 280px;
            height: 260px;
          }

          /* Project rows: stack into a single column so the mockup sits above the
             text instead of being squeezed side-by-side on narrow screens */
          .project-row,
          .project-row.reverse {
            flex-direction: column;
            gap: 1.75rem;
            min-height: auto;
            margin-bottom: 3.5rem;
            text-align: center;
          }

          .mockup-side {
            width: 100%;
            min-height: auto;
          }

          .mockup-image-wrapper {
            height: auto;
            max-height: 300px;
          }

          .mockup-image-wrapper.mobile .mockup-image {
            height: auto;
            width: auto;
            max-height: 300px;
            max-width: 78%;
          }

          .content-side {
            width: 100%;
            padding: 0;
          }

          .project-title {
            font-size: 1.85rem;
            margin-bottom: 1rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .project-tags,
          .tool-logos-row,
          .award-badge {
            justify-content: center;
          }

          .postcard__inner {
            flex-direction: column;
            gap: 1.75rem;
            padding: 2.25rem 1.5rem 2.5rem;
          }

          .postcard__divider { width: auto; height: 1px; }

          /* stacked envelopes need extra row spacing so an opened flap clears the caption above */
          .envelope-row { row-gap: 5.5rem; }
          .env__art { width: clamp(150px, 52vw, 178px); }

        }

        @media (max-width: 480px) {
          .design-gallery {
            height: 360px;
          }

          .gallery-container {
            height: 280px;
          }

          .gallery-card {
            width: 95%;
            min-width: 260px;
            height: 240px;
          }

          .skill-chip {
            font-size: 0.9rem;
            padding: 0.4rem 1rem;
          }

          .skills-track { gap: 1.5rem; padding-left: 2.5rem; padding-right: 2.5rem; }

          .skills-arrow { width: 32px; height: 32px; font-size: 1.25rem; }

          .project-title { font-size: 1.6rem; }
          .mockup-image-wrapper { max-height: 260px; }
          .mockup-image-wrapper.mobile .mockup-image { max-height: 260px; }

          .design-content {
            gap: 2rem;
          }

          .card-content {
            padding: 1.5rem 2rem;
          }

          .card-content h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .card-content p {
            font-size: 0.9rem;
            line-height: 1.5;
          }

        }
        `}),n.jsx(ea,{}),n.jsx("section",{className:"hero",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-text",children:[n.jsxs("h1",{children:[n.jsx("span",{className:"greeting-line",children:"Hi, I'm Shreayaa."}),n.jsx("br",{}),n.jsxs("span",{className:"typewriter",children:["I'm a ",d,n.jsx("span",{style:{animation:"blink 1s infinite"},children:"|"})]})]}),n.jsx("p",{className:"dm-sans",children:"I love to design with empathy and purpose. I'm passionate about making complex things feel simple and smooth."}),n.jsxs("span",{className:"hero-badge",children:[n.jsx("span",{className:"hero-badge-dot"}),"Open to full-time roles"]})]}),n.jsx("div",{className:"hero-image",children:n.jsx("div",{className:"hero-photo",children:n.jsx("img",{src:O1,alt:"Shreayaa Srinivasan"})})})]})})}),n.jsx(C2,{}),n.jsx("section",{className:"design-section",children:n.jsxs("div",{className:"content-container",children:[n.jsxs("div",{className:"design-content",children:[n.jsxs("div",{className:"design-left",children:[n.jsx("h2",{children:"Who am I as a designer?"}),n.jsxs("p",{children:["I come from a background in Information Science, Computer Science and Psychology which puts me in this unique position where I ",n.jsx("span",{className:"soft-green-highlight",children:"understand the technical capabilities, the human side, and the UX side of things."})," So I'm keen on designing interactions and products that people actually find delightful."]}),n.jsxs("p",{children:["These experiences make me very ",n.jsx("span",{className:"soft-green-highlight",children:"comfortable working closely with researchers, engineers, and stakeholders"})," and understand the feasibility and implications of my design decisions."]})]}),n.jsx("div",{className:"design-gallery",children:n.jsx("div",{className:"gallery-container",children:n.jsx("div",{className:"gallery-image",children:n.jsx("img",{src:_1,alt:"Venn diagram: Computer Science, User Experience, Psychology — Human-Computer Interaction Designer"})})})})]}),n.jsx("section",{id:"work",className:"work-section",children:zp.filter(S=>![4,5,6].includes(S.id)).map((S,U)=>n.jsxs("div",{id:S.id===1?"google-cloud":void 0,ref:q=>E.current[U]=q,className:`project-row ${U%2===1?"reverse":""}`,onClick:()=>Y(S.caseStudyUrl),children:[n.jsx("div",{className:"mockup-side",children:n.jsx("div",{className:`mockup-image-wrapper ${S.imageType}`,children:S.image?n.jsx("img",{src:S.image,alt:`${S.title} mockup`,className:"mockup-image"}):n.jsxs("div",{className:"mockup-placeholder",children:[n.jsx("div",{children:"Project Mockup Image"}),n.jsxs("small",{children:["(",S.imageType," mockup)"]})]})})}),n.jsxs("div",{className:"content-side",children:[n.jsx("h2",{className:"project-title",children:S.title}),S.tags&&n.jsx("div",{className:"project-tags",children:S.tags.map((q,ie)=>n.jsx("span",{className:"project-tag",children:q},ie))}),n.jsx("p",{className:"project-description",children:S.description}),S.toolLogos&&n.jsx("div",{className:"tool-logos-row",children:S.toolLogos.map((q,ie)=>n.jsx("img",{src:q,alt:`tool-${ie}`,className:"tool-logo"},ie))}),S.award&&n.jsxs("div",{className:"award-badge",children:[n.jsx("img",{src:Ko,alt:"Award",className:"award-icon"}),n.jsx("p",{className:"award-text",children:S.award})]})]})]},S.id))}),n.jsxs("section",{ref:w,className:`testimonial-section${p?" in-view":""}`,"aria-label":"Testimonials",children:[n.jsx("h2",{className:"testimonial-heading",children:"Words that motivate me to keep going"}),n.jsx("p",{className:"testimonial-hint",children:"tap a letter to open it"}),n.jsx("div",{className:"envelope-row",children:G.map(S=>n.jsxs("button",{type:"button",className:`env${j===S.id?" is-open":""}`,"aria-expanded":j===S.id,"aria-label":`${j===S.id?"Close":"Open"} the letter from ${S.name}`,onClick:()=>M(j===S.id?null:S.id),children:[n.jsx(z2,{}),n.jsxs("span",{className:"env__caption",children:["from ",S.name]})]},S.id))}),j&&H&&cg.createPortal(n.jsx("div",{className:"postcard-modal",role:"dialog","aria-modal":"true","aria-label":`Letter from ${H.name}`,onClick:()=>M(null),children:n.jsx("div",{className:"postcard-modal__card",onClick:S=>S.stopPropagation(),children:n.jsx(E2,{testimonial:H,onClose:()=>M(null)})})}),document.body)]})]})}),n.jsx(Yn,{})]})}function O2(){return n.jsx(A1,{children:n.jsxs(e1,{children:[n.jsx(zt,{path:"/",element:n.jsx(R2,{})}),n.jsx(zt,{path:"/about",element:n.jsx(Dx,{})}),n.jsx(zt,{path:"/work",element:n.jsx(_x,{})}),n.jsx(zt,{path:"/google-cloud-case-study",element:n.jsx(Qx,{})}),n.jsx(zt,{path:"/ithaca-soap-case-study",element:n.jsx(Zx,{})}),n.jsx(zt,{path:"/routes-to-roots-case-study",element:n.jsx(r2,{})}),n.jsx(zt,{path:"/ecocart-case-study",element:n.jsx(v2,{})}),n.jsx(zt,{path:"/iname-case-study",element:n.jsx(g2,{})}),n.jsx(zt,{path:"/rshiny-case-study",element:n.jsx(A2,{})}),n.jsx(zt,{path:"/garden",element:n.jsx(k2,{})})]})})}og.createRoot(document.getElementById("root")).render(n.jsx(A.StrictMode,{children:n.jsx(O2,{})}));
