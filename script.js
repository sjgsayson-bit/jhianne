
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   âœï¸  EDIT YOUR CONTENT HERE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const SONG = {
  file:   'song.mp3',
  title:  'Our Song',
  artist: 'Artist Name',
};
const PHOTOS = [
  { file:'photo1.jpg', caption:'Memory 1' },
  { file:'photo2.jpg', caption:'Memory 2' },
  { file:'photo3.jpg', caption:'Memory 3' },
  { file:'photo4.jpg', caption:'Memory 4' },
  { file:'photo5.jpg', caption:'Memory 5' },
  { file:'photo6.jpg', caption:'Memory 6' },
];
const VIDEOS = [
  { file:'video1.mp4', title:'Our Video 1' },
  { file:'video2.mp4', title:'Our Video 2' },
];
const LETTERS = [
  {
    title:'Just Because ðŸ’œ', date:'January 1, 2024',
    body:'Dear best friend,\n\nYou mean the world to me. I just wanted you to know that no matter what, I\'m always here for you.\n\nWith all my love ðŸ’œ',
  },
  {
    title:'Thank You', date:'June 15, 2024',
    body:'Dear best friend,\n\nThank you for always being there. For every laugh, every cry, every moment â€” thank you.\n\nForever grateful ðŸ’œ',
  },
  {
    title:'Happy Birthday ðŸŽ‚', date:'September 20, 2024',
    body:'Dear best friend,\n\nHappy birthday to the most wonderful person I know! I hope this day is as magical as you are.\n\nCelebrating you always ðŸ’œ',
  },
];
const DEFAULT_REMINDERS = [
  { tag:'reminder',  text:'You are enough, always and forever.' },
  { tag:'love note', text:'I\'m so proud of everything you\'ve become.' },
  { tag:'always',    text:'On your worst days, remember I love you unconditionally.' },
  { tag:'for you',   text:'You make this world a better place just by being in it.' },
  { tag:'remember',  text:'You are braver than you believe and stronger than you know.' },
];
const ANNIVERSARIES = [
  { name:'Friendship Anniversary ðŸ’œ', date:'2024-01-01' },
  { name:'Her Birthday ðŸŽ‚',           date:'2024-09-20' },
  { name:'Our First Trip ðŸŒ',         date:'2024-05-10' },
];
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ðŸš« DON'T EDIT BELOW THIS LINE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

// NAV
function navTo(id){ var el=document.getElementById(id); if(el)el.scrollIntoView({behavior:'smooth'}); }
(function(){
  var ids=['home','galaxy-section','gallery','videos','letters','song','book','calendar','game'];
  window.addEventListener('scroll',function(){
    var cur='home';
    ids.forEach(function(id){ var el=document.getElementById(id); if(el&&window.scrollY>=el.offsetTop-130)cur=id; });
    document.querySelectorAll('.nav-btn').forEach(function(b){
      var m=(b.getAttribute('onclick')||'').match(/navTo\('(.+?)'\)/);
      if(m)b.classList.toggle('active',m[1]===cur);
    });
  });
})();

// STARS
(function(){
  var sf=document.getElementById('star-field');
  for(var i=0;i<80;i++){
    var d=document.createElement('div'); d.className='star-dot';
    var sz=Math.random()*2+0.4;
    d.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;--d:'+(2+Math.random()*4).toFixed(1)+'s;--mo:'+(0.3+Math.random()*0.7).toFixed(2)+';animation-delay:'+(Math.random()*5).toFixed(1)+'s;';
    sf.appendChild(d);
  }
})();

// GALAXY
(function(){
  var canvas=document.getElementById('gc'); if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var wrap=document.getElementById('galaxy-wrap');
  var W=wrap.clientWidth, H=wrap.clientHeight;
  canvas.width=W; canvas.height=H;
  var cx=W/2, cy=H/2;
  var msg=document.getElementById('galaxy-msg');
  var rotX=0,rotY=0,velX=0,velY=0,t=0,msgShown=false,dragging=false,lastX=0,lastY=0;
  var stars=[];
  for(var i=0;i<2800;i++){
    var type=Math.random(), x3,y3,z3,br,sz,r,g,b,speed;
    if(type<0.09){
      var rad=Math.abs(gauss())*22, ang=rnd(0,Math.PI*2);
      x3=rad*Math.cos(ang); y3=rad*Math.sin(ang)*0.5; z3=gauss()*8;
      var t2e=Math.exp(-rad/16);
      br=0.5+t2e*0.5; sz=rnd(0.7,2.2)*t2e+0.5;
      r=255; g=Math.floor(210+t2e*45); b=Math.floor(130+t2e*80); speed=0.0003+Math.random()*0.0002;
    } else if(type<0.74){
      var arm=Math.floor(Math.random()*4), t2=Math.pow(Math.random(),0.5);
      var rad2=20+t2*210, baseAng=t2*3.6*Math.PI+arm*Math.PI/2, spread=rnd(-0.35,0.35)*(1+t2), ang2=baseAng+spread;
      x3=rad2*Math.cos(ang2); y3=rad2*Math.sin(ang2)*0.36; z3=gauss()*12*t2;
      br=rnd(0.3,0.9); sz=rnd(0.4,1.7);
      var st=Math.random();
      if(st<0.25){r=160;g=185;b=255;} else if(st<0.55){r=220;g=232;b=255;} else if(st<0.8){r=255;g=248;b=220;} else{r=255;g=205;b=145;}
      speed=0.0004/(0.3+t2*0.7);
    } else if(type<0.88){
      var rad3=rnd(20,250), ang3=rnd(0,Math.PI*2);
      x3=rad3*Math.cos(ang3); y3=rad3*Math.sin(ang3)*0.3; z3=gauss()*7;
      br=rnd(0.08,0.4); sz=rnd(0.3,1.0); r=195;g=205;b=250; speed=0.0003+Math.random()*0.0003;
    } else {
      var rad4=rnd(180,320), ang4=rnd(0,Math.PI*2);
      x3=rad4*Math.cos(ang4); y3=rad4*Math.sin(ang4)*0.65; z3=gauss()*50;
      br=rnd(0.05,0.2); sz=rnd(0.2,0.65); r=175;g=188;b=228; speed=0.0001+Math.random()*0.0001;
    }
    stars.push({x3:x3,y3:y3,z3:z3,br:br,sz:sz,r:r,g:g,b:b,speed:speed,baseAngle:Math.atan2(y3,x3),baseRadius:Math.sqrt(x3*x3+y3*y3),flatY:y3});
  }
  function rnd(a,b){return a+Math.random()*(b-a);}
  function gauss(){var u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
  function project(x3,y3,z3){
    var cY=Math.cos(rotY),sY=Math.sin(rotY),x1=x3*cY-z3*sY,z1=x3*sY+z3*cY;
    var cX=Math.cos(rotX),sX=Math.sin(rotX),y1=y3*cX-z1*sX,z2=y3*sX+z1*cX;
    var sc=1+z2*0.0005; return{sx:cx+x1*sc,sy:cy+y1*sc,depth:z2,sc:sc};
  }
  function twinkle(i,t){return 0.7+0.3*Math.sin(t*2.1+i*1.37+Math.cos(i*0.7)*3);}
  function draw(){
    ctx.clearRect(0,0,W,H); ctx.fillStyle='#000010'; ctx.fillRect(0,0,W,H);
    var g1=ctx.createRadialGradient(cx,cy,0,cx,cy,220);
    g1.addColorStop(0,'rgba(160,120,255,0.16)'); g1.addColorStop(0.35,'rgba(80,50,170,0.09)');
    g1.addColorStop(0.7,'rgba(20,10,60,0.05)'); g1.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g1; ctx.fillRect(0,0,W,H);
    var g2=ctx.createRadialGradient(cx,cy,0,cx,cy,100);
    g2.addColorStop(0,'rgba(255,215,150,0.25)'); g2.addColorStop(0.45,'rgba(200,130,70,0.10)');
    g2.addColorStop(1,'rgba(0,0,0,0)'); ctx.fillStyle=g2; ctx.fillRect(0,0,W,H);
    for(var s of stars){s.baseAngle+=s.speed; s.x3=s.baseRadius*Math.cos(s.baseAngle); s.y3=s.flatY;}
    var projected=stars.map(function(s,i){var p=project(s.x3,s.y3,s.z3); return Object.assign({},s,p,{i:i});});
    projected.sort(function(a,b){return a.depth-b.depth;});
    for(var p of projected){
      if(p.sx<-12||p.sx>W+12||p.sy<-12||p.sy>H+12)continue;
      var tw=twinkle(p.i,t), sz2=p.sz*(0.65+p.sc*0.35)*tw, alpha=p.br*Math.min(1,(p.sc+0.2)*0.85)*tw;
      if(sz2<0.2)continue;
      if(sz2>1.1){
        var gl=ctx.createRadialGradient(p.sx,p.sy,0,p.sx,p.sy,sz2*4);
        gl.addColorStop(0,'rgba('+p.r+','+p.g+','+p.b+','+alpha+')');
        gl.addColorStop(0.3,'rgba('+p.r+','+p.g+','+p.b+','+(alpha*0.35)+')');
        gl.addColorStop(1,'rgba('+p.r+','+p.g+','+p.b+',0)');
        ctx.beginPath(); ctx.arc(p.sx,p.sy,sz2*4,0,Math.PI*2); ctx.fillStyle=gl; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(p.sx,p.sy,Math.max(0.2,sz2),0,Math.PI*2);
      ctx.fillStyle='rgba('+p.r+','+p.g+','+p.b+','+Math.min(1,alpha)+')'; ctx.fill();
    }
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(rotY);
    var dg=ctx.createLinearGradient(-250,0,250,0);
    dg.addColorStop(0,'rgba(0,0,20,0)'); dg.addColorStop(0.4,'rgba(0,0,14,0.2)');
    dg.addColorStop(0.5,'rgba(0,0,8,0.28)'); dg.addColorStop(0.6,'rgba(0,0,14,0.2)');
    dg.addColorStop(1,'rgba(0,0,20,0)');
    ctx.scale(1,0.36); ctx.fillStyle=dg; ctx.fillRect(-250,-16,500,32); ctx.restore();
    var nx=((rotX%(Math.PI*2))+Math.PI*2)%(Math.PI*2);
    var tiltDeg=Math.abs(nx-Math.PI)/Math.PI;
    var show=tiltDeg>0.8||tiltDeg<0.2;
    if(show!==msgShown){msgShown=show; msg.style.opacity=show?'1':'0';}
  }
  canvas.addEventListener('mousedown',function(e){dragging=true;lastX=e.clientX;lastY=e.clientY;velX=0;velY=0;});
  window.addEventListener('mouseup',function(){dragging=false;});
  window.addEventListener('mousemove',function(e){
    if(!dragging)return;
    velY=(e.clientX-lastX)*0.009; velX=(e.clientY-lastY)*0.009;
    rotY+=velY; rotX+=velX; lastX=e.clientX; lastY=e.clientY;
  });
  canvas.addEventListener('touchstart',function(e){e.preventDefault();dragging=true;lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;velX=0;velY=0;},{passive:false});
  window.addEventListener('touchend',function(){dragging=false;});
  window.addEventListener('touchmove',function(e){
    if(!dragging)return;
    velY=(e.touches[0].clientX-lastX)*0.009; velX=(e.touches[0].clientY-lastY)*0.009;
    rotY+=velY; rotX+=velX; lastX=e.touches[0].clientX; lastY=e.touches[0].clientY;
  },{passive:false});
  function loop(){
    t+=0.016;
    if(!dragging){velX*=0.95;velY*=0.95;rotY+=velY+0.003;rotX+=velX;rotX=Math.max(-Math.PI*0.88,Math.min(Math.PI*0.88,rotX));}
    draw(); requestAnimationFrame(loop);
  }
  loop();
})();

// GALLERY
(function(){
  var grid=document.getElementById('gallery-grid');
  var lb=document.getElementById('lightbox');
  var lbImg=document.getElementById('lightbox-img');
  document.getElementById('lightbox-close').onclick=function(){lb.classList.remove('open');};
  lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open');});
  if(!PHOTOS.length){
    grid.innerHTML='<div class="gallery-placeholder" style="height:200px;border-radius:12px;border:1px solid var(--glass-border);">Add your photos in script.js ðŸ–¼ï¸</div>'; return;
  }
  PHOTOS.forEach(function(p,i){
    var item=document.createElement('div'); item.className='gallery-item';
    item.innerHTML='<img src="'+p.file+'" alt="'+(p.caption||'photo')+'"><div class="overlay"><span style="color:#fff;font-size:0.78rem;">'+(p.caption||'')+'</span></div>';
    item.querySelector('img').onerror=function(){item.innerHTML='<div class="gallery-placeholder"><span style="font-size:2rem">ðŸ–¼ï¸</span><span>'+p.file+'</span></div>';};
    item.onclick=function(){lbImg.src=p.file;lb.classList.add('open');};
    grid.appendChild(item);
  });
})();

// VIDEOS
(function(){
  var grid=document.getElementById('video-grid');
  if(!VIDEOS.length){
    grid.innerHTML='<div class="video-slot"><div class="video-placeholder-box"><span style="font-size:2rem">ðŸŽ¬</span><span>Add your videos in script.js</span></div></div>'; return;
  }
  VIDEOS.forEach(function(v){
    var slot=document.createElement('div'); slot.className='video-slot';
    slot.innerHTML='<video src="'+v.file+'" controls></video><div class="video-info"><span class="video-title">'+v.title+'</span></div>';
    grid.appendChild(slot);
  });
})();

// LETTERS
(function(){
  var list=document.getElementById('letters-list');
  var display=document.getElementById('letter-display');
  if(!LETTERS.length){list.innerHTML='<div style="color:rgba(192,132,252,0.4);font-size:0.82rem;padding:1rem;">No letters yetâ€¦</div>';return;}
  LETTERS.forEach(function(l,i){
    var item=document.createElement('div'); item.className='letter-thumb';
    item.innerHTML='<div class="letter-thumb-date">'+(l.date||'Undated')+'</div><div class="letter-thumb-title">'+l.title+'</div>';
    item.onclick=function(){
      list.querySelectorAll('.letter-thumb').forEach(function(t){t.classList.remove('selected');});
      item.classList.add('selected');
      display.innerHTML='<div class="letter-display-date">'+(l.date||'')+'</div><h3 style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;font-weight:400;font-style:italic;color:var(--purple-light);margin-bottom:1.4rem;">'+l.title+'</h3>'+l.body.split('\n').map(function(p){return'<p style="margin-bottom:0.9rem;">'+p+'</p>';}).join('')+'<p style="margin-top:2rem;text-align:right;color:var(--purple-light);">â€” with love ðŸ’œ</p>';
    };
    list.appendChild(item);
  });
  list.querySelectorAll('.letter-thumb')[0].click();
})();

// SONG
(function(){
  var audio=document.getElementById('song-audio');
  var playBtn=document.getElementById('btn-play');
  var vinyl=document.getElementById('vinyl-disc');
  var bar=document.getElementById('song-progress-bar');
  var wrap=document.getElementById('song-progress');
  document.getElementById('song-title-display').textContent=SONG.title;
  document.getElementById('song-artist-display').textContent=SONG.artist;
  audio.src=SONG.file;
  playBtn.onclick=function(){
    if(audio.paused){audio.play();playBtn.innerHTML='&#9646;&#9646;';vinyl.classList.add('playing');}
    else{audio.pause();playBtn.innerHTML='&#9654;';vinyl.classList.remove('playing');}
  };
  document.getElementById('btn-rewind').onclick=function(){audio.currentTime=Math.max(0,audio.currentTime-10);};
  document.getElementById('btn-forward').onclick=function(){audio.currentTime=Math.min(audio.duration||0,audio.currentTime+10);};
  audio.addEventListener('timeupdate',function(){if(audio.duration)bar.style.width=(audio.currentTime/audio.duration*100)+'%';});
  audio.addEventListener('ended',function(){playBtn.innerHTML='&#9654;';vinyl.classList.remove('playing');});
  wrap.addEventListener('click',function(e){
    if(!audio.duration)return;
    var rect=wrap.getBoundingClientRect();
    audio.currentTime=((e.clientX-rect.left)/rect.width)*audio.duration;
  });
})();

// STICKY NOTE WALL
(function(){
  var wall=document.getElementById('sticky-wall');
  var tagInput=document.getElementById('sticky-tag');
  var txtInput=document.getElementById('sticky-text');
  var postBtn=document.getElementById('sticky-post-btn');
  var preview=document.getElementById('sticky-preview');
  var colorsEl=document.getElementById('sticky-colors');

  var COLORS=[
    {hex:'#f7d6ff',name:'lavender'},{hex:'#ffd6f3',name:'pink'},
    {hex:'#d6e8ff',name:'blue'},{hex:'#d6ffed',name:'mint'},
    {hex:'#fff9d6',name:'yellow'},{hex:'#ffd6d6',name:'rose'},
    {hex:'#ead6ff',name:'violet'},
  ];
  var chosenColor=COLORS[0].hex;

  COLORS.forEach(function(c,i){
    var sw=document.createElement('div');
    sw.className='sticky-color-swatch'+(i===0?' active':'');
    sw.style.background=c.hex; sw.title=c.name;
    sw.addEventListener('click',function(){
      chosenColor=c.hex;
      colorsEl.querySelectorAll('.sticky-color-swatch').forEach(function(s){s.classList.remove('active');});
      sw.classList.add('active');
      preview.style.background=c.hex;
    });
    colorsEl.appendChild(sw);
  });

  function updatePreview(){
    var tag=tagInput.value.trim(), txt=txtInput.value.trim();
    if(!tag&&!txt){preview.innerHTML='<span class="sticky-preview-placeholder">your note will look like this ðŸ’œ</span>';return;}
    preview.innerHTML=(tag?'<div class="sticky-preview-tag">'+tag+'</div>':'')+(txt?'<div class="sticky-preview-text">'+txt+'</div>':'');
  }
  tagInput.addEventListener('input',updatePreview);
  txtInput.addEventListener('input',updatePreview);

  var notes=JSON.parse(localStorage.getItem('sticky-notes')||'null');
  if(!notes){
    notes=DEFAULT_REMINDERS.map(function(r,i){return{tag:r.tag,text:r.text,color:COLORS[i%COLORS.length].hex,id:Date.now()+i};});
    localStorage.setItem('sticky-notes',JSON.stringify(notes));
  }

  function save(){localStorage.setItem('sticky-notes',JSON.stringify(notes));}

  function makeNote(n){
    var el=document.createElement('div'); el.className='sticky-note';
    el.style.background=n.color||COLORS[0].hex;
    el.innerHTML='<button class="sticky-note-del" title="remove">âœ•</button>'+(n.tag?'<div class="sticky-note-tag">'+n.tag+'</div>':'')+'<div class="sticky-note-text">'+n.text+'</div>';
    el.querySelector('.sticky-note-del').addEventListener('click',function(){
      notes=notes.filter(function(x){return x.id!==n.id;}); save();
      el.style.transition='transform 0.25s,opacity 0.25s';
      el.style.transform='scale(0.6)'; el.style.opacity='0';
      setTimeout(function(){el.remove(); checkEmpty();},260);
    });
    return el;
  }
  function checkEmpty(){
    if(!wall.querySelector('.sticky-note'))
      wall.innerHTML='<div class="sticky-empty">No notes yet â€” write your first one above ðŸ’œ</div>';
  }
  function renderAll(){
    wall.innerHTML='';
    if(!notes.length){checkEmpty();return;}
    notes.forEach(function(n){wall.appendChild(makeNote(n));});
  }
  renderAll();

  postBtn.addEventListener('click',function(){
    var txt=txtInput.value.trim(); if(!txt)return;
    var n={tag:tagInput.value.trim(),text:txt,color:chosenColor,id:Date.now()};
    notes.push(n); save();
    var emp=wall.querySelector('.sticky-empty'); if(emp)emp.remove();
    wall.appendChild(makeNote(n));
    tagInput.value=''; txtInput.value=''; updatePreview();
  });
})();

// CALENDAR
(function(){
  var monthLabel=document.getElementById('cal-month-label');
  var daysHeader=document.getElementById('cal-days-header');
  var daysGrid=document.getElementById('cal-days-grid');
  var annivList=document.getElementById('anniv-list');
  var today=new Date();
  var viewDate=new Date(today.getFullYear(),today.getMonth(),1);
  var DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
  function nextOcc(dateStr){
    var p=dateStr.split('-'),m=parseInt(p[1])-1,d=parseInt(p[2]);
    var next=new Date(today.getFullYear(),m,d);
    if(next<today)next=new Date(today.getFullYear()+1,m,d);
    return next;
  }
  function daysBetween(a,b){return Math.round((b-a)/(1000*60*60*24));}
  function renderCal(){
    monthLabel.textContent=MONTHS[viewDate.getMonth()]+' '+viewDate.getFullYear();
    daysHeader.innerHTML=DAYS.map(function(d){return'<div class="cal-day-name">'+d+'</div>';}).join('');
    var firstDay=new Date(viewDate.getFullYear(),viewDate.getMonth(),1).getDay();
    var daysInMonth=new Date(viewDate.getFullYear(),viewDate.getMonth()+1,0).getDate();
    var daysInPrev=new Date(viewDate.getFullYear(),viewDate.getMonth(),0).getDate();
    daysGrid.innerHTML='';
    for(var i=firstDay-1;i>=0;i--){var el=document.createElement('div');el.className='cal-day other-month';el.textContent=daysInPrev-i;daysGrid.appendChild(el);}
    var annivSet=new Set(ANNIVERSARIES.map(function(a){var p=a.date.split('-');return(viewDate.getMonth()+1)+'-'+parseInt(p[2]);}));
    for(var d=1;d<=daysInMonth;d++){
      var el=document.createElement('div'); el.className='cal-day'; el.textContent=d;
      if(d===today.getDate()&&viewDate.getMonth()===today.getMonth()&&viewDate.getFullYear()===today.getFullYear())el.classList.add('today');
      if(annivSet.has((viewDate.getMonth()+1)+'-'+d))el.classList.add('anniv');
      daysGrid.appendChild(el);
    }
    var rem=(7-(firstDay+daysInMonth)%7)%7;
    for(var d=1;d<=rem;d++){var el=document.createElement('div');el.className='cal-day other-month';el.textContent=d;daysGrid.appendChild(el);}
  }
  function renderAnniv(){
    annivList.innerHTML='';
    ANNIVERSARIES.forEach(function(a){
      var next=nextOcc(a.date), days=daysBetween(today,next);
      var item=document.createElement('div'); item.className='anniv-item';
      item.innerHTML='<div class="anniv-dot"></div><div><div class="anniv-name">'+a.name+'</div><div class="anniv-date">'+new Date(a.date+'T00:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric'})+'</div><div class="anniv-countdown">'+(days===0?'ðŸŽ‰ Today!':days===1?'Tomorrow ðŸŒ¸':days+' days away âœ¨')+'</div></div>';
      annivList.appendChild(item);
    });
  }
  document.getElementById('cal-prev').onclick=function(){viewDate=new Date(viewDate.getFullYear(),viewDate.getMonth()-1,1);renderCal();};
  document.getElementById('cal-next').onclick=function(){viewDate=new Date(viewDate.getFullYear(),viewDate.getMonth()+1,1);renderCal();};
  renderCal(); renderAnniv();
})();

// FLAPPY BIRD
(function(){
  var canvas=document.getElementById('flappy-canvas');
  var ctx=canvas.getContext('2d');
  var scoreDisplay=document.getElementById('game-score-display');
  var W=360,H=500; canvas.width=W; canvas.height=H;
  var bird,pipes,score,best,state,frame;
  function init(){bird={x:80,y:200,vy:0,r:14};pipes=[];score=0;frame=0;best=parseInt(localStorage.getItem('flappy-best')||'0');state='idle';}
  function flap(){
    if(state==='dead'){init();state='playing';}
    else if(state==='idle'){state='playing';}
    bird.vy=-7.5;
  }
  canvas.addEventListener('click',flap);
  canvas.addEventListener('touchstart',function(e){e.preventDefault();flap();},{passive:false});
  document.addEventListener('keydown',function(e){if(e.code==='Space'){e.preventDefault();flap();}});
  function spawnPipe(){var gap=132,top=60+Math.random()*(H-gap-120);pipes.push({x:W,top:top,bottom:top+gap,passed:false});}
  function update(){
    if(state!=='playing')return;
    frame++; bird.vy+=0.38; bird.y+=bird.vy;
    if(frame%90===0)spawnPipe();
    pipes.forEach(function(p){p.x-=2.5;});
    pipes=pipes.filter(function(p){return p.x>-60;});
    for(var p of pipes){
      if(bird.x+bird.r>p.x&&bird.x-bird.r<p.x+52&&(bird.y-bird.r<p.top||bird.y+bird.r>p.bottom)){
        state='dead'; if(score>best){best=score;localStorage.setItem('flappy-best',best);} return;
      }
      if(!p.passed&&bird.x>p.x+52){p.passed=true;score++;}
    }
    if(bird.y>H-20||bird.y<0){state='dead';if(score>best){best=score;localStorage.setItem('flappy-best',best);}}
    scoreDisplay.textContent='Score: '+score+'  |  Best: '+best;
  }
  function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.lineTo(x+w-r,y);c.quadraticCurveTo(x+w,y,x+w,y+r);c.lineTo(x+w,y+h-r);c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);c.lineTo(x+r,y+h);c.quadraticCurveTo(x,y+h,x,y+h-r);c.lineTo(x,y+r);c.quadraticCurveTo(x,y,x+r,y);c.closePath();}
  if(!rr._stars)rr._stars=Array.from({length:40},function(){return{x:Math.random()*W,y:Math.random()*(H-80),r:Math.random()*1.5+0.3,a:Math.random()};});
  function drawBg(){
    var bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#0d0520');bg.addColorStop(1,'#1a0a2e');
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#2d1050';ctx.fillRect(0,H-20,W,20);
    ctx.fillStyle='#7b3fa0';ctx.fillRect(0,H-22,W,3);
    rr._stars.forEach(function(s){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,'+s.a+')';ctx.fill();});
  }
  function drawBird(){
    ctx.beginPath();ctx.arc(bird.x,bird.y,bird.r,0,Math.PI*2);ctx.fillStyle='#c084fc';ctx.fill();ctx.strokeStyle='#7b3fa0';ctx.lineWidth=2;ctx.stroke();
    ctx.beginPath();ctx.arc(bird.x+6,bird.y-4,3,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
    ctx.beginPath();ctx.arc(bird.x+7,bird.y-4,1.5,0,Math.PI*2);ctx.fillStyle='#1a0a2e';ctx.fill();
    ctx.beginPath();ctx.ellipse(bird.x-4,bird.y+3,7,4,Math.PI/4,0,Math.PI*2);ctx.fillStyle='#a855f7';ctx.fill();
    ctx.beginPath();ctx.moveTo(bird.x+bird.r,bird.y);ctx.lineTo(bird.x+bird.r+8,bird.y-2);ctx.lineTo(bird.x+bird.r+6,bird.y+3);ctx.closePath();ctx.fillStyle='#f0d080';ctx.fill();
  }
  function drawPipe(p){
    var pw=52,cr=6;
    var tg=ctx.createLinearGradient(p.x,0,p.x+pw,0);tg.addColorStop(0,'#3d1a6e');tg.addColorStop(0.5,'#7b3fa0');tg.addColorStop(1,'#3d1a6e');
    ctx.fillStyle=tg;rr(ctx,p.x,0,pw,p.top,cr);ctx.fill();
    ctx.fillStyle='rgba(168,85,247,0.3)';rr(ctx,p.x-4,p.top-14,pw+8,14,cr);ctx.fill();
    ctx.fillStyle=tg;rr(ctx,p.x,p.bottom,pw,H-p.bottom,cr);ctx.fill();
    ctx.fillStyle='rgba(168,85,247,0.3)';rr(ctx,p.x-4,p.bottom,pw+8,14,cr);ctx.fill();
  }
  function render(){
    drawBg();
    pipes.forEach(function(p){drawPipe(p);});
    drawBird();
    ctx.font='bold 22px sans-serif';ctx.textAlign='center';ctx.fillStyle='rgba(255,255,255,0.9)';ctx.fillText(score,W/2,40);
    if(state==='idle'){
      ctx.fillStyle='rgba(20,5,40,0.7)';rr(ctx,W/2-95,H/2-58,190,108,12);ctx.fill();
      ctx.fillStyle='#e9d5ff';ctx.font='600 15px sans-serif';ctx.fillText('Flappy Purple Bird',W/2,H/2-26);
      ctx.fillStyle='rgba(192,132,252,0.8)';ctx.font='300 12px sans-serif';ctx.fillText('tap or press space to start',W/2,H/2+4);
      ctx.font='22px serif';ctx.fillText('ðŸ’œ',W/2,H/2+34);
    }
    if(state==='dead'){
      ctx.fillStyle='rgba(20,5,40,0.8)';rr(ctx,W/2-105,H/2-68,210,136,12);ctx.fill();
      ctx.fillStyle='#e9d5ff';ctx.font='600 17px sans-serif';ctx.fillText('Game Over!',W/2,H/2-32);
      ctx.fillStyle='rgba(192,132,252,0.8)';ctx.font='300 12px sans-serif';ctx.fillText('Score: '+score+'  |  Best: '+best,W/2,H/2+2);
      ctx.font='13px sans-serif';ctx.fillText('tap to play again ðŸ’œ',W/2,H/2+32);
    }
  }
  function loop(){update();render();requestAnimationFrame(loop);}
  init(); loop();
})();

// FADE IN
(function(){
  var els=document.querySelectorAll('.fade-in');
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1});
  els.forEach(function(el){obs.observe(el);});
})();

