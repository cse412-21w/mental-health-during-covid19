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
})({"../static/merge.csv":[function(require,module,exports) {
module.exports = "/merge.0213c944.csv";
},{}],"../static/merge_race.csv":[function(require,module,exports) {
module.exports = "/merge_race.17461f0e.csv";
},{}],"../static/merge_gender.csv":[function(require,module,exports) {
module.exports = "/merge_gender.bd85bb0c.csv";
},{}],"javasript/indicators-race.js":[function(require,module,exports) {
"use strict";

var _merge = _interopRequireDefault(require("../../static/merge.csv"));

var _merge_race = _interopRequireDefault(require("../../static/merge_race.csv"));

var _merge_gender = _interopRequireDefault(require("../../static/merge_gender.csv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import newcases from '../static/newcases_period.csv';

/* var vl = require('vega-lite-api');
var vegaLite = require('vega-lite');
var vega = require('vega');
var vegaTooltip = require('vega-tooltip'); */
"use strict"; // the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables


var races = ['Hispanic or Latino', 'Non-Hispanic white, single race', 'Non-Hispanic black, single race', 'Non-Hispanic Asian, single race', 'Non-Hispanic, other races and multiple races']; // used to store data later

var indicators = ['Symptoms of Depressive Disorder', 'Symptoms of Anxiety Disorder', 'Symptoms of Anxiety Disorder or Depressive Disorder'];
var time_periods = ['Apr 23 - May 5', 'May 7 - May 12', 'May 14 - May 19', 'May 21 - May 26', 'May 28 - June 2', 'June 4 - June 9', 'June 11 - June 16', 'June 18 - June 23', 'June 25 - June 30', 'July 2 - July 7', 'July 9 - July 14', 'July 16 - July 21', 'Aug 19 - Aug 31', 'Sep 2 - Sep 14', 'Sep 16 - Sep 28', 'Sep 30 - Oct 12', 'Oct 14 - Oct 26', 'Oct 28 - Nov 9', 'Nov 11 - Nov 23', 'Nov 25 - Dec 7', 'Dec 9 - Dec 21', 'Jan 6 - Jan 18', 'Jan 20 - Feb 1'];
var symptomtypes = ['Anxiety', 'Depressive', 'Anxiety or Depressive'];
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
  var selection2 = vl.selectSingle('Select').fields('SymptomType').init({
    SymptomType: 'Anxiety'
  }).bind({
    SymptomType: vl.menu(symptomtypes).name('Symptom Type: ')
  });
  return vl.markCircle().data(_merge_gender.default).title('Symptoms of Depression and Anxiety by Sex, April 2020 - February 2021').select(selection2).encode(vl.x({
    title: 'Time Period'
  }).fieldO('TimePeriodLabel').sort(time_periods).axis({
    grid: true,
    tickBand: 'extent'
  }), vl.y({
    title: '% of the US Adult Population'
  }).fieldQ('Value'), vl.color({
    title: 'Sex'
  }).fieldN('Subgroup'), vl.tooltip('Value'), vl.opacity().if(selection2, vl.value(1)).value(0)).width(450).height(400).render().then(function (viewElement) {
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
  var selection = vl.selectSingle('Select').fields('SymptomType').init({
    SymptomType: 'Anxiety'
  }).bind({
    SymptomType: vl.menu(symptomtypes).name('Symptom Type: ')
  });
  vl.markCircle().data(_merge_race.default).title(['% of US Adults with Symptoms of Anxiety and', 'Depressive Disorder by Race, April 2020 - February 2021']).select(selection).encode(vl.x({
    title: 'Time Period'
  }).fieldO('TimePeriodLabel').sort(time_periods).axis({
    grid: true,
    tickBand: 'extent'
  }), vl.y({
    title: '% of the US Adult Population'
  }).fieldQ('Value'), vl.tooltip().fieldQ('Value'), vl.color({
    title: 'Race/Ethnicity'
  }).fieldN('Subgroup2'), vl.opacity().if(selection, vl.value(1)).value(0)).width(450).height(400).render().then(function (viewElement) {
    document.getElementById('ind-race').appendChild(viewElement);
  });
} // COVID cases and Anxiety/Depression 


function drawCasesSymptomsVegaLite() {
  var brush = vl.selectInterval().encodings('x');
  var cases = vl.markArea({
    color: '#F6573F'
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
},{"../../static/merge.csv":"../static/merge.csv","../../static/merge_race.csv":"../static/merge_race.csv","../../static/merge_gender.csv":"../static/merge_gender.csv"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61662" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javasript/indicators-race.js"], null)
//# sourceMappingURL=/indicators-race.56c31968.js.map