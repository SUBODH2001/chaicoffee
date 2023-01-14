
const sheetId1 = "1pGhWyx0hMjI2heYxpN21UTo3u6K8tEQBr8z9RMP67zw";
const sheetName1 = "Oct2022AOR";
const sheetRange1 = "A1:B2";
const sheetRange2 = "A24:B25";
const sheetRange3 = "A47:B47";
const sheetRange4 = "A69:B69";
const sheetRange5 = "A91:B91";



const fullUrl1 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange1;
const fullUrl2 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange2;
const fullUrl3 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange3;
const fullUrl4 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange4;
const fullUrl5 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange5;









fetch(fullUrl1)
.then(res => res.text())
.then(rep =>{ 

  let data = JSON.parse(rep.substring(47).slice(0,-2));
  
  const entries = [];
  const val = [];
console.log(data)
  for(let i = 0; i <=1; i++){
        entries.push(data.table.rows[i].c[0].v);
        val.push(data.table.rows[i].c[1].v);
  }
  var radial1 = new RadialGauge({
    renderTo: document.getElementById("gauge1"),
    width: 300,
    height: 300,
    
    //units: 'Km/h',
    title: entries[0],
    value: val[1] ,
    minValue: 0,
    maxValue: 220, 
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 1,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
        { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
        { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
    ],
    colorPlate: '#ddd',
    colorMajorTicks: '#222',
    colorMinorTicks: '#111',
    colorTitle: '#000',
    colorUnits: '#000',
    colorNumbers: '#000',
    colorNeedle: '#999',
    colorNeedleEnd: '#222',
    //valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
radial1.draw();

})


fetch(fullUrl2)
.then(res => res.text())
.then(rep =>{ 

  let data = JSON.parse(rep.substring(47).slice(0,-2));
  
  const entries = [];
  const val = [];
console.log(data)
  for(let i = 0; i <=1; i++){
        entries.push(data.table.rows[i].c[0].v);
        val.push(data.table.rows[i].c[1].v);
  }
  var radial2 = new RadialGauge({
    renderTo: document.getElementById("gauge2"),
    width: 300,
    height: 300,
    
    //units: 'Km/h',
    title: entries[0],
    value: val[1] ,
    minValue: 0,
    maxValue: 220, 
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 1,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
        { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
        { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
    ],
    colorPlate: '#ddd',
    colorMajorTicks: '#222',
    colorMinorTicks: '#111',
    colorTitle: '#000',
    colorUnits: '#000',
    colorNumbers: '#000',
    colorNeedle: '#999',
    colorNeedleEnd: '#222',
    //valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
radial2.draw();

})

fetch(fullUrl3)
.then(res => res.text())
.then(rep =>{ 

  let data = JSON.parse(rep.substring(47).slice(0,-2));
  
  const entries = [];
  const val = [];
console.log(data)
  for(let i = 0; i <=0; i++){
        entries.push(data.table.rows[i].c[0].v);
        val.push(data.table.rows[i].c[1].v);
  }
  var radial3 = new RadialGauge({
    renderTo: document.getElementById("gauge3"),
    width: 300,
    height: 300,
    
    //units: 'Km/h',
    title: entries[0],
    value: val[0] ,
    minValue: 0,
    maxValue: 220, 
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 1,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
        { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
        { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
    ],
    colorPlate: '#ddd',
    colorMajorTicks: '#222',
    colorMinorTicks: '#111',
    colorTitle: '#000',
    colorUnits: '#000',
    colorNumbers: '#000',
    colorNeedle: '#999',
    colorNeedleEnd: '#222',
    //valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
radial3.draw();

})




fetch(fullUrl4)
.then(res => res.text())
.then(rep =>{ 

  let data = JSON.parse(rep.substring(47).slice(0,-2));
  
  const entries = [];
  const val = [];
console.log(data)
  for(let i = 0; i <=0; i++){
        entries.push(data.table.rows[i].c[0].v);
        val.push(data.table.rows[i].c[1].v);
  }
  var radial4 = new RadialGauge({
    renderTo: document.getElementById("gauge4"),
    width: 300,
    height: 300,
    
    //units: 'Km/h',
    title: entries[0],
    value: val[0] ,
    minValue: 0,
    maxValue: 220, 
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 1,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
        { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
        { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
    ],
    colorPlate: '#ddd',
    colorMajorTicks: '#222',
    colorMinorTicks: '#111',
    colorTitle: '#000',
    colorUnits: '#000',
    colorNumbers: '#000',
    colorNeedle: '#999',
    colorNeedleEnd: '#222',
    //valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
radial4.draw();

})


fetch(fullUrl5)
.then(res => res.text())
.then(rep =>{ 

  let data = JSON.parse(rep.substring(47).slice(0,-2));
  
  const entries = [];
  const val = [];
console.log(data)
  for(let i = 0; i <=0; i++){
        entries.push(data.table.rows[i].c[0].v);
        val.push(data.table.rows[i].c[1].v);
  }
  var radial5 = new RadialGauge({
    renderTo: document.getElementById("gauge5"),
    width: 300,
    height: 300,
    
    //units: 'Km/h',
    title: entries[0],
    value: val[0] ,
    minValue: 0,
    maxValue: 220, 
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 1,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
        { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
        { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
    ],
    colorPlate: '#ddd',
    colorMajorTicks: '#222',
    colorMinorTicks: '#111',
    colorTitle: '#000',
    colorUnits: '#000',
    colorNumbers: '#000',
    colorNeedle: '#999',
    colorNeedleEnd: '#222',
    //valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
radial5.draw();

})







/*
var radial2 = new RadialGauge({
    renderTo: document.getElementById("gauge2"),
    width: 300,
    height: 300,
    //units: 'Km/h',
    title: entries[2],
    value: val[2] ,
    minValue: 0,
    maxValue: val[0], 
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 1,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
        { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
        { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
    ],
    colorPlate: '#ddd',
    colorMajorTicks: '#222',
    colorMinorTicks: '#111',
    colorTitle: '#000',
    colorUnits: '#000',
    colorNumbers: '#000',
    colorNeedle: '#999',
    colorNeedleEnd: '#222',
    //valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
radial2.draw();





var radial3 = new RadialGauge({
  renderTo: document.getElementById("gauge3"),
  width: 300,
  height: 300,
  //units: 'Km/h',
  title: entries[1],
  value: val[1] ,
  minValue: 0,
  maxValue: val[0], 
  majorTicks: [
      '0','20','40','60','80','100','120','140','160','180','200','220'
  ],
  minorTicks: 1,
  strokeTicks: false,
  highlights: [
      { from: 0, to: 60, color: 'rgba(0,255,0,.60)' },
      { from: 60, to: 160, color: 'rgba(255,30,0,.60)' },
      { from: 160, to: 220, color: 'rgba(0,0,255,.60)' }
  ],
  colorPlate: '#ddd',
  colorMajorTicks: '#222',
  colorMinorTicks: '#111',
  colorTitle: '#000',
  colorUnits: '#000',
  colorNumbers: '#000',
  colorNeedle: '#999',
  colorNeedleEnd: '#222',
  //valueBox: true,
  animationRule: 'bounce',
  animationDuration: 500
});
radial3.draw();




*/

// NAV MENU 

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}


let ham = document.getElementById("hamburgerMenu");
let reaction = document.getElementById("hamburgerContainer");
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


ham.addEventListener("click",() => {
    if ( reaction.style.visibility == "hidden"){
    reaction.style.visibility = "visible";
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  
   
    }else{
        
        reaction.style.visibility = "hidden";
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
});

