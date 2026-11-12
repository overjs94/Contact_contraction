var Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yu=0,Bc=1,vu=2;var kc=1,Ca=2,si=3,Wn=0,en=1,Fn=2,Ti=0,ss=1,zc=2,Vc=3,Hc=4,bu=5,Bi=100,Mu=101,Su=102,Eu=103,wu=104,Tu=200,Au=201,Cu=202,Ru=203,la=204,ca=205,Pu=206,Iu=207,Lu=208,Nu=209,Du=210,Uu=211,Fu=212,Ou=213,Bu=214,Ra=0,Pa=1,Ia=2,rs=3,La=4,Na=5,Da=6,Ua=7,so=0,ku=1,zu=2,Ai=0,Vu=1,Hu=2,Gu=3,Fa=4,Wu=5,Xu=6,qu=7,Tc="attached",Yu="detached",Gc=300,vs=301,bs=302,Oa=303,Ba=304,ro=306,Xn=1e3,Sn=1001,ha=1002,_n=1003,ju=1004;var oo=1005;var gn=1006,ka=1007;var Zn=1008;var $n=1009,Wc=1010,Xc=1011,or=1012,za=1013,Wi=1014,On=1015,ar=1016,Va=1017,Ha=1018,lr=1020,qc=35902,Yc=35899,jc=1021,Jc=1022,Tn=1023,Js=1026,cr=1027,Ga=1028,Wa=1029,Zc=1030,Xa=1031;var qa=1033,ao=33776,lo=33777,co=33778,ho=33779,Ya=35840,ja=35841,Ja=35842,Za=35843,$a=36196,Ka=37492,Qa=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,_l=36283,xl=36284,yl=36285,vl=36286;var Lr=2300,ua=2301,aa=2302,Ac=2400,Cc=2401,Rc=2402,Ju=2500;var Zu=3200,$u=3201;var uo=0,Ku=1,Ci="",Mt="srgb",os="srgb-linear",Nr="linear",Tt="srgb";var is=7680;var Pc=519,Qu=512,ed=513,td=514,$c=515,nd=516,id=517,sd=518,rd=519,Ic=35044;var Kc="300 es",Gn=2e3,Dr=2001;var ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,qs=Math.PI/180,as=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function pf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function mf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ir(i,e,t){return(1-t)*i+t*e}function gf(i,e,t,n){return Ir(i,e,1-Math.exp(-t*n))}function _f(i,e=1){return e-Math.abs(Qc(i,e*2)-e)}function xf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bf(i,e){return i+Math.random()*(e-i)}function Mf(i){return i*(.5-Math.random())}function Sf(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(i){return i*qs}function wf(i){return i*as}function Tf(i){return(i&i-1)===0&&i!==0}function Af(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Kn={DEG2RAD:qs,RAD2DEG:as,generateUUID:Xi,clamp:pt,euclideanModulo:Qc,mapLinear:pf,inverseLerp:mf,lerp:Ir,damp:gf,pingpong:_f,smoothstep:xf,smootherstep:yf,randInt:vf,randFloat:bf,randFloatSpread:Mf,seededRandom:Sf,degToRad:Ef,radToDeg:wf,isPowerOfTwo:Tf,ceilPowerOfTwo:Af,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:Rf,normalize:un,denormalize:Xs},$e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,C=p>=0?1:-1,P=1-p*p;if(P>Number.EPSILON){let R=Math.sqrt(P),I=Math.atan2(R,p*C);m=Math.sin(m*I)/R,a=Math.sin(a*I)/R}let E=a*C;if(c=c*m+d*E,l=l*m+f*E,h=h*m+g*E,u=u*m+_*E,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kl=new U,Oh=new At,ct=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],C=s[1],P=s[4],E=s[7],R=s[2],I=s[5],D=s[8];return r[0]=o*_+a*C+c*R,r[3]=o*m+a*P+c*I,r[6]=o*p+a*E+c*D,r[1]=l*_+h*C+u*R,r[4]=l*m+h*P+u*I,r[7]=l*p+h*E+u*D,r[2]=d*_+f*C+g*R,r[5]=d*m+f*P+g*I,r[8]=d*p+f*E+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ql=new ct;function eh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){let i=Zs("canvas");return i.style.display="block",i}var Bh={};function $s(i){i in Bh||(Bh[i]=!0,console.warn(i))}function ad(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pf(){let i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var mt=Pf();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,da=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Zs("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},If=0,Ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,tc=new U,on=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Sn,s=Sn,r=gn,o=Zn,a=Tn,c=$n,l=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Xi(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Gc;on.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(l+1)/2,E=(f+1)/2,R=(p+1)/2,I=(h+d)/4,D=(u+_)/4,F=(g+m)/4;return P>E&&P>R?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=I/n,r=D/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=F/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=D/r,s=F/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(u-_)/C,this.z=(d-h)/C,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new on(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Do.subVectors(this.max,Sr),Ls.subVectors(e.a,Sr),Ns.subVectors(e.b,Sr),Ds.subVectors(e.c,Sr),Li.subVectors(Ns,Ls),Ni.subVectors(Ds,Ns),Qi.subVectors(Ls,Ds);let t=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-Qi.z,Qi.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,Qi.z,0,-Qi.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-Qi.y,Qi.x,0];return!nc(t,Ls,Ns,Ds,Do)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,Ls,Ns,Ds,Do))?!1:(Uo.crossVectors(Li,Ni),t=[Uo.x,Uo.y,Uo.z],nc(t,Ls,Ns,Ds,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,No=new En,Ls=new U,Ns=new U,Ds=new U,Li=new U,Ni=new U,Qi=new U,Sr=new U,Do=new U,Uo=new U,es=new U;function nc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Nf=new En,Er=new U,ic=new U,Dn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(ic)),this.expandByPoint(Er.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fi=new U,sc=new U,Fo=new U,Di=new U,rc=new U,Oo=new U,oc=new U,vi=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Di.dot(this.direction),c=-Di.dot(Fo),l=Di.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sc).addScaledVector(Fo,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){rc.subVectors(t,e),Oo.subVectors(n,e),oc.crossVectors(rc,Oo);let o=this.direction.dot(oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let c=a*this.direction.dot(Oo.crossVectors(Di,Oo));if(c<0)return null;let l=a*this.direction.dot(rc.cross(Di));if(l<0||c+l>o)return null;let h=-a*Di.dot(oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,Uf)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ui.crossVectors(n,bn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ui.crossVectors(n,bn)),Ui.normalize(),Bo.crossVectors(bn,Ui),s[0]=Ui.x,s[4]=Bo.x,s[8]=bn.x,s[1]=Ui.y,s[5]=Bo.y,s[9]=bn.y,s[2]=Ui.z,s[6]=Bo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],C=n[3],P=n[7],E=n[11],R=n[15],I=s[0],D=s[4],F=s[8],v=s[12],S=s[1],N=s[5],B=s[9],W=s[13],Z=s[2],K=s[6],k=s[10],ne=s[14],X=s[3],se=s[7],fe=s[11],me=s[15];return r[0]=o*I+a*S+c*Z+l*X,r[4]=o*D+a*N+c*K+l*se,r[8]=o*F+a*B+c*k+l*fe,r[12]=o*v+a*W+c*ne+l*me,r[1]=h*I+u*S+d*Z+f*X,r[5]=h*D+u*N+d*K+f*se,r[9]=h*F+u*B+d*k+f*fe,r[13]=h*v+u*W+d*ne+f*me,r[2]=g*I+_*S+m*Z+p*X,r[6]=g*D+_*N+m*K+p*se,r[10]=g*F+_*B+m*k+p*fe,r[14]=g*v+_*W+m*ne+p*me,r[3]=C*I+P*S+E*Z+R*X,r[7]=C*D+P*N+E*K+R*se,r[11]=C*F+P*B+E*k+R*fe,r[15]=C*v+P*W+E*ne+R*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],C=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,P=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,E=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,I=t*C+n*P+s*E+r*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=C*D,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*D,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*D,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*D,e[4]=P*D,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*D,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*D,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*D,e[8]=E*D,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*D,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*D,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*D,e[12]=R*D,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*D,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*D,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,C=c*l,P=c*h,E=c*u,R=n.x,I=n.y,D=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+E)*R,s[2]=(g-P)*R,s[3]=0,s[4]=(f-E)*I,s[5]=(1-(d+p))*I,s[6]=(m+C)*I,s[7]=0,s[8]=(g+P)*D,s[9]=(m-C)*D,s[10]=(1-(d+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);let l=1/r,h=1/o,u=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Gn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Dr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Gn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Dr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new U,Vn=new nt,Df=new U(0,0,0),Uf=new U(1,1,1),Ui=new U,Bo=new U,bn=new U,Vh=new nt,Hh=new At,Qt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ff=0,Gh=new U,Fs=new At,pi=new nt,ko=new U,wr=new U,Of=new U,Bf=new At,Wh=new U(1,0,0),Xh=new U(0,1,0),qh=new U(0,0,1),Yh={type:"added"},kf={type:"removed"},Os={type:"childadded",child:null},ac={type:"childremoved",child:null},Ft=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Qt,n=new At,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ct}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(wr,ko,this.up):pi.lookAt(ko,wr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(pi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new U,mi=new U,lc=new U,gi=new U,Bs=new U,ks=new U,jh=new U,cc=new U,hc=new U,uc=new U,dc=new St,fc=new St,pc=new St,xi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),mi.subVectors(n,t),lc.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(mi),c=Hn.dot(lc),l=mi.dot(mi),h=mi.dot(lc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(fc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),mi.subVectors(e,t),Hn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,n),ks.subVectors(r,n),cc.subVectors(e,n);let c=Bs.dot(cc),l=ks.dot(cc);if(c<=0&&l<=0)return t.copy(n);hc.subVectors(e,s);let h=Bs.dot(hc),u=ks.dot(hc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Bs,o);uc.subVectors(e,r);let f=Bs.dot(uc),g=ks.dot(uc);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ks,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(jh,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Bs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Qc(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mc(o,r,e+1/3),this.g=mc(o,r,e),this.b=mc(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return mt.workingToColorSpace(sn.copy(this),e),Math.round(pt(sn.r*255,0,255))*65536+Math.round(pt(sn.g*255,0,255))*256+Math.round(pt(sn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Mt){mt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(zo);let n=Ir(Fi.h,zo.h,t),s=Ir(Fi.s,zo.s,t),r=Ir(Fi.l,zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Xe;Xe.NAMES=ld;var zf=0,dn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=ss,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qn=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new U,Vo=new $e,Vf=0,$t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}};var Or=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Br=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hf=0,Ln=new nt,gc=new Ft,zs=new U,Mn=new En,Tr=new En,Zt=new U,Ot=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?Br:Or)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Mn.min,Tr.min),Mn.expandByPoint(Zt),Zt.addVectors(Mn.max,Tr.max),Mn.expandByPoint(Zt)):(Mn.expandByPoint(Tr.min),Mn.expandByPoint(Tr.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Zt.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),Zt.add(zs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new U,c[F]=new U;let l=new U,h=new U,u=new U,d=new $e,f=new $e,g=new $e,_=new U,m=new U;function p(F,v,S){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[F].add(_),a[v].add(_),a[S].add(_),c[F].add(m),c[v].add(m),c[S].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,v=C.length;F<v;++F){let S=C[F],N=S.start,B=S.count;for(let W=N,Z=N+B;W<Z;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let P=new U,E=new U,R=new U,I=new U;function D(F){R.fromBufferAttribute(s,F),I.copy(R);let v=a[F];P.copy(v),P.sub(R.multiplyScalar(R.dot(v))).normalize(),E.crossVectors(I,v);let N=E.dot(c[F])<0?-1:1;o.setXYZW(F,P.x,P.y,P.z,N)}for(let F=0,v=C.length;F<v;++F){let S=C[F],N=S.start,B=S.count;for(let W=N,Z=N+B;W<Z;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new $t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new nt,ts=new vi,Ho=new Dn,Zh=new U,Go=new U,Wo=new U,Xo=new U,_c=new U,qo=new U,$h=new U,Yo=new U,ht=class extends Ft{constructor(e=new Ot,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(_c.fromBufferAttribute(u,e),o?qo.addScaledVector(_c,h):qo.addScaledVector(_c.sub(t),h))}t.add(qo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(Ho.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ho,Zh)===null||ts.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),P=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=C,R=P;E<R;E+=3){let I=a.getX(E),D=a.getX(E+1),F=a.getX(E+2);s=jo(this,p,e,n,l,h,u,I,D,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let C=a.getX(m),P=a.getX(m+1),E=a.getX(m+2);s=jo(this,o,e,n,l,h,u,C,P,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],C=Math.max(m.start,f.start),P=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=C,R=P;E<R;E+=3){let I=E,D=E+1,F=E+2;s=jo(this,p,e,n,l,h,u,I,D,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let C=m,P=m+1,E=m+2;s=jo(this,o,e,n,l,h,u,C,P,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gf(i,e,t,n,s,r,o,a){let c;if(e.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Wn,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Yo);return l<t.near||l>t.far?null:{distance:l,point:Yo.clone(),object:i}}function jo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Go),i.getVertexPosition(c,Wo),i.getVertexPosition(l,Xo);let h=Gf(i,e,t,n,Go,Wo,Xo,$h);if(h){let u=new U;xi.getBarycoord($h,Go,Wo,Xo,u),s&&(h.uv=xi.getInterpolatedAttribute(s,a,c,l,u,new $e)),r&&(h.uv1=xi.getInterpolatedAttribute(r,a,c,l,u,new $e)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};xi.getNormal(Go,Wo,Xo,d.normal),h.face=d,h.barycoord=u}return h}var wn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,p,C,P,E,R,I,D,F,v){let S=E/D,N=R/F,B=E/2,W=R/2,Z=I/2,K=D+1,k=F+1,ne=0,X=0,se=new U;for(let fe=0;fe<k;fe++){let me=fe*N-W;for(let Pe=0;Pe<K;Pe++){let Ae=Pe*S-B;se[_]=Ae*C,se[m]=me*P,se[p]=Z,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=I>0?1:-1,h.push(se.x,se.y,se.z),u.push(Pe/D),u.push(1-fe/F),ne+=1}}for(let fe=0;fe<F;fe++)for(let me=0;me<D;me++){let Pe=d+me+K*fe,Ae=d+me+K*(fe+1),Te=d+(me+1)+K*(fe+1),xe=d+(me+1)+K*fe;c.push(Pe,Ae,xe),c.push(Ae,Te,xe),X+=6}a.addGroup(f,X,v),f+=X,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=Ms(i[t]);for(let s in n)e[s]=n[s]}return e}function Wf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var cd={clone:Ms,merge:an},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},kr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new U,Kh=new $e,Qh=new $e,Vt=class extends kr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,Qh),t.subVectors(Qh,Kh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Hs=1,ma=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Vs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Vs,Hs,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Vs,Hs,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Vs,Hs,e,t);a.layers=this.layers,this.add(a);let c=new Vt(Vs,Hs,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Vs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zr=class extends on{constructor(e=[],t=vs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Ti});r.uniforms.tEquirect.value=t;let o=new ht(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=gn),new ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},rn=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yf={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ls=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Vr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bi=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var eu=new U,tu=new St,nu=new St,jf=new U,iu=new nt,Jo=new U,xc=new Dn,su=new nt,yc=new vi,Hr=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tc,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(s),e.ray.intersectsSphere(xc)!==!1&&(su.copy(s).invert(),yc.copy(e.ray).applyMatrix4(su),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;tu.fromBufferAttribute(s.attributes.skinIndex,e),nu.fromBufferAttribute(s.attributes.skinWeight,e),eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=nu.getComponent(r);if(o!==0){let a=tu.getComponent(r);iu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jf.copy(eu).applyMatrix4(iu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},er=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},tr=class extends on{constructor(e=null,t=1,n=1,s,r,o,a,c,l=_n,h=_n,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ru=new nt,Jf=new nt,Gr=class i{constructor(e=[],t=[]){this.uuid=Xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Jf;ru.multiplyMatrices(a,t[r]),ru.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new tr(t,e,e,Tn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new er),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Wr=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new nt,ou=new nt,Zo=[],au=new En,Zf=new nt,Ar=new ht,Cr=new Dn,Xr=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),au.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Cr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),ou.multiplyMatrices(n,Gs),Ar.matrixWorld=ou,Ar.raycast(e,Zo);for(let o=0,a=Zo.length;o<a;o++){let c=Zo[o];c.instanceId=r,c.object=this,t.push(c)}Zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(s*this.count),s,this.count,Ga,On));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vc=new U,$f=new U,Kf=new ct,Nn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vc.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kf.getNormalMatrix(e),s=this.coplanarPoint(vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new Dn,Qf=new $e(.5,.5),$o=new U,nr=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],C=r[12],P=r[13],E=r[14],R=r[15];if(s[0].setComponents(l-o,f-h,p-g,R-C).normalize(),s[1].setComponents(l+o,f+h,p+g,R+C).normalize(),s[2].setComponents(l+a,f+u,p+_,R+P).normalize(),s[3].setComponents(l-a,f-u,p-_,R-P).normalize(),n)s[4].setComponents(c,d,m,E).normalize(),s[5].setComponents(l-c,f-d,p-m,R-E).normalize();else if(s[4].setComponents(l-c,f-d,p-m,R-E).normalize(),t===Gn)s[5].setComponents(l+c,f+d,p+m,R+E).normalize();else if(t===Dr)s[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=Qf.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($o.x=s.normal.x>0?e.max.x:e.min.x,$o.y=s.normal.y>0?e.max.y:e.min.y,$o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fn=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_a=new U,xa=new U,lu=new nt,Rr=new vi,Ko=new Dn,bc=new U,cu=new U,cs=class extends Ft{constructor(e=new Ot,t=new fn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_a.fromBufferAttribute(t,s-1),xa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_a.distanceTo(xa);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;lu.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),C=h.getX(_+1),P=Qo(this,e,Rr,c,p,C,_);P&&t.push(P)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Qo(this,e,Rr,c,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=Qo(this,e,Rr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Qo(this,e,Rr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),t.distanceSqToSegment(_a,xa,bc,cu)>n)return;bc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(bc);if(!(l<e.near||l>e.far))return{distance:l,point:cu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var hu=new U,uu=new U,jn=class extends cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hu.fromBufferAttribute(t,s),uu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hu.distanceTo(uu);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Jn=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},du=new nt,Lc=new vi,ea=new Dn,ta=new U,Mi=class extends Ft{constructor(e=new Ot,t=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;du.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);ta.fromBufferAttribute(u,m),fu(ta,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ta.fromBufferAttribute(u,g),fu(ta,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fu(i,e,t,n,s,r,o){let a=Lc.distanceSqToPoint(i);if(a<t){let c=new U;Lc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qr=class extends on{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yr=class extends on{constructor(e,t,n=Wi,s,r,o,a=_n,c=_n,l,h=Js,u=1){if(h!==Js&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jr=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ki=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;C(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function C(){let E=new U,R=new U,I=0,D=(t-e)/n;for(let F=0;F<=r;F++){let v=[],S=F/r,N=S*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,Z=W*c+a,K=Math.sin(Z),k=Math.cos(Z);R.x=N*K,R.y=-S*n+m,R.z=N*k,u.push(R.x,R.y,R.z),E.set(K,D,k).normalize(),d.push(E.x,E.y,E.z),f.push(W,1-S),v.push(g++)}_.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){let S=_[v][F],N=_[v+1][F],B=_[v+1][F+1],W=_[v][F+1];(e>0||v!==0)&&(h.push(S,N,W),I+=3),(t>0||v!==r-1)&&(h.push(N,B,W),I+=3)}l.addGroup(p,I,0),p+=I}function P(E){let R=g,I=new $e,D=new U,F=0,v=E===!0?e:t,S=E===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let Z=B/s*c+a,K=Math.cos(Z),k=Math.sin(Z);D.x=v*k,D.y=m*S,D.z=v*K,u.push(D.x,D.y,D.z),d.push(0,S,0),I.x=K*.5+.5,I.y=k*.5*S+.5,f.push(I.x,I.y),g++}for(let B=0;B<s;B++){let W=R+B,Z=N+B;E===!0?h.push(Z,Z+1,W):h.push(Z+1,Z,W),F+=3}l.addGroup(p,F,E===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class i extends ki{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var na=new U,ia=new U,Mc=new U,sa=new xi,Jr=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(qs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:p}=sa;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),sa.getNormal(Mc),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let C=0;C<3;C++){let P=(C+1)%3,E=u[C],R=u[P],I=sa[h[C]],D=sa[h[P]],F=`${E}_${R}`,v=`${R}_${E}`;v in d&&d[v]?(Mc.dot(d[v].normal)<=r&&(f.push(I.x,I.y,I.z),f.push(D.x,D.y,D.z)),d[v]=null):F in d||(d[F]={index0:l[C],index1:l[P],normal:Mc.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];na.fromBufferAttribute(a,_),ia.fromBufferAttribute(a,m),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new ut(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var hs=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let C=p*d-o;for(let P=0;P<l;P++){let E=P*u-r;g.push(E,-C,0),_.push(0,0,1),m.push(P/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<a;C++){let P=C+l*p,E=C+l*(p+1),R=C+1+l*(p+1),I=C+1+l*p;f.push(P,E,I),f.push(E,R,I)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let C=[],P=p/n,E=0;p===0&&o===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){let I=R/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+P*a),u.y=e*Math.cos(o+P*a),u.z=e*Math.sin(s+I*r)*Math.sin(o+P*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+E,1-P),C.push(l++)}h.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let P=h[p][C+1],E=h[p][C],R=h[p+1][C],I=h[p+1][C+1];(p!==0||o>0)&&f.push(P,E,I),(p!==n-1||c<Math.PI)&&f.push(E,R,I)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kt=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zr=class extends Kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Un=class extends dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var us=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ra(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function pu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function hd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ma=class extends ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,a=2*t-n;break;case Rc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cc:o=e,c=2*n-t;break;case Rc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,C=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,P=(-1-f)*m+(1.5+f)*_+.5*g,E=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+C*o[l+R]+P*o[c+R]+E*o[u+R];return r}},Sa=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ea=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ma(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ep(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===aa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=ua;var Si=class extends xn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Lr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="color";var fs=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};fs.prototype.ValueTypeName="number";var wa=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)At.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ei=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends xn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Lr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};ni.prototype.ValueTypeName="vector";var ir=class{constructor(e="",t=-1,n=[],s=Ju){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ip(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=tp(c);c=pu(c,1,h),l=pu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new fs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];hd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let C=0;C!==d[g].morphTargets.length;++C){let P=d[g];m.push(P.time),p.push(P.morphTarget===_?1:0)}s.push(new fs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(ni,f+".position",d,"pos",s),n(Ei,f+".quaternion",d,"rot",s),n(ni,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function np(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return $r;case"quaternion":return Ei;case"bool":case"boolean":return Si;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ip(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=np(i.type);if(i.times===void 0){let t=[],n=[];hd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var js={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},sr=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bl=new sr,pn=class{constructor(e){this.manager=e!==void 0?e:bl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},Nc=class extends Error{constructor(e,t){super(e),this.response=t}},ii=class extends pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=js.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){C();function C(){u.read().then(({done:P,value:E})=>{if(P)p.close();else{_+=E.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let I=0,D=h.length;I<D;I++){let F=h[I];F.onProgress&&F.onProgress(R)}p.enqueue(E),C()}},P=>{p.error(P)})}}});return new Response(m)}else throw new Nc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{js.add(`file:${e}`,l);let h=_i[e];delete _i[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ws=new WeakMap,Ta=class extends pn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=js.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ws.get(o);u===void 0&&(u=[],Ws.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Zs("img");function c(){h(),t&&t(this);let u=Ws.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ws.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),js.remove(`image:${e}`);let d=Ws.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),js.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Kr=class extends pn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new tr,a=new ii(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Sn,o.wrapT=l.wrapT!==void 0?l.wrapT:Sn,o.magFilter=l.magFilter!==void 0?l.magFilter:gn,o.minFilter=l.minFilter!==void 0?l.minFilter:gn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Zn),l.mipmapCount===1&&(o.minFilter=gn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},ps=class extends pn{constructor(e){super(e)}load(e,t,n,s){let r=new on,o=new Ta(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ms=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Sc=new nt,mu=new U,gu=new U,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dc=class extends Qr{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=as*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},eo=class extends ms{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_u=new nt,Pr=new U,Ec=new U,Uc=class extends Qr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pr),Ec.copy(n.position),Ec.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ec),n.updateMatrixWorld(),s.makeTranslation(-Pr.x,-Pr.y,-Pr.z),_u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u,n.coordinateSystem,n.reversedDepth)}},gs=class extends ms{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_s=class extends kr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fc=class extends Qr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xs=class extends ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ys=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Aa=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nh="\\[\\]\\.:\\/",sp=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",rp="[^"+nh.replace("\\.","")+"]",op=/((?:WC+[\/:])*)/.source.replace("WC",ih),ap=/(WCOD+)?/.source.replace("WCOD",rp),lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),hp=new RegExp("^"+op+ap+lp+cp+"$"),up=["material","materials","bones","map"],Oc=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sp,"")}static parseTrackName(e){let t=hp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Oc;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _x=new Float32Array(1);var rr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var to=class extends jn{constructor(e=10,t=10,n=4473924,s=8947848){n=new Xe(n),s=new Xe(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}let h=new Ot;h.setAttribute("position",new ut(c,3)),h.setAttribute("color",new ut(l,3));let u=new fn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var xu=new U,oa,wc,no=class extends Ft{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",oa===void 0&&(oa=new Ot,oa.setAttribute("position",new ut([0,0,0,0,1,0],3)),wc=new ya(.5,1,5,1),wc.translate(0,-.5,0)),this.position.copy(t),this.line=new cs(oa,new fn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ht(wc,new qn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{xu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(xu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var io=class extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sh(i,e,t,n){let s=dp(n);switch(t){case jc:return i*e;case Ga:return i*e/s.components*s.byteLength;case Wa:return i*e/s.components*s.byteLength;case Zc:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case Jc:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case qa:return i*e*4/s.components*s.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:case Za:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _l:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dp(i){switch(i){case $n:case Wc:return{byteLength:1,components:1};case or:case Xc:case ar:return{byteLength:2,components:1};case Va:case Ha:return{byteLength:2,components:4};case Wi:case za:case On:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Dd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pp(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
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
#endif`,_p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:_p,alphamap_pars_fragment:xp,alphatest_fragment:yp,alphatest_pars_fragment:vp,aomap_fragment:bp,aomap_pars_fragment:Mp,batching_pars_vertex:Sp,batching_vertex:Ep,begin_vertex:wp,beginnormal_vertex:Tp,bsdfs:Ap,iridescence_fragment:Cp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Np,color_fragment:Dp,color_pars_fragment:Up,color_pars_vertex:Fp,color_vertex:Op,common:Bp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:zp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Hp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Jp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:am,envmap_vertex:$p,fog_vertex:Kp,fog_pars_vertex:Qp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:om,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:dm,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:vm,map_fragment:bm,map_pars_fragment:Mm,map_particle_fragment:Sm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Am,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Nm,normal_pars_fragment:Dm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Vm,opaque_fragment:Hm,packing:Gm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:$m,shadowmap_vertex:Km,shadowmask_pars_fragment:Qm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:xg,cube_frag:yg,depth_vert:vg,depth_frag:bg,distanceRGBA_vert:Mg,distanceRGBA_frag:Sg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Tg,linedashed_frag:Ag,meshbasic_vert:Cg,meshbasic_frag:Rg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Ng,meshnormal_vert:Dg,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:kg,meshtoon_vert:zg,meshtoon_frag:Vg,points_vert:Hg,points_frag:Gg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},Me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ri={basic:{uniforms:an([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:an([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:an([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:an([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:an([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:an([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:an([Me.points,Me.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:an([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:an([Me.common,Me.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:an([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:an([Me.sprite,Me.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:an([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:an([Me.lights,Me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ri.physical={uniforms:an([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Ml={r:0,b:0,g:0},Ss=new Qt,jg=new nt;function Jg(i,e,t,n,s,r,o){let a=new Xe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(P){let E=P.isScene===!0?P.background:null;return E&&E.isTexture&&(E=(P.backgroundBlurriness>0?t:e).get(E)),E}function _(P){let E=!1,R=g(P);R===null?p(a,c):R&&R.isColor&&(p(R,1),E=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(P,E){let R=g(E);R&&(R.isCubeTexture||R.mapping===ro)?(h===void 0&&(h=new ht(new wn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ms(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ss.copy(E.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Ss)),h.material.toneMapped=mt.getTransfer(R.colorSpace)!==Tt,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new ht(new hs(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ms(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=mt.getTransfer(R.colorSpace)!==Tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null))}function p(P,E){P.getRGB(Ml,th(i)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,E,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(P,E=1){a.set(P),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,p(a,c)},render:_,addToRenderList:m,dispose:C}}function Zg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,N,B,W,Z){let K=!1,k=u(W,B,N);r!==k&&(r=k,l(r.object)),K=f(S,W,B,Z),K&&g(S,W,B,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(S,N,B,W),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,N,B){let W=B.wireframe===!0,Z=n[S.id];Z===void 0&&(Z={},n[S.id]=Z);let K=Z[N.id];K===void 0&&(K={},Z[N.id]=K);let k=K[W];return k===void 0&&(k=d(c()),K[W]=k),k}function d(S){let N=[],B=[],W=[];for(let Z=0;Z<t;Z++)N[Z]=0,B[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,N,B,W){let Z=r.attributes,K=N.attributes,k=0,ne=B.getAttributes();for(let X in ne)if(ne[X].location>=0){let fe=Z[X],me=K[X];if(me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;k++}return r.attributesNum!==k||r.index!==W}function g(S,N,B,W){let Z={},K=N.attributes,k=0,ne=B.getAttributes();for(let X in ne)if(ne[X].location>=0){let fe=K[X];fe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));let me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),Z[X]=me,k++}r.attributes=Z,r.attributesNum=k,r.index=W}function _(){let S=r.newAttributes;for(let N=0,B=S.length;N<B;N++)S[N]=0}function m(S){p(S,0)}function p(S,N){let B=r.newAttributes,W=r.enabledAttributes,Z=r.attributeDivisors;B[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),Z[S]!==N&&(i.vertexAttribDivisor(S,N),Z[S]=N)}function C(){let S=r.newAttributes,N=r.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==S[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function P(S,N,B,W,Z,K,k){k===!0?i.vertexAttribIPointer(S,N,B,Z,K):i.vertexAttribPointer(S,N,B,W,Z,K)}function E(S,N,B,W){_();let Z=W.attributes,K=B.getAttributes(),k=N.defaultAttributeValues;for(let ne in K){let X=K[ne];if(X.location>=0){let se=Z[ne];if(se===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){let fe=se.normalized,me=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;let Ae=Pe.buffer,Te=Pe.type,xe=Pe.bytesPerElement,V=Te===i.INT||Te===i.UNSIGNED_INT||se.gpuType===za;if(se.isInterleavedBufferAttribute){let j=se.data,pe=j.stride,He=se.offset;if(j.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)p(X.location+De,j.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let De=0;De<X.locationSize;De++)m(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let De=0;De<X.locationSize;De++)P(X.location+De,me/X.locationSize,Te,fe,pe*xe,(He+me/X.locationSize*De)*xe,V)}else{if(se.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,se.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let j=0;j<X.locationSize;j++)P(X.location+j,me/X.locationSize,Te,fe,me*xe,me/X.locationSize*j*xe,V)}}else if(k!==void 0){let fe=k[ne];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(X.location,fe);break;case 3:i.vertexAttrib3fv(X.location,fe);break;case 4:i.vertexAttrib4fv(X.location,fe);break;default:i.vertexAttrib1fv(X.location,fe)}}}}C()}function R(){F();for(let S in n){let N=n[S];for(let B in N){let W=N[B];for(let Z in W)h(W[Z].object),delete W[Z];delete N[B]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let B in N){let W=N[B];for(let Z in W)h(W[Z].object),delete W[Z];delete N[B]}delete n[S.id]}function D(S){for(let N in n){let B=n[N];if(B[S.id]===void 0)continue;let W=B[S.id];for(let Z in W)h(W[Z].object),delete W[Z];delete B[S.id]}}function F(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:C}}function $g(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Tn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==$n&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==On&&!F)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:E,vertexTextures:R,maxSamples:I}}function Qg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Nn,a=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let C=r?0:n,P=C*4,E=p.clippingState||null;c.value=E,E=h(g,d,P,f);for(let R=0;R!==P;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,E=f;P!==_;++P,E+=4)o.copy(u[P]).applyMatrix4(C,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function e_(i){let e=new WeakMap;function t(o,a){return a===Oa?o.mapping=vs:a===Ba&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Oa||a===Ba)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ga(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ur=4,ud=[.125,.215,.35,.446,.526,.582],Ts=20,rh=new _s,dd=new Xe,oh=null,ah=0,lh=0,ch=!1,ws=(1+Math.sqrt(5))/2,hr=1/ws,fd=[new U(-ws,hr,0),new U(ws,hr,0),new U(-hr,0,ws),new U(hr,0,ws),new U(0,ws,-hr),new U(0,ws,hr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],t_=new U,fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=t_}=r;oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ar,format:Tn,colorSpace:os,depthBuffer:!1},s=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,e,t)}return s}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,rh)}_sceneToCubeUV(e,t,n,s,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(dd),u.toneMapping=Ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new qn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new ht(new wn,_),p=!1,C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,p=!0):(_.color.copy(dd),p=!0);for(let P=0;P<6;P++){let E=P%3;E===0?(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[P],r.y,r.z)):E===1?(c.up.set(0,0,l[P]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[P],r.z)):(c.up.set(0,l[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[P]));let R=this._cubeSize;Sl(s,E*R,P>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vs||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Sl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);let p=[],C=0;for(let D=0;D<Ts;++D){let F=D/_,v=Math.exp(-F*F/2);p.push(v),D===0?C+=v:D<m&&(C+=2*v)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:P}=this;d.dTheta.value=g,d.mipInt.value=P-n;let E=this._sizeLods[s],R=3*E*(s>P-ur?s-P+ur:0),I=4*(this._cubeSize-E);Sl(t,R,I,3*E,2*E),c.setRenderTarget(t),c.render(u,rh)}};function n_(i){let e=[],t=[],n=[],s=i,r=i-ur+1+ud.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ur?c=ud[o-i+ur-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,C=new Float32Array(_*g*f),P=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let I=0;I<f;I++){let D=I%3*2/3-1,F=I>2?0:-1,v=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];C.set(v,_*g*I),P.set(d,m*g*I);let S=[I,I,I,I,I,I];E.set(S,p*g*I)}let R=new Ot;R.setAttribute("position",new $t(C,_)),R.setAttribute("uv",new $t(P,m)),R.setAttribute("faceIndex",new $t(E,p)),e.push(R),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pd(i,e,t){let n=new ti(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function i_(i,e,t){let n=new Float32Array(Ts),s=new U(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function md(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function gd(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function s_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Oa||c===Ba,h=c===vs||c===bs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new fr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new fr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function r_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function o_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let C=f.array;_=f.version;for(let P=0,E=C.length;P<E;P+=3){let R=C[P+0],I=C[P+1],D=C[P+2];d.push(R,I,I,D,D,R)}}else if(g!==void 0){let C=g.array;_=g.version;for(let P=0,E=C.length/3-1;P<E;P+=3){let R=P+0,I=P+1,D=P+2;d.push(R,I,I,D,D,R)}}else return;let m=new(eh(d)?Br:Or)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function a_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let C=0;C<g;C++)p+=f[C]*_[C];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function l_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c_(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],P=0;f===!0&&(P=1),g===!0&&(P=2),_===!0&&(P=3);let E=a.attributes.position.count*P,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let I=new Float32Array(E*R*4*u),D=new Ur(I,E,R,u);D.type=On,D.needsUpdate=!0;let F=P*4;for(let S=0;S<u;S++){let N=m[S],B=p[S],W=C[S],Z=E*R*4*S;for(let K=0;K<N.count;K++){let k=K*F;f===!0&&(s.fromBufferAttribute(N,K),I[Z+k+0]=s.x,I[Z+k+1]=s.y,I[Z+k+2]=s.z,I[Z+k+3]=0),g===!0&&(s.fromBufferAttribute(B,K),I[Z+k+4]=s.x,I[Z+k+5]=s.y,I[Z+k+6]=s.z,I[Z+k+7]=0),_===!0&&(s.fromBufferAttribute(W,K),I[Z+k+8]=s.x,I[Z+k+9]=s.y,I[Z+k+10]=s.z,I[Z+k+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new $e(E,R)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function h_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ud=new on,_d=new Yr(1,1),Fd=new Ur,Od=new pa,Bd=new zr,xd=[],yd=[],vd=new Float32Array(16),bd=new Float32Array(9),Md=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tl(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Yt(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),Yt(t,n)}}function __(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Yt(t,n)}}function x_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function M_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=$c,r=_d):r=Ud,t.setTexture2D(e||r,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bd,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fd,s)}function P_(i){switch(i){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return v_;case 35669:case 35673:return b_;case 5125:return M_;case 36294:return S_;case 36295:return E_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(i,e){i.uniform1fv(this.addr,e)}function L_(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function N_(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function U_(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O_(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function B_(i,e){i.uniform1iv(this.addr,e)}function k_(i,e){i.uniform2iv(this.addr,e)}function z_(i,e){i.uniform3iv(this.addr,e)}function V_(i,e){i.uniform4iv(this.addr,e)}function H_(i,e){i.uniform1uiv(this.addr,e)}function G_(i,e){i.uniform2uiv(this.addr,e)}function W_(i,e){i.uniform3uiv(this.addr,e)}function X_(i,e){i.uniform4uiv(this.addr,e)}function q_(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function Y_(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function j_(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bd,r[o])}function J_(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fd,r[o])}function Z_(i){switch(i){case 5126:return I_;case 35664:return L_;case 35665:return N_;case 35666:return D_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return k_;case 35668:case 35672:return z_;case 35669:case 35673:return V_;case 5125:return H_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return J_}}var uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P_(t.type)}},dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z_(t.type)}},fh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Sd(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let r=hh.exec(n),o=hh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sd(t,l===void 0?new uh(a,i,e):new dh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new fh(a),Sd(t,u)),t=u}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ed(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var K_=37297,Q_=0;function e0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new ct;function t0(i){mt._getMatrix(wd,mt.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Nr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+e0(i.getShaderSource(e),a)}else return r}function n0(i,e){let t=t0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i0(i,e){let t;switch(e){case Vu:t="Linear";break;case Hu:t="Reinhard";break;case Gu:t="Cineon";break;case Fa:t="ACESFilmic";break;case Xu:t="AgX";break;case qu:t="Neutral";break;case Wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var El=new U;function s0(){mt.getLuminanceCoefficients(El);let i=El.x.toFixed(4),e=El.y.toFixed(4),t=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function o0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fo(i){return i!==""}function Ad(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(l0,h0)}var c0=new Map;function h0(i,e){let t=dt[e];if(t===void 0){let n=c0.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}var u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(u0,d0)}function d0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function f0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function p0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case bs:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function g0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:e="ENVMAP_BLENDING_MULTIPLY";break;case ku:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function _0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function x0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=f0(t),l=p0(t),h=m0(t),u=g0(t),d=_0(t),f=r0(t),g=o0(r),_=s.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,n0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=ph(o),o=Ad(o,t),o=Cd(o,t),a=ph(a),a=Ad(a,t),a=Cd(a,t),o=Rd(o),a=Rd(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let P=C+m+o,E=C+p+a,R=Ed(s,s.VERTEX_SHADER,P),I=Ed(s,s.FRAGMENT_SHADER,E);s.attachShader(_,R),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(N){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(R)||"",Z=s.getShaderInfoLog(I)||"",K=B.trim(),k=W.trim(),ne=Z.trim(),X=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,I);else{let fe=Td(s,R,"vertex"),me=Td(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+fe+`
`+me)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(k===""||ne==="")&&(se=!1);se&&(N.diagnostics={runnable:X,programLog:K,vertexShader:{log:k,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(R),s.deleteShader(I),F=new dr(s,_),v=a0(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,K_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=I,this}var y0=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gh(e),t.set(e,n)),n}},gh=class{constructor(e){this.id=y0++,this.code=e,this.usedTimes=0}};function v0(i,e,t,n,s,r,o){let a=new Fr,c=new mh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,N,B,W){let Z=B.fog,K=W.geometry,k=v.isMeshStandardMaterial?B.environment:null,ne=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),X=ne&&ne.mapping===ro?ne.image.height:null,se=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,me=fe!==void 0?fe.length:0,Pe=0;K.morphAttributes.position!==void 0&&(Pe=1),K.morphAttributes.normal!==void 0&&(Pe=2),K.morphAttributes.color!==void 0&&(Pe=3);let Ae,Te,xe,V;if(se){let lt=ri[se];Ae=lt.vertexShader,Te=lt.fragmentShader}else Ae=v.vertexShader,Te=v.fragmentShader,c.update(v),xe=c.getVertexShaderID(v),V=c.getFragmentShaderID(v);let j=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),He=W.isInstancedMesh===!0,De=W.isBatchedMesh===!0,gt=!!v.map,Jt=!!v.matcap,O=!!ne,It=!!v.aoMap,rt=!!v.lightMap,Ke=!!v.bumpMap,Ue=!!v.normalMap,Lt=!!v.displacementMap,Oe=!!v.emissiveMap,at=!!v.metalnessMap,Ht=!!v.roughnessMap,Bt=v.anisotropy>0,L=v.clearcoat>0,b=v.dispersion>0,q=v.iridescence>0,te=v.sheen>0,oe=v.transmission>0,Q=Bt&&!!v.anisotropyMap,Ge=L&&!!v.clearcoatMap,ge=L&&!!v.clearcoatNormalMap,Be=L&&!!v.clearcoatRoughnessMap,ke=q&&!!v.iridescenceMap,ue=q&&!!v.iridescenceThicknessMap,Ee=te&&!!v.sheenColorMap,Qe=te&&!!v.sheenRoughnessMap,ze=!!v.specularMap,be=!!v.specularColorMap,ot=!!v.specularIntensityMap,z=oe&&!!v.transmissionMap,de=oe&&!!v.thicknessMap,_e=!!v.gradientMap,Ie=!!v.alphaMap,ce=v.alphaTest>0,ie=!!v.alphaHash,Fe=!!v.extensions,it=Ai;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(it=i.toneMapping);let Ct={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:Ae,fragmentShader:Te,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:De,batchingColor:De&&W._colorsTexture!==null,instancing:He,instancingColor:He&&W.instanceColor!==null,instancingMorph:He&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:os,alphaToCoverage:!!v.alphaToCoverage,map:gt,matcap:Jt,envMap:O,envMapMode:O&&ne.mapping,envMapCubeUVHeight:X,aoMap:It,lightMap:rt,bumpMap:Ke,normalMap:Ue,displacementMap:d&&Lt,emissiveMap:Oe,normalMapObjectSpace:Ue&&v.normalMapType===Ku,normalMapTangentSpace:Ue&&v.normalMapType===uo,metalnessMap:at,roughnessMap:Ht,anisotropy:Bt,anisotropyMap:Q,clearcoat:L,clearcoatMap:Ge,clearcoatNormalMap:ge,clearcoatRoughnessMap:Be,dispersion:b,iridescence:q,iridescenceMap:ke,iridescenceThicknessMap:ue,sheen:te,sheenColorMap:Ee,sheenRoughnessMap:Qe,specularMap:ze,specularColorMap:be,specularIntensityMap:ot,transmission:oe,transmissionMap:z,thicknessMap:de,gradientMap:_e,opaque:v.transparent===!1&&v.blending===ss&&v.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ce,alphaHash:ie,combine:v.combine,mapUv:gt&&_(v.map.channel),aoMapUv:It&&_(v.aoMap.channel),lightMapUv:rt&&_(v.lightMap.channel),bumpMapUv:Ke&&_(v.bumpMap.channel),normalMapUv:Ue&&_(v.normalMap.channel),displacementMapUv:Lt&&_(v.displacementMap.channel),emissiveMapUv:Oe&&_(v.emissiveMap.channel),metalnessMapUv:at&&_(v.metalnessMap.channel),roughnessMapUv:Ht&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:Ge&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&_(v.sheenRoughnessMap.channel),specularMapUv:ze&&_(v.specularMap.channel),specularColorMapUv:be&&_(v.specularColorMap.channel),specularIntensityMapUv:ot&&_(v.specularIntensityMap.channel),transmissionMapUv:z&&_(v.transmissionMap.channel),thicknessMapUv:de&&_(v.thicknessMap.channel),alphaMapUv:Ie&&_(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ue||Bt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(gt||Ie),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:gt&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&mt.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(C(S,v),P(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function C(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function P(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function E(v){let S=g[v.type],N;if(S){let B=ri[S];N=cd.clone(B.uniforms)}else N=v.uniforms;return N}function R(v,S){let N;for(let B=0,W=h.length;B<W;B++){let Z=h[B];if(Z.cacheKey===S){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new x0(i,S,v,r),h.push(N)),N}function I(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function D(v){c.remove(v)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:I,releaseShaderCache:D,programs:h,dispose:F}}function b0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function M0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ld(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||M0),n.length>1&&n.sort(d||Id),s.length>1&&s.sort(d||Id)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function S0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ld,i.set(n,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function E0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function w0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var T0=0;function A0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i){let e=new E0,t=w0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new nt,o=new nt;function a(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,C=0,P=0,E=0,R=0,I=0,D=0;l.sort(A0);for(let v=0,S=l.length;v<S;v++){let N=l[v],B=N.color,W=N.intensity,Z=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*W,u+=B.g*W,d+=B.b*W;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],W);D++}else if(N.isDirectionalLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ne=N.shadow,X=t.get(N);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=N.shadow.matrix,C++}n.directional[f]=k,f++}else if(N.isSpotLight){let k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(B).multiplyScalar(W),k.distance=Z,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[_]=k;let ne=N.shadow;if(N.map&&(n.spotLightMap[R]=N.map,R++,ne.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[_]=ne.matrix,N.castShadow){let X=t.get(N);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=K,E++}_++}else if(N.isRectAreaLight){let k=e.get(N);k.color.copy(B).multiplyScalar(W),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=k,m++}else if(N.isPointLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){let ne=N.shadow,X=t.get(N);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=N.shadow.matrix,P++}n.point[g]=k,g++}else if(N.isHemisphereLight){let k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(W),k.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==C||F.numPointShadows!==P||F.numSpotShadows!==E||F.numSpotMaps!==R||F.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=E+R-I,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=C,F.numPointShadows=P,F.numSpotShadows=E,F.numSpotMaps=R,F.numLightProbes=D,n.version=T0++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,C=l.length;p<C;p++){let P=l[p];if(P.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(P.isSpotLight){let E=n.spot[f];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(P.isRectAreaLight){let E=n.rectArea[g];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(P.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(P.width*.5,0,0),E.halfHeight.set(0,P.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(P.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(m),d++}else if(P.isHemisphereLight){let E=n.hemi[_];E.direction.setFromMatrixPosition(P.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Nd(i){let e=new C0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function R0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nd(i),e.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function L0(i,e,t){let n=new nr,s=new $e,r=new $e,o=new St,a=new va({depthPacking:$u}),c=new ba,l={},h=t.maxTextureSize,u={[Wn]:en,[en]:Wn,[Fn]:Fn},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:P0,fragmentShader:I0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let p=this.type;this.render=function(I,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let v=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=p!==si&&this.type===si,Z=p===si&&this.type!==si;for(let K=0,k=I.length;K<k;K++){let ne=I[K],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let se=X.getFrameExtents();if(s.multiply(se),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,X.mapSize.y=r.y)),X.map===null||W===!0||Z===!0){let me=this.type!==si?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new ti(s.x,s.y,me),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let fe=X.getViewportCount();for(let me=0;me<fe;me++){let Pe=X.getViewport(me);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),B.viewport(o),X.updateMatrices(ne,me),n=X.getFrustum(),E(D,F,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===si&&C(X,F),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,N)};function C(I,D){let F=e.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ti(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,F,d,_,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,F,f,_,null)}function P(I,D,F,v){let S=null,N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)S=N;else if(S=F.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let B=S.uuid,W=D.uuid,Z=l[B];Z===void 0&&(Z={},l[B]=Z);let K=Z[W];K===void 0&&(K=S.clone(),Z[W]=K,D.addEventListener("dispose",R)),S=K}if(S.visible=D.visible,S.wireframe=D.wireframe,v===si?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=F}return S}function E(I,D,F,v,S){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===si)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);let W=e.update(I),Z=I.material;if(Array.isArray(Z)){let K=W.groups;for(let k=0,ne=K.length;k<ne;k++){let X=K[k],se=Z[X.materialIndex];if(se&&se.visible){let fe=P(I,se,v,S);I.onBeforeShadow(i,I,D,F,W,fe,X),i.renderBufferDirect(F,null,W,fe,I,X),I.onAfterShadow(i,I,D,F,W,fe,X)}}}else if(Z.visible){let K=P(I,Z,v,S);I.onBeforeShadow(i,I,D,F,W,K,null),i.renderBufferDirect(F,null,W,K,I,null),I.onAfterShadow(i,I,D,F,W,K,null)}}let B=I.children;for(let W=0,Z=B.length;W<Z;W++)E(B[W],D,F,v,S)}function R(I){I.target.removeEventListener("dispose",R);for(let F in l){let v=l[F],S=I.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}var N0={[Ra]:Pa,[Ia]:Da,[La]:Ua,[rs]:Na,[Pa]:Ra,[Da]:Ia,[Ua]:La,[Na]:rs};function D0(i,e){function t(){let z=!1,de=new St,_e=null,Ie=new St(0,0,0,0);return{setMask:function(ce){_e!==ce&&!z&&(i.colorMask(ce,ce,ce,ce),_e=ce)},setLocked:function(ce){z=ce},setClear:function(ce,ie,Fe,it,Ct){Ct===!0&&(ce*=it,ie*=it,Fe*=it),de.set(ce,ie,Fe,it),Ie.equals(de)===!1&&(i.clearColor(ce,ie,Fe,it),Ie.copy(de))},reset:function(){z=!1,_e=null,Ie.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,_e=null,Ie=null,ce=null;return{setReversed:function(ie){if(de!==ie){let Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let it=ce;ce=null,this.setClear(it)}},getReversed:function(){return de},setTest:function(ie){ie?j(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(ie){_e!==ie&&!z&&(i.depthMask(ie),_e=ie)},setFunc:function(ie){if(de&&(ie=N0[ie]),Ie!==ie){switch(ie){case Ra:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=ie}},setLocked:function(ie){z=ie},setClear:function(ie){ce!==ie&&(de&&(ie=1-ie),i.clearDepth(ie),ce=ie)},reset:function(){z=!1,_e=null,Ie=null,ce=null,de=!1}}}function s(){let z=!1,de=null,_e=null,Ie=null,ce=null,ie=null,Fe=null,it=null,Ct=null;return{setTest:function(lt){z||(lt?j(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(lt){de!==lt&&!z&&(i.stencilMask(lt),de=lt)},setFunc:function(lt,Pn,In){(_e!==lt||Ie!==Pn||ce!==In)&&(i.stencilFunc(lt,Pn,In),_e=lt,Ie=Pn,ce=In)},setOp:function(lt,Pn,In){(ie!==lt||Fe!==Pn||it!==In)&&(i.stencilOp(lt,Pn,In),ie=lt,Fe=Pn,it=In)},setLocked:function(lt){z=lt},setClear:function(lt){Ct!==lt&&(i.clearStencil(lt),Ct=lt)},reset:function(){z=!1,de=null,_e=null,Ie=null,ce=null,ie=null,Fe=null,it=null,Ct=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,C=null,P=null,E=null,R=null,I=null,D=new Xe(0,0,0),F=0,v=!1,S=null,N=null,B=null,W=null,Z=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ne>=2);let se=null,fe={},me=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Ae=new St().fromArray(me),Te=new St().fromArray(Pe);function xe(z,de,_e,Ie){let ce=new Uint8Array(4),ie=i.createTexture();i.bindTexture(z,ie),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<_e;Fe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(de+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ie}let V={};V[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(rs),Ke(!1),Ue(Bc),j(i.CULL_FACE),It(Ti);function j(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function pe(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function He(z,de){return u[z]!==de?(i.bindFramebuffer(z,de),u[z]=de,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function De(z,de){let _e=f,Ie=!1;if(z){_e=d.get(de),_e===void 0&&(_e=[],d.set(de,_e));let ce=z.textures;if(_e.length!==ce.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Fe=ce.length;ie<Fe;ie++)_e[ie]=i.COLOR_ATTACHMENT0+ie;_e.length=ce.length,Ie=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(_e)}function gt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let Jt={[Bi]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};Jt[Eu]=i.MIN,Jt[wu]=i.MAX;let O={[Tu]:i.ZERO,[Au]:i.ONE,[Cu]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Lu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Uu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function It(z,de,_e,Ie,ce,ie,Fe,it,Ct,lt){if(z===Ti){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),z!==bu){if(z!==m||lt!==v){if((p!==Bi||E!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,E=Bi),lt)switch(z){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,P=null,R=null,I=null,D.set(0,0,0),F=0,m=z,v=lt}return}ce=ce||de,ie=ie||_e,Fe=Fe||Ie,(de!==p||ce!==E)&&(i.blendEquationSeparate(Jt[de],Jt[ce]),p=de,E=ce),(_e!==C||Ie!==P||ie!==R||Fe!==I)&&(i.blendFuncSeparate(O[_e],O[Ie],O[ie],O[Fe]),C=_e,P=Ie,R=ie,I=Fe),(it.equals(D)===!1||Ct!==F)&&(i.blendColor(it.r,it.g,it.b,Ct),D.copy(it),F=Ct),m=z,v=!1}function rt(z,de){z.side===Fn?pe(i.CULL_FACE):j(i.CULL_FACE);let _e=z.side===en;de&&(_e=!_e),Ke(_e),z.blending===ss&&z.transparent===!1?It(Ti):It(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ie=z.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Oe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function Ue(z){z!==yu?(j(i.CULL_FACE),z!==N&&(z===Bc?i.cullFace(i.BACK):z===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),N=z}function Lt(z){z!==B&&(k&&i.lineWidth(z),B=z)}function Oe(z,de,_e){z?(j(i.POLYGON_OFFSET_FILL),(W!==de||Z!==_e)&&(i.polygonOffset(de,_e),W=de,Z=_e)):pe(i.POLYGON_OFFSET_FILL)}function at(z){z?j(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Ht(z){z===void 0&&(z=i.TEXTURE0+K-1),se!==z&&(i.activeTexture(z),se=z)}function Bt(z,de,_e){_e===void 0&&(se===null?_e=i.TEXTURE0+K-1:_e=se);let Ie=fe[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},fe[_e]=Ie),(Ie.type!==z||Ie.texture!==de)&&(se!==_e&&(i.activeTexture(_e),se=_e),i.bindTexture(z,de||V[z]),Ie.type=z,Ie.texture=de)}function L(){let z=fe[se];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){Ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ae.copy(z))}function Qe(z){Te.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function ze(z,de){let _e=l.get(de);_e===void 0&&(_e=new WeakMap,l.set(de,_e));let Ie=_e.get(z);Ie===void 0&&(Ie=i.getUniformBlockIndex(de,z.name),_e.set(z,Ie))}function be(z,de){let Ie=l.get(de).get(z);c.get(de)!==Ie&&(i.uniformBlockBinding(de,Ie,z.__bindingPointIndex),c.set(de,Ie))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,fe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,C=null,P=null,E=null,R=null,I=null,D=new Xe(0,0,0),F=0,v=!1,S=null,N=null,B=null,W=null,Z=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:pe,bindFramebuffer:He,drawBuffers:De,useProgram:gt,setBlending:It,setMaterial:rt,setFlipSided:Ke,setCullFace:Ue,setLineWidth:Lt,setPolygonOffset:Oe,setScissorTest:at,activeTexture:Ht,bindTexture:Bt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:ke,texImage3D:ue,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:ge,texStorage3D:Be,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ge,scissor:Ee,viewport:Qe,reset:ot}}function U0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):Zs("canvas")}function _(L,b,q){let te=1,oe=Bt(L);if((oe.width>q||oe.height>q)&&(te=q/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Q=Math.floor(te*oe.width),Ge=Math.floor(te*oe.height);u===void 0&&(u=g(Q,Ge));let ge=b?g(Q,Ge):u;return ge.width=Q,ge.height=Ge,ge.getContext("2d").drawImage(L,0,0,Q,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+Ge+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(L,b,q,te,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=b;if(b===i.RED&&(q===i.FLOAT&&(Q=i.R32F),q===i.HALF_FLOAT&&(Q=i.R16F),q===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.R8UI),q===i.UNSIGNED_SHORT&&(Q=i.R16UI),q===i.UNSIGNED_INT&&(Q=i.R32UI),q===i.BYTE&&(Q=i.R8I),q===i.SHORT&&(Q=i.R16I),q===i.INT&&(Q=i.R32I)),b===i.RG&&(q===i.FLOAT&&(Q=i.RG32F),q===i.HALF_FLOAT&&(Q=i.RG16F),q===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RG8UI),q===i.UNSIGNED_SHORT&&(Q=i.RG16UI),q===i.UNSIGNED_INT&&(Q=i.RG32UI),q===i.BYTE&&(Q=i.RG8I),q===i.SHORT&&(Q=i.RG16I),q===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),q===i.UNSIGNED_INT&&(Q=i.RGB32UI),q===i.BYTE&&(Q=i.RGB8I),q===i.SHORT&&(Q=i.RGB16I),q===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),q===i.UNSIGNED_INT&&(Q=i.RGBA32UI),q===i.BYTE&&(Q=i.RGBA8I),q===i.SHORT&&(Q=i.RGBA16I),q===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){let Ge=oe?Nr:mt.getTransfer(te);q===i.FLOAT&&(Q=i.RGBA32F),q===i.HALF_FLOAT&&(Q=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Q=Ge===Tt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(L,b){let q;return L?b===null||b===Wi||b===lr?q=i.DEPTH24_STENCIL8:b===On?q=i.DEPTH32F_STENCIL8:b===or&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===lr?q=i.DEPTH_COMPONENT24:b===On?q=i.DEPTH_COMPONENT32F:b===or&&(q=i.DEPTH_COMPONENT16),q}function R(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==_n&&L.minFilter!==gn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){let b=L.target;b.removeEventListener("dispose",I),F(b),b.isVideoTexture&&h.delete(b)}function D(L){let b=L.target;b.removeEventListener("dispose",D),S(b)}function F(L){let b=n.get(L);if(b.__webglInit===void 0)return;let q=L.source,te=d.get(q);if(te){let oe=te[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&v(L),Object.keys(te).length===0&&d.delete(q)}n.remove(L)}function v(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let q=L.source,te=d.get(q);delete te[b.__cacheKey],o.memory.textures--}function S(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let oe=0;oe<b.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(b.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)i.deleteFramebuffer(b.__webglFramebuffer[te]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=L.textures;for(let te=0,oe=q.length;te<oe;te++){let Q=n.get(q[te]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[te])}n.remove(L)}let N=0;function B(){N=0}function W(){let L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function Z(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function K(L,b){let q=n.get(L);if(L.isVideoTexture&&at(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(q,L,b);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function k(L,b){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){V(q,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function ne(L,b){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){V(q,L,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function X(L,b){let q=n.get(L);if(L.version>0&&q.__version!==L.version){j(q,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let se={[Xn]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},fe={[_n]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},me={[Qu]:i.NEVER,[rd]:i.ALWAYS,[ed]:i.LESS,[$c]:i.LEQUAL,[td]:i.EQUAL,[sd]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function Pe(L,b){if(b.type===On&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gn||b.magFilter===ka||b.magFilter===oo||b.magFilter===Zn||b.minFilter===gn||b.minFilter===ka||b.minFilter===oo||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,se[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,se[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,se[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,fe[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_n||b.minFilter!==oo&&b.minFilter!==Zn||b.type===On&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));let te=b.source,oe=d.get(te);oe===void 0&&(oe={},d.set(te,oe));let Q=Z(b);if(Q!==L.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[Q].usedTimes++;let Ge=oe[L.__cacheKey];Ge!==void 0&&(oe[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&v(b)),L.__cacheKey=Q,L.__webglTexture=oe[Q].texture}return q}function Te(L,b,q){return Math.floor(Math.floor(L/q)/b)}function xe(L,b,q,te){let Q=L.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,te,b.data);else{Q.sort((ue,Ee)=>ue.start-Ee.start);let Ge=0;for(let ue=1;ue<Q.length;ue++){let Ee=Q[Ge],Qe=Q[ue],ze=Ee.start+Ee.count,be=Te(Qe.start,b.width,4),ot=Te(Ee.start,b.width,4);Qe.start<=ze+1&&be===ot&&Te(Qe.start+Qe.count-1,b.width,4)===be?Ee.count=Math.max(Ee.count,Qe.start+Qe.count-Ee.start):(++Ge,Q[Ge]=Qe)}Q.length=Ge+1;let ge=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ue=0,Ee=Q.length;ue<Ee;ue++){let Qe=Q[ue],ze=Math.floor(Qe.start/4),be=Math.ceil(Qe.count/4),ot=ze%b.width,z=Math.floor(ze/b.width),de=be,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,ot,z,de,_e,q,te,b.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function V(L,b,q){let te=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=i.TEXTURE_3D);let oe=Ae(L,b),Q=b.source;t.bindTexture(te,L.__webglTexture,i.TEXTURE0+q);let Ge=n.get(Q);if(Q.version!==Ge.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let ge=mt.getPrimaries(mt.workingColorSpace),Be=b.colorSpace===Ci?null:mt.getPrimaries(b.colorSpace),ke=b.colorSpace===Ci||ge===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=_(b.image,!1,s.maxTextureSize);ue=Ht(b,ue);let Ee=r.convert(b.format,b.colorSpace),Qe=r.convert(b.type),ze=P(b.internalFormat,Ee,Qe,b.colorSpace,b.isVideoTexture);Pe(te,b);let be,ot=b.mipmaps,z=b.isVideoTexture!==!0,de=Ge.__version===void 0||oe===!0,_e=Q.dataReady,Ie=R(b,ue);if(b.isDepthTexture)ze=E(b.format===cr,b.type),de&&(z?t.texStorage2D(i.TEXTURE_2D,1,ze,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ze,ue.width,ue.height,0,Ee,Qe,null));else if(b.isDataTexture)if(ot.length>0){z&&de&&t.texStorage2D(i.TEXTURE_2D,Ie,ze,ot[0].width,ot[0].height);for(let ce=0,ie=ot.length;ce<ie;ce++)be=ot[ce],z?_e&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be.width,be.height,Ee,Qe,be.data):t.texImage2D(i.TEXTURE_2D,ce,ze,be.width,be.height,0,Ee,Qe,be.data);b.generateMipmaps=!1}else z?(de&&t.texStorage2D(i.TEXTURE_2D,Ie,ze,ue.width,ue.height),_e&&xe(b,ue,Ee,Qe)):t.texImage2D(i.TEXTURE_2D,0,ze,ue.width,ue.height,0,Ee,Qe,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ze,ot[0].width,ot[0].height,ue.depth);for(let ce=0,ie=ot.length;ce<ie;ce++)if(be=ot[ce],b.format!==Tn)if(Ee!==null)if(z){if(_e)if(b.layerUpdates.size>0){let Fe=sh(be.width,be.height,b.format,b.type);for(let it of b.layerUpdates){let Ct=be.data.subarray(it*Fe/be.data.BYTES_PER_ELEMENT,(it+1)*Fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,it,be.width,be.height,1,Ee,Ct)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ue.depth,Ee,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,ze,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ue.depth,Ee,Qe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,ze,be.width,be.height,ue.depth,0,Ee,Qe,be.data)}else{z&&de&&t.texStorage2D(i.TEXTURE_2D,Ie,ze,ot[0].width,ot[0].height);for(let ce=0,ie=ot.length;ce<ie;ce++)be=ot[ce],b.format!==Tn?Ee!==null?z?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?_e&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be.width,be.height,Ee,Qe,be.data):t.texImage2D(i.TEXTURE_2D,ce,ze,be.width,be.height,0,Ee,Qe,be.data)}else if(b.isDataArrayTexture)if(z){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,ze,ue.width,ue.height,ue.depth),_e)if(b.layerUpdates.size>0){let ce=sh(ue.width,ue.height,b.format,b.type);for(let ie of b.layerUpdates){let Fe=ue.data.subarray(ie*ce/ue.data.BYTES_PER_ELEMENT,(ie+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Ee,Qe,Fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Qe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ue.width,ue.height,ue.depth,0,Ee,Qe,ue.data);else if(b.isData3DTexture)z?(de&&t.texStorage3D(i.TEXTURE_3D,Ie,ze,ue.width,ue.height,ue.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Qe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ue.width,ue.height,ue.depth,0,Ee,Qe,ue.data);else if(b.isFramebufferTexture){if(de)if(z)t.texStorage2D(i.TEXTURE_2D,Ie,ze,ue.width,ue.height);else{let ce=ue.width,ie=ue.height;for(let Fe=0;Fe<Ie;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ze,ce,ie,0,Ee,Qe,null),ce>>=1,ie>>=1}}else if(ot.length>0){if(z&&de){let ce=Bt(ot[0]);t.texStorage2D(i.TEXTURE_2D,Ie,ze,ce.width,ce.height)}for(let ce=0,ie=ot.length;ce<ie;ce++)be=ot[ce],z?_e&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ee,Qe,be):t.texImage2D(i.TEXTURE_2D,ce,ze,Ee,Qe,be);b.generateMipmaps=!1}else if(z){if(de){let ce=Bt(ue);t.texStorage2D(i.TEXTURE_2D,Ie,ze,ce.width,ce.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Qe,ue)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,Qe,ue);m(b)&&p(te),Ge.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function j(L,b,q){if(b.image.length!==6)return;let te=Ae(L,b),oe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let Q=n.get(oe);if(oe.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+q);let Ge=mt.getPrimaries(mt.workingColorSpace),ge=b.colorSpace===Ci?null:mt.getPrimaries(b.colorSpace),Be=b.colorSpace===Ci||Ge===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ke=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ie=0;ie<6;ie++)!ke&&!ue?Ee[ie]=_(b.image[ie],!0,s.maxCubemapSize):Ee[ie]=ue?b.image[ie].image:b.image[ie],Ee[ie]=Ht(b,Ee[ie]);let Qe=Ee[0],ze=r.convert(b.format,b.colorSpace),be=r.convert(b.type),ot=P(b.internalFormat,ze,be,b.colorSpace),z=b.isVideoTexture!==!0,de=Q.__version===void 0||te===!0,_e=oe.dataReady,Ie=R(b,Qe);Pe(i.TEXTURE_CUBE_MAP,b);let ce;if(ke){z&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ot,Qe.width,Qe.height);for(let ie=0;ie<6;ie++){ce=Ee[ie].mipmaps;for(let Fe=0;Fe<ce.length;Fe++){let it=ce[Fe];b.format!==Tn?ze!==null?z?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,it.width,it.height,ze,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,ot,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,it.width,it.height,ze,be,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,ot,it.width,it.height,0,ze,be,it.data)}}}else{if(ce=b.mipmaps,z&&de){ce.length>0&&Ie++;let ie=Bt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ot,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee[ie].width,Ee[ie].height,ze,be,Ee[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ot,Ee[ie].width,Ee[ie].height,0,ze,be,Ee[ie].data);for(let Fe=0;Fe<ce.length;Fe++){let Ct=ce[Fe].image[ie].image;z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Ct.width,Ct.height,ze,be,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,ot,Ct.width,Ct.height,0,ze,be,Ct.data)}}else{z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ze,be,Ee[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ot,ze,be,Ee[ie]);for(let Fe=0;Fe<ce.length;Fe++){let it=ce[Fe];z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,ze,be,it.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,ot,ze,be,it.image[ie])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Q.__version=oe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pe(L,b,q,te,oe,Q){let Ge=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Be=P(q.internalFormat,Ge,ge,q.colorSpace),ke=n.get(b),ue=n.get(q);if(ue.__renderTarget=b,!ke.__hasExternalTextures){let Ee=Math.max(1,b.width>>Q),Qe=Math.max(1,b.height>>Q);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,Be,Ee,Qe,b.depth,0,Ge,ge,null):t.texImage2D(oe,Q,Be,Ee,Qe,0,Ge,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,oe,ue.__webglTexture,0,Lt(b)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,oe,ue.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(L,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let te=b.depthTexture,oe=te&&te.isDepthTexture?te.type:null,Q=E(b.stencilBuffer,oe),Ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Lt(b);Oe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Q,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,L)}else{let te=b.textures;for(let oe=0;oe<te.length;oe++){let Q=te[oe],Ge=r.convert(Q.format,Q.colorSpace),ge=r.convert(Q.type),Be=P(Q.internalFormat,Ge,ge,Q.colorSpace),ke=Lt(b);q&&Oe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Be,b.width,b.height):Oe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Be,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);let oe=te.__webglTexture,Q=Lt(b);if(b.depthTexture.format===Js)Oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(b.depthTexture.format===cr)Oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function gt(L){let b=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let te=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){let oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=te}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let te=L.texture.mipmaps;te&&te.length>0?De(b.__webglFramebuffer[0],L):De(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=i.createRenderbuffer(),He(b.__webglDepthbuffer[te],L,!1);else{let oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Q)}}else{let te=L.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),He(b.__webglDepthbuffer,L,!1);else{let oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(L,b,q){let te=n.get(L);b!==void 0&&pe(te.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&gt(L)}function O(L){let b=L.texture,q=n.get(L),te=n.get(b);L.addEventListener("dispose",D);let oe=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Ge=oe.length>1;if(Ge||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=b.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Be=0;Be<b.mipmaps.length;Be++)q.__webglFramebuffer[ge][Be]=i.createFramebuffer()}else q.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)q.__webglFramebuffer[ge]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let ge=0,Be=oe.length;ge<Be;ge++){let ke=n.get(oe[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Oe(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){let Be=oe[ge];q.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);let ke=r.convert(Be.format,Be.colorSpace),ue=r.convert(Be.type),Ee=P(Be.internalFormat,ke,ue,Be.colorSpace,L.isXRRenderTarget===!0),Qe=Lt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),He(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)pe(q.__webglFramebuffer[ge][Be],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be);else pe(q.__webglFramebuffer[ge],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let ge=0,Be=oe.length;ge<Be;ge++){let ke=oe[ge],ue=n.get(ke),Ee=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ue.__webglTexture),Pe(Ee,ke),pe(q.__webglFramebuffer,L,ke,i.COLOR_ATTACHMENT0+ge,Ee,0),m(ke)&&p(Ee)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),Pe(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)pe(q.__webglFramebuffer[Be],L,b,i.COLOR_ATTACHMENT0,ge,Be);else pe(q.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,ge,0);m(b)&&p(ge),t.unbindTexture()}L.depthBuffer&&gt(L)}function It(L){let b=L.textures;for(let q=0,te=b.length;q<te;q++){let oe=b[q];if(m(oe)){let Q=C(L),Ge=n.get(oe).__webglTexture;t.bindTexture(Q,Ge),p(Q),t.unbindTexture()}}}let rt=[],Ke=[];function Ue(L){if(L.samples>0){if(Oe(L)===!1){let b=L.textures,q=L.width,te=L.height,oe=i.COLOR_BUFFER_BIT,Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(L),ge=b.length>1;if(ge)for(let ke=0;ke<b.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let Be=L.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);let ue=n.get(b[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,q,te,0,0,q,te,oe,i.NEAREST),c===!0&&(rt.length=0,Ke.length=0,rt.push(i.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(rt.push(Q),Ke.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ke=0;ke<b.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ke]);let ue=n.get(b[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Lt(L){return Math.min(s.maxSamples,L.samples)}function Oe(L){let b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(L){let b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function Ht(L,b){let q=L.colorSpace,te=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==os&&q!==Ci&&(mt.getTransfer(q)===Tt?(te!==Tn||oe!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=ne,this.setTextureCube=X,this.rebindTextures=Jt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Oe}function F0(i,e){function t(n,s=Ci){let r,o=mt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===Tn)return i.RGBA;if(n===Js)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===Ga)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Zc)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===ja||n===Ja||n===Za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===xl||n===yl||n===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yn({vertexShader:O0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new _h,p={},C=t.getContextAttributes(),P=null,E=null,R=[],I=[],D=new $e,F=null,v=new Vt;v.viewport=new St;let S=new Vt;S.viewport=new St;let N=[v,S],B=new Aa,W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=R[V];return j===void 0&&(j=new Qs,R[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=R[V];return j===void 0&&(j=new Qs,R[V]=j),j.getGripSpace()},this.getHand=function(V){let j=R[V];return j===void 0&&(j=new Qs,R[V]=j),j.getHandSpace()};function K(V){let j=I.indexOf(V.inputSource);if(j===-1)return;let pe=R[j];pe!==void 0&&(pe.update(V.inputSource,V.frame,l||o),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ne);for(let V=0;V<R.length;V++){let j=I[V];j!==null&&(I[V]=null,R[V].disconnect(j))}W=null,Z=null,m.reset();for(let V in p)delete p[V];e.setRenderTarget(P),f=null,d=null,u=null,s=null,E=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ne),C.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,He=null,De=null;C.depth&&(De=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=C.stencil?cr:Js,He=C.stencil?lr:Wi);let gt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ti(d.textureWidth,d.textureHeight,{format:Tn,type:$n,depthTexture:new Yr(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ti(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(V){for(let j=0;j<V.removed.length;j++){let pe=V.removed[j],He=I.indexOf(pe);He>=0&&(I[He]=null,R[He].disconnect(pe))}for(let j=0;j<V.added.length;j++){let pe=V.added[j],He=I.indexOf(pe);if(He===-1){for(let gt=0;gt<R.length;gt++)if(gt>=I.length){I.push(pe),He=gt;break}else if(I[gt]===null){I[gt]=pe,He=gt;break}if(He===-1)break}let De=R[He];De&&De.connect(pe)}}let X=new U,se=new U;function fe(V,j,pe){X.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);let He=X.distanceTo(se),De=j.projectionMatrix.elements,gt=pe.projectionMatrix.elements,Jt=De[14]/(De[10]-1),O=De[14]/(De[10]+1),It=(De[9]+1)/De[5],rt=(De[9]-1)/De[5],Ke=(De[8]-1)/De[0],Ue=(gt[8]+1)/gt[0],Lt=Jt*Ke,Oe=Jt*Ue,at=He/(-Ke+Ue),Ht=at*-Ke;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ht),V.translateZ(at),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),De[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Bt=Jt+at,L=O+at,b=Lt-Ht,q=Oe+(He-Ht),te=It*O/L*Bt,oe=rt*O/L*Bt;V.projectionMatrix.makePerspective(b,q,te,oe,Bt,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function me(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let j=V.near,pe=V.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),B.near=S.near=v.near=j,B.far=S.far=v.far=pe,(W!==B.near||Z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,Z=B.far),B.layers.mask=V.layers.mask|6,v.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let He=V.parent,De=B.cameras;me(B,He);for(let gt=0;gt<De.length;gt++)me(De[gt],He);De.length===2?fe(B,v,S):B.projectionMatrix.copy(v.projectionMatrix),Pe(V,B,He)};function Pe(V,j,pe){pe===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=as*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(V){return p[V]};let Ae=null;function Te(V,j){if(h=j.getViewerPose(l||o),g=j,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let He=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,He=!0);for(let O=0;O<pe.length;O++){let It=pe[O],rt=null;if(f!==null)rt=f.getViewport(It);else{let Ue=u.getViewSubImage(d,It);rt=Ue.viewport,O===0&&(e.setRenderTargetTextures(E,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(E))}let Ke=N[O];Ke===void 0&&(Ke=new Vt,Ke.layers.enable(O),Ke.viewport=new St,N[O]=Ke),Ke.matrix.fromArray(It.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(It.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(rt.x,rt.y,rt.width,rt.height),O===0&&(B.matrix.copy(Ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),He===!0&&B.cameras.push(Ke)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let O=u.getDepthInformation(pe[0]);O&&O.isValid&&O.texture&&m.init(O,s.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<pe.length;O++){let It=pe[O].camera;if(It){let rt=p[It];rt||(rt=new jr,p[It]=rt);let Ke=u.getCameraImage(It);rt.sourceTexture=Ke}}}}for(let pe=0;pe<R.length;pe++){let He=I[pe],De=R[pe];He!==null&&De!==void 0&&De.update(He,j,l||o)}Ae&&Ae(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let xe=new Dd;xe.setAnimationLoop(Te),this.setAnimationLoop=function(V){Ae=V},this.dispose=function(){}}},Es=new Qt,k0=new nt;function z0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,P,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,C,P):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),P=C.envMap,E=C.envMapRotation;P&&(m.envMap.value=P,Es.copy(E),Es.x*=-1,Es.y*=-1,Es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),m.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Es)),m.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,C,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,P){let E=P.program;n.uniformBlockBinding(C,E)}function l(C,P){let E=s[C.id];E===void 0&&(g(C),E=h(C),s[C.id]=E,C.addEventListener("dispose",m));let R=P.program;n.updateUBOMapping(C,R);let I=e.render.frame;r[C.id]!==I&&(d(C),r[C.id]=I)}function h(C){let P=u();C.__bindingPointIndex=P;let E=i.createBuffer(),R=C.__size,I=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,E),E}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let P=s[C.id],E=C.uniforms,R=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let I=0,D=E.length;I<D;I++){let F=Array.isArray(E[I])?E[I]:[E[I]];for(let v=0,S=F.length;v<S;v++){let N=F[v];if(f(N,I,v,R)===!0){let B=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],Z=0;for(let K=0;K<W.length;K++){let k=W[K],ne=_(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,B+Z,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,Z),Z+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,P,E,R){let I=C.value,D=P+"_"+E;if(R[D]===void 0)return typeof I=="number"||typeof I=="boolean"?R[D]=I:R[D]=I.clone(),!0;{let F=R[D];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return R[D]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function g(C){let P=C.uniforms,E=0,R=16;for(let D=0,F=P.length;D<F;D++){let v=Array.isArray(P[D])?P[D]:[P[D]];for(let S=0,N=v.length;S<N;S++){let B=v[S],W=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,K=W.length;Z<K;Z++){let k=W[Z],ne=_(k),X=E%R,se=X%ne.boundary,fe=X+se;E+=se,fe!==0&&R-fe<ne.storage&&(E+=R-fe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=ne.storage}}}let I=E%R;return I>0&&(E+=R-I),C.__size=E,C.__cache={},this}function _(C){let P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),P}function m(C){let P=C.target;P.removeEventListener("dispose",m);let E=o.indexOf(P.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function p(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var wl=class{constructor(e={}){let{canvas:t=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,C=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1;this._outputColorSpace=Mt;let I=0,D=0,F=null,v=-1,S=null,N=new St,B=new St,W=null,Z=new Xe(0),K=0,k=t.width,ne=t.height,X=1,se=null,fe=null,me=new St(0,0,k,ne),Pe=new St(0,0,k,ne),Ae=!1,Te=new nr,xe=!1,V=!1,j=new nt,pe=new U,He=new St,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Jt(){return F===null?X:1}let O=n;function It(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ce,!1),O===null){let H="webgl2";if(O=It(H,w),O===null)throw It(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let rt,Ke,Ue,Lt,Oe,at,Ht,Bt,L,b,q,te,oe,Q,Ge,ge,Be,ke,ue,Ee,Qe,ze,be,ot;function z(){rt=new r_(O),rt.init(),ze=new F0(O,rt),Ke=new Kg(O,rt,e,ze),Ue=new D0(O,rt),Ke.reversedDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),Lt=new l_(O),Oe=new b0,at=new U0(O,rt,Ue,Oe,Ke,ze,Lt),Ht=new e_(E),Bt=new s_(E),L=new pp(O),be=new Zg(O,L),b=new o_(O,L,Lt,be),q=new h_(O,b,L,Lt),ue=new c_(O,Ke,at),ge=new Qg(Oe),te=new v0(E,Ht,Bt,rt,Ke,be,ge),oe=new z0(E,Oe),Q=new S0,Ge=new R0(rt),ke=new Jg(E,Ht,Bt,Ue,q,f,c),Be=new L0(E,q,Ke),ot=new V0(O,Lt,Ke,Ue),Ee=new $g(O,rt,Lt),Qe=new a_(O,rt,Lt),Lt.programs=te.programs,E.capabilities=Ke,E.extensions=rt,E.properties=Oe,E.renderLists=Q,E.shadowMap=Be,E.state=Ue,E.info=Lt}z();let de=new xh(E,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(k,ne,!1))},this.getSize=function(w){return w.set(k,ne)},this.setSize=function(w,H,Y=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,ne=H,t.width=Math.floor(w*X),t.height=Math.floor(H*X),Y===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(k*X,ne*X).floor()},this.setDrawingBufferSize=function(w,H,Y){k=w,ne=H,X=Y,t.width=Math.floor(w*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,H,Y,J){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,H,Y,J),Ue.viewport(N.copy(me).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Pe)},this.setScissor=function(w,H,Y,J){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,H,Y,J),Ue.scissor(B.copy(Pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Ue.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){se=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,Y=!0){let J=0;if(w){let G=!1;if(F!==null){let he=F.texture.format;G=he===qa||he===Xa||he===Wa}if(G){let he=F.texture.type,Se=he===$n||he===Wi||he===or||he===lr||he===Va||he===Ha,Le=ke.getClearColor(),Ce=ke.getClearAlpha(),Ze=Le.r,et=Le.g,qe=Le.b;Se?(g[0]=Ze,g[1]=et,g[2]=qe,g[3]=Ce,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ze,_[1]=et,_[2]=qe,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}H&&(J|=O.DEPTH_BUFFER_BIT),Y&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ke.dispose(),Q.dispose(),Ge.dispose(),Oe.dispose(),Ht.dispose(),Bt.dispose(),q.dispose(),be.dispose(),ot.dispose(),te.dispose(),de.dispose(),de.removeEventListener("sessionstart",In),de.removeEventListener("sessionend",To),li.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Lt.autoReset,H=Be.enabled,Y=Be.autoUpdate,J=Be.needsUpdate,G=Be.type;z(),Lt.autoReset=w,Be.enabled=H,Be.autoUpdate=Y,Be.needsUpdate=J,Be.type=G}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){let H=w.target;H.removeEventListener("dispose",ie),Fe(H)}function Fe(w){it(w),Oe.remove(w)}function it(w){let H=Oe.get(w).programs;H!==void 0&&(H.forEach(function(Y){te.releaseProgram(Y)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Y,J,G,he){H===null&&(H=De);let Se=G.isMesh&&G.matrixWorld.determinant()<0,Le=ql(w,H,Y,J,G);Ue.setMaterial(J,Se);let Ce=Y.index,Ze=1;if(J.wireframe===!0){if(Ce=b.getWireframeAttribute(Y),Ce===void 0)return;Ze=2}let et=Y.drawRange,qe=Y.attributes.position,ft=et.start*Ze,_t=(et.start+et.count)*Ze;he!==null&&(ft=Math.max(ft,he.start*Ze),_t=Math.min(_t,(he.start+he.count)*Ze)),Ce!==null?(ft=Math.max(ft,0),_t=Math.min(_t,Ce.count)):qe!=null&&(ft=Math.max(ft,0),_t=Math.min(_t,qe.count));let kt=_t-ft;if(kt<0||kt===1/0)return;be.setup(G,J,Le,Y,Ce);let Rt,Et=Ee;if(Ce!==null&&(Rt=L.get(Ce),Et=Qe,Et.setIndex(Rt)),G.isMesh)J.wireframe===!0?(Ue.setLineWidth(J.wireframeLinewidth*Jt()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(G.isLine){let je=J.linewidth;je===void 0&&(je=1),Ue.setLineWidth(je*Jt()),G.isLineSegments?Et.setMode(O.LINES):G.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else G.isPoints?Et.setMode(O.POINTS):G.isSprite&&Et.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let je=G._multiDrawStarts,Nt=G._multiDrawCounts,xt=G._multiDrawCount,ln=Ce?L.get(Ce).bytesPerElement:1,ci=Oe.get(J).currentProgram.getUniforms();for(let yt=0;yt<xt;yt++)ci.setValue(O,"_gl_DrawID",yt),Et.render(je[yt]/ln,Nt[yt])}else if(G.isInstancedMesh)Et.renderInstances(ft,kt,G.count);else if(Y.isInstancedBufferGeometry){let je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Nt=Math.min(Y.instanceCount,je);Et.renderInstances(ft,kt,Nt)}else Et.render(ft,kt)};function Ct(w,H,Y){w.transparent===!0&&w.side===Fn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Ki(w,H,Y),w.side=Wn,w.needsUpdate=!0,Ki(w,H,Y),w.side=Fn):Ki(w,H,Y)}this.compile=function(w,H,Y=null){Y===null&&(Y=w),p=Ge.get(Y),p.init(H),P.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),w!==Y&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let J=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let he=G.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){let Le=he[Se];Ct(Le,Y,G),J.add(Le)}else Ct(he,Y,G),J.add(he)}),p=P.pop(),J},this.compileAsync=function(w,H,Y=null){let J=this.compile(w,H,Y);return new Promise(G=>{function he(){if(J.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){G(w);return}setTimeout(he,10)}rt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let lt=null;function Pn(w){lt&&lt(w)}function In(){li.stop()}function To(){li.start()}let li=new Dd;li.setAnimationLoop(Pn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(w){lt=w,de.setAnimationLoop(w),w===null?li.stop():li.start()},de.addEventListener("sessionstart",In),de.addEventListener("sessionend",To),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,H,F),p=Ge.get(w,P.length),p.init(H),P.push(p),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Te.setFromProjectionMatrix(j,Gn,H.reversedDepth),V=this.localClippingEnabled,xe=ge.init(this.clippingPlanes,V),m=Q.get(w,C.length),m.init(),C.push(m),de.enabled===!0&&de.isPresenting===!0){let he=E.xr.getDepthSensingMesh();he!==null&&Mr(he,H,-1/0,E.sortObjects)}Mr(w,H,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,fe),gt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,gt&&ke.addToRenderList(m,w),this.info.render.frame++,xe===!0&&ge.beginShadows();let Y=p.state.shadowsArray;Be.render(Y,w,H),xe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){let he=H.cameras;if(G.length>0)for(let Se=0,Le=he.length;Se<Le;Se++){let Ce=he[Se];Co(J,G,w,Ce)}gt&&ke.render(w);for(let Se=0,Le=he.length;Se<Le;Se++){let Ce=he[Se];Ao(m,w,Ce,Ce.viewport)}}else G.length>0&&Co(J,G,w,H),gt&&ke.render(w),Ao(m,w,H);F!==null&&D===0&&(at.updateMultisampleRenderTarget(F),at.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(E,w,H),be.resetDefaultState(),v=-1,S=null,P.pop(),P.length>0?(p=P[P.length-1],xe===!0&&ge.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Mr(w,H,Y,J){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Te.intersectsSprite(w)){J&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);let Se=q.update(w),Le=w.material;Le.visible&&m.push(w,Se,Le,Y,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Te.intersectsObject(w))){let Se=q.update(w),Le=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),He.copy(Se.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(Le)){let Ce=Se.groups;for(let Ze=0,et=Ce.length;Ze<et;Ze++){let qe=Ce[Ze],ft=Le[qe.materialIndex];ft&&ft.visible&&m.push(w,Se,ft,Y,He.z,qe)}}else Le.visible&&m.push(w,Se,Le,Y,He.z,null)}}let he=w.children;for(let Se=0,Le=he.length;Se<Le;Se++)Mr(he[Se],H,Y,J)}function Ao(w,H,Y,J){let G=w.opaque,he=w.transmissive,Se=w.transparent;p.setupLightsView(Y),xe===!0&&ge.setGlobalState(E.clippingPlanes,Y),J&&Ue.viewport(N.copy(J)),G.length>0&&$i(G,H,Y),he.length>0&&$i(he,H,Y),Se.length>0&&$i(Se,H,Y),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Co(w,H,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new ti(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?ar:$n,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let he=p.state.transmissionRenderTarget[J.id],Se=J.viewport||N;he.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);let Le=E.getRenderTarget(),Ce=E.getActiveCubeFace(),Ze=E.getActiveMipmapLevel();E.setRenderTarget(he),E.getClearColor(Z),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),gt&&ke.render(Y);let et=E.toneMapping;E.toneMapping=Ai;let qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),xe===!0&&ge.setGlobalState(E.clippingPlanes,J),$i(w,Y,J),at.updateMultisampleRenderTarget(he),at.updateRenderTargetMipmap(he),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let _t=0,kt=H.length;_t<kt;_t++){let Rt=H[_t],Et=Rt.object,je=Rt.geometry,Nt=Rt.material,xt=Rt.group;if(Nt.side===Fn&&Et.layers.test(J.layers)){let ln=Nt.side;Nt.side=en,Nt.needsUpdate=!0,Ro(Et,Y,J,je,Nt,xt),Nt.side=ln,Nt.needsUpdate=!0,ft=!0}}ft===!0&&(at.updateMultisampleRenderTarget(he),at.updateRenderTargetMipmap(he))}E.setRenderTarget(Le,Ce,Ze),E.setClearColor(Z,K),qe!==void 0&&(J.viewport=qe),E.toneMapping=et}function $i(w,H,Y){let J=H.isScene===!0?H.overrideMaterial:null;for(let G=0,he=w.length;G<he;G++){let Se=w[G],Le=Se.object,Ce=Se.geometry,Ze=Se.group,et=Se.material;et.allowOverride===!0&&J!==null&&(et=J),Le.layers.test(Y.layers)&&Ro(Le,H,Y,Ce,et,Ze)}}function Ro(w,H,Y,J,G,he){w.onBeforeRender(E,H,Y,J,G,he),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(E,H,Y,J,w,he),G.transparent===!0&&G.side===Fn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,E.renderBufferDirect(Y,H,J,G,w,he),G.side=Wn,G.needsUpdate=!0,E.renderBufferDirect(Y,H,J,G,w,he),G.side=Fn):E.renderBufferDirect(Y,H,J,G,w,he),w.onAfterRender(E,H,Y,J,G,he)}function Ki(w,H,Y){H.isScene!==!0&&(H=De);let J=Oe.get(w),G=p.state.lights,he=p.state.shadowsArray,Se=G.state.version,Le=te.getParameters(w,G.state,he,H,Y),Ce=te.getProgramCacheKey(Le),Ze=J.programs;J.environment=w.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(w.isMeshStandardMaterial?Bt:Ht).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",ie),Ze=new Map,J.programs=Ze);let et=Ze.get(Ce);if(et!==void 0){if(J.currentProgram===et&&J.lightsStateVersion===Se)return Io(w,Le),et}else Le.uniforms=te.getUniforms(w),w.onBeforeCompile(Le,E),et=te.acquireProgram(Le,Ce),Ze.set(Ce,et),J.uniforms=Le.uniforms;let qe=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=ge.uniform),Io(w,Le),J.needsLights=jl(w),J.lightsStateVersion=Se,J.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=et,J.uniformsList=null,et}function Po(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=dr.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Io(w,H){let Y=Oe.get(w);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function ql(w,H,Y,J,G){H.isScene!==!0&&(H=De),at.resetTextureUnits();let he=H.fog,Se=J.isMeshStandardMaterial?H.environment:null,Le=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:os,Ce=(J.isMeshStandardMaterial?Bt:Ht).get(J.envMap||Se),Ze=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qe=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color,kt=Ai;J.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(kt=E.toneMapping);let Rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=Rt!==void 0?Rt.length:0,je=Oe.get(J),Nt=p.state.lights;if(xe===!0&&(V===!0||w!==S)){let Wt=w===S&&J.id===v;ge.setState(J,w,Wt)}let xt=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Nt.state.version||je.outputColorSpace!==Le||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isBatchedMesh&&je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&je.instancingMorph===!1&&G.morphTexture!==null||je.envMap!==Ce||J.fog===!0&&je.fog!==he||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ge.numPlanes||je.numIntersection!==ge.numIntersection)||je.vertexAlphas!==Ze||je.vertexTangents!==et||je.morphTargets!==qe||je.morphNormals!==ft||je.morphColors!==_t||je.toneMapping!==kt||je.morphTargetsCount!==Et)&&(xt=!0):(xt=!0,je.__version=J.version);let ln=je.currentProgram;xt===!0&&(ln=Ki(J,H,G));let ci=!1,yt=!1,hi=!1,Dt=ln.getUniforms(),cn=je.uniforms;if(Ue.useProgram(ln.program)&&(ci=!0,yt=!0,hi=!0),J.id!==v&&(v=J.id,yt=!0),ci||S!==w){Ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Dt.setValue(O,"projectionMatrix",w.projectionMatrix),Dt.setValue(O,"viewMatrix",w.matrixWorldInverse);let Xt=Dt.map.cameraPosition;Xt!==void 0&&Xt.setValue(O,pe.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,yt=!0,hi=!0)}if(G.isSkinnedMesh){Dt.setOptional(O,G,"bindMatrix"),Dt.setOptional(O,G,"bindMatrixInverse");let Wt=G.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Dt.setValue(O,"boneTexture",Wt.boneTexture,at))}G.isBatchedMesh&&(Dt.setOptional(O,G,"batchingTexture"),Dt.setValue(O,"batchingTexture",G._matricesTexture,at),Dt.setOptional(O,G,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",G._indirectTexture,at),Dt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",G._colorsTexture,at));let hn=Y.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ue.update(G,Y,ln),(yt||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,Dt.setValue(O,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(cn.envMap.value=Ce,cn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(cn.envMapIntensity.value=H.environmentIntensity),yt&&(Dt.setValue(O,"toneMappingExposure",E.toneMappingExposure),je.needsLights&&Yl(cn,hi),he&&J.fog===!0&&oe.refreshFogUniforms(cn,he),oe.refreshMaterialUniforms(cn,J,X,ne,p.state.transmissionRenderTarget[w.id]),dr.upload(O,Po(je),cn,at)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(dr.upload(O,Po(je),cn,at),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Dt.setValue(O,"center",G.center),Dt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Dt.setValue(O,"normalMatrix",G.normalMatrix),Dt.setValue(O,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Wt=J.uniformsGroups;for(let Xt=0,Ii=Wt.length;Xt<Ii;Xt++){let Qn=Wt[Xt];ot.update(Qn,ln),ot.bind(Qn,ln)}}return ln}function Yl(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,H,Y){let J=Oe.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Oe.get(w.texture).__webglTexture=H,Oe.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Y,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let Y=Oe.get(w);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};let Jl=O.createFramebuffer();this.setRenderTarget=function(w,H=0,Y=0){F=w,I=H,D=Y;let J=!0,G=null,he=!1,Se=!1;if(w){let Ce=Oe.get(w);if(Ce.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Ce.__hasExternalTextures)at.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qe=w.depthTexture;if(Ce.__boundDepthTexture!==qe){if(qe!==null&&Oe.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}let Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Se=!0);let et=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[H])?G=et[H][Y]:G=et[H],he=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?G=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[Y]:G=et,N.copy(w.viewport),B.copy(w.scissor),W=w.scissorTest}else N.copy(me).multiplyScalar(X).floor(),B.copy(Pe).multiplyScalar(X).floor(),W=Ae;if(Y!==0&&(G=Jl),Ue.bindFramebuffer(O.FRAMEBUFFER,G)&&J&&Ue.drawBuffers(w,G),Ue.viewport(N),Ue.scissor(B),Ue.setScissorTest(W),he){let Ce=Oe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Y)}else if(Se){let Ce=H;for(let Ze=0;Ze<w.textures.length;Ze++){let et=Oe.get(w.textures[Ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ze,et.__webglTexture,Y,Ce)}}else if(w!==null&&Y!==0){let Ce=Oe.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ce.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(w,H,Y,J,G,he,Se,Le=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){Ue.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Ze=w.textures[Le],et=Ze.format,qe=Ze.type;if(!Ke.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-J&&Y>=0&&Y<=w.height-G&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(H,Y,J,G,ze.convert(et),ze.convert(qe),he))}finally{let Ze=F!==null?Oe.get(F).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,H,Y,J,G,he,Se,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(H>=0&&H<=w.width-J&&Y>=0&&Y<=w.height-G){Ue.bindFramebuffer(O.FRAMEBUFFER,Ce);let Ze=w.textures[Le],et=Ze.format,qe=Ze.type;if(!Ke.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,he.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(H,Y,J,G,ze.convert(et),ze.convert(qe),0);let _t=F!==null?Oe.get(F).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,_t);let kt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ad(O,kt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,he),O.deleteBuffer(ft),O.deleteSync(kt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,Y=0){let J=Math.pow(2,-Y),G=Math.floor(w.image.width*J),he=Math.floor(w.image.height*J),Se=H!==null?H.x:0,Le=H!==null?H.y:0;at.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Se,Le,G,he),Ue.unbindTexture()};let Zl=O.createFramebuffer(),$l=O.createFramebuffer();this.copyTextureToTexture=function(w,H,Y=null,J=null,G=0,he=null){he===null&&(G!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=G,G=0):he=0);let Se,Le,Ce,Ze,et,qe,ft,_t,kt,Rt=w.isCompressedTexture?w.mipmaps[he]:w.image;if(Y!==null)Se=Y.max.x-Y.min.x,Le=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Ze=Y.min.x,et=Y.min.y,qe=Y.isBox3?Y.min.z:0;else{let hn=Math.pow(2,-G);Se=Math.floor(Rt.width*hn),Le=Math.floor(Rt.height*hn),w.isDataArrayTexture?Ce=Rt.depth:w.isData3DTexture?Ce=Math.floor(Rt.depth*hn):Ce=1,Ze=0,et=0,qe=0}J!==null?(ft=J.x,_t=J.y,kt=J.z):(ft=0,_t=0,kt=0);let Et=ze.convert(H.format),je=ze.convert(H.type),Nt;H.isData3DTexture?(at.setTexture3D(H,0),Nt=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(at.setTexture2DArray(H,0),Nt=O.TEXTURE_2D_ARRAY):(at.setTexture2D(H,0),Nt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let xt=O.getParameter(O.UNPACK_ROW_LENGTH),ln=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ci=O.getParameter(O.UNPACK_SKIP_PIXELS),yt=O.getParameter(O.UNPACK_SKIP_ROWS),hi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);let Dt=w.isDataArrayTexture||w.isData3DTexture,cn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let hn=Oe.get(w),Wt=Oe.get(H),Xt=Oe.get(hn.__renderTarget),Ii=Oe.get(Wt.__renderTarget);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Qn=0;Qn<Ce;Qn++)Dt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(w).__webglTexture,G,qe+Qn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(H).__webglTexture,he,kt+Qn)),O.blitFramebuffer(Ze,et,Se,Le,ft,_t,Se,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||Oe.has(w)){let hn=Oe.get(w),Wt=Oe.get(H);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,Zl),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,$l);for(let Xt=0;Xt<Ce;Xt++)Dt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hn.__webglTexture,G,qe+Xt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hn.__webglTexture,G),cn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wt.__webglTexture,he,kt+Xt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wt.__webglTexture,he),G!==0?O.blitFramebuffer(Ze,et,Se,Le,ft,_t,Se,Le,O.COLOR_BUFFER_BIT,O.NEAREST):cn?O.copyTexSubImage3D(Nt,he,ft,_t,kt+Xt,Ze,et,Se,Le):O.copyTexSubImage2D(Nt,he,ft,_t,Ze,et,Se,Le);Ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else cn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Nt,he,ft,_t,kt,Se,Le,Ce,Et,je,Rt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,he,ft,_t,kt,Se,Le,Ce,Et,Rt.data):O.texSubImage3D(Nt,he,ft,_t,kt,Se,Le,Ce,Et,je,Rt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,he,ft,_t,Se,Le,Et,je,Rt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,he,ft,_t,Rt.width,Rt.height,Et,Rt.data):O.texSubImage2D(O.TEXTURE_2D,he,ft,_t,Se,Le,Et,je,Rt);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ln),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ci),O.pixelStorei(O.UNPACK_SKIP_ROWS,yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hi),he===0&&H.generateMipmaps&&O.generateMipmap(Nt),Ue.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){I=0,D=0,F=null,Ue.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Cl=class extends bi{constructor(){super();let e=new wn;e.deleteAttribute("uv");let t=new Kt({side:en}),n=new Kt,s=new gs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ht(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Xr(e,n,6),a=new Ft;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new ht(e,mr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ht(e,mr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ht(e,mr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ht(e,mr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ht(e,mr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ht(e,mr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function mr(i){return new us({color:0,emissive:16777215,emissiveIntensity:i})}function H0(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d");e.fillStyle="#b58550",e.fillRect(0,0,512,512);let t=71,n=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296);for(let r=0;r<360;r++){let o=n()*512;e.strokeStyle=`rgba(${60+Math.round(n()*65)},47,24,${.035+n()*.12})`,e.lineWidth=.3+n()*1.5,e.beginPath(),e.moveTo(0,o);for(let a=0;a<=512;a+=16)e.lineTo(a,o+Math.sin(a/100+r)*(.5+n()*2));e.stroke()}let s=new qr(i);return s.colorSpace=Mt,s.wrapS=s.wrapT=Xn,s.repeat.set(2,1),s}function kd(i,e,t,n,s){let r=new ht(new hs(50,50),new Kt({color:11450561,roughness:.91,metalness:.03}));r.position.z=-.006,r.receiveShadow=!0,i.add(r);let o,a=H0();if(!s){e.shadowMap.enabled=!0,e.shadowMap.type=Ca,t.castShadow=!0,t.shadow.mapSize.set(1024,1024),Object.assign(t.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:20}),t.shadow.bias=-1e-4,t.shadow.normalBias=.004;let c=new fr(e),l=new Cl;o=c.fromScene(l,.04).texture,l.dispose(),c.dispose()}return{mode:"studio",set(c,l){this.mode=c;let h=c==="studio";r.visible=h,l&&(l.visible=!h),i.background=new Xe(h?14476265:791587),i.fog=h?new Vr(14476265,15,45):new ls(791587,.06),i.environment=h?o:null,i.environmentIntensity=.7,t.intensity=h?2.3:3.5,n.intensity=h?.4:1.8,e.toneMappingExposure=h?.9:1.25},materialize(c,l,h){c.traverse(u=>{if(!u.isMesh||(u.castShadow=!0,u.receiveShadow=!0,h==="collision"))return;let d=Array.isArray(u.material)?u.material:[u.material];u.material=d.map(f=>{if(!f||f.userData?.studio)return f;let g=(f.name||"").toLowerCase(),_=g.includes("wood")||l==="free_furniture",m=(f.color?.r||0)+(f.color?.g||0)+(f.color?.b||0),p=_?new Zr({color:16777215,map:a,roughness:.48,clearcoat:.18,clearcoatRoughness:.6}):new Kt({color:f.color?.clone()||new Xe(.8,.8,.8),map:f.map||null,roughness:m<.2?.75:.36,metalness:g.includes("metal")?.65:m<.2?.05:.14,transparent:f.transparent,opacity:f.opacity,side:f.side});return p.name=f.name,p.userData.studio=!0,p}),(!Array.isArray(u.material)||u.material.length===1)&&(u.material=u.material[0])})}}}var le=i=>document.getElementById(i),st,As,Vd,Hd=!1,An=i=>{le("experiment-state").textContent=i},zd={queued:"\uB300\uAE30",source_refinement_and_optimization:"\uC18C\uD615 \uC811\uCD09\uC810 refinement \xB7 target \uD558\uC911/\uD1A0\uD06C \uCD5C\uC801\uD654",optimization:"SE(3) IK \uACBD\uB85C \xB7 IPOPT \uC811\uCD09\uB825/\uD1A0\uD06C \uCD5C\uC801\uD654",simulation:"MuJoCo \uB3D9\uC5ED\uD559 \uC2E4\uD589",validation:"\uC811\uCD09 \xB7 \uC0BD\uC785 \xB7 \uD574\uC81C \uAC80\uC99D",export:"\uAE30\uB85D \uB0B4\uBCF4\uB0B4\uAE30",complete:"\uACC4\uC0B0 \uC644\uB8CC",failed:"\uC2E4\uD328",cancelled:"\uCDE8\uC18C\uB428"},Rl=()=>["hinged_door","folding_panel","drawer","free_box_lid","free_folding_object","free_portable_drawer"].includes(st?.id),vh=()=>st?.id==="table_assembly",Pl=()=>["panel_fixture","mobile_panel"].includes(st?.id),qi=()=>st?.id==="mobile_panel",G0={grip_and_support:"\uC0C1\uD310 \uD30C\uC9C0\xB7\uAD6C\uD615 \uC9C0\uC9C0",grasp_settled:"\uD30C\uC9C0 \uC720\uC9C0",lift_tabletop:"\uC0C1\uD310\xB7\uB2E4\uB9AC \uB4E4\uC5B4 \uC62C\uB9AC\uAE30",reorient_tabletop:"\uC0C1\uD310 12\xB0 \uC7AC\uC815\uB82C",approach_socket:"\uB2E4\uB9AC \uC811\uADFC",align_leg:"peg / socket \uC815\uB82C",insert_leg:"\uB2E4\uB9AC \uC0BD\uC785",assembled_and_released:"gripper \uD574\uC81C\xB7\uC870\uB9BD \uC720\uC9C0"};function W0(){let i=st.id.startsWith("free_"),e=!st.id.includes("drawer");le("keyframe-inputs").replaceChildren(),le("preset-tag").textContent=i?"PANDA \xD7 3 \xB7 FREE ARTICULATED":"COMPONENT \xB7 SINGLE ARM",le("builder-title").textContent={hinged_door:"\uBB38 \uC5F4\uAE30",folding_panel:"\uC811\uC774\uC2DD \uC0C1\uD310 \uD3BC\uCE58\uAE30",drawer:"\uC11C\uB78D \uB2F9\uAE30\uAE30",free_box_lid:"\uC790\uC720 \uBC15\uC2A4 \xB7 grip/support + \uB69C\uAED1 \uC5F4\uAE30",free_folding_object:"\uC790\uC720 \uC811\uC774\uC2DD \uD328\uB110 \xB7 \uC9C0\uC9C0 + \uB0A0\uAC1C \uD3BC\uCE58\uAE30",free_portable_drawer:"\uC790\uC720 \uC218\uB0A9\uD568 \xB7 \uC9C0\uC9C0 + \uC11C\uB78D \uB2F9\uAE30\uAE30"}[st.id],le("builder-note").textContent=i?"\uC138\uACC4\uC5D0 \uACE0\uC815\uB418\uC9C0 \uC54A\uC740 \uBCF8\uCCB4 + \uB0B4\uBD80 \uAD00\uC808 \xB7 G / P / G \xB7 dense contact \u2192 contraction \u2192 3-arm realization":`\uC218\uB3D9 ${e?"hinge":"rail"} \xB7 \uBB3C\uCCB4 actuator 0 \xB7 ${st.tool==="G"?"native gripper":"spherical point tool"}`,le("tool-chips").replaceChildren();let t=document.createElement("span");t.textContent=i?"\u22C8 \uBCF8\uCCB4 \uD30C\uC9C0 \xB7 \u25CF \uBCF8\uCCB4 \uC9C0\uC9C0 \xB7 \u22C8 \uB0B4\uBD80 \uB9C1\uD06C \uC870\uC791":st.tool==="G"?"\u22C8 Gripper handle grasp":"\u25CF Spherical point contact",le("tool-chips").append(t),le("mass-control").hidden=!0,le("panel-mass").disabled=!0,le("source-refinement-control").hidden=!0,le("duration-control").hidden=!1,le("assembly-duration").disabled=!1,le("assembly-duration").min=12,le("planner-description").textContent=i?"\uC18C\uD615 \uC785\uB825\uC758 \uB9C1\uD06C\xB7\uAE30\uB2A5\uBCC4 dense contact\uB97C \uB300\uD45C \uC811\uCD09\uC73C\uB85C contraction\uD569\uB2C8\uB2E4. \uC704\uCE58\uB9CC 4\uBC30 \uC804\uB2EC\uD558\uACE0 \uC138 \uD314\uC758 \uC790\uC138\xB7\uC811\uCD09\uB825\xB7\uD1A0\uD06C\uC640 \uC790\uC720 \uBCF8\uCCB4+\uB0B4\uBD80 \uAD00\uC808\uC758 \uB3D9\uC5ED\uD559\uC744 \uACF5\uB3D9\uC73C\uB85C \uB9DE\uCDA5\uB2C8\uB2E4. \uBCF8\uCCB4\uB294 \uACF5\uC911\uC5D0\uC11C \uB85C\uBD07 \uC811\uCD09\uC73C\uB85C \uC9C0\uC9C0\uD558\uBA70 world \uACE0\uC815 \uAD00\uC808\xB7\uBB3C\uCCB4 actuator\xB7weld\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. Group ID\uC640 assignment/path\uB294 supplied synthetic \uC785\uB825\uC785\uB2C8\uB2E4.":"\uBB3C\uCCB4\uC758 \uC218\uB3D9 \uAD00\uC808 \uAD00\uC131\xB7\uC911\uB825\xB7\uC2A4\uD504\uB9C1\xB7\uB9C8\uCC30\uACFC \uC811\uCD09\uB825\xB7\uD314 \uD1A0\uD06C\uB97C \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uBB3C\uCCB4 pose\uB97C \uAC15\uC81C\uD558\uAC70\uB098 actuator\uB85C \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC811\uCD09\uC810\xB7\uCD08\uAE30 \uD30C\uC9C0\xB7\uAD00\uC808 \uACBD\uB85C\uB294 \uC8FC\uC5B4\uC9C4 \uC870\uAC74\uC774\uBA70, articulated contraction \uD559\uC2B5\uC740 \uC544\uC9C1 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";let n=Number(le("assembly-duration").value)/st.duration;for(let[s,r,o]of[["\uC811\uCD09",0,st.initial_coordinate],...i?[["\uBCF8\uCCB4 lift",st.lift_end,st.initial_coordinate]]:[],["\uC2DC\uC791",st.motion_start,st.initial_coordinate],["\uC911\uAC04",(st.motion_start+st.motion_end)/2,(st.initial_coordinate+st.target_coordinate)/2],["\uBAA9\uD45C",st.motion_end,st.target_coordinate],["\uC720\uC9C0",st.duration,st.target_coordinate]]){let a=document.createElement("div");a.className="assembly-key";for(let c of[s,`${(r*n).toFixed(1)} s`,`${(o*(e?180/Math.PI:1e3)).toFixed(1)} ${e?"deg":"mm"}`]){let l=document.createElement("span");l.textContent=c,a.append(l)}le("keyframe-inputs").append(a)}le("keyframe-help").textContent="\uCD08\uAE30 \uC811\uCD09 \u2192 \uC774\uB3D9 \u2192 \uC720\uC9C0 \xB7 \uBB3C\uCCB4 \uAD00\uC808\uC758 \uCE21\uC815\uAC12\uC744 \uC7AC\uC0DD\uD569\uB2C8\uB2E4.",(!i||le("contacts-json").dataset.preset!==st.id)&&(le("contacts-json").dataset.preset=st.id,le("contacts-json").value=JSON.stringify(i?st.dense_source_groups:{kind:st.tool,link:"moving",point_link:st.contact_object,inward_link:st.inward_object},null,2)),le("contacts-json").readOnly=!i,le("contacts-file").disabled=!i}function bh(){if(Rl())return W0();let i=vh(),e=Pl(),t=i||e;le("keyframe-inputs").replaceChildren(),le("preset-tag").textContent=qi()?"RBY1 + PANDA":"PANDA \xD7 3",le("builder-title").textContent=qi()?"\uC791\uC5C5\uC601\uC5ED \uD655\uC7A5 \xB7 RBY1 + Panda":e?"\uBCF8 \uC2E4\uD5D8 \xB7 \uD328\uB110 \u2192 \uC9C0\uADF8 \u2192 \uB9B4\uB9AC\uC2A4":i?"\uCC45\uC0C1 \uC0C1\uD310\xB7\uB2E4\uB9AC \uC870\uB9BD":"Three Franka \xB7 \uD328\uB110 \uC6B4\uBC18",le("builder-note").textContent=qi()?"\uCC28\uB3D9\uAD6C\uB3D9 \uBAA8\uBC14\uC77C \uB4C0\uC5BC\uC554 + \uACE0\uC815 Panda \xB7 \uC2E4\uC81C \uBCA0\uC774\uC2A4\xB7\uBB3C\uCCB4 \uB3D9\uC5ED\uD559":e?"Panda \xD7 3 \xB7 G / P / P \xB7 \uC790\uC720 \uD328\uB110 1\uAC1C \xB7 \uACE0\uC815 \uC9C0\uADF8":i?"\uC2E4\uC81C Panda \xD7 3 \xB7 arm 21 + finger 4 DoF \xB7 \uC790\uC720 \uBB3C\uCCB4 2\uAC1C":"\uC2E4\uC81C Panda \xD7 3 \xB7 arm 21 + finger 2 DoF \xB7 \uC790\uC720 \uBB3C\uCCB4 1\uAC1C",le("tool-chips").replaceChildren();for(let n of qi()?["\u22C8 RBY1 gripper","\u25CF RBY1 sphere support","\u25CF Fixed Panda support"]:e?["\u22C8 Edge gripper","\u25CF Left sphere support","\u25CF Right sphere support"]:i?["\u22C8 \uC0C1\uD310 gripper","\u25CF Sphere support","\u22C8 \uB2E4\uB9AC gripper"]:["\u25CF Sphere \xB7 point","\u22C8 Panda hand","\u2299 Vacuum seal"]){let s=document.createElement("span");s.textContent=n,le("tool-chips").append(s)}if(le("mass-control").hidden=t,le("panel-mass").disabled=t,le("source-refinement-control").hidden=!e,le("duration-control").hidden=!t,le("assembly-duration").disabled=!t,le("assembly-duration").min=qi()?30:24,le("planner-description").textContent=qi()?"\uACE0\uC815 Panda\uAC00 \uCD08\uAE30 \uC9C0\uC9C0\uB97C \uB118\uAE34 \uB4A4 \uD1B5\uB85C \uBC16\uC73C\uB85C \uBB3C\uB7EC\uB0A9\uB2C8\uB2E4. RBY1\uC740 \uBC14\uD034\uB97C \uAD6C\uB3D9\uD574 1.4 m \uC774\uB3D9\uD558\uACE0 \uACE0\uC815 \uBCA0\uC774\uC2A4\uC758 \uB3C4\uB2EC \uBC94\uC704 \uBC16\uC5D0\uC11C \uD328\uB110\uC744 \uC9C0\uADF8\uC5D0 \uC548\uCC29\xB7\uD574\uC81C\uD569\uB2C8\uB2E4. \uBCA0\uC774\uC2A4\uC640 \uD328\uB110\uC740 \uC790\uC720 \uAC15\uCCB4\uC774\uBA70 \uC704\uCE58\uB97C \uAC15\uC81C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC9C1\uC120 \uACBD\uB85C\xB7\uBAA8\uB4DC\uC640 \uCD08\uAE30 \uD30C\uC9C0\uB294 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4.":e?"1/4 \uC2A4\uCF00\uC77C\uC758 synthetic contracted contact \uC704\uCE58\uB97C \uBA3C\uC800 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uC704\uCE58\uB9CC 4\uBC30 \uC804\uB2EC\uD558\uACE0 2 kg \uD328\uB110\uC758 \uC811\uCD09\uB825\xB7\uD1A0\uD06C\uB97C \uB2E4\uC2DC \uD489\uB2C8\uB2E4. \uCD08\uAE30 \uD30C\uC9C0\uC640 SE(3) \uACBD\uB85C\uB294 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4. 22 s \uC9C0\uADF8 \uC548\uCC29 \u2192 \uD558\uC911 \uC804\uB2EC \u2192 26 s \uC804\uCCB4 \uACF5\uAD6C \uD574\uC81C. \uD559\uC2B5 \uCD94\uB860\xB7\uC2E4\uC81C \uB85C\uBD07 \uC2E4\uD589\uC740 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":i?"2 kg \uC0C1\uD310\uC744 grip & support\uD574 \uC790\uC138\uB97C \uBC14\uAFB8\uACE0 0.4 kg \uB2E4\uB9AC\uB97C \uC0BD\uC785\uD569\uB2C8\uB2E4. 28 s\uC5D0 \uB2E4\uB9AC gripper\uB97C \uC5F4\uC5B4 \uC790\uC720 \uBB3C\uCCB4\uC758 socket \uC811\uCD09 \uC720\uC9C0\uB97C \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uC2DC\uAC04 \uBCC0\uACBD \uC2DC \uC804\uCCB4 \uACBD\uB85C\uC640 \uC81C\uC5B4 \uBAA8\uB4DC\uB97C \uD568\uAED8 \uC7AC\uACC4\uC0B0\uD569\uB2C8\uB2E4.":"\uACE0\uC815 \uC790\uC138\uC758 IK \uC811\uCD09 \uACBD\uB85C\uC5D0\uC11C \uC811\uCD09\uB825\xB7\uD1A0\uD06C\uB97C \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4. \uC804\uCCB4 CITO \uD0D0\uC0C9\uC740 \uBCC4\uB3C4 Cartesian \uC608\uC81C\uC785\uB2C8\uB2E4.",le("keyframe-help").textContent=e?`${st.keyframes.length}\uAC1C keyframe \xB7 \uC18C\uD615 source refinement\uC640 target \uAC80\uC99D\uC744 \uB530\uB85C \uAE30\uB85D`:i?"\uAE30\uBCF8 8\uAC1C keyframe \xB7 \uC0C1\uD310\uC758 z / pitch\uC640 \uB2E4\uB9AC z \uD45C\uC2DC \xB7 \uC785\uB825 \uC2DC\uAC04\uC5D0 \uBE44\uB840\uD574 \uC7AC\uACC4\uC0B0":"\uC704\uCE58 m \xB7 \uC2DC\uAC04 s \xB7 \uACE0\uC815 \uC790\uC138 xyzw = [0, 0, 0, 1]",t){let n=Number(le("assembly-duration").value)/(st.simulation?.duration||st.duration);for(let[s,r]of st.keyframes.entries()){let o=document.createElement("div");o.className="assembly-key";let a=e?r.object_pose:r.tabletop,c=2*Math.atan2(a[4],a[6])*180/Math.PI;for(let l of[`0${s+1}`,`${(r.time*n).toFixed(1)} s`,G0[r.id]||r.id,e?`panel ${a[2].toFixed(2)} m / ${c.toFixed(0)}\xB0`:`top ${a[2].toFixed(2)} m / ${c.toFixed(0)}\xB0 \xB7 leg ${r.leg[2].toFixed(2)} m`]){let h=document.createElement("span");h.textContent=l,o.append(h)}le("keyframe-inputs").append(o)}e||(le("contacts-json").value=JSON.stringify(st.arms.map(s=>({arm_id:s.id,kind:s.kind,object:s.object,point_object:s.point_object,normal_object:s.normal_object})),null,2))}else{for(let[n,s]of st.keyframes.entries()){let r=document.createElement("div");r.className="keyframe-input";let o=document.createElement("span");o.textContent=`0${n+1} ${s.id}`,r.append(o);for(let[a,c]of[["time",s.time],["x",s.object_pose[0]],["y",s.object_pose[1]],["z",s.object_pose[2]]]){let l=document.createElement("label");l.textContent=a==="time"?"t \xB7 s":a+" \xB7 m";let h=document.createElement("input");h.type="number",h.step=".01",h.value=c,h.required=!0,h.dataset.key=n,h.dataset.field=a,h.setAttribute("aria-label",`${s.id} ${a}`),h.min=a==="time"?0:-.9,h.max=a==="time"?12:1.2,l.append(h),r.append(l)}le("keyframe-inputs").append(r)}le("contacts-json").value=JSON.stringify(st.contracted_contacts,null,2),le("panel-mass").value=st.object.mass}le("contacts-json").readOnly=i,le("contacts-file").disabled=i}function Gd(i){let e=i.report;if(!e)return;if(le("experiment-results").hidden=!1,e.articulated_object||e.free_articulated_object){let o=e.coordinate_units==="rad",a=o?180/Math.PI:1e3,c=o?"deg":"mm";le("result-tracking").textContent=`${e.execution_passed?"PASS":"FAIL"} \xB7 ${(e.final_error*a).toFixed(3)} ${c}`,le("result-forces").textContent=`${(e.peak_contact_force_N||Math.max(...e.peak_contact_force_per_arm_N)).toFixed(2)} N \xB7 peak`,le("result-seal-label").textContent=e.free_articulated_object?"FREE BODY / 3-ARM CONTACT":"PASSIVE JOINT / CONTACT",le("result-seal").textContent=`0 actuators \xB7 ${(100*(Array.isArray(e.contact_fraction)?Math.min(...e.contact_fraction):e.contact_fraction)).toFixed(1)}% contact`;for(let l of["source-result","workspace-result","robustness-result"])le(l).hidden=!0;e.contraction&&(le("source-result").hidden=!1,le("source-result").textContent=(e.full_paper_pipeline_executed?"FULL PIPELINE \xB7 ":"NOMINAL BASELINE \xB7 Sec. III-B\u2013IV full pipeline \uBBF8\uC2E4\uD589 \xB7 ")+`CONTRACTION \xB7 ${e.contraction.dense_sample_count} dense samples \u2192 ${e.contraction.contracted_contact_count} link-aware anchors \u2192 ${e.arm_count} arms \xB7 \xD7${e.contraction.source_to_target_scale} geometry transfer \xB7 synthetic group IDs`),le("result-residual").textContent=e.primal_residual.toExponential(2),le("report-json").textContent=JSON.stringify(e,null,2);return}let t=e.scenario==="table_assembly",n=e.scenario==="panel_fixture",s=e.scenario==="mobile_panel",r=n?e.keyframe_errors.map(o=>o.panel.translation_m):t?e.keyframe_errors.flatMap(o=>[o.tabletop.translation_m,...o.time<=(e.leg_release_time_s||28)?[o.leg.translation_m]:[]]):e.keyframe_errors.map(o=>o.translation_m);if(le("result-tracking").textContent=(e.tracking_passed?"PASS":"FAIL")+" \xB7 "+Math.max(...r.map(o=>o*1e3)).toFixed(2)+" mm",le("result-forces").textContent=e.force_envelopes_passed?"PASS":"FAIL",le("result-seal-label").textContent=n||s?"JIG SUPPORT / RELEASE":t?"ASSEMBLY / RELEASE":"SUCTION SEAL",le("result-seal").textContent=n||s?e.fixture_supported&&e.all_tools_released?`SUPPORTED \xB7 ${e.jig_support_final_N.toFixed(2)} N`:"FAIL":t?e.assembly_seated&&e.leg_released?`SEATED \xB7 ${(e.insertion_depth_m*1e3).toFixed(1)} mm`:"FAIL / \uBBF8\uC870\uB9BD":e.seal_retained_before_vent?"\uC720\uC9C0":"\uC774\uD0C8",le("workspace-result").hidden=!s,s){let o=e.workspace_comparison.panda,a=e.workspace_comparison.tip_right;le("workspace-result").textContent=`WORKSPACE \xB7 \uBAA9\uC801 \uC811\uCD09\uC810: \uACE0\uC815 Panda ${o.fixed_base_target_distance_m.toFixed(3)} m > \uB3C4\uB2EC \uC0C1\uD55C ${o.URDF_chain_radius_bound_m.toFixed(3)} m \xB7 RBY1 (\uB3D9\uC77C torso) ${a.fixed_base_target_distance_m.toFixed(3)} m > ${a.URDF_chain_radius_bound_m.toFixed(3)} m \xB7 \uC2E4\uC81C \uBCA0\uC774\uC2A4 \uC774\uB3D9 ${e.base_travel_m.toFixed(3)} m`}le("source-result").hidden=!(n||s),(n||s)&&(le("source-result").textContent=`SOURCE \xB7 ${e.source.synthetic_input?"synthetic \uC785\uB825":"\uC678\uBD80 contracted \uC785\uB825"} \xB7 refinement ${e.source.source_refinement_enabled?"ON":"OFF"} \xB7 \u03C1 ${e.source.source_rho_before.toFixed(3)} \u2192 ${e.source.source_rho_after.toFixed(3)} \xB7 target ${e.target_validation?.length?"\uCD5C\uC18C \u03C1 "+Math.min(...e.target_validation.map(o=>o.rho)).toFixed(3):"nominal \uACF5\uB3D9 \uD1A0\uD06C \uAC80\uC99D"} \xB7 \uD559\uC2B5 \uCD94\uB860 \uBBF8\uC2E4\uD589`),le("robustness-result").hidden=!e.robustness,e.robustness&&(le("robustness-result").textContent=`\uC678\uB825 ${e.robustness.force_peak_N} N \xB7 \uC790\uC138 \uD68C\uBCF5 ${e.robustness.recovery_passed?"PASS":"FAIL"} \xB7 \uC811\uCD09 \uD5C8\uC6A9\uC601\uC5ED \uD3EC\uD568 \uC804\uCCB4 \uAC80\uC0AC ${e.robustness.all_task_checks_passed?"PASS":"FAIL"} \xB7 \uCD5C\uB300 \uC624\uCC28 ${(e.robustness.peak_pose_error_m*1e3).toFixed(2)} mm`),le("result-residual").textContent=e.primal_residual.toExponential(2),le("report-json").textContent=JSON.stringify(e,null,2)}async function mo(i,e={}){let t=i.startsWith("/api/")?new URL("."+i,document.baseURI):i,n=await fetch(t,e),s=await n.json();if(!n.ok)throw Error(s.error||"\uACC4\uC0B0 \uC11C\uBC84 \uC624\uB958");return s}function po(){clearTimeout(Vd),As=null,le("experiment-run").disabled=!Hd,le("experiment-cancel").disabled=!0,le("scenario-preset").disabled=!1}async function Wd(){let i=As;if(i)try{let e=await mo("/api/experiments/"+i);if(As!==i)return;if(An((zd[e.stage]||e.stage)+(e.time_s!==void 0?` \xB7 ${e.time_s.toFixed(1)} / ${e.duration_s.toFixed(1)} s`:"")),e.state==="completed"){let t=await mo(e.recording);for(let n of t.instances)n.manifest=new URL(n.manifest,location.href).href;window.dispatchEvent(new CustomEvent("experiment-result",{detail:t})),Gd(t),po()}else["failed","cancelled"].includes(e.state)?(An(e.error||zd[e.stage]),po()):Vd=setTimeout(Wd,1e3)}catch(e){As===i&&(An(e.message),po())}}le("experiment-form").onsubmit=async i=>{i.preventDefault();try{let e;if(Rl())e={preset:st.id,duration:Number(le("assembly-duration").value),...st.id.startsWith("free_")?{dense_source_groups:JSON.parse(le("contacts-json").value)}:{}};else if(Pl())e={preset:qi()?"mobile_panel":"panel_fixture",duration:Number(le("assembly-duration").value),refine_source:le("source-refinement").checked,contracted_source:JSON.parse(le("contacts-json").value)};else if(vh())e={preset:"table_assembly",duration:Number(le("assembly-duration").value)};else{let n=structuredClone(st.keyframes);document.querySelectorAll("#keyframe-inputs input").forEach(s=>{let r=n[Number(s.dataset.key)],o=Number(s.value);s.dataset.field==="time"?r.time=o:r.object_pose[["x","y","z"].indexOf(s.dataset.field)]=o}),e={preset:"three_franka",mass:Number(le("panel-mass").value),keyframes:n,contacts:JSON.parse(le("contacts-json").value)}}le("experiment-run").disabled=!0,le("scenario-preset").disabled=!0,An("\uC791\uC5C5 \uC81C\uCD9C \uC911\u2026"),As=(await mo("/api/experiments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).id,le("experiment-cancel").disabled=!1,await Wd()}catch(e){An(e.message),po()}};le("experiment-cancel").onclick=async()=>{if(As)try{await mo("/api/experiments/"+As+"/cancel",{method:"POST"}),An("\uCDE8\uC18C\uB428"),po()}catch(i){An(i.message)}};le("experiment-reset").onclick=()=>{le("contacts-json").dataset.preset="",le("assembly-duration").value=Rl()?st.duration:qi()?36:30,Pl()&&(le("contacts-json").value=JSON.stringify(st.contracted_source,null,2)),bh()};le("assembly-duration").oninput=()=>{(Rl()||vh()||Pl())&&le("assembly-duration").checkValidity()&&bh()};le("contacts-file").onchange=async i=>{try{let e=i.target.files[0];if(!e)return;if(e.size>32768)throw Error("32 KB \uC774\uD558 JSON\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.");let t=JSON.parse(await e.text());le("contacts-json").value=JSON.stringify(t.dense_source_groups||t.contracted_contacts||t,null,2),An("\uC811\uCD09 JSON\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. \uC2E4\uD589 \uC2DC \uD45C\uBA74\xB7\uBC95\uC120\uC744 \uAC80\uC0AC\uD569\uB2C8\uB2E4.")}catch(e){An(e.message)}};window.addEventListener("recording-selected",i=>Gd(i.detail));async function Xd(i){let e=["hinged_door","folding_panel","drawer","free_box_lid","free_folding_object","free_portable_drawer"].includes(i),t=e?`./data/${i}-preset.json`:i==="mobile_panel"?"./data/mobile-preset.json":i==="panel_fixture"?"./data/panel-preset.json":i==="table_assembly"?"./data/assembly-preset.json":"./data/franka-preset.json";st=await(await fetch(t)).json(),le("assembly-duration").value=e?st.duration:i==="mobile_panel"?36:30,["panel_fixture","mobile_panel"].includes(i)&&(st.contracted_source=await(await fetch(i==="mobile_panel"?"./data/mobile-source.json":"./data/panel-source.json")).json(),le("contacts-json").value=JSON.stringify(st.contracted_source,null,2)),bh()}le("scenario-preset").onchange=async()=>{try{await Xd(le("scenario-preset").value),window.dispatchEvent(new CustomEvent("experiment-preview",{detail:le("scenario-preset").value}))}catch(i){An(i.message)}};async function qd(){let i=new URLSearchParams(location.search).get("model"),e=i?.startsWith("mobile_push_")?"mobile_panel":i==="free_box_push"?"free_box_lid":i,t=["free_box_lid","free_folding_object","free_portable_drawer","hinged_door","folding_panel","drawer","three_franka","table_assembly","panel_fixture","mobile_panel"].includes(e)?e:"free_box_lid";le("scenario-preset").value=t,await Xd(t);try{let n=await mo("/api/health");if(n.ready){if(n.experiments_ready===!1){An("Panda \uCDA9\uB3CC mesh \uC900\uBE44 \uD544\uC694 \xB7 python tools/fetch_panda_meshes.py");return}Hd=!0,le("experiment-run").disabled=!1,An("Python \uC5F0\uACB0\uB428 \xB7 source/target \uCD5C\uC801\uD654\uC640 \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589 \uAC00\uB2A5");return}}catch{}An("GitHub Pages: \uC2E4\uC81C \uC2E4\uD589 \uAE30\uB85D \uC7AC\uC0DD \xB7 \uC0C8 \uACC4\uC0B0\uC740 Python \uBC31\uC5D4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC11C\uBC84: .venv/bin/python web/server.py")}var Yd={type:"change"},Sh={type:"start"},Jd={type:"end"},Il=new vi,jd=new Nn,X0=Math.cos(70*Kn.DEG2RAD),jt=new U,yn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mh=1e-6,Ll=class extends io{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new At,this._lastTargetPosition=new U,this._quat=new At().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rr,this._sphericalDelta=new rr,this._scale=1,this._panOffset=new U,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new U,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Y0.bind(this),this._onPointerDown=q0.bind(this),this._onPointerUp=j0.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=$0.bind(this),this._onKeyDown=K0.bind(this),this._onTouchStart=Q0.bind(this),this._onTouchMove=ex.bind(this),this._onMouseDown=J0.bind(this),this._onMouseMove=Z0.bind(this),this._interceptControlDown=nx.bind(this),this._interceptControlUp=ix.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yd),this.update(),this.state=Pt.NONE}update(e=null){let t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<X0?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mh||this._lastTargetPosition.distanceToSquared(this.target)>Mh?(this.dispatchEvent(Yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function q0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Y0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function j0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jd),this.state=Pt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function J0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pt.DOLLY;break;case Hi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}break;case Hi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Sh)}function Z0(i){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(i.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jd))}function K0(i){this.enabled!==!1&&this._handleKeyDown(i)}function Q0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Pt.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pt.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Sh)}function ex(i){switch(this._trackPointer(i),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pt.NONE}}function tx(i){this.enabled!==!1&&i.preventDefault()}function nx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ix(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Nl=class extends pn{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ii(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){function t(l){let h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;let g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,h,_))return!1;return!0}function n(l,h,u){for(let d=0,f=l.length;d<f;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function s(l){let h=new DataView(l),u=h.getUint32(80,!0),d,f,g,_=!1,m,p,C,P,E;for(let N=0;N<70;N++)h.getUint32(N,!1)==1129270351&&h.getUint8(N+4)==82&&h.getUint8(N+5)==61&&(_=!0,m=new Float32Array(u*3*3),p=h.getUint8(N+6)/255,C=h.getUint8(N+7)/255,P=h.getUint8(N+8)/255,E=h.getUint8(N+9)/255);let R=84,I=50,D=new Ot,F=new Float32Array(u*3*3),v=new Float32Array(u*3*3),S=new Xe;for(let N=0;N<u;N++){let B=R+N*I,W=h.getFloat32(B,!0),Z=h.getFloat32(B+4,!0),K=h.getFloat32(B+8,!0);if(_){let k=h.getUint16(B+48,!0);(k&32768)===0?(d=(k&31)/31,f=(k>>5&31)/31,g=(k>>10&31)/31):(d=p,f=C,g=P)}for(let k=1;k<=3;k++){let ne=B+k*12,X=N*3*3+(k-1)*3;F[X]=h.getFloat32(ne,!0),F[X+1]=h.getFloat32(ne+4,!0),F[X+2]=h.getFloat32(ne+8,!0),v[X]=W,v[X+1]=Z,v[X+2]=K,_&&(S.setRGB(d,f,g,Mt),m[X]=S.r,m[X+1]=S.g,m[X+2]=S.b)}}return D.setAttribute("position",new $t(F,3)),D.setAttribute("normal",new $t(v,3)),_&&(D.setAttribute("color",new $t(m,3)),D.hasColors=!0,D.alpha=E),D}function r(l){let h=new Ot,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/,g=0,_=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),p=new RegExp("normal"+_+_+_,"g"),C=[],P=[],E=[],R=new U,I,D=0,F=0,v=0;for(;(I=u.exec(l))!==null;){F=v;let S=I[0],N=(I=f.exec(S))!==null?I[1]:"";for(E.push(N);(I=d.exec(S))!==null;){let Z=0,K=0,k=I[0];for(;(I=p.exec(k))!==null;)R.x=parseFloat(I[1]),R.y=parseFloat(I[2]),R.z=parseFloat(I[3]),K++;for(;(I=m.exec(k))!==null;)C.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),P.push(R.x,R.y,R.z),Z++,v++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),Z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let B=F,W=v-F;h.userData.groupNames=E,h.addGroup(B,W,D),D++}return h.setAttribute("position",new ut(C,3)),h.setAttribute("normal",new ut(P,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}let c=a(e);return t(c)?s(c):r(o(e))}};var go=class extends Kr{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case d:case _:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case g:case m:case p:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function n(k,ne,X,se,fe){let me,Pe,Ae=X.pixel_size>>3,Te=X.width*X.height*Ae;if(ne&&(Pe=fe.subarray(se,se+=X.colormap_length*(X.colormap_size>>3))),k){me=new Uint8Array(Te);let xe,V,j,pe=0,He=new Uint8Array(Ae);for(;pe<Te;)if(xe=fe[se++],V=(xe&127)+1,xe&128){for(j=0;j<Ae;++j)He[j]=fe[se++];for(j=0;j<V;++j)me.set(He,pe+j*Ae);pe+=Ae*V}else{for(V*=Ae,j=0;j<V;++j)me[pe+j]=fe[se++];pe+=V}}else me=fe.subarray(se,se+=ne?X.width*X.height:Te);return{pixel_data:me,palettes:Pe}}function s(k,ne,X,se,fe,me,Pe,Ae,Te){let xe=Te,V,j=0,pe,He,De=S.width;for(He=ne;He!==se;He+=X)for(pe=fe;pe!==Pe;pe+=me,j++)V=Ae[j],k[(pe+De*He)*4+3]=255,k[(pe+De*He)*4+2]=xe[V*3+0],k[(pe+De*He)*4+1]=xe[V*3+1],k[(pe+De*He)*4+0]=xe[V*3+2];return k}function r(k,ne,X,se,fe,me,Pe,Ae){let Te,xe=0,V,j,pe=S.width;for(j=ne;j!==se;j+=X)for(V=fe;V!==Pe;V+=me,xe+=2)Te=Ae[xe+0]+(Ae[xe+1]<<8),k[(V+pe*j)*4+0]=(Te&31744)>>7,k[(V+pe*j)*4+1]=(Te&992)>>2,k[(V+pe*j)*4+2]=(Te&31)<<3,k[(V+pe*j)*4+3]=Te&32768?0:255;return k}function o(k,ne,X,se,fe,me,Pe,Ae){let Te=0,xe,V,j=S.width;for(V=ne;V!==se;V+=X)for(xe=fe;xe!==Pe;xe+=me,Te+=3)k[(xe+j*V)*4+3]=255,k[(xe+j*V)*4+2]=Ae[Te+0],k[(xe+j*V)*4+1]=Ae[Te+1],k[(xe+j*V)*4+0]=Ae[Te+2];return k}function a(k,ne,X,se,fe,me,Pe,Ae){let Te=0,xe,V,j=S.width;for(V=ne;V!==se;V+=X)for(xe=fe;xe!==Pe;xe+=me,Te+=4)k[(xe+j*V)*4+2]=Ae[Te+0],k[(xe+j*V)*4+1]=Ae[Te+1],k[(xe+j*V)*4+0]=Ae[Te+2],k[(xe+j*V)*4+3]=Ae[Te+3];return k}function c(k,ne,X,se,fe,me,Pe,Ae){let Te,xe=0,V,j,pe=S.width;for(j=ne;j!==se;j+=X)for(V=fe;V!==Pe;V+=me,xe++)Te=Ae[xe],k[(V+pe*j)*4+0]=Te,k[(V+pe*j)*4+1]=Te,k[(V+pe*j)*4+2]=Te,k[(V+pe*j)*4+3]=255;return k}function l(k,ne,X,se,fe,me,Pe,Ae){let Te=0,xe,V,j=S.width;for(V=ne;V!==se;V+=X)for(xe=fe;xe!==Pe;xe+=me,Te+=2)k[(xe+j*V)*4+0]=Ae[Te+0],k[(xe+j*V)*4+1]=Ae[Te+0],k[(xe+j*V)*4+2]=Ae[Te+0],k[(xe+j*V)*4+3]=Ae[Te+1];return k}function h(k,ne,X,se,fe){let me,Pe,Ae,Te,xe,V;switch((S.flags&C)>>P){default:case I:me=0,Ae=1,xe=ne,Pe=0,Te=1,V=X;break;case E:me=0,Ae=1,xe=ne,Pe=X-1,Te=-1,V=-1;break;case D:me=ne-1,Ae=-1,xe=-1,Pe=0,Te=1,V=X;break;case R:me=ne-1,Ae=-1,xe=-1,Pe=X-1,Te=-1,V=-1;break}if(W)switch(S.pixel_size){case 8:c(k,Pe,Te,V,me,Ae,xe,se);break;case 16:l(k,Pe,Te,V,me,Ae,xe,se);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(k,Pe,Te,V,me,Ae,xe,se,fe);break;case 16:r(k,Pe,Te,V,me,Ae,xe,se);break;case 24:o(k,Pe,Te,V,me,Ae,xe,se);break;case 32:a(k,Pe,Te,V,me,Ae,xe,se);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}let u=0,d=1,f=2,g=3,_=9,m=10,p=11,C=48,P=4,E=0,R=1,I=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0,v=new Uint8Array(e),S={id_length:v[F++],colormap_type:v[F++],image_type:v[F++],colormap_index:v[F++]|v[F++]<<8,colormap_length:v[F++]|v[F++]<<8,colormap_size:v[F++],origin:[v[F++]|v[F++]<<8,v[F++]|v[F++]<<8],width:v[F++]|v[F++]<<8,height:v[F++]|v[F++]<<8,pixel_size:v[F++],flags:v[F++]};if(t(S),S.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=S.id_length;let N=!1,B=!1,W=!1;switch(S.image_type){case _:N=!0,B=!0;break;case d:B=!0;break;case m:N=!0;break;case f:break;case p:N=!0,W=!0;break;case g:W=!0;break}let Z=new Uint8Array(S.width*S.height*4),K=n(N,B,S,F,v);return h(Z,S.width,S.height,K.pixel_data,K.palettes),{data:Z,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Zn}}};var Dl=class extends pn{load(e,t,n,s){let r=this,o=r.path===""?ys.extractUrlBase(e):r.path,a=new ii(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e,t){function n(y,x){let T=[],M=y.childNodes;for(let A=0,$=M.length;A<$;A++){let ee=M[A];ee.nodeName===x&&T.push(ee)}return T}function s(y){if(y.length===0)return[];let x=y.trim().split(/\s+/),T=new Array(x.length);for(let M=0,A=x.length;M<A;M++)T[M]=x[M];return T}function r(y){if(y.length===0)return[];let x=y.trim().split(/\s+/),T=new Array(x.length);for(let M=0,A=x.length;M<A;M++)T[M]=parseFloat(x[M]);return T}function o(y){if(y.length===0)return[];let x=y.trim().split(/\s+/),T=new Array(x.length);for(let M=0,A=x.length;M<A;M++)T[M]=parseInt(x[M]);return T}function a(y){return y.substring(1)}function c(){return"three_default_"+df++}function l(y){return Object.keys(y).length===0}function h(y){return{unit:u(n(y,"unit")[0]),upAxis:d(n(y,"up_axis")[0])}}function u(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function d(y){return y!==void 0?y.textContent:"Y_UP"}function f(y,x,T,M){let A=n(y,x)[0];if(A!==void 0){let $=n(A,T);for(let ee=0;ee<$.length;ee++)M($[ee])}}function g(y,x){for(let T in y){let M=y[T];M.build=x(y[T])}}function _(y,x){return y.build!==void 0||(y.build=x(y)),y.build}function m(y){let x={sources:{},samplers:{},channels:{}},T=!1;for(let M=0,A=y.childNodes.length;M<A;M++){let $=y.childNodes[M];if($.nodeType!==1)continue;let ee;switch($.nodeName){case"source":ee=$.getAttribute("id"),x.sources[ee]=_e($);break;case"sampler":ee=$.getAttribute("id"),x.samplers[ee]=p($);break;case"channel":ee=$.getAttribute("target"),x.channels[ee]=C($);break;case"animation":m($),T=!0;break;default:console.log($)}}T===!1&&(tt.animations[y.getAttribute("id")||Kn.generateUUID()]=x)}function p(y){let x={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let $=a(A.getAttribute("source")),ee=A.getAttribute("semantic");x.inputs[ee]=$;break}}return x}function C(y){let x={},M=y.getAttribute("target").split("/"),A=M.shift(),$=M.shift(),ee=$.indexOf("(")!==-1,Re=$.indexOf(".")!==-1;if(Re)M=$.split("."),$=M.shift(),x.member=M.shift();else if(ee){let ve=$.split("(");$=ve.shift();for(let we=0;we<ve.length;we++)ve[we]=parseInt(ve[we].replace(/\)/,""));x.indices=ve}return x.id=A,x.sid=$,x.arraySyntax=ee,x.memberSyntax=Re,x.sampler=a(y.getAttribute("source")),x}function P(y){let x=[],T=y.channels,M=y.samplers,A=y.sources;for(let $ in T)if(T.hasOwnProperty($)){let ee=T[$],Re=M[ee.sampler],ve=Re.inputs.INPUT,we=Re.inputs.OUTPUT,We=A[ve],ae=A[we],Ve=R(ee,We,ae);S(Ve,x)}return x}function E(y){return _(tt.animations[y],P)}function R(y,x,T){let M=tt.nodes[y.id],A=_t(M.id),$=M.transforms[y.sid],ee=M.matrix.clone().transpose(),Re,ve,we,We,ae,Ve,Ne={};switch($){case"matrix":for(we=0,We=x.array.length;we<We;we++)if(Re=x.array[we],ve=we*T.stride,Ne[Re]===void 0&&(Ne[Re]={}),y.arraySyntax===!0){let zt=T.array[ve],wt=y.indices[0]+4*y.indices[1];Ne[Re][wt]=zt}else for(ae=0,Ve=T.stride;ae<Ve;ae++)Ne[Re][ae]=T.array[ve+ae];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}let Je=I(Ne,ee);return{name:A.uuid,keyframes:Je}}function I(y,x){let T=[];for(let A in y)T.push({time:parseFloat(A),value:y[A]});T.sort(M);for(let A=0;A<16;A++)N(T,A,x.elements[A]);return T;function M(A,$){return A.time-$.time}}let D=new U,F=new U,v=new At;function S(y,x){let T=y.keyframes,M=y.name,A=[],$=[],ee=[],Re=[];for(let ve=0,we=T.length;ve<we;ve++){let We=T[ve],ae=We.time,Ve=We.value;Y.fromArray(Ve).transpose(),Y.decompose(D,v,F),A.push(ae),$.push(D.x,D.y,D.z),ee.push(v.x,v.y,v.z,v.w),Re.push(F.x,F.y,F.z)}return $.length>0&&x.push(new ni(M+".position",A,$)),ee.length>0&&x.push(new Ei(M+".quaternion",A,ee)),Re.length>0&&x.push(new ni(M+".scale",A,Re)),x}function N(y,x,T){let M,A=!0,$,ee;for($=0,ee=y.length;$<ee;$++)M=y[$],M.value[x]===void 0?M.value[x]=null:A=!1;if(A===!0)for($=0,ee=y.length;$<ee;$++)M=y[$],M.value[x]=T;else B(y,x)}function B(y,x){let T,M;for(let A=0,$=y.length;A<$;A++){let ee=y[A];if(ee.value[x]===null){if(T=W(y,A,x),M=Z(y,A,x),T===null){ee.value[x]=M.value[x];continue}if(M===null){ee.value[x]=T.value[x];continue}K(ee,T,M,x)}}}function W(y,x,T){for(;x>=0;){let M=y[x];if(M.value[T]!==null)return M;x--}return null}function Z(y,x,T){for(;x<y.length;){let M=y[x];if(M.value[T]!==null)return M;x++}return null}function K(y,x,T,M){if(T.time-x.time===0){y.value[M]=x.value[M];return}y.value[M]=(y.time-x.time)*(T.value[M]-x.value[M])/(T.time-x.time)+x.value[M]}function k(y){let x={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":x.animations.push(a(A.getAttribute("url")));break}}tt.clips[y.getAttribute("id")]=x}function ne(y){let x=[],T=y.name,M=y.end-y.start||-1,A=y.animations;for(let $=0,ee=A.length;$<ee;$++){let Re=E(A[$]);for(let ve=0,we=Re.length;ve<we;ve++)x.push(Re[ve])}return new ir(T,M,x)}function X(y){return _(tt.clips[y],ne)}function se(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"skin":x.id=a(A.getAttribute("source")),x.skin=fe(A);break;case"morph":x.id=a(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}tt.controllers[y.getAttribute("id")]=x}function fe(y){let x={sources:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=r(A.textContent);break;case"source":let $=A.getAttribute("id");x.sources[$]=_e(A);break;case"joints":x.joints=me(A);break;case"vertex_weights":x.vertexWeights=Pe(A);break}}return x}function me(y){let x={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let $=A.getAttribute("semantic"),ee=a(A.getAttribute("source"));x.inputs[$]=ee;break}}return x}function Pe(y){let x={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let $=A.getAttribute("semantic"),ee=a(A.getAttribute("source")),Re=parseInt(A.getAttribute("offset"));x.inputs[$]={id:ee,offset:Re};break;case"vcount":x.vcount=o(A.textContent);break;case"v":x.v=o(A.textContent);break}}return x}function Ae(y){let x={id:y.id},T=tt.geometries[x.id];return y.skin!==void 0&&(x.skin=Te(y.skin),T.sources.skinIndices=x.skin.indices,T.sources.skinWeights=x.skin.weights),x}function Te(y){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=y.sources,A=y.vertexWeights,$=A.vcount,ee=A.v,Re=A.inputs.JOINT.offset,ve=A.inputs.WEIGHT.offset,we=y.sources[y.joints.inputs.JOINT],We=y.sources[y.joints.inputs.INV_BIND_MATRIX],ae=M[A.inputs.WEIGHT.id].array,Ve=0,Ne,Je,Ye;for(Ne=0,Ye=$.length;Ne<Ye;Ne++){let wt=$[Ne],vt=[];for(Je=0;Je<wt;Je++){let bt=ee[Ve+Re],ui=ee[Ve+ve],mn=ae[ui];vt.push({index:bt,weight:mn}),Ve+=2}for(vt.sort(zt),Je=0;Je<4;Je++){let bt=vt[Je];bt!==void 0?(T.indices.array.push(bt.index),T.weights.array.push(bt.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(y.bindShapeMatrix?T.bindMatrix=new nt().fromArray(y.bindShapeMatrix).transpose():T.bindMatrix=new nt().identity(),Ne=0,Ye=we.array.length;Ne<Ye;Ne++){let wt=we.array[Ne],vt=new nt().fromArray(We.array,Ne*We.stride).transpose();T.joints.push({name:wt,boneInverse:vt})}return T;function zt(wt,vt){return vt.weight-wt.weight}}function xe(y){return _(tt.controllers[y],Ae)}function V(y){let x={init_from:n(y,"init_from")[0].textContent};tt.images[y.getAttribute("id")]=x}function j(y){return y.build!==void 0?y.build:y.init_from}function pe(y){let x=tt.images[y];return x!==void 0?_(x,j):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function He(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":x.profile=De(A);break}}tt.effects[y.getAttribute("id")]=x}function De(y){let x={surfaces:{},samplers:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"newparam":gt(A,x);break;case"technique":x.technique=It(A);break;case"extra":x.extra=at(A);break}}return x}function gt(y,x){let T=y.getAttribute("sid");for(let M=0,A=y.childNodes.length;M<A;M++){let $=y.childNodes[M];if($.nodeType===1)switch($.nodeName){case"surface":x.surfaces[T]=Jt($);break;case"sampler2D":x.samplers[T]=O($);break}}}function Jt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"init_from":x.init_from=A.textContent;break}}return x}function O(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"source":x.source=A.textContent;break}}return x}function It(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=A.nodeName,x.parameters=rt(A);break;case"extra":x.extra=at(A);break}}return x}function rt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[A.nodeName]=Ke(A);break;case"transparent":x[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Ke(A)};break}}return x}function Ke(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"color":x[A.nodeName]=r(A.textContent);break;case"float":x[A.nodeName]=parseFloat(A.textContent);break;case"texture":x[A.nodeName]={id:A.getAttribute("texture"),extra:Ue(A)};break}}return x}function Ue(y){let x={technique:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"extra":Lt(A,x);break}}return x}function Lt(y,x){for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique":Oe(A,x);break}}}function Oe(y,x){for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?x.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?x.technique[A.nodeName]=0:x.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":x[A.nodeName]=Bt(A);break}}}function at(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique":x.technique=Ht(A);break}}return x}function Ht(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"double_sided":x[A.nodeName]=parseInt(A.textContent);break;case"bump":x[A.nodeName]=Bt(A);break}}return x}function Bt(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"texture":x[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Ue(A)};break}}return x}function L(y){return y}function b(y){return _(tt.effects[y],L)}function q(y){let x={name:y.getAttribute("name")};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":x.url=a(A.getAttribute("url"));break}}tt.materials[y.getAttribute("id")]=x}function te(y){let x,T=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":x=Wt;break;default:x=hn}return x}function oe(y){let x=b(y.url),T=x.profile.technique,M;switch(T.type){case"phong":case"blinn":M=new Un;break;case"lambert":M=new us;break;default:M=new qn;break}M.name=y.name||"";function A(ve,we=null){let We=x.profile.samplers[ve.id],ae=null;if(We!==void 0){let Ve=x.profile.surfaces[We.source];ae=pe(Ve.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ae=pe(ve.id);if(ae!==null){let Ve=te(ae);if(Ve!==void 0){let Ne=Ve.load(ae),Je=ve.extra;if(Je!==void 0&&Je.technique!==void 0&&l(Je.technique)===!1){let Ye=Je.technique;Ne.wrapS=Ye.wrapU?Xn:Sn,Ne.wrapT=Ye.wrapV?Xn:Sn,Ne.offset.set(Ye.offsetU||0,Ye.offsetV||0),Ne.repeat.set(Ye.repeatU||1,Ye.repeatV||1)}else Ne.wrapS=Xn,Ne.wrapT=Xn;return we!==null&&(Ne.colorSpace=we),Ne}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ae),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ve.id),null}let $=T.parameters;for(let ve in $){let we=$[ve];switch(ve){case"diffuse":we.color&&M.color.fromArray(we.color),we.texture&&(M.map=A(we.texture,Mt));break;case"specular":we.color&&M.specular&&M.specular.fromArray(we.color),we.texture&&(M.specularMap=A(we.texture));break;case"bump":we.texture&&(M.normalMap=A(we.texture));break;case"ambient":we.texture&&(M.lightMap=A(we.texture,Mt));break;case"shininess":we.float&&M.shininess&&(M.shininess=we.float);break;case"emission":we.color&&M.emissive&&M.emissive.fromArray(we.color),we.texture&&(M.emissiveMap=A(we.texture,Mt));break}}mt.colorSpaceToWorking(M.color,Mt),M.specular&&mt.colorSpaceToWorking(M.specular,Mt),M.emissive&&mt.colorSpaceToWorking(M.emissive,Mt);let ee=$.transparent,Re=$.transparency;if(Re===void 0&&ee&&(Re={float:1}),ee===void 0&&Re&&(ee={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ee&&Re)if(ee.data.texture)M.transparent=!0;else{let ve=ee.data.color;switch(ee.opaque){case"A_ONE":M.opacity=ve[3]*Re.float;break;case"RGB_ZERO":M.opacity=1-ve[0]*Re.float;break;case"A_ZERO":M.opacity=1-ve[3]*Re.float;break;case"RGB_ONE":M.opacity=ve[0]*Re.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ee.opaque)}M.opacity<1&&(M.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let ve=T.extra.technique;for(let we in ve){let We=ve[we];switch(we){case"double_sided":M.side=We===1?Fn:Wn;break;case"bump":M.normalMap=A(We.texture),M.normalScale=new $e(1,1);break}}}return M}function Q(y){return _(tt.materials[y],oe)}function Ge(y){let x={name:y.getAttribute("name")};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"optics":x.optics=ge(A);break}}tt.cameras[y.getAttribute("id")]=x}function ge(y){for(let x=0;x<y.childNodes.length;x++){let T=y.childNodes[x];switch(T.nodeName){case"technique_common":return Be(T)}}return{}}function Be(y){let x={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"perspective":case"orthographic":x.technique=M.nodeName,x.parameters=ke(M);break}}return x}function ke(y){let x={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[M.nodeName]=parseFloat(M.textContent);break}}return x}function ue(y){let x;switch(y.optics.technique){case"perspective":x=new Vt(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let T=y.optics.parameters.ymag,M=y.optics.parameters.xmag,A=y.optics.parameters.aspect_ratio;M=M===void 0?T*A:M,T=T===void 0?M/A:T,M*=.5,T*=.5,x=new _s(-M,M,T,-T,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:x=new Vt;break}return x.name=y.name||"",x}function Ee(y){let x=tt.cameras[y];return x!==void 0?_(x,ue):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Qe(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique_common":x=ze(A);break}}tt.lights[y.getAttribute("id")]=x}function ze(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=A.nodeName,x.parameters=be(A)}}return x}function be(y){let x={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"color":let $=r(A.textContent);x.color=new Xe().fromArray($),mt.colorSpaceToWorking(x.color,Mt);break;case"falloff_angle":x.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let ee=parseFloat(A.textContent);x.distance=ee?Math.sqrt(1/ee):0;break}}return x}function ot(y){let x;switch(y.technique){case"directional":x=new Vi;break;case"point":x=new gs;break;case"spot":x=new eo;break;case"ambient":x=new xs;break}return y.parameters.color&&x.color.copy(y.parameters.color),y.parameters.distance&&(x.distance=y.parameters.distance),x}function z(y){let x=tt.lights[y];return x!==void 0?_(x,ot):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function de(y){let x={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=n(y,"mesh")[0];if(T!==void 0){for(let M=0;M<T.childNodes.length;M++){let A=T.childNodes[M];if(A.nodeType!==1)continue;let $=A.getAttribute("id");switch(A.nodeName){case"source":x.sources[$]=_e(A);break;case"vertices":x.vertices=Ie(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(ce(A));break;default:console.log(A)}}tt.geometries[y.getAttribute("id")]=x}}function _e(y){let x={array:[],stride:3};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"float_array":x.array=r(M.textContent);break;case"Name_array":x.array=s(M.textContent);break;case"technique_common":let A=n(M,"accessor")[0];A!==void 0&&(x.stride=parseInt(A.getAttribute("stride")));break}}return x}function Ie(y){let x={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];M.nodeType===1&&(x[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return x}function ce(y){let x={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let $=a(A.getAttribute("source")),ee=A.getAttribute("semantic"),Re=parseInt(A.getAttribute("offset")),ve=parseInt(A.getAttribute("set")),we=ve>0?ee+ve:ee;x.inputs[we]={id:$,offset:Re},x.stride=Math.max(x.stride,Re+1),ee==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(A.textContent);break;case"p":x.p=o(A.textContent);break}}return x}function ie(y){let x={};for(let T=0;T<y.length;T++){let M=y[T];x[M.type]===void 0&&(x[M.type]=[]),x[M.type].push(M)}return x}function Fe(y){let x=0;for(let T=0,M=y.length;T<M;T++)y[T].hasUV===!0&&x++;x>0&&x<y.length&&(y.uvsNeedsFix=!0)}function it(y){let x={},T=y.sources,M=y.vertices,A=y.primitives;if(A.length===0)return{};let $=ie(A);for(let ee in $){let Re=$[ee];Fe(Re),x[ee]=Ct(Re,T,M)}return x}function Ct(y,x,T){let M={},A={array:[],stride:0},$={array:[],stride:0},ee={array:[],stride:0},Re={array:[],stride:0},ve={array:[],stride:0},we={array:[],stride:4},We={array:[],stride:4},ae=new Ot,Ve=[],Ne=0;for(let Je=0;Je<y.length;Je++){let Ye=y[Je],zt=Ye.inputs,wt=0;switch(Ye.type){case"lines":case"linestrips":wt=Ye.count*2;break;case"triangles":wt=Ye.count*3;break;case"polylist":for(let vt=0;vt<Ye.count;vt++){let bt=Ye.vcount[vt];switch(bt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(bt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Ye.type)}ae.addGroup(Ne,wt,Je),Ne+=wt,Ye.material&&Ve.push(Ye.material);for(let vt in zt){let bt=zt[vt];switch(vt){case"VERTEX":for(let ui in T){let mn=T[ui];switch(ui){case"POSITION":let Ps=A.array.length;if(lt(Ye,x[mn],bt.offset,A.array),A.stride=x[mn].stride,x.skinWeights&&x.skinIndices&&(lt(Ye,x.skinIndices,bt.offset,we.array),lt(Ye,x.skinWeights,bt.offset,We.array)),Ye.hasUV===!1&&y.uvsNeedsFix===!0){let ff=(A.array.length-Ps)/A.stride;for(let Uh=0;Uh<ff;Uh++)ee.array.push(0,0)}break;case"NORMAL":lt(Ye,x[mn],bt.offset,$.array),$.stride=x[mn].stride;break;case"COLOR":lt(Ye,x[mn],bt.offset,ve.array),ve.stride=x[mn].stride;break;case"TEXCOORD":lt(Ye,x[mn],bt.offset,ee.array),ee.stride=x[mn].stride;break;case"TEXCOORD1":lt(Ye,x[mn],bt.offset,Re.array),ee.stride=x[mn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ui)}}break;case"NORMAL":lt(Ye,x[bt.id],bt.offset,$.array),$.stride=x[bt.id].stride;break;case"COLOR":lt(Ye,x[bt.id],bt.offset,ve.array,!0),ve.stride=x[bt.id].stride;break;case"TEXCOORD":lt(Ye,x[bt.id],bt.offset,ee.array),ee.stride=x[bt.id].stride;break;case"TEXCOORD1":lt(Ye,x[bt.id],bt.offset,Re.array),Re.stride=x[bt.id].stride;break}}}return A.array.length>0&&ae.setAttribute("position",new ut(A.array,A.stride)),$.array.length>0&&ae.setAttribute("normal",new ut($.array,$.stride)),ve.array.length>0&&ae.setAttribute("color",new ut(ve.array,ve.stride)),ee.array.length>0&&ae.setAttribute("uv",new ut(ee.array,ee.stride)),Re.array.length>0&&ae.setAttribute("uv1",new ut(Re.array,Re.stride)),we.array.length>0&&ae.setAttribute("skinIndex",new ut(we.array,we.stride)),We.array.length>0&&ae.setAttribute("skinWeight",new ut(We.array,We.stride)),M.data=ae,M.type=y[0].type,M.materialKeys=Ve,M}function lt(y,x,T,M,A=!1){let $=y.p,ee=y.stride,Re=y.vcount;function ve(ae){let Ve=$[ae+T]*We,Ne=Ve+We;for(;Ve<Ne;Ve++)M.push(we[Ve]);if(A){let Je=M.length-We-1;Xt.setRGB(M[Je+0],M[Je+1],M[Je+2],Mt),M[Je+0]=Xt.r,M[Je+1]=Xt.g,M[Je+2]=Xt.b}}let we=x.array,We=x.stride;if(y.vcount!==void 0){let ae=0;for(let Ve=0,Ne=Re.length;Ve<Ne;Ve++){let Je=Re[Ve];if(Je===4){let Ye=ae+ee*0,zt=ae+ee*1,wt=ae+ee*2,vt=ae+ee*3;ve(Ye),ve(zt),ve(vt),ve(zt),ve(wt),ve(vt)}else if(Je===3){let Ye=ae+ee*0,zt=ae+ee*1,wt=ae+ee*2;ve(Ye),ve(zt),ve(wt)}else if(Je>4)for(let Ye=1,zt=Je-2;Ye<=zt;Ye++){let wt=ae+ee*0,vt=ae+ee*Ye,bt=ae+ee*(Ye+1);ve(wt),ve(vt),ve(bt)}ae+=ee*Je}}else for(let ae=0,Ve=$.length;ae<Ve;ae+=ee)ve(ae)}function Pn(y){return _(tt.geometries[y],it)}function In(y){let x={name:y.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Mr(M,x);break}}tt.kinematicsModels[y.getAttribute("id")]=x}function To(y){return y.build!==void 0?y.build:y}function li(y){return _(tt.kinematicsModels[y],To)}function Mr(y,x){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"joint":x.joints[M.getAttribute("sid")]=Ao(M);break;case"link":x.links.push($i(M));break}}}function Ao(y){let x;for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":x=Co(M);break}}return x}function Co(y){let x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);x.axis.fromArray(A);break;case"limits":let $=M.getElementsByTagName("max")[0],ee=M.getElementsByTagName("min")[0];x.limits.max=parseFloat($.textContent),x.limits.min=parseFloat(ee.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function $i(y){let x={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":x.attachments.push(Ro(M));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ki(M));break}}return x}function Ro(y){let x={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"link":x.links.push($i(M));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ki(M));break}}return x}function Ki(y){let x={type:y.nodeName},T=r(y.textContent);switch(x.type){case"matrix":x.obj=new nt,x.obj.fromArray(T).transpose();break;case"translate":x.obj=new U,x.obj.fromArray(T);break;case"rotate":x.obj=new U,x.obj.fromArray(T),x.angle=Kn.degToRad(T[3]);break}return x}function Po(y){let x={name:y.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":x.rigidBodies[M.getAttribute("name")]={},Io(M,x.rigidBodies[M.getAttribute("name")]);break}}tt.physicsModels[y.getAttribute("id")]=x}function Io(y,x){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"technique_common":ql(M,x);break}}}function ql(y,x){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"inertia":x.inertia=r(M.textContent);break;case"mass":x.mass=r(M.textContent)[0];break}}}function Yl(y){let x={bindJointAxis:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":x.bindJointAxis.push(jl(M));break}}tt.kinematicsScenes[a(y.getAttribute("url"))]=x}function jl(y){let x={target:y.getAttribute("target").split("/").pop()};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];x.axis=A.textContent;let $=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=$.substring(0,$.length-1);break}}return x}function Jl(y){return y.build!==void 0?y.build:y}function Zl(y){return _(tt.kinematicsScenes[y],Jl)}function $l(){let y=Object.keys(tt.kinematicsModels)[0],x=Object.keys(tt.kinematicsScenes)[0],T=Object.keys(tt.visualScenes)[0];if(y===void 0||x===void 0)return;let M=li(y),A=Zl(x),$=je(T),ee=A.bindJointAxis,Re={};for(let We=0,ae=ee.length;We<ae;We++){let Ve=ee[We],Ne=yt.querySelector('[sid="'+Ve.target+'"]');if(Ne){let Je=Ne.parentElement;ve(Ve.jointIndex,Je)}}function ve(We,ae){let Ve=ae.getAttribute("name"),Ne=M.joints[We];$.traverse(function(Je){Je.name===Ve&&(Re[We]={object:Je,transforms:w(ae),joint:Ne,position:Ne.zeroPosition})})}let we=new nt;Qn={joints:M&&M.joints,getJointValue:function(We){let ae=Re[We];if(ae)return ae.position;console.warn("THREE.ColladaLoader: Joint "+We+" doesn't exist.")},setJointValue:function(We,ae){let Ve=Re[We];if(Ve){let Ne=Ve.joint;if(ae>Ne.limits.max||ae<Ne.limits.min)console.warn("THREE.ColladaLoader: Joint "+We+" value "+ae+" outside of limits (min: "+Ne.limits.min+", max: "+Ne.limits.max+").");else if(Ne.static)console.warn("THREE.ColladaLoader: Joint "+We+" is static.");else{let Je=Ve.object,Ye=Ne.axis,zt=Ve.transforms;Y.identity();for(let wt=0;wt<zt.length;wt++){let vt=zt[wt];if(vt.sid&&vt.sid.indexOf(We)!==-1)switch(Ne.type){case"revolute":Y.multiply(we.makeRotationAxis(Ye,Kn.degToRad(ae)));break;case"prismatic":Y.multiply(we.makeTranslation(Ye.x*ae,Ye.y*ae,Ye.z*ae));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ne.type);break}else switch(vt.type){case"matrix":Y.multiply(vt.obj);break;case"translate":Y.multiply(we.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Y.scale(vt.obj);break;case"rotate":Y.multiply(we.makeRotationAxis(vt.obj,vt.angle));break}}Je.matrix.copy(Y),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Re[We].position=ae}}else console.log("THREE.ColladaLoader: "+We+" does not exist.")}}}function w(y){let x=[],T=yt.querySelector('[id="'+y.id+'"]');for(let M=0;M<T.childNodes.length;M++){let A=T.childNodes[M];if(A.nodeType!==1)continue;let $,ee;switch(A.nodeName){case"matrix":$=r(A.textContent);let Re=new nt().fromArray($).transpose();x.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Re});break;case"translate":case"scale":$=r(A.textContent),ee=new U().fromArray($),x.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ee});break;case"rotate":$=r(A.textContent),ee=new U().fromArray($);let ve=Kn.degToRad($[3]);x.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ee,angle:ve});break}}return x}function H(y){let x=y.getElementsByTagName("node");for(let T=0;T<x.length;T++){let M=x[T];M.hasAttribute("id")===!1&&M.setAttribute("id",c())}}let Y=new nt,J=new U;function G(y){let x={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new nt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":x.nodes.push(M.getAttribute("id")),G(M);break;case"instance_camera":x.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(he(M));break;case"instance_light":x.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(he(M));break;case"instance_node":x.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),x.matrix.multiply(Y.fromArray(A).transpose()),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),J.fromArray(A),x.matrix.multiply(Y.makeTranslation(J.x,J.y,J.z)),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let $=Kn.degToRad(A[3]);x.matrix.multiply(Y.makeRotationAxis(J.fromArray(A),$)),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),x.matrix.scale(J.fromArray(A)),x.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return ft(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):tt.nodes[x.id]=x,x}function he(y){let x={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let $=0;$<A.length;$++){let ee=A[$],Re=ee.getAttribute("symbol"),ve=ee.getAttribute("target");x.materials[Re]=a(ve)}break;case"skeleton":x.skeletons.push(a(M.textContent));break;default:break}}return x}function Se(y,x){let T=[],M=[],A,$,ee;for(A=0;A<y.length;A++){let we=y[A],We;if(ft(we))We=_t(we),Le(We,x,T);else if(Et(we)){let Ve=tt.visualScenes[we].children;for(let Ne=0;Ne<Ve.length;Ne++){let Je=Ve[Ne];if(Je.type==="JOINT"){let Ye=_t(Je.id);Le(Ye,x,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(A=0;A<x.length;A++)for($=0;$<T.length;$++)if(ee=T[$],ee.bone.name===x[A].name){M[A]=ee,ee.processed=!0;break}for(A=0;A<T.length;A++)ee=T[A],ee.processed===!1&&(M.push(ee),ee.processed=!0);let Re=[],ve=[];for(A=0;A<M.length;A++)ee=M[A],Re.push(ee.bone),ve.push(ee.boneInverse);return new Gr(Re,ve)}function Le(y,x,T){y.traverse(function(M){if(M.isBone===!0){let A;for(let $=0;$<x.length;$++){let ee=x[$];if(ee.name===M.name){A=ee.boneInverse;break}}A===void 0&&(A=new nt),T.push({bone:M,boneInverse:A,processed:!1})}})}function Ce(y){let x=[],T=y.matrix,M=y.nodes,A=y.type,$=y.instanceCameras,ee=y.instanceControllers,Re=y.instanceLights,ve=y.instanceGeometries,we=y.instanceNodes;for(let ae=0,Ve=M.length;ae<Ve;ae++)x.push(_t(M[ae]));for(let ae=0,Ve=$.length;ae<Ve;ae++){let Ne=Ee($[ae]);Ne!==null&&x.push(Ne.clone())}for(let ae=0,Ve=ee.length;ae<Ve;ae++){let Ne=ee[ae],Je=xe(Ne.id),Ye=Pn(Je.id),zt=qe(Ye,Ne.materials),wt=Ne.skeletons,vt=Je.skin.joints,bt=Se(wt,vt);for(let ui=0,mn=zt.length;ui<mn;ui++){let Ps=zt[ui];Ps.isSkinnedMesh&&(Ps.bind(bt,Je.skin.bindMatrix),Ps.normalizeSkinWeights()),x.push(Ps)}}for(let ae=0,Ve=Re.length;ae<Ve;ae++){let Ne=z(Re[ae]);Ne!==null&&x.push(Ne.clone())}for(let ae=0,Ve=ve.length;ae<Ve;ae++){let Ne=ve[ae],Je=Pn(Ne.id),Ye=qe(Je,Ne.materials);for(let zt=0,wt=Ye.length;zt<wt;zt++)x.push(Ye[zt])}for(let ae=0,Ve=we.length;ae<Ve;ae++)x.push(_t(we[ae]).clone());let We;if(M.length===0&&x.length===1)We=x[0];else{We=A==="JOINT"?new er:new rn;for(let ae=0;ae<x.length;ae++)We.add(x[ae])}return We.name=A==="JOINT"?y.sid:y.name,We.matrix.copy(T),We.matrix.decompose(We.position,We.quaternion,We.scale),We}let Ze=new qn({name:pn.DEFAULT_MATERIAL_NAME,color:16711935});function et(y,x){let T=[];for(let M=0,A=y.length;M<A;M++){let $=x[y[M]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[M]),T.push(Ze)):T.push(Q($))}return T}function qe(y,x){let T=[];for(let M in y){let A=y[M],$=et(A.materialKeys,x);if($.length===0&&(M==="lines"||M==="linestrips"?$.push(new fn):$.push(new Un)),M==="lines"||M==="linestrips")for(let we=0,We=$.length;we<We;we++){let ae=$[we];if(ae.isMeshPhongMaterial===!0||ae.isMeshLambertMaterial===!0){let Ve=new fn;Ve.color.copy(ae.color),Ve.opacity=ae.opacity,Ve.transparent=ae.transparent,$[we]=Ve}}let ee=A.data.attributes.skinIndex!==void 0,Re=$.length===1?$[0]:$,ve;switch(M){case"lines":ve=new jn(A.data,Re);break;case"linestrips":ve=new cs(A.data,Re);break;case"triangles":case"polylist":ee?ve=new Hr(A.data,Re):ve=new ht(A.data,Re);break}T.push(ve)}return T}function ft(y){return tt.nodes[y]!==void 0}function _t(y){return _(tt.nodes[y],Ce)}function kt(y){let x={name:y.getAttribute("name"),children:[]};H(y);let T=n(y,"node");for(let M=0;M<T.length;M++)x.children.push(G(T[M]));tt.visualScenes[y.getAttribute("id")]=x}function Rt(y){let x=new rn;x.name=y.name;let T=y.children;for(let M=0;M<T.length;M++){let A=T[M];x.add(_t(A.id))}return x}function Et(y){return tt.visualScenes[y]!==void 0}function je(y){return _(tt.visualScenes[y],Rt)}function Nt(y){let x=n(y,"instance_visual_scene")[0];return je(a(x.getAttribute("url")))}function xt(){let y=tt.clips;if(l(y)===!0){if(l(tt.animations)===!1){let x=[];for(let T in tt.animations){let M=E(T);for(let A=0,$=M.length;A<$;A++)x.push(M[A])}Ii.push(new ir("default",-1,x))}}else for(let x in y)Ii.push(X(x))}function ln(y){let x="",T=[y];for(;T.length;){let M=T.shift();M.nodeType===Node.TEXT_NODE?x+=M.textContent:(x+=`
`,T.push(...M.childNodes))}return x.trim()}if(e.length===0)return{scene:new bi};let ci=new DOMParser().parseFromString(e,"application/xml"),yt=n(ci,"COLLADA")[0],hi=ci.getElementsByTagName("parsererror")[0];if(hi!==void 0){let y=n(hi,"div")[0],x;return y?x=y.textContent:x=ln(hi),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}let Dt=yt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Dt);let cn=h(n(yt,"asset")[0]),hn=new ps(this.manager);hn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Wt;go&&(Wt=new go(this.manager),Wt.setPath(this.resourcePath||t));let Xt=new Xe,Ii=[],Qn={},df=0,tt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(yt,"library_animations","animation",m),f(yt,"library_animation_clips","animation_clip",k),f(yt,"library_controllers","controller",se),f(yt,"library_images","image",V),f(yt,"library_effects","effect",He),f(yt,"library_materials","material",q),f(yt,"library_cameras","camera",Ge),f(yt,"library_lights","light",Qe),f(yt,"library_geometries","geometry",de),f(yt,"library_nodes","node",G),f(yt,"library_visual_scenes","visual_scene",kt),f(yt,"library_kinematics_models","kinematics_model",In),f(yt,"library_physics_models","physics_model",Po),f(yt,"scene","instance_kinematics_scene",Yl),g(tt.animations,P),g(tt.clips,ne),g(tt.controllers,Ae),g(tt.images,j),g(tt.effects,L),g(tt.materials,oe),g(tt.cameras,ue),g(tt.lights,ot),g(tt.geometries,it),g(tt.visualScenes,Rt),xt(),$l();let Lo=Nt(n(yt,"scene")[0]);return Lo.animations=Ii,cn.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Lo.rotation.set(-Math.PI/2,0,0)),Lo.scale.multiplyScalar(cn.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ii},kinematics:Qn,library:tt,scene:Lo}}};var Zd=new U,sx=new Qt,Ul=new nt,Yi=new nt,Fl=new At,Ol=new U(1,1,1),Bl=new U,gr=class extends Ft{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}},kl=class extends gr{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}},zl=class extends gr{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}},_o=class extends gr{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink",this.name="",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(e,t){return super.copy(e,t),this.inertial={mass:e.inertial.mass,origin:{xyz:[...e.inertial.origin.xyz],rpy:[...e.inertial.origin.rpy]},inertia:{...e.inertial.inertia}},this}},xo=class extends gr{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new U(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.name="",this.jointValue=null,this.jointType="fixed",this.axis=new U(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.limit.effort=e.limit.effort,this.limit.velocity=e.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),Zd.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Zd,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Yi.compose(this.origPosition,this.origQuaternion,Ol),Fl.setFromEuler(sx.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Bl.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Ul.compose(Bl,Fl,Ol),Yi.premultiply(Ul),this.position.setFromMatrixPosition(Yi),this.rotation.setFromRotationMatrix(Yi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Yi.compose(this.origPosition,this.origQuaternion,Ol),Fl.setFromAxisAngle(this.axis,this.jointValue[2]),Bl.set(this.jointValue[0],this.jointValue[1],0),Ul.compose(Bl,Fl,Ol),Yi.premultiply(Ul),this.position.setFromMatrixPosition(Yi),this.rotation.setFromRotationMatrix(Yi),this.matrixWorldNeedsUpdate=!0,!0)}return t}},yo=class extends xo{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){let t=e.map(n=>n===null?null:n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}},Vl=class extends _o{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(let n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){let n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(let n in e){let s=e[n];Array.isArray(s)?t=this.setJointValue(n,...s)||t:t=this.setJointValue(n,s)||t}return t}};var Eh=new At,$d=new Qt;function ji(i){return i?i.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Kd(i,e,t=!1){t||i.rotation.set(0,0,0),$d.set(e[0],e[1],e[2],"ZYX"),Eh.setFromEuler($d),Eh.multiply(i.quaternion),i.quaternion.copy(Eh)}var wh=class{constructor(e){this.manager=e||bl,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,s){let r=this.manager,o=ys.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{let l=this.parse(c,this.workingPath||o);t(l),r.itemEnd(a)}).catch(c=>{s?s(c):console.error("URDFLoader: Error loading file.",c),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){let n=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,c={},l={},h={};function u(C){if(!/^package:\/\//.test(C))return t?t+C:C;let[P,E]=C.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(P)?n+"/"+E:n+"/"+P+"/"+E;if(typeof n=="function")return n(P)+"/"+E;if(typeof n=="object")return P in n?n[P]+"/"+E:(console.error(`URDFLoader : ${P} not found in provided package list.`),null)}function d(C){let P;C instanceof Document?P=[...C.children]:C instanceof Element?P=[C]:P=[...new DOMParser().parseFromString(C,"text/xml").children];let E=P.filter(R=>R.nodeName==="robot").pop();return f(E)}function f(C){let P=[...C.children],E=P.filter(N=>N.nodeName.toLowerCase()==="link"),R=P.filter(N=>N.nodeName.toLowerCase()==="joint"),I=P.filter(N=>N.nodeName.toLowerCase()==="material"),D=new Vl;D.robotName=C.getAttribute("name"),D.urdfRobotNode=C,I.forEach(N=>{let B=N.getAttribute("name");h[B]=m(N)});let F={},v={};E.forEach(N=>{let B=N.getAttribute("name"),W=C.querySelector(`child[link="${B}"]`)===null;c[B]=_(N,F,v,W?D:null)}),R.forEach(N=>{let B=N.getAttribute("name");l[B]=g(N)}),D.joints=l,D.links=c,D.colliders=v,D.visual=F;let S=Object.values(l);return S.forEach(N=>{N instanceof yo&&l[N.mimicJoint].mimicJoints.push(N)}),S.forEach(N=>{let B=new Set,W=Z=>{if(B.has(Z))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(Z),Z.mimicJoints.forEach(K=>{W(K)})};W(N)}),D.frames={...v,...F,...c,...l},D}function g(C){let P=[...C.children],E=C.getAttribute("type"),R,I=P.find(B=>B.nodeName.toLowerCase()==="mimic");I?(R=new yo,R.mimicJoint=I.getAttribute("joint"),R.multiplier=parseFloat(I.getAttribute("multiplier")||1),R.offset=parseFloat(I.getAttribute("offset")||0)):R=new xo,R.urdfNode=C,R.name=C.getAttribute("name"),R.urdfName=R.name,R.jointType=E;let D=null,F=null,v=[0,0,0],S=[0,0,0];P.forEach(B=>{let W=B.nodeName.toLowerCase();W==="origin"?(v=ji(B.getAttribute("xyz")),S=ji(B.getAttribute("rpy"))):W==="child"?F=c[B.getAttribute("link")]:W==="parent"?D=c[B.getAttribute("link")]:W==="limit"&&(R.limit.lower=parseFloat(B.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(B.getAttribute("upper")||R.limit.upper),R.limit.effort=parseFloat(B.getAttribute("effort")||R.limit.effort),R.limit.velocity=parseFloat(B.getAttribute("velocity")||R.limit.velocity))}),D.add(R),R.add(F),Kd(R,S),R.position.set(v[0],v[1],v[2]);let N=P.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(N){let B=N.getAttribute("xyz").split(/\s+/g).map(W=>parseFloat(W));R.axis=new U(B[0],B[1],B[2]),R.axis.normalize()}return R}function _(C,P,E,R=null){R===null&&(R=new _o);let I=[...C.children];R.name=C.getAttribute("name"),R.urdfName=R.name,R.urdfNode=C;let D=I.find(F=>F.nodeName.toLowerCase()==="inertial");return D&&[...D.children].forEach(F=>{let v=F.nodeName.toLowerCase();v==="origin"?(R.inertial.origin.xyz=ji(F.getAttribute("xyz")),R.inertial.origin.rpy=ji(F.getAttribute("rpy"))):v==="mass"?R.inertial.mass=parseFloat(F.getAttribute("value"))||0:v==="inertia"&&(R.inertial.inertia.ixx=parseFloat(F.getAttribute("ixx"))||0,R.inertial.inertia.ixy=parseFloat(F.getAttribute("ixy"))||0,R.inertial.inertia.ixz=parseFloat(F.getAttribute("ixz"))||0,R.inertial.inertia.iyy=parseFloat(F.getAttribute("iyy"))||0,R.inertial.inertia.iyz=parseFloat(F.getAttribute("iyz"))||0,R.inertial.inertia.izz=parseFloat(F.getAttribute("izz"))||0)}),r&&I.filter(v=>v.nodeName.toLowerCase()==="visual").forEach(v=>{let S=p(v,h);if(R.add(S),v.hasAttribute("name")){let N=v.getAttribute("name");S.name=N,S.urdfName=N,P[N]=S}}),o&&I.filter(v=>v.nodeName.toLowerCase()==="collision").forEach(v=>{let S=p(v);if(R.add(S),v.hasAttribute("name")){let N=v.getAttribute("name");S.name=N,S.urdfName=N,E[N]=S}}),R}function m(C){let P=[...C.children],E=new Un;return E.name=C.getAttribute("name")||"",P.forEach(R=>{let I=R.nodeName.toLowerCase();if(I==="color"){let D=R.getAttribute("rgba").split(/\s/g).map(F=>parseFloat(F));E.color.setRGB(D[0],D[1],D[2]),E.opacity=D[3],E.transparent=D[3]<1,E.depthWrite=!E.transparent}else if(I==="texture"){let D=R.getAttribute("filename");if(D){let F=new ps(a),v=u(D);E.map=F.load(v),E.map.colorSpace=Mt}}}),E}function p(C,P={}){let E=C.nodeName.toLowerCase()==="collision",R=[...C.children],I=null,D=R.filter(v=>v.nodeName.toLowerCase()==="material")[0];if(D){let v=D.getAttribute("name");v&&v in P?I=P[v]:I=m(D)}else I=new Un;let F=E?new kl:new zl;return F.urdfNode=C,R.forEach(v=>{let S=v.nodeName.toLowerCase();if(S==="geometry"){let N=v.children[0].nodeName.toLowerCase();if(N==="mesh"){let B=v.children[0].getAttribute("filename"),W=u(B);if(W!==null){let Z=v.children[0].getAttribute("scale");if(Z){let K=ji(Z);F.scale.set(K[0],K[1],K[2])}s(W,a,I,(K,k)=>{k?console.error("URDFLoader: Error loading mesh.",k):K&&(K.position.set(0,0,0),K.quaternion.identity(),F.add(K))})}}else if(N==="box"){let B=new ht;B.geometry=new wn(1,1,1),B.material=I;let W=ji(v.children[0].getAttribute("size"));B.scale.set(W[0],W[1],W[2]),F.add(B)}else if(N==="sphere"){let B=new ht;B.geometry=new zi(1,30,30),B.material=I;let W=parseFloat(v.children[0].getAttribute("radius"))||0;B.scale.set(W,W,W),F.add(B)}else if(N==="cylinder"){let B=new ht;B.geometry=new ki(1,1,1,30),B.material=I;let W=parseFloat(v.children[0].getAttribute("radius"))||0,Z=parseFloat(v.children[0].getAttribute("length"))||0;B.scale.set(W,Z,W),B.rotation.set(Math.PI/2,0,0),F.add(B)}}else if(S==="origin"){let N=ji(v.getAttribute("xyz")),B=ji(v.getAttribute("rpy"));F.position.set(N[0],N[1],N[2]),F.rotation.set(0,0,0),Kd(F,B)}}),F}return d(e)}defaultMeshLoader(e,t,n,s){/\.stl$/i.test(e)?new Nl(t).load(e,o=>{let a=new ht(o,n||new Un);s(a)},null,o=>s(null,o)):/\.dae$/i.test(e)?new Dl(t).load(e,o=>s(o.scene),null,o=>s(null,o)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}},Qd=wh;var rx=/^[og]\s*(.+)?/,ox=/^mtllib /,ax=/^usemtl /,lx=/^usemap /,ef=/\s+/,tf=new U,Th=new U,nf=new U,sf=new U,Bn=new U,Hl=new Xe;function cx(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){let s=this.vertices,r=this.object.geometry.normals;tf.fromArray(s,e),Th.fromArray(s,t),nf.fromArray(s,n),Bn.subVectors(nf,Th),sf.subVectors(tf,Th),Bn.cross(sf),Bn.normalize(),r.push(Bn.x,Bn.y,Bn.z),r.push(Bn.x,Bn.y,Bn.z),r.push(Bn.x,Bn.y,Bn.z)},addColor:function(e,t,n){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,c,l){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),a!==void 0&&a!==""){let g=this.normals.length;u=this.parseNormalIndex(a,g),d=this.parseNormalIndex(c,g),f=this.parseNormalIndex(l,g),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(s!==void 0&&s!==""){let g=this.uvs.length;u=this.parseUVIndex(s,g),d=this.parseUVIndex(r,g),f=this.parseUVIndex(o,g),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}var Gl=class extends pn{constructor(e){super(e),this.materials=null}load(e,t,n,s){let r=this,o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new cx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),s=[];for(let a=0,c=n.length;a<c;a++){let l=n[a].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!=="#")if(h==="v"){let u=l.split(ef);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Hl.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Mt),t.colors.push(Hl.r,Hl.g,Hl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=l.slice(1).trim().split(ef),f=[];for(let _=0,m=d.length;_<m;_++){let p=d[_];if(p.length>0){let C=p.split("/");f.push(C)}}let g=f[0];for(let _=1,m=f.length-1;_<m;_++){let p=f[_],C=f[_+1];t.addFace(g[0],p[0],C[0],g[1],p[1],C[1],g[2],p[2],C[2])}}else if(h==="l"){let u=l.substring(1).trim().split(" "),d=[],f=[];if(l.indexOf("/")===-1)d=u;else for(let g=0,_=u.length;g<_;g++){let m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){let d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=rx.exec(l))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(ax.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(ox.test(l))t.materialLibraries.push(l.substring(7).trim());else if(lx.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){let d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let r=new rn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){let l=t.objects[a],h=l.geometry,u=l.materials,d=h.type==="Line",f=h.type==="Points",g=!1;if(h.vertices.length===0)continue;let _=new Ot;_.setAttribute("position",new ut(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new ut(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new ut(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new ut(h.uvs,2));let m=[];for(let C=0,P=u.length;C<P;C++){let E=u[C],R=E.name+"_"+E.smooth+"_"+g,I=t.materials[R];if(this.materials!==null){if(I=this.materials.create(E.name),d&&I&&!(I instanceof fn)){let D=new fn;dn.prototype.copy.call(D,I),D.color.copy(I.color),I=D}else if(f&&I&&!(I instanceof Jn)){let D=new Jn({size:10,sizeAttenuation:!1});dn.prototype.copy.call(D,I),D.color.copy(I.color),D.map=I.map,I=D}}I===void 0&&(d?I=new fn:f?I=new Jn({size:1,sizeAttenuation:!1}):I=new Un,I.name=E.name,I.flatShading=!E.smooth,I.vertexColors=g,t.materials[R]=I),m.push(I)}let p;if(m.length>1){for(let C=0,P=u.length;C<P;C++){let E=u[C];_.addGroup(E.groupStart,E.groupCount,C)}d?p=new jn(_,m):f?p=new Mi(_,m):p=new ht(_,m)}else d?p=new jn(_,m[0]):f?p=new Mi(_,m[0]):p=new ht(_,m[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){let a=new Jn({size:1,sizeAttenuation:!1}),c=new Ot;c.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ut(t.colors,3)),a.vertexColors=!0);let l=new Mi(c,a);r.add(l)}return r}};function _r(i){let e=new Set,t=new Set,n=new Set;i?.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){t.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)}}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i?.removeFromParent()}async function rf(i,e="visual"){if(!["visual","collision"].includes(e))throw Error("Unknown URDF geometry mode");let t=await fetch(i);if(!t.ok)throw Error("URDF \uBAA8\uB378 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let n=await t.json(),s=new URL(n.urdf,new URL(i,location.href)),r=await fetch(s);if(!r.ok)throw Error("URDF \uD30C\uC77C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let o=await r.text(),a=new DOMParser().parseFromString(o,"text/xml");if(a.querySelector("parsererror")||a.documentElement.tagName!=="robot")throw Error("\uC798\uBABB\uB41C URDF\uC785\uB2C8\uB2E4.");if(!a.querySelector(`link > ${e}`))throw Error(`URDF\uC5D0 ${e} \uD615\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`);let c=new sr,l=[],h=new Qd(c);h.packages=Object.fromEntries(Object.entries(n.packages||{}).map(([f,g])=>[f,new URL(g,new URL(i,location.href)).href.replace(/\/$/,"")])),h.parseVisual=e==="visual",h.parseCollision=e==="collision";let u=h.loadMeshCb;h.loadMeshCb=(f,g,_,m)=>{let p=new URL(f,location.href).pathname.split(".").at(-1).toLowerCase();p==="obj"?new Gl(g).load(f,C=>{C.traverse(P=>{P.isMesh&&(P.material=_)}),m(C)},void 0,C=>m(null,C)):["stl","dae"].includes(p)?u(f,g,_,m):(l.push(f),m(null,Error("Unsupported mesh: "+p)))};let d;return await new Promise((f,g)=>{c.onError=_=>l.push(_),c.onLoad=()=>l.length?g(Error("Mesh\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+l[0])):f(),c.itemStart("urdf-parse");try{d=h.parse(a,s.href.slice(0,s.href.lastIndexOf("/")+1))}catch(_){g(_)}finally{c.itemEnd("urdf-parse")}}).catch(f=>{throw _r(d),f}),e==="collision"&&d.traverse(f=>{f.isMesh&&(f.material=new Kt({color:6019784,roughness:.65,transparent:!0,opacity:.65,wireframe:!0}))}),d.userData.manifest=n,d.userData.geometryMode=e,d}function Ah(i,e,t){if(!Array.isArray(e.joint_names)||e.joint_names.length!==e.dof)throw Error("\uAD00\uC808 \uC774\uB984\uC774 \uAE30\uB85D\uB418\uC9C0 \uC54A\uC740 \uACB0\uACFC\uC785\uB2C8\uB2E4.");let n=Math.floor(t),s=Math.min(n+1,e.q.length-1),r=t-n,o=e.floating_base?7:0,a={...e.locked_joints||{}};for(let c=0;c<e.joint_names.length;c++){let l=e.joint_names[c];if(!i.joints[l])throw Error("URDF\uC5D0 \uAE30\uB85D\uB41C \uAD00\uC808\uC774 \uC5C6\uC2B5\uB2C8\uB2E4: "+l);i.joints[l].ignoreLimits=!0,a[l]=Kn.lerp(e.q[n][o+c],e.q[s][o+c],r)}i.setJointValues(a),e.floating_base?(i.position.fromArray(e.q[n]).lerp(new U().fromArray(e.q[s]),r),i.quaternion.fromArray(e.q[n],3).slerp(new At().fromArray(e.q[s],3),r)):(i.position.fromArray(e.base_pose?.position||[0,0,0]),i.quaternion.fromArray(e.base_pose?.quaternion_xyzw||[0,0,0,1])),i.updateMatrixWorld(!0)}var re=i=>document.getElementById(i),ye,tn=0,Cs=!0,xr=!0,af=1,Ch=0,vr=!1,Xl=[],Pi,Ji=[],Wl,oi=[],bo=[],vo=0,ai=new bi;ai.fog=new ls(791587,.06);var Zi=new Vt(39,1,.01,100);Zi.up.set(0,0,1);var Rn,Ih=!1;try{Rn=new wl({antialias:!0,alpha:!0})}catch{Ih=!0;let i=document.createElement("canvas");i.setAttribute("aria-label","CPU \uD22C\uC601 3D \uB85C\uBD07 \uBDF0\uC5B4"),Rn={domElement:i,setPixelRatio(){},setClearColor(){},setSize(e,t){i.width=e*Math.min(devicePixelRatio,2),i.height=t*Math.min(devicePixelRatio,2)},render:px}}Rn.setPixelRatio(Math.min(devicePixelRatio,2));Rn.setClearColor(791587,0);Rn.outputColorSpace=Mt;Rn.toneMapping=Fa;Rn.toneMappingExposure=1.25;re("viewport").prepend(Rn.domElement);var Rs=new Ll(Zi,Rn.domElement);Rs.enableDamping=!0;Rs.dampingFactor=.07;Rs.minDistance=.25;Rs.maxDistance=12;ai.add(new xs(12176613,1.7));var Lh=new Vi(14543615,3.5);Lh.position.set(3,-2,5);ai.add(Lh);var Nh=new Vi(4900794,1.8);Nh.position.set(-2,3,2);ai.add(Nh);var vn=new no(new U(0,1,0),new U,.5,15689788,.08,.04);vn.visible=!1;for(let i of[vn.line,vn.cone])i.material.depthTest=!1,i.renderOrder=1100;ai.add(vn);var kn,br,yr=[2473891,16032576,10979573],wo=kd(ai,Rn,Lh,Nh,Ih);wo.set("studio");var Ri=new rn;ai.add(Ri);var hx=new U(0,1,0),Cn=new U(0,0,.4),Mo=1;re("scene-style").onchange=()=>wo.set(re("scene-style").value,kn);function lf(){let i=re("viewport").getBoundingClientRect();Rn.setSize(i.width,i.height),Zi.aspect=i.width/i.height,Zi.updateProjectionMatrix()}new ResizeObserver(lf).observe(re("viewport"));lf();function So(i){re("toast").textContent=i,re("toast").classList.add("visible"),setTimeout(()=>re("toast").classList.remove("visible"),6e3)}function ux(i){return i==null?"\u2014":Math.abs(i)<.001&&i!==0?i.toExponential(1):i.toFixed(4)}function dx(i){return i.engine==="mujoco_contact_recording"?"MuJoCo \xB7 \uC811\uCD09 \uB3D9\uC5ED\uD559":i.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uBBF8\uB9AC\uBCF4\uAE30":i.engine==="cito_trajectory"?"CITO \xB7 \uCD5C\uC801\uD654 \uADA4\uC801":i.live?"MuJoCo \xB7 \uC0C8 \uACC4\uC0B0 \uACB0\uACFC":"MuJoCo \xB7 \uACC4\uC0B0 \uACB0\uACFC"}function cf(){Rs.target.copy(Cn),Zi.position.copy(Cn).add(new U(1.6,-2.4,1.6).multiplyScalar(Mo)),Rs.update()}function fx(i){for(++vo,bo=[];Ri.children.length;)_r(Ri.children[0]);Xl=[],Pi=void 0,br=new rn,Ri.add(br);for(let[c,l]of(i.contact_contraction?.groups||[]).entries()){let h=new rn;h.userData.contactGroup=l;let u=yr[c%yr.length],d=new Mi(new Ot().setFromPoints(l.target_points_m.map(g=>new U(...g))),new Jn({color:u,size:.007,depthTest:!1}));d.userData.dense=!0,d.renderOrder=1001,h.add(d);let f=new ht(new zi(.012,14,10),new qn({color:u,depthTest:!1}));f.position.fromArray(l.target_anchor_m),f.userData.anchor=!0,f.renderOrder=1002,h.add(f),br.add(h)}if(re("contraction-state").replaceChildren(),i.contact_contraction){let c=i.contact_contraction;re("contraction-state").append(` \xB7 ${c.dense_sample_count} samples \u2192 ${c.contracted_contact_count} anchors \u2192 3 arms \xB7 `);for(let[l,h]of c.groups.entries()){let u=document.createElement("span");u.style.color="#"+yr[l%yr.length].toString(16).padStart(6,"0"),u.textContent=` ${h.group_id}@${h.link_id} \u2192 ${c.assignment.find(d=>d.group_id===h.group_id).arm_id} `,re("contraction-state").append(u)}}for(let c of(i.instances?.some(l=>["static_jig","articulated_object"].includes(l.role))?[]:i.environment)||[]){if(c.type!=="box")continue;let l=new ht(new wn(...c.size),new Kt({color:c.color,transparent:!0,opacity:.6}));l.position.fromArray(c.position),c.quaternion_xyzw&&l.quaternion.fromArray(c.quaternion_xyzw),Ri.add(l)}let e=i.positions[0].map(c=>new U(...c)),t=new En().setFromPoints(e);Cn=t.getCenter(new U),Mo=Math.max(.4,t.getSize(new U).length()*.65);let n=Math.max(.009,Math.min(.022,Mo*.018)),s=new Kt({color:9939389,metalness:.48,roughness:.32}),r=new Kt({color:2452597,metalness:.5,roughness:.3}),o=new Kt({color:15776376,metalness:.3,roughness:.32,emissive:4399881,emissiveIntensity:.25});i.edges.forEach(([c,l])=>{let h=new ht(new ki(n*.75,n*.75,1,12),s);Ri.add(h),Xl.push({mesh:h,a:c,b:l,cylinder:!0})});let a=new Set(i.link_names.map((c,l)=>c===i.frame||c.endsWith("link2")?l:-1));if(i.link_names.forEach((c,l)=>{if(i.object?.index===l)return;let h=new ht(new zi(n*(a.has(l)?1.6:1.25),18,12),a.has(l)?o:r);Ri.add(h),Xl.push({mesh:h,a:l})}),i.object){Pi=new ht(new wn(...i.object.size),new Kt({color:15841913,metalness:.15,roughness:.45,transparent:!0,opacity:.8})),Ri.add(Pi);let c=new jn(new Jr(Pi.geometry),new fn({color:16767402}));Pi.add(c)}kn&&(ai.remove(kn),kn.geometry.dispose()),kn=new to(Mo*5,20,3559532,1912904),kn.rotation.x=Math.PI/2,kn.position.set(Cn.x,Cn.y,Math.min(0,t.min.z)-.005),kn.material.transparent=!0,kn.material.opacity=.8,ai.add(kn),wo.set(re("scene-style")?.value||"studio",kn),cf()}async function hf(){let i=++vo,e=ye,t=re("geometry-mode").value;if(bo.forEach(n=>_r(n.robot)),bo=[],re("geometry-status").dataset.state="loading",Rh(tn),t==="skeleton"){re("geometry-status").textContent=e.id==="dual_cito"?"\uB450 Cartesian arm\uACFC \uBB3C\uCCB4\uC758 \uC88C\uD45C \uC7AC\uC0DD\uC785\uB2C8\uB2E4. \uC774 \uC81C\uD55C \uBAA8\uB378\uC5D0\uB294 \uC678\uD615 mesh\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"URDF \uB9C1\uD06C \uC88C\uD45C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. Visual \uB610\uB294 collision\uC744 \uC120\uD0DD\uD558\uBA74 \uC6D0\uBCF8 \uD615\uC0C1\uC744 \uBD88\uB7EC\uC635\uB2C8\uB2E4.",re("geometry-status").dataset.state="skeleton",re("loading").classList.add("hidden");return}re("geometry-status").textContent="URDF\uC640 mesh\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4\u2026",re("loading").classList.remove("hidden");try{let n=e.instances||[{manifest:`./models/${e.id}/model.json`}],s=await Promise.allSettled(n.map(async a=>{let c=await rf(a.manifest,t);wo.materialize(c,a.role,t);let l=e.instances?{...a,q:e.q.map(h=>a.q_indices.map(u=>h[u]))}:e;try{Ah(c,l,tn)}catch(h){throw _r(c),h}return{robot:c,recording:l}})),r=s.filter(a=>a.status==="fulfilled").map(a=>a.value),o=s.find(a=>a.status==="rejected");if(i!==vo||e!==ye||o){if(r.forEach(a=>_r(a.robot)),o)throw o.reason;return}bo=r,r.forEach(a=>Ri.add(a.robot)),re("geometry-status").textContent=Ih?"URDF/mesh \uB85C\uB4DC \uC644\uB8CC. WebGL\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4 \uB9C1\uD06C \uC88C\uD45C\uB97C CPU\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4.":t==="collision"?"URDF collision \uD615\uC0C1\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uD615\uC0C1 \uD45C\uC2DC\uB294 \uC811\uCD09 \uACC4\uC0B0\xB7\uCDA9\uB3CC \uAC80\uC99D \uACB0\uACFC\uC640 \uBCC4\uAC1C\uC785\uB2C8\uB2E4.":e.engine==="mujoco_contact_recording"?e.scenario==="mobile_panel"?"\uACF5\uC2DD RBY1 URDF\xB7mesh, \uCC28\uB3D9\uAD6C\uB3D9 \uBAA8\uBC14\uC77C \uBCA0\uC774\uC2A4\uC640 \uACE0\uC815 Panda\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4.":e.free_articulated_object?"\uC790\uC720 \uBCF8\uCCB4+\uB0B4\uBD80 \uAD00\uC808\uC758 \uC2E4\uC81C \uB3D9\uC5ED\uD559, \uC138 \uD314\uC758 \uB9C1\uD06C\uBCC4 contracted contact realization\uC785\uB2C8\uB2E4.":e.articulated_object?"\uC218\uB3D9 \uAD00\uC808\uC758 URDF\uC640 \uCE21\uC815\uB41C \uC6C0\uC9C1\uC784\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uBB3C\uCCB4 actuator \uC5C6\uC774 \uB85C\uBD07 \uC811\uCD09\uC73C\uB85C \uAD6C\uB3D9\uD588\uC2B5\uB2C8\uB2E4.":e.scenario==="panel_fixture"?"\uC6D0\uBCF8 Panda URDF\xB7mesh, \uC790\uC720 \uD328\uB110 URDF\uC640 \uACE0\uC815 \uC9C0\uADF8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC18C\uD615 \uC811\uCD09 refinement \uD6C4 \uC2E4\uD589\uD55C \uAE30\uB85D\uC785\uB2C8\uB2E4.":e.scenario==="table_assembly"?"Panda 3\uB300\uC640 \uB450 \uC790\uC720 \uBD80\uD488\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4. \uC0C1\uD310\xB7\uB2E4\uB9AC\uC758 visual/collision URDF\uC5D0 \uBE48 socket\uACFC peg \uD615\uC0C1\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.":"3\uAC1C URDF \uD314\uACFC \uB3C4\uAD6C\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4. Point\uB294 \uAD6C\uD615 tool, gripper\uB294 \uB450 \uC190\uAC00\uB77D \uC811\uCD09, suction\uC740 \uC555\uB825 \uC81C\uD55C seal \uBAA8\uB378\uC785\uB2C8\uB2E4.":"URDF visual\xB7mesh\uC758 origin\uACFC scale\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uAE30\uB85D\uB41C \uC2DC\uBBAC\uB808\uC774\uC158\uC740 \uAD00\uC808 \uCD94\uC885 \uAC80\uC99D\uC785\uB2C8\uB2E4.",re("geometry-status").dataset.state="ready",re("geometry-status").dataset.model=e.id,Rh(tn)}catch(n){if(i!==vo)return;re("geometry-status").textContent=n.message+" \uB9C1\uD06C \uC88C\uD45C \uD45C\uC2DC\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uB124\uD2B8\uC6CC\uD06C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",re("geometry-status").dataset.state="error",So(n.message)}finally{i===vo&&re("loading").classList.add("hidden")}}function Rh(i){if(!ye)return;let e=Math.floor(i),t=Math.min(e+1,ye.times.length-1),n=i-e,s=ye.positions[e].map((c,l)=>new U(...c).lerp(new U(...ye.positions[t][l]),n));Xl.forEach(c=>{let l=s[c.a];if(!c.cylinder){c.mesh.visible=re("geometry-mode").value==="skeleton",c.mesh.position.copy(l);return}let h=s[c.b],u=h.clone().sub(l),d=u.length();c.mesh.visible=re("geometry-mode").value==="skeleton"&&d>1e-6,c.mesh.position.copy(l).add(h).multiplyScalar(.5),c.mesh.scale.set(1,d,1),d>1e-6&&c.mesh.quaternion.setFromUnitVectors(hx,u.normalize())}),Pi&&(Pi.position.copy(s[ye.object.index]),ye.object.poses&&Pi.quaternion.fromArray(ye.object.poses[e],3).slerp(new At().fromArray(ye.object.poses[t],3),n)),bo.forEach(c=>Ah(c.robot,c.recording,i));for(let c of br?.children||[]){let l=c.userData.contactGroup,h=ye.objects?.find(g=>g.id===l.link_id);if(!h)continue;let u=h.poses[e],d=h.poses[t];c.position.fromArray(u).lerp(new U().fromArray(d),n),c.quaternion.fromArray(u,3).slerp(new At().fromArray(d,3),n);let f=re("contact-display").value;for(let g of c.children)g.visible=f==="both"||g.userData.dense&&f==="dense"||g.userData.anchor&&f==="contracted"}let r=ye.times[e]*(1-n)+ye.times[t]*n,o=ye.external_disturbances||[],a=o.find(c=>r>=c.start&&r<=c.start+c.duration);if(vn.visible=!1,a&&ye.objects?.[0]?.poses){let c=ye.objects[0],l=c.poses[e],h=c.poses[t],u=new At().fromArray(l,3).slerp(new At().fromArray(h,3),n),d=new U(...l.slice(0,3)).lerp(new U(...h.slice(0,3)),n).add(new U(...a.point_body_m).applyQuaternion(u)),f=Math.sin(Math.PI*(r-a.start)/a.duration)**2,g=new U(...a.force_world_N).multiplyScalar(f);g.length()>.01&&(vn.position.copy(d),vn.setDirection(g.clone().normalize()),vn.setLength(.12+g.length()*.015,.08,.04),vn.visible=!0)}re("disturbance-state").hidden=!o.length,re("disturbance-state").dataset.active=String(vn.visible),re("disturbance-state").textContent=a?`\uC678\uB825 \uC801\uC6A9 \uC911 \xB7 ${(Math.sin(Math.PI*(r-a.start)/a.duration)**2*Math.hypot(...a.force_world_N)).toFixed(2)} N \xB7 world frame`:o.length?`\uC678\uB825: ${o.map(c=>`${c.start}\u2013${c.start+c.duration} s / \uCD5C\uB300 ${Math.hypot(...c.force_world_N)} N`).join(", ")}`:"",oi=s}function px(){let i=Rn.domElement,e=i.getContext("2d"),t=i.width,n=i.height,s=Math.min(devicePixelRatio,2);if(e.clearRect(0,0,t,n),wo.mode==="studio"&&(e.fillStyle="#dce3e9",e.fillRect(0,0,t,n)),!ye||!oi.length)return;Zi.updateMatrixWorld();let r=h=>{let u=h.clone().project(Zi);return[(u.x+1)*t/2,(1-u.y)*n/2,u.z]},o=(h,u,d,f)=>{let g=r(h),_=r(u);g[2]>1||_[2]>1||(e.strokeStyle=d,e.lineWidth=f*s,e.lineCap="round",e.beginPath(),e.moveTo(g[0],g[1]),e.lineTo(_[0],_[1]),e.stroke())},a=kn.position.z,c=Mo*2.5;for(let h=-10;h<=10;++h){let u=c*h/10,d=h===0?"#36506c":"#1d3048";o(new U(Cn.x-c,Cn.y+u,a),new U(Cn.x+c,Cn.y+u,a),d,.8),o(new U(Cn.x+u,Cn.y-c,a),new U(Cn.x+u,Cn.y+c,a),d,.8)}for(let h of ye.environment||[]){if(h.type!=="box")continue;let u=Array.from({length:8},(d,f)=>new U(...h.size.map((g,_)=>(f>>_&1?.5:-.5)*g)).applyQuaternion(new At().fromArray(h.quaternion_xyzw||[0,0,0,1])).add(new U(...h.position)));u.forEach((d,f)=>{for(let g=0;g<3;g++)f&1<<g||o(d,u[f|1<<g],"#64768b",1)})}if([...ye.edges].sort((h,u)=>r(oi[u[0]])[2]-r(oi[h[0]])[2]).forEach(([h,u])=>{o(oi[h],oi[u],"#546b82",10),o(oi[h],oi[u],"#aabbd0",5)}),oi.forEach((h,u)=>{if(ye.object?.index===u)return;let d=r(h);if(d[2]>1)return;let f=ye.link_names[u]===ye.frame||ye.link_names[u].endsWith("link2");e.fillStyle=f?"#f0ba78":"#3da99e",e.strokeStyle="#112d3b",e.lineWidth=2*s,e.beginPath(),e.arc(d[0],d[1],(f?6:4)*s,0,Math.PI*2),e.fill(),e.stroke()}),ye.object){let h=oi[ye.object.index],u=ye.object.size,d=Array.from({length:8},(f,g)=>new U(...u.map((_,m)=>(g>>m&1?.5:-.5)*_)).applyQuaternion(Pi.quaternion).add(h));d.forEach((f,g)=>{for(let _=0;_<3;_++)g&1<<_||o(f,d[g|1<<_],"#f1ba79",2)})}for(let h of ye.objects||[]){let u=Math.floor(tn),d=Math.min(u+1,ye.times.length-1),f=tn-u,g=new U().fromArray(h.poses[u]).lerp(new U().fromArray(h.poses[d]),f),_=new At().fromArray(h.poses[u],3).slerp(new At().fromArray(h.poses[d],3),f);for(let m of h.boxes){let p=new At().fromArray(m.quaternion_xyzw),C=Array.from({length:8},(P,E)=>new U(...m.size.map((R,I)=>(E>>I&1?.5:-.5)*R)).applyQuaternion(p).add(new U(...m.position)).applyQuaternion(_).add(g));C.forEach((P,E)=>{for(let R=0;R<3;R++)E&1<<R||o(P,C[E|1<<R],h.id==="tabletop"?"#f1ba79":"#d49965",2)})}}for(let h of br?.children||[]){h.updateMatrixWorld(!0);let u=h.userData.contactGroup,d=re("contact-display").value;if(d!=="off"){e.fillStyle="#"+yr[br.children.indexOf(h)%yr.length].toString(16).padStart(6,"0");for(let f of d==="dense"||d==="both"?u.target_points_m:[]){let g=r(h.localToWorld(new U(...f)));e.beginPath(),e.arc(g[0],g[1],2*s,0,Math.PI*2),e.fill()}if(d==="contracted"||d==="both"){let f=r(h.localToWorld(new U(...u.target_anchor_m)));e.beginPath(),e.arc(f[0],f[1],6*s,0,Math.PI*2),e.fill()}}}if(vn.visible){let h=vn.position,u=new U(0,1,0).applyQuaternion(vn.quaternion).multiplyScalar(vn.line.scale.y+.08).add(h);o(h,u,"#ff482f",4);let d=r(u),f=r(h),g=Math.atan2(d[1]-f[1],d[0]-f[0]);e.fillStyle="#ff482f",e.beginPath(),e.moveTo(d[0],d[1]);for(let _ of[-1,1])e.lineTo(d[0]-15*s*Math.cos(g+_*.4),d[1]-15*s*Math.sin(g+_*.4));e.closePath(),e.fill()}e.fillStyle="#8fa6c3",e.font=`${9*s}px sans-serif`,e.fillText("CPU 3D PROJECTION \xB7 WebGL unavailable",18*s,n-40*s)}function mx(){if(Ji=ye.chart_values||(ye.errors?.some(n=>n!==null)?ye.errors:ye.object?ye.positions.map(n=>n[ye.object.index][2]-ye.positions[0][ye.object.index][2]):[]),re("chart-label").textContent=ye.chart_label||(ye.object?"OBJECT LIFT":"JOINT TRACKING ERROR"),re("error-unit").textContent=ye.chart_unit||(ye.object?"m":"rad"),re("chart-note").textContent=ye.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uC7AC\uC0DD: \uB3D9\uC5ED\uD559 \uCD94\uC885 \uC624\uCC28 \uC5C6\uC74C":ye.scenario==="table_assembly"?"\uC2E4\uC81C peg tip / socket \uC704\uCE58\uC5D0\uC11C \uACC4\uC0B0 \xB7 28 s\uC5D0 \uB2E4\uB9AC gripper \uD574\uC81C":ye.instances?"\uC2E4\uC81C \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589 \uAE30\uB85D \xB7 keyframe\uBCC4 \uCD94\uC885\xB7\uC811\uCD09 \uC0C1\uD0DC \uD655\uC778":ye.object?"1 kg \uBB3C\uCCB4 \xB7 \uB450 Cartesian arm \xB7 3 cm \uC774\uB3D9":"\uAD00\uC808 \uC704\uCE58 \uC624\uCC28\uC758 2-norm",!Ji.length){re("chart-line").setAttribute("points",""),re("chart-area").setAttribute("d","");return}let i=Math.min(0,...Ji),e=Math.max(1e-8,...Ji),t=Ji.map((n,s)=>[s/(Ji.length-1)*260,80-(n-i)/(e-i)*66]);re("chart-line").setAttribute("points",t.map(n=>n.join(",")).join(" ")),re("chart-area").setAttribute("d","M0,85 L"+t.map(n=>n.join(",")).join(" L")+" L260,85 Z")}function Dh(i){re("toast").classList.remove("visible"),ye?.id==="dual_cito"&&i.id!=="dual_cito"&&(re("geometry-mode").value="visual"),ye=i,tn=0,document.querySelector(".run-panel").hidden=!!i.instances,window.dispatchEvent(new CustomEvent("recording-selected",{detail:i})),re("geometry-mode").disabled=i.id==="dual_cito",i.id==="dual_cito"&&(re("geometry-mode").value="skeleton"),re("model-title").textContent=i.title,re("model-description").textContent=i.engine==="kinematic_preview"?"29\uAC1C \uAD00\uC808\uACFC floating base\uB97C \uAC00\uC9C4 \uD734\uBA38\uB178\uC774\uB4DC\uC758 \uAE30\uAD6C\uD559\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.":i.engine==="cito_trajectory"?"\uC811\uCD09\uC744 \uC720\uC9C0\uD558\uBA70 \uBB3C\uCCB4\uB97C \uB4E4\uC5B4 \uC62C\uB9AC\uB294 \uC81C\uD55C \uBAA8\uB378\uC758 \uCD5C\uC801\uD654 \uACB0\uACFC\uC785\uB2C8\uB2E4.":"URDF \uAD00\uC131\uC73C\uB85C \uACC4\uC0B0\uD55C \uD3D0\uB8E8\uD504 \uD1A0\uD06C \uC81C\uC5B4 \uACB0\uACFC\uB97C \uC7AC\uC0DD\uD569\uB2C8\uB2E4.",i.instances&&(re("model-description").textContent=i.free_articulated_object?"\uC790\uC720 \uBCF8\uCCB4+\uB0B4\uBD80 \uAD00\uC808\uC758 \uC2E4\uC81C \uB3D9\uC5ED\uD559, \uC138 \uD314\uC758 \uB9C1\uD06C\uBCC4 contracted contact realization\uC785\uB2C8\uB2E4.":i.articulated_object?"\uC218\uB3D9 \uBB3C\uCCB4 \uAD00\uC808 \xB7 \uB85C\uBD07 \uC811\uCD09\uC73C\uB85C \uAD6C\uB3D9 \xB7 \uC8FC\uC5B4\uC9C4 \uC811\uCD09\uC810\uACFC \uAD00\uC808 \uACBD\uB85C\uC758 \uD798\xB7\uD1A0\uD06C \uCD5C\uC801\uD654":i.scenario==="mobile_panel"?"RBY1 \uBAA8\uBC14\uC77C \uB4C0\uC5BC\uC554 + \uACE0\uC815 Panda \xB7 \uCD08\uAE30 \uC9C0\uC9C0 \uC804\uB2EC \u2192 \uACE0\uC815 \uC791\uC5C5\uC601\uC5ED \uBC16\uC73C\uB85C \uC774\uB3D9 \u2192 \uC9C0\uADF8 \uC548\uCC29\xB7\uB9B4\uB9AC\uC2A4":i.scenario==="panel_fixture"?"\uBCF8 \uC2E4\uD5D8: \uC18C\uD615 \uC811\uCD09 \uC704\uCE58 refinement \u2192 \uD328\uB110 \uC6B4\uBC18\xB7\uC7AC\uBC30\uD5A5 \u2192 \uC9C0\uADF8 \uC548\uCC29\xB7\uD558\uC911 \uC804\uB2EC \u2192 \uC804\uCCB4 \uB9B4\uB9AC\uC2A4 \xB7 \uC790\uC720 \uAC15\uCCB4 \uC2E4\uD589":i.scenario==="table_assembly"?"\uBC11\uBA74\uC774 \uC704\uC778 \uC0C1\uD310 grip & support \u2192 12\xB0 reorientation \u2192 \uB2E4\uB9AC \uC815\uB82C\xB7\uC0BD\uC785 \u2192 gripper \uD574\uC81C \xB7 30\uCD08 \uC2E4\uC81C \uB3D9\uC5ED\uD559 \uC2E4\uD589":`\uC8FC\uC5B4\uC9C4 contracted contact \u2192 ${i.keyframes.length}\uAC1C keyframe \uCD5C\uC801\uD654 \u2192 3\uAC1C \uD314\uC758 \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589\uC785\uB2C8\uB2E4.`),re("engine-badge").innerHTML="<span></span>"+dx(i),re("engine-badge").classList.toggle("kinematic",i.engine==="kinematic_preview"),re("scene-label").textContent=i.engine==="cito_trajectory"?"COUPLED ROBOT\u2013OBJECT TRAJECTORY":i.engine==="kinematic_preview"?"FLOATING-BASE KINEMATIC PREVIEW":"RECORDED CLOSED-LOOP SIMULATION",i.instances&&(re("scene-label").textContent=i.free_articulated_object?"LINK-AWARE CONTRACTION \u2192 THREE-ARM REALIZATION \xB7 FREE ARTICULATED BODY":i.articulated_object?"PASSIVE ARTICULATED OBJECT \xB7 MEASURED CONTACT DYNAMICS":`COOPERATIVE CONTACT DYNAMICS \xB7 ${i.keyframes.length} KEYFRAMES`),re("dof").textContent=i.dof,re("base").textContent=i.free_articulated_object?"Free object + joint":i.scenario==="mobile_panel"?"Mobile SE(2)":i.floating_base?"Floating +6":"Fixed",re("physics-step").textContent=i.summary.physics_dt?(i.summary.physics_dt*1e3).toFixed(0)+" ms":i.engine==="cito_trajectory"?"100 ms":"\u2014";let e=i.times.at(-1);re("duration").textContent=e.toFixed(1)+" s",re("time-total").textContent=e.toFixed(2)+" s",re("chart-end").textContent=e.toFixed(1)+" s",re("tool-frame").textContent=i.frame,re("scope-description").textContent=i.description,re("keyframe-list").replaceChildren();for(let t of[...i.keyframes||[],...i.events||[]].sort((n,s)=>n.time-s.time)){let n=document.createElement("button");n.className="keyframe-choice",n.textContent=t.id+" \xB7 "+t.time.toFixed(1)+" s",n.onclick=()=>{Cs=!1,re("play").textContent="\u25B6",re("play").setAttribute("aria-label","\uC7AC\uC0DD");let s=i.times.findIndex(o=>o>=t.time);s<0&&(s=i.times.length-1);let r=Math.max(0,s-1);tn=r+(t.time-i.times[r])/Math.max(1e-12,i.times[s]-i.times[r]),Eo()},re("keyframe-list").append(n)}document.querySelectorAll(".model-choice").forEach(t=>{t.classList.toggle("selected",t.dataset.id===i.id),t.setAttribute("aria-pressed",t.dataset.id===i.id)}),Wl&&URL.revokeObjectURL(Wl),Wl=URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),re("download-data").href=Wl,re("download-data").download=i.id+"-simulation.json",re("run").disabled=!vr||i.engine==="kinematic_preview"||i.id==="dual_cito"||!!i.instances,re("amplitude").disabled=re("run-duration").disabled=!!i.instances,re("backend-state").textContent=i.instances?"\uC870\uAC74\uC744 \uBC14\uAFD4 \uB2E4\uC2DC \uACC4\uC0B0: contact-transfer demo-three-arm --viewer web":vr?"Python backend \uC5F0\uACB0\uB428 \xB7 \uC0C8 MuJoCo \uACC4\uC0B0\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.":"\uC774 \uB9C1\uD06C\uB294 \uACC4\uC0B0 \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4. \uC0C8 \uACC4\uC0B0\uC740 \uB85C\uCEEC \uB610\uB294 Codespaces\uC758 Python \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.",fx(i),mx(),Eo(),hf()}function Eo(){if(!ye)return;let i=Math.min(Math.round(tn),ye.times.length-1),e=ye.times[0]+tn/(ye.times.length-1)*ye.times.at(-1);re("timeline").value=tn/(ye.times.length-1),re("time-now").textContent=e.toFixed(2)+" s",re("error-now").textContent=Ji.length?ux(Ji[i]):"\u2014",re("tool-state").textContent=["panel_fixture","mobile_panel"].includes(ye.scenario)||ye.articulated_object?Object.entries(ye.tool_states).map(([n,s])=>`${n}: ${s[i]?"\uC811\uCD09":"\uD574\uC81C"}`).join(" \xB7 "):ye.scenario==="table_assembly"?`\uC0C1\uD310 gripper: ${ye.tool_states.top_gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uBD84\uB9AC"} \xB7 \uAD6C\uD615 support: ${ye.tool_states.point_contact[i]?"\uC811\uCD09":"\uBD84\uB9AC"} \xB7 \uB2E4\uB9AC gripper: ${ye.tool_states.leg_gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uD574\uC81C"} \xB7 socket: ${ye.tool_states.socket_contact[i]?"\uC811\uCD09":"\uBE44\uC811\uCD09"}`:ye.tool_states?`\uAD6C\uD615 tool: ${ye.tool_states.point_contact[i]?"\uC811\uCD09":"\uBD84\uB9AC"} \xB7 Gripper: ${ye.tool_states.gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uBBF8\uD30C\uC9C0"} \xB7 Suction: ${ye.tool_states.suction_sealed[i]?"seal \uC720\uC9C0":"\uD574\uC81C"}`:"";let t=ye.torque_ratio[i];re("torque-now").textContent=t==null?"\u2014":(t*100).toFixed(1)+"%",re("torque-meter").style.width=Math.min(100,(t||0)*100)+"%",re("chart-cursor").setAttribute("x1",tn/(ye.times.length-1)*260),re("chart-cursor").setAttribute("x2",tn/(ye.times.length-1)*260),Rh(tn)}async function Ph(i){let e=++Ch;re("loading").classList.remove("hidden");try{let t=await fetch("./data/"+i+".json");if(!t.ok)throw Error("\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let n=await t.json();e===Ch&&Dh(n)}catch(t){e===Ch&&(So(t.message),re("loading").classList.add("hidden"))}}re("play").onclick=()=>{Cs=!Cs,re("play").textContent=Cs?"\u2161":"\u25B6",re("play").setAttribute("aria-label",Cs?"\uC77C\uC2DC \uC815\uC9C0":"\uC7AC\uC0DD")};re("timeline").oninput=i=>{ye&&(tn=Number(i.target.value)*(ye.times.length-1),Eo())};re("speed").onchange=i=>af=Number(i.target.value);re("loop").onclick=()=>{xr=!xr,re("loop").classList.toggle("active",xr),re("loop").setAttribute("aria-pressed",xr)};re("reset-camera").onclick=cf;re("geometry-mode").onchange=hf;re("contact-display").onchange=()=>Eo();re("run").onclick=async()=>{re("run").disabled=!0,re("run").textContent="\uACC4\uC0B0 \uC911\u2026";try{let i=await fetch("./api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:ye.id,duration:Number(re("run-duration").value),amplitude:Number(re("amplitude").value)})}),e=await i.json();if(!i.ok)throw Error(e.error||"\uC2DC\uBBAC\uB808\uC774\uC158 \uC2E4\uD328");e.live=!0,Dh(e),So("\uC0C8 MuJoCo \uACC4\uC0B0\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(i){So(i.message)}finally{re("run").textContent="Run simulation \u2197",re("run").disabled=!vr||ye.id==="dual_cito"||ye.floating_base||!!ye.instances}};async function gx(){let i=await fetch("./data/index.json"),e=await i.json();re("model-count").textContent=String(e.models.length).padStart(2,"0"),re("test-count").textContent=e.tests_passed,[...e.models].sort((s,r)=>s.id==="free_box_lid"?-1:r.id==="free_box_lid"?1:s.id.startsWith("free_")?-1:r.id.startsWith("free_")?1:s.id==="mobile_panel"?-1:r.id==="mobile_panel"?1:s.id==="panel_fixture"?-1:r.id==="panel_fixture"?1:s.id==="dual_cito"?-1:r.id==="dual_cito"?1:s.floating_base-r.floating_base||s.title.localeCompare(r.title)).forEach(s=>{let r=document.createElement("button");r.className="model-choice",r.dataset.id=s.id,r.setAttribute("aria-pressed","false");let o=document.createElement("span");o.className="model-icon",o.textContent=s.id==="dual_cito"?"\u22C8":s.floating_base?"\u2667":"\u2301";let a=document.createElement("span"),c=document.createElement("span"),l=document.createElement("span");c.className="model-name",c.textContent=s.title,l.className="model-meta",l.textContent=s.id==="three_arm"?"P \xB7 G \xB7 SUCTION / 3 KEYFRAMES":s.id==="dual_cito"?"CONTACT-IMPLICIT \xB7 6 DoF":s.dof+" DoF \xB7 "+(s.floating_base?"KINEMATIC PREVIEW":"MUJOCO"),a.append(c,l);let h=document.createElement("span");h.className="choice-dot",h.textContent="\u25CF",r.append(o,a,h),r.onclick=()=>Ph(s.id),re("model-list").append(r)});let n=new URLSearchParams(location.search).get("model");await Ph(e.models.some(s=>s.id===n)?n:"free_box_lid");try{let s=await fetch("./api/health");s.ok&&(vr=(await s.json()).ready===!0)}catch{}re("backend-state").textContent=ye?.instances?"\uC870\uAC74\uC744 \uBC14\uAFD4 \uB2E4\uC2DC \uACC4\uC0B0: contact-transfer demo-three-arm --viewer web":vr?"Python backend \uC5F0\uACB0\uB428 \xB7 \uC0C8 MuJoCo \uACC4\uC0B0\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.":"\uC774 \uB9C1\uD06C\uB294 \uACC4\uC0B0 \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4. \uC0C8 \uACC4\uC0B0\uC740 \uB85C\uCEEC \uB610\uB294 Codespaces\uC758 Python \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.",re("run").disabled=!vr||ye?.floating_base||ye?.id==="dual_cito"||!!ye?.instances}var of=performance.now();function uf(i){requestAnimationFrame(uf);let e=Math.min(.05,(i-of)/1e3);of=i,ye&&Cs&&(tn+=e*af*(ye.times.length-1)/ye.times.at(-1),tn>ye.times.length-1&&(tn=xr?0:ye.times.length-1,xr||(Cs=!1,re("play").textContent="\u25B6")),Eo()),Rs.update(),Rn.render(ai,Zi)}requestAnimationFrame(uf);gx().catch(i=>{So(i.message),re("loading").classList.add("hidden")});window.addEventListener("experiment-result",i=>Dh(i.detail));qd().catch(i=>{document.getElementById("experiment-state").textContent=i.message});window.addEventListener("experiment-preview",i=>Ph(i.detail));
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
