// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"XW3e":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/anxiety_gender.2ad534da.csv";
},{}],"lEnl":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/all_race.56d05b74.csv";
},{}],"L1Tp":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/merge.1bb3225e.csv";
},{}],"R8y1":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/all_gender.d23d63f8.csv";
},{}],"lQjA":[function(require,module,exports) {
"use strict";

var _anxiety_gender = _interopRequireDefault(require("../static/anxiety_gender.csv"));

var _all_race = _interopRequireDefault(require("../static/all_race.csv"));

var _merge = _interopRequireDefault(require("../static/merge.csv"));

var _all_gender = _interopRequireDefault(require("../static/all_gender.csv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import dataset
//import newcases from '../static/newcases_period.csv';
"use strict"; // the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables


var races = races = ['Hispanic or Latino', 'Non-Hispanic white, single race', 'Non-Hispanic black, single race', 'Non-Hispanic Asian, single race', 'Non-Hispanic, other races and multiple races']; // used to store data later

var indicators = ['Symptoms of Depressive Disorder', 'Symptoms of Anxiety Disorder', 'Symptoms of Anxiety Disorder or Depressive Disorder'];
var time_periods = ['Apr 23 - May 5', 'May 7 - May 12', 'May 14 - May 19', 'May 21 - May 26', 'May 28 - June 2', 'June 4 - June 9', 'June 11 - June 16', 'June 18 - June 23', 'June 25 - June 30', 'July 2 - July 7', 'July 9 - July 14', 'July 16 - July 21', 'Aug 19 - Aug 31', 'Sep 2 - Sep 14', 'Sep 16 - Sep 28', 'Sep 30 - Oct 12', 'Oct 14 - Oct 26', 'Oct 28 - Nov 9', 'Nov 11 - Nov 23', 'Nov 25 - Dec 7', 'Dec 9 - Dec 21', 'Jan 6 - Jan 18', 'Jan 20 - Feb 1'];
var options = {
  config: {// Vega-Lite default configuration
  },
  init: function init(view) {
    // initialize tooltip handler
    view.tooltip(new vegaTooltip.Handler().call);
  },
  view: {
    // view constructor options
    // remove the loader if you don't want to default to vega-datasets!
    //   loader: vega.loader({
    //     baseURL: "",
    //   }),
    renderer: "canvas"
  }
};
vl.register(vega, vegaLite, options);
drawIndicatorsGenderVegaLite();
drawIndicatorsRaceVegaLite();
drawCasesSymptomsVegaLite();
/*anxiety_race = cdchealth
.filter(d => op.includes(d.Group, 'By Race/Hispanic Ethnicity'))
.filter(d => op.equal(d.Indicator, 'Symptoms of Anxiety Disorder'))
.filter(d => !op.includes(d.TimePeriodLabel, 'July 22 - Aug 18'))
.filter(d => !op.includes(d.TimePeriodLabel, 'Dec 22 - Jan 5')) */

function drawAnxietyGenderVegaLite() {
  // var sunshine = add_data(vl, sunshine.csv, format_type = NULL);
  // your visualization goes here 
  vl.markLine().data(_anxiety_gender.default).encode(vl.x().fieldO('TimePeriodLabel').sort(time_periods), vl.y().fieldQ('Value'), vl.color().fieldN('Subgroup'), vl.tooltip('Value')).width(450).height(450).render().then(function (viewElement) {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('anxiety').appendChild(viewElement);
  });
  /*vl.markBar()
  .data(anxiety_gender)
  .encode(
    vl.column().fieldN('TimePeriodLabel').sort(time_periods).spacing(10),
    vl.y().fieldQ('Value'),
    vl.x().fieldN('Subgroup'),
    vl.color().fieldN('Subgroup'),
    vl.tooltip('Value')
  )
  .width(50)
  .height(450)
  .render()
  .then(viewElement => {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('anxiety').appendChild(viewElement);
  }); */
}

function drawIndicatorsGenderVegaLite() {
  // var sunshine = add_data(vl, sunshine.csv, format_type = NULL);
  // your visualization goes here 
  var selection2 = vl.selectSingle('Select').fields('Indicator').init({
    Indicator: 'Symptoms of Anxiety Disorder'
  }).bind({
    Indicator: vl.menu(indicators)
  });
  return vl.markCircle().data(_all_gender.default).title('Symptoms of Depression and Anxiety by Gender, April 2020 - February 2021').select(selection2).encode(vl.x({
    title: 'Time Period'
  }).fieldO('TimePeriodLabel').sort(time_periods), vl.y({
    title: '% of the US Adult Population'
  }).fieldQ('Value'), vl.color({
    title: 'Gender'
  }).fieldN('Subgroup'), vl.tooltip('Value'), vl.opacity().if(selection2, vl.value(1)).value(0)).width(450).height(450).render().then(function (viewElement) {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('ind-gender').appendChild(viewElement);
  });
}

function drawIndicatorsRaceVegaLite() {
  var selection = vl.selectSingle('Select').fields('Indicator', 'Subgroup').init({
    Indicator: 'Symptoms of Anxiety Disorder',
    Subgroup: 'Non-Hispanic black, single race'
  }).bind({
    Indicator: vl.menu(indicators),
    Subgroup: vl.menu(races)
  });
  vl.markCircle().data(_all_race.default).title('Symptoms of Anxiety and Depressive Disorder, April 2020 - February 2021').select(selection).encode(vl.x({
    title: 'Time Period'
  }).fieldO('TimePeriodLabel').sort(time_periods), vl.y({
    title: 'Percentage of population'
  }).fieldQ('Value'), vl.tooltip().fieldQ('Value'), vl.color({
    title: 'Race/Ethnicity'
  }).fieldN('Subgroup'), vl.opacity().if(selection, vl.value(1)).value(0)).width(450).height(450).render().then(function (viewElement) {
    document.getElementById('ind-race').appendChild(viewElement);
  });
} // COVID cases and Anxiety/Depression 


function drawCasesSymptomsVegaLite() {
  var brush = vl.selectInterval().encodings('x');
  var cases = vl.markArea({
    color: 'teal'
  }).data(_merge.default).select(brush).encode(vl.x({
    title: 'Date'
  }).fieldT('date').sort('ascending'), vl.y({
    title: 'New COVID-19 Cases'
  }).fieldQ('newcases')).width(500).height(240);
  var mh = vl.markCircle().data(_merge.default).encode(vl.x({
    title: 'Time Period'
  }).fieldO('TimePeriodLabel').sort(time_periods), vl.y({
    title: 'Percentage of population'
  }).fieldQ('Value'), vl.color().fieldN('SymptomType').legend({
    orient: 'bottom',
    title: 'Symptom Type'
  }), vl.tooltip().fieldQ('Value'), vl.opacity().if(brush, vl.value(1)).value(0.005)).width(500).height(240);
  return vl.vconcat(cases, mh).spacing(5).title('New COVID-19 Cases and Symptoms of Anxiety and Depressive Disorder, Apr 2020 - Feb 2021') //.width(450)
  //.height(450)
  .render().then(function (viewElement) {
    document.getElementById('cases-mh').appendChild(viewElement);
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
},{"../static/anxiety_gender.csv":"XW3e","../static/all_race.csv":"lEnl","../static/merge.csv":"L1Tp","../static/all_gender.csv":"R8y1"}]},{},["lQjA"], null)
//# sourceMappingURL=https://cse412-21w.github.io/mental-health-during-covid19/indicators-race.c0af6f83.js.map