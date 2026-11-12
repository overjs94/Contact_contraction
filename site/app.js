var ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ou=0,Jl=1,Bu=2;var Zl=1,Oa=2,ai=3,qn=0,nn=1,Bn=2,Pi=0,ls=1,Kl=2,Ql=3,eh=4,ku=5,Wi=100,zu=101,Vu=102,Hu=103,Gu=104,Wu=200,Xu=201,qu=202,ju=203,_a=204,xa=205,Yu=206,$u=207,Ju=208,Zu=209,Ku=210,Qu=211,ed=212,td=213,nd=214,Ba=0,ka=1,za=2,hs=3,Va=4,Ha=5,Ga=6,Wa=7,fo=0,id=1,sd=2,Li=0,rd=1,od=2,ad=3,Xa=4,cd=5,ld=6,hd=7,Bl="attached",ud="detached",th=300,ws=301,Ts=302,qa=303,ja=304,po=306,jn=1e3,wn=1001,ya=1002,xn=1003,dd=1004;var mo=1005;var _n=1006,Ya=1007;var Zn=1008;var Kn=1009,nh=1010,ih=1011,hr=1012,$a=1013,$i=1014,kn=1015,ur=1016,Ja=1017,Za=1018,dr=1020,sh=35902,rh=35899,oh=1021,ah=1022,Cn=1023,Qs=1026,fr=1027,Ka=1028,Qa=1029,ch=1030,ec=1031;var tc=1033,go=33776,_o=33777,xo=33778,yo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,cc=37496,lc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,xc=37817,yc=37818,vc=37819,bc=37820,Mc=37821,Sc=36492,Ec=36494,wc=36495,Tc=36283,Ac=36284,Cc=36285,Rc=36286;var zr=2300,va=2301,ga=2302,kl=2400,zl=2401,Vl=2402,fd=2500;var pd=3200,md=3201;var vo=0,gd=1,Ni="",Mt="srgb",us="srgb-linear",Vr="linear",At="srgb";var cs=7680;var Hl=519,_d=512,xd=513,yd=514,lh=515,vd=516,bd=517,Md=518,Sd=519,Gl=35044;var hh="300 es",Xn=2e3,Hr=2001;var ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,Js=Math.PI/180,ds=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function Hf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gf(i,e,t){return i!==e?(t-i)/(e-i):0}function kr(i,e,t){return(1-t)*i+t*e}function Wf(i,e,t,n){return kr(i,e,1-Math.exp(-t*n))}function Xf(i,e=1){return e-Math.abs(uh(i,e*2)-e)}function qf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $f(i,e){return i+Math.random()*(e-i)}function Jf(i){return i*(.5-Math.random())}function Zf(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kf(i){return i*Js}function Qf(i){return i*ds}function ep(i){return(i&i-1)===0&&i!==0}function tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ip(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),h=a(t/2),c=r((e+n)/2),l=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*l,h*u,h*d,o*c);break;case"YZY":i.set(h*d,o*l,h*u,o*c);break;case"ZXZ":i.set(h*u,h*d,o*l,o*c);break;case"XZX":i.set(o*l,h*g,h*f,o*c);break;case"YXY":i.set(h*f,o*l,h*g,o*c);break;case"ZYZ":i.set(h*g,h*f,o*l,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $s(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qn={DEG2RAD:Js,RAD2DEG:ds,generateUUID:Ji,clamp:pt,euclideanModulo:uh,mapLinear:Hf,inverseLerp:Gf,lerp:kr,damp:Wf,pingpong:Xf,smoothstep:qf,smootherstep:jf,randInt:Yf,randFloat:$f,randFloatSpread:Jf,seededRandom:Zf,degToRad:Kf,radToDeg:Qf,isPowerOfTwo:ep,ceilPowerOfTwo:tp,floorPowerOfTwo:np,setQuaternionFromProperEuler:ip,normalize:un,denormalize:$s},Ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let h=n[s+0],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=h,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||h!==d||c!==f||l!==g){let m=1-o,p=h*d+c*f+l*g+u*_,C=p>=0?1:-1,I=1-p*p;if(I>Number.EPSILON){let R=Math.sqrt(I),P=Math.atan2(R,p*C);m=Math.sin(m*P)/R,o=Math.sin(o*P)/R}let E=o*C;if(h=h*m+d*E,c=c*m+f*E,l=l*m+g*E,u=u*m+_*E,m===1-o){let R=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=R,c*=R,l*=R,u*=R}}e[t]=h,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],h=n[s+1],c=n[s+2],l=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+l*u+h*f-c*d,e[t+1]=h*g+l*d+c*u-o*f,e[t+2]=c*g+l*f+o*d-h*u,e[t+3]=l*g-o*u-h*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,h=Math.sin,c=o(n/2),l=o(s/2),u=o(r/2),d=h(n/2),f=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=d*l*u+c*f*g,this._y=c*f*u-d*l*g,this._z=c*l*g+d*f*u,this._w=c*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+c*f*g,this._y=c*f*u-d*l*g,this._z=c*l*g-d*f*u,this._w=c*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-c*f*g,this._y=c*f*u+d*l*g,this._z=c*l*g+d*f*u,this._w=c*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-c*f*g,this._y=c*f*u+d*l*g,this._z=c*l*g-d*f*u,this._w=c*l*u+d*f*g;break;case"YZX":this._x=d*l*u+c*f*g,this._y=c*f*u+d*l*g,this._z=c*l*g-d*f*u,this._w=c*l*u-d*f*g;break;case"XZY":this._x=d*l*u-c*f*g,this._y=c*f*u-d*l*g,this._z=c*l*g+d*f*u,this._w=c*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],h=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-h)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(l-h)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(h+l)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(h+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,h=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+s*c-r*h,this._y=s*l+a*h+r*o-n*c,this._z=r*l+a*c+n*h-s*o,this._w=a*l-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let h=1-o*o;if(h<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(h),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,h=e.w,c=2*(a*s-o*n),l=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+h*c+a*u-o*l,this.y=n+h*l+o*c-r*u,this.z=s+h*u+r*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new D,tu=new Et,ht=class i{constructor(e,t,n,s,r,a,o,h,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,c)}set(e,t,n,s,r,a,o,h,c){let l=this.elements;return l[0]=e,l[1]=s,l[2]=o,l[3]=t,l[4]=r,l[5]=h,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],C=s[1],I=s[4],E=s[7],R=s[2],P=s[5],U=s[8];return r[0]=a*_+o*C+h*R,r[3]=a*m+o*I+h*P,r[6]=a*p+o*E+h*U,r[1]=c*_+l*C+u*R,r[4]=c*m+l*I+u*P,r[7]=c*p+l*E+u*U,r[2]=d*_+f*C+g*R,r[5]=d*m+f*I+g*P,r[8]=d*p+f*E+g*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*r*l+n*o*h+s*r*c-s*a*h}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*h-l*r,f=c*r-a*h,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-l*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(l*t-s*h)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*h-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+e,-s*c,s*h,-s*(-c*a+h*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ul=new ht;function dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){let i=er("canvas");return i.style.display="block",i}var nu={};function tr(i){i in nu||(nu[i]=!0,console.warn(i))}function wd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var iu=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){let i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var mt=sp();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Us===void 0&&(Us=er("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rp=0,nr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dl(s[a].image)):r.push(dl(s[a]))}else r=dl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var op=0,fl=new D,on=class i extends ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,s=wn,r=_n,a=Zn,o=Cn,h=Kn,c=i.DEFAULT_ANISOTROPY,l=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ji(),this.name="",this.source=new nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=th;on.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,h=e.elements,c=h[0],l=h[4],u=h[8],d=h[1],f=h[5],g=h[9],_=h[2],m=h[6],p=h[10];if(Math.abs(l-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(c+1)/2,E=(f+1)/2,R=(p+1)/2,P=(l+d)/4,U=(u+_)/4,F=(g+m)/4;return I>E&&I>R?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=P/n,r=U/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=F/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=U/r,s=F/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-l)*(d-l));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(u-_)/C,this.z=(d-l)/C,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ma=class extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new on(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new nr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Ma{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gr=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Go.subVectors(this.max,Pr),Fs.subVectors(e.a,Pr),Os.subVectors(e.b,Pr),Bs.subVectors(e.c,Pr),Bi.subVectors(Os,Fs),ki.subVectors(Bs,Os),ss.subVectors(Fs,Bs);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ss.z,ss.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ss.z,0,-ss.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ss.y,ss.x,0];return!pl(t,Fs,Os,Bs,Go)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,Fs,Os,Bs,Go))?!1:(Wo.crossVectors(Bi,ki),t=[Wo.x,Wo.y,Wo.z],pl(t,Fs,Os,Bs,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,Ho=new Tn,Fs=new D,Os=new D,Bs=new D,Bi=new D,ki=new D,ss=new D,Pr=new D,Go=new D,Wo=new D,rs=new D;function pl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),h=e.dot(rs),c=t.dot(rs),l=n.dot(rs);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>o)return!1}return!0}var ap=new Tn,Lr=new D,ml=new D,Un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(ml)),this.expandByPoint(Lr.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_i=new D,gl=new D,Xo=new D,zi=new D,_l=new D,qo=new D,xl=new D,Ei=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gl.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xo),o=zi.dot(this.direction),h=-zi.dot(Xo),c=zi.lengthSq(),l=Math.abs(1-a*a),u,d,f,g;if(l>0)if(u=a*h-o,d=a*o-h,g=r*l,u>=0)if(d>=-g)if(d<=g){let _=1/l;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*h)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*h)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*h)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-h),r),f=-u*u+d*(d+2*h)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-h),r),f=d*(d+2*h)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-h),r),f=-u*u+d*(d+2*h)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gl).addScaledVector(Xo,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,h,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),l>=0?(r=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,h=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,h=(e.min.z-d.z)*u),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){_l.subVectors(t,e),qo.subVectors(n,e),xl.crossVectors(_l,qo);let a=this.direction.dot(xl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);let h=o*this.direction.dot(qo.crossVectors(zi,qo));if(h<0)return null;let c=o*this.direction.dot(_l.cross(zi));if(c<0||h+c>a)return null;let l=-o*zi.dot(xl);return l<0?null:this.at(l/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,a,o,h,c,l,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,h,c,l,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,h,c,l,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=h,p[2]=c,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*l,f=a*u,g=o*l,_=o*u;t[0]=h*l,t[4]=-h*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*h,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*h}else if(e.order==="YXZ"){let d=h*l,f=h*u,g=c*l,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*h}else if(e.order==="ZXY"){let d=h*l,f=h*u,g=c*l,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*l,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){let d=a*l,f=a*u,g=o*l,_=o*u;t[0]=h*l,t[4]=g*c-f,t[8]=d*c+_,t[1]=h*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){let d=a*h,f=a*c,g=o*h,_=o*c;t[0]=h*l,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*h,f=a*c,g=o*h,_=o*c;t[0]=h*l,t[4]=-u,t[8]=c*l,t[1]=d*u+_,t[5]=a*l,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*l,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,lp)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Vi.crossVectors(n,Sn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Vi.crossVectors(n,Sn)),Vi.normalize(),jo.crossVectors(Sn,Vi),s[0]=Vi.x,s[4]=jo.x,s[8]=Sn.x,s[1]=Vi.y,s[5]=jo.y,s[9]=Sn.y,s[2]=Vi.z,s[6]=jo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],C=n[3],I=n[7],E=n[11],R=n[15],P=s[0],U=s[4],F=s[8],v=s[12],S=s[1],N=s[5],B=s[9],W=s[13],J=s[2],K=s[6],k=s[10],se=s[14],X=s[3],oe=s[7],pe=s[11],ge=s[15];return r[0]=a*P+o*S+h*J+c*X,r[4]=a*U+o*N+h*K+c*oe,r[8]=a*F+o*B+h*k+c*pe,r[12]=a*v+o*W+h*se+c*ge,r[1]=l*P+u*S+d*J+f*X,r[5]=l*U+u*N+d*K+f*oe,r[9]=l*F+u*B+d*k+f*pe,r[13]=l*v+u*W+d*se+f*ge,r[2]=g*P+_*S+m*J+p*X,r[6]=g*U+_*N+m*K+p*oe,r[10]=g*F+_*B+m*k+p*pe,r[14]=g*v+_*W+m*se+p*ge,r[3]=C*P+I*S+E*J+R*X,r[7]=C*U+I*N+E*K+R*oe,r[11]=C*F+I*B+E*k+R*pe,r[15]=C*v+I*W+E*se+R*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],h=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*h*u-s*c*u-r*o*d+n*c*d+s*o*f-n*h*f)+_*(+t*h*f-t*c*d+r*a*d-s*a*f+s*c*l-r*h*l)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*l-n*c*l)+p*(-s*o*l-t*h*u+t*o*d+s*a*u-n*a*d+n*h*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],C=u*m*c-_*d*c+_*h*f-o*m*f-u*h*p+o*d*p,I=g*d*c-l*m*c-g*h*f+a*m*f+l*h*p-a*d*p,E=l*_*c-g*u*c+g*o*f-a*_*f-l*o*p+a*u*p,R=g*u*h-l*_*h-g*o*d+a*_*d+l*o*m-a*u*m,P=t*C+n*I+s*E+r*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=C*U,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*U,e[2]=(o*m*r-_*h*r+_*s*c-n*m*c-o*s*p+n*h*p)*U,e[3]=(u*h*r-o*d*r-u*s*c+n*d*c+o*s*f-n*h*f)*U,e[4]=I*U,e[5]=(l*m*r-g*d*r+g*s*f-t*m*f-l*s*p+t*d*p)*U,e[6]=(g*h*r-a*m*r-g*s*c+t*m*c+a*s*p-t*h*p)*U,e[7]=(a*d*r-l*h*r+l*s*c-t*d*c-a*s*f+t*h*f)*U,e[8]=E*U,e[9]=(g*u*r-l*_*r-g*n*f+t*_*f+l*n*p-t*u*p)*U,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*U,e[11]=(l*o*r-a*u*r-l*n*c+t*u*c+a*n*f-t*o*f)*U,e[12]=R*U,e[13]=(l*_*s-g*u*s+g*n*d-t*_*d-l*n*m+t*u*m)*U,e[14]=(g*o*s-a*_*s-g*n*h+t*_*h+a*n*m-t*o*m)*U,e[15]=(a*u*s-l*o*s+l*n*h-t*u*h-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,h=e.z,c=r*a,l=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,l*o+n,l*h-s*a,0,c*h-s*o,l*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,h=t._w,c=r+r,l=a+a,u=o+o,d=r*c,f=r*l,g=r*u,_=a*l,m=a*u,p=o*u,C=h*c,I=h*l,E=h*u,R=n.x,P=n.y,U=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+E)*R,s[2]=(g-I)*R,s[3]=0,s[4]=(f-E)*P,s[5]=(1-(d+p))*P,s[6]=(m+C)*P,s[7]=0,s[8]=(g+I)*U,s[9]=(m-C)*U,s[10]=(1-(d+_))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,l=1/a,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=l,Gn.elements[5]*=l,Gn.elements[6]*=l,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Xn,h=!1){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(h)g=r/(a-r),_=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Hr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xn,h=!1){let c=this.elements,l=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(h)g=1/(a-r),_=a/(a-r);else if(o===Xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Hr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new D,Gn=new nt,cp=new D(0,0,0),lp=new D(1,1,1),Vi=new D,jo=new D,Sn=new D,ru=new nt,ou=new Et,tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hp=0,au=new D,zs=new Et,xi=new nt,Yo=new D,Nr=new D,up=new D,dp=new Et,cu=new D(1,0,0),lu=new D(0,1,0),hu=new D(0,0,1),uu={type:"added"},fp={type:"removed"},Vs={type:"childadded",child:null},yl={type:"childremoved",child:null},Ft=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new tn,n=new Et,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ht}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Nr,Yo,this.up):xi.lookAt(Yo,Nr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(xi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){let u=h[c];r(e.shapes,u)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){let o=a(e.geometries),h=a(e.materials),c=a(e.textures),l=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let h=[];for(let c in o){let l=o[c];delete l.metadata,h.push(l)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new D,yi=new D,vl=new D,vi=new D,Hs=new D,Gs=new D,du=new D,bl=new D,Ml=new D,Sl=new D,El=new St,wl=new St,Tl=new St,Mi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wn.subVectors(s,t),yi.subVectors(n,t),vl.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(yi),h=Wn.dot(vl),c=yi.dot(yi),l=yi.dot(vl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*h-o*l)*d,g=(a*l-o*h)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,h){return this.getBarycoord(e,t,n,s,vi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,vi.x),h.addScaledVector(a,vi.y),h.addScaledVector(o,vi.z),h)}static getInterpolatedAttribute(e,t,n,s,r,a){return El.setScalar(0),wl.setScalar(0),Tl.setScalar(0),El.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(Tl,r.z),a}static isFrontFacing(e,t,n,s){return Wn.subVectors(n,t),yi.subVectors(e,t),Wn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Wn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),Gs.subVectors(r,n),bl.subVectors(e,n);let h=Hs.dot(bl),c=Gs.dot(bl);if(h<=0&&c<=0)return t.copy(n);Ml.subVectors(e,s);let l=Hs.dot(Ml),u=Gs.dot(Ml);if(l>=0&&u<=l)return t.copy(s);let d=h*u-l*c;if(d<=0&&h>=0&&l<=0)return a=h/(h-l),t.copy(n).addScaledVector(Hs,a);Sl.subVectors(e,r);let f=Hs.dot(Sl),g=Gs.dot(Sl);if(g>=0&&f<=g)return t.copy(r);let _=f*c-h*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gs,o);let m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return du.subVectors(r,s),o=(u-l)/(u-l+(f-g)),t.copy(s).addScaledVector(du,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Hs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=uh(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Al(a,r,e+1/3),this.g=Al(a,r,e),this.b=Al(a,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return mt.workingToColorSpace(rn.copy(this),e),Math.round(pt(rn.r*255,0,255))*65536+Math.round(pt(rn.g*255,0,255))*256+Math.round(pt(rn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,c,l=(o+a)/2;if(o===a)h=0,c=0;else{let u=a-o;switch(c=l<=.5?u/(a+o):u/(2-a-o),a){case n:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-n)/u+2;break;case r:h=(n-s)/u+4;break}h/=6}return e.h=h,e.s=c,e.l=l,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Mt){mt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL($o);let n=kr(Hi.h,$o.h,t),s=kr(Hi.s,$o.s,t),r=kr(Hi.l,$o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Xe;Xe.NAMES=Td;var pp=0,dn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=ls,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fn=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new D,Jo=new Ze,mp=0,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$s(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var Xr=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gp=0,Nn=new nt,Cl=new Ft,Ws=new D,En=new Tn,Dr=new Tn,Zt=new D,Ot=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dh(e)?qr:Xr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(En.min,Dr.min),En.expandByPoint(Zt),Zt.addVectors(En.max,Dr.max),En.expandByPoint(Zt)):(En.expandByPoint(Dr.min),En.expandByPoint(Dr.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],h=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Zt.fromBufferAttribute(o,c),h&&(Ws.fromBufferAttribute(e,c),Zt.add(Ws)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],h=[];for(let F=0;F<n.count;F++)o[F]=new D,h[F]=new D;let c=new D,l=new D,u=new D,d=new Ze,f=new Ze,g=new Ze,_=new D,m=new D;function p(F,v,S){c.fromBufferAttribute(n,F),l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),l.sub(c),u.sub(c),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(N),o[F].add(_),o[v].add(_),o[S].add(_),h[F].add(m),h[v].add(m),h[S].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,v=C.length;F<v;++F){let S=C[F],N=S.start,B=S.count;for(let W=N,J=N+B;W<J;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let I=new D,E=new D,R=new D,P=new D;function U(F){R.fromBufferAttribute(s,F),P.copy(R);let v=o[F];I.copy(v),I.sub(R.multiplyScalar(R.dot(v))).normalize(),E.crossVectors(P,v);let N=E.dot(h[F])<0?-1:1;a.setXYZW(F,I.x,I.y,I.z,N)}for(let F=0,v=C.length;F<v;++F){let S=C[F],N=S.start,B=S.count;for(let W=N,J=N+B;W<J;W+=3)U(e.getX(W+0)),U(e.getX(W+1)),U(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,h=new D,c=new D,l=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(l),h.add(l),c.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,h){let c=o.array,l=o.itemSize,u=o.normalized,d=new c.constructor(h.length*l),f=0,g=0;for(let _=0,m=h.length;_<m;_++){o.isInterleavedBufferAttribute?f=h[_]*o.data.stride+o.offset:f=h[_]*l;for(let p=0;p<l;p++)d[g++]=c[f++]}return new Kt(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],c=e(h,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let h=[],c=r[o];for(let l=0,u=c.length;l<u;l++){let d=c[l],f=e(d,n);h.push(f)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let c=n[h];e.data.attributes[h]=c.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],l=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];l.push(f.toJSON(e.data))}l.length>0&&(s[h]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let l=s[c];this.setAttribute(c,l.clone(t))}let r=e.morphAttributes;for(let c in r){let l=[],u=r[c];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,l=a.length;c<l;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new nt,os=new Ei,Zo=new Un,pu=new D,Ko=new D,Qo=new D,ea=new D,Rl=new D,ta=new D,mu=new D,na=new D,ct=class extends Ft{constructor(e=new Ot,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let h=0,c=r.length;h<c;h++){let l=o[h],u=r[h];l!==0&&(Rl.fromBufferAttribute(u,e),a?ta.addScaledVector(Rl,l):ta.addScaledVector(Rl.sub(t),l))}t.add(ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Zo.containsPoint(os.origin)===!1&&(os.intersectSphere(Zo,pu)===null||os.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(fu.copy(r).invert(),os.copy(e.ray).applyMatrix4(fu),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],C=Math.max(m.start,f.start),I=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=C,R=I;E<R;E+=3){let P=o.getX(E),U=o.getX(E+1),F=o.getX(E+2);s=ia(this,p,e,n,c,l,u,P,U,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let C=o.getX(m),I=o.getX(m+1),E=o.getX(m+2);s=ia(this,a,e,n,c,l,u,C,I,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],C=Math.max(m.start,f.start),I=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let E=C,R=I;E<R;E+=3){let P=E,U=E+1,F=E+2;s=ia(this,p,e,n,c,l,u,P,U,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let C=m,I=m+1,E=m+2;s=ia(this,a,e,n,c,l,u,C,I,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _p(i,e,t,n,s,r,a,o){let h;if(e.side===nn?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,e.side===qn,o),h===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,a,o,h,c){i.getVertexPosition(o,Ko),i.getVertexPosition(h,Qo),i.getVertexPosition(c,ea);let l=_p(i,e,t,n,Ko,Qo,ea,mu);if(l){let u=new D;Mi.getBarycoord(mu,Ko,Qo,ea,u),s&&(l.uv=Mi.getInterpolatedAttribute(s,o,h,c,u,new Ze)),r&&(l.uv1=Mi.getInterpolatedAttribute(r,o,h,c,u,new Ze)),a&&(l.normal=Mi.getInterpolatedAttribute(a,o,h,c,u,new D),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a:o,b:h,c,normal:new D,materialIndex:0};Mi.getNormal(Ko,Qo,ea,d.normal),l.face=d,l.barycoord=u}return l}var An=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],c=[],l=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,p,C,I,E,R,P,U,F,v){let S=E/U,N=R/F,B=E/2,W=R/2,J=P/2,K=U+1,k=F+1,se=0,X=0,oe=new D;for(let pe=0;pe<k;pe++){let ge=pe*N-W;for(let Ie=0;Ie<K;Ie++){let Ae=Ie*S-B;oe[_]=Ae*C,oe[m]=ge*I,oe[p]=J,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=P>0?1:-1,l.push(oe.x,oe.y,oe.z),u.push(Ie/U),u.push(1-pe/F),se+=1}}for(let pe=0;pe<F;pe++)for(let ge=0;ge<U;ge++){let Ie=d+ge+K*pe,Ae=d+ge+K*(pe+1),Te=d+(ge+1)+K*(pe+1),ye=d+(ge+1)+K*pe;h.push(Ie,Ae,ye),h.push(Ae,Te,ye),X+=6}o.addGroup(f,X,v),f+=X,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function As(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=As(i[t]);for(let s in n)e[s]=n[s]}return e}function xp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Ad={clone:As,merge:an},yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new D,gu=new Ze,_u=new Ze,Vt=class extends jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,gu,_u),t.subVectors(_u,gu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,t-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=-90,qs=1,Ea=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Xs,qs,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Xs,qs,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Xs,qs,e,t);o.layers=this.layers,this.add(o);let h=new Vt(Xs,qs,e,t);h.layers=this.layers,this.add(h);let c=new Vt(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,h]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yr=class extends on{constructor(e=[],t=ws,n,s,r,a,o,h,c,l){super(e,t,n,s,r,a,o,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wa=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new An(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Pi});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=_n),new Ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},en=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fs=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},$r=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wi=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var xu=new D,yu=new St,vu=new St,Mp=new D,bu=new nt,sa=new D,Il=new Un,Mu=new nt,Pl=new Ei,Jr=class extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bl,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(s),e.ray.intersectsSphere(Il)!==!1&&(Mu.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(Mu),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ud?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yu.fromBufferAttribute(s.attributes.skinIndex,e),vu.fromBufferAttribute(s.attributes.skinWeight,e),xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=vu.getComponent(r);if(a!==0){let o=yu.getComponent(r);bu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mp.copy(xu).applyMatrix4(bu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},sr=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},rr=class extends on{constructor(e=null,t=1,n=1,s,r,a,o,h,c=xn,l=xn,u,d){super(null,a,o,h,c,l,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Su=new nt,Sp=new nt,Zr=class i{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Sp;Su.multiplyMatrices(o,t[r]),Su.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new rr(t,e,e,Cn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new sr),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Kr=class extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new nt,Eu=new nt,ra=[],wu=new Tn,Ep=new nt,Ur=new ct,Fr=new Un,Qr=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ep)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),wu.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Fr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Eu.multiplyMatrices(n,js),Ur.matrixWorld=Eu,Ur.raycast(e,ra);for(let a=0,o=ra.length;a<o;a++){let h=ra[a];h.instanceId=r,h.object=this,t.push(h)}ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,Ka,kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,h=s*e;r[h]=o,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ll=new D,wp=new D,Tp=new ht,Dn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ll.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tp.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Un,Ap=new Ze(.5,.5),oa=new D,or=class{constructor(e=new Dn,t=new Dn,n=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],h=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],C=r[12],I=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-a,f-l,p-g,R-C).normalize(),s[1].setComponents(c+a,f+l,p+g,R+C).normalize(),s[2].setComponents(c+o,f+u,p+_,R+I).normalize(),s[3].setComponents(c-o,f-u,p-_,R-I).normalize(),n)s[4].setComponents(h,d,m,E).normalize(),s[5].setComponents(c-h,f-d,p-m,R-E).normalize();else if(s[4].setComponents(c-h,f-d,p-m,R-E).normalize(),t===Xn)s[5].setComponents(c+h,f+d,p+m,R+E).normalize();else if(t===Hr)s[5].setComponents(h,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=Ap.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fn=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new D,Aa=new D,Tu=new nt,Or=new Ei,aa=new Un,Nl=new D,Au=new D,ps=class extends Ft{constructor(e=new Ot,t=new fn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Tu.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=l.getX(_),C=l.getX(_+1),I=ca(this,e,Or,h,p,C,_);I&&t.push(I)}if(this.isLineLoop){let _=l.getX(g-1),m=l.getX(f),p=ca(this,e,Or,h,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=ca(this,e,Or,h,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=ca(this,e,Or,h,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ca(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Aa,Nl,Au)>n)return;Nl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:Au.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cu=new D,Ru=new D,$n=class extends ps{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cu.fromBufferAttribute(t,s),Ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cu.distanceTo(Ru);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Jn=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Iu=new nt,Wl=new Ei,la=new Un,ha=new D,Ti=class extends Ft{constructor(e=new Ot,t=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Iu.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);ha.fromBufferAttribute(u,m),Pu(ha,m,h,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)ha.fromBufferAttribute(u,g),Pu(ha,g,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pu(i,e,t,n,s,r,a){let o=Wl.distanceSqToPoint(i);if(o<t){let h=new D;Wl.closestPointToPoint(i,h),h.applyMatrix4(n);let c=s.ray.origin.distanceTo(h);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var eo=class extends on{constructor(e,t,n,s,r,a,o,h,c){super(e,t,n,s,r,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},to=class extends on{constructor(e,t,n=$i,s,r,a,o=xn,h=xn,c,l=Qs,u=1){if(l!==Qs&&l!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,h,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},no=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Xi=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let c=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;C(),a===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(l),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function C(){let E=new D,R=new D,P=0,U=(t-e)/n;for(let F=0;F<=r;F++){let v=[],S=F/r,N=S*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,J=W*h+o,K=Math.sin(J),k=Math.cos(J);R.x=N*K,R.y=-S*n+m,R.z=N*k,u.push(R.x,R.y,R.z),E.set(K,U,k).normalize(),d.push(E.x,E.y,E.z),f.push(W,1-S),v.push(g++)}_.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){let S=_[v][F],N=_[v+1][F],B=_[v+1][F+1],W=_[v][F+1];(e>0||v!==0)&&(l.push(S,N,W),P+=3),(t>0||v!==r-1)&&(l.push(N,B,W),P+=3)}c.addGroup(p,P,0),p+=P}function I(E){let R=g,P=new Ze,U=new D,F=0,v=E===!0?e:t,S=E===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let J=B/s*h+o,K=Math.cos(J),k=Math.sin(J);U.x=v*k,U.y=m*S,U.z=v*K,u.push(U.x,U.y,U.z),d.push(0,S,0),P.x=K*.5+.5,P.y=k*.5*S+.5,f.push(P.x,P.y),g++}for(let B=0;B<s;B++){let W=R+B,J=N+B;E===!0?l.push(J,J+1,W):l.push(J+1,J,W),F+=3}c.addGroup(p,F,E===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ca=class i extends Xi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ua=new D,da=new D,Dl=new D,fa=new Mi,io=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Js*t),a=e.getIndex(),o=e.getAttribute("position"),h=a?a.count:o.count,c=[0,0,0],l=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<h;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=fa;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),fa.getNormal(Dl),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let C=0;C<3;C++){let I=(C+1)%3,E=u[C],R=u[I],P=fa[l[C]],U=fa[l[I]],F=`${E}_${R}`,v=`${R}_${E}`;v in d&&d[v]?(Dl.dot(d[v].normal)<=r&&(f.push(P.x,P.y,P.z),f.push(U.x,U.y,U.z)),d[v]=null):F in d||(d[F]={index0:c[C],index1:c[I],normal:Dl.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];ua.fromBufferAttribute(o,_),da.fromBufferAttribute(o,m),f.push(ua.x,ua.y,ua.z),f.push(da.x,da.y,da.z)}this.setAttribute("position",new ut(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ms=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),h=Math.floor(s),c=o+1,l=h+1,u=e/o,d=t/h,f=[],g=[],_=[],m=[];for(let p=0;p<l;p++){let C=p*d-a;for(let I=0;I<c;I++){let E=I*u-r;g.push(E,-C,0),_.push(0,0,1),m.push(I/o),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let C=0;C<o;C++){let I=C+c*p,E=C+c*(p+1),R=C+1+c*(p+1),P=C+1+c*p;f.push(I,E,P),f.push(E,R,P)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ai=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),c=0,l=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let C=[],I=p/n,E=0;p===0&&a===0?E=.5/t:p===n&&h===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let P=R/t;u.x=-e*Math.cos(s+P*r)*Math.sin(a+I*o),u.y=e*Math.cos(a+I*o),u.z=e*Math.sin(s+P*r)*Math.sin(a+I*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(P+E,1-I),C.push(c++)}l.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let I=l[p][C+1],E=l[p][C],R=l[p+1][C],P=l[p+1][C+1];(p!==0||a>0)&&f.push(I,E,P),(p!==n-1||h<Math.PI)&&f.push(E,R,P)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},so=class extends Qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},On=class extends dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var gs=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ra=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ia=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let h=0;h!==e;++h)s[a++]=i[o+h]}return s}function Cd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var _s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zl:r=e,o=2*t-n;break;case Vl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case zl:a=e,h=2*n-t;break;case Vl:a=1,h=n+s[1]-s[0];break;default:a=e-1,h=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(h-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,C=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,I=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let R=0;R!==o;++R)r[R]=p*a[l+R]+C*a[c+R]+I*a[h+R]+E*a[u+R];return r}},La=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,l=(n-t)/(s-t),u=1-l;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[h+d]*l;return r}},Na=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),e=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,a),e=!1;break}a=h}if(s!==void 0&&Cp(s))for(let o=0,h=s.length;o!==h;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let h=!1,c=e[o],l=e[o+1];if(c!==l&&(o!==1||c!==e[0]))if(s)h=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){h=!0;break}}}if(h){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,h=a*n,c=0;c!==n;++c)t[h+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=va;var Ci=class extends yn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=zr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ro.prototype.ValueTypeName="color";var xs=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};xs.prototype.ValueTypeName="number";var Da=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-t)/(s-t),c=e*o;for(let l=c+o;c!==l;c+=4)Et.slerpFlat(r,0,a,c-o,a,c,h);return r}},Ri=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends yn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=zr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ri.prototype.ValueTypeName="vector";var ar=class{constructor(e="",t=-1,n=[],s=fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pp(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let h=[],c=[];h.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let l=Rp(h);h=Lu(h,1,l),c=Lu(c,1,l),!s&&h[0]===0&&(h.push(r),c.push(c[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",h,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,h=e.length;o<h;o++){let c=e[o],l=c.name.match(r);if(l&&l.length>1){let u=l[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];Cd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,h=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let C=0;C!==d[g].morphTargets.length;++C){let I=d[g];m.push(I.time),p.push(I.morphTarget===_?1:0)}s.push(new xs(".morphTargetInfluence["+_+"]",m,p))}h=f.length*a}else{let f=".bones["+t[u].name+"]";n(ri,f+".position",d,"pos",s),n(Ri,f+".quaternion",d,"rot",s),n(ri,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,h,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ip(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return ro;case"quaternion":return Ri;case"bool":case"boolean":return Ci;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Pp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ip(i.type);if(i.times===void 0){let t=[],n=[];Cd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ks={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},cr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return h?h(l):l},this.setURLModifier=function(l){return h=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ic=new cr,pn=class{constructor(e){this.manager=e!==void 0?e:Ic,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pn.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},Xl=class extends Error{constructor(e,t){super(e),this.response=t}},oi=class extends pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ks.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:s});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,h=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let l=bi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){C();function C(){u.read().then(({done:I,value:E})=>{if(I)p.close();else{_+=E.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let P=0,U=l.length;P<U;P++){let F=l[P];F.onProgress&&F.onProgress(R)}p.enqueue(E),C()}},I=>{p.error(I)})}}});return new Response(m)}else throw new Xl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ks.add(`file:${e}`,c);let l=bi[e];delete bi[e];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let l=bi[e];if(l===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=new WeakMap,Ua=class extends pn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ks.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ys.get(a);u===void 0&&(u=[],Ys.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=er("img");function h(){l(),t&&t(this);let u=Ys.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ys.delete(this),r.manager.itemEnd(e)}function c(u){l(),s&&s(u),Ks.remove(`image:${e}`);let d=Ys.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ys.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ks.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var oo=class extends pn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new rr,o=new oi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(h){let c;try{c=r.parse(h)}catch(l){if(s!==void 0)s(l);else{console.error(l);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:wn,a.wrapT=c.wrapT!==void 0?c.wrapT:wn,a.magFilter=c.magFilter!==void 0?c.magFilter:_n,a.minFilter=c.minFilter!==void 0?c.minFilter:_n,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Zn),c.mipmapCount===1&&(a.minFilter=_n),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}},ys=class extends pn{constructor(e){super(e)}load(e,t,n,s){let r=new on,a=new Ua(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},vs=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Ul=new nt,Nu=new D,Du=new D,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ql=class extends ao{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},co=class extends vs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ql}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uu=new nt,Br=new D,Fl=new D,jl=class extends ao{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),Fl.copy(n.position),Fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fl),n.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu,n.coordinateSystem,n.reversedDepth)}},bs=class extends vs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ms=class extends jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=l*this.view.offsetY,h=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yl=class extends ao{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ss=class extends vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Es=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fa=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ph="\\[\\]\\.:\\/",Lp=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",Np="[^"+ph.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",mh),Up=/(WCOD+)?/.source.replace("WCOD",Np),Fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),Bp=new RegExp("^"+Dp+Up+Fp+Op+"$"),kp=["material","materials","bones","map"],$l=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(e){let t=Bp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let h=n(o.children);if(h)return h}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=$l;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jx=new Float32Array(1);var lr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var lo=class extends $n{constructor(e=10,t=10,n=4473924,s=8947848){n=new Xe(n),s=new Xe(s);let r=t/2,a=e/t,o=e/2,h=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){h.push(-o,0,g,o,0,g),h.push(g,0,-o,g,0,o);let _=d===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let l=new Ot;l.setAttribute("position",new ut(h,3)),l.setAttribute("color",new ut(c,3));let u=new fn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Fu=new D,ma,Ol,ho=class extends Ft{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ma===void 0&&(ma=new Ot,ma.setAttribute("position",new ut([0,0,0,0,1,0],3)),Ol=new Ca(.5,1,5,1),Ol.translate(0,-.5,0)),this.position.copy(t),this.line=new ps(ma,new fn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ct(Ol,new Fn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Fu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Fu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var uo=class extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function gh(i,e,t,n){let s=zp(n);switch(t){case oh:return i*e;case Ka:return i*e/s.components*s.byteLength;case Qa:return i*e/s.components*s.byteLength;case ch:return i*e*2/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case ah:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case tc:return i*e*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Ec:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cc:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zp(i){switch(i){case Kn:case nh:return{byteLength:1,components:1};case hr:case ih:case ur:return{byteLength:2,components:1};case Ja:case Za:return{byteLength:2,components:4};case $i:case $a:case kn:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Kd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hp(i){let e=new WeakMap;function t(o,h){let c=o.array,l=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,c,l),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,h,c){let l=h.array,u=h.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,l);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=e.get(o);h&&(i.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Um=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Gp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:jp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:Jp,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:Qp,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:cm,color_pars_fragment:lm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:ym,colorspace_pars_fragment:vm,envmap_fragment:bm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:wm,fog_vertex:Tm,fog_pars_vertex:Am,fog_fragment:Cm,fog_pars_fragment:Rm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Dm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:km,lights_physical_fragment:zm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Hm,lights_fragment_maps:Gm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Ym,map_fragment:$m,map_pars_fragment:Jm,map_particle_fragment:Zm,map_particle_pars_fragment:Km,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:eg,morphinstance_vertex:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:cg,normal_pars_vertex:lg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:_g,premultiplied_alpha_fragment:xg,project_vertex:yg,dithering_fragment:vg,dithering_pars_fragment:bg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:wg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Cg,skinning_pars_vertex:Rg,skinning_vertex:Ig,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Ng,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:zg,worldpos_vertex:Vg,background_vert:Hg,background_frag:Gg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:qg,cube_frag:jg,depth_vert:Yg,depth_frag:$g,distanceRGBA_vert:Jg,distanceRGBA_frag:Zg,equirect_vert:Kg,equirect_frag:Qg,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:s_,meshlambert_frag:r_,meshmatcap_vert:o_,meshmatcap_frag:a_,meshnormal_vert:c_,meshnormal_frag:l_,meshphong_vert:h_,meshphong_frag:u_,meshphysical_vert:d_,meshphysical_frag:f_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:x_,shadow_frag:y_,sprite_vert:v_,sprite_frag:b_},Me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ci={basic:{uniforms:an([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:an([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:an([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:an([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:an([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:an([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:an([Me.points,Me.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:an([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:an([Me.common,Me.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:an([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:an([Me.sprite,Me.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:an([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:an([Me.lights,Me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ci.physical={uniforms:an([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Pc={r:0,b:0,g:0},Cs=new tn,M_=new nt;function S_(i,e,t,n,s,r,a){let o=new Xe(0),h=r===!0?0:1,c,l,u=null,d=0,f=null;function g(I){let E=I.isScene===!0?I.background:null;return E&&E.isTexture&&(E=(I.backgroundBlurriness>0?t:e).get(E)),E}function _(I){let E=!1,R=g(I);R===null?p(o,h):R&&R.isColor&&(p(R,1),E=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(I,E){let R=g(E);R&&(R.isCubeTexture||R.mapping===po)?(l===void 0&&(l=new ct(new An(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:As(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Cs.copy(E.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),l.material.uniforms.envMap.value=R,l.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Cs)),l.material.toneMapped=mt.getTransfer(R.colorSpace)!==At,(u!==R||d!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ct(new ms(2,2),new Yn({name:"BackgroundMaterial",uniforms:As(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=mt.getTransfer(R.colorSpace)!==At,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null))}function p(I,E){I.getRGB(Pc,fh(i)),n.buffers.color.setClear(Pc.r,Pc.g,Pc.b,E,a)}function C(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(I,E=1){o.set(I),h=E,p(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,p(o,h)},render:_,addToRenderList:m,dispose:C}}function E_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,N,B,W,J){let K=!1,k=u(W,B,N);r!==k&&(r=k,c(r.object)),K=f(S,W,B,J),K&&g(S,W,B,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(S,N,B,W),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function u(S,N,B){let W=B.wireframe===!0,J=n[S.id];J===void 0&&(J={},n[S.id]=J);let K=J[N.id];K===void 0&&(K={},J[N.id]=K);let k=K[W];return k===void 0&&(k=d(h()),K[W]=k),k}function d(S){let N=[],B=[],W=[];for(let J=0;J<t;J++)N[J]=0,B[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,N,B,W){let J=r.attributes,K=N.attributes,k=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let pe=J[X],ge=K[X];if(ge===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),pe===void 0||pe.attribute!==ge||ge&&pe.data!==ge.data)return!0;k++}return r.attributesNum!==k||r.index!==W}function g(S,N,B,W){let J={},K=N.attributes,k=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let pe=K[X];pe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));let ge={};ge.attribute=pe,pe&&pe.data&&(ge.data=pe.data),J[X]=ge,k++}r.attributes=J,r.attributesNum=k,r.index=W}function _(){let S=r.newAttributes;for(let N=0,B=S.length;N<B;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){let B=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;B[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),J[S]!==N&&(i.vertexAttribDivisor(S,N),J[S]=N)}function C(){let S=r.newAttributes,N=r.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==S[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function I(S,N,B,W,J,K,k){k===!0?i.vertexAttribIPointer(S,N,B,J,K):i.vertexAttribPointer(S,N,B,W,J,K)}function E(S,N,B,W){_();let J=W.attributes,K=B.getAttributes(),k=N.defaultAttributeValues;for(let se in K){let X=K[se];if(X.location>=0){let oe=J[se];if(oe===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let pe=oe.normalized,ge=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;let Ae=Ie.buffer,Te=Ie.type,ye=Ie.bytesPerElement,V=Te===i.INT||Te===i.UNSIGNED_INT||oe.gpuType===$a;if(oe.isInterleavedBufferAttribute){let Y=oe.data,me=Y.stride,He=oe.offset;if(Y.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)p(X.location+De,Y.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let De=0;De<X.locationSize;De++)I(X.location+De,ge/X.locationSize,Te,pe,me*ye,(He+ge/X.locationSize*De)*ye,V)}else{if(oe.isInstancedBufferAttribute){for(let Y=0;Y<X.locationSize;Y++)p(X.location+Y,oe.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Y=0;Y<X.locationSize;Y++)m(X.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Y=0;Y<X.locationSize;Y++)I(X.location+Y,ge/X.locationSize,Te,pe,ge*ye,ge/X.locationSize*Y*ye,V)}}else if(k!==void 0){let pe=k[se];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}C()}function R(){F();for(let S in n){let N=n[S];for(let B in N){let W=N[B];for(let J in W)l(W[J].object),delete W[J];delete N[B]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let B in N){let W=N[B];for(let J in W)l(W[J].object),delete W[J];delete N[B]}delete n[S.id]}function U(S){for(let N in n){let B=n[N];if(B[S.id]===void 0)continue;let W=B[S.id];for(let J in W)l(W[J].object),delete W[J];delete B[S.id]}}function F(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:m,disableUnusedAttributes:C}}function w_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];t.update(f,n,1)}function h(c,l,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,l,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=l[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function T_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==Cn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){let F=U===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Kn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==kn&&!F)}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",l=h(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:E,vertexTextures:R,maxSamples:P}}function A_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Dn,o=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):c();else{let C=r?0:n,I=C*4,E=p.clippingState||null;h.value=E,E=l(g,d,I,f);for(let R=0;R!==I;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=h.value,g!==!0||m===null){let p=f+_*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,E=f;I!==_;++I,E+=4)a.copy(u[I]).applyMatrix4(C,o),a.normal.toArray(m,E),m[E+3]=a.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function C_(i){let e=new WeakMap;function t(a,o){return o===qa?a.mapping=ws:o===ja&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qa||o===ja)if(e.has(a)){let h=e.get(a).texture;return t(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=new wa(h.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let h=e.get(o);h!==void 0&&(e.delete(o),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var mr=4,Rd=[.125,.215,.35,.446,.526,.582],Ps=20,_h=new Ms,Id=new Xe,xh=null,yh=0,vh=0,bh=!1,Is=(1+Math.sqrt(5))/2,pr=1/Is,Pd=[new D(-Is,pr,0),new D(Is,pr,0),new D(-pr,0,Is),new D(pr,0,Is),new D(0,Is,-pr),new D(0,Is,pr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],R_=new D,_r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=R_}=r;xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,yh,vh),this._renderer.xr.enabled=bh,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ur,format:Cn,colorSpace:us,depthBuffer:!1},s=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=P_(r,e,t)}return s}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,_h)}_sceneToCubeUV(e,t,n,s,r){let h=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Id),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Fn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new ct(new An,_),p=!1,C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,p=!0):(_.color.copy(Id),p=!0);for(let I=0;I<6;I++){let E=I%3;E===0?(h.up.set(0,c[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+l[I],r.y,r.z)):E===1?(h.up.set(0,0,c[I]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+l[I],r.z)):(h.up.set(0,c[I],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+l[I]));let R=this._cubeSize;Lc(s,E*R,I>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,h),u.render(e,h)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ws||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let h=this._cubeSize;Lc(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,_h)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pd[(s-r-1)%Pd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new ct(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):Ps;m>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);let p=[],C=0;for(let U=0;U<Ps;++U){let F=U/_,v=Math.exp(-F*F/2);p.push(v),U===0?C+=v:U<m&&(C+=2*v)}for(let U=0;U<p.length;U++)p[U]=p[U]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:I}=this;d.dTheta.value=g,d.mipInt.value=I-n;let E=this._sizeLods[s],R=3*E*(s>I-mr?s-I+mr:0),P=4*(this._cubeSize-E);Lc(t,R,P,3*E,2*E),h.setRenderTarget(t),h.render(u,_h)}};function I_(i){let e=[],t=[],n=[],s=i,r=i-mr+1+Rd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let h=1/o;a>i-mr?h=Rd[a-i+mr-1]:a===0&&(h=0),n.push(h);let c=1/(o-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,_=3,m=2,p=1,C=new Float32Array(_*g*f),I=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let P=0;P<f;P++){let U=P%3*2/3-1,F=P>2?0:-1,v=[U,F,0,U+2/3,F,0,U+2/3,F+1,0,U,F,0,U+2/3,F+1,0,U,F+1,0];C.set(v,_*g*P),I.set(d,m*g*P);let S=[P,P,P,P,P,P];E.set(S,p*g*P)}let R=new Ot;R.setAttribute("position",new Kt(C,_)),R.setAttribute("uv",new Kt(I,m)),R.setAttribute("faceIndex",new Kt(E,p)),e.push(R),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ld(i,e,t){let n=new si(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function P_(i,e,t){let n=new Float32Array(Ps),s=new D(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Nd(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Dd(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let h=o.mapping,c=h===qa||h===ja,l=h===ws||h===Ts;if(c||l){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new _r(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||l&&f&&s(f)?(t===null&&(t=new _r(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let h=0,c=6;for(let l=0;l<c;l++)o[l]!==void 0&&h++;return h===c}function r(o){let h=o.target;h.removeEventListener("dispose",r);let c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function N_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function h(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let C=f.array;_=f.version;for(let I=0,E=C.length;I<E;I+=3){let R=C[I+0],P=C[I+1],U=C[I+2];d.push(R,P,P,U,U,R)}}else if(g!==void 0){let C=g.array;_=g.version;for(let I=0,E=C.length/3-1;I<E;I+=3){let R=I+0,P=I+1,U=I+2;d.push(R,P,P,U,U,R)}}else return;let m=new(dh(d)?qr:Xr)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function l(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:h,getWireframeAttribute:l}}function U_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function h(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function l(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let C=0;C<g;C++)p+=f[C]*_[C];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function F_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function O_(i,e,t){let n=new WeakMap,s=new St;function r(a,o,h){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],I=0;f===!0&&(I=1),g===!0&&(I=2),_===!0&&(I=3);let E=o.attributes.position.count*I,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let P=new Float32Array(E*R*4*u),U=new Gr(P,E,R,u);U.type=kn,U.needsUpdate=!0;let F=I*4;for(let S=0;S<u;S++){let N=m[S],B=p[S],W=C[S],J=E*R*4*S;for(let K=0;K<N.count;K++){let k=K*F;f===!0&&(s.fromBufferAttribute(N,K),P[J+k+0]=s.x,P[J+k+1]=s.y,P[J+k+2]=s.z,P[J+k+3]=0),g===!0&&(s.fromBufferAttribute(B,K),P[J+k+4]=s.x,P[J+k+5]=s.y,P[J+k+6]=s.z,P[J+k+7]=0),_===!0&&(s.fromBufferAttribute(W,K),P[J+k+8]=s.x,P[J+k+9]=s.y,P[J+k+10]=s.z,P[J+k+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new Ze(E,R)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B_(i,e,t,n){let s=new WeakMap;function r(h){let c=n.render.frame,l=h.geometry,u=e.get(h,l);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==c&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Qd=new on,Ud=new to(1,1),ef=new Gr,tf=new Sa,nf=new Yr,Fd=[],Od=[],Bd=new Float32Array(16),kd=new Float32Array(9),zd=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uc(i,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),Yt(t,n)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;kd.set(n),i.uniformMatrix3fv(this.addr,!1,kd),Yt(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),Yt(t,n)}}function q_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function e0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ud.compareFunction=lh,r=Ud):r=Qd,t.setTexture2D(e||r,s)}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tf,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nf,s)}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ef,s)}function s0(i){switch(i){case 5126:return k_;case 35664:return z_;case 35665:return V_;case 35666:return H_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return j_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return Z_;case 36295:return K_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,e){i.uniform1fv(this.addr,e)}function o0(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function a0(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function l0(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h0(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u0(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d0(i,e){i.uniform1iv(this.addr,e)}function f0(i,e){i.uniform2iv(this.addr,e)}function p0(i,e){i.uniform3iv(this.addr,e)}function m0(i,e){i.uniform4iv(this.addr,e)}function g0(i,e){i.uniform1uiv(this.addr,e)}function _0(i,e){i.uniform2uiv(this.addr,e)}function x0(i,e){i.uniform3uiv(this.addr,e)}function y0(i,e){i.uniform4uiv(this.addr,e)}function v0(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Qd,r[a])}function b0(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tf,r[a])}function M0(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nf,r[a])}function S0(i,e,t){let n=this.cache,s=e.length,r=Uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ef,r[a])}function E0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return c0;case 35674:return l0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function Vd(i,e){i.seq.push(e),i.map[e.id]=e}function w0(i,e,t){let n=i.name,s=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),a=Mh.lastIndex,o=r[1],h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){Vd(t,c===void 0?new Sh(o,i,e):new Eh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wh(o),Vd(t,u)),t=u}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);w0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Hd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var T0=37297,A0=0;function C0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Gd=new ht;function R0(i){mt._getMatrix(Gd,mt.workingColorSpace,i);let e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+C0(i.getShaderSource(e),o)}else return r}function I0(i,e){let t=R0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P0(i,e){let t;switch(e){case rd:t="Linear";break;case od:t="Reinhard";break;case ad:t="Cineon";break;case Xa:t="ACESFilmic";break;case ld:t="AgX";break;case hd:t="Neutral";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new D;function L0(){mt.getLuminanceCoefficients(Nc);let i=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function D0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bo(i){return i!==""}function Xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(i){return i.replace(F0,B0)}var O0=new Map;function B0(i,e){let t=dt[e];if(t===void 0){let n=O0.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}var k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(k0,z0)}function z0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function H0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function W0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fo:e="ENVMAP_BLENDING_MULTIPLY";break;case id:e="ENVMAP_BLENDING_MIX";break;case sd:e="ENVMAP_BLENDING_ADD";break}return e}function X0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function q0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,h=V0(t),c=H0(t),l=G0(t),u=W0(t),d=X0(t),f=N0(t),g=D0(r),_=s.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(m=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?dt.tonemapping_pars_fragment:"",t.toneMapping!==Li?P0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),L0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),a=Th(a),a=Xd(a,t),a=qd(a,t),o=Th(o),o=Xd(o,t),o=qd(o,t),a=jd(a),o=jd(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=C+m+a,E=C+p+o,R=Hd(s,s.VERTEX_SHADER,I),P=Hd(s,s.FRAGMENT_SHADER,E);s.attachShader(_,R),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function U(N){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(R)||"",J=s.getShaderInfoLog(P)||"",K=B.trim(),k=W.trim(),se=J.trim(),X=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,P);else{let pe=Wd(s,R,"vertex"),ge=Wd(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+pe+`
`+ge)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(k===""||se==="")&&(oe=!1);oe&&(N.diagnostics={runnable:X,programLog:K,vertexShader:{log:k,prefix:m},fragmentShader:{log:se,prefix:p}})}s.deleteShader(R),s.deleteShader(P),F=new gr(s,_),v=U0(s,_)}let F;this.getUniforms=function(){return F===void 0&&U(this),F};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,T0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=P,this}var j0=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ch(e),t.set(e,n)),n}},Ch=class{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}};function Y0(i,e,t,n,s,r,a){let o=new Wr,h=new Ah,c=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,N,B,W){let J=B.fog,K=W.geometry,k=v.isMeshStandardMaterial?B.environment:null,se=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),X=se&&se.mapping===po?se.image.height:null,oe=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ge=pe!==void 0?pe.length:0,Ie=0;K.morphAttributes.position!==void 0&&(Ie=1),K.morphAttributes.normal!==void 0&&(Ie=2),K.morphAttributes.color!==void 0&&(Ie=3);let Ae,Te,ye,V;if(oe){let lt=ci[oe];Ae=lt.vertexShader,Te=lt.fragmentShader}else Ae=v.vertexShader,Te=v.fragmentShader,h.update(v),ye=h.getVertexShaderID(v),V=h.getFragmentShaderID(v);let Y=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),He=W.isInstancedMesh===!0,De=W.isBatchedMesh===!0,gt=!!v.map,Jt=!!v.matcap,O=!!se,Pt=!!v.aoMap,st=!!v.lightMap,Ke=!!v.bumpMap,Ue=!!v.normalMap,Lt=!!v.displacementMap,Oe=!!v.emissiveMap,at=!!v.metalnessMap,Gt=!!v.roughnessMap,Bt=v.anisotropy>0,L=v.clearcoat>0,b=v.dispersion>0,q=v.iridescence>0,ie=v.sheen>0,ae=v.transmission>0,te=Bt&&!!v.anisotropyMap,Ge=L&&!!v.clearcoatMap,_e=L&&!!v.clearcoatNormalMap,Be=L&&!!v.clearcoatRoughnessMap,ke=q&&!!v.iridescenceMap,de=q&&!!v.iridescenceThicknessMap,Ee=ie&&!!v.sheenColorMap,Qe=ie&&!!v.sheenRoughnessMap,ze=!!v.specularMap,be=!!v.specularColorMap,rt=!!v.specularIntensityMap,z=ae&&!!v.transmissionMap,fe=ae&&!!v.thicknessMap,xe=!!v.gradientMap,Pe=!!v.alphaMap,le=v.alphaTest>0,re=!!v.alphaHash,Fe=!!v.extensions,it=Li;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(it=i.toneMapping);let Ct={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Ae,fragmentShader:Te,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:De,batchingColor:De&&W._colorsTexture!==null,instancing:He,instancingColor:He&&W.instanceColor!==null,instancingMorph:He&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:us,alphaToCoverage:!!v.alphaToCoverage,map:gt,matcap:Jt,envMap:O,envMapMode:O&&se.mapping,envMapCubeUVHeight:X,aoMap:Pt,lightMap:st,bumpMap:Ke,normalMap:Ue,displacementMap:d&&Lt,emissiveMap:Oe,normalMapObjectSpace:Ue&&v.normalMapType===gd,normalMapTangentSpace:Ue&&v.normalMapType===vo,metalnessMap:at,roughnessMap:Gt,anisotropy:Bt,anisotropyMap:te,clearcoat:L,clearcoatMap:Ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:Be,dispersion:b,iridescence:q,iridescenceMap:ke,iridescenceThicknessMap:de,sheen:ie,sheenColorMap:Ee,sheenRoughnessMap:Qe,specularMap:ze,specularColorMap:be,specularIntensityMap:rt,transmission:ae,transmissionMap:z,thicknessMap:fe,gradientMap:xe,opaque:v.transparent===!1&&v.blending===ls&&v.alphaToCoverage===!1,alphaMap:Pe,alphaTest:le,alphaHash:re,combine:v.combine,mapUv:gt&&_(v.map.channel),aoMapUv:Pt&&_(v.aoMap.channel),lightMapUv:st&&_(v.lightMap.channel),bumpMapUv:Ke&&_(v.bumpMap.channel),normalMapUv:Ue&&_(v.normalMap.channel),displacementMapUv:Lt&&_(v.displacementMap.channel),emissiveMapUv:Oe&&_(v.emissiveMap.channel),metalnessMapUv:at&&_(v.metalnessMap.channel),roughnessMapUv:Gt&&_(v.roughnessMap.channel),anisotropyMapUv:te&&_(v.anisotropyMap.channel),clearcoatMapUv:Ge&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&_(v.sheenRoughnessMap.channel),specularMapUv:ze&&_(v.specularMap.channel),specularColorMapUv:be&&_(v.specularColorMap.channel),specularIntensityMapUv:rt&&_(v.specularIntensityMap.channel),transmissionMapUv:z&&_(v.transmissionMap.channel),thicknessMapUv:fe&&_(v.thicknessMap.channel),alphaMapUv:Pe&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ue||Bt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(gt||Pe),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:gt&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===At,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&mt.getTransfer(v.emissiveMap.colorSpace)===At,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(C(S,v),I(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function C(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function I(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){let S=g[v.type],N;if(S){let B=ci[S];N=Ad.clone(B.uniforms)}else N=v.uniforms;return N}function R(v,S){let N;for(let B=0,W=l.length;B<W;B++){let J=l[B];if(J.cacheKey===S){N=J,++N.usedTimes;break}}return N===void 0&&(N=new q0(i,S,v,r),l.push(N)),N}function P(v){if(--v.usedTimes===0){let S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function U(v){h.remove(v)}function F(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:P,releaseShaderCache:U,programs:l,dispose:F}}function $0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function J0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $d(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function h(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||J0),n.length>1&&n.sort(d||$d),s.length>1&&s.sort(d||$d)}function l(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:l,sort:c}}function Z0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Jd,i.set(n,[a])):s>=r.length?(a=new Jd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function K0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ex=0;function tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nx(i){let e=new K0,t=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new nt,a=new nt;function o(c){let l=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,C=0,I=0,E=0,R=0,P=0,U=0;c.sort(tx);for(let v=0,S=c.length;v<S;v++){let N=c[v],B=N.color,W=N.intensity,J=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=B.r*W,u+=B.g*W,d+=B.b*W;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],W);U++}else if(N.isDirectionalLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let se=N.shadow,X=t.get(N);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=N.shadow.matrix,C++}n.directional[f]=k,f++}else if(N.isSpotLight){let k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(B).multiplyScalar(W),k.distance=J,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[_]=k;let se=N.shadow;if(N.map&&(n.spotLightMap[R]=N.map,R++,se.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[_]=se.matrix,N.castShadow){let X=t.get(N);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=K,E++}_++}else if(N.isRectAreaLight){let k=e.get(N);k.color.copy(B).multiplyScalar(W),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=k,m++}else if(N.isPointLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){let se=N.shadow,X=t.get(N);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=N.shadow.matrix,I++}n.point[g]=k,g++}else if(N.isHemisphereLight){let k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(W),k.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==C||F.numPointShadows!==I||F.numSpotShadows!==E||F.numSpotMaps!==R||F.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=E+R-P,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=C,F.numPointShadows=I,F.numSpotShadows=E,F.numSpotMaps=R,F.numLightProbes=U,n.version=ex++)}function h(c,l){let u=0,d=0,f=0,g=0,_=0,m=l.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){let I=c[p];if(I.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(I.isSpotLight){let E=n.spot[f];E.position.setFromMatrixPosition(I.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(I.isRectAreaLight){let E=n.rectArea[g];E.position.setFromMatrixPosition(I.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(I.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(I.width*.5,0,0),E.halfHeight.set(0,I.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(I.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(I.matrixWorld),E.position.applyMatrix4(m),d++}else if(I.isHemisphereLight){let E=n.hemi[_];E.direction.setFromMatrixPosition(I.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:h,state:n}}function Zd(i){let e=new nx(i),t=[],n=[];function s(l){c.camera=l,t.length=0,n.length=0}function r(l){t.push(l)}function a(l){n.push(l)}function o(){e.setup(t)}function h(l){e.setupView(t,l)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function ix(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Zd(i),e.set(s,[o])):r>=a.length?(o=new Zd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ox(i,e,t){let n=new or,s=new Ze,r=new Ze,a=new St,o=new Ra({depthPacking:md}),h=new Ia,c={},l=t.maxTextureSize,u={[qn]:nn,[nn]:qn,[Bn]:Bn},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(P,U,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let v=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=p!==ai&&this.type===ai,J=p===ai&&this.type!==ai;for(let K=0,k=P.length;K<k;K++){let se=P[K],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let oe=X.getFrameExtents();if(s.multiply(oe),r.copy(X.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/oe.x),s.x=r.x*oe.x,X.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/oe.y),s.y=r.y*oe.y,X.mapSize.y=r.y)),X.map===null||W===!0||J===!0){let ge=this.type!==ai?{minFilter:xn,magFilter:xn}:{};X.map!==null&&X.map.dispose(),X.map=new si(s.x,s.y,ge),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let pe=X.getViewportCount();for(let ge=0;ge<pe;ge++){let Ie=X.getViewport(ge);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(a),X.updateMatrices(se,ge),n=X.getFrustum(),E(U,F,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===ai&&C(X,F),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,N)};function C(P,U){let F=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(U,null,F,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(U,null,F,f,_,null)}function I(P,U,F,v){let S=null,N=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)S=N;else if(S=F.isPointLight===!0?h:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let B=S.uuid,W=U.uuid,J=c[B];J===void 0&&(J={},c[B]=J);let K=J[W];K===void 0&&(K=S.clone(),J[W]=K,U.addEventListener("dispose",R)),S=K}if(S.visible=U.visible,S.wireframe=U.wireframe,v===ai?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:u[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=F}return S}function E(P,U,F,v,S){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ai)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let W=e.update(P),J=P.material;if(Array.isArray(J)){let K=W.groups;for(let k=0,se=K.length;k<se;k++){let X=K[k],oe=J[X.materialIndex];if(oe&&oe.visible){let pe=I(P,oe,v,S);P.onBeforeShadow(i,P,U,F,W,pe,X),i.renderBufferDirect(F,null,W,pe,P,X),P.onAfterShadow(i,P,U,F,W,pe,X)}}}else if(J.visible){let K=I(P,J,v,S);P.onBeforeShadow(i,P,U,F,W,K,null),i.renderBufferDirect(F,null,W,K,P,null),P.onAfterShadow(i,P,U,F,W,K,null)}}let B=P.children;for(let W=0,J=B.length;W<J;W++)E(B[W],U,F,v,S)}function R(P){P.target.removeEventListener("dispose",R);for(let F in c){let v=c[F],S=P.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}var ax={[Ba]:ka,[za]:Ga,[Va]:Wa,[hs]:Ha,[ka]:Ba,[Ga]:za,[Wa]:Va,[Ha]:hs};function cx(i,e){function t(){let z=!1,fe=new St,xe=null,Pe=new St(0,0,0,0);return{setMask:function(le){xe!==le&&!z&&(i.colorMask(le,le,le,le),xe=le)},setLocked:function(le){z=le},setClear:function(le,re,Fe,it,Ct){Ct===!0&&(le*=it,re*=it,Fe*=it),fe.set(le,re,Fe,it),Pe.equals(fe)===!1&&(i.clearColor(le,re,Fe,it),Pe.copy(fe))},reset:function(){z=!1,xe=null,Pe.set(-1,0,0,0)}}}function n(){let z=!1,fe=!1,xe=null,Pe=null,le=null;return{setReversed:function(re){if(fe!==re){let Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=re;let it=le;le=null,this.setClear(it)}},getReversed:function(){return fe},setTest:function(re){re?Y(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(re){xe!==re&&!z&&(i.depthMask(re),xe=re)},setFunc:function(re){if(fe&&(re=ax[re]),Pe!==re){switch(re){case Ba:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=re}},setLocked:function(re){z=re},setClear:function(re){le!==re&&(fe&&(re=1-re),i.clearDepth(re),le=re)},reset:function(){z=!1,xe=null,Pe=null,le=null,fe=!1}}}function s(){let z=!1,fe=null,xe=null,Pe=null,le=null,re=null,Fe=null,it=null,Ct=null;return{setTest:function(lt){z||(lt?Y(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!z&&(i.stencilMask(lt),fe=lt)},setFunc:function(lt,Pn,Ln){(xe!==lt||Pe!==Pn||le!==Ln)&&(i.stencilFunc(lt,Pn,Ln),xe=lt,Pe=Pn,le=Ln)},setOp:function(lt,Pn,Ln){(re!==lt||Fe!==Pn||it!==Ln)&&(i.stencilOp(lt,Pn,Ln),re=lt,Fe=Pn,it=Ln)},setLocked:function(lt){z=lt},setClear:function(lt){Ct!==lt&&(i.clearStencil(lt),Ct=lt)},reset:function(){z=!1,fe=null,xe=null,Pe=null,le=null,re=null,Fe=null,it=null,Ct=null}}}let r=new t,a=new n,o=new s,h=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,C=null,I=null,E=null,R=null,P=null,U=new Xe(0,0,0),F=0,v=!1,S=null,N=null,B=null,W=null,J=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=se>=2);let oe=null,pe={},ge=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Ae=new St().fromArray(ge),Te=new St().fromArray(Ie);function ye(z,fe,xe,Pe){let le=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<xe;Fe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(fe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return re}let V={};V[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(hs),Ke(!1),Ue(Jl),Y(i.CULL_FACE),Pt(Pi);function Y(z){l[z]!==!0&&(i.enable(z),l[z]=!0)}function me(z){l[z]!==!1&&(i.disable(z),l[z]=!1)}function He(z,fe){return u[z]!==fe?(i.bindFramebuffer(z,fe),u[z]=fe,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function De(z,fe){let xe=f,Pe=!1;if(z){xe=d.get(fe),xe===void 0&&(xe=[],d.set(fe,xe));let le=z.textures;if(xe.length!==le.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Fe=le.length;re<Fe;re++)xe[re]=i.COLOR_ATTACHMENT0+re;xe.length=le.length,Pe=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(xe)}function gt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let Jt={[Wi]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[Vu]:i.FUNC_REVERSE_SUBTRACT};Jt[Hu]=i.MIN,Jt[Gu]=i.MAX;let O={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(z,fe,xe,Pe,le,re,Fe,it,Ct,lt){if(z===Pi){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(Y(i.BLEND),_=!0),z!==ku){if(z!==m||lt!==v){if((p!==Wi||E!==Wi)&&(i.blendEquation(i.FUNC_ADD),p=Wi,E=Wi),lt)switch(z){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,I=null,R=null,P=null,U.set(0,0,0),F=0,m=z,v=lt}return}le=le||fe,re=re||xe,Fe=Fe||Pe,(fe!==p||le!==E)&&(i.blendEquationSeparate(Jt[fe],Jt[le]),p=fe,E=le),(xe!==C||Pe!==I||re!==R||Fe!==P)&&(i.blendFuncSeparate(O[xe],O[Pe],O[re],O[Fe]),C=xe,I=Pe,R=re,P=Fe),(it.equals(U)===!1||Ct!==F)&&(i.blendColor(it.r,it.g,it.b,Ct),U.copy(it),F=Ct),m=z,v=!1}function st(z,fe){z.side===Bn?me(i.CULL_FACE):Y(i.CULL_FACE);let xe=z.side===nn;fe&&(xe=!xe),Ke(xe),z.blending===ls&&z.transparent===!1?Pt(Pi):Pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Pe=z.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function Ue(z){z!==Ou?(Y(i.CULL_FACE),z!==N&&(z===Jl?i.cullFace(i.BACK):z===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),N=z}function Lt(z){z!==B&&(k&&i.lineWidth(z),B=z)}function Oe(z,fe,xe){z?(Y(i.POLYGON_OFFSET_FILL),(W!==fe||J!==xe)&&(i.polygonOffset(fe,xe),W=fe,J=xe)):me(i.POLYGON_OFFSET_FILL)}function at(z){z?Y(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Gt(z){z===void 0&&(z=i.TEXTURE0+K-1),oe!==z&&(i.activeTexture(z),oe=z)}function Bt(z,fe,xe){xe===void 0&&(oe===null?xe=i.TEXTURE0+K-1:xe=oe);let Pe=pe[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},pe[xe]=Pe),(Pe.type!==z||Pe.texture!==fe)&&(oe!==xe&&(i.activeTexture(xe),oe=xe),i.bindTexture(z,fe||V[z]),Pe.type=z,Pe.texture=fe)}function L(){let z=pe[oe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){Ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ae.copy(z))}function Qe(z){Te.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function ze(z,fe){let xe=c.get(fe);xe===void 0&&(xe=new WeakMap,c.set(fe,xe));let Pe=xe.get(z);Pe===void 0&&(Pe=i.getUniformBlockIndex(fe,z.name),xe.set(z,Pe))}function be(z,fe){let Pe=c.get(fe).get(z);h.get(fe)!==Pe&&(i.uniformBlockBinding(fe,Pe,z.__bindingPointIndex),h.set(fe,Pe))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},oe=null,pe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,C=null,I=null,E=null,R=null,P=null,U=new Xe(0,0,0),F=0,v=!1,S=null,N=null,B=null,W=null,J=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:me,bindFramebuffer:He,drawBuffers:De,useProgram:gt,setBlending:Pt,setMaterial:st,setFlipSided:Ke,setCullFace:Ue,setLineWidth:Lt,setPolygonOffset:Oe,setScissorTest:at,activeTexture:Gt,bindTexture:Bt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:ke,texImage3D:de,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:_e,texStorage3D:Be,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:te,compressedTexSubImage3D:Ge,scissor:Ee,viewport:Qe,reset:rt}}function lx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):er("canvas")}function _(L,b,q){let ie=1,ae=Bt(L);if((ae.width>q||ae.height>q)&&(ie=q/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let te=Math.floor(ie*ae.width),Ge=Math.floor(ie*ae.height);u===void 0&&(u=g(te,Ge));let _e=b?g(te,Ge):u;return _e.width=te,_e.height=Ge,_e.getContext("2d").drawImage(L,0,0,te,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Ge+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(L,b,q,ie,ae=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=b;if(b===i.RED&&(q===i.FLOAT&&(te=i.R32F),q===i.HALF_FLOAT&&(te=i.R16F),q===i.UNSIGNED_BYTE&&(te=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.R8UI),q===i.UNSIGNED_SHORT&&(te=i.R16UI),q===i.UNSIGNED_INT&&(te=i.R32UI),q===i.BYTE&&(te=i.R8I),q===i.SHORT&&(te=i.R16I),q===i.INT&&(te=i.R32I)),b===i.RG&&(q===i.FLOAT&&(te=i.RG32F),q===i.HALF_FLOAT&&(te=i.RG16F),q===i.UNSIGNED_BYTE&&(te=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RG8UI),q===i.UNSIGNED_SHORT&&(te=i.RG16UI),q===i.UNSIGNED_INT&&(te=i.RG32UI),q===i.BYTE&&(te=i.RG8I),q===i.SHORT&&(te=i.RG16I),q===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RGB8UI),q===i.UNSIGNED_SHORT&&(te=i.RGB16UI),q===i.UNSIGNED_INT&&(te=i.RGB32UI),q===i.BYTE&&(te=i.RGB8I),q===i.SHORT&&(te=i.RGB16I),q===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),q===i.UNSIGNED_INT&&(te=i.RGBA32UI),q===i.BYTE&&(te=i.RGBA8I),q===i.SHORT&&(te=i.RGBA16I),q===i.INT&&(te=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),b===i.RGBA){let Ge=ae?Vr:mt.getTransfer(ie);q===i.FLOAT&&(te=i.RGBA32F),q===i.HALF_FLOAT&&(te=i.RGBA16F),q===i.UNSIGNED_BYTE&&(te=Ge===At?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function E(L,b){let q;return L?b===null||b===$i||b===dr?q=i.DEPTH24_STENCIL8:b===kn?q=i.DEPTH32F_STENCIL8:b===hr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===dr?q=i.DEPTH_COMPONENT24:b===kn?q=i.DEPTH_COMPONENT32F:b===hr&&(q=i.DEPTH_COMPONENT16),q}function R(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){let b=L.target;b.removeEventListener("dispose",P),F(b),b.isVideoTexture&&l.delete(b)}function U(L){let b=L.target;b.removeEventListener("dispose",U),S(b)}function F(L){let b=n.get(L);if(b.__webglInit===void 0)return;let q=L.source,ie=d.get(q);if(ie){let ae=ie[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&v(L),Object.keys(ie).length===0&&d.delete(q)}n.remove(L)}function v(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let q=L.source,ie=d.get(q);delete ie[b.__cacheKey],a.memory.textures--}function S(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let ae=0;ae<b.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(b.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=L.textures;for(let ie=0,ae=q.length;ie<ae;ie++){let te=n.get(q[ie]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(q[ie])}n.remove(L)}let N=0;function B(){N=0}function W(){let L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function J(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function K(L,b){let q=n.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(q,L,b);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function k(L,b){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){V(q,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function se(L,b){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){V(q,L,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function X(L,b){let q=n.get(L);if(L.version>0&&q.__version!==L.version){Y(q,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let oe={[jn]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},pe={[xn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},ge={[_d]:i.NEVER,[Sd]:i.ALWAYS,[xd]:i.LESS,[lh]:i.LEQUAL,[yd]:i.EQUAL,[Md]:i.GEQUAL,[vd]:i.GREATER,[bd]:i.NOTEQUAL};function Ie(L,b){if(b.type===kn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===Ya||b.magFilter===mo||b.magFilter===Zn||b.minFilter===_n||b.minFilter===Ya||b.minFilter===mo||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,oe[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,oe[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,oe[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,pe[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,pe[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==mo&&b.minFilter!==Zn||b.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));let ie=b.source,ae=d.get(ie);ae===void 0&&(ae={},d.set(ie,ae));let te=J(b);if(te!==L.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[te].usedTimes++;let Ge=ae[L.__cacheKey];Ge!==void 0&&(ae[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&v(b)),L.__cacheKey=te,L.__webglTexture=ae[te].texture}return q}function Te(L,b,q){return Math.floor(Math.floor(L/q)/b)}function ye(L,b,q,ie){let te=L.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,ie,b.data);else{te.sort((de,Ee)=>de.start-Ee.start);let Ge=0;for(let de=1;de<te.length;de++){let Ee=te[Ge],Qe=te[de],ze=Ee.start+Ee.count,be=Te(Qe.start,b.width,4),rt=Te(Ee.start,b.width,4);Qe.start<=ze+1&&be===rt&&Te(Qe.start+Qe.count-1,b.width,4)===be?Ee.count=Math.max(Ee.count,Qe.start+Qe.count-Ee.start):(++Ge,te[Ge]=Qe)}te.length=Ge+1;let _e=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let de=0,Ee=te.length;de<Ee;de++){let Qe=te[de],ze=Math.floor(Qe.start/4),be=Math.ceil(Qe.count/4),rt=ze%b.width,z=Math.floor(ze/b.width),fe=be,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,rt,z,fe,xe,q,ie,b.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function V(L,b,q){let ie=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=i.TEXTURE_3D);let ae=Ae(L,b),te=b.source;t.bindTexture(ie,L.__webglTexture,i.TEXTURE0+q);let Ge=n.get(te);if(te.version!==Ge.__version||ae===!0){t.activeTexture(i.TEXTURE0+q);let _e=mt.getPrimaries(mt.workingColorSpace),Be=b.colorSpace===Ni?null:mt.getPrimaries(b.colorSpace),ke=b.colorSpace===Ni||_e===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=_(b.image,!1,s.maxTextureSize);de=Gt(b,de);let Ee=r.convert(b.format,b.colorSpace),Qe=r.convert(b.type),ze=I(b.internalFormat,Ee,Qe,b.colorSpace,b.isVideoTexture);Ie(ie,b);let be,rt=b.mipmaps,z=b.isVideoTexture!==!0,fe=Ge.__version===void 0||ae===!0,xe=te.dataReady,Pe=R(b,de);if(b.isDepthTexture)ze=E(b.format===fr,b.type),fe&&(z?t.texStorage2D(i.TEXTURE_2D,1,ze,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,ze,de.width,de.height,0,Ee,Qe,null));else if(b.isDataTexture)if(rt.length>0){z&&fe&&t.texStorage2D(i.TEXTURE_2D,Pe,ze,rt[0].width,rt[0].height);for(let le=0,re=rt.length;le<re;le++)be=rt[le],z?xe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,Ee,Qe,be.data):t.texImage2D(i.TEXTURE_2D,le,ze,be.width,be.height,0,Ee,Qe,be.data);b.generateMipmaps=!1}else z?(fe&&t.texStorage2D(i.TEXTURE_2D,Pe,ze,de.width,de.height),xe&&ye(b,de,Ee,Qe)):t.texImage2D(i.TEXTURE_2D,0,ze,de.width,de.height,0,Ee,Qe,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ze,rt[0].width,rt[0].height,de.depth);for(let le=0,re=rt.length;le<re;le++)if(be=rt[le],b.format!==Cn)if(Ee!==null)if(z){if(xe)if(b.layerUpdates.size>0){let Fe=gh(be.width,be.height,b.format,b.type);for(let it of b.layerUpdates){let Ct=be.data.subarray(it*Fe/be.data.BYTES_PER_ELEMENT,(it+1)*Fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,it,be.width,be.height,1,Ee,Ct)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,de.depth,Ee,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ze,be.width,be.height,de.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,de.depth,Ee,Qe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ze,be.width,be.height,de.depth,0,Ee,Qe,be.data)}else{z&&fe&&t.texStorage2D(i.TEXTURE_2D,Pe,ze,rt[0].width,rt[0].height);for(let le=0,re=rt.length;le<re;le++)be=rt[le],b.format!==Cn?Ee!==null?z?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?xe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,Ee,Qe,be.data):t.texImage2D(i.TEXTURE_2D,le,ze,be.width,be.height,0,Ee,Qe,be.data)}else if(b.isDataArrayTexture)if(z){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ze,de.width,de.height,de.depth),xe)if(b.layerUpdates.size>0){let le=gh(de.width,de.height,b.format,b.type);for(let re of b.layerUpdates){let Fe=de.data.subarray(re*le/de.data.BYTES_PER_ELEMENT,(re+1)*le/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,de.width,de.height,1,Ee,Qe,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ee,Qe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,de.width,de.height,de.depth,0,Ee,Qe,de.data);else if(b.isData3DTexture)z?(fe&&t.texStorage3D(i.TEXTURE_3D,Pe,ze,de.width,de.height,de.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ee,Qe,de.data)):t.texImage3D(i.TEXTURE_3D,0,ze,de.width,de.height,de.depth,0,Ee,Qe,de.data);else if(b.isFramebufferTexture){if(fe)if(z)t.texStorage2D(i.TEXTURE_2D,Pe,ze,de.width,de.height);else{let le=de.width,re=de.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ze,le,re,0,Ee,Qe,null),le>>=1,re>>=1}}else if(rt.length>0){if(z&&fe){let le=Bt(rt[0]);t.texStorage2D(i.TEXTURE_2D,Pe,ze,le.width,le.height)}for(let le=0,re=rt.length;le<re;le++)be=rt[le],z?xe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ee,Qe,be):t.texImage2D(i.TEXTURE_2D,le,ze,Ee,Qe,be);b.generateMipmaps=!1}else if(z){if(fe){let le=Bt(de);t.texStorage2D(i.TEXTURE_2D,Pe,ze,le.width,le.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Qe,de)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,Qe,de);m(b)&&p(ie),Ge.__version=te.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Y(L,b,q){if(b.image.length!==6)return;let ie=Ae(L,b),ae=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let te=n.get(ae);if(ae.version!==te.__version||ie===!0){t.activeTexture(i.TEXTURE0+q);let Ge=mt.getPrimaries(mt.workingColorSpace),_e=b.colorSpace===Ni?null:mt.getPrimaries(b.colorSpace),Be=b.colorSpace===Ni||Ge===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ke=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let re=0;re<6;re++)!ke&&!de?Ee[re]=_(b.image[re],!0,s.maxCubemapSize):Ee[re]=de?b.image[re].image:b.image[re],Ee[re]=Gt(b,Ee[re]);let Qe=Ee[0],ze=r.convert(b.format,b.colorSpace),be=r.convert(b.type),rt=I(b.internalFormat,ze,be,b.colorSpace),z=b.isVideoTexture!==!0,fe=te.__version===void 0||ie===!0,xe=ae.dataReady,Pe=R(b,Qe);Ie(i.TEXTURE_CUBE_MAP,b);let le;if(ke){z&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,rt,Qe.width,Qe.height);for(let re=0;re<6;re++){le=Ee[re].mipmaps;for(let Fe=0;Fe<le.length;Fe++){let it=le[Fe];b.format!==Cn?ze!==null?z?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,it.width,it.height,ze,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,rt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,it.width,it.height,ze,be,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,rt,it.width,it.height,0,ze,be,it.data)}}}else{if(le=b.mipmaps,z&&fe){le.length>0&&Pe++;let re=Bt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,rt,re.width,re.height)}for(let re=0;re<6;re++)if(de){z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee[re].width,Ee[re].height,ze,be,Ee[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,rt,Ee[re].width,Ee[re].height,0,ze,be,Ee[re].data);for(let Fe=0;Fe<le.length;Fe++){let Ct=le[Fe].image[re].image;z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Ct.width,Ct.height,ze,be,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,rt,Ct.width,Ct.height,0,ze,be,Ct.data)}}else{z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,be,Ee[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,rt,ze,be,Ee[re]);for(let Fe=0;Fe<le.length;Fe++){let it=le[Fe];z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,ze,be,it.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,rt,ze,be,it.image[re])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),te.__version=ae.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function me(L,b,q,ie,ae,te){let Ge=r.convert(q.format,q.colorSpace),_e=r.convert(q.type),Be=I(q.internalFormat,Ge,_e,q.colorSpace),ke=n.get(b),de=n.get(q);if(de.__renderTarget=b,!ke.__hasExternalTextures){let Ee=Math.max(1,b.width>>te),Qe=Math.max(1,b.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,Be,Ee,Qe,b.depth,0,Ge,_e,null):t.texImage2D(ae,te,Be,Ee,Qe,0,Ge,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Oe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ae,de.__webglTexture,0,Lt(b)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ae,de.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(L,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let ie=b.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,te=E(b.stencilBuffer,ae),Ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=Lt(b);Oe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,te,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,L)}else{let ie=b.textures;for(let ae=0;ae<ie.length;ae++){let te=ie[ae],Ge=r.convert(te.format,te.colorSpace),_e=r.convert(te.type),Be=I(te.internalFormat,Ge,_e,te.colorSpace),ke=Lt(b);q&&Oe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Be,b.width,b.height):Oe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Be,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(b.depthTexture);ie.__renderTarget=b,(!ie.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);let ae=ie.__webglTexture,te=Lt(b);if(b.depthTexture.format===Qs)Oe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(b.depthTexture.format===fr)Oe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function gt(L){let b=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let ie=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){let ae=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),b.__depthDisposeCallback=ae}b.__boundDepthTexture=ie}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let ie=L.texture.mipmaps;ie&&ie.length>0?De(b.__webglFramebuffer[0],L):De(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=i.createRenderbuffer(),He(b.__webglDepthbuffer[ie],L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else{let ie=L.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),He(b.__webglDepthbuffer,L,!1);else{let ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(L,b,q){let ie=n.get(L);b!==void 0&&me(ie.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&gt(L)}function O(L){let b=L.texture,q=n.get(L),ie=n.get(b);L.addEventListener("dispose",U);let ae=L.textures,te=L.isWebGLCubeRenderTarget===!0,Ge=ae.length>1;if(Ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,a.memory.textures++),te){q.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[_e]=[];for(let Be=0;Be<b.mipmaps.length;Be++)q.__webglFramebuffer[_e][Be]=i.createFramebuffer()}else q.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)q.__webglFramebuffer[_e]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let _e=0,Be=ae.length;_e<Be;_e++){let ke=n.get(ae[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Oe(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let _e=0;_e<ae.length;_e++){let Be=ae[_e];q.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[_e]);let ke=r.convert(Be.format,Be.colorSpace),de=r.convert(Be.type),Ee=I(Be.internalFormat,ke,de,Be.colorSpace,L.isXRRenderTarget===!0),Qe=Lt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,q.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),He(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)me(q.__webglFramebuffer[_e][Be],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be);else me(q.__webglFramebuffer[_e],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let _e=0,Be=ae.length;_e<Be;_e++){let ke=ae[_e],de=n.get(ke),Ee=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,de.__webglTexture),Ie(Ee,ke),me(q.__webglFramebuffer,L,ke,i.COLOR_ATTACHMENT0+_e,Ee,0),m(ke)&&p(Ee)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ie.__webglTexture),Ie(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)me(q.__webglFramebuffer[Be],L,b,i.COLOR_ATTACHMENT0,_e,Be);else me(q.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,_e,0);m(b)&&p(_e),t.unbindTexture()}L.depthBuffer&&gt(L)}function Pt(L){let b=L.textures;for(let q=0,ie=b.length;q<ie;q++){let ae=b[q];if(m(ae)){let te=C(L),Ge=n.get(ae).__webglTexture;t.bindTexture(te,Ge),p(te),t.unbindTexture()}}}let st=[],Ke=[];function Ue(L){if(L.samples>0){if(Oe(L)===!1){let b=L.textures,q=L.width,ie=L.height,ae=i.COLOR_BUFFER_BIT,te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(L),_e=b.length>1;if(_e)for(let ke=0;ke<b.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let Be=L.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);let de=n.get(b[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,q,ie,0,0,q,ie,ae,i.NEAREST),h===!0&&(st.length=0,Ke.length=0,st.push(i.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(st.push(te),Ke.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let ke=0;ke<b.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);let de=n.get(b[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Lt(L){return Math.min(s.maxSamples,L.samples)}function Oe(L){let b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(L){let b=a.render.frame;l.get(L)!==b&&(l.set(L,b),L.update())}function Gt(L,b){let q=L.colorSpace,ie=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==us&&q!==Ni&&(mt.getTransfer(q)===At?(ie!==Cn||ae!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=Jt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Oe}function hx(i,e){function t(n,s=Ni){let r,a=mt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===Cn)return i.RGBA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===Ka)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===ch)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===yo)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===bc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===Ec||n===wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sc)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Ac||n===Cc||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new no(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yn({vertexShader:ux,fragmentShader:dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ih=class extends ii{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,c=null,l=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Rh,p={},C=t.getContextAttributes(),I=null,E=null,R=[],P=[],U=new Ze,F=null,v=new Vt;v.viewport=new St;let S=new Vt;S.viewport=new St;let N=[v,S],B=new Fa,W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=R[V];return Y===void 0&&(Y=new ir,R[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=R[V];return Y===void 0&&(Y=new ir,R[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=R[V];return Y===void 0&&(Y=new ir,R[V]=Y),Y.getHandSpace()};function K(V){let Y=P.indexOf(V.inputSource);if(Y===-1)return;let me=R[Y];me!==void 0&&(me.update(V.inputSource,V.frame,c||a),me.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",se);for(let V=0;V<R.length;V++){let Y=P[V];Y!==null&&(P[V]=null,R[V].disconnect(Y))}W=null,J=null,m.reset();for(let V in p)delete p[V];e.setRenderTarget(I),f=null,d=null,u=null,s=null,E=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",k),s.addEventListener("inputsourceschange",se),C.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(U),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,He=null,De=null;C.depth&&(De=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?fr:Qs,He=C.stencil?dr:$i);let gt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new si(d.textureWidth,d.textureHeight,{format:Cn,type:Kn,depthTexture:new to(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new si(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(V){for(let Y=0;Y<V.removed.length;Y++){let me=V.removed[Y],He=P.indexOf(me);He>=0&&(P[He]=null,R[He].disconnect(me))}for(let Y=0;Y<V.added.length;Y++){let me=V.added[Y],He=P.indexOf(me);if(He===-1){for(let gt=0;gt<R.length;gt++)if(gt>=P.length){P.push(me),He=gt;break}else if(P[gt]===null){P[gt]=me,He=gt;break}if(He===-1)break}let De=R[He];De&&De.connect(me)}}let X=new D,oe=new D;function pe(V,Y,me){X.setFromMatrixPosition(Y.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);let He=X.distanceTo(oe),De=Y.projectionMatrix.elements,gt=me.projectionMatrix.elements,Jt=De[14]/(De[10]-1),O=De[14]/(De[10]+1),Pt=(De[9]+1)/De[5],st=(De[9]-1)/De[5],Ke=(De[8]-1)/De[0],Ue=(gt[8]+1)/gt[0],Lt=Jt*Ke,Oe=Jt*Ue,at=He/(-Ke+Ue),Gt=at*-Ke;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Gt),V.translateZ(at),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),De[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Bt=Jt+at,L=O+at,b=Lt-Gt,q=Oe+(He-Gt),ie=Pt*O/L*Bt,ae=st*O/L*Bt;V.projectionMatrix.makePerspective(b,q,ie,ae,Bt,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ge(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Y=V.near,me=V.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(me=m.depthFar)),B.near=S.near=v.near=Y,B.far=S.far=v.far=me,(W!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,J=B.far),B.layers.mask=V.layers.mask|6,v.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let He=V.parent,De=B.cameras;ge(B,He);for(let gt=0;gt<De.length;gt++)ge(De[gt],He);De.length===2?pe(B,v,S):B.projectionMatrix.copy(v.projectionMatrix),Ie(V,B,He)};function Ie(V,Y,me){me===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(me.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ds*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(V){h=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(V){return p[V]};let Ae=null;function Te(V,Y){if(l=Y.getViewerPose(c||a),g=Y,l!==null){let me=l.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let He=!1;me.length!==B.cameras.length&&(B.cameras.length=0,He=!0);for(let O=0;O<me.length;O++){let Pt=me[O],st=null;if(f!==null)st=f.getViewport(Pt);else{let Ue=u.getViewSubImage(d,Pt);st=Ue.viewport,O===0&&(e.setRenderTargetTextures(E,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(E))}let Ke=N[O];Ke===void 0&&(Ke=new Vt,Ke.layers.enable(O),Ke.viewport=new St,N[O]=Ke),Ke.matrix.fromArray(Pt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Pt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(st.x,st.y,st.width,st.height),O===0&&(B.matrix.copy(Ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),He===!0&&B.cameras.push(Ke)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let O=u.getDepthInformation(me[0]);O&&O.isValid&&O.texture&&m.init(O,s.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<me.length;O++){let Pt=me[O].camera;if(Pt){let st=p[Pt];st||(st=new no,p[Pt]=st);let Ke=u.getCameraImage(Pt);st.sourceTexture=Ke}}}}for(let me=0;me<R.length;me++){let He=P[me],De=R[me];He!==null&&De!==void 0&&De.update(He,Y,c||a)}Ae&&Ae(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let ye=new Kd;ye.setAnimationLoop(Te),this.setAnimationLoop=function(V){Ae=V},this.dispose=function(){}}},Rs=new tn,fx=new nt;function px(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,I,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?h(m,p,C,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),I=C.envMap,E=C.envMapRotation;I&&(m.envMap.value=I,Rs.copy(E),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Rs)),m.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,C,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,I){let E=I.program;n.uniformBlockBinding(C,E)}function c(C,I){let E=s[C.id];E===void 0&&(g(C),E=l(C),s[C.id]=E,C.addEventListener("dispose",m));let R=I.program;n.updateUBOMapping(C,R);let P=e.render.frame;r[C.id]!==P&&(d(C),r[C.id]=P)}function l(C){let I=u();C.__bindingPointIndex=I;let E=i.createBuffer(),R=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,E),E}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let I=s[C.id],E=C.uniforms,R=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let P=0,U=E.length;P<U;P++){let F=Array.isArray(E[P])?E[P]:[E[P]];for(let v=0,S=F.length;v<S;v++){let N=F[v];if(f(N,P,v,R)===!0){let B=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],J=0;for(let K=0;K<W.length;K++){let k=W[K],se=_(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,B+J,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,J),J+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,I,E,R){let P=C.value,U=I+"_"+E;if(R[U]===void 0)return typeof P=="number"||typeof P=="boolean"?R[U]=P:R[U]=P.clone(),!0;{let F=R[U];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return R[U]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(C){let I=C.uniforms,E=0,R=16;for(let U=0,F=I.length;U<F;U++){let v=Array.isArray(I[U])?I[U]:[I[U]];for(let S=0,N=v.length;S<N;S++){let B=v[S],W=Array.isArray(B.value)?B.value:[B.value];for(let J=0,K=W.length;J<K;J++){let k=W[J],se=_(k),X=E%R,oe=X%se.boundary,pe=X+oe;E+=oe,pe!==0&&R-pe<se.storage&&(E+=R-pe),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=se.storage}}}let P=E%R;return P>0&&(E+=R-P),C.__size=E,C.__cache={},this}function _(C){let I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),I}function m(C){let I=C.target;I.removeEventListener("dispose",m);let E=a.indexOf(I.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function p(){for(let C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:h,update:c,dispose:p}}var Dc=class{constructor(e={}){let{canvas:t=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,C=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1;this._outputColorSpace=Mt;let P=0,U=0,F=null,v=-1,S=null,N=new St,B=new St,W=null,J=new Xe(0),K=0,k=t.width,se=t.height,X=1,oe=null,pe=null,ge=new St(0,0,k,se),Ie=new St(0,0,k,se),Ae=!1,Te=new or,ye=!1,V=!1,Y=new nt,me=new D,He=new St,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Jt(){return F===null?X:1}let O=n;function Pt(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){let H="webgl2";if(O=Pt(H,w),O===null)throw Pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,Ke,Ue,Lt,Oe,at,Gt,Bt,L,b,q,ie,ae,te,Ge,_e,Be,ke,de,Ee,Qe,ze,be,rt;function z(){st=new N_(O),st.init(),ze=new hx(O,st),Ke=new T_(O,st,e,ze),Ue=new cx(O,st),Ke.reversedDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),Lt=new F_(O),Oe=new $0,at=new lx(O,st,Ue,Oe,Ke,ze,Lt),Gt=new C_(E),Bt=new L_(E),L=new Hp(O),be=new E_(O,L),b=new D_(O,L,Lt,be),q=new B_(O,b,L,Lt),de=new O_(O,Ke,at),_e=new A_(Oe),ie=new Y0(E,Gt,Bt,st,Ke,be,_e),ae=new px(E,Oe),te=new Z0,Ge=new ix(st),ke=new S_(E,Gt,Bt,Ue,q,f,h),Be=new ox(E,q,Ke),rt=new mx(O,Lt,Ke,Ue),Ee=new w_(O,st,Lt),Qe=new U_(O,st,Lt),Lt.programs=ie.programs,E.capabilities=Ke,E.extensions=st,E.properties=Oe,E.renderLists=te,E.shadowMap=Be,E.state=Ue,E.info=Lt}z();let fe=new Ih(E,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(k,se,!1))},this.getSize=function(w){return w.set(k,se)},this.setSize=function(w,H,j=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,se=H,t.width=Math.floor(w*X),t.height=Math.floor(H*X),j===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(k*X,se*X).floor()},this.setDrawingBufferSize=function(w,H,j){k=w,se=H,X=j,t.width=Math.floor(w*j),t.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,H,j,$){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,H,j,$),Ue.viewport(N.copy(ge).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,H,j,$){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,H,j,$),Ue.scissor(B.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Ue.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,j=!0){let $=0;if(w){let G=!1;if(F!==null){let he=F.texture.format;G=he===tc||he===ec||he===Qa}if(G){let he=F.texture.type,Se=he===Kn||he===$i||he===hr||he===dr||he===Ja||he===Za,Le=ke.getClearColor(),Ce=ke.getClearAlpha(),Je=Le.r,et=Le.g,qe=Le.b;Se?(g[0]=Je,g[1]=et,g[2]=qe,g[3]=Ce,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Je,_[1]=et,_[2]=qe,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else $|=O.COLOR_BUFFER_BIT}H&&($|=O.DEPTH_BUFFER_BIT),j&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ke.dispose(),te.dispose(),Ge.dispose(),Oe.dispose(),Gt.dispose(),Bt.dispose(),q.dispose(),be.dispose(),rt.dispose(),ie.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ln),fe.removeEventListener("sessionend",Uo),di.stop()};function xe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Lt.autoReset,H=Be.enabled,j=Be.autoUpdate,$=Be.needsUpdate,G=Be.type;z(),Lt.autoReset=w,Be.enabled=H,Be.autoUpdate=j,Be.needsUpdate=$,Be.type=G}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){let H=w.target;H.removeEventListener("dispose",re),Fe(H)}function Fe(w){it(w),Oe.remove(w)}function it(w){let H=Oe.get(w).programs;H!==void 0&&(H.forEach(function(j){ie.releaseProgram(j)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,$,G,he){H===null&&(H=De);let Se=G.isMesh&&G.matrixWorld.determinant()<0,Le=sl(w,H,j,$,G);Ue.setMaterial($,Se);let Ce=j.index,Je=1;if($.wireframe===!0){if(Ce=b.getWireframeAttribute(j),Ce===void 0)return;Je=2}let et=j.drawRange,qe=j.attributes.position,ft=et.start*Je,_t=(et.start+et.count)*Je;he!==null&&(ft=Math.max(ft,he.start*Je),_t=Math.min(_t,(he.start+he.count)*Je)),Ce!==null?(ft=Math.max(ft,0),_t=Math.min(_t,Ce.count)):qe!=null&&(ft=Math.max(ft,0),_t=Math.min(_t,qe.count));let kt=_t-ft;if(kt<0||kt===1/0)return;be.setup(G,$,Le,j,Ce);let Rt,wt=Ee;if(Ce!==null&&(Rt=L.get(Ce),wt=Qe,wt.setIndex(Rt)),G.isMesh)$.wireframe===!0?(Ue.setLineWidth($.wireframeLinewidth*Jt()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(G.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),Ue.setLineWidth(Ye*Jt()),G.isLineSegments?wt.setMode(O.LINES):G.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else G.isPoints?wt.setMode(O.POINTS):G.isSprite&&wt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))wt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ye=G._multiDrawStarts,Nt=G._multiDrawCounts,xt=G._multiDrawCount,cn=Ce?L.get(Ce).bytesPerElement:1,fi=Oe.get($).currentProgram.getUniforms();for(let yt=0;yt<xt;yt++)fi.setValue(O,"_gl_DrawID",yt),wt.render(Ye[yt]/cn,Nt[yt])}else if(G.isInstancedMesh)wt.renderInstances(ft,kt,G.count);else if(j.isInstancedBufferGeometry){let Ye=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,Ye);wt.renderInstances(ft,kt,Nt)}else wt.render(ft,kt)};function Ct(w,H,j){w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,is(w,H,j),w.side=qn,w.needsUpdate=!0,is(w,H,j),w.side=Bn):is(w,H,j)}this.compile=function(w,H,j=null){j===null&&(j=w),p=Ge.get(j),p.init(H),I.push(p),j.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==j&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let $=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let he=G.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){let Le=he[Se];Ct(Le,j,G),$.add(Le)}else Ct(he,j,G),$.add(he)}),p=I.pop(),$},this.compileAsync=function(w,H,j=null){let $=this.compile(w,H,j);return new Promise(G=>{function he(){if($.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){G(w);return}setTimeout(he,10)}st.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let lt=null;function Pn(w){lt&&lt(w)}function Ln(){di.stop()}function Uo(){di.start()}let di=new Kd;di.setAnimationLoop(Pn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(w){lt=w,fe.setAnimationLoop(w),w===null?di.stop():di.start()},fe.addEventListener("sessionstart",Ln),fe.addEventListener("sessionend",Uo),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,H,F),p=Ge.get(w,I.length),p.init(H),I.push(p),Y.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Te.setFromProjectionMatrix(Y,Xn,H.reversedDepth),V=this.localClippingEnabled,ye=_e.init(this.clippingPlanes,V),m=te.get(w,C.length),m.init(),C.push(m),fe.enabled===!0&&fe.isPresenting===!0){let he=E.xr.getDepthSensingMesh();he!==null&&Ir(he,H,-1/0,E.sortObjects)}Ir(w,H,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(oe,pe),gt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,gt&&ke.addToRenderList(m,w),this.info.render.frame++,ye===!0&&_e.beginShadows();let j=p.state.shadowsArray;Be.render(j,w,H),ye===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){let he=H.cameras;if(G.length>0)for(let Se=0,Le=he.length;Se<Le;Se++){let Ce=he[Se];Oo($,G,w,Ce)}gt&&ke.render(w);for(let Se=0,Le=he.length;Se<Le;Se++){let Ce=he[Se];Fo(m,w,Ce,Ce.viewport)}}else G.length>0&&Oo($,G,w,H),gt&&ke.render(w),Fo(m,w,H);F!==null&&U===0&&(at.updateMultisampleRenderTarget(F),at.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(E,w,H),be.resetDefaultState(),v=-1,S=null,I.pop(),I.length>0?(p=I[I.length-1],ye===!0&&_e.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Ir(w,H,j,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Te.intersectsSprite(w)){$&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);let Se=q.update(w),Le=w.material;Le.visible&&m.push(w,Se,Le,j,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Te.intersectsObject(w))){let Se=q.update(w),Le=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),He.copy(Se.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(Y)),Array.isArray(Le)){let Ce=Se.groups;for(let Je=0,et=Ce.length;Je<et;Je++){let qe=Ce[Je],ft=Le[qe.materialIndex];ft&&ft.visible&&m.push(w,Se,ft,j,He.z,qe)}}else Le.visible&&m.push(w,Se,Le,j,He.z,null)}}let he=w.children;for(let Se=0,Le=he.length;Se<Le;Se++)Ir(he[Se],H,j,$)}function Fo(w,H,j,$){let G=w.opaque,he=w.transmissive,Se=w.transparent;p.setupLightsView(j),ye===!0&&_e.setGlobalState(E.clippingPlanes,j),$&&Ue.viewport(N.copy($)),G.length>0&&ns(G,H,j),he.length>0&&ns(he,H,j),Se.length>0&&ns(Se,H,j),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Oo(w,H,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new si(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ur:Kn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let he=p.state.transmissionRenderTarget[$.id],Se=$.viewport||N;he.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);let Le=E.getRenderTarget(),Ce=E.getActiveCubeFace(),Je=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(J),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),gt&&ke.render(j);let et=E.toneMapping;E.toneMapping=Li;let qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ye===!0&&_e.setGlobalState(E.clippingPlanes,$),ns(w,j,$),at.updateMultisampleRenderTarget(he),at.updateRenderTargetMipmap(he),st.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let _t=0,kt=H.length;_t<kt;_t++){let Rt=H[_t],wt=Rt.object,Ye=Rt.geometry,Nt=Rt.material,xt=Rt.group;if(Nt.side===Bn&&wt.layers.test($.layers)){let cn=Nt.side;Nt.side=nn,Nt.needsUpdate=!0,Bo(wt,j,$,Ye,Nt,xt),Nt.side=cn,Nt.needsUpdate=!0,ft=!0}}ft===!0&&(at.updateMultisampleRenderTarget(he),at.updateRenderTargetMipmap(he))}E.setRenderTarget(Le,Ce,Je),E.setClearColor(J,K),qe!==void 0&&($.viewport=qe),E.toneMapping=et}function ns(w,H,j){let $=H.isScene===!0?H.overrideMaterial:null;for(let G=0,he=w.length;G<he;G++){let Se=w[G],Le=Se.object,Ce=Se.geometry,Je=Se.group,et=Se.material;et.allowOverride===!0&&$!==null&&(et=$),Le.layers.test(j.layers)&&Bo(Le,H,j,Ce,et,Je)}}function Bo(w,H,j,$,G,he){w.onBeforeRender(E,H,j,$,G,he),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(E,H,j,$,w,he),G.transparent===!0&&G.side===Bn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,E.renderBufferDirect(j,H,$,G,w,he),G.side=qn,G.needsUpdate=!0,E.renderBufferDirect(j,H,$,G,w,he),G.side=Bn):E.renderBufferDirect(j,H,$,G,w,he),w.onAfterRender(E,H,j,$,G,he)}function is(w,H,j){H.isScene!==!0&&(H=De);let $=Oe.get(w),G=p.state.lights,he=p.state.shadowsArray,Se=G.state.version,Le=ie.getParameters(w,G.state,he,H,j),Ce=ie.getProgramCacheKey(Le),Je=$.programs;$.environment=w.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(w.isMeshStandardMaterial?Bt:Gt).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",re),Je=new Map,$.programs=Je);let et=Je.get(Ce);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Se)return zo(w,Le),et}else Le.uniforms=ie.getUniforms(w),w.onBeforeCompile(Le,E),et=ie.acquireProgram(Le,Ce),Je.set(Ce,et),$.uniforms=Le.uniforms;let qe=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=_e.uniform),zo(w,Le),$.needsLights=ol(w),$.lightsStateVersion=Se,$.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function ko(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=gr.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function zo(w,H){let j=Oe.get(w);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function sl(w,H,j,$,G){H.isScene!==!0&&(H=De),at.resetTextureUnits();let he=H.fog,Se=$.isMeshStandardMaterial?H.environment:null,Le=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:us,Ce=($.isMeshStandardMaterial?Bt:Gt).get($.envMap||Se),Je=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,et=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!j.morphAttributes.position,ft=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color,kt=Li;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(kt=E.toneMapping);let Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=Rt!==void 0?Rt.length:0,Ye=Oe.get($),Nt=p.state.lights;if(ye===!0&&(V===!0||w!==S)){let Xt=w===S&&$.id===v;_e.setState($,w,Xt)}let xt=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nt.state.version||Ye.outputColorSpace!==Le||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Ce||$.fog===!0&&Ye.fog!==he||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_e.numPlanes||Ye.numIntersection!==_e.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==qe||Ye.morphNormals!==ft||Ye.morphColors!==_t||Ye.toneMapping!==kt||Ye.morphTargetsCount!==wt)&&(xt=!0):(xt=!0,Ye.__version=$.version);let cn=Ye.currentProgram;xt===!0&&(cn=is($,H,G));let fi=!1,yt=!1,pi=!1,Dt=cn.getUniforms(),ln=Ye.uniforms;if(Ue.useProgram(cn.program)&&(fi=!0,yt=!0,pi=!0),$.id!==v&&(v=$.id,yt=!0),fi||S!==w){Ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Dt.setValue(O,"projectionMatrix",w.projectionMatrix),Dt.setValue(O,"viewMatrix",w.matrixWorldInverse);let qt=Dt.map.cameraPosition;qt!==void 0&&qt.setValue(O,me.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,yt=!0,pi=!0)}if(G.isSkinnedMesh){Dt.setOptional(O,G,"bindMatrix"),Dt.setOptional(O,G,"bindMatrixInverse");let Xt=G.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Dt.setValue(O,"boneTexture",Xt.boneTexture,at))}G.isBatchedMesh&&(Dt.setOptional(O,G,"batchingTexture"),Dt.setValue(O,"batchingTexture",G._matricesTexture,at),Dt.setOptional(O,G,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",G._indirectTexture,at),Dt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",G._colorsTexture,at));let hn=j.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&de.update(G,j,cn),(yt||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Dt.setValue(O,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ln.envMap.value=Ce,ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(ln.envMapIntensity.value=H.environmentIntensity),yt&&(Dt.setValue(O,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&rl(ln,pi),he&&$.fog===!0&&ae.refreshFogUniforms(ln,he),ae.refreshMaterialUniforms(ln,$,X,se,p.state.transmissionRenderTarget[w.id]),gr.upload(O,ko(Ye),ln,at)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(gr.upload(O,ko(Ye),ln,at),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(O,"center",G.center),Dt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Dt.setValue(O,"normalMatrix",G.normalMatrix),Dt.setValue(O,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Xt=$.uniformsGroups;for(let qt=0,Oi=Xt.length;qt<Oi;qt++){let ni=Xt[qt];rt.update(ni,cn),rt.bind(ni,cn)}}return cn}function rl(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function ol(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,H,j){let $=Oe.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Oe.get(w.texture).__webglTexture=H,Oe.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let j=Oe.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};let al=O.createFramebuffer();this.setRenderTarget=function(w,H=0,j=0){F=w,P=H,U=j;let $=!0,G=null,he=!1,Se=!1;if(w){let Ce=Oe.get(w);if(Ce.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(Ce.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Ce.__hasExternalTextures)at.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qe=w.depthTexture;if(Ce.__boundDepthTexture!==qe){if(qe!==null&&Oe.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}let Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);let et=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[H])?G=et[H][j]:G=et[H],he=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?G=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[j]:G=et,N.copy(w.viewport),B.copy(w.scissor),W=w.scissorTest}else N.copy(ge).multiplyScalar(X).floor(),B.copy(Ie).multiplyScalar(X).floor(),W=Ae;if(j!==0&&(G=al),Ue.bindFramebuffer(O.FRAMEBUFFER,G)&&$&&Ue.drawBuffers(w,G),Ue.viewport(N),Ue.scissor(B),Ue.setScissorTest(W),he){let Ce=Oe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,j)}else if(Se){let Ce=H;for(let Je=0;Je<w.textures.length;Je++){let et=Oe.get(w.textures[Je]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Je,et.__webglTexture,j,Ce)}}else if(w!==null&&j!==0){let Ce=Oe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ce.__webglTexture,j)}v=-1},this.readRenderTargetPixels=function(w,H,j,$,G,he,Se,Le=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){Ue.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Je=w.textures[Le],et=Je.format,qe=Je.type;if(!Ke.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&j>=0&&j<=w.height-G&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(H,j,$,G,ze.convert(et),ze.convert(qe),he))}finally{let Je=F!==null?Oe.get(F).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,H,j,$,G,he,Se,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(H>=0&&H<=w.width-$&&j>=0&&j<=w.height-G){Ue.bindFramebuffer(O.FRAMEBUFFER,Ce);let Je=w.textures[Le],et=Je.format,qe=Je.type;if(!Ke.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,he.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(H,j,$,G,ze.convert(et),ze.convert(qe),0);let _t=F!==null?Oe.get(F).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,_t);let kt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wd(O,kt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,he),O.deleteBuffer(ft),O.deleteSync(kt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,j=0){let $=Math.pow(2,-j),G=Math.floor(w.image.width*$),he=Math.floor(w.image.height*$),Se=H!==null?H.x:0,Le=H!==null?H.y:0;at.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,Se,Le,G,he),Ue.unbindTexture()};let cl=O.createFramebuffer(),ll=O.createFramebuffer();this.copyTextureToTexture=function(w,H,j=null,$=null,G=0,he=null){he===null&&(G!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=G,G=0):he=0);let Se,Le,Ce,Je,et,qe,ft,_t,kt,Rt=w.isCompressedTexture?w.mipmaps[he]:w.image;if(j!==null)Se=j.max.x-j.min.x,Le=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,Je=j.min.x,et=j.min.y,qe=j.isBox3?j.min.z:0;else{let hn=Math.pow(2,-G);Se=Math.floor(Rt.width*hn),Le=Math.floor(Rt.height*hn),w.isDataArrayTexture?Ce=Rt.depth:w.isData3DTexture?Ce=Math.floor(Rt.depth*hn):Ce=1,Je=0,et=0,qe=0}$!==null?(ft=$.x,_t=$.y,kt=$.z):(ft=0,_t=0,kt=0);let wt=ze.convert(H.format),Ye=ze.convert(H.type),Nt;H.isData3DTexture?(at.setTexture3D(H,0),Nt=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(at.setTexture2DArray(H,0),Nt=O.TEXTURE_2D_ARRAY):(at.setTexture2D(H,0),Nt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let xt=O.getParameter(O.UNPACK_ROW_LENGTH),cn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fi=O.getParameter(O.UNPACK_SKIP_PIXELS),yt=O.getParameter(O.UNPACK_SKIP_ROWS),pi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);let Dt=w.isDataArrayTexture||w.isData3DTexture,ln=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let hn=Oe.get(w),Xt=Oe.get(H),qt=Oe.get(hn.__renderTarget),Oi=Oe.get(Xt.__renderTarget);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let ni=0;ni<Ce;ni++)Dt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(w).__webglTexture,G,qe+ni),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(H).__webglTexture,he,kt+ni)),O.blitFramebuffer(Je,et,Se,Le,ft,_t,Se,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Oe.has(w)){let hn=Oe.get(w),Xt=Oe.get(H);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,cl),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,ll);for(let qt=0;qt<Ce;qt++)Dt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hn.__webglTexture,G,qe+qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hn.__webglTexture,G),ln?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,he,kt+qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,he),G!==0?O.blitFramebuffer(Je,et,Se,Le,ft,_t,Se,Le,O.COLOR_BUFFER_BIT,O.NEAREST):ln?O.copyTexSubImage3D(Nt,he,ft,_t,kt+qt,Je,et,Se,Le):O.copyTexSubImage2D(Nt,he,ft,_t,Je,et,Se,Le);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ln?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Nt,he,ft,_t,kt,Se,Le,Ce,wt,Ye,Rt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,he,ft,_t,kt,Se,Le,Ce,wt,Rt.data):O.texSubImage3D(Nt,he,ft,_t,kt,Se,Le,Ce,wt,Ye,Rt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,he,ft,_t,Se,Le,wt,Ye,Rt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,he,ft,_t,Rt.width,Rt.height,wt,Rt.data):O.texSubImage2D(O.TEXTURE_2D,he,ft,_t,Se,Le,wt,Ye,Rt);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,cn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fi),O.pixelStorei(O.UNPACK_SKIP_ROWS,yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pi),he===0&&H.generateMipmaps&&O.generateMipmap(Nt),Ue.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){P=0,U=0,F=null,Ue.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Oc=class extends wi{constructor(){super();let e=new An;e.deleteAttribute("uv");let t=new Qt({side:nn}),n=new Qt,s=new bs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ct(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Qr(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let h=new ct(e,yr(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let c=new ct(e,yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new ct(e,yr(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new ct(e,yr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ct(e,yr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ct(e,yr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(i){return new gs({color:0,emissive:16777215,emissiveIntensity:i})}function gx(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d");e.fillStyle="#b58550",e.fillRect(0,0,512,512);let t=71,n=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296);for(let r=0;r<360;r++){let a=n()*512;e.strokeStyle=`rgba(${60+Math.round(n()*65)},47,24,${.035+n()*.12})`,e.lineWidth=.3+n()*1.5,e.beginPath(),e.moveTo(0,a);for(let o=0;o<=512;o+=16)e.lineTo(o,a+Math.sin(o/100+r)*(.5+n()*2));e.stroke()}let s=new eo(i);return s.colorSpace=Mt,s.wrapS=s.wrapT=jn,s.repeat.set(2,1),s}function sf(i,e,t,n,s){let r=new ct(new ms(50,50),new Qt({color:11450561,roughness:.91,metalness:.03}));r.position.z=-.006,r.receiveShadow=!0,i.add(r);let a,o=gx();if(!s){e.shadowMap.enabled=!0,e.shadowMap.type=Oa,t.castShadow=!0,t.shadow.mapSize.set(1024,1024),Object.assign(t.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:20}),t.shadow.bias=-1e-4,t.shadow.normalBias=.004;let h=new _r(e),c=new Oc;a=h.fromScene(c,.04).texture,c.dispose(),h.dispose()}return{mode:"studio",set(h,c){this.mode=h;let l=h==="studio";r.visible=l,c&&(c.visible=!l),i.background=new Xe(l?14476265:791587),i.fog=l?new $r(14476265,15,45):new fs(791587,.06),i.environment=l?a:null,i.environmentIntensity=.7,t.intensity=l?2.3:3.5,n.intensity=l?.4:1.8,e.toneMappingExposure=l?.9:1.25},materialize(h,c,l){h.traverse(u=>{if(!u.isMesh||(u.castShadow=!0,u.receiveShadow=!0,l==="collision"))return;let d=Array.isArray(u.material)?u.material:[u.material];u.material=d.map(f=>{if(!f||f.userData?.studio)return f;let g=(f.name||"").toLowerCase(),_=g.includes("wood")||c==="free_furniture",m=(f.color?.r||0)+(f.color?.g||0)+(f.color?.b||0),p=_?new so({color:16777215,map:o,roughness:.48,clearcoat:.18,clearcoatRoughness:.6}):new Qt({color:f.color?.clone()||new Xe(.8,.8,.8),map:f.map||null,roughness:m<.2?.75:.36,metalness:g.includes("metal")?.65:m<.2?.05:.14,transparent:f.transparent,opacity:f.opacity,side:f.side});return p.name=f.name,p.userData.studio=!0,p}),(!Array.isArray(u.material)||u.material.length===1)&&(u.material=u.material[0])})}}}var br=[{id:"paper",title:"\uB17C\uBB38 \uBAA9\uD45C",description:"Contact contraction\uC744 \uB2E4\uC911 \uD314\uB85C \uC2E4\uD604\uD558\uB294 \uBAA9\uD45C \uACFC\uC81C\uC785\uB2C8\uB2E4. \uC804\uCCB4 \uACC4\uD68D\xB7\uC2E4\uD589 \uAE30\uB85D\uACFC \uAE30\uC874 \uAE30\uC900 \uB3D9\uC791\uC744 \uAD6C\uBD84\uD558\uBA70, \uAC01 \uAE30\uB85D\uC758 \uAC80\uC99D \uBC94\uC704\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",groups:["\uD575\uC2EC \uACFC\uC81C \xB7 \uB2E8\uC77C \uAC15\uCCB4","\uD655\uC7A5 \xB7 \uBAA8\uBC14\uC77C \uD611\uB825","\uD655\uC7A5 \xB7 \uC790\uC720 articulated","\uBCF4\uC870 \xB7 \uB2E4\uBB3C\uCCB4 \uC870\uB9BD"]},{id:"embodiment",title:"\uB2E8\uC77C embodiment",description:"\uAC01 \uB85C\uBD07\uC758 URDF\xB7\uAE30\uAD6C\uD559\xB7\uAD00\uC808 \uCD94\uC885\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. \uB17C\uBB38 \uBAA9\uD45C\uC758 \uD611\uB825 \uBB3C\uCCB4 \uC870\uC791 \uC2E4\uD5D8\uACFC \uAD6C\uBD84\uD569\uB2C8\uB2E4.",groups:["\uB85C\uBD07\uD314 \xB7 \uAD00\uC808 \uCD94\uC885","\uD734\uBA38\uB178\uC774\uB4DC \xB7 \uAE30\uAD6C\uD559"]},{id:"diagnostic",title:"\uC694\uC18C\xB7\uAC15\uAC74\uC131",description:"\uC678\uB780 \uC751\uB2F5, \uC811\uCD09 \uB3C4\uAD6C\uC640 \uC218\uB3D9 \uAD00\uC808, \uC81C\uD55C CITO\uB97C \uAC1C\uBCC4\uC801\uC73C\uB85C \uD655\uC778\uD558\uB294 \uC9C4\uB2E8 \uC2E4\uD5D8\uC785\uB2C8\uB2E4.",groups:["\uC678\uB825 \xB7 \uAC15\uAC74\uC131","\uB2E4\uC911 \uD314 \xB7 \uB3C4\uAD6C\xB7\uACC4\uD68D \uAC80\uC99D","\uB2E8\uC77C \uD314 \xB7 \uC218\uB3D9 \uAD00\uC808","\uADF8\uB9AC\uD37C \xB7 \uAD6C\uB3D9\xB7\uD30C\uC9C0\uB825"]}],vr=[["full_panel","paper",0,"\uD328\uB110 \xB7 \uC804\uCCB4 \uAD6C\uAC04 \uCD5C\uC801\uD654","\uC720\uD615\xB7\uD314 \uBC30\uC815 \uD0D0\uC0C9 \u2192 CITO \u2192 \uC811\uCD09 \uC2E4\uD589"],["full_box","paper",2,"\uC790\uC720 \uBC15\uC2A4 \xB7 \uC804\uCCB4 \uAD6C\uAC04 \uCD5C\uC801\uD654","\uBCF8\uCCB4\xB7\uB69C\uAED1 functional contact \u2192 \uC138 \uD314"],["full_assembly","paper",3,"\uAC00\uAD6C \uC870\uB9BD \xB7 \uC804\uCCB4 \uAD6C\uAC04 \uCD5C\uC801\uD654","\uB450 \uC790\uC720 \uBD80\uD488 \u2192 \uC0BD\uC785\xB7\uD558\uC911 \uC804\uB2EC\xB7\uB9B4\uB9AC\uC2A4"],["panel_fixture","paper",0,"\uD328\uB110 \uC6B4\uBC18 \u2192 \uC9C0\uADF8 \u2192 \uB9B4\uB9AC\uC2A4","Panda \xD7 3 \xB7 G / P / P",!0],["mobile_panel","paper",1,"\uC791\uC5C5\uC601\uC5ED \uD655\uC7A5 \xB7 RBY1 + Panda","\uBAA8\uBC14\uC77C \uB4C0\uC5BC\uC554 + \uACE0\uC815 \uD314",!0],["free_box_lid","paper",2,"\uC790\uC720 \uBC15\uC2A4 \xB7 \uB69C\uAED1 \uC5F4\uAE30","Panda \xD7 3 \xB7 \uBCF8\uCCB4 grip / support + \uB69C\uAED1",!0],["free_folding_object","paper",2,"\uC790\uC720 \uD328\uB110 \xB7 \uB0A0\uAC1C \uD3BC\uCE58\uAE30","Panda \xD7 3 \xB7 \uBCF8\uCCB4 \uC9C0\uC9C0 + \uB0A0\uAC1C",!0],["free_portable_drawer","paper",2,"\uC790\uC720 \uC218\uB0A9\uD568 \xB7 \uC11C\uB78D \uB2F9\uAE30\uAE30","Panda \xD7 3 \xB7 \uBCF8\uCCB4 \uC9C0\uC9C0 + \uC11C\uB78D",!0],["table_assembly","paper",3,"\uCC45\uC0C1 \uC0C1\uD310\xB7\uB2E4\uB9AC \uC870\uB9BD","Panda \xD7 3 \xB7 \uB450 \uC790\uC720 \uBD80\uD488",!0],["franka_panda","embodiment",0,"Franka Panda","7 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["rb5","embodiment",0,"Rainbow RB5-850E","6 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["rb3","embodiment",0,"Rainbow RB3","6 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["ur5e","embodiment",0,"UR5e","6 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["kinova_gen3","embodiment",0,"Kinova Gen3","7 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["kuka_iiwa7","embodiment",0,"KUKA iiwa 7","7 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["xarm7","embodiment",0,"UFACTORY xArm7","7 DoF \xB7 \uAD00\uC808 \uCD94\uC885"],["unitree_g1","embodiment",1,"Unitree G1","29 DoF + floating base \xB7 \uAE30\uAD6C\uD559"],["free_box_push","diagnostic",0,"\uC790\uC720 \uBC15\uC2A4 \xB7 \uC678\uB825 5 N","3-arm \xB7 \uBCF8\uCCB4\uC5D0 \uC678\uB825 \xB7 \uD654\uC0B4\uD45C \uD45C\uC2DC","free_box_lid"],["mobile_push_2","diagnostic",0,"\uBAA8\uBC14\uC77C \uD611\uB825 \xB7 \uC678\uB825 2 N","RBY1 + Panda \xB7 \uD654\uC0B4\uD45C \uD45C\uC2DC","mobile_panel"],["mobile_push_8","diagnostic",0,"\uBAA8\uBC14\uC77C \uD611\uB825 \xB7 \uC678\uB825 8 N","RBY1 + Panda \xB7 \uD654\uC0B4\uD45C \uD45C\uC2DC","mobile_panel"],["mobile_push_25","diagnostic",0,"\uBAA8\uBC14\uC77C \uD611\uB825 \xB7 \uC678\uB825 25 N","RBY1 + Panda \xB7 \uD654\uC0B4\uD45C \uD45C\uC2DC","mobile_panel"],["dual_cito","diagnostic",1,"Dual-arm \xB7 \uC81C\uD55C CITO","Cartesian arm \xD7 2 \xB7 \uCD5C\uC801\uD654 \uADA4\uC801"],["panda_robotiq_lift","diagnostic",1,"Panda \xD7 3 \xB7 Robotiq \uCCAB lift","G / P / P \xB7 \uCD5C\uC801\uD654 + native \uC811\uCD09 \uC2E4\uD589"],["panda_coupled_lift","diagnostic",1,"Panda \xD7 3 \xB7 \uCD5C\uC801\uD654\uB41C \uCCAB lift","G / P / P \xB7 \uCCAB \uAD6C\uAC04 \uACC4\uD68D\xB7\uC2E4\uD589"],["robotiq_2f85","diagnostic",3,"Robotiq 2F-85 \xB7 \uC591 jaw 40 N","\uC2E4\uC81C mesh \xB7 \uC218\uB3D9 \uB9C1\uD06C\xB7\uAD6C\uB3D9\uAE30 \xB7 \uC790\uC720 \uBE14\uB85D"],["three_arm","diagnostic",1,"Cartesian \xD7 3 \xB7 \uC811\uCD09 \uB3C4\uAD6C","Point / gripper / suction"],["three_franka","diagnostic",1,"Panda \xD7 3 \xB7 \uC811\uCD09 \uB3C4\uAD6C","Point / gripper / suction",!0],["hinged_door","diagnostic",2,"\uACE0\uC815 \uD78C\uC9C0 \xB7 \uBB38 \uC5F4\uAE30","\uB2E8\uC77C \uD314 \xB7 point contact",!0],["folding_panel","diagnostic",2,"\uACE0\uC815 \uD78C\uC9C0 \xB7 \uD328\uB110 \uD3BC\uCE58\uAE30","\uB2E8\uC77C \uD314 \xB7 point contact",!0],["drawer","diagnostic",2,"\uACE0\uC815 \uB808\uC77C \xB7 \uC11C\uB78D \uB2F9\uAE30\uAE30","\uB2E8\uC77C \uD314 \xB7 gripper",!0]],Lh=new Map(vr.map(([i,e,t,n,s,r],a)=>[i,{id:i,category:e,group:t,title:n,detail:s,preset:r===!0?i:r,order:a}]));function Mr(i){if(i.id.startsWith("robust_refinement_"))return{id:i.id,category:"diagnostic",group:0,title:i.title,detail:"3-arm \xB7 source polytope ON/OFF \xB7 matched push",order:vr.length};if(i.id.startsWith("counterfactual_"))return{id:i.id,category:"diagnostic",group:1,title:i.title,detail:"\uB2E4\uB978 \uC811\uCD09 \uC720\uD615 \xB7 \uC804\uCCB4 \uC2DC\uD000\uC2A4 \uBE44\uAD50",order:vr.length};let e=i.id.match(/^full_(panel|box|assembly)_(.+)$/);return e?{id:i.id,category:"diagnostic",group:e[2]==="external_push"?0:1,title:i.title,detail:"\uC804\uCCB4 \uACFC\uC81C \xB7 "+e[2],order:vr.length}:Lh.get(i.id)||Lh.get(i.scenario)||{id:i.id,category:"diagnostic",group:1,title:i.title,detail:"\uAC1C\uBCC4 \uAC80\uC99D",order:vr.length}}function rf(){return vr.map(([i])=>Lh.get(i)).filter(i=>i.preset===i.id)}function of(i){let e=Mr(i),t=br.find(h=>h.id===e.category),n=i.report||{},s=n.paper_sections_executed||{},r=n.full_paper_pipeline_executed===!0&&["III-B","III-C","III-D","IV"].every(h=>s[h]===!0),a,o;return i.known_modeling_issues?.length?(a="\uAD6C\uD615 \uD615\uC0C1 \xB7 \uC7AC\uAC80\uC99D \uD544\uC694",o=i.known_modeling_issues.join(" ")+" \uC218\uC815\uB41C \uBAA8\uB378\uACFC 7\uC870\uAC74 \uBE44\uAD50\uB294 \u300C\uC790\uC720 \uBC15\uC2A4 \xB7 \uC804\uCCB4 \uAD6C\uAC04 \uCD5C\uC801\uD654\u300D(full_box)\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694."):i.comparison_recording?(a=(i.study_kind==="source_robustness"?"Source robustness \xB7 ":"\uAC15\uC81C \uC811\uCD09 \uC720\uD615 \xB7 ")+(n.execution_passed?"PASS":"FAIL"),o=i.study_kind==="source_robustness"?"\uC18C\uD615 refinement\uC758 wrench polytope ON/OFF\uB97C \uBE44\uAD50\uD569\uB2C8\uB2E4. \uB3D9\uC77C \uC81C\uC5B4\uAE30\xB7\uBB3C\uC131\xB7\uC678\uB825 \uC870\uAC74\uC774\uBA70 target \uC811\uCD09\uC810\uC740 \uACE0\uC815\uD55C \uC815\uC9C0 \uC9C0\uC9C0 \uBD84\uB9AC \uC2E4\uD5D8\uC785\uB2C8\uB2E4. \uC804\uCCB4 \uC774\uB3D9 CITO\uB098 \uD3D0\uB8E8\uD504 \uC548\uC815\uC131 \uC99D\uBA85\uC740 \uC544\uB2D9\uB2C8\uB2E4.":"\uAC19\uC740 \uC804\uCCB4 \uACFC\uC81C\uC5D0\uC11C \uC811\uCD09 \uC720\uD615\uC744 \uAC15\uC81C\uB85C \uBC14\uAFBC \uACC4\uD68D\xB7native \uC2E4\uD589\uC785\uB2C8\uB2E4. \uBE44\uC6A9, \uACC4\uD68D \uC2E4\uD328\uC640 \uC2E4\uD589 \uAE30\uC900 \uC704\uBC18\uC744 \uAD6C\uBD84\uD569\uB2C8\uB2E4."):i.full_task_recording?(a="\uC804\uCCB4 \uAD6C\uAC04 \xB7 "+(n.execution_passed?"\uAC80\uC99D \uD1B5\uACFC":"\uAC80\uC0AC \uC2E4\uD328 \uD3EC\uD568"),o="\uC811\uCD09 \uC720\uD615\xB7\uD314 \uBC30\uC815 \uD6C4\uBCF4, \uC774\uB3D9 CITO\xB7\uD558\uC911 \uC804\uB2EC QP\xB7\uB9B4\uB9AC\uC2A4 \uB3D9\uC5ED\uD559\uACFC native \uC811\uCD09 \uC2E4\uD589\uC744 \uAE30\uB85D\uD569\uB2C8\uB2E4. Midpoint \uAD6C\uC131 \uC5C5\uB370\uC774\uD2B8 \uBCC0\uD615\uC774\uBA70 source \uC2E4\uD328 \uC2DC \uAE30\uD558 prior \uC0AC\uC6A9 \uC5EC\uBD80\uC640 ablation \uACB0\uACFC\uB97C \uBCF4\uACE0\uC11C\uC5D0 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",n.variant==="fixed_path"&&(o="\uACE0\uC815\uB41C \uBCF4\uAC04 \uACBD\uB85C\uC5D0\uC11C \uD798\xB7\uD1A0\uD06C\uB9CC \uACC4\uC0B0\uD558\uB294 \uBE44\uAD50 \uC2E4\uD589\uC785\uB2C8\uB2E4. \uC804\uCCB4 \uACC4\uD68D\uACFC endpoint\xB7\uAD6C\uAC04 \uC2DC\uAC04\uC744 \uB9DE\uCD94\uBA70, CITO\uC758 \uB3D9\uC5ED\uD559 \uC801\uBD84 \uC794\uCC28\uC640 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589 \uACB0\uACFC\uB97C \uAD6C\uBD84\uD558\uC5EC \uD45C\uC2DC\uD569\uB2C8\uB2E4.")):r?(a="Sec. III-B\u2013IV \uC2E4\uD589 \uAE30\uB85D",o="\uC804\uCCB4 \uB2E8\uACC4\uC758 \uC2E4\uD589 provenance\uAC00 \uD3EC\uD568\uB41C \uAE30\uB85D\uC785\uB2C8\uB2E4. \uAC1C\uBCC4 \uAC80\uC0AC \uACB0\uACFC\uB294 \uC2E4\uD589 \uBCF4\uACE0\uC11C\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694."):e.category==="paper"?(a="\uAE30\uC900 \uB3D9\uC791 \xB7 \uC804\uCCB4 \uCD5C\uC801\uD654 \uBBF8\uAC80\uC99D",o="\uB2E4\uC911 \uD314\uC758 \uC811\uCD09 \uB3D9\uC5ED\uD559 \uAE30\uC900 \uC2E4\uD589\uC785\uB2C8\uB2E4. Sec. III-B\u2013IV \uC804\uCCB4 \uACC4\uD68D\uC758 \uC131\uACF5 \uACB0\uACFC\uB294 \uC544\uC9C1 \uC544\uB2D9\uB2C8\uB2E4."):e.category==="embodiment"?(a=i.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uBBF8\uB9AC\uBCF4\uAE30":"\uAD00\uC808 \uCD94\uC885 \uAC80\uC99D",o=i.engine==="kinematic_preview"?"URDF \uAD00\uC808\xB7floating base\uC758 \uC88C\uD45C \uC7AC\uC0DD\uC785\uB2C8\uB2E4. \uBB3C\uCCB4 \uC811\uCD09, \uADE0\uD615 \uC81C\uC5B4\uC640 \uBCF4\uD589\uC744 \uAC80\uC99D\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":"\uB2E8\uC77C \uB85C\uBD07 \uBAA8\uB378\uC758 \uAD00\uC808 \uBA85\uB839 \uCD94\uC885 \uAE30\uB85D\uC785\uB2C8\uB2E4. \uD611\uB825 \uBB3C\uCCB4 \uC870\uC791\uACFC \uC811\uCD09\uB825 \uC81C\uC5B4\uC758 \uAC80\uC99D \uACB0\uACFC\uB294 \uC544\uB2D9\uB2C8\uB2E4."):i.scenario==="coupled_panel_lift"?(a="\uB2E4\uC911 \uD314 \xB7 \uCCAB lift "+(n.execution_passed?"\uAC80\uC99D":"\uAC80\uC0AC \uC2E4\uD328"),o="Source refinement\uC640 target realization, \uC8FC\uC5B4\uC9C4 G/P/P \uBC30\uCE58\uC758 \uCCAB \uAD6C\uAC04 CITO \uBC0F \uC811\uCD09 \uC2E4\uD589 \uAE30\uB85D\uC785\uB2C8\uB2E4. Midpoint \uAD6C\uC131 \uC5C5\uB370\uC774\uD2B8 \uBCC0\uD615\uC774\uBA70, \uC804\uCCB4 \uC7AC\uBC30\uD5A5\xB7\uC548\uCC29\xB7\uB9B4\uB9AC\uC2A4\uC640 III-D \uD0D0\uC0C9\uC758 \uAC80\uC99D\uC740 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4."):i.scenario==="robotiq_clamp"?(a="\uADF8\uB9AC\uD37C \uD30C\uC9C0\uB825 \xB7 \uC694\uC18C \uAC80\uC99D",o="\uC218\uB3D9 \uB9C1\uD06C\uB97C \uD3EC\uD568\uD55C \uC2E4\uC81C \uADF8\uB9AC\uD37C \uAE30\uAD6C\uC640 \uC720\uD55C \uAD6C\uB3D9\uAE30, \uC790\uC720 \uBE14\uB85D\uC758 \uD30C\uC9C0\uB825 \uC2DC\uD5D8\uC785\uB2C8\uB2E4. \uB17C\uBB38 \uBAA9\uD45C\uC758 \uB2E4\uC911 \uD314 contact realization\uACFC \uAD6C\uBD84\uD569\uB2C8\uB2E4."):(i.external_disturbances||[]).length?(a="\uC678\uB780 \uC2DC\uD5D8"+((n.robustness?.all_task_checks_passed??n.execution_passed)===!1?" \xB7 \uAC80\uC0AC \uC2E4\uD328 \uD3EC\uD568":""),o="\uAE30\uC900 \uACC4\uD68D \uC2E4\uD589 \uC911 \uC678\uB825\uC744 \uAC00\uD55C \uAE30\uB85D\uC785\uB2C8\uB2E4. \uC678\uB825 \uD06C\uAE30\xB7\uBC29\uD5A5\uC740 \uD654\uC0B4\uD45C\uB85C \uD45C\uC2DC\uD558\uBA70, \uC811\uCD09\xB7\uD558\uC911 \uD55C\uACC4 \uC704\uBC18\uB3C4 \uBCF4\uACE0\uC11C\uC5D0 \uC720\uC9C0\uD569\uB2C8\uB2E4."):i.engine==="cito_trajectory"?(a="\uC81C\uD55C CITO \xB7 \uC694\uC18C \uAC80\uC99D",o="\uB2E8\uC21C\uD654\uD55C \uC811\uCD09 \uD6C4\uBCF4 \uBAA8\uB378\uC758 \uCD5C\uC801\uD654 \uADA4\uC801\uC785\uB2C8\uB2E4. \uC804\uCCB4 \uB17C\uBB38 \uC2E4\uD5D8\uC758 \uC644\uB8CC\uB97C \uB73B\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."):(a="\uC811\uCD09\xB7\uB3C4\uAD6C \xB7 \uC694\uC18C \uAC80\uC99D",o=e.group===2?"\uC138\uACC4\uC5D0 \uACE0\uC815\uB41C \uC218\uB3D9 \uAD00\uC808\uC744 \uB2E8\uC77C \uD314\uB85C \uC870\uC791\uD558\uB294 \uC694\uC18C \uC2DC\uD5D8\uC785\uB2C8\uB2E4. \uC790\uC720 articulated body\uC758 \uB2E4\uC911 \uD314 \uBAA9\uD45C \uACFC\uC81C\uB294 \uB17C\uBB38 \uBAA9\uD45C\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694.":"\uC8FC\uC5B4\uC9C4 \uC811\uCD09 \uB3C4\uAD6C\uC640 \uACBD\uB85C\uC758 \uB3D9\uC791\uC744 \uD655\uC778\uD558\uB294 \uC694\uC18C \uC2DC\uD5D8\uC785\uB2C8\uB2E4. \uC804\uCCB4 Sec. III-B\u2013IV \uC2E4\uD589 \uC5EC\uBD80\uC640 \uBCC4\uB3C4\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4."),{entry:e,category:t,status:a,detail:o,full:r}}var _x={full:"\uC6D0\uBC29\uBC95",no_source_refinement:"Source refinement \uC81C\uAC70",fixed_contact_types:"\uC811\uCD09 \uC720\uD615 \uACE0\uC815",fixed_path:"\uACBD\uB85C \uACE0\uC815",no_arm_force_feedforward:"\uD314 \uD798 feedforward \uC81C\uAC70",contact_disabled:"\uC811\uCD09 \uBE44\uD65C\uC131\uD654 \xB7 \uC74C\uC131 \uB300\uC870\uAD70",external_push:"\uC678\uB780 \xB7 \uCD5C\uB300 5 N"},Nh=i=>Math.max(0,...Object.values(i.object_tracking||{}).map(e=>e.maximum_position_error_m)),lf=i=>Object.values(i.maintained_contact_fraction||{}).filter(e=>e!==null);function xx(i){let e=[];if(i.failure&&e.push("\uACC4\uD68D/\uC2E4\uD589 \uC624\uB958: "+i.failure),i.tracking_passed===!1){Nh(i)>.008&&e.push(`\uCD94\uC885 \uC624\uCC28 ${(Nh(i)*1e3).toFixed(2)} mm / \uD5C8\uC6A9 8 mm`);let t=Math.max(0,...Object.values(i.object_tracking||{}).map(n=>n.maximum_rotation_error_rad));t>.06&&e.push(`\uC790\uC138 \uC624\uCC28 ${t.toFixed(3)} rad / 0.060 rad`)}for(let[t,n]of Object.entries(i.jaw_force||{}))if(!n.passed){let s=Math.max(...n.all_time_maximum_per_jaw_N||n.maximum_per_jaw_N);e.push(s>n.limit_N?`${t}: jaw ${s.toFixed(2)} N / ${n.limit_N} N`:`${t}: \uC591\uCABD jaw \uC811\uCD09 \uC720\uC9C0 \uBD80\uC871`)}return i.contact_retention_passed===!1&&e.push(`\uACC4\uD68D \uD558\uC911 \uC811\uCD09 ${(100*Math.min(...lf(i))).toFixed(1)}% / 99%`),i.sampled_interface_wrench_capability?.passed===!1&&e.push("\uCE21\uC815 wrench \uD5C8\uC6A9\uC601\uC5ED \uC704\uBC18"),i.task_passed===!1&&e.push("\uBAA9\uD45C \uC790\uC138\xB7\uC870\uB9BD\xB7\uC548\uCC29 \uC870\uAC74 \uBBF8\uCDA9\uC871"),i.minimum_actuator_margin_Nm<-1e-8&&e.push("\uAD00\uC808 \uD1A0\uD06C \uD55C\uACC4 \uC704\uBC18"),i.reference_geometry?.passed===!1&&e.push("\uAE30\uC900 \uACBD\uB85C \uD615\uC0C1 \uAC80\uC0AC \uC2E4\uD328"),Object.keys(i.unexpected_loaded_contact_penetrations_m||{}).length&&e.push("\uC758\uB3C4\uD558\uC9C0 \uC54A\uC740 \uD558\uC911 \uC811\uCD09"),e}var ei=(i,e)=>{let t=document.createElement(i);return e!==void 0&&(t.textContent=e),t};function af(i){let e=ei("table"),t=ei("tr");for(let s of i)t.append(ei("th",s));let n=ei("thead");return n.append(t),e.append(n,ei("tbody")),e}function Bc(i,e){let t=ei("tr");for(let n of e){let s=ei("td");typeof n=="string"?s.textContent=n:s.append(n),t.append(s)}return i.tBodies[0].append(t),t}function Mo(i,e){let t=ei("p",e);t.className="fine",i.append(t)}function cf(i){return i.includes("Dominated cost bound")?"\uC2E4\uD604\uB41C keyframes\uC758 \uBE44\uC6A9 \uD558\uD55C\uC73C\uB85C \uAC00\uC9C0\uCE58\uAE30 (\uBB3C\uB9AC\uC801 \uBD88\uAC00\uB2A5 \uD310\uC815 \uC544\uB2D8)":i.includes("IK failed")||i.includes("IK target")||i.includes("unreachable")?"\uC8FC\uC5B4\uC9C4 \uCD08\uAE30\uAC12\uC758 IK \uC2E4\uD328 \xB7 \uC804\uC5ED \uB3C4\uB2EC \uBD88\uAC00\uB2A5 \uC99D\uBA85 \uC544\uB2D8":i.includes("Structurally insufficient")?"\uC790\uC720 \uBB3C\uCCB4\uC758 6\uCC28\uC6D0 wrench\uB97C \uC9C0\uC9C0\uD558\uB294 rank \uBD80\uC871":i}function hf(i,e){e.replaceChildren();let t=i.report.ablation_results||{},n=i.scenario.replace("full_","");e.append(ei("h4",`Ablation \uBE44\uAD50 \xB7 ${Object.keys(t).length}\uC870\uAC74`));let s=af(["\uC870\uAC74 \xB7 \uAE30\uB85D \uC7AC\uC0DD","\uD310\uC815","\uCD5C\uB300 \uC704\uCE58 \uC624\uCC28","\uD558\uC911 \uC811\uCD09 \uC720\uC9C0","\uC2E4\uD328 \uC774\uC720 / \uBE44\uAD50 \uBC94\uC704"]);e.append(s);for(let[u,d]of Object.entries(t)){let f=ei("a",`${_x[u]||u} \u2197`);f.href=`?model=full_${n}${u==="full"?"":"_"+u}#ablation-results`,f.title=u;let g=lf(d),_=xx(d),m=d.selection?.continuous_plan_reused,p=_.length?_.join(" \xB7 "):m?"\uB3D9\uC77C\uD55C \uC5F0\uC18D \uACC4\uD68D \uC7AC\uC0AC\uC6A9 \xB7 \uC0C8 \uBB3C\uB9AC \uC2E4\uD589":u==="full"?"\uBAA8\uB4E0 \uC2E4\uD589 \uAE30\uC900 \uD1B5\uACFC":"\uC774 \uC870\uAC74\uC5D0\uC11C\uB3C4 \uC2E4\uD589 \uAE30\uC900 \uD1B5\uACFC",C=Bc(s,[f,d.execution_passed?"PASS":"FAIL",d.object_tracking?`${(1e3*Nh(d)).toFixed(2)} mm`:"\u2014",g.length?`${(100*Math.min(...g)).toFixed(1)}%`:"\u2014",p]);C.dataset.variant=u,C.dataset.passed=String(d.execution_passed)}Mo(e,"\uAC01 \uC870\uAC74\uC740 1\uD68C \uC2E4\uD589\uC785\uB2C8\uB2E4. FAIL\uC740 \uC704 \uAE30\uC900 \uC911 \uD558\uB098 \uC774\uC0C1 \uBBF8\uB2EC\uC744 \uB73B\uD569\uB2C8\uB2E4. \uC811\uCD09 \uBE44\uD65C\uC131\uD654\uB294 \uC811\uCD09 \uBB3C\uB9AC\uC758 \uD544\uC694\uC131\uC744 \uD655\uC778\uD558\uB294 \uC74C\uC131 \uB300\uC870\uAD70\uC774\uBA70, \uC678\uB780 \uC870\uAC74\uC740 \uC2A4\uD2B8\uB808\uC2A4 \uD14C\uC2A4\uD2B8\uC785\uB2C8\uB2E4. P \uC720\uC9C0\uC728\uC740 \uACC4\uD68D \uBC95\uC120 \uD558\uC911 > 0.1 N \uAD6C\uAC04 \uAE30\uC900\uC785\uB2C8\uB2E4.");let r=t.full?.selection||i.report.selection,a=ei("h4","\uC6D0\uBC29\uBC95\uC758 \uC811\uCD09 \uC720\uD615\xB7\uD314 \uBC30\uC815 \uD0D0\uC0C9");a.id="selection-results",e.append(a);let o=i.provenance.canonical_point_tool;if(o){let u=Math.hypot(...o.ee_to_tip.slice(0,3).map(d=>d[3]));Mo(e,`P \uACF5\uAD6C EE \u2192 \uC811\uCD09\uC810: ${(1e3*u).toFixed(0)} mm \xB7 \uAD6C \uBC18\uACBD ${(1e3*o.radius_m).toFixed(0)} mm. URDF\uC758 \uC2E4\uC81C \uC7A5\uCC29 \uAE38\uC774\uC774\uBA70 \uD654\uBA74\uB9CC \uC774\uB3D9\uC2DC\uD0A4\uB294 \uBCF4\uC815\uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uCD5C\uC18C \uAE38\uC774 \uCD5C\uC801\uD654\uB294 \uC218\uD589\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`)}let h=[...new Set([...r.accepted_candidates||[],...r.pruned_candidates||[],...r.rejections||[]].map(u=>u.types.join("/")))];Mo(e,`G = gripper, P = \uB3D9\uC77C spherical tip. \uD5C8\uC6A9 \uC720\uD615: ${h.join(", ")} \xB7 \uD314 \uBC30\uC815 \uD3EC\uD568 ${r.candidate_count}\uD6C4\uBCF4. \uB450 \uBC88\uC9F8 \uC9C0\uC9C0 \uC811\uCD09\uC740 P\uB85C \uC81C\uD55C\uD569\uB2C8\uB2E4. \uD604\uC7AC \uBAA9\uC801\uD568\uC218\uC5D0\uB294 \uACF5\uAD6C \uC218\xB7\uC720\uD615 \uBE44\uC6A9\uC774 \uC5C6\uC73C\uBA70, \uC120\uD0DD\uD55C \uACF5\uAD6C\uB294 \uC2DC\uD000\uC2A4 \uC804\uCCB4\uC5D0\uC11C \uACE0\uC815\uB429\uB2C8\uB2E4.`);let c=t.fixed_contact_types?.selection;c?.selected_types?.join("")===r.selected_types.join("")&&c.selected_assignment?.join("")===r.selected_assignment.join("")&&Mo(e,`\uC120\uD0DD \uACB0\uACFC ${r.selected_types.join("/")} \xB7 \uD314 ${r.selected_assignment.join("/")}\uB294 \uC218\uB3D9 \uACE0\uC815 \uAE30\uC900\uACFC \uAC19\uC2B5\uB2C8\uB2E4. \uC774 \uBE44\uAD50\uB294 \uC720\uD615 \uC120\uD0DD\uC758 \uC131\uB2A5 \uD5A5\uC0C1\uC744 \uC785\uC99D\uD558\uC9C0 \uBABB\uD569\uB2C8\uB2E4. \uC2E4\uD589 \uC911 \uACF5\uAD6C \uAD50\uD658\uC774\uB098 \uC7AC\uC120\uD0DD\uC740 \uAD6C\uD604\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.`);let l=af(["\uC720\uD615","\uBB3C\uB9AC \uD314 \uBC30\uC815","\uACB0\uACFC","\uBE44\uC6A9 / \uBE44\uC6A9 \uD558\uD55C","\uD310\uC815 \uADFC\uAC70"]);e.append(l);for(let u of r.accepted_candidates||[]){let d=u.types.join("")===r.selected_types.join("")&&u.assignment.join("")===r.selected_assignment.join("");Bc(l,[u.types.join("/"),u.assignment.join("/"),d?"\uC120\uD0DD":"\uACC4\uD68D \uD1B5\uACFC",u.objective.toFixed(3),d?"\uC120\uD0DD\uB41C \uC6D0\uBC29\uBC95\uC758 \uC5F0\uC18D \uACC4\uD68D\uACFC \uC2E4\uD589 \uD1B5\uACFC":"\uC5F0\uC18D \uACC4\uD68D \uD1B5\uACFC \xB7 \uBCC4\uB3C4 \uBB3C\uB9AC \uC2E4\uD589 \uBBF8\uD655\uC778"])}for(let u of r.pruned_candidates||[])Bc(l,[u.types.join("/"),[...new Set(u.assignments.map(d=>d.join("/")))].join(" \u2192 "),"\uAC00\uC9C0\uCE58\uAE30",u.sequence_cost_lower_bound.toFixed(3),cf(u.reason)]);for(let u of r.rejections||[])Bc(l,[u.types.join("/"),[...new Set(u.assignments.map(d=>d.join("/")))].join(" \u2192 "),"\uD0C8\uB77D","\u2014",cf(u.reason)]);Mo(e,"\uC791\uC740 \uBE44\uC6A9\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uBE44\uC6A9 \uD558\uD55C\uC740 \uD574\uB2F9 keyframe \uD574\uC5D0 \uB300\uD55C \uC870\uAC74\uBD80 \uBE44\uAD50\uC774\uBA70 \uC804\uC5ED IK \uCD5C\uC801\uC131 \uC99D\uBA85\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uD604\uC7AC \uC870\uD569\uC5D0\uC11C\uB294 G\uC758 wrench \uC5EC\uC720\uAC00 \uC720\uB9AC\uD574 \uC218\uB3D9 \uBC30\uCE58\uC640 \uAC19\uC740 \uACB0\uACFC\uAC00 \uB098\uC654\uC2B5\uB2C8\uB2E4.")}var Dh,Uh=0,mn=(i,e)=>{let t=document.createElement(i);return e!==void 0&&(t.textContent=e),t};function Fh(i,e){let t=mn("table"),n=mn("tr");e.forEach(r=>n.append(mn("th",r)));let s=mn("thead");return s.append(n),t.append(s,mn("tbody")),i.append(t),t}function kc(i,e){let t=mn("tr");return e.forEach(n=>{let s=mn("td");typeof n=="string"?s.textContent=n:s.append(n),t.append(s)}),i.tBodies[0].append(t),t}function Sr(i,e){let t=mn("p",e);t.className="fine",i.append(t)}function Oh(i,e){let t=mn("a",e+" \u2197");return t.href="?model="+i+"#algorithm-comparison-results",t}var ti=(i,e=3)=>i==null?"\u2014":Number(i).toFixed(e);async function uf(i){let e=++Uh,t=document.getElementById("algorithm-comparison-results");if(t||(t=mn("div"),t.id="algorithm-comparison-results",document.getElementById("experiment-results").append(t)),t.hidden=!i.full_task_recording&&!i.comparison_recording,!t.hidden)try{Dh??=fetch(new URL("./data/algorithm-comparisons.json",document.baseURI)).then(r=>{if(!r.ok)throw Error("No completed comparison evidence");return r.json()});let n=await Dh;if(e!==Uh)return;t.replaceChildren();let s=i.scenario?.startsWith("full_")?i.scenario.slice(5):i.id.startsWith("counterfactual_")?i.id.split("_")[1]:null;if(s&&n.contact_types?.[s]){let r=n.contact_types[s];t.append(mn("h4","\uB2E4\uB978 \uC811\uCD09 \uC720\uD615: \uAC19\uC740 \uACFC\uC81C\uC758 \uC804\uCCB4 \uC2DC\uD000\uC2A4 \uBE44\uAD50"));let a=Fh(t,["\uC720\uD615","\uACB0\uACFC \uB2E8\uACC4","\uC2E4\uD589","\uC2DC\uD000\uC2A4 \uBE44\uC6A9","\uCD5C\uB300 \uC704\uCE58 \uC624\uCC28 / \uADFC\uAC70"]);kc(a,[r.selected_types.join("/"),"\uC120\uD0DD\uB41C \uC6D0\uBC29\uBC95","PASS",ti(r.selected_sequence_objective),Oh("full_"+s,"\uC6D0\uBC29\uBC95 \uC7AC\uC0DD")]);for(let c of r.counterfactuals||[]){let l=c.failure||`${ti(1e3*c.maximum_position_error_m,2)} mm \xB7 ${c.failed_checks.join(", ")||"\uC804\uCCB4 \uAE30\uC900 \uD1B5\uACFC"}`;kc(a,[c.types.join("/"),c.stage==="planning"?"\uACC4\uD68D \uC911 \uD0C8\uB77D":"\uC0C8 native \uBB3C\uB9AC \uC2E4\uD589",c.execution_passed?"PASS":"FAIL",ti(c.sequence_objective),c.recording_id?Oh(c.recording_id,l):l])}Sr(t,"Source\xB7\uC9C8\uB7C9\xB7\uB9C8\uCC30\xB7\uACF5\uAD6C \uD55C\uACC4\xB7\uD314 \uBC30\uC815\xB7\uC81C\uC5B4 \uC124\uC815\uC744 \uB9DE\uCD94\uACE0 \uC720\uD615\uC744 \uAC15\uC81C\uB85C \uBC14\uAFC9\uB2C8\uB2E4. \uACC4\uD68D \uC2E4\uD328\uB294 \uC2E4\uC81C \uC2E4\uD589 \uC2E4\uD328\uC640 \uAD6C\uBD84\uD558\uBA70, \uB85C\uCEEC NLP \uC2E4\uD328\uAC00 \uC804\uC5ED \uBD88\uAC00\uB2A5\uC744 \uC99D\uBA85\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.");let o=mn("img");o.src="./data/type-counterfactual-comparison.svg",o.alt="\uD328\uB110 PPP\uC640 \uBC15\uC2A4 PPG\uC758 \uC2DC\uD000\uC2A4 \uBE44\uC6A9 \uC99D\uAC00 \uBC0F \uCD5C\uB300 \uC704\uCE58 \uC624\uCC28 \uBE44\uAD50",o.className="comparison-figure",t.append(o),t.append(mn("h4","\uAC19\uC740 \uC811\uCD09\uC810\xB7\uBB3C\uCCB4 \uC790\uC138\uC5D0\uC11C \uB3C5\uB9BD \uAC80\uC0B0\uD55C \uC720\uD615\uBCC4 \uC6A9\uB7C9"));let h=Fh(t,["\uC720\uD615","\uCD5C\uB300 \u03C1","\uACE0\uC815 keyframe \uBE44\uC6A9","\uACF5\uD1B5 \u03C1=0.1\uC5D0\uC11C \uAD00\uC808 \uD1A0\uD06C \uC5EC\uC720","\uD310\uC815"]);for(let c of r.rows)kc(h,[c.types.join("/"),ti(c.rho),ti(c.frozen_keyframe_cost),c.common_rho_metrics?ti(c.common_rho_metrics.minimum_joint_torque_margin_Nm,2)+" Nm":"\u2014",c.failure||`${c.planning_passed?"PASS":"FAIL"} \xB7 ${c.solver_status}`]);Sr(t,"\uC5EC\uAE30\uC11C\uB294 \uC811\uCD09 \uBB3C\uC9C8\uC810\uACFC \uBB3C\uCCB4 \uC790\uC138\uB97C \uACE0\uC815\uD558\uACE0, \uC2E4\uC81C \uACF5\uAD6C\uC5D0 \uB9DE\uCDB0 IK\xB7\uBC18\uB825\xB7\uD1A0\uD06C\uB97C \uB2E4\uC2DC \uACC4\uC0B0\uD569\uB2C8\uB2E4. \u03C1\uAC00 \uD074\uC218\uB85D, \uBE44\uC6A9\uC774 \uC791\uC744\uC218\uB85D \uC88B\uC2B5\uB2C8\uB2E4. \uC774 \uD45C\uC758 keyframe \uBE44\uC6A9\uACFC \uC704 \uC2DC\uD000\uC2A4 \uBE44\uC6A9\uC740 \uBCC4\uAC1C\uC758 \uAC12\uC785\uB2C8\uB2E4.")}if(n.source_robustness){let r=n.source_robustness;t.append(mn("h4","\uBCC4\uB3C4 \uD328\uB110 \uC9C0\uC9C0 \uC2E4\uD5D8 \xB7 Source polytope ON/OFF")),Sr(t,"\uC138 Panda\uAC00 \uAC19\uC740 spherical tip\uC73C\uB85C \uC790\uC720 \uD328\uB110\uC744 \uC9C0\uC9C0\uD569\uB2C8\uB2E4. ON\uC740 8\uAC1C box vertex, OFF\uB294 \uBA85\uBAA9 \uC911\uB825 \uD3C9\uD615\uB9CC\uC73C\uB85C \uC18C\uD615 \uC811\uCD09\uC810\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uC811\uCD09 \uC704\uCE58\uB9CC 4\uBC30 \uC804\uB2EC\uD558\uACE0 target \uC790\uC138\xB7\uBC18\uB825\xB7\uD1A0\uD06C\uB97C \uB2E4\uC2DC \uD489\uB2C8\uB2E4. \uD6A8\uACFC \uBD84\uB9AC\uB97C \uC704\uD574 target \uC811\uCD09\uC810\uC740 \uC804\uB2EC\uB41C \uC704\uCE58\uC5D0 \uACE0\uC815\uD569\uB2C8\uB2E4.");let a=Fh(t,["\uC678\uB825 \xB7 \uC704/\uC544\uB798","Polytope","\uB3C5\uB9BD source / target \u03C1","\uD310\uC815","\uCD5C\uB300 \uC704\uCE58 / \uD68C\uC804 \uC624\uCC28","\uD558\uC911 \uC811\uCD09 \uC720\uC9C0","\uC7AC\uC0DD"]);for(let h of r.trials){let c=h.force_N===0?"\uC5C6\uC74C":`${Math.abs(h.force_N)} N \xB7 ${h.force_N<0?"\uC704":"\uC544\uB798"}`,l=kc(a,[c,h.robustness_enabled?"ON":"OFF",`${ti(h.source_rho)} / ${ti(h.target_rho)}`,h.execution_passed?"PASS":"FAIL",`${ti(1e3*h.maximum_position_error_m,2)} mm / ${ti(h.maximum_rotation_error_rad)} rad`,ti(100*h.minimum_contact_fraction,1)+"%",Oh(h.recording_id,"\uC678\uB825\xB7\uC811\uCD09 \uC7AC\uC0DD")]);l.dataset.robustness=String(h.robustness_enabled),l.dataset.force=String(h.force_N),l.dataset.passed=String(h.execution_passed)}Sr(t,"\uAC01 \uD798 \uC870\uAC74\uC740 1\uD68C \uC2E4\uD589\uC785\uB2C8\uB2E4. \uC704\uCE58 8 mm, \uD68C\uC804 0.06 rad, \uD544\uC694\uD55C \uC811\uCD09 \uC720\uC9C0 99%\uC758 \uAC19\uC740 \uAE30\uC900\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uC678\uB825\uC740 \uAC19\uC740 \uAC00\uC7A5\uC790\uB9AC\xB74\u20135 s\uC5D0 \uC791\uC6A9\uD558\uB294 1 s sin\xB2 pulse\uC785\uB2C8\uB2E4. ON\uC758 \uC778\uC99D \uBC15\uC2A4 \uBC16\uC5D0\uC11C\uB294 \uC548\uC815\uC131\uC744 \uBCF4\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC815\uC801 wrench \uAC00\uB2A5\uC131\uC740 \uD3D0\uB8E8\uD504 \uB3D9\uC5ED\uD559\uC758 \uC548\uC815\uC131 \uC99D\uBA85\uC774 \uC544\uB2D9\uB2C8\uB2E4.");let o=mn("img");o.src="./data/source-robustness-comparison.svg",o.alt="\uAC19\uC740 \uC678\uB825\uC5D0\uC11C source polytope ON/OFF\uC758 \uCD5C\uB300 \uD68C\uC804 \uC624\uCC28\uC640 \uC811\uCD09 \uC720\uC9C0\uC728 \uC804\uCCB4 \uBE44\uAD50",o.className="comparison-figure",t.append(o),Sr(t,`\uAC80\uC99D \uC9D1\uD569\uC740 \uC9C0\uC815\uD55C \uC791\uC6A9\uC810\uC758 3\uCD95 \uD798\uC785\uB2C8\uB2E4. \uACF5\uD1B5 force-box D = ${r.protocol.target_force_box_scales_N.join(", ")} N \xB7 \uC791\uC6A9\uC810 = [${r.protocol.force_application_point_body_m.join(", ")}] m \xB7 source \uACF5\uD1B5 geometry weight = ${r.protocol.geometry_weight}. \uACE0\uC815 E,D\xB7\uC81C\uC5B4\uAE30\xB7\uACC4\uD68D ID\uB97C \uAE30\uB85D\uD558\uBA70 \uD798 \uC870\uAC74\uB9C8\uB2E4 \uC81C\uC5B4\uAE30\uB97C \uC870\uC815\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`)}Sr(t,"\uAD6C\uD604 \uBC94\uC704: contracted groups\uB294 \uC8FC\uC5B4\uC9C4 \uC785\uB825\uC774\uBA70 \uD559\uC2B5 \uCD94\uB860\uC744 \uC2E4\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE30\uC874 \uC804\uCCB4 \uB3D9\uC791\uC740 \uC81C\uD55C\uB41C \uC811\uCD09 \uD6C4\uBCF4\uC640 midpoint \uBCC0\uD615\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uBD84\uB9AC \uC2E4\uD5D8\uC744 \uC6D0\uACE0 \uC804\uCCB4 \uC54C\uACE0\uB9AC\uC998\uC758 \uC644\uC804\uD55C \uAC80\uC99D\uC73C\uB85C \uD574\uC11D\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}catch{e===Uh&&(t.hidden=!0),Dh=void 0}}var Q=i=>document.getElementById(i),ot,Ls,pf,mf=!1,gf,df=0,vn=i=>{Q("experiment-state").textContent=i},ff={queued:"\uB300\uAE30",source_refinement_and_optimization:"\uC18C\uD615 \uC811\uCD09\uC810 refinement \xB7 target \uD558\uC911/\uD1A0\uD06C \uCD5C\uC801\uD654",optimization:"SE(3) IK \uACBD\uB85C \xB7 IPOPT \uC811\uCD09\uB825/\uD1A0\uD06C \uCD5C\uC801\uD654",simulation:"MuJoCo \uB3D9\uC5ED\uD559 \uC2E4\uD589",validation:"\uC811\uCD09 \xB7 \uC0BD\uC785 \xB7 \uD574\uC81C \uAC80\uC99D",export:"\uAE30\uB85D \uB0B4\uBCF4\uB0B4\uAE30",complete:"\uACC4\uC0B0 \uC644\uB8CC",failed:"\uC2E4\uD328",cancelled:"\uCDE8\uC18C\uB428"},zc=()=>["hinged_door","folding_panel","drawer","free_box_lid","free_folding_object","free_portable_drawer"].includes(ot?.id),Bh=()=>ot?.id==="table_assembly",Vc=()=>["panel_fixture","mobile_panel"].includes(ot?.id),Zi=()=>ot?.id==="mobile_panel",yx={grip_and_support:"\uC0C1\uD310 \uD30C\uC9C0\xB7\uAD6C\uD615 \uC9C0\uC9C0",grasp_settled:"\uD30C\uC9C0 \uC720\uC9C0",lift_tabletop:"\uC0C1\uD310\xB7\uB2E4\uB9AC \uB4E4\uC5B4 \uC62C\uB9AC\uAE30",reorient_tabletop:"\uC0C1\uD310 12\xB0 \uC7AC\uC815\uB82C",approach_socket:"\uB2E4\uB9AC \uC811\uADFC",align_leg:"peg / socket \uC815\uB82C",insert_leg:"\uB2E4\uB9AC \uC0BD\uC785",assembled_and_released:"gripper \uD574\uC81C\xB7\uC870\uB9BD \uC720\uC9C0"};function vx(){let i=ot.id.startsWith("free_"),e=!ot.id.includes("drawer");Q("keyframe-inputs").replaceChildren(),Q("preset-tag").textContent=i?"PANDA \xD7 3 \xB7 FREE ARTICULATED":"COMPONENT \xB7 SINGLE ARM",Q("builder-title").textContent={hinged_door:"\uBB38 \uC5F4\uAE30",folding_panel:"\uC811\uC774\uC2DD \uC0C1\uD310 \uD3BC\uCE58\uAE30",drawer:"\uC11C\uB78D \uB2F9\uAE30\uAE30",free_box_lid:"\uC790\uC720 \uBC15\uC2A4 \xB7 grip/support + \uB69C\uAED1 \uC5F4\uAE30",free_folding_object:"\uC790\uC720 \uC811\uC774\uC2DD \uD328\uB110 \xB7 \uC9C0\uC9C0 + \uB0A0\uAC1C \uD3BC\uCE58\uAE30",free_portable_drawer:"\uC790\uC720 \uC218\uB0A9\uD568 \xB7 \uC9C0\uC9C0 + \uC11C\uB78D \uB2F9\uAE30\uAE30"}[ot.id],Q("builder-note").textContent=i?"\uC138\uACC4\uC5D0 \uACE0\uC815\uB418\uC9C0 \uC54A\uC740 \uBCF8\uCCB4 + \uB0B4\uBD80 \uAD00\uC808 \xB7 G / P / G \xB7 dense contact \u2192 contraction \u2192 3-arm realization":`\uC218\uB3D9 ${e?"hinge":"rail"} \xB7 \uBB3C\uCCB4 actuator 0 \xB7 ${ot.tool==="G"?"native gripper":"spherical point tool"}`,Q("tool-chips").replaceChildren();let t=document.createElement("span");t.textContent=i?"\u22C8 \uBCF8\uCCB4 \uD30C\uC9C0 \xB7 \u25CF \uBCF8\uCCB4 \uC9C0\uC9C0 \xB7 \u22C8 \uB0B4\uBD80 \uB9C1\uD06C \uC870\uC791":ot.tool==="G"?"\u22C8 Gripper handle grasp":"\u25CF Spherical point contact",Q("tool-chips").append(t),Q("mass-control").hidden=!0,Q("panel-mass").disabled=!0,Q("source-refinement-control").hidden=!0,Q("duration-control").hidden=!1,Q("assembly-duration").disabled=!1,Q("assembly-duration").min=12,Q("planner-description").textContent=i?"\uC18C\uD615 \uC785\uB825\uC758 \uB9C1\uD06C\xB7\uAE30\uB2A5\uBCC4 dense contact\uB97C \uB300\uD45C \uC811\uCD09\uC73C\uB85C contraction\uD569\uB2C8\uB2E4. \uC704\uCE58\uB9CC 4\uBC30 \uC804\uB2EC\uD558\uACE0 \uC138 \uD314\uC758 \uC790\uC138\xB7\uC811\uCD09\uB825\xB7\uD1A0\uD06C\uC640 \uC790\uC720 \uBCF8\uCCB4+\uB0B4\uBD80 \uAD00\uC808\uC758 \uB3D9\uC5ED\uD559\uC744 \uACF5\uB3D9\uC73C\uB85C \uB9DE\uCDA5\uB2C8\uB2E4. \uBCF8\uCCB4\uB294 \uACF5\uC911\uC5D0\uC11C \uB85C\uBD07 \uC811\uCD09\uC73C\uB85C \uC9C0\uC9C0\uD558\uBA70 world \uACE0\uC815 \uAD00\uC808\xB7\uBB3C\uCCB4 actuator\xB7weld\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. Group ID\uC640 assignment/path\uB294 supplied synthetic \uC785\uB825\uC785\uB2C8\uB2E4.":"\uBB3C\uCCB4\uC758 \uC218\uB3D9 \uAD00\uC808 \uAD00\uC131\xB7\uC911\uB825\xB7\uC2A4\uD504\uB9C1\xB7\uB9C8\uCC30\uACFC \uC811\uCD09\uB825\xB7\uD314 \uD1A0\uD06C\uB97C \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uBB3C\uCCB4 pose\uB97C \uAC15\uC81C\uD558\uAC70\uB098 actuator\uB85C \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC811\uCD09\uC810\xB7\uCD08\uAE30 \uD30C\uC9C0\xB7\uAD00\uC808 \uACBD\uB85C\uB294 \uC8FC\uC5B4\uC9C4 \uC870\uAC74\uC774\uBA70, articulated contraction \uD559\uC2B5\uC740 \uC544\uC9C1 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";let n=Number(Q("assembly-duration").value)/ot.duration;for(let[s,r,a]of[["\uC811\uCD09",0,ot.initial_coordinate],...i?[["\uBCF8\uCCB4 lift",ot.lift_end,ot.initial_coordinate]]:[],["\uC2DC\uC791",ot.motion_start,ot.initial_coordinate],["\uC911\uAC04",(ot.motion_start+ot.motion_end)/2,(ot.initial_coordinate+ot.target_coordinate)/2],["\uBAA9\uD45C",ot.motion_end,ot.target_coordinate],["\uC720\uC9C0",ot.duration,ot.target_coordinate]]){let o=document.createElement("div");o.className="assembly-key";for(let h of[s,`${(r*n).toFixed(1)} s`,`${(a*(e?180/Math.PI:1e3)).toFixed(1)} ${e?"deg":"mm"}`]){let c=document.createElement("span");c.textContent=h,o.append(c)}Q("keyframe-inputs").append(o)}Q("keyframe-help").textContent="\uCD08\uAE30 \uC811\uCD09 \u2192 \uC774\uB3D9 \u2192 \uC720\uC9C0 \xB7 \uBB3C\uCCB4 \uAD00\uC808\uC758 \uCE21\uC815\uAC12\uC744 \uC7AC\uC0DD\uD569\uB2C8\uB2E4.",(!i||Q("contacts-json").dataset.preset!==ot.id)&&(Q("contacts-json").dataset.preset=ot.id,Q("contacts-json").value=JSON.stringify(i?ot.dense_source_groups:{kind:ot.tool,link:"moving",point_link:ot.contact_object,inward_link:ot.inward_object},null,2)),Q("contacts-json").readOnly=!i,Q("contacts-file").disabled=!i}function kh(){if(zc())return vx();let i=Bh(),e=Vc(),t=i||e;Q("keyframe-inputs").replaceChildren(),Q("preset-tag").textContent=Zi()?"RBY1 + PANDA":"PANDA \xD7 3",Q("builder-title").textContent=Zi()?"\uC791\uC5C5\uC601\uC5ED \uD655\uC7A5 \xB7 RBY1 + Panda":e?"\uBCF8 \uC2E4\uD5D8 \xB7 \uD328\uB110 \u2192 \uC9C0\uADF8 \u2192 \uB9B4\uB9AC\uC2A4":i?"\uCC45\uC0C1 \uC0C1\uD310\xB7\uB2E4\uB9AC \uC870\uB9BD":"Three Franka \xB7 \uD328\uB110 \uC6B4\uBC18",Q("builder-note").textContent=Zi()?"\uCC28\uB3D9\uAD6C\uB3D9 \uBAA8\uBC14\uC77C \uB4C0\uC5BC\uC554 + \uACE0\uC815 Panda \xB7 \uC2E4\uC81C \uBCA0\uC774\uC2A4\xB7\uBB3C\uCCB4 \uB3D9\uC5ED\uD559":e?"Panda \xD7 3 \xB7 G / P / P \xB7 \uC790\uC720 \uD328\uB110 1\uAC1C \xB7 \uACE0\uC815 \uC9C0\uADF8":i?"\uC2E4\uC81C Panda \xD7 3 \xB7 arm 21 + finger 4 DoF \xB7 \uC790\uC720 \uBB3C\uCCB4 2\uAC1C":"\uC2E4\uC81C Panda \xD7 3 \xB7 arm 21 + finger 2 DoF \xB7 \uC790\uC720 \uBB3C\uCCB4 1\uAC1C",Q("tool-chips").replaceChildren();for(let n of Zi()?["\u22C8 RBY1 gripper","\u25CF RBY1 sphere support","\u25CF Fixed Panda support"]:e?["\u22C8 Edge gripper","\u25CF Left sphere support","\u25CF Right sphere support"]:i?["\u22C8 \uC0C1\uD310 gripper","\u25CF Sphere support","\u22C8 \uB2E4\uB9AC gripper"]:["\u25CF Sphere \xB7 point","\u22C8 Panda hand","\u2299 Vacuum seal"]){let s=document.createElement("span");s.textContent=n,Q("tool-chips").append(s)}if(Q("mass-control").hidden=t,Q("panel-mass").disabled=t,Q("source-refinement-control").hidden=!e,Q("duration-control").hidden=!t,Q("assembly-duration").disabled=!t,Q("assembly-duration").min=Zi()?30:24,Q("planner-description").textContent=Zi()?"\uACE0\uC815 Panda\uAC00 \uCD08\uAE30 \uC9C0\uC9C0\uB97C \uB118\uAE34 \uB4A4 \uD1B5\uB85C \uBC16\uC73C\uB85C \uBB3C\uB7EC\uB0A9\uB2C8\uB2E4. RBY1\uC740 \uBC14\uD034\uB97C \uAD6C\uB3D9\uD574 1.4 m \uC774\uB3D9\uD558\uACE0 \uACE0\uC815 \uBCA0\uC774\uC2A4\uC758 \uB3C4\uB2EC \uBC94\uC704 \uBC16\uC5D0\uC11C \uD328\uB110\uC744 \uC9C0\uADF8\uC5D0 \uC548\uCC29\xB7\uD574\uC81C\uD569\uB2C8\uB2E4. \uBCA0\uC774\uC2A4\uC640 \uD328\uB110\uC740 \uC790\uC720 \uAC15\uCCB4\uC774\uBA70 \uC704\uCE58\uB97C \uAC15\uC81C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC9C1\uC120 \uACBD\uB85C\xB7\uBAA8\uB4DC\uC640 \uCD08\uAE30 \uD30C\uC9C0\uB294 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4.":e?"1/4 \uC2A4\uCF00\uC77C\uC758 synthetic contracted contact \uC704\uCE58\uB97C \uBA3C\uC800 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uC704\uCE58\uB9CC 4\uBC30 \uC804\uB2EC\uD558\uACE0 2 kg \uD328\uB110\uC758 \uC811\uCD09\uB825\xB7\uD1A0\uD06C\uB97C \uB2E4\uC2DC \uD489\uB2C8\uB2E4. \uCD08\uAE30 \uD30C\uC9C0\uC640 SE(3) \uACBD\uB85C\uB294 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4. 22 s \uC9C0\uADF8 \uC548\uCC29 \u2192 \uD558\uC911 \uC804\uB2EC \u2192 26 s \uC804\uCCB4 \uACF5\uAD6C \uD574\uC81C. \uD559\uC2B5 \uCD94\uB860\xB7\uC2E4\uC81C \uB85C\uBD07 \uC2E4\uD589\uC740 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":i?"2 kg \uC0C1\uD310\uC744 grip & support\uD574 \uC790\uC138\uB97C \uBC14\uAFB8\uACE0 0.4 kg \uB2E4\uB9AC\uB97C \uC0BD\uC785\uD569\uB2C8\uB2E4. 28 s\uC5D0 \uB2E4\uB9AC gripper\uB97C \uC5F4\uC5B4 \uC790\uC720 \uBB3C\uCCB4\uC758 socket \uC811\uCD09 \uC720\uC9C0\uB97C \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uC2DC\uAC04 \uBCC0\uACBD \uC2DC \uC804\uCCB4 \uACBD\uB85C\uC640 \uC81C\uC5B4 \uBAA8\uB4DC\uB97C \uD568\uAED8 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4.":"\uACE0\uC815 \uC790\uC138\uC758 IK \uC811\uCD09 \uACBD\uB85C\uC5D0\uC11C \uC811\uCD09\uB825\xB7\uD1A0\uD06C\uB97C \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uC804\uCCB4 CITO \uD0D0\uC0C9\uC740 \uBCC4\uB3C4 Cartesian \uC608\uC81C\uC785\uB2C8\uB2E4.",Q("keyframe-help").textContent=e?`${ot.keyframes.length}\uAC1C keyframe \xB7 \uC18C\uD615 source refinement\uC640 target \uAC80\uC99D\uC744 \uB530\uB85C \uAE30\uB85D`:i?"\uAE30\uBCF8 8\uAC1C keyframe \xB7 \uC0C1\uD310\uC758 z / pitch\uC640 \uB2E4\uB9AC z \uD45C\uC2DC \xB7 \uC785\uB825 \uC2DC\uAC04\uC5D0 \uBE44\uB840\uD574 \uC7AC\uACC4\uC0B0":"\uC704\uCE58 m \xB7 \uC2DC\uAC04 s \xB7 \uACE0\uC815 \uC790\uC138 xyzw = [0, 0, 0, 1]",t){let n=Number(Q("assembly-duration").value)/(ot.simulation?.duration||ot.duration);for(let[s,r]of ot.keyframes.entries()){let a=document.createElement("div");a.className="assembly-key";let o=e?r.object_pose:r.tabletop,h=2*Math.atan2(o[4],o[6])*180/Math.PI;for(let c of[`0${s+1}`,`${(r.time*n).toFixed(1)} s`,yx[r.id]||r.id,e?`panel ${o[2].toFixed(2)} m / ${h.toFixed(0)}\xB0`:`top ${o[2].toFixed(2)} m / ${h.toFixed(0)}\xB0 \xB7 leg ${r.leg[2].toFixed(2)} m`]){let l=document.createElement("span");l.textContent=c,a.append(l)}Q("keyframe-inputs").append(a)}e||(Q("contacts-json").value=JSON.stringify(ot.arms.map(s=>({arm_id:s.id,kind:s.kind,object:s.object,point_object:s.point_object,normal_object:s.normal_object})),null,2))}else{for(let[n,s]of ot.keyframes.entries()){let r=document.createElement("div");r.className="keyframe-input";let a=document.createElement("span");a.textContent=`0${n+1} ${s.id}`,r.append(a);for(let[o,h]of[["time",s.time],["x",s.object_pose[0]],["y",s.object_pose[1]],["z",s.object_pose[2]]]){let c=document.createElement("label");c.textContent=o==="time"?"t \xB7 s":o+" \xB7 m";let l=document.createElement("input");l.type="number",l.step=".01",l.value=h,l.required=!0,l.dataset.key=n,l.dataset.field=o,l.setAttribute("aria-label",`${s.id} ${o}`),l.min=o==="time"?0:-.9,l.max=o==="time"?12:1.2,c.append(l),r.append(c)}Q("keyframe-inputs").append(r)}Q("contacts-json").value=JSON.stringify(ot.contracted_contacts,null,2),Q("panel-mass").value=ot.object.mass}Q("contacts-json").readOnly=i,Q("contacts-file").disabled=i}function _f(i){let e=i.report;if(!e)return;Q("experiment-results").hidden=!1,uf(i);let t=Q("ablation-results");if(t||(t=document.createElement("div"),t.id="ablation-results",Q("experiment-results").append(t)),t.hidden=!i.full_task_recording,t.replaceChildren(),i.comparison_recording){let o=Object.values(e.object_tracking);Q("result-tracking").textContent=`${e.tracking_passed?"PASS":"FAIL"} \xB7 ${(1e3*Math.max(...o.map(c=>c.maximum_position_error_m))).toFixed(2)} mm`,Q("result-forces").textContent=e.sampled_interface_wrench_capability.passed&&Object.values(e.jaw_force).every(c=>c.passed)&&e.minimum_actuator_margin_Nm>=-1e-8?"PASS":"FAIL",Q("result-seal-label").textContent="STABILITY / CONTACT";let h=Object.values(e.maintained_contact_fraction).filter(c=>c!==null);Q("result-seal").textContent=`${e.execution_passed?"PASS":"FAIL"} \xB7 ${(100*Math.min(...h)).toFixed(1)}% contact`,Q("result-residual").textContent=e.source?`\u03C1 ${e.source.source_rho_after.toFixed(3)}`:e.selection.selected_types.join(" / "),Q("source-result").hidden=!1,Q("source-result").textContent=e.source?`Source polytope ${e.source.robustness_enabled?"ON \xB7 8 vertices":"OFF \xB7 nominal only"} \xB7 \uACF5\uD1B5 polytope \uB3C5\uB9BD \uAC80\uC0B0 \u03C1 ${e.source.source_rho_after.toFixed(3)} \xB7 target \u03C1 ${e.source.target_rho.toFixed(3)} \xB7 \uACE0\uC815 \uC811\uCD09\uC810\uC5D0\uC11C \uC790\uC138\xB7\uBC18\uB825\xB7\uD1A0\uD06C \uC7AC\uACC4\uC0B0`:`\uAC15\uC81C \uC720\uD615 ${e.selection.selected_types.join(" / ")} \xB7 \uC804\uCCB4 \uACC4\uD68D \uBE44\uC6A9 ${e.selection.objective.toFixed(3)} \xB7 native \uC2E4\uD589 ${e.execution_passed?"PASS":"FAIL"}`;for(let c of["workspace-result","robustness-result"])Q(c).hidden=!0;Q("report-json").textContent=JSON.stringify(e,null,2);return}if(i.full_task_recording){let o=Object.values(e.object_tracking);Q("result-tracking").textContent=`${e.tracking_passed?"PASS":"FAIL"} \xB7 ${(1e3*Math.max(...o.map(h=>h.maximum_position_error_m))).toFixed(2)} mm`,Q("result-forces").textContent=e.sampled_interface_wrench_capability.passed&&Object.values(e.jaw_force).every(h=>h.passed)&&e.minimum_actuator_margin_Nm>=-1e-8?"PASS":"FAIL",Q("result-seal-label").textContent="TASK / LOADED CONTACT",Q("result-seal").textContent=`${e.task_passed&&e.contact_retention_passed?"PASS":"FAIL"} \xB7 ${(100*Math.min(...Object.values(e.maintained_contact_fraction).filter(h=>h!==null))).toFixed(1)}% contact`,Q("result-residual").textContent=e.selection.selected_types.join(" / "),Q("source-result").hidden=!1,Q("source-result").textContent=`SELECTION \xB7 ${e.selection.accepted_candidates.length} accepted / ${e.selection.candidate_count} \uD6C4\uBCF4 \xB7 ${(e.selection.pruned_candidates||[]).length} \uBE44\uC6A9 \uAC00\uC9C0\uCE58\uAE30 \xB7 physical arms ${e.selection.selected_assignment.join(", ")} \xB7 ${e.selection.keyframes} keyframes / ${e.selection.intervals} \uC804\uC774 / ${(e.selection.interval_methods||[]).filter(h=>h==="motion_cost").length} \uC774\uB3D9 CITO \xB7 source certificates ${e.selection.source_certificates.filter(h=>h.source_certificate??h.source_refinement_passed??!1).length}/${e.selection.keyframes}`;for(let h of["workspace-result","robustness-result"])Q(h).hidden=!0;hf(i,t),Q("report-json").textContent=JSON.stringify(e,null,2);return}if(["robotiq_clamp","coupled_panel_lift"].includes(i.scenario)){for(let h of["source-result","workspace-result","robustness-result"])Q(h).hidden=!0;let o=i.scenario==="robotiq_clamp";Q("result-tracking").textContent=o?e.mechanics.passed?"PASS \xB7 mechanics":"FAIL":(e.tracking_and_contact_passed?"PASS":"FAIL")+` \xB7 ${(e.maximum_position_error_m*1e3).toFixed(3)} mm`,Q("result-forces").textContent=o?`${Math.max(...e.maximum_jaw_force_N).toFixed(2)} N / jaw`:e.physical_finger_force_limits_passed&&e.sampled_interface_wrench_capability.passed?"PASS":"FAIL",Q("result-seal-label").textContent=o?"NATIVE GRIPPER / FREE BLOCK":"MULTI-ARM / FIRST LIFT",Q("result-seal").textContent=o?`${e.native_internal_equalities} internal constraints \xB7 no object weld`:`${(100*Math.min(...Object.values(e.maintained_contact_fraction).filter(h=>h!==null))).toFixed(1)}% contact`,Q("result-residual").textContent=o?Math.max(...Object.values(e.mechanics.residuals)).toExponential(2):e.independent_plan.residuals.momentum.toExponential(2),Q("report-json").textContent=JSON.stringify(e,null,2);return}if(e.articulated_object||e.free_articulated_object){let o=e.coordinate_units==="rad",h=o?180/Math.PI:1e3,c=o?"deg":"mm";Q("result-tracking").textContent=`${e.execution_passed?"PASS":"FAIL"} \xB7 ${(e.final_error*h).toFixed(3)} ${c}`,Q("result-forces").textContent=`${(e.peak_contact_force_N||Math.max(...e.peak_contact_force_per_arm_N)).toFixed(2)} N \xB7 peak`,Q("result-seal-label").textContent=e.free_articulated_object?"FREE BODY / 3-ARM CONTACT":"PASSIVE JOINT / CONTACT",Q("result-seal").textContent=`0 actuators \xB7 ${(100*(Array.isArray(e.contact_fraction)?Math.min(...e.contact_fraction):e.contact_fraction)).toFixed(1)}% contact`;for(let l of["source-result","workspace-result","robustness-result"])Q(l).hidden=!0;e.contraction&&(Q("source-result").hidden=!1,Q("source-result").textContent=(e.full_paper_pipeline_executed?"FULL PIPELINE \xB7 ":"NOMINAL BASELINE \xB7 Sec. III-B\u2013IV full pipeline \uBBF8\uC2E4\uD589 \xB7 ")+`CONTRACTION \xB7 ${e.contraction.dense_sample_count} dense samples \u2192 ${e.contraction.contracted_contact_count} link-aware anchors \u2192 ${e.arm_count} arms \xB7 \xD7${e.contraction.source_to_target_scale} geometry transfer \xB7 synthetic group IDs`),Q("result-residual").textContent=e.primal_residual.toExponential(2),Q("report-json").textContent=JSON.stringify(e,null,2);return}let n=e.scenario==="table_assembly",s=e.scenario==="panel_fixture",r=e.scenario==="mobile_panel",a=s?e.keyframe_errors.map(o=>o.panel.translation_m):n?e.keyframe_errors.flatMap(o=>[o.tabletop.translation_m,...o.time<=(e.leg_release_time_s||28)?[o.leg.translation_m]:[]]):e.keyframe_errors.map(o=>o.translation_m);if(Q("result-tracking").textContent=(e.tracking_passed?"PASS":"FAIL")+" \xB7 "+Math.max(...a.map(o=>o*1e3)).toFixed(2)+" mm",Q("result-forces").textContent=e.force_envelopes_passed?"PASS":"FAIL",Q("result-seal-label").textContent=s||r?"JIG SUPPORT / RELEASE":n?"ASSEMBLY / RELEASE":"SUCTION SEAL",Q("result-seal").textContent=s||r?e.fixture_supported&&e.all_tools_released?`SUPPORTED \xB7 ${e.jig_support_final_N.toFixed(2)} N`:"FAIL":n?e.assembly_seated&&e.leg_released?`SEATED \xB7 ${(e.insertion_depth_m*1e3).toFixed(1)} mm`:"FAIL / \uBBF8\uC870\uB9BD":e.seal_retained_before_vent?"\uC720\uC9C0":"\uC774\uD0C8",Q("workspace-result").hidden=!r,r){let o=e.workspace_comparison.panda,h=e.workspace_comparison.tip_right;Q("workspace-result").textContent=`WORKSPACE \xB7 \uBAA9\uC801 \uC811\uCD09\uC810: \uACE0\uC815 Panda ${o.fixed_base_target_distance_m.toFixed(3)} m > \uB3C4\uB2EC \uC0C1\uD55C ${o.URDF_chain_radius_bound_m.toFixed(3)} m \xB7 RBY1 (\uB3D9\uC77C torso) ${h.fixed_base_target_distance_m.toFixed(3)} m > ${h.URDF_chain_radius_bound_m.toFixed(3)} m \xB7 \uC2E4\uC81C \uBCA0\uC774\uC2A4 \uC774\uB3D9 ${e.base_travel_m.toFixed(3)} m`}Q("source-result").hidden=!(s||r),(s||r)&&(Q("source-result").textContent=`SOURCE \xB7 ${e.source.synthetic_input?"synthetic \uC785\uB825":"\uC678\uBD80 contracted \uC785\uB825"} \xB7 refinement ${e.source.source_refinement_enabled?"ON":"OFF"} \xB7 \u03C1 ${e.source.source_rho_before.toFixed(3)} \u2192 ${e.source.source_rho_after.toFixed(3)} \xB7 target ${e.target_validation?.length?"\uCD5C\uC18C \u03C1 "+Math.min(...e.target_validation.map(o=>o.rho)).toFixed(3):"nominal \uACF5\uB3D9 \uD1A0\uD06C \uAC80\uC99D"} \xB7 \uD559\uC2B5 \uCD94\uB860 \uBBF8\uC2E4\uD589`),Q("robustness-result").hidden=!e.robustness,e.robustness&&(Q("robustness-result").textContent=`\uC678\uB825 ${e.robustness.force_peak_N} N \xB7 \uC790\uC138 \uD68C\uBCF5 ${e.robustness.recovery_passed?"PASS":"FAIL"} \xB7 \uC811\uCD09 \uD5C8\uC6A9\uC601\uC5ED \uD3EC\uD568 \uC804\uCCB4 \uAC80\uC0AC ${e.robustness.all_task_checks_passed?"PASS":"FAIL"} \xB7 \uCD5C\uB300 \uC624\uCC28 ${(e.robustness.peak_pose_error_m*1e3).toFixed(2)} mm`),Q("result-residual").textContent=e.primal_residual.toExponential(2),Q("report-json").textContent=JSON.stringify(e,null,2)}async function Eo(i,e={}){let t=i.startsWith("/api/")?new URL("."+i,document.baseURI):i,n=await fetch(t,e),s=await n.json();if(!n.ok)throw Error(s.error||"\uACC4\uC0B0 \uC11C\uBC84 \uC624\uB958");return s}function So(){clearTimeout(pf),Ls=null,Q("experiment-run").disabled=!mf,Q("experiment-cancel").disabled=!0,Q("scenario-preset").disabled=!1}async function xf(){let i=Ls;if(i)try{let e=await Eo("/api/experiments/"+i);if(Ls!==i)return;if(vn((ff[e.stage]||e.stage)+(e.time_s!==void 0?` \xB7 ${e.time_s.toFixed(1)} / ${e.duration_s.toFixed(1)} s`:"")),e.state==="completed"){let t=await Eo(e.recording);for(let n of t.instances)n.manifest=new URL(n.manifest,location.href).href;window.dispatchEvent(new CustomEvent("experiment-result",{detail:t})),_f(t),So()}else["failed","cancelled"].includes(e.state)?(vn(e.error||ff[e.stage]),So()):pf=setTimeout(xf,1e3)}catch(e){Ls===i&&(vn(e.message),So())}}Q("experiment-form").onsubmit=async i=>{i.preventDefault();try{let e;if(zc())e={preset:ot.id,duration:Number(Q("assembly-duration").value),...ot.id.startsWith("free_")?{dense_source_groups:JSON.parse(Q("contacts-json").value)}:{}};else if(Vc())e={preset:Zi()?"mobile_panel":"panel_fixture",duration:Number(Q("assembly-duration").value),refine_source:Q("source-refinement").checked,contracted_source:JSON.parse(Q("contacts-json").value)};else if(Bh())e={preset:"table_assembly",duration:Number(Q("assembly-duration").value)};else{let n=structuredClone(ot.keyframes);document.querySelectorAll("#keyframe-inputs input").forEach(s=>{let r=n[Number(s.dataset.key)],a=Number(s.value);s.dataset.field==="time"?r.time=a:r.object_pose[["x","y","z"].indexOf(s.dataset.field)]=a}),e={preset:"three_franka",mass:Number(Q("panel-mass").value),keyframes:n,contacts:JSON.parse(Q("contacts-json").value)}}Q("experiment-run").disabled=!0,Q("scenario-preset").disabled=!0,vn("\uC791\uC5C5 \uC81C\uCD9C \uC911\u2026"),Ls=(await Eo("/api/experiments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).id,Q("experiment-cancel").disabled=!1,await xf()}catch(e){vn(e.message),So()}};Q("experiment-cancel").onclick=async()=>{if(Ls)try{await Eo("/api/experiments/"+Ls+"/cancel",{method:"POST"}),vn("\uCDE8\uC18C\uB428"),So()}catch(i){vn(i.message)}};Q("experiment-reset").onclick=()=>{Q("contacts-json").dataset.preset="",Q("assembly-duration").value=zc()?ot.duration:Zi()?36:30,Vc()&&(Q("contacts-json").value=JSON.stringify(ot.contracted_source,null,2)),kh()};Q("assembly-duration").oninput=()=>{(zc()||Bh()||Vc())&&Q("assembly-duration").checkValidity()&&kh()};Q("contacts-file").onchange=async i=>{try{let e=i.target.files[0];if(!e)return;if(e.size>32768)throw Error("32 KB \uC774\uD558 JSON\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.");let t=JSON.parse(await e.text());Q("contacts-json").value=JSON.stringify(t.dense_source_groups||t.contracted_contacts||t,null,2),vn("\uC811\uCD09 JSON\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. \uC2E4\uD589 \uC2DC \uD45C\uBA74\xB7\uBC95\uC120\uC744 \uAC80\uC0AC\uD569\uB2C8\uB2E4.")}catch(e){vn(e.message)}};function bx(i){let e=Mr(i).preset;document.querySelector(".experiment-builder").hidden=!e&&!i.full_task_recording&&!i.comparison_recording,Q("experiment-form").hidden=!e,(i.full_task_recording||i.comparison_recording)&&(Q("builder-title").textContent=i.title,Q("builder-note").textContent="\uACC4\uD68D\xB7\uC2E4\uD589\uACFC \uD1B5\uC81C \uBE44\uAD50\uC758 \uCE21\uC815 \uACB0\uACFC",Q("preset-tag").textContent=i.report.selection?.selected_types.join(" / ")||"SOURCE ROBUSTNESS",Q("source-refinement-control").hidden=!0),Q("experiment-results").hidden=!i.report,e&&(Q("scenario-preset").value=e,gf!==e&&zh(e).catch(t=>vn(t.message))),_f(i)}window.addEventListener("recording-selected",i=>bx(i.detail));async function zh(i){let e=++df;gf=i;let t=["hinged_door","folding_panel","drawer","free_box_lid","free_folding_object","free_portable_drawer"].includes(i),n=t?`./data/${i}-preset.json`:i==="mobile_panel"?"./data/mobile-preset.json":i==="panel_fixture"?"./data/panel-preset.json":i==="table_assembly"?"./data/assembly-preset.json":"./data/franka-preset.json",s=await(await fetch(n)).json();["panel_fixture","mobile_panel"].includes(i)&&(s.contracted_source=await(await fetch(i==="mobile_panel"?"./data/mobile-source.json":"./data/panel-source.json")).json()),e===df&&(ot=s,Q("assembly-duration").value=t?ot.duration:i==="mobile_panel"?36:30,s.contracted_source&&(Q("contacts-json").value=JSON.stringify(s.contracted_source,null,2)),kh())}Q("scenario-preset").onchange=async()=>{try{await zh(Q("scenario-preset").value),window.dispatchEvent(new CustomEvent("experiment-preview",{detail:Q("scenario-preset").value}))}catch(i){vn(i.message)}};async function yf(){for(let t of br){let n=rf().filter(r=>r.category===t.id);if(!n.length)continue;let s=document.createElement("optgroup");s.label=t.title;for(let r of n){let a=document.createElement("option");a.value=r.id,a.textContent=r.title,s.append(a)}Q("scenario-preset").append(s)}let i=new URLSearchParams(location.search).get("model")||"free_box_lid",e=Mr({id:i}).preset;document.querySelector(".experiment-builder").hidden=!e,e&&(Q("scenario-preset").value=e,await zh(e));try{let t=await Eo("/api/health");if(t.ready){if(t.experiments_ready===!1){vn("Panda \uCDA9\uB3CC mesh \uC900\uBE44 \uD544\uC694 \xB7 python tools/fetch_panda_meshes.py");return}mf=!0,Q("experiment-run").disabled=!1,vn("Python \uC5F0\uACB0\uB428 \xB7 source/target \uCD5C\uC801\uD654\uC640 \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589 \uAC00\uB2A5");return}}catch{}vn("GitHub Pages: \uC2E4\uC81C \uC2E4\uD589 \uAE30\uB85D \uC7AC\uC0DD \xB7 \uC0C8 \uACC4\uC0B0\uC740 Python \uBC31\uC5D4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC11C\uBC84: .venv/bin/python web/server.py")}var vf={type:"change"},Hh={type:"start"},Mf={type:"end"},Hc=new Ei,bf=new Dn,Mx=Math.cos(70*Qn.DEG2RAD),$t=new D,bn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vh=1e-6,Gc=class extends uo{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Et,this._lastTargetPosition=new D,this._quat=new Et().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lr,this._sphericalDelta=new lr,this._scale=1,this._panOffset=new D,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new D,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ex.bind(this),this._onPointerDown=Sx.bind(this),this._onPointerUp=wx.bind(this),this._onContextMenu=Lx.bind(this),this._onMouseWheel=Cx.bind(this),this._onKeyDown=Rx.bind(this),this._onTouchStart=Ix.bind(this),this._onTouchMove=Px.bind(this),this._onMouseDown=Tx.bind(this),this._onMouseMove=Ax.bind(this),this._interceptControlDown=Nx.bind(this),this._interceptControlUp=Dx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vf),this.update(),this.state=It.NONE}update(e=null){let t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=$t.length();a=this._clampDistance(o*this._scale);let h=o-a;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<Mx?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vh||this._lastTargetPosition.distanceToSquared(this.target)>Vh?(this.dispatchEvent(vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Sx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ex(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function wx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mf),this.state=It.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Tx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=It.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=It.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Hh)}function Ax(i){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Cx(i){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(i.preventDefault(),this.dispatchEvent(Hh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mf))}function Rx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ix(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=It.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=It.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Hh)}function Px(i){switch(this._trackPointer(i),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=It.NONE}}function Lx(i){this.enabled!==!1&&i.preventDefault()}function Nx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Wc=class extends pn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new oi(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(h){s?s(h):console.error(h),r.manager.itemError(e)}},n,s)}parse(e){function t(c){let l=new DataView(c),u=32/8*3+32/8*3*3+16/8,d=l.getUint32(80,!0);if(80+32/8+d*u===l.byteLength)return!0;let g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,l,_))return!1;return!0}function n(c,l,u){for(let d=0,f=c.length;d<f;d++)if(c[d]!==l.getUint8(u+d))return!1;return!0}function s(c){let l=new DataView(c),u=l.getUint32(80,!0),d,f,g,_=!1,m,p,C,I,E;for(let N=0;N<70;N++)l.getUint32(N,!1)==1129270351&&l.getUint8(N+4)==82&&l.getUint8(N+5)==61&&(_=!0,m=new Float32Array(u*3*3),p=l.getUint8(N+6)/255,C=l.getUint8(N+7)/255,I=l.getUint8(N+8)/255,E=l.getUint8(N+9)/255);let R=84,P=50,U=new Ot,F=new Float32Array(u*3*3),v=new Float32Array(u*3*3),S=new Xe;for(let N=0;N<u;N++){let B=R+N*P,W=l.getFloat32(B,!0),J=l.getFloat32(B+4,!0),K=l.getFloat32(B+8,!0);if(_){let k=l.getUint16(B+48,!0);(k&32768)===0?(d=(k&31)/31,f=(k>>5&31)/31,g=(k>>10&31)/31):(d=p,f=C,g=I)}for(let k=1;k<=3;k++){let se=B+k*12,X=N*3*3+(k-1)*3;F[X]=l.getFloat32(se,!0),F[X+1]=l.getFloat32(se+4,!0),F[X+2]=l.getFloat32(se+8,!0),v[X]=W,v[X+1]=J,v[X+2]=K,_&&(S.setRGB(d,f,g,Mt),m[X]=S.r,m[X+1]=S.g,m[X+2]=S.b)}}return U.setAttribute("position",new Kt(F,3)),U.setAttribute("normal",new Kt(v,3)),_&&(U.setAttribute("color",new Kt(m,3)),U.hasColors=!0,U.alpha=E),U}function r(c){let l=new Ot,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/,g=0,_=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),p=new RegExp("normal"+_+_+_,"g"),C=[],I=[],E=[],R=new D,P,U=0,F=0,v=0;for(;(P=u.exec(c))!==null;){F=v;let S=P[0],N=(P=f.exec(S))!==null?P[1]:"";for(E.push(N);(P=d.exec(S))!==null;){let J=0,K=0,k=P[0];for(;(P=p.exec(k))!==null;)R.x=parseFloat(P[1]),R.y=parseFloat(P[2]),R.z=parseFloat(P[3]),K++;for(;(P=m.exec(k))!==null;)C.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),I.push(R.x,R.y,R.z),J++,v++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),J!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let B=F,W=v-F;l.userData.groupNames=E,l.addGroup(B,W,U),U++}return l.setAttribute("position",new ut(C,3)),l.setAttribute("normal",new ut(I,3)),l}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){let l=new Uint8Array(c.length);for(let u=0;u<c.length;u++)l[u]=c.charCodeAt(u)&255;return l.buffer||l}else return c}let h=o(e);return t(h)?s(h):r(a(e))}};var wo=class extends oo{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case d:case _:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case g:case m:case p:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function n(k,se,X,oe,pe){let ge,Ie,Ae=X.pixel_size>>3,Te=X.width*X.height*Ae;if(se&&(Ie=pe.subarray(oe,oe+=X.colormap_length*(X.colormap_size>>3))),k){ge=new Uint8Array(Te);let ye,V,Y,me=0,He=new Uint8Array(Ae);for(;me<Te;)if(ye=pe[oe++],V=(ye&127)+1,ye&128){for(Y=0;Y<Ae;++Y)He[Y]=pe[oe++];for(Y=0;Y<V;++Y)ge.set(He,me+Y*Ae);me+=Ae*V}else{for(V*=Ae,Y=0;Y<V;++Y)ge[me+Y]=pe[oe++];me+=V}}else ge=pe.subarray(oe,oe+=se?X.width*X.height:Te);return{pixel_data:ge,palettes:Ie}}function s(k,se,X,oe,pe,ge,Ie,Ae,Te){let ye=Te,V,Y=0,me,He,De=S.width;for(He=se;He!==oe;He+=X)for(me=pe;me!==Ie;me+=ge,Y++)V=Ae[Y],k[(me+De*He)*4+3]=255,k[(me+De*He)*4+2]=ye[V*3+0],k[(me+De*He)*4+1]=ye[V*3+1],k[(me+De*He)*4+0]=ye[V*3+2];return k}function r(k,se,X,oe,pe,ge,Ie,Ae){let Te,ye=0,V,Y,me=S.width;for(Y=se;Y!==oe;Y+=X)for(V=pe;V!==Ie;V+=ge,ye+=2)Te=Ae[ye+0]+(Ae[ye+1]<<8),k[(V+me*Y)*4+0]=(Te&31744)>>7,k[(V+me*Y)*4+1]=(Te&992)>>2,k[(V+me*Y)*4+2]=(Te&31)<<3,k[(V+me*Y)*4+3]=Te&32768?0:255;return k}function a(k,se,X,oe,pe,ge,Ie,Ae){let Te=0,ye,V,Y=S.width;for(V=se;V!==oe;V+=X)for(ye=pe;ye!==Ie;ye+=ge,Te+=3)k[(ye+Y*V)*4+3]=255,k[(ye+Y*V)*4+2]=Ae[Te+0],k[(ye+Y*V)*4+1]=Ae[Te+1],k[(ye+Y*V)*4+0]=Ae[Te+2];return k}function o(k,se,X,oe,pe,ge,Ie,Ae){let Te=0,ye,V,Y=S.width;for(V=se;V!==oe;V+=X)for(ye=pe;ye!==Ie;ye+=ge,Te+=4)k[(ye+Y*V)*4+2]=Ae[Te+0],k[(ye+Y*V)*4+1]=Ae[Te+1],k[(ye+Y*V)*4+0]=Ae[Te+2],k[(ye+Y*V)*4+3]=Ae[Te+3];return k}function h(k,se,X,oe,pe,ge,Ie,Ae){let Te,ye=0,V,Y,me=S.width;for(Y=se;Y!==oe;Y+=X)for(V=pe;V!==Ie;V+=ge,ye++)Te=Ae[ye],k[(V+me*Y)*4+0]=Te,k[(V+me*Y)*4+1]=Te,k[(V+me*Y)*4+2]=Te,k[(V+me*Y)*4+3]=255;return k}function c(k,se,X,oe,pe,ge,Ie,Ae){let Te=0,ye,V,Y=S.width;for(V=se;V!==oe;V+=X)for(ye=pe;ye!==Ie;ye+=ge,Te+=2)k[(ye+Y*V)*4+0]=Ae[Te+0],k[(ye+Y*V)*4+1]=Ae[Te+0],k[(ye+Y*V)*4+2]=Ae[Te+0],k[(ye+Y*V)*4+3]=Ae[Te+1];return k}function l(k,se,X,oe,pe){let ge,Ie,Ae,Te,ye,V;switch((S.flags&C)>>I){default:case P:ge=0,Ae=1,ye=se,Ie=0,Te=1,V=X;break;case E:ge=0,Ae=1,ye=se,Ie=X-1,Te=-1,V=-1;break;case U:ge=se-1,Ae=-1,ye=-1,Ie=0,Te=1,V=X;break;case R:ge=se-1,Ae=-1,ye=-1,Ie=X-1,Te=-1,V=-1;break}if(W)switch(S.pixel_size){case 8:h(k,Ie,Te,V,ge,Ae,ye,oe);break;case 16:c(k,Ie,Te,V,ge,Ae,ye,oe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(k,Ie,Te,V,ge,Ae,ye,oe,pe);break;case 16:r(k,Ie,Te,V,ge,Ae,ye,oe);break;case 24:a(k,Ie,Te,V,ge,Ae,ye,oe);break;case 32:o(k,Ie,Te,V,ge,Ae,ye,oe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}let u=0,d=1,f=2,g=3,_=9,m=10,p=11,C=48,I=4,E=0,R=1,P=2,U=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0,v=new Uint8Array(e),S={id_length:v[F++],colormap_type:v[F++],image_type:v[F++],colormap_index:v[F++]|v[F++]<<8,colormap_length:v[F++]|v[F++]<<8,colormap_size:v[F++],origin:[v[F++]|v[F++]<<8,v[F++]|v[F++]<<8],width:v[F++]|v[F++]<<8,height:v[F++]|v[F++]<<8,pixel_size:v[F++],flags:v[F++]};if(t(S),S.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=S.id_length;let N=!1,B=!1,W=!1;switch(S.image_type){case _:N=!0,B=!0;break;case d:B=!0;break;case m:N=!0;break;case f:break;case p:N=!0,W=!0;break;case g:W=!0;break}let J=new Uint8Array(S.width*S.height*4),K=n(N,B,S,F,v);return l(J,S.width,S.height,K.pixel_data,K.palettes),{data:J,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Zn}}};var Xc=class extends pn{load(e,t,n,s){let r=this,a=r.path===""?Es.extractUrlBase(e):r.path,o=new oi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(h){try{t(r.parse(h,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){function n(y,x){let T=[],M=y.childNodes;for(let A=0,Z=M.length;A<Z;A++){let ne=M[A];ne.nodeName===x&&T.push(ne)}return T}function s(y){if(y.length===0)return[];let x=y.trim().split(/\s+/),T=new Array(x.length);for(let M=0,A=x.length;M<A;M++)T[M]=x[M];return T}function r(y){if(y.length===0)return[];let x=y.trim().split(/\s+/),T=new Array(x.length);for(let M=0,A=x.length;M<A;M++)T[M]=parseFloat(x[M]);return T}function a(y){if(y.length===0)return[];let x=y.trim().split(/\s+/),T=new Array(x.length);for(let M=0,A=x.length;M<A;M++)T[M]=parseInt(x[M]);return T}function o(y){return y.substring(1)}function h(){return"three_default_"+zf++}function c(y){return Object.keys(y).length===0}function l(y){return{unit:u(n(y,"unit")[0]),upAxis:d(n(y,"up_axis")[0])}}function u(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function d(y){return y!==void 0?y.textContent:"Y_UP"}function f(y,x,T,M){let A=n(y,x)[0];if(A!==void 0){let Z=n(A,T);for(let ne=0;ne<Z.length;ne++)M(Z[ne])}}function g(y,x){for(let T in y){let M=y[T];M.build=x(y[T])}}function _(y,x){return y.build!==void 0||(y.build=x(y)),y.build}function m(y){let x={sources:{},samplers:{},channels:{}},T=!1;for(let M=0,A=y.childNodes.length;M<A;M++){let Z=y.childNodes[M];if(Z.nodeType!==1)continue;let ne;switch(Z.nodeName){case"source":ne=Z.getAttribute("id"),x.sources[ne]=xe(Z);break;case"sampler":ne=Z.getAttribute("id"),x.samplers[ne]=p(Z);break;case"channel":ne=Z.getAttribute("target"),x.channels[ne]=C(Z);break;case"animation":m(Z),T=!0;break;default:console.log(Z)}}T===!1&&(tt.animations[y.getAttribute("id")||Qn.generateUUID()]=x)}function p(y){let x={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let Z=o(A.getAttribute("source")),ne=A.getAttribute("semantic");x.inputs[ne]=Z;break}}return x}function C(y){let x={},M=y.getAttribute("target").split("/"),A=M.shift(),Z=M.shift(),ne=Z.indexOf("(")!==-1,Re=Z.indexOf(".")!==-1;if(Re)M=Z.split("."),Z=M.shift(),x.member=M.shift();else if(ne){let ve=Z.split("(");Z=ve.shift();for(let we=0;we<ve.length;we++)ve[we]=parseInt(ve[we].replace(/\)/,""));x.indices=ve}return x.id=A,x.sid=Z,x.arraySyntax=ne,x.memberSyntax=Re,x.sampler=o(y.getAttribute("source")),x}function I(y){let x=[],T=y.channels,M=y.samplers,A=y.sources;for(let Z in T)if(T.hasOwnProperty(Z)){let ne=T[Z],Re=M[ne.sampler],ve=Re.inputs.INPUT,we=Re.inputs.OUTPUT,We=A[ve],ce=A[we],Ve=R(ne,We,ce);S(Ve,x)}return x}function E(y){return _(tt.animations[y],I)}function R(y,x,T){let M=tt.nodes[y.id],A=_t(M.id),Z=M.transforms[y.sid],ne=M.matrix.clone().transpose(),Re,ve,we,We,ce,Ve,Ne={};switch(Z){case"matrix":for(we=0,We=x.array.length;we<We;we++)if(Re=x.array[we],ve=we*T.stride,Ne[Re]===void 0&&(Ne[Re]={}),y.arraySyntax===!0){let zt=T.array[ve],Tt=y.indices[0]+4*y.indices[1];Ne[Re][Tt]=zt}else for(ce=0,Ve=T.stride;ce<Ve;ce++)Ne[Re][ce]=T.array[ve+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Z);break}let $e=P(Ne,ne);return{name:A.uuid,keyframes:$e}}function P(y,x){let T=[];for(let A in y)T.push({time:parseFloat(A),value:y[A]});T.sort(M);for(let A=0;A<16;A++)N(T,A,x.elements[A]);return T;function M(A,Z){return A.time-Z.time}}let U=new D,F=new D,v=new Et;function S(y,x){let T=y.keyframes,M=y.name,A=[],Z=[],ne=[],Re=[];for(let ve=0,we=T.length;ve<we;ve++){let We=T[ve],ce=We.time,Ve=We.value;j.fromArray(Ve).transpose(),j.decompose(U,v,F),A.push(ce),Z.push(U.x,U.y,U.z),ne.push(v.x,v.y,v.z,v.w),Re.push(F.x,F.y,F.z)}return Z.length>0&&x.push(new ri(M+".position",A,Z)),ne.length>0&&x.push(new Ri(M+".quaternion",A,ne)),Re.length>0&&x.push(new ri(M+".scale",A,Re)),x}function N(y,x,T){let M,A=!0,Z,ne;for(Z=0,ne=y.length;Z<ne;Z++)M=y[Z],M.value[x]===void 0?M.value[x]=null:A=!1;if(A===!0)for(Z=0,ne=y.length;Z<ne;Z++)M=y[Z],M.value[x]=T;else B(y,x)}function B(y,x){let T,M;for(let A=0,Z=y.length;A<Z;A++){let ne=y[A];if(ne.value[x]===null){if(T=W(y,A,x),M=J(y,A,x),T===null){ne.value[x]=M.value[x];continue}if(M===null){ne.value[x]=T.value[x];continue}K(ne,T,M,x)}}}function W(y,x,T){for(;x>=0;){let M=y[x];if(M.value[T]!==null)return M;x--}return null}function J(y,x,T){for(;x<y.length;){let M=y[x];if(M.value[T]!==null)return M;x++}return null}function K(y,x,T,M){if(T.time-x.time===0){y.value[M]=x.value[M];return}y.value[M]=(y.time-x.time)*(T.value[M]-x.value[M])/(T.time-x.time)+x.value[M]}function k(y){let x={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":x.animations.push(o(A.getAttribute("url")));break}}tt.clips[y.getAttribute("id")]=x}function se(y){let x=[],T=y.name,M=y.end-y.start||-1,A=y.animations;for(let Z=0,ne=A.length;Z<ne;Z++){let Re=E(A[Z]);for(let ve=0,we=Re.length;ve<we;ve++)x.push(Re[ve])}return new ar(T,M,x)}function X(y){return _(tt.clips[y],se)}function oe(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"skin":x.id=o(A.getAttribute("source")),x.skin=pe(A);break;case"morph":x.id=o(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}tt.controllers[y.getAttribute("id")]=x}function pe(y){let x={sources:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(A.textContent);break;case"source":let Z=A.getAttribute("id");x.sources[Z]=xe(A);break;case"joints":x.joints=ge(A);break;case"vertex_weights":x.vertexWeights=Ie(A);break}}return x}function ge(y){let x={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let Z=A.getAttribute("semantic"),ne=o(A.getAttribute("source"));x.inputs[Z]=ne;break}}return x}function Ie(y){let x={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let Z=A.getAttribute("semantic"),ne=o(A.getAttribute("source")),Re=parseInt(A.getAttribute("offset"));x.inputs[Z]={id:ne,offset:Re};break;case"vcount":x.vcount=a(A.textContent);break;case"v":x.v=a(A.textContent);break}}return x}function Ae(y){let x={id:y.id},T=tt.geometries[x.id];return y.skin!==void 0&&(x.skin=Te(y.skin),T.sources.skinIndices=x.skin.indices,T.sources.skinWeights=x.skin.weights),x}function Te(y){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=y.sources,A=y.vertexWeights,Z=A.vcount,ne=A.v,Re=A.inputs.JOINT.offset,ve=A.inputs.WEIGHT.offset,we=y.sources[y.joints.inputs.JOINT],We=y.sources[y.joints.inputs.INV_BIND_MATRIX],ce=M[A.inputs.WEIGHT.id].array,Ve=0,Ne,$e,je;for(Ne=0,je=Z.length;Ne<je;Ne++){let Tt=Z[Ne],vt=[];for($e=0;$e<Tt;$e++){let bt=ne[Ve+Re],mi=ne[Ve+ve],gn=ce[mi];vt.push({index:bt,weight:gn}),Ve+=2}for(vt.sort(zt),$e=0;$e<4;$e++){let bt=vt[$e];bt!==void 0?(T.indices.array.push(bt.index),T.weights.array.push(bt.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(y.bindShapeMatrix?T.bindMatrix=new nt().fromArray(y.bindShapeMatrix).transpose():T.bindMatrix=new nt().identity(),Ne=0,je=we.array.length;Ne<je;Ne++){let Tt=we.array[Ne],vt=new nt().fromArray(We.array,Ne*We.stride).transpose();T.joints.push({name:Tt,boneInverse:vt})}return T;function zt(Tt,vt){return vt.weight-Tt.weight}}function ye(y){return _(tt.controllers[y],Ae)}function V(y){let x={init_from:n(y,"init_from")[0].textContent};tt.images[y.getAttribute("id")]=x}function Y(y){return y.build!==void 0?y.build:y.init_from}function me(y){let x=tt.images[y];return x!==void 0?_(x,Y):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function He(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":x.profile=De(A);break}}tt.effects[y.getAttribute("id")]=x}function De(y){let x={surfaces:{},samplers:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"newparam":gt(A,x);break;case"technique":x.technique=Pt(A);break;case"extra":x.extra=at(A);break}}return x}function gt(y,x){let T=y.getAttribute("sid");for(let M=0,A=y.childNodes.length;M<A;M++){let Z=y.childNodes[M];if(Z.nodeType===1)switch(Z.nodeName){case"surface":x.surfaces[T]=Jt(Z);break;case"sampler2D":x.samplers[T]=O(Z);break}}}function Jt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"init_from":x.init_from=A.textContent;break}}return x}function O(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"source":x.source=A.textContent;break}}return x}function Pt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=A.nodeName,x.parameters=st(A);break;case"extra":x.extra=at(A);break}}return x}function st(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[A.nodeName]=Ke(A);break;case"transparent":x[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Ke(A)};break}}return x}function Ke(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"color":x[A.nodeName]=r(A.textContent);break;case"float":x[A.nodeName]=parseFloat(A.textContent);break;case"texture":x[A.nodeName]={id:A.getAttribute("texture"),extra:Ue(A)};break}}return x}function Ue(y){let x={technique:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"extra":Lt(A,x);break}}return x}function Lt(y,x){for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique":Oe(A,x);break}}}function Oe(y,x){for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?x.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?x.technique[A.nodeName]=0:x.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":x[A.nodeName]=Bt(A);break}}}function at(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique":x.technique=Gt(A);break}}return x}function Gt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"double_sided":x[A.nodeName]=parseInt(A.textContent);break;case"bump":x[A.nodeName]=Bt(A);break}}return x}function Bt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"texture":x[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Ue(A)};break}}return x}function L(y){return y}function b(y){return _(tt.effects[y],L)}function q(y){let x={name:y.getAttribute("name")};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":x.url=o(A.getAttribute("url"));break}}tt.materials[y.getAttribute("id")]=x}function ie(y){let x,T=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":x=Xt;break;default:x=hn}return x}function ae(y){let x=b(y.url),T=x.profile.technique,M;switch(T.type){case"phong":case"blinn":M=new On;break;case"lambert":M=new gs;break;default:M=new Fn;break}M.name=y.name||"";function A(ve,we=null){let We=x.profile.samplers[ve.id],ce=null;if(We!==void 0){let Ve=x.profile.surfaces[We.source];ce=me(Ve.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=me(ve.id);if(ce!==null){let Ve=ie(ce);if(Ve!==void 0){let Ne=Ve.load(ce),$e=ve.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){let je=$e.technique;Ne.wrapS=je.wrapU?jn:wn,Ne.wrapT=je.wrapV?jn:wn,Ne.offset.set(je.offsetU||0,je.offsetV||0),Ne.repeat.set(je.repeatU||1,je.repeatV||1)}else Ne.wrapS=jn,Ne.wrapT=jn;return we!==null&&(Ne.colorSpace=we),Ne}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ve.id),null}let Z=T.parameters;for(let ve in Z){let we=Z[ve];switch(ve){case"diffuse":we.color&&M.color.fromArray(we.color),we.texture&&(M.map=A(we.texture,Mt));break;case"specular":we.color&&M.specular&&M.specular.fromArray(we.color),we.texture&&(M.specularMap=A(we.texture));break;case"bump":we.texture&&(M.normalMap=A(we.texture));break;case"ambient":we.texture&&(M.lightMap=A(we.texture,Mt));break;case"shininess":we.float&&M.shininess&&(M.shininess=we.float);break;case"emission":we.color&&M.emissive&&M.emissive.fromArray(we.color),we.texture&&(M.emissiveMap=A(we.texture,Mt));break}}mt.colorSpaceToWorking(M.color,Mt),M.specular&&mt.colorSpaceToWorking(M.specular,Mt),M.emissive&&mt.colorSpaceToWorking(M.emissive,Mt);let ne=Z.transparent,Re=Z.transparency;if(Re===void 0&&ne&&(Re={float:1}),ne===void 0&&Re&&(ne={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ne&&Re)if(ne.data.texture)M.transparent=!0;else{let ve=ne.data.color;switch(ne.opaque){case"A_ONE":M.opacity=ve[3]*Re.float;break;case"RGB_ZERO":M.opacity=1-ve[0]*Re.float;break;case"A_ZERO":M.opacity=1-ve[3]*Re.float;break;case"RGB_ONE":M.opacity=ve[0]*Re.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ne.opaque)}M.opacity<1&&(M.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let ve=T.extra.technique;for(let we in ve){let We=ve[we];switch(we){case"double_sided":M.side=We===1?Bn:qn;break;case"bump":M.normalMap=A(We.texture),M.normalScale=new Ze(1,1);break}}}return M}function te(y){return _(tt.materials[y],ae)}function Ge(y){let x={name:y.getAttribute("name")};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"optics":x.optics=_e(A);break}}tt.cameras[y.getAttribute("id")]=x}function _e(y){for(let x=0;x<y.childNodes.length;x++){let T=y.childNodes[x];switch(T.nodeName){case"technique_common":return Be(T)}}return{}}function Be(y){let x={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"perspective":case"orthographic":x.technique=M.nodeName,x.parameters=ke(M);break}}return x}function ke(y){let x={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[M.nodeName]=parseFloat(M.textContent);break}}return x}function de(y){let x;switch(y.optics.technique){case"perspective":x=new Vt(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let T=y.optics.parameters.ymag,M=y.optics.parameters.xmag,A=y.optics.parameters.aspect_ratio;M=M===void 0?T*A:M,T=T===void 0?M/A:T,M*=.5,T*=.5,x=new Ms(-M,M,T,-T,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:x=new Vt;break}return x.name=y.name||"",x}function Ee(y){let x=tt.cameras[y];return x!==void 0?_(x,de):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Qe(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique_common":x=ze(A);break}}tt.lights[y.getAttribute("id")]=x}function ze(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=A.nodeName,x.parameters=be(A)}}return x}function be(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"color":let Z=r(A.textContent);x.color=new Xe().fromArray(Z),mt.colorSpaceToWorking(x.color,Mt);break;case"falloff_angle":x.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let ne=parseFloat(A.textContent);x.distance=ne?Math.sqrt(1/ne):0;break}}return x}function rt(y){let x;switch(y.technique){case"directional":x=new qi;break;case"point":x=new bs;break;case"spot":x=new co;break;case"ambient":x=new Ss;break}return y.parameters.color&&x.color.copy(y.parameters.color),y.parameters.distance&&(x.distance=y.parameters.distance),x}function z(y){let x=tt.lights[y];return x!==void 0?_(x,rt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function fe(y){let x={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=n(y,"mesh")[0];if(T!==void 0){for(let M=0;M<T.childNodes.length;M++){let A=T.childNodes[M];if(A.nodeType!==1)continue;let Z=A.getAttribute("id");switch(A.nodeName){case"source":x.sources[Z]=xe(A);break;case"vertices":x.vertices=Pe(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(le(A));break;default:console.log(A)}}tt.geometries[y.getAttribute("id")]=x}}function xe(y){let x={array:[],stride:3};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"float_array":x.array=r(M.textContent);break;case"Name_array":x.array=s(M.textContent);break;case"technique_common":let A=n(M,"accessor")[0];A!==void 0&&(x.stride=parseInt(A.getAttribute("stride")));break}}return x}function Pe(y){let x={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];M.nodeType===1&&(x[M.getAttribute("semantic")]=o(M.getAttribute("source")))}return x}function le(y){let x={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let Z=o(A.getAttribute("source")),ne=A.getAttribute("semantic"),Re=parseInt(A.getAttribute("offset")),ve=parseInt(A.getAttribute("set")),we=ve>0?ne+ve:ne;x.inputs[we]={id:Z,offset:Re},x.stride=Math.max(x.stride,Re+1),ne==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=a(A.textContent);break;case"p":x.p=a(A.textContent);break}}return x}function re(y){let x={};for(let T=0;T<y.length;T++){let M=y[T];x[M.type]===void 0&&(x[M.type]=[]),x[M.type].push(M)}return x}function Fe(y){let x=0;for(let T=0,M=y.length;T<M;T++)y[T].hasUV===!0&&x++;x>0&&x<y.length&&(y.uvsNeedsFix=!0)}function it(y){let x={},T=y.sources,M=y.vertices,A=y.primitives;if(A.length===0)return{};let Z=re(A);for(let ne in Z){let Re=Z[ne];Fe(Re),x[ne]=Ct(Re,T,M)}return x}function Ct(y,x,T){let M={},A={array:[],stride:0},Z={array:[],stride:0},ne={array:[],stride:0},Re={array:[],stride:0},ve={array:[],stride:0},we={array:[],stride:4},We={array:[],stride:4},ce=new Ot,Ve=[],Ne=0;for(let $e=0;$e<y.length;$e++){let je=y[$e],zt=je.inputs,Tt=0;switch(je.type){case"lines":case"linestrips":Tt=je.count*2;break;case"triangles":Tt=je.count*3;break;case"polylist":for(let vt=0;vt<je.count;vt++){let bt=je.vcount[vt];switch(bt){case 3:Tt+=3;break;case 4:Tt+=6;break;default:Tt+=(bt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",je.type)}ce.addGroup(Ne,Tt,$e),Ne+=Tt,je.material&&Ve.push(je.material);for(let vt in zt){let bt=zt[vt];switch(vt){case"VERTEX":for(let mi in T){let gn=T[mi];switch(mi){case"POSITION":let Ds=A.array.length;if(lt(je,x[gn],bt.offset,A.array),A.stride=x[gn].stride,x.skinWeights&&x.skinIndices&&(lt(je,x.skinIndices,bt.offset,we.array),lt(je,x.skinWeights,bt.offset,We.array)),je.hasUV===!1&&y.uvsNeedsFix===!0){let Vf=(A.array.length-Ds)/A.stride;for(let Qh=0;Qh<Vf;Qh++)ne.array.push(0,0)}break;case"NORMAL":lt(je,x[gn],bt.offset,Z.array),Z.stride=x[gn].stride;break;case"COLOR":lt(je,x[gn],bt.offset,ve.array),ve.stride=x[gn].stride;break;case"TEXCOORD":lt(je,x[gn],bt.offset,ne.array),ne.stride=x[gn].stride;break;case"TEXCOORD1":lt(je,x[gn],bt.offset,Re.array),ne.stride=x[gn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',mi)}}break;case"NORMAL":lt(je,x[bt.id],bt.offset,Z.array),Z.stride=x[bt.id].stride;break;case"COLOR":lt(je,x[bt.id],bt.offset,ve.array,!0),ve.stride=x[bt.id].stride;break;case"TEXCOORD":lt(je,x[bt.id],bt.offset,ne.array),ne.stride=x[bt.id].stride;break;case"TEXCOORD1":lt(je,x[bt.id],bt.offset,Re.array),Re.stride=x[bt.id].stride;break}}}return A.array.length>0&&ce.setAttribute("position",new ut(A.array,A.stride)),Z.array.length>0&&ce.setAttribute("normal",new ut(Z.array,Z.stride)),ve.array.length>0&&ce.setAttribute("color",new ut(ve.array,ve.stride)),ne.array.length>0&&ce.setAttribute("uv",new ut(ne.array,ne.stride)),Re.array.length>0&&ce.setAttribute("uv1",new ut(Re.array,Re.stride)),we.array.length>0&&ce.setAttribute("skinIndex",new ut(we.array,we.stride)),We.array.length>0&&ce.setAttribute("skinWeight",new ut(We.array,We.stride)),M.data=ce,M.type=y[0].type,M.materialKeys=Ve,M}function lt(y,x,T,M,A=!1){let Z=y.p,ne=y.stride,Re=y.vcount;function ve(ce){let Ve=Z[ce+T]*We,Ne=Ve+We;for(;Ve<Ne;Ve++)M.push(we[Ve]);if(A){let $e=M.length-We-1;qt.setRGB(M[$e+0],M[$e+1],M[$e+2],Mt),M[$e+0]=qt.r,M[$e+1]=qt.g,M[$e+2]=qt.b}}let we=x.array,We=x.stride;if(y.vcount!==void 0){let ce=0;for(let Ve=0,Ne=Re.length;Ve<Ne;Ve++){let $e=Re[Ve];if($e===4){let je=ce+ne*0,zt=ce+ne*1,Tt=ce+ne*2,vt=ce+ne*3;ve(je),ve(zt),ve(vt),ve(zt),ve(Tt),ve(vt)}else if($e===3){let je=ce+ne*0,zt=ce+ne*1,Tt=ce+ne*2;ve(je),ve(zt),ve(Tt)}else if($e>4)for(let je=1,zt=$e-2;je<=zt;je++){let Tt=ce+ne*0,vt=ce+ne*je,bt=ce+ne*(je+1);ve(Tt),ve(vt),ve(bt)}ce+=ne*$e}}else for(let ce=0,Ve=Z.length;ce<Ve;ce+=ne)ve(ce)}function Pn(y){return _(tt.geometries[y],it)}function Ln(y){let x={name:y.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Ir(M,x);break}}tt.kinematicsModels[y.getAttribute("id")]=x}function Uo(y){return y.build!==void 0?y.build:y}function di(y){return _(tt.kinematicsModels[y],Uo)}function Ir(y,x){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"joint":x.joints[M.getAttribute("sid")]=Fo(M);break;case"link":x.links.push(ns(M));break}}}function Fo(y){let x;for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":x=Oo(M);break}}return x}function Oo(y){let x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new D,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);x.axis.fromArray(A);break;case"limits":let Z=M.getElementsByTagName("max")[0],ne=M.getElementsByTagName("min")[0];x.limits.max=parseFloat(Z.textContent),x.limits.min=parseFloat(ne.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function ns(y){let x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":x.attachments.push(Bo(M));break;case"matrix":case"translate":case"rotate":x.transforms.push(is(M));break}}return x}function Bo(y){let x={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"link":x.links.push(ns(M));break;case"matrix":case"translate":case"rotate":x.transforms.push(is(M));break}}return x}function is(y){let x={type:y.nodeName},T=r(y.textContent);switch(x.type){case"matrix":x.obj=new nt,x.obj.fromArray(T).transpose();break;case"translate":x.obj=new D,x.obj.fromArray(T);break;case"rotate":x.obj=new D,x.obj.fromArray(T),x.angle=Qn.degToRad(T[3]);break}return x}function ko(y){let x={name:y.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":x.rigidBodies[M.getAttribute("name")]={},zo(M,x.rigidBodies[M.getAttribute("name")]);break}}tt.physicsModels[y.getAttribute("id")]=x}function zo(y,x){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"technique_common":sl(M,x);break}}}function sl(y,x){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"inertia":x.inertia=r(M.textContent);break;case"mass":x.mass=r(M.textContent)[0];break}}}function rl(y){let x={bindJointAxis:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":x.bindJointAxis.push(ol(M));break}}tt.kinematicsScenes[o(y.getAttribute("url"))]=x}function ol(y){let x={target:y.getAttribute("target").split("/").pop()};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];x.axis=A.textContent;let Z=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=Z.substring(0,Z.length-1);break}}return x}function al(y){return y.build!==void 0?y.build:y}function cl(y){return _(tt.kinematicsScenes[y],al)}function ll(){let y=Object.keys(tt.kinematicsModels)[0],x=Object.keys(tt.kinematicsScenes)[0],T=Object.keys(tt.visualScenes)[0];if(y===void 0||x===void 0)return;let M=di(y),A=cl(x),Z=Ye(T),ne=A.bindJointAxis,Re={};for(let We=0,ce=ne.length;We<ce;We++){let Ve=ne[We],Ne=yt.querySelector('[sid="'+Ve.target+'"]');if(Ne){let $e=Ne.parentElement;ve(Ve.jointIndex,$e)}}function ve(We,ce){let Ve=ce.getAttribute("name"),Ne=M.joints[We];Z.traverse(function($e){$e.name===Ve&&(Re[We]={object:$e,transforms:w(ce),joint:Ne,position:Ne.zeroPosition})})}let we=new nt;ni={joints:M&&M.joints,getJointValue:function(We){let ce=Re[We];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+We+" doesn't exist.")},setJointValue:function(We,ce){let Ve=Re[We];if(Ve){let Ne=Ve.joint;if(ce>Ne.limits.max||ce<Ne.limits.min)console.warn("THREE.ColladaLoader: Joint "+We+" value "+ce+" outside of limits (min: "+Ne.limits.min+", max: "+Ne.limits.max+").");else if(Ne.static)console.warn("THREE.ColladaLoader: Joint "+We+" is static.");else{let $e=Ve.object,je=Ne.axis,zt=Ve.transforms;j.identity();for(let Tt=0;Tt<zt.length;Tt++){let vt=zt[Tt];if(vt.sid&&vt.sid.indexOf(We)!==-1)switch(Ne.type){case"revolute":j.multiply(we.makeRotationAxis(je,Qn.degToRad(ce)));break;case"prismatic":j.multiply(we.makeTranslation(je.x*ce,je.y*ce,je.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ne.type);break}else switch(vt.type){case"matrix":j.multiply(vt.obj);break;case"translate":j.multiply(we.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":j.scale(vt.obj);break;case"rotate":j.multiply(we.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(j),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Re[We].position=ce}}else console.log("THREE.ColladaLoader: "+We+" does not exist.")}}}function w(y){let x=[],T=yt.querySelector('[id="'+y.id+'"]');for(let M=0;M<T.childNodes.length;M++){let A=T.childNodes[M];if(A.nodeType!==1)continue;let Z,ne;switch(A.nodeName){case"matrix":Z=r(A.textContent);let Re=new nt().fromArray(Z).transpose();x.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Re});break;case"translate":case"scale":Z=r(A.textContent),ne=new D().fromArray(Z),x.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ne});break;case"rotate":Z=r(A.textContent),ne=new D().fromArray(Z);let ve=Qn.degToRad(Z[3]);x.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ne,angle:ve});break}}return x}function H(y){let x=y.getElementsByTagName("node");for(let T=0;T<x.length;T++){let M=x[T];M.hasAttribute("id")===!1&&M.setAttribute("id",h())}}let j=new nt,$=new D;function G(y){let x={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new nt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":x.nodes.push(M.getAttribute("id")),G(M);break;case"instance_camera":x.instanceCameras.push(o(M.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(he(M));break;case"instance_light":x.instanceLights.push(o(M.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(he(M));break;case"instance_node":x.instanceNodes.push(o(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),x.matrix.multiply(j.fromArray(A).transpose()),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),$.fromArray(A),x.matrix.multiply(j.makeTranslation($.x,$.y,$.z)),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let Z=Qn.degToRad(A[3]);x.matrix.multiply(j.makeRotationAxis($.fromArray(A),Z)),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),x.matrix.scale($.fromArray(A)),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return ft(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):tt.nodes[x.id]=x,x}function he(y){let x={id:o(y.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let Z=0;Z<A.length;Z++){let ne=A[Z],Re=ne.getAttribute("symbol"),ve=ne.getAttribute("target");x.materials[Re]=o(ve)}break;case"skeleton":x.skeletons.push(o(M.textContent));break;default:break}}return x}function Se(y,x){let T=[],M=[],A,Z,ne;for(A=0;A<y.length;A++){let we=y[A],We;if(ft(we))We=_t(we),Le(We,x,T);else if(wt(we)){let Ve=tt.visualScenes[we].children;for(let Ne=0;Ne<Ve.length;Ne++){let $e=Ve[Ne];if($e.type==="JOINT"){let je=_t($e.id);Le(je,x,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(A=0;A<x.length;A++)for(Z=0;Z<T.length;Z++)if(ne=T[Z],ne.bone.name===x[A].name){M[A]=ne,ne.processed=!0;break}for(A=0;A<T.length;A++)ne=T[A],ne.processed===!1&&(M.push(ne),ne.processed=!0);let Re=[],ve=[];for(A=0;A<M.length;A++)ne=M[A],Re.push(ne.bone),ve.push(ne.boneInverse);return new Zr(Re,ve)}function Le(y,x,T){y.traverse(function(M){if(M.isBone===!0){let A;for(let Z=0;Z<x.length;Z++){let ne=x[Z];if(ne.name===M.name){A=ne.boneInverse;break}}A===void 0&&(A=new nt),T.push({bone:M,boneInverse:A,processed:!1})}})}function Ce(y){let x=[],T=y.matrix,M=y.nodes,A=y.type,Z=y.instanceCameras,ne=y.instanceControllers,Re=y.instanceLights,ve=y.instanceGeometries,we=y.instanceNodes;for(let ce=0,Ve=M.length;ce<Ve;ce++)x.push(_t(M[ce]));for(let ce=0,Ve=Z.length;ce<Ve;ce++){let Ne=Ee(Z[ce]);Ne!==null&&x.push(Ne.clone())}for(let ce=0,Ve=ne.length;ce<Ve;ce++){let Ne=ne[ce],$e=ye(Ne.id),je=Pn($e.id),zt=qe(je,Ne.materials),Tt=Ne.skeletons,vt=$e.skin.joints,bt=Se(Tt,vt);for(let mi=0,gn=zt.length;mi<gn;mi++){let Ds=zt[mi];Ds.isSkinnedMesh&&(Ds.bind(bt,$e.skin.bindMatrix),Ds.normalizeSkinWeights()),x.push(Ds)}}for(let ce=0,Ve=Re.length;ce<Ve;ce++){let Ne=z(Re[ce]);Ne!==null&&x.push(Ne.clone())}for(let ce=0,Ve=ve.length;ce<Ve;ce++){let Ne=ve[ce],$e=Pn(Ne.id),je=qe($e,Ne.materials);for(let zt=0,Tt=je.length;zt<Tt;zt++)x.push(je[zt])}for(let ce=0,Ve=we.length;ce<Ve;ce++)x.push(_t(we[ce]).clone());let We;if(M.length===0&&x.length===1)We=x[0];else{We=A==="JOINT"?new sr:new en;for(let ce=0;ce<x.length;ce++)We.add(x[ce])}return We.name=A==="JOINT"?y.sid:y.name,We.matrix.copy(T),We.matrix.decompose(We.position,We.quaternion,We.scale),We}let Je=new Fn({name:pn.DEFAULT_MATERIAL_NAME,color:16711935});function et(y,x){let T=[];for(let M=0,A=y.length;M<A;M++){let Z=x[y[M]];Z===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[M]),T.push(Je)):T.push(te(Z))}return T}function qe(y,x){let T=[];for(let M in y){let A=y[M],Z=et(A.materialKeys,x);if(Z.length===0&&(M==="lines"||M==="linestrips"?Z.push(new fn):Z.push(new On)),M==="lines"||M==="linestrips")for(let we=0,We=Z.length;we<We;we++){let ce=Z[we];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Ve=new fn;Ve.color.copy(ce.color),Ve.opacity=ce.opacity,Ve.transparent=ce.transparent,Z[we]=Ve}}let ne=A.data.attributes.skinIndex!==void 0,Re=Z.length===1?Z[0]:Z,ve;switch(M){case"lines":ve=new $n(A.data,Re);break;case"linestrips":ve=new ps(A.data,Re);break;case"triangles":case"polylist":ne?ve=new Jr(A.data,Re):ve=new ct(A.data,Re);break}T.push(ve)}return T}function ft(y){return tt.nodes[y]!==void 0}function _t(y){return _(tt.nodes[y],Ce)}function kt(y){let x={name:y.getAttribute("name"),children:[]};H(y);let T=n(y,"node");for(let M=0;M<T.length;M++)x.children.push(G(T[M]));tt.visualScenes[y.getAttribute("id")]=x}function Rt(y){let x=new en;x.name=y.name;let T=y.children;for(let M=0;M<T.length;M++){let A=T[M];x.add(_t(A.id))}return x}function wt(y){return tt.visualScenes[y]!==void 0}function Ye(y){return _(tt.visualScenes[y],Rt)}function Nt(y){let x=n(y,"instance_visual_scene")[0];return Ye(o(x.getAttribute("url")))}function xt(){let y=tt.clips;if(c(y)===!0){if(c(tt.animations)===!1){let x=[];for(let T in tt.animations){let M=E(T);for(let A=0,Z=M.length;A<Z;A++)x.push(M[A])}Oi.push(new ar("default",-1,x))}}else for(let x in y)Oi.push(X(x))}function cn(y){let x="",T=[y];for(;T.length;){let M=T.shift();M.nodeType===Node.TEXT_NODE?x+=M.textContent:(x+=`
`,T.push(...M.childNodes))}return x.trim()}if(e.length===0)return{scene:new wi};let fi=new DOMParser().parseFromString(e,"application/xml"),yt=n(fi,"COLLADA")[0],pi=fi.getElementsByTagName("parsererror")[0];if(pi!==void 0){let y=n(pi,"div")[0],x;return y?x=y.textContent:x=cn(pi),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}let Dt=yt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Dt);let ln=l(n(yt,"asset")[0]),hn=new ys(this.manager);hn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Xt;wo&&(Xt=new wo(this.manager),Xt.setPath(this.resourcePath||t));let qt=new Xe,Oi=[],ni={},zf=0,tt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(yt,"library_animations","animation",m),f(yt,"library_animation_clips","animation_clip",k),f(yt,"library_controllers","controller",oe),f(yt,"library_images","image",V),f(yt,"library_effects","effect",He),f(yt,"library_materials","material",q),f(yt,"library_cameras","camera",Ge),f(yt,"library_lights","light",Qe),f(yt,"library_geometries","geometry",fe),f(yt,"library_nodes","node",G),f(yt,"library_visual_scenes","visual_scene",kt),f(yt,"library_kinematics_models","kinematics_model",Ln),f(yt,"library_physics_models","physics_model",ko),f(yt,"scene","instance_kinematics_scene",rl),g(tt.animations,I),g(tt.clips,se),g(tt.controllers,Ae),g(tt.images,Y),g(tt.effects,L),g(tt.materials,ae),g(tt.cameras,de),g(tt.lights,rt),g(tt.geometries,it),g(tt.visualScenes,Rt),xt(),ll();let Vo=Nt(n(yt,"scene")[0]);return Vo.animations=Oi,ln.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Vo.rotation.set(-Math.PI/2,0,0)),Vo.scale.multiplyScalar(ln.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Oi},kinematics:ni,library:tt,scene:Vo}}};var Sf=new D,Ux=new tn,qc=new nt,Ki=new nt,jc=new Et,Yc=new D(1,1,1),$c=new D,Er=class extends Ft{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}},Jc=class extends Er{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}},Zc=class extends Er{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}},To=class extends Er{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink",this.name="",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(e,t){return super.copy(e,t),this.inertial={mass:e.inertial.mass,origin:{xyz:[...e.inertial.origin.xyz],rpy:[...e.inertial.origin.rpy]},inertia:{...e.inertial.inertia}},this}},Ao=class extends Er{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new D(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.name="",this.jointValue=null,this.jointType="fixed",this.axis=new D(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.limit.effort=e.limit.effort,this.limit.velocity=e.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),Sf.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Sf,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Ki.compose(this.origPosition,this.origQuaternion,Yc),jc.setFromEuler(Ux.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),$c.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),qc.compose($c,jc,Yc),Ki.premultiply(qc),this.position.setFromMatrixPosition(Ki),this.rotation.setFromRotationMatrix(Ki),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Ki.compose(this.origPosition,this.origQuaternion,Yc),jc.setFromAxisAngle(this.axis,this.jointValue[2]),$c.set(this.jointValue[0],this.jointValue[1],0),qc.compose($c,jc,Yc),Ki.premultiply(qc),this.position.setFromMatrixPosition(Ki),this.rotation.setFromRotationMatrix(Ki),this.matrixWorldNeedsUpdate=!0,!0)}return t}},Co=class extends Ao{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){let t=e.map(n=>n===null?null:n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}},Kc=class extends To{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(let n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){let n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(let n in e){let s=e[n];Array.isArray(s)?t=this.setJointValue(n,...s)||t:t=this.setJointValue(n,s)||t}return t}};var Gh=new Et,Ef=new tn;function Qi(i){return i?i.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function wf(i,e,t=!1){t||i.rotation.set(0,0,0),Ef.set(e[0],e[1],e[2],"ZYX"),Gh.setFromEuler(Ef),Gh.multiply(i.quaternion),i.quaternion.copy(Gh)}var Wh=class{constructor(e){this.manager=e||Ic,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,s){let r=this.manager,a=Es.extractUrlBase(e),o=this.manager.resolveURL(e);r.itemStart(o),fetch(o,this.fetchOptions).then(h=>{if(h.ok)return n&&n(null),h.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${h.status} : ${h.statusText}.`)}).then(h=>{let c=this.parse(h,this.workingPath||a);t(c),r.itemEnd(o)}).catch(h=>{s?s(h):console.error("URDFLoader: Error loading file.",h),r.itemError(o),r.itemEnd(o)})}parse(e,t=this.workingPath){let n=this.packages,s=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,h={},c={},l={};function u(C){if(!/^package:\/\//.test(C))return t?t+C:C;let[I,E]=C.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(I)?n+"/"+E:n+"/"+I+"/"+E;if(typeof n=="function")return n(I)+"/"+E;if(typeof n=="object")return I in n?n[I]+"/"+E:(console.error(`URDFLoader : ${I} not found in provided package list.`),null)}function d(C){let I;C instanceof Document?I=[...C.children]:C instanceof Element?I=[C]:I=[...new DOMParser().parseFromString(C,"text/xml").children];let E=I.filter(R=>R.nodeName==="robot").pop();return f(E)}function f(C){let I=[...C.children],E=I.filter(N=>N.nodeName.toLowerCase()==="link"),R=I.filter(N=>N.nodeName.toLowerCase()==="joint"),P=I.filter(N=>N.nodeName.toLowerCase()==="material"),U=new Kc;U.robotName=C.getAttribute("name"),U.urdfRobotNode=C,P.forEach(N=>{let B=N.getAttribute("name");l[B]=m(N)});let F={},v={};E.forEach(N=>{let B=N.getAttribute("name"),W=C.querySelector(`child[link="${B}"]`)===null;h[B]=_(N,F,v,W?U:null)}),R.forEach(N=>{let B=N.getAttribute("name");c[B]=g(N)}),U.joints=c,U.links=h,U.colliders=v,U.visual=F;let S=Object.values(c);return S.forEach(N=>{N instanceof Co&&c[N.mimicJoint].mimicJoints.push(N)}),S.forEach(N=>{let B=new Set,W=J=>{if(B.has(J))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(J),J.mimicJoints.forEach(K=>{W(K)})};W(N)}),U.frames={...v,...F,...h,...c},U}function g(C){let I=[...C.children],E=C.getAttribute("type"),R,P=I.find(B=>B.nodeName.toLowerCase()==="mimic");P?(R=new Co,R.mimicJoint=P.getAttribute("joint"),R.multiplier=parseFloat(P.getAttribute("multiplier")||1),R.offset=parseFloat(P.getAttribute("offset")||0)):R=new Ao,R.urdfNode=C,R.name=C.getAttribute("name"),R.urdfName=R.name,R.jointType=E;let U=null,F=null,v=[0,0,0],S=[0,0,0];I.forEach(B=>{let W=B.nodeName.toLowerCase();W==="origin"?(v=Qi(B.getAttribute("xyz")),S=Qi(B.getAttribute("rpy"))):W==="child"?F=h[B.getAttribute("link")]:W==="parent"?U=h[B.getAttribute("link")]:W==="limit"&&(R.limit.lower=parseFloat(B.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(B.getAttribute("upper")||R.limit.upper),R.limit.effort=parseFloat(B.getAttribute("effort")||R.limit.effort),R.limit.velocity=parseFloat(B.getAttribute("velocity")||R.limit.velocity))}),U.add(R),R.add(F),wf(R,S),R.position.set(v[0],v[1],v[2]);let N=I.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(N){let B=N.getAttribute("xyz").split(/\s+/g).map(W=>parseFloat(W));R.axis=new D(B[0],B[1],B[2]),R.axis.normalize()}return R}function _(C,I,E,R=null){R===null&&(R=new To);let P=[...C.children];R.name=C.getAttribute("name"),R.urdfName=R.name,R.urdfNode=C;let U=P.find(F=>F.nodeName.toLowerCase()==="inertial");return U&&[...U.children].forEach(F=>{let v=F.nodeName.toLowerCase();v==="origin"?(R.inertial.origin.xyz=Qi(F.getAttribute("xyz")),R.inertial.origin.rpy=Qi(F.getAttribute("rpy"))):v==="mass"?R.inertial.mass=parseFloat(F.getAttribute("value"))||0:v==="inertia"&&(R.inertial.inertia.ixx=parseFloat(F.getAttribute("ixx"))||0,R.inertial.inertia.ixy=parseFloat(F.getAttribute("ixy"))||0,R.inertial.inertia.ixz=parseFloat(F.getAttribute("ixz"))||0,R.inertial.inertia.iyy=parseFloat(F.getAttribute("iyy"))||0,R.inertial.inertia.iyz=parseFloat(F.getAttribute("iyz"))||0,R.inertial.inertia.izz=parseFloat(F.getAttribute("izz"))||0)}),r&&P.filter(v=>v.nodeName.toLowerCase()==="visual").forEach(v=>{let S=p(v,l);if(R.add(S),v.hasAttribute("name")){let N=v.getAttribute("name");S.name=N,S.urdfName=N,I[N]=S}}),a&&P.filter(v=>v.nodeName.toLowerCase()==="collision").forEach(v=>{let S=p(v);if(R.add(S),v.hasAttribute("name")){let N=v.getAttribute("name");S.name=N,S.urdfName=N,E[N]=S}}),R}function m(C){let I=[...C.children],E=new On;return E.name=C.getAttribute("name")||"",I.forEach(R=>{let P=R.nodeName.toLowerCase();if(P==="color"){let U=R.getAttribute("rgba").split(/\s/g).map(F=>parseFloat(F));E.color.setRGB(U[0],U[1],U[2]),E.opacity=U[3],E.transparent=U[3]<1,E.depthWrite=!E.transparent}else if(P==="texture"){let U=R.getAttribute("filename");if(U){let F=new ys(o),v=u(U);E.map=F.load(v),E.map.colorSpace=Mt}}}),E}function p(C,I={}){let E=C.nodeName.toLowerCase()==="collision",R=[...C.children],P=null,U=R.filter(v=>v.nodeName.toLowerCase()==="material")[0];if(U){let v=U.getAttribute("name");v&&v in I?P=I[v]:P=m(U)}else P=new On;let F=E?new Jc:new Zc;return F.urdfNode=C,R.forEach(v=>{let S=v.nodeName.toLowerCase();if(S==="geometry"){let N=v.children[0].nodeName.toLowerCase();if(N==="mesh"){let B=v.children[0].getAttribute("filename"),W=u(B);if(W!==null){let J=v.children[0].getAttribute("scale");if(J){let K=Qi(J);F.scale.set(K[0],K[1],K[2])}s(W,o,P,(K,k)=>{k?console.error("URDFLoader: Error loading mesh.",k):K&&(K.position.set(0,0,0),K.quaternion.identity(),F.add(K))})}}else if(N==="box"){let B=new ct;B.geometry=new An(1,1,1),B.material=P;let W=Qi(v.children[0].getAttribute("size"));B.scale.set(W[0],W[1],W[2]),F.add(B)}else if(N==="sphere"){let B=new ct;B.geometry=new Ai(1,30,30),B.material=P;let W=parseFloat(v.children[0].getAttribute("radius"))||0;B.scale.set(W,W,W),F.add(B)}else if(N==="cylinder"){let B=new ct;B.geometry=new Xi(1,1,1,30),B.material=P;let W=parseFloat(v.children[0].getAttribute("radius"))||0,J=parseFloat(v.children[0].getAttribute("length"))||0;B.scale.set(W,J,W),B.rotation.set(Math.PI/2,0,0),F.add(B)}}else if(S==="origin"){let N=Qi(v.getAttribute("xyz")),B=Qi(v.getAttribute("rpy"));F.position.set(N[0],N[1],N[2]),F.rotation.set(0,0,0),wf(F,B)}}),F}return d(e)}defaultMeshLoader(e,t,n,s){/\.stl$/i.test(e)?new Wc(t).load(e,a=>{let o=new ct(a,n||new On);s(o)},null,a=>s(null,a)):/\.dae$/i.test(e)?new Xc(t).load(e,a=>s(a.scene),null,a=>s(null,a)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}},Tf=Wh;var Fx=/^[og]\s*(.+)?/,Ox=/^mtllib /,Bx=/^usemtl /,kx=/^usemap /,Af=/\s+/,Cf=new D,Xh=new D,Rf=new D,If=new D,zn=new D,Qc=new Xe;function zx(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){let c={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){let s=this.vertices,r=this.object.geometry.normals;Cf.fromArray(s,e),Xh.fromArray(s,t),Rf.fromArray(s,n),zn.subVectors(Rf,Xh),If.subVectors(Cf,Xh),zn.cross(If),zn.normalize(),r.push(zn.x,zn.y,zn.z),r.push(zn.x,zn.y,zn.z),r.push(zn.x,zn.y,zn.z)},addColor:function(e,t,n){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,h,c){let l=this.vertices.length,u=this.parseVertexIndex(e,l),d=this.parseVertexIndex(t,l),f=this.parseVertexIndex(n,l);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let g=this.normals.length;u=this.parseNormalIndex(o,g),d=this.parseNormalIndex(h,g),f=this.parseNormalIndex(c,g),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(s!==void 0&&s!==""){let g=this.uvs.length;u=this.parseUVIndex(s,g),d=this.parseUVIndex(r,g),f=this.parseUVIndex(a,g),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}var el=class extends pn{constructor(e){super(e),this.materials=null}load(e,t,n,s){let r=this,a=new oi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(h){s?s(h):console.error(h),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new zx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),s=[];for(let o=0,h=n.length;o<h;o++){let c=n[o].trimStart();if(c.length===0)continue;let l=c.charAt(0);if(l!=="#")if(l==="v"){let u=c.split(Af);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Qc.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Mt),t.colors.push(Qc.r,Qc.g,Qc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(l==="f"){let d=c.slice(1).trim().split(Af),f=[];for(let _=0,m=d.length;_<m;_++){let p=d[_];if(p.length>0){let C=p.split("/");f.push(C)}}let g=f[0];for(let _=1,m=f.length-1;_<m;_++){let p=f[_],C=f[_+1];t.addFace(g[0],p[0],C[0],g[1],p[1],C[1],g[2],p[2],C[2])}}else if(l==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let g=0,_=u.length;g<_;g++){let m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(l==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=Fx.exec(c))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Bx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Ox.test(c))t.materialLibraries.push(c.substring(7).trim());else if(kx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(l==="s"){if(s=c.split(" "),s.length>1){let d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new en;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,h=t.objects.length;o<h;o++){let c=t.objects[o],l=c.geometry,u=c.materials,d=l.type==="Line",f=l.type==="Points",g=!1;if(l.vertices.length===0)continue;let _=new Ot;_.setAttribute("position",new ut(l.vertices,3)),l.normals.length>0&&_.setAttribute("normal",new ut(l.normals,3)),l.colors.length>0&&(g=!0,_.setAttribute("color",new ut(l.colors,3))),l.hasUVIndices===!0&&_.setAttribute("uv",new ut(l.uvs,2));let m=[];for(let C=0,I=u.length;C<I;C++){let E=u[C],R=E.name+"_"+E.smooth+"_"+g,P=t.materials[R];if(this.materials!==null){if(P=this.materials.create(E.name),d&&P&&!(P instanceof fn)){let U=new fn;dn.prototype.copy.call(U,P),U.color.copy(P.color),P=U}else if(f&&P&&!(P instanceof Jn)){let U=new Jn({size:10,sizeAttenuation:!1});dn.prototype.copy.call(U,P),U.color.copy(P.color),U.map=P.map,P=U}}P===void 0&&(d?P=new fn:f?P=new Jn({size:1,sizeAttenuation:!1}):P=new On,P.name=E.name,P.flatShading=!E.smooth,P.vertexColors=g,t.materials[R]=P),m.push(P)}let p;if(m.length>1){for(let C=0,I=u.length;C<I;C++){let E=u[C];_.addGroup(E.groupStart,E.groupCount,C)}d?p=new $n(_,m):f?p=new Ti(_,m):p=new ct(_,m)}else d?p=new $n(_,m[0]):f?p=new Ti(_,m[0]):p=new ct(_,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){let o=new Jn({size:1,sizeAttenuation:!1}),h=new Ot;h.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new ut(t.colors,3)),o.vertexColors=!0);let c=new Ti(h,o);r.add(c)}return r}};function wr(i){let e=new Set,t=new Set,n=new Set;i?.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){t.add(r);for(let a of Object.values(r))a?.isTexture&&n.add(a)}}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i?.removeFromParent()}async function Pf(i,e="visual"){if(!["visual","collision"].includes(e))throw Error("Unknown URDF geometry mode");let t=await fetch(i);if(!t.ok)throw Error("URDF \uBAA8\uB378 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let n=await t.json(),s=new URL(n.urdf,new URL(i,location.href)),r=await fetch(s);if(!r.ok)throw Error("URDF \uD30C\uC77C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let a=await r.text(),o=new DOMParser().parseFromString(a,"text/xml");if(o.querySelector("parsererror")||o.documentElement.tagName!=="robot")throw Error("\uC798\uBABB\uB41C URDF\uC785\uB2C8\uB2E4.");if(!o.querySelector(`link > ${e}`))throw Error(`URDF\uC5D0 ${e} \uD615\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`);let h=new cr,c=[],l=new Tf(h);l.packages=Object.fromEntries(Object.entries(n.packages||{}).map(([f,g])=>[f,new URL(g,new URL(i,location.href)).href.replace(/\/$/,"")])),l.parseVisual=e==="visual",l.parseCollision=e==="collision";let u=l.loadMeshCb;l.loadMeshCb=(f,g,_,m)=>{let p=new URL(f,location.href).pathname.split(".").at(-1).toLowerCase();p==="obj"?new el(g).load(f,C=>{C.traverse(I=>{I.isMesh&&(I.material=_)}),m(C)},void 0,C=>m(null,C)):["stl","dae"].includes(p)?u(f,g,_,m):(c.push(f),m(null,Error("Unsupported mesh: "+p)))};let d;return await new Promise((f,g)=>{h.onError=_=>c.push(_),h.onLoad=()=>c.length?g(Error("Mesh\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+c[0])):f(),h.itemStart("urdf-parse");try{d=l.parse(o,s.href.slice(0,s.href.lastIndexOf("/")+1))}catch(_){g(_)}finally{h.itemEnd("urdf-parse")}}).catch(f=>{throw wr(d),f}),e==="collision"&&d.traverse(f=>{f.isMesh&&(f.material=new Qt({color:6019784,roughness:.65,transparent:!0,opacity:.65,wireframe:!0}))}),d.userData.manifest=n,d.userData.geometryMode=e,d}function qh(i,e,t){if(!Array.isArray(e.joint_names)||e.joint_names.length!==e.dof)throw Error("\uAD00\uC808 \uC774\uB984\uC774 \uAE30\uB85D\uB418\uC9C0 \uC54A\uC740 \uACB0\uACFC\uC785\uB2C8\uB2E4.");let n=Math.floor(t),s=Math.min(n+1,e.q.length-1),r=t-n,a=e.floating_base?7:0,o={...e.locked_joints||{}};for(let h=0;h<e.joint_names.length;h++){let c=e.joint_names[h];if(!i.joints[c])throw Error("URDF\uC5D0 \uAE30\uB85D\uB41C \uAD00\uC808\uC774 \uC5C6\uC2B5\uB2C8\uB2E4: "+c);i.joints[c].ignoreLimits=!0,o[c]=Qn.lerp(e.q[n][a+h],e.q[s][a+h],r)}i.setJointValues(o),e.floating_base?(i.position.fromArray(e.q[n]).lerp(new D().fromArray(e.q[s]),r),i.quaternion.fromArray(e.q[n],3).slerp(new Et().fromArray(e.q[s],3),r)):(i.position.fromArray(e.base_pose?.position||[0,0,0]),i.quaternion.fromArray(e.base_pose?.quaternion_xyzw||[0,0,0,1])),i.updateMatrixWorld(!0)}var ee=i=>document.getElementById(i),ue,Ht=0,ts=!0,Tr=!0,Nf=1,jh=0,Cr=!1,nl=[],Di,es=[],tl,li=[],Io=[],Ro=0,ui=new wi;ui.fog=new fs(791587,.06);var Ui=new Vt(39,1,.01,100);Ui.up.set(0,0,1);var In,il=!1;try{In=new Dc({antialias:!0,alpha:!0})}catch{il=!0;let i=document.createElement("canvas");i.setAttribute("aria-label","CPU \uD22C\uC601 3D \uB85C\uBD07 \uBDF0\uC5B4"),In={domElement:i,setPixelRatio(){},setClearColor(){},setSize(e,t){i.width=e*Math.min(devicePixelRatio,2),i.height=t*Math.min(devicePixelRatio,2)},render:qx}}In.setPixelRatio(Math.min(devicePixelRatio,2));In.setClearColor(791587,0);In.outputColorSpace=Mt;In.toneMapping=Xa;In.toneMappingExposure=1.25;ee("viewport").prepend(In.domElement);var Fi=new Gc(Ui,In.domElement);Fi.enableDamping=!0;Fi.dampingFactor=.07;Fi.minDistance=.25;Fi.maxDistance=12;ui.add(new Ss(12176613,1.7));var $h=new qi(14543615,3.5);$h.position.set(3,-2,5);ui.add($h);var Jh=new qi(4900794,1.8);Jh.position.set(-2,3,2);ui.add(Jh);var Mn=new ho(new D(0,1,0),new D,.5,15689788,.08,.04);Mn.visible=!1;for(let i of[Mn.line,Mn.cone])i.material.depthTest=!1,i.renderOrder=1100;ui.add(Mn);var Vn,Rr,Po,Ar=[2473891,16032576,10979573],Vx={base_grasp:"\uBCF8\uCCB4 \uD30C\uC9C0",base_support:"\uBCF8\uCCB4 \uC9C0\uC9C0",moving_manipulation:"\uB69C\uAED1 \uD30C\uC9C0",edge_grip:"\uD328\uB110 edge \uD30C\uC9C0",under_left:"\uD328\uB110 \uC67C\uCABD \uC9C0\uC9C0",under_right:"\uD328\uB110 \uC624\uB978\uCABD \uC9C0\uC9C0",top_gripper:"\uC0C1\uD310 \uD30C\uC9C0",point_support:"\uC0C1\uD310 \uC9C0\uC9C0",leg_gripper:"\uB2E4\uB9AC \uD30C\uC9C0",support_0:"\uC67C\uCABD \uC9C0\uC9C0",support_1:"\uC911\uC559 \uC9C0\uC9C0",support_2:"\uC624\uB978\uCABD \uC9C0\uC9C0"},Do=sf(ui,In,$h,Jh,il);Do.set("studio");var hi=new en;ui.add(hi);var Hx=new D(0,1,0),Rn=new D(0,0,.4),Lo=1;ee("scene-style").onchange=()=>Do.set(ee("scene-style").value,Vn);function Df(){let i=ee("viewport").getBoundingClientRect();In.setSize(i.width,i.height),Ui.aspect=i.width/i.height,Ui.updateProjectionMatrix()}new ResizeObserver(Df).observe(ee("viewport"));Df();function No(i){ee("toast").textContent=i,ee("toast").classList.add("visible"),setTimeout(()=>ee("toast").classList.remove("visible"),6e3)}function Gx(i){return i==null?"\u2014":Math.abs(i)<.001&&i!==0?i.toExponential(1):i.toFixed(4)}function Wx(i){return i.engine==="mujoco_contact_recording"?"MuJoCo \xB7 \uC811\uCD09 \uB3D9\uC5ED\uD559":i.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uBBF8\uB9AC\uBCF4\uAE30":i.engine==="cito_trajectory"?"CITO \xB7 \uCD5C\uC801\uD654 \uADA4\uC801":i.live?"MuJoCo \xB7 \uC0C8 \uACC4\uC0B0 \uACB0\uACFC":"MuJoCo \xB7 \uACC4\uC0B0 \uACB0\uACFC"}function Uf(){Fi.target.copy(Rn),Ui.position.copy(Rn).add(new D(1.6,-2.4,1.6).multiplyScalar(Lo)),Fi.update()}function Xx(i){++Ro,Io=[];let e=i.contact_contraction?.input_type==="supplied_contracted_contacts";for(let l of ee("contact-display").options)["both","dense"].includes(l.value)&&(l.disabled=e);for(e&&["both","dense"].includes(ee("contact-display").value)&&(ee("contact-display").value="contracted");hi.children.length;)wr(hi.children[0]);nl=[],Di=void 0,Po=new en,hi.add(Po);for(let l=0;l<6;l++){let u=new ct(new Ai(.004,12,8),new Fn({color:16777215,depthTest:!1}));u.renderOrder=1003,u.visible=!1,Po.add(u)}ee("native-contact-controls").hidden=!i.native_contact_samples,ee("full-result-links").hidden=!i.full_task_recording&&!i.comparison_recording,document.querySelectorAll("[data-baseline-link]").forEach(l=>l.hidden=!i.full_task_recording),ee("contact-focus").replaceChildren(new Option("\uC120\uD0DD",""));for(let l of i.contact_contraction?.groups||[])ee("contact-focus").append(new Option(Vx[l.group_id]||l.group_id,l.group_id));let t=i.provenance?.canonical_point_tool;ee("native-contact-note").hidden=!i.native_contact_samples,ee("native-contact-note").textContent=i.native_contact_samples?"\uC0C9 \uC810: \uACC4\uD68D\uB41C contracted anchor. "+(t?`P \uC7A5\uCC29 \uAE38\uC774 EE \u2192 \uC811\uCD09\uC810 ${(1e3*Math.hypot(...t.ee_to_tip.slice(0,3).map(l=>l[3]))).toFixed(0)} mm / \uAD6C \uBC18\uACBD ${1e3*t.radius_m} mm. `:"")+(i.scenario==="full_box"?"G\uB294 \uBCF8\uCCB4\xB7\uB69C\uAED1\uC758 \uB3CC\uCD9C \uC190\uC7A1\uC774\uB97C \uD30C\uC9C0\uD569\uB2C8\uB2E4. \uBCF8\uCCB4 \uC190\uC7A1\uC774\uB294 \uAE08\uC18D \uC5F0\uACB0\uBD80\uB85C \uBCBD\uC5D0 \uC5F0\uACB0\uB429\uB2C8\uB2E4.":""):"",Rr=new en,hi.add(Rr);for(let[l,u]of(i.contact_contraction?.groups||[]).entries()){let d=new en;d.userData.contactGroup=u;let f=Ar[l%Ar.length],g=new Ti(new Ot().setFromPoints(u.target_points_m.map(m=>new D(...m))),new Jn({color:f,size:.007,depthTest:!1}));g.userData.dense=!0,g.renderOrder=1001,d.add(g);let _=new ct(new Ai(.006,14,10),new Fn({color:f,depthTest:!1}));_.position.fromArray(u.target_anchor_m),_.userData.anchor=!0,_.renderOrder=1002,d.add(_),Rr.add(d)}if(ee("contraction-state").replaceChildren(),i.contact_contraction){let l=i.contact_contraction;ee("contraction-state").append(l.input_type==="supplied_contracted_contacts"?` \xB7 \uC8FC\uC5B4\uC9C4 ${l.contracted_contact_count} contracted contacts \u2192 3 arms \xB7 `:` \xB7 ${l.dense_sample_count} samples \u2192 ${l.contracted_contact_count} anchors \u2192 3 arms \xB7 `);for(let[u,d]of l.groups.entries()){let f=document.createElement("span");f.style.color="#"+Ar[u%Ar.length].toString(16).padStart(6,"0"),f.textContent=` ${d.group_id}@${d.link_id} \u2192 ${l.assignment.find(g=>g.group_id===d.group_id).arm_id} `,ee("contraction-state").append(f)}}for(let l of(i.instances?.some(u=>["static_jig","articulated_object"].includes(u.role))?[]:i.environment)||[]){if(l.type!=="box")continue;let u=new ct(new An(...l.size),new Qt({color:l.color,transparent:!0,opacity:.6}));u.position.fromArray(l.position),l.quaternion_xyzw&&u.quaternion.fromArray(l.quaternion_xyzw),hi.add(u)}let n=i.positions[0].map(l=>new D(...l)),s=new Tn().setFromPoints(n);Rn=s.getCenter(new D),Lo=Math.max(i.viewer_min_extent||.4,s.getSize(new D).length()*.65);let r=Math.max(.009,Math.min(.022,Lo*.018)),a=new Qt({color:9939389,metalness:.48,roughness:.32}),o=new Qt({color:2452597,metalness:.5,roughness:.3}),h=new Qt({color:15776376,metalness:.3,roughness:.32,emissive:4399881,emissiveIntensity:.25});i.edges.forEach(([l,u])=>{let d=new ct(new Xi(r*.75,r*.75,1,12),a);hi.add(d),nl.push({mesh:d,a:l,b:u,cylinder:!0})});let c=new Set(i.link_names.map((l,u)=>l===i.frame||l.endsWith("link2")?u:-1));if(i.link_names.forEach((l,u)=>{if(i.object?.index===u)return;let d=new ct(new Ai(r*(c.has(u)?1.6:1.25),18,12),c.has(u)?h:o);hi.add(d),nl.push({mesh:d,a:u})}),i.object){Di=new ct(new An(...i.object.size),new Qt({color:15841913,metalness:.15,roughness:.45,transparent:!0,opacity:.8})),hi.add(Di);let l=new $n(new io(Di.geometry),new fn({color:16767402}));Di.add(l)}Vn&&(ui.remove(Vn),Vn.geometry.dispose()),Vn=new lo(Lo*5,20,3559532,1912904),Vn.rotation.x=Math.PI/2,Vn.position.set(Rn.x,Rn.y,Math.min(0,s.min.z)-.005),Vn.material.transparent=!0,Vn.material.opacity=.8,ui.add(Vn),Do.set(ee("scene-style")?.value||"studio",Vn),Uf()}async function Ff(){let i=++Ro,e=ue,t=ee("geometry-mode").value;if(Io.forEach(n=>wr(n.robot)),Io=[],ee("geometry-status").dataset.state="loading",Yh(Ht),t==="skeleton"){ee("geometry-status").textContent=e.id==="dual_cito"?"\uB450 Cartesian arm\uACFC \uBB3C\uCCB4\uC758 \uC88C\uD45C \uC7AC\uC0DD\uC785\uB2C8\uB2E4. \uC774 \uC81C\uD55C \uBAA8\uB378\uC5D0\uB294 \uC678\uD615 mesh\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"URDF \uB9C1\uD06C \uC88C\uD45C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. Visual \uB610\uB294 collision\uC744 \uC120\uD0DD\uD558\uBA74 \uC6D0\uBCF8 \uD615\uC0C1\uC744 \uBD88\uB7EC\uC635\uB2C8\uB2E4.",ee("geometry-status").dataset.state="skeleton",ee("loading").classList.add("hidden");return}ee("geometry-status").textContent="URDF\uC640 mesh\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4\u2026",ee("loading").classList.remove("hidden");try{let n=e.instances||[{manifest:`./models/${e.id}/model.json`}],s=await Promise.allSettled(n.map(async o=>{let h=await Pf(o.manifest,t);Do.materialize(h,o.role,t);let c=e.instances?{...o,q:e.q.map(l=>o.q_indices.map(u=>l[u]))}:e;try{qh(h,c,Ht)}catch(l){throw wr(h),l}return{robot:h,recording:c}})),r=s.filter(o=>o.status==="fulfilled").map(o=>o.value),a=s.find(o=>o.status==="rejected");if(i!==Ro||e!==ue||a){if(r.forEach(o=>wr(o.robot)),a)throw a.reason;return}Io=r,r.forEach(o=>hi.add(o.robot)),ee("geometry-status").textContent=il?"URDF/mesh \uB85C\uB4DC \uC644\uB8CC. WebGL\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4 \uB9C1\uD06C \uC88C\uD45C\uB97C CPU\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4.":t==="collision"?"URDF collision \uD615\uC0C1\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uD615\uC0C1 \uD45C\uC2DC\uB294 \uC811\uCD09 \uACC4\uC0B0\xB7\uCDA9\uB3CC \uAC80\uC99D \uACB0\uACFC\uC640 \uBCC4\uAC1C\uC785\uB2C8\uB2E4.":e.engine==="mujoco_contact_recording"?e.scenario==="mobile_panel"?"\uACF5\uC2DD RBY1 URDF\xB7mesh, \uCC28\uB3D9\uAD6C\uB3D9 \uBAA8\uBC14\uC77C \uBCA0\uC774\uC2A4\uC640 \uACE0\uC815 Panda\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4.":e.free_articulated_object?"\uC790\uC720 \uBCF8\uCCB4+\uB0B4\uBD80 \uAD00\uC808\uC758 \uC2E4\uC81C \uB3D9\uC5ED\uD559, \uC138 \uD314\uC758 \uB9C1\uD06C\uBCC4 contracted contact realization\uC785\uB2C8\uB2E4.":e.articulated_object?"\uC218\uB3D9 \uAD00\uC808\uC758 URDF\uC640 \uCE21\uC815\uB41C \uC6C0\uC9C1\uC784\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uBB3C\uCCB4 actuator \uC5C6\uC774 \uB85C\uBD07 \uC811\uCD09\uC73C\uB85C \uAD6C\uB3D9\uD588\uC2B5\uB2C8\uB2E4.":e.scenario==="panel_fixture"?"\uC6D0\uBCF8 Panda URDF\xB7mesh, \uC790\uC720 \uD328\uB110 URDF\uC640 \uACE0\uC815 \uC9C0\uADF8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC18C\uD615 \uC811\uCD09 refinement \uD6C4 \uC2E4\uD589\uD55C \uAE30\uB85D\uC785\uB2C8\uB2E4.":e.scenario==="table_assembly"?"Panda 3\uB300\uC640 \uB450 \uC790\uC720 \uBD80\uD488\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4. \uC0C1\uD310\xB7\uB2E4\uB9AC\uC758 visual/collision URDF\uC5D0 \uBE48 socket\uACFC peg \uD615\uC0C1\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.":"3\uAC1C URDF \uD314\uACFC \uB3C4\uAD6C\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4. Point\uB294 \uAD6C\uD615 tool, gripper\uB294 \uB450 \uC190\uAC00\uB77D \uC811\uCD09, suction\uC740 \uC555\uB825 \uC81C\uD55C seal \uBAA8\uB378\uC785\uB2C8\uB2E4.":"URDF visual\xB7mesh\uC758 origin\uACFC scale\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uAE30\uB85D\uB41C \uC2DC\uBBAC\uB808\uC774\uC158\uC740 \uAD00\uC808 \uCD94\uC885 \uAC80\uC99D\uC785\uB2C8\uB2E4.",e.display?.geometry&&!il&&(ee("geometry-status").textContent=e.display.geometry),ee("geometry-status").dataset.state="ready",ee("geometry-status").dataset.model=e.id,Yh(Ht)}catch(n){if(i!==Ro)return;ee("geometry-status").textContent=n.message+" \uB9C1\uD06C \uC88C\uD45C \uD45C\uC2DC\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uB124\uD2B8\uC6CC\uD06C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",ee("geometry-status").dataset.state="error",No(n.message)}finally{i===Ro&&ee("loading").classList.add("hidden")}}function Yh(i){if(!ue)return;let e=Math.floor(i),t=Math.min(e+1,ue.times.length-1),n=i-e,s=ue.positions[e].map((l,u)=>new D(...l).lerp(new D(...ue.positions[t][u]),n));nl.forEach(l=>{let u=s[l.a];if(!l.cylinder){l.mesh.visible=ee("geometry-mode").value==="skeleton",l.mesh.position.copy(u);return}let d=s[l.b],f=d.clone().sub(u),g=f.length();l.mesh.visible=ee("geometry-mode").value==="skeleton"&&g>1e-6,l.mesh.position.copy(u).add(d).multiplyScalar(.5),l.mesh.scale.set(1,g,1),g>1e-6&&l.mesh.quaternion.setFromUnitVectors(Hx,f.normalize())}),Di&&(Di.position.copy(s[ue.object.index]),ue.object.poses&&Di.quaternion.fromArray(ue.object.poses[e],3).slerp(new Et().fromArray(ue.object.poses[t],3),n)),Io.forEach(l=>qh(l.robot,l.recording,i));for(let l of Rr?.children||[]){let u=l.userData.contactGroup,d=ue.objects?.find(m=>m.id===u.link_id);if(!d)continue;let f=d.poses[e],g=d.poses[t];l.position.fromArray(f).lerp(new D().fromArray(g),n),l.quaternion.fromArray(f,3).slerp(new Et().fromArray(g,3),n);let _=ee("contact-display").value;for(let m of l.children)m.visible=_==="both"||m.userData.dense&&_==="dense"||m.userData.anchor&&_==="contracted"}let r=Math.round(i),a=ue.native_contact_samples?.frames[r]||[];Po?.children.forEach((l,u)=>{l.visible=!!a[u]&&ee("native-contact-visible").checked,a[u]&&l.position.fromArray(a[u].position_world_m)}),ee("native-contact-state").dataset.count=String(a.length),ee("native-contact-state").textContent=ue.native_contact_samples?`native ${ue.times[r].toFixed(3)} s \xB7 ${a.length} \uC811\uCD09\uBA74 \xB7 \uBCF4\uAC04 \uC5C6\uC74C${a.length?" \xB7 \uCD5C\uC18C gap "+(1e3*Math.min(...a.map(l=>l.minimum_gap_m))).toFixed(3)+" mm":""}`:"";let o=ue.times[e]*(1-n)+ue.times[t]*n,h=ue.external_disturbances||[],c=h.find(l=>o>=l.start&&o<=l.start+l.duration);if(Mn.visible=!1,c&&ue.objects?.[0]?.poses){let l=ue.objects.find(p=>p.native_body===c.body)||ue.objects[0],u=l.poses[e],d=l.poses[t],f=new Et().fromArray(u,3).slerp(new Et().fromArray(d,3),n),g=new D(...u.slice(0,3)).lerp(new D(...d.slice(0,3)),n).add(new D(...c.point_body_m).applyQuaternion(f)),_=Math.sin(Math.PI*(o-c.start)/c.duration)**2,m=new D(...c.force_world_N).multiplyScalar(_);m.length()>.01&&(Mn.position.copy(g),Mn.setDirection(m.clone().normalize()),Mn.setLength(.12+m.length()*.015,.08,.04),Mn.visible=!0)}ee("disturbance-state").hidden=!h.length,ee("disturbance-state").dataset.active=String(Mn.visible),ee("disturbance-state").textContent=c?`\uC678\uB825 \uC801\uC6A9 \uC911 \xB7 ${(Math.sin(Math.PI*(o-c.start)/c.duration)**2*Math.hypot(...c.force_world_N)).toFixed(2)} N \xB7 world frame`:h.length?`\uC678\uB825: ${h.map(l=>`${l.start}\u2013${l.start+l.duration} s / \uCD5C\uB300 ${Math.hypot(...l.force_world_N)} N`).join(", ")}`:"",li=s}function qx(){let i=In.domElement,e=i.getContext("2d"),t=i.width,n=i.height,s=Math.min(devicePixelRatio,2);if(e.clearRect(0,0,t,n),Do.mode==="studio"&&(e.fillStyle="#dce3e9",e.fillRect(0,0,t,n)),!ue||!li.length)return;Ui.updateMatrixWorld();let r=l=>{let u=l.clone().project(Ui);return[(u.x+1)*t/2,(1-u.y)*n/2,u.z]},a=(l,u,d,f)=>{let g=r(l),_=r(u);g[2]>1||_[2]>1||(e.strokeStyle=d,e.lineWidth=f*s,e.lineCap="round",e.beginPath(),e.moveTo(g[0],g[1]),e.lineTo(_[0],_[1]),e.stroke())},o=Vn.position.z,h=Lo*2.5;for(let l=-10;l<=10;++l){let u=h*l/10,d=l===0?"#36506c":"#1d3048";a(new D(Rn.x-h,Rn.y+u,o),new D(Rn.x+h,Rn.y+u,o),d,.8),a(new D(Rn.x+u,Rn.y-h,o),new D(Rn.x+u,Rn.y+h,o),d,.8)}for(let l of ue.environment||[]){if(l.type!=="box")continue;let u=Array.from({length:8},(d,f)=>new D(...l.size.map((g,_)=>(f>>_&1?.5:-.5)*g)).applyQuaternion(new Et().fromArray(l.quaternion_xyzw||[0,0,0,1])).add(new D(...l.position)));u.forEach((d,f)=>{for(let g=0;g<3;g++)f&1<<g||a(d,u[f|1<<g],"#64768b",1)})}if([...ue.edges].sort((l,u)=>r(li[u[0]])[2]-r(li[l[0]])[2]).forEach(([l,u])=>{a(li[l],li[u],"#546b82",10),a(li[l],li[u],"#aabbd0",5)}),li.forEach((l,u)=>{if(ue.object?.index===u)return;let d=r(l);if(d[2]>1)return;let f=ue.link_names[u]===ue.frame||ue.link_names[u].endsWith("link2");e.fillStyle=f?"#f0ba78":"#3da99e",e.strokeStyle="#112d3b",e.lineWidth=2*s,e.beginPath(),e.arc(d[0],d[1],(f?6:4)*s,0,Math.PI*2),e.fill(),e.stroke()}),ue.object){let l=li[ue.object.index],u=ue.object.size,d=Array.from({length:8},(f,g)=>new D(...u.map((_,m)=>(g>>m&1?.5:-.5)*_)).applyQuaternion(Di.quaternion).add(l));d.forEach((f,g)=>{for(let _=0;_<3;_++)g&1<<_||a(f,d[g|1<<_],"#f1ba79",2)})}for(let l of ue.objects||[]){let u=Math.floor(Ht),d=Math.min(u+1,ue.times.length-1),f=Ht-u,g=new D().fromArray(l.poses[u]).lerp(new D().fromArray(l.poses[d]),f),_=new Et().fromArray(l.poses[u],3).slerp(new Et().fromArray(l.poses[d],3),f);for(let m of l.boxes){let p=new Et().fromArray(m.quaternion_xyzw),C=Array.from({length:8},(I,E)=>new D(...m.size.map((R,P)=>(E>>P&1?.5:-.5)*R)).applyQuaternion(p).add(new D(...m.position)).applyQuaternion(_).add(g));C.forEach((I,E)=>{for(let R=0;R<3;R++)E&1<<R||a(I,C[E|1<<R],l.id==="tabletop"?"#f1ba79":"#d49965",2)})}}for(let l of Rr?.children||[]){l.updateMatrixWorld(!0);let u=l.userData.contactGroup,d=ee("contact-display").value;if(d!=="off"){e.fillStyle="#"+Ar[Rr.children.indexOf(l)%Ar.length].toString(16).padStart(6,"0");for(let f of d==="dense"||d==="both"?u.target_points_m:[]){let g=r(l.localToWorld(new D(...f)));e.beginPath(),e.arc(g[0],g[1],2*s,0,Math.PI*2),e.fill()}if(d==="contracted"||d==="both"){let f=r(l.localToWorld(new D(...u.target_anchor_m)));e.beginPath(),e.arc(f[0],f[1],6*s,0,Math.PI*2),e.fill()}}}for(let l of Po?.children||[])if(l.visible){let u=r(l.position);e.fillStyle="#fff",e.beginPath(),e.arc(u[0],u[1],3*s,0,Math.PI*2),e.fill()}if(Mn.visible){let l=Mn.position,u=new D(0,1,0).applyQuaternion(Mn.quaternion).multiplyScalar(Mn.line.scale.y+.08).add(l);a(l,u,"#ff482f",4);let d=r(u),f=r(l),g=Math.atan2(d[1]-f[1],d[0]-f[0]);e.fillStyle="#ff482f",e.beginPath(),e.moveTo(d[0],d[1]);for(let _ of[-1,1])e.lineTo(d[0]-15*s*Math.cos(g+_*.4),d[1]-15*s*Math.sin(g+_*.4));e.closePath(),e.fill()}e.fillStyle="#8fa6c3",e.font=`${9*s}px sans-serif`,e.fillText("CPU 3D PROJECTION \xB7 WebGL unavailable",18*s,n-40*s)}function jx(){if(es=ue.chart_values||(ue.errors?.some(n=>n!==null)?ue.errors:ue.object?ue.positions.map(n=>n[ue.object.index][2]-ue.positions[0][ue.object.index][2]):[]),ee("chart-label").textContent=ue.chart_label||(ue.object?"OBJECT LIFT":"JOINT TRACKING ERROR"),ee("error-unit").textContent=ue.chart_unit||(ue.object?"m":"rad"),ee("chart-note").textContent=ue.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uC7AC\uC0DD: \uB3D9\uC5ED\uD559 \uCD94\uC885 \uC624\uCC28 \uC5C6\uC74C":ue.scenario==="table_assembly"?"\uC2E4\uC81C peg tip / socket \uC704\uCE58\uC5D0\uC11C \uACC4\uC0B0 \xB7 28 s\uC5D0 \uB2E4\uB9AC gripper \uD574\uC81C":ue.instances?"\uC2E4\uC81C \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589 \uAE30\uB85D \xB7 keyframe\uBCC4 \uCD94\uC885\xB7\uC811\uCD09 \uC0C1\uD0DC \uD655\uC778":ue.object?"1 kg \uBB3C\uCCB4 \xB7 \uB450 Cartesian arm \xB7 3 cm \uC774\uB3D9":"\uAD00\uC808 \uC704\uCE58 \uC624\uCC28\uC758 2-norm",ue.display?.chart_note&&(ee("chart-note").textContent=ue.display.chart_note),!es.length){ee("chart-line").setAttribute("points",""),ee("chart-area").setAttribute("d","");return}let i=Math.min(0,...es),e=Math.max(1e-8,...es),t=es.map((n,s)=>[s/(es.length-1)*260,80-(n-i)/(e-i)*66]);ee("chart-line").setAttribute("points",t.map(n=>n.join(",")).join(" ")),ee("chart-area").setAttribute("d","M0,85 L"+t.map(n=>n.join(",")).join(" L")+" L260,85 Z")}function Of(i){for(let e of document.querySelectorAll(".category-choice"))e.setAttribute("aria-pressed",String(e.dataset.category===i));for(let e of document.querySelectorAll(".library-category"))e.hidden=e.dataset.category!==i;ee("library-description").textContent=br.find(e=>e.id===i).description,Bf()}function Bf(){if(!matchMedia("(max-width:680px)").matches)return;let i=document.querySelector(".library-category:not([hidden])"),e=i?.querySelector(".model-choice.selected");e&&(i.scrollLeft+=e.getBoundingClientRect().left-i.getBoundingClientRect().left-(i.clientWidth-e.clientWidth)/2)}function Yx(i){for(let e of br){let t=i.map(o=>({model:o,entry:Mr(o)})).filter(o=>o.entry.category===e.id).sort((o,h)=>o.entry.order-h.entry.order);if(!t.length)continue;let n=document.createElement("button");n.className="category-choice",n.dataset.category=e.id,n.setAttribute("aria-controls","library-"+e.id),n.setAttribute("aria-pressed","false");let s=document.createElement("span"),r=document.createElement("span");s.textContent=e.title,r.textContent=t.length,n.append(s,r),n.onclick=()=>Of(e.id),ee("library-categories").append(n);let a=document.createElement("div");a.id="library-"+e.id,a.className="library-category",a.dataset.category=e.id;for(let[o,h]of e.groups.entries()){let c=t.filter(d=>d.entry.group===o);if(!c.length)continue;let l=document.createElement("section");l.className="library-group";let u=document.createElement("h3");u.textContent=h,l.append(u);for(let{model:d,entry:f}of c){let g=document.createElement("button");g.className="model-choice",g.dataset.id=d.id,g.setAttribute("aria-pressed","false");let _=document.createElement("span"),m=document.createElement("span"),p=document.createElement("span");m.className="model-name",m.textContent=f.title,p.className="model-meta",p.textContent=f.detail,_.append(m,p);let C=document.createElement("span");C.className="choice-dot",C.textContent="\u25CF",g.append(_,C),g.onclick=()=>Kh(d.id),l.append(g)}a.append(l)}ee("model-list").append(a)}}function Zh(i){ee("toast").classList.remove("visible"),ue?.id==="dual_cito"&&i.id!=="dual_cito"&&(ee("geometry-mode").value="visual"),ue=i,Ht=0,document.querySelector(".run-panel").hidden=!!i.instances,window.dispatchEvent(new CustomEvent("recording-selected",{detail:i})),ee("geometry-mode").disabled=i.id==="dual_cito",i.id==="dual_cito"&&(ee("geometry-mode").value="skeleton"),ee("model-title").textContent=i.title;let e=of(i);if(Of(e.entry.category),ee("scenario-category").textContent=e.category.title+" / "+e.category.groups[e.entry.group],ee("scenario-status").textContent=e.status,ee("scenario-status").dataset.fullPipeline=String(e.full),ee("scenario-scope").textContent=e.detail,document.querySelector(`.model-choice[data-id="${CSS.escape(i.id)}"]`)){let n=new URL(location.href);n.searchParams.set("model",i.id),history.replaceState(null,"",n)}ee("model-description").textContent=i.engine==="kinematic_preview"?"29\uAC1C \uAD00\uC808\uACFC floating base\uB97C \uAC00\uC9C4 \uD734\uBA38\uB178\uC774\uB4DC\uC758 \uAE30\uAD6C\uD559\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.":i.engine==="cito_trajectory"?"\uC811\uCD09\uC744 \uC720\uC9C0\uD558\uBA70 \uBB3C\uCCB4\uB97C \uB4E4\uC5B4 \uC62C\uB9AC\uB294 \uC81C\uD55C \uBAA8\uB378\uC758 \uCD5C\uC801\uD654 \uACB0\uACFC\uC785\uB2C8\uB2E4.":"URDF \uAD00\uC131\uC73C\uB85C \uACC4\uC0B0\uD55C \uD3D0\uB8E8\uD504 \uD1A0\uD06C \uC81C\uC5B4 \uACB0\uACFC\uB97C \uC7AC\uC0DD\uD569\uB2C8\uB2E4.",i.instances&&(ee("model-description").textContent=i.free_articulated_object?"\uC790\uC720 \uBCF8\uCCB4+\uB0B4\uBD80 \uAD00\uC808\uC758 \uC2E4\uC81C \uB3D9\uC5ED\uD559, \uC138 \uD314\uC758 \uB9C1\uD06C\uBCC4 contracted contact realization\uC785\uB2C8\uB2E4.":i.articulated_object?"\uC218\uB3D9 \uBB3C\uCCB4 \uAD00\uC808 \xB7 \uB85C\uBD07 \uC811\uCD09\uC73C\uB85C \uAD6C\uB3D9 \xB7 \uC8FC\uC5B4\uC9C4 \uC811\uCD09\uC810\uACFC \uAD00\uC808 \uACBD\uB85C\uC758 \uD798\xB7\uD1A0\uD06C \uCD5C\uC801\uD654":i.scenario==="mobile_panel"?"RBY1 \uBAA8\uBC14\uC77C \uB4C0\uC5BC\uC554 + \uACE0\uC815 Panda \xB7 \uCD08\uAE30 \uC9C0\uC9C0 \uC804\uB2EC \u2192 \uACE0\uC815 \uC791\uC5C5\uC601\uC5ED \uBC16\uC73C\uB85C \uC774\uB3D9 \u2192 \uC9C0\uADF8 \uC548\uCC29\xB7\uB9B4\uB9AC\uC2A4":i.scenario==="panel_fixture"?"\uBCF8 \uC2E4\uD5D8: \uC18C\uD615 \uC811\uCD09 \uC704\uCE58 refinement \u2192 \uD328\uB110 \uC6B4\uBC18\xB7\uC7AC\uBC30\uD5A5 \u2192 \uC9C0\uADF8 \uC548\uCC29\xB7\uD558\uC911 \uC804\uB2EC \u2192 \uC804\uCCB4 \uB9B4\uB9AC\uC2A4 \xB7 \uC790\uC720 \uAC15\uCCB4 \uC2E4\uD589":i.scenario==="table_assembly"?"\uBC11\uBA74\uC774 \uC704\uC778 \uC0C1\uD310 grip & support \u2192 12\xB0 reorientation \u2192 \uB2E4\uB9AC \uC815\uB82C\xB7\uC0BD\uC785 \u2192 gripper \uD574\uC81C \xB7 30\uCD08 \uC2E4\uC81C \uB3D9\uC5ED\uD559 \uC2E4\uD589":`\uC8FC\uC5B4\uC9C4 contracted contact \u2192 ${i.keyframes.length}\uAC1C keyframe \uCD5C\uC801\uD654 \u2192 3\uAC1C \uD314\uC758 \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589\uC785\uB2C8\uB2E4.`),ee("engine-badge").innerHTML="<span></span>"+Wx(i),ee("engine-badge").classList.toggle("kinematic",i.engine==="kinematic_preview"),ee("scene-label").textContent=i.engine==="cito_trajectory"?"COUPLED ROBOT\u2013OBJECT TRAJECTORY":i.engine==="kinematic_preview"?"FLOATING-BASE KINEMATIC PREVIEW":"RECORDED CLOSED-LOOP SIMULATION",i.instances&&(ee("scene-label").textContent=i.free_articulated_object?"LINK-AWARE CONTRACTION \u2192 THREE-ARM REALIZATION \xB7 FREE ARTICULATED BODY":i.articulated_object?"PASSIVE ARTICULATED OBJECT \xB7 MEASURED CONTACT DYNAMICS":`COOPERATIVE CONTACT DYNAMICS \xB7 ${i.keyframes.length} KEYFRAMES`),i.display?.description&&(ee("model-description").textContent=i.display.description),i.display?.scene_label&&(ee("scene-label").textContent=i.display.scene_label),ee("dof").textContent=i.dof,ee("base").textContent=i.free_articulated_object?"Free object + joint":i.scenario==="mobile_panel"?"Mobile SE(2)":i.floating_base?"Floating +6":"Fixed",ee("physics-step").textContent=i.summary.physics_dt?Number((i.summary.physics_dt*1e3).toFixed(3))+" ms":i.engine==="cito_trajectory"?"100 ms":"\u2014";let t=i.times.at(-1);ee("duration").textContent=t.toFixed(1)+" s",ee("time-total").textContent=t.toFixed(2)+" s",ee("chart-end").textContent=t.toFixed(1)+" s",ee("tool-frame").textContent=i.frame,ee("scope-description").textContent=i.description,ee("keyframe-list").replaceChildren();for(let n of[...i.keyframes||[],...i.events||[]].sort((s,r)=>s.time-r.time)){let s=document.createElement("button");s.className="keyframe-choice",s.textContent=n.id+" \xB7 "+n.time.toFixed(1)+" s",s.onclick=()=>{ts=!1,ee("play").textContent="\u25B6",ee("play").setAttribute("aria-label","\uC7AC\uC0DD");let r=i.times.findIndex(o=>o>=n.time);r<0&&(r=i.times.length-1);let a=Math.max(0,r-1);Ht=a+(n.time-i.times[a])/Math.max(1e-12,i.times[r]-i.times[a]),Ns()},ee("keyframe-list").append(s)}document.querySelectorAll(".model-choice").forEach(n=>{n.classList.toggle("selected",n.dataset.id===i.id),n.setAttribute("aria-pressed",n.dataset.id===i.id)}),Bf(),tl&&URL.revokeObjectURL(tl),tl=URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),ee("download-data").href=tl,ee("download-data").download=i.id+"-simulation.json",ee("run").disabled=!Cr||i.engine==="kinematic_preview"||i.id==="dual_cito"||!!i.instances,ee("amplitude").disabled=ee("run-duration").disabled=!!i.instances,ee("backend-state").textContent=i.instances?"\uC870\uAC74\uC744 \uBC14\uAFD4 \uB2E4\uC2DC \uACC4\uC0B0: contact-transfer demo-three-arm --viewer web":Cr?"Python backend \uC5F0\uACB0\uB428 \xB7 \uC0C8 MuJoCo \uACC4\uC0B0\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.":"\uC774 \uB9C1\uD06C\uB294 \uACC4\uC0B0 \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4. \uC0C8 \uACC4\uC0B0\uC740 \uB85C\uCEEC \uB610\uB294 Codespaces\uC758 Python \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.",Xx(i),jx(),Ns(),Ff()}function Ns(){if(!ue)return;let i=Math.min(Math.round(Ht),ue.times.length-1),e=ue.times[0]+Ht/(ue.times.length-1)*ue.times.at(-1);ee("timeline").value=Ht/(ue.times.length-1),ee("time-now").textContent=e.toFixed(2)+" s",ee("error-now").textContent=es.length?Gx(es[i]):"\u2014",ee("tool-state").textContent=ue.tool_states&&!ue.tool_states.suction_sealed&&ue.scenario!=="table_assembly"?Object.entries(ue.tool_states).map(([n,s])=>`${n}: ${s[i]?"\uC811\uCD09":"\uD574\uC81C"}`).join(" \xB7 "):ue.scenario==="table_assembly"?`\uC0C1\uD310 gripper: ${ue.tool_states.top_gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uBD84\uB9AC"} \xB7 \uAD6C\uD615 support: ${ue.tool_states.point_contact[i]?"\uC811\uCD09":"\uBD84\uB9AC"} \xB7 \uB2E4\uB9AC gripper: ${ue.tool_states.leg_gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uD574\uC81C"} \xB7 socket: ${ue.tool_states.socket_contact[i]?"\uC811\uCD09":"\uBE44\uC811\uCD09"}`:ue.tool_states?`\uAD6C\uD615 tool: ${ue.tool_states.point_contact[i]?"\uC811\uCD09":"\uBD84\uB9AC"} \xB7 Gripper: ${ue.tool_states.gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uBBF8\uD30C\uC9C0"} \xB7 Suction: ${ue.tool_states.suction_sealed[i]?"seal \uC720\uC9C0":"\uD574\uC81C"}`:"";let t=ue.torque_ratio[i];ee("torque-now").textContent=t==null?"\u2014":(t*100).toFixed(1)+"%",ee("torque-meter").style.width=Math.min(100,(t||0)*100)+"%",ee("chart-cursor").setAttribute("x1",Ht/(ue.times.length-1)*260),ee("chart-cursor").setAttribute("x2",Ht/(ue.times.length-1)*260),Yh(Ht)}async function Kh(i){let e=++jh;ee("loading").classList.remove("hidden");try{let t=await fetch("./data/"+i+".json");if(!t.ok)throw Error("\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let n=await t.json();e===jh&&Zh(n)}catch(t){e===jh&&(No(t.message),ee("loading").classList.add("hidden"))}}ee("play").onclick=()=>{ts=!ts,ee("play").textContent=ts?"\u2161":"\u25B6",ee("play").setAttribute("aria-label",ts?"\uC77C\uC2DC \uC815\uC9C0":"\uC7AC\uC0DD")};ee("timeline").oninput=i=>{ue&&(Ht=Number(i.target.value)*(ue.times.length-1),Ns())};ee("speed").onchange=i=>Nf=Number(i.target.value);ee("loop").onclick=()=>{Tr=!Tr,ee("loop").classList.toggle("active",Tr),ee("loop").setAttribute("aria-pressed",Tr)};ee("reset-camera").onclick=Uf;ee("geometry-mode").onchange=Ff;ee("contact-display").onchange=()=>Ns();ee("native-contact-visible").onchange=()=>Ns();ee("contact-focus").onchange=()=>{let i=ee("contact-focus").value,e=ue?.contact_contraction?.groups.find(o=>o.group_id===i),t=ue?.objects?.find(o=>o.id===e?.link_id);if(!e||!t)return;ts=!1,ee("play").textContent="\u25B6",ee("play").setAttribute("aria-label","\uC7AC\uC0DD"),Ht=Math.round(Ht),Ns();let n=ue.native_contact_samples?.frames[Ht]?.filter(o=>o.group_id===i)||[],s=t.poses[Ht],r=n.length?n.reduce((o,h)=>o.add(new D(...h.position_world_m)),new D).divideScalar(n.length):new D(...e.target_anchor_m).applyQuaternion(new Et().fromArray(s,3)).add(new D(...s.slice(0,3))),a=new D(i==="base_grasp"?-.35:.25,-.45,.35).applyQuaternion(new Et().fromArray(s,3));Fi.target.copy(r),Ui.position.copy(r).add(a),Fi.update()};ee("run").onclick=async()=>{ee("run").disabled=!0,ee("run").textContent="\uACC4\uC0B0 \uC911\u2026";try{let i=await fetch("./api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:ue.id,duration:Number(ee("run-duration").value),amplitude:Number(ee("amplitude").value)})}),e=await i.json();if(!i.ok)throw Error(e.error||"\uC2DC\uBBAC\uB808\uC774\uC158 \uC2E4\uD328");e.live=!0,Zh(e),No("\uC0C8 MuJoCo \uACC4\uC0B0\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(i){No(i.message)}finally{ee("run").textContent="Run simulation \u2197",ee("run").disabled=!Cr||ue.id==="dual_cito"||ue.floating_base||!!ue.instances}};async function $x(){let i=await fetch("./data/index.json"),e=await i.json();ee("model-count").textContent=String(e.models.length).padStart(2,"0"),Yx(e.models);let t=new URLSearchParams(location.search).get("model");await Kh(e.models.some(n=>n.id===t)?t:["full_assembly","full_panel","full_box","free_box_lid"].find(n=>e.models.some(s=>s.id===n)));try{let n=await fetch("./api/health");n.ok&&(Cr=(await n.json()).ready===!0)}catch{}ee("backend-state").textContent=ue?.full_task_recording?"\uC0C8 \uACC4\uD68D\xB7\uBB3C\uB9AC \uC2E4\uD589\uC740 Python\uC758 tools/run_full_scenarios.py\uC5D0\uC11C \uC218\uD589\uD569\uB2C8\uB2E4. \uACF5\uAC1C \uD398\uC774\uC9C0\uB294 \uC800\uC7A5\uB41C \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4.":ue?.instances?"\uC870\uAC74\uC744 \uBC14\uAFD4 \uB2E4\uC2DC \uACC4\uC0B0: contact-transfer demo-three-arm --viewer web":Cr?"Python backend \uC5F0\uACB0\uB428 \xB7 \uC0C8 MuJoCo \uACC4\uC0B0\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.":"\uC774 \uB9C1\uD06C\uB294 \uACC4\uC0B0 \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4. \uC0C8 \uACC4\uC0B0\uC740 \uB85C\uCEEC \uB610\uB294 Codespaces\uC758 Python \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.",ee("run").disabled=!Cr||ue?.floating_base||ue?.id==="dual_cito"||!!ue?.instances}var Lf=performance.now();function kf(i){requestAnimationFrame(kf);let e=Math.min(.05,(i-Lf)/1e3);Lf=i,ue&&ts&&(Ht+=e*Nf*(ue.times.length-1)/ue.times.at(-1),Ht>ue.times.length-1&&(Ht=Tr?0:ue.times.length-1,Tr||(ts=!1,ee("play").textContent="\u25B6")),Ns()),Fi.update(),In.render(ui,Ui)}requestAnimationFrame(kf);$x().catch(i=>{No(i.message),ee("loading").classList.add("hidden")});window.addEventListener("experiment-result",i=>Zh(i.detail));yf().catch(i=>{document.getElementById("experiment-state").textContent=i.message});window.addEventListener("experiment-preview",i=>Kh(i.detail));
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
