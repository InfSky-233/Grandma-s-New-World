import{d as T,r as y,o as te,h as O,a as de,b as fe,u as ve,c as he,e as pe,f as R,g as M,i as I,w as _,j as P,k as h,l as F,m as S,F as W,n as b,p as D,t as V,q as re,M as H,s as Y,v as K,_ as q,x as me,L as ge,T as _e}from"./index.c43e29e1.js";/*!
 * qrcode.vue v3.4.0
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var x=function(){return x=Object.assign||function(f){for(var d,i=1,l=arguments.length;i<l;i++){d=arguments[i];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(f[p]=d[p])}return f},x.apply(this,arguments)},z;(function(s){var f=function(){function o(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],u=0;u<this.size;u++)a.push(!1);for(var u=0;u<this.size;u++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(r);if(this.drawCodewords(c),n==-1)for(var C=1e9,u=0;u<8;u++){this.applyMask(u),this.drawFormatBits(u);var w=this.getPenaltyScore();w<C&&(n=u,C=w),this.applyMask(u)}l(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return o.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return o.encodeSegments(r,t)},o.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return o.encodeSegments([r],t)},o.encodeSegments=function(e,t,r,n,a,u){if(r===void 0&&(r=1),n===void 0&&(n=40),a===void 0&&(a=-1),u===void 0&&(u=!0),!(o.MIN_VERSION<=r&&r<=n&&n<=o.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var c,C;for(c=r;;c++){var w=o.getNumDataCodewords(c,t)*8,v=p.getTotalBits(e,c);if(v<=w){C=v;break}if(c>=n)throw new RangeError("Data too long")}for(var g=0,A=[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH];g<A.length;g++){var B=A[g];u&&C<=o.getNumDataCodewords(c,B)*8&&(t=B)}for(var m=[],N=0,k=e;N<k.length;N++){var E=k[N];d(E.mode.modeBits,4,m),d(E.numChars,E.mode.numCharCountBits(c),m);for(var U=0,$=E.getData();U<$.length;U++){var le=$[U];m.push(le)}}l(m.length==C);var G=o.getNumDataCodewords(c,t)*8;l(m.length<=G),d(0,Math.min(4,G-m.length),m),d(0,(8-m.length%8)%8,m),l(m.length%8==0);for(var j=236;m.length<G;j^=253)d(j,8,m);for(var Q=[];Q.length*8<m.length;)Q.push(0);return m.forEach(function(ce,ee){return Q[ee>>>3]|=ce<<7-(ee&7)}),new o(c,t,Q,a)},o.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},o.prototype.getModules=function(){return this.modules},o.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var n=0;n<r;n++)e==0&&n==0||e==0&&n==r-1||e==r-1&&n==0||this.drawAlignmentPattern(t[e],t[n]);this.drawFormatBits(0),this.drawVersion()},o.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,n=0;n<10;n++)r=r<<1^(r>>>9)*1335;var a=(t<<10|r)^21522;l(a>>>15==0);for(var n=0;n<=5;n++)this.setFunctionModule(8,n,i(a,n));this.setFunctionModule(8,7,i(a,6)),this.setFunctionModule(8,8,i(a,7)),this.setFunctionModule(7,8,i(a,8));for(var n=9;n<15;n++)this.setFunctionModule(14-n,8,i(a,n));for(var n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,i(a,n));for(var n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,i(a,n));this.setFunctionModule(8,this.size-8,!0)},o.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;l(r>>>18==0);for(var t=0;t<18;t++){var n=i(r,t),a=this.size-11+t%3,u=Math.floor(t/3);this.setFunctionModule(a,u,n),this.setFunctionModule(u,a,n)}}},o.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var a=Math.max(Math.abs(n),Math.abs(r)),u=e+n,c=t+r;0<=u&&u<this.size&&0<=c&&c<this.size&&this.setFunctionModule(u,c,a!=2&&a!=4)}},o.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)},o.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},o.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var n=o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],u=Math.floor(o.getNumRawDataModules(t)/8),c=n-u%n,C=Math.floor(u/n),w=[],v=o.reedSolomonComputeDivisor(a),g=0,A=0;g<n;g++){var B=e.slice(A,A+C-a+(g<c?0:1));A+=B.length;var m=o.reedSolomonComputeRemainder(B,v);g<c&&B.push(0),w.push(B.concat(m))}for(var N=[],k=function(E){w.forEach(function(U,$){(E!=C-a||$>=c)&&N.push(U[E])})},g=0;g<w[0].length;g++)k(g);return l(N.length==u),N},o.prototype.drawCodewords=function(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var n=0;n<this.size;n++)for(var a=0;a<2;a++){var u=r-a,c=(r+1&2)==0,C=c?this.size-1-n:n;!this.isFunction[C][u]&&t<e.length*8&&(this.modules[C][u]=i(e[t>>>3],7-(t&7)),t++)}}l(t==e.length*8)},o.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var n=void 0;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}},o.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,n=0,a=[0,0,0,0,0,0,0],u=0;u<this.size;u++)this.modules[t][u]==r?(n++,n==5?e+=o.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,a),r||(e+=this.finderPenaltyCountPatterns(a)*o.PENALTY_N3),r=this.modules[t][u],n=1);e+=this.finderPenaltyTerminateAndCount(r,n,a)*o.PENALTY_N3}for(var u=0;u<this.size;u++){for(var r=!1,c=0,a=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][u]==r?(c++,c==5?e+=o.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,a),r||(e+=this.finderPenaltyCountPatterns(a)*o.PENALTY_N3),r=this.modules[t][u],c=1);e+=this.finderPenaltyTerminateAndCount(r,c,a)*o.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var u=0;u<this.size-1;u++){var C=this.modules[t][u];C==this.modules[t][u+1]&&C==this.modules[t+1][u]&&C==this.modules[t+1][u+1]&&(e+=o.PENALTY_N2)}for(var w=0,v=0,g=this.modules;v<g.length;v++){var A=g[v];w=A.reduce(function(N,k){return N+(k?1:0)},w)}var B=this.size*this.size,m=Math.ceil(Math.abs(w*20-B*10)/B)-1;return l(0<=m&&m<=9),e+=m*o.PENALTY_N4,l(0<=e&&e<=2568888),e},o.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r},o.getNumRawDataModules=function(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return l(208<=t&&t<=29648),t},o.getNumDataCodewords=function(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},o.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var n=1,r=0;r<e;r++){for(var a=0;a<t.length;a++)t[a]=o.reedSolomonMultiply(t[a],n),a+1<t.length&&(t[a]^=t[a+1]);n=o.reedSolomonMultiply(n,2)}return t},o.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(C){return 0}),n=function(C){var w=C^r.shift();r.push(0),t.forEach(function(v,g){return r[g]^=o.reedSolomonMultiply(v,w)})},a=0,u=e;a<u.length;a++){var c=u[a];n(c)}return r},o.reedSolomonMultiply=function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return l(r>>>8==0),r},o.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];l(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},o.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},o.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},o.MIN_VERSION=1,o.MAX_VERSION=40,o.PENALTY_N1=3,o.PENALTY_N2=3,o.PENALTY_N3=40,o.PENALTY_N4=10,o.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],o.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o}();s.QrCode=f;function d(o,e,t){if(e<0||e>31||o>>>e!=0)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(o>>>r&1)}function i(o,e){return(o>>>e&1)!=0}function l(o){if(!o)throw new Error("Assertion error")}var p=function(){function o(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return o.makeBytes=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var a=n[r];d(a,8,t)}return new o(o.Mode.BYTE,e.length,t)},o.makeNumeric=function(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var n=Math.min(e.length-r,3);d(parseInt(e.substring(r,r+n),10),n*3+1,t),r+=n}return new o(o.Mode.NUMERIC,e.length,t)},o.makeAlphanumeric=function(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var n=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),d(n,11,t)}return r<e.length&&d(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new o(o.Mode.ALPHANUMERIC,e.length,t)},o.makeSegments=function(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]},o.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<1<<7)d(e,8,t);else if(e<1<<14)d(2,2,t),d(e,14,t);else if(e<1e6)d(6,3,t),d(e,21,t);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,t)},o.isNumeric=function(e){return o.NUMERIC_REGEX.test(e)},o.isAlphanumeric=function(e){return o.ALPHANUMERIC_REGEX.test(e)},o.prototype.getData=function(){return this.bitData.slice()},o.getTotalBits=function(e,t){for(var r=0,n=0,a=e;n<a.length;n++){var u=a[n],c=u.mode.numCharCountBits(t);if(u.numChars>=1<<c)return 1/0;r+=4+c+u.bitData.length}return r},o.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",o}();s.QrSegment=p})(z||(z={}));(function(s){(function(f){var d=function(){function i(l,p){this.ordinal=l,this.formatBits=p}return i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),i}();f.Ecc=d})(s.QrCode||(s.QrCode={}))})(z||(z={}));(function(s){(function(f){var d=function(){function i(l,p){this.modeBits=l,this.numBitsCharCount=p}return i.prototype.numCharCountBits=function(l){return this.numBitsCharCount[Math.floor((l+7)/17)]},i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),i}();f.Mode=d})(s.QrSegment||(s.QrSegment={}))})(z||(z={}));var L=z,oe="H",X={L:L.QrCode.Ecc.LOW,M:L.QrCode.Ecc.MEDIUM,Q:L.QrCode.Ecc.QUARTILE,H:L.QrCode.Ecc.HIGH},Ce=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ne(s){return s in X}function ae(s,f){f===void 0&&(f=0);var d=[];return s.forEach(function(i,l){var p=null;i.forEach(function(o,e){if(!o&&p!==null){d.push("M".concat(p+f," ").concat(l+f,"h").concat(e-p,"v1H").concat(p+f,"z")),p=null;return}if(e===i.length-1){if(!o)return;p===null?d.push("M".concat(e+f,",").concat(l+f," h1v1H").concat(e+f,"z")):d.push("M".concat(p+f,",").concat(l+f," h").concat(e+1-p,"v1H").concat(p+f,"z"));return}o&&p===null&&(p=e)})}),d.join("")}var J={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:oe,validator:function(s){return ne(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},we=x(x({},J),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),Ee=T({name:"QRCodeSvg",props:J,setup:function(s){var f=y(0),d=y(""),i=function(){var l=s.value,p=s.level,o=s.margin,e=L.QrCode.encodeText(l,X[p]).getModules();f.value=e.length+o*2,d.value=ae(e,o)};return i(),te(i),function(){return O("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f.value," ").concat(f.value)},[O("path",{fill:s.background,d:"M0,0 h".concat(f.value,"v").concat(f.value,"H0z")}),O("path",{fill:s.foreground,d:d.value})])}}}),Fe=T({name:"QRCodeCanvas",props:J,setup:function(s){var f=y(null),d=function(){var i=s.value,l=s.level,p=s.size,o=s.margin,e=s.background,t=s.foreground,r=f.value;if(!!r){var n=r.getContext("2d");if(!!n){var a=L.QrCode.encodeText(i,X[l]).getModules(),u=a.length+o*2,c=window.devicePixelRatio||1,C=p/u*c;r.height=r.width=p*c,n.scale(C,C),n.fillStyle=e,n.fillRect(0,0,u,u),n.fillStyle=t,Ce?n.fill(new Path2D(ae(a,o))):a.forEach(function(w,v){w.forEach(function(g,A){g&&n.fillRect(A+o,v+o,1,1)})})}}};return de(d),te(d),function(){return O("canvas",{ref:f,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),Be=T({name:"Qrcode",render:function(){var s=this.$props,f=s.renderAs,d=s.value,i=s.size,l=s.margin,p=s.level,o=s.background,e=s.foreground,t=i>>>0,r=l>>>0,n=ne(p)?p:oe;return O(f==="svg"?Ee:Fe,{value:d,size:t,margin:r,level:n,background:o,foreground:e})},props:we});const ue=(s=60)=>{let f;fe(()=>{clearInterval(f)});const d=y(0);return[d,()=>{d.value=s,f=setInterval(()=>{d.value>0?d.value-=1:(clearInterval(f),d.value=0)},1e3)}]};const se=s=>(Y("data-v-00a39d7a"),s=s(),K(),s),Ae={class:"check-container remember-pwd"},Me=se(()=>F("span",{class:"tip"},"\u5FD8\u8BB0\u8D26\u53F7\uFF1F",-1)),Re={class:"tip-container"},ye=se(()=>F("span",{class:"tip"},"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u4E00\u626B\u767B\u5F55",-1)),Ne={class:"refresh"},be={class:"switch-container"},Se=T({__name:"Login",setup(s){const f=ve(),d={phone:"",account:"admin",password:"admin",verifyCode:"",checked:!1},i={phone:[{required:!0,message:"\u624B\u673A\u53F7\u5FC5\u586B",type:"error"}],account:[{required:!0,message:"\u8D26\u53F7\u5FC5\u586B",type:"error"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"}],verifyCode:[{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B",type:"error"}]},l=y("password"),p=y(),o=y({...d}),e=y(!1),[t,r]=ue(),n=w=>{l.value=w},a=he(),u=pe(),c=()=>{p.value.validate({fields:["phone"]}).then(w=>{w===!0&&r()})},C=async({validateResult:w})=>{if(w===!0)try{await f.login(o.value),H.success("\u767B\u9646\u6210\u529F");const v=u.query.redirect,g=v?decodeURIComponent(v):"/dashboard";a.push(g)}catch(v){console.log(v),H.error(v.message)}};return(w,v)=>{const g=R("t-icon"),A=R("t-input"),B=R("t-form-item"),m=R("t-checkbox"),N=R("t-button"),k=R("t-form");return M(),I(k,{ref_key:"form",ref:p,class:re(["item-container",`login-${l.value}`]),data:o.value,rules:i,"label-width":"0",onSubmit:C},{default:_(()=>[l.value=="password"?(M(),P(W,{key:0},[h(B,{name:"account"},{default:_(()=>[h(A,{modelValue:o.value.account,"onUpdate:modelValue":v[0]||(v[0]=E=>o.value.account=E),size:"large",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF1Aadmin"},{"prefix-icon":_(()=>[h(g,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),h(B,{name:"password"},{default:_(()=>[h(A,{modelValue:o.value.password,"onUpdate:modelValue":v[2]||(v[2]=E=>o.value.password=E),size:"large",type:e.value?"text":"password",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801\uFF1Aadmin"},{"prefix-icon":_(()=>[h(g,{name:"lock-on"})]),"suffix-icon":_(()=>[h(g,{name:e.value?"browse":"browse-off",onClick:v[1]||(v[1]=E=>e.value=!e.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),F("div",Ae,[h(m,null,{default:_(()=>[S("\u8BB0\u4F4F\u8D26\u53F7")]),_:1}),Me])],64)):l.value=="qrcode"?(M(),P(W,{key:1},[b(" \u626B\u7801\u767B\u9646 "),F("div",Re,[ye,F("span",Ne,[S("\u5237\u65B0 "),h(g,{name:"refresh"})])]),h(Be,{value:"",size:192,level:"H"})],64)):(M(),P(W,{key:2},[b(" \u624B\u673A\u53F7\u767B\u9646 "),h(B,{name:"phone"},{default:_(()=>[h(A,{modelValue:o.value.phone,"onUpdate:modelValue":v[3]||(v[3]=E=>o.value.phone=E),size:"large",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},{"prefix-icon":_(()=>[h(g,{name:"mobile"})]),_:1},8,["modelValue"])]),_:1}),h(B,{class:"verification-code",name:"verifyCode"},{default:_(()=>[h(A,{modelValue:o.value.verifyCode,"onUpdate:modelValue":v[4]||(v[4]=E=>o.value.verifyCode=E),size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),h(N,{variant:"outline",disabled:D(t)>0,onClick:c},{default:_(()=>[S(V(D(t)==0?"\u53D1\u9001\u9A8C\u8BC1\u7801":`${D(t)}\u79D2\u540E\u53EF\u91CD\u53D1`),1)]),_:1},8,["disabled"])]),_:1})],64)),l.value!=="qrcode"?(M(),I(B,{key:3,class:"btn-container"},{default:_(()=>[h(N,{block:"",size:"large",type:"submit"},{default:_(()=>[S(" \u767B\u5F55 ")]),_:1})]),_:1})):b("v-if",!0),F("div",be,[l.value!=="password"?(M(),P("span",{key:0,class:"tip",onClick:v[5]||(v[5]=E=>n("password"))},"\u4F7F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")):b("v-if",!0),l.value!=="qrcode"?(M(),P("span",{key:1,class:"tip",onClick:v[6]||(v[6]=E=>n("qrcode"))},"\u4F7F\u7528\u5FAE\u4FE1\u626B\u7801\u767B\u5F55")):b("v-if",!0),l.value!=="phone"?(M(),P("span",{key:2,class:"tip",onClick:v[7]||(v[7]=E=>n("phone"))},"\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55")):b("v-if",!0)])]),_:1},8,["class","data"])}}});var ke=q(Se,[["__scopeId","data-v-00a39d7a"],["__file","C:/Users/admin/Desktop/Grandma's New World/src/pages/login/components/Login.vue"]]);const ie=s=>(Y("data-v-1e63d122"),s=s(),K(),s),Pe=ie(()=>F("span",null,"TDesign\u670D\u52A1\u534F\u8BAE",-1)),Ie=ie(()=>F("span",null,"TDesign \u9690\u79C1\u58F0\u660E",-1)),De={class:"switch-container"},ze=T({__name:"Register",emits:["registerSuccess"],setup(s,{emit:f}){const d={phone:"",email:"",password:"",verifyCode:"",checked:!1},i={phone:[{required:!0,message:"\u624B\u673A\u53F7\u5FC5\u586B",type:"error"}],email:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B",type:"error"},{email:!0,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1",type:"warning"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"}],verifyCode:[{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B",type:"error"}]},l=y("phone"),p=y(),o=y({...d}),e=y(!1),[t,r]=ue(),n=({validateResult:u})=>{if(u===!0){if(!o.value.checked){H.error("\u8BF7\u540C\u610FTDesign\u670D\u52A1\u534F\u8BAE\u548CTDesign \u9690\u79C1\u58F0\u660E");return}H.success("\u6CE8\u518C\u6210\u529F"),f("registerSuccess")}},a=u=>{p.value.reset(),l.value=u};return(u,c)=>{const C=R("t-icon"),w=R("t-input"),v=R("t-form-item"),g=R("t-button"),A=R("t-checkbox"),B=R("t-form");return M(),I(B,{ref_key:"form",ref:p,class:re(["item-container",`register-${l.value}`]),data:o.value,rules:i,"label-width":"0",onSubmit:n},{default:_(()=>[l.value=="phone"?(M(),I(v,{key:0,name:"phone"},{default:_(()=>[h(w,{modelValue:o.value.phone,"onUpdate:modelValue":c[0]||(c[0]=m=>o.value.phone=m),maxlength:11,size:"large",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7"},{"prefix-icon":_(()=>[h(C,{name:"user"})]),_:1},8,["modelValue"])]),_:1})):b("v-if",!0),l.value=="email"?(M(),I(v,{key:1,name:"email"},{default:_(()=>[h(w,{modelValue:o.value.email,"onUpdate:modelValue":c[1]||(c[1]=m=>o.value.email=m),type:"text",size:"large",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1"},{"prefix-icon":_(()=>[h(C,{name:"mail"})]),_:1},8,["modelValue"])]),_:1})):b("v-if",!0),h(v,{name:"password"},{default:_(()=>[h(w,{modelValue:o.value.password,"onUpdate:modelValue":c[3]||(c[3]=m=>o.value.password=m),size:"large",type:e.value?"text":"password",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},{"prefix-icon":_(()=>[h(C,{name:"lock-on"})]),"suffix-icon":_(()=>[h(C,{name:e.value?"browse":"browse-off",onClick:c[2]||(c[2]=m=>e.value=!e.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),l.value=="phone"?(M(),I(v,{key:2,class:"verification-code",name:"verifyCode"},{default:_(()=>[h(w,{modelValue:o.value.verifyCode,"onUpdate:modelValue":c[4]||(c[4]=m=>o.value.verifyCode=m),size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),h(g,{variant:"outline",disabled:D(t)>0,onClick:D(r)},{default:_(()=>[S(V(D(t)==0?"\u53D1\u9001\u9A8C\u8BC1\u7801":`${D(t)}\u79D2\u540E\u53EF\u91CD\u53D1`),1)]),_:1},8,["disabled","onClick"])]),_:1})):b("v-if",!0),h(v,{class:"check-container",name:"checked"},{default:_(()=>[h(A,{modelValue:o.value.checked,"onUpdate:modelValue":c[5]||(c[5]=m=>o.value.checked=m)},{default:_(()=>[S("\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F ")]),_:1},8,["modelValue"]),S(),Pe,S(" \u548C "),Ie]),_:1}),h(v,null,{default:_(()=>[h(g,{block:"",size:"large",type:"submit"},{default:_(()=>[S(" \u6CE8\u518C ")]),_:1})]),_:1}),F("div",De,[F("span",{class:"tip",onClick:c[6]||(c[6]=m=>a(l.value=="phone"?"email":"phone"))},V(l.value=="phone"?"\u4F7F\u7528\u90AE\u7BB1\u6CE8\u518C":"\u4F7F\u7528\u624B\u673A\u53F7\u6CE8\u518C"),1)])]),_:1},8,["class","data"])}}});var Te=q(ze,[["__scopeId","data-v-1e63d122"],["__file","C:/Users/admin/Desktop/Grandma's New World/src/pages/login/components/Register.vue"]]);const Le={class:"login-header"},Ue={class:"operations-container"},Oe=T({__name:"Header",setup(s){const f=me(),d=()=>{f.updateConfig({showSettingPanel:!0})},i=()=>{window.open("https://github.com/tencent/tdesign-vue-next-starter")},l=()=>{window.open("http://tdesign.tencent.com/starter/docs/get-started")};return(p,o)=>{const e=R("t-icon"),t=R("t-button");return M(),P("header",Le,[h(D(ge),{class:"logo"}),F("div",Ue,[h(t,{theme:"default",shape:"square",variant:"text",onClick:i},{default:_(()=>[h(e,{name:"logo-github",class:"icon"})]),_:1}),h(t,{theme:"default",shape:"square",variant:"text",onClick:l},{default:_(()=>[h(e,{name:"help-circle",class:"icon"})]),_:1}),h(t,{theme:"default",shape:"square",variant:"text",onClick:d},{default:_(()=>[h(e,{name:"setting",class:"icon"})]),_:1})])])}}});var Ve=q(Oe,[["__scopeId","data-v-170ca468"],["__file","C:/Users/admin/Desktop/Grandma's New World/src/pages/login/components/Header.vue"]]);const Z=s=>(Y("data-v-247e7dd8"),s=s(),K(),s),$e={class:"login-wrapper"},Qe={class:"login-container"},He={class:"title-container"},xe=Z(()=>F("h1",{class:"title margin-no"},"\u767B\u5F55\u5230",-1)),qe=Z(()=>F("h1",{class:"title"},"TDesign Starter",-1)),Ge={class:"sub-title"},We={class:"tip"},Ye=Z(()=>F("footer",{class:"copyright"},"Copyright @ 2021-2022 Tencent. All Rights Reserved",-1)),Ke={name:"LoginIndex"},Xe=T({...Ke,setup(s){const f=y("login"),d=i=>{f.value=i};return(i,l)=>(M(),P("div",$e,[h(Ve),F("div",Qe,[F("div",He,[xe,qe,F("div",Ge,[F("p",We,V(f.value=="register"?"\u5DF2\u6709\u8D26\u53F7?":"\u6CA1\u6709\u8D26\u53F7\u5417?"),1),F("p",{class:"tip",onClick:l[0]||(l[0]=p=>d(f.value=="register"?"login":"register"))},V(f.value=="register"?"\u767B\u5F55":"\u6CE8\u518C\u65B0\u8D26\u53F7"),1)])]),f.value==="login"?(M(),I(ke,{key:0})):(M(),I(Te,{key:1,onRegisterSuccess:l[1]||(l[1]=p=>d("login"))})),h(_e)]),Ye]))}});var Ze=q(Xe,[["__scopeId","data-v-247e7dd8"],["__file","C:/Users/admin/Desktop/Grandma's New World/src/pages/login/index.vue"]]);export{Ze as default};