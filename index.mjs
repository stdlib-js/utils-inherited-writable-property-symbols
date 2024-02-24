// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-writable-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-symbols@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function m(m,d){var p,l,j,h,f,v,g,a;if(arguments.length>1){if(!t(d))throw new TypeError(n("1Uv45",d));f=d}else f=s;if(null==m)return[];for(j=i(m),p={},l=[],v=1;j&&v<=f;){for(h=r(j),a=0;a<h.length;a++)g=h[a],!1===o(p,g)&&e(j,g)&&l.push(g),p[g]=!0;j=i(j),v+=1}return l}export{m as default};
//# sourceMappingURL=index.mjs.map