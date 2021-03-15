"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables
import adult_aggregate_data from "../../static/adult_mh_prevalance_aggregate.csv"
import youth_aggregate_data from "../../static/youth_prevalance_of_mde_aggregate.csv"

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

drawYouthAdultComparasionVegaLite();

function drawYouthAdultComparasionVegaLite() {

  const adultChart = vl.markBar()
    .title({"text": "Number of Adults With Any Mental Illness, 2019 and 2020"})
    .data(adult_aggregate_data)
    .encode(
      vl.x().fieldN('year').axis({"labelAngle": 0}),
      vl.y().fieldQ('count').title('Number Count'),
      vl.color().fieldN('year').scale({range: ["#F6573F", "#F6573F"]})
    )
    .width(200)
    .height(400)
  
  const youthChart = vl.markBar()
    .title(["Number of Youth With At Least One Severe", "Major Depressive Episode (MDE), 2019 and 2020"])
    .data(youth_aggregate_data)
    .encode(
        vl.x().fieldN('year').axis({"labelAngle": 0}),
        vl.y().fieldQ('count').title('Number Count'),
        vl.color().fieldN('year').scale({range: ["#F6573F", "#F6573F"]})
    )
    .width(200)
    .height(400)
  
   vl.hconcat(youthChart, adultChart)
     .render()
     .then(viewElement => {
    document.getElementById('aggegrate-comparasion').appendChild(viewElement);
  }); 
  
}