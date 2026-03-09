"use strict";var g=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var f=g(function(E,m){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-writable-property/dist'),y=require('@stdlib/utils-property-symbols/dist'),p=require('@stdlib/utils-get-prototype-of/dist'),P=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist');function c(i,r){var o,n,e,s,u,v,t,a;if(arguments.length>1){if(!q(r))throw new TypeError(b('1Uv45',r));u=r}else u=h;if(i==null)return[];for(e=p(i),o={},n=[],v=1;e&&v<=u;){for(s=y(e),a=0;a<s.length;a++)t=s[a],P(o,t)===!1&&l(e,t)&&n.push(t),o[t]=!0;e=p(e),v+=1}return n}m.exports=c
});var w=f();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
