import Covid_2019_Data from '../../static/adult_prevalance_2019.csv';    // import dataset
import Covid_2020_Data from '../../static/adult_mh_prevalance_2020 (2).csv'; 
import us_json from '../../static/us.json'
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

drawLineVegaLite()

function drawLineVegaLite() {

    const Covid2019 = vl.layer (
        vl.markGeoshape({stroke: '#aaa', strokeWidth: 0.25})
        .title("Percentage of Adult with any Mental illness by State in 2019")
        .data(vl.topojson(us_json).feature('states'))
        .transform(
          vl.lookup('id').from(vl.data(Covid_2019_Data).key('id').fields(['state', 'rank', 'percentage', 'number']))
        )
        .encode(
          vl.color().fieldQ('percentage').scale({scheme: 'Reds'}).legend({title: 'Percentage (%)'}),
          vl.tooltip(['state', 'percentage'])      
        )    
   )
        .width(400)
        .height(300)
        .config({view: {stroke: null}})
      .project(vl.projection('albersUsa'))
    
    const Covid2020 = vl.layer (
        vl.markGeoshape({stroke: '#aaa', strokeWidth: 0.25})
        .title("Percentage of Adult with any Mental illness by State in 2020")
        .data(vl.topojson(us_json).feature('states'))
        .transform(
          vl.lookup('id').from(vl.data(Covid_2020_Data).key('id ').fields(['state', 'rank', 'percentage', 'number']))
        )
        .encode(
          vl.color().fieldQ('percentage').scale({scheme: 'Reds'}).legend({title: 'Percentage (%)'}),
          vl.tooltip(['state', 'percentage'])
        )    
   )
    .width(400)
        .height(300)
        .config({view: {stroke: null}})
      .project(vl.projection('albersUsa'))

    return vl.hconcat(Covid2019, Covid2020)
    .render()
    .then(viewElement => {
      // render returns a promise to a DOM element containing the chart
      // viewElement.value contains the Vega View object instance
      document.getElementById('covid-Map-data').appendChild(viewElement);
    });
}
