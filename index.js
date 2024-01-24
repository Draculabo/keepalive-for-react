import e,{memo as r,useState as t,useRef as n,useLayoutEffect as o,Fragment as a,createContext as i,useContext as c,useImperativeHandle as u,useEffect as l}from"react";import{createPortal as s}from"react-dom";var f=function(){return f=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},f.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var p,y={exports:{}},d={};var v,m={};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?y.exports=function(){if(v)return m;v=1;var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var c,u={},l=null,s=null;for(c in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(s=r.ref),r)o.call(r,c)&&!i.hasOwnProperty(c)&&(u[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===u[c]&&(u[c]=r[c]);return{$$typeof:t,type:e,key:l,ref:s,props:u,_owner:a.current}}return m.Fragment=n,m.jsx=c,m.jsxs=c,m}():y.exports=(p||(p=1,"production"!==process.env.NODE_ENV&&function(){var r=e,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),m=Symbol.iterator,h="@@iterator",g=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];!function(e,r,t){var n=g.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var _,j=!1,k=!1,w=!1,O=!1,S=!1;function E(e){return e.displayName||"Context"}function R(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case s:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case u:return E(e)+".Consumer";case c:return E(e._context)+".Provider";case l:return function(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case p:var r=e.displayName||null;return null!==r?r:R(e.type)||"Memo";case y:var t=e,d=t._payload,v=t._init;try{return R(v(d))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var x,N,P,T,C,$,D,F=Object.assign,I=0;function A(){}A.__reactDisabledLog=!0;var L,W=g.ReactCurrentDispatcher;function U(e,r,t){if(void 0===L)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);L=n&&n[1]||""}return"\n"+L+e}var z,M=!1,Y="function"==typeof WeakMap?WeakMap:Map;function B(e,r){if(!e||M)return"";var t,n=z.get(e);if(void 0!==n)return n;M=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=W.current,W.current=null,function(){if(0===I){x=console.log,N=console.info,P=console.warn,T=console.error,C=console.group,$=console.groupCollapsed,D=console.groupEnd;var e={configurable:!0,enumerable:!0,value:A,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(r){if(r&&t&&"string"==typeof r.stack){for(var c=r.stack.split("\n"),u=t.stack.split("\n"),l=c.length-1,s=u.length-1;l>=1&&s>=0&&c[l]!==u[s];)s--;for(;l>=1&&s>=0;l--,s--)if(c[l]!==u[s]){if(1!==l||1!==s)do{if(l--,--s<0||c[l]!==u[s]){var f="\n"+c[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&z.set(e,f),f}}while(l>=1&&s>=0);break}}}finally{M=!1,W.current=o,function(){if(0==--I){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:x}),info:F({},e,{value:N}),warn:F({},e,{value:P}),error:F({},e,{value:T}),group:F({},e,{value:C}),groupCollapsed:F({},e,{value:$}),groupEnd:F({},e,{value:D})})}I<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?U(p):"";return"function"==typeof e&&z.set(e,y),y}function V(e,r,t){if(null==e)return"";if("function"==typeof e)return B(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return U(e);switch(e){case s:return U("Suspense");case f:return U("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case l:return B(e.render,!1);case p:return V(e.type,r,t);case y:var o=e,a=o._payload,i=o._init;try{return V(i(a),r,t)}catch(e){}}return""}z=new Y;var q=Object.prototype.hasOwnProperty,H={},J=g.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);J.setExtraStackFrame(t)}else J.setExtraStackFrame(null)}var G=Array.isArray;function K(e){return G(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,re,te,ne=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,r,n,o,a,i,c){var u={$$typeof:t,type:e,key:r,ref:n,props:c,_owner:i,_store:{}};return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function ie(e,r,t,n,o){var a,i={},c=null,u=null;for(a in void 0!==t&&(Z(t),c=""+t),function(e){if(q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(Z(r.key),c=""+r.key),function(e){if(q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(u=r.ref,function(e,r){if("string"==typeof e.ref&&ne.current&&r&&ne.current.stateNode!==r){var t=R(ne.current.type);te[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(ne.current.type),e.ref),te[t]=!0)}}(r,o)),r)q.call(r,a)&&!oe.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(c||u){var s="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,r){var t=function(){ee||(ee=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,s),u&&function(e,r){var t=function(){re||(re=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,s)}return ae(e,c,u,o,n,ne.current,i)}var ce,ue=g.ReactCurrentOwner,le=g.ReactDebugCurrentFrame;function se(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function pe(){if(ue.current){var e=R(ue.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ce=!1;var ye={};function de(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=pe();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!ye[t]){ye[t]=!0;var n="";e&&e._owner&&e._owner!==ue.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),se(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),se(null)}}}function ve(e,r){if("object"==typeof e)if(K(e))for(var t=0;t<e.length;t++){var n=e[t];fe(n)&&de(n,r)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=m&&e[m]||e[h];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&de(a.value,r)}}function me(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==l&&t.$$typeof!==p)return;r=t.propTypes}if(r){var n=R(t);!function(e,r,t,n,o){var a=Function.call.bind(q);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var u=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(X(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof c),X(null)),c instanceof Error&&!(c.message in H)&&(H[c.message]=!0,X(o),b("Failed %s type: %s",t,c.message),X(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||ce||(ce=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",R(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function he(e,r,n,d,m,h){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===i||S||e===a||e===s||e===f||O||e===v||j||k||w)||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===p||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!g){var E="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(E+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var x,N=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(m);E+=N||pe(),null===e?x="null":K(e)?x="array":void 0!==e&&e.$$typeof===t?(x="<"+(R(e.type)||"Unknown")+" />",E=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,E)}var P=ie(e,r,n,m,h);if(null==P)return P;if(g){var T=r.children;if(void 0!==T)if(d)if(K(T)){for(var C=0;C<T.length;C++)ve(T[C],e);Object.freeze&&Object.freeze(T)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ve(T,e)}return e===o?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){se(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),se(null);break}}null!==e.ref&&(se(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),se(null))}(P):me(P),P}var ge=function(e,r,t){return he(e,r,t,!1)},be=function(e,r,t){return he(e,r,t,!0)};d.Fragment=o,d.jsx=ge,d.jsxs=be}()),d);var h=y.exports;function g(e){return null==e}var b=r((function(e){var r=e.active,i=e.errorElement,c=e.cache,u=e.children,l=e.name,f=e.renderDiv,p=i,y=t((function(){var e=document.createElement("div");return e.setAttribute("id",l),e.className="cache-component "+l+" "+(c?"cached":"no-cache"),e}))[0],d=n(!1);return d.current=d.current||r,o((function(){var e=f.current;if(r)null==e||e.appendChild(y);else try{(null==e?void 0:e.contains(y))&&(null==e||e.removeChild(y))}catch(e){console.log(e,"removeChild error")}}),[r,f,y,u]),g(p)?h.jsx(a,{children:d.current&&s(u,y)}):h.jsx(a,{children:d.current&&s(h.jsx(p,{children:u}),y)})}),(function(e,r){return e.active===r.active})),_=i({activeName:void 0,setActiveName:function(e){console.log(e)}}),j=function(){return c(_)};var k=r((function(e){var r=e.initialActiveName,n=e.children,a=t(r),i=a[0],c=a[1];return o((function(){c(r)}),[r]),h.jsx(_.Provider,{value:{activeName:i,setActiveName:c},children:n})})),w=r((function(e){var r=e.errorElement,i=e.activeName,c=e.cache,l=e.suspenseElement,s=e.children,p=e.exclude,y=e.include,d=e.maxLen,v=e.aliveRef,m=n(null),_=t([]),j=_[0],w=_[1];u(v,(function(){return{getCaches:function(){return j},removeCache:function(e){setTimeout((function(){w((function(r){return r.filter((function(r){return r.name!==e}))}))}),0)},cleanAllCache:function(){w([])},cleanOtherCache:function(){w((function(e){return e.filter((function(e){return e.name===i}))}))}}}),[j,w,i]),o((function(){g(i)||w((function(e){return e.length>=(d||20)&&(e=e.slice(1,e.length)),p&&p.length>0&&(e=e.filter((function(e){var r=e.name;return!(null==p?void 0:p.includes(r))}))),y&&y.length>0&&(e=e.filter((function(e){var r=e.name;return null==y?void 0:y.includes(r)}))),e=e.filter((function(e){return e.cache})),g(e.find((function(e){return e.name===i})))?e.push({cache:null==c||c,name:i,ele:s}):e=e.map((function(e){return e.name===i?f(f({},e),{ele:s}):e})),e}))}),[s,c,i,p,d,y]);var O=l;return g(O)?h.jsxs(a,{children:[h.jsx("div",{ref:m,className:"keep-alive"}),h.jsx(k,{initialActiveName:i,children:null==j?void 0:j.map((function(e){var t=e.name,n=e.cache,o=e.ele;return h.jsx(b,{errorElement:r,active:t===i,renderDiv:m,cache:n,name:t,children:o},t)}))})]}):h.jsxs(O,{children:[h.jsx("div",{ref:m,className:"keep-alive"}),h.jsx(k,{initialActiveName:i,children:null==j?void 0:j.map((function(e){var t=e.name,n=e.cache,o=e.ele;return h.jsx(b,{errorElement:r,active:t===i,renderDiv:m,cache:n,name:t,children:o},t)}))})]})}),(function(e,r){return e.activeName===r.activeName}));function O(e,r){void 0===r&&(r=!0);var t=n(null);return S(t,e,r),t}function S(e,r,t){void 0===t&&(t=!0);var o=j().activeName,a=n(!1);l((function(){var n,i,c=null===(n=e.current)||void 0===n?void 0:n.parentElement,u=null==c?void 0:c.id;if(c&&u&&o===u)return t?a.current&&(i=r()):i=r(),a.current=!0,function(){i&&"function"==typeof i&&i()}}),[o])}export{w as KeepAlive,w as default,O as useOnActive,S as useOnActiveByRef};
