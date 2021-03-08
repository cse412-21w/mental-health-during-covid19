import casedata from '../static/us-states.csv'    // import dataset
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
var stateArray = []

d3.csv(casedata).then(function(data) {
  data.forEach(function(d){
    const parseDate = d3.utcParse("%Y-%m-%d");
    var date = parseDate(d.date);
    var state = d.state;
    var cases = +d.cases;
    var deaths = +d.deaths;
    dataArray.push({date: date, state: state, cases: cases, deaths: deaths})
    if (!stateArray.includes(state)) {
      stateArray.push(state)
    }
  })
  drawLineVegaLite();
});

function drawLineVegaLite() {

  const selection = vl.selectSingle('Select')
    .fields('state')
    .init({'state': stateArray[0]})
    .bind(vl.menu(stateArray))

  const cases = vl.markLine()
      .data(dataArray)
      .select(selection)
      .transform(
        vl.filter(selection)
      )
      .encode(
        vl.x().fieldT('date'),
        vl.y().fieldQ('cases'),
        vl.tooltip(['date', 'cases'])
      )
      .width(400)
      .height(450);

    const death = vl.markLine()
        .data(dataArray)
        .select(selection)
        .transform(
          vl.filter(selection)
        )
        .encode(
          vl.x().fieldT('date'),
          vl.y().fieldQ('deaths'),
          vl.tooltip(['date', 'deaths'])
        )
        .width(400)
        .height(450);

  return vl.hconcat(cases, death).spacing(5)
    .render()
    .then(viewElement => {
      // render returns a promise to a DOM element containing the chart
      // viewElement.value contains the Vega View object instance
      document.getElementById('covid-data').appendChild(viewElement);
    });
}