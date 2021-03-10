import mhdata from '../static/mental_health_2019.csv'    // import dataset
"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

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

var dataArray = []

d3.csv(mhdata).then(function(data) {
  data.forEach(function(d){
    var type = d.type;
    var race = +d.race;
    var percentage = +d.percentage;
    dataArray.push({type: type, race: race, percentage: percentage})
  })
  drawLineVegaLite();
});

function drawLineVegaLite() {

  vl.markBar()
    .data(dataArray)
    .encode(
        vl.column().fieldN('type').spacing(10),
        vl.y().fieldQ('percentage'),
        vl.x().fieldN('race'),
        vl.color().fieldN('race'),
        vl.tooltip([vl.fieldN('race'), vl.fieldQ('percentage')])
    )
    .width(50)
    .height(450)
    .render()
    .then(viewElement => {
        // render returns a promise to a DOM element containing the chart
        // viewElement.value contains the Vega View object instance
        document.getElementById('md_2019').appendChild(viewElement);
    })
}