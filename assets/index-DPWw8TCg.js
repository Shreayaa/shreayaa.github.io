(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();function a0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var js={exports:{}},En={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function lp(){if(Df)return En;Df=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,m,p){var b=null;if(p!==void 0&&(b=""+p),m.key!==void 0&&(b=""+m.key),"key"in m){p={};for(var E in m)E!=="key"&&(p[E]=m[E])}else p=m;return m=p.ref,{$$typeof:s,type:c,key:b,ref:m!==void 0?m:null,props:p}}return En.Fragment=f,En.jsx=d,En.jsxs=d,En}var Of;function rp(){return Of||(Of=1,js.exports=lp()),js.exports}var n=rp(),Ss={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function op(){if(Hf)return te;Hf=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),O=Symbol.iterator;function H(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,F={};function G(g,D,_){this.props=g,this.context=D,this.refs=F,this.updater=_||Y}G.prototype.isReactComponent={},G.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},G.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Q(){}Q.prototype=G.prototype;function q(g,D,_){this.props=g,this.context=D,this.refs=F,this.updater=_||Y}var ee=q.prototype=new Q;ee.constructor=q,V(ee,G.prototype),ee.isPureReactComponent=!0;var be=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function Ae(g,D,_,U,Z,oe){return _=oe.ref,{$$typeof:s,type:g,key:D,ref:_!==void 0?_:null,props:oe}}function Oe(g,D){return Ae(g.type,D,void 0,void 0,void 0,g.props)}function Se(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Pe(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(_){return D[_]})}var dt=/\/+/g;function qe(g,D){return typeof g=="object"&&g!==null&&g.key!=null?Pe(""+g.key):D.toString(36)}function ja(){}function Sa(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ja,ja):(g.status="pending",g.then(function(D){g.status==="pending"&&(g.status="fulfilled",g.value=D)},function(D){g.status==="pending"&&(g.status="rejected",g.reason=D)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Xe(g,D,_,U,Z){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var P=!1;if(g===null)P=!0;else switch(oe){case"bigint":case"string":case"number":P=!0;break;case"object":switch(g.$$typeof){case s:case f:P=!0;break;case k:return P=g._init,Xe(P(g._payload),D,_,U,Z)}}if(P)return Z=Z(g),P=U===""?"."+qe(g,0):U,be(Z)?(_="",P!=null&&(_=P.replace(dt,"$&/")+"/"),Xe(Z,D,_,"",function(Ft){return Ft})):Z!=null&&(Se(Z)&&(Z=Oe(Z,_+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(dt,"$&/")+"/")+P)),D.push(Z)),1;P=0;var et=U===""?".":U+":";if(be(g))for(var ve=0;ve<g.length;ve++)U=g[ve],oe=et+qe(U,ve),P+=Xe(U,D,_,oe,Z);else if(ve=H(g),typeof ve=="function")for(g=ve.call(g),ve=0;!(U=g.next()).done;)U=U.value,oe=et+qe(U,ve++),P+=Xe(U,D,_,oe,Z);else if(oe==="object"){if(typeof g.then=="function")return Xe(Sa(g),D,_,U,Z);throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return P}function A(g,D,_){if(g==null)return g;var U=[],Z=0;return Xe(g,U,"","",function(oe){return D.call(_,oe,Z++)}),U}function B(g){if(g._status===-1){var D=g._result;D=D(),D.then(function(_){(g._status===0||g._status===-1)&&(g._status=1,g._result=_)},function(_){(g._status===0||g._status===-1)&&(g._status=2,g._result=_)}),g._status===-1&&(g._status=0,g._result=D)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function pe(){}return te.Children={map:A,forEach:function(g,D,_){A(g,function(){D.apply(this,arguments)},_)},count:function(g){var D=0;return A(g,function(){D++}),D},toArray:function(g){return A(g,function(D){return D})||[]},only:function(g){if(!Se(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=G,te.Fragment=d,te.Profiler=m,te.PureComponent=q,te.StrictMode=c,te.Suspense=S,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,te.__COMPILER_RUNTIME={__proto__:null,c:function(g){return $.H.useMemoCache(g)}},te.cache=function(g){return function(){return g.apply(null,arguments)}},te.cloneElement=function(g,D,_){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var U=V({},g.props),Z=g.key,oe=void 0;if(D!=null)for(P in D.ref!==void 0&&(oe=void 0),D.key!==void 0&&(Z=""+D.key),D)!De.call(D,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&D.ref===void 0||(U[P]=D[P]);var P=arguments.length-2;if(P===1)U.children=_;else if(1<P){for(var et=Array(P),ve=0;ve<P;ve++)et[ve]=arguments[ve+2];U.children=et}return Ae(g.type,Z,void 0,void 0,oe,U)},te.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},te.createElement=function(g,D,_){var U,Z={},oe=null;if(D!=null)for(U in D.key!==void 0&&(oe=""+D.key),D)De.call(D,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Z[U]=D[U]);var P=arguments.length-2;if(P===1)Z.children=_;else if(1<P){for(var et=Array(P),ve=0;ve<P;ve++)et[ve]=arguments[ve+2];Z.children=et}if(g&&g.defaultProps)for(U in P=g.defaultProps,P)Z[U]===void 0&&(Z[U]=P[U]);return Ae(g,oe,void 0,void 0,null,Z)},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:E,render:g}},te.isValidElement=Se,te.lazy=function(g){return{$$typeof:k,_payload:{_status:-1,_result:g},_init:B}},te.memo=function(g,D){return{$$typeof:v,type:g,compare:D===void 0?null:D}},te.startTransition=function(g){var D=$.T,_={};$.T=_;try{var U=g(),Z=$.S;Z!==null&&Z(_,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(pe,J)}catch(oe){J(oe)}finally{$.T=D}},te.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},te.use=function(g){return $.H.use(g)},te.useActionState=function(g,D,_){return $.H.useActionState(g,D,_)},te.useCallback=function(g,D){return $.H.useCallback(g,D)},te.useContext=function(g){return $.H.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g,D){return $.H.useDeferredValue(g,D)},te.useEffect=function(g,D,_){var U=$.H;if(typeof _=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(g,D)},te.useId=function(){return $.H.useId()},te.useImperativeHandle=function(g,D,_){return $.H.useImperativeHandle(g,D,_)},te.useInsertionEffect=function(g,D){return $.H.useInsertionEffect(g,D)},te.useLayoutEffect=function(g,D){return $.H.useLayoutEffect(g,D)},te.useMemo=function(g,D){return $.H.useMemo(g,D)},te.useOptimistic=function(g,D){return $.H.useOptimistic(g,D)},te.useReducer=function(g,D,_){return $.H.useReducer(g,D,_)},te.useRef=function(g){return $.H.useRef(g)},te.useState=function(g){return $.H.useState(g)},te.useSyncExternalStore=function(g,D,_){return $.H.useSyncExternalStore(g,D,_)},te.useTransition=function(){return $.H.useTransition()},te.version="19.1.0",te}var Uf;function Os(){return Uf||(Uf=1,Ss.exports=op()),Ss.exports}var T=Os();const i0=a0(T);var zs={exports:{}},Cn={},ks={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function sp(){return Bf||(Bf=1,function(s){function f(A,B){var J=A.length;A.push(B);e:for(;0<J;){var pe=J-1>>>1,g=A[pe];if(0<m(g,B))A[pe]=B,A[J]=g,J=pe;else break e}}function d(A){return A.length===0?null:A[0]}function c(A){if(A.length===0)return null;var B=A[0],J=A.pop();if(J!==B){A[0]=J;e:for(var pe=0,g=A.length,D=g>>>1;pe<D;){var _=2*(pe+1)-1,U=A[_],Z=_+1,oe=A[Z];if(0>m(U,J))Z<g&&0>m(oe,U)?(A[pe]=oe,A[Z]=J,pe=Z):(A[pe]=U,A[_]=J,pe=_);else if(Z<g&&0>m(oe,J))A[pe]=oe,A[Z]=J,pe=Z;else break e}}return B}function m(A,B){var J=A.sortIndex-B.sortIndex;return J!==0?J:A.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var b=Date,E=b.now();s.unstable_now=function(){return b.now()-E}}var S=[],v=[],k=1,O=null,H=3,Y=!1,V=!1,F=!1,G=!1,Q=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function be(A){for(var B=d(v);B!==null;){if(B.callback===null)c(v);else if(B.startTime<=A)c(v),B.sortIndex=B.expirationTime,f(S,B);else break;B=d(v)}}function $(A){if(F=!1,be(A),!V)if(d(S)!==null)V=!0,De||(De=!0,qe());else{var B=d(v);B!==null&&Xe($,B.startTime-A)}}var De=!1,Ae=-1,Oe=5,Se=-1;function Pe(){return G?!0:!(s.unstable_now()-Se<Oe)}function dt(){if(G=!1,De){var A=s.unstable_now();Se=A;var B=!0;try{e:{V=!1,F&&(F=!1,q(Ae),Ae=-1),Y=!0;var J=H;try{t:{for(be(A),O=d(S);O!==null&&!(O.expirationTime>A&&Pe());){var pe=O.callback;if(typeof pe=="function"){O.callback=null,H=O.priorityLevel;var g=pe(O.expirationTime<=A);if(A=s.unstable_now(),typeof g=="function"){O.callback=g,be(A),B=!0;break t}O===d(S)&&c(S),be(A)}else c(S);O=d(S)}if(O!==null)B=!0;else{var D=d(v);D!==null&&Xe($,D.startTime-A),B=!1}}break e}finally{O=null,H=J,Y=!1}B=void 0}}finally{B?qe():De=!1}}}var qe;if(typeof ee=="function")qe=function(){ee(dt)};else if(typeof MessageChannel<"u"){var ja=new MessageChannel,Sa=ja.port2;ja.port1.onmessage=dt,qe=function(){Sa.postMessage(null)}}else qe=function(){Q(dt,0)};function Xe(A,B){Ae=Q(function(){A(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(A){A.callback=null},s.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<A?Math.floor(1e3/A):5},s.unstable_getCurrentPriorityLevel=function(){return H},s.unstable_next=function(A){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}var J=H;H=B;try{return A()}finally{H=J}},s.unstable_requestPaint=function(){G=!0},s.unstable_runWithPriority=function(A,B){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var J=H;H=A;try{return B()}finally{H=J}},s.unstable_scheduleCallback=function(A,B,J){var pe=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,A){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,A={id:k++,callback:B,priorityLevel:A,startTime:J,expirationTime:g,sortIndex:-1},J>pe?(A.sortIndex=J,f(v,A),d(S)===null&&A===d(v)&&(F?(q(Ae),Ae=-1):F=!0,Xe($,J-pe))):(A.sortIndex=g,f(S,A),V||Y||(V=!0,De||(De=!0,qe()))),A},s.unstable_shouldYield=Pe,s.unstable_wrapCallback=function(A){var B=H;return function(){var J=H;H=B;try{return A.apply(this,arguments)}finally{H=J}}}}(Ns)),Ns}var _f;function cp(){return _f||(_f=1,ks.exports=sp()),ks.exports}var Ts={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function dp(){if(Yf)return Ze;Yf=1;var s=Os();function f(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)v+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(S,v,k){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:O==null?null:""+O,children:S,containerInfo:v,implementation:k}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ze.createPortal=function(S,v){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return p(S,v,null,k)},Ze.flushSync=function(S){var v=b.T,k=c.p;try{if(b.T=null,c.p=2,S)return S()}finally{b.T=v,c.p=k,c.d.f()}},Ze.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(S,v))},Ze.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},Ze.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var k=v.as,O=E(k,v.crossOrigin),H=typeof v.integrity=="string"?v.integrity:void 0,Y=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;k==="style"?c.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:O,integrity:H,fetchPriority:Y}):k==="script"&&c.d.X(S,{crossOrigin:O,integrity:H,fetchPriority:Y,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Ze.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var k=E(v.as,v.crossOrigin);c.d.M(S,{crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(S)},Ze.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var k=v.as,O=E(k,v.crossOrigin);c.d.L(S,k,{crossOrigin:O,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Ze.preloadModule=function(S,v){if(typeof S=="string")if(v){var k=E(v.as,v.crossOrigin);c.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(S)},Ze.requestFormReset=function(S){c.d.r(S)},Ze.unstable_batchedUpdates=function(S,v){return S(v)},Ze.useFormState=function(S,v,k){return b.H.useFormState(S,v,k)},Ze.useFormStatus=function(){return b.H.useHostTransitionStatus()},Ze.version="19.1.0",Ze}var Lf;function up(){if(Lf)return Ts.exports;Lf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),Ts.exports=dp(),Ts.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function fp(){if(Gf)return Cn;Gf=1;var s=cp(),f=Os(),d=up();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(c(188))}function S(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return E(l),e;if(r===i)return E(l),t;r=r.sibling}throw Error(c(188))}if(a.return!==i.return)a=l,i=r;else{for(var o=!1,u=l.child;u;){if(u===a){o=!0,a=l,i=r;break}if(u===i){o=!0,i=l,a=r;break}u=u.sibling}if(!o){for(u=r.child;u;){if(u===a){o=!0,a=r,i=l;break}if(u===i){o=!0,i=r,a=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,O=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var ja=Symbol.for("react.client.reference");function Sa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ja?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case G:return"Profiler";case F:return"StrictMode";case $:return"Suspense";case De:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}var Xe=Array.isArray,A=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],g=-1;function D(e){return{current:e}}function _(e){0>g||(e.current=pe[g],pe[g]=null,g--)}function U(e,t){g++,pe[g]=e.current,e.current=t}var Z=D(null),oe=D(null),P=D(null),et=D(null);function ve(e,t){switch(U(P,t),U(oe,e),U(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?of(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=of(t),e=sf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(Z),U(Z,e)}function Ft(){_(Z),_(oe),_(P)}function rr(e){e.memoizedState!==null&&U(et,e);var t=Z.current,a=sf(t,e.type);t!==a&&(U(oe,e),U(Z,a))}function Un(e){oe.current===e&&(_(Z),_(oe)),et.current===e&&(_(et),Sn._currentValue=J)}var or=Object.prototype.hasOwnProperty,sr=s.unstable_scheduleCallback,cr=s.unstable_cancelCallback,B0=s.unstable_shouldYield,_0=s.unstable_requestPaint,zt=s.unstable_now,Y0=s.unstable_getCurrentPriorityLevel,Ls=s.unstable_ImmediatePriority,Gs=s.unstable_UserBlockingPriority,Bn=s.unstable_NormalPriority,L0=s.unstable_LowPriority,qs=s.unstable_IdlePriority,G0=s.log,q0=s.unstable_setDisableYieldValue,Ai=null,tt=null;function $t(e){if(typeof G0=="function"&&q0(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Ai,e)}catch{}}var at=Math.clz32?Math.clz32:Q0,X0=Math.log,V0=Math.LN2;function Q0(e){return e>>>=0,e===0?32:31-(X0(e)/V0|0)|0}var _n=256,Yn=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ln(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~r,i!==0?l=za(i):(o&=u,o!==0?l=za(o):a||(a=u&~e,a!==0&&(l=za(a))))):(u=i&~r,u!==0?l=za(u):o!==0?l=za(o):a||(a=i&~e,a!==0&&(l=za(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Mi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Z0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xs(){var e=_n;return _n<<=1,(_n&4194048)===0&&(_n=256),e}function Vs(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function dr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ri(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function K0(e,t,a,i,l,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,j=e.hiddenUpdates;for(a=o&~a;0<a;){var C=31-at(a),R=1<<C;u[C]=0,h[C]=-1;var z=j[C];if(z!==null)for(j[C]=null,C=0;C<z.length;C++){var N=z[C];N!==null&&(N.lane&=-536870913)}a&=~R}i!==0&&Qs(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Qs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-at(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function Zs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-at(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ks(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Tf(e.type))}function W0(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var Pt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Pt,We="__reactProps$"+Pt,Xa="__reactContainer$"+Pt,mr="__reactEvents$"+Pt,J0="__reactListeners$"+Pt,I0="__reactHandles$"+Pt,Ws="__reactResources$"+Pt,Di="__reactMarker$"+Pt;function hr(e){delete e[Ve],delete e[We],delete e[mr],delete e[J0],delete e[I0]}function Va(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ff(e);e!==null;){if(a=e[Ve])return a;e=ff(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Ve]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Oi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Za(e){var t=e[Ws];return t||(t=e[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Di]=!0}var Js=new Set,Is={};function ka(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Is[e]=t,e=0;e<t.length;e++)Js.add(t[e])}var F0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fs={},$s={};function $0(e){return or.call($s,e)?!0:or.call(Fs,e)?!1:F0.test(e)?$s[e]=!0:(Fs[e]=!0,!1)}function Gn(e,t,a){if($0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Dt(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var pr,Ps;function Wa(e){if(pr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pr=t&&t[1]||"",Ps=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pr+e+Ps}var gr=!1;function xr(e,t){if(!e||gr)return"";gr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(N){var z=N}Reflect.construct(e,[],R)}else{try{R.call()}catch(N){z=N}e.call(R.prototype)}}else{try{throw Error()}catch(N){z=N}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(N){if(N&&z&&typeof N.stack=="string")return[N.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],u=r[1];if(o&&u){var h=o.split(`
`),j=u.split(`
`);for(l=i=0;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(i===h.length||l===j.length)for(i=h.length-1,l=j.length-1;1<=i&&0<=l&&h[i]!==j[l];)l--;for(;1<=i&&0<=l;i--,l--)if(h[i]!==j[l]){if(i!==1||l!==1)do if(i--,l--,0>l||h[i]!==j[l]){var C=`
`+h[i].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=i&&0<=l);break}}}finally{gr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wa(a):""}function P0(e){switch(e.tag){case 26:case 27:case 5:return Wa(e.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return xr(e.type,!1);case 11:return xr(e.type.render,!1);case 1:return xr(e.type,!0);case 31:return Wa("Activity");default:return""}}function ec(e){try{var t="";do t+=P0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function em(e){var t=tc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){e._valueTracker||(e._valueTracker=em(e))}function ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=tc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tm=/[\n"\\]/g;function ft(e){return e.replace(tm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vr(e,t,a,i,l,r,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?yr(e,o,ut(t)):a!=null?yr(e,o,ut(a)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ut(u):e.removeAttribute("name")}function ic(e,t,a,i,l,r,o,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function yr(e,t,a){t==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function nc(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function lc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(Xe(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function Ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||am.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function oc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&rc(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&rc(e,r,t[r])}function br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return nm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wr=null;function jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,$a=null;function sc(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(vr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[We]||null;if(!l)throw Error(c(90));vr(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&ac(i)}break e;case"textarea":nc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var Sr=!1;function cc(e,t,a){if(Sr)return e(t,a);Sr=!0;try{var i=e(t);return i}finally{if(Sr=!1,(Fa!==null||$a!==null)&&(Al(),Fa&&(t=Fa,e=$a,$a=Fa=null,sc(t),e)))for(t=0;t<e.length;t++)sc(e[t])}}function Hi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[We]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zr=!1;if(Ot)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{zr=!1}var ea=null,kr=null,Zn=null;function dc(){if(Zn)return Zn;var e,t=kr,a=t.length,i,l="value"in ea?ea.value:ea.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===l[r-i];i++);return Zn=l.slice(e,1<i?1-i:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function uc(){return!1}function Je(e){function t(a,i,l,r,o){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Wn:uc,this.isPropagationStopped=uc,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Je(Na),Bi=k({},Na,{view:0,detail:0}),lm=Je(Bi),Nr,Tr,_i,In=k({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(Nr=e.screenX-_i.screenX,Tr=e.screenY-_i.screenY):Tr=Nr=0,_i=e),Nr)},movementY:function(e){return"movementY"in e?e.movementY:Tr}}),fc=Je(In),rm=k({},In,{dataTransfer:0}),om=Je(rm),sm=k({},Bi,{relatedTarget:0}),Er=Je(sm),cm=k({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=Je(cm),um=k({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fm=Je(um),mm=k({},Na,{data:0}),mc=Je(mm),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gm[e])?!!t[e]:!1}function Cr(){return xm}var vm=k({},Bi,{key:function(e){if(e.key){var t=hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Je(vm),bm=k({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=Je(bm),wm=k({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),jm=Je(wm),Sm=k({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=Je(Sm),km=k({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nm=Je(km),Tm=k({},Na,{newState:0,oldState:0}),Em=Je(Tm),Cm=[9,13,27,32],Ar=Ot&&"CompositionEvent"in window,Yi=null;Ot&&"documentMode"in document&&(Yi=document.documentMode);var Am=Ot&&"TextEvent"in window&&!Yi,pc=Ot&&(!Ar||Yi&&8<Yi&&11>=Yi),gc=" ",xc=!1;function vc(e,t){switch(e){case"keyup":return Cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function Mm(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(xc=!0,gc);case"textInput":return e=t.data,e===gc&&xc?null:e;default:return null}}function Rm(e,t){if(Pa)return e==="compositionend"||!Ar&&vc(e,t)?(e=dc(),Zn=kr=ea=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pc&&t.locale!=="ko"?null:t.data;default:return null}}var Dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dm[e.type]:t==="textarea"}function wc(e,t,a,i){Fa?$a?$a.push(i):$a=[i]:Fa=i,t=Ul(t,"onChange"),0<t.length&&(a=new Jn("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Li=null,Gi=null;function Om(e){tf(e,0)}function Fn(e){var t=Oi(e);if(ac(t))return e}function jc(e,t){if(e==="change")return t}var Sc=!1;if(Ot){var Mr;if(Ot){var Rr="oninput"in document;if(!Rr){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Rr=typeof zc.oninput=="function"}Mr=Rr}else Mr=!1;Sc=Mr&&(!document.documentMode||9<document.documentMode)}function kc(){Li&&(Li.detachEvent("onpropertychange",Nc),Gi=Li=null)}function Nc(e){if(e.propertyName==="value"&&Fn(Gi)){var t=[];wc(t,Gi,e,jr(e)),cc(Om,t)}}function Hm(e,t,a){e==="focusin"?(kc(),Li=t,Gi=a,Li.attachEvent("onpropertychange",Nc)):e==="focusout"&&kc()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fn(Gi)}function Bm(e,t){if(e==="click")return Fn(t)}function _m(e,t){if(e==="input"||e==="change")return Fn(t)}function Ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Ym;function qi(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!or.call(t,l)||!it(e[l],t[l]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var a=Tc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tc(a)}}function Cc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vn(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lm=Ot&&"documentMode"in document&&11>=document.documentMode,ei=null,Or=null,Xi=null,Hr=!1;function Mc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hr||ei==null||ei!==Vn(i)||(i=ei,"selectionStart"in i&&Dr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xi&&qi(Xi,i)||(Xi=i,i=Ul(Or,"onSelect"),0<i.length&&(t=new Jn("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=ei)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ti={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},Ur={},Rc={};Ot&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Ea(e){if(Ur[e])return Ur[e];if(!ti[e])return e;var t=ti[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Rc)return Ur[e]=t[a];return e}var Dc=Ea("animationend"),Oc=Ea("animationiteration"),Hc=Ea("animationstart"),Gm=Ea("transitionrun"),qm=Ea("transitionstart"),Xm=Ea("transitioncancel"),Uc=Ea("transitionend"),Bc=new Map,Br="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Br.push("scrollEnd");function bt(e,t){Bc.set(e,t),ka(t,[e])}var _c=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=_c.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ec(t)},_c.set(e,t),t)}return{value:e,source:t,stack:ec(t)}}var ht=[],ai=0,_r=0;function $n(){for(var e=ai,t=_r=ai=0;t<e;){var a=ht[t];ht[t++]=null;var i=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var r=ht[t];if(ht[t++]=null,i!==null&&l!==null){var o=i.pending;o===null?l.next=l:(l.next=o.next,o.next=l),i.pending=l}r!==0&&Yc(a,l,r)}}function Pn(e,t,a,i){ht[ai++]=e,ht[ai++]=t,ht[ai++]=a,ht[ai++]=i,_r|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Yr(e,t,a,i){return Pn(e,t,a,i),el(e)}function ii(e,t){return Pn(e,null,null,t),el(e)}function Yc(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,i=r.alternate,i!==null&&(i.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-at(a),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),r):null}function el(e){if(50<pn)throw pn=0,Zo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ni={};function Vm(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,i){return new Vm(e,t,a,i)}function Lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tl(e,t,a,i,l,r){var o=0;if(i=e,typeof e=="function")Lr(e)&&(o=1);else if(typeof e=="string")o=Zh(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=nt(31,a,t,l),e.elementType=Se,e.lanes=r,e;case V:return Ca(a.children,l,r,t);case F:o=8,l|=24;break;case G:return e=nt(12,a,t,l|2),e.elementType=G,e.lanes=r,e;case $:return e=nt(13,a,t,l),e.elementType=$,e.lanes=r,e;case De:return e=nt(19,a,t,l),e.elementType=De,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:case ee:o=10;break e;case q:o=9;break e;case be:o=11;break e;case Ae:o=14;break e;case Oe:o=16,i=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=nt(o,a,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function Ca(e,t,a,i){return e=nt(7,e,i,t),e.lanes=a,e}function Gr(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function qr(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=[],ri=0,al=null,il=0,pt=[],gt=0,Aa=null,Ut=1,Bt="";function Ma(e,t){li[ri++]=il,li[ri++]=al,al=e,il=t}function Gc(e,t,a){pt[gt++]=Ut,pt[gt++]=Bt,pt[gt++]=Aa,Aa=e;var i=Ut;e=Bt;var l=32-at(i)-1;i&=~(1<<l),a+=1;var r=32-at(t)+l;if(30<r){var o=l-l%5;r=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Ut=1<<32-at(t)+l|a<<l|i,Bt=r+e}else Ut=1<<r|a<<l|i,Bt=e}function Xr(e){e.return!==null&&(Ma(e,1),Gc(e,1,0))}function Vr(e){for(;e===al;)al=li[--ri],li[ri]=null,il=li[--ri],li[ri]=null;for(;e===Aa;)Aa=pt[--gt],pt[gt]=null,Bt=pt[--gt],pt[gt]=null,Ut=pt[--gt],pt[gt]=null}var Ke=null,ze=null,ce=!1,Ra=null,kt=!1,Qr=Error(c(519));function Da(e){var t=Error(c(418,""));throw Zi(mt(t,e)),Qr}function qc(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Ve]=e,t[We]=i,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<xn.length;a++)le(xn[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),ic(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Xn(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),lc(t,i.value,i.defaultValue,i.children),Xn(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||rf(t.textContent,a)?(i.popover!=null&&(le("beforetoggle",t),le("toggle",t)),i.onScroll!=null&&le("scroll",t),i.onScrollEnd!=null&&le("scrollend",t),i.onClick!=null&&(t.onclick=Bl),t=!0):t=!1,t||Da(e)}function Xc(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:Ke=Ke.return}}function Vi(e){if(e!==Ke)return!1;if(!ce)return Xc(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ss(e.type,e.memoizedProps)),a=!a),a&&ze&&Da(e),Xc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){ze=jt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}ze=null}}else t===27?(t=ze,ga(e.type)?(e=fs,fs=null,ze=e):ze=t):ze=Ke?jt(e.stateNode.nextSibling):null;return!0}function Qi(){ze=Ke=null,ce=!1}function Vc(){var e=Ra;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),Ra=null),e}function Zi(e){Ra===null?Ra=[e]:Ra.push(e)}var Zr=D(null),Oa=null,_t=null;function ta(e,t,a){U(Zr,t._currentValue),t._currentValue=a}function Yt(e){e._currentValue=Zr.current,_(Zr)}function Kr(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Wr(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var o=l.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=l;for(var h=0;h<t.length;h++)if(u.context===t[h]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),Kr(r.return,a,e),i||(o=null);break e}r=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),Kr(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Ki(e,t,a,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;it(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===et.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Sn):e=[Sn])}l=l.return}e!==null&&Wr(t,e,a,i),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Oa=e,_t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Qc(Oa,e)}function ll(e,t){return Oa===null&&Ha(e),Qc(e,t)}function Qc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},_t===null){if(e===null)throw Error(c(308));_t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _t=_t.next=t;return a}var Qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Zm=s.unstable_scheduleCallback,Km=s.unstable_NormalPriority,Me={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jr(){return{controller:new Qm,data:new Map,refCount:0}}function Wi(e){e.refCount--,e.refCount===0&&Zm(Km,function(){e.controller.abort()})}var Ji=null,Ir=0,oi=0,si=null;function Wm(e,t){if(Ji===null){var a=Ji=[];Ir=0,oi=Po(),si={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Ir++,t.then(Zc,Zc),t}function Zc(){if(--Ir===0&&Ji!==null){si!==null&&(si.status="fulfilled");var e=Ji;Ji=null,oi=0,si=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jm(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Kc=A.S;A.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wm(e,t),Kc!==null&&Kc(e,t)};var Ua=D(null);function Fr(){var e=Ua.current;return e!==null?e:xe.pooledCache}function rl(e,t){t===null?U(Ua,Ua.current):U(Ua,t.pool)}function Wc(){var e=Fr();return e===null?null:{parent:Me._currentValue,pool:e}}var Ii=Error(c(460)),Jc=Error(c(474)),ol=Error(c(542)),$r={then:function(){}};function Ic(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function Fc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sl,sl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e;default:if(typeof t.status=="string")t.then(sl,sl);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e}throw Fi=t,Ii}}var Fi=null;function $c(){if(Fi===null)throw Error(c(459));var e=Fi;return Fi=null,e}function Pc(e){if(e===Ii||e===ol)throw Error(c(483))}var aa=!1;function Pr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=el(e),Yc(e,null,a),t}return Pn(e,i,t,a),el(e)}function $i(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Zs(e,a)}}function to(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ao=!1;function Pi(){if(ao){var e=si;if(e!==null)throw e}}function en(e,t,a,i){ao=!1;var l=e.updateQueue;aa=!1;var r=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var h=u,j=h.next;h.next=null,o===null?r=j:o.next=j,o=h;var C=e.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==o&&(u===null?C.firstBaseUpdate=j:u.next=j,C.lastBaseUpdate=h))}if(r!==null){var R=l.baseState;o=0,C=j=h=null,u=r;do{var z=u.lane&-536870913,N=z!==u.lane;if(N?(re&z)===z:(i&z)===z){z!==0&&z===oi&&(ao=!0),C!==null&&(C=C.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var I=e,K=u;z=t;var he=a;switch(K.tag){case 1:if(I=K.payload,typeof I=="function"){R=I.call(he,R,z);break e}R=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=K.payload,z=typeof I=="function"?I.call(he,R,z):I,z==null)break e;R=k({},R,z);break e;case 2:aa=!0}}z=u.callback,z!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[z]:N.push(z))}else N={lane:z,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(j=C=N,h=R):C=C.next=N,o|=z;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;N=u,u=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);C===null&&(h=R),l.baseState=h,l.firstBaseUpdate=j,l.lastBaseUpdate=C,r===null&&(l.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=R}}function ed(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function td(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ed(a[e],t)}var ci=D(null),cl=D(0);function ad(e,t){e=Zt,U(cl,e),U(ci,t),Zt=e|t.baseLanes}function io(){U(cl,Zt),U(ci,ci.current)}function no(){Zt=cl.current,_(ci),_(cl)}var la=0,ae=null,fe=null,Ee=null,dl=!1,di=!1,Ba=!1,ul=0,tn=0,ui=null,Im=0;function Ne(){throw Error(c(321))}function lo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function ro(e,t,a,i,l,r){return la=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Yd:Ld,Ba=!1,r=a(i,l),Ba=!1,di&&(r=nd(t,a,i,l)),id(e),r}function id(e){A.H=xl;var t=fe!==null&&fe.next!==null;if(la=0,Ee=fe=ae=null,dl=!1,tn=0,ui=null,t)throw Error(c(300));e===null||Ue||(e=e.dependencies,e!==null&&nl(e)&&(Ue=!0))}function nd(e,t,a,i){ae=e;var l=0;do{if(di&&(ui=null),tn=0,di=!1,25<=l)throw Error(c(301));if(l+=1,Ee=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}A.H=ih,r=t(a,i)}while(di);return r}function Fm(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(ae.flags|=1024),t}function oo(){var e=ul!==0;return ul=0,e}function so(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function co(e){if(dl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dl=!1}la=0,Ee=fe=ae=null,di=!1,tn=ul=0,ui=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ae.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function Ce(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=Ee===null?ae.memoizedState:Ee.next;if(t!==null)Ee=t,fe=e;else{if(e===null)throw ae.alternate===null?Error(c(467)):Error(c(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Ee===null?ae.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,ui===null&&(ui=[]),e=Fc(ui,e,t),t=ae,(Ee===null?t.memoizedState:Ee.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Yd:Ld),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===ee)return Qe(e)}throw Error(c(438,String(e)))}function fo(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=uo(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Pe;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=Ce();return mo(t,fe,e)}function mo(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var o=l.next;l.next=r.next,r.next=o}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var u=o=null,h=null,j=t,C=!1;do{var R=j.lane&-536870913;if(R!==j.lane?(re&R)===R:(la&R)===R){var z=j.revertLane;if(z===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),R===oi&&(C=!0);else if((la&z)===z){j=j.next,z===oi&&(C=!0);continue}else R={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=R,o=r):h=h.next=R,ae.lanes|=z,fa|=z;R=j.action,Ba&&a(r,R),r=j.hasEagerState?j.eagerState:a(r,R)}else z={lane:R,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=z,o=r):h=h.next=z,ae.lanes|=R,fa|=R;j=j.next}while(j!==null&&j!==t);if(h===null?o=r:h.next=u,!it(r,e.memoizedState)&&(Ue=!0,C&&(a=si,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=h,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ho(e){var t=Ce(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do r=e(r,o.action),o=o.next;while(o!==l);it(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,i]}function ld(e,t,a){var i=ae,l=Ce(),r=ce;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!it((fe||l).memoizedState,a);o&&(l.memoizedState=a,Ue=!0),l=l.queue;var u=sd.bind(null,i,l,e);if(nn(2048,8,u,[e]),l.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(i.flags|=2048,fi(9,hl(),od.bind(null,i,l,a,t),null),xe===null)throw Error(c(349));r||(la&124)!==0||rd(i,t,a)}return a}function rd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=uo(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function od(e,t,a,i){t.value=a,t.getSnapshot=i,cd(t)&&dd(e)}function sd(e,t,a){return a(function(){cd(t)&&dd(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function dd(e){var t=ii(e,2);t!==null&&ct(t,e,2)}function po(e){var t=Ie();if(typeof e=="function"){var a=e;if(e=a(),Ba){$t(!0);try{a()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function ud(e,t,a,i){return e.baseState=a,mo(e,fe,typeof i=="function"?i:Lt)}function $m(e,t,a,i,l){if(gl(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};A.T!==null?a(!0):r.isTransition=!1,i(r),a=t.pending,a===null?(r.next=t.pending=r,fd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function fd(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=A.T,o={};A.T=o;try{var u=a(l,i),h=A.S;h!==null&&h(o,u),md(e,t,u)}catch(j){go(e,t,j)}finally{A.T=r}}else try{r=a(l,i),md(e,t,r)}catch(j){go(e,t,j)}}function md(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){hd(e,t,i)},function(i){return go(e,t,i)}):hd(e,t,a)}function hd(e,t,a){t.status="fulfilled",t.value=a,pd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,fd(e,a)))}function go(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,pd(t),t=t.next;while(t!==i)}e.action=null}function pd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gd(e,t){return t}function xd(e,t){if(ce){var a=xe.formState;if(a!==null){e:{var i=ae;if(ce){if(ze){t:{for(var l=ze,r=kt;l.nodeType!==8;){if(!r){l=null;break t}if(l=jt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){ze=jt(l.nextSibling),i=l.data==="F!";break e}}Da(i)}i=!1}i&&(t=a[0])}}return a=Ie(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gd,lastRenderedState:t},a.queue=i,a=Ud.bind(null,ae,i),i.dispatch=a,i=po(!1),r=wo.bind(null,ae,!1,i.queue),i=Ie(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=$m.bind(null,ae,l,r,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function vd(e){var t=Ce();return yd(t,fe,e)}function yd(e,t,a){if(t=mo(e,t,gd)[0],e=ml(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=an(t)}catch(o){throw o===Ii?ol:o}else i=t;t=Ce();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,fi(9,hl(),Pm.bind(null,l,a),null)),[i,r,e]}function Pm(e,t){e.action=t}function bd(e){var t=Ce(),a=fe;if(a!==null)return yd(t,a,e);Ce(),t=t.memoizedState,a=Ce();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function fi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ae.updateQueue,t===null&&(t=uo(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function wd(){return Ce().memoizedState}function pl(e,t,a,i){var l=Ie();i=i===void 0?null:i,ae.flags|=e,l.memoizedState=fi(1|t,hl(),a,i)}function nn(e,t,a,i){var l=Ce();i=i===void 0?null:i;var r=l.memoizedState.inst;fe!==null&&i!==null&&lo(i,fe.memoizedState.deps)?l.memoizedState=fi(t,r,a,i):(ae.flags|=e,l.memoizedState=fi(1|t,r,a,i))}function jd(e,t){pl(8390656,8,e,t)}function Sd(e,t){nn(2048,8,e,t)}function zd(e,t){return nn(4,2,e,t)}function kd(e,t){return nn(4,4,e,t)}function Nd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,a){a=a!=null?a.concat([e]):null,nn(4,4,Nd.bind(null,t,e),a)}function xo(){}function Ed(e,t){var a=Ce();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&lo(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Cd(e,t){var a=Ce();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&lo(t,i[1]))return i[0];if(i=e(),Ba){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[i,t],i}function vo(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Ru(),ae.lanes|=e,fa|=e,a)}function Ad(e,t,a,i){return it(a,t)?a:ci.current!==null?(e=vo(e,a,i),it(e,t)||(Ue=!0),e):(la&42)===0?(Ue=!0,e.memoizedState=a):(e=Ru(),ae.lanes|=e,fa|=e,t)}function Md(e,t,a,i,l){var r=B.p;B.p=r!==0&&8>r?r:8;var o=A.T,u={};A.T=u,wo(e,!1,t,a);try{var h=l(),j=A.S;if(j!==null&&j(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=Jm(h,i);ln(e,t,C,st(e))}else ln(e,t,i,st(e))}catch(R){ln(e,t,{then:function(){},status:"rejected",reason:R},st())}finally{B.p=r,A.T=o}}function eh(){}function yo(e,t,a,i){if(e.tag!==5)throw Error(c(476));var l=Rd(e).queue;Md(e,l,t,J,a===null?eh:function(){return Dd(e),a(i)})}function Rd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dd(e){var t=Rd(e).next.queue;ln(e,t,{},st())}function bo(){return Qe(Sn)}function Od(){return Ce().memoizedState}function Hd(){return Ce().memoizedState}function th(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=ia(a);var i=na(t,e,a);i!==null&&(ct(i,t,a),$i(i,t,a)),t={cache:Jr()},e.payload=t;return}t=t.return}}function ah(e,t,a){var i=st();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?Bd(t,a):(a=Yr(e,t,a,i),a!==null&&(ct(a,e,i),_d(a,t,i)))}function Ud(e,t,a){var i=st();ln(e,t,a,i)}function ln(e,t,a,i){var l={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))Bd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,u=r(o,a);if(l.hasEagerState=!0,l.eagerState=u,it(u,o))return Pn(e,t,l,0),xe===null&&$n(),!1}catch{}finally{}if(a=Yr(e,t,l,i),a!==null)return ct(a,e,i),_d(a,t,i),!0}return!1}function wo(e,t,a,i){if(i={lane:2,revertLane:Po(),action:i,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(t)throw Error(c(479))}else t=Yr(e,a,i,2),t!==null&&ct(t,e,2)}function gl(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Bd(e,t){di=dl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _d(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Zs(e,a)}}var xl={readContext:Qe,use:fl,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Yd={readContext:Qe,use:fl,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:jd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pl(4194308,4,Nd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){pl(4,2,e,t)},useMemo:function(e,t){var a=Ie();t=t===void 0?null:t;var i=e();if(Ba){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Ie();if(a!==void 0){var l=a(t);if(Ba){$t(!0);try{a(t)}finally{$t(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=ah.bind(null,ae,e),[i.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,a=Ud.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ie();return vo(a,e,t)},useTransition:function(){var e=po(!1);return e=Md.bind(null,ae,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ae,l=Ie();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),xe===null)throw Error(c(349));(re&124)!==0||rd(i,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,jd(sd.bind(null,i,r,e),[e]),i.flags|=2048,fi(9,hl(),od.bind(null,i,r,a,t),null),a},useId:function(){var e=Ie(),t=xe.identifierPrefix;if(ce){var a=Bt,i=Ut;a=(i&~(1<<32-at(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=ul++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Im++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:bo,useFormState:xd,useActionState:xd,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wo.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return Ie().memoizedState=th.bind(null,ae)}},Ld={readContext:Qe,use:fl,useCallback:Ed,useContext:Qe,useEffect:Sd,useImperativeHandle:Td,useInsertionEffect:zd,useLayoutEffect:kd,useMemo:Cd,useReducer:ml,useRef:wd,useState:function(){return ml(Lt)},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ce();return Ad(a,fe.memoizedState,e,t)},useTransition:function(){var e=ml(Lt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:ld,useId:Od,useHostTransitionStatus:bo,useFormState:vd,useActionState:vd,useOptimistic:function(e,t){var a=Ce();return ud(a,fe,e,t)},useMemoCache:fo,useCacheRefresh:Hd},ih={readContext:Qe,use:fl,useCallback:Ed,useContext:Qe,useEffect:Sd,useImperativeHandle:Td,useInsertionEffect:zd,useLayoutEffect:kd,useMemo:Cd,useReducer:ho,useRef:wd,useState:function(){return ho(Lt)},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ce();return fe===null?vo(a,e,t):Ad(a,fe.memoizedState,e,t)},useTransition:function(){var e=ho(Lt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:ld,useId:Od,useHostTransitionStatus:bo,useFormState:bd,useActionState:bd,useOptimistic:function(e,t){var a=Ce();return fe!==null?ud(a,fe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fo,useCacheRefresh:Hd},mi=null,rn=0;function vl(e){var t=rn;return rn+=1,mi===null&&(mi=[]),Fc(mi,e,t)}function on(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yl(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gd(e){var t=e._init;return t(e._payload)}function qd(e){function t(y,x){if(e){var w=y.deletions;w===null?(y.deletions=[x],y.flags|=16):w.push(x)}}function a(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function i(y){for(var x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function l(y,x){return y=Ht(y,x),y.index=0,y.sibling=null,y}function r(y,x,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<x?(y.flags|=67108866,x):w):(y.flags|=67108866,x)):(y.flags|=1048576,x)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function u(y,x,w,M){return x===null||x.tag!==6?(x=Gr(w,y.mode,M),x.return=y,x):(x=l(x,w),x.return=y,x)}function h(y,x,w,M){var L=w.type;return L===V?C(y,x,w.props.children,M,w.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oe&&Gd(L)===x.type)?(x=l(x,w.props),on(x,w),x.return=y,x):(x=tl(w.type,w.key,w.props,null,y.mode,M),on(x,w),x.return=y,x)}function j(y,x,w,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=qr(w,y.mode,M),x.return=y,x):(x=l(x,w.children||[]),x.return=y,x)}function C(y,x,w,M,L){return x===null||x.tag!==7?(x=Ca(w,y.mode,M,L),x.return=y,x):(x=l(x,w),x.return=y,x)}function R(y,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Gr(""+x,y.mode,w),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return w=tl(x.type,x.key,x.props,null,y.mode,w),on(w,x),w.return=y,w;case Y:return x=qr(x,y.mode,w),x.return=y,x;case Oe:var M=x._init;return x=M(x._payload),R(y,x,w)}if(Xe(x)||qe(x))return x=Ca(x,y.mode,w,null),x.return=y,x;if(typeof x.then=="function")return R(y,vl(x),w);if(x.$$typeof===ee)return R(y,ll(y,x),w);yl(y,x)}return null}function z(y,x,w,M){var L=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return L!==null?null:u(y,x,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case H:return w.key===L?h(y,x,w,M):null;case Y:return w.key===L?j(y,x,w,M):null;case Oe:return L=w._init,w=L(w._payload),z(y,x,w,M)}if(Xe(w)||qe(w))return L!==null?null:C(y,x,w,M,null);if(typeof w.then=="function")return z(y,x,vl(w),M);if(w.$$typeof===ee)return z(y,x,ll(y,w),M);yl(y,w)}return null}function N(y,x,w,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return y=y.get(w)||null,u(x,y,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case H:return y=y.get(M.key===null?w:M.key)||null,h(x,y,M,L);case Y:return y=y.get(M.key===null?w:M.key)||null,j(x,y,M,L);case Oe:var ie=M._init;return M=ie(M._payload),N(y,x,w,M,L)}if(Xe(M)||qe(M))return y=y.get(w)||null,C(x,y,M,L,null);if(typeof M.then=="function")return N(y,x,w,vl(M),L);if(M.$$typeof===ee)return N(y,x,w,ll(x,M),L);yl(x,M)}return null}function I(y,x,w,M){for(var L=null,ie=null,X=x,W=x=0,_e=null;X!==null&&W<w.length;W++){X.index>W?(_e=X,X=null):_e=X.sibling;var se=z(y,X,w[W],M);if(se===null){X===null&&(X=_e);break}e&&X&&se.alternate===null&&t(y,X),x=r(se,x,W),ie===null?L=se:ie.sibling=se,ie=se,X=_e}if(W===w.length)return a(y,X),ce&&Ma(y,W),L;if(X===null){for(;W<w.length;W++)X=R(y,w[W],M),X!==null&&(x=r(X,x,W),ie===null?L=X:ie.sibling=X,ie=X);return ce&&Ma(y,W),L}for(X=i(X);W<w.length;W++)_e=N(X,y,W,w[W],M),_e!==null&&(e&&_e.alternate!==null&&X.delete(_e.key===null?W:_e.key),x=r(_e,x,W),ie===null?L=_e:ie.sibling=_e,ie=_e);return e&&X.forEach(function(wa){return t(y,wa)}),ce&&Ma(y,W),L}function K(y,x,w,M){if(w==null)throw Error(c(151));for(var L=null,ie=null,X=x,W=x=0,_e=null,se=w.next();X!==null&&!se.done;W++,se=w.next()){X.index>W?(_e=X,X=null):_e=X.sibling;var wa=z(y,X,se.value,M);if(wa===null){X===null&&(X=_e);break}e&&X&&wa.alternate===null&&t(y,X),x=r(wa,x,W),ie===null?L=wa:ie.sibling=wa,ie=wa,X=_e}if(se.done)return a(y,X),ce&&Ma(y,W),L;if(X===null){for(;!se.done;W++,se=w.next())se=R(y,se.value,M),se!==null&&(x=r(se,x,W),ie===null?L=se:ie.sibling=se,ie=se);return ce&&Ma(y,W),L}for(X=i(X);!se.done;W++,se=w.next())se=N(X,y,W,se.value,M),se!==null&&(e&&se.alternate!==null&&X.delete(se.key===null?W:se.key),x=r(se,x,W),ie===null?L=se:ie.sibling=se,ie=se);return e&&X.forEach(function(np){return t(y,np)}),ce&&Ma(y,W),L}function he(y,x,w,M){if(typeof w=="object"&&w!==null&&w.type===V&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case H:e:{for(var L=w.key;x!==null;){if(x.key===L){if(L=w.type,L===V){if(x.tag===7){a(y,x.sibling),M=l(x,w.props.children),M.return=y,y=M;break e}}else if(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oe&&Gd(L)===x.type){a(y,x.sibling),M=l(x,w.props),on(M,w),M.return=y,y=M;break e}a(y,x);break}else t(y,x);x=x.sibling}w.type===V?(M=Ca(w.props.children,y.mode,M,w.key),M.return=y,y=M):(M=tl(w.type,w.key,w.props,null,y.mode,M),on(M,w),M.return=y,y=M)}return o(y);case Y:e:{for(L=w.key;x!==null;){if(x.key===L)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){a(y,x.sibling),M=l(x,w.children||[]),M.return=y,y=M;break e}else{a(y,x);break}else t(y,x);x=x.sibling}M=qr(w,y.mode,M),M.return=y,y=M}return o(y);case Oe:return L=w._init,w=L(w._payload),he(y,x,w,M)}if(Xe(w))return I(y,x,w,M);if(qe(w)){if(L=qe(w),typeof L!="function")throw Error(c(150));return w=L.call(w),K(y,x,w,M)}if(typeof w.then=="function")return he(y,x,vl(w),M);if(w.$$typeof===ee)return he(y,x,ll(y,w),M);yl(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(a(y,x.sibling),M=l(x,w),M.return=y,y=M):(a(y,x),M=Gr(w,y.mode,M),M.return=y,y=M),o(y)):a(y,x)}return function(y,x,w,M){try{rn=0;var L=he(y,x,w,M);return mi=null,L}catch(X){if(X===Ii||X===ol)throw X;var ie=nt(29,X,null,y.mode);return ie.lanes=M,ie.return=y,ie}finally{}}}var hi=qd(!0),Xd=qd(!1),xt=D(null),Nt=null;function ra(e){var t=e.alternate;U(Re,Re.current&1),U(xt,e),Nt===null&&(t===null||ci.current!==null||t.memoizedState!==null)&&(Nt=e)}function Vd(e){if(e.tag===22){if(U(Re,Re.current),U(xt,e),Nt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Nt=e)}}else oa()}function oa(){U(Re,Re.current),U(xt,xt.current)}function Gt(e){_(xt),Nt===e&&(Nt=null),_(Re)}var Re=D(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||us(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function jo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:k({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var So={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=st(),l=ia(i);l.payload=t,a!=null&&(l.callback=a),t=na(e,l,i),t!==null&&(ct(t,e,i),$i(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=st(),l=ia(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=na(e,l,i),t!==null&&(ct(t,e,i),$i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),i=ia(a);i.tag=2,t!=null&&(i.callback=t),t=na(e,i,a),t!==null&&(ct(t,e,a),$i(t,e,a))}};function Qd(e,t,a,i,l,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!qi(a,i)||!qi(l,r):!0}function Zd(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function _a(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=k({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kd(e){wl(e)}function Wd(e){console.error(e)}function Jd(e){wl(e)}function jl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Id(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zo(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,t)},a}function Fd(e){return e=ia(e),e.tag=3,e}function $d(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){Id(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Id(t,a,i),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function nh(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Ki(t,a,l,!0),a=xt.current,a!==null){switch(a.tag){case 13:return Nt===null?Wo():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===$r?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Io(e,i,l)),!1;case 22:return a.flags|=65536,i===$r?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Io(e,i,l)),!1}throw Error(c(435,a.tag))}return Io(e,i,l),Wo(),!1}if(ce)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Qr&&(e=Error(c(422),{cause:i}),Zi(mt(e,a)))):(i!==Qr&&(t=Error(c(423),{cause:i}),Zi(mt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=mt(i,a),l=zo(e.stateNode,i,l),to(e,l),ke!==4&&(ke=2)),!1;var r=Error(c(520),{cause:i});if(r=mt(r,a),hn===null?hn=[r]:hn.push(r),ke!==4&&(ke=2),t===null)return!0;i=mt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=zo(a.stateNode,i,e),to(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Fd(l),$d(l,e,a,i),to(a,l),!1}a=a.return}while(a!==null);return!1}var Pd=Error(c(461)),Ue=!1;function Ye(e,t,a,i){t.child=e===null?Xd(t,null,a,i):hi(t,e.child,a,i)}function eu(e,t,a,i,l){a=a.render;var r=t.ref;if("ref"in i){var o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}else o=i;return Ha(t),i=ro(e,t,a,o,r,l),u=oo(),e!==null&&!Ue?(so(e,t,l),qt(e,t,l)):(ce&&u&&Xr(t),t.flags|=1,Ye(e,t,i,l),t.child)}function tu(e,t,a,i,l){if(e===null){var r=a.type;return typeof r=="function"&&!Lr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,au(e,t,r,i,l)):(e=tl(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ro(e,l)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:qi,a(o,i)&&e.ref===t.ref)return qt(e,t,l)}return t.flags|=1,e=Ht(r,i),e.ref=t.ref,e.return=t,t.child=e}function au(e,t,a,i,l){if(e!==null){var r=e.memoizedProps;if(qi(r,i)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=i=r,Ro(e,l))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,qt(e,t,l)}return ko(e,t,a,i,l)}function iu(e,t,a){var i=t.pendingProps,l=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return nu(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(t,r!==null?r.cachePool:null),r!==null?ad(t,r):io(),Vd(t);else return t.lanes=t.childLanes=536870912,nu(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(rl(t,r.cachePool),ad(t,r),oa(),t.memoizedState=null):(e!==null&&rl(t,null),io(),oa());return Ye(e,t,l,a),t.child}function nu(e,t,a,i){var l=Fr();return l=l===null?null:{parent:Me._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&rl(t,null),io(),Vd(t),e!==null&&Ki(e,t,i,!0),null}function Sl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ko(e,t,a,i,l){return Ha(t),a=ro(e,t,a,i,void 0,l),i=oo(),e!==null&&!Ue?(so(e,t,l),qt(e,t,l)):(ce&&i&&Xr(t),t.flags|=1,Ye(e,t,a,l),t.child)}function lu(e,t,a,i,l,r){return Ha(t),t.updateQueue=null,a=nd(t,i,a,l),id(e),i=oo(),e!==null&&!Ue?(so(e,t,r),qt(e,t,r)):(ce&&i&&Xr(t),t.flags|=1,Ye(e,t,a,r),t.child)}function ru(e,t,a,i,l){if(Ha(t),t.stateNode===null){var r=ni,o=a.contextType;typeof o=="object"&&o!==null&&(r=Qe(o)),r=new a(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=So,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Pr(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Qe(o):ni,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(jo(t,a,o,i),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&So.enqueueReplaceState(r,r.state,null),en(t,i,r,l),Pi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,h=_a(a,u);r.props=h;var j=r.context,C=a.contextType;o=ni,typeof C=="object"&&C!==null&&(o=Qe(C));var R=a.getDerivedStateFromProps;C=typeof R=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,C||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||j!==o)&&Zd(t,r,i,o),aa=!1;var z=t.memoizedState;r.state=z,en(t,i,r,l),Pi(),j=t.memoizedState,u||z!==j||aa?(typeof R=="function"&&(jo(t,a,R,i),j=t.memoizedState),(h=aa||Qd(t,a,h,i,z,j,o))?(C||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=j),r.props=i,r.state=j,r.context=o,i=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,eo(e,t),o=t.memoizedProps,C=_a(a,o),r.props=C,R=t.pendingProps,z=r.context,j=a.contextType,h=ni,typeof j=="object"&&j!==null&&(h=Qe(j)),u=a.getDerivedStateFromProps,(j=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==R||z!==h)&&Zd(t,r,i,h),aa=!1,z=t.memoizedState,r.state=z,en(t,i,r,l),Pi();var N=t.memoizedState;o!==R||z!==N||aa||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof u=="function"&&(jo(t,a,u,i),N=t.memoizedState),(C=aa||Qd(t,a,C,i,z,N,h)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(j||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,N,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,N,h)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),r.props=i,r.state=N,r.context=h,i=C):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Sl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=hi(t,e.child,null,l),t.child=hi(t,null,a,l)):Ye(e,t,a,l),t.memoizedState=r.state,e=t.child):e=qt(e,t,l),e}function ou(e,t,a,i){return Qi(),t.flags|=256,Ye(e,t,a,i),t.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function To(e){return{baseLanes:e,cachePool:Wc()}}function Eo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=vt),e}function su(e,t,a){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?ra(t):oa(),ce){var u=ze,h;if(h=u){e:{for(h=u,u=kt;h.nodeType!==8;){if(!u){u=null;break e}if(h=jt(h.nextSibling),h===null){u=null;break e}}u=h}u!==null?(t.memoizedState={dehydrated:u,treeContext:Aa!==null?{id:Ut,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},h=nt(18,null,null,0),h.stateNode=u,h.return=t,t.child=h,Ke=t,ze=null,h=!0):h=!1}h||Da(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return us(u)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return u=i.children,i=i.fallback,l?(oa(),l=t.mode,u=zl({mode:"hidden",children:u},l),i=Ca(i,l,a,null),u.return=t,i.return=t,u.sibling=i,t.child=u,l=t.child,l.memoizedState=To(a),l.childLanes=Eo(e,o,a),t.memoizedState=No,i):(ra(t),Co(t,u))}if(h=e.memoizedState,h!==null&&(u=h.dehydrated,u!==null)){if(r)t.flags&256?(ra(t),t.flags&=-257,t=Ao(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),l=i.fallback,u=t.mode,i=zl({mode:"visible",children:i.children},u),l=Ca(l,u,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,hi(t,e.child,null,a),i=t.child,i.memoizedState=To(a),i.childLanes=Eo(e,o,a),t.memoizedState=No,t=l);else if(ra(t),us(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var j=o.dgst;o=j,i=Error(c(419)),i.stack="",i.digest=o,Zi({value:i,source:null,stack:null}),t=Ao(e,t,a)}else if(Ue||Ki(e,t,a,!1),o=(a&e.childLanes)!==0,Ue||o){if(o=xe,o!==null&&(i=a&-a,i=(i&42)!==0?1:ur(i),i=(i&(o.suspendedLanes|a))!==0?0:i,i!==0&&i!==h.retryLane))throw h.retryLane=i,ii(e,i),ct(o,e,i),Pd;u.data==="$?"||Wo(),t=Ao(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,ze=jt(u.nextSibling),Ke=t,ce=!0,Ra=null,kt=!1,e!==null&&(pt[gt++]=Ut,pt[gt++]=Bt,pt[gt++]=Aa,Ut=e.id,Bt=e.overflow,Aa=t),t=Co(t,i.children),t.flags|=4096);return t}return l?(oa(),l=i.fallback,u=t.mode,h=e.child,j=h.sibling,i=Ht(h,{mode:"hidden",children:i.children}),i.subtreeFlags=h.subtreeFlags&65011712,j!==null?l=Ht(j,l):(l=Ca(l,u,a,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,u=e.child.memoizedState,u===null?u=To(a):(h=u.cachePool,h!==null?(j=Me._currentValue,h=h.parent!==j?{parent:j,pool:j}:h):h=Wc(),u={baseLanes:u.baseLanes|a,cachePool:h}),l.memoizedState=u,l.childLanes=Eo(e,o,a),t.memoizedState=No,i):(ra(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Co(e,t){return t=zl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zl(e,t){return e=nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ao(e,t,a){return hi(t,e.child,null,a),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cu(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Kr(e.return,t,a)}function Mo(e,t,a,i,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=a,r.tailMode=l)}function du(e,t,a){var i=t.pendingProps,l=i.revealOrder,r=i.tail;if(Ye(e,t,i.children,a),i=Re.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,a,t);else if(e.tag===19)cu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(U(Re,i),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Mo(t,!1,l,a,r);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Mo(t,!0,a,null,r);break;case"together":Mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ki(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function lh(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ta(t,Me,e.memoizedState.cache),Qi();break;case 27:case 5:rr(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?su(e,t,a):(ra(t),e=qt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Ki(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return du(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Re,Re.current),i)break;return null;case 22:case 23:return t.lanes=0,iu(e,t,a);case 24:ta(t,Me,e.memoizedState.cache)}return qt(e,t,a)}function uu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Ro(e,a)&&(t.flags&128)===0)return Ue=!1,lh(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,ce&&(t.flags&1048576)!==0&&Gc(t,il,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Lr(i)?(e=_a(i,e),t.tag=1,t=ru(null,t,i,e,a)):(t.tag=0,t=ko(null,t,i,e,a));else{if(i!=null){if(l=i.$$typeof,l===be){t.tag=11,t=eu(null,t,i,e,a);break e}else if(l===Ae){t.tag=14,t=tu(null,t,i,e,a);break e}}throw t=Sa(i)||i,Error(c(306,t,""))}}return t;case 0:return ko(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=_a(i,t.pendingProps),ru(e,t,i,l,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,eo(e,t),en(t,i,null,a);var o=t.memoizedState;if(i=o.cache,ta(t,Me,i),i!==r.cache&&Wr(t,[Me],a,!0),Pi(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ou(e,t,i,a);break e}else if(i!==l){l=mt(Error(c(424)),t),Zi(l),t=ou(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=jt(e.firstChild),Ke=t,ce=!0,Ra=null,kt=!0,a=Xd(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qi(),i===l){t=qt(e,t,a);break e}Ye(e,t,i,a)}t=t.child}return t;case 26:return Sl(e,t),e===null?(a=gf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,i=_l(P.current).createElement(a),i[Ve]=t,i[We]=e,Ge(i,a,e),He(i),t.stateNode=i):t.memoizedState=gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rr(t),e===null&&ce&&(i=t.stateNode=mf(t.type,t.pendingProps,P.current),Ke=t,kt=!0,l=ze,ga(t.type)?(fs=l,ze=jt(i.firstChild)):ze=l),Ye(e,t,t.pendingProps.children,a),Sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=i=ze)&&(i=Dh(i,t.type,t.pendingProps,kt),i!==null?(t.stateNode=i,Ke=t,ze=jt(i.firstChild),kt=!1,l=!0):l=!1),l||Da(t)),rr(t),l=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,ss(l,r)?i=null:o!==null&&ss(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ro(e,t,Fm,null,null,a),Sn._currentValue=l),Sl(e,t),Ye(e,t,i,a),t.child;case 6:return e===null&&ce&&((e=a=ze)&&(a=Oh(a,t.pendingProps,kt),a!==null?(t.stateNode=a,Ke=t,ze=null,e=!0):e=!1),e||Da(t)),null;case 13:return su(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hi(t,null,i,a):Ye(e,t,i,a),t.child;case 11:return eu(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,ta(t,t.type,i.value),Ye(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Ha(t),l=Qe(l),i=i(l),t.flags|=1,Ye(e,t,i,a),t.child;case 14:return tu(e,t,t.type,t.pendingProps,a);case 15:return au(e,t,t.type,t.pendingProps,a);case 19:return du(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=zl(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ht(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return iu(e,t,a);case 24:return Ha(t),i=Qe(Me),e===null?(l=Fr(),l===null&&(l=xe,r=Jr(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:i,cache:l},Pr(t),ta(t,Me,l)):((e.lanes&a)!==0&&(eo(e,t),en(t,null,null,a),Pi()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,Me,i)):(i=r.cache,ta(t,Me,i),i!==l.cache&&Wr(t,[Me],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Xt(e){e.flags|=4}function fu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wf(t)){if(t=xt.current,t!==null&&((re&4194048)===re?Nt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Nt))throw Fi=$r,Jc;e.flags|=8192}}function kl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vs():536870912,e.lanes|=t,vi|=t)}function sn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function rh(e,t,a){var i=t.pendingProps;switch(Vr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yt(Me),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vc())),we(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(we(t),fu(t,a)):(we(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),we(t),fu(t,a)):(we(t),t.flags&=-16777217):(e.memoizedProps!==i&&Xt(t),we(t),t.flags&=-16777217),null;case 27:Un(t),a=P.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return we(t),null}e=Z.current,Vi(t)?qc(t):(e=mf(l,i,a),t.stateNode=e,Xt(t))}return we(t),null;case 5:if(Un(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return we(t),null}if(e=Z.current,Vi(t))qc(t);else{switch(l=_l(P.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(a,{is:i.is}):l.createElement(a)}}e[Ve]=t,e[We]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ge(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return we(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=P.current,Vi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=Ke,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||rf(e.nodeValue,a)),e||Da(t)}else e=_l(e).createTextNode(i),e[Ve]=t,t.stateNode=e}return we(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Vi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ve]=t}else Qi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else l=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),kl(t,t.updateQueue),we(t),null;case 4:return Ft(),e===null&&is(t.stateNode.containerInfo),we(t),null;case 10:return Yt(t.type),we(t),null;case 19:if(_(Re),l=t.memoizedState,l===null)return we(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)sn(l,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=bl(e),r!==null){for(t.flags|=128,sn(l,!1),e=r.updateQueue,t.updateQueue=e,kl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Lc(a,e),a=a.sibling;return U(Re,Re.current&1|2),t.child}e=e.sibling}l.tail!==null&&zt()>El&&(t.flags|=128,i=!0,sn(l,!1),t.lanes=4194304)}else{if(!i)if(e=bl(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,kl(t,e),sn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ce)return we(t),null}else 2*zt()-l.renderingStartTime>El&&a!==536870912&&(t.flags|=128,i=!0,sn(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=zt(),t.sibling=null,e=Re.current,U(Re,i?e&1|2:e&1),t):(we(t),null);case 22:case 23:return Gt(t),no(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&kl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&_(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(Me),we(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function oh(e,t){switch(Vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(Me),Ft(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Un(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Re),null;case 4:return Ft(),null;case 10:return Yt(t.type),null;case 22:case 23:return Gt(t),no(),e!==null&&_(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(Me),null;case 25:return null;default:return null}}function mu(e,t){switch(Vr(t),t.tag){case 3:Yt(Me),Ft();break;case 26:case 27:case 5:Un(t);break;case 4:Ft();break;case 13:Gt(t);break;case 19:_(Re);break;case 10:Yt(t.type);break;case 22:case 23:Gt(t),no(),e!==null&&_(Ua);break;case 24:Yt(Me)}}function cn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var r=a.create,o=a.inst;i=r(),o.destroy=i}a=a.next}while(a!==l)}}catch(u){ge(t,t.return,u)}}function sa(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var o=i.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var h=a,j=u;try{j()}catch(C){ge(l,h,C)}}}i=i.next}while(i!==r)}}catch(C){ge(t,t.return,C)}}function hu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{td(t,a)}catch(i){ge(e,e.return,i)}}}function pu(e,t,a){a.props=_a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ge(e,t,i)}}function dn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){ge(e,t,l)}}function Tt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){ge(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ge(e,t,l)}else a.current=null}function gu(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){ge(e,e.return,l)}}function Do(e,t,a){try{var i=e.stateNode;Eh(i,e.type,a,t),i[We]=t}catch(l){ge(e,e.return,l)}}function xu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Bl));else if(i!==4&&(i===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ho(e,t,a),e=e.sibling;e!==null;)Ho(e,t,a),e=e.sibling}function Nl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,t,a),e=e.sibling;e!==null;)Nl(e,t,a),e=e.sibling}function vu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ge(t,i,a),t[Ve]=e,t[We]=a}catch(r){ge(e,e.return,r)}}var Vt=!1,Te=!1,Uo=!1,yu=typeof WeakSet=="function"?WeakSet:Set,Be=null;function sh(e,t){if(e=e.containerInfo,rs=Vl,e=Ac(e),Dr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,u=-1,h=-1,j=0,C=0,R=e,z=null;t:for(;;){for(var N;R!==a||l!==0&&R.nodeType!==3||(u=o+l),R!==r||i!==0&&R.nodeType!==3||(h=o+i),R.nodeType===3&&(o+=R.nodeValue.length),(N=R.firstChild)!==null;)z=R,R=N;for(;;){if(R===e)break t;if(z===a&&++j===l&&(u=o),z===r&&++C===i&&(h=o),(N=R.nextSibling)!==null)break;R=z,z=R.parentNode}R=N}a=u===-1||h===-1?null:{start:u,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(os={focusedElem:e,selectionRange:a},Vl=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,i=a.stateNode;try{var I=_a(a.type,l,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(I,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ds(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ds(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function bu(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),i&4&&cn(5,a);break;case 1:if(ca(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(a,a.return,o)}else{var l=_a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(a,a.return,o)}}i&64&&hu(a),i&512&&dn(a,a.return);break;case 3:if(ca(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{td(e,t)}catch(o){ge(a,a.return,o)}}break;case 27:t===null&&i&4&&vu(a);case 26:case 5:ca(e,a),t===null&&i&4&&gu(a),i&512&&dn(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),i&4&&Su(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xh.bind(null,a),Hh(e,a))));break;case 22:if(i=a.memoizedState!==null||Vt,!i){t=t!==null&&t.memoizedState!==null||Te,l=Vt;var r=Te;Vt=i,(Te=t)&&!r?da(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Vt=l,Te=r}break;case 30:break;default:ca(e,a)}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,Fe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)ju(e,t,a),a=a.sibling}function ju(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ai,a)}catch{}switch(a.tag){case 26:Te||Tt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Tt(a,t);var i=ye,l=Fe;ga(a.type)&&(ye=a.stateNode,Fe=!1),Qt(e,t,a),yn(a.stateNode),ye=i,Fe=l;break;case 5:Te||Tt(a,t);case 6:if(i=ye,l=Fe,ye=null,Qt(e,t,a),ye=i,Fe=l,ye!==null)if(Fe)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(r){ge(a,t,r)}else try{ye.removeChild(a.stateNode)}catch(r){ge(a,t,r)}break;case 18:ye!==null&&(Fe?(e=ye,uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):uf(ye,a.stateNode));break;case 4:i=ye,l=Fe,ye=a.stateNode.containerInfo,Fe=!0,Qt(e,t,a),ye=i,Fe=l;break;case 0:case 11:case 14:case 15:Te||sa(2,a,t),Te||sa(4,a,t),Qt(e,t,a);break;case 1:Te||(Tt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&pu(a,t,i)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Te=(i=Te)||a.memoizedState!==null,Qt(e,t,a),Te=i;break;default:Qt(e,t,a)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){ge(t,t.return,a)}}function ch(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yu),t;default:throw Error(c(435,e.tag))}}function Bo(e,t){var a=ch(e);t.forEach(function(i){var l=vh.bind(null,e,i);a.has(i)||(a.add(i),i.then(l,l))})}function lt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],r=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ga(u.type)){ye=u.stateNode,Fe=!1;break e}break;case 5:ye=u.stateNode,Fe=!1;break e;case 3:case 4:ye=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(ye===null)throw Error(c(160));ju(r,o,l),ye=null,Fe=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)zu(t,e),t=t.sibling}var wt=null;function zu(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),rt(e),i&4&&(sa(3,e,e.return),cn(3,e),sa(5,e,e.return));break;case 1:lt(t,e),rt(e),i&512&&(Te||a===null||Tt(a,a.return)),i&64&&Vt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=wt;if(lt(t,e),rt(e),i&512&&(Te||a===null||Tt(a,a.return)),i&4){var r=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Di]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),Ge(r,i,a),r[Ve]=e,He(r),i=r;break e;case"link":var o=yf("link","href",l).get(i+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(r=o[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}r=l.createElement(i),Ge(r,i,a),l.head.appendChild(r);break;case"meta":if(o=yf("meta","content",l).get(i+(a.content||""))){for(u=0;u<o.length;u++)if(r=o[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}r=l.createElement(i),Ge(r,i,a),l.head.appendChild(r);break;default:throw Error(c(468,i))}r[Ve]=e,He(r),i=r}e.stateNode=i}else bf(l,e.type,e.stateNode);else e.stateNode=vf(l,i,e.memoizedProps);else r!==i?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,i===null?bf(l,e.type,e.stateNode):vf(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Do(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),rt(e),i&512&&(Te||a===null||Tt(a,a.return)),a!==null&&i&4&&Do(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),rt(e),i&512&&(Te||a===null||Tt(a,a.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(N){ge(e,e.return,N)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Do(e,l,a!==null?a.memoizedProps:l)),i&1024&&(Uo=!0);break;case 6:if(lt(t,e),rt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(N){ge(e,e.return,N)}}break;case 3:if(Gl=null,l=wt,wt=Yl(t.containerInfo),lt(t,e),wt=l,rt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(N){ge(e,e.return,N)}Uo&&(Uo=!1,ku(e));break;case 4:i=wt,wt=Yl(e.stateNode.containerInfo),lt(t,e),rt(e),wt=i;break;case 12:lt(t,e),rt(e);break;case 13:lt(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xo=zt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bo(e,i)));break;case 22:l=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,j=Vt,C=Te;if(Vt=j||l,Te=C||h,lt(t,e),Te=C,Vt=j,rt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||h||Vt||Te||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(r=h.stateNode,l)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=h.stateNode;var R=h.memoizedProps.style,z=R!=null&&R.hasOwnProperty("display")?R.display:null;u.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(N){ge(h,h.return,N)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(N){ge(h,h.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Bo(e,a))));break;case 19:lt(t,e),rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bo(e,i)));break;case 30:break;case 21:break;default:lt(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(xu(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,r=Oo(e);Nl(e,r,l);break;case 5:var o=a.stateNode;a.flags&32&&(Ia(o,""),a.flags&=-33);var u=Oo(e);Nl(e,u,o);break;case 3:case 4:var h=a.stateNode.containerInfo,j=Oo(e);Ho(e,j,h);break;default:throw Error(c(161))}}catch(C){ge(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ku(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ku(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bu(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),Ya(t);break;case 1:Tt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&pu(t,t.return,a),Ya(t);break;case 27:yn(t.stateNode);case 26:case 5:Tt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:da(l,r,a),cn(4,r);break;case 1:if(da(l,r,a),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(j){ge(i,i.return,j)}if(i=r,l=i.updateQueue,l!==null){var u=i.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)ed(h[l],u)}catch(j){ge(i,i.return,j)}}a&&o&64&&hu(r),dn(r,r.return);break;case 27:vu(r);case 26:case 5:da(l,r,a),a&&i===null&&o&4&&gu(r),dn(r,r.return);break;case 12:da(l,r,a);break;case 13:da(l,r,a),a&&o&4&&Su(l,r);break;case 22:r.memoizedState===null&&da(l,r,a),dn(r,r.return);break;case 30:break;default:da(l,r,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wi(a))}function Yo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wi(e))}function Et(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nu(e,t,a,i),t=t.sibling}function Nu(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t,a,i),l&2048&&cn(9,t);break;case 1:Et(e,t,a,i);break;case 3:Et(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wi(e)));break;case 12:if(l&2048){Et(e,t,a,i),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,u=r.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Et(e,t,a,i);break;case 13:Et(e,t,a,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Et(e,t,a,i):un(e,t):r._visibility&2?Et(e,t,a,i):(r._visibility|=2,pi(e,t,a,i,(t.subtreeFlags&10256)!==0)),l&2048&&_o(o,t);break;case 24:Et(e,t,a,i),l&2048&&Yo(t.alternate,t);break;default:Et(e,t,a,i)}}function pi(e,t,a,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,u=a,h=i,j=o.flags;switch(o.tag){case 0:case 11:case 15:pi(r,o,u,h,l),cn(8,o);break;case 23:break;case 22:var C=o.stateNode;o.memoizedState!==null?C._visibility&2?pi(r,o,u,h,l):un(r,o):(C._visibility|=2,pi(r,o,u,h,l)),l&&j&2048&&_o(o.alternate,o);break;case 24:pi(r,o,u,h,l),l&&j&2048&&Yo(o.alternate,o);break;default:pi(r,o,u,h,l)}t=t.sibling}}function un(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:un(a,i),l&2048&&_o(i.alternate,i);break;case 24:un(a,i),l&2048&&Yo(i.alternate,i);break;default:un(a,i)}t=t.sibling}}var fn=8192;function gi(e){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)Tu(e),e=e.sibling}function Tu(e){switch(e.tag){case 26:gi(e),e.flags&fn&&e.memoizedState!==null&&Wh(wt,e.memoizedState,e.memoizedProps);break;case 5:gi(e);break;case 3:case 4:var t=wt;wt=Yl(e.stateNode.containerInfo),gi(e),wt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=fn,fn=16777216,gi(e),fn=t):gi(e));break;default:gi(e)}}function Eu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Be=i,Au(i,e)}Eu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cu(e),e=e.sibling}function Cu(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&sa(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tl(e)):mn(e);break;default:mn(e)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Be=i,Au(i,e)}Eu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),Tl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(t));break;default:Tl(t)}e=e.sibling}}function Au(e,t){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Wi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Be=i;else e:for(a=e;Be!==null;){i=Be;var l=i.sibling,r=i.return;if(wu(i),i===a){Be=null;break e}if(l!==null){l.return=r,Be=l;break e}Be=r}}}var dh={getCacheForType:function(e){var t=Qe(Me),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},uh=typeof WeakMap=="function"?WeakMap:Map,de=0,xe=null,ne=null,re=0,ue=0,ot=null,ua=!1,xi=!1,Lo=!1,Zt=0,ke=0,fa=0,La=0,Go=0,vt=0,vi=0,hn=null,$e=null,qo=!1,Xo=0,El=1/0,Cl=null,ma=null,Le=0,ha=null,yi=null,bi=0,Vo=0,Qo=null,Mu=null,pn=0,Zo=null;function st(){if((de&2)!==0&&re!==0)return re&-re;if(A.T!==null){var e=oi;return e!==0?e:Po()}return Ks()}function Ru(){vt===0&&(vt=(re&536870912)===0||ce?Xs():536870912);var e=xt.current;return e!==null&&(e.flags|=32),vt}function ct(e,t,a){(e===xe&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(wi(e,0),pa(e,re,vt,!1)),Ri(e,a),((de&2)===0||e!==xe)&&(e===xe&&((de&2)===0&&(La|=a),ke===4&&pa(e,re,vt,!1)),Ct(e))}function Du(e,t,a){if((de&6)!==0)throw Error(c(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Mi(e,t),l=i?hh(e,t):Jo(e,t,!0),r=i;do{if(l===0){xi&&!i&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!fh(a)){l=Jo(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=hn;var h=u.current.memoizedState.isDehydrated;if(h&&(wi(u,o).flags|=256),o=Jo(u,o,!1),o!==2){if(Lo&&!h){u.errorRecoveryDisabledLanes|=r,La|=r,l=4;break e}r=$e,$e=l,r!==null&&($e===null?$e=r:$e.push.apply($e,r))}l=o}if(r=!1,l!==2)continue}}if(l===1){wi(e,0),pa(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:pa(i,t,vt,!ua);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Xo+300-zt(),10<l)){if(pa(i,t,vt,!ua),Ln(i,0,!0)!==0)break e;i.timeoutHandle=cf(Ou.bind(null,i,a,$e,Cl,qo,t,vt,La,vi,ua,r,2,-0,0),l);break e}Ou(i,a,$e,Cl,qo,t,vt,La,vi,ua,r,0,-0,0)}}break}while(!0);Ct(e)}function Ou(e,t,a,i,l,r,o,u,h,j,C,R,z,N){if(e.timeoutHandle=-1,R=t.subtreeFlags,(R&8192||(R&16785408)===16785408)&&(jn={stylesheets:null,count:0,unsuspend:Kh},Tu(t),R=Jh(),R!==null)){e.cancelPendingCommit=R(Gu.bind(null,e,t,r,a,i,l,o,u,h,C,1,z,N)),pa(e,r,o,!j);return}Gu(e,t,r,a,i,l,o,u,h)}function fh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],r=l.getSnapshot;l=l.value;try{if(!it(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,i){t&=~Go,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-at(l),o=1<<r;i[r]=-1,l&=~o}a!==0&&Qs(e,a,t)}function Al(){return(de&6)===0?(gn(0),!1):!0}function Ko(){if(ne!==null){if(ue===0)var e=ne.return;else e=ne,_t=Oa=null,co(e),mi=null,rn=0,e=ne;for(;e!==null;)mu(e.alternate,e),e=e.return;ne=null}}function wi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ah(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ko(),xe=e,ne=a=Ht(e.current,null),re=t,ue=0,ot=null,ua=!1,xi=Mi(e,t),Lo=!1,vi=vt=Go=La=fa=ke=0,$e=hn=null,qo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-at(i),r=1<<l;t|=e[l],i&=~r}return Zt=t,$n(),a}function Hu(e,t){ae=null,A.H=xl,t===Ii||t===ol?(t=$c(),ue=3):t===Jc?(t=$c(),ue=4):ue=t===Pd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ne===null&&(ke=1,jl(e,mt(t,e.current)))}function Uu(){var e=A.H;return A.H=xl,e===null?xl:e}function Bu(){var e=A.A;return A.A=dh,e}function Wo(){ke=4,ua||(re&4194048)!==re&&xt.current!==null||(xi=!0),(fa&134217727)===0&&(La&134217727)===0||xe===null||pa(xe,re,vt,!1)}function Jo(e,t,a){var i=de;de|=2;var l=Uu(),r=Bu();(xe!==e||re!==t)&&(Cl=null,wi(e,t)),t=!1;var o=ke;e:do try{if(ue!==0&&ne!==null){var u=ne,h=ot;switch(ue){case 8:Ko(),o=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var j=ue;if(ue=0,ot=null,ji(e,u,h,j),a&&xi){o=0;break e}break;default:j=ue,ue=0,ot=null,ji(e,u,h,j)}}mh(),o=ke;break}catch(C){Hu(e,C)}while(!0);return t&&e.shellSuspendCounter++,_t=Oa=null,de=i,A.H=l,A.A=r,ne===null&&(xe=null,re=0,$n()),o}function mh(){for(;ne!==null;)_u(ne)}function hh(e,t){var a=de;de|=2;var i=Uu(),l=Bu();xe!==e||re!==t?(Cl=null,El=zt()+500,wi(e,t)):xi=Mi(e,t);e:do try{if(ue!==0&&ne!==null){t=ne;var r=ot;t:switch(ue){case 1:ue=0,ot=null,ji(e,t,r,1);break;case 2:case 9:if(Ic(r)){ue=0,ot=null,Yu(t);break}t=function(){ue!==2&&ue!==9||xe!==e||(ue=7),Ct(e)},r.then(t,t);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:Ic(r)?(ue=0,ot=null,Yu(t)):(ue=0,ot=null,ji(e,t,r,7));break;case 5:var o=null;switch(ne.tag){case 26:o=ne.memoizedState;case 5:case 27:var u=ne;if(!o||wf(o)){ue=0,ot=null;var h=u.sibling;if(h!==null)ne=h;else{var j=u.return;j!==null?(ne=j,Ml(j)):ne=null}break t}}ue=0,ot=null,ji(e,t,r,5);break;case 6:ue=0,ot=null,ji(e,t,r,6);break;case 8:Ko(),ke=6;break e;default:throw Error(c(462))}}ph();break}catch(C){Hu(e,C)}while(!0);return _t=Oa=null,A.H=i,A.A=l,de=a,ne!==null?0:(xe=null,re=0,$n(),ke)}function ph(){for(;ne!==null&&!B0();)_u(ne)}function _u(e){var t=uu(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Ml(e):ne=t}function Yu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=lu(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=lu(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:co(t);default:mu(a,t),t=ne=Lc(t,Zt),t=uu(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Ml(e):ne=t}function ji(e,t,a,i){_t=Oa=null,co(t),mi=null,rn=0;var l=t.return;try{if(nh(e,l,t,a,re)){ke=1,jl(e,mt(a,e.current)),ne=null;return}}catch(r){if(l!==null)throw ne=l,r;ke=1,jl(e,mt(a,e.current)),ne=null;return}t.flags&32768?(ce||i===1?e=!0:xi||(re&536870912)!==0?e=!1:(ua=e=!0,(i===2||i===9||i===3||i===6)&&(i=xt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lu(t,e)):Ml(t)}function Ml(e){var t=e;do{if((t.flags&32768)!==0){Lu(t,ua);return}e=t.return;var a=rh(t.alternate,t,Zt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ke===0&&(ke=5)}function Lu(e,t){do{var a=oh(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);ke=6,ne=null}function Gu(e,t,a,i,l,r,o,u,h){e.cancelPendingCommit=null;do Rl();while(Le!==0);if((de&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=_r,K0(e,a,r,o,u,h),e===xe&&(ne=xe=null,re=0),yi=t,ha=e,bi=a,Vo=r,Qo=l,Mu=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yh(Bn,function(){return Zu(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=A.T,A.T=null,l=B.p,B.p=2,o=de,de|=4;try{sh(e,t,a)}finally{de=o,B.p=l,A.T=i}}Le=1,qu(),Xu(),Vu()}}function qu(){if(Le===1){Le=0;var e=ha,t=yi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var i=B.p;B.p=2;var l=de;de|=4;try{zu(t,e);var r=os,o=Ac(e.containerInfo),u=r.focusedElem,h=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&Cc(u.ownerDocument.documentElement,u)){if(h!==null&&Dr(u)){var j=h.start,C=h.end;if(C===void 0&&(C=j),"selectionStart"in u)u.selectionStart=j,u.selectionEnd=Math.min(C,u.value.length);else{var R=u.ownerDocument||document,z=R&&R.defaultView||window;if(z.getSelection){var N=z.getSelection(),I=u.textContent.length,K=Math.min(h.start,I),he=h.end===void 0?K:Math.min(h.end,I);!N.extend&&K>he&&(o=he,he=K,K=o);var y=Ec(u,K),x=Ec(u,he);if(y&&x&&(N.rangeCount!==1||N.anchorNode!==y.node||N.anchorOffset!==y.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var w=R.createRange();w.setStart(y.node,y.offset),N.removeAllRanges(),K>he?(N.addRange(w),N.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),N.addRange(w))}}}}for(R=[],N=u;N=N.parentNode;)N.nodeType===1&&R.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<R.length;u++){var M=R[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Vl=!!rs,os=rs=null}finally{de=l,B.p=i,A.T=a}}e.current=t,Le=2}}function Xu(){if(Le===2){Le=0;var e=ha,t=yi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var i=B.p;B.p=2;var l=de;de|=4;try{bu(e,t.alternate,t)}finally{de=l,B.p=i,A.T=a}}Le=3}}function Vu(){if(Le===4||Le===3){Le=0,_0();var e=ha,t=yi,a=bi,i=Mu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,yi=ha=null,Qu(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ma=null),fr(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ai,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=A.T,l=B.p,B.p=2,A.T=null;try{for(var r=e.onRecoverableError,o=0;o<i.length;o++){var u=i[o];r(u.value,{componentStack:u.stack})}}finally{A.T=t,B.p=l}}(bi&3)!==0&&Rl(),Ct(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Zo?pn++:(pn=0,Zo=e):pn=0,gn(0)}}function Qu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wi(t)))}function Rl(e){return qu(),Xu(),Vu(),Zu()}function Zu(){if(Le!==5)return!1;var e=ha,t=Vo;Vo=0;var a=fr(bi),i=A.T,l=B.p;try{B.p=32>a?32:a,A.T=null,a=Qo,Qo=null;var r=ha,o=bi;if(Le=0,yi=ha=null,bi=0,(de&6)!==0)throw Error(c(331));var u=de;if(de|=4,Cu(r.current),Nu(r,r.current,o,a),de=u,gn(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ai,r)}catch{}return!0}finally{B.p=l,A.T=i,Qu(e,t)}}function Ku(e,t,a){t=mt(a,t),t=zo(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Ri(e,2),Ct(e))}function ge(e,t,a){if(e.tag===3)Ku(e,e,a);else for(;t!==null;){if(t.tag===3){Ku(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=mt(a,e),a=Fd(2),i=na(t,a,2),i!==null&&($d(a,i,t,e),Ri(i,2),Ct(i));break}}t=t.return}}function Io(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new uh;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(Lo=!0,l.add(a),e=gh.bind(null,e,t,a),t.then(e,e))}function gh(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(ke===4||ke===3&&(re&62914560)===re&&300>zt()-Xo?(de&2)===0&&wi(e,0):Go|=a,vi===re&&(vi=0)),Ct(e)}function Wu(e,t){t===0&&(t=Vs()),e=ii(e,t),e!==null&&(Ri(e,t),Ct(e))}function xh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Wu(e,a)}function vh(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),Wu(e,a)}function yh(e,t){return sr(e,t)}var Dl=null,Si=null,Fo=!1,Ol=!1,$o=!1,Ga=0;function Ct(e){e!==Si&&e.next===null&&(Si===null?Dl=Si=e:Si=Si.next=e),Ol=!0,Fo||(Fo=!0,wh())}function gn(e,t){if(!$o&&Ol){$o=!0;do for(var a=!1,i=Dl;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var o=i.suspendedLanes,u=i.pingedLanes;r=(1<<31-at(42|e)+1)-1,r&=l&~(o&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,$u(i,r))}else r=re,r=Ln(i,i===xe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Mi(i,r)||(a=!0,$u(i,r));i=i.next}while(a);$o=!1}}function bh(){Ju()}function Ju(){Ol=Fo=!1;var e=0;Ga!==0&&(Ch()&&(e=Ga),Ga=0);for(var t=zt(),a=null,i=Dl;i!==null;){var l=i.next,r=Iu(i,t);r===0?(i.next=null,a===null?Dl=l:a.next=l,l===null&&(Si=a)):(a=i,(e!==0||(r&3)!==0)&&(Ol=!0)),i=l}gn(e)}function Iu(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-at(r),u=1<<o,h=l[o];h===-1?((u&a)===0||(u&i)!==0)&&(l[o]=Z0(u,t)):h<=t&&(e.expiredLanes|=u),r&=~u}if(t=xe,a=re,a=Ln(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&cr(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Mi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&cr(i),fr(a)){case 2:case 8:a=Gs;break;case 32:a=Bn;break;case 268435456:a=qs;break;default:a=Bn}return i=Fu.bind(null,e),a=sr(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&cr(i),e.callbackPriority=2,e.callbackNode=null,2}function Fu(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rl()&&e.callbackNode!==a)return null;var i=re;return i=Ln(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Du(e,i,t),Iu(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Fu.bind(null,e):null)}function $u(e,t){if(Rl())return null;Du(e,t,!0)}function wh(){Mh(function(){(de&6)!==0?sr(Ls,bh):Ju()})}function Po(){return Ga===0&&(Ga=Xs()),Ga}function Pu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function ef(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jh(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var r=Pu((l[We]||null).action),o=i.submitter;o&&(t=(t=o[We]||null)?Pu(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var u=new Jn("action","action",null,i,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ga!==0){var h=o?ef(l,o):new FormData(l);yo(a,{pending:!0,data:h,method:l.method,action:r},null,h)}}else typeof r=="function"&&(u.preventDefault(),h=o?ef(l,o):new FormData(l),yo(a,{pending:!0,data:h,method:l.method,action:r},r,h))},currentTarget:l}]})}}for(var es=0;es<Br.length;es++){var ts=Br[es],Sh=ts.toLowerCase(),zh=ts[0].toUpperCase()+ts.slice(1);bt(Sh,"on"+zh)}bt(Dc,"onAnimationEnd"),bt(Oc,"onAnimationIteration"),bt(Hc,"onAnimationStart"),bt("dblclick","onDoubleClick"),bt("focusin","onFocus"),bt("focusout","onBlur"),bt(Gm,"onTransitionRun"),bt(qm,"onTransitionStart"),bt(Xm,"onTransitionCancel"),bt(Uc,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));function tf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var u=i[o],h=u.instance,j=u.currentTarget;if(u=u.listener,h!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=j;try{r(l)}catch(C){wl(C)}l.currentTarget=null,r=h}else for(o=0;o<i.length;o++){if(u=i[o],h=u.instance,j=u.currentTarget,u=u.listener,h!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=j;try{r(l)}catch(C){wl(C)}l.currentTarget=null,r=h}}}}function le(e,t){var a=t[mr];a===void 0&&(a=t[mr]=new Set);var i=e+"__bubble";a.has(i)||(af(t,e,2,!1),a.add(i))}function as(e,t,a){var i=0;t&&(i|=4),af(a,e,i,t)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[Hl]){e[Hl]=!0,Js.forEach(function(a){a!=="selectionchange"&&(kh.has(a)||as(a,!1,e),as(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hl]||(t[Hl]=!0,as("selectionchange",!1,t))}}function af(e,t,a,i){switch(Tf(t)){case 2:var l=$h;break;case 8:l=Ph;break;default:l=xs}a=l.bind(null,t,a,e),l=void 0,!zr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ns(e,t,a,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=i.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=Va(u),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){i=r=o;continue e}u=u.parentNode}}i=i.return}cc(function(){var j=r,C=jr(a),R=[];e:{var z=Bc.get(e);if(z!==void 0){var N=Jn,I=e;switch(e){case"keypress":if(Kn(a)===0)break e;case"keydown":case"keyup":N=ym;break;case"focusin":I="focus",N=Er;break;case"focusout":I="blur",N=Er;break;case"beforeblur":case"afterblur":N=Er;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=jm;break;case Dc:case Oc:case Hc:N=dm;break;case Uc:N=zm;break;case"scroll":case"scrollend":N=lm;break;case"wheel":N=Nm;break;case"copy":case"cut":case"paste":N=fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=hc;break;case"toggle":case"beforetoggle":N=Em}var K=(t&4)!==0,he=!K&&(e==="scroll"||e==="scrollend"),y=K?z!==null?z+"Capture":null:z;K=[];for(var x=j,w;x!==null;){var M=x;if(w=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||w===null||y===null||(M=Hi(x,y),M!=null&&K.push(vn(x,M,w))),he)break;x=x.return}0<K.length&&(z=new N(z,I,null,a,C),R.push({event:z,listeners:K}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",z&&a!==wr&&(I=a.relatedTarget||a.fromElement)&&(Va(I)||I[Xa]))break e;if((N||z)&&(z=C.window===C?C:(z=C.ownerDocument)?z.defaultView||z.parentWindow:window,N?(I=a.relatedTarget||a.toElement,N=j,I=I?Va(I):null,I!==null&&(he=p(I),K=I.tag,I!==he||K!==5&&K!==27&&K!==6)&&(I=null)):(N=null,I=j),N!==I)){if(K=fc,M="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=hc,M="onPointerLeave",y="onPointerEnter",x="pointer"),he=N==null?z:Oi(N),w=I==null?z:Oi(I),z=new K(M,x+"leave",N,a,C),z.target=he,z.relatedTarget=w,M=null,Va(C)===j&&(K=new K(y,x+"enter",I,a,C),K.target=w,K.relatedTarget=he,M=K),he=M,N&&I)t:{for(K=N,y=I,x=0,w=K;w;w=zi(w))x++;for(w=0,M=y;M;M=zi(M))w++;for(;0<x-w;)K=zi(K),x--;for(;0<w-x;)y=zi(y),w--;for(;x--;){if(K===y||y!==null&&K===y.alternate)break t;K=zi(K),y=zi(y)}K=null}else K=null;N!==null&&nf(R,z,N,K,!1),I!==null&&he!==null&&nf(R,he,I,K,!0)}}e:{if(z=j?Oi(j):window,N=z.nodeName&&z.nodeName.toLowerCase(),N==="select"||N==="input"&&z.type==="file")var L=jc;else if(bc(z))if(Sc)L=_m;else{L=Um;var ie=Hm}else N=z.nodeName,!N||N.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&br(j.elementType)&&(L=jc):L=Bm;if(L&&(L=L(e,j))){wc(R,L,a,C);break e}ie&&ie(e,z,j),e==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&yr(z,"number",z.value)}switch(ie=j?Oi(j):window,e){case"focusin":(bc(ie)||ie.contentEditable==="true")&&(ei=ie,Or=j,Xi=null);break;case"focusout":Xi=Or=ei=null;break;case"mousedown":Hr=!0;break;case"contextmenu":case"mouseup":case"dragend":Hr=!1,Mc(R,a,C);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":Mc(R,a,C)}var X;if(Ar)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Pa?vc(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(pc&&a.locale!=="ko"&&(Pa||W!=="onCompositionStart"?W==="onCompositionEnd"&&Pa&&(X=dc()):(ea=C,kr="value"in ea?ea.value:ea.textContent,Pa=!0)),ie=Ul(j,W),0<ie.length&&(W=new mc(W,e,null,a,C),R.push({event:W,listeners:ie}),X?W.data=X:(X=yc(a),X!==null&&(W.data=X)))),(X=Am?Mm(e,a):Rm(e,a))&&(W=Ul(j,"onBeforeInput"),0<W.length&&(ie=new mc("onBeforeInput","beforeinput",null,a,C),R.push({event:ie,listeners:W}),ie.data=X)),jh(R,e,j,a,C)}tf(R,t)})}function vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ul(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Hi(e,a),l!=null&&i.unshift(vn(e,l,r)),l=Hi(e,t),l!=null&&i.push(vn(e,l,r))),e.tag===3)return i;e=e.return}return[]}function zi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nf(e,t,a,i,l){for(var r=t._reactName,o=[];a!==null&&a!==i;){var u=a,h=u.alternate,j=u.stateNode;if(u=u.tag,h!==null&&h===i)break;u!==5&&u!==26&&u!==27||j===null||(h=j,l?(j=Hi(a,r),j!=null&&o.unshift(vn(a,j,h))):l||(j=Hi(a,r),j!=null&&o.push(vn(a,j,h)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Nh=/\r\n?/g,Th=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(Th,"")}function rf(e,t){return t=lf(t),lf(e)===t}function Bl(){}function me(e,t,a,i,l,r){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ia(e,""+i);break;case"className":qn(e,"class",i);break;case"tabIndex":qn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(e,a,i);break;case"style":oc(e,i,r);break;case"data":if(t!=="object"){qn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Qn(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",l.name,l,null),me(e,t,"formEncType",l.formEncType,l,null),me(e,t,"formMethod",l.formMethod,l,null),me(e,t,"formTarget",l.formTarget,l,null)):(me(e,t,"encType",l.encType,l,null),me(e,t,"method",l.method,l,null),me(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Qn(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Bl);break;case"onScroll":i!=null&&le("scroll",e);break;case"onScrollEnd":i!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Qn(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":le("beforetoggle",e),le("toggle",e),Gn(e,"popover",i);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=im.get(a)||a,Gn(e,a,i))}}function ls(e,t,a,i,l,r){switch(a){case"style":oc(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&Ia(e,""+i);break;case"onScroll":i!=null&&le("scroll",e);break;case"onScrollEnd":i!=null&&le("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[We]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Gn(e,a,i)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var i=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,r,o,a,null)}}l&&me(e,t,"srcSet",a.srcSet,a,null),i&&me(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var u=r=o=l=null,h=null,j=null;for(i in a)if(a.hasOwnProperty(i)){var C=a[i];if(C!=null)switch(i){case"name":l=C;break;case"type":o=C;break;case"checked":h=C;break;case"defaultChecked":j=C;break;case"value":r=C;break;case"defaultValue":u=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:me(e,t,i,C,a,null)}}ic(e,r,u,h,j,o,l,!1),Xn(e);return;case"select":le("invalid",e),i=o=r=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":r=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:me(e,t,l,u,a,null)}t=r,a=o,e.multiple=!!i,t!=null?Ja(e,!!i,t,!1):a!=null&&Ja(e,!!i,a,!0);return;case"textarea":le("invalid",e),r=l=i=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":i=u;break;case"defaultValue":l=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:me(e,t,o,u,a,null)}lc(e,i,l,r),Xn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(i=a[h],i!=null))switch(h){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:me(e,t,h,i,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(i=0;i<xn.length;i++)le(xn[i],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(i=a[j],i!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,j,i,a,null)}return;default:if(br(t)){for(C in a)a.hasOwnProperty(C)&&(i=a[C],i!==void 0&&ls(e,t,C,i,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(i=a[u],i!=null&&me(e,t,u,i,a,null))}function Eh(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,o=null,u=null,h=null,j=null,C=null;for(N in a){var R=a[N];if(a.hasOwnProperty(N)&&R!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":h=R;default:i.hasOwnProperty(N)||me(e,t,N,null,i,R)}}for(var z in i){var N=i[z];if(R=a[z],i.hasOwnProperty(z)&&(N!=null||R!=null))switch(z){case"type":r=N;break;case"name":l=N;break;case"checked":j=N;break;case"defaultChecked":C=N;break;case"value":o=N;break;case"defaultValue":u=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==R&&me(e,t,z,N,i,R)}}vr(e,o,u,h,j,C,r,l);return;case"select":N=o=u=z=null;for(r in a)if(h=a[r],a.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":N=h;default:i.hasOwnProperty(r)||me(e,t,r,null,i,h)}for(l in i)if(r=i[l],h=a[l],i.hasOwnProperty(l)&&(r!=null||h!=null))switch(l){case"value":z=r;break;case"defaultValue":u=r;break;case"multiple":o=r;default:r!==h&&me(e,t,l,r,i,h)}t=u,a=o,i=N,z!=null?Ja(e,!!a,z,!1):!!i!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":N=z=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:me(e,t,u,null,i,l)}for(o in i)if(l=i[o],r=a[o],i.hasOwnProperty(o)&&(l!=null||r!=null))switch(o){case"value":z=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&me(e,t,o,l,i,r)}nc(e,z,N);return;case"option":for(var I in a)if(z=a[I],a.hasOwnProperty(I)&&z!=null&&!i.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:me(e,t,I,null,i,z)}for(h in i)if(z=i[h],N=a[h],i.hasOwnProperty(h)&&z!==N&&(z!=null||N!=null))switch(h){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:me(e,t,h,z,i,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)z=a[K],a.hasOwnProperty(K)&&z!=null&&!i.hasOwnProperty(K)&&me(e,t,K,null,i,z);for(j in i)if(z=i[j],N=a[j],i.hasOwnProperty(j)&&z!==N&&(z!=null||N!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:me(e,t,j,z,i,N)}return;default:if(br(t)){for(var he in a)z=a[he],a.hasOwnProperty(he)&&z!==void 0&&!i.hasOwnProperty(he)&&ls(e,t,he,void 0,i,z);for(C in i)z=i[C],N=a[C],!i.hasOwnProperty(C)||z===N||z===void 0&&N===void 0||ls(e,t,C,z,i,N);return}}for(var y in a)z=a[y],a.hasOwnProperty(y)&&z!=null&&!i.hasOwnProperty(y)&&me(e,t,y,null,i,z);for(R in i)z=i[R],N=a[R],!i.hasOwnProperty(R)||z===N||z==null&&N==null||me(e,t,R,z,i,N)}var rs=null,os=null;function _l(e){return e.nodeType===9?e:e.ownerDocument}function of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=null;function Ch(){var e=window.event;return e&&e.type==="popstate"?e===cs?!1:(cs=e,!0):(cs=null,!1)}var cf=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(e){return df.resolve(null).then(e).catch(Rh)}:cf;function Rh(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function uf(e,t){var a=t,i=0,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<i&&8>i){a=i;var o=e.ownerDocument;if(a&1&&yn(o.documentElement),a&2&&yn(o.body),a&4)for(a=o.head,yn(a),o=a.firstChild;o;){var u=o.nextSibling,h=o.nodeName;o[Di]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(l===0){e.removeChild(r),Tn(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:i=a.charCodeAt(0)-48;else i=0;a=r}while(a);Tn(t)}function ds(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ds(a),hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dh(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Oh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function us(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Hh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fs=null;function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function mf(e,t,a){switch(t=_l(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hr(e)}var yt=new Map,hf=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=B.d;B.d={f:Uh,r:Bh,D:_h,C:Yh,L:Lh,m:Gh,X:Xh,S:qh,M:Vh};function Uh(){var e=Kt.f(),t=Al();return e||t}function Bh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?Dd(t):Kt.r(e)}var ki=typeof document>"u"?null:document;function pf(e,t,a){var i=ki;if(i&&typeof t=="string"&&t){var l=ft(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),hf.has(l)||(hf.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Ge(t,"link",e),He(t),i.head.appendChild(t)))}}function _h(e){Kt.D(e),pf("dns-prefetch",e,null)}function Yh(e,t){Kt.C(e,t),pf("preconnect",e,t)}function Lh(e,t,a){Kt.L(e,t,a);var i=ki;if(i&&e&&t){var l='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ft(a.imageSizes)+'"]')):l+='[href="'+ft(e)+'"]';var r=l;switch(t){case"style":r=Ni(e);break;case"script":r=Ti(e)}yt.has(r)||(e=k({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(bn(r))||t==="script"&&i.querySelector(wn(r))||(t=i.createElement("link"),Ge(t,"link",e),He(t),i.head.appendChild(t)))}}function Gh(e,t){Kt.m(e,t);var a=ki;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ft(i)+'"][href="'+ft(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ti(e)}if(!yt.has(r)&&(e=k({rel:"modulepreload",href:e},t),yt.set(r,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wn(r)))return}i=a.createElement("link"),Ge(i,"link",e),He(i),a.head.appendChild(i)}}}function qh(e,t,a){Kt.S(e,t,a);var i=ki;if(i&&e){var l=Za(i).hoistableStyles,r=Ni(e);t=t||"default";var o=l.get(r);if(!o){var u={loading:0,preload:null};if(o=i.querySelector(bn(r)))u.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(r))&&ms(e,a);var h=o=i.createElement("link");He(h),Ge(h,"link",e),h._p=new Promise(function(j,C){h.onload=j,h.onerror=C}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ll(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(r,o)}}}function Xh(e,t){Kt.X(e,t);var a=ki;if(a&&e){var i=Za(a).hoistableScripts,l=Ti(e),r=i.get(l);r||(r=a.querySelector(wn(l)),r||(e=k({src:e,async:!0},t),(t=yt.get(l))&&hs(e,t),r=a.createElement("script"),He(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function Vh(e,t){Kt.M(e,t);var a=ki;if(a&&e){var i=Za(a).hoistableScripts,l=Ti(e),r=i.get(l);r||(r=a.querySelector(wn(l)),r||(e=k({src:e,async:!0,type:"module"},t),(t=yt.get(l))&&hs(e,t),r=a.createElement("script"),He(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function gf(e,t,a,i){var l=(l=P.current)?Yl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ni(a.href),a=Za(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ni(a.href);var r=Za(l).hoistableStyles,o=r.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=l.querySelector(bn(e)))&&!r._p&&(o.instance=r,o.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),r||Qh(l,e,a,o.state))),t&&i===null)throw Error(c(528,""));return o}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ti(a),a=Za(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ni(e){return'href="'+ft(e)+'"'}function bn(e){return'link[rel="stylesheet"]['+e+"]"}function xf(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Qh(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ge(t,"link",a),He(t),e.head.appendChild(t))}function Ti(e){return'[src="'+ft(e)+'"]'}function wn(e){return"script[async]"+e}function vf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(i)return t.instance=i,He(i),i;var l=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),He(i),Ge(i,"style",l),Ll(i,a.precedence,e),t.instance=i;case"stylesheet":l=Ni(a.href);var r=e.querySelector(bn(l));if(r)return t.state.loading|=4,t.instance=r,He(r),r;i=xf(a),(l=yt.get(l))&&ms(i,l),r=(e.ownerDocument||e).createElement("link"),He(r);var o=r;return o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),Ge(r,"link",i),t.state.loading|=4,Ll(r,a.precedence,e),t.instance=r;case"script":return r=Ti(a.src),(l=e.querySelector(wn(r)))?(t.instance=l,He(l),l):(i=a,(l=yt.get(r))&&(i=k({},a),hs(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),He(l),Ge(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ll(i,a.precedence,e));return t.instance}function Ll(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,o=0;o<i.length;o++){var u=i[o];if(u.dataset.precedence===t)r=u;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gl=null;function yf(e,t,a){if(Gl===null){var i=new Map,l=Gl=new Map;l.set(a,i)}else l=Gl,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[Di]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var u=i.get(o);u?u.push(r):i.set(o,[r])}}return i}function bf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Zh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jn=null;function Kh(){}function Wh(e,t,a){if(jn===null)throw Error(c(475));var i=jn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ni(a.href),r=e.querySelector(bn(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=ql.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,He(r);return}r=e.ownerDocument||e,a=xf(a),(l=yt.get(l))&&ms(a,l),r=r.createElement("link"),He(r);var o=r;o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),Ge(r,"link",a),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=ql.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Jh(){if(jn===null)throw Error(c(475));var e=jn;return e.stylesheets&&e.count===0&&ps(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ps(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ql(){if(this.count--,this.count===0){if(this.stylesheets)ps(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function ps(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,t.forEach(Ih,e),Xl=null,ql.call(e))}function Ih(e,t){if(!(t.state.loading&4)){var a=Xl.get(e);if(a)var i=a.get(null);else{a=new Map,Xl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var o=l[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}l=t.instance,o=l.getAttribute("data-precedence"),r=a.get(o)||i,r===i&&a.set(null,l),a.set(o,l),this.count++,i=ql.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Sn={$$typeof:ee,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Fh(e,t,a,i,l,r,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.hiddenUpdates=dr(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function jf(e,t,a,i,l,r,o,u,h,j,C,R){return e=new Fh(e,t,a,o,u,h,j,R),t=1,r===!0&&(t|=24),r=nt(3,null,null,t),e.current=r,r.stateNode=e,t=Jr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:a,cache:t},Pr(r),e}function Sf(e){return e?(e=ni,e):ni}function zf(e,t,a,i,l,r){l=Sf(l),i.context===null?i.context=l:i.pendingContext=l,i=ia(t),i.payload={element:a},r=r===void 0?null:r,r!==null&&(i.callback=r),a=na(e,i,t),a!==null&&(ct(a,e,t),$i(a,e,t))}function kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function gs(e,t){kf(e,t),(e=e.alternate)&&kf(e,t)}function Nf(e){if(e.tag===13){var t=ii(e,67108864);t!==null&&ct(t,e,67108864),gs(e,67108864)}}var Vl=!0;function $h(e,t,a,i){var l=A.T;A.T=null;var r=B.p;try{B.p=2,xs(e,t,a,i)}finally{B.p=r,A.T=l}}function Ph(e,t,a,i){var l=A.T;A.T=null;var r=B.p;try{B.p=8,xs(e,t,a,i)}finally{B.p=r,A.T=l}}function xs(e,t,a,i){if(Vl){var l=vs(i);if(l===null)ns(e,t,i,Ql,a),Ef(e,i);else if(tp(l,e,t,a,i))i.stopPropagation();else if(Ef(e,i),t&4&&-1<ep.indexOf(e)){for(;l!==null;){var r=Qa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=za(r.pendingLanes);if(o!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var h=1<<31-at(o);u.entanglements[1]|=h,o&=~h}Ct(r),(de&6)===0&&(El=zt()+500,gn(0))}}break;case 13:u=ii(r,2),u!==null&&ct(u,r,2),Al(),gs(r,2)}if(r=vs(i),r===null&&ns(e,t,i,Ql,a),r===l)break;l=r}l!==null&&i.stopPropagation()}else ns(e,t,i,null,a)}}function vs(e){return e=jr(e),ys(e)}var Ql=null;function ys(e){if(Ql=null,e=Va(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ql=e,null}function Tf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y0()){case Ls:return 2;case Gs:return 8;case Bn:case L0:return 32;case qs:return 268435456;default:return 32}default:return 32}}var bs=!1,xa=null,va=null,ya=null,zn=new Map,kn=new Map,ba=[],ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Nn(e,t,a,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function tp(e,t,a,i,l){switch(t){case"focusin":return xa=Nn(xa,e,t,a,i,l),!0;case"dragenter":return va=Nn(va,e,t,a,i,l),!0;case"mouseover":return ya=Nn(ya,e,t,a,i,l),!0;case"pointerover":var r=l.pointerId;return zn.set(r,Nn(zn.get(r)||null,e,t,a,i,l)),!0;case"gotpointercapture":return r=l.pointerId,kn.set(r,Nn(kn.get(r)||null,e,t,a,i,l)),!0}return!1}function Cf(e){var t=Va(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,W0(e.priority,function(){if(a.tag===13){var i=st();i=ur(i);var l=ii(a,i);l!==null&&ct(l,a,i),gs(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=vs(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);wr=i,a.target.dispatchEvent(i),wr=null}else return t=Qa(a),t!==null&&Nf(t),e.blockedOn=a,!1;t.shift()}return!0}function Af(e,t,a){Zl(e)&&a.delete(t)}function ap(){bs=!1,xa!==null&&Zl(xa)&&(xa=null),va!==null&&Zl(va)&&(va=null),ya!==null&&Zl(ya)&&(ya=null),zn.forEach(Af),kn.forEach(Af)}function Kl(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ap)))}var Wl=null;function Mf(e){Wl!==e&&(Wl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Wl===e&&(Wl=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(ys(i||a)===null)continue;break}var r=Qa(a);r!==null&&(e.splice(t,3),t-=3,yo(r,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Tn(e){function t(h){return Kl(h,e)}xa!==null&&Kl(xa,e),va!==null&&Kl(va,e),ya!==null&&Kl(ya,e),zn.forEach(t),kn.forEach(t);for(var a=0;a<ba.length;a++){var i=ba[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Cf(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],r=a[i+1],o=l[We]||null;if(typeof r=="function")o||Mf(a);else if(o){var u=null;if(r&&r.hasAttribute("formAction")){if(l=r,o=r[We]||null)u=o.formAction;else if(ys(l)!==null)continue}else u=o.action;typeof u=="function"?a[i+1]=u:(a.splice(i,3),i-=3),Mf(a)}}}function ws(e){this._internalRoot=e}Jl.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=st();zf(a,i,e,t,null,null)},Jl.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zf(e.current,2,null,e,null,null),Al(),t[Xa]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ks();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&Cf(e)}};var Rf=f.version;if(Rf!=="19.1.0")throw Error(c(527,Rf,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=S(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var ip={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Ai=Il.inject(ip),tt=Il}catch{}}return Cn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,i="",l=Kd,r=Wd,o=Jd,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=jf(e,1,!1,null,null,a,i,l,r,o,u,null),e[Xa]=t.current,is(e),new ws(t)},Cn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var i=!1,l="",r=Kd,o=Wd,u=Jd,h=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),t=jf(e,1,!0,t,a??null,i,l,r,o,u,h,j),t.context=Sf(null),a=t.current,i=st(),i=ur(i),l=ia(i),l.callback=null,na(a,l,i),a=i,t.current.lanes=a,Ri(t,a),Ct(t),e[Xa]=t.current,is(e),new Jl(t)},Cn.version="19.1.0",Cn}var qf;function mp(){if(qf)return zs.exports;qf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),zs.exports=fp(),zs.exports}var n0=mp();const hp=a0(n0);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xf="popstate";function pp(s={}){function f(c,m){let{pathname:p,search:b,hash:E}=c.location;return Rs("",{pathname:p,search:b,hash:E},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(c,m){return typeof m=="string"?m:Rn(m)}return xp(f,d,null,s)}function je(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function At(s,f){if(!s){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function gp(){return Math.random().toString(36).substring(2,10)}function Vf(s,f){return{usr:s.state,key:s.key,idx:f}}function Rs(s,f,d=null,c){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof f=="string"?Ei(f):f,state:d,key:f&&f.key||c||gp()}}function Rn({pathname:s="/",search:f="",hash:d=""}){return f&&f!=="?"&&(s+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function Ei(s){let f={};if(s){let d=s.indexOf("#");d>=0&&(f.hash=s.substring(d),s=s.substring(0,d));let c=s.indexOf("?");c>=0&&(f.search=s.substring(c),s=s.substring(0,c)),s&&(f.pathname=s)}return f}function xp(s,f,d,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,b=m.history,E="POP",S=null,v=k();v==null&&(v=0,b.replaceState({...b.state,idx:v},""));function k(){return(b.state||{idx:null}).idx}function O(){E="POP";let G=k(),Q=G==null?null:G-v;v=G,S&&S({action:E,location:F.location,delta:Q})}function H(G,Q){E="PUSH";let q=Rs(F.location,G,Q);v=k()+1;let ee=Vf(q,v),be=F.createHref(q);try{b.pushState(ee,"",be)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;m.location.assign(be)}p&&S&&S({action:E,location:F.location,delta:1})}function Y(G,Q){E="REPLACE";let q=Rs(F.location,G,Q);v=k();let ee=Vf(q,v),be=F.createHref(q);b.replaceState(ee,"",be),p&&S&&S({action:E,location:F.location,delta:0})}function V(G){return vp(G)}let F={get action(){return E},get location(){return s(m,b)},listen(G){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Xf,O),S=G,()=>{m.removeEventListener(Xf,O),S=null}},createHref(G){return f(m,G)},createURL:V,encodeLocation(G){let Q=V(G);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:H,replace:Y,go(G){return b.go(G)}};return F}function vp(s,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),je(d,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Rn(s);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function l0(s,f,d="/"){return yp(s,f,d,!1)}function yp(s,f,d,c){let m=typeof f=="string"?Ei(f):f,p=Jt(m.pathname||"/",d);if(p==null)return null;let b=r0(s);bp(b);let E=null;for(let S=0;E==null&&S<b.length;++S){let v=Mp(p);E=Cp(b[S],v,c)}return E}function r0(s,f=[],d=[],c="",m=!1){let p=(b,E,S=m,v)=>{let k={relativePath:v===void 0?b.path||"":v,caseSensitive:b.caseSensitive===!0,childrenIndex:E,route:b};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(c)&&S)return;je(k.relativePath.startsWith(c),`Absolute route path "${k.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(c.length)}let O=Wt([c,k.relativePath]),H=d.concat(k);b.children&&b.children.length>0&&(je(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),r0(b.children,f,H,O,S)),!(b.path==null&&!b.index)&&f.push({path:O,score:Tp(O,b.index),routesMeta:H})};return s.forEach((b,E)=>{if(b.path===""||!b.path?.includes("?"))p(b,E);else for(let S of o0(b.path))p(b,E,!0,S)}),f}function o0(s){let f=s.split("/");if(f.length===0)return[];let[d,...c]=f,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let b=o0(c.join("/")),E=[];return E.push(...b.map(S=>S===""?p:[p,S].join("/"))),m&&E.push(...b),E.map(S=>s.startsWith("/")&&S===""?"/":S)}function bp(s){s.sort((f,d)=>f.score!==d.score?d.score-f.score:Ep(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var wp=/^:[\w-]+$/,jp=3,Sp=2,zp=1,kp=10,Np=-2,Qf=s=>s==="*";function Tp(s,f){let d=s.split("/"),c=d.length;return d.some(Qf)&&(c+=Np),f&&(c+=Sp),d.filter(m=>!Qf(m)).reduce((m,p)=>m+(wp.test(p)?jp:p===""?zp:kp),c)}function Ep(s,f){return s.length===f.length&&s.slice(0,-1).every((c,m)=>c===f[m])?s[s.length-1]-f[f.length-1]:0}function Cp(s,f,d=!1){let{routesMeta:c}=s,m={},p="/",b=[];for(let E=0;E<c.length;++E){let S=c[E],v=E===c.length-1,k=p==="/"?f:f.slice(p.length)||"/",O=ir({path:S.relativePath,caseSensitive:S.caseSensitive,end:v},k),H=S.route;if(!O&&v&&d&&!c[c.length-1].route.index&&(O=ir({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},k)),!O)return null;Object.assign(m,O.params),b.push({params:m,pathname:Wt([p,O.pathname]),pathnameBase:Hp(Wt([p,O.pathnameBase])),route:H}),O.pathnameBase!=="/"&&(p=Wt([p,O.pathnameBase]))}return b}function ir(s,f){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,c]=Ap(s.path,s.caseSensitive,s.end),m=f.match(d);if(!m)return null;let p=m[0],b=p.replace(/(.)\/+$/,"$1"),E=m.slice(1);return{params:c.reduce((v,{paramName:k,isOptional:O},H)=>{if(k==="*"){let V=E[H]||"";b=p.slice(0,p.length-V.length).replace(/(.)\/+$/,"$1")}const Y=E[H];return O&&!Y?v[k]=void 0:v[k]=(Y||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:b,pattern:s}}function Ap(s,f=!1,d=!0){At(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,E,S)=>(c.push({paramName:E,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),c]}function Mp(s){try{return s.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return At(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),s}}function Jt(s,f){if(f==="/")return s;if(!s.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=s.charAt(d);return c&&c!=="/"?null:s.slice(d)||"/"}function Rp(s,f="/"){let{pathname:d,search:c="",hash:m=""}=typeof s=="string"?Ei(s):s;return{pathname:d?d.startsWith("/")?d:Dp(d,f):f,search:Up(c),hash:Bp(m)}}function Dp(s,f){let d=f.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Es(s,f,d,c){return`Cannot include a '${s}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Op(s){return s.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function s0(s){let f=Op(s);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function c0(s,f,d,c=!1){let m;typeof s=="string"?m=Ei(s):(m={...s},je(!m.pathname||!m.pathname.includes("?"),Es("?","pathname","search",m)),je(!m.pathname||!m.pathname.includes("#"),Es("#","pathname","hash",m)),je(!m.search||!m.search.includes("#"),Es("#","search","hash",m)));let p=s===""||m.pathname==="",b=p?"/":m.pathname,E;if(b==null)E=d;else{let O=f.length-1;if(!c&&b.startsWith("..")){let H=b.split("/");for(;H[0]==="..";)H.shift(),O-=1;m.pathname=H.join("/")}E=O>=0?f[O]:"/"}let S=Rp(m,E),v=b&&b!=="/"&&b.endsWith("/"),k=(p||b===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(v||k)&&(S.pathname+="/"),S}var Wt=s=>s.join("/").replace(/\/\/+/g,"/"),Hp=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Up=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Bp=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function _p(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var d0=["POST","PUT","PATCH","DELETE"];new Set(d0);var Yp=["GET",...d0];new Set(Yp);var Ci=T.createContext(null);Ci.displayName="DataRouter";var nr=T.createContext(null);nr.displayName="DataRouterState";T.createContext(!1);var u0=T.createContext({isTransitioning:!1});u0.displayName="ViewTransition";var Lp=T.createContext(new Map);Lp.displayName="Fetchers";var Gp=T.createContext(null);Gp.displayName="Await";var Mt=T.createContext(null);Mt.displayName="Navigation";var Dn=T.createContext(null);Dn.displayName="Location";var It=T.createContext({outlet:null,matches:[],isDataRoute:!1});It.displayName="Route";var Hs=T.createContext(null);Hs.displayName="RouteError";function qp(s,{relative:f}={}){je(On(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=T.useContext(Mt),{hash:m,pathname:p,search:b}=Hn(s,{relative:f}),E=p;return d!=="/"&&(E=p==="/"?d:Wt([d,p])),c.createHref({pathname:E,search:b,hash:m})}function On(){return T.useContext(Dn)!=null}function qa(){return je(On(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Dn).location}var f0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m0(s){T.useContext(Mt).static||T.useLayoutEffect(s)}function Xp(){let{isDataRoute:s}=T.useContext(It);return s?a1():Vp()}function Vp(){je(On(),"useNavigate() may be used only in the context of a <Router> component.");let s=T.useContext(Ci),{basename:f,navigator:d}=T.useContext(Mt),{matches:c}=T.useContext(It),{pathname:m}=qa(),p=JSON.stringify(s0(c)),b=T.useRef(!1);return m0(()=>{b.current=!0}),T.useCallback((S,v={})=>{if(At(b.current,f0),!b.current)return;if(typeof S=="number"){d.go(S);return}let k=c0(S,JSON.parse(p),m,v.relative==="path");s==null&&f!=="/"&&(k.pathname=k.pathname==="/"?f:Wt([f,k.pathname])),(v.replace?d.replace:d.push)(k,v.state,v)},[f,d,p,m,s])}T.createContext(null);function Hn(s,{relative:f}={}){let{matches:d}=T.useContext(It),{pathname:c}=qa(),m=JSON.stringify(s0(d));return T.useMemo(()=>c0(s,JSON.parse(m),c,f==="path"),[s,m,c,f])}function Qp(s,f){return h0(s,f)}function h0(s,f,d,c,m){je(On(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=T.useContext(Mt),{matches:b}=T.useContext(It),E=b[b.length-1],S=E?E.params:{},v=E?E.pathname:"/",k=E?E.pathnameBase:"/",O=E&&E.route;{let q=O&&O.path||"";p0(v,!O||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let H=qa(),Y;if(f){let q=typeof f=="string"?Ei(f):f;je(k==="/"||q.pathname?.startsWith(k),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${q.pathname}" was given in the \`location\` prop.`),Y=q}else Y=H;let V=Y.pathname||"/",F=V;if(k!=="/"){let q=k.replace(/^\//,"").split("/");F="/"+V.replace(/^\//,"").split("/").slice(q.length).join("/")}let G=l0(s,{pathname:F});At(O||G!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),At(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Ip(G&&G.map(q=>Object.assign({},q,{params:Object.assign({},S,q.params),pathname:Wt([k,p.encodeLocation?p.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?k:Wt([k,p.encodeLocation?p.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),b,d,c,m);return f&&Q?T.createElement(Dn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},Q):Q}function Zp(){let s=t1(),f=_p(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",s),b=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:p},"ErrorBoundary")," or"," ",T.createElement("code",{style:p},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},f),d?T.createElement("pre",{style:m},d):null,b)}var Kp=T.createElement(Zp,null),Wp=class extends T.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,f){return f.location!==s.location||f.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:f.error,location:f.location,revalidation:s.revalidation||f.revalidation}}componentDidCatch(s,f){this.props.unstable_onError?this.props.unstable_onError(s,f):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?T.createElement(It.Provider,{value:this.props.routeContext},T.createElement(Hs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jp({routeContext:s,match:f,children:d}){let c=T.useContext(Ci);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),T.createElement(It.Provider,{value:s},d)}function Ip(s,f=[],d=null,c=null,m=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let p=s,b=d?.errors;if(b!=null){let v=p.findIndex(k=>k.route.id&&b?.[k.route.id]!==void 0);je(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,v+1))}let E=!1,S=-1;if(d)for(let v=0;v<p.length;v++){let k=p[v];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(S=v),k.route.id){let{loaderData:O,errors:H}=d,Y=k.route.loader&&!O.hasOwnProperty(k.route.id)&&(!H||H[k.route.id]===void 0);if(k.route.lazy||Y){E=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}return p.reduceRight((v,k,O)=>{let H,Y=!1,V=null,F=null;d&&(H=b&&k.route.id?b[k.route.id]:void 0,V=k.route.errorElement||Kp,E&&(S<0&&O===0?(p0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,F=null):S===O&&(Y=!0,F=k.route.hydrateFallbackElement||null)));let G=f.concat(p.slice(0,O+1)),Q=()=>{let q;return H?q=V:Y?q=F:k.route.Component?q=T.createElement(k.route.Component,null):k.route.element?q=k.route.element:q=v,T.createElement(Jp,{match:k,routeContext:{outlet:v,matches:G,isDataRoute:d!=null},children:q})};return d&&(k.route.ErrorBoundary||k.route.errorElement||O===0)?T.createElement(Wp,{location:d.location,revalidation:d.revalidation,component:V,error:H,children:Q(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:c}):Q()},null)}function Us(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fp(s){let f=T.useContext(Ci);return je(f,Us(s)),f}function $p(s){let f=T.useContext(nr);return je(f,Us(s)),f}function Pp(s){let f=T.useContext(It);return je(f,Us(s)),f}function Bs(s){let f=Pp(s),d=f.matches[f.matches.length-1];return je(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function e1(){return Bs("useRouteId")}function t1(){let s=T.useContext(Hs),f=$p("useRouteError"),d=Bs("useRouteError");return s!==void 0?s:f.errors?.[d]}function a1(){let{router:s}=Fp("useNavigate"),f=Bs("useNavigate"),d=T.useRef(!1);return m0(()=>{d.current=!0}),T.useCallback(async(m,p={})=>{At(d.current,f0),d.current&&(typeof m=="number"?s.navigate(m):await s.navigate(m,{fromRouteId:f,...p}))},[s,f])}var Zf={};function p0(s,f,d){!f&&!Zf[s]&&(Zf[s]=!0,At(!1,d))}T.memo(i1);function i1({routes:s,future:f,state:d,unstable_onError:c}){return h0(s,void 0,d,c,f)}function St(s){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function n1({basename:s="/",children:f=null,location:d,navigationType:c="POP",navigator:m,static:p=!1}){je(!On(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=s.replace(/^\/*/,"/"),E=T.useMemo(()=>({basename:b,navigator:m,static:p,future:{}}),[b,m,p]);typeof d=="string"&&(d=Ei(d));let{pathname:S="/",search:v="",hash:k="",state:O=null,key:H="default"}=d,Y=T.useMemo(()=>{let V=Jt(S,b);return V==null?null:{location:{pathname:V,search:v,hash:k,state:O,key:H},navigationType:c}},[b,S,v,k,O,H,c]);return At(Y!=null,`<Router basename="${b}"> is not able to match the URL "${S}${v}${k}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:T.createElement(Mt.Provider,{value:E},T.createElement(Dn.Provider,{children:f,value:Y}))}function l1({children:s,location:f}){return Qp(Ds(s),f)}function Ds(s,f=[]){let d=[];return T.Children.forEach(s,(c,m)=>{if(!T.isValidElement(c))return;let p=[...f,m];if(c.type===T.Fragment){d.push.apply(d,Ds(c.props.children,p));return}je(c.type===St,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=Ds(c.props.children,p)),d.push(b)}),d}var tr="get",ar="application/x-www-form-urlencoded";function lr(s){return s!=null&&typeof s.tagName=="string"}function r1(s){return lr(s)&&s.tagName.toLowerCase()==="button"}function o1(s){return lr(s)&&s.tagName.toLowerCase()==="form"}function s1(s){return lr(s)&&s.tagName.toLowerCase()==="input"}function c1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function d1(s,f){return s.button===0&&(!f||f==="_self")&&!c1(s)}var Fl=null;function u1(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var f1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cs(s){return s!=null&&!f1.has(s)?(At(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ar}"`),null):s}function m1(s,f){let d,c,m,p,b;if(o1(s)){let E=s.getAttribute("action");c=E?Jt(E,f):null,d=s.getAttribute("method")||tr,m=Cs(s.getAttribute("enctype"))||ar,p=new FormData(s)}else if(r1(s)||s1(s)&&(s.type==="submit"||s.type==="image")){let E=s.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=s.getAttribute("formaction")||E.getAttribute("action");if(c=S?Jt(S,f):null,d=s.getAttribute("formmethod")||E.getAttribute("method")||tr,m=Cs(s.getAttribute("formenctype"))||Cs(E.getAttribute("enctype"))||ar,p=new FormData(E,s),!u1()){let{name:v,type:k,value:O}=s;if(k==="image"){let H=v?`${v}.`:"";p.append(`${H}x`,"0"),p.append(`${H}y`,"0")}else v&&p.append(v,O)}}else{if(lr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=tr,c=null,m=ar,b=s}return p&&m==="text/plain"&&(b=p,p=void 0),{action:c,method:d.toLowerCase(),encType:m,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _s(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function h1(s,f,d){let c=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c.pathname==="/"?c.pathname=`_root.${d}`:f&&Jt(c.pathname,f)==="/"?c.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${d}`,c}async function p1(s,f){if(s.id in f)return f[s.id];try{let d=await import(s.module);return f[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g1(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function x1(s,f,d){let c=await Promise.all(s.map(async m=>{let p=f.routes[m.route.id];if(p){let b=await p1(p,d);return b.links?b.links():[]}return[]}));return w1(c.flat(1).filter(g1).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Kf(s,f,d,c,m,p){let b=(S,v)=>d[v]?S.route.id!==d[v].route.id:!0,E=(S,v)=>d[v].pathname!==S.pathname||d[v].route.path?.endsWith("*")&&d[v].params["*"]!==S.params["*"];return p==="assets"?f.filter((S,v)=>b(S,v)||E(S,v)):p==="data"?f.filter((S,v)=>{let k=c.routes[S.route.id];if(!k||!k.hasLoader)return!1;if(b(S,v)||E(S,v))return!0;if(S.route.shouldRevalidate){let O=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function v1(s,f,{includeHydrateFallback:d}={}){return y1(s.map(c=>{let m=f.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function y1(s){return[...new Set(s)]}function b1(s){let f={},d=Object.keys(s).sort();for(let c of d)f[c]=s[c];return f}function w1(s,f){let d=new Set;return new Set(f),s.reduce((c,m)=>{let p=JSON.stringify(b1(m));return d.has(p)||(d.add(p),c.push({key:p,link:m})),c},[])}function g0(){let s=T.useContext(Ci);return _s(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function j1(){let s=T.useContext(nr);return _s(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ys=T.createContext(void 0);Ys.displayName="FrameworkContext";function x0(){let s=T.useContext(Ys);return _s(s,"You must render this element inside a <HydratedRouter> element"),s}function S1(s,f){let d=T.useContext(Ys),[c,m]=T.useState(!1),[p,b]=T.useState(!1),{onFocus:E,onBlur:S,onMouseEnter:v,onMouseLeave:k,onTouchStart:O}=f,H=T.useRef(null);T.useEffect(()=>{if(s==="render"&&b(!0),s==="viewport"){let F=Q=>{Q.forEach(q=>{b(q.isIntersecting)})},G=new IntersectionObserver(F,{threshold:.5});return H.current&&G.observe(H.current),()=>{G.disconnect()}}},[s]),T.useEffect(()=>{if(c){let F=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(F)}}},[c]);let Y=()=>{m(!0)},V=()=>{m(!1),b(!1)};return d?s!=="intent"?[p,H,{}]:[p,H,{onFocus:An(E,Y),onBlur:An(S,V),onMouseEnter:An(v,Y),onMouseLeave:An(k,V),onTouchStart:An(O,Y)}]:[!1,H,{}]}function An(s,f){return d=>{s&&s(d),d.defaultPrevented||f(d)}}function z1({page:s,...f}){let{router:d}=g0(),c=T.useMemo(()=>l0(d.routes,s,d.basename),[d.routes,s,d.basename]);return c?T.createElement(N1,{page:s,matches:c,...f}):null}function k1(s){let{manifest:f,routeModules:d}=x0(),[c,m]=T.useState([]);return T.useEffect(()=>{let p=!1;return x1(s,f,d).then(b=>{p||m(b)}),()=>{p=!0}},[s,f,d]),c}function N1({page:s,matches:f,...d}){let c=qa(),{manifest:m,routeModules:p}=x0(),{basename:b}=g0(),{loaderData:E,matches:S}=j1(),v=T.useMemo(()=>Kf(s,f,S,m,c,"data"),[s,f,S,m,c]),k=T.useMemo(()=>Kf(s,f,S,m,c,"assets"),[s,f,S,m,c]),O=T.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let V=new Set,F=!1;if(f.forEach(Q=>{let q=m.routes[Q.route.id];!q||!q.hasLoader||(!v.some(ee=>ee.route.id===Q.route.id)&&Q.route.id in E&&p[Q.route.id]?.shouldRevalidate||q.hasClientLoader?F=!0:V.add(Q.route.id))}),V.size===0)return[];let G=h1(s,b,"data");return F&&V.size>0&&G.searchParams.set("_routes",f.filter(Q=>V.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[G.pathname+G.search]},[b,E,c,m,v,f,s,p]),H=T.useMemo(()=>v1(k,m),[k,m]),Y=k1(k);return T.createElement(T.Fragment,null,O.map(V=>T.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...d})),H.map(V=>T.createElement("link",{key:V,rel:"modulepreload",href:V,...d})),Y.map(({key:V,link:F})=>T.createElement("link",{key:V,nonce:d.nonce,...F})))}function T1(...s){return f=>{s.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v0&&(window.__reactRouterVersion="7.9.1")}catch{}function E1({basename:s,children:f,window:d}){let c=T.useRef();c.current==null&&(c.current=pp({window:d,v5Compat:!0}));let m=c.current,[p,b]=T.useState({action:m.action,location:m.location}),E=T.useCallback(S=>{T.startTransition(()=>b(S))},[b]);return T.useLayoutEffect(()=>m.listen(E),[m,E]),T.createElement(n1,{basename:s,children:f,location:p.location,navigationType:p.action,navigator:m})}var y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b0=T.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:m,reloadDocument:p,replace:b,state:E,target:S,to:v,preventScrollReset:k,viewTransition:O,...H},Y){let{basename:V}=T.useContext(Mt),F=typeof v=="string"&&y0.test(v),G,Q=!1;if(typeof v=="string"&&F&&(G=v,v0))try{let Se=new URL(window.location.href),Pe=v.startsWith("//")?new URL(Se.protocol+v):new URL(v),dt=Jt(Pe.pathname,V);Pe.origin===Se.origin&&dt!=null?v=dt+Pe.search+Pe.hash:Q=!0}catch{At(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=qp(v,{relative:m}),[ee,be,$]=S1(c,H),De=R1(v,{replace:b,state:E,target:S,preventScrollReset:k,relative:m,viewTransition:O});function Ae(Se){f&&f(Se),Se.defaultPrevented||De(Se)}let Oe=T.createElement("a",{...H,...$,href:G||q,onClick:Q||p?f:Ae,ref:T1(Y,be),target:S,"data-discover":!F&&d==="render"?"true":void 0});return ee&&!F?T.createElement(T.Fragment,null,Oe,T.createElement(z1,{page:q})):Oe});b0.displayName="Link";var C1=T.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:m=!1,style:p,to:b,viewTransition:E,children:S,...v},k){let O=Hn(b,{relative:v.relative}),H=qa(),Y=T.useContext(nr),{navigator:V,basename:F}=T.useContext(Mt),G=Y!=null&&B1(O)&&E===!0,Q=V.encodeLocation?V.encodeLocation(O).pathname:O.pathname,q=H.pathname,ee=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;d||(q=q.toLowerCase(),ee=ee?ee.toLowerCase():null,Q=Q.toLowerCase()),ee&&F&&(ee=Jt(ee,F)||ee);const be=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let $=q===Q||!m&&q.startsWith(Q)&&q.charAt(be)==="/",De=ee!=null&&(ee===Q||!m&&ee.startsWith(Q)&&ee.charAt(Q.length)==="/"),Ae={isActive:$,isPending:De,isTransitioning:G},Oe=$?f:void 0,Se;typeof c=="function"?Se=c(Ae):Se=[c,$?"active":null,De?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof p=="function"?p(Ae):p;return T.createElement(b0,{...v,"aria-current":Oe,className:Se,ref:k,style:Pe,to:b,viewTransition:E},typeof S=="function"?S(Ae):S)});C1.displayName="NavLink";var A1=T.forwardRef(({discover:s="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:m,state:p,method:b=tr,action:E,onSubmit:S,relative:v,preventScrollReset:k,viewTransition:O,...H},Y)=>{let V=H1(),F=U1(E,{relative:v}),G=b.toLowerCase()==="get"?"get":"post",Q=typeof E=="string"&&y0.test(E),q=ee=>{if(S&&S(ee),ee.defaultPrevented)return;ee.preventDefault();let be=ee.nativeEvent.submitter,$=be?.getAttribute("formmethod")||b;V(be||ee.currentTarget,{fetcherKey:f,method:$,navigate:d,replace:m,state:p,relative:v,preventScrollReset:k,viewTransition:O})};return T.createElement("form",{ref:Y,method:G,action:F,onSubmit:c?S:q,...H,"data-discover":!Q&&s==="render"?"true":void 0})});A1.displayName="Form";function M1(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w0(s){let f=T.useContext(Ci);return je(f,M1(s)),f}function R1(s,{target:f,replace:d,state:c,preventScrollReset:m,relative:p,viewTransition:b}={}){let E=Xp(),S=qa(),v=Hn(s,{relative:p});return T.useCallback(k=>{if(d1(k,f)){k.preventDefault();let O=d!==void 0?d:Rn(S)===Rn(v);E(s,{replace:O,state:c,preventScrollReset:m,relative:p,viewTransition:b})}},[S,E,v,d,c,f,s,m,p,b])}var D1=0,O1=()=>`__${String(++D1)}__`;function H1(){let{router:s}=w0("useSubmit"),{basename:f}=T.useContext(Mt),d=e1();return T.useCallback(async(c,m={})=>{let{action:p,method:b,encType:E,formData:S,body:v}=m1(c,f);if(m.navigate===!1){let k=m.fetcherKey||O1();await s.fetch(k,d,m.action||p,{preventScrollReset:m.preventScrollReset,formData:S,body:v,formMethod:m.method||b,formEncType:m.encType||E,flushSync:m.flushSync})}else await s.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:S,body:v,formMethod:m.method||b,formEncType:m.encType||E,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,f,d])}function U1(s,{relative:f}={}){let{basename:d}=T.useContext(Mt),c=T.useContext(It);je(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Hn(s||".",{relative:f})},b=qa();if(s==null){p.search=b.search;let E=new URLSearchParams(p.search),S=E.getAll("index");if(S.some(k=>k==="")){E.delete("index"),S.filter(O=>O).forEach(O=>E.append("index",O));let k=E.toString();p.search=k?`?${k}`:""}}return(!s||s===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Wt([d,p.pathname])),Rn(p)}function B1(s,{relative:f}={}){let d=T.useContext(u0);je(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=w0("useViewTransitionState"),m=Hn(s,{relative:f});if(!d.isTransitioning)return!1;let p=Jt(d.currentLocation.pathname,c)||d.currentLocation.pathname,b=Jt(d.nextLocation.pathname,c)||d.nextLocation.pathname;return ir(m.pathname,b)!=null||ir(m.pathname,p)!=null}const Rt="/assets/profile-Dvg5Mrpq.png",_1="/assets/shreayaa-DIab47yl.png",Y1=[{description:[n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"August 2020 rolls around, and there I am stepping foot in the beautiful UMass Amherst campus! Interested in tech and psychology I decided to double major in Computer Science and Psychology."}),n.jsx("span",{style:{display:"block",marginBottom:"1em"}}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Why choose one when you can have both, right?"})],position:"right",watermark:"🎓",isFirst:!0,year:"Aug 2020",location:"University of Massachusetts Amherst"},{description:[n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Two years into my bachelor's journey, I got my first job yayyy!!!"}),n.jsx("span",{style:{display:"block",marginBottom:"1em"}}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Being an RA taught me how to create community. From late-night crisis management to organizing fun floor events, this experience taught me how to understand people's needs and create environments where everyone could thrive."})],position:"left",watermark:"💼",year:"Aug 2022",jobTitle:"Resident Assistant"},{description:[n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I had taken up a volunteer position a few months back and realized that I love to help others learn. So  I applied to be a Teaching Assistant. A semester later I got promoted to be Head TA."}),n.jsx("span",{style:{display:"block",marginBottom:"1em"}}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"As Head TA, I found myself leading a team of TAs and supporting 80+ students in Human-Computer Interaction."})],position:"right",watermark:"💼",year:"Feb 2024",jobTitle:"Head Teaching Assistant"},{description:[n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Bachelor's degree in hand, I wasn't ready to stop learning. Enter Cornell University and my MPS in Information Science with a UX focus!"}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I was already in love with multi-disciplinary problem solving and I was trying to find an intersection between CS and psychology."}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"So Cornell's program was a dream come true! I loved learning about user research methods, design, prototyping and strategy. Plus, the campus is absolutely stunning!"})],position:"left",watermark:"🎓",year:"Aug 2024",location:"Cornell University, Ithaca"},{description:[n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"During my time at Cornell, I worked as a Graduate Teaching Specialist, supporting 200+ students across design and programming coursework."}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I graded assignments and mentored students as they explored design practices while programming."})],position:"right",watermark:"💼",year:"Aug 2024",jobTitle:"Graduate Teaching Specialist"},{description:[n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I lived my capstone dream, working directly with Google Cloud."}),n.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Our team was mentored by some of the nicest folks at Google Cloud while we got to learn so much about enterprise design and research."})],position:"left",watermark:"💼",year:"Jan 2025",jobTitle:"UX Designer + Researcher"},{description:"I worked as a Graduate RA, diving into co-design research with remote mental health support systems.",position:"right",watermark:"💼",year:"May 2025",jobTitle:"Graduate Research Assistant"}],L1=["Interaction Design","Interdisciplinary Thinking","Community Building","Conflict Resolution","Leadership","Mentorship","Mixed Methods Research","Prototyping","Qualitative Analysis","Co-Design","Programming","Teamwork"];function G1(){const s=T.useRef([]),f=T.useRef([]);return T.useEffect(()=>{const d=[];return s.current.forEach((c,m)=>{if(c){const p=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${m*.2}s`,E.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-50px"});p.observe(c),d.push(p)}}),f.current.forEach((c,m)=>{if(c){const p=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${m*.1}s`,E.target.classList.add("skill-animate-in"))})},{threshold:.1,rootMargin:"-30px"});p.observe(c),d.push(p)}}),()=>{d.forEach(c=>c.disconnect())}},[]),n.jsxs("div",{className:"about-page",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
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
          --sticky-yellow: #fef3c7;
          --sticky-blue: #b3b7ee;
          --sticky-pink: #fce7f3;
          --sticky-green: #d1fae5;
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

        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--beige) 0%, var(--mimi-pink) 30%, var(--light-blue) 70%, var(--amaranth-pink) 100%);
          position: relative;
        }

        /* Animated Background */
        .about-page::before {
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

        /* Content Container */
        .content-container {
          max-width: 1200px;
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

        /* About Section */
        .about-section {
          padding: 4rem 0;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(15px);
          position: relative;
        }

        /* Intro Header */
        .intro-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInFromTop 1s ease-out 0.3s forwards;
        }

        .intro-year-location {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .intro-description {
          font-size: 1.3rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 400;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        @keyframes slideInFromTop {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Timeline Container */
        .timeline-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto 6rem auto;
          padding: 2rem;
        }

        /* Timeline Path */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 4rem;
          width: 4px;
          transform: translateX(-50%);
          background: linear-gradient(to bottom, var(--rose-pompadour), var(--amaranth-pink));
          border-radius: 2px;
        }

        .timeline-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
        }

        /* Timeline Items */
        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          display: flex;
          align-items: flex-start;
          min-height: 300px;
          opacity: 0;
          transform: translateY(50px) scale(0.8);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Left Side Items */
        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 3rem;
        }

        .timeline-item.left .timeline-content {
          text-align: right;
          margin-right: 2rem;
          transform: translateX(50px);
        }

        .timeline-item.left.animate-in .timeline-content {
          transform: translateX(0);
        }

        /* Right Side Items */
        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 3rem;
        }

        .timeline-item.right .timeline-content {
          text-align: left;
          margin-left: 2rem;
          transform: translateX(-50px);
        }

        .timeline-item.right.animate-in .timeline-content {
          transform: translateX(0);
        }

        /* Watermarks */
        .timeline-item.left::before {
          content: attr(data-watermark);
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translate(50%, -50%) rotate(15deg);
          font-size: 12rem;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          color: rgba(29, 78, 216, 0.8);
          text-shadow: 0 0 20px rgba(29, 78, 216, 0.3);
        }

        .timeline-item.right::before {
          content: attr(data-watermark);
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translate(-50%, -50%) rotate(-15deg);
          font-size: 12rem;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          color: rgba(29, 78, 216, 0.8);
          text-shadow: 0 0 20px rgba(29, 78, 216, 0.3);
        }

        /* Timeline Cards */
        .timeline-content {
          position: relative;
          max-width: 420px;
          min-height: 200px;
          padding: 2rem 2.5rem;
          border-radius: 25px;
          background: var(--sticky-blue);
          border: 3px solid rgba(100, 116, 238, 0.4);
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.15),
            0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          z-index: 5;
          transform-origin: center;
          transform: rotate(1deg);
          flex-shrink: 0;
        }

        .timeline-content:hover {
          transform: translateY(-8px) scale(1.05) rotate(0deg);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* Enhanced Timeline Dots */
        .timeline-dot {
          position: absolute;
          left: 50%;
          width: 24px;
          height: 24px;
          background: linear-gradient(45deg, var(--rose-pompadour), var(--deep-rose));
          border: 5px solid white;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 10;
          box-shadow: 
            0 6px 20px rgba(226, 115, 150, 0.4),
            0 0 0 3px rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
        }

        /* Timeline Header - Year and Location */
        .timeline-header {
          margin-bottom: 1.5rem;
        }

        .timeline-year {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Fjalla One', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .timeline-location {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--deep-rose);
          margin-bottom: 1rem;
          font-family: 'Roboto', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          line-height: 1.3;
          }
          .timeline-location.job-title-right {
            justify-content: flex-end;
            text-align: right;
        }

        /* Regular timeline cards with year */
        .timeline-year-regular {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        /* Quote styling */
        .timeline-quote {
          font-size: 1rem;
          font-style: italic;
          color: var(--deep-rose);
          margin-bottom: 1rem;
          padding: 0.5rem 0;
          border-left: 3px solid var(--rose-pompadour);
          padding-left: 1rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        /* Content Text */
        .timeline-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.3;
          position: relative;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .timeline-title.small-title {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-style: italic;
          opacity: 0.9;
        }

        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
          font-weight: 400;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        .timeline-description br {
          display: block;
        }
        .timeline-description br + * {
          margin-top: 1em;
        }
        .timeline-description br::after {
          content: " ";
          display: block;
          margin-bottom: 1em;
        }

        /* Special alignment for left position cards */
        .timeline-item.left .timeline-location,
        .timeline-item.left .timeline-jobTitle,
        .timeline-item.left .timeline-quote {
          text-align: right;
        }

        .timeline-item.left .timeline-description {
          text-align: left;
        }

        /* Skills Section */
        .skills-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInFromTop 1s ease-out 0.8s forwards;
        }

        .skills-header h2 {
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem auto;
        }

        .skill-item {
          background: #b3b7ee;
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(226, 115, 150, 0.15);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-item.skill-animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .skill-item:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(226, 115, 150, 0.2);
          background: rgba(255, 255, 255, 1);
        }

        .skill-item span {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 1rem;
          font-family: 'Roboto', sans-serif;
        }

        /* Skills description */
        .skills-description {
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 3rem auto;
          line-height: 1.6;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        /* Reflection Text */
        .reflection-text {
          text-align: center;
          font-size: 1.3rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          max-width: 800px;
          margin: 2rem auto;
        }

        .reflection-cta {
          text-align: center;
          font-size: 1.2rem;
          color: var(--text-primary);
          font-weight: 600;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          margin-bottom: 3rem;
          font-style: italic;
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
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
        @media (max-width: 768px) {
          .timeline-line {
            left: 2rem;
            bottom: 6rem;
          }

          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 4rem !important;
            padding-right: 1rem !important;
            align-items: center !important;
            min-height: auto !important;
          }

          .timeline-item .timeline-content {
            text-align: left !important;
            margin-left: 1rem !important;
            margin-right: 0 !important;
            max-width: calc(100vw - 8rem) !important;
            transform: translateX(-30px) !important;
          }

          .timeline-item.animate-in .timeline-content {
            transform: translateX(0) !important;
          }

          .timeline-item.left .timeline-location,
          .timeline-item.left .timeline-quote,
          .timeline-item.left .timeline-description {
            text-align: left !important;
          }

          .timeline-item.left::before,
          .timeline-item.right::before {
            font-size: 6rem;
            left: 2rem;
            right: auto;
            transform: translate(-50%, -50%) rotate(-15deg);
            opacity: 0.3;
          }

          .timeline-dot {
            left: 2rem;
          }

          .timeline-container {
            padding: 2rem 1rem;
            margin-bottom: 4rem;
          }

          .timeline-content {
            padding: 1.5rem 2rem;
            min-height: 160px;
            max-width: calc(100vw - 8rem) !important;
          }

          .content-container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .timeline-content {
            padding: 1.5rem;
            min-height: 140px;
            max-width: calc(100vw - 6rem) !important;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }
        }
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("section",{className:"about-section",children:n.jsxs("div",{className:"content-container",children:[n.jsxs("div",{className:"intro-header",children:[n.jsx("div",{className:"intro-year-location",children:"🗓 May 2020📍🗺️ Chennai, India"}),n.jsxs("p",{className:"intro-description",children:["After wrapping up high school with a suitcase full of dreams in hand, I made one of the biggest and best decisions of my life. It was to pursue my education in the United States.",n.jsx("br",{}),"Little did I know, this was just the opening scene of an incredible adventure."]})]}),n.jsxs("div",{className:"timeline-container",children:[n.jsx("div",{className:"timeline-line"}),Y1.map((d,c)=>n.jsxs("div",{ref:m=>s.current[c]=m,className:`timeline-item ${d.position} ${c===0?"first-item":""}`,"data-watermark":d.watermark,children:[n.jsx("div",{className:"timeline-dot"}),n.jsxs("div",{className:`timeline-content ${d.isFirst?"first-card":""}`,children:[d.isFirst?n.jsxs("div",{className:"timeline-header",children:[n.jsxs("div",{className:"timeline-year",children:["🗓 ",d.year]}),n.jsxs("div",{className:"timeline-location",children:["📍🗺️ ",d.location]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"timeline-year-regular",children:["🗓 ",d.year]}),d.location&&n.jsx("div",{className:"timeline-location job-title-right",style:{width:"100%",justifyContent:"flex-end",display:"flex",textAlign:"right"},children:n.jsxs("span",{style:{textAlign:"right",width:"100%"},children:["📍🗺️ ",d.location]})}),d.jobTitle&&n.jsx("div",{className:"timeline-location",children:["Resident Assistant","UX Designer + Researcher"].includes(d.jobTitle)?n.jsx("div",{className:"timeline-location job-title-right",style:{width:"100%",justifyContent:"flex-end",display:"flex",textAlign:"right"},children:n.jsxs("span",{style:{textAlign:"right",width:"100%"},children:["💼 ",d.jobTitle]})}):n.jsx("div",{className:"timeline-location",style:{width:"100%",justifyContent:"flex-start",display:"flex",textAlign:"left"},children:n.jsxs("span",{style:{textAlign:"left",width:"100%"},children:["💼 ",d.jobTitle]})})}),d.quote&&n.jsxs("div",{className:"timeline-quote",children:['"',d.quote,'"']})]}),n.jsx("h3",{className:`timeline-title ${d.isFirst?"small-title":""}`,children:d.title}),n.jsx("p",{className:"timeline-description",children:d.description})]})]},c))]}),n.jsxs("div",{className:"skills-content",children:[n.jsx("div",{className:"skills-header",children:n.jsx("h2",{children:"This incredible journey so far has taught me so much. Its safe to say it has gotten me ready for the industry and the real world 💪"})}),n.jsx("div",{className:"skills-grid",children:L1.map((d,c)=>n.jsx("div",{ref:m=>f.current[c]=m,className:"skill-item",children:n.jsx("span",{children:d})},c))}),n.jsx("p",{className:"skills-description",children:"Talk to me about cooking, hiking, music, and more!"}),n.jsx("p",{className:"reflection-cta",children:"Want to be part of the next chapter? Let's connect!"})]})]})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}function q1(){return n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
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
            radial-gradient(circle at 20% 20%, rgba(226, 115, 150, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(179, 222, 226, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(239, 207, 227, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: waveFloat 20s ease-in-out infinite;
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

        /* Content Container */
        .content-container {
          max-width: 1200px;
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

        /* Playground Construction Section */
        .construction-section {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .construction-emoji {
          font-size: 5rem;
          margin-bottom: 2rem;
          animation: bounce 2s infinite;
        }

        .construction-title {
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-family: 'Fjalla One', sans-serif;
        }

        .construction-subtitle {
          font-size: 1.5rem;
          color: var(--deep-rose);
          margin-bottom: 2rem;
        }
        .serif-font {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
          font-style: normal !important;
        }
        

        .construction-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-family: 'Roboto', sans-serif;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2rem;
        }

        .construction-cta {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
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
        @media (max-width: 768px) {
          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }

          .custom-logo {
            height: 3.5rem;
          }

          .construction-section {
            padding: 3rem 1.5rem;
          }

          .construction-emoji {
            font-size: 4rem;
          }

          .construction-title {
            font-size: 2.5rem;
          }

          .construction-subtitle {
            font-size: 1.3rem;
          }

          .construction-description {
            font-size: 1.1rem;
          }

          .construction-cta {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.8rem;
          }

          .custom-logo {
            height: 3rem;
          }

          .construction-section {
            padding: 2rem 1rem;
          }

          .construction-emoji {
            font-size: 3rem;
          }

          .construction-title {
            font-size: 2rem;
          }

          .construction-subtitle {
            font-size: 1.1rem;
          }

          .construction-description {
            font-size: 1rem;
          }

          .footer-links {
            gap: 1rem;
          }
        }
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("section",{className:"construction-section",children:n.jsxs("div",{children:[n.jsx("div",{className:"construction-emoji",children:"🚧"}),n.jsx("p",{className:"construction-subtitle serif-font",children:"The playground is coming soon!"}),n.jsx("p",{className:"construction-description",children:"I'm currently working on showcasing my fun personal projects and all the creative chaos I love to dabble with."})]})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}const j0="/assets/capstone-mockup-DhJqv6Er.png",S0="/assets/ithaca-soap-mockup-DK_124JI.png",z0="/assets/iName-CvX8Q2r4.png",k0="/assets/routes-aVjpSWBA.png",N0="/assets/ecoCart-DN4gWc14.png",T0="/assets/rShiny-DeYEsmp9.png",E0="/assets/Dialogflow%20CX-BhfPPEZi.png",C0="/assets/Google_Gemini_logo.svg-DssHf0Y7.png",$l="/assets/OpenAI-black-monoblossom-xl2KzdHb.png",A0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M27.255%2080.719c0%207.33-5.978%2013.317-13.309%2013.317C6.616%2094.036.63%2088.049.63%2080.719s5.987-13.317%2013.317-13.317h13.309zm6.709%200c0-7.33%205.987-13.317%2013.317-13.317s13.317%205.986%2013.317%2013.317v33.335c0%207.33-5.986%2013.317-13.317%2013.317-7.33%200-13.317-5.987-13.317-13.317zm0%200'%20fill='%23de1c59'/%3e%3cpath%20d='M47.281%2027.255c-7.33%200-13.317-5.978-13.317-13.309C33.964%206.616%2039.951.63%2047.281.63s13.317%205.987%2013.317%2013.317v13.309zm0%206.709c7.33%200%2013.317%205.987%2013.317%2013.317s-5.986%2013.317-13.317%2013.317H13.946C6.616%2060.598.63%2054.612.63%2047.281c0-7.33%205.987-13.317%2013.317-13.317zm0%200'%20fill='%2335c5f0'/%3e%3cpath%20d='M100.745%2047.281c0-7.33%205.978-13.317%2013.309-13.317%207.33%200%2013.317%205.987%2013.317%2013.317s-5.987%2013.317-13.317%2013.317h-13.309zm-6.709%200c0%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.986-13.317-13.317V13.946C67.402%206.616%2073.388.63%2080.719.63c7.33%200%2013.317%205.987%2013.317%2013.317zm0%200'%20fill='%232eb57d'/%3e%3cpath%20d='M80.719%20100.745c7.33%200%2013.317%205.978%2013.317%2013.309%200%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33%200-13.317-5.987-13.317-13.317s5.986-13.317%2013.317-13.317h33.335c7.33%200%2013.317%205.986%2013.317%2013.317%200%207.33-5.987%2013.317-13.317%2013.317zm0%200'%20fill='%23ebb02e'/%3e%3c/svg%3e",M0="/assets/Vertex%20AI-lFv2_HRt.png",R0="data:image/svg+xml,%3csvg%20width='128'%20height='128'%20viewBox='0%200%20128%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.7127%2050.141L10.9614%2037.3896C-3.6538%2052.0049%20-3.6538%2075.7036%2010.9614%2090.3188L23.7127%2077.5674C20.0761%2073.9303%2018.033%2068.9976%2018.033%2063.8542C18.033%2058.7109%2020.0761%2053.7781%2023.7127%2050.141Z'%20fill='%23E8710A'/%3e%3cpath%20d='M10.9614%2037.3898L23.7128%2050.1411C27.3499%2046.5044%2032.2826%2044.4614%2037.426%2044.4614C42.5693%2044.4614%2047.5021%2046.5044%2051.1392%2050.1411L60.3949%2034.3002C60.2115%2034.1567%2060.0243%2034.0157%2059.8335%2033.8773C45.1808%2022.8868%2024.2929%2024.0564%2010.9614%2037.3898Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M60.4435%2093.3635L51.1298%2077.5675C47.4927%2081.2042%2042.56%2083.2472%2037.4166%2083.2472C32.2733%2083.2472%2027.3405%2081.2042%2023.7034%2077.5675L10.9614%2090.3189C24.2929%20103.65%2045.1827%20104.822%2059.841%2093.8314C60.0468%2093.6779%2060.4529%2093.3635%2060.4529%2093.3635'%20fill='%23F9AB00'/%3e%3cpath%20d='M64.1075%2037.3897C49.4923%2052.0049%2049.4923%2075.7036%2064.1075%2090.3188L76.8589%2077.5675C75.025%2075.774%2073.5651%2073.6345%2072.5637%2071.2729C71.5623%2068.9113%2071.0393%2066.3746%2071.025%2063.8095C71.0107%2061.2444%2071.5054%2058.702%2072.4804%2056.3294C73.4555%2053.9568%2074.8914%2051.8012%2076.7053%2049.9874C78.5191%2048.1736%2080.6747%2046.7376%2083.0472%2045.7626C85.4198%2044.7876%2087.9623%2044.2929%2090.5273%2044.3072C93.0924%2044.3215%2095.6292%2044.8444%2097.9908%2045.8458C100.352%2046.8472%20102.492%2048.3071%20104.285%2050.141L117.037%2037.3897C102.421%2022.7726%2078.7227%2022.7726%2064.1075%2037.3897Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M117.037%2037.3896L104.285%2050.141C107.856%2053.7917%20109.842%2058.7032%20109.814%2063.8095C109.785%2068.9157%20107.744%2073.8048%20104.133%2077.4155C100.523%2081.0262%2095.6336%2083.0673%2090.5274%2083.0958C85.4211%2083.1242%2080.5096%2081.1377%2076.8589%2077.5674L64.1075%2090.3188C78.7227%20104.934%20102.421%20104.934%20117.037%2090.3188C131.652%2075.7036%20131.654%2052.0049%20117.037%2037.3896Z'%20fill='%23E8710A'/%3e%3c/svg%3e",Pl="/assets/figma-BFQj-UUy.png",D0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2022.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%202385.7%201919.9'%20style='enable-background:new%200%200%202385.7%201919.9;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23EA4335;}%20.st1{fill:%234285F4;}%20.st2{fill:%2334A853;}%20.st3{fill:%23FBBC05;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M1513.8,528.7h72.8l207.4-207.4l10.2-88c-385.9-340.6-975-303.9-1315.6,82C393.9,422.5,325.2,550,287.8,688%20c23.1-9.5,48.7-11,72.8-4.4l414.7-68.4c0,0,21.1-34.9,32-32.7c184.5-202.6,495-226.2,708-53.8H1513.8z'/%3e%3cpath%20class='st1'%20d='M2089.4,688c-47.7-175.5-145.5-333.3-281.6-454l-291,291c122.9,100.4,192.9,251.7,189.9,410.4v51.7%20c143.1,0,259,116,259,259c0,143.1-116,259-259,259h-518.1l-51.7,52.4v310.7l51.7,51.7h518.1c297,2.3,560.5-190.2,648.7-473.8%20C2443.4,1162.4,2335.4,854.4,2089.4,688L2089.4,688z'/%3e%3cpath%20class='st2'%20d='M669.8,1917h518.1v-414.7H669.8c-36.9,0-73.4-7.9-107-23.3l-72.8,22.5l-208.8,207.4l-18.2,72.8%20C380.1,1870.1,523,1917.6,669.8,1917L669.8,1917z'/%3e%3cpath%20class='st3'%20d='M669.8,571.6c-287.8,1.7-542.7,186-634.5,458.7c-91.8,272.7-0.3,573.7,227.8,749.1l300.5-300.5%20c-130.4-58.9-188.3-212.3-129.4-342.7c58.9-130.4,212.3-188.3,342.7-129.4c57.4,26,103.4,72,129.4,129.4l300.5-300.5%20C1078.9,668.6,880.2,570.9,669.8,571.6L669.8,571.6z'/%3e%3c/g%3e%3c/svg%3e",O0="/assets/notion-logo-no-background-C1XUKvDk.png",H0="/assets/python-logo-only-Bt12VGEE.png",As="/assets/Miro-Icon-CLoaKXku.png",Wf="/assets/RStudio-DE7lGCGx.png",Ms="/assets/google-docs-4ZYrWyNZ.png",X1="/assets/Adobe%20Photoshop-Uqk2Zb6I.png",V1="/assets/Vue.js-DgkQqFWc.png",Q1="/assets/Veutify-GjC5VotX.png",Jf="/assets/GitHub-BLfHCd-g.png",Z1="/assets/copilot-color-CWHkV5zn.png",er="/assets/Canva-BLQe5K32.png",K1="/assets/ggplot.svg-B5k6dA_B.png",W1="/assets/midjourney-C5RMMGS7.png",J1="/assets/dplyr-CODcNSbZ.png",I1="/assets/R-BNsrwNRK.png",F1=[{id:1,title:"Cornell x Google Cloud Capstone Project",description:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users.",image:j0,imageType:"laptop",caseStudyUrl:"/google-cloud-case-study",toolLogos:[D0,R0,E0,M0,C0,H0,A0,O0]},{id:2,title:"Ithaca Soap Redesign",description:"Redesigned a local brand’s app to connect sustainability values with user priorities.",image:S0,imageType:"mobile",caseStudyUrl:"/ithaca-soap-case-study"},{id:3,title:"Routes to Roots App",description:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.",image:k0,imageType:"mobile",caseStudyUrl:"/routes-to-roots-case-study"},{id:4,title:"iName App",description:"Built a mobile app and wearable environment that helps people pronounce and remember names correctly, fostering identity and inclusion.",image:z0,imageType:"mobile",caseStudyUrl:"/iname-case-study"},{id:5,title:"EcoCart App",description:"Designed a mobile app that makes sustainable grocery shopping simple and actionable by turning confusing eco-labels into clear choices.",image:N0,imageType:"laptop",caseStudyUrl:"/ecocart-case-study"},{id:6,title:"Immunization Data Analysis Dashboard",description:"Developed an interactive dashboard that transforms messy vaccination data into clear insights for educators and policymakers.",image:T0,imageType:"mobile",caseStudyUrl:"/rshiny-case-study"}];function $1(){const s=T.useRef([]);T.useEffect(()=>{const d=[];return s.current.forEach((c,m)=>{if(c){const p=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${m*.2}s`,E.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-100px"});p.observe(c),d.push(p)}}),()=>{d.forEach(c=>c.disconnect())}},[]);const f=d=>{window.location.href=d};return n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("section",{className:"work-section",children:n.jsx("div",{className:"content-container",children:F1.map((d,c)=>n.jsxs("div",{ref:m=>s.current[c]=m,className:`project-row ${c%2===1?"reverse":""}`,onClick:()=>f(d.caseStudyUrl),children:[n.jsx("div",{className:"mockup-side",children:n.jsx("div",{className:`mockup-image-wrapper ${d.imageType}`,children:d.image?n.jsx("img",{src:d.image,alt:`${d.title} mockup`,className:"mockup-image"}):n.jsxs("div",{className:"mockup-placeholder",children:[n.jsx("div",{children:"Project Mockup Image"}),n.jsxs("small",{children:["(",d.imageType," mockup)"]})]})})}),n.jsxs("div",{className:"content-side",children:[n.jsx("h2",{className:"project-title",children:d.title}),n.jsx("p",{className:"project-description",children:d.description}),d.tools&&n.jsx("div",{className:"tools-row",children:d.tools.map((m,p)=>n.jsx("div",{className:"tool-badge",title:m,children:n.jsx("span",{className:"tool-text",children:m})},p))}),d.id===1&&d.toolLogos&&n.jsx("div",{className:"tool-logos-row",children:[D0,R0,E0,M0,C0,H0,A0,O0].map((m,p)=>n.jsx("img",{src:m,alt:`tool-${p}`,className:"tool-logo"},p))}),d.id===2&&n.jsx("div",{className:"tool-logos-row",children:[V1,Q1,Jf,Z1,Pl,er,$l].map((m,p)=>n.jsx("img",{src:m,alt:`ithaca-tool-${p}`,className:"tool-logo"},p))}),d.id===3&&n.jsx("div",{className:"tool-logos-row",children:[Pl,As,er,Wf,$l,Ms,X1].map((m,p)=>n.jsx("img",{src:m,alt:`routes-tool-${p}`,className:"tool-logo"},p))}),d.id===4&&n.jsx("div",{className:"tool-logos-row",children:[Pl,As,er,$l,Ms].map((m,p)=>n.jsx("img",{src:m,alt:`iname-tool-${p}`,className:"tool-logo"},p))}),d.id===5&&n.jsx("div",{className:"tool-logos-row",children:[Pl,As,er,$l,Ms].map((m,p)=>n.jsx("img",{src:m,alt:`ecocart-tool-${p}`,className:"tool-logo"},p))}),d.id===6&&n.jsx("div",{className:"tool-logos-row",children:[Wf,I1,Jf,K1,J1,W1].map((m,p)=>n.jsx("img",{src:m,alt:`immunization-tool-${p}`,className:"tool-logo"},p))})]})]},d.id))})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}const P1="/assets/haiku-app-build-process-CHMErIks.png",eg="/assets/cornell-chatbot-build-process-DNSAjoMx.png",tg="/assets/painPoint1-DBHfNOTY.png",ag="/assets/painPoint2-CgpjQyg_.png",ig="/assets/painPoint3-DypTOCTn.png",ng="/assets/painPoint4-DIy8mjfj.png",lg="/assets/impactFeasibility-E2P2Da3_.png",rg="/assets/hmw1-C-GsbhVH.png",og="/assets/hmw2-B01BOLXa.png",sg="/assets/fhmw-VbwO4vxY.png",cg="/assets/designPrinciple1-CHipiyAz.png",dg="/assets/designPrinciple2-CgjPv5UU.png",ug="/assets/designPrinciple3-Ctta_cph.png",If=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:"At the beginning of my final semester at Cornell, my team members and I were assigned a capstone project in collaboration with Google Cloud. This wasn't just another classroom assignment; it was an opportunity to work directly with one of the leading companies in the industry. Ahh, I was thrilled."}),n.jsx("p",{children:"We were guided by Alex Pytlarz, a senior UX designer at Google Cloud with over a decade of experience in design. Alex challenged us to experience Google Cloud as beginners, documenting every step of the way: what worked, what confused us, and what frustrated us."}),n.jsx("p",{children:"The project was structured into two phases."}),n.jsxs("ol",{children:[n.jsx("li",{children:"In Phase 1, we divided into two teams to build functional AI-driven apps: a Cornell student chatbot and a Photo-to-Haiku generator using Google Cloud products. Throughout Phase 1, we had to keep detailed diary studies of our journeys."}),n.jsx("li",{children:"In Phase 2, we brought together the pain points that both teams uncovered to find top opportunity areas and finally to present design improvements to tackle these challenges."})]}),n.jsx("p",{children:"This case study tells the story of how we went about the project to the final solution, that is, a step-by-step onboarding experience for Google Cloud's future."})]})},{id:2,title:"My Role",content:n.jsx("div",{children:n.jsx("p",{children:"As part of this cross-disciplinary team of 8, I contributed to both the research and design phases. I also put my developing skills to coding up the apps we built. I worked on diary studies, affinity mapping, and user interviews, as well as brainstorming, prototyping, and shaping our final presentation. My focus was also on ensuring our final solution told a clear and compelling story."})})},{id:3,title:"Our Users",content:n.jsx("div",{children:n.jsx("p",{children:"Our users were essentially ourselves. Meaning this became an autobiographical design of sorts. By documenting our real frustrations and confusions, we could authentically capture what it feels like to be a beginner. And by using these pain points, we were to present design improvements."})})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("p",{children:"I love structure, timelines, and sprints. They keep my mental sanity in the midst of the chaos of creativity and ensure that no matter how ambiguous the challenge, there's a clear path forward. For this project, we had three major sprints:"}),n.jsxs("ol",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Prototyping"}),": Building the Cornell student chatbot and the Photo-to-Haiku generator to experience Google Cloud as beginners."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Design"}),": Conducting exit interviews, auditing platforms, and prototyping for the final solution."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Branding & Presenting"}),": Crafting the narrative, refining the final solution, and presenting our work."]})]}),n.jsx("h4",{className:"fade-in-up",children:"01 Prototyping"}),n.jsx("p",{children:"The purpose wasn't to make polished products but to experience working with Google Cloud products."}),n.jsx("h5",{children:"01.1 Plan & Research"}),n.jsx("p",{children:"We explored Google Cloud's ecosystem by signing up for trials, playing with Vertex AI, Dialogflow CX, Firebase, and other tools, and planning which products might power our app ideas."}),n.jsx("h5",{children:"Research & Discovery"}),n.jsx("p",{children:"To capture our experiences, we conducted diary studies. Each of us logged daily notes: what tasks we attempted, where we struggled, what helped, and what felt missing."}),n.jsx("h5",{children:"01.2 First Prototype"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"The Cornell Student Chatbot"}),", powered by Dialogflow CX, Gemini, and Firebase, helped students find campus resources."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"The Photo-to-Haiku Generator"}),", built with Vision AI, Vertex AI, and Streamlit, transformed images into haikus."]})]}),n.jsx("h5",{children:"01.3 Refinement & Testing"}),n.jsx("p",{children:"We refined and tested these prototypes across different LLM models. While we achieved functional apps, every confusing installation error, every moment we resorted to ChatGPT because the official docs wasn't enough, became valuable data."}),n.jsx("img",{src:P1,alt:"Haiku App Build Process diagram",className:"fade-in-left"}),n.jsx("p",{className:"image-caption",children:"Haiku App Build Process - Flow diagram showing GGC Solution Generator to ChatGPT to Vertex AI Documentation to Streamlit for Hosting"}),n.jsx("img",{src:eg,alt:"Cornell Chatbot Build Process diagram",className:"fade-in-right"}),n.jsx("p",{className:"image-caption",children:"Cornell Chatbot Build Process - Flow diagram showing GGC Solution Generator to Tutorials to Gemini Code Assist to Live Demo Site with Chatbot"}),n.jsx("h4",{className:"fade-in-up",children:"02 Design"}),n.jsx("h5",{children:"02.1 Exit Interviews"}),n.jsx("p",{children:"We interviewed the other half of the team about their building journeys. These conversations led us to realize that our pain points were similar. We combined the team diaries to look for patterns."}),n.jsx("img",{src:tg,alt:"Pain Point 1: Overwhelming navigation and amount of content",className:"fade-in-up"}),n.jsx("p",{className:"image-caption",children:"Pain Point 1"}),n.jsx("img",{src:ag,alt:"Pain Point 2: Irrelevant search bar results and poor query matching",className:"fade-in-up"}),n.jsx("p",{className:"image-caption",children:"Pain Point 2"}),n.jsx("img",{src:ig,alt:"Pain Point 3: No clear or personalized path to finding answers",className:"fade-in-up"}),n.jsx("p",{className:"image-caption",children:"Pain Point 3"}),n.jsx("img",{src:ng,alt:"Pain Point 4: Lack of clear, step-by-step guidance for beginners",className:"fade-in-up"}),n.jsx("p",{className:"image-caption",children:"Pain Point 4"}),n.jsx("h5",{children:"02.2 Opportunity Areas"}),n.jsx("p",{children:"Analyzing the pain points we figured the opportunity areas for design and created an impact feasibility matrix to prioritize what we design for."}),n.jsx("img",{src:lg,alt:"Impact vs Feasibility Matrix showing design opportunity prioritization",style:{width:"100%",maxWidth:"800px",height:"auto"}}),n.jsx("div",{style:{textAlign:"center",fontStyle:"italic",color:"#666",fontSize:"14px",marginBottom:"20px"},children:"Impact vs Feasibility Matrix"}),n.jsx("h5",{children:"02.3 Brainstorm & Ideation"}),n.jsx("p",{children:'We reframed the problems into "How Might We" questions, such as:'}),n.jsxs("ul",{children:[n.jsx("li",{children:"HMW boost the solution generator's visibility and function?"}),n.jsx("li",{children:"HMW provide clear onboarding for non-technical users?"})]}),n.jsx("img",{src:rg,alt:"How Might We question 1: HMW boost the solution generator's visibility and function?",className:"fade-in-left"}),n.jsx("p",{className:"image-caption",children:"HMW boost the solution generator's visibility and function?"}),n.jsx("img",{src:og,alt:"How Might We question 2: HMW provide clear onboarding for non-technical users?",className:"fade-in-right"}),n.jsx("p",{className:"image-caption",children:"HMW provide clear onboarding for non-technical users?"}),n.jsx("p",{children:"We narrowed everything down to one HMW question."}),n.jsx("img",{src:sg,alt:"Final How Might We question: HMWW guide new non-technical builders to build projects through a linear, personalized, and step-by-step experience?"}),n.jsx("p",{className:"image-caption",children:"Final HMW"}),n.jsx("h5",{children:"02.4 Prototyping (Low-Fi → Hi-Fi)"}),n.jsx("p",{children:"We sketched low-fidelity ideas first, testing flows quickly. Then we moved to high-fidelity prototypes that embodied our design principles."}),n.jsx("h6",{children:"02.4.1 Design Principles"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Interactivity by default"}),n.jsx("li",{children:"Step-by-step guidance with progressive disclosure"}),n.jsx("li",{children:"Clarity through concise visual communication"})]}),n.jsx("img",{src:cg,alt:"Design Principle 1: Interactivity by Default - Steps are personalized to your use case"}),n.jsx("p",{className:"image-caption",children:"Interactivity by Default"}),n.jsx("img",{src:dg,alt:"Design Principle 2: Step-by-Step Guidance with Progressive Disclosure - Reduces cognitive load while providing guidance"}),n.jsx("p",{className:"image-caption",children:"Step-by-Step Guidance with Progressive Disclosure"}),n.jsx("img",{src:ug,alt:"Design Principle 3: Clarity through Concise Visual Communication - Reduce cognitive overload"}),n.jsx("p",{className:"image-caption",children:"Clarity through Concise Visual Communication"}),n.jsx("h4",{className:"fade-in-up",children:"03 Branding & Presenting"}),n.jsx("h5",{children:"03.1 Storyline"}),n.jsx("p",{children:"We crafted a narrative arc that captured our journey."}),n.jsx("h5",{children:"03.2 Final Solution & Presentation"}),n.jsx("p",{children:"We presented our high-fidelity prototypes alongside the apps we had built. The focus wasn't just on what we created, but on the broader vision: how Google Cloud could evolve into a more welcoming platform for new non-technical users."})]})},{id:5,title:"Final Design",content:n.jsxs("div",{children:[n.jsx("p",{children:"Our final solution was a high-fidelity prototype of a guided onboarding experience for Google Cloud. It embodied interactivity, progressive disclosure, and clarity through visuals — making it easier for beginners to navigate, learn, and build."}),n.jsx("div",{className:"fade-in-up",style:{width:"100%",maxWidth:"900px",margin:"2rem auto 0.5rem auto",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",display:"block"},children:n.jsx("iframe",{width:"100%",height:"506",src:"https://www.youtube.com/embed/g4A4sPdYbSs",title:"Google Cloud Guided Onboarding Experience",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"900px",height:"506px",display:"block"}})}),n.jsx("p",{className:"image-caption",children:"Final Prototype: Google Cloud Guided Onboarding Experience"})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"We need to rethink interaction flows and features beyond the classic text chatbot."}),n.jsx("li",{children:"LLMs changed over the course of this project, underscoring the need for flexibility and rapid adoption of new technologies."}),n.jsx("li",{children:"AI is lowering the barrier to entry for non-technical people, opening the door to innovation like never before."})]})})}];function fg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:j0,alt:"Google Cloud Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata",children:[n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer + Researcher"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Christina, Albert, Amparo, Emma, Mika, Runjia and Uyen"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Jan 2025 - May 2025"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[If.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>s(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:If.map(d=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons",children:[n.jsxs("a",{href:"/work",className:"nav-button primary",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:f,className:"nav-button secondary",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const mg="/assets/dr-florence-morris-BW9wzwPO.png",hg="/assets/priya-malhotra--bXDWzSX.png",pg="/assets/sharon-kim-CTtt0dQo.png",gg="/assets/lisa-raymond-BDDh1_nE.png",xg="/assets/task-scenarios-DKiajNwy.png",vg="/assets/home-BjxMVM82.png",yg="/assets/products-Brya4jRU.png",bg="/assets/productsDetail-DqgzRyVy.png",wg="/assets/offers-CGRyLhs0.png",jg="/assets/community-DejwBG4Q.png",Sg="/assets/communityNews-D8U01a_w.png",zg="/assets/lowfi-fzXvxzfD.jpg",kg="/assets/taskFlow-Bj1Sn7Ur.png",Ff=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:'For the class "App Design and Prototyping," we had to collaborate with a real brand to redesign their app. Our client, Ithaca Soap, had a strong offline presence but needed a digital experience that reflected their mission of sustainability and simplicity.'}),n.jsx("p",{children:"At first glance, building a soap app might sound straightforward. But the real challenge lay deeper: how do you translate the tactile, sensory trust of sustainable personal care into a mobile-first, engaging, and intuitive app?"}),n.jsx("p",{children:"This case study is the story of how our team designed and prototyped the Ithaca Soap mobile app, a high-fidelity prototype."})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"In this project, I wore several hats:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"As a researcher, I helped synthesize user interviews and persona insights, making sure our design choices reflected real user needs."}),n.jsx("li",{children:"As a designer, I worked on translating research into a high-fidelity design system."}),n.jsx("li",{children:"As a prototyper, I used tools like Vue.js, Vuetify, and AI assistance (ChatGPT & Copilot), and built interactive flows that communicated the product vision."}),n.jsx("li",{children:"Also facilitated in-person tests, gathered observations, and iterated on design elements to improve clarity and usability."})]})]})},{id:3,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("p",{children:"We had four sprints: research, brainstorming and sketching, prototyping, but as you'll see, the journey wasn't linear. Each phase uncovered new insights that guided us closer to the brand's vision."}),n.jsx("h4",{className:"fade-in-up",children:"01 Research & Discovery"}),n.jsx("p",{children:"When we first sat down with Ithaca Soap, we expected sustainability to be at the heart of everything. And it was, but not in the way we thought. While the client cared deeply about ingredient transparency and eco-friendly packaging, our early interviews and field studies showed us that users cared most about how the soap smelled, how it felt on their skin, and whether it fit easily into their routines."}),n.jsx("p",{children:"That gap between the brand's mission and the customer's priorities became the central tension of our project."}),n.jsx("p",{children:"To make sense of it, we built four personas."}),n.jsx("h4",{className:"fade-in-up",children:"02 Personas & Scenarios"}),n.jsx("p",{children:"From this research, we developed four personas that shaped our design:"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1.5rem",margin:"2rem 0"},children:[n.jsx("div",{className:"persona-card",children:n.jsx("img",{src:mg,alt:"Dr. Florence Morris persona card"})}),n.jsx("div",{className:"persona-card",children:n.jsx("img",{src:hg,alt:"Priya Malhotra persona card"})}),n.jsx("div",{className:"persona-card",children:n.jsx("img",{src:pg,alt:"Sharon Kim persona card"})}),n.jsx("div",{className:"persona-card",children:n.jsx("img",{src:gg,alt:"Lisa Raymond persona card"})})]}),n.jsx("p",{children:"To keep the design grounded, we built task scenarios for each persona that were later directly tied to the design features."}),n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx("img",{src:xg,alt:"Task scenarios for Priya, Sharon, Dr. Morris, and Lisa showing their specific use cases and goals",style:{width:"100%",maxWidth:"800px",height:"auto"}})}),n.jsx("p",{className:"image-caption",children:"Task scenarios for each persona showing their specific use cases and goals"})]})},{id:4,title:"Prototyping",content:n.jsxs("div",{children:[n.jsx("p",{children:"With scenarios in hand, we began sketching and wireframing. Early paper sketches helped us explore flows quickly, and once we had confidence, we built out prototypes using Vue.js."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:n.jsx("img",{src:zg,alt:"Team prototyping session",style:{width:"100%",maxWidth:"700px",height:"auto",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"}})}),n.jsx("p",{className:"image-caption",children:"Team prototyping session "}),n.jsx("h4",{className:"fade-in-up",children:"01 High-Fidelity Prototype"}),n.jsx("p",{children:"The final prototype, built with Vue.js and Vuetify, focused on six key views:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Home:"})," A curated carousel introducing products and brand values."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Products:"})," A filterable view by scent, use case, and skin type."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Product Detail:"})," Ingredient transparency, use-case visuals, reviews, and now a review submission field."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Offers:"})," Bundles, seasonal deals, and engaging incentives with animated confirmations."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Community:"})," A store map, farmers' market promo, story cards, and newsletter signup."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Admin Panel:"})," A lightweight simulation of content and promotion management."]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem",margin:"2rem 0"},children:[n.jsxs("div",{className:"app-screen",children:[n.jsx("img",{src:vg,alt:"Home screen showing welcome message and product recommendations"}),n.jsx("p",{className:"image-caption",children:"Home View"})]}),n.jsxs("div",{className:"app-screen",children:[n.jsx("img",{src:yg,alt:"Products screen with filtering options by scent, use case, and skin type"}),n.jsx("p",{className:"image-caption",children:"Products View"})]}),n.jsxs("div",{className:"app-screen",children:[n.jsx("img",{src:bg,alt:"Product detail screen for Amber Bar Soap with ingredients and pricing"}),n.jsx("p",{className:"image-caption",children:"Product Detail View"})]}),n.jsxs("div",{className:"app-screen",children:[n.jsx("img",{src:wg,alt:"Offers screen showing DIY challenge and bundle deals"}),n.jsx("p",{className:"image-caption",children:"Offers View"})]}),n.jsxs("div",{className:"app-screen",children:[n.jsx("img",{src:jg,alt:"Community screen with store map and local retailer information"}),n.jsx("p",{className:"image-caption",children:"Community View"})]}),n.jsxs("div",{className:"app-screen",children:[n.jsx("img",{src:Sg,alt:"Community news screen with stories and newsletter signup"}),n.jsx("p",{className:"image-caption",children:"Community Stories View"})]})]}),n.jsx("p",{children:"We used AI-assisted prototyping tools like ChatGPT and Copilot. These tools helped us scaffold components, generate realistic placeholder data, and quickly troubleshoot design issues, letting us focus on the user experience."}),n.jsx("h4",{className:"fade-in-up",children:"02 Testing & Iteration"}),n.jsx("p",{children:"A prototype is only as strong as its feedback. We ran in-person usability testing with several participants, each mapped to one of our personas."}),n.jsx("h5",{children:"What Worked Well"}),n.jsxs("ul",{children:[n.jsx("li",{children:"The bottom navigation bar felt intuitive and easy to use."}),n.jsx("li",{children:"Branding and visuals conveyed trust."}),n.jsx("li",{children:"The installable PWA prototype ran smoothly on mobile devices."})]}),n.jsx("h5",{children:"What Needed Work"}),n.jsxs("ul",{children:[n.jsx("li",{children:'The term "Catalog" confused users; it sounded like a brochure rather than a storefront.'}),n.jsx("li",{children:"Interactive elements lacked feedback animations, leaving users uncertain if actions were registered."}),n.jsx("li",{children:"Product detail pages felt text-heavy while participants wanted visual guidance."}),n.jsx("li",{children:"Navigation icons weren't always recognized as clickable."})]}),n.jsx("h5",{children:"Revisions We Made"}),n.jsxs("ul",{children:[n.jsx("li",{children:'"Catalog" became Products for clarity.'}),n.jsx("li",{children:"Added confirmation popups and animations for interactions."}),n.jsx("li",{children:"Introduced a review input box and more engaging visuals on product detail pages."}),n.jsx("li",{children:"Replaced icons with more recognizable symbols."})]}),n.jsx("p",{children:"These refinements tightened the app's usability and better aligned the experience with both client and user expectations."})]})},{id:5,title:"Final Design",content:n.jsxs("div",{children:[n.jsx("p",{children:"We mapped each scenario to specific views and tested goals to ensure the prototype supported the full user journey."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:n.jsx("img",{src:kg,alt:"Task flow breakdown showing how each persona maps to specific app views and testing goals",style:{width:"100%",maxWidth:"900px",height:"auto",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"}})}),n.jsx("p",{className:"image-caption",children:"Task flow breakdown: How each feature of the app ties directly to the users goals"}),n.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:n.jsx("div",{style:{width:"100%",maxWidth:"400px",height:"auto",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:n.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/GDo7jKW1DII",title:"Ithaca Soap Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"400px",height:"400px",display:"block"}})})}),n.jsx("p",{className:"image-caption",children:"Interactive prototype demonstration showing the complete user journey"})]})},{id:6,title:"What Did I Learn?",content:n.jsxs("div",{children:[n.jsxs("ul",{children:[n.jsx("li",{children:"Clients often want to lead with their values, but users are motivated by convenience first. The best design finds a way to connect the two."}),n.jsx("li",{children:'Something as simple as renaming "Catalog" to "Products" completely changed how users interpreted the page.'}),n.jsx("li",{children:"Users want confirmation when they take an action, no matter how small. Even animated GIFs or subtle popups dramatically improved usability."}),n.jsx("li",{children:"Prototyping is powerful. Even rough, early flows made it easier to test assumptions and gather useful feedback."}),n.jsx("li",{children:"Iteration is everything. Each testing cycle revealed something small, a confusing label, a missing feedback loop, that ultimately made the product stronger."}),n.jsx("li",{children:"Tools like ChatGPT and Copilot accelerated the technical side, giving us more time to focus on storytelling, research, and iteration."})]}),n.jsx("p",{children:"Most importantly, I learned that design is about trust, between the client, the brand, and the users."})]})}];function Ng(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
          max-width: 1000px;
          height: auto;
          max-height: 600px;
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

        /* Persona card styling */
        .persona-card {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .persona-card img {
          width: 100%;
          max-width: 350px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          margin: 0;
        }

        .persona-card:hover img {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        /* App screen styling */
        .app-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }

        .app-screen img {
          width: 100%;
          max-width: 280px;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
          margin-bottom: 0.8rem;
        }

        .app-screen:hover img {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
        }

        .screen-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--rose-pompadour);
          text-align: center;
          margin: 0;
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

          .nav-button {
            width: 100%;
            max-width: 280px;
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:S0,alt:"Ithaca Soap Company Website Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata",children:[n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX/UI Designer + Developer"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika and Siying"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Jan 2025 - May 2025"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Ff.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>s(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Ff.map(d=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons",children:[n.jsxs("a",{href:"/work",className:"nav-button primary",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:f,className:"nav-button secondary",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Tg="/assets/item1-DFIblHDH.jpeg",Eg="/assets/item2-CLnbi5Ua.jpg",Cg="/assets/item3-w30zsngq.jpeg",Ag="/assets/item4-B5HklVDu.JPG",Mg="/assets/item5-m0BflQys.png",Rg="/assets/Persona-CPVysNhA.jpg",Dg="/assets/method2data1-CB-Xj_my.png",Og="/assets/method2data2-BV3rMy1-.png",Hg="/assets/finalDesign-DKRfjgJQ.png",$f=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:"It's the beginning of a new semester at college. You're juggling classes, clubs, assignments, and the million things happening on campus. But in the middle of all that chaos, something feels off."}),n.jsx("p",{children:"Maybe the traditional dance you used to practice every week is now a once-a-semester thing. Maybe it's that you haven't cooked the recipes you grew up with in months. Or maybe it's simply the quiet ache of not hearing your language spoken outside your phone calls home."}),n.jsx("p",{children:"For students from culturally diverse backgrounds, hobbies aren't just ways to pass time. They are a way of remembering who you are while building who you're becoming. And yet, we found that these practices are the first to be sacrificed in the grind of university life."}),n.jsxs("p",{children:["That disconnect is what inspired ",n.jsx("strong",{children:"Routes to Roots"}),": a project to understand the barriers to cultural hobby engagement and design a solution that helps students reconnect, reflect, and sustain their cultural practices."]})]})},{id:2,title:"My Role",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"Designed and distributed the cultural probe kits to participants."}),n.jsx("li",{children:"Conducted exit interviews and synthesized responses through coding and affinity mapping."}),n.jsx("li",{children:"Participated in the autoethnography study, journaling experiences with hobby-related apps."}),n.jsx("li",{children:"Contributed to creating personas and defining design objectives based on findings."}),n.jsx("li",{children:"Collaborated on the Routes to Roots kiosk concept, including user flow and interaction design."})]})})},{id:3,title:"Research Process",content:n.jsxs("div",{children:[n.jsx("p",{children:"To explore these, we followed these sprints:"}),n.jsxs("ol",{children:[n.jsx("li",{children:"Interviewed and observed students who practiced cultural hobbies."}),n.jsx("li",{children:"As the first method, we used cultural probes and diary studies to capture lived experiences."}),n.jsx("li",{children:"As the second method, we conducted an autoethnography, where we became participants ourselves."}),n.jsx("li",{children:"Analyzed the data we collected in the methods through affinity mapping, personas, word clouds, and graphs."}),n.jsx("li",{children:"Prototyped and wireframed the kiosk-based solution."})]}),n.jsx("h4",{children:"Method 1: Cultural Probes & Diaries"}),n.jsx("p",{children:"We recruited 10 students from cultural clubs across Cornell. Their hobbies ranged from cultural dance to cooking, calligraphy, and music."}),n.jsx("p",{children:"Each student received a cultural-probe kit with four parts:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"A diary study with daily questions about cultural connections and hobby engagement."}),n.jsxs("li",{children:["A handmade scrapbook wherein the participants had to:",n.jsxs("ul",{children:[n.jsx("li",{children:"Draw pictures/drawings about how they perceive their cultural hobbies"}),n.jsx("li",{children:"Fill out an index card documenting feelings about what they miss"}),n.jsx("li",{children:"Keep a timeline map tracking hobby journeys to mark peaks and lows"}),n.jsx("li",{children:'Place themselves in a "Community-Web" diagram where they map their connections to different communities'})]})]}),n.jsx("li",{children:"A weekly schedule grid recording time spent on academic commitments, required extracurricular commitments, leisurely hobbies, and cultural activities."}),n.jsx("li",{children:"A postcard to future self"})]}),n.jsxs("div",{className:"probe-kit-gallery",children:[n.jsx("img",{src:Tg,alt:"Cultural probe kit overview - diary and scrapbook materials"}),n.jsx("img",{src:Eg,alt:"Daily diary study template with cultural connection questions"}),n.jsx("img",{src:Cg,alt:"Participant persona - Maya Chen, tentative explorer"}),n.jsx("img",{src:Mg,alt:"Scrapbook pages with cultural hobby reflections and community mapping"}),n.jsx("img",{src:Ag,alt:"Letter to future self about cultural hobby goals"})]}),n.jsx("h5",{children:"What we found"}),n.jsxs("ul",{children:[n.jsx("li",{children:'One participant wrote about cooking as "the only way I feel at home again," while another described the pride of explaining her culture to friends through film.'}),n.jsx("li",{children:'Most cultural hobbies occupied just 0–3 hours a week, often disappearing during busy academic stretches. One participant simply wrote, "No time. Makes me sad."'}),n.jsx("li",{children:`Postcards revealed a longing to stay connected. "Don't let work wash away your passion," one wrote to their future self.`})]}),n.jsx("p",{children:"We created a persona to guide us."}),n.jsx("img",{src:Rg,alt:"Maya Chen persona - showing user goals, pain points, and expectations for cultural hobby engagement"}),n.jsx("h4",{children:"Method 2: Autoethnography"}),n.jsx("p",{children:"As a team, we resonated with much of the problem statement, and what we found with method 1 we decided to turn inward. We each chose a hobby-related app (from music practice trackers to cooking platforms) and used them daily for a week while journaling our experiences."}),n.jsx("h5",{children:"What we noticed"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Writing about a cooking app, one teammate noted that the joy came not from the interface, but from memories with their cousins back home."}),n.jsx("li",{children:"Apps lacked built-in motivators: No streaks, reminders, or emotional check-ins meant enthusiasm faded quickly."}),n.jsx("li",{children:"We wanted to track how hobbies made us feel, not just how many minutes we logged."}),n.jsx("li",{children:"We felt tone mattered. Apps that offered storytelling or cultural context resonated far more than mechanical, checklist-style ones."})]}),n.jsx("p",{children:"This exercise made one thing clear: digital apps alone wouldn't cut it. Students needed cultural engagement to be easily available and emotionally resonant."}),n.jsx("img",{src:Dg,alt:"Feature-based frustration triggers across apps - heatmap showing user pain points"}),n.jsx("img",{src:Og,alt:"Percentage of days app encouraged motivation - showing which apps were most effective"})]})},{id:4,title:"Design",content:n.jsxs("div",{children:[n.jsx("p",{children:'We decided against building "just another app." Instead, we created a kiosk-based system, a visible, physical presence on campus in common spaces.'}),n.jsx("p",{children:"Why a kiosk? Because visibility itself is part of the intervention. By embedding cultural expression into shared spaces, we aimed to normalize it, celebrate it, and make it discoverable."}),n.jsx("h5",{children:"Key Features"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Explore:"})," Students tap their ID and browse cultural hobbies, peer groups, events, and practice spaces."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Contribute:"})," They can add their own cultural practices, keeping the system alive and inclusive."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Connect:"})," After each interaction, students receive a curated follow-up email with event links, peer contacts, or reflection prompts."]})]}),n.jsx("p",{children:'Instead of productivity dashboards, the kiosk offers gentle reminders that say: "Your roots matter."'}),n.jsx("img",{src:Hg,alt:"Routes to Roots kiosk interface showing cultural hobby options and community connections"})]})},{id:5,title:"Final Design",content:n.jsxs("div",{children:[n.jsx("p",{children:"Watch how the design would work in real life."}),n.jsx("div",{className:"video-container",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/NbugF3D0B9k",title:"Routes to Roots - Final Design Demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"I learned how important it is to design beyond usability, creating systems that resonate emotionally. Routes to Roots wasn't about efficiency; it was about belonging."}),n.jsx("li",{children:"Using both cultural probes and autoethnography taught me the strength of combining generative and reflective research."}),n.jsx("li",{children:"This project and this course as a whole taught me that sometimes the right design intervention isn't another digital app. Considering the physical context of campus life helped us create a more visible and impactful solution."})]})})}];function Ug(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
          max-width: 1500px;
          height: auto;
          max-height: 1100px;
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

        /* YouTube video container styling */
        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 2rem auto;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .video-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Cultural probe kit gallery styling - Custom asymmetric layout */
        .probe-kit-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 2rem 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .probe-kit-gallery img {
          display: block;
          width: 100%;
          height: auto;
          margin: 0;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .probe-kit-gallery img:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
        }

        /* Specific positioning for each item - no height changes */
        .probe-kit-gallery img:nth-child(1) {
        }

        .probe-kit-gallery img:nth-child(2) {
        }

        .probe-kit-gallery img:nth-child(3) {
        }

        .probe-kit-gallery img:nth-child(4) {
        }

        .probe-kit-gallery img:nth-child(5) {
          grid-column: 1 / -1;
          justify-self: center;
          max-width: 50%;
        }

        /* Mobile responsive for probe kit gallery */
        @media (max-width: 768px) {
          .probe-kit-gallery {
            grid-template-columns: 1fr;
            grid-template-areas:
              "item1"
              "item2"
              "item3"
              "item4"
              "item5";
            gap: 1rem;
            max-width: 90%;
          }
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:k0,alt:"Routes to Roots Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Researcher + Designer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika, Sumit, Ashley and Carrie"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Jan 2025 - May 2025"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[$f.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>s(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:$f.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:f,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Bg="/assets/storyboard1-fBactef1.png",_g="/assets/storyboard2-Dq1tlHVE.png",Yg="/assets/storyboard3-NQAMn8Tz.png",Lg="/assets/prototype1-CqnRYqh1.png",Gg="/assets/prototype2-wMH44h2A.png",qg="/assets/prototype3-CAUpV1-q.png",Xg="/assets/prototype4-BHIa9hNy.png",Vg="/assets/prototype5-CsczmHRT.png",Pf=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:`Imagine landing in a new country for the first time. You're excited, nervous, and ready to meet people, except every introduction turns into a mini struggle. Your name gets mispronounced again and again. You start shortening it, giving an "easy version," or just avoiding correcting people altogether. Over time, this chips away at your confidence in classrooms, networking events, and even casual conversations.`}),n.jsxs("p",{children:["That frustration sparked our team's project: ",n.jsx("strong",{children:"iName"})," — a mobile and wearable app designed to make introductions smoother by helping people pronounce and remember names correctly while also honoring the cultural stories behind them."]})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"I wore many hats in this project:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"researcher"}),", I interviewed international participants, analyzed the data, and conducted usability tests."]}),n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"strategist"}),", I sketched and storyboarded scenarios, imagining how technology could work in real life."]}),n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"designer"}),", I built prototypes in Figma, turning our rough sketches into something people could actually use."]})]}),n.jsx("p",{children:"More than anything, I focused on making sure the voices of our users stayed at the center of every decision."})]})},{id:3,title:"Understanding Our Users",content:n.jsxs("div",{children:[n.jsx("p",{children:"We focused on non-native English speakers at Cornell — students, visiting scholars, and newcomers navigating a new world."}),n.jsx("p",{children:`One student told us, "I stopped correcting because I was tired of repeating my name ten times." Another said, "It feels like I'm asking people for too much just to say it right."`}),n.jsx("p",{children:"These stories shaped our problem: people don't just need their names pronounced correctly; they need their identity respected and remembered."})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("h4",{children:"01 Research"}),n.jsx("p",{children:"Our research showed that existing solutions like Google Translate or simple name tags fell short; they either lacked cultural context, felt outdated, or weren't built just for social/professional environments."}),n.jsx("p",{children:'We also explored tools like RescueTime in the productivity space (from our inspiration case) and saw a parallel: they solved the "what" but not the "how." Similarly, apps stored names, but none combined memory, pronunciation, and cultural meaning in one. That gap was our opportunity.'}),n.jsx("h4",{children:"02 Early Concepts"}),n.jsx("p",{children:"We started with imagination. What if you could rent smart glasses at an event, and when you met someone new, their name floated above them with the correct pronunciation whispered in your ear?"}),n.jsx("p",{children:"What if there was an interactive map that let you dive into the syllables of Irish, Mandarin, or Hindi names?"}),n.jsx("p",{children:"What if, before a networking event, you could know the names of all the attendees so you never had to stumble through introductions again?"}),n.jsx("p",{children:'These "what ifs" turned into sketches, and the sketches turned into storyboards.'}),n.jsx("ul",{children:n.jsx("li",{children:"Liu, a student from China, records his pronunciation during sign-up, finally feeling like people will hear his name the way his family intended."})}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",margin:"2rem 0"},children:[n.jsx("img",{src:Bg,alt:"Storyboard panels 1-2: User signs up and tries iName app"}),n.jsx("img",{src:_g,alt:"Storyboard panels 3-4: User learns phonics and accesses family name pronunciation"}),n.jsx("img",{src:Yg,alt:"Storyboard panels 5-6: User explores China/Mandarin meaning and successfully uses iName"})]}),n.jsx("h4",{children:"03 Prototyping"}),n.jsx("p",{children:"From there, we built wireframes: clean flows for creating profiles, saving names, exploring the world map, and connecting to smart devices. As fidelity increased, we experimented with typography, color palettes, and interactions until the app felt warm and inclusive."}),n.jsx("h4",{children:"04 Testing"}),n.jsx("p",{children:"Then came the real test: putting iName into the hands of students. We gave them tasks like signing up, saving names from a group, or exploring the cultural map. That's when we realized some things weren't working:"}),n.jsxs("ul",{children:[n.jsx("li",{children:'The "Starred Names" icon confused people; nobody knew what it did.'}),n.jsx("li",{children:"The Explore map looked pretty, but users didn't know they could click into it."}),n.jsx("li",{children:"Dense blocks of cultural content overwhelmed readers."}),n.jsx("li",{children:"Everyone wanted profile pictures to connect faces with names."})]}),n.jsx("p",{children:"So we iterated"}),n.jsxs("ul",{children:[n.jsx("li",{children:'We turned "Starred Names" into a clearly labeled Saved tab.'}),n.jsx("li",{children:"We added tooltips and markers to the map."}),n.jsx("li",{children:"We broke content into bite-sized sections with visuals."}),n.jsx("li",{children:"We redesigned event attendee lists into profile cards with photos and play buttons."})]}),n.jsx("p",{children:"Each cycle of testing pulled us closer to the product our users actually needed."})]})},{id:5,title:"Final Design Solution",content:n.jsxs("div",{children:[n.jsx("p",{children:"The final iName experience combines mobile and wearable design with fun features:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Sign Up"}),": Users can record their pronunciation, add phonetic hints, and share the meaning of their name."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Explore"}),": An interactive world map that connects names to cultures, syllables, and stories."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Saved"}),": A dedicated space to bookmark and organize names you want to remember for events."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Event Prep"}),": Attendees get pronunciation reminders ahead of time."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Smart Devices"}),": Glasses and earbuds that display and pronounce names in real time at events."]})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"nowrap",gap:"2rem",justifyContent:"center",alignItems:"flex-start",margin:"2.5rem 0",overflowX:"auto",width:"calc(100% + 480px)",marginLeft:"-240px",marginRight:"-240px",paddingLeft:"240px",paddingRight:"240px"},children:[n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:Lg,alt:"Sign Up screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:Gg,alt:"Profile screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:qg,alt:"Groups screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:Xg,alt:"Explore screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:Vg,alt:"Devices screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})})]}),n.jsxs("div",{style:{marginTop:"1.5rem"},children:[n.jsx("h3",{style:{margin:0,color:"var(--text-secondary)"},children:"Watch how the solution works in real life"}),n.jsx("div",{style:{maxWidth:"100%",marginTop:"1rem",borderRadius:"12px"},children:n.jsx("iframe",{width:"100%",height:"506",src:"https://www.youtube.com/embed/hC4MDLmYAGg",title:"iName Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"900px",height:"506px",display:"block"}})})]})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"Storyboards helped us communicate user needs more vividly to our team, ensuring alignment before we invested in prototypes."}),n.jsx("li",{children:"During think-aloud sessions, the most valuable feedback came from moments of hesitation, when users weren't sure what to tap or why a feature existed."}),n.jsx("li",{children:"Learning to observe confusion without intervening gave me clearer signals on where the design was failing."})]})})}];function Qg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:z0,alt:"iName Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer + Developer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Ariel, Chaowei, and Qiqiu"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Pf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>s(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Pf.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:f,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Zg="/assets/features-bUjuRKn3.png",Kg="/assets/comicStrip-BmdIqTwL.png",Wg="/assets/keytakeaways-B24h4SkF.png",e0=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:"Picture this: it’s Sunday afternoon, you’re at the grocery store, and you’re staring at two brands of pasta. One claims to be organic, the other is cheaper, but you have no idea which is actually environmentally friendly. You care about sustainability, but with confusing labels, it’s hard to know what the “right” choice really is."}),n.jsxs("p",{children:["That exact frustration is what inspired us to create ",n.jsx("strong",{children:"EcoCart"}),"."]}),n.jsx("p",{children:"Our goal? To make sustainable grocery shopping less complicated and more rewarding by giving people real-time insights, clear alternatives, and even incentives for choosing eco-friendly options."})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"I worked as part of a cross-disciplinary team of designers and researchers."}),n.jsxs("ul",{children:[n.jsx("li",{children:"As a researcher, I conducted interviews, field studies, and affinity mapping. Evaluated by running usability tests and analyzing key takeaways."}),n.jsx("li",{children:"As a designer, I created wireframes, prototypes, and tested flows."})]})]})},{id:3,title:"Our Users",content:n.jsxs("div",{children:[n.jsx("p",{children:"We began by exploring two groups:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Individuals whose choices are primarily shaped by cost and availability."}),n.jsx("li",{children:"Sustainability shoppers who have the means to shop responsibly but lack clarity and guidance."})]}),n.jsx("p",{children:"Through interviews with students, professors, and grocery staff, we realized a hard truth: food-insecure communities can’t realistically prioritize sustainability when survival is at stake."}),n.jsx("p",{children:"Instead, EcoCart would be more impactful if designed for users who already want to shop sustainably but feel confused or unsupported by existing tools."})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("h4",{children:"01 Research & Definition"}),n.jsx("p",{children:"We started with field studies, interviews, and secondary research into food sustainability."}),n.jsx("p",{children:"“Shoppers wanted sustainability simplified into a single score rather than fragmented eco-labels.”"}),n.jsx("p",{children:"An affinity map helped us synthesize competing priorities: affordability vs. eco-consciousness. From this, we refined our problem statement:"}),n.jsx("p",{children:n.jsx("em",{children:n.jsx("strong",{children:"“People who are unaware of food sustainability but want to make better choices need a clear, intuitive way to understand the impact of their shopping habits.”"})})}),n.jsx("h4",{children:"02 Early Design Goals"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Clear Sustainability Insight: provide transparency and actionable data."}),n.jsx("li",{children:"Secure Scanning: ensure trust in how scanning works."}),n.jsx("li",{children:"Seamless Integration: fit into both in-store and at-home shopping habits."})]}),n.jsx("h4",{children:"03 Prototyping"}),n.jsx("p",{children:"We developed low- and mid-fidelity prototypes to test interactions, focusing on tasks like scanning, comparing alternatives, and managing wishlists. Wireframes mapped flows such as real-time in-store use and remote browsing from home."}),n.jsx("h4",{children:"04 Evaluations"}),n.jsx("p",{children:"To test usability and intuitiveness, we ran structured walkthroughs where users performed five key tasks:"}),n.jsxs("ol",{children:[n.jsx("li",{children:"Selecting Products In-Store: Participants had to add items to a cart quickly and clearly."}),n.jsx("li",{children:"Real-time Scanning & Alternatives: They had to scan a product and review suggested sustainable swaps."}),n.jsx("li",{children:"Evaluating Sustainability Metrics: They compared alternatives based on environmental scores."}),n.jsx("li",{children:"Adding Products to Wishlist: Simply save items for later shopping."}),n.jsx("li",{children:"Exploring Search-from-Home: Had to transition smoothly from store use to remote browsing EcoCart."})]}),n.jsx("h4",{children:"05 Key Takeaways"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Users felt that the app currently lacks incentives to encourage them to pick out the more sustainable alternatives."}),n.jsx("li",{children:"Users wanted an intuitive way to interact with products, such as tapping the product container to receive confirmation for adding alternatives."}),n.jsx("li",{children:"Users struggled to navigate back to the home screen from the profile section, leading to frustration, indicating the need for a ‘home’ button on each page."}),n.jsx("li",{children:"Users found it difficult to locate specific saved items in a long list, with no clear filtering or organization options."})]}),n.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:n.jsx("img",{src:Wg,alt:"Key takeaways",style:{maxWidth:"85%",height:"auto",borderRadius:"8px"}})})]})},{id:5,title:"Final Solution",content:n.jsxs("div",{children:[n.jsx("p",{children:"After iterating over all the evaluations, our final product had 4 key features:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Scan products, instantly see eco-metrics, and explore sustainable alternatives."}),n.jsx("li",{children:"Plan shopping remotely, save items, and check store availability."}),n.jsx("li",{children:"Incentivize eco-friendly purchases with points that translate into savings."}),n.jsx("li",{children:"Support local small-scale businesses alongside sustainability goals."})]}),n.jsx("div",{style:{textAlign:"center",margin:"1rem 0"},children:n.jsx("img",{src:Zg,alt:"EcoCart features",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})}),n.jsx("h5",{children:"Why would people use EcoCart?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"It turns confusing sustainability choices into clear comparisons."}),n.jsx("li",{children:"It makes eco-friendly habits practical by blending seamlessly into shopping."}),n.jsx("li",{children:"It rewards users for doing good, proving that climate action can also feel like a personal win."})]}),n.jsx("p",{children:"“Imagine scanning your usual pasta and instantly seeing: this swap saves 2kg of CO₂. You add it to your cart, earn reward points, and leave the store not just with dinner, but while creating impact.”"}),n.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:n.jsx("img",{src:Kg,alt:"EcoCart comic strip",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsx("ul",{children:n.jsx("li",{children:"Behavior change requires reinforcement: people need prompts, reminders, and rewards, not just information."})})})}];function Jg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:N0,alt:"EcoCart Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika, Ashley, and Bakhtawar"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[e0.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>s(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:e0.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:f,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Ig="/assets/finalProduct1-CB1LE1Sm.png",Fg="/assets/finalProduct2-CNhrKZ4S.png",t0=[{id:1,title:"Overview",content:n.jsx("div",{children:n.jsx("p",{children:"Between 2012 and 2022, the Connecticut Department of Public Health collected annual school-level vaccination and exemption data. The challenge? Making sense of more than 500 rows of data covering different vaccines, grades, and school types, and finding a way to turn it into actionable insights for educators, policymakers, and health officials."})})},{id:2,title:"My Role",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"As an analyst cleaned and restructured messy, incomplete records, explored relationships between exemptions, enrollment size, school type, and grade level."}),n.jsx("li",{children:"As a developer built an interactive Shiny web application to bring the data to life."}),n.jsx("li",{children:"Translated raw numbers into trends that could be understood outside of a technical context."})]})})},{id:3,title:"Coding It Up",content:n.jsxs("div",{children:[n.jsx("p",{children:"This wasn’t just “load a dataset and plot a chart.” The coding process involved several critical steps:"}),n.jsx("h4",{children:"01 Data Cleaning"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We handled missing values by replacing NA with 0 where appropriate."}),n.jsx("li",{children:"Renamed columns for readability."}),n.jsx("li",{children:"Converted grade levels into factors for easier grouping and analysis."}),n.jsx("li",{children:"Removed redundant percentage columns to avoid duplication."})]}),n.jsx("h4",{children:"02 Exploratory Data Analysis (EDA)"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We compared vaccination rates between public and private schools."}),n.jsx("li",{children:"Looked at grade-level patterns, e.g., compliance differences in kindergarten vs. middle school."}),n.jsx("li",{children:"Studied trends over time, checking whether exemption rates were increasing."})]})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("p",{children:"After evaluating the options, we selected the main visualizations to include in our product. We decided that a Shiny application would be the best way to showcase the data, allowing users to apply filters to control the dataset and explore various visualizations."}),n.jsx("p",{children:"We aimed to ensure that policymakers could easily view and interpret the results to make informed decisions regarding vaccinations for school children. We developed a responsive Shiny application to achieve our product goals, putting significant effort into designing an interface that is user-friendly, even for non-tech-savvy individuals."}),n.jsx("p",{children:"We used a gradient scale of orange for our color palettes to evoke a sense of warmth and energy. Additionally, we utilized Midjourney to generate a descriptive image for the sidebar. This image aims to clearly illustrate our intention of drawing attention to the children’s immunization guidelines."}),n.jsx("h4",{children:"01 Building in Shiny"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We added filters for school year, grade, vaccine type, and school type."}),n.jsx("li",{children:"Used ggplot2 for clean, interpretable visualizations."}),n.jsx("li",{children:"Structured the app so users could quickly switch between vaccination coverage, exemptions, and compliance metrics."})]})]})},{id:5,title:"Final Product",content:n.jsxs("div",{children:[n.jsx("p",{children:"The end result a interactive Shiny application that allows users to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Filter vaccination data by school type, grade, vaccine, and time period."}),n.jsx("li",{children:"Visualize exemption rates alongside enrollment counts."}),n.jsx("li",{children:"Track compliance trends over the 10-year period."})]}),n.jsxs("div",{className:"final-images",children:[n.jsx("img",{src:Ig,alt:"Final product 1",className:"final-image"}),n.jsx("img",{src:Fg,alt:"Final product 2",className:"final-image"})]})]})},{id:6,title:"What Did I Learn?",content:n.jsxs("div",{children:[n.jsxs("ul",{children:[n.jsx("li",{children:"A static report would have buried these insights, but an interactive app made them accessible."}),n.jsx("li",{children:"I learned how to clean messy datasets in R turning raw, inconsistent records into usable structures."}),n.jsx("li",{children:"I got comfortable with data visualization in ggplot2, learning how small tweaks in aesthetics can make a chart either confusing or crystal clear."}),n.jsx("li",{children:"I learnt the power of Shiny apps, and how interactivity transforms static numbers into tools people can actually use."})]}),n.jsxs("p",{children:["✅ Acknowledgments",n.jsx("br",{}),"Thanks to the Connecticut Department of Public Health for the dataset, the R/Shiny community for tools and documentation."]})]})}];function $g(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:T0,alt:"rShiny Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata",children:[n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"Data Scientist"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Xihan, and Yuzu"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[t0.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>s(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:t0.map(d=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons",children:[n.jsxs("a",{href:"/work",className:"nav-button primary",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:f,className:"nav-button secondary",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Mn=[{description:n.jsxs(n.Fragment,{children:[n.jsx("q",{children:"I ground design in mixed-method research."}),n.jsx("br",{}),n.jsx("br",{}),"I’ve used methods like cultural probes, diary studies and auto-ethnography to uncover hidden user needs."]})},{description:n.jsxs(n.Fragment,{children:[n.jsx("q",{children:"I align user needs with business goals."}),n.jsx("br",{}),n.jsx("br",{}),"By prioritizing features based on real pain points and feasibility, I create designs that are purposeful and effective."]})},{description:n.jsxs(n.Fragment,{children:[n.jsx("q",{children:"I design realistic solutions informed by code."}),n.jsx("br",{}),n.jsx("br",{}),"With a CS background, I prototype with technical constraints in mind and easily collaborate with engineers."]})},{description:n.jsxs(n.Fragment,{children:[n.jsx("q",{children:"I design for social impact."}),n.jsx("br",{}),n.jsx("br",{}),"My work focuses on inclusive experiences that foster belonging, respect identity, and make everyday interactions more equitable."]})},{description:n.jsxs(n.Fragment,{children:[n.jsx("q",{children:"I believe in iteration as progress."}),n.jsx("br",{}),n.jsx("br",{}),"Through repeated cycles of design and feedback, I’ve seen how even small changes improve usability."]})},{description:n.jsxs(n.Fragment,{children:[n.jsx("q",{children:"I have mentored and taught students."}),n.jsx("br",{}),n.jsx("br",{}),"As a teaching specialist, I’ve supported 250+ students in design practices that helped them grow with confidence."]})}];function Pg(){const[s,f]=T.useState(0),[d,c]=T.useState(0),[m,p]=T.useState(""),[b,E]=T.useState(!1),[S,v]=T.useState(!1),k=i0.useMemo(()=>["designer.","researcher.","strategist."],[]);return T.useEffect(()=>{if(!S){const O=setInterval(()=>{f(H=>(H+1)%Mn.length)},4e3);return()=>clearInterval(O)}},[S]),T.useEffect(()=>{const O=setTimeout(()=>{const H=k[d];b?(p(H.substring(0,m.length-1)),m===""&&(E(!1),c(Y=>(Y+1)%k.length))):(p(H.substring(0,m.length+1)),m===H&&setTimeout(()=>E(!0),1500))},b?50:80);return()=>clearTimeout(O)},[m,b,d,k]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
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

        .header {
          background: rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 100;
          border-bottom: 1px solid rgba(226, 115, 150, 0.2);
          transition: all 0.3s ease;
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
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .typewriter {
          color: var(--rose-pompadour);
          position: relative;
        }

        .hero-text p {
          font-size: 1.4rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 550px;
          line-height: 1.7;
          font-weight: 400;
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
          align-items: flex-start;
          justify-content: flex-start;
          margin-top: -150px;
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

        .hero-photo img {
          width: clamp(350px, 45vw, 480px);
          height: auto;
          object-fit: contain;
          object-position: center bottom;
          transition: all 0.4s ease;
        }

        .hero-photo img:hover {
          transform: scale(1.05);
        }

        .skills {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          padding: 2rem 0;
          position: relative;
          border-top: 1px solid rgba(226, 115, 150, 0.1);
          border-bottom: 1px solid rgba(226, 115, 150, 0.1);
        }

        .skills-container {
          position: relative;
          height: 50px;
          display: flex;
          align-items: center;
        }

        .skills-strip {
          display: flex;
          white-space: nowrap;
          animation: scrollSkills 120s linear infinite;
          gap: 3rem;
          align-items: center;
          width: max-content;
        }

        .skills-strip span {
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--text-primary);
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(226, 115, 150, 0.15);
          transition: all 0.3s ease;
          font-family: 'Roboto', sans-serif;
          box-shadow: 0 4px 15px rgba(226, 115, 150, 0.1);
          flex-shrink: 0;
          min-width: max-content;
        }

        .skills-strip span:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(226, 115, 150, 0.2);
          background: rgba(255, 255, 255, 1);
          border-color: var(--rose-pompadour);
        }

        @keyframes scrollSkills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .design-section {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          position: relative;
          padding: 7rem 0;
        }

        .design-content {
          display: flex;
          align-items: flex-start;
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
          font-size: 1.3rem;
          color: var(--text-secondary);
          line-height: 1.8;
          font-weight: 400;
          margin-bottom: 1.5rem;
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

        .footer {
          text-align: center;
          padding: 3rem 0;
          background: #ea9ab2;
          position: relative;
          overflow: hidden;
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
          
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            gap: 3rem;
            text-align: center;
          }

          .hero-text {
            max-width: 100%;
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

          .footer-message h3 {
            font-size: 1.2rem;
          }

          .footer-links {
            gap: 1.5rem;
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
          
          .header-content {
            padding: 1rem 0;
          }
          
          .nav-links {
            gap: 1rem;
          }
          
          .nav-links a {
            font-size: 0.9rem;
          }

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

          .skills-strip span {
            font-size: 0.9rem;
            padding: 0.7rem 1.2rem;
          }

          .custom-logo {
            height: 3.5rem;
          }

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

          .footer-message h3 {
            font-size: 1.1rem;
          }

          .footer-links {
            gap: 1rem;
          }

          .footer-icon {
            width: 24px;
            height: 24px;
          }
        }
        `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:Rt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/work",children:"WORK"}),n.jsx("a",{href:"/playground",children:"PLAYGROUND"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1Ck0VoQj4Z5gCS6YomoHuaNHGsYRvC7BQ/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),n.jsx("section",{className:"hero",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-text",children:[n.jsxs("h1",{children:["Hi, I'm Shreayaa."," ",n.jsxs("span",{className:"typewriter",children:["I'm a ",m,n.jsx("span",{style:{borderRight:"2px solid",animation:"blink 1s infinite"},children:"|"})]})]}),n.jsx("p",{children:"I'm a user experience designer who is curious about how design influences human behavior in the real world. I design thoughtful user experiences that balance user needs with business strategy."})]}),n.jsx("div",{className:"hero-image",children:n.jsx("div",{className:"hero-photo",children:n.jsx("img",{src:_1,alt:"Shreayaa Srinivasan"})})})]})})}),n.jsx("section",{className:"skills",children:n.jsx("div",{className:"skills-container",children:n.jsx("div",{className:"skills-strip",children:["Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing","Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing"].map((O,H)=>n.jsx("span",{children:O},H))})})}),n.jsx("section",{className:"design-section",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"design-content",children:[n.jsxs("div",{className:"design-left",children:[n.jsx("h2",{children:"Who am I as a designer?"}),n.jsx("p",{children:"Coming from a background in both computer science and user experience design, I bring a unique blend of technical expertise and design thinking. I design with empathy and purpose."}),n.jsx("p",{children:"I am comfortable working closely with researchers, engineers, and stakeholders to shape ideas into products people trust and enjoy."})]}),n.jsx("div",{className:"design-gallery",children:n.jsx("div",{className:"gallery-container",onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:Mn.map((O,H)=>{let Y="gallery-card";return H===s?Y+=" active":H===(s-1+Mn.length)%Mn.length?Y+=" prev":H===(s+1)%Mn.length&&(Y+=" next"),n.jsx("div",{className:Y,children:n.jsxs("div",{className:"card-content",children:[n.jsx("h3",{children:O.title}),n.jsx("p",{style:{marginBottom:"1.2rem"},children:O.description})]})},H)})})})]})})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}function U0(){return n.jsx(E1,{children:n.jsxs(l1,{children:[n.jsx(St,{path:"/",element:n.jsx(Pg,{})}),n.jsx(St,{path:"/about",element:n.jsx(G1,{})}),n.jsx(St,{path:"/playground",element:n.jsx(q1,{})}),n.jsx(St,{path:"/work",element:n.jsx($1,{})}),n.jsx(St,{path:"/google-cloud-case-study",element:n.jsx(fg,{})}),n.jsx(St,{path:"/ithaca-soap-case-study",element:n.jsx(Ng,{})}),n.jsx(St,{path:"/routes-to-roots-case-study",element:n.jsx(Ug,{})}),n.jsx(St,{path:"/ecocart-case-study",element:n.jsx(Jg,{})}),n.jsx(St,{path:"/iname-case-study",element:n.jsx(Qg,{})}),n.jsx(St,{path:"/rshiny-case-study",element:n.jsx($g,{})})]})})}n0.createRoot(document.getElementById("root")).render(n.jsx(T.StrictMode,{children:n.jsx(U0,{})}));hp.createRoot(document.getElementById("root")).render(n.jsx(i0.StrictMode,{children:n.jsx(U0,{})}));
