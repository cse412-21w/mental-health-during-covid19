import anxiety_gender from '../static/anxiety_gender.csv'    // import dataset
"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

var races = races = ['Hispanic or Latino', 'Non-Hispanic white, single race', 'Non-Hispanic black, single race',
'Non-Hispanic Asian, single race', 'Non-Hispanic, other races and multiple races'];   // used to store data later
var indicators = ['Symptoms of Depressive Disorder', 'Symptoms of Anxiety Disorder', 
'Symptoms of Anxiety Disorder or Depressive Disorder'];
var cdcArray = [];
var citySet = [];

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
d3.csv(anxiety_gender).then(function(data) {
  data.forEach(function(d){
    cdcArray.push(d);
    if (!citySet.includes(d.city)) {
      citySet.push(d.city);
    }
  })
  drawLineVegaLite();
});

/*anxiety_gender = cdchealth
.filter(d => op.includes(d.Group, 'By Gender'))
.filter(d => op.equal(d.Indicator, 'Symptoms of Anxiety Disorder'))
.filter(d => !op.includes(d.TimePeriodLabel, 'July 22 - Aug 18'))
.filter(d => !op.includes(d.TimePeriodLabel, 'Dec 22 - Jan 5')) */


function drawLineVegaLite() {
  // var sunshine = add_data(vl, sunshine.csv, format_type = NULL);
  // your visualization goes here
  vl.markLine()
  .data(anxiety_gender)
  .encode(
    vl.x().fieldO('TimePeriodLabel'),
    vl.y().fieldQ('Value'),
    vl.color().fieldN('Subgroup'),
    vl.tooltip('Value')
  )
  .width(450)
  .height(450)
  .render()
  .then(viewElement => {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('anxiety').appendChild(viewElement);
  });
}