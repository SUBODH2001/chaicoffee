const sheetId1 = "1pGhWyx0hMjI2heYxpN21UTo3u6K8tEQBr8z9RMP67zw";
const sheetName1 = "Graphs";
const sheetRange1 = "A28:C33";
const sheetRange2 = "E28:F86";
const sheetRange3 = "A1:B4";
const fullUrl1 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange1;

const fullUrl2 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange2;
const fullUrl3 = "https://docs.google.com/spreadsheets/d/" + sheetId1 + "/gviz/tq?sheet=" + sheetName1 + "&range="+ sheetRange3;


fetch(fullUrl1)
.then(res => res.text())
.then(rep =>{
    let data = JSON.parse(rep.substring(47).slice(0,-2));
    const names = [];
    const val1 = [];
    const val2 = [];
    
    for(let i = 0; i <=5; i++){
        names.push(data.table.rows[i].c[0].v);
        val1.push(data.table.rows[i].c[1].v);
        val2.push(data.table.rows[i].c[2].v);
    }
    new Chart(document.getElementById("chart1"), {
      type: 'bar',
      data: {
        labels: names,
        datasets: [
          {
            label: "Visa Offices",
            data: val1
          }
        ]
      },
      options: {
        responsive: true,
        
        plugins:{

        
        legend: { 
          labels:{
            color: "#111"
          },
          display: true,
          boxHeight: 50,
          
          text: "No of Applications"
        },
        title: {
          display: true,
          padding: {
            top: 10,
            bottom: 10
        },
        font: {
          size: 30,
        
        },

          text: "No of Applications",
        }
      }
    }
      
  });
    
    new Chart(document.getElementById("chart2"), {
        type: 'bar',
        data: {
          labels: names,
          datasets: [
            {
              label: "AOR to medical days",
              data: val2,
            },
          
          ]
        },
        options: {
          indexAxis: 'y',

        
          legend: { 
            display: true,
            text: "AOR to Medical Days by Visa Offices"},
          title: {
            padding: {
              top: 10,
              bottom: 10
          },
          font: {
            size: 30,
          
          },
            display: true,
            text: "AOR to Medical Days by Visa Offices"},
          
          }
        }
        
    );
})


fetch(fullUrl2)
.then(res => res.text())
.then(rep =>{ 
  let data = JSON.parse(rep.substring(47).slice(0,-2));
  const applicationNo = [];
  const val = [];
  for(let i = 0; i <=57; i++){
    applicationNo.push(data.table.rows[i].c[0].v);
    val.push(data.table.rows[i].c[1].v);
   }
  
  new Chart(document.getElementById("pie"), {
    type: 'doughnut',
   
    data: {
      labels: applicationNo,
      datasets: [
        {
          label: "Applications by NOC",
          data: val
        }
      ]
    },
    options: {
      labels: false,
      legend: { 

        display: false
      },
      title: {
        display: false
        
      }
    }
    
});

})

fetch(fullUrl3)
.then(res => res.text())
.then(rep =>{ 

  let data = JSON.parse(rep.substring(47).slice(0,-2));
  
  const entries = [];
  const val = [];
    
  for(let i = 0; i <=3; i++){
        entries.push(data.table.rows[i].c[0].v);
        val.push(data.table.rows[i].c[1].v);
  }
  var radial1 = new RadialGauge({
    renderTo: document.getElementById("gauge1"),
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
radial1.draw();

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
  title: entries[3],
  value: val[3] ,
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





})
