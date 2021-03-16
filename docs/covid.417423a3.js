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
})({"op3u":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/us-states.e810cdf0.csv";
},{}],"ZQ0s":[function(require,module,exports) {
"use strict";

var _usStates = _interopRequireDefault(require("../../static/us-states.csv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import dataset
"use strict"; // the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables


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
var url = "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv";
var dataArray = [];
var stateArray = [];
d3.csv(url).then(function (data) {
  data.forEach(function (d) {
    var parseDate = d3.utcParse("%Y-%m-%d");
    var date = parseDate(d.date);
    var state = d.state;
    var cases = +d.cases;
    var deaths = +d.deaths;
    dataArray.push({
      date: date,
      state: state,
      cases: cases,
      deaths: deaths
    });

    if (!stateArray.includes(state)) {
      stateArray.push(state);
    }

    stateArray = stateArray.sort();
  });
  drawLineVegaLite();
});

function drawLineVegaLite() {
  var layer1 = plot('cases').width(800).height(300).title("Cumulative COVID-19 Case Counts");
  var layer2 = plot('deaths').width(800).height(150).title("Cumulative COVID-19 Death Counts");
  return vl.vconcat(layer1, layer2).spacing(5).render().then(function (viewElement) {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('covid-data').appendChild(viewElement);
  });
}
/*
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
  var selection = vl.selectSingle('Select').fields('state') //.init({'state': stateArray[0]})
  .init({
    'state': 'Washington'
  }).bind(vl.menu(stateArray).name('State: '));
  var hover = vl.selectSingle().fields('date').on('mouseover') // select on mouseover
  .clear('mouseout').nearest(true) // select nearest point to mouse cursor
  .empty("none");
  var label = {
    align: 'left',
    dx: 5,
    dy: -5
  };
  var white = {
    stroke: 'white',
    strokeWidth: 2
  };
  var cases = vl.markLine({
    color: '#F6573F'
  }).select(selection).transform(vl.filter(selection)).encode(vl.y({
    title: 'Cases'
  }).fieldQ('cases')).width(800).height(300).title("Cumulative COVID-19 Case Counts");
  var casetip = vl.markRule({
    color: "#aaa"
  }).select(hover).transform(vl.filter(selection)).encode(vl.opacity().if(hover, vl.value(1)).value(0), vl.tooltip([vl.fieldT('date')]));
  var casepoints = vl.markCircle({
    size: 30
  }).transform(vl.filter(selection)).encode(vl.y({
    title: 'Cases'
  }).fieldQ('cases'), vl.opacity().if(hover, vl.value(1)).value(0));
  var case_text = vl.markText(label).transform(vl.filter(selection)).encode(vl.y({
    title: 'Death'
  }).fieldQ('cases'), vl.opacity().if(hover, vl.value(1)).value(0), vl.text().fieldQ('cases'));
  var layer1 = vl.layer(cases, casetip, casepoints, case_text).data(dataArray).encode(vl.x({
    title: 'Date'
  }).fieldT('date'));
  var death = vl.markLine({
    color: '#F6573F'
  }).select(selection).transform(vl.filter(selection)).encode(vl.y({
    title: 'Deaths'
  }).fieldQ('deaths')).width(800).height(150).title("Cumulative COVID-19 Death Counts");
  var deathTip = vl.markRule({
    color: "#aaa"
  }).select(hover).transform(vl.filter(selection)).encode(vl.opacity().if(hover, vl.value(1)).value(0), vl.tooltip([vl.fieldT('date')]));
  var death_points = vl.markCircle({
    size: 30
  }).transform(vl.filter(selection)).encode(vl.y({
    title: 'Death'
  }).fieldQ('deaths'), vl.opacity().if(hover, vl.value(1)).value(0));
  var death_text = vl.markText(label).transform(vl.filter(selection)).encode(vl.y({
    title: 'Death'
  }).fieldQ('deaths'), vl.opacity().if(hover, vl.value(1)).value(0), vl.text().fieldQ('deaths'));
  var layer2 = vl.layer(death, deathTip, death_points, death_text).data(dataArray).encode(vl.x({
    title: 'Date'
  }).fieldT('date'));
  return vl.vconcat(layer1, layer2).spacing(5).render().then(function (viewElement) {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('covid-data').appendChild(viewElement);
  });
}
},{"../../static/us-states.csv":"op3u"}]},{},["ZQ0s"], null)
//# sourceMappingURL=https://cse412-21w.github.io/mental-health-during-covid19/covid.417423a3.js.map