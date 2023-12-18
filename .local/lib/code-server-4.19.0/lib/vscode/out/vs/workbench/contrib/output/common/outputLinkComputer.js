"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var M=["require","exports","vs/base/common/platform","vs/base/common/extpath","vs/base/common/strings","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/base/common/errors","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],N=function(k){for(var e=[],s=0,a=k.length;s<a;s++)e[s]=M[k[s]];return e};define(M[3],N([0,1,7,2,4,9]),function(k,e,s,a,d,m){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$7f=e.$6f=e.$5f=e.$4f=e.$3f=e.$2f=e.$1f=e.$Zf=e.$Yf=e.$Xf=e.$Wf=e.$Vf=e.$Uf=e.$Tf=e.$Sf=e.$Rf=void 0;function R(t){return t===47||t===92}e.$Rf=R;function P(t){return t.replace(/[\\/]/g,s.$gc.sep)}e.$Sf=P;function y(t){return t.indexOf("/")===-1&&(t=P(t)),/^[a-zA-Z]:(\/|$)/.test(t)&&(t="/"+t),t}e.$Tf=y;function c(t,f=s.$gc.sep){if(!t)return"";const h=t.length,A=t.charCodeAt(0);if(R(A)){if(R(t.charCodeAt(1))&&!R(t.charCodeAt(2))){let w=3;const O=w;for(;w<h&&!R(t.charCodeAt(w));w++);if(O!==w&&!R(t.charCodeAt(w+1))){for(w+=1;w<h;w++)if(R(t.charCodeAt(w)))return t.slice(0,w+1).replace(/[\\/]/g,f)}}return f}else if(o(A)&&t.charCodeAt(1)===58)return R(t.charCodeAt(2))?t.slice(0,2)+f:t.slice(0,2);let C=t.indexOf("://");if(C!==-1){for(C+=3;C<h;C++)if(R(t.charCodeAt(C)))return t.slice(0,C+1)}return""}e.$Uf=c;function l(t){if(!a.$d||!t||t.length<5)return!1;let f=t.charCodeAt(0);if(f!==92||(f=t.charCodeAt(1),f!==92))return!1;let h=2;const A=h;for(;h<t.length&&(f=t.charCodeAt(h),f!==92);h++);return!(A===h||(f=t.charCodeAt(h+1),isNaN(f)||f===92))}e.$Vf=l;const v=/[\\/:\*\?"<>\|]/g,$=/[\\/]/g,u=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function n(t,f=a.$d){const h=f?v:$;return!(!t||t.length===0||/^\s+$/.test(t)||(h.lastIndex=0,h.test(t))||f&&u.test(t)||t==="."||t===".."||f&&t[t.length-1]==="."||f&&t.length!==t.trim().length||t.length>255)}e.$Wf=n;function i(t,f,h){const A=t===f;return!h||A?A:!t||!f?!1:(0,d.$3e)(t,f)}e.$Xf=i;function r(t,f,h,A=s.sep){if(t===f)return!0;if(!t||!f||f.length>t.length)return!1;if(h){if(!(0,d.$4e)(t,f))return!1;if(f.length===t.length)return!0;let w=f.length;return f.charAt(f.length-1)===A&&w--,t.charAt(w)===A}return f.charAt(f.length-1)!==A&&(f+=A),t.indexOf(f)===0}e.$Yf=r;function o(t){return t>=65&&t<=90||t>=97&&t<=122}e.$Zf=o;function g(t,f){return a.$d&&t.endsWith(":")&&(t+=s.sep),(0,s.$ic)(t)||(t=(0,s.$jc)(f,t)),t=(0,s.$hc)(t),a.$d?(t=(0,d.$Le)(t,s.sep),t.endsWith(":")&&(t+=s.sep)):(t=(0,d.$Le)(t,s.sep),t||(t=s.sep)),t}e.$1f=g;function b(t){const f=(0,s.$hc)(t);return a.$d?t.length>3?!1:T(f)&&(t.length===2||f.charCodeAt(2)===92):f===s.$gc.sep}e.$2f=b;function T(t,f=a.$d){return f?o(t.charCodeAt(0))&&t.charCodeAt(1)===58:!1}e.$3f=T;function E(t,f=a.$d){return T(t,f)?t[0]:void 0}e.$4f=E;function U(t,f,h){return f.length>t.length?-1:t===f?0:(h&&(t=t.toLowerCase(),f=f.toLowerCase()),t.indexOf(f))}e.$5f=U;function L(t){const f=t.split(":");let h,A,C;for(const w of f){const O=Number(w);(0,m.$Df)(O)?A===void 0?A=O:C===void 0&&(C=O):h=h?[h,w].join(":"):w}if(!h)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:h,line:A!==void 0?A:void 0,column:C!==void 0?C:A!==void 0?1:void 0}}e.$6f=L;const q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",I="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function D(t,f,h=8){let A="";for(let w=0;w<h;w++){let O;w===0&&a.$d&&!f&&(h===3||h===4)?O=I:O=q,A+=O.charAt(Math.floor(Math.random()*O.length))}let C;return f?C=`${f}-${A}`:C=A,t?(0,s.$jc)(t,C):C}e.$7f=D}),define(M[5],N([0,1,10,2,6]),function(k,e,s,a,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.$dg=e.$cg=e.$bg=e.$ag=e.$_f=e.$$f=e.$0f=e.$9f=e.$8f=e.Schemas=void 0;var m;(function(c){c.inMemory="inmemory",c.vscode="vscode",c.internal="private",c.walkThrough="walkThrough",c.walkThroughSnippet="walkThroughSnippet",c.http="http",c.https="https",c.file="file",c.mailto="mailto",c.untitled="untitled",c.data="data",c.command="command",c.vscodeRemote="vscode-remote",c.vscodeRemoteResource="vscode-remote-resource",c.vscodeManagedRemoteResource="vscode-managed-remote-resource",c.vscodeUserData="vscode-userdata",c.vscodeCustomEditor="vscode-custom-editor",c.vscodeNotebookCell="vscode-notebook-cell",c.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",c.vscodeNotebookCellOutput="vscode-notebook-cell-output",c.vscodeInteractiveInput="vscode-interactive-input",c.vscodeSettings="vscode-settings",c.vscodeWorkspaceTrust="vscode-workspace-trust",c.vscodeTerminal="vscode-terminal",c.vscodeChatSesssion="vscode-chat-editor",c.webviewPanel="webview-panel",c.vscodeWebview="vscode-webview",c.extension="extension",c.vscodeFileResource="vscode-file",c.tmp="tmp",c.vsls="vsls",c.vscodeSourceControl="vscode-scm"})(m||(e.Schemas=m={})),e.$8f="vscode-tkn",e.$9f="tkn";class R{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${m.vscodeRemoteResource}`}setPreferredWebSchema(l){this.d=l}setDelegate(l){this.e=l}setServerRootPath(l){this.f=`${l}/${m.vscodeRemoteResource}`}set(l,v,$){this.a[l]=v,this.b[l]=$}setConnectionToken(l,v){this.c[l]=v}getPreferredWebSchema(){return this.d}rewrite(l){if(this.e)try{return this.e(l)}catch(r){return s.$1(r),l}const v=l.authority;let $=this.a[v];$&&$.indexOf(":")!==-1&&$.indexOf("[")===-1&&($=`[${$}]`);const u=this.b[v],n=this.c[v];let i=`path=${encodeURIComponent(l.path)}`;return typeof n=="string"&&(i+=`&${e.$9f}=${encodeURIComponent(n)}`),d.URI.from({scheme:a.$j?this.d:m.vscodeRemoteResource,authority:`${$}:${u}`,path:a.$j?(window.location.pathname+"/"+this.f).replace(/\/\/+/g,"/"):this.f,query:i})}}e.$0f=new R,e.$$f="vs/../../extensions",e.$_f="vs/../../node_modules",e.$ag="vs/../../node_modules.asar",e.$bg="vs/../../node_modules.asar.unpacked",e.$cg="vscode-app";class P{asBrowserUri(l){const v=this.b(l,k);return this.uriToBrowserUri(v)}uriToBrowserUri(l){return l.scheme===m.vscodeRemote?e.$0f.rewrite(l):l.scheme===m.file&&(a.$h||a.$k&&a.$b.origin===`${m.vscodeFileResource}://${P.a}`)?l.with({scheme:m.vscodeFileResource,authority:l.authority||P.a,query:null,fragment:null}):l}asFileUri(l){const v=this.b(l,k);return this.uriToFileUri(v)}uriToFileUri(l){return l.scheme===m.vscodeFileResource?l.with({scheme:m.file,authority:l.authority!==P.a?l.authority:null,query:null,fragment:null}):l}b(l,v){return d.URI.isUri(l)?l:d.URI.parse(v.toUrl(l))}}P.a=e.$cg,e.$dg=new P;var y;(function(c){const l=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);c.CoopAndCoep=Object.freeze(l.get("3"));const v="vscode-coi";function $(n){let i;typeof n=="string"?i=new URL(n).searchParams:n instanceof URL?i=n.searchParams:d.URI.isUri(n)&&(i=new URL(n.toString(!0)).searchParams);const r=i?.get(v);if(r)return l.get(r)}c.getHeadersFromQuery=$;function u(n,i,r){if(!globalThis.crossOriginIsolated)return;const o=i&&r?"3":r?"2":"1";n instanceof URLSearchParams?n.set(v,o):n[v]=o}c.addSearchParam=u})(y||(e.COI=y={}))}),define(M[8],N([0,1,3,5,7,2,4,6]),function(k,e,s,a,d,m,R,P){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Gg=e.DataUri=e.$Fg=e.$Eg=e.$Dg=e.$Cg=e.$Bg=e.$Ag=e.$zg=e.$yg=e.$xg=e.$wg=e.$vg=e.$ug=e.$tg=e.$sg=e.$rg=e.$qg=e.$pg=e.$og=e.$ng=e.$mg=e.$lg=e.$kg=void 0;function y(u){return(0,P.$wc)(u,!0)}e.$kg=y;class c{constructor(n){this.a=n}compare(n,i,r=!1){return n===i?0:(0,R.$Ve)(this.getComparisonKey(n,r),this.getComparisonKey(i,r))}isEqual(n,i,r=!1){return n===i?!0:!n||!i?!1:this.getComparisonKey(n,r)===this.getComparisonKey(i,r)}getComparisonKey(n,i=!1){return n.with({path:this.a(n)?n.path.toLowerCase():void 0,fragment:i?null:void 0}).toString()}ignorePathCasing(n){return this.a(n)}isEqualOrParent(n,i,r=!1){if(n.scheme===i.scheme){if(n.scheme===a.Schemas.file)return s.$Yf(y(n),y(i),this.a(n))&&n.query===i.query&&(r||n.fragment===i.fragment);if((0,e.$Bg)(n.authority,i.authority))return s.$Yf(n.path,i.path,this.a(n),"/")&&n.query===i.query&&(r||n.fragment===i.fragment)}return!1}joinPath(n,...i){return P.URI.joinPath(n,...i)}basenameOrAuthority(n){return(0,e.$tg)(n)||n.authority}basename(n){return d.$gc.basename(n.path)}extname(n){return d.$gc.extname(n.path)}dirname(n){if(n.path.length===0)return n;let i;return n.scheme===a.Schemas.file?i=P.URI.file(d.$mc(y(n))).path:(i=d.$gc.dirname(n.path),n.authority&&i.length&&i.charCodeAt(0)!==47&&(console.error(`dirname("${n.toString})) resulted in a relative path`),i="/")),n.with({path:i})}normalizePath(n){if(!n.path.length)return n;let i;return n.scheme===a.Schemas.file?i=P.URI.file(d.$hc(y(n))).path:i=d.$gc.normalize(n.path),n.with({path:i})}relativePath(n,i){if(n.scheme!==i.scheme||!(0,e.$Bg)(n.authority,i.authority))return;if(n.scheme===a.Schemas.file){const g=d.$lc(y(n),y(i));return m.$d?s.$Sf(g):g}let r=n.path||"/";const o=i.path||"/";if(this.a(n)){let g=0;for(const b=Math.min(r.length,o.length);g<b&&!(r.charCodeAt(g)!==o.charCodeAt(g)&&r.charAt(g).toLowerCase()!==o.charAt(g).toLowerCase());g++);r=o.substr(0,g)+r.substr(g)}return d.$gc.relative(r,o)}resolvePath(n,i){if(n.scheme===a.Schemas.file){const r=P.URI.file(d.$kc(y(n),i));return n.with({authority:r.authority,path:r.path})}return i=s.$Tf(i),n.with({path:d.$gc.resolve(n.path,i)})}isAbsolutePath(n){return!!n.path&&n.path[0]==="/"}isEqualAuthority(n,i){return n===i||n!==void 0&&i!==void 0&&(0,R.$3e)(n,i)}hasTrailingPathSeparator(n,i=d.sep){if(n.scheme===a.Schemas.file){const r=y(n);return r.length>s.$Uf(r).length&&r[r.length-1]===i}else{const r=n.path;return r.length>1&&r.charCodeAt(r.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(n.fsPath)}}removeTrailingPathSeparator(n,i=d.sep){return(0,e.$Cg)(n,i)?n.with({path:n.path.substr(0,n.path.length-1)}):n}addTrailingPathSeparator(n,i=d.sep){let r=!1;if(n.scheme===a.Schemas.file){const o=y(n);r=o!==void 0&&o.length===s.$Uf(o).length&&o[o.length-1]===i}else{i="/";const o=n.path;r=o.length===1&&o.charCodeAt(o.length-1)===47}return!r&&!(0,e.$Cg)(n,i)?n.with({path:n.path+"/"}):n}}e.$lg=c,e.$mg=new c(()=>!1),e.$ng=new c(u=>u.scheme===a.Schemas.file?!m.$f:!0),e.$og=new c(u=>!0),e.$pg=e.$mg.isEqual.bind(e.$mg),e.$qg=e.$mg.isEqualOrParent.bind(e.$mg),e.$rg=e.$mg.getComparisonKey.bind(e.$mg),e.$sg=e.$mg.basenameOrAuthority.bind(e.$mg),e.$tg=e.$mg.basename.bind(e.$mg),e.$ug=e.$mg.extname.bind(e.$mg),e.$vg=e.$mg.dirname.bind(e.$mg),e.$wg=e.$mg.joinPath.bind(e.$mg),e.$xg=e.$mg.normalizePath.bind(e.$mg),e.$yg=e.$mg.relativePath.bind(e.$mg),e.$zg=e.$mg.resolvePath.bind(e.$mg),e.$Ag=e.$mg.isAbsolutePath.bind(e.$mg),e.$Bg=e.$mg.isEqualAuthority.bind(e.$mg),e.$Cg=e.$mg.hasTrailingPathSeparator.bind(e.$mg),e.$Dg=e.$mg.removeTrailingPathSeparator.bind(e.$mg),e.$Eg=e.$mg.addTrailingPathSeparator.bind(e.$mg);function l(u,n){const i=[];for(let r=0;r<u.length;r++){const o=n(u[r]);u.some((g,b)=>b===r?!1:(0,e.$qg)(o,n(g)))||i.push(u[r])}return i}e.$Fg=l;var v;(function(u){u.META_DATA_LABEL="label",u.META_DATA_DESCRIPTION="description",u.META_DATA_SIZE="size",u.META_DATA_MIME="mime";function n(i){const r=new Map;i.path.substring(i.path.indexOf(";")+1,i.path.lastIndexOf(";")).split(";").forEach(b=>{const[T,E]=b.split(":");T&&E&&r.set(T,E)});const g=i.path.substring(0,i.path.indexOf(";"));return g&&r.set(u.META_DATA_MIME,g),r}u.parseMetaData=n})(v||(e.DataUri=v={}));function $(u,n,i){if(n){let r=u.path;return r&&r[0]!==d.$gc.sep&&(r=d.$gc.sep+r),u.with({scheme:i,authority:n,path:r})}return u.with({scheme:i})}e.$Gg=$}),define(M[11],N([0,1,6,3,8,4,12,2,5]),function(k,e,s,a,d,m,R,P,y){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class c{constructor($,u){this.b=$,this.a=new Map,this.c(u)}c($){const u=$.workspaceFolders.sort((n,i)=>i.length-n.length).map(n=>s.URI.parse(n));for(const n of u){const i=c.createPatterns(n);this.a.set(n,i)}}d($){return this.b.getMirrorModels().find(n=>n.uri.toString()===$)}computeLinks($){const u=this.d($);if(!u)return[];const n=[],i=m.$Qe(u.getValue());for(const[r,o]of this.a){const g={toResource:b=>typeof b=="string"?d.$wg(r,b):null};for(let b=0,T=i.length;b<T;b++)n.push(...c.detectLinks(i[b],b+1,o,g))}return n}static createPatterns($){const u=[],n=$.scheme===y.Schemas.file?$.fsPath:$.path,i=[n];P.$d&&$.scheme===y.Schemas.file&&i.push(a.$Sf(n));for(const r of i){const o='[^\\s\\(\\):<>"]',b=`${`(?:${o}| ${o})`}+\\.${o}+`,T=`${o}+`;u.push(new RegExp(m.$Ge(r)+`(${b}) on line ((\\d+)(, column (\\d+))?)`,"gi")),u.push(new RegExp(m.$Ge(r)+`(${b}):line ((\\d+)(, column (\\d+))?)`,"gi")),u.push(new RegExp(m.$Ge(r)+`(${b})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),u.push(new RegExp(m.$Ge(r)+`(${T})(:(\\d+))?(:(\\d+))?`,"gi"))}return u}static detectLinks($,u,n,i){const r=[];return n.forEach(o=>{o.lastIndex=0;let g,b=0;for(;(g=o.exec($))!==null;){const T=m.$Le(g[1],".").replace(/\\/g,"/");let E;try{const I=i.toResource(T);I&&(E=I.toString())}catch{continue}if(g[3]){const I=g[3];if(g[5]){const D=g[5];E=m.$De("{0}#{1},{2}",E,I,D)}else E=m.$De("{0}#{1}",E,I)}const U=m.$Le(g[0],"."),L=$.indexOf(U,b);b=L+U.length;const q={startColumn:L+1,startLineNumber:u,endColumn:L+1+U.length,endLineNumber:u};if(r.some(I=>R.$ys.areIntersectingOrTouching(I.range,q)))return;r.push({range:q,url:E})}}),r}}e.OutputLinkComputer=c;function l(v,$){return new c(v,$)}e.create=l})}).call(this);

//# sourceMappingURL=outputLinkComputer.js.map
