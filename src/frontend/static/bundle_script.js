var Te=Object.defineProperty;var Se=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>(Se(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $(){}function de(e){return e()}function le(){return Object.create(null)}function L(e){e.forEach(de)}function pe(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ee(e){return Object.keys(e).length===0}function Oe(e,...t){if(e==null){for(const r of t)r(void 0);return $}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function me(e,t,n){e.$$.on_destroy.push(Oe(t,n))}function H(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function he(e,t,n){e.insertBefore(t,n||null)}function Z(e){e.parentNode&&e.parentNode.removeChild(e)}function Ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function v(){return R(" ")}function J(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function Pe(e,t){t=""+t,e.data!==t&&(e.data=t)}function xe(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let ee;function j(e){ee=e}const B=[],Y=[];let A=[];const ue=[],Ce=Promise.resolve();let U=!1;function Be(){U||(U=!0,Ce.then(ge))}function G(e){A.push(e)}const K=new Set;let x=0;function ge(){if(x!==0)return;const e=ee;do{try{for(;x<B.length;){const t=B[x];x++,j(t),Ae(t.$$)}}catch(t){throw B.length=0,x=0,t}for(j(null),B.length=0,x=0;Y.length;)Y.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];K.has(n)||(K.add(n),n())}A.length=0}while(B.length);for(;ue.length;)ue.pop()();U=!1,K.clear(),j(e)}function Ae(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function Le(e){const t=[],n=[];A.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),A=t}const M=new Set;let N;function Ve(){N={r:0,c:[],p:N}}function je(){N.r||L(N.c),N=N.p}function k(e,t){e&&e.i&&(M.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(M.has(e))return;M.add(e),N.c.push(()=>{M.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ce(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ke(e){e&&e.c()}function be(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),G(()=>{const s=e.$$.on_mount.map(de).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...s):L(s),e.$$.on_mount=[]}),i.forEach(G)}function _e(e,t){const n=e.$$;n.fragment!==null&&(Le(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(B.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,r,i,s,m=null,o=[-1]){const d=ee;j(e);const l=e.$$={fragment:null,ctx:[],props:s,update:$,not_equal:i,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:le(),dirty:o,skip_bound:!1,root:t.target||d.$$.root};m&&m(l.root);let g=!1;if(l.ctx=n?n(e,t.props||{},(b,T,...E)=>{const O=E.length?E[0]:T;return l.ctx&&i(l.ctx[b],l.ctx[b]=O)&&(!l.skip_bound&&l.bound[b]&&l.bound[b](O),g&&qe(e,b)),T}):[],l.update(),g=!0,L(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const b=Ne(t.target);l.fragment&&l.fragment.l(b),b.forEach(Z)}else l.fragment&&l.fragment.c();t.intro&&k(e.$$.fragment),be(e,t.target,t.anchor),ge()}j(d)}class ve{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){_e(this,1),this.$destroy=$}$on(t,n){if(!pe(n))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fe);const C=[];function Je(e,t=$){let n;const r=new Set;function i(o){if(X(e,o)&&(e=o,n)){const d=!C.length;for(const l of r)l[1](),C.push(l,e);if(d){for(let l=0;l<C.length;l+=2)C[l][0](C[l+1]);C.length=0}}}function s(o){i(o(e))}function m(o,d=$){const l=[o,d];return r.add(l),r.size===1&&(n=t(i,s)||$),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:m}}const q=Je([0]);function Me(e){let t,n,r,i,s,m,o,d;return{c(){t=h("div"),n=h("p"),r=R(e[0]),i=v(),s=h("button"),m=R("delete"),xe(n,"padding-right","10px"),s.disabled=e[1],w(t,"class","containerDiv svelte-1c7r4pn")},m(l,g){he(l,t,g),u(t,n),u(n,r),u(t,i),u(t,s),u(s,m),o||(d=J(s,"click",e[2]),o=!0)},p(l,[g]){g&1&&Pe(r,l[0]),g&2&&(s.disabled=l[1])},i:$,o:$,d(l){l&&Z(t),o=!1,d()}}}function Re(e,t,n){let r;me(e,q,o=>n(3,r=o));let{timestamp:i}=t,{disabled:s}=t;function m(){H(q,r=r.filter(o=>o!=i),r),console.log("timestamps: ",r)}return e.$$set=o=>{"timestamp"in o&&n(0,i=o.timestamp),"disabled"in o&&n(1,s=o.disabled)},[i,s,m]}class Ye extends ve{constructor(t){super(),ye(this,t,Re,Me,X,{timestamp:0,disabled:1})}}function fe(e,t,n){const r=e.slice();return r[14]=t[n],r}function ae(e){let t,n;return t=new Ye({props:{timestamp:e[14],disabled:e[3][e[3].length-1]==e[14]}}),{c(){ke(t.$$.fragment)},m(r,i){be(t,r,i),n=!0},p(r,i){const s={};i&8&&(s.timestamp=r[14]),i&8&&(s.disabled=r[3][r[3].length-1]==r[14]),t.$set(s)},i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){Q(t.$$.fragment,r),n=!1},d(r){_e(t,r)}}}function ze(e){let t,n,r,i,s,m,o,d,l,g,b,T,E,O,S,F,c,y,te,ne,re,P,ie,V,z,se,I=ce(e[3]),f=[];for(let a=0;a<I.length;a+=1)f[a]=ae(fe(e,I,a));const $e=a=>Q(f[a],1,1,()=>{f[a]=null});return{c(){t=h("main"),n=h("div"),r=h("div"),i=v(),s=h("ul");for(let a=0;a<f.length;a+=1)f[a].c();m=v(),o=h("div"),d=h("input"),l=v(),g=h("button"),g.textContent="Play",b=v(),T=h("br"),E=h("br"),O=v(),S=h("input"),F=v(),c=h("button"),c.textContent="Set",y=v(),te=h("br"),ne=h("br"),re=v(),P=h("button"),ie=R("Ok!"),w(r,"id","player"),w(s,"class","svelte-ahloxs"),w(n,"class","rowContainer svelte-ahloxs"),w(d,"type","text"),w(d,"placeholder","YouTube Video ID"),d.value=we,w(S,"type","text"),w(S,"placeholder","Start Time"),S.value=W,P.disabled=e[2],w(o,"class","inputContainer svelte-ahloxs")},m(a,_){he(a,t,_),u(t,n),u(n,r),u(n,i),u(n,s);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(s,null);u(t,m),u(t,o),u(o,d),e[7](d),u(o,l),u(o,g),u(o,b),u(o,T),u(o,E),u(o,O),u(o,S),e[8](S),u(o,F),u(o,c),u(o,y),u(o,te),u(o,ne),u(o,re),u(o,P),u(P,ie),V=!0,z||(se=[J(g,"click",e[4]),J(c,"click",e[5]),J(P,"click",e[6])],z=!0)},p(a,[_]){if(_&8){I=ce(a[3]);let p;for(p=0;p<I.length;p+=1){const oe=fe(a,I,p);f[p]?(f[p].p(oe,_),k(f[p],1)):(f[p]=ae(oe),f[p].c(),k(f[p],1),f[p].m(s,null))}for(Ve(),p=I.length;p<f.length;p+=1)$e(p);je()}(!V||_&4)&&(P.disabled=a[2])},i(a){if(!V){for(let _=0;_<I.length;_+=1)k(f[_]);V=!0}},o(a){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)Q(f[_]);V=!1},d(a){a&&Z(t),Ie(f,a),e[7](null),e[8](null),z=!1,L(se)}}}var we="6RF6nxnJEBw",W=21;function De(e,t,n){let r;me(e,q,c=>n(3,r=c));let i,s,m=!1;var o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(o,d);var l;window.onYouTubeIframeAPIReady=()=>{l=new YT.Player("player",{height:"620",width:"940",videoId:we,playerVars:{rel:0,modestbranding:1,showinfo:0,autostart:0,start:W}})};function g(){const c=i.value;l.loadVideoById(c)}function b(){const c=parseFloat(s.value);l.seekTo(c),T(c)}function T(c){H(q,r[r.length-1]=c,r)}function E(c){for(var y=0;y<r.length;y++)if(r[y]<c){H(q,r=[...r.slice(0,y),c,...r.slice(y)],r);break}}function O(){n(2,m=!0),fetch("http://127.0.0.1:5000/start",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({timestamps:JSON.stringify(r.reverse()),yt_vid_id:i.value})}).then(c=>{console.log("resp:",c)})}addEventListener("keypress",c=>{if(c.code=="KeyH"){const y=l.getCurrentTime();E(y)}}),T(W);function S(c){Y[c?"unshift":"push"](()=>{i=c,n(0,i)})}function F(c){Y[c?"unshift":"push"](()=>{s=c,n(1,s)})}return[i,s,m,r,g,b,O,S,F]}class Ke extends ve{constructor(t){super(),ye(this,t,De,ze,X,{})}}new Ke({target:document.getElementById("app")});
