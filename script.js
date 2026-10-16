// ===== РЕДАКТИРУЙТЕ ЗДЕСЬ / EDIT HERE =====
const TG='https://t.me/WHYDESCR1M';
// Цены заданы отдельно для каждой валюты: p:{RUB:…, USD:…}
const COURSES=[
 {id:'ae',p:{RUB:5000,USD:60},
  n:{ru:'База AE',en:'AE Basics'},
  desc:{ru:'Для совсем новичков в After Effects. После первого видеоурока сразу выполняете домашку, которую я лично проверю.',en:'For complete beginners in After Effects. After the first video lesson you do a homework assignment that I review personally.'},
  inc:{ru:['Обучение всем азам в AE','Проекты, которые не попали в мой пак','Базовые знания по применению SFX и VFX','Готовые уроки, по которым вы будете учиться'],en:['Training in all the AE fundamentals',"Projects that didn't make it into my pack",'Basics of applying SFX and VFX','Ready-made lessons to learn from']},
  learn:{ru:[['Композиция','Базовая композиция и создание первых сцен. Приятные глазу композиции.'],['Камеры','3D-пространство в AE и работа с камерами.'],['Анимации','Базовая анимация объектов и расстановка ключей.']],en:[['Composition','Basic composition and building your first scenes. Compositions that are easy on the eye.'],['Cameras','3D space in AE and working with cameras.'],['Animation','Basic object animation and keyframing.']]}},
 {id:'mo',p:{RUB:10000,USD:120},
  n:{ru:'Моушен',en:'Motion'},
  desc:{ru:'Онлайн-формат: 2 месяца продвинутой базы в After Effects.',en:'Online format: 2 months of advanced After Effects fundamentals.'},
  inc:{ru:['2 месяца обучения','Разборы моих личных проектов','Способы поиска первых клиентов'],en:['2 months of training','Breakdowns of my personal projects','Ways to find your first clients']},
  learn:{ru:[['Текст','Работа с текстом на высоком уровне.'],['3D','Высокий уровень работы с 3D-пространством и камерой.'],['Анимации','Обновлённая анимация объектов и анимация персонажей.']],en:[['Text','Working with text at a high level.'],['3D','A high level of working with 3D space and the camera.'],['Animation','Upgraded object animation plus character animation.']]}},
 {id:'3d',p:{RUB:15000,USD:180},
  n:{ru:'3D-графика (CGI)',en:'3D Graphics (CGI)'},
  desc:{ru:'Полное обучение азам 3D в Blender и способы применения моделей в After Effects.',en:'A complete introduction to 3D in Blender and how to use 3D models in After Effects.'},
  inc:{ru:['Обучение базе в Blender','Готовые уроки по моделированию','Применение в AE'],en:['Blender fundamentals','Ready-made modeling lessons','Using 3D in AE']},
  learn:{ru:[['Основа','Изучите интерфейс Blender.'],['Моделирование','Сделаете свою первую 3D-модель и перенесёте её в AE.'],['Анимация и риггинг','Работа с окружением и персонажем.']],en:[['Basics','Learn the Blender interface.'],['Modeling','Make your first 3D model and bring it into AE.'],['Animation & rigging','Working with environments and characters.']]}},
 {id:'all',p:{RUB:24000,USD:290},hot:1,
  n:{ru:'Всё включено',en:'All-in-one'},
  desc:{ru:'Три курса в одном пакете и поддержка на всём пути.',en:'All three courses in one bundle, with support all the way.'},
  inc:{ru:['Все курсы выше','Постоянная связь со мной','Помогу выйти на 1 клиента'],en:['All the courses above','Direct contact with me',"I'll help you land your first client"]},learn:null}];

const PORTFOLIO=[ // замените на свои работы: v — путь к видео (videos/name.mp4), p — обложка (videos/name.jpg), href — внешняя ссылка
 {k:'3d',t:{ru:'3D-продукт',en:'3D product'},d:{ru:'Модель в Blender, финал в After Effects.',en:'Modeled in Blender, finished in After Effects.'},c:['#5f7fe0','#6d4fb8']},
 {k:'3d',t:{ru:'Персонаж с ригом',en:'Rigged character'},d:{ru:'Риггинг и анимация персонажа.',en:'Rigging and character animation.'},c:['#8a70e8','#2f5aa8']},
 {k:'edit',t:{ru:'Рекламный ролик',en:'Ad spot'},d:{ru:'Динамичный монтаж для бренда.',en:'Fast-paced editing for a brand.'},c:['#9a6fd0','#3b3f9c']},
 {k:'motion',t:{ru:'YouTube-интро',en:'YouTube intro'},d:{ru:'Заставка для канала.',en:'A channel intro.'},c:['#6e7fe8','#8a56b8']},
 {k:'edit',t:{ru:'Сториз и Reels',en:'Stories and Reels'},d:{ru:'Серия коротких вертикальных видео.',en:'A series of short vertical videos.'},c:['#8b78f0','#4a5fb8']},
 {k:'3d',t:{ru:'Сцена в Blender',en:'Blender scene'},d:{ru:'Окружение и свет, рендер в AE.',en:'Environment and lighting, rendered in AE.'},c:['#7a66d8','#35509f']}];

// Все тексты интерфейса / all UI texts
const UI={
 ru:{title:'WHYDESCR1M — курсы по After Effects, моушену и 3D',tab_courses:'Курсы',tab_portfolio:'Портфолио',
  hero_h1:'Научу делать моушен и 3D, которые хочется смотреть',
  hero_p:'Курсы по After Effects, моушену и Blender. Домашки проверяю лично, а в пакете «Всё включено» помогу выйти на первого клиента.',
  cta_pick:'Выбрать курс',cta_tg:'Написать в Telegram',rec:'Монтаж идёт',
  h_courses:'Курсы и цены',p_courses:'Нажмите «Чему научитесь», чтобы увидеть программу курса.',
  h_build:'Соберите свой набор',p_build:'Отмечайте курсы и смотрите итог. Если взять все три, выгоднее пакет «Всё включено».',
  topay:'К оплате',enroll:'Записаться в Telegram',opening:'Открываю Telegram',
  h_q:'Остались вопросы? Напишите мне',p_q:'Подскажу, с какого курса начать именно вам.',
  h_port:'Моё портфолио',p_port:'Проекты, по которым я учу. Выберите направление и откройте работу.',
  f_all:'Все',f_motion:'Моушен',f_3d:'3D',f_edit:'Монтаж',filterAria:'Фильтр работ',
  h_want:'Хотите так же?',p_want:'Покажу, как это делается шаг за шагом.',cta_courses:'Смотреть курсы',
  close:'Закрыть',view:'Смотреть работу',ask:'Спросить про эту работу',learn:'Чему научитесь',buy:'Купить за',
  pickOne:'Выберите хотя бы один курс',packLine:'Пакет «Всё включено»: связь со мной и помощь с клиентом',
  saveHint:'Возьмите все три курса: пакет выйдет выгоднее',
  saveTag:s=>`Выгоднее на ${s}`,saveFull:s=>`Вы экономите ${s} и получаете связь со мной и помощь с клиентом`,
  msgCourse:(n,p)=>`Привет! Хочу записаться на курс «${n}» (${p})`,
  msgPick:(w,t)=>`Привет! Хочу записаться: ${w}. Сумма: ${t}`,msgBundle:'пакет «Всё включено»',msgEmpty:'Привет! Хочу узнать про курсы',
  c1:'Интро',c2:'Интервью',c3:'3D-сцена',c4:'Финал',c5:'Титры',c6:'Графика',c7:'Переход',c8:'Музыка'},
 en:{title:'WHYDESCR1M — After Effects, motion design and 3D courses',tab_courses:'Courses',tab_portfolio:'Portfolio',
  hero_h1:"I'll teach you motion and 3D that people want to watch",
  hero_p:'Courses on After Effects, motion design and Blender. I review every assignment personally, and the All-in-one bundle includes help landing your first client.',
  cta_pick:'Choose a course',cta_tg:'Message on Telegram',rec:'Editing in progress',
  h_courses:'Courses and prices',p_courses:'Tap “What you’ll learn” to see the course program.',
  h_build:'Build your bundle',p_build:'Select courses to see the total. Taking all three? The All-in-one bundle costs less.',
  topay:'Total',enroll:'Enroll on Telegram',opening:'Opening Telegram',
  h_q:'Have questions? Message me',p_q:"I'll help you pick the right course to start with.",
  h_port:'My portfolio',p_port:'Projects I teach from. Pick a category and open a piece.',
  f_all:'All',f_motion:'Motion',f_3d:'3D',f_edit:'Editing',filterAria:'Portfolio filter',
  h_want:'Want to make this too?',p_want:"I'll show you how it's done, step by step.",cta_courses:'See courses',
  close:'Close',view:'View work',ask:'Ask about this work',learn:'What you’ll learn',buy:'Buy for',
  pickOne:'Select at least one course',packLine:'All-in-one bundle: direct contact and help landing a client',
  saveHint:'Take all three courses: the bundle is cheaper',
  saveTag:s=>`Save ${s}`,saveFull:s=>`You save ${s} and get direct contact with me plus help landing a client`,
  msgCourse:(n,p)=>`Hi! I'd like to enroll in the “${n}” course (${p})`,
  msgPick:(w,t)=>`Hi! I'd like to enroll in: ${w}. Total: ${t}`,msgBundle:'the All-in-one bundle',msgEmpty:"Hi! I'd like to learn more about the courses",
  c1:'Intro',c2:'Interview',c3:'3D scene',c4:'Outro',c5:'Titles',c6:'Graphics',c7:'Transition',c8:'Music'}};
// ==========================================

const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let lang=store.get('lang')==='en'?'en':'ru';
let cur=lang==='en'?'USD':'RUB'; // RU = рубли, EN = доллары
const SYM={RUB:'₽',USD:'$'};
const T=(k,...a)=>{const v=UI[lang][k];return typeof v==='function'?v(...a):v};
const L=o=>o[lang];
const num=n=>(lang==='ru'?n.toLocaleString('ru-RU'):n.toLocaleString('en-US')).replace(/\u00a0/g,' ');
const money=n=>lang==='ru'?num(n)+' '+SYM[cur]:SYM[cur]+num(n);
const PACK=COURSES.find(c=>c.id==='all'),BASE=COURSES.filter(c=>c.id!=='all'),price=c=>c.p[cur];
function count(el,to,instant){
 const from=instant?to:(+el.dataset.v||0);el.dataset.v=to;cancelAnimationFrame(el._r);
 if(instant||from===to){el.textContent=money(to);return}
 const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/600),e=1-Math.pow(1-k,3);el.textContent=money(Math.round(from+(to-from)*e));if(k<1)el._r=requestAnimationFrame(f)})(t0)}

// ===== ПИКСЕЛЬ-АРТ в стиле Terraria: рисуется кодом, без картинок =====
const OL='#1b1433';
let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
function G(w,h){
 const c=Array.from({length:h},()=>Array(w).fill(null));
 const g={w,h,c,
  p(x,y,k){x=Math.round(x);y=Math.round(y);if(x>=0&&y>=0&&x<w&&y<h)c[y][x]=k;return g},
  r(x,y,a,b,k){for(let j=0;j<b;j++)for(let i=0;i<a;i++)g.p(x+i,y+j,k);return g},
  l(x0,y0,x1,y1,k){const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))||1;for(let i=0;i<=n;i++)g.p(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,k);return g},
  ci(cx,cy,r,k){for(let y=0;y<h;y++)for(let x=0;x<w;x++)if((x+.5-cx)**2+(y+.5-cy)**2<=r*r)g.p(x,y,k);return g},
  s(x0,y0,rows,pal){rows.forEach((row,j)=>[...row].forEach((ch,i)=>{if(pal[ch])g.p(x0+i,y0+j,pal[ch])}));return g},
  o(k=OL){const add=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(!c[y][x]&&[[1,0],[-1,0],[0,1],[0,-1]].some(([a,b])=>c[y+b]&&c[y+b][x+a]))add.push([x,y]);add.forEach(([x,y])=>c[y][x]=k);return g}};
 return g}
const A=(rows,pal)=>G(rows[0].length,rows.length).s(0,0,rows,pal);

const slime=()=>{const g=G(18,13);for(let y=0;y<11;y++){const hw=Math.round(7.5*Math.sqrt(1-((10-y)/11)**2));for(let x=9-hw;x<9+hw;x++)g.p(x,y+1,y>8?'#7560cc':'#8f7be6')}return g.p(5,4,'#d9d0ff').p(6,4,'#d9d0ff').p(5,5,'#d9d0ff').o()};
const TP={o:OL,v:'#9a8cf2',w:'#f1edff',b:'#7a5a3a',h:'#a07a52'};
const torchA=()=>A(['...o...','..ovo..','.ovvvo.','.ovwvo.','ovvwvvo','ovvwvvo','.ovvvo.','..ooo..','.obhbo.','.obbbo.','.obbbo.','.obbbo.','.obbbo.','.obbbo.','.ooooo.'],TP);
const torchB=()=>A(['..o....','.ovo...','.ovvvo.','ovvwvvo','ovvwvvo','ovvwvvo','.ovvvo.','..ooo..','.obhbo.','.obbbo.','.obbbo.','.obbbo.','.obbbo.','.obbbo.','.ooooo.'],TP);
const dirtPx=()=>{const r=rnd();return r<.08?'#2c2350':r<.15?'#51427f':'#3b2f68'};
const dirtStrip=()=>{seed=5;const g=G(80,16);for(let y=0;y<16;y++)for(let x=0;x<80;x++)g.p(x,y,dirtPx());return g};
const grassStrip=()=>{seed=11;const g=G(80,16);for(let x=0;x<80;x++){const d=3+(rnd()<.45?1:0)+(rnd()<.2?1:0);for(let y=0;y<16;y++)g.p(x,y,y<d?(y===0?(rnd()<.2?'#7a66d4':'#9a86ee'):(rnd()<.2?'#5d49b0':'#6e59c4')):dirtPx())}return g};
const tree=()=>{seed=3;const g=G(28,34);g.r(12,17,4,15,'#4a3a7c').r(12,17,1,15,'#6a58a8').r(11,31,6,1,'#4a3a7c').r(10,32,8,1,'#4a3a7c');g.ci(14,9,8,'#6a58b8').ci(8,14,6,'#6a58b8').ci(20,14,6,'#6a58b8');for(let y=0;y<g.h;y++)for(let x=0;x<g.w;x++)if(g.c[y][x]==='#6a58b8'){const r=rnd();g.p(x,y,r<.16?'#54449a':(r>.8&&y<14?'#8573d6':'#6a58b8'))}return g.o()};
const sliceG=(g,a,b)=>{const n=G(g.w,b-a);for(let y=a;y<b;y++)for(let x=0;x<g.w;x++)n.p(x,y-a,g.c[y][x]);return n};
const treeTop=()=>sliceG(tree(),0,21),treeBase=()=>sliceG(tree(),21,34);
function svg(g,s){let o='';for(let y=0;y<g.h;y++){let x=0;while(x<g.w){const k=g.c[y][x];if(!k){x++;continue}let n=1;while(x+n<g.w&&g.c[y][x+n]===k)n++;o+=`<rect x="${x}" y="${y}" width="${n}" height="1" fill="${k}"/>`;x+=n}}return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${g.w} ${g.h}" width="${g.w*s}" height="${g.h*s}" shape-rendering="crispEdges">${o}</svg>`}
const uri=g=>'data:image/svg+xml,'+encodeURIComponent(svg(g,1));

// --- спрайты в виде data-URI и CSS-переменных ---
const SPR={},DIM={};
const DEFS={slime,torchA,torchB,treeTop,treeBase,grass:grassStrip,dirt:dirtStrip};
for(const k in DEFS){const g=DEFS[k]();SPR[k]=uri(g);DIM[k]=[g.w,g.h]}
['grass','dirt'].forEach(k=>document.documentElement.style.setProperty('--s-'+k,`url("${SPR[k]}")`));

// --- сцена в футере: деревья, факелы, слайм ---
function buildScene(){
 const S=3,im=(n,c)=>`<img${c?` class="${c}"`:''} alt="" src="${SPR[n]}" width="${DIM[n][0]*S}" height="${DIM[n][1]*S}">`;
 const tr=(l,d)=>`<div class="sp tree" style="left:${l}">${im('treeBase','tb')}<img class="tt" style="animation-delay:${d}s" alt="" src="${SPR.treeTop}" width="${DIM.treeTop[0]*S}" height="${DIM.treeTop[1]*S}"></div>`;
 $('#scene').innerHTML=`<div class="sprites">
 ${tr('4%',-1.3)}
 <div class="sp torch" style="left:20%">${im('torchA')}${im('torchB','fb')}</div>
 <div class="sp slime" style="left:30%"><div class="hop">${im('slime')}<i class="pu" style="left:18px;top:21px"></i><i class="pu" style="left:33px;top:21px"></i></div></div>
 <div class="sp torch" style="left:80%">${im('torchA')}${im('torchB','fb')}</div>
 ${tr('calc(93% - 84px)',-3.4)}</div>
 <div class="grass"></div><div class="dirt"><p class="copy">© 2026 WHYDESCR1M</p></div>`;
 new IntersectionObserver(([e])=>{eyesVis=e.isIntersecting;$('#scene').classList.toggle('paused',!eyesVis)}).observe($('#scene'));
}
let eyesVis=false,mx=null,my=null;
buildScene();
// слайм следит глазами за курсором (8 направлений, зрачок сдвигается на целый «пиксель»)
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});
const pupils=[...document.querySelectorAll('.pu')],hopEl=document.querySelector('.hop');
setInterval(()=>{
 if(!eyesVis||mx===null)return;
 const r=hopEl.getBoundingClientRect(),dx=mx-(r.left+r.width/2),dy=my-(r.top+r.height/2),d=Math.hypot(dx,dy)||1,nx=dx/d,ny=dy/d;
 const ex=nx>.38?1:nx<-.38?-1:0,ey=ny>.38?1:ny<-.38?-1:0;
 pupils.forEach(p=>p.style.transform=`translate(${ex*3}px,${ey*3}px)`)},100);

// tabs
function go(v){if(!$('#v-'+v))v='courses';$$('.view').forEach(e=>e.classList.toggle('on',e.id==='v-'+v));$$('.tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.v===v));scrollTo({top:0});try{history.replaceState(null,'','#'+v)}catch(e){}}
$$('.tabs button').forEach(b=>b.onclick=()=>go(b.dataset.v));
document.addEventListener('click',e=>{
 const g=e.target.closest('[data-go]');if(g)go(g.dataset.go);
 const a=e.target.closest('a[href^="#"]'),id=a&&a.getAttribute('href');
 if(id&&id.length>1){const t=document.getElementById(id.slice(1));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}});
addEventListener('hashchange',()=>{const h=location.hash.slice(1);if($('#v-'+h))go(h)});

const ARR='<svg class="arr" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12L12 4M5 4h7v7"/></svg>';
const CHK='<svg class="chk" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3.2L13 5"/></svg>';

// static texts
function applyStatic(){
 document.documentElement.lang=lang;document.title=T('title');
 $$('[data-i18n]').forEach(e=>e.textContent=T(e.dataset.i18n));
 $('#filters').setAttribute('aria-label',T('filterAria'));
 $('#lc').dataset.lang=lang;$$('#lc button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===lang));
 $$('.clip[data-l]').forEach(e=>e.textContent=T(e.dataset.l));
}

// courses
const OPEN=new Set();
const sumBase=()=>BASE.reduce((a,c)=>a+price(c),0);
function renderCourses(first){
 $('#courses').innerHTML=COURSES.map(c=>{
  const pr=price(c),n=L(c.n),learn=c.learn&&L(c.learn),open=OPEN.has(c.id);
  return `<article class="glass card ${c.hot?'hot':''} ${open?'open':''}" id="c-${c.id}">
${c.hot?`<span class="tag">${T('saveTag',money(sumBase()-pr))}</span>`:''}<h3>${n}</h3><div class="price ${first?'':'pop'}" data-v="${pr}" data-p="${pr}">${money(pr)}</div><p class="desc">${L(c.desc)}</p>
<ul>${L(c.inc).map(x=>`<li>${x}</li>`).join('')}</ul>
${learn?`<button class="tog" aria-expanded="${open}">${T('learn')} <i>▾</i></button><div class="more"><div>${learn.map(l=>`<div class="learn"><b>${l[0]}</b><span>${l[1]}</span></div>`).join('')}</div></div>`:''}
<a class="btn buy ${c.hot?'':'ghost'}" href="${TG}?text=${encodeURIComponent(T('msgCourse',n,money(pr)))}" target="_blank" rel="noopener" data-mag><span class="t t1">${T('buy')} ${money(pr)}${ARR}</span><span class="t t2">${CHK}${T('opening')}</span></a></article>`}).join('');
 if(first)$$('#courses .price').forEach(e=>{e.dataset.v=0;count(e,+e.dataset.p)});
}
$('#courses').addEventListener('click',e=>{const b=e.target.closest('.tog');if(!b)return;const c=b.closest('.card'),id=c.id.slice(2);
 c.classList.toggle('open');const o=c.classList.contains('open');o?OPEN.add(id):OPEN.delete(id);b.setAttribute('aria-expanded',o)});

// builder
const SEL=new Set();
function renderOpts(){$('#opts').innerHTML=BASE.map(c=>`<button class="opt" data-id="${c.id}" aria-pressed="${SEL.has(c.id)}"><span class="ck">✓</span>${L(c.n)}<span class="p">${money(price(c))}</span></button>`).join('')}
$('#opts').onclick=e=>{const b=e.target.closest('.opt');if(!b)return;const id=b.dataset.id;SEL.has(id)?SEL.delete(id):SEL.add(id);b.setAttribute('aria-pressed',SEL.has(id));calc()};
function calc(instant){
 const sel=BASE.filter(c=>SEL.has(c.id)),sum=sel.reduce((a,c)=>a+price(c),0),full=sel.length===BASE.length;
 const total=full?price(PACK):sum;
 let h=sel.map(c=>`<div><span>${L(c.n)}</span><span>${money(price(c))}</span></div>`).join('');
 if(full)h+=`<div style="color:var(--acc)"><span>${T('packLine')}</span><span>${money(price(PACK))}</span></div>`;
 $('#lines').innerHTML=h||`<div>${T('pickOne')}</div>`;
 $('#save').textContent=full?T('saveFull',money(sum-price(PACK))):sel.length?T('saveHint'):'';
 const tt=$('#total');count(tt,total,instant);
 if(instant){tt.classList.remove('pop');void tt.offsetWidth;tt.classList.add('pop')}
 const txt=sel.length?T('msgPick',full?T('msgBundle'):sel.map(c=>L(c.n)).join(', '),money(total)):T('msgEmpty');
 $('#enroll').href=TG+'?text='+encodeURIComponent(txt);
}

// portfolio
const KINDS=['all','motion','3d','edit'];let kind='all';
function renderFilters(){$('#filters').innerHTML=KINDS.map(k=>`<button class="chip" data-k="${k}" aria-pressed="${k===kind}">${T('f_'+k)}</button>`).join('')}
function renderGrid(){$('#grid').innerHTML=PORTFOLIO.map((w,i)=>`<button class="glass work${kind!=='all'&&w.k!==kind?' hide':''}" data-i="${i}" data-k="${w.k}"><div class="thumb${w.p||w.v?' ph':''}" style="--c1:${w.c[0]};--c2:${w.c[1]}${w.p?`;background:url('${w.p}') center/cover`:''}">${w.v?`<video src="${w.v}#t=0.5" muted loop playsinline preload="metadata"></video>`:''}<div class="play"><i>▶</i></div></div><div class="wi"><b>${L(w.t)}</b><span>${T('f_'+w.k)}</span></div></button>`).join('')}
$('#filters').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;kind=b.dataset.k;$$('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));$$('.work').forEach(w=>w.classList.toggle('hide',kind!=='all'&&w.dataset.k!==kind))};
$('#grid').onclick=e=>{const w=e.target.closest('.work');if(!w)return;const p=PORTFOLIO[+w.dataset.i];$('#mt').textContent=L(p.t);$('#md').textContent=L(p.d);
 const t=$('#mthumb');t.style.setProperty('--c1',p.c[0]);t.style.setProperty('--c2',p.c[1]);
 const l=$('#mlink');if(p.href){l.href=p.href;l.textContent=T('view')}else{l.href=TG;l.textContent=T('ask')}
 const ov=t.querySelector('video');if(ov)ov.remove();t.classList.toggle('vid',!!p.v);const pl=t.querySelector('.play');pl.style.display='';
 if(p.v){pl.style.display='none';const v=document.createElement('video');v.src=p.v;if(p.p)v.poster=p.p;v.controls=true;v.playsInline=true;v.autoplay=true;v.preload='metadata';v.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;border-radius:inherit';t.style.position='relative';t.appendChild(v)}
 $('#modal').classList.add('on');$('#mclose').focus()};
$('#grid').addEventListener('mouseover',e=>{const w=e.target.closest('.work');if(!w||w.contains(e.relatedTarget))return;const v=w.querySelector('video');if(v)v.play().catch(()=>{})});
$('#grid').addEventListener('mouseout',e=>{const w=e.target.closest('.work');if(!w||w.contains(e.relatedTarget))return;const v=w.querySelector('video');if(v){v.pause();v.currentTime=.5}});
function closeM(){const v=$('#mthumb video');if(v){v.pause();v.remove()}const pl=$('#mthumb .play');if(pl)pl.style.display='';$('#mthumb').classList.remove('vid');$('#modal').classList.remove('on')}
$('#mclose').onclick=closeM;$('#modal').onclick=e=>{if(e.target.id==='modal')closeM()};addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});

// language + currency switches
function refresh(first){applyStatic();renderCourses(first);renderOpts();calc(!first);renderFilters();renderGrid();closeM()}
let swapT;
$('#lc').onclick=e=>{const b=e.target.closest('button');if(!b||b.dataset.l===lang)return;
 lang=b.dataset.l;cur=lang==='en'?'USD':'RUB';store.set('lang',lang);
 $('#lc').dataset.lang=lang;$$('#lc button').forEach(x=>x.setAttribute('aria-pressed',x===b)); // ползунок едет сразу
 const m=$('main');m.classList.add('swap');clearTimeout(swapT);
 swapT=setTimeout(()=>{refresh();m.classList.remove('swap')},180)}; // контент плавно гаснет, меняется и проявляется
refresh(true);
requestAnimationFrame(()=>requestAnimationFrame(()=>$('#lc').classList.add('ready')));

// ===== кнопки: ripple + состояние «открываю Telegram» =====
$('#enroll .t1').insertAdjacentHTML('beforeend',ARR);
$('#enroll .t2').insertAdjacentHTML('afterbegin',CHK);
document.addEventListener('click',e=>{
 const b=e.target.closest('.btn');if(!b)return;
 const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,x=document.createElement('span');
 const cx=e.detail?e.clientX-r.left:r.width/2,cy=e.detail?e.clientY-r.top:r.height/2;
 x.className='rip';x.style.cssText=`width:${s}px;height:${s}px;left:${cx-s/2}px;top:${cy-s/2}px`;
 b.appendChild(x);setTimeout(()=>x.remove(),700);
 if(b.classList.contains('buy')){b.classList.add('done');clearTimeout(b._t);b._t=setTimeout(()=>b.classList.remove('done'),2200)}
});

// ===== таймлайн в шапке: работает только пока виден =====
const TR=[[['c1',0,16],['c2',18,34],['c3',54,22],['c4',78,20]],[['c5',6,14],['c6',40,20],['c7',66,12]],[['c8',0,100]]];
const tracks=$('#tracks'),ph=$('#ph'),tc=$('#tc'),LOOP=14000;
TR.forEach((tr,i)=>{const d=document.createElement('div');d.className='track';tr.forEach(c=>{const e=document.createElement('div');e.className='clip'+(i===2?' a':'');e.style.left=c[1]+'%';e.style.width=c[2]+'%';e.dataset.a=c[1];e.dataset.b=c[1]+c[2];
 if(i===2){const w=document.createElement('div');w.className='wave';for(let k=0;k<32;k++){const s=document.createElement('s');s.style.height=(20+Math.abs(Math.sin(k*1.7)*60+Math.random()*20))+'%';s.style.animationDelay=(-Math.random()*1.1)+'s';w.appendChild(s)}e.appendChild(w)}else{e.dataset.l=c[0];e.textContent=T(c[0])}
 d.appendChild(e)});tracks.appendChild(d)});
const clips=[...tracks.querySelectorAll('.clip')].map(e=>({e,a:+e.dataset.a,b:+e.dataset.b,on:false}));
let W=tracks.clientWidth,el=0,prev=0,run=false,last='';
new ResizeObserver(()=>W=tracks.clientWidth).observe(tracks);
function tick(now){
 if(!run)return;
 el=(el+Math.min(now-prev,100))%LOOP;prev=now;
 const p=el/LOOP*100;
 ph.style.transform=`translate3d(${el/LOOP*W}px,0,0)`;
 for(const c of clips){const on=p>=c.a&&p<=c.b;if(on!==c.on){c.on=on;c.e.classList.toggle('on',on)}}
 const s=el/1000,str='00:'+String(Math.floor(s)).padStart(2,'0')+':'+String(Math.floor((s%1)*25)).padStart(2,'0');
 if(str!==last){last=str;tc.textContent=str}
 requestAnimationFrame(tick)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)
 new IntersectionObserver(([en])=>{const v=en.isIntersecting;tracks.classList.toggle('paused',!v);
  if(v&&!run){run=true;prev=performance.now();requestAnimationFrame(tick)}else if(!v)run=false}).observe(tracks);

// ===== курсор: свечение, подсветка стекла, магнитные кнопки (только мышь) =====
const glow=$('#glow');
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
 let gx=0,gy=0,tx=0,ty=0,seen=false,gRun=false,pend=false,hg=null,hb=null;
 const lerp=()=>{gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;glow.style.transform=`translate3d(${gx}px,${gy}px,0)`;
  if(Math.abs(tx-gx)+Math.abs(ty-gy)>.5)requestAnimationFrame(lerp);else gRun=false};
 const frame=()=>{pend=false;
  const rg=hg&&hg.getBoundingClientRect(),rb=hb&&hb.getBoundingClientRect();
  if(rg){hg.style.setProperty('--mx',tx-rg.left+'px');hg.style.setProperty('--my',ty-rg.top+'px')}
  if(rb){const x=(tx-(rb.left+rb.width/2-(hb._x||0)))*.18,y=(ty-(rb.top+rb.height/2-(hb._y||0)))*.28;
   hb._x=x;hb._y=y;hb.style.setProperty('--tx',x+'px');hb.style.setProperty('--ty',y+'px')}};
 addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;glow.style.opacity=1;
  if(!seen){seen=true;gx=tx;gy=ty}
  if(!gRun){gRun=true;requestAnimationFrame(lerp)}
  if((hg||hb)&&!pend){pend=true;requestAnimationFrame(frame)}},{passive:true});
 document.addEventListener('pointerover',e=>{
  hg=e.target.closest('.glass');const b=e.target.closest('[data-mag]');
  if(b!==hb){if(hb){hb.style.setProperty('--tx','0px');hb.style.setProperty('--ty','0px');hb._x=hb._y=0}hb=b}});
 document.documentElement.addEventListener('pointerleave',()=>{glow.style.opacity=0;if(hb){hb.style.setProperty('--tx','0px');hb.style.setProperty('--ty','0px');hb._x=hb._y=0;hb=null}hg=null});
}else glow.remove();

go(location.hash.slice(1)||'courses');
