(()=>{"use strict";var e={4516:(e,s,r)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.$qb=void 0;const t=r(3685);s.$qb=class{constructor(e){this.b=e;const s=process.env.VSCODE_GIT_IPC_HANDLE;if(!s)throw new Error("Missing VSCODE_GIT_IPC_HANDLE");this.a=s}call(e){const s={socketPath:this.a,path:`/${this.b}`,method:"POST"};return new Promise(((r,o)=>{const n=t.request(s,(e=>{if(200!==e.statusCode)return o(new Error(`Bad status code: ${e.statusCode}`));const s=[];e.on("data",(e=>s.push(e))),e.on("end",(()=>r(JSON.parse(Buffer.concat(s).toString("utf8")))))}));n.on("error",(e=>o(e))),n.write(JSON.stringify(e)),n.end()}))}}},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")}},s={};function r(t){var o=s[t];if(void 0!==o)return o.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,r),n.exports}var t={};(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0});const s=r(7147),o=r(4516);function n(e){console.error("Missing or invalid credentials."),console.error(e),process.exit(1)}!function(e){if(!process.env.VSCODE_GIT_ASKPASS_PIPE)return n("Missing pipe");if(!process.env.VSCODE_GIT_ASKPASS_TYPE)return n("Missing type");if("https"!==process.env.VSCODE_GIT_ASKPASS_TYPE&&"ssh"!==process.env.VSCODE_GIT_ASKPASS_TYPE)return n(`Invalid type: ${process.env.VSCODE_GIT_ASKPASS_TYPE}`);if("fetch"===process.env.VSCODE_GIT_COMMAND&&process.env.VSCODE_GIT_FETCH_SILENT)return n("Skip silent fetch commands");const r=process.env.VSCODE_GIT_ASKPASS_PIPE,t=process.env.VSCODE_GIT_ASKPASS_TYPE,i="https"===t?e[2]:e[3];let c,p,a;"https"===t&&(c=e[4].replace(/^["']+|["':]+$/g,"")),"ssh"===t&&(/passphrase/i.test(i)?p=e[6].replace(/^["']+|["':]+$/g,""):(c=e[6].replace(/^["']+|["':]+$/g,""),a=e[15])),new o.$qb("askpass").call({askpassType:t,request:i,host:c,file:p,fingerprint:a}).then((e=>{s.writeFileSync(r,e+"\n"),setTimeout((()=>process.exit(0)),0)})).catch((e=>n(e)))}(process.argv)})();var o=exports;for(var n in t)o[n]=t[n];t.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/9658969084238651b6dde258e04f4abd9b14bfd1/extensions/git/dist/askpass-main.js.map