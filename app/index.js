import './styles.css';
import * as d3 from 'd3';

const data = [];
const fs = 1000;
const fc = 50;
for (let i = 0; i < 100; i++) {
    data.push([
        i, Math.sin(2 * Math.PI * (fc / fs) * i)    
    ])
}

// Canvas margin 
const margin = {
    l: 30,
    t: 30,
    r: 30,
    b: 30,
};          

function chart1( root, data ) {
    const height = root.clientHeight;
    const width  = root.clientWidth;

    const l = 0;
    const r = width - margin.l - margin.r;
    const t = 0;
    const b = height - margin.t - margin.b;

    const xExtent = d3.extent(data, d => d[0])
    const yExtent = d3.extent(data, d => d[1]);

    const xScale = d3.scaleLinear().domain( xExtent ).range([l, r]);
    const yScale = d3.scaleLinear().domain( yExtent ).range([b, t]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const line  = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]));

    const svg = root.querySelector('svg');
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('width', `${width}`);

    d3.select(root.querySelector('.x.axis'))
        .attr('transform', `translate(${margin.l},${height-margin.b})`)
        .call(xAxis);

    d3.select(root.querySelector('.y.axis'))
        .attr('transform', `translate(${margin.l},${margin.t})`)
        .call(yAxis);

    const el = root.querySelector('.line');
    el.setAttribute('d', line(data));
    el.setAttribute('transform', `translate(${margin.l},${margin.t})`);        
}

function chart2( root, data ) {
    const height = root.clientHeight;
    const width  = root.clientWidth;

    const svg = root.querySelector('svg');
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('width', `${width}`);

    const canvas  = root.querySelector('canvas');
    canvas.height = height - margin.t - margin.b;
    canvas.width  = width - margin.l - margin.r;
    canvas.style.top  = `${margin.t}px`, 
    canvas.style.left = `${margin.l}px`;
    const ctx = canvas.getContext('2d');    

    const l = 0;
    const r = width - margin.l - margin.r;
    const t = 0;
    const b = height - margin.t - margin.b;

    const xExtent = d3.extent(data, d => d[0])
    const yExtent = d3.extent(data, d => d[1]);

    const xScale = d3.scaleLinear().domain( xExtent ).range([l, r]);
    const yScale = d3.scaleLinear().domain( yExtent ).range([b, t]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const line  = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]));

    d3.select(root.querySelector('.x.axis'))
        .attr('transform', `translate(${margin.l},${height-margin.b})`)
        .call(xAxis);

    d3.select(root.querySelector('.y.axis'))
        .attr('transform', `translate(${margin.l},${margin.t})`)
        .call(yAxis);

    // signal
    ctx.lineCap  = 'round';  
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'teal';
    ctx.lineWidth = 1;
           
    let [x,y] = data[0];   
    ctx.beginPath();
    ctx.moveTo(xScale( x ), yScale( y ));
    for (let i=1; i < data.length; i++) {
        [x, y] = data[i];
        ctx.lineTo(xScale( x ), yScale( y ));  
    }
    ctx.stroke();         
}

chart1( document.querySelector('#chart1'), data );

chart2( document.querySelector('#chart2'), data );





