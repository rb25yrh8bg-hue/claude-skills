import { chromium } from 'playwright';
import fs from 'fs';
const [,, outDir, scale='2', fps='30', times] = process.argv;
fs.mkdirSync(outDir,{recursive:true});
const worker = +process.env.W||0, workers = +process.env.N||1;
const browser = await chromium.launch();
const page = await browser.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:+scale});
await page.goto('file://'+process.cwd()+'/'+(process.env.PAGE||'index.html'));
const dur = await page.evaluate(()=>window.ready);
let list;
if (times) list = times.split(',').map(Number).map((t,i)=>[i,t]);
else { const n=Math.round(dur*+fps); list=[]; for(let f=worker;f<n;f+=workers) list.push([f,f/+fps]); }
const el = await page.$('#stage');
for (const [f,t] of list){
  await page.evaluate(t=>{window.__tl.seek(t,false)},t);
  await el.screenshot({path:`${outDir}/${String(f).padStart(4,'0')}.jpg`,type:'jpeg',quality:94});
}
console.log('done',worker,list.length,'dur',dur);
await browser.close();
