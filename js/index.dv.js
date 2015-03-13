F=function(v,f){return Function(v,f)}
w=/webkit/i.test(navigator.userAgent)?'-webkit-':''
f={
 d:document,
 a:F('e,p','return p.appendChild(e)'),
 ap:F('v,s,d,l,i',
  'console.log(v=v.data.split("_"));'+
  'for(l in v){s=v[l].split(" "),'+
   'f.a(d=f.dv.cloneNode(),师);'+
   'for(i in s)'+
    'f.a(f.c("a",{innerHTML:s[i]}),d)}'+
  'f.sty("body{background:#000"),'+
  'console.clear(),f.d.scripts[0].remove()'),
 c:F('t,a,i',
  't=f.d.createElement(t);'+
  'for(i in a)t[i]=a[i];'+
  'return t'),
 s:'*{transition:3s_body{background:overflow:hidden;font-family:Segoe UI Symbol_body>a{font-size:5em;left:50%;position:relative;top:45%;'+w+'animation:a 5s 1_@'+w+'keyframes a{to{transform:rotate(1440deg)}',
 sty:F('s,i',
  's=s.split("_");'+
  'for(i in s)f.S.insertRule(s[i],f.S.cssRules.length)')}
onload=function(){
 f.S=f.d.styleSheets[0]
 f.sty(f.s)
 f.dv=f.c('div')
 f.wk=new Worker('js/工人.js')
 f.wk.onmessage=f.ap
 f.sty('#师{left:20%;position:absolute_#师>*{color:rgba(255,255,255,.5);font-size:5em;perspective:100em_#师>:nth-child(odd):hover{transform:rotate(5deg)_#师>:nth-child(even):hover{transform:rotate(-5deg)_a{cursor:pointer;height:10%;width:100%_a:hover{color:#FFF;transform:translateZ(150em);text-shadow:#00F 0 -5px 15px,#000 0 0 15px,#088 0 5px 15px,#F00 0 -15em 0,#0F0 12em 7em 0,#00F -12em 7em 0,#F00 0 15em 0,#0F0 -12em -7em 0,#00F 12em -7em 0')}