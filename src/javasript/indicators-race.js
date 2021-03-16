import merge from '../../static/merge.csv';
//import newcases from '../static/newcases_period.csv';
import merge_race from '../../static/merge_race.csv';
import merge_gender from '../../static/merge_gender.csv';
import all_education2 from '../../static/all_education2.csv';

/* var vl = require('vega-lite-api');
var vegaLite = require('vega-lite');
var vega = require('vega');
var vegaTooltip = require('vega-tooltip'); */

"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

var races = ['Hispanic or Latino', 'Non-Hispanic white, single race', 'Non-Hispanic black, single race',
'Non-Hispanic Asian, single race', 'Non-Hispanic, other races and multiple races'];   // used to store data later
var indicators = ['Symptoms of Depressive Disorder', 'Symptoms of Anxiety Disorder', 
'Symptoms of Anxiety Disorder or Depressive Disorder'];
var time_periods = ['Apr 23 - May 5', 'May 7 - May 12', 'May 14 - May 19', 'May 21 - May 26',
                'May 28 - June 2', 'June 4 - June 9', 'June 11 - June 16', 'June 18 - June 23', 
                'June 25 - June 30', 'July 2 - July 7', 'July 9 - July 14', 'July 16 - July 21',
                'Aug 19 - Aug 31', 'Sep 2 - Sep 14', 'Sep 16 - Sep 28', 'Sep 30 - Oct 12',
                'Oct 14 - Oct 26', 'Oct 28 - Nov 9', 'Nov 11 - Nov 23', 'Nov 25 - Dec 7', 
                'Dec 9 - Dec 21', 'Jan 6 - Jan 18', 'Jan 20 - Feb 1'];
var symptomtypes = ['Anxiety', 'Depressive', 'Anxiety or Depressive'];
var edlevels = ['Less than a high school diploma', 'High school diploma or GED', 
                "Some college/Associate's degree", "Bachelor's degree or higher"];

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

drawIndicatorsGenderVegaLite();
drawIndicatorsRaceVegaLite();
drawIndicatorsEducationVegaLite();
drawCasesSymptomsVegaLite();


function drawIndicatorsGenderVegaLite() {
  /*const selection2 = vl.selectSingle('Select')
  .fields('Indicator')
  .init({Indicator: 'Symptoms of Anxiety Disorder'})
  .bind({Indicator: vl.menu(indicators).name('Symptom Type: ')});

  return vl.markCircle()
    .data(all_gender)
    .title(['% of US Adults with Symptoms of Anxiety and', 'Depressive Disorder by Gender, April 2020 - February 2021'])
    .select(selection2)
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods),
      vl.y({title: '% of the US Adult Population'}).fieldQ('Value'),
      vl.color({title: 'Gender'}).fieldN('Subgroup'),
      vl.tooltip('Value'),
      vl.opacity().if(selection2, vl.value(1)).value(0)
  ) */
  const selection2 = vl.selectSingle('Select')
    .fields('SymptomType')
    .init({SymptomType: 'Anxiety'})
    .bind({SymptomType: vl.menu(symptomtypes).name('Symptom Type: ')});
  
  return vl.markCircle()
    .data(merge_gender)
    .title('Symptoms of Depression and Anxiety by Sex, April 2020 - February 2021')
    .select(selection2)
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods).axis({grid: true, tickBand: 'extent'}),
      vl.y({title: '% of the US Adult Population'}).fieldQ('Value'),
      vl.color({title: 'Sex'}).fieldN('Subgroup'),
      vl.tooltip('Value'),
      vl.opacity().if(selection2, vl.value(1)).value(0)
  )
  .width(450)
  .height(400)
  .render()
  .then(viewElement => {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('ind-gender').appendChild(viewElement);
  }); 
}

function drawIndicatorsRaceVegaLite() {
  /*const selection = vl.selectSingle('Select')
    .fields('Indicator', 'Subgroup')
    .init({Indicator: 'Symptoms of Anxiety Disorder', Subgroup: 'Non-Hispanic black, single race'})
    .bind({Indicator: vl.menu(indicators), Subgroup: vl.menu(races)});
           
     vl.markCircle()
    .data(all_race)
    .title('Symptoms of Anxiety and Depressive Disorder, April 2020 - February 2021')
    .select(selection)
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods),
      vl.y({title: 'Percentage of population'}).fieldQ('Value'),
      vl.tooltip().fieldQ('Value'),
      vl.color({title: 'Race/Ethnicity'}).fieldN('Subgroup'),
      vl.opacity().if(selection, vl.value(1)).value(0)
    )
    .width(450)
    .height(450)
    .render() */
    const selection = vl.selectSingle('Select')
    .fields('SymptomType')
    .init({SymptomType: 'Anxiety'})
    .bind({SymptomType: vl.menu(symptomtypes).name('Symptom Type: ')});
           
    vl.markCircle()
    .data(merge_race)
    .title(['% of US Adults with Symptoms of Anxiety and', 'Depressive Disorder by Race, April 2020 - February 2021'])
    .select(selection)
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods).axis({grid: true, tickBand: 'extent'}),
      vl.y({title: '% of the US Adult Population'}).fieldQ('Value'),
      vl.tooltip().fieldQ('Value'),
      vl.color({title: 'Race/Ethnicity'}).fieldN('Subgroup2'),
      vl.opacity().if(selection, vl.value(1)).value(0),
    )
    .width(450)
    .height(400)
    .render() 
    .then(viewElement => {
    document.getElementById('ind-race').appendChild(viewElement);
  });
}


// COVID cases and Anxiety/Depression 
function drawCasesSymptomsVegaLite() {
  const brush = vl.selectInterval()
  .encodings('x');

  const cases = vl.markArea({color: '#F6573F'})
    .data(merge)
    .select(brush)
    .encode(
      vl.x({title: 'Date'}).fieldT('date').sort('ascending'),
      vl.y({title: 'New COVID-19 Cases'}).fieldQ('newcases')
    ).width(500).height(240)

  const mh = vl.markCircle()
    .data(merge)
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods),
      vl.y({title: 'Percentage of population'}).fieldQ('Value'),
      vl.color().fieldN('SymptomType').legend({orient: 'bottom', title: 'Symptom Type'}),
      vl.tooltip().fieldQ('Value'),
      vl.opacity().if(brush, vl.value(1)).value(0.005)
  ).width(500).height(240)

  return vl.vconcat(cases, mh).spacing(5).title('New COVID-19 Cases and Symptoms of Anxiety and Depressive Disorder, Apr 2020 - Feb 2021')
      //.width(450)
      //.height(450)
      .render()
      .then(viewElement => {
      document.getElementById('cases-mh').appendChild(viewElement);
    });
} 

function drawIndicatorsEducationVegaLite() {
  const selection2 = vl.selectSingle('Select')
  .fields('SymptomType')
  .init({SymptomType: 'Anxiety'})
  .bind({SymptomType: vl.menu(symptomtypes).name('Symptom Type: ')});

return vl.markCircle()
.data(all_education2)
.title('Symptoms of Depression and Anxiety by Education, April 2020 - February 2021')
.select(selection2)
.encode(
  vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods),
  vl.y({title: '% of the US Adult Population'}).fieldQ('Value'),
  vl.color({title: 'Education Level'}).fieldN('Subgroup').sort(edlevels),
  
  vl.tooltip('Value'),
  vl.opacity().if(selection2, vl.value(1)).value(0)
)
.width(450)
.height(400)
.render()
    .then(viewElement => {
    document.getElementById('ind-ed').appendChild(viewElement);
  });
}


/*
function drawCasesSymptomsVegaLite() {
  const cases = vl.markLine({color: 'teal'})
    .data(newcases)
    .transform(
      vl.groupby('TimePeriodLabel').
        aggregate(vl.sum('newcases').as('period_cases')),
    )
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods),
      vl.y({title: 'New COVID-19 Cases'}).fieldQ('period_cases')
    ).width(500).height(240)

  const mh = vl.markLine()
    .data(merge)
    .encode(
      vl.x({title: 'Time Period'}).fieldO('TimePeriodLabel').sort(time_periods),
      vl.y({title: 'Percentage of population'}).fieldQ('Value'),
      vl.color().fieldN('SymptomType').legend({orient: 'bottom', title: 'Symptom Type'}),
      vl.tooltip().fieldQ('Value'),
  ).width(500).height(240)

  return vl.layer(cases, mh)
      .resolve({scale: {y: "independent"}})
      .title('New COVID-19 Cases and Symptoms of Anxiety and Depressive Disorder, Apr 2020 - Feb 2021')
      .render()
      .then(viewElement => {
        document.getElementById('cases-mh').appendChild(viewElement);
    });
}
*/

