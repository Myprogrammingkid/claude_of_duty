(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="170",eh=0,Ro=1,nh=2,ec=1,nc=2,Mn=3,Wn=0,Te=1,yn=2,Hn=0,Li=1,Ii=2,Co=3,Po=4,ih=5,ii=100,sh=101,rh=102,ah=103,oh=104,lh=200,ch=201,hh=202,dh=203,ca=204,ha=205,uh=206,fh=207,ph=208,mh=209,gh=210,_h=211,vh=212,xh=213,Mh=214,da=0,ua=1,fa=2,Fi=3,pa=4,ma=5,ga=6,_a=7,ic=0,yh=1,Sh=2,Gn=0,bh=1,wh=2,Eh=3,sc=4,Th=5,Ah=6,Rh=7,rc=300,Oi=301,Bi=302,va=303,xa=304,pr=306,or=1e3,ri=1001,Ma=1002,rn=1003,Ch=1004,xs=1005,dn=1006,yr=1007,ai=1008,En=1009,ac=1010,oc=1011,hs=1012,io=1013,oi=1014,Sn=1015,ps=1016,so=1017,ro=1018,zi=1020,lc=35902,cc=1021,hc=1022,nn=1023,dc=1024,uc=1025,Ui=1026,ki=1027,fc=1028,ao=1029,pc=1030,oo=1031,lo=1033,Ks=33776,Js=33777,Qs=33778,tr=33779,ya=35840,Sa=35841,ba=35842,wa=35843,Ea=36196,Ta=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,Da=37811,La=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ha=37821,er=36492,Ga=36494,Va=36495,mc=36283,Wa=36284,Xa=36285,Ya=36286,Ph=3200,Dh=3201,gc=0,Lh=1,zn="",Ue="srgb",Gi="srgb-linear",mr="linear",te="srgb",ui=7680,Do=519,Ih=512,Uh=513,Nh=514,_c=515,Fh=516,Oh=517,Bh=518,zh=519,qa=35044,Lo="300 es",bn=2e3,lr=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,$a=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function br(i,t,e){return(1-e)*i+e*t}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],_=s[0],f=s[3],d=s[6],b=s[1],w=s[4],x=s[7],N=s[2],R=s[5],A=s[8];return r[0]=a*_+o*b+l*N,r[3]=a*f+o*w+l*R,r[6]=a*d+o*x+l*A,r[1]=c*_+h*b+u*N,r[4]=c*f+h*w+u*R,r[7]=c*d+h*x+u*A,r[2]=p*_+m*b+g*N,r[5]=p*f+m*w+g*R,r[8]=p*d+m*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,g=e*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=p*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new It;function vc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=cr("canvas");return i.style.display="block",i}const Io={};function rs(i){i in Io||(Io[i]=!0,console.warn(i))}function Gh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Vh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?mr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uo=[.64,.33,.3,.6,.15,.06],No=[.2126,.7152,.0722],Fo=[.3127,.329],Oo=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Gi]:{primaries:Uo,whitePoint:Fo,transfer:mr,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:No,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:Uo,whitePoint:Fo,transfer:te,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:No,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let fi;class Xh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=cr("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Er(s[a].image)):r.push(Er(s[a]))}else r=Er(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class De extends Vi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ri,s=ri,r=dn,a=ai,o=nn,l=En,c=De.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Vn(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=rc;De.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,x=(m+1)/2,N=(d+1)/2,R=(h+p)/4,A=(u+_)/4,L=(g+f)/4;return w>x&&w>N?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=A/n):x>N?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=L/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=A/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(u-_)/b,this.z=(p-h)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends $h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mc extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==p||c!==m||h!==g){let f=1-o;const d=l*p+c*m+h*g+u*_,b=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const N=Math.sqrt(w),R=Math.atan2(N,d*b);f=Math.sin(f*R)/N,o=Math.sin(o*R)/N}const x=o*b;if(l=l*f+p*x,c=c*f+m*x,h=h*f+g*x,u=u*f+_*x,f===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*p,t[e+1]=l*g+h*p+c*u-o*m,t[e+2]=c*g+h*m+o*p-l*u,t[e+3]=h*g-o*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new T,zo=new ms;class gs{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),ys.subVectors(this.max,$i),pi.subVectors(t.a,$i),mi.subVectors(t.b,$i),gi.subVectors(t.c,$i),Cn.subVectors(mi,pi),Pn.subVectors(gi,mi),Yn.subVectors(pi,gi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!Ar(e,pi,mi,gi,ys)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,pi,mi,gi,ys))?!1:(Ss.crossVectors(Cn,Pn),e=[Ss.x,Ss.y,Ss.z],Ar(e,pi,mi,gi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new T,new T,new T,new T,new T,new T,new T,new T],Ke=new T,Ms=new gs,pi=new T,mi=new T,gi=new T,Cn=new T,Pn=new T,Yn=new T,$i=new T,ys=new T,Ss=new T,qn=new T;function Ar(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);const o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=t.dot(qn),c=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jh=new gs,Zi=new T,Rr=new T;class gr{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Rr)),this.expandByPoint(Zi.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new T,Cr=new T,bs=new T,Dn=new T,Pr=new T,ws=new T,Dr=new T;class yc{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Cr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Dn.dot(this.direction),l=-Dn.dot(bs),c=Dn.lengthSq(),h=Math.abs(1-a*a);let u,p,m,g;if(h>0)if(u=a*l-o,p=a*o-l,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cr).addScaledVector(bs,p),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Pr.subVectors(e,t),ws.subVectors(n,t),Dr.crossVectors(Pr,ws);let a=this.direction.dot(Dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=o*this.direction.dot(ws.crossVectors(Dn,ws));if(l<0)return null;const c=o*this.direction.dot(Pr.cross(Dn));if(c<0||l+c>a)return null;const h=-o*Dn.dot(Dr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,l,c,h,u,p,m,g,_,f){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,p,m,g,_,f)}set(t,e,n,s,r,a,o,l,c,h,u,p,m,g,_,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=p-_*c,e[9]=-o*l,e[2]=_-p*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,m=l*u,g=c*h,_=c*u;e[0]=p+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,m=l*u,g=c*h,_=c*u;e[0]=p-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=p*c+_,e[1]=l*u,e[5]=_*c+p,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-p*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=p-_*u}else if(t.order==="XZY"){const p=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Jh)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Ln.crossVectors(n,ze),Ln.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Ln.crossVectors(n,ze)),Ln.normalize(),Es.crossVectors(ze,Ln),s[0]=Ln.x,s[4]=Es.x,s[8]=ze.x,s[1]=Ln.y,s[5]=Es.y,s[9]=ze.y,s[2]=Ln.z,s[6]=Es.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],_=n[6],f=n[10],d=n[14],b=n[3],w=n[7],x=n[11],N=n[15],R=s[0],A=s[4],L=s[8],S=s[12],M=s[1],C=s[5],k=s[9],O=s[13],W=s[2],q=s[6],V=s[10],K=s[14],G=s[3],it=s[7],ct=s[11],yt=s[15];return r[0]=a*R+o*M+l*W+c*G,r[4]=a*A+o*C+l*q+c*it,r[8]=a*L+o*k+l*V+c*ct,r[12]=a*S+o*O+l*K+c*yt,r[1]=h*R+u*M+p*W+m*G,r[5]=h*A+u*C+p*q+m*it,r[9]=h*L+u*k+p*V+m*ct,r[13]=h*S+u*O+p*K+m*yt,r[2]=g*R+_*M+f*W+d*G,r[6]=g*A+_*C+f*q+d*it,r[10]=g*L+_*k+f*V+d*ct,r[14]=g*S+_*O+f*K+d*yt,r[3]=b*R+w*M+x*W+N*G,r[7]=b*A+w*C+x*q+N*it,r[11]=b*L+w*k+x*V+N*ct,r[15]=b*S+w*O+x*K+N*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],g=t[3],_=t[7],f=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*m-n*l*m)+_*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+f*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*p+s*a*u-n*a*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],g=t[12],_=t[13],f=t[14],d=t[15],b=u*f*c-_*p*c+_*l*m-o*f*m-u*l*d+o*p*d,w=g*p*c-h*f*c-g*l*m+a*f*m+h*l*d-a*p*d,x=h*_*c-g*u*c+g*o*m-a*_*m-h*o*d+a*u*d,N=g*u*l-h*_*l-g*o*p+a*_*p+h*o*f-a*u*f,R=e*b+n*w+s*x+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(_*p*r-u*f*r-_*s*m+n*f*m+u*s*d-n*p*d)*A,t[2]=(o*f*r-_*l*r+_*s*c-n*f*c-o*s*d+n*l*d)*A,t[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*m-n*l*m)*A,t[4]=w*A,t[5]=(h*f*r-g*p*r+g*s*m-e*f*m-h*s*d+e*p*d)*A,t[6]=(g*l*r-a*f*r-g*s*c+e*f*c+a*s*d-e*l*d)*A,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*m+e*l*m)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*d-e*u*d)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*A,t[12]=N*A,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*f+e*u*f)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*f-e*o*f)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*p+e*o*p)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,g=r*u,_=a*h,f=a*u,d=o*u,b=l*c,w=l*h,x=l*u,N=n.x,R=n.y,A=n.z;return s[0]=(1-(_+d))*N,s[1]=(m+x)*N,s[2]=(g-w)*N,s[3]=0,s[4]=(m-x)*R,s[5]=(1-(p+d))*R,s[6]=(f+b)*R,s[7]=0,s[8]=(g+w)*A,s[9]=(f-b)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const c=1/r,h=1/a,u=1/o;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=bn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let m,g;if(o===bn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===lr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),p=(e+t)*c,m=(n+s)*h;let g,_;if(o===bn)g=(a+r)*u,_=-2*u;else if(o===lr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new T,Je=new he,Kh=new T(0,0,0),Jh=new T(1,1,1),Ln=new T,Es=new T,ze=new T,ko=new he,Ho=new ms;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ko.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ko,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qh=0;const Go=new T,vi=new ms,gn=new he,Ts=new T,ji=new T,td=new T,ed=new ms,Vo=new T(1,0,0),Wo=new T(0,1,0),Xo=new T(0,0,1),Yo={type:"added"},nd={type:"removed"},xi={type:"childadded",child:null},Lr={type:"childremoved",child:null};class ve extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new T,e=new an,n=new ms,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new It}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Vo,t)}rotateY(t){return this.rotateOnAxis(Wo,t)}rotateZ(t){return this.rotateOnAxis(Xo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vo,t)}translateY(t){return this.translateOnAxis(Wo,t)}translateZ(t){return this.translateOnAxis(Xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ji,Ts,this.up):gn.lookAt(Ts,ji,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yo),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nd),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yo),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ve.DEFAULT_UP=new T(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new T,_n=new T,Ir=new T,vn=new T,Mi=new T,yi=new T,qo=new T,Ur=new T,Nr=new T,Fr=new T,Or=new ne,Br=new ne,zr=new ne;class qe{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),_n.subVectors(n,e),Ir.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(_n),l=Qe.dot(Ir),c=_n.dot(_n),h=_n.dot(Ir),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,g=(a*h-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Or.setScalar(0),Br.setScalar(0),zr.setScalar(0),Or.fromBufferAttribute(t,e),Br.fromBufferAttribute(t,n),zr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(Br,r.y),a.addScaledVector(zr,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),_n.subVectors(t,e),Qe.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),yi.subVectors(r,n),Ur.subVectors(t,n);const l=Mi.dot(Ur),c=yi.dot(Ur);if(l<=0&&c<=0)return e.copy(n);Nr.subVectors(t,s);const h=Mi.dot(Nr),u=yi.dot(Nr);if(h>=0&&u<=h)return e.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Mi,a);Fr.subVectors(t,r);const m=Mi.dot(Fr),g=yi.dot(Fr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(yi,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return qo.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(qo,o);const d=1/(f+_+p);return a=_*d,o=p*d,e.copy(n).addScaledVector(Mi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},As={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=kh(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=kr(a,r,t+1/3),this.g=kr(a,r,t),this.b=kr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Yt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ne(Ee.r*255,0,255))*65536+Math.round(Ne(Ee.g*255,0,255))*256+Math.round(Ne(Ee.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ue){Yt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(As);const n=br(In.h,As.h,e),s=br(In.s,As.s,e),r=br(In.l,As.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Ft;Ft.NAMES=bc;let id=0;class hi extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Vn(),this.name="",this.blending=Li,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wi extends hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new T,Rs=new Ot;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class wc extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ec extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Oe extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sd=0;const Ye=new he,Hr=new ve,Si=new T,ke=new gs,Ki=new gs,Se=new T;class Ve extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vc(t)?Ec:wc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(ke.min,Ki.min),ke.expandByPoint(Se),Se.addVectors(ke.max,Ki.max),ke.expandByPoint(Se)):(ke.expandByPoint(Ki.min),ke.expandByPoint(Ki.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),Se.add(Si)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;const c=new T,h=new T,u=new T,p=new Ot,m=new Ot,g=new Ot,_=new T,f=new T;function d(L,S,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),p.fromBufferAttribute(r,L),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),m.sub(p),g.sub(p);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(_),o[S].add(_),o[M].add(_),l[L].add(f),l[S].add(f),l[M].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,S=b.length;L<S;++L){const M=b[L],C=M.start,k=M.count;for(let O=C,W=C+k;O<W;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const w=new T,x=new T,N=new T,R=new T;function A(L){N.fromBufferAttribute(s,L),R.copy(N);const S=o[L];w.copy(S),w.sub(N.multiplyScalar(N.dot(S))).normalize(),x.crossVectors(R,S);const C=x.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,C)}for(let L=0,S=b.length;L<S;++L){const M=b[L],C=M.start,k=M.count;for(let O=C,W=C+k;O<W;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),_=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)p[g++]=c[m++]}return new $e(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new he,$n=new yc,Cs=new gr,Zo=new T,Ps=new T,Ds=new T,Ls=new T,Gr=new T,Is=new T,jo=new T,Us=new T;class kt extends ve{constructor(t=new Ve,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Gr.fromBufferAttribute(u,t),a?Is.addScaledVector(Gr,h):Is.addScaledVector(Gr.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Cs.containsPoint($n.origin)===!1&&($n.intersectSphere(Cs,Zo)===null||$n.origin.distanceToSquared(Zo)>(t.far-t.near)**2))&&($o.copy(r).invert(),$n.copy(t.ray).applyMatrix4($o),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=a[f.materialIndex],b=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let x=b,N=w;x<N;x+=3){const R=o.getX(x),A=o.getX(x+1),L=o.getX(x+2);s=Ns(this,d,t,n,c,h,u,R,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const b=o.getX(f),w=o.getX(f+1),x=o.getX(f+2);s=Ns(this,a,t,n,c,h,u,b,w,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=a[f.materialIndex],b=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let x=b,N=w;x<N;x+=3){const R=x,A=x+1,L=x+2;s=Ns(this,d,t,n,c,h,u,R,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const b=f,w=f+1,x=f+2;s=Ns(this,a,t,n,c,h,u,b,w,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function rd(i,t,e,n,s,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Wn,o),l===null)return null;Us.copy(o),Us.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:i}}function Ns(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Ds),i.getVertexPosition(c,Ls);const h=rd(i,t,e,n,Ps,Ds,Ls,jo);if(h){const u=new T;qe.getBarycoord(jo,Ps,Ds,Ls,u),s&&(h.uv=qe.getInterpolatedAttribute(s,o,l,c,u,new Ot)),r&&(h.uv1=qe.getInterpolatedAttribute(r,o,l,c,u,new Ot)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new T,materialIndex:0};qe.getNormal(Ps,Ds,Ls,p.normal),h.face=p,h.barycoord=u}return h}class ue extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function g(_,f,d,b,w,x,N,R,A,L,S){const M=x/A,C=N/L,k=x/2,O=N/2,W=R/2,q=A+1,V=L+1;let K=0,G=0;const it=new T;for(let ct=0;ct<V;ct++){const yt=ct*C-O;for(let Bt=0;Bt<q;Bt++){const ie=Bt*M-k;it[_]=ie*b,it[f]=yt*w,it[d]=W,c.push(it.x,it.y,it.z),it[_]=0,it[f]=0,it[d]=R>0?1:-1,h.push(it.x,it.y,it.z),u.push(Bt/A),u.push(1-ct/L),K+=1}}for(let ct=0;ct<L;ct++)for(let yt=0;yt<A;yt++){const Bt=p+yt+q*ct,ie=p+yt+q*(ct+1),Y=p+(yt+1)+q*(ct+1),tt=p+(yt+1)+q*ct;l.push(Bt,ie,tt),l.push(ie,Y,tt),G+=6}o.addGroup(m,G,S),m+=G,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function ad(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const od={clone:Hi,merge:Ce};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ac extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new T,Ko=new Ot,Jo=new Ot;class Fe extends Ac{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Ko,Jo),e.subVectors(Jo,Ko)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bi=-90,wi=1;class hd extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(bi,wi,t,e);s.layers=this.layers,this.add(s);const r=new Fe(bi,wi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(bi,wi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(bi,wi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(bi,wi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(bi,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends De{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dd extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ue(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Hn});r.uniforms.tEquirect.value=e;const a=new kt(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=dn),new hd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Vr=new T,ud=new T,fd=new It;class ti{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vr.subVectors(n,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fd.getNormalMatrix(t),s=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new gr,Fs=new T;class co{constructor(t=new ti,e=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],_=s[10],f=s[11],d=s[12],b=s[13],w=s[14],x=s[15];if(n[0].setComponents(l-r,p-c,f-m,x-d).normalize(),n[1].setComponents(l+r,p+c,f+m,x+d).normalize(),n[2].setComponents(l+a,p+h,f+g,x+b).normalize(),n[3].setComponents(l-a,p-h,f-g,x-b).normalize(),n[4].setComponents(l-o,p-u,f-_,x-w).normalize(),e===bn)n[5].setComponents(l+o,p+u,f+_,x+w).normalize();else if(e===lr)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){const g=u[p],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ci extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,p=e/l,m=[],g=[],_=[],f=[];for(let d=0;d<h;d++){const b=d*p-a;for(let w=0;w<c;w++){const x=w*u-r;g.push(x,-b,0),_.push(0,0,1),f.push(w/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const w=b+c*d,x=b+c*(d+1),N=b+1+c*(d+1),R=b+1+c*d;m.push(w,x,R),m.push(x,N,R)}this.setIndex(m),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
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
}`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
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
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
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
#endif`,fu=`struct PhysicalMaterial {
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
}`,pu=`
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ru=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
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
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qu=`float getShadowMask() {
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
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,Sf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bf=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Df=`#define LAMBERT
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
}`,Lf=`#define LAMBERT
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
}`,If=`#define MATCAP
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,kf=`#define STANDARD
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
}`,Hf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Vf=`uniform float size;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,Yf=`uniform vec3 color;
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
}`,qf=`uniform float rotation;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:_d,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:Md,aomap_fragment:yd,aomap_pars_fragment:Sd,batching_pars_vertex:bd,batching_vertex:wd,begin_vertex:Ed,beginnormal_vertex:Td,bsdfs:Ad,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Id,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Fd,color_vertex:Od,common:Bd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Vd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:Yd,envmap_fragment:qd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Zd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:ou,envmap_vertex:Kd,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:tu,fog_pars_fragment:eu,gradientmap_pars_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:su,lights_lambert_pars_fragment:ru,lights_pars_begin:au,lights_toon_fragment:lu,lights_toon_pars_fragment:cu,lights_phong_fragment:hu,lights_phong_pars_fragment:du,lights_physical_fragment:uu,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:gu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:xu,logdepthbuf_vertex:Mu,map_fragment:yu,map_pars_fragment:Su,map_particle_fragment:bu,map_particle_pars_fragment:wu,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:Au,morphcolor_vertex:Ru,morphnormal_vertex:Cu,morphtarget_pars_vertex:Pu,morphtarget_vertex:Du,normal_fragment_begin:Lu,normal_fragment_maps:Iu,normal_pars_fragment:Uu,normal_pars_vertex:Nu,normal_vertex:Fu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:ku,iridescence_pars_fragment:Hu,opaque_fragment:Gu,packing:Vu,premultiplied_alpha_fragment:Wu,project_vertex:Xu,dithering_fragment:Yu,dithering_pars_fragment:qu,roughnessmap_fragment:$u,roughnessmap_pars_fragment:Zu,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Ku,shadowmap_vertex:Ju,shadowmask_pars_fragment:Qu,skinbase_vertex:tf,skinning_pars_vertex:ef,skinning_vertex:nf,skinnormal_vertex:sf,specularmap_fragment:rf,specularmap_pars_fragment:af,tonemapping_fragment:of,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:hf,uv_pars_fragment:df,uv_pars_vertex:uf,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,backgroundCube_vert:_f,backgroundCube_frag:vf,cube_vert:xf,cube_frag:Mf,depth_vert:yf,depth_frag:Sf,distanceRGBA_vert:bf,distanceRGBA_frag:wf,equirect_vert:Ef,equirect_frag:Tf,linedashed_vert:Af,linedashed_frag:Rf,meshbasic_vert:Cf,meshbasic_frag:Pf,meshlambert_vert:Df,meshlambert_frag:Lf,meshmatcap_vert:If,meshmatcap_frag:Uf,meshnormal_vert:Nf,meshnormal_frag:Ff,meshphong_vert:Of,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:kf,meshtoon_vert:Hf,meshtoon_frag:Gf,points_vert:Vf,points_frag:Wf,shadow_vert:Xf,shadow_frag:Yf,sprite_vert:qf,sprite_frag:$f},et={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},cn={basic:{uniforms:Ce([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ce([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ce([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ce([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ce([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ce([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ce([et.points,et.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ce([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ce([et.common,et.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ce([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ce([et.sprite,et.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ce([et.common,et.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ce([et.lights,et.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};cn.physical={uniforms:Ce([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Os={r:0,b:0,g:0},jn=new an,Zf=new he;function jf(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,c,h,u=null,p=0,m=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function _(b){let w=!1;const x=g(b);x===null?d(o,l):x&&x.isColor&&(d(x,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(b,w){const x=g(w);x&&(x.isCubeTexture||x.mapping===pr)?(h===void 0&&(h=new kt(new ue(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Hi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(w.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(jn)),h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==te,(u!==x||p!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new ci(2,2),new Tn({name:"BackgroundMaterial",uniforms:Hi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,w){b.getRGB(Os,Tc(i)),n.buffers.color.setClear(Os.r,Os.g,Os.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:_,addToRenderList:f}}function Kf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(M,C,k,O,W){let q=!1;const V=u(O,k,C);r!==V&&(r=V,c(r.object)),q=m(M,O,k,W),q&&g(M,O,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(M,C,k,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,k){const O=k.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[C.id];q===void 0&&(q={},W[C.id]=q);let V=q[O];return V===void 0&&(V=p(l()),q[O]=V),V}function p(M){const C=[],k=[],O=[];for(let W=0;W<e;W++)C[W]=0,k[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,C,k,O){const W=r.attributes,q=C.attributes;let V=0;const K=k.getAttributes();for(const G in K)if(K[G].location>=0){const ct=W[G];let yt=q[G];if(yt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ct===void 0||ct.attribute!==yt||yt&&ct.data!==yt.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(M,C,k,O){const W={},q=C.attributes;let V=0;const K=k.getAttributes();for(const G in K)if(K[G].location>=0){let ct=q[G];ct===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const yt={};yt.attribute=ct,ct&&ct.data&&(yt.data=ct.data),W[G]=yt,V++}r.attributes=W,r.attributesNum=V,r.index=O}function _(){const M=r.newAttributes;for(let C=0,k=M.length;C<k;C++)M[C]=0}function f(M){d(M,0)}function d(M,C){const k=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==C&&(i.vertexAttribDivisor(M,C),W[M]=C)}function b(){const M=r.newAttributes,C=r.enabledAttributes;for(let k=0,O=C.length;k<O;k++)C[k]!==M[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function w(M,C,k,O,W,q,V){V===!0?i.vertexAttribIPointer(M,C,k,W,q):i.vertexAttribPointer(M,C,k,O,W,q)}function x(M,C,k,O){_();const W=O.attributes,q=k.getAttributes(),V=C.defaultAttributeValues;for(const K in q){const G=q[K];if(G.location>=0){let it=W[K];if(it===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const ct=it.normalized,yt=it.itemSize,Bt=t.get(it);if(Bt===void 0)continue;const ie=Bt.buffer,Y=Bt.type,tt=Bt.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||it.gpuType===io;if(it.isInterleavedBufferAttribute){const st=it.data,Tt=st.stride,Pt=it.offset;if(st.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)d(G.location+zt,st.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let zt=0;zt<G.locationSize;zt++)f(G.location+zt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let zt=0;zt<G.locationSize;zt++)w(G.location+zt,yt/G.locationSize,Y,ct,Tt*tt,(Pt+yt/G.locationSize*zt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)d(G.location+st,it.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<G.locationSize;st++)f(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let st=0;st<G.locationSize;st++)w(G.location+st,yt/G.locationSize,Y,ct,yt*tt,yt/G.locationSize*st*tt,_t)}}else if(V!==void 0){const ct=V[K];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}b()}function N(){L();for(const M in n){const C=n[M];for(const k in C){const O=C[k];for(const W in O)h(O[W].object),delete O[W];delete C[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const k in C){const O=C[k];for(const W in O)h(O[W].object),delete O[W];delete C[k]}delete n[M.id]}function A(M){for(const C in n){const k=n[C];if(k[M.id]===void 0)continue;const O=k[M.id];for(const W in O)h(O[W].object),delete O[W];delete k[M.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function Jf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,p){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Sn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:N,maxSamples:R}}function tp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ti,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const b=r?0:n,w=b*4;let x=d.clippingState||null;l.value=x,x=h(g,p,w,m);for(let N=0;N!==w;++N)x[N]=e[N];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=m+_*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<d)&&(f=new Float32Array(d));for(let w=0,x=m;w!==_;++w,x+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function ep(i){let t=new WeakMap;function e(a,o){return o===va?a.mapping=Oi:o===xa&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pc extends Ac{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,Qo=[.125,.215,.35,.446,.526,.582],si=20,Wr=new Pc,tl=new Ft;let Xr=null,Yr=0,qr=0,$r=!1;const ei=(1+Math.sqrt(5))/2,Ei=1/ei,el=[new T(-ei,Ei,0),new T(ei,Ei,0),new T(-Ei,0,ei),new T(Ei,0,ei),new T(0,ei,-Ei),new T(0,ei,Ei),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Za{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,Yr,qr),this._renderer.xr.enabled=$r,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ps,format:nn,colorSpace:Gi,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,t,e)}return s}_compileMaterial(t){const e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(tl),h.toneMapping=Gn,h.autoClear=!1;const m=new Wi({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new kt(new ue,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(tl),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const w=this._cubeSize;Bs(s,b*w,d>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=el[(s-r-1)%el.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new kt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):si;f>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${si}`);const d=[];let b=0;for(let A=0;A<si;++A){const L=A/_,S=Math.exp(-L*L/2);d.push(S),A===0?b+=S:A<f&&(b+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-n;const x=this._sizeLods[s],N=3*x*(s>w-Di?s-w+Di:0),R=4*(this._cubeSize-x);Bs(e,N,R,3*x,2*x),l.setRenderTarget(e),l.render(u,Wr)}}function np(i){const t=[],e=[],n=[];let s=i;const r=i-Di+1+Qo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Di?l=Qo[a-i+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,d=1,b=new Float32Array(_*g*m),w=new Float32Array(f*g*m),x=new Float32Array(d*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,L=R>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];b.set(S,_*g*R),w.set(p,f*g*R);const M=[R,R,R,R,R,R];x.set(M,d*g*R)}const N=new Ve;N.setAttribute("position",new $e(b,_)),N.setAttribute("uv",new $e(w,f)),N.setAttribute("faceIndex",new $e(x,d)),t.push(N),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){const n=new li(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ip(i,t,e){const n=new Float32Array(si),s=new T(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function il(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function sl(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function sp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,h=l===Oi||l===Bi;if(c||h){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Za(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Za(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ap(i,t,e,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)t.remove(_[f])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let f=0,d=_.length;f<d;f++)t.update(_[f],i.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let w=0,x=b.length;w<x;w+=3){const N=b[w+0],R=b[w+1],A=b[w+2];p.push(N,R,R,A,A,N)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){const N=w+0,R=w+1,A=w+2;p.push(N,R,R,A,A,N)}}else return;const f=new(vc(p)?Ec:wc)(p,1);f.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,f)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function op(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*a,g),e.update(m,n,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let f=0;for(let d=0;d<g;d++)f+=m[d];e.update(f,n,1)}function u(p,m,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)c(p[d]/a,m[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=m[b]*_[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cp(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),f===!0&&(x=3);let N=o.attributes.position.count*x,R=1;N>t.maxTextureSize&&(R=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const A=new Float32Array(N*R*4*u),L=new Mc(A,N,R,u);L.type=Sn,L.needsUpdate=!0;const S=x*4;for(let C=0;C<u;C++){const k=d[C],O=b[C],W=w[C],q=N*R*4*C;for(let V=0;V<k.count;V++){const K=V*S;g===!0&&(s.fromBufferAttribute(k,V),A[q+K+0]=s.x,A[q+K+1]=s.y,A[q+K+2]=s.z,A[q+K+3]=0),_===!0&&(s.fromBufferAttribute(O,V),A[q+K+4]=s.x,A[q+K+5]=s.y,A[q+K+6]=s.z,A[q+K+7]=0),f===!0&&(s.fromBufferAttribute(W,V),A[q+K+8]=s.x,A[q+K+9]=s.y,A[q+K+10]=s.z,A[q+K+11]=W.itemSize===4?s.w:1)}}p={count:u,texture:L,size:new Ot(N,R)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function hp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Dc extends De{constructor(t,e,n,s,r,a,o,l,c,h=Ui){if(h!==Ui&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=oi),n===void 0&&h===ki&&(n=zi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lc=new De,rl=new Dc(1,1),Ic=new Mc,Uc=new Zh,Nc=new Rc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),hl=new Float32Array(4);function Xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _r(i,t){let e=ol[t];e===void 0&&(e=new Int32Array(t),ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),ye(e,n)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),ye(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),ye(e,n)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function Sp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=_c,r=rl):r=Lc,e.setTexture2D(t||r,s)}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uc,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nc,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ic,s)}function Pp(i){switch(i){case 5126:return dp;case 35664:return up;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return xp;case 35668:case 35672:return Mp;case 35669:case 35673:return yp;case 5125:return Sp;case 36294:return bp;case 36295:return wp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}function Dp(i,t){i.uniform1fv(this.addr,t)}function Lp(i,t){const e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ip(i,t){const e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Up(i,t){const e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Np(i,t){const e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fp(i,t){const e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Op(i,t){const e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function zp(i,t){i.uniform2iv(this.addr,t)}function kp(i,t){i.uniform3iv(this.addr,t)}function Hp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Wp(i,t){i.uniform3uiv(this.addr,t)}function Xp(i,t){i.uniform4uiv(this.addr,t)}function Yp(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Lc,r[a])}function qp(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Uc,r[a])}function $p(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nc,r[a])}function Zp(i,t,e){const n=this.cache,s=t.length,r=_r(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ic,r[a])}function jp(i){switch(i){case 5126:return Dp;case 35664:return Lp;case 35665:return Ip;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return kp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Vp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Zp}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pp(e.type)}}class Jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jp(e.type)}}class Qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function dl(i,t){i.seq.push(t),i.map[t.id]=t}function tm(i,t,e){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),a=Zr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dl(e,c===void 0?new Kp(o,i,t):new Jp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Qp(o),dl(e,u)),e=u}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);tm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ul(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const em=37297;let nm=0;function im(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fl=new It;function sm(i){Yt._getMatrix(fl,Yt.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case mr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+im(i.getShaderSource(t),a)}else return s}function rm(i,t){const e=sm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function am(i,t){let e;switch(t){case bh:e="Linear";break;case wh:e="Reinhard";break;case Eh:e="Cineon";break;case sc:e="ACESFilmic";break;case Ah:e="AgX";break;case Rh:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new T;function om(){Yt.getLuminanceCoefficients(zs);const i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function cm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function as(i){return i!==""}function ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(dm,fm)}const um=new Map;function fm(i,t){let e=Nt[t];if(e===void 0){const n=um.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(pm,mm)}function mm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vl(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function _m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case yh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function Mm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ym(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gm(e),c=_m(e),h=vm(e),u=xm(e),p=Mm(e),m=lm(e),g=cm(r),_=s.createProgram();let f,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),d.length>0&&(d+=`
`)):(f=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),d=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),om(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=ja(a),a=ml(a,e),a=gl(a,e),o=ja(o),o=ml(o,e),o=gl(o,e),a=_l(a),o=_l(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+f+a,x=b+d+o,N=ul(s,s.VERTEX_SHADER,w),R=ul(s,s.FRAGMENT_SHADER,x);s.attachShader(_,N),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(R).trim();let q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,R);else{const K=pl(s,N,"vertex"),G=pl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+K+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||W==="")&&(V=!1);V&&(C.diagnostics={runnable:q,programLog:k,vertexShader:{log:O,prefix:f},fragmentShader:{log:W,prefix:d}})}s.deleteShader(N),s.deleteShader(R),L=new nr(s,_),S=hm(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,em)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=R,this}let Sm=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function Em(i,t,e,n,s,r,a){const o=new Sc,l=new bm,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,M,C,k,O){const W=k.fog,q=O.geometry,V=S.isMeshStandardMaterial?k.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),G=K&&K.mapping===pr?K.image.height:null,it=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=ct!==void 0?ct.length:0;let Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let ie,Y,tt,_t;if(it){const Qt=cn[it];ie=Qt.vertexShader,Y=Qt.fragmentShader}else ie=S.vertexShader,Y=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const st=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,de=!!S.map,Wt=!!S.matcap,me=!!K,U=!!S.aoMap,We=!!S.lightMap,Ht=!!S.bumpMap,Gt=!!S.normalMap,wt=!!S.displacementMap,oe=!!S.emissiveMap,bt=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,F=S.clearcoat>0,$=S.dispersion>0,j=S.iridescence>0,X=S.sheen>0,vt=S.transmission>0,rt=v&&!!S.anisotropyMap,ht=F&&!!S.clearcoatMap,Xt=F&&!!S.clearcoatNormalMap,J=F&&!!S.clearcoatRoughnessMap,dt=j&&!!S.iridescenceMap,Et=j&&!!S.iridescenceThicknessMap,At=X&&!!S.sheenColorMap,ut=X&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,Ut=!!S.specularColorMap,re=!!S.specularIntensityMap,P=vt&&!!S.transmissionMap,nt=vt&&!!S.thicknessMap,H=!!S.gradientMap,Z=!!S.alphaMap,lt=S.alphaTest>0,at=!!S.alphaHash,Dt=!!S.extensions;let pe=Gn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(pe=i.toneMapping);const be={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:zt,batchingColor:zt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Gi,alphaToCoverage:!!S.alphaToCoverage,map:de,matcap:Wt,envMap:me,envMapMode:me&&K.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:We,bumpMap:Ht,normalMap:Gt,displacementMap:p&&wt,emissiveMap:oe,normalMapObjectSpace:Gt&&S.normalMapType===Lh,normalMapTangentSpace:Gt&&S.normalMapType===gc,metalnessMap:bt,roughnessMap:E,anisotropy:v,anisotropyMap:rt,clearcoat:F,clearcoatMap:ht,clearcoatNormalMap:Xt,clearcoatRoughnessMap:J,dispersion:$,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:At,sheenRoughnessMap:ut,specularMap:Vt,specularColorMap:Ut,specularIntensityMap:re,transmission:vt,transmissionMap:P,thicknessMap:nt,gradientMap:H,opaque:S.transparent===!1&&S.blending===Li&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:at,combine:S.combine,mapUv:de&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:We&&_(S.lightMap.channel),bumpMapUv:Ht&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:wt&&_(S.displacementMap.channel),emissiveMapUv:oe&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:Ut&&_(S.specularColorMap.channel),specularIntensityMapUv:re&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:nt&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Gt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(de||Z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===Te,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(b(M,S),w(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let C;if(M){const k=cn[M];C=od.clone(k.uniforms)}else C=S.uniforms;return C}function N(S,M){let C;for(let k=0,O=h.length;k<O;k++){const W=h[k];if(W.cacheKey===M){C=W,++C.usedTimes;break}}return C===void 0&&(C=new ym(i,M,S,r),h.push(C)),C}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:x,acquireProgram:N,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:L}}function Tm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Am(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ml(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,m,g,_,f){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=f),t++,d}function o(u,p,m,g,_,f){const d=a(u,p,m,g,_,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,p,m,g,_,f){const d=a(u,p,m,g,_,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,p){e.length>1&&e.sort(u||Am),n.length>1&&n.sort(p||xl),s.length>1&&s.sort(p||xl)}function h(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ml,i.set(n,[a])):s>=r.length?(a=new Ml,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ft};break;case"SpotLight":e={position:new T,direction:new T,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dm=0;function Lm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Im(i){const t=new Cm,e=Pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new he,a=new he;function o(c){let h=0,u=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,f=0,d=0,b=0,w=0,x=0,N=0,R=0,A=0;c.sort(Lm);for(let S=0,M=c.length;S<M;S++){const C=c[S],k=C.color,O=C.intensity,W=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*O,u+=k.g*O,p+=k.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],O);A++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,G=e.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=V,m++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(k).multiplyScalar(O),V.distance=W,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const K=C.shadow;if(C.map&&(n.spotLightMap[N]=C.map,N++,K.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=K.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,x++}_++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(k).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=V,f++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const K=C.shadow,G=e.get(C);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[d]=V,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==f||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==N||L.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=f,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=N,L.numLightProbes=A,n.version=Dm++)}function l(c,h){let u=0,p=0,m=0,g=0,_=0;const f=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const w=c[d];if(w.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),u++}else if(w.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(f),m++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function yl(i){const t=new Im(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Um(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new yl(i),t.set(s,[o])):r>=a.length?(o=new yl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Nm extends hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fm extends hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(i,t,e){let n=new co;const s=new Ot,r=new Ot,a=new ne,o=new Nm({depthPacking:Dh}),l=new Fm,c={},h=e.maxTextureSize,u={[Wn]:Te,[Te]:Wn,[yn]:yn},p=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let d=this.type;this.render=function(R,A,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Hn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=d!==Mn&&this.type===Mn,W=d===Mn&&this.type!==Mn;for(let q=0,V=R.length;q<V;q++){const K=R[q],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||O===!0||W===!0){const yt=this.type!==Mn?{minFilter:rn,magFilter:rn}:{};G.map!==null&&G.map.dispose(),G.map=new li(s.x,s.y,yt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ct=G.getViewportCount();for(let yt=0;yt<ct;yt++){const Bt=G.getViewport(yt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),k.viewport(a),G.updateMatrices(K,yt),n=G.getFrustum(),x(A,L,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&b(G,L),G.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(S,M,C)};function b(R,A){const L=t.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new li(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,L,p,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,L,m,_,null)}function w(R,A,L,S){let M=null;const C=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,O=A.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let q=W[O];q===void 0&&(q=M.clone(),W[O]=q,A.addEventListener("dispose",N)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Mn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=L}return M}function x(R,A,L,S,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Mn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const O=t.update(R),W=R.material;if(Array.isArray(W)){const q=O.groups;for(let V=0,K=q.length;V<K;V++){const G=q[V],it=W[G.materialIndex];if(it&&it.visible){const ct=w(R,it,S,M);R.onBeforeShadow(i,R,A,L,O,ct,G),i.renderBufferDirect(L,null,O,ct,R,G),R.onAfterShadow(i,R,A,L,O,ct,G)}}}else if(W.visible){const q=w(R,W,S,M);R.onBeforeShadow(i,R,A,L,O,q,null),i.renderBufferDirect(L,null,O,q,R,null),R.onAfterShadow(i,R,A,L,O,q,null)}}const k=R.children;for(let O=0,W=k.length;O<W;O++)x(k[O],A,L,S,M)}function N(R){R.target.removeEventListener("dispose",N);for(const L in c){const S=c[L],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const km={[da]:ua,[fa]:ga,[pa]:_a,[Fi]:ma,[ua]:da,[ga]:fa,[_a]:pa,[ma]:Fi};function Hm(i,t){function e(){let P=!1;const nt=new ne;let H=null;const Z=new ne(0,0,0,0);return{setMask:function(lt){H!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),H=lt)},setLocked:function(lt){P=lt},setClear:function(lt,at,Dt,pe,be){be===!0&&(lt*=pe,at*=pe,Dt*=pe),nt.set(lt,at,Dt,pe),Z.equals(nt)===!1&&(i.clearColor(lt,at,Dt,pe),Z.copy(nt))},reset:function(){P=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,nt=!1,H=null,Z=null,lt=null;return{setReversed:function(at){if(nt!==at){const Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const pe=lt;lt=null,this.setClear(pe)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(at){H!==at&&!P&&(i.depthMask(at),H=at)},setFunc:function(at){if(nt&&(at=km[at]),Z!==at){switch(at){case da:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=at}},setLocked:function(at){P=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){P=!1,H=null,Z=null,lt=null,nt=!1}}}function s(){let P=!1,nt=null,H=null,Z=null,lt=null,at=null,Dt=null,pe=null,be=null;return{setTest:function(Qt){P||(Qt?st(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Qt){nt!==Qt&&!P&&(i.stencilMask(Qt),nt=Qt)},setFunc:function(Qt,Ze,un){(H!==Qt||Z!==Ze||lt!==un)&&(i.stencilFunc(Qt,Ze,un),H=Qt,Z=Ze,lt=un)},setOp:function(Qt,Ze,un){(at!==Qt||Dt!==Ze||pe!==un)&&(i.stencilOp(Qt,Ze,un),at=Qt,Dt=Ze,pe=un)},setLocked:function(Qt){P=Qt},setClear:function(Qt){be!==Qt&&(i.clearStencil(Qt),be=Qt)},reset:function(){P=!1,nt=null,H=null,Z=null,lt=null,at=null,Dt=null,pe=null,be=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,m=[],g=null,_=!1,f=null,d=null,b=null,w=null,x=null,N=null,R=null,A=new Ft(0,0,0),L=0,S=!1,M=null,C=null,k=null,O=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=K>=2);let it=null,ct={};const yt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ie=new ne().fromArray(yt),Y=new ne().fromArray(Bt);function tt(P,nt,H,Z){const lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<H;Dt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}const _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(Fi),Ht(!1),Gt(Ro),st(i.CULL_FACE),U(Hn);function st(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Tt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Pt(P,nt){return u[P]!==nt?(i.bindFramebuffer(P,nt),u[P]=nt,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=nt),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function zt(P,nt){let H=m,Z=!1;if(P){H=p.get(nt),H===void 0&&(H=[],p.set(nt,H));const lt=P.textures;if(H.length!==lt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Dt=lt.length;at<Dt;at++)H[at]=i.COLOR_ATTACHMENT0+at;H.length=lt.length,Z=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Z=!0);Z&&i.drawBuffers(H)}function de(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Wt={[ii]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};Wt[ah]=i.MIN,Wt[oh]=i.MAX;const me={[lh]:i.ZERO,[ch]:i.ONE,[hh]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[uh]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[_h]:i.CONSTANT_COLOR,[vh]:i.ONE_MINUS_CONSTANT_COLOR,[xh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,nt,H,Z,lt,at,Dt,pe,be,Qt){if(P===Hn){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),P!==ih){if(P!==f||Qt!==S){if((d!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),d=ii,x=ii),Qt)switch(P){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,w=null,N=null,R=null,A.set(0,0,0),L=0,f=P,S=Qt}return}lt=lt||nt,at=at||H,Dt=Dt||Z,(nt!==d||lt!==x)&&(i.blendEquationSeparate(Wt[nt],Wt[lt]),d=nt,x=lt),(H!==b||Z!==w||at!==N||Dt!==R)&&(i.blendFuncSeparate(me[H],me[Z],me[at],me[Dt]),b=H,w=Z,N=at,R=Dt),(pe.equals(A)===!1||be!==L)&&(i.blendColor(pe.r,pe.g,pe.b,be),A.copy(pe),L=be),f=P,S=!1}function We(P,nt){P.side===yn?Tt(i.CULL_FACE):st(i.CULL_FACE);let H=P.side===Te;nt&&(H=!H),Ht(H),P.blending===Li&&P.transparent===!1?U(Hn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Gt(P){P!==eh?(st(i.CULL_FACE),P!==C&&(P===Ro?i.cullFace(i.BACK):P===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=P}function wt(P){P!==k&&(V&&i.lineWidth(P),k=P)}function oe(P,nt,H){P?(st(i.POLYGON_OFFSET_FILL),(O!==nt||W!==H)&&(i.polygonOffset(nt,H),O=nt,W=H)):Tt(i.POLYGON_OFFSET_FILL)}function bt(P){P?st(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+q-1),it!==P&&(i.activeTexture(P),it=P)}function v(P,nt,H){H===void 0&&(it===null?H=i.TEXTURE0+q-1:H=it);let Z=ct[H];Z===void 0&&(Z={type:void 0,texture:void 0},ct[H]=Z),(Z.type!==P||Z.texture!==nt)&&(it!==H&&(i.activeTexture(H),it=H),i.bindTexture(P,nt||_t[P]),Z.type=P,Z.texture=nt)}function F(){const P=ct[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(P){ie.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ie.copy(P))}function ut(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Vt(P,nt){let H=c.get(nt);H===void 0&&(H=new WeakMap,c.set(nt,H));let Z=H.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(nt,P.name),H.set(P,Z))}function Ut(P,nt){const Z=c.get(nt).get(P);l.get(nt)!==Z&&(i.uniformBlockBinding(nt,Z,P.__bindingPointIndex),l.set(nt,Z))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ct={},u={},p=new WeakMap,m=[],g=null,_=!1,f=null,d=null,b=null,w=null,x=null,N=null,R=null,A=new Ft(0,0,0),L=0,S=!1,M=null,C=null,k=null,O=null,W=null,ie.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:Tt,bindFramebuffer:Pt,drawBuffers:zt,useProgram:de,setBlending:U,setMaterial:We,setFlipSided:Ht,setCullFace:Gt,setLineWidth:wt,setPolygonOffset:oe,setScissorTest:bt,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:dt,texImage3D:Et,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:Xt,texStorage3D:J,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:At,viewport:ut,reset:re}}function Sl(i,t,e,n){const s=Gm(n);switch(e){case cc:return i*t;case dc:return i*t;case uc:return i*t*2;case fc:return i*t/s.components*s.byteLength;case ao:return i*t/s.components*s.byteLength;case pc:return i*t*2/s.components*s.byteLength;case oo:return i*t*2/s.components*s.byteLength;case hc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Ks:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case wa:return Math.max(i,16)*Math.max(t,8)/4;case ya:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case er:case Ga:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mc:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case En:case ac:return{byteLength:1,components:1};case hs:case oc:case ps:return{byteLength:2,components:1};case so:case ro:return{byteLength:2,components:4};case oi:case io:case Sn:return{byteLength:4,components:1};case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):cr("canvas")}function _(E,v,F){let $=1;const j=bt(E);if((j.width>F||j.height>F)&&($=F/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor($*j.width),vt=Math.floor($*j.height);u===void 0&&(u=g(X,vt));const rt=v?g(X,vt):u;return rt.width=X,rt.height=vt,rt.getContext("2d").drawImage(E,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+vt+")."),rt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function f(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,v,F,$,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),v===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){const vt=j?mr:Yt.getTransfer($);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=vt===te?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(E,v){let F;return E?v===null||v===oi||v===zi?F=i.DEPTH24_STENCIL8:v===Sn?F=i.DEPTH32F_STENCIL8:v===hs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===oi||v===zi?F=i.DEPTH_COMPONENT24:v===Sn?F=i.DEPTH_COMPONENT32F:v===hs&&(F=i.DEPTH_COMPONENT16),F}function N(E,v){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==rn&&E.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&h.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),M(v)}function L(E){const v=n.get(E);if(v.__webglInit===void 0)return;const F=E.source,$=p.get(F);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(E),Object.keys($).length===0&&p.delete(F)}n.remove(E)}function S(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const F=E.source,$=p.get(F);delete $[v.__cacheKey],a.memory.textures--}function M(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[$][j]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let $=0,j=F.length;$<j;$++){const X=n.get(F[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(E)}let C=0;function k(){C=0}function O(){const E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function W(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function q(E,v){const F=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function V(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function K(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){tt(F,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const it={[or]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},ct={[rn]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},yt={[Ih]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[_c]:i.LEQUAL,[Nh]:i.EQUAL,[Bh]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function Bt(E,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===yr||v.magFilter===xs||v.magFilter===ai||v.minFilter===dn||v.minFilter===yr||v.minFilter===xs||v.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,it[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ct[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==xs&&v.minFilter!==ai||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const $=v.source;let j=p.get($);j===void 0&&(j={},p.set($,j));const X=W(v);if(X!==E.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[X].usedTimes++;const vt=j[E.__cacheKey];vt!==void 0&&(j[E.__cacheKey].usedTimes--,vt.usedTimes===0&&S(v)),E.__cacheKey=X,E.__webglTexture=j[X].texture}return F}function Y(E,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const j=ie(E,v),X=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+F);const vt=n.get(X);if(X.version!==vt.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const rt=Yt.getPrimaries(Yt.workingColorSpace),ht=v.colorSpace===zn?null:Yt.getPrimaries(v.colorSpace),Xt=v.colorSpace===zn||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let J=_(v.image,!1,s.maxTextureSize);J=oe(v,J);const dt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type);let At=w(v.internalFormat,dt,Et,v.colorSpace,v.isVideoTexture);Bt($,v);let ut;const Vt=v.mipmaps,Ut=v.isVideoTexture!==!0,re=vt.__version===void 0||j===!0,P=X.dataReady,nt=N(v,J);if(v.isDepthTexture)At=x(v.format===ki,v.type),re&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,At,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,At,J.width,J.height,0,dt,Et,null));else if(v.isDataTexture)if(Vt.length>0){Ut&&re&&e.texStorage2D(i.TEXTURE_2D,nt,At,Vt[0].width,Vt[0].height);for(let H=0,Z=Vt.length;H<Z;H++)ut=Vt[H],Ut?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,ut.width,ut.height,dt,Et,ut.data):e.texImage2D(i.TEXTURE_2D,H,At,ut.width,ut.height,0,dt,Et,ut.data);v.generateMipmaps=!1}else Ut?(re&&e.texStorage2D(i.TEXTURE_2D,nt,At,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,dt,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,At,J.width,J.height,0,dt,Et,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,At,Vt[0].width,Vt[0].height,J.depth);for(let H=0,Z=Vt.length;H<Z;H++)if(ut=Vt[H],v.format!==nn)if(dt!==null)if(Ut){if(P)if(v.layerUpdates.size>0){const lt=Sl(ut.width,ut.height,v.format,v.type);for(const at of v.layerUpdates){const Dt=ut.data.subarray(at*lt/ut.data.BYTES_PER_ELEMENT,(at+1)*lt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,at,ut.width,ut.height,1,dt,Dt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ut.width,ut.height,J.depth,dt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,At,ut.width,ut.height,J.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ut.width,ut.height,J.depth,dt,Et,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,At,ut.width,ut.height,J.depth,0,dt,Et,ut.data)}else{Ut&&re&&e.texStorage2D(i.TEXTURE_2D,nt,At,Vt[0].width,Vt[0].height);for(let H=0,Z=Vt.length;H<Z;H++)ut=Vt[H],v.format!==nn?dt!==null?Ut?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,H,At,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,ut.width,ut.height,dt,Et,ut.data):e.texImage2D(i.TEXTURE_2D,H,At,ut.width,ut.height,0,dt,Et,ut.data)}else if(v.isDataArrayTexture)if(Ut){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,At,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){const H=Sl(J.width,J.height,v.format,v.type);for(const Z of v.layerUpdates){const lt=J.data.subarray(Z*H/J.data.BYTES_PER_ELEMENT,(Z+1)*H/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,dt,Et,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,dt,Et,J.data);else if(v.isData3DTexture)Ut?(re&&e.texStorage3D(i.TEXTURE_3D,nt,At,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,dt,Et,J.data);else if(v.isFramebufferTexture){if(re)if(Ut)e.texStorage2D(i.TEXTURE_2D,nt,At,J.width,J.height);else{let H=J.width,Z=J.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,At,H,Z,0,dt,Et,null),H>>=1,Z>>=1}}else if(Vt.length>0){if(Ut&&re){const H=bt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,nt,At,H.width,H.height)}for(let H=0,Z=Vt.length;H<Z;H++)ut=Vt[H],Ut?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,dt,Et,ut):e.texImage2D(i.TEXTURE_2D,H,At,dt,Et,ut);v.generateMipmaps=!1}else if(Ut){if(re){const H=bt(J);e.texStorage2D(i.TEXTURE_2D,nt,At,H.width,H.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,At,dt,Et,J);f(v)&&d($),vt.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function tt(E,v,F){if(v.image.length!==6)return;const $=ie(E,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const X=n.get(j);if(j.version!==X.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const vt=Yt.getPrimaries(Yt.workingColorSpace),rt=v.colorSpace===zn?null:Yt.getPrimaries(v.colorSpace),ht=v.colorSpace===zn||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Xt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Xt&&!J?dt[Z]=_(v.image[Z],!0,s.maxCubemapSize):dt[Z]=J?v.image[Z].image:v.image[Z],dt[Z]=oe(v,dt[Z]);const Et=dt[0],At=r.convert(v.format,v.colorSpace),ut=r.convert(v.type),Vt=w(v.internalFormat,At,ut,v.colorSpace),Ut=v.isVideoTexture!==!0,re=X.__version===void 0||$===!0,P=j.dataReady;let nt=N(v,Et);Bt(i.TEXTURE_CUBE_MAP,v);let H;if(Xt){Ut&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Vt,Et.width,Et.height);for(let Z=0;Z<6;Z++){H=dt[Z].mipmaps;for(let lt=0;lt<H.length;lt++){const at=H[lt];v.format!==nn?At!==null?Ut?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,at.width,at.height,At,ut,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,at.width,at.height,0,At,ut,at.data)}}}else{if(H=v.mipmaps,Ut&&re){H.length>0&&nt++;const Z=bt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,At,ut,dt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,dt[Z].width,dt[Z].height,0,At,ut,dt[Z].data);for(let lt=0;lt<H.length;lt++){const Dt=H[lt].image[Z].image;Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Dt.width,Dt.height,At,ut,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,Dt.width,Dt.height,0,At,ut,Dt.data)}}else{Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,ut,dt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,At,ut,dt[Z]);for(let lt=0;lt<H.length;lt++){const at=H[lt];Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,At,ut,at.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,At,ut,at.image[Z])}}}f(v)&&d(i.TEXTURE_CUBE_MAP),X.__version=j.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _t(E,v,F,$,j,X){const vt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),ht=w(F.internalFormat,vt,rt,F.colorSpace),Xt=n.get(v),J=n.get(F);if(J.__renderTarget=v,!Xt.__hasExternalTextures){const dt=Math.max(1,v.width>>X),Et=Math.max(1,v.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,X,ht,dt,Et,v.depth,0,vt,rt,null):e.texImage2D(j,X,ht,dt,Et,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,J.__webglTexture,0,Ht(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,J.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,X=x(v.stencilBuffer,j),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Ht(v);Gt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,E)}else{const $=v.textures;for(let j=0;j<$.length;j++){const X=$[j],vt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ht=w(X.internalFormat,vt,rt,X.colorSpace),Xt=Ht(v);F&&Gt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,ht,v.width,v.height):Gt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt,ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const j=$.__webglTexture,X=Ht(v);if(v.depthTexture.format===Ui)Gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===ki)Gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(E){const v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),st(v.__webglDepthbuffer[$],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),st(v.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(E,v,F){const $=n.get(E);v!==void 0&&_t($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Pt(E)}function de(E){const v=E.texture,F=n.get(E),$=n.get(v);E.addEventListener("dispose",A);const j=E.textures,X=E.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)F.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ht=j.length;rt<ht;rt++){const Xt=n.get(j[rt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Gt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){const ht=j[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const Xt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),dt=w(ht.internalFormat,Xt,J,ht.colorSpace,E.isXRRenderTarget===!0),Et=Ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),st(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)_t(F.__webglFramebuffer[rt][ht],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else _t(F.__webglFramebuffer[rt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);f(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ht=j.length;rt<ht;rt++){const Xt=j[rt],J=n.get(Xt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Bt(i.TEXTURE_2D,Xt),_t(F.__webglFramebuffer,E,Xt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),f(Xt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),Bt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)_t(F.__webglFramebuffer[ht],E,v,i.COLOR_ATTACHMENT0,rt,ht);else _t(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,rt,0);f(v)&&d(rt),e.unbindTexture()}E.depthBuffer&&Pt(E)}function Wt(E){const v=E.textures;for(let F=0,$=v.length;F<$;F++){const j=v[F];if(f(j)){const X=b(E),vt=n.get(j).__webglTexture;e.bindTexture(X,vt),d(X),e.unbindTexture()}}}const me=[],U=[];function We(E){if(E.samples>0){if(Gt(E)===!1){const v=E.textures,F=E.width,$=E.height;let j=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(E),rt=v.length>1;if(rt)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const Xt=n.get(v[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,j,i.NEAREST),l===!0&&(me.length=0,U.length=0,me.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(me.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const Xt=n.get(v[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ht(E){return Math.min(s.maxSamples,E.samples)}function Gt(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function oe(E,v){const F=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Gi&&F!==zn&&(Yt.getTransfer(F)===te?($!==nn||j!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function bt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Gt}function Wm(i,t){function e(n,s=zn){let r;const a=Yt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.BYTE;if(n===oc)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===ps)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===hc)return i.RGB;if(n===nn)return i.RGBA;if(n===dc)return i.LUMINANCE;if(n===uc)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===pc)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Ks||n===Js||n===Qs||n===tr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Sa||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===er||n===Ga||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===er)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===Wa||n===Xa||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Xm extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class Zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:qm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null;const _=new Zm,f=e.getContextAttributes();let d=null,b=null;const w=[],x=[],N=new Ot;let R=null;const A=new Fe;A.viewport=new ne;const L=new Fe;L.viewport=new ne;const S=[A,L],M=new Xm;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=w[Y];return tt===void 0&&(tt=new jr,w[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=w[Y];return tt===void 0&&(tt=new jr,w[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=w[Y];return tt===void 0&&(tt=new jr,w[Y]=tt),tt.getHandSpace()};function O(Y){const tt=x.indexOf(Y.inputSource);if(tt===-1)return;const _t=w[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<w.length;Y++){const tt=x[Y];tt!==null&&(x[Y]=null,w[Y].disconnect(tt))}C=null,k=null,_.reset(),t.setRenderTarget(d),m=null,p=null,u=null,s=null,b=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const tt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new li(m.framebufferWidth,m.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let tt=null,_t=null,st=null;f.depth&&(st=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=f.stencil?ki:Ui,_t=f.stencil?zi:oi);const Tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new li(p.textureWidth,p.textureHeight,{format:nn,type:En,depthTexture:new Dc(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let tt=0;tt<Y.removed.length;tt++){const _t=Y.removed[tt],st=x.indexOf(_t);st>=0&&(x[st]=null,w[st].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){const _t=Y.added[tt];let st=x.indexOf(_t);if(st===-1){for(let Pt=0;Pt<w.length;Pt++)if(Pt>=x.length){x.push(_t),st=Pt;break}else if(x[Pt]===null){x[Pt]=_t,st=Pt;break}if(st===-1)break}const Tt=w[st];Tt&&Tt.connect(_t)}}const V=new T,K=new T;function G(Y,tt,_t){V.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const st=V.distanceTo(K),Tt=tt.projectionMatrix.elements,Pt=_t.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),de=Tt[14]/(Tt[10]+1),Wt=(Tt[9]+1)/Tt[5],me=(Tt[9]-1)/Tt[5],U=(Tt[8]-1)/Tt[0],We=(Pt[8]+1)/Pt[0],Ht=zt*U,Gt=zt*We,wt=st/(-U+We),oe=wt*-U;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const bt=zt+wt,E=de+wt,v=Ht-oe,F=Gt+(st-oe),$=Wt*de/E*bt,j=me*de/E*bt;Y.projectionMatrix.makePerspective(v,F,$,j,bt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=L.near=A.near=tt,M.far=L.far=A.far=_t,(C!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,k=M.far),A.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const st=Y.parent,Tt=M.cameras;it(M,st);for(let Pt=0;Pt<Tt.length;Pt++)it(Tt[Pt],st);Tt.length===2?G(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),ct(Y,M,st)};function ct(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$a*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function Bt(Y,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let st=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Pt=0;Pt<_t.length;Pt++){const zt=_t[Pt];let de=null;if(m!==null)de=m.getViewport(zt);else{const me=u.getViewSubImage(p,zt);de=me.viewport,Pt===0&&(t.setRenderTargetTextures(b,me.colorTexture,p.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let Wt=S[Pt];Wt===void 0&&(Wt=new Fe,Wt.layers.enable(Pt),Wt.viewport=new ne,S[Pt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(de.x,de.y,de.width,de.height),Pt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Wt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=u.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let _t=0;_t<w.length;_t++){const st=x[_t],Tt=w[_t];st!==null&&Tt!==void 0&&Tt.update(st,tt,c||a)}yt&&yt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ie=new Cc;ie.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}}const Kn=new an,Km=new he;function Jm(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Tc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,b,w,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,x)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,b,w):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Te&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Te&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const b=t.get(d),w=b.envMap,x=b.envMapRotation;w&&(f.envMap.value=w,Kn.copy(x),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),f.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Kn)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,b,w){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*b,f.scale.value=w*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,b){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Te&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const b=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const x=w.program;n.uniformBlockBinding(b,x)}function c(b,w){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",f));const N=w.program;n.updateUBOMapping(b,N);const R=t.render.frame;r[b.id]!==R&&(p(b),r[b.id]=R)}function h(b){const w=u();b.__bindingPointIndex=w;const x=i.createBuffer(),N=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const w=s[b.id],x=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,A=x.length;R<A;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,M=L.length;S<M;S++){const C=L[S];if(m(C,R,S,N)===!0){const k=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let q=0;q<O.length;q++){const V=O[q],K=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+W,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,w,x,N){const R=b.value,A=w+"_"+x;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const L=N[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return N[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(b){const w=b.uniforms;let x=0;const N=16;for(let A=0,L=w.length;A<L;A++){const S=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,C=S.length;M<C;M++){const k=S[M],O=Array.isArray(k.value)?k.value:[k.value];for(let W=0,q=O.length;W<q;W++){const V=O[W],K=_(V),G=x%N,it=G%K.boundary,ct=G+it;x+=it,ct!==0&&N-ct<K.storage&&(x+=N-ct),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=K.storage}}}const R=x%N;return R>0&&(x+=N-R),b.__size=x,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function f(b){const w=b.target;w.removeEventListener("dispose",f);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class t0{constructor(t={}){const{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Gn,this.toneMappingExposure=1;const x=this;let N=!1,R=0,A=0,L=null,S=-1,M=null;const C=new ne,k=new ne;let O=null;const W=new Ft(0);let q=0,V=e.width,K=e.height,G=1,it=null,ct=null;const yt=new ne(0,0,V,K),Bt=new ne(0,0,V,K);let ie=!1;const Y=new co;let tt=!1,_t=!1;const st=new he,Tt=new he,Pt=new T,zt=new ne,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function me(){return L===null?G:1}let U=n;function We(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){const D="webgl2";if(U=We(D,y),U===null)throw We(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ht,Gt,wt,oe,bt,E,v,F,$,j,X,vt,rt,ht,Xt,J,dt,Et,At,ut,Vt,Ut,re,P;function nt(){Ht=new rp(U),Ht.init(),Ut=new Wm(U,Ht),Gt=new Qf(U,Ht,t,Ut),wt=new Hm(U,Ht),Gt.reverseDepthBuffer&&p&&wt.buffers.depth.setReversed(!0),oe=new lp(U),bt=new Tm,E=new Vm(U,Ht,wt,bt,Gt,Ut,oe),v=new ep(x),F=new sp(x),$=new pd(U),re=new Kf(U,$),j=new ap(U,$,oe,re),X=new hp(U,j,$,oe),At=new cp(U,Gt,E),J=new tp(bt),vt=new Em(x,v,F,Ht,Gt,re,J),rt=new Jm(x,bt),ht=new Rm,Xt=new Um(Ht),Et=new jf(x,v,F,wt,X,m,l),dt=new zm(x,X,Gt),P=new Qm(U,oe,Gt,wt),ut=new Jf(U,Ht,oe),Vt=new op(U,Ht,oe),oe.programs=vt.programs,x.capabilities=Gt,x.extensions=Ht,x.properties=bt,x.renderLists=ht,x.shadowMap=dt,x.state=wt,x.info=oe}nt();const H=new jm(x,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Ht.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ht.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(V,K,!1))},this.getSize=function(y){return y.set(V,K)},this.setSize=function(y,D,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,K=D,e.width=Math.floor(y*G),e.height=Math.floor(D*G),B===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(V*G,K*G).floor()},this.setDrawingBufferSize=function(y,D,B){V=y,K=D,G=B,e.width=Math.floor(y*B),e.height=Math.floor(D*B),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(yt)},this.setViewport=function(y,D,B,z){y.isVector4?yt.set(y.x,y.y,y.z,y.w):yt.set(y,D,B,z),wt.viewport(C.copy(yt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,D,B,z){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,D,B,z),wt.scissor(k.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){wt.setScissorTest(ie=y)},this.setOpaqueSort=function(y){it=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(y=!0,D=!0,B=!0){let z=0;if(y){let I=!1;if(L!==null){const Q=L.texture.format;I=Q===lo||Q===oo||Q===ao}if(I){const Q=L.texture.type,ot=Q===En||Q===oi||Q===hs||Q===zi||Q===so||Q===ro,pt=Et.getClearColor(),mt=Et.getClearAlpha(),Rt=pt.r,Lt=pt.g,gt=pt.b;ot?(g[0]=Rt,g[1]=Lt,g[2]=gt,g[3]=mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Rt,_[1]=Lt,_[2]=gt,_[3]=mt,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Xt.dispose(),bt.dispose(),v.dispose(),F.dispose(),X.dispose(),re.dispose(),P.dispose(),vt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Mo),H.removeEventListener("sessionend",yo),Xn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=oe.autoReset,D=dt.enabled,B=dt.autoUpdate,z=dt.needsUpdate,I=dt.type;nt(),oe.autoReset=y,dt.enabled=D,dt.autoUpdate=B,dt.needsUpdate=z,dt.type=I}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Dt(y){const D=y.target;D.removeEventListener("dispose",Dt),pe(D)}function pe(y){be(y),bt.remove(y)}function be(y){const D=bt.get(y).programs;D!==void 0&&(D.forEach(function(B){vt.releaseProgram(B)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,B,z,I,Q){D===null&&(D=de);const ot=I.isMesh&&I.matrixWorld.determinant()<0,pt=Jc(y,D,B,z,I);wt.setMaterial(z,ot);let mt=B.index,Rt=1;if(z.wireframe===!0){if(mt=j.getWireframeAttribute(B),mt===void 0)return;Rt=2}const Lt=B.drawRange,gt=B.attributes.position;let qt=Lt.start*Rt,ae=(Lt.start+Lt.count)*Rt;Q!==null&&(qt=Math.max(qt,Q.start*Rt),ae=Math.min(ae,(Q.start+Q.count)*Rt)),mt!==null?(qt=Math.max(qt,0),ae=Math.min(ae,mt.count)):gt!=null&&(qt=Math.max(qt,0),ae=Math.min(ae,gt.count));const le=ae-qt;if(le<0||le===1/0)return;re.setup(I,z,pt,B,mt);let Le,Zt=ut;if(mt!==null&&(Le=$.get(mt),Zt=Vt,Zt.setIndex(Le)),I.isMesh)z.wireframe===!0?(wt.setLineWidth(z.wireframeLinewidth*me()),Zt.setMode(U.LINES)):Zt.setMode(U.TRIANGLES);else if(I.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),wt.setLineWidth(xt*me()),I.isLineSegments?Zt.setMode(U.LINES):I.isLineLoop?Zt.setMode(U.LINE_LOOP):Zt.setMode(U.LINE_STRIP)}else I.isPoints?Zt.setMode(U.POINTS):I.isSprite&&Zt.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Zt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const xt=I._multiDrawStarts,fn=I._multiDrawCounts,jt=I._multiDrawCount,je=mt?$.get(mt).bytesPerElement:1,di=bt.get(z).currentProgram.getUniforms();for(let Be=0;Be<jt;Be++)di.setValue(U,"_gl_DrawID",Be),Zt.render(xt[Be]/je,fn[Be])}else if(I.isInstancedMesh)Zt.renderInstances(qt,le,I.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fn=Math.min(B.instanceCount,xt);Zt.renderInstances(qt,le,fn)}else Zt.render(qt,le)};function Qt(y,D,B){y.transparent===!0&&y.side===yn&&y.forceSinglePass===!1?(y.side=Te,y.needsUpdate=!0,vs(y,D,B),y.side=Wn,y.needsUpdate=!0,vs(y,D,B),y.side=yn):vs(y,D,B)}this.compile=function(y,D,B=null){B===null&&(B=y),d=Xt.get(B),d.init(D),w.push(d),B.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),y!==B&&y.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const z=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const pt=Q[ot];Qt(pt,B,I),z.add(pt)}else Qt(Q,B,I),z.add(Q)}),w.pop(),d=null,z},this.compileAsync=function(y,D,B=null){const z=this.compile(y,D,B);return new Promise(I=>{function Q(){if(z.forEach(function(ot){bt.get(ot).currentProgram.isReady()&&z.delete(ot)}),z.size===0){I(y);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ze=null;function un(y){Ze&&Ze(y)}function Mo(){Xn.stop()}function yo(){Xn.start()}const Xn=new Cc;Xn.setAnimationLoop(un),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(y){Ze=y,H.setAnimationLoop(y),y===null?Xn.stop():Xn.start()},H.addEventListener("sessionstart",Mo),H.addEventListener("sessionend",yo),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,D,L),d=Xt.get(y,w.length),d.init(D),w.push(d),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,tt=J.init(this.clippingPlanes,_t),f=ht.get(y,b.length),f.init(),b.push(f),H.enabled===!0&&H.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Mr(Q,D,-1/0,x.sortObjects)}Mr(y,D,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(it,ct),Wt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Wt&&Et.addToRenderList(f,y),this.info.render.frame++,tt===!0&&J.beginShadows();const B=d.state.shadowsArray;dt.render(B,y,D),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=f.opaque,I=f.transmissive;if(d.setupLights(),D.isArrayCamera){const Q=D.cameras;if(I.length>0)for(let ot=0,pt=Q.length;ot<pt;ot++){const mt=Q[ot];bo(z,I,y,mt)}Wt&&Et.render(y);for(let ot=0,pt=Q.length;ot<pt;ot++){const mt=Q[ot];So(f,y,mt,mt.viewport)}}else I.length>0&&bo(z,I,y,D),Wt&&Et.render(y),So(f,y,D);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(x,y,D),re.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(d=w[w.length-1],tt===!0&&J.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?f=b[b.length-1]:f=null};function Mr(y,D,B,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){z&&zt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);const ot=X.update(y),pt=y.material;pt.visible&&f.push(y,ot,pt,B,zt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const ot=X.update(y),pt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),zt.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),zt.copy(ot.boundingSphere.center)),zt.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(pt)){const mt=ot.groups;for(let Rt=0,Lt=mt.length;Rt<Lt;Rt++){const gt=mt[Rt],qt=pt[gt.materialIndex];qt&&qt.visible&&f.push(y,ot,qt,B,zt.z,gt)}}else pt.visible&&f.push(y,ot,pt,B,zt.z,null)}}const Q=y.children;for(let ot=0,pt=Q.length;ot<pt;ot++)Mr(Q[ot],D,B,z)}function So(y,D,B,z){const I=y.opaque,Q=y.transmissive,ot=y.transparent;d.setupLightsView(B),tt===!0&&J.setGlobalState(x.clippingPlanes,B),z&&wt.viewport(C.copy(z)),I.length>0&&_s(I,D,B),Q.length>0&&_s(Q,D,B),ot.length>0&&_s(ot,D,B),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function bo(y,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new li(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?ps:En,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[z.id],ot=z.viewport||C;Q.setSize(ot.z,ot.w);const pt=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(W),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&Et.render(B);const mt=x.toneMapping;x.toneMapping=Gn;const Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),tt===!0&&J.setGlobalState(x.clippingPlanes,z),_s(y,B,z),E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let gt=0,qt=D.length;gt<qt;gt++){const ae=D[gt],le=ae.object,Le=ae.geometry,Zt=ae.material,xt=ae.group;if(Zt.side===yn&&le.layers.test(z.layers)){const fn=Zt.side;Zt.side=Te,Zt.needsUpdate=!0,wo(le,B,z,Le,Zt,xt),Zt.side=fn,Zt.needsUpdate=!0,Lt=!0}}Lt===!0&&(E.updateMultisampleRenderTarget(Q),E.updateRenderTargetMipmap(Q))}x.setRenderTarget(pt),x.setClearColor(W,q),Rt!==void 0&&(z.viewport=Rt),x.toneMapping=mt}function _s(y,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let I=0,Q=y.length;I<Q;I++){const ot=y[I],pt=ot.object,mt=ot.geometry,Rt=z===null?ot.material:z,Lt=ot.group;pt.layers.test(B.layers)&&wo(pt,D,B,mt,Rt,Lt)}}function wo(y,D,B,z,I,Q){y.onBeforeRender(x,D,B,z,I,Q),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(x,D,B,z,y,Q),I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=Te,I.needsUpdate=!0,x.renderBufferDirect(B,D,z,I,y,Q),I.side=Wn,I.needsUpdate=!0,x.renderBufferDirect(B,D,z,I,y,Q),I.side=yn):x.renderBufferDirect(B,D,z,I,y,Q),y.onAfterRender(x,D,B,z,I,Q)}function vs(y,D,B){D.isScene!==!0&&(D=de);const z=bt.get(y),I=d.state.lights,Q=d.state.shadowsArray,ot=I.state.version,pt=vt.getParameters(y,I.state,Q,D,B),mt=vt.getProgramCacheKey(pt);let Rt=z.programs;z.environment=y.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(y.isMeshStandardMaterial?F:v).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Dt),Rt=new Map,z.programs=Rt);let Lt=Rt.get(mt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===ot)return To(y,pt),Lt}else pt.uniforms=vt.getUniforms(y),y.onBeforeCompile(pt,x),Lt=vt.acquireProgram(pt,mt),Rt.set(mt,Lt),z.uniforms=pt.uniforms;const gt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(gt.clippingPlanes=J.uniform),To(y,pt),z.needsLights=th(y),z.lightsStateVersion=ot,z.needsLights&&(gt.ambientLightColor.value=I.state.ambient,gt.lightProbe.value=I.state.probe,gt.directionalLights.value=I.state.directional,gt.directionalLightShadows.value=I.state.directionalShadow,gt.spotLights.value=I.state.spot,gt.spotLightShadows.value=I.state.spotShadow,gt.rectAreaLights.value=I.state.rectArea,gt.ltc_1.value=I.state.rectAreaLTC1,gt.ltc_2.value=I.state.rectAreaLTC2,gt.pointLights.value=I.state.point,gt.pointLightShadows.value=I.state.pointShadow,gt.hemisphereLights.value=I.state.hemi,gt.directionalShadowMap.value=I.state.directionalShadowMap,gt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,gt.spotShadowMap.value=I.state.spotShadowMap,gt.spotLightMatrix.value=I.state.spotLightMatrix,gt.spotLightMap.value=I.state.spotLightMap,gt.pointShadowMap.value=I.state.pointShadowMap,gt.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function Eo(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=nr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function To(y,D){const B=bt.get(y);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Jc(y,D,B,z,I){D.isScene!==!0&&(D=de),E.resetTextureUnits();const Q=D.fog,ot=z.isMeshStandardMaterial?D.environment:null,pt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gi,mt=(z.isMeshStandardMaterial?F:v).get(z.envMap||ot),Rt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),gt=!!B.morphAttributes.position,qt=!!B.morphAttributes.normal,ae=!!B.morphAttributes.color;let le=Gn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(le=x.toneMapping);const Le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=Le!==void 0?Le.length:0,xt=bt.get(z),fn=d.state.lights;if(tt===!0&&(_t===!0||y!==M)){const Xe=y===M&&z.id===S;J.setState(z,y,Xe)}let jt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==fn.state.version||xt.outputColorSpace!==pt||I.isBatchedMesh&&xt.batching===!1||!I.isBatchedMesh&&xt.batching===!0||I.isBatchedMesh&&xt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&xt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&xt.instancing===!1||!I.isInstancedMesh&&xt.instancing===!0||I.isSkinnedMesh&&xt.skinning===!1||!I.isSkinnedMesh&&xt.skinning===!0||I.isInstancedMesh&&xt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&xt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&xt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&xt.instancingMorph===!1&&I.morphTexture!==null||xt.envMap!==mt||z.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Rt||xt.vertexTangents!==Lt||xt.morphTargets!==gt||xt.morphNormals!==qt||xt.morphColors!==ae||xt.toneMapping!==le||xt.morphTargetsCount!==Zt)&&(jt=!0):(jt=!0,xt.__version=z.version);let je=xt.currentProgram;jt===!0&&(je=vs(z,D,I));let di=!1,Be=!1,Yi=!1;const ce=je.getUniforms(),on=xt.uniforms;if(wt.useProgram(je.program)&&(di=!0,Be=!0,Yi=!0),z.id!==S&&(S=z.id,Be=!0),di||M!==y){wt.buffers.depth.getReversed()?(st.copy(y.projectionMatrix),Vh(st),Wh(st),ce.setValue(U,"projectionMatrix",st)):ce.setValue(U,"projectionMatrix",y.projectionMatrix),ce.setValue(U,"viewMatrix",y.matrixWorldInverse);const An=ce.map.cameraPosition;An!==void 0&&An.setValue(U,Pt.setFromMatrixPosition(y.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Be=!0,Yi=!0)}if(I.isSkinnedMesh){ce.setOptional(U,I,"bindMatrix"),ce.setOptional(U,I,"bindMatrixInverse");const Xe=I.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ce.setValue(U,"boneTexture",Xe.boneTexture,E))}I.isBatchedMesh&&(ce.setOptional(U,I,"batchingTexture"),ce.setValue(U,"batchingTexture",I._matricesTexture,E),ce.setOptional(U,I,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",I._indirectTexture,E),ce.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",I._colorsTexture,E));const qi=B.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&At.update(I,B,je),(Be||xt.receiveShadow!==I.receiveShadow)&&(xt.receiveShadow=I.receiveShadow,ce.setValue(U,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(on.envMap.value=mt,on.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(on.envMapIntensity.value=D.environmentIntensity),Be&&(ce.setValue(U,"toneMappingExposure",x.toneMappingExposure),xt.needsLights&&Qc(on,Yi),Q&&z.fog===!0&&rt.refreshFogUniforms(on,Q),rt.refreshMaterialUniforms(on,z,G,K,d.state.transmissionRenderTarget[y.id]),nr.upload(U,Eo(xt),on,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(nr.upload(U,Eo(xt),on,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(U,"center",I.center),ce.setValue(U,"modelViewMatrix",I.modelViewMatrix),ce.setValue(U,"normalMatrix",I.normalMatrix),ce.setValue(U,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Xe=z.uniformsGroups;for(let An=0,Rn=Xe.length;An<Rn;An++){const Ao=Xe[An];P.update(Ao,je),P.bind(Ao,je)}}return je}function Qc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function th(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,D,B){bt.get(y.texture).__webglTexture=D,bt.get(y.depthTexture).__webglTexture=B;const z=bt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const B=bt.get(y);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,B=0){L=y,R=D,A=B;let z=!0,I=null,Q=!1,ot=!1;if(y){const mt=bt.get(y);if(mt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(mt.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(mt.__hasExternalTextures)E.rebindTextures(y,bt.get(y.texture).__webglTexture,bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const gt=y.depthTexture;if(mt.__boundDepthTexture!==gt){if(gt!==null&&bt.has(gt)&&(y.width!==gt.image.width||y.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ot=!0);const Lt=bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?I=Lt[D][B]:I=Lt[D],Q=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?I=bt.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?I=Lt[B]:I=Lt,C.copy(y.viewport),k.copy(y.scissor),O=y.scissorTest}else C.copy(yt).multiplyScalar(G).floor(),k.copy(Bt).multiplyScalar(G).floor(),O=ie;if(wt.bindFramebuffer(U.FRAMEBUFFER,I)&&z&&wt.drawBuffers(y,I),wt.viewport(C),wt.scissor(k),wt.setScissorTest(O),Q){const mt=bt.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,B)}else if(ot){const mt=bt.get(y.texture),Rt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,Rt)}S=-1},this.readRenderTargetPixels=function(y,D,B,z,I,Q,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){wt.bindFramebuffer(U.FRAMEBUFFER,pt);try{const mt=y.texture,Rt=mt.format,Lt=mt.type;if(!Gt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&B>=0&&B<=y.height-I&&U.readPixels(D,B,z,I,Ut.convert(Rt),Ut.convert(Lt),Q)}finally{const mt=L!==null?bt.get(L).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(y,D,B,z,I,Q,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){const mt=y.texture,Rt=mt.format,Lt=mt.type;if(!Gt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-z&&B>=0&&B<=y.height-I){wt.bindFramebuffer(U.FRAMEBUFFER,pt);const gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(D,B,z,I,Ut.convert(Rt),Ut.convert(Lt),0);const qt=L!==null?bt.get(L).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,qt);const ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gh(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(gt),U.deleteSync(ae),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,B=0){y.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),I=Math.floor(y.image.width*z),Q=Math.floor(y.image.height*z),ot=D!==null?D.x:0,pt=D!==null?D.y:0;E.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,ot,pt,I,Q),wt.unbindTexture()},this.copyTextureToTexture=function(y,D,B=null,z=null,I=0){y.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],D=arguments[2],I=arguments[3]||0,B=null);let Q,ot,pt,mt,Rt,Lt,gt,qt,ae;const le=y.isCompressedTexture?y.mipmaps[I]:y.image;B!==null?(Q=B.max.x-B.min.x,ot=B.max.y-B.min.y,pt=B.isBox3?B.max.z-B.min.z:1,mt=B.min.x,Rt=B.min.y,Lt=B.isBox3?B.min.z:0):(Q=le.width,ot=le.height,pt=le.depth||1,mt=0,Rt=0,Lt=0),z!==null?(gt=z.x,qt=z.y,ae=z.z):(gt=0,qt=0,ae=0);const Le=Ut.convert(D.format),Zt=Ut.convert(D.type);let xt;D.isData3DTexture?(E.setTexture3D(D,0),xt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),xt=U.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const fn=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),je=U.getParameter(U.UNPACK_SKIP_PIXELS),di=U.getParameter(U.UNPACK_SKIP_ROWS),Be=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt);const Yi=y.isDataArrayTexture||y.isData3DTexture,ce=D.isDataArrayTexture||D.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const on=bt.get(y),qi=bt.get(D),Xe=bt.get(on.__renderTarget),An=bt.get(qi.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,Xe.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Rn=0;Rn<pt;Rn++)Yi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(y).__webglTexture,I,Lt+Rn),y.isDepthTexture?(ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.get(D).__webglTexture,I,ae+Rn),U.blitFramebuffer(mt,Rt,Q,ot,gt,qt,Q,ot,U.DEPTH_BUFFER_BIT,U.NEAREST)):ce?U.copyTexSubImage3D(xt,I,gt,qt,ae+Rn,mt,Rt,Q,ot):U.copyTexSubImage2D(xt,I,gt,qt,ae+Rn,mt,Rt,Q,ot);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ce?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(xt,I,gt,qt,ae,Q,ot,pt,Le,Zt,le.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,I,gt,qt,ae,Q,ot,pt,Le,le.data):U.texSubImage3D(xt,I,gt,qt,ae,Q,ot,pt,Le,Zt,le):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,gt,qt,Q,ot,Le,Zt,le.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,gt,qt,le.width,le.height,Le,le.data):U.texSubImage2D(U.TEXTURE_2D,I,gt,qt,Q,ot,Le,Zt,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,fn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,di),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be),I===0&&D.generateMipmaps&&U.generateMipmap(xt),wt.unbindTexture()},this.copyTextureToTexture3D=function(y,D,B=null,z=null,I=0){return y.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],D=arguments[3],I=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,B,z,I)},this.initRenderTarget=function(y){bt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),wt.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,wt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class uo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new uo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fo extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class e0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new T;class hr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kn extends hi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ti;const Ji=new T,Ai=new T,Ri=new T,Ci=new Ot,Qi=new Ot,Fc=new he,ks=new T,ts=new T,Hs=new T,bl=new Ot,Kr=new Ot,wl=new Ot;class po extends ve{constructor(t=new kn){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new e0(e,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new hr(n,3,0,!1)),Ti.setAttribute("uv",new hr(n,2,3,!1))}this.geometry=Ti,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Fc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ri.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Gs(ks.set(-.5,-.5,0),Ri,a,Ai,s,r),Gs(ts.set(.5,-.5,0),Ri,a,Ai,s,r),Gs(Hs.set(.5,.5,0),Ri,a,Ai,s,r),bl.set(0,0),Kr.set(1,0),wl.set(1,1);let o=t.ray.intersectTriangle(ks,ts,Hs,!1,Ji);if(o===null&&(Gs(ts.set(-.5,.5,0),Ri,a,Ai,s,r),Kr.set(0,1),o=t.ray.intersectTriangle(ks,Hs,ts,!1,Ji),o===null))return;const l=t.ray.origin.distanceTo(Ji);l<t.near||l>t.far||e.push({distance:l,point:Ji.clone(),uv:qe.getInterpolation(Ji,ks,ts,Hs,bl,Kr,wl,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gs(i,t,e,n,s,r){Ci.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qi.x=r*Ci.x-s*Ci.y,Qi.y=s*Ci.x+r*Ci.y):Qi.copy(Ci),i.copy(t),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(Fc)}class Oc extends hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dr=new T,ur=new T,El=new he,es=new yc,Vs=new gr,Jr=new T,Tl=new T;class n0 extends ve{constructor(t=new Ve,e=new Oc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)dr.fromBufferAttribute(e,s-1),ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=dr.distanceTo(ur);t.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;El.copy(s).invert(),es.copy(t.ray).applyMatrix4(El);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,f=g-1;_<f;_+=c){const d=h.getX(_),b=h.getX(_+1),w=Ws(this,t,es,l,d,b);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(g-1),f=h.getX(m),d=Ws(this,t,es,l,_,f);d&&e.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=m,f=g-1;_<f;_+=c){const d=Ws(this,t,es,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Ws(this,t,es,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ws(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(dr.fromBufferAttribute(a,s),ur.fromBufferAttribute(a,r),e.distanceSqToSegment(dr,ur,Jr,Tl)>n)return;Jr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jr);if(!(l<t.near||l>t.far))return{distance:l,point:Tl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class mo extends De{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vr extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],m=[];let g=0;const _=[],f=n/2;let d=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(m,2));function b(){const x=new T,N=new T;let R=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,C=M*(e-t)+t;for(let k=0;k<=s;k++){const O=k/s,W=O*l+o,q=Math.sin(W),V=Math.cos(W);N.x=C*q,N.y=-M*n+f,N.z=C*V,u.push(N.x,N.y,N.z),x.set(q,A,V).normalize(),p.push(x.x,x.y,x.z),m.push(O,1-M),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=_[S][L],C=_[S+1][L],k=_[S+1][L+1],O=_[S][L+1];(t>0||S!==0)&&(h.push(M,C,O),R+=3),(e>0||S!==r-1)&&(h.push(C,k,O),R+=3)}c.addGroup(d,R,0),d+=R}function w(x){const N=g,R=new Ot,A=new T;let L=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,f*M,0),p.push(0,M,0),m.push(.5,.5),g++;const C=g;for(let k=0;k<=s;k++){const W=k/s*l+o,q=Math.cos(W),V=Math.sin(W);A.x=S*V,A.y=f*M,A.z=S*q,u.push(A.x,A.y,A.z),p.push(0,M,0),R.x=q*.5+.5,R.y=V*.5*M+.5,m.push(R.x,R.y),g++}for(let k=0;k<s;k++){const O=N+k,W=C+k;x===!0?h.push(W,W+1,O):h.push(W+1,W,O),L+=3}c.addGroup(d,L,x===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,p=new T,m=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const b=[],w=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let N=0;N<=e;N++){const R=N/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+w*o),u.y=t*Math.cos(a+w*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),f.push(R+x,1-w),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const w=h[d][b+1],x=h[d][b],N=h[d+1][b],R=h[d+1][b+1];(d!==0||a>0)&&m.push(w,x,R),(d!==n-1||l<Math.PI)&&m.push(x,N,R)}this.setIndex(m),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xe extends hi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class go extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bc extends go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qr=new he,Al=new T,Rl=new T;class zc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cl=new he,ns=new T,ta=new T;class i0 extends zc{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(ns),ta.copy(n.position),ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ta),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class _o extends go{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class s0 extends zc{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kc extends go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new s0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);class r0 extends fo{constructor(){super();const t=new ue;t.deleteAttribute("uv");const e=new xe({side:Te}),n=new xe,s=new _o(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new kt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new kt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new kt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new kt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new kt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new kt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const p=new kt(t,Pi(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const m=new kt(t,Pi(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new kt(t,Pi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new kt(t,Pi(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const f=new kt(t,Pi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new kt(t,Pi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Pi(i){const t=new Wi;return t.color.setScalar(i),t}const sn=1.8,Hc=1.3,us=.32;class xr{static nextId=1;id=xr.nextId++;name;team;position=new T;velocity=new T;yaw=0;pitch=0;health=100;maxHealth=100;alive=!0;crouching=!1;grounded=!0;spawnProtection=0;lastDamageTime=-999;regenDelay=5;regenRate=28;damageScale=1;stats={kills:0,deaths:0,score:0,shots:0,hits:0,headshots:0};constructor(t,e){this.name=t,this.team=e}height=sn;eyeHeight(){return this.height-.13}eyePosition(t){return t.set(this.position.x,this.position.y+this.eyeHeight(),this.position.z)}chestPosition(t){return t.set(this.position.x,this.position.y+this.height*.7,this.position.z)}forward(t){const e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}regen(t,e){!this.alive||this.health>=this.maxHealth||e-this.lastDamageTime>this.regenDelay&&(this.health=Math.min(this.maxHealth,this.health+this.regenRate*t))}onDamaged(t,e,n,s){}onKilled(t){}rayHit(t,e,n){if(!this.alive)return null;const s=this.position,r=this.height;let a=null;const o=s.y+r-.15,l=a0(t,e,s.x,o,s.z,.15);l!==null&&l<=n&&(a={t:l,zone:"head"});const c=Pl(t,e,s.x,s.z,.27,s.y+r*.5,s.y+r-.29);c!==null&&c<=n&&(!a||c<a.t)&&(a={t:c,zone:"torso"});const h=Pl(t,e,s.x,s.z,.22,s.y,s.y+r*.5);return h!==null&&h<=n&&(!a||h<a.t)&&(a={t:h,zone:"limb"}),a}}function a0(i,t,e,n,s,r){const a=i.x-e,o=i.y-n,l=i.z-s,c=a*t.x+o*t.y+l*t.z,h=a*a+o*o+l*l-r*r,u=c*c-h;if(u<0)return null;const p=-c-Math.sqrt(u);return p>=0?p:null}function Pl(i,t,e,n,s,r,a){const o=i.x-e,l=i.z-n,c=t.x*t.x+t.z*t.z;let h=null;if(c>1e-8){const u=o*t.x+l*t.z,p=o*o+l*l-s*s,m=u*u-c*p;if(m>=0){const g=(-u-Math.sqrt(m))/c;if(g>=0){const _=i.y+t.y*g;_>=r&&_<=a&&(h=g)}}}if(Math.abs(t.y)>1e-6)for(const u of[r,a]){const p=(u-i.y)/t.y;if(p<0||h!==null&&p>=h)continue;const m=o+t.x*p,g=l+t.z*p;m*m+g*g<=s*s&&(h=p)}return h}const Mt={metal:new xe({color:4540493,roughness:.42,metalness:.55}),polymer:new xe({color:4868932,roughness:.75,metalness:.05}),tan:new xe({color:8220242,roughness:.85}),wood:new xe({color:5913120,roughness:.7}),glass:new xe({color:8956620,roughness:.05,metalness:.2,transparent:!0,opacity:.18,depthWrite:!1}),dot:new Wi({color:16722474})};function Ct(i,t,e,n,s,r,a,o,l=0){const c=new kt(new ue(t,e,n),o);return c.position.set(s,r,a),c.rotation.x=l,i.add(c),c}function ln(i,t,e,n,s,r,a){const o=new kt(new vr(t,t,e,10),a);return o.rotation.x=Math.PI/2,o.position.set(n,s,r),i.add(o),o}function Gc(i,t={}){const e=new se,n=new ve,s=new se;let r=null,a=.08,o=-.3;switch(i){case"kestrel":{Ct(e,.065,.085,.42,0,.03,-.08,Mt.metal),Ct(e,.075,.075,.24,0,.03,-.39,Mt.tan),ln(e,.012,.22,0,.035,-.6,Mt.metal),ln(e,.018,.06,0,.035,-.72,Mt.metal),Ct(e,.05,.09,.26,0,0,.25,Mt.tan),Ct(e,.055,.12,.05,0,-.04,.39,Mt.polymer),Ct(e,.04,.11,.05,0,-.06,.04,Mt.polymer,.25),Ct(e,.02,.012,.36,0,.078,-.16,Mt.metal),t.redDot!==!1&&(Ct(e,.036,.018,.07,0,.088,-.05,Mt.metal),Ct(e,.042,.005,.05,0,.112+.02,-.06,Mt.metal),Ct(e,.005,.044,.05,-.0185,.112,-.06,Mt.metal),Ct(e,.005,.044,.05,.0185,.112,-.06,Mt.metal),Ct(e,.042,.005,.05,0,.112-.02,-.06,Mt.metal),Ct(e,.032,.035,.002,0,.112,-.084,Mt.glass),Ct(e,.0025,.0025,.001,0,.112,-.086,Mt.dot),a=.112),s.position.set(0,-.02,-.12),Ct(s,.035,.16,.07,0,-.08,0,Mt.polymer,.18),n.position.set(0,.035,-.76),o=-.38;break}case"harrow":{Ct(e,.06,.08,.3,0,.03,-.06,Mt.metal),Ct(e,.064,.065,.14,0,.025,-.26,Mt.polymer),ln(e,.012,.12,0,.035,-.38,Mt.metal),Ct(e,.02,.06,.22,0,0,.2,Mt.metal),Ct(e,.035,.08,.035,0,-.01,.31,Mt.polymer),Ct(e,.038,.1,.045,0,-.055,.04,Mt.polymer,.25),Ct(e,.006,.03,.006,0,.082,-.3,Mt.metal),Ct(e,.03,.02,.02,0,.078,.05,Mt.metal),a=.088,s.position.set(0,-.01,-.1),Ct(s,.032,.2,.045,0,-.1,0,Mt.metal),n.position.set(0,.035,-.45),o=-.24;break}case"longreach":{Ct(e,.07,.08,.5,0,.03,-.1,Mt.metal),ln(e,.014,.55,0,.04,-.62,Mt.metal),ln(e,.022,.08,0,.04,-.9,Mt.metal),Ct(e,.06,.1,.32,0,-.005,.27,Mt.polymer),Ct(e,.07,.15,.06,0,-.03,.42,Mt.polymer),Ct(e,.045,.11,.05,0,-.06,.04,Mt.polymer,.25),Ct(e,.07,.06,.3,0,0,-.34,Mt.polymer),ln(e,.022,.3,0,.11,-.08,Mt.metal),ln(e,.03,.06,0,.11,-.24,Mt.metal),ln(e,.028,.05,0,.11,.08,Mt.metal),Ct(e,.02,.04,.02,0,.08,-.15,Mt.metal),Ct(e,.02,.04,.02,0,.08,0,Mt.metal),a=.11,r=new se,r.position.set(.045,.04,.05),Ct(r,.06,.012,.012,.03,0,0,Mt.metal),e.add(r),s.position.set(0,-.015,-.06),Ct(s,.045,.06,.09,0,-.03,0,Mt.metal),n.position.set(0,.04,-.95),o=-.36;break}case"brute":{Ct(e,.065,.08,.34,0,.03,-.06,Mt.metal),ln(e,.016,.46,0,.045,-.44,Mt.metal),ln(e,.013,.36,0,.005,-.38,Mt.metal),Ct(e,.055,.1,.3,0,-.01,.26,Mt.wood),Ct(e,.06,.14,.05,0,-.04,.4,Mt.wood),Ct(e,.04,.1,.05,0,-.06,.04,Mt.wood,.25),Ct(e,.006,.006,.006,0,.065,-.66,Mt.dot),a=.07,r=new se,r.position.set(0,0,-.36),Ct(r,.06,.05,.16,0,0,0,Mt.wood),e.add(r),s.position.set(0,0,-.08),Ct(s,.02,.03,.04,0,-.03,0,Mt.metal),n.position.set(0,.045,-.68),o=-.36;break}case"p9":{r=new se,r.position.set(0,.04,-.07),Ct(r,.034,.034,.19,0,0,0,Mt.metal),Ct(r,.006,.01,.006,0,.022,-.085,Mt.metal),Ct(r,.02,.01,.006,0,.022,.085,Mt.metal),e.add(r),Ct(e,.031,.03,.16,0,.012,-.075,Mt.polymer),Ct(e,.032,.11,.05,0,-.045,0,Mt.polymer,.22),a=.067,s.position.set(0,-.03,.005),Ct(s,.026,.1,.04,0,-.04,0,Mt.metal,.22),n.position.set(0,.04,-.17),o=0;break}}return e.add(s),e.add(n),e.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),{root:e,muzzle:n,mag:s,action:r,sightY:a,supportZ:o}}function Ka(i){i.root.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}const Pe=Math.PI/180,Jt=(i,t,e)=>i<t?t:i>e?e:i,o0=(i,t,e)=>i+(t-i)*e,fe=(i,t,e,n)=>o0(i,t,1-Math.exp(-e*n)),ft=(i,t)=>i+Math.random()*(t-i),Dl=(i,t)=>Math.floor(ft(i,t+1));function ea(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function Vc(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function l0(i,t){return 2*Math.atan(Math.tan(i*Pe/2)/t)/Pe}function c0(i,t){return 2*Math.atan(Math.tan(i*Pe/2)/t)/Pe}const Wc={uniform:7039818,vest:5132854,helmet:5593151,accent:3832789},Ja={uniform:4867908,vest:3091755,helmet:3815478,accent:12597547},He={torso:new ue(.44,.55,.26),vest:new ue(.48,.42,.32),pelvis:new ue(.4,.18,.24),head:new ue(.2,.24,.22),helmet:new ue(.27,.13,.29),goggles:new ue(.2,.05,.03),leg:new ue(.16,.46,.17),shin:new ue(.14,.46,.15),boot:new ue(.15,.1,.26),arm:new ue(.12,.3,.12),forearm:new ue(.1,.3,.1),band:new ue(.13,.06,.13),pack:new ue(.34,.36,.14)},h0=new xe({color:10254942,roughness:.8}),d0=new xe({color:2761758,roughness:.9}),u0=new xe({color:1118481,roughness:.2,metalness:.6}),Ll=new Map;function f0(i){let t=Ll.get(i);return t||(t={uniform:new xe({color:i.uniform,roughness:.9}),vest:new xe({color:i.vest,roughness:.85}),helmet:new xe({color:i.helmet,roughness:.7}),accent:new xe({color:i.accent,roughness:.6,emissive:i.accent,emissiveIntensity:.25})},Ll.set(i,t)),t}function Ge(i,t,e,n,s,r){const a=new kt(i,t);return a.position.set(e,n,s),a.castShadow=!0,r.add(a),a}class p0{root=new se;body=new se;upper=new se;hips=new se;legL=new se;legR=new se;kneeL=new se;kneeR=new se;armL=new se;armR=new se;gunHolder=new se;gun=null;walkPhase=0;crouchT=0;recoil=0;deathT=-1;deathDir=1;nameTag=null;constructor(t,e){const n=f0(t);this.root.add(this.body),this.body.scale.setScalar(.94),this.body.add(this.hips),this.hips.position.y=.95,Ge(He.pelvis,n.uniform,0,0,0,this.hips);for(const[s,r,a]of[[this.legL,this.kneeL,-.11],[this.legR,this.kneeR,.11]])s.position.set(a,-.05,0),this.hips.add(s),Ge(He.leg,n.uniform,0,-.23,0,s),r.position.y=-.46,s.add(r),Ge(He.shin,n.uniform,0,-.22,0,r),Ge(He.boot,d0,0,-.45,-.04,r);this.upper.position.y=.08,this.hips.add(this.upper),Ge(He.torso,n.uniform,0,.28,0,this.upper),Ge(He.vest,n.vest,0,.3,0,this.upper),Ge(He.pack,n.vest,0,.3,.22,this.upper),Ge(He.head,h0,0,.7,0,this.upper),Ge(He.helmet,n.helmet,0,.82,.01,this.upper),Ge(He.goggles,u0,0,.74,-.115,this.upper),this.armR.position.set(.27,.5,0),this.armL.position.set(-.27,.5,0),this.upper.add(this.armR,this.armL);for(const s of[this.armR,this.armL]){Ge(He.arm,n.uniform,0,-.14,0,s),Ge(He.band,n.accent,0,-.05,0,s);const r=new se;r.position.y=-.28,s.add(r),Ge(He.forearm,n.uniform,0,-.13,0,r),r.rotation.x=Math.PI/2.2}this.armR.rotation.set(-.5,0,.1),this.armL.rotation.set(-.9,0,-.5),this.gunHolder.position.set(.12,.33,-.3),this.upper.add(this.gunHolder),this.setWeapon(e),this.root.traverse(s=>s.castShadow=!0)}setWeapon(t){this.gun&&(this.gunHolder.remove(this.gun.root),Ka(this.gun)),this.gun=Gc(t,{redDot:!1}),this.gun.root.scale.setScalar(1.15),this.gunHolder.add(this.gun.root)}muzzleWorld(t){return this.gun?this.gun.muzzle.getWorldPosition(t):this.root.getWorldPosition(t)}setNameTag(t,e){const n=document.createElement("canvas");n.width=256,n.height=48;const s=n.getContext("2d");s.font="bold 28px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.lineWidth=5,s.strokeStyle="rgba(0,0,0,0.75)",s.strokeText(t,128,24),s.fillStyle=e,s.fillText(t,128,24);const r=new mo(n),a=new kn({map:r,depthTest:!1,transparent:!0});this.nameTag=new po(a),this.nameTag.scale.set(1.4,.26,1),this.nameTag.position.y=2.25,this.nameTag.renderOrder=10,this.root.add(this.nameTag)}fire(){this.recoil=1}die(t){this.deathT=0;const e=t.clone().applyAxisAngle(new T(0,1,0),-this.root.rotation.y);this.deathDir=e.z>0?-1:1,this.nameTag&&(this.nameTag.visible=!1)}revive(){this.deathT=-1,this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),this.nameTag&&(this.nameTag.visible=!0)}update(t,e,n,s,r){if(this.deathT>=0){this.deathT+=t;const c=Math.min(1,this.deathT/.55),h=c*c;this.body.rotation.x=this.deathDir*h*(Math.PI/2)*.95,this.body.position.y=-h*.05,this.hips.position.y=.95-h*.6,this.legL.rotation.x=h*.6,this.legR.rotation.x=-h*.3,this.armL.rotation.z=-.5-h;return}this.crouchT=fe(this.crouchT,n?1:0,12,t);const a=this.crouchT,o=e>.3;this.walkPhase+=t*e*2.2;const l=o?Math.sin(this.walkPhase)*Math.min(1,e/4)*.7:0;this.hips.position.y=.95-a*.5+(o?Math.abs(Math.cos(this.walkPhase))*.04:0),this.legL.rotation.x=l-a*1.1,this.legR.rotation.x=-l-a*.5,this.kneeL.rotation.x=Math.max(0,-l)*.9+a*1.6,this.kneeR.rotation.x=Math.max(0,l)*.9+a*1.1,this.upper.rotation.x=-s*.6+a*.15,this.upper.rotation.y=o?Math.sin(this.walkPhase)*.06:0,this.recoil=fe(this.recoil,0,14,t),this.gunHolder.position.z=-.3+this.recoil*.06,this.gunHolder.rotation.x=-s*.4+this.recoil*.12+(r?0:.25),this.armR.rotation.x=-.5-(r?.15:0)+this.recoil*.05,this.armL.rotation.x=-.9-(r?.2:0)}dispose(){this.root.removeFromParent(),this.gun&&Ka(this.gun),this.nameTag&&(this.nameTag.material.map?.dispose(),this.nameTag.material.dispose())}}const ir={kestrel:{id:"kestrel",name:"AR-7 Kestrel",kind:"rifle",slot:"primary",description:"Gas-operated assault rifle. Works at every range and is easy to control.",fireModes:["auto","semi"],rpm:720,damage:30,minDamage:21,falloffStart:28,falloffEnd:60,headMult:1.8,pellets:1,magSize:30,reserve:150,reloadTime:2.1,reloadEmptyTime:2.7,recoilUp:.62,recoilSide:.3,recoilRecover:.55,hipSpread:2.6,adsSpread:.12,bloomPerShot:.18,maxBloom:2.2,adsZoom:1.4,adsTime:.22,moveSpeedMult:.95,range:250,stats:{damage:.6,rate:.7,range:.7,control:.65,mobility:.6}},harrow:{id:"harrow",name:"Harrow SMG",kind:"smg",slot:"primary",description:"Compact submachine gun. Fires fast and moves fast, but loses damage quickly at range.",fireModes:["auto","semi"],rpm:900,damage:26,minDamage:14,falloffStart:12,falloffEnd:32,headMult:1.5,pellets:1,magSize:32,reserve:192,reloadTime:1.8,reloadEmptyTime:2.3,recoilUp:.45,recoilSide:.38,recoilRecover:.6,hipSpread:2,adsSpread:.35,bloomPerShot:.12,maxBloom:1.8,adsZoom:1.25,adsTime:.15,moveSpeedMult:1.05,range:150,stats:{damage:.45,rate:.95,range:.35,control:.7,mobility:.9}},longreach:{id:"longreach",name:"Longreach .338",kind:"sniper",slot:"primary",description:"Bolt-action precision rifle. A hit to the upper body or head kills. Hold Shift while scoped to steady your aim.",fireModes:["semi"],rpm:48,damage:105,minDamage:90,falloffStart:80,falloffEnd:200,headMult:2,pellets:1,magSize:5,reserve:30,reloadTime:2.9,reloadEmptyTime:3.5,cycleAction:"bolt",recoilUp:3.8,recoilSide:.8,recoilRecover:.85,hipSpread:7,adsSpread:0,bloomPerShot:0,maxBloom:0,adsZoom:4.5,adsTime:.36,moveSpeedMult:.86,range:400,scope:!0,stats:{damage:1,rate:.1,range:1,control:.3,mobility:.3}},brute:{id:"brute",name:"Brute-12",kind:"shotgun",slot:"primary",description:"Pump-action shotgun. Kills in one shot up close. Loads one shell at a time.",fireModes:["semi"],rpm:75,damage:17,minDamage:4,falloffStart:7,falloffEnd:22,headMult:1.3,pellets:9,magSize:7,reserve:35,reloadTime:.55,reloadEmptyTime:.55,reloadPerRound:!0,cycleAction:"pump",recoilUp:4.2,recoilSide:1.2,recoilRecover:.8,hipSpread:4.2,adsSpread:3,bloomPerShot:0,maxBloom:0,adsZoom:1.15,adsTime:.2,moveSpeedMult:.97,range:60,stats:{damage:.95,rate:.2,range:.15,control:.4,mobility:.75}},p9:{id:"p9",name:"P9 Sentinel",kind:"pistol",slot:"secondary",description:"Semi-automatic sidearm. Fast to draw, and handy when your primary runs dry.",fireModes:["semi"],rpm:450,damage:28,minDamage:17,falloffStart:14,falloffEnd:34,headMult:1.8,pellets:1,magSize:15,reserve:75,reloadTime:1.4,reloadEmptyTime:1.8,recoilUp:1.1,recoilSide:.4,recoilRecover:.75,hipSpread:1.8,adsSpread:.4,bloomPerShot:.45,maxBloom:2,adsZoom:1.2,adsTime:.12,moveSpeedMult:1.08,range:120,stats:{damage:.45,rate:.5,range:.4,control:.6,mobility:1}}},m0=["kestrel","harrow","longreach","brute"],g0=["p9"];class Qa{def;mag;reserve;state="ready";fireMode;cooldown=0;reloadTimer=0;reloadDuration=0;reloadingEmpty=!1;bloom=0;sinceShot=99;sprayCount=0;triggerWasDown=!1;justReloaded=!1;constructor(t){this.def=ir[t],this.mag=this.def.magSize,this.reserve=this.def.reserve,this.fireMode=this.def.fireModes[0]}get id(){return this.def.id}get interval(){return 60/this.def.rpm}cycleFireMode(){const t=this.def.fireModes;return this.fireMode=t[(t.indexOf(this.fireMode)+1)%t.length],this.fireMode}tryFire(t){const e=t&&!this.triggerWasDown;return this.triggerWasDown=t,!t||(this.state==="reloading"&&this.def.reloadPerRound&&this.mag>0&&e&&(this.state="ready",this.cooldown=Math.max(this.cooldown,.1)),this.state!=="ready"||this.cooldown>0)||this.fireMode==="semi"&&!e?null:this.mag<=0?e?"empty":null:(this.mag--,this.cooldown+=this.interval,this.cooldown<0&&(this.cooldown=this.interval),this.bloom=Math.min(this.def.maxBloom,this.bloom+this.def.bloomPerShot),this.sinceShot=0,this.sprayCount++,this.def.cycleAction&&this.mag>0&&(this.state="cycling"),"fired")}canReload(){return this.state!=="reloading"&&this.mag<this.def.magSize&&this.reserve>0}startReload(){return this.canReload()?(this.state="reloading",this.reloadingEmpty=this.mag===0,this.reloadDuration=this.reloadingEmpty?this.def.reloadEmptyTime:this.def.reloadTime,this.reloadTimer=this.reloadDuration,!0):!1}cancelReload(){this.state==="reloading"&&(this.state="ready")}reloadProgress(){return this.state!=="reloading"?0:1-this.reloadTimer/this.reloadDuration}update(t){if(this.justReloaded=!1,this.sinceShot+=t,this.cooldown>0&&(this.cooldown-=t),this.state==="cycling"&&this.cooldown<=0&&(this.state="ready"),this.cooldown<-.05&&(this.cooldown=0),this.sinceShot>this.interval*1.6&&(this.sprayCount=0,this.bloom=Math.max(0,this.bloom-t*this.def.maxBloom*3)),this.state==="reloading"&&(this.reloadTimer-=t,this.reloadTimer<=0))if(this.def.reloadPerRound)this.mag++,this.reserve--,this.justReloaded=!0,this.mag<this.def.magSize&&this.reserve>0?this.reloadTimer=this.reloadDuration:this.state="ready";else{const e=this.def.magSize-this.mag,n=Math.min(e,this.reserve);this.mag+=n,this.reserve-=n,this.state="ready",this.justReloaded=!0}}spread(t,e){const n=this.def,s=n.hipSpread+(n.adsSpread-n.hipSpread)*t,r=this.bloom*(1-t*.6),a=1+e*(1-t*.7);return(s*a+r)*Pe}refill(){this.mag=this.def.magSize,this.reserve=this.def.reserve,this.state="ready"}wasReloadingEmpty(){return this.reloadingEmpty}}const Il=17,xn=new T,_0=new T,na=new T;class v0 extends xr{constructor(t,e){super(e.name,e.team),this.session=t,this.behavior=e.behavior,this.group=e.group,this.radius=e.radius??14,this.weapon=new Qa(e.weapon),this.damageScale=e.damageScale??1,this.regenDelay=6,this.regenRate=20,this.soldier=new p0(e.style,e.weapon),e.nameTag&&this.soldier.setNameTag(e.name,e.nameTag),t.scene.add(this.soldier.root),this.body={pos:this.position,vel:this.velocity,halfW:us,height:sn,grounded:!1},this.homeYaw=e.yaw,this.respawn(e.position,e.yaw),this.home.copy(e.position)}isPlayer=!1;soldier;weapon;behavior;group;home=new T;homeYaw;radius;state="idle";body;path=[];pathIdx=0;dest=new T;hasDest=!1;repathTimer=0;idleTimer=0;stuckTimer=0;stuckPos=new T;target=null;targetVisible=!1;lastSeenPos=new T;lastSeenTime=-999;seeTime=0;trackTime=0;perceiveTimer=Math.random()*.2;recentAttacker=null;recentAttackTime=-999;burstLeft=0;burstCooldown=0;aimHead=!1;aimError=new T;strafeDir=1;strafeTimer=0;standStill=!1;wantCrouch=!1;coverCooldown=0;coverTimer=0;coverNode=-1;grenades=1;grenadeCooldown=ft(6,12);searchTimer=0;deadTime=0;speedNow=0;respawn(t,e){this.position.copy(t),this.velocity.set(0,0,0),this.yaw=e,this.pitch=0,this.health=this.maxHealth,this.alive=!0,this.crouching=!1,this.wantCrouch=!1,this.height=sn,this.state="idle",this.target=null,this.targetVisible=!1,this.lastSeenTime=-999,this.path=[],this.hasDest=!1,this.weapon.refill(),this.grenades=1,this.spawnProtection=1.5,this.soldier.revive(),this.soldier.root.visible=!0,this.syncVisual(0)}get deadFor(){return this.alive?0:this.deadTime}update(t){if(!this.alive){this.deadTime+=t,this.soldier.update(t,0,!1,0,!1),this.deadTime>6&&(this.soldier.root.visible=!1);return}const e=this.session;this.spawnProtection>0&&(this.spawnProtection-=t),this.regen(t,e.time),this.weapon.update(t),this.burstCooldown-=t,this.coverCooldown-=t,this.grenadeCooldown-=t,this.perceiveTimer-=t,this.perceiveTimer<=0&&(this.perceiveTimer=.14+Math.random()*.06,this.perceive());let n=0,s=0,r=0,a=!0;const o=this.nearbyGrenade();if(o)xn.copy(this.position).sub(o).setY(0).normalize(),n=xn.x,s=xn.z,r=5.2,this.wantCrouch=!1;else switch(this.state){case"idle":case"move":({moveX:n,moveZ:s,speed:r}=this.doPatrol(t));break;case"engage":({moveX:n,moveZ:s,speed:r}=this.doEngage(t)),a=!1;break;case"cover":({moveX:n,moveZ:s,speed:r}=this.doCover(t)),a=!(this.targetVisible&&this.coverArrived());break;case"search":({moveX:n,moveZ:s,speed:r}=this.doSearch(t));break}if(a&&r>.1&&!this.targetVisible){const h=Math.atan2(-n,-s);this.yaw+=Jt(ea(this.yaw,h),-t*5,t*5),this.pitch=fe(this.pitch,0,5,t)}else(this.targetVisible||this.state==="engage")&&this.aimAt(t);this.crouching=this.wantCrouch&&r<3;const l=!this.crouching||this.session.world.bodyOverlaps(this.position.x,this.position.y+.01,this.position.z,us,sn);!this.crouching&&!l&&(this.crouching=!0),this.body.height=this.crouching?Hc:sn,this.height=fe(this.height,this.body.height,10,t),this.crouching&&(r=Math.min(r,2.2));const c=this.velocity;c.x=fe(c.x,n*r,10,t),c.z=fe(c.z,s*r,10,t),c.y-=Il*t,this.session.world.moveBody(this.body,c.x*t,c.y*t,c.z*t,.45),this.grounded=this.body.grounded,this.speedNow=Math.hypot(c.x,c.z),r>1?(this.stuckTimer+=t,this.stuckTimer>1.2&&(this.stuckPos.distanceTo(this.position)<.4&&(this.grounded&&(c.y=5.2),this.hasDest=!1,this.path=[],this.state==="cover"&&(this.state="engage")),this.stuckTimer=0,this.stuckPos.copy(this.position))):(this.stuckTimer=0,this.stuckPos.copy(this.position)),this.syncVisual(t)}syncVisual(t){this.soldier.root.position.copy(this.position),this.soldier.root.rotation.y=this.yaw,this.soldier.update(t,this.speedNow,this.crouching,this.pitch,this.state==="engage"||this.state==="cover")}perceive(){const t=this.session,e=this.eyePosition(na),n=-Math.sin(this.yaw),s=-Math.cos(this.yaw);let r=null,a=1/0;for(const o of t.actors){if(!o.alive||!t.isEnemy(this,o))continue;const l=o.position.x-this.position.x,c=o.position.z-this.position.z,h=Math.hypot(l,c);let u=t.sightRange;if(o.crouching&&(u*=.75),h>u)continue;const p=(l*n+c*s)/Math.max(h,.001),m=o===this.recentAttacker&&t.time-this.recentAttackTime<2.5,g=o===this.target?Math.cos(100*Pe):Math.cos(62*Pe);if(p<g&&h>4&&!m||!(t.world.lineClear(e,o.eyePosition(xn))||t.world.lineClear(e,o.chestPosition(xn))))continue;const f=h-(o===this.target?8:0)-(o.isPlayer?3:0);f<a&&(a=f,r=o)}r?((r!==this.target||!this.targetVisible)&&((r!==this.target||t.time-this.lastSeenTime>2)&&(this.seeTime=0),this.targetVisible||this.alertSquad(r)),this.target=r,this.targetVisible=!0,this.lastSeenPos.copy(r.position),this.lastSeenTime=t.time,this.state!=="cover"&&(this.state="engage")):(this.targetVisible=!1,this.trackTime=0)}alertSquad(t){for(const e of this.session.bots)e===this||!e.alive||e.team!==this.team||e.targetVisible||e.position.distanceTo(this.position)>28||(e.lastSeenPos.copy(t.position),e.lastSeenTime=this.session.time,e.target=t,(e.state==="idle"||e.state==="move")&&e.enterSearch())}hearShot(t,e){if(!this.alive||!this.session.isEnemy(this,t)||this.targetVisible)return;const n=e.distanceTo(this.position);if(n>55)return;const s=n*.08;this.lastSeenPos.set(e.x+ft(-s,s),0,e.z+ft(-s,s)),this.lastSeenTime=this.session.time,(this.state==="idle"||this.state==="move")&&this.enterSearch()}onDamaged(t,e,n,s){this.aimError.multiplyScalar(1.6),n&&this.session.isEnemy(this,n)&&(this.recentAttacker=n,this.recentAttackTime=this.session.time,this.targetVisible||(this.target=n,this.lastSeenPos.copy(e??n.position),this.lastSeenTime=this.session.time,this.perceiveTimer=0,this.state!=="cover"&&this.enterSearch())),this.health<45&&this.coverCooldown<=0&&this.state!=="cover"&&this.enterCover()}onKilled(t){this.state="dead",this.deadTime=0,this.soldier.die(t)}doPatrol(t){const e=this.session;switch(this.wantCrouch=!1,this.behavior){case"guard":return this.position.distanceTo(this.home)>2.5?(this.hasDest||this.setDestination(this.home.x,this.home.z),this.followPath(1.8)):(this.hasDest=!1,this.yaw=this.homeYaw+Math.sin(e.time*.35+this.id)*.9,{moveX:0,moveZ:0,speed:0});case"follow":{const n=e.player,s=n.position.distanceTo(this.position);if(this.repathTimer-=t,s>7&&this.repathTimer<=0){this.repathTimer=1.5;const r=ft(0,Math.PI*2);this.setDestination(n.position.x+Math.cos(r)*3,n.position.z+Math.sin(r)*3)}return this.hasDest&&s>4?this.followPath(s>18?5.4:4.2):{moveX:0,moveZ:0,speed:0}}case"assault":{if(this.repathTimer-=t,!this.hasDest||this.repathTimer<=0){this.repathTimer=3;const n=e.enemiesOf(this),s=n.find(r=>r.isPlayer)??n[0];s&&this.setDestination(s.position.x+ft(-4,4),s.position.z+ft(-4,4))}return this.followPath(4.6)}case"patrol":{if(!this.hasDest){if(this.idleTimer-=t,this.idleTimer>0)return{moveX:0,moveZ:0,speed:0};const n=e.nav.within(this.home.x,this.home.z,this.radius);if(n.length){const s=e.nav.nodes[n[Math.floor(Math.random()*n.length)]];this.setDestination(s.x,s.z)}this.idleTimer=ft(2,5)}return this.followPath(1.9)}case"roam":default:{if(!this.hasDest){const n=e.enemiesOf(this);if(n.length&&Math.random()<.6){const s=n[Math.floor(Math.random()*n.length)];this.setDestination(s.position.x+ft(-10,10),s.position.z+ft(-10,10))}else{const s=e.nav.nodes[e.nav.random()];this.setDestination(s.x,s.z)}}return this.followPath(4.4)}}}enterSearch(){this.state="search",this.searchTimer=0,this.setDestination(this.lastSeenPos.x,this.lastSeenPos.z)}doSearch(t){if(this.session.time-this.lastSeenTime>14)return this.state="idle",this.hasDest=!1,{moveX:0,moveZ:0,speed:0};if(this.behavior==="guard"&&this.position.distanceTo(this.home)>16)return this.state="idle",this.hasDest=!1,{moveX:0,moveZ:0,speed:0};if(this.maybeThrowGrenade(),this.hasDest&&this.position.distanceTo(this.lastSeenPos)>2){const n=this.followPath(3.4);if(n.speed>0)return n}return this.searchTimer+=t,this.yaw+=t*1.6,this.searchTimer>3.5&&(this.state="idle",this.hasDest=!1),{moveX:0,moveZ:0,speed:0}}enterCover(){const t=this.findCover();if(t<0)return;this.coverNode=t,this.state="cover",this.coverTimer=ft(1.8,3.2),this.coverCooldown=7;const e=this.session.nav.nodes[t];this.setDestination(e.x,e.z)}coverArrived(){if(this.coverNode<0)return!1;const t=this.session.nav.nodes[this.coverNode];return Math.hypot(t.x-this.position.x,t.z-this.position.z)<1}doCover(t){if(!this.coverArrived()){this.wantCrouch=!1;const e=this.followPath(5);if(e.speed>0||!this.hasDest)return e}return this.wantCrouch=!0,this.weapon.mag<this.weapon.def.magSize*.5&&this.weapon.state==="ready"&&this.weapon.startReload(),this.coverTimer-=t,this.targetVisible&&this.weapon.state==="ready"&&this.coverTimer<1&&(this.wantCrouch=!1,this.tryShoot(t)),this.coverTimer<=0&&(this.health>60||this.coverTimer<-3)&&(this.wantCrouch=!1,this.targetVisible?this.state="engage":this.enterSearch()),{moveX:0,moveZ:0,speed:0}}doEngage(t){const e=this.session,n=this.target;if(!n||!n.alive)return this.target=null,this.targetVisible=!1,this.state="idle",{moveX:0,moveZ:0,speed:0};if(!this.targetVisible)return e.time-this.lastSeenTime>1.2&&this.enterSearch(),this.maybeThrowGrenade(),{moveX:0,moveZ:0,speed:0};if(this.trackTime+=t,this.seeTime+=t,this.weapon.mag===0&&this.weapon.state!=="reloading"){if(this.health<70&&this.coverCooldown<=0&&(this.enterCover(),this.state==="cover"))return{moveX:0,moveZ:0,speed:0};this.weapon.startReload()}this.tryShoot(t);const s=n.position.x-this.position.x,r=n.position.z-this.position.z,a=Math.hypot(s,r),o=this.idealRange();if(this.behavior!=="guard"&&a>o+12)return this.repathTimer-=t,(!this.hasDest||this.repathTimer<=0)&&(this.repathTimer=1.5,this.setDestination(n.position.x,n.position.z)),this.wantCrouch=!1,this.followPath(3.8);if(this.strafeTimer-=t,this.strafeTimer<=0){this.strafeTimer=ft(.7,1.8),this.strafeDir=Math.random()<.5?-1:1;const m=this.weapon.def.kind==="sniper"||this.weapon.def.kind==="rifle";this.standStill=Math.random()<(m?.45:.2),this.wantCrouch=this.standStill&&Math.random()<.6}if(this.standStill)return{moveX:0,moveZ:0,speed:0};const l=s/Math.max(a,.01),c=r/Math.max(a,.01);let h=-c*this.strafeDir,u=l*this.strafeDir;a<5&&this.weapon.def.kind!=="shotgun"?(h-=l*.8,u-=c*.8):a>o&&(h+=l*.5,u+=c*.5);const p=Math.hypot(h,u)||1;return{moveX:h/p,moveZ:u/p,speed:2.6}}idealRange(){switch(this.weapon.def.kind){case"shotgun":return 6;case"smg":return 12;case"pistol":return 12;case"sniper":return 40;default:return 22}}aimPoint(t){const e=this.target;return this.aimHead?t.set(e.position.x,e.position.y+e.height-.15,e.position.z):e.chestPosition(t)}aimAt(t){if(!this.target)return;const e=this.eyePosition(na),n=this.targetVisible?this.aimPoint(xn):xn.copy(this.lastSeenPos).setY(1.4),s=n.x-e.x,r=n.y-e.y,a=n.z-e.z,o=Math.atan2(-s,-a),l=Math.atan2(r,Math.hypot(s,a)),c=this.session.diff.turnRate*(this.recentAttackTime>this.session.time-1?1.5:1);this.yaw+=Jt(ea(this.yaw,o),-c*t,c*t),this.pitch+=Jt(l-this.pitch,-c*t,c*t)}tryShoot(t){const e=this.session,n=this.target;if(!n||!this.targetVisible||this.seeTime<e.diff.reaction||this.weapon.state!=="ready")return;const s=this.eyePosition(na),r=this.aimPoint(xn),a=Math.atan2(-(r.x-s.x),-(r.z-s.z));if(Math.abs(ea(this.yaw,a))>12*Pe)return;const o=r.distanceTo(s);if(o>this.weapon.def.range)return;if(this.burstLeft<=0){if(this.burstCooldown>0)return;const m=this.weapon.def.kind,[g,_]=e.diff.burst;this.burstLeft=m==="sniper"||m==="shotgun"?1:m==="pistol"?Dl(1,3):Dl(g,_),this.aimHead=Math.random()<e.diff.headshotChance;const f=Jt(this.trackTime/1.6,0,1),d=e.diff.aimError*(1.8-f*1.2)*(n.isPlayer&&n.velocity.lengthSq()>9?1.3:1),b=o*Math.tan(d*Pe);this.aimError.set(ft(-1,1),ft(-.7,.7),ft(-1,1)).normalize().multiplyScalar(b*Math.random())}if(this.weapon.tryFire(!1),this.weapon.tryFire(!0)!=="fired")return;if(this.burstLeft--,this.burstLeft<=0){const m=this.weapon.def.kind;this.burstCooldown=m==="sniper"?ft(1.6,2.6):m==="shotgun"?ft(.5,.9):ft(.25,.75)}const c=_0.copy(r).add(this.aimError).sub(s).normalize(),h=this.speedNow>.5,u=this.weapon.spread(.65,h?.5:0)*.7,p=this.soldier.muzzleWorld(new T);this.soldier.fire(),e.fire(this,s.clone(),c.clone(),this.weapon,u,p)}maybeThrowGrenade(){const t=this.session;if(this.grenades<=0||this.grenadeCooldown>0||!this.target)return;const e=t.time-this.lastSeenTime;if(e<1.2||e>5)return;const n=Math.hypot(this.lastSeenPos.x-this.position.x,this.lastSeenPos.z-this.position.z);if(n<9||n>26||(this.grenadeCooldown=ft(10,18),Math.random()>.45))return;this.grenades--;const s=38*Pe,r=Math.sqrt(n*Il/Math.sin(2*s))*.92,a=(this.lastSeenPos.x-this.position.x)/n,o=(this.lastSeenPos.z-this.position.z)/n,l=this.eyePosition(new T),c=new T(a*r*Math.cos(s),r*Math.sin(s),o*r*Math.cos(s));t.grenades.throw(this,l,c,3),this.team===t.player.team&&t.message(`${this.name}: Frag out!`,"#9ecbff")}nearbyGrenade(){for(const t of this.session.grenades.live)if(t.fuse<2.6&&t.pos.distanceTo(this.position)<6)return t.pos;return null}findCover(){const t=this.session,e=this.target,n=e?e.eyePosition(new T):null,s=t.nav.within(this.position.x,this.position.z,16).filter(a=>t.nav.nodes[a].cover);s.sort((a,o)=>{const l=t.nav.nodes[a],c=t.nav.nodes[o];return Math.hypot(l.x-this.position.x,l.z-this.position.z)-Math.hypot(c.x-this.position.x,c.z-this.position.z)});let r=0;for(const a of s){if(r++>20)break;const o=t.nav.nodes[a];if(!n)return a;if(!(Math.hypot(o.x-n.x,o.z-n.z)<6)&&!t.world.lineClear(n,xn.set(o.x,1,o.z)))return a}return-1}setDestination(t,e){const n=this.session.nav,s=n.nearest(this.position.x,this.position.z),r=n.nearest(t,e),a=n.findPath(s,r);if(!a)return this.hasDest=!1,!1;if(this.path=a,this.pathIdx=0,a.length>1){const o=n.nodes[a[0]],l=n.nodes[a[1]],c=Math.hypot(o.x-this.position.x,o.z-this.position.z),h=Math.hypot(l.x-o.x,l.z-o.z);Math.hypot(l.x-this.position.x,l.z-this.position.z)<h&&c<2&&(this.pathIdx=1)}return this.dest.set(t,0,e),this.hasDest=!0,!0}followPath(t){if(!this.hasDest||this.pathIdx>=this.path.length)return this.hasDest=!1,this.state==="move"&&(this.state="idle"),{moveX:0,moveZ:0,speed:0};const n=this.session.nav.nodes[this.path[this.pathIdx]],s=n.x-this.position.x,r=n.z-this.position.z,a=Math.hypot(s,r);return a<.7?(this.pathIdx++,this.followPath(t)):(this.state==="idle"&&(this.state="move"),{moveX:s/a,moveZ:r/a,speed:t})}dispose(){this.soldier.dispose()}}const x0=.8;function M0(i,t){if(t<=i.falloffStart)return i.damage;if(t>=i.falloffEnd)return i.minDamage;const e=(t-i.falloffStart)/(i.falloffEnd-i.falloffStart);return i.damage+(i.minDamage-i.damage)*e}function y0(i,t){return t==="head"?i.headMult:t==="limb"?x0:1}function S0(i,t,e){return Math.round(M0(i,t)*y0(i,e))}function b0(i,t,e){const n=Jt(1-i/t,0,1);return Math.round(e*Math.pow(n,1.4))}class w0{handlers=new Map;on(t,e){let n=this.handlers.get(t);return n||(n=new Set,this.handlers.set(t,n)),n.add(e),()=>n.delete(e)}emit(t,e){const n=this.handlers.get(t);if(n)for(const s of n)s(e)}clear(){this.handlers.clear()}}function fs(i,t,e){const n=document.createElement("canvas");n.width=n.height=i;const s=n.getContext("2d");e(s,i,Vc(t));const r=new mo(n);return r.wrapS=r.wrapT=or,r.colorSpace=Ue,r.anisotropy=8,r}function Re(i,t,e,n,s,r=9e3){i.fillStyle=n,i.fillRect(0,0,t,t);for(let a=0;a<r;a++){const o=Math.floor((e()-.5)*s);i.fillStyle=o>0?`rgba(255,255,255,${o/255})`:`rgba(0,0,0,${-o/255})`;const l=1+e()*3;i.fillRect(e()*t,e()*t,l,l)}}function Bn(i,t,e,n,s,r){for(let a=0;a<s;a++){const o=e()*t,l=e()*t,c=r*(.3+e()),h=i.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,n),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2)}}const E0={sand:[11,(i,t,e)=>{Re(i,t,e,"#c8ad80",40,16e3),Bn(i,t,e,"rgba(120,90,50,0.15)",30,60)}],dirt:[12,(i,t,e)=>{Re(i,t,e,"#5b5146",45,16e3),Bn(i,t,e,"rgba(20,15,10,0.25)",30,50)}],gravel:[13,(i,t,e)=>{Re(i,t,e,"#4d4a46",80,24e3)}],asphalt:[14,(i,t,e)=>{Re(i,t,e,"#3d3d3f",35,18e3),Bn(i,t,e,"rgba(0,0,0,0.25)",12,50),i.strokeStyle="rgba(0,0,0,0.5)";for(let n=0;n<5;n++){i.beginPath();let s=e()*t,r=e()*t;i.moveTo(s,r);for(let a=0;a<6;a++)i.lineTo(s+=(e()-.5)*50,r+=(e()-.5)*50);i.stroke()}}],concrete:[15,(i,t,e)=>{Re(i,t,e,"#9a968e",30),Bn(i,t,e,"rgba(60,55,50,0.15)",16,70),i.strokeStyle="rgba(40,40,40,0.35)",i.lineWidth=2,i.strokeRect(1,1,t-2,t-2)}],stucco:[16,(i,t,e)=>{Re(i,t,e,"#d6c3a0",28,14e3),Bn(i,t,e,"rgba(140,110,70,0.18)",20,70)}],stuccoDark:[17,(i,t,e)=>{Re(i,t,e,"#a89070",28,14e3),Bn(i,t,e,"rgba(80,60,40,0.2)",20,70)}],brick:[18,(i,t,e)=>{i.fillStyle="#6e6258",i.fillRect(0,0,t,t);const n=t/16,s=t/6;for(let r=0;r<16;r++){const a=r%2?s/2:0;for(let o=-1;o<7;o++){const l=110+Math.floor(e()*40);i.fillStyle=`rgb(${l},${Math.floor(l*.55)},${Math.floor(l*.42)})`,i.fillRect(o*s+a+1,r*n+1,s-2,n-2)}}Re(i,t,e,"rgba(0,0,0,0)",30,6e3)}],metal:[19,(i,t,e)=>{Re(i,t,e,"#7c838a",20),i.fillStyle="rgba(0,0,0,0.12)";for(let n=0;n<t;n+=t/8)i.fillRect(n,0,3,t)}],rust:[20,(i,t,e)=>{Re(i,t,e,"#6b4a36",40),Bn(i,t,e,"rgba(150,70,20,0.35)",30,40),i.fillStyle="rgba(0,0,0,0.15)";for(let n=0;n<t;n+=t/10)i.fillRect(n,0,4,t)}],wood:[21,(i,t,e)=>{Re(i,t,e,"#8a6a42",25,6e3),i.strokeStyle="rgba(50,30,10,0.6)",i.lineWidth=4;for(let n=0;n<=4;n++)i.beginPath(),i.moveTo(0,n*t/4),i.lineTo(t,n*t/4),i.stroke();i.lineWidth=6,i.strokeRect(3,3,t-6,t-6),i.beginPath(),i.moveTo(0,0),i.lineTo(t,t),i.stroke()}],roof:[22,(i,t,e)=>{Re(i,t,e,"#5d5650",30)}],sandbag:[23,(i,t,e)=>{i.fillStyle="#7d6d4e",i.fillRect(0,0,t,t);const n=t/6;for(let s=0;s<6;s++){const r=s%2?t/6:0;for(let a=-1;a<3;a++){const o=a*(t/3)+r,l=i.createLinearGradient(0,s*n,0,s*n+n);l.addColorStop(0,"#a08c66"),l.addColorStop(1,"#5e5038"),i.fillStyle=l,i.beginPath(),i.roundRect(o+2,s*n+2,t/3-4,n-4,10),i.fill()}}Re(i,t,e,"rgba(0,0,0,0)",25,5e3)}],dark:[24,(i,t,e)=>{Re(i,t,e,"#2a2a2c",20,4e3)}]},T0={containerRed:"#8a2f24",containerBlue:"#2a4f7a",containerGreen:"#3d6440",containerYellow:"#b88a26"};function A0(i){return(t,e,n)=>{Re(t,e,n,i,25);for(let s=0;s<e;s+=e/12)t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(s,0,e/48,e),t.fillStyle="rgba(255,255,255,0.08)",t.fillRect(s+e/48,0,e/96,e);Bn(t,e,n,"rgba(90,50,20,0.25)",10,30)}}const R0={sand:8,dirt:8,gravel:4,asphalt:6,brick:3,wood:1.2,sandbag:1.6,metal:3,rust:3},C0={metal:.55,rust:.8,containerRed:.6,containerBlue:.6,containerGreen:.6,containerYellow:.6},P0={metal:.5,rust:.2,containerRed:.3,containerBlue:.3,containerGreen:.3,containerYellow:.3},Ul=new Map;function Nl(i){return R0[i]??4}function Fl(i){let t=Ul.get(i);if(t)return t;const e=E0[i],n=T0[i];let s=null;return e?s=fs(256,e[0],e[1]):n&&(s=fs(256,n.length*7,A0(n))),t=new xe({map:s,color:16777215,roughness:C0[i]??.92,metalness:P0[i]??0}),Ul.set(i,t),t}let Xs=null;function D0(){return Xs||(Xs=fs(64,1,(i,t)=>{const e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,230,180,0.85)"),e.addColorStop(1,"rgba(255,160,60,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Xs)}let Ys=null;function L0(){return Ys||(Ys=fs(64,2,(i,t,e)=>{for(let n=0;n<12;n++){const s=t/2+(e()-.5)*t*.4,r=t/2+(e()-.5)*t*.4,a=t*(.15+e()*.25),o=i.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,t,t)}}),Ys)}let qs=null;function I0(){return qs||(qs=fs(128,3,(i,t,e)=>{i.translate(t/2,t/2);for(let s=0;s<7;s++){i.rotate(Math.PI*2/7+e()*.3);const r=i.createLinearGradient(0,0,t/2,0);r.addColorStop(0,"rgba(255,250,220,1)"),r.addColorStop(1,"rgba(255,150,40,0)"),i.fillStyle=r,i.beginPath(),i.moveTo(0,-t*.05),i.lineTo(t*(.3+e()*.2),0),i.lineTo(0,t*.05),i.fill()}const n=i.createRadialGradient(0,0,0,0,0,t*.2);n.addColorStop(0,"rgba(255,255,240,1)"),n.addColorStop(1,"rgba(255,200,100,0)"),i.fillStyle=n,i.fillRect(-t/2,-t/2,t,t)}),qs)}const U0=160,N0=260;class F0{group=new se;decals=[];decalIndex=0;particles=[];freeSprites=[];tracers=[];lights=[];decalGeo=new ci(.12,.12);decalMat;sparkMat;dustMat;bloodMat;smokeMat;fireMat;tracerMat;tmp=new T;constructor(t,e){t.add(this.group);const n=document.createElement("canvas");n.width=n.height=32;const s=n.getContext("2d"),r=s.createRadialGradient(16,16,0,16,16,16);r.addColorStop(0,"rgba(10,10,10,0.95)"),r.addColorStop(.45,"rgba(25,22,20,0.8)"),r.addColorStop(1,"rgba(40,35,30,0)"),s.fillStyle=r,s.fillRect(0,0,32,32);const a=new mo(n);this.decalMat=new Wi({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});const o=D0(),l=L0();this.sparkMat=new kn({map:o,color:16765056,blending:Ii,depthWrite:!1}),this.fireMat=new kn({map:o,color:16751168,blending:Ii,depthWrite:!1}),this.dustMat=new kn({map:l,color:e?5591628:12102028,depthWrite:!1,transparent:!0}),this.bloodMat=new kn({map:l,color:7997962,depthWrite:!1,transparent:!0}),this.smokeMat=new kn({map:l,color:e?3815994:6972764,depthWrite:!1,transparent:!0}),this.tracerMat=new Oc({color:16768409,transparent:!0,opacity:.8,blending:Ii});for(let c=0;c<4;c++){const h=new _o(16760944,0,8,2);this.group.add(h),this.lights.push({light:h,life:0,max:.05,intensity:0})}}bulletImpact(t,e){let n=this.decals[this.decalIndex];n||(n=new kt(this.decalGeo,this.decalMat),this.decals[this.decalIndex]=n,this.group.add(n)),this.decalIndex=(this.decalIndex+1)%U0,n.position.copy(t).addScaledVector(e,.01),n.lookAt(this.tmp.copy(n.position).add(e)),n.rotateZ(Math.random()*Math.PI);const s=ft(.8,1.3);n.scale.set(s,s,s);for(let r=0;r<4;r++){const a=e.clone().multiplyScalar(ft(2,5)).add(new T(ft(-2,2),ft(0,3),ft(-2,2)));this.spawn(this.sparkMat,t,a,.15,12,.06,0,1)}for(let r=0;r<2;r++){const a=e.clone().multiplyScalar(ft(.5,1.4)).add(new T(ft(-.3,.3),ft(.2,.6),ft(-.3,.3)));this.spawn(this.dustMat,t,a,ft(.5,.9),-.4,.25,.9,.7)}}blood(t,e){for(let n=0;n<4;n++){const s=e.clone().multiplyScalar(ft(.5,2)).add(new T(ft(-.6,.6),ft(-.2,.8),ft(-.6,.6)));this.spawn(this.bloodMat,t,s,ft(.3,.5),4,.18,.8,.9)}}tracer(t,e){const n=new Ve().setFromPoints([t.clone(),e.clone()]),s=new n0(n,this.tracerMat);this.group.add(s),this.tracers.push({line:s,life:.05})}muzzleLight(t,e=6){this.flash(t,16760944,e,.05,8)}flash(t,e,n,s,r){const a=this.lights.find(o=>o.life<=0)??this.lights.reduce((o,l)=>o.life<l.life?o:l);a.light.color.setHex(e),a.light.distance=r,a.light.position.copy(t),a.life=a.max=s,a.intensity=n,a.light.intensity=n}muzzleSprite(t){this.spawn(this.fireMat,t,new T,.05,0,.5,0,1)}explosion(t){this.flash(t.clone().setY(t.y+1),16752720,60,.25,20);for(let e=0;e<14;e++){const n=new T(ft(-1,1),ft(.2,1.4),ft(-1,1)).normalize().multiplyScalar(ft(2,8));this.spawn(this.fireMat,t,n,ft(.2,.4),2,ft(.8,1.6),1.5,1)}for(let e=0;e<16;e++){const n=new T(ft(-1,1),ft(.3,1.2),ft(-1,1)).normalize().multiplyScalar(ft(1,4));this.spawn(this.smokeMat,t,n,ft(1.8,3.2),-.3,ft(1.2,2.2),1.2,.85)}for(let e=0;e<18;e++){const n=new T(ft(-1,1),ft(.5,1.5),ft(-1,1)).normalize().multiplyScalar(ft(8,16));this.spawn(this.sparkMat,t,n,ft(.3,.7),14,.08,0,1)}}spawn(t,e,n,s,r,a,o,l){if(this.particles.length>=N0){const h=this.particles.shift();this.release(h.sprite)}let c=this.freeSprites.pop();c||(c=new po(t),this.group.add(c)),c.material=t.clone(),c.visible=!0,c.position.copy(e),c.scale.setScalar(a),c.material.rotation=Math.random()*Math.PI*2,this.particles.push({sprite:c,vel:n,life:s,maxLife:s,gravity:r,grow:o,baseScale:a,fade:l})}release(t){t.visible=!1,t.material.dispose(),this.freeSprites.push(t)}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=t,n.life<=0){this.release(n.sprite),this.particles.splice(e,1);continue}n.vel.y-=n.gravity*t,n.vel.multiplyScalar(1-Math.min(1,t*1.5)),n.sprite.position.addScaledVector(n.vel,t);const s=1-n.life/n.maxLife;n.sprite.scale.setScalar(n.baseScale*(1+n.grow*s)),n.sprite.material.opacity=n.fade*(1-s)}for(let e=this.tracers.length-1;e>=0;e--){const n=this.tracers[e];n.life-=t,n.life<=0&&(n.line.removeFromParent(),n.line.geometry.dispose(),this.tracers.splice(e,1))}for(const e of this.lights)e.life>0?(e.life-=t,e.light.intensity=Math.max(0,e.life/e.max*e.intensity)):e.light.intensity=0}dispose(){this.group.removeFromParent();for(const t of this.particles)t.sprite.material.dispose();for(const t of this.tracers)t.line.geometry.dispose();this.decalGeo.dispose(),this.decalMat.map?.dispose(),this.decalMat.dispose();for(const t of[this.sparkMat,this.dustMat,this.bloodMat,this.smokeMat,this.fireMat,this.tracerMat])t.dispose()}}const Xc="claude-of-duty.settings",Ol={sensitivity:5,adsSensitivity:.85,fov:90,volume:.7,invertY:!1,showFps:!1,shadows:!0};function O0(){try{const i=localStorage.getItem(Xc);if(i)return{...Ol,...JSON.parse(i)}}catch{}return{...Ol}}const ge=O0();function to(){try{localStorage.setItem(Xc,JSON.stringify(ge))}catch{}}const sr=4.4,B0=6.9,z0=2.3,Bl=9.5,k0=.75,H0=5.3,G0=17,V0=.45,is=100;class W0{constructor(t){this.actor=t,this.body={pos:t.position,vel:t.velocity,halfW:us,height:sn,grounded:!1}}stamina=is;staminaCooldown=0;sprinting=!1;sliding=!1;slideTimer=0;slideCooldown=0;slideDir=new T;wantCrouch=!1;landImpact=0;body;wish=new T;get maxStamina(){return is}reset(){this.stamina=is,this.sprinting=!1,this.sliding=!1,this.wantCrouch=!1,this.actor.crouching=!1,this.actor.height=sn,this.body.grounded=!1}update(t,e,n){const s=this.actor,r=this.body.grounded,a=s.velocity,o=Math.hypot(a.x,a.z);this.landImpact=0,this.slideCooldown-=t,e.crouchPressed&&(this.sprinting&&r&&o>5&&this.slideCooldown<=0&&this.stamina>10?(this.sliding=!0,this.slideTimer=k0,this.slideCooldown=1.1,this.slideDir.set(a.x,0,a.z).normalize(),a.x=this.slideDir.x*Bl,a.z=this.slideDir.z*Bl,this.stamina-=10,this.wantCrouch=!0):this.wantCrouch=!this.wantCrouch);const l=e.z>.5;e.sprint&&l&&!e.blockSprint&&r&&!this.sliding&&!this.sprinting&&this.stamina>15&&(this.sprinting=!0,this.wantCrouch=!1),this.sprinting&&(!e.sprint||!l||e.blockSprint||this.stamina<=0)&&(this.sprinting=!1),this.sprinting?(this.stamina-=18*t,this.staminaCooldown=1):(this.staminaCooldown-=t,this.staminaCooldown<=0&&(this.stamina=Math.min(is,this.stamina+30*t))),this.stamina=Jt(this.stamina,0,is),this.wantCrouch||this.sliding?s.crouching=!0:s.crouching&&(n.bodyOverlaps(s.position.x,s.position.y+.01,s.position.z,us,sn)?this.wantCrouch=!0:s.crouching=!1),this.body.height=s.crouching?Hc:sn,s.height=fe(s.height,this.body.height,14,t);const h=Math.sin(s.yaw),u=Math.cos(s.yaw);if(this.wish.set(-h*e.z+u*e.x,0,-u*e.z-h*e.x),this.wish.lengthSq()>1&&this.wish.normalize(),this.sliding){this.slideTimer-=t;const m=Math.exp(-2.2*t);a.x*=m,a.z*=m,a.x+=this.wish.x*3*t,a.z+=this.wish.z*3*t,(this.slideTimer<=0||Math.hypot(a.x,a.z)<3||!r)&&(this.sliding=!1)}else{let m=sr;this.sprinting?m=B0:s.crouching&&(m=z0),m*=e.speedMult,this.stamina<10&&!this.sprinting&&(m*=.95);const g=this.wish.x*m,_=this.wish.z*m,f=r?12:2;a.x=fe(a.x,g,f,t),a.z=fe(a.z,_,f,t)}e.jump&&r&&!s.crouching&&this.stamina>5?(a.y=H0,this.stamina-=6,this.body.grounded=!1):e.jump&&r&&s.crouching&&!this.sliding&&(this.wantCrouch=!1),a.y-=G0*t;const p=a.y;n.moveBody(this.body,a.x*t,a.y*t,a.z*t,V0),!r&&this.body.grounded&&(this.landImpact=-p),s.grounded=this.body.grounded}horizontalSpeed(){return Math.hypot(this.actor.velocity.x,this.actor.velocity.z)}}const zl=.22,ss=.28,kl=.55,Hl=.65,ia=4;class X0 extends xr{constructor(t,e){super("You",0),this.session=e,this.controller=new W0(this),this.weapons=[new Qa(t.primary),new Qa(t.secondary)]}isPlayer=!0;controller;weapons;current=0;pendingWeapon=-1;switchTimer=0;grenades=2;maxGrenades=2;adsT=0;sprintT=0;slideT=0;crouchT=0;sprintOut=1;meleeTimer=-1;meleeDone=!1;throwTimer=-1;thrown=!1;breath=ia;holdingBreath=!1;breathLockout=0;interactHeld=!1;scoreboardHeld=!1;pendingRecoilPitch=0;pendingRecoilYaw=0;sprayPitch=0;recoverPitch=0;viewPunch=0;scopeSwayT=0;bobPhase=0;bobAmp=0;landDip=0;eyeY=0;lastStepPhase=0;lookDX=0;lookDY=0;fovKick=0;deathTime=0;damageIndicators=[];onShot=null;hitFlash={t:0,kill:!1,head:!1};intent={x:0,z:0,sprint:!1,jump:!1,crouchPressed:!1,speedMult:1,blockSprint:!1};triggerDown=!1;adsHeld=!1;reloadPressed=!1;switchTo=-1;meleePressed=!1;grenadePressed=!1;fireModePressed=!1;triggerPressed=!1;get weapon(){return this.weapons[this.current]}spawn(t,e){this.position.copy(t),this.velocity.set(0,0,0),this.yaw=e,this.pitch=0,this.health=this.maxHealth,this.alive=!0,this.controller.reset(),this.eyeY=t.y+sn-.13,this.grenades=this.maxGrenades;for(const n of this.weapons)n.refill();this.current=0,this.pendingWeapon=-1,this.switchTimer=ss,this.adsT=0,this.meleeTimer=-1,this.throwTimer=-1,this.spawnProtection=2,this.damageIndicators.length=0,this.pendingRecoilPitch=this.pendingRecoilYaw=this.sprayPitch=this.recoverPitch=0}readInput(t){if(this.scoreboardHeld=t.down("Tab"),!this.alive){this.triggerDown=!1;return}const n=1+(1/this.weapon.def.adsZoom-1)*this.adsT,s=ge.sensitivity*4e-4*(this.adsT>.5?ge.adsSensitivity*n:1);this.lookDX=t.mouseDX,this.lookDY=t.mouseDY,this.yaw-=t.mouseDX*s,this.pitch-=t.mouseDY*s*(ge.invertY?-1:1),this.pitch=Jt(this.pitch,-1.5,1.5);let r=0,a=0;t.down("KeyW")&&(a+=1),t.down("KeyS")&&(a-=1),t.down("KeyD")&&(r+=1),t.down("KeyA")&&(r-=1),this.intent.x=r,this.intent.z=a,this.intent.sprint=t.down("ShiftLeft")||t.down("ShiftRight"),this.intent.jump=this.intent.jump||t.wasPressed("Space"),this.intent.crouchPressed=this.intent.crouchPressed||t.wasPressed("KeyC"),this.triggerDown=t.mouseDown(0),this.triggerPressed=this.triggerPressed||t.mousePressed(0),this.adsHeld=t.mouseDown(2),this.reloadPressed=this.reloadPressed||t.wasPressed("KeyR"),this.meleePressed=this.meleePressed||t.wasPressed("KeyV"),this.grenadePressed=this.grenadePressed||t.wasPressed("KeyG"),this.fireModePressed=this.fireModePressed||t.wasPressed("KeyB"),this.interactHeld=t.down("KeyE"),t.wasPressed("Digit1")&&(this.switchTo=0),t.wasPressed("Digit2")&&(this.switchTo=1),(t.wasPressed("KeyQ")||t.wheel!==0)&&(this.switchTo=1-(this.pendingWeapon>=0?this.pendingWeapon:this.current))}update(t){const e=this.session;if(this.spawnProtection>0&&(this.spawnProtection-=t),!this.alive){this.deathTime+=t,this.adsT=fe(this.adsT,0,10,t);return}this.regen(t,e.time),this.weapon.update(t);const n=this.weapon;this.switchTo>=0&&this.switchTo!==this.current&&this.pendingWeapon<0&&this.meleeTimer<0&&(this.pendingWeapon=this.switchTo,this.switchTimer=zl+ss,n.cancelReload(),e.audio.weaponSwitch()),this.switchTo=-1,this.switchTimer>0&&(this.switchTimer-=t,this.pendingWeapon>=0&&this.switchTimer<=ss&&(this.current=this.pendingWeapon,this.pendingWeapon=-1));const s=this.switchTimer>0;if(this.fireModePressed){const f=n.cycleFireMode();n.def.fireModes.length>1&&e.message(`Fire mode: ${f==="auto"?"Full auto":"Semi-auto"}`),e.audio.dryFire()}const r=s||this.meleeTimer>=0||this.throwTimer>=0,a=this.adsHeld&&!r&&!this.controller.sliding&&(n.state!=="reloading"||n.def.reloadPerRound===!0),o=1/n.def.adsTime;this.adsT=Jt(this.adsT+(a?o:-o*1.3)*t,0,1);const l=this.triggerDown&&!r;this.intent.blockSprint=this.adsHeld||l||this.meleeTimer>=0,this.intent.speedMult=n.def.moveSpeedMult*(1-this.adsT*.45),this.controller.update(t,this.intent,e.world),this.intent.jump=!1,this.intent.crouchPressed=!1;const c=this.controller.sprinting;this.sprintT=fe(this.sprintT,c?1:0,10,t),this.slideT=fe(this.slideT,this.controller.sliding?1:0,10,t),this.crouchT=fe(this.crouchT,this.crouching?1:0,10,t),this.sprintOut=c?0:this.sprintOut+t,this.controller.landImpact>4&&(this.landDip=Math.min(1,this.controller.landImpact/10),e.audio.land()),this.landDip=fe(this.landDip,0,6,t);const h=n.def.scope===!0&&this.adsT>.9;if(this.breathLockout-=t,this.holdingBreath=h&&this.intent.sprint&&this.breath>0&&this.breathLockout<=0,this.holdingBreath?(this.breath-=t,this.breath<=0&&(this.breathLockout=2.5)):this.breath=Math.min(ia,this.breath+t*.8),this.reloadPressed&&!r&&n.startReload()&&e.audio.reload(n.reloadDuration,n.def.reloadPerRound),this.reloadPressed=!1,n.justReloaded&&n.def.reloadPerRound&&n.state==="reloading"&&e.audio.reload(n.reloadDuration,!0),this.meleePressed&&this.meleeTimer<0&&!s&&this.throwTimer<0&&(this.meleeTimer=0,this.meleeDone=!1,n.cancelReload(),e.audio.melee()),this.meleePressed=!1,this.meleeTimer>=0){if(this.meleeTimer+=t,!this.meleeDone&&this.meleeTimer>.15){this.meleeDone=!0;const f=this.eyePosition(new T);e.melee(this,f,this.forward(new T))&&(this.viewPunch+=.5)}this.meleeTimer>kl&&(this.meleeTimer=-1)}if(this.grenadePressed&&this.grenades>0&&this.throwTimer<0&&!s&&this.meleeTimer<0&&(this.throwTimer=0,this.thrown=!1,n.cancelReload()),this.grenadePressed=!1,this.throwTimer>=0){if(this.throwTimer+=t,!this.thrown&&this.throwTimer>.28){this.thrown=!0,this.grenades--;const f=this.eyePosition(new T),d=this.forward(new T),b=d.clone().multiplyScalar(16).add(new T(0,3.5,0)).addScaledVector(this.velocity,.6);e.grenades.throw(this,f.addScaledVector(d,.4),b,3.2)}this.throwTimer>Hl&&(this.throwTimer=-1)}if(!r&&this.sprintOut>.12&&!this.controller.sliding){const f=n.tryFire(this.triggerDown);f==="fired"?this.shoot():f==="empty"&&(e.audio.dryFire(),n.startReload()&&e.audio.reload(n.reloadDuration,n.def.reloadPerRound))}else n.tryFire(!1);this.triggerPressed=!1,n.mag===0&&n.state==="ready"&&n.cooldown<=0&&!r&&n.reserve>0&&n.startReload()&&e.audio.reload(n.reloadDuration,n.def.reloadPerRound);const p=Math.min(1,t*28),m=this.pendingRecoilPitch*p,g=this.pendingRecoilYaw*p;if(this.pitch=Jt(this.pitch+m,-1.5,1.5),this.yaw+=g,this.pendingRecoilPitch-=m,this.pendingRecoilYaw-=g,this.sprayPitch+=m,n.sinceShot>n.interval*1.5+.06&&this.sprayPitch>0&&(this.recoverPitch+=this.sprayPitch*n.def.recoilRecover,this.sprayPitch=0),this.recoverPitch>0){const f=this.recoverPitch*Math.min(1,t*7);this.pitch-=f,this.recoverPitch-=f,this.recoverPitch<1e-4&&(this.recoverPitch=0)}this.viewPunch=fe(this.viewPunch,0,18,t);const _=this.controller.horizontalSpeed();if(this.grounded&&_>.5&&!this.controller.sliding){this.bobPhase+=t*_*1.9,this.bobAmp=fe(this.bobAmp,Jt(_/sr,0,1.6),8,t);const f=Math.floor(this.bobPhase/Math.PI);f!==this.lastStepPhase&&(this.lastStepPhase=f,this.crouching||e.audio.footstep(void 0,c?1:.6))}else this.bobAmp=fe(this.bobAmp,0,8,t);this.fovKick=fe(this.fovKick,c?1:this.controller.sliding?1.4:0,6,t);for(let f=this.damageIndicators.length-1;f>=0;f--)e.time-this.damageIndicators[f].time>1.6&&this.damageIndicators.splice(f,1);this.hitFlash.t>0&&(this.hitFlash.t-=t),this.scopeSwayT+=t}aimDirection(t){const e=this.scopeSway(),n=Math.cos(this.pitch+e.y);return t.set(-Math.sin(this.yaw+e.x)*n,Math.sin(this.pitch+e.y),-Math.cos(this.yaw+e.x)*n).normalize()}scopeSway(){if(!this.weapon.def.scope||this.adsT<.5)return{x:0,y:0};const e=this.scopeSwayT,n=(this.holdingBreath?.08:.55)*Pe*(this.crouching?.6:1)*(1+this.bobAmp);return{x:Math.sin(e*.9)*n+Math.sin(e*2.3)*n*.3,y:Math.sin(e*1.3)*n*.8}}shoot(){const t=this.session,e=this.weapon,n=e.def,s=this.eyePosition(new T),r=this.aimDirection(new T),a=this.controller.horizontalSpeed();let o=Jt(a/sr,0,1)*.8;this.grounded||(o+=1.5);let l=e.spread(this.adsT,o);this.crouching&&(l*=.85);const c=s.clone().addScaledVector(r,.9).add(new T(Math.cos(this.yaw),0,-Math.sin(this.yaw)).multiplyScalar(.12*(1-this.adsT))).add(new T(0,-.12*(1-this.adsT),0));t.fire(this,s,r,e,l,c);const h=1-this.adsT*.3,u=this.crouching?.82:1,p=Math.min(1,.6+e.sprayCount*.08);this.pendingRecoilPitch+=n.recoilUp*Pe*h*u*p,this.pendingRecoilYaw+=ft(-n.recoilSide,n.recoilSide*1.3)*Pe*h*u,this.recoverPitch=0,this.viewPunch+=n.recoilUp*.5*Pe,n.cycleAction==="bolt"&&e.mag>0&&t.audio.bolt(),n.cycleAction==="pump"&&e.mag>0&&t.audio.pump(),this.onShot?.(e)}onDamaged(t,e,n,s){e&&this.damageIndicators.push({from:e.clone(),time:this.session.time}),this.session.audio.hurt(),this.viewPunch+=.6*Pe}onKilled(){this.deathTime=0,this.controller.sprinting=!1}scavenge(){for(const t of this.weapons)t.reserve=Math.min(Math.round(t.def.reserve*1.5),t.reserve+Math.ceil(t.def.magSize*.5))}updateCamera(t,e,n,s){const r=this.position.y+this.eyeHeight();this.eyeY=Math.abs(r-this.eyeY)>2?r:fe(this.eyeY,r,18,e);let a=this.eyeY;const o=1-this.adsT*.8;a+=-Math.abs(Math.cos(this.bobPhase))*.035*this.bobAmp*o,a-=this.landDip*.12;let l=Math.sin(this.bobPhase)*.004*this.bobAmp*o+this.slideT*.06,c=this.viewPunch;if(!this.alive){const f=Math.min(1,this.deathTime/.8);a=this.position.y+.3+(1-f)*(this.eyeHeight()-.3),l+=f*.9,c-=f*.3}const h=this.scopeSway(),u=(Math.random()-.5)*s*.03,p=(Math.random()-.5)*s*.03;t.position.set(this.position.x+Math.cos(this.yaw)*Math.sin(this.bobPhase)*.02*this.bobAmp*o,a,this.position.z-Math.sin(this.yaw)*Math.sin(this.bobPhase)*.02*this.bobAmp*o),t.rotation.set(this.pitch+c+h.y+p,this.yaw+h.x+u,l,"YXZ");const m=l0(ge.fov+this.fovKick*6,n),g=1+(this.weapon.def.adsZoom-1)*this.adsT,_=c0(m,g);(Math.abs(t.fov-_)>.01||t.aspect!==n)&&(t.fov=_,t.aspect=n,t.updateProjectionMatrix())}viewModelState(){const t=this.switchTimer>0?this.pendingWeapon>=0?1-(this.switchTimer-ss)/zl:this.switchTimer/ss:0;return{weapon:this.weapon,adsT:this.adsT,sprintT:this.sprintT,bobPhase:this.bobPhase,bobAmp:this.bobAmp,lookDX:this.lookDX,lookDY:this.lookDY,lowerT:Jt(t,0,1),meleeT:this.meleeTimer>=0?this.meleeTimer/kl:-1,throwT:this.throwTimer>=0?this.throwTimer/Hl:-1,crouchT:this.crouchT,landDip:this.landDip,slideT:this.slideT,hidden:!this.alive||this.weapon.def.scope===!0&&this.adsT>.85}}currentSpread(){const t=this.controller.horizontalSpeed();let e=Jt(t/sr,0,1)*.8;return this.grounded||(e+=1.5),this.weapon.spread(this.adsT,e)*(this.crouching?.85:1)}get breathMax(){return ia}}const ni=.07,Y0=new ds(ni,10,8),q0=new xe({color:4016686,roughness:.6,metalness:.3});class $0{constructor(t){this.session=t,t.scene.add(this.group)}live=[];group=new se;throw(t,e,n,s){const r=new kt(Y0,q0);r.castShadow=!0,r.position.copy(e),this.group.add(r),this.live.push({mesh:r,pos:e.clone(),vel:n.clone(),fuse:s,thrower:t,lastBounce:0})}update(t){const e=this.session.world;for(let n=this.live.length-1;n>=0;n--){const s=this.live[n];if(s.fuse-=t,s.lastBounce-=t,s.fuse<=0){s.mesh.removeFromParent(),this.live.splice(n,1),this.session.explode(s.pos,s.thrower);continue}s.vel.y-=17*t;for(let r=0;r<3;r++){const a=(r===0?s.vel.x:r===1?s.vel.y:s.vel.z)*t;if(a===0)continue;if(s.pos.setComponent(r,s.pos.getComponent(r)+a),e.overlap(s.pos.x-ni,s.pos.y-ni,s.pos.z-ni,s.pos.x+ni,s.pos.y+ni,s.pos.z+ni)){s.pos.setComponent(r,s.pos.getComponent(r)-a);const l=s.vel.getComponent(r);s.vel.setComponent(r,-l*.35);for(let c=0;c<3;c++)c!==r&&s.vel.setComponent(c,s.vel.getComponent(c)*.7);Math.abs(l)>2&&s.lastBounce<=0&&(this.session.audio.grenadeBounce(s.pos),s.lastBounce=.1)}}s.mesh.position.copy(s.pos),s.mesh.rotation.x+=s.vel.length()*t*3}}dispose(){this.group.removeFromParent(),this.live.length=0}}function Z0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ve;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const u=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Gl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const m=[];for(let _=0;_<a[h].length;++_)m.push(a[h][_][p]);const g=Gl(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Gl(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new $e(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let p=0,m=h.count;p<m;p++)for(let g=0;g<e;g++){const _=h.getComponent(p,g);o.setComponent(p+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const $s=.38,j0=1.7,K0=.42;class vo{nodes=[];static build(t,e,n,s){const r=new vo,a=[];for(let d=e.minX+n/2;d<e.maxX;d+=n)for(let b=e.minZ+n/2;b<e.maxZ;b+=n)a.push({x:d,z:b});a.push(...s);const l=a.filter(d=>!Yc(t,d.x,d.z)).map(d=>({x:d.x,z:d.z,neighbors:[],cover:!1})),c=n*1.5,h=new Map;l.forEach((d,b)=>{const w=`${Math.floor(d.x/c)},${Math.floor(d.z/c)}`;let x=h.get(w);x||h.set(w,x=[]),x.push(b)});const u=n*1.5;l.forEach((d,b)=>{const w=Math.floor(d.x/c),x=Math.floor(d.z/c);for(let N=-1;N<=1;N++)for(let R=-1;R<=1;R++){const A=h.get(`${w+N},${x+R}`);if(A)for(const L of A){if(L<=b)continue;const S=l[L],M=Math.hypot(S.x-d.x,S.z-d.z);M>u||M<.3||J0(t,d.x,d.z,S.x,S.z)&&(d.neighbors.push(L),S.neighbors.push(b))}}});const p=new Int32Array(l.length).fill(-1);let m=-1,g=0,_=0;for(let d=0;d<l.length;d++){if(p[d]!==-1)continue;let b=0;const w=[d];for(p[d]=_;w.length;){const x=w.pop();b++;for(const N of l[x].neighbors)p[N]===-1&&(p[N]=_,w.push(N))}b>g&&(g=b,m=_),_++}const f=new Int32Array(l.length).fill(-1);l.forEach((d,b)=>{p[b]===m&&(f[b]=r.nodes.length,r.nodes.push(d))});for(const d of r.nodes)d.neighbors=d.neighbors.map(b=>f[b]).filter(b=>b>=0);for(const d of r.nodes)d.cover=t.overlap(d.x-1.1,.9,d.z-1.1,d.x+1.1,1,d.z+1.1)!==null;return r}nearest(t,e){let n=-1,s=1/0;for(let r=0;r<this.nodes.length;r++){const a=this.nodes[r],o=(a.x-t)**2+(a.z-e)**2;o<s&&(s=o,n=r)}return n}within(t,e,n){const s=[],r=n*n;for(let a=0;a<this.nodes.length;a++){const o=this.nodes[a];(o.x-t)**2+(o.z-e)**2<=r&&s.push(a)}return s}random(){return Math.floor(Math.random()*this.nodes.length)}findPath(t,e){if(t<0||e<0)return null;if(t===e)return[t];const n=this.nodes.length,s=new Float32Array(n).fill(1/0),r=new Int32Array(n).fill(-1),a=new Uint8Array(n),o=new Q0,l=this.nodes[e],c=h=>Math.hypot(this.nodes[h].x-l.x,this.nodes[h].z-l.z);for(s[t]=0,o.push(t,c(t));o.size;){const h=o.pop();if(h===e){const p=[h];let m=h;for(;r[m]!==-1;)m=r[m],p.push(m);return p.reverse()}if(a[h])continue;a[h]=1;const u=this.nodes[h];for(const p of u.neighbors){if(a[p])continue;const m=this.nodes[p],g=s[h]+Math.hypot(m.x-u.x,m.z-u.z);g<s[p]&&(s[p]=g,r[p]=h,o.push(p,g+c(p)))}}return null}}function Yc(i,t,e){return i.overlap(t-$s,K0,e-$s,t+$s,j0,e+$s)!==null}function J0(i,t,e,n,s){const r=Math.hypot(n-t,s-e),a=Math.max(2,Math.ceil(r/.3));for(let o=1;o<a;o++){const l=o/a;if(Yc(i,t+(n-t)*l,e+(s-e)*l))return!1}return!0}class Q0{items=[];prio=[];get size(){return this.items.length}push(t,e){const n=this.items,s=this.prio;n.push(t),s.push(e);let r=n.length-1;for(;r>0;){const a=r-1>>1;if(s[a]<=s[r])break;[n[r],n[a]]=[n[a],n[r]],[s[r],s[a]]=[s[a],s[r]],r=a}}pop(){const t=this.items,e=this.prio,n=t[0],s=t.pop(),r=e.pop();if(t.length){t[0]=s,e[0]=r;let a=0;for(;;){const o=a*2+1,l=o+1;let c=a;if(o<t.length&&e[o]<e[c]&&(c=o),l<t.length&&e[l]<e[c]&&(c=l),c===a)break;[t[a],t[c]]=[t[c],t[a]],[e[a],e[c]]=[e[c],e[a]],a=c}}return n}}const Nn=6,Jn=.001;class tg{constructor(t){this.boxes=t,this.stamp=new Uint32Array(t.length),t.forEach((e,n)=>{const s=Math.floor(e.minX/Nn),r=Math.floor(e.maxX/Nn),a=Math.floor(e.minZ/Nn),o=Math.floor(e.maxZ/Nn);if((r-s+1)*(o-a+1)>48){this.big.push(n);return}for(let l=s;l<=r;l++)for(let c=a;c<=o;c++){const h=Vl(l,c);let u=this.grid.get(h);u||this.grid.set(h,u=[]),u.push(n)}})}grid=new Map;big=[];stamp;stampId=1;scratch=[];query(t,e,n,s){const r=this.scratch;r.length=0,this.stampId++,this.stampId>4294967280&&(this.stamp.fill(0),this.stampId=1);const a=this.stampId;for(const u of this.big)this.stamp[u]=a,r.push(u);const o=Math.floor(t/Nn),l=Math.floor(n/Nn),c=Math.floor(e/Nn),h=Math.floor(s/Nn);for(let u=o;u<=l;u++)for(let p=c;p<=h;p++){const m=this.grid.get(Vl(u,p));if(m)for(const g of m)this.stamp[g]!==a&&(this.stamp[g]=a,r.push(g))}return r}overlap(t,e,n,s,r,a){const o=this.query(t,n,s,a);for(const l of o){const c=this.boxes[l];if(t<c.maxX&&s>c.minX&&e<c.maxY&&r>c.minY&&n<c.maxZ&&a>c.minZ)return c}return null}bodyOverlaps(t,e,n,s,r){return this.overlap(t-s,e,n-s,t+s,e+r,n+s)!==null}moveBody(t,e,n,s,r){const a=t.pos,o=t.halfW,l=t.height,c=t.grounded;let h=!1;a.y+=n,t.grounded=!1;{const u=this.query(a.x-o,a.z-o,a.x+o,a.z+o);let p=-1/0,m=1/0;for(const g of u){const _=this.boxes[g];a.x-o<_.maxX&&a.x+o>_.minX&&a.z-o<_.maxZ&&a.z+o>_.minZ&&a.y<_.maxY&&a.y+l>_.minY&&(n<=0?p=Math.max(p,_.maxY):m=Math.min(m,_.minY))}p>-1/0?(a.y=p,t.vel.y<0&&(t.vel.y=0),t.grounded=!0):m<1/0&&(a.y=m-l-Jn,t.vel.y>0&&(t.vel.y=0))}for(let u=0;u<2;u++){const p=u===0?e:s;if(p===0)continue;u===0?a.x+=p:a.z+=p;const m=this.query(a.x-o,a.z-o,a.x+o,a.z+o);for(const g of m){const _=this.boxes[g];if(!(a.x-o<_.maxX&&a.x+o>_.minX&&a.y<_.maxY&&a.y+l>_.minY&&a.z-o<_.maxZ&&a.z+o>_.minZ))continue;const f=_.maxY-a.y;if((c||t.grounded)&&f>0&&f<=r&&!this.bodyOverlaps(a.x,_.maxY+Jn,a.z,o,l)){a.y=_.maxY,t.grounded=!0;continue}h=!0,u===0?(a.x=p>0?_.minX-o-Jn:_.maxX+o+Jn,t.vel.x=0):(a.z=p>0?_.minZ-o-Jn:_.maxZ+o+Jn,t.vel.z=0)}}if(!t.grounded&&c&&t.vel.y<=0){const u=this.groundBelow(a.x,a.y+Jn,a.z,o);a.y-u<=r&&(a.y=u,t.grounded=!0)}return{hitWall:h}}groundBelow(t,e,n,s){let r=-1/0;const a=this.query(t-s,n-s,t+s,n+s);for(const o of a){const l=this.boxes[o];t-s<l.maxX&&t+s>l.minX&&n-s<l.maxZ&&n+s>l.minZ&&l.maxY<=e&&(r=Math.max(r,l.maxY))}return r}raycast(t,e,n,s,r,a,o){const l=t+s*o,c=n+a*o,h=this.query(Math.min(t,l),Math.min(n,c),Math.max(t,l),Math.max(n,c));let u=o,p=null;const m=1/(s||1e-9),g=1/(r||1e-9),_=1/(a||1e-9);for(const f of h){const d=this.boxes[f];let b=(d.minX-t)*m,w=(d.maxX-t)*m,x=Math.min(b,w),N=Math.max(b,w),R=0;b=(d.minY-e)*g,w=(d.maxY-e)*g;let A=Math.min(b,w);A>x&&(x=A,R=1),N=Math.min(N,Math.max(b,w)),b=(d.minZ-n)*_,w=(d.maxZ-n)*_,A=Math.min(b,w),A>x&&(x=A,R=2),N=Math.min(N,Math.max(b,w)),!(N<x||N<0||x<0||x>=u)&&(u=x,p={dist:x,nx:R===0?-Math.sign(s):0,ny:R===1?-Math.sign(r):0,nz:R===2?-Math.sign(a):0})}return p}lineClear(t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,a=Math.hypot(n,s,r);return a<1e-4?!0:this.raycast(t.x,t.y,t.z,n/a,s/a,r/a,a)===null}}function Vl(i,t){return(i+2048)*4096+(t+2048)}const eg={day:{top:4882372,horizon:14279918,ground:12167304,sun:16773840},dusk:{top:2899563,horizon:15769712,ground:4864565,sun:16756832},night:{top:263693,horizon:1317418,ground:460812,sun:8952268}};class ng{constructor(t,e){this.def=t;const n=t.env;e.add(this.group),e.fog=new uo(n.fogColor,n.fogDensity);const s=new Bc(n.hemiSky,n.hemiGround,n.hemiIntensity);this.group.add(s),this.sun=new kc(n.sunColor,n.sunIntensity);const r=new T(...n.sunDir).normalize();if(this.sun.position.copy(r).multiplyScalar(120),this.sun.target.position.set(0,0,0),this.group.add(this.sun,this.sun.target),ge.shadows){this.sun.castShadow=!0;const f=this.sun.shadow;f.mapSize.set(4096,4096);const d=t.half+8;f.camera.left=-d,f.camera.right=d,f.camera.top=d,f.camera.bottom=-d,f.camera.near=1,f.camera.far=300,f.bias=-4e-4,f.normalBias=.04}for(const f of t.lights){const d=new _o(f.color,f.intensity,f.distance,1.6);d.position.set(f.x,f.y,f.z),this.group.add(d);const b=new Wi({color:f.color});this.ownedMaterials.push(b);const w=new ds(.18,8,6);this.geometries.push(w);const x=new kt(w,b);x.position.set(f.x,f.y-.1,f.z),this.group.add(x)}const a=new Map,o=(f,d)=>{let b=a.get(f);b||a.set(f,b=[]),b.push(d)};for(const f of t.boxes){if(f.mat==="invisible")continue;const d=f.max[0]-f.min[0],b=f.max[1]-f.min[1],w=f.max[2]-f.min[2],x=new ue(d,b,w);x.translate((f.min[0]+f.max[0])/2,(f.min[1]+f.max[1])/2,(f.min[2]+f.max[2])/2),Wl(x,Nl(f.mat)),o(f.mat,x)}for(const f of t.cylinders){const d=new vr(f.r,f.r,f.h,20,1);d.translate(f.x,f.y+f.h/2,f.z);const b=d.getAttribute("uv");for(let w=0;w<b.count;w++)b.setXY(w,b.getX(w)*f.r*2,b.getY(w)*(f.h/3));o(f.mat,d)}for(const[f,d]of a){const b=Z0(d,!1);if(d.forEach(x=>x.dispose()),!b)continue;this.geometries.push(b);const w=new kt(b,Fl(f));w.castShadow=!0,w.receiveShadow=!0,this.group.add(w)}const l=t.half*2+60,c=new ci(l,l);c.rotateX(-Math.PI/2),Wl(c,Nl(t.ground)),this.geometries.push(c);const h=new kt(c,Fl(t.ground));if(h.receiveShadow=!0,this.group.add(h),n.water){const f=new ci(1200,800);f.rotateX(-Math.PI/2),f.translate(0,.05,n.water.z+400),this.geometries.push(f);const d=new xe({color:n.water.color,roughness:.12,metalness:.4});this.ownedMaterials.push(d),this.group.add(new kt(f,d))}const u=eg[n.sky],p=new Tn({uniforms:{top:{value:new Ft(u.top)},horizon:{value:new Ft(u.horizon)},ground:{value:new Ft(u.ground)},sunColor:{value:new Ft(u.sun)},sunDir:{value:r},night:{value:n.sky==="night"?1:0}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,fragmentShader:`
        uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; uniform vec3 sunColor; uniform vec3 sunDir;
        uniform float night;
        varying vec3 vDir;
        float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
          col = mix(col, ground, smoothstep(0.0, -0.15, h));
          float s = max(dot(d, normalize(sunDir)), 0.0);
          col += sunColor * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.25 * (1.0 - night));
          if (night > 0.5 && h > 0.05) {
            vec3 cell = floor(d * 300.0);
            float st = step(0.9975, hash(cell));
            col += vec3(st) * 0.9 * smoothstep(0.05, 0.4, h);
          }
          gl_FragColor = vec4(col, 1.0);
        }`,side:Te,depthWrite:!1,fog:!1});this.ownedMaterials.push(p);const m=new ds(500,32,16);this.geometries.push(m),this.sky=new kt(m,p),this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.group.add(this.sky);const g=t.boxes.filter(f=>f.collide).map(f=>({minX:f.min[0],minY:f.min[1],minZ:f.min[2],maxX:f.max[0],maxY:f.max[1],maxZ:f.max[2]}));g.push({minX:-1e3,minY:-5,minZ:-1e3,maxX:1e3,maxY:0,maxZ:1e3}),this.world=new tg(g);const _=t.half-1;this.nav=vo.build(this.world,{minX:-_,minZ:-_,maxX:_,maxZ:_},2.5,t.navHints)}group=new se;world;nav;sun;sky;geometries=[];ownedMaterials=[];update(t){this.sky.position.copy(t.position)}dispose(){this.group.removeFromParent();for(const t of this.geometries)t.dispose();for(const t of this.ownedMaterials)t.dispose();this.sun.shadow.map&&this.sun.shadow.map.dispose()}}function Wl(i,t){const e=i.getAttribute("position"),n=i.getAttribute("normal"),s=i.getAttribute("uv");for(let r=0;r<e.count;r++){const a=Math.abs(n.getX(r)),o=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r)),c=e.getX(r),h=e.getY(r),u=e.getZ(r);o>=a&&o>=l?s.setXY(r,c/t,u/t):a>=l?s.setXY(r,u/t,h/t):s.setXY(r,c/t,h/t)}s.needsUpdate=!0}const rr={recruit:{label:"Recruit",reaction:.8,aimError:4.5,headshotChance:.04,damageScale:.5,turnRate:4,burst:[2,4]},regular:{label:"Regular",reaction:.5,aimError:2.8,headshotChance:.12,damageScale:.8,turnRate:6,burst:[3,5]},veteran:{label:"Veteran",reaction:.3,aimError:1.7,headshotChance:.22,damageScale:1,turnRate:9,burst:[3,7]}},Qn=new T,Zs=new T,js=new T,Fn=new T,Xl=new T,Yl=new T(0,1,0);class ig{constructor(t,e,n){this.audio=e,this.camera=new Fe(70,n,.05,600),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.level=new ng(t.map,this.scene),this.effects=new F0(this.scene,t.map.env.sky==="night"),this.grenades=new $0(this),this.difficulty=t.difficulty,this.diff=rr[t.difficulty],this.sightRange=t.map.env.sky==="night"?48:t.map.env.sky==="dusk"?70:85,this.player=new X0(t.loadout,this),this.actors.push(this.player),this.mode=t.mode,this.mode.attach(this)}scene=new fo;camera;level;effects;grenades;events=new w0;player;bots=[];actors=[];mode;diff;difficulty;sightRange;time=0;shake=0;get world(){return this.level.world}get nav(){return this.level.nav}start(){this.mode.setup(),this.audio.startAmbience(this.level.def.env.ambience)}isEnemy(t,e){return t!==e&&this.mode.isEnemy(t,e)}update(t){this.time+=t,this.player.update(t);for(const e of this.bots)e.update(t);this.grenades.update(t),this.effects.update(t),this.mode.update(t),this.shake=Math.max(0,this.shake-t*2.5)}spawnBot(t){const e=new v0(this,t);return this.bots.push(e),this.actors.push(e),e}removeBot(t){t.dispose(),this.bots.splice(this.bots.indexOf(t),1),this.actors.splice(this.actors.indexOf(t),1)}pickSpawn(t,e){let n=t[0],s=-1/0;for(const r of t){let a=200,o=!1;Qn.set(r[0],1.6,r[1]);for(const c of this.actors){if(!c.alive||c===e||e&&!this.isEnemy(c,e))continue;const h=Math.hypot(c.position.x-r[0],c.position.z-r[1]);a=Math.min(a,h),h<50&&this.world.lineClear(Qn,c.eyePosition(Zs))&&(o=!0)}const l=a-(o?60:0)+ft(0,8);l>s&&(s=l,n=r)}return new T(n[0]+ft(-.8,.8),.05,n[1]+ft(-.8,.8))}yawTowardCenter(t){return Math.atan2(t.x,t.z)}fire(t,e,n,s,r,a){const o=s.def;t.stats.shots++,this.audio.shot(o.kind,t.isPlayer?void 0:t.position),a&&!t.isPlayer?(this.effects.muzzleSprite(a),this.effects.muzzleLight(a,4)):t.isPlayer&&this.effects.muzzleLight(js.copy(e).addScaledVector(n,1),5),Fn.crossVectors(n,Yl),Fn.lengthSq()<1e-6&&Fn.set(1,0,0),Fn.normalize(),Xl.crossVectors(Fn,n).normalize();let l=!1;for(let c=0;c<o.pellets;c++){const h=Math.tan(r*Math.sqrt(Math.random())),u=Math.random()*Math.PI*2,p=Qn.copy(n).addScaledVector(Fn,Math.cos(u)*h).addScaledVector(Xl,Math.sin(u)*h).normalize().clone(),m=this.trace(e,p,o.range,t),g=Zs.copy(e).addScaledVector(p,m.dist);if(a&&(c===0||o.pellets>1)&&(!t.isPlayer||Math.random()<.35)&&this.effects.tracer(a,g),m.actor){const _=S0(o,m.dist,m.zone)*t.damageScale;this.effects.blood(g,p),this.audio.impact(g,!0),this.isEnemy(t,m.actor)&&(l||t.stats.hits++,l=!0,this.dealDamage(m.actor,_,t,o.name,m.zone,e))}else m.dist<o.range&&(this.effects.bulletImpact(g,m.normal),c===0&&this.audio.impact(g,!1));if(!t.isPlayer&&this.player.alive&&m.actor!==this.player){const _=this.player.eyePosition(js),f=Fn.copy(_).sub(e).dot(p);if(f>2&&f<m.dist){const d=e.clone().addScaledVector(p,f);d.distanceTo(_)<1.6&&this.audio.whiz(d)}Fn.crossVectors(n,Yl).normalize()}}for(const c of this.bots)c!==t&&c.alive&&c.hearShot(t,e)}trace(t,e,n,s){const r=this.world.raycast(t.x,t.y,t.z,e.x,e.y,e.z,n);let a=r?r.dist:n;const o=r?new T(r.nx,r.ny,r.nz):new T(0,1,0);let l=null,c=null;for(const h of this.actors){if(h===s||!h.alive)continue;const u=h.rayHit(t,e,a);u&&u.t<a&&(a=u.t,l=h,c=u.zone)}return{dist:a,normal:o,actor:l,zone:c}}dealDamage(t,e,n,s,r,a){if(!t.alive||t.spawnProtection>0||e<=0)return;t.health-=e,t.lastDamageTime=this.time,t.onDamaged(e,a,n,r);const o=t.health<=0;n&&this.events.emit("hit",{attacker:n,victim:t,damage:e,zone:r,killed:o}),o&&this.kill(t,n,s,r==="head",a)}kill(t,e,n,s,r){t.health=0,t.alive=!1,t.stats.deaths++,e&&e!==t&&(e.stats.kills++,e.stats.score+=100+(s?50:0),s&&e.stats.headshots++);const a=r?Qn.copy(t.position).sub(r).setY(0).normalize():Qn.set(0,0,1);t.onKilled(a),this.events.emit("kill",{killer:e,victim:t,weapon:n,headshot:s}),this.mode.onKill(t,e)}explode(t,e){this.effects.explosion(t),this.audio.explosion(t);const n=7.5,s=js.copy(t).setY(t.y+.3);for(const a of[...this.actors]){if(!a.alive)continue;const o=a.chestPosition(new T),l=o.distanceTo(s);if(l>n||!this.world.lineClear(s,o)&&!this.world.lineClear(s,a.eyePosition(new T))||e&&a!==e&&!this.isEnemy(e,a))continue;const c=b0(l,n,160)*(e?e.damageScale:1);this.dealDamage(a,c,e,"Frag",null,t)}const r=this.player.position.distanceTo(t);r<25&&(this.shake=Math.min(1.5,this.shake+(1-r/25)*1.5));for(const a of this.bots)e&&a.alive&&a.hearShot(e,t)}melee(t,e,n){let s=null,r=2.1;for(const l of this.actors){if(!l.alive||!this.isEnemy(t,l))continue;const c=l.chestPosition(Qn),h=Zs.copy(c).sub(e),u=h.length();u>r||h.normalize().dot(n)<.55||this.world.lineClear(e,c)&&(s=l,r=u)}if(!s)return!1;const o=s.forward(Qn).setY(0).normalize().dot(Zs.copy(n).setY(0).normalize())>.5;return this.dealDamage(s,o?150:70,t,"Melee","torso",e),this.effects.blood(s.chestPosition(js),n),!0}enemiesOf(t){return this.actors.filter(e=>e.alive&&this.isEnemy(t,e))}message(t,e){this.events.emit("message",{text:t,color:e})}dispose(){this.audio.stopAmbience();for(const t of[...this.bots])t.dispose();this.bots.length=0,this.grenades.dispose(),this.effects.dispose(),this.level.dispose(),this.events.clear()}}class qc{session;result=null;attach(t){this.session=t}onKill(t,e){}isEnemy(t,e){return t.team!==e.team}}function $c(){return{objective:null,objectiveDetail:null,marker:null,score:null,timer:null,progress:null,prompt:null,respawnIn:null}}function fr(i){const t=Math.max(0,Math.ceil(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Zc(i){return{name:i.name,kills:i.stats.kills,deaths:i.stats.deaths,score:i.stats.score,isPlayer:i.isPlayer,alive:i.alive}}const os=["Hale","Okafor","Brandt","Reyes","Lindqvist","Tanaka","Mercer","Duval","Ashby","Novak","Quill","Sato"],ls=["Vesko","Marek","Dagan","Ilyan","Corvo","Barsk","Teodor","Ruslan","Kade","Zorin","Petrak","Volen"];function ar(){const i=Math.random();return i<.45?"kestrel":i<.75?"harrow":i<.88?"longreach":"brute"}const sa=4;class sg extends qc{constructor(t){super(),this.cfg=t,this.title=t.variant==="tdm"?"Team Deathmatch":"Free-for-All",this.timeLeft=t.timeLimit}title;timeLeft;scores=[0,0];playerDeadTime=0;ended=!1;setup(){const t=this.session,e=t.level.def.spawns,n=t.player,s=t.pickSpawn(this.cfg.variant==="tdm"?e.a:e.ffa,n);n.spawn(s,t.yawTowardCenter(s)),n.damageScale=1;const r=t.diff.damageScale;if(this.cfg.variant==="tdm"){for(let a=0;a<this.cfg.size-1;a++){const o=t.pickSpawn(e.a,null);t.spawnBot({name:os[a%os.length],team:0,weapon:ar(),behavior:"roam",position:o,yaw:t.yawTowardCenter(o),style:Wc,nameTag:"#8ec5ff",damageScale:r})}for(let a=0;a<this.cfg.size;a++){const o=t.pickSpawn(e.b,null);t.spawnBot({name:ls[a%ls.length],team:1,weapon:ar(),behavior:"roam",position:o,yaw:t.yawTowardCenter(o),style:Ja,damageScale:r})}}else{const a=[...os,...ls].sort(()=>Math.random()-.5);for(let o=0;o<this.cfg.size;o++){const l=t.pickSpawn(e.ffa,null);t.spawnBot({name:a[o%a.length],team:o+1,weapon:ar(),behavior:"roam",position:l,yaw:t.yawTowardCenter(l),style:Ja,damageScale:r})}}}update(t){const e=this.session;if(this.ended)return;this.timeLeft-=t;const n=e.level.def.spawns;for(const r of e.bots)!r.alive&&r.deadFor>sa&&this.respawnBot(r);const s=e.player;if(!s.alive&&(this.playerDeadTime+=t,this.playerDeadTime>sa)){const r=e.pickSpawn(this.cfg.variant==="tdm"?n.a:n.ffa,s);s.spawn(r,e.yawTowardCenter(r)),this.playerDeadTime=0}this.timeLeft<=0&&this.finish()}respawnBot(t){const e=this.session,n=e.level.def.spawns,s=this.cfg.variant==="ffa"?n.ffa:t.team===0?n.a:n.b,r=e.pickSpawn(s,t);t.respawn(r,e.yawTowardCenter(r))}onKill(t,e){if(this.ended)return;const n=this.session;e&&e!==t?(this.cfg.variant==="tdm"&&this.scores[e.team]++,e.isPlayer&&n.player.scavenge()):this.cfg.variant==="tdm"&&t.team<=1&&(this.scores[t.team]=Math.max(0,this.scores[t.team]-1)),this.cfg.variant==="tdm"?(this.scores[0]>=this.cfg.scoreLimit||this.scores[1]>=this.cfg.scoreLimit)&&this.finish():e&&e.stats.kills>=this.cfg.scoreLimit&&this.finish()}finish(){if(this.ended)return;this.ended=!0;const t=this.session;if(this.cfg.variant==="tdm"){const[e,n]=this.scores,s=e>n;this.result={victory:s,title:e===n?"DRAW":s?"VICTORY":"DEFEAT",subtitle:`Rangers ${e} - ${n} Coalition`}}else{const e=[...t.actors].sort((s,r)=>r.stats.kills-s.stats.kills),n=e.indexOf(t.player)+1;this.result={victory:n===1,title:n===1?"VICTORY":`${rg(n)} PLACE`,subtitle:`Winner: ${e[0].name} (${e[0].stats.kills} kills)`}}}hud(){const t=$c();t.timer=fr(this.timeLeft);const e=this.session;if(this.cfg.variant==="tdm")t.score={a:this.scores[0],b:this.scores[1],labelA:"RANGERS",labelB:"COALITION",limit:this.cfg.scoreLimit},t.objective=`Team Deathmatch: first team to ${this.cfg.scoreLimit} kills wins`;else{const n=[...e.actors].sort((a,o)=>o.stats.kills-a.stats.kills),s=n[0],r=s===e.player?n[1]:s;t.score={a:e.player.stats.kills,b:r?.stats.kills??0,labelA:"YOU",labelB:r?.name.toUpperCase()??"-",limit:this.cfg.scoreLimit},t.objective=`Free-for-All: first to ${this.cfg.scoreLimit} kills wins`}return e.player.alive||(t.respawnIn=Math.max(0,sa-this.playerDeadTime)),t}scoreboard(){const t=this.session,e=n=>n.map(Zc).sort((s,r)=>r.score-s.score||r.kills-s.kills);return this.cfg.variant==="tdm"?[{name:"Ashgrove Rangers",color:"#5aa2ff",score:this.scores[0],rows:e(t.actors.filter(n=>n.team===0))},{name:"Veldt Coalition",color:"#ff5a4a",score:this.scores[1],rows:e(t.actors.filter(n=>n.team===1))}]:[{name:"Free-for-All",color:"#e8c860",score:null,rows:e(t.actors)}]}}function rg(i){const t=["th","st","nd","rd"],e=i%100;return i+(t[(e-20)%10]||t[e]||t[0])}class ag extends qc{constructor(t){super(),this.mission=t,this.title=t.title}title;index=0;objTime=0;interactProgress=0;wavesSpawned=new Set;failTimer=-1;elapsed=0;nameIdx=0;groupHomes=new Map;get objective(){return this.mission.objectives[this.index]??null}get objectiveIndex(){return this.index}setup(){const t=this.session,e=this.mission,n=new T(e.playerStart[0],.05,e.playerStart[1]),s=this.objectivePosition(e.objectives[0])??new T,r=Math.atan2(-(s.x-n.x),-(s.z-n.z));t.player.spawn(n,r),t.player.spawnProtection=0,e.allies.forEach(([a,o],l)=>{const c=t.spawnBot({name:os[l%os.length],team:0,weapon:l%2?"harrow":"kestrel",behavior:"follow",position:this.safePos(a,o),yaw:r,style:Wc,nameTag:"#8ec5ff",damageScale:.6});c.maxHealth=c.health=180});for(const a of e.groups)this.spawnGroup(a);this.beginObjective()}safePos(t,e){const n=this.session;if(!n.world.bodyOverlaps(t,.05,e,us,sn))return new T(t,.05,e);const s=n.nav.nodes[n.nav.nearest(t,e)];return new T(s.x,.05,s.z)}spawnGroup(t){const e=this.session,n=[];for(const[s,r]of t.points){const a=this.safePos(s,r);n.push(a.clone());const o=e.player.position.clone().sub(a);e.spawnBot({name:ls[this.nameIdx++%ls.length],team:1,weapon:t.weapons?t.weapons[n.length%t.weapons.length]:ar(),behavior:t.behavior,position:a,yaw:t.behavior==="guard"?Math.atan2(-o.x,-o.z)+(Math.random()-.5)*1.5:Math.random()*Math.PI*2,style:Ja,group:t.id,radius:t.radius,damageScale:e.diff.damageScale})}this.groupHomes.set(t.id,[...this.groupHomes.get(t.id)??[],...n])}beginObjective(){const t=this.objective;if(this.objTime=0,this.interactProgress=0,this.wavesSpawned.clear(),!!t){for(const e of t.spawn??[])this.spawnGroup(e);this.session.message(`New objective: ${t.text}`,"#ffd77a"),this.session.audio.beep(660)}}complete(){if(this.session.audio.beep(990,.2),this.session.message("Objective complete","#8ef58e"),this.index++,this.index>=this.mission.objectives.length){this.result={victory:!0,title:"MISSION COMPLETE",subtitle:this.mission.outro};return}this.beginObjective()}groupAlive(t){return this.session.bots.filter(e=>e.alive&&e.group!==void 0&&t.includes(e.group))}inZone(t,e){const n=this.session.level.def.zones[t];return!!n&&Math.hypot(e.position.x-n.x,e.position.z-n.z)<=n.r}objectivePosition(t){if(!t)return null;const e=this.session.level.def.zones;if(t.type==="eliminate"){const s=this.session?this.groupAlive(t.groups):[],r=this.session.player.position;if(s.length&&s.length<=3)return s.reduce((c,h)=>c.position.distanceTo(r)<h.position.distanceTo(r)?c:h).position.clone().setY(1.2);const a=t.groups.flatMap(l=>this.groupHomes.get(l)??[]);if(!a.length)return null;const o=new T;return a.forEach(l=>o.add(l)),o.divideScalar(a.length).setY(1.2)}const n=e[t.zone];return n?new T(n.x,1.2,n.z):null}update(t){const e=this.session;if(this.result)return;if(this.elapsed+=t,this.objTime+=t,!e.player.alive){this.failTimer<0&&(this.failTimer=0),this.failTimer+=t,this.failTimer>2.2&&(this.result={victory:!1,title:"MISSION FAILED",subtitle:"You were killed in action."});return}for(const s of[...e.bots])!s.alive&&s.deadFor>20&&e.removeBot(s);const n=this.objective;if(n)switch(n.type){case"reach":this.inZone(n.zone,e.player)&&this.complete();break;case"eliminate":this.groupAlive(n.groups).length===0&&this.complete();break;case"interact":this.inZone(n.zone,e.player)&&e.player.interactHeld&&(this.interactProgress+=t,this.interactProgress>=n.seconds&&this.complete());break;case"defend":n.waves.forEach((s,r)=>{!this.wavesSpawned.has(r)&&this.objTime>=s.at&&(this.wavesSpawned.add(r),this.spawnGroup(s.group),e.message("Enemy reinforcements incoming!","#ff8a7a"))}),this.objTime>=n.seconds&&this.complete();break}}onKill(t,e){e?.isPlayer&&this.session.player.scavenge()}hud(){const t=$c(),e=this.objective;if(t.timer=fr(this.elapsed),!e)return t;t.objective=e.text;const n=this.objectivePosition(e);return n&&(t.marker={pos:n,label:e.type==="defend"?"DEFEND":e.type==="eliminate"?"TARGETS":e.type==="interact"?"INTERACT":"GOTO"}),e.type==="eliminate"&&(t.objectiveDetail=`${this.groupAlive(e.groups).length} hostiles remaining`),e.type==="interact"&&(this.inZone(e.zone,this.session.player)&&(t.prompt=e.prompt),this.interactProgress>0&&(t.progress={label:e.text,value:this.interactProgress/e.seconds})),e.type==="defend"&&(t.progress={label:"Time remaining",value:this.objTime/e.seconds},t.objectiveDetail=`${fr(e.seconds-this.objTime)} remaining`),t}scoreboard(){const t=this.session;return[{name:"Ashgrove Rangers",color:"#5aa2ff",score:null,rows:t.actors.filter(e=>e.team===0).map(Zc)},{name:"Hostiles remaining",color:"#ff5a4a",score:t.bots.filter(e=>e.team===1&&e.alive).length,rows:[]}]}stepsTotal(){return this.mission.objectives.length}}const en=[{id:"m1",title:"Dust and Static",location:"Dustline, Veldt border region, 0640 hrs",map:"dustline",briefing:["The Veldt Coalition has taken over the Dustline radio tower and is using it to coordinate artillery across the border.","Your fireteam will clear the market street, take the tower compound and plant an uplink relay so Ashgrove intelligence can tap their network.","Expect militia in the buildings on both sides of the street. Use the windows and keep moving."],playerStart:[-54,0],allies:[[-55,-2.5],[-55,2.5]],groups:[{id:"street",behavior:"patrol",points:[[-26,2],[-2,-2],[10,3],[24,1]],radius:10},{id:"houses",behavior:"guard",points:[[-13,-18],[-14,18],[14,-16],[12,18],[-36,-16]]},{id:"tower",behavior:"guard",points:[[38,-40],[44,-38],[34,-44],[48,-46],[40,-50],[30,-36]]}],objectives:[{type:"eliminate",groups:["street","houses"],text:"Clear the market street"},{type:"reach",zone:"tower",text:"Breach the radio tower compound"},{type:"eliminate",groups:["tower"],text:"Eliminate the tower garrison"},{type:"interact",zone:"tower",seconds:5,text:"Plant the uplink relay",prompt:"Hold [E] to plant the relay"},{type:"defend",zone:"tower",seconds:60,text:"Defend the relay while it transmits",waves:[{at:4,group:{id:"w1",behavior:"assault",points:[[54,10],[52,-6],[56,20]]}},{at:24,group:{id:"w2",behavior:"assault",points:[[16,-54],[8,-50],[2,-56]]}},{at:42,group:{id:"w3",behavior:"assault",points:[[55,-10],[50,6],[54,16],[56,-22]]}}]},{type:"reach",zone:"extract",text:"Reach the extraction helipad",spawn:[{id:"pursuit",behavior:"assault",points:[[50,0],[52,12],[48,-12]]}]}],outro:"The relay is transmitting. Ashgrove intelligence now has a live feed of Coalition artillery traffic."},{id:"m2",title:"Iron Tide",location:"Harbor 9, Veldt coast, 1910 hrs",map:"harbor",briefing:["Coalition supply ships are unloading weapons at Harbor 9 under the cover of a communications mast in the container yard.","Land on the west quay, push through the container yard and plant a jammer on the uplink mast.","Once the jammer is live, the warehouse garrisons will counter-attack. Hold the mast, clean up, and get to the boat."],playerStart:[-56,44],allies:[[-54,41.5],[-58,41.5]],groups:[{id:"dock",behavior:"patrol",points:[[-30,34],[-10,40],[10,36]],radius:12},{id:"yard",behavior:"patrol",points:[[-20,-5],[-6,-14],[6,18],[20,-14],[34,8],[-30,14],[14,28]],radius:10},{id:"warehouse",behavior:"guard",points:[[-34,-44],[-26,-46],[26,-44],[22,-40]]}],objectives:[{type:"reach",zone:"yard",text:"Push through the container yard"},{type:"interact",zone:"uplink",seconds:5,text:"Plant the jammer on the uplink mast",prompt:"Hold [E] to plant the jammer"},{type:"defend",zone:"uplink",seconds:75,text:"Hold the mast while the jammer runs",waves:[{at:3,group:{id:"w1",behavior:"assault",points:[[-34,-44],[-30,-40],[-40,-40]]}},{at:25,group:{id:"w2",behavior:"assault",points:[[26,-44],[30,-46],[20,-42]]}},{at:50,group:{id:"w3",behavior:"assault",points:[[50,-50],[56,-40],[44,-30],[0,-55]]}}]},{type:"eliminate",groups:["dock","yard","warehouse","w1","w2","w3"],text:"Eliminate the remaining hostiles"},{type:"reach",zone:"extract",text:"Get to the extraction boat"}],outro:"With the mast jammed, the Coalition fleet has lost contact with shore. The harbor is ours."},{id:"m3",title:"Last Light",location:"Kessel Yard, Veldt interior, 0220 hrs",map:"kessel",briefing:["An armored train is being prepared at Kessel Yard to move the Coalition's last artillery battery to the front.","Move through the rail yard under cover of darkness, clear the depot and plant a charge on the locomotive.","Once it blows, every patrol in the yard will come after you. Reach the landing zone and hold until the helicopter arrives."],playerStart:[-52,48],allies:[[-50,50.5]],groups:[{id:"yard",behavior:"patrol",points:[[-30,30],[-10,20],[10,8],[30,20],[-40,-4],[20,-4],[0,-16]],radius:12},{id:"depot",behavior:"guard",points:[[-10,-44],[10,-44],[-16,-40],[16,-40],[0,-52],[-5,-35]]},{id:"sheds",behavior:"guard",points:[[-46,-38],[46,-38]]}],objectives:[{type:"reach",zone:"depot",text:"Infiltrate the rail depot"},{type:"eliminate",groups:["depot"],text:"Clear the depot"},{type:"interact",zone:"charge",seconds:5,text:"Plant the charge on the locomotive",prompt:"Hold [E] to plant the charge"},{type:"reach",zone:"extract",text:"Get clear and reach the landing zone",spawn:[{id:"hunters",behavior:"assault",points:[[50,-50],[54,-30],[40,-54],[56,-10],[30,-54]]}]},{type:"defend",zone:"extract",seconds:45,text:"Hold the LZ until the helicopter arrives",waves:[{at:6,group:{id:"lz1",behavior:"assault",points:[[40,40],[50,30],[30,50]]}},{at:24,group:{id:"lz2",behavior:"assault",points:[[0,0],[10,-10],[-10,-20],[20,10]]}}]}],outro:"The locomotive is wrecked and the battery is stranded. Ashgrove armor rolls through Kessel at dawn."}];function St(i,t,e,n){const s=document.createElement(i);return s.className=t,n!==void 0&&(s.innerHTML=n),e?.appendChild(s),s}function tn(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}const On=new T;class og{root;crosshair;chLines;hitmarker;vignette;ammoMag;ammoReserve;weaponName;fireMode;reloadHint;grenadeIcons;healthFill;staminaFill;objTitle;objDetail;objPanel;compassStrip;compassMarker;scoreBox;timer;killfeed;messages;prompt;progress;progressFill;progressLabel;marker;markerLabel;damageRing;scope;breathBar;deathBox;fps;scoreboardEl;grenadeWarn;spawnShield;feed=[];msgs=[];hitTime=0;hitKill=!1;killedBy="";lastScoreboard=0;unsub=[];constructor(t){this.root=St("div","hud hidden",t),this.crosshair=St("div","crosshair",this.root),this.chLines=["t","b","l","r"].map(l=>St("div",`ch ch-${l}`,this.crosshair)),St("div","ch-dot",this.crosshair),this.hitmarker=St("div","hitmarker",this.root,"<i></i><i></i><i></i><i></i>"),this.vignette=St("div","vignette",this.root),this.damageRing=St("div","damage-ring",this.root),this.scope=St("div","scope hidden",this.root,'<div class="scope-lens"></div><div class="scope-h"></div><div class="scope-v"></div>'),this.breathBar=St("div","breath",this.scope,"<div></div>");const e=St("div","weapon-box",this.root);this.weaponName=St("div","weapon-name",e);const n=St("div","ammo",e);this.ammoMag=St("span","ammo-mag",n),St("span","ammo-sep",n,"/"),this.ammoReserve=St("span","ammo-reserve",n);const s=St("div","weapon-row",e);this.fireMode=St("span","fire-mode",s),this.grenadeIcons=St("span","grenades",s),this.reloadHint=St("div","reload-hint",this.root);const r=St("div","vitals",this.root);St("div","vital-label",r,"HEALTH"),this.healthFill=St("div","bar-fill health",St("div","bar",r)),St("div","vital-label",r,"STAMINA"),this.staminaFill=St("div","bar-fill stamina",St("div","bar thin",r)),this.objPanel=St("div","objective",this.root),this.objTitle=St("div","obj-title",this.objPanel),this.objDetail=St("div","obj-detail",this.objPanel);const a=St("div","top-center",this.root),o=St("div","compass",a);this.compassStrip=St("div","compass-strip",o),this.compassMarker=St("div","compass-marker",o),St("div","compass-needle",o),this.buildCompass(),this.scoreBox=St("div","scorebox",a),this.timer=St("div","timer",a),this.killfeed=St("div","killfeed",this.root),this.messages=St("div","messages",this.root),this.prompt=St("div","prompt",this.root),this.progress=St("div","progress hidden",this.root),this.progressLabel=St("div","progress-label",this.progress),this.progressFill=St("div","progress-fill",St("div","progress-bar",this.progress)),this.marker=St("div","marker",this.root,'<div class="marker-icon"></div>'),this.markerLabel=St("div","marker-label",this.marker),this.deathBox=St("div","death hidden",this.root),this.fps=St("div","fps hidden",this.root),this.scoreboardEl=St("div","scoreboard hidden",this.root),this.grenadeWarn=St("div","grenade-warn hidden",this.root,"<span>!</span>"),this.spawnShield=St("div","spawn-shield hidden",this.root,"SPAWN PROTECTION")}buildCompass(){const t={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};let e="";for(let n=-1;n<=1;n++)for(let s=0;s<360;s+=15){const r=(n*360+s)*3,a=t[s];e+=a?`<span class="ct major" style="left:${r}px">${a}</span>`:`<span class="ct" style="left:${r}px">${s%45===0?"":"|"}</span>`}this.compassStrip.innerHTML=e}bind(t){this.unbind(),this.feed.forEach(n=>n.el.remove()),this.msgs.forEach(n=>n.el.remove()),this.feed=[],this.msgs=[],this.killedBy="";const e=t.player;this.unsub.push(t.events.on("kill",n=>{const s=l=>l?l.isPlayer?"#ffd65a":t.isEnemy(e,l)?"#ff6a5a":"#6ab4ff":"#ccc",r=n.killer&&n.killer!==n.victim?`<b style="color:${s(n.killer)}">${tn(n.killer.name)}</b>`:"",a=n.headshot?`[${tn(n.weapon)}] ✛`:`[${tn(n.weapon)}]`,o=St("div","feed-item",this.killfeed,`${r} <span class="feed-weapon">${a}</span> <b style="color:${s(n.victim)}">${tn(n.victim.name)}</b>`);this.feed.push({el:o,time:performance.now()}),this.feed.length>6&&this.feed.shift().el.remove(),n.victim.isPlayer&&(this.killedBy=n.killer&&n.killer!==n.victim?n.killer.name:"yourself")}),t.events.on("hit",n=>{!n.attacker.isPlayer||n.victim.isPlayer||(this.hitTime=performance.now(),this.hitKill=n.killed,t.audio.hitmarker(n.killed,n.zone==="head"))}),t.events.on("message",n=>{const s=St("div","msg",this.messages,tn(n.text));n.color&&(s.style.color=n.color),this.msgs.push({el:s,time:performance.now()}),this.msgs.length>4&&this.msgs.shift().el.remove()}))}unbind(){this.unsub.forEach(t=>t()),this.unsub=[]}show(t){this.root.classList.toggle("hidden",!t)}update(t,e,n,s){const r=performance.now(),a=t.player,o=a.weapon,l=o.def,c=window.innerWidth,h=window.innerHeight,u=t.mode.hud(),p=a.currentSpread(),m=Math.tan(p)/Math.tan(e.fov*Math.PI/360)*(h/2),g=Jt(m,3,140);this.chLines[0].style.transform=`translate(-50%, ${-g-10}px)`,this.chLines[1].style.transform=`translate(-50%, ${g}px)`,this.chLines[2].style.transform=`translate(${-g-10}px, -50%)`,this.chLines[3].style.transform=`translate(${g}px, -50%)`;const _=!a.alive||a.adsT>.5||a.sprintT>.5||l.scope===!0&&a.adsT>.2;this.crosshair.style.opacity=_?"0":"1";const f=(r-this.hitTime)/1e3;this.hitmarker.style.opacity=f<.25?String(1-f/.25):"0",this.hitmarker.classList.toggle("kill",this.hitKill);const d=a.health/a.maxHealth;this.vignette.style.opacity=String(Jt((1-d)*1.3,0,.95)),this.healthFill.style.width=`${Jt(d*100,0,100)}%`,this.healthFill.classList.toggle("low",d<.35),this.staminaFill.style.width=`${a.controller.stamina/a.controller.maxStamina*100}%`;let b="";for(const S of a.damageIndicators){const M=t.time-S.time,C=S.from.x-a.position.x,k=S.from.z-a.position.z,W=(Math.atan2(-C,-k)-a.yaw)*(180/Math.PI);b+=`<div class="dmg-arc" style="transform: translate(-50%,-50%) rotate(${-W}deg); opacity:${Jt(1-M/1.6,0,1)}"></div>`}this.damageRing.innerHTML=b;const w=l.scope===!0&&a.adsT>.85&&a.alive;this.scope.classList.toggle("hidden",!w),w&&(this.breathBar.firstElementChild.style.width=`${a.breath/a.breathMax*100}%`),this.breathBar.classList.toggle("active",a.holdingBreath),this.weaponName.textContent=l.name,this.ammoMag.textContent=String(o.mag),this.ammoMag.classList.toggle("low",o.mag<=Math.ceil(l.magSize*.25)),this.ammoReserve.textContent=String(o.reserve),this.fireMode.textContent=l.fireModes.length>1?o.fireMode==="auto"?"AUTO [B]":"SEMI [B]":l.cycleAction?l.cycleAction.toUpperCase():"SEMI",this.grenadeIcons.innerHTML='<i class="nade"></i>'.repeat(a.grenades)+'<i class="nade empty"></i>'.repeat(a.maxGrenades-a.grenades);let x="";if(o.state==="reloading"?x="RELOADING":o.mag===0&&o.reserve===0?x=a.weapons.some(S=>S!==o&&S.mag+S.reserve>0)?"NO AMMO: SWITCH WEAPON [Q]":"NO AMMO":o.mag<=Math.ceil(l.magSize*.25)&&o.reserve>0&&(x="RELOAD [R]"),this.reloadHint.textContent=a.alive?x:"",this.objPanel.style.display=u.objective?"":"none",this.objTitle.textContent=u.objective??"",this.objDetail.textContent=u.objectiveDetail??"",u.score){const S=u.score;this.scoreBox.innerHTML=`<span class="sa">${tn(S.labelA)} <b>${S.a}</b></span><span class="slim">${S.limit}</span><span class="sb"><b>${S.b}</b> ${tn(S.labelB)}</span>`,this.scoreBox.style.display=""}else this.scoreBox.style.display="none";this.timer.textContent=u.timer??"";const R=(-a.yaw*180/Math.PI%360+360)%360;if(this.compassStrip.style.transform=`translateX(${-R*3}px)`,u.marker&&a.alive){const S=u.marker.pos;On.copy(S).project(e);const M=On.z>1;let C=(On.x*.5+.5)*c,k=(-On.y*.5+.5)*h;M&&(C=c-C,k=h-40);const O=40;C=Jt(C,O,c-O),k=Jt(k,O+60,h-O);const W=Math.round(Math.hypot(S.x-a.position.x,S.z-a.position.z));this.marker.style.display="",this.marker.style.transform=`translate(${C}px, ${k}px)`,this.markerLabel.textContent=`${u.marker.label} ${W}m`;let V=Math.atan2(S.x-a.position.x,-(S.z-a.position.z))*180/Math.PI-R;for(;V>180;)V-=360;for(;V<-180;)V+=360;this.compassMarker.style.display=Math.abs(V)<70?"":"none",this.compassMarker.style.transform=`translateX(${V*3}px)`}else this.marker.style.display="none",this.compassMarker.style.display="none";this.prompt.textContent=u.prompt??"",u.progress?(this.progress.classList.remove("hidden"),this.progressLabel.textContent=u.progress.label,this.progressFill.style.width=`${Jt(u.progress.value,0,1)*100}%`):this.progress.classList.add("hidden");for(const S of this.feed){const M=(r-S.time)/1e3;S.el.style.opacity=String(Jt(6-M,0,1))}for(const S of this.msgs){const M=(r-S.time)/1e3;S.el.style.opacity=String(Jt(4-M,0,1))}if(a.alive)this.deathBox.classList.add("hidden");else{this.deathBox.classList.remove("hidden");const S=u.respawnIn!==null?`<div class="respawn">Respawning in ${u.respawnIn.toFixed(1)}</div>`:"";this.deathBox.innerHTML=`<div class="killed">KILLED BY <b>${tn(this.killedBy.toUpperCase())}</b></div>${S}`}this.spawnShield.classList.toggle("hidden",!(a.alive&&a.spawnProtection>0&&u.score!==null));let A=null;for(const S of t.grenades.live)S.thrower!==a&&S.pos.distanceTo(a.position)<9&&(A=S.pos);if(A&&a.alive){On.copy(A).project(e);let S=(On.x*.5+.5)*c,M=(-On.y*.5+.5)*h;On.z>1&&(S=c-S,M=h*.75),this.grenadeWarn.classList.remove("hidden"),this.grenadeWarn.style.transform=`translate(${Jt(S,40,c-40)}px, ${Jt(M,80,h-60)}px)`}else this.grenadeWarn.classList.add("hidden");this.fps.classList.toggle("hidden",!s),s&&(this.fps.textContent=`${n.toFixed(0)} FPS`);const L=a.scoreboardHeld||!a.alive&&u.score!==null;this.scoreboardEl.classList.toggle("hidden",!L),L&&r-this.lastScoreboard>250&&(this.lastScoreboard=r,this.scoreboardEl.innerHTML=eo(t.mode.title,t.mode.scoreboard()))}}function eo(i,t){let e=`<div class="sb-title">${tn(i)}</div><div class="sb-teams">`;for(const n of t){if(e+=`<div class="sb-team"><div class="sb-head" style="border-color:${n.color}"><span style="color:${n.color}">${tn(n.name)}</span><span>${n.score??""}</span></div>`,n.rows.length){e+="<table><tr><th>Name</th><th>K</th><th>D</th><th>Score</th></tr>";for(const s of n.rows)e+=`<tr class="${s.isPlayer?"me":""} ${s.alive?"":"dead"}"><td>${tn(s.name)}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.score}</td></tr>`;e+="</table>"}e+="</div>"}return e+"</div>"}const ra={dustline:{name:"Dustline",desc:"Desert town. Close quarters on the market street, with longer sightlines across the back lots."},harbor:{name:"Harbor 9",desc:"Container port at dusk. Mid-range fights down the container aisles."},kessel:{name:"Kessel Yard",desc:"Rail yard at night. Low visibility around boxcars and the depot."}},ql="claude-of-duty.progress",aa="claude-of-duty.loadout";function $l(i,t){try{const e=localStorage.getItem(i);return e?{...t,...JSON.parse(e)}:t}catch{return t}}function oa(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}function Ie(i){return i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}class lg{constructor(t,e,n){this.audio=e,this.cb=n,this.root=document.createElement("div"),this.root.className="menu",t.appendChild(this.root)}root;difficulty="regular";loadout=$l(aa,{primary:"kestrel",secondary:"p9"});progress=$l(ql,{unlocked:1});match={variant:"tdm",size:6,scoreLimit:30,timeLimit:600,map:"dustline"};hide(){this.root.classList.add("hidden"),this.root.innerHTML=""}screen(t,e,n=""){this.root.className=`menu ${n}`,this.root.innerHTML=t,this.root.querySelectorAll("[data-act]").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation(),this.audio.uiClick();const a=s.dataset.act;(e[a]??e[a.split(":")[0]])?.(s)})})}unlockMission(t){t+1>this.progress.unlocked&&(this.progress.unlocked=Math.min(en.length,t+1),oa(ql,this.progress))}showMain(){this.screen(`<div class="title-block">
        <div class="logo">CLAUDE <span>OF</span> DUTY</div>
        <div class="tagline">ASHGROVE RANGERS // OPERATION VELDT</div>
      </div>
      <div class="main-buttons">
        <button data-act="campaign">Campaign</button>
        <button data-act="match">Bot Match</button>
        <button data-act="settings">Settings</button>
        <button data-act="controls">Controls</button>
      </div>
      <div class="footer">An original semi-realistic FPS. All models and sounds are generated in code.</div>`,{campaign:()=>this.showCampaign(),match:()=>this.showMatchSetup(),settings:()=>this.showSettings(()=>this.showMain()),controls:()=>this.showControls(()=>this.showMain())},"main-menu")}difficultyPicker(){return`<div class="picker"><label>Difficulty</label>${Object.keys(rr).map(t=>`<button class="chip ${t===this.difficulty?"on":""}" data-act="diff:${t}">${rr[t].label}</button>`).join("")}</div>`}showCampaign(){const t=en.map((e,n)=>{const s=n+1>this.progress.unlocked;return`<div class="card mission ${s?"locked":""}" ${s?"":`data-act="mission:${n}"`}>
        <div class="card-kicker">MISSION ${n+1}</div>
        <div class="card-title">${Ie(e.title)}</div>
        <div class="card-sub">${Ie(e.location)}</div>
        <div class="card-body">${s?"Complete the previous mission to unlock.":Ie(e.briefing[0])}</div>
      </div>`}).join("");this.screen(`<h1>Campaign</h1>
      <div class="cards">${t}</div>
      ${this.difficultyPicker()}
      <div class="nav-row"><button class="ghost" data-act="back">Back</button></div>`,{mission:e=>{const n=en[Number(e.dataset.act.split(":")[1])];this.showLoadout(()=>this.showBriefing(n),()=>this.showCampaign())},diff:e=>{this.difficulty=e.dataset.act.split(":")[1],this.showCampaign()},back:()=>this.showMain()})}showBriefing(t){this.screen(`<div class="briefing">
        <div class="card-kicker">${Ie(t.location)}</div>
        <h1>${Ie(t.title)}</h1>
        ${t.briefing.map(e=>`<p>${Ie(e)}</p>`).join("")}
        <h3>Objectives</h3>
        <ol>${t.objectives.map(e=>`<li>${Ie(e.text)}</li>`).join("")}</ol>
        <div class="loadout-summary">Loadout: <b>${ir[this.loadout.primary].name}</b> + <b>${ir[this.loadout.secondary].name}</b> · 2 frag grenades · ${rr[this.difficulty].label}</div>
        <div class="nav-row"><button class="ghost" data-act="back">Back</button><button data-act="go">Deploy</button></div>
      </div>`,{back:()=>this.showCampaign(),go:()=>this.cb.startCampaign(t,this.difficulty,{...this.loadout})})}showMatchSetup(){const t=this.match,e=(a,o,l)=>`<button class="chip ${l?"on":""}" data-act="${a}">${o}</button>`,n=Object.keys(ra).map(a=>`<div class="card map ${t.map===a?"selected":""}" data-act="map:${a}">
          <div class="card-title">${ra[a].name}</div><div class="card-body">${ra[a].desc}</div></div>`).join(""),s=t.variant==="tdm"?[3,4,6,8]:[5,7,9,11],r=t.variant==="tdm"?[20,30,50,75]:[10,15,20,30];this.screen(`<h1>Bot Match</h1>
      <div class="picker"><label>Mode</label>${e("variant:tdm","Team Deathmatch",t.variant==="tdm")}${e("variant:ffa","Free-for-All",t.variant==="ffa")}</div>
      <div class="cards">${n}</div>
      <div class="picker"><label>${t.variant==="tdm"?"Team size":"Bots"}</label>${s.map(a=>e(`size:${a}`,t.variant==="tdm"?`${a}v${a}`:String(a),t.size===a)).join("")}</div>
      <div class="picker"><label>Score limit</label>${r.map(a=>e(`limit:${a}`,String(a),t.scoreLimit===a)).join("")}</div>
      <div class="picker"><label>Time limit</label>${[300,600,900].map(a=>e(`time:${a}`,`${a/60} min`,t.timeLimit===a)).join("")}</div>
      ${this.difficultyPicker()}
      <div class="nav-row"><button class="ghost" data-act="back">Back</button><button data-act="go">Choose Loadout</button></div>`,{variant:a=>{t.variant=a.dataset.act.split(":")[1],t.size=t.variant==="tdm"?6:7,t.scoreLimit=t.variant==="tdm"?30:15,this.showMatchSetup()},map:a=>{t.map=a.dataset.act.split(":")[1],this.showMatchSetup()},size:a=>{t.size=Number(a.dataset.act.split(":")[1]),this.showMatchSetup()},limit:a=>{t.scoreLimit=Number(a.dataset.act.split(":")[1]),this.showMatchSetup()},time:a=>{t.timeLimit=Number(a.dataset.act.split(":")[1]),this.showMatchSetup()},diff:a=>{this.difficulty=a.dataset.act.split(":")[1],this.showMatchSetup()},back:()=>this.showMain(),go:()=>this.showLoadout(()=>this.cb.startMatch({variant:t.variant,size:t.size,scoreLimit:t.scoreLimit,timeLimit:t.timeLimit},t.map,this.difficulty,{...this.loadout}),()=>this.showMatchSetup())})}showLoadout(t,e){const n=(r,a)=>`<div class="stat"><span>${r}</span><div class="stat-bar"><div style="width:${a*100}%"></div></div></div>`,s=(r,a)=>{const o=ir[r];return`<div class="card weapon ${this.loadout[a]===r?"selected":""}" data-act="${a}:${r}">
        <div class="card-kicker">${o.kind.toUpperCase()}</div>
        <div class="card-title">${Ie(o.name)}</div>
        <div class="card-body">${Ie(o.description)}</div>
        ${n("Damage",o.stats.damage)}${n("Fire rate",o.stats.rate)}${n("Range",o.stats.range)}${n("Control",o.stats.control)}${n("Mobility",o.stats.mobility)}
        <div class="card-foot">${o.magSize} rds · ${o.rpm} rpm</div>
      </div>`};this.screen(`<h1>Loadout</h1>
      <h3>Primary</h3><div class="cards">${m0.map(r=>s(r,"primary")).join("")}</div>
      <h3>Secondary</h3><div class="cards">${g0.map(r=>s(r,"secondary")).join("")}
        <div class="card info"><div class="card-kicker">EQUIPMENT</div><div class="card-title">2× Frag Grenade</div><div class="card-body">Press G to throw. The fuse is 3.2 seconds, and it bounces off walls.</div></div>
      </div>
      <div class="nav-row"><button class="ghost" data-act="back">Back</button><button data-act="go">Continue</button></div>`,{primary:r=>{this.loadout.primary=r.dataset.act.split(":")[1],oa(aa,this.loadout),this.showLoadout(t,e)},secondary:r=>{this.loadout.secondary=r.dataset.act.split(":")[1],oa(aa,this.loadout),this.showLoadout(t,e)},back:e,go:t})}showLoading(t){this.screen(`<div class="loading"><div class="spinner"></div><div>${Ie(t)}</div></div>`,{},"overlay")}showClickToStart(t,e){this.screen(`<div class="click-start" data-act="go"><h1>${Ie(t)}</h1><p>${Ie(e)}</p><div class="pulse">Click to begin</div></div>`,{go:()=>this.cb.resume()},"overlay")}showPause(t){this.screen(`<h1>Paused</h1>
      <div class="main-buttons">
        <button data-act="resume">Resume</button>
        <button data-act="restart">Restart</button>
        <button data-act="settings">Settings</button>
        <button data-act="controls">Controls</button>
        <button class="ghost" data-act="quit">Quit to Menu</button>
      </div>
      ${t?`<div class="pause-sb">${eo(t.title,t.teams)}</div>`:""}`,{resume:()=>this.cb.resume(),restart:()=>this.cb.restart(),settings:()=>this.showSettings(()=>this.showPause(t)),controls:()=>this.showControls(()=>this.showPause(t)),quit:()=>this.cb.quitToMenu()},"overlay")}showSettings(t){const e=(r,a,o,l,c,h,u)=>`<div class="setting"><label>${a}</label><input type="range" data-key="${r}" min="${o}" max="${l}" step="${c}" value="${h}"><span class="val" data-val="${r}">${u(h)}</span></div>`,n=(r,a,o)=>`<div class="setting"><label>${a}</label><button class="chip ${o?"on":""}" data-act="toggle:${r}">${o?"On":"Off"}</button></div>`,s={sensitivity:r=>r.toFixed(1),adsSensitivity:r=>`${Math.round(r*100)}%`,fov:r=>`${r}°`,volume:r=>`${Math.round(r*100)}%`};this.screen(`<h1>Settings</h1>
      <div class="settings">
        ${e("sensitivity","Mouse sensitivity",.5,10,.1,ge.sensitivity,s.sensitivity)}
        ${e("adsSensitivity","Aiming sensitivity",.3,1.5,.05,ge.adsSensitivity,s.adsSensitivity)}
        ${e("fov","Field of view",65,110,1,ge.fov,s.fov)}
        ${e("volume","Master volume",0,1,.05,ge.volume,s.volume)}
        ${n("invertY","Invert Y axis",ge.invertY)}
        ${n("showFps","Show FPS (F3)",ge.showFps)}
        ${n("shadows","Shadows (applies next match)",ge.shadows)}
      </div>
      <div class="nav-row"><button data-act="back">Done</button></div>`,{toggle:r=>{const a=r.dataset.act.split(":")[1];ge[a]=!ge[a],to(),this.cb.applySettings(),this.showSettings(t)},back:t},"overlay"),this.root.querySelectorAll("input[type=range]").forEach(r=>{r.addEventListener("input",()=>{const a=r.dataset.key;ge[a]=Number(r.value),this.root.querySelector(`[data-val="${a}"]`).textContent=s[a](ge[a]),to(),this.cb.applySettings()})})}showControls(t){const e=[["W A S D","Move"],["Mouse","Look"],["Left click","Fire"],["Right click (hold)","Aim down sights"],["Shift (hold)","Sprint (while scoped: hold breath)"],["C","Crouch (while sprinting: slide)"],["Space","Jump"],["R","Reload"],["1 / 2 / Q / Wheel","Switch weapon"],["B","Toggle fire mode"],["G","Throw frag grenade"],["V","Melee"],["E (hold)","Interact"],["Tab (hold)","Scoreboard"],["Esc","Pause"],["F3","FPS counter"]];this.screen(`<h1>Controls</h1><table class="controls">${e.map(([n,s])=>`<tr><td><kbd>${n}</kbd></td><td>${s}</td></tr>`).join("")}</table>
      <div class="nav-row"><button data-act="back">Back</button></div>`,{back:t},"overlay")}showResults(t,e,n){const s=n.campaignIndex!==null&&t.victory&&n.campaignIndex+1<en.length;n.campaignIndex!==null&&t.victory&&this.unlockMission(n.campaignIndex+1),this.screen(`<div class="results ${t.victory?"win":"lose"}">
        <h1>${Ie(t.title)}</h1>
        <p class="result-sub">${Ie(t.subtitle)}</p>
        <div class="result-stats">
          <div><b>${e.kills}</b><span>Kills</span></div>
          <div><b>${e.deaths}</b><span>Deaths</span></div>
          <div><b>${e.accuracy}%</b><span>Accuracy</span></div>
          <div><b>${e.headshots}</b><span>Headshots</span></div>
          <div><b>${e.time}</b><span>Time</span></div>
        </div>
        ${n.campaignIndex===null?eo(n.modeTitle,n.teams):""}
        <div class="nav-row">
          <button class="ghost" data-act="menu">Main Menu</button>
          <button class="${s?"ghost":""}" data-act="retry">${t.victory?"Play Again":"Retry"}</button>
          ${s?'<button data-act="next">Next Mission</button>':""}
        </div>
      </div>`,{menu:()=>this.cb.quitToMenu(),retry:()=>this.cb.restart(),next:()=>this.cb.nextMission()},"overlay")}get currentLoadout(){return{...this.loadout}}get currentDifficulty(){return this.difficulty}showMissionBriefing(t){this.showLoadout(()=>this.showBriefing(en[t]),()=>this.showCampaign())}}const Zl=new xe({color:6053186,roughness:.9}),jl=new xe({color:2828066,roughness:.8});class cg{scene=new fo;camera;holder=new se;models=new Map;current=null;currentId=null;flash;flashTime=0;kick=0;kickRot=0;swayX=0;swayY=0;hemi;sun;constructor(t){this.camera=new Fe(52,t,.01,10),this.scene.add(this.camera),this.camera.add(this.holder),this.hemi=new Bc(16777215,4473924,1.2),this.sun=new kc(16777215,1.6),this.sun.position.set(-1,2,1),this.scene.add(this.hemi,this.sun);const e=new kn({map:I0(),blending:Ii,depthWrite:!1,transparent:!0});this.flash=new po(e),this.flash.visible=!1}setEnvironment(t,e){this.scene.environment=t,this.scene.environmentIntensity=e}setLighting(t){this.hemi.color.setHex(t.hemiSky),this.hemi.groundColor.setHex(t.hemiGround),this.hemi.intensity=t.hemiIntensity*1.1+.3,this.sun.color.setHex(t.sunColor),this.sun.intensity=t.sunIntensity*.6+.3}getModel(t){let e=this.models.get(t);return e||(e=Gc(t),dg(e),this.models.set(t,e)),e}show(t){this.currentId!==t&&(this.current&&this.holder.remove(this.current.root),this.current=this.getModel(t),this.currentId=t,this.holder.add(this.current.root),this.current.muzzle.add(this.flash))}onShot(t){const e=t.def;this.kick=Math.min(1.5,this.kick+(e.kind==="sniper"||e.kind==="shotgun"?1.4:e.kind==="pistol"?.9:.55)),this.kickRot=Math.min(1.5,this.kickRot+(e.kind==="pistol"?1:.6)),this.flashTime=.045,this.flash.material.rotation=Math.random()*Math.PI*2;const n=e.kind==="shotgun"||e.kind==="sniper"?.5:e.kind==="pistol"?.22:.3;this.flash.scale.setScalar(n*ft(.8,1.2))}update(t,e){this.show(e.weapon.def.id);const n=this.current;n.root.visible=!e.hidden;const s=e.weapon.def,r=s.kind==="pistol",a=r?new T(.13,-.15,-.38):new T(.14,-.165,-.36),o=new T(0,-n.sightY,s.scope?-.22:r?-.36:s.kind==="shotgun"?-.3:-.34),l=a.lerp(o,la(e.adsT)),c=new an(0,0,0),h=la(e.sprintT);l.x+=h*(r?-.02:-.04),l.y+=h*-.04,c.y+=h*(r?.2:.75),c.x+=h*(r?-.5:-.25),c.z+=h*(r?0:.15),c.z+=e.slideT*.35;const u=e.bobAmp*(1-e.adsT*.85);l.x+=Math.sin(e.bobPhase)*.012*u,l.y+=-Math.abs(Math.cos(e.bobPhase))*.012*u,c.z+=Math.sin(e.bobPhase)*.015*u;const p=performance.now()/1e3;l.y+=Math.sin(p*1.6)*.002*(1-e.adsT*.7),this.swayX=fe(this.swayX,Jt(-e.lookDX*9e-4,-.05,.05),10,t),this.swayY=fe(this.swayY,Jt(e.lookDY*9e-4,-.05,.05),10,t);const m=1-e.adsT*.75;l.x+=this.swayX*m,l.y+=this.swayY*m,c.y+=this.swayX*2*m,c.x+=this.swayY*2*m,l.y-=e.landDip*.05,l.y+=e.crouchT*.01,this.kick=fe(this.kick,0,16,t),this.kickRot=fe(this.kickRot,0,12,t);const g=s.scope?1.4:1;l.z+=this.kick*.045*g*(1-e.adsT*.4),c.x+=this.kickRot*(r?.12:.04)*g;const _=e.weapon.reloadProgress();if(n.mag.position.set(0,0,0),n.mag.rotation.set(0,0,0),e.weapon.state==="reloading"){const d=Math.sin(Math.min(1,_)*Math.PI);if(s.reloadPerRound)c.z+=.35,c.x+=.12+Math.sin(_*Math.PI)*.05,l.y-=.02;else{c.z+=d*.55,c.x+=d*.3,l.y-=d*.05;const b=_<.45?Kl(Jt((_-.1)/.2,0,1)):1-Kl(Jt((_-.45)/.2,0,1));n.mag.position.y=-b*.28,n.mag.position.z=b*.05,n.mag.visible=!(_>.3&&_<.45)}}else n.mag.visible=!0;if(n.action){if(n.action.position.z=hg(s.id),n.action.rotation.z=0,e.weapon.state==="cycling"){const d=1-Jt(e.weapon.cooldown/e.weapon.interval,0,1),b=Math.sin(Jt((d-.2)/.6,0,1)*Math.PI);s.cycleAction==="pump"?n.action.position.z+=b*.09:s.cycleAction==="bolt"&&(n.action.rotation.z=b*1.2,n.action.position.z+=b*.07,c.z+=b*.25,c.x+=b*.1)}else r&&e.weapon.mag===0&&(n.action.position.z+=.04);r&&this.kick>.3&&(n.action.position.z+=.03*this.kick)}if(e.meleeT>=0){const d=Math.sin(e.meleeT*Math.PI);l.x-=d*.12,l.z-=d*.15,c.y+=d*.6,c.z+=d*.5}if(e.throwT>=0){const d=Math.sin(e.throwT*Math.PI);l.y-=d*.25,c.x-=d*.5}const f=la(e.lowerT);l.y-=f*.3,c.x-=f*.9,n.root.position.copy(l),n.root.rotation.copy(c),this.flashTime-=t,this.flash.visible=this.flashTime>0&&!e.hidden}dispose(){for(const t of this.models.values())Ka(t);this.models.clear()}}function hg(i){return i==="brute"?-.36:i==="p9"?-.07:.05}function la(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Kl(i){return i*i*(3-2*i)}const Jl=new ue(.085,.085,.42),Ql=new ue(.075,.085,.1);function dg(i){const t=new se;t.position.set(0,-.07,.06);const e=new kt(Ql,jl);t.add(e);const n=new kt(Jl,Zl);n.position.set(.07,-.08,.22),n.rotation.set(.35,.35,0),t.add(n),i.root.add(t);const s=new se;s.position.set(-.01,-.03,i.supportZ);const r=new kt(Ql,jl);r.rotation.z=.4,s.add(r);const a=new kt(Jl,Zl);a.position.set(-.12,-.1,.2),a.rotation.set(.3,-.5,0),s.add(a),i.root.add(s)}const Kt=(i,t=0,e=1.8)=>({side:i,at:t,w:e,bottom:0,top:2.4}),cs=(i,t=0,e=5)=>({side:i,at:t,w:e,bottom:0,top:4.5}),$t=(i,t=0,e=1.6)=>({side:i,at:t,w:e,bottom:1.05,top:2.1});class xo{constructor(t,e){this.half=t,this.rng=Vc(e)}boxes=[];cylinders=[];lights=[];navHints=[];zones={};rng;box(t,e,n,s,r,a,o=0,l=!0){return this.boxes.push({min:[Math.min(t,n),o,Math.min(e,s)],max:[Math.max(t,n),o+r,Math.max(e,s)],mat:a,collide:l}),this}block(t,e,n,s,r,a,o=0,l=!0){return this.box(t-n/2,e-s/2,t+n/2,e+s/2,r,a,o,l)}floor(t,e,n,s,r,a=.01){return this.box(t,e,n,s,.02,r,a-.01,!1)}crate(t,e,n=1.2,s=n){return this.block(t,e,n,n,s,"wood")}crateStack(t,e){return this.crate(t,e,1.3),this.crate(t+1.3,e,1.3),this.block(t+.65,e,1.2,1.2,1.1,"wood",1.3)}sandbags(t,e,n,s,r=1.05){return Math.abs(n-t)>Math.abs(s-e)?this.box(t,e-.7/2,n,e+.7/2,r,"sandbag"):this.box(t-.7/2,e,t+.7/2,s,r,"sandbag")}barrier(t,e,n,s=3){return n?this.block(t,e,s,.6,1.1,"concrete"):this.block(t,e,.6,s,1.1,"concrete")}car(t,e,n){const s=n?4.4:1.9,r=n?1.9:4.4;return this.block(t,e,s,r,.95,"rust",.2),this.block(t,e,s*(n?.55:.9),r*(n?.9:.55),.6,"dark",1.15),this.block(t,e,s*.85,r*.85,.2,"dark",0,!0)}container(t,e,n,s,r=1){for(let l=0;l<r;l++)this.block(t,e,n?6.1:2.44,n?2.44:6.1,2.6,l===1&&r>1?ug(s):s,l*2.6);return this}wall(t,e,n,s,r,a,o=.4){return Math.abs(t-n)<1e-6?this.box(t-o/2,e,t+o/2,s,r,a):this.box(t,e-o/2,n,e+o/2,r,a)}wallWithGaps(t,e,n,s,r,a,o){const l=Math.abs(e-s)<1e-6,c=l?Math.min(t,n):Math.min(e,s),h=l?Math.max(t,n):Math.max(e,s);let u=c;const p=[...o].sort((g,_)=>g[0]-_[0]),m=(g,_)=>{_-g<.05||(l?this.wall(g,e,_,e,r,a):this.wall(t,g,t,_,r,a))};for(const[g,_]of p){m(u,g),u=_;const f=(g+_)/2;l?this.navHints.push({x:f,z:e},{x:f,z:e-1.4},{x:f,z:e+1.4}):this.navHints.push({x:t,z:f},{x:t-1.4,z:f},{x:t+1.4,z:f})}return m(u,h),this}building(t,e,n,s,r,a,o,l=!0){const h=t-n/2,u=t+n/2,p=e-s/2,m=e+s/2,g={n:{alongX:!0,fixed:p+.3/2,a0:h,a1:u,center:t,inward:1},s:{alongX:!0,fixed:m-.3/2,a0:h,a1:u,center:t,inward:-1},w:{alongX:!1,fixed:h+.3/2,a0:p+.3,a1:m-.3,center:e,inward:1},e:{alongX:!1,fixed:u-.3/2,a0:p+.3,a1:m-.3,center:e,inward:-1}};for(const _ of["n","s","w","e"]){const f=g[_],d=o.filter(x=>x.side===_).map(x=>({...x,s:f.center+x.at-x.w/2,e:f.center+x.at+x.w/2})).sort((x,N)=>x.s-N.s),b=(x,N,R,A)=>{N-x<.02||A-R<.02||(f.alongX?this.box(x,f.fixed-.3/2,N,f.fixed+.3/2,A-R,a,R):this.box(f.fixed-.3/2,x,f.fixed+.3/2,N,A-R,a,R))};let w=f.a0;for(const x of d)if(b(w,x.s,0,r),b(x.s,x.e,0,x.bottom??0),b(x.s,x.e,x.top??2.4,r),w=x.e,(x.bottom??0)===0){const N=(x.s+x.e)/2;for(const R of[-1.4,0,1.4]){const A=f.fixed+R*f.inward;this.navHints.push(f.alongX?{x:N,z:A}:{x:A,z:N})}}b(w,f.a1,0,r)}return l&&this.box(h-.2,p-.2,u+.2,m+.2,.3,"roof",r),this.floor(h+.3,p+.3,u-.3,m-.3,"concrete",.015),this.navHints.push({x:t,z:e}),this}cylinder(t,e,n,s,r,a=0,o=!0){return this.cylinders.push({x:t,z:e,y:a,r:n,h:s,mat:r,collide:o}),o&&this.block(t,e,n*1.6,n*1.6,s,"invisible",a),this}lamp(t,e,n=16767392,s=30,r=26){return this.block(t,e,.2,.2,6,"metal"),this.block(t,e,.5,.5,.15,"dark",6,!1),this.lights.push({x:t,y:5.8,z:e,color:n,intensity:s,distance:r}),this}zone(t,e,n,s,r){return this.zones[t]={x:e,z:n,r:s,label:r},this}perimeter(t,e,n=[]){const s=this.half;return n.includes("n")||this.box(-s-1,-s-1,s+1,-s,t,e),n.includes("s")||this.box(-s-1,s,s+1,s+1,t,e),n.includes("w")||this.box(-s-1,-s,-s,s,t,e),n.includes("e")||this.box(s,-s,s+1,s,t,e),this.box(-s-1,-s-1,s+1,-s,40,"invisible",t),this.box(-s-1,s,s+1,s+1,40,"invisible",t),this.box(-s-1,-s,-s,s,40,"invisible",t),this.box(s,-s,s+1,s,40,"invisible",t),this}free(t,e,n,s,r=1.2){const a=t-n/2-r,o=t+n/2+r,l=e-s/2-r,c=e+s/2+r;return!this.boxes.some(h=>h.collide&&h.max[1]>.05&&a<h.max[0]&&o>h.min[0]&&l<h.max[2]&&c>h.min[2])}scatter(t,e,n,s,r,a,o=2.5){let l=0;for(let c=0;c<t*20&&l<t;c++){const h=e+this.rng()*(s-e),u=n+this.rng()*(r-n);this.free(h,u,o,o,1.6)&&(a(h,u,this.rng),l++)}return this}build(t){return{...t,half:this.half,boxes:this.boxes,cylinders:this.cylinders,lights:this.lights,zones:this.zones,navHints:this.navHints}}}function ug(i){const t=["containerRed","containerBlue","containerGreen","containerYellow"],e=t.indexOf(i);return e<0?i:t[(e+1)%t.length]}function fg(){const i=new xo(60,1337);i.perimeter(4,"stuccoDark"),i.floor(-60,-6,60,6,"asphalt"),i.floor(-3,-60,3,-6,"dirt"),i.floor(-3,6,3,60,"dirt"),i.building(-36,-16,14,10,4,"stucco",[Kt("s",0),$t("s",-4.5),$t("s",4.5),Kt("e",1),$t("w",0),$t("n",-3)]),i.building(-13,-18,12,12,4.5,"stuccoDark",[Kt("s",-2),Kt("n",3),$t("e",-2),$t("w",2),$t("s",3)]),i.building(14,-16,16,10,4,"stucco",[Kt("s",4),$t("s",-3),Kt("w",0),$t("n",2),$t("e",-1)]),i.building(38,-18,12,10,5,"brick",[Kt("s",-2),$t("s",2.5),$t("e",0),Kt("n",2)]),i.building(-38,17,12,12,4,"stuccoDark",[Kt("n",0),$t("e",-2),Kt("s",2),$t("w",0)]),i.building(-14,18,14,10,4.5,"stucco",[Kt("n",-3),$t("n",3),$t("w",0),Kt("e",1)]),i.building(12,18,12,12,4,"brick",[Kt("n",0),Kt("w",3),$t("s",0),$t("e",-2)]),i.building(36,16,14,10,4,"stucco",[Kt("n",2),$t("n",-4),Kt("e",0),$t("s",1)]),i.wallWithGaps(24,-54,24,-32,2.6,"concrete",[[-46,-42]]),i.wallWithGaps(24,-32,56,-32,2.6,"concrete",[[44,49]]);const t=42,e=-45;for(const[n,s]of[[-2,-2],[2,-2],[-2,2],[2,2]])i.block(t+n,e+s,.4,.4,18,"metal");for(let n=3;n<18;n+=3.5)i.block(t,e-2,4.4,.15,.15,"metal",n,!1),i.block(t,e+2,4.4,.15,.15,"metal",n,!1),i.block(t-2,e,.15,4.4,.15,"metal",n,!1),i.block(t+2,e,.15,4.4,.15,"metal",n,!1);i.block(t,e,1.5,1.5,.6,"containerRed",18,!1),i.block(34,-47,6,4,3,"metal"),i.crateStack(30,-38),i.sandbags(36,-36,42,-36),i.sandbags(47,-40,47,-34),i.barrier(52,-42,!1),i.zone("tower",t-4,e+5,6,"Radio Tower"),i.floor(-48,38,-36,50,"concrete",.02),i.zone("extract",-42,44,6,"Extraction"),i.sandbags(-50,34,-44,34),i.sandbags(-34,36,-34,42),i.car(-24,-2,!0),i.car(4,3,!0),i.car(26,-3.5,!0),i.sandbags(-6,-2,-6,3),i.sandbags(8,-3,8,1.5),i.barrier(-44,2,!1),i.barrier(46,-1,!1),i.crate(-30,3.5),i.crateStack(18,3),i.crate(-16,-4.2,1.1),i.crate(36,4);for(const[n,s]of[[-8,-9],[2,-9],[24,9.5],[-26,9.5]])i.block(n,s,3,1.2,.9,"wood"),i.block(n,s,3.4,2,.08,"containerRed",2.4,!1);return i.zone("market",0,0,8,"Market Street"),i.scatter(10,-56,-56,20,-26,(n,s,r)=>r()<.5?i.crate(n,s,1.3):i.sandbags(n-2,s,n+2,s)),i.scatter(10,-30,26,56,56,(n,s,r)=>r()<.5?i.crateStack(n,s):i.barrier(n,s,r()<.5)),i.scatter(6,-56,-26,-46,26,(n,s)=>i.crate(n,s,1.2)),i.scatter(6,46,-26,56,26,(n,s)=>i.crate(n,s,1.2)),i.zone("a_side",-50,0,8,"West Gate"),i.zone("b_side",50,0,8,"East Gate"),i.build({id:"dustline",name:"Dustline",description:"Desert town. Tight market street, buildings with windows on both sides, radio tower compound.",ground:"sand",env:{sky:"day",sunDir:[-.5,.8,.35],sunColor:16773590,sunIntensity:2.6,hemiSky:12572415,hemiGround:11901556,hemiIntensity:1.1,fogColor:14273974,fogDensity:.006,ambience:"wind"},spawns:{a:[[-54,-3,-90],[-54,3,-90],[-52,-10,-90],[-52,10,-90],[-56,0,-90],[-50,-22,-90],[-50,24,-90]],b:[[54,-3,90],[54,3,90],[52,-10,90],[52,10,90],[56,0,90],[50,-24,90],[50,24,90]],ffa:[[-54,0,-90],[54,0,90],[0,-50,0],[0,50,180],[-40,-40,-45],[40,40,135],[-42,44,-135],[44,-44,45],[-14,18,0],[14,-16,180]]}})}function pg(){const i=new xo(64,9009);i.perimeter(5,"concrete",["s"]),i.box(-64,50,64,51,.9,"concrete"),i.box(-64,51,64,52,40,"invisible"),i.floor(-64,38,64,50,"concrete",.02);for(let r=-58;r<=58;r+=8)i.cylinder(r,49,.35,.8,"dark",.9,!1);i.building(-34,-44,28,16,8,"metal",[cs("s",-6),cs("s",7),Kt("e",2),Kt("w",-3),$t("n",0,3)]),i.building(26,-44,24,16,8,"rust",[cs("s",0),Kt("w",3),Kt("e",-2),$t("n",-6,3),$t("n",6,3)]),i.crateStack(-40,-46),i.crateStack(-28,-40),i.container(-34,-48,!0,"containerBlue"),i.crateStack(22,-46),i.container(30,-40,!1,"containerGreen"),i.building(-50,20,10,8,3.5,"stucco",[Kt("e",0),$t("n",0),$t("s",-2)]);const t=["containerRed","containerBlue","containerGreen","containerYellow"];let e=0;const n=[-20,-10,2,12,24],s=[-36,-26,-16,10,20,30,40];for(const r of n)for(const a of s){const o=i.rng();if(o<.12)continue;const l=o>.65?2:1;i.container(a,r,!0,t[e++%t.length],l),i.rng()<.35&&i.container(a,r+3.2,!0,t[e++%t.length])}i.block(0,6,2,2,4.5,"metal"),i.block(0,6,.4,.4,9,"metal",4.5,!1),i.block(0,6,1.6,.2,1,"dark",9,!1),i.sandbags(-6,0,-6,4),i.sandbags(5,9,5,13),i.sandbags(-3,14,3,14),i.barrier(4,-1,!0),i.zone("uplink",0,6,7,"Uplink Mast");for(const[r,a]of[[-4,34],[4,34],[-4,44],[4,44]])i.block(r,a,1,1,22,"containerYellow");i.block(0,34,9,1,1.2,"containerYellow",22,!1),i.block(0,44,9,1,1.2,"containerYellow",22,!1),i.block(0,39,2.5,30,1.5,"containerYellow",23.2,!1),i.block(0,39,3,3,2.5,"dark",20,!1),i.container(-22,42,!0,"containerBlue"),i.container(18,42,!0,"containerRed",2),i.container(34,44,!1,"containerGreen"),i.crateStack(-36,40),i.crate(-12,44),i.crate(10,40,1.4),i.barrier(46,38,!0),i.zone("extract",50,44,6,"Extraction Boat"),i.cylinder(52,-14,3.2,7,"metal"),i.cylinder(52,-2,3.2,7,"metal"),i.sandbags(44,-20,44,-14),i.scatter(14,-60,-30,60,36,(r,a,o)=>o()<.6?i.crate(r,a,1.25):i.barrier(r,a,o()<.5),2.2);for(const[r,a]of[[-20,34],[24,34],[-40,-28],[30,-28],[-6,-8],[48,20]])i.lamp(r,a,16763024,18,24);return i.zone("yard",0,-4,10,"Container Yard"),i.build({id:"harbor",name:"Harbor 9",description:"Container port at dusk. Long aisles between the stacks, warehouses to the north and open water to the south.",ground:"asphalt",env:{sky:"dusk",sunDir:[.7,.25,.55],sunColor:16756858,sunIntensity:2.2,hemiSky:9085128,hemiGround:5917248,hemiIntensity:.9,fogColor:11571328,fogDensity:.008,ambience:"harbor",water:{z:51,color:1915986}},spawns:{a:[[-56,44,0],[-50,42,0],[-44,44,0],[-56,34,0],[-58,26,0],[-40,34,0]],b:[[50,-56,0],[56,-50,0],[44,-56,0],[56,-34,0],[40,-30,0],[58,-40,0]],ffa:[[-56,44,0],[50,-56,0],[-34,-44,0],[26,-44,0],[0,30,0],[-50,0,0],[56,10,0],[0,-20,0],[30,44,0],[-56,-54,0]]}})}function mg(){const i=new xo(60,4242);i.perimeter(4,"brick"),i.floor(-60,-32,60,32,"gravel",.01);for(const e of[-22,-10,2,14,26])i.floor(-60,e-.9,60,e+.9,"dark",.02),i.box(-60,e-.75,60,e-.65,.12,"metal",0,!1),i.box(-60,e+.65,60,e+.75,.12,"metal",0,!1);const t=(e,n,s)=>{i.block(e,n,12,3,3,s,.6),i.block(e,n,10,2.2,.6,"dark")};t(-40,-22,"rust"),t(-26,-22,"containerRed"),t(20,-22,"rust"),t(-48,-10,"containerBlue"),t(-6,-10,"rust"),t(8,-10,"containerGreen"),t(40,-10,"rust"),t(-30,2,"containerRed"),t(24,2,"rust"),t(38,2,"containerBlue"),t(-44,14,"rust"),t(-4,14,"containerGreen"),t(30,14,"rust"),t(-20,26,"containerBlue"),t(14,26,"rust"),i.block(0,-46,14,3.2,3.6,"containerYellow",.6),i.block(4,-46,4,3.2,1.2,"dark",4.2),i.block(0,-46,12,2.4,.6,"dark"),i.building(0,-46,40,18,9,"brick",[cs("s",-12,6),cs("s",12,6),Kt("w",3),Kt("e",-3),$t("n",-10,3),$t("n",10,3)]),i.crateStack(-14,-50),i.crateStack(12,-41),i.sandbags(-6,-40,6,-40),i.zone("depot",0,-40,7,"Rail Depot"),i.zone("charge",0,-43.2,2.5,"Locomotive"),i.building(-46,-44,10,8,4,"brick",[Kt("s",2),$t("e",0),$t("n",0)]),i.building(46,-44,10,10,4,"stuccoDark",[Kt("s",-2),Kt("w",0),$t("n",2)]),i.building(-46,44,12,8,3.5,"stuccoDark",[Kt("n",0),Kt("e",1),$t("s",0)]),i.building(44,44,12,10,4,"brick",[Kt("n",-3),$t("w",0),Kt("s",2)]),i.cylinder(20,44,3.5,6,"metal"),i.cylinder(8,44,3.5,6,"metal"),i.sandbags(14,37,14,41),i.scatter(16,-56,-34,56,34,(e,n,s)=>s()<.5?i.crate(e,n,1.25):s()<.5?i.crateStack(e,n):i.barrier(e,n,s()<.5),2.6),i.scatter(6,-56,36,56,56,(e,n)=>i.crate(e,n,1.2));for(const[e,n]of[[-36,-30],[0,-30],[36,-30],[-20,8],[20,8],[-40,36],[0,36],[40,36]])i.lamp(e,n,16757596,40,30);return i.lights.push({x:0,y:8,z:-46,color:13163775,intensity:30,distance:30}),i.zone("extract",-48,30,6,"Extraction"),i.build({id:"kessel",name:"Kessel Yard",description:"Rail yard at night. Rows of boxcars, a big depot building and long sightlines down the tracks.",ground:"dirt",env:{sky:"night",sunDir:[.3,.7,-.5],sunColor:10466559,sunIntensity:.55,hemiSky:4214906,hemiGround:1710626,hemiIntensity:.9,fogColor:1053727,fogDensity:.016,ambience:"night"},spawns:{a:[[-52,48,0],[-44,52,0],[-34,50,0],[-54,36,0],[-28,40,0],[-56,22,0]],b:[[52,-52,0],[44,-54,0],[34,-54,0],[54,-34,0],[56,-20,0],[28,-54,0]],ffa:[[-52,48,0],[52,-52,0],[0,-46,0],[0,50,0],[-54,-20,0],[54,20,0],[-20,-30,0],[24,34,0],[-46,-44,0],[46,44,0]]}})}const gg={rifle:{lowpass:3800,decay:.22,gain:.9,thumpFreq:140,tail:.5},smg:{lowpass:4600,decay:.14,gain:.75,thumpFreq:170,tail:.3},sniper:{lowpass:2600,decay:.55,gain:1.1,thumpFreq:90,tail:1.1},shotgun:{lowpass:2200,decay:.4,gain:1.05,thumpFreq:80,tail:.7},pistol:{lowpass:5200,decay:.16,gain:.7,thumpFreq:190,tail:.25}};class _g{ctx=null;master;noise;ambience=null;volume=.7;tmpFwd=new T;tmpUp=new T;listenerPos=new T;ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-12,e.ratio.value=6,this.master.connect(e).connect(this.ctx.destination);const n=this.ctx.sampleRate*2;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}setVolume(t){this.volume=t,this.ctx&&(this.master.gain.value=t)}updateListener(t){if(!this.ctx)return;t.getWorldPosition(this.listenerPos),t.getWorldDirection(this.tmpFwd),this.tmpUp.set(0,1,0).applyQuaternion(t.quaternion);const e=this.ctx.listener,n=this.listenerPos;if(e.positionX){const s=this.ctx.currentTime;e.positionX.setValueAtTime(n.x,s),e.positionY.setValueAtTime(n.y,s),e.positionZ.setValueAtTime(n.z,s),e.forwardX.setValueAtTime(this.tmpFwd.x,s),e.forwardY.setValueAtTime(this.tmpFwd.y,s),e.forwardZ.setValueAtTime(this.tmpFwd.z,s),e.upX.setValueAtTime(this.tmpUp.x,s),e.upY.setValueAtTime(this.tmpUp.y,s),e.upZ.setValueAtTime(this.tmpUp.z,s)}else e.setPosition(n.x,n.y,n.z),e.setOrientation(this.tmpFwd.x,this.tmpFwd.y,this.tmpFwd.z,this.tmpUp.x,this.tmpUp.y,this.tmpUp.z)}out(t,e=4){const n=this.ctx;if(!t)return this.master;const s=n.createPanner();return s.panningModel="equalpower",s.distanceModel="inverse",s.refDistance=e,s.maxDistance=300,s.rolloffFactor=1,s.positionX?(s.positionX.value=t.x,s.positionY.value=t.y,s.positionZ.value=t.z):s.setPosition(t.x,t.y,t.z),s.connect(this.master),s}distanceTo(t){return t?t.distanceTo(this.listenerPos):0}noiseBurst(t,e,n){const s=this.ctx,r=s.createBufferSource();r.buffer=this.noise,r.playbackRate.value=ft(.85,1.15);const a=s.createBiquadFilter();a.type=n.type,a.frequency.value=n.freq,a.Q.value=n.q??.7;const o=s.createGain(),l=n.attack??.002;o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n.gain,e+l),o.gain.exponentialRampToValueAtTime(1e-4,e+l+n.decay),r.connect(a).connect(o).connect(t),r.start(e,ft(0,1.5)),r.stop(e+l+n.decay+.05)}tone(t,e,n){const s=this.ctx,r=s.createOscillator();r.type=n.type,r.frequency.setValueAtTime(n.from,e),n.to&&r.frequency.exponentialRampToValueAtTime(n.to,e+n.decay);const a=s.createGain(),o=n.attack??.003;a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(n.gain,e+o),a.gain.exponentialRampToValueAtTime(1e-4,e+o+n.decay),r.connect(a).connect(t),r.start(e),r.stop(e+o+n.decay+.05)}shot(t,e){if(!this.ctx)return;const n=gg[t],s=this.ctx.currentTime,r=this.distanceTo(e),a=r>25?Math.max(.25,25/r):1,o=this.out(e,6),l=!e,c=n.gain*(l?.55:1);this.noiseBurst(o,s,{type:"lowpass",freq:n.lowpass*a,gain:c,decay:n.decay}),this.noiseBurst(o,s,{type:"bandpass",freq:1200,q:1.5,gain:c*.5,decay:n.decay*.5}),this.tone(o,s,{type:"sine",from:n.thumpFreq,to:35,gain:c*(l?.9:.6),decay:.12}),this.noiseBurst(o,s+.04,{type:"lowpass",freq:700*a+200,gain:c*.18,attack:.03,decay:n.tail}),l&&this.tone(this.master,s+.02,{type:"square",from:2600,gain:.03,decay:.02})}reload(t,e=!1){if(!this.ctx)return;const n=this.ctx.currentTime;if(e){this.clack(n+t*.6,1600,.25);return}this.clack(n+t*.15,1400,.3),this.clack(n+t*.55,2e3,.35),this.clack(n+t*.62,900,.25),this.clack(n+t*.85,2400,.3)}bolt(){if(!this.ctx)return;const t=this.ctx.currentTime;this.clack(t+.25,1700,.3),this.clack(t+.45,2300,.3)}pump(){if(!this.ctx)return;const t=this.ctx.currentTime;this.clack(t+.2,900,.4),this.clack(t+.38,1300,.4)}clack(t,e,n){this.noiseBurst(this.master,t,{type:"bandpass",freq:e,q:4,gain:n,decay:.05}),this.tone(this.master,t,{type:"triangle",from:e*.5,gain:n*.15,decay:.04})}dryFire(){this.ctx&&this.clack(this.ctx.currentTime,3e3,.25)}weaponSwitch(){this.ctx&&this.clack(this.ctx.currentTime+.05,1200,.2)}footstep(t,e=1){if(!this.ctx)return;const n=this.ctx.currentTime;this.noiseBurst(this.out(t,2),n,{type:"lowpass",freq:ft(450,750),gain:.22*e,attack:.005,decay:.08})}land(){this.ctx&&this.noiseBurst(this.master,this.ctx.currentTime,{type:"lowpass",freq:400,gain:.4,decay:.15})}hitmarker(t,e){if(!this.ctx)return;const n=this.ctx.currentTime;this.tone(this.master,n,{type:"triangle",from:e?2400:1800,gain:.15,decay:.05}),t&&this.tone(this.master,n+.06,{type:"triangle",from:1200,gain:.15,decay:.12})}impact(t,e){!this.ctx||this.distanceTo(t)>40||this.noiseBurst(this.out(t,2),this.ctx.currentTime,{type:"bandpass",freq:e?500:ft(2500,4e3),q:2,gain:e?.3:.15,decay:e?.08:.04})}whiz(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;const r=n.createBiquadFilter();r.type="bandpass",r.Q.value=6,r.frequency.setValueAtTime(5e3,e),r.frequency.exponentialRampToValueAtTime(1500,e+.15);const a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.5,e+.03),a.gain.exponentialRampToValueAtTime(1e-4,e+.16),s.connect(r).connect(a).connect(this.out(t,1)),s.start(e),s.stop(e+.2)}hurt(){if(!this.ctx)return;const t=this.ctx.currentTime;this.tone(this.master,t,{type:"sine",from:110,to:50,gain:.5,decay:.2}),this.noiseBurst(this.master,t,{type:"lowpass",freq:300,gain:.3,decay:.12})}explosion(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=this.distanceTo(t),s=this.out(t,10);this.noiseBurst(s,e,{type:"lowpass",freq:n>30?500:1400,gain:1.3,decay:1.4}),this.tone(s,e,{type:"sine",from:70,to:22,gain:1.2,decay:.8}),this.noiseBurst(s,e+.1,{type:"lowpass",freq:300,gain:.4,attack:.1,decay:2.2})}grenadeBounce(t){this.ctx&&this.noiseBurst(this.out(t,2),this.ctx.currentTime,{type:"bandpass",freq:2200,q:5,gain:.25,decay:.05})}melee(){if(!this.ctx)return;const t=this.ctx.currentTime;this.noiseBurst(this.master,t,{type:"bandpass",freq:800,q:1,gain:.4,attack:.04,decay:.12})}beep(t=880,e=.15){this.ctx&&this.tone(this.master,this.ctx.currentTime,{type:"sine",from:t,gain:e,decay:.12})}uiClick(){this.ensure(),this.ctx&&this.tone(this.master,this.ctx.currentTime,{type:"triangle",from:1400,gain:.08,decay:.04})}startAmbience(t){if(!this.ctx)return;this.stopAmbience();const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=t==="harbor"?520:t==="night"?260:380;const r=e.createGain();r.gain.value=t==="night"?.05:.08;const a=e.createOscillator();a.frequency.value=.12;const o=e.createGain();o.gain.value=.035,a.connect(o).connect(r.gain),a.start(),n.connect(s).connect(r).connect(this.master),n.start(),this.ambience={src:n,gain:r}}stopAmbience(){if(this.ambience){try{this.ambience.src.stop()}catch{}this.ambience.gain.disconnect(),this.ambience=null}}}class vg{constructor(t){this.element=t,window.addEventListener("keydown",e=>{this.locked&&(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow")||e.code==="F3")&&e.preventDefault(),e.repeat||(this.pressed.add(e.code),this.onKey?.(e.code)),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.buttons.clear()}),t.addEventListener("mousedown",e=>{this.locked&&(this.buttons.add(e.button),this.pressedButtons.add(e.button))}),window.addEventListener("mouseup",e=>{this.buttons.delete(e.button)&&this.releasedButtons.add(e.button)}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{this.locked&&(Math.abs(e.movementX)>400||Math.abs(e.movementY)>400||(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY))}),window.addEventListener("wheel",e=>{this.locked&&(this.wheel+=Math.sign(e.deltaY))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.element,this.locked||(this.buttons.clear(),this.keys.clear()),this.onLockChange?.(this.locked)})}keys=new Set;pressed=new Set;buttons=new Set;pressedButtons=new Set;releasedButtons=new Set;mouseDX=0;mouseDY=0;wheel=0;locked=!1;onLockChange=null;onKey=null;requestLock(){try{this.element.requestPointerLock()?.catch?.(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.keys.has(t)}wasPressed(t){return this.pressed.has(t)}mouseDown(t){return this.buttons.has(t)}mousePressed(t){return this.pressedButtons.has(t)}mouseReleased(t){return this.releasedButtons.has(t)}endFrame(){this.pressed.clear(),this.pressedButtons.clear(),this.releasedButtons.clear(),this.mouseDX=0,this.mouseDY=0,this.wheel=0}}const xg={dustline:fg,harbor:pg,kessel:mg},tc=new Map;function Mg(i){let t=tc.get(i);return t||tc.set(i,t=xg[i]()),t}const yg=1/60;class Sg{renderer;input;audio=new _g;hud;menus;viewModel;session=null;launch=null;state="menu";last=performance.now();fps=60;envMap;constructor(t){this.renderer=new t0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ue,this.renderer.toneMapping=sc,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nc,this.renderer.autoClear=!1;const e=this.renderer.domElement;e.className="game-canvas",t.appendChild(e);const n=new Za(this.renderer);this.envMap=n.fromScene(new r0,.04).texture,n.dispose(),this.input=new vg(e),this.viewModel=new cg(window.innerWidth/window.innerHeight),this.hud=new og(t),this.menus=new lg(t,this.audio,{startCampaign:(s,r,a)=>this.startCampaign(s,r,a),startMatch:(s,r,a,o)=>this.begin({kind:"match",cfg:s,map:r,difficulty:a,loadout:o}),resume:()=>this.resume(),restart:()=>this.launch&&this.begin(this.launch),quitToMenu:()=>this.quitToMenu(),nextMission:()=>this.nextMission(),applySettings:()=>this.applySettings()}),this.input.onLockChange=s=>this.onLockChange(s),this.input.onKey=s=>{s==="F3"&&(ge.showFps=!ge.showFps,to())},e.addEventListener("click",()=>{(this.state==="ready"||this.state==="paused")&&this.resume()}),window.addEventListener("resize",()=>this.onResize()),this.applySettings(),this.menus.showMain()}start(){const t=e=>{this.frame(e),requestAnimationFrame(t)};requestAnimationFrame(t)}applySettings(){this.audio.setVolume(ge.volume)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.viewModel.camera.aspect=t/e,this.viewModel.camera.updateProjectionMatrix()}startCampaign(t,e,n){this.begin({kind:"campaign",index:en.indexOf(t),difficulty:e,loadout:n})}begin(t){this.audio.ensure(),this.disposeSession(),this.launch=t,this.state="loading",this.hud.show(!1),this.menus.showLoading(t.kind==="campaign"?`Deploying to ${en[t.index].location}...`:"Building the battlefield..."),setTimeout(()=>{const e=t.kind==="campaign"?en[t.index].map:t.map,n=t.kind==="campaign"?new ag(en[t.index]):new sg(t.cfg),s=new ig({map:Mg(e),mode:n,loadout:t.loadout,difficulty:t.difficulty},this.audio,window.innerWidth/window.innerHeight);s.player.onShot=c=>this.viewModel.onShot(c);const r=s.level.def.env.sky,a=r==="night"?.12:r==="dusk"?.35:.5;s.scene.environment=this.envMap,s.scene.environmentIntensity=a,this.viewModel.setEnvironment(this.envMap,a+.15),this.viewModel.setLighting(s.level.def.env),s.start(),this.session=s,this.hud.bind(s),this.state="ready",this.renderer.compile(s.scene,s.camera);const o=t.kind==="campaign"?en[t.index].title:`${n.title} · ${s.level.def.name}`,l=t.kind==="campaign"?en[t.index].objectives[0].text:"Click to lock the mouse. Press Esc to pause.";this.menus.showClickToStart(o,l)},40)}resume(){this.session&&(this.audio.ensure(),this.input.requestLock())}onLockChange(t){if(t&&(this.state==="ready"||this.state==="paused"))this.state="playing",this.menus.hide(),this.hud.show(!0);else if(!t&&this.state==="playing"){this.state="paused";const e=this.session;this.menus.showPause({title:e.mode.title,teams:e.mode.scoreboard()})}}quitToMenu(){this.input.exitLock(),this.disposeSession(),this.state="menu",this.hud.show(!1),this.menus.showMain()}nextMission(){if(!this.launch||this.launch.kind!=="campaign")return;const t=this.launch.index+1;this.disposeSession(),this.state="menu",this.hud.show(!1),this.menus.showMissionBriefing(t)}disposeSession(){this.session&&(this.hud.unbind(),this.session.dispose(),this.session=null)}endSession(){const t=this.session,e=t.mode.result;this.state="results",this.input.exitLock(),this.hud.show(!1);const n=t.player.stats;this.menus.showResults(e,{kills:n.kills,deaths:n.deaths,accuracy:n.shots?Math.round(n.hits/n.shots*100):0,headshots:n.headshots,time:fr(t.time)},{campaignIndex:this.launch?.kind==="campaign"?this.launch.index:null,teams:t.mode.scoreboard(),modeTitle:t.mode.title}),this.audio.beep(e.victory?880:330,.25)}frame(t){const e=Math.min(.1,(t-this.last)/1e3);this.last=t,e>0&&(this.fps+=(1/e-this.fps)*.05);const n=this.session;if(this.renderer.clear(),n){if(this.state==="playing"){n.player.readInput(this.input);const r=Math.max(1,Math.ceil(e/yg-.01)),a=e/r;for(let o=0;o<r;o++)n.update(a);n.mode.result&&this.endSession()}const s=window.innerWidth/window.innerHeight;n.player.updateCamera(n.camera,e,s,n.shake),n.level.update(n.camera),this.audio.updateListener(n.camera),(this.state==="playing"||this.state==="ready")&&this.viewModel.update(e,n.player.viewModelState()),this.renderer.render(n.scene,n.camera),this.state!=="results"&&(this.renderer.clearDepth(),this.renderer.render(this.viewModel.scene,this.viewModel.camera)),this.state==="playing"&&this.hud.update(n,n.camera,this.fps,ge.showFps)}this.input.endFrame()}}const jc=document.getElementById("app");if(!jc)throw new Error("#app element missing");const Kc=new Sg(jc);Kc.start();window.game=Kc;
