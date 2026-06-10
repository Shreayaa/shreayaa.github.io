(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&c(x)}).observe(document,{childList:!0,subtree:!0});function d(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=d(f);fetch(f.href,h)}})();function J0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Oo={exports:{}},Rn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function F0(){if(Jm)return Rn;Jm=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function d(c,f,h){var x=null;if(h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),"key"in f){h={};for(var C in f)C!=="key"&&(h[C]=f[C])}else h=f;return f=h.ref,{$$typeof:r,type:c,key:x,ref:f!==void 0?f:null,props:h}}return Rn.Fragment=m,Rn.jsx=d,Rn.jsxs=d,Rn}var Fm;function W0(){return Fm||(Fm=1,Oo.exports=F0()),Oo.exports}var n=W0(),Uo={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function $0(){if(Wm)return ne;Wm=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),k=Symbol.iterator;function N(b){return b===null||typeof b!="object"?null:(b=k&&b[k]||b["@@iterator"],typeof b=="function"?b:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,q={};function Y(b,_,K){this.props=b,this.context=_,this.refs=q,this.updater=K||M}Y.prototype.isReactComponent={},Y.prototype.setState=function(b,_){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,_,"setState")},Y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function B(){}B.prototype=Y.prototype;function L(b,_,K){this.props=b,this.context=_,this.refs=q,this.updater=K||M}var G=L.prototype=new B;G.constructor=L,H(G,Y.prototype),G.isPureReactComponent=!0;var ae=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},de=Object.prototype.hasOwnProperty;function fe(b,_,K,Q,F,ue){return K=ue.ref,{$$typeof:r,type:b,key:_,ref:K!==void 0?K:null,props:ue}}function I(b,_){return fe(b.type,_,void 0,void 0,void 0,b.props)}function te(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function he(b){var _={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(K){return _[K]})}var we=/\/+/g;function Me(b,_){return typeof b=="object"&&b!==null&&b.key!=null?he(""+b.key):_.toString(36)}function Fe(){}function $e(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Fe,Fe):(b.status="pending",b.then(function(_){b.status==="pending"&&(b.status="fulfilled",b.value=_)},function(_){b.status==="pending"&&(b.status="rejected",b.reason=_)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Ie(b,_,K,Q,F){var ue=typeof b;(ue==="undefined"||ue==="boolean")&&(b=null);var ie=!1;if(b===null)ie=!0;else switch(ue){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(b.$$typeof){case r:case m:ie=!0;break;case y:return ie=b._init,Ie(ie(b._payload),_,K,Q,F)}}if(ie)return F=F(b),ie=Q===""?"."+Me(b,0):Q,ae(F)?(K="",ie!=null&&(K=ie.replace(we,"$&/")+"/"),Ie(F,_,K,"",function(aa){return aa})):F!=null&&(te(F)&&(F=I(F,K+(F.key==null||b&&b.key===F.key?"":(""+F.key).replace(we,"$&/")+"/")+ie)),_.push(F)),1;ie=0;var nt=Q===""?".":Q+":";if(ae(b))for(var Se=0;Se<b.length;Se++)Q=b[Se],ue=nt+Me(Q,Se),ie+=Ie(Q,_,K,ue,F);else if(Se=N(b),typeof Se=="function")for(b=Se.call(b),Se=0;!(Q=b.next()).done;)Q=Q.value,ue=nt+Me(Q,Se++),ie+=Ie(Q,_,K,ue,F);else if(ue==="object"){if(typeof b.then=="function")return Ie($e(b),_,K,Q,F);throw _=String(b),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return ie}function R(b,_,K){if(b==null)return b;var Q=[],F=0;return Ie(b,Q,"","",function(ue){return _.call(K,ue,F++)}),Q}function X(b){if(b._status===-1){var _=b._result;_=_(),_.then(function(K){(b._status===0||b._status===-1)&&(b._status=1,b._result=K)},function(K){(b._status===0||b._status===-1)&&(b._status=2,b._result=K)}),b._status===-1&&(b._status=0,b._result=_)}if(b._status===1)return b._result.default;throw b._result}var P=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function je(){}return ne.Children={map:R,forEach:function(b,_,K){R(b,function(){_.apply(this,arguments)},K)},count:function(b){var _=0;return R(b,function(){_++}),_},toArray:function(b){return R(b,function(_){return _})||[]},only:function(b){if(!te(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ne.Component=Y,ne.Fragment=d,ne.Profiler=f,ne.PureComponent=L,ne.StrictMode=c,ne.Suspense=w,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ne.__COMPILER_RUNTIME={__proto__:null,c:function(b){return V.H.useMemoCache(b)}},ne.cache=function(b){return function(){return b.apply(null,arguments)}},ne.cloneElement=function(b,_,K){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Q=H({},b.props),F=b.key,ue=void 0;if(_!=null)for(ie in _.ref!==void 0&&(ue=void 0),_.key!==void 0&&(F=""+_.key),_)!de.call(_,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&_.ref===void 0||(Q[ie]=_[ie]);var ie=arguments.length-2;if(ie===1)Q.children=K;else if(1<ie){for(var nt=Array(ie),Se=0;Se<ie;Se++)nt[Se]=arguments[Se+2];Q.children=nt}return fe(b.type,F,void 0,void 0,ue,Q)},ne.createContext=function(b){return b={$$typeof:x,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},ne.createElement=function(b,_,K){var Q,F={},ue=null;if(_!=null)for(Q in _.key!==void 0&&(ue=""+_.key),_)de.call(_,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(F[Q]=_[Q]);var ie=arguments.length-2;if(ie===1)F.children=K;else if(1<ie){for(var nt=Array(ie),Se=0;Se<ie;Se++)nt[Se]=arguments[Se+2];F.children=nt}if(b&&b.defaultProps)for(Q in ie=b.defaultProps,ie)F[Q]===void 0&&(F[Q]=ie[Q]);return fe(b,ue,void 0,void 0,null,F)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(b){return{$$typeof:C,render:b}},ne.isValidElement=te,ne.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:X}},ne.memo=function(b,_){return{$$typeof:p,type:b,compare:_===void 0?null:_}},ne.startTransition=function(b){var _=V.T,K={};V.T=K;try{var Q=b(),F=V.S;F!==null&&F(K,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(je,P)}catch(ue){P(ue)}finally{V.T=_}},ne.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ne.use=function(b){return V.H.use(b)},ne.useActionState=function(b,_,K){return V.H.useActionState(b,_,K)},ne.useCallback=function(b,_){return V.H.useCallback(b,_)},ne.useContext=function(b){return V.H.useContext(b)},ne.useDebugValue=function(){},ne.useDeferredValue=function(b,_){return V.H.useDeferredValue(b,_)},ne.useEffect=function(b,_,K){var Q=V.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(b,_)},ne.useId=function(){return V.H.useId()},ne.useImperativeHandle=function(b,_,K){return V.H.useImperativeHandle(b,_,K)},ne.useInsertionEffect=function(b,_){return V.H.useInsertionEffect(b,_)},ne.useLayoutEffect=function(b,_){return V.H.useLayoutEffect(b,_)},ne.useMemo=function(b,_){return V.H.useMemo(b,_)},ne.useOptimistic=function(b,_){return V.H.useOptimistic(b,_)},ne.useReducer=function(b,_,K){return V.H.useReducer(b,_,K)},ne.useRef=function(b){return V.H.useRef(b)},ne.useState=function(b){return V.H.useState(b)},ne.useSyncExternalStore=function(b,_,K){return V.H.useSyncExternalStore(b,_,K)},ne.useTransition=function(){return V.H.useTransition()},ne.version="19.1.0",ne}var $m;function Fo(){return $m||($m=1,Uo.exports=$0()),Uo.exports}var A=Fo();const za=J0(A);var Bo={exports:{}},On={},_o={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function P0(){return Pm||(Pm=1,function(r){function m(R,X){var P=R.length;R.push(X);e:for(;0<P;){var je=P-1>>>1,b=R[je];if(0<f(b,X))R[je]=X,R[P]=b,P=je;else break e}}function d(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var X=R[0],P=R.pop();if(P!==X){R[0]=P;e:for(var je=0,b=R.length,_=b>>>1;je<_;){var K=2*(je+1)-1,Q=R[K],F=K+1,ue=R[F];if(0>f(Q,P))F<b&&0>f(ue,Q)?(R[je]=ue,R[F]=P,je=F):(R[je]=Q,R[K]=P,je=K);else if(F<b&&0>f(ue,P))R[je]=ue,R[F]=P,je=F;else break e}}return X}function f(R,X){var P=R.sortIndex-X.sortIndex;return P!==0?P:R.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var x=Date,C=x.now();r.unstable_now=function(){return x.now()-C}}var w=[],p=[],y=1,k=null,N=3,M=!1,H=!1,q=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function ae(R){for(var X=d(p);X!==null;){if(X.callback===null)c(p);else if(X.startTime<=R)c(p),X.sortIndex=X.expirationTime,m(w,X);else break;X=d(p)}}function V(R){if(q=!1,ae(R),!H)if(d(w)!==null)H=!0,de||(de=!0,Me());else{var X=d(p);X!==null&&Ie(V,X.startTime-R)}}var de=!1,fe=-1,I=5,te=-1;function he(){return Y?!0:!(r.unstable_now()-te<I)}function we(){if(Y=!1,de){var R=r.unstable_now();te=R;var X=!0;try{e:{H=!1,q&&(q=!1,L(fe),fe=-1),M=!0;var P=N;try{t:{for(ae(R),k=d(w);k!==null&&!(k.expirationTime>R&&he());){var je=k.callback;if(typeof je=="function"){k.callback=null,N=k.priorityLevel;var b=je(k.expirationTime<=R);if(R=r.unstable_now(),typeof b=="function"){k.callback=b,ae(R),X=!0;break t}k===d(w)&&c(w),ae(R)}else c(w);k=d(w)}if(k!==null)X=!0;else{var _=d(p);_!==null&&Ie(V,_.startTime-R),X=!1}}break e}finally{k=null,N=P,M=!1}X=void 0}}finally{X?Me():de=!1}}}var Me;if(typeof G=="function")Me=function(){G(we)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,$e=Fe.port2;Fe.port1.onmessage=we,Me=function(){$e.postMessage(null)}}else Me=function(){B(we,0)};function Ie(R,X){fe=B(function(){R(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(R){switch(N){case 1:case 2:case 3:var X=3;break;default:X=N}var P=N;N=X;try{return R()}finally{N=P}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(R,X){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var P=N;N=R;try{return X()}finally{N=P}},r.unstable_scheduleCallback=function(R,X,P){var je=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?je+P:je):P=je,R){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=P+b,R={id:y++,callback:X,priorityLevel:R,startTime:P,expirationTime:b,sortIndex:-1},P>je?(R.sortIndex=P,m(p,R),d(w)===null&&R===d(p)&&(q?(L(fe),fe=-1):q=!0,Ie(V,P-je))):(R.sortIndex=b,m(w,R),H||M||(H=!0,de||(de=!0,Me()))),R},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(R){var X=N;return function(){var P=N;N=X;try{return R.apply(this,arguments)}finally{N=P}}}}(Ho)),Ho}var ef;function eg(){return ef||(ef=1,_o.exports=P0()),_o.exports}var Lo={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function tg(){if(tf)return Je;tf=1;var r=Fo();function m(w){var p="https://react.dev/errors/"+w;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+w+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(m(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(w,p,y){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:k==null?null:""+k,children:w,containerInfo:p,implementation:y}}var x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(w,p){if(w==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Je.createPortal=function(w,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(m(299));return h(w,p,null,y)},Je.flushSync=function(w){var p=x.T,y=c.p;try{if(x.T=null,c.p=2,w)return w()}finally{x.T=p,c.p=y,c.d.f()}},Je.preconnect=function(w,p){typeof w=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(w,p))},Je.prefetchDNS=function(w){typeof w=="string"&&c.d.D(w)},Je.preinit=function(w,p){if(typeof w=="string"&&p&&typeof p.as=="string"){var y=p.as,k=C(y,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?c.d.S(w,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:k,integrity:N,fetchPriority:M}):y==="script"&&c.d.X(w,{crossOrigin:k,integrity:N,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(w,p){if(typeof w=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=C(p.as,p.crossOrigin);c.d.M(w,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(w)},Je.preload=function(w,p){if(typeof w=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,k=C(y,p.crossOrigin);c.d.L(w,y,{crossOrigin:k,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(w,p){if(typeof w=="string")if(p){var y=C(p.as,p.crossOrigin);c.d.m(w,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(w)},Je.requestFormReset=function(w){c.d.r(w)},Je.unstable_batchedUpdates=function(w,p){return w(p)},Je.useFormState=function(w,p,y){return x.H.useFormState(w,p,y)},Je.useFormStatus=function(){return x.H.useHostTransitionStatus()},Je.version="19.1.0",Je}var af;function ag(){if(af)return Lo.exports;af=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),Lo.exports=tg(),Lo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function ig(){if(nf)return On;nf=1;var r=eg(),m=Fo(),d=ag();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(h(e)!==e)throw Error(c(188))}function w(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return C(l),e;if(s===i)return C(l),t;s=s.sibling}throw Error(c(188))}if(a.return!==i.return)a=l,i=s;else{for(var o=!1,u=l.child;u;){if(u===a){o=!0,a=l,i=s;break}if(u===i){o=!0,i=l,a=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===a){o=!0,a=s,i=l;break}if(u===i){o=!0,i=s,a=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,k=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),G=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function $e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case Y:return"Profiler";case q:return"StrictMode";case V:return"Suspense";case de:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case G:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:$e(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return $e(e(t))}catch{}}return null}var Ie=Array.isArray,R=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},je=[],b=-1;function _(e){return{current:e}}function K(e){0>b||(e.current=je[b],je[b]=null,b--)}function Q(e,t){b++,je[b]=e.current,e.current=t}var F=_(null),ue=_(null),ie=_(null),nt=_(null);function Se(e,t){switch(Q(ie,t),Q(ue,e),Q(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Am(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Am(t),e=Nm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(F),Q(F,e)}function aa(){K(F),K(ue),K(ie)}function bs(e){e.memoizedState!==null&&Q(nt,e);var t=F.current,a=Nm(t,e.type);t!==a&&(Q(ue,e),Q(F,a))}function Qn(e){ue.current===e&&(K(F),K(ue)),nt.current===e&&(K(nt),En._currentValue=P)}var ys=Object.prototype.hasOwnProperty,vs=r.unstable_scheduleCallback,ws=r.unstable_cancelCallback,zh=r.unstable_shouldYield,Eh=r.unstable_requestPaint,Ct=r.unstable_now,Ch=r.unstable_getCurrentPriorityLevel,ic=r.unstable_ImmediatePriority,nc=r.unstable_UserBlockingPriority,Xn=r.unstable_NormalPriority,Th=r.unstable_LowPriority,lc=r.unstable_IdlePriority,Mh=r.log,Dh=r.unstable_setDisableYieldValue,Ui=null,lt=null;function ia(e){if(typeof Mh=="function"&&Dh(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Ui,e)}catch{}}var st=Math.clz32?Math.clz32:Uh,Rh=Math.log,Oh=Math.LN2;function Uh(e){return e>>>=0,e===0?32:31-(Rh(e)/Oh|0)|0}var Vn=256,In=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kn(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~s,i!==0?l=Ea(i):(o&=u,o!==0?l=Ea(o):a||(a=u&~e,a!==0&&(l=Ea(a))))):(u=i&~s,u!==0?l=Ea(u):o!==0?l=Ea(o):a||(a=i&~e,a!==0&&(l=Ea(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function Bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sc(){var e=Vn;return Vn<<=1,(Vn&4194048)===0&&(Vn=256),e}function rc(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function js(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _i(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _h(e,t,a,i,l,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,g=e.expirationTimes,z=e.hiddenUpdates;for(a=o&~a;0<a;){var D=31-st(a),U=1<<D;u[D]=0,g[D]=-1;var E=z[D];if(E!==null)for(z[D]=null,D=0;D<E.length;D++){var T=E[D];T!==null&&(T.lane&=-536870913)}a&=~U}i!==0&&oc(e,i,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function oc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-st(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function cc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-st(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function As(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Qm(e.type))}function Hh(e,t){var a=X.p;try{return X.p=e,t()}finally{X.p=a}}var na=Math.random().toString(36).slice(2),Ke="__reactFiber$"+na,Pe="__reactProps$"+na,Ka="__reactContainer$"+na,Ss="__reactEvents$"+na,Lh="__reactListeners$"+na,Yh="__reactHandles$"+na,uc="__reactResources$"+na,Hi="__reactMarker$"+na;function ks(e){delete e[Ke],delete e[Pe],delete e[Ss],delete e[Lh],delete e[Yh]}function Za(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ka]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Em(e);e!==null;){if(a=e[Ke])return a;e=Em(e)}return t}e=a,a=e.parentNode}return null}function Ja(e){if(e=e[Ke]||e[Ka]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Fa(e){var t=e[uc];return t||(t=e[uc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Hi]=!0}var mc=new Set,fc={};function Ca(e,t){Wa(e,t),Wa(e+"Capture",t)}function Wa(e,t){for(fc[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var Gh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hc={},pc={};function qh(e){return ys.call(pc,e)?!0:ys.call(hc,e)?!1:Gh.test(e)?pc[e]=!0:(hc[e]=!0,!1)}function Zn(e,t,a){if(qh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Jn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var zs,gc;function $a(e){if(zs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);zs=t&&t[1]||"",gc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zs+e+gc}var Es=!1;function Cs(e,t){if(!e||Es)return"";Es=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(T){var E=T}Reflect.construct(e,[],U)}else{try{U.call()}catch(T){E=T}e.call(U.prototype)}}else{try{throw Error()}catch(T){E=T}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),o=s[0],u=s[1];if(o&&u){var g=o.split(`
`),z=u.split(`
`);for(l=i=0;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(i===g.length||l===z.length)for(i=g.length-1,l=z.length-1;1<=i&&0<=l&&g[i]!==z[l];)l--;for(;1<=i&&0<=l;i--,l--)if(g[i]!==z[l]){if(i!==1||l!==1)do if(i--,l--,0>l||g[i]!==z[l]){var D=`
`+g[i].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=i&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$a(a):""}function Qh(e){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return Cs(e.type,!1);case 11:return Cs(e.type.render,!1);case 1:return Cs(e.type,!0);case 31:return $a("Activity");default:return""}}function xc(e){try{var t="";do t+=Qh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xh(e){var t=bc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){e._valueTracker||(e._valueTracker=Xh(e))}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=bc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vh=/[\n"\\]/g;function pt(e){return e.replace(Vh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ts(e,t,a,i,l,s,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ms(e,o,ht(t)):a!=null?Ms(e,o,ht(a)):i!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ht(u):e.removeAttribute("name")}function vc(e,t,a,i,l,s,o,u){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+ht(a):"",t=t!=null?""+ht(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Ms(e,t,a){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+ht(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function wc(e,t,a){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ht(a):""}function jc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(Ie(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=ht(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function ei(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ih=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ac(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Ih.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Nc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Ac(e,l,i)}else for(var s in t)t.hasOwnProperty(s)&&Ac(e,s,t[s])}function Ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $n(e){return Zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Rs=null;function Os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,ai=null;function Sc(e){var t=Ja(e);if(t&&(e=t.stateNode)){var a=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ts(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[Pe]||null;if(!l)throw Error(c(90));Ts(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&yc(i)}break e;case"textarea":wc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var Us=!1;function kc(e,t,a){if(Us)return e(t,a);Us=!0;try{var i=e(t);return i}finally{if(Us=!1,(ti!==null||ai!==null)&&(_l(),ti&&(t=ti,e=ai,ai=ti=null,Sc(t),e)))for(t=0;t<e.length;t++)Sc(e[t])}}function Yi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Pe]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=!1;if(Ht)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Bs=!1}var la=null,_s=null,Pn=null;function zc(){if(Pn)return Pn;var e,t=_s,a=t.length,i,l="value"in la?la.value:la.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===l[s-i];i++);return Pn=l.slice(e,1<i?1-i:void 0)}function el(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Ec(){return!1}function et(e){function t(a,i,l,s,o){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Ec,this.isPropagationStopped=Ec,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=et(Ta),qi=y({},Ta,{view:0,detail:0}),Jh=et(qi),Hs,Ls,Qi,il=y({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(Hs=e.screenX-Qi.screenX,Ls=e.screenY-Qi.screenY):Ls=Hs=0,Qi=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),Cc=et(il),Fh=y({},il,{dataTransfer:0}),Wh=et(Fh),$h=y({},qi,{relatedTarget:0}),Ys=et($h),Ph=y({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=et(Ph),tp=y({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=et(tp),ip=y({},Ta,{data:0}),Tc=et(ip),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sp[e])?!!t[e]:!1}function Gs(){return rp}var op=y({},qi,{key:function(e){if(e.key){var t=np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cp=et(op),dp=y({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=et(dp),up=y({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),mp=et(up),fp=y({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),hp=et(fp),pp=y({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gp=et(pp),xp=y({},Ta,{newState:0,oldState:0}),bp=et(xp),yp=[9,13,27,32],qs=Ht&&"CompositionEvent"in window,Xi=null;Ht&&"documentMode"in document&&(Xi=document.documentMode);var vp=Ht&&"TextEvent"in window&&!Xi,Dc=Ht&&(!qs||Xi&&8<Xi&&11>=Xi),Rc=" ",Oc=!1;function Uc(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ii=!1;function wp(e,t){switch(e){case"compositionend":return Bc(t);case"keypress":return t.which!==32?null:(Oc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Oc?null:e;default:return null}}function jp(e,t){if(ii)return e==="compositionend"||!qs&&Uc(e,t)?(e=zc(),Pn=_s=la=null,ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dc&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Hc(e,t,a,i){ti?ai?ai.push(i):ai=[i]:ti=i,t=Ql(t,"onChange"),0<t.length&&(a=new al("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Vi=null,Ii=null;function Np(e){bm(e,0)}function nl(e){var t=Li(e);if(yc(t))return e}function Lc(e,t){if(e==="change")return t}var Yc=!1;if(Ht){var Qs;if(Ht){var Xs="oninput"in document;if(!Xs){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),Xs=typeof Gc.oninput=="function"}Qs=Xs}else Qs=!1;Yc=Qs&&(!document.documentMode||9<document.documentMode)}function qc(){Vi&&(Vi.detachEvent("onpropertychange",Qc),Ii=Vi=null)}function Qc(e){if(e.propertyName==="value"&&nl(Ii)){var t=[];Hc(t,Ii,e,Os(e)),kc(Np,t)}}function Sp(e,t,a){e==="focusin"?(qc(),Vi=t,Ii=a,Vi.attachEvent("onpropertychange",Qc)):e==="focusout"&&qc()}function kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Ii)}function zp(e,t){if(e==="click")return nl(t)}function Ep(e,t){if(e==="input"||e==="change")return nl(t)}function Cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Cp;function Ki(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!ys.call(t,l)||!rt(e[l],t[l]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var a=Xc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xc(a)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wn(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Tp=Ht&&"documentMode"in document&&11>=document.documentMode,ni=null,Is=null,Zi=null,Ks=!1;function Zc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ks||ni==null||ni!==Wn(i)||(i=ni,"selectionStart"in i&&Vs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zi&&Ki(Zi,i)||(Zi=i,i=Ql(Is,"onSelect"),0<i.length&&(t=new al("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=ni)))}function Ma(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var li={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Zs={},Jc={};Ht&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Da(e){if(Zs[e])return Zs[e];if(!li[e])return e;var t=li[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Jc)return Zs[e]=t[a];return e}var Fc=Da("animationend"),Wc=Da("animationiteration"),$c=Da("animationstart"),Mp=Da("transitionrun"),Dp=Da("transitionstart"),Rp=Da("transitioncancel"),Pc=Da("transitionend"),ed=new Map,Js="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Js.push("scrollEnd");function Nt(e,t){ed.set(e,t),Ca(t,[e])}var td=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var a=td.get(e);return a!==void 0?a:(t={value:e,source:t,stack:xc(t)},td.set(e,t),t)}return{value:e,source:t,stack:xc(t)}}var xt=[],si=0,Fs=0;function ll(){for(var e=si,t=Fs=si=0;t<e;){var a=xt[t];xt[t++]=null;var i=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var s=xt[t];if(xt[t++]=null,i!==null&&l!==null){var o=i.pending;o===null?l.next=l:(l.next=o.next,o.next=l),i.pending=l}s!==0&&ad(a,l,s)}}function sl(e,t,a,i){xt[si++]=e,xt[si++]=t,xt[si++]=a,xt[si++]=i,Fs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ws(e,t,a,i){return sl(e,t,a,i),rl(e)}function ri(e,t){return sl(e,null,null,t),rl(e)}function ad(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,i=s.alternate,i!==null&&(i.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-st(a),e=s.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),s):null}function rl(e){if(50<vn)throw vn=0,io=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function Op(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,i){return new Op(e,t,a,i)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function id(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ol(e,t,a,i,l,s){var o=0;if(i=e,typeof e=="function")$s(e)&&(o=1);else if(typeof e=="string")o=B0(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=ot(31,a,t,l),e.elementType=te,e.lanes=s,e;case H:return Ra(a.children,l,s,t);case q:o=8,l|=24;break;case Y:return e=ot(12,a,t,l|2),e.elementType=Y,e.lanes=s,e;case V:return e=ot(13,a,t,l),e.elementType=V,e.lanes=s,e;case de:return e=ot(19,a,t,l),e.elementType=de,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case G:o=10;break e;case L:o=9;break e;case ae:o=11;break e;case fe:o=14;break e;case I:o=16,i=null;break e}o=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=ot(o,a,t,l),t.elementType=e,t.type=i,t.lanes=s,t}function Ra(e,t,a,i){return e=ot(7,e,i,t),e.lanes=a,e}function Ps(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function er(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ci=[],di=0,cl=null,dl=0,bt=[],yt=0,Oa=null,Yt=1,Gt="";function Ua(e,t){ci[di++]=dl,ci[di++]=cl,cl=e,dl=t}function nd(e,t,a){bt[yt++]=Yt,bt[yt++]=Gt,bt[yt++]=Oa,Oa=e;var i=Yt;e=Gt;var l=32-st(i)-1;i&=~(1<<l),a+=1;var s=32-st(t)+l;if(30<s){var o=l-l%5;s=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Yt=1<<32-st(t)+l|a<<l|i,Gt=s+e}else Yt=1<<s|a<<l|i,Gt=e}function tr(e){e.return!==null&&(Ua(e,1),nd(e,1,0))}function ar(e){for(;e===cl;)cl=ci[--di],ci[di]=null,dl=ci[--di],ci[di]=null;for(;e===Oa;)Oa=bt[--yt],bt[yt]=null,Gt=bt[--yt],bt[yt]=null,Yt=bt[--yt],bt[yt]=null}var We=null,Ce=null,pe=!1,Ba=null,Tt=!1,ir=Error(c(519));function _a(e){var t=Error(c(418,""));throw Wi(gt(t,e)),ir}function ld(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Ke]=e,t[Pe]=i,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<jn.length;a++)oe(jn[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),vc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Fn(t);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),jc(t,i.value,i.defaultValue,i.children),Fn(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||jm(t.textContent,a)?(i.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),i.onScroll!=null&&oe("scroll",t),i.onScrollEnd!=null&&oe("scrollend",t),i.onClick!=null&&(t.onclick=Xl),t=!0):t=!1,t||_a(e)}function sd(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:We=We.return}}function Ji(e){if(e!==We)return!1;if(!pe)return sd(e),pe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vo(e.type,e.memoizedProps)),a=!a),a&&Ce&&_a(e),sd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ce=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ce=null}}else t===27?(t=Ce,wa(e.type)?(e=No,No=null,Ce=e):Ce=t):Ce=We?kt(e.stateNode.nextSibling):null;return!0}function Fi(){Ce=We=null,pe=!1}function rd(){var e=Ba;return e!==null&&(it===null?it=e:it.push.apply(it,e),Ba=null),e}function Wi(e){Ba===null?Ba=[e]:Ba.push(e)}var nr=_(null),Ha=null,qt=null;function sa(e,t,a){Q(nr,t._currentValue),t._currentValue=a}function Qt(e){e._currentValue=nr.current,K(nr)}function lr(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function sr(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var o=l.child;s=s.firstContext;e:for(;s!==null;){var u=s;s=l;for(var g=0;g<t.length;g++)if(u.context===t[g]){s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),lr(s.return,a,e),i||(o=null);break e}s=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),lr(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function $i(e,t,a,i){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;rt(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===nt.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(En):e=[En])}l=l.return}e!==null&&sr(t,e,a,i),t.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function La(e){Ha=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return od(Ha,e)}function ml(e,t){return Ha===null&&La(e),od(e,t)}function od(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(e===null)throw Error(c(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return a}var Up=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Bp=r.unstable_scheduleCallback,_p=r.unstable_NormalPriority,Be={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rr(){return{controller:new Up,data:new Map,refCount:0}}function Pi(e){e.refCount--,e.refCount===0&&Bp(_p,function(){e.controller.abort()})}var en=null,or=0,ui=0,mi=null;function Hp(e,t){if(en===null){var a=en=[];or=0,ui=uo(),mi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return or++,t.then(cd,cd),t}function cd(){if(--or===0&&en!==null){mi!==null&&(mi.status="fulfilled");var e=en;en=null,ui=0,mi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lp(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var dd=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hp(e,t),dd!==null&&dd(e,t)};var Ya=_(null);function cr(){var e=Ya.current;return e!==null?e:Ne.pooledCache}function fl(e,t){t===null?Q(Ya,Ya.current):Q(Ya,t.pool)}function ud(){var e=cr();return e===null?null:{parent:Be._currentValue,pool:e}}var tn=Error(c(460)),md=Error(c(474)),hl=Error(c(542)),dr={then:function(){}};function fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function hd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(pl,pl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e;default:if(typeof t.status=="string")t.then(pl,pl);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gd(e),e}throw an=t,tn}}var an=null;function pd(){if(an===null)throw Error(c(459));var e=an;return an=null,e}function gd(e){if(e===tn||e===hl)throw Error(c(483))}var ra=!1;function ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ge&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=rl(e),ad(e,null,a),t}return sl(e,i,t,a),rl(e)}function nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,cc(e,a)}}function fr(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var hr=!1;function ln(){if(hr){var e=mi;if(e!==null)throw e}}function sn(e,t,a,i){hr=!1;var l=e.updateQueue;ra=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var g=u,z=g.next;g.next=null,o===null?s=z:o.next=z,o=g;var D=e.alternate;D!==null&&(D=D.updateQueue,u=D.lastBaseUpdate,u!==o&&(u===null?D.firstBaseUpdate=z:u.next=z,D.lastBaseUpdate=g))}if(s!==null){var U=l.baseState;o=0,D=z=g=null,u=s;do{var E=u.lane&-536870913,T=E!==u.lane;if(T?(ce&E)===E:(i&E)===E){E!==0&&E===ui&&(hr=!0),D!==null&&(D=D.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var ee=e,W=u;E=t;var ve=a;switch(W.tag){case 1:if(ee=W.payload,typeof ee=="function"){U=ee.call(ve,U,E);break e}U=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=W.payload,E=typeof ee=="function"?ee.call(ve,U,E):ee,E==null)break e;U=y({},U,E);break e;case 2:ra=!0}}E=u.callback,E!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[E]:T.push(E))}else T={lane:E,tag:u.tag,payload:u.payload,callback:u.callback,next:null},D===null?(z=D=T,g=U):D=D.next=T,o|=E;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;T=u,u=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);D===null&&(g=U),l.baseState=g,l.firstBaseUpdate=z,l.lastBaseUpdate=D,s===null&&(l.shared.lanes=0),xa|=o,e.lanes=o,e.memoizedState=U}}function xd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function bd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xd(a[e],t)}var fi=_(null),gl=_(0);function yd(e,t){e=Ft,Q(gl,e),Q(fi,t),Ft=e|t.baseLanes}function pr(){Q(gl,Ft),Q(fi,fi.current)}function gr(){Ft=gl.current,K(fi),K(gl)}var da=0,le=null,be=null,Oe=null,xl=!1,hi=!1,Ga=!1,bl=0,rn=0,pi=null,Yp=0;function De(){throw Error(c(321))}function xr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function br(e,t,a,i,l,s){return da=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?au:iu,Ga=!1,s=a(i,l),Ga=!1,hi&&(s=wd(t,a,i,l)),vd(e),s}function vd(e){R.H=Nl;var t=be!==null&&be.next!==null;if(da=0,Oe=be=le=null,xl=!1,rn=0,pi=null,t)throw Error(c(300));e===null||Le||(e=e.dependencies,e!==null&&ul(e)&&(Le=!0))}function wd(e,t,a,i){le=e;var l=0;do{if(hi&&(pi=null),rn=0,hi=!1,25<=l)throw Error(c(301));if(l+=1,Oe=be=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}R.H=Kp,s=t(a,i)}while(hi);return s}function Gp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?on(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(le.flags|=1024),t}function yr(){var e=bl!==0;return bl=0,e}function vr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function wr(e){if(xl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xl=!1}da=0,Oe=be=le=null,hi=!1,rn=bl=0,pi=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?le.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ue(){if(be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Oe===null?le.memoizedState:Oe.next;if(t!==null)Oe=t,be=e;else{if(e===null)throw le.alternate===null?Error(c(467)):Error(c(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Oe===null?le.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function jr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function on(e){var t=rn;return rn+=1,pi===null&&(pi=[]),e=hd(pi,e,t),t=le,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?au:iu),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return on(e);if(e.$$typeof===G)return Ze(e)}throw Error(c(438,String(e)))}function Ar(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=le.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=jr(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=he;return t.index++,a}function Xt(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=Ue();return Nr(t,be,e)}function Nr(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var l=e.baseQueue,s=i.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}t.baseQueue=l=s,i.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var u=o=null,g=null,z=t,D=!1;do{var U=z.lane&-536870913;if(U!==z.lane?(ce&U)===U:(da&U)===U){var E=z.revertLane;if(E===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),U===ui&&(D=!0);else if((da&E)===E){z=z.next,E===ui&&(D=!0);continue}else U={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(u=g=U,o=s):g=g.next=U,le.lanes|=E,xa|=E;U=z.action,Ga&&a(s,U),s=z.hasEagerState?z.eagerState:a(s,U)}else E={lane:U,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(u=g=E,o=s):g=g.next=E,le.lanes|=U,xa|=U;z=z.next}while(z!==null&&z!==t);if(g===null?o=s:g.next=u,!rt(s,e.memoizedState)&&(Le=!0,D&&(a=mi,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=g,i.lastRenderedState=s}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Sr(e){var t=Ue(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);rt(s,t.memoizedState)||(Le=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,i]}function jd(e,t,a){var i=le,l=Ue(),s=pe;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var o=!rt((be||l).memoizedState,a);o&&(l.memoizedState=a,Le=!0),l=l.queue;var u=Sd.bind(null,i,l,e);if(cn(2048,8,u,[e]),l.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,gi(9,wl(),Nd.bind(null,i,l,a,t),null),Ne===null)throw Error(c(349));s||(da&124)!==0||Ad(i,t,a)}return a}function Ad(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=jr(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Nd(e,t,a,i){t.value=a,t.getSnapshot=i,kd(t)&&zd(e)}function Sd(e,t,a){return a(function(){kd(t)&&zd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function zd(e){var t=ri(e,2);t!==null&&ft(t,e,2)}function kr(e){var t=tt();if(typeof e=="function"){var a=e;if(e=a(),Ga){ia(!0);try{a()}finally{ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Ed(e,t,a,i){return e.baseState=a,Nr(e,be,typeof i=="function"?i:Xt)}function qp(e,t,a,i,l){if(Al(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};R.T!==null?a(!0):s.isTransition=!1,i(s),a=t.pending,a===null?(s.next=t.pending=s,Cd(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Cd(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var s=R.T,o={};R.T=o;try{var u=a(l,i),g=R.S;g!==null&&g(o,u),Td(e,t,u)}catch(z){zr(e,t,z)}finally{R.T=s}}else try{s=a(l,i),Td(e,t,s)}catch(z){zr(e,t,z)}}function Td(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Md(e,t,i)},function(i){return zr(e,t,i)}):Md(e,t,a)}function Md(e,t,a){t.status="fulfilled",t.value=a,Dd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Cd(e,a)))}function zr(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Dd(t),t=t.next;while(t!==i)}e.action=null}function Dd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rd(e,t){return t}function Od(e,t){if(pe){var a=Ne.formState;if(a!==null){e:{var i=le;if(pe){if(Ce){t:{for(var l=Ce,s=Tt;l.nodeType!==8;){if(!s){l=null;break t}if(l=kt(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Ce=kt(l.nextSibling),i=l.data==="F!";break e}}_a(i)}i=!1}i&&(t=a[0])}}return a=tt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rd,lastRenderedState:t},a.queue=i,a=Pd.bind(null,le,i),i.dispatch=a,i=kr(!1),s=Dr.bind(null,le,!1,i.queue),i=tt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=qp.bind(null,le,l,s,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function Ud(e){var t=Ue();return Bd(t,be,e)}function Bd(e,t,a){if(t=Nr(e,t,Rd)[0],e=vl(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=on(t)}catch(o){throw o===tn?hl:o}else i=t;t=Ue();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(le.flags|=2048,gi(9,wl(),Qp.bind(null,l,a),null)),[i,s,e]}function Qp(e,t){e.action=t}function _d(e){var t=Ue(),a=be;if(a!==null)return Bd(t,a,e);Ue(),t=t.memoizedState,a=Ue();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function gi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=le.updateQueue,t===null&&(t=jr(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function wl(){return{destroy:void 0,resource:void 0}}function Hd(){return Ue().memoizedState}function jl(e,t,a,i){var l=tt();i=i===void 0?null:i,le.flags|=e,l.memoizedState=gi(1|t,wl(),a,i)}function cn(e,t,a,i){var l=Ue();i=i===void 0?null:i;var s=l.memoizedState.inst;be!==null&&i!==null&&xr(i,be.memoizedState.deps)?l.memoizedState=gi(t,s,a,i):(le.flags|=e,l.memoizedState=gi(1|t,s,a,i))}function Ld(e,t){jl(8390656,8,e,t)}function Yd(e,t){cn(2048,8,e,t)}function Gd(e,t){return cn(4,2,e,t)}function qd(e,t){return cn(4,4,e,t)}function Qd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,a){a=a!=null?a.concat([e]):null,cn(4,4,Qd.bind(null,t,e),a)}function Er(){}function Vd(e,t){var a=Ue();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&xr(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Id(e,t){var a=Ue();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&xr(t,i[1]))return i[0];if(i=e(),Ga){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[i,t],i}function Cr(e,t,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Ju(),le.lanes|=e,xa|=e,a)}function Kd(e,t,a,i){return rt(a,t)?a:fi.current!==null?(e=Cr(e,a,i),rt(e,t)||(Le=!0),e):(da&42)===0?(Le=!0,e.memoizedState=a):(e=Ju(),le.lanes|=e,xa|=e,t)}function Zd(e,t,a,i,l){var s=X.p;X.p=s!==0&&8>s?s:8;var o=R.T,u={};R.T=u,Dr(e,!1,t,a);try{var g=l(),z=R.S;if(z!==null&&z(u,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=Lp(g,i);dn(e,t,D,mt(e))}else dn(e,t,i,mt(e))}catch(U){dn(e,t,{then:function(){},status:"rejected",reason:U},mt())}finally{X.p=s,R.T=o}}function Xp(){}function Tr(e,t,a,i){if(e.tag!==5)throw Error(c(476));var l=Jd(e).queue;Zd(e,l,t,P,a===null?Xp:function(){return Fd(e),a(i)})}function Jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Fd(e){var t=Jd(e).next.queue;dn(e,t,{},mt())}function Mr(){return Ze(En)}function Wd(){return Ue().memoizedState}function $d(){return Ue().memoizedState}function Vp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=oa(a);var i=ca(t,e,a);i!==null&&(ft(i,t,a),nn(i,t,a)),t={cache:rr()},e.payload=t;return}t=t.return}}function Ip(e,t,a){var i=mt();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?eu(t,a):(a=Ws(e,t,a,i),a!==null&&(ft(a,e,i),tu(a,t,i)))}function Pd(e,t,a){var i=mt();dn(e,t,a,i)}function dn(e,t,a,i){var l={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))eu(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,u=s(o,a);if(l.hasEagerState=!0,l.eagerState=u,rt(u,o))return sl(e,t,l,0),Ne===null&&ll(),!1}catch{}finally{}if(a=Ws(e,t,l,i),a!==null)return ft(a,e,i),tu(a,t,i),!0}return!1}function Dr(e,t,a,i){if(i={lane:2,revertLane:uo(),action:i,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(t)throw Error(c(479))}else t=Ws(e,a,i,2),t!==null&&ft(t,e,2)}function Al(e){var t=e.alternate;return e===le||t!==null&&t===le}function eu(e,t){hi=xl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function tu(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,cc(e,a)}}var Nl={readContext:Ze,use:yl,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},au={readContext:Ze,use:yl,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ld,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,jl(4194308,4,Qd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){jl(4,2,e,t)},useMemo:function(e,t){var a=tt();t=t===void 0?null:t;var i=e();if(Ga){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=tt();if(a!==void 0){var l=a(t);if(Ga){ia(!0);try{a(t)}finally{ia(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Ip.bind(null,le,e),[i.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=kr(e);var t=e.queue,a=Pd.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Er,useDeferredValue:function(e,t){var a=tt();return Cr(a,e,t)},useTransition:function(){var e=kr(!1);return e=Zd.bind(null,le,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=le,l=tt();if(pe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ne===null)throw Error(c(349));(ce&124)!==0||Ad(i,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,Ld(Sd.bind(null,i,s,e),[e]),i.flags|=2048,gi(9,wl(),Nd.bind(null,i,s,a,t),null),a},useId:function(){var e=tt(),t=Ne.identifierPrefix;if(pe){var a=Gt,i=Yt;a=(i&~(1<<32-st(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=bl++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Yp++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Mr,useFormState:Od,useActionState:Od,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Dr.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ar,useCacheRefresh:function(){return tt().memoizedState=Vp.bind(null,le)}},iu={readContext:Ze,use:yl,useCallback:Vd,useContext:Ze,useEffect:Yd,useImperativeHandle:Xd,useInsertionEffect:Gd,useLayoutEffect:qd,useMemo:Id,useReducer:vl,useRef:Hd,useState:function(){return vl(Xt)},useDebugValue:Er,useDeferredValue:function(e,t){var a=Ue();return Kd(a,be.memoizedState,e,t)},useTransition:function(){var e=vl(Xt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:jd,useId:Wd,useHostTransitionStatus:Mr,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,t){var a=Ue();return Ed(a,be,e,t)},useMemoCache:Ar,useCacheRefresh:$d},Kp={readContext:Ze,use:yl,useCallback:Vd,useContext:Ze,useEffect:Yd,useImperativeHandle:Xd,useInsertionEffect:Gd,useLayoutEffect:qd,useMemo:Id,useReducer:Sr,useRef:Hd,useState:function(){return Sr(Xt)},useDebugValue:Er,useDeferredValue:function(e,t){var a=Ue();return be===null?Cr(a,e,t):Kd(a,be.memoizedState,e,t)},useTransition:function(){var e=Sr(Xt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:on(e),t]},useSyncExternalStore:jd,useId:Wd,useHostTransitionStatus:Mr,useFormState:_d,useActionState:_d,useOptimistic:function(e,t){var a=Ue();return be!==null?Ed(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:$d},xi=null,un=0;function Sl(e){var t=un;return un+=1,xi===null&&(xi=[]),hd(xi,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function kl(e,t){throw t.$$typeof===k?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nu(e){var t=e._init;return t(e._payload)}function lu(e){function t(j,v){if(e){var S=j.deletions;S===null?(j.deletions=[v],j.flags|=16):S.push(v)}}function a(j,v){if(!e)return null;for(;v!==null;)t(j,v),v=v.sibling;return null}function i(j){for(var v=new Map;j!==null;)j.key!==null?v.set(j.key,j):v.set(j.index,j),j=j.sibling;return v}function l(j,v){return j=Lt(j,v),j.index=0,j.sibling=null,j}function s(j,v,S){return j.index=S,e?(S=j.alternate,S!==null?(S=S.index,S<v?(j.flags|=67108866,v):S):(j.flags|=67108866,v)):(j.flags|=1048576,v)}function o(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function u(j,v,S,O){return v===null||v.tag!==6?(v=Ps(S,j.mode,O),v.return=j,v):(v=l(v,S),v.return=j,v)}function g(j,v,S,O){var Z=S.type;return Z===H?D(j,v,S.props.children,O,S.key):v!==null&&(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===I&&nu(Z)===v.type)?(v=l(v,S.props),mn(v,S),v.return=j,v):(v=ol(S.type,S.key,S.props,null,j.mode,O),mn(v,S),v.return=j,v)}function z(j,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=er(S,j.mode,O),v.return=j,v):(v=l(v,S.children||[]),v.return=j,v)}function D(j,v,S,O,Z){return v===null||v.tag!==7?(v=Ra(S,j.mode,O,Z),v.return=j,v):(v=l(v,S),v.return=j,v)}function U(j,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ps(""+v,j.mode,S),v.return=j,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case N:return S=ol(v.type,v.key,v.props,null,j.mode,S),mn(S,v),S.return=j,S;case M:return v=er(v,j.mode,S),v.return=j,v;case I:var O=v._init;return v=O(v._payload),U(j,v,S)}if(Ie(v)||Me(v))return v=Ra(v,j.mode,S,null),v.return=j,v;if(typeof v.then=="function")return U(j,Sl(v),S);if(v.$$typeof===G)return U(j,ml(j,v),S);kl(j,v)}return null}function E(j,v,S,O){var Z=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:u(j,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case N:return S.key===Z?g(j,v,S,O):null;case M:return S.key===Z?z(j,v,S,O):null;case I:return Z=S._init,S=Z(S._payload),E(j,v,S,O)}if(Ie(S)||Me(S))return Z!==null?null:D(j,v,S,O,null);if(typeof S.then=="function")return E(j,v,Sl(S),O);if(S.$$typeof===G)return E(j,v,ml(j,S),O);kl(j,S)}return null}function T(j,v,S,O,Z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(S)||null,u(v,j,""+O,Z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case N:return j=j.get(O.key===null?S:O.key)||null,g(v,j,O,Z);case M:return j=j.get(O.key===null?S:O.key)||null,z(v,j,O,Z);case I:var se=O._init;return O=se(O._payload),T(j,v,S,O,Z)}if(Ie(O)||Me(O))return j=j.get(S)||null,D(v,j,O,Z,null);if(typeof O.then=="function")return T(j,v,S,Sl(O),Z);if(O.$$typeof===G)return T(j,v,S,ml(v,O),Z);kl(v,O)}return null}function ee(j,v,S,O){for(var Z=null,se=null,J=v,$=v=0,Ge=null;J!==null&&$<S.length;$++){J.index>$?(Ge=J,J=null):Ge=J.sibling;var me=E(j,J,S[$],O);if(me===null){J===null&&(J=Ge);break}e&&J&&me.alternate===null&&t(j,J),v=s(me,v,$),se===null?Z=me:se.sibling=me,se=me,J=Ge}if($===S.length)return a(j,J),pe&&Ua(j,$),Z;if(J===null){for(;$<S.length;$++)J=U(j,S[$],O),J!==null&&(v=s(J,v,$),se===null?Z=J:se.sibling=J,se=J);return pe&&Ua(j,$),Z}for(J=i(J);$<S.length;$++)Ge=T(J,j,$,S[$],O),Ge!==null&&(e&&Ge.alternate!==null&&J.delete(Ge.key===null?$:Ge.key),v=s(Ge,v,$),se===null?Z=Ge:se.sibling=Ge,se=Ge);return e&&J.forEach(function(ka){return t(j,ka)}),pe&&Ua(j,$),Z}function W(j,v,S,O){if(S==null)throw Error(c(151));for(var Z=null,se=null,J=v,$=v=0,Ge=null,me=S.next();J!==null&&!me.done;$++,me=S.next()){J.index>$?(Ge=J,J=null):Ge=J.sibling;var ka=E(j,J,me.value,O);if(ka===null){J===null&&(J=Ge);break}e&&J&&ka.alternate===null&&t(j,J),v=s(ka,v,$),se===null?Z=ka:se.sibling=ka,se=ka,J=Ge}if(me.done)return a(j,J),pe&&Ua(j,$),Z;if(J===null){for(;!me.done;$++,me=S.next())me=U(j,me.value,O),me!==null&&(v=s(me,v,$),se===null?Z=me:se.sibling=me,se=me);return pe&&Ua(j,$),Z}for(J=i(J);!me.done;$++,me=S.next())me=T(J,j,$,me.value,O),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?$:me.key),v=s(me,v,$),se===null?Z=me:se.sibling=me,se=me);return e&&J.forEach(function(Z0){return t(j,Z0)}),pe&&Ua(j,$),Z}function ve(j,v,S,O){if(typeof S=="object"&&S!==null&&S.type===H&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case N:e:{for(var Z=S.key;v!==null;){if(v.key===Z){if(Z=S.type,Z===H){if(v.tag===7){a(j,v.sibling),O=l(v,S.props.children),O.return=j,j=O;break e}}else if(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===I&&nu(Z)===v.type){a(j,v.sibling),O=l(v,S.props),mn(O,S),O.return=j,j=O;break e}a(j,v);break}else t(j,v);v=v.sibling}S.type===H?(O=Ra(S.props.children,j.mode,O,S.key),O.return=j,j=O):(O=ol(S.type,S.key,S.props,null,j.mode,O),mn(O,S),O.return=j,j=O)}return o(j);case M:e:{for(Z=S.key;v!==null;){if(v.key===Z)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){a(j,v.sibling),O=l(v,S.children||[]),O.return=j,j=O;break e}else{a(j,v);break}else t(j,v);v=v.sibling}O=er(S,j.mode,O),O.return=j,j=O}return o(j);case I:return Z=S._init,S=Z(S._payload),ve(j,v,S,O)}if(Ie(S))return ee(j,v,S,O);if(Me(S)){if(Z=Me(S),typeof Z!="function")throw Error(c(150));return S=Z.call(S),W(j,v,S,O)}if(typeof S.then=="function")return ve(j,v,Sl(S),O);if(S.$$typeof===G)return ve(j,v,ml(j,S),O);kl(j,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(a(j,v.sibling),O=l(v,S),O.return=j,j=O):(a(j,v),O=Ps(S,j.mode,O),O.return=j,j=O),o(j)):a(j,v)}return function(j,v,S,O){try{un=0;var Z=ve(j,v,S,O);return xi=null,Z}catch(J){if(J===tn||J===hl)throw J;var se=ot(29,J,null,j.mode);return se.lanes=O,se.return=j,se}finally{}}}var bi=lu(!0),su=lu(!1),vt=_(null),Mt=null;function ua(e){var t=e.alternate;Q(_e,_e.current&1),Q(vt,e),Mt===null&&(t===null||fi.current!==null||t.memoizedState!==null)&&(Mt=e)}function ru(e){if(e.tag===22){if(Q(_e,_e.current),Q(vt,e),Mt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Mt=e)}}else ma()}function ma(){Q(_e,_e.current),Q(vt,vt.current)}function Vt(e){K(vt),Mt===e&&(Mt=null),K(_e)}var _e=_(0);function zl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ao(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Rr(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Or={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=mt(),l=oa(i);l.payload=t,a!=null&&(l.callback=a),t=ca(e,l,i),t!==null&&(ft(t,e,i),nn(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=mt(),l=oa(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ca(e,l,i),t!==null&&(ft(t,e,i),nn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),i=oa(a);i.tag=2,t!=null&&(i.callback=t),t=ca(e,i,a),t!==null&&(ft(t,e,a),nn(t,e,a))}};function ou(e,t,a,i,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ki(a,i)||!Ki(l,s):!0}function cu(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Or.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function du(e){El(e)}function uu(e){console.error(e)}function mu(e){El(e)}function Cl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function fu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ur(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,t)},a}function hu(e){return e=oa(e),e.tag=3,e}function pu(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;e.payload=function(){return l(s)},e.callback=function(){fu(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){fu(t,a,i),typeof l!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function Zp(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&$i(t,a,l,!0),a=vt.current,a!==null){switch(a.tag){case 13:return Mt===null?lo():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===dr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),ro(e,i,l)),!1;case 22:return a.flags|=65536,i===dr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),ro(e,i,l)),!1}throw Error(c(435,a.tag))}return ro(e,i,l),lo(),!1}if(pe)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==ir&&(e=Error(c(422),{cause:i}),Wi(gt(e,a)))):(i!==ir&&(t=Error(c(423),{cause:i}),Wi(gt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=gt(i,a),l=Ur(e.stateNode,i,l),fr(e,l),Te!==4&&(Te=2)),!1;var s=Error(c(520),{cause:i});if(s=gt(s,a),yn===null?yn=[s]:yn.push(s),Te!==4&&(Te=2),t===null)return!0;i=gt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ur(a.stateNode,i,e),fr(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=hu(l),pu(l,e,a,i),fr(a,l),!1}a=a.return}while(a!==null);return!1}var gu=Error(c(461)),Le=!1;function qe(e,t,a,i){t.child=e===null?su(t,null,a,i):bi(t,e.child,a,i)}function xu(e,t,a,i,l){a=a.render;var s=t.ref;if("ref"in i){var o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}else o=i;return La(t),i=br(e,t,a,o,s,l),u=yr(),e!==null&&!Le?(vr(e,t,l),It(e,t,l)):(pe&&u&&tr(t),t.flags|=1,qe(e,t,i,l),t.child)}function bu(e,t,a,i,l){if(e===null){var s=a.type;return typeof s=="function"&&!$s(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,yu(e,t,s,i,l)):(e=ol(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Qr(e,l)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:Ki,a(o,i)&&e.ref===t.ref)return It(e,t,l)}return t.flags|=1,e=Lt(s,i),e.ref=t.ref,e.return=t,t.child=e}function yu(e,t,a,i,l){if(e!==null){var s=e.memoizedProps;if(Ki(s,i)&&e.ref===t.ref)if(Le=!1,t.pendingProps=i=s,Qr(e,l))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,It(e,t,l)}return Br(e,t,a,i,l)}function vu(e,t,a){var i=t.pendingProps,l=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return wu(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(t,s!==null?s.cachePool:null),s!==null?yd(t,s):pr(),ru(t);else return t.lanes=t.childLanes=536870912,wu(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?(fl(t,s.cachePool),yd(t,s),ma(),t.memoizedState=null):(e!==null&&fl(t,null),pr(),ma());return qe(e,t,l,a),t.child}function wu(e,t,a,i){var l=cr();return l=l===null?null:{parent:Be._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&fl(t,null),pr(),ru(t),e!==null&&$i(e,t,i,!0),null}function Tl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Br(e,t,a,i,l){return La(t),a=br(e,t,a,i,void 0,l),i=yr(),e!==null&&!Le?(vr(e,t,l),It(e,t,l)):(pe&&i&&tr(t),t.flags|=1,qe(e,t,a,l),t.child)}function ju(e,t,a,i,l,s){return La(t),t.updateQueue=null,a=wd(t,i,a,l),vd(e),i=yr(),e!==null&&!Le?(vr(e,t,s),It(e,t,s)):(pe&&i&&tr(t),t.flags|=1,qe(e,t,a,s),t.child)}function Au(e,t,a,i,l){if(La(t),t.stateNode===null){var s=oi,o=a.contextType;typeof o=="object"&&o!==null&&(s=Ze(o)),s=new a(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Or,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},ur(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?Ze(o):oi,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Rr(t,a,o,i),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Or.enqueueReplaceState(s,s.state,null),sn(t,i,s,l),ln(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var u=t.memoizedProps,g=qa(a,u);s.props=g;var z=s.context,D=a.contextType;o=oi,typeof D=="object"&&D!==null&&(o=Ze(D));var U=a.getDerivedStateFromProps;D=typeof U=="function"||typeof s.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,D||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u||z!==o)&&cu(t,s,i,o),ra=!1;var E=t.memoizedState;s.state=E,sn(t,i,s,l),ln(),z=t.memoizedState,u||E!==z||ra?(typeof U=="function"&&(Rr(t,a,U,i),z=t.memoizedState),(g=ra||ou(t,a,g,i,E,z,o))?(D||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),s.props=i,s.state=z,s.context=o,i=g):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,mr(e,t),o=t.memoizedProps,D=qa(a,o),s.props=D,U=t.pendingProps,E=s.context,z=a.contextType,g=oi,typeof z=="object"&&z!==null&&(g=Ze(z)),u=a.getDerivedStateFromProps,(z=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==U||E!==g)&&cu(t,s,i,g),ra=!1,E=t.memoizedState,s.state=E,sn(t,i,s,l),ln();var T=t.memoizedState;o!==U||E!==T||ra||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof u=="function"&&(Rr(t,a,u,i),T=t.memoizedState),(D=ra||ou(t,a,D,i,E,T,g)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,T,g),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,T,g)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=T),s.props=i,s.state=T,s.context=g,i=D):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Tl(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=bi(t,e.child,null,l),t.child=bi(t,null,a,l)):qe(e,t,a,l),t.memoizedState=s.state,e=t.child):e=It(e,t,l),e}function Nu(e,t,a,i){return Fi(),t.flags|=256,qe(e,t,a,i),t.child}var _r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hr(e){return{baseLanes:e,cachePool:ud()}}function Lr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function Su(e,t,a){var i=t.pendingProps,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(l?ua(t):ma(),pe){var u=Ce,g;if(g=u){e:{for(g=u,u=Tt;g.nodeType!==8;){if(!u){u=null;break e}if(g=kt(g.nextSibling),g===null){u=null;break e}}u=g}u!==null?(t.memoizedState={dehydrated:u,treeContext:Oa!==null?{id:Yt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},g=ot(18,null,null,0),g.stateNode=u,g.return=t,t.child=g,We=t,Ce=null,g=!0):g=!1}g||_a(t)}if(u=t.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return Ao(u)?t.lanes=32:t.lanes=536870912,null;Vt(t)}return u=i.children,i=i.fallback,l?(ma(),l=t.mode,u=Ml({mode:"hidden",children:u},l),i=Ra(i,l,a,null),u.return=t,i.return=t,u.sibling=i,t.child=u,l=t.child,l.memoizedState=Hr(a),l.childLanes=Lr(e,o,a),t.memoizedState=_r,i):(ua(t),Yr(t,u))}if(g=e.memoizedState,g!==null&&(u=g.dehydrated,u!==null)){if(s)t.flags&256?(ua(t),t.flags&=-257,t=Gr(e,t,a)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),l=i.fallback,u=t.mode,i=Ml({mode:"visible",children:i.children},u),l=Ra(l,u,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,bi(t,e.child,null,a),i=t.child,i.memoizedState=Hr(a),i.childLanes=Lr(e,o,a),t.memoizedState=_r,t=l);else if(ua(t),Ao(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var z=o.dgst;o=z,i=Error(c(419)),i.stack="",i.digest=o,Wi({value:i,source:null,stack:null}),t=Gr(e,t,a)}else if(Le||$i(e,t,a,!1),o=(a&e.childLanes)!==0,Le||o){if(o=Ne,o!==null&&(i=a&-a,i=(i&42)!==0?1:As(i),i=(i&(o.suspendedLanes|a))!==0?0:i,i!==0&&i!==g.retryLane))throw g.retryLane=i,ri(e,i),ft(o,e,i),gu;u.data==="$?"||lo(),t=Gr(e,t,a)}else u.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ce=kt(u.nextSibling),We=t,pe=!0,Ba=null,Tt=!1,e!==null&&(bt[yt++]=Yt,bt[yt++]=Gt,bt[yt++]=Oa,Yt=e.id,Gt=e.overflow,Oa=t),t=Yr(t,i.children),t.flags|=4096);return t}return l?(ma(),l=i.fallback,u=t.mode,g=e.child,z=g.sibling,i=Lt(g,{mode:"hidden",children:i.children}),i.subtreeFlags=g.subtreeFlags&65011712,z!==null?l=Lt(z,l):(l=Ra(l,u,a,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,u=e.child.memoizedState,u===null?u=Hr(a):(g=u.cachePool,g!==null?(z=Be._currentValue,g=g.parent!==z?{parent:z,pool:z}:g):g=ud(),u={baseLanes:u.baseLanes|a,cachePool:g}),l.memoizedState=u,l.childLanes=Lr(e,o,a),t.memoizedState=_r,i):(ua(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Yr(e,t){return t=Ml({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ml(e,t){return e=ot(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Gr(e,t,a){return bi(t,e.child,null,a),e=Yr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ku(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),lr(e.return,t,a)}function qr(e,t,a,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=a,s.tailMode=l)}function zu(e,t,a){var i=t.pendingProps,l=i.revealOrder,s=i.tail;if(qe(e,t,i.children,a),i=_e.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,a,t);else if(e.tag===19)ku(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(Q(_e,i),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),qr(t,!1,l,a,s);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}qr(t,!0,a,null,s);break;case"together":qr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($i(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Qr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function Jp(e,t,a){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),sa(t,Be,e.memoizedState.cache),Fi();break;case 27:case 5:bs(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Su(e,t,a):(ua(t),e=It(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||($i(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return zu(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Q(_e,_e.current),i)break;return null;case 22:case 23:return t.lanes=0,vu(e,t,a);case 24:sa(t,Be,e.memoizedState.cache)}return It(e,t,a)}function Eu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!Qr(e,a)&&(t.flags&128)===0)return Le=!1,Jp(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,pe&&(t.flags&1048576)!==0&&nd(t,dl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")$s(i)?(e=qa(i,e),t.tag=1,t=Au(null,t,i,e,a)):(t.tag=0,t=Br(null,t,i,e,a));else{if(i!=null){if(l=i.$$typeof,l===ae){t.tag=11,t=xu(null,t,i,e,a);break e}else if(l===fe){t.tag=14,t=bu(null,t,i,e,a);break e}}throw t=$e(i)||i,Error(c(306,t,""))}}return t;case 0:return Br(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=qa(i,t.pendingProps),Au(e,t,i,l,a);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var s=t.memoizedState;l=s.element,mr(e,t),sn(t,i,null,a);var o=t.memoizedState;if(i=o.cache,sa(t,Be,i),i!==s.cache&&sr(t,[Be],a,!0),ln(),i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Nu(e,t,i,a);break e}else if(i!==l){l=gt(Error(c(424)),t),Wi(l),t=Nu(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=kt(e.firstChild),We=t,pe=!0,Ba=null,Tt=!0,a=su(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fi(),i===l){t=It(e,t,a);break e}qe(e,t,i,a)}t=t.child}return t;case 26:return Tl(e,t),e===null?(a=Dm(t.type,null,t.pendingProps,null))?t.memoizedState=a:pe||(a=t.type,e=t.pendingProps,i=Vl(ie.current).createElement(a),i[Ke]=t,i[Pe]=e,Xe(i,a,e),He(i),t.stateNode=i):t.memoizedState=Dm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bs(t),e===null&&pe&&(i=t.stateNode=Cm(t.type,t.pendingProps,ie.current),We=t,Tt=!0,l=Ce,wa(t.type)?(No=l,Ce=kt(i.firstChild)):Ce=l),qe(e,t,t.pendingProps.children,a),Tl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((l=i=Ce)&&(i=A0(i,t.type,t.pendingProps,Tt),i!==null?(t.stateNode=i,We=t,Ce=kt(i.firstChild),Tt=!1,l=!0):l=!1),l||_a(t)),bs(t),l=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,i=s.children,vo(l,s)?i=null:o!==null&&vo(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=br(e,t,Gp,null,null,a),En._currentValue=l),Tl(e,t),qe(e,t,i,a),t.child;case 6:return e===null&&pe&&((e=a=Ce)&&(a=N0(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,We=t,Ce=null,e=!0):e=!1),e||_a(t)),null;case 13:return Su(e,t,a);case 4:return Se(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=bi(t,null,i,a):qe(e,t,i,a),t.child;case 11:return xu(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,sa(t,t.type,i.value),qe(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,La(t),l=Ze(l),i=i(l),t.flags|=1,qe(e,t,i,a),t.child;case 14:return bu(e,t,t.type,t.pendingProps,a);case 15:return yu(e,t,t.type,t.pendingProps,a);case 19:return zu(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=Ml(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Lt(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return vu(e,t,a);case 24:return La(t),i=Ze(Be),e===null?(l=cr(),l===null&&(l=Ne,s=rr(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:i,cache:l},ur(t),sa(t,Be,l)):((e.lanes&a)!==0&&(mr(e,t),sn(t,null,null,a),ln()),l=e.memoizedState,s=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),sa(t,Be,i)):(i=s.cache,sa(t,Be,i),i!==l.cache&&sr(t,[Be],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Kt(e){e.flags|=4}function Cu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_m(t)){if(t=vt.current,t!==null&&((ce&4194048)===ce?Mt!==null:(ce&62914560)!==ce&&(ce&536870912)===0||t!==Mt))throw an=dr,md;e.flags|=8192}}function Dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rc():536870912,e.lanes|=t,ji|=t)}function fn(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Fp(e,t,a){var i=t.pendingProps;switch(ar(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Qt(Be),aa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rd())),ze(t),null;case 26:return a=t.memoizedState,e===null?(Kt(t),a!==null?(ze(t),Cu(t,a)):(ze(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Kt(t),ze(t),Cu(t,a)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==i&&Kt(t),ze(t),t.flags&=-16777217),null;case 27:Qn(t),a=ie.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Kt(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return ze(t),null}e=F.current,Ji(t)?ld(t):(e=Cm(l,i,a),t.stateNode=e,Kt(t))}return ze(t),null;case 5:if(Qn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Kt(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return ze(t),null}if(e=F.current,Ji(t))ld(t);else{switch(l=Vl(ie.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(a,{is:i.is}):l.createElement(a)}}e[Ke]=t,e[Pe]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Xe(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Kt(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Kt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,Ji(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=We,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||jm(e.nodeValue,a)),e||_a(t)}else e=Vl(e).createTextNode(i),e[Ke]=t,t.stateNode=e}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ji(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ke]=t}else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=rd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Vt(t),t):(Vt(t),null)}if(Vt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Dl(t,t.updateQueue),ze(t),null;case 4:return aa(),e===null&&po(t.stateNode.containerInfo),ze(t),null;case 10:return Qt(t.type),ze(t),null;case 19:if(K(_e),l=t.memoizedState,l===null)return ze(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)fn(l,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=zl(e),s!==null){for(t.flags|=128,fn(l,!1),e=s.updateQueue,t.updateQueue=e,Dl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)id(a,e),a=a.sibling;return Q(_e,_e.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ct()>Ul&&(t.flags|=128,i=!0,fn(l,!1),t.lanes=4194304)}else{if(!i)if(e=zl(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Dl(t,e),fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!pe)return ze(t),null}else 2*Ct()-l.renderingStartTime>Ul&&a!==536870912&&(t.flags|=128,i=!0,fn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ct(),t.sibling=null,e=_e.current,Q(_e,i?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Vt(t),gr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Dl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&K(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Be),ze(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Wp(e,t){switch(ar(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Be),aa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qn(t),null;case 13:if(Vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(_e),null;case 4:return aa(),null;case 10:return Qt(t.type),null;case 22:case 23:return Vt(t),gr(),e!==null&&K(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Be),null;case 25:return null;default:return null}}function Tu(e,t){switch(ar(t),t.tag){case 3:Qt(Be),aa();break;case 26:case 27:case 5:Qn(t);break;case 4:aa();break;case 13:Vt(t);break;case 19:K(_e);break;case 10:Qt(t.type);break;case 22:case 23:Vt(t),gr(),e!==null&&K(Ya);break;case 24:Qt(Be)}}function hn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var s=a.create,o=a.inst;i=s(),o.destroy=i}a=a.next}while(a!==l)}}catch(u){Ae(t,t.return,u)}}function fa(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&e)===e){var o=i.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var g=a,z=u;try{z()}catch(D){Ae(l,g,D)}}}i=i.next}while(i!==s)}}catch(D){Ae(t,t.return,D)}}function Mu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{bd(t,a)}catch(i){Ae(e,e.return,i)}}}function Du(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Ae(e,t,i)}}function pn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Ae(e,t,l)}}function Dt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Ae(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ae(e,t,l)}else a.current=null}function Ru(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Ae(e,e.return,l)}}function Xr(e,t,a){try{var i=e.stateNode;b0(i,e.type,a,t),i[Pe]=t}catch(l){Ae(e,e.return,l)}}function Ou(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Vr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ir(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xl));else if(i!==4&&(i===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ir(e,t,a),e=e.sibling;e!==null;)Ir(e,t,a),e=e.sibling}function Rl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,t,a),e=e.sibling;e!==null;)Rl(e,t,a),e=e.sibling}function Uu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Xe(t,i,a),t[Ke]=e,t[Pe]=a}catch(s){Ae(e,e.return,s)}}var Zt=!1,Re=!1,Kr=!1,Bu=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function $p(e,t){if(e=e.containerInfo,bo=Wl,e=Kc(e),Vs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,u=-1,g=-1,z=0,D=0,U=e,E=null;t:for(;;){for(var T;U!==a||l!==0&&U.nodeType!==3||(u=o+l),U!==s||i!==0&&U.nodeType!==3||(g=o+i),U.nodeType===3&&(o+=U.nodeValue.length),(T=U.firstChild)!==null;)E=U,U=T;for(;;){if(U===e)break t;if(E===a&&++z===l&&(u=o),E===s&&++D===i&&(g=o),(T=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=T}a=u===-1||g===-1?null:{start:u,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(yo={focusedElem:e,selectionRange:a},Wl=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,i=a.stateNode;try{var ee=qa(a.type,l,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(ee,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(W){Ae(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function _u(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),i&4&&hn(5,a);break;case 1:if(ha(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ae(a,a.return,o)}else{var l=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ae(a,a.return,o)}}i&64&&Mu(a),i&512&&pn(a,a.return);break;case 3:if(ha(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{bd(e,t)}catch(o){Ae(a,a.return,o)}}break;case 27:t===null&&i&4&&Uu(a);case 26:case 5:ha(e,a),t===null&&i&4&&Ru(a),i&512&&pn(a,a.return);break;case 12:ha(e,a);break;case 13:ha(e,a),i&4&&Yu(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=r0.bind(null,a),S0(e,a))));break;case 22:if(i=a.memoizedState!==null||Zt,!i){t=t!==null&&t.memoizedState!==null||Re,l=Zt;var s=Re;Zt=i,(Re=t)&&!s?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),Zt=l,Re=s}break;case 30:break;default:ha(e,a)}}function Hu(e){var t=e.alternate;t!==null&&(e.alternate=null,Hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ks(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,at=!1;function Jt(e,t,a){for(a=a.child;a!==null;)Lu(e,t,a),a=a.sibling}function Lu(e,t,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 26:Re||Dt(a,t),Jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Dt(a,t);var i=ke,l=at;wa(a.type)&&(ke=a.stateNode,at=!1),Jt(e,t,a),Nn(a.stateNode),ke=i,at=l;break;case 5:Re||Dt(a,t);case 6:if(i=ke,l=at,ke=null,Jt(e,t,a),ke=i,at=l,ke!==null)if(at)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(s){Ae(a,t,s)}else try{ke.removeChild(a.stateNode)}catch(s){Ae(a,t,s)}break;case 18:ke!==null&&(at?(e=ke,zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dn(e)):zm(ke,a.stateNode));break;case 4:i=ke,l=at,ke=a.stateNode.containerInfo,at=!0,Jt(e,t,a),ke=i,at=l;break;case 0:case 11:case 14:case 15:Re||fa(2,a,t),Re||fa(4,a,t),Jt(e,t,a);break;case 1:Re||(Dt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Du(a,t,i)),Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:Re=(i=Re)||a.memoizedState!==null,Jt(e,t,a),Re=i;break;default:Jt(e,t,a)}}function Yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dn(e)}catch(a){Ae(t,t.return,a)}}function Pp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bu),t;default:throw Error(c(435,e.tag))}}function Zr(e,t){var a=Pp(e);t.forEach(function(i){var l=o0.bind(null,e,i);a.has(i)||(a.add(i),i.then(l,l))})}function ct(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],s=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(wa(u.type)){ke=u.stateNode,at=!1;break e}break;case 5:ke=u.stateNode,at=!1;break e;case 3:case 4:ke=u.stateNode.containerInfo,at=!0;break e}u=u.return}if(ke===null)throw Error(c(160));Lu(s,o,l),ke=null,at=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}var St=null;function Gu(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),dt(e),i&4&&(fa(3,e,e.return),hn(3,e),fa(5,e,e.return));break;case 1:ct(t,e),dt(e),i&512&&(Re||a===null||Dt(a,a.return)),i&64&&Zt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=St;if(ct(t,e),dt(e),i&512&&(Re||a===null||Dt(a,a.return)),i&4){var s=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Hi]||s[Ke]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),Xe(s,i,a),s[Ke]=e,He(s),i=s;break e;case"link":var o=Um("link","href",l).get(i+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(s=o[u],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}s=l.createElement(i),Xe(s,i,a),l.head.appendChild(s);break;case"meta":if(o=Um("meta","content",l).get(i+(a.content||""))){for(u=0;u<o.length;u++)if(s=o[u],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}s=l.createElement(i),Xe(s,i,a),l.head.appendChild(s);break;default:throw Error(c(468,i))}s[Ke]=e,He(s),i=s}e.stateNode=i}else Bm(l,e.type,e.stateNode);else e.stateNode=Om(l,i,e.memoizedProps);else s!==i?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,i===null?Bm(l,e.type,e.stateNode):Om(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Xr(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),dt(e),i&512&&(Re||a===null||Dt(a,a.return)),a!==null&&i&4&&Xr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),dt(e),i&512&&(Re||a===null||Dt(a,a.return)),e.flags&32){l=e.stateNode;try{ei(l,"")}catch(T){Ae(e,e.return,T)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Xr(e,l,a!==null?a.memoizedProps:l)),i&1024&&(Kr=!0);break;case 6:if(ct(t,e),dt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(T){Ae(e,e.return,T)}}break;case 3:if(Zl=null,l=St,St=Il(t.containerInfo),ct(t,e),St=l,dt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(T){Ae(e,e.return,T)}Kr&&(Kr=!1,qu(e));break;case 4:i=St,St=Il(e.stateNode.containerInfo),ct(t,e),dt(e),St=i;break;case 12:ct(t,e),dt(e);break;case 13:ct(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(eo=Ct()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zr(e,i)));break;case 22:l=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,z=Zt,D=Re;if(Zt=z||l,Re=D||g,ct(t,e),Re=D,Zt=z,dt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||g||Zt||Re||Qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(s=g.stateNode,l)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=g.stateNode;var U=g.memoizedProps.style,E=U!=null&&U.hasOwnProperty("display")?U.display:null;u.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){Ae(g,g.return,T)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(T){Ae(g,g.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Zr(e,a))));break;case 19:ct(t,e),dt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zr(e,i)));break;case 30:break;case 21:break;default:ct(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Ou(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,s=Vr(e);Rl(e,s,l);break;case 5:var o=a.stateNode;a.flags&32&&(ei(o,""),a.flags&=-33);var u=Vr(e);Rl(e,u,o);break;case 3:case 4:var g=a.stateNode.containerInfo,z=Vr(e);Ir(e,z,g);break;default:throw Error(c(161))}}catch(D){Ae(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_u(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fa(4,t,t.return),Qa(t);break;case 1:Dt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Du(t,t.return,a),Qa(t);break;case 27:Nn(t.stateNode);case 26:case 5:Dt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function pa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:pa(l,s,a),hn(4,s);break;case 1:if(pa(l,s,a),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){Ae(i,i.return,z)}if(i=s,l=i.updateQueue,l!==null){var u=i.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)xd(g[l],u)}catch(z){Ae(i,i.return,z)}}a&&o&64&&Mu(s),pn(s,s.return);break;case 27:Uu(s);case 26:case 5:pa(l,s,a),a&&i===null&&o&4&&Ru(s),pn(s,s.return);break;case 12:pa(l,s,a);break;case 13:pa(l,s,a),a&&o&4&&Yu(l,s);break;case 22:s.memoizedState===null&&pa(l,s,a),pn(s,s.return);break;case 30:break;default:pa(l,s,a)}t=t.sibling}}function Jr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Pi(a))}function Fr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pi(e))}function Rt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qu(e,t,a,i),t=t.sibling}function Qu(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,a,i),l&2048&&hn(9,t);break;case 1:Rt(e,t,a,i);break;case 3:Rt(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pi(e)));break;case 12:if(l&2048){Rt(e,t,a,i),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,u=s.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ae(t,t.return,g)}}else Rt(e,t,a,i);break;case 13:Rt(e,t,a,i);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?Rt(e,t,a,i):gn(e,t):s._visibility&2?Rt(e,t,a,i):(s._visibility|=2,yi(e,t,a,i,(t.subtreeFlags&10256)!==0)),l&2048&&Jr(o,t);break;case 24:Rt(e,t,a,i),l&2048&&Fr(t.alternate,t);break;default:Rt(e,t,a,i)}}function yi(e,t,a,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,o=t,u=a,g=i,z=o.flags;switch(o.tag){case 0:case 11:case 15:yi(s,o,u,g,l),hn(8,o);break;case 23:break;case 22:var D=o.stateNode;o.memoizedState!==null?D._visibility&2?yi(s,o,u,g,l):gn(s,o):(D._visibility|=2,yi(s,o,u,g,l)),l&&z&2048&&Jr(o.alternate,o);break;case 24:yi(s,o,u,g,l),l&&z&2048&&Fr(o.alternate,o);break;default:yi(s,o,u,g,l)}t=t.sibling}}function gn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:gn(a,i),l&2048&&Jr(i.alternate,i);break;case 24:gn(a,i),l&2048&&Fr(i.alternate,i);break;default:gn(a,i)}t=t.sibling}}var xn=8192;function vi(e){if(e.subtreeFlags&xn)for(e=e.child;e!==null;)Xu(e),e=e.sibling}function Xu(e){switch(e.tag){case 26:vi(e),e.flags&xn&&e.memoizedState!==null&&H0(St,e.memoizedState,e.memoizedProps);break;case 5:vi(e);break;case 3:case 4:var t=St;St=Il(e.stateNode.containerInfo),vi(e),St=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=xn,xn=16777216,vi(e),xn=t):vi(e));break;default:vi(e)}}function Vu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ye=i,Ku(i,e)}Vu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iu(e),e=e.sibling}function Iu(e){switch(e.tag){case 0:case 11:case 15:bn(e),e.flags&2048&&fa(9,e,e.return);break;case 3:bn(e);break;case 12:bn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ol(e)):bn(e);break;default:bn(e)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ye=i,Ku(i,e)}Vu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fa(8,t,t.return),Ol(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(t));break;default:Ol(t)}e=e.sibling}}function Ku(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Pi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ye=i;else e:for(a=e;Ye!==null;){i=Ye;var l=i.sibling,s=i.return;if(Hu(i),i===a){Ye=null;break e}if(l!==null){l.return=s,Ye=l;break e}Ye=s}}}var e0={getCacheForType:function(e){var t=Ze(Be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},t0=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ne=null,re=null,ce=0,xe=0,ut=null,ga=!1,wi=!1,Wr=!1,Ft=0,Te=0,xa=0,Xa=0,$r=0,wt=0,ji=0,yn=null,it=null,Pr=!1,eo=0,Ul=1/0,Bl=null,ba=null,Qe=0,ya=null,Ai=null,Ni=0,to=0,ao=null,Zu=null,vn=0,io=null;function mt(){if((ge&2)!==0&&ce!==0)return ce&-ce;if(R.T!==null){var e=ui;return e!==0?e:uo()}return dc()}function Ju(){wt===0&&(wt=(ce&536870912)===0||pe?sc():536870912);var e=vt.current;return e!==null&&(e.flags|=32),wt}function ft(e,t,a){(e===Ne&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Si(e,0),va(e,ce,wt,!1)),_i(e,a),((ge&2)===0||e!==Ne)&&(e===Ne&&((ge&2)===0&&(Xa|=a),Te===4&&va(e,ce,wt,!1)),Ot(e))}function Fu(e,t,a){if((ge&6)!==0)throw Error(c(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Bi(e,t),l=i?n0(e,t):so(e,t,!0),s=i;do{if(l===0){wi&&!i&&va(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!a0(a)){l=so(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=yn;var g=u.current.memoizedState.isDehydrated;if(g&&(Si(u,o).flags|=256),o=so(u,o,!1),o!==2){if(Wr&&!g){u.errorRecoveryDisabledLanes|=s,Xa|=s,l=4;break e}s=it,it=l,s!==null&&(it===null?it=s:it.push.apply(it,s))}l=o}if(s=!1,l!==2)continue}}if(l===1){Si(e,0),va(e,t,0,!0);break}e:{switch(i=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:va(i,t,wt,!ga);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=eo+300-Ct(),10<l)){if(va(i,t,wt,!ga),Kn(i,0,!0)!==0)break e;i.timeoutHandle=Sm(Wu.bind(null,i,a,it,Bl,Pr,t,wt,Xa,ji,ga,s,2,-0,0),l);break e}Wu(i,a,it,Bl,Pr,t,wt,Xa,ji,ga,s,0,-0,0)}}break}while(!0);Ot(e)}function Wu(e,t,a,i,l,s,o,u,g,z,D,U,E,T){if(e.timeoutHandle=-1,U=t.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(zn={stylesheets:null,count:0,unsuspend:_0},Xu(t),U=L0(),U!==null)){e.cancelPendingCommit=U(nm.bind(null,e,t,s,a,i,l,o,u,g,D,1,E,T)),va(e,s,o,!z);return}nm(e,t,s,a,i,l,o,u,g)}function a0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],s=l.getSnapshot;l=l.value;try{if(!rt(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,i){t&=~$r,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var s=31-st(l),o=1<<s;i[s]=-1,l&=~o}a!==0&&oc(e,a,t)}function _l(){return(ge&6)===0?(wn(0),!1):!0}function no(){if(re!==null){if(xe===0)var e=re.return;else e=re,qt=Ha=null,wr(e),xi=null,un=0,e=re;for(;e!==null;)Tu(e.alternate,e),e=e.return;re=null}}function Si(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,v0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),no(),Ne=e,re=a=Lt(e.current,null),ce=t,xe=0,ut=null,ga=!1,wi=Bi(e,t),Wr=!1,ji=wt=$r=Xa=xa=Te=0,it=yn=null,Pr=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-st(i),s=1<<l;t|=e[l],i&=~s}return Ft=t,ll(),a}function $u(e,t){le=null,R.H=Nl,t===tn||t===hl?(t=pd(),xe=3):t===md?(t=pd(),xe=4):xe=t===gu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,re===null&&(Te=1,Cl(e,gt(t,e.current)))}function Pu(){var e=R.H;return R.H=Nl,e===null?Nl:e}function em(){var e=R.A;return R.A=e0,e}function lo(){Te=4,ga||(ce&4194048)!==ce&&vt.current!==null||(wi=!0),(xa&134217727)===0&&(Xa&134217727)===0||Ne===null||va(Ne,ce,wt,!1)}function so(e,t,a){var i=ge;ge|=2;var l=Pu(),s=em();(Ne!==e||ce!==t)&&(Bl=null,Si(e,t)),t=!1;var o=Te;e:do try{if(xe!==0&&re!==null){var u=re,g=ut;switch(xe){case 8:no(),o=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var z=xe;if(xe=0,ut=null,ki(e,u,g,z),a&&wi){o=0;break e}break;default:z=xe,xe=0,ut=null,ki(e,u,g,z)}}i0(),o=Te;break}catch(D){$u(e,D)}while(!0);return t&&e.shellSuspendCounter++,qt=Ha=null,ge=i,R.H=l,R.A=s,re===null&&(Ne=null,ce=0,ll()),o}function i0(){for(;re!==null;)tm(re)}function n0(e,t){var a=ge;ge|=2;var i=Pu(),l=em();Ne!==e||ce!==t?(Bl=null,Ul=Ct()+500,Si(e,t)):wi=Bi(e,t);e:do try{if(xe!==0&&re!==null){t=re;var s=ut;t:switch(xe){case 1:xe=0,ut=null,ki(e,t,s,1);break;case 2:case 9:if(fd(s)){xe=0,ut=null,am(t);break}t=function(){xe!==2&&xe!==9||Ne!==e||(xe=7),Ot(e)},s.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:fd(s)?(xe=0,ut=null,am(t)):(xe=0,ut=null,ki(e,t,s,7));break;case 5:var o=null;switch(re.tag){case 26:o=re.memoizedState;case 5:case 27:var u=re;if(!o||_m(o)){xe=0,ut=null;var g=u.sibling;if(g!==null)re=g;else{var z=u.return;z!==null?(re=z,Hl(z)):re=null}break t}}xe=0,ut=null,ki(e,t,s,5);break;case 6:xe=0,ut=null,ki(e,t,s,6);break;case 8:no(),Te=6;break e;default:throw Error(c(462))}}l0();break}catch(D){$u(e,D)}while(!0);return qt=Ha=null,R.H=i,R.A=l,ge=a,re!==null?0:(Ne=null,ce=0,ll(),Te)}function l0(){for(;re!==null&&!zh();)tm(re)}function tm(e){var t=Eu(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Hl(e):re=t}function am(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ju(a,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=ju(a,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:wr(t);default:Tu(a,t),t=re=id(t,Ft),t=Eu(a,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Hl(e):re=t}function ki(e,t,a,i){qt=Ha=null,wr(t),xi=null,un=0;var l=t.return;try{if(Zp(e,l,t,a,ce)){Te=1,Cl(e,gt(a,e.current)),re=null;return}}catch(s){if(l!==null)throw re=l,s;Te=1,Cl(e,gt(a,e.current)),re=null;return}t.flags&32768?(pe||i===1?e=!0:wi||(ce&536870912)!==0?e=!1:(ga=e=!0,(i===2||i===9||i===3||i===6)&&(i=vt.current,i!==null&&i.tag===13&&(i.flags|=16384))),im(t,e)):Hl(t)}function Hl(e){var t=e;do{if((t.flags&32768)!==0){im(t,ga);return}e=t.return;var a=Fp(t.alternate,t,Ft);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Te===0&&(Te=5)}function im(e,t){do{var a=Wp(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Te=6,re=null}function nm(e,t,a,i,l,s,o,u,g){e.cancelPendingCommit=null;do Ll();while(Qe!==0);if((ge&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Fs,_h(e,a,s,o,u,g),e===Ne&&(re=Ne=null,ce=0),Ai=t,ya=e,Ni=a,to=s,ao=l,Zu=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c0(Xn,function(){return cm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,l=X.p,X.p=2,o=ge,ge|=4;try{$p(e,t,a)}finally{ge=o,X.p=l,R.T=i}}Qe=1,lm(),sm(),rm()}}function lm(){if(Qe===1){Qe=0;var e=ya,t=Ai,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var i=X.p;X.p=2;var l=ge;ge|=4;try{Gu(t,e);var s=yo,o=Kc(e.containerInfo),u=s.focusedElem,g=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&Ic(u.ownerDocument.documentElement,u)){if(g!==null&&Vs(u)){var z=g.start,D=g.end;if(D===void 0&&(D=z),"selectionStart"in u)u.selectionStart=z,u.selectionEnd=Math.min(D,u.value.length);else{var U=u.ownerDocument||document,E=U&&U.defaultView||window;if(E.getSelection){var T=E.getSelection(),ee=u.textContent.length,W=Math.min(g.start,ee),ve=g.end===void 0?W:Math.min(g.end,ee);!T.extend&&W>ve&&(o=ve,ve=W,W=o);var j=Vc(u,W),v=Vc(u,ve);if(j&&v&&(T.rangeCount!==1||T.anchorNode!==j.node||T.anchorOffset!==j.offset||T.focusNode!==v.node||T.focusOffset!==v.offset)){var S=U.createRange();S.setStart(j.node,j.offset),T.removeAllRanges(),W>ve?(T.addRange(S),T.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),T.addRange(S))}}}}for(U=[],T=u;T=T.parentNode;)T.nodeType===1&&U.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<U.length;u++){var O=U[u];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Wl=!!bo,yo=bo=null}finally{ge=l,X.p=i,R.T=a}}e.current=t,Qe=2}}function sm(){if(Qe===2){Qe=0;var e=ya,t=Ai,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var i=X.p;X.p=2;var l=ge;ge|=4;try{_u(e,t.alternate,t)}finally{ge=l,X.p=i,R.T=a}}Qe=3}}function rm(){if(Qe===4||Qe===3){Qe=0,Eh();var e=ya,t=Ai,a=Ni,i=Zu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Ai=ya=null,om(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ba=null),Ns(a),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ui,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,l=X.p,X.p=2,R.T=null;try{for(var s=e.onRecoverableError,o=0;o<i.length;o++){var u=i[o];s(u.value,{componentStack:u.stack})}}finally{R.T=t,X.p=l}}(Ni&3)!==0&&Ll(),Ot(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===io?vn++:(vn=0,io=e):vn=0,wn(0)}}function om(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pi(t)))}function Ll(e){return lm(),sm(),rm(),cm()}function cm(){if(Qe!==5)return!1;var e=ya,t=to;to=0;var a=Ns(Ni),i=R.T,l=X.p;try{X.p=32>a?32:a,R.T=null,a=ao,ao=null;var s=ya,o=Ni;if(Qe=0,Ai=ya=null,Ni=0,(ge&6)!==0)throw Error(c(331));var u=ge;if(ge|=4,Iu(s.current),Qu(s,s.current,o,a),ge=u,wn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ui,s)}catch{}return!0}finally{X.p=l,R.T=i,om(e,t)}}function dm(e,t,a){t=gt(a,t),t=Ur(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(_i(e,2),Ot(e))}function Ae(e,t,a){if(e.tag===3)dm(e,e,a);else for(;t!==null;){if(t.tag===3){dm(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ba===null||!ba.has(i))){e=gt(a,e),a=hu(2),i=ca(t,a,2),i!==null&&(pu(a,i,t,e),_i(i,2),Ot(i));break}}t=t.return}}function ro(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new t0;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(Wr=!0,l.add(a),e=s0.bind(null,e,t,a),t.then(e,e))}function s0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ne===e&&(ce&a)===a&&(Te===4||Te===3&&(ce&62914560)===ce&&300>Ct()-eo?(ge&2)===0&&Si(e,0):$r|=a,ji===ce&&(ji=0)),Ot(e)}function um(e,t){t===0&&(t=rc()),e=ri(e,t),e!==null&&(_i(e,t),Ot(e))}function r0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),um(e,a)}function o0(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),um(e,a)}function c0(e,t){return vs(e,t)}var Yl=null,zi=null,oo=!1,Gl=!1,co=!1,Va=0;function Ot(e){e!==zi&&e.next===null&&(zi===null?Yl=zi=e:zi=zi.next=e),Gl=!0,oo||(oo=!0,u0())}function wn(e,t){if(!co&&Gl){co=!0;do for(var a=!1,i=Yl;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var o=i.suspendedLanes,u=i.pingedLanes;s=(1<<31-st(42|e)+1)-1,s&=l&~(o&~u),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,pm(i,s))}else s=ce,s=Kn(i,i===Ne?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Bi(i,s)||(a=!0,pm(i,s));i=i.next}while(a);co=!1}}function d0(){mm()}function mm(){Gl=oo=!1;var e=0;Va!==0&&(y0()&&(e=Va),Va=0);for(var t=Ct(),a=null,i=Yl;i!==null;){var l=i.next,s=fm(i,t);s===0?(i.next=null,a===null?Yl=l:a.next=l,l===null&&(zi=a)):(a=i,(e!==0||(s&3)!==0)&&(Gl=!0)),i=l}wn(e)}function fm(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-st(s),u=1<<o,g=l[o];g===-1?((u&a)===0||(u&i)!==0)&&(l[o]=Bh(u,t)):g<=t&&(e.expiredLanes|=u),s&=~u}if(t=Ne,a=ce,a=Kn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ws(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&ws(i),Ns(a)){case 2:case 8:a=nc;break;case 32:a=Xn;break;case 268435456:a=lc;break;default:a=Xn}return i=hm.bind(null,e),a=vs(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&ws(i),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ll()&&e.callbackNode!==a)return null;var i=ce;return i=Kn(e,e===Ne?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Fu(e,i,t),fm(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?hm.bind(null,e):null)}function pm(e,t){if(Ll())return null;Fu(e,t,!0)}function u0(){w0(function(){(ge&6)!==0?vs(ic,d0):mm()})}function uo(){return Va===0&&(Va=sc()),Va}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$n(""+e)}function xm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function m0(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var s=gm((l[Pe]||null).action),o=i.submitter;o&&(t=(t=o[Pe]||null)?gm(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var u=new al("action","action",null,i,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Va!==0){var g=o?xm(l,o):new FormData(l);Tr(a,{pending:!0,data:g,method:l.method,action:s},null,g)}}else typeof s=="function"&&(u.preventDefault(),g=o?xm(l,o):new FormData(l),Tr(a,{pending:!0,data:g,method:l.method,action:s},s,g))},currentTarget:l}]})}}for(var mo=0;mo<Js.length;mo++){var fo=Js[mo],f0=fo.toLowerCase(),h0=fo[0].toUpperCase()+fo.slice(1);Nt(f0,"on"+h0)}Nt(Fc,"onAnimationEnd"),Nt(Wc,"onAnimationIteration"),Nt($c,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Mp,"onTransitionRun"),Nt(Dp,"onTransitionStart"),Nt(Rp,"onTransitionCancel"),Nt(Pc,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));function bm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var o=i.length-1;0<=o;o--){var u=i[o],g=u.instance,z=u.currentTarget;if(u=u.listener,g!==s&&l.isPropagationStopped())break e;s=u,l.currentTarget=z;try{s(l)}catch(D){El(D)}l.currentTarget=null,s=g}else for(o=0;o<i.length;o++){if(u=i[o],g=u.instance,z=u.currentTarget,u=u.listener,g!==s&&l.isPropagationStopped())break e;s=u,l.currentTarget=z;try{s(l)}catch(D){El(D)}l.currentTarget=null,s=g}}}}function oe(e,t){var a=t[Ss];a===void 0&&(a=t[Ss]=new Set);var i=e+"__bubble";a.has(i)||(ym(t,e,2,!1),a.add(i))}function ho(e,t,a){var i=0;t&&(i|=4),ym(a,e,i,t)}var ql="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[ql]){e[ql]=!0,mc.forEach(function(a){a!=="selectionchange"&&(p0.has(a)||ho(a,!1,e),ho(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ql]||(t[ql]=!0,ho("selectionchange",!1,t))}}function ym(e,t,a,i){switch(Qm(t)){case 2:var l=q0;break;case 8:l=Q0;break;default:l=Co}a=l.bind(null,t,a,e),l=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function go(e,t,a,i,l){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=i.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=Za(u),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){i=s=o;continue e}u=u.parentNode}}i=i.return}kc(function(){var z=s,D=Os(a),U=[];e:{var E=ed.get(e);if(E!==void 0){var T=al,ee=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":T=cp;break;case"focusin":ee="focus",T=Ys;break;case"focusout":ee="blur",T=Ys;break;case"beforeblur":case"afterblur":T=Ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=mp;break;case Fc:case Wc:case $c:T=ep;break;case Pc:T=hp;break;case"scroll":case"scrollend":T=Jh;break;case"wheel":T=gp;break;case"copy":case"cut":case"paste":T=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Mc;break;case"toggle":case"beforetoggle":T=bp}var W=(t&4)!==0,ve=!W&&(e==="scroll"||e==="scrollend"),j=W?E!==null?E+"Capture":null:E;W=[];for(var v=z,S;v!==null;){var O=v;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||j===null||(O=Yi(v,j),O!=null&&W.push(An(v,O,S))),ve)break;v=v.return}0<W.length&&(E=new T(E,ee,null,a,D),U.push({event:E,listeners:W}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",E&&a!==Rs&&(ee=a.relatedTarget||a.fromElement)&&(Za(ee)||ee[Ka]))break e;if((T||E)&&(E=D.window===D?D:(E=D.ownerDocument)?E.defaultView||E.parentWindow:window,T?(ee=a.relatedTarget||a.toElement,T=z,ee=ee?Za(ee):null,ee!==null&&(ve=h(ee),W=ee.tag,ee!==ve||W!==5&&W!==27&&W!==6)&&(ee=null)):(T=null,ee=z),T!==ee)){if(W=Cc,O="onMouseLeave",j="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=Mc,O="onPointerLeave",j="onPointerEnter",v="pointer"),ve=T==null?E:Li(T),S=ee==null?E:Li(ee),E=new W(O,v+"leave",T,a,D),E.target=ve,E.relatedTarget=S,O=null,Za(D)===z&&(W=new W(j,v+"enter",ee,a,D),W.target=S,W.relatedTarget=ve,O=W),ve=O,T&&ee)t:{for(W=T,j=ee,v=0,S=W;S;S=Ei(S))v++;for(S=0,O=j;O;O=Ei(O))S++;for(;0<v-S;)W=Ei(W),v--;for(;0<S-v;)j=Ei(j),S--;for(;v--;){if(W===j||j!==null&&W===j.alternate)break t;W=Ei(W),j=Ei(j)}W=null}else W=null;T!==null&&vm(U,E,T,W,!1),ee!==null&&ve!==null&&vm(U,ve,ee,W,!0)}}e:{if(E=z?Li(z):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var Z=Lc;else if(_c(E))if(Yc)Z=Ep;else{Z=kp;var se=Sp}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?z&&Ds(z.elementType)&&(Z=Lc):Z=zp;if(Z&&(Z=Z(e,z))){Hc(U,Z,a,D);break e}se&&se(e,E,z),e==="focusout"&&z&&E.type==="number"&&z.memoizedProps.value!=null&&Ms(E,"number",E.value)}switch(se=z?Li(z):window,e){case"focusin":(_c(se)||se.contentEditable==="true")&&(ni=se,Is=z,Zi=null);break;case"focusout":Zi=Is=ni=null;break;case"mousedown":Ks=!0;break;case"contextmenu":case"mouseup":case"dragend":Ks=!1,Zc(U,a,D);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":Zc(U,a,D)}var J;if(qs)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else ii?Uc(e,a)&&($="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($="onCompositionStart");$&&(Dc&&a.locale!=="ko"&&(ii||$!=="onCompositionStart"?$==="onCompositionEnd"&&ii&&(J=zc()):(la=D,_s="value"in la?la.value:la.textContent,ii=!0)),se=Ql(z,$),0<se.length&&($=new Tc($,e,null,a,D),U.push({event:$,listeners:se}),J?$.data=J:(J=Bc(a),J!==null&&($.data=J)))),(J=vp?wp(e,a):jp(e,a))&&($=Ql(z,"onBeforeInput"),0<$.length&&(se=new Tc("onBeforeInput","beforeinput",null,a,D),U.push({event:se,listeners:$}),se.data=J)),m0(U,e,z,a,D)}bm(U,t)})}function An(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ql(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Yi(e,a),l!=null&&i.unshift(An(e,l,s)),l=Yi(e,t),l!=null&&i.push(An(e,l,s))),e.tag===3)return i;e=e.return}return[]}function Ei(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vm(e,t,a,i,l){for(var s=t._reactName,o=[];a!==null&&a!==i;){var u=a,g=u.alternate,z=u.stateNode;if(u=u.tag,g!==null&&g===i)break;u!==5&&u!==26&&u!==27||z===null||(g=z,l?(z=Yi(a,s),z!=null&&o.unshift(An(a,z,g))):l||(z=Yi(a,s),z!=null&&o.push(An(a,z,g)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var g0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function wm(e){return(typeof e=="string"?e:""+e).replace(g0,`
`).replace(x0,"")}function jm(e,t){return t=wm(t),wm(e)===t}function Xl(){}function ye(e,t,a,i,l,s){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ei(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ei(e,""+i);break;case"className":Jn(e,"class",i);break;case"tabIndex":Jn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,a,i);break;case"style":Nc(e,i,s);break;case"data":if(t!=="object"){Jn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=$n(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&ye(e,t,"name",l.name,l,null),ye(e,t,"formEncType",l.formEncType,l,null),ye(e,t,"formMethod",l.formMethod,l,null),ye(e,t,"formTarget",l.formTarget,l,null)):(ye(e,t,"encType",l.encType,l,null),ye(e,t,"method",l.method,l,null),ye(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=$n(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Xl);break;case"onScroll":i!=null&&oe("scroll",e);break;case"onScrollEnd":i!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=$n(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Zn(e,"popover",i);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Zn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kh.get(a)||a,Zn(e,a,i))}}function xo(e,t,a,i,l,s){switch(a){case"style":Nc(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?ei(e,i):(typeof i=="number"||typeof i=="bigint")&&ei(e,""+i);break;case"onScroll":i!=null&&oe("scroll",e);break;case"onScrollEnd":i!=null&&oe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[Pe]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Zn(e,a,i)}}}function Xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var i=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,s,o,a,null)}}l&&ye(e,t,"srcSet",a.srcSet,a,null),i&&ye(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var u=s=o=l=null,g=null,z=null;for(i in a)if(a.hasOwnProperty(i)){var D=a[i];if(D!=null)switch(i){case"name":l=D;break;case"type":o=D;break;case"checked":g=D;break;case"defaultChecked":z=D;break;case"value":s=D;break;case"defaultValue":u=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:ye(e,t,i,D,a,null)}}vc(e,s,u,g,z,o,l,!1),Fn(e);return;case"select":oe("invalid",e),i=o=s=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":s=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:ye(e,t,l,u,a,null)}t=s,a=o,e.multiple=!!i,t!=null?Pa(e,!!i,t,!1):a!=null&&Pa(e,!!i,a,!0);return;case"textarea":oe("invalid",e),s=l=i=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":i=u;break;case"defaultValue":l=u;break;case"children":s=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:ye(e,t,o,u,a,null)}jc(e,i,l,s),Fn(e);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(i=a[g],i!=null))switch(g){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ye(e,t,g,i,a,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(i=0;i<jn.length;i++)oe(jn[i],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(i=a[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,z,i,a,null)}return;default:if(Ds(t)){for(D in a)a.hasOwnProperty(D)&&(i=a[D],i!==void 0&&xo(e,t,D,i,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(i=a[u],i!=null&&ye(e,t,u,i,a,null))}function b0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,o=null,u=null,g=null,z=null,D=null;for(T in a){var U=a[T];if(a.hasOwnProperty(T)&&U!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=U;default:i.hasOwnProperty(T)||ye(e,t,T,null,i,U)}}for(var E in i){var T=i[E];if(U=a[E],i.hasOwnProperty(E)&&(T!=null||U!=null))switch(E){case"type":s=T;break;case"name":l=T;break;case"checked":z=T;break;case"defaultChecked":D=T;break;case"value":o=T;break;case"defaultValue":u=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==U&&ye(e,t,E,T,i,U)}}Ts(e,o,u,g,z,D,s,l);return;case"select":T=o=u=E=null;for(s in a)if(g=a[s],a.hasOwnProperty(s)&&g!=null)switch(s){case"value":break;case"multiple":T=g;default:i.hasOwnProperty(s)||ye(e,t,s,null,i,g)}for(l in i)if(s=i[l],g=a[l],i.hasOwnProperty(l)&&(s!=null||g!=null))switch(l){case"value":E=s;break;case"defaultValue":u=s;break;case"multiple":o=s;default:s!==g&&ye(e,t,l,s,i,g)}t=u,a=o,i=T,E!=null?Pa(e,!!a,E,!1):!!i!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":T=E=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ye(e,t,u,null,i,l)}for(o in i)if(l=i[o],s=a[o],i.hasOwnProperty(o)&&(l!=null||s!=null))switch(o){case"value":E=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&ye(e,t,o,l,i,s)}wc(e,E,T);return;case"option":for(var ee in a)if(E=a[ee],a.hasOwnProperty(ee)&&E!=null&&!i.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:ye(e,t,ee,null,i,E)}for(g in i)if(E=i[g],T=a[g],i.hasOwnProperty(g)&&E!==T&&(E!=null||T!=null))switch(g){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ye(e,t,g,E,i,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)E=a[W],a.hasOwnProperty(W)&&E!=null&&!i.hasOwnProperty(W)&&ye(e,t,W,null,i,E);for(z in i)if(E=i[z],T=a[z],i.hasOwnProperty(z)&&E!==T&&(E!=null||T!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:ye(e,t,z,E,i,T)}return;default:if(Ds(t)){for(var ve in a)E=a[ve],a.hasOwnProperty(ve)&&E!==void 0&&!i.hasOwnProperty(ve)&&xo(e,t,ve,void 0,i,E);for(D in i)E=i[D],T=a[D],!i.hasOwnProperty(D)||E===T||E===void 0&&T===void 0||xo(e,t,D,E,i,T);return}}for(var j in a)E=a[j],a.hasOwnProperty(j)&&E!=null&&!i.hasOwnProperty(j)&&ye(e,t,j,null,i,E);for(U in i)E=i[U],T=a[U],!i.hasOwnProperty(U)||E===T||E==null&&T==null||ye(e,t,U,E,i,T)}var bo=null,yo=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function Am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=null;function y0(){var e=window.event;return e&&e.type==="popstate"?e===wo?!1:(wo=e,!0):(wo=null,!1)}var Sm=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(e){return km.resolve(null).then(e).catch(j0)}:Sm;function j0(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function zm(e,t){var a=t,i=0,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<i&&8>i){a=i;var o=e.ownerDocument;if(a&1&&Nn(o.documentElement),a&2&&Nn(o.body),a&4)for(a=o.head,Nn(a),o=a.firstChild;o;){var u=o.nextSibling,g=o.nodeName;o[Hi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(l===0){e.removeChild(s),Dn(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:i=a.charCodeAt(0)-48;else i=0;a=s}while(a);Dn(t)}function jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jo(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function A0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Hi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function N0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=kt(e.nextSibling),e===null))return null;return e}function Ao(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function S0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var No=null;function Em(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Cm(e,t,a){switch(t=Vl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Nn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ks(e)}var jt=new Map,Tm=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=X.d;X.d={f:k0,r:z0,D:E0,C:C0,L:T0,m:M0,X:R0,S:D0,M:O0};function k0(){var e=Wt.f(),t=_l();return e||t}function z0(e){var t=Ja(e);t!==null&&t.tag===5&&t.type==="form"?Fd(t):Wt.r(e)}var Ci=typeof document>"u"?null:document;function Mm(e,t,a){var i=Ci;if(i&&typeof t=="string"&&t){var l=pt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Tm.has(l)||(Tm.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Xe(t,"link",e),He(t),i.head.appendChild(t)))}}function E0(e){Wt.D(e),Mm("dns-prefetch",e,null)}function C0(e,t){Wt.C(e,t),Mm("preconnect",e,t)}function T0(e,t,a){Wt.L(e,t,a);var i=Ci;if(i&&e&&t){var l='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+pt(a.imageSizes)+'"]')):l+='[href="'+pt(e)+'"]';var s=l;switch(t){case"style":s=Ti(e);break;case"script":s=Mi(e)}jt.has(s)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),jt.set(s,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Sn(s))||t==="script"&&i.querySelector(kn(s))||(t=i.createElement("link"),Xe(t,"link",e),He(t),i.head.appendChild(t)))}}function M0(e,t){Wt.m(e,t);var a=Ci;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+pt(i)+'"][href="'+pt(e)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Mi(e)}if(!jt.has(s)&&(e=y({rel:"modulepreload",href:e},t),jt.set(s,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kn(s)))return}i=a.createElement("link"),Xe(i,"link",e),He(i),a.head.appendChild(i)}}}function D0(e,t,a){Wt.S(e,t,a);var i=Ci;if(i&&e){var l=Fa(i).hoistableStyles,s=Ti(e);t=t||"default";var o=l.get(s);if(!o){var u={loading:0,preload:null};if(o=i.querySelector(Sn(s)))u.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=jt.get(s))&&So(e,a);var g=o=i.createElement("link");He(g),Xe(g,"link",e),g._p=new Promise(function(z,D){g.onload=z,g.onerror=D}),g.addEventListener("load",function(){u.loading|=1}),g.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Kl(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(s,o)}}}function R0(e,t){Wt.X(e,t);var a=Ci;if(a&&e){var i=Fa(a).hoistableScripts,l=Mi(e),s=i.get(l);s||(s=a.querySelector(kn(l)),s||(e=y({src:e,async:!0},t),(t=jt.get(l))&&ko(e,t),s=a.createElement("script"),He(s),Xe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function O0(e,t){Wt.M(e,t);var a=Ci;if(a&&e){var i=Fa(a).hoistableScripts,l=Mi(e),s=i.get(l);s||(s=a.querySelector(kn(l)),s||(e=y({src:e,async:!0,type:"module"},t),(t=jt.get(l))&&ko(e,t),s=a.createElement("script"),He(s),Xe(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function Dm(e,t,a,i){var l=(l=ie.current)?Il(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ti(a.href),a=Fa(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ti(a.href);var s=Fa(l).hoistableStyles,o=s.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=l.querySelector(Sn(e)))&&!s._p&&(o.instance=s,o.state.loading=5),jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jt.set(e,a),s||U0(l,e,a,o.state))),t&&i===null)throw Error(c(528,""));return o}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Mi(a),a=Fa(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ti(e){return'href="'+pt(e)+'"'}function Sn(e){return'link[rel="stylesheet"]['+e+"]"}function Rm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function U0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Xe(t,"link",a),He(t),e.head.appendChild(t))}function Mi(e){return'[src="'+pt(e)+'"]'}function kn(e){return"script[async]"+e}function Om(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(i)return t.instance=i,He(i),i;var l=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),He(i),Xe(i,"style",l),Kl(i,a.precedence,e),t.instance=i;case"stylesheet":l=Ti(a.href);var s=e.querySelector(Sn(l));if(s)return t.state.loading|=4,t.instance=s,He(s),s;i=Rm(a),(l=jt.get(l))&&So(i,l),s=(e.ownerDocument||e).createElement("link"),He(s);var o=s;return o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Xe(s,"link",i),t.state.loading|=4,Kl(s,a.precedence,e),t.instance=s;case"script":return s=Mi(a.src),(l=e.querySelector(kn(s)))?(t.instance=l,He(l),l):(i=a,(l=jt.get(s))&&(i=y({},a),ko(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),He(l),Xe(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Kl(i,a.precedence,e));return t.instance}function Kl(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,o=0;o<i.length;o++){var u=i[o];if(u.dataset.precedence===t)s=u;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function So(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zl=null;function Um(e,t,a){if(Zl===null){var i=new Map,l=Zl=new Map;l.set(a,i)}else l=Zl,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[Hi]||s[Ke]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var u=i.get(o);u?u.push(s):i.set(o,[s])}}return i}function Bm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function B0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _m(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var zn=null;function _0(){}function H0(e,t,a){if(zn===null)throw Error(c(475));var i=zn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ti(a.href),s=e.querySelector(Sn(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Jl.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,He(s);return}s=e.ownerDocument||e,a=Rm(a),(l=jt.get(l))&&So(a,l),s=s.createElement("link"),He(s);var o=s;o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Xe(s,"link",a),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Jl.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function L0(){if(zn===null)throw Error(c(475));var e=zn;return e.stylesheets&&e.count===0&&zo(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&zo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)zo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fl=null;function zo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fl=new Map,t.forEach(Y0,e),Fl=null,Jl.call(e))}function Y0(e,t){if(!(t.state.loading&4)){var a=Fl.get(e);if(a)var i=a.get(null);else{a=new Map,Fl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var o=l[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}l=t.instance,o=l.getAttribute("data-precedence"),s=a.get(o)||i,s===i&&a.set(null,l),a.set(o,l),this.count++,i=Jl.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var En={$$typeof:G,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function G0(e,t,a,i,l,s,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.hiddenUpdates=js(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Hm(e,t,a,i,l,s,o,u,g,z,D,U){return e=new G0(e,t,a,o,u,g,z,U),t=1,s===!0&&(t|=24),s=ot(3,null,null,t),e.current=s,s.stateNode=e,t=rr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:a,cache:t},ur(s),e}function Lm(e){return e?(e=oi,e):oi}function Ym(e,t,a,i,l,s){l=Lm(l),i.context===null?i.context=l:i.pendingContext=l,i=oa(t),i.payload={element:a},s=s===void 0?null:s,s!==null&&(i.callback=s),a=ca(e,i,t),a!==null&&(ft(a,e,t),nn(a,e,t))}function Gm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Eo(e,t){Gm(e,t),(e=e.alternate)&&Gm(e,t)}function qm(e){if(e.tag===13){var t=ri(e,67108864);t!==null&&ft(t,e,67108864),Eo(e,67108864)}}var Wl=!0;function q0(e,t,a,i){var l=R.T;R.T=null;var s=X.p;try{X.p=2,Co(e,t,a,i)}finally{X.p=s,R.T=l}}function Q0(e,t,a,i){var l=R.T;R.T=null;var s=X.p;try{X.p=8,Co(e,t,a,i)}finally{X.p=s,R.T=l}}function Co(e,t,a,i){if(Wl){var l=To(i);if(l===null)go(e,t,i,$l,a),Xm(e,i);else if(V0(l,e,t,a,i))i.stopPropagation();else if(Xm(e,i),t&4&&-1<X0.indexOf(e)){for(;l!==null;){var s=Ja(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=Ea(s.pendingLanes);if(o!==0){var u=s;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var g=1<<31-st(o);u.entanglements[1]|=g,o&=~g}Ot(s),(ge&6)===0&&(Ul=Ct()+500,wn(0))}}break;case 13:u=ri(s,2),u!==null&&ft(u,s,2),_l(),Eo(s,2)}if(s=To(i),s===null&&go(e,t,i,$l,a),s===l)break;l=s}l!==null&&i.stopPropagation()}else go(e,t,i,null,a)}}function To(e){return e=Os(e),Mo(e)}var $l=null;function Mo(e){if($l=null,e=Za(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $l=e,null}function Qm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ch()){case ic:return 2;case nc:return 8;case Xn:case Th:return 32;case lc:return 268435456;default:return 32}default:return 32}}var Do=!1,ja=null,Aa=null,Na=null,Cn=new Map,Tn=new Map,Sa=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xm(e,t){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function Mn(e,t,a,i,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Ja(t),t!==null&&qm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function V0(e,t,a,i,l){switch(t){case"focusin":return ja=Mn(ja,e,t,a,i,l),!0;case"dragenter":return Aa=Mn(Aa,e,t,a,i,l),!0;case"mouseover":return Na=Mn(Na,e,t,a,i,l),!0;case"pointerover":var s=l.pointerId;return Cn.set(s,Mn(Cn.get(s)||null,e,t,a,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Tn.set(s,Mn(Tn.get(s)||null,e,t,a,i,l)),!0}return!1}function Vm(e){var t=Za(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,Hh(e.priority,function(){if(a.tag===13){var i=mt();i=As(i);var l=ri(a,i);l!==null&&ft(l,a,i),Eo(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=To(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Rs=i,a.target.dispatchEvent(i),Rs=null}else return t=Ja(a),t!==null&&qm(t),e.blockedOn=a,!1;t.shift()}return!0}function Im(e,t,a){Pl(e)&&a.delete(t)}function I0(){Do=!1,ja!==null&&Pl(ja)&&(ja=null),Aa!==null&&Pl(Aa)&&(Aa=null),Na!==null&&Pl(Na)&&(Na=null),Cn.forEach(Im),Tn.forEach(Im)}function es(e,t){e.blockedOn===t&&(e.blockedOn=null,Do||(Do=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,I0)))}var ts=null;function Km(e){ts!==e&&(ts=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ts===e&&(ts=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Mo(i||a)===null)continue;break}var s=Ja(a);s!==null&&(e.splice(t,3),t-=3,Tr(s,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Dn(e){function t(g){return es(g,e)}ja!==null&&es(ja,e),Aa!==null&&es(Aa,e),Na!==null&&es(Na,e),Cn.forEach(t),Tn.forEach(t);for(var a=0;a<Sa.length;a++){var i=Sa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)Vm(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],s=a[i+1],o=l[Pe]||null;if(typeof s=="function")o||Km(a);else if(o){var u=null;if(s&&s.hasAttribute("formAction")){if(l=s,o=s[Pe]||null)u=o.formAction;else if(Mo(l)!==null)continue}else u=o.action;typeof u=="function"?a[i+1]=u:(a.splice(i,3),i-=3),Km(a)}}}function Ro(e){this._internalRoot=e}as.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=mt();Ym(a,i,e,t,null,null)},as.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ym(e.current,2,null,e,null,null),_l(),t[Ka]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var t=dc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&Vm(e)}};var Zm=m.version;if(Zm!=="19.1.0")throw Error(c(527,Zm,"19.1.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=w(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var K0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{Ui=is.inject(K0),lt=is}catch{}}return On.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,i="",l=du,s=uu,o=mu,u=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(u=t.unstable_transitionCallbacks)),t=Hm(e,1,!1,null,null,a,i,l,s,o,u,null),e[Ka]=t.current,po(e),new Ro(t)},On.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var i=!1,l="",s=du,o=uu,u=mu,g=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),t=Hm(e,1,!0,t,a??null,i,l,s,o,u,g,z),t.context=Lm(null),a=t.current,i=mt(),i=As(i),l=oa(i),l.callback=null,ca(a,l,i),a=i,t.current.lanes=a,_i(t,a),Ot(t),e[Ka]=t.current,po(e),new as(t)},On.version="19.1.0",On}var lf;function ng(){if(lf)return Bo.exports;lf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),Bo.exports=ig(),Bo.exports}var lg=ng();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var sf="popstate";function sg(r={}){function m(c,f){let{pathname:h,search:x,hash:C}=c.location;return Io("",{pathname:h,search:x,hash:C},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(c,f){return typeof f=="string"?f:Bn(f)}return og(m,d,null,r)}function Ee(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function Ut(r,m){if(!r){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function rg(){return Math.random().toString(36).substring(2,10)}function rf(r,m){return{usr:r.state,key:r.key,idx:m}}function Io(r,m,d=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof m=="string"?Ri(m):m,state:d,key:m&&m.key||c||rg()}}function Bn({pathname:r="/",search:m="",hash:d=""}){return m&&m!=="?"&&(r+=m.charAt(0)==="?"?m:"?"+m),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Ri(r){let m={};if(r){let d=r.indexOf("#");d>=0&&(m.hash=r.substring(d),r=r.substring(0,d));let c=r.indexOf("?");c>=0&&(m.search=r.substring(c),r=r.substring(0,c)),r&&(m.pathname=r)}return m}function og(r,m,d,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,x=f.history,C="POP",w=null,p=y();p==null&&(p=0,x.replaceState({...x.state,idx:p},""));function y(){return(x.state||{idx:null}).idx}function k(){C="POP";let Y=y(),B=Y==null?null:Y-p;p=Y,w&&w({action:C,location:q.location,delta:B})}function N(Y,B){C="PUSH";let L=Io(q.location,Y,B);p=y()+1;let G=rf(L,p),ae=q.createHref(L);try{x.pushState(G,"",ae)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;f.location.assign(ae)}h&&w&&w({action:C,location:q.location,delta:1})}function M(Y,B){C="REPLACE";let L=Io(q.location,Y,B);p=y();let G=rf(L,p),ae=q.createHref(L);x.replaceState(G,"",ae),h&&w&&w({action:C,location:q.location,delta:0})}function H(Y){return cg(Y)}let q={get action(){return C},get location(){return r(f,x)},listen(Y){if(w)throw new Error("A history only accepts one active listener");return f.addEventListener(sf,k),w=Y,()=>{f.removeEventListener(sf,k),w=null}},createHref(Y){return m(f,Y)},createURL:H,encodeLocation(Y){let B=H(Y);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:N,replace:M,go(Y){return x.go(Y)}};return q}function cg(r,m=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(d,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Bn(r);return c=c.replace(/ $/,"%20"),!m&&c.startsWith("//")&&(c=d+c),new URL(c,d)}function Xf(r,m,d="/"){return dg(r,m,d,!1)}function dg(r,m,d,c){let f=typeof m=="string"?Ri(m):m,h=Pt(f.pathname||"/",d);if(h==null)return null;let x=Vf(r);ug(x);let C=null;for(let w=0;C==null&&w<x.length;++w){let p=jg(h);C=vg(x[w],p,c)}return C}function Vf(r,m=[],d=[],c="",f=!1){let h=(x,C,w=f,p)=>{let y={relativePath:p===void 0?x.path||"":p,caseSensitive:x.caseSensitive===!0,childrenIndex:C,route:x};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(c)&&w)return;Ee(y.relativePath.startsWith(c),`Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(c.length)}let k=$t([c,y.relativePath]),N=d.concat(y);x.children&&x.children.length>0&&(Ee(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${k}".`),Vf(x.children,m,N,k,w)),!(x.path==null&&!x.index)&&m.push({path:k,score:bg(k,x.index),routesMeta:N})};return r.forEach((x,C)=>{if(x.path===""||!x.path?.includes("?"))h(x,C);else for(let w of If(x.path))h(x,C,!0,w)}),m}function If(r){let m=r.split("/");if(m.length===0)return[];let[d,...c]=m,f=d.endsWith("?"),h=d.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let x=If(c.join("/")),C=[];return C.push(...x.map(w=>w===""?h:[h,w].join("/"))),f&&C.push(...x),C.map(w=>r.startsWith("/")&&w===""?"/":w)}function ug(r){r.sort((m,d)=>m.score!==d.score?d.score-m.score:yg(m.routesMeta.map(c=>c.childrenIndex),d.routesMeta.map(c=>c.childrenIndex)))}var mg=/^:[\w-]+$/,fg=3,hg=2,pg=1,gg=10,xg=-2,of=r=>r==="*";function bg(r,m){let d=r.split("/"),c=d.length;return d.some(of)&&(c+=xg),m&&(c+=hg),d.filter(f=>!of(f)).reduce((f,h)=>f+(mg.test(h)?fg:h===""?pg:gg),c)}function yg(r,m){return r.length===m.length&&r.slice(0,-1).every((c,f)=>c===m[f])?r[r.length-1]-m[m.length-1]:0}function vg(r,m,d=!1){let{routesMeta:c}=r,f={},h="/",x=[];for(let C=0;C<c.length;++C){let w=c[C],p=C===c.length-1,y=h==="/"?m:m.slice(h.length)||"/",k=us({path:w.relativePath,caseSensitive:w.caseSensitive,end:p},y),N=w.route;if(!k&&p&&d&&!c[c.length-1].route.index&&(k=us({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},y)),!k)return null;Object.assign(f,k.params),x.push({params:f,pathname:$t([h,k.pathname]),pathnameBase:kg($t([h,k.pathnameBase])),route:N}),k.pathnameBase!=="/"&&(h=$t([h,k.pathnameBase]))}return x}function us(r,m){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,c]=wg(r.path,r.caseSensitive,r.end),f=m.match(d);if(!f)return null;let h=f[0],x=h.replace(/(.)\/+$/,"$1"),C=f.slice(1);return{params:c.reduce((p,{paramName:y,isOptional:k},N)=>{if(y==="*"){let H=C[N]||"";x=h.slice(0,h.length-H.length).replace(/(.)\/+$/,"$1")}const M=C[N];return k&&!M?p[y]=void 0:p[y]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:x,pattern:r}}function wg(r,m=!1,d=!0){Ut(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,C,w)=>(c.push({paramName:C,isOptional:w!=null}),w?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,m?void 0:"i"),c]}function jg(r){try{return r.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Ut(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),r}}function Pt(r,m){if(m==="/")return r;if(!r.toLowerCase().startsWith(m.toLowerCase()))return null;let d=m.endsWith("/")?m.length-1:m.length,c=r.charAt(d);return c&&c!=="/"?null:r.slice(d)||"/"}function Ag(r,m="/"){let{pathname:d,search:c="",hash:f=""}=typeof r=="string"?Ri(r):r;return{pathname:d?d.startsWith("/")?d:Ng(d,m):m,search:zg(c),hash:Eg(f)}}function Ng(r,m){let d=m.replace(/\/+$/,"").split("/");return r.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function Yo(r,m,d,c){return`Cannot include a '${r}' character in a manually specified \`to.${m}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sg(r){return r.filter((m,d)=>d===0||m.route.path&&m.route.path.length>0)}function Kf(r){let m=Sg(r);return m.map((d,c)=>c===m.length-1?d.pathname:d.pathnameBase)}function Zf(r,m,d,c=!1){let f;typeof r=="string"?f=Ri(r):(f={...r},Ee(!f.pathname||!f.pathname.includes("?"),Yo("?","pathname","search",f)),Ee(!f.pathname||!f.pathname.includes("#"),Yo("#","pathname","hash",f)),Ee(!f.search||!f.search.includes("#"),Yo("#","search","hash",f)));let h=r===""||f.pathname==="",x=h?"/":f.pathname,C;if(x==null)C=d;else{let k=m.length-1;if(!c&&x.startsWith("..")){let N=x.split("/");for(;N[0]==="..";)N.shift(),k-=1;f.pathname=N.join("/")}C=k>=0?m[k]:"/"}let w=Ag(f,C),p=x&&x!=="/"&&x.endsWith("/"),y=(h||x===".")&&d.endsWith("/");return!w.pathname.endsWith("/")&&(p||y)&&(w.pathname+="/"),w}var $t=r=>r.join("/").replace(/\/\/+/g,"/"),kg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),zg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Eg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Cg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Jf=["POST","PUT","PATCH","DELETE"];new Set(Jf);var Tg=["GET",...Jf];new Set(Tg);var Oi=A.createContext(null);Oi.displayName="DataRouter";var hs=A.createContext(null);hs.displayName="DataRouterState";A.createContext(!1);var Ff=A.createContext({isTransitioning:!1});Ff.displayName="ViewTransition";var Mg=A.createContext(new Map);Mg.displayName="Fetchers";var Dg=A.createContext(null);Dg.displayName="Await";var Bt=A.createContext(null);Bt.displayName="Navigation";var Hn=A.createContext(null);Hn.displayName="Location";var ea=A.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var Wo=A.createContext(null);Wo.displayName="RouteError";function Rg(r,{relative:m}={}){Ee(Ln(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:c}=A.useContext(Bt),{hash:f,pathname:h,search:x}=Yn(r,{relative:m}),C=h;return d!=="/"&&(C=h==="/"?d:$t([d,h])),c.createHref({pathname:C,search:x,hash:f})}function Ln(){return A.useContext(Hn)!=null}function Ia(){return Ee(Ln(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Hn).location}var Wf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $f(r){A.useContext(Bt).static||A.useLayoutEffect(r)}function Og(){let{isDataRoute:r}=A.useContext(ea);return r?Kg():Ug()}function Ug(){Ee(Ln(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Oi),{basename:m,navigator:d}=A.useContext(Bt),{matches:c}=A.useContext(ea),{pathname:f}=Ia(),h=JSON.stringify(Kf(c)),x=A.useRef(!1);return $f(()=>{x.current=!0}),A.useCallback((w,p={})=>{if(Ut(x.current,Wf),!x.current)return;if(typeof w=="number"){d.go(w);return}let y=Zf(w,JSON.parse(h),f,p.relative==="path");r==null&&m!=="/"&&(y.pathname=y.pathname==="/"?m:$t([m,y.pathname])),(p.replace?d.replace:d.push)(y,p.state,p)},[m,d,h,f,r])}A.createContext(null);function Yn(r,{relative:m}={}){let{matches:d}=A.useContext(ea),{pathname:c}=Ia(),f=JSON.stringify(Kf(d));return A.useMemo(()=>Zf(r,JSON.parse(f),c,m==="path"),[r,f,c,m])}function Bg(r,m){return Pf(r,m)}function Pf(r,m,d,c,f){Ee(Ln(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=A.useContext(Bt),{matches:x}=A.useContext(ea),C=x[x.length-1],w=C?C.params:{},p=C?C.pathname:"/",y=C?C.pathnameBase:"/",k=C&&C.route;{let L=k&&k.path||"";eh(p,!k||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let N=Ia(),M;if(m){let L=typeof m=="string"?Ri(m):m;Ee(y==="/"||L.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=N;let H=M.pathname||"/",q=H;if(y!=="/"){let L=y.replace(/^\//,"").split("/");q="/"+H.replace(/^\//,"").split("/").slice(L.length).join("/")}let Y=Xf(r,{pathname:q});Ut(k||Y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ut(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Gg(Y&&Y.map(L=>Object.assign({},L,{params:Object.assign({},w,L.params),pathname:$t([y,h.encodeLocation?h.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:$t([y,h.encodeLocation?h.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),x,d,c,f);return m&&B?A.createElement(Hn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},B):B}function _g(){let r=Ig(),m=Cg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},x=null;return console.error("Error handled by React Router default ErrorBoundary:",r),x=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},m),d?A.createElement("pre",{style:f},d):null,x)}var Hg=A.createElement(_g,null),Lg=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,m){return m.location!==r.location||m.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:m.error,location:m.location,revalidation:r.revalidation||m.revalidation}}componentDidCatch(r,m){this.props.unstable_onError?this.props.unstable_onError(r,m):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?A.createElement(ea.Provider,{value:this.props.routeContext},A.createElement(Wo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yg({routeContext:r,match:m,children:d}){let c=A.useContext(Oi);return c&&c.static&&c.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=m.route.id),A.createElement(ea.Provider,{value:r},d)}function Gg(r,m=[],d=null,c=null,f=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(m.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let h=r,x=d?.errors;if(x!=null){let p=h.findIndex(y=>y.route.id&&x?.[y.route.id]!==void 0);Ee(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),h=h.slice(0,Math.min(h.length,p+1))}let C=!1,w=-1;if(d)for(let p=0;p<h.length;p++){let y=h[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(w=p),y.route.id){let{loaderData:k,errors:N}=d,M=y.route.loader&&!k.hasOwnProperty(y.route.id)&&(!N||N[y.route.id]===void 0);if(y.route.lazy||M){C=!0,w>=0?h=h.slice(0,w+1):h=[h[0]];break}}}return h.reduceRight((p,y,k)=>{let N,M=!1,H=null,q=null;d&&(N=x&&y.route.id?x[y.route.id]:void 0,H=y.route.errorElement||Hg,C&&(w<0&&k===0?(eh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,q=null):w===k&&(M=!0,q=y.route.hydrateFallbackElement||null)));let Y=m.concat(h.slice(0,k+1)),B=()=>{let L;return N?L=H:M?L=q:y.route.Component?L=A.createElement(y.route.Component,null):y.route.element?L=y.route.element:L=p,A.createElement(Yg,{match:y,routeContext:{outlet:p,matches:Y,isDataRoute:d!=null},children:L})};return d&&(y.route.ErrorBoundary||y.route.errorElement||k===0)?A.createElement(Lg,{location:d.location,revalidation:d.revalidation,component:H,error:N,children:B(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},unstable_onError:c}):B()},null)}function $o(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qg(r){let m=A.useContext(Oi);return Ee(m,$o(r)),m}function Qg(r){let m=A.useContext(hs);return Ee(m,$o(r)),m}function Xg(r){let m=A.useContext(ea);return Ee(m,$o(r)),m}function Po(r){let m=Xg(r),d=m.matches[m.matches.length-1];return Ee(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Vg(){return Po("useRouteId")}function Ig(){let r=A.useContext(Wo),m=Qg("useRouteError"),d=Po("useRouteError");return r!==void 0?r:m.errors?.[d]}function Kg(){let{router:r}=qg("useNavigate"),m=Po("useNavigate"),d=A.useRef(!1);return $f(()=>{d.current=!0}),A.useCallback(async(f,h={})=>{Ut(d.current,Wf),d.current&&(typeof f=="number"?r.navigate(f):await r.navigate(f,{fromRouteId:m,...h}))},[r,m])}var cf={};function eh(r,m,d){!m&&!cf[r]&&(cf[r]=!0,Ut(!1,d))}A.memo(Zg);function Zg({routes:r,future:m,state:d,unstable_onError:c}){return Pf(r,void 0,d,c,m)}function Et(r){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jg({basename:r="/",children:m=null,location:d,navigationType:c="POP",navigator:f,static:h=!1}){Ee(!Ln(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=r.replace(/^\/*/,"/"),C=A.useMemo(()=>({basename:x,navigator:f,static:h,future:{}}),[x,f,h]);typeof d=="string"&&(d=Ri(d));let{pathname:w="/",search:p="",hash:y="",state:k=null,key:N="default"}=d,M=A.useMemo(()=>{let H=Pt(w,x);return H==null?null:{location:{pathname:H,search:p,hash:y,state:k,key:N},navigationType:c}},[x,w,p,y,k,N,c]);return Ut(M!=null,`<Router basename="${x}"> is not able to match the URL "${w}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:A.createElement(Bt.Provider,{value:C},A.createElement(Hn.Provider,{children:m,value:M}))}function Fg({children:r,location:m}){return Bg(Ko(r),m)}function Ko(r,m=[]){let d=[];return A.Children.forEach(r,(c,f)=>{if(!A.isValidElement(c))return;let h=[...m,f];if(c.type===A.Fragment){d.push.apply(d,Ko(c.props.children,h));return}Ee(c.type===Et,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!c.props.index||!c.props.children,"An index route cannot have child routes.");let x={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(x.children=Ko(c.props.children,h)),d.push(x)}),d}var os="get",cs="application/x-www-form-urlencoded";function ps(r){return r!=null&&typeof r.tagName=="string"}function Wg(r){return ps(r)&&r.tagName.toLowerCase()==="button"}function $g(r){return ps(r)&&r.tagName.toLowerCase()==="form"}function Pg(r){return ps(r)&&r.tagName.toLowerCase()==="input"}function e1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function t1(r,m){return r.button===0&&(!m||m==="_self")&&!e1(r)}var ns=null;function a1(){if(ns===null)try{new FormData(document.createElement("form"),0),ns=!1}catch{ns=!0}return ns}var i1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Go(r){return r!=null&&!i1.has(r)?(Ut(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cs}"`),null):r}function n1(r,m){let d,c,f,h,x;if($g(r)){let C=r.getAttribute("action");c=C?Pt(C,m):null,d=r.getAttribute("method")||os,f=Go(r.getAttribute("enctype"))||cs,h=new FormData(r)}else if(Wg(r)||Pg(r)&&(r.type==="submit"||r.type==="image")){let C=r.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=r.getAttribute("formaction")||C.getAttribute("action");if(c=w?Pt(w,m):null,d=r.getAttribute("formmethod")||C.getAttribute("method")||os,f=Go(r.getAttribute("formenctype"))||Go(C.getAttribute("enctype"))||cs,h=new FormData(C,r),!a1()){let{name:p,type:y,value:k}=r;if(y==="image"){let N=p?`${p}.`:"";h.append(`${N}x`,"0"),h.append(`${N}y`,"0")}else p&&h.append(p,k)}}else{if(ps(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=os,c=null,f=cs,x=r}return h&&f==="text/plain"&&(x=h,h=void 0),{action:c,method:d.toLowerCase(),encType:f,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ec(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function l1(r,m,d){let c=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return c.pathname==="/"?c.pathname=`_root.${d}`:m&&Pt(c.pathname,m)==="/"?c.pathname=`${m.replace(/\/$/,"")}/_root.${d}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${d}`,c}async function s1(r,m){if(r.id in m)return m[r.id];try{let d=await import(r.module);return m[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function r1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function o1(r,m,d){let c=await Promise.all(r.map(async f=>{let h=m.routes[f.route.id];if(h){let x=await s1(h,d);return x.links?x.links():[]}return[]}));return m1(c.flat(1).filter(r1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function df(r,m,d,c,f,h){let x=(w,p)=>d[p]?w.route.id!==d[p].route.id:!0,C=(w,p)=>d[p].pathname!==w.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==w.params["*"];return h==="assets"?m.filter((w,p)=>x(w,p)||C(w,p)):h==="data"?m.filter((w,p)=>{let y=c.routes[w.route.id];if(!y||!y.hasLoader)return!1;if(x(w,p)||C(w,p))return!0;if(w.route.shouldRevalidate){let k=w.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function c1(r,m,{includeHydrateFallback:d}={}){return d1(r.map(c=>{let f=m.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function d1(r){return[...new Set(r)]}function u1(r){let m={},d=Object.keys(r).sort();for(let c of d)m[c]=r[c];return m}function m1(r,m){let d=new Set;return new Set(m),r.reduce((c,f)=>{let h=JSON.stringify(u1(f));return d.has(h)||(d.add(h),c.push({key:h,link:f})),c},[])}function th(){let r=A.useContext(Oi);return ec(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function f1(){let r=A.useContext(hs);return ec(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var tc=A.createContext(void 0);tc.displayName="FrameworkContext";function ah(){let r=A.useContext(tc);return ec(r,"You must render this element inside a <HydratedRouter> element"),r}function h1(r,m){let d=A.useContext(tc),[c,f]=A.useState(!1),[h,x]=A.useState(!1),{onFocus:C,onBlur:w,onMouseEnter:p,onMouseLeave:y,onTouchStart:k}=m,N=A.useRef(null);A.useEffect(()=>{if(r==="render"&&x(!0),r==="viewport"){let q=B=>{B.forEach(L=>{x(L.isIntersecting)})},Y=new IntersectionObserver(q,{threshold:.5});return N.current&&Y.observe(N.current),()=>{Y.disconnect()}}},[r]),A.useEffect(()=>{if(c){let q=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(q)}}},[c]);let M=()=>{f(!0)},H=()=>{f(!1),x(!1)};return d?r!=="intent"?[h,N,{}]:[h,N,{onFocus:Un(C,M),onBlur:Un(w,H),onMouseEnter:Un(p,M),onMouseLeave:Un(y,H),onTouchStart:Un(k,M)}]:[!1,N,{}]}function Un(r,m){return d=>{r&&r(d),d.defaultPrevented||m(d)}}function p1({page:r,...m}){let{router:d}=th(),c=A.useMemo(()=>Xf(d.routes,r,d.basename),[d.routes,r,d.basename]);return c?A.createElement(x1,{page:r,matches:c,...m}):null}function g1(r){let{manifest:m,routeModules:d}=ah(),[c,f]=A.useState([]);return A.useEffect(()=>{let h=!1;return o1(r,m,d).then(x=>{h||f(x)}),()=>{h=!0}},[r,m,d]),c}function x1({page:r,matches:m,...d}){let c=Ia(),{manifest:f,routeModules:h}=ah(),{basename:x}=th(),{loaderData:C,matches:w}=f1(),p=A.useMemo(()=>df(r,m,w,f,c,"data"),[r,m,w,f,c]),y=A.useMemo(()=>df(r,m,w,f,c,"assets"),[r,m,w,f,c]),k=A.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let H=new Set,q=!1;if(m.forEach(B=>{let L=f.routes[B.route.id];!L||!L.hasLoader||(!p.some(G=>G.route.id===B.route.id)&&B.route.id in C&&h[B.route.id]?.shouldRevalidate||L.hasClientLoader?q=!0:H.add(B.route.id))}),H.size===0)return[];let Y=l1(r,x,"data");return q&&H.size>0&&Y.searchParams.set("_routes",m.filter(B=>H.has(B.route.id)).map(B=>B.route.id).join(",")),[Y.pathname+Y.search]},[x,C,c,f,p,m,r,h]),N=A.useMemo(()=>c1(y,f),[y,f]),M=g1(y);return A.createElement(A.Fragment,null,k.map(H=>A.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...d})),N.map(H=>A.createElement("link",{key:H,rel:"modulepreload",href:H,...d})),M.map(({key:H,link:q})=>A.createElement("link",{key:H,nonce:d.nonce,...q})))}function b1(...r){return m=>{r.forEach(d=>{typeof d=="function"?d(m):d!=null&&(d.current=m)})}}var ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ih&&(window.__reactRouterVersion="7.9.1")}catch{}function y1({basename:r,children:m,window:d}){let c=A.useRef();c.current==null&&(c.current=sg({window:d,v5Compat:!0}));let f=c.current,[h,x]=A.useState({action:f.action,location:f.location}),C=A.useCallback(w=>{A.startTransition(()=>x(w))},[x]);return A.useLayoutEffect(()=>f.listen(C),[f,C]),A.createElement(Jg,{basename:r,children:m,location:h.location,navigationType:h.action,navigator:f})}var nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=A.forwardRef(function({onClick:m,discover:d="render",prefetch:c="none",relative:f,reloadDocument:h,replace:x,state:C,target:w,to:p,preventScrollReset:y,viewTransition:k,...N},M){let{basename:H}=A.useContext(Bt),q=typeof p=="string"&&nh.test(p),Y,B=!1;if(typeof p=="string"&&q&&(Y=p,ih))try{let te=new URL(window.location.href),he=p.startsWith("//")?new URL(te.protocol+p):new URL(p),we=Pt(he.pathname,H);he.origin===te.origin&&we!=null?p=we+he.search+he.hash:B=!0}catch{Ut(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Rg(p,{relative:f}),[G,ae,V]=h1(c,N),de=A1(p,{replace:x,state:C,target:w,preventScrollReset:y,relative:f,viewTransition:k});function fe(te){m&&m(te),te.defaultPrevented||de(te)}let I=A.createElement("a",{...N,...V,href:Y||L,onClick:B||h?m:fe,ref:b1(M,ae),target:w,"data-discover":!q&&d==="render"?"true":void 0});return G&&!q?A.createElement(A.Fragment,null,I,A.createElement(p1,{page:L})):I});lh.displayName="Link";var v1=A.forwardRef(function({"aria-current":m="page",caseSensitive:d=!1,className:c="",end:f=!1,style:h,to:x,viewTransition:C,children:w,...p},y){let k=Yn(x,{relative:p.relative}),N=Ia(),M=A.useContext(hs),{navigator:H,basename:q}=A.useContext(Bt),Y=M!=null&&E1(k)&&C===!0,B=H.encodeLocation?H.encodeLocation(k).pathname:k.pathname,L=N.pathname,G=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;d||(L=L.toLowerCase(),G=G?G.toLowerCase():null,B=B.toLowerCase()),G&&q&&(G=Pt(G,q)||G);const ae=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let V=L===B||!f&&L.startsWith(B)&&L.charAt(ae)==="/",de=G!=null&&(G===B||!f&&G.startsWith(B)&&G.charAt(B.length)==="/"),fe={isActive:V,isPending:de,isTransitioning:Y},I=V?m:void 0,te;typeof c=="function"?te=c(fe):te=[c,V?"active":null,de?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let he=typeof h=="function"?h(fe):h;return A.createElement(lh,{...p,"aria-current":I,className:te,ref:y,style:he,to:x,viewTransition:C},typeof w=="function"?w(fe):w)});v1.displayName="NavLink";var w1=A.forwardRef(({discover:r="render",fetcherKey:m,navigate:d,reloadDocument:c,replace:f,state:h,method:x=os,action:C,onSubmit:w,relative:p,preventScrollReset:y,viewTransition:k,...N},M)=>{let H=k1(),q=z1(C,{relative:p}),Y=x.toLowerCase()==="get"?"get":"post",B=typeof C=="string"&&nh.test(C),L=G=>{if(w&&w(G),G.defaultPrevented)return;G.preventDefault();let ae=G.nativeEvent.submitter,V=ae?.getAttribute("formmethod")||x;H(ae||G.currentTarget,{fetcherKey:m,method:V,navigate:d,replace:f,state:h,relative:p,preventScrollReset:y,viewTransition:k})};return A.createElement("form",{ref:M,method:Y,action:q,onSubmit:c?w:L,...N,"data-discover":!B&&r==="render"?"true":void 0})});w1.displayName="Form";function j1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sh(r){let m=A.useContext(Oi);return Ee(m,j1(r)),m}function A1(r,{target:m,replace:d,state:c,preventScrollReset:f,relative:h,viewTransition:x}={}){let C=Og(),w=Ia(),p=Yn(r,{relative:h});return A.useCallback(y=>{if(t1(y,m)){y.preventDefault();let k=d!==void 0?d:Bn(w)===Bn(p);C(r,{replace:k,state:c,preventScrollReset:f,relative:h,viewTransition:x})}},[w,C,p,d,c,m,r,f,h,x])}var N1=0,S1=()=>`__${String(++N1)}__`;function k1(){let{router:r}=sh("useSubmit"),{basename:m}=A.useContext(Bt),d=Vg();return A.useCallback(async(c,f={})=>{let{action:h,method:x,encType:C,formData:w,body:p}=n1(c,m);if(f.navigate===!1){let y=f.fetcherKey||S1();await r.fetch(y,d,f.action||h,{preventScrollReset:f.preventScrollReset,formData:w,body:p,formMethod:f.method||x,formEncType:f.encType||C,flushSync:f.flushSync})}else await r.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:w,body:p,formMethod:f.method||x,formEncType:f.encType||C,replace:f.replace,state:f.state,fromRouteId:d,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,m,d])}function z1(r,{relative:m}={}){let{basename:d}=A.useContext(Bt),c=A.useContext(ea);Ee(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...Yn(r||".",{relative:m})},x=Ia();if(r==null){h.search=x.search;let C=new URLSearchParams(h.search),w=C.getAll("index");if(w.some(y=>y==="")){C.delete("index"),w.filter(k=>k).forEach(k=>C.append("index",k));let y=C.toString();h.search=y?`?${y}`:""}}return(!r||r===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:$t([d,h.pathname])),Bn(h)}function E1(r,{relative:m}={}){let d=A.useContext(Ff);Ee(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=sh("useViewTransitionState"),f=Yn(r,{relative:m});if(!d.isTransitioning)return!1;let h=Pt(d.currentLocation.pathname,c)||d.currentLocation.pathname,x=Pt(d.nextLocation.pathname,c)||d.nextLocation.pathname;return us(f.pathname,x)!=null||us(f.pathname,h)!=null}const rh="/assets/profile-Dvg5Mrpq.png",C1="/assets/email-DoONwEbf.png";function ta(){return n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:rh,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/",onClick:r=>{if(r.preventDefault(),window.location.pathname==="/"){const m=document.getElementById("google-cloud");m&&m.scrollIntoView({behavior:"smooth"})}else sessionStorage.setItem("scrollTo","google-cloud"),window.location.href="/"},children:"WORK"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"https://drive.google.com/file/d/1npO4k4AAveQdBizDO5rMsA64DmfxBzLA/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:"RESUME"}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email me",style:{lineHeight:0},children:n.jsx("img",{src:C1,alt:"Email",style:{width:"20px",height:"20px",objectFit:"contain"}})})]})]})})})}function Gn(){return n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Let's Connect! 🤝"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026"})]})})}const T1="/assets/heroImage-CWryvvzx.png",M1="/assets/Venn-wSdGeou3.png",Zo="/assets/trophy-B47DuTBs.png";/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,d,c)=>c?c.toUpperCase():d.toLowerCase()),uf=r=>{const m=R1(r);return m.charAt(0).toUpperCase()+m.slice(1)},oh=(...r)=>r.filter((m,d,c)=>!!m&&m.trim()!==""&&c.indexOf(m)===d).join(" ").trim(),O1=r=>{for(const m in r)if(m.startsWith("aria-")||m==="role"||m==="title")return!0};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=A.forwardRef(({color:r="currentColor",size:m=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:f="",children:h,iconNode:x,...C},w)=>A.createElement("svg",{ref:w,...U1,width:m,height:m,stroke:r,strokeWidth:c?Number(d)*24/Number(m):d,className:oh("lucide",f),...!h&&!O1(C)&&{"aria-hidden":"true"},...C},[...x.map(([p,y])=>A.createElement(p,y)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=(r,m)=>{const d=A.forwardRef(({className:c,...f},h)=>A.createElement(B1,{ref:h,iconNode:m,className:oh(`lucide-${D1(uf(r))}`,`lucide-${r}`,c),...f}));return d.displayName=uf(r),d};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],H1=qn("arrow-left",_1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Y1=qn("briefcase",L1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],q1=qn("map-pin",G1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],X1=qn("rotate-ccw",Q1);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]],mf=qn("sprout",V1),I1="/assets/figma-BrWkYh4v.png",K1="/assets/Miro-Icon-CLoaKXku.png",Z1="/assets/notion-logo-no-background-C1XUKvDk.png",J1="/assets/GitHub-BLfHCd-g.png",F1="/assets/Vue.js-DgkQqFWc.png",W1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M27.255%2080.719c0%207.33-5.978%2013.317-13.309%2013.317C6.616%2094.036.63%2088.049.63%2080.719s5.987-13.317%2013.317-13.317h13.309zm6.709%200c0-7.33%205.987-13.317%2013.317-13.317s13.317%205.986%2013.317%2013.317v33.335c0%207.33-5.986%2013.317-13.317%2013.317-7.33%200-13.317-5.987-13.317-13.317zm0%200'%20fill='%23de1c59'/%3e%3cpath%20d='M47.281%2027.255c-7.33%200-13.317-5.978-13.317-13.309C33.964%206.616%2039.951.63%2047.281.63s13.317%205.987%2013.317%2013.317v13.309zm0%206.709c7.33%200%2013.317%205.987%2013.317%2013.317s-5.986%2013.317-13.317%2013.317H13.946C6.616%2060.598.63%2054.612.63%2047.281c0-7.33%205.987-13.317%2013.317-13.317zm0%200'%20fill='%2335c5f0'/%3e%3cpath%20d='M100.745%2047.281c0-7.33%205.978-13.317%2013.309-13.317%207.33%200%2013.317%205.987%2013.317%2013.317s-5.987%2013.317-13.317%2013.317h-13.309zm-6.709%200c0%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.986-13.317-13.317V13.946C67.402%206.616%2073.388.63%2080.719.63c7.33%200%2013.317%205.987%2013.317%2013.317zm0%200'%20fill='%232eb57d'/%3e%3cpath%20d='M80.719%20100.745c7.33%200%2013.317%205.978%2013.317%2013.309%200%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33%200-13.317-5.987-13.317-13.317s5.986-13.317%2013.317-13.317h33.335c7.33%200%2013.317%205.986%2013.317%2013.317%200%207.33-5.987%2013.317-13.317%2013.317zm0%200'%20fill='%23ebb02e'/%3e%3c/svg%3e",$1="/assets/R-BNsrwNRK.png",P1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAMAAAA7EzkRAAAAFVBMVEVMaXHZd1fZd1babUjZd1faf1rZd1epRaWRAAAABnRSTlMAXawH8g5t5RLrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFOklEQVR42u3WUQ6EIAxAQcDV+x95r1Bjk2Kdid81wkMdAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADebtHa9gFedPYTIAIUoAAFiAAFKEABIkABClCACFCAAhQgAkSAAkSACFCACBABChABIkABIkAEKEAEiAAFiAARoAARIAIUIAJEgAJEgAhQgAgQAQoQASJAAQpQgAhQgAIUIAIUoAAFiAAFKEABIkABClCACBABChABIkABIkAEKEAEiAAFiAARoAARIAIUIAJEgAJEgAhQgAgQAQoQASJAASJABChABIgABShAASJAAQpQgAhQgAIUIAIUoAAFiAARoAARIAIUIAJEgAJEgAhQgAjwnjNmfq2EGVwYAT4UvO33AqzZDwEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoACTHTHfCzC4MNkBHsnGBYUEiAARIAgQAYIAESAIEAGCABEgCBABggARIAgQAYIAESAIEAGCABEgCBABggARIAgQAYIAESAIEAEiQBAgAgQBIkAQIAIEASJAECACBAEiQBAgAgQBIkAQIAIEASJAECACBAEiQBAgAgQBIkAQIAIEASJABAgCRIAgQAQIAkSAIEAECAJEgCBABAgCRIDwNMCVzJL2lt3LyGaLmr+xdmeLBChABIgABYgAEaAAESACFCACRIACRIAIUIAIEAEKEAEiQAEiQAQoQASIAAWIABGgABEgAhQgAkSAAhSgABGgAAUoQAQoQAEKEAEKUIACRIAIUIAIEAEKEAEiQAEiQAQoQASIAAWIABGgABEgAhQgAkSAAkSACFCACBABChABIkABIkAEKEABChABClCAAkSAAhSgABGgAAUoQAQoQAEKEAEiQAEiQAQoQASIAAWIABGgABEgAhQgAkSAAkSACDDJjFnRBy6aVyb6HKto3mhiJp+4W/OOXa8bX5CZ/EVqU9YbAuzwCyNAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKcEvnDCqaV3cyg86ieQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJv8Af3P8SOrUE9bAAAAAElFTkSuQmCC",e2="/assets/python-Dz9eQFi4.png",t2="/assets/webflow-Dh5T2Dhk.png",a2="/assets/adobe-7c3gxfIi.png",i2="/assets/database-Y4cnJNVp.png",n2="/assets/physics-DmQed7ww.png",l2="/assets/picture-cSGQrkyS.png",s2="/assets/shopping%20cart-KdPjy6I3.png",r2="/assets/01956daf-188e-495e-bc0f-251abf3b48ed-WN6Cz8SU.JPG",o2="/assets/IMG_1779-CwtVEQNl.JPG",c2="/assets/IMG_1864-TCcz0Hyz.JPG",d2="/assets/IMG_2558-B31_H-W5.jpeg",u2="/assets/IMG_2649-Dq9FPoGj.jpeg",m2="/assets/IMG_2801-DTf2SAxw.jpeg",f2="/assets/IMG_3139-Bs8i1A7o.jpeg",h2="/assets/IMG_3556-CZlIGG0j.JPG",p2="/assets/IMG_3849-BiWl6fr8.jpeg",g2="/assets/IMG_3954-Diuzxg-g.jpeg",x2="/assets/e5c101e2-8a86-45d0-af32-bba8116e26dd-DWy7hsYs.JPG",b2="/assets/f0d1cf2b-9103-47e6-ae39-8120952977a6-B2PnEKOd.JPG",y2="/assets/IMG_0918-CryJjCdq.jpeg",v2="/assets/IMG_1935-tYr4Wfuj.JPG",w2="/assets/IMG_3968-8X4J9Nmf.jpeg",j2=[{date:"May 2020",place:"Chennai, India",type:"location",body:"After wrapping up high school with a suitcase full of dreams in hand, I made one of the biggest and best decisions of my life, to pursue my bachelor's degree in the United States. Little did I know, this was just the start of an incredible adventure."},{date:"Aug 2020",place:"UMass Amherst",type:"location",body:"I stepped foot on the beautiful UMass Amherst campus! I was really interested in both tech and psychology. So I decided to double major in Computer Science and Psychology. Why choose one when you can have both, right?",hl:["double major in Computer Science and Psychology"]},{date:"Aug 2022",place:"Resident Assistant",type:"job",body:"Two years into my bachelor's journey, I got my first job, yayyy! Being an RA taught me how to create community, from late night on-call duties to organizing fun floor events, I learned how to understand people's needs and build environments where everyone could thrive.",hl:["how to create community","understand people's needs"]},{date:"Feb 2024",place:"Head Teaching Assistant",type:"job",body:'I had taken up a volunteer position and realized I love helping others learn, so I applied to be a Teaching Assistant. A semester later I was promoted to Head TA, leading a team of TAs and supporting 80+ students in the course "Human-Computer Interaction."',hl:["I love helping others learn","leading a team of TAs and supporting 80+ students"]},{date:"Aug 2024",place:"Cornell University, Ithaca",type:"location",body:"Bachelor's degree in hand, I wasn't ready to stop learning. Enter Cornell University and a masters in Information Science with a UX focus! I absolutely loved choosing a field that combined my passion for psychology and my skills in technology. I learned about user research methods, design, prototyping and strategy. Plus the campus is absolutely stunning, I loved being so close to nature, the hiking trails, the waterfalls it was all so breathtaking.",hl:["loved choosing a field that combined my passion for psychology and my skills in technology","I loved being so close to nature, the hiking trails, the waterfalls"]},{date:"Aug 2024",place:"Graduate Teaching Specialist",type:"job",body:"With some experience in teaching from my time at UMass and my passion to help others learn I accepted a role as a Graduate Teaching Specialist, supporting 200+ students across design and programming coursework. I graded assignments and mentored students as they explored design practices.",hl:["supporting 200+ students across design and programming coursework"]},{date:"Jan 2025",place:"UX Designer + Researcher",type:"job",body:"I lived my capstone dream, getting to work directly with Google Cloud. Our team was mentored by some of the nicest folks at Google Cloud, and I got to learn so much about enterprise design and research.",hl:["getting to work directly with Google Cloud"]},{date:"May 2025",place:"Research Assistant",type:"job",body:`During summer 2025 I worked as an RA with a PhD student, Tuan-He-Lee, diving into co-design research with remote mental health support systems.

 And then starting Nov 2025 I have been working with a PhD student, Jeremy Faulk, creating and testing interactive systems that connect physiological sensors (e.g., heart rate monitors) with real-time lighting and sound applications (e.g., Philips Hue, Ableton Live), while logging and processing experimental data using Python.`,hl:["diving into co-design research with remote mental health support systems","creating and testing interactive systems","experimental data using Python"]},{date:"Present",place:"Looking for full-time roles",type:"job",bodyPlace:!0,badge:"Open to relocation nationwide"}];function A2(r,m=[]){if(!m.length)return r;const d=m.map(h=>h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),c=new RegExp(`(${d.join("|")})`,"g");return r.split(c).map((h,x)=>m.includes(h)?n.jsx("span",{className:"journey-hl",children:h},x):h)}const N2=[{img:r2,rotate:"-4deg",landscape:!1},{img:o2,rotate:"3deg",landscape:!1},{img:c2,rotate:"-2deg",landscape:!0},{img:d2,rotate:"5deg",landscape:!1},{img:u2,rotate:"-3deg",landscape:!1},{img:m2,rotate:"2deg",landscape:!1},{img:f2,rotate:"-5deg",landscape:!1},{img:g2,rotate:"3deg",landscape:!1},{img:h2,rotate:"4deg",landscape:!0},{img:p2,rotate:"-2deg",landscape:!1},{img:x2,rotate:"-4deg",landscape:!0},{img:b2,rotate:"2deg",landscape:!0},{img:y2,rotate:"-3deg",landscape:!1},{img:v2,rotate:"4deg",landscape:!1},{img:w2,rotate:"-2deg",landscape:!1}],qo=[{src:I1,alt:"Figma",rotate:"-8deg",x:"15%",y:"5%",size:52},{src:K1,alt:"Miro",rotate:"6deg",x:"62%",y:"3%",size:46},{src:Z1,alt:"Notion",rotate:"-4deg",x:"38%",y:"14%",size:44},{src:J1,alt:"GitHub",rotate:"9deg",x:"72%",y:"18%",size:48},{src:F1,alt:"Vue",rotate:"-6deg",x:"20%",y:"28%",size:42},{src:W1,alt:"Slack",rotate:"5deg",x:"55%",y:"32%",size:44},{src:$1,alt:"R",rotate:"-9deg",x:"10%",y:"48%",size:40},{src:P1,alt:"Claude Code",rotate:"7deg",x:"68%",y:"46%",size:46},{src:e2,alt:"Python",rotate:"-5deg",x:"30%",y:"56%",size:42},{src:t2,alt:"Webflow",rotate:"8deg",x:"75%",y:"62%",size:40},{src:a2,alt:"Adobe CC",rotate:"-7deg",x:"18%",y:"70%",size:42},{src:i2,alt:"SQL",rotate:"6deg",x:"58%",y:"74%",size:40},{src:n2,alt:"React JS",rotate:"-4deg",x:"40%",y:"84%",size:38},{src:l2,alt:"Framer",rotate:"5deg",x:"45%",y:"38%",size:38}];function S2(){const r=A.useRef([]),m=A.useRef(null);A.useEffect(()=>{const N=new IntersectionObserver(M=>M.forEach(H=>{H.isIntersecting&&H.target.classList.add("in")}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});return r.current.forEach(M=>M&&N.observe(M)),()=>N.disconnect()},[]);const d=N=>{N&&!r.current.includes(N)&&r.current.push(N)},c=()=>{const N=m.current;if(!N)return;const M=performance.now(),H=q=>{N.scrollLeft=Math.max(0,(N.scrollWidth-N.clientWidth)/2),q-M<700&&requestAnimationFrame(H)};requestAnimationFrame(H)},[f,h]=A.useState(()=>qo.map(()=>({x:0,y:0}))),x=A.useRef(null),C=(N,M)=>{N.preventDefault();const H=N.currentTarget;try{H.setPointerCapture(N.pointerId)}catch{}H.classList.add("dragging"),x.current={el:H,i:M,startX:N.clientX,startY:N.clientY,baseX:f[M].x,baseY:f[M].y,x:f[M].x,y:f[M].y}},w=N=>{const M=x.current;M&&(M.x=M.baseX+(N.clientX-M.startX),M.y=M.baseY+(N.clientY-M.startY),M.el.style.transform=`translate(${M.x}px, ${M.y}px) scale(1.12)`)},p=N=>{const M=x.current;if(!M)return;M.el.classList.remove("dragging");try{M.el.releasePointerCapture(N.pointerId)}catch{}const{x:H,y:q,i:Y}=M;x.current=null,h(B=>B.map((L,G)=>G===Y?{x:H,y:q}:L))},y=()=>h(qo.map(()=>({x:0,y:0}))),k=f.some(N=>N.x!==0||N.y!==0);return n.jsxs("div",{className:"about-page",children:[n.jsx("style",{children:`
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
          background: rgba(198,236,201,0.55);
          padding: 0.05em 0.28em;
          border-radius: 2px;
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
        /* draggable wrapper — handles position + drag transform */
        .tool-sticker-drag {
          position: absolute;
          pointer-events: auto;
          cursor: grab;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 3;
        }
        .tool-sticker-drag:hover { z-index: 50; }
        .tool-sticker-drag.dragging {
          cursor: grabbing;
          transition: none;
          z-index: 200;
        }
        .tool-sticker {
          position: relative;
          display: flex; flex-direction: column; align-items: center;
          filter: drop-shadow(0 4px 8px rgba(226, 115, 150, 0.3));
          animation: stickerDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .tool-sticker-drag.dragging .tool-sticker::after { opacity: 0 !important; }
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
        `}),n.jsx(ta,{}),n.jsx("section",{className:"about-section",children:n.jsxs("div",{className:"content-container",children:[n.jsx("h1",{className:"section-title reveal",ref:d,children:"How I Got Here"}),n.jsxs("div",{style:{display:"flex",gap:"2.5rem",alignItems:"flex-start"},children:[n.jsx("div",{className:"journey",style:{flex:1},children:j2.map((N,M)=>n.jsx("div",{className:`journey-entry reveal${N.date==="Present"?" journey-entry--present":""}`,ref:d,children:n.jsxs("div",{className:"journey-text",children:[n.jsxs("h3",{className:"journey-heading",children:[N.date,!N.bodyPlace&&",",!N.bodyPlace&&n.jsxs("span",{className:"journey-place",children:[N.type==="location"?n.jsx(q1,{size:16}):n.jsx(Y1,{size:16}),N.place]})]}),N.bodyPlace&&n.jsx("p",{className:"journey-body",children:N.place}),N.body&&n.jsx("p",{className:"journey-body",children:A2(N.body,N.hl)}),N.badge&&n.jsxs("span",{className:"journey-badge",children:[n.jsx("span",{className:"badge-dot"}),N.badge]})]})},M))}),n.jsxs("div",{className:"journey-basket-wrap reveal",ref:d,children:[n.jsx("div",{className:"sticker-zone",children:qo.map((N,M)=>n.jsx("div",{className:"tool-sticker-drag",style:{left:N.x,top:N.y,transform:`translate(${f[M].x}px, ${f[M].y}px)`},onPointerDown:H=>C(H,M),onPointerMove:w,onPointerUp:p,onPointerCancel:p,children:n.jsx("div",{className:"tool-sticker","data-tooltip":N.alt,style:{"--rot":N.rotate,animationDelay:`${M*.07}s`},children:n.jsx("img",{src:N.src,alt:N.alt,draggable:!1,style:{width:N.size,height:N.size}})})},M))}),n.jsx("div",{className:"basket-svg-wrap",children:n.jsx("img",{src:s2,alt:"Skills shopping cart",style:{width:"100%",height:"auto",display:"block"}})}),n.jsxs("div",{className:"cart-status",children:[n.jsx("p",{className:`cart-hint${k?"":" show"}`,children:"Try adding the tools into the tool cart"}),n.jsx("button",{className:`tidy-btn${k?" show":""}`,onClick:y,children:"✦ Reorient"})]})]})]}),n.jsx("div",{className:"polaroids-strip-wrap reveal",ref:d,onMouseEnter:c,children:n.jsx("div",{className:"polaroids",ref:m,children:N2.map((N,M)=>n.jsx("div",{className:`polaroid${N.landscape?" landscape":""}`,style:{transform:`rotate(${N.rotate})`},children:n.jsx("img",{src:N.img,alt:`Memory ${M+1}`,className:"pol-img"})},M))})}),n.jsx("p",{className:"polaroid-hint reveal",ref:d,children:"hover to see more memories"})]})}),n.jsx(Gn,{})]})}const gs="/assets/capstone-mockup-DhJqv6Er.png",_n="/assets/ithaca-soap-mockup-DK_124JI.png",ch="/assets/iName-CvX8Q2r4.png",xs="/assets/routes-aVjpSWBA.png",dh="/assets/ecoCart-DN4gWc14.png",uh="/assets/rShiny-DeYEsmp9.png",mh="/assets/Dialogflow%20CX-BhfPPEZi.png",fh="/assets/Google_Gemini_logo.svg-DssHf0Y7.png",ms="/assets/OpenAI-black-monoblossom-xl2KzdHb.png",hh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cpath%20d='M27.255%2080.719c0%207.33-5.978%2013.317-13.309%2013.317C6.616%2094.036.63%2088.049.63%2080.719s5.987-13.317%2013.317-13.317h13.309zm6.709%200c0-7.33%205.987-13.317%2013.317-13.317s13.317%205.986%2013.317%2013.317v33.335c0%207.33-5.986%2013.317-13.317%2013.317-7.33%200-13.317-5.987-13.317-13.317zm0%200'%20fill='%23de1c59'/%3e%3cpath%20d='M47.281%2027.255c-7.33%200-13.317-5.978-13.317-13.309C33.964%206.616%2039.951.63%2047.281.63s13.317%205.987%2013.317%2013.317v13.309zm0%206.709c7.33%200%2013.317%205.987%2013.317%2013.317s-5.986%2013.317-13.317%2013.317H13.946C6.616%2060.598.63%2054.612.63%2047.281c0-7.33%205.987-13.317%2013.317-13.317zm0%200'%20fill='%2335c5f0'/%3e%3cpath%20d='M100.745%2047.281c0-7.33%205.978-13.317%2013.309-13.317%207.33%200%2013.317%205.987%2013.317%2013.317s-5.987%2013.317-13.317%2013.317h-13.309zm-6.709%200c0%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.986-13.317-13.317V13.946C67.402%206.616%2073.388.63%2080.719.63c7.33%200%2013.317%205.987%2013.317%2013.317zm0%200'%20fill='%232eb57d'/%3e%3cpath%20d='M80.719%20100.745c7.33%200%2013.317%205.978%2013.317%2013.309%200%207.33-5.987%2013.317-13.317%2013.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33%200-13.317-5.987-13.317-13.317s5.986-13.317%2013.317-13.317h33.335c7.33%200%2013.317%205.986%2013.317%2013.317%200%207.33-5.987%2013.317-13.317%2013.317zm0%200'%20fill='%23ebb02e'/%3e%3c/svg%3e",ph="/assets/Vertex%20AI-lFv2_HRt.png",gh="data:image/svg+xml,%3csvg%20width='128'%20height='128'%20viewBox='0%200%20128%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.7127%2050.141L10.9614%2037.3896C-3.6538%2052.0049%20-3.6538%2075.7036%2010.9614%2090.3188L23.7127%2077.5674C20.0761%2073.9303%2018.033%2068.9976%2018.033%2063.8542C18.033%2058.7109%2020.0761%2053.7781%2023.7127%2050.141Z'%20fill='%23E8710A'/%3e%3cpath%20d='M10.9614%2037.3898L23.7128%2050.1411C27.3499%2046.5044%2032.2826%2044.4614%2037.426%2044.4614C42.5693%2044.4614%2047.5021%2046.5044%2051.1392%2050.1411L60.3949%2034.3002C60.2115%2034.1567%2060.0243%2034.0157%2059.8335%2033.8773C45.1808%2022.8868%2024.2929%2024.0564%2010.9614%2037.3898Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M60.4435%2093.3635L51.1298%2077.5675C47.4927%2081.2042%2042.56%2083.2472%2037.4166%2083.2472C32.2733%2083.2472%2027.3405%2081.2042%2023.7034%2077.5675L10.9614%2090.3189C24.2929%20103.65%2045.1827%20104.822%2059.841%2093.8314C60.0468%2093.6779%2060.4529%2093.3635%2060.4529%2093.3635'%20fill='%23F9AB00'/%3e%3cpath%20d='M64.1075%2037.3897C49.4923%2052.0049%2049.4923%2075.7036%2064.1075%2090.3188L76.8589%2077.5675C75.025%2075.774%2073.5651%2073.6345%2072.5637%2071.2729C71.5623%2068.9113%2071.0393%2066.3746%2071.025%2063.8095C71.0107%2061.2444%2071.5054%2058.702%2072.4804%2056.3294C73.4555%2053.9568%2074.8914%2051.8012%2076.7053%2049.9874C78.5191%2048.1736%2080.6747%2046.7376%2083.0472%2045.7626C85.4198%2044.7876%2087.9623%2044.2929%2090.5273%2044.3072C93.0924%2044.3215%2095.6292%2044.8444%2097.9908%2045.8458C100.352%2046.8472%20102.492%2048.3071%20104.285%2050.141L117.037%2037.3897C102.421%2022.7726%2078.7227%2022.7726%2064.1075%2037.3897Z'%20fill='%23F9AB00'/%3e%3cpath%20d='M117.037%2037.3896L104.285%2050.141C107.856%2053.7917%20109.842%2058.7032%20109.814%2063.8095C109.785%2068.9157%20107.744%2073.8048%20104.133%2077.4155C100.523%2081.0262%2095.6336%2083.0673%2090.5274%2083.0958C85.4211%2083.1242%2080.5096%2081.1377%2076.8589%2077.5674L64.1075%2090.3188C78.7227%20104.934%20102.421%20104.934%20117.037%2090.3188C131.652%2075.7036%20131.654%2052.0049%20117.037%2037.3896Z'%20fill='%23E8710A'/%3e%3c/svg%3e",Di="/assets/figma-BrWkYh4v.png",Jo="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2022.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%202385.7%201919.9'%20style='enable-background:new%200%200%202385.7%201919.9;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23EA4335;}%20.st1{fill:%234285F4;}%20.st2{fill:%2334A853;}%20.st3{fill:%23FBBC05;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M1513.8,528.7h72.8l207.4-207.4l10.2-88c-385.9-340.6-975-303.9-1315.6,82C393.9,422.5,325.2,550,287.8,688%20c23.1-9.5,48.7-11,72.8-4.4l414.7-68.4c0,0,21.1-34.9,32-32.7c184.5-202.6,495-226.2,708-53.8H1513.8z'/%3e%3cpath%20class='st1'%20d='M2089.4,688c-47.7-175.5-145.5-333.3-281.6-454l-291,291c122.9,100.4,192.9,251.7,189.9,410.4v51.7%20c143.1,0,259,116,259,259c0,143.1-116,259-259,259h-518.1l-51.7,52.4v310.7l51.7,51.7h518.1c297,2.3,560.5-190.2,648.7-473.8%20C2443.4,1162.4,2335.4,854.4,2089.4,688L2089.4,688z'/%3e%3cpath%20class='st2'%20d='M669.8,1917h518.1v-414.7H669.8c-36.9,0-73.4-7.9-107-23.3l-72.8,22.5l-208.8,207.4l-18.2,72.8%20C380.1,1870.1,523,1917.6,669.8,1917L669.8,1917z'/%3e%3cpath%20class='st3'%20d='M669.8,571.6c-287.8,1.7-542.7,186-634.5,458.7c-91.8,272.7-0.3,573.7,227.8,749.1l300.5-300.5%20c-130.4-58.9-188.3-212.3-129.4-342.7c58.9-130.4,212.3-188.3,342.7-129.4c57.4,26,103.4,72,129.4,129.4l300.5-300.5%20C1078.9,668.6,880.2,570.9,669.8,571.6L669.8,571.6z'/%3e%3c/g%3e%3c/svg%3e",xh="/assets/notion-logo-no-background-C1XUKvDk.png",bh="/assets/python-logo-only-Bt12VGEE.png",yh="/assets/Miro-Icon-CLoaKXku.png",k2="/assets/RStudio-DE7lGCGx.png",z2="/assets/google-docs-4ZYrWyNZ.png",vh="/assets/Adobe%20Photoshop-Uqk2Zb6I.png",wh="/assets/Vue.js-DgkQqFWc.png",jh="/assets/Veutify-GjC5VotX.png",Ah="/assets/GitHub-BLfHCd-g.png",Nh="/assets/copilot-color-CWHkV5zn.png",fs="/assets/Canva-BLQe5K32.png",Sh=[{id:1,title:"Cornell x Google Cloud Capstone Project",description:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users.",image:gs,imageType:"laptop",caseStudyUrl:"/google-cloud-case-study",toolLogos:[Di,hh,xh,Jo,gh,fh,bh,mh,ph],tags:["UX Research","Product Design","UX Strategy","Google Cloud"]},{id:2,title:"Ithaca Soap Redesign",description:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap.",image:_n,imageType:"mobile",caseStudyUrl:"/ithaca-soap-case-study",toolLogos:[wh,jh,Ah,Nh,Di,fs,ms],tags:["Mobile App Design","AI Workflows","Development","UX Research","Vue.js"]},{id:3,title:"Routes to Roots App",description:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.",image:xs,imageType:"mobile",caseStudyUrl:"/routes-to-roots-case-study",toolLogos:[Di,yh,fs,k2,ms,z2,vh],tags:["UX Research","Interaction Design","Cultural Probes","Auto Ethnography"],award:"Awarded best project for social impact and uniqueness amongst 75+ others in class"},{id:4,title:"iName App",description:"Built a mobile app and wearable environment that helps people pronounce and remember names correctly, fostering identity and inclusion.",image:ch,imageType:"mobile",caseStudyUrl:"/iname-case-study",tags:["Mobile App Design","Wearable Technology","UX Research","Inclusivity Design"]},{id:5,title:"EcoCart App",description:"Designed a mobile app that makes sustainable grocery shopping simple and actionable by turning confusing eco-labels into clear choices.",image:dh,imageType:"laptop",caseStudyUrl:"/ecocart-case-study",tags:["Product Design","Sustainability","UX Research","Mobile App Design"]},{id:6,title:"Immunization Data Analysis Dashboard",description:"Developed an interactive dashboard that transforms messy vaccination data into clear insights for educators and policymakers.",image:uh,imageType:"mobile",caseStudyUrl:"/rshiny-case-study",tags:["Data Visualization","Interactive Design","R Shiny","Data Analysis"]}];function E2(){const r=A.useRef([]);A.useEffect(()=>{const d=[];return r.current.forEach((c,f)=>{if(c){const h=new IntersectionObserver(x=>{x.forEach(C=>{C.isIntersecting&&(C.target.style.animationDelay=`${f*.2}s`,C.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-100px"});h.observe(c),d.push(h)}}),()=>{d.forEach(c=>c.disconnect())}},[]);const m=d=>{window.location.href=d};return n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx(ta,{}),n.jsx("section",{className:"work-section",children:n.jsx("div",{className:"content-container",children:Sh.map((d,c)=>n.jsxs("div",{ref:f=>r.current[c]=f,className:`project-row ${c%2===1?"reverse":""}`,onClick:()=>m(d.caseStudyUrl),children:[n.jsx("div",{className:"mockup-side",children:n.jsx("div",{className:`mockup-image-wrapper ${d.imageType}`,children:d.image?n.jsx("img",{src:d.image,alt:`${d.title} mockup`,className:"mockup-image"}):n.jsxs("div",{className:"mockup-placeholder",children:[n.jsx("div",{children:"Project Mockup Image"}),n.jsxs("small",{children:["(",d.imageType," mockup)"]})]})})}),n.jsxs("div",{className:"content-side",children:[n.jsx("h2",{className:"project-title",children:d.title}),n.jsx("p",{className:"project-description",children:d.description}),d.tools&&n.jsx("div",{className:"tools-row",children:d.tools.map((f,h)=>n.jsx("div",{className:"tool-badge",title:f,children:n.jsx("span",{className:"tool-text",children:f})},h))}),d.toolLogos&&n.jsx("div",{className:"tool-logos-row",children:d.toolLogos.map((f,h)=>n.jsx("img",{src:f,alt:`tool-${h}`,className:"tool-logo"},h))}),d.id===3&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.75rem"},children:[n.jsx("img",{src:Zo,alt:"Trophy",style:{width:"28px",height:"28px",objectFit:"contain",marginRight:"0.5rem"}}),n.jsx("span",{style:{fontSize:"1.2rem",color:"#4a4a4a",fontWeight:400,lineHeight:"1.7"},children:"Awarded best project for social impact and uniqueness amongst 15+ teams in class"})]}),d.id===4&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.75rem"},children:[n.jsx("img",{src:Zo,alt:"Trophy",style:{width:"28px",height:"28px",objectFit:"contain",marginRight:"0.5rem"}}),n.jsx("span",{style:{fontSize:"1.2rem",color:"#4a4a4a",fontWeight:400,lineHeight:"1.7"},children:"Awarded best project for social impact amongst 250+ students in class"})]})]})]},d.id))})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaasrini",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com/shreayaa-srinivasan",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026 "})]})})]})}function At({end:r,suffix:m="",label:d,inView:c}){const[f,h]=A.useState(0),x=A.useRef(null);return A.useEffect(()=>{if(!c)return;const C=parseInt(r,10),w=3200,p=performance.now(),y=k=>{const N=Math.min((k-p)/w,1),M=1-(1-N)**3;h(Math.floor(M*C)),N<1?x.current=requestAnimationFrame(y):h(C)};return x.current=requestAnimationFrame(y),()=>cancelAnimationFrame(x.current)},[c,r]),n.jsxs("div",{className:"impact-item",children:[n.jsx("div",{className:`impact-box${c?" impact-visible":""}`,children:n.jsxs("span",{className:"impact-num",children:[f,m]})}),n.jsx("p",{className:"impact-lbl",children:d})]})}const zt=[{y:0,scale:1,rotate:0},{y:16,scale:.982,rotate:.4},{y:28,scale:.965,rotate:-.6},{y:37,scale:.95,rotate:.8}],C2=700,T2=120,ls=260;function ac({cards:r}){const[m,d]=za.useState(0),[c,f]=za.useState(null),h=za.useRef(0),x=za.useRef(0),C=za.useRef(null);za.useEffect(()=>{const k=()=>{const N=C.current?.querySelectorAll(".pain-stack-card");if(!N?.length)return;const M=Math.max(...[...N].map(H=>H.offsetHeight));f(M+zt[zt.length-1].y+6)};return k(),window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[r]),za.useEffect(()=>{const k=G=>{const ae=Math.max(0,Math.min(r.length,G));h.current=ae,d(ae)},N=G=>{const ae=C.current;if(!ae)return null;const V=ae.getBoundingClientRect(),de=(window.innerHeight-V.height)/2,fe=h.current;return(G>0?V.top<=de+1&&V.top>de-ls&&fe<r.length:V.top>=de-1&&V.top<de+ls&&fe>0)?V.top-de:null},M=G=>Math.sign(G)*Math.min(Math.abs(G),T2),H=(G,ae)=>{const V=N(ae);return V===null?!1:(G.preventDefault(),Math.abs(V)>1&&window.scrollBy(0,V),k(h.current+M(ae)/C2),!0)},q=G=>H(G,G.deltaY),Y=G=>{x.current=G.touches[0].clientY},B=G=>{const ae=x.current-G.touches[0].clientY;H(G,ae)&&(x.current=G.touches[0].clientY)},L=()=>{const G=C.current;if(!G)return;const ae=G.getBoundingClientRect(),V=(window.innerHeight-ae.height)/2;ae.top<V-ls?k(r.length):ae.top>V+ls&&k(0)};return window.addEventListener("wheel",q,{passive:!1}),window.addEventListener("touchstart",Y,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("scroll",L,{passive:!0}),L(),()=>{window.removeEventListener("wheel",q),window.removeEventListener("touchstart",Y),window.removeEventListener("touchmove",B),window.removeEventListener("scroll",L)}},[r.length]);const w=k=>1-(1-k)**3,p=(k,N,M)=>k+(N-k)*M,y=k=>{const N=Math.min(Math.floor(k),zt.length-1),M=Math.min(N+1,zt.length-1),H=Math.min(k-N,1);return{y:p(zt[N].y,zt[M].y,H),scale:p(zt[N].scale,zt[M].scale,H),rotate:p(zt[N].rotate,zt[M].rotate,H)}};return n.jsx("div",{ref:C,style:{position:"relative"},children:n.jsx("div",{className:"pain-stack-sticky",children:n.jsx("div",{className:"pain-stack-outer",style:c?{height:`${c}px`}:void 0,children:r.map((k,N)=>{const M=Math.max(0,Math.min(1,m-N)),H=Math.max(0,Math.min(zt.length-1,m-N-1)),{y:q,scale:Y,rotate:B}=y(H),L=(1-w(M))*115,ae=`translateX(calc(-50% + ${((N%2===0?-1:1)*L).toFixed(2)}vw)) translateY(${q.toFixed(1)}px) scale(${Y.toFixed(3)}) rotate(${B.toFixed(2)}deg)`;return n.jsxs("div",{className:"pain-stack-card",style:{opacity:M===0?0:Math.min(1,M*2),transform:ae,zIndex:10+N},children:[n.jsx("span",{className:"psc-num",children:k.num}),n.jsx("div",{className:"psc-bubble",children:k.msg})]},k.num)})})})})}function Ve({flip:r=!1}){const m=r?"M 255,5 C 255,60 40,20 40,75":"M 45,5 C 45,60 260,20 260,75";return n.jsx("div",{className:"road-connector","aria-hidden":"true",children:n.jsxs("svg",{viewBox:"0 0 300 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:m,stroke:"rgba(30,30,30,0.85)",strokeWidth:"28",strokeLinecap:"round"}),n.jsx("path",{d:m,stroke:"rgba(255,255,255,0.4)",strokeWidth:"1.5"}),n.jsx("path",{d:m,stroke:"rgba(255,255,255,0.8)",strokeWidth:"2",strokeDasharray:"12,9"}),n.jsxs("g",{children:[n.jsx("rect",{x:"-9",y:"-5.5",width:"18",height:"11",rx:"3.5",fill:"#e27396",stroke:"white",strokeWidth:"1"}),n.jsx("rect",{x:"-3",y:"-3.5",width:"6",height:"7",rx:"1.5",fill:"#fbd9e3"}),n.jsx("animateMotion",{dur:"12s",repeatCount:"indefinite",rotate:"auto",path:m})]}),n.jsxs("g",{children:[n.jsx("rect",{x:"-8",y:"-5",width:"16",height:"10",rx:"3.5",fill:"#74b5c6",stroke:"white",strokeWidth:"1"}),n.jsx("rect",{x:"-2.5",y:"-3",width:"5",height:"6",rx:"1.5",fill:"#d8eef3"}),n.jsx("animateMotion",{dur:"12s",begin:"-6s",repeatCount:"indefinite",rotate:"auto",path:m})]})]})})}const ff="/assets/ImpactFeas-BnxEt4jt.png",M2="/assets/designPrinciple1-CHipiyAz.png",D2="/assets/designPrinciple2-CgjPv5UU.png",R2="/assets/designPrinciple3-Ctta_cph.png",hf="/assets/pic1-C_TrIBke.png",pf="/assets/pic2-B0OVuRD6.png",gf="/assets/pic3-fothOjgn.png",xf="/assets/pic4-BdM-WB0-.png",bf="/assets/pic5-CVAkf2az.png",yf="/assets/mov1-B29nh02v.gif",vf="/assets/mov2-DxZgrtJC.gif",O2="/assets/designer-BFcu7eYU.png",U2="/assets/userresearcher-CXtnJ60P.png",B2="/assets/productmanager-CdG6H-Kd.png",_2=[{num:"01",label:"Navigation",msg:"Overwhelming navigation and amount of content"},{num:"02",label:"Search",msg:"Irrelevant search results and poor query matching"},{num:"03",label:"No Path",msg:"Lack of clear path to finding answers to a question"},{num:"04",label:"Guidance",msg:"No step-by-step guidance for non-technical users"}];function Qo({direction:r="left"}){return n.jsx("div",{className:`fd-arrow fd-arrow-${r}`,"aria-hidden":"true",children:n.jsxs("svg",{viewBox:"0 0 96 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M 88 10 C 68 30, 58 2, 44 16 C 34 26, 26 14, 12 28",stroke:"#2d2d2d",strokeWidth:"2.5",strokeLinecap:"round"}),n.jsx("path",{d:"M 23 24.5 L 12 28 L 16.5 17.5",stroke:"#2d2d2d",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}function H2(){const[r,m]=A.useState(!1),[d,c]=A.useState("context"),[f,h]=A.useState(null),x=A.useRef(null);A.useEffect(()=>{const y=new IntersectionObserver(H=>H.forEach(q=>q.isIntersecting&&q.target.classList.add("visible")),{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(H=>y.observe(H));const k=new IntersectionObserver(([H])=>{H.isIntersecting&&(m(!0),k.disconnect())},{threshold:.1});x.current&&k.observe(x.current);const N=["context","overview","problem","solution-preview","impact","design-process","final-design","not-to-build","takeaways","skills"],M=()=>{const H=window.innerHeight*.35;let q=N[0];for(const Y of N){const B=document.getElementById(Y);B&&B.getBoundingClientRect().top<=H&&(q=Y)}c(q)};return M(),window.addEventListener("scroll",M,{passive:!0}),()=>{y.disconnect(),k.disconnect(),window.removeEventListener("scroll",M)}},[]);const C=()=>document.getElementById("final-design")?.scrollIntoView({behavior:"smooth"}),w=[{src:Di,name:"Figma"},{src:hh,name:"Slack"},{src:xh,name:"Notion"},{src:Jo,name:"Google Cloud"},{src:gh,name:"Google Colab"},{src:fh,name:"Gemini"},{src:bh,name:"Python"},{src:mh,name:"DialogFlow CX"},{src:ph,name:"Vision AI"}],p=[{id:"context",label:"Context"},{id:"overview",label:"Overview"},{id:"problem",label:"Problem"},{id:"solution-preview",label:"Solution"},{id:"impact",label:"Key Outputs"},{id:"design-process",label:"Design Process"},{id:"final-design",label:"Final Design"},{id:"not-to-build",label:"Prioritization"},{id:"takeaways",label:"3 Lessons Learned"},{id:"skills",label:"Skills Built"}];return n.jsxs("div",{className:"cs-root",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: linear-gradient(160deg, #eaf2d7 0%, #efcfe3 35%, #b3dee2 70%, #ea9ab2 100%);
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
          background: rgba(198,236,201,0.55); /* pastel green */
          padding: 0.05em 0.28em;
          border-radius: 2px; /* sharp-ish edges, not a pill */
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
      `}),n.jsx(ta,{}),n.jsxs("div",{className:"cs-hero",children:[n.jsx("img",{src:gs,alt:"Google Cloud Capstone Project — Final Product",className:"cs-hero-img"}),n.jsx("p",{className:"cs-hero-subtitle",children:"Final Product View"})]}),n.jsxs("div",{className:"cs-page-layout",children:[n.jsx("aside",{className:"cs-sidebar","aria-label":"Section navigation",children:n.jsx("nav",{className:"cs-sidebar-nav",children:p.map(y=>n.jsx("a",{href:`#${y.id}`,className:`cs-sidebar-link${d===y.id?" active":""}`,onClick:k=>{k.preventDefault(),document.getElementById(y.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:y.label},y.id))})}),n.jsxs("div",{className:"cs-content",children:[n.jsxs("div",{className:"cs-intro",id:"context",children:[n.jsxs("div",{className:"cs-logo-bar fade-up",children:[n.jsx("div",{className:"cs-cornell-badge",children:"Cornell University"}),n.jsx("span",{className:"cs-logo-sep",children:"×"}),n.jsx("img",{src:Jo,alt:"Google Cloud",className:"cs-gc-logo"})]}),n.jsx("div",{className:"cs-tags fade-up",children:["UX Research","Product Design","UX Strategy","Google Cloud"].map(y=>n.jsx("span",{className:"cs-tag",children:y},y))}),n.jsx("p",{className:"cs-sublabel fade-up",children:"What is this project?"}),n.jsx("p",{className:"cs-oneliner fade-up",children:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users."}),n.jsxs("div",{className:"cs-meta fade-up",children:[n.jsxs("div",{className:"cs-meta-row cs-meta-row-top",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Client"}),n.jsx("div",{className:"cs-meta-val",children:"Google Cloud (CGC)"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Institution"}),n.jsx("div",{className:"cs-meta-val",children:"Cornell University"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"My Role"}),n.jsx("div",{className:"cs-meta-val",children:"UX Researcher & Product Designer"})]})]}),n.jsxs("div",{className:"cs-meta-row cs-meta-row-mid",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Timeline"}),n.jsx("div",{className:"cs-meta-val",children:"13 Weeks · May 2025"})]}),n.jsxs("div",{className:"cs-meta-cell cs-meta-team",children:[n.jsx("div",{className:"cs-meta-key",children:"Team"}),n.jsxs("div",{className:"cs-meta-team-avatars","aria-label":"Project team avatars",children:[n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:O2,alt:"Designer icon",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:"3 Designers"})]}),n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:U2,alt:"Researcher icon",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:"3 Researchers"})]}),n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:B2,alt:"Product manager icon",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:"2 Product Managers"})]})]})]})]}),n.jsx("div",{className:"cs-meta-row cs-meta-row-tools",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-tools",children:[n.jsx("div",{className:"cs-meta-key",children:"Tools"}),n.jsx("div",{className:"cs-tool-logos",children:w.map(y=>n.jsxs("div",{className:"cs-tool-item",children:[n.jsx("img",{src:y.src,alt:y.name,title:y.name,className:"cs-tool-logo"}),n.jsx("p",{className:"cs-tool-name",children:y.name})]},y.name))})]})})]})]}),n.jsxs("div",{className:"cs-section",id:"overview",children:[n.jsx("p",{className:"cs-section-label",children:"Overview"}),n.jsxs("div",{className:"cs-body fade-up",children:[n.jsx("p",{children:"This project was my capstone project in collaboration with Google Cloud. It was an amazing opportunity to work directly with one of the leading companies in the industry. I was beyond excited to gain such an opportunity."}),n.jsxs("p",{children:["Our team worked with the wonderful Alex Pytlarz on this project, who mentored us and gave us something unusual to work on. The plot of the project was to"," ",n.jsx("span",{className:"cs-highlight",children:"redesign the Google Cloud platform by designing two Gen-AI-centric apps using Google Cloud products"})," ","and understanding their product. We had to identify areas for improvement by keeping a diary study and then"," ",n.jsx("span",{className:"cs-highlight",children:"building a well-rounded UX and content strategy solution"}),"."]}),n.jsxs("p",{children:["We weren't observing the users. We were the users. In the next 6 weeks, we ran diary studies while building two working GenAI applications. Furthermore, we conducted"," ",n.jsx("span",{className:"cs-highlight",children:"external interviews with engineers"}),", synthesized the findings into a"," ",n.jsx("span",{className:"cs-highlight",children:"UX design solution proposal"}),", and presented it live to our Google stakeholders."]}),n.jsxs("p",{children:["Our client was not only happy with our solution proposal, but to"," ",n.jsx("span",{className:"cs-highlight",children:"see the live changes on cloud.google.com months later"})," ","was the rewarding part of this project."]})]})]}),n.jsxs("div",{className:"cs-section",id:"problem",children:[n.jsx("p",{className:"cs-section-label",children:"Problem"}),n.jsxs("div",{className:"cs-body",children:[n.jsx("p",{className:"cs-bold-intro fade-up",children:"Google Cloud is an incredibly powerful platform. But getting started as someone new felt like being dropped in the ocean without a map."}),n.jsx("p",{className:"fade-up",children:"From the moment I started engaging with Google Cloud, I started to get the hang of the sheer amount of content. As part of the project, we built two Gen AI products:"}),n.jsxs("div",{className:"problem-list",children:[n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"1"}),n.jsxs("div",{className:"problem-text",children:[n.jsx("strong",{children:"Photo-Haiku App:"})," An App that takes in a picture from the user and turns it into a beautiful haiku. "]})]}),n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"2"}),n.jsxs("div",{className:"problem-text",children:[n.jsx("strong",{children:"Cornell Chatbot:"})," A chatbot for Cornell University to answer enrollment questions for new admits."]})]})]}),n.jsxs("p",{className:"fade-up",style:{marginTop:"2rem"},children:["While using Google Cloud products to aid us with the development of these apps,"," ",n.jsx("span",{className:"cs-highlight",children:"we realized the Google Cloud solution generator was text-heavy and unreliable."})," ","There were times when the"," ",n.jsx("span",{className:"cs-highlight",children:"documentation was outdated"}),", so we had to resort to using other resources like LLMs and YouTube. Once both the apps were built, we put together the major pain points faced."]})]}),n.jsx(ac,{cards:_2})]}),n.jsxs("div",{className:"cs-section",id:"solution-preview",children:[n.jsx("p",{className:"cs-section-label",children:"Solution Preview"}),n.jsx("p",{className:"cs-solution-oneliner fade-up",children:"Watch a walkthrough of the final design solution we built."}),n.jsx("div",{className:"cs-video-wrap fade-up",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/g4A4sPdYbSs",title:"Google Cloud Guided Onboarding Experience",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),n.jsxs("button",{className:"cs-skip-btn fade-up",onClick:C,children:[n.jsx("span",{className:"cs-skip-icon","aria-hidden":!0,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v10M7 12l5 5 5-5"})})}),n.jsx("span",{className:"cs-skip-label",children:"In a hurry? Skip to the final design"})]})]}),n.jsxs("div",{className:"cs-section",id:"impact",ref:x,children:[n.jsx("p",{className:"cs-section-label",children:"Key Outputs"}),n.jsxs("p",{className:"impact-note fade-up",children:["An invaluable impact was seeing our design proposal implemented live on"," ",n.jsx("a",{href:"https://cloud.google.com",target:"_blank",rel:"noopener noreferrer",children:"cloud.google.com"}),"."]}),n.jsxs("div",{className:"impact-row",children:[n.jsx(At,{end:2,suffix:"",inView:r,label:"GenAI-centric apps built from scratch using Google Cloud products"}),n.jsx(At,{end:10,suffix:"+",inView:r,label:"User interviews conducted across internal and external participants"}),n.jsx(At,{end:20,suffix:"+",inView:r,label:"How might we? questions generated to guide the design process"}),n.jsx(At,{end:1,suffix:"",inView:r,label:"High-fidelity prototype presented live to Google stakeholders"})]})]}),n.jsxs("div",{className:"cs-section",id:"design-process",children:[n.jsx("p",{className:"cs-section-label",children:"Design Process"}),n.jsx("p",{className:"process-intro fade-up",children:"The design process was a messy long road, every insight led to new questions, and every iteration surfaced something we had missed."}),n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:yf,alt:"Haiku App Creation",className:"clickable-image",onClick:()=>h(yf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"01"}),n.jsx("h3",{className:"ps-title",children:"Haiku App Creation"}),n.jsx("p",{className:"ps-text",children:"Created an app that took in an image and turned it into a beautiful haiku. Used Google Cloud's solution generator, Vertex AI, cloud documentation, and tools like ChatGPT and Gemini to build it. Coded in Python on Google Colab and deployed on Streamlit."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:vf,alt:"Chatbot Creation",className:"clickable-image",onClick:()=>h(vf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"02"}),n.jsx("h3",{className:"ps-title",children:"Chatbot Creation"}),n.jsx("p",{className:"ps-text",children:"Created a chatbot to answer questions about Cornell programs, deadlines, and contacts. Designed and trained it in Dialogflow CX, integrating Gemini for advanced language understanding. Built the HTML front-end and deployed on Firebase Hosting."})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:hf,alt:"Diary Study Research",className:"clickable-image",onClick:()=>h(hf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"03"}),n.jsx("h3",{className:"ps-title",children:"Diary Study Research"}),n.jsx("p",{className:"ps-text",children:"Kept individual and team diary studies, noting key obstacles, resources that helped overcome them, and more. Every frustration, every workaround, every moment of clarity became a data point for what to improve."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:pf,alt:"Research Synthesis",className:"clickable-image",onClick:()=>h(pf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"04"}),n.jsx("h3",{className:"ps-title",children:"Research Synthesis"}),n.jsx("p",{className:"ps-text",children:"Analyzed common pain points using affinity mapping and prioritized four main friction areas. Brought both teams' diary studies together to find patterns and turn scattered observations into clear pain points."})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:gf,alt:"Identifying Opportunities",className:"clickable-image",onClick:()=>h(gf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"05"}),n.jsx("h3",{className:"ps-title",children:"Identifying Opportunities"}),n.jsx("p",{className:"ps-text",children:"Brainstormed opportunity areas to solve the main friction points identified. Created an impact-feasibility matrix to prioritize which opportunities were worth designing for within our timeline."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:xf,alt:"How Might We",className:"clickable-image",onClick:()=>h(xf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"06"}),n.jsx("h3",{className:"ps-title",children:"How Might We?"}),n.jsx("p",{className:"ps-text",children:'Brainstormed 20+ "How Might We?" questions to guide the design process. Reframing pain points into opportunities helped us shift from describing problems to designing solutions. We converged on one final HMW to drive the entire design.'})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:bf,alt:"Design Ideation",className:"clickable-image",onClick:()=>h(bf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"07"}),n.jsx("h3",{className:"ps-title",children:"Design Ideation"}),n.jsx("p",{className:"ps-text",children:"Connected the HMW questions to possible design solutions by sketching low-fi expressions of each feature. Iterated the designs multiple times and incorporated stakeholder feedback before arriving at the final design."})]}),n.jsx("div",{})]})]})]}),n.jsxs("div",{className:"cs-section",id:"final-design",children:[n.jsx("p",{className:"cs-section-label",children:"Final Design"}),n.jsxs("div",{className:"fd-row",children:[n.jsx(Qo,{direction:"left"}),n.jsxs("div",{className:"fade-left",children:[n.jsx("div",{className:"fd-img",children:n.jsx("img",{src:M2,alt:"Interactivity by Default design principle"})}),n.jsx("p",{className:"fd-img-caption",children:"Interactivity by Default"})]}),n.jsxs("div",{className:"fade-right",children:[n.jsx("p",{className:"fd-why",children:"Pain point 1"}),n.jsx("p",{className:"fd-pain-point",children:"No clear path to find answers the users were looking for"}),n.jsx("p",{className:"fd-why",children:"Why this works"}),n.jsx("p",{className:"fd-desc",children:"Your steps are personalized to your use case, combating overwhelming navigation. Instead of confronting users with walls of content, the experience adapts to whatever you're building, making Google Cloud feel like it was designed for you."})]})]}),n.jsxs("div",{className:"fd-row",children:[n.jsx(Qo,{direction:"right"}),n.jsxs("div",{className:"fade-left",children:[n.jsx("p",{className:"fd-why",children:"Pain point 2"}),n.jsx("p",{className:"fd-pain-point",children:"Overwhelming navigation and amount of content"}),n.jsx("p",{className:"fd-why",children:"Why this works"}),n.jsx("p",{className:"fd-desc",children:"Reduces cognitive load while providing a clear and linear guide to even non-technical users. Information is revealed incrementally, only what's needed at each stage, so users never feel overwhelmed by the depth of Google Cloud's ecosystem."})]}),n.jsxs("div",{className:"fade-right",children:[n.jsx("div",{className:"fd-img",children:n.jsx("img",{src:D2,alt:"Step-by-step guidance with progressive disclosure"})}),n.jsx("p",{className:"fd-img-caption",children:"Step-by-Step Guidance with Progressive Disclosure"})]})]}),n.jsxs("div",{className:"fd-row",children:[n.jsx(Qo,{direction:"left"}),n.jsxs("div",{className:"fade-left",children:[n.jsx("div",{className:"fd-img",children:n.jsx("img",{src:R2,alt:"Clarity through concise visual communication"})}),n.jsx("p",{className:"fd-img-caption",children:"Clarity through Concise Visual Communication"})]}),n.jsxs("div",{className:"fade-right",children:[n.jsx("p",{className:"fd-why",children:"Pain point 3"}),n.jsx("p",{className:"fd-pain-point",children:"Irrelevant search results and poor query matching"}),n.jsx("p",{className:"fd-why",children:"Why this works"}),n.jsx("p",{className:"fd-desc",children:"Reduces cognitive load while solving irrelevant results and poor query matching. Visuals, icons, and concise language replace dense text, so users can scan, understand, and act without getting lost in documentation."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"not-to-build",children:[n.jsx("p",{className:"cs-section-label",children:"What We Decided Not to Build & Why"}),n.jsxs("div",{className:"matrix-container fade-up",children:[n.jsx("img",{src:ff,alt:"Impact vs Feasibility Matrix",className:"clickable-image",onClick:()=>h(ff),style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"matrix-caption",children:"We had to prioritize to build the most impactful solution within the deadline"})]})]}),n.jsxs("div",{className:"cs-section",id:"takeaways",children:[n.jsx("p",{className:"cs-section-label",children:"3 Things This Project Taught Me"}),n.jsxs("div",{className:"learnings-list",children:[n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"1"}),n.jsx("p",{className:"learning-text",children:"We need to rethink interaction flows and features beyond the classic text chatbot. It needs to be a seamless guiding experience."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"2"}),n.jsx("p",{className:"learning-text",children:"LLMs changed so much over the course of this project. This really taught me the crucial importance of flexibility and the rapid ability to adopt new technologies."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"3"}),n.jsx("p",{className:"learning-text",children:"AI is really lowering the bar to entry for non-technical users, opening the door to innovation like never before."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"skills",children:[n.jsx("p",{className:"cs-section-label",children:"Skills Built Through This Project"}),n.jsx("div",{className:"skills-pills",children:["Diary Study Design","Contextual & Exit Interviews","AutoEthnography Method","Cloud Design","Insight Synthesis","UX Strategy","High-fi Prototyping","Impact-Feasibility Prioritization","Cross-Functional Leadership","Stakeholder Communication","AI app development"].map(y=>n.jsx("span",{className:"skill-pill fade-up",children:y},y))})]}),n.jsx("div",{className:"cs-the-end",children:n.jsx("p",{className:"cs-the-end-text fade-up",children:"THE END"})})]})]}),n.jsxs("div",{className:"see-next",children:[n.jsx("p",{className:"see-next-label fade-up",children:"See Next"}),n.jsxs("div",{className:"see-next-grid",children:[n.jsxs("a",{href:"/ithaca-soap-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:_n,alt:"Ithaca Soap Redesign",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Ithaca Soap Redesign"}),n.jsx("p",{className:"see-next-desc",children:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap."})]})]}),n.jsxs("a",{href:"/routes-to-roots-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:xs,alt:"Routes to Roots App",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Routes to Roots App"}),n.jsx("p",{className:"see-next-desc",children:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life."})]})]})]})]}),n.jsx(Gn,{}),f&&n.jsx("div",{className:"image-modal-overlay",onClick:()=>h(null),children:n.jsxs("div",{className:"image-modal-content",onClick:y=>y.stopPropagation(),children:[n.jsx("button",{className:"image-modal-close",onClick:()=>h(null),children:"×"}),n.jsx("img",{src:f,alt:"Enlarged view"})]})})]})}const wf="/assets/research-Dy-Yj-XN.png",L2="/assets/personas-Cb3OfggG.png",jf="/assets/taskscenarios-BLZBGHwT.png",Af="/assets/lowfi-faHI8EVU.jpeg",Nf="/assets/usability-eVp3xNT-.png",Sf="/assets/home-Ba7_dTQe.png",kf="/assets/product-DLjul-A_.png",zf="/assets/community-Dx9d02AZ.png",Ef="/assets/deals-Dp1FQkOi.png",Y2="/assets/founders-9LKqJv-z.png",G2="/assets/team-D-qvVc-h.JPG",Xo="/assets/girl-DyRSX-Uk.png",q2=[{num:"01",msg:"Users prefer products that are easy to use and store, especially in small living spaces."},{num:"02",msg:"Fragrance and how the products feel on the skin are consistently important across users."},{num:"03",msg:"Ingredient transparency and simple explanations are critical to building trust."},{num:"04",msg:"Design and presentation of the product influence purchasing decisions, especially for new users."},{num:"05",msg:"Users are open to sustainability when it aligns with comfort, price, and clarity."},{num:"06",msg:"Users want clarity on whether one product can really do it all."}];function Q2(){const[r,m]=A.useState(!1),[d,c]=A.useState("context"),[f,h]=A.useState(null),x=A.useRef(null);A.useEffect(()=>{const k=new IntersectionObserver(q=>q.forEach(Y=>Y.isIntersecting&&Y.target.classList.add("visible")),{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(q=>k.observe(q));const N=new IntersectionObserver(([q])=>{q.isIntersecting&&(m(!0),N.disconnect())},{threshold:.1});x.current&&N.observe(x.current);const M=["context","overview","problem","solution-preview","impact","design-process","final-design","takeaways","skills"],H=()=>{const q=window.innerHeight*.35;let Y=M[0];for(const B of M){const L=document.getElementById(B);L&&L.getBoundingClientRect().top<=q&&(Y=B)}c(Y)};return H(),window.addEventListener("scroll",H,{passive:!0}),()=>{k.disconnect(),N.disconnect(),window.removeEventListener("scroll",H)}},[]);const C=()=>document.getElementById("final-design")?.scrollIntoView({behavior:"smooth"}),w=[{src:wh,name:"Vue.js"},{src:jh,name:"Vuetify"},{src:Ah,name:"GitHub"},{src:Nh,name:"Microsoft Copilot"},{src:Di,name:"Figma"},{src:fs,name:"Canva"},{src:ms,name:"ChatGPT"}],p=[{name:"Shreayaa Srinivasan",avatar:Xo},{name:"Hrishika Jotwani",avatar:Xo},{name:"Siying Wang",avatar:Xo}],y=[{id:"context",label:"Context"},{id:"overview",label:"Overview"},{id:"problem",label:"Problem"},{id:"solution-preview",label:"Solution"},{id:"impact",label:"Key Output"},{id:"design-process",label:"Design Process"},{id:"final-design",label:"Final Design"},{id:"takeaways",label:"3 Lessons Learned"},{id:"skills",label:"Skills Built"}];return n.jsxs("div",{className:"cs-root",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: linear-gradient(160deg, #eaf2d7 0%, #efcfe3 35%, #b3dee2 70%, #ea9ab2 100%);
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
          background: rgba(198,236,201,0.55);
          padding: 0.05em 0.28em;
          border-radius: 2px;
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
      `}),n.jsx(ta,{}),n.jsxs("div",{className:"cs-hero",children:[n.jsx("img",{src:_n,alt:"Ithaca Soap Mobile App — Final Product",className:"cs-hero-img"}),n.jsx("p",{className:"cs-hero-subtitle",children:"Final Product View"})]}),n.jsxs("div",{className:"cs-page-layout",children:[n.jsx("aside",{className:"cs-sidebar","aria-label":"Section navigation",children:n.jsx("nav",{className:"cs-sidebar-nav",children:y.map(k=>n.jsx("a",{href:`#${k.id}`,className:`cs-sidebar-link${d===k.id?" active":""}`,onClick:N=>{N.preventDefault(),document.getElementById(k.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:k.label},k.id))})}),n.jsxs("div",{className:"cs-content",children:[n.jsxs("div",{className:"cs-intro",id:"context",children:[n.jsx("div",{className:"cs-tags fade-up",children:["Mobile App Design","AI Workflows","Product Design","Development","UX Research","Vue.js"].map(k=>n.jsx("span",{className:"cs-tag",children:k},k))}),n.jsx("p",{className:"cs-sublabel fade-up",children:"What is this project?"}),n.jsx("p",{className:"cs-oneliner fade-up",children:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap."}),n.jsxs("div",{className:"cs-meta fade-up",children:[n.jsxs("div",{className:"cs-meta-row cs-meta-row-top",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Client"}),n.jsx("div",{className:"cs-meta-val",children:"Ithaca Soap"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Institution"}),n.jsx("div",{className:"cs-meta-val",children:"Cornell University"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"My Role"}),n.jsx("div",{className:"cs-meta-val",children:"UX Engineer & UX Researcher"})]})]}),n.jsxs("div",{className:"cs-meta-row cs-meta-row-mid",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Timeline"}),n.jsx("div",{className:"cs-meta-val",children:"13 Weeks · May 2025"})]}),n.jsxs("div",{className:"cs-meta-cell cs-meta-team",children:[n.jsx("div",{className:"cs-meta-key",children:"Team"}),n.jsx("div",{className:"cs-meta-team-avatars","aria-label":"Project team",children:p.map(k=>n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:k.avatar,alt:k.name,className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:k.name.split(" ")[0]})]},k.name))})]})]}),n.jsx("div",{className:"cs-meta-row cs-meta-row-tools",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-tools",children:[n.jsx("div",{className:"cs-meta-key",children:"Tools"}),n.jsx("div",{className:"cs-tool-logos",children:w.map(k=>n.jsxs("div",{className:"cs-tool-item",children:[n.jsx("img",{src:k.src,alt:k.name,title:k.name,className:"cs-tool-logo"}),n.jsx("p",{className:"cs-tool-name",children:k.name})]},k.name))})]})})]})]}),n.jsxs("div",{className:"cs-section",id:"overview",children:[n.jsx("p",{className:"cs-section-label",children:"Overview"}),n.jsxs("div",{className:"cs-body fade-up",children:[n.jsx("p",{className:"cs-bold-intro",children:"Ithaca Soap is a local small business brand in Ithaca."}),n.jsxs("p",{children:["They are known for their sustainable products like water-free, plastic-free soaps and ingredient transparency. They have a ",n.jsx("span",{className:"cs-highlight",children:"regular customer base in the local Ithaca farmers' market"}),". But their online presence didn't have a good reach, and their website didn't quite reflect what made them different. Our team ",n.jsx("span",{className:"cs-highlight",children:"partnered with Ithaca Soap to design and build their mobile app from scratch"}),"."]}),n.jsxs("p",{children:["We started from the research, ",n.jsx("span",{className:"cs-highlight",children:"talked to the users to understand their goals"}),", created user personas, task scenarios, ",n.jsx("span",{className:"cs-highlight",children:"prototyped the product with APIs,"})," and ",n.jsx("span",{className:"cs-highlight",children:"built an installable PWA (progressive web app) using Vue.js"}),". This case study captures my process with this project in a gist."]})]})]}),n.jsxs("div",{className:"cs-section",id:"problem",children:[n.jsx("p",{className:"cs-section-label",children:"Problem"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",alignItems:"center"},children:[n.jsxs("div",{className:"cs-body",children:[n.jsx("p",{className:"cs-bold-intro fade-up",children:"When we first sat down with Wendy, the Ithaca Soap co-founder, two things became pretty clear."}),n.jsxs("div",{className:"problem-list",children:[n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"1"}),n.jsx("div",{className:"problem-text",children:"Most customers found them by stumbling onto their farmers' market stall, or they were people who found the product by word of mouth. There was not much reach through their existing website."})]}),n.jsxs("div",{className:"problem-item fade-up",children:[n.jsx("span",{className:"problem-n",children:"2"}),n.jsx("div",{className:"problem-text",children:"The product itself was genuinely confusing to people who hadn't tried it. One soap for everything? That sounds like an unreliable claim."})]})]}),n.jsx("p",{className:"fade-up",style:{marginTop:"1.5rem"},children:"After understanding the stakeholders' branding and expectations, we moved on to the users. I conducted interviews and field studies with several users to understand their goals."})]}),n.jsx("img",{src:Y2,alt:"Ithaca Soap founders",className:"fade-up",style:{width:"100%",maxWidth:"360px",height:"auto",display:"block",borderRadius:"10px"}})]}),n.jsx(ac,{cards:q2})]}),n.jsxs("div",{className:"cs-section",id:"solution-preview",children:[n.jsx("p",{className:"cs-section-label",children:"Solution Preview"}),n.jsx("p",{className:"cs-solution-oneliner fade-up",children:"Here is a walkthrough of the final design solution."}),n.jsx("div",{className:"cs-video-wrap fade-up",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/GDo7jKW1DII",title:"Ithaca Soap App Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),n.jsxs("button",{className:"cs-skip-btn fade-up",onClick:C,children:[n.jsx("span",{className:"cs-skip-icon","aria-hidden":!0,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v10M7 12l5 5 5-5"})})}),n.jsx("span",{className:"cs-skip-label",children:"In a hurry? Skip to the final design"})]})]}),n.jsxs("div",{className:"cs-section",id:"impact",ref:x,children:[n.jsx("p",{className:"cs-section-label",children:"Key Output"}),n.jsxs("div",{className:"impact-row",children:[n.jsx(At,{end:10,suffix:"",inView:r,label:"User interviews across 3 target groups"}),n.jsx(At,{end:3,suffix:"",inView:r,label:"Personas built from real research"}),n.jsx(At,{end:3,suffix:"",inView:r,label:"Task scenarios created to map user goals to features"}),n.jsx(At,{end:5,suffix:"",inView:r,label:"App screens fully designed and coded"}),n.jsx(At,{end:1,suffix:"",inView:r,label:"Working & installable Vue.js app shipped and deployed"})]})]}),n.jsxs("div",{className:"cs-section",id:"design-process",children:[n.jsx("p",{className:"cs-section-label",children:"Design Process"}),n.jsx("p",{className:"process-intro fade-up",children:"The process wasn't linear, each phase informed the next. The research uncovered needs, design translated them, and testing revealed what still needed work."}),n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:wf,alt:"Research & field studies",className:"clickable-image",onClick:()=>h(wf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"01"}),n.jsx("h3",{className:"ps-title",children:"Research"}),n.jsx("p",{className:"ps-text",children:"When it came to research, we chose user interviews and field studies. Field studies, because we wanted to see the relationship the users have with their products live. For example, one of our users explained how she wanted the product to fit in a particular space in her shower, which we understood clearly through field research."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("img",{src:L2,alt:"Persona cards",style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"ps-num",children:"02"}),n.jsx("h3",{className:"ps-title",children:"Personas"}),n.jsx("p",{className:"ps-text",children:"Once the initial user research was completed, we created three user personas to guide us through the design process. By focusing on the three personas, we wanted to resist the temptation to design for everyone."}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Priya Malhotra"}),", a busy PhD student open to sustainable products if they're convenient and feel luxurious."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Sharon Kim"}),", a small business owner and eco-product advocate who values clear ingredients."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Dr. Florence Morris"}),", a professor with sensitive skin who values dermatologist-backed, biodegradable options."]})]})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:jf,alt:"Task scenarios",className:"clickable-image",onClick:()=>h(jf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"03"}),n.jsx("h3",{className:"ps-title",children:"Task Scenarios"}),n.jsx("p",{className:"ps-text",children:"We brainstormed: What are the most important things that every user must be able to accomplish on this app? Once that was figured out, we wrote down three task scenarios that helped provide context during usability testing so users could engage with the interface and pretend to perform the intended tasks."}),n.jsxs("div",{className:"ps-scenario",children:[n.jsx("p",{className:"ps-scenario-label",children:"Scenario 1 · Priya"}),n.jsx("p",{className:"ps-scenario-text",children:"You're looking for a sustainable personal care product that combines multiple uses, is gentle on the skin, and has a pleasant scent. Find a product on the app that meets these needs and learn more about how to use it."})]}),n.jsxs("div",{className:"ps-scenario",children:[n.jsx("p",{className:"ps-scenario-label",children:"Scenario 2 · Sharon"}),n.jsx("p",{className:"ps-scenario-text",children:"You're ready to restock your favorite soap and are curious if there are any current offers or rewards available. Explore the app to find a product you haven't tried before and discover how you can earn a reward by participating in the community."})]}),n.jsxs("div",{className:"ps-scenario",children:[n.jsx("p",{className:"ps-scenario-label",children:"Scenario 3 · Dr. Morris"}),n.jsx("p",{className:"ps-scenario-text",children:"You want to know whether any of the products are safe for your skin and want to read more about the company's values before deciding whether to buy. Use the app to evaluate product options and learn about the company's sustainability efforts."})]})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Af,alt:"Low-fidelity sketches",className:"clickable-image",onClick:()=>h(Af)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"04"}),n.jsx("h3",{className:"ps-title",children:"Low-fi Designs"}),n.jsx("p",{className:"ps-text",children:"Finally, when the design phase started, we connected the user goals to the features the app needed to have the specific screens that they had to be placed in. The design ideation started with low-fidelity paper sketches, and then, after three iterations, moved to a more mid-fidelity prototype coded with Vue.js."})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Nf,alt:"Usability testing",className:"clickable-image",onClick:()=>h(Nf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"05"}),n.jsx("h3",{className:"ps-title",children:"Usability Testing & Iteration"}),n.jsx("p",{className:"ps-text",children:"To evaluate the prototype efficiently, we used the task scenarios to understand how users reacted to the product in a real-time setting."}),n.jsxs("div",{className:"ps-testing-grid",children:[n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Participants"}),n.jsx("p",{className:"ps-testing-val",children:"3 individuals, each representing a core persona."})]}),n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Device"}),n.jsx("p",{className:"ps-testing-val",children:"Testing was conducted on a mobile phone with the PWA installed to reflect a real-time setting."})]}),n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Method"}),n.jsx("p",{className:"ps-testing-val",children:"Each participant completed all three task scenarios in a randomized order. No help or push was given during testing, and our real-time observations were documented."})]}),n.jsxs("div",{className:"ps-testing-item",children:[n.jsx("p",{className:"ps-testing-key",children:"Consent"}),n.jsx("p",{className:"ps-testing-val",children:"Verbal consent was obtained. No audio or video recordings were made. Notes were taken anonymously and stored securely."})]})]}),n.jsx("p",{className:"ps-text",style:{marginTop:".75rem"},children:"After the usability testing, we analyzed the insights to extract key findings like what worked well and what needed improvement."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("img",{src:_n,alt:"High-fidelity prototype",style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"ps-num",children:"06"}),n.jsx("h3",{className:"ps-title",children:"Hi-fi Prototype"}),n.jsx("p",{className:"ps-text",children:"We made revisions to the mid-fidelity prototype to reflect the issues raised during usability testing."}),n.jsx("p",{className:"ps-text",children:"This high-fidelity prototype of the Ithaca Soap mobile app translates the brand's mission of sustainability and ingredient transparency into a polished user-centered digital experience. Built using Vue.js and Vuetify, the app simulates the full customer journey from discovering gentle, multi-use soaps to engaging with community stories and local retail partners."})]})]})]})]}),n.jsxs("div",{className:"cs-section",id:"final-design",children:[n.jsx("p",{className:"cs-section-label",children:"Final Design"}),n.jsx("img",{src:Sf,alt:"Ithaca Soap final design — homepage",className:"fade-up clickable-image",onClick:()=>h(Sf),style:{width:"100%",height:"auto",display:"block"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("img",{src:kf,alt:"Ithaca Soap final design — product",className:"fade-up clickable-image",onClick:()=>h(kf),style:{width:"100%",height:"auto",display:"block",marginTop:"2rem"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("img",{src:zf,alt:"Ithaca Soap final design — community",className:"fade-up clickable-image",onClick:()=>h(zf),style:{width:"100%",height:"auto",display:"block",marginTop:"2rem"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("img",{src:Ef,alt:"Ithaca Soap final design — deals",className:"fade-up clickable-image",onClick:()=>h(Ef),style:{width:"100%",height:"auto",display:"block",marginTop:"2rem"}}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"})]}),n.jsxs("div",{className:"cs-section",id:"takeaways",children:[n.jsx("p",{className:"cs-section-label",children:"3 Things This Project Taught Me"}),n.jsxs("div",{className:"learnings-list",children:[n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"1"}),n.jsx("p",{className:"learning-text",children:"Field studies are really powerful in terms of observing the users in the context."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"2"}),n.jsx("p",{className:"learning-text",children:"Designing for sustainability taught me a lot. This only works when the product doesn't ask users to compromise on anything they actually care about like price and comfort on their skin. So the design had to be really intentional about how to communicating sustainability without compromise."})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"3"}),n.jsx("p",{className:"learning-text",children:"The founder obviously knew her customers better than we did, and learning to design with that knowledge rather than around it made the product better."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"skills",children:[n.jsx("p",{className:"cs-section-label",children:"Skills Gained Through This Project"}),n.jsx("div",{className:"skills-pills",children:["Semi-structured User Interviewing","Field Studies","Persona Development","Task Scenario Mapping","Vue.js Frontend Development","UI Architecture (Vuetify)","Scope Decision-Making","AI Assisted Prototyping Methods","Prototyping","Client Communication"].map(k=>n.jsx("span",{className:"skill-pill fade-up",children:k},k))})]}),n.jsxs("div",{className:"cs-section",id:"people",children:[n.jsx("p",{className:"cs-section-label",children:"The People Behind All This"}),n.jsx("div",{className:"people-img-wrap fade-up",children:n.jsx("img",{src:G2,alt:"Ithaca Soap team"})})]}),n.jsx("div",{className:"cs-the-end",children:n.jsx("p",{className:"cs-the-end-text fade-up",children:"THE END"})})]})]}),n.jsxs("div",{className:"see-next",children:[n.jsx("p",{className:"see-next-label fade-up",children:"See Next"}),n.jsxs("div",{className:"see-next-grid",children:[n.jsxs("a",{href:"/google-cloud-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:gs,alt:"Google Cloud Capstone",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Google Cloud Capstone"}),n.jsx("p",{className:"see-next-desc",children:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users."})]})]}),n.jsxs("a",{href:"/routes-to-roots-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:xs,alt:"Routes to Roots App",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Routes to Roots App"}),n.jsx("p",{className:"see-next-desc",children:"Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life."})]})]})]})]}),n.jsx(Gn,{}),f&&n.jsx("div",{className:"image-modal-overlay",onClick:()=>h(null),children:n.jsxs("div",{className:"image-modal-content",onClick:k=>k.stopPropagation(),children:[n.jsx("button",{className:"image-modal-close",onClick:()=>h(null),children:"×"}),n.jsx("img",{src:f,alt:"Enlarged view"})]})})]})}const ss="/assets/girl-DyRSX-Uk.png",X2="/assets/boy-Cb2QXxrt.png",V2="/assets/R-BNsrwNRK.png",I2="/assets/interview-DHTek2Tf.JPG",Cf="/assets/item1-DFIblHDH.jpeg",K2="/assets/item2-CLnbi5Ua.jpg",Z2="/assets/item3-w30zsngq.jpeg",J2="/assets/item4-BO-K9wjc.JPG",F2="/assets/item5-m0BflQys.png",W2="/assets/method2data1-CB-Xj_my.png",$2="/assets/method2data2-BV3rMy1-.png",P2="/assets/method2data3-DJSjeAJM.png",Tf="/assets/method2data4-CX7-ch5h.png",Mf="/assets/Persona-CPVysNhA.jpg",Df="/assets/Auto-k09FEg30.png",Rf="/assets/ideation-C_AaJiq9.jpeg",Of="/assets/finaldesign-CeLaHIWl.JPG",ex="/assets/group-ox7_dPtn.JPG",Uf="/assets/fd1-DGrdkDVD.png",Bf="/assets/fd2-B4x0VKCx.png",_f="/assets/fd3-BStAD8Tk.png",Hf="/assets/fd4-DZjRWk0I.png",tx=[{num:"01",msg:"How do students currently experience and emotionally relate to their cultural hobbies while navigating academic life?"},{num:"02",msg:"What barriers, emotional, institutional, or social, prevent consistent engagement in cultural hobbies?"},{num:"03",msg:"How might digital or physical systems better support students in building a sustainable, emotionally reflective cultural hobby practice?"}];function ax(){const[r,m]=A.useState(!1),[d,c]=A.useState("context"),[f,h]=A.useState(null),[x,C]=A.useState(0),w=A.useRef(null),p=(B,L=0)=>{h(Array.isArray(B)?B:[B]),C(L)},y=()=>h(null),k=B=>{B.stopPropagation(),C(L=>(L+1)%f.length)},N=B=>{B.stopPropagation(),C(L=>(L-1+f.length)%f.length)};A.useEffect(()=>{const B=new IntersectionObserver(V=>V.forEach(de=>de.isIntersecting&&de.target.classList.add("visible")),{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(V=>B.observe(V));const L=new IntersectionObserver(([V])=>{V.isIntersecting&&(m(!0),L.disconnect())},{threshold:.1});w.current&&L.observe(w.current);const G=["context","overview","problem","solution-preview","impact","design-process","final-design","not-to-build","takeaways","skills"],ae=()=>{const V=window.innerHeight*.35;let de=G[0];for(const fe of G){const I=document.getElementById(fe);I&&I.getBoundingClientRect().top<=V&&(de=fe)}c(de)};return ae(),window.addEventListener("scroll",ae,{passive:!0}),()=>{B.disconnect(),L.disconnect(),window.removeEventListener("scroll",ae)}},[]),A.useEffect(()=>{if(!f)return;const B=L=>{L.key==="Escape"?h(null):f.length>1&&L.key==="ArrowRight"?C(G=>(G+1)%f.length):f.length>1&&L.key==="ArrowLeft"&&C(G=>(G-1+f.length)%f.length)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[f]);const M=()=>document.getElementById("final-design")?.scrollIntoView({behavior:"smooth"}),H=[{src:Di,name:"Figma"},{src:yh,name:"Miro"},{src:fs,name:"Canva"},{src:V2,name:"R"},{src:ms,name:"ChatGPT"},{src:vh,name:"Photoshop"}],q=[{name:"Ashley Huang",avatar:ss},{name:"Carrie Kim",avatar:ss},{name:"Hrishika Jotwani",avatar:ss},{name:"Shreayaa Srinivasan",avatar:ss},{name:"Sumit Gawali",avatar:X2}],Y=[{id:"context",label:"Context"},{id:"overview",label:"Overview"},{id:"problem",label:"Problem"},{id:"solution-preview",label:"Solution"},{id:"impact",label:"Key Outputs"},{id:"design-process",label:"Research Process"},{id:"final-design",label:"Final Design"},{id:"not-to-build",label:"Decisions Made"},{id:"takeaways",label:"3 Lessons Learned"},{id:"skills",label:"Skills Built"}];return n.jsxs("div",{className:"cs-root",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Fjalla+One&family=Roboto:wght@300;400;500;700;900&display=swap');

        /* ── RESET & ROOT ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          min-height: 100%;
          background: linear-gradient(160deg, #eaf2d7 0%, #efcfe3 35%, #b3dee2 70%, #ea9ab2 100%);
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
          background: rgba(198,236,201,0.55);
          padding: 0.12rem 0.5rem;
          border-radius: 9999px;
          display: inline-block;
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
      `}),n.jsx(ta,{}),n.jsxs("div",{className:"cs-hero",children:[n.jsx("img",{src:xs,alt:"Routes to Roots — Final Product",className:"cs-hero-img"}),n.jsx("p",{className:"cs-hero-subtitle",children:"Final Product View"})]}),n.jsxs("div",{className:"cs-page-layout",children:[n.jsx("aside",{className:"cs-sidebar","aria-label":"Section navigation",children:n.jsx("nav",{className:"cs-sidebar-nav",children:Y.map(B=>n.jsx("a",{href:`#${B.id}`,className:`cs-sidebar-link${d===B.id?" active":""}`,onClick:L=>{L.preventDefault(),document.getElementById(B.id)?.scrollIntoView({behavior:"smooth",block:"start"})},children:B.label},B.id))})}),n.jsxs("div",{className:"cs-content",children:[n.jsxs("div",{className:"cs-intro",id:"context",children:[n.jsx("div",{className:"cs-tags fade-up",children:["UX Research","Interaction Design","Cultural Probes","Auto Ethnography","Diary Studies"].map(B=>n.jsx("span",{className:"cs-tag",children:B},B))}),n.jsx("p",{className:"cs-sublabel fade-up",children:"What is this project?"}),n.jsx("p",{className:"cs-oneliner fade-up",children:"Designed a research-driven solution to support students who want to practice their cultural hobbies and manage them along with hectic academic schedules."}),n.jsxs("div",{className:"cs-meta fade-up",children:[n.jsxs("div",{className:"cs-meta-row cs-meta-row-top",children:[n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Institution"}),n.jsx("div",{className:"cs-meta-val",children:"Cornell University"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"My Role"}),n.jsx("div",{className:"cs-meta-val",children:"UX Researcher & Interaction Designer"})]}),n.jsxs("div",{className:"cs-meta-cell",children:[n.jsx("div",{className:"cs-meta-key",children:"Timeline"}),n.jsx("div",{className:"cs-meta-val",children:"13 Weeks · May 2025"})]})]}),n.jsx("div",{className:"cs-meta-row cs-meta-row-mid",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-team",children:[n.jsx("div",{className:"cs-meta-key",children:"Team"}),n.jsx("div",{className:"cs-meta-team-avatars","aria-label":"Project team",children:q.map(B=>n.jsxs("div",{className:"cs-meta-team-role",children:[n.jsx("img",{src:B.avatar,alt:"",className:"cs-team-avatar"}),n.jsx("div",{className:"cs-team-role-label",children:B.name})]},B.name))})]})}),n.jsx("div",{className:"cs-meta-row cs-meta-row-tools",children:n.jsxs("div",{className:"cs-meta-cell cs-meta-tools",children:[n.jsx("div",{className:"cs-meta-key",children:"Tools"}),n.jsx("div",{className:"cs-tool-logos",children:H.map(B=>n.jsxs("div",{className:"cs-tool-item",children:[n.jsx("img",{src:B.src,alt:B.name,title:B.name,className:"cs-tool-logo"}),n.jsx("p",{className:"cs-tool-name",children:B.name})]},B.name))})]})})]})]}),n.jsxs("div",{className:"cs-section",id:"overview",children:[n.jsx("p",{className:"cs-section-label",children:"Overview"}),n.jsxs("div",{className:"cs-body fade-up",children:[n.jsx("p",{className:"cs-bold-intro",children:"Cornell brings together students from culturally diverse backgrounds."}),n.jsx("p",{children:"And somewhere between orientation week and finals season, a lot of them quietly stop doing the things that they grew up loving, traditional cooking, dance, music, art, the cultural hobbies that tied them to home."}),n.jsx("p",{children:"It is because they struggle to maintain these hobbies while navigating the demands of university life. Because there was no time, no space, no community, and honestly, no easy way to find any of those things."}),n.jsx("p",{children:"Now you might think that there are cultural clubs one could join. But they're not built for this. To join most cultural clubs, you need to already be skilled. They're not designed for the student who grew up folding dumplings with their grandmother, or who learned Bharatanatyam basics as a child but never trained formally, someone who loves the practice, feels culturally grounded by it, and wants to get back to it, but has no entry point. There was no one holistic system where you could pursue your own cultural hobby at your own level, stumble into someone else's tradition, and feel welcome doing either. That gap is what we were designing for."}),n.jsx("p",{children:"Over the course of this project, we ran contextual interviews, designed and distributed physical cultural probe kits to participants, conducted an autoethnographic research within our research team, synthesized everything through affinity mapping and personas, and landed on a design concept. This case study is a gist of my process throughout this project."})]})]}),n.jsxs("div",{className:"cs-section",id:"problem",children:[n.jsx("p",{className:"cs-section-label",children:"Problem"}),n.jsx("div",{className:"cs-body",children:n.jsx("p",{className:"cs-bold-intro fade-up problem-lead",children:"Once the problem was clear, we put forth a list of research questions to guide us through the research process."})}),n.jsx(ac,{cards:tx})]}),n.jsxs("div",{className:"cs-section",id:"solution-preview",children:[n.jsx("p",{className:"cs-section-label",children:"Solution Preview"}),n.jsx("p",{className:"cs-solution-oneliner fade-up",children:"Here is a walkthrough of the final design solution."}),n.jsx("div",{className:"cs-video-wrap fade-up",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/NbugF3D0B9k",title:"Routes to Roots — Final Design Demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),n.jsxs("button",{className:"cs-skip-btn fade-up",onClick:M,children:[n.jsx("span",{className:"cs-skip-icon","aria-hidden":!0,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v10M7 12l5 5 5-5"})})}),n.jsx("span",{className:"cs-skip-label",children:"In a hurry? Skip to the final design"})]})]}),n.jsxs("div",{className:"cs-section",id:"impact",ref:w,children:[n.jsx("p",{className:"cs-section-label",children:"Key Outputs"}),n.jsxs("div",{className:"impact-row",children:[n.jsx(At,{end:10,suffix:"+",inView:r,label:"Cornell students recruited across cultural clubs as research participants"}),n.jsx(At,{end:2,suffix:"",inView:r,label:"Complementary research methods in this mixed-method research study (cultural probes and autoethnography)"}),n.jsx(At,{end:1,suffix:"",inView:r,label:"High-fidelity prototype presented to the class"})]}),n.jsx("p",{className:"impact-note fade-up",children:'The most meaningful impact was winning "Best Project for Social Impact and Uniqueness" amongst 75+ students.'})]}),n.jsxs("div",{className:"cs-section",id:"design-process",children:[n.jsx("p",{className:"cs-section-label",children:"Research Process"}),n.jsx("p",{className:"process-intro fade-up",children:"The research process was messy and interesting. Every diary study entry surfaced the emotional depth of the problem, and every research method revealed something we had overlooked."}),n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:I2,alt:"Contextual interviews"})}),n.jsx("p",{className:"ps-num",children:"01"}),n.jsx("h3",{className:"ps-title",children:"Contextual Interviews"}),n.jsx("p",{className:"ps-text",children:"We started off the research process by interviewing and observing students who practiced cultural hobbies. We wanted to understand what these hobbies meant to the users and analyze the space that we had to design for."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Cf,alt:"Cultural probe kit",className:"clickable-image",onClick:()=>p([Cf,K2,Z2,J2,F2],0)})}),n.jsx("p",{className:"image-subtext",children:"Click to browse the full probe kit →"}),n.jsx("p",{className:"ps-num",children:"02"}),n.jsx("h3",{className:"ps-title",children:"Method: Cultural Probes & Diary Studies"}),n.jsxs("p",{className:"ps-text",children:[n.jsx("strong",{children:"Why?"})," The first method was a cultural probe kit. We wanted participants to show us things they couldn't easily say out loud. So we chose a cultural probe kit with scrapbooks, postcards, and timeline maps, low-pressure creative materials that let emotions surface naturally, without the awkwardness of a formal interview. Alongside that, we had them fill out daily diary prompts for a week, capturing their actual routines in real time."]})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Mf,alt:"Persona",className:"clickable-image",onClick:()=>p(Mf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"03"}),n.jsx("h3",{className:"ps-title",children:"Persona Creation"}),n.jsx("p",{className:"ps-text",children:"Once we had completed probe kits and conducted exit interviews with participants. The findings from method 1 helped us weave a persona representing the user group we were solving for."})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Df,alt:"Autoethnography study",className:"clickable-image",onClick:()=>p(Df)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"04"}),n.jsx("h3",{className:"ps-title",children:"Method: Autoethnography"}),n.jsxs("p",{className:"ps-text",children:[n.jsx("strong",{children:"Why?"})," Every person on our team came from a culturally diverse background, and most of us had felt that quiet drift away from our own cultural practices at some point in college. So it made sense to turn inward. We ran an autoethnography study after Method 1, making ourselves the participants. We genuinely fit the people we were designing for, and there's something you can only learn from your own honest experience that no interview script can pull out of someone else."]})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Tf,alt:"Findings & synthesis",className:"clickable-image",onClick:()=>p([Tf,W2,$2,P2],0)})}),n.jsx("p",{className:"image-subtext",children:"Click to browse the findings →"}),n.jsx("p",{className:"ps-num",children:"05"}),n.jsx("h3",{className:"ps-title",children:"Findings"}),n.jsx("p",{className:"ps-list-label",children:"The cultural probe method revealed:"}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsx("li",{children:"Cultural hobbies help the students to sustain a connection to their heritage and strengthen social bonds."}),n.jsx("li",{children:"Cultural hobbies act as anchors of self-identity and aspiration."}),n.jsx("li",{children:"Cultural engagement is often deprioritized in hectic academic schedules"})]}),n.jsx("p",{className:"ps-list-label",children:"The autoethnography study revealed:"}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsx("li",{children:"Most apps lacked built-in motivators, resulting in self-driven participation."}),n.jsx("li",{children:"Participants desired tools for reflection and growth tracking."}),n.jsx("li",{children:"Cultural connection fluctuated with the tone and depth of content."})]})]}),n.jsx("div",{})]}),n.jsx(Ve,{flip:!1}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{}),n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Rf,alt:"Design ideation sketches",className:"clickable-image",onClick:()=>p(Rf)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"06"}),n.jsx("h3",{className:"ps-title",children:"Design Ideation"}),n.jsx("p",{className:"ps-text",children:"We sketched low-fidelity sketches of multiple concepts, including apps, community boards, and event platforms. A competitor analysis of existing hobby apps (YouTube, Duolingo-style trackers, cooking platforms) revealed they all prioritized productivity over cultural connection."}),n.jsx("p",{className:"ps-text",children:n.jsx("strong",{children:"We decided not to build another app."})})]})]}),n.jsx(Ve,{flip:!0}),n.jsxs("div",{className:"process-step",children:[n.jsxs("div",{className:"ps-content fade-up",children:[n.jsx("div",{className:"ps-img",children:n.jsx("img",{src:Of,alt:"Routes to Roots kiosk concept",className:"clickable-image",onClick:()=>p(Of)})}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail"}),n.jsx("p",{className:"ps-num",children:"07"}),n.jsx("h3",{className:"ps-title",children:"Final Design"}),n.jsx("p",{className:"ps-text",children:"We developed a final concept, Routes to Roots, a physical kiosk placed in visible spaces across the Cornell campus (eg, Duffield, Sage Atrium). It offers students an accessible, reflective way to rediscover and connect with their cultural hobbies through peers, events, and visible spaces. The kiosk steps in to fill the gaps of:"}),n.jsxs("ul",{className:"ps-sublist",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Visibility:"})," Making culturally meaningful hobbies public and discoverable."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Agency:"})," Empowering students to define and share their own practices."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Emotional resonance:"})," Prioritizing curiosity and reflection over achievement."]})]})]}),n.jsx("div",{})]})]})]}),n.jsxs("div",{className:"cs-section",id:"final-design",children:[n.jsx("p",{className:"cs-section-label",children:"Final Design"}),n.jsxs("div",{className:"fd-grid fade-up",children:[n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:Uf,alt:"Final design concept 1",className:"clickable-image",onClick:()=>p(Uf)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]}),n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:Bf,alt:"Final design concept 2",className:"clickable-image",onClick:()=>p(Bf)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]}),n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:_f,alt:"Final design concept 3",className:"clickable-image",onClick:()=>p(_f)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]}),n.jsxs("div",{className:"fd-item",children:[n.jsx("img",{src:Hf,alt:"Final design concept 4",className:"clickable-image",onClick:()=>p(Hf)}),n.jsx("p",{className:"image-subtext",children:"Click to view in detail →"})]})]})]}),n.jsxs("div",{className:"cs-section",id:"not-to-build",children:[n.jsx("p",{className:"cs-section-label",children:"What We Decided Not to Build & Why"}),n.jsxs("div",{className:"ntb-list",children:[n.jsxs("div",{className:"ntb-item fade-up",children:[n.jsx("h3",{className:"ntb-item-title",children:"A physical cultural center"}),n.jsx("p",{className:"ntb-desc",children:"One concept we seriously explored was a dedicated campus space with different rooms dedicated to different hobbies: instruments you could borrow, art supplies, and cooking equipment. The idea was that if you used to play violin as a kid but don't have one here, you shouldn't have to buy a new one just to reconnect with something that's always been part of you. It was a compelling concept. But we kept coming back to the same problem: visibility. Cornell is already full of resources that students don't know about. A cultural center, however well-equipped, risks becoming just another thing that exists on campus without reaching the people who need it most, exactly like the cultural clubs we started this project trying to understand. So we let it go."})]}),n.jsxs("div",{className:"ntb-item fade-up",children:[n.jsx("h3",{className:"ntb-item-title",children:"A mobile app"}),n.jsx("p",{className:"ntb-desc",children:"Our autoethnography showed clearly that apps don't sustain cultural engagement on their own. Emotional connection doesn't come from an app; it comes from a triggering memory. An app would have replicated the same hollow experience we were trying to fix."})]})]})]}),n.jsxs("div",{className:"cs-section",id:"takeaways",children:[n.jsx("p",{className:"cs-section-label",children:"3 Things That This Project Taught Me"}),n.jsxs("div",{className:"learnings-list",children:[n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"1"}),n.jsxs("p",{className:"learning-text",children:[n.jsx("strong",{children:"Design beyond usability."}),` This project shifted something for me. I'm used to asking "Is this intuitive?" or "Can users complete the task?" But Routes to Roots asked a completely different question: Does this make someone feel like they belong? Designing for that, for the feeling of being seen, required me to slow down and sit with the research in a way I hadn't before. It was uncomfortable in a good way.`]})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"2"}),n.jsxs("p",{className:"learning-text",children:[n.jsx("strong",{children:"Mixed method research is highly useful when used the right way."})," Cultural probes let participants show us things they couldn't have said in an interview, grief about lost hobbies, longing in a postcard, pride in a scrapbook drawing. Autoethnography let us feel those same things ourselves. Neither would have been enough on its own. Together, they gave us a kind of view of the problem that I think showed up in the depth of our final design."]})]}),n.jsxs("div",{className:"learning-item fade-up",children:[n.jsx("span",{className:"learning-n",children:"3"}),n.jsxs("p",{className:"learning-text",children:[n.jsx("strong",{children:"Not only this project but this course taught me that the most impactful design is not always an app or something digital."})," That sounds obvious when I say it out loud, but it really wasn't during the project. Every design instinct pulls you toward a screen. What changed for us was paying attention to where students actually were, walking through Duffield, sitting in Sage Atrium, passing through spaces they use every single day. A kiosk in those spaces does something an app notification never could: it catches you when you weren't looking for it."]})]})]})]}),n.jsxs("div",{className:"cs-section",id:"skills",children:[n.jsx("p",{className:"cs-section-label",children:"Skills Gained Through This Project"}),n.jsx("div",{className:"skills-pills",children:["Cultural Probes Design","Diary Study","Autoethnography","Affinity Mapping","Persona Development","Interaction Design","Kiosk UX","Figma Prototyping","Qualitative Data Analysis","R (data visualization)","Physical Research Artifact Design"].map(B=>n.jsx("span",{className:"skill-pill fade-up",children:B},B))})]}),n.jsxs("div",{className:"cs-section",id:"people",children:[n.jsx("p",{className:"cs-section-label",children:"The People Behind All This"}),n.jsx("div",{className:"people-img-wrap fade-up",children:n.jsx("img",{src:ex,alt:"Routes to Roots team"})})]}),n.jsx("div",{className:"cs-the-end",children:n.jsx("p",{className:"cs-the-end-text fade-up",children:"THE END"})})]})]}),n.jsxs("div",{className:"see-next",children:[n.jsx("p",{className:"see-next-label fade-up",children:"See Next"}),n.jsxs("div",{className:"see-next-grid",children:[n.jsxs("a",{href:"/google-cloud-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:gs,alt:"Google Cloud Capstone",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Google Cloud Capstone"}),n.jsx("p",{className:"see-next-desc",children:"Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users."})]})]}),n.jsxs("a",{href:"/ithaca-soap-case-study",className:"see-next-card fade-up",children:[n.jsx("img",{src:_n,alt:"Ithaca Soap Redesign",className:"see-next-img"}),n.jsxs("div",{className:"see-next-body",children:[n.jsx("h3",{className:"see-next-title",children:"Ithaca Soap Redesign"}),n.jsx("p",{className:"see-next-desc",children:"Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap."})]})]})]})]}),n.jsx(Gn,{}),f&&n.jsx("div",{className:"image-modal-overlay",onClick:y,children:n.jsxs("div",{className:"image-modal-content",onClick:B=>B.stopPropagation(),children:[n.jsx("button",{className:"image-modal-close",onClick:y,children:"×"}),f.length>1&&n.jsx("button",{className:"image-modal-nav prev",onClick:N,"aria-label":"Previous image",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:n.jsx("path",{d:"M15 18l-6-6 6-6"})})}),n.jsx("img",{src:f[x],alt:"Enlarged view"}),f.length>1&&n.jsx("button",{className:"image-modal-nav next",onClick:k,"aria-label":"Next image",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:n.jsx("path",{d:"M9 18l6-6-6-6"})})}),f.length>1&&n.jsxs("div",{className:"image-modal-counter",children:[x+1," / ",f.length]})]})})]})}const ix="/assets/storyboard1-fBactef1.png",nx="/assets/storyboard2-Dq1tlHVE.png",lx="/assets/storyboard3-NQAMn8Tz.png",sx="/assets/prototype1-CqnRYqh1.png",rx="/assets/prototype2-wMH44h2A.png",ox="/assets/prototype3-CAUpV1-q.png",cx="/assets/prototype4-BHIa9hNy.png",dx="/assets/prototype5-CsczmHRT.png",Lf=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:`Imagine landing in a new country for the first time. You're excited, nervous, and ready to meet people, except every introduction turns into a mini struggle. Your name gets mispronounced again and again. You start shortening it, giving an "easy version," or just avoiding correcting people altogether. Over time, this chips away at your confidence in classrooms, networking events, and even casual conversations.`}),n.jsxs("p",{children:["That frustration sparked our team's project: ",n.jsx("strong",{children:"iName"})," — a mobile and wearable app designed to make introductions smoother by helping people pronounce and remember names correctly while also honoring the cultural stories behind them."]})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"I wore many hats in this project:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"researcher"}),", I interviewed international participants, analyzed the data, and conducted usability tests."]}),n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"strategist"}),", I sketched and storyboarded scenarios, imagining how technology could work in real life."]}),n.jsxs("li",{children:["As a ",n.jsx("strong",{children:"designer"}),", I built prototypes in Figma, turning our rough sketches into something people could actually use."]})]}),n.jsx("p",{children:"More than anything, I focused on making sure the voices of our users stayed at the center of every decision."})]})},{id:3,title:"Understanding Our Users",content:n.jsxs("div",{children:[n.jsx("p",{children:"We focused on non-native English speakers at Cornell — students, visiting scholars, and newcomers navigating a new world."}),n.jsx("p",{children:`One student told us, "I stopped correcting because I was tired of repeating my name ten times." Another said, "It feels like I'm asking people for too much just to say it right."`}),n.jsx("p",{children:"These stories shaped our problem: people don't just need their names pronounced correctly; they need their identity respected and remembered."})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("h4",{children:"01 Research"}),n.jsx("p",{children:"Our research showed that existing solutions like Google Translate or simple name tags fell short; they either lacked cultural context, felt outdated, or weren't built just for social/professional environments."}),n.jsx("p",{children:'We also explored tools like RescueTime in the productivity space (from our inspiration case) and saw a parallel: they solved the "what" but not the "how." Similarly, apps stored names, but none combined memory, pronunciation, and cultural meaning in one. That gap was our opportunity.'}),n.jsx("h4",{children:"02 Early Concepts"}),n.jsx("p",{children:"We started with imagination. What if you could rent smart glasses at an event, and when you met someone new, their name floated above them with the correct pronunciation whispered in your ear?"}),n.jsx("p",{children:"What if there was an interactive map that let you dive into the syllables of Irish, Mandarin, or Hindi names?"}),n.jsx("p",{children:"What if, before a networking event, you could know the names of all the attendees so you never had to stumble through introductions again?"}),n.jsx("p",{children:'These "what ifs" turned into sketches, and the sketches turned into storyboards.'}),n.jsx("ul",{children:n.jsx("li",{children:"Liu, a student from China, records his pronunciation during sign-up, finally feeling like people will hear his name the way his family intended."})}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",margin:"2rem 0"},children:[n.jsx("img",{src:ix,alt:"Storyboard panels 1-2: User signs up and tries iName app"}),n.jsx("img",{src:nx,alt:"Storyboard panels 3-4: User learns phonics and accesses family name pronunciation"}),n.jsx("img",{src:lx,alt:"Storyboard panels 5-6: User explores China/Mandarin meaning and successfully uses iName"})]}),n.jsx("h4",{children:"03 Prototyping"}),n.jsx("p",{children:"From there, we built wireframes: clean flows for creating profiles, saving names, exploring the world map, and connecting to smart devices. As fidelity increased, we experimented with typography, color palettes, and interactions until the app felt warm and inclusive."}),n.jsx("h4",{children:"04 Testing"}),n.jsx("p",{children:"Then came the real test: putting iName into the hands of students. We gave them tasks like signing up, saving names from a group, or exploring the cultural map. That's when we realized some things weren't working:"}),n.jsxs("ul",{children:[n.jsx("li",{children:'The "Starred Names" icon confused people; nobody knew what it did.'}),n.jsx("li",{children:"The Explore map looked pretty, but users didn't know they could click into it."}),n.jsx("li",{children:"Dense blocks of cultural content overwhelmed readers."}),n.jsx("li",{children:"Everyone wanted profile pictures to connect faces with names."})]}),n.jsx("p",{children:"So we iterated"}),n.jsxs("ul",{children:[n.jsx("li",{children:'We turned "Starred Names" into a clearly labeled Saved tab.'}),n.jsx("li",{children:"We added tooltips and markers to the map."}),n.jsx("li",{children:"We broke content into bite-sized sections with visuals."}),n.jsx("li",{children:"We redesigned event attendee lists into profile cards with photos and play buttons."})]}),n.jsx("p",{children:"Each cycle of testing pulled us closer to the product our users actually needed."})]})},{id:5,title:"Final Design Solution",content:n.jsxs("div",{children:[n.jsx("p",{children:"The final iName experience combines mobile and wearable design with fun features:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Sign Up"}),": Users can record their pronunciation, add phonetic hints, and share the meaning of their name."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Explore"}),": An interactive world map that connects names to cultures, syllables, and stories."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Saved"}),": A dedicated space to bookmark and organize names you want to remember for events."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Event Prep"}),": Attendees get pronunciation reminders ahead of time."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Smart Devices"}),": Glasses and earbuds that display and pronounce names in real time at events."]})]}),n.jsxs("div",{style:{display:"flex",flexWrap:"nowrap",gap:"2rem",justifyContent:"center",alignItems:"flex-start",margin:"2.5rem 0",overflowX:"auto",width:"calc(100% + 480px)",marginLeft:"-240px",marginRight:"-240px",paddingLeft:"240px",paddingRight:"240px"},children:[n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:sx,alt:"Sign Up screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:rx,alt:"Profile screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:ox,alt:"Groups screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:cx,alt:"Explore screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center"},children:n.jsx("img",{src:dx,alt:"Devices screen",style:{maxWidth:"100%",maxHeight:"480px",height:"auto"}})})]}),n.jsxs("div",{style:{marginTop:"1.5rem"},children:[n.jsx("h3",{style:{margin:0,color:"var(--text-secondary)"},children:"Watch how the solution works in real life"}),n.jsx("div",{style:{maxWidth:"100%",marginTop:"1rem",borderRadius:"12px"},children:n.jsx("iframe",{width:"100%",height:"506",src:"https://www.youtube.com/embed/hC4MDLmYAGg",title:"iName Showcase",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{borderRadius:"12px",width:"100%",maxWidth:"900px",height:"506px",display:"block"}})})]})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"Storyboards helped us communicate user needs more vividly to our team, ensuring alignment before we invested in prototypes."}),n.jsx("li",{children:"During think-aloud sessions, the most valuable feedback came from moments of hesitation, when users weren't sure what to tap or why a feature existed."}),n.jsx("li",{children:"Learning to observe confusion without intervening gave me clearer signals on where the design was failing."})]})})}];function ux(){const r=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},m=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(h=>{h.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(h=>c.observe(h)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx(ta,{}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:ch,alt:"iName Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer + Developer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Ariel, Chaowei, and Qiqiu"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Lf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>r(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>r(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Lf.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/#work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:m,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2026"})]})})]})}const mx="/assets/features-bUjuRKn3.png",fx="/assets/comicStrip-BmdIqTwL.png",hx="/assets/keytakeaways-B24h4SkF.png",Yf=[{id:1,title:"Overview",content:n.jsxs("div",{children:[n.jsx("p",{children:"Picture this: it’s Sunday afternoon, you’re at the grocery store, and you’re staring at two brands of pasta. One claims to be organic, the other is cheaper, but you have no idea which is actually environmentally friendly. You care about sustainability, but with confusing labels, it’s hard to know what the “right” choice really is."}),n.jsxs("p",{children:["That exact frustration is what inspired us to create ",n.jsx("strong",{children:"EcoCart"}),"."]}),n.jsx("p",{children:"Our goal? To make sustainable grocery shopping less complicated and more rewarding by giving people real-time insights, clear alternatives, and even incentives for choosing eco-friendly options."})]})},{id:2,title:"My Role",content:n.jsxs("div",{children:[n.jsx("p",{children:"I worked as part of a cross-disciplinary team of designers and researchers."}),n.jsxs("ul",{children:[n.jsx("li",{children:"As a researcher, I conducted interviews, field studies, and affinity mapping. Evaluated by running usability tests and analyzing key takeaways."}),n.jsx("li",{children:"As a designer, I created wireframes, prototypes, and tested flows."})]})]})},{id:3,title:"Our Users",content:n.jsxs("div",{children:[n.jsx("p",{children:"We began by exploring two groups:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Individuals whose choices are primarily shaped by cost and availability."}),n.jsx("li",{children:"Sustainability shoppers who have the means to shop responsibly but lack clarity and guidance."})]}),n.jsx("p",{children:"Through interviews with students, professors, and grocery staff, we realized a hard truth: food-insecure communities can’t realistically prioritize sustainability when survival is at stake."}),n.jsx("p",{children:"Instead, EcoCart would be more impactful if designed for users who already want to shop sustainably but feel confused or unsupported by existing tools."})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("h4",{children:"01 Research & Definition"}),n.jsx("p",{children:"We started with field studies, interviews, and secondary research into food sustainability."}),n.jsx("p",{children:"“Shoppers wanted sustainability simplified into a single score rather than fragmented eco-labels.”"}),n.jsx("p",{children:"An affinity map helped us synthesize competing priorities: affordability vs. eco-consciousness. From this, we refined our problem statement:"}),n.jsx("p",{children:n.jsx("em",{children:n.jsx("strong",{children:"“People who are unaware of food sustainability but want to make better choices need a clear, intuitive way to understand the impact of their shopping habits.”"})})}),n.jsx("h4",{children:"02 Early Design Goals"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Clear Sustainability Insight: provide transparency and actionable data."}),n.jsx("li",{children:"Secure Scanning: ensure trust in how scanning works."}),n.jsx("li",{children:"Seamless Integration: fit into both in-store and at-home shopping habits."})]}),n.jsx("h4",{children:"03 Prototyping"}),n.jsx("p",{children:"We developed low- and mid-fidelity prototypes to test interactions, focusing on tasks like scanning, comparing alternatives, and managing wishlists. Wireframes mapped flows such as real-time in-store use and remote browsing from home."}),n.jsx("h4",{children:"04 Evaluations"}),n.jsx("p",{children:"To test usability and intuitiveness, we ran structured walkthroughs where users performed five key tasks:"}),n.jsxs("ol",{children:[n.jsx("li",{children:"Selecting Products In-Store: Participants had to add items to a cart quickly and clearly."}),n.jsx("li",{children:"Real-time Scanning & Alternatives: They had to scan a product and review suggested sustainable swaps."}),n.jsx("li",{children:"Evaluating Sustainability Metrics: They compared alternatives based on environmental scores."}),n.jsx("li",{children:"Adding Products to Wishlist: Simply save items for later shopping."}),n.jsx("li",{children:"Exploring Search-from-Home: Had to transition smoothly from store use to remote browsing EcoCart."})]}),n.jsx("h4",{children:"05 Key Takeaways"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Users felt that the app currently lacks incentives to encourage them to pick out the more sustainable alternatives."}),n.jsx("li",{children:"Users wanted an intuitive way to interact with products, such as tapping the product container to receive confirmation for adding alternatives."}),n.jsx("li",{children:"Users struggled to navigate back to the home screen from the profile section, leading to frustration, indicating the need for a ‘home’ button on each page."}),n.jsx("li",{children:"Users found it difficult to locate specific saved items in a long list, with no clear filtering or organization options."})]}),n.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:n.jsx("img",{src:hx,alt:"Key takeaways",style:{maxWidth:"85%",height:"auto",borderRadius:"8px"}})})]})},{id:5,title:"Final Solution",content:n.jsxs("div",{children:[n.jsx("p",{children:"After iterating over all the evaluations, our final product had 4 key features:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Scan products, instantly see eco-metrics, and explore sustainable alternatives."}),n.jsx("li",{children:"Plan shopping remotely, save items, and check store availability."}),n.jsx("li",{children:"Incentivize eco-friendly purchases with points that translate into savings."}),n.jsx("li",{children:"Support local small-scale businesses alongside sustainability goals."})]}),n.jsx("div",{style:{textAlign:"center",margin:"1rem 0"},children:n.jsx("img",{src:mx,alt:"EcoCart features",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})}),n.jsx("h5",{children:"Why would people use EcoCart?"}),n.jsxs("ul",{children:[n.jsx("li",{children:"It turns confusing sustainability choices into clear comparisons."}),n.jsx("li",{children:"It makes eco-friendly habits practical by blending seamlessly into shopping."}),n.jsx("li",{children:"It rewards users for doing good, proving that climate action can also feel like a personal win."})]}),n.jsx("p",{children:"“Imagine scanning your usual pasta and instantly seeing: this swap saves 2kg of CO₂. You add it to your cart, earn reward points, and leave the store not just with dinner, but while creating impact.”"}),n.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:n.jsx("img",{src:fx,alt:"EcoCart comic strip",style:{maxWidth:"90%",height:"auto",borderRadius:"8px"}})})]})},{id:6,title:"What Did I Learn?",content:n.jsx("div",{children:n.jsx("ul",{children:n.jsx("li",{children:"Behavior change requires reinforcement: people need prompts, reminders, and rewards, not just information."})})})}];function px(){const r=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},m=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(h=>{h.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(h=>c.observe(h)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx(ta,{}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:dh,alt:"EcoCart Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata fade-in-up",children:[n.jsxs("div",{className:"metadata-item fade-in-left",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"UX Designer"})]}),n.jsxs("div",{className:"metadata-item fade-in-up",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Hrishika, Ashley, and Bakhtawar"})]}),n.jsxs("div",{className:"metadata-item fade-in-right",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Yf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>r(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>r(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Yf.map((d,c)=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section fade-in-up",children:[n.jsx("div",{className:`section-header fade-in-${c%2===0?"left":"right"}`,children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content fade-in-up",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons fade-in-up",children:[n.jsxs("a",{href:"/#work",className:"nav-button primary fade-in-left",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:m,className:"nav-button secondary fade-in-right",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2026"})]})})]})}const gx="/assets/finalProduct1-CB1LE1Sm.png",xx="/assets/finalProduct2-CNhrKZ4S.png",Gf=[{id:1,title:"Overview",content:n.jsx("div",{children:n.jsx("p",{children:"Between 2012 and 2022, the Connecticut Department of Public Health collected annual school-level vaccination and exemption data. The challenge? Making sense of more than 500 rows of data covering different vaccines, grades, and school types, and finding a way to turn it into actionable insights for educators, policymakers, and health officials."})})},{id:2,title:"My Role",content:n.jsx("div",{children:n.jsxs("ul",{children:[n.jsx("li",{children:"As an analyst cleaned and restructured messy, incomplete records, explored relationships between exemptions, enrollment size, school type, and grade level."}),n.jsx("li",{children:"As a developer built an interactive Shiny web application to bring the data to life."}),n.jsx("li",{children:"Translated raw numbers into trends that could be understood outside of a technical context."})]})})},{id:3,title:"Coding It Up",content:n.jsxs("div",{children:[n.jsx("p",{children:"This wasn’t just “load a dataset and plot a chart.” The coding process involved several critical steps:"}),n.jsx("h4",{children:"01 Data Cleaning"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We handled missing values by replacing NA with 0 where appropriate."}),n.jsx("li",{children:"Renamed columns for readability."}),n.jsx("li",{children:"Converted grade levels into factors for easier grouping and analysis."}),n.jsx("li",{children:"Removed redundant percentage columns to avoid duplication."})]}),n.jsx("h4",{children:"02 Exploratory Data Analysis (EDA)"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We compared vaccination rates between public and private schools."}),n.jsx("li",{children:"Looked at grade-level patterns, e.g., compliance differences in kindergarten vs. middle school."}),n.jsx("li",{children:"Studied trends over time, checking whether exemption rates were increasing."})]})]})},{id:4,title:"Design Process",content:n.jsxs("div",{children:[n.jsx("p",{children:"After evaluating the options, we selected the main visualizations to include in our product. We decided that a Shiny application would be the best way to showcase the data, allowing users to apply filters to control the dataset and explore various visualizations."}),n.jsx("p",{children:"We aimed to ensure that policymakers could easily view and interpret the results to make informed decisions regarding vaccinations for school children. We developed a responsive Shiny application to achieve our product goals, putting significant effort into designing an interface that is user-friendly, even for non-tech-savvy individuals."}),n.jsx("p",{children:"We used a gradient scale of orange for our color palettes to evoke a sense of warmth and energy. Additionally, we utilized Midjourney to generate a descriptive image for the sidebar. This image aims to clearly illustrate our intention of drawing attention to the children’s immunization guidelines."}),n.jsx("h4",{children:"01 Building in Shiny"}),n.jsxs("ul",{children:[n.jsx("li",{children:"We added filters for school year, grade, vaccine type, and school type."}),n.jsx("li",{children:"Used ggplot2 for clean, interpretable visualizations."}),n.jsx("li",{children:"Structured the app so users could quickly switch between vaccination coverage, exemptions, and compliance metrics."})]})]})},{id:5,title:"Final Product",content:n.jsxs("div",{children:[n.jsx("p",{children:"The end result a interactive Shiny application that allows users to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Filter vaccination data by school type, grade, vaccine, and time period."}),n.jsx("li",{children:"Visualize exemption rates alongside enrollment counts."}),n.jsx("li",{children:"Track compliance trends over the 10-year period."})]}),n.jsxs("div",{className:"final-images",children:[n.jsx("img",{src:gx,alt:"Final product 1",className:"final-image"}),n.jsx("img",{src:xx,alt:"Final product 2",className:"final-image"})]})]})},{id:6,title:"What Did I Learn?",content:n.jsxs("div",{children:[n.jsxs("ul",{children:[n.jsx("li",{children:"A static report would have buried these insights, but an interactive app made them accessible."}),n.jsx("li",{children:"I learned how to clean messy datasets in R turning raw, inconsistent records into usable structures."}),n.jsx("li",{children:"I got comfortable with data visualization in ggplot2, learning how small tweaks in aesthetics can make a chart either confusing or crystal clear."}),n.jsx("li",{children:"I learnt the power of Shiny apps, and how interactivity transforms static numbers into tools people can actually use."})]}),n.jsxs("p",{children:["✅ Acknowledgments",n.jsx("br",{}),"Thanks to the Connecticut Department of Public Health for the dataset, the R/Shiny community for tools and documentation."]})]})}];function bx(){const r=d=>{const c=document.getElementById(`section-${d}`);c&&c.scrollIntoView({behavior:"smooth",block:"start"})},m=()=>{window.scrollTo({top:0,behavior:"smooth"})};return A.useEffect(()=>{const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},c=new IntersectionObserver(h=>{h.forEach(x=>{x.isIntersecting&&x.target.classList.add("visible")})},d);return document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach(h=>c.observe(h)),()=>c.disconnect()},[]),n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
        `}),n.jsx(ta,{}),n.jsx("div",{className:"case-study-layout",children:n.jsxs("div",{className:"content-container",children:[n.jsx("div",{className:"mockup-section",children:n.jsx("img",{src:uh,alt:"rShiny Project Mockup",className:"mockup-image"})}),n.jsxs("div",{className:"project-metadata",children:[n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Role"}),n.jsx("div",{className:"metadata-value",children:"Data Scientist"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Team"}),n.jsx("div",{className:"metadata-value",children:"Shreayaa, Xihan, and Yuzu"})]}),n.jsxs("div",{className:"metadata-item",children:[n.jsx("div",{className:"metadata-label",children:"Timeline"}),n.jsx("div",{className:"metadata-value",children:"Aug 2024 - Dec 2024"})]})]}),n.jsx("div",{className:"cascade-section",children:n.jsxs("div",{className:"cascade-container",children:[Gf.map(d=>n.jsx("div",{className:"cascade-card",onClick:()=>r(d.id),children:n.jsx("h3",{children:d.title})},d.id)),n.jsx("div",{className:"play-button",onClick:()=>r(1),children:n.jsx("div",{className:"play-icon"})})]})})]})}),n.jsx("div",{className:"content-sections",children:Gf.map(d=>n.jsxs("div",{id:`section-${d.id}`,className:"content-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{className:"section-title",children:d.title})}),n.jsx("div",{className:"section-content",children:d.content})]},d.id))}),n.jsxs("div",{className:"nav-buttons",children:[n.jsxs("a",{href:"/#work",className:"nav-button primary",children:["View My Other Work",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17"})})]}),n.jsxs("button",{onClick:m,className:"nav-button secondary",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 15L12 9L6 15"})}),"Back to Top"]})]}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-message",children:n.jsx("h3",{children:"Like my work? Hit me up with a hi 😊"})}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"https://www.linkedin.com/in/shreayaa-nadagudy-srinivasan-b41a271a8/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),n.jsx("a",{href:"https://medium.com/@shreayaa",target:"_blank",rel:"noopener noreferrer",title:"Medium",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})})}),n.jsx("a",{href:"https://dribbble.com",target:"_blank",rel:"noopener noreferrer",title:"Dribbble",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.74 1.36 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})})}),n.jsx("a",{href:"mailto:shreayaasrini@gmail.com",title:"Email",children:n.jsx("svg",{className:"footer-icon",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818L12 11.73l8.545-7.909h1.818c.904 0 1.636.732 1.636 1.636 Z"})})})]}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with ❤️ by Shreayaa Srinivasan © 2026"})]})})]})}const qf=23060,Vo=12,kh=[{id:"rose",name:"Rose",petal:"#e27396",center:"#a73e5a"},{id:"tulip",name:"Tulip",petal:"#ea9ab2",center:"#c55577",petals:5,rx:8,ry:15,cr:6},{id:"sunflower",name:"Sunflower",petal:"#f6c453",center:"#7a5230",petals:13,rx:5,ry:16,cr:11},{id:"daisy",name:"Daisy",petal:"#ffffff",center:"#f6c453",petals:11,rx:5,ry:13,cr:7},{id:"lavender",name:"Lavender",petal:"#b39ddb",center:"#7e57c2"},{id:"sapling",name:"Sapling",petal:"#7cb342",center:"#5d4037"}],ds=r=>kh.find(m=>m.id===r);function yx({seed:r}){if(r.id==="sapling")return n.jsxs("g",{children:[n.jsx("circle",{cx:50,cy:40,r:17,fill:"#8bc34a"}),n.jsx("circle",{cx:36,cy:50,r:13,fill:"#689f38"}),n.jsx("circle",{cx:64,cy:50,r:13,fill:"#7cb342"}),n.jsx("circle",{cx:50,cy:54,r:15,fill:"#7cb342"}),n.jsx("circle",{cx:45,cy:44,r:9,fill:"#9ccc65"})]});if(r.id==="lavender")return n.jsxs("g",{children:[Array.from({length:7}).map((C,w)=>n.jsx("circle",{cx:50+(w%2?4:-4),cy:20+w*5,r:5,fill:r.petal},w)),n.jsx("circle",{cx:50,cy:18,r:4,fill:"#9575cd"})]});if(r.id==="rose")return n.jsxs("g",{children:[Array.from({length:6}).map((C,w)=>n.jsx("ellipse",{cx:50,cy:24,rx:7,ry:13,fill:r.petal,transform:`rotate(${360/6*w} 50 38)`},`o${w}`)),Array.from({length:5}).map((C,w)=>n.jsx("ellipse",{cx:50,cy:30,rx:5,ry:8,fill:"#d65f82",transform:`rotate(${360/5*w+36} 50 38)`},`i${w}`)),n.jsx("circle",{cx:50,cy:38,r:6,fill:r.center})]});const c=r.petals||8,f=r.rx||6,h=r.ry||13,x=r.cr||9;return n.jsxs("g",{children:[Array.from({length:c}).map((C,w)=>n.jsx("ellipse",{cx:50,cy:38-h+1,rx:f,ry:h,fill:r.petal,stroke:r.id==="daisy"?"#f0d7c0":"none",strokeWidth:r.id==="daisy"?.6:0,transform:`rotate(${360/c*w} 50 38)`},w)),n.jsx("circle",{cx:50,cy:38,r:x,fill:r.center})]})}function Qf({seedId:r,stage:m}){const d=ds(r);if(!d)return null;if(m===0)return n.jsxs("svg",{viewBox:"0 0 100 120",className:"plant-svg",children:[n.jsx("ellipse",{cx:50,cy:101,rx:10,ry:7,fill:"#6d4c2f"}),n.jsx("path",{d:"M50 96 q3 4 0 8",stroke:"#8a6440",strokeWidth:"1.5",fill:"none"})]});const c=m===2,f=c?42:82,h=c?74:88,x=c?12:8;return n.jsxs("svg",{viewBox:"0 0 100 120",className:"plant-svg",children:[n.jsx("path",{d:`M50 108 Q 47 ${(108+f)/2} 50 ${f}`,stroke:"#5a8f3c",strokeWidth:c?5:4,fill:"none",strokeLinecap:"round"}),n.jsx("ellipse",{cx:50-x,cy:h,rx:x,ry:x*.55,fill:"#6aa84f",transform:`rotate(-28 ${50-x} ${h})`}),n.jsx("ellipse",{cx:50+x,cy:h,rx:x,ry:x*.55,fill:"#7cb85f",transform:`rotate(28 ${50+x} ${h})`}),c&&n.jsx(yx,{seed:d})]})}const rs=(r,m)=>{try{const d=localStorage.getItem(r);return d===null?m:JSON.parse(d)}catch{return m}};function vx(){const[r,m]=A.useState(()=>rs("garden_step","seeds")),[d,c]=A.useState(()=>rs("garden_chosen",[])),[f,h]=A.useState(null),[x,C]=A.useState(()=>{const I=rs("garden_plots",null);return Array.isArray(I)&&I.length===Vo?I:Array(Vo).fill(null)}),[w,p]=A.useState(()=>rs("garden_planted",0)),[y,k]=A.useState(null),[N,M]=A.useState(null),[H,q]=A.useState(null);A.useEffect(()=>{r==="garden"&&d.length&&!d.includes(f)&&h(d[0])},[r,d,f]),A.useEffect(()=>{localStorage.setItem("garden_step",JSON.stringify(r))},[r]),A.useEffect(()=>{localStorage.setItem("garden_chosen",JSON.stringify(d))},[d]),A.useEffect(()=>{localStorage.setItem("garden_plots",JSON.stringify(x))},[x]),A.useEffect(()=>{localStorage.setItem("garden_planted",JSON.stringify(w))},[w]);const Y=I=>{c(te=>te.includes(I)?te.filter(he=>he!==I):[...te,I])},B=A.useCallback(I=>{const te=x[I];if(!te){if(!f)return;C(he=>{const we=[...he];return we[I]={seedId:f,stage:0},we});return}if(te.stage<2){const he=te.stage+1;C(we=>{const Me=[...we];return Me[I]={...te,stage:he},Me}),k(I),setTimeout(()=>k(we=>we===I?null:we),750),he===2&&(p(we=>we+1),M(I),setTimeout(()=>M(we=>we===I?null:we),1300));return}q(I),setTimeout(()=>q(he=>he===I?null:he),500)},[x,f]),L=()=>{window.confirm("Clear your garden? Your total planted count stays.")&&C(Array(Vo).fill(null))},G=()=>{d.length&&(h(d[0]),m("garden"))},ae=Math.min(100,w/qf*100),V=x.some(I=>!I),de=x.some(I=>I&&I.stage<2);let fe;return x.some(Boolean)?de?fe="Click a seedling to water it 💧 — water it twice and it blooms.":V?fe="Keep sowing, or water any seedlings until they bloom.":fe="Your garden is in full bloom! 🌸 Reset it to plant more.":fe=f?`Click any plot to sow your ${ds(f).name.toLowerCase()}.`:"Pick a seed from your pouch below, then click a plot to sow it.",n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
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
      `}),n.jsx("header",{className:"header",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"header-content",children:[n.jsx("a",{href:"/",children:n.jsx("div",{className:"logo",children:n.jsx("img",{src:rh,alt:"Shreayaa Srinivasan Logo",className:"custom-logo"})})}),n.jsxs("nav",{className:"nav-links",children:[n.jsx("a",{href:"/",onClick:I=>{I.preventDefault(),sessionStorage.setItem("scrollTo","google-cloud"),window.location.href="/"},children:"WORK"}),n.jsx("a",{href:"/about",children:"ABOUT"}),n.jsx("a",{href:"/garden",className:"active-leaf",title:"The Garden",children:n.jsx(mf,{size:20})})]})]})})}),n.jsx("section",{className:"garden-wrap",children:n.jsxs("div",{className:"content-container",children:[n.jsxs("div",{className:"garden-head",children:[n.jsx("h1",{children:r==="seeds"?"Plant a little garden 🌱":"Your garden"}),n.jsx("p",{children:r==="seeds"?"Pick the seeds you’d like to grow. Every plant you raise here counts toward the world record.":"Sow your seeds, water them, and watch them bloom. Each bloom is one more toward the record."})]}),n.jsxs("div",{className:"record-card",children:[n.jsxs("div",{className:"record-top",children:[n.jsxs("span",{className:"record-count",children:[w.toLocaleString()," ",n.jsxs("small",{children:["/ ",qf.toLocaleString()]})]}),n.jsxs("span",{className:"record-label",children:[n.jsx("span",{role:"img","aria-label":"tree",style:{marginRight:".35em"},children:"🌳"}),"plants grown toward the 24-hour world record"]})]}),n.jsx("div",{className:"record-bar",children:n.jsx("div",{className:"record-fill",style:{width:`${ae}%`}})})]}),r==="seeds"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"seed-grid",children:kh.map(I=>{const te=d.includes(I.id);return n.jsxs("div",{className:`seed-packet ${te?"selected":""}`,onClick:()=>Y(I.id),role:"button",tabIndex:0,onKeyDown:he=>{(he.key==="Enter"||he.key===" ")&&(he.preventDefault(),Y(I.id))},"aria-pressed":te,children:[te&&n.jsx("span",{className:"seed-check",children:"✓"}),n.jsx(Qf,{seedId:I.id,stage:2}),n.jsx("div",{className:"seed-name",children:I.name})]},I.id)})}),n.jsx("div",{className:"center-actions",children:n.jsxs("button",{className:"btn btn-primary",onClick:G,disabled:!d.length,children:[n.jsx(mf,{size:20})," Go to my garden",d.length?` (${d.length})`:""]})})]}),r==="garden"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"garden-toolbar",children:[n.jsxs("button",{className:"btn btn-ghost",onClick:()=>m("seeds"),children:[n.jsx(H1,{size:16})," Choose seeds"]}),n.jsx("div",{className:"seed-pouch",children:d.map(I=>{const te=ds(I);return n.jsxs("button",{className:`pouch-seed ${f===I?"active":""}`,onClick:()=>h(I),children:[n.jsx("span",{className:"swatch",style:{background:te.petal}}),te.name]},I)})})]}),n.jsx("p",{className:"hint",children:fe}),n.jsx("div",{className:"garden-grid",children:x.map((I,te)=>{const he=!I,we=I&&I.stage===2,Me=["plot",he?"empty":"planted",he&&f?"sowable":"",we?"bloomed":"",y===te?"sowing":"",N===te?"grown":"",H===te?"wiggle":""].filter(Boolean).join(" ");return n.jsxs("div",{className:Me,onClick:()=>B(te),role:"button",tabIndex:0,"aria-label":he?"Empty plot":`${ds(I.seedId).name}, ${["seed","sprout","bloom"][I.stage]}`,onKeyDown:Fe=>{(Fe.key==="Enter"||Fe.key===" ")&&(Fe.preventDefault(),B(te))},children:[I&&n.jsx(Qf,{seedId:I.seedId,stage:I.stage}),y===te&&n.jsx("div",{className:"droplets",children:[20,42,60,78].map((Fe,$e)=>n.jsx("span",{className:"droplet",style:{left:`${Fe}%`,animationDelay:`${$e*.08}s`}},$e))}),N===te&&n.jsx("div",{className:"sparkles",children:["✨","🌟","✨"].map((Fe,$e)=>n.jsx("span",{className:"sparkle",style:{left:`${25+$e*25}%`,top:"30%",animationDelay:`${$e*.12}s`},children:Fe},$e))})]},te)})}),n.jsx("div",{className:"garden-footer-actions",children:n.jsxs("button",{className:"btn btn-ghost",onClick:L,children:[n.jsx(X1,{size:16})," Clear garden"]})})]})]})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("h3",{children:"Grow something today 🌷"}),n.jsx("p",{className:"footer-copyright",children:"Designed + Coded with 🩷 by Shreayaa Srinivasan © 2026"})]})})]})}function wx(){const[r,m]=A.useState(0),[d,c]=A.useState(""),[f,h]=A.useState(!1),x=za.useMemo(()=>["designer.","researcher.","strategist."],[]);A.useEffect(()=>{const p=setTimeout(()=>{const y=x[r];f?(c(y.substring(0,d.length-1)),d===""&&(h(!1),m(k=>(k+1)%x.length))):(c(y.substring(0,d.length+1)),d===y&&setTimeout(()=>h(!0),1500))},f?50:80);return()=>clearTimeout(p)},[d,f,r,x]);const C=A.useRef([]);A.useEffect(()=>{const p=[];return C.current.forEach((y,k)=>{if(y){const N=new IntersectionObserver(M=>{M.forEach(H=>{H.isIntersecting&&(H.target.style.animationDelay=`${k*.2}s`,H.target.classList.add("animate-in"))})},{threshold:.1,rootMargin:"-100px"});N.observe(y),p.push(N)}}),()=>{p.forEach(y=>y.disconnect())}},[]),A.useEffect(()=>{const p=()=>{const y=sessionStorage.getItem("scrollTo");if(y){const k=document.getElementById(y);k&&setTimeout(()=>k.scrollIntoView({behavior:"smooth"}),50),sessionStorage.removeItem("scrollTo")}};return p(),window.addEventListener("storage",p),()=>window.removeEventListener("storage",p)},[]);const w=p=>{window.location.href=p};return n.jsxs("div",{className:"app",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

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
          margin-bottom: 3rem;
          max-width: 550px;
          line-height: 1.6;
          font-weight: 400;
          font-family: 'DM Sans', sans-serif;
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

        .skills-container {
          position: relative;
          height: 44px; /* slightly shorter */
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-secondary);
          padding: 0.4rem 1.1rem; /* tighter vertical padding */
          background: rgba(255, 255, 255, 0.98);
          border-radius: 9999px !important;
          -webkit-border-radius: 9999px !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background-clip: padding-box;
          border: 1px solid rgba(226, 115, 150, 0.12);
          transition: transform 180ms ease, box-shadow 180ms ease;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 6px 18px rgba(226, 115, 150, 0.09);
          flex-shrink: 0;
          min-width: max-content;
          line-height: 1;
          transform: translateZ(0);
        }

        .skills-strip span:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(226, 115, 150, 0.14);
        }

        @keyframes scrollSkills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

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
          background: rgba(179, 226, 175, 0.45);
          padding: 0 0.15em;
          border-radius: 0.25em;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
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

          .skills-strip span {
            font-size: 0.9rem;
            padding: 0.7rem 1.2rem;
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

        }
        `}),n.jsx(ta,{}),n.jsx("section",{className:"hero",children:n.jsx("div",{className:"content-container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-text",children:[n.jsxs("h1",{children:[n.jsx("span",{className:"greeting-line",children:"Hi, I'm Shreayaa."}),n.jsx("br",{}),n.jsxs("span",{className:"typewriter",children:["I'm a ",d,n.jsx("span",{style:{borderRight:"2px solid",animation:"blink 1s infinite"},children:"|"})]})]}),n.jsx("p",{className:"dm-sans",children:"I love to design with empathy and purpose. I'm passionate about making complex things feel simple and smooth."})]}),n.jsx("div",{className:"hero-image",children:n.jsx("div",{className:"hero-photo",children:n.jsx("img",{src:T1,alt:"Shreayaa Srinivasan"})})})]})})}),n.jsx("section",{className:"skills",style:{position:"relative"},children:n.jsx("div",{className:"skills-inner",children:n.jsx("div",{className:"skills-container",children:n.jsx("div",{className:"skills-strip",children:["Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing","Prototyping","Wireframing","Interaction Design","Accessibility","Python","Javascript","CSS","HTML","Figma","Framer","Webflow","Sketch","R Studio","Problem Solving","Leadership","User Research","Design Systems","A/B Testing"].map((p,y)=>n.jsx("span",{children:p},y))})})})}),n.jsx("section",{className:"design-section",children:n.jsxs("div",{className:"content-container",children:[n.jsxs("div",{className:"design-content",children:[n.jsxs("div",{className:"design-left",children:[n.jsx("h2",{children:"Who am I as a designer?"}),n.jsxs("p",{children:["I come from a background in Information Science, Computer Science and Psychology which puts me in this unique position where I ",n.jsx("span",{className:"soft-green-highlight",children:"understand the technical capabilities, the human side, and the UX side of things."})," So I'm keen on designing interactions and products that people actually find delightful."]}),n.jsxs("p",{children:["These experiences make me very ",n.jsx("span",{className:"soft-green-highlight",children:"comfortable working closely with researchers, engineers, and stakeholders"})," and understand the feasibility and implications of my design decisions."]})]}),n.jsx("div",{className:"design-gallery",children:n.jsx("div",{className:"gallery-container",children:n.jsx("div",{className:"gallery-image",children:n.jsx("img",{src:M1,alt:"Venn diagram: Computer Science, User Experience, Psychology — Human-Computer Interaction Designer"})})})})]}),n.jsx("section",{id:"work",className:"work-section",children:Sh.filter(p=>![4,5,6].includes(p.id)).map((p,y)=>n.jsxs("div",{id:p.id===1?"google-cloud":void 0,ref:k=>C.current[y]=k,className:`project-row ${y%2===1?"reverse":""}`,onClick:()=>w(p.caseStudyUrl),children:[n.jsx("div",{className:"mockup-side",children:n.jsx("div",{className:`mockup-image-wrapper ${p.imageType}`,children:p.image?n.jsx("img",{src:p.image,alt:`${p.title} mockup`,className:"mockup-image"}):n.jsxs("div",{className:"mockup-placeholder",children:[n.jsx("div",{children:"Project Mockup Image"}),n.jsxs("small",{children:["(",p.imageType," mockup)"]})]})})}),n.jsxs("div",{className:"content-side",children:[n.jsx("h2",{className:"project-title",children:p.title}),p.tags&&n.jsx("div",{className:"project-tags",children:p.tags.map((k,N)=>n.jsx("span",{className:"project-tag",children:k},N))}),n.jsx("p",{className:"project-description",children:p.description}),p.toolLogos&&n.jsx("div",{className:"tool-logos-row",children:p.toolLogos.map((k,N)=>n.jsx("img",{src:k,alt:`tool-${N}`,className:"tool-logo"},N))}),p.award&&n.jsxs("div",{className:"award-badge",children:[n.jsx("img",{src:Zo,alt:"Award",className:"award-icon"}),n.jsx("p",{className:"award-text",children:p.award})]})]})]},p.id))})]})}),n.jsx(Gn,{})]})}function jx(){return n.jsx(y1,{children:n.jsxs(Fg,{children:[n.jsx(Et,{path:"/",element:n.jsx(wx,{})}),n.jsx(Et,{path:"/about",element:n.jsx(S2,{})}),n.jsx(Et,{path:"/work",element:n.jsx(E2,{})}),n.jsx(Et,{path:"/google-cloud-case-study",element:n.jsx(H2,{})}),n.jsx(Et,{path:"/ithaca-soap-case-study",element:n.jsx(Q2,{})}),n.jsx(Et,{path:"/routes-to-roots-case-study",element:n.jsx(ax,{})}),n.jsx(Et,{path:"/ecocart-case-study",element:n.jsx(px,{})}),n.jsx(Et,{path:"/iname-case-study",element:n.jsx(ux,{})}),n.jsx(Et,{path:"/rshiny-case-study",element:n.jsx(bx,{})}),n.jsx(Et,{path:"/garden",element:n.jsx(vx,{})})]})})}lg.createRoot(document.getElementById("root")).render(n.jsx(A.StrictMode,{children:n.jsx(jx,{})}));
