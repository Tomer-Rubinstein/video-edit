var we=Object.defineProperty;var Te=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>(Te(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function w(){}function ae(e){return e()}function oe(){return Object.create(null)}function A(e){e.forEach(ae)}function de(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Se(e){return Object.keys(e).length===0}function Ee(e,...t){if(e==null){for(const r of t)r(void 0);return w}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function pe(e,t,n){e.$$.on_destroy.push(Ee(t,n))}function D(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function me(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode&&e.parentNode.removeChild(e)}function Oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function v(){return H(" ")}function F(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ie(e){return Array.from(e.childNodes)}function xe(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ne(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let Z;function L(e){Z=e}const C=[],M=[];let B=[];const le=[],Pe=Promise.resolve();let K=!1;function Ce(){K||(K=!0,Pe.then(he))}function U(e){B.push(e)}const z=new Set;let N=0;function he(){if(N!==0)return;const e=Z;do{try{for(;N<C.length;){const t=C[N];N++,L(t),Be(t.$$)}}catch(t){throw C.length=0,N=0,t}for(L(null),C.length=0,N=0;M.length;)M.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];z.has(n)||(z.add(n),n())}B.length=0}while(C.length);for(;le.length;)le.pop()();K=!1,z.clear(),L(e)}function Be(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function Ae(e){const t=[],n=[];B.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),B=t}const J=new Set;let x;function Le(){x={r:0,c:[],p:x}}function Ve(){x.r||A(x.c),x=x.p}function V(e,t){e&&e.i&&(J.delete(e),e.i(t))}function G(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),x.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ue(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function je(e){e&&e.c()}function ge(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),U(()=>{const s=e.$$.on_mount.map(ae).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),i.forEach(U)}function _e(e,t){const n=e.$$;n.fragment!==null&&(Ae(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(C.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,r,i,s,m=null,o=[-1]){const c=Z;L(e);const l=e.$$={fragment:null,ctx:[],props:s,update:w,not_equal:i,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:oe(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};m&&m(l.root);let g=!1;if(l.ctx=n?n(e,t.props||{},(_,S,...E)=>{const O=E.length?E[0]:S;return l.ctx&&i(l.ctx[_],l.ctx[_]=O)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](O),g&&ke(e,_)),S}):[],l.update(),g=!0,A(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const _=Ie(t.target);l.fragment&&l.fragment.l(_),_.forEach(X)}else l.fragment&&l.fragment.c();t.intro&&V(e.$$.fragment),ge(e,t.target,t.anchor),he()}L(c)}class ye{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){_e(this,1),this.$destroy=w}$on(t,n){if(!de(n))return w;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);const P=[];function Fe(e,t=w){let n;const r=new Set;function i(o){if(W(e,o)&&(e=o,n)){const c=!P.length;for(const l of r)l[1](),P.push(l,e);if(c){for(let l=0;l<P.length;l+=2)P[l][0](P[l+1]);P.length=0}}}function s(o){i(o(e))}function m(o,c=w){const l=[o,c];return r.add(l),r.size===1&&(n=t(i,s)||w),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:m}}const j=Fe([0]);function Je(e){let t,n,r,i,s,m,o,c;return{c(){t=h("div"),n=h("p"),r=H(e[0]),i=v(),s=h("button"),m=H("delete"),Ne(n,"padding-right","10px"),s.disabled=e[1],$(t,"class","containerDiv svelte-1c7r4pn")},m(l,g){me(l,t,g),u(t,n),u(n,r),u(t,i),u(t,s),u(s,m),o||(c=F(s,"click",e[2]),o=!0)},p(l,[g]){g&1&&xe(r,l[0]),g&2&&(s.disabled=l[1])},i:w,o:w,d(l){l&&X(t),o=!1,c()}}}function Me(e,t,n){let r;pe(e,j,o=>n(3,r=o));let{timestamp:i}=t,{disabled:s}=t;function m(){D(j,r=r.filter(o=>o!=i),r),console.log("timestamps: ",r)}return e.$$set=o=>{"timestamp"in o&&n(0,i=o.timestamp),"disabled"in o&&n(1,s=o.disabled)},[i,s,m]}class Re extends ye{constructor(t){super(),be(this,t,Me,Je,W,{timestamp:0,disabled:1})}}function ce(e,t,n){const r=e.slice();return r[13]=t[n],r}function fe(e){let t,n;return t=new Re({props:{timestamp:e[13],disabled:e[2][e[2].length-1]==e[13]}}),{c(){je(t.$$.fragment)},m(r,i){ge(t,r,i),n=!0},p(r,i){const s={};i&4&&(s.timestamp=r[13]),i&4&&(s.disabled=r[2][r[2].length-1]==r[13]),t.$set(s)},i(r){n||(V(t.$$.fragment,r),n=!0)},o(r){G(t.$$.fragment,r),n=!1},d(r){_e(t,r)}}}function Ye(e){let t,n,r,i,s,m,o,c,l,g,_,S,E,O,T,f,b,ee,te,ne,re,k,q,R,ie,I=ue(e[2]),a=[];for(let d=0;d<I.length;d+=1)a[d]=fe(ce(e,I,d));const $e=d=>G(a[d],1,1,()=>{a[d]=null});return{c(){t=h("main"),n=h("div"),r=h("div"),i=v(),s=h("ul");for(let d=0;d<a.length;d+=1)a[d].c();m=v(),o=h("div"),c=h("input"),l=v(),g=h("button"),g.textContent="Play",_=v(),S=h("br"),E=h("br"),O=v(),T=h("input"),f=v(),b=h("button"),b.textContent="Set",ee=v(),te=h("br"),ne=h("br"),re=v(),k=h("button"),k.textContent="Ok!",$(r,"id","player"),$(s,"class","svelte-ahloxs"),$(n,"class","rowContainer svelte-ahloxs"),$(c,"type","text"),$(c,"placeholder","YouTube Video ID"),c.value=ve,$(T,"type","text"),$(T,"placeholder","Start Time"),T.value=Q,$(o,"class","inputContainer svelte-ahloxs")},m(d,y){me(d,t,y),u(t,n),u(n,r),u(n,i),u(n,s);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(s,null);u(t,m),u(t,o),u(o,c),e[6](c),u(o,l),u(o,g),u(o,_),u(o,S),u(o,E),u(o,O),u(o,T),e[7](T),u(o,f),u(o,b),u(o,ee),u(o,te),u(o,ne),u(o,re),u(o,k),q=!0,R||(ie=[F(g,"click",e[3]),F(b,"click",e[4]),F(k,"click",e[5])],R=!0)},p(d,[y]){if(y&4){I=ue(d[2]);let p;for(p=0;p<I.length;p+=1){const se=ce(d,I,p);a[p]?(a[p].p(se,y),V(a[p],1)):(a[p]=fe(se),a[p].c(),V(a[p],1),a[p].m(s,null))}for(Le(),p=I.length;p<a.length;p+=1)$e(p);Ve()}},i(d){if(!q){for(let y=0;y<I.length;y+=1)V(a[y]);q=!0}},o(d){a=a.filter(Boolean);for(let y=0;y<a.length;y+=1)G(a[y]);q=!1},d(d){d&&X(t),Oe(a,d),e[6](null),e[7](null),R=!1,A(ie)}}}const ze="http://localhost:8000/";var ve="6RF6nxnJEBw",Q=21;function De(e,t,n){let r;pe(e,j,f=>n(2,r=f));let i,s;var m=document.createElement("script");m.src="https://www.youtube.com/iframe_api";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(m,o);var c;window.onYouTubeIframeAPIReady=()=>{c=new YT.Player("player",{height:"620",width:"940",videoId:ve,playerVars:{rel:0,modestbranding:1,showinfo:0,autostart:0,start:Q}})};function l(){const f=i.value;c.loadVideoById(f)}function g(){const f=parseFloat(s.value);c.seekTo(f),_(f)}function _(f){D(j,r[r.length-1]=f,r)}function S(f){for(var b=0;b<r.length;b++)if(r[b]<f){D(j,r=[...r.slice(0,b),f,...r.slice(b)],r);break}}function E(){fetch(ze,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({videoId:i.value,timestamps:JSON.stringify(r)})})}addEventListener("keypress",f=>{if(f.code=="KeyH"){const b=c.getCurrentTime();S(b)}}),_(Q);function O(f){M[f?"unshift":"push"](()=>{i=f,n(0,i)})}function T(f){M[f?"unshift":"push"](()=>{s=f,n(1,s)})}return[i,s,r,l,g,E,O,T]}class He extends ye{constructor(t){super(),be(this,t,De,Ye,W,{})}}new He({target:document.getElementById("app")});