function E(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function j(t){t.forEach(Z)}function F(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Ut(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function pt(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t){let e;return tt(t,n=>e=n)(),e}function Gt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function It(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Kt(t,e,n,i,r,l){if(r){const s=et(e,n,i,l);t.p(s,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Yt(t){return t&&F(t.destroy)?t.destroy:E}const nt=typeof window<"u";let yt=nt?()=>window.performance.now():()=>Date.now(),K=nt?t=>requestAnimationFrame(t):E;const C=new Set;function it(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&K(it)}function gt(t){let e;return C.size===0&&K(it),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let U=!1;function $t(){U=!0}function wt(){U=!1}function bt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:bt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,r=Math.max(d,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ot("style");return kt(rt(t),e),e.sheet}function kt(t,e){return vt(t.head||t,e),e.sheet}function Nt(t,e){if(U){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){U&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function ee(){return Q(" ")}function ne(){return Q("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function At(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){Ct(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function oe(t,e,n){return lt(t,e,n,ot)}function ce(t,e,n){return lt(t,e,n,St)}function jt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function le(t){return jt(t," ")}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function fe(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function de(t,e){return new t(e)}const B=new Map;let H=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:Et(e),rules:{}};return B.set(t,n),n}function X(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${s(g,1-g)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,d=`__svelte_${Mt(f)}_${o}`,h=rt(t),{stylesheet:a,rules:_}=B.get(h)||Dt(h,t);_[d]||(_[d]=!0,a.insertRule(`@keyframes ${d} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${r}ms 1 both`,H+=1,d}function Tt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Pt())}function Pt(){K(()=>{H||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),B.clear())})}let P;function T(t){P=t}function k(){if(!P)throw new Error("Function called outside component initialization");return P}function _e(t){k().$$.before_update.push(t)}function he(t){k().$$.on_mount.push(t)}function me(t){k().$$.after_update.push(t)}function pe(t){k().$$.on_destroy.push(t)}function ye(){const t=k();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ut(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function ge(t,e){return k().$$.context.set(t,e),e}function $e(t){return k().$$.context.get(t)}const A=[],Y=[],q=[],I=[],at=Promise.resolve();let J=!1;function ft(){J||(J=!0,at.then(dt))}function we(){return ft(),at}function L(t){q.push(t)}function be(t){I.push(t)}const W=new Set;let S=0;function dt(){if(S!==0)return;const t=P;do{try{for(;S<A.length;){const e=A[S];S++,T(e),Ot(e.$$)}}catch(e){throw A.length=0,S=0,e}for(T(null),A.length=0,S=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];W.has(n)||(W.add(n),n())}q.length=0}while(A.length);for(;I.length;)I.pop()();J=!1,W.clear(),T(t)}function Ot(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let D;function Rt(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function G(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const z=new Set;let b;function xe(){b={r:0,c:[],p:b}}function ve(){b.r||j(b.c),b=b.p}function _t(t,e){t&&t.i&&(z.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),b.c.push(()=>{z.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function Ee(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function f(){u&&Tt(t,u)}function d(a,_){const p=a.b-s;return _*=Math.abs(p),{a:s,b:a.b,d:p,duration:_,start:a.start,end:a.start+_,group:a.group}}function h(a){const{delay:_=0,duration:p=300,easing:y=ht,tick:g=E,css:x}=l||zt,N={start:yt()+_,b:a};a||(N.group=b,b.r+=1),o||c?c=N:(x&&(f(),u=X(t,s,a,p,_,y,x)),a&&g(0,1),o=d(N,p),L(()=>G(t,a,"start")),gt(v=>{if(c&&v>c.start&&(o=d(c,p),c=null,G(t,o.b,"start"),x&&(f(),u=X(t,s,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(s=o.b,1-s),G(t,o.b,"end"),c||(o.b?f():--o.group.r||j(o.group.c)),o=null;else if(v>=o.start){const M=v-o.start;s=o.a+o.d*y(M/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(a){F(l)?Rt().then(()=>{l=l(r),h(a)}):h(a)},end(){f(),o=c=null}}}const ke=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ne(t,e){qt(t,1,1,()=>{e.delete(t.key)})}function Se(t,e,n,i,r,l,s,o,c,u,f,d){let h=t.length,a=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,x=new Map;for(_=a;_--;){const m=d(r,l,_),$=n(m);let w=s.get($);w?i&&w.p(m,e):(w=u($,m),w.c()),g.set($,y[_]=w),$ in p&&x.set($,Math.abs(_-p[$]))}const N=new Set,v=new Set;function M(m){_t(m,1),m.m(o,f),s.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],$=t[h-1],w=m.key,O=$.key;m===$?(f=m.first,h--,a--):g.has(O)?!s.has(w)||N.has(w)?M(m):v.has(O)?h--:x.get(w)>x.get(O)?(v.add(w),M(m)):(N.add(O),h--):(c($,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,s)}for(;a;)M(y[a-1]);return y}function Ae(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ce(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Me(t){t&&t.c()}function De(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||L(()=>{const s=t.$$.on_mount.map(Z).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):j(s),t.$$.on_mount=[]}),l.forEach(L)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,i,r,l,s,o=[-1]){const c=P;T(t);const u=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...a)=>{const _=a.length?a[0]:h;return u.ctx&&r(u.ctx[d],u.ctx[d]=_)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](_),f&&Lt(t,d)),h}):[],u.update(),f=!0,j(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const d=At(e.target);u.fragment&&u.fragment.l(d),d.forEach(st)}else u.fragment&&u.fragment.c();e.intro&&_t(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),wt(),dt()}T(c)}class Pe{$destroy(){Ht(this,1),this.$destroy=E}$on(e,n){if(!F(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{pe as $,Bt as A,Ht as B,L as C,ie as D,j as E,ke as F,Ut as G,Nt as H,Ee as I,te as J,E as K,It as L,Kt as M,Qt as N,Jt as O,Gt as P,mt as Q,Ae as R,Pe as S,Ce as T,Vt as U,St as V,ce as W,ye as X,$e as Y,ge as Z,Wt as _,ee as a,Xt as a0,Se as a1,Ne as a2,_e as a3,je as a4,be as a5,Yt as a6,dt as a7,fe as a8,tt as a9,F as aa,se as ab,Zt as b,le as c,qt as d,ne as e,ve as f,_t as g,st as h,Te as i,me as j,ot as k,oe as l,At as m,re as n,he as o,ae as p,Q as q,jt as r,Ft as s,we as t,ue as u,xe as v,Y as w,de as x,Me as y,De as z};