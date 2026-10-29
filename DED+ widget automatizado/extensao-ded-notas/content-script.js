/* pako 0.2.9 nodeca/pako */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.pako=e()}}(function(){return function e(t,i,n){function a(o,s){if(!i[o]){if(!t[o]){var f="function"==typeof require&&require;if(!s&&f)return f(o,!0);if(r)return r(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[o]={exports:{}};t[o][0].call(d.exports,function(e){var i=t[o][1][e];return a(i?i:e)},d,d.exports,e,t,i,n)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,i){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;i.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(var n in i)i.hasOwnProperty(n)&&(e[n]=i[n])}}return e},i.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,i,n,a){if(t.subarray&&e.subarray)return void e.set(t.subarray(i,i+n),a);for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){var t,i,n,a,r,o;for(n=0,t=0,i=e.length;t<i;t++)n+=e[t].length;for(o=new Uint8Array(n),a=0,t=0,i=e.length;t<i;t++)r=e[t],o.set(r,a),a+=r.length;return o}},r={arraySet:function(e,t,i,n,a){for(var r=0;r<n;r++)e[a+r]=t[i+r]},flattenChunks:function(e){return[].concat.apply([],e)}};i.setTyped=function(e){e?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,r))},i.setTyped(n)},{}],2:[function(e,t,i){"use strict";function n(e,t){if(t<65537&&(e.subarray&&o||!e.subarray&&r))return String.fromCharCode.apply(null,a.shrinkBuf(e,t));for(var i="",n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i}var a=e("./common"),r=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch(e){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){o=!1}for(var s=new a.Buf8(256),f=0;f<256;f++)s[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;s[254]=s[254]=1,i.string2buf=function(e){var t,i,n,r,o,s=e.length,f=0;for(r=0;r<s;r++)i=e.charCodeAt(r),55296===(64512&i)&&r+1<s&&(n=e.charCodeAt(r+1),56320===(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),r++)),f+=i<128?1:i<2048?2:i<65536?3:4;for(t=new a.Buf8(f),o=0,r=0;o<f;r++)i=e.charCodeAt(r),55296===(64512&i)&&r+1<s&&(n=e.charCodeAt(r+1),56320===(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),r++)),i<128?t[o++]=i:i<2048?(t[o++]=192|i>>>6,t[o++]=128|63&i):i<65536?(t[o++]=224|i>>>12,t[o++]=128|i>>>6&63,t[o++]=128|63&i):(t[o++]=240|i>>>18,t[o++]=128|i>>>12&63,t[o++]=128|i>>>6&63,t[o++]=128|63&i);return t},i.buf2binstring=function(e){return n(e,e.length)},i.binstring2buf=function(e){for(var t=new a.Buf8(e.length),i=0,n=t.length;i<n;i++)t[i]=e.charCodeAt(i);return t},i.buf2string=function(e,t){var i,a,r,o,f=t||e.length,l=new Array(2*f);for(a=0,i=0;i<f;)if(r=e[i++],r<128)l[a++]=r;else if(o=s[r],o>4)l[a++]=65533,i+=o-1;else{for(r&=2===o?31:3===o?15:7;o>1&&i<f;)r=r<<6|63&e[i++],o--;o>1?l[a++]=65533:r<65536?l[a++]=r:(r-=65536,l[a++]=55296|r>>10&1023,l[a++]=56320|1023&r)}return n(l,a)},i.utf8border=function(e,t){var i;for(t=t||e.length,t>e.length&&(t=e.length),i=t-1;i>=0&&128===(192&e[i]);)i--;return i<0?t:0===i?t:i+s[e[i]]>t?i:t}},{"./common":1}],3:[function(e,t,i){"use strict";function n(e,t,i,n){for(var a=65535&e|0,r=e>>>16&65535|0,o=0;0!==i;){o=i>2e3?2e3:i,i-=o;do a=a+t[n++]|0,r=r+a|0;while(--o);a%=65521,r%=65521}return a|r<<16|0}t.exports=n},{}],4:[function(e,t,i){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],5:[function(e,t,i){"use strict";function n(){for(var e,t=[],i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t}function a(e,t,i,n){var a=r,o=n+i;e^=-1;for(var s=n;s<o;s++)e=e>>>8^a[255&(e^t[s])];return e^-1}var r=n();t.exports=a},{}],6:[function(e,t,i){"use strict";function n(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}t.exports=n},{}],7:[function(e,t,i){"use strict";var n=30,a=12;t.exports=function(e,t){var i,r,o,s,f,l,d,u,c,h,b,w,m,k,_,g,v,p,x,y,S,E,B,Z,A;i=e.state,r=e.next_in,Z=e.input,o=r+(e.avail_in-5),s=e.next_out,A=e.output,f=s-(t-e.avail_out),l=s+(e.avail_out-257),d=i.dmax,u=i.wsize,c=i.whave,h=i.wnext,b=i.window,w=i.hold,m=i.bits,k=i.lencode,_=i.distcode,g=(1<<i.lenbits)-1,v=(1<<i.distbits)-1;e:do{m<15&&(w+=Z[r++]<<m,m+=8,w+=Z[r++]<<m,m+=8),p=k[w&g];t:for(;;){if(x=p>>>24,w>>>=x,m-=x,x=p>>>16&255,0===x)A[s++]=65535&p;else{if(!(16&x)){if(0===(64&x)){p=k[(65535&p)+(w&(1<<x)-1)];continue t}if(32&x){i.mode=a;break e}e.msg="invalid literal/length code",i.mode=n;break e}y=65535&p,x&=15,x&&(m<x&&(w+=Z[r++]<<m,m+=8),y+=w&(1<<x)-1,w>>>=x,m-=x),m<15&&(w+=Z[r++]<<m,m+=8,w+=Z[r++]<<m,m+=8),p=_[w&v];i:for(;;){if(x=p>>>24,w>>>=x,m-=x,x=p>>>16&255,!(16&x)){if(0===(64&x)){p=_[(65535&p)+(w&(1<<x)-1)];continue i}e.msg="invalid distance code",i.mode=n;break e}if(S=65535&p,x&=15,m<x&&(w+=Z[r++]<<m,m+=8,m<x&&(w+=Z[r++]<<m,m+=8)),S+=w&(1<<x)-1,S>d){e.msg="invalid distance too far back",i.mode=n;break e}if(w>>>=x,m-=x,x=s-f,S>x){if(x=S-x,x>c&&i.sane){e.msg="invalid distance too far back",i.mode=n;break e}if(E=0,B=b,0===h){if(E+=u-x,x<y){y-=x;do A[s++]=b[E++];while(--x);E=s-S,B=A}}else if(h<x){if(E+=u+h-x,x-=h,x<y){y-=x;do A[s++]=b[E++];while(--x);if(E=0,h<y){x=h,y-=x;do A[s++]=b[E++];while(--x);E=s-S,B=A}}}else if(E+=h-x,x<y){y-=x;do A[s++]=b[E++];while(--x);E=s-S,B=A}for(;y>2;)A[s++]=B[E++],A[s++]=B[E++],A[s++]=B[E++],y-=3;y&&(A[s++]=B[E++],y>1&&(A[s++]=B[E++]))}else{E=s-S;do A[s++]=A[E++],A[s++]=A[E++],A[s++]=A[E++],y-=3;while(y>2);y&&(A[s++]=A[E++],y>1&&(A[s++]=A[E++]))}break}}break}}while(r<o&&s<l);y=m>>3,r-=y,m-=y<<3,w&=(1<<m)-1,e.next_in=r,e.next_out=s,e.avail_in=r<o?5+(o-r):5-(r-o),e.avail_out=s<l?257+(l-s):257-(s-l),i.hold=w,i.bits=m}},{}],8:[function(e,t,i){"use strict";function n(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function a(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new _.Buf16(320),this.work=new _.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=D,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new _.Buf32(we),t.distcode=t.distdyn=new _.Buf32(me),t.sane=1,t.back=-1,z):C}function o(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,r(e)):C}function s(e,t){var i,n;return e&&e.state?(n=e.state,t<0?(i=0,t=-t):(i=(t>>4)+1,t<48&&(t&=15)),t&&(t<8||t>15)?C:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,o(e))):C}function f(e,t){var i,n;return e?(n=new a,e.state=n,n.window=null,i=s(e,t),i!==z&&(e.state=null),i):C}function l(e){return f(e,_e)}function d(e){if(ge){var t;for(m=new _.Buf32(512),k=new _.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(x(S,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;x(E,e.lens,0,32,k,0,e.work,{bits:5}),ge=!1}e.lencode=m,e.lenbits=9,e.distcode=k,e.distbits=5}function u(e,t,i,n){var a,r=e.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new _.Buf8(r.wsize)),n>=r.wsize?(_.arraySet(r.window,t,i-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(a=r.wsize-r.wnext,a>n&&(a=n),_.arraySet(r.window,t,i-n,a,r.wnext),n-=a,n?(_.arraySet(r.window,t,i-n,n,0),r.wnext=n,r.whave=r.wsize):(r.wnext+=a,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=a))),0}function c(e,t){var i,a,r,o,s,f,l,c,h,b,w,m,k,we,me,ke,_e,ge,ve,pe,xe,ye,Se,Ee,Be=0,Ze=new _.Buf8(4),Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return C;i=e.state,i.mode===X&&(i.mode=W),s=e.next_out,r=e.output,l=e.avail_out,o=e.next_in,a=e.input,f=e.avail_in,c=i.hold,h=i.bits,b=f,w=l,ye=z;e:for(;;)switch(i.mode){case D:if(0===i.wrap){i.mode=W;break}for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(2&i.wrap&&35615===c){i.check=0,Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0),c=0,h=0,i.mode=F;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",i.mode=ce;break}if((15&c)!==U){e.msg="unknown compression method",i.mode=ce;break}if(c>>>=4,h-=4,xe=(15&c)+8,0===i.wbits)i.wbits=xe;else if(xe>i.wbits){e.msg="invalid window size",i.mode=ce;break}i.dmax=1<<xe,e.adler=i.check=1,i.mode=512&c?q:X,c=0,h=0;break;case F:for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(i.flags=c,(255&i.flags)!==U){e.msg="unknown compression method",i.mode=ce;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=ce;break}i.head&&(i.head.text=c>>8&1),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0)),c=0,h=0,i.mode=L;case L:for(;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.head&&(i.head.time=c),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,Ze[2]=c>>>16&255,Ze[3]=c>>>24&255,i.check=v(i.check,Ze,4,0)),c=0,h=0,i.mode=H;case H:for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.head&&(i.head.xflags=255&c,i.head.os=c>>8),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0)),c=0,h=0,i.mode=M;case M:if(1024&i.flags){for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.length=c,i.head&&(i.head.extra_len=c),512&i.flags&&(Ze[0]=255&c,Ze[1]=c>>>8&255,i.check=v(i.check,Ze,2,0)),c=0,h=0}else i.head&&(i.head.extra=null);i.mode=j;case j:if(1024&i.flags&&(m=i.length,m>f&&(m=f),m&&(i.head&&(xe=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Array(i.head.extra_len)),_.arraySet(i.head.extra,a,o,m,xe)),512&i.flags&&(i.check=v(i.check,a,m,o)),f-=m,o+=m,i.length-=m),i.length))break e;i.length=0,i.mode=K;case K:if(2048&i.flags){if(0===f)break e;m=0;do xe=a[o+m++],i.head&&xe&&i.length<65536&&(i.head.name+=String.fromCharCode(xe));while(xe&&m<f);if(512&i.flags&&(i.check=v(i.check,a,m,o)),f-=m,o+=m,xe)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=P;case P:if(4096&i.flags){if(0===f)break e;m=0;do xe=a[o+m++],i.head&&xe&&i.length<65536&&(i.head.comment+=String.fromCharCode(xe));while(xe&&m<f);if(512&i.flags&&(i.check=v(i.check,a,m,o)),f-=m,o+=m,xe)break e}else i.head&&(i.head.comment=null);i.mode=Y;case Y:if(512&i.flags){for(;h<16;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(c!==(65535&i.check)){e.msg="header crc mismatch",i.mode=ce;break}c=0,h=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=X;break;case q:for(;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}e.adler=i.check=n(c),c=0,h=0,i.mode=G;case G:if(0===i.havedict)return e.next_out=s,e.avail_out=l,e.next_in=o,e.avail_in=f,i.hold=c,i.bits=h,N;e.adler=i.check=1,i.mode=X;case X:if(t===Z||t===A)break e;case W:if(i.last){c>>>=7&h,h-=7&h,i.mode=le;break}for(;h<3;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}switch(i.last=1&c,c>>>=1,h-=1,3&c){case 0:i.mode=J;break;case 1:if(d(i),i.mode=ie,t===A){c>>>=2,h-=2;break e}break;case 2:i.mode=$;break;case 3:e.msg="invalid block type",i.mode=ce}c>>>=2,h-=2;break;case J:for(c>>>=7&h,h-=7&h;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if((65535&c)!==(c>>>16^65535)){e.msg="invalid stored block lengths",i.mode=ce;break}if(i.length=65535&c,c=0,h=0,i.mode=Q,t===A)break e;case Q:i.mode=V;case V:if(m=i.length){if(m>f&&(m=f),m>l&&(m=l),0===m)break e;_.arraySet(r,a,o,m,s),f-=m,o+=m,l-=m,s+=m,i.length-=m;break}i.mode=X;break;case $:for(;h<14;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(i.nlen=(31&c)+257,c>>>=5,h-=5,i.ndist=(31&c)+1,c>>>=5,h-=5,i.ncode=(15&c)+4,c>>>=4,h-=4,i.nlen>286||i.ndist>30){e.msg="too many length or distance symbols",i.mode=ce;break}i.have=0,i.mode=ee;case ee:for(;i.have<i.ncode;){for(;h<3;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.lens[Ae[i.have++]]=7&c,c>>>=3,h-=3}for(;i.have<19;)i.lens[Ae[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,Se={bits:i.lenbits},ye=x(y,i.lens,0,19,i.lencode,0,i.work,Se),i.lenbits=Se.bits,ye){e.msg="invalid code lengths set",i.mode=ce;break}i.have=0,i.mode=te;case te:for(;i.have<i.nlen+i.ndist;){for(;Be=i.lencode[c&(1<<i.lenbits)-1],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(_e<16)c>>>=me,h-=me,i.lens[i.have++]=_e;else{if(16===_e){for(Ee=me+2;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(c>>>=me,h-=me,0===i.have){e.msg="invalid bit length repeat",i.mode=ce;break}xe=i.lens[i.have-1],m=3+(3&c),c>>>=2,h-=2}else if(17===_e){for(Ee=me+3;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=me,h-=me,xe=0,m=3+(7&c),c>>>=3,h-=3}else{for(Ee=me+7;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=me,h-=me,xe=0,m=11+(127&c),c>>>=7,h-=7}if(i.have+m>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=ce;break}for(;m--;)i.lens[i.have++]=xe}}if(i.mode===ce)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=ce;break}if(i.lenbits=9,Se={bits:i.lenbits},ye=x(S,i.lens,0,i.nlen,i.lencode,0,i.work,Se),i.lenbits=Se.bits,ye){e.msg="invalid literal/lengths set",i.mode=ce;break}if(i.distbits=6,i.distcode=i.distdyn,Se={bits:i.distbits},ye=x(E,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,Se),i.distbits=Se.bits,ye){e.msg="invalid distances set",i.mode=ce;break}if(i.mode=ie,t===A)break e;case ie:i.mode=ne;case ne:if(f>=6&&l>=258){e.next_out=s,e.avail_out=l,e.next_in=o,e.avail_in=f,i.hold=c,i.bits=h,p(e,w),s=e.next_out,r=e.output,l=e.avail_out,o=e.next_in,a=e.input,f=e.avail_in,c=i.hold,h=i.bits,i.mode===X&&(i.back=-1);break}for(i.back=0;Be=i.lencode[c&(1<<i.lenbits)-1],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(ke&&0===(240&ke)){for(ge=me,ve=ke,pe=_e;Be=i.lencode[pe+((c&(1<<ge+ve)-1)>>ge)],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(ge+me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=ge,h-=ge,i.back+=ge}if(c>>>=me,h-=me,i.back+=me,i.length=_e,0===ke){i.mode=fe;break}if(32&ke){i.back=-1,i.mode=X;break}if(64&ke){e.msg="invalid literal/length code",i.mode=ce;break}i.extra=15&ke,i.mode=ae;case ae:if(i.extra){for(Ee=i.extra;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.length+=c&(1<<i.extra)-1,c>>>=i.extra,h-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=re;case re:for(;Be=i.distcode[c&(1<<i.distbits)-1],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(0===(240&ke)){for(ge=me,ve=ke,pe=_e;Be=i.distcode[pe+((c&(1<<ge+ve)-1)>>ge)],me=Be>>>24,ke=Be>>>16&255,_e=65535&Be,!(ge+me<=h);){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}c>>>=ge,h-=ge,i.back+=ge}if(c>>>=me,h-=me,i.back+=me,64&ke){e.msg="invalid distance code",i.mode=ce;break}i.offset=_e,i.extra=15&ke,i.mode=oe;case oe:if(i.extra){for(Ee=i.extra;h<Ee;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}i.offset+=c&(1<<i.extra)-1,c>>>=i.extra,h-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=ce;break}i.mode=se;case se:if(0===l)break e;if(m=w-l,i.offset>m){if(m=i.offset-m,m>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=ce;break}m>i.wnext?(m-=i.wnext,k=i.wsize-m):k=i.wnext-m,m>i.length&&(m=i.length),we=i.window}else we=r,k=s-i.offset,m=i.length;m>l&&(m=l),l-=m,i.length-=m;do r[s++]=we[k++];while(--m);0===i.length&&(i.mode=ne);break;case fe:if(0===l)break e;r[s++]=i.length,l--,i.mode=ne;break;case le:if(i.wrap){for(;h<32;){if(0===f)break e;f--,c|=a[o++]<<h,h+=8}if(w-=l,e.total_out+=w,i.total+=w,w&&(e.adler=i.check=i.flags?v(i.check,r,w,s-w):g(i.check,r,w,s-w)),w=l,(i.flags?c:n(c))!==i.check){e.msg="incorrect data check",i.mode=ce;break}c=0,h=0}i.mode=de;case de:if(i.wrap&&i.flags){for(;h<32;){if(0===f)break e;f--,c+=a[o++]<<h,h+=8}if(c!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=ce;break}c=0,h=0}i.mode=ue;case ue:ye=R;break e;case ce:ye=O;break e;case he:return I;case be:default:return C}return e.next_out=s,e.avail_out=l,e.next_in=o,e.avail_in=f,i.hold=c,i.bits=h,(i.wsize||w!==e.avail_out&&i.mode<ce&&(i.mode<le||t!==B))&&u(e,e.output,e.next_out,w-e.avail_out)?(i.mode=he,I):(b-=e.avail_in,w-=e.avail_out,e.total_in+=b,e.total_out+=w,i.total+=w,i.wrap&&w&&(e.adler=i.check=i.flags?v(i.check,r,w,e.next_out-w):g(i.check,r,w,e.next_out-w)),e.data_type=i.bits+(i.last?64:0)+(i.mode===X?128:0)+(i.mode===ie||i.mode===Q?256:0),(0===b&&0===w||t===B)&&ye===z&&(ye=T),ye)}function h(e){if(!e||!e.state)return C;var t=e.state;return t.window&&(t.window=null),e.state=null,z}function b(e,t){var i;return e&&e.state?(i=e.state,0===(2&i.wrap)?C:(i.head=t,t.done=!1,z)):C}function w(e,t){var i,n,a,r=t.length;return e&&e.state?(i=e.state,0!==i.wrap&&i.mode!==G?C:i.mode===G&&(n=1,n=g(n,t,r,0),n!==i.check)?O:(a=u(e,t,r,r))?(i.mode=he,I):(i.havedict=1,z)):C}var m,k,_=e("../utils/common"),g=e("./adler32"),v=e("./crc32"),p=e("./inffast"),x=e("./inftrees"),y=0,S=1,E=2,B=4,Z=5,A=6,z=0,R=1,N=2,C=-2,O=-3,I=-4,T=-5,U=8,D=1,F=2,L=3,H=4,M=5,j=6,K=7,P=8,Y=9,q=10,G=11,X=12,W=13,J=14,Q=15,V=16,$=17,ee=18,te=19,ie=20,ne=21,ae=22,re=23,oe=24,se=25,fe=26,le=27,de=28,ue=29,ce=30,he=31,be=32,we=852,me=592,ke=15,_e=ke,ge=!0;i.inflateReset=o,i.inflateReset2=s,i.inflateResetKeep=r,i.inflateInit=l,i.inflateInit2=f,i.inflate=c,i.inflateEnd=h,i.inflateGetHeader=b,i.inflateSetDictionary=w,i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":5,"./inffast":7,"./inftrees":9}],9:[function(e,t,i){"use strict";var n=e("../utils/common"),a=15,r=852,o=592,s=0,f=1,l=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,i,b,w,m,k,_){var g,v,p,x,y,S,E,B,Z,A=_.bits,z=0,R=0,N=0,C=0,O=0,I=0,T=0,U=0,D=0,F=0,L=null,H=0,M=new n.Buf16(a+1),j=new n.Buf16(a+1),K=null,P=0;for(z=0;z<=a;z++)M[z]=0;for(R=0;R<b;R++)M[t[i+R]]++;for(O=A,C=a;C>=1&&0===M[C];C--);if(O>C&&(O=C),0===C)return w[m++]=20971520,w[m++]=20971520,_.bits=1,0;for(N=1;N<C&&0===M[N];N++);for(O<N&&(O=N),U=1,z=1;z<=a;z++)if(U<<=1,U-=M[z],U<0)return-1;if(U>0&&(e===s||1!==C))return-1;for(j[1]=0,z=1;z<a;z++)j[z+1]=j[z]+M[z];for(R=0;R<b;R++)0!==t[i+R]&&(k[j[t[i+R]]++]=R);if(e===s?(L=K=k,S=19):e===f?(L=d,H-=257,K=u,P-=257,S=256):(L=c,K=h,S=-1),F=0,R=0,z=N,y=m,I=O,T=0,p=-1,D=1<<O,x=D-1,e===f&&D>r||e===l&&D>o)return 1;for(var Y=0;;){Y++,E=z-T,k[R]<S?(B=0,Z=k[R]):k[R]>S?(B=K[P+k[R]],Z=L[H+k[R]]):(B=96,Z=0),g=1<<z-T,v=1<<I,N=v;do v-=g,w[y+(F>>T)+v]=E<<24|B<<16|Z|0;while(0!==v);for(g=1<<z-1;F&g;)g>>=1;if(0!==g?(F&=g-1,F+=g):F=0,R++,0===--M[z]){if(z===C)break;z=t[i+k[R]]}if(z>O&&(F&x)!==p){for(0===T&&(T=O),y+=N,I=z-T,U=1<<I;I+T<C&&(U-=M[I+T],!(U<=0));)I++,U<<=1;if(D+=1<<I,e===f&&D>r||e===l&&D>o)return 1;p=F&x,w[p]=O<<24|I<<16|y-m|0}}return 0!==F&&(w[y+F]=z-T<<24|64<<16|0),_.bits=O,0}},{"../utils/common":1}],10:[function(e,t,i){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],11:[function(e,t,i){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=n},{}],"/lib/inflate.js":[function(e,t,i){"use strict";function n(e){if(!(this instanceof n))return new n(e);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0===(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var i=o.inflateInit2(this.strm,t.windowBits);if(i!==l.Z_OK)throw new Error(d[i]);this.header=new c,o.inflateGetHeader(this.strm,this.header)}function a(e,t){var i=new n(t);if(i.push(e,!0),i.err)throw i.msg;return i.result}function r(e,t){return t=t||{},t.raw=!0,a(e,t)}var o=e("./zlib/inflate"),s=e("./utils/common"),f=e("./utils/strings"),l=e("./zlib/constants"),d=e("./zlib/messages"),u=e("./zlib/zstream"),c=e("./zlib/gzheader"),h=Object.prototype.toString;n.prototype.push=function(e,t){var i,n,a,r,d,u,c=this.strm,b=this.options.chunkSize,w=this.options.dictionary,m=!1;if(this.ended)return!1;n=t===~~t?t:t===!0?l.Z_FINISH:l.Z_NO_FLUSH,"string"==typeof e?c.input=f.binstring2buf(e):"[object ArrayBuffer]"===h.call(e)?c.input=new Uint8Array(e):c.input=e,c.next_in=0,c.avail_in=c.input.length;do{if(0===c.avail_out&&(c.output=new s.Buf8(b),c.next_out=0,c.avail_out=b),i=o.inflate(c,l.Z_NO_FLUSH),i===l.Z_NEED_DICT&&w&&(u="string"==typeof w?f.string2buf(w):"[object ArrayBuffer]"===h.call(w)?new Uint8Array(w):w,i=o.inflateSetDictionary(this.strm,u)),i===l.Z_BUF_ERROR&&m===!0&&(i=l.Z_OK,m=!1),i!==l.Z_STREAM_END&&i!==l.Z_OK)return this.onEnd(i),this.ended=!0,!1;c.next_out&&(0!==c.avail_out&&i!==l.Z_STREAM_END&&(0!==c.avail_in||n!==l.Z_FINISH&&n!==l.Z_SYNC_FLUSH)||("string"===this.options.to?(a=f.utf8border(c.output,c.next_out),r=c.next_out-a,d=f.buf2string(c.output,a),c.next_out=r,c.avail_out=b-r,r&&s.arraySet(c.output,c.output,a,r,0),this.onData(d)):this.onData(s.shrinkBuf(c.output,c.next_out)))),0===c.avail_in&&0===c.avail_out&&(m=!0)}while((c.avail_in>0||0===c.avail_out)&&i!==l.Z_STREAM_END);return i===l.Z_STREAM_END&&(n=l.Z_FINISH),n===l.Z_FINISH?(i=o.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===l.Z_OK):n!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),c.avail_out=0,!0)},n.prototype.onData=function(e){this.chunks.push(e)},n.prototype.onEnd=function(e){e===l.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},i.Inflate=n,i.inflate=a,i.inflateRaw=r,i.ungzip=a},{"./utils/common":1,"./utils/strings":2,"./zlib/constants":4,"./zlib/gzheader":6,"./zlib/inflate":8,"./zlib/messages":10,"./zlib/zstream":11}]},{},[])("/lib/inflate.js")});


/*
  DED+ Notas e Chamadas Widget
  - Lê .xlsx ou .csv no navegador, sem enviar arquivo para servidor.
  - Extrai turmas, atividades e notas a partir de planilhas no formato:
    Nº | NOME DO ALUNO | ATIVIDADE 1 | ATIVIDADE 2 | ... | TOTAL | NOTA FINAL | ...
  - Preenche a tela atual do DED+ com conferência manual antes de salvar.
*/
(() => {
  "use strict";

  document.getElementById("dedNotasPanelV7")?.remove();

  if (window.__DED_NOTAS_CHAMADAS_WIDGET__) {
    const existing = document.getElementById("dedNotasPanel");
    if (existing) existing.style.display = "block";
    return;
  }
  window.__DED_NOTAS_CHAMADAS_WIDGET__ = true;

  const STORAGE_KEY = "dedNotasChamadasWidgetData";
  const POSITION_KEY = "dedNotasChamadasWidgetPosition";

  const TEMPLATE_NOTAS_XLSX_B64 = "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";
  const TEMPLATE_CHAMADAS_XLSX_B64 = "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";


  const app = {
    data: null,
    fileName: "",
    callData: null,
    callFileName: "",
    studentRosters: {},
    rosterSettings: {},
    highlightColor: "#87B957",
    dangerColor: "#FF3860",
    warningColor: "#FFB020"
  };

  const IGNORE_HEADERS = new Set([
    "N", "NO", "NUM", "NUMERO", "NOME", "NOME DO ALUNO", "ALUNO", "ESTUDANTE",
    "TOTAL", "NOTA FINAL", "MEDIA", "MÉDIA", "%", "SITUACAO", "SITUAÇÃO",
    "SITUACAO DA MATRICULA", "SITUAÇÃO DA MATRÍCULA",
    "OBS", "OBSERVACAO", "OBSERVAÇÃO", "OBSERVACOES", "OBSERVAÇÕES",
    "MATRICULA", "MATRÍCULA", "REGISTRO", "ID", "CODIGO", "CÓDIGO",
    "MES", "MÊS", "ANO", "PROFESSOR", "PROFESSORA", "TURMA", "APROVACAO", "APROVAÇÃO"
  ]);

  const TOKEN_ALIASES = {
    "SOUZA": "SOUSA",
    "SOUSA": "SOUSA",
    "LUIZ": "LUIS",
    "LUÍZ": "LUIS",
    "LUIS": "LUIS",
    "LUIZA": "LUISA",
    "LUÍSA": "LUISA",
    "LUISA": "LUISA",
    "ISABELLA": "ISABELA",
    "IZABELA": "ISABELA",
    "IZABELLA": "ISABELA",
    "ISABELLY": "ISABELA",
    "IZABELLY": "ISABELA",
    "IZABELY": "ISABELA",
    "ISABELE": "ISABELA",
    "ISABELI": "ISABELA",
    "ISABELA": "ISABELA",
    "ANNA": "ANA",
    "ANA": "ANA",
    "VICTOR": "VITOR",
    "VÍCTOR": "VITOR",
    "VITOR": "VITOR",

    "LAVYNNA": "LAVYNA",
    "LAVYNA": "LAVYNA",
    "LAVYNNY": "LAVYNA",
    "LAVYNNIA": "LAVYNA",
    "LAVYNIA": "LAVYNA",
    "LAVYNHA": "LAVYNA",

    "SOPHIA": "SOFIA",
    "SOFYA": "SOFIA",
    "SOFIA": "SOFIA",
    "YASMIN": "YASMIN",
    "YASMIM": "YASMIN",
    "IASMIN": "YASMIN",
    "IASMIM": "YASMIN",
    "YASMYN": "YASMIN",
    "YASMINE": "YASMIN",
    "ISADORA": "ISADORA",
    "IZADORA": "ISADORA",
    "HELOISA": "HELOISA",
    "HELOYSA": "HELOISA",
    "ELOISA": "HELOISA",
    "ELOYSA": "HELOISA",

    "ARTHUR": "ARTUR",
    "ARTHURH": "ARTUR",
    "ARTUR": "ARTUR",
    "ALLAN": "ALAN",
    "ALAN": "ALAN",
    "ALLEN": "ALAN",
    "KELVIN": "KEVIN",
    "KEVYN": "KEVIN",
    "KEVIN": "KEVIN",
    "KEVEN": "KEVIN",
    "NICOLAS": "NICOLAS",
    "NIKOLAS": "NICOLAS",
    "NICHOLAS": "NICOLAS",
    "NICKOLAS": "NICOLAS",
    "RAFAEL": "RAFAEL",
    "RAPHAEL": "RAFAEL",
    "RAFAELA": "RAFAELA",
    "RAPHAELA": "RAFAELA",
    "FELIPE": "FELIPE",
    "FILIPE": "FELIPE",
    "PHILIPE": "FELIPE",
    "PHELIPE": "FELIPE",
    "FELIPPE": "FELIPE",
    "DAVI": "DAVI",
    "DAVY": "DAVI",
    "IAGO": "IAGO",
    "YAGO": "IAGO",
    "RAYANE": "RAYANE",
    "RAIANE": "RAYANE",
    "RAYANNE": "RAYANE",
    "RAIANNE": "RAYANE",
    "VITORIA": "VITORIA",
    "VICTORIA": "VITORIA",
    "VITTORIA": "VITORIA",
    "THAIS": "TAIS",
    "TAIS": "TAIS",
    "THAYSA": "TAISA",
    "TAISA": "TAISA",
    "WESLEY": "WESLEY",
    "WESLEI": "WESLEY",
    "WILLIAM": "WILLIAM",
    "WILIAM": "WILLIAM",
    "WILLIAN": "WILLIAM",
    "WILIAN": "WILLIAM",
    "EMILLY": "EMILY",
    "EMILY": "EMILY",
    "EMILLI": "EMILY",
    "EMILI": "EMILY",
    "STEFANY": "ESTEFANI",
    "ESTEFANY": "ESTEFANI",
    "STEPHANY": "ESTEFANI",
    "STEPHANIE": "ESTEFANI",
    "ESTEFANI": "ESTEFANI",

    "KAUANY": "KAUANY",
    "KAUANE": "KAUANY",
    "KAUANNY": "KAUANY",
    "CAUANY": "KAUANY",
    "CAUANE": "KAUANY",
    "CAMILLY": "CAMILI",
    "CAMILI": "CAMILI",
    "KAMILLY": "CAMILI",
    "KAMILI": "CAMILI",

    "MAYSA": "MAISA",
    "MAISA": "MAISA",
    "MAHISA": "MAISA",
    "MIRELLA": "MIRELA",
    "MIRELA": "MIRELA",
    "MILENA": "MILENA",
    "MYLENA": "MILENA"
  };

  function esc(text) {
    return String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function norm(text) {
    return String(text ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[º°]/g, "o")
      .replace(/[^A-Z0-9 ]+/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toUpperCase();
  }

  function normName(text) {
    return norm(String(text ?? "")
      .replace(/\([^)]*\)/g, " ")
      .replace(/[0-9]/g, " ")
      .replace(/[*.]/g, " "))
      .replace(/\bAEE\b/g, " ")
      .replace(/\bPCD\b/g, " ")
      .replace(/\bREGULAR\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function canonicalToken(token) {
    const t = norm(token);
    return TOKEN_ALIASES[t] || t;
  }

  function canonicalName(text) {
    return normName(text)
      .split(" ")
      .filter(Boolean)
      .map(canonicalToken)
      .join(" ");
  }

  function looseToken(token) {
    return canonicalToken(token)
      .replace(/PH/g, "F")
      .replace(/TH/g, "T")
      .replace(/CK/g, "K")
      .replace(/Y/g, "I")
      .replace(/W/g, "V")
      .replace(/([BCDFGHJKLMNPQRSTVWXYZ])\1+/g, "$1");
  }

  function looseName(text) {
    return normName(text)
      .split(" ")
      .filter(Boolean)
      .map(looseToken)
      .join(" ");
  }

  function normalizeTurma(value) {
    const s = norm(value);
    // Formato usado pelo DED+, ex.: "6º EF AF REG 2 (2026)".
    const ded = s.match(/\b([6-9])\s*O?\s*EF\s*AF\s*REG\s*([12])\b/);
    if (ded) return `${ded[1]}º${ded[2]}`;
    const m = s.match(/\b([6-9])\s*O?\s*(?:ANO|EF|AF|REG)?\s*([12])\b/) || s.match(/\b([6-9])\s*([12])\b/);
    if (m) return `${m[1]}º${m[2]}`;
    const m2 = s.match(/TURMA\s*([6-9])\s*O?\s*([12])\b/);
    if (m2) return `${m2[1]}º${m2[2]}`;
    return String(value || "").trim() || "Planilha";
  }

  function visible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
  }

  function colNameToIndex(ref) {
    const letters = String(ref || "").match(/[A-Z]+/i)?.[0] || "A";
    let n = 0;
    for (const ch of letters.toUpperCase()) n = n * 26 + (ch.charCodeAt(0) - 64);
    return n - 1;
  }

  function parseCellRef(ref) {
    const m = String(ref || "").match(/^([A-Z]+)(\d+)$/i);
    if (!m) return [0, 0];
    return [Number(m[2]) - 1, colNameToIndex(m[1])];
  }

  function cellIndexToCol(n) {
    let s = "";
    n += 1;
    while (n > 0) {
      const r = (n - 1) % 26;
      s = String.fromCharCode(65 + r) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  }

  function decodeUtf8(bytes) {
    return new TextDecoder("utf-8").decode(bytes);
  }

  function readUInt16(view, offset) {
    return view.getUint16(offset, true);
  }

  function readUInt32(view, offset) {
    return view.getUint32(offset, true);
  }

  function withTimeout(promise, ms, label) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(label || "Tempo esgotado.")), ms);
      promise.then(value => {
        clearTimeout(timer);
        resolve(value);
      }, err => {
        clearTimeout(timer);
        reject(err);
      });
    });
  }

  async function inflateRaw(data) {
    const pakoLib = (typeof pako !== "undefined" && pako?.inflateRaw) ? pako : (window.pako || globalThis.pako);
    if (pakoLib && typeof pakoLib.inflateRaw === "function") {
      try {
        return pakoLib.inflateRaw(data);
      } catch (err) {
        console.warn("Pako falhou ao descompactar uma entrada do XLSX; tentando fallback nativo.", err);
      }
    }

    if (!window.DecompressionStream) {
      throw new Error("Não consegui abrir esse .xlsx neste navegador. Tenta usar a extensão com pako ou exporta a planilha como .csv.");
    }

    let lastError;
    for (const mode of ["deflate-raw", "deflate"]) {
      try {
        const ds = new DecompressionStream(mode);
        const readable = new Blob([data]).stream().pipeThrough(ds);
        const buffer = await withTimeout(
          new Response(readable).arrayBuffer(),
          15000,
          "O leitor nativo travou ao abrir o .xlsx. Usa a extensão com pako ou salva a planilha em .csv."
        );
        return new Uint8Array(buffer);
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError || new Error("Não consegui descompactar o .xlsx.");
  }

  async function unzip(buffer) {
    const bytes = new Uint8Array(buffer);
    const view = new DataView(buffer);
    let eocd = -1;
    const min = Math.max(0, bytes.length - 65558);
    for (let i = bytes.length - 22; i >= min; i--) {
      if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
        eocd = i;
        break;
      }
    }
    if (eocd < 0) throw new Error("Arquivo .xlsx inválido: ZIP não encontrado.");

    const entries = {};
    const total = readUInt16(view, eocd + 10);
    let offset = readUInt32(view, eocd + 16);

    for (let i = 0; i < total; i++) {
      if (readUInt32(view, offset) !== 0x02014b50) throw new Error("Arquivo .xlsx inválido: central directory quebrado.");
      const method = readUInt16(view, offset + 10);
      const compSize = readUInt32(view, offset + 20);
      const fileNameLen = readUInt16(view, offset + 28);
      const extraLen = readUInt16(view, offset + 30);
      const commentLen = readUInt16(view, offset + 32);
      const localOffset = readUInt32(view, offset + 42);
      const name = decodeUtf8(bytes.slice(offset + 46, offset + 46 + fileNameLen));

      if (readUInt32(view, localOffset) !== 0x04034b50) throw new Error(`Arquivo .xlsx inválido perto de ${name}.`);
      const lfNameLen = readUInt16(view, localOffset + 26);
      const lfExtraLen = readUInt16(view, localOffset + 28);
      const dataStart = localOffset + 30 + lfNameLen + lfExtraLen;
      const compData = bytes.slice(dataStart, dataStart + compSize);
      let data;
      if (method === 0) data = compData;
      else if (method === 8) data = await inflateRaw(compData);
      else throw new Error(`Método ZIP não suportado no arquivo ${name}.`);
      entries[name] = data;
      offset += 46 + fileNameLen + extraLen + commentLen;
    }
    return entries;
  }

  function parseXml(xmlText) {
    // Algumas planilhas saem com BOM e tags com prefixo de namespace, tipo <x:worksheet>.
    // Esta versão limpa o BOM aqui e o nodesByTag abaixo procura pelo localName também.
    xmlText = String(xmlText || "").replace(/^\uFEFF/, "").trimStart();
    const doc = new DOMParser().parseFromString(xmlText, "application/xml");
    const parserError = doc.querySelector("parsererror");
    if (parserError) throw new Error("XML interno do .xlsx veio quebrado.");
    return doc;
  }

  function resolvePath(baseDir, target) {
    if (!target) return "";
    if (target.startsWith("/")) return target.slice(1);
    const parts = `${baseDir}/${target}`.split("/");
    const out = [];
    for (const p of parts) {
      if (!p || p === ".") continue;
      if (p === "..") out.pop();
      else out.push(p);
    }
    return out.join("/");
  }

  function nodesByTag(node, tag) {
    // Robusto para .xlsx gerado com namespace/prefixo, exemplo: <x:c>, <x:v>, <x:sheet>.
    const direct = Array.from(node.getElementsByTagName(tag));
    const all = Array.from(node.getElementsByTagName("*")).filter(el => {
      const local = el.localName || String(el.nodeName || "").split(":").pop();
      return local === tag;
    });
    if (!direct.length) return all;
    const seen = new Set();
    const out = [];
    for (const el of direct.concat(all)) {
      if (!seen.has(el)) {
        seen.add(el);
        out.push(el);
      }
    }
    return out;
  }

  function parseSharedStrings(entries) {
    const file = entries["xl/sharedStrings.xml"];
    if (!file) return [];
    const doc = parseXml(decodeUtf8(file));
    return nodesByTag(doc, "si").map(si => nodesByTag(si, "t").map(t => t.textContent || "").join(""));
  }

  function parseSheetRows(xmlBytes, sharedStrings) {
    const doc = parseXml(decodeUtf8(xmlBytes));
    const rows = [];
    const cells = nodesByTag(doc, "c");
    for (const c of cells) {
      const ref = c.getAttribute("r") || "A1";
      const [r, col] = parseCellRef(ref);
      const type = c.getAttribute("t");
      let value = "";
      if (type === "inlineStr") {
        value = nodesByTag(c, "t").map(t => t.textContent || "").join("");
      } else {
        const v = nodesByTag(c, "v")[0];
        const raw = v ? (v.textContent || "") : "";
        if (type === "s") value = sharedStrings[Number(raw)] ?? "";
        else if (type === "b") value = raw === "1";
        else if (raw !== "" && !Number.isNaN(Number(raw))) value = Number(raw);
        else value = raw;
      }
      if (!rows[r]) rows[r] = [];
      rows[r][col] = value;
    }
    return rows.map(row => row || []);
  }

  async function parseXlsx(arrayBuffer) {
    const entries = await unzip(arrayBuffer);
    const workbookXml = entries["xl/workbook.xml"];
    const relsXml = entries["xl/_rels/workbook.xml.rels"];
    if (!workbookXml || !relsXml) throw new Error("Não achei workbook.xml dentro do .xlsx.");

    const workbookDoc = parseXml(decodeUtf8(workbookXml));
    const relsDoc = parseXml(decodeUtf8(relsXml));
    const relMap = new Map();
    nodesByTag(relsDoc, "Relationship").forEach(rel => {
      relMap.set(rel.getAttribute("Id"), rel.getAttribute("Target"));
    });

    const sharedStrings = parseSharedStrings(entries);
    const sheets = [];
    nodesByTag(workbookDoc, "sheet").forEach(sheetNode => {
      const name = sheetNode.getAttribute("name") || `Aba ${sheets.length + 1}`;
      const rid = sheetNode.getAttribute("r:id") || sheetNode.getAttribute("id");
      const target = relMap.get(rid);
      const path = resolvePath("xl", target);
      if (entries[path]) {
        sheets.push({ name, rows: parseSheetRows(entries[path], sharedStrings) });
      }
    });
    return sheets;
  }

  function detectDelimiter(text) {
    const candidates = [";", ",", "\t"];
    const lines = text.split(/\r?\n/).filter(l => l.trim()).slice(0, 10);
    let best = ";";
    let bestScore = -1;
    for (const delimiter of candidates) {
      const counts = lines.map(line => (line.match(new RegExp(delimiter === "\t" ? "\t" : `\\${delimiter}`, "g")) || []).length);
      const score = counts.reduce((a, b) => a + b, 0);
      if (score > bestScore) {
        bestScore = score;
        best = delimiter;
      }
    }
    return best;
  }

  function parseCsvText(text, fallbackName) {
    text = String(text || "").replace(/^\uFEFF/, "");
    const delimiter = detectDelimiter(text);
    const rows = [];
    let row = [];
    let cell = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const next = text[i + 1];
      if (ch === '"') {
        if (inQuotes && next === '"') {
          cell += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === delimiter && !inQuotes) {
        row.push(cell);
        cell = "";
      } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
        if (ch === "\r" && next === "\n") i++;
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += ch;
      }
    }
    row.push(cell);
    rows.push(row);
    return [{ name: fallbackName || "CSV", rows }];
  }

  function findHeaderRow(rows) {
    for (let r = 0; r < Math.min(rows.length, 80); r++) {
      const row = rows[r] || [];
      for (let c = 0; c < row.length; c++) {
        const h = norm(row[c]);
        if (h === "NOME" || h === "NOME DO ALUNO" || h.includes("NOME DO ALUNO")) {
          return { rowIndex: r, nameCol: c };
        }
      }
    }
    return null;
  }

  function turmaFromRows(rows, headerRow, sheetName) {
    const sheetTurma = normalizeTurma(sheetName);
    if (/^[6-9]º[12]$/.test(sheetTurma)) return sheetTurma;

    const limit = Math.min(headerRow ?? rows.length, 15);
    for (let r = 0; r < limit; r++) {
      const row = rows[r] || [];
      for (let c = 0; c < row.length; c++) {
        const n = norm(row[c]);
        if (n === "TURMA" || n.startsWith("TURMA ")) {
          const same = normalizeTurma(row[c]);
          if (/^[6-9]º[12]$/.test(same)) return same;
          const next = normalizeTurma(row[c + 1]);
          if (/^[6-9]º[12]$/.test(next)) return next;
        }
      }
    }
    return sheetTurma || "Planilha";
  }

  function shortActivityName(header, colIndex) {
    const raw = String(header ?? "").trim();
    const clean = raw
      .replace(/\((?:\s*\d+(?:[,.]\d+)?\s*(?:pts?|pontos?)\s*)\)/ig, "")
      .replace(/\s+/g, " ")
      .trim();
    return clean || `Coluna ${cellIndexToCol(colIndex)}`;
  }

  function isActivityHeader(header) {
    const raw = String(header ?? "").trim();
    if (!raw) return false;
    const h = norm(raw);
    if (!h) return false;
    if (IGNORE_HEADERS.has(h)) return false;
    if (h.startsWith("NOME ") || h.includes("NOME DO ALUNO")) return false;
    return true;
  }

  function parseGradeCell(value, activityHasSomeValue) {
    if (value === null || value === undefined || String(value).trim() === "") {
      if (!activityHasSomeValue) return null;
      return { nota: 0, naoRealizada: true, origem: "em branco" };
    }
    if (typeof value === "number") return { nota: value };
    const raw = String(value).trim();
    const n = norm(raw);
    if (["NF", "N F", "NAO FEZ", "NAO REALIZADA", "NAO REALIZADO", "AUSENTE", "FALTOU", "FALTA"].includes(n)) {
      return { nota: 0, naoRealizada: true, origem: raw };
    }
    const m = raw.replace(/\./g, "").replace(",", ".").match(/-?\d+(?:\.\d+)?/);
    if (m) return { nota: Number(m[0]) };
    return { nota: 0, naoRealizada: true, origem: raw };
  }

  function extractGradeData(sheets) {
    const output = {};
    const warnings = [];

    for (const sheet of sheets) {
      const rows = sheet.rows || [];
      const headerInfo = findHeaderRow(rows);
      if (!headerInfo) continue;

      const { rowIndex, nameCol } = headerInfo;
      const turma = turmaFromRows(rows, rowIndex, sheet.name);
      const header = rows[rowIndex] || [];
      const dataRows = [];
      let blankRun = 0;
      for (let r = rowIndex + 1; r < rows.length; r++) {
        const row = rows[r] || [];
        const name = String(row[nameCol] ?? "").trim();
        if (!name) {
          blankRun++;
          if (blankRun >= 6) break;
          continue;
        }
        blankRun = 0;
        dataRows.push({ row, name, rowNumber: r + 1 });
      }
      if (!dataRows.length) continue;

      const usedNames = new Set();
      for (let c = 0; c < header.length; c++) {
        if (c === nameCol) continue;
        if (!isActivityHeader(header[c])) continue;

        const rawHeader = String(header[c] ?? "").trim();
        const activityHasSomeValue = dataRows.some(item => {
          const val = item.row[c];
          return val !== null && val !== undefined && String(val).trim() !== "";
        });
        if (!activityHasSomeValue) continue;

        let activity = shortActivityName(rawHeader, c);
        if (!output[turma]) output[turma] = {};
        if (output[turma][activity]) activity = `${activity} · coluna ${cellIndexToCol(c)}`;
        usedNames.add(activity);

        const alunos = [];
        for (const item of dataRows) {
          const parsed = parseGradeCell(item.row[c], true);
          if (!parsed) continue;
          alunos.push({
            nome: item.name,
            nota: parsed.nota,
            naoRealizada: !!parsed.naoRealizada,
            origem: parsed.origem || "",
            linha: item.rowNumber,
            coluna: cellIndexToCol(c)
          });
        }
        output[turma][activity] = { rotulo: rawHeader, alunos };
      }
    }

    Object.keys(output).forEach(turma => {
      if (!Object.keys(output[turma]).length) delete output[turma];
    });

    return { data: output, warnings };
  }

  function xmlSafe(value) {
    return String(value ?? "")
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  function xlsxInlineCell(ref, value, style = 0) {
    if (value === null || value === undefined || value === "") return `<c r="${ref}"${style ? ` s="${style}"` : ""}/>`;
    if (typeof value === "number" && Number.isFinite(value)) {
      return `<c r="${ref}"${style ? ` s="${style}"` : ""}><v>${value}</v></c>`;
    }
    const text = xmlSafe(value);
    const preserve = /^\s|\s$/.test(String(value)) ? ' xml:space="preserve"' : "";
    return `<c r="${ref}" t="inlineStr"${style ? ` s="${style}"` : ""}><is><t${preserve}>${text}</t></is></c>`;
  }

  function sanitizeSheetName(name, used) {
    let base = String(name || "Turma").replace(/[\\\/\?\*\[\]:]/g, " ").replace(/\s+/g, " ").trim();
    if (!base) base = "Turma";
    base = base.slice(0, 31);
    let candidate = base;
    let n = 2;
    while (used.has(candidate.toUpperCase())) {
      const suffix = ` (${n++})`;
      candidate = `${base.slice(0, Math.max(1, 31 - suffix.length))}${suffix}`;
    }
    used.add(candidate.toUpperCase());
    return candidate;
  }

  function cleanDuplicateActivitySuffix(title) {
    return String(title || "")
      .replace(/\s*·\s*coluna\s+[A-Z]+\s*$/i, "")
      .replace(/\s*·\s*\d+\s*$/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function exportGradeValue(row) {
    if (!row) return "";
    if (row.naoRealizada) return "NF";
    if (row.semNota || row.nota === null || row.nota === undefined || row.nota === "") return "";
    const n = Number(row.nota);
    return Number.isFinite(n) && String(row.nota).trim() !== "" ? n : String(row.nota);
  }

  function exportRowIdentity(row) {
    const registro = String(row?.registro || "").replace(/\D/g, "");
    const nome = canonicalName(row?.nome) || normName(row?.nome);
    return { registro, nome };
  }

  function rosterKey(turma) {
    return normalizeTurma(turma);
  }

  function rosterStudentsForTurma(turma) {
    return app.studentRosters?.[rosterKey(turma)]?.students || [];
  }

  function rosterOptionsForTurma(turma) {
    return { includeRemanejados: true, removeInativos: true, ...(app.rosterSettings?.[rosterKey(turma)] || {}) };
  }

  function rosterStudentIndex(students) {
    const byRegistro = new Map();
    const byNome = new Map();
    for (const student of students) {
      const id = exportRowIdentity(student);
      if (id.registro) byRegistro.set(id.registro, student);
      if (id.nome && !byNome.has(id.nome)) byNome.set(id.nome, student);
    }
    return { byRegistro, byNome };
  }

  function matchingRosterStudent(row, index) {
    const id = exportRowIdentity(row);
    const byRegistro = id.registro && index.byRegistro.get(id.registro);
    if (byRegistro) return byRegistro;
    const byNome = id.nome && index.byNome.get(id.nome);
    if (byNome && (!id.registro || !byNome.registro || String(byNome.registro) === id.registro)) return byNome;
    return null;
  }

  function shouldExportRosterStudent(student, options) {
    return !(student.status === "inativo" && options.removeInativos) &&
      !(student.status === "remanejado" && !options.includeRemanejados);
  }

  function rowsByNameForExport(rows) {
    const map = new Map();
    for (const row of rows || []) {
      const id = exportRowIdentity(row);
      if (!id.nome && !id.registro) continue;
      const key = id.nome || `REG:${id.registro}`;
      const prev = map.get(key);
      if (!prev) {
        map.set(key, row);
        continue;
      }
      const prevValue = exportGradeValue(prev);
      const nextValue = exportGradeValue(row);
      // Prefere a linha que realmente tem dado; em empate, a mais nova vence.
      if (nextValue !== "" || prevValue === "") map.set(key, { ...prev, ...row });
      else if (!prev.registro && row.registro) map.set(key, { ...row, ...prev, registro: row.registro });
    }
    return map;
  }

  function activityRowsCompatibleForExport(aRows, bRows) {
    const a = rowsByNameForExport(aRows);
    const b = rowsByNameForExport(bRows);
    if (!a.size || !b.size) return false;
    let common = 0;
    let conflicts = 0;
    for (const [key, ar] of a) {
      const br = b.get(key);
      if (!br) continue;
      common++;
      const av = exportGradeValue(ar);
      const bv = exportGradeValue(br);
      if (av !== "" && bv !== "" && String(av) !== String(bv)) conflicts++;
    }
    const overlap = common / Math.max(1, Math.min(a.size, b.size));
    return common >= 1 && conflicts === 0 && overlap >= 0.6;
  }

  function mergeActivityRowsForExport(baseRows, incomingRows) {
    const map = new Map();
    const order = [];
    const aliasesByRegistro = new Map();
    const aliasesByNome = new Map();

    const add = row => {
      const id = exportRowIdentity(row);
      if (!id.nome && !id.registro) return;
      let key = (id.registro && aliasesByRegistro.get(id.registro)) || (id.nome && aliasesByNome.get(id.nome));
      if (!key) {
        key = id.registro ? `R:${id.registro}` : `N:${id.nome}`;
        if (!map.has(key)) order.push(key);
      }
      const prev = map.get(key) || {};
      const prevValue = exportGradeValue(prev);
      const nextValue = exportGradeValue(row);
      let merged = { ...prev, ...row };
      if (nextValue === "" && prevValue !== "") merged = { ...row, ...prev };
      if (!merged.registro && row.registro) merged.registro = row.registro;
      map.set(key, merged);
      if (id.registro) aliasesByRegistro.set(id.registro, key);
      if (id.nome) aliasesByNome.set(id.nome, key);
    };

    (baseRows || []).forEach(add);
    (incomingRows || []).forEach(add);
    return order.map(key => map.get(key));
  }

  function exportActivitiesForTurmas(sourceTurmas) {
    const defs = [];
    const usedTitles = new Set();

    for (const sourceTurma of sourceTurmas) {
      for (const [activityName, activityData] of Object.entries(app.data?.[sourceTurma] || {})) {
        const title = String(activityName || activityData?.rotulo || "Atividade").trim() || "Atividade";
        const titleNorm = norm(title);
        const baseTitle = cleanDuplicateActivitySuffix(title) || title;
        const baseNorm = norm(baseTitle);
        const rows = activityData?.alunos || [];

        // 1) Mesmo título normalizado = mesma coluna lógica. Mescla e deixa a captura mais recente atualizar.
        let existing = defs.find(d => d.titleNorm === titleNorm);
        if (existing) {
          existing.rows = mergeActivityRowsForExport(existing.rows, rows);
          existing.data = { ...existing.data, ...activityData, alunos: existing.rows };
          continue;
        }

        // 2) Sufixos criados automaticamente pelo leitor (· 2 / · coluna D) só são colapsados
        // quando os valores são compatíveis. Isso limpa duplicatas antigas sem apagar duas atividades reais.
        const generatedSuffix = baseTitle !== title;
        if (generatedSuffix) {
          existing = defs.find(d => d.baseNorm === baseNorm && activityRowsCompatibleForExport(d.rows, rows));
          if (existing) {
            existing.rows = mergeActivityRowsForExport(existing.rows, rows);
            existing.data = { ...existing.data, ...activityData, alunos: existing.rows };
            continue;
          }
        }

        let exportTitle = generatedSuffix ? title : baseTitle;
        let exportNorm = norm(exportTitle);
        if (usedTitles.has(exportNorm)) {
          let n = 2;
          while (usedTitles.has(norm(`${baseTitle} · ${n}`))) n++;
          exportTitle = `${baseTitle} · ${n}`;
          exportNorm = norm(exportTitle);
        }
        usedTitles.add(exportNorm);
        defs.push({
          title: exportTitle,
          titleNorm: exportNorm,
          baseTitle,
          baseNorm,
          rows: [...rows],
          data: activityData || {}
        });
      }
    }
    return defs;
  }

  function exportTurmaGroups() {
    const groups = new Map();
    for (const rawTurma of Object.keys(app.data || {})) {
      if (!Object.keys(app.data?.[rawTurma] || {}).length) continue;
      const normalized = normalizeTurma(rawTurma);
      const isSchoolTurma = /^[6-9]º[12]$/.test(normalized);
      const key = isSchoolTurma ? normalized : (norm(rawTurma) || rawTurma);
      if (!groups.has(key)) groups.set(key, { label: isSchoolTurma ? normalized : rawTurma, sources: [] });
      groups.get(key).sources.push(rawTurma);
    }
    // A lista pode ter sido lida antes de qualquer atividade: exporta também um
    // XLSX só com os alunos, para servir de base a novas notas.
    for (const [turma, roster] of Object.entries(app.studentRosters || {})) {
      if (!roster?.students?.length) continue;
      const key = /^[6-9]º[12]$/.test(turma) ? turma : (norm(turma) || turma);
      if (!groups.has(key)) groups.set(key, { label: turma, sources: [] });
    }
    return [...groups.values()];
  }

  function workbookRowsForTurma(turma, sourceTurmas = [turma]) {
    const activities = exportActivitiesForTurmas(sourceTurmas);
    const roster = rosterStudentsForTurma(turma);
    const rosterIndex = rosterStudentIndex(roster);
    const rosterOptions = rosterOptionsForTurma(turma);
    const studentMap = new Map();
    const byRegistro = new Map();
    const byNome = new Map();
    const order = [];

    const ensureStudent = row => {
      const id = exportRowIdentity(row);
      if (!id.nome && !id.registro) return null;
      let key = id.registro && byRegistro.get(id.registro);
      if (!key && id.nome) {
        const namedKey = byNome.get(id.nome);
        const named = studentMap.get(namedKey);
        if (named && (!id.registro || !named.registro || String(named.registro).replace(/\D/g, "") === id.registro)) {
          key = namedKey;
        }
      }
      if (!key) {
        key = id.registro ? `R:${id.registro}` : `N:${id.nome}`;
        studentMap.set(key, { nome: row.nome || "", registro: row.registro || "", grades: {} });
        order.push(key);
      }
      const student = studentMap.get(key);
      if ((!student.nome || student.nome.length < String(row.nome || "").length) && row.nome) student.nome = row.nome;
      if (!student.registro && row.registro) student.registro = row.registro;
      if (id.registro) byRegistro.set(id.registro, key);
      if (id.nome && !byNome.has(id.nome)) byNome.set(id.nome, key);
      return student;
    };

    for (const activity of activities) {
      for (const row of activity.rows || []) {
        const student = ensureStudent(row);
        if (!student) continue;
        const current = student.grades[activity.title];
        const currentValue = exportGradeValue(current);
        const nextValue = exportGradeValue(row);
        if (!current || nextValue !== "" || currentValue === "") student.grades[activity.title] = row;
      }
    }

    for (const row of roster) {
      if (shouldExportRosterStudent(row, rosterOptions)) ensureStudent(row);
    }

    const rows = [["N", "REGISTRO", "NOME DO ALUNO", ...activities.map(a => a.title), ...(roster.length ? ["SITUAÇÃO DA MATRÍCULA"] : [])]];
    let rowNumber = 0;
    order.forEach(key => {
      const student = studentMap.get(key);
      const entry = matchingRosterStudent(student, rosterIndex);
      if (entry && !shouldExportRosterStudent(entry, rosterOptions)) return;
      // O nome e o registro atuais do DED prevalecem; as notas antigas ficam ligadas ao aluno.
      if (entry) {
        student.nome = entry.nome;
        student.registro = entry.registro || student.registro;
      }
      const values = activities.map(activity => exportGradeValue(student.grades[activity.title]));
      rowNumber++;
      const status = entry ? (entry.status === "remanejado" ? "Remanejado" : entry.status === "inativo" ? "Inativo" : "Ativo") : "Não conferido";
      rows.push([rowNumber, student.registro || "", student.nome, ...values, ...(roster.length ? [status] : [])]);
    });

    return rows;
  }

  function sheetXmlFromRows(rows) {
    const maxCols = Math.max(1, ...rows.map(r => r.length));
    const maxRows = Math.max(1, rows.length);
    const lastCell = `${cellIndexToCol(maxCols - 1)}${maxRows}`;
    const xmlRows = rows.map((row, r) => {
      const cells = [];
      for (let c = 0; c < maxCols; c++) {
        const ref = `${cellIndexToCol(c)}${r + 1}`;
        cells.push(xlsxInlineCell(ref, row[c] ?? "", r === 0 ? 1 : 0));
      }
      return `<row r="${r + 1}">${cells.join("")}</row>`;
    }).join("");

    const activityCols = maxCols > 3 ? `<col min="4" max="${maxCols}" width="18" customWidth="1"/>` : "";
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<dimension ref="A1:${lastCell}"/>
<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
<sheetFormatPr defaultRowHeight="15"/>
<cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="42" customWidth="1"/>${activityCols}</cols>
<sheetData>${xmlRows}</sheetData>
<autoFilter ref="A1:${lastCell}"/>
</worksheet>`;
  }

  function crc32Bytes(bytes) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) {
      crc ^= bytes[i];
      for (let j = 0; j < 8; j++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xEDB88320 : 0);
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  function concatBytes(parts) {
    const total = parts.reduce((sum, p) => sum + p.length, 0);
    const out = new Uint8Array(total);
    let offset = 0;
    for (const part of parts) { out.set(part, offset); offset += part.length; }
    return out;
  }

  function zipStored(entries) {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let offset = 0;
    const now = new Date();
    const dosTime = ((now.getHours() & 31) << 11) | ((now.getMinutes() & 63) << 5) | ((Math.floor(now.getSeconds() / 2)) & 31);
    const dosDate = (((Math.max(1980, now.getFullYear()) - 1980) & 127) << 9) | (((now.getMonth() + 1) & 15) << 5) | (now.getDate() & 31);

    const u16 = value => { const b = new Uint8Array(2); new DataView(b.buffer).setUint16(0, value & 0xFFFF, true); return b; };
    const u32 = value => { const b = new Uint8Array(4); new DataView(b.buffer).setUint32(0, value >>> 0, true); return b; };

    for (const entry of entries) {
      const name = encoder.encode(entry.name);
      const data = entry.data instanceof Uint8Array ? entry.data : encoder.encode(String(entry.data ?? ""));
      const crc = crc32Bytes(data);
      const local = concatBytes([
        u32(0x04034b50), u16(20), u16(0), u16(0), u16(dosTime), u16(dosDate),
        u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), name, data
      ]);
      localParts.push(local);

      const central = concatBytes([
        u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(dosTime), u16(dosDate),
        u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0),
        u16(0), u16(0), u32(0), u32(offset), name
      ]);
      centralParts.push(central);
      offset += local.length;
    }

    const localBytes = concatBytes(localParts);
    const centralBytes = concatBytes(centralParts);
    const eocd = concatBytes([
      u32(0x06054b50), u16(0), u16(0), u16(entries.length), u16(entries.length),
      u32(centralBytes.length), u32(localBytes.length), u16(0)
    ]);
    return concatBytes([localBytes, centralBytes, eocd]);
  }

  function buildGradesWorkbookBlob() {
    const turmaGroups = exportTurmaGroups();
    if (!turmaGroups.length) throw new Error("Não há notas nem lista de alunos para exportar.");

    const usedNames = new Set();
    const sheetDefs = turmaGroups.map((group, i) => ({
      turma: group.label,
      id: i + 1,
      name: sanitizeSheetName(group.label, usedNames),
      rows: workbookRowsForTurma(group.label, group.sources)
    }));

    const workbookSheets = sheetDefs.map(s => `<sheet name="${xmlSafe(s.name)}" sheetId="${s.id}" r:id="rId${s.id}"/>`).join("");
    const workbookRels = sheetDefs.map(s => `<Relationship Id="rId${s.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${s.id}.xml"/>`).join("");
    const styleRid = sheetDefs.length + 1;
    const sheetOverrides = sheetDefs.map(s => `<Override PartName="/xl/worksheets/sheet${s.id}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("");

    const entries = [
      { name: "[Content_Types].xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
${sheetOverrides}
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>` },
      { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>` },
      { name: "xl/workbook.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>${workbookSheets}</sheets>
</workbook>` },
      { name: "xl/_rels/workbook.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${workbookRels}
<Relationship Id="rId${styleRid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>` },
      { name: "xl/styles.xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2"><font><sz val="11"/><name val="Calibri"/><family val="2"/></font><font><b/><sz val="11"/><name val="Calibri"/><family val="2"/></font></fonts>
<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"><alignment wrapText="1" vertical="center"/></xf></cellXfs>
<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>` }
    ];

    sheetDefs.forEach(s => entries.push({ name: `xl/worksheets/sheet${s.id}.xml`, data: sheetXmlFromRows(s.rows) }));
    const bytes = zipStored(entries);
    return new Blob([bytes], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function updatedWorkbookName() {
    const raw = String(app.fileName || "").trim();
    if (!raw || /capturad/i.test(raw)) return "DED_notas_capturadas.xlsx";
    const base = raw.replace(/\.(xlsx|csv)$/i, "").replace(/[^a-z0-9_\- áàâãéêíóôõúçº]/gi, "").trim() || "DED_notas";
    return `${base}_atualizada.xlsx`;
  }

  function exportGradesWorkbook() {
    try {
      const blob = buildGradesWorkbookBlob();
      const filename = updatedWorkbookName();
      downloadBlob(blob, filename);
      logMessage(`✅ Planilha exportada: <b>${esc(filename)}</b>. Ela contém nome do aluno, registro e todas as atividades guardadas no widget.`);
    } catch (err) {
      console.error(err);
      logMessage(`❌ Não consegui exportar a planilha: ${esc(err.message || err)}`);
    }
  }


  function downloadBase64Xlsx(base64, filename) {
    try {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1200);
    } catch (err) {
      console.error(err);
      logMessage(`❌ Não consegui exportar o modelo: ${esc(err.message || err)}`);
    }
  }

  const CALL_IGNORE_HEADERS = new Set([
    "N", "NO", "NUM", "NUMERO", "NOME", "NOME DO ALUNO", "ALUNO", "ESTUDANTE",
    "TOTAL", "TOTAL DE FALTAS", "FALTAS", "OBS", "OBSERVACAO", "OBSERVAÇÃO",
    "OBSERVACOES", "OBSERVAÇÕES", "MES", "MÊS", "ANO", "PROFESSOR", "PROFESSORA", "TURMA"
  ]);

  function isDayHeader(header) {
    const raw = String(header ?? "").trim();
    if (!raw) return false;
    const h = norm(raw);
    if (!h || CALL_IGNORE_HEADERS.has(h)) return false;
    if (/^(0?[1-9]|[12][0-9]|3[01])$/.test(raw)) return true;
    if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[0-2])(?:[\/\-]\d{2,4})?$/.test(raw)) return true;
    if (/^\d{4}[\/\-](0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(raw)) return true;
    return false;
  }

  function dayKeyFromHeader(header, colIndex) {
    const raw = String(header ?? "").trim();
    let day = "";
    const iso = raw.match(/^\d{4}[\/\-](0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12][0-9]|3[01])$/);
    if (iso) day = iso[2];
    const br = raw.match(/^(0?[1-9]|[12][0-9]|3[01])(?:[\/\-](0?[1-9]|1[0-2]))?(?:[\/\-]\d{2,4})?$/);
    if (!day && br) day = br[1];
    const key = day ? String(Number(day)).padStart(2, "0") : `Coluna ${cellIndexToCol(colIndex)}`;
    return { key, label: raw || key };
  }

  function parseCallStatus(value) {
    if (value === null || value === undefined || String(value).trim() === "") return null;
    const raw = String(value).trim();
    const n = norm(raw);
    if (!n) return null;
    if (["F", "FJ", "FALTA", "FALTOU", "AUSENTE", "AUSENCIA", "AUSÊNCIA", "A"].includes(n)) {
      return { status: "F", raw };
    }
    if (n.startsWith("FAL") || n.includes("AUSENT")) return { status: "F", raw };
    if (["P", "PRESENCA", "PRESENÇA", "PRESENTE", "PR"].includes(n)) return { status: "P", raw };
    if (n.startsWith("PRES")) return { status: "P", raw };
    return null;
  }

  function extractCallData(sheets) {
    const output = {};
    const warnings = [];

    for (const sheet of sheets) {
      const rows = sheet.rows || [];
      const headerInfo = findHeaderRow(rows);
      if (!headerInfo) continue;

      const { rowIndex, nameCol } = headerInfo;
      const turma = turmaFromRows(rows, rowIndex, sheet.name);
      const header = rows[rowIndex] || [];
      const dataRows = [];
      let blankRun = 0;

      for (let r = rowIndex + 1; r < rows.length; r++) {
        const row = rows[r] || [];
        const name = String(row[nameCol] ?? "").trim();
        if (!name) {
          blankRun++;
          if (blankRun >= 6) break;
          continue;
        }
        blankRun = 0;
        dataRows.push({ row, name, rowNumber: r + 1 });
      }
      if (!dataRows.length) continue;

      for (let c = 0; c < header.length; c++) {
        if (c === nameCol) continue;
        if (!isDayHeader(header[c])) continue;

        const day = dayKeyFromHeader(header[c], c);
        const alunos = [];
        for (const item of dataRows) {
          const parsed = parseCallStatus(item.row[c]);
          if (!parsed) continue;
          alunos.push({
            nome: item.name,
            status: parsed.status,
            raw: parsed.raw,
            linha: item.rowNumber,
            coluna: cellIndexToCol(c)
          });
        }
        if (!alunos.length) continue;
        if (!output[turma]) output[turma] = {};
        let key = day.key;
        if (output[turma][key]) key = `${day.key} · coluna ${cellIndexToCol(c)}`;
        output[turma][key] = {
          rotulo: day.label,
          alunos,
          faltas: alunos.filter(a => a.status === "F").length,
          presentes: alunos.filter(a => a.status === "P").length
        };
      }
    }

    Object.keys(output).forEach(turma => {
      if (!Object.keys(output[turma]).length) delete output[turma];
    });

    return { data: output, warnings };
  }

  async function parseFile(file) {
    const lower = file.name.toLowerCase();
    if (lower.endsWith(".xlsx")) {
      const buffer = await file.arrayBuffer();
      return parseXlsx(buffer);
    }
    if (lower.endsWith(".csv")) {
      const text = await file.text();
      const base = file.name.replace(/\.[^.]+$/, "");
      return parseCsvText(text, base);
    }
    throw new Error("Formato não suportado. Use .xlsx ou .csv.");
  }

  function prettyGrade(value, input) {
    if (value === null || value === undefined || value === "") return "";
    const n = Number(value);
    const raw = Number.isFinite(n) ? String(n).replace(".", ",") : String(value).replace(".", ",");
    if (input && input.type === "number") return raw.replace(",", ".");
    return raw;
  }

  function nativeSetValue(input, value) {
    const val = String(value);
    const proto = input instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    if (setter) setter.call(input, val);
    else input.value = val;
  }

  function dispatchChange(el) {
    try {
      el.dispatchEvent(new InputEvent("input", { bubbles: true, cancelable: true, inputType: "insertText", data: String(el.value ?? "") }));
    } catch (_) {
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }
    ["change", "blur"].forEach(type => el.dispatchEvent(new Event(type, { bubbles: true })));
  }

  function setInputValue(input, value) {
    input.focus({ preventScroll: true });
    nativeSetValue(input, "");
    dispatchChange(input);
    nativeSetValue(input, prettyGrade(value, input));
    dispatchChange(input);
  }

  function findCard(el) {
    let cur = el;
    for (let i = 0; i < 12 && cur && cur !== document.body; i++, cur = cur.parentElement) {
      const txt = norm(cur.innerText || "");
      const hasNota = txt.includes("NOTA");
      const hasInput = cur.querySelector && cur.querySelector("input");
      if (hasNota && hasInput) return cur;
    }
    return el.closest("div, li, section, article") || el.parentElement;
  }

  function classText(el) {
    const bits = [];
    let cur = el;
    for (let i = 0; i < 3 && cur && cur !== document.body; i++, cur = cur.parentElement) {
      bits.push(cur.className, cur.getAttribute?.("class"), cur.getAttribute?.("aria-label"), cur.getAttribute?.("title"));
    }
    return norm(bits.filter(Boolean).join(" "));
  }

  function rgbKind(value) {
    const m = String(value || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return "";
    const r = Number(m[1]), g = Number(m[2]), b = Number(m[3]);
    if (g >= 95 && g > r + 24 && g > b + 12) return "green";
    if (r >= 130 && r > g + 24 && r > b + 12) return "red";
    return "";
  }

  function visualKind(el) {
    if (!el) return "";
    const values = [];
    let cur = el;
    for (let i = 0; i < 3 && cur && cur !== document.body; i++, cur = cur.parentElement) {
      const st = window.getComputedStyle(cur);
      values.push(st.color, st.backgroundColor, st.borderColor, st.fill, st.stroke);
    }
    for (const v of values) {
      const k = rgbKind(v);
      if (k) return k;
    }
    return "";
  }

  function inferAttendanceState(el) {
    const t = norm(`${controlLabelText(el)} ${classText(el)}`);
    if (/(F|FALTA|FALTOU|AUSENTE)/.test(t) || t.includes("CANCEL") || t.includes("CLOSE") || t.includes("HIGHLIGHT OFF") || t.includes("DO NOT DISTURB")) return "F";
    if (/(P|PRESENTE|PRESENCA|PRESENÇA)/.test(t) || t.includes("CHECK") || t.includes("DONE") || t.includes("VERIFICADO")) return "P";
    const vk = visualKind(el);
    if (vk === "red") return "F";
    if (vk === "green") return "P";
    return "";
  }

  function attendanceTargets(root) {
    if (!root || !root.querySelectorAll) return [];
    const selector = [
      'select',
      'input[type="radio"]',
      'input[type="checkbox"]',
      'button',
      '[role="button"]',
      'label',
      'svg',
      'i',
      'mat-icon',
      '.material-icons',
      '.material-symbols-outlined',
      '.mat-icon',
      '[class*="check" i]',
      '[class*="pres" i]',
      '[class*="falt" i]',
      '[class*="ausen" i]',
      '[class*="freq" i]',
      '[class*="chamada" i]',
      '[class*="status" i]'
    ].join(',');

    const seen = new Set();
    const out = [];
    for (const node of root.querySelectorAll(selector)) {
      if (!visible(node) || node.disabled) continue;
      let target = node.closest?.('button,[role="button"],label,a,[onclick],[tabindex]') || node;
      if (!visible(target) || target.disabled) target = node;
      if (target.closest?.("#dedNotasPanel") || node.closest?.("#dedNotasPanel")) continue;
      if (seen.has(target)) continue;
      const txt = norm(`${controlLabelText(node)} ${classText(node)} ${node.textContent || ""}`);
      const state = inferAttendanceState(node) || inferAttendanceState(target);
      const isRelevant = state || txt.includes("PRES") || txt.includes("FALT") || txt.includes("AUSEN") || txt.includes("CHECK") || txt.includes("DONE") || txt.includes("STATUS") || txt.includes("FREQ") || txt.includes("CHAMADA");
      if (isRelevant) {
        seen.add(target);
        out.push({ node, target, state, rect: target.getBoundingClientRect() });
      }
    }
    return out.sort((a, b) => b.rect.left - a.rect.left);
  }


  function centerY(rect) {
    return rect.top + rect.height / 2;
  }

  function isWidgetElement(el) {
    return !!el?.closest?.("#dedNotasPanel");
  }

  function rowScopedAttendanceTargets(nameEl, card) {
    const nameRect = nameEl?.getBoundingClientRect?.();
    if (!nameRect || !nameRect.width || !nameRect.height) {
      return (card ? attendanceTargets(card) : []).filter(item => !isWidgetElement(item.target) && !isWidgetElement(item.node));
    }

    const y = centerY(nameRect);
    const maxDy = Math.max(28, Math.min(52, nameRect.height * 2.2 + 14));
    const baseTargets = [
      ...(card ? attendanceTargets(card) : []),
      ...attendanceTargets(document.body)
    ].filter(item => !isWidgetElement(item.target) && !isWidgetElement(item.node));

    const seen = new Set();
    const scoped = [];
    for (const item of baseTargets) {
      const target = item.target || item.node;
      if (!target || seen.has(target)) continue;
      const rect = item.rect || target.getBoundingClientRect();
      if (!rect || !rect.width || !rect.height) continue;
      const dy = Math.abs(centerY(rect) - y);
      if (dy > maxDy) continue;

      // Na chamada do DED+, o ícone de presença/falta fica na mesma linha do nome,
      // normalmente mais à direita. Esse filtro impede o script de clicar no primeiro
      // ícone verde da página quando o card detectado fica grande demais.
      const horizontalOk = rect.left >= nameRect.left - 12 || rect.right >= nameRect.right - 8;
      if (!horizontalOk) continue;

      seen.add(target);
      scoped.push({ ...item, target, rect, dy, rightDistance: Math.abs(rect.left - nameRect.right) });
    }

    return scoped.sort((a, b) => (a.dy - b.dy) || (b.rect.left - a.rect.left) || (a.rightDistance - b.rightDistance));
  }

  function findCallCard(el) {
    if (!el) return null;
    const seed = normName(el.innerText || el.textContent || "");
    let best = null;
    let cur = el;

    for (let i = 0; i < 16 && cur && cur !== document.body; i++, cur = cur.parentElement) {
      if (!visible(cur) || isWidgetElement(cur)) continue;
      const rect = cur.getBoundingClientRect();
      const txt = cur.innerText || cur.textContent || "";
      const normalized = normName(txt);
      const containsSeed = !seed || normalized.includes(seed) || seed.includes(normalized);
      const rowLike = rect.width >= 240 && rect.height >= 24 && rect.height <= 165 && txt.length <= 520;
      if (!containsSeed || !rowLike) continue;
      best = cur;
      if (rowScopedAttendanceTargets(el, cur).length) return cur;
    }

    const precise = findAttendanceCard(el);
    if (precise && !isWidgetElement(precise)) {
      const rect = precise.getBoundingClientRect();
      if (rect.height <= 190 && rowScopedAttendanceTargets(el, precise).length) return precise;
    }

    return best || precise || el.closest("div, li, tr, section, article") || el.parentElement;
  }

  function findAttendanceCard(el) {
    const seed = normName(el?.innerText || el?.textContent || "");
    let best = null;
    let cur = el;
    for (let i = 0; i < 14 && cur && cur !== document.body; i++, cur = cur.parentElement) {
      if (!visible(cur)) continue;
      const rect = cur.getBoundingClientRect();
      const txt = cur.innerText || "";
      const normalized = normName(txt);
      const hasSeed = !seed || normalized.includes(seed) || seed.includes(normalized);
      const rowLike = rect.width >= 280 && rect.height >= 28 && rect.height <= 190 && txt.length <= 900;
      const hasTargets = attendanceTargets(cur).length > 0;
      if (hasSeed && rowLike) {
        best = cur;
        if (hasTargets) return cur;
      }
    }
    return best || findCard(el);
  }

  function findGradeInput(card) {
    const inputs = [...card.querySelectorAll("input, textarea")]
      .filter(input => {
        const type = (input.type || "text").toLowerCase();
        return !["checkbox", "radio", "hidden", "button", "submit", "file"].includes(type)
          && !input.disabled
          && !input.readOnly
          && visible(input);
      });
    if (!inputs.length) return null;
    const notaInput = inputs.find(input => {
      const around = norm((input.getAttribute("aria-label") || "") + " " + (input.placeholder || "") + " " + (input.name || "") + " " + (input.id || ""));
      return around.includes("NOTA") && !around.includes("RECUPERACAO");
    });
    return notaInput || inputs[0];
  }

  function findNaoRealizadaCheckbox(card) {
    const checks = [...card.querySelectorAll('input[type="checkbox"]')].filter(visible);
    if (!checks.length) return null;
    const text = norm(card.innerText || "");
    if (!text.includes("NAO REALIZADA")) return null;
    return checks[0];
  }

  function markCard(card, mode = "ok") {
    const color = mode === "ok" ? app.highlightColor : mode === "warn" ? app.warningColor : app.dangerColor;
    card.style.transition = "box-shadow .2s ease, outline .2s ease";
    card.style.outline = `2px solid ${color}`;
    card.style.boxShadow = mode === "ok"
      ? "0 0 0 4px rgba(135,185,87,.22)"
      : mode === "warn"
        ? "0 0 0 4px rgba(255,176,32,.22)"
        : "0 0 0 4px rgba(255,56,96,.18)";
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a) return b.length;
    if (!b) return a.length;
    const prev = new Array(b.length + 1);
    const cur = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) prev[j] = j;
    for (let i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }

  function scoreNames(screenText, sheetName) {
    const a = normName(screenText);
    const b = normName(sheetName);
    if (!a || !b) return 0;
    if (a === b) return 1;
    const ca = canonicalName(a);
    const cb = canonicalName(b);
    if (ca === cb) return 0.995;

    const la = looseName(a);
    const lb = looseName(b);
    if (la === lb) return 0.985;

    if (ca.includes(cb) || cb.includes(ca) || la.includes(lb) || lb.includes(la)) {
      const pairA = ca.includes(cb) || cb.includes(ca) ? [ca, cb] : [la, lb];
      const ratio = Math.min(pairA[0].length, pairA[1].length) / Math.max(pairA[0].length, pairA[1].length);
      if (ratio > 0.72) return 0.94 * ratio + 0.04;
    }

    const dist = levenshtein(ca, cb);
    const strScore = 1 - dist / Math.max(ca.length, cb.length, 1);
    const ta = ca.split(" ").filter(Boolean);
    const tb = cb.split(" ").filter(Boolean);
    const setA = new Set(ta);
    const setB = new Set(tb);
    const common = [...setA].filter(t => setB.has(t)).length;
    const union = new Set([...ta, ...tb]).size || 1;
    const containment = common / Math.max(Math.min(setA.size, setB.size), 1);
    const jaccard = common / union;
    const firstLast = (ta[0] && tb[0] && ta[0] === tb[0] ? 0.5 : 0) +
      (ta.at(-1) && tb.at(-1) && ta.at(-1) === tb.at(-1) ? 0.5 : 0);
    return Math.max(strScore, containment * 0.72 + jaccard * 0.16 + firstLast * 0.12);
  }

  function matchStudent(text, students, threshold, margin) {
    const scored = students.map(row => ({ row, score: scoreNames(text, row.nome) }))
      .sort((a, b) => b.score - a.score);
    const best = scored[0];
    const second = scored[1];
    if (!best || best.score < threshold) return null;
    if (second && second.score >= threshold && best.score - second.score < margin) {
      return { ambiguous: true, best, second };
    }
    return { row: best.row, score: best.score };
  }

  function findTextNodes() {
    const nodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const text = normName(node.nodeValue);
        if (!text || text.length < 5 || text.length > 150) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || !visible(parent)) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "SELECT", "OPTION"].includes(tag)) return NodeFilter.FILTER_REJECT;
        const panel = parent.closest("#dedNotasPanel");
        if (panel) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  function detectTurmaFromPage() {
    const body = pageLinesWithoutWidget().join("\n");
    const patterns = [
      /(6|7|8|9)\s*[º°o]?\s*EF\s*AF\s*REG\s*([12])\b/i,
      /(6|7|8|9)\s*[º°o]?\s*\.?\s*([12])\b/i,
      /TURMA\s*[:\-]?\s*(6|7|8|9)\s*[º°o]?\s*\.?\s*([12])\b/i
    ];
    for (const p of patterns) {
      const m = body.match(p);
      if (m) return `${m[1]}º${m[2]}`;
    }
    return Object.keys(app.data || {})[0] || "";
  }

  function detectActivityFromPage(turma) {
    const body = norm(document.body.innerText || "");
    const activities = Object.keys(app.data?.[turma] || {});
    for (const atv of activities) {
      if (body.includes(norm(atv))) return atv;
      const rotulo = app.data?.[turma]?.[atv]?.rotulo;
      if (rotulo && body.includes(norm(rotulo))) return atv;
    }
    return activities[0] || "";
  }

  function pageLinesWithoutWidget() {
    const panel = document.getElementById("dedNotasPanel");
    const oldDisplay = panel?.style.display;
    if (panel) panel.style.display = "none";
    const lines = (document.body.innerText || "").split(/\r?\n/).map(x => x.trim()).filter(Boolean);
    if (panel) panel.style.display = oldDisplay || "";
    return lines;
  }

  function detectDedActivityMeta() {
    const lines = pageLinesWithoutWidget();
    let title = "";
    let valor = null;
    let dataCadastro = "";
    let divisao = "";
    let tipo = "";

    const valueIndex = lines.findIndex(line => norm(line).includes("VALOR DA ATIVIDADE"));
    if (valueIndex >= 0) {
      const valueLine = lines[valueIndex];
      const m = valueLine.match(/VALOR\s+DA\s+ATIVIDADE\s*:?\s*(-?\d+(?:[.,]\d+)?)/i);
      if (m) valor = parseFlexibleNumber(m[1]);
      for (let i = valueIndex - 1; i >= Math.max(0, valueIndex - 5); i--) {
        const candidate = lines[i].trim();
        const n = norm(candidate);
        if (!candidate || n.includes("AVALIACOES") || n.includes("LANCAR NOTAS") || n.includes("LINGUA INGLESA")) continue;
        title = candidate;
        break;
      }
    }

    for (const line of lines) {
      const n = norm(line);
      if (!dataCadastro && n.startsWith("DATA DE CADASTRO")) dataCadastro = line.split(":").slice(1).join(":").trim();
      if (!divisao && n.startsWith("DIVISAO DA ATIVIDADE")) divisao = line.split(":").slice(1).join(":").trim();
      if (!tipo && n.startsWith("TIPO ")) tipo = line.split(":").slice(1).join(":").trim();
    }

    if (!title) {
      const existing = detectActivityFromPage(detectTurmaFromPage());
      title = existing || `Atividade DED ${new Date().toLocaleDateString("pt-BR")}`;
    }

    return { title: title.replace(/\s+/g, " ").trim(), valor, dataCadastro, divisao, tipo };
  }

  function findStudentGradeCardForRead(input) {
    let best = null;
    let cur = input;
    for (let i = 0; i < 12 && cur && cur !== document.body; i++, cur = cur.parentElement) {
      if (cur.closest?.("#dedNotasPanel")) return null;
      const txt = norm(cur.innerText || cur.textContent || "");
      if (!txt.includes("NOTA")) continue;
      const rect = cur.getBoundingClientRect?.();
      if (!rect || rect.width < 250 || rect.height < 45 || rect.height > 240) continue;
      const looksLikeStudent = txt.includes("NAO REALIZADA") || txt.includes("RECUPERACAO PARALELA") || txt.includes("NOTAS DO ALUNO");
      if (!looksLikeStudent) continue;
      best = cur;
      const controls = [...cur.querySelectorAll("input, textarea")].filter(el => !["checkbox", "radio", "hidden", "button", "submit", "file"].includes((el.type || "text").toLowerCase()));
      if (controls.length >= 1 && controls.length <= 4) return cur;
    }
    return best;
  }

  function findGradeInputForRead(card) {
    const inputs = [...card.querySelectorAll("input, textarea")].filter(input => {
      const type = (input.type || "text").toLowerCase();
      return !["checkbox", "radio", "hidden", "button", "submit", "file"].includes(type) && !input.closest("#dedNotasPanel");
    });
    if (!inputs.length) return null;

    const byLabel = inputs.find(input => {
      const around = controlLabelText(input);
      return around.includes("NOTA") && !around.includes("RECUPERACAO");
    });
    if (byLabel) return byLabel;

    return inputs.slice().sort((a, b) => {
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      return ar.left - br.left || ar.top - br.top;
    })[0];
  }

  function isNaoRealizadaCheckedForRead(card) {
    const nativeChecks = [...card.querySelectorAll('input[type="checkbox"]')];
    const explicit = nativeChecks.find(cb => controlLabelText(cb).includes("NAO REALIZADA"));
    if (explicit) return !!explicit.checked;
    if (norm(card.innerText || "").includes("NAO REALIZADA") && nativeChecks.some(cb => cb.checked)) return true;
    const ariaChecked = [...card.querySelectorAll('[role="checkbox"][aria-checked="true"]')].find(el => controlLabelText(el).includes("NAO REALIZADA"));
    return !!ariaChecked;
  }

  function extractStudentIdentityFromCard(card) {
    const raw = card.innerText || card.textContent || "";
    const registro = raw.match(/\b\d{6,12}\b/)?.[0] || "";
    const forbidden = ["NOTA", "RECUPERACAO", "NAO REALIZADA", "NOTAS DO ALUNO", "SALVAR", "PONTOS"];
    const validName = text => {
      const cleaned = String(text || "").replace(/^\s*\d{6,12}\s*/, "").replace(/\s+/g, " ").trim();
      const n = norm(cleaned);
      if (!cleaned || cleaned.length < 4 || cleaned.length > 140) return "";
      if (forbidden.some(word => n.includes(word))) return "";
      if (!/[A-Za-zÀ-ÿ]/.test(cleaned)) return "";
      const tokens = cleaned.split(/\s+/).filter(Boolean);
      if (tokens.length < 2) return "";
      return cleaned;
    };

    const anchors = [...card.querySelectorAll("a, [role=link]")].map(el => validName(el.textContent)).filter(Boolean);
    if (anchors.length) return { nome: anchors.sort((a, b) => b.length - a.length)[0], registro };

    const lines = raw.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
    for (const line of lines) {
      const candidate = validName(line);
      if (candidate) return { nome: candidate, registro };
    }

    const beforeNota = raw.split(/\bNota\s*:/i)[0];
    const candidate = validName(beforeNota);
    return { nome: candidate, registro };
  }

  function parseDedGradeValue(raw) {
    const text = String(raw ?? "").trim();
    if (!text || text === "-" || text === "—" || text === "–") return null;
    return parseFlexibleNumber(text);
  }


  // Na Visão Geral, só ignoramos colunas estruturais de identificação.
  // Colunas de resumo (TOTAL, NOTA FINAL, MÉDIA, TOTAL DE FALTAS, FREQUÊNCIA,
  // SITUAÇÃO etc.) também fazem parte da captura e vão para a planilha.
  const DED_OVERVIEW_IGNORE_HEADERS = new Set([
    "N", "NO", "NUM", "NUMERO", "NOME", "NOME DO ALUNO", "ALUNO", "ESTUDANTE",
    "MATRICULA", "MATRÍCULA", "REGISTRO", "ID", "CODIGO", "CÓDIGO"
  ].map(norm));

  function parseFlexibleNumber(raw) {
    const text = String(raw ?? "").replace(/\u00a0/g, " ").trim();
    if (!text) return null;
    const token = text.match(/-?\d+(?:[.,]\d+)?/)?.[0];
    if (!token) return null;

    let normalized = token;
    const comma = normalized.lastIndexOf(",");
    const dot = normalized.lastIndexOf(".");
    if (comma >= 0 && dot >= 0) {
      const decimalIsComma = comma > dot;
      if (decimalIsComma) normalized = normalized.replace(/\./g, "").replace(",", ".");
      else normalized = normalized.replace(/,/g, "");
    } else if (comma >= 0) {
      normalized = normalized.replace(",", ".");
    }

    const value = Number(normalized);
    return Number.isFinite(value) ? value : null;
  }

  function parseDedOverviewGrade(raw) {
    const text = String(raw ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
    if (!text || ["-", "—", "–"].includes(text)) {
      return { nota: null, naoRealizada: false, semNota: true };
    }

    const n = norm(text);
    if (["NF", "N F", "NR", "N R", "NAO FEZ", "NAO REALIZADA", "NAO REALIZADO", "AUSENTE", "FALTOU", "FALTA"].includes(n)) {
      return { nota: 0, naoRealizada: true, semNota: false };
    }

    // Notas e totais numéricos ficam como números. Aceita ponto ou vírgula decimal
    // sem transformar, por exemplo, 5.0 em 50.
    const onlyNumber = text.replace(/\s/g, "").match(/^-?\d+(?:[.,]\d+)?$/);
    if (onlyNumber) {
      const nota = parseFlexibleNumber(onlyNumber[0]);
      return nota === null ? null : { nota, naoRealizada: false, semNota: false };
    }

    // Colunas-resumo também podem ter texto (ex.: APROVADO, EM RECUPERAÇÃO, 80%).
    // Preservamos o valor exatamente como aparece para que nenhuma coluna visível seja descartada.
    return { nota: text, naoRealizada: false, semNota: false, texto: true };
  }

  function looksLikeDedOverviewPage() {
    const text = norm(pageLinesWithoutWidget().join(" "));
    return text.includes("VISAO GERAL DA TURMA") ||
      (text.includes("RELATORIO GERAL") && text.includes("TOTAL DE ALUNOS")) ||
      (/\/turma(?:[/?#]|$)/i.test(location.pathname || "") && text.includes("RELATORIO GERAL"));
  }

  function getDedOverviewDivision() {
    const options = [...document.querySelectorAll("select option:checked, select option[selected]")]
      .map(el => String(el.textContent || "").trim())
      .filter(Boolean);
    const selected = options.find(text => /\b(?:TRIMESTRE|BIMESTRE|SEMESTRE)\b/i.test(text));
    if (selected) return selected;

    const lines = pageLinesWithoutWidget();
    return lines.find(line => /\b(?:1|2|3|4)\s*[º°o]?\s*(?:TRIMESTRE|BIMESTRE|SEMESTRE)\b/i.test(line)) || "";
  }

  function rowLikeElements(root) {
    const rows = [...root.querySelectorAll("tr, mat-header-row, mat-row, [role='row']")];
    return rows.filter(row => !row.closest?.("#dedNotasPanel"));
  }

  function expandedRowCells(row) {
    const rawCells = [...row.children].filter(el => {
      const tag = (el.tagName || "").toUpperCase();
      const role = String(el.getAttribute?.("role") || "").toLowerCase();
      return tag === "TD" || tag === "TH" || tag === "MAT-CELL" || tag === "MAT-HEADER-CELL" ||
        role === "cell" || role === "gridcell" || role === "columnheader";
    });

    const cells = rawCells.length ? rawCells : [...row.children].filter(el => String(el.textContent || "").trim());
    const out = [];
    for (const cell of cells) {
      const span = Math.max(1, Math.min(50, Number(cell.getAttribute?.("colspan") || 1) || 1));
      for (let i = 0; i < span; i++) out.push({ cell, text: String(cell.innerText || cell.textContent || "").trim(), continuation: i > 0 });
    }
    return out;
  }

  function overviewIdentityFromRow(row) {
    const raw = String(row.innerText || row.textContent || "");
    const registro = raw.match(/\b\d{6,12}\b/)?.[0] || "";
    if (!registro) return { nome: "", registro: "" };

    const validName = text => {
      const cleaned = String(text || "")
        .replace(/\b(?:REMANEJAD[OA]S?|TRANSFERID[OA]S?|INATIV[OA]S?|ATIV[OA]S?)\b/ig, " ")
        .replace(/\b\d{6,12}\b/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const n = norm(cleaned);
      if (!cleaned || cleaned.length < 5 || cleaned.length > 140) return "";
      if (DED_OVERVIEW_IGNORE_HEADERS.has(n)) return "";
      if (!/[A-Za-zÀ-ÿ]/.test(cleaned)) return "";
      const words = cleaned.split(/\s+/).filter(w => /[A-Za-zÀ-ÿ]/.test(w));
      if (words.length < 2) return "";
      return cleaned;
    };

    const anchors = [...row.querySelectorAll("a, [role='link']")]
      .map(el => validName(el.textContent))
      .filter(Boolean)
      .sort((a, b) => b.length - a.length);
    if (anchors.length) return { nome: anchors[0], registro };

    for (const cell of expandedRowCells(row)) {
      const lines = String(cell.text || "").split(/\r?\n/).map(x => x.trim()).filter(Boolean);
      for (const line of lines) {
        const candidate = validName(line);
        if (candidate) return { nome: candidate, registro };
      }
    }
    return { nome: "", registro };
  }

  function selectDedOverviewGrid() {
    const roots = [...document.querySelectorAll("table, mat-table, [role='table'], [role='grid']")]
      .filter(root => !root.closest?.("#dedNotasPanel"));

    let best = null;
    for (const root of roots) {
      const rows = rowLikeElements(root);
      let students = 0;
      let numericCells = 0;
      for (const row of rows) {
        const identity = overviewIdentityFromRow(row);
        if (!identity.nome || !identity.registro) continue;
        students++;
        numericCells += expandedRowCells(row).filter(item => { const parsed = parseDedOverviewGrade(item.text); return parsed && !parsed.semNota; }).length;
      }
      const score = students * 100 + numericCells;
      if (students >= 1 && (!best || score > best.score)) best = { root, rows, students, score };
    }
    return best;
  }

  function rosterStatusFromRow(row) {
    const text = norm(row.innerText || row.textContent || "");
    if (/\bINATIV[OA]S?\b/.test(text)) return "inativo";
    if (/\bREMANEJAD[OA]S?\b/.test(text)) return "remanejado";
    return "ativo";
  }

  function readCurrentDedRoster() {
    if (!looksLikeDedOverviewPage()) {
      throw new Error("Abra a Visão Geral da Turma no DED+ para ler a relação de alunos.");
    }
    const grid = selectDedOverviewGrid();
    if (!grid) throw new Error("Não localizei a tabela de alunos. Aguarde o carregamento da turma.");

    const unique = new Map();
    for (const row of grid.rows) {
      const identity = overviewIdentityFromRow(row);
      if (!identity.nome || !identity.registro) continue;
      const student = { ...identity, status: rosterStatusFromRow(row) };
      // Alguns grids duplicam a linha fixa; preserva a que possui um marcador de situação.
      const previous = unique.get(identity.registro);
      if (!previous || (previous.status === "ativo" && student.status !== "ativo")) {
        unique.set(identity.registro, student);
      }
    }
    if (!unique.size) throw new Error("Não consegui identificar nomes e registros na tabela do DED+.");

    const turma = detectTurmaFromPage();
    if (!/^[6-9]º[12]$/.test(rosterKey(turma))) {
      throw new Error("Não consegui identificar a turma no cabeçalho do DED+. Não apliquei mudanças.");
    }
    const text = pageLinesWithoutWidget().join("\n");
    const expectedStudents = Number(text.match(/TOTAL\s+DE\s+ALUNOS\s*:?\s*(\d+)/i)?.[1] || 0) || null;
    return { turma: rosterKey(turma), students: [...unique.values()], expectedStudents };
  }

  function mergeRosterStudents(previous, incoming) {
    const students = new Map();
    for (const row of [...(previous || []), ...(incoming || [])]) {
      const id = exportRowIdentity(row);
      if (!id.registro) continue;
      students.set(id.registro, { nome: row.nome, registro: id.registro, status: row.status || "ativo" });
    }
    return [...students.values()].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }

  function existingGradeStudents(turma) {
    const byRegistro = new Map();
    const byNome = new Map();
    for (const [sourceTurma, activities] of Object.entries(app.data || {})) {
      if (rosterKey(sourceTurma) !== rosterKey(turma)) continue;
      for (const activity of Object.values(activities || {})) {
        for (const row of activity.alunos || []) {
          const id = exportRowIdentity(row);
          if (id.registro && !byRegistro.has(id.registro)) byRegistro.set(id.registro, row);
          if (id.nome && !byNome.has(id.nome)) byNome.set(id.nome, row);
        }
      }
    }
    return { byRegistro, byNome };
  }

  let pendingRosterUpdate = null;

  function rosterListHtml(label, items, color) {
    if (!items.length) return "";
    return `<details style="margin-top:7px;">
      <summary style="cursor:pointer;color:${color};font-weight:800;">${esc(label)}: ${items.length}</summary>
      <div style="max-height:130px;overflow:auto;padding:6px 0 0 12px;line-height:1.6;">${items.map(s => esc(s.nome)).join("<br>")}</div>
    </details>`;
  }

  function readStudentsForSheet() {
    try {
      const capture = readCurrentDedRoster();
      const settings = {
        includeRemanejados: !!document.getElementById("dedRosterIncludeMoved")?.checked,
        removeInativos: !!document.getElementById("dedRosterRemoveInactive")?.checked
      };
      const students = mergeRosterStudents(rosterStudentsForTurma(capture.turma), capture.students);
      const existing = existingGradeStudents(capture.turma);
      const index = rosterStudentIndex(students);
      const additions = students.filter(row => shouldExportRosterStudent(row, settings) && !matchingRosterStudent(row, existing));
      const removedIds = new Set();
      const removals = [...existing.byRegistro.values(), ...existing.byNome.values()].filter(row => {
        const matching = matchingRosterStudent(row, index);
        if (!matching || shouldExportRosterStudent(matching, settings)) return false;
        const key = exportRowIdentity(matching).registro || canonicalName(matching.nome);
        if (removedIds.has(key)) return false;
        removedIds.add(key);
        return true;
      });
      const remanejados = students.filter(row => row.status === "remanejado");
      const inativos = students.filter(row => row.status === "inativo");
      pendingRosterUpdate = { turma: capture.turma, students, settings };
      const preview = document.getElementById("dedRosterPreview");
      if (!preview) return;
      preview.style.display = "block";
      const warning = capture.expectedStudents && capture.students.length < capture.expectedStudents
        ? `<div style="color:#9e6316;margin-top:7px;">⚠️ Apenas ${capture.students.length} linha(s) carregadas de ${capture.expectedStudents} alunos informados no DED+. Role a lista e faça outras leituras: nenhuma pessoa ausente da tela será excluída automaticamente.</div>`
        : "";
      preview.innerHTML = `
        <div style="font-weight:900;color:#5b2b66;">Prévia da turma ${esc(capture.turma)}</div>
        <div style="margin-top:5px;">${capture.students.length} aluno(s) lidos agora; ${students.length} identificados no acumulado. <b>${additions.length} inclusão(ões)</b> e <b>${removals.length} retirada(s)</b> previstas na planilha de notas.</div>
        ${rosterListHtml("Novos na planilha", additions, "#286d43")}
        ${rosterListHtml("Remanejados identificados", remanejados, "#3978a0")}
        ${rosterListHtml("Inativos identificados", inativos, "#a74354")}
        ${rosterListHtml("Retiradas efetivas", removals, "#a74354")}
        ${warning}
        <div style="color:#6a5970;margin-top:7px;">Somente alunos marcados no DED+ como inativos serão retirados, se a opção estiver ativa. Notas existentes são preservadas; a lista não apaga registros por estarem fora da área carregada.</div>
        <div style="display:flex;gap:8px;margin-top:9px;">
          <button id="dedRosterApply" style="flex:1;border:0;border-radius:10px;background:#5f8f4e;color:#fff;padding:9px;font-weight:900;cursor:pointer;">Aplicar atualização</button>
          <button id="dedRosterCancel" style="border:1px solid #cbb0d3;border-radius:10px;background:#fff;color:#70417b;padding:9px;font-weight:800;cursor:pointer;">Cancelar</button>
        </div>`;
      preview.querySelector("#dedRosterApply").addEventListener("click", applyStudentRosterUpdate);
      preview.querySelector("#dedRosterCancel").addEventListener("click", () => {
        pendingRosterUpdate = null;
        preview.style.display = "none";
      });
      logMessage(`👥 Lista da turma <b>${esc(capture.turma)}</b> lida. Confira a prévia e clique em <b>Aplicar atualização</b>.`);
    } catch (err) {
      pendingRosterUpdate = null;
      console.error(err);
      logMessage(`❌ ${esc(err.message || err)}`);
    }
  }

  function applyStudentRosterUpdate() {
    if (!pendingRosterUpdate) return;
    const { turma, students, settings } = pendingRosterUpdate;
    if (settings.removeInativos && students.some(row => row.status === "inativo")) {
      const proceed = window.confirm("Aplicar a lista de " + turma + "? Os inativos identificados ficarão fora do próximo XLSX. As notas guardadas no widget não serão apagadas.");
      if (!proceed) return;
    }
    app.studentRosters[turma] = { students, updatedAt: new Date().toISOString() };
    app.rosterSettings[turma] = settings;
    pendingRosterUpdate = null;
    saveData();
    refreshPanelData();
    const preview = document.getElementById("dedRosterPreview");
    if (preview) preview.style.display = "none";
    const exported = students.filter(row => shouldExportRosterStudent(row, settings)).length;
    logMessage(`✅ Alunos de <b>${esc(turma)}</b> atualizados. ${exported} aluno(s) da lista serão considerados no XLSX; notas existentes permanecem guardadas. Clique em <b>Baixar planilha atualizada</b>.`);
  }

  function resetStudentRoster() {
    const turma = rosterKey(detectTurmaFromPage());
    if (!rosterStudentsForTurma(turma).length) {
      return logMessage("Esta turma ainda não tem lista de alunos salva.");
    }
    if (!window.confirm(`Reiniciar a leitura de alunos da turma ${turma}? A lista de conferência será removida, mas as notas e chamadas ficam intactas.`)) return;
    delete app.studentRosters[turma];
    delete app.rosterSettings[turma];
    pendingRosterUpdate = null;
    const preview = document.getElementById("dedRosterPreview");
    if (preview) preview.style.display = "none";
    saveData();
    refreshPanelData();
    logMessage(`Lista da turma <b>${esc(turma)}</b> reiniciada. Agora leia novamente os alunos no DED+.`);
  }

  function cleanOverviewActivityTitle(text) {
    let raw = String(text || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
    if (!raw) return "";
    raw = raw
      .replace(/\s+[-–—]?\s*(?:\d+[.,]\d+|\d+\s*(?:PONTOS?|PTS?))\s*$/i, "")
      .replace(/^VALOR\s*:?\s*/i, "")
      .trim();
    const n = norm(raw);
    if (!n || DED_OVERVIEW_IGNORE_HEADERS.has(n)) return "";
    if (n.includes("NOME DO ALUNO") || n === "ALUNO" || n === "ESTUDANTE") return "";
    return raw;
  }

  function overviewHeaderForColumn(headerRows, colIndex) {
    const pieces = [];
    for (const row of headerRows) {
      const cells = expandedRowCells(row);
      const text = String(cells[colIndex]?.text || "").trim();
      if (text && !pieces.includes(text)) pieces.push(text);
    }

    const joined = pieces.join(" ");
    const numbers = [...joined.matchAll(/-?\d+(?:[.,]\d+)?/g)].map(m => parseFlexibleNumber(m[0])).filter(Number.isFinite);
    const valor = numbers.length ? numbers[numbers.length - 1] : null;

    let title = "";
    for (const piece of pieces) {
      const candidate = cleanOverviewActivityTitle(piece);
      if (!candidate) continue;
      // Uma linha que seja só a pontuação máxima não é título.
      if (/^-?\d+(?:[.,]\d+)?\s*(?:PONTOS?|PTS?)?$/i.test(candidate)) continue;
      title = candidate;
      break;
    }

    return { title, valor, raw: joined };
  }

  function fallbackOverviewTitleFromCellHeader(root, cellIndex, studentCells) {
    const sample = studentCells[cellIndex]?.cell;
    if (!sample?.getBoundingClientRect) return { title: "", valor: null };
    const sampleRect = sample.getBoundingClientRect();
    const headerCandidates = [...root.querySelectorAll("th, mat-header-cell, [role='columnheader']")]
      .filter(el => !el.closest?.("#dedNotasPanel"))
      .map(el => ({ el, rect: el.getBoundingClientRect() }))
      .filter(item => item.rect.width > 0)
      .sort((a, b) => Math.abs((a.rect.left + a.rect.width / 2) - (sampleRect.left + sampleRect.width / 2)) -
        Math.abs((b.rect.left + b.rect.width / 2) - (sampleRect.left + sampleRect.width / 2)));
    const text = String(headerCandidates[0]?.el?.innerText || headerCandidates[0]?.el?.textContent || "").trim();
    return { title: cleanOverviewActivityTitle(text), valor: parseFlexibleNumber(text) };
  }

  function readCurrentDedOverview() {
    const grid = selectDedOverviewGrid();
    if (!grid) throw new Error("Não encontrei a tabela de notas da Visão Geral da Turma.");

    const rowInfos = grid.rows.map((row, index) => ({ row, index, identity: overviewIdentityFromRow(row), cells: expandedRowCells(row) }));
    const rawStudents = rowInfos.filter(info => info.identity.nome && info.identity.registro);
    const uniqueStudents = new Map();
    for (const info of rawStudents) {
      const key = info.identity.registro || canonicalName(info.identity.nome) || normName(info.identity.nome);
      const prev = uniqueStudents.get(key);
      const filled = info.cells.filter(cell => String(cell.text || "").trim() !== "").length;
      const prevFilled = prev ? prev.cells.filter(cell => String(cell.text || "").trim() !== "").length : -1;
      if (!prev || filled > prevFilled) uniqueStudents.set(key, info);
    }
    const students = [...uniqueStudents.values()];
    if (!students.length) throw new Error("Achei a tabela, mas não consegui identificar os alunos e registros.");

    const firstStudentIndex = Math.min(...students.map(s => s.index));
    const headerRows = grid.rows.slice(0, firstStudentIndex);
    const maxCols = Math.max(...students.map(s => s.cells.length));
    const identityCols = new Set();
    for (const student of students) {
      student.cells.forEach((item, idx) => {
        const t = norm(item.text);
        if (t.includes(norm(student.identity.nome)) || t.includes(student.identity.registro)) identityCols.add(idx);
      });
    }

    const activities = [];
    const usedTitles = new Map();
    const seenColumnSignatures = new Set();
    for (let col = 0; col < maxCols; col++) {
      if (identityCols.has(col)) continue;
      const parsedByStudent = students.map(student => parseDedOverviewGrade(student.cells[col]?.text ?? ""));
      const meaningful = parsedByStudent.filter(parsed => parsed && !parsed.semNota);
      if (!meaningful.length) continue;

      let header = overviewHeaderForColumn(headerRows, col);
      if (!header.title) header = { ...header, ...fallbackOverviewTitleFromCellHeader(grid.root, col, students[0].cells) };
      if (!header.title) continue;
      const headerNorm = norm(header.title);
      if (DED_OVERVIEW_IGNORE_HEADERS.has(headerNorm)) continue;

      // O DED+ pode manter clones/sticky columns no DOM. Se cabeçalho + valores forem iguais,
      // é a mesma coluna visual e não deve virar uma atividade duplicada no XLSX.
      const valueSignature = parsedByStudent.map((parsed, idx) => {
        const p = parsed || { nota: null, naoRealizada: false, semNota: true };
        const value = p.naoRealizada ? "NF" : (p.semNota ? "" : String(p.nota ?? ""));
        return `${students[idx].identity.registro}:${value}`;
      }).join("|");
      const duplicateSignature = `${headerNorm}||${valueSignature}`;
      if (seenColumnSignatures.has(duplicateSignature)) continue;
      seenColumnSignatures.add(duplicateSignature);

      let title = header.title;
      const seen = (usedTitles.get(headerNorm) || 0) + 1;
      usedTitles.set(headerNorm, seen);
      if (seen > 1) title = `${title} · ${seen}`;

      const alunos = students.map((student, idx) => {
        const parsed = parsedByStudent[idx] || { nota: null, naoRealizada: false, semNota: true };
        return {
          nome: student.identity.nome,
          registro: student.identity.registro,
          nota: parsed.nota,
          naoRealizada: !!parsed.naoRealizada,
          semNota: !!parsed.semNota,
          origem: "DED+ Visão Geral"
        };
      });

      activities.push({ title, valor: header.valor, alunos });
    }

    if (!activities.length) {
      throw new Error("Encontrei os alunos, mas não consegui relacionar as colunas de notas aos nomes das atividades.");
    }

    const totalText = String(document.body?.innerText || "");
    const expectedStudents = Number(totalText.match(/TOTAL\s+DE\s+ALUNOS\s*:?\s*(\d+)/i)?.[1] || 0) || null;

    return {
      turma: detectTurmaFromPage() || "Turma DED",
      divisao: getDedOverviewDivision(),
      alunosCount: students.length,
      expectedStudents,
      atividades: activities
    };
  }

  function mergeCapturedRowsIntoActivity(turma, activityTitle, meta, rows) {
    if (!app.data) app.data = {};
    if (!app.data[turma]) app.data[turma] = {};

    const current = app.data[turma][activityTitle] || { rotulo: activityTitle, alunos: [] };
    const merged = new Map();
    const order = [];
    for (const row of current.alunos || []) {
      const key = canonicalName(row.nome) || normName(row.nome);
      if (!key || merged.has(key)) continue;
      merged.set(key, { ...row });
      order.push(key);
    }
    for (const row of rows || []) {
      const key = canonicalName(row.nome) || normName(row.nome);
      if (!key) continue;
      if (!merged.has(key)) order.push(key);
      merged.set(key, { ...(merged.get(key) || {}), ...row });
    }

    app.data[turma][activityTitle] = {
      ...current,
      ...meta,
      rotulo: activityTitle,
      origem: meta?.origem || "DED+",
      alunos: order.map(key => merged.get(key))
    };
  }

  function mergeCapturedDedOverview(capture) {
    for (const activity of capture.atividades) {
      mergeCapturedRowsIntoActivity(capture.turma, activity.title, {
        valor: activity.valor,
        divisao: capture.divisao,
        origem: "DED+ Visão Geral"
      }, activity.alunos);
    }
    if (!app.fileName) app.fileName = "DED_notas_capturadas.xlsx";
    saveData();
    refreshPanelData();

    const turmaSelect = document.getElementById("dedNotasTurma");
    if (turmaSelect && [...turmaSelect.options].some(o => o.value === capture.turma)) {
      turmaSelect.value = capture.turma;
      refreshActivities();
    }
  }

  function captureCurrentDedPageToSheet() {
    try {
      if (looksLikeDedOverviewPage()) {
        const capture = readCurrentDedOverview();
        mergeCapturedDedOverview(capture);
        const gradeCells = capture.atividades.reduce((sum, activity) => sum + activity.alunos.filter(a => !a.semNota && !a.naoRealizada).length, 0);
        const nf = capture.atividades.reduce((sum, activity) => sum + activity.alunos.filter(a => a.naoRealizada).length, 0);
        const blanks = capture.atividades.reduce((sum, activity) => sum + activity.alunos.filter(a => a.semNota).length, 0);
        const divisao = capture.divisao ? ` · ${esc(capture.divisao)}` : "";
        const incomplete = capture.expectedStudents && capture.alunosCount < capture.expectedStudents
          ? `<br>⚠️ A página informa <b>${capture.expectedStudents}</b> alunos, mas ${capture.alunosCount} estão carregados no DOM agora. Se a tabela carregar alunos conforme a rolagem, role a lista e clique novamente; o widget acumula/atualiza os alunos sem apagar os já capturados.`
          : "";
        logMessage(`✅ <b>Visão Geral da Turma</b> (${esc(capture.turma)}) lida${divisao}.<br><b>${capture.alunosCount}</b> aluno(s) e <b>${capture.atividades.length}</b> atividade(s) capturadas de uma vez.<br>${gradeCells} valor(es) preenchido(s), ${nf} NF/ausência(s), ${blanks} célula(s) vazia(s).${incomplete}<br>Clique em <b>Baixar planilha atualizada</b> para salvar o .xlsx.`);
        return;
      }

      const capture = readCurrentDedActivity();
      mergeCapturedDedActivity(capture);
      const grades = capture.alunos.filter(a => !a.semNota && !a.naoRealizada).length;
      const nf = capture.alunos.filter(a => a.naoRealizada).length;
      const blanks = capture.alunos.filter(a => a.semNota).length;
      const valor = Number.isFinite(capture.meta.valor) ? ` · valor ${capture.meta.valor}` : "";
      logMessage(`✅ <b>${esc(capture.atividade)}</b> (${esc(capture.turma)}) lida do DED+${valor}.<br><b>${capture.alunos.length}</b> aluno(s): ${grades} nota(s), ${nf} não realizada(s), ${blanks} sem nota.<br>A atividade foi guardada na planilha do widget. Clique em <b>Baixar planilha atualizada</b> para salvar o .xlsx.`);
    } catch (err) {
      console.error(err);
      logMessage(`❌ ${esc(err.message || err)}`);
    }
  }


  function readCurrentDedActivity() {
    const turma = detectTurmaFromPage() || "Turma DED";
    const meta = detectDedActivityMeta();
    const cards = [];
    const seenCards = new Set();

    for (const input of document.querySelectorAll("input, textarea")) {
      if (input.closest?.("#dedNotasPanel")) continue;
      const type = (input.type || "text").toLowerCase();
      if (["checkbox", "radio", "hidden", "button", "submit", "file"].includes(type)) continue;
      const card = findStudentGradeCardForRead(input);
      if (!card || seenCards.has(card)) continue;
      seenCards.add(card);
      cards.push(card);
    }

    const alunos = [];
    const seenStudents = new Set();
    for (const card of cards) {
      const identity = extractStudentIdentityFromCard(card);
      if (!identity.nome) continue;
      const key = canonicalName(identity.nome) || normName(identity.nome);
      if (!key || seenStudents.has(key)) continue;
      seenStudents.add(key);

      const input = findGradeInputForRead(card);
      const naoRealizada = isNaoRealizadaCheckedForRead(card);
      const nota = naoRealizada ? 0 : parseDedGradeValue(input?.value ?? input?.getAttribute?.("value") ?? "");
      alunos.push({
        nome: identity.nome,
        registro: identity.registro,
        nota,
        naoRealizada,
        semNota: !naoRealizada && nota === null,
        origem: "DED+"
      });
    }

    return { turma, atividade: meta.title, meta, alunos };
  }

  function mergeCapturedDedActivity(capture) {
    if (!capture.alunos.length) throw new Error("Não encontrei cartões de alunos com o campo Nota nessa tela do DED+.");
    if (!app.data) app.data = {};
    if (!app.data[capture.turma]) app.data[capture.turma] = {};

    const current = app.data[capture.turma][capture.atividade] || { rotulo: capture.atividade, alunos: [] };
    const merged = new Map();
    const order = [];
    for (const row of current.alunos || []) {
      const key = canonicalName(row.nome) || normName(row.nome);
      if (!key || merged.has(key)) continue;
      merged.set(key, { ...row });
      order.push(key);
    }
    for (const row of capture.alunos) {
      const key = canonicalName(row.nome) || normName(row.nome);
      if (!key) continue;
      if (!merged.has(key)) order.push(key);
      merged.set(key, { ...(merged.get(key) || {}), ...row });
    }

    app.data[capture.turma][capture.atividade] = {
      ...current,
      rotulo: capture.atividade,
      valor: capture.meta.valor,
      dataCadastro: capture.meta.dataCadastro,
      divisao: capture.meta.divisao,
      tipo: capture.meta.tipo,
      origem: "DED+",
      alunos: order.map(key => merged.get(key))
    };
    if (!app.fileName) app.fileName = "DED_notas_capturadas.xlsx";
    saveData();
    refreshPanelData();

    const turmaSelect = document.getElementById("dedNotasTurma");
    const atvSelect = document.getElementById("dedNotasAtv");
    if (turmaSelect && [...turmaSelect.options].some(o => o.value === capture.turma)) {
      turmaSelect.value = capture.turma;
      refreshActivities();
      if (atvSelect && [...atvSelect.options].some(o => o.value === capture.atividade)) atvSelect.value = capture.atividade;
    }
  }


  function getSelectedOptions() {
    const turma = document.getElementById("dedNotasTurma")?.value || detectTurmaFromPage();
    const atividade = document.getElementById("dedNotasAtv")?.value || detectActivityFromPage(turma);
    const markZeros = !!document.getElementById("dedNotasZeros")?.checked;
    const threshold = Number(document.getElementById("dedNotasThreshold")?.value || 88) / 100;
    return { turma, atividade, markZeros, threshold, margin: 0.035 };
  }

  function fillOnce(options, dryRun = false) {
    const turma = options.turma;
    const atividade = options.atividade;
    const students = app.data?.[turma]?.[atividade]?.alunos || [];
    const foundSheetRows = new Set();
    const usedCards = new WeakSet();
    const usedNames = new Set();
    const report = {
      turma,
      atividade,
      preenchidos: [],
      zeroMarcado: [],
      semInput: [],
      duplicadosTela: [],
      ambiguos: [],
      naoEncontradosNaTela: [],
      encontrados: [],
      dryRun
    };

    if (!students.length) return report;

    const nodes = findTextNodes();
    for (const node of nodes) {
      const match = matchStudent(node.nodeValue, students, options.threshold, options.margin);
      if (!match) continue;

      const el = node.parentElement;
      const card = findAttendanceCard(el);
      if (!card) continue;

      if (match.ambiguous) {
        report.ambiguos.push(`${normName(node.nodeValue)} → ${match.best.row.nome} (${Math.round(match.best.score * 100)}%) / ${match.second.row.nome} (${Math.round(match.second.score * 100)}%)`);
        markCard(card, "warn");
        continue;
      }

      const row = match.row;
      const rowId = `${canonicalName(row.nome)}|${row.linha || ""}|${row.coluna || ""}`;
      if (usedCards.has(card) || usedNames.has(rowId)) {
        report.duplicadosTela.push(row.nome);
        continue;
      }
      usedCards.add(card);
      usedNames.add(rowId);
      foundSheetRows.add(rowId);
      report.encontrados.push(`${row.nome} · ${Math.round(match.score * 100)}%`);

      const input = findGradeInput(card);
      if (!input) {
        report.semInput.push(row.nome);
        markCard(card, "bad");
        continue;
      }

      if (row.semNota || row.nota === null || row.nota === undefined || row.nota === "") {
        report.semInput.push(`${row.nome} (sem nota na planilha)`);
        markCard(card, "warn");
        continue;
      }

      if (!dryRun) {
        setInputValue(input, row.nota);
        if (options.markZeros && (Number(row.nota) === 0 || row.naoRealizada)) {
          const cb = findNaoRealizadaCheckbox(card);
          if (cb && !cb.checked) {
            cb.click();
            dispatchChange(cb);
            report.zeroMarcado.push(row.nome);
          }
        }
      }
      markCard(card, "ok");
      const origem = row.origem ? ` (${row.origem})` : "";
      report.preenchidos.push(`${row.nome} → ${prettyGrade(row.nota, input)}${origem}`);
    }

    students.forEach(row => {
      const rowId = `${canonicalName(row.nome)}|${row.linha || ""}|${row.coluna || ""}`;
      if (!foundSheetRows.has(rowId)) report.naoEncontradosNaTela.push(row.nome);
    });
    return report;
  }

  function mergeReports(target, source) {
    for (const [k, v] of Object.entries(source)) {
      if (Array.isArray(v)) {
        if (!target[k]) target[k] = [];
        target[k].push(...v);
      } else if (!(k in target)) target[k] = v;
    }
    return target;
  }

  function dedupe(arr) {
    return [...new Set((arr || []).filter(Boolean))];
  }

  function renderLog(report) {
    const box = document.getElementById("dedNotasLog");
    if (!box) return;
    const p = dedupe(report.preenchidos || []);
    const z = dedupe(report.zeroMarcado || []);
    const s = dedupe(report.semInput || []);
    const d = dedupe(report.duplicadosTela || []);
    const a = dedupe(report.ambiguos || []);
    const e = dedupe(report.encontrados || []);
    const missing = dedupe(report.naoEncontradosNaTela || []);
    const title = report.dryRun ? "🔎 Conferência da tela" : "✅ Resultado";

    box.innerHTML = `
      <div style="font-weight:900; color:#5b2b66; margin-bottom:6px;">${title}</div>
      <div><b>${report.dryRun ? "Encontrados" : "Preenchidos"}:</b> ${report.dryRun ? e.length : p.length}</div>
      ${z.length ? `<div><b>☑️ 0/NF/em branco como Não realizada:</b> ${z.length}</div>` : ""}
      ${s.length ? `<div><b>⚠️ Sem input encontrado:</b><br>${s.slice(0, 12).map(esc).join("<br>")}</div>` : ""}
      ${d.length ? `<div><b>⚠️ Duplicados ignorados:</b><br>${d.slice(0, 12).map(esc).join("<br>")}</div>` : ""}
      ${a.length ? `<div><b>🟡 Ambíguos, não mexi:</b><br>${a.slice(0, 12).map(esc).join("<br>")}</div>` : ""}
      <details style="margin-top:8px;" ${p.length && p.length < 12 ? "open" : ""}>
        <summary>${report.dryRun ? "Ver encontrados" : "Ver notas preenchidas"}</summary>
        <div style="max-height:170px; overflow:auto; margin-top:6px;">${(report.dryRun ? e : p).map(esc).join("<br>") || "Nada ainda."}</div>
      </details>
      <details style="margin-top:8px;">
        <summary>Na planilha, mas não apareceu nesta tela: ${missing.length}</summary>
        <div style="max-height:150px; overflow:auto; margin-top:6px;">${missing.map(esc).join("<br>") || "Todos os nomes da planilha foram vistos nesta tela."}</div>
      </details>
      <div style="margin-top:10px; color:#68406e;"><b>Importante:</b> o widget não clica em Salvar. Confere e salva manualmente no DED+.</div>
    `;
  }


  function controlLabelText(el) {
    if (!el) return "";
    const bits = [
      el.innerText,
      el.textContent,
      el.getAttribute?.("aria-label"),
      el.getAttribute?.("title"),
      el.getAttribute?.("name"),
      el.getAttribute?.("id"),
      el.getAttribute?.("value"),
      el.getAttribute?.("data-label")
    ];
    if (el.id) {
      const lab = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
      if (lab) bits.push(lab.innerText, lab.textContent);
    }
    const wrapLabel = el.closest?.("label");
    if (wrapLabel) bits.push(wrapLabel.innerText, wrapLabel.textContent);
    return norm(bits.filter(Boolean).join(" "));
  }

  function isStatusControlText(text, status) {
    const t = norm(text);
    if (!t) return false;
    if (status === "F") {
      if (t === "F" || t === "FALTA" || t === "FALTOU" || t === "AUSENTE") return true;
      if (t.includes("FALTA") || t.includes("FALTOU") || t.includes("AUSENTE")) return true;
      return false;
    }
    if (status === "P") {
      if (t === "P" || t === "PRESENTE" || t === "PRESENCA") return true;
      if (t.includes("PRESENTE") || t.includes("PRESENCA")) return true;
      return false;
    }
    return false;
  }

  function chooseSelectOption(select, status) {
    const options = [...select.options];
    const best = options.find(opt => isStatusControlText(`${opt.textContent} ${opt.value}`, status));
    if (!best) return false;
    select.value = best.value;
    dispatchChange(select);
    return true;
  }

  function clickChoice(el) {
    if (!el) return false;
    if (el instanceof HTMLInputElement && (el.type === "radio" || el.type === "checkbox")) {
      if (!el.checked) el.click();
      dispatchChange(el);
      return true;
    }
    el.click();
    dispatchChange(el);
    return true;
  }

  function applyAttendanceStatus(card, status, nameEl = null) {
    const selects = [...(card?.querySelectorAll?.("select") || [])].filter(el => !el.disabled && visible(el));
    for (const select of selects) {
      if (chooseSelectOption(select, status)) return { ok: true, tipo: "select" };
    }

    const candidates = [
      ...(card?.querySelectorAll?.('input[type="radio"], input[type="checkbox"], button, [role="button"], label') || [])
    ].filter(el => visible(el) && !el.disabled && !isWidgetElement(el));

    const exact = candidates.find(el => {
      const t = controlLabelText(el);
      return t === status || isStatusControlText(t, status);
    });
    if (exact) return { ok: clickChoice(exact), tipo: exact.tagName.toLowerCase() };

    const inputs = candidates.filter(el => el instanceof HTMLInputElement);
    for (const input of inputs) {
      const t = controlLabelText(input);
      if (isStatusControlText(t, status)) return { ok: clickChoice(input), tipo: input.type };
    }

    // DED+ de chamada usa um ícone de presença/falta por linha.
    // O clique agora é limitado pela altura do nome encontrado, para não pegar o
    // primeiro ícone verde da lista por acidente.
    const scopedTargets = rowScopedAttendanceTargets(nameEl, card);
    const cardTargets = (card ? attendanceTargets(card) : []).filter(item => !isWidgetElement(item.target) && !isWidgetElement(item.node));
    const iconTargets = scopedTargets.length ? scopedTargets : cardTargets;

    const alreadyWanted = iconTargets.find(item => item.state === status || isStatusControlText(controlLabelText(item.target), status));
    if (alreadyWanted) return { ok: true, tipo: `já ${status}` };

    const opposite = status === "F" ? "P" : "F";
    const toggle = iconTargets.find(item => item.state === opposite) || iconTargets[0];
    if (toggle) {
      const ok = clickChoice(toggle.target || toggle.node);
      return { ok, tipo: status === "F" ? "icone verde da linha" : "icone da linha" };
    }

    return { ok: false, tipo: "" };
  }

  function detectCallDayFromPage(turma) {
    const bodyRaw = document.body.innerText || "";
    const body = norm(bodyRaw);
    const dias = Object.keys(app.callData?.[turma] || {});
    for (const d of dias) {
      const plain = String(Number(d.split(" ")[0] || d)).padStart(2, "0");
      if (body.includes(`DIA ${plain}`) || bodyRaw.includes(`/${plain}/`) || bodyRaw.includes(`${plain}/`)) return d;
    }
    return dias[0] || "";
  }

  function getSelectedCallOptions() {
    const turma = document.getElementById("dedCallTurma")?.value || Object.keys(app.callData || {})[0] || "";
    const dia = document.getElementById("dedCallDia")?.value || detectCallDayFromPage(turma);
    const markPresent = !!document.getElementById("dedCallPresentes")?.checked;
    const threshold = Number(document.getElementById("dedNotasThreshold")?.value || 88) / 100;
    return { turma, dia, markPresent, threshold, margin: 0.035 };
  }

  function fillCallOnce(options, dryRun = false) {
    const dayData = app.callData?.[options.turma]?.[options.dia];
    const allRows = dayData?.alunos || [];
    const targetRows = options.markPresent ? allRows : allRows.filter(row => row.status === "F");
    const foundSheetRows = new Set();
    const usedCards = new WeakSet();
    const usedNames = new Set();

    const report = {
      turma: options.turma,
      dia: options.dia,
      aplicados: [],
      encontrados: [],
      semControle: [],
      duplicadosTela: [],
      ambiguos: [],
      naoEncontradosNaTela: [],
      dryRun
    };

    if (!targetRows.length) return report;

    const nodes = findTextNodes();
    for (const node of nodes) {
      const match = matchStudent(node.nodeValue, targetRows, options.threshold, options.margin);
      if (!match) continue;

      const el = node.parentElement;
      const card = findCallCard(el);
      if (!card) continue;

      if (match.ambiguous) {
        report.ambiguos.push(`${normName(node.nodeValue)} → ${match.best.row.nome} (${Math.round(match.best.score * 100)}%) / ${match.second.row.nome} (${Math.round(match.second.score * 100)}%)`);
        markCard(card, "warn");
        continue;
      }

      const row = match.row;
      // Segurança extra: o clique só acontece se o próprio texto detectado bate com o aluno da planilha.
      // Isso evita aplicar falta no primeiro card visível quando o DOM da chamada vem agrupado.
      if (scoreNames(node.nodeValue, row.nome) < options.threshold) continue;
      const rowId = `${canonicalName(row.nome)}|${row.linha || ""}|${row.coluna || ""}|${row.status}`;
      if (usedNames.has(rowId)) {
        report.duplicadosTela.push(row.nome);
        continue;
      }

      usedCards.add(card);
      usedNames.add(rowId);
      foundSheetRows.add(rowId);
      report.encontrados.push(`${row.nome} → ${row.status === "F" ? "Falta" : "Presente"} · ${Math.round(match.score * 100)}%`);

      if (!dryRun) {
        const applied = applyAttendanceStatus(card, row.status, el);
        if (!applied.ok) {
          report.semControle.push(`${row.nome} (${row.status})`);
          markCard(card, "bad");
          continue;
        }
      }

      markCard(card, row.status === "F" ? "warn" : "ok");
      report.aplicados.push(`${row.nome} → ${row.status === "F" ? "Falta" : "Presente"}`);
    }

    targetRows.forEach(row => {
      const rowId = `${canonicalName(row.nome)}|${row.linha || ""}|${row.coluna || ""}|${row.status}`;
      if (!foundSheetRows.has(rowId)) report.naoEncontradosNaTela.push(`${row.nome} (${row.status})`);
    });

    return report;
  }

  function renderCallLog(report) {
    const box = document.getElementById("dedNotasLog");
    if (!box) return;
    const a = dedupe(report.aplicados || []);
    const e = dedupe(report.encontrados || []);
    const s = dedupe(report.semControle || []);
    const d = dedupe(report.duplicadosTela || []);
    const amb = dedupe(report.ambiguos || []);
    const missing = dedupe(report.naoEncontradosNaTela || []);
    const title = report.dryRun ? "🔎 Conferência da chamada" : "✅ Chamada aplicada";

    box.innerHTML = `
      <div style="font-weight:900; color:#5b2b66; margin-bottom:6px;">${title}</div>
      <div><b>${report.dryRun ? "Encontrados" : "Aplicados"}:</b> ${report.dryRun ? e.length : a.length}</div>
      ${s.length ? `<div><b>⚠️ Não achei botão/ícone de falta/presença:</b><br>${s.slice(0, 16).map(esc).join("<br>")}</div>` : ""}
      ${d.length ? `<div><b>⚠️ Duplicados ignorados:</b><br>${d.slice(0, 12).map(esc).join("<br>")}</div>` : ""}
      ${amb.length ? `<div><b>🟡 Ambíguos, não mexi:</b><br>${amb.slice(0, 12).map(esc).join("<br>")}</div>` : ""}
      <details style="margin-top:8px;" ${e.length && e.length < 12 ? "open" : ""}>
        <summary>${report.dryRun ? "Ver encontrados" : "Ver lançamentos feitos"}</summary>
        <div style="max-height:170px; overflow:auto; margin-top:6px;">${(report.dryRun ? e : a).map(esc).join("<br>") || "Nada ainda."}</div>
      </details>
      <details style="margin-top:8px;">
        <summary>Na chamada, mas não apareceu nesta tela: ${missing.length}</summary>
        <div style="max-height:150px; overflow:auto; margin-top:6px;">${missing.map(esc).join("<br>") || "Todos os nomes da chamada foram vistos nesta tela."}</div>
      </details>
      <div style="margin-top:10px; color:#68406e;"><b>Importante:</b> o widget não clica em Salvar. Confere e salva manualmente no DED+.</div>
    `;
  }



  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        data: app.data,
        fileName: app.fileName,
        callData: app.callData,
        callFileName: app.callFileName,
        studentRosters: app.studentRosters,
        rosterSettings: app.rosterSettings,
        savedAt: new Date().toISOString()
      }));
    } catch (_) {}
  }

  function loadSavedData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.data) {
        app.data = parsed.data;
        app.fileName = parsed.fileName || "planilha de notas salva";
      }
      if (parsed?.callData) {
        app.callData = parsed.callData;
        app.callFileName = parsed.callFileName || "planilha de chamada salva";
      }
      if (parsed?.studentRosters && typeof parsed.studentRosters === "object") app.studentRosters = parsed.studentRosters;
      if (parsed?.rosterSettings && typeof parsed.rosterSettings === "object") app.rosterSettings = parsed.rosterSettings;
    } catch (_) {}
  }

  function clearSavedData() {
    app.data = null;
    app.fileName = "";
    app.callData = null;
    app.callFileName = "";
    app.studentRosters = {};
    app.rosterSettings = {};
    pendingRosterUpdate = null;
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    refreshPanelData();
    logMessage("Planilhas removidas do widget. Carregue outra quando quiser.");
  }

  function logMessage(html) {
    const box = document.getElementById("dedNotasLog");
    if (box) box.innerHTML = html;
  }

  function gradeSummary() {
    const turmas = Object.keys(app.data || {});
    let atividades = 0;
    let alunos = 0;
    turmas.forEach(t => Object.values(app.data[t] || {}).forEach(atv => {
      atividades++;
      alunos += atv.alunos?.length || 0;
    }));
    return { turmas, atividades, alunos };
  }

  function callSummary() {
    const turmas = Object.keys(app.callData || {});
    let dias = 0;
    let faltas = 0;
    let marcacoes = 0;
    turmas.forEach(t => Object.values(app.callData[t] || {}).forEach(dia => {
      dias++;
      faltas += dia.faltas || 0;
      marcacoes += dia.alunos?.length || 0;
    }));
    return { turmas, dias, faltas, marcacoes };
  }

  function refreshRosterSummary() {
    const summary = document.getElementById("dedRosterSummary");
    if (!summary) return;
    const turma = rosterKey(detectTurmaFromPage());
    const students = rosterStudentsForTurma(turma);
    const settings = rosterOptionsForTurma(turma);
    const moved = students.filter(s => s.status === "remanejado").length;
    const inactive = students.filter(s => s.status === "inativo").length;
    summary.textContent = students.length
      ? `Turma ${turma}: ${students.length} identificados, ${moved} remanejados, ${inactive} inativos. A lista está salva no widget.`
      : "Abra a Visão Geral da Turma no DED+ para ler os alunos e atualizar o XLSX.";
    const includeMoved = document.getElementById("dedRosterIncludeMoved");
    const removeInactive = document.getElementById("dedRosterRemoveInactive");
    if (includeMoved) includeMoved.checked = settings.includeRemanejados;
    if (removeInactive) removeInactive.checked = settings.removeInativos;
  }

  function refreshPanelData() {
    const fileLabel = document.getElementById("dedNotasFileLabel");
    const turmaSelect = document.getElementById("dedNotasTurma");
    const atvSelect = document.getElementById("dedNotasAtv");
    const summary = document.getElementById("dedNotasSummary");

    const callFileLabel = document.getElementById("dedCallFileLabel");
    const callTurmaSelect = document.getElementById("dedCallTurma");
    const callDiaSelect = document.getElementById("dedCallDia");
    const callSummaryBox = document.getElementById("dedCallSummary");

    if (fileLabel && turmaSelect && atvSelect && summary) {
      if (!app.data) {
        fileLabel.textContent = "Nenhuma planilha de notas carregada";
        summary.textContent = "Carregue um .xlsx ou .csv no formato da tabela de notas.";
        turmaSelect.innerHTML = `<option value="">Sem dados</option>`;
        atvSelect.innerHTML = `<option value="">Sem dados</option>`;
      } else {
        const s = gradeSummary();
        fileLabel.textContent = app.fileName || "Planilha de notas carregada";
        summary.textContent = `${s.turmas.length} turma(s), ${s.atividades} atividade(s), ${s.alunos} nota(s) lidas.`;
        const detectedTurma = detectTurmaFromPage();
        turmaSelect.innerHTML = s.turmas.map(t => `<option value="${esc(t)}" ${t === detectedTurma ? "selected" : ""}>${esc(t)}</option>`).join("");
        if (!s.turmas.includes(turmaSelect.value)) turmaSelect.value = s.turmas[0] || "";
        refreshActivities();
      }
    }

    if (callFileLabel && callTurmaSelect && callDiaSelect && callSummaryBox) {
      if (!app.callData) {
        callFileLabel.textContent = "Nenhuma planilha de chamada carregada";
        callSummaryBox.textContent = "Carregue uma chamada com NOME DO ALUNO e dias 01 a 31 preenchidos com P/F.";
        callTurmaSelect.innerHTML = `<option value="">Sem dados</option>`;
        callDiaSelect.innerHTML = `<option value="">Sem dados</option>`;
      } else {
        const s = callSummary();
        callFileLabel.textContent = app.callFileName || "Planilha de chamada carregada";
        callSummaryBox.textContent = `${s.turmas.length} turma(s), ${s.dias} dia(s), ${s.faltas} falta(s) encontradas.`;
        const detectedTurma = detectTurmaFromPage();
        callTurmaSelect.innerHTML = s.turmas.map(t => `<option value="${esc(t)}" ${t === detectedTurma ? "selected" : ""}>${esc(t)}</option>`).join("");
        if (!s.turmas.includes(callTurmaSelect.value)) callTurmaSelect.value = s.turmas[0] || "";
        refreshCallDays();
      }
    }
    refreshRosterSummary();
  }

  function refreshActivities() {
    const turmaSelect = document.getElementById("dedNotasTurma");
    const atvSelect = document.getElementById("dedNotasAtv");
    if (!turmaSelect || !atvSelect) return;
    const turma = turmaSelect.value;
    const acts = Object.keys(app.data?.[turma] || {});
    const detected = detectActivityFromPage(turma);
    atvSelect.innerHTML = acts.map(a => {
      const count = app.data[turma][a]?.alunos?.length || 0;
      const selected = a === detected ? "selected" : "";
      return `<option value="${esc(a)}" ${selected}>${esc(a)} · ${count} alunos</option>`;
    }).join("") || `<option value="">Sem atividade nessa turma</option>`;
  }

  function refreshCallDays() {
    const turmaSelect = document.getElementById("dedCallTurma");
    const diaSelect = document.getElementById("dedCallDia");
    if (!turmaSelect || !diaSelect) return;
    const turma = turmaSelect.value;
    const dias = Object.keys(app.callData?.[turma] || {});
    const detected = detectCallDayFromPage(turma);
    diaSelect.innerHTML = dias.map(d => {
      const info = app.callData[turma][d] || {};
      const selected = d === detected ? "selected" : "";
      const label = info.rotulo || d;
      return `<option value="${esc(d)}" ${selected}>Dia ${esc(label)} · ${info.faltas || 0} falta(s)</option>`;
    }).join("") || `<option value="">Sem dia nessa turma</option>`;
  }

  function makeDraggable(panel, handle) {
    let startX = 0, startY = 0, startLeft = 0, startTop = 0, dragging = false;
    handle.addEventListener("pointerdown", ev => {
      if (ev.target.closest("button, input, select, label")) return;
      dragging = true;
      const rect = panel.getBoundingClientRect();
      startX = ev.clientX;
      startY = ev.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      panel.setPointerCapture?.(ev.pointerId);
      ev.preventDefault();
    });
    panel.addEventListener("pointermove", ev => {
      if (!dragging) return;
      const left = Math.min(Math.max(8, startLeft + ev.clientX - startX), window.innerWidth - panel.offsetWidth - 8);
      const top = Math.min(Math.max(8, startTop + ev.clientY - startY), window.innerHeight - panel.offsetHeight - 8);
      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    });
    panel.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      try {
        localStorage.setItem(POSITION_KEY, JSON.stringify({ left: panel.style.left, top: panel.style.top }));
      } catch (_) {}
    });
  }


  async function handleGradeFile(file) {
    logMessage(`Lendo notas de <b>${esc(file.name)}</b>...`);
    await new Promise(resolve => setTimeout(resolve, 30));
    const sheets = await parseFile(file);
    const result = extractGradeData(sheets);
    app.data = result.data;
    app.fileName = file.name;
    if (!Object.keys(app.data).length) {
      app.data = null;
      throw new Error("Não encontrei uma tabela de notas com coluna NOME DO ALUNO e atividades com notas.");
    }
    saveData();
    refreshPanelData();
    const summary = gradeSummary();
    logMessage(`✅ Notas carregadas: <b>${summary.turmas.length}</b> turma(s), <b>${summary.atividades}</b> atividade(s), <b>${summary.alunos}</b> nota(s).`);
  }

  async function handleCallFile(file) {
    logMessage(`Lendo chamada de <b>${esc(file.name)}</b>...`);
    await new Promise(resolve => setTimeout(resolve, 30));
    const sheets = await parseFile(file);
    const result = extractCallData(sheets);
    app.callData = result.data;
    app.callFileName = file.name;
    if (!Object.keys(app.callData).length) {
      app.callData = null;
      throw new Error("Não encontrei uma tabela de chamada com NOME DO ALUNO e dias preenchidos com P/F.");
    }
    saveData();
    refreshPanelData();
    const summary = callSummary();
    logMessage(`✅ Chamada carregada: <b>${summary.turmas.length}</b> turma(s), <b>${summary.dias}</b> dia(s), <b>${summary.faltas}</b> falta(s).`);
  }


  function createPanel() {
    loadSavedData();
    ["dedNotasPanelV3", "dedNotasPanelV4", "dedNotasPanelV5", "dedNotasPanelV6", "dedNotasPanel"].forEach(id => {
      const oldPanel = document.getElementById(id);
      if (oldPanel) oldPanel.remove();
    });

    const panel = document.createElement("div");
    panel.id = "dedNotasPanel";
    panel.style.cssText = `
      position: fixed; right: 18px; bottom: 18px; z-index: 2147483647;
      width: 420px; max-width: calc(100vw - 24px); max-height: calc(100vh - 24px); overflow: hidden;
      background: #fff; color: #2a1430; border: 2px solid #70417b;
      border-radius: 20px; box-shadow: 0 18px 48px rgba(0,0,0,.25);
      font-family: Arial, Helvetica, sans-serif; line-height: 1.3;
    `;

    panel.innerHTML = `
      <div id="dedNotasDrag" style="cursor:move; background:linear-gradient(135deg,#70417b,#8d5a97); color:#fff; padding:13px 15px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
        <div>
          <div style="font-weight:900; font-size:16px; letter-spacing:.2px;">DED+ Notas + Chamadas</div>
          <div style="font-size:11px; opacity:.86;">XLSX/CSV ↔ DED+ · notas · faltas · captura de atividades e visão geral</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button id="dedNotasMin" title="Minimizar" style="border:0; background:rgba(255,255,255,.18); color:#fff; border-radius:10px; padding:5px 9px; cursor:pointer; font-weight:900;">–</button>
          <button id="dedNotasClose" title="Fechar" style="border:0; background:rgba(255,255,255,.18); color:#fff; border-radius:10px; padding:5px 9px; cursor:pointer; font-weight:900;">×</button>
        </div>
      </div>
      <div id="dedNotasBody" style="padding:14px; overflow:auto; max-height:calc(100vh - 95px);">
        <section style="background:#fff; border:1px solid #ead8ef; border-radius:16px; padding:10px; margin-bottom:12px;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:8px;">
            <label style="display:block; font-size:12px; font-weight:900; color:#5b2b66;">Planilha de notas</label>
            <button id="dedNotasModelo" style="background:#f0e2f4; color:#70417b; border:0; border-radius:10px; padding:7px 9px; font-size:11px; font-weight:900; cursor:pointer;">Exportar modelo</button>
          </div>
          <input id="dedNotasFile" type="file" accept=".xlsx,.csv" style="width:100%; box-sizing:border-box; border:1px dashed #b08abc; border-radius:12px; padding:9px; background:#fbf6fd; font-size:12px;">
          <div id="dedNotasFileLabel" style="font-size:12px; margin-top:6px; color:#5b4b60; font-weight:700;">Nenhuma planilha de notas carregada</div>
          <div id="dedNotasSummary" style="font-size:12px; margin:3px 0 11px; color:#6a5970;">Carregue um .xlsx ou .csv no formato da sua tabela de notas.</div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div>
              <label style="font-size:12px; font-weight:900; color:#5b2b66;">Turma</label>
              <select id="dedNotasTurma" style="width:100%; padding:8px; border-radius:10px; border:1px solid #b08abc; margin-top:4px; background:#fff;"></select>
            </div>
            <div>
              <label style="font-size:12px; font-weight:900; color:#5b2b66;">Atividade</label>
              <select id="dedNotasAtv" style="width:100%; padding:8px; border-radius:10px; border:1px solid #b08abc; margin-top:4px; background:#fff;"></select>
            </div>
          </div>

          <label style="display:flex; align-items:center; gap:8px; font-size:12px; margin:11px 0 8px; color:#3b2542;">
            <input id="dedNotasZeros" type="checkbox" checked>
            0, NF ou branco = marcar “Não realizada” quando existir
          </label>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:12px;">
            <button id="dedNotasCheck" style="background:#f0e2f4; color:#70417b; border:0; border-radius:12px; padding:10px; font-weight:900; cursor:pointer;">Analisar notas</button>
            <button id="dedNotasFill" style="background:#5f8f4e; color:#fff; border:0; border-radius:12px; padding:10px; font-weight:900; cursor:pointer;">Preencher notas</button>
          </div>

          <div style="border-top:1px solid #ead8ef; margin-top:12px; padding-top:12px;">
            <div style="font-size:12px; font-weight:900; color:#5b2b66; margin-bottom:4px;">DED+ → planilha</div>
            <div style="font-size:11px; color:#6a5970; margin-bottom:9px;">Lê tanto a tela de <b>uma atividade</b> quanto a <b>Visão Geral da Turma</b>. Na visão geral, captura todos os alunos e todas as colunas de atividades de uma vez, com nome + registro + nota.</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <button id="dedNotasReadDed" style="background:#4d7fa8; color:#fff; border:0; border-radius:12px; padding:10px; font-weight:900; cursor:pointer;">Ler notas desta página</button>
              <button id="dedNotasExportCurrent" style="background:#70417b; color:#fff; border:0; border-radius:12px; padding:10px; font-weight:900; cursor:pointer;">Baixar planilha atualizada</button>
            </div>
          </div>
          <div style="border-top:1px solid #ead8ef; margin-top:12px; padding-top:12px;">
            <div style="font-size:12px; font-weight:900; color:#5b2b66; margin-bottom:4px;">Atualizar relação de alunos</div>
            <div id="dedRosterSummary" style="font-size:11px; color:#6a5970; margin-bottom:8px;">Abra a Visão Geral da Turma para ler os alunos.</div>
            <label style="display:flex;gap:7px;align-items:center;font-size:12px;margin:6px 0;">
              <input id="dedRosterIncludeMoved" type="checkbox" checked> Incluir remanejados
            </label>
            <label style="display:flex;gap:7px;align-items:center;font-size:12px;margin:6px 0 9px;">
              <input id="dedRosterRemoveInactive" type="checkbox" checked> Retirar inativos da planilha
            </label>
            <button id="dedRosterRead" style="width:100%;background:#4d7fa8;color:#fff;border:0;border-radius:12px;padding:10px;font-weight:900;cursor:pointer;">Ler alunos desta turma</button>
            <button id="dedRosterReset" style="width:100%;margin-top:6px;background:#fff;color:#70417b;border:1px solid #cbb0d3;border-radius:10px;padding:7px;font-size:11px;font-weight:800;cursor:pointer;">Reiniciar leitura desta turma</button>
            <div id="dedRosterPreview" style="display:none;margin-top:9px;padding:10px;border:1px solid #d7bfdc;background:#fbf6fd;border-radius:12px;font-size:11px;"></div>
            <div style="font-size:10px;color:#6a5970;margin-top:7px;">Confira a prévia e aplique. Repita a leitura após rolar a lista se o DED+ carregar alunos aos poucos. As notas já lançadas não são apagadas.</div>
          </div>
        </section>

        <section style="background:#fff; border:1px solid #ead8ef; border-radius:16px; padding:10px; margin-bottom:12px;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:8px;">
            <label style="display:block; font-size:12px; font-weight:900; color:#5b2b66;">Planilha de chamada</label>
            <button id="dedCallModelo" style="background:#f0e2f4; color:#70417b; border:0; border-radius:10px; padding:7px 9px; font-size:11px; font-weight:900; cursor:pointer;">Exportar modelo</button>
          </div>
          <input id="dedCallFile" type="file" accept=".xlsx,.csv" style="width:100%; box-sizing:border-box; border:1px dashed #b08abc; border-radius:12px; padding:9px; background:#fbf6fd; font-size:12px;">
          <div id="dedCallFileLabel" style="font-size:12px; margin-top:6px; color:#5b4b60; font-weight:700;">Nenhuma planilha de chamada carregada</div>
          <div id="dedCallSummary" style="font-size:12px; margin:3px 0 11px; color:#6a5970;">Carregue uma chamada com NOME DO ALUNO e dias 01 a 31 preenchidos com P/F.</div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div>
              <label style="font-size:12px; font-weight:900; color:#5b2b66;">Turma</label>
              <select id="dedCallTurma" style="width:100%; padding:8px; border-radius:10px; border:1px solid #b08abc; margin-top:4px; background:#fff;"></select>
            </div>
            <div>
              <label style="font-size:12px; font-weight:900; color:#5b2b66;">Dia</label>
              <select id="dedCallDia" style="width:100%; padding:8px; border-radius:10px; border:1px solid #b08abc; margin-top:4px; background:#fff;"></select>
            </div>
          </div>

          <label style="display:flex; align-items:center; gap:8px; font-size:12px; margin:11px 0 8px; color:#3b2542;">
            <input id="dedCallPresentes" type="checkbox">
            também marcar P como presente quando existir controle
          </label>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:12px;">
            <button id="dedCallCheck" style="background:#f0e2f4; color:#70417b; border:0; border-radius:12px; padding:10px; font-weight:900; cursor:pointer;">Analisar chamada</button>
            <button id="dedCallFill" style="background:#ffb020; color:#3b2542; border:0; border-radius:12px; padding:10px; font-weight:900; cursor:pointer;">Dar falta</button>
          </div>
        </section>

        <label style="display:block; font-size:12px; font-weight:900; color:#5b2b66;">Sensibilidade do nome: <span id="dedNotasThresholdLabel">88%</span></label>
        <input id="dedNotasThreshold" type="range" min="80" max="98" step="1" value="88" style="width:100%; accent-color:#70417b;">
        <div style="font-size:11px; color:#6a5970; margin-top:-2px;">Menor = aceita mais variações. Maior = mais rígido. Ambíguos não são preenchidos.</div>

        <button id="dedNotasClear" style="width:100%; margin-top:10px; background:#fff; color:#70417b; border:1px solid #cbb0d3; border-radius:12px; padding:8px; font-weight:800; cursor:pointer;">Limpar planilhas salvas do widget</button>

        <div id="dedNotasLog" style="font-size:12px; background:#f8f1fa; border-radius:14px; padding:10px; margin-top:12px; max-height:310px; overflow:auto; border:1px solid #ead8ef;">
          Carrega a planilha, escolhe a turma/dia/atividade e confere antes de salvar no DED+.
        </div>
      </div>
    `;

    document.body.appendChild(panel);

    try {
      const pos = JSON.parse(localStorage.getItem(POSITION_KEY) || "null");
      if (pos?.left && pos?.top) {
        panel.style.left = pos.left;
        panel.style.top = pos.top;
        panel.style.right = "auto";
        panel.style.bottom = "auto";
      }
    } catch (_) {}

    makeDraggable(panel, panel.querySelector("#dedNotasDrag"));

    panel.querySelector("#dedNotasClose").addEventListener("click", () => { panel.style.display = "none"; });
    panel.querySelector("#dedNotasMin").addEventListener("click", () => {
      const body = panel.querySelector("#dedNotasBody");
      body.style.display = body.style.display === "none" ? "block" : "none";
    });

    panel.querySelector("#dedNotasModelo").addEventListener("click", () => {
      downloadBase64Xlsx(TEMPLATE_NOTAS_XLSX_B64, "modelo_notas_em_branco.xlsx");
      logMessage("✅ Modelo de notas exportado. Preenche NOME DO ALUNO e as colunas de atividade.");
    });
    panel.querySelector("#dedCallModelo").addEventListener("click", () => {
      downloadBase64Xlsx(TEMPLATE_CHAMADAS_XLSX_B64, "modelo_chamadas_em_branco.xlsx");
      logMessage("✅ Modelo de chamadas exportado. Use P para presente e F para falta.");
    });

    panel.querySelector("#dedNotasFile").addEventListener("change", async ev => {
      const file = ev.target.files?.[0];
      if (!file) return;
      try {
        await handleGradeFile(file);
      } catch (err) {
        console.error(err);
        logMessage(`❌ ${esc(err.message || err)}`);
      } finally {
        ev.target.value = "";
      }
    });

    panel.querySelector("#dedCallFile").addEventListener("change", async ev => {
      const file = ev.target.files?.[0];
      if (!file) return;
      try {
        await handleCallFile(file);
      } catch (err) {
        console.error(err);
        logMessage(`❌ ${esc(err.message || err)}`);
      } finally {
        ev.target.value = "";
      }
    });

    panel.querySelector("#dedNotasTurma").addEventListener("change", refreshActivities);
    panel.querySelector("#dedCallTurma").addEventListener("change", refreshCallDays);
    panel.querySelector("#dedNotasThreshold").addEventListener("input", ev => {
      panel.querySelector("#dedNotasThresholdLabel").textContent = `${ev.target.value}%`;
    });
    panel.querySelector("#dedNotasClear").addEventListener("click", clearSavedData);

    panel.querySelector("#dedNotasCheck").addEventListener("click", () => {
      if (!app.data) return logMessage("Carrega a planilha de notas primeiro, mona.");
      renderLog(fillOnce(getSelectedOptions(), true));
    });
    panel.querySelector("#dedNotasFill").addEventListener("click", () => {
      if (!app.data) return logMessage("Carrega a planilha de notas primeiro, mona.");
      renderLog(fillOnce(getSelectedOptions(), false));
    });
    panel.querySelector("#dedNotasReadDed").addEventListener("click", captureCurrentDedPageToSheet);
    panel.querySelector("#dedNotasExportCurrent").addEventListener("click", exportGradesWorkbook);
    panel.querySelector("#dedRosterRead").addEventListener("click", readStudentsForSheet);
    panel.querySelector("#dedRosterReset").addEventListener("click", resetStudentRoster);

    panel.querySelector("#dedCallCheck").addEventListener("click", () => {
      if (!app.callData) return logMessage("Carrega a planilha de chamada primeiro, mona.");
      renderCallLog(fillCallOnce(getSelectedCallOptions(), true));
    });
    panel.querySelector("#dedCallFill").addEventListener("click", () => {
      if (!app.callData) return logMessage("Carrega a planilha de chamada primeiro, mona.");
      renderCallLog(fillCallOnce(getSelectedCallOptions(), false));
    });

    refreshPanelData();
  }

  createPanel();
  console.log("DED+ Notas + Chamadas Widget carregado.");
})();
