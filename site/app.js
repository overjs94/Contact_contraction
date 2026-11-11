var Ft=i=>document.getElementById(i),hr,qi,lh,wn=i=>{Ft("experiment-state").textContent=i},ah={queued:"\uB300\uAE30",optimization:"IK \uACBD\uB85C \xB7 IPOPT \uC811\uCD09\uB825 \uCD5C\uC801\uD654",simulation:"MuJoCo \uB3D9\uC5ED\uD559 \uC2E4\uD589",export:"\uAE30\uB85D \uB0B4\uBCF4\uB0B4\uAE30",complete:"\uACC4\uC0B0 \uC644\uB8CC",failed:"\uC2E4\uD328",cancelled:"\uCDE8\uC18C\uB428"};function ch(){Ft("keyframe-inputs").replaceChildren();for(let[i,e]of hr.keyframes.entries()){let t=document.createElement("div");t.className="keyframe-input",t.innerHTML=`<span>0${i+1} <b>${e.id}</b></span>`;for(let[n,s]of[["time",e.time],["x",e.object_pose[0]],["y",e.object_pose[1]],["z",e.object_pose[2]]]){let r=document.createElement("label");r.textContent=n==="time"?"t \xB7 s":n+" \xB7 m";let o=document.createElement("input");o.type="number",o.step=".01",o.value=s,o.required=!0,o.dataset.key=i,o.dataset.field=n,o.setAttribute("aria-label",`${e.id} ${n}`),n==="time"?(o.min=0,o.max=12):(o.min=-.9,o.max=1.2),r.append(o),t.append(r)}Ft("keyframe-inputs").append(t)}Ft("contacts-json").value=JSON.stringify(hr.contracted_contacts,null,2),Ft("panel-mass").value=hr.object.mass}function hh(i){let e=i.report;e&&(Ft("experiment-results").hidden=!1,Ft("result-tracking").textContent=(e.tracking_passed?"PASS":"FAIL")+" \xB7 "+Math.max(...e.keyframe_errors.map(t=>t.translation_m*1e3)).toFixed(2)+" mm",Ft("result-forces").textContent=e.force_envelopes_passed?"PASS":"FAIL",Ft("result-seal").textContent=e.seal_retained_before_vent?"\uC720\uC9C0":"\uC774\uD0C8",Ft("result-residual").textContent=e.primal_residual.toExponential(2),Ft("report-json").textContent=JSON.stringify(e,null,2))}async function dr(i,e={}){let t=i.startsWith("/api/")?new URL("."+i,document.baseURI):i,n=await fetch(t,e),s=await n.json();if(!n.ok)throw Error(s.error||"\uACC4\uC0B0 \uC11C\uBC84 \uC624\uB958");return s}function ur(){clearTimeout(lh),qi=null,Ft("experiment-run").disabled=!1,Ft("experiment-cancel").disabled=!0}async function uh(){let i=qi;if(i)try{let e=await dr("/api/experiments/"+i);if(qi!==i)return;if(wn(ah[e.stage]||e.stage),e.state==="completed"){let t=await dr(e.recording);for(let n of t.instances)n.manifest=new URL(n.manifest,location.href).href;window.dispatchEvent(new CustomEvent("experiment-result",{detail:t})),hh(t),ur()}else["failed","cancelled"].includes(e.state)?(wn(e.error||ah[e.stage]),ur()):lh=setTimeout(uh,1200)}catch(e){qi===i&&(wn(e.message),ur())}}Ft("experiment-form").onsubmit=async i=>{i.preventDefault();try{let e=structuredClone(hr.keyframes);document.querySelectorAll("#keyframe-inputs input").forEach(s=>{let r=e[Number(s.dataset.key)],o=Number(s.value);s.dataset.field==="time"?r.time=o:r.object_pose[["x","y","z"].indexOf(s.dataset.field)]=o});let t=JSON.parse(Ft("contacts-json").value);Ft("experiment-run").disabled=!0,wn("\uC791\uC5C5 \uC81C\uCD9C \uC911\u2026"),qi=(await dr("/api/experiments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset:"three_franka",mass:Number(Ft("panel-mass").value),keyframes:e,contacts:t})})).id,Ft("experiment-cancel").disabled=!1,await uh()}catch(e){wn(e.message),ur()}};Ft("experiment-cancel").onclick=async()=>{if(qi)try{await dr("/api/experiments/"+qi+"/cancel",{method:"POST"}),wn("\uCDE8\uC18C\uB428"),ur()}catch(i){wn(i.message)}};Ft("experiment-reset").onclick=ch;Ft("contacts-file").onchange=async i=>{try{let e=i.target.files[0];if(!e)return;if(e.size>32768)throw Error("32 KB \uC774\uD558 JSON\uC744 \uC0AC\uC6A9\uD558\uC138\uC694.");let t=JSON.parse(await e.text());Ft("contacts-json").value=JSON.stringify(t.contracted_contacts||t,null,2),wn("\uC811\uCD09 JSON\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. \uC2E4\uD589 \uC2DC \uD45C\uBA74\xB7\uBC95\uC120\uC744 \uAC80\uC0AC\uD569\uB2C8\uB2E4.")}catch(e){wn(e.message)}};window.addEventListener("recording-selected",i=>hh(i.detail));async function dh(){hr=await(await fetch("./data/franka-preset.json")).json(),ch();try{let i=await dr("/api/health");if(i.ready){if(i.experiments_ready===!1){wn("Panda \uCDA9\uB3CC mesh \uC900\uBE44 \uD544\uC694 \xB7 python tools/fetch_panda_meshes.py");return}Ft("experiment-run").disabled=!1,wn("Python \uC5F0\uACB0\uB428 \xB7 \uC2E4\uC81C \uCD5C\uC801\uD654\uC640 \uB3D9\uC5ED\uD559 \uC2E4\uD589 \uAC00\uB2A5");return}}catch{}wn("\uAE30\uB85D \uC7AC\uC0DD \uBAA8\uB4DC \xB7 GitHub Pages \uB4F1 \uC815\uC801 \uD638\uC2A4\uD305\uC5D0\uC11C\uB294 \uC800\uC7A5\uB41C \uC2E4\uD589\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0C8 \uCD5C\uC801\uD654\xB7MuJoCo \uACC4\uC0B0\uC5D0\uB294 Python \uC11C\uBC84\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.")}var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,fc=1,jh=2;var pc=1,Zh=2,$n=3,Fn=0,cn=1,Rn=2,vi=0,$i=1,mc=2,gc=3,_c=4,Jh=5,Pi=100,Kh=101,$h=102,Qh=103,eu=104,tu=200,nu=201,iu=202,su=203,Go=204,Wo=205,ru=206,ou=207,au=208,lu=209,cu=210,hu=211,uu=212,du=213,fu=214,la=0,ca=1,ha=2,Qi=3,ua=4,da=5,fa=6,pa=7,Xr=0,pu=1,mu=2,bi=0,gu=1,_u=2,xu=3,ma=4,yu=5,vu=6,bu=7,tc="attached",Mu="detached",xc=300,fs=301,ps=302,ga=303,_a=304,qr=306,pi=1e3,vn=1001,Xo=1002,pn=1003,Su=1004;var Yr=1005;var fn=1006,xa=1007;var Hn=1008;var Gn=1009,yc=1010,vc=1011,Ks=1012,ya=1013,Fi=1014,Wn=1015,$s=1016,va=1017,ba=1018,Qs=1020,bc=35902,Mc=35899,Sc=1021,Ec=1022,bn=1023,zs=1026,er=1027,wc=1028,Ma=1029,Tc=1030,Sa=1031;var Ea=1033,jr=33776,Zr=33777,Jr=33778,Kr=33779,wa=35840,Ta=35841,Aa=35842,Ca=35843,Ra=36196,Ia=37492,Pa=37496,La=37808,Na=37809,Da=37810,Ua=37811,Fa=37812,Oa=37813,Ba=37814,ka=37815,za=37816,Va=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,qa=36492,Ya=36494,ja=36495,Za=36283,Ja=36284,Ka=36285,$a=36286;var vr=2300,qo=2301,Ho=2302,nc=2400,ic=2401,sc=2402,Eu=2500;var wu=3200,Tu=3201;var $r=0,Au=1,Mi="",vt="srgb",es="srgb-linear",br="linear",St="srgb";var Ki=7680;var rc=519,Cu=512,Ru=513,Iu=514,Ac=515,Pu=516,Lu=517,Nu=518,Du=519,oc=35044;var Cc="300 es",Un=2e3,Mr=2001;var Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,Os=Math.PI/180,ts=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Rc(i,e){return(i%e+e)%e}function Bd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kd(i,e,t){return i!==e?(t-i)/(e-i):0}function yr(i,e,t){return(1-t)*i+t*e}function zd(i,e,t,n){return yr(i,e,1-Math.exp(-t*n))}function Vd(i,e=1){return e-Math.abs(Rc(i,e*2)-e)}function Hd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xd(i,e){return i+Math.random()*(e-i)}function qd(i){return i*(.5-Math.random())}function Yd(i){i!==void 0&&(fh=i);let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(i){return i*Os}function Zd(i){return i*ts}function Jd(i){return(i&i-1)===0&&i!==0}function Kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xn={DEG2RAD:Os,RAD2DEG:ts,generateUUID:Oi,clamp:dt,euclideanModulo:Rc,mapLinear:Bd,inverseLerp:kd,lerp:yr,damp:zd,pingpong:Vd,smoothstep:Hd,smootherstep:Gd,randInt:Wd,randFloat:Xd,randFloatSpread:qd,seededRandom:Yd,degToRad:jd,radToDeg:Zd,isPowerOfTwo:Jd,ceilPowerOfTwo:Kd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Qd,normalize:rn,denormalize:Fs},$e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,C=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){let P=Math.sqrt(R),I=Math.atan2(P,f*C);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}let w=a*C;if(c=c*m+d*w,l=l*m+p*w,h=h*m+g*w,u=u*m+x*w,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cl=new F,ph=new Ot,at=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],C=s[1],R=s[4],w=s[7],P=s[2],I=s[5],D=s[8];return r[0]=o*x+a*C+c*P,r[3]=o*m+a*R+c*I,r[6]=o*f+a*w+c*D,r[1]=l*x+h*C+u*P,r[4]=l*m+h*R+u*I,r[7]=l*f+h*w+u*D,r[2]=d*x+p*C+g*P,r[5]=d*m+p*R+g*I,r[8]=d*f+p*w+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new at;function Ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){let i=Vs("canvas");return i.style.display="block",i}var mh={};function Hs(i){i in mh||(mh[i]=!0,console.warn(i))}function Fu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gh=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){let i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:e,whitePoint:n,transfer:br,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}var ut=ef();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,Yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Vs("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tf=0,Gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,Pl=new F,on=class i extends Yn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,s=vn,r=fn,o=Hn,a=bn,c=Gn,l=i.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Oi(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=xc;on.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,w=(p+1)/2,P=(f+1)/2,I=(h+d)/4,D=(u+x)/4,U=(g+m)/4;return R>w&&R>P?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=I/n,r=D/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=U/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=D/r,s=U/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(u-x)/C,this.z=(d-h)/C,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jo=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new on(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),_o.subVectors(this.max,fr),Es.subVectors(e.a,fr),ws.subVectors(e.b,fr),Ts.subVectors(e.c,fr),wi.subVectors(ws,Es),Ti.subVectors(Ts,ws),Yi.subVectors(Es,Ts);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Yi.z,Yi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Yi.z,0,-Yi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Yi.y,Yi.x,0];return!Ll(t,Es,ws,Ts,_o)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Es,ws,Ts,_o))?!1:(xo.crossVectors(wi,Ti),t=[xo.x,xo.y,xo.z],Ll(t,Es,ws,Ts,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,go=new On,Es=new F,ws=new F,Ts=new F,wi=new F,Ti=new F,Yi=new F,fr=new F,_o=new F,xo=new F,ji=new F;function Ll(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var sf=new On,pr=new F,Nl=new F,Zn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Nl)),this.expandByPoint(pr.copy(e.center).sub(Nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ai=new F,Dl=new F,yo=new F,Ai=new F,Ul=new F,vo=new F,Fl=new F,mi=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dl.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Dl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(yo),a=Ai.dot(this.direction),c=-Ai.dot(yo),l=Ai.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dl).addScaledVector(yo,d),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Ul.subVectors(t,e),vo.subVectors(n,e),Fl.crossVectors(Ul,vo);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);let c=a*this.direction.dot(vo.crossVectors(Ai,vo));if(c<0)return null;let l=a*this.direction.dot(Ul.cross(Ai));if(l<0||c+l>o)return null;let h=-a*Ai.dot(Fl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,of)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ci.crossVectors(n,xn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ci.crossVectors(n,xn)),Ci.normalize(),bo.crossVectors(xn,Ci),s[0]=Ci.x,s[4]=bo.x,s[8]=xn.x,s[1]=Ci.y,s[5]=bo.y,s[9]=xn.y,s[2]=Ci.z,s[6]=bo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],C=n[3],R=n[7],w=n[11],P=n[15],I=s[0],D=s[4],U=s[8],v=s[12],S=s[1],N=s[5],B=s[9],W=s[13],J=s[2],$=s[6],k=s[10],ne=s[14],X=s[3],se=s[7],de=s[11],pe=s[15];return r[0]=o*I+a*S+c*J+l*X,r[4]=o*D+a*N+c*$+l*se,r[8]=o*U+a*B+c*k+l*de,r[12]=o*v+a*W+c*ne+l*pe,r[1]=h*I+u*S+d*J+p*X,r[5]=h*D+u*N+d*$+p*se,r[9]=h*U+u*B+d*k+p*de,r[13]=h*v+u*W+d*ne+p*pe,r[2]=g*I+x*S+m*J+f*X,r[6]=g*D+x*N+m*$+f*se,r[10]=g*U+x*B+m*k+f*de,r[14]=g*v+x*W+m*ne+f*pe,r[3]=C*I+R*S+w*J+P*X,r[7]=C*D+R*N+w*$+P*se,r[11]=C*U+R*B+w*k+P*de,r[15]=C*v+R*W+w*ne+P*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],C=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,R=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,w=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,P=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,I=t*C+n*R+s*w+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=C*D,e[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*D,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*D,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*D,e[4]=R*D,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*D,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*D,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*D,e[8]=w*D,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*f-t*u*f)*D,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*f+t*a*f)*D,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*D,e[12]=P*D,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*D,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*D,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,C=c*l,R=c*h,w=c*u,P=n.x,I=n.y,D=n.z;return s[0]=(1-(x+f))*P,s[1]=(p+w)*P,s[2]=(g-R)*P,s[3]=0,s[4]=(p-w)*I,s[5]=(1-(d+f))*I,s[6]=(m+C)*I,s[7]=0,s[8]=(g+R)*D,s[9]=(m-C)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let l=1/r,h=1/o,u=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Un,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Un)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Mr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Un,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Un)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Mr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},As=new F,Nn=new nt,rf=new F(0,0,0),of=new F(1,1,1),Ci=new F,bo=new F,xn=new F,xh=new nt,yh=new Ot,Kt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},af=0,vh=new F,Cs=new Ot,li=new nt,Mo=new F,mr=new F,lf=new F,cf=new Ot,bh=new F(1,0,0),Mh=new F(0,1,0),Sh=new F(0,0,1),Eh={type:"added"},hf={type:"removed"},Rs={type:"childadded",child:null},Ol={type:"childremoved",child:null},Bt=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Kt,n=new Ot,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new at}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(mr,Mo,this.up):li.lookAt(Mo,mr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(li),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new F,ci=new F,Bl=new F,hi=new F,Is=new F,Ps=new F,wh=new F,kl=new F,zl=new F,Vl=new F,Hl=new yt,Gl=new yt,Wl=new yt,di=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ci.subVectors(n,t),Bl.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ci),c=Dn.dot(Bl),l=ci.dot(ci),h=ci.dot(Bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Hl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Hl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ci.subVectors(e,t),Dn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Dn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,n),Ps.subVectors(r,n),kl.subVectors(e,n);let c=Is.dot(kl),l=Ps.dot(kl);if(c<=0&&l<=0)return t.copy(n);zl.subVectors(e,s);let h=Is.dot(zl),u=Ps.dot(zl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Is,o);Vl.subVectors(e,r);let p=Is.dot(Vl),g=Ps.dot(Vl);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ps,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return wh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(wh,a);let f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(Is,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},So={h:0,s:0,l:0};function Xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Rc(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return ut.workingToColorSpace(Qt.copy(this),e),Math.round(dt(Qt.r*255,0,255))*65536+Math.round(dt(Qt.g*255,0,255))*256+Math.round(dt(Qt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=vt){ut.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(So);let n=yr(Ri.h,So.h,t),s=yr(Ri.s,So.s,t),r=yr(Ri.l,So.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ze;Ze.NAMES=Ou;var uf=0,an=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=$i,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Li=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new F,Eo=new $e,df=0,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}};var wr=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tr=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ff=0,Tn=new nt,ql=new Bt,Ls=new F,yn=new On,gr=new On,Zt=new F,kt=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ic(e)?Tr:wr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(yn.min,gr.min),yn.expandByPoint(Zt),Zt.addVectors(yn.max,gr.max),yn.expandByPoint(Zt)):(yn.expandByPoint(gr.min),yn.expandByPoint(gr.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Zt.fromBufferAttribute(a,l),c&&(Ls.fromBufferAttribute(e,l),Zt.add(Ls)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new F,c[U]=new F;let l=new F,h=new F,u=new F,d=new $e,p=new $e,g=new $e,x=new F,m=new F;function f(U,v,S){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(N),a[U].add(x),a[v].add(x),a[S].add(x),c[U].add(m),c[v].add(m),c[S].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let U=0,v=C.length;U<v;++U){let S=C[U],N=S.start,B=S.count;for(let W=N,J=N+B;W<J;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let R=new F,w=new F,P=new F,I=new F;function D(U){P.fromBufferAttribute(s,U),I.copy(P);let v=a[U];R.copy(v),R.sub(P.multiplyScalar(P.dot(v))).normalize(),w.crossVectors(I,v);let N=w.dot(c[U])<0?-1:1;o.setXYZW(U,R.x,R.y,R.z,N)}for(let U=0,v=C.length;U<v;++U){let S=C[U],N=S.start,B=S.count;for(let W=N,J=N+B;W<J;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new nt,Zi=new mi,wo=new Zn,Ah=new F,To=new F,Ao=new F,Co=new F,Yl=new F,Ro=new F,Ch=new F,Io=new F,Tt=class extends Bt{constructor(e=new kt,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Yl.fromBufferAttribute(u,e),o?Ro.addScaledVector(Yl,h):Ro.addScaledVector(Yl.sub(t),h))}t.add(Ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(wo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(wo,Ah)===null||Zi.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=C,P=R;w<P;w+=3){let I=a.getX(w),D=a.getX(w+1),U=a.getX(w+2);s=Po(this,f,e,n,l,h,u,I,D,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let C=a.getX(m),R=a.getX(m+1),w=a.getX(m+2);s=Po(this,o,e,n,l,h,u,C,R,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=C,P=R;w<P;w+=3){let I=w,D=w+1,U=w+2;s=Po(this,f,e,n,l,h,u,I,D,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let C=m,R=m+1,w=m+2;s=Po(this,o,e,n,l,h,u,C,R,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function pf(i,e,t,n,s,r,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Fn,a),c===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Io);return l<t.near||l>t.far?null:{distance:l,point:Io.clone(),object:i}}function Po(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,To),i.getVertexPosition(c,Ao),i.getVertexPosition(l,Co);let h=pf(i,e,t,n,To,Ao,Co,Ch);if(h){let u=new F;di.getBarycoord(Ch,To,Ao,Co,u),s&&(h.uv=di.getInterpolatedAttribute(s,a,c,l,u,new $e)),r&&(h.uv1=di.getInterpolatedAttribute(r,a,c,l,u,new $e)),o&&(h.normal=di.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};di.getNormal(To,Ao,Co,d.normal),h.face=d,h.barycoord=u}return h}var Bn=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(x,m,f,C,R,w,P,I,D,U,v){let S=w/D,N=P/U,B=w/2,W=P/2,J=I/2,$=D+1,k=U+1,ne=0,X=0,se=new F;for(let de=0;de<k;de++){let pe=de*N-W;for(let Ce=0;Ce<$;Ce++){let we=Ce*S-B;se[x]=we*C,se[m]=pe*R,se[f]=J,l.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[f]=I>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ce/D),u.push(1-de/U),ne+=1}}for(let de=0;de<U;de++)for(let pe=0;pe<D;pe++){let Ce=d+pe+$*de,we=d+pe+$*(de+1),Ee=d+(pe+1)+$*(de+1),_e=d+(pe+1)+$*de;c.push(Ce,we,_e),c.push(we,Ee,_e),X+=6}a.addGroup(p,X,v),p+=X,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=ms(i[t]);for(let s in n)e[s]=n[s]}return e}function mf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Bu={clone:ms,merge:en},gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ar=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new F,Rh=new $e,Ih=new $e,zt=class extends Ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ih),t.subVectors(Ih,Rh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Ds=1,Jo=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Ns,Ds,e,t);s.layers=this.layers,this.add(s);let r=new zt(Ns,Ds,e,t);r.layers=this.layers,this.add(r);let o=new zt(Ns,Ds,e,t);o.layers=this.layers,this.add(o);let a=new zt(Ns,Ds,e,t);a.layers=this.layers,this.add(a);let c=new zt(Ns,Ds,e,t);c.layers=this.layers,this.add(c);let l=new zt(Ns,Ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cr=class extends on{constructor(e=[],t=fs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ko=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:vi});r.uniforms.tEquirect.value=t;let o=new Tt(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=fn),new Jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},dn=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xf={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ns=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ph=new F,Lh=new yt,Nh=new yt,yf=new F,Dh=new nt,Lo=new F,jl=new Zn,Uh=new nt,Zl=new mi,Ir=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingBox.expandByPoint(Lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingSphere.expandByPoint(Lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(s),e.ray.intersectsSphere(jl)!==!1&&(Uh.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Uh),!(this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Lh.fromBufferAttribute(s.attributes.skinIndex,e),Nh.fromBufferAttribute(s.attributes.skinWeight,e),Ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Nh.getComponent(r);if(o!==0){let a=Lh.getComponent(r);Dh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yf.copy(Ph).applyMatrix4(Dh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pr=class extends on{constructor(e=null,t=1,n=1,s,r,o,a,c,l=pn,h=pn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fh=new nt,vf=new nt,Lr=class i{constructor(e=[],t=[]){this.uuid=Oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:vf;Fh.multiplyMatrices(a,t[r]),Fh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pr(t,e,e,bn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Xs),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var Jl=new F,bf=new F,Mf=new at,An=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Jl.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mf.getNormalMatrix(e),s=this.coplanarPoint(Jl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Zn,Sf=new $e(.5,.5),No=new F,qs=class{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],C=r[12],R=r[13],w=r[14],P=r[15];if(s[0].setComponents(l-o,p-h,f-g,P-C).normalize(),s[1].setComponents(l+o,p+h,f+g,P+C).normalize(),s[2].setComponents(l+a,p+u,f+x,P+R).normalize(),s[3].setComponents(l-a,p-u,f-x,P-R).normalize(),n)s[4].setComponents(c,d,m,w).normalize(),s[5].setComponents(l-c,p-d,f-m,P-w).normalize();else if(s[4].setComponents(l-c,p-d,f-m,P-w).normalize(),t===Un)s[5].setComponents(l+c,p+d,f+m,P+w).normalize();else if(t===Mr)s[5].setComponents(c,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=Sf.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mn=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$o=new F,Qo=new F,Oh=new nt,_r=new mi,Do=new Zn,Kl=new F,Bh=new F,Ys=class extends Bt{constructor(e=new kt,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$o.fromBufferAttribute(t,s-1),Qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$o.distanceTo(Qo);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Oh.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=h.getX(x),C=h.getX(x+1),R=Uo(this,e,_r,c,f,C,x);R&&t.push(R)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=Uo(this,e,_r,c,x,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){let f=Uo(this,e,_r,c,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){let x=Uo(this,e,_r,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if($o.fromBufferAttribute(a,s),Qo.fromBufferAttribute(a,r),t.distanceSqToSegment($o,Qo,Kl,Bh)>n)return;Kl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:Bh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var kh=new F,zh=new F,zn=class extends Ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kh.distanceTo(zh);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gi=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vh=new nt,ac=new mi,Fo=new Zn,Oo=new F,is=class extends Bt{constructor(e=new kt,t=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;Vh.copy(s).invert(),ac.copy(e.ray).applyMatrix4(Vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=l.getX(g);Oo.fromBufferAttribute(u,m),Hh(Oo,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)Oo.fromBufferAttribute(u,g),Hh(Oo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hh(i,e,t,n,s,r,o){let a=ac.distanceSqToPoint(i);if(a<t){let c=new F;ac.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Nr=class extends on{constructor(e,t,n=Fi,s,r,o,a=pn,c=pn,l,h=zs,u=1){if(h!==zs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Dr=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ss=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;C(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2));function C(){let w=new F,P=new F,I=0,D=(t-e)/n;for(let U=0;U<=r;U++){let v=[],S=U/r,N=S*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,J=W*c+a,$=Math.sin(J),k=Math.cos(J);P.x=N*$,P.y=-S*n+m,P.z=N*k,u.push(P.x,P.y,P.z),w.set($,D,k).normalize(),d.push(w.x,w.y,w.z),p.push(W,1-S),v.push(g++)}x.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){let S=x[v][U],N=x[v+1][U],B=x[v+1][U+1],W=x[v][U+1];(e>0||v!==0)&&(h.push(S,N,W),I+=3),(t>0||v!==r-1)&&(h.push(N,B,W),I+=3)}l.addGroup(f,I,0),f+=I}function R(w){let P=g,I=new $e,D=new F,U=0,v=w===!0?e:t,S=w===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let J=B/s*c+a,$=Math.cos(J),k=Math.sin(J);D.x=v*k,D.y=m*S,D.z=v*$,u.push(D.x,D.y,D.z),d.push(0,S,0),I.x=$*.5+.5,I.y=k*.5*S+.5,p.push(I.x,I.y),g++}for(let B=0;B<s;B++){let W=P+B,J=N+B;w===!0?h.push(J,J+1,W):h.push(J+1,J,W),U+=3}l.addGroup(f,U,w===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bo=new F,ko=new F,$l=new F,zo=new di,Ur=class extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Os*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:f}=zo;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),zo.getNormal($l),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let C=0;C<3;C++){let R=(C+1)%3,w=u[C],P=u[R],I=zo[h[C]],D=zo[h[R]],U=`${w}_${P}`,v=`${P}_${w}`;v in d&&d[v]?($l.dot(d[v].normal)<=r&&(p.push(I.x,I.y,I.z),p.push(D.x,D.y,D.z)),d[v]=null):U in d||(d[U]={index0:l[C],index1:l[R],normal:$l.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];Bo.fromBufferAttribute(a,x),ko.fromBufferAttribute(a,m),p.push(Bo.x,Bo.y,Bo.z),p.push(ko.x,ko.y,ko.z)}this.setAttribute("position",new ht(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Fr=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let C=f*d-o;for(let R=0;R<l;R++){let w=R*u-r;g.push(w,-C,0),x.push(0,0,1),m.push(R/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<a;C++){let R=C+l*f,w=C+l*(f+1),P=C+1+l*(f+1),I=C+1+l*f;p.push(R,w,I),p.push(w,P,I)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var rs=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,d=new F,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let C=[],R=f/n,w=0;f===0&&o===0?w=.5/t:f===n&&c===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){let I=P/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+R*a),u.y=e*Math.cos(o+R*a),u.z=e*Math.sin(s+I*r)*Math.sin(o+R*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(I+w,1-R),C.push(l++)}h.push(C)}for(let f=0;f<n;f++)for(let C=0;C<t;C++){let R=h[f][C+1],w=h[f][C],P=h[f+1][C],I=h[f+1][C+1];(f!==0||o>0)&&p.push(R,w,I),(f!==n-1||c<Math.PI)&&p.push(w,P,I)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vn=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Cn=class extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Or=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ea=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ta=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wf(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function ku(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var os=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},na=class extends os{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:r=e,a=2*t-n;break;case sc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ic:o=e,c=2*n-t;break;case sc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,C=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,R=(-1-p)*m+(1.5+p)*x+.5*g,w=p*m-p*x;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+C*o[l+P]+R*o[c+P]+w*o[u+P];return r}},ia=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},sa=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ef(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=qo;var _i=class extends gn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=vr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Br.prototype.ValueTypeName="color";var as=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};as.prototype.ValueTypeName="number";var ra=class extends os{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ot.slerpFlat(r,0,o,l-a,o,l,c);return r}},xi=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ra(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion";xi.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends gn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=vr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Jn.prototype.ValueTypeName="vector";var js=class{constructor(e="",t=-1,n=[],s=Eu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Af(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=wf(c);c=Gh(c,1,h),l=Gh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new as(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,x){if(p.length!==0){let m=[],f=[];ku(p,m,f,g),m.length!==0&&x.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(let x in p){let m=[],f=[];for(let C=0;C!==d[g].morphTargets.length;++C){let R=d[g];m.push(R.time),f.push(R.morphTarget===x?1:0)}s.push(new as(".morphTargetInfluence["+x+"]",m,f))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(Jn,p+".position",d,"pos",s),n(xi,p+".quaternion",d,"rot",s),n(Jn,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return Jn;case"color":return Br;case"quaternion":return xi;case"bool":case"boolean":return _i;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Af(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tf(i.type);if(i.times===void 0){let t=[],n=[];ku(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ks={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Zs=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Qa=new Zs,ln=class{constructor(e){this.manager=e!==void 0?e:Qa,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ln.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},lc=class extends Error{constructor(e,t){super(e),this.response=t}},Kn=class extends ln{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ks.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(f){C();function C(){u.read().then(({done:R,value:w})=>{if(R)f.close();else{x+=w.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let I=0,D=h.length;I<D;I++){let U=h[I];U.onProgress&&U.onProgress(P)}f.enqueue(w),C()}},R=>{f.error(R)})}}});return new Response(m)}else throw new lc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{ks.add(`file:${e}`,l);let h=ui[e];delete ui[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Us=new WeakMap,oa=class extends ln{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ks.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Us.get(o);u===void 0&&(u=[],Us.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Vs("img");function c(){h(),t&&t(this);let u=Us.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Us.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ks.remove(`image:${e}`);let d=Us.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}Us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ks.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var kr=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Pr,a=new Kn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:vn,o.wrapT=l.wrapT!==void 0?l.wrapT:vn,o.magFilter=l.magFilter!==void 0?l.magFilter:fn,o.minFilter=l.minFilter!==void 0?l.minFilter:fn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Hn),l.mipmapCount===1&&(o.minFilter=fn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},ls=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=new on,o=new oa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cs=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Ql=new nt,Wh=new F,Xh=new F,zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cc=class extends zr{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vr=class extends cs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qh=new nt,xr=new F,ec=new F,hc=class extends zr{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(xr),ec.copy(n.position),ec.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ec),n.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,n.coordinateSystem,n.reversedDepth)}},Hr=class extends cs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hs=class extends Ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uc=class extends zr{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ni=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},us=class extends cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ds=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var aa=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Lc="\\[\\]\\.:\\/",Cf=new RegExp("["+Lc+"]","g"),Nc="[^"+Lc+"]",Rf="[^"+Lc.replace("\\.","")+"]",If=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Pf=/(WCOD+)?/.source.replace("WCOD",Rf),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Df=new RegExp("^"+If+Pf+Lf+Nf+"$"),Uf=["material","materials","bones","map"],dc=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cf,"")}static parseTrackName(e){let t=Df.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Uf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=dc;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k0=new Float32Array(1);var Js=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Gr=class extends zn{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ze(n),s=new Ze(s);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let x=d===r?n:s;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}let h=new kt;h.setAttribute("position",new ht(c,3)),h.setAttribute("color",new ht(l,3));let u=new mn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Wr=class extends Yn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Dc(i,e,t,n){let s=Ff(n);switch(t){case Sc:return i*e;case wc:return i*e/s.components*s.byteLength;case Ma:return i*e/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case Sa:return i*e*2/s.components*s.byteLength;case Ec:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Ea:return i*e*4/s.components*s.byteLength;case jr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case Ca:return Math.max(i,16)*Math.max(e,8)/4;case wa:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case Ra:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qa:case Ya:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ka:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ff(i){switch(i){case Gn:case yc:return{byteLength:1,components:1};case Ks:case vc:case $s:return{byteLength:2,components:1};case va:case ba:return{byteLength:2,components:4};case Fi:case ya:case Wn:return{byteLength:4,components:1};case bc:case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function cd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,_g=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:kf,alphahash_pars_fragment:zf,alphamap_fragment:Vf,alphamap_pars_fragment:Hf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:jf,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:Kf,iridescence_fragment:$f,bumpmap_pars_fragment:Qf,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:_p,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Pp,envmap_vertex:bp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:wp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Ip,lights_toon_fragment:Lp,lights_toon_pars_fragment:Np,lights_phong_fragment:Dp,lights_phong_pars_fragment:Up,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:kp,lights_fragment_end:zp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:jp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Kp,morphcolor_vertex:$p,morphnormal_vertex:Qp,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:_m,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:bm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:Em,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Cm,specularmap_pars_fragment:Rm,tonemapping_fragment:Im,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Nm,uv_pars_fragment:Dm,uv_pars_vertex:Um,uv_vertex:Fm,worldpos_vertex:Om,background_vert:Bm,background_frag:km,backgroundCube_vert:zm,backgroundCube_frag:Vm,cube_vert:Hm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:jm,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:Km,meshbasic_vert:$m,meshbasic_frag:Qm,meshlambert_vert:eg,meshlambert_frag:tg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:_g},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Qn={basic:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:en([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:en([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:en([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:en([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:en([ve.points,ve.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:en([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:en([ve.common,ve.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:en([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:en([ve.sprite,ve.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:en([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:en([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Qn.physical={uniforms:en([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var el={r:0,b:0,g:0},gs=new Kt,xg=new nt;function yg(i,e,t,n,s,r,o){let a=new Ze(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function x(R){let w=!1,P=g(R);P===null?f(a,c):P&&P.isColor&&(f(P,1),w=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,w){let P=g(w);P&&(P.isCubeTexture||P.mapping===qr)?(h===void 0&&(h=new Tt(new Bn(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ms(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(w.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(gs)),h.material.toneMapped=ut.getTransfer(P.colorSpace)!==St,(u!==P||d!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,p=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Tt(new Fr(2,2),new kn({name:"BackgroundMaterial",uniforms:ms(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ut.getTransfer(P.colorSpace)!==St,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function f(R,w){R.getRGB(el,Pc(i)),n.buffers.color.setClear(el.r,el.g,el.b,w,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,w=1){a.set(R),c=w,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,f(a,c)},render:x,addToRenderList:m,dispose:C}}function vg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,N,B,W,J){let $=!1,k=u(W,B,N);r!==k&&(r=k,l(r.object)),$=p(S,W,B,J),$&&g(S,W,B,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,w(S,N,B,W),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,N,B){let W=B.wireframe===!0,J=n[S.id];J===void 0&&(J={},n[S.id]=J);let $=J[N.id];$===void 0&&($={},J[N.id]=$);let k=$[W];return k===void 0&&(k=d(c()),$[W]=k),k}function d(S){let N=[],B=[],W=[];for(let J=0;J<t;J++)N[J]=0,B[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,N,B,W){let J=r.attributes,$=N.attributes,k=0,ne=B.getAttributes();for(let X in ne)if(ne[X].location>=0){let de=J[X],pe=$[X];if(pe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;k++}return r.attributesNum!==k||r.index!==W}function g(S,N,B,W){let J={},$=N.attributes,k=0,ne=B.getAttributes();for(let X in ne)if(ne[X].location>=0){let de=$[X];de===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));let pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),J[X]=pe,k++}r.attributes=J,r.attributesNum=k,r.index=W}function x(){let S=r.newAttributes;for(let N=0,B=S.length;N<B;N++)S[N]=0}function m(S){f(S,0)}function f(S,N){let B=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;B[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),J[S]!==N&&(i.vertexAttribDivisor(S,N),J[S]=N)}function C(){let S=r.newAttributes,N=r.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==S[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function R(S,N,B,W,J,$,k){k===!0?i.vertexAttribIPointer(S,N,B,J,$):i.vertexAttribPointer(S,N,B,W,J,$)}function w(S,N,B,W){x();let J=W.attributes,$=B.getAttributes(),k=N.defaultAttributeValues;for(let ne in $){let X=$[ne];if(X.location>=0){let se=J[ne];if(se===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){let de=se.normalized,pe=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;let we=Ce.buffer,Ee=Ce.type,_e=Ce.bytesPerElement,V=Ee===i.INT||Ee===i.UNSIGNED_INT||se.gpuType===ya;if(se.isInterleavedBufferAttribute){let j=se.data,fe=j.stride,Ve=se.offset;if(j.isInstancedInterleavedBuffer){for(let Le=0;Le<X.locationSize;Le++)f(X.location+Le,j.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Le=0;Le<X.locationSize;Le++)R(X.location+Le,pe/X.locationSize,Ee,de,fe*_e,(Ve+pe/X.locationSize*Le)*_e,V)}else{if(se.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)f(X.location+j,se.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,we);for(let j=0;j<X.locationSize;j++)R(X.location+j,pe/X.locationSize,Ee,de,pe*_e,pe/X.locationSize*j*_e,V)}}else if(k!==void 0){let de=k[ne];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(X.location,de);break;case 3:i.vertexAttrib3fv(X.location,de);break;case 4:i.vertexAttrib4fv(X.location,de);break;default:i.vertexAttrib1fv(X.location,de)}}}}C()}function P(){U();for(let S in n){let N=n[S];for(let B in N){let W=N[B];for(let J in W)h(W[J].object),delete W[J];delete N[B]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;let N=n[S.id];for(let B in N){let W=N[B];for(let J in W)h(W[J].object),delete W[J];delete N[B]}delete n[S.id]}function D(S){for(let N in n){let B=n[N];if(B[S.id]===void 0)continue;let W=B[S.id];for(let J in W)h(W[J].object),delete W[J];delete B[S.id]}}function U(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:C}}function bg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==bn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Wn&&!U)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:P,maxSamples:I}}function Sg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new An,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let C=r?0:n,R=C*4,w=f.clippingState||null;c.value=w,w=h(g,d,R,p);for(let P=0;P!==R;++P)w[P]=t[P];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,w=p;R!==x;++R,w+=4)o.copy(u[R]).applyMatrix4(C,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Eg(i){let e=new WeakMap;function t(o,a){return a===ga?o.mapping=fs:a===_a&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ga||a===_a)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ko(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var nr=4,zu=[.125,.215,.35,.446,.526,.582],ys=20,Uc=new hs,Vu=new Ze,Fc=null,Oc=0,Bc=0,kc=!1,xs=(1+Math.sqrt(5))/2,tr=1/xs,Hu=[new F(-xs,tr,0),new F(xs,tr,0),new F(-tr,0,xs),new F(tr,0,xs),new F(0,xs,-tr),new F(0,xs,tr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],wg=new F,il=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=wg}=r;Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,Bc),this._renderer.xr.enabled=kc,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:$s,format:bn,colorSpace:es,depthBuffer:!1},s=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(r)),this._blurMaterial=Ag(r,e,t)}return s}_compileMaterial(e){let t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,n,s,r){let c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Vu),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Li({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new Tt(new Bn,x),f=!1,C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,f=!0):(x.color.copy(Vu),f=!0);for(let R=0;R<6;R++){let w=R%3;w===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):w===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));let P=this._cubeSize;tl(s,w*P,R>2?P:0,P,P),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fs||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;tl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hu[(s-r-1)%Hu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ys-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let f=[],C=0;for(let D=0;D<ys;++D){let U=D/x,v=Math.exp(-U*U/2);f.push(v),D===0?C+=v:D<m&&(C+=2*v)}for(let D=0;D<f.length;D++)f[D]=f[D]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:R}=this;d.dTheta.value=g,d.mipInt.value=R-n;let w=this._sizeLods[s],P=3*w*(s>R-nr?s-R+nr:0),I=4*(this._cubeSize-w);tl(t,P,I,3*w,2*w),c.setRenderTarget(t),c.render(u,Uc)}};function Tg(i){let e=[],t=[],n=[],s=i,r=i-nr+1+zu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-nr?c=zu[o-i+nr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,C=new Float32Array(x*g*p),R=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let I=0;I<p;I++){let D=I%3*2/3-1,U=I>2?0:-1,v=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];C.set(v,x*g*I),R.set(d,m*g*I);let S=[I,I,I,I,I,I];w.set(S,f*g*I)}let P=new kt;P.setAttribute("position",new Jt(C,x)),P.setAttribute("uv",new Jt(R,m)),P.setAttribute("faceIndex",new Jt(w,f)),e.push(P),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gu(i,e,t){let n=new jn(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ag(i,e,t){let n=new Float32Array(ys),s=new F(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Wu(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Xu(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function Cg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ga||c===_a,h=c===fs||c===ps;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new il(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new il(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let C=p.array;x=p.version;for(let R=0,w=C.length;R<w;R+=3){let P=C[R+0],I=C[R+1],D=C[R+2];d.push(P,I,I,D,D,P)}}else if(g!==void 0){let C=g.array;x=g.version;for(let R=0,w=C.length/3-1;R<w;R+=3){let P=R+0,I=R+1,D=R+2;d.push(P,I,I,D,D,P)}}else return;let m=new(Ic(d)?Tr:wr)(d,1);m.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let C=0;C<g;C++)f+=p[C]*x[C];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,e,t){let n=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],R=0;p===!0&&(R=1),g===!0&&(R=2),x===!0&&(R=3);let w=a.attributes.position.count*R,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let I=new Float32Array(w*P*4*u),D=new Sr(I,w,P,u);D.type=Wn,D.needsUpdate=!0;let U=R*4;for(let S=0;S<u;S++){let N=m[S],B=f[S],W=C[S],J=w*P*4*S;for(let $=0;$<N.count;$++){let k=$*U;p===!0&&(s.fromBufferAttribute(N,$),I[J+k+0]=s.x,I[J+k+1]=s.y,I[J+k+2]=s.z,I[J+k+3]=0),g===!0&&(s.fromBufferAttribute(B,$),I[J+k+4]=s.x,I[J+k+5]=s.y,I[J+k+6]=s.z,I[J+k+7]=0),x===!0&&(s.fromBufferAttribute(W,$),I[J+k+8]=s.x,I[J+k+9]=s.y,I[J+k+10]=s.z,I[J+k+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new $e(w,P)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var hd=new on,qu=new Nr(1,1),ud=new Sr,dd=new Zo,fd=new Cr,Yu=[],ju=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Ku=new Float32Array(4);function sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rl(i,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),qt(t,n)}}function zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),qt(t,n)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),qt(t,n)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qu.compareFunction=Ac,r=qu):r=hd,t.setTexture2D(e||r,s)}function Kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dd,s)}function $g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fd,s)}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ud,s)}function e_(i){switch(i){case 5126:return Ug;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return kg;case 35675:return zg;case 35676:return Vg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return jg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Qg}}function t_(i,e){i.uniform1fv(this.addr,e)}function n_(i,e){let t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function i_(i,e){let t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function s_(i,e){let t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function r_(i,e){let t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function o_(i,e){let t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a_(i,e){let t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l_(i,e){i.uniform1iv(this.addr,e)}function c_(i,e){i.uniform2iv(this.addr,e)}function h_(i,e){i.uniform3iv(this.addr,e)}function u_(i,e){i.uniform4iv(this.addr,e)}function d_(i,e){i.uniform1uiv(this.addr,e)}function f_(i,e){i.uniform2uiv(this.addr,e)}function p_(i,e){i.uniform3uiv(this.addr,e)}function m_(i,e){i.uniform4uiv(this.addr,e)}function g_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hd,r[o])}function __(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||dd,r[o])}function x_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fd,r[o])}function y_(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ud,r[o])}function v_(i){switch(i){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}var Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e_(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function $u(i,e){i.seq.push(e),i.map[e.id]=e}function b_(i,e,t){let n=i.name,s=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),o=zc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$u(t,l===void 0?new Vc(a,i,e):new Hc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gc(a),$u(t,u)),t=u}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);b_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var M_=37297,S_=0;function E_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ed=new at;function w_(i){ut._getMatrix(ed,ut.workingColorSpace,i);let e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case br:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+E_(i.getShaderSource(e),a)}else return r}function T_(i,e){let t=w_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A_(i,e){let t;switch(e){case gu:t="Linear";break;case _u:t="Reinhard";break;case xu:t="Cineon";break;case ma:t="ACESFilmic";break;case vu:t="AgX";break;case bu:t="Neutral";break;case yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nl=new F;function C_(){ut.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function I_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qr(i){return i!==""}function nd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(L_,D_)}var N_=new Map;function D_(i,e){let t=lt[e];if(t===void 0){let n=N_.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}var U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(U_,F_)}function F_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function O_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function B_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xr:e="ENVMAP_BLENDING_MULTIPLY";break;case pu:e="ENVMAP_BLENDING_MIX";break;case mu:e="ENVMAP_BLENDING_ADD";break}return e}function V_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=O_(t),l=B_(t),h=k_(t),u=z_(t),d=V_(t),p=R_(t),g=I_(r),x=s.createProgram(),m,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),f.length>0&&(f+=`
`)):(m=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),f=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?lt.tonemapping_pars_fragment:"",t.toneMapping!==bi?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Wc(o),o=nd(o,t),o=id(o,t),a=Wc(a),a=nd(a,t),a=id(a,t),o=sd(o),a=sd(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let R=C+m+o,w=C+f+a,P=Qu(s,s.VERTEX_SHADER,R),I=Qu(s,s.FRAGMENT_SHADER,w);s.attachShader(x,P),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(N){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(P)||"",J=s.getShaderInfoLog(I)||"",$=B.trim(),k=W.trim(),ne=J.trim(),X=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,I);else{let de=td(s,P,"vertex"),pe=td(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+de+`
`+pe)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(k===""||ne==="")&&(se=!1);se&&(N.diagnostics={runnable:X,programLog:$,vertexShader:{log:k,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(P),s.deleteShader(I),U=new ir(s,x),v=P_(s,x)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,M_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=I,this}var G_=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function W_(i,e,t,n,s,r,o){let a=new Er,c=new Xc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,N,B,W){let J=B.fog,$=W.geometry,k=v.isMeshStandardMaterial?B.environment:null,ne=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),X=ne&&ne.mapping===qr?ne.image.height:null,se=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pe=de!==void 0?de.length:0,Ce=0;$.morphAttributes.position!==void 0&&(Ce=1),$.morphAttributes.normal!==void 0&&(Ce=2),$.morphAttributes.color!==void 0&&(Ce=3);let we,Ee,_e,V;if(se){let ot=Qn[se];we=ot.vertexShader,Ee=ot.fragmentShader}else we=v.vertexShader,Ee=v.fragmentShader,c.update(v),_e=c.getVertexShaderID(v),V=c.getFragmentShaderID(v);let j=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ve=W.isInstancedMesh===!0,Le=W.isBatchedMesh===!0,ft=!!v.map,jt=!!v.matcap,O=!!ne,Ct=!!v.aoMap,it=!!v.lightMap,Je=!!v.bumpMap,Ne=!!v.normalMap,Rt=!!v.displacementMap,Fe=!!v.emissiveMap,rt=!!v.metalnessMap,Vt=!!v.roughnessMap,Nt=v.anisotropy>0,L=v.clearcoat>0,b=v.dispersion>0,q=v.iridescence>0,te=v.sheen>0,re=v.transmission>0,Q=Nt&&!!v.anisotropyMap,He=L&&!!v.clearcoatMap,me=L&&!!v.clearcoatNormalMap,Oe=L&&!!v.clearcoatRoughnessMap,Be=q&&!!v.iridescenceMap,ce=q&&!!v.iridescenceThicknessMap,Me=te&&!!v.sheenColorMap,Ke=te&&!!v.sheenRoughnessMap,ke=!!v.specularMap,ye=!!v.specularColorMap,st=!!v.specularIntensityMap,z=re&&!!v.transmissionMap,ue=re&&!!v.thicknessMap,ge=!!v.gradientMap,Re=!!v.alphaMap,ae=v.alphaTest>0,ie=!!v.alphaHash,De=!!v.extensions,tt=bi;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(tt=i.toneMapping);let Et={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:we,fragmentShader:Ee,defines:v.defines,customVertexShaderID:_e,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Le,batchingColor:Le&&W._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&W.instanceColor!==null,instancingMorph:Ve&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:es,alphaToCoverage:!!v.alphaToCoverage,map:ft,matcap:jt,envMap:O,envMapMode:O&&ne.mapping,envMapCubeUVHeight:X,aoMap:Ct,lightMap:it,bumpMap:Je,normalMap:Ne,displacementMap:d&&Rt,emissiveMap:Fe,normalMapObjectSpace:Ne&&v.normalMapType===Au,normalMapTangentSpace:Ne&&v.normalMapType===$r,metalnessMap:rt,roughnessMap:Vt,anisotropy:Nt,anisotropyMap:Q,clearcoat:L,clearcoatMap:He,clearcoatNormalMap:me,clearcoatRoughnessMap:Oe,dispersion:b,iridescence:q,iridescenceMap:Be,iridescenceThicknessMap:ce,sheen:te,sheenColorMap:Me,sheenRoughnessMap:Ke,specularMap:ke,specularColorMap:ye,specularIntensityMap:st,transmission:re,transmissionMap:z,thicknessMap:ue,gradientMap:ge,opaque:v.transparent===!1&&v.blending===$i&&v.alphaToCoverage===!1,alphaMap:Re,alphaTest:ae,alphaHash:ie,combine:v.combine,mapUv:ft&&x(v.map.channel),aoMapUv:Ct&&x(v.aoMap.channel),lightMapUv:it&&x(v.lightMap.channel),bumpMapUv:Je&&x(v.bumpMap.channel),normalMapUv:Ne&&x(v.normalMap.channel),displacementMapUv:Rt&&x(v.displacementMap.channel),emissiveMapUv:Fe&&x(v.emissiveMap.channel),metalnessMapUv:rt&&x(v.metalnessMap.channel),roughnessMapUv:Vt&&x(v.roughnessMap.channel),anisotropyMapUv:Q&&x(v.anisotropyMap.channel),clearcoatMapUv:He&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&x(v.sheenRoughnessMap.channel),specularMapUv:ke&&x(v.specularMap.channel),specularColorMapUv:ye&&x(v.specularColorMap.channel),specularIntensityMapUv:st&&x(v.specularIntensityMap.channel),transmissionMapUv:z&&x(v.transmissionMap.channel),thicknessMapUv:ue&&x(v.thicknessMap.channel),alphaMapUv:Re&&x(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ne||Nt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(ft||Re),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:W.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:ft&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function f(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(C(S,v),R(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function C(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function R(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function w(v){let S=g[v.type],N;if(S){let B=Qn[S];N=Bu.clone(B.uniforms)}else N=v.uniforms;return N}function P(v,S){let N;for(let B=0,W=h.length;B<W;B++){let J=h[B];if(J.cacheKey===S){N=J,++N.usedTimes;break}}return N===void 0&&(N=new H_(i,S,v,r),h.push(N)),N}function I(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function D(v){c.remove(v)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:h,dispose:U}}function X_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||q_),n.length>1&&n.sort(d||od),s.length>1&&s.sort(d||od)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ad,i.set(n,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var J_=0;function K_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $_(i){let e=new j_,t=Z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new nt,o=new nt;function a(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,C=0,R=0,w=0,P=0,I=0,D=0;l.sort(K_);for(let v=0,S=l.length;v<S;v++){let N=l[v],B=N.color,W=N.intensity,J=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*W,u+=B.g*W,d+=B.b*W;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],W);D++}else if(N.isDirectionalLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ne=N.shadow,X=t.get(N);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=N.shadow.matrix,C++}n.directional[p]=k,p++}else if(N.isSpotLight){let k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(B).multiplyScalar(W),k.distance=J,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[x]=k;let ne=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,ne.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[x]=ne.matrix,N.castShadow){let X=t.get(N);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=$,w++}x++}else if(N.isRectAreaLight){let k=e.get(N);k.color.copy(B).multiplyScalar(W),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=k,m++}else if(N.isPointLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){let ne=N.shadow,X=t.get(N);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=N.shadow.matrix,R++}n.point[g]=k,g++}else if(N.isHemisphereLight){let k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(W),k.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==C||U.numPointShadows!==R||U.numSpotShadows!==w||U.numSpotMaps!==P||U.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+P-I,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=C,U.numPointShadows=R,U.numSpotShadows=w,U.numSpotMaps=P,U.numLightProbes=D,n.version=J_++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,C=l.length;f<C;f++){let R=l[f];if(R.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(R.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(R.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(R.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(R.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),d++}else if(R.isHemisphereLight){let w=n.hemi[x];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ld(i){let e=new $_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Q_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ld(i),e.set(s,[a])):r>=o.length?(a=new ld(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
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
}`;function n0(i,e,t){let n=new qs,s=new $e,r=new $e,o=new yt,a=new ea({depthPacking:Tu}),c=new ta,l={},h=t.maxTextureSize,u={[Fn]:cn,[cn]:Fn,[Rn]:Rn},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let f=this.type;this.render=function(I,D,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let v=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(vi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=f!==$n&&this.type===$n,J=f===$n&&this.type!==$n;for(let $=0,k=I.length;$<k;$++){let ne=I[$],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let se=X.getFrameExtents();if(s.multiply(se),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,X.mapSize.y=r.y)),X.map===null||W===!0||J===!0){let pe=this.type!==$n?{minFilter:pn,magFilter:pn}:{};X.map!==null&&X.map.dispose(),X.map=new jn(s.x,s.y,pe),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let de=X.getViewportCount();for(let pe=0;pe<de;pe++){let Ce=X.getViewport(pe);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),B.viewport(o),X.updateMatrices(ne,pe),n=X.getFrustum(),w(D,U,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===$n&&C(X,U),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,N)};function C(I,D){let U=e.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(D,null,U,d,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(D,null,U,p,x,null)}function R(I,D,U,v){let S=null,N=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)S=N;else if(S=U.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let B=S.uuid,W=D.uuid,J=l[B];J===void 0&&(J={},l[B]=J);let $=J[W];$===void 0&&($=S.clone(),J[W]=$,D.addEventListener("dispose",P)),S=$}if(S.visible=D.visible,S.wireframe=D.wireframe,v===$n?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=U}return S}function w(I,D,U,v,S){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===$n)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);let W=e.update(I),J=I.material;if(Array.isArray(J)){let $=W.groups;for(let k=0,ne=$.length;k<ne;k++){let X=$[k],se=J[X.materialIndex];if(se&&se.visible){let de=R(I,se,v,S);I.onBeforeShadow(i,I,D,U,W,de,X),i.renderBufferDirect(U,null,W,de,I,X),I.onAfterShadow(i,I,D,U,W,de,X)}}}else if(J.visible){let $=R(I,J,v,S);I.onBeforeShadow(i,I,D,U,W,$,null),i.renderBufferDirect(U,null,W,$,I,null),I.onAfterShadow(i,I,D,U,W,$,null)}}let B=I.children;for(let W=0,J=B.length;W<J;W++)w(B[W],D,U,v,S)}function P(I){I.target.removeEventListener("dispose",P);for(let U in l){let v=l[U],S=I.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}var i0={[la]:ca,[ha]:fa,[ua]:pa,[Qi]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:Qi};function s0(i,e){function t(){let z=!1,ue=new yt,ge=null,Re=new yt(0,0,0,0);return{setMask:function(ae){ge!==ae&&!z&&(i.colorMask(ae,ae,ae,ae),ge=ae)},setLocked:function(ae){z=ae},setClear:function(ae,ie,De,tt,Et){Et===!0&&(ae*=tt,ie*=tt,De*=tt),ue.set(ae,ie,De,tt),Re.equals(ue)===!1&&(i.clearColor(ae,ie,De,tt),Re.copy(ue))},reset:function(){z=!1,ge=null,Re.set(-1,0,0,0)}}}function n(){let z=!1,ue=!1,ge=null,Re=null,ae=null;return{setReversed:function(ie){if(ue!==ie){let De=e.get("EXT_clip_control");ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;let tt=ae;ae=null,this.setClear(tt)}},getReversed:function(){return ue},setTest:function(ie){ie?j(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ie){ge!==ie&&!z&&(i.depthMask(ie),ge=ie)},setFunc:function(ie){if(ue&&(ie=i0[ie]),Re!==ie){switch(ie){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ie}},setLocked:function(ie){z=ie},setClear:function(ie){ae!==ie&&(ue&&(ie=1-ie),i.clearDepth(ie),ae=ie)},reset:function(){z=!1,ge=null,Re=null,ae=null,ue=!1}}}function s(){let z=!1,ue=null,ge=null,Re=null,ae=null,ie=null,De=null,tt=null,Et=null;return{setTest:function(ot){z||(ot?j(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!z&&(i.stencilMask(ot),ue=ot)},setFunc:function(ot,Sn,En){(ge!==ot||Re!==Sn||ae!==En)&&(i.stencilFunc(ot,Sn,En),ge=ot,Re=Sn,ae=En)},setOp:function(ot,Sn,En){(ie!==ot||De!==Sn||tt!==En)&&(i.stencilOp(ot,Sn,En),ie=ot,De=Sn,tt=En)},setLocked:function(ot){z=ot},setClear:function(ot){Et!==ot&&(i.clearStencil(ot),Et=ot)},reset:function(){z=!1,ue=null,ge=null,Re=null,ae=null,ie=null,De=null,tt=null,Et=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,C=null,R=null,w=null,P=null,I=null,D=new Ze(0,0,0),U=0,v=!1,S=null,N=null,B=null,W=null,J=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ne>=2);let se=null,de={},pe=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),we=new yt().fromArray(pe),Ee=new yt().fromArray(Ce);function _e(z,ue,ge,Re){let ae=new Uint8Array(4),ie=i.createTexture();i.bindTexture(z,ie),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ge;De++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ue+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ie}let V={};V[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Qi),Je(!1),Ne(fc),j(i.CULL_FACE),Ct(vi);function j(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function fe(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ve(z,ue){return u[z]!==ue?(i.bindFramebuffer(z,ue),u[z]=ue,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(z,ue){let ge=p,Re=!1;if(z){ge=d.get(ue),ge===void 0&&(ge=[],d.set(ue,ge));let ae=z.textures;if(ge.length!==ae.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,De=ae.length;ie<De;ie++)ge[ie]=i.COLOR_ATTACHMENT0+ie;ge.length=ae.length,Re=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ge)}function ft(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let jt={[Pi]:i.FUNC_ADD,[Kh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};jt[Qh]=i.MIN,jt[eu]=i.MAX;let O={[tu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[au]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(z,ue,ge,Re,ae,ie,De,tt,Et,ot){if(z===vi){x===!0&&(fe(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),z!==Jh){if(z!==m||ot!==v){if((f!==Pi||w!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,w=Pi),ot)switch(z){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,R=null,P=null,I=null,D.set(0,0,0),U=0,m=z,v=ot}return}ae=ae||ue,ie=ie||ge,De=De||Re,(ue!==f||ae!==w)&&(i.blendEquationSeparate(jt[ue],jt[ae]),f=ue,w=ae),(ge!==C||Re!==R||ie!==P||De!==I)&&(i.blendFuncSeparate(O[ge],O[Re],O[ie],O[De]),C=ge,R=Re,P=ie,I=De),(tt.equals(D)===!1||Et!==U)&&(i.blendColor(tt.r,tt.g,tt.b,Et),D.copy(tt),U=Et),m=z,v=!1}function it(z,ue){z.side===Rn?fe(i.CULL_FACE):j(i.CULL_FACE);let ge=z.side===cn;ue&&(ge=!ge),Je(ge),z.blending===$i&&z.transparent===!1?Ct(vi):Ct(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Re=z.stencilWrite;a.setTest(Re),Re&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function Ne(z){z!==Yh?(j(i.CULL_FACE),z!==N&&(z===fc?i.cullFace(i.BACK):z===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),N=z}function Rt(z){z!==B&&(k&&i.lineWidth(z),B=z)}function Fe(z,ue,ge){z?(j(i.POLYGON_OFFSET_FILL),(W!==ue||J!==ge)&&(i.polygonOffset(ue,ge),W=ue,J=ge)):fe(i.POLYGON_OFFSET_FILL)}function rt(z){z?j(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Vt(z){z===void 0&&(z=i.TEXTURE0+$-1),se!==z&&(i.activeTexture(z),se=z)}function Nt(z,ue,ge){ge===void 0&&(se===null?ge=i.TEXTURE0+$-1:ge=se);let Re=de[ge];Re===void 0&&(Re={type:void 0,texture:void 0},de[ge]=Re),(Re.type!==z||Re.texture!==ue)&&(se!==ge&&(i.activeTexture(ge),se=ge),i.bindTexture(z,ue||V[z]),Re.type=z,Re.texture=ue)}function L(){let z=de[se];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(z){we.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),we.copy(z))}function Ke(z){Ee.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ee.copy(z))}function ke(z,ue){let ge=l.get(ue);ge===void 0&&(ge=new WeakMap,l.set(ue,ge));let Re=ge.get(z);Re===void 0&&(Re=i.getUniformBlockIndex(ue,z.name),ge.set(z,Re))}function ye(z,ue){let Re=l.get(ue).get(z);c.get(ue)!==Re&&(i.uniformBlockBinding(ue,Re,z.__bindingPointIndex),c.set(ue,Re))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,de={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,C=null,R=null,w=null,P=null,I=null,D=new Ze(0,0,0),U=0,v=!1,S=null,N=null,B=null,W=null,J=null,we.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:fe,bindFramebuffer:Ve,drawBuffers:Le,useProgram:ft,setBlending:Ct,setMaterial:it,setFlipSided:Je,setCullFace:Ne,setLineWidth:Rt,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:Vt,bindTexture:Nt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:Be,texImage3D:ce,updateUBOMapping:ke,uniformBlockBinding:ye,texStorage2D:me,texStorage3D:Oe,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:Q,compressedTexSubImage3D:He,scissor:Me,viewport:Ke,reset:st}}function r0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return p?new OffscreenCanvas(L,b):Vs("canvas")}function x(L,b,q){let te=1,re=Nt(L);if((re.width>q||re.height>q)&&(te=q/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Q=Math.floor(te*re.width),He=Math.floor(te*re.height);u===void 0&&(u=g(Q,He));let me=b?g(Q,He):u;return me.width=Q,me.height=He,me.getContext("2d").drawImage(L,0,0,Q,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+He+")."),me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,b,q,te,re=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=b;if(b===i.RED&&(q===i.FLOAT&&(Q=i.R32F),q===i.HALF_FLOAT&&(Q=i.R16F),q===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.R8UI),q===i.UNSIGNED_SHORT&&(Q=i.R16UI),q===i.UNSIGNED_INT&&(Q=i.R32UI),q===i.BYTE&&(Q=i.R8I),q===i.SHORT&&(Q=i.R16I),q===i.INT&&(Q=i.R32I)),b===i.RG&&(q===i.FLOAT&&(Q=i.RG32F),q===i.HALF_FLOAT&&(Q=i.RG16F),q===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RG8UI),q===i.UNSIGNED_SHORT&&(Q=i.RG16UI),q===i.UNSIGNED_INT&&(Q=i.RG32UI),q===i.BYTE&&(Q=i.RG8I),q===i.SHORT&&(Q=i.RG16I),q===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),q===i.UNSIGNED_INT&&(Q=i.RGB32UI),q===i.BYTE&&(Q=i.RGB8I),q===i.SHORT&&(Q=i.RGB16I),q===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),q===i.UNSIGNED_INT&&(Q=i.RGBA32UI),q===i.BYTE&&(Q=i.RGBA8I),q===i.SHORT&&(Q=i.RGBA16I),q===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){let He=re?br:ut.getTransfer(te);q===i.FLOAT&&(Q=i.RGBA32F),q===i.HALF_FLOAT&&(Q=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Q=He===St?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function w(L,b){let q;return L?b===null||b===Fi||b===Qs?q=i.DEPTH24_STENCIL8:b===Wn?q=i.DEPTH32F_STENCIL8:b===Ks&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===Qs?q=i.DEPTH_COMPONENT24:b===Wn?q=i.DEPTH_COMPONENT32F:b===Ks&&(q=i.DEPTH_COMPONENT16),q}function P(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==pn&&L.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){let b=L.target;b.removeEventListener("dispose",I),U(b),b.isVideoTexture&&h.delete(b)}function D(L){let b=L.target;b.removeEventListener("dispose",D),S(b)}function U(L){let b=n.get(L);if(b.__webglInit===void 0)return;let q=L.source,te=d.get(q);if(te){let re=te[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&v(L),Object.keys(te).length===0&&d.delete(q)}n.remove(L)}function v(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let q=L.source,te=d.get(q);delete te[b.__cacheKey],o.memory.textures--}function S(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let re=0;re<b.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(b.__webglFramebuffer[te][re]);else i.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)i.deleteFramebuffer(b.__webglFramebuffer[te]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=L.textures;for(let te=0,re=q.length;te<re;te++){let Q=n.get(q[te]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(q[te])}n.remove(L)}let N=0;function B(){N=0}function W(){let L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function J(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function $(L,b){let q=n.get(L);if(L.isVideoTexture&&rt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(q,L,b);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function k(L,b){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){V(q,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function ne(L,b){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){V(q,L,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function X(L,b){let q=n.get(L);if(L.version>0&&q.__version!==L.version){j(q,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let se={[pi]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},de={[pn]:i.NEAREST,[Su]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},pe={[Cu]:i.NEVER,[Du]:i.ALWAYS,[Ru]:i.LESS,[Ac]:i.LEQUAL,[Iu]:i.EQUAL,[Nu]:i.GEQUAL,[Pu]:i.GREATER,[Lu]:i.NOTEQUAL};function Ce(L,b){if(b.type===Wn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fn||b.magFilter===xa||b.magFilter===Yr||b.magFilter===Hn||b.minFilter===fn||b.minFilter===xa||b.minFilter===Yr||b.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,se[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,se[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,se[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,de[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pn||b.minFilter!==Yr&&b.minFilter!==Hn||b.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function we(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));let te=b.source,re=d.get(te);re===void 0&&(re={},d.set(te,re));let Q=J(b);if(Q!==L.__cacheKey){re[Q]===void 0&&(re[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[Q].usedTimes++;let He=re[L.__cacheKey];He!==void 0&&(re[L.__cacheKey].usedTimes--,He.usedTimes===0&&v(b)),L.__cacheKey=Q,L.__webglTexture=re[Q].texture}return q}function Ee(L,b,q){return Math.floor(Math.floor(L/q)/b)}function _e(L,b,q,te){let Q=L.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,te,b.data);else{Q.sort((ce,Me)=>ce.start-Me.start);let He=0;for(let ce=1;ce<Q.length;ce++){let Me=Q[He],Ke=Q[ce],ke=Me.start+Me.count,ye=Ee(Ke.start,b.width,4),st=Ee(Me.start,b.width,4);Ke.start<=ke+1&&ye===st&&Ee(Ke.start+Ke.count-1,b.width,4)===ye?Me.count=Math.max(Me.count,Ke.start+Ke.count-Me.start):(++He,Q[He]=Ke)}Q.length=He+1;let me=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ce=0,Me=Q.length;ce<Me;ce++){let Ke=Q[ce],ke=Math.floor(Ke.start/4),ye=Math.ceil(Ke.count/4),st=ke%b.width,z=Math.floor(ke/b.width),ue=ye,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,st,z,ue,ge,q,te,b.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function V(L,b,q){let te=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=i.TEXTURE_3D);let re=we(L,b),Q=b.source;t.bindTexture(te,L.__webglTexture,i.TEXTURE0+q);let He=n.get(Q);if(Q.version!==He.__version||re===!0){t.activeTexture(i.TEXTURE0+q);let me=ut.getPrimaries(ut.workingColorSpace),Oe=b.colorSpace===Mi?null:ut.getPrimaries(b.colorSpace),Be=b.colorSpace===Mi||me===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ce=x(b.image,!1,s.maxTextureSize);ce=Vt(b,ce);let Me=r.convert(b.format,b.colorSpace),Ke=r.convert(b.type),ke=R(b.internalFormat,Me,Ke,b.colorSpace,b.isVideoTexture);Ce(te,b);let ye,st=b.mipmaps,z=b.isVideoTexture!==!0,ue=He.__version===void 0||re===!0,ge=Q.dataReady,Re=P(b,ce);if(b.isDepthTexture)ke=w(b.format===er,b.type),ue&&(z?t.texStorage2D(i.TEXTURE_2D,1,ke,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ke,ce.width,ce.height,0,Me,Ke,null));else if(b.isDataTexture)if(st.length>0){z&&ue&&t.texStorage2D(i.TEXTURE_2D,Re,ke,st[0].width,st[0].height);for(let ae=0,ie=st.length;ae<ie;ae++)ye=st[ae],z?ge&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,Me,Ke,ye.data):t.texImage2D(i.TEXTURE_2D,ae,ke,ye.width,ye.height,0,Me,Ke,ye.data);b.generateMipmaps=!1}else z?(ue&&t.texStorage2D(i.TEXTURE_2D,Re,ke,ce.width,ce.height),ge&&_e(b,ce,Me,Ke)):t.texImage2D(i.TEXTURE_2D,0,ke,ce.width,ce.height,0,Me,Ke,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ke,st[0].width,st[0].height,ce.depth);for(let ae=0,ie=st.length;ae<ie;ae++)if(ye=st[ae],b.format!==bn)if(Me!==null)if(z){if(ge)if(b.layerUpdates.size>0){let De=Dc(ye.width,ye.height,b.format,b.type);for(let tt of b.layerUpdates){let Et=ye.data.subarray(tt*De/ye.data.BYTES_PER_ELEMENT,(tt+1)*De/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,tt,ye.width,ye.height,1,Me,Et)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ce.depth,Me,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,ke,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ce.depth,Me,Ke,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,ke,ye.width,ye.height,ce.depth,0,Me,Ke,ye.data)}else{z&&ue&&t.texStorage2D(i.TEXTURE_2D,Re,ke,st[0].width,st[0].height);for(let ae=0,ie=st.length;ae<ie;ae++)ye=st[ae],b.format!==bn?Me!==null?z?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ge&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,Me,Ke,ye.data):t.texImage2D(i.TEXTURE_2D,ae,ke,ye.width,ye.height,0,Me,Ke,ye.data)}else if(b.isDataArrayTexture)if(z){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ke,ce.width,ce.height,ce.depth),ge)if(b.layerUpdates.size>0){let ae=Dc(ce.width,ce.height,b.format,b.type);for(let ie of b.layerUpdates){let De=ce.data.subarray(ie*ae/ce.data.BYTES_PER_ELEMENT,(ie+1)*ae/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,Me,Ke,De)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,Ke,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ce.width,ce.height,ce.depth,0,Me,Ke,ce.data);else if(b.isData3DTexture)z?(ue&&t.texStorage3D(i.TEXTURE_3D,Re,ke,ce.width,ce.height,ce.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,Ke,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ce.width,ce.height,ce.depth,0,Me,Ke,ce.data);else if(b.isFramebufferTexture){if(ue)if(z)t.texStorage2D(i.TEXTURE_2D,Re,ke,ce.width,ce.height);else{let ae=ce.width,ie=ce.height;for(let De=0;De<Re;De++)t.texImage2D(i.TEXTURE_2D,De,ke,ae,ie,0,Me,Ke,null),ae>>=1,ie>>=1}}else if(st.length>0){if(z&&ue){let ae=Nt(st[0]);t.texStorage2D(i.TEXTURE_2D,Re,ke,ae.width,ae.height)}for(let ae=0,ie=st.length;ae<ie;ae++)ye=st[ae],z?ge&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Me,Ke,ye):t.texImage2D(i.TEXTURE_2D,ae,ke,Me,Ke,ye);b.generateMipmaps=!1}else if(z){if(ue){let ae=Nt(ce);t.texStorage2D(i.TEXTURE_2D,Re,ke,ae.width,ae.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ke,ce)}else t.texImage2D(i.TEXTURE_2D,0,ke,Me,Ke,ce);m(b)&&f(te),He.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function j(L,b,q){if(b.image.length!==6)return;let te=we(L,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let Q=n.get(re);if(re.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+q);let He=ut.getPrimaries(ut.workingColorSpace),me=b.colorSpace===Mi?null:ut.getPrimaries(b.colorSpace),Oe=b.colorSpace===Mi||He===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Be=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!Be&&!ce?Me[ie]=x(b.image[ie],!0,s.maxCubemapSize):Me[ie]=ce?b.image[ie].image:b.image[ie],Me[ie]=Vt(b,Me[ie]);let Ke=Me[0],ke=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),st=R(b.internalFormat,ke,ye,b.colorSpace),z=b.isVideoTexture!==!0,ue=Q.__version===void 0||te===!0,ge=re.dataReady,Re=P(b,Ke);Ce(i.TEXTURE_CUBE_MAP,b);let ae;if(Be){z&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,st,Ke.width,Ke.height);for(let ie=0;ie<6;ie++){ae=Me[ie].mipmaps;for(let De=0;De<ae.length;De++){let tt=ae[De];b.format!==bn?ke!==null?z?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,tt.width,tt.height,ke,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,st,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,0,0,tt.width,tt.height,ke,ye,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De,st,tt.width,tt.height,0,ke,ye,tt.data)}}}else{if(ae=b.mipmaps,z&&ue){ae.length>0&&Re++;let ie=Nt(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,st,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ce){z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,ke,ye,Me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,st,Me[ie].width,Me[ie].height,0,ke,ye,Me[ie].data);for(let De=0;De<ae.length;De++){let Et=ae[De].image[ie].image;z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,Et.width,Et.height,ke,ye,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,st,Et.width,Et.height,0,ke,ye,Et.data)}}else{z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ke,ye,Me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,st,ke,ye,Me[ie]);for(let De=0;De<ae.length;De++){let tt=ae[De];z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,0,0,ke,ye,tt.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De+1,st,ke,ye,tt.image[ie])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),Q.__version=re.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function fe(L,b,q,te,re,Q){let He=r.convert(q.format,q.colorSpace),me=r.convert(q.type),Oe=R(q.internalFormat,He,me,q.colorSpace),Be=n.get(b),ce=n.get(q);if(ce.__renderTarget=b,!Be.__hasExternalTextures){let Me=Math.max(1,b.width>>Q),Ke=Math.max(1,b.height>>Q);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,Oe,Me,Ke,b.depth,0,He,me,null):t.texImage2D(re,Q,Oe,Me,Ke,0,He,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Fe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,re,ce.__webglTexture,0,Rt(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,re,ce.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(L,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let te=b.depthTexture,re=te&&te.isDepthTexture?te.type:null,Q=w(b.stencilBuffer,re),He=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Rt(b);Fe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,Q,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,L)}else{let te=b.textures;for(let re=0;re<te.length;re++){let Q=te[re],He=r.convert(Q.format,Q.colorSpace),me=r.convert(Q.type),Oe=R(Q.internalFormat,He,me,Q.colorSpace),Be=Rt(b);q&&Fe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Oe,b.width,b.height):Fe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,Oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let re=te.__webglTexture,Q=Rt(b);if(b.depthTexture.format===zs)Fe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===er)Fe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ft(L){let b=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let te=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){let re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=te}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let te=L.texture.mipmaps;te&&te.length>0?Le(b.__webglFramebuffer[0],L):Le(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=i.createRenderbuffer(),Ve(b.__webglDepthbuffer[te],L,!1);else{let re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Q)}}else{let te=L.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ve(b.__webglDepthbuffer,L,!1);else{let re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(L,b,q){let te=n.get(L);b!==void 0&&fe(te.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ft(L)}function O(L){let b=L.texture,q=n.get(L),te=n.get(b);L.addEventListener("dispose",D);let re=L.textures,Q=L.isWebGLCubeRenderTarget===!0,He=re.length>1;if(He||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=b.version,o.memory.textures++),Q){q.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[me]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)q.__webglFramebuffer[me][Oe]=i.createFramebuffer()}else q.__webglFramebuffer[me]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)q.__webglFramebuffer[me]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(He)for(let me=0,Oe=re.length;me<Oe;me++){let Be=n.get(re[me]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Fe(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){let Oe=re[me];q.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[me]);let Be=r.convert(Oe.format,Oe.colorSpace),ce=r.convert(Oe.type),Me=R(Oe.internalFormat,Be,ce,Oe.colorSpace,L.isXRRenderTarget===!0),Ke=Rt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Me,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,q.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)fe(q.__webglFramebuffer[me][Oe],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe);else fe(q.__webglFramebuffer[me],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(b)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let me=0,Oe=re.length;me<Oe;me++){let Be=re[me],ce=n.get(Be),Me=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ce.__webglTexture),Ce(Me,Be),fe(q.__webglFramebuffer,L,Be,i.COLOR_ATTACHMENT0+me,Me,0),m(Be)&&f(Me)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,te.__webglTexture),Ce(me,b),b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)fe(q.__webglFramebuffer[Oe],L,b,i.COLOR_ATTACHMENT0,me,Oe);else fe(q.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,me,0);m(b)&&f(me),t.unbindTexture()}L.depthBuffer&&ft(L)}function Ct(L){let b=L.textures;for(let q=0,te=b.length;q<te;q++){let re=b[q];if(m(re)){let Q=C(L),He=n.get(re).__webglTexture;t.bindTexture(Q,He),f(Q),t.unbindTexture()}}}let it=[],Je=[];function Ne(L){if(L.samples>0){if(Fe(L)===!1){let b=L.textures,q=L.width,te=L.height,re=i.COLOR_BUFFER_BIT,Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(L),me=b.length>1;if(me)for(let Be=0;Be<b.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);let Oe=L.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Be=0;Be<b.length;Be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[Be]);let ce=n.get(b[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,q,te,0,0,q,te,re,i.NEAREST),c===!0&&(it.length=0,Je.length=0,it.push(i.COLOR_ATTACHMENT0+Be),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(Q),Je.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Be=0;Be<b.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,He.__webglColorRenderbuffer[Be]);let ce=n.get(b[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Rt(L){return Math.min(s.maxSamples,L.samples)}function Fe(L){let b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(L){let b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function Vt(L,b){let q=L.colorSpace,te=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==es&&q!==Mi&&(ut.getTransfer(q)===St?(te!==bn||re!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=ne,this.setTextureCube=X,this.rebindTextures=jt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Fe}function o0(i,e){function t(n,s=Mi){let r,o=ut.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yc)return i.BYTE;if(n===vc)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===ya)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===bn)return i.RGBA;if(n===zs)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===Tc)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===jr||n===Zr||n===Jr||n===Kr)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ia||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ia)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Na||n===Da||n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Ya||n===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===Ka||n===$a)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kn({vertexShader:a0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends Yn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Yc,f={},C=t.getContextAttributes(),R=null,w=null,P=[],I=[],D=new $e,U=null,v=new zt;v.viewport=new yt;let S=new zt;S.viewport=new yt;let N=[v,S],B=new aa,W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=P[V];return j===void 0&&(j=new Ws,P[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=P[V];return j===void 0&&(j=new Ws,P[V]=j),j.getGripSpace()},this.getHand=function(V){let j=P[V];return j===void 0&&(j=new Ws,P[V]=j),j.getHandSpace()};function $(V){let j=I.indexOf(V.inputSource);if(j===-1)return;let fe=P[j];fe!==void 0&&(fe.update(V.inputSource,V.frame,l||o),fe.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ne);for(let V=0;V<P.length;V++){let j=I[V];j!==null&&(I[V]=null,P[V].disconnect(j))}W=null,J=null,m.reset();for(let V in f)delete f[V];e.setRenderTarget(R),p=null,d=null,u=null,s=null,w=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ne),C.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ve=null,Le=null;C.depth&&(Le=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=C.stencil?er:zs,Ve=C.stencil?Qs:Fi);let ft={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new jn(d.textureWidth,d.textureHeight,{format:bn,type:Gn,depthTexture:new Nr(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new jn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(V){for(let j=0;j<V.removed.length;j++){let fe=V.removed[j],Ve=I.indexOf(fe);Ve>=0&&(I[Ve]=null,P[Ve].disconnect(fe))}for(let j=0;j<V.added.length;j++){let fe=V.added[j],Ve=I.indexOf(fe);if(Ve===-1){for(let ft=0;ft<P.length;ft++)if(ft>=I.length){I.push(fe),Ve=ft;break}else if(I[ft]===null){I[ft]=fe,Ve=ft;break}if(Ve===-1)break}let Le=P[Ve];Le&&Le.connect(fe)}}let X=new F,se=new F;function de(V,j,fe){X.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);let Ve=X.distanceTo(se),Le=j.projectionMatrix.elements,ft=fe.projectionMatrix.elements,jt=Le[14]/(Le[10]-1),O=Le[14]/(Le[10]+1),Ct=(Le[9]+1)/Le[5],it=(Le[9]-1)/Le[5],Je=(Le[8]-1)/Le[0],Ne=(ft[8]+1)/ft[0],Rt=jt*Je,Fe=jt*Ne,rt=Ve/(-Je+Ne),Vt=rt*-Je;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Vt),V.translateZ(rt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Le[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Nt=jt+rt,L=O+rt,b=Rt-Vt,q=Fe+(Ve-Vt),te=Ct*O/L*Nt,re=it*O/L*Nt;V.projectionMatrix.makePerspective(b,q,te,re,Nt,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function pe(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let j=V.near,fe=V.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),B.near=S.near=v.near=j,B.far=S.far=v.far=fe,(W!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,J=B.far),B.layers.mask=V.layers.mask|6,v.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let Ve=V.parent,Le=B.cameras;pe(B,Ve);for(let ft=0;ft<Le.length;ft++)pe(Le[ft],Ve);Le.length===2?de(B,v,S):B.projectionMatrix.copy(v.projectionMatrix),Ce(V,B,Ve)};function Ce(V,j,fe){fe===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(fe.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ts*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(V){return f[V]};let we=null;function Ee(V,j){if(h=j.getViewerPose(l||o),g=j,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Ve=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Ve=!0);for(let O=0;O<fe.length;O++){let Ct=fe[O],it=null;if(p!==null)it=p.getViewport(Ct);else{let Ne=u.getViewSubImage(d,Ct);it=Ne.viewport,O===0&&(e.setRenderTargetTextures(w,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(w))}let Je=N[O];Je===void 0&&(Je=new zt,Je.layers.enable(O),Je.viewport=new yt,N[O]=Je),Je.matrix.fromArray(Ct.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ct.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(it.x,it.y,it.width,it.height),O===0&&(B.matrix.copy(Je.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ve===!0&&B.cameras.push(Je)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let O=u.getDepthInformation(fe[0]);O&&O.isValid&&O.texture&&m.init(O,s.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let O=0;O<fe.length;O++){let Ct=fe[O].camera;if(Ct){let it=f[Ct];it||(it=new Dr,f[Ct]=it);let Je=u.getCameraImage(Ct);it.sourceTexture=Je}}}}for(let fe=0;fe<P.length;fe++){let Ve=I[fe],Le=P[fe];Ve!==null&&Le!==void 0&&Le.update(Ve,j,l||o)}we&&we(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let _e=new cd;_e.setAnimationLoop(Ee),this.setAnimationLoop=function(V){we=V},this.dispose=function(){}}},_s=new Kt,c0=new nt;function h0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,C,R,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,C,R):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let C=e.get(f),R=C.envMap,w=C.envMapRotation;R&&(m.envMap.value=R,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(_s)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,C,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=R*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,C){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let C=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,R){let w=R.program;n.uniformBlockBinding(C,w)}function l(C,R){let w=s[C.id];w===void 0&&(g(C),w=h(C),s[C.id]=w,C.addEventListener("dispose",m));let P=R.program;n.updateUBOMapping(C,P);let I=e.render.frame;r[C.id]!==I&&(d(C),r[C.id]=I)}function h(C){let R=u();C.__bindingPointIndex=R;let w=i.createBuffer(),P=C.__size,I=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let R=s[C.id],w=C.uniforms,P=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let I=0,D=w.length;I<D;I++){let U=Array.isArray(w[I])?w[I]:[w[I]];for(let v=0,S=U.length;v<S;v++){let N=U[v];if(p(N,I,v,P)===!0){let B=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],J=0;for(let $=0;$<W.length;$++){let k=W[$],ne=x(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,B+J,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,J),J+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,R,w,P){let I=C.value,D=R+"_"+w;if(P[D]===void 0)return typeof I=="number"||typeof I=="boolean"?P[D]=I:P[D]=I.clone(),!0;{let U=P[D];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return P[D]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(C){let R=C.uniforms,w=0,P=16;for(let D=0,U=R.length;D<U;D++){let v=Array.isArray(R[D])?R[D]:[R[D]];for(let S=0,N=v.length;S<N;S++){let B=v[S],W=Array.isArray(B.value)?B.value:[B.value];for(let J=0,$=W.length;J<$;J++){let k=W[J],ne=x(k),X=w%P,se=X%ne.boundary,de=X+se;w+=se,de!==0&&P-de<ne.storage&&(w+=P-de),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=ne.storage}}}let I=w%P;return I>0&&(w+=P-I),C.__size=w,C.__cache={},this}function x(C){let R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function m(C){let R=C.target;R.removeEventListener("dispose",m);let w=o.indexOf(R.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var sl=class{constructor(e={}){let{canvas:t=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,P=!1;this._outputColorSpace=vt;let I=0,D=0,U=null,v=-1,S=null,N=new yt,B=new yt,W=null,J=new Ze(0),$=0,k=t.width,ne=t.height,X=1,se=null,de=null,pe=new yt(0,0,k,ne),Ce=new yt(0,0,k,ne),we=!1,Ee=new qs,_e=!1,V=!1,j=new nt,fe=new F,Ve=new yt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function jt(){return U===null?X:1}let O=n;function Ct(E,H){return t.getContext(E,H)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ae,!1),O===null){let H="webgl2";if(O=Ct(H,E),O===null)throw Ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,Je,Ne,Rt,Fe,rt,Vt,Nt,L,b,q,te,re,Q,He,me,Oe,Be,ce,Me,Ke,ke,ye,st;function z(){it=new Rg(O),it.init(),ke=new o0(O,it),Je=new Mg(O,it,e,ke),Ne=new s0(O,it),Je.reversedDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),Rt=new Lg(O),Fe=new X_,rt=new r0(O,it,Ne,Fe,Je,ke,Rt),Vt=new Eg(w),Nt=new Cg(w),L=new Bf(O),ye=new vg(O,L),b=new Ig(O,L,Rt,ye),q=new Dg(O,b,L,Rt),ce=new Ng(O,Je,rt),me=new Sg(Fe),te=new W_(w,Vt,Nt,it,Je,ye,me),re=new h0(w,Fe),Q=new Y_,He=new Q_(it),Be=new yg(w,Vt,Nt,Ne,q,p,c),Oe=new n0(w,q,Je),st=new u0(O,Rt,Je,Ne),Me=new bg(O,it,Rt),Ke=new Pg(O,it,Rt),Rt.programs=te.programs,w.capabilities=Je,w.extensions=it,w.properties=Fe,w.renderLists=Q,w.shadowMap=Oe,w.state=Ne,w.info=Rt}z();let ue=new jc(w,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(k,ne,!1))},this.getSize=function(E){return E.set(k,ne)},this.setSize=function(E,H,Y=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,ne=H,t.width=Math.floor(E*X),t.height=Math.floor(H*X),Y===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(k*X,ne*X).floor()},this.setDrawingBufferSize=function(E,H,Y){k=E,ne=H,X=Y,t.width=Math.floor(E*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,H,Y,Z){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,H,Y,Z),Ne.viewport(N.copy(pe).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,H,Y,Z){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,H,Y,Z),Ne.scissor(B.copy(Ce).multiplyScalar(X).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){Ne.setScissorTest(we=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Y=!0){let Z=0;if(E){let G=!1;if(U!==null){let le=U.texture.format;G=le===Ea||le===Sa||le===Ma}if(G){let le=U.texture.type,be=le===Gn||le===Fi||le===Ks||le===Qs||le===va||le===ba,Ie=Be.getClearColor(),Te=Be.getClearAlpha(),je=Ie.r,Qe=Ie.g,We=Ie.b;be?(g[0]=je,g[1]=Qe,g[2]=We,g[3]=Te,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=je,x[1]=Qe,x[2]=We,x[3]=Te,O.clearBufferiv(O.COLOR,0,x))}else Z|=O.COLOR_BUFFER_BIT}H&&(Z|=O.DEPTH_BUFFER_BIT),Y&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Be.dispose(),Q.dispose(),He.dispose(),Fe.dispose(),Vt.dispose(),Nt.dispose(),q.dispose(),ye.dispose(),st.dispose(),te.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",En),ue.removeEventListener("sessionend",lo),ni.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=Rt.autoReset,H=Oe.enabled,Y=Oe.autoUpdate,Z=Oe.needsUpdate,G=Oe.type;z(),Rt.autoReset=E,Oe.enabled=H,Oe.autoUpdate=Y,Oe.needsUpdate=Z,Oe.type=G}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){let H=E.target;H.removeEventListener("dispose",ie),De(H)}function De(E){tt(E),Fe.remove(E)}function tt(E){let H=Fe.get(E).programs;H!==void 0&&(H.forEach(function(Y){te.releaseProgram(Y)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Y,Z,G,le){H===null&&(H=Le);let be=G.isMesh&&G.matrixWorld.determinant()<0,Ie=Ml(E,H,Y,Z,G);Ne.setMaterial(Z,be);let Te=Y.index,je=1;if(Z.wireframe===!0){if(Te=b.getWireframeAttribute(Y),Te===void 0)return;je=2}let Qe=Y.drawRange,We=Y.attributes.position,ct=Qe.start*je,pt=(Qe.start+Qe.count)*je;le!==null&&(ct=Math.max(ct,le.start*je),pt=Math.min(pt,(le.start+le.count)*je)),Te!==null?(ct=Math.max(ct,0),pt=Math.min(pt,Te.count)):We!=null&&(ct=Math.max(ct,0),pt=Math.min(pt,We.count));let Dt=pt-ct;if(Dt<0||Dt===1/0)return;ye.setup(G,Z,Ie,Y,Te);let wt,bt=Me;if(Te!==null&&(wt=L.get(Te),bt=Ke,bt.setIndex(wt)),G.isMesh)Z.wireframe===!0?(Ne.setLineWidth(Z.wireframeLinewidth*jt()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(G.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),Ne.setLineWidth(qe*jt()),G.isLineSegments?bt.setMode(O.LINES):G.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else G.isPoints?bt.setMode(O.POINTS):G.isSprite&&bt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let qe=G._multiDrawStarts,It=G._multiDrawCounts,mt=G._multiDrawCount,tn=Te?L.get(Te).bytesPerElement:1,ii=Fe.get(Z).currentProgram.getUniforms();for(let gt=0;gt<mt;gt++)ii.setValue(O,"_gl_DrawID",gt),bt.render(qe[gt]/tn,It[gt])}else if(G.isInstancedMesh)bt.renderInstances(ct,Dt,G.count);else if(Y.isInstancedBufferGeometry){let qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,qe);bt.renderInstances(ct,Dt,It)}else bt.render(ct,Dt)};function Et(E,H,Y){E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,Xi(E,H,Y),E.side=Fn,E.needsUpdate=!0,Xi(E,H,Y),E.side=Rn):Xi(E,H,Y)}this.compile=function(E,H,Y=null){Y===null&&(Y=E),f=He.get(Y),f.init(H),R.push(f),Y.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),E!==Y&&E.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();let Z=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let le=G.material;if(le)if(Array.isArray(le))for(let be=0;be<le.length;be++){let Ie=le[be];Et(Ie,Y,G),Z.add(Ie)}else Et(le,Y,G),Z.add(le)}),f=R.pop(),Z},this.compileAsync=function(E,H,Y=null){let Z=this.compile(E,H,Y);return new Promise(G=>{function le(){if(Z.forEach(function(be){Fe.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){G(E);return}setTimeout(le,10)}it.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ot=null;function Sn(E){ot&&ot(E)}function En(){ni.stop()}function lo(){ni.start()}let ni=new cd;ni.setAnimationLoop(Sn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(E){ot=E,ue.setAnimationLoop(E),E===null?ni.stop():ni.start()},ue.addEventListener("sessionstart",En),ue.addEventListener("sessionend",lo),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,H,U),f=He.get(E,R.length),f.init(H),R.push(f),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ee.setFromProjectionMatrix(j,Un,H.reversedDepth),V=this.localClippingEnabled,_e=me.init(this.clippingPlanes,V),m=Q.get(E,C.length),m.init(),C.push(m),ue.enabled===!0&&ue.isPresenting===!0){let le=w.xr.getDepthSensingMesh();le!==null&&cr(le,H,-1/0,w.sortObjects)}cr(E,H,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(se,de),ft=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ft&&Be.addToRenderList(m,E),this.info.render.frame++,_e===!0&&me.beginShadows();let Y=f.state.shadowsArray;Oe.render(Y,E,H),_e===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,G=m.transmissive;if(f.setupLights(),H.isArrayCamera){let le=H.cameras;if(G.length>0)for(let be=0,Ie=le.length;be<Ie;be++){let Te=le[be];ho(Z,G,E,Te)}ft&&Be.render(E);for(let be=0,Ie=le.length;be<Ie;be++){let Te=le[be];co(m,E,Te,Te.viewport)}}else G.length>0&&ho(Z,G,E,H),ft&&Be.render(E),co(m,E,H);U!==null&&D===0&&(rt.updateMultisampleRenderTarget(U),rt.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(w,E,H),ye.resetDefaultState(),v=-1,S=null,R.pop(),R.length>0?(f=R[R.length-1],_e===!0&&me.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function cr(E,H,Y,Z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ee.intersectsSprite(E)){Z&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);let be=q.update(E),Ie=E.material;Ie.visible&&m.push(E,be,Ie,Y,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ee.intersectsObject(E))){let be=q.update(E),Ie=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(Ie)){let Te=be.groups;for(let je=0,Qe=Te.length;je<Qe;je++){let We=Te[je],ct=Ie[We.materialIndex];ct&&ct.visible&&m.push(E,be,ct,Y,Ve.z,We)}}else Ie.visible&&m.push(E,be,Ie,Y,Ve.z,null)}}let le=E.children;for(let be=0,Ie=le.length;be<Ie;be++)cr(le[be],H,Y,Z)}function co(E,H,Y,Z){let G=E.opaque,le=E.transmissive,be=E.transparent;f.setupLightsView(Y),_e===!0&&me.setGlobalState(w.clippingPlanes,Y),Z&&Ne.viewport(N.copy(Z)),G.length>0&&Wi(G,H,Y),le.length>0&&Wi(le,H,Y),be.length>0&&Wi(be,H,Y),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function ho(E,H,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new jn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?$s:Gn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let le=f.state.transmissionRenderTarget[Z.id],be=Z.viewport||N;le.setSize(be.z*w.transmissionResolutionScale,be.w*w.transmissionResolutionScale);let Ie=w.getRenderTarget(),Te=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(le),w.getClearColor(J),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),ft&&Be.render(Y);let Qe=w.toneMapping;w.toneMapping=bi;let We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),_e===!0&&me.setGlobalState(w.clippingPlanes,Z),Wi(E,Y,Z),rt.updateMultisampleRenderTarget(le),rt.updateRenderTargetMipmap(le),it.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let pt=0,Dt=H.length;pt<Dt;pt++){let wt=H[pt],bt=wt.object,qe=wt.geometry,It=wt.material,mt=wt.group;if(It.side===Rn&&bt.layers.test(Z.layers)){let tn=It.side;It.side=cn,It.needsUpdate=!0,uo(bt,Y,Z,qe,It,mt),It.side=tn,It.needsUpdate=!0,ct=!0}}ct===!0&&(rt.updateMultisampleRenderTarget(le),rt.updateRenderTargetMipmap(le))}w.setRenderTarget(Ie,Te,je),w.setClearColor(J,$),We!==void 0&&(Z.viewport=We),w.toneMapping=Qe}function Wi(E,H,Y){let Z=H.isScene===!0?H.overrideMaterial:null;for(let G=0,le=E.length;G<le;G++){let be=E[G],Ie=be.object,Te=be.geometry,je=be.group,Qe=be.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Ie.layers.test(Y.layers)&&uo(Ie,H,Y,Te,Qe,je)}}function uo(E,H,Y,Z,G,le){E.onBeforeRender(w,H,Y,Z,G,le),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(w,H,Y,Z,E,le),G.transparent===!0&&G.side===Rn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,w.renderBufferDirect(Y,H,Z,G,E,le),G.side=Fn,G.needsUpdate=!0,w.renderBufferDirect(Y,H,Z,G,E,le),G.side=Rn):w.renderBufferDirect(Y,H,Z,G,E,le),E.onAfterRender(w,H,Y,Z,G,le)}function Xi(E,H,Y){H.isScene!==!0&&(H=Le);let Z=Fe.get(E),G=f.state.lights,le=f.state.shadowsArray,be=G.state.version,Ie=te.getParameters(E,G.state,le,H,Y),Te=te.getProgramCacheKey(Ie),je=Z.programs;Z.environment=E.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(E.isMeshStandardMaterial?Nt:Vt).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",ie),je=new Map,Z.programs=je);let Qe=je.get(Te);if(Qe!==void 0){if(Z.currentProgram===Qe&&Z.lightsStateVersion===be)return po(E,Ie),Qe}else Ie.uniforms=te.getUniforms(E),E.onBeforeCompile(Ie,w),Qe=te.acquireProgram(Ie,Te),je.set(Te,Qe),Z.uniforms=Ie.uniforms;let We=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=me.uniform),po(E,Ie),Z.needsLights=El(E),Z.lightsStateVersion=be,Z.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Qe,Z.uniformsList=null,Qe}function fo(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=ir.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function po(E,H){let Y=Fe.get(E);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Ml(E,H,Y,Z,G){H.isScene!==!0&&(H=Le),rt.resetTextureUnits();let le=H.fog,be=Z.isMeshStandardMaterial?H.environment:null,Ie=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:es,Te=(Z.isMeshStandardMaterial?Nt:Vt).get(Z.envMap||be),je=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qe=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),We=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,pt=!!Y.morphAttributes.color,Dt=bi;Z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Dt=w.toneMapping);let wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=wt!==void 0?wt.length:0,qe=Fe.get(Z),It=f.state.lights;if(_e===!0&&(V===!0||E!==S)){let Gt=E===S&&Z.id===v;me.setState(Z,E,Gt)}let mt=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==It.state.version||qe.outputColorSpace!==Ie||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==Te||Z.fog===!0&&qe.fog!==le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==me.numPlanes||qe.numIntersection!==me.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Qe||qe.morphTargets!==We||qe.morphNormals!==ct||qe.morphColors!==pt||qe.toneMapping!==Dt||qe.morphTargetsCount!==bt)&&(mt=!0):(mt=!0,qe.__version=Z.version);let tn=qe.currentProgram;mt===!0&&(tn=Xi(Z,H,G));let ii=!1,gt=!1,si=!1,Pt=tn.getUniforms(),nn=qe.uniforms;if(Ne.useProgram(tn.program)&&(ii=!0,gt=!0,si=!0),Z.id!==v&&(v=Z.id,gt=!0),ii||S!==E){Ne.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Pt.setValue(O,"projectionMatrix",E.projectionMatrix),Pt.setValue(O,"viewMatrix",E.matrixWorldInverse);let Wt=Pt.map.cameraPosition;Wt!==void 0&&Wt.setValue(O,fe.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,gt=!0,si=!0)}if(G.isSkinnedMesh){Pt.setOptional(O,G,"bindMatrix"),Pt.setOptional(O,G,"bindMatrixInverse");let Gt=G.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Pt.setValue(O,"boneTexture",Gt.boneTexture,rt))}G.isBatchedMesh&&(Pt.setOptional(O,G,"batchingTexture"),Pt.setValue(O,"batchingTexture",G._matricesTexture,rt),Pt.setOptional(O,G,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",G._indirectTexture,rt),Pt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",G._colorsTexture,rt));let sn=Y.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ce.update(G,Y,tn),(gt||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Pt.setValue(O,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nn.envMap.value=Te,nn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),gt&&(Pt.setValue(O,"toneMappingExposure",w.toneMappingExposure),qe.needsLights&&Sl(nn,si),le&&Z.fog===!0&&re.refreshFogUniforms(nn,le),re.refreshMaterialUniforms(nn,Z,X,ne,f.state.transmissionRenderTarget[E.id]),ir.upload(O,fo(qe),nn,rt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ir.upload(O,fo(qe),nn,rt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(O,"center",G.center),Pt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(O,"normalMatrix",G.normalMatrix),Pt.setValue(O,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Gt=Z.uniformsGroups;for(let Wt=0,Ei=Gt.length;Wt<Ei;Wt++){let qn=Gt[Wt];st.update(qn,tn),st.bind(qn,tn)}}return tn}function Sl(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function El(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,H,Y){let Z=Fe.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Fe.get(E.texture).__webglTexture=H,Fe.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let Y=Fe.get(E);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};let wl=O.createFramebuffer();this.setRenderTarget=function(E,H=0,Y=0){U=E,I=H,D=Y;let Z=!0,G=null,le=!1,be=!1;if(E){let Te=Fe.get(E);if(Te.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(Te.__webglFramebuffer===void 0)rt.setupRenderTarget(E);else if(Te.__hasExternalTextures)rt.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let We=E.depthTexture;if(Te.__boundDepthTexture!==We){if(We!==null&&Fe.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(E)}}let je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(be=!0);let Qe=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[H])?G=Qe[H][Y]:G=Qe[H],le=!0):E.samples>0&&rt.useMultisampledRTT(E)===!1?G=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?G=Qe[Y]:G=Qe,N.copy(E.viewport),B.copy(E.scissor),W=E.scissorTest}else N.copy(pe).multiplyScalar(X).floor(),B.copy(Ce).multiplyScalar(X).floor(),W=we;if(Y!==0&&(G=wl),Ne.bindFramebuffer(O.FRAMEBUFFER,G)&&Z&&Ne.drawBuffers(E,G),Ne.viewport(N),Ne.scissor(B),Ne.setScissorTest(W),le){let Te=Fe.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,Y)}else if(be){let Te=H;for(let je=0;je<E.textures.length;je++){let Qe=Fe.get(E.textures[je]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+je,Qe.__webglTexture,Y,Te)}}else if(E!==null&&Y!==0){let Te=Fe.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Te.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(E,H,Y,Z,G,le,be,Ie=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){Ne.bindFramebuffer(O.FRAMEBUFFER,Te);try{let je=E.textures[Ie],Qe=je.format,We=je.type;if(!Je.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-Z&&Y>=0&&Y<=E.height-G&&(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ie),O.readPixels(H,Y,Z,G,ke.convert(Qe),ke.convert(We),le))}finally{let je=U!==null?Fe.get(U).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(E,H,Y,Z,G,le,be,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te)if(H>=0&&H<=E.width-Z&&Y>=0&&Y<=E.height-G){Ne.bindFramebuffer(O.FRAMEBUFFER,Te);let je=E.textures[Ie],Qe=je.format,We=je.type;if(!Je.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ie),O.readPixels(H,Y,Z,G,ke.convert(Qe),ke.convert(We),0);let pt=U!==null?Fe.get(U).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,pt);let Dt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Fu(O,Dt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(ct),O.deleteSync(Dt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Y=0){let Z=Math.pow(2,-Y),G=Math.floor(E.image.width*Z),le=Math.floor(E.image.height*Z),be=H!==null?H.x:0,Ie=H!==null?H.y:0;rt.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,be,Ie,G,le),Ne.unbindTexture()};let Tl=O.createFramebuffer(),Al=O.createFramebuffer();this.copyTextureToTexture=function(E,H,Y=null,Z=null,G=0,le=null){le===null&&(G!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=G,G=0):le=0);let be,Ie,Te,je,Qe,We,ct,pt,Dt,wt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(Y!==null)be=Y.max.x-Y.min.x,Ie=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,je=Y.min.x,Qe=Y.min.y,We=Y.isBox3?Y.min.z:0;else{let sn=Math.pow(2,-G);be=Math.floor(wt.width*sn),Ie=Math.floor(wt.height*sn),E.isDataArrayTexture?Te=wt.depth:E.isData3DTexture?Te=Math.floor(wt.depth*sn):Te=1,je=0,Qe=0,We=0}Z!==null?(ct=Z.x,pt=Z.y,Dt=Z.z):(ct=0,pt=0,Dt=0);let bt=ke.convert(H.format),qe=ke.convert(H.type),It;H.isData3DTexture?(rt.setTexture3D(H,0),It=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),It=O.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),It=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let mt=O.getParameter(O.UNPACK_ROW_LENGTH),tn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ii=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),si=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,je),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We);let Pt=E.isDataArrayTexture||E.isData3DTexture,nn=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let sn=Fe.get(E),Gt=Fe.get(H),Wt=Fe.get(sn.__renderTarget),Ei=Fe.get(Gt.__renderTarget);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let qn=0;qn<Te;qn++)Pt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(E).__webglTexture,G,We+qn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(H).__webglTexture,le,Dt+qn)),O.blitFramebuffer(je,Qe,be,Ie,ct,pt,be,Ie,O.DEPTH_BUFFER_BIT,O.NEAREST);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||Fe.has(E)){let sn=Fe.get(E),Gt=Fe.get(H);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,Tl),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,Al);for(let Wt=0;Wt<Te;Wt++)Pt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,G,We+Wt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,G),nn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.__webglTexture,le,Dt+Wt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Gt.__webglTexture,le),G!==0?O.blitFramebuffer(je,Qe,be,Ie,ct,pt,be,Ie,O.COLOR_BUFFER_BIT,O.NEAREST):nn?O.copyTexSubImage3D(It,le,ct,pt,Dt+Wt,je,Qe,be,Ie):O.copyTexSubImage2D(It,le,ct,pt,je,Qe,be,Ie);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else nn?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(It,le,ct,pt,Dt,be,Ie,Te,bt,qe,wt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(It,le,ct,pt,Dt,be,Ie,Te,bt,wt.data):O.texSubImage3D(It,le,ct,pt,Dt,be,Ie,Te,bt,qe,wt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,le,ct,pt,be,Ie,bt,qe,wt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,le,ct,pt,wt.width,wt.height,bt,wt.data):O.texSubImage2D(O.TEXTURE_2D,le,ct,pt,be,Ie,bt,qe,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ii),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,si),le===0&&H.generateMipmaps&&O.generateMipmap(It),Ne.unbindTexture()},this.initRenderTarget=function(E){Fe.get(E).__webglFramebuffer===void 0&&rt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?rt.setTextureCube(E,0):E.isData3DTexture?rt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?rt.setTexture2DArray(E,0):rt.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){I=0,D=0,U=null,Ne.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var pd={type:"change"},$c={type:"start"},gd={type:"end"},ol=new mi,md=new An,d0=Math.cos(70*Xn.DEG2RAD),Yt=new F,_n=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6,al=class extends Wr{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Ot,this._lastTargetPosition=new F,this._quat=new Ot().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new F,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new F,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=p0.bind(this),this._onPointerDown=f0.bind(this),this._onPointerUp=m0.bind(this),this._onContextMenu=M0.bind(this),this._onMouseWheel=x0.bind(this),this._onKeyDown=y0.bind(this),this._onTouchStart=v0.bind(this),this._onTouchMove=b0.bind(this),this._onMouseDown=g0.bind(this),this._onMouseMove=_0.bind(this),this._interceptControlDown=S0.bind(this),this._interceptControlUp=E0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=At.NONE}update(e=null){let t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Yt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<d0?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function f0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function p0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function m0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gd),this.state=At.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function g0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=At.DOLLY;break;case Di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}break;case Di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent($c)}function _0(i){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function x0(i){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(i.preventDefault(),this.dispatchEvent($c),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gd))}function y0(i){this.enabled!==!1&&this._handleKeyDown(i)}function v0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=At.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=At.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent($c)}function b0(i){switch(this._trackPointer(i),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=At.NONE}}function M0(i){this.enabled!==!1&&i.preventDefault()}function S0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ll=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Kn(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){function t(l){let h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;let g=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(g,h,x))return!1;return!0}function n(l,h,u){for(let d=0,p=l.length;d<p;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function s(l){let h=new DataView(l),u=h.getUint32(80,!0),d,p,g,x=!1,m,f,C,R,w;for(let N=0;N<70;N++)h.getUint32(N,!1)==1129270351&&h.getUint8(N+4)==82&&h.getUint8(N+5)==61&&(x=!0,m=new Float32Array(u*3*3),f=h.getUint8(N+6)/255,C=h.getUint8(N+7)/255,R=h.getUint8(N+8)/255,w=h.getUint8(N+9)/255);let P=84,I=50,D=new kt,U=new Float32Array(u*3*3),v=new Float32Array(u*3*3),S=new Ze;for(let N=0;N<u;N++){let B=P+N*I,W=h.getFloat32(B,!0),J=h.getFloat32(B+4,!0),$=h.getFloat32(B+8,!0);if(x){let k=h.getUint16(B+48,!0);(k&32768)===0?(d=(k&31)/31,p=(k>>5&31)/31,g=(k>>10&31)/31):(d=f,p=C,g=R)}for(let k=1;k<=3;k++){let ne=B+k*12,X=N*3*3+(k-1)*3;U[X]=h.getFloat32(ne,!0),U[X+1]=h.getFloat32(ne+4,!0),U[X+2]=h.getFloat32(ne+8,!0),v[X]=W,v[X+1]=J,v[X+2]=$,x&&(S.setRGB(d,p,g,vt),m[X]=S.r,m[X+1]=S.g,m[X+2]=S.b)}}return D.setAttribute("position",new Jt(U,3)),D.setAttribute("normal",new Jt(v,3)),x&&(D.setAttribute("color",new Jt(m,3)),D.hasColors=!0,D.alpha=w),D}function r(l){let h=new kt,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,g=0,x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),f=new RegExp("normal"+x+x+x,"g"),C=[],R=[],w=[],P=new F,I,D=0,U=0,v=0;for(;(I=u.exec(l))!==null;){U=v;let S=I[0],N=(I=p.exec(S))!==null?I[1]:"";for(w.push(N);(I=d.exec(S))!==null;){let J=0,$=0,k=I[0];for(;(I=f.exec(k))!==null;)P.x=parseFloat(I[1]),P.y=parseFloat(I[2]),P.z=parseFloat(I[3]),$++;for(;(I=m.exec(k))!==null;)C.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),R.push(P.x,P.y,P.z),J++,v++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),J!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let B=U,W=v-U;h.userData.groupNames=w,h.addGroup(B,W,D),D++}return h.setAttribute("position",new ht(C,3)),h.setAttribute("normal",new ht(R,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}let c=a(e);return t(c)?s(c):r(o(e))}};var eo=class extends kr{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case d:case x:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function n(k,ne,X,se,de){let pe,Ce,we=X.pixel_size>>3,Ee=X.width*X.height*we;if(ne&&(Ce=de.subarray(se,se+=X.colormap_length*(X.colormap_size>>3))),k){pe=new Uint8Array(Ee);let _e,V,j,fe=0,Ve=new Uint8Array(we);for(;fe<Ee;)if(_e=de[se++],V=(_e&127)+1,_e&128){for(j=0;j<we;++j)Ve[j]=de[se++];for(j=0;j<V;++j)pe.set(Ve,fe+j*we);fe+=we*V}else{for(V*=we,j=0;j<V;++j)pe[fe+j]=de[se++];fe+=V}}else pe=de.subarray(se,se+=ne?X.width*X.height:Ee);return{pixel_data:pe,palettes:Ce}}function s(k,ne,X,se,de,pe,Ce,we,Ee){let _e=Ee,V,j=0,fe,Ve,Le=S.width;for(Ve=ne;Ve!==se;Ve+=X)for(fe=de;fe!==Ce;fe+=pe,j++)V=we[j],k[(fe+Le*Ve)*4+3]=255,k[(fe+Le*Ve)*4+2]=_e[V*3+0],k[(fe+Le*Ve)*4+1]=_e[V*3+1],k[(fe+Le*Ve)*4+0]=_e[V*3+2];return k}function r(k,ne,X,se,de,pe,Ce,we){let Ee,_e=0,V,j,fe=S.width;for(j=ne;j!==se;j+=X)for(V=de;V!==Ce;V+=pe,_e+=2)Ee=we[_e+0]+(we[_e+1]<<8),k[(V+fe*j)*4+0]=(Ee&31744)>>7,k[(V+fe*j)*4+1]=(Ee&992)>>2,k[(V+fe*j)*4+2]=(Ee&31)<<3,k[(V+fe*j)*4+3]=Ee&32768?0:255;return k}function o(k,ne,X,se,de,pe,Ce,we){let Ee=0,_e,V,j=S.width;for(V=ne;V!==se;V+=X)for(_e=de;_e!==Ce;_e+=pe,Ee+=3)k[(_e+j*V)*4+3]=255,k[(_e+j*V)*4+2]=we[Ee+0],k[(_e+j*V)*4+1]=we[Ee+1],k[(_e+j*V)*4+0]=we[Ee+2];return k}function a(k,ne,X,se,de,pe,Ce,we){let Ee=0,_e,V,j=S.width;for(V=ne;V!==se;V+=X)for(_e=de;_e!==Ce;_e+=pe,Ee+=4)k[(_e+j*V)*4+2]=we[Ee+0],k[(_e+j*V)*4+1]=we[Ee+1],k[(_e+j*V)*4+0]=we[Ee+2],k[(_e+j*V)*4+3]=we[Ee+3];return k}function c(k,ne,X,se,de,pe,Ce,we){let Ee,_e=0,V,j,fe=S.width;for(j=ne;j!==se;j+=X)for(V=de;V!==Ce;V+=pe,_e++)Ee=we[_e],k[(V+fe*j)*4+0]=Ee,k[(V+fe*j)*4+1]=Ee,k[(V+fe*j)*4+2]=Ee,k[(V+fe*j)*4+3]=255;return k}function l(k,ne,X,se,de,pe,Ce,we){let Ee=0,_e,V,j=S.width;for(V=ne;V!==se;V+=X)for(_e=de;_e!==Ce;_e+=pe,Ee+=2)k[(_e+j*V)*4+0]=we[Ee+0],k[(_e+j*V)*4+1]=we[Ee+0],k[(_e+j*V)*4+2]=we[Ee+0],k[(_e+j*V)*4+3]=we[Ee+1];return k}function h(k,ne,X,se,de){let pe,Ce,we,Ee,_e,V;switch((S.flags&C)>>R){default:case I:pe=0,we=1,_e=ne,Ce=0,Ee=1,V=X;break;case w:pe=0,we=1,_e=ne,Ce=X-1,Ee=-1,V=-1;break;case D:pe=ne-1,we=-1,_e=-1,Ce=0,Ee=1,V=X;break;case P:pe=ne-1,we=-1,_e=-1,Ce=X-1,Ee=-1,V=-1;break}if(W)switch(S.pixel_size){case 8:c(k,Ce,Ee,V,pe,we,_e,se);break;case 16:l(k,Ce,Ee,V,pe,we,_e,se);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:s(k,Ce,Ee,V,pe,we,_e,se,de);break;case 16:r(k,Ce,Ee,V,pe,we,_e,se);break;case 24:o(k,Ce,Ee,V,pe,we,_e,se);break;case 32:a(k,Ce,Ee,V,pe,we,_e,se);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}let u=0,d=1,p=2,g=3,x=9,m=10,f=11,C=48,R=4,w=0,P=1,I=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let U=0,v=new Uint8Array(e),S={id_length:v[U++],colormap_type:v[U++],image_type:v[U++],colormap_index:v[U++]|v[U++]<<8,colormap_length:v[U++]|v[U++]<<8,colormap_size:v[U++],origin:[v[U++]|v[U++]<<8,v[U++]|v[U++]<<8],width:v[U++]|v[U++]<<8,height:v[U++]|v[U++]<<8,pixel_size:v[U++],flags:v[U++]};if(t(S),S.id_length+U>e.length)throw new Error("THREE.TGALoader: No data.");U+=S.id_length;let N=!1,B=!1,W=!1;switch(S.image_type){case x:N=!0,B=!0;break;case d:B=!0;break;case m:N=!0;break;case p:break;case f:N=!0,W=!0;break;case g:W=!0;break}let J=new Uint8Array(S.width*S.height*4),$=n(N,B,S,U,v);return h(J,S.width,S.height,$.pixel_data,$.palettes),{data:J,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:Hn}}};var cl=class extends ln{load(e,t,n,s){let r=this,o=r.path===""?ds.extractUrlBase(e):r.path,a=new Kn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e,t){function n(y,_){let T=[],M=y.childNodes;for(let A=0,K=M.length;A<K;A++){let ee=M[A];ee.nodeName===_&&T.push(ee)}return T}function s(y){if(y.length===0)return[];let _=y.trim().split(/\s+/),T=new Array(_.length);for(let M=0,A=_.length;M<A;M++)T[M]=_[M];return T}function r(y){if(y.length===0)return[];let _=y.trim().split(/\s+/),T=new Array(_.length);for(let M=0,A=_.length;M<A;M++)T[M]=parseFloat(_[M]);return T}function o(y){if(y.length===0)return[];let _=y.trim().split(/\s+/),T=new Array(_.length);for(let M=0,A=_.length;M<A;M++)T[M]=parseInt(_[M]);return T}function a(y){return y.substring(1)}function c(){return"three_default_"+Fd++}function l(y){return Object.keys(y).length===0}function h(y){return{unit:u(n(y,"unit")[0]),upAxis:d(n(y,"up_axis")[0])}}function u(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function d(y){return y!==void 0?y.textContent:"Y_UP"}function p(y,_,T,M){let A=n(y,_)[0];if(A!==void 0){let K=n(A,T);for(let ee=0;ee<K.length;ee++)M(K[ee])}}function g(y,_){for(let T in y){let M=y[T];M.build=_(y[T])}}function x(y,_){return y.build!==void 0||(y.build=_(y)),y.build}function m(y){let _={sources:{},samplers:{},channels:{}},T=!1;for(let M=0,A=y.childNodes.length;M<A;M++){let K=y.childNodes[M];if(K.nodeType!==1)continue;let ee;switch(K.nodeName){case"source":ee=K.getAttribute("id"),_.sources[ee]=ge(K);break;case"sampler":ee=K.getAttribute("id"),_.samplers[ee]=f(K);break;case"channel":ee=K.getAttribute("target"),_.channels[ee]=C(K);break;case"animation":m(K),T=!0;break;default:console.log(K)}}T===!1&&(et.animations[y.getAttribute("id")||Xn.generateUUID()]=_)}function f(y){let _={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let K=a(A.getAttribute("source")),ee=A.getAttribute("semantic");_.inputs[ee]=K;break}}return _}function C(y){let _={},M=y.getAttribute("target").split("/"),A=M.shift(),K=M.shift(),ee=K.indexOf("(")!==-1,Ae=K.indexOf(".")!==-1;if(Ae)M=K.split("."),K=M.shift(),_.member=M.shift();else if(ee){let xe=K.split("(");K=xe.shift();for(let Se=0;Se<xe.length;Se++)xe[Se]=parseInt(xe[Se].replace(/\)/,""));_.indices=xe}return _.id=A,_.sid=K,_.arraySyntax=ee,_.memberSyntax=Ae,_.sampler=a(y.getAttribute("source")),_}function R(y){let _=[],T=y.channels,M=y.samplers,A=y.sources;for(let K in T)if(T.hasOwnProperty(K)){let ee=T[K],Ae=M[ee.sampler],xe=Ae.inputs.INPUT,Se=Ae.inputs.OUTPUT,Ge=A[xe],oe=A[Se],ze=P(ee,Ge,oe);S(ze,_)}return _}function w(y){return x(et.animations[y],R)}function P(y,_,T){let M=et.nodes[y.id],A=pt(M.id),K=M.transforms[y.sid],ee=M.matrix.clone().transpose(),Ae,xe,Se,Ge,oe,ze,Pe={};switch(K){case"matrix":for(Se=0,Ge=_.array.length;Se<Ge;Se++)if(Ae=_.array[Se],xe=Se*T.stride,Pe[Ae]===void 0&&(Pe[Ae]={}),y.arraySyntax===!0){let Ut=T.array[xe],Mt=y.indices[0]+4*y.indices[1];Pe[Ae][Mt]=Ut}else for(oe=0,ze=T.stride;oe<ze;oe++)Pe[Ae][oe]=T.array[xe+oe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let Ye=I(Pe,ee);return{name:A.uuid,keyframes:Ye}}function I(y,_){let T=[];for(let A in y)T.push({time:parseFloat(A),value:y[A]});T.sort(M);for(let A=0;A<16;A++)N(T,A,_.elements[A]);return T;function M(A,K){return A.time-K.time}}let D=new F,U=new F,v=new Ot;function S(y,_){let T=y.keyframes,M=y.name,A=[],K=[],ee=[],Ae=[];for(let xe=0,Se=T.length;xe<Se;xe++){let Ge=T[xe],oe=Ge.time,ze=Ge.value;Y.fromArray(ze).transpose(),Y.decompose(D,v,U),A.push(oe),K.push(D.x,D.y,D.z),ee.push(v.x,v.y,v.z,v.w),Ae.push(U.x,U.y,U.z)}return K.length>0&&_.push(new Jn(M+".position",A,K)),ee.length>0&&_.push(new xi(M+".quaternion",A,ee)),Ae.length>0&&_.push(new Jn(M+".scale",A,Ae)),_}function N(y,_,T){let M,A=!0,K,ee;for(K=0,ee=y.length;K<ee;K++)M=y[K],M.value[_]===void 0?M.value[_]=null:A=!1;if(A===!0)for(K=0,ee=y.length;K<ee;K++)M=y[K],M.value[_]=T;else B(y,_)}function B(y,_){let T,M;for(let A=0,K=y.length;A<K;A++){let ee=y[A];if(ee.value[_]===null){if(T=W(y,A,_),M=J(y,A,_),T===null){ee.value[_]=M.value[_];continue}if(M===null){ee.value[_]=T.value[_];continue}$(ee,T,M,_)}}}function W(y,_,T){for(;_>=0;){let M=y[_];if(M.value[T]!==null)return M;_--}return null}function J(y,_,T){for(;_<y.length;){let M=y[_];if(M.value[T]!==null)return M;_++}return null}function $(y,_,T,M){if(T.time-_.time===0){y.value[M]=_.value[M];return}y.value[M]=(y.time-_.time)*(T.value[M]-_.value[M])/(T.time-_.time)+_.value[M]}function k(y){let _={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":_.animations.push(a(A.getAttribute("url")));break}}et.clips[y.getAttribute("id")]=_}function ne(y){let _=[],T=y.name,M=y.end-y.start||-1,A=y.animations;for(let K=0,ee=A.length;K<ee;K++){let Ae=w(A[K]);for(let xe=0,Se=Ae.length;xe<Se;xe++)_.push(Ae[xe])}return new js(T,M,_)}function X(y){return x(et.clips[y],ne)}function se(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"skin":_.id=a(A.getAttribute("source")),_.skin=de(A);break;case"morph":_.id=a(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}et.controllers[y.getAttribute("id")]=_}function de(y){let _={sources:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(A.textContent);break;case"source":let K=A.getAttribute("id");_.sources[K]=ge(A);break;case"joints":_.joints=pe(A);break;case"vertex_weights":_.vertexWeights=Ce(A);break}}return _}function pe(y){let _={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let K=A.getAttribute("semantic"),ee=a(A.getAttribute("source"));_.inputs[K]=ee;break}}return _}function Ce(y){let _={inputs:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let K=A.getAttribute("semantic"),ee=a(A.getAttribute("source")),Ae=parseInt(A.getAttribute("offset"));_.inputs[K]={id:ee,offset:Ae};break;case"vcount":_.vcount=o(A.textContent);break;case"v":_.v=o(A.textContent);break}}return _}function we(y){let _={id:y.id},T=et.geometries[_.id];return y.skin!==void 0&&(_.skin=Ee(y.skin),T.sources.skinIndices=_.skin.indices,T.sources.skinWeights=_.skin.weights),_}function Ee(y){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=y.sources,A=y.vertexWeights,K=A.vcount,ee=A.v,Ae=A.inputs.JOINT.offset,xe=A.inputs.WEIGHT.offset,Se=y.sources[y.joints.inputs.JOINT],Ge=y.sources[y.joints.inputs.INV_BIND_MATRIX],oe=M[A.inputs.WEIGHT.id].array,ze=0,Pe,Ye,Xe;for(Pe=0,Xe=K.length;Pe<Xe;Pe++){let Mt=K[Pe],_t=[];for(Ye=0;Ye<Mt;Ye++){let xt=ee[ze+Ae],ri=ee[ze+xe],un=oe[ri];_t.push({index:xt,weight:un}),ze+=2}for(_t.sort(Ut),Ye=0;Ye<4;Ye++){let xt=_t[Ye];xt!==void 0?(T.indices.array.push(xt.index),T.weights.array.push(xt.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(y.bindShapeMatrix?T.bindMatrix=new nt().fromArray(y.bindShapeMatrix).transpose():T.bindMatrix=new nt().identity(),Pe=0,Xe=Se.array.length;Pe<Xe;Pe++){let Mt=Se.array[Pe],_t=new nt().fromArray(Ge.array,Pe*Ge.stride).transpose();T.joints.push({name:Mt,boneInverse:_t})}return T;function Ut(Mt,_t){return _t.weight-Mt.weight}}function _e(y){return x(et.controllers[y],we)}function V(y){let _={init_from:n(y,"init_from")[0].textContent};et.images[y.getAttribute("id")]=_}function j(y){return y.build!==void 0?y.build:y.init_from}function fe(y){let _=et.images[y];return _!==void 0?x(_,j):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Ve(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":_.profile=Le(A);break}}et.effects[y.getAttribute("id")]=_}function Le(y){let _={surfaces:{},samplers:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"newparam":ft(A,_);break;case"technique":_.technique=Ct(A);break;case"extra":_.extra=rt(A);break}}return _}function ft(y,_){let T=y.getAttribute("sid");for(let M=0,A=y.childNodes.length;M<A;M++){let K=y.childNodes[M];if(K.nodeType===1)switch(K.nodeName){case"surface":_.surfaces[T]=jt(K);break;case"sampler2D":_.samplers[T]=O(K);break}}}function jt(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"init_from":_.init_from=A.textContent;break}}return _}function O(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"source":_.source=A.textContent;break}}return _}function Ct(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=A.nodeName,_.parameters=it(A);break;case"extra":_.extra=rt(A);break}}return _}function it(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[A.nodeName]=Je(A);break;case"transparent":_[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Je(A)};break}}return _}function Je(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"color":_[A.nodeName]=r(A.textContent);break;case"float":_[A.nodeName]=parseFloat(A.textContent);break;case"texture":_[A.nodeName]={id:A.getAttribute("texture"),extra:Ne(A)};break}}return _}function Ne(y){let _={technique:{}};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"extra":Rt(A,_);break}}return _}function Rt(y,_){for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique":Fe(A,_);break}}}function Fe(y,_){for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?_.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?_.technique[A.nodeName]=0:_.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=Nt(A);break}}}function rt(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique":_.technique=Vt(A);break}}return _}function Vt(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"double_sided":_[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=Nt(A);break}}return _}function Nt(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"texture":_[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Ne(A)};break}}return _}function L(y){return y}function b(y){return x(et.effects[y],L)}function q(y){let _={name:y.getAttribute("name")};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":_.url=a(A.getAttribute("url"));break}}et.materials[y.getAttribute("id")]=_}function te(y){let _,T=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":_=Gt;break;default:_=sn}return _}function re(y){let _=b(y.url),T=_.profile.technique,M;switch(T.type){case"phong":case"blinn":M=new Cn;break;case"lambert":M=new Or;break;default:M=new Li;break}M.name=y.name||"";function A(xe,Se=null){let Ge=_.profile.samplers[xe.id],oe=null;if(Ge!==void 0){let ze=_.profile.surfaces[Ge.source];oe=fe(ze.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),oe=fe(xe.id);if(oe!==null){let ze=te(oe);if(ze!==void 0){let Pe=ze.load(oe),Ye=xe.extra;if(Ye!==void 0&&Ye.technique!==void 0&&l(Ye.technique)===!1){let Xe=Ye.technique;Pe.wrapS=Xe.wrapU?pi:vn,Pe.wrapT=Xe.wrapV?pi:vn,Pe.offset.set(Xe.offsetU||0,Xe.offsetV||0),Pe.repeat.set(Xe.repeatU||1,Xe.repeatV||1)}else Pe.wrapS=pi,Pe.wrapT=pi;return Se!==null&&(Pe.colorSpace=Se),Pe}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",oe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let K=T.parameters;for(let xe in K){let Se=K[xe];switch(xe){case"diffuse":Se.color&&M.color.fromArray(Se.color),Se.texture&&(M.map=A(Se.texture,vt));break;case"specular":Se.color&&M.specular&&M.specular.fromArray(Se.color),Se.texture&&(M.specularMap=A(Se.texture));break;case"bump":Se.texture&&(M.normalMap=A(Se.texture));break;case"ambient":Se.texture&&(M.lightMap=A(Se.texture,vt));break;case"shininess":Se.float&&M.shininess&&(M.shininess=Se.float);break;case"emission":Se.color&&M.emissive&&M.emissive.fromArray(Se.color),Se.texture&&(M.emissiveMap=A(Se.texture,vt));break}}ut.colorSpaceToWorking(M.color,vt),M.specular&&ut.colorSpaceToWorking(M.specular,vt),M.emissive&&ut.colorSpaceToWorking(M.emissive,vt);let ee=K.transparent,Ae=K.transparency;if(Ae===void 0&&ee&&(Ae={float:1}),ee===void 0&&Ae&&(ee={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ee&&Ae)if(ee.data.texture)M.transparent=!0;else{let xe=ee.data.color;switch(ee.opaque){case"A_ONE":M.opacity=xe[3]*Ae.float;break;case"RGB_ZERO":M.opacity=1-xe[0]*Ae.float;break;case"A_ZERO":M.opacity=1-xe[3]*Ae.float;break;case"RGB_ONE":M.opacity=xe[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ee.opaque)}M.opacity<1&&(M.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let xe=T.extra.technique;for(let Se in xe){let Ge=xe[Se];switch(Se){case"double_sided":M.side=Ge===1?Rn:Fn;break;case"bump":M.normalMap=A(Ge.texture),M.normalScale=new $e(1,1);break}}}return M}function Q(y){return x(et.materials[y],re)}function He(y){let _={name:y.getAttribute("name")};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"optics":_.optics=me(A);break}}et.cameras[y.getAttribute("id")]=_}function me(y){for(let _=0;_<y.childNodes.length;_++){let T=y.childNodes[_];switch(T.nodeName){case"technique_common":return Oe(T)}}return{}}function Oe(y){let _={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"perspective":case"orthographic":_.technique=M.nodeName,_.parameters=Be(M);break}}return _}function Be(y){let _={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[M.nodeName]=parseFloat(M.textContent);break}}return _}function ce(y){let _;switch(y.optics.technique){case"perspective":_=new zt(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let T=y.optics.parameters.ymag,M=y.optics.parameters.xmag,A=y.optics.parameters.aspect_ratio;M=M===void 0?T*A:M,T=T===void 0?M/A:T,M*=.5,T*=.5,_=new hs(-M,M,T,-T,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:_=new zt;break}return _.name=y.name||"",_}function Me(y){let _=et.cameras[y];return _!==void 0?x(_,ce):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Ke(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique_common":_=ke(A);break}}et.lights[y.getAttribute("id")]=_}function ke(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=A.nodeName,_.parameters=ye(A)}}return _}function ye(y){let _={};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"color":let K=r(A.textContent);_.color=new Ze().fromArray(K),ut.colorSpaceToWorking(_.color,vt);break;case"falloff_angle":_.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let ee=parseFloat(A.textContent);_.distance=ee?Math.sqrt(1/ee):0;break}}return _}function st(y){let _;switch(y.technique){case"directional":_=new Ni;break;case"point":_=new Hr;break;case"spot":_=new Vr;break;case"ambient":_=new us;break}return y.parameters.color&&_.color.copy(y.parameters.color),y.parameters.distance&&(_.distance=y.parameters.distance),_}function z(y){let _=et.lights[y];return _!==void 0?x(_,st):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function ue(y){let _={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=n(y,"mesh")[0];if(T!==void 0){for(let M=0;M<T.childNodes.length;M++){let A=T.childNodes[M];if(A.nodeType!==1)continue;let K=A.getAttribute("id");switch(A.nodeName){case"source":_.sources[K]=ge(A);break;case"vertices":_.vertices=Re(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(ae(A));break;default:console.log(A)}}et.geometries[y.getAttribute("id")]=_}}function ge(y){let _={array:[],stride:3};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"float_array":_.array=r(M.textContent);break;case"Name_array":_.array=s(M.textContent);break;case"technique_common":let A=n(M,"accessor")[0];A!==void 0&&(_.stride=parseInt(A.getAttribute("stride")));break}}return _}function Re(y){let _={};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];M.nodeType===1&&(_[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return _}function ae(y){let _={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,M=y.childNodes.length;T<M;T++){let A=y.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"input":let K=a(A.getAttribute("source")),ee=A.getAttribute("semantic"),Ae=parseInt(A.getAttribute("offset")),xe=parseInt(A.getAttribute("set")),Se=xe>0?ee+xe:ee;_.inputs[Se]={id:K,offset:Ae},_.stride=Math.max(_.stride,Ae+1),ee==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=o(A.textContent);break;case"p":_.p=o(A.textContent);break}}return _}function ie(y){let _={};for(let T=0;T<y.length;T++){let M=y[T];_[M.type]===void 0&&(_[M.type]=[]),_[M.type].push(M)}return _}function De(y){let _=0;for(let T=0,M=y.length;T<M;T++)y[T].hasUV===!0&&_++;_>0&&_<y.length&&(y.uvsNeedsFix=!0)}function tt(y){let _={},T=y.sources,M=y.vertices,A=y.primitives;if(A.length===0)return{};let K=ie(A);for(let ee in K){let Ae=K[ee];De(Ae),_[ee]=Et(Ae,T,M)}return _}function Et(y,_,T){let M={},A={array:[],stride:0},K={array:[],stride:0},ee={array:[],stride:0},Ae={array:[],stride:0},xe={array:[],stride:0},Se={array:[],stride:4},Ge={array:[],stride:4},oe=new kt,ze=[],Pe=0;for(let Ye=0;Ye<y.length;Ye++){let Xe=y[Ye],Ut=Xe.inputs,Mt=0;switch(Xe.type){case"lines":case"linestrips":Mt=Xe.count*2;break;case"triangles":Mt=Xe.count*3;break;case"polylist":for(let _t=0;_t<Xe.count;_t++){let xt=Xe.vcount[_t];switch(xt){case 3:Mt+=3;break;case 4:Mt+=6;break;default:Mt+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Xe.type)}oe.addGroup(Pe,Mt,Ye),Pe+=Mt,Xe.material&&ze.push(Xe.material);for(let _t in Ut){let xt=Ut[_t];switch(_t){case"VERTEX":for(let ri in T){let un=T[ri];switch(ri){case"POSITION":let Ms=A.array.length;if(ot(Xe,_[un],xt.offset,A.array),A.stride=_[un].stride,_.skinWeights&&_.skinIndices&&(ot(Xe,_.skinIndices,xt.offset,Se.array),ot(Xe,_.skinWeights,xt.offset,Ge.array)),Xe.hasUV===!1&&y.uvsNeedsFix===!0){let Od=(A.array.length-Ms)/A.stride;for(let oh=0;oh<Od;oh++)ee.array.push(0,0)}break;case"NORMAL":ot(Xe,_[un],xt.offset,K.array),K.stride=_[un].stride;break;case"COLOR":ot(Xe,_[un],xt.offset,xe.array),xe.stride=_[un].stride;break;case"TEXCOORD":ot(Xe,_[un],xt.offset,ee.array),ee.stride=_[un].stride;break;case"TEXCOORD1":ot(Xe,_[un],xt.offset,Ae.array),ee.stride=_[un].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ri)}}break;case"NORMAL":ot(Xe,_[xt.id],xt.offset,K.array),K.stride=_[xt.id].stride;break;case"COLOR":ot(Xe,_[xt.id],xt.offset,xe.array,!0),xe.stride=_[xt.id].stride;break;case"TEXCOORD":ot(Xe,_[xt.id],xt.offset,ee.array),ee.stride=_[xt.id].stride;break;case"TEXCOORD1":ot(Xe,_[xt.id],xt.offset,Ae.array),Ae.stride=_[xt.id].stride;break}}}return A.array.length>0&&oe.setAttribute("position",new ht(A.array,A.stride)),K.array.length>0&&oe.setAttribute("normal",new ht(K.array,K.stride)),xe.array.length>0&&oe.setAttribute("color",new ht(xe.array,xe.stride)),ee.array.length>0&&oe.setAttribute("uv",new ht(ee.array,ee.stride)),Ae.array.length>0&&oe.setAttribute("uv1",new ht(Ae.array,Ae.stride)),Se.array.length>0&&oe.setAttribute("skinIndex",new ht(Se.array,Se.stride)),Ge.array.length>0&&oe.setAttribute("skinWeight",new ht(Ge.array,Ge.stride)),M.data=oe,M.type=y[0].type,M.materialKeys=ze,M}function ot(y,_,T,M,A=!1){let K=y.p,ee=y.stride,Ae=y.vcount;function xe(oe){let ze=K[oe+T]*Ge,Pe=ze+Ge;for(;ze<Pe;ze++)M.push(Se[ze]);if(A){let Ye=M.length-Ge-1;Wt.setRGB(M[Ye+0],M[Ye+1],M[Ye+2],vt),M[Ye+0]=Wt.r,M[Ye+1]=Wt.g,M[Ye+2]=Wt.b}}let Se=_.array,Ge=_.stride;if(y.vcount!==void 0){let oe=0;for(let ze=0,Pe=Ae.length;ze<Pe;ze++){let Ye=Ae[ze];if(Ye===4){let Xe=oe+ee*0,Ut=oe+ee*1,Mt=oe+ee*2,_t=oe+ee*3;xe(Xe),xe(Ut),xe(_t),xe(Ut),xe(Mt),xe(_t)}else if(Ye===3){let Xe=oe+ee*0,Ut=oe+ee*1,Mt=oe+ee*2;xe(Xe),xe(Ut),xe(Mt)}else if(Ye>4)for(let Xe=1,Ut=Ye-2;Xe<=Ut;Xe++){let Mt=oe+ee*0,_t=oe+ee*Xe,xt=oe+ee*(Xe+1);xe(Mt),xe(_t),xe(xt)}oe+=ee*Ye}}else for(let oe=0,ze=K.length;oe<ze;oe+=ee)xe(oe)}function Sn(y){return x(et.geometries[y],tt)}function En(y){let _={name:y.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"technique_common":cr(M,_);break}}et.kinematicsModels[y.getAttribute("id")]=_}function lo(y){return y.build!==void 0?y.build:y}function ni(y){return x(et.kinematicsModels[y],lo)}function cr(y,_){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"joint":_.joints[M.getAttribute("sid")]=co(M);break;case"link":_.links.push(Wi(M));break}}}function co(y){let _;for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":_=ho(M);break}}return _}function ho(y){let _={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new F,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);_.axis.fromArray(A);break;case"limits":let K=M.getElementsByTagName("max")[0],ee=M.getElementsByTagName("min")[0];_.limits.max=parseFloat(K.textContent),_.limits.min=parseFloat(ee.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Wi(y){let _={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":_.attachments.push(uo(M));break;case"matrix":case"translate":case"rotate":_.transforms.push(Xi(M));break}}return _}function uo(y){let _={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"link":_.links.push(Wi(M));break;case"matrix":case"translate":case"rotate":_.transforms.push(Xi(M));break}}return _}function Xi(y){let _={type:y.nodeName},T=r(y.textContent);switch(_.type){case"matrix":_.obj=new nt,_.obj.fromArray(T).transpose();break;case"translate":_.obj=new F,_.obj.fromArray(T);break;case"rotate":_.obj=new F,_.obj.fromArray(T),_.angle=Xn.degToRad(T[3]);break}return _}function fo(y){let _={name:y.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":_.rigidBodies[M.getAttribute("name")]={},po(M,_.rigidBodies[M.getAttribute("name")]);break}}et.physicsModels[y.getAttribute("id")]=_}function po(y,_){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Ml(M,_);break}}}function Ml(y,_){for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"inertia":_.inertia=r(M.textContent);break;case"mass":_.mass=r(M.textContent)[0];break}}}function Sl(y){let _={bindJointAxis:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":_.bindJointAxis.push(El(M));break}}et.kinematicsScenes[a(y.getAttribute("url"))]=_}function El(y){let _={target:y.getAttribute("target").split("/").pop()};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];_.axis=A.textContent;let K=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=K.substring(0,K.length-1);break}}return _}function wl(y){return y.build!==void 0?y.build:y}function Tl(y){return x(et.kinematicsScenes[y],wl)}function Al(){let y=Object.keys(et.kinematicsModels)[0],_=Object.keys(et.kinematicsScenes)[0],T=Object.keys(et.visualScenes)[0];if(y===void 0||_===void 0)return;let M=ni(y),A=Tl(_),K=qe(T),ee=A.bindJointAxis,Ae={};for(let Ge=0,oe=ee.length;Ge<oe;Ge++){let ze=ee[Ge],Pe=gt.querySelector('[sid="'+ze.target+'"]');if(Pe){let Ye=Pe.parentElement;xe(ze.jointIndex,Ye)}}function xe(Ge,oe){let ze=oe.getAttribute("name"),Pe=M.joints[Ge];K.traverse(function(Ye){Ye.name===ze&&(Ae[Ge]={object:Ye,transforms:E(oe),joint:Pe,position:Pe.zeroPosition})})}let Se=new nt;qn={joints:M&&M.joints,getJointValue:function(Ge){let oe=Ae[Ge];if(oe)return oe.position;console.warn("THREE.ColladaLoader: Joint "+Ge+" doesn't exist.")},setJointValue:function(Ge,oe){let ze=Ae[Ge];if(ze){let Pe=ze.joint;if(oe>Pe.limits.max||oe<Pe.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ge+" value "+oe+" outside of limits (min: "+Pe.limits.min+", max: "+Pe.limits.max+").");else if(Pe.static)console.warn("THREE.ColladaLoader: Joint "+Ge+" is static.");else{let Ye=ze.object,Xe=Pe.axis,Ut=ze.transforms;Y.identity();for(let Mt=0;Mt<Ut.length;Mt++){let _t=Ut[Mt];if(_t.sid&&_t.sid.indexOf(Ge)!==-1)switch(Pe.type){case"revolute":Y.multiply(Se.makeRotationAxis(Xe,Xn.degToRad(oe)));break;case"prismatic":Y.multiply(Se.makeTranslation(Xe.x*oe,Xe.y*oe,Xe.z*oe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Pe.type);break}else switch(_t.type){case"matrix":Y.multiply(_t.obj);break;case"translate":Y.multiply(Se.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Y.scale(_t.obj);break;case"rotate":Y.multiply(Se.makeRotationAxis(_t.obj,_t.angle));break}}Ye.matrix.copy(Y),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ae[Ge].position=oe}}else console.log("THREE.ColladaLoader: "+Ge+" does not exist.")}}}function E(y){let _=[],T=gt.querySelector('[id="'+y.id+'"]');for(let M=0;M<T.childNodes.length;M++){let A=T.childNodes[M];if(A.nodeType!==1)continue;let K,ee;switch(A.nodeName){case"matrix":K=r(A.textContent);let Ae=new nt().fromArray(K).transpose();_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ae});break;case"translate":case"scale":K=r(A.textContent),ee=new F().fromArray(K),_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ee});break;case"rotate":K=r(A.textContent),ee=new F().fromArray(K);let xe=Xn.degToRad(K[3]);_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ee,angle:xe});break}}return _}function H(y){let _=y.getElementsByTagName("node");for(let T=0;T<_.length;T++){let M=_[T];M.hasAttribute("id")===!1&&M.setAttribute("id",c())}}let Y=new nt,Z=new F;function G(y){let _={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new nt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":_.nodes.push(M.getAttribute("id")),G(M);break;case"instance_camera":_.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(le(M));break;case"instance_light":_.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(le(M));break;case"instance_node":_.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),_.matrix.multiply(Y.fromArray(A).transpose()),_.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),Z.fromArray(A),_.matrix.multiply(Y.makeTranslation(Z.x,Z.y,Z.z)),_.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let K=Xn.degToRad(A[3]);_.matrix.multiply(Y.makeRotationAxis(Z.fromArray(A),K)),_.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),_.matrix.scale(Z.fromArray(A)),_.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return ct(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):et.nodes[_.id]=_,_}function le(y){let _={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<y.childNodes.length;T++){let M=y.childNodes[T];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let K=0;K<A.length;K++){let ee=A[K],Ae=ee.getAttribute("symbol"),xe=ee.getAttribute("target");_.materials[Ae]=a(xe)}break;case"skeleton":_.skeletons.push(a(M.textContent));break;default:break}}return _}function be(y,_){let T=[],M=[],A,K,ee;for(A=0;A<y.length;A++){let Se=y[A],Ge;if(ct(Se))Ge=pt(Se),Ie(Ge,_,T);else if(bt(Se)){let ze=et.visualScenes[Se].children;for(let Pe=0;Pe<ze.length;Pe++){let Ye=ze[Pe];if(Ye.type==="JOINT"){let Xe=pt(Ye.id);Ie(Xe,_,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Se)}for(A=0;A<_.length;A++)for(K=0;K<T.length;K++)if(ee=T[K],ee.bone.name===_[A].name){M[A]=ee,ee.processed=!0;break}for(A=0;A<T.length;A++)ee=T[A],ee.processed===!1&&(M.push(ee),ee.processed=!0);let Ae=[],xe=[];for(A=0;A<M.length;A++)ee=M[A],Ae.push(ee.bone),xe.push(ee.boneInverse);return new Lr(Ae,xe)}function Ie(y,_,T){y.traverse(function(M){if(M.isBone===!0){let A;for(let K=0;K<_.length;K++){let ee=_[K];if(ee.name===M.name){A=ee.boneInverse;break}}A===void 0&&(A=new nt),T.push({bone:M,boneInverse:A,processed:!1})}})}function Te(y){let _=[],T=y.matrix,M=y.nodes,A=y.type,K=y.instanceCameras,ee=y.instanceControllers,Ae=y.instanceLights,xe=y.instanceGeometries,Se=y.instanceNodes;for(let oe=0,ze=M.length;oe<ze;oe++)_.push(pt(M[oe]));for(let oe=0,ze=K.length;oe<ze;oe++){let Pe=Me(K[oe]);Pe!==null&&_.push(Pe.clone())}for(let oe=0,ze=ee.length;oe<ze;oe++){let Pe=ee[oe],Ye=_e(Pe.id),Xe=Sn(Ye.id),Ut=We(Xe,Pe.materials),Mt=Pe.skeletons,_t=Ye.skin.joints,xt=be(Mt,_t);for(let ri=0,un=Ut.length;ri<un;ri++){let Ms=Ut[ri];Ms.isSkinnedMesh&&(Ms.bind(xt,Ye.skin.bindMatrix),Ms.normalizeSkinWeights()),_.push(Ms)}}for(let oe=0,ze=Ae.length;oe<ze;oe++){let Pe=z(Ae[oe]);Pe!==null&&_.push(Pe.clone())}for(let oe=0,ze=xe.length;oe<ze;oe++){let Pe=xe[oe],Ye=Sn(Pe.id),Xe=We(Ye,Pe.materials);for(let Ut=0,Mt=Xe.length;Ut<Mt;Ut++)_.push(Xe[Ut])}for(let oe=0,ze=Se.length;oe<ze;oe++)_.push(pt(Se[oe]).clone());let Ge;if(M.length===0&&_.length===1)Ge=_[0];else{Ge=A==="JOINT"?new Xs:new dn;for(let oe=0;oe<_.length;oe++)Ge.add(_[oe])}return Ge.name=A==="JOINT"?y.sid:y.name,Ge.matrix.copy(T),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge}let je=new Li({name:ln.DEFAULT_MATERIAL_NAME,color:16711935});function Qe(y,_){let T=[];for(let M=0,A=y.length;M<A;M++){let K=_[y[M]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[M]),T.push(je)):T.push(Q(K))}return T}function We(y,_){let T=[];for(let M in y){let A=y[M],K=Qe(A.materialKeys,_);if(K.length===0&&(M==="lines"||M==="linestrips"?K.push(new mn):K.push(new Cn)),M==="lines"||M==="linestrips")for(let Se=0,Ge=K.length;Se<Ge;Se++){let oe=K[Se];if(oe.isMeshPhongMaterial===!0||oe.isMeshLambertMaterial===!0){let ze=new mn;ze.color.copy(oe.color),ze.opacity=oe.opacity,ze.transparent=oe.transparent,K[Se]=ze}}let ee=A.data.attributes.skinIndex!==void 0,Ae=K.length===1?K[0]:K,xe;switch(M){case"lines":xe=new zn(A.data,Ae);break;case"linestrips":xe=new Ys(A.data,Ae);break;case"triangles":case"polylist":ee?xe=new Ir(A.data,Ae):xe=new Tt(A.data,Ae);break}T.push(xe)}return T}function ct(y){return et.nodes[y]!==void 0}function pt(y){return x(et.nodes[y],Te)}function Dt(y){let _={name:y.getAttribute("name"),children:[]};H(y);let T=n(y,"node");for(let M=0;M<T.length;M++)_.children.push(G(T[M]));et.visualScenes[y.getAttribute("id")]=_}function wt(y){let _=new dn;_.name=y.name;let T=y.children;for(let M=0;M<T.length;M++){let A=T[M];_.add(pt(A.id))}return _}function bt(y){return et.visualScenes[y]!==void 0}function qe(y){return x(et.visualScenes[y],wt)}function It(y){let _=n(y,"instance_visual_scene")[0];return qe(a(_.getAttribute("url")))}function mt(){let y=et.clips;if(l(y)===!0){if(l(et.animations)===!1){let _=[];for(let T in et.animations){let M=w(T);for(let A=0,K=M.length;A<K;A++)_.push(M[A])}Ei.push(new js("default",-1,_))}}else for(let _ in y)Ei.push(X(_))}function tn(y){let _="",T=[y];for(;T.length;){let M=T.shift();M.nodeType===Node.TEXT_NODE?_+=M.textContent:(_+=`
`,T.push(...M.childNodes))}return _.trim()}if(e.length===0)return{scene:new ns};let ii=new DOMParser().parseFromString(e,"application/xml"),gt=n(ii,"COLLADA")[0],si=ii.getElementsByTagName("parsererror")[0];if(si!==void 0){let y=n(si,"div")[0],_;return y?_=y.textContent:_=tn(si),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}let Pt=gt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Pt);let nn=h(n(gt,"asset")[0]),sn=new ls(this.manager);sn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Gt;eo&&(Gt=new eo(this.manager),Gt.setPath(this.resourcePath||t));let Wt=new Ze,Ei=[],qn={},Fd=0,et={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(gt,"library_animations","animation",m),p(gt,"library_animation_clips","animation_clip",k),p(gt,"library_controllers","controller",se),p(gt,"library_images","image",V),p(gt,"library_effects","effect",Ve),p(gt,"library_materials","material",q),p(gt,"library_cameras","camera",He),p(gt,"library_lights","light",Ke),p(gt,"library_geometries","geometry",ue),p(gt,"library_nodes","node",G),p(gt,"library_visual_scenes","visual_scene",Dt),p(gt,"library_kinematics_models","kinematics_model",En),p(gt,"library_physics_models","physics_model",fo),p(gt,"scene","instance_kinematics_scene",Sl),g(et.animations,R),g(et.clips,ne),g(et.controllers,we),g(et.images,j),g(et.effects,L),g(et.materials,re),g(et.cameras,ce),g(et.lights,st),g(et.geometries,tt),g(et.visualScenes,wt),mt(),Al();let mo=It(n(gt,"scene")[0]);return mo.animations=Ei,nn.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),mo.rotation.set(-Math.PI/2,0,0)),mo.scale.multiplyScalar(nn.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ei},kinematics:qn,library:et,scene:mo}}};var _d=new F,w0=new Kt,hl=new nt,Bi=new nt,ul=new Ot,dl=new F(1,1,1),fl=new F,rr=class extends Bt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}},pl=class extends rr{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}},ml=class extends rr{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}},to=class extends rr{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink",this.name="",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(e,t){return super.copy(e,t),this.inertial={mass:e.inertial.mass,origin:{xyz:[...e.inertial.origin.xyz],rpy:[...e.inertial.origin.rpy]},inertia:{...e.inertial.inertia}},this}},no=class extends rr{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new F(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.name="",this.jointValue=null,this.jointType="fixed",this.axis=new F(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.limit.effort=e.limit.effort,this.limit.velocity=e.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),_d.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(_d,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Bi.compose(this.origPosition,this.origQuaternion,dl),ul.setFromEuler(w0.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),fl.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),hl.compose(fl,ul,dl),Bi.premultiply(hl),this.position.setFromMatrixPosition(Bi),this.rotation.setFromRotationMatrix(Bi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Bi.compose(this.origPosition,this.origQuaternion,dl),ul.setFromAxisAngle(this.axis,this.jointValue[2]),fl.set(this.jointValue[0],this.jointValue[1],0),hl.compose(fl,ul,dl),Bi.premultiply(hl),this.position.setFromMatrixPosition(Bi),this.rotation.setFromRotationMatrix(Bi),this.matrixWorldNeedsUpdate=!0,!0)}return t}},io=class extends no{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){let t=e.map(n=>n===null?null:n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}},gl=class extends to{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(let n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){let n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(let n in e){let s=e[n];Array.isArray(s)?t=this.setJointValue(n,...s)||t:t=this.setJointValue(n,s)||t}return t}};var Qc=new Ot,xd=new Kt;function ki(i){return i?i.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function yd(i,e,t=!1){t||i.rotation.set(0,0,0),xd.set(e[0],e[1],e[2],"ZYX"),Qc.setFromEuler(xd),Qc.multiply(i.quaternion),i.quaternion.copy(Qc)}var eh=class{constructor(e){this.manager=e||Qa,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,s){let r=this.manager,o=ds.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{let l=this.parse(c,this.workingPath||o);t(l),r.itemEnd(a)}).catch(c=>{s?s(c):console.error("URDFLoader: Error loading file.",c),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){let n=this.packages,s=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,c={},l={},h={};function u(C){if(!/^package:\/\//.test(C))return t?t+C:C;let[R,w]=C.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(R)?n+"/"+w:n+"/"+R+"/"+w;if(typeof n=="function")return n(R)+"/"+w;if(typeof n=="object")return R in n?n[R]+"/"+w:(console.error(`URDFLoader : ${R} not found in provided package list.`),null)}function d(C){let R;C instanceof Document?R=[...C.children]:C instanceof Element?R=[C]:R=[...new DOMParser().parseFromString(C,"text/xml").children];let w=R.filter(P=>P.nodeName==="robot").pop();return p(w)}function p(C){let R=[...C.children],w=R.filter(N=>N.nodeName.toLowerCase()==="link"),P=R.filter(N=>N.nodeName.toLowerCase()==="joint"),I=R.filter(N=>N.nodeName.toLowerCase()==="material"),D=new gl;D.robotName=C.getAttribute("name"),D.urdfRobotNode=C,I.forEach(N=>{let B=N.getAttribute("name");h[B]=m(N)});let U={},v={};w.forEach(N=>{let B=N.getAttribute("name"),W=C.querySelector(`child[link="${B}"]`)===null;c[B]=x(N,U,v,W?D:null)}),P.forEach(N=>{let B=N.getAttribute("name");l[B]=g(N)}),D.joints=l,D.links=c,D.colliders=v,D.visual=U;let S=Object.values(l);return S.forEach(N=>{N instanceof io&&l[N.mimicJoint].mimicJoints.push(N)}),S.forEach(N=>{let B=new Set,W=J=>{if(B.has(J))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(J),J.mimicJoints.forEach($=>{W($)})};W(N)}),D.frames={...v,...U,...c,...l},D}function g(C){let R=[...C.children],w=C.getAttribute("type"),P,I=R.find(B=>B.nodeName.toLowerCase()==="mimic");I?(P=new io,P.mimicJoint=I.getAttribute("joint"),P.multiplier=parseFloat(I.getAttribute("multiplier")||1),P.offset=parseFloat(I.getAttribute("offset")||0)):P=new no,P.urdfNode=C,P.name=C.getAttribute("name"),P.urdfName=P.name,P.jointType=w;let D=null,U=null,v=[0,0,0],S=[0,0,0];R.forEach(B=>{let W=B.nodeName.toLowerCase();W==="origin"?(v=ki(B.getAttribute("xyz")),S=ki(B.getAttribute("rpy"))):W==="child"?U=c[B.getAttribute("link")]:W==="parent"?D=c[B.getAttribute("link")]:W==="limit"&&(P.limit.lower=parseFloat(B.getAttribute("lower")||P.limit.lower),P.limit.upper=parseFloat(B.getAttribute("upper")||P.limit.upper),P.limit.effort=parseFloat(B.getAttribute("effort")||P.limit.effort),P.limit.velocity=parseFloat(B.getAttribute("velocity")||P.limit.velocity))}),D.add(P),P.add(U),yd(P,S),P.position.set(v[0],v[1],v[2]);let N=R.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(N){let B=N.getAttribute("xyz").split(/\s+/g).map(W=>parseFloat(W));P.axis=new F(B[0],B[1],B[2]),P.axis.normalize()}return P}function x(C,R,w,P=null){P===null&&(P=new to);let I=[...C.children];P.name=C.getAttribute("name"),P.urdfName=P.name,P.urdfNode=C;let D=I.find(U=>U.nodeName.toLowerCase()==="inertial");return D&&[...D.children].forEach(U=>{let v=U.nodeName.toLowerCase();v==="origin"?(P.inertial.origin.xyz=ki(U.getAttribute("xyz")),P.inertial.origin.rpy=ki(U.getAttribute("rpy"))):v==="mass"?P.inertial.mass=parseFloat(U.getAttribute("value"))||0:v==="inertia"&&(P.inertial.inertia.ixx=parseFloat(U.getAttribute("ixx"))||0,P.inertial.inertia.ixy=parseFloat(U.getAttribute("ixy"))||0,P.inertial.inertia.ixz=parseFloat(U.getAttribute("ixz"))||0,P.inertial.inertia.iyy=parseFloat(U.getAttribute("iyy"))||0,P.inertial.inertia.iyz=parseFloat(U.getAttribute("iyz"))||0,P.inertial.inertia.izz=parseFloat(U.getAttribute("izz"))||0)}),r&&I.filter(v=>v.nodeName.toLowerCase()==="visual").forEach(v=>{let S=f(v,h);if(P.add(S),v.hasAttribute("name")){let N=v.getAttribute("name");S.name=N,S.urdfName=N,R[N]=S}}),o&&I.filter(v=>v.nodeName.toLowerCase()==="collision").forEach(v=>{let S=f(v);if(P.add(S),v.hasAttribute("name")){let N=v.getAttribute("name");S.name=N,S.urdfName=N,w[N]=S}}),P}function m(C){let R=[...C.children],w=new Cn;return w.name=C.getAttribute("name")||"",R.forEach(P=>{let I=P.nodeName.toLowerCase();if(I==="color"){let D=P.getAttribute("rgba").split(/\s/g).map(U=>parseFloat(U));w.color.setRGB(D[0],D[1],D[2]),w.opacity=D[3],w.transparent=D[3]<1,w.depthWrite=!w.transparent}else if(I==="texture"){let D=P.getAttribute("filename");if(D){let U=new ls(a),v=u(D);w.map=U.load(v),w.map.colorSpace=vt}}}),w}function f(C,R={}){let w=C.nodeName.toLowerCase()==="collision",P=[...C.children],I=null,D=P.filter(v=>v.nodeName.toLowerCase()==="material")[0];if(D){let v=D.getAttribute("name");v&&v in R?I=R[v]:I=m(D)}else I=new Cn;let U=w?new pl:new ml;return U.urdfNode=C,P.forEach(v=>{let S=v.nodeName.toLowerCase();if(S==="geometry"){let N=v.children[0].nodeName.toLowerCase();if(N==="mesh"){let B=v.children[0].getAttribute("filename"),W=u(B);if(W!==null){let J=v.children[0].getAttribute("scale");if(J){let $=ki(J);U.scale.set($[0],$[1],$[2])}s(W,a,I,($,k)=>{k?console.error("URDFLoader: Error loading mesh.",k):$&&($.position.set(0,0,0),$.quaternion.identity(),U.add($))})}}else if(N==="box"){let B=new Tt;B.geometry=new Bn(1,1,1),B.material=I;let W=ki(v.children[0].getAttribute("size"));B.scale.set(W[0],W[1],W[2]),U.add(B)}else if(N==="sphere"){let B=new Tt;B.geometry=new rs(1,30,30),B.material=I;let W=parseFloat(v.children[0].getAttribute("radius"))||0;B.scale.set(W,W,W),U.add(B)}else if(N==="cylinder"){let B=new Tt;B.geometry=new ss(1,1,1,30),B.material=I;let W=parseFloat(v.children[0].getAttribute("radius"))||0,J=parseFloat(v.children[0].getAttribute("length"))||0;B.scale.set(W,J,W),B.rotation.set(Math.PI/2,0,0),U.add(B)}}else if(S==="origin"){let N=ki(v.getAttribute("xyz")),B=ki(v.getAttribute("rpy"));U.position.set(N[0],N[1],N[2]),U.rotation.set(0,0,0),yd(U,B)}}),U}return d(e)}defaultMeshLoader(e,t,n,s){/\.stl$/i.test(e)?new ll(t).load(e,o=>{let a=new Tt(o,n||new Cn);s(a)},null,o=>s(null,o)):/\.dae$/i.test(e)?new cl(t).load(e,o=>s(o.scene),null,o=>s(null,o)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}},vd=eh;var T0=/^[og]\s*(.+)?/,A0=/^mtllib /,C0=/^usemtl /,R0=/^usemap /,bd=/\s+/,Md=new F,th=new F,Sd=new F,Ed=new F,In=new F,_l=new Ze;function I0(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){let s=this.vertices,r=this.object.geometry.normals;Md.fromArray(s,e),th.fromArray(s,t),Sd.fromArray(s,n),In.subVectors(Sd,th),Ed.subVectors(Md,th),In.cross(Ed),In.normalize(),r.push(In.x,In.y,In.z),r.push(In.x,In.y,In.z),r.push(In.x,In.y,In.z)},addColor:function(e,t,n){let s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){let s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,c,l){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,d,p),this.addColor(u,d,p),a!==void 0&&a!==""){let g=this.normals.length;u=this.parseNormalIndex(a,g),d=this.parseNormalIndex(c,g),p=this.parseNormalIndex(l,g),this.addNormal(u,d,p)}else this.addFaceNormal(u,d,p);if(s!==void 0&&s!==""){let g=this.uvs.length;u=this.parseUVIndex(s,g),d=this.parseUVIndex(r,g),p=this.parseUVIndex(o,g),this.addUV(u,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}var xl=class extends ln{constructor(e){super(e),this.materials=null}load(e,t,n,s){let r=this,o=new Kn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){let t=new I0;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),s=[];for(let a=0,c=n.length;a<c;a++){let l=n[a].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!=="#")if(h==="v"){let u=l.split(bd);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(_l.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),vt),t.colors.push(_l.r,_l.g,_l.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=l.slice(1).trim().split(bd),p=[];for(let x=0,m=d.length;x<m;x++){let f=d[x];if(f.length>0){let C=f.split("/");p.push(C)}}let g=p[0];for(let x=1,m=p.length-1;x<m;x++){let f=p[x],C=p[x+1];t.addFace(g[0],f[0],C[0],g[1],f[1],C[1],g[2],f[2],C[2])}}else if(h==="l"){let u=l.substring(1).trim().split(" "),d=[],p=[];if(l.indexOf("/")===-1)d=u;else for(let g=0,x=u.length;g<x;g++){let m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(d,p)}else if(h==="p"){let d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=T0.exec(l))!==null){let u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(C0.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(A0.test(l))t.materialLibraries.push(l.substring(7).trim());else if(R0.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){let d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let r=new dn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){let l=t.objects[a],h=l.geometry,u=l.materials,d=h.type==="Line",p=h.type==="Points",g=!1;if(h.vertices.length===0)continue;let x=new kt;x.setAttribute("position",new ht(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new ht(h.normals,3)),h.colors.length>0&&(g=!0,x.setAttribute("color",new ht(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new ht(h.uvs,2));let m=[];for(let C=0,R=u.length;C<R;C++){let w=u[C],P=w.name+"_"+w.smooth+"_"+g,I=t.materials[P];if(this.materials!==null){if(I=this.materials.create(w.name),d&&I&&!(I instanceof mn)){let D=new mn;an.prototype.copy.call(D,I),D.color.copy(I.color),I=D}else if(p&&I&&!(I instanceof gi)){let D=new gi({size:10,sizeAttenuation:!1});an.prototype.copy.call(D,I),D.color.copy(I.color),D.map=I.map,I=D}}I===void 0&&(d?I=new mn:p?I=new gi({size:1,sizeAttenuation:!1}):I=new Cn,I.name=w.name,I.flatShading=!w.smooth,I.vertexColors=g,t.materials[P]=I),m.push(I)}let f;if(m.length>1){for(let C=0,R=u.length;C<R;C++){let w=u[C];x.addGroup(w.groupStart,w.groupCount,C)}d?f=new zn(x,m):p?f=new is(x,m):f=new Tt(x,m)}else d?f=new zn(x,m[0]):p?f=new is(x,m[0]):f=new Tt(x,m[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){let a=new gi({size:1,sizeAttenuation:!1}),c=new kt;c.setAttribute("position",new ht(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ht(t.colors,3)),a.vertexColors=!0);let l=new is(c,a);r.add(l)}return r}};function or(i){let e=new Set,t=new Set,n=new Set;i?.traverse(s=>{s.geometry&&e.add(s.geometry);for(let r of Array.isArray(s.material)?s.material:[s.material])if(r){t.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)}}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i?.removeFromParent()}async function wd(i,e="visual"){if(!["visual","collision"].includes(e))throw Error("Unknown URDF geometry mode");let t=await fetch(i);if(!t.ok)throw Error("URDF \uBAA8\uB378 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let n=await t.json(),s=new URL(n.urdf,new URL(i,location.href)),r=await fetch(s);if(!r.ok)throw Error("URDF \uD30C\uC77C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let o=await r.text(),a=new DOMParser().parseFromString(o,"text/xml");if(a.querySelector("parsererror")||a.documentElement.tagName!=="robot")throw Error("\uC798\uBABB\uB41C URDF\uC785\uB2C8\uB2E4.");if(!a.querySelector(`link > ${e}`))throw Error(`URDF\uC5D0 ${e} \uD615\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`);let c=new Zs,l=[],h=new vd(c);h.packages=Object.fromEntries(Object.entries(n.packages||{}).map(([p,g])=>[p,new URL(g,new URL(i,location.href)).href.replace(/\/$/,"")])),h.parseVisual=e==="visual",h.parseCollision=e==="collision";let u=h.loadMeshCb;h.loadMeshCb=(p,g,x,m)=>{let f=new URL(p,location.href).pathname.split(".").at(-1).toLowerCase();f==="obj"?new xl(g).load(p,C=>{C.traverse(R=>{R.isMesh&&(R.material=x)}),m(C)},void 0,C=>m(null,C)):["stl","dae"].includes(f)?u(p,g,x,m):(l.push(p),m(null,Error("Unsupported mesh: "+f)))};let d;return await new Promise((p,g)=>{c.onError=x=>l.push(x),c.onLoad=()=>l.length?g(Error("Mesh\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+l[0])):p(),c.itemStart("urdf-parse");try{d=h.parse(a,s.href.slice(0,s.href.lastIndexOf("/")+1))}catch(x){g(x)}finally{c.itemEnd("urdf-parse")}}).catch(p=>{throw or(d),p}),e==="collision"&&d.traverse(p=>{p.isMesh&&(p.material=new Vn({color:6019784,roughness:.65,transparent:!0,opacity:.65,wireframe:!0}))}),d.userData.manifest=n,d.userData.geometryMode=e,d}function nh(i,e,t){if(!Array.isArray(e.joint_names)||e.joint_names.length!==e.dof)throw Error("\uAD00\uC808 \uC774\uB984\uC774 \uAE30\uB85D\uB418\uC9C0 \uC54A\uC740 \uACB0\uACFC\uC785\uB2C8\uB2E4.");let n=Math.floor(t),s=Math.min(n+1,e.q.length-1),r=t-n,o=e.floating_base?7:0,a={...e.locked_joints||{}};for(let c=0;c<e.joint_names.length;c++){let l=e.joint_names[c];if(!i.joints[l])throw Error("URDF\uC5D0 \uAE30\uB85D\uB41C \uAD00\uC808\uC774 \uC5C6\uC2B5\uB2C8\uB2E4: "+l);a[l]=Xn.lerp(e.q[n][o+c],e.q[s][o+c],r)}i.setJointValues(a),e.floating_base?(i.position.fromArray(e.q[n]).lerp(new F().fromArray(e.q[s]),r),i.quaternion.fromArray(e.q[n],3).slerp(new Ot().fromArray(e.q[s],3),r)):(i.position.fromArray(e.base_pose?.position||[0,0,0]),i.quaternion.fromArray(e.base_pose?.quaternion_xyzw||[0,0,0,1])),i.updateMatrixWorld(!0)}var he=i=>document.getElementById(i),Ue,hn=0,vs=!0,ar=!0,Cd=1,ih=0,lr=!1,vl=[],Si,zi=[],yl,ei=[],ro=[],so=0,Hi=new ns;Hi.fog=new Rr(791587,.06);var Gi=new zt(39,1,.01,100);Gi.up.set(0,0,1);var Pn,Rd=!1;try{Pn=new sl({antialias:!0,alpha:!0})}catch{Rd=!0;let i=document.createElement("canvas");i.setAttribute("aria-label","CPU \uD22C\uC601 3D \uB85C\uBD07 \uBDF0\uC5B4"),Pn={domElement:i,setPixelRatio(){},setClearColor(){},setSize(e,t){i.width=e*Math.min(devicePixelRatio,2),i.height=t*Math.min(devicePixelRatio,2)},render:U0}}Pn.setPixelRatio(Math.min(devicePixelRatio,2));Pn.setClearColor(791587,0);Pn.outputColorSpace=vt;Pn.toneMapping=ma;Pn.toneMappingExposure=1.25;he("viewport").prepend(Pn.domElement);var bs=new al(Gi,Pn.domElement);bs.enableDamping=!0;bs.dampingFactor=.07;bs.minDistance=.25;bs.maxDistance=12;Hi.add(new us(12176613,1.7));var Id=new Ni(14543615,3.5);Id.position.set(3,-2,5);Hi.add(Id);var Pd=new Ni(4900794,1.8);Pd.position.set(-2,3,2);Hi.add(Pd);var ti,Vi=new dn;Hi.add(Vi);var P0=new F(0,1,0),Mn=new F(0,0,.4),oo=1;function Ld(){let i=he("viewport").getBoundingClientRect();Pn.setSize(i.width,i.height),Gi.aspect=i.width/i.height,Gi.updateProjectionMatrix()}new ResizeObserver(Ld).observe(he("viewport"));Ld();function ao(i){he("toast").textContent=i,he("toast").classList.add("visible"),setTimeout(()=>he("toast").classList.remove("visible"),6e3)}function L0(i){return i==null?"\u2014":Math.abs(i)<.001&&i!==0?i.toExponential(1):i.toFixed(4)}function N0(i){return i.engine==="mujoco_contact_recording"?"MuJoCo \xB7 \uC811\uCD09 \uB3D9\uC5ED\uD559":i.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uBBF8\uB9AC\uBCF4\uAE30":i.engine==="cito_trajectory"?"CITO \xB7 \uCD5C\uC801\uD654 \uADA4\uC801":i.live?"MuJoCo \xB7 \uC0C8 \uACC4\uC0B0 \uACB0\uACFC":"MuJoCo \xB7 \uACC4\uC0B0 \uACB0\uACFC"}function Nd(){bs.target.copy(Mn),Gi.position.copy(Mn).add(new F(1.6,-2.4,1.6).multiplyScalar(oo)),bs.update()}function D0(i){for(++so,ro=[];Vi.children.length;)or(Vi.children[0]);vl=[],Si=void 0;for(let c of i.environment||[]){if(c.type!=="box")continue;let l=new Tt(new Bn(...c.size),new Vn({color:c.color,transparent:!0,opacity:.6}));l.position.fromArray(c.position),Vi.add(l)}let e=i.positions[0].map(c=>new F(...c)),t=new On().setFromPoints(e);Mn=t.getCenter(new F),oo=Math.max(.4,t.getSize(new F).length()*.65);let n=Math.max(.009,Math.min(.022,oo*.018)),s=new Vn({color:9939389,metalness:.48,roughness:.32}),r=new Vn({color:2452597,metalness:.5,roughness:.3}),o=new Vn({color:15776376,metalness:.3,roughness:.32,emissive:4399881,emissiveIntensity:.25});i.edges.forEach(([c,l])=>{let h=new Tt(new ss(n*.75,n*.75,1,12),s);Vi.add(h),vl.push({mesh:h,a:c,b:l,cylinder:!0})});let a=new Set(i.link_names.map((c,l)=>c===i.frame||c.endsWith("link2")?l:-1));if(i.link_names.forEach((c,l)=>{if(i.object?.index===l)return;let h=new Tt(new rs(n*(a.has(l)?1.6:1.25),18,12),a.has(l)?o:r);Vi.add(h),vl.push({mesh:h,a:l})}),i.object){Si=new Tt(new Bn(...i.object.size),new Vn({color:15841913,metalness:.15,roughness:.45,transparent:!0,opacity:.8})),Vi.add(Si);let c=new zn(new Ur(Si.geometry),new mn({color:16767402}));Si.add(c)}ti&&(Hi.remove(ti),ti.geometry.dispose()),ti=new Gr(oo*5,20,3559532,1912904),ti.rotation.x=Math.PI/2,ti.position.set(Mn.x,Mn.y,Math.min(0,t.min.z)-.005),ti.material.transparent=!0,ti.material.opacity=.8,Hi.add(ti),Nd()}async function Dd(){let i=++so,e=Ue,t=he("geometry-mode").value;if(ro.forEach(n=>or(n.robot)),ro=[],he("geometry-status").dataset.state="loading",sh(hn),t==="skeleton"){he("geometry-status").textContent=e.id==="dual_cito"?"\uB450 Cartesian arm\uACFC \uBB3C\uCCB4\uC758 \uC88C\uD45C \uC7AC\uC0DD\uC785\uB2C8\uB2E4. \uC774 \uC81C\uD55C \uBAA8\uB378\uC5D0\uB294 \uC678\uD615 mesh\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"URDF \uB9C1\uD06C \uC88C\uD45C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. Visual \uB610\uB294 collision\uC744 \uC120\uD0DD\uD558\uBA74 \uC6D0\uBCF8 \uD615\uC0C1\uC744 \uBD88\uB7EC\uC635\uB2C8\uB2E4.",he("geometry-status").dataset.state="skeleton",he("loading").classList.add("hidden");return}he("geometry-status").textContent="URDF\uC640 mesh\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4\u2026",he("loading").classList.remove("hidden");try{let n=e.instances||[{manifest:`./models/${e.id}/model.json`}],s=await Promise.allSettled(n.map(async a=>{let c=await wd(a.manifest,t),l=e.instances?{...a,q:e.q.map(h=>a.q_indices.map(u=>h[u]))}:e;try{nh(c,l,hn)}catch(h){throw or(c),h}return{robot:c,recording:l}})),r=s.filter(a=>a.status==="fulfilled").map(a=>a.value),o=s.find(a=>a.status==="rejected");if(i!==so||e!==Ue||o){if(r.forEach(a=>or(a.robot)),o)throw o.reason;return}ro=r,r.forEach(a=>Vi.add(a.robot)),he("geometry-status").textContent=Rd?"URDF/mesh \uB85C\uB4DC \uC644\uB8CC. WebGL\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4 \uB9C1\uD06C \uC88C\uD45C\uB97C CPU\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4.":t==="collision"?"URDF collision \uD615\uC0C1\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uD615\uC0C1 \uD45C\uC2DC\uB294 \uC811\uCD09 \uACC4\uC0B0\xB7\uCDA9\uB3CC \uAC80\uC99D \uACB0\uACFC\uC640 \uBCC4\uAC1C\uC785\uB2C8\uB2E4.":e.engine==="mujoco_contact_recording"?"3\uAC1C URDF \uD314\uACFC \uB3C4\uAD6C\uC758 \uC2E4\uC81C \uC811\uCD09 \uC2E4\uD589\uC785\uB2C8\uB2E4. Point\uB294 \uAD6C\uD615 tool, gripper\uB294 \uB450 \uC190\uAC00\uB77D \uC811\uCD09, suction\uC740 \uC555\uB825 \uC81C\uD55C seal \uBAA8\uB378\uC785\uB2C8\uB2E4.":"URDF visual\xB7mesh\uC758 origin\uACFC scale\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uAE30\uB85D\uB41C \uC2DC\uBBAC\uB808\uC774\uC158\uC740 \uAD00\uC808 \uCD94\uC885 \uAC80\uC99D\uC785\uB2C8\uB2E4.",he("geometry-status").dataset.state="ready",he("geometry-status").dataset.model=e.id,sh(hn)}catch(n){if(i!==so)return;he("geometry-status").textContent=n.message+" \uB9C1\uD06C \uC88C\uD45C \uD45C\uC2DC\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uB124\uD2B8\uC6CC\uD06C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",he("geometry-status").dataset.state="error",ao(n.message)}finally{i===so&&he("loading").classList.add("hidden")}}function sh(i){if(!Ue)return;let e=Math.floor(i),t=Math.min(e+1,Ue.times.length-1),n=i-e,s=Ue.positions[e].map((r,o)=>new F(...r).lerp(new F(...Ue.positions[t][o]),n));vl.forEach(r=>{let o=s[r.a];if(!r.cylinder){r.mesh.visible=he("geometry-mode").value==="skeleton",r.mesh.position.copy(o);return}let a=s[r.b],c=a.clone().sub(o),l=c.length();r.mesh.visible=he("geometry-mode").value==="skeleton"&&l>1e-6,r.mesh.position.copy(o).add(a).multiplyScalar(.5),r.mesh.scale.set(1,l,1),l>1e-6&&r.mesh.quaternion.setFromUnitVectors(P0,c.normalize())}),Si&&(Si.position.copy(s[Ue.object.index]),Ue.object.poses&&Si.quaternion.fromArray(Ue.object.poses[e],3).slerp(new Ot().fromArray(Ue.object.poses[t],3),n)),ro.forEach(r=>nh(r.robot,r.recording,i)),ei=s}function U0(){let i=Pn.domElement,e=i.getContext("2d"),t=i.width,n=i.height,s=Math.min(devicePixelRatio,2);if(e.clearRect(0,0,t,n),!Ue||!ei.length)return;Gi.updateMatrixWorld();let r=h=>{let u=h.clone().project(Gi);return[(u.x+1)*t/2,(1-u.y)*n/2,u.z]},o=(h,u,d,p)=>{let g=r(h),x=r(u);g[2]>1||x[2]>1||(e.strokeStyle=d,e.lineWidth=p*s,e.lineCap="round",e.beginPath(),e.moveTo(g[0],g[1]),e.lineTo(x[0],x[1]),e.stroke())},a=ti.position.z,c=oo*2.5;for(let h=-10;h<=10;++h){let u=c*h/10,d=h===0?"#36506c":"#1d3048";o(new F(Mn.x-c,Mn.y+u,a),new F(Mn.x+c,Mn.y+u,a),d,.8),o(new F(Mn.x+u,Mn.y-c,a),new F(Mn.x+u,Mn.y+c,a),d,.8)}for(let h of Ue.environment||[]){if(h.type!=="box")continue;let u=Array.from({length:8},(d,p)=>new F(...h.position).add(new F(...h.size.map((g,x)=>(p>>x&1?.5:-.5)*g))));u.forEach((d,p)=>{for(let g=0;g<3;g++)p&1<<g||o(d,u[p|1<<g],"#64768b",1)})}if([...Ue.edges].sort((h,u)=>r(ei[u[0]])[2]-r(ei[h[0]])[2]).forEach(([h,u])=>{o(ei[h],ei[u],"#546b82",10),o(ei[h],ei[u],"#aabbd0",5)}),ei.forEach((h,u)=>{if(Ue.object?.index===u)return;let d=r(h);if(d[2]>1)return;let p=Ue.link_names[u]===Ue.frame||Ue.link_names[u].endsWith("link2");e.fillStyle=p?"#f0ba78":"#3da99e",e.strokeStyle="#112d3b",e.lineWidth=2*s,e.beginPath(),e.arc(d[0],d[1],(p?6:4)*s,0,Math.PI*2),e.fill(),e.stroke()}),Ue.object){let h=ei[Ue.object.index],u=Ue.object.size,d=Array.from({length:8},(p,g)=>new F(...u.map((x,m)=>(g>>m&1?.5:-.5)*x)).applyQuaternion(Si.quaternion).add(h));d.forEach((p,g)=>{for(let x=0;x<3;x++)g&1<<x||o(p,d[g|1<<x],"#f1ba79",2)})}e.fillStyle="#8fa6c3",e.font=`${9*s}px sans-serif`,e.fillText("CPU 3D PROJECTION \xB7 WebGL unavailable",18*s,n-40*s)}function F0(){if(zi=Ue.errors?.some(n=>n!==null)?Ue.errors:Ue.object?Ue.positions.map(n=>n[Ue.object.index][2]-Ue.positions[0][Ue.object.index][2]):[],he("chart-label").textContent=Ue.object?"OBJECT LIFT":"JOINT TRACKING ERROR",he("error-unit").textContent=Ue.object?"m":"rad",he("chart-note").textContent=Ue.engine==="kinematic_preview"?"\uAE30\uAD6C\uD559 \uC7AC\uC0DD: \uB3D9\uC5ED\uD559 \uCD94\uC885 \uC624\uCC28 \uC5C6\uC74C":Ue.instances?"3\uAC1C \uD314 \xB7 lift\uC640 transfer \uD6C4 3.0 s\uC5D0 \uB3C4\uAD6C \uD574\uC81C":Ue.object?"1 kg \uBB3C\uCCB4 \xB7 \uB450 Cartesian arm \xB7 3 cm \uC774\uB3D9":"\uAD00\uC808 \uC704\uCE58 \uC624\uCC28\uC758 2-norm",!zi.length){he("chart-line").setAttribute("points",""),he("chart-area").setAttribute("d","");return}let i=Math.min(0,...zi),e=Math.max(1e-8,...zi),t=zi.map((n,s)=>[s/(zi.length-1)*260,80-(n-i)/(e-i)*66]);he("chart-line").setAttribute("points",t.map(n=>n.join(",")).join(" ")),he("chart-area").setAttribute("d","M0,85 L"+t.map(n=>n.join(",")).join(" L")+" L260,85 Z")}function rh(i){he("toast").classList.remove("visible"),Ue?.id==="dual_cito"&&i.id!=="dual_cito"&&(he("geometry-mode").value="visual"),Ue=i,hn=0,document.querySelector(".run-panel").hidden=!!i.instances,window.dispatchEvent(new CustomEvent("recording-selected",{detail:i})),he("geometry-mode").disabled=i.id==="dual_cito",i.id==="dual_cito"&&(he("geometry-mode").value="skeleton"),he("model-title").textContent=i.title,he("model-description").textContent=i.engine==="kinematic_preview"?"29\uAC1C \uAD00\uC808\uACFC floating base\uB97C \uAC00\uC9C4 \uD734\uBA38\uB178\uC774\uB4DC\uC758 \uAE30\uAD6C\uD559\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.":i.engine==="cito_trajectory"?"\uC811\uCD09\uC744 \uC720\uC9C0\uD558\uBA70 \uBB3C\uCCB4\uB97C \uB4E4\uC5B4 \uC62C\uB9AC\uB294 \uC81C\uD55C \uBAA8\uB378\uC758 \uCD5C\uC801\uD654 \uACB0\uACFC\uC785\uB2C8\uB2E4.":"URDF \uAD00\uC131\uC73C\uB85C \uACC4\uC0B0\uD55C \uD3D0\uB8E8\uD504 \uD1A0\uD06C \uC81C\uC5B4 \uACB0\uACFC\uB97C \uC7AC\uC0DD\uD569\uB2C8\uB2E4.",i.instances&&(he("model-description").textContent="\uC8FC\uC5B4\uC9C4 contracted contact \u2192 3\uAC1C keyframe \uCD5C\uC801\uD654 \u2192 3\uAC1C \uD314\uC758 \uC811\uCD09 \uB3D9\uC5ED\uD559 \uC2E4\uD589\uC785\uB2C8\uB2E4."),he("engine-badge").innerHTML="<span></span>"+N0(i),he("engine-badge").classList.toggle("kinematic",i.engine==="kinematic_preview"),he("scene-label").textContent=i.engine==="cito_trajectory"?"COUPLED ROBOT\u2013OBJECT TRAJECTORY":i.engine==="kinematic_preview"?"FLOATING-BASE KINEMATIC PREVIEW":"RECORDED CLOSED-LOOP SIMULATION",i.instances&&(he("scene-label").textContent="THREE-ARM CONTACT DYNAMICS \xB7 3 KEYFRAMES"),he("dof").textContent=i.dof,he("base").textContent=i.floating_base?"Floating +6":"Fixed",he("physics-step").textContent=i.summary.physics_dt?(i.summary.physics_dt*1e3).toFixed(0)+" ms":i.engine==="cito_trajectory"?"100 ms":"\u2014";let e=i.times.at(-1);he("duration").textContent=e.toFixed(1)+" s",he("time-total").textContent=e.toFixed(2)+" s",he("chart-end").textContent=e.toFixed(1)+" s",he("tool-frame").textContent=i.frame,he("scope-description").textContent=i.description,he("keyframe-list").replaceChildren();for(let t of[...i.keyframes||[],...i.events||[]]){let n=document.createElement("button");n.className="keyframe-choice",n.textContent=t.id+" \xB7 "+t.time.toFixed(1)+" s",n.onclick=()=>{vs=!1,he("play").textContent="\u25B6",he("play").setAttribute("aria-label","\uC7AC\uC0DD");let s=i.times.findIndex(o=>o>=t.time);s<0&&(s=i.times.length-1);let r=Math.max(0,s-1);hn=r+(t.time-i.times[r])/Math.max(1e-12,i.times[s]-i.times[r]),bl()},he("keyframe-list").append(n)}document.querySelectorAll(".model-choice").forEach(t=>{t.classList.toggle("selected",t.dataset.id===i.id),t.setAttribute("aria-pressed",t.dataset.id===i.id)}),yl&&URL.revokeObjectURL(yl),yl=URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),he("download-data").href=yl,he("download-data").download=i.id+"-simulation.json",he("run").disabled=!lr||i.engine==="kinematic_preview"||i.id==="dual_cito"||!!i.instances,he("amplitude").disabled=he("run-duration").disabled=!!i.instances,he("backend-state").textContent=i.instances?"\uC870\uAC74\uC744 \uBC14\uAFD4 \uB2E4\uC2DC \uACC4\uC0B0: contact-transfer demo-three-arm --viewer web":lr?"Python backend \uC5F0\uACB0\uB428 \xB7 \uC0C8 MuJoCo \uACC4\uC0B0\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.":"\uC774 \uB9C1\uD06C\uB294 \uACC4\uC0B0 \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4. \uC0C8 \uACC4\uC0B0\uC740 \uB85C\uCEEC \uB610\uB294 Codespaces\uC758 Python \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.",D0(i),F0(),bl(),Dd()}function bl(){if(!Ue)return;let i=Math.min(Math.round(hn),Ue.times.length-1),e=Ue.times[0]+hn/(Ue.times.length-1)*Ue.times.at(-1);he("timeline").value=hn/(Ue.times.length-1),he("time-now").textContent=e.toFixed(2)+" s",he("error-now").textContent=zi.length?L0(zi[i]):"\u2014",he("tool-state").textContent=Ue.tool_states?`\uAD6C\uD615 tool: ${Ue.tool_states.point_contact[i]?"\uC811\uCD09":"\uBD84\uB9AC"} \xB7 Gripper: ${Ue.tool_states.gripper_contact[i]?"\uC591\uCABD pad \uC811\uCD09":"\uBBF8\uD30C\uC9C0"} \xB7 Suction: ${Ue.tool_states.suction_sealed[i]?"seal \uC720\uC9C0":"\uD574\uC81C"}`:"";let t=Ue.torque_ratio[i];he("torque-now").textContent=t==null?"\u2014":(t*100).toFixed(1)+"%",he("torque-meter").style.width=Math.min(100,(t||0)*100)+"%",he("chart-cursor").setAttribute("x1",hn/(Ue.times.length-1)*260),he("chart-cursor").setAttribute("x2",hn/(Ue.times.length-1)*260),sh(hn)}async function Td(i){let e=++ih;he("loading").classList.remove("hidden");try{let t=await fetch("./data/"+i+".json");if(!t.ok)throw Error("\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");let n=await t.json();e===ih&&rh(n)}catch(t){e===ih&&(ao(t.message),he("loading").classList.add("hidden"))}}he("play").onclick=()=>{vs=!vs,he("play").textContent=vs?"\u2161":"\u25B6",he("play").setAttribute("aria-label",vs?"\uC77C\uC2DC \uC815\uC9C0":"\uC7AC\uC0DD")};he("timeline").oninput=i=>{Ue&&(hn=Number(i.target.value)*(Ue.times.length-1),bl())};he("speed").onchange=i=>Cd=Number(i.target.value);he("loop").onclick=()=>{ar=!ar,he("loop").classList.toggle("active",ar),he("loop").setAttribute("aria-pressed",ar)};he("reset-camera").onclick=Nd;he("geometry-mode").onchange=Dd;he("run").onclick=async()=>{he("run").disabled=!0,he("run").textContent="\uACC4\uC0B0 \uC911\u2026";try{let i=await fetch("./api/simulate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:Ue.id,duration:Number(he("run-duration").value),amplitude:Number(he("amplitude").value)})}),e=await i.json();if(!i.ok)throw Error(e.error||"\uC2DC\uBBAC\uB808\uC774\uC158 \uC2E4\uD328");e.live=!0,rh(e),ao("\uC0C8 MuJoCo \uACC4\uC0B0\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(i){ao(i.message)}finally{he("run").textContent="Run simulation \u2197",he("run").disabled=!lr||Ue.id==="dual_cito"||Ue.floating_base||!!Ue.instances}};async function O0(){let i=await fetch("./data/index.json"),e=await i.json();he("model-count").textContent=String(e.models.length).padStart(2,"0"),he("test-count").textContent=e.tests_passed,[...e.models].sort((s,r)=>s.id==="dual_cito"?-1:r.id==="dual_cito"?1:s.floating_base-r.floating_base||s.title.localeCompare(r.title)).forEach(s=>{let r=document.createElement("button");r.className="model-choice",r.dataset.id=s.id,r.setAttribute("aria-pressed","false");let o=document.createElement("span");o.className="model-icon",o.textContent=s.id==="dual_cito"?"\u22C8":s.floating_base?"\u2667":"\u2301";let a=document.createElement("span"),c=document.createElement("span"),l=document.createElement("span");c.className="model-name",c.textContent=s.title,l.className="model-meta",l.textContent=s.id==="three_arm"?"P \xB7 G \xB7 SUCTION / 3 KEYFRAMES":s.id==="dual_cito"?"CONTACT-IMPLICIT \xB7 6 DoF":s.dof+" DoF \xB7 "+(s.floating_base?"KINEMATIC PREVIEW":"MUJOCO"),a.append(c,l);let h=document.createElement("span");h.className="choice-dot",h.textContent="\u25CF",r.append(o,a,h),r.onclick=()=>Td(s.id),he("model-list").append(r)});let n=new URLSearchParams(location.search).get("model");await Td(e.models.some(s=>s.id===n)?n:"three_franka");try{let s=await fetch("./api/health");s.ok&&(lr=(await s.json()).ready===!0)}catch{}he("backend-state").textContent=Ue?.instances?"\uC870\uAC74\uC744 \uBC14\uAFD4 \uB2E4\uC2DC \uACC4\uC0B0: contact-transfer demo-three-arm --viewer web":lr?"Python backend \uC5F0\uACB0\uB428 \xB7 \uC0C8 MuJoCo \uACC4\uC0B0\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.":"\uC774 \uB9C1\uD06C\uB294 \uACC4\uC0B0 \uACB0\uACFC \uC7AC\uC0DD\uC6A9\uC785\uB2C8\uB2E4. \uC0C8 \uACC4\uC0B0\uC740 \uB85C\uCEEC \uB610\uB294 Codespaces\uC758 Python \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD569\uB2C8\uB2E4.",he("run").disabled=!lr||Ue?.floating_base||Ue?.id==="dual_cito"||!!Ue?.instances}var Ad=performance.now();function Ud(i){requestAnimationFrame(Ud);let e=Math.min(.05,(i-Ad)/1e3);Ad=i,Ue&&vs&&(hn+=e*Cd*(Ue.times.length-1)/Ue.times.at(-1),hn>Ue.times.length-1&&(hn=ar?0:Ue.times.length-1,ar||(vs=!1,he("play").textContent="\u25B6")),bl()),bs.update(),Pn.render(Hi,Gi)}requestAnimationFrame(Ud);O0().catch(i=>{ao(i.message),he("loading").classList.add("hidden")});window.addEventListener("experiment-result",i=>rh(i.detail));dh().catch(i=>{document.getElementById("experiment-state").textContent=i.message});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
