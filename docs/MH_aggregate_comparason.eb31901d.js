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
})({"kWp5":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/adult_mh_prevalance_aggregate.46b87ee5.csv";
},{}],"TLC3":[function(require,module,exports) {
module.exports = "https://cse412-21w.github.io/mental-health-during-covid19/youth_prevalance_of_mde_aggregate.967315c3.csv";
},{}],"YyRC":[function(require,module,exports) {
"use strict"; // the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables

var _adult_mh_prevalance_aggregate = _interopRequireDefault(require("../../static/adult_mh_prevalance_aggregate.csv"));

var _youth_prevalance_of_mde_aggregate = _interopRequireDefault(require("../../static/youth_prevalance_of_mde_aggregate.csv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
drawYouthAdultComparasionVegaLite();

function drawYouthAdultComparasionVegaLite() {
  var label = {
    align: 'center',
    dx: 5,
    dy: +10
  };
  var adultChart = vl.markBar({
    color: '#F6573F'
  }).title({
    "text": "Number of Adults With Any Mental Illness, 2019 and 2020"
  }).data(_adult_mh_prevalance_aggregate.default).encode(vl.x({
    title: 'Year'
  }).fieldN('year').axis({
    "labelAngle": 0
  }), vl.y().fieldQ('count').title('Number of Adults')).width(200).height(400);
  var adultText = vl.markText(label).data(_adult_mh_prevalance_aggregate.default).encode(vl.x({
    title: 'Year'
  }).fieldN('year').axis({
    "labelAngle": 0
  }), vl.y().fieldQ('count').title('Number of Adults'), vl.text().fieldQ('count'));
  var youthChart = vl.markBar({
    color: '#F6573F'
  }).title(["Number of Youth With At Least One Severe", "Major Depressive Episode (MDE), 2019 and 2020"]).data(_youth_prevalance_of_mde_aggregate.default).encode(vl.x({
    title: 'Year'
  }).fieldN('year').axis({
    "labelAngle": 0
  }), vl.y().fieldQ('count').title('Number of Youth')).width(200).height(400);
  var youthText = vl.markText(label).data(_youth_prevalance_of_mde_aggregate.default).encode(vl.x({
    title: 'Year'
  }).fieldN('year').axis({
    "labelAngle": 0
  }), vl.y().fieldQ('count').title('Number of Adults'), vl.text().fieldQ('count'));
  vl.hconcat(vl.layer(adultChart, adultText), vl.layer(youthChart, youthText)).render().then(function (viewElement) {
    document.getElementById('aggegrate-comparasion').appendChild(viewElement);
  });
}
},{"../../static/adult_mh_prevalance_aggregate.csv":"kWp5","../../static/youth_prevalance_of_mde_aggregate.csv":"TLC3"}]},{},["YyRC"], null)
//# sourceMappingURL=https://cse412-21w.github.io/mental-health-during-covid19/MH_aggregate_comparason.eb31901d.js.map