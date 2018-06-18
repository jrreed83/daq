
const {linearMapping} = graphing;

// Canvas margin 
const margin = {
    l: 30,
    t: 30,
    r: 30,
    b: 30,
};          

const canvas  = document.querySelector('canvas');
canvas.height = 300 - margin.t - margin.b;
canvas.width  = 700 - margin.l - margin.r;
canvas.style  = `top: ${margin.t}; left: ${margin.l}`;

const {height, width} = canvas;
const ctx = canvas.getContext('2d');


 

const l = margin.l;
const r = width - margin.r;
const t = margin.t;
const b = height-margin.b;
const xScale = linearMapping().domain([0 ,100]).range([l, r]);
const yScale = linearMapping().domain([-1,1]).range([b, t]);


// signal
const fs = 1000;
const fc = 50;
const n  = 100;
ctx.lineCap  = 'round';  
ctx.lineJoin = 'round';
ctx.strokeStyle = 'teal';
ctx.lineWidth=2;
           
           
ctx.beginPath();
ctx.moveTo(xScale(0), yScale(0));
for (let i=1; i < n; i++) {
    const x = i;
    const y = Math.sin(2 * Math.PI * (fc / fs) * i);
    ctx.lineTo(xScale(x), yScale(y));  
}
ctx.stroke(); 