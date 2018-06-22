import './styles.css';
import chart from './chart.js'


import * as d3 from 'd3';

// Canvas margin 
const margin = {
    l: 30,
    t: 30,
    r: 30,
    b: 30,
};          

// Get chart container
const chart  = document.getElementById('chart');
const height = chart.clientHeight;
const width  = chart.clientWidth;

const canvas  = document.querySelector('canvas');
canvas.height = height - margin.t - margin.b;
canvas.width  = width - margin.l - margin.r;
canvas.style.top  = `${margin.t}px`, 
canvas.style.left = `${margin.l}px`;
const ctx = canvas.getContext('2d');


const l = 0;//margin.l;
const r = canvas.width;//width - margin.r;
const t = 0;//margin.t;
const b = canvas.height;//height-margin.b;

const xScale = d3.scaleLinear().domain([0, 100]).range([l, r]);
const yScale = d3.scaleLinear().domain([-1, 1]).range([b, t]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

d3.select('.x.axis')
    .attr('transform', `translate(${margin.l},${height-margin.b})`)
    .call(xAxis);

d3.select('.y.axis')
    .attr('transform', `translate(${margin.l},${margin.t})`)
    .call(yAxis);

// signal
const fs = 1000;
const fc = 50;
const n  = 100;
ctx.lineCap  = 'round';  
ctx.lineJoin = 'round';
ctx.strokeStyle = 'teal';
ctx.lineWidth=1;
           
           
ctx.beginPath();
ctx.moveTo(xScale(0), yScale(0));
for (let i=1; i < n; i++) {
    const x = i;
    const y = Math.sin(2 * Math.PI * (fc / fs) * i);
    ctx.lineTo(xScale(x), yScale(y));  
}
ctx.stroke(); 