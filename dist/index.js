"use strict";var g=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=g(function(E,m){
var h=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,l=require('@stdlib/assert-is-writable-property/dist'),y=require('@stdlib/utils-property-symbols/dist'),p=require('@stdlib/utils-get-prototype-of/dist'),P=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist');function c(i,r){var t,n,e,s,u,v,a,o;if(arguments.length>1){if(!q(r))throw new TypeError(b('1Uv45',r));u=r}else u=h;if(i==null)return[];for(e=p(i),t={},n=[],v=1;e&&v<=u;){for(s=y(e),o=0;o<s.length;o++)a=s[o],P(t,a)===!1&&l(e,a)&&n.push(a),t[a]=!0;e=p(e),v+=1}return n}m.exports=c
});var w=f();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
