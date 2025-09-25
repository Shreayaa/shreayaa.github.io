(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();function n0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var js={exports:{}},Ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function rp(){if(Df)return Ei;Df=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,m,p){var b=null;if(p!==void 0&&(b=""+p),m.key!==void 0&&(b=""+m.key),"key"in m){p={};for(var E in m)E!=="key"&&(p[E]=m[E])}else p=m;return m=p.ref,{$$typeof:s,type:c,key:b,ref:m!==void 0?m:null,props:p}}return Ei.Fragment=f,Ei.jsx=d,Ei.jsxs=d,Ei}var Of;function op(){return Of||(Of=1,js.exports=rp()),js.exports}var i=op(),Ss={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function sp(){if(Hf)return te;Hf=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),O=Symbol.iterator;function H(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,F={};function G(g,D,_){this.props=g,this.context=D,this.refs=F,this.updater=_||Y}G.prototype.isReactComponent={},G.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},G.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Q(){}Q.prototype=G.prototype;function q(g,D,_){this.props=g,this.context=D,this.refs=F,this.updater=_||Y}var ee=q.prototype=new Q;ee.constructor=q,V(ee,G.prototype),ee.isPureReactComponent=!0;var be=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function Ce(g,D,_,U,Z,oe){return _=oe.ref,{$$typeof:s,type:g,key:D,ref:_!==void 0?_:null,props:oe}}function Oe(g,D){return Ce(g.type,D,void 0,void 0,void 0,g.props)}function Se(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Pe(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(_){return D[_]})}var dt=/\/+/g;function qe(g,D){return typeof g=="object"&&g!==null&&g.key!=null?Pe(""+g.key):D.toString(36)}function ja(){}function Sa(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ja,ja):(g.status="pending",g.then(function(D){g.status==="pending"&&(g.status="fulfilled",g.value=D)},function(D){g.status==="pending"&&(g.status="rejected",g.reason=D)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Xe(g,D,_,U,Z){var oe=typeof g;(oe==="undefined"||oe==="boolean")&&(g=null);var P=!1;if(g===null)P=!0;else switch(oe){case"bigint":case"string":case"number":P=!0;break;case"object":switch(g.$$typeof){case s:case f:P=!0;break;case k:return P=g._init,Xe(P(g._payload),D,_,U,Z)}}if(P)return Z=Z(g),P=U===""?"."+qe(g,0):U,be(Z)?(_="",P!=null&&(_=P.replace(dt,"$&/")+"/"),Xe(Z,D,_,"",function(Ft){return Ft})):Z!=null&&(Se(Z)&&(Z=Oe(Z,_+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(dt,"$&/")+"/")+P)),D.push(Z)),1;P=0;var et=U===""?".":U+":";if(be(g))for(var ye=0;ye<g.length;ye++)U=g[ye],oe=et+qe(U,ye),P+=Xe(U,D,_,oe,Z);else if(ye=H(g),typeof ye=="function")for(g=ye.call(g),ye=0;!(U=g.next()).done;)U=U.value,oe=et+qe(U,ye++),P+=Xe(U,D,_,oe,Z);else if(oe==="object"){if(typeof g.then=="function")return Xe(Sa(g),D,_,U,Z);throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return P}function C(g,D,_){if(g==null)return g;var U=[],Z=0;return Xe(g,U,"","",function(oe){return D.call(_,oe,Z++)}),U}function B(g){if(g._status===-1){var D=g._result;D=D(),D.then(function(_){(g._status===0||g._status===-1)&&(g._status=1,g._result=_)},function(_){(g._status===0||g._status===-1)&&(g._status=2,g._result=_)}),g._status===-1&&(g._status=0,g._result=D)}if(g._status===1)return g._result.default;throw g._result}var J=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function pe(){}return te.Children={map:C,forEach:function(g,D,_){C(g,function(){D.apply(this,arguments)},_)},count:function(g){var D=0;return C(g,function(){D++}),D},toArray:function(g){return C(g,function(D){return D})||[]},only:function(g){if(!Se(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=G,te.Fragment=d,te.Profiler=m,te.PureComponent=q,te.StrictMode=c,te.Suspense=S,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,te.__COMPILER_RUNTIME={__proto__:null,c:function(g){return $.H.useMemoCache(g)}},te.cache=function(g){return function(){return g.apply(null,arguments)}},te.cloneElement=function(g,D,_){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var U=V({},g.props),Z=g.key,oe=void 0;if(D!=null)for(P in D.ref!==void 0&&(oe=void 0),D.key!==void 0&&(Z=""+D.key),D)!De.call(D,P)||P==="key"||P==="__self"||P==="__source"||P==="ref"&&D.ref===void 0||(U[P]=D[P]);var P=arguments.length-2;if(P===1)U.children=_;else if(1<P){for(var et=Array(P),ye=0;ye<P;ye++)et[ye]=arguments[ye+2];U.children=et}return Ce(g.type,Z,void 0,void 0,oe,U)},te.createContext=function(g){return g={$$typeof:b,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},te.createElement=function(g,D,_){var U,Z={},oe=null;if(D!=null)for(U in D.key!==void 0&&(oe=""+D.key),D)De.call(D,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(Z[U]=D[U]);var P=arguments.length-2;if(P===1)Z.children=_;else if(1<P){for(var et=Array(P),ye=0;ye<P;ye++)et[ye]=arguments[ye+2];Z.children=et}if(g&&g.defaultProps)for(U in P=g.defaultProps,P)Z[U]===void 0&&(Z[U]=P[U]);return Ce(g,oe,void 0,void 0,null,Z)},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:E,render:g}},te.isValidElement=Se,te.lazy=function(g){return{$$typeof:k,_payload:{_status:-1,_result:g},_init:B}},te.memo=function(g,D){return{$$typeof:y,type:g,compare:D===void 0?null:D}},te.startTransition=function(g){var D=$.T,_={};$.T=_;try{var U=g(),Z=$.S;Z!==null&&Z(_,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(pe,J)}catch(oe){J(oe)}finally{$.T=D}},te.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},te.use=function(g){return $.H.use(g)},te.useActionState=function(g,D,_){return $.H.useActionState(g,D,_)},te.useCallback=function(g,D){return $.H.useCallback(g,D)},te.useContext=function(g){return $.H.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g,D){return $.H.useDeferredValue(g,D)},te.useEffect=function(g,D,_){var U=$.H;if(typeof _=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return U.useEffect(g,D)},te.useId=function(){return $.H.useId()},te.useImperativeHandle=function(g,D,_){return $.H.useImperativeHandle(g,D,_)},te.useInsertionEffect=function(g,D){return $.H.useInsertionEffect(g,D)},te.useLayoutEffect=function(g,D){return $.H.useLayoutEffect(g,D)},te.useMemo=function(g,D){return $.H.useMemo(g,D)},te.useOptimistic=function(g,D){return $.H.useOptimistic(g,D)},te.useReducer=function(g,D,_){return $.H.useReducer(g,D,_)},te.useRef=function(g){return $.H.useRef(g)},te.useState=function(g){return $.H.useState(g)},te.useSyncExternalStore=function(g,D,_){return $.H.useSyncExternalStore(g,D,_)},te.useTransition=function(){return $.H.useTransition()},te.version="19.1.0",te}var Uf;function Os(){return Uf||(Uf=1,Ss.exports=sp()),Ss.exports}var T=Os();const i0=n0(T);var zs={exports:{}},Ai={},ks={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function cp(){return Bf||(Bf=1,function(s){function f(C,B){var J=C.length;C.push(B);e:for(;0<J;){var pe=J-1>>>1,g=C[pe];if(0<m(g,B))C[pe]=B,C[J]=g,J=pe;else break e}}function d(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var B=C[0],J=C.pop();if(J!==B){C[0]=J;e:for(var pe=0,g=C.length,D=g>>>1;pe<D;){var _=2*(pe+1)-1,U=C[_],Z=_+1,oe=C[Z];if(0>m(U,J))Z<g&&0>m(oe,U)?(C[pe]=oe,C[Z]=J,pe=Z):(C[pe]=U,C[_]=J,pe=_);else if(Z<g&&0>m(oe,J))C[pe]=oe,C[Z]=J,pe=Z;else break e}}return B}function m(C,B){var J=C.sortIndex-B.sortIndex;return J!==0?J:C.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var b=Date,E=b.now();s.unstable_now=function(){return b.now()-E}}var S=[],y=[],k=1,O=null,H=3,Y=!1,V=!1,F=!1,G=!1,Q=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function be(C){for(var B=d(y);B!==null;){if(B.callback===null)c(y);else if(B.startTime<=C)c(y),B.sortIndex=B.expirationTime,f(S,B);else break;B=d(y)}}function $(C){if(F=!1,be(C),!V)if(d(S)!==null)V=!0,De||(De=!0,qe());else{var B=d(y);B!==null&&Xe($,B.startTime-C)}}var De=!1,Ce=-1,Oe=5,Se=-1;function Pe(){return G?!0:!(s.unstable_now()-Se<Oe)}function dt(){if(G=!1,De){var C=s.unstable_now();Se=C;var B=!0;try{e:{V=!1,F&&(F=!1,q(Ce),Ce=-1),Y=!0;var J=H;try{t:{for(be(C),O=d(S);O!==null&&!(O.expirationTime>C&&Pe());){var pe=O.callback;if(typeof pe=="function"){O.callback=null,H=O.priorityLevel;var g=pe(O.expirationTime<=C);if(C=s.unstable_now(),typeof g=="function"){O.callback=g,be(C),B=!0;break t}O===d(S)&&c(S),be(C)}else c(S);O=d(S)}if(O!==null)B=!0;else{var D=d(y);D!==null&&Xe($,D.startTime-C),B=!1}}break e}finally{O=null,H=J,Y=!1}B=void 0}}finally{B?qe():De=!1}}}var qe;if(typeof ee=="function")qe=function(){ee(dt)};else if(typeof MessageChannel<"u"){var ja=new MessageChannel,Sa=ja.port2;ja.port1.onmessage=dt,qe=function(){Sa.postMessage(null)}}else qe=function(){Q(dt,0)};function Xe(C,B){Ce=Q(function(){C(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return H},s.unstable_next=function(C){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}var J=H;H=B;try{return C()}finally{H=J}},s.unstable_requestPaint=function(){G=!0},s.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var J=H;H=C;try{return B()}finally{H=J}},s.unstable_scheduleCallback=function(C,B,J){var pe=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,C){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=J+g,C={id:k++,callback:B,priorityLevel:C,startTime:J,expirationTime:g,sortIndex:-1},J>pe?(C.sortIndex=J,f(y,C),d(S)===null&&C===d(y)&&(F?(q(Ce),Ce=-1):F=!0,Xe($,J-pe))):(C.sortIndex=g,f(S,C),V||Y||(V=!0,De||(De=!0,qe()))),C},s.unstable_shouldYield=Pe,s.unstable_wrapCallback=function(C){var B=H;return function(){var J=H;H=B;try{return C.apply(this,arguments)}finally{H=J}}}}(Ns)),Ns}var _f;function dp(){return _f||(_f=1,ks.exports=cp()),ks.exports}var Ts={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function up(){if(Yf)return Ze;Yf=1;var s=Os();function f(S){var y="https://react.dev/errors/"+S;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)y+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+S+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(S,y,k){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:O==null?null:""+O,children:S,containerInfo:y,implementation:k}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(S,y){if(S==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ze.createPortal=function(S,y){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(f(299));return p(S,y,null,k)},Ze.flushSync=function(S){var y=b.T,k=c.p;try{if(b.T=null,c.p=2,S)return S()}finally{b.T=y,c.p=k,c.d.f()}},Ze.preconnect=function(S,y){typeof S=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,c.d.C(S,y))},Ze.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},Ze.preinit=function(S,y){if(typeof S=="string"&&y&&typeof y.as=="string"){var k=y.as,O=E(k,y.crossOrigin),H=typeof y.integrity=="string"?y.integrity:void 0,Y=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;k==="style"?c.d.S(S,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:O,integrity:H,fetchPriority:Y}):k==="script"&&c.d.X(S,{crossOrigin:O,integrity:H,fetchPriority:Y,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ze.preinitModule=function(S,y){if(typeof S=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var k=E(y.as,y.crossOrigin);c.d.M(S,{crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&c.d.M(S)},Ze.preload=function(S,y){if(typeof S=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var k=y.as,O=E(k,y.crossOrigin);c.d.L(S,k,{crossOrigin:O,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ze.preloadModule=function(S,y){if(typeof S=="string")if(y){var k=E(y.as,y.crossOrigin);c.d.m(S,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:k,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else c.d.m(S)},Ze.requestFormReset=function(S){c.d.r(S)},Ze.unstable_batchedUpdates=function(S,y){return S(y)},Ze.useFormState=function(S,y,k){return b.H.useFormState(S,y,k)},Ze.useFormStatus=function(){return b.H.useHostTransitionStatus()},Ze.version="19.1.0",Ze}var Lf;function fp(){if(Lf)return Ts.exports;Lf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),Ts.exports=up(),Ts.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function mp(){if(Gf)return Ai;Gf=1;var s=dp(),f=Os(),d=fp();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(p(e)!==e)throw Error(c(188))}function S(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return E(l),e;if(r===n)return E(l),t;r=r.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=r;else{for(var o=!1,u=l.child;u;){if(u===a){o=!0,a=l,n=r;break}if(u===n){o=!0,n=l,a=r;break}u=u.sibling}if(!o){for(u=r.child;u;){if(u===a){o=!0,a=r,n=l;break}if(u===n){o=!0,n=r,a=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,O=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),Pe=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var ja=Symbol.for("react.client.reference");function Sa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ja?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case G:return"Profiler";case F:return"StrictMode";case $:return"Suspense";case De:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case ee:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}var Xe=Array.isArray,C=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],g=-1;function D(e){return{current:e}}function _(e){0>g||(e.current=pe[g],pe[g]=null,g--)}function U(e,t){g++,pe[g]=e.current,e.current=t}var Z=D(null),oe=D(null),P=D(null),et=D(null);function ye(e,t){switch(U(P,t),U(oe,e),U(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?of(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=of(t),e=sf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(Z),U(Z,e)}function Ft(){_(Z),_(oe),_(P)}function rr(e){e.memoizedState!==null&&U(et,e);var t=Z.current,a=sf(t,e.type);t!==a&&(U(oe,e),U(Z,a))}function Ui(e){oe.current===e&&(_(Z),_(oe)),et.current===e&&(_(et),Si._currentValue=J)}var or=Object.prototype.hasOwnProperty,sr=s.unstable_scheduleCallback,cr=s.unstable_cancelCallback,_0=s.unstable_shouldYield,Y0=s.unstable_requestPaint,zt=s.unstable_now,L0=s.unstable_getCurrentPriorityLevel,Ls=s.unstable_ImmediatePriority,Gs=s.unstable_UserBlockingPriority,Bi=s.unstable_NormalPriority,G0=s.unstable_LowPriority,qs=s.unstable_IdlePriority,q0=s.log,X0=s.unstable_setDisableYieldValue,Rn=null,tt=null;function $t(e){if(typeof q0=="function"&&X0(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Rn,e)}catch{}}var at=Math.clz32?Math.clz32:Z0,V0=Math.log,Q0=Math.LN2;function Z0(e){return e>>>=0,e===0?32:31-(V0(e)/Q0|0)|0}var _i=256,Yi=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Li(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~r,n!==0?l=za(n):(o&=u,o!==0?l=za(o):a||(a=u&~e,a!==0&&(l=za(a))))):(u=n&~r,u!==0?l=za(u):o!==0?l=za(o):a||(a=n&~e,a!==0&&(l=za(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function Mn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function K0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xs(){var e=_i;return _i<<=1,(_i&4194048)===0&&(_i=256),e}function Vs(){var e=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),e}function dr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function W0(e,t,a,n,l,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,h=e.expirationTimes,j=e.hiddenUpdates;for(a=o&~a;0<a;){var A=31-at(a),M=1<<A;u[A]=0,h[A]=-1;var z=j[A];if(z!==null)for(j[A]=null,A=0;A<z.length;A++){var N=z[A];N!==null&&(N.lane&=-536870913)}a&=~M}n!==0&&Qs(e,n,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Qs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-at(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Zs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-at(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ks(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Tf(e.type))}function J0(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var Pt=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Pt,We="__reactProps$"+Pt,Xa="__reactContainer$"+Pt,mr="__reactEvents$"+Pt,I0="__reactListeners$"+Pt,F0="__reactHandles$"+Pt,Ws="__reactResources$"+Pt,On="__reactMarker$"+Pt;function hr(e){delete e[Ve],delete e[We],delete e[mr],delete e[I0],delete e[F0]}function Va(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ff(e);e!==null;){if(a=e[Ve])return a;e=ff(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Ve]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Hn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Za(e){var t=e[Ws];return t||(t=e[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[On]=!0}var Js=new Set,Is={};function ka(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Is[e]=t,e=0;e<t.length;e++)Js.add(t[e])}var $0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fs={},$s={};function P0(e){return or.call($s,e)?!0:or.call(Fs,e)?!1:$0.test(e)?$s[e]=!0:(Fs[e]=!0,!1)}function Gi(e,t,a){if(P0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Dt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var pr,Ps;function Wa(e){if(pr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pr=t&&t[1]||"",Ps=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pr+e+Ps}var gr=!1;function xr(e,t){if(!e||gr)return"";gr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var z=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){z=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){z=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&z&&typeof N.stack=="string")return[N.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],u=r[1];if(o&&u){var h=o.split(`
`),j=u.split(`
`);for(l=n=0;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(n===h.length||l===j.length)for(n=h.length-1,l=j.length-1;1<=n&&0<=l&&h[n]!==j[l];)l--;for(;1<=n&&0<=l;n--,l--)if(h[n]!==j[l]){if(n!==1||l!==1)do if(n--,l--,0>l||h[n]!==j[l]){var A=`
`+h[n].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=n&&0<=l);break}}}finally{gr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wa(a):""}function em(e){switch(e.tag){case 26:case 27:case 5:return Wa(e.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return xr(e.type,!1);case 11:return xr(e.type.render,!1);case 1:return xr(e.type,!0);case 31:return Wa("Activity");default:return""}}function ec(e){try{var t="";do t+=em(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tm(e){var t=tc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=tm(e))}function ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=tc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var am=/[\n"\\]/g;function ft(e){return e.replace(am,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yr(e,t,a,n,l,r,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?vr(e,o,ut(t)):a!=null?vr(e,o,ut(a)):n!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ut(u):e.removeAttribute("name")}function nc(e,t,a,n,l,r,o,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function vr(e,t,a){t==="number"&&Vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ic(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function lc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Xe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var nm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||nm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function oc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&rc(e,l,n)}else for(var r in t)t.hasOwnProperty(r)&&rc(e,r,t[r])}function br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return lm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wr=null;function jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,$a=null;function sc(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(yr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[We]||null;if(!l)throw Error(c(90));yr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&ac(n)}break e;case"textarea":ic(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var Sr=!1;function cc(e,t,a){if(Sr)return e(t,a);Sr=!0;try{var n=e(t);return n}finally{if(Sr=!1,(Fa!==null||$a!==null)&&(Cl(),Fa&&(t=Fa,e=$a,$a=Fa=null,sc(t),e)))for(t=0;t<e.length;t++)sc(e[t])}}function Un(e,t){var a=e.stateNode;if(a===null)return null;var n=a[We]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zr=!1;if(Ot)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{zr=!1}var ea=null,kr=null,Zi=null;function dc(){if(Zi)return Zi;var e,t=kr,a=t.length,n,l="value"in ea?ea.value:ea.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[r-n];n++);return Zi=l.slice(e,1<n?1-n:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function uc(){return!1}function Je(e){function t(a,n,l,r,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Wi:uc,this.isPropagationStopped=uc,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Je(Na),_n=k({},Na,{view:0,detail:0}),rm=Je(_n),Nr,Tr,Yn,Ii=k({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(Nr=e.screenX-Yn.screenX,Tr=e.screenY-Yn.screenY):Tr=Nr=0,Yn=e),Nr)},movementY:function(e){return"movementY"in e?e.movementY:Tr}}),fc=Je(Ii),om=k({},Ii,{dataTransfer:0}),sm=Je(om),cm=k({},_n,{relatedTarget:0}),Er=Je(cm),dm=k({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),um=Je(dm),fm=k({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mm=Je(fm),hm=k({},Na,{data:0}),mc=Je(hm),pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xm[e])?!!t[e]:!1}function Ar(){return ym}var vm=k({},_n,{key:function(e){if(e.key){var t=pm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bm=Je(vm),wm=k({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=Je(wm),jm=k({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),Sm=Je(jm),zm=k({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=Je(zm),Nm=k({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tm=Je(Nm),Em=k({},Na,{newState:0,oldState:0}),Am=Je(Em),Cm=[9,13,27,32],Cr=Ot&&"CompositionEvent"in window,Ln=null;Ot&&"documentMode"in document&&(Ln=document.documentMode);var Rm=Ot&&"TextEvent"in window&&!Ln,pc=Ot&&(!Cr||Ln&&8<Ln&&11>=Ln),gc=" ",xc=!1;function yc(e,t){switch(e){case"keyup":return Cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function Mm(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(xc=!0,gc);case"textInput":return e=t.data,e===gc&&xc?null:e;default:return null}}function Dm(e,t){if(Pa)return e==="compositionend"||!Cr&&yc(e,t)?(e=dc(),Zi=kr=ea=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pc&&t.locale!=="ko"?null:t.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Om[e.type]:t==="textarea"}function wc(e,t,a,n){Fa?$a?$a.push(n):$a=[n]:Fa=n,t=Ul(t,"onChange"),0<t.length&&(a=new Ji("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Gn=null,qn=null;function Hm(e){tf(e,0)}function Fi(e){var t=Hn(e);if(ac(t))return e}function jc(e,t){if(e==="change")return t}var Sc=!1;if(Ot){var Rr;if(Ot){var Mr="oninput"in document;if(!Mr){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),Mr=typeof zc.oninput=="function"}Rr=Mr}else Rr=!1;Sc=Rr&&(!document.documentMode||9<document.documentMode)}function kc(){Gn&&(Gn.detachEvent("onpropertychange",Nc),qn=Gn=null)}function Nc(e){if(e.propertyName==="value"&&Fi(qn)){var t=[];wc(t,qn,e,jr(e)),cc(Hm,t)}}function Um(e,t,a){e==="focusin"?(kc(),Gn=t,qn=a,Gn.attachEvent("onpropertychange",Nc)):e==="focusout"&&kc()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(qn)}function _m(e,t){if(e==="click")return Fi(t)}function Ym(e,t){if(e==="input"||e==="change")return Fi(t)}function Lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Lm;function Xn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!or.call(t,l)||!nt(e[l],t[l]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var a=Tc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tc(a)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Vi(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gm=Ot&&"documentMode"in document&&11>=document.documentMode,en=null,Or=null,Vn=null,Hr=!1;function Rc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hr||en==null||en!==Vi(n)||(n=en,"selectionStart"in n&&Dr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vn&&Xn(Vn,n)||(Vn=n,n=Ul(Or,"onSelect"),0<n.length&&(t=new Ji("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=en)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tn={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},Ur={},Mc={};Ot&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ea(e){if(Ur[e])return Ur[e];if(!tn[e])return e;var t=tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Mc)return Ur[e]=t[a];return e}var Dc=Ea("animationend"),Oc=Ea("animationiteration"),Hc=Ea("animationstart"),qm=Ea("transitionrun"),Xm=Ea("transitionstart"),Vm=Ea("transitioncancel"),Uc=Ea("transitionend"),Bc=new Map,Br="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Br.push("scrollEnd");function bt(e,t){Bc.set(e,t),ka(t,[e])}var _c=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=_c.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ec(t)},_c.set(e,t),t)}return{value:e,source:t,stack:ec(t)}}var ht=[],an=0,_r=0;function $i(){for(var e=an,t=_r=an=0;t<e;){var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var r=ht[t];if(ht[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}r!==0&&Yc(a,l,r)}}function Pi(e,t,a,n){ht[an++]=e,ht[an++]=t,ht[an++]=a,ht[an++]=n,_r|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Yr(e,t,a,n){return Pi(e,t,a,n),el(e)}function nn(e,t){return Pi(e,null,null,t),el(e)}function Yc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-at(a),e=r.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),r):null}function el(e){if(50<pi)throw pi=0,Zo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ln={};function Qm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,n){return new Qm(e,t,a,n)}function Lr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tl(e,t,a,n,l,r){var o=0;if(n=e,typeof e=="function")Lr(e)&&(o=1);else if(typeof e=="string")o=Kh(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=it(31,a,t,l),e.elementType=Se,e.lanes=r,e;case V:return Aa(a.children,l,r,t);case F:o=8,l|=24;break;case G:return e=it(12,a,t,l|2),e.elementType=G,e.lanes=r,e;case $:return e=it(13,a,t,l),e.elementType=$,e.lanes=r,e;case De:return e=it(19,a,t,l),e.elementType=De,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:case ee:o=10;break e;case q:o=9;break e;case be:o=11;break e;case Ce:o=14;break e;case Oe:o=16,n=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=it(o,a,t,l),t.elementType=e,t.type=n,t.lanes=r,t}function Aa(e,t,a,n){return e=it(7,e,n,t),e.lanes=a,e}function Gr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function qr(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rn=[],on=0,al=null,nl=0,pt=[],gt=0,Ca=null,Ut=1,Bt="";function Ra(e,t){rn[on++]=nl,rn[on++]=al,al=e,nl=t}function Gc(e,t,a){pt[gt++]=Ut,pt[gt++]=Bt,pt[gt++]=Ca,Ca=e;var n=Ut;e=Bt;var l=32-at(n)-1;n&=~(1<<l),a+=1;var r=32-at(t)+l;if(30<r){var o=l-l%5;r=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Ut=1<<32-at(t)+l|a<<l|n,Bt=r+e}else Ut=1<<r|a<<l|n,Bt=e}function Xr(e){e.return!==null&&(Ra(e,1),Gc(e,1,0))}function Vr(e){for(;e===al;)al=rn[--on],rn[on]=null,nl=rn[--on],rn[on]=null;for(;e===Ca;)Ca=pt[--gt],pt[gt]=null,Bt=pt[--gt],pt[gt]=null,Ut=pt[--gt],pt[gt]=null}var Ke=null,ze=null,ce=!1,Ma=null,kt=!1,Qr=Error(c(519));function Da(e){var t=Error(c(418,""));throw Kn(mt(t,e)),Qr}function qc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ve]=e,t[We]=n,a){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<xi.length;a++)le(xi[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),nc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Xi(t);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),lc(t,n.value,n.defaultValue,n.children),Xi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||rf(t.textContent,a)?(n.popover!=null&&(le("beforetoggle",t),le("toggle",t)),n.onScroll!=null&&le("scroll",t),n.onScrollEnd!=null&&le("scrollend",t),n.onClick!=null&&(t.onclick=Bl),t=!0):t=!1,t||Da(e)}function Xc(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:Ke=Ke.return}}function Qn(e){if(e!==Ke)return!1;if(!ce)return Xc(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ss(e.type,e.memoizedProps)),a=!a),a&&ze&&Da(e),Xc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){ze=jt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}ze=null}}else t===27?(t=ze,ga(e.type)?(e=fs,fs=null,ze=e):ze=t):ze=Ke?jt(e.stateNode.nextSibling):null;return!0}function Zn(){ze=Ke=null,ce=!1}function Vc(){var e=Ma;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),Ma=null),e}function Kn(e){Ma===null?Ma=[e]:Ma.push(e)}var Zr=D(null),Oa=null,_t=null;function ta(e,t,a){U(Zr,t._currentValue),t._currentValue=a}function Yt(e){e._currentValue=Zr.current,_(Zr)}function Kr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Wr(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var o=l.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=l;for(var h=0;h<t.length;h++)if(u.context===t[h]){r.lanes|=a,u=r.alternate,u!==null&&(u.lanes|=a),Kr(r.return,a,e),n||(o=null);break e}r=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),Kr(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function Wn(e,t,a,n){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;nt(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===et.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Si):e=[Si])}l=l.return}e!==null&&Wr(t,e,a,n),t.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Oa=e,_t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Qc(Oa,e)}function ll(e,t){return Oa===null&&Ha(e),Qc(e,t)}function Qc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},_t===null){if(e===null)throw Error(c(308));_t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _t=_t.next=t;return a}var Zm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Km=s.unstable_scheduleCallback,Wm=s.unstable_NormalPriority,Re={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jr(){return{controller:new Zm,data:new Map,refCount:0}}function Jn(e){e.refCount--,e.refCount===0&&Km(Wm,function(){e.controller.abort()})}var In=null,Ir=0,sn=0,cn=null;function Jm(e,t){if(In===null){var a=In=[];Ir=0,sn=Po(),cn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ir++,t.then(Zc,Zc),t}function Zc(){if(--Ir===0&&In!==null){cn!==null&&(cn.status="fulfilled");var e=In;In=null,sn=0,cn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Im(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Kc=C.S;C.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jm(e,t),Kc!==null&&Kc(e,t)};var Ua=D(null);function Fr(){var e=Ua.current;return e!==null?e:xe.pooledCache}function rl(e,t){t===null?U(Ua,Ua.current):U(Ua,t.pool)}function Wc(){var e=Fr();return e===null?null:{parent:Re._currentValue,pool:e}}var Fn=Error(c(460)),Jc=Error(c(474)),ol=Error(c(542)),$r={then:function(){}};function Ic(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function Fc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sl,sl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e;default:if(typeof t.status=="string")t.then(sl,sl);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pc(e),e}throw $n=t,Fn}}var $n=null;function $c(){if($n===null)throw Error(c(459));var e=$n;return $n=null,e}function Pc(e){if(e===Fn||e===ol)throw Error(c(483))}var aa=!1;function Pr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(de&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=el(e),Yc(e,null,a),t}return Pi(e,n,t,a),el(e)}function Pn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Zs(e,a)}}function to(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ao=!1;function ei(){if(ao){var e=cn;if(e!==null)throw e}}function ti(e,t,a,n){ao=!1;var l=e.updateQueue;aa=!1;var r=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var h=u,j=h.next;h.next=null,o===null?r=j:o.next=j,o=h;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==o&&(u===null?A.firstBaseUpdate=j:u.next=j,A.lastBaseUpdate=h))}if(r!==null){var M=l.baseState;o=0,A=j=h=null,u=r;do{var z=u.lane&-536870913,N=z!==u.lane;if(N?(re&z)===z:(n&z)===z){z!==0&&z===sn&&(ao=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var I=e,K=u;z=t;var he=a;switch(K.tag){case 1:if(I=K.payload,typeof I=="function"){M=I.call(he,M,z);break e}M=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=K.payload,z=typeof I=="function"?I.call(he,M,z):I,z==null)break e;M=k({},M,z);break e;case 2:aa=!0}}z=u.callback,z!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[z]:N.push(z))}else N={lane:z,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(j=A=N,h=M):A=A.next=N,o|=z;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;N=u,u=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);A===null&&(h=M),l.baseState=h,l.firstBaseUpdate=j,l.lastBaseUpdate=A,r===null&&(l.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=M}}function ed(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function td(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ed(a[e],t)}var dn=D(null),cl=D(0);function ad(e,t){e=Zt,U(cl,e),U(dn,t),Zt=e|t.baseLanes}function no(){U(cl,Zt),U(dn,dn.current)}function io(){Zt=cl.current,_(dn),_(cl)}var la=0,ae=null,fe=null,Ee=null,dl=!1,un=!1,Ba=!1,ul=0,ai=0,fn=null,Fm=0;function Ne(){throw Error(c(321))}function lo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function ro(e,t,a,n,l,r){return la=r,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Yd:Ld,Ba=!1,r=a(n,l),Ba=!1,un&&(r=id(t,a,n,l)),nd(e),r}function nd(e){C.H=xl;var t=fe!==null&&fe.next!==null;if(la=0,Ee=fe=ae=null,dl=!1,ai=0,fn=null,t)throw Error(c(300));e===null||Ue||(e=e.dependencies,e!==null&&il(e)&&(Ue=!0))}function id(e,t,a,n){ae=e;var l=0;do{if(un&&(fn=null),ai=0,un=!1,25<=l)throw Error(c(301));if(l+=1,Ee=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=ih,r=t(a,n)}while(un);return r}function $m(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?ni(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(ae.flags|=1024),t}function oo(){var e=ul!==0;return ul=0,e}function so(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function co(e){if(dl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dl=!1}la=0,Ee=fe=ae=null,un=!1,ai=ul=0,fn=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ae.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function Ae(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=Ee===null?ae.memoizedState:Ee.next;if(t!==null)Ee=t,fe=e;else{if(e===null)throw ae.alternate===null?Error(c(467)):Error(c(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Ee===null?ae.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ni(e){var t=ai;return ai+=1,fn===null&&(fn=[]),e=Fc(fn,e,t),t=ae,(Ee===null?t.memoizedState:Ee.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Yd:Ld),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ni(e);if(e.$$typeof===ee)return Qe(e)}throw Error(c(438,String(e)))}function fo(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ae.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=uo(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Pe;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=Ae();return mo(t,fe,e)}function mo(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,r=n.pending;if(r!==null){if(l!==null){var o=l.next;l.next=r.next,r.next=o}t.baseQueue=l=r,n.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var u=o=null,h=null,j=t,A=!1;do{var M=j.lane&-536870913;if(M!==j.lane?(re&M)===M:(la&M)===M){var z=j.revertLane;if(z===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),M===sn&&(A=!0);else if((la&z)===z){j=j.next,z===sn&&(A=!0);continue}else M={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=M,o=r):h=h.next=M,ae.lanes|=z,fa|=z;M=j.action,Ba&&a(r,M),r=j.hasEagerState?j.eagerState:a(r,M)}else z={lane:M,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(u=h=z,o=r):h=h.next=z,ae.lanes|=M,fa|=M;j=j.next}while(j!==null&&j!==t);if(h===null?o=r:h.next=u,!nt(r,e.memoizedState)&&(Ue=!0,A&&(a=cn,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=h,n.lastRenderedState=r}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ho(e){var t=Ae(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do r=e(r,o.action),o=o.next;while(o!==l);nt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function ld(e,t,a){var n=ae,l=Ae(),r=ce;if(r){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!nt((fe||l).memoizedState,a);o&&(l.memoizedState=a,Ue=!0),l=l.queue;var u=sd.bind(null,n,l,e);if(ii(2048,8,u,[e]),l.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,mn(9,hl(),od.bind(null,n,l,a,t),null),xe===null)throw Error(c(349));r||(la&124)!==0||rd(n,t,a)}return a}function rd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=uo(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function od(e,t,a,n){t.value=a,t.getSnapshot=n,cd(t)&&dd(e)}function sd(e,t,a){return a(function(){cd(t)&&dd(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function dd(e){var t=nn(e,2);t!==null&&ct(t,e,2)}function po(e){var t=Ie();if(typeof e=="function"){var a=e;if(e=a(),Ba){$t(!0);try{a()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function ud(e,t,a,n){return e.baseState=a,mo(e,fe,typeof n=="function"?n:Lt)}function Pm(e,t,a,n,l){if(gl(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};C.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,fd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function fd(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var r=C.T,o={};C.T=o;try{var u=a(l,n),h=C.S;h!==null&&h(o,u),md(e,t,u)}catch(j){go(e,t,j)}finally{C.T=r}}else try{r=a(l,n),md(e,t,r)}catch(j){go(e,t,j)}}function md(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){hd(e,t,n)},function(n){return go(e,t,n)}):hd(e,t,a)}function hd(e,t,a){t.status="fulfilled",t.value=a,pd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,fd(e,a)))}function go(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,pd(t),t=t.next;while(t!==n)}e.action=null}function pd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gd(e,t){return t}function xd(e,t){if(ce){var a=xe.formState;if(a!==null){e:{var n=ae;if(ce){if(ze){t:{for(var l=ze,r=kt;l.nodeType!==8;){if(!r){l=null;break t}if(l=jt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){ze=jt(l.nextSibling),n=l.data==="F!";break e}}Da(n)}n=!1}n&&(t=a[0])}}return a=Ie(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gd,lastRenderedState:t},a.queue=n,a=Ud.bind(null,ae,n),n.dispatch=a,n=po(!1),r=wo.bind(null,ae,!1,n.queue),n=Ie(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Pm.bind(null,ae,l,r,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function yd(e){var t=Ae();return vd(t,fe,e)}function vd(e,t,a){if(t=mo(e,t,gd)[0],e=ml(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ni(t)}catch(o){throw o===Fn?ol:o}else n=t;t=Ae();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,mn(9,hl(),eh.bind(null,l,a),null)),[n,r,e]}function eh(e,t){e.action=t}function bd(e){var t=Ae(),a=fe;if(a!==null)return vd(t,a,e);Ae(),t=t.memoizedState,a=Ae();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ae.updateQueue,t===null&&(t=uo(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function wd(){return Ae().memoizedState}function pl(e,t,a,n){var l=Ie();n=n===void 0?null:n,ae.flags|=e,l.memoizedState=mn(1|t,hl(),a,n)}function ii(e,t,a,n){var l=Ae();n=n===void 0?null:n;var r=l.memoizedState.inst;fe!==null&&n!==null&&lo(n,fe.memoizedState.deps)?l.memoizedState=mn(t,r,a,n):(ae.flags|=e,l.memoizedState=mn(1|t,r,a,n))}function jd(e,t){pl(8390656,8,e,t)}function Sd(e,t){ii(2048,8,e,t)}function zd(e,t){return ii(4,2,e,t)}function kd(e,t){return ii(4,4,e,t)}function Nd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,a){a=a!=null?a.concat([e]):null,ii(4,4,Nd.bind(null,t,e),a)}function xo(){}function Ed(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&lo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ad(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&lo(t,n[1]))return n[0];if(n=e(),Ba){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[n,t],n}function yo(e,t,a){return a===void 0||(la&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Mu(),ae.lanes|=e,fa|=e,a)}function Cd(e,t,a,n){return nt(a,t)?a:dn.current!==null?(e=yo(e,a,n),nt(e,t)||(Ue=!0),e):(la&42)===0?(Ue=!0,e.memoizedState=a):(e=Mu(),ae.lanes|=e,fa|=e,t)}function Rd(e,t,a,n,l){var r=B.p;B.p=r!==0&&8>r?r:8;var o=C.T,u={};C.T=u,wo(e,!1,t,a);try{var h=l(),j=C.S;if(j!==null&&j(u,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=Im(h,n);li(e,t,A,st(e))}else li(e,t,n,st(e))}catch(M){li(e,t,{then:function(){},status:"rejected",reason:M},st())}finally{B.p=r,C.T=o}}function th(){}function vo(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=Md(e).queue;Rd(e,l,t,J,a===null?th:function(){return Dd(e),a(n)})}function Md(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dd(e){var t=Md(e).next.queue;li(e,t,{},st())}function bo(){return Qe(Si)}function Od(){return Ae().memoizedState}function Hd(){return Ae().memoizedState}function ah(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=na(a);var n=ia(t,e,a);n!==null&&(ct(n,t,a),Pn(n,t,a)),t={cache:Jr()},e.payload=t;return}t=t.return}}function nh(e,t,a){var n=st();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?Bd(t,a):(a=Yr(e,t,a,n),a!==null&&(ct(a,e,n),_d(a,t,n)))}function Ud(e,t,a){var n=st();li(e,t,a,n)}function li(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))Bd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,u=r(o,a);if(l.hasEagerState=!0,l.eagerState=u,nt(u,o))return Pi(e,t,l,0),xe===null&&$i(),!1}catch{}finally{}if(a=Yr(e,t,l,n),a!==null)return ct(a,e,n),_d(a,t,n),!0}return!1}function wo(e,t,a,n){if(n={lane:2,revertLane:Po(),action:n,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(t)throw Error(c(479))}else t=Yr(e,a,n,2),t!==null&&ct(t,e,2)}function gl(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Bd(e,t){un=dl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _d(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Zs(e,a)}}var xl={readContext:Qe,use:fl,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Yd={readContext:Qe,use:fl,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:jd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pl(4194308,4,Nd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pl(4194308,4,e,t)},useInsertionEffect:function(e,t){pl(4,2,e,t)},useMemo:function(e,t){var a=Ie();t=t===void 0?null:t;var n=e();if(Ba){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ie();if(a!==void 0){var l=a(t);if(Ba){$t(!0);try{a(t)}finally{$t(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=nh.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,a=Ud.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ie();return yo(a,e,t)},useTransition:function(){var e=po(!1);return e=Rd.bind(null,ae,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ae,l=Ie();if(ce){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),xe===null)throw Error(c(349));(re&124)!==0||rd(n,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,jd(sd.bind(null,n,r,e),[e]),n.flags|=2048,mn(9,hl(),od.bind(null,n,r,a,t),null),a},useId:function(){var e=Ie(),t=xe.identifierPrefix;if(ce){var a=Bt,n=Ut;a=(n&~(1<<32-at(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=ul++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Fm++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:bo,useFormState:xd,useActionState:xd,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=wo.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return Ie().memoizedState=ah.bind(null,ae)}},Ld={readContext:Qe,use:fl,useCallback:Ed,useContext:Qe,useEffect:Sd,useImperativeHandle:Td,useInsertionEffect:zd,useLayoutEffect:kd,useMemo:Ad,useReducer:ml,useRef:wd,useState:function(){return ml(Lt)},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ae();return Cd(a,fe.memoizedState,e,t)},useTransition:function(){var e=ml(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:ld,useId:Od,useHostTransitionStatus:bo,useFormState:yd,useActionState:yd,useOptimistic:function(e,t){var a=Ae();return ud(a,fe,e,t)},useMemoCache:fo,useCacheRefresh:Hd},ih={readContext:Qe,use:fl,useCallback:Ed,useContext:Qe,useEffect:Sd,useImperativeHandle:Td,useInsertionEffect:zd,useLayoutEffect:kd,useMemo:Ad,useReducer:ho,useRef:wd,useState:function(){return ho(Lt)},useDebugValue:xo,useDeferredValue:function(e,t){var a=Ae();return fe===null?yo(a,e,t):Cd(a,fe.memoizedState,e,t)},useTransition:function(){var e=ho(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:ld,useId:Od,useHostTransitionStatus:bo,useFormState:bd,useActionState:bd,useOptimistic:function(e,t){var a=Ae();return fe!==null?ud(a,fe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fo,useCacheRefresh:Hd},hn=null,ri=0;function yl(e){var t=ri;return ri+=1,hn===null&&(hn=[]),Fc(hn,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vl(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gd(e){var t=e._init;return t(e._payload)}function qd(e){function t(v,x){if(e){var w=v.deletions;w===null?(v.deletions=[x],v.flags|=16):w.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function l(v,x){return v=Ht(v,x),v.index=0,v.sibling=null,v}function r(v,x,w){return v.index=w,e?(w=v.alternate,w!==null?(w=w.index,w<x?(v.flags|=67108866,x):w):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function u(v,x,w,R){return x===null||x.tag!==6?(x=Gr(w,v.mode,R),x.return=v,x):(x=l(x,w),x.return=v,x)}function h(v,x,w,R){var L=w.type;return L===V?A(v,x,w.props.children,R,w.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oe&&Gd(L)===x.type)?(x=l(x,w.props),oi(x,w),x.return=v,x):(x=tl(w.type,w.key,w.props,null,v.mode,R),oi(x,w),x.return=v,x)}function j(v,x,w,R){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=qr(w,v.mode,R),x.return=v,x):(x=l(x,w.children||[]),x.return=v,x)}function A(v,x,w,R,L){return x===null||x.tag!==7?(x=Aa(w,v.mode,R,L),x.return=v,x):(x=l(x,w),x.return=v,x)}function M(v,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Gr(""+x,v.mode,w),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case H:return w=tl(x.type,x.key,x.props,null,v.mode,w),oi(w,x),w.return=v,w;case Y:return x=qr(x,v.mode,w),x.return=v,x;case Oe:var R=x._init;return x=R(x._payload),M(v,x,w)}if(Xe(x)||qe(x))return x=Aa(x,v.mode,w,null),x.return=v,x;if(typeof x.then=="function")return M(v,yl(x),w);if(x.$$typeof===ee)return M(v,ll(v,x),w);vl(v,x)}return null}function z(v,x,w,R){var L=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return L!==null?null:u(v,x,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case H:return w.key===L?h(v,x,w,R):null;case Y:return w.key===L?j(v,x,w,R):null;case Oe:return L=w._init,w=L(w._payload),z(v,x,w,R)}if(Xe(w)||qe(w))return L!==null?null:A(v,x,w,R,null);if(typeof w.then=="function")return z(v,x,yl(w),R);if(w.$$typeof===ee)return z(v,x,ll(v,w),R);vl(v,w)}return null}function N(v,x,w,R,L){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return v=v.get(w)||null,u(x,v,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case H:return v=v.get(R.key===null?w:R.key)||null,h(x,v,R,L);case Y:return v=v.get(R.key===null?w:R.key)||null,j(x,v,R,L);case Oe:var ne=R._init;return R=ne(R._payload),N(v,x,w,R,L)}if(Xe(R)||qe(R))return v=v.get(w)||null,A(x,v,R,L,null);if(typeof R.then=="function")return N(v,x,w,yl(R),L);if(R.$$typeof===ee)return N(v,x,w,ll(x,R),L);vl(x,R)}return null}function I(v,x,w,R){for(var L=null,ne=null,X=x,W=x=0,_e=null;X!==null&&W<w.length;W++){X.index>W?(_e=X,X=null):_e=X.sibling;var se=z(v,X,w[W],R);if(se===null){X===null&&(X=_e);break}e&&X&&se.alternate===null&&t(v,X),x=r(se,x,W),ne===null?L=se:ne.sibling=se,ne=se,X=_e}if(W===w.length)return a(v,X),ce&&Ra(v,W),L;if(X===null){for(;W<w.length;W++)X=M(v,w[W],R),X!==null&&(x=r(X,x,W),ne===null?L=X:ne.sibling=X,ne=X);return ce&&Ra(v,W),L}for(X=n(X);W<w.length;W++)_e=N(X,v,W,w[W],R),_e!==null&&(e&&_e.alternate!==null&&X.delete(_e.key===null?W:_e.key),x=r(_e,x,W),ne===null?L=_e:ne.sibling=_e,ne=_e);return e&&X.forEach(function(wa){return t(v,wa)}),ce&&Ra(v,W),L}function K(v,x,w,R){if(w==null)throw Error(c(151));for(var L=null,ne=null,X=x,W=x=0,_e=null,se=w.next();X!==null&&!se.done;W++,se=w.next()){X.index>W?(_e=X,X=null):_e=X.sibling;var wa=z(v,X,se.value,R);if(wa===null){X===null&&(X=_e);break}e&&X&&wa.alternate===null&&t(v,X),x=r(wa,x,W),ne===null?L=wa:ne.sibling=wa,ne=wa,X=_e}if(se.done)return a(v,X),ce&&Ra(v,W),L;if(X===null){for(;!se.done;W++,se=w.next())se=M(v,se.value,R),se!==null&&(x=r(se,x,W),ne===null?L=se:ne.sibling=se,ne=se);return ce&&Ra(v,W),L}for(X=n(X);!se.done;W++,se=w.next())se=N(X,v,W,se.value,R),se!==null&&(e&&se.alternate!==null&&X.delete(se.key===null?W:se.key),x=r(se,x,W),ne===null?L=se:ne.sibling=se,ne=se);return e&&X.forEach(function(lp){return t(v,lp)}),ce&&Ra(v,W),L}function he(v,x,w,R){if(typeof w=="object"&&w!==null&&w.type===V&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case H:e:{for(var L=w.key;x!==null;){if(x.key===L){if(L=w.type,L===V){if(x.tag===7){a(v,x.sibling),R=l(x,w.props.children),R.return=v,v=R;break e}}else if(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Oe&&Gd(L)===x.type){a(v,x.sibling),R=l(x,w.props),oi(R,w),R.return=v,v=R;break e}a(v,x);break}else t(v,x);x=x.sibling}w.type===V?(R=Aa(w.props.children,v.mode,R,w.key),R.return=v,v=R):(R=tl(w.type,w.key,w.props,null,v.mode,R),oi(R,w),R.return=v,v=R)}return o(v);case Y:e:{for(L=w.key;x!==null;){if(x.key===L)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){a(v,x.sibling),R=l(x,w.children||[]),R.return=v,v=R;break e}else{a(v,x);break}else t(v,x);x=x.sibling}R=qr(w,v.mode,R),R.return=v,v=R}return o(v);case Oe:return L=w._init,w=L(w._payload),he(v,x,w,R)}if(Xe(w))return I(v,x,w,R);if(qe(w)){if(L=qe(w),typeof L!="function")throw Error(c(150));return w=L.call(w),K(v,x,w,R)}if(typeof w.then=="function")return he(v,x,yl(w),R);if(w.$$typeof===ee)return he(v,x,ll(v,w),R);vl(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(a(v,x.sibling),R=l(x,w),R.return=v,v=R):(a(v,x),R=Gr(w,v.mode,R),R.return=v,v=R),o(v)):a(v,x)}return function(v,x,w,R){try{ri=0;var L=he(v,x,w,R);return hn=null,L}catch(X){if(X===Fn||X===ol)throw X;var ne=it(29,X,null,v.mode);return ne.lanes=R,ne.return=v,ne}finally{}}}var pn=qd(!0),Xd=qd(!1),xt=D(null),Nt=null;function ra(e){var t=e.alternate;U(Me,Me.current&1),U(xt,e),Nt===null&&(t===null||dn.current!==null||t.memoizedState!==null)&&(Nt=e)}function Vd(e){if(e.tag===22){if(U(Me,Me.current),U(xt,e),Nt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Nt=e)}}else oa()}function oa(){U(Me,Me.current),U(xt,xt.current)}function Gt(e){_(xt),Nt===e&&(Nt=null),_(Me)}var Me=D(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||us(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function jo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:k({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var So={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=st(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=ia(e,l,n),t!==null&&(ct(t,e,n),Pn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=st(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ia(e,l,n),t!==null&&(ct(t,e,n),Pn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(ct(t,e,a),Pn(t,e,a))}};function Qd(e,t,a,n,l,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Xn(a,n)||!Xn(l,r):!0}function Zd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function _a(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=k({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kd(e){wl(e)}function Wd(e){console.error(e)}function Jd(e){wl(e)}function jl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Id(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zo(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,t)},a}function Fd(e){return e=na(e),e.tag=3,e}function $d(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=n.value;e.payload=function(){return l(r)},e.callback=function(){Id(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Id(t,a,n),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function lh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Wn(t,a,l,!0),a=xt.current,a!==null){switch(a.tag){case 13:return Nt===null?Wo():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===$r?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Io(e,n,l)),!1;case 22:return a.flags|=65536,n===$r?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Io(e,n,l)),!1}throw Error(c(435,a.tag))}return Io(e,n,l),Wo(),!1}if(ce)return t=xt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Qr&&(e=Error(c(422),{cause:n}),Kn(mt(e,a)))):(n!==Qr&&(t=Error(c(423),{cause:n}),Kn(mt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=mt(n,a),l=zo(e.stateNode,n,l),to(e,l),ke!==4&&(ke=2)),!1;var r=Error(c(520),{cause:n});if(r=mt(r,a),hi===null?hi=[r]:hi.push(r),ke!==4&&(ke=2),t===null)return!0;n=mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=zo(a.stateNode,n,e),to(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Fd(l),$d(l,e,a,n),to(a,l),!1}a=a.return}while(a!==null);return!1}var Pd=Error(c(461)),Ue=!1;function Ye(e,t,a,n){t.child=e===null?Xd(t,null,a,n):pn(t,e.child,a,n)}function eu(e,t,a,n,l){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var u in n)u!=="ref"&&(o[u]=n[u])}else o=n;return Ha(t),n=ro(e,t,a,o,r,l),u=oo(),e!==null&&!Ue?(so(e,t,l),qt(e,t,l)):(ce&&u&&Xr(t),t.flags|=1,Ye(e,t,n,l),t.child)}function tu(e,t,a,n,l){if(e===null){var r=a.type;return typeof r=="function"&&!Lr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,au(e,t,r,n,l)):(e=tl(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Mo(e,l)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Xn,a(o,n)&&e.ref===t.ref)return qt(e,t,l)}return t.flags|=1,e=Ht(r,n),e.ref=t.ref,e.return=t,t.child=e}function au(e,t,a,n,l){if(e!==null){var r=e.memoizedProps;if(Xn(r,n)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=n=r,Mo(e,l))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,qt(e,t,l)}return ko(e,t,a,n,l)}function nu(e,t,a){var n=t.pendingProps,l=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return iu(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(t,r!==null?r.cachePool:null),r!==null?ad(t,r):no(),Vd(t);else return t.lanes=t.childLanes=536870912,iu(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(rl(t,r.cachePool),ad(t,r),oa(),t.memoizedState=null):(e!==null&&rl(t,null),no(),oa());return Ye(e,t,l,a),t.child}function iu(e,t,a,n){var l=Fr();return l=l===null?null:{parent:Re._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&rl(t,null),no(),Vd(t),e!==null&&Wn(e,t,n,!0),null}function Sl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ko(e,t,a,n,l){return Ha(t),a=ro(e,t,a,n,void 0,l),n=oo(),e!==null&&!Ue?(so(e,t,l),qt(e,t,l)):(ce&&n&&Xr(t),t.flags|=1,Ye(e,t,a,l),t.child)}function lu(e,t,a,n,l,r){return Ha(t),t.updateQueue=null,a=id(t,n,a,l),nd(e),n=oo(),e!==null&&!Ue?(so(e,t,r),qt(e,t,r)):(ce&&n&&Xr(t),t.flags|=1,Ye(e,t,a,r),t.child)}function ru(e,t,a,n,l){if(Ha(t),t.stateNode===null){var r=ln,o=a.contextType;typeof o=="object"&&o!==null&&(r=Qe(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=So,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Pr(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Qe(o):ln,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(jo(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&So.enqueueReplaceState(r,r.state,null),ti(t,n,r,l),ei(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,h=_a(a,u);r.props=h;var j=r.context,A=a.contextType;o=ln,typeof A=="object"&&A!==null&&(o=Qe(A));var M=a.getDerivedStateFromProps;A=typeof M=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||j!==o)&&Zd(t,r,n,o),aa=!1;var z=t.memoizedState;r.state=z,ti(t,n,r,l),ei(),j=t.memoizedState,u||z!==j||aa?(typeof M=="function"&&(jo(t,a,M,n),j=t.memoizedState),(h=aa||Qd(t,a,h,n,z,j,o))?(A||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=j),r.props=n,r.state=j,r.context=o,n=h):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,eo(e,t),o=t.memoizedProps,A=_a(a,o),r.props=A,M=t.pendingProps,z=r.context,j=a.contextType,h=ln,typeof j=="object"&&j!==null&&(h=Qe(j)),u=a.getDerivedStateFromProps,(j=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==M||z!==h)&&Zd(t,r,n,h),aa=!1,z=t.memoizedState,r.state=z,ti(t,n,r,l),ei();var N=t.memoizedState;o!==M||z!==N||aa||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof u=="function"&&(jo(t,a,u,n),N=t.memoizedState),(A=aa||Qd(t,a,A,n,z,N,h)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(j||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,N,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,N,h)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=N),r.props=n,r.state=N,r.context=h,n=A):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Sl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=pn(t,e.child,null,l),t.child=pn(t,null,a,l)):Ye(e,t,a,l),t.memoizedState=r.state,e=t.child):e=qt(e,t,l),e}function ou(e,t,a,n){return Zn(),t.flags|=256,Ye(e,t,a,n),t.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function To(e){return{baseLanes:e,cachePool:Wc()}}function Eo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function su(e,t,a){var n=t.pendingProps,l=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?ra(t):oa(),ce){var u=ze,h;if(h=u){e:{for(h=u,u=kt;h.nodeType!==8;){if(!u){u=null;break e}if(h=jt(h.nextSibling),h===null){u=null;break e}}u=h}u!==null?(t.memoizedState={dehydrated:u,treeContext:Ca!==null?{id:Ut,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},h=it(18,null,null,0),h.stateNode=u,h.return=t,t.child=h,Ke=t,ze=null,h=!0):h=!1}h||Da(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return us(u)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return u=n.children,n=n.fallback,l?(oa(),l=t.mode,u=zl({mode:"hidden",children:u},l),n=Aa(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,l=t.child,l.memoizedState=To(a),l.childLanes=Eo(e,o,a),t.memoizedState=No,n):(ra(t),Ao(t,u))}if(h=e.memoizedState,h!==null&&(u=h.dehydrated,u!==null)){if(r)t.flags&256?(ra(t),t.flags&=-257,t=Co(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),l=n.fallback,u=t.mode,n=zl({mode:"visible",children:n.children},u),l=Aa(l,u,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,pn(t,e.child,null,a),n=t.child,n.memoizedState=To(a),n.childLanes=Eo(e,o,a),t.memoizedState=No,t=l);else if(ra(t),us(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var j=o.dgst;o=j,n=Error(c(419)),n.stack="",n.digest=o,Kn({value:n,source:null,stack:null}),t=Co(e,t,a)}else if(Ue||Wn(e,t,a,!1),o=(a&e.childLanes)!==0,Ue||o){if(o=xe,o!==null&&(n=a&-a,n=(n&42)!==0?1:ur(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==h.retryLane))throw h.retryLane=n,nn(e,n),ct(o,e,n),Pd;u.data==="$?"||Wo(),t=Co(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,ze=jt(u.nextSibling),Ke=t,ce=!0,Ma=null,kt=!1,e!==null&&(pt[gt++]=Ut,pt[gt++]=Bt,pt[gt++]=Ca,Ut=e.id,Bt=e.overflow,Ca=t),t=Ao(t,n.children),t.flags|=4096);return t}return l?(oa(),l=n.fallback,u=t.mode,h=e.child,j=h.sibling,n=Ht(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&65011712,j!==null?l=Ht(j,l):(l=Aa(l,u,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,u=e.child.memoizedState,u===null?u=To(a):(h=u.cachePool,h!==null?(j=Re._currentValue,h=h.parent!==j?{parent:j,pool:j}:h):h=Wc(),u={baseLanes:u.baseLanes|a,cachePool:h}),l.memoizedState=u,l.childLanes=Eo(e,o,a),t.memoizedState=No,n):(ra(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ao(e,t){return t=zl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zl(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Co(e,t,a){return pn(t,e.child,null,a),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Kr(e.return,t,a)}function Ro(e,t,a,n,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=l)}function du(e,t,a){var n=t.pendingProps,l=n.revealOrder,r=n.tail;if(Ye(e,t,n.children,a),n=Me.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,a,t);else if(e.tag===19)cu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(U(Me,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Ro(t,!1,l,a,r);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ro(t,!0,a,null,r);break;case"together":Ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Mo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function rh(e,t,a){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,Re,e.memoizedState.cache),Zn();break;case 27:case 5:rr(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?su(e,t,a):(ra(t),e=qt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Wn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return du(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Me,Me.current),n)break;return null;case 22:case 23:return t.lanes=0,nu(e,t,a);case 24:ta(t,Re,e.memoizedState.cache)}return qt(e,t,a)}function uu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Mo(e,a)&&(t.flags&128)===0)return Ue=!1,rh(e,t,a);Ue=(e.flags&131072)!==0}else Ue=!1,ce&&(t.flags&1048576)!==0&&Gc(t,nl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Lr(n)?(e=_a(n,e),t.tag=1,t=ru(null,t,n,e,a)):(t.tag=0,t=ko(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===be){t.tag=11,t=eu(null,t,n,e,a);break e}else if(l===Ce){t.tag=14,t=tu(null,t,n,e,a);break e}}throw t=Sa(n)||n,Error(c(306,t,""))}}return t;case 0:return ko(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=_a(n,t.pendingProps),ru(e,t,n,l,a);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var r=t.memoizedState;l=r.element,eo(e,t),ti(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ta(t,Re,n),n!==r.cache&&Wr(t,[Re],a,!0),ei(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ou(e,t,n,a);break e}else if(n!==l){l=mt(Error(c(424)),t),Kn(l),t=ou(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=jt(e.firstChild),Ke=t,ce=!0,Ma=null,kt=!0,a=Xd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zn(),n===l){t=qt(e,t,a);break e}Ye(e,t,n,a)}t=t.child}return t;case 26:return Sl(e,t),e===null?(a=gf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,n=_l(P.current).createElement(a),n[Ve]=t,n[We]=e,Ge(n,a,e),He(n),t.stateNode=n):t.memoizedState=gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rr(t),e===null&&ce&&(n=t.stateNode=mf(t.type,t.pendingProps,P.current),Ke=t,kt=!0,l=ze,ga(t.type)?(fs=l,ze=jt(n.firstChild)):ze=l),Ye(e,t,t.pendingProps.children,a),Sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=n=ze)&&(n=Oh(n,t.type,t.pendingProps,kt),n!==null?(t.stateNode=n,Ke=t,ze=jt(n.firstChild),kt=!1,l=!0):l=!1),l||Da(t)),rr(t),l=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,ss(l,r)?n=null:o!==null&&ss(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ro(e,t,$m,null,null,a),Si._currentValue=l),Sl(e,t),Ye(e,t,n,a),t.child;case 6:return e===null&&ce&&((e=a=ze)&&(a=Hh(a,t.pendingProps,kt),a!==null?(t.stateNode=a,Ke=t,ze=null,e=!0):e=!1),e||Da(t)),null;case 13:return su(e,t,a);case 4:return ye(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=pn(t,null,n,a):Ye(e,t,n,a),t.child;case 11:return eu(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Ye(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ha(t),l=Qe(l),n=n(l),t.flags|=1,Ye(e,t,n,a),t.child;case 14:return tu(e,t,t.type,t.pendingProps,a);case 15:return au(e,t,t.type,t.pendingProps,a);case 19:return du(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=zl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ht(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return nu(e,t,a);case 24:return Ha(t),n=Qe(Re),e===null?(l=Fr(),l===null&&(l=xe,r=Jr(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:n,cache:l},Pr(t),ta(t,Re,l)):((e.lanes&a)!==0&&(eo(e,t),ti(t,null,null,a),ei()),l=e.memoizedState,r=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,Re,n)):(n=r.cache,ta(t,Re,n),n!==l.cache&&Wr(t,[Re],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Xt(e){e.flags|=4}function fu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wf(t)){if(t=xt.current,t!==null&&((re&4194048)===re?Nt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==Nt))throw $n=$r,Jc;e.flags|=8192}}function kl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vs():536870912,e.lanes|=t,vn|=t)}function si(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function oh(e,t,a){var n=t.pendingProps;switch(Vr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(Re),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qn(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vc())),we(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(we(t),fu(t,a)):(we(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),we(t),fu(t,a)):(we(t),t.flags&=-16777217):(e.memoizedProps!==n&&Xt(t),we(t),t.flags&=-16777217),null;case 27:Ui(t),a=P.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return we(t),null}e=Z.current,Qn(t)?qc(t):(e=mf(l,n,a),t.stateNode=e,Xt(t))}return we(t),null;case 5:if(Ui(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return we(t),null}if(e=Z.current,Qn(t))qc(t);else{switch(l=_l(P.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[Ve]=t,e[We]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Ge(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return we(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Xt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=P.current,Qn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ke,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||rf(e.nodeValue,a)),e||Da(t)}else e=_l(e).createTextNode(n),e[Ve]=t,t.stateNode=e}return we(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Qn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ve]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else l=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),kl(t,t.updateQueue),we(t),null;case 4:return Ft(),e===null&&ns(t.stateNode.containerInfo),we(t),null;case 10:return Yt(t.type),we(t),null;case 19:if(_(Me),l=t.memoizedState,l===null)return we(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)si(l,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=bl(e),r!==null){for(t.flags|=128,si(l,!1),e=r.updateQueue,t.updateQueue=e,kl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Lc(a,e),a=a.sibling;return U(Me,Me.current&1|2),t.child}e=e.sibling}l.tail!==null&&zt()>El&&(t.flags|=128,n=!0,si(l,!1),t.lanes=4194304)}else{if(!n)if(e=bl(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,kl(t,e),si(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ce)return we(t),null}else 2*zt()-l.renderingStartTime>El&&a!==536870912&&(t.flags|=128,n=!0,si(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=zt(),t.sibling=null,e=Me.current,U(Me,n?e&1|2:e&1),t):(we(t),null);case 22:case 23:return Gt(t),io(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&kl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&_(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(Re),we(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function sh(e,t){switch(Vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(Re),Ft(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ui(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Me),null;case 4:return Ft(),null;case 10:return Yt(t.type),null;case 22:case 23:return Gt(t),io(),e!==null&&_(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(Re),null;case 25:return null;default:return null}}function mu(e,t){switch(Vr(t),t.tag){case 3:Yt(Re),Ft();break;case 26:case 27:case 5:Ui(t);break;case 4:Ft();break;case 13:Gt(t);break;case 19:_(Me);break;case 10:Yt(t.type);break;case 22:case 23:Gt(t),io(),e!==null&&_(Ua);break;case 24:Yt(Re)}}function ci(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==l)}}catch(u){ge(t,t.return,u)}}function sa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){var o=n.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var h=a,j=u;try{j()}catch(A){ge(l,h,A)}}}n=n.next}while(n!==r)}}catch(A){ge(t,t.return,A)}}function hu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{td(t,a)}catch(n){ge(e,e.return,n)}}}function pu(e,t,a){a.props=_a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ge(e,t,n)}}function di(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ge(e,t,l)}}function Tt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ge(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ge(e,t,l)}else a.current=null}function gu(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ge(e,e.return,l)}}function Do(e,t,a){try{var n=e.stateNode;Ah(n,e.type,a,t),n[We]=t}catch(l){ge(e,e.return,l)}}function xu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function Oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ho(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Bl));else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ho(e,t,a),e=e.sibling;e!==null;)Ho(e,t,a),e=e.sibling}function Nl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,t,a),e=e.sibling;e!==null;)Nl(e,t,a),e=e.sibling}function yu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ge(t,n,a),t[Ve]=e,t[We]=a}catch(r){ge(e,e.return,r)}}var Vt=!1,Te=!1,Uo=!1,vu=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ch(e,t){if(e=e.containerInfo,rs=Vl,e=Cc(e),Dr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,u=-1,h=-1,j=0,A=0,M=e,z=null;t:for(;;){for(var N;M!==a||l!==0&&M.nodeType!==3||(u=o+l),M!==r||n!==0&&M.nodeType!==3||(h=o+n),M.nodeType===3&&(o+=M.nodeValue.length),(N=M.firstChild)!==null;)z=M,M=N;for(;;){if(M===e)break t;if(z===a&&++j===l&&(u=o),z===r&&++A===n&&(h=o),(N=M.nextSibling)!==null)break;M=z,z=M.parentNode}M=N}a=u===-1||h===-1?null:{start:u,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(os={focusedElem:e,selectionRange:a},Vl=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var I=_a(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(I,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(K){ge(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ds(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ds(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}}function bu(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),n&4&&ci(5,a);break;case 1:if(ca(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(a,a.return,o)}else{var l=_a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(a,a.return,o)}}n&64&&hu(a),n&512&&di(a,a.return);break;case 3:if(ca(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{td(e,t)}catch(o){ge(a,a.return,o)}}break;case 27:t===null&&n&4&&yu(a);case 26:case 5:ca(e,a),t===null&&n&4&&gu(a),n&512&&di(a,a.return);break;case 12:ca(e,a);break;case 13:ca(e,a),n&4&&Su(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yh.bind(null,a),Uh(e,a))));break;case 22:if(n=a.memoizedState!==null||Vt,!n){t=t!==null&&t.memoizedState!==null||Te,l=Vt;var r=Te;Vt=n,(Te=t)&&!r?da(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),Vt=l,Te=r}break;case 30:break;default:ca(e,a)}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&hr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,Fe=!1;function Qt(e,t,a){for(a=a.child;a!==null;)ju(e,t,a),a=a.sibling}function ju(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Rn,a)}catch{}switch(a.tag){case 26:Te||Tt(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Tt(a,t);var n=ve,l=Fe;ga(a.type)&&(ve=a.stateNode,Fe=!1),Qt(e,t,a),vi(a.stateNode),ve=n,Fe=l;break;case 5:Te||Tt(a,t);case 6:if(n=ve,l=Fe,ve=null,Qt(e,t,a),ve=n,Fe=l,ve!==null)if(Fe)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(a.stateNode)}catch(r){ge(a,t,r)}else try{ve.removeChild(a.stateNode)}catch(r){ge(a,t,r)}break;case 18:ve!==null&&(Fe?(e=ve,uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ti(e)):uf(ve,a.stateNode));break;case 4:n=ve,l=Fe,ve=a.stateNode.containerInfo,Fe=!0,Qt(e,t,a),ve=n,Fe=l;break;case 0:case 11:case 14:case 15:Te||sa(2,a,t),Te||sa(4,a,t),Qt(e,t,a);break;case 1:Te||(Tt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&pu(a,t,n)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Te=(n=Te)||a.memoizedState!==null,Qt(e,t,a),Te=n;break;default:Qt(e,t,a)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(a){ge(t,t.return,a)}}function dh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vu),t;default:throw Error(c(435,e.tag))}}function Bo(e,t){var a=dh(e);t.forEach(function(n){var l=vh.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function lt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],r=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ga(u.type)){ve=u.stateNode,Fe=!1;break e}break;case 5:ve=u.stateNode,Fe=!1;break e;case 3:case 4:ve=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(ve===null)throw Error(c(160));ju(r,o,l),ve=null,Fe=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)zu(t,e),t=t.sibling}var wt=null;function zu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:lt(t,e),rt(e),n&4&&(sa(3,e,e.return),ci(3,e),sa(5,e,e.return));break;case 1:lt(t,e),rt(e),n&512&&(Te||a===null||Tt(a,a.return)),n&64&&Vt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=wt;if(lt(t,e),rt(e),n&512&&(Te||a===null||Tt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[On]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Ge(r,n,a),r[Ve]=e,He(r),n=r;break e;case"link":var o=vf("link","href",l).get(n+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(r=o[u],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}r=l.createElement(n),Ge(r,n,a),l.head.appendChild(r);break;case"meta":if(o=vf("meta","content",l).get(n+(a.content||""))){for(u=0;u<o.length;u++)if(r=o[u],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}r=l.createElement(n),Ge(r,n,a),l.head.appendChild(r);break;default:throw Error(c(468,n))}r[Ve]=e,He(r),n=r}e.stateNode=n}else bf(l,e.type,e.stateNode);else e.stateNode=yf(l,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?bf(l,e.type,e.stateNode):yf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Do(e,e.memoizedProps,a.memoizedProps)}break;case 27:lt(t,e),rt(e),n&512&&(Te||a===null||Tt(a,a.return)),a!==null&&n&4&&Do(e,e.memoizedProps,a.memoizedProps);break;case 5:if(lt(t,e),rt(e),n&512&&(Te||a===null||Tt(a,a.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(N){ge(e,e.return,N)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Do(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Uo=!0);break;case 6:if(lt(t,e),rt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(N){ge(e,e.return,N)}}break;case 3:if(Gl=null,l=wt,wt=Yl(t.containerInfo),lt(t,e),wt=l,rt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(N){ge(e,e.return,N)}Uo&&(Uo=!1,ku(e));break;case 4:n=wt,wt=Yl(e.stateNode.containerInfo),lt(t,e),rt(e),wt=n;break;case 12:lt(t,e),rt(e);break;case 13:lt(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xo=zt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bo(e,n)));break;case 22:l=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,j=Vt,A=Te;if(Vt=j||l,Te=A||h,lt(t,e),Te=A,Vt=j,rt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||h||Vt||Te||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(r=h.stateNode,l)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=h.stateNode;var M=h.memoizedProps.style,z=M!=null&&M.hasOwnProperty("display")?M.display:null;u.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(N){ge(h,h.return,N)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(N){ge(h,h.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Bo(e,a))));break;case 19:lt(t,e),rt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bo(e,n)));break;case 30:break;case 21:break;default:lt(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(xu(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,r=Oo(e);Nl(e,r,l);break;case 5:var o=a.stateNode;a.flags&32&&(Ia(o,""),a.flags&=-33);var u=Oo(e);Nl(e,u,o);break;case 3:case 4:var h=a.stateNode.containerInfo,j=Oo(e);Ho(e,j,h);break;default:throw Error(c(161))}}catch(A){ge(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ku(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ku(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bu(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),Ya(t);break;case 1:Tt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&pu(t,t.return,a),Ya(t);break;case 27:vi(t.stateNode);case 26:case 5:Tt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:da(l,r,a),ci(4,r);break;case 1:if(da(l,r,a),n=r,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(j){ge(n,n.return,j)}if(n=r,l=n.updateQueue,l!==null){var u=n.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)ed(h[l],u)}catch(j){ge(n,n.return,j)}}a&&o&64&&hu(r),di(r,r.return);break;case 27:yu(r);case 26:case 5:da(l,r,a),a&&n===null&&o&4&&gu(r),di(r,r.return);break;case 12:da(l,r,a);break;case 13:da(l,r,a),a&&o&4&&Su(l,r);break;case 22:r.memoizedState===null&&da(l,r,a),di(r,r.return);break;case 30:break;default:da(l,r,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jn(a))}function Yo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jn(e))}function Et(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nu(e,t,a,n),t=t.sibling}function Nu(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t,a,n),l&2048&&ci(9,t);break;case 1:Et(e,t,a,n);break;case 3:Et(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jn(e)));break;case 12:if(l&2048){Et(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,u=r.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Et(e,t,a,n);break;case 13:Et(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Et(e,t,a,n):ui(e,t):r._visibility&2?Et(e,t,a,n):(r._visibility|=2,gn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&_o(o,t);break;case 24:Et(e,t,a,n),l&2048&&Yo(t.alternate,t);break;default:Et(e,t,a,n)}}function gn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,o=t,u=a,h=n,j=o.flags;switch(o.tag){case 0:case 11:case 15:gn(r,o,u,h,l),ci(8,o);break;case 23:break;case 22:var A=o.stateNode;o.memoizedState!==null?A._visibility&2?gn(r,o,u,h,l):ui(r,o):(A._visibility|=2,gn(r,o,u,h,l)),l&&j&2048&&_o(o.alternate,o);break;case 24:gn(r,o,u,h,l),l&&j&2048&&Yo(o.alternate,o);break;default:gn(r,o,u,h,l)}t=t.sibling}}function ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ui(a,n),l&2048&&_o(n.alternate,n);break;case 24:ui(a,n),l&2048&&Yo(n.alternate,n);break;default:ui(a,n)}t=t.sibling}}var fi=8192;function xn(e){if(e.subtreeFlags&fi)for(e=e.child;e!==null;)Tu(e),e=e.sibling}function Tu(e){switch(e.tag){case 26:xn(e),e.flags&fi&&e.memoizedState!==null&&Jh(wt,e.memoizedState,e.memoizedProps);break;case 5:xn(e);break;case 3:case 4:var t=wt;wt=Yl(e.stateNode.containerInfo),xn(e),wt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=fi,fi=16777216,xn(e),fi=t):xn(e));break;default:xn(e)}}function Eu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Be=n,Cu(n,e)}Eu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Au(e),e=e.sibling}function Au(e){switch(e.tag){case 0:case 11:case 15:mi(e),e.flags&2048&&sa(9,e,e.return);break;case 3:mi(e);break;case 12:mi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tl(e)):mi(e);break;default:mi(e)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Be=n,Cu(n,e)}Eu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),Tl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(t));break;default:Tl(t)}e=e.sibling}}function Cu(e,t){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Jn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Be=n;else e:for(a=e;Be!==null;){n=Be;var l=n.sibling,r=n.return;if(wu(n),n===a){Be=null;break e}if(l!==null){l.return=r,Be=l;break e}Be=r}}}var uh={getCacheForType:function(e){var t=Qe(Re),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},fh=typeof WeakMap=="function"?WeakMap:Map,de=0,xe=null,ie=null,re=0,ue=0,ot=null,ua=!1,yn=!1,Lo=!1,Zt=0,ke=0,fa=0,La=0,Go=0,yt=0,vn=0,hi=null,$e=null,qo=!1,Xo=0,El=1/0,Al=null,ma=null,Le=0,ha=null,bn=null,wn=0,Vo=0,Qo=null,Ru=null,pi=0,Zo=null;function st(){if((de&2)!==0&&re!==0)return re&-re;if(C.T!==null){var e=sn;return e!==0?e:Po()}return Ks()}function Mu(){yt===0&&(yt=(re&536870912)===0||ce?Xs():536870912);var e=xt.current;return e!==null&&(e.flags|=32),yt}function ct(e,t,a){(e===xe&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(jn(e,0),pa(e,re,yt,!1)),Dn(e,a),((de&2)===0||e!==xe)&&(e===xe&&((de&2)===0&&(La|=a),ke===4&&pa(e,re,yt,!1)),At(e))}function Du(e,t,a){if((de&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Mn(e,t),l=n?ph(e,t):Jo(e,t,!0),r=n;do{if(l===0){yn&&!n&&pa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!mh(a)){l=Jo(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=hi;var h=u.current.memoizedState.isDehydrated;if(h&&(jn(u,o).flags|=256),o=Jo(u,o,!1),o!==2){if(Lo&&!h){u.errorRecoveryDisabledLanes|=r,La|=r,l=4;break e}r=$e,$e=l,r!==null&&($e===null?$e=r:$e.push.apply($e,r))}l=o}if(r=!1,l!==2)continue}}if(l===1){jn(e,0),pa(e,t,0,!0);break}e:{switch(n=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:pa(n,t,yt,!ua);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Xo+300-zt(),10<l)){if(pa(n,t,yt,!ua),Li(n,0,!0)!==0)break e;n.timeoutHandle=cf(Ou.bind(null,n,a,$e,Al,qo,t,yt,La,vn,ua,r,2,-0,0),l);break e}Ou(n,a,$e,Al,qo,t,yt,La,vn,ua,r,0,-0,0)}}break}while(!0);At(e)}function Ou(e,t,a,n,l,r,o,u,h,j,A,M,z,N){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(ji={stylesheets:null,count:0,unsuspend:Wh},Tu(t),M=Ih(),M!==null)){e.cancelPendingCommit=M(Gu.bind(null,e,t,r,a,n,l,o,u,h,A,1,z,N)),pa(e,r,o,!j);return}Gu(e,t,r,a,n,l,o,u,h)}function mh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],r=l.getSnapshot;l=l.value;try{if(!nt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(e,t,a,n){t&=~Go,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var r=31-at(l),o=1<<r;n[r]=-1,l&=~o}a!==0&&Qs(e,a,t)}function Cl(){return(de&6)===0?(gi(0),!1):!0}function Ko(){if(ie!==null){if(ue===0)var e=ie.return;else e=ie,_t=Oa=null,co(e),hn=null,ri=0,e=ie;for(;e!==null;)mu(e.alternate,e),e=e.return;ie=null}}function jn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Rh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ko(),xe=e,ie=a=Ht(e.current,null),re=t,ue=0,ot=null,ua=!1,yn=Mn(e,t),Lo=!1,vn=yt=Go=La=fa=ke=0,$e=hi=null,qo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-at(n),r=1<<l;t|=e[l],n&=~r}return Zt=t,$i(),a}function Hu(e,t){ae=null,C.H=xl,t===Fn||t===ol?(t=$c(),ue=3):t===Jc?(t=$c(),ue=4):ue=t===Pd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ie===null&&(ke=1,jl(e,mt(t,e.current)))}function Uu(){var e=C.H;return C.H=xl,e===null?xl:e}function Bu(){var e=C.A;return C.A=uh,e}function Wo(){ke=4,ua||(re&4194048)!==re&&xt.current!==null||(yn=!0),(fa&134217727)===0&&(La&134217727)===0||xe===null||pa(xe,re,yt,!1)}function Jo(e,t,a){var n=de;de|=2;var l=Uu(),r=Bu();(xe!==e||re!==t)&&(Al=null,jn(e,t)),t=!1;var o=ke;e:do try{if(ue!==0&&ie!==null){var u=ie,h=ot;switch(ue){case 8:Ko(),o=6;break e;case 3:case 2:case 9:case 6:xt.current===null&&(t=!0);var j=ue;if(ue=0,ot=null,Sn(e,u,h,j),a&&yn){o=0;break e}break;default:j=ue,ue=0,ot=null,Sn(e,u,h,j)}}hh(),o=ke;break}catch(A){Hu(e,A)}while(!0);return t&&e.shellSuspendCounter++,_t=Oa=null,de=n,C.H=l,C.A=r,ie===null&&(xe=null,re=0,$i()),o}function hh(){for(;ie!==null;)_u(ie)}function ph(e,t){var a=de;de|=2;var n=Uu(),l=Bu();xe!==e||re!==t?(Al=null,El=zt()+500,jn(e,t)):yn=Mn(e,t);e:do try{if(ue!==0&&ie!==null){t=ie;var r=ot;t:switch(ue){case 1:ue=0,ot=null,Sn(e,t,r,1);break;case 2:case 9:if(Ic(r)){ue=0,ot=null,Yu(t);break}t=function(){ue!==2&&ue!==9||xe!==e||(ue=7),At(e)},r.then(t,t);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:Ic(r)?(ue=0,ot=null,Yu(t)):(ue=0,ot=null,Sn(e,t,r,7));break;case 5:var o=null;switch(ie.tag){case 26:o=ie.memoizedState;case 5:case 27:var u=ie;if(!o||wf(o)){ue=0,ot=null;var h=u.sibling;if(h!==null)ie=h;else{var j=u.return;j!==null?(ie=j,Rl(j)):ie=null}break t}}ue=0,ot=null,Sn(e,t,r,5);break;case 6:ue=0,ot=null,Sn(e,t,r,6);break;case 8:Ko(),ke=6;break e;default:throw Error(c(462))}}gh();break}catch(A){Hu(e,A)}while(!0);return _t=Oa=null,C.H=n,C.A=l,de=a,ie!==null?0:(xe=null,re=0,$i(),ke)}function gh(){for(;ie!==null&&!_0();)_u(ie)}function _u(e){var t=uu(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Rl(e):ie=t}function Yu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=lu(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=lu(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:co(t);default:mu(a,t),t=ie=Lc(t,Zt),t=uu(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Rl(e):ie=t}function Sn(e,t,a,n){_t=Oa=null,co(t),hn=null,ri=0;var l=t.return;try{if(lh(e,l,t,a,re)){ke=1,jl(e,mt(a,e.current)),ie=null;return}}catch(r){if(l!==null)throw ie=l,r;ke=1,jl(e,mt(a,e.current)),ie=null;return}t.flags&32768?(ce||n===1?e=!0:yn||(re&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=xt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Lu(t,e)):Rl(t)}function Rl(e){var t=e;do{if((t.flags&32768)!==0){Lu(t,ua);return}e=t.return;var a=oh(t.alternate,t,Zt);if(a!==null){ie=a;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ke===0&&(ke=5)}function Lu(e,t){do{var a=sh(e.alternate,e);if(a!==null){a.flags&=32767,ie=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=a}while(e!==null);ke=6,ie=null}function Gu(e,t,a,n,l,r,o,u,h){e.cancelPendingCommit=null;do Ml();while(Le!==0);if((de&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=_r,W0(e,a,r,o,u,h),e===xe&&(ie=xe=null,re=0),bn=t,ha=e,wn=a,Vo=r,Qo=l,Ru=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bh(Bi,function(){return Zu(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null,l=B.p,B.p=2,o=de,de|=4;try{ch(e,t,a)}finally{de=o,B.p=l,C.T=n}}Le=1,qu(),Xu(),Vu()}}function qu(){if(Le===1){Le=0;var e=ha,t=bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var n=B.p;B.p=2;var l=de;de|=4;try{zu(t,e);var r=os,o=Cc(e.containerInfo),u=r.focusedElem,h=r.selectionRange;if(o!==u&&u&&u.ownerDocument&&Ac(u.ownerDocument.documentElement,u)){if(h!==null&&Dr(u)){var j=h.start,A=h.end;if(A===void 0&&(A=j),"selectionStart"in u)u.selectionStart=j,u.selectionEnd=Math.min(A,u.value.length);else{var M=u.ownerDocument||document,z=M&&M.defaultView||window;if(z.getSelection){var N=z.getSelection(),I=u.textContent.length,K=Math.min(h.start,I),he=h.end===void 0?K:Math.min(h.end,I);!N.extend&&K>he&&(o=he,he=K,K=o);var v=Ec(u,K),x=Ec(u,he);if(v&&x&&(N.rangeCount!==1||N.anchorNode!==v.node||N.anchorOffset!==v.offset||N.focusNode!==x.node||N.focusOffset!==x.offset)){var w=M.createRange();w.setStart(v.node,v.offset),N.removeAllRanges(),K>he?(N.addRange(w),N.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),N.addRange(w))}}}}for(M=[],N=u;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<M.length;u++){var R=M[u];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Vl=!!rs,os=rs=null}finally{de=l,B.p=n,C.T=a}}e.current=t,Le=2}}function Xu(){if(Le===2){Le=0;var e=ha,t=bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var n=B.p;B.p=2;var l=de;de|=4;try{bu(e,t.alternate,t)}finally{de=l,B.p=n,C.T=a}}Le=3}}function Vu(){if(Le===4||Le===3){Le=0,Y0();var e=ha,t=bn,a=wn,n=Ru;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,bn=ha=null,Qu(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ma=null),fr(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Rn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=C.T,l=B.p,B.p=2,C.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var u=n[o];r(u.value,{componentStack:u.stack})}}finally{C.T=t,B.p=l}}(wn&3)!==0&&Ml(),At(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Zo?pi++:(pi=0,Zo=e):pi=0,gi(0)}}function Qu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jn(t)))}function Ml(e){return qu(),Xu(),Vu(),Zu()}function Zu(){if(Le!==5)return!1;var e=ha,t=Vo;Vo=0;var a=fr(wn),n=C.T,l=B.p;try{B.p=32>a?32:a,C.T=null,a=Qo,Qo=null;var r=ha,o=wn;if(Le=0,bn=ha=null,wn=0,(de&6)!==0)throw Error(c(331));var u=de;if(de|=4,Au(r.current),Nu(r,r.current,o,a),de=u,gi(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Rn,r)}catch{}return!0}finally{B.p=l,C.T=n,Qu(e,t)}}function Ku(e,t,a){t=mt(a,t),t=zo(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(Dn(e,2),At(e))}function ge(e,t,a){if(e.tag===3)Ku(e,e,a);else for(;t!==null;){if(t.tag===3){Ku(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))){e=mt(a,e),a=Fd(2),n=ia(t,a,2),n!==null&&($d(a,n,t,e),Dn(n,2),At(n));break}}t=t.return}}function Io(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new fh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Lo=!0,l.add(a),e=xh.bind(null,e,t,a),t.then(e,e))}function xh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(re&a)===a&&(ke===4||ke===3&&(re&62914560)===re&&300>zt()-Xo?(de&2)===0&&jn(e,0):Go|=a,vn===re&&(vn=0)),At(e)}function Wu(e,t){t===0&&(t=Vs()),e=nn(e,t),e!==null&&(Dn(e,t),At(e))}function yh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Wu(e,a)}function vh(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Wu(e,a)}function bh(e,t){return sr(e,t)}var Dl=null,zn=null,Fo=!1,Ol=!1,$o=!1,Ga=0;function At(e){e!==zn&&e.next===null&&(zn===null?Dl=zn=e:zn=zn.next=e),Ol=!0,Fo||(Fo=!0,jh())}function gi(e,t){if(!$o&&Ol){$o=!0;do for(var a=!1,n=Dl;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var r=0;else{var o=n.suspendedLanes,u=n.pingedLanes;r=(1<<31-at(42|e)+1)-1,r&=l&~(o&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,$u(n,r))}else r=re,r=Li(n,n===xe?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||Mn(n,r)||(a=!0,$u(n,r));n=n.next}while(a);$o=!1}}function wh(){Ju()}function Ju(){Ol=Fo=!1;var e=0;Ga!==0&&(Ch()&&(e=Ga),Ga=0);for(var t=zt(),a=null,n=Dl;n!==null;){var l=n.next,r=Iu(n,t);r===0?(n.next=null,a===null?Dl=l:a.next=l,l===null&&(zn=a)):(a=n,(e!==0||(r&3)!==0)&&(Ol=!0)),n=l}gi(e)}function Iu(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-at(r),u=1<<o,h=l[o];h===-1?((u&a)===0||(u&n)!==0)&&(l[o]=K0(u,t)):h<=t&&(e.expiredLanes|=u),r&=~u}if(t=xe,a=re,a=Li(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&cr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Mn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&cr(n),fr(a)){case 2:case 8:a=Gs;break;case 32:a=Bi;break;case 268435456:a=qs;break;default:a=Bi}return n=Fu.bind(null,e),a=sr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&cr(n),e.callbackPriority=2,e.callbackNode=null,2}function Fu(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ml()&&e.callbackNode!==a)return null;var n=re;return n=Li(e,e===xe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Du(e,n,t),Iu(e,zt()),e.callbackNode!=null&&e.callbackNode===a?Fu.bind(null,e):null)}function $u(e,t){if(Ml())return null;Du(e,t,!0)}function jh(){Mh(function(){(de&6)!==0?sr(Ls,wh):Ju()})}function Po(){return Ga===0&&(Ga=Xs()),Ga}function Pu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function ef(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Sh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var r=Pu((l[We]||null).action),o=n.submitter;o&&(t=(t=o[We]||null)?Pu(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var u=new Ji("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ga!==0){var h=o?ef(l,o):new FormData(l);vo(a,{pending:!0,data:h,method:l.method,action:r},null,h)}}else typeof r=="function"&&(u.preventDefault(),h=o?ef(l,o):new FormData(l),vo(a,{pending:!0,data:h,method:l.method,action:r},r,h))},currentTarget:l}]})}}for(var es=0;es<Br.length;es++){var ts=Br[es],zh=ts.toLowerCase(),kh=ts[0].toUpperCase()+ts.slice(1);bt(zh,"on"+kh)}bt(Dc,"onAnimationEnd"),bt(Oc,"onAnimationIteration"),bt(Hc,"onAnimationStart"),bt("dblclick","onDoubleClick"),bt("focusin","onFocus"),bt("focusout","onBlur"),bt(qm,"onTransitionRun"),bt(Xm,"onTransitionStart"),bt(Vm,"onTransitionCancel"),bt(Uc,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));function tf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var u=n[o],h=u.instance,j=u.currentTarget;if(u=u.listener,h!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=j;try{r(l)}catch(A){wl(A)}l.currentTarget=null,r=h}else for(o=0;o<n.length;o++){if(u=n[o],h=u.instance,j=u.currentTarget,u=u.listener,h!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=j;try{r(l)}catch(A){wl(A)}l.currentTarget=null,r=h}}}}function le(e,t){var a=t[mr];a===void 0&&(a=t[mr]=new Set);var n=e+"__bubble";a.has(n)||(af(t,e,2,!1),a.add(n))}function as(e,t,a){var n=0;t&&(n|=4),af(a,e,n,t)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[Hl]){e[Hl]=!0,Js.forEach(function(a){a!=="selectionchange"&&(Nh.has(a)||as(a,!1,e),as(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hl]||(t[Hl]=!0,as("selectionchange",!1,t))}}function af(e,t,a,n){switch(Tf(t)){case 2:var l=Ph;break;case 8:l=ep;break;default:l=xs}a=l.bind(null,t,a,e),l=void 0,!zr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function is(e,t,a,n,l){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=n.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=Va(u),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){n=r=o;continue e}u=u.parentNode}}n=n.return}cc(function(){var j=r,A=jr(a),M=[];e:{var z=Bc.get(e);if(z!==void 0){var N=Ji,I=e;switch(e){case"keypress":if(Ki(a)===0)break e;case"keydown":case"keyup":N=bm;break;case"focusin":I="focus",N=Er;break;case"focusout":I="blur",N=Er;break;case"beforeblur":case"afterblur":N=Er;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Sm;break;case Dc:case Oc:case Hc:N=um;break;case Uc:N=km;break;case"scroll":case"scrollend":N=rm;break;case"wheel":N=Tm;break;case"copy":case"cut":case"paste":N=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=hc;break;case"toggle":case"beforetoggle":N=Am}var K=(t&4)!==0,he=!K&&(e==="scroll"||e==="scrollend"),v=K?z!==null?z+"Capture":null:z;K=[];for(var x=j,w;x!==null;){var R=x;if(w=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||w===null||v===null||(R=Un(x,v),R!=null&&K.push(yi(x,R,w))),he)break;x=x.return}0<K.length&&(z=new N(z,I,null,a,A),M.push({event:z,listeners:K}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",z&&a!==wr&&(I=a.relatedTarget||a.fromElement)&&(Va(I)||I[Xa]))break e;if((N||z)&&(z=A.window===A?A:(z=A.ownerDocument)?z.defaultView||z.parentWindow:window,N?(I=a.relatedTarget||a.toElement,N=j,I=I?Va(I):null,I!==null&&(he=p(I),K=I.tag,I!==he||K!==5&&K!==27&&K!==6)&&(I=null)):(N=null,I=j),N!==I)){if(K=fc,R="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=hc,R="onPointerLeave",v="onPointerEnter",x="pointer"),he=N==null?z:Hn(N),w=I==null?z:Hn(I),z=new K(R,x+"leave",N,a,A),z.target=he,z.relatedTarget=w,R=null,Va(A)===j&&(K=new K(v,x+"enter",I,a,A),K.target=w,K.relatedTarget=he,R=K),he=R,N&&I)t:{for(K=N,v=I,x=0,w=K;w;w=kn(w))x++;for(w=0,R=v;R;R=kn(R))w++;for(;0<x-w;)K=kn(K),x--;for(;0<w-x;)v=kn(v),w--;for(;x--;){if(K===v||v!==null&&K===v.alternate)break t;K=kn(K),v=kn(v)}K=null}else K=null;N!==null&&nf(M,z,N,K,!1),I!==null&&he!==null&&nf(M,he,I,K,!0)}}e:{if(z=j?Hn(j):window,N=z.nodeName&&z.nodeName.toLowerCase(),N==="select"||N==="input"&&z.type==="file")var L=jc;else if(bc(z))if(Sc)L=Ym;else{L=Bm;var ne=Um}else N=z.nodeName,!N||N.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&br(j.elementType)&&(L=jc):L=_m;if(L&&(L=L(e,j))){wc(M,L,a,A);break e}ne&&ne(e,z,j),e==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&vr(z,"number",z.value)}switch(ne=j?Hn(j):window,e){case"focusin":(bc(ne)||ne.contentEditable==="true")&&(en=ne,Or=j,Vn=null);break;case"focusout":Vn=Or=en=null;break;case"mousedown":Hr=!0;break;case"contextmenu":case"mouseup":case"dragend":Hr=!1,Rc(M,a,A);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Rc(M,a,A)}var X;if(Cr)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Pa?yc(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(pc&&a.locale!=="ko"&&(Pa||W!=="onCompositionStart"?W==="onCompositionEnd"&&Pa&&(X=dc()):(ea=A,kr="value"in ea?ea.value:ea.textContent,Pa=!0)),ne=Ul(j,W),0<ne.length&&(W=new mc(W,e,null,a,A),M.push({event:W,listeners:ne}),X?W.data=X:(X=vc(a),X!==null&&(W.data=X)))),(X=Rm?Mm(e,a):Dm(e,a))&&(W=Ul(j,"onBeforeInput"),0<W.length&&(ne=new mc("onBeforeInput","beforeinput",null,a,A),M.push({event:ne,listeners:W}),ne.data=X)),Sh(M,e,j,a,A)}tf(M,t)})}function yi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ul(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Un(e,a),l!=null&&n.unshift(yi(e,l,r)),l=Un(e,t),l!=null&&n.push(yi(e,l,r))),e.tag===3)return n;e=e.return}return[]}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nf(e,t,a,n,l){for(var r=t._reactName,o=[];a!==null&&a!==n;){var u=a,h=u.alternate,j=u.stateNode;if(u=u.tag,h!==null&&h===n)break;u!==5&&u!==26&&u!==27||j===null||(h=j,l?(j=Un(a,r),j!=null&&o.unshift(yi(a,j,h))):l||(j=Un(a,r),j!=null&&o.push(yi(a,j,h)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var Th=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(Th,`
`).replace(Eh,"")}function rf(e,t){return t=lf(t),lf(e)===t}function Bl(){}function me(e,t,a,n,l,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ia(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ia(e,""+n);break;case"className":qi(e,"class",n);break;case"tabIndex":qi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":qi(e,a,n);break;case"style":oc(e,n,r);break;case"data":if(t!=="object"){qi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",l.name,l,null),me(e,t,"formEncType",l.formEncType,l,null),me(e,t,"formMethod",l.formMethod,l,null),me(e,t,"formTarget",l.formTarget,l,null)):(me(e,t,"encType",l.encType,l,null),me(e,t,"method",l.method,l,null),me(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Qi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Bl);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Qi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":le("beforetoggle",e),le("toggle",e),Gi(e,"popover",n);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Gi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=im.get(a)||a,Gi(e,a,n))}}function ls(e,t,a,n,l,r){switch(a){case"style":oc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ia(e,n):(typeof n=="number"||typeof n=="bigint")&&Ia(e,""+n);break;case"onScroll":n!=null&&le("scroll",e);break;case"onScrollEnd":n!=null&&le("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[We]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Gi(e,a,n)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var n=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,r,o,a,null)}}l&&me(e,t,"srcSet",a.srcSet,a,null),n&&me(e,t,"src",a.src,a,null);return;case"input":le("invalid",e);var u=r=o=l=null,h=null,j=null;for(n in a)if(a.hasOwnProperty(n)){var A=a[n];if(A!=null)switch(n){case"name":l=A;break;case"type":o=A;break;case"checked":h=A;break;case"defaultChecked":j=A;break;case"value":r=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:me(e,t,n,A,a,null)}}nc(e,r,u,h,j,o,l,!1),Xi(e);return;case"select":le("invalid",e),n=o=r=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":r=u;break;case"defaultValue":o=u;break;case"multiple":n=u;default:me(e,t,l,u,a,null)}t=r,a=o,e.multiple=!!n,t!=null?Ja(e,!!n,t,!1):a!=null&&Ja(e,!!n,a,!0);return;case"textarea":le("invalid",e),r=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":n=u;break;case"defaultValue":l=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:me(e,t,o,u,a,null)}lc(e,n,l,r),Xi(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,t,h,n,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(n=0;n<xi.length;n++)le(xi[n],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(n=a[j],n!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:me(e,t,j,n,a,null)}return;default:if(br(t)){for(A in a)a.hasOwnProperty(A)&&(n=a[A],n!==void 0&&ls(e,t,A,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&me(e,t,u,n,a,null))}function Ah(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,o=null,u=null,h=null,j=null,A=null;for(N in a){var M=a[N];if(a.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":h=M;default:n.hasOwnProperty(N)||me(e,t,N,null,n,M)}}for(var z in n){var N=n[z];if(M=a[z],n.hasOwnProperty(z)&&(N!=null||M!=null))switch(z){case"type":r=N;break;case"name":l=N;break;case"checked":j=N;break;case"defaultChecked":A=N;break;case"value":o=N;break;case"defaultValue":u=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,t));break;default:N!==M&&me(e,t,z,N,n,M)}}yr(e,o,u,h,j,A,r,l);return;case"select":N=o=u=z=null;for(r in a)if(h=a[r],a.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":N=h;default:n.hasOwnProperty(r)||me(e,t,r,null,n,h)}for(l in n)if(r=n[l],h=a[l],n.hasOwnProperty(l)&&(r!=null||h!=null))switch(l){case"value":z=r;break;case"defaultValue":u=r;break;case"multiple":o=r;default:r!==h&&me(e,t,l,r,n,h)}t=u,a=o,n=N,z!=null?Ja(e,!!a,z,!1):!!n!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":N=z=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:me(e,t,u,null,n,l)}for(o in n)if(l=n[o],r=a[o],n.hasOwnProperty(o)&&(l!=null||r!=null))switch(o){case"value":z=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&me(e,t,o,l,n,r)}ic(e,z,N);return;case"option":for(var I in a)if(z=a[I],a.hasOwnProperty(I)&&z!=null&&!n.hasOwnProperty(I))switch(I){case"selected":e.selected=!1;break;default:me(e,t,I,null,n,z)}for(h in n)if(z=n[h],N=a[h],n.hasOwnProperty(h)&&z!==N&&(z!=null||N!=null))switch(h){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:me(e,t,h,z,n,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)z=a[K],a.hasOwnProperty(K)&&z!=null&&!n.hasOwnProperty(K)&&me(e,t,K,null,n,z);for(j in n)if(z=n[j],N=a[j],n.hasOwnProperty(j)&&z!==N&&(z!=null||N!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:me(e,t,j,z,n,N)}return;default:if(br(t)){for(var he in a)z=a[he],a.hasOwnProperty(he)&&z!==void 0&&!n.hasOwnProperty(he)&&ls(e,t,he,void 0,n,z);for(A in n)z=n[A],N=a[A],!n.hasOwnProperty(A)||z===N||z===void 0&&N===void 0||ls(e,t,A,z,n,N);return}}for(var v in a)z=a[v],a.hasOwnProperty(v)&&z!=null&&!n.hasOwnProperty(v)&&me(e,t,v,null,n,z);for(M in n)z=n[M],N=a[M],!n.hasOwnProperty(M)||z===N||z==null&&N==null||me(e,t,M,z,n,N)}var rs=null,os=null;function _l(e){return e.nodeType===9?e:e.ownerDocument}function of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=null;function Ch(){var e=window.event;return e&&e.type==="popstate"?e===cs?!1:(cs=e,!0):(cs=null,!1)}var cf=typeof setTimeout=="function"?setTimeout:void 0,Rh=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(e){return df.resolve(null).then(e).catch(Dh)}:cf;function Dh(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function uf(e,t){var a=t,n=0,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var o=e.ownerDocument;if(a&1&&vi(o.documentElement),a&2&&vi(o.body),a&4)for(a=o.head,vi(a),o=a.firstChild;o;){var u=o.nextSibling,h=o.nodeName;o[On]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(l===0){e.removeChild(r),Ti(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Ti(t)}function ds(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ds(a),hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Oh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[On])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function Hh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jt(e.nextSibling),e===null))return null;return e}function us(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Uh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fs=null;function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function mf(e,t,a){switch(t=_l(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function vi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);hr(e)}var vt=new Map,hf=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=B.d;B.d={f:Bh,r:_h,D:Yh,C:Lh,L:Gh,m:qh,X:Vh,S:Xh,M:Qh};function Bh(){var e=Kt.f(),t=Cl();return e||t}function _h(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?Dd(t):Kt.r(e)}var Nn=typeof document>"u"?null:document;function pf(e,t,a){var n=Nn;if(n&&typeof t=="string"&&t){var l=ft(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),hf.has(l)||(hf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ge(t,"link",e),He(t),n.head.appendChild(t)))}}function Yh(e){Kt.D(e),pf("dns-prefetch",e,null)}function Lh(e,t){Kt.C(e,t),pf("preconnect",e,t)}function Gh(e,t,a){Kt.L(e,t,a);var n=Nn;if(n&&e&&t){var l='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ft(a.imageSizes)+'"]')):l+='[href="'+ft(e)+'"]';var r=l;switch(t){case"style":r=Tn(e);break;case"script":r=En(e)}vt.has(r)||(e=k({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(r,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(bi(r))||t==="script"&&n.querySelector(wi(r))||(t=n.createElement("link"),Ge(t,"link",e),He(t),n.head.appendChild(t)))}}function qh(e,t){Kt.m(e,t);var a=Nn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ft(n)+'"][href="'+ft(e)+'"]',r=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=En(e)}if(!vt.has(r)&&(e=k({rel:"modulepreload",href:e},t),vt.set(r,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wi(r)))return}n=a.createElement("link"),Ge(n,"link",e),He(n),a.head.appendChild(n)}}}function Xh(e,t,a){Kt.S(e,t,a);var n=Nn;if(n&&e){var l=Za(n).hoistableStyles,r=Tn(e);t=t||"default";var o=l.get(r);if(!o){var u={loading:0,preload:null};if(o=n.querySelector(bi(r)))u.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(r))&&ms(e,a);var h=o=n.createElement("link");He(h),Ge(h,"link",e),h._p=new Promise(function(j,A){h.onload=j,h.onerror=A}),h.addEventListener("load",function(){u.loading|=1}),h.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ll(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(r,o)}}}function Vh(e,t){Kt.X(e,t);var a=Nn;if(a&&e){var n=Za(a).hoistableScripts,l=En(e),r=n.get(l);r||(r=a.querySelector(wi(l)),r||(e=k({src:e,async:!0},t),(t=vt.get(l))&&hs(e,t),r=a.createElement("script"),He(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function Qh(e,t){Kt.M(e,t);var a=Nn;if(a&&e){var n=Za(a).hoistableScripts,l=En(e),r=n.get(l);r||(r=a.querySelector(wi(l)),r||(e=k({src:e,async:!0,type:"module"},t),(t=vt.get(l))&&hs(e,t),r=a.createElement("script"),He(r),Ge(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function gf(e,t,a,n){var l=(l=P.current)?Yl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Za(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var r=Za(l).hoistableStyles,o=r.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=l.querySelector(bi(e)))&&!r._p&&(o.instance=r,o.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),r||Zh(l,e,a,o.state))),t&&n===null)throw Error(c(528,""));return o}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=En(a),a=Za(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Tn(e){return'href="'+ft(e)+'"'}function bi(e){return'link[rel="stylesheet"]['+e+"]"}function xf(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Zh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ge(t,"link",a),He(t),e.head.appendChild(t))}function En(e){return'[src="'+ft(e)+'"]'}function wi(e){return"script[async]"+e}function yf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(n)return t.instance=n,He(n),n;var l=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),He(n),Ge(n,"style",l),Ll(n,a.precedence,e),t.instance=n;case"stylesheet":l=Tn(a.href);var r=e.querySelector(bi(l));if(r)return t.state.loading|=4,t.instance=r,He(r),r;n=xf(a),(l=vt.get(l))&&ms(n,l),r=(e.ownerDocument||e).createElement("link"),He(r);var o=r;return o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),Ge(r,"link",n),t.state.loading|=4,Ll(r,a.precedence,e),t.instance=r;case"script":return r=En(a.src),(l=e.querySelector(wi(r)))?(t.instance=l,He(l),l):(n=a,(l=vt.get(r))&&(n=k({},a),hs(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),He(l),Ge(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Ll(n,a.precedence,e));return t.instance}function Ll(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,r=l,o=0;o<n.length;o++){var u=n[o];if(u.dataset.precedence===t)r=u;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gl=null;function vf(e,t,a){if(Gl===null){var n=new Map,l=Gl=new Map;l.set(a,n)}else l=Gl,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[On]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var u=n.get(o);u?u.push(r):n.set(o,[r])}}return n}function bf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Kh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ji=null;function Wh(){}function Jh(e,t,a){if(ji===null)throw Error(c(475));var n=ji;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Tn(a.href),r=e.querySelector(bi(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=ql.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,He(r);return}r=e.ownerDocument||e,a=xf(a),(l=vt.get(l))&&ms(a,l),r=r.createElement("link"),He(r);var o=r;o._p=new Promise(function(u,h){o.onload=u,o.onerror=h}),Ge(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=ql.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Ih(){if(ji===null)throw Error(c(475));var e=ji;return e.stylesheets&&e.count===0&&ps(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ps(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ql(){if(this.count--,this.count===0){if(this.stylesheets)ps(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function ps(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,t.forEach(Fh,e),Xl=null,ql.call(e))}function Fh(e,t){if(!(t.state.loading&4)){var a=Xl.get(e);if(a)var n=a.get(null);else{a=new Map,Xl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var o=l[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,l),a.set(o,l),this.count++,n=ql.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Si={$$typeof:ee,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function $h(e,t,a,n,l,r,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.hiddenUpdates=dr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function jf(e,t,a,n,l,r,o,u,h,j,A,M){return e=new $h(e,t,a,o,u,h,j,M),t=1,r===!0&&(t|=24),r=it(3,null,null,t),e.current=r,r.stateNode=e,t=Jr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Pr(r),e}function Sf(e){return e?(e=ln,e):ln}function zf(e,t,a,n,l,r){l=Sf(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ia(e,n,t),a!==null&&(ct(a,e,t),Pn(a,e,t))}function kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function gs(e,t){kf(e,t),(e=e.alternate)&&kf(e,t)}function Nf(e){if(e.tag===13){var t=nn(e,67108864);t!==null&&ct(t,e,67108864),gs(e,67108864)}}var Vl=!0;function Ph(e,t,a,n){var l=C.T;C.T=null;var r=B.p;try{B.p=2,xs(e,t,a,n)}finally{B.p=r,C.T=l}}function ep(e,t,a,n){var l=C.T;C.T=null;var r=B.p;try{B.p=8,xs(e,t,a,n)}finally{B.p=r,C.T=l}}function xs(e,t,a,n){if(Vl){var l=ys(n);if(l===null)is(e,t,n,Ql,a),Ef(e,n);else if(ap(l,e,t,a,n))n.stopPropagation();else if(Ef(e,n),t&4&&-1<tp.indexOf(e)){for(;l!==null;){var r=Qa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=za(r.pendingLanes);if(o!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var h=1<<31-at(o);u.entanglements[1]|=h,o&=~h}At(r),(de&6)===0&&(El=zt()+500,gi(0))}}break;case 13:u=nn(r,2),u!==null&&ct(u,r,2),Cl(),gs(r,2)}if(r=ys(n),r===null&&is(e,t,n,Ql,a),r===l)break;l=r}l!==null&&n.stopPropagation()}else is(e,t,n,null,a)}}function ys(e){return e=jr(e),vs(e)}var Ql=null;function vs(e){if(Ql=null,e=Va(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ql=e,null}function Tf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L0()){case Ls:return 2;case Gs:return 8;case Bi:case G0:return 32;case qs:return 268435456;default:return 32}default:return 32}}var bs=!1,xa=null,ya=null,va=null,zi=new Map,ki=new Map,ba=[],tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function Ni(e,t,a,n,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&Nf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ap(e,t,a,n,l){switch(t){case"focusin":return xa=Ni(xa,e,t,a,n,l),!0;case"dragenter":return ya=Ni(ya,e,t,a,n,l),!0;case"mouseover":return va=Ni(va,e,t,a,n,l),!0;case"pointerover":var r=l.pointerId;return zi.set(r,Ni(zi.get(r)||null,e,t,a,n,l)),!0;case"gotpointercapture":return r=l.pointerId,ki.set(r,Ni(ki.get(r)||null,e,t,a,n,l)),!0}return!1}function Af(e){var t=Va(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,J0(e.priority,function(){if(a.tag===13){var n=st();n=ur(n);var l=nn(a,n);l!==null&&ct(l,a,n),gs(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ys(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);wr=n,a.target.dispatchEvent(n),wr=null}else return t=Qa(a),t!==null&&Nf(t),e.blockedOn=a,!1;t.shift()}return!0}function Cf(e,t,a){Zl(e)&&a.delete(t)}function np(){bs=!1,xa!==null&&Zl(xa)&&(xa=null),ya!==null&&Zl(ya)&&(ya=null),va!==null&&Zl(va)&&(va=null),zi.forEach(Cf),ki.forEach(Cf)}function Kl(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,np)))}var Wl=null;function Rf(e){Wl!==e&&(Wl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Wl===e&&(Wl=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(vs(n||a)===null)continue;break}var r=Qa(a);r!==null&&(e.splice(t,3),t-=3,vo(r,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Ti(e){function t(h){return Kl(h,e)}xa!==null&&Kl(xa,e),ya!==null&&Kl(ya,e),va!==null&&Kl(va,e),zi.forEach(t),ki.forEach(t);for(var a=0;a<ba.length;a++){var n=ba[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Af(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],r=a[n+1],o=l[We]||null;if(typeof r=="function")o||Rf(a);else if(o){var u=null;if(r&&r.hasAttribute("formAction")){if(l=r,o=r[We]||null)u=o.formAction;else if(vs(l)!==null)continue}else u=o.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),Rf(a)}}}function ws(e){this._internalRoot=e}Jl.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=st();zf(a,n,e,t,null,null)},Jl.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zf(e.current,2,null,e,null,null),Cl(),t[Xa]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ks();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ba.length&&t!==0&&t<ba[a].priority;a++);ba.splice(a,0,e),a===0&&Af(e)}};var Mf=f.version;if(Mf!=="19.1.0")throw Error(c(527,Mf,"19.1.0"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=S(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var ip={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Rn=Il.inject(ip),tt=Il}catch{}}return Ai.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,n="",l=Kd,r=Wd,o=Jd,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=jf(e,1,!1,null,null,a,n,l,r,o,u,null),e[Xa]=t.current,ns(e),new ws(t)},Ai.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var n=!1,l="",r=Kd,o=Wd,u=Jd,h=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),t=jf(e,1,!0,t,a??null,n,l,r,o,u,h,j),t.context=Sf(null),a=t.current,n=st(),n=ur(n),l=na(n),l.callback=null,ia(a,l,n),a=n,t.current.lanes=a,Dn(t,a),At(t),e[Xa]=t.current,ns(e),new Jl(t)},Ai.version="19.1.0",Ai}var qf;function hp(){if(qf)return zs.exports;qf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),zs.exports=mp(),zs.exports}var l0=hp();const pp=n0(l0);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xf="popstate";function gp(s={}){function f(c,m){let{pathname:p,search:b,hash:E}=c.location;return Ms("",{pathname:p,search:b,hash:E},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(c,m){return typeof m=="string"?m:Mi(m)}return yp(f,d,null,s)}function je(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function Ct(s,f){if(!s){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function xp(){return Math.random().toString(36).substring(2,10)}function Vf(s,f){return{usr:s.state,key:s.key,idx:f}}function Ms(s,f,d=null,c){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof f=="string"?An(f):f,state:d,key:f&&f.key||c||xp()}}function Mi({pathname:s="/",search:f="",hash:d=""}){return f&&f!=="?"&&(s+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function An(s){let f={};if(s){let d=s.indexOf("#");d>=0&&(f.hash=s.substring(d),s=s.substring(0,d));let c=s.indexOf("?");c>=0&&(f.search=s.substring(c),s=s.substring(0,c)),s&&(f.pathname=s)}return f}function yp(s,f,d,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,b=m.history,E="POP",S=null,y=k();y==null&&(y=0,b.replaceState({...b.state,idx:y},""));function k(){return(b.state||{idx:null}).idx}function O(){E="POP";let G=k(),Q=G==null?null:G-y;y=G,S&&S({action:E,location:F.location,delta:Q})}function H(G,Q){E="PUSH";let q=Ms(F.location,G,Q);y=k()+1;let ee=Vf(q,y),be=F.createHref(q);try{b.pushState(ee,"",be)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;m.location.assign(be)}p&&S&&S({action:E,location:F.location,delta:1})}function Y(G,Q){E="REPLACE";let q=Ms(F.location,G,Q);y=k();let ee=Vf(q,y),be=F.createHref(q);b.replaceState(ee,"",be),p&&S&&S({action:E,location:F.location,delta:0})}function V(G){return vp(G)}let F={get action(){return E},get location(){return s(m,b)},listen(G){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Xf,O),S=G,()=>{m.removeEventListener(Xf,O),S=null}},createHref(G){return f(m,G)},createURL:V,encodeLocation(G){let Q=V(G);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:H,replace:Y,go(G){return b.go(G)}};return F}function vp(s,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),je(d,"No window.location.(origin|href) available to create URL");let c=typeof s=="string"?s:Mi(s);return c=c.replace(/ $/,"%20"),!f&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function r0(s,f,d="/"){return bp(s,f,d,!1)}function bp(s,f,d,c){let m=typeof f=="string"?An(f):f,p=Jt(m.pathname||"/",d);if(p==null)return null;let b=o0(s);wp(b);let E=null;for(let S=0;E==null&&S<b.length;++S){let y=Mp(p);E=Cp(b[S],y,c)}return E}function o0(s,f=[],d=[],c="",m=!1){let p=(b,E,S=m,y)=>{let k={relativePath:y===void 0?b.path||"":y,caseSensitive:b.caseSensitive===!0,childrenIndex:E,route:b};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(c)&&S)return;je(k.relativePath.startsWith(c),`Absolute route path "${k.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(c.length)}let O=Wt([c,k.relativePath]),H=d.concat(k);b.children&&b.children.length>0&&(je(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),o0(b.children,f,H,O,S)),!(b.path==null&&!b.index)&&f.push({path:O,score:Ep(O,b.index),routesMeta:H})};return s.forEach((b,E)=>{if(b.path===""||!b.path?.includes("?"))p(b,E);else for(let S of s0(b.path))p(b,E,!0,S)}),f}function s0(s){let f=s.split("/");if(f.length===0)return[];let[d,...c]=f,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let b=s0(c.join("/")),E=[];return E.push(...b.map(S=>S===""?p:[p,S].join("/"))),m&&E.push(...b),E.map(S=>s.startsWith("/")&&S===""?"/":S)}function wp(s){s.sort((f,d)=>f.score!==d.score?d.score-f.score:Ap(f.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var jp=/^:[\w-]+$/,Sp=3,zp=2,kp=1,Np=10,Tp=-2,Qf=s=>s==="*";function Ep(s,f){let d=s.split("/"),c=d.length;return d.some(Qf)&&(c+=Tp),f&&(c+=zp),d.filter(m=>!Qf(m)).reduce((m,p)=>m+(jp.test(p)?Sp:p===""?kp:Np),c)}function Ap(s,f){return s.length===f.length&&s.slice(0,-1).every((c,m)=>c===f[m])?s[s.length-1]-f[f.length-1]:0}function Cp(s,f,d=!1){let{routesMeta:c}=s,m={},p="/",b=[];for(let E=0;E<c.length;++E){let S=c[E],y=E===c.length-1,k=p==="/"?f:f.slice(p.length)||"/",O=nr({path:S.relativePath,caseSensitive:S.caseSensitive,end:y},k),H=S.route;if(!O&&y&&d&&!c[c.length-1].route.index&&(O=nr({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},k)),!O)return null;Object.assign(m,O.params),b.push({params:m,pathname:Wt([p,O.pathname]),pathnameBase:Up(Wt([p,O.pathnameBase])),route:H}),O.pathnameBase!=="/"&&(p=Wt([p,O.pathnameBase]))}return b}function nr(s,f){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,c]=Rp(s.path,s.caseSensitive,s.end),m=f.match(d);if(!m)return null;let p=m[0],b=p.replace(/(.)\/+$/,"$1"),E=m.slice(1);return{params:c.reduce((y,{paramName:k,isOptional:O},H)=>{if(k==="*"){let V=E[H]||"";b=p.slice(0,p.length-V.length).replace(/(.)\/+$/,"$1")}const Y=E[H];return O&&!Y?y[k]=void 0:y[k]=(Y||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:b,pattern:s}}function Rp(s,f=!1,d=!0){Ct(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let c=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,E,S)=>(c.push({paramName:E,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(c.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),c]}function Mp(s){try{return s.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ct(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),s}}function Jt(s,f){if(f==="/")return s;if(!s.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,c=s.charAt(d);return c&&c!=="/"?null:s.slice(d)||"/"}function Dp(s,f="/"){let{pathname:d,search:c="",hash:m=""}=typeof s=="string"?An(s):s;return{pathname:d?d.startsWith("/")?d:Op(d,f):f,search:Bp(c),hash:_p(m)}}function Op(s,f){let d=f.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Es(s,f,d,c){return`Cannot include a '${s}' character in a manually specified \`to.${f}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hp(s){return s.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function c0(s){let f=Hp(s);return f.map((d,c)=>c===f.length-1?d.pathname:d.pathnameBase)}function d0(s,f,d,c=!1){let m;typeof s=="string"?m=An(s):(m={...s},je(!m.pathname||!m.pathname.includes("?"),Es("?","pathname","search",m)),je(!m.pathname||!m.pathname.includes("#"),Es("#","pathname","hash",m)),je(!m.search||!m.search.includes("#"),Es("#","search","hash",m)));let p=s===""||m.pathname==="",b=p?"/":m.pathname,E;if(b==null)E=d;else{let O=f.length-1;if(!c&&b.startsWith("..")){let H=b.split("/");for(;H[0]==="..";)H.shift(),O-=1;m.pathname=H.join("/")}E=O>=0?f[O]:"/"}let S=Dp(m,E),y=b&&b!=="/"&&b.endsWith("/"),k=(p||b===".")&&d.endsWith("/");return!S.pathname.endsWith("/")&&(y||k)&&(S.pathname+="/"),S}var Wt=s=>s.join("/").replace(/\/\/+/g,"/"),Up=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Bp=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_p=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Yp(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var Lp=["GET",...u0];new Set(Lp);var Cn=T.createContext(null);Cn.displayName="DataRouter";var ir=T.createContext(null);ir.displayName="DataRouterState";T.createContext(!1);var f0=T.createContext({isTransitioning:!1});f0.displayName="ViewTransition";var Gp=T.createContext(new Map);Gp.displayName="Fetchers";var qp=T.createContext(null);qp.displayName="Await";var Rt=T.createContext(null);Rt.displayName="Navigation";var Di=T.createContext(null);Di.displayName="Location";var It=T.createContext({outlet:null,matches:[],isDataRoute:!1});It.displayName="Route";var Hs=T.createContext(null);Hs.displayName="RouteError";function Xp(s,{relative:f}={}){je(Oi(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=T.useContext(Rt),{hash:m,pathname:p,search:b}=Hi(s,{relative:f}),E=p;return d!=="/"&&(E=p==="/"?d:Wt([d,p])),c.createHref({pathname:E,search:b,hash:m})}function Oi(){return T.useContext(Di)!=null}function qa(){return je(Oi(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Di).location}var m0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function h0(s){T.useContext(Rt).static||T.useLayoutEffect(s)}function Vp(){let{isDataRoute:s}=T.useContext(It);return s?n1():Qp()}function Qp(){je(Oi(),"useNavigate() may be used only in the context of a <Router> component.");let s=T.useContext(Cn),{basename:f,navigator:d}=T.useContext(Rt),{matches:c}=T.useContext(It),{pathname:m}=qa(),p=JSON.stringify(c0(c)),b=T.useRef(!1);return h0(()=>{b.current=!0}),T.useCallback((S,y={})=>{if(Ct(b.current,m0),!b.current)return;if(typeof S=="number"){d.go(S);return}let k=d0(S,JSON.parse(p),m,y.relative==="path");s==null&&f!=="/"&&(k.pathname=k.pathname==="/"?f:Wt([f,k.pathname])),(y.replace?d.replace:d.push)(k,y.state,y)},[f,d,p,m,s])}T.createContext(null);function Hi(s,{relative:f}={}){let{matches:d}=T.useContext(It),{pathname:c}=qa(),m=JSON.stringify(c0(d));return T.useMemo(()=>d0(s,JSON.parse(m),c,f==="path"),[s,m,c,f])}function Zp(s,f){return p0(s,f)}function p0(s,f,d,c,m){je(Oi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=T.useContext(Rt),{matches:b}=T.useContext(It),E=b[b.length-1],S=E?E.params:{},y=E?E.pathname:"/",k=E?E.pathnameBase:"/",O=E&&E.route;{let q=O&&O.path||"";g0(y,!O||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let H=qa(),Y;if(f){let q=typeof f=="string"?An(f):f;je(k==="/"||q.pathname?.startsWith(k),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${q.pathname}" was given in the \`location\` prop.`),Y=q}else Y=H;let V=Y.pathname||"/",F=V;if(k!=="/"){let q=k.replace(/^\//,"").split("/");F="/"+V.replace(/^\//,"").split("/").slice(q.length).join("/")}let G=r0(s,{pathname:F});Ct(O||G!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),Ct(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Fp(G&&G.map(q=>Object.assign({},q,{params:Object.assign({},S,q.params),pathname:Wt([k,p.encodeLocation?p.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?k:Wt([k,p.encodeLocation?p.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),b,d,c,m);return f&&Q?T.createElement(Di.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},Q):Q}function Kp(){let s=a1(),f=Yp(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",s),b=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:p},"ErrorBoundary")," or"," ",T.createElement("code",{style:p},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},f),d?T.createElement("pre",{style:m},d):null,b)}var Wp=T.createElement(Kp,null),Jp=class extends T.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,f){return f.location!==s.location||f.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:f.error,location:f.location,revalidation:s.revalidation||f.revalidation}}componentDidCatch(s,f){this.props.unstable_onError?this.props.unstable_onError(s,f):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?T.createElement(It.Provider,{value:this.props.routeContext},T.createElement(Hs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ip({routeContext:s,match:f,children:d}){let c=T.useContext(Cn);return c&&c.static&&c.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=f.route.id),T.createElement(It.Provider,{value:s},d)}function Fp(s,f=[],d=null,c=null,m=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let p=s,b=d?.errors;if(b!=null){let y=p.findIndex(k=>k.route.id&&b?.[k.route.id]!==void 0);je(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),p=p.slice(0,Math.min(p.length,y+1))}let E=!1,S=-1;if(d)for(let y=0;y<p.length;y++){let k=p[y];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(S=y),k.route.id){let{loaderData:O,errors:H}=d,Y=k.route.loader&&!O.hasOwnProperty(k.route.id)&&(!H||H[k.route.id]===void 0);if(k.route.lazy||Y){E=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}return p.reduceRight((y,k,O)=>{let H,Y=!1,V=null,F=null;d&&(H=b&&k.route.id?b[k.route.id]:void 0,V=k.route.errorElement||Wp,E&&(S<0&&O===0?(g0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,F=null):S===O&&(Y=!0,F=k.route.hydrateFallbackElement||null)));let G=f.concat(p.slice(0,O+1)),Q=()=>{let q;return H?q=V:Y?q=F:k.route.Component?q=T.createElement(k.route.Component,null):k.route.element?q=k.route.element:q=y,T.createElement(Ip,{match:k,routeContext:{outlet:y,matches:G,isDataRoute:d!=null},children:q})};return d&&(k.route.ErrorBoundary||k.route.errorElement||O===0)?T.createElement(Jp,{location:d.location,revalidation:d.revalidation,component:V,error:H,children:Q(),routeContext:{outlet:null,matches:G,isDataRoute:!0},unstable_onError:c}):Q()},null)}function Us(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $p(s){let f=T.useContext(Cn);return je(f,Us(s)),f}function Pp(s){let f=T.useContext(ir);return je(f,Us(s)),f}function e1(s){let f=T.useContext(It);return je(f,Us(s)),f}function Bs(s){let f=e1(s),d=f.matches[f.matches.length-1];return je(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function t1(){return Bs("useRouteId")}function a1(){let s=T.useContext(Hs),f=Pp("useRouteError"),d=Bs("useRouteError");return s!==void 0?s:f.errors?.[d]}function n1(){let{router:s}=$p("useNavigate"),f=Bs("useNavigate"),d=T.useRef(!1);return h0(()=>{d.current=!0}),T.useCallback(async(m,p={})=>{Ct(d.current,m0),d.current&&(typeof m=="number"?s.navigate(m):await s.navigate(m,{fromRouteId:f,...p}))},[s,f])}var Zf={};function g0(s,f,d){!f&&!Zf[s]&&(Zf[s]=!0,Ct(!1,d))}T.memo(i1);function i1({routes:s,future:f,state:d,unstable_onError:c}){return p0(s,void 0,d,c,f)}function St(s){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l1({basename:s="/",children:f=null,location:d,navigationType:c="POP",navigator:m,static:p=!1}){je(!Oi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=s.replace(/^\/*/,"/"),E=T.useMemo(()=>({basename:b,navigator:m,static:p,future:{}}),[b,m,p]);typeof d=="string"&&(d=An(d));let{pathname:S="/",search:y="",hash:k="",state:O=null,key:H="default"}=d,Y=T.useMemo(()=>{let V=Jt(S,b);return V==null?null:{location:{pathname:V,search:y,hash:k,state:O,key:H},navigationType:c}},[b,S,y,k,O,H,c]);return Ct(Y!=null,`<Router basename="${b}"> is not able to match the URL "${S}${y}${k}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:T.createElement(Rt.Provider,{value:E},T.createElement(Di.Provider,{children:f,value:Y}))}function r1({children:s,location:f}){return Zp(Ds(s),f)}function Ds(s,f=[]){let d=[];return T.Children.forEach(s,(c,m)=>{if(!T.isValidElement(c))return;let p=[...f,m];if(c.type===T.Fragment){d.push.apply(d,Ds(c.props.children,p));return}je(c.type===St,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=Ds(c.props.children,p)),d.push(b)}),d}var tr="get",ar="application/x-www-form-urlencoded";function lr(s){return s!=null&&typeof s.tagName=="string"}function o1(s){return lr(s)&&s.tagName.toLowerCase()==="button"}function s1(s){return lr(s)&&s.tagName.toLowerCase()==="form"}function c1(s){return lr(s)&&s.tagName.toLowerCase()==="input"}function d1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function u1(s,f){return s.button===0&&(!f||f==="_self")&&!d1(s)}var Fl=null;function f1(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var m1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function As(s){return s!=null&&!m1.has(s)?(Ct(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ar}"`),null):s}function h1(s,f){let d,c,m,p,b;if(s1(s)){let E=s.getAttribute("action");c=E?Jt(E,f):null,d=s.getAttribute("method")||tr,m=As(s.getAttribute("enctype"))||ar,p=new FormData(s)}else if(o1(s)||c1(s)&&(s.type==="submit"||s.type==="image")){let E=s.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=s.getAttribute("formaction")||E.getAttribute("action");if(c=S?Jt(S,f):null,d=s.getAttribute("formmethod")||E.getAttribute("method")||tr,m=As(s.getAttribute("formenctype"))||As(E.getAttribute("enctype"))||ar,p=new FormData(E,s),!f1()){let{name:y,type:k,value:O}=s;if(k==="image"){let H=y?`${y}.`:"";p.append(`${H}x`,"0"),p.append(`${H}y`,"0")}else y&&p.append(y,O)}}else{if(lr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=tr,c=null,m=ar,b=s}return p&&m==="text/plain"&&(b=p,p=void 0),{action:c,method:d.toLowerCase(),encType:m,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _s(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function p1(s,f,d){let c=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c.pathname==="/"?c.pathname=`_root.${d}`:f&&Jt(c.pathname,f)==="/"?c.pathname=`${f.replace(/\/$/,"")}/_root.${d}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${d}`,c}async function g1(s,f){if(s.id in f)return f[s.id];try{let d=await import(s.module);return f[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function x1(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function y1(s,f,d){let c=await Promise.all(s.map(async m=>{let p=f.routes[m.route.id];if(p){let b=await g1(p,d);return b.links?b.links():[]}return[]}));return j1(c.flat(1).filter(x1).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Kf(s,f,d,c,m,p){let b=(S,y)=>d[y]?S.route.id!==d[y].route.id:!0,E=(S,y)=>d[y].pathname!==S.pathname||d[y].route.path?.endsWith("*")&&d[y].params["*"]!==S.params["*"];return p==="assets"?f.filter((S,y)=>b(S,y)||E(S,y)):p==="data"?f.filter((S,y)=>{let k=c.routes[S.route.id];if(!k||!k.hasLoader)return!1;if(b(S,y)||E(S,y))return!0;if(S.route.shouldRevalidate){let O=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function v1(s,f,{includeHydrateFallback:d}={}){return b1(s.map(c=>{let m=f.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function b1(s){return[...new Set(s)]}function w1(s){let f={},d=Object.keys(s).sort();for(let c of d)f[c]=s[c];return f}function j1(s,f){let d=new Set;return new Set(f),s.reduce((c,m)=>{let p=JSON.stringify(w1(m));return d.has(p)||(d.add(p),c.push({key:p,link:m})),c},[])}function x0(){let s=T.useContext(Cn);return _s(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function S1(){let s=T.useContext(ir);return _s(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ys=T.createContext(void 0);Ys.displayName="FrameworkContext";function y0(){let s=T.useContext(Ys);return _s(s,"You must render this element inside a <HydratedRouter> element"),s}function z1(s,f){let d=T.useContext(Ys),[c,m]=T.useState(!1),[p,b]=T.useState(!1),{onFocus:E,onBlur:S,onMouseEnter:y,onMouseLeave:k,onTouchStart:O}=f,H=T.useRef(null);T.useEffect(()=>{if(s==="render"&&b(!0),s==="viewport"){let F=Q=>{Q.forEach(q=>{b(q.isIntersecting)})},G=new IntersectionObserver(F,{threshold:.5});return H.current&&G.observe(H.current),()=>{G.disconnect()}}},[s]),T.useEffect(()=>{if(c){let F=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(F)}}},[c]);let Y=()=>{m(!0)},V=()=>{m(!1),b(!1)};return d?s!=="intent"?[p,H,{}]:[p,H,{onFocus:Ci(E,Y),onBlur:Ci(S,V),onMouseEnter:Ci(y,Y),onMouseLeave:Ci(k,V),onTouchStart:Ci(O,Y)}]:[!1,H,{}]}function Ci(s,f){return d=>{s&&s(d),d.defaultPrevented||f(d)}}function k1({page:s,...f}){let{router:d}=x0(),c=T.useMemo(()=>r0(d.routes,s,d.basename),[d.routes,s,d.basename]);return c?T.createElement(T1,{page:s,matches:c,...f}):null}function N1(s){let{manifest:f,routeModules:d}=y0(),[c,m]=T.useState([]);return T.useEffect(()=>{let p=!1;return y1(s,f,d).then(b=>{p||m(b)}),()=>{p=!0}},[s,f,d]),c}function T1({page:s,matches:f,...d}){let c=qa(),{manifest:m,routeModules:p}=y0(),{basename:b}=x0(),{loaderData:E,matches:S}=S1(),y=T.useMemo(()=>Kf(s,f,S,m,c,"data"),[s,f,S,m,c]),k=T.useMemo(()=>Kf(s,f,S,m,c,"assets"),[s,f,S,m,c]),O=T.useMemo(()=>{if(s===c.pathname+c.search+c.hash)return[];let V=new Set,F=!1;if(f.forEach(Q=>{let q=m.routes[Q.route.id];!q||!q.hasLoader||(!y.some(ee=>ee.route.id===Q.route.id)&&Q.route.id in E&&p[Q.route.id]?.shouldRevalidate||q.hasClientLoader?F=!0:V.add(Q.route.id))}),V.size===0)return[];let G=p1(s,b,"data");return F&&V.size>0&&G.searchParams.set("_routes",f.filter(Q=>V.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[G.pathname+G.search]},[b,E,c,m,y,f,s,p]),H=T.useMemo(()=>v1(k,m),[k,m]),Y=N1(k);return T.createElement(T.Fragment,null,O.map(V=>T.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...d})),H.map(V=>T.createElement("link",{key:V,rel:"modulepreload",href:V,...d})),Y.map(({key:V,link:F})=>T.createElement("link",{key:V,nonce:d.nonce,...F})))}function E1(...s){return f=>{s.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v0&&(window.__reactRouterVersion="7.9.1")}catch{}function A1({basename:s,children:f,window:d}){let c=T.useRef();c.current==null&&(c.current=gp({window:d,v5Compat:!0}));let m=c.current,[p,b]=T.useState({action:m.action,location:m.location}),E=T.useCallback(S=>{T.startTransition(()=>b(S))},[b]);return T.useLayoutEffect(()=>m.listen(E),[m,E]),T.createElement(l1,{basename:s,children:f,location:p.location,navigationType:p.action,navigator:m})}var b0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=T.forwardRef(function({onClick:f,discover:d="render",prefetch:c="none",relative:m,reloadDocument:p,replace:b,state:E,target:S,to:y,preventScrollReset:k,viewTransition:O,...H},Y){let{basename:V}=T.useContext(Rt),F=typeof y=="string"&&b0.test(y),G,Q=!1;if(typeof y=="string"&&F&&(G=y,v0))try{let Se=new URL(window.location.href),Pe=y.startsWith("//")?new URL(Se.protocol+y):new URL(y),dt=Jt(Pe.pathname,V);Pe.origin===Se.origin&&dt!=null?y=dt+Pe.search+Pe.hash:Q=!0}catch{Ct(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Xp(y,{relative:m}),[ee,be,$]=z1(c,H),De=D1(y,{replace:b,state:E,target:S,preventScrollReset:k,relative:m,viewTransition:O});function Ce(Se){f&&f(Se),Se.defaultPrevented||De(Se)}let Oe=T.createElement("a",{...H,...$,href:G||q,onClick:Q||p?f:Ce,ref:E1(Y,be),target:S,"data-discover":!F&&d==="render"?"true":void 0});return ee&&!F?T.createElement(T.Fragment,null,Oe,T.createElement(k1,{page:q})):Oe});w0.displayName="Link";var C1=T.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:c="",end:m=!1,style:p,to:b,viewTransition:E,children:S,...y},k){let O=Hi(b,{relative:y.relative}),H=qa(),Y=T.useContext(ir),{navigator:V,basename:F}=T.useContext(Rt),G=Y!=null&&_1(O)&&E===!0,Q=V.encodeLocation?V.encodeLocation(O).pathname:O.pathname,q=H.pathname,ee=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;d||(q=q.toLowerCase(),ee=ee?ee.toLowerCase():null,Q=Q.toLowerCase()),ee&&F&&(ee=Jt(ee,F)||ee);const be=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let $=q===Q||!m&&q.startsWith(Q)&&q.charAt(be)==="/",De=ee!=null&&(ee===Q||!m&&ee.startsWith(Q)&&ee.charAt(Q.length)==="/"),Ce={isActive:$,isPending:De,isTransitioning:G},Oe=$?f:void 0,Se;typeof c=="function"?Se=c(Ce):Se=[c,$?"active":null,De?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Pe=typeof p=="function"?p(Ce):p;return T.createElement(w0,{...y,"aria-current":Oe,className:Se,ref:k,style:Pe,to:b,viewTransition:E},typeof S=="function"?S(Ce):S)});C1.displayName="NavLink";var R1=T.forwardRef(({discover:s="render",fetcherKey:f,navigate:d,reloadDocument:c,replace:m,state:p,method:b=tr,action:E,onSubmit:S,relative:y,preventScrollReset:k,viewTransition:O,...H},Y)=>{let V=U1(),F=B1(E,{relative:y}),G=b.toLowerCase()==="get"?"get":"post",Q=typeof E=="string"&&b0.test(E),q=ee=>{if(S&&S(ee),ee.defaultPrevented)return;ee.preventDefault();let be=ee.nativeEvent.submitter,$=be?.getAttribute("formmethod")||b;V(be||ee.currentTarget,{fetcherKey:f,method:$,navigate:d,replace:m,state:p,relative:y,preventScrollReset:k,viewTransition:O})};return T.createElement("form",{ref:Y,method:G,action:F,onSubmit:c?S:q,...H,"data-discover":!Q&&s==="render"?"true":void 0})});R1.displayName="Form";function M1(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j0(s){let f=T.useContext(Cn);return je(f,M1(s)),f}function D1(s,{target:f,replace:d,state:c,preventScrollReset:m,relative:p,viewTransition:b}={}){let E=Vp(),S=qa(),y=Hi(s,{relative:p});return T.useCallback(k=>{if(u1(k,f)){k.preventDefault();let O=d!==void 0?d:Mi(S)===Mi(y);E(s,{replace:O,state:c,preventScrollReset:m,relative:p,viewTransition:b})}},[S,E,y,d,c,f,s,m,p,b])}var O1=0,H1=()=>`__${String(++O1)}__`;function U1(){let{router:s}=j0("useSubmit"),{basename:f}=T.useContext(Rt),d=t1();return T.useCallback(async(c,m={})=>{let{action:p,method:b,encType:E,formData:S,body:y}=h1(c,f);if(m.navigate===!1){let k=m.fetcherKey||H1();await s.fetch(k,d,m.action||p,{preventScrollReset:m.preventScrollReset,formData:S,body:y,formMethod:m.method||b,formEncType:m.encType||E,flushSync:m.flushSync})}else await s.navigate(m.action||p,{preventScrollReset:m.preventScrollReset,formData:S,body:y,formMethod:m.method||b,formEncType:m.encType||E,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,f,d])}function B1(s,{relative:f}={}){let{basename:d}=T.useContext(Rt),c=T.useContext(It);je(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Hi(s||".",{relative:f})},b=qa();if(s==null){p.search=b.search;let E=new URLSearchParams(p.search),S=E.getAll("index");if(S.some(k=>k==="")){E.delete("index"),S.filter(O=>O).forEach(O=>E.append("index",O));let k=E.toString();p.search=k?`?${k}`:""}}return(!s||s===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Wt([d,p.pathname])),Mi(p)}function _1(s,{relative:f}={}){let d=T.useContext(f0);je(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=j0("useViewTransitionState"),m=Hi(s,{relative:f});if(!d.isTransitioning)return!1;let p=Jt(d.currentLocation.pathname,c)||d.currentLocation.pathname,b=Jt(d.nextLocation.pathname,c)||d.nextLocation.pathname;return nr(m.pathname,b)!=null||nr(m.pathname,p)!=null}const Mt="/assets/profile-Dvg5Mrpq.png",Y1="/assets/heroImage-BsTmEWv5.png",L1=[{description:[i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"August 2020 rolls around, and there I am stepping foot in the beautiful UMass Amherst campus! Interested in tech and psychology I decided to double major in Computer Science and Psychology."}),i.jsx("span",{style:{display:"block",marginBottom:"1em"}}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Why choose one when you can have both, right?"})],position:"right",watermark:"🎓",isFirst:!0,year:"Aug 2020",location:"University of Massachusetts Amherst"},{description:[i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Two years into my bachelor's journey, I got my first job yayyy!!!"}),i.jsx("span",{style:{display:"block",marginBottom:"1em"}}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Being an RA taught me how to create community. From late-night crisis management to organizing fun floor events, this experience taught me how to understand people's needs and create environments where everyone could thrive."})],position:"left",watermark:"💼",year:"Aug 2022",jobTitle:"Resident Assistant"},{description:[i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I had taken up a volunteer position a few months back and realized that I love to help others learn. So  I applied to be a Teaching Assistant. A semester later I got promoted to be Head TA."}),i.jsx("span",{style:{display:"block",marginBottom:"1em"}}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"As Head TA, I found myself leading a team of TAs and supporting 80+ students in Human-Computer Interaction."})],position:"right",watermark:"💼",year:"Feb 2024",jobTitle:"Head Teaching Assistant"},{description:[i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Bachelor's degree in hand, I wasn't ready to stop learning. Enter Cornell University and my MPS in Information Science with a UX focus!"}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I was already in love with multi-disciplinary problem solving and I was trying to find an intersection between CS and psychology."}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"So Cornell's program was a dream come true! I loved learning about user research methods, design, prototyping and strategy. Plus, the campus is absolutely stunning!"})],position:"left",watermark:"🎓",year:"Aug 2024",location:"Cornell University, Ithaca"},{description:[i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"During my time at Cornell, I worked as a Graduate Teaching Specialist, supporting 200+ students across design and programming coursework."}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I graded assignments and mentored students as they explored design practices while programming."})],position:"right",watermark:"💼",year:"Aug 2024",jobTitle:"Graduate Teaching Specialist"},{description:[i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"I lived my capstone dream, working directly with Google Cloud."}),i.jsx("span",{style:{display:"block",marginBottom:"1em"},children:"Our team was mentored by some of the nicest folks at Google Cloud while we got to learn so much about enterprise design and research."})],position:"left",watermark:"💼",year:"Jan 2025",jobTitle:"UX Designer + Researcher"},{description:"I worked as a Graduate RA, diving into co-design research with remote mental health support systems.",position:"right",watermark:"💼",year:"May 2025",jobTitle:"Graduate Research Assistant"}],G1=["Interaction Design","Interdisciplinary Thinking","Prototyping","Mixed Methods Research","Co-design","Qualitative Analysis","Programming","Community Building","Conflict Resolution","Leadership","Mentorship","Teamwork"];function q1(){const s=T.useRef([]),f=T.useRef([]);return T.useEffect(()=>{const d=[];return s.current.forEach((c,m)=>{if(c){const p=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${m*.2}s`,E.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-50px"});p.observe(c),d.push(p)}}),f.current.forEach((c,m)=>{if(c){const p=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${m*.1}s`,E.target.classList.add("skill-animate-in"))})},{threshold:.1,rootMargin:"-30px"});p.observe(c),d.push(p)}}),()=>{d.forEach(c=>c.disconnect())}},[]),i.jsxs("div",{className:"about-page",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("section",{className:"about-section",children:i.jsxs("div",{className:"content-container",children:[i.jsxs("div",{className:"intro-header",children:[i.jsx("div",{className:"intro-year-location",children:"🗓 May 2020📍🗺️ Chennai, India"}),i.jsxs("p",{className:"intro-description",children:["After wrapping up high school with a suitcase full of dreams in hand, I made one of the biggest and best decisions of my life. It was to pursue my education in the United States.",i.jsx("br",{}),"Little did I know, this was just the opening scene of an incredible adventure."]})]}),i.jsxs("div",{className:"timeline-container",children:[i.jsx("div",{className:"timeline-line"}),L1.map((d,c)=>i.jsxs("div",{ref:m=>s.current[c]=m,className:`timeline-item ${d.position} ${c===0?"first-item":""}`,"data-watermark":d.watermark,children:[i.jsx("div",{className:"timeline-dot"}),i.jsxs("div",{className:`timeline-content ${d.isFirst?"first-card":""}`,children:[d.isFirst?i.jsxs("div",{className:"timeline-header",children:[i.jsxs("div",{className:"timeline-year",children:["🗓 ",d.year]}),i.jsxs("div",{className:"timeline-location",children:["📍🗺️ ",d.location]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"timeline-year-regular",children:["🗓 ",d.year]}),d.location&&i.jsx("div",{className:"timeline-location job-title-right",style:{width:"100%",justifyContent:"flex-end",display:"flex",textAlign:"right"},children:i.jsxs("span",{style:{textAlign:"right",width:"100%"},children:["📍🗺️ ",d.location]})}),d.jobTitle&&i.jsx("div",{className:"timeline-location",children:["Resident Assistant","UX Designer + Researcher"].includes(d.jobTitle)?i.jsx("div",{className:"timeline-location job-title-right",style:{width:"100%",justifyContent:"flex-end",display:"flex",textAlign:"right"},children:i.jsxs("span",{style:{textAlign:"right",width:"100%"},children:["💼 ",d.jobTitle]})}):i.jsx("div",{className:"timeline-location",style:{width:"100%",justifyContent:"flex-start",display:"flex",textAlign:"left"},children:i.jsxs("span",{style:{textAlign:"left",width:"100%"},children:["💼 ",d.jobTitle]})})}),d.quote&&i.jsxs("div",{className:"timeline-quote",children:['"',d.quote,'"']})]}),i.jsx("h3",{className:`timeline-title ${d.isFirst?"small-title":""}`,children:d.title}),i.jsx("p",{className:"timeline-description",children:d.description})]})]},c))]}),i.jsxs("div",{className:"skills-content",children:[i.jsx("div",{className:"skills-header",children:i.jsx("h2",{children:"This incredible journey so far has taught me so much. Its safe to say it has gotten me ready for the industry and the real world 💪"})}),i.jsx("div",{className:"skills-grid",children:G1.map((d,c)=>{const p=Math.floor(c/4);let b;return p===0?b="#b3dee2":p===1?b="#b3b7ee":b="#e27396",i.jsx("div",{ref:E=>f.current[c]=E,className:"skill-item",style:{background:b},children:i.jsx("span",{children:d})},c)})}),i.jsx("p",{className:"skills-description",children:"Talk to me about cooking, hiking, music, and more!"}),i.jsx("p",{className:"reflection-cta",children:"Want to be part of the next chapter? Let's connect!"})]})]})}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}function X1(){return i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("section",{className:"construction-section",children:i.jsxs("div",{children:[i.jsx("div",{className:"construction-emoji",children:"🚧"}),i.jsx("p",{className:"construction-subtitle serif-font",children:"The playground is coming soon!"}),i.jsx("p",{className:"construction-description",children:"I'm currently working on showcasing my fun personal projects and all the creative chaos I love to dabble with."})]})}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}const Wf="/assets/trophy-B47DuTBs.png",S0="/assets/capstone-mockup-DhJqv6Er.png",z0="/assets/ithaca-soap-mockup-DK_124JI.png",k0="/assets/iName-CvX8Q2r4.png",N0="/assets/routes-aVjpSWBA.png",T0="/assets/ecoCart-DN4gWc14.png",E0="/assets/rShiny-DeYEsmp9.png",A0="/assets/Dialogflow%20CX-BhfPPEZi.png",C0="/assets/Google_Gemini_logo.svg-DssHf0Y7.png",$l="/assets/OpenAI-black-monoblossom-xl2KzdHb.png",R0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M27.255%2080.719c0%207.33-5.978%2013.317-13.309%2013.317C6.616%2094.036.63%2088.049.63%2080.719s5.987-13.317%2013.317-13.317h13.309zm6.709%200c0-7.33%205.987-13.317%2013.317-13.317s13.317%205.986%2013.317%2013.317v33.335c0%207.33-5.986%2013.317-13.317%2013.317-7.33%200-13.317-5.987-13.317-13.317zm0%200'%20fill='%23de1c59'/%3e%3cpath%20d='M47.281%2027.255c-7.33%200-13.317-5.978-13.317-13.309C33.964%206.616%2039.951.63%2047.281.63s13.317%205.987%2013.317%2013.317v13.309zm0%206.709c7.33%200%2013.317%205.987%2013.317%2013.317s-5.986%2013.317-13.317%2013.317H13.946C6.616%2060.598.63%2054.612.63%2047.281c0-7.33%205.987-13.317%2013.317-13.317zm0%200'%20fill='%2335c5f0'/%3e%3cpath%20d='M100.745%2047.281c0-7.33%205.978-13.317%2013.309-13.317%207.33%200%2013.317%205.987%2013.317%2013.317s-5.987%2013.317-13.317%2013.317h-13.309zm-6.709%200c0%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.986-13.317-13.317V13.946C67.402%206.616%2073.388.63%2080.719.63c7.33%200%2013.317%205.987%2013.317%2013.317zm0%200'%20fill='%232eb57d'/%3e%3cpath%20d='M80.719%20100.745c7.33%200%2013.317%205.978%2013.317%2013.309%200%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33%200-13.317-5.987-13.317-13.317s5.986-13.317%2013.317-13.317h33.335c7.33%200%2013.317%205.986%2013.317%2013.317%200%207.33-5.987%2013.317-13.317%2013.317zm0%200'%20fill='%23ebb02e'/%3e%3c/svg%3e",M0="/assets/Vertex%20AI-lFv2_HRt.png",D0="data:image/svg+xml,%3csvg%20width='128'%20height='128'%20viewBox='0%200%20128%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.7127%2050.141L10.9614%2037.3896C-3.6538%2052.0049%20-3.6538%2075.7036%2010.9614%2090.3188L23.7127%2077.5674C20.0761%2073.9303%2018.033%2068.9976%2018.033%2063.8542C18.033%2058.7109%2020.0761%2053.7781%2023.7127%2050.141Z'%20fill='%23E8710A'/%3e%3cpath%20d='M10.9614%2037.3898L23.7128%2050.1411C27.3499%2046.5044%2032.2826%2044.4614%2037.426%2044.4614C42.5693%2044.4614%2047.5021%2046.5044%2051.1392%2050.1411L60.3949%2034.3002C60.2115%2034.1567%2060.0243%2034.0157%2059.8335%2033.8773C45.1808%2022.8868%2024.2929%2024.0564%2010.9614%2037.3898Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M60.4435%2093.3635L51.1298%2077.5675C47.4927%2081.2042%2042.56%2083.2472%2037.4166%2083.2472C32.2733%2083.2472%2027.3405%2081.2042%2023.7034%2077.5675L10.9614%2090.3189C24.2929%20103.65%2045.1827%20104.822%2059.841%2093.8314C60.0468%2093.6779%2060.4529%2093.3635%2060.4529%2093.3635'%20fill='%23F9AB00'/%3e%3cpath%20d='M64.1075%2037.3897C49.4923%2052.0049%2049.4923%2075.7036%2064.1075%2090.3188L76.8589%2077.5675C75.025%2075.774%2073.5651%2073.6345%2072.5637%2071.2729C71.5623%2068.9113%2071.0393%2066.3746%2071.025%2063.8095C71.0107%2061.2444%2071.5054%2058.702%2072.4804%2056.3294C73.4555%2053.9568%2074.8914%2051.8012%2076.7053%2049.9874C78.5191%2048.1736%2080.6747%2046.7376%2083.0472%2045.7626C85.4198%2044.7876%2087.9623%2044.2929%2090.5273%2044.3072C93.0924%2044.3215%2095.6292%2044.8444%2097.9908%2045.8458C100.352%2046.8472%20102.492%2048.3071%20104.285%2050.141L117.037%2037.3897C102.421%2022.7726%2078.7227%2022.7726%2064.1075%2037.3897Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M117.037%2037.3896L104.285%2050.141C107.856%2053.7917%20109.842%2058.7032%20109.814%2063.8095C109.785%2068.9157%20107.744%2073.8048%20104.133%2077.4155C100.523%2081.0262%2095.6336%2083.0673%2090.5274%2083.0958C85.4211%2083.1242%2080.5096%2081.1377%2076.8589%2077.5674L64.1075%2090.3188C78.7227%20104.934%20102.421%20104.934%20117.037%2090.3188C131.652%2075.7036%20131.654%2052.0049%20117.037%2037.3896Z'%20fill='%23E8710A'/%3e%3c/svg%3e",Pl="/assets/figma-BrWkYh4v.png",O0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2022.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%202385.7%201919.9'%20style='enable-background:new%200%200%202385.7%201919.9;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23EA4335;}%20.st1{fill:%234285F4;}%20.st2{fill:%2334A853;}%20.st3{fill:%23FBBC05;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M1513.8,528.7h72.8l207.4-207.4l10.2-88c-385.9-340.6-975-303.9-1315.6,82C393.9,422.5,325.2,550,287.8,688%20c23.1-9.5,48.7-11,72.8-4.4l414.7-68.4c0,0,21.1-34.9,32-32.7c184.5-202.6,495-226.2,708-53.8H1513.8z'/%3e%3cpath%20class='st1'%20d='M2089.4,688c-47.7-175.5-145.5-333.3-281.6-454l-291,291c122.9,100.4,192.9,251.7,189.9,410.4v51.7%20c143.1,0,259,116,259,259c0,143.1-116,259-259,259h-518.1l-51.7,52.4v310.7l51.7,51.7h518.1c297,2.3,560.5-190.2,648.7-473.8%20C2443.4,1162.4,2335.4,854.4,2089.4,688L2089.4,688z'/%3e%3cpath%20class='st2'%20d='M669.8,1917h518.1v-414.7H669.8c-36.9,0-73.4-7.9-107-23.3l-72.8,22.5l-208.8,207.4l-18.2,72.8%20C380.1,1870.1,523,1917.6,669.8,1917L669.8,1917z'/%3e%3cpath%20class='st3'%20d='M669.8,571.6c-287.8,1.7-542.7,186-634.5,458.7c-91.8,272.7-0.3,573.7,227.8,749.1l300.5-300.5%20c-130.4-58.9-188.3-212.3-129.4-342.7c58.9-130.4,212.3-188.3,342.7-129.4c57.4,26,103.4,72,129.4,129.4l300.5-300.5%20C1078.9,668.6,880.2,570.9,669.8,571.6L669.8,571.6z'/%3e%3c/g%3e%3c/svg%3e",H0="/assets/notion-logo-no-background-C1XUKvDk.png",U0="/assets/python-logo-only-Bt12VGEE.png",Cs="/assets/Miro-Icon-CLoaKXku.png",Jf="/assets/RStudio-DE7lGCGx.png",Rs="/assets/google-docs-4ZYrWyNZ.png",V1="/assets/Adobe%20Photoshop-Uqk2Zb6I.png",Q1="/assets/Vue.js-DgkQqFWc.png",Z1="/assets/Veutify-GjC5VotX.png",If="/assets/GitHub-BLfHCd-g.png",K1="/assets/copilot-color-CWHkV5zn.png",er="/assets/Canva-BLQe5K32.png",W1="/assets/ggplot.svg-B5k6dA_B.png",J1="/assets/midjourney-C5RMMGS7.png",I1="/assets/dplyr-CODcNSbZ.png",F1="/assets/R-BNsrwNRK.png",$1=[{id:1,title:"Cornell x Google Cloud Capstone Project",description:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users.",image:S0,imageType:"laptop",caseStudyUrl:"/google-cloud-case-study",toolLogos:[O0,D0,A0,M0,C0,U0,R0,H0]},{id:2,title:"Ithaca Soap Redesign",description:"Redesigned a local brand’s app to connect sustainability values with user priorities.",image:z0,imageType:"mobile",caseStudyUrl:"/ithaca-soap-case-study"},{id:3,title:"Routes to Roots App",description:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.",image:N0,imageType:"mobile",caseStudyUrl:"/routes-to-roots-case-study"},{id:4,title:"iName App",description:"Built a mobile app and wearable environment that helps people pronounce and remember names correctly, fostering identity and inclusion.",image:k0,imageType:"mobile",caseStudyUrl:"/iname-case-study"},{id:5,title:"EcoCart App",description:"Designed a mobile app that makes sustainable grocery shopping simple and actionable by turning confusing eco-labels into clear choices.",image:T0,imageType:"laptop",caseStudyUrl:"/ecocart-case-study"},{id:6,title:"Immunization Data Analysis Dashboard",description:"Developed an interactive dashboard that transforms messy vaccination data into clear insights for educators and policymakers.",image:E0,imageType:"mobile",caseStudyUrl:"/rshiny-case-study"}];function P1(){const s=T.useRef([]);T.useEffect(()=>{const d=[];return s.current.forEach((c,m)=>{if(c){const p=new IntersectionObserver(b=>{b.forEach(E=>{E.isIntersecting&&(E.target.style.animationDelay=`${m*.2}s`,E.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-100px"});p.observe(c),d.push(p)}}),()=>{d.forEach(c=>c.disconnect())}},[]);const f=d=>{window.location.href=d};return i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("section",{className:"work-section",children:i.jsx("div",{className:"content-container",children:$1.map((d,c)=>i.jsxs("div",{ref:m=>s.current[c]=m,className:`project-row ${c%2===1?"reverse":""}`,onClick:()=>f(d.caseStudyUrl),children:[i.jsx("div",{className:"mockup-side",children:i.jsx("div",{className:`mockup-image-wrapper ${d.imageType}`,children:d.image?i.jsx("img",{src:d.image,alt:`${d.title} mockup`,className:"mockup-image"}):i.jsxs("div",{className:"mockup-placeholder",children:[i.jsx("div",{children:"Project Mockup Image"}),i.jsxs("small",{children:["(",d.imageType," mockup)"]})]})})}),i.jsxs("div",{className:"content-side",children:[i.jsx("h2",{className:"project-title",children:d.title}),i.jsx("p",{className:"project-description",children:d.description}),d.tools&&i.jsx("div",{className:"tools-row",children:d.tools.map((m,p)=>i.jsx("div",{className:"tool-badge",title:m,children:i.jsx("span",{className:"tool-text",children:m})},p))}),d.id===1&&d.toolLogos&&i.jsx("div",{className:"tool-logos-row",children:[O0,D0,A0,M0,C0,U0,R0,H0].map((m,p)=>i.jsx("img",{src:m,alt:`tool-${p}`,className:"tool-logo"},p))}),d.id===2&&i.jsx("div",{className:"tool-logos-row",children:[Q1,Z1,If,K1,Pl,er,$l].map((m,p)=>i.jsx("img",{src:m,alt:`ithaca-tool-${p}`,className:"tool-logo"},p))}),d.id===3&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"tool-logos-row",children:[Pl,Cs,er,Jf,$l,Rs,V1].map((m,p)=>i.jsx("img",{src:m,alt:`routes-tool-${p}`,className:"tool-logo"},p))}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.75rem"},children:[i.jsx("img",{src:Wf,alt:"Trophy",style:{width:"28px",height:"28px",objectFit:"contain",marginRight:"0.5rem"}}),i.jsx("span",{style:{fontSize:"1.2rem",color:"#4a4a4a",fontWeight:400,lineHeight:"1.7"},children:"Awarded best project for social impact and uniqueness amongst 15+ teams in class"})]})]}),d.id===4&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"tool-logos-row",children:[Pl,Cs,er,$l,Rs].map((m,p)=>i.jsx("img",{src:m,alt:`iname-tool-${p}`,className:"tool-logo"},p))}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.75rem"},children:[i.jsx("img",{src:Wf,alt:"Trophy",style:{width:"28px",height:"28px",objectFit:"contain",marginRight:"0.5rem"}}),i.jsx("span",{style:{fontSize:"1.2rem",color:"#4a4a4a",fontWeight:400,lineHeight:"1.7"},children:"Awarded best project for social impact amongst 250+ students in class"})]})]}),d.id===5&&i.jsx("div",{className:"tool-logos-row",children:[Pl,Cs,er,$l,Rs].map((m,p)=>i.jsx("img",{src:m,alt:`ecocart-tool-${p}`,className:"tool-logo"},p))}),d.id===6&&i.jsx("div",{className:"tool-logos-row",children:[Jf,F1,If,W1,I1,J1].map((m,p)=>i.jsx("img",{src:m,alt:`immunization-tool-${p}`,className:"tool-logo"},p))})]})]},d.id))})}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}const eg="/assets/haiku-app-build-process-CHMErIks.png",tg="/assets/cornell-chatbot-build-process-DNSAjoMx.png",ag="/assets/painPoint1-DBHfNOTY.png",ng="/assets/painPoint2-CgpjQyg_.png",ig="/assets/painPoint3-DypTOCTn.png",lg="/assets/painPoint4-DIy8mjfj.png",rg="/assets/impactFeasibility-E2P2Da3_.png",og="/assets/hmw1-C-GsbhVH.png",sg="/assets/hmw2-B01BOLXa.png",cg="/assets/fhmw-VbwO4vxY.png",dg="/assets/designPrinciple1-CHipiyAz.png",ug="/assets/designPrinciple2-CgjPv5UU.png",fg="/assets/designPrinciple3-Ctta_cph.png",Ff=[{id:1,title:"Overview",content:i.jsxs("div",{children:[i.jsx("p",{children:"At the beginning of my final semester at Cornell, my team members and I were assigned a capstone project in collaboration with Google Cloud. This wasn't just another classroom assignment; it was an opportunity to work directly with one of the leading companies in the industry. Ahh, I was thrilled."}),i.jsx("p",{children:"We were guided by Alex Pytlarz, a senior UX designer at Google Cloud with over a decade of experience in design. Alex challenged us to experience Google Cloud as beginners, documenting every step of the way: what worked, what confused us, and what frustrated us."}),i.jsx("p",{children:"The project was structured into two phases."}),i.jsxs("ol",{children:[i.jsx("li",{children:"In Phase 1, we divided into two teams to build functional AI-driven apps: a Cornell student chatbot and a Photo-to-Haiku generator using Google Cloud products. Throughout Phase 1, we had to keep detailed diary studies of our journeys."}),i.jsx("li",{children:"In Phase 2, we brought together the pain points that both teams uncovered to find top opportunity areas and finally to present design improvements to tackle these challenges."})]}),i.jsx("p",{children:"This case study tells the story of how we went about the project to the final solution, that is, a step-by-step onboarding experience for Google Cloud's future."})]})},{id:2,title:"My Role",content:i.jsx("div",{children:i.jsx("p",{children:"As part of this cross-disciplinary team of 8, I contributed to both the research and design phases. I also put my developing skills to coding up the apps we built. I worked on diary studies, affinity mapping, and user interviews, as well as brainstorming, prototyping, and shaping our final presentation. My focus was also on ensuring our final solution told a clear and compelling story."})})},{id:3,title:"Our Users",content:i.jsx("div",{children:i.jsx("p",{children:"Our users were essentially ourselves. Meaning this became an autobiographical design of sorts. By documenting our real frustrations and confusions, we could authentically capture what it feels like to be a beginner. And by using these pain points, we were to present design improvements."})})},{id:4,title:"Design Process",content:i.jsxs("div",{children:[i.jsx("p",{children:"I love structure, timelines, and sprints. They keep my mental sanity in the midst of the chaos of creativity and ensure that no matter how ambiguous the challenge, there's a clear path forward. For this project, we had three major sprints:"}),i.jsxs("ol",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Prototyping"}),": Building the Cornell student chatbot and the Photo-to-Haiku generator to experience Google Cloud as beginners."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Design"}),": Conducting exit interviews, auditing platforms, and prototyping for the final solution."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Branding & Presenting"}),": Crafting the narrative, refining the final solution, and presenting our work."]})]}),i.jsx("h4",{className:"fade-in-up",children:"01 Prototyping"}),i.jsx("p",{children:"The purpose wasn't to make polished products but to experience working with Google Cloud products."}),i.jsx("h5",{children:"01.1 Plan & Research"}),i.jsx("p",{children:"We explored Google Cloud's ecosystem by signing up for trials, playing with Vertex AI, Dialogflow CX, Firebase, and other tools, and planning which products might power our app ideas."}),i.jsx("h5",{children:"Research & Discovery"}),i.jsx("p",{children:"To capture our experiences, we conducted diary studies. Each of us logged daily notes: what tasks we attempted, where we struggled, what helped, and what felt missing."}),i.jsx("h5",{children:"01.2 First Prototype"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"The Cornell Student Chatbot"}),", powered by Dialogflow CX, Gemini, and Firebase, helped students find campus resources."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"The Photo-to-Haiku Generator"}),", built with Vision AI, Vertex AI, and Streamlit, transformed images into haikus."]})]}),i.jsx("h5",{children:"01.3 Refinement & Testing"}),i.jsx("p",{children:"We refined and tested these prototypes across different LLM models. While we achieved functional apps, every confusing installation error, every moment we resorted to ChatGPT because the official docs wasn't enough, became valuable data."}),i.jsx("img",{src:eg,alt:"Haiku App Build Process diagram",className:"fade-in-left"}),i.jsx("p",{className:"image-caption",children:"Haiku App Build Process - Flow diagram showing GGC Solution Generator to ChatGPT to Vertex AI Documentation to Streamlit for Hosting"}),i.jsx("img",{src:tg,alt:"Cornell Chatbot Build Process diagram",className:"fade-in-right"}),i.jsx("p",{className:"image-caption",children:"Cornell Chatbot Build Process - Flow diagram showing GGC Solution Generator to Tutorials to Gemini Code Assist to Live Demo Site with Chatbot"}),i.jsx("h4",{className:"fade-in-up",children:"02 Design"}),i.jsx("h5",{children:"02.1 Exit Interviews"}),i.jsx("p",{children:"We interviewed the other half of the team about their building journeys. These conversations led us to realize that our pain points were similar. We combined the team diaries to look for patterns."}),i.jsx("img",{src:ag,alt:"Pain Point 1: Overwhelming navigation and amount of content",className:"fade-in-up"}),i.jsx("p",{className:"image-caption",children:"Pain Point 1"}),i.jsx("img",{src:ng,alt:"Pain Point 2: Irrelevant search bar results and poor query matching",className:"fade-in-up"}),i.jsx("p",{className:"image-caption",children:"Pain Point 2"}),i.jsx("img",{src:ig,alt:"Pain Point 3: No clear or personalized path to finding answers",className:"fade-in-up"}),i.jsx("p",{className:"image-caption",children:"Pain Point 3"}),i.jsx("img",{src:lg,alt:"Pain Point 4: Lack of clear, step-by-step guidance for beginners",className:"fade-in-up"}),i.jsx("p",{className:"image-caption",children:"Pain Point 4"}),i.jsx("h5",{children:"02.2 Opportunity Areas"}),i.jsx("p",{children:"Analyzing the pain points we figured the opportunity areas for design and created an impact feasibility matrix to prioritize what we design for."}),i.jsx("img",{src:rg,alt:"Impact vs Feasibility Matrix showing design opportunity prioritization",style:{width:"100%",maxWidth:"800px",height:"auto"}}),i.jsx("div",{style:{textAlign:"center",fontStyle:"italic",color:"#666",fontSize:"14px",marginBottom:"20px"},children:"Impact vs Feasibility Matrix"}),i.jsx("h5",{children:"02.3 Brainstorm & Ideation"}),i.jsx("p",{children:'We reframed the problems into "How Might We" questions, such as:'}),i.jsxs("ul",{children:[i.jsx("li",{children:"HMW boost the solution generator's visibility and function?"}),i.jsx("li",{children:"HMW provide clear onboarding for non-technical users?"})]}),i.jsx("img",{src:og,alt:"How Might We question 1: HMW boost the solution generator's visibility and function?",className:"fade-in-left"}),i.jsx("p",{className:"image-caption",children:"HMW boost the solution generator's visibility and function?"}),i.jsx("img",{src:sg,alt:"How Might We question 2: HMW provide clear onboarding for non-technical users?",className:"fade-in-right"}),i.jsx("p",{className:"image-caption",children:"HMW provide clear onboarding for non-technical users?"}),i.jsx("p",{children:"We narrowed everything down to one HMW question."}),i.jsx("img",{src:cg,alt:"Final How Might We question: HMWW guide new non-technical builders to build projects through a linear, personalized, and step-by-step experience?"}),i.jsx("p",{className:"image-caption",children:"Final HMW"}),i.jsx("h5",{children:"02.4 Prototyping (Low-Fi → Hi-Fi)"}),i.jsx("p",{children:"We sketched low-fidelity ideas first, testing flows quickly. Then we moved to high-fidelity prototypes that embodied our design principles."}),i.jsx("h6",{children:"02.4.1 Design Principles"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Interactivity by default"}),i.jsx("li",{children:"Step-by-step guidance with progressive disclosure"}),i.jsx("li",{children:"Clarity through concise visual communication"})]}),i.jsx("img",{src:dg,alt:"Design Principle 1: Interactivity by Default - Steps are personalized to your use case"}),i.jsx("p",{className:"image-caption",children:"Interactivity by Default"}),i.jsx("img",{src:ug,alt:"Design Principle 2: Step-by-Step Guidance with Progressive Disclosure - Reduces cognitive load while providing guidance"}),i.jsx("p",{className:"image-caption",children:"Step-by-Step Guidance with Progressive Disclosure"}),i.jsx("img",{src:fg,alt:"Design Principle 3: Clarity through Concise Visual Communication - Reduce cognitive overload"}),i.jsx("p",{className:"image-caption",children:"Clarity through Concise Visual Communication"}),i.jsx("h4",{className:"fade-in-up",children:"03 Branding & Presenting"}),i.jsx("h5",{children:"03.1 Storyline"}),i.jsx("p",{children:"We crafted a narrative arc that captured our journey."}),i.jsx("h5",{children:"03.2 Final Solution & Presentation"}),i.jsx("p",{children:"We presented our high-fidelity prototypes alongside the apps we had built. The focus wasn't just on what we created, but on the broader vision: how Google Cloud could evolve into a more welcoming platform for new non-technical users."})]})},{id:5,title:"Final Design",content:i.jsxs("div",{children:[i.jsx("p",{children:"Our final solution was a high-fidelity prototype of a guided onboarding experience for Google Cloud. It embodied interactivity, progressive disclosure, and clarity through visuals — making it easier for beginners to navigate, learn, and build."}),i.jsx("div",{className:"fade-in-up",style:{width:"100%",maxWidth:"900px",margin:"2rem auto 0.5rem auto",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",display:"block"},children:i.jsx("iframe",{width:"100%",height:"506",src:"https://www.youtube.com/embed/g4A4sPdYbSs",title:"Google Cloud Guided Onboarding Experience",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"900px",height:"506px",display:"block"}})}),i.jsx("p",{className:"image-caption",children:"Final Prototype: Google Cloud Guided Onboarding Experience"})]})},{id:6,title:"What Did I Learn?",content:i.jsx("div",{children:i.jsxs("ul",{children:[i.jsx("li",{children:"We need to rethink interaction flows and features beyond the classic text chatbot."}),i.jsx("li",{children:"LLMs changed over the course of this project, underscoring the need for flexibility and rapid adoption of new technologies."}),i.jsx("li",{children:"AI is lowering the barrier to entry for non-technical people, opening the door to innovation like never before."})]})})}];function mg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("div",{className:"case-study-layout",children:i.jsxs("div",{className:"content-container",children:[i.jsx("div",{className:"mockup-section",children:i.jsx("img",{src:S0,alt:"Google Cloud Project Mockup",className:"mockup-image"})}),i.jsxs("div",{className:"project-metadata",children:[i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Role"}),i.jsx("div",{className:"metadata-value",children:"UX Designer + Researcher"})]}),i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Team"}),i.jsx("div",{className:"metadata-value",children:"Shreayaa, Christina, Albert, Amparo, Emma, Mika, Runjia and Uyen"})]}),i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Timeline"}),i.jsx("div",{className:"metadata-value",children:"Jan 2025 - May 2025"})]})]}),i.jsx("div",{className:"cascade-section",children:i.jsxs("div",{className:"cascade-container",children:[Ff.map(d=>i.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:i.jsx("h3",{children:d.title})},d.id)),i.jsx("div",{className:"play-button",onClick:()=>s(1),children:i.jsx("div",{className:"play-icon"})})]})})]})}),i.jsx("div",{className:"content-sections",children:Ff.map(d=>i.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[i.jsx("div",{className:"section-header",children:i.jsx("h2",{className:"section-title",children:d.title})}),i.jsx("div",{className:"section-content",children:d.content})]},d.id))}),i.jsxs("div",{className:"nav-buttons",children:[i.jsxs("a",{href:"/work",className:"nav-button primary",children:["View My Other Work",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),i.jsxs("button",{onClick:f,className:"nav-button secondary",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const hg="/assets/dr-florence-morris-BW9wzwPO.png",pg="/assets/priya-malhotra--bXDWzSX.png",gg="/assets/sharon-kim-CTtt0dQo.png",xg="/assets/lisa-raymond-BDDh1_nE.png",yg="/assets/task-scenarios-DKiajNwy.png",vg="/assets/home-BjxMVM82.png",bg="/assets/products-Brya4jRU.png",wg="/assets/productsDetail-DqgzRyVy.png",jg="/assets/offers-CGRyLhs0.png",Sg="/assets/community-DejwBG4Q.png",zg="/assets/communityNews-D8U01a_w.png",kg="/assets/lowfi-fzXvxzfD.jpg",Ng="/assets/taskFlow-Bj1Sn7Ur.png",$f=[{id:1,title:"Overview",content:i.jsxs("div",{children:[i.jsx("p",{children:'For the class "App Design and Prototyping," we had to collaborate with a real brand to redesign their app. Our client, Ithaca Soap, had a strong offline presence but needed a digital experience that reflected their mission of sustainability and simplicity.'}),i.jsx("p",{children:"At first glance, building a soap app might sound straightforward. But the real challenge lay deeper: how do you translate the tactile, sensory trust of sustainable personal care into a mobile-first, engaging, and intuitive app?"}),i.jsx("p",{children:"This case study is the story of how our team designed and prototyped the Ithaca Soap mobile app, a high-fidelity prototype."})]})},{id:2,title:"My Role",content:i.jsxs("div",{children:[i.jsx("p",{children:"In this project, I wore several hats:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"As a researcher, I helped synthesize user interviews and persona insights, making sure our design choices reflected real user needs."}),i.jsx("li",{children:"As a designer, I worked on translating research into a high-fidelity design system."}),i.jsx("li",{children:"As a prototyper, I used tools like Vue.js, Vuetify, and AI assistance (ChatGPT & Copilot), and built interactive flows that communicated the product vision."}),i.jsx("li",{children:"Also facilitated in-person tests, gathered observations, and iterated on design elements to improve clarity and usability."})]})]})},{id:3,title:"Design Process",content:i.jsxs("div",{children:[i.jsx("p",{children:"We had four sprints: research, brainstorming and sketching, prototyping, but as you'll see, the journey wasn't linear. Each phase uncovered new insights that guided us closer to the brand's vision."}),i.jsx("h4",{className:"fade-in-up",children:"01 Research & Discovery"}),i.jsx("p",{children:"When we first sat down with Ithaca Soap, we expected sustainability to be at the heart of everything. And it was, but not in the way we thought. While the client cared deeply about ingredient transparency and eco-friendly packaging, our early interviews and field studies showed us that users cared most about how the soap smelled, how it felt on their skin, and whether it fit easily into their routines."}),i.jsx("p",{children:"That gap between the brand's mission and the customer's priorities became the central tension of our project."}),i.jsx("p",{children:"To make sense of it, we built four personas."}),i.jsx("h4",{className:"fade-in-up",children:"02 Personas & Scenarios"}),i.jsx("p",{children:"From this research, we developed four personas that shaped our design:"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1.5rem",margin:"2rem 0"},children:[i.jsx("div",{className:"persona-card",children:i.jsx("img",{src:hg,alt:"Dr. Florence Morris persona card"})}),i.jsx("div",{className:"persona-card",children:i.jsx("img",{src:pg,alt:"Priya Malhotra persona card"})}),i.jsx("div",{className:"persona-card",children:i.jsx("img",{src:gg,alt:"Sharon Kim persona card"})}),i.jsx("div",{className:"persona-card",children:i.jsx("img",{src:xg,alt:"Lisa Raymond persona card"})})]}),i.jsx("p",{children:"To keep the design grounded, we built task scenarios for each persona that were later directly tied to the design features."}),i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx("img",{src:yg,alt:"Task scenarios for Priya, Sharon, Dr. Morris, and Lisa showing their specific use cases and goals",style:{width:"100%",maxWidth:"800px",height:"auto"}})}),i.jsx("p",{className:"image-caption",children:"Task scenarios for each persona showing their specific use cases and goals"})]})},{id:4,title:"Prototyping",content:i.jsxs("div",{children:[i.jsx("p",{children:"With scenarios in hand, we began sketching and wireframing. Early paper sketches helped us explore flows quickly, and once we had confidence, we built out prototypes using Vue.js."}),i.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:i.jsx("img",{src:kg,alt:"Team prototyping session",style:{width:"100%",maxWidth:"700px",height:"auto",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"}})}),i.jsx("p",{className:"image-caption",children:"Team prototyping session "}),i.jsx("h4",{className:"fade-in-up",children:"01 High-Fidelity Prototype"}),i.jsx("p",{children:"The final prototype, built with Vue.js and Vuetify, focused on six key views:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Home:"})," A curated carousel introducing products and brand values."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Products:"})," A filterable view by scent, use case, and skin type."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Product Detail:"})," Ingredient transparency, use-case visuals, reviews, and now a review submission field."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Offers:"})," Bundles, seasonal deals, and engaging incentives with animated confirmations."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Community:"})," A store map, farmers' market promo, story cards, and newsletter signup."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Admin Panel:"})," A lightweight simulation of content and promotion management."]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem",margin:"2rem 0"},children:[i.jsxs("div",{className:"app-screen",children:[i.jsx("img",{src:vg,alt:"Home screen showing welcome message and product recommendations"}),i.jsx("p",{className:"image-caption",children:"Home View"})]}),i.jsxs("div",{className:"app-screen",children:[i.jsx("img",{src:bg,alt:"Products screen with filtering options by scent, use case, and skin type"}),i.jsx("p",{className:"image-caption",children:"Products View"})]}),i.jsxs("div",{className:"app-screen",children:[i.jsx("img",{src:wg,alt:"Product detail screen for Amber Bar Soap with ingredients and pricing"}),i.jsx("p",{className:"image-caption",children:"Product Detail View"})]}),i.jsxs("div",{className:"app-screen",children:[i.jsx("img",{src:jg,alt:"Offers screen showing DIY challenge and bundle deals"}),i.jsx("p",{className:"image-caption",children:"Offers View"})]}),i.jsxs("div",{className:"app-screen",children:[i.jsx("img",{src:Sg,alt:"Community screen with store map and local retailer information"}),i.jsx("p",{className:"image-caption",children:"Community View"})]}),i.jsxs("div",{className:"app-screen",children:[i.jsx("img",{src:zg,alt:"Community news screen with stories and newsletter signup"}),i.jsx("p",{className:"image-caption",children:"Community Stories View"})]})]}),i.jsx("p",{children:"We used AI-assisted prototyping tools like ChatGPT and Copilot. These tools helped us scaffold components, generate realistic placeholder data, and quickly troubleshoot design issues, letting us focus on the user experience."}),i.jsx("h4",{className:"fade-in-up",children:"02 Testing & Iteration"}),i.jsx("p",{children:"A prototype is only as strong as its feedback. We ran in-person usability testing with several participants, each mapped to one of our personas."}),i.jsx("h5",{children:"What Worked Well"}),i.jsxs("ul",{children:[i.jsx("li",{children:"The bottom navigation bar felt intuitive and easy to use."}),i.jsx("li",{children:"Branding and visuals conveyed trust."}),i.jsx("li",{children:"The installable PWA prototype ran smoothly on mobile devices."})]}),i.jsx("h5",{children:"What Needed Work"}),i.jsxs("ul",{children:[i.jsx("li",{children:'The term "Catalog" confused users; it sounded like a brochure rather than a storefront.'}),i.jsx("li",{children:"Interactive elements lacked feedback animations, leaving users uncertain if actions were registered."}),i.jsx("li",{children:"Product detail pages felt text-heavy while participants wanted visual guidance."}),i.jsx("li",{children:"Navigation icons weren't always recognized as clickable."})]}),i.jsx("h5",{children:"Revisions We Made"}),i.jsxs("ul",{children:[i.jsx("li",{children:'"Catalog" became Products for clarity.'}),i.jsx("li",{children:"Added confirmation popups and animations for interactions."}),i.jsx("li",{children:"Introduced a review input box and more engaging visuals on product detail pages."}),i.jsx("li",{children:"Replaced icons with more recognizable symbols."})]}),i.jsx("p",{children:"These refinements tightened the app's usability and better aligned the experience with both client and user expectations."})]})},{id:5,title:"Final Design",content:i.jsxs("div",{children:[i.jsx("p",{children:"We mapped each scenario to specific views and tested goals to ensure the prototype supported the full user journey."}),i.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:i.jsx("img",{src:Ng,alt:"Task flow breakdown showing how each persona maps to specific app views and testing goals",style:{width:"100%",maxWidth:"900px",height:"auto",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"}})}),i.jsx("p",{className:"image-caption",children:"Task flow breakdown: How each feature of the app ties directly to the users goals"}),i.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0"},children:i.jsx("div",{style:{width:"100%",maxWidth:"400px",height:"auto",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},children:i.jsx("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/embed/GDo7jKW1DII",title:"Ithaca Soap Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"400px",height:"400px",display:"block"}})})}),i.jsx("p",{className:"image-caption",children:"Interactive prototype demonstration showing the complete user journey"})]})},{id:6,title:"What Did I Learn?",content:i.jsxs("div",{children:[i.jsxs("ul",{children:[i.jsx("li",{children:"Clients often want to lead with their values, but users are motivated by convenience first. The best design finds a way to connect the two."}),i.jsx("li",{children:'Something as simple as renaming "Catalog" to "Products" completely changed how users interpreted the page.'}),i.jsx("li",{children:"Users want confirmation when they take an action, no matter how small. Even animated GIFs or subtle popups dramatically improved usability."}),i.jsx("li",{children:"Prototyping is powerful. Even rough, early flows made it easier to test assumptions and gather useful feedback."}),i.jsx("li",{children:"Iteration is everything. Each testing cycle revealed something small, a confusing label, a missing feedback loop, that ultimately made the product stronger."}),i.jsx("li",{children:"Tools like ChatGPT and Copilot accelerated the technical side, giving us more time to focus on storytelling, research, and iteration."})]}),i.jsx("p",{children:"Most importantly, I learned that design is about trust, between the client, the brand, and the users."})]})}];function Tg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("div",{className:"case-study-layout",children:i.jsxs("div",{className:"content-container",children:[i.jsx("div",{className:"mockup-section",children:i.jsx("img",{src:z0,alt:"Ithaca Soap Company Website Mockup",className:"mockup-image"})}),i.jsxs("div",{className:"project-metadata",children:[i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Role"}),i.jsx("div",{className:"metadata-value",children:"UX/UI Designer + Developer"})]}),i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Team"}),i.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika and Siying"})]}),i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Timeline"}),i.jsx("div",{className:"metadata-value",children:"Jan 2025 - May 2025"})]})]}),i.jsx("div",{className:"cascade-section",children:i.jsxs("div",{className:"cascade-container",children:[$f.map(d=>i.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:i.jsx("h3",{children:d.title})},d.id)),i.jsx("div",{className:"play-button",onClick:()=>s(1),children:i.jsx("div",{className:"play-icon"})})]})})]})}),i.jsx("div",{className:"content-sections",children:$f.map(d=>i.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[i.jsx("div",{className:"section-header",children:i.jsx("h2",{className:"section-title",children:d.title})}),i.jsx("div",{className:"section-content",children:d.content})]},d.id))}),i.jsxs("div",{className:"nav-buttons",children:[i.jsxs("a",{href:"/work",className:"nav-button primary",children:["View My Other Work",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),i.jsxs("button",{onClick:f,className:"nav-button secondary",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Eg="/assets/item1-DFIblHDH.jpeg",Ag="/assets/item2-CLnbi5Ua.jpg",Cg="/assets/item3-w30zsngq.jpeg",Rg="/assets/item4-BO-K9wjc.JPG",Mg="/assets/item5-m0BflQys.png",Dg="/assets/Persona-CPVysNhA.jpg",Og="/assets/method2data1-CB-Xj_my.png",Hg="/assets/method2data2-BV3rMy1-.png",Ug="/assets/finalDesign-DKRfjgJQ.png",Pf=[{id:1,title:"Overview",content:i.jsxs("div",{children:[i.jsx("p",{children:"It's the beginning of a new semester at college. You're juggling classes, clubs, assignments, and the million things happening on campus. But in the middle of all that chaos, something feels off."}),i.jsx("p",{children:"Maybe the traditional dance you used to practice every week is now a once-a-semester thing. Maybe it's that you haven't cooked the recipes you grew up with in months. Or maybe it's simply the quiet ache of not hearing your language spoken outside your phone calls home."}),i.jsx("p",{children:"For students from culturally diverse backgrounds, hobbies aren't just ways to pass time. They are a way of remembering who you are while building who you're becoming. And yet, we found that these practices are the first to be sacrificed in the grind of university life."}),i.jsxs("p",{children:["That disconnect is what inspired ",i.jsx("strong",{children:"Routes to Roots"}),": a project to understand the barriers to cultural hobby engagement and design a solution that helps students reconnect, reflect, and sustain their cultural practices."]})]})},{id:2,title:"My Role",content:i.jsx("div",{children:i.jsxs("ul",{children:[i.jsx("li",{children:"Designed and distributed the cultural probe kits to participants."}),i.jsx("li",{children:"Conducted exit interviews and synthesized responses through coding and affinity mapping."}),i.jsx("li",{children:"Participated in the autoethnography study, journaling experiences with hobby-related apps."}),i.jsx("li",{children:"Contributed to creating personas and defining design objectives based on findings."}),i.jsx("li",{children:"Collaborated on the Routes to Roots kiosk concept, including user flow and interaction design."})]})})},{id:3,title:"Research Process",content:i.jsxs("div",{children:[i.jsx("p",{children:"To explore these, we followed these sprints:"}),i.jsxs("ol",{children:[i.jsx("li",{children:"Interviewed and observed students who practiced cultural hobbies."}),i.jsx("li",{children:"As the first method, we used cultural probes and diary studies to capture lived experiences."}),i.jsx("li",{children:"As the second method, we conducted an autoethnography, where we became participants ourselves."}),i.jsx("li",{children:"Analyzed the data we collected in the methods through affinity mapping, personas, word clouds, and graphs."}),i.jsx("li",{children:"Prototyped and wireframed the kiosk-based solution."})]}),i.jsx("h4",{children:"Method 1: Cultural Probes & Diaries"}),i.jsx("p",{children:"We recruited 10 students from cultural clubs across Cornell. Their hobbies ranged from cultural dance to cooking, calligraphy, and music."}),i.jsx("p",{children:"Each student received a cultural-probe kit with four parts:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"A diary study with daily questions about cultural connections and hobby engagement."}),i.jsxs("li",{children:["A handmade scrapbook wherein the participants had to:",i.jsxs("ul",{children:[i.jsx("li",{children:"Draw pictures/drawings about how they perceive their cultural hobbies"}),i.jsx("li",{children:"Fill out an index card documenting feelings about what they miss"}),i.jsx("li",{children:"Keep a timeline map tracking hobby journeys to mark peaks and lows"}),i.jsx("li",{children:'Place themselves in a "Community-Web" diagram where they map their connections to different communities'})]})]}),i.jsx("li",{children:"A weekly schedule grid recording time spent on academic commitments, required extracurricular commitments, leisurely hobbies, and cultural activities."}),i.jsx("li",{children:"A postcard to future self"})]}),i.jsxs("div",{className:"probe-kit-gallery",children:[i.jsx("img",{src:Eg,alt:"Cultural probe kit overview - diary and scrapbook materials"}),i.jsx("img",{src:Ag,alt:"Daily diary study template with cultural connection questions"}),i.jsx("img",{src:Cg,alt:"Participant persona - Maya Chen, tentative explorer"}),i.jsx("img",{src:Mg,alt:"Scrapbook pages with cultural hobby reflections and community mapping"}),i.jsx("img",{src:Rg,alt:"Letter to future self about cultural hobby goals"})]}),i.jsx("h5",{children:"What we found"}),i.jsxs("ul",{children:[i.jsx("li",{children:'One participant wrote about cooking as "the only way I feel at home again," while another described the pride of explaining her culture to friends through film.'}),i.jsx("li",{children:'Most cultural hobbies occupied just 0–3 hours a week, often disappearing during busy academic stretches. One participant simply wrote, "No time. Makes me sad."'}),i.jsx("li",{children:`Postcards revealed a longing to stay connected. "Don't let work wash away your passion," one wrote to their future self.`})]}),i.jsx("p",{children:"We created a persona to guide us."}),i.jsx("img",{src:Dg,alt:"Maya Chen persona - showing user goals, pain points, and expectations for cultural hobby engagement"}),i.jsx("h4",{children:"Method 2: Autoethnography"}),i.jsx("p",{children:"As a team, we resonated with much of the problem statement, and what we found with method 1 we decided to turn inward. We each chose a hobby-related app (from music practice trackers to cooking platforms) and used them daily for a week while journaling our experiences."}),i.jsx("h5",{children:"What we noticed"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Writing about a cooking app, one teammate noted that the joy came not from the interface, but from memories with their cousins back home."}),i.jsx("li",{children:"Apps lacked built-in motivators: No streaks, reminders, or emotional check-ins meant enthusiasm faded quickly."}),i.jsx("li",{children:"We wanted to track how hobbies made us feel, not just how many minutes we logged."}),i.jsx("li",{children:"We felt tone mattered. Apps that offered storytelling or cultural context resonated far more than mechanical, checklist-style ones."})]}),i.jsx("p",{children:"This exercise made one thing clear: digital apps alone wouldn't cut it. Students needed cultural engagement to be easily available and emotionally resonant."}),i.jsx("img",{src:Og,alt:"Feature-based frustration triggers across apps - heatmap showing user pain points"}),i.jsx("img",{src:Hg,alt:"Percentage of days app encouraged motivation - showing which apps were most effective"})]})},{id:4,title:"Design",content:i.jsxs("div",{children:[i.jsx("p",{children:'We decided against building "just another app." Instead, we created a kiosk-based system, a visible, physical presence on campus in common spaces.'}),i.jsx("p",{children:"Why a kiosk? Because visibility itself is part of the intervention. By embedding cultural expression into shared spaces, we aimed to normalize it, celebrate it, and make it discoverable."}),i.jsx("h5",{children:"Key Features"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Explore:"})," Students tap their ID and browse cultural hobbies, peer groups, events, and practice spaces."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Contribute:"})," They can add their own cultural practices, keeping the system alive and inclusive."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Connect:"})," After each interaction, students receive a curated follow-up email with event links, peer contacts, or reflection prompts."]})]}),i.jsx("p",{children:'Instead of productivity dashboards, the kiosk offers gentle reminders that say: "Your roots matter."'}),i.jsx("img",{src:Ug,alt:"Routes to Roots kiosk interface showing cultural hobby options and community connections"})]})},{id:5,title:"Final Design",content:i.jsxs("div",{children:[i.jsx("p",{children:"Watch how the design would work in real life."}),i.jsx("div",{className:"video-container",children:i.jsx("iframe",{src:"https://www.youtube.com/embed/NbugF3D0B9k",title:"Routes to Roots - Final Design Demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})},{id:6,title:"What Did I Learn?",content:i.jsx("div",{children:i.jsxs("ul",{children:[i.jsx("li",{children:"I learned how important it is to design beyond usability, creating systems that resonate emotionally. Routes to Roots wasn't about efficiency; it was about belonging."}),i.jsx("li",{children:"Using both cultural probes and autoethnography taught me the strength of combining generative and reflective research."}),i.jsx("li",{children:"This project and this course as a whole taught me that sometimes the right design intervention isn't another digital app. Considering the physical context of campus life helped us create a more visible and impactful solution."})]})})}];function Bg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("div",{className:"case-study-layout",children:i.jsxs("div",{className:"content-container",children:[i.jsx("div",{className:"mockup-section",children:i.jsx("img",{src:N0,alt:"Routes to Roots Project Mockup",className:"mockup-image"})}),i.jsxs("div",{className:"project-metadata fade-in-up",children:[i.jsxs("div",{className:"metadata-item fade-in-left",children:[i.jsx("div",{className:"metadata-label",children:"Role"}),i.jsx("div",{className:"metadata-value",children:"UX Researcher + Designer"})]}),i.jsxs("div",{className:"metadata-item fade-in-up",children:[i.jsx("div",{className:"metadata-label",children:"Team"}),i.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika, Sumit, Ashley and Carrie"})]}),i.jsxs("div",{className:"metadata-item fade-in-right",children:[i.jsx("div",{className:"metadata-label",children:"Timeline"}),i.jsx("div",{className:"metadata-value",children:"Jan 2025 - May 2025"})]})]}),i.jsx("div",{className:"cascade-section",children:i.jsxs("div",{className:"cascade-container",children:[Pf.map(d=>i.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:i.jsx("h3",{children:d.title})},d.id)),i.jsx("div",{className:"play-button",onClick:()=>s(1),children:i.jsx("div",{className:"play-icon"})})]})})]})}),i.jsx("div",{className:"content-sections",children:Pf.map((d,c)=>i.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[i.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:i.jsx("h2",{className:"section-title",children:d.title})}),i.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),i.jsxs("div",{className:"nav-buttons fade-in-up",children:[i.jsxs("a",{href:"/work",className:"nav-button primary fade-in-left",children:["View My Other Work",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),i.jsxs("button",{onClick:f,className:"nav-button secondary fade-in-right",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const _g="/assets/storyboard1-fBactef1.png",Yg="/assets/storyboard2-Dq1tlHVE.png",Lg="/assets/storyboard3-NQAMn8Tz.png",Gg="/assets/prototype1-CqnRYqh1.png",qg="/assets/prototype2-wMH44h2A.png",Xg="/assets/prototype3-CAUpV1-q.png",Vg="/assets/prototype4-BHIa9hNy.png",Qg="/assets/prototype5-CsczmHRT.png",e0=[{id:1,title:"Overview",content:i.jsxs("div",{children:[i.jsx("p",{children:`Imagine landing in a new country for the first time. You're excited, nervous, and ready to meet people, except every introduction turns into a mini struggle. Your name gets mispronounced again and again. You start shortening it, giving an "easy version," or just avoiding correcting people altogether. Over time, this chips away at your confidence in classrooms, networking events, and even casual conversations.`}),i.jsxs("p",{children:["That frustration sparked our team's project: ",i.jsx("strong",{children:"iName"})," — a mobile and wearable app designed to make introductions smoother by helping people pronounce and remember names correctly while also honoring the cultural stories behind them."]})]})},{id:2,title:"My Role",content:i.jsxs("div",{children:[i.jsx("p",{children:"I wore many hats in this project:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:["As a ",i.jsx("strong",{children:"researcher"}),", I interviewed international participants, analyzed the data, and conducted usability tests."]}),i.jsxs("li",{children:["As a ",i.jsx("strong",{children:"strategist"}),", I sketched and storyboarded scenarios, imagining how technology could work in real life."]}),i.jsxs("li",{children:["As a ",i.jsx("strong",{children:"designer"}),", I built prototypes in Figma, turning our rough sketches into something people could actually use."]})]}),i.jsx("p",{children:"More than anything, I focused on making sure the voices of our users stayed at the center of every decision."})]})},{id:3,title:"Understanding Our Users",content:i.jsxs("div",{children:[i.jsx("p",{children:"We focused on non-native English speakers at Cornell — students, visiting scholars, and newcomers navigating a new world."}),i.jsx("p",{children:`One student told us, "I stopped correcting because I was tired of repeating my name ten times." Another said, "It feels like I'm asking people for too much just to say it right."`}),i.jsx("p",{children:"These stories shaped our problem: people don't just need their names pronounced correctly; they need their identity respected and remembered."})]})},{id:4,title:"Design Process",content:i.jsxs("div",{children:[i.jsx("h4",{children:"01 Research"}),i.jsx("p",{children:"Our research showed that existing solutions like Google Translate or simple name tags fell short; they either lacked cultural context, felt outdated, or weren't built just for social/professional environments."}),i.jsx("p",{children:'We also explored tools like RescueTime in the productivity space (from our inspiration case) and saw a parallel: they solved the "what" but not the "how." Similarly, apps stored names, but none combined memory, pronunciation, and cultural meaning in one. That gap was our opportunity.'}),i.jsx("h4",{children:"02 Early Concepts"}),i.jsx("p",{children:"We started with imagination. What if you could rent smart glasses at an event, and when you met someone new, their name floated above them with the correct pronunciation whispered in your ear?"}),i.jsx("p",{children:"What if there was an interactive map that let you dive into the syllables of Irish, Mandarin, or Hindi names?"}),i.jsx("p",{children:"What if, before a networking event, you could know the names of all the attendees so you never had to stumble through introductions again?"}),i.jsx("p",{children:'These "what ifs" turned into sketches, and the sketches turned into storyboards.'}),i.jsx("ul",{children:i.jsx("li",{children:"Liu, a student from China, records his pronunciation during sign-up, finally feeling like people will hear his name the way his family intended."})}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",margin:"2rem 0"},children:[i.jsx("img",{src:_g,alt:"Storyboard panels 1-2: User signs up and tries iName app"}),i.jsx("img",{src:Yg,alt:"Storyboard panels 3-4: User learns phonics and accesses family name pronunciation"}),i.jsx("img",{src:Lg,alt:"Storyboard panels 5-6: User explores China/Mandarin meaning and successfully uses iName"})]}),i.jsx("h4",{children:"03 Prototyping"}),i.jsx("p",{children:"From there, we built wireframes: clean flows for creating profiles, saving names, exploring the world map, and connecting to smart devices. As fidelity increased, we experimented with typography, color palettes, and interactions until the app felt warm and inclusive."}),i.jsx("h4",{children:"04 Testing"}),i.jsx("p",{children:"Then came the real test: putting iName into the hands of students. We gave them tasks like signing up, saving names from a group, or exploring the cultural map. That's when we realized some things weren't working:"}),i.jsxs("ul",{children:[i.jsx("li",{children:'The "Starred Names" icon confused people; nobody knew what it did.'}),i.jsx("li",{children:"The Explore map looked pretty, but users didn't know they could click into it."}),i.jsx("li",{children:"Dense blocks of cultural content overwhelmed readers."}),i.jsx("li",{children:"Everyone wanted profile pictures to connect faces with names."})]}),i.jsx("p",{children:"So we iterated"}),i.jsxs("ul",{children:[i.jsx("li",{children:'We turned "Starred Names" into a clearly labeled Saved tab.'}),i.jsx("li",{children:"We added tooltips and markers to the map."}),i.jsx("li",{children:"We broke content into bite-sized sections with visuals."}),i.jsx("li",{children:"We redesigned event attendee lists into profile cards with photos and play buttons."})]}),i.jsx("p",{children:"Each cycle of testing pulled us closer to the product our users actually needed."})]})},{id:5,title:"Final Design Solution",content:i.jsxs("div",{children:[i.jsx("p",{children:"The final iName experience combines mobile and wearable design with fun features:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Sign Up"}),": Users can record their pronunciation, add phonetic hints, and share the meaning of their name."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Explore"}),": An interactive world map that connects names to cultures, syllables, and stories."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Saved"}),": A dedicated space to bookmark and organize names you want to remember for events."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Event Prep"}),": Attendees get pronunciation reminders ahead of time."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Smart Devices"}),": Glasses and earbuds that display and pronounce names in real time at events."]})]}),i.jsxs("div",{style:{display:"flex",flexWrap:"nowrap",gap:"2rem",justifyContent:"center",alignItems:"flex-start",margin:"2.5rem 0",overflowX:"auto",width:"calc(100% + 480px)",marginLeft:"-240px",marginRight:"-240px",paddingLeft:"240px",paddingRight:"240px"},children:[i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:i.jsx("img",{src:Gg,alt:"Sign Up screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:i.jsx("img",{src:qg,alt:"Profile screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:i.jsx("img",{src:Xg,alt:"Groups screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:i.jsx("img",{src:Vg,alt:"Explore screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:i.jsx("img",{src:Qg,alt:"Devices screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})})]}),i.jsxs("div",{style:{marginTop:"1.5rem"},children:[i.jsx("h3",{style:{margin:0,color:"var(--text-secondary)"},children:"Watch how the solution works in real life"}),i.jsx("div",{style:{maxWidth:"100%",marginTop:"1rem",borderRadius:"12px"},children:i.jsx("iframe",{width:"100%",height:"506",src:"https://www.youtube.com/embed/hC4MDLmYAGg",title:"iName Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"900px",height:"506px",display:"block"}})})]})]})},{id:6,title:"What Did I Learn?",content:i.jsx("div",{children:i.jsxs("ul",{children:[i.jsx("li",{children:"Storyboards helped us communicate user needs more vividly to our team, ensuring alignment before we invested in prototypes."}),i.jsx("li",{children:"During think-aloud sessions, the most valuable feedback came from moments of hesitation, when users weren't sure what to tap or why a feature existed."}),i.jsx("li",{children:"Learning to observe confusion without intervening gave me clearer signals on where the design was failing."})]})})}];function Zg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("div",{className:"case-study-layout",children:i.jsxs("div",{className:"content-container",children:[i.jsx("div",{className:"mockup-section",children:i.jsx("img",{src:k0,alt:"iName Project Mockup",className:"mockup-image"})}),i.jsxs("div",{className:"project-metadata fade-in-up",children:[i.jsxs("div",{className:"metadata-item fade-in-left",children:[i.jsx("div",{className:"metadata-label",children:"Role"}),i.jsx("div",{className:"metadata-value",children:"UX Designer + Developer"})]}),i.jsxs("div",{className:"metadata-item fade-in-up",children:[i.jsx("div",{className:"metadata-label",children:"Team"}),i.jsx("div",{className:"metadata-value",children:"Shreayaa, Ariel, Chaowei, and Qiqiu"})]}),i.jsxs("div",{className:"metadata-item fade-in-right",children:[i.jsx("div",{className:"metadata-label",children:"Timeline"}),i.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),i.jsx("div",{className:"cascade-section",children:i.jsxs("div",{className:"cascade-container",children:[e0.map(d=>i.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:i.jsx("h3",{children:d.title})},d.id)),i.jsx("div",{className:"play-button",onClick:()=>s(1),children:i.jsx("div",{className:"play-icon"})})]})})]})}),i.jsx("div",{className:"content-sections",children:e0.map((d,c)=>i.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[i.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:i.jsx("h2",{className:"section-title",children:d.title})}),i.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),i.jsxs("div",{className:"nav-buttons fade-in-up",children:[i.jsxs("a",{href:"/work",className:"nav-button primary fade-in-left",children:["View My Other Work",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),i.jsxs("button",{onClick:f,className:"nav-button secondary fade-in-right",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Kg="/assets/features-bUjuRKn3.png",Wg="/assets/comicStrip-BmdIqTwL.png",Jg="/assets/keytakeaways-B24h4SkF.png",t0=[{id:1,title:"Overview",content:i.jsxs("div",{children:[i.jsx("p",{children:"Picture this: it’s Sunday afternoon, you’re at the grocery store, and you’re staring at two brands of pasta. One claims to be organic, the other is cheaper, but you have no idea which is actually environmentally friendly. You care about sustainability, but with confusing labels, it’s hard to know what the “right” choice really is."}),i.jsxs("p",{children:["That exact frustration is what inspired us to create ",i.jsx("strong",{children:"EcoCart"}),"."]}),i.jsx("p",{children:"Our goal? To make sustainable grocery shopping less complicated and more rewarding by giving people real-time insights, clear alternatives, and even incentives for choosing eco-friendly options."})]})},{id:2,title:"My Role",content:i.jsxs("div",{children:[i.jsx("p",{children:"I worked as part of a cross-disciplinary team of designers and researchers."}),i.jsxs("ul",{children:[i.jsx("li",{children:"As a researcher, I conducted interviews, field studies, and affinity mapping. Evaluated by running usability tests and analyzing key takeaways."}),i.jsx("li",{children:"As a designer, I created wireframes, prototypes, and tested flows."})]})]})},{id:3,title:"Our Users",content:i.jsxs("div",{children:[i.jsx("p",{children:"We began by exploring two groups:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Individuals whose choices are primarily shaped by cost and availability."}),i.jsx("li",{children:"Sustainability shoppers who have the means to shop responsibly but lack clarity and guidance."})]}),i.jsx("p",{children:"Through interviews with students, professors, and grocery staff, we realized a hard truth: food-insecure communities can’t realistically prioritize sustainability when survival is at stake."}),i.jsx("p",{children:"Instead, EcoCart would be more impactful if designed for users who already want to shop sustainably but feel confused or unsupported by existing tools."})]})},{id:4,title:"Design Process",content:i.jsxs("div",{children:[i.jsx("h4",{children:"01 Research & Definition"}),i.jsx("p",{children:"We started with field studies, interviews, and secondary research into food sustainability."}),i.jsx("p",{children:"“Shoppers wanted sustainability simplified into a single score rather than fragmented eco-labels.”"}),i.jsx("p",{children:"An affinity map helped us synthesize competing priorities: affordability vs. eco-consciousness. From this, we refined our problem statement:"}),i.jsx("p",{children:i.jsx("em",{children:i.jsx("strong",{children:"“People who are unaware of food sustainability but want to make better choices need a clear, intuitive way to understand the impact of their shopping habits.”"})})}),i.jsx("h4",{children:"02 Early Design Goals"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Clear Sustainability Insight: provide transparency and actionable data."}),i.jsx("li",{children:"Secure Scanning: ensure trust in how scanning works."}),i.jsx("li",{children:"Seamless Integration: fit into both in-store and at-home shopping habits."})]}),i.jsx("h4",{children:"03 Prototyping"}),i.jsx("p",{children:"We developed low- and mid-fidelity prototypes to test interactions, focusing on tasks like scanning, comparing alternatives, and managing wishlists. Wireframes mapped flows such as real-time in-store use and remote browsing from home."}),i.jsx("h4",{children:"04 Evaluations"}),i.jsx("p",{children:"To test usability and intuitiveness, we ran structured walkthroughs where users performed five key tasks:"}),i.jsxs("ol",{children:[i.jsx("li",{children:"Selecting Products In-Store: Participants had to add items to a cart quickly and clearly."}),i.jsx("li",{children:"Real-time Scanning & Alternatives: They had to scan a product and review suggested sustainable swaps."}),i.jsx("li",{children:"Evaluating Sustainability Metrics: They compared alternatives based on environmental scores."}),i.jsx("li",{children:"Adding Products to Wishlist: Simply save items for later shopping."}),i.jsx("li",{children:"Exploring Search-from-Home: Had to transition smoothly from store use to remote browsing EcoCart."})]}),i.jsx("h4",{children:"05 Key Takeaways"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Users felt that the app currently lacks incentives to encourage them to pick out the more sustainable alternatives."}),i.jsx("li",{children:"Users wanted an intuitive way to interact with products, such as tapping the product container to receive confirmation for adding alternatives."}),i.jsx("li",{children:"Users struggled to navigate back to the home screen from the profile section, leading to frustration, indicating the need for a ‘home’ button on each page."}),i.jsx("li",{children:"Users found it difficult to locate specific saved items in a long list, with no clear filtering or organization options."})]}),i.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:i.jsx("img",{src:Jg,alt:"Key takeaways",style:{maxWidth:"85%",height:"auto",borderRadius:"8px"}})})]})},{id:5,title:"Final Solution",content:i.jsxs("div",{children:[i.jsx("p",{children:"After iterating over all the evaluations, our final product had 4 key features:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Scan products, instantly see eco-metrics, and explore sustainable alternatives."}),i.jsx("li",{children:"Plan shopping remotely, save items, and check store availability."}),i.jsx("li",{children:"Incentivize eco-friendly purchases with points that translate into savings."}),i.jsx("li",{children:"Support local small-scale businesses alongside sustainability goals."})]}),i.jsx("div",{style:{textAlign:"center",margin:"1rem 0"},children:i.jsx("img",{src:Kg,alt:"EcoCart features",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})}),i.jsx("h5",{children:"Why would people use EcoCart?"}),i.jsxs("ul",{children:[i.jsx("li",{children:"It turns confusing sustainability choices into clear comparisons."}),i.jsx("li",{children:"It makes eco-friendly habits practical by blending seamlessly into shopping."}),i.jsx("li",{children:"It rewards users for doing good, proving that climate action can also feel like a personal win."})]}),i.jsx("p",{children:"“Imagine scanning your usual pasta and instantly seeing: this swap saves 2kg of CO₂. You add it to your cart, earn reward points, and leave the store not just with dinner, but while creating impact.”"}),i.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:i.jsx("img",{src:Wg,alt:"EcoCart comic strip",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})})]})},{id:6,title:"What Did I Learn?",content:i.jsx("div",{children:i.jsx("ul",{children:i.jsx("li",{children:"Behavior change requires reinforcement: people need prompts, reminders, and rewards, not just information."})})})}];function Ig(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("div",{className:"case-study-layout",children:i.jsxs("div",{className:"content-container",children:[i.jsx("div",{className:"mockup-section",children:i.jsx("img",{src:T0,alt:"EcoCart Project Mockup",className:"mockup-image"})}),i.jsxs("div",{className:"project-metadata fade-in-up",children:[i.jsxs("div",{className:"metadata-item fade-in-left",children:[i.jsx("div",{className:"metadata-label",children:"Role"}),i.jsx("div",{className:"metadata-value",children:"UX Designer"})]}),i.jsxs("div",{className:"metadata-item fade-in-up",children:[i.jsx("div",{className:"metadata-label",children:"Team"}),i.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika, Ashley, and Bakhtawar"})]}),i.jsxs("div",{className:"metadata-item fade-in-right",children:[i.jsx("div",{className:"metadata-label",children:"Timeline"}),i.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),i.jsx("div",{className:"cascade-section",children:i.jsxs("div",{className:"cascade-container",children:[t0.map(d=>i.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:i.jsx("h3",{children:d.title})},d.id)),i.jsx("div",{className:"play-button",onClick:()=>s(1),children:i.jsx("div",{className:"play-icon"})})]})})]})}),i.jsx("div",{className:"content-sections",children:t0.map((d,c)=>i.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[i.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:i.jsx("h2",{className:"section-title",children:d.title})}),i.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),i.jsxs("div",{className:"nav-buttons fade-in-up",children:[i.jsxs("a",{href:"/work",className:"nav-button primary fade-in-left",children:["View My Other Work",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),i.jsxs("button",{onClick:f,className:"nav-button secondary fade-in-right",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Fg="/assets/finalProduct1-CB1LE1Sm.png",$g="/assets/finalProduct2-CNhrKZ4S.png",a0=[{id:1,title:"Overview",content:i.jsx("div",{children:i.jsx("p",{children:"Between 2012 and 2022, the Connecticut Department of Public Health collected annual school-level vaccination and exemption data. The challenge? Making sense of more than 500 rows of data covering different vaccines, grades, and school types, and finding a way to turn it into actionable insights for educators, policymakers, and health officials."})})},{id:2,title:"My Role",content:i.jsx("div",{children:i.jsxs("ul",{children:[i.jsx("li",{children:"As an analyst cleaned and restructured messy, incomplete records, explored relationships between exemptions, enrollment size, school type, and grade level."}),i.jsx("li",{children:"As a developer built an interactive Shiny web application to bring the data to life."}),i.jsx("li",{children:"Translated raw numbers into trends that could be understood outside of a technical context."})]})})},{id:3,title:"Coding It Up",content:i.jsxs("div",{children:[i.jsx("p",{children:"This wasn’t just “load a dataset and plot a chart.” The coding process involved several critical steps:"}),i.jsx("h4",{children:"01 Data Cleaning"}),i.jsxs("ul",{children:[i.jsx("li",{children:"We handled missing values by replacing NA with 0 where appropriate."}),i.jsx("li",{children:"Renamed columns for readability."}),i.jsx("li",{children:"Converted grade levels into factors for easier grouping and analysis."}),i.jsx("li",{children:"Removed redundant percentage columns to avoid duplication."})]}),i.jsx("h4",{children:"02 Exploratory Data Analysis (EDA)"}),i.jsxs("ul",{children:[i.jsx("li",{children:"We compared vaccination rates between public and private schools."}),i.jsx("li",{children:"Looked at grade-level patterns, e.g., compliance differences in kindergarten vs. middle school."}),i.jsx("li",{children:"Studied trends over time, checking whether exemption rates were increasing."})]})]})},{id:4,title:"Design Process",content:i.jsxs("div",{children:[i.jsx("p",{children:"After evaluating the options, we selected the main visualizations to include in our product. We decided that a Shiny application would be the best way to showcase the data, allowing users to apply filters to control the dataset and explore various visualizations."}),i.jsx("p",{children:"We aimed to ensure that policymakers could easily view and interpret the results to make informed decisions regarding vaccinations for school children. We developed a responsive Shiny application to achieve our product goals, putting significant effort into designing an interface that is user-friendly, even for non-tech-savvy individuals."}),i.jsx("p",{children:"We used a gradient scale of orange for our color palettes to evoke a sense of warmth and energy. Additionally, we utilized Midjourney to generate a descriptive image for the sidebar. This image aims to clearly illustrate our intention of drawing attention to the children’s immunization guidelines."}),i.jsx("h4",{children:"01 Building in Shiny"}),i.jsxs("ul",{children:[i.jsx("li",{children:"We added filters for school year, grade, vaccine type, and school type."}),i.jsx("li",{children:"Used ggplot2 for clean, interpretable visualizations."}),i.jsx("li",{children:"Structured the app so users could quickly switch between vaccination coverage, exemptions, and compliance metrics."})]})]})},{id:5,title:"Final Product",content:i.jsxs("div",{children:[i.jsx("p",{children:"The end result a interactive Shiny application that allows users to:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Filter vaccination data by school type, grade, vaccine, and time period."}),i.jsx("li",{children:"Visualize exemption rates alongside enrollment counts."}),i.jsx("li",{children:"Track compliance trends over the 10-year period."})]}),i.jsxs("div",{className:"final-images",children:[i.jsx("img",{src:Fg,alt:"Final product 1",className:"final-image"}),i.jsx("img",{src:$g,alt:"Final product 2",className:"final-image"})]})]})},{id:6,title:"What Did I Learn?",content:i.jsxs("div",{children:[i.jsxs("ul",{children:[i.jsx("li",{children:"A static report would have buried these insights, but an interactive app made them accessible."}),i.jsx("li",{children:"I learned how to clean messy datasets in R turning raw, inconsistent records into usable structures."}),i.jsx("li",{children:"I got comfortable with data visualization in ggplot2, learning how small tweaks in aesthetics can make a chart either confusing or crystal clear."}),i.jsx("li",{children:"I learnt the power of Shiny apps, and how interactivity transforms static numbers into tools people can actually use."})]}),i.jsxs("p",{children:["✅ Acknowledgments",i.jsx("br",{}),"Thanks to the Connecticut Department of Public Health for the dataset, the R/Shiny community for tools and documentation."]})]})}];function Pg(){const s=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},f=()=>{window.scrollTo({top:0,behavior:"smooth"})};return T.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(p=>{p.forEach(b=>{b.isIntersecting&&b.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(p=>c.observe(p)),()=>c.disconnect()},[]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("div",{className:"case-study-layout",children:i.jsxs("div",{className:"content-container",children:[i.jsx("div",{className:"mockup-section",children:i.jsx("img",{src:E0,alt:"rShiny Project Mockup",className:"mockup-image"})}),i.jsxs("div",{className:"project-metadata",children:[i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Role"}),i.jsx("div",{className:"metadata-value",children:"Data Scientist"})]}),i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Team"}),i.jsx("div",{className:"metadata-value",children:"Shreayaa, Xihan, and Yuzu"})]}),i.jsxs("div",{className:"metadata-item",children:[i.jsx("div",{className:"metadata-label",children:"Timeline"}),i.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),i.jsx("div",{className:"cascade-section",children:i.jsxs("div",{className:"cascade-container",children:[a0.map(d=>i.jsx("div",{className:"cascade-card",onClick:()=>s(d.id),children:i.jsx("h3",{children:d.title})},d.id)),i.jsx("div",{className:"play-button",onClick:()=>s(1),children:i.jsx("div",{className:"play-icon"})})]})})]})}),i.jsx("div",{className:"content-sections",children:a0.map(d=>i.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[i.jsx("div",{className:"section-header",children:i.jsx("h2",{className:"section-title",children:d.title})}),i.jsx("div",{className:"section-content",children:d.content})]},d.id))}),i.jsxs("div",{className:"nav-buttons",children:[i.jsxs("a",{href:"/work",className:"nav-button primary",children:["View My Other Work",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),i.jsxs("button",{onClick:f,className:"nav-button secondary",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2025"})]})})]})}const Ri=[{description:i.jsxs(i.Fragment,{children:[i.jsx("q",{children:"I ground design in mixed-method research."}),i.jsx("br",{}),i.jsx("br",{}),"I’ve used methods like cultural probes, diary studies and auto-ethnography to uncover hidden user needs."]})},{description:i.jsxs(i.Fragment,{children:[i.jsx("q",{children:"I align user needs with business goals."}),i.jsx("br",{}),i.jsx("br",{}),"By prioritizing features based on real pain points and feasibility, I create designs that are purposeful and effective."]})},{description:i.jsxs(i.Fragment,{children:[i.jsx("q",{children:"I design realistic solutions informed by code."}),i.jsx("br",{}),i.jsx("br",{}),"With a CS background, I prototype with technical constraints in mind and easily collaborate with engineers."]})},{description:i.jsxs(i.Fragment,{children:[i.jsx("q",{children:"I design for social impact."}),i.jsx("br",{}),i.jsx("br",{}),"My work focuses on inclusive experiences that foster belonging, respect identity, and make everyday interactions more equitable."]})},{description:i.jsxs(i.Fragment,{children:[i.jsx("q",{children:"I believe in iteration as progress."}),i.jsx("br",{}),i.jsx("br",{}),"Through repeated cycles of design and feedback, I’ve seen how even small changes improve usability."]})},{description:i.jsxs(i.Fragment,{children:[i.jsx("q",{children:"I have mentored and taught students."}),i.jsx("br",{}),i.jsx("br",{}),"As a teaching specialist, I’ve supported 250+ students in design practices that helped them grow with confidence."]})}];function e2(){const[s,f]=T.useState(0),[d,c]=T.useState(0),[m,p]=T.useState(""),[b,E]=T.useState(!1),[S,y]=T.useState(!1),k=i0.useMemo(()=>["designer.","researcher.","strategist."],[]);return T.useEffect(()=>{if(!S){const O=setInterval(()=>{f(H=>(H+1)%Ri.length)},4e3);return()=>clearInterval(O)}},[S]),T.useEffect(()=>{const O=setTimeout(()=>{const H=k[d];b?(p(H.substring(0,m.length-1)),m===""&&(E(!1),c(Y=>(Y+1)%k.length))):(p(H.substring(0,m.length+1)),m===H&&setTimeout(()=>E(!0),1500))},b?50:80);return()=>clearTimeout(O)},[m,b,d,k]),i.jsxs("div",{className:"app",children:[i.jsx("style",{children:`
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
          align-items: flex-end;
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

        .hero-photo img {
          width: clamp(320px, 32vw, 420px);
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
        `}),i.jsx("header",{className:"header",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"header-content",children:[i.jsx("a",{href:"/",children:i.jsx("div",{className:"logo",children:i.jsx("img",{src:Mt,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),i.jsxs("nav",{className:"nav-links",children:[i.jsx("a",{href:"/work",children:"WORK"}),i.jsx("a",{href:"/playground",children:"PLAYGROUND"}),i.jsx("a",{href:"/about",children:"ABOUT"}),i.jsx("a",{href:"https://drive.google.com/file/d/1nE7H77ctf1esubvyXuKoVVAPnDlRB8R0/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"})]})]})})}),i.jsx("section",{className:"hero",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-text",children:[i.jsxs("h1",{children:["Hi, I'm Shreayaa."," ",i.jsxs("span",{className:"typewriter",children:["I'm a ",m,i.jsx("span",{style:{borderRight:"2px solid",animation:"blink 1s infinite"},children:"|"})]})]}),i.jsx("p",{children:"I'm a user experience designer who is curious about how design influences human behavior in the real world. I design thoughtful user experiences that balance user needs with business strategy."})]}),i.jsx("div",{className:"hero-image",children:i.jsx("div",{className:"hero-photo",children:i.jsx("img",{src:Y1,alt:"Shreayaa Srinivasan"})})})]})})}),i.jsx("section",{className:"skills",children:i.jsx("div",{className:"skills-container",children:i.jsx("div",{className:"skills-strip",children:["Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing","Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing"].map((O,H)=>i.jsx("span",{children:O},H))})})}),i.jsx("section",{className:"design-section",children:i.jsx("div",{className:"content-container",children:i.jsxs("div",{className:"design-content",children:[i.jsxs("div",{className:"design-left",children:[i.jsx("h2",{children:"Who am I as a designer?"}),i.jsx("p",{children:"Coming from a background in both computer science and user experience design, I bring a unique blend of technical expertise and design thinking. I design with empathy and purpose."}),i.jsx("p",{children:"I am comfortable working closely with researchers, engineers, and stakeholders to shape ideas into products people trust and enjoy."})]}),i.jsx("div",{className:"design-gallery",children:i.jsx("div",{className:"gallery-container",onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:Ri.map((O,H)=>{let Y="gallery-card";return H===s?Y+=" active":H===(s-1+Ri.length)%Ri.length?Y+=" prev":H===(s+1)%Ri.length&&(Y+=" next"),i.jsx("div",{className:Y,children:i.jsxs("div",{className:"card-content",children:[i.jsx("h3",{children:O.title}),i.jsx("p",{style:{marginBottom:"1.2rem"},children:O.description})]})},H)})})})]})})}),i.jsx("footer",{className:"footer",children:i.jsxs("div",{className:"footer-content",children:[i.jsx("div",{className:"footer-message",children:i.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),i.jsxs("div",{className:"footer-links",children:[i.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),i.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),i.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),i.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:i.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),i.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2025 "})]})})]})}function B0(){return i.jsx(A1,{children:i.jsxs(r1,{children:[i.jsx(St,{path:"/",element:i.jsx(e2,{})}),i.jsx(St,{path:"/about",element:i.jsx(q1,{})}),i.jsx(St,{path:"/playground",element:i.jsx(X1,{})}),i.jsx(St,{path:"/work",element:i.jsx(P1,{})}),i.jsx(St,{path:"/google-cloud-case-study",element:i.jsx(mg,{})}),i.jsx(St,{path:"/ithaca-soap-case-study",element:i.jsx(Tg,{})}),i.jsx(St,{path:"/routes-to-roots-case-study",element:i.jsx(Bg,{})}),i.jsx(St,{path:"/ecocart-case-study",element:i.jsx(Ig,{})}),i.jsx(St,{path:"/iname-case-study",element:i.jsx(Zg,{})}),i.jsx(St,{path:"/rshiny-case-study",element:i.jsx(Pg,{})})]})})}l0.createRoot(document.getElementById("root")).render(i.jsx(T.StrictMode,{children:i.jsx(B0,{})}));pp.createRoot(document.getElementById("root")).render(i.jsx(i0.StrictMode,{children:i.jsx(B0,{})}));
