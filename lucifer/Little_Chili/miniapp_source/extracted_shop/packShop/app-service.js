ar __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['packShop/components/city-select/city-select.json'] = {"component":true,"usingComponents":{"u-icon":"/node-modules/uview-ui/components/u-icon/u-icon"}};
		__wxAppCode__['packShop/pages/city/main.json'] = {"navigationBarTitleText":"选择城市","usingComponents":{"city-select":"/packShop/components/city-select/city-select"}};
		__wxAppCode__['packShop/pages/shop/banner/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['packShop/pages/shop/list/index.json'] = {"component":true,"usingComponents":{"empty":"/components/element/empty/index"}};
		__wxAppCode__['packShop/pages/shop/main.json'] = {"usingComponents":{"u-modal":"/node-modules/uview-ui/components/u-modal/u-modal","search-info":"/packShop/pages/shop/search/index","shop-nav":"/packShop/pages/shop/nav/index","store-map":"/packShop/pages/shop/map/index","shop-list":"/packShop/pages/shop/list/index","shopbanner":"/packShop/pages/shop/banner/index","layout":"/components/app/layout/index","scan":"/components/common/scan/index","loading-page":"/components/app/load/index","login":"/components/app/login/index","agreement":"/components/pop/agreement","open-ad":"/components/app/openAd/index","confirm-shop-popup":"/components/pop/confirmShopPopup"}};
		__wxAppCode__['packShop/pages/shop/map/index.json'] = {"component":true,"usingComponents":{"u-icon":"/node-modules/uview-ui/components/u-icon/u-icon"}};
		__wxAppCode__['packShop/pages/shop/nav/index.json'] = {"usingComponents":{},"component":true};
		__wxAppCode__['packShop/pages/shop/search/index.json'] = {"usingComponents":{"u-icon":"/node-modules/uview-ui/components/u-icon/u-icon"},"component":true};
	;var __WXML_DEP__=__WXML_DEP__||{};;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['packShop/chunk_0',['packShop/components/city-select/city-select','packShop/pages/city/main',]],['packShop/chunk_1',['packShop/pages/shop/banner/index','packShop/pages/shop/list/index','packShop/pages/shop/main','packShop/pages/shop/map/index','packShop/pages/shop/nav/index','packShop/pages/shop/search/index',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
if (typeof $gwx === 'function') $gwx('init', global);
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx0();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("packShop/common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/common/vendor"],{"/packShop/components/city-select/citySelect.js":function(Y,Z,L){Object.defineProperty(Z,"__esModule",{value:!0}),Z.default=void 0;var X={firstletter:"YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYFZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJXDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLCYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNCMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY",traditionalToSimplified:{"廣":"广","臺":"台","蘇":"苏"},convertToSimplified:function(Y){return Y.split("").map((function(Y){return X.traditionalToSimplified[Y]||Y})).join("")},getFirstLetter:function(Y){if(!(Y=X.convertToSimplified(Y))||/^ +$/g.test(Y))return"";if(X.firstletter){var Z=Y.charCodeAt(0),L=Y.charAt(0);return{unicode:Z,firstletter:L=Z>=19968&&Z<=40869?X.firstletter.charAt(Z-19968):Z>=97&&Z<=122||Z>=65&&Z<=90?L.toLocaleUpperCase():"#"}}return""}},J=X;Z.default=J},"/packShop/pages/shop/group.js":function(Y,Z,L){Object.defineProperty(Z,"__esModule",{value:!0}),Z.mixinShopGroupList=void 0;var X=function(Y){return Y&&Y.__esModule?Y:{default:Y}}(L("s52"));function J(Y,Z,L,X,J,S,C){try{var Q=Y[S](C),H=Q.value}catch(Y){return void L(Y)}Q.done?Z(H):Promise.resolve(H).then(X,J)}function S(Y,Z){var L=Object.keys(Y);if(Object.getOwnPropertySymbols){var X=Object.getOwnPropertySymbols(Y);Z&&(X=X.filter((function(Z){return Object.getOwnPropertyDescriptor(Y,Z).enumerable}))),L.push.apply(L,X)}return L}function C(Y){for(var Z=1;Z<arguments.length;Z++){var L=null!=arguments[Z]?arguments[Z]:{};Z%2?S(Object(L),!0).forEach((function(Z){Q(Y,Z,L[Z])})):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(L)):S(Object(L)).forEach((function(Z){Object.defineProperty(Y,Z,Object.getOwnPropertyDescriptor(L,Z))}))}return Y}function Q(Y,Z,L){return Z in Y?Object.defineProperty(Y,Z,{value:L,enumerable:!0,configurable:!0,writable:!0}):Y[Z]=L,Y}var H={data:function(){return{groupCodeInfo:{}}},methods:C(C({},(0,L("s40").mapMutations)(["VX_GROUPINFO"])),{},{getShopGroupCodeInfo:function(Y){var Z=this;return this.$service.getShopGroupCodeInfo({shopGroupCodeId:Y.areaGroupId,groupId:Y.groupId,mchntCd:Y.mchntCd}).then((function(Y){Y&&(Z.groupCodeInfo=JSON.parse(JSON.stringify(Y)),delete Y.decorationList401,Z.VX_GROUPINFO(Y),Z.transShopListData(Y.shopList,!0))}))},getShopGroupBanner:function(Y,Z){var L=this,X={componentId:Y,shopGroupId:Z};return this.$service.getShopGroupBanner(X).then((function(Y){L.bannerList=Y})).catch((function(Y){Tips.toast(Y.resultMsg||"获取门店组banner失败")}))},formatDecor:function(Y){var Z=this;return function(Y){return function(){var Z=this,L=arguments;return new Promise((function(X,S){var C=Y.apply(Z,L);function Q(Y){J(C,X,S,Q,H,"next",Y)}function H(Y){J(C,X,S,Q,H,"throw",Y)}Q(void 0)}))}}(X.default.mark((function Y(){var L,J,S,C,Q;return X.default.wrap((function(Y){for(;;)switch(Y.prev=Y.next){case 0:S=Z.groupCodeInfo.decorationList401,C={},S&&S.length&&null!==(L=S[0].shopGroupDataList)&&void 0!==L&&L.length&&(C=S[0].shopGroupDataList[0]),null!==(J=C)&&void 0!==J&&J.jsonData&&(Q=JSON.parse(C.jsonData),Z.collationType=Q.collationType||"01",Z.showType=Q.showType||"01",Z.shopList=Z.mergeList(C),"02"==Z.collationType&&(Z.shopList=Z.shopList.sort((function(Y,Z){return Y.sort-Z.sort}))));case 3:case"end":return Y.stop()}}),Y)})))()},mergeList:function(Y){return this.shopList.map((function(Z){return Y.shopDataList.forEach((function(Y){Z.shopId==Y.shopId&&(Z=C(C({},Z),Y))})),Z}))}})};Z.mixinShopGroupList=H}}]);
},{isPage:false,isComponent:false,currentFile:'packShop/common/vendor.js'});$gwx0_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];
function gz$gwx0_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'city-select data-v-3840259f'])
Z([3,'city-select-main data-v-3840259f'])
Z([3,'city-select-main'])
Z([[7],[3,'toView']])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([[7],[3,'isSearch']])
Z([3,'__l'])
Z([3,'data-v-3840259f'])
Z([3,'search'])
Z([3,'1cf96c60-1'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'activeCity']],[[2,'!'],[[7],[3,'serachCity']]]],[[6],[[7],[3,'activeCity']],[[7],[3,'formatName']]]])
Z(z[11])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'hotCity']],[3,'length']],[1,0]],[[2,'!'],[[7],[3,'serachCity']]]])
Z([[2,'!'],[[7],[3,'serachCity']]])
Z([[7],[3,'serachCity']])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
}
function gz$gwx0_XC_0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2
__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'activeCity']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^cityClick']],[[4],[[5],[[4],[[5],[1,'cityClick']]]]]]]]])
Z([3,'citys'])
Z([[7],[3,'formatName']])
Z([[7],[3,'hotCity']])
Z([1,true])
Z([[7],[3,'obtainCitys']])
Z([3,'7cc19686-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_2
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_0=true;
var x=['./packShop/components/city-select/city-select.wxml','./packShop/pages/city/main.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_0_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var oD=_mz(z,'scroll-view',['class',1,'id',1,'scrollIntoView',2,'scrollTop',3,'scrollY',4],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
var lK=_mz(z,'u-icon',['bind:__l',7,'class',1,'name',2,'vueId',3],[],e,s,gg)
_(fE,lK)
}
var cF=_v()
_(oD,cF)
if(_oz(z,11,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(oD,hG)
if(_oz(z,12,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(oD,oH)
if(_oz(z,13,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(oD,cI)
if(_oz(z,14,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oD,oJ)
if(_oz(z,15,e,s,gg)){oJ.wxVkey=1
}
fE.wxXCkey=1
fE.wxXCkey=3
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,16,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_XC_0_2()
var tM=_mz(z,'city-select',['activeCity',0,'bind:__l',1,'bind:cityClick',1,'class',2,'data-event-opts',3,'data-ref',4,'formatName',5,'hotCity',6,'isSearch',7,'obtainCitys',8,'vueId',9],[],e,s,gg)
_(r,tM)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/components/city-select/city-select.wxml'] = [$gwx0_XC_0, './packShop/components/city-select/city-select.wxml'];else __wxAppCode__['packShop/components/city-select/city-select.wxml'] = $gwx0_XC_0( './packShop/components/city-select/city-select.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/city/main.wxml'] = [$gwx0_XC_0, './packShop/pages/city/main.wxml'];else __wxAppCode__['packShop/pages/city/main.wxml'] = $gwx0_XC_0( './packShop/pages/city/main.wxml' );
	;__wxRoute = "packShop/components/city-select/city-select";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/components/city-select/city-select.js";define("packShop/components/city-select/city-select.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/components/city-select/city-select"],{"0358":function(t,i,e){var n=e("cdc2");e.n(n).a},"2c18":function(t,i,e){e.r(i);var n=e("8495"),a=e("bc34");for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(c);e("0358");var o=e("s49"),s=Object(o.a)(a.default,n.b,n.c,!1,null,"3840259f",null,!1,n.a,void 0);i.default=s.exports},8495:function(t,i,e){e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var n={uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"s308"))}},a=function(){var t=this,i=(t.$createElement,t._self._c,t.isSearch?t.$t(t.placeholder):null),e=t.activeCity&&!t.serachCity&&t.activeCity[t.formatName]?t.$t("当前城市"):null,n=t.hotCity.length>0&&!t.serachCity?t.$t("热门城市"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:e,m2:n}})},c=[]},"8d51":function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(e("/packShop/components/city-select/citySelect.js")),a={props:{placeholder:{type:String,default:"请输入城市名称"},formatName:{type:String,default:"cityName"},activeCity:{type:Object,default:function(){return null}},hotCity:{type:Array,default:function(){return[]}},obtainCitys:{type:Array,default:function(){return[]}},isSearch:{type:Boolean,default:!0}},data:function(){return{toView:"city-letter-Find",scrollTop:0,cityindexs:[],activeCityIndex:"",handleCity:[],serachCity:"",cityData:[]}},computed:{sortItems:function(){for(var t=0;t<this.handleCity.length;t++)if(this.handleCity[t].isCity){var i=this.handleCity[t].citys;i=i.sort((function(t,i){return t.unicode-i.unicode}))}return this.handleCity},searchDatas:function(){for(var t=[],i=0;i<this.cityData.length;i++)-1!==this.cityData[i][this.formatName].indexOf(this.serachCity)&&t.push({oldData:this.cityData[i],name:this.cityData[i][this.formatName]});return t}},created:function(){this.cityData=this.obtainCitys,this.initializationCity(),this.buildCityindexs()},watch:{obtainCitys:function(t){this.updateCitys(t)}},methods:{updateCitys:function(t){t&&t.length&&(this.cityData=t,this.initializationCity(),this.buildCityindexs())},keyInput:function(t){this.serachCity=t.detail.value},initializationCity:function(){this.handleCity=[];for(var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],i=0;i<t.length;i++)this.handleCity.push({name:t[i],isCity:!1,citys:[],forName:"city-letter-"+("#"==t[i]?"0":t[i])})},getLetter:function(t){return n.default.getFirstLetter(t[0])},buildCityindexs:function(){this.cityindexs=[];for(var t=0;t<this.cityData.length;t++){var i=this.getLetter(this.cityData[t][this.formatName]).firstletter,e=this.getLetter(this.cityData[t][this.formatName]).unicode,n=this.cityIndexPosition(i);-1===this.cityindexs.indexOf(i)&&(this.handleCity[n].isCity=!0,this.cityindexs.push(i)),this.handleCity[n].citys.push({cityName:this.cityData[t][this.formatName],unicode:e,oldData:this.cityData[t]})}},cityindex:function(t){this.toView=t},cityIndexPosition:function(t){return t?"#"===t?26:t.charCodeAt(0)-65:""},cityTrigger:function(t){this.$emit("cityClick",t.oldData?t.oldData:t)}}};i.default=a},bc34:function(t,i,e){e.r(i);var n=e("8d51"),a=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i.default=a.a},cdc2:function(t,i,e){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["packShop/components/city-select/city-select-create-component",{"packShop/components/city-select/city-select-create-component":function(t,i,e){e("s33").createComponent(e("2c18"))}},[["packShop/components/city-select/city-select-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'packShop/components/city-select/city-select.js'});require("packShop/components/city-select/city-select.js");;__wxRoute = "packShop/pages/city/main";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/city/main.js";define("packShop/pages/city/main.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/city/main"],{'/main.js?{"page":"packShop%2Fpages%2Fcity%2Fmain"}':function(e,t,n){(function(e){n("s37"),o(n("s35"));var t=o(n("03f5"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("s33").createPage)},"03f5":function(e,t,n){n.r(t);var o=n("3a2f"),i=n("1312");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var c=n("s49"),a=Object(c.a)(i.default,o.b,o.c,!1,null,null,null,!1,o.a,void 0);t.default=a.exports},1312:function(e,t,n){n.r(t);var o=n("3cb2"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t.default=i.a},"3a2f":function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){this.$createElement,this._self._c},i=[]},"3cb2":function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("s229"),i=n("s40"),r=function(e){return e&&e.__esModule?e:{default:e}}(n("s38"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={mixins:[o.mixinJumpShop],data:function(){return{formatName:"title",activeCity:{},hotCity:[],obtainCitys:[],type:""}},components:{citySelect:function(){Promise.all([n.e("packShop/common/vendor"),n.e("packShop/components/city-select/city-select")]).then(function(){return resolve(n("2c18"))}.bind(null,n)).catch(n.oe)}},onLoad:function(e){null!=e&&e.type&&(this.type=e.type),this.formatName="regionNmCn",this.getMchntCdAllRegionCd()},onShow:function(){e.setNavigationBarTitle({title:this.$t("选择城市")})},computed:a({},(0,i.mapGetters)(["local_shopTermInfo"])),methods:a(a({},(0,i.mapMutations)(["USER_INFO"])),{},{getMchntCdAllRegionCd:function(){var e=this;this.$service.getMchntCdAllRegionCd().then((function(t){var n=t.shopRegionCdList;e.activeCity=n.filter((function(t){return t.regionNmCn.includes(e.$vueUserInfo.city||e.local_shopTermInfo.cityName)}))[0],e.obtainCitys=n.map((function(e,t){var n;return u(n={regionNmCn:e.regionNmCn,regionCd:e.provCd},"regionCd",e.regionCd),u(n,"id",t),n}))}))},cityClick:function(e){this.$vueUserInfo.tempInfo=e,this.USER_INFO(this.$vueUserInfo),r.default.redirectTo("shopList",{type:this.type})}})};t.default=f}).call(this,n("s33").default)}},[['/main.js?{"page":"packShop%2Fpages%2Fcity%2Fmain"}',"common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'packShop/pages/city/main.js'});require("packShop/pages/city/main.js");$gwx0_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx0_XC_1 || [];
function gz$gwx0_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'value']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
}
function gz$gwx0_XC_1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_2)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_2
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'list data-v-633857ee'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,80])
Z([1,true])
Z([[2,'&&'],[[7],[3,'value']],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'i'])
Z([3,'e'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[6])
Z(z[0])
Z([[4],[[5],[[5],[[5],[[5],[1,'_li']],[1,'data-v-633857ee']],[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'shopId']],[[6],[[7],[3,'$root']],[3,'m0']]],[1,'active'],[1,'']]],[[2,'?:'],[[2,'!'],[[2,'&&'],[[2,'=='],[[7],[3,'showType']],[1,'01']],[[2,'!'],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'decorationPicUrl']]]]],[1,'pic'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'change']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'value']],[1,'']],[[7],[3,'i']]],[1,'shopId']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[1,'value']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'$root']],[3,'s0']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'showType']],[1,'01']],[[2,'!'],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'decorationPicUrl']]]])
Z([3,'list-block _div data-v-633857ee'])
Z([3,'_div data-v-633857ee'])
Z([[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'colId']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'progressInfo']],[[6],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'progressInfo']],[3,'_isProgress']]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'progressInfo']],[[6],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'progressInfo']],[3,'progressInfoShow']]])
Z([[6],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'progressInfo']],[3,'_progressInfoTimeMsg']])
Z([3,'key'])
Z([3,'item'])
Z([[6],[[7],[3,'e']],[3,'l0']])
Z(z[21])
Z([[6],[[7],[3,'item']],[3,'g0']])
Z([3,'_section data-v-633857ee'])
Z([[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'_distanceStr']])
Z([[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'phone']])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'showType']],[1,'01']],[[2,'!'],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'decorationPicUrl']]]],[[6],[[6],[[7],[3,'e']],[3,'$orig']],[3,'_first']]])
Z([[7],[3,'isCollection']])
Z([3,'__l'])
Z([3,'data-v-633857ee'])
Z([[6],[[7],[3,'$root']],[3,'m6']])
Z([3,'collect-order'])
Z([3,'collect'])
Z([3,'17bb8fe9-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_2);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_2
}
function gz$gwx0_XC_1_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_3)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_3
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'_div']],[1,'data-v-531b502c']],[[2,'?:'],[[2,'=='],[[7],[3,'showType']],[1,'02']],[1,'shopType02'],[1,'']]]])
Z([3,'__l'])
Z([3,'data-v-531b502c'])
Z([3,'4998a651-1'])
Z([[4],[[5],[[5],[1,'head']],[1,'main']]])
Z([3,'_div data-v-531b502c'])
Z([3,'head'])
Z(z[1])
Z([3,'__e'])
Z(z[2])
Z([[2,'!'],[[2,'!'],[[6],[[6],[[7],[3,'merchantInfoPage']],[3,'info']],[3,'groupId']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeNav']],[[4],[[5],[[4],[[5],[1,'changeNav']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'4998a651-2'],[1,',']],[1,'4998a651-1']])
Z([[2,'!'],[[7],[3,'isCollection']]])
Z(z[1])
Z(z[8])
Z(z[2])
Z([[7],[3,'componentId']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^search']],[[4],[[5],[[4],[[5],[1,'search']]]]]]]]])
Z([[7],[3,'searchValue']])
Z([[2,'+'],[[2,'+'],[1,'4998a651-3'],[1,',']],[1,'4998a651-1']])
Z(z[1])
Z(z[8])
Z([3,'data-v-531b502c vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'bannerList']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'banner'])
Z([[7],[3,'jsonData']])
Z([[7],[3,'bannerList']])
Z([[2,'+'],[[2,'+'],[1,'4998a651-4'],[1,',']],[1,'4998a651-1']])
Z(z[1])
Z(z[8])
Z(z[8])
Z(z[23])
Z([[2,'!'],[[2,'&&'],[[2,'!'],[[6],[[6],[[7],[3,'merchantInfoPage']],[3,'info']],[3,'groupId']]],[[2,'!'],[[7],[3,'isCollection']]]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^changeSelectShop']],[[4],[[5],[[4],[[5],[1,'changeSelectShop']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'list']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'map'])
Z([[7],[3,'shopList']])
Z([[7],[3,'list']])
Z([[2,'+'],[[2,'+'],[1,'4998a651-5'],[1,',']],[1,'4998a651-1']])
Z([3,'main _div data-v-531b502c'])
Z([3,'main'])
Z([[7],[3,'listShow']])
Z(z[1])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[23])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^changeSelectShop']],[[4],[[5],[[4],[[5],[1,'changeSelectShop']]]]]]]],[[4],[[5],[[5],[1,'^changeActivetShop']],[[4],[[5],[[4],[[5],[1,'changeActivetShop']]]]]]]],[[4],[[5],[[5],[1,'^cityShopName']],[[4],[[5],[[4],[[5],[1,'cityShopName']]]]]]]],[[4],[[5],[[5],[1,'^cancelCollection']],[[4],[[5],[[4],[[5],[1,'cancelCollection']]]]]]]],[[4],[[5],[[5],[1,'^scrolltolower']],[[4],[[5],[[4],[[5],[1,'scrolltolower']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'list']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'list'])
Z([[7],[3,'isCollection']])
Z([[7],[3,'showType']])
Z(z[37])
Z([[2,'+'],[[2,'+'],[1,'4998a651-6'],[1,',']],[1,'4998a651-1']])
Z(z[1])
Z(z[8])
Z(z[8])
Z([[6],[[7],[3,'$root']],[3,'m3']])
Z(z[2])
Z([[6],[[7],[3,'$root']],[3,'m2']])
Z([[6],[[7],[3,'$root']],[3,'m1']])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirmLocation']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'cancelLocation']]]]]]]]])
Z([[7],[3,'showLocation']])
Z([1,true])
Z(z[40])
Z([[6],[[7],[3,'$root']],[3,'m0']])
Z([3,'4998a651-7'])
Z(z[1])
Z(z[8])
Z(z[8])
Z(z[8])
Z(z[23])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^start']],[[4],[[5],[[4],[[5],[1,'scanStart']]]]]]]],[[4],[[5],[[5],[1,'^done']],[[4],[[5],[[4],[[5],[1,'scanDone']]]]]]]],[[4],[[5],[[5],[1,'^go']],[[4],[[5],[[4],[[5],[1,'go']]]]]]]]])
Z([3,'scan'])
Z([[7],[3,'isReservationCom']])
Z([3,'shop'])
Z([[7],[3,'seletShopInfo']])
Z([3,'4998a651-8'])
Z(z[1])
Z(z[23])
Z([3,'login'])
Z([3,'4998a651-9'])
Z(z[1])
Z(z[8])
Z(z[23])
Z([[4],[[5],[[4],[[5],[[5],[1,'^agree']],[[4],[[5],[[4],[[5],[1,'agree']]]]]]]]])
Z([3,'agree'])
Z([3,'4998a651-10'])
Z(z[65])
Z(z[1])
Z(z[23])
Z([3,'openAd'])
Z([3,'4998a651-11'])
Z(z[1])
Z(z[8])
Z(z[23])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'jumpShop']]]]]]]]])
Z([3,'adress'])
Z([3,'4998a651-12'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_3);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_3
}
function gz$gwx0_XC_1_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_4)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_4
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showmark']])
Z([3,'__e'])
Z([3,'map-button _div data-v-9f5d2c9e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-9f5d2c9e'])
Z([[6],[[6],[[7],[3,'obj']],[[2,'~'],[[2,'~'],[[7],[3,'show']]]]],[3,'icon']])
Z([3,'13'])
Z([3,'82bd761a-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_4);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_4
}
function gz$gwx0_XC_1_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_5)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_5
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_5);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_5
}
function gz$gwx0_XC_1_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_6)return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_6
__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'componentId']]])
Z([3,'__e'])
Z([3,'city _div data-v-186da676'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-186da676'])
Z([3,'arrow-down'])
Z([3,'14'])
Z([3,'9f66bcc2-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_6);return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_6
}
__WXML_GLOBAL__.ops_set.$gwx0_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx0_XC_1=true;
var x=['./packShop/pages/shop/banner/index.wxml','./packShop/pages/shop/list/index.wxml','./packShop/pages/shop/main.wxml','./packShop/pages/shop/map/index.wxml','./packShop/pages/shop/nav/index.wxml','./packShop/pages/shop/search/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_XC_1_1()
var bO=_v()
_(r,bO)
if(_oz(z,0,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_XC_1_2()
var xQ=_mz(z,'scroll-view',['bindscrolltolower',0,'class',1,'data-event-opts',1,'lowerThreshold',2,'scrollY',3],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,5,e,s,gg)){oR.wxVkey=1
var fS=_v()
_(oR,fS)
var cT=function(oV,hU,cW,gg){
var lY=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2,'style',3],[],oV,hU,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,14,oV,hU,gg)){aZ.wxVkey=1
var e2=_n('view')
_rz(z,e2,'class',15,oV,hU,gg)
var b3=_n('view')
_rz(z,b3,'class',16,oV,hU,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,17,oV,hU,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,18,oV,hU,gg)){x5.wxVkey=1
}
else{x5.wxVkey=2
var o6=_v()
_(x5,o6)
if(_oz(z,19,oV,hU,gg)){o6.wxVkey=1
var f7=_v()
_(o6,f7)
if(_oz(z,20,oV,hU,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
}
o6.wxXCkey=1
}
var c8=_v()
_(b3,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_v()
_(oBB,aDB)
if(_oz(z,25,cAB,o0,gg)){aDB.wxVkey=1
}
aDB.wxXCkey=1
return oBB
}
c8.wxXCkey=2
_2z(z,23,h9,oV,hU,gg,c8,'item','key','key')
o4.wxXCkey=1
x5.wxXCkey=1
_(e2,b3)
var tEB=_n('view')
_rz(z,tEB,'class',26,oV,hU,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,27,oV,hU,gg)){eFB.wxVkey=1
}
var bGB=_v()
_(tEB,bGB)
if(_oz(z,28,oV,hU,gg)){bGB.wxVkey=1
}
eFB.wxXCkey=1
bGB.wxXCkey=1
_(e2,tEB)
_(aZ,e2)
}
else{aZ.wxVkey=2
}
var t1=_v()
_(lY,t1)
if(_oz(z,29,oV,hU,gg)){t1.wxVkey=1
}
aZ.wxXCkey=1
t1.wxXCkey=1
_(cW,lY)
return cW
}
fS.wxXCkey=2
_2z(z,8,cT,e,s,gg,fS,'e','i','i')
}
else{oR.wxVkey=2
var oHB=_v()
_(oR,oHB)
if(_oz(z,30,e,s,gg)){oHB.wxVkey=1
var xIB=_mz(z,'empty',['bind:__l',31,'class',1,'msg',2,'orderStyle',3,'type',4,'vueId',5],[],e,s,gg)
_(oHB,xIB)
}
oHB.wxXCkey=1
oHB.wxXCkey=3
}
oR.wxXCkey=1
oR.wxXCkey=3
_(r,xQ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_XC_1_3()
var fKB=_n('view')
_rz(z,fKB,'class',0,e,s,gg)
var cLB=_mz(z,'layout',['bind:__l',1,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var hMB=_mz(z,'view',['class',5,'slot',1],[],e,s,gg)
var cOB=_mz(z,'shop-nav',['bind:__l',7,'bind:changeNav',1,'class',2,'data-custom-hidden',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(hMB,cOB)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,13,e,s,gg)){oNB.wxVkey=1
var oPB=_mz(z,'search-info',['bind:__l',14,'bind:search',1,'class',2,'componentId',3,'data-event-opts',4,'searchKeyword',5,'vueId',6],[],e,s,gg)
_(oNB,oPB)
}
var lQB=_mz(z,'shopbanner',['bind:__l',21,'bind:input',1,'class',2,'data-event-opts',3,'data-ref',4,'jsonData',5,'value',6,'vueId',7],[],e,s,gg)
_(hMB,lQB)
var aRB=_mz(z,'store-map',['bind:__l',29,'bind:changeSelectShop',1,'bind:input',2,'class',3,'data-custom-hidden',4,'data-event-opts',5,'data-ref',6,'shopList',7,'value',8,'vueId',9],[],e,s,gg)
_(hMB,aRB)
oNB.wxXCkey=1
oNB.wxXCkey=3
_(cLB,hMB)
var tSB=_mz(z,'view',['class',39,'slot',1],[],e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,41,e,s,gg)){eTB.wxVkey=1
var bUB=_mz(z,'shop-list',['bind:__l',42,'bind:cancelCollection',1,'bind:changeActivetShop',2,'bind:changeSelectShop',3,'bind:cityShopName',4,'bind:input',5,'bind:scrolltolower',6,'class',7,'data-event-opts',8,'data-ref',9,'isCollection',10,'showType',11,'value',12,'vueId',13],[],e,s,gg)
_(eTB,bUB)
}
eTB.wxXCkey=1
eTB.wxXCkey=3
_(cLB,tSB)
_(fKB,cLB)
var oVB=_mz(z,'u-modal',['bind:__l',56,'bind:cancel',1,'bind:confirm',2,'cancelText',3,'class',4,'confirmText',5,'content',6,'data-event-opts',7,'show',8,'showCancelButton',9,'slot',10,'title',11,'vueId',12],[],e,s,gg)
_(fKB,oVB)
var xWB=_mz(z,'scan',['bind:__l',69,'bind:done',1,'bind:go',2,'bind:start',3,'class',4,'data-event-opts',5,'data-ref',6,'isReservation',7,'page',8,'seletShopInfo',9,'vueId',10],[],e,s,gg)
_(fKB,xWB)
var oXB=_mz(z,'login',['bind:__l',80,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(fKB,oXB)
var fYB=_mz(z,'agreement',['bind:__l',84,'bind:agree',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(fKB,fYB)
var cZB=_mz(z,'open-ad',['bar',90,'bind:__l',1,'class',2,'data-ref',3,'vueId',4],[],e,s,gg)
_(fKB,cZB)
var h1B=_mz(z,'confirm-shop-popup',['bind:__l',95,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(fKB,h1B)
_(r,fKB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx0_XC_1_4()
var c3B=_v()
_(r,c3B)
if(_oz(z,0,e,s,gg)){c3B.wxVkey=1
var o4B=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var l5B=_mz(z,'u-icon',['bind:__l',4,'class',1,'name',2,'size',3,'vueId',4],[],e,s,gg)
_(o4B,l5B)
_(c3B,o4B)
}
c3B.wxXCkey=1
c3B.wxXCkey=3
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx0_XC_1_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx0_XC_1_6()
var e8B=_v()
_(r,e8B)
if(_oz(z,0,e,s,gg)){e8B.wxVkey=1
var b9B=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var o0B=_mz(z,'u-icon',['bind:__l',4,'class',1,'name',2,'size',3,'vueId',4],[],e,s,gg)
_(b9B,o0B)
_(e8B,b9B)
}
e8B.wxXCkey=1
e8B.wxXCkey=3
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx0_XC_1";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx0_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/shop/banner/index.wxml'] = [$gwx0_XC_1, './packShop/pages/shop/banner/index.wxml'];else __wxAppCode__['packShop/pages/shop/banner/index.wxml'] = $gwx0_XC_1( './packShop/pages/shop/banner/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/shop/list/index.wxml'] = [$gwx0_XC_1, './packShop/pages/shop/list/index.wxml'];else __wxAppCode__['packShop/pages/shop/list/index.wxml'] = $gwx0_XC_1( './packShop/pages/shop/list/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/shop/main.wxml'] = [$gwx0_XC_1, './packShop/pages/shop/main.wxml'];else __wxAppCode__['packShop/pages/shop/main.wxml'] = $gwx0_XC_1( './packShop/pages/shop/main.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/shop/map/index.wxml'] = [$gwx0_XC_1, './packShop/pages/shop/map/index.wxml'];else __wxAppCode__['packShop/pages/shop/map/index.wxml'] = $gwx0_XC_1( './packShop/pages/shop/map/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/shop/nav/index.wxml'] = [$gwx0_XC_1, './packShop/pages/shop/nav/index.wxml'];else __wxAppCode__['packShop/pages/shop/nav/index.wxml'] = $gwx0_XC_1( './packShop/pages/shop/nav/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['packShop/pages/shop/search/index.wxml'] = [$gwx0_XC_1, './packShop/pages/shop/search/index.wxml'];else __wxAppCode__['packShop/pages/shop/search/index.wxml'] = $gwx0_XC_1( './packShop/pages/shop/search/index.wxml' );
	;__wxRoute = "packShop/pages/shop/banner/index";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/shop/banner/index.js";define("packShop/pages/shop/banner/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/shop/banner/index"],{"7cb7":function(n,e,a){a.r(e);var t=a("acc0"),o=a.n(t);for(var c in t)["default"].indexOf(c)<0&&function(n){a.d(e,n,(function(){return t[n]}))}(c);e.default=o.a},"94f4":function(n,e,a){a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var t=function(){this.$createElement,this._self._c},o=[]},a5a4:function(n,e,a){var t=a("fce9");a.n(t).a},acc0:function(n,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={props:{value:{type:Array},jsonData:{type:Object}},computed:{styleHeight:function(){return"height:".concat(this.jsonData.height,"rpx")}},data:function(){return{bannerList:[]}}};e.default=t},be06:function(n,e,a){a.r(e);var t=a("94f4"),o=a("7cb7");for(var c in o)["default"].indexOf(c)<0&&function(n){a.d(e,n,(function(){return o[n]}))}(c);a("a5a4");var r=a("s49"),u=Object(r.a)(o.default,t.b,t.c,!1,null,"076a9cae",null,!1,t.a,void 0);e.default=u.exports},fce9:function(n,e,a){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["packShop/pages/shop/banner/index-create-component",{"packShop/pages/shop/banner/index-create-component":function(n,e,a){a("s33").createComponent(a("be06"))}},[["packShop/pages/shop/banner/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'packShop/pages/shop/banner/index.js'});require("packShop/pages/shop/banner/index.js");;__wxRoute = "packShop/pages/shop/list/index";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/shop/list/index.js";define("packShop/pages/shop/list/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/shop/list/index"],{"0ccb":function(e,o,n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=function(e){return e&&e.__esModule?e:{default:e}}(n("s203")),i=n("s47"),r=n("s48"),s={components:{Empty:function(){Promise.all([n.e("common/vendor"),n.e("components/element/empty/index")]).then(function(){return resolve(n("d5bd"))}.bind(null,n)).catch(n.oe)}},mixins:[i.mixinStorage,r.mixinLocal],props:{value:{type:Array},showType:{type:String,default:"01"},isCollection:{type:Boolean}},data:function(){var e=this;return{obj:{0:{icon:"icon-mendian--dingwei2",value:function(e){return e.address}},1:{icon:"icon-mendian-shijian",value:function(o){return e.getTime(o,0)}},2:{icon:"icon-waimaiwaimaiyingyeshijian",value:function(o){return e.getTime(o,1)}}}}},computed:{merLogo:function(){var e;return null===(e=this.local_mchntDetailInfo)||void 0===e?void 0:e.merLogo},defaultShop:function(){var e,o=null===(e=this.local_shopTermInfo)||void 0===e?void 0:e.shopId,n=this.$root.$mp.query;return!this.$merchantInfo.info.groupId||null!=n&&n.componentId||(o=""),o}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},activeShop:function(){return this.$vueUserInfo.activeCityShopId||this.defaultShop},getTime:function(e,o){var n={0:{b:"openHoursBegin",e:"openHoursEnd",t:"eatInOpenTime",v:this.$t("全天24小时营业")},1:{b:"takeOutBeginTime",e:"takeOutEndTime",t:"takeOutOpenTime",v:this.$t("全天24小时外送")}}[o],t="";return e[n.b]&&e[n.e]?t="".concat(e[n.b],"-").concat(e[n.e]):e[n.t]?t="".concat(e[n.t]):e[n.v]&&(t="".concat(e[n.v])),t},change:function(e,o){("01"!=this.showType||o.decorationPicUrl)&&this.changeSelectShop(o),this.$set(this.$vueUserInfo,"activeCityShopId",e),this.$forceUpdate(),this.$emit("changeActivetShop",e)},toCall:function(e){t.default.makePhoneCall(e)},changeSelectShop:function(e){this.$emit("changeSelectShop",e)},toNavigate:function(e){t.default.openLocation(e)},collectionShop:function(e){this.$emit("cancelCollection",e)}}};o.default=s},"243c":function(e,o,n){var t=n("d0a9");n.n(t).a},"29f4":function(e,o,n){n.r(o);var t=n("0ccb"),i=n.n(t);for(var r in t)["default"].indexOf(r)<0&&function(e){n.d(o,e,(function(){return t[e]}))}(r);o.default=i.a},"9ab52":function(e,o,n){n.r(o);var t=n("e826"),i=n("29f4");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(o,e,(function(){return i[e]}))}(r);n("243c");var s=n("s49"),a=Object(s.a)(i.default,t.b,t.c,!1,null,"633857ee",null,!1,t.a,void 0);o.default=a.exports},d0a9:function(e,o,n){},e826:function(e,o,n){n.d(o,"b",(function(){return t})),n.d(o,"c",(function(){return i})),n.d(o,"a",(function(){}));var t=function(){var e=this,o=(e.$createElement,e._self._c,e.__get_style([e.mainTypeInfo.baseStyle])),n=e.activeShop(),t=e.value&&e.value.length?e.__map(e.value,(function(o,n){return{$orig:e.__get_orig(o),m1:"01"==e.showType&&!o.decorationPicUrl&&o.progressInfo&&o.progressInfo._isProgress?e.$t("下单马上可制作"):null,m2:"01"!=e.showType||o.decorationPicUrl||o.progressInfo&&o.progressInfo._isProgress||!o.progressInfo||!o.progressInfo.progressInfoShow||!o.progressInfo._progressInfoTimeMsg?null:e.$t("预计"),m3:"01"!=e.showType||o.decorationPicUrl||o.progressInfo&&o.progressInfo._isProgress||!o.progressInfo||!o.progressInfo.progressInfoShow||!o.progressInfo._progressInfoTimeMsg?null:e.$t("可取"),l0:"01"!=e.showType||o.decorationPicUrl?null:e.__map(e.obj,(function(n,t){var i=e.__get_orig(n),r=n.value(o);return{$orig:i,g0:r,g1:r?n.value(o):null}})),m4:"01"!=e.showType||o.decorationPicUrl?null:e.$t("选这家"),s1:"01"==e.showType&&!o.decorationPicUrl&&o._first?e.__get_style([e.mainTypeInfo.baseStyle]):null,m5:"01"==e.showType&&!o.decorationPicUrl&&o._first?e.$t("距离最近"):null}})):null,i=e.value&&e.value.length||!e.isCollection?null:e.$t("暂无收藏门店");e.$mp.data=Object.assign({},{$root:{s0:o,m0:n,l1:t,m6:i}})},i=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["packShop/pages/shop/list/index-create-component",{"packShop/pages/shop/list/index-create-component":function(e,o,n){n("s33").createComponent(n("9ab52"))}},[["packShop/pages/shop/list/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'packShop/pages/shop/list/index.js'});require("packShop/pages/shop/list/index.js");;__wxRoute = "packShop/pages/shop/map/index";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/shop/map/index.js";define("packShop/pages/shop/map/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/shop/map/index"],{"7a27":function(o,t,n){n.r(t);var i=n("9720"),e=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(o){n.d(t,o,(function(){return i[o]}))}(a);t.default=e.a},"82f4":function(o,t,n){n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"s308"))}},e=function(){var o=this;o.$createElement,o._self._c,o._isMounted||(o.e0=function(t){o.show=!o.show})},a=[]},"8ebb":function(o,t,n){},9720:function(o,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(o){return o&&o.__esModule?o:{default:o}}(n("s240")),e=n("s47"),a=n("s48"),u={mixins:[e.mixinStorage,a.mixinLocal],props:{value:{type:Array},shopList:{type:Array}},data:function(){return{show:!0,center:{latitude:"",longitude:""},markers:[],obj:{0:{label:this.$t("展开地图"),icon:"arrow-down"},1:{label:this.$t("收起地图"),icon:"arrow-up"}},nowShopId:"",showmark:!0}},mounted:function(){this.init()},methods:{init:function(){var o,t=this,n=this.local_shopTermInfo,i=null==n?void 0:n.titu,e=null==n?void 0:n.gitu,a=(null==n?void 0:n.shopId)||"";if(null!==(o=this.shopList)&&void 0!==o&&o.length){var u,s,r,l,d=(null===(u=this.$vueUserInfo)||void 0===u||null===(s=u.tempInfo)||void 0===s?void 0:s.regionCd)||(null===(r=this.$vueUserInfo)||void 0===r||null===(l=r.cityInfo)||void 0===l?void 0:l.regionCd)||"";if((null==n?void 0:n.regionCd)!=d&&(i=this.shopList[0].titu,e=this.shopList[0].gitu,a=this.shopList[0].shopId),this.$vueUserInfo.activeCityShopId){var c=this.shopList.find((function(o){return o.shopId==t.$vueUserInfo.activeCityShopId}));c&&(i=c.titu,e=c.gitu,a=this.$vueUserInfo.activeCityShopId)}}this.center.latitude=i,this.center.longitude=e,this.nowShopId=a,setTimeout((function(){t.getMarkers()}),0)},getMarkers:function(){var o=this;this.markers=this.shopList.map((function(t,n){var e,a,u=t.shopLogo||(null===(e=o.local_mchntDetailInfo)||void 0===e?void 0:e.merLogo)||(null===(a=o.$merchantInfo)||void 0===a?void 0:a.info.headImg);return{id:n,latitude:t.titu,longitude:t.gitu,height:40,width:u?40:35,zIndex:1e4,iconPath:u||i.default.getImgUrl("miniApp-20230915-location.png"),customCallout:{anchorX:0,anchorY:-3,display:o.nowShopId==t.shopId?"ALWAYS":"NONE"}}}))},onMarkerTap:function(o){this.markers.forEach((function(t){t.id!=o.detail.markerId?t.customCallout.display="NONE":t.customCallout.display="ALWAYS"}))},callOutTap:function(o){var t=this.shopList[o.detail.markerId];t.shopId!=this.local_shopTermInfo.shopId&&this.$emit("change",t)}},watch:{value:{handler:function(){this.init()},deep:!0}}};t.default=u},bb35:function(o,t,n){var i=n("8ebb");n.n(i).a},c7ef5:function(o,t,n){n.r(t);var i=n("82f4"),e=n("7a27");for(var a in e)["default"].indexOf(a)<0&&function(o){n.d(t,o,(function(){return e[o]}))}(a);n("bb35");var u=n("s49"),s=Object(u.a)(e.default,i.b,i.c,!1,null,"9f5d2c9e",null,!1,i.a,void 0);t.default=s.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["packShop/pages/shop/map/index-create-component",{"packShop/pages/shop/map/index-create-component":function(o,t,n){n("s33").createComponent(n("c7ef5"))}},[["packShop/pages/shop/map/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'packShop/pages/shop/map/index.js'});require("packShop/pages/shop/map/index.js");;__wxRoute = "packShop/pages/shop/nav/index";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/shop/nav/index.js";define("packShop/pages/shop/nav/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/shop/nav/index"],{"0b9f":function(n,e,t){},"37e9":function(n,e,t){t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){}));var a=function(){var n=this,e=(n.$createElement,n._self._c,n.__get_style([n.mainTypeInfo.baseStyle]));n.$mp.data=Object.assign({},{$root:{s0:e}})},o=[]},"5cf8":function(n,e,t){t.r(e);var a=t("37e9"),o=t("f24c");for(var c in o)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(c);t("635d");var f=t("s49"),i=Object(f.a)(o.default,a.b,a.c,!1,null,"99507548",null,!1,a.a,void 0);e.default=i.exports},"635d":function(n,e,t){var a=t("0b9f");t.n(a).a},f24c:function(n,e,t){t.r(e);var a=t("fa14"),o=t.n(a);for(var c in a)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(c);e.default=o.a},fa14:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{value:{type:Object}},data:function(){return{list:[this.$t("选择门店"),this.$t("常用/收藏")],selectIndex:0}},methods:{change:function(n){this.selectIndex=n,this.$emit("changeNav",!!~~n)}}};e.default=a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["packShop/pages/shop/nav/index-create-component",{"packShop/pages/shop/nav/index-create-component":function(n,e,t){t("s33").createComponent(t("5cf8"))}},[["packShop/pages/shop/nav/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'packShop/pages/shop/nav/index.js'});require("packShop/pages/shop/nav/index.js");;__wxRoute = "packShop/pages/shop/search/index";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/shop/search/index.js";define("packShop/pages/shop/search/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/shop/search/index"],{1562:function(n,e,o){},2117:function(n,e,o){o.r(e);var t=o("6794"),r=o.n(t);for(var c in t)["default"].indexOf(c)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(c);e.default=r.a},"3f00":function(n,e,o){o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return t}));var t={uIcon:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(o.bind(null,"s308"))}},r=function(){var n=this,e=(n.$createElement,n._self._c,n.$t("请输入地址或者门店名称"));n.$mp.data=Object.assign({},{$root:{m0:e}})},c=[]},"4e32":function(n,e,o){o.r(e);var t=o("3f00"),r=o("2117");for(var c in r)["default"].indexOf(c)<0&&function(n){o.d(e,n,(function(){return r[n]}))}(c);o("629a");var u=o("s49"),a=Object(u.a)(r.default,t.b,t.c,!1,null,"186da676",null,!1,t.a,void 0);e.default=a.exports},"629a":function(n,e,o){var t=o("1562");o.n(t).a},6794:function(n,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=c(o("s38")),r=c(o("s220"));function c(n){return n&&n.__esModule?n:{default:n}}var u={props:{componentId:{type:Number},searchKeyword:{type:String}},data:function(){return{value:""}},computed:{cityName:function(){return this.$vueUserInfo.tempInfo&&this.$vueUserInfo.tempInfo.regionNmCn||this.$vueUserInfo.cityInfo&&this.$vueUserInfo.cityInfo.regionNmCn||this.$vueUserInfo.city}},methods:{change:function(){this.$merchantInfo.info.groupId||t.default.redirectTo("city")},changeInput:function(n){var e=this;r.default.debounce((function(){return e.$emit("search",n)}),500)}}};e.default=u}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["packShop/pages/shop/search/index-create-component",{"packShop/pages/shop/search/index-create-component":function(n,e,o){o("s33").createComponent(o("4e32"))}},[["packShop/pages/shop/search/index-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'packShop/pages/shop/search/index.js'});require("packShop/pages/shop/search/index.js");;__wxRoute = "packShop/pages/shop/main";__wxRouteBegin = true;__wxAppCurrentFile__="packShop/pages/shop/main.js";define("packShop/pages/shop/main.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../@babel/runtime/helpers/Arrayincludes"),require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["packShop/pages/shop/main"],{'/main.js?{"page":"packShop%2Fpages%2Fshop%2Fmain"}':function(e,n,t){(function(e){t("s37"),o(t("s35"));var n=o(t("7b61"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("s33").createPage)},"1c48":function(e,n,t){var o=t("67f8");t.n(o).a},"66d4":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=m(t("s52")),r=m(t("s38")),i=m(t("s55")),a=t("s202"),c=t("s46"),s=t("s186"),u=t("s211"),p=t("s213"),l=t("s47"),f=t("s48"),d=t("/packShop/pages/shop/group.js"),h=(m(t("s43")),t("s40"));function m(e){return e&&e.__esModule?e:{default:e}}function v(e,n,t,o,r,i,a){try{var c=e[i](a),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(o,r)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var i=e.apply(n,t);function a(e){v(i,o,r,a,c,"next",e)}function c(e){v(i,o,r,a,c,"throw",e)}a(void 0)}))}}function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}m(t("s206"));var S={components:{SearchInfo:function(){Promise.all([t.e("common/vendor"),t.e("packShop/pages/shop/search/index")]).then(function(){return resolve(t("4e32"))}.bind(null,t)).catch(t.oe)},shopNav:function(){t.e("packShop/pages/shop/nav/index").then(function(){return resolve(t("5cf8"))}.bind(null,t)).catch(t.oe)},StoreMap:function(){Promise.all([t.e("common/vendor"),t.e("packShop/pages/shop/map/index")]).then(function(){return resolve(t("c7ef5"))}.bind(null,t)).catch(t.oe)},ShopList:function(){t.e("packShop/pages/shop/list/index").then(function(){return resolve(t("9ab52"))}.bind(null,t)).catch(t.oe)},Shopbanner:function(){t.e("packShop/pages/shop/banner/index").then(function(){return resolve(t("be06"))}.bind(null,t)).catch(t.oe)},Layout:function(){t.e("components/app/layout/index").then(function(){return resolve(t("5a5f"))}.bind(null,t)).catch(t.oe)},Scan:function(){Promise.all([t.e("common/vendor"),t.e("components/common/scan/index")]).then(function(){return resolve(t("e0f2"))}.bind(null,t)).catch(t.oe)},LoadingPage:function(){Promise.all([t.e("common/vendor"),t.e("components/app/load/index")]).then(function(){return resolve(t("5c022"))}.bind(null,t)).catch(t.oe)},Login:function(){Promise.all([t.e("common/vendor"),t.e("components/app/login/index")]).then(function(){return resolve(t("747d"))}.bind(null,t)).catch(t.oe)},Agreement:function(){Promise.all([t.e("common/vendor"),t.e("components/pop/agreement")]).then(function(){return resolve(t("1591"))}.bind(null,t)).catch(t.oe)},OpenAd:function(){Promise.all([t.e("common/vendor"),t.e("components/app/openAd/index")]).then(function(){return resolve(t("5469"))}.bind(null,t)).catch(t.oe)},ConfirmShopPopup:function(){Promise.all([t.e("common/vendor"),t.e("components/pop/confirmShopPopup")]).then(function(){return resolve(t("c88f"))}.bind(null,t)).catch(t.oe)}},mixins:[a.mixinLocation,c.mixinSyncInfo,s.mixinQuery,u.mixinDecoration,p.mixinJudge,l.mixinStorage,f.mixinLocal,d.mixinShopGroupList],data:function(){return{searchValue:"",filterList:[],loading:!1,bannerList:[],jsonData:{},componentId:0,collationType:"01",showType:"01",listShow:!1,loadResolve:!0,type:"",merchantInfoPage:this.$merchantInfo,showLocation:!1,isCollection:!1,isFromGroupCode:!1,pageNum:1,pageSize:10,totalPages:0,seletShopInfo:{}}},computed:b(b({},(0,h.mapGetters)(["vxOrderType","vxOrderTypeOut","vxShopInfo","vxGroupInfo","vxMchntInfo"])),{},{list:function(){return this.isCollection&&(this.shopList=this.shopList.filter((function(e){return!!~~e.colId}))),this.isFromGroupCode&&this.searchValue?this.filterList:this.shopList},isReservationCom:function(){var e=this.seletShopInfo,n=e.tsTradeTime,t=e.wmTradeTime,o=e.busiModel;if(!(["2","14"].includes(o)||+n&&+t))return!0}}),onLoad:function(e){var n=this;return g(o.default.mark((function t(){var r,i;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e&&e.type&&(n.type=e.type),n.componentId=(null==e?void 0:e.componentId)||(null==e?void 0:e.groupId)||(null===(r=n.$merchantInfo)||void 0===r||null===(i=r.info)||void 0===i?void 0:i.groupId)||0;case 2:case"end":return t.stop()}}),t)})))()},onShow:function(){this.load()},methods:b(b({},(0,h.mapMutations)(["TERMID","VX_GROUPINFO","VX_SHOP_INFO","RESERVATION_TAG","VX_ORDER_TYPE_OUT"])),{},{agree:function(){this.load()},load:function(){var e=this;return g(o.default.mark((function n(){var t;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.loading=!0,e.init(),e.loadResolve=!1,e.$vueUserInfo.location||"loaction"==e.type||e.$merchantInfo.info.groupId||!~~(null===(t=e.local_shopExtroInfo)||void 0===t?void 0:t.orderFetchPosition)||(e.showLocation=!0);case 4:case"end":return n.stop()}}),n)})))()},init:function(){var e=this;return g(o.default.mark((function n(){var t,r,i,a;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.$root.$mp.query,e.$merchantInfo.info=b(b(b({},e.$merchantInfo.info),r),{},{groupCode:r.groupId||e.$merchantInfo.info.groupId||e.vxGroupInfo.shopGroupId}),i=e.$merchantInfo.info,e.isFromGroupCode=i.groupId&&i.areaGroupId&&!r.componentId,!e.isFromGroupCode){n.next=11;break}return e.getWxLocation("","",!0),n.next=8,e.getShopGroupCodeInfo(i);case 8:e.loading=!1,n.next=13;break;case 11:e.changeNav(e.isCollection),e.loading=!1;case 13:if(!~~e.local_mchntDetailInfo.tradeAreaFlag&&!~~(null===(t=e.groupCodeInfo)||void 0===t?void 0:t.tradeAreaFlag)){n.next=24;break}if(e.listShow=!1,!r.groupId||!r.componentId){n.next=20;break}return e.jsonData=JSON.parse(r.jsonData),e.componentId=r.componentId||r.groupId,n.next=20,e.getShopGroupBanner(r.componentId,r.groupId);case 20:i.groupId&&e.groupCodeInfo.decorationList401&&(a=(null==i?void 0:i.groupId)||(null==r?void 0:r.groupId),e.formatDecor(a)),setTimeout((function(){e.listShow=!0}),300),n.next=26;break;case 24:e.listShow=!0,e.componentId=r.groupId||0;case 26:case"end":return n.stop()}}),n)})))()},formatList:function(){var e,n,t,o,r,i,a,c,s=this,u=(null===(e=this.$vueUserInfo)||void 0===e||null===(n=e.tempInfo)||void 0===n?void 0:n.regionCd)||(null===(t=this.$vueUserInfo)||void 0===t||null===(o=t.cityInfo)||void 0===o?void 0:o.regionCd)||"",p={},l=(null===(r=this.local_shopTermInfo)||void 0===r?void 0:r.shopId)||"";(null===(i=this.local_shopTermInfo)||void 0===i?void 0:i.regionCd)==u&&null!==(a=this.shopList)&&void 0!==a&&a.length&&(null!==(c=this.$vueUserInfo)&&void 0!==c&&c.location&&1==this.pageNum&&(this.shopList[0]._first=!0),this.shopList.forEach((function(e,n){if(e.shopId==l)return p=e,void s.shopList.splice(n,1)})),Object.keys(p).length>0&&this.shopList.unshift(p))},search:function(e){var n=this;return g(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.searchValue=e,!n.isFromGroupCode){t.next=5;break}n.filterList=n.shopList.filter((function(n){return n.shopName.includes(e)})),t.next=8;break;case 5:return n.shopList=[],t.next=8,n.getShopCurrent("getShopList","",!0,"",!1,n.searchValue);case 8:case"end":return t.stop()}}),t)})))()},changeSelectShop:function(e){this.seletShopInfo=e;var n=this.$root.$mp.query;e.distance>1e3&&!n.groupId||["2","14"].includes(e.busiModel)?this.$refs.adress.init(e,!0):(this.$set(this.$vueUserInfo,"shopDialog",!1),this.jumpShop(e))},jumpShop:function(e){var n=this;return g(o.default.mark((function t(){var i,a;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.isShowScan("","shop",e.busiModel),a=n.vxOrderTypeOut,"2"==e.busiModel&&(a=n.vxOrderTypeOut),!i){t.next=6;break}return n.$refs.scan.init(e),t.abrupt("return");case 6:return t.next=8,n.getTermInfoFn(e.termId);case 8:return n.$tempState.type=n.type||n.$tempState.type||"",n.RESERVATION_TAG(!1),r.default.reLaunch("menu",{termId:e.termId,type:n.type,orderType:a,changeShop:!0}),t.abrupt("return");case 14:case"end":return t.stop()}}),t)})))()},getTermInfoFn:function(e){var n={termId:e};return this.$service.getTermInfo(n)},scanStart:function(){this.loading=!0},scanDone:function(e,n){var t=this;return g(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.resetList(),t.loading=!1,r.default.reLaunch("menu",{termId:n.termId});case 3:case"end":return e.stop()}}),e)})))()},changeGo:function(){this.$systemInfoSync.enter.scanFlag=!1,this.setGroupScan()},go:function(){this.setGroupScan()},cancelLocation:function(){this.$merchantInfo.info.groupId||r.default.navigateTo("city",{type:"loaction"})},confirmLocation:function(){var e=this;return g(o.default.mark((function n(){return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getWxLocation(1,!0);case 2:n.sent&&(e.showLocation=!1,r.default.redirectTo("shopList"));case 4:case"end":return n.stop()}}),n)})))()},changeActivetShop:function(e){this.$refs.map.init()},onUnload:function(){},changeNav:function(e){this.isCollection=e,this.shopList=[],this.pageNum=1,this.getShopListData()},getShopListData:function(){var e=this;return g(o.default.mark((function n(){var t;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.$root.$mp.query,!e.isCollection){n.next=6;break}return n.next=4,e.getShopCurrent("getShopCollectionList","",1,"",1);case 4:n.next=13;break;case 6:if(!e.searchValue){n.next=11;break}return n.next=9,e.getShopCurrent("getShopList","",!0,"",!1,e.searchValue);case 9:n.next=13;break;case 11:return n.next=13,e.getShop("",1,"");case 13:t.componentId||e.formatList();case 14:case"end":return n.stop()}}),n)})))()},cancelCollection:function(e){var n,t=this,o=null===(n=this.vxShopInfo)||void 0===n?void 0:n.isCollectionId,r={every:!0,mchntCd:e.mchntCd,openId:e.xOpenId,userId:e.userId,xappId:e.xAppId,id:e.colId,shopId:e.shopId,ticket:e.ticket};this.$service.cancelCollection(r).then((function(n){n?(e.colId==o&&(t.vxShopInfo.isCollectionId="",t.VX_SHOP_INFO(t.vxShopInfo)),i.default.toast(t.$t("取消收藏门店成功")),t.pageNum=1,t.shopList=[],t.getShopCurrent("getShopCollectionList","",1,"")):i.default.toast(t.$t("取消收藏门店失败"))}))},scrolltolower:function(){this.pageNum>=this.totalPages||(this.pageNum=++this.pageNum,this.getShopListData())}})};n.default=S},"67f8":function(e,n,t){},"7b61":function(e,n,t){t.r(n);var o=t("f706"),r=t("e51a");for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("1c48");var a=t("s49"),c=Object(a.a)(r.default,o.b,o.c,!1,null,"531b502c",null,!1,o.a,void 0);n.default=c.exports},e51a:function(e,n,t){t.r(n);var o=t("66d4"),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n.default=r.a},f706:function(e,n,t){t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var o={uModal:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-modal/u-modal")]).then(t.bind(null,"s315"))}},r=function(){var e=this,n=(e.$createElement,e._self._c,e.$t("尚未选择门店")),t=e.$t("当前尚未选择门店，无法下单，您可以手动选择门店，或者开启定位授权，以便为您推荐最新门店"),o=e.$t("授权定位"),r=e.$t("选择门店");e.$mp.data=Object.assign({},{$root:{m0:n,m1:t,m2:o,m3:r}})},i=[]}},[['/main.js?{"page":"packShop%2Fpages%2Fshop%2Fmain"}',"common/runtime","common/vendor","packShop/common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'packShop/pages/shop/main.js'});require("packShop/pages/shop/main.js");	