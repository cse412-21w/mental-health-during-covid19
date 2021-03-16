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
var url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv";
var dataArray = [];
var stateArray = [];

d3.csv(url).then(function(data) {
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
    stateArray = stateArray.sort();
  })
  drawLineVegaLite();
});

/*
function drawLineVegaLite() {
  const layer1 = plot('cases')
    .width(800)
    .height(300)
    .title("Cumulative COVID-19 Case Counts");

  const layer2 = plot('deaths')
    .width(800)
    .height(150)
    .title("Cumulative COVID-19 Death Counts");

  return vl.vconcat(layer1, layer2).spacing(5)
    .render()
    .then(viewElement => {
      // render returns a promise to a DOM element containing the chart
      // viewElement.value contains the Vega View object instance
      document.getElementById('covid-data').appendChild(viewElement);
    });
}

function plot(field) {
  const selection = vl.selectSingle('Select')
    .fields('state')
    .init({'state': 'Washington'})
    .bind(vl.menu(stateArray).name('State: '))

  const hover = vl.selectSingle()
    .fields('date')
    .on('mouseover') // select on mouseover
    .clear('mouseout')
    .nearest(true)   // select nearest point to mouse cursor
    .empty("none")

  //const label = {align: 'left', dx: 5, dy: -5};

  const line = vl.markLine({color: '#F6573F'})
    .select(selection)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y().fieldQ(field),
    )
    
  const tip = vl.markRule({color: "#aaa"})
    .select(hover)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.opacity().if(hover, vl.value(1)).value(0),
      vl.tooltip([vl.fieldT('date'), vl.fieldQ(field)])
    );

  const point = vl.markCircle({size: 30})
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y().fieldQ(field),
      vl.opacity().if(hover, vl.value(1)).value(0)
    );

  return vl.layer(line, tip, point)
    .data(dataArray)
    .encode(
      vl.x({title: 'Date'}).fieldT('date')
    );
}
*/

//stateArray = stateArray.sort();

function drawLineVegaLite() {

  const selection = vl.selectSingle('Select')
    .fields('state')
    //.init({'state': stateArray[0]})
    .init({'state': 'Washington'})
    .bind(vl.menu(stateArray).name('State: '))

  const hover = vl.selectSingle()
    .fields('date')
    .on('mouseover') // select on mouseover
    .clear('mouseout')
    .nearest(true)   // select nearest point to mouse cursor
    .empty("none")

  const label = {align: 'left', dx: 5, dy: -5};
  const white = {stroke: 'white', strokeWidth: 2};
    
  const cases = vl.markLine({color: '#F6573F'})
    .select(selection)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y({title: 'Cases'}).fieldQ('cases'),
    )
    .width(800)
    .height(300)
    .title("Cumulative COVID-19 Case Counts");
 
  const casetip = vl.markRule({color: "#aaa"})
    .select(hover)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.opacity().if(hover, vl.value(1)).value(0),
      vl.tooltip().fieldT('date')
    );

  const casepoints = vl.markCircle({size: 30})
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y().fieldQ('cases'),
      vl.opacity().if(hover, vl.value(1)).value(0)
    );

  const case_text = vl.markText(label)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y().fieldQ('cases'),
      vl.opacity().if(hover, vl.value(1)).value(0),
      vl.text().fieldQ('cases')
    )
    
  const layer1 = vl.layer(cases, casetip, casepoints, case_text)
    .data(dataArray)
    .encode(
      vl.x({title: 'Date'}).fieldT('date')
    );

  const death = vl.markLine({color: '#F6573F'})
    .select(selection)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y({title: 'Deaths'}).fieldQ('deaths'),
    )
    .width(800)
    .height(150)
    .title("Cumulative COVID-19 Death Counts");
 
  const deathTip = vl.markRule({color: "#aaa"})
    .select(hover)
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.opacity().if(hover, vl.value(1)).value(0),
      vl.tooltip().fieldT('date')
    );

  const death_points = vl.markCircle({size: 30})
    .transform(
      vl.filter(selection)
    )
    .encode(
      vl.y().fieldQ('deaths'),
      vl.opacity().if(hover, vl.value(1)).value(0)
    );
    
  const death_text = vl.markText(label)
      .transform(
        vl.filter(selection)
      )
      .encode(
        vl.y().fieldQ('deaths'),
        vl.opacity().if(hover, vl.value(1)).value(0),
        vl.text().fieldQ('deaths')
      )

  const layer2 = vl.layer(death, deathTip, death_points, death_text)
    .data(dataArray)
    .encode(
      vl.x({title: 'Date'}).fieldT('date')
    );
    
  return vl.vconcat(layer1, layer2).spacing(5)
    .render()
    .then(viewElement => {
      // render returns a promise to a DOM element containing the chart
      // viewElement.value contains the Vega View object instance
      document.getElementById('covid-data').appendChild(viewElement);
    });
}



