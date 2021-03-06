import casedata from '../static/us-states.csv'   // import dataset
"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#d3-demo")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
var caseArray = []
d3.csv(casedata).then(function(data) {
    data.forEach(function(d){
        //var ob = {date: d.date, state: d.state, cases: +d.cases};
        caseArray.push(ob);
    })
    drawLineD3();
  });

  // When reading the csv, I must format variables:
function drawLineD3() {
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(caseArray, function(d) { return d.date;}))
      .range([ 0, width]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(caseArray, function(d) {return d.cases;})])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    var line = d3.line()
            .x(d => x(d.date))
            .y(d => y(+d.cases));  

    // Add the area
    svg.append("path")
      .datum(caseArray)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
}

