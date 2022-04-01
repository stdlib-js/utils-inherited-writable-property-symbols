// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,f&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=f,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"number"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var h=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var j=function(r){return y.call(r)},P=Object.prototype.hasOwnProperty;var O=function(r,e){return null!=r&&P.call(r,e)},E="function"==typeof Symbol?Symbol.toStringTag:"",_=O,T=E,S=w;var x=j,V=function(r){var e,t,n;if(null==r)return S.call(r);t=r[T],e=_(r,T);try{r[T]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[T]=t:delete r[T],n},k=h()?V:x,I=Number,A=I.prototype.toString;var F=k,R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},M=h();var C=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===F(r)))},N=m,B=C;var G=d,L=function(r){return N(r)||B(r)},Z=C;G(L,"isPrimitive",m),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,D=I.NEGATIVE_INFINITY,z=Math.floor;var U=function(r){return z(r)===r},Y=X,q=D,H=U;var J=function(r){return r<Y&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=d,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var sr=ur,fr=sr.isPrimitive;var lr=function(r){return fr(r)&&r>0},vr=sr.isObject;var pr=function(r){return vr(r)&&r.valueOf()>0},gr=lr,dr=pr;var mr=d,br=function(r){return gr(r)||dr(r)},hr=pr;mr(br,"isPrimitive",lr),mr(br,"isObject",hr);var wr=br,yr=void 0!==Object.getOwnPropertyDescriptor,jr=Object.getOwnPropertyDescriptor;var Pr=O;var Or=yr?function(r,e){var t;return null==r||void 0===(t=jr(r,e))?null:t}:function(r,e){return Pr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Er=function(r,e){var t=Or(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)},_r=void 0!==Object.getOwnPropertySymbols,Tr=Object.getOwnPropertySymbols;var Sr=_r?function(r){return Tr(Object(r))}:function(){return[]},xr=/./;var Vr=function(r){return"boolean"==typeof r},kr=Boolean.prototype.toString;var Ir=k,Ar=function(r){try{return kr.call(r),!0}catch(r){return!1}},Fr=h();var Rr=function(r){return"object"==typeof r&&(r instanceof Boolean||(Fr?Ar(r):"[object Boolean]"===Ir(r)))},$r=Vr,Mr=Rr;var Cr=d,Nr=function(r){return $r(r)||Mr(r)},Br=Rr;Cr(Nr,"isPrimitive",Vr),Cr(Nr,"isObject",Br);var Gr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Zr=Nr.isPrimitive,Wr=function(){return new Function("return this;")()},Xr=Gr,Dr=Lr,zr=r(Object.freeze({__proto__:null}));var Ur=function(r){if(arguments.length){if(!Zr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Wr()}if(Xr)return Xr;if(Dr)return Dr;if(zr)return zr;throw new Error("unexpected error. Unable to resolve global object.")},Yr=Ur(),qr=Yr.document&&Yr.document.childNodes,Hr=Int8Array,Jr=xr,Kr=qr,Qr=Hr;var re=function(){return"function"==typeof Jr||"object"==typeof Qr||"function"==typeof Kr};var ee=function(){return/^\s*function\s*([^(]*)/i},te=ee;d(te,"REGEXP",ee());var ne=te,ie=k;var ae=Array.isArray?Array.isArray:function(r){return"[object Array]"===ie(r)};var oe=function(r){return null!==r&&"object"==typeof r};d(oe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ae(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(oe));var ue=oe;var ce=k,se=ne.REGEXP,fe=function(r){return ue(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var le=function(r){var e,t,n;if(("Object"===(t=ce(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=se.exec(n.toString()))return e[1]}return fe(r)?"Buffer":t},ve=le;var pe=le;var ge=function(r){var e;return null===r?"null":"object"===(e=typeof r)?ve(r).toLowerCase():e},de=function(r){return pe(r).toLowerCase()},me=re()?de:ge;var be=function(r){return"function"===me(r)},he=Object.getPrototypeOf;var we=function(r){return r.__proto__},ye=k,je=we;var Pe=function(r){var e=je(r);return e||null===e?e:"[object Function]"===ye(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Oe=he,Ee=Pe,_e=be(Object.getPrototypeOf)?Oe:Ee;var Te=function(r){return null==r?null:(r=Object(r),_e(r))};var Se=function(r){return"string"==typeof r},xe=String.prototype.valueOf;var Ve=k,ke=function(r){try{return xe.call(r),!0}catch(r){return!1}},Ie=h();var Ae=function(r){return"object"==typeof r&&(r instanceof String||(Ie?ke(r):"[object String]"===Ve(r)))},Fe=Se,Re=Ae;var $e=d,Me=function(r){return Fe(r)||Re(r)},Ce=Ae;$e(Me,"isPrimitive",Se),$e(Me,"isObject",Ce);var Ne=Me,Be=U;var Ge=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Be(r.length)&&r.length>=0&&r.length<=9007199254740991};var Le=function(r){return r!=r},Ze=W.isPrimitive,We=Le;var Xe=function(r){return Ze(r)&&We(r)},De=W.isObject,ze=Le;var Ue=function(r){return De(r)&&ze(r.valueOf())},Ye=Xe,qe=Ue;var He=d,Je=function(r){return Ye(r)||qe(r)},Ke=Ue;He(Je,"isPrimitive",Xe),He(Je,"isObject",Ke);var Qe=Ge,rt=sr.isPrimitive,et=Ne.isPrimitive,tt=Je.isPrimitive;var nt=function(r,e,t){var n,i,a;if(!Qe(r)&&!et(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!rt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(et(r)){if(!et(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,tt(e)){for(a=i;a<n;a++)if(tt(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},it=Ne.isPrimitive;var at=function(r){if(!it(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ot=Ne.isPrimitive;var ut=function(r){if(!ot(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ct=at,st=ut,ft=Ne.isPrimitive;var lt=function(r){return ft(r)&&r===st(r)&&r!==ct(r)},vt=X,pt=D;var gt=function(r){return r==r&&r>pt&&r<vt},dt=sr.isPrimitive;var mt=function(r){return dt(r)&&r>=0},bt=sr.isObject;var ht=function(r){return bt(r)&&r.valueOf()>=0},wt=mt,yt=ht;var jt=d,Pt=function(r){return wt(r)||yt(r)},Ot=ht;jt(Pt,"isPrimitive",mt),jt(Pt,"isObject",Ot);var Et=Pt.isPrimitive,_t=Ne.isPrimitive;var Tt=function(r,e){var t,n;if(!_t(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Et(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},St=sr.isPrimitive,xt=Ne.isPrimitive;var Vt=Tt,kt=function(r,e,t){var n,i;if(!xt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!xt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!St(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var It=function(r,e,t){var n=!1,i=e-r.length;return i<0||(kt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Vt("0",i):Vt("0",i)+r,n&&(r="-"+r)),r},At=lt,Ft=ut,Rt=at,$t=gt,Mt=W.isPrimitive,Ct=It;var Nt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!$t(n)){if(!Mt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ct(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ct(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=At(r.specifier)?Ft(t):Rt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Bt=Ne.isPrimitive,Gt=/[-\/\\^$*+?.()|[\]{}]/g;var Lt=function(r){var e,t;if(!Bt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Gt,"\\$&"):(e=(e=r.substring(1,t)).replace(Gt,"\\$&"),r=r[0]+e+r.substring(t))},Zt=RegExp.prototype.exec;var Wt=k,Xt=function(r){try{return Zt.call(r),!0}catch(r){return!1}},Dt=h();var zt=Lt,Ut=be,Yt=Ne.isPrimitive,qt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Dt?Xt(r):"[object RegExp]"===Wt(r)))};var Ht=lt,Jt=ut,Kt=at,Qt=function(r,e,t){if(!Yt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Yt(e))e=zt(e),e=new RegExp(e,"g");else if(!qt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Yt(t)&&!Ut(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},rn=gt,en=W.isPrimitive,tn=function(r){return Math.abs(r)},nn=/e\+(\d)$/,an=/e-(\d)$/,on=/^(\d+)$/,un=/^(\d+)e/,cn=/\.0$/,sn=/\.0*e/,fn=/(\..*[^0])0*e/;var ln=function(r){var e,t,n=parseFloat(r.arg);if(!rn(n)){if(!en(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":tn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Qt(t,fn,"$1e"),t=Qt(t,sn,"e"),t=Qt(t,cn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Qt(t,nn,"e+0$1"),t=Qt(t,an,"e-0$1"),r.alternate&&(t=Qt(t,on,"$1."),t=Qt(t,un,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ht(r.specifier)?Jt(t):Kt(t)},vn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var pn=Tt;var gn=Ne.isPrimitive,dn=nt,mn=Le,bn=Nt,hn=ln,wn=function(r){var e,t,n,i,a;for(e=0,n=[],a=vn.exec(r);a;)(t=r.slice(e,vn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=vn.lastIndex,a=vn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},yn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+pn(" ",n):pn(" ",n)+r},jn=It,Pn=String.fromCharCode;var On=wr.isPrimitive,En=Er,_n=Sr,Tn=Te,Sn=O,xn=function(r){var e,t,n,i,a,o,u,c,s;if(!gn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=wn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],gn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!dn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,mn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,mn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=bn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!mn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=mn(a)?String(n.arg):Pn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=hn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=jn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=yn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var Vn=function(r,e){var t,n,i,a,o,u,c,s;if(arguments.length>1){if(!On(e))throw new TypeError(xn("invalid argument. Second argument must be a positive integer. Value: `%s`.",e));o=e}else o=9007199254740991;if(null==r)return[];for(i=Tn(r),t={},n=[],u=1;i&&u<=o;){for(a=_n(i),s=0;s<a.length;s++)c=a[s],!1===Sn(t,c)&&En(i,c)&&n.push(c),t[c]=!0;i=Tn(i),u+=1}return n},kn=Vn;export{kn as default};
//# sourceMappingURL=mod.js.map
