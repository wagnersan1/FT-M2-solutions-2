const _0x55ab=['Submit\x20OK\x0a','child_process','application/json','split','git\x20config\x20--get\x20remote.origin.url','hide','then','log','post','stderr:\x20','status','toLowerCase','exit','https://proxy.soyhenry.com:3000/submit','trim','message','catch','now','pop','error:\x20','statusText','@github.com/','error','prompt-sync','git\x20add\x20.','Password:','git\x20commit\x20-m\x20\x22CP\x20commiteado\x20por\x20','stringify'];(function(_0x46de0c,_0x55abd4){const _0x28d685=function(_0x5be387){while(--_0x5be387){_0x46de0c['push'](_0x46de0c['shift']());}};_0x28d685(++_0x55abd4);}(_0x55ab,0x18c));const _0x28d6=function(_0x46de0c,_0x55abd4){_0x46de0c=_0x46de0c-0x0;let _0x28d685=_0x55ab[_0x46de0c];return _0x28d685;};const _0x1bcec9=_0x28d6,{exec}=require(_0x1bcec9('0x19')),fetch=require('node-fetch');var prompt=require(_0x1bcec9('0x13'))();const fs=require('fs');function ejecutar(_0x5be387){return new Promise((_0x8a47bc,_0x324a9f)=>{exec(_0x5be387,(_0x1be703,_0x109527,_0x4440ad)=>{const _0x52d8a4=_0x28d6;if(_0x1be703)return _0x324a9f(_0x52d8a4('0xf')+_0x1be703[_0x52d8a4('0xb')]);if(_0x4440ad)return _0x8a47bc(_0x52d8a4('0x5')+_0x4440ad);_0x8a47bc(_0x109527);});});}(async function iniciarProceso(){const _0x4d40a4=_0x1bcec9,_0x1296fa=prompt('Estas\x20seguro\x20que\x20deseas\x20submitear\x20este\x20resultado?\x20(S/n)\x20')['toLowerCase']();if(_0x1296fa!=='s')return process[_0x4d40a4('0x8')](0x0);const _0x17c9a3=prompt('Usuario\x20de\x20github:')[_0x4d40a4('0x7')](),_0x325c6b=prompt[_0x4d40a4('0x1')](_0x4d40a4('0x15'));let _0x3f032b;try{const _0x40d482=await ejecutar(_0x4d40a4('0x0'));_0x3f032b=_0x40d482[_0x4d40a4('0xa')]()[_0x4d40a4('0x1b')]('/')[_0x4d40a4('0xe')](),await ejecutar(_0x4d40a4('0x14')),await ejecutar(_0x4d40a4('0x16')+_0x17c9a3+'\x20a\x20las\x20'+Date[_0x4d40a4('0xd')]()+'\x22'),await ejecutar('git\x20push\x20https://'+_0x17c9a3+':'+_0x325c6b+_0x4d40a4('0x11')+_0x17c9a3+'/'+_0x3f032b+'\x20master');}catch(_0x3cc094){return console[_0x4d40a4('0x12')](_0x3cc094),process[_0x4d40a4('0x8')](0x0);}fetch(_0x4d40a4('0x9'),{'method':_0x4d40a4('0x4'),'headers':{'Content-Type':_0x4d40a4('0x1a')},'body':JSON[_0x4d40a4('0x17')]({'github':_0x17c9a3,'passed':0x0,'total':0x0,'repo':'FTM2\x20-\x2002-CSS'})})[_0x4d40a4('0x2')](function(_0x48e4ca){const _0x2459d1=_0x4d40a4;if(_0x48e4ca[_0x2459d1('0x6')]!==0xc8)throw new Error(_0x48e4ca[_0x2459d1('0x10')]);return console[_0x2459d1('0x3')](_0x2459d1('0x18')),process[_0x2459d1('0x8')](0x0);})[_0x4d40a4('0xc')](function(_0xcd4b56){const _0xe4253e=_0x4d40a4;return console[_0xe4253e('0x12')](_0xcd4b56),console[_0xe4253e('0x3')]('Falló\x20el\x20submit\x0a'),process[_0xe4253e('0x8')](0x1);});}());
