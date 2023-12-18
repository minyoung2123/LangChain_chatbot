"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var re=["require","exports","vs/base/common/platform","vs/base/common/path","vs/base/common/strings","vs/base/common/extpath","vs/base/common/uri","vs/base/common/resources","vs/base/common/async","vs/base/common/glob","vs/base/common/symbols","vs/base/common/network","vs/base/common/errors","vs/base/common/cancellation","vs/workbench/services/search/common/getFileResults","vs/workbench/services/search/common/ignoreFile","vs/base/common/types","vs/base/common/event","vs/base/common/lifecycle","vs/base/common/arrays","vs/base/common/map","vs/editor/common/core/range","vs/workbench/services/search/worker/localFileSearch"],ce=function(ee){for(var e=[],L=0,C=ee.length;L<C;L++)e[L]=re[ee[L]];return e};define(re[10],ce([0,1]),function(ee,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Ld=void 0,e.$Ld=Symbol("MicrotaskDelay")}),define(re[5],ce([0,1,3,2,4,16]),function(ee,e,L,C,M,w){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$7f=e.$6f=e.$5f=e.$4f=e.$3f=e.$2f=e.$1f=e.$Zf=e.$Yf=e.$Xf=e.$Wf=e.$Vf=e.$Uf=e.$Tf=e.$Sf=e.$Rf=void 0;function v(s){return s===47||s===92}e.$Rf=v;function k(s){return s.replace(/[\\/]/g,L.$gc.sep)}e.$Sf=k;function U(s){return s.indexOf("/")===-1&&(s=k(s)),/^[a-zA-Z]:(\/|$)/.test(s)&&(s="/"+s),s}e.$Tf=U;function m(s,f=L.$gc.sep){if(!s)return"";const O=s.length,F=s.charCodeAt(0);if(v(F)){if(v(s.charCodeAt(1))&&!v(s.charCodeAt(2))){let q=3;const X=q;for(;q<O&&!v(s.charCodeAt(q));q++);if(X!==q&&!v(s.charCodeAt(q+1))){for(q+=1;q<O;q++)if(v(s.charCodeAt(q)))return s.slice(0,q+1).replace(/[\\/]/g,f)}}return f}else if(B(F)&&s.charCodeAt(1)===58)return v(s.charCodeAt(2))?s.slice(0,2)+f:s.slice(0,2);let z=s.indexOf("://");if(z!==-1){for(z+=3;z<O;z++)if(v(s.charCodeAt(z)))return s.slice(0,z+1)}return""}e.$Uf=m;function g(s){if(!C.$d||!s||s.length<5)return!1;let f=s.charCodeAt(0);if(f!==92||(f=s.charCodeAt(1),f!==92))return!1;let O=2;const F=O;for(;O<s.length&&(f=s.charCodeAt(O),f!==92);O++);return!(F===O||(f=s.charCodeAt(O+1),isNaN(f)||f===92))}e.$Vf=g;const S=/[\\/:\*\?"<>\|]/g,Y=/[\\/]/g,D=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function i(s,f=C.$d){const O=f?S:Y;return!(!s||s.length===0||/^\s+$/.test(s)||(O.lastIndex=0,O.test(s))||f&&D.test(s)||s==="."||s===".."||f&&s[s.length-1]==="."||f&&s.length!==s.trim().length||s.length>255)}e.$Wf=i;function u(s,f,O){const F=s===f;return!O||F?F:!s||!f?!1:(0,M.$3e)(s,f)}e.$Xf=u;function d(s,f,O,F=L.sep){if(s===f)return!0;if(!s||!f||f.length>s.length)return!1;if(O){if(!(0,M.$4e)(s,f))return!1;if(f.length===s.length)return!0;let q=f.length;return f.charAt(f.length-1)===F&&q--,s.charAt(q)===F}return f.charAt(f.length-1)!==F&&(f+=F),s.indexOf(f)===0}e.$Yf=d;function B(s){return s>=65&&s<=90||s>=97&&s<=122}e.$Zf=B;function K(s,f){return C.$d&&s.endsWith(":")&&(s+=L.sep),(0,L.$ic)(s)||(s=(0,L.$jc)(f,s)),s=(0,L.$hc)(s),C.$d?(s=(0,M.$Le)(s,L.sep),s.endsWith(":")&&(s+=L.sep)):(s=(0,M.$Le)(s,L.sep),s||(s=L.sep)),s}e.$1f=K;function b(s){const f=(0,L.$hc)(s);return C.$d?s.length>3?!1:Q(f)&&(s.length===2||f.charCodeAt(2)===92):f===L.$gc.sep}e.$2f=b;function Q(s,f=C.$d){return f?B(s.charCodeAt(0))&&s.charCodeAt(1)===58:!1}e.$3f=Q;function x(s,f=C.$d){return Q(s,f)?s[0]:void 0}e.$4f=x;function j(s,f,O){return f.length>s.length?-1:s===f?0:(O&&(s=s.toLowerCase(),f=f.toLowerCase()),s.indexOf(f))}e.$5f=j;function W(s){const f=s.split(":");let O,F,z;for(const q of f){const X=Number(q);(0,w.$Df)(X)?F===void 0?F=X:z===void 0&&(z=X):O=O?[O,q].join(":"):q}if(!O)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:O,line:F!==void 0?F:void 0,column:z!==void 0?z:F!==void 0?1:void 0}}e.$6f=W;const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",V="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function Z(s,f,O=8){let F="";for(let q=0;q<O;q++){let X;q===0&&C.$d&&!f&&(O===3||O===4)?X=V:X=A,F+=X.charAt(Math.floor(Math.random()*X.length))}let z;return f?z=`${f}-${F}`:z=F,s?(0,L.$jc)(s,z):z}e.$7f=Z}),define(re[11],ce([0,1,12,2,6]),function(ee,e,L,C,M){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.$dg=e.$cg=e.$bg=e.$ag=e.$_f=e.$$f=e.$0f=e.$9f=e.$8f=e.Schemas=void 0;var w;(function(m){m.inMemory="inmemory",m.vscode="vscode",m.internal="private",m.walkThrough="walkThrough",m.walkThroughSnippet="walkThroughSnippet",m.http="http",m.https="https",m.file="file",m.mailto="mailto",m.untitled="untitled",m.data="data",m.command="command",m.vscodeRemote="vscode-remote",m.vscodeRemoteResource="vscode-remote-resource",m.vscodeManagedRemoteResource="vscode-managed-remote-resource",m.vscodeUserData="vscode-userdata",m.vscodeCustomEditor="vscode-custom-editor",m.vscodeNotebookCell="vscode-notebook-cell",m.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",m.vscodeNotebookCellOutput="vscode-notebook-cell-output",m.vscodeInteractiveInput="vscode-interactive-input",m.vscodeSettings="vscode-settings",m.vscodeWorkspaceTrust="vscode-workspace-trust",m.vscodeTerminal="vscode-terminal",m.vscodeChatSesssion="vscode-chat-editor",m.webviewPanel="webview-panel",m.vscodeWebview="vscode-webview",m.extension="extension",m.vscodeFileResource="vscode-file",m.tmp="tmp",m.vsls="vsls",m.vscodeSourceControl="vscode-scm"})(w||(e.Schemas=w={})),e.$8f="vscode-tkn",e.$9f="tkn";class v{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${w.vscodeRemoteResource}`}setPreferredWebSchema(g){this.d=g}setDelegate(g){this.e=g}setServerRootPath(g){this.f=`${g}/${w.vscodeRemoteResource}`}set(g,S,Y){this.a[g]=S,this.b[g]=Y}setConnectionToken(g,S){this.c[g]=S}getPreferredWebSchema(){return this.d}rewrite(g){if(this.e)try{return this.e(g)}catch(d){return L.$1(d),g}const S=g.authority;let Y=this.a[S];Y&&Y.indexOf(":")!==-1&&Y.indexOf("[")===-1&&(Y=`[${Y}]`);const D=this.b[S],i=this.c[S];let u=`path=${encodeURIComponent(g.path)}`;return typeof i=="string"&&(u+=`&${e.$9f}=${encodeURIComponent(i)}`),M.URI.from({scheme:C.$j?this.d:w.vscodeRemoteResource,authority:`${Y}:${D}`,path:C.$j?(window.location.pathname+"/"+this.f).replace(/\/\/+/g,"/"):this.f,query:u})}}e.$0f=new v,e.$$f="vs/../../extensions",e.$_f="vs/../../node_modules",e.$ag="vs/../../node_modules.asar",e.$bg="vs/../../node_modules.asar.unpacked",e.$cg="vscode-app";class k{asBrowserUri(g){const S=this.b(g,ee);return this.uriToBrowserUri(S)}uriToBrowserUri(g){return g.scheme===w.vscodeRemote?e.$0f.rewrite(g):g.scheme===w.file&&(C.$h||C.$k&&C.$b.origin===`${w.vscodeFileResource}://${k.a}`)?g.with({scheme:w.vscodeFileResource,authority:g.authority||k.a,query:null,fragment:null}):g}asFileUri(g){const S=this.b(g,ee);return this.uriToFileUri(S)}uriToFileUri(g){return g.scheme===w.vscodeFileResource?g.with({scheme:w.file,authority:g.authority!==k.a?g.authority:null,query:null,fragment:null}):g}b(g,S){return M.URI.isUri(g)?g:M.URI.parse(S.toUrl(g))}}k.a=e.$cg,e.$dg=new k;var U;(function(m){const g=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);m.CoopAndCoep=Object.freeze(g.get("3"));const S="vscode-coi";function Y(i){let u;typeof i=="string"?u=new URL(i).searchParams:i instanceof URL?u=i.searchParams:M.URI.isUri(i)&&(u=new URL(i.toString(!0)).searchParams);const d=u?.get(S);if(d)return g.get(d)}m.getHeadersFromQuery=Y;function D(i,u,d){if(!globalThis.crossOriginIsolated)return;const B=u&&d?"3":d?"2":"1";i instanceof URLSearchParams?i.set(S,B):i[S]=B}m.addSearchParam=D})(U||(e.COI=U={}))}),define(re[7],ce([0,1,5,11,3,2,4,6]),function(ee,e,L,C,M,w,v,k){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Gg=e.DataUri=e.$Fg=e.$Eg=e.$Dg=e.$Cg=e.$Bg=e.$Ag=e.$zg=e.$yg=e.$xg=e.$wg=e.$vg=e.$ug=e.$tg=e.$sg=e.$rg=e.$qg=e.$pg=e.$og=e.$ng=e.$mg=e.$lg=e.$kg=void 0;function U(D){return(0,k.$wc)(D,!0)}e.$kg=U;class m{constructor(i){this.a=i}compare(i,u,d=!1){return i===u?0:(0,v.$Ve)(this.getComparisonKey(i,d),this.getComparisonKey(u,d))}isEqual(i,u,d=!1){return i===u?!0:!i||!u?!1:this.getComparisonKey(i,d)===this.getComparisonKey(u,d)}getComparisonKey(i,u=!1){return i.with({path:this.a(i)?i.path.toLowerCase():void 0,fragment:u?null:void 0}).toString()}ignorePathCasing(i){return this.a(i)}isEqualOrParent(i,u,d=!1){if(i.scheme===u.scheme){if(i.scheme===C.Schemas.file)return L.$Yf(U(i),U(u),this.a(i))&&i.query===u.query&&(d||i.fragment===u.fragment);if((0,e.$Bg)(i.authority,u.authority))return L.$Yf(i.path,u.path,this.a(i),"/")&&i.query===u.query&&(d||i.fragment===u.fragment)}return!1}joinPath(i,...u){return k.URI.joinPath(i,...u)}basenameOrAuthority(i){return(0,e.$tg)(i)||i.authority}basename(i){return M.$gc.basename(i.path)}extname(i){return M.$gc.extname(i.path)}dirname(i){if(i.path.length===0)return i;let u;return i.scheme===C.Schemas.file?u=k.URI.file(M.$mc(U(i))).path:(u=M.$gc.dirname(i.path),i.authority&&u.length&&u.charCodeAt(0)!==47&&(console.error(`dirname("${i.toString})) resulted in a relative path`),u="/")),i.with({path:u})}normalizePath(i){if(!i.path.length)return i;let u;return i.scheme===C.Schemas.file?u=k.URI.file(M.$hc(U(i))).path:u=M.$gc.normalize(i.path),i.with({path:u})}relativePath(i,u){if(i.scheme!==u.scheme||!(0,e.$Bg)(i.authority,u.authority))return;if(i.scheme===C.Schemas.file){const K=M.$lc(U(i),U(u));return w.$d?L.$Sf(K):K}let d=i.path||"/";const B=u.path||"/";if(this.a(i)){let K=0;for(const b=Math.min(d.length,B.length);K<b&&!(d.charCodeAt(K)!==B.charCodeAt(K)&&d.charAt(K).toLowerCase()!==B.charAt(K).toLowerCase());K++);d=B.substr(0,K)+d.substr(K)}return M.$gc.relative(d,B)}resolvePath(i,u){if(i.scheme===C.Schemas.file){const d=k.URI.file(M.$kc(U(i),u));return i.with({authority:d.authority,path:d.path})}return u=L.$Tf(u),i.with({path:M.$gc.resolve(i.path,u)})}isAbsolutePath(i){return!!i.path&&i.path[0]==="/"}isEqualAuthority(i,u){return i===u||i!==void 0&&u!==void 0&&(0,v.$3e)(i,u)}hasTrailingPathSeparator(i,u=M.sep){if(i.scheme===C.Schemas.file){const d=U(i);return d.length>L.$Uf(d).length&&d[d.length-1]===u}else{const d=i.path;return d.length>1&&d.charCodeAt(d.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(i.fsPath)}}removeTrailingPathSeparator(i,u=M.sep){return(0,e.$Cg)(i,u)?i.with({path:i.path.substr(0,i.path.length-1)}):i}addTrailingPathSeparator(i,u=M.sep){let d=!1;if(i.scheme===C.Schemas.file){const B=U(i);d=B!==void 0&&B.length===L.$Uf(B).length&&B[B.length-1]===u}else{u="/";const B=i.path;d=B.length===1&&B.charCodeAt(B.length-1)===47}return!d&&!(0,e.$Cg)(i,u)?i.with({path:i.path+"/"}):i}}e.$lg=m,e.$mg=new m(()=>!1),e.$ng=new m(D=>D.scheme===C.Schemas.file?!w.$f:!0),e.$og=new m(D=>!0),e.$pg=e.$mg.isEqual.bind(e.$mg),e.$qg=e.$mg.isEqualOrParent.bind(e.$mg),e.$rg=e.$mg.getComparisonKey.bind(e.$mg),e.$sg=e.$mg.basenameOrAuthority.bind(e.$mg),e.$tg=e.$mg.basename.bind(e.$mg),e.$ug=e.$mg.extname.bind(e.$mg),e.$vg=e.$mg.dirname.bind(e.$mg),e.$wg=e.$mg.joinPath.bind(e.$mg),e.$xg=e.$mg.normalizePath.bind(e.$mg),e.$yg=e.$mg.relativePath.bind(e.$mg),e.$zg=e.$mg.resolvePath.bind(e.$mg),e.$Ag=e.$mg.isAbsolutePath.bind(e.$mg),e.$Bg=e.$mg.isEqualAuthority.bind(e.$mg),e.$Cg=e.$mg.hasTrailingPathSeparator.bind(e.$mg),e.$Dg=e.$mg.removeTrailingPathSeparator.bind(e.$mg),e.$Eg=e.$mg.addTrailingPathSeparator.bind(e.$mg);function g(D,i){const u=[];for(let d=0;d<D.length;d++){const B=i(D[d]);D.some((K,b)=>b===d?!1:(0,e.$qg)(B,i(K)))||u.push(D[d])}return u}e.$Fg=g;var S;(function(D){D.META_DATA_LABEL="label",D.META_DATA_DESCRIPTION="description",D.META_DATA_SIZE="size",D.META_DATA_MIME="mime";function i(u){const d=new Map;u.path.substring(u.path.indexOf(";")+1,u.path.lastIndexOf(";")).split(";").forEach(b=>{const[Q,x]=b.split(":");Q&&x&&d.set(Q,x)});const K=u.path.substring(0,u.path.indexOf(";"));return K&&d.set(D.META_DATA_MIME,K),d}D.parseMetaData=i})(S||(e.DataUri=S={}));function Y(D,i,u){if(i){let d=D.path;return d&&d[0]!==M.$gc.sep&&(d=M.$gc.sep+d),D.with({scheme:u,authority:i,path:d})}return D.with({scheme:u})}e.$Gg=Y}),define(re[8],ce([0,1,13,12,17,18,7,2,10]),function(ee,e,L,C,M,w,v,k,U){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$hh=e.$gh=e.$fh=e.$eh=e.Promises=e.$dh=e.$ch=e.$bh=e.$ah=e.$_g=e.$$g=e.$0g=e.$9g=e.$8g=e.$7g=e.$6g=e.$5g=e.$4g=e.$3g=e.$2g=e.$1g=e.$Zg=e.$Yg=e.$Xg=e.$Wg=e.$Vg=e.$Ug=e.$Tg=e.$Sg=e.$Rg=e.$Qg=e.$Pg=e.$Og=e.$Ng=e.$Mg=e.$Lg=e.$Kg=e.$Jg=e.$Ig=e.$Hg=void 0;function m(c){return!!c&&typeof c.then=="function"}e.$Hg=m;function g(c){const t=new L.$Yd,n=c(t.token),r=new Promise((o,R)=>{const J=t.token.onCancellationRequested(()=>{J.dispose(),t.dispose(),R(new C.$5)});Promise.resolve(n).then(ie=>{J.dispose(),t.dispose(),o(ie)},ie=>{J.dispose(),t.dispose(),R(ie)})});return new class{cancel(){t.cancel()}then(o,R){return r.then(o,R)}catch(o){return this.then(void 0,o)}finally(o){return r.finally(o)}}}e.$Ig=g;function S(c,t,n){return new Promise((r,o)=>{const R=t.onCancellationRequested(()=>{R.dispose(),r(n)});c.then(r,o).finally(()=>R.dispose())})}e.$Jg=S;function Y(c,t){return new Promise((n,r)=>{const o=t.onCancellationRequested(()=>{o.dispose(),r(new C.$5)});c.then(n,r).finally(()=>o.dispose())})}e.$Kg=Y;async function D(c){let t=-1;const n=c.map((r,o)=>r.then(R=>(t=o,R)));try{return await Promise.race(n)}finally{c.forEach((r,o)=>{o!==t&&r.cancel()})}}e.$Lg=D;function i(c,t,n){let r;const o=setTimeout(()=>{r?.(void 0),n?.()},t);return Promise.race([c.finally(()=>clearTimeout(o)),new Promise(R=>r=R)])}e.$Mg=i;function u(c){return new Promise((t,n)=>{const r=c();m(r)?r.then(t,n):t(r)})}e.$Ng=u;class d{constructor(){this.f=!1,this.a=null,this.b=null,this.d=null}queue(t){if(this.f)return Promise.reject(new Error("Throttler is disposed"));if(this.a){if(this.d=t,!this.b){const n=()=>{if(this.b=null,this.f)return;const r=this.queue(this.d);return this.d=null,r};this.b=new Promise(r=>{this.a.then(n,n).then(r)})}return new Promise((n,r)=>{this.b.then(n,r)})}return this.a=t(),new Promise((n,r)=>{this.a.then(o=>{this.a=null,n(o)},o=>{this.a=null,r(o)})})}dispose(){this.f=!0}}e.$Og=d;class B{constructor(){this.a=Promise.resolve(null)}queue(t){return this.a=this.a.then(()=>t(),()=>t())}}e.$Pg=B;class K{constructor(){this.a=new Map}queue(t,n){const o=(this.a.get(t)??Promise.resolve()).catch(()=>{}).then(n).finally(()=>{this.a.get(t)===o&&this.a.delete(t)});return this.a.set(t,o),o}}e.$Qg=K;const b=(c,t)=>{let n=!0;const r=setTimeout(()=>{n=!1,t()},c);return{isTriggered:()=>n,dispose:()=>{clearTimeout(r),n=!1}}},Q=c=>{let t=!0;return queueMicrotask(()=>{t&&(t=!1,c())}),{isTriggered:()=>t,dispose:()=>{t=!1}}};class x{constructor(t){this.defaultDelay=t,this.a=null,this.b=null,this.d=null,this.f=null,this.g=null}trigger(t,n=this.defaultDelay){this.g=t,this.h(),this.b||(this.b=new Promise((o,R)=>{this.d=o,this.f=R}).then(()=>{if(this.b=null,this.d=null,this.g){const o=this.g;return this.g=null,o()}}));const r=()=>{this.a=null,this.d?.(null)};return this.a=n===U.$Ld?Q(r):b(n,r),this.b}isTriggered(){return!!this.a?.isTriggered()}cancel(){this.h(),this.b&&(this.f?.(new C.$5),this.b=null)}h(){this.a?.dispose(),this.a=null}dispose(){this.cancel()}}e.$Rg=x;class j{constructor(t){this.a=new x(t),this.b=new d}trigger(t,n){return this.a.trigger(()=>this.b.queue(t),n)}isTriggered(){return this.a.isTriggered()}cancel(){this.a.cancel()}dispose(){this.a.dispose(),this.b.dispose()}}e.$Sg=j;class W{constructor(){this.a=!1,this.b=new Promise((t,n)=>{this.d=t})}isOpen(){return this.a}open(){this.a=!0,this.d(!0)}wait(){return this.b}}e.$Tg=W;class A extends W{constructor(t){super(),this.f=setTimeout(()=>this.open(),t)}open(){clearTimeout(this.f),super.open()}}e.$Ug=A;function V(c,t){return t?new Promise((n,r)=>{const o=setTimeout(()=>{R.dispose(),n()},c),R=t.onCancellationRequested(()=>{clearTimeout(o),R.dispose(),r(new C.$5)})}):g(n=>V(c,n))}e.$Vg=V;function Z(c,t=0,n){const r=setTimeout(()=>{c(),n&&o.dispose()},t),o=(0,w.$Qc)(()=>{clearTimeout(r),n?.deleteAndLeak(o)});return n?.add(o),o}e.$Wg=Z;function s(c){const t=[];let n=0;const r=c.length;function o(){return n<r?c[n++]():null}function R(J){J!=null&&t.push(J);const ie=o();return ie?ie.then(R):Promise.resolve(t)}return Promise.resolve(null).then(R)}e.$Xg=s;function f(c,t=r=>!!r,n=null){let r=0;const o=c.length,R=()=>{if(r>=o)return Promise.resolve(n);const J=c[r++];return Promise.resolve(J()).then(ue=>t(ue)?Promise.resolve(ue):R())};return R()}e.$Yg=f;function O(c,t=r=>!!r,n=null){if(c.length===0)return Promise.resolve(n);let r=c.length;const o=()=>{r=-1;for(const R of c)R.cancel?.()};return new Promise((R,J)=>{for(const ie of c)ie.then(ue=>{--r>=0&&t(ue)?(o(),R(ue)):r===0&&R(n)}).catch(ue=>{--r>=0&&(o(),J(ue))})})}e.$Zg=O;class F{constructor(t){this.a=0,this.d=t,this.f=[],this.b=0,this.g=new M.$Od}get onDrained(){return this.g.event}get size(){return this.a}queue(t){return this.a++,new Promise((n,r)=>{this.f.push({factory:t,c:n,e:r}),this.h()})}h(){for(;this.f.length&&this.b<this.d;){const t=this.f.shift();this.b++;const n=t.factory();n.then(t.c,t.e),n.then(()=>this.j(),()=>this.j())}}j(){this.a--,this.b--,this.f.length>0?this.h():this.g.fire()}dispose(){this.g.dispose()}}e.$1g=F;class z extends F{constructor(){super(1)}}e.$2g=z;class q{constructor(){this.a=new a,this.b=0}queue(t){return this.a.isRunning()?this.a.queue(()=>this.a.run(this.b++,t())):this.a.run(this.b++,t())}}e.$3g=q;class X{constructor(){this.a=new Map,this.b=new Set,this.d=void 0,this.f=0}async whenDrained(){if(this.g())return;const t=new P;return this.b.add(t),t.p}g(){for(const[,t]of this.a)if(t.size>0)return!1;return!0}queueFor(t,n=v.$mg){const r=n.getComparisonKey(t);let o=this.a.get(r);if(!o){o=new z;const R=this.f++,J=M.Event.once(o.onDrained)(()=>{o?.dispose(),this.a.delete(r),this.h(),this.d?.deleteAndDispose(R),this.d?.size===0&&(this.d.dispose(),this.d=void 0)});this.d||(this.d=new w.$1c),this.d.set(R,J),this.a.set(r,o)}return o}h(){this.g()&&this.j()}j(){for(const t of this.b)t.complete();this.b.clear()}dispose(){for(const[,t]of this.a)t.dispose();this.a.clear(),this.j(),this.d?.dispose()}}e.$4g=X;class se{constructor(t,n){this.a=-1,typeof t=="function"&&typeof n=="number"&&this.setIfNotSet(t,n)}dispose(){this.cancel()}cancel(){this.a!==-1&&(clearTimeout(this.a),this.a=-1)}cancelAndSet(t,n){this.cancel(),this.a=setTimeout(()=>{this.a=-1,t()},n)}setIfNotSet(t,n){this.a===-1&&(this.a=setTimeout(()=>{this.a=-1,t()},n))}}e.$5g=se;class te{constructor(){this.a=-1}dispose(){this.cancel()}cancel(){this.a!==-1&&(clearInterval(this.a),this.a=-1)}cancelAndSet(t,n){this.cancel(),this.a=setInterval(()=>{t()},n)}}e.$6g=te;class p{constructor(t,n){this.b=-1,this.a=t,this.d=n,this.f=this.g.bind(this)}dispose(){this.cancel(),this.a=null}cancel(){this.isScheduled()&&(clearTimeout(this.b),this.b=-1)}schedule(t=this.d){this.cancel(),this.b=setTimeout(this.f,t)}get delay(){return this.d}set delay(t){this.d=t}isScheduled(){return this.b!==-1}flush(){this.isScheduled()&&(this.cancel(),this.h())}g(){this.b=-1,this.a&&this.h()}h(){this.a?.()}}e.$7g=p;class le{constructor(t,n){n%1e3!==0&&console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${n}ms is not a multiple of 1000ms.`),this.a=t,this.b=n,this.d=0,this.f=-1,this.g=this.h.bind(this)}dispose(){this.cancel(),this.a=null}cancel(){this.isScheduled()&&(clearInterval(this.f),this.f=-1)}schedule(t=this.b){t%1e3!==0&&console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${t}ms is not a multiple of 1000ms.`),this.cancel(),this.d=Math.ceil(t/1e3),this.f=setInterval(this.g,1e3)}isScheduled(){return this.f!==-1}h(){this.d--,!(this.d>0)&&(clearInterval(this.f),this.f=-1,this.a?.())}}e.$8g=le;class H extends p{constructor(t,n){super(t,n),this.j=[]}work(t){this.j.push(t),this.isScheduled()||this.schedule()}h(){const t=this.j;this.j=[],this.a?.(t)}dispose(){this.j=[],super.dispose()}}e.$9g=H;class _ extends w.$Sc{constructor(t,n){super(),this.g=t,this.h=n,this.a=[],this.b=this.B(new w.$Tc),this.f=!1}get pending(){return this.a.length}work(t){if(this.f)return!1;if(typeof this.g.maxBufferedWork=="number"){if(this.b.value){if(this.pending+t.length>this.g.maxBufferedWork)return!1}else if(this.pending+t.length-this.g.maxWorkChunkSize>this.g.maxBufferedWork)return!1}for(const n of t)this.a.push(n);return this.b.value||this.j(),!0}j(){this.h(this.a.splice(0,this.g.maxWorkChunkSize)),this.a.length>0&&(this.b.value=new p(()=>{this.b.clear(),this.j()},this.g.throttleDelay),this.b.value.schedule())}dispose(){super.dispose(),this.f=!0}}e.$0g=_,function(){typeof requestIdleCallback!="function"||typeof cancelIdleCallback!="function"?e.$$g=c=>{(0,k.$v)(()=>{if(t)return;const n=Date.now()+15;c(Object.freeze({didTimeout:!0,timeRemaining(){return Math.max(0,n-Date.now())}}))});let t=!1;return{dispose(){t||(t=!0)}}}:e.$$g=(c,t)=>{const n=requestIdleCallback(c,typeof t=="number"?{timeout:t}:void 0);let r=!1;return{dispose(){r||(r=!0,cancelIdleCallback(n))}}}}();class G{constructor(t){this.d=!1,this.a=()=>{try{this.f=t()}catch(n){this.g=n}finally{this.d=!0}},this.b=(0,e.$$g)(()=>this.a())}dispose(){this.b.dispose()}get value(){if(this.d||(this.b.dispose(),this.a()),this.g)throw this.g;return this.f}get isInitialized(){return this.d}}e.$_g=G;async function ne(c,t,n){let r;for(let o=0;o<n;o++)try{return await c()}catch(R){r=R,await V(t)}throw r}e.$ah=ne;class a{isRunning(t){return typeof t=="number"?this.a?.taskId===t:!!this.a}get running(){return this.a?.promise}cancelRunning(){this.a?.cancel()}run(t,n,r){return this.a={taskId:t,cancel:()=>r?.(),promise:n},n.then(()=>this.d(t),()=>this.d(t)),n}d(t){this.a&&t===this.a.taskId&&(this.a=void 0,this.f())}f(){if(this.b){const t=this.b;this.b=void 0,t.run().then(t.promiseResolve,t.promiseReject)}}queue(t){if(this.b)this.b.run=t;else{let n,r;const o=new Promise((R,J)=>{n=R,r=J});this.b={run:t,promise:o,promiseResolve:n,promiseReject:r}}return this.b.promise}hasQueued(){return!!this.b}async join(){return this.b?.promise??this.a?.promise}}e.$bh=a;class h{constructor(t,n=()=>Date.now()){this.d=t,this.f=n,this.a=0,this.b=0}increment(){const t=this.f();return t-this.a>this.d&&(this.a=t,this.b=0),this.b++,this.b}}e.$ch=h;var l;(function(c){c[c.Resolved=0]="Resolved",c[c.Rejected=1]="Rejected"})(l||(l={}));class P{get isRejected(){return this.d?.outcome===1}get isResolved(){return this.d?.outcome===0}get isSettled(){return!!this.d}get value(){return this.d?.outcome===0?this.d?.value:void 0}constructor(){this.p=new Promise((t,n)=>{this.a=t,this.b=n})}complete(t){return new Promise(n=>{this.a(t),this.d={outcome:0,value:t},n()})}error(t){return new Promise(n=>{this.b(t),this.d={outcome:1,value:t},n()})}cancel(){return this.error(new C.$5)}}e.$dh=P;var y;(function(c){async function t(r){let o;const R=await Promise.all(r.map(J=>J.then(ie=>ie,ie=>{o||(o=ie)})));if(typeof o<"u")throw o;return R}c.settled=t;function n(r){return new Promise(async(o,R)=>{try{await r(o,R)}catch(J){R(J)}})}c.withAsyncBody=n})(y||(e.Promises=y={}));var T;(function(c){c[c.Initial=0]="Initial",c[c.DoneOK=1]="DoneOK",c[c.DoneError=2]="DoneError"})(T||(T={}));class I{static fromArray(t){return new I(n=>{n.emitMany(t)})}static fromPromise(t){return new I(async n=>{n.emitMany(await t)})}static fromPromises(t){return new I(async n=>{await Promise.all(t.map(async r=>n.emitOne(await r)))})}static merge(t){return new I(async n=>{await Promise.all(t.map(async r=>{for await(const o of r)n.emitOne(o)}))})}constructor(t){this.a=0,this.b=[],this.d=null,this.f=new M.$Od,queueMicrotask(async()=>{const n={emitOne:r=>this.g(r),emitMany:r=>this.h(r),reject:r=>this.k(r)};try{await Promise.resolve(t(n)),this.j()}catch(r){this.k(r)}finally{n.emitOne=void 0,n.emitMany=void 0,n.reject=void 0}})}[Symbol.asyncIterator](){let t=0;return{next:async()=>{do{if(this.a===2)throw this.d;if(t<this.b.length)return{done:!1,value:this.b[t++]};if(this.a===1)return{done:!0,value:void 0};await M.Event.toPromise(this.f.event)}while(!0)}}}static map(t,n){return new I(async r=>{for await(const o of t)r.emitOne(n(o))})}map(t){return I.map(this,t)}static filter(t,n){return new I(async r=>{for await(const o of t)n(o)&&r.emitOne(o)})}filter(t){return I.filter(this,t)}static coalesce(t){return I.filter(t,n=>!!n)}coalesce(){return I.coalesce(this)}static async toPromise(t){const n=[];for await(const r of t)n.push(r);return n}toPromise(){return I.toPromise(this)}g(t){this.a===0&&(this.b.push(t),this.f.fire())}h(t){this.a===0&&(this.b=this.b.concat(t),this.f.fire())}j(){this.a===0&&(this.a=1,this.f.fire())}k(t){this.a===0&&(this.a=2,this.d=t,this.f.fire())}}e.$eh=I,I.EMPTY=I.fromArray([]);class $ extends I{constructor(t,n){super(n),this.l=t}cancel(){this.l.cancel()}}e.$fh=$;function E(c){const t=new L.$Yd,n=c(t.token);return new $(t,async r=>{const o=t.token.onCancellationRequested(()=>{o.dispose(),t.dispose(),r.reject(new C.$5)});try{for await(const R of n){if(t.token.isCancellationRequested)return;r.emitOne(R)}o.dispose(),t.dispose()}catch(R){o.dispose(),t.dispose(),r.reject(R)}})}e.$gh=E;class N{constructor(){this.a=new P,this.b=new I(r=>{if(t){r.reject(t);return}return n&&r.emitMany(n),this.d=o=>r.reject(o),this.f=o=>r.emitOne(o),this.a.p});let t,n;this.f=r=>{n||(n=[]),n.push(r)},this.d=r=>{t||(t=r)}}get asyncIterable(){return this.b}resolve(){this.a.complete()}reject(t){this.d(t),this.a.complete()}emitOne(t){this.f(t)}}e.$hh=N}),define(re[9],ce([0,1,19,8,5,20,3,2,4]),function(ee,e,L,C,M,w,v,k,U){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Bj=e.$Aj=e.$zj=e.$yj=e.$xj=e.$wj=e.$vj=e.$uj=e.$tj=e.$sj=void 0;function m(){return Object.create(null)}e.$sj=m,e.$tj="**",e.$uj="/";const g="[/\\\\]",S="[^/\\\\]",Y=/\//g;function D(a,h){switch(a){case 0:return"";case 1:return`${S}*?`;default:return`(?:${g}|${S}+${g}${h?`|${g}${S}+`:""})*?`}}function i(a,h){if(!a)return[];const l=[];let P=!1,y=!1,T="";for(const I of a){switch(I){case h:if(!P&&!y){l.push(T),T="";continue}break;case"{":P=!0;break;case"}":P=!1;break;case"[":y=!0;break;case"]":y=!1;break}T+=I}return T&&l.push(T),l}e.$vj=i;function u(a){if(!a)return"";let h="";const l=i(a,e.$uj);if(l.every(P=>P===e.$tj))h=".*";else{let P=!1;l.forEach((y,T)=>{if(y===e.$tj){if(P)return;h+=D(2,T===l.length-1)}else{let I=!1,$="",E=!1,N="";for(const c of y){if(c!=="}"&&I){$+=c;continue}if(E&&(c!=="]"||!N)){let t;c==="-"?t=c:(c==="^"||c==="!")&&!N?t="^":c===e.$uj?t="":t=(0,U.$Ge)(c),N+=t;continue}switch(c){case"{":I=!0;continue;case"[":E=!0;continue;case"}":{const n=`(?:${i($,",").map(r=>u(r)).join("|")})`;h+=n,I=!1,$="";break}case"]":{h+="["+N+"]",E=!1,N="";break}case"?":h+=S;continue;case"*":h+=D(1);continue;default:h+=(0,U.$Ge)(c)}}T<l.length-1&&(l[T+1]!==e.$tj||T+2<l.length)&&(h+=g)}P=y===e.$tj})}return h}const d=/^\*\*\/\*\.[\w\.-]+$/,B=/^\*\*\/([\w\.-]+)\/?$/,K=/^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/,b=/^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/,Q=/^\*\*((\/[\w\.-]+)+)\/?$/,x=/^([\w\.-]+(\/[\w\.-]+)*)\/?$/,j=new w.$Dc(1e4),W=function(){return!1},A=function(){return null};function V(a,h){if(!a)return A;let l;typeof a!="string"?l=a.pattern:l=a,l=l.trim();const P=`${l}_${!!h.trimForExclusions}`;let y=j.get(P);if(y)return Z(y,a);let T;return d.test(l)?y=f(l.substr(4),l):(T=B.exec(s(l,h)))?y=O(T[1],l):(h.trimForExclusions?b:K).test(l)?y=F(l,h):(T=Q.exec(s(l,h)))?y=z(T[1].substr(1),l,!0):(T=x.exec(s(l,h)))?y=z(T[1],l,!1):y=q(l),j.set(P,y),Z(y,a)}function Z(a,h){if(typeof h=="string")return a;const l=function(P,y){return(0,M.$Yf)(P,h.base,!k.$f)?a((0,U.$Ke)(P.substr(h.base.length),v.sep),y):null};return l.allBasenames=a.allBasenames,l.allPaths=a.allPaths,l.basenames=a.basenames,l.patterns=a.patterns,l}function s(a,h){return h.trimForExclusions&&a.endsWith("/**")?a.substr(0,a.length-2):a}function f(a,h){return function(l,P){return typeof l=="string"&&l.endsWith(a)?h:null}}function O(a,h){const l=`/${a}`,P=`\\${a}`,y=function(I,$){return typeof I!="string"?null:$?$===a?h:null:I===a||I.endsWith(l)||I.endsWith(P)?h:null},T=[a];return y.basenames=T,y.patterns=[h],y.allBasenames=T,y}function F(a,h){const l=G(a.slice(1,-1).split(",").map($=>V($,h)).filter($=>$!==A),a),P=l.length;if(!P)return A;if(P===1)return l[0];const y=function($,E){for(let N=0,c=l.length;N<c;N++)if(l[N]($,E))return a;return null},T=l.find($=>!!$.allBasenames);T&&(y.allBasenames=T.allBasenames);const I=l.reduce(($,E)=>E.allPaths?$.concat(E.allPaths):$,[]);return I.length&&(y.allPaths=I),y}function z(a,h,l){const P=v.sep===v.$gc.sep,y=P?a:a.replace(Y,v.sep),T=v.sep+y,I=v.$gc.sep+a;let $;return l?$=function(E,N){return typeof E=="string"&&(E===y||E.endsWith(T)||!P&&(E===a||E.endsWith(I)))?h:null}:$=function(E,N){return typeof E=="string"&&(E===y||!P&&E===a)?h:null},$.allPaths=[(l?"*/":"./")+a],$}function q(a){try{const h=new RegExp(`^${u(a)}$`);return function(l){return h.lastIndex=0,typeof l=="string"&&h.test(l)?a:null}}catch{return A}}function X(a,h,l){return!a||typeof h!="string"?!1:se(a)(h,void 0,l)}e.$wj=X;function se(a,h={}){if(!a)return W;if(typeof a=="string"||te(a)){const l=V(a,h);if(l===A)return W;const P=function(y,T){return!!l(y,T)};return l.allBasenames&&(P.allBasenames=l.allBasenames),l.allPaths&&(P.allPaths=l.allPaths),P}return H(a,h)}e.$xj=se;function te(a){const h=a;return h?typeof h.base=="string"&&typeof h.pattern=="string":!1}e.$yj=te;function p(a){return a.allBasenames||[]}e.$zj=p;function le(a){return a.allPaths||[]}e.$Aj=le;function H(a,h){const l=G(Object.getOwnPropertyNames(a).map($=>_($,a[$],h)).filter($=>$!==A)),P=l.length;if(!P)return A;if(!l.some($=>!!$.requiresSiblings)){if(P===1)return l[0];const $=function(c,t){let n;for(let r=0,o=l.length;r<o;r++){const R=l[r](c,t);if(typeof R=="string")return R;(0,C.$Hg)(R)&&(n||(n=[]),n.push(R))}return n?(async()=>{for(const r of n){const o=await r;if(typeof o=="string")return o}return null})():null},E=l.find(c=>!!c.allBasenames);E&&($.allBasenames=E.allBasenames);const N=l.reduce((c,t)=>t.allPaths?c.concat(t.allPaths):c,[]);return N.length&&($.allPaths=N),$}const y=function($,E,N){let c,t;for(let n=0,r=l.length;n<r;n++){const o=l[n];o.requiresSiblings&&N&&(E||(E=(0,v.$nc)($)),c||(c=E.substr(0,E.length-(0,v.$oc)($).length)));const R=o($,E,c,N);if(typeof R=="string")return R;(0,C.$Hg)(R)&&(t||(t=[]),t.push(R))}return t?(async()=>{for(const n of t){const r=await n;if(typeof r=="string")return r}return null})():null},T=l.find($=>!!$.allBasenames);T&&(y.allBasenames=T.allBasenames);const I=l.reduce(($,E)=>E.allPaths?$.concat(E.allPaths):$,[]);return I.length&&(y.allPaths=I),y}function _(a,h,l){if(h===!1)return A;const P=V(a,l);if(P===A)return A;if(typeof h=="boolean")return P;if(h){const y=h.when;if(typeof y=="string"){const T=(I,$,E,N)=>{if(!N||!P(I,$))return null;const c=y.replace("$(basename)",()=>E),t=N(c);return(0,C.$Hg)(t)?t.then(n=>n?a:null):t?a:null};return T.requiresSiblings=!0,T}}return P}function G(a,h){const l=a.filter($=>!!$.basenames);if(l.length<2)return a;const P=l.reduce(($,E)=>{const N=E.basenames;return N?$.concat(N):$},[]);let y;if(h){y=[];for(let $=0,E=P.length;$<E;$++)y.push(h)}else y=l.reduce(($,E)=>{const N=E.patterns;return N?$.concat(N):$},[]);const T=function($,E){if(typeof $!="string")return null;if(!E){let c;for(c=$.length;c>0;c--){const t=$.charCodeAt(c-1);if(t===47||t===92)break}E=$.substr(c)}const N=P.indexOf(E);return N!==-1?y[N]:null};T.basenames=P,T.patterns=y,T.allBasenames=P;const I=a.filter($=>!$.basenames);return I.push(T),I}function ne(a,h){return(0,L.$ub)(a,h,(l,P)=>typeof l=="string"&&typeof P=="string"?l===P:typeof l!="string"&&typeof P!="string"?l.base===P.base&&l.pattern===P.pattern:!1)}e.$Bj=ne}),define(re[14],ce([0,1,21]),function(ee,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Whc=void 0;const C=(M,w,v)=>{let k;if(M[0]===255&&M[1]===254)k=new TextDecoder("utf-16le").decode(M);else if(M[0]===254&&M[1]===255)k=new TextDecoder("utf-16be").decode(M);else if(k=new TextDecoder("utf8").decode(M),k.slice(0,1e3).includes("\uFFFD")&&M.includes(0))return[];const U=[],m=[];let g=null,S=v.remainingResultQuota;for(;S>=0&&(g=w.exec(k));)m.push({matchStartIndex:g.index,matchedText:g[0]}),S--;if(m.length){const Y=new Set,D=new Set,i=[],u=Q=>k.slice(i[Q].start,i[Q].end);let d=0,B=null;const K=/\r?\n/g;for(;B=K.exec(k);)i.push({start:d,end:B.index}),d=B.index+B[0].length;d<k.length&&i.push({start:d,end:k.length});let b=0;for(const{matchStartIndex:Q,matchedText:x}of m){if(S<0)break;for(;i[b+1]&&Q>i[b].end;)b++;let j=b;for(;i[j+1]&&Q+x.length>i[j].end;)j++;if(v.beforeContext)for(let f=Math.max(0,b-v.beforeContext);f<b;f++)Y.add(f);let W="",A=0;for(let f=b;f<=j;f++){let O=u(f);v.previewOptions?.charsPerLine&&O.length>v.previewOptions.charsPerLine&&(A=Math.max(Q-i[b].start-20,0),O=O.substr(A,v.previewOptions.charsPerLine)),W+=`${O}
`,D.add(f)}const V=new L.$ys(b,Q-i[b].start,j,Q+x.length-i[j].start),Z=new L.$ys(0,Q-i[b].start-A,j-b,Q+x.length-i[j].start-(j===b?A:0)),s={ranges:V,preview:{text:W,matches:Z}};if(U.push(s),v.afterContext)for(let f=j+1;f<=Math.min(j+v.afterContext,i.length-1);f++)Y.add(f)}for(const Q of Y)D.has(Q)||U.push({text:u(Q),lineNumber:Q+1})}return U};e.$Whc=C}),define(re[15],ce([0,1,9]),function(ee,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$uub=void 0;class C{constructor(w,v,k){if(this.b=v,this.c=k,v[v.length-1]==="\\")throw Error("Unexpected path format, do not use trailing backslashes");v[v.length-1]!=="/"&&(v+="/"),this.a=this.e(w,this.b,this.c)}updateContents(w){this.a=this.e(w,this.b,this.c)}isPathIncludedInTraversal(w,v){if(w[0]!=="/"||w[w.length-1]==="/")throw Error("Unexpected path format, expectred to begin with slash and end without. got:"+w);return!this.a(w,v)}isArbitraryPathIgnored(w,v){if(w[0]!=="/"||w[w.length-1]==="/")throw Error("Unexpected path format, expectred to begin with slash and end without. got:"+w);const k=w.split("/").filter(g=>g);let U=!1,m="";for(let g=0;g<k.length;g++){const S=g===k.length-1,Y=k[g];if(m=m+"/"+Y,!this.isPathIncludedInTraversal(m,S?v:!0)){U=!0;break}}return U}d(w,v,k){const U=w.map(g=>this.f(g,v)),m=Object.create(null);for(const g of U)m[g]=!0;return L.$xj(m,{trimForExclusions:k})}e(w,v,k){const U=w.split(`
`).map(b=>b.trim()).filter(b=>b&&b[0]!=="#"),m=U.filter(b=>!b.endsWith("/")),g=m.filter(b=>!b.includes("!")),S=this.d(g,v,!0),Y=m.filter(b=>b.includes("!")).map(b=>b.replace(/!/g,"")),D=this.d(Y,v,!1),i=U.filter(b=>!b.includes("!")),u=this.d(i,v,!0),d=U.filter(b=>b.includes("!")).map(b=>b.replace(/!/g,"")),B=this.d(d,v,!1);return(b,Q)=>b.startsWith(v)?Q&&u(b)&&!B(b)||S(b)&&!D(b)?!0:k?k.a(b,Q):!1:!1}f(w,v){const k=w.indexOf("/");return k===-1||k===w.length-1?w="**/"+w:(k===0?v.slice(-1)==="/"&&(w=w.slice(1)):v.slice(-1)!=="/"&&(w="/"+w),w=v+w),w}}e.$uub=C}),define(re[22],ce([0,1,9,6,3,13,14,15,4,8,7]),function(ee,e,L,C,M,w,v,k,U,m,g){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LocalFileSearchSimpleWorker=e.create=void 0;const S=!1,Y=+new Date,D={},i=async(j,W)=>{if(!S)return W();const A=Date.now(),V=(D[j]??0)+1;console.info(j,V,"starting",Math.round((A-Y)*10)/1e4),D[j]=V;const Z=await W(),s=Date.now();return console.info(j,V,"took",s-A),Z};function u(j){return new d(j)}e.create=u;class d{constructor(W){this.d=W,this.cancellationTokens=new Map}cancelQuery(W){this.cancellationTokens.get(W)?.cancel()}g(W){const A=new w.$Yd;return this.cancellationTokens.set(W,A),A}async listDirectory(W,A,V,Z,s){const f=K(V),O=new g.$lg(()=>Z),F=this.g(s),z=[];let q=!1,X=0;const se=A.maxResults||512,te=A.filePattern?p=>A.filePattern.split("").every(le=>p.includes(le)):p=>!0;return await i("listDirectory",()=>this.h(W,b(A),f,O,p=>{if(te(p.name))return X++,se&&X>se&&(q=!0,F.cancel()),z.push(p.path)},F.token)),{results:z,limitHit:q}}async searchDirectory(W,A,V,Z,s){const f=K(V),O=new g.$lg(()=>Z);return i("searchInFiles",async()=>{const F=this.g(s),z=[],q=B(A.contentPattern),X=[];let se=0,te=0;const p=!1,le=async H=>{if(F.token.isCancellationRequested)return;se++;const _=await H.resolve();if(F.token.isCancellationRequested)return;const G=new Uint8Array(_),ne=(0,v.$Whc)(G,q,{afterContext:A.afterContext??0,beforeContext:A.beforeContext??0,previewOptions:A.previewOptions,remainingResultQuota:A.maxResults?A.maxResults-te:1e4});if(ne.length){te+=ne.length,A.maxResults&&te>A.maxResults&&F.cancel();const a={resource:C.URI.joinPath(f.folder,H.path),results:ne};this.d.sendTextSearchMatch(a,s),z.push(a)}};return await i("walkFolderToResolve",()=>this.h(W,b(A),f,O,async H=>X.push(le(H)),F.token)),await i("resolveOngoingProcesses",()=>Promise.all(X)),S&&console.log("Searched in",se,"files"),{results:z,limitHit:p}})}async h(W,A,V,Z,s,f){const O=L.$xj(V.excludePattern??{},{trimForExclusions:!0}),F=(H,_,G)=>(H=H.slice(1),!!(O(H,_,G)||Q(A,H))),z=(H,_,G)=>(H=H.slice(1),!(O(H,_,G)||!x(A,H,Z))),q=(H,_)=>({type:"file",name:H.name,path:_,resolve:()=>H.getFile().then(ne=>ne.arrayBuffer())}),X=H=>H.kind==="directory",se=H=>H.kind==="file",te=async(H,_,G)=>{if(!V.disregardIgnoreFiles){const a=await Promise.all([H.getFileHandle(".gitignore").catch(h=>{}),H.getFileHandle(".ignore").catch(h=>{})]);await Promise.all(a.map(async h=>{if(!h)return;const l=new TextDecoder("utf8").decode(new Uint8Array(await(await h.getFile()).arrayBuffer()));G=new k.$uub(l,_,G)}))}const ne=m.Promises.withAsyncBody(async a=>{const h=[],l=[],P=[],y=new Set;for await(const T of H.entries())P.push(T),y.add(T[0]);for(const[T,I]of P){if(f.isCancellationRequested)break;const $=_+T;if(G&&!G.isPathIncludedInTraversal($,I.kind==="directory"))continue;const E=N=>y.has(N);X(I)&&!F($,T,E)?l.push(te(I,$+"/",G)):se(I)&&z($,T,E)&&h.push(q(I,$))}a([...await Promise.all(l),...h])});return{type:"dir",name:H.name,entries:ne}},p=async(H,_)=>{f.isCancellationRequested||await Promise.all((await H.entries).sort((G,ne)=>-(G.type==="dir"?0:1)+(ne.type==="dir"?0:1)).map(async G=>G.type==="dir"?p(G,_):_(G)))},le=await i("process",()=>te(W,"/"));await i("resolve",()=>p(le,s))}}e.LocalFileSearchSimpleWorker=d;function B(j){return(0,U.$Oe)(j.pattern,!!j.isRegExp,{wholeWord:j.isWordMatch,global:!0,matchCase:j.isCaseSensitive,multiline:!0,unicode:!0})}function K(j){return{...j,folder:C.URI.revive(j.folder)}}function b(j){return{...j,extraFileResources:j.extraFileResources?.map(W=>C.URI.revive(W)),folderQueries:j.folderQueries.map(W=>K(W))}}function Q(j,W){return!!(j.excludePattern&&L.$wj(j.excludePattern,W))}function x(j,W,A){return j.excludePattern&&L.$wj(j.excludePattern,W)?!1:j.includePattern||j.usingSearchPaths?j.includePattern&&L.$wj(j.includePattern,W)?!0:j.usingSearchPaths?!!j.folderQueries&&j.folderQueries.some(V=>{const Z=V.folder,s=C.URI.file(W);if(A.isEqualOrParent(s,Z)){const f=M.$lc(Z.path,s.path);return!V.includePattern||!!L.$wj(V.includePattern,f)}else return!1}):!1:!0}})}).call(this);

//# sourceMappingURL=localFileSearch.js.map