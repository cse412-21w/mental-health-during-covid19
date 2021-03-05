import cdchealth from '../static/mentalhealth-cdc.csv'    // import dataset
import anxietygender from '../static/anxiety_gender.csv'
//import { drawBarVegaLite } from './drawBarVegaLite';
//import {drawLineVegaLite} from './drawLineVegaLite';
"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

var races = ['Hispanic or Latino', 'Non-Hispanic white, single race', 'Non-Hispanic black, single race',
'Non-Hispanic Asian, single race', 'Non-Hispanic, other races and multiple races'];   // used to store data later
var indicators = ['Symptoms of Depressive Disorder', 'Symptoms of Anxiety Disorder', 
'Symptoms of Anxiety Disorder or Depressive Disorder'];
var cdcArray = [];
var citySet = [];
var time_periods = ['Apr 23 - May 5', 'May 7 - May 12', 'May 14 - May 19',
                'May 21 - May 26', 'May 28 - June 2', 
                'June 4 - June 9', 'June 11 - June 16',
                'June 18 - June 23', 'June 25 - June 30', 
                'July 2 - July 7', 'July 9 - July 14', 
                'July 16 - July 21', 'Aug 19 - Aug 31',
                'Sep 2 - Sep 14', 'Sep 16 - Sep 28', 'Sep 30 - Oct 12',
                'Oct 14 - Oct 26', 'Oct 28 - Nov 9', 'Nov 11 - Nov 23',
                'Nov 25 - Dec 7', 'Dec 9 - Dec 21', 'Jan 6 - Jan 18',
                'Jan 20 - Feb 1'];

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
d3.csv(anxietygender).then(function(data) {
  data.forEach(function(d){
    cdcArray.push(d);
    if (!citySet.includes(d.TimePeriodLabel)) {
      citySet.push(d.TimePeriodLabel);
    }
  })
  drawLineVegaLite();
}); 

// can't figure out the dataset filtering yet; this works in Observable but not here
 /*anxiety_gender = cdchealth
.filter(d => op.includes(d.Group, 'By Gender'))
.filter(d => op.equal(d.Indicator, 'Symptoms of Anxiety Disorder'))
.filter(d => !op.includes(d.TimePeriodLabel, 'July 22 - Aug 18'))
.filter(d => !op.includes(d.TimePeriodLabel, 'Dec 22 - Jan 5')); */



function drawLineVegaLite() {
  // var sunshine = add_data(vl, sunshine.csv, format_type = NULL);
  // your visualization goes here
  vl.markLine()
  .data(anxietygender)
  .title('Symptoms of Anxiety Disorder by Gender, April 2020 - February 2021')
  .encode(
      vl.x({title: 'Time period'}).fieldO('TimePeriodLabel').sort(time_periods),
      vl.y({title: 'Percentage of population'}).fieldQ('Value'),
      vl.color().fieldN('Subgroup'),
      vl.tooltip().fieldQ('Value')
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