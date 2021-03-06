class BloomFilter {
  
  constructor(m) {
    
    this.arr = new Array(m).fill(0);
    
  }
  
  insert(val) {
    
    this.arr[ this.murmur(val) ] = 1;
    this.arr[ this.fnv(val) ] = 1;
    this.arr[ this.hashCeption(val) ] = 1;
    return undefined;
  }
  
  test(val) {
    
    var hasOne = this.arr[ this.murmur(val) ] === 1;
    hasOne = hasOne && this.arr[ this.fnv(val) ] === 1;
    hasOne = hasOne && this.arr[ this.hashCeption(val) ] === 1;
    
    return hasOne ? 'maybe' : 'false';
  }
  
  murmur(val) {
    
    return murmurHash3.x86.hash32(val) % this.arr.length;

  }
  
  fnv(val) {
    return fnv32a(val) % this.arr.length;
  }
  
  hashCeption(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % this.arr.length;
  }
  
}

// murmurHash3.js v2.1.2 |  http://github.com/karanlyons/murmurHash.js | MIT Licensed
(function(y,z){function l(a,c){return(a&65535)*c+(((a>>>16)*c&65535)<<16)}function r(a,c){return a<<c|a>>>32-c}function x(a){a=l(a^a>>>16,2246822507);a^=a>>>13;a=l(a,3266489909);return a^=a>>>16}function v(a,c){a=[a[0]>>>16,a[0]&65535,a[1]>>>16,a[1]&65535];c=[c[0]>>>16,c[0]&65535,c[1]>>>16,c[1]&65535];var b=[0,0,0,0];b[3]+=a[3]+c[3];b[2]+=b[3]>>>16;b[3]&=65535;b[2]+=a[2]+c[2];b[1]+=b[2]>>>16;b[2]&=65535;b[1]+=a[1]+c[1];b[0]+=b[1]>>>16;b[1]&=65535;b[0]+=a[0]+c[0];b[0]&=65535;return[b[0]<<16|b[1],b[2]<<
16|b[3]]}function u(a,c){a=[a[0]>>>16,a[0]&65535,a[1]>>>16,a[1]&65535];c=[c[0]>>>16,c[0]&65535,c[1]>>>16,c[1]&65535];var b=[0,0,0,0];b[3]+=a[3]*c[3];b[2]+=b[3]>>>16;b[3]&=65535;b[2]+=a[2]*c[3];b[1]+=b[2]>>>16;b[2]&=65535;b[2]+=a[3]*c[2];b[1]+=b[2]>>>16;b[2]&=65535;b[1]+=a[1]*c[3];b[0]+=b[1]>>>16;b[1]&=65535;b[1]+=a[2]*c[2];b[0]+=b[1]>>>16;b[1]&=65535;b[1]+=a[3]*c[1];b[0]+=b[1]>>>16;b[1]&=65535;b[0]+=a[0]*c[3]+a[1]*c[2]+a[2]*c[1]+a[3]*c[0];b[0]&=65535;return[b[0]<<16|b[1],b[2]<<16|b[3]]}function w(a,
c){c%=64;if(32===c)return[a[1],a[0]];if(32>c)return[a[0]<<c|a[1]>>>32-c,a[1]<<c|a[0]>>>32-c];c-=32;return[a[1]<<c|a[0]>>>32-c,a[0]<<c|a[1]>>>32-c]}function s(a,c){c%=64;return 0===c?a:32>c?[a[0]<<c|a[1]>>>32-c,a[1]<<c]:[a[1]<<c-32,0]}function p(a,c){return[a[0]^c[0],a[1]^c[1]]}function A(a){a=p(a,[0,a[0]>>>1]);a=u(a,[4283543511,3981806797]);a=p(a,[0,a[0]>>>1]);a=u(a,[3301882366,444984403]);return a=p(a,[0,a[0]>>>1])}var t={version:"2.1.2",x86:{},x64:{}};t.x86.hash32=function(a,c){a=a||"";for(var b=
a.length%4,p=a.length-b,d=c||0,e=0,f=0;f<p;f+=4)e=a.charCodeAt(f)&255|(a.charCodeAt(f+1)&255)<<8|(a.charCodeAt(f+2)&255)<<16|(a.charCodeAt(f+3)&255)<<24,e=l(e,3432918353),e=r(e,15),e=l(e,461845907),d^=e,d=r(d,13),d=l(d,5)+3864292196;e=0;switch(b){case 3:e^=(a.charCodeAt(f+2)&255)<<16;case 2:e^=(a.charCodeAt(f+1)&255)<<8;case 1:e^=a.charCodeAt(f)&255,e=l(e,3432918353),e=r(e,15),e=l(e,461845907),d^=e}d^=a.length;d=x(d);return d>>>0};t.x86.hash128=function(a,c){a=a||"";c=c||0;for(var b=a.length%16,p=
a.length-b,d=c,e=c,f=c,h=c,m=0,n=0,g=0,q=0,k=0;k<p;k+=16)m=a.charCodeAt(k)&255|(a.charCodeAt(k+1)&255)<<8|(a.charCodeAt(k+2)&255)<<16|(a.charCodeAt(k+3)&255)<<24,n=a.charCodeAt(k+4)&255|(a.charCodeAt(k+5)&255)<<8|(a.charCodeAt(k+6)&255)<<16|(a.charCodeAt(k+7)&255)<<24,g=a.charCodeAt(k+8)&255|(a.charCodeAt(k+9)&255)<<8|(a.charCodeAt(k+10)&255)<<16|(a.charCodeAt(k+11)&255)<<24,q=a.charCodeAt(k+12)&255|(a.charCodeAt(k+13)&255)<<8|(a.charCodeAt(k+14)&255)<<16|(a.charCodeAt(k+15)&255)<<24,m=l(m,597399067),
m=r(m,15),m=l(m,2869860233),d^=m,d=r(d,19),d+=e,d=l(d,5)+1444728091,n=l(n,2869860233),n=r(n,16),n=l(n,951274213),e^=n,e=r(e,17),e+=f,e=l(e,5)+197830471,g=l(g,951274213),g=r(g,17),g=l(g,2716044179),f^=g,f=r(f,15),f+=h,f=l(f,5)+2530024501,q=l(q,2716044179),q=r(q,18),q=l(q,597399067),h^=q,h=r(h,13),h+=d,h=l(h,5)+850148119;q=g=n=m=0;switch(b){case 15:q^=a.charCodeAt(k+14)<<16;case 14:q^=a.charCodeAt(k+13)<<8;case 13:q^=a.charCodeAt(k+12),q=l(q,2716044179),q=r(q,18),q=l(q,597399067),h^=q;case 12:g^=a.charCodeAt(k+
11)<<24;case 11:g^=a.charCodeAt(k+10)<<16;case 10:g^=a.charCodeAt(k+9)<<8;case 9:g^=a.charCodeAt(k+8),g=l(g,951274213),g=r(g,17),g=l(g,2716044179),f^=g;case 8:n^=a.charCodeAt(k+7)<<24;case 7:n^=a.charCodeAt(k+6)<<16;case 6:n^=a.charCodeAt(k+5)<<8;case 5:n^=a.charCodeAt(k+4),n=l(n,2869860233),n=r(n,16),n=l(n,951274213),e^=n;case 4:m^=a.charCodeAt(k+3)<<24;case 3:m^=a.charCodeAt(k+2)<<16;case 2:m^=a.charCodeAt(k+1)<<8;case 1:m^=a.charCodeAt(k),m=l(m,597399067),m=r(m,15),m=l(m,2869860233),d^=m}d^=a.length;
e^=a.length;f^=a.length;h^=a.length;d=d+e+f;d+=h;e+=d;f+=d;h+=d;d=x(d);e=x(e);f=x(f);h=x(h);d+=e;d+=f;d+=h;e+=d;f+=d;h+=d;return("00000000"+(d>>>0).toString(16)).slice(-8)+("00000000"+(e>>>0).toString(16)).slice(-8)+("00000000"+(f>>>0).toString(16)).slice(-8)+("00000000"+(h>>>0).toString(16)).slice(-8)};t.x64.hash128=function(a,c){a=a||"";c=c||0;for(var b=a.length%16,l=a.length-b,d=[0,c],e=[0,c],f=[0,0],h=[0,0],m=[2277735313,289559509],n=[1291169091,658871167],g=0;g<l;g+=16)f=[a.charCodeAt(g+4)&255|
(a.charCodeAt(g+5)&255)<<8|(a.charCodeAt(g+6)&255)<<16|(a.charCodeAt(g+7)&255)<<24,a.charCodeAt(g)&255|(a.charCodeAt(g+1)&255)<<8|(a.charCodeAt(g+2)&255)<<16|(a.charCodeAt(g+3)&255)<<24],h=[a.charCodeAt(g+12)&255|(a.charCodeAt(g+13)&255)<<8|(a.charCodeAt(g+14)&255)<<16|(a.charCodeAt(g+15)&255)<<24,a.charCodeAt(g+8)&255|(a.charCodeAt(g+9)&255)<<8|(a.charCodeAt(g+10)&255)<<16|(a.charCodeAt(g+11)&255)<<24],f=u(f,m),f=w(f,31),f=u(f,n),d=p(d,f),d=w(d,27),d=v(d,e),d=v(u(d,[0,5]),[0,1390208809]),h=u(h,n),
h=w(h,33),h=u(h,m),e=p(e,h),e=w(e,31),e=v(e,d),e=v(u(e,[0,5]),[0,944331445]);f=[0,0];h=[0,0];switch(b){case 15:h=p(h,s([0,a.charCodeAt(g+14)],48));case 14:h=p(h,s([0,a.charCodeAt(g+13)],40));case 13:h=p(h,s([0,a.charCodeAt(g+12)],32));case 12:h=p(h,s([0,a.charCodeAt(g+11)],24));case 11:h=p(h,s([0,a.charCodeAt(g+10)],16));case 10:h=p(h,s([0,a.charCodeAt(g+9)],8));case 9:h=p(h,[0,a.charCodeAt(g+8)]),h=u(h,n),h=w(h,33),h=u(h,m),e=p(e,h);case 8:f=p(f,s([0,a.charCodeAt(g+7)],56));case 7:f=p(f,s([0,a.charCodeAt(g+
6)],48));case 6:f=p(f,s([0,a.charCodeAt(g+5)],40));case 5:f=p(f,s([0,a.charCodeAt(g+4)],32));case 4:f=p(f,s([0,a.charCodeAt(g+3)],24));case 3:f=p(f,s([0,a.charCodeAt(g+2)],16));case 2:f=p(f,s([0,a.charCodeAt(g+1)],8));case 1:f=p(f,[0,a.charCodeAt(g)]),f=u(f,m),f=w(f,31),f=u(f,n),d=p(d,f)}d=p(d,[0,a.length]);e=p(e,[0,a.length]);d=v(d,e);e=v(e,d);d=A(d);e=A(e);d=v(d,e);e=v(e,d);return("00000000"+(d[0]>>>0).toString(16)).slice(-8)+("00000000"+(d[1]>>>0).toString(16)).slice(-8)+("00000000"+(e[0]>>>0).toString(16)).slice(-8)+
("00000000"+(e[1]>>>0).toString(16)).slice(-8)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=t),exports.murmurHash3=t):"function"===typeof define&&define.amd?define([],function(){return t}):(t._murmurHash3=y.murmurHash3,t.noConflict=function(){y.murmurHash3=t._murmurHash3;t._murmurHash3=z;t.noConflict=z;return t},y.murmurHash3=t)})(this);
  
  
  
// 32 bit FNV-1a hash
// Ref.: http://isthe.com/chongo/tech/comp/fnv/
function fnv32a( str )
{
  var FNV1_32A_INIT = 0x811c9dc5;
  var hval = FNV1_32A_INIT;
  for ( var i = 0; i < str.length; ++i )
  {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}

