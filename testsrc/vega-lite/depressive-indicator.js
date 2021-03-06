//import MHIndicatorData from './cdc-mh-indicator.csv'    // import dataset
//import { all, desc, op, table, aq } from 'arquero';
"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

var dataArray = [];   // used to store data later

const options = {
  config: {
    // Vega-Lite default configuration
  },
  init: (view) => {
    // initialize tooltip handler
    view.tooltip(new vegaTooltip.Handler().call);
  },
  view: {
    // view constructor options
    // remove the loader if you don't want to default to vega-datasets!
    //   loader: vega.loader({
    //     baseURL: "",
    //   }),
    renderer: "canvas",
  },
};

vl.register(vega, vegaLite, options);

// Again, We use d3.csv() to process data
d3.json('https://data.cdc.gov/resource/8pt5-q6wp.json').then(function(data) {
  data.forEach(function(d){
    dataArray.push(d);
  })
  //drawBarVegaLite();
  console.log(dataArray)



  let filteredData = aq.from(dataArray)
  console.log("data:", filteredData)

  // .filter(d => d.indicator === "Symptoms of Depressive Disorder" && d.group === "By State")
  // .select(aq.not('Low CI', 'High CI', 'Confidence Interval', 'Quartile Range', 'Time Period End Date', 'Time Period Start Date', 'Low CI', 'Low CI', 'Low CI', 'Subgroup'))
  // .groupby('Time Period', 'Time Period Label')
  // .rollup({
  //   median_value: d => op.median(d.value),
  //   mean_value: d => op.mean(d.value),
  //   count: op.count()
  // })
  // .object()

  drawChartVegaLite(dataArray)
});

function drawChartVegaLite(data) {
  // var sunshine = add_data(vl, sunshine.csv, format_type = NULL);
  // your visualization goes here
  vl.markLine()
  .title("Trend of Depression Indicator from April 2020 to Feburary 2021")
  .data(data)
  .encode(
    vl.x().fieldQ('Time Period'),
    vl.y().fieldQ('mean_value').title('Value').scale({zero: false})
  )
  .render()
  .then(viewElement => {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('vega-depressive-indicator').appendChild(viewElement);
  });
}
  