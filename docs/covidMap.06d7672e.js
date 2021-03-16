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
})({"../static/adult_prevalance_2019.csv":[function(require,module,exports) {
module.exports = "/adult_prevalance_2019.d18d8701.csv";
},{}],"../static/adult_mh_prevalance_2020 (2).csv":[function(require,module,exports) {
module.exports = "/adult_mh_prevalance_2020 (2).fb0baaf8.csv";
},{}],"../static/us.json":[function(require,module,exports) {
module.exports = {
  "type": "Topology",
  "objects": {
    "counties": {
      "type": "GeometryCollection",
      "bbox": [-179.1473399999999, 17.67439566600018, 179.7784800000003, 71.38921046500008],
      "geometries": [{
        "type": "MultiPolygon",
        "id": 53073,
        "arcs": [[[0, 1, 2]]]
      }, {
        "type": "Polygon",
        "id": 30105,
        "arcs": [[3, 4, 5, 6, 7, 8]]
      }, {
        "type": "Polygon",
        "id": 30029,
        "arcs": [[9, 10, 11, 12, 13, 14, 15, 16, 17, 18]]
      }, {
        "type": "Polygon",
        "id": 16021,
        "arcs": [[19, 20, 21, 22]]
      }, {
        "type": "Polygon",
        "id": 30071,
        "arcs": [[-8, 23, 24, 25, 26, 27]]
      }, {
        "type": "Polygon",
        "id": 38079,
        "arcs": [[28, 29, 30, 31]]
      }, {
        "type": "Polygon",
        "id": 30053,
        "arcs": [[-18, 32, 33, -20, 34]]
      }, {
        "type": "Polygon",
        "id": 38009,
        "arcs": [[-30, 35, 36, 37, 38]]
      }, {
        "type": "Polygon",
        "id": 30035,
        "arcs": [[39, 40, -10, 41]]
      }, {
        "type": "Polygon",
        "id": 30041,
        "arcs": [[42, 43, 44, 45]]
      }, {
        "type": "Polygon",
        "id": 30005,
        "arcs": [[-27, 46, 47, -46, 48]]
      }, {
        "type": "Polygon",
        "id": 30019,
        "arcs": [[49, 50, -4, 51]]
      }, {
        "type": "Polygon",
        "id": 38067,
        "arcs": [[52, 53, 54, 55]]
      }, {
        "type": "Polygon",
        "id": 27069,
        "arcs": [[56, 57, -53, 58]]
      }, {
        "type": "Polygon",
        "id": 38095,
        "arcs": [[59, 60, 61, -32, 62, 63]]
      }, {
        "type": "Polygon",
        "id": 38019,
        "arcs": [[-55, 64, 65, -64, 66]]
      }, {
        "type": "Polygon",
        "id": 53047,
        "arcs": [[67, 68, 69, 70, 71, 72, -1, 73]]
      }, {
        "type": "Polygon",
        "id": 53065,
        "arcs": [[74, 75, 76, 77, 78]]
      }, {
        "type": "Polygon",
        "id": 53051,
        "arcs": [[-22, 79, 80, -75, 81]]
      }, {
        "type": "Polygon",
        "id": 53019,
        "arcs": [[-78, 82, -68, 83]]
      }, {
        "type": "Polygon",
        "id": 30051,
        "arcs": [[84, 85, 86, -44, 87]]
      }, {
        "type": "Polygon",
        "id": 38023,
        "arcs": [[88, 89, 90, 91]]
      }, {
        "type": "Polygon",
        "id": 38013,
        "arcs": [[92, 93, 94, 95, -89, 96]]
      }, {
        "type": "Polygon",
        "id": 30101,
        "arcs": [[97, -86, 98, -40]]
      }, {
        "type": "Polygon",
        "id": 38075,
        "arcs": [[99, 100, -93, 101, -38]]
      }, {
        "type": "Polygon",
        "id": 27135,
        "arcs": [[102, 103, -57, 104, 105]]
      }, {
        "type": "Polygon",
        "id": 30091,
        "arcs": [[-91, 106, 107, -50, 108]]
      }, {
        "type": "Polygon",
        "id": 16017,
        "arcs": [[-34, 109, 110, 111, 112, -80, -21]]
      }, {
        "type": "Polygon",
        "id": 38101,
        "arcs": [[-101, 113, 114, 115, -94]]
      }, {
        "type": "MultiPolygon",
        "id": 53055,
        "arcs": [[[116]], [[117]], [[118]]]
      }, {
        "type": "Polygon",
        "id": 27071,
        "arcs": [[119, 120, 121, 122, 123]]
      }, {
        "type": "MultiPolygon",
        "id": 53057,
        "arcs": [[[124, -2, -73, 125, 126, 127]]]
      }, {
        "type": "Polygon",
        "id": 38105,
        "arcs": [[-96, 128, 129, 130, -107, -90]]
      }, {
        "type": "Polygon",
        "id": 38049,
        "arcs": [[131, 132, 133, -114, -100, -37]]
      }, {
        "type": "Polygon",
        "id": 27137,
        "arcs": [[134, 135, 136, 137, 138, 139, -120, 140]]
      }, {
        "type": "Polygon",
        "id": 30085,
        "arcs": [[-108, -131, 141, 142, -5, -51]]
      }, {
        "type": "Polygon",
        "id": 53007,
        "arcs": [[-72, 143, 144, 145, 146, -126]]
      }, {
        "type": "Polygon",
        "id": 38061,
        "arcs": [[147, 148, 149, -129, -95, -116]]
      }, {
        "type": "Polygon",
        "id": 27089,
        "arcs": [[150, 151, 152, 153, 154, -58, -104]]
      }, {
        "type": "Polygon",
        "id": 38069,
        "arcs": [[-62, 155, 156, 157, -132, -36, -29]]
      }, {
        "type": "MultiPolygon",
        "id": 38071,
        "arcs": [[[158]], [[159, 160, 161, -60, -66]]]
      }, {
        "type": "Polygon",
        "id": 38099,
        "arcs": [[-54, -155, 162, 163, -160, -65]]
      }, {
        "type": "Polygon",
        "id": 27007,
        "arcs": [[-122, 164, 165, 166, 167, 168, -151, -103, 169]]
      }, {
        "type": "Polygon",
        "id": 30073,
        "arcs": [[-99, -85, 170, 171, -11, -41]]
      }, {
        "type": "MultiPolygon",
        "id": 53029,
        "arcs": [[[172, 173]], [[174]]]
      }, {
        "type": "MultiPolygon",
        "id": 53009,
        "arcs": [[[175, 176]]]
      }, {
        "type": "Polygon",
        "id": 38005,
        "arcs": [[-61, -162, 177, 178, 179, -156], [-159]]
      }, {
        "type": "Polygon",
        "id": 30015,
        "arcs": [[-48, 180, 181, 182, 183, -171, -88, -43]]
      }, {
        "type": "MultiPolygon",
        "id": 53061,
        "arcs": [[[-147, 184, 185, -173, 186, -127]]]
      }, {
        "type": "Polygon",
        "id": 30089,
        "arcs": [[-17, 187, 188, 189, 190, -110, -33]]
      }, {
        "type": "Polygon",
        "id": 27075,
        "arcs": [[191, 192, -135, 193]]
      }, {
        "type": "Polygon",
        "id": 38063,
        "arcs": [[194, 195, 196, 197, -178, -161, -164]]
      }, {
        "type": "Polygon",
        "id": 38035,
        "arcs": [[-154, 198, 199, 200, -195, -163]]
      }, {
        "type": "Polygon",
        "id": 27119,
        "arcs": [[201, 202, 203, 204, 205, 206, 207, -199, -153]]
      }, {
        "type": "Polygon",
        "id": 27113,
        "arcs": [[-169, 208, -204, 209, -202, -152]]
      }, {
        "type": "Polygon",
        "id": 30083,
        "arcs": [[210, 211, 212, 213, -142]]
      }, {
        "type": "Polygon",
        "id": 53017,
        "arcs": [[214, 215, -144, -71]]
      }, {
        "type": "Polygon",
        "id": 38053,
        "arcs": [[-150, 216, 217, 218, 219, -211, -130]]
      }, {
        "type": "MultiPolygon",
        "id": 53031,
        "arcs": [[[220, 221, 222, -176, 223]]]
      }, {
        "type": "Polygon",
        "id": 30099,
        "arcs": [[-184, 224, 225, -12, -172]]
      }, {
        "type": "Polygon",
        "id": 30055,
        "arcs": [[-214, 226, 227, 228, -6, -143]]
      }, {
        "type": "Polygon",
        "id": 16079,
        "arcs": [[-191, 229, 230, 231, 232, 233, -111]]
      }, {
        "type": "Polygon",
        "id": 30047,
        "arcs": [[234, -188, -16]]
      }, {
        "type": "Polygon",
        "id": 53063,
        "arcs": [[-81, -113, 235, 236, 237, 238, -76]]
      }, {
        "type": "Polygon",
        "id": 27029,
        "arcs": [[239, 240, 241, -205, -209, -168]]
      }, {
        "type": "Polygon",
        "id": 16055,
        "arcs": [[-234, 242, -236, -112]]
      }, {
        "type": "Polygon",
        "id": 30033,
        "arcs": [[-229, 243, 244, 245, 246, -24, -7]]
      }, {
        "type": "Polygon",
        "id": 27125,
        "arcs": [[-203, -210]]
      }, {
        "type": "Polygon",
        "id": 53025,
        "arcs": [[-70, 247, 248, 249, 250, 251, 252, -215]]
      }, {
        "type": "Polygon",
        "id": 53043,
        "arcs": [[-83, -77, -239, 253, 254, -248, -69]]
      }, {
        "type": "Polygon",
        "id": 30049,
        "arcs": [[255, 256, 257, 258, 259, -13, -226]]
      }, {
        "type": "MultiPolygon",
        "id": 53035,
        "arcs": [[[260]], [[261, 262, 263, 264, 265]]]
      }, {
        "type": "Polygon",
        "id": 27061,
        "arcs": [[-140, 266, 267, -165, -121]]
      }, {
        "type": "Polygon",
        "id": 38055,
        "arcs": [[268, 269, 270, 271, 272, -148, -115, -134]]
      }, {
        "type": "Polygon",
        "id": 38027,
        "arcs": [[-198, 273, 274, 275, -179]]
      }, {
        "type": "Polygon",
        "id": 38103,
        "arcs": [[-180, -276, 276, 277, 278, 279, -157]]
      }, {
        "type": "Polygon",
        "id": 38083,
        "arcs": [[-158, -280, 280, 281, -269, -133]]
      }, {
        "type": "Polygon",
        "id": 38025,
        "arcs": [[-273, 282, 283, 284, -217, -149]]
      }, {
        "type": "Polygon",
        "id": 30027,
        "arcs": [[-26, 285, 286, 287, 288, 289, -181, -47]]
      }, {
        "type": "Polygon",
        "id": 30021,
        "arcs": [[-213, 290, 291, -227]]
      }, {
        "type": "MultiPolygon",
        "id": 53033,
        "arcs": [[[292]], [[-146, 293, 294, 295, -185]]]
      }, {
        "type": "Polygon",
        "id": 30013,
        "arcs": [[296, 297, -256, -225, -183]]
      }, {
        "type": "Polygon",
        "id": 38091,
        "arcs": [[-201, 298, 299, 300, 301, -196]]
      }, {
        "type": "Polygon",
        "id": 38039,
        "arcs": [[-302, 302, 303, 304, -274, -197]]
      }, {
        "type": "Polygon",
        "id": 38097,
        "arcs": [[305, 306, -299, -200, -208]]
      }, {
        "type": "MultiPolygon",
        "id": 53045,
        "arcs": [[[307, -265, 308, 309, 310, 311, -221]]]
      }, {
        "type": "Polygon",
        "id": 30063,
        "arcs": [[-15, 312, 313, 314, 315, 316, 317, -189, -235]]
      }, {
        "type": "Polygon",
        "id": 30077,
        "arcs": [[-260, 318, 319, 320, -313, -14]]
      }, {
        "type": "Polygon",
        "id": 30069,
        "arcs": [[-247, 321, 322, -286, -25]]
      }, {
        "type": "Polygon",
        "id": 53037,
        "arcs": [[-216, -253, 323, -294, -145]]
      }, {
        "type": "Polygon",
        "id": 38031,
        "arcs": [[-305, 324, -277, -275]]
      }, {
        "type": "Polygon",
        "id": 38057,
        "arcs": [[325, 326, 327, -283, -272]]
      }, {
        "type": "MultiPolygon",
        "id": 53027,
        "arcs": [[[-312, 328, 329, 330, 331, -222]]]
      }, {
        "type": "Polygon",
        "id": 27087,
        "arcs": [[332, 333, -206, -242]]
      }, {
        "type": "Polygon",
        "id": 27107,
        "arcs": [[-207, -334, 334, 335, 336, -306]]
      }, {
        "type": "Polygon",
        "id": 30061,
        "arcs": [[-318, 337, -230, -190]]
      }, {
        "type": "Polygon",
        "id": 27021,
        "arcs": [[338, 339, 340, 341, 342, 343, -166, -268]]
      }, {
        "type": "Polygon",
        "id": 23003,
        "arcs": [[344, 345, 346, 347, 348]]
      }, {
        "type": "Polygon",
        "id": 30045,
        "arcs": [[-290, 349, 350, -297, -182]]
      }, {
        "type": "Polygon",
        "id": 16009,
        "arcs": [[-233, 351, 352, -237, -243]]
      }, {
        "type": "Polygon",
        "id": 27057,
        "arcs": [[-344, 353, 354, -240, -167]]
      }, {
        "type": "MultiPolygon",
        "id": 53053,
        "arcs": [[[-295, 355, 356, 357, 358]], [[-262, 359]], [[-309, -264, 360]]]
      }, {
        "type": "Polygon",
        "id": 30109,
        "arcs": [[-220, 361, 362, 363, -291, -212]]
      }, {
        "type": "Polygon",
        "id": 38007,
        "arcs": [[-285, 364, 365, 366, -218]]
      }, {
        "type": "Polygon",
        "id": 38033,
        "arcs": [[-367, 367, 368, -362, -219]]
      }, {
        "type": "Polygon",
        "id": 38043,
        "arcs": [[369, 370, 371, 372, -281, -279]]
      }, {
        "type": "Polygon",
        "id": 38093,
        "arcs": [[-304, 373, 374, 375, -370, -278, -325]]
      }, {
        "type": "Polygon",
        "id": 38015,
        "arcs": [[-373, 376, 377, 378, -270, -282]]
      }, {
        "type": "Polygon",
        "id": 38065,
        "arcs": [[-379, 379, -326, -271]]
      }, {
        "type": "Polygon",
        "id": 53001,
        "arcs": [[380, 381, -249, -255]]
      }, {
        "type": "Polygon",
        "id": 53075,
        "arcs": [[-238, -353, 382, 383, 384, 385, 386, 387, -381, -254]]
      }, {
        "type": "Polygon",
        "id": 38003,
        "arcs": [[-301, 388, 389, 390, -374, -303]]
      }, {
        "type": "Polygon",
        "id": 38017,
        "arcs": [[-307, -337, 391, 392, 393, -389, -300]]
      }, {
        "type": "Polygon",
        "id": 53067,
        "arcs": [[-358, 394, -329, -311, 395]]
      }, {
        "type": "Polygon",
        "id": 30079,
        "arcs": [[-364, 396, 397, -244, -228, -292]]
      }, {
        "type": "Polygon",
        "id": 27005,
        "arcs": [[-355, 398, 399, 400, -335, -333, -241]]
      }, {
        "type": "Polygon",
        "id": 27027,
        "arcs": [[-401, 401, 402, 403, -392, -336]]
      }, {
        "type": "Polygon",
        "id": 16057,
        "arcs": [[-232, 404, 405, -383, -352]]
      }, {
        "type": "Polygon",
        "id": 53077,
        "arcs": [[-252, 406, 407, 408, 409, -356, -324]]
      }, {
        "type": "Polygon",
        "id": 30059,
        "arcs": [[-351, 410, 411, 412, 413, 414, -257, -298]]
      }, {
        "type": "Polygon",
        "id": 27001,
        "arcs": [[-139, 415, 416, 417, 418, 419, -339, -267]]
      }, {
        "type": "Polygon",
        "id": 26131,
        "arcs": [[420, 421, 422, 423]]
      }, {
        "type": "Polygon",
        "id": 38089,
        "arcs": [[-328, 424, 425, 426, 427, -365, -284]]
      }, {
        "type": "Polygon",
        "id": 38059,
        "arcs": [[-378, 428, 429, 430, -425, -327, -380]]
      }, {
        "type": "Polygon",
        "id": 26013,
        "arcs": [[431, 432, 433, 434]]
      }, {
        "type": "Polygon",
        "id": 16035,
        "arcs": [[-338, -317, 435, 436, 437, -405, -231]]
      }, {
        "type": "Polygon",
        "id": 30017,
        "arcs": [[438, 439, 440, 441, -245, -398]]
      }, {
        "type": "Polygon",
        "id": 30087,
        "arcs": [[-442, 442, 443, 444, 445, 446, -322, -246]]
      }, {
        "type": "Polygon",
        "id": 30039,
        "arcs": [[447, 448, -314, -321]]
      }, {
        "type": "Polygon",
        "id": 27159,
        "arcs": [[-343, 449, 450, -399, -354]]
      }, {
        "type": "Polygon",
        "id": 27035,
        "arcs": [[-420, 451, 452, -340]]
      }, {
        "type": "MultiPolygon",
        "id": 53049,
        "arcs": [[[453, 454, 455, -331]]]
      }, {
        "type": "Polygon",
        "id": 53041,
        "arcs": [[-395, -357, -410, 456, 457, 458, -454, -330]]
      }, {
        "type": "Polygon",
        "id": 30007,
        "arcs": [[-415, 459, 460, -258]]
      }, {
        "type": "Polygon",
        "id": 27017,
        "arcs": [[461, 462, -416, -138]]
      }, {
        "type": "Polygon",
        "id": 26053,
        "arcs": [[463, 464, 465, 466, -422]]
      }, {
        "type": "Polygon",
        "id": 30065,
        "arcs": [[-447, 467, 468, -287, -323]]
      }, {
        "type": "Polygon",
        "id": 26095,
        "arcs": [[469, 470, 471, 472, 473]]
      }, {
        "type": "Polygon",
        "id": 30037,
        "arcs": [[-469, 474, 475, 476, 477, -288]]
      }, {
        "type": "Polygon",
        "id": 30107,
        "arcs": [[-289, -478, 478, -411, -350]]
      }, {
        "type": "Polygon",
        "id": 53021,
        "arcs": [[479, 480, 481, -250, -382, -388]]
      }, {
        "type": "Polygon",
        "id": 53005,
        "arcs": [[482, 483, 484, 485, -407, -251, -482]]
      }, {
        "type": "Polygon",
        "id": 27111,
        "arcs": [[-451, 486, 487, 488, 489, -402, -400]]
      }, {
        "type": "Polygon",
        "id": 38037,
        "arcs": [[490, 491, 492, -426, -431]]
      }, {
        "type": "Polygon",
        "id": 53023,
        "arcs": [[493, 494, 495, -386]]
      }, {
        "type": "Polygon",
        "id": 30025,
        "arcs": [[-369, 496, 497, 498, 499, -439, -397, -363]]
      }, {
        "type": "Polygon",
        "id": 16049,
        "arcs": [[500, 501, 502, 503, 504, 505, 506, -436, -316]]
      }, {
        "type": "Polygon",
        "id": 30081,
        "arcs": [[-449, 507, 508, 509, -501, -315]]
      }, {
        "type": "Polygon",
        "id": 38029,
        "arcs": [[-372, 510, 511, 512, 513, -429, -377]]
      }, {
        "type": "Polygon",
        "id": 38047,
        "arcs": [[-376, 514, 515, -511, -371]]
      }, {
        "type": "Polygon",
        "id": 16069,
        "arcs": [[-438, 516, -506, 517, 518, -384, -406]]
      }, {
        "type": "Polygon",
        "id": 38087,
        "arcs": [[519, 520, 521, -497, -368, -366, -428]]
      }, {
        "type": "Polygon",
        "id": 38045,
        "arcs": [[522, 523, 524, -515, -375, -391]]
      }, {
        "type": "Polygon",
        "id": 38041,
        "arcs": [[-493, 525, -520, -427]]
      }, {
        "type": "Polygon",
        "id": 27167,
        "arcs": [[-490, 526, 527, 528, -403]]
      }, {
        "type": "Polygon",
        "id": 38073,
        "arcs": [[-394, 529, 530, 531, -523, -390]]
      }, {
        "type": "Polygon",
        "id": 38077,
        "arcs": [[-529, 532, 533, 534, -530, -393, -404]]
      }, {
        "type": "Polygon",
        "id": 53013,
        "arcs": [[535, 536, 537, -480, -387, -496]]
      }, {
        "type": "Polygon",
        "id": 53071,
        "arcs": [[-538, 538, -483, -481]]
      }, {
        "type": "Polygon",
        "id": 55051,
        "arcs": [[-466, 539, 540, 541, 542]]
      }, {
        "type": "Polygon",
        "id": 23025,
        "arcs": [[543, 544, 545, 546, 547, 548, -348]]
      }, {
        "type": "Polygon",
        "id": 23021,
        "arcs": [[549, -544, -347]]
      }, {
        "type": "Polygon",
        "id": 30043,
        "arcs": [[-461, 550, 551, 552, 553, -319, -259]]
      }, {
        "type": "Polygon",
        "id": 26153,
        "arcs": [[-472, 554, 555, 556, 557]]
      }, {
        "type": "Polygon",
        "id": 30111,
        "arcs": [[558, 559, 560, 561, -475, -468, -446]]
      }, {
        "type": "Polygon",
        "id": 30103,
        "arcs": [[562, -559, -445]]
      }, {
        "type": "Polygon",
        "id": 16061,
        "arcs": [[-437, -507, -517]]
      }, {
        "type": "Polygon",
        "id": 53003,
        "arcs": [[-519, 563, -494, -385]]
      }, {
        "type": "Polygon",
        "id": 38085,
        "arcs": [[-514, 564, 565, -491, -430]]
      }, {
        "type": "Polygon",
        "id": 26071,
        "arcs": [[-433, 566, 567, 568, 569, 570, -464, -421, 571]]
      }, {
        "type": "Polygon",
        "id": 27115,
        "arcs": [[572, 573, 574, 575, -417, -463]]
      }, {
        "type": "Polygon",
        "id": 23019,
        "arcs": [[576, 577, 578, 579, -545, -550, -346]]
      }, {
        "type": "Polygon",
        "id": 53059,
        "arcs": [[-409, 580, 581, 582, 583, 584, -457]]
      }, {
        "type": "Polygon",
        "id": 53015,
        "arcs": [[-585, 585, 586, 587, 588, -458]]
      }, {
        "type": "MultiPolygon",
        "id": 53069,
        "arcs": [[[-459, -589, 589, -455]]]
      }, {
        "type": "Polygon",
        "id": 27153,
        "arcs": [[-342, 590, 591, 592, -487, -450]]
      }, {
        "type": "Polygon",
        "id": 27097,
        "arcs": [[-453, 593, 594, 595, -591, -341]]
      }, {
        "type": "Polygon",
        "id": 55125,
        "arcs": [[596, 597, -540, -465, -571, 598]]
      }, {
        "type": "MultiPolygon",
        "id": 41007,
        "arcs": [[[599, 600, 601]]]
      }, {
        "type": "Polygon",
        "id": 38001,
        "arcs": [[-492, -566, 602, 603, 604, 605, -521, -526]]
      }, {
        "type": "Polygon",
        "id": 38081,
        "arcs": [[-535, 606, 607, 608, -531]]
      }, {
        "type": "Polygon",
        "id": 38051,
        "arcs": [[-525, 609, 610, 611, -512, -516]]
      }, {
        "type": "Polygon",
        "id": 38021,
        "arcs": [[-532, -609, 612, 613, -610, -524]]
      }, {
        "type": "Polygon",
        "id": 38011,
        "arcs": [[-606, 614, -498, -522]]
      }, {
        "type": "Polygon",
        "id": 30023,
        "arcs": [[-554, 615, 616, -508, -448, -320]]
      }, {
        "type": "Polygon",
        "id": 26043,
        "arcs": [[617, 618, 619, -568, 620]]
      }, {
        "type": "Polygon",
        "id": 27095,
        "arcs": [[621, 622, 623, 624, -594, -452, -419]]
      }, {
        "type": "Polygon",
        "id": 30097,
        "arcs": [[-477, 625, 626, -412, -479]]
      }, {
        "type": "Polygon",
        "id": 30031,
        "arcs": [[-414, 627, 628, 629, 630, 631, -551, -460]]
      }, {
        "type": "Polygon",
        "id": 30067,
        "arcs": [[-627, 632, 633, 634, -628, -413]]
      }, {
        "type": "Polygon",
        "id": 30093,
        "arcs": [[635, 636, -616, -553]]
      }, {
        "type": "MultiPolygon",
        "id": 41009,
        "arcs": [[[637, 638, 639, -600, 640, -587]]]
      }, {
        "type": "Polygon",
        "id": 27065,
        "arcs": [[-576, 641, -622, -418]]
      }, {
        "type": "Polygon",
        "id": 55013,
        "arcs": [[642, 643, 644, 645, -574, 646]]
      }, {
        "type": "Polygon",
        "id": 55113,
        "arcs": [[647, 648, 649, 650, 651]]
      }, {
        "type": "Polygon",
        "id": 55129,
        "arcs": [[-651, 652, -643, 653]]
      }, {
        "type": "Polygon",
        "id": 30011,
        "arcs": [[654, 655, 656, 657, -440, -500]]
      }, {
        "type": "Polygon",
        "id": 30095,
        "arcs": [[-562, 658, -633, -626, -476]]
      }, {
        "type": "Polygon",
        "id": 27051,
        "arcs": [[-489, 659, 660, 661, -527]]
      }, {
        "type": "Polygon",
        "id": 27041,
        "arcs": [[-593, 662, 663, -660, -488]]
      }, {
        "type": "Polygon",
        "id": 55041,
        "arcs": [[664, 665, 666, 667, 668, -599, -570]]
      }, {
        "type": "Polygon",
        "id": 53011,
        "arcs": [[-584, 669, -638, -586]]
      }, {
        "type": "Polygon",
        "id": 53039,
        "arcs": [[-486, 670, 671, 672, 673, 674, -581, -408]]
      }, {
        "type": "Polygon",
        "id": 30003,
        "arcs": [[-444, 675, 676, 677, 678, -560, -563]]
      }, {
        "type": "Polygon",
        "id": 27155,
        "arcs": [[-662, 679, 680, 681, -533, -528]]
      }, {
        "type": "Polygon",
        "id": 55037,
        "arcs": [[-620, 682, -665, -569]]
      }, {
        "type": "Polygon",
        "id": 41059,
        "arcs": [[-537, 683, 684, 685, 686, -484, -539]]
      }, {
        "type": "Polygon",
        "id": 41063,
        "arcs": [[-495, -564, -518, -505, 687, 688, 689, -684, -536]]
      }, {
        "type": "Polygon",
        "id": 26109,
        "arcs": [[690, 691, 692, -618, 693]]
      }, {
        "type": "Polygon",
        "id": 55099,
        "arcs": [[-598, 694, 695, 696, 697, -649, 698, -541]]
      }, {
        "type": "Polygon",
        "id": 46105,
        "arcs": [[699, 700, 701, 702, 703, -604]]
      }, {
        "type": "Polygon",
        "id": 46031,
        "arcs": [[704, 705, 706, 707, -700, -603, -565]]
      }, {
        "type": "Polygon",
        "id": 46063,
        "arcs": [[-605, -704, 708, -655, -499, -615]]
      }, {
        "type": "Polygon",
        "id": 46021,
        "arcs": [[-612, 709, 710, -705, -513]]
      }, {
        "type": "Polygon",
        "id": 30001,
        "arcs": [[-637, 711, 712, 713, 714, -509, -617]]
      }, {
        "type": "Polygon",
        "id": 46089,
        "arcs": [[-614, 715, 716, 717, -710, -611]]
      }, {
        "type": "Polygon",
        "id": 46013,
        "arcs": [[-608, 718, 719, 720, 721, 722, -716, -613]]
      }, {
        "type": "Polygon",
        "id": 46109,
        "arcs": [[-682, 723, 724, 725, 726, -534]]
      }, {
        "type": "Polygon",
        "id": 46091,
        "arcs": [[-727, 727, -719, -607]]
      }, {
        "type": "Polygon",
        "id": 41049,
        "arcs": [[-687, 728, 729, 730, -671, -485]]
      }, {
        "type": "Polygon",
        "id": 55085,
        "arcs": [[-669, 731, 732, -695, -597]]
      }, {
        "type": "Polygon",
        "id": 41061,
        "arcs": [[733, 734, -685, -690]]
      }, {
        "type": "Polygon",
        "id": 30057,
        "arcs": [[-632, 735, -712, -636, -552]]
      }, {
        "type": "Polygon",
        "id": 27009,
        "arcs": [[-625, 736, 737, -595]]
      }, {
        "type": "Polygon",
        "id": 41021,
        "arcs": [[738, 739, 740, -672, -731]]
      }, {
        "type": "Polygon",
        "id": 30075,
        "arcs": [[-658, 741, 742, 743, -676, -443, -441]]
      }, {
        "type": "Polygon",
        "id": 26031,
        "arcs": [[744, 745, 746, 747, 748, 749]]
      }, {
        "type": "MultiPolygon",
        "id": 41057,
        "arcs": [[[750, 751, 752, 753, 754, -601]]]
      }, {
        "type": "Polygon",
        "id": 41067,
        "arcs": [[755, 756, 757, -751, -640]]
      }, {
        "type": "Polygon",
        "id": 27145,
        "arcs": [[-738, 758, 759, 760, 761, 762, -663, -592, -596]]
      }, {
        "type": "Polygon",
        "id": 27149,
        "arcs": [[763, 764, 765, -680, -661]]
      }, {
        "type": "Polygon",
        "id": 27121,
        "arcs": [[-763, 766, 767, -764, -664]]
      }, {
        "type": "Polygon",
        "id": 41055,
        "arcs": [[768, -673, -741]]
      }, {
        "type": "Polygon",
        "id": 27059,
        "arcs": [[769, 770, 771, -623, -642]]
      }, {
        "type": "Polygon",
        "id": 27025,
        "arcs": [[-646, 772, 773, 774, -770, -575]]
      }, {
        "type": "Polygon",
        "id": 55095,
        "arcs": [[775, 776, 777, -773, -645]]
      }, {
        "type": "Polygon",
        "id": 41051,
        "arcs": [[-670, -583, 778, 779, -756, -639]]
      }, {
        "type": "Polygon",
        "id": 41027,
        "arcs": [[780, 781, -779, -582, -675]]
      }, {
        "type": "Polygon",
        "id": 41065,
        "arcs": [[-769, -740, 782, 783, 784, 785, -781, -674]]
      }, {
        "type": "Polygon",
        "id": 16059,
        "arcs": [[-715, 786, 787, 788, 789, -502, -510]]
      }, {
        "type": "MultiPolygon",
        "id": 23029,
        "arcs": [[[790, -577, -345, 791]]]
      }, {
        "type": "Polygon",
        "id": 23007,
        "arcs": [[792, 793, 794, 795, -548]]
      }, {
        "type": "Polygon",
        "id": 26141,
        "arcs": [[796, 797, -745, 798]]
      }, {
        "type": "Polygon",
        "id": 55005,
        "arcs": [[-653, 799, 800, 801, -776, -644]]
      }, {
        "type": "Polygon",
        "id": 55107,
        "arcs": [[-698, 802, 803, -800, -650]]
      }, {
        "type": "Polygon",
        "id": 30009,
        "arcs": [[-679, 804, 805, -634, -659, -561]]
      }, {
        "type": "Polygon",
        "id": 46129,
        "arcs": [[-718, 806, 807, 808, -706, -711]]
      }, {
        "type": "Polygon",
        "id": 46045,
        "arcs": [[-723, 809, 810, -807, -717]]
      }, {
        "type": "Polygon",
        "id": 46037,
        "arcs": [[-728, -726, 811, 812, 813, 814, -720]]
      }, {
        "type": "Polygon",
        "id": 27011,
        "arcs": [[-681, -766, 815, 816, 817, -724]]
      }, {
        "type": "Polygon",
        "id": 27141,
        "arcs": [[-624, -772, 818, 819, 820, -759, -737]]
      }, {
        "type": "Polygon",
        "id": 55069,
        "arcs": [[821, 822, 823, -696, -733]]
      }, {
        "type": "Polygon",
        "id": 46041,
        "arcs": [[-809, 824, 825, 826, 827, -707]]
      }, {
        "type": "Polygon",
        "id": 46137,
        "arcs": [[-828, 828, 829, -701, -708]]
      }, {
        "type": "Polygon",
        "id": 55067,
        "arcs": [[-668, 830, 831, 832, 833, -822, -732]]
      }, {
        "type": "Polygon",
        "id": 41005,
        "arcs": [[-782, -786, 834, 835, -757, -780]]
      }, {
        "type": "Polygon",
        "id": 41071,
        "arcs": [[-836, 836, 837, -752, -758]]
      }, {
        "type": "Polygon",
        "id": 27171,
        "arcs": [[-821, 838, 839, 840, 841, -760]]
      }, {
        "type": "Polygon",
        "id": 27003,
        "arcs": [[-775, 842, 843, 844, -819, -771]]
      }, {
        "type": "Polygon",
        "id": 27067,
        "arcs": [[845, 846, 847, 848, -767, -762]]
      }, {
        "type": "Polygon",
        "id": 27151,
        "arcs": [[-849, 849, 850, -816, -765, -768]]
      }, {
        "type": "Polygon",
        "id": 55119,
        "arcs": [[-824, 851, 852, 853, -803, -697]]
      }, {
        "type": "Polygon",
        "id": 55083,
        "arcs": [[854, 855, 856, 857, 858, 859, 860, -831, -667]]
      }, {
        "type": "Polygon",
        "id": 23017,
        "arcs": [[-795, 861, 862, 863, 864, 865, 866]]
      }, {
        "type": "Polygon",
        "id": 46051,
        "arcs": [[-818, 867, 868, 869, -812, -725]]
      }, {
        "type": "Polygon",
        "id": 27093,
        "arcs": [[-842, 870, 871, -846, -761]]
      }, {
        "type": "Polygon",
        "id": 33007,
        "arcs": [[872, 873, 874, 875, -866]]
      }, {
        "type": "Polygon",
        "id": 27163,
        "arcs": [[-778, 876, 877, 878, 879, -843, -774]]
      }, {
        "type": "Polygon",
        "id": 55017,
        "arcs": [[-854, 880, 881, 882, -801, -804]]
      }, {
        "type": "Polygon",
        "id": 41047,
        "arcs": [[-835, -785, 883, 884, 885, -837]]
      }, {
        "type": "Polygon",
        "id": 16003,
        "arcs": [[886, 887, 888, 889, -688, -504]]
      }, {
        "type": "Polygon",
        "id": 27073,
        "arcs": [[-851, 890, 891, 892, -868, -817]]
      }, {
        "type": "MultiPolygon",
        "id": 23009,
        "arcs": [[[893]], [[894]], [[895, -578, -791]]]
      }, {
        "type": "Polygon",
        "id": 46107,
        "arcs": [[-811, 896, 897, 898, -825, -808]]
      }, {
        "type": "Polygon",
        "id": 46049,
        "arcs": [[-722, 899, 900, 901, -897, -810]]
      }, {
        "type": "Polygon",
        "id": 27053,
        "arcs": [[-820, -845, 902, 903, 904, 905, -839]]
      }, {
        "type": "Polygon",
        "id": 46115,
        "arcs": [[-815, 906, 907, 908, -900, -721]]
      }, {
        "type": "Polygon",
        "id": 16085,
        "arcs": [[-790, 909, 910, 911, -887, -503]]
      }, {
        "type": "Polygon",
        "id": 46019,
        "arcs": [[-703, 912, 913, 914, -656, -709]]
      }, {
        "type": "Polygon",
        "id": 55109,
        "arcs": [[915, 916, -877, -777]]
      }, {
        "type": "Polygon",
        "id": 55033,
        "arcs": [[-883, 917, 918, 919, -916, -802]]
      }, {
        "type": "Polygon",
        "id": 26009,
        "arcs": [[920, 921, 922, 923, 924]]
      }, {
        "type": "Polygon",
        "id": 26137,
        "arcs": [[925, 926, -921, 927, -747]]
      }, {
        "type": "Polygon",
        "id": 26119,
        "arcs": [[928, 929, -926, -746, -798]]
      }, {
        "type": "Polygon",
        "id": 46025,
        "arcs": [[930, 931, 932, 933, -907, -814]]
      }, {
        "type": "Polygon",
        "id": 46029,
        "arcs": [[-870, 934, 935, -931, -813]]
      }, {
        "type": "Polygon",
        "id": 27023,
        "arcs": [[-848, 936, 937, -891, -850]]
      }, {
        "type": "Polygon",
        "id": 27123,
        "arcs": [[-880, 938, -903, -844]]
      }, {
        "type": "Polygon",
        "id": 55073,
        "arcs": [[-823, -834, 939, 940, 941, 942, -852]]
      }, {
        "type": "Polygon",
        "id": 55078,
        "arcs": [[-861, 943, -832]]
      }, {
        "type": "Polygon",
        "id": 41001,
        "arcs": [[-890, 944, 945, 946, -734, -689]]
      }, {
        "type": "Polygon",
        "id": 41053,
        "arcs": [[-886, 947, 948, 949, -753, -838]]
      }, {
        "type": "Polygon",
        "id": 41069,
        "arcs": [[-730, 950, 951, 952, -783, -739]]
      }, {
        "type": "Polygon",
        "id": 41041,
        "arcs": [[-950, 953, 954, 955, -754]]
      }, {
        "type": "Polygon",
        "id": 46093,
        "arcs": [[-830, 956, 957, 958, -913, -702]]
      }, {
        "type": "Polygon",
        "id": 55019,
        "arcs": [[-943, 959, 960, 961, -881, -853]]
      }, {
        "type": "Polygon",
        "id": 55115,
        "arcs": [[-944, -860, 962, 963, 964, -940, -833]]
      }, {
        "type": "Polygon",
        "id": 50011,
        "arcs": [[965, 966, 967, 968, 969]]
      }, {
        "type": "Polygon",
        "id": 50009,
        "arcs": [[970, 971, 972, 973, -875]]
      }, {
        "type": "Polygon",
        "id": 50013,
        "arcs": [[974, 975, 976, -969]]
      }, {
        "type": "Polygon",
        "id": 36019,
        "arcs": [[977, 978, 979, 980, -976]]
      }, {
        "type": "Polygon",
        "id": 50019,
        "arcs": [[-973, 981, 982, -966, 983]]
      }, {
        "type": "Polygon",
        "id": 56029,
        "arcs": [[984, 985, 986, 987, 988, -629, -635, -806]]
      }, {
        "type": "Polygon",
        "id": 36089,
        "arcs": [[989, 990, 991, 992, 993, 994]]
      }, {
        "type": "Polygon",
        "id": 56003,
        "arcs": [[995, 996, 997, -985, -805, -678]]
      }, {
        "type": "Polygon",
        "id": 56005,
        "arcs": [[998, 999, 1000, 1001, 1002, -743]]
      }, {
        "type": "Polygon",
        "id": 56033,
        "arcs": [[-744, -1003, 1003, -996, -677]]
      }, {
        "type": "Polygon",
        "id": 36033,
        "arcs": [[-980, 1004, 1005, -990, 1006]]
      }, {
        "type": "Polygon",
        "id": 56011,
        "arcs": [[-657, -915, 1007, 1008, -999, -742]]
      }, {
        "type": "Polygon",
        "id": 41023,
        "arcs": [[-735, -947, 1009, 1010, 1011, -951, -729, -686]]
      }, {
        "type": "Polygon",
        "id": 27085,
        "arcs": [[-841, 1012, 1013, 1014, -871]]
      }, {
        "type": "Polygon",
        "id": 27019,
        "arcs": [[-906, 1015, 1016, -1013, -840]]
      }, {
        "type": "Polygon",
        "id": 46039,
        "arcs": [[-893, 1017, 1018, 1019, 1020, -935, -869]]
      }, {
        "type": "Polygon",
        "id": 27173,
        "arcs": [[1021, 1022, 1023, 1024, -1018, -892, -938]]
      }, {
        "type": "Polygon",
        "id": 27037,
        "arcs": [[-879, 1025, 1026, 1027, 1028, -904, -939]]
      }, {
        "type": "Polygon",
        "id": 46119,
        "arcs": [[1029, 1030, 1031, -826, -899]]
      }, {
        "type": "Polygon",
        "id": 46069,
        "arcs": [[-902, 1032, 1033, 1034, 1035, -1030, -898]]
      }, {
        "type": "Polygon",
        "id": 46059,
        "arcs": [[-909, 1036, 1037, 1038, -1033, -901]]
      }, {
        "type": "Polygon",
        "id": 27129,
        "arcs": [[-872, -1015, 1039, 1040, 1041, 1042, -1022, -937, -847]]
      }, {
        "type": "Polygon",
        "id": 16037,
        "arcs": [[1043, 1044, 1045, 1046, -910, -789]]
      }, {
        "type": "Polygon",
        "id": 55093,
        "arcs": [[-920, 1047, 1048, -1026, -878, -917]]
      }, {
        "type": "Polygon",
        "id": 26001,
        "arcs": [[1049, 1050, 1051, 1052]]
      }, {
        "type": "Polygon",
        "id": 26079,
        "arcs": [[1053, 1054, 1055, -922]]
      }, {
        "type": "Polygon",
        "id": 26039,
        "arcs": [[1056, 1057, -1054, -927]]
      }, {
        "type": "Polygon",
        "id": 55035,
        "arcs": [[-962, 1058, 1059, 1060, 1061, -918, -882]]
      }, {
        "type": "Polygon",
        "id": 26135,
        "arcs": [[-1052, 1062, -1057, -930]]
      }, {
        "type": "Polygon",
        "id": 16087,
        "arcs": [[1063, 1064, 1065, -945, -889]]
      }, {
        "type": "Polygon",
        "id": 41031,
        "arcs": [[-953, 1066, 1067, 1068, -884, -784]]
      }, {
        "type": "Polygon",
        "id": 27139,
        "arcs": [[-1029, 1069, 1070, 1071, -1016, -905]]
      }, {
        "type": "Polygon",
        "id": 46057,
        "arcs": [[-1021, 1072, 1073, -932, -936]]
      }, {
        "type": "Polygon",
        "id": 50015,
        "arcs": [[1074, 1075, 1076, -967, -983]]
      }, {
        "type": "Polygon",
        "id": 41043,
        "arcs": [[-1069, 1077, 1078, 1079, -948, -885]]
      }, {
        "type": "Polygon",
        "id": 46117,
        "arcs": [[-1032, 1080, 1081, 1082, 1083, -827]]
      }, {
        "type": "Polygon",
        "id": 26019,
        "arcs": [[1084, 1085, 1086, 1087]]
      }, {
        "type": "Polygon",
        "id": 50005,
        "arcs": [[1088, 1089, 1090, -1075, -982, -972]]
      }, {
        "type": "MultiPolygon",
        "id": 23027,
        "arcs": [[[-580, 1091, 1092, 1093, 1094, -546]]]
      }, {
        "type": "Polygon",
        "id": 16043,
        "arcs": [[1095, 1096, 1097, 1098, 1099, -713, -736, -631]]
      }, {
        "type": "Polygon",
        "id": 46055,
        "arcs": [[1100, 1101, 1102, -957, -829, -1084]]
      }, {
        "type": "Polygon",
        "id": 50007,
        "arcs": [[-1077, 1103, 1104, 1105, -978, -975, -968]]
      }, {
        "type": "Polygon",
        "id": 41003,
        "arcs": [[-1080, 1106, -954, -949]]
      }, {
        "type": "Polygon",
        "id": 23011,
        "arcs": [[1107, 1108, 1109, 1110, -793, -547, -1095]]
      }, {
        "type": "Polygon",
        "id": 27143,
        "arcs": [[-1017, -1072, 1111, 1112, -1040, -1014]]
      }, {
        "type": "Polygon",
        "id": 27049,
        "arcs": [[1113, 1114, 1115, 1116, 1117, -1027, -1049]]
      }, {
        "type": "Polygon",
        "id": 27127,
        "arcs": [[1118, 1119, 1120, 1121, -1023, -1043]]
      }, {
        "type": "Polygon",
        "id": 55097,
        "arcs": [[1122, 1123, 1124, 1125, -941]]
      }, {
        "type": "Polygon",
        "id": 55141,
        "arcs": [[-1126, 1126, 1127, 1128, -960, -942]]
      }, {
        "type": "MultiPolygon",
        "id": 55009,
        "arcs": [[[-857, 1129]], [[-859, 1130, 1131, 1132, 1133, 1134, -963]]]
      }, {
        "type": "Polygon",
        "id": 55091,
        "arcs": [[-1062, 1135, 1136, -1114, -1048, -919]]
      }, {
        "type": "Polygon",
        "id": 55135,
        "arcs": [[1137, 1138, 1139, -1123, -965]]
      }, {
        "type": "Polygon",
        "id": 55061,
        "arcs": [[1140, 1141, -1132, 1142, 1143]]
      }, {
        "type": "Polygon",
        "id": 56039,
        "arcs": [[1144, 1145, 1146, 1147, 1148, -1096, -630, -989]]
      }, {
        "type": "Polygon",
        "id": 46005,
        "arcs": [[-934, 1149, 1150, 1151, -1037, -908]]
      }, {
        "type": "Polygon",
        "id": 27081,
        "arcs": [[1152, 1153, 1154, -1019, -1025]]
      }, {
        "type": "Polygon",
        "id": 27083,
        "arcs": [[-1122, 1155, 1156, -1153, -1024]]
      }, {
        "type": "Polygon",
        "id": 46081,
        "arcs": [[-959, 1157, 1158, -1008, -914]]
      }, {
        "type": "Polygon",
        "id": 55011,
        "arcs": [[-1061, 1159, 1160, 1161, -1136]]
      }, {
        "type": "Polygon",
        "id": 55121,
        "arcs": [[1162, 1163, 1164, -1160, -1060]]
      }, {
        "type": "Polygon",
        "id": 55053,
        "arcs": [[-961, -1129, 1165, 1166, 1167, -1163, -1059]]
      }, {
        "type": "Polygon",
        "id": 55087,
        "arcs": [[-964, -1135, 1168, 1169, -1138]]
      }, {
        "type": "Polygon",
        "id": 16033,
        "arcs": [[-1100, 1170, 1171, -787, -714]]
      }, {
        "type": "Polygon",
        "id": 56019,
        "arcs": [[-1002, 1172, 1173, 1174, -997, -1004]]
      }, {
        "type": "Polygon",
        "id": 41013,
        "arcs": [[-952, -1012, 1175, 1176, -1067]]
      }, {
        "type": "Polygon",
        "id": 46065,
        "arcs": [[-1036, 1177, -1081, -1031]]
      }, {
        "type": "Polygon",
        "id": 36031,
        "arcs": [[1178, 1179, 1180, 1181, -1005, -979, -1106]]
      }, {
        "type": "Polygon",
        "id": 27079,
        "arcs": [[1182, 1183, 1184, 1185, -1112, -1071]]
      }, {
        "type": "Polygon",
        "id": 27131,
        "arcs": [[-1028, -1118, 1186, 1187, 1188, -1183, -1070]]
      }, {
        "type": "Polygon",
        "id": 46077,
        "arcs": [[-1074, 1189, 1190, 1191, 1192, -1150, -933]]
      }, {
        "type": "Polygon",
        "id": 46011,
        "arcs": [[-1155, 1193, 1194, 1195, -1190, -1073, -1020]]
      }, {
        "type": "Polygon",
        "id": 26101,
        "arcs": [[1196, 1197, 1198, 1199, -1086]]
      }, {
        "type": "Polygon",
        "id": 26165,
        "arcs": [[1200, 1201, 1202, -1197, 1203]]
      }, {
        "type": "Polygon",
        "id": 26143,
        "arcs": [[1204, 1205, 1206, 1207, -1058]]
      }, {
        "type": "Polygon",
        "id": 26113,
        "arcs": [[-1208, 1208, 1209, -1201, -1055]]
      }, {
        "type": "Polygon",
        "id": 26069,
        "arcs": [[1210, 1211, 1212, -1051]]
      }, {
        "type": "Polygon",
        "id": 26129,
        "arcs": [[-1213, 1213, 1214, -1205, -1063]]
      }, {
        "type": "Polygon",
        "id": 16045,
        "arcs": [[-912, 1215, 1216, 1217, 1218, -1064, -888]]
      }, {
        "type": "Polygon",
        "id": 46103,
        "arcs": [[-1103, 1219, 1220, 1221, 1222, -1158, -958]]
      }, {
        "type": "Polygon",
        "id": 50023,
        "arcs": [[1223, 1224, -1104, -1076, -1091]]
      }, {
        "type": "Polygon",
        "id": 27015,
        "arcs": [[1225, 1226, 1227, 1228, -1119, -1042]]
      }, {
        "type": "Polygon",
        "id": 23001,
        "arcs": [[1229, 1230, -862, -794, -1111]]
      }, {
        "type": "Polygon",
        "id": 27103,
        "arcs": [[1231, -1226, -1041, -1113, -1186]]
      }, {
        "type": "Polygon",
        "id": 27157,
        "arcs": [[-1137, -1162, 1232, 1233, -1115]]
      }, {
        "type": "Polygon",
        "id": 41045,
        "arcs": [[-1066, 1234, 1235, 1236, 1237, 1238, -1010, -946]]
      }, {
        "type": "Polygon",
        "id": 33009,
        "arcs": [[1239, 1240, 1241, 1242, 1243, 1244, -1089, -971, -874]]
      }, {
        "type": "Polygon",
        "id": 41017,
        "arcs": [[-1177, 1245, 1246, 1247, 1248, -1078, -1068]]
      }, {
        "type": "MultiPolygon",
        "id": 36045,
        "arcs": [[[1249, -994, 1250, 1251, 1252, 1253, 1254]]]
      }, {
        "type": "MultiPolygon",
        "id": 23013,
        "arcs": [[[1255, 1256, -1093]]]
      }, {
        "type": "Polygon",
        "id": 16015,
        "arcs": [[-1047, 1257, 1258, -1216, -911]]
      }, {
        "type": "MultiPolygon",
        "id": 23015,
        "arcs": [[[-1094, -1257, 1259, 1260, 1261, -1108]]]
      }, {
        "type": "Polygon",
        "id": 55071,
        "arcs": [[-1142, 1262, 1263, 1264, -1133]]
      }, {
        "type": "Polygon",
        "id": 50001,
        "arcs": [[-1225, 1265, 1266, 1267, 1268, -1179, -1105]]
      }, {
        "type": "MultiPolygon",
        "id": 41039,
        "arcs": [[[-1249, 1269, 1270, 1271, -955, -1107, -1079]]]
      }, {
        "type": "Polygon",
        "id": 33003,
        "arcs": [[-865, 1272, 1273, 1274, -1240, -873]]
      }, {
        "type": "Polygon",
        "id": 27013,
        "arcs": [[-1185, 1275, 1276, 1277, 1278, -1227, -1232]]
      }, {
        "type": "Polygon",
        "id": 55057,
        "arcs": [[1279, 1280, 1281, 1282, -1166, -1128]]
      }, {
        "type": "Polygon",
        "id": 55001,
        "arcs": [[-1125, 1283, 1284, 1285, -1280, -1127]]
      }, {
        "type": "Polygon",
        "id": 55137,
        "arcs": [[-1140, 1286, 1287, 1288, -1284, -1124]]
      }, {
        "type": "Polygon",
        "id": 55139,
        "arcs": [[1289, 1290, 1291, -1287, -1139, -1170]]
      }, {
        "type": "Polygon",
        "id": 55015,
        "arcs": [[-1134, -1265, 1292, 1293, -1290, -1169]]
      }, {
        "type": "Polygon",
        "id": 16023,
        "arcs": [[-1172, 1294, 1295, 1296, -1044, -788]]
      }, {
        "type": "Polygon",
        "id": 50017,
        "arcs": [[-1245, 1297, -1266, -1224, -1090]]
      }, {
        "type": "Polygon",
        "id": 36049,
        "arcs": [[1298, 1299, -1251, -993, 1300]]
      }, {
        "type": "Polygon",
        "id": 46085,
        "arcs": [[1301, 1302, 1303, 1304, 1305, -1082, -1178, -1035, 1306]]
      }, {
        "type": "Polygon",
        "id": 27117,
        "arcs": [[-1157, 1307, 1308, 1309, -1194, -1154]]
      }, {
        "type": "Polygon",
        "id": 27101,
        "arcs": [[-1121, 1310, 1311, 1312, -1308, -1156]]
      }, {
        "type": "Polygon",
        "id": 46073,
        "arcs": [[-1152, 1313, 1314, 1315, 1316, -1038]]
      }, {
        "type": "Polygon",
        "id": 27147,
        "arcs": [[1317, 1318, 1319, 1320, -1188]]
      }, {
        "type": "Polygon",
        "id": 27039,
        "arcs": [[1321, 1322, -1318, -1187, -1117]]
      }, {
        "type": "Polygon",
        "id": 46101,
        "arcs": [[-1310, 1323, 1324, -1195]]
      }, {
        "type": "Polygon",
        "id": 27161,
        "arcs": [[-1321, 1325, 1326, -1276, -1184, -1189]]
      }, {
        "type": "Polygon",
        "id": 46017,
        "arcs": [[-1317, 1327, -1307, -1034, -1039]]
      }, {
        "type": "Polygon",
        "id": 46111,
        "arcs": [[-1193, 1328, 1329, 1330, 1331, -1314, -1151]]
      }, {
        "type": "Polygon",
        "id": 27109,
        "arcs": [[-1234, 1332, 1333, 1334, -1322, -1116]]
      }, {
        "type": "Polygon",
        "id": 27033,
        "arcs": [[-1229, 1335, 1336, 1337, -1311, -1120]]
      }, {
        "type": "Polygon",
        "id": 46079,
        "arcs": [[-1196, -1325, 1338, 1339, 1340, -1191]]
      }, {
        "type": "Polygon",
        "id": 46097,
        "arcs": [[-1341, 1341, 1342, -1329, -1192]]
      }, {
        "type": "Polygon",
        "id": 27169,
        "arcs": [[-1161, -1165, 1343, 1344, 1345, -1333, -1233]]
      }, {
        "type": "Polygon",
        "id": 56045,
        "arcs": [[-1159, -1223, 1346, 1347, 1348, -1000, -1009]]
      }, {
        "type": "Polygon",
        "id": 26105,
        "arcs": [[1349, 1350, 1351, -1199]]
      }, {
        "type": "MultiPolygon",
        "id": 23005,
        "arcs": [[[-1231, 1352, 1353, 1354, 1355, 1356, -863]]]
      }, {
        "type": "Polygon",
        "id": 46075,
        "arcs": [[-1306, 1357, 1358, -1101, -1083]]
      }, {
        "type": "Polygon",
        "id": 56043,
        "arcs": [[-1175, 1359, 1360, 1361, -986, -998]]
      }, {
        "type": "MultiPolygon",
        "id": 23023,
        "arcs": [[[-1355, 1362]], [[1363, 1364, -1261, 1365]], [[1366, -1353, -1230, -1110]]]
      }, {
        "type": "Polygon",
        "id": 26085,
        "arcs": [[-1198, -1203, 1367, 1368, -1350]]
      }, {
        "type": "Polygon",
        "id": 26133,
        "arcs": [[-1210, 1369, 1370, -1368, -1202]]
      }, {
        "type": "Polygon",
        "id": 26035,
        "arcs": [[-1207, 1371, 1372, -1370, -1209]]
      }, {
        "type": "Polygon",
        "id": 26051,
        "arcs": [[1373, 1374, 1375, -1372, -1206, -1215]]
      }, {
        "type": "Polygon",
        "id": 55081,
        "arcs": [[-1283, 1376, 1377, -1167]]
      }, {
        "type": "Polygon",
        "id": 16075,
        "arcs": [[-1219, 1378, -1235, -1065]]
      }, {
        "type": "Polygon",
        "id": 36041,
        "arcs": [[1379, 1380, 1381, 1382, -991, -1006, -1182]]
      }, {
        "type": "Polygon",
        "id": 27165,
        "arcs": [[-1279, 1383, 1384, -1336, -1228]]
      }, {
        "type": "Polygon",
        "id": 16039,
        "arcs": [[-1046, 1385, 1386, 1387, 1388, 1389, 1390, -1258]]
      }, {
        "type": "Polygon",
        "id": 36043,
        "arcs": [[-1383, 1391, 1392, 1393, 1394, -1301, -992]]
      }, {
        "type": "Polygon",
        "id": 55063,
        "arcs": [[-1168, -1378, 1395, 1396, -1344, -1164]]
      }, {
        "type": "Polygon",
        "id": 56017,
        "arcs": [[-1362, 1397, -987]]
      }, {
        "type": "Polygon",
        "id": 16051,
        "arcs": [[-1099, 1398, 1399, 1400, -1295, -1171]]
      }, {
        "type": "Polygon",
        "id": 41025,
        "arcs": [[-1239, 1401, 1402, 1403, -1246, -1176, -1011]]
      }, {
        "type": "Polygon",
        "id": 56013,
        "arcs": [[-1398, -1361, 1404, 1405, 1406, 1407, -1145, -988]]
      }, {
        "type": "Polygon",
        "id": 26017,
        "arcs": [[1408, 1409, 1410, 1411, -1375, 1412]]
      }, {
        "type": "Polygon",
        "id": 46071,
        "arcs": [[-1359, 1413, 1414, 1415, -1220, -1102]]
      }, {
        "type": "Polygon",
        "id": 16013,
        "arcs": [[-1297, 1416, 1417, 1418, 1419, 1420, 1421, -1386, -1045]]
      }, {
        "type": "Polygon",
        "id": 16081,
        "arcs": [[-1149, 1422, 1423, -1097]]
      }, {
        "type": "Polygon",
        "id": 55047,
        "arcs": [[-1292, 1424, 1425, 1426, 1427, -1288]]
      }, {
        "type": "Polygon",
        "id": 55077,
        "arcs": [[-1428, 1428, -1285, -1289]]
      }, {
        "type": "Polygon",
        "id": 50027,
        "arcs": [[-1244, 1429, 1430, 1431, 1432, -1267, -1298]]
      }, {
        "type": "MultiPolygon",
        "id": 41019,
        "arcs": [[[1433, 1434, 1435, 1436, 1437, 1438, -1271]]]
      }, {
        "type": "Polygon",
        "id": 55039,
        "arcs": [[1439, 1440, 1441, -1425, -1291, -1294]]
      }, {
        "type": "Polygon",
        "id": 46003,
        "arcs": [[-1332, 1442, 1443, 1444, 1445, -1315]]
      }, {
        "type": "Polygon",
        "id": 46015,
        "arcs": [[-1446, 1446, -1302, -1328, -1316]]
      }, {
        "type": "Polygon",
        "id": 16065,
        "arcs": [[-1424, 1447, -1399, -1098]]
      }, {
        "type": "Polygon",
        "id": 55117,
        "arcs": [[1448, 1449, 1450, -1440, -1293, -1264]]
      }, {
        "type": "Polygon",
        "id": 16027,
        "arcs": [[-1218, 1451, 1452, -1236, -1379]]
      }, {
        "type": "Polygon",
        "id": 46095,
        "arcs": [[-1305, 1453, 1454, -1414, -1358]]
      }, {
        "type": "Polygon",
        "id": 16025,
        "arcs": [[1455, 1456, -1387, -1422]]
      }, {
        "type": "Polygon",
        "id": 50021,
        "arcs": [[1457, 1458, -1268, -1433]]
      }, {
        "type": "Polygon",
        "id": 46033,
        "arcs": [[1459, 1460, 1461, -1347, -1222]]
      }, {
        "type": "Polygon",
        "id": 27133,
        "arcs": [[-1313, 1462, 1463, 1464, -1309]]
      }, {
        "type": "Polygon",
        "id": 27105,
        "arcs": [[-1338, 1465, 1466, 1467, -1463, -1312]]
      }, {
        "type": "Polygon",
        "id": 27047,
        "arcs": [[1468, 1469, 1470, 1471, -1326, -1320]]
      }, {
        "type": "Polygon",
        "id": 27099,
        "arcs": [[-1335, 1472, 1473, 1474, 1475, -1469, -1319, -1323]]
      }, {
        "type": "Polygon",
        "id": 27055,
        "arcs": [[-1397, 1476, 1477, 1478, 1479, -1345]]
      }, {
        "type": "Polygon",
        "id": 46035,
        "arcs": [[1480, 1481, 1482, -1443, -1331]]
      }, {
        "type": "Polygon",
        "id": 46061,
        "arcs": [[-1343, 1483, 1484, -1481, -1330]]
      }, {
        "type": "Polygon",
        "id": 27045,
        "arcs": [[-1346, -1480, 1485, 1486, -1473, -1334]]
      }, {
        "type": "Polygon",
        "id": 27063,
        "arcs": [[-1385, 1487, 1488, 1489, 1490, -1466, -1337]]
      }, {
        "type": "Polygon",
        "id": 27043,
        "arcs": [[-1327, -1472, 1491, 1492, 1493, -1277]]
      }, {
        "type": "Polygon",
        "id": 46099,
        "arcs": [[1494, 1495, 1496, 1497, -1339, -1324, -1465]]
      }, {
        "type": "Polygon",
        "id": 27091,
        "arcs": [[-1278, -1494, 1498, 1499, -1488, -1384]]
      }, {
        "type": "Polygon",
        "id": 46087,
        "arcs": [[-1340, -1498, 1500, 1501, -1484, -1342]]
      }, {
        "type": "Polygon",
        "id": 26111,
        "arcs": [[-1412, 1502, 1503, 1504, -1376]]
      }, {
        "type": "Polygon",
        "id": 26127,
        "arcs": [[1505, 1506, 1507, -1351]]
      }, {
        "type": "Polygon",
        "id": 26073,
        "arcs": [[-1505, 1508, 1509, 1510, -1373]]
      }, {
        "type": "MultiPolygon",
        "id": 23031,
        "arcs": [[[1511, 1512, -1273, -864, -1357]]]
      }, {
        "type": "Polygon",
        "id": 26107,
        "arcs": [[-1511, 1513, 1514, -1371]]
      }, {
        "type": "Polygon",
        "id": 26123,
        "arcs": [[-1515, 1515, 1516, 1517, -1506, -1369]]
      }, {
        "type": "Polygon",
        "id": 36115,
        "arcs": [[-1459, 1518, 1519, 1520, 1521, -1180, -1269]]
      }, {
        "type": "Polygon",
        "id": 16001,
        "arcs": [[-1259, -1391, 1522, -1452, -1217]]
      }, {
        "type": "Polygon",
        "id": 36113,
        "arcs": [[1523, -1380, -1181, -1522]]
      }, {
        "type": "Polygon",
        "id": 46123,
        "arcs": [[1524, 1525, 1526, -1454, -1304]]
      }, {
        "type": "Polygon",
        "id": 33001,
        "arcs": [[1527, 1528, -1241, -1275]]
      }, {
        "type": "Polygon",
        "id": 26157,
        "arcs": [[1529, 1530, 1531, 1532, 1533, -1410, 1534]]
      }, {
        "type": "Polygon",
        "id": 55123,
        "arcs": [[1535, 1536, 1537, 1538, -1477, -1396, -1377, -1282]]
      }, {
        "type": "MultiPolygon",
        "id": 36075,
        "arcs": [[[-1254, 1539]], [[-1300, 1540, 1541, 1542, 1543, 1544, -1252]]]
      }, {
        "type": "Polygon",
        "id": 46113,
        "arcs": [[1545, 1546, 1547, 1548, -1460, -1221, -1416]]
      }, {
        "type": "Polygon",
        "id": 26151,
        "arcs": [[1549, 1550, -1531, 1551, 1552]]
      }, {
        "type": "Polygon",
        "id": 16073,
        "arcs": [[-1523, -1390, 1553, 1554, 1555, -1237, -1453]]
      }, {
        "type": "Polygon",
        "id": 55021,
        "arcs": [[1556, 1557, 1558, -1286, -1429, -1427]]
      }, {
        "type": "Polygon",
        "id": 55111,
        "arcs": [[-1559, 1559, 1560, 1561, -1536, -1281]]
      }, {
        "type": "Polygon",
        "id": 55027,
        "arcs": [[1562, 1563, 1564, 1565, -1557, -1426, -1442]]
      }, {
        "type": "Polygon",
        "id": 16019,
        "arcs": [[-1448, -1423, -1148, 1566, 1567, 1568, -1400]]
      }, {
        "type": "Polygon",
        "id": 16011,
        "arcs": [[1569, 1570, 1571, -1417, -1296, -1401, -1569]]
      }, {
        "type": "Polygon",
        "id": 41035,
        "arcs": [[1572, 1573, 1574, 1575, -1434, -1270, -1248]]
      }, {
        "type": "Polygon",
        "id": 41037,
        "arcs": [[1576, 1577, -1573, -1247, -1404]]
      }, {
        "type": "Polygon",
        "id": 36065,
        "arcs": [[1578, 1579, -1541, -1299, -1395]]
      }, {
        "type": "Polygon",
        "id": 33013,
        "arcs": [[-1529, 1580, 1581, 1582, 1583, -1242]]
      }, {
        "type": "MultiPolygon",
        "id": 41011,
        "arcs": [[[1584, 1585, -1438]]]
      }, {
        "type": "Polygon",
        "id": 33019,
        "arcs": [[-1584, 1586, 1587, 1588, -1430, -1243]]
      }, {
        "type": "Polygon",
        "id": 33017,
        "arcs": [[-1513, 1589, 1590, -1581, -1528, -1274]]
      }, {
        "type": "Polygon",
        "id": 26145,
        "arcs": [[-1534, 1591, 1592, 1593, -1503, -1411]]
      }, {
        "type": "Polygon",
        "id": 55103,
        "arcs": [[1594, 1595, 1596, -1537, -1562]]
      }, {
        "type": "Polygon",
        "id": 55089,
        "arcs": [[1597, 1598, 1599, -1450]]
      }, {
        "type": "Polygon",
        "id": 55131,
        "arcs": [[-1451, -1600, 1600, -1563, -1441]]
      }, {
        "type": "Polygon",
        "id": 19189,
        "arcs": [[1601, 1602, 1603, -1492, -1471]]
      }, {
        "type": "Polygon",
        "id": 19109,
        "arcs": [[1604, 1605, 1606, -1499, -1493, -1604, 1607]]
      }, {
        "type": "Polygon",
        "id": 19059,
        "arcs": [[1608, 1609, -1490, 1610]]
      }, {
        "type": "Polygon",
        "id": 19063,
        "arcs": [[1611, -1611, -1489, -1500, -1607]]
      }, {
        "type": "Polygon",
        "id": 19195,
        "arcs": [[1612, -1602, -1470, -1476, 1613]]
      }, {
        "type": "Polygon",
        "id": 19143,
        "arcs": [[1614, 1615, -1467, -1491, -1610]]
      }, {
        "type": "Polygon",
        "id": 56027,
        "arcs": [[-1462, 1616, 1617, 1618, 1619, 1620, -1348]]
      }, {
        "type": "Polygon",
        "id": 19131,
        "arcs": [[1621, 1622, -1614, -1475, 1623]]
      }, {
        "type": "Polygon",
        "id": 19119,
        "arcs": [[1624, 1625, -1495, -1464, -1468, -1616]]
      }, {
        "type": "Polygon",
        "id": 19089,
        "arcs": [[1626, 1627, -1624, -1474, -1487]]
      }, {
        "type": "Polygon",
        "id": 19005,
        "arcs": [[-1539, 1628, 1629, 1630, -1478]]
      }, {
        "type": "Polygon",
        "id": 19191,
        "arcs": [[1631, 1632, -1627, -1486, -1479, -1631]]
      }, {
        "type": "Polygon",
        "id": 46083,
        "arcs": [[-1626, 1633, 1634, 1635, 1636, -1496]]
      }, {
        "type": "Polygon",
        "id": 56009,
        "arcs": [[-1621, 1637, 1638, 1639, 1640, -1173, -1001, -1349]]
      }, {
        "type": "Polygon",
        "id": 46023,
        "arcs": [[-1445, 1641, 1642, 1643, 1644, 1645, 1646, -1447]]
      }, {
        "type": "Polygon",
        "id": 46125,
        "arcs": [[-1497, -1637, 1647, 1648, 1649, -1501]]
      }, {
        "type": "Polygon",
        "id": 46067,
        "arcs": [[-1502, -1650, 1650, 1651, -1643, 1652, -1482, -1485]]
      }, {
        "type": "Polygon",
        "id": 56025,
        "arcs": [[-1174, -1641, 1653, -1405, -1360]]
      }, {
        "type": "Polygon",
        "id": 46043,
        "arcs": [[-1483, -1653, -1642, -1444]]
      }, {
        "type": "Polygon",
        "id": 46053,
        "arcs": [[-1647, 1654, 1655, -1525, -1303]]
      }, {
        "type": "Polygon",
        "id": 46047,
        "arcs": [[-1549, 1656, 1657, -1617, -1461]]
      }, {
        "type": "Polygon",
        "id": 26121,
        "arcs": [[-1518, 1658, 1659, 1660, -1507]]
      }, {
        "type": "Polygon",
        "id": 26117,
        "arcs": [[-1510, 1661, 1662, 1663, -1516, -1514]]
      }, {
        "type": "Polygon",
        "id": 56035,
        "arcs": [[1664, 1665, -1146, -1408]]
      }, {
        "type": "Polygon",
        "id": 26057,
        "arcs": [[-1504, -1594, 1666, 1667, -1662, -1509]]
      }, {
        "type": "Polygon",
        "id": 55023,
        "arcs": [[-1597, 1668, 1669, -1629, -1538]]
      }, {
        "type": "Polygon",
        "id": 36011,
        "arcs": [[1670, 1671, 1672, 1673, 1674, 1675, -1544]]
      }, {
        "type": "Polygon",
        "id": 36091,
        "arcs": [[-1521, 1676, 1677, 1678, 1679, 1680, -1381, -1524]]
      }, {
        "type": "Polygon",
        "id": 46007,
        "arcs": [[1681, 1682, -1546, -1415]]
      }, {
        "type": "Polygon",
        "id": 46121,
        "arcs": [[-1527, 1683, -1682, -1455]]
      }, {
        "type": "Polygon",
        "id": 36073,
        "arcs": [[1684, 1685, 1686, 1687]]
      }, {
        "type": "Polygon",
        "id": 36063,
        "arcs": [[-1687, 1688, 1689, 1690]]
      }, {
        "type": "Polygon",
        "id": 36055,
        "arcs": [[1691, 1692, 1693, 1694, -1685, 1695]]
      }, {
        "type": "MultiPolygon",
        "id": 36117,
        "arcs": [[[1696, 1697, -1692, 1698, -1675]]]
      }, {
        "type": "Polygon",
        "id": 26087,
        "arcs": [[1699, 1700, 1701, 1702, -1532, -1551]]
      }, {
        "type": "Polygon",
        "id": 56023,
        "arcs": [[-1666, 1703, 1704, 1705, 1706, 1707, -1567, -1147]]
      }, {
        "type": "Polygon",
        "id": 50003,
        "arcs": [[-1432, 1708, 1709, 1710, 1711, -1519, -1458]]
      }, {
        "type": "Polygon",
        "id": 55025,
        "arcs": [[-1566, 1712, 1713, 1714, 1715, -1560, -1558]]
      }, {
        "type": "Polygon",
        "id": 26081,
        "arcs": [[1716, 1717, 1718, 1719, -1659, -1517, -1664]]
      }, {
        "type": "Polygon",
        "id": 36035,
        "arcs": [[-1681, 1720, -1392, -1382]]
      }, {
        "type": "MultiPolygon",
        "id": 33015,
        "arcs": [[[1721, 1722, 1723, -1582, -1591]]]
      }, {
        "type": "Polygon",
        "id": 36067,
        "arcs": [[1724, 1725, -1671, -1543]]
      }, {
        "type": "Polygon",
        "id": 50025,
        "arcs": [[-1589, 1726, 1727, -1709, -1431]]
      }, {
        "type": "Polygon",
        "id": 19167,
        "arcs": [[1728, 1729, 1730, -1634, -1625]]
      }, {
        "type": "Polygon",
        "id": 19141,
        "arcs": [[1731, 1732, -1729, -1615]]
      }, {
        "type": "Polygon",
        "id": 19033,
        "arcs": [[-1623, 1733, 1734, 1735, -1613]]
      }, {
        "type": "Polygon",
        "id": 19081,
        "arcs": [[-1736, 1736, -1608, -1603]]
      }, {
        "type": "Polygon",
        "id": 19147,
        "arcs": [[-1606, 1737, 1738, -1612]]
      }, {
        "type": "Polygon",
        "id": 19041,
        "arcs": [[-1739, 1739, -1732, -1609]]
      }, {
        "type": "Polygon",
        "id": 26049,
        "arcs": [[-1703, 1740, 1741, 1742, -1592, -1533]]
      }, {
        "type": "Polygon",
        "id": 19037,
        "arcs": [[-1633, 1743, 1744, 1745, -1628]]
      }, {
        "type": "Polygon",
        "id": 19067,
        "arcs": [[-1746, 1746, -1734, -1622]]
      }, {
        "type": "Polygon",
        "id": 55049,
        "arcs": [[-1561, -1716, 1747, 1748, 1749, -1595]]
      }, {
        "type": "Polygon",
        "id": 55043,
        "arcs": [[-1750, 1750, 1751, 1752, 1753, -1669, -1596]]
      }, {
        "type": "Polygon",
        "id": 33011,
        "arcs": [[-1724, 1754, 1755, 1756, 1757, -1587, -1583]]
      }, {
        "type": "Polygon",
        "id": 26139,
        "arcs": [[-1720, 1758, 1759, -1660]]
      }, {
        "type": "Polygon",
        "id": 16063,
        "arcs": [[1760, 1761, 1762, -1456, -1421]]
      }, {
        "type": "Polygon",
        "id": 16047,
        "arcs": [[-1763, 1763, 1764, -1388, -1457]]
      }, {
        "type": "Polygon",
        "id": 55055,
        "arcs": [[1765, 1766, 1767, -1713, -1565]]
      }, {
        "type": "Polygon",
        "id": 16067,
        "arcs": [[1768, 1769, -1761, -1420]]
      }, {
        "type": "Polygon",
        "id": 55133,
        "arcs": [[-1601, 1770, 1771, 1772, -1766, -1564]]
      }, {
        "type": "Polygon",
        "id": 55079,
        "arcs": [[1773, 1774, -1771, -1599]]
      }, {
        "type": "Polygon",
        "id": 36053,
        "arcs": [[-1580, 1775, 1776, 1777, -1725, -1542]]
      }, {
        "type": "Polygon",
        "id": 33005,
        "arcs": [[-1758, 1778, 1779, -1727, -1588]]
      }, {
        "type": "Polygon",
        "id": 46135,
        "arcs": [[1780, 1781, 1782, 1783, -1651, -1649]]
      }, {
        "type": "Polygon",
        "id": 46009,
        "arcs": [[-1784, 1784, -1644, -1652]]
      }, {
        "type": "Polygon",
        "id": 26155,
        "arcs": [[-1743, 1785, 1786, 1787, -1667, -1593]]
      }, {
        "type": "Polygon",
        "id": 36037,
        "arcs": [[1788, 1789, 1790, -1689, -1686, -1695]]
      }, {
        "type": "Polygon",
        "id": 26067,
        "arcs": [[1791, 1792, 1793, -1717, -1663]]
      }, {
        "type": "Polygon",
        "id": 26037,
        "arcs": [[-1788, 1794, 1795, -1792, -1668]]
      }, {
        "type": "Polygon",
        "id": 16077,
        "arcs": [[-1572, 1796, 1797, 1798, -1418]]
      }, {
        "type": "MultiPolygon",
        "id": 36029,
        "arcs": [[[1799]], [[-1791, 1800, 1801, 1802, 1803, -1690]]]
      }, {
        "type": "Polygon",
        "id": 46127,
        "arcs": [[-1731, 1804, 1805, 1806, 1807, 1808, -1635]]
      }, {
        "type": "Polygon",
        "id": 46027,
        "arcs": [[-1809, 1809, 1810, -1781, -1648, -1636]]
      }, {
        "type": "Polygon",
        "id": 19065,
        "arcs": [[1811, 1812, 1813, -1744, -1632]]
      }, {
        "type": "Polygon",
        "id": 19043,
        "arcs": [[-1670, -1754, 1814, 1815, -1812, -1630]]
      }, {
        "type": "Polygon",
        "id": 36057,
        "arcs": [[-1680, 1816, 1817, 1818, -1393, -1721]]
      }, {
        "type": "Polygon",
        "id": 36069,
        "arcs": [[1819, 1820, 1821, 1822, -1693, -1698]]
      }, {
        "type": "Polygon",
        "id": 16005,
        "arcs": [[1823, 1824, 1825, -1797, -1571]]
      }, {
        "type": "Polygon",
        "id": 16029,
        "arcs": [[-1568, -1708, 1826, 1827, -1824, -1570]]
      }, {
        "type": "Polygon",
        "id": 36099,
        "arcs": [[1828, 1829, 1830, -1820, -1697, -1674]]
      }, {
        "type": "Polygon",
        "id": 31165,
        "arcs": [[1831, 1832, 1833, -1618, -1658, 1834]]
      }, {
        "type": "Polygon",
        "id": 31161,
        "arcs": [[1835, 1836, 1837, 1838, 1839, -1547, 1840]]
      }, {
        "type": "Polygon",
        "id": 31045,
        "arcs": [[1841, -1835, -1657, -1548, -1840]]
      }, {
        "type": "Polygon",
        "id": 31015,
        "arcs": [[1842, 1843, 1844, -1655, -1646]]
      }, {
        "type": "Polygon",
        "id": 31103,
        "arcs": [[-1845, 1845, 1846, 1847, -1526, -1656]]
      }, {
        "type": "Polygon",
        "id": 31031,
        "arcs": [[-1684, -1848, 1848, 1849, 1850, 1851, 1852, -1841, -1683]]
      }, {
        "type": "Polygon",
        "id": 41029,
        "arcs": [[-1576, 1853, 1854, -1435]]
      }, {
        "type": "Polygon",
        "id": 36051,
        "arcs": [[-1823, 1855, 1856, 1857, -1789, -1694]]
      }, {
        "type": "Polygon",
        "id": 36083,
        "arcs": [[-1712, 1858, 1859, 1860, -1677, -1520]]
      }, {
        "type": "Polygon",
        "id": 36093,
        "arcs": [[1861, 1862, -1817, -1679]]
      }, {
        "type": "Polygon",
        "id": 41015,
        "arcs": [[-1437, 1863, 1864, 1865, -1585]]
      }, {
        "type": "Polygon",
        "id": 16083,
        "arcs": [[1866, 1867, 1868, -1554, -1389, -1765]]
      }, {
        "type": "Polygon",
        "id": 19149,
        "arcs": [[1869, 1870, -1805, -1730]]
      }, {
        "type": "Polygon",
        "id": 19021,
        "arcs": [[1871, 1872, 1873, -1740]]
      }, {
        "type": "Polygon",
        "id": 19035,
        "arcs": [[-1874, 1874, 1875, -1870, -1733]]
      }, {
        "type": "Polygon",
        "id": 19151,
        "arcs": [[1876, 1877, 1878, -1872, -1738]]
      }, {
        "type": "Polygon",
        "id": 19197,
        "arcs": [[1879, 1880, 1881, 1882, -1737]]
      }, {
        "type": "Polygon",
        "id": 19091,
        "arcs": [[-1883, 1883, -1877, -1605]]
      }, {
        "type": "Polygon",
        "id": 19069,
        "arcs": [[1884, 1885, -1880, -1735]]
      }, {
        "type": "Polygon",
        "id": 19023,
        "arcs": [[1886, 1887, 1888, -1885, -1747]]
      }, {
        "type": "Polygon",
        "id": 19017,
        "arcs": [[-1814, 1889, -1887, -1745]]
      }, {
        "type": "Polygon",
        "id": 36077,
        "arcs": [[-1819, 1890, 1891, 1892, -1776, -1579, -1394]]
      }, {
        "type": "Polygon",
        "id": 31089,
        "arcs": [[1893, 1894, 1895, 1896, 1897, 1898, -1844]]
      }, {
        "type": "Polygon",
        "id": 26099,
        "arcs": [[1899, 1900, 1901, -1701, 1902]]
      }, {
        "type": "Polygon",
        "id": 26125,
        "arcs": [[1903, 1904, 1905, -1741, -1702, -1902]]
      }, {
        "type": "MultiPolygon",
        "id": 25009,
        "arcs": [[[1906, 1907, 1908, -1755, -1723]]]
      }, {
        "type": "Polygon",
        "id": 31107,
        "arcs": [[-1785, -1783, 1909, 1910, 1911, -1894, -1843, -1645]]
      }, {
        "type": "Polygon",
        "id": 31027,
        "arcs": [[-1811, 1912, 1913, 1914, -1910, -1782]]
      }, {
        "type": "Polygon",
        "id": 36121,
        "arcs": [[-1858, 1915, 1916, -1801, -1790]]
      }, {
        "type": "Polygon",
        "id": 55045,
        "arcs": [[1917, 1918, 1919, 1920, -1748, -1715]]
      }, {
        "type": "Polygon",
        "id": 16053,
        "arcs": [[-1770, 1921, -1867, -1764, -1762]]
      }, {
        "type": "Polygon",
        "id": 55105,
        "arcs": [[-1768, 1922, 1923, 1924, -1918, -1714]]
      }, {
        "type": "Polygon",
        "id": 31017,
        "arcs": [[1925, 1926, 1927, -1849, -1847]]
      }, {
        "type": "Polygon",
        "id": 55127,
        "arcs": [[-1773, 1928, 1929, 1930, 1931, -1923, -1767]]
      }, {
        "type": "Polygon",
        "id": 55101,
        "arcs": [[1932, 1933, -1929, -1772, -1775]]
      }, {
        "type": "Polygon",
        "id": 36095,
        "arcs": [[-1863, 1934, 1935, 1936, -1891, -1818]]
      }, {
        "type": "Polygon",
        "id": 36001,
        "arcs": [[-1861, 1937, -1935, -1862, -1678]]
      }, {
        "type": "Polygon",
        "id": 55065,
        "arcs": [[-1921, 1938, 1939, -1751, -1749]]
      }, {
        "type": "Polygon",
        "id": 31149,
        "arcs": [[1940, -1926, -1846, -1899]]
      }, {
        "type": "Polygon",
        "id": 36023,
        "arcs": [[1941, 1942, -1672, -1726, -1778, 1943, 1944]]
      }, {
        "type": "Polygon",
        "id": 41033,
        "arcs": [[-1436, -1855, 1945, 1946, -1864]]
      }, {
        "type": "Polygon",
        "id": 26093,
        "arcs": [[-1906, 1947, 1948, 1949, -1786, -1742]]
      }, {
        "type": "Polygon",
        "id": 26065,
        "arcs": [[-1950, 1950, 1951, -1795, -1787]]
      }, {
        "type": "Polygon",
        "id": 26045,
        "arcs": [[-1796, -1952, 1952, 1953, 1954, -1793]]
      }, {
        "type": "Polygon",
        "id": 26015,
        "arcs": [[-1955, 1955, 1956, 1957, -1718, -1794]]
      }, {
        "type": "Polygon",
        "id": 26005,
        "arcs": [[-1719, -1958, 1958, 1959, 1960, -1759]]
      }, {
        "type": "Polygon",
        "id": 36123,
        "arcs": [[1961, 1962, -1821, -1831]]
      }, {
        "type": "Polygon",
        "id": 31051,
        "arcs": [[-1808, 1963, 1964, 1965, -1913, -1810]]
      }, {
        "type": "Polygon",
        "id": 25003,
        "arcs": [[1966, 1967, 1968, 1969, 1970, 1971, -1859, -1711]]
      }, {
        "type": "Polygon",
        "id": 36017,
        "arcs": [[-1893, 1972, 1973, -1944, -1777]]
      }, {
        "type": "Polygon",
        "id": 25011,
        "arcs": [[1974, -1967, -1710, -1728, -1780, 1975]]
      }, {
        "type": "Polygon",
        "id": 25017,
        "arcs": [[1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, -1756, -1909]]
      }, {
        "type": "Polygon",
        "id": 25027,
        "arcs": [[-1757, -1985, 1985, 1986, 1987, 1988, 1989, 1990, -1976, -1779]]
      }, {
        "type": "Polygon",
        "id": 16031,
        "arcs": [[-1799, 1991, 1992, 1993, -1868, -1922, -1769, -1419]]
      }, {
        "type": "Polygon",
        "id": 19061,
        "arcs": [[1994, 1995, 1996, 1997, -1815, -1753]]
      }, {
        "type": "Polygon",
        "id": 55059,
        "arcs": [[1998, 1999, 2000, -1930, -1934]]
      }, {
        "type": "Polygon",
        "id": 19055,
        "arcs": [[-1998, 2001, 2002, 2003, -1816]]
      }, {
        "type": "Polygon",
        "id": 19187,
        "arcs": [[-1882, 2004, 2005, 2006, 2007, -1878, -1884]]
      }, {
        "type": "Polygon",
        "id": 19019,
        "arcs": [[-2004, 2008, 2009, 2010, -1813]]
      }, {
        "type": "Polygon",
        "id": 19013,
        "arcs": [[-2011, 2011, 2012, 2013, -1888, -1890]]
      }, {
        "type": "Polygon",
        "id": 36109,
        "arcs": [[-1943, 2014, 2015, 2016, -1829, -1673]]
      }, {
        "type": "Polygon",
        "id": 56015,
        "arcs": [[-1834, 2017, 2018, 2019, 2020, -1619]]
      }, {
        "type": "Polygon",
        "id": 56031,
        "arcs": [[-2021, 2021, 2022, -1638, -1620]]
      }, {
        "type": "Polygon",
        "id": 16007,
        "arcs": [[-1707, 2023, 2024, -1827]]
      }, {
        "type": "Polygon",
        "id": 36101,
        "arcs": [[-1822, -1963, 2025, 2026, 2027, 2028, 2029, -1856]]
      }, {
        "type": "Polygon",
        "id": 36013,
        "arcs": [[2030, 2031, 2032, 2033, -1803]]
      }, {
        "type": "Polygon",
        "id": 19193,
        "arcs": [[-1876, 2034, 2035, 2036, 2037, -1806, -1871]]
      }, {
        "type": "Polygon",
        "id": 19161,
        "arcs": [[2038, 2039, 2040, 2041, -1873]]
      }, {
        "type": "Polygon",
        "id": 19093,
        "arcs": [[-2042, 2042, -2035, -1875]]
      }, {
        "type": "Polygon",
        "id": 19025,
        "arcs": [[-2008, 2043, 2044, -2039, -1879]]
      }, {
        "type": "Polygon",
        "id": 19079,
        "arcs": [[2045, 2046, 2047, -2005, -1881]]
      }, {
        "type": "Polygon",
        "id": 19083,
        "arcs": [[-1886, 2048, 2049, 2050, -2046]]
      }, {
        "type": "Polygon",
        "id": 19075,
        "arcs": [[-2014, 2051, 2052, -2049, -1889]]
      }, {
        "type": "Polygon",
        "id": 25015,
        "arcs": [[-1991, 2053, -1968, -1975]]
      }, {
        "type": "Polygon",
        "id": 36097,
        "arcs": [[-2017, 2054, -2026, -1962, -1830]]
      }, {
        "type": "Polygon",
        "id": 36009,
        "arcs": [[-1917, 2055, 2056, 2057, -2031, -1802]]
      }, {
        "type": "Polygon",
        "id": 31043,
        "arcs": [[-1807, -2038, 2058, -1964]]
      }, {
        "type": "Polygon",
        "id": 36003,
        "arcs": [[-1857, -2030, 2059, 2060, -2056, -1916]]
      }, {
        "type": "Polygon",
        "id": 36025,
        "arcs": [[-1937, 2061, 2062, 2063, 2064, 2065, -1973, -1892]]
      }, {
        "type": "Polygon",
        "id": 17085,
        "arcs": [[-1940, 2066, 2067, 2068, -1995, -1752]]
      }, {
        "type": "Polygon",
        "id": 36021,
        "arcs": [[2069, 2070, 2071, -1860, -1972]]
      }, {
        "type": "Polygon",
        "id": 17177,
        "arcs": [[2072, -2067, -1939, -1920, 2073, 2074]]
      }, {
        "type": "Polygon",
        "id": 17201,
        "arcs": [[2075, 2076, -2074, -1919, -1925]]
      }, {
        "type": "Polygon",
        "id": 16071,
        "arcs": [[-1826, 2077, 2078, 2079, -1992, -1798]]
      }, {
        "type": "Polygon",
        "id": 17111,
        "arcs": [[2080, 2081, 2082, 2083, 2084, -1931, -2001]]
      }, {
        "type": "Polygon",
        "id": 17007,
        "arcs": [[-1932, -2085, 2085, -2076, -1924]]
      }, {
        "type": "Polygon",
        "id": 17097,
        "arcs": [[2086, -2081, -2000, 2087]]
      }, {
        "type": "Polygon",
        "id": 36039,
        "arcs": [[2088, -2062, -1936, -1938, -2072]]
      }, {
        "type": "MultiPolygon",
        "id": 25025,
        "arcs": [[[2089, 2090, -1983, 2091, -1981]], [[-1979, 2092]], [[2093, -1977, -1908]]]
      }, {
        "type": "Polygon",
        "id": 31139,
        "arcs": [[2094, 2095, 2096, -1911, -1915]]
      }, {
        "type": "Polygon",
        "id": 31013,
        "arcs": [[2097, 2098, -1832, -1842, -1839]]
      }, {
        "type": "Polygon",
        "id": 31003,
        "arcs": [[-2097, 2099, 2100, 2101, -1895, -1912]]
      }, {
        "type": "Polygon",
        "id": 26161,
        "arcs": [[2102, 2103, 2104, -1948, -1905, 2105]]
      }, {
        "type": "Polygon",
        "id": 56007,
        "arcs": [[-1640, 2106, 2107, 2108, 2109, 2110, -1406, -1654]]
      }, {
        "type": "Polygon",
        "id": 56001,
        "arcs": [[-2023, 2111, 2112, 2113, -2107, -1639]]
      }, {
        "type": "Polygon",
        "id": 16041,
        "arcs": [[-2025, 2114, -2078, -1825, -1828]]
      }, {
        "type": "Polygon",
        "id": 26075,
        "arcs": [[-1949, -2105, 2115, 2116, 2117, -1953, -1951]]
      }, {
        "type": "Polygon",
        "id": 26025,
        "arcs": [[-2118, 2118, 2119, 2120, -1956, -1954]]
      }, {
        "type": "Polygon",
        "id": 26159,
        "arcs": [[2121, 2122, 2123, 2124, -1960]]
      }, {
        "type": "Polygon",
        "id": 26077,
        "arcs": [[-2121, 2125, -2122, -1959, -1957]]
      }, {
        "type": "Polygon",
        "id": 36007,
        "arcs": [[-2066, 2126, 2127, 2128, -1945, -1974]]
      }, {
        "type": "Polygon",
        "id": 36107,
        "arcs": [[-2129, 2129, 2130, 2131, -2015, -1942]]
      }, {
        "type": "Polygon",
        "id": 19097,
        "arcs": [[-2069, 2132, 2133, 2134, -1996]]
      }, {
        "type": "Polygon",
        "id": 31179,
        "arcs": [[-1966, 2135, 2136, 2137, -2095, -1914]]
      }, {
        "type": "MultiPolygon",
        "id": 25021,
        "arcs": [[[2138, 2139]], [[-2091, 2140, 2141, 2142, 2143, -1986, -1984]], [[-1982, -2092]]]
      }, {
        "type": "Polygon",
        "id": 25013,
        "arcs": [[-1990, 2144, 2145, 2146, -1969, -2054]]
      }, {
        "type": "MultiPolygon",
        "id": 25023,
        "arcs": [[[-2140, 2147, 2148, 2149, 2150, -2142, 2151]]]
      }, {
        "type": "Polygon",
        "id": 19011,
        "arcs": [[2152, 2153, 2154, -2012, -2010]]
      }, {
        "type": "Polygon",
        "id": 19113,
        "arcs": [[-2003, 2155, 2156, 2157, -2153, -2009]]
      }, {
        "type": "Polygon",
        "id": 19171,
        "arcs": [[-2155, 2158, 2159, -2052, -2013]]
      }, {
        "type": "Polygon",
        "id": 19105,
        "arcs": [[-1997, -2135, 2160, 2161, -2156, -2002]]
      }, {
        "type": "Polygon",
        "id": 36015,
        "arcs": [[-2016, -2132, 2162, 2163, -2027, -2055]]
      }, {
        "type": "Polygon",
        "id": 31173,
        "arcs": [[-2037, 2164, 2165, 2166, -2136, -1965, -2059]]
      }, {
        "type": "Polygon",
        "id": 56037,
        "arcs": [[-1407, -2111, 2167, 2168, 2169, 2170, -1704, -1665]]
      }, {
        "type": "Polygon",
        "id": 42049,
        "arcs": [[2171, 2172, 2173, 2174, -2033]]
      }, {
        "type": "Polygon",
        "id": 26021,
        "arcs": [[2175, 2176, 2177, 2178, -2124]]
      }, {
        "type": "Polygon",
        "id": 19133,
        "arcs": [[2179, 2180, 2181, -2165, -2036]]
      }, {
        "type": "Polygon",
        "id": 19127,
        "arcs": [[-2160, 2182, 2183, -2050, -2053]]
      }, {
        "type": "Polygon",
        "id": 19027,
        "arcs": [[-2045, 2184, 2185, 2186, 2187, -2040]]
      }, {
        "type": "Polygon",
        "id": 19047,
        "arcs": [[-2043, -2041, -2188, 2188, 2189, -2180]]
      }, {
        "type": "Polygon",
        "id": 19015,
        "arcs": [[-2048, 2190, 2191, 2192, 2193, -2006]]
      }, {
        "type": "Polygon",
        "id": 19073,
        "arcs": [[-2194, 2194, 2195, -2185, -2044, -2007]]
      }, {
        "type": "Polygon",
        "id": 19169,
        "arcs": [[-2051, -2184, 2196, 2197, -2191, -2047]]
      }, {
        "type": "Polygon",
        "id": 17141,
        "arcs": [[2198, 2199, 2200, 2201, -2075, -2077]]
      }, {
        "type": "Polygon",
        "id": 17015,
        "arcs": [[-2202, 2202, 2203, -2133, -2068, -2073]]
      }, {
        "type": "Polygon",
        "id": 36111,
        "arcs": [[-2071, 2204, 2205, 2206, -2063, -2089]]
      }, {
        "type": "Polygon",
        "id": 17031,
        "arcs": [[-2087, 2207, 2208, 2209, 2210, 2211, -2082]]
      }, {
        "type": "Polygon",
        "id": 17037,
        "arcs": [[2212, 2213, 2214, 2215, -2199, -2086, -2084]]
      }, {
        "type": "Polygon",
        "id": 17089,
        "arcs": [[-2212, 2216, 2217, -2213, -2083]]
      }, {
        "type": "Polygon",
        "id": 31075,
        "arcs": [[2218, 2219, 2220, -1836, -1853]]
      }, {
        "type": "MultiPolygon",
        "id": 25005,
        "arcs": [[[2221, 2222, 2223, 2224, 2225, -2143, -2151]]]
      }, {
        "type": "Polygon",
        "id": 31091,
        "arcs": [[2226, 2227, 2228, -2219, -1852]]
      }, {
        "type": "Polygon",
        "id": 31039,
        "arcs": [[-2167, 2229, 2230, 2231, 2232, -2137]]
      }, {
        "type": "Polygon",
        "id": 31119,
        "arcs": [[2233, 2234, 2235, -2100, -2096]]
      }, {
        "type": "Polygon",
        "id": 31167,
        "arcs": [[-2233, 2236, 2237, -2234, -2138]]
      }, {
        "type": "Polygon",
        "id": 31171,
        "arcs": [[2238, 2239, 2240, -2227, -1851]]
      }, {
        "type": "Polygon",
        "id": 31183,
        "arcs": [[2241, 2242, 2243, 2244, -1896, -2102]]
      }, {
        "type": "Polygon",
        "id": 31009,
        "arcs": [[-1850, -1928, 2245, 2246, 2247, -2239]]
      }, {
        "type": "Polygon",
        "id": 31115,
        "arcs": [[2248, 2249, -2246, -1927, -1941, -1898]]
      }, {
        "type": "Polygon",
        "id": 31071,
        "arcs": [[-2245, 2250, 2251, -2249, -1897]]
      }, {
        "type": "Polygon",
        "id": 26091,
        "arcs": [[2252, 2253, 2254, 2255, -2116, -2104]]
      }, {
        "type": "Polygon",
        "id": 36027,
        "arcs": [[-1971, 2256, 2257, 2258, 2259, -2205, -2070]]
      }, {
        "type": "MultiPolygon",
        "id": 25001,
        "arcs": [[[2260, -2149, 2261]]]
      }, {
        "type": "Polygon",
        "id": 26023,
        "arcs": [[2262, 2263, 2264, 2265, -2120]]
      }, {
        "type": "Polygon",
        "id": 26059,
        "arcs": [[-2256, 2266, 2267, 2268, -2263, -2119, -2117]]
      }, {
        "type": "Polygon",
        "id": 26149,
        "arcs": [[-2266, 2269, 2270, 2271, -2126]]
      }, {
        "type": "Polygon",
        "id": 26027,
        "arcs": [[-2272, 2272, 2273, -2176, -2123]]
      }, {
        "type": "Polygon",
        "id": 9005,
        "arcs": [[-2147, 2274, 2275, 2276, -2257, -1970]]
      }, {
        "type": "Polygon",
        "id": 31021,
        "arcs": [[2277, 2278, 2279, -2230, -2166, -2182]]
      }, {
        "type": "Polygon",
        "id": 9003,
        "arcs": [[2280, 2281, 2282, 2283, -2275, -2146]]
      }, {
        "type": "Polygon",
        "id": 9013,
        "arcs": [[-1989, 2284, 2285, -2281, -2145]]
      }, {
        "type": "Polygon",
        "id": 19045,
        "arcs": [[-2204, 2286, 2287, 2288, 2289, -2161, -2134]]
      }, {
        "type": "Polygon",
        "id": 9015,
        "arcs": [[2290, 2291, 2292, -2285, -1988]]
      }, {
        "type": "Polygon",
        "id": 44007,
        "arcs": [[-2226, 2293, 2294, 2295, -2291, -1987, -2144]]
      }, {
        "type": "Polygon",
        "id": 36105,
        "arcs": [[2296, 2297, 2298, -2064, -2207]]
      }, {
        "type": "Polygon",
        "id": 6093,
        "arcs": [[-1575, 2299, 2300, 2301, 2302, 2303, -1946, -1854]]
      }, {
        "type": "Polygon",
        "id": 31069,
        "arcs": [[-2221, 2304, 2305, 2306, 2307, 2308, -1837]]
      }, {
        "type": "Polygon",
        "id": 31123,
        "arcs": [[-2309, 2309, 2310, 2311, -2098, -1838]]
      }, {
        "type": "Polygon",
        "id": 49005,
        "arcs": [[2312, 2313, 2314, -2079, -2115]]
      }, {
        "type": "Polygon",
        "id": 31157,
        "arcs": [[-2312, 2315, -2018, -1833, -2099]]
      }, {
        "type": "Polygon",
        "id": 49033,
        "arcs": [[-1706, 2316, 2317, 2318, 2319, -2313, -2024]]
      }, {
        "type": "Polygon",
        "id": 42015,
        "arcs": [[-2163, -2131, 2320, 2321, 2322, 2323, 2324]]
      }, {
        "type": "Polygon",
        "id": 42117,
        "arcs": [[-2164, -2325, 2325, 2326, -2028]]
      }, {
        "type": "Polygon",
        "id": 49003,
        "arcs": [[2327, 2328, 2329, -1993, -2080, -2315]]
      }, {
        "type": "Polygon",
        "id": 32013,
        "arcs": [[2330, 2331, 2332, -1402, -1238, -1556, 2333]]
      }, {
        "type": "Polygon",
        "id": 32007,
        "arcs": [[-1994, -2330, 2334, 2335, 2336, 2337, -2334, -1555, -1869]]
      }, {
        "type": "Polygon",
        "id": 42083,
        "arcs": [[-2061, 2338, 2339, 2340, 2341, -2057]]
      }, {
        "type": "Polygon",
        "id": 42105,
        "arcs": [[-2029, -2327, 2342, 2343, 2344, -2339, -2060]]
      }, {
        "type": "Polygon",
        "id": 6015,
        "arcs": [[-2304, 2345, 2346, -1865, -1947]]
      }, {
        "type": "Polygon",
        "id": 42127,
        "arcs": [[-2065, -2299, 2347, 2348, 2349, 2350, -2127]]
      }, {
        "type": "Polygon",
        "id": 42115,
        "arcs": [[2351, 2352, -2321, -2130, -2128, -2351]]
      }, {
        "type": "Polygon",
        "id": 42123,
        "arcs": [[-2342, 2353, 2354, 2355, -2172, -2032, -2058]]
      }, {
        "type": "Polygon",
        "id": 6049,
        "arcs": [[-1578, 2356, 2357, 2358, -2300, -1574]]
      }, {
        "type": "Polygon",
        "id": 32031,
        "arcs": [[2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, -2357, -1577, -1403, -2333]]
      }, {
        "type": "Polygon",
        "id": 17043,
        "arcs": [[2368, 2369, -2217, -2211]]
      }, {
        "type": "Polygon",
        "id": 39007,
        "arcs": [[2370, 2371, 2372, 2373, 2374, -2174]]
      }, {
        "type": "Polygon",
        "id": 19031,
        "arcs": [[-2162, -2290, 2375, 2376, 2377, -2157]]
      }, {
        "type": "Polygon",
        "id": 17195,
        "arcs": [[-2201, 2378, 2379, 2380, 2381, -2287, -2203]]
      }, {
        "type": "Polygon",
        "id": 31011,
        "arcs": [[-2236, 2382, 2383, 2384, -2242, -2101]]
      }, {
        "type": "Polygon",
        "id": 17103,
        "arcs": [[-2216, 2385, 2386, -2379, -2200]]
      }, {
        "type": "Polygon",
        "id": 19085,
        "arcs": [[-2190, 2387, 2388, 2389, -2278, -2181]]
      }, {
        "type": "Polygon",
        "id": 19095,
        "arcs": [[2390, 2391, 2392, 2393, -2154]]
      }, {
        "type": "Polygon",
        "id": 19049,
        "arcs": [[2394, 2395, 2396, -2195, -2193]]
      }, {
        "type": "Polygon",
        "id": 19165,
        "arcs": [[2397, 2398, 2399, -2388, -2189]]
      }, {
        "type": "Polygon",
        "id": 19009,
        "arcs": [[2400, 2401, -2398, -2187]]
      }, {
        "type": "Polygon",
        "id": 19157,
        "arcs": [[-2394, 2402, 2403, 2404, -2159]]
      }, {
        "type": "Polygon",
        "id": 19153,
        "arcs": [[-2198, 2405, 2406, 2407, -2395, -2192]]
      }, {
        "type": "Polygon",
        "id": 19099,
        "arcs": [[-2183, -2405, 2408, 2409, -2406, -2197]]
      }, {
        "type": "Polygon",
        "id": 19077,
        "arcs": [[-2397, 2410, -2401, -2186, -2196]]
      }, {
        "type": "Polygon",
        "id": 19103,
        "arcs": [[-2378, 2411, 2412, 2413, -2391, -2158]]
      }, {
        "type": "Polygon",
        "id": 39085,
        "arcs": [[2414, 2415, 2416, -2374]]
      }, {
        "type": "Polygon",
        "id": 42039,
        "arcs": [[-2356, 2417, 2418, 2419, -2371, -2173]]
      }, {
        "type": "Polygon",
        "id": 17161,
        "arcs": [[2420, 2421, 2422, 2423, 2424, -2288, -2382]]
      }, {
        "type": "Polygon",
        "id": 44001,
        "arcs": [[2425, -2294, -2225]]
      }, {
        "type": "Polygon",
        "id": 19163,
        "arcs": [[-2425, 2426, -2376, -2289]]
      }, {
        "type": "Polygon",
        "id": 44003,
        "arcs": [[2427, 2428, 2429, -2292, -2296]]
      }, {
        "type": "Polygon",
        "id": 18039,
        "arcs": [[2430, 2431, 2432, 2433, 2434, -2273, -2271]]
      }, {
        "type": "Polygon",
        "id": 18141,
        "arcs": [[2435, 2436, 2437, -2177, -2274, -2435]]
      }, {
        "type": "Polygon",
        "id": 18091,
        "arcs": [[2438, 2439, 2440, -2178, -2438]]
      }, {
        "type": "Polygon",
        "id": 18151,
        "arcs": [[2441, 2442, -2264, -2269, 2443]]
      }, {
        "type": "Polygon",
        "id": 18087,
        "arcs": [[2444, -2431, -2270, -2265, -2443]]
      }, {
        "type": "Polygon",
        "id": 31037,
        "arcs": [[-2232, 2445, 2446, 2447, -2237]]
      }, {
        "type": "Polygon",
        "id": 31141,
        "arcs": [[-2448, 2448, 2449, 2450, 2451, -2383, -2235, -2238]]
      }, {
        "type": "Polygon",
        "id": 31053,
        "arcs": [[-2280, 2452, 2453, 2454, 2455, -2446, -2231]]
      }, {
        "type": "Polygon",
        "id": 31117,
        "arcs": [[-2241, 2456, 2457, 2458, 2459, -2228]]
      }, {
        "type": "Polygon",
        "id": 31005,
        "arcs": [[-2460, 2460, -2305, -2220, -2229]]
      }, {
        "type": "Polygon",
        "id": 31077,
        "arcs": [[2461, 2462, 2463, 2464, -2243, -2385]]
      }, {
        "type": "Polygon",
        "id": 31041,
        "arcs": [[-2252, 2465, 2466, 2467, 2468, 2469, 2470, -2247, -2250]]
      }, {
        "type": "Polygon",
        "id": 31113,
        "arcs": [[-2248, -2471, 2471, -2457, -2240]]
      }, {
        "type": "Polygon",
        "id": 31175,
        "arcs": [[-2244, -2465, 2472, -2466, -2251]]
      }, {
        "type": "MultiPolygon",
        "id": 39095,
        "arcs": [[[2473, 2474, 2475, 2476, -2254, 2477, 2478, 2479, 2480, 2481, 2482]]]
      }, {
        "type": "Polygon",
        "id": 17197,
        "arcs": [[-2210, 2483, 2484, 2485, 2486, -2369]]
      }, {
        "type": "MultiPolygon",
        "id": 39123,
        "arcs": [[[2487, 2488, 2489, 2490, 2491, -2474]]]
      }, {
        "type": "Polygon",
        "id": 17093,
        "arcs": [[-2487, 2492, 2493, -2214, -2218, -2370]]
      }, {
        "type": "Polygon",
        "id": 39051,
        "arcs": [[2494, 2495, -2267, -2255, -2477]]
      }, {
        "type": "Polygon",
        "id": 39055,
        "arcs": [[2496, 2497, 2498, -2415, -2373]]
      }, {
        "type": "MultiPolygon",
        "id": 9011,
        "arcs": [[[-2430, 2499, 2500, 2501, -2282, -2286, -2293]]]
      }, {
        "type": "Polygon",
        "id": 18089,
        "arcs": [[2502, 2503, 2504, 2505, -2484, -2209, 2506]]
      }, {
        "type": "Polygon",
        "id": 18127,
        "arcs": [[2507, -2503, 2508, -2440]]
      }, {
        "type": "Polygon",
        "id": 39171,
        "arcs": [[2509, 2510, 2511, -2444, -2268, -2496]]
      }, {
        "type": "Polygon",
        "id": 31007,
        "arcs": [[-2311, 2512, 2513, 2514, -2019, -2316]]
      }, {
        "type": "Polygon",
        "id": 31177,
        "arcs": [[-2390, 2515, 2516, -2453, -2279]]
      }, {
        "type": "MultiPolygon",
        "id": 44005,
        "arcs": [[[2517]], [[2518, -2223]]]
      }, {
        "type": "MultiPolygon",
        "id": 9001,
        "arcs": [[[2519, 2520, 2521, 2522, -2258, -2277]]]
      }, {
        "type": "Polygon",
        "id": 56021,
        "arcs": [[-2020, -2515, 2523, 2524, 2525, -2112, -2022]]
      }, {
        "type": "MultiPolygon",
        "id": 44009,
        "arcs": [[[-2500, -2429, 2526]]]
      }, {
        "type": "Polygon",
        "id": 42131,
        "arcs": [[-2353, 2527, 2528, 2529, -2322]]
      }, {
        "type": "MultiPolygon",
        "id": 9007,
        "arcs": [[[2530, 2531]], [[-2502, 2532, 2533, -2283]]]
      }, {
        "type": "Polygon",
        "id": 9009,
        "arcs": [[-2534, 2534, -2531, 2535, -2520, -2276, -2284]]
      }, {
        "type": "Polygon",
        "id": 42069,
        "arcs": [[-2350, 2536, 2537, -2528, -2352]]
      }, {
        "type": "Polygon",
        "id": 36071,
        "arcs": [[-2260, 2538, 2539, 2540, 2541, 2542, -2297, -2206]]
      }, {
        "type": "Polygon",
        "id": 17099,
        "arcs": [[-2494, 2543, 2544, 2545, 2546, 2547, 2548, -2386, -2215]]
      }, {
        "type": "Polygon",
        "id": 39035,
        "arcs": [[-2499, 2549, 2550, 2551, 2552, 2553, -2416]]
      }, {
        "type": "Polygon",
        "id": 42047,
        "arcs": [[2554, 2555, 2556, 2557, -2341]]
      }, {
        "type": "Polygon",
        "id": 42053,
        "arcs": [[-2558, 2558, 2559, 2560, -2354]]
      }, {
        "type": "Polygon",
        "id": 42121,
        "arcs": [[2561, 2562, 2563, -2418, -2355, -2561]]
      }, {
        "type": "MultiPolygon",
        "id": 39043,
        "arcs": [[[2564, 2565, 2566, 2567]]]
      }, {
        "type": "Polygon",
        "id": 39173,
        "arcs": [[-2492, 2568, 2569, 2570, 2571, -2475]]
      }, {
        "type": "Polygon",
        "id": 42023,
        "arcs": [[-2345, 2572, 2573, -2555, -2340]]
      }, {
        "type": "Polygon",
        "id": 42103,
        "arcs": [[-2543, 2574, 2575, -2348, -2298]]
      }, {
        "type": "Polygon",
        "id": 19139,
        "arcs": [[-2377, -2427, -2424, 2576, -2412]]
      }, {
        "type": "Polygon",
        "id": 42081,
        "arcs": [[2577, 2578, 2579, 2580, 2581, 2582, -2343, -2326, -2324]]
      }, {
        "type": "Polygon",
        "id": 42113,
        "arcs": [[-2578, -2323, -2530, 2583, 2584]]
      }, {
        "type": "Polygon",
        "id": 17011,
        "arcs": [[-2549, 2585, 2586, 2587, 2588, -2380, -2387]]
      }, {
        "type": "Polygon",
        "id": 17073,
        "arcs": [[-2589, 2589, 2590, 2591, -2421, -2381]]
      }, {
        "type": "Polygon",
        "id": 56041,
        "arcs": [[-2171, 2592, -2317, -1705]]
      }, {
        "type": "Polygon",
        "id": 18033,
        "arcs": [[2593, 2594, 2595, -2442, -2512]]
      }, {
        "type": "Polygon",
        "id": 18113,
        "arcs": [[-2596, 2596, 2597, 2598, -2432, -2445]]
      }, {
        "type": "Polygon",
        "id": 31125,
        "arcs": [[2599, 2600, -2462, -2384, -2452]]
      }, {
        "type": "Polygon",
        "id": 36079,
        "arcs": [[2601, 2602, -2539, -2259, -2523, 2603]]
      }, {
        "type": "MultiPolygon",
        "id": 25007,
        "arcs": [[[2604]]]
      }, {
        "type": "Polygon",
        "id": 39093,
        "arcs": [[-2553, 2605, 2606, 2607, -2565, 2608]]
      }, {
        "type": "Polygon",
        "id": 19183,
        "arcs": [[2609, 2610, 2611, 2612, -2392, -2414]]
      }, {
        "type": "Polygon",
        "id": 19181,
        "arcs": [[2613, 2614, 2615, 2616, -2408]]
      }, {
        "type": "Polygon",
        "id": 19107,
        "arcs": [[-2613, 2617, 2618, 2619, -2403, -2393]]
      }, {
        "type": "Polygon",
        "id": 19121,
        "arcs": [[2620, 2621, 2622, -2396, -2617]]
      }, {
        "type": "Polygon",
        "id": 19123,
        "arcs": [[-2620, 2623, 2624, 2625, -2409, -2404]]
      }, {
        "type": "Polygon",
        "id": 19125,
        "arcs": [[-2626, 2626, 2627, -2614, -2407, -2410]]
      }, {
        "type": "Polygon",
        "id": 19155,
        "arcs": [[-2400, 2628, 2629, 2630, 2631, 2632, -2516, -2389]]
      }, {
        "type": "Polygon",
        "id": 19029,
        "arcs": [[-2402, 2633, 2634, 2635, -2629, -2399]]
      }, {
        "type": "Polygon",
        "id": 19001,
        "arcs": [[-2411, -2623, 2636, 2637, -2634]]
      }, {
        "type": "Polygon",
        "id": 39155,
        "arcs": [[-2420, 2638, 2639, 2640, -2497, -2372]]
      }, {
        "type": "MultiPolygon",
        "id": 39143,
        "arcs": [[[-2489, 2641]], [[2642, -2567, 2643, 2644, -2569, -2491]]]
      }, {
        "type": "Polygon",
        "id": 42085,
        "arcs": [[-2564, 2645, 2646, 2647, -2639, -2419]]
      }, {
        "type": "Polygon",
        "id": 39069,
        "arcs": [[-2476, -2572, 2648, 2649, -2510, -2495]]
      }, {
        "type": "Polygon",
        "id": 18099,
        "arcs": [[-2434, 2650, 2651, 2652, -2436]]
      }, {
        "type": "Polygon",
        "id": 42035,
        "arcs": [[-2583, 2653, 2654, 2655, -2573, -2344]]
      }, {
        "type": "MultiPolygon",
        "id": 6023,
        "arcs": [[[-2303, 2656, 2657, 2658, -2346]]]
      }, {
        "type": "Polygon",
        "id": 17063,
        "arcs": [[2659, 2660, -2544, -2493, -2486]]
      }, {
        "type": "Polygon",
        "id": 31023,
        "arcs": [[-2456, 2661, 2662, 2663, 2664, -2449, -2447]]
      }, {
        "type": "Polygon",
        "id": 31155,
        "arcs": [[2665, 2666, 2667, 2668, -2662, -2455]]
      }, {
        "type": "Polygon",
        "id": 18085,
        "arcs": [[-2599, 2669, 2670, 2671, -2651, -2433]]
      }, {
        "type": "Polygon",
        "id": 31033,
        "arcs": [[-2308, 2672, 2673, 2674, 2675, -2513, -2310]]
      }, {
        "type": "Polygon",
        "id": 42031,
        "arcs": [[2676, 2677, 2678, -2562, -2560]]
      }, {
        "type": "Polygon",
        "id": 49057,
        "arcs": [[-2314, -2320, 2679, 2680, -2328]]
      }, {
        "type": "Polygon",
        "id": 18149,
        "arcs": [[-2653, 2681, 2682, -2439, -2437]]
      }, {
        "type": "Polygon",
        "id": 42079,
        "arcs": [[2683, 2684, 2685, 2686, -2584, -2529, -2538]]
      }, {
        "type": "Polygon",
        "id": 39039,
        "arcs": [[2687, 2688, 2689, -2594, -2511, -2650]]
      }, {
        "type": "Polygon",
        "id": 19115,
        "arcs": [[-2577, -2423, 2690, 2691, 2692, -2610, -2413]]
      }, {
        "type": "Polygon",
        "id": 31101,
        "arcs": [[2693, 2694, 2695, -2306, -2461, -2459]]
      }, {
        "type": "Polygon",
        "id": 31111,
        "arcs": [[-2472, -2470, 2696, 2697, 2698, 2699, -2694, -2458]]
      }, {
        "type": "MultiPolygon",
        "id": 25019,
        "arcs": [[[2700]]]
      }, {
        "type": "Polygon",
        "id": 31143,
        "arcs": [[2701, 2702, 2703, -2450, -2665]]
      }, {
        "type": "Polygon",
        "id": 31105,
        "arcs": [[-2676, 2704, 2705, -2524, -2514]]
      }, {
        "type": "Polygon",
        "id": 31121,
        "arcs": [[-2704, 2706, 2707, 2708, -2600, -2451]]
      }, {
        "type": "Polygon",
        "id": 31093,
        "arcs": [[-2601, -2709, 2709, 2710, 2711, -2463]]
      }, {
        "type": "Polygon",
        "id": 31163,
        "arcs": [[-2464, -2712, 2712, -2467, -2473]]
      }, {
        "type": "Polygon",
        "id": 31055,
        "arcs": [[-2517, -2633, 2713, -2666, -2454]]
      }, {
        "type": "Polygon",
        "id": 49029,
        "arcs": [[2714, 2715, 2716, -2680, -2319]]
      }, {
        "type": "Polygon",
        "id": 42065,
        "arcs": [[2717, 2718, 2719, -2677, -2559, -2557]]
      }, {
        "type": "Polygon",
        "id": 6105,
        "arcs": [[2720, 2721, 2722, -2657, -2302]]
      }, {
        "type": "MultiPolygon",
        "id": 36119,
        "arcs": [[[2723, 2724, 2725, -2604, -2522, 2726]]]
      }, {
        "type": "Polygon",
        "id": 34037,
        "arcs": [[2727, 2728, 2729, 2730, -2575, -2542]]
      }, {
        "type": "Polygon",
        "id": 39153,
        "arcs": [[2731, 2732, 2733, 2734, -2551]]
      }, {
        "type": "Polygon",
        "id": 39133,
        "arcs": [[-2641, 2735, 2736, -2732, -2550, -2498]]
      }, {
        "type": "Polygon",
        "id": 17131,
        "arcs": [[-2592, 2737, 2738, 2739, 2740, -2691, -2422]]
      }, {
        "type": "Polygon",
        "id": 17155,
        "arcs": [[-2548, 2741, -2586]]
      }, {
        "type": "Polygon",
        "id": 36087,
        "arcs": [[2742, 2743, -2540, -2603, 2744]]
      }, {
        "type": "Polygon",
        "id": 42037,
        "arcs": [[2745, 2746, 2747, -2579, -2585, -2687]]
      }, {
        "type": "Polygon",
        "id": 17091,
        "arcs": [[-2506, 2748, 2749, 2750, 2751, -2660, -2485]]
      }, {
        "type": "Polygon",
        "id": 18183,
        "arcs": [[2752, 2753, 2754, -2670, -2598]]
      }, {
        "type": "MultiPolygon",
        "id": 36103,
        "arcs": [[[2755, 2756]], [[2757, 2758]]]
      }, {
        "type": "Polygon",
        "id": 39077,
        "arcs": [[-2608, 2759, 2760, 2761, 2762, -2644, -2566]]
      }, {
        "type": "Polygon",
        "id": 18073,
        "arcs": [[-2683, 2763, 2764, 2765, 2766, -2504, -2508]]
      }, {
        "type": "Polygon",
        "id": 39103,
        "arcs": [[-2735, 2767, 2768, -2606, -2552]]
      }, {
        "type": "Polygon",
        "id": 18003,
        "arcs": [[2769, 2770, 2771, 2772, 2773, -2753, -2597, -2595, -2690]]
      }, {
        "type": "Polygon",
        "id": 39147,
        "arcs": [[-2763, 2774, 2775, 2776, -2570, -2645]]
      }, {
        "type": "Polygon",
        "id": 42033,
        "arcs": [[2777, 2778, 2779, 2780, -2718, -2556, -2574, -2656]]
      }, {
        "type": "Polygon",
        "id": 49043,
        "arcs": [[-2593, -2170, 2781, 2782, 2783, 2784, -2715, -2318]]
      }, {
        "type": "Polygon",
        "id": 42027,
        "arcs": [[2785, 2786, 2787, 2788, -2778, -2655]]
      }, {
        "type": "Polygon",
        "id": 42089,
        "arcs": [[-2731, 2789, 2790, 2791, -2684, -2537, -2349, -2576]]
      }, {
        "type": "Polygon",
        "id": 39125,
        "arcs": [[2792, 2793, -2770, -2689]]
      }, {
        "type": "Polygon",
        "id": 17175,
        "arcs": [[-2588, 2794, 2795, 2796, -2590]]
      }, {
        "type": "Polygon",
        "id": 31049,
        "arcs": [[-2696, 2797, 2798, -2673, -2307]]
      }, {
        "type": "Polygon",
        "id": 18111,
        "arcs": [[2799, 2800, -2749, -2505, -2767]]
      }, {
        "type": "Polygon",
        "id": 34031,
        "arcs": [[2801, 2802, -2728, -2541, -2744, 2803]]
      }, {
        "type": "Polygon",
        "id": 31153,
        "arcs": [[-2632, 2804, 2805, -2667, -2714]]
      }, {
        "type": "Polygon",
        "id": 6035,
        "arcs": [[-2368, 2806, 2807, 2808, -2358]]
      }, {
        "type": "Polygon",
        "id": 6089,
        "arcs": [[-2359, -2809, 2809, 2810, -2721, -2301]]
      }, {
        "type": "Polygon",
        "id": 42097,
        "arcs": [[2811, -2747, 2812, 2813, 2814, 2815, 2816, -2581]]
      }, {
        "type": "Polygon",
        "id": 18049,
        "arcs": [[2817, 2818, 2819, 2820, -2652, -2672]]
      }, {
        "type": "Polygon",
        "id": 31081,
        "arcs": [[2821, 2822, 2823, 2824, -2707, -2703]]
      }, {
        "type": "Polygon",
        "id": 18131,
        "arcs": [[-2821, 2825, 2826, -2764, -2682]]
      }, {
        "type": "Polygon",
        "id": 42093,
        "arcs": [[-2748, -2812, -2580]]
      }, {
        "type": "Polygon",
        "id": 42019,
        "arcs": [[-2679, 2827, 2828, 2829, 2830, -2646, -2563]]
      }, {
        "type": "Polygon",
        "id": 42005,
        "arcs": [[-2720, 2831, 2832, 2833, -2828, -2678]]
      }, {
        "type": "Polygon",
        "id": 39063,
        "arcs": [[-2777, 2834, 2835, 2836, 2837, -2571]]
      }, {
        "type": "Polygon",
        "id": 39137,
        "arcs": [[-2838, 2838, 2839, -2793, -2688, -2649]]
      }, {
        "type": "Polygon",
        "id": 19101,
        "arcs": [[-2612, 2840, 2841, 2842, -2618]]
      }, {
        "type": "Polygon",
        "id": 19087,
        "arcs": [[-2693, 2843, 2844, 2845, -2841, -2611]]
      }, {
        "type": "Polygon",
        "id": 19179,
        "arcs": [[-2843, 2846, 2847, -2624, -2619]]
      }, {
        "type": "Polygon",
        "id": 19039,
        "arcs": [[2848, 2849, 2850, -2621, -2616]]
      }, {
        "type": "Polygon",
        "id": 19117,
        "arcs": [[-2628, 2851, 2852, -2849, -2615]]
      }, {
        "type": "Polygon",
        "id": 19135,
        "arcs": [[-2848, 2853, -2852, -2627, -2625]]
      }, {
        "type": "Polygon",
        "id": 19129,
        "arcs": [[2854, 2855, 2856, -2805, -2631]]
      }, {
        "type": "Polygon",
        "id": 19137,
        "arcs": [[-2636, 2857, 2858, -2855, -2630]]
      }, {
        "type": "Polygon",
        "id": 19003,
        "arcs": [[-2638, 2859, 2860, -2858, -2635]]
      }, {
        "type": "Polygon",
        "id": 19175,
        "arcs": [[-2622, -2851, 2861, -2860, -2637]]
      }, {
        "type": "Polygon",
        "id": 49011,
        "arcs": [[-2717, 2862, 2863, -2681]]
      }, {
        "type": "Polygon",
        "id": 17095,
        "arcs": [[-2797, 2864, 2865, 2866, -2738, -2591]]
      }, {
        "type": "Polygon",
        "id": 42119,
        "arcs": [[2867, 2868, -2786, -2654, -2582, -2817]]
      }, {
        "type": "Polygon",
        "id": 17123,
        "arcs": [[-2742, -2547, 2869, 2870, -2795, -2587]]
      }, {
        "type": "Polygon",
        "id": 34003,
        "arcs": [[2871, 2872, -2804, -2743, 2873]]
      }, {
        "type": "Polygon",
        "id": 39099,
        "arcs": [[-2648, 2874, 2875, 2876, -2736, -2640]]
      }, {
        "type": "Polygon",
        "id": 42025,
        "arcs": [[-2792, 2877, 2878, 2879, -2685]]
      }, {
        "type": "Polygon",
        "id": 42073,
        "arcs": [[-2831, 2880, 2881, -2875, -2647]]
      }, {
        "type": "Polygon",
        "id": 17105,
        "arcs": [[-2752, 2882, 2883, 2884, -2545, -2661]]
      }, {
        "type": "Polygon",
        "id": 34041,
        "arcs": [[2885, 2886, 2887, 2888, -2790, -2730]]
      }, {
        "type": "Polygon",
        "id": 34027,
        "arcs": [[2889, 2890, 2891, 2892, -2886, -2729, -2803]]
      }, {
        "type": "Polygon",
        "id": 49045,
        "arcs": [[2893, 2894, 2895, 2896, -2335, -2329, -2864]]
      }, {
        "type": "Polygon",
        "id": 19057,
        "arcs": [[-2741, 2897, 2898, -2844, -2692]]
      }, {
        "type": "Polygon",
        "id": 17071,
        "arcs": [[2899, 2900, 2901, 2902, -2898, -2740]]
      }, {
        "type": "Polygon",
        "id": 17187,
        "arcs": [[-2867, 2903, 2904, -2900, -2739]]
      }, {
        "type": "Polygon",
        "id": 39005,
        "arcs": [[-2769, 2905, 2906, 2907, 2908, -2760, -2607]]
      }, {
        "type": "Polygon",
        "id": 31025,
        "arcs": [[-2857, 2909, 2910, 2911, -2668, -2806]]
      }, {
        "type": "Polygon",
        "id": 31185,
        "arcs": [[2912, 2913, 2914, -2822, -2702]]
      }, {
        "type": "Polygon",
        "id": 31079,
        "arcs": [[-2708, -2825, 2915, 2916, -2710]]
      }, {
        "type": "Polygon",
        "id": 31047,
        "arcs": [[2917, 2918, 2919, 2920, -2697, -2469]]
      }, {
        "type": "Polygon",
        "id": 31019,
        "arcs": [[-2711, -2917, 2921, 2922, 2923, -2918, -2468, -2713]]
      }, {
        "type": "Polygon",
        "id": 31159,
        "arcs": [[2924, 2925, -2913, -2664]]
      }, {
        "type": "Polygon",
        "id": 31109,
        "arcs": [[-2912, 2926, 2927, 2928, -2925, -2663, -2669]]
      }, {
        "type": "Polygon",
        "id": 18169,
        "arcs": [[-2755, 2929, 2930, 2931, -2818, -2671]]
      }, {
        "type": "Polygon",
        "id": 17075,
        "arcs": [[-2801, 2932, 2933, 2934, -2750]]
      }, {
        "type": "Polygon",
        "id": 18069,
        "arcs": [[-2774, 2935, 2936, -2930, -2754]]
      }, {
        "type": "MultiPolygon",
        "id": 8123,
        "arcs": [[[2937]], [[2938, 2939, 2940, 2941, 2942, -2525, -2706, 2943]]]
      }, {
        "type": "Polygon",
        "id": 31135,
        "arcs": [[-2700, 2944, 2945, 2946, 2947, -2798, -2695]]
      }, {
        "type": "Polygon",
        "id": 8107,
        "arcs": [[2948, 2949, 2950, 2951, 2952, -2109, 2953]]
      }, {
        "type": "Polygon",
        "id": 8057,
        "arcs": [[2954, -2954, -2108, -2114, 2955]]
      }, {
        "type": "Polygon",
        "id": 8081,
        "arcs": [[-2953, 2956, 2957, 2958, -2168, -2110]]
      }, {
        "type": "Polygon",
        "id": 8075,
        "arcs": [[2959, 2960, 2961, -2944, -2705, -2675, 2962, 2963]]
      }, {
        "type": "Polygon",
        "id": 8115,
        "arcs": [[2964, -2963, -2674, -2799, -2948]]
      }, {
        "type": "Polygon",
        "id": 49009,
        "arcs": [[2965, 2966, -2782, -2169, -2959]]
      }, {
        "type": "Polygon",
        "id": 32011,
        "arcs": [[2967, 2968, 2969, -2337]]
      }, {
        "type": "Polygon",
        "id": 32015,
        "arcs": [[-2970, 2970, 2971, 2972, -2331, -2338]]
      }, {
        "type": "Polygon",
        "id": 8069,
        "arcs": [[2973, 2974, -2956, -2113, -2526, -2943]]
      }, {
        "type": "Polygon",
        "id": 18103,
        "arcs": [[-2932, 2975, 2976, 2977, -2819]]
      }, {
        "type": "Polygon",
        "id": 39033,
        "arcs": [[2978, 2979, 2980, 2981, -2775, -2762]]
      }, {
        "type": "Polygon",
        "id": 17053,
        "arcs": [[2982, 2983, 2984, -2883, -2751, -2935]]
      }, {
        "type": "Polygon",
        "id": 39139,
        "arcs": [[-2909, 2985, 2986, -2979, -2761]]
      }, {
        "type": "Polygon",
        "id": 39175,
        "arcs": [[-2982, 2987, 2988, -2835, -2776]]
      }, {
        "type": "Polygon",
        "id": 39169,
        "arcs": [[-2734, 2989, 2990, -2906, -2768]]
      }, {
        "type": "Polygon",
        "id": 39161,
        "arcs": [[-2840, 2991, 2992, 2993, 2994, -2771, -2794]]
      }, {
        "type": "Polygon",
        "id": 39151,
        "arcs": [[-2877, 2995, 2996, 2997, 2998, -2990, -2733, -2737]]
      }, {
        "type": "Polygon",
        "id": 17143,
        "arcs": [[-2871, 2999, 3000, 3001, -2865, -2796]]
      }, {
        "type": "Polygon",
        "id": 42095,
        "arcs": [[3002, 3003, -2878, -2791, -2889]]
      }, {
        "type": "Polygon",
        "id": 32027,
        "arcs": [[-2973, 3004, -2360, -2332]]
      }, {
        "type": "Polygon",
        "id": 42107,
        "arcs": [[-2880, 3005, 3006, 3007, 3008, -2813, -2746, -2686]]
      }, {
        "type": "Polygon",
        "id": 39029,
        "arcs": [[-2882, 3009, 3010, 3011, 3012, -2996, -2876]]
      }, {
        "type": "Polygon",
        "id": 17203,
        "arcs": [[3013, 3014, -3000, -2870, -2546, -2885]]
      }, {
        "type": "Polygon",
        "id": 18001,
        "arcs": [[3015, 3016, 3017, -2772, -2995]]
      }, {
        "type": "Polygon",
        "id": 39003,
        "arcs": [[-2837, 3018, 3019, -2992, -2839]]
      }, {
        "type": "Polygon",
        "id": 49035,
        "arcs": [[-2716, -2785, 3020, 3021, -2894, -2863]]
      }, {
        "type": "MultiPolygon",
        "id": 36005,
        "arcs": [[[3022, 3023, 3024, -2725]]]
      }, {
        "type": "Polygon",
        "id": 18179,
        "arcs": [[-3018, 3025, 3026, 3027, -2936, -2773]]
      }, {
        "type": "MultiPolygon",
        "id": 36059,
        "arcs": [[[-2756, 3028]], [[-2758, 3029, 3030, 3031, 3032, 3033]]]
      }, {
        "type": "Polygon",
        "id": 18181,
        "arcs": [[3034, 3035, 3036, 3037, -2765, -2827]]
      }, {
        "type": "Polygon",
        "id": 18017,
        "arcs": [[-2820, -2978, 3038, 3039, -3035, -2826]]
      }, {
        "type": "Polygon",
        "id": 42063,
        "arcs": [[-2781, 3040, 3041, -2832, -2719]]
      }, {
        "type": "Polygon",
        "id": 34013,
        "arcs": [[-2802, -2873, 3042, 3043, 3044, -2890]]
      }, {
        "type": "Polygon",
        "id": 19071,
        "arcs": [[3045, 3046, 3047, -2910, -2856]]
      }, {
        "type": "Polygon",
        "id": 19145,
        "arcs": [[3048, 3049, 3050, -3046, -2859]]
      }, {
        "type": "Polygon",
        "id": 19173,
        "arcs": [[3051, 3052, 3053, -3049, -2861]]
      }, {
        "type": "Polygon",
        "id": 19177,
        "arcs": [[-2846, 3054, 3055, 3056, 3057, -2842]]
      }, {
        "type": "Polygon",
        "id": 19051,
        "arcs": [[-3058, 3058, 3059, 3060, -2847]]
      }, {
        "type": "Polygon",
        "id": 19159,
        "arcs": [[3061, 3062, 3063, -3052, -2862]]
      }, {
        "type": "Polygon",
        "id": 19053,
        "arcs": [[3064, 3065, 3066, -3062, -2850]]
      }, {
        "type": "Polygon",
        "id": 19185,
        "arcs": [[3067, 3068, 3069, -3065, -2853]]
      }, {
        "type": "Polygon",
        "id": 19007,
        "arcs": [[-3061, 3070, 3071, -3068, -2854]]
      }, {
        "type": "Polygon",
        "id": 42109,
        "arcs": [[-2816, 3072, 3073, -2868]]
      }, {
        "type": "Polygon",
        "id": 36061,
        "arcs": [[3074, -3024]]
      }, {
        "type": "Polygon",
        "id": 49047,
        "arcs": [[-2958, 3075, 3076, 3077, 3078, 3079, 3080, -2966]]
      }, {
        "type": "Polygon",
        "id": 42007,
        "arcs": [[-2830, 3081, 3082, 3083, -3010, -2881]]
      }, {
        "type": "Polygon",
        "id": 42087,
        "arcs": [[3084, -2787, -2869, -3074, 3085]]
      }, {
        "type": "Polygon",
        "id": 49013,
        "arcs": [[-2967, -3081, 3086, 3087, 3088, -2783]]
      }, {
        "type": "Polygon",
        "id": 39065,
        "arcs": [[-2989, 3089, 3090, 3091, 3092, -3019, -2836]]
      }, {
        "type": "Polygon",
        "id": 34017,
        "arcs": [[3093, -3043, -2872]]
      }, {
        "type": "Polygon",
        "id": 19111,
        "arcs": [[-2899, -2903, 3094, 3095, -3055, -2845]]
      }, {
        "type": "MultiPolygon",
        "id": 36081,
        "arcs": [[[3096, -3031]], [[3097, 3098]], [[-3033, 3099, 3100, 3101]]]
      }, {
        "type": "Polygon",
        "id": 34019,
        "arcs": [[3102, 3103, 3104, -2887, -2893]]
      }, {
        "type": "Polygon",
        "id": 42077,
        "arcs": [[3105, 3106, 3107, -3006, -2879, -3004]]
      }, {
        "type": "Polygon",
        "id": 31131,
        "arcs": [[-3048, 3108, 3109, 3110, -2927, -2911]]
      }, {
        "type": "Polygon",
        "id": 34035,
        "arcs": [[3111, 3112, 3113, -3103, -2892]]
      }, {
        "type": "Polygon",
        "id": 17113,
        "arcs": [[-2985, 3114, 3115, 3116, 3117, 3118, -3014, -2884]]
      }, {
        "type": "Polygon",
        "id": 8095,
        "arcs": [[-2947, 3119, 3120, -2964, -2965]]
      }, {
        "type": "Polygon",
        "id": 17179,
        "arcs": [[-3119, 3121, 3122, 3123, -3001, -3015]]
      }, {
        "type": "Polygon",
        "id": 42061,
        "arcs": [[-3085, 3124, 3125, 3126, 3127, 3128, -2788]]
      }, {
        "type": "Polygon",
        "id": 42013,
        "arcs": [[3129, 3130, -2779, -2789, -3129]]
      }, {
        "type": "MultiPolygon",
        "id": 36047,
        "arcs": [[[3131, -3098]], [[3132, -3101]]]
      }, {
        "type": "Polygon",
        "id": 18007,
        "arcs": [[-2766, -3038, 3133, 3134, 3135, -2933, -2800]]
      }, {
        "type": "Polygon",
        "id": 34039,
        "arcs": [[3136, 3137, -3112, -2891, -3045]]
      }, {
        "type": "Polygon",
        "id": 18015,
        "arcs": [[-3040, 3138, 3139, 3140, -3036]]
      }, {
        "type": "Polygon",
        "id": 39019,
        "arcs": [[-3013, 3141, 3142, 3143, -2997]]
      }, {
        "type": "Polygon",
        "id": 39107,
        "arcs": [[3144, 3145, 3146, 3147, -3016, -2994]]
      }, {
        "type": "Polygon",
        "id": 42021,
        "arcs": [[-3131, 3148, 3149, 3150, -3041, -2780]]
      }, {
        "type": "Polygon",
        "id": 17057,
        "arcs": [[-3002, -3124, 3151, 3152, 3153, -2904, -2866]]
      }, {
        "type": "Polygon",
        "id": 39117,
        "arcs": [[-2987, 3154, 3155, 3156, -2980]]
      }, {
        "type": "Polygon",
        "id": 39101,
        "arcs": [[-3157, 3157, 3158, -3090, -2988, -2981]]
      }, {
        "type": "Polygon",
        "id": 31063,
        "arcs": [[-2921, 3159, 3160, 3161, 3162, 3163, -2698]]
      }, {
        "type": "Polygon",
        "id": 31001,
        "arcs": [[-2824, 3164, 3165, 3166, -2922, -2916]]
      }, {
        "type": "Polygon",
        "id": 31073,
        "arcs": [[3167, 3168, -3160, -2920]]
      }, {
        "type": "Polygon",
        "id": 31085,
        "arcs": [[-3164, 3169, 3170, 3171, -2945, -2699]]
      }, {
        "type": "Polygon",
        "id": 31029,
        "arcs": [[-3172, 3172, 3173, -3120, -2946]]
      }, {
        "type": "Polygon",
        "id": 31059,
        "arcs": [[3174, 3175, 3176, 3177, -2914]]
      }, {
        "type": "Polygon",
        "id": 31151,
        "arcs": [[-2926, -2929, 3178, 3179, -3175]]
      }, {
        "type": "Polygon",
        "id": 31035,
        "arcs": [[-3178, 3180, 3181, -3165, -2823, -2915]]
      }, {
        "type": "Polygon",
        "id": 42067,
        "arcs": [[-2815, 3182, 3183, -3125, -3086, -3073]]
      }, {
        "type": "Polygon",
        "id": 49051,
        "arcs": [[-3089, 3184, -3021, -2784]]
      }, {
        "type": "Polygon",
        "id": 31099,
        "arcs": [[3185, 3186, 3187, -2923, -3167]]
      }, {
        "type": "Polygon",
        "id": 39011,
        "arcs": [[-3093, 3188, 3189, -3145, -2993, -3020]]
      }, {
        "type": "Polygon",
        "id": 31137,
        "arcs": [[-2924, -3188, 3190, 3191, -3168, -2919]]
      }, {
        "type": "Polygon",
        "id": 42129,
        "arcs": [[-3042, -3151, 3192, 3193, 3194, 3195, -2833]]
      }, {
        "type": "Polygon",
        "id": 42011,
        "arcs": [[3196, 3197, 3198, 3199, -3007, -3108]]
      }, {
        "type": "Polygon",
        "id": 42003,
        "arcs": [[-2834, -3196, 3200, -3082, -2829]]
      }, {
        "type": "Polygon",
        "id": 39075,
        "arcs": [[-2999, 3201, 3202, 3203, -2907, -2991]]
      }, {
        "type": "Polygon",
        "id": 39157,
        "arcs": [[-3144, 3204, 3205, 3206, -3202, -2998]]
      }, {
        "type": "Polygon",
        "id": 42043,
        "arcs": [[-3009, 3207, 3208, 3209, 3210, 3211, -2814]]
      }, {
        "type": "Polygon",
        "id": 18053,
        "arcs": [[-3028, 3212, 3213, 3214, 3215, 3216, -2976, -2931, -2937]]
      }, {
        "type": "Polygon",
        "id": 36085,
        "arcs": [[3217]]
      }, {
        "type": "Polygon",
        "id": 17067,
        "arcs": [[3218, 3219, 3220, 3221, 3222, -3095, -2902]]
      }, {
        "type": "Polygon",
        "id": 54029,
        "arcs": [[3223, 3224, 3225, -3011, -3084]]
      }, {
        "type": "Polygon",
        "id": 17109,
        "arcs": [[-3154, 3226, -3219, -2901, -2905]]
      }, {
        "type": "Polygon",
        "id": 42099,
        "arcs": [[3227, 3228, -3183, -3212]]
      }, {
        "type": "Polygon",
        "id": 29045,
        "arcs": [[-3223, 3229, 3230, 3231, -3056, -3096]]
      }, {
        "type": "Polygon",
        "id": 42017,
        "arcs": [[3232, 3233, 3234, 3235, -3106, -3003, -2888, -3105]]
      }, {
        "type": "Polygon",
        "id": 34023,
        "arcs": [[3236, 3237, 3238, -3113, -3138]]
      }, {
        "type": "Polygon",
        "id": 29199,
        "arcs": [[-3232, 3239, 3240, 3241, -3059, -3057]]
      }, {
        "type": "Polygon",
        "id": 39081,
        "arcs": [[-3226, 3242, 3243, 3244, 3245, -3142, -3012]]
      }, {
        "type": "Polygon",
        "id": 29197,
        "arcs": [[3246, 3247, -3071, -3060, -3242]]
      }, {
        "type": "Polygon",
        "id": 29171,
        "arcs": [[-3248, 3248, 3249, 3250, -3069, -3072]]
      }, {
        "type": "Polygon",
        "id": 29005,
        "arcs": [[-3051, 3251, 3252, 3253, -3109, -3047]]
      }, {
        "type": "Polygon",
        "id": 29129,
        "arcs": [[-3251, 3254, 3255, 3256, -3066, -3070]]
      }, {
        "type": "Polygon",
        "id": 29147,
        "arcs": [[-3054, 3257, 3258, 3259, 3260, -3252, -3050]]
      }, {
        "type": "Polygon",
        "id": 49049,
        "arcs": [[-3088, 3261, 3262, 3263, -2895, -3022, -3185]]
      }, {
        "type": "Polygon",
        "id": 29081,
        "arcs": [[-3257, 3264, 3265, 3266, 3267, -3063, -3067]]
      }, {
        "type": "Polygon",
        "id": 39083,
        "arcs": [[3268, 3269, 3270, -3155, -2986, -2908, -3204]]
      }, {
        "type": "Polygon",
        "id": 18075,
        "arcs": [[3271, 3272, 3273, 3274, -3026, -3017, -3148]]
      }, {
        "type": "Polygon",
        "id": 29227,
        "arcs": [[-3268, 3275, -3258, -3053, -3064]]
      }, {
        "type": "Polygon",
        "id": 18009,
        "arcs": [[-3275, 3276, -3213, -3027]]
      }, {
        "type": "Polygon",
        "id": 18067,
        "arcs": [[3277, 3278, -3139, -3039, -2977, -3217]]
      }, {
        "type": "Polygon",
        "id": 18157,
        "arcs": [[-3141, 3279, 3280, 3281, 3282, -3134, -3037]]
      }, {
        "type": "Polygon",
        "id": 31127,
        "arcs": [[3283, 3284, 3285, 3286, -3110, -3254]]
      }, {
        "type": "Polygon",
        "id": 42075,
        "arcs": [[-3208, -3008, -3200, 3287]]
      }, {
        "type": "Polygon",
        "id": 39091,
        "arcs": [[-3092, 3288, 3289, 3290, -3189]]
      }, {
        "type": "Polygon",
        "id": 8087,
        "arcs": [[-2962, 3291, 3292, -2939]]
      }, {
        "type": "Polygon",
        "id": 31067,
        "arcs": [[3293, 3294, 3295, 3296, 3297, -3179, -2928]]
      }, {
        "type": "Polygon",
        "id": 31097,
        "arcs": [[-3287, 3298, -3294, -3111]]
      }, {
        "type": "Polygon",
        "id": 39159,
        "arcs": [[3299, 3300, 3301, -3289, -3091, -3159, 3302]]
      }, {
        "type": "Polygon",
        "id": 17183,
        "arcs": [[-3136, 3303, 3304, 3305, 3306, -2983, -2934]]
      }, {
        "type": "Polygon",
        "id": 8049,
        "arcs": [[3307, 3308, 3309, 3310, 3311, -2949, -2955, -2975]]
      }, {
        "type": "Polygon",
        "id": 39149,
        "arcs": [[-3291, 3312, 3313, 3314, -3146, -3190]]
      }, {
        "type": "Polygon",
        "id": 42125,
        "arcs": [[-3201, -3195, 3315, 3316, 3317, 3318, 3319, -3224, -3083]]
      }, {
        "type": "Polygon",
        "id": 18171,
        "arcs": [[-3283, 3320, 3321, -3304, -3135]]
      }, {
        "type": "Polygon",
        "id": 34025,
        "arcs": [[3322, 3323, 3324, -3238, 3325]]
      }, {
        "type": "Polygon",
        "id": 39031,
        "arcs": [[-3207, 3326, 3327, 3328, -3269, -3203]]
      }, {
        "type": "Polygon",
        "id": 42091,
        "arcs": [[3329, 3330, 3331, -3197, -3107, -3236]]
      }, {
        "type": "Polygon",
        "id": 6103,
        "arcs": [[3332, 3333, 3334, 3335, -2722, -2811]]
      }, {
        "type": "Polygon",
        "id": 6063,
        "arcs": [[-2808, 3336, 3337, 3338, -3333, -2810]]
      }, {
        "type": "Polygon",
        "id": 39041,
        "arcs": [[-3271, 3339, 3340, -3303, -3158, -3156]]
      }, {
        "type": "Polygon",
        "id": 8125,
        "arcs": [[-3174, 3341, 3342, 3343, 3344, -2960, -3121]]
      }, {
        "type": "Polygon",
        "id": 8121,
        "arcs": [[-3345, 3345, 3346, 3347, 3348, -3292, -2961]]
      }, {
        "type": "Polygon",
        "id": 17125,
        "arcs": [[3349, 3350, 3351, 3352, -3152, -3123]]
      }, {
        "type": "Polygon",
        "id": 39067,
        "arcs": [[-3246, 3353, 3354, -3205, -3143]]
      }, {
        "type": "Polygon",
        "id": 18023,
        "arcs": [[-3279, 3355, 3356, 3357, 3358, -3280, -3140]]
      }, {
        "type": "Polygon",
        "id": 34021,
        "arcs": [[-3239, -3325, 3359, -3233, -3104, -3114]]
      }, {
        "type": "Polygon",
        "id": 18159,
        "arcs": [[-3216, 3360, 3361, -3356, -3278]]
      }, {
        "type": "Polygon",
        "id": 54009,
        "arcs": [[-3320, 3362, -3243, -3225]]
      }, {
        "type": "Polygon",
        "id": 17019,
        "arcs": [[-3307, 3363, 3364, -3115, -2984]]
      }, {
        "type": "Polygon",
        "id": 29211,
        "arcs": [[3365, 3366, 3367, -3255, -3250]]
      }, {
        "type": "Polygon",
        "id": 29075,
        "arcs": [[-3267, 3368, 3369, 3370, -3259, -3276]]
      }, {
        "type": "Polygon",
        "id": 18095,
        "arcs": [[3371, 3372, 3373, 3374, -3361, -3215]]
      }, {
        "type": "Polygon",
        "id": 18035,
        "arcs": [[-3277, -3274, 3375, 3376, -3372, -3214]]
      }, {
        "type": "Polygon",
        "id": 18045,
        "arcs": [[-3282, 3377, 3378, 3379, -3321]]
      }, {
        "type": "Polygon",
        "id": 39037,
        "arcs": [[-3315, 3380, 3381, 3382, 3383, 3384, -3272, -3147]]
      }, {
        "type": "Polygon",
        "id": 31181,
        "arcs": [[-3182, 3385, 3386, 3387, 3388, -3186, -3166]]
      }, {
        "type": "Polygon",
        "id": 31061,
        "arcs": [[-3389, 3389, 3390, 3391, -3187]]
      }, {
        "type": "Polygon",
        "id": 31129,
        "arcs": [[-3177, 3392, 3393, 3394, -3386, -3181]]
      }, {
        "type": "Polygon",
        "id": 31057,
        "arcs": [[3395, 3396, 3397, -3342, -3173, -3171]]
      }, {
        "type": "Polygon",
        "id": 31065,
        "arcs": [[-3192, 3398, 3399, 3400, 3401, -3161, -3169]]
      }, {
        "type": "Polygon",
        "id": 31169,
        "arcs": [[3402, 3403, -3393, -3176]]
      }, {
        "type": "Polygon",
        "id": 31095,
        "arcs": [[-3180, -3298, 3404, -3403]]
      }, {
        "type": "Polygon",
        "id": 31145,
        "arcs": [[-3402, 3405, 3406, 3407, -3162]]
      }, {
        "type": "Polygon",
        "id": 31087,
        "arcs": [[-3163, -3408, 3408, -3396, -3170]]
      }, {
        "type": "Polygon",
        "id": 31083,
        "arcs": [[-3392, 3409, 3410, -3399, -3191]]
      }, {
        "type": "Polygon",
        "id": 29001,
        "arcs": [[-3241, 3411, 3412, 3413, -3366, -3249, -3247]]
      }, {
        "type": "Polygon",
        "id": 42041,
        "arcs": [[3414, 3415, 3416, -3228, -3211]]
      }, {
        "type": "Polygon",
        "id": 17107,
        "arcs": [[3417, 3418, 3419, 3420, -3350, -3122, -3118]]
      }, {
        "type": "Polygon",
        "id": 42009,
        "arcs": [[-3128, 3421, 3422, 3423, -3149, -3130]]
      }, {
        "type": "Polygon",
        "id": 42071,
        "arcs": [[3424, 3425, 3426, 3427, -3209, -3288, -3199]]
      }, {
        "type": "Polygon",
        "id": 18135,
        "arcs": [[-3385, 3428, 3429, -3376, -3273]]
      }, {
        "type": "Polygon",
        "id": 29103,
        "arcs": [[-3231, 3430, 3431, 3432, -3412, -3240]]
      }, {
        "type": "Polygon",
        "id": 42055,
        "arcs": [[-3417, 3433, 3434, 3435, 3436, -3126, -3184, -3229]]
      }, {
        "type": "Polygon",
        "id": 42111,
        "arcs": [[-3424, 3437, 3438, 3439, -3193, -3150]]
      }, {
        "type": "Polygon",
        "id": 17039,
        "arcs": [[3440, 3441, -3418, -3117]]
      }, {
        "type": "Polygon",
        "id": 17169,
        "arcs": [[-3153, -3353, 3442, 3443, 3444, -3220, -3227]]
      }, {
        "type": "Polygon",
        "id": 17147,
        "arcs": [[-3365, 3445, 3446, 3447, -3441, -3116]]
      }, {
        "type": "Polygon",
        "id": 39089,
        "arcs": [[-3329, 3448, 3449, 3450, 3451, -3340, -3270]]
      }, {
        "type": "Polygon",
        "id": 39021,
        "arcs": [[-3302, 3452, 3453, 3454, -3313, -3290]]
      }, {
        "type": "Polygon",
        "id": 29079,
        "arcs": [[-3368, 3455, 3456, 3457, -3265, -3256]]
      }, {
        "type": "Polygon",
        "id": 8013,
        "arcs": [[-2942, 3458, 3459, 3460, -3308, -2974]]
      }, {
        "type": "Polygon",
        "id": 31133,
        "arcs": [[-3286, 3461, 3462, 3463, -3295, -3299]]
      }, {
        "type": "Polygon",
        "id": 31147,
        "arcs": [[3464, 3465, 3466, 3467, -3462, -3285]]
      }, {
        "type": "Polygon",
        "id": 29087,
        "arcs": [[-3261, 3468, 3469, -3465, -3284, -3253]]
      }, {
        "type": "Polygon",
        "id": 29111,
        "arcs": [[-3222, 3470, 3471, 3472, -3431, -3230]]
      }, {
        "type": "MultiPolygon",
        "id": 42029,
        "arcs": [[[3473, 3474]], [[3475, 3476, 3477, -3425, -3198, -3332]]]
      }, {
        "type": "Polygon",
        "id": 42133,
        "arcs": [[-3428, 3478, 3479, 3480, 3481, -3415, -3210]]
      }, {
        "type": "Polygon",
        "id": 8103,
        "arcs": [[3482, -3076, -2957, -2952]]
      }, {
        "type": "Polygon",
        "id": 39059,
        "arcs": [[3483, 3484, -3327, -3206, -3355, 3485]]
      }, {
        "type": "Polygon",
        "id": 18057,
        "arcs": [[3486, 3487, 3488, -3357, -3362, -3375]]
      }, {
        "type": "Polygon",
        "id": 18107,
        "arcs": [[-3359, 3489, 3490, 3491, 3492, -3378, -3281]]
      }, {
        "type": "Polygon",
        "id": 17001,
        "arcs": [[-3445, 3493, 3494, 3495, -3471, -3221]]
      }, {
        "type": "Polygon",
        "id": 39109,
        "arcs": [[-3455, 3496, 3497, -3381, -3314]]
      }, {
        "type": "Polygon",
        "id": 54069,
        "arcs": [[-3319, 3498, 3499, -3244, -3363]]
      }, {
        "type": "Polygon",
        "id": 34005,
        "arcs": [[-3324, 3500, 3501, 3502, 3503, 3504, 3505, -3234, -3360]]
      }, {
        "type": "Polygon",
        "id": 18011,
        "arcs": [[-3489, 3506, 3507, -3490, -3358]]
      }, {
        "type": "Polygon",
        "id": 39013,
        "arcs": [[-3245, -3500, 3508, 3509, 3510, -3486, -3354]]
      }, {
        "type": "MultiPolygon",
        "id": 34029,
        "arcs": [[[3511, -3501, -3323]]]
      }, {
        "type": "Polygon",
        "id": 39119,
        "arcs": [[-3485, 3512, 3513, 3514, -3449, -3328]]
      }, {
        "type": "Polygon",
        "id": 42057,
        "arcs": [[-3437, 3515, 3516, -3422, -3127]]
      }, {
        "type": "Polygon",
        "id": 17129,
        "arcs": [[-3421, 3517, 3518, -3351]]
      }, {
        "type": "Polygon",
        "id": 6007,
        "arcs": [[3519, 3520, 3521, 3522, -3334, -3339]]
      }, {
        "type": "Polygon",
        "id": 18165,
        "arcs": [[-3380, 3523, 3524, 3525, -3305, -3322]]
      }, {
        "type": "Polygon",
        "id": 42051,
        "arcs": [[-3440, 3526, 3527, 3528, 3529, -3316, -3194]]
      }, {
        "type": "Polygon",
        "id": 39049,
        "arcs": [[-3452, 3530, 3531, 3532, -3300, -3341]]
      }, {
        "type": "Polygon",
        "id": 42101,
        "arcs": [[-3506, 3533, 3534, -3330, -3235]]
      }, {
        "type": "Polygon",
        "id": 29061,
        "arcs": [[-3266, -3458, 3535, 3536, 3537, -3369]]
      }, {
        "type": "Polygon",
        "id": 29003,
        "arcs": [[-3371, 3538, 3539, 3540, -3469, -3260]]
      }, {
        "type": "Polygon",
        "id": 32033,
        "arcs": [[-2897, 3541, 3542, 3543, 3544, -2968, -2336]]
      }, {
        "type": "Polygon",
        "id": 17017,
        "arcs": [[-3352, -3519, 3545, 3546, 3547, -3443]]
      }, {
        "type": "Polygon",
        "id": 39097,
        "arcs": [[3548, 3549, 3550, 3551, -3453, -3301, -3533]]
      }, {
        "type": "Polygon",
        "id": 17009,
        "arcs": [[-3548, 3552, 3553, -3494, -3444]]
      }, {
        "type": "Polygon",
        "id": 8045,
        "arcs": [[-2951, 3554, 3555, 3556, 3557, -3077, -3483]]
      }, {
        "type": "Polygon",
        "id": 18065,
        "arcs": [[-3430, 3558, 3559, 3560, 3561, -3373, -3377]]
      }, {
        "type": "Polygon",
        "id": 42001,
        "arcs": [[3562, 3563, -3434, -3416, -3482]]
      }, {
        "type": "Polygon",
        "id": 42045,
        "arcs": [[-3535, 3564, 3565, -3474, 3566, -3476, -3331]]
      }, {
        "type": "Polygon",
        "id": 17115,
        "arcs": [[-3448, 3567, 3568, 3569, 3570, -3419, -3442]]
      }, {
        "type": "Polygon",
        "id": 8014,
        "arcs": [[3571, 3572, -3459, -2941], [-2938]]
      }, {
        "type": "Polygon",
        "id": 29121,
        "arcs": [[-3433, 3573, 3574, 3575, 3576, 3577, -3413]]
      }, {
        "type": "Polygon",
        "id": 39023,
        "arcs": [[-3552, 3578, 3579, -3497, -3454]]
      }, {
        "type": "Polygon",
        "id": 29115,
        "arcs": [[-3578, 3580, 3581, -3456, -3367, -3414]]
      }, {
        "type": "Polygon",
        "id": 29063,
        "arcs": [[-3538, 3582, 3583, 3584, -3539, -3370]]
      }, {
        "type": "Polygon",
        "id": 54051,
        "arcs": [[3585, 3586, -3509, -3499, -3318, 3587]]
      }, {
        "type": "Polygon",
        "id": 42059,
        "arcs": [[-3530, 3588, 3589, -3588, -3317]]
      }, {
        "type": "Polygon",
        "id": 49023,
        "arcs": [[-3264, 3590, 3591, -3542, -2896]]
      }, {
        "type": "Polygon",
        "id": 18177,
        "arcs": [[-3384, 3592, 3593, 3594, -3559, -3429]]
      }, {
        "type": "Polygon",
        "id": 20023,
        "arcs": [[3595, 3596, 3597, -3343, -3398]]
      }, {
        "type": "Polygon",
        "id": 20153,
        "arcs": [[-3407, 3598, 3599, 3600, -3596, -3397, -3409]]
      }, {
        "type": "Polygon",
        "id": 6045,
        "arcs": [[-2723, -3336, 3601, 3602, 3603, 3604, -2658]]
      }, {
        "type": "Polygon",
        "id": 20089,
        "arcs": [[3605, 3606, 3607, 3608, 3609, -3387, -3395]]
      }, {
        "type": "Polygon",
        "id": 20183,
        "arcs": [[-3610, 3610, 3611, 3612, -3390, -3388]]
      }, {
        "type": "Polygon",
        "id": 20157,
        "arcs": [[3613, 3614, -3606, -3394, -3404]]
      }, {
        "type": "Polygon",
        "id": 20201,
        "arcs": [[-3297, 3615, 3616, 3617, 3618, -3614, -3405]]
      }, {
        "type": "Polygon",
        "id": 20039,
        "arcs": [[-3401, 3619, 3620, 3621, -3599, -3406]]
      }, {
        "type": "Polygon",
        "id": 32001,
        "arcs": [[-2972, 3622, 3623, 3624, -2361, -3005]]
      }, {
        "type": "Polygon",
        "id": 20137,
        "arcs": [[3625, 3626, 3627, -3620, -3400, -3411]]
      }, {
        "type": "Polygon",
        "id": 20147,
        "arcs": [[-3613, 3628, 3629, -3626, -3410, -3391]]
      }, {
        "type": "Polygon",
        "id": 20117,
        "arcs": [[-3464, 3630, 3631, 3632, -3616, -3296]]
      }, {
        "type": "Polygon",
        "id": 8001,
        "arcs": [[-3349, 3633, 3634, 3635, -3572, -2940, -3293]]
      }, {
        "type": "Polygon",
        "id": 20013,
        "arcs": [[3636, 3637, 3638, 3639, -3467]]
      }, {
        "type": "Polygon",
        "id": 20131,
        "arcs": [[-3468, -3640, 3640, 3641, -3631, -3463]]
      }, {
        "type": "Polygon",
        "id": 20043,
        "arcs": [[-3470, -3541, 3642, 3643, -3637, -3466]]
      }, {
        "type": "MultiPolygon",
        "id": 34007,
        "arcs": [[[3644, 3645, 3646, -3504]]]
      }, {
        "type": "Polygon",
        "id": 17167,
        "arcs": [[-3571, 3647, 3648, 3649, 3650, -3546, -3518, -3420]]
      }, {
        "type": "Polygon",
        "id": 29117,
        "arcs": [[3651, 3652, 3653, -3536, -3457, -3582]]
      }, {
        "type": "Polygon",
        "id": 29205,
        "arcs": [[-3473, 3654, 3655, -3574, -3432]]
      }, {
        "type": "Polygon",
        "id": 18121,
        "arcs": [[-3493, 3656, 3657, 3658, -3524, -3379]]
      }, {
        "type": "Polygon",
        "id": 39121,
        "arcs": [[-3511, 3659, 3660, 3661, -3513, -3484]]
      }, {
        "type": "Polygon",
        "id": 29127,
        "arcs": [[-3496, 3662, 3663, 3664, -3655, -3472]]
      }, {
        "type": "Polygon",
        "id": 18059,
        "arcs": [[-3562, 3665, 3666, 3667, -3487, -3374]]
      }, {
        "type": "Polygon",
        "id": 39045,
        "arcs": [[-3451, 3668, 3669, 3670, -3531]]
      }, {
        "type": "Polygon",
        "id": 8047,
        "arcs": [[3671, 3672, -3309, -3461]]
      }, {
        "type": "Polygon",
        "id": 39127,
        "arcs": [[3673, 3674, 3675, -3669, -3450, -3515]]
      }, {
        "type": "Polygon",
        "id": 18097,
        "arcs": [[-3668, 3676, 3677, 3678, 3679, -3507, -3488]]
      }, {
        "type": "Polygon",
        "id": 8037,
        "arcs": [[3680, 3681, 3682, -3555, -2950, -3312]]
      }, {
        "type": "Polygon",
        "id": 8117,
        "arcs": [[3683, 3684, 3685, -3681, -3311]]
      }, {
        "type": "Polygon",
        "id": 18063,
        "arcs": [[-3680, 3686, 3687, -3491, -3508]]
      }, {
        "type": "Polygon",
        "id": 39113,
        "arcs": [[-3580, 3688, 3689, 3690, 3691, -3382, -3498]]
      }, {
        "type": "Polygon",
        "id": 39135,
        "arcs": [[-3692, 3692, 3693, -3593, -3383]]
      }, {
        "type": "Polygon",
        "id": 8059,
        "arcs": [[-3636, 3694, 3695, 3696, 3697, 3698, 3699, -3672, -3460, -3573]]
      }, {
        "type": "Polygon",
        "id": 8031,
        "arcs": [[3700, -3695, -3635]]
      }, {
        "type": "MultiPolygon",
        "id": 34015,
        "arcs": [[[3701, 3702, 3703, 3704, -3646]]]
      }, {
        "type": "Polygon",
        "id": 17045,
        "arcs": [[3705, 3706, 3707, 3708, -3306, -3526]]
      }, {
        "type": "Polygon",
        "id": 17041,
        "arcs": [[-3709, 3709, 3710, -3446, -3364]]
      }, {
        "type": "Polygon",
        "id": 17137,
        "arcs": [[-3651, 3711, 3712, 3713, 3714, -3553, -3547]]
      }, {
        "type": "Polygon",
        "id": 39111,
        "arcs": [[-3587, 3715, 3716, 3717, -3660, -3510]]
      }, {
        "type": "Polygon",
        "id": 18133,
        "arcs": [[-3688, 3718, 3719, 3720, -3657, -3492]]
      }, {
        "type": "Polygon",
        "id": 8019,
        "arcs": [[-3700, 3721, -3684, -3310, -3673]]
      }, {
        "type": "Polygon",
        "id": 39057,
        "arcs": [[-3551, 3722, 3723, 3724, -3689, -3579]]
      }, {
        "type": "Polygon",
        "id": 17149,
        "arcs": [[-3715, 3725, 3726, 3727, 3728, 3729, -3663, -3495, -3554]]
      }, {
        "type": "MultiPolygon",
        "id": 10003,
        "arcs": [[[3730, 3731]], [[3732, 3733]], [[3734, 3735, 3736, 3737, -3477, -3567, -3475, -3566]]]
      }, {
        "type": "Polygon",
        "id": 17021,
        "arcs": [[-3570, 3738, 3739, -3648]]
      }, {
        "type": "Polygon",
        "id": 29021,
        "arcs": [[-3585, 3740, 3741, 3742, -3643, -3540]]
      }, {
        "type": "Polygon",
        "id": 49007,
        "arcs": [[-3087, -3080, 3743, 3744, -3262]]
      }, {
        "type": "Polygon",
        "id": 49039,
        "arcs": [[-3745, 3745, 3746, 3747, -3591, -3263]]
      }, {
        "type": "Polygon",
        "id": 39129,
        "arcs": [[-3671, 3748, 3749, 3750, -3549, -3532]]
      }, {
        "type": "Polygon",
        "id": 6021,
        "arcs": [[-3523, 3751, 3752, -3602, -3335]]
      }, {
        "type": "Polygon",
        "id": 17139,
        "arcs": [[-3711, 3753, 3754, -3568, -3447]]
      }, {
        "type": "Polygon",
        "id": 18041,
        "arcs": [[3755, 3756, 3757, -3560, -3595]]
      }, {
        "type": "Polygon",
        "id": 18139,
        "arcs": [[-3758, 3758, 3759, 3760, -3666, -3561]]
      }, {
        "type": "Polygon",
        "id": 17171,
        "arcs": [[3761, -3726, -3714]]
      }, {
        "type": "Polygon",
        "id": 29025,
        "arcs": [[-3654, 3762, 3763, 3764, -3583, -3537]]
      }, {
        "type": "MultiPolygon",
        "id": 34033,
        "arcs": [[[3765, 3766]], [[3767, 3768, -3732, 3769, -3734, 3770, -3704]]]
      }, {
        "type": "Polygon",
        "id": 6091,
        "arcs": [[-2807, -2367, 3771, 3772, -3337]]
      }, {
        "type": "Polygon",
        "id": 39115,
        "arcs": [[-3662, 3773, 3774, -3674, -3514]]
      }, {
        "type": "Polygon",
        "id": 29049,
        "arcs": [[-3765, 3775, 3776, 3777, -3741, -3584]]
      }, {
        "type": "Polygon",
        "id": 8005,
        "arcs": [[-3348, 3778, 3779, 3780, -3696, -3701, -3634]]
      }, {
        "type": "Polygon",
        "id": 32019,
        "arcs": [[3781, 3782, 3783, 3784, 3785, -2362, -3625]]
      }, {
        "type": "MultiPolygon",
        "id": 34001,
        "arcs": [[[3786, 3787, 3788, -3702, -3645, -3503]]]
      }, {
        "type": "Polygon",
        "id": 18161,
        "arcs": [[-3694, 3789, 3790, -3756, -3594]]
      }, {
        "type": "Polygon",
        "id": 24043,
        "arcs": [[-3436, 3791, 3792, 3793, 3794, 3795, 3796, -3516]]
      }, {
        "type": "Polygon",
        "id": 24001,
        "arcs": [[-3517, -3797, 3797, 3798, 3799, 3800, -3438, -3423]]
      }, {
        "type": "Polygon",
        "id": 24023,
        "arcs": [[-3801, 3801, 3802, 3803, -3527, -3439]]
      }, {
        "type": "MultiPolygon",
        "id": 24015,
        "arcs": [[[-3738, 3804, 3805, 3806, -3426, -3478]]]
      }, {
        "type": "Polygon",
        "id": 54061,
        "arcs": [[-3529, 3807, 3808, 3809, 3810, -3589]]
      }, {
        "type": "Polygon",
        "id": 54077,
        "arcs": [[-3804, 3811, 3812, 3813, 3814, -3808, -3528]]
      }, {
        "type": "MultiPolygon",
        "id": 24025,
        "arcs": [[[-3427, -3807, 3815, 3816, -3479]]]
      }, {
        "type": "Polygon",
        "id": 54103,
        "arcs": [[-3590, -3811, 3817, 3818, 3819, 3820, -3716, -3586]]
      }, {
        "type": "MultiPolygon",
        "id": 24005,
        "arcs": [[[-3817, 3821, 3822, 3823, 3824, 3825, -3480]]]
      }, {
        "type": "Polygon",
        "id": 24013,
        "arcs": [[-3826, 3826, 3827, -3563, -3481]]
      }, {
        "type": "Polygon",
        "id": 24021,
        "arcs": [[-3828, 3828, 3829, 3830, -3792, -3435, -3564]]
      }, {
        "type": "Polygon",
        "id": 39047,
        "arcs": [[-3751, 3831, 3832, 3833, -3723, -3550]]
      }, {
        "type": "Polygon",
        "id": 49015,
        "arcs": [[-3079, 3834, 3835, 3836, -3746, -3744]]
      }, {
        "type": "Polygon",
        "id": 29041,
        "arcs": [[-3577, 3837, 3838, 3839, 3840, -3652, -3581]]
      }, {
        "type": "Polygon",
        "id": 18145,
        "arcs": [[-3761, 3841, 3842, 3843, -3677, -3667]]
      }, {
        "type": "Polygon",
        "id": 54065,
        "arcs": [[3844, 3845, 3846, -3798, -3796]]
      }, {
        "type": "Polygon",
        "id": 29173,
        "arcs": [[-3730, 3847, 3848, 3849, -3664]]
      }, {
        "type": "Polygon",
        "id": 17029,
        "arcs": [[-3708, 3850, 3851, 3852, -3754, -3710]]
      }, {
        "type": "Polygon",
        "id": 29137,
        "arcs": [[-3665, -3850, 3853, 3854, -3575, -3656]]
      }, {
        "type": "Polygon",
        "id": 39073,
        "arcs": [[3855, 3856, 3857, -3749, -3670, -3676]]
      }, {
        "type": "Polygon",
        "id": 20029,
        "arcs": [[-3619, 3858, 3859, 3860, -3607, -3615]]
      }, {
        "type": "Polygon",
        "id": 20085,
        "arcs": [[3861, 3862, 3863, 3864, -3641, -3639]]
      }, {
        "type": "Polygon",
        "id": 20005,
        "arcs": [[-3743, 3865, 3866, 3867, -3862, -3638, -3644]]
      }, {
        "type": "Polygon",
        "id": 17173,
        "arcs": [[-3755, -3853, 3868, 3869, 3870, 3871, -3739, -3569]]
      }, {
        "type": "Polygon",
        "id": 54057,
        "arcs": [[3872, 3873, -3802, -3800]]
      }, {
        "type": "Polygon",
        "id": 39167,
        "arcs": [[-3718, 3874, 3875, 3876, 3877, -3774, -3661]]
      }, {
        "type": "Polygon",
        "id": 54049,
        "arcs": [[-3810, 3878, 3879, -3818]]
      }, {
        "type": "Polygon",
        "id": 18081,
        "arcs": [[-3844, 3880, 3881, 3882, -3678]]
      }, {
        "type": "Polygon",
        "id": 6115,
        "arcs": [[-3773, 3883, 3884, 3885, -3520, -3338]]
      }, {
        "type": "Polygon",
        "id": 18109,
        "arcs": [[-3883, 3886, 3887, 3888, -3719, -3687, -3679]]
      }, {
        "type": "Polygon",
        "id": 32029,
        "arcs": [[-2363, -3786]]
      }, {
        "type": "Polygon",
        "id": 54003,
        "arcs": [[-3795, 3889, 3890, -3845]]
      }, {
        "type": "Polygon",
        "id": 29033,
        "arcs": [[-3841, 3891, 3892, 3893, -3763, -3653]]
      }, {
        "type": "Polygon",
        "id": 29175,
        "arcs": [[-3855, 3894, 3895, 3896, -3838, -3576]]
      }, {
        "type": "Polygon",
        "id": 18167,
        "arcs": [[3897, 3898, 3899, -3706, -3525, -3659]]
      }, {
        "type": "Polygon",
        "id": 18021,
        "arcs": [[-3721, 3900, 3901, 3902, -3898, -3658]]
      }, {
        "type": "Polygon",
        "id": 54095,
        "arcs": [[3903, 3904, 3905, -3875, -3717, -3821]]
      }, {
        "type": "Polygon",
        "id": 29163,
        "arcs": [[3906, 3907, 3908, -3848, -3729, 3909]]
      }, {
        "type": "Polygon",
        "id": 39017,
        "arcs": [[3910, 3911, 3912, -3790, -3693, -3691]]
      }, {
        "type": "Polygon",
        "id": 39165,
        "arcs": [[-3725, 3913, 3914, 3915, -3911, -3690]]
      }, {
        "type": "Polygon",
        "id": 6033,
        "arcs": [[3916, 3917, 3918, 3919, -3603, -3753]]
      }, {
        "type": "Polygon",
        "id": 8063,
        "arcs": [[-3598, 3920, 3921, 3922, 3923, -3346, -3344]]
      }, {
        "type": "MultiPolygon",
        "id": 34011,
        "arcs": [[[3924, -3767, 3925, -3768, -3703, -3789, 3926, 3927]]]
      }, {
        "type": "Polygon",
        "id": 20163,
        "arcs": [[3928, 3929, 3930, 3931, -3629, -3612]]
      }, {
        "type": "Polygon",
        "id": 39027,
        "arcs": [[3932, 3933, -3914, -3724, -3834, 3934]]
      }, {
        "type": "Polygon",
        "id": 20181,
        "arcs": [[-3601, 3935, 3936, 3937, -3921, -3597]]
      }, {
        "type": "Polygon",
        "id": 20193,
        "arcs": [[-3622, 3938, 3939, 3940, -3936, -3600]]
      }, {
        "type": "Polygon",
        "id": 20141,
        "arcs": [[-3609, 3941, 3942, 3943, 3944, -3929, -3611]]
      }, {
        "type": "Polygon",
        "id": 20179,
        "arcs": [[-3628, 3945, 3946, -3939, -3621]]
      }, {
        "type": "Polygon",
        "id": 20027,
        "arcs": [[3947, 3948, 3949, 3950, -3859, -3618]]
      }, {
        "type": "Polygon",
        "id": 20123,
        "arcs": [[-3861, 3951, 3952, -3942, -3608]]
      }, {
        "type": "Polygon",
        "id": 20065,
        "arcs": [[-3932, 3953, 3954, -3946, -3627, -3630]]
      }, {
        "type": "Polygon",
        "id": 20161,
        "arcs": [[3955, 3956, 3957, -3948, -3617, -3633]]
      }, {
        "type": "Polygon",
        "id": 8035,
        "arcs": [[3958, 3959, 3960, -3697, -3781]]
      }, {
        "type": "Polygon",
        "id": 8039,
        "arcs": [[3961, 3962, -3959, -3780]]
      }, {
        "type": "Polygon",
        "id": 20149,
        "arcs": [[-3642, -3865, 3963, 3964, -3956, -3632]]
      }, {
        "type": "Polygon",
        "id": 8073,
        "arcs": [[-3924, 3965, 3966, 3967, 3968, -3962, -3779, -3347]]
      }, {
        "type": "Polygon",
        "id": 8093,
        "arcs": [[-3699, 3969, 3970, 3971, 3972, -3685, -3722]]
      }, {
        "type": "Polygon",
        "id": 39009,
        "arcs": [[-3878, 3973, 3974, 3975, -3856, -3675, -3775]]
      }, {
        "type": "Polygon",
        "id": 49027,
        "arcs": [[-3748, 3976, 3977, 3978, -3543, -3592]]
      }, {
        "type": "Polygon",
        "id": 54027,
        "arcs": [[-3847, 3979, 3980, -3873, -3799]]
      }, {
        "type": "Polygon",
        "id": 29165,
        "arcs": [[-3742, -3778, 3981, 3982, 3983, -3866]]
      }, {
        "type": "Polygon",
        "id": 18047,
        "arcs": [[-3791, -3913, 3984, 3985, 3986, -3759, -3757]]
      }, {
        "type": "Polygon",
        "id": 29177,
        "arcs": [[-3894, 3987, 3988, 3989, -3776, -3764]]
      }, {
        "type": "Polygon",
        "id": 17135,
        "arcs": [[-3740, -3872, 3990, 3991, 3992, 3993, -3649]]
      }, {
        "type": "Polygon",
        "id": 17117,
        "arcs": [[-3994, 3994, 3995, 3996, -3712, -3650]]
      }, {
        "type": "Polygon",
        "id": 6057,
        "arcs": [[-2366, 3997, -3884, -3772]]
      }, {
        "type": "Polygon",
        "id": 17061,
        "arcs": [[-3713, -3997, 3998, 3999, -3727, -3762]]
      }, {
        "type": "Polygon",
        "id": 39141,
        "arcs": [[-3858, 4000, 4001, 4002, 4003, -3832, -3750]]
      }, {
        "type": "Polygon",
        "id": 54037,
        "arcs": [[4004, 4005, -3890, -3794]]
      }, {
        "type": "Polygon",
        "id": 49019,
        "arcs": [[-3558, 4006, 4007, -3835, -3078]]
      }, {
        "type": "Polygon",
        "id": 17023,
        "arcs": [[-3900, 4008, 4009, 4010, 4011, -3851, -3707]]
      }, {
        "type": "Polygon",
        "id": 54073,
        "arcs": [[4012, 4013, -3876, -3906]]
      }, {
        "type": "Polygon",
        "id": 18119,
        "arcs": [[-3889, 4014, 4015, -3901, -3720]]
      }, {
        "type": "Polygon",
        "id": 54033,
        "arcs": [[4016, 4017, 4018, 4019, 4020, -3819, -3880]]
      }, {
        "type": "Polygon",
        "id": 51069,
        "arcs": [[4021, 4022, 4023, 4024, -3980, -3846, -3891], [4025]]
      }, {
        "type": "Polygon",
        "id": 29047,
        "arcs": [[-3777, -3990, 4026, 4027, -3982]]
      }, {
        "type": "Polygon",
        "id": 18031,
        "arcs": [[-3987, 4028, 4029, 4030, -3842, -3760]]
      }, {
        "type": "Polygon",
        "id": 54091,
        "arcs": [[4031, -4017, -3879, -3809, -3815]]
      }, {
        "type": "Polygon",
        "id": 54017,
        "arcs": [[-4021, 4032, 4033, 4034, -3904, -3820]]
      }, {
        "type": "Polygon",
        "id": 20087,
        "arcs": [[4035, 4036, 4037, -3863, -3868]]
      }, {
        "type": "Polygon",
        "id": 20103,
        "arcs": [[-3984, 4038, 4039, 4040, -4036, -3867]]
      }, {
        "type": "Polygon",
        "id": 6011,
        "arcs": [[-3522, 4041, 4042, -3917, -3752]]
      }, {
        "type": "Polygon",
        "id": 29195,
        "arcs": [[-3840, 4043, 4044, 4045, 4046, -3892]]
      }, {
        "type": "Polygon",
        "id": 54107,
        "arcs": [[-4014, 4047, 4048, 4049, 4050, -3974, -3877]]
      }, {
        "type": "Polygon",
        "id": 17013,
        "arcs": [[-4000, 4051, 4052, 4053, -3910, -3728]]
      }, {
        "type": "Polygon",
        "id": 39163,
        "arcs": [[-3976, 4054, 4055, 4056, -4001, -3857]]
      }, {
        "type": "Polygon",
        "id": 54085,
        "arcs": [[-4035, 4057, 4058, 4059, -4048, -4013, -3905]]
      }, {
        "type": "MultiPolygon",
        "id": 24029,
        "arcs": [[[-3737, 4060, 4061, 4062, -3805]]]
      }, {
        "type": "Polygon",
        "id": 8065,
        "arcs": [[-3686, -3973, 4063, 4064, -3682]]
      }, {
        "type": "Polygon",
        "id": 17035,
        "arcs": [[-4012, 4065, 4066, -3869, -3852]]
      }, {
        "type": "Polygon",
        "id": 39071,
        "arcs": [[-4004, 4067, 4068, 4069, -3935, -3833]]
      }, {
        "type": "MultiPolygon",
        "id": 24510,
        "arcs": [[[4070, 4071]], [[4072, 4073, -3823]]]
      }, {
        "type": "Polygon",
        "id": 24027,
        "arcs": [[-3825, 4074, 4075, 4076, -3829, -3827]]
      }, {
        "type": "Polygon",
        "id": 8077,
        "arcs": [[4077, 4078, 4079, 4080, -4007, -3557]]
      }, {
        "type": "Polygon",
        "id": 8097,
        "arcs": [[-4065, 4081, 4082, -4078, -3556, -3683]]
      }, {
        "type": "Polygon",
        "id": 10001,
        "arcs": [[4083, 4084, 4085, -4061, -3736, 4086]]
      }, {
        "type": "Polygon",
        "id": 18105,
        "arcs": [[4087, 4088, 4089, 4090, -4015, -3888]]
      }, {
        "type": "Polygon",
        "id": 18005,
        "arcs": [[-4031, 4091, 4092, 4093, -3881, -3843]]
      }, {
        "type": "Polygon",
        "id": 29007,
        "arcs": [[-3849, -3909, 4094, 4095, 4096, -3895, -3854]]
      }, {
        "type": "Polygon",
        "id": 24031,
        "arcs": [[4097, 4098, 4099, 4100, -3830, -4077]]
      }, {
        "type": "Polygon",
        "id": 18013,
        "arcs": [[-4094, 4101, -4088, -3887, -3882]]
      }, {
        "type": "Polygon",
        "id": 29089,
        "arcs": [[4102, -4044, -3839, -3897, 4103]]
      }, {
        "type": "Polygon",
        "id": 54023,
        "arcs": [[4104, 4105, 4106, 4107, -3812, -3803, -3874]]
      }, {
        "type": "MultiPolygon",
        "id": 34009,
        "arcs": [[[4108, -3927, -3788]]]
      }, {
        "type": "Polygon",
        "id": 51107,
        "arcs": [[-4101, 4109, 4110, 4111, 4112, -4005, -3793, -3831]]
      }, {
        "type": "Polygon",
        "id": 6061,
        "arcs": [[-2365, 4113, 4114, 4115, 4116, 4117, -3885, -3998]]
      }, {
        "type": "Polygon",
        "id": 39061,
        "arcs": [[-3916, 4118, 4119, 4120, 4121, 4122, -3912]]
      }, {
        "type": "Polygon",
        "id": 18137,
        "arcs": [[4123, 4124, 4125, 4126, 4127, -4029, -3986]]
      }, {
        "type": "Polygon",
        "id": 18029,
        "arcs": [[-3985, -4123, 4128, 4129, -4124]]
      }, {
        "type": "Polygon",
        "id": 20143,
        "arcs": [[-3951, 4130, 4131, 4132, -3952, -3860]]
      }, {
        "type": "Polygon",
        "id": 6101,
        "arcs": [[-3886, -4118, 4133, 4134, -4042, -3521]]
      }, {
        "type": "Polygon",
        "id": 54001,
        "arcs": [[4135, 4136, 4137, -4018, -4032, -3814]]
      }, {
        "type": "Polygon",
        "id": 29107,
        "arcs": [[4138, 4139, 4140, -3988, -3893, -4047]]
      }, {
        "type": "Polygon",
        "id": 54093,
        "arcs": [[4141, -4136, -3813, -4108]]
      }, {
        "type": "Polygon",
        "id": 39025,
        "arcs": [[4142, 4143, 4144, -4119, -3915, -3934, 4145]]
      }, {
        "type": "Polygon",
        "id": 51043,
        "arcs": [[-4113, 4146, 4147, -4022, -4006]]
      }, {
        "type": "Polygon",
        "id": 17083,
        "arcs": [[-3996, 4148, 4149, -4052, -3999]]
      }, {
        "type": "MultiPolygon",
        "id": 24035,
        "arcs": [[[4150]], [[-4086, 4151, 4152, 4153, -4062]]]
      }, {
        "type": "Polygon",
        "id": 18153,
        "arcs": [[-3903, 4154, 4155, 4156, -4009, -3899]]
      }, {
        "type": "Polygon",
        "id": 8051,
        "arcs": [[-4083, 4157, 4158, 4159, 4160, 4161, 4162, -4079]]
      }, {
        "type": "Polygon",
        "id": 39015,
        "arcs": [[4163, 4164, 4165, -4146, -3933, -4070]]
      }, {
        "type": "Polygon",
        "id": 29019,
        "arcs": [[-4097, 4166, 4167, 4168, 4169, -4104, -3896]]
      }, {
        "type": "Polygon",
        "id": 32510,
        "arcs": [[4170, -4114, -2364, -3785]]
      }, {
        "type": "Polygon",
        "id": 54031,
        "arcs": [[-4025, 4171, 4172, 4173, -4105, -3981]]
      }, {
        "type": "MultiPolygon",
        "id": 24003,
        "arcs": [[[4174, 4175, 4176, -4075, -3824, -4074, 4177, -4071, 4178]]]
      }, {
        "type": "Polygon",
        "id": 29095,
        "arcs": [[-3989, -4141, 4179, 4180, 4181, 4182, -4027]]
      }, {
        "type": "Polygon",
        "id": 29113,
        "arcs": [[-4054, 4183, 4184, 4185, -3907]]
      }, {
        "type": "Polygon",
        "id": 20061,
        "arcs": [[4186, 4187, 4188, -3949, -3958]]
      }, {
        "type": "Polygon",
        "id": 8029,
        "arcs": [[-4163, 4189, -4080]]
      }, {
        "type": "Polygon",
        "id": 20105,
        "arcs": [[-4133, 4190, 4191, 4192, -3943, -3953]]
      }, {
        "type": "Polygon",
        "id": 20177,
        "arcs": [[-4038, 4193, 4194, 4195, -3964, -3864]]
      }, {
        "type": "Polygon",
        "id": 17051,
        "arcs": [[-3871, 4196, 4197, 4198, 4199, 4200, -3991]]
      }, {
        "type": "Polygon",
        "id": 17049,
        "arcs": [[-4067, 4201, 4202, -4197, -3870]]
      }, {
        "type": "Polygon",
        "id": 20197,
        "arcs": [[-4196, 4203, 4204, 4205, -4187, -3957, -3965]]
      }, {
        "type": "Polygon",
        "id": 39079,
        "arcs": [[4206, 4207, 4208, 4209, -4002, -4057]]
      }, {
        "type": "Polygon",
        "id": 39105,
        "arcs": [[4210, 4211, -4055, -3975, -4051, 4212]]
      }, {
        "type": "Polygon",
        "id": 51840,
        "arcs": [[-4026]]
      }, {
        "type": "Polygon",
        "id": 20209,
        "arcs": [[-3983, -4028, -4183, 4213, -4039]]
      }, {
        "type": "Polygon",
        "id": 39131,
        "arcs": [[4214, 4215, -4068, -4003, -4210]]
      }, {
        "type": "Polygon",
        "id": 18079,
        "arcs": [[4216, 4217, 4218, -4092, -4030, -4128]]
      }, {
        "type": "Polygon",
        "id": 54105,
        "arcs": [[4219, 4220, 4221, -4049, -4060]]
      }, {
        "type": "Polygon",
        "id": 17033,
        "arcs": [[-4157, 4222, 4223, 4224, 4225, -4010]]
      }, {
        "type": "Polygon",
        "id": 17079,
        "arcs": [[-4226, 4226, 4227, -4202, -4066, -4011]]
      }, {
        "type": "Polygon",
        "id": 18055,
        "arcs": [[-4016, -4091, 4228, 4229, 4230, 4231, -4155, -3902]]
      }, {
        "type": "Polygon",
        "id": 54041,
        "arcs": [[4232, 4233, 4234, 4235, -4033, -4020]]
      }, {
        "type": "Polygon",
        "id": 32023,
        "arcs": [[-2969, -3545, 4236, 4237, 4238, 4239, 4240, -3623, -2971]]
      }, {
        "type": "Polygon",
        "id": 29139,
        "arcs": [[-3908, -4186, 4241, 4242, 4243, 4244, -4095]]
      }, {
        "type": "Polygon",
        "id": 21015,
        "arcs": [[4245, 4246, 4247, 4248, 4249, -4129, -4122]]
      }, {
        "type": "Polygon",
        "id": 24011,
        "arcs": [[4250, 4251, 4252, 4253, -4152, -4085]]
      }, {
        "type": "Polygon",
        "id": 20109,
        "arcs": [[4254, 4255, 4256, 4257, -3937, -3941]]
      }, {
        "type": "Polygon",
        "id": 20199,
        "arcs": [[-4258, 4258, 4259, 4260, -3922, -3938]]
      }, {
        "type": "Polygon",
        "id": 20051,
        "arcs": [[-3945, 4261, 4262, 4263, 4264, -3930]]
      }, {
        "type": "Polygon",
        "id": 20063,
        "arcs": [[-3947, -3955, 4265, 4266, 4267, 4268, -4255, -3940]]
      }, {
        "type": "Polygon",
        "id": 20041,
        "arcs": [[-4189, 4269, 4270, 4271, -4131, -3950]]
      }, {
        "type": "Polygon",
        "id": 20167,
        "arcs": [[-4193, 4272, 4273, 4274, -4262, -3944]]
      }, {
        "type": "Polygon",
        "id": 20195,
        "arcs": [[-3931, -4265, 4275, -4266, -3954]]
      }, {
        "type": "Polygon",
        "id": 24033,
        "arcs": [[-4177, 4276, 4277, 4278, 4279, 4280, -4098, -4076]]
      }, {
        "type": "Polygon",
        "id": 8119,
        "arcs": [[4281, 4282, -3970, -3698, -3961]]
      }, {
        "type": "Polygon",
        "id": 8041,
        "arcs": [[-3963, -3969, 4283, 4284, -4282, -3960]]
      }, {
        "type": "Polygon",
        "id": 21037,
        "arcs": [[-4145, 4285, 4286, -4120]]
      }, {
        "type": "Polygon",
        "id": 54083,
        "arcs": [[-4107, 4287, 4288, 4289, 4290, -4137, -4142]]
      }, {
        "type": "Polygon",
        "id": 32005,
        "arcs": [[-3784, 4291, 4292, 4293, -4115, -4171]]
      }, {
        "type": "Polygon",
        "id": 54097,
        "arcs": [[-4138, -4291, 4294, -4233, -4019]]
      }, {
        "type": "Polygon",
        "id": 54021,
        "arcs": [[-4236, 4295, 4296, -4058, -4034]]
      }, {
        "type": "Polygon",
        "id": 51171,
        "arcs": [[4297, 4298, 4299, -4172, -4024]]
      }, {
        "type": "Polygon",
        "id": 21117,
        "arcs": [[-4287, 4300, 4301, -4246, -4121]]
      }, {
        "type": "Polygon",
        "id": 54035,
        "arcs": [[-4222, 4302, 4303, 4304, 4305, -4213, -4050]]
      }, {
        "type": "Polygon",
        "id": 32021,
        "arcs": [[-4241, 4306, 4307, -3782, -3624]]
      }, {
        "type": "Polygon",
        "id": 18071,
        "arcs": [[-4219, 4308, 4309, 4310, -4089, -4102, -4093]]
      }, {
        "type": "Polygon",
        "id": 20045,
        "arcs": [[-4041, 4311, 4312, 4313, -4194, -4037]]
      }, {
        "type": "Polygon",
        "id": 6017,
        "arcs": [[-4294, 4314, 4315, 4316, -4116]]
      }, {
        "type": "Polygon",
        "id": 29027,
        "arcs": [[-4096, -4245, 4317, 4318, -4167]]
      }, {
        "type": "Polygon",
        "id": 29053,
        "arcs": [[-4170, 4319, 4320, 4321, -4045, -4103]]
      }, {
        "type": "MultiPolygon",
        "id": 51059,
        "arcs": [[[4322, 4323, 4324, 4325, 4326, 4327, -4110, -4100], [4328]], [[4329]]]
      }, {
        "type": "Polygon",
        "id": 8015,
        "arcs": [[-3972, 4330, 4331, -4158, -4082, -4064]]
      }, {
        "type": "Polygon",
        "id": 20091,
        "arcs": [[-4182, 4332, 4333, -4312, -4040, -4214]]
      }, {
        "type": "Polygon",
        "id": 39001,
        "arcs": [[4334, 4335, 4336, -4164, -4069, -4216]]
      }, {
        "type": "Polygon",
        "id": 49041,
        "arcs": [[-3837, 4337, 4338, 4339, -3977, -3747]]
      }, {
        "type": "Polygon",
        "id": 8017,
        "arcs": [[-4261, 4340, 4341, -3966, -3923]]
      }, {
        "type": "Polygon",
        "id": 54013,
        "arcs": [[-4297, 4342, 4343, 4344, -4220, -4059]]
      }, {
        "type": "Polygon",
        "id": 51187,
        "arcs": [[4345, 4346, 4347, -4298, -4023, -4148]]
      }, {
        "type": "Polygon",
        "id": 39053,
        "arcs": [[4348, 4349, 4350, -4207, -4056, -4212]]
      }, {
        "type": "Polygon",
        "id": 18115,
        "arcs": [[4351, -4125, -4130, -4250]]
      }, {
        "type": "Polygon",
        "id": 54053,
        "arcs": [[-4306, 4352, 4353, -4349, -4211]]
      }, {
        "type": "Polygon",
        "id": 17005,
        "arcs": [[-4201, 4354, 4355, -3992]]
      }, {
        "type": "Polygon",
        "id": 39145,
        "arcs": [[-4209, 4356, 4357, 4358, -4335, -4215]]
      }, {
        "type": "Polygon",
        "id": 51061,
        "arcs": [[4359, 4360, 4361, 4362, -4346, -4147, -4112]]
      }, {
        "type": "Polygon",
        "id": 17119,
        "arcs": [[-3995, -3993, -4356, 4363, 4364, 4365, 4366, 4367, -4149]]
      }, {
        "type": "Polygon",
        "id": 29219,
        "arcs": [[4368, 4369, 4370, -4242, -4185]]
      }, {
        "type": "MultiPolygon",
        "id": 11001,
        "arcs": [[[4371, 4372, -4099, -4281]]]
      }, {
        "type": "Polygon",
        "id": 18093,
        "arcs": [[-4311, 4373, 4374, 4375, -4229, -4090]]
      }, {
        "type": "Polygon",
        "id": 29183,
        "arcs": [[-4368, 4376, 4377, -4369, -4184, -4053, -4150]]
      }, {
        "type": "Polygon",
        "id": 10005,
        "arcs": [[4378, 4379, 4380, 4381, 4382, 4383, -4251, -4084]]
      }, {
        "type": "Polygon",
        "id": 20169,
        "arcs": [[-4272, 4384, 4385, -4191, -4132]]
      }, {
        "type": "Polygon",
        "id": 54071,
        "arcs": [[-4174, 4386, 4387, 4388, 4389, -4288, -4106]]
      }, {
        "type": "Polygon",
        "id": 29159,
        "arcs": [[-4322, 4390, 4391, 4392, 4393, -4139, -4046]]
      }, {
        "type": "MultiPolygon",
        "id": 24041,
        "arcs": [[[-4254, 4394, -4153]]]
      }, {
        "type": "Polygon",
        "id": 51153,
        "arcs": [[-4328, 4395, 4396, -4360, -4111], [4397, 4398]]
      }, {
        "type": "Polygon",
        "id": 54087,
        "arcs": [[-4345, 4399, 4400, -4303, -4221]]
      }, {
        "type": "Polygon",
        "id": 29101,
        "arcs": [[-4394, 4401, 4402, -4180, -4140]]
      }, {
        "type": "Polygon",
        "id": 51013,
        "arcs": [[4403, -4325, 4404, -4323, -4373, 4405]]
      }, {
        "type": "Polygon",
        "id": 6003,
        "arcs": [[4406, 4407, 4408, 4409, -4315, -4293]]
      }, {
        "type": "Polygon",
        "id": 18155,
        "arcs": [[-4249, 4410, 4411, 4412, -4126, -4352]]
      }, {
        "type": "Polygon",
        "id": 29135,
        "arcs": [[4413, 4414, 4415, -4320, -4169]]
      }, {
        "type": "Polygon",
        "id": 6113,
        "arcs": [[-4135, 4416, 4417, 4418, -3918, -4043]]
      }, {
        "type": "Polygon",
        "id": 18077,
        "arcs": [[-4413, 4419, 4420, 4421, 4422, -4217, -4127]]
      }, {
        "type": "Polygon",
        "id": 17025,
        "arcs": [[-4228, 4423, 4424, 4425, -4198, -4203]]
      }, {
        "type": "Polygon",
        "id": 18083,
        "arcs": [[4426, 4427, 4428, 4429, 4430, -4223, -4156, -4232]]
      }, {
        "type": "Polygon",
        "id": 18101,
        "arcs": [[-4376, 4431, 4432, 4433, -4230]]
      }, {
        "type": "Polygon",
        "id": 18027,
        "arcs": [[4434, 4435, -4427, -4231, -4434]]
      }, {
        "type": "Polygon",
        "id": 54007,
        "arcs": [[-4235, 4436, 4437, 4438, -4343, -4296]]
      }, {
        "type": "Polygon",
        "id": 51610,
        "arcs": [[-4324, -4405]]
      }, {
        "type": "Polygon",
        "id": 29189,
        "arcs": [[-4367, 4439, 4440, 4441, 4442, 4443, -4377]]
      }, {
        "type": "Polygon",
        "id": 21191,
        "arcs": [[4444, 4445, -4301, -4286, -4144, 4446]]
      }, {
        "type": "Polygon",
        "id": 20127,
        "arcs": [[-4206, 4447, 4448, 4449, -4270, -4188]]
      }, {
        "type": "Polygon",
        "id": 20053,
        "arcs": [[-4386, 4450, 4451, 4452, -4273, -4192]]
      }, {
        "type": "Polygon",
        "id": 20139,
        "arcs": [[-4314, 4453, 4454, 4455, -4204, -4195]]
      }, {
        "type": "Polygon",
        "id": 51600,
        "arcs": [[-4329], [-4330]]
      }, {
        "type": "Polygon",
        "id": 6055,
        "arcs": [[4456, 4457, 4458, 4459, 4460, -3919, -4419]]
      }, {
        "type": "Polygon",
        "id": 51157,
        "arcs": [[4461, 4462, 4463, -4347, -4363]]
      }, {
        "type": "Polygon",
        "id": 21077,
        "arcs": [[4464, 4465, 4466, -4411, -4248]]
      }, {
        "type": "Polygon",
        "id": 6097,
        "arcs": [[-3920, -4461, 4467, 4468, 4469, -3604]]
      }, {
        "type": "Polygon",
        "id": 17101,
        "arcs": [[4470, 4471, -4224, -4431]]
      }, {
        "type": "Polygon",
        "id": 51165,
        "arcs": [[-4300, 4472, 4473, 4474, 4475, -4387, -4173], [4476]]
      }, {
        "type": "Polygon",
        "id": 17159,
        "arcs": [[-4225, -4472, 4477, 4478, 4479, -4424, -4227]]
      }, {
        "type": "Polygon",
        "id": 39087,
        "arcs": [[4480, 4481, 4482, 4483, -4357, -4208, -4351]]
      }, {
        "type": "Polygon",
        "id": 29037,
        "arcs": [[-4403, 4484, 4485, 4486, -4333, -4181]]
      }, {
        "type": "Polygon",
        "id": 51510,
        "arcs": [[4487, -4326, -4404]]
      }, {
        "type": "Polygon",
        "id": 51139,
        "arcs": [[-4464, 4488, 4489, -4473, -4299, -4348]]
      }, {
        "type": "Polygon",
        "id": 18143,
        "arcs": [[-4423, 4490, 4491, -4309, -4218]]
      }, {
        "type": "Polygon",
        "id": 21023,
        "arcs": [[-4166, 4492, 4493, 4494, -4447, -4143]]
      }, {
        "type": "Polygon",
        "id": 17121,
        "arcs": [[-4426, 4495, 4496, 4497, 4498, -4199]]
      }, {
        "type": "Polygon",
        "id": 21081,
        "arcs": [[-4302, -4446, 4499, 4500, 4501, -4465, -4247]]
      }, {
        "type": "Polygon",
        "id": 51685,
        "arcs": [[4502, -4398]]
      }, {
        "type": "Polygon",
        "id": 18175,
        "arcs": [[-4492, 4503, 4504, 4505, 4506, 4507, -4374, -4310]]
      }, {
        "type": "Polygon",
        "id": 51683,
        "arcs": [[-4503, -4399]]
      }, {
        "type": "Polygon",
        "id": 29510,
        "arcs": [[-4440, -4366, 4508]]
      }, {
        "type": "Polygon",
        "id": 24009,
        "arcs": [[4509, -4277, -4176]]
      }, {
        "type": "Polygon",
        "id": 21161,
        "arcs": [[-4337, 4510, 4511, 4512, -4493, -4165]]
      }, {
        "type": "Polygon",
        "id": 21041,
        "arcs": [[4513, 4514, 4515, -4420, -4412, -4467]]
      }, {
        "type": "Polygon",
        "id": 21089,
        "arcs": [[-4484, 4516, 4517, 4518, -4358]]
      }, {
        "type": "Polygon",
        "id": 17027,
        "arcs": [[-4200, -4499, 4519, 4520, -4364, -4355]]
      }, {
        "type": "Polygon",
        "id": 54075,
        "arcs": [[-4390, 4521, 4522, 4523, 4524, -4289]]
      }, {
        "type": "Polygon",
        "id": 29051,
        "arcs": [[-4319, 4525, 4526, -4414, -4168]]
      }, {
        "type": "Polygon",
        "id": 20111,
        "arcs": [[-4456, 4527, 4528, 4529, -4448, -4205]]
      }, {
        "type": "Polygon",
        "id": 20059,
        "arcs": [[4530, 4531, 4532, -4454, -4313]]
      }, {
        "type": "Polygon",
        "id": 20121,
        "arcs": [[-4487, 4533, 4534, -4531, -4334]]
      }, {
        "type": "Polygon",
        "id": 54101,
        "arcs": [[-4295, -4290, -4525, 4535, 4536, -4437, -4234]]
      }, {
        "type": "MultiPolygon",
        "id": 6067,
        "arcs": [[[4537, 4538, 4539, 4540, -4417, -4134, -4117, -4317]]]
      }, {
        "type": "Polygon",
        "id": 21223,
        "arcs": [[-4516, 4541, 4542, 4543, -4421]]
      }, {
        "type": "Polygon",
        "id": 21187,
        "arcs": [[-4502, 4544, 4545, 4546, -4514, -4466]]
      }, {
        "type": "Polygon",
        "id": 21135,
        "arcs": [[4547, 4548, 4549, -4511, -4336, -4359, -4519]]
      }, {
        "type": "Polygon",
        "id": 29073,
        "arcs": [[-4371, 4550, 4551, 4552, 4553, 4554, -4243]]
      }, {
        "type": "Polygon",
        "id": 6051,
        "arcs": [[-3783, -4308, 4555, 4556, 4557, 4558, 4559, -4407, -4292]]
      }, {
        "type": "Polygon",
        "id": 29071,
        "arcs": [[-4378, -4444, 4560, 4561, 4562, -4551, -4370]]
      }, {
        "type": "Polygon",
        "id": 29151,
        "arcs": [[-4244, -4555, 4563, 4564, -4526, -4318]]
      }, {
        "type": "Polygon",
        "id": 6005,
        "arcs": [[-4410, 4565, 4566, -4538, -4316]]
      }, {
        "type": "MultiPolygon",
        "id": 24019,
        "arcs": [[[4567, -4252, -4384, 4568, 4569]]]
      }, {
        "type": "Polygon",
        "id": 20171,
        "arcs": [[-4269, 4570, 4571, 4572, 4573, -4256]]
      }, {
        "type": "Polygon",
        "id": 20101,
        "arcs": [[4574, 4575, -4571, -4268]]
      }, {
        "type": "Polygon",
        "id": 20071,
        "arcs": [[4576, 4577, 4578, 4579, -4341, -4260]]
      }, {
        "type": "Polygon",
        "id": 20203,
        "arcs": [[-4574, 4580, 4581, -4577, -4259, -4257]]
      }, {
        "type": "Polygon",
        "id": 51047,
        "arcs": [[4582, 4583, 4584, 4585, -4462, -4362]]
      }, {
        "type": "Polygon",
        "id": 20135,
        "arcs": [[-4276, -4264, 4586, 4587, 4588, 4589, -4575, -4267]]
      }, {
        "type": "Polygon",
        "id": 29141,
        "arcs": [[-4416, 4590, 4591, 4592, -4391, -4321]]
      }, {
        "type": "Polygon",
        "id": 20009,
        "arcs": [[-4453, 4593, 4594, 4595, 4596, -4274]]
      }, {
        "type": "Polygon",
        "id": 8043,
        "arcs": [[-4285, 4597, 4598, 4599, -4331, -3971, -4283]]
      }, {
        "type": "Polygon",
        "id": 20165,
        "arcs": [[-4275, -4597, 4600, -4587, -4263]]
      }, {
        "type": "MultiPolygon",
        "id": 24017,
        "arcs": [[[-4279, 4601, 4602, 4603]]]
      }, {
        "type": "Polygon",
        "id": 18117,
        "arcs": [[-4508, 4604, 4605, -4432, -4375]]
      }, {
        "type": "Polygon",
        "id": 54079,
        "arcs": [[4606, 4607, -4353, -4305, 4608]]
      }, {
        "type": "Polygon",
        "id": 32017,
        "arcs": [[-3979, 4609, 4610, 4611, 4612, 4613, -4237, -3544]]
      }, {
        "type": "Polygon",
        "id": 8085,
        "arcs": [[-4162, 4614, 4615, 4616, -4081, -4190]]
      }, {
        "type": "Polygon",
        "id": 54015,
        "arcs": [[4617, 4618, -4400, -4344, -4439]]
      }, {
        "type": "Polygon",
        "id": 17163,
        "arcs": [[-4521, 4619, 4620, 4621, -4441, -4509, -4365]]
      }, {
        "type": "Polygon",
        "id": 51113,
        "arcs": [[-4586, 4622, 4623, -4489, -4463]]
      }, {
        "type": "Polygon",
        "id": 54039,
        "arcs": [[-4401, -4619, 4624, 4625, 4626, 4627, 4628, -4609, -4304]]
      }, {
        "type": "Polygon",
        "id": 8061,
        "arcs": [[-4580, 4629, 4630, 4631, 4632, -3967, -4342]]
      }, {
        "type": "Polygon",
        "id": 20113,
        "arcs": [[4633, 4634, 4635, 4636, -4451, -4385]]
      }, {
        "type": "Polygon",
        "id": 20115,
        "arcs": [[-4450, 4637, 4638, 4639, -4634, -4271]]
      }, {
        "type": "Polygon",
        "id": 21201,
        "arcs": [[-4513, 4640, 4641, 4642, -4494]]
      }, {
        "type": "Polygon",
        "id": 17191,
        "arcs": [[-4480, 4643, 4644, 4645, 4646, -4496, -4425]]
      }, {
        "type": "Polygon",
        "id": 18019,
        "arcs": [[-4544, 4647, 4648, 4649, -4504, -4491, -4422]]
      }, {
        "type": "Polygon",
        "id": 54011,
        "arcs": [[-4354, -4608, 4650, 4651, -4481, -4350]]
      }, {
        "type": "Polygon",
        "id": 21103,
        "arcs": [[4652, 4653, 4654, -4542, -4515, -4547]]
      }, {
        "type": "Polygon",
        "id": 51091,
        "arcs": [[4655, 4656, -4522, -4389]]
      }, {
        "type": "Polygon",
        "id": 51179,
        "arcs": [[4657, 4658, 4659, 4660, 4661, 4662, -4583, -4361, -4397]]
      }, {
        "type": "Polygon",
        "id": 21097,
        "arcs": [[-4643, 4663, 4664, 4665, -4500, -4445, -4495]]
      }, {
        "type": "Polygon",
        "id": 49001,
        "arcs": [[-4340, 4666, 4667, 4668, -4610, -3978]]
      }, {
        "type": "Polygon",
        "id": 17047,
        "arcs": [[4669, 4670, -4644, -4479]]
      }, {
        "type": "Polygon",
        "id": 17185,
        "arcs": [[-4478, -4471, -4430, 4671, 4672, -4670]]
      }, {
        "type": "Polygon",
        "id": 29083,
        "arcs": [[-4393, 4673, 4674, 4675, -4485, -4402]]
      }, {
        "type": "Polygon",
        "id": 24045,
        "arcs": [[4676, 4677, 4678, -4569, -4383]]
      }, {
        "type": "Polygon",
        "id": 54067,
        "arcs": [[-4537, 4679, 4680, -4625, -4618, -4438]]
      }, {
        "type": "Polygon",
        "id": 18125,
        "arcs": [[4681, 4682, 4683, -4428, -4436]]
      }, {
        "type": "MultiPolygon",
        "id": 6095,
        "arcs": [[[4684, -4459]], [[-4541, 4685, -4457, -4418]]]
      }, {
        "type": "Polygon",
        "id": 29015,
        "arcs": [[-4593, 4686, 4687, 4688, -4674, -4392]]
      }, {
        "type": "Polygon",
        "id": 18051,
        "arcs": [[4689, 4690, 4691, 4692, -4672, -4429, -4684]]
      }, {
        "type": "Polygon",
        "id": 18037,
        "arcs": [[-4606, 4693, 4694, 4695, 4696, -4682, -4435, -4433]]
      }, {
        "type": "Polygon",
        "id": 21069,
        "arcs": [[4697, 4698, 4699, -4641, -4512, -4550]]
      }, {
        "type": "Polygon",
        "id": 21185,
        "arcs": [[-4655, 4700, 4701, -4648, -4543]]
      }, {
        "type": "Polygon",
        "id": 20017,
        "arcs": [[-4530, 4702, 4703, -4638, -4449]]
      }, {
        "type": "Polygon",
        "id": 8101,
        "arcs": [[4704, 4705, 4706, 4707, 4708, -4598, -4284]]
      }, {
        "type": "Polygon",
        "id": 8025,
        "arcs": [[-4633, 4709, -4705, -3968]]
      }, {
        "type": "Polygon",
        "id": 20159,
        "arcs": [[-4637, 4710, 4711, -4594, -4452]]
      }, {
        "type": "Polygon",
        "id": 17133,
        "arcs": [[4712, 4713, 4714, -4442, -4622]]
      }, {
        "type": "Polygon",
        "id": 17189,
        "arcs": [[-4498, 4715, 4716, 4717, -4620, -4520]]
      }, {
        "type": "MultiPolygon",
        "id": 24037,
        "arcs": [[[4718, -4603, 4719]]]
      }, {
        "type": "Polygon",
        "id": 6009,
        "arcs": [[4720, 4721, 4722, -4566, -4409]]
      }, {
        "type": "Polygon",
        "id": 49031,
        "arcs": [[4723, 4724, -4667, -4339]]
      }, {
        "type": "Polygon",
        "id": 49055,
        "arcs": [[-3836, 4725, 4726, -4724, -4338]]
      }, {
        "type": "Polygon",
        "id": 29099,
        "arcs": [[-4715, 4727, 4728, 4729, -4561, -4443]]
      }, {
        "type": "Polygon",
        "id": 21019,
        "arcs": [[4730, 4731, -4517, -4483, 4732]]
      }, {
        "type": "Polygon",
        "id": 21043,
        "arcs": [[-4732, 4733, 4734, 4735, -4548, -4518]]
      }, {
        "type": "Polygon",
        "id": 49037,
        "arcs": [[-4617, 4736, 4737, 4738, 4739, 4740, 4741, 4742, 4743, -4726, -4008]]
      }, {
        "type": "Polygon",
        "id": 21209,
        "arcs": [[4744, 4745, 4746, 4747, -4545, -4501, -4666]]
      }, {
        "type": "Polygon",
        "id": 51660,
        "arcs": [[-4477]]
      }, {
        "type": "Polygon",
        "id": 51079,
        "arcs": [[4748, 4749, -4474, -4490, -4624]]
      }, {
        "type": "Polygon",
        "id": 51015,
        "arcs": [[4750, 4751, 4752, 4753, -4656, -4388, -4476], [4754], [4755]]
      }, {
        "type": "Polygon",
        "id": 17081,
        "arcs": [[-4647, 4756, 4757, 4758, -4716, -4497]]
      }, {
        "type": "Polygon",
        "id": 29013,
        "arcs": [[-4676, 4759, 4760, 4761, -4534, -4486]]
      }, {
        "type": "Polygon",
        "id": 32009,
        "arcs": [[4762, -4556, -4307, -4240]]
      }, {
        "type": "Polygon",
        "id": 21181,
        "arcs": [[-4700, 4763, 4764, -4664, -4642]]
      }, {
        "type": "Polygon",
        "id": 8109,
        "arcs": [[-4600, 4765, 4766, 4767, 4768, 4769, 4770, -4159, -4332]]
      }, {
        "type": "MultiPolygon",
        "id": 24047,
        "arcs": [[[4771, 4772]], [[-4380, 4773]], [[4774, 4775, 4776, 4777, -4677, -4382, 4778]]]
      }, {
        "type": "Polygon",
        "id": 6109,
        "arcs": [[-4560, 4779, 4780, 4781, -4721, -4408]]
      }, {
        "type": "Polygon",
        "id": 20031,
        "arcs": [[-4533, 4782, 4783, 4784, -4528, -4455]]
      }, {
        "type": "Polygon",
        "id": 29131,
        "arcs": [[-4527, -4565, 4785, 4786, 4787, -4591, -4415]]
      }, {
        "type": "Polygon",
        "id": 18025,
        "arcs": [[4788, 4789, 4790, -4694, -4605, -4507]]
      }, {
        "type": "Polygon",
        "id": 18061,
        "arcs": [[4791, 4792, 4793, 4794, -4789, -4506]]
      }, {
        "type": "Polygon",
        "id": 54099,
        "arcs": [[-4652, 4795, 4796, 4797, 4798, -4733, -4482]]
      }, {
        "type": "Polygon",
        "id": 18043,
        "arcs": [[-4650, 4799, -4792, -4505]]
      }, {
        "type": "Polygon",
        "id": 51099,
        "arcs": [[4800, 4801, 4802, 4803, -4659, 4804]]
      }, {
        "type": "Polygon",
        "id": 21205,
        "arcs": [[-4736, 4805, 4806, 4807, 4808, -4698, -4549]]
      }, {
        "type": "Polygon",
        "id": 51137,
        "arcs": [[4809, 4810, 4811, -4749, -4623, -4585]]
      }, {
        "type": "Polygon",
        "id": 20003,
        "arcs": [[4812, 4813, -4783, -4532]]
      }, {
        "type": "Polygon",
        "id": 20107,
        "arcs": [[-4762, 4814, 4815, -4813, -4535]]
      }, {
        "type": "Polygon",
        "id": 21111,
        "arcs": [[4816, 4817, 4818, 4819, -4793, -4800, -4649, -4702]]
      }, {
        "type": "Polygon",
        "id": 51177,
        "arcs": [[-4663, 4820, -4661, 4821, 4822, 4823, -4810, -4584]]
      }, {
        "type": "Polygon",
        "id": 54043,
        "arcs": [[-4607, -4629, 4824, 4825, 4826, -4796, -4651]]
      }, {
        "type": "Polygon",
        "id": 21073,
        "arcs": [[-4546, -4748, 4827, 4828, 4829, -4653]]
      }, {
        "type": "Polygon",
        "id": 21017,
        "arcs": [[4830, 4831, 4832, -4745, -4665, -4765]]
      }, {
        "type": "Polygon",
        "id": 21211,
        "arcs": [[4833, 4834, -4817, -4701, -4654, -4830]]
      }, {
        "type": "Polygon",
        "id": 20145,
        "arcs": [[-4596, 4835, 4836, 4837, -4588, -4601]]
      }, {
        "type": "Polygon",
        "id": 8091,
        "arcs": [[-4161, 4838, 4839, 4840, -4615]]
      }, {
        "type": "Polygon",
        "id": 51630,
        "arcs": [[-4821, -4662]]
      }, {
        "type": "MultiPolygon",
        "id": 6041,
        "arcs": [[[4841, -4469]]]
      }, {
        "type": "Polygon",
        "id": 21011,
        "arcs": [[-4809, 4842, 4843, -4764, -4699]]
      }, {
        "type": "Polygon",
        "id": 6077,
        "arcs": [[-4567, -4723, 4844, 4845, 4846, 4847, -4539]]
      }, {
        "type": "Polygon",
        "id": 29125,
        "arcs": [[-4554, 4848, 4849, -4786, -4564]]
      }, {
        "type": "MultiPolygon",
        "id": 24039,
        "arcs": [[[4850, 4851]], [[4852, 4853, 4854, 4855]], [[4856, 4857, 4858]], [[4859, -4678, -4778, 4860]]]
      }, {
        "type": "Polygon",
        "id": 51003,
        "arcs": [[-4812, 4861, 4862, 4863, 4864, -4751, -4475, -4750], [4865]]
      }, {
        "type": "MultiPolygon",
        "id": 51193,
        "arcs": [[[4866, 4867, 4868, -4801, 4869]]]
      }, {
        "type": "Polygon",
        "id": 29029,
        "arcs": [[-4788, 4870, 4871, 4872, 4873, -4687, -4592]]
      }, {
        "type": "Polygon",
        "id": 21127,
        "arcs": [[-4799, 4874, 4875, 4876, 4877, -4734, -4731]]
      }, {
        "type": "Polygon",
        "id": 51017,
        "arcs": [[-4657, -4754, 4878, 4879, 4880, -4523]]
      }, {
        "type": "Polygon",
        "id": 8099,
        "arcs": [[-4579, 4881, 4882, 4883, 4884, -4630]]
      }, {
        "type": "Polygon",
        "id": 54025,
        "arcs": [[-4881, 4885, 4886, 4887, 4888, -4680, -4536, -4524]]
      }, {
        "type": "Polygon",
        "id": 21063,
        "arcs": [[-4878, 4889, -4806, -4735]]
      }, {
        "type": "Polygon",
        "id": 8027,
        "arcs": [[-4709, 4890, -4766, -4599]]
      }, {
        "type": "Polygon",
        "id": 8011,
        "arcs": [[-4885, 4891, 4892, 4893, -4631]]
      }, {
        "type": "Polygon",
        "id": 8089,
        "arcs": [[-4894, 4894, -4706, -4710, -4632]]
      }, {
        "type": "Polygon",
        "id": 18123,
        "arcs": [[4895, 4896, 4897, 4898, -4695, -4791]]
      }, {
        "type": "Polygon",
        "id": 54019,
        "arcs": [[-4681, -4889, 4899, 4900, -4626]]
      }, {
        "type": "Polygon",
        "id": 20093,
        "arcs": [[4901, 4902, 4903, -4581, -4573]]
      }, {
        "type": "Polygon",
        "id": 20055,
        "arcs": [[-4576, -4590, 4904, 4905, 4906, -4902, -4572]]
      }, {
        "type": "Polygon",
        "id": 20075,
        "arcs": [[-4904, 4907, -4882, -4578, -4582]]
      }, {
        "type": "Polygon",
        "id": 17193,
        "arcs": [[-4673, -4693, 4908, 4909, 4910, -4645, -4671]]
      }, {
        "type": "Polygon",
        "id": 20185,
        "arcs": [[-4712, 4911, 4912, 4913, -4836, -4595]]
      }, {
        "type": "Polygon",
        "id": 20083,
        "arcs": [[-4838, 4914, 4915, 4916, -4905, -4589]]
      }, {
        "type": "Polygon",
        "id": 17065,
        "arcs": [[-4911, 4917, 4918, 4919, -4757, -4646]]
      }, {
        "type": "Polygon",
        "id": 51033,
        "arcs": [[-4804, 4920, 4921, 4922, 4923, -4822, -4660]]
      }, {
        "type": "Polygon",
        "id": 18173,
        "arcs": [[-4697, 4924, 4925, 4926, 4927, -4690, -4683]]
      }, {
        "type": "Polygon",
        "id": 18129,
        "arcs": [[4928, 4929, 4930, 4931, -4909, -4692]]
      }, {
        "type": "Polygon",
        "id": 54005,
        "arcs": [[4932, 4933, 4934, -4825, -4628]]
      }, {
        "type": "Polygon",
        "id": 17157,
        "arcs": [[-4621, -4718, 4935, 4936, 4937, 4938, -4713]]
      }, {
        "type": "Polygon",
        "id": 29185,
        "arcs": [[-4689, 4939, 4940, 4941, 4942, -4760, -4675]]
      }, {
        "type": "Polygon",
        "id": 17145,
        "arcs": [[-4717, -4759, 4943, 4944, -4936]]
      }, {
        "type": "Polygon",
        "id": 29055,
        "arcs": [[-4563, 4945, 4946, 4947, 4948, -4552]]
      }, {
        "type": "Polygon",
        "id": 21067,
        "arcs": [[4949, 4950, 4951, 4952, -4746, -4833]]
      }, {
        "type": "Polygon",
        "id": 29221,
        "arcs": [[-4730, 4953, 4954, -4946, -4562]]
      }, {
        "type": "Polygon",
        "id": 18147,
        "arcs": [[-4899, 4955, 4956, -4925, -4696]]
      }, {
        "type": "Polygon",
        "id": 21163,
        "arcs": [[4957, 4958, -4896, -4790, -4795]]
      }, {
        "type": "Polygon",
        "id": 51790,
        "arcs": [[-4755]]
      }, {
        "type": "Polygon",
        "id": 21239,
        "arcs": [[-4953, 4959, 4960, 4961, -4828, -4747]]
      }, {
        "type": "Polygon",
        "id": 21173,
        "arcs": [[4962, 4963, 4964, -4831, -4844]]
      }, {
        "type": "Polygon",
        "id": 20079,
        "arcs": [[4965, 4966, 4967, -4635, -4640]]
      }, {
        "type": "Polygon",
        "id": 20073,
        "arcs": [[-4529, -4785, 4968, 4969, 4970, 4971, -4703]]
      }, {
        "type": "Polygon",
        "id": 20155,
        "arcs": [[-4636, -4968, 4972, 4973, 4974, -4912, -4711]]
      }, {
        "type": "Polygon",
        "id": 18163,
        "arcs": [[-4928, 4975, -4929, -4691]]
      }, {
        "type": "Polygon",
        "id": 29161,
        "arcs": [[-4949, 4976, 4977, 4978, -4849, -4553]]
      }, {
        "type": "Polygon",
        "id": 49017,
        "arcs": [[-4744, 4979, 4980, -4668, -4725, -4727]]
      }, {
        "type": "Polygon",
        "id": 51057,
        "arcs": [[4981, 4982, -4921, -4803, 4983]]
      }, {
        "type": "Polygon",
        "id": 8113,
        "arcs": [[-4841, 4984, 4985, -4737, -4616]]
      }, {
        "type": "Polygon",
        "id": 51109,
        "arcs": [[-4824, 4986, 4987, 4988, -4862, -4811]]
      }, {
        "type": "Polygon",
        "id": 49021,
        "arcs": [[-4981, 4989, 4990, -4611, -4669]]
      }, {
        "type": "Polygon",
        "id": 21215,
        "arcs": [[4991, 4992, 4993, -4818, -4835]]
      }, {
        "type": "Polygon",
        "id": 8053,
        "arcs": [[-4771, 4994, 4995, 4996, 4997, -4839, -4160]]
      }, {
        "type": "Polygon",
        "id": 21005,
        "arcs": [[-4962, 4998, 4999, 5000, -4992, -4834, -4829]]
      }, {
        "type": "Polygon",
        "id": 17055,
        "arcs": [[-4920, 5001, 5002, 5003, -4944, -4758]]
      }, {
        "type": "Polygon",
        "id": 51159,
        "arcs": [[5004, 5005, 5006, -4868]]
      }, {
        "type": "Polygon",
        "id": 29186,
        "arcs": [[-4939, 5007, 5008, -4728, -4714]]
      }, {
        "type": "Polygon",
        "id": 21029,
        "arcs": [[5009, 5010, -4819, -4994]]
      }, {
        "type": "Polygon",
        "id": 21175,
        "arcs": [[-4877, 5011, 5012, 5013, 5014, -4807, -4890]]
      }, {
        "type": "Polygon",
        "id": 21049,
        "arcs": [[5015, 5016, 5017, -4950, -4832, -4965]]
      }, {
        "type": "MultiPolygon",
        "id": 6013,
        "arcs": [[[-4847, 5018, 5019]]]
      }, {
        "type": "Polygon",
        "id": 51820,
        "arcs": [[-4756]]
      }, {
        "type": "Polygon",
        "id": 20015,
        "arcs": [[-4704, -4972, 5020, 5021, 5022, -4966, -4639]]
      }, {
        "type": "Polygon",
        "id": 20047,
        "arcs": [[-4914, 5023, 5024, 5025, -4915, -4837]]
      }, {
        "type": "Polygon",
        "id": 51163,
        "arcs": [[5026, 5027, 5028, 5029, -4879, -4753, 5030], [5031], [5032]]
      }, {
        "type": "Polygon",
        "id": 29187,
        "arcs": [[-5009, 5033, 5034, 5035, -4954, -4729]]
      }, {
        "type": "Polygon",
        "id": 6099,
        "arcs": [[5036, 5037, 5038, -4845, -4722, -4782]]
      }, {
        "type": "Polygon",
        "id": 29085,
        "arcs": [[-4874, 5039, 5040, -4940, -4688]]
      }, {
        "type": "Polygon",
        "id": 51540,
        "arcs": [[-4866]]
      }, {
        "type": "Polygon",
        "id": 29217,
        "arcs": [[-4943, 5041, 5042, 5043, 5044, -4815, -4761]]
      }, {
        "type": "Polygon",
        "id": 21165,
        "arcs": [[-4808, -5015, 5045, 5046, -4963, -4843]]
      }, {
        "type": "Polygon",
        "id": 51125,
        "arcs": [[5047, 5048, 5049, -5031, -4752, -4865]]
      }, {
        "type": "Polygon",
        "id": 21027,
        "arcs": [[5050, 5051, 5052, 5053, -4897, -4959]]
      }, {
        "type": "Polygon",
        "id": 20207,
        "arcs": [[5054, 5055, -4969, -4784]]
      }, {
        "type": "Polygon",
        "id": 20001,
        "arcs": [[5056, 5057, -5055, -4814]]
      }, {
        "type": "Polygon",
        "id": 20011,
        "arcs": [[-5045, 5058, 5059, -5057, -4816]]
      }, {
        "type": "MultiPolygon",
        "id": 51001,
        "arcs": [[[5060, -4854]], [[5061, -4858]], [[-4851, 5062]], [[5063, 5064, 5065, 5066, -4776, 5067]], [[-4772, 5068]]]
      }, {
        "type": "Polygon",
        "id": 54045,
        "arcs": [[-4935, 5069, 5070, -4826]]
      }, {
        "type": "Polygon",
        "id": 51133,
        "arcs": [[5071, -5005, -4867, 5072]]
      }, {
        "type": "Polygon",
        "id": 29169,
        "arcs": [[-4850, -4979, 5073, 5074, -4871, -4787]]
      }, {
        "type": "Polygon",
        "id": 8055,
        "arcs": [[-4708, 5075, 5076, 5077, -4767, -4891]]
      }, {
        "type": "Polygon",
        "id": 51085,
        "arcs": [[-4924, 5078, 5079, 5080, 5081, -4987, -4823]]
      }, {
        "type": "Polygon",
        "id": 51065,
        "arcs": [[5082, 5083, -4863, -4989, 5084]]
      }, {
        "type": "Polygon",
        "id": 21093,
        "arcs": [[5085, 5086, 5087, 5088, -5051, -4958, -4794, -4820, -5011]]
      }, {
        "type": "Polygon",
        "id": 21113,
        "arcs": [[5089, 5090, 5091, -4960, -4952]]
      }, {
        "type": "Polygon",
        "id": 21115,
        "arcs": [[5092, 5093, 5094, -5012, -4876]]
      }, {
        "type": "Polygon",
        "id": 20069,
        "arcs": [[-4917, 5095, 5096, 5097, -4906]]
      }, {
        "type": "Polygon",
        "id": 21091,
        "arcs": [[-5054, 5098, 5099, -4956, -4898]]
      }, {
        "type": "Polygon",
        "id": 54081,
        "arcs": [[-4627, -4901, 5100, 5101, 5102, -4933]]
      }, {
        "type": "Polygon",
        "id": 21179,
        "arcs": [[-5001, 5103, 5104, 5105, -5086, -5010, -4993]]
      }, {
        "type": "Polygon",
        "id": 54059,
        "arcs": [[5106, 5107, 5108, 5109, 5110, -4797, -4827, -5071]]
      }, {
        "type": "Polygon",
        "id": 21101,
        "arcs": [[-4927, 5111, 5112, 5113, 5114, -4930, -4976]]
      }, {
        "type": "Polygon",
        "id": 51097,
        "arcs": [[-4983, 5115, 5116, 5117, 5118, -4922]]
      }, {
        "type": "Polygon",
        "id": 8111,
        "arcs": [[-4998, 5119, 5120, -4985, -4840]]
      }, {
        "type": "Polygon",
        "id": 21167,
        "arcs": [[-5092, 5121, 5122, 5123, -4999, -4961]]
      }, {
        "type": "Polygon",
        "id": 8079,
        "arcs": [[5124, 5125, -4995, -4770]]
      }, {
        "type": "Polygon",
        "id": 21159,
        "arcs": [[-4798, -5111, 5126, 5127, -5093, -4875]]
      }, {
        "type": "Polygon",
        "id": 51005,
        "arcs": [[-5030, 5128, 5129, 5130, -4886, -4880], [5131]]
      }, {
        "type": "Polygon",
        "id": 17077,
        "arcs": [[-5004, 5132, 5133, 5134, -4937, -4945]]
      }, {
        "type": "Polygon",
        "id": 21197,
        "arcs": [[-5047, 5135, 5136, 5137, -5016, -4964]]
      }, {
        "type": "Polygon",
        "id": 21059,
        "arcs": [[5138, 5139, -5112, -4926, -4957, -5100]]
      }, {
        "type": "Polygon",
        "id": 21151,
        "arcs": [[5140, 5141, 5142, 5143, -5090, -4951, -5018]]
      }, {
        "type": "Polygon",
        "id": 17059,
        "arcs": [[-4932, 5144, 5145, 5146, -4918, -4910]]
      }, {
        "type": "Polygon",
        "id": 21229,
        "arcs": [[-5124, 5147, 5148, -5104, -5000]]
      }, {
        "type": "Polygon",
        "id": 20057,
        "arcs": [[-5026, 5149, 5150, 5151, -5096, -4916]]
      }, {
        "type": "Polygon",
        "id": 20173,
        "arcs": [[-5023, 5152, 5153, -4973, -4967]]
      }, {
        "type": "Polygon",
        "id": 17165,
        "arcs": [[-5147, 5154, 5155, 5156, -5002, -4919]]
      }, {
        "type": "Polygon",
        "id": 51101,
        "arcs": [[-5119, 5157, 5158, -5079, -4923]]
      }, {
        "type": "Polygon",
        "id": 29059,
        "arcs": [[-4873, 5159, 5160, 5161, 5162, -5040]]
      }, {
        "type": "MultiPolygon",
        "id": 6001,
        "arcs": [[[-4846, -5039, 5163, 5164, -5019]]]
      }, {
        "type": "Polygon",
        "id": 51075,
        "arcs": [[5165, 5166, 5167, -5085, -4988, -5082]]
      }, {
        "type": "Polygon",
        "id": 29157,
        "arcs": [[-5135, 5168, 5169, 5170, 5171, -5034, -5008, -4938]]
      }, {
        "type": "Polygon",
        "id": 29039,
        "arcs": [[5172, 5173, 5174, -5042, -4942]]
      }, {
        "type": "Polygon",
        "id": 6043,
        "arcs": [[5175, 5176, -4781]]
      }, {
        "type": "Polygon",
        "id": 21225,
        "arcs": [[5177, 5178, 5179, -5145, -4931, -5115]]
      }, {
        "type": "Polygon",
        "id": 29105,
        "arcs": [[-5075, 5180, 5181, 5182, -5160, -4872]]
      }, {
        "type": "Polygon",
        "id": 8033,
        "arcs": [[-5121, 5183, -4738, -4986]]
      }, {
        "type": "Polygon",
        "id": 21153,
        "arcs": [[-5095, 5184, 5185, 5186, 5187, -5013]]
      }, {
        "type": "Polygon",
        "id": 54089,
        "arcs": [[5188, 5189, -5101, -4900, -4888, 5190]]
      }, {
        "type": "Polygon",
        "id": 17199,
        "arcs": [[-5157, 5191, 5192, -5133, -5003]]
      }, {
        "type": "Polygon",
        "id": 21237,
        "arcs": [[-5188, 5193, 5194, -5136, -5046, -5014]]
      }, {
        "type": "Polygon",
        "id": 21065,
        "arcs": [[-5138, 5195, 5196, -5141, -5017]]
      }, {
        "type": "MultiPolygon",
        "id": 51103,
        "arcs": [[[5197, -5006, -5072, 5198]]]
      }, {
        "type": "Polygon",
        "id": 8105,
        "arcs": [[-4769, 5199, 5200, 5201, -5125]]
      }, {
        "type": "MultiPolygon",
        "id": 6075,
        "arcs": [[[5202, 5203]]]
      }, {
        "type": "Polygon",
        "id": 29167,
        "arcs": [[-5041, -5163, 5204, 5205, -5173, -4941]]
      }, {
        "type": "Polygon",
        "id": 21079,
        "arcs": [[-5144, 5206, 5207, 5208, -5122, -5091]]
      }, {
        "type": "Polygon",
        "id": 20151,
        "arcs": [[-4975, 5209, 5210, 5211, -5024, -4913]]
      }, {
        "type": "Polygon",
        "id": 51580,
        "arcs": [[-5132]]
      }, {
        "type": "Polygon",
        "id": 51009,
        "arcs": [[5212, 5213, 5214, 5215, -5027, -5050]]
      }, {
        "type": "Polygon",
        "id": 8071,
        "arcs": [[-4893, 5216, 5217, 5218, 5219, -5076, -4707, -4895]]
      }, {
        "type": "Polygon",
        "id": 51023,
        "arcs": [[5220, 5221, 5222, -5129, -5029]]
      }, {
        "type": "Polygon",
        "id": 51678,
        "arcs": [[-5032]]
      }, {
        "type": "Polygon",
        "id": 29065,
        "arcs": [[-4948, 5223, 5224, 5225, 5226, -4977]]
      }, {
        "type": "Polygon",
        "id": 54109,
        "arcs": [[5227, 5228, -5107, -5070, -4934, -5103]]
      }, {
        "type": "Polygon",
        "id": 51029,
        "arcs": [[5229, 5230, 5231, -5048, -4864, -5084]]
      }, {
        "type": "Polygon",
        "id": 6039,
        "arcs": [[-4559, 5232, 5233, -5176, -4780]]
      }, {
        "type": "MultiPolygon",
        "id": 51119,
        "arcs": [[[5234, -5116, -4982, 5235]]]
      }, {
        "type": "Polygon",
        "id": 51530,
        "arcs": [[-5033]]
      }, {
        "type": "Polygon",
        "id": 21071,
        "arcs": [[-5128, 5236, 5237, -5185, -5094]]
      }, {
        "type": "Polygon",
        "id": 8003,
        "arcs": [[-5078, 5238, 5239, -5200, -4768]]
      }, {
        "type": "Polygon",
        "id": 51049,
        "arcs": [[-5168, 5240, 5241, 5242, -5230, -5083]]
      }, {
        "type": "Polygon",
        "id": 21195,
        "arcs": [[5243, 5244, 5245, 5246, 5247, -5237, -5127, -5110]]
      }, {
        "type": "Polygon",
        "id": 29093,
        "arcs": [[-5036, 5248, 5249, 5250, -5224, -4947, -4955]]
      }, {
        "type": "Polygon",
        "id": 20187,
        "arcs": [[5251, 5252, 5253, 5254, -4883, -4908]]
      }, {
        "type": "Polygon",
        "id": 21183,
        "arcs": [[-5053, 5255, 5256, 5257, 5258, -5139, -5099]]
      }, {
        "type": "Polygon",
        "id": 20067,
        "arcs": [[5259, 5260, -5252, -4903]]
      }, {
        "type": "Polygon",
        "id": 20081,
        "arcs": [[-5098, 5261, 5262, 5263, -5260, -4907]]
      }, {
        "type": "Polygon",
        "id": 20097,
        "arcs": [[-5212, 5264, 5265, 5266, -5150, -5025]]
      }, {
        "type": "Polygon",
        "id": 20095,
        "arcs": [[-5154, 5267, 5268, 5269, -5210, -4974]]
      }, {
        "type": "Polygon",
        "id": 20205,
        "arcs": [[5270, 5271, 5272, -4970, -5056]]
      }, {
        "type": "Polygon",
        "id": 20133,
        "arcs": [[-5060, 5273, 5274, 5275, -5271, -5058]]
      }, {
        "type": "Polygon",
        "id": 21123,
        "arcs": [[5276, 5277, 5278, 5279, -5087, -5106]]
      }, {
        "type": "Polygon",
        "id": 21155,
        "arcs": [[-5149, 5280, 5281, 5282, -5277, -5105]]
      }, {
        "type": "Polygon",
        "id": 54063,
        "arcs": [[-5131, 5283, 5284, -5191, -4887]]
      }, {
        "type": "Polygon",
        "id": 21129,
        "arcs": [[-5195, 5285, 5286, 5287, -5196, -5137]]
      }, {
        "type": "Polygon",
        "id": 21021,
        "arcs": [[-5209, 5288, 5289, -5281, -5148, -5123]]
      }, {
        "type": "Polygon",
        "id": 51087,
        "arcs": [[5290, 5291, 5292, 5293, 5294, 5295, -5166, -5081]]
      }, {
        "type": "Polygon",
        "id": 6081,
        "arcs": [[5296, 5297, 5298, 5299, -5203]]
      }, {
        "type": "Polygon",
        "id": 21025,
        "arcs": [[-5187, 5300, 5301, 5302, -5286, -5194]]
      }, {
        "type": "Polygon",
        "id": 51145,
        "arcs": [[5303, 5304, -5241, -5167]]
      }, {
        "type": "Polygon",
        "id": 21149,
        "arcs": [[-5259, 5305, 5306, 5307, -5113, -5140]]
      }, {
        "type": "Polygon",
        "id": 20037,
        "arcs": [[-5044, 5308, 5309, 5310, 5311, -5274, -5059]]
      }, {
        "type": "Polygon",
        "id": 51045,
        "arcs": [[5312, 5313, 5314, -5284, -5130, -5223]]
      }, {
        "type": "Polygon",
        "id": 8023,
        "arcs": [[-5220, 5315, 5316, 5317, -5239, -5077]]
      }, {
        "type": "Polygon",
        "id": 29011,
        "arcs": [[-5175, 5318, 5319, -5309, -5043]]
      }, {
        "type": "Polygon",
        "id": 21233,
        "arcs": [[5320, 5321, 5322, -5178, -5114, -5308]]
      }, {
        "type": "Polygon",
        "id": 29123,
        "arcs": [[-5172, 5323, 5324, -5249, -5035]]
      }, {
        "type": "Polygon",
        "id": 8009,
        "arcs": [[-5255, 5325, 5326, 5327, -5217, -4892, -4884]]
      }, {
        "type": "Polygon",
        "id": 8083,
        "arcs": [[5328, 5329, -4739, -5184]]
      }, {
        "type": "Polygon",
        "id": 8067,
        "arcs": [[-4997, 5330, 5331, -5329, -5120]]
      }, {
        "type": "Polygon",
        "id": 6047,
        "arcs": [[-5234, 5332, 5333, 5334, -5037, -5177]]
      }, {
        "type": "Polygon",
        "id": 21137,
        "arcs": [[5335, 5336, 5337, -5289, -5208]]
      }, {
        "type": "Polygon",
        "id": 51127,
        "arcs": [[5338, 5339, 5340, -5291, -5080, -5159]]
      }, {
        "type": "Polygon",
        "id": 21085,
        "arcs": [[-5089, 5341, 5342, 5343, -5256, -5052]]
      }, {
        "type": "Polygon",
        "id": 51019,
        "arcs": [[5344, 5345, 5346, 5347, 5348, -5221, -5028, -5216], [5349]]
      }, {
        "type": "Polygon",
        "id": 49053,
        "arcs": [[5350, 5351, -4612, -4991]]
      }, {
        "type": "Polygon",
        "id": 20049,
        "arcs": [[-5273, 5352, 5353, 5354, -5021, -4971]]
      }, {
        "type": "Polygon",
        "id": 29179,
        "arcs": [[5355, 5356, 5357, -5225, -5251]]
      }, {
        "type": "Polygon",
        "id": 29031,
        "arcs": [[5358, 5359, 5360, 5361, 5362, -5170]]
      }, {
        "type": "Polygon",
        "id": 29215,
        "arcs": [[-4978, -5227, 5363, 5364, 5365, 5366, -5181, -5074]]
      }, {
        "type": "Polygon",
        "id": 17069,
        "arcs": [[-5146, -5180, 5367, 5368, 5369, -5155]]
      }, {
        "type": "Polygon",
        "id": 17151,
        "arcs": [[-5370, 5370, 5371, 5372, -5156]]
      }, {
        "type": "Polygon",
        "id": 51760,
        "arcs": [[5373, -5295]]
      }, {
        "type": "Polygon",
        "id": 17087,
        "arcs": [[-5373, 5374, 5375, 5376, -5192]]
      }, {
        "type": "Polygon",
        "id": 17181,
        "arcs": [[-5193, -5377, 5377, 5378, -5359, -5169, -5134]]
      }, {
        "type": "MultiPolygon",
        "id": 51073,
        "arcs": [[[5379, 5380, 5381, -5117, -5235]]]
      }, {
        "type": "Polygon",
        "id": 29017,
        "arcs": [[-5363, 5382, 5383, -5324, -5171]]
      }, {
        "type": "Polygon",
        "id": 54055,
        "arcs": [[-5190, 5384, 5385, 5386, 5387, -5228, -5102]]
      }, {
        "type": "Polygon",
        "id": 6019,
        "arcs": [[5388, 5389, 5390, 5391, 5392, -5333, -5233, -4558]]
      }, {
        "type": "Polygon",
        "id": 29057,
        "arcs": [[-5206, 5393, 5394, 5395, -5319, -5174]]
      }, {
        "type": "Polygon",
        "id": 21109,
        "arcs": [[-5288, 5396, 5397, 5398, 5399, -5142, -5197]]
      }, {
        "type": "Polygon",
        "id": 21107,
        "arcs": [[5400, 5401, 5402, -5321, -5307]]
      }, {
        "type": "MultiPolygon",
        "id": 51041,
        "arcs": [[[-5374, -5294, 5403, 5404, 5405, 5406, 5407, 5408, 5409, 5410, -5304, -5296]]]
      }, {
        "type": "Polygon",
        "id": 51011,
        "arcs": [[5411, 5412, 5413, -5213, -5049, -5232]]
      }, {
        "type": "MultiPolygon",
        "id": 51131,
        "arcs": [[[5414, -5065]]]
      }, {
        "type": "Polygon",
        "id": 21045,
        "arcs": [[-5338, 5415, 5416, 5417, 5418, -5282, -5290]]
      }, {
        "type": "Polygon",
        "id": 54047,
        "arcs": [[-5388, 5419, 5420, -5108, -5229]]
      }, {
        "type": "Polygon",
        "id": 21055,
        "arcs": [[-5323, 5421, 5422, 5423, -5368, -5179]]
      }, {
        "type": "Polygon",
        "id": 49025,
        "arcs": [[-4980, -4743, 5424, 5425, -5351, -4990]]
      }, {
        "type": "Polygon",
        "id": 21189,
        "arcs": [[-5303, 5426, 5427, -5397, -5287]]
      }, {
        "type": "Polygon",
        "id": 21203,
        "arcs": [[-5400, 5428, 5429, -5336, -5207, -5143]]
      }, {
        "type": "Polygon",
        "id": 51027,
        "arcs": [[-5421, 5430, 5431, 5432, -5244, -5109]]
      }, {
        "type": "MultiPolygon",
        "id": 51115,
        "arcs": [[[-5381, 5433]]]
      }, {
        "type": "Polygon",
        "id": 21119,
        "arcs": [[-5186, -5238, -5248, 5434, 5435, -5301]]
      }, {
        "type": "Polygon",
        "id": 51007,
        "arcs": [[-5411, 5436, 5437, 5438, -5242, -5305]]
      }, {
        "type": "Polygon",
        "id": 51036,
        "arcs": [[5439, 5440, -5292, -5341]]
      }, {
        "type": "Polygon",
        "id": 29225,
        "arcs": [[-5183, 5441, 5442, 5443, 5444, -5161]]
      }, {
        "type": "Polygon",
        "id": 6085,
        "arcs": [[-5038, -5335, 5445, 5446, -5298, 5447, -5164]]
      }, {
        "type": "Polygon",
        "id": 21217,
        "arcs": [[-5283, -5419, 5448, 5449, -5278]]
      }, {
        "type": "Polygon",
        "id": 29229,
        "arcs": [[-5367, 5450, -5442, -5182]]
      }, {
        "type": "Polygon",
        "id": 51071,
        "arcs": [[-5315, 5451, 5452, 5453, -5385, -5189, -5285]]
      }, {
        "type": "Polygon",
        "id": 20035,
        "arcs": [[-5355, 5454, 5455, 5456, 5457, -5022]]
      }, {
        "type": "Polygon",
        "id": 20191,
        "arcs": [[-5458, 5458, 5459, 5460, -5268, -5153]]
      }, {
        "type": "Polygon",
        "id": 20119,
        "arcs": [[-5152, 5461, 5462, 5463, -5262, -5097]]
      }, {
        "type": "Polygon",
        "id": 20025,
        "arcs": [[-5267, 5464, 5465, 5466, -5462, -5151]]
      }, {
        "type": "Polygon",
        "id": 20007,
        "arcs": [[-5270, 5467, 5468, 5469, 5470, -5265, -5211]]
      }, {
        "type": "Polygon",
        "id": 21087,
        "arcs": [[-5450, 5471, 5472, 5473, -5279]]
      }, {
        "type": "Polygon",
        "id": 51680,
        "arcs": [[-5215, 5474, -5345]]
      }, {
        "type": "Polygon",
        "id": 6027,
        "arcs": [[-4763, -4239, 5475, 5476, 5477, 5478, -5389, -4557]]
      }, {
        "type": "MultiPolygon",
        "id": 51095,
        "arcs": [[[5479, 5480, 5481, 5482, -5440, -5340, 5483, 5484, 5485]]]
      }, {
        "type": "Polygon",
        "id": 21099,
        "arcs": [[-5280, -5474, 5486, 5487, 5488, -5342, -5088]]
      }, {
        "type": "Polygon",
        "id": 21193,
        "arcs": [[-5436, 5489, 5490, 5491, 5492, -5427, -5302]]
      }, {
        "type": "Polygon",
        "id": 51031,
        "arcs": [[-5414, 5493, 5494, 5495, -5346, -5475, -5214]]
      }, {
        "type": "Polygon",
        "id": 29077,
        "arcs": [[-5162, -5445, 5496, 5497, -5394, -5205]]
      }, {
        "type": "Polygon",
        "id": 21139,
        "arcs": [[-5424, 5498, 5499, 5500, 5501, -5371, -5369]]
      }, {
        "type": "Polygon",
        "id": 29203,
        "arcs": [[-5358, 5502, 5503, 5504, -5364, -5226]]
      }, {
        "type": "Polygon",
        "id": 8007,
        "arcs": [[-5126, -5202, 5505, 5506, 5507, -5331, -4996]]
      }, {
        "type": "Polygon",
        "id": 51161,
        "arcs": [[-5349, 5508, 5509, 5510, -5313, -5222], [5511, 5512]]
      }, {
        "type": "Polygon",
        "id": 21177,
        "arcs": [[5513, 5514, 5515, 5516, -5401, -5306, -5258]]
      }, {
        "type": "Polygon",
        "id": 51147,
        "arcs": [[-5243, -5439, 5517, 5518, 5519, -5412, -5231]]
      }, {
        "type": "Polygon",
        "id": 8021,
        "arcs": [[-5201, -5240, -5318, 5520, 5521, -5506]]
      }, {
        "type": "Polygon",
        "id": 21031,
        "arcs": [[5522, 5523, -5514, -5257, -5344, 5524]]
      }, {
        "type": "Polygon",
        "id": 20129,
        "arcs": [[5525, 5526, 5527, -5326, -5254]]
      }, {
        "type": "Polygon",
        "id": 20189,
        "arcs": [[-5264, 5528, 5529, -5526, -5253, -5261]]
      }, {
        "type": "Polygon",
        "id": 20175,
        "arcs": [[-5464, 5530, 5531, -5529, -5263]]
      }, {
        "type": "Polygon",
        "id": 20125,
        "arcs": [[-5272, -5276, 5532, 5533, 5534, 5535, -5353]]
      }, {
        "type": "Polygon",
        "id": 20077,
        "arcs": [[5536, 5537, -5468, -5269, -5461]]
      }, {
        "type": "Polygon",
        "id": 20033,
        "arcs": [[5538, 5539, -5465, -5266, -5471]]
      }, {
        "type": "Polygon",
        "id": 20099,
        "arcs": [[-5312, 5540, 5541, 5542, -5533, -5275]]
      }, {
        "type": "Polygon",
        "id": 21033,
        "arcs": [[-5403, 5543, 5544, 5545, -5422, -5322]]
      }, {
        "type": "MultiPolygon",
        "id": 51199,
        "arcs": [[[5546, 5547, 5548, 5549, -5481, 5550, -5485]]]
      }, {
        "type": "Polygon",
        "id": 29097,
        "arcs": [[-5396, 5551, 5552, 5553, -5310, -5320]]
      }, {
        "type": "Polygon",
        "id": 51121,
        "arcs": [[5554, 5555, 5556, 5557, -5452, -5314, -5511]]
      }, {
        "type": "Polygon",
        "id": 51515,
        "arcs": [[-5350]]
      }, {
        "type": "Polygon",
        "id": 21051,
        "arcs": [[-5493, 5558, 5559, 5560, 5561, -5398, -5428]]
      }, {
        "type": "Polygon",
        "id": 21199,
        "arcs": [[5562, 5563, 5564, -5416, -5337, -5430, 5565]]
      }, {
        "type": "Polygon",
        "id": 20021,
        "arcs": [[-5554, 5566, 5567, 5568, -5541, -5311]]
      }, {
        "type": "Polygon",
        "id": 21061,
        "arcs": [[-5489, 5569, 5570, -5525, -5343]]
      }, {
        "type": "Polygon",
        "id": 51770,
        "arcs": [[5571, -5513]]
      }, {
        "type": "Polygon",
        "id": 17127,
        "arcs": [[-5502, 5572, 5573, -5375, -5372]]
      }, {
        "type": "Polygon",
        "id": 51185,
        "arcs": [[-5387, 5574, 5575, 5576, -5431, -5420]]
      }, {
        "type": "Polygon",
        "id": 17003,
        "arcs": [[5577, 5578, 5579, 5580, -5360, -5379]]
      }, {
        "type": "Polygon",
        "id": 21125,
        "arcs": [[-5562, 5581, 5582, 5583, -5566, -5429, -5399]]
      }, {
        "type": "Polygon",
        "id": 17153,
        "arcs": [[-5376, -5574, 5584, 5585, -5578, -5378]]
      }, {
        "type": "Polygon",
        "id": 51775,
        "arcs": [[-5572, -5512]]
      }, {
        "type": "Polygon",
        "id": 21131,
        "arcs": [[5586, 5587, -5559, -5492]]
      }, {
        "type": "Polygon",
        "id": 51670,
        "arcs": [[5588, -5405, 5589]]
      }, {
        "type": "Polygon",
        "id": 29223,
        "arcs": [[-5384, 5590, 5591, 5592, -5356, -5250, -5325]]
      }, {
        "type": "Polygon",
        "id": 51149,
        "arcs": [[5593, 5594, 5595, 5596, 5597, -5406, -5589]]
      }, {
        "type": "Polygon",
        "id": 51830,
        "arcs": [[5598, -5486, -5551, -5480]]
      }, {
        "type": "Polygon",
        "id": 21001,
        "arcs": [[-5418, 5599, 5600, 5601, -5472, -5449]]
      }, {
        "type": "Polygon",
        "id": 51051,
        "arcs": [[5602, 5603, -5245, -5433]]
      }, {
        "type": "Polygon",
        "id": 20019,
        "arcs": [[-5536, 5604, 5605, -5455, -5354]]
      }, {
        "type": "Polygon",
        "id": 51021,
        "arcs": [[5606, 5607, 5608, -5575, -5386, -5454]]
      }, {
        "type": "Polygon",
        "id": 51570,
        "arcs": [[5609, -5408]]
      }, {
        "type": "Polygon",
        "id": 51135,
        "arcs": [[5610, 5611, -5518, -5438, 5612]]
      }, {
        "type": "Polygon",
        "id": 29109,
        "arcs": [[-5498, 5613, 5614, 5615, 5616, -5552, -5395]]
      }, {
        "type": "Polygon",
        "id": 6087,
        "arcs": [[5617, 5618, 5619, -5299, -5447]]
      }, {
        "type": "Polygon",
        "id": 51053,
        "arcs": [[5620, -5597, 5621, 5622, 5623, -5613, -5437, -5410]]
      }, {
        "type": "Polygon",
        "id": 21133,
        "arcs": [[-5247, 5624, 5625, -5490, -5435]]
      }, {
        "type": "Polygon",
        "id": 29201,
        "arcs": [[5626, 5627, 5628, -5361, -5581]]
      }, {
        "type": "Polygon",
        "id": 51037,
        "arcs": [[5629, 5630, 5631, -5494, -5413, -5520]]
      }, {
        "type": "Polygon",
        "id": 51155,
        "arcs": [[5632, -5556, 5633, 5634, 5635, -5607, -5453, -5558]]
      }, {
        "type": "Polygon",
        "id": 51730,
        "arcs": [[-5621, -5409, -5610, -5407, -5598]]
      }, {
        "type": "Polygon",
        "id": 51181,
        "arcs": [[5636, 5637, 5638, -5595, 5639]]
      }, {
        "type": "Polygon",
        "id": 51067,
        "arcs": [[5640, 5641, 5642, 5643, -5509, -5348]]
      }, {
        "type": "Polygon",
        "id": 21007,
        "arcs": [[5644, 5645, -5579, -5586, 5646]]
      }, {
        "type": "Polygon",
        "id": 21145,
        "arcs": [[-5501, 5647, 5648, 5649, -5647, -5585, -5573]]
      }, {
        "type": "Polygon",
        "id": 51700,
        "arcs": [[5650, 5651, -5482, -5550]]
      }, {
        "type": "Polygon",
        "id": 51195,
        "arcs": [[5652, 5653, 5654, 5655, -5625, -5246, -5604], [5656]]
      }, {
        "type": "Polygon",
        "id": 21227,
        "arcs": [[-5571, 5657, 5658, 5659, 5660, -5523]]
      }, {
        "type": "Polygon",
        "id": 21207,
        "arcs": [[-5565, 5661, 5662, 5663, -5600, -5417]]
      }, {
        "type": "Polygon",
        "id": 21169,
        "arcs": [[-5602, 5664, 5665, 5666, -5487, -5473]]
      }, {
        "type": "Polygon",
        "id": 21143,
        "arcs": [[-5546, 5667, 5668, -5499, -5423]]
      }, {
        "type": "MultiPolygon",
        "id": 51735,
        "arcs": [[[5669, 5670, -5548, 5671]]]
      }, {
        "type": "Polygon",
        "id": 21009,
        "arcs": [[5672, 5673, -5658, -5570, -5488, -5667]]
      }, {
        "type": "Polygon",
        "id": 21047,
        "arcs": [[-5517, 5674, 5675, 5676, 5677, -5544, -5402]]
      }, {
        "type": "Polygon",
        "id": 51750,
        "arcs": [[-5633, -5557]]
      }, {
        "type": "Polygon",
        "id": 51093,
        "arcs": [[5678, 5679, 5680, 5681, -5637, 5682]]
      }, {
        "type": "Polygon",
        "id": 51167,
        "arcs": [[5683, 5684, 5685, -5653, -5603, -5432, -5577]]
      }, {
        "type": "Polygon",
        "id": 51143,
        "arcs": [[5686, 5687, 5688, 5689, 5690, 5691, -5641, -5347, -5496]]
      }, {
        "type": "Polygon",
        "id": 51063,
        "arcs": [[-5644, 5692, 5693, -5634, -5555, -5510]]
      }, {
        "type": "Polygon",
        "id": 29207,
        "arcs": [[-5362, -5629, 5694, 5695, 5696, -5591, -5383]]
      }, {
        "type": "Polygon",
        "id": 51111,
        "arcs": [[-5612, 5697, 5698, -5630, -5519]]
      }, {
        "type": "Polygon",
        "id": 51650,
        "arcs": [[-5651, -5549, -5671, 5699]]
      }, {
        "type": "Polygon",
        "id": 51183,
        "arcs": [[5700, 5701, -5622, -5596, -5639]]
      }, {
        "type": "Polygon",
        "id": 29035,
        "arcs": [[-5593, 5702, 5703, 5704, -5503, -5357]]
      }, {
        "type": "Polygon",
        "id": 29043,
        "arcs": [[-5444, 5705, 5706, 5707, -5614, -5497]]
      }, {
        "type": "Polygon",
        "id": 51197,
        "arcs": [[5708, 5709, 5710, -5608, -5636]]
      }, {
        "type": "Polygon",
        "id": 21141,
        "arcs": [[5711, 5712, 5713, -5515, -5524, -5661]]
      }, {
        "type": "Polygon",
        "id": 21219,
        "arcs": [[-5714, 5714, 5715, -5675, -5516]]
      }, {
        "type": "Polygon",
        "id": 29067,
        "arcs": [[-5451, -5366, 5716, 5717, 5718, -5706, -5443]]
      }, {
        "type": "Polygon",
        "id": 21157,
        "arcs": [[-5669, 5719, 5720, 5721, -5648, -5500]]
      }, {
        "type": "Polygon",
        "id": 29133,
        "arcs": [[-5646, 5722, 5723, 5724, 5725, -5627, -5580]]
      }, {
        "type": "Polygon",
        "id": 51083,
        "arcs": [[-5632, 5726, 5727, 5728, 5729, -5687, -5495]]
      }, {
        "type": "Polygon",
        "id": 29091,
        "arcs": [[-5505, 5730, 5731, 5732, -5717, -5365]]
      }, {
        "type": "Polygon",
        "id": 29145,
        "arcs": [[-5617, 5733, 5734, 5735, -5567, -5553]]
      }, {
        "type": "Polygon",
        "id": 21121,
        "arcs": [[5736, 5737, -5582, -5561]]
      }, {
        "type": "Polygon",
        "id": 51025,
        "arcs": [[-5624, 5738, 5739, 5740, 5741, -5698, -5611]]
      }, {
        "type": "Polygon",
        "id": 21095,
        "arcs": [[-5626, -5656, 5742, 5743, -5587, -5491]]
      }, {
        "type": "Polygon",
        "id": 51173,
        "arcs": [[-5609, -5711, 5744, 5745, -5684, -5576]]
      }, {
        "type": "Polygon",
        "id": 4017,
        "arcs": [[5746, 5747, 5748, 5749, -4741]]
      }, {
        "type": "Polygon",
        "id": 4005,
        "arcs": [[-5750, 5750, 5751, 5752, -5425, -4742]]
      }, {
        "type": "Polygon",
        "id": 21221,
        "arcs": [[5753, 5754, -5720, -5668, -5545, -5678]]
      }, {
        "type": "Polygon",
        "id": 40105,
        "arcs": [[-5543, 5755, 5756, 5757, -5534]]
      }, {
        "type": "Polygon",
        "id": 40113,
        "arcs": [[5758, 5759, 5760, 5761, 5762, -5456, -5606]]
      }, {
        "type": "Polygon",
        "id": 40151,
        "arcs": [[-5470, 5763, 5764, 5765, 5766, -5539]]
      }, {
        "type": "Polygon",
        "id": 40035,
        "arcs": [[-5569, 5767, 5768, 5769, 5770, -5756, -5542]]
      }, {
        "type": "Polygon",
        "id": 40147,
        "arcs": [[-5758, 5771, 5772, -5759, -5605, -5535]]
      }, {
        "type": "Polygon",
        "id": 40053,
        "arcs": [[5773, 5774, 5775, -5537, -5460]]
      }, {
        "type": "Polygon",
        "id": 40003,
        "arcs": [[-5538, -5776, 5776, 5777, -5764, -5469]]
      }, {
        "type": "Polygon",
        "id": 40071,
        "arcs": [[-5763, 5778, 5779, -5774, -5459, -5457]]
      }, {
        "type": "Polygon",
        "id": 40115,
        "arcs": [[-5736, 5780, 5781, -5768, -5568]]
      }, {
        "type": "Polygon",
        "id": 40059,
        "arcs": [[-5540, -5767, 5782, 5783, 5784, -5466]]
      }, {
        "type": "Polygon",
        "id": 35039,
        "arcs": [[-5522, 5785, 5786, 5787, 5788, 5789, 5790, -5507]]
      }, {
        "type": "Polygon",
        "id": 35045,
        "arcs": [[-5791, 5791, 5792, 5793, -5330, -5332, -5508]]
      }, {
        "type": "Polygon",
        "id": 4001,
        "arcs": [[-5794, 5794, 5795, 5796, 5797, 5798, -5747, -4740]]
      }, {
        "type": "Polygon",
        "id": 35059,
        "arcs": [[5799, 5800, 5801, 5802, 5803, 5804, -5218, -5328]]
      }, {
        "type": "Polygon",
        "id": 40025,
        "arcs": [[-5528, 5805, 5806, 5807, -5800, -5327]]
      }, {
        "type": "Polygon",
        "id": 40139,
        "arcs": [[5808, 5809, 5810, 5811, -5806, -5527, -5530, -5532]]
      }, {
        "type": "Polygon",
        "id": 40007,
        "arcs": [[-5467, -5785, 5812, 5813, 5814, -5809, -5531, -5463]]
      }, {
        "type": "Polygon",
        "id": 51175,
        "arcs": [[5815, -5680, 5816, 5817, 5818, 5819, 5820, -5701, -5638, -5682]]
      }, {
        "type": "Polygon",
        "id": 21231,
        "arcs": [[5821, 5822, 5823, 5824, -5662, -5564]]
      }, {
        "type": "Polygon",
        "id": 35055,
        "arcs": [[5825, 5826, -5786, -5521, -5317]]
      }, {
        "type": "Polygon",
        "id": 35007,
        "arcs": [[-5805, 5827, 5828, -5826, -5316, -5219]]
      }, {
        "type": "Polygon",
        "id": 29209,
        "arcs": [[5829, 5830, 5831, -5615, -5708]]
      }, {
        "type": "Polygon",
        "id": 6069,
        "arcs": [[-5334, -5393, 5832, -5618, -5446]]
      }, {
        "type": "Polygon",
        "id": 21235,
        "arcs": [[-5738, 5833, 5834, 5835, 5836, -5583]]
      }, {
        "type": "MultiPolygon",
        "id": 51710,
        "arcs": [[[5837, 5838, 5839]], [[5840, 5841]]]
      }, {
        "type": "Polygon",
        "id": 21147,
        "arcs": [[-5837, 5842, 5843, -5822, -5563, -5584]]
      }, {
        "type": "Polygon",
        "id": 51720,
        "arcs": [[-5657]]
      }, {
        "type": "Polygon",
        "id": 21013,
        "arcs": [[-5588, -5744, 5844, 5845, -5834, -5737, -5560]]
      }, {
        "type": "Polygon",
        "id": 21039,
        "arcs": [[-5650, 5846, 5847, -5723, -5645]]
      }, {
        "type": "Polygon",
        "id": 21083,
        "arcs": [[-5722, 5848, 5849, 5850, 5851, -5847, -5649]]
      }, {
        "type": "Polygon",
        "id": 21057,
        "arcs": [[5852, 5853, 5854, -5665, -5601, -5664]]
      }, {
        "type": "Polygon",
        "id": 21003,
        "arcs": [[-5674, 5855, 5856, 5857, 5858, -5659]]
      }, {
        "type": "Polygon",
        "id": 29009,
        "arcs": [[-5832, 5859, 5860, 5861, -5734, -5616]]
      }, {
        "type": "MultiPolygon",
        "id": 51810,
        "arcs": [[[5862, 5863, 5864]], [[5865, 5866, 5867, 5868, 5869, 5870, 5871, -5841, 5872]]]
      }, {
        "type": "Polygon",
        "id": 51035,
        "arcs": [[5873, 5874, 5875, 5876, 5877, -5709, -5635, -5694]]
      }, {
        "type": "Polygon",
        "id": 51191,
        "arcs": [[5878, 5879, 5880, 5881, -5685, -5746, 5882, 5883, 5884, 5885]]
      }, {
        "type": "Polygon",
        "id": 29023,
        "arcs": [[-5697, 5886, 5887, 5888, -5703, -5592]]
      }, {
        "type": "MultiPolygon",
        "id": 51740,
        "arcs": [[[-5839, 5889, 5890]], [[5891, 5892, 5893]]]
      }, {
        "type": "Polygon",
        "id": 51800,
        "arcs": [[-5893, 5894, 5895, 5896, -5817, -5679, 5897]]
      }, {
        "type": "Polygon",
        "id": 6053,
        "arcs": [[-5833, -5392, 5898, 5899, 5900, -5619]]
      }, {
        "type": "Polygon",
        "id": 51081,
        "arcs": [[-5702, -5821, 5901, -5739, -5623], [5902]]
      }, {
        "type": "Polygon",
        "id": 51105,
        "arcs": [[5903, 5904, 5905, -5845, -5743, -5655]]
      }, {
        "type": "Polygon",
        "id": 51117,
        "arcs": [[-5742, 5906, 5907, 5908, -5727, -5631, -5699]]
      }, {
        "type": "Polygon",
        "id": 21053,
        "arcs": [[-5825, 5909, 5910, -5853, -5663]]
      }, {
        "type": "Polygon",
        "id": 29149,
        "arcs": [[-5705, 5911, 5912, 5913, 5914, -5731, -5504]]
      }, {
        "type": "Polygon",
        "id": 51169,
        "arcs": [[-5686, -5882, 5915, 5916, 5917, -5904, -5654]]
      }, {
        "type": "Polygon",
        "id": 21213,
        "arcs": [[5918, 5919, -5712, -5660, -5859]]
      }, {
        "type": "Polygon",
        "id": 51141,
        "arcs": [[5920, 5921, 5922, -5874, -5693, -5643]]
      }, {
        "type": "Polygon",
        "id": 29143,
        "arcs": [[-5726, 5923, 5924, 5925, 5926, 5927, 5928, -5695, -5628]]
      }, {
        "type": "Polygon",
        "id": 51550,
        "arcs": [[5929, -5890, -5838, 5930, -5871, 5931, 5932, -5895, -5892]]
      }, {
        "type": "Polygon",
        "id": 51089,
        "arcs": [[5933, 5934, -5921, -5642, -5692], [5935]]
      }, {
        "type": "Polygon",
        "id": 32003,
        "arcs": [[5936, 5937, -5476, -4238, -4614]]
      }, {
        "type": "Polygon",
        "id": 21171,
        "arcs": [[-5855, 5938, 5939, -5856, -5673, -5666]]
      }, {
        "type": "Polygon",
        "id": 29181,
        "arcs": [[-5889, 5940, 5941, -5912, -5704]]
      }, {
        "type": "Polygon",
        "id": 29213,
        "arcs": [[-5719, 5942, 5943, 5944, 5945, -5830, -5707]]
      }, {
        "type": "Polygon",
        "id": 40153,
        "arcs": [[5946, 5947, 5948, -5783, -5766]]
      }, {
        "type": "Polygon",
        "id": 51077,
        "arcs": [[-5878, 5949, -5876, 5950, 5951, 5952, 5953, -5883, -5745, -5710]]
      }, {
        "type": "Polygon",
        "id": 29153,
        "arcs": [[-5733, 5954, 5955, 5956, -5943, -5718]]
      }, {
        "type": "Polygon",
        "id": 21105,
        "arcs": [[-5852, 5957, 5958, 5959, -5724, -5848]]
      }, {
        "type": "Polygon",
        "id": 29119,
        "arcs": [[-5862, 5960, 5961, -5781, -5735]]
      }, {
        "type": "Polygon",
        "id": 21035,
        "arcs": [[-5755, 5962, 5963, -5849, -5721]]
      }, {
        "type": "Polygon",
        "id": 6107,
        "arcs": [[5964, 5965, -5390, -5479]]
      }, {
        "type": "Polygon",
        "id": 51595,
        "arcs": [[-5903]]
      }, {
        "type": "Polygon",
        "id": 51690,
        "arcs": [[-5936]]
      }, {
        "type": "Polygon",
        "id": 51620,
        "arcs": [[-5816, -5681]]
      }, {
        "type": "Polygon",
        "id": 51640,
        "arcs": [[-5950, -5877]]
      }, {
        "type": "Polygon",
        "id": 47161,
        "arcs": [[-5677, 5966, 5967, 5968, 5969, -5963, -5754]]
      }, {
        "type": "Polygon",
        "id": 40041,
        "arcs": [[-5962, 5970, 5971, 5972, 5973, -5769, -5782]]
      }, {
        "type": "Polygon",
        "id": 47147,
        "arcs": [[5974, 5975, 5976, -5715, -5713, -5920, 5977]]
      }, {
        "type": "Polygon",
        "id": 47165,
        "arcs": [[5978, 5979, 5980, 5981, -5978, -5919, -5858]]
      }, {
        "type": "MultiPolygon",
        "id": 21075,
        "arcs": [[[5982, -5926]], [[5983, 5984, -5924, -5725, -5960]]]
      }, {
        "type": "Polygon",
        "id": 47125,
        "arcs": [[-5977, 5985, 5986, 5987, -5967, -5676, -5716]]
      }, {
        "type": "Polygon",
        "id": 51590,
        "arcs": [[5988, -5689]]
      }, {
        "type": "Polygon",
        "id": 47111,
        "arcs": [[5989, 5990, 5991, -5979, -5857, -5940, 5992]]
      }, {
        "type": "MultiPolygon",
        "id": 51520,
        "arcs": [[[-5879]], [[-5886, 5993, -5880]]]
      }, {
        "type": "Polygon",
        "id": 29069,
        "arcs": [[-5929, 5994, 5995, 5996, 5997, 5998, -5887, -5696]]
      }, {
        "type": "Polygon",
        "id": 47137,
        "arcs": [[5999, 6000, 6001, 6002, -5910, -5824]]
      }, {
        "type": "Polygon",
        "id": 47027,
        "arcs": [[6003, 6004, -5993, -5939, -5854, -5911, -6003]]
      }, {
        "type": "Polygon",
        "id": 47163,
        "arcs": [[6005, 6006, 6007, -5916, -5881, -5994, -5885, 6008]]
      }, {
        "type": "Polygon",
        "id": 47091,
        "arcs": [[-5954, 6009, 6010, 6011, 6012, -6009, -5884]]
      }, {
        "type": "Polygon",
        "id": 47151,
        "arcs": [[6013, 6014, 6015, 6016, -6000, -5823, -5844]]
      }, {
        "type": "Polygon",
        "id": 47025,
        "arcs": [[6017, 6018, 6019, 6020, -5835, -5846, -5906]]
      }, {
        "type": "Polygon",
        "id": 40103,
        "arcs": [[6021, 6022, 6023, 6024, -5779, -5762]]
      }, {
        "type": "Polygon",
        "id": 47067,
        "arcs": [[-5918, 6025, 6026, -6018, -5905]]
      }, {
        "type": "Polygon",
        "id": 40131,
        "arcs": [[6027, 6028, 6029, -5772, -5757, -5771]]
      }, {
        "type": "Polygon",
        "id": 47013,
        "arcs": [[6030, 6031, -6014, -5843, -5836, -6021]]
      }, {
        "type": "Polygon",
        "id": 47073,
        "arcs": [[-6008, 6032, 6033, 6034, 6035, -6026, -5917]]
      }, {
        "type": "Polygon",
        "id": 40047,
        "arcs": [[-5780, -6025, 6036, 6037, 6038, -5777, -5775]]
      }, {
        "type": "Polygon",
        "id": 40045,
        "arcs": [[-5949, 6039, 6040, 6041, 6042, -5813, -5784]]
      }, {
        "type": "Polygon",
        "id": 37009,
        "arcs": [[6043, 6044, 6045, -6010, -5953]]
      }, {
        "type": "Polygon",
        "id": 47049,
        "arcs": [[-6017, 6046, 6047, 6048, 6049, -6001]]
      }, {
        "type": "Polygon",
        "id": 37005,
        "arcs": [[6050, 6051, -6044, -5952]]
      }, {
        "type": "Polygon",
        "id": 40117,
        "arcs": [[6052, 6053, 6054, -6022, -5761]]
      }, {
        "type": "Polygon",
        "id": 37171,
        "arcs": [[-5923, 6055, 6056, 6057, 6058, -6051, -5951, -5875]]
      }, {
        "type": "Polygon",
        "id": 37073,
        "arcs": [[6059, 6060, 6061, 6062, 6063, 6064, -5818, -5897]]
      }, {
        "type": "MultiPolygon",
        "id": 37053,
        "arcs": [[[6065, 6066, -5932, -5870, 6067]], [[-5866, 6068, 6069, 6070]], [[-6072, 5863, -6073, 5867]]]
      }, {
        "type": "Polygon",
        "id": 37169,
        "arcs": [[-5935, 6073, 6074, -6056, -5922]]
      }, {
        "type": "Polygon",
        "id": 37029,
        "arcs": [[-5896, -5933, -6067, 6075, 6076, -6060]]
      }, {
        "type": "Polygon",
        "id": 37185,
        "arcs": [[6077, 6078, 6079, 6080, -5907, -5741]]
      }, {
        "type": "Polygon",
        "id": 37131,
        "arcs": [[6081, 6082, -6078, -5740, -5902, -5820, 6083]]
      }, {
        "type": "Polygon",
        "id": 37091,
        "arcs": [[-6065, 6084, 6085, -6084, -5819]]
      }, {
        "type": "Polygon",
        "id": 37145,
        "arcs": [[6086, 6087, 6088, 6089, -5729]]
      }, {
        "type": "Polygon",
        "id": 37181,
        "arcs": [[-6081, 6090, 6091, -5908]]
      }, {
        "type": "Polygon",
        "id": 37077,
        "arcs": [[6092, 6093, 6094, -6087, -5728, -5909, -6092]]
      }, {
        "type": "Polygon",
        "id": 37157,
        "arcs": [[-5691, 6095, 6096, 6097, -6074, -5934]]
      }, {
        "type": "Polygon",
        "id": 37033,
        "arcs": [[-6090, 6098, 6099, -6096, -5690, -5989, -5688, -5730]]
      }, {
        "type": "Polygon",
        "id": 47133,
        "arcs": [[-6050, 6100, 6101, -6004, -6002]]
      }, {
        "type": "Polygon",
        "id": 47087,
        "arcs": [[-6102, 6102, 6103, -5990, -6005]]
      }, {
        "type": "Polygon",
        "id": 37083,
        "arcs": [[6104, 6105, 6106, 6107, -6079, -6083]]
      }, {
        "type": "Polygon",
        "id": 40097,
        "arcs": [[-5974, 6108, 6109, -6028, -5770]]
      }, {
        "type": "Polygon",
        "id": 47019,
        "arcs": [[6110, 6111, 6112, 6113, -6006, -6013]]
      }, {
        "type": "Polygon",
        "id": 37139,
        "arcs": [[6114, 6115, -6061, -6077]]
      }, {
        "type": "Polygon",
        "id": 47131,
        "arcs": [[-5959, 6116, 6117, 6118, 6119, -5984]]
      }, {
        "type": "Polygon",
        "id": 40093,
        "arcs": [[-5778, -6039, 6120, 6121, 6122, -5947, -5765]]
      }, {
        "type": "Polygon",
        "id": 47183,
        "arcs": [[6123, 6124, 6125, -6117, -5958, -5851]]
      }, {
        "type": "Polygon",
        "id": 47095,
        "arcs": [[6126, 6127, -5927, -5983, -5925, -5985, -6120]]
      }, {
        "type": "Polygon",
        "id": 48421,
        "arcs": [[6128, 6129, -5807, -5812, 6130]]
      }, {
        "type": "Polygon",
        "id": 47079,
        "arcs": [[-5970, 6131, 6132, -6124, -5850, -5964]]
      }, {
        "type": "Polygon",
        "id": 48195,
        "arcs": [[6133, 6134, -6131, -5811, 6135]]
      }, {
        "type": "Polygon",
        "id": 48111,
        "arcs": [[-5808, -6130, 6136, -5801]]
      }, {
        "type": "Polygon",
        "id": 48357,
        "arcs": [[6137, 6138, -6136, -5810, -5815]]
      }, {
        "type": "Polygon",
        "id": 48295,
        "arcs": [[6139, 6140, -6138, -5814, -6043]]
      }, {
        "type": "Polygon",
        "id": 5007,
        "arcs": [[-5861, 6141, 6142, 6143, 6144, -5971, -5961]]
      }, {
        "type": "Polygon",
        "id": 5049,
        "arcs": [[6145, 6146, 6147, -5955, -5732, -5915]]
      }, {
        "type": "Polygon",
        "id": 5015,
        "arcs": [[-5831, -5946, 6148, 6149, 6150, -6142, -5860]]
      }, {
        "type": "Polygon",
        "id": 5135,
        "arcs": [[-5914, 6151, 6152, 6153, 6154, -6146]]
      }, {
        "type": "Polygon",
        "id": 5121,
        "arcs": [[6155, 6156, -6152, -5913, -5942, 6157]]
      }, {
        "type": "Polygon",
        "id": 5009,
        "arcs": [[6158, 6159, 6160, -6149, -5945]]
      }, {
        "type": "Polygon",
        "id": 5089,
        "arcs": [[6161, 6162, -6159, -5944, -5957]]
      }, {
        "type": "Polygon",
        "id": 5005,
        "arcs": [[-6148, 6163, 6164, 6165, -6162, -5956]]
      }, {
        "type": "Polygon",
        "id": 5021,
        "arcs": [[-5888, -5999, 6166, -6158, -5941]]
      }, {
        "type": "Polygon",
        "id": 6031,
        "arcs": [[6167, 6168, -5899, -5391, -5966]]
      }, {
        "type": "Polygon",
        "id": 47169,
        "arcs": [[-5992, 6169, 6170, -5980]]
      }, {
        "type": "Polygon",
        "id": 47021,
        "arcs": [[6171, 6172, 6173, -5986, -5976], [6174]]
      }, {
        "type": "Polygon",
        "id": 47179,
        "arcs": [[-6114, 6175, 6176, -6033, -6007]]
      }, {
        "type": "Polygon",
        "id": 37193,
        "arcs": [[-6059, 6177, 6178, 6179, 6180, 6181, -6045, -6052]]
      }, {
        "type": "Polygon",
        "id": 47173,
        "arcs": [[6182, 6183, 6184, -6031, -6020]]
      }, {
        "type": "Polygon",
        "id": 47159,
        "arcs": [[-6104, 6185, 6186, 6187, -6170, -5991]]
      }, {
        "type": "Polygon",
        "id": 29155,
        "arcs": [[-6128, 6188, 6189, -5995, -5928]]
      }, {
        "type": "Polygon",
        "id": 40143,
        "arcs": [[-6030, 6190, 6191, 6192, -6053, -5760, -5773]]
      }, {
        "type": "Polygon",
        "id": 47057,
        "arcs": [[-6027, -6036, 6193, 6194, 6195, -6183, -6019]]
      }, {
        "type": "Polygon",
        "id": 47037,
        "arcs": [[-5982, 6196, 6197, 6198, -6172, -5975]]
      }, {
        "type": "Polygon",
        "id": 47059,
        "arcs": [[6199, 6200, 6201, 6202, -6034, -6177]]
      }, {
        "type": "Polygon",
        "id": 37189,
        "arcs": [[-6182, 6203, 6204, -6011, -6046]]
      }, {
        "type": "Polygon",
        "id": 37143,
        "arcs": [[6205, 6206, -6062, -6116]]
      }, {
        "type": "Polygon",
        "id": 47129,
        "arcs": [[-6016, 6207, 6208, 6209, -6047]]
      }, {
        "type": "Polygon",
        "id": 47083,
        "arcs": [[-5988, 6210, 6211, 6212, -5968]]
      }, {
        "type": "Polygon",
        "id": 47005,
        "arcs": [[-6213, 6213, 6214, 6215, 6216, -6132, -5969]]
      }, {
        "type": "Polygon",
        "id": 47189,
        "arcs": [[-6171, -6188, 6217, 6218, 6219, -6197, -5981]]
      }, {
        "type": "MultiPolygon",
        "id": 37041,
        "arcs": [[[6220, -6063, -6207]]]
      }, {
        "type": "Polygon",
        "id": 47063,
        "arcs": [[-6203, 6221, 6222, -6194, -6035]]
      }, {
        "type": "MultiPolygon",
        "id": 47043,
        "arcs": [[[-6175]], [[-6174, 6223, 6224, 6225, -6211, -5987]]]
      }, {
        "type": "Polygon",
        "id": 5087,
        "arcs": [[6226, 6227, 6228, 6229, 6230, -6143, -6151]]
      }, {
        "type": "Polygon",
        "id": 47141,
        "arcs": [[-6049, 6231, 6232, 6233, -6186, -6103, -6101]]
      }, {
        "type": "Polygon",
        "id": 47001,
        "arcs": [[-6185, 6234, 6235, -6208, -6015, -6032]]
      }, {
        "type": "Polygon",
        "id": 37197,
        "arcs": [[6236, 6237, 6238, -6178, -6058]]
      }, {
        "type": "Polygon",
        "id": 37011,
        "arcs": [[6239, 6240, 6241, 6242, -6111, -6012, -6205]]
      }, {
        "type": "Polygon",
        "id": 37069,
        "arcs": [[6243, 6244, -6093, -6091, -6080]]
      }, {
        "type": "Polygon",
        "id": 5055,
        "arcs": [[-5998, 6245, 6246, -6156, -6167]]
      }, {
        "type": "Polygon",
        "id": 35033,
        "arcs": [[-5829, 6247, 6248, 6249, -5787, -5827]]
      }, {
        "type": "Polygon",
        "id": 37067,
        "arcs": [[6250, 6251, 6252, -6237, -6057, -6075]]
      }, {
        "type": "Polygon",
        "id": 5065,
        "arcs": [[-6155, 6253, 6254, -6164, -6147]]
      }, {
        "type": "Polygon",
        "id": 47171,
        "arcs": [[6255, 6256, 6257, -6200, -6176, -6113]]
      }, {
        "type": "Polygon",
        "id": 5075,
        "arcs": [[-6247, 6258, 6259, 6260, -6153, -6157]]
      }, {
        "type": "Polygon",
        "id": 37081,
        "arcs": [[6261, 6262, 6263, -6251, -6098]]
      }, {
        "type": "Polygon",
        "id": 37001,
        "arcs": [[6264, 6265, 6266, -6262, -6097, -6100]]
      }, {
        "type": "Polygon",
        "id": 40119,
        "arcs": [[6267, 6268, 6269, -6023, -6055]]
      }, {
        "type": "Polygon",
        "id": 47085,
        "arcs": [[-6226, 6270, 6271, -6214, -6212]]
      }, {
        "type": "Polygon",
        "id": 37015,
        "arcs": [[6272, 6273, 6274, -6105, -6082, -6086]]
      }, {
        "type": "Polygon",
        "id": 37135,
        "arcs": [[-6089, 6275, 6276, -6265, -6099]]
      }, {
        "type": "Polygon",
        "id": 37063,
        "arcs": [[-6095, 6277, 6278, -6276, -6088]]
      }, {
        "type": "Polygon",
        "id": 5143,
        "arcs": [[6279, 6280, -6144, -6231]]
      }, {
        "type": "MultiPolygon",
        "id": 37055,
        "arcs": [[[6281, 6282, 6283]], [[6284, 6285]], [[-6070, 6286]]]
      }, {
        "type": "Polygon",
        "id": 47053,
        "arcs": [[6287, 6288, 6289, 6290, -6118, -6126]]
      }, {
        "type": "MultiPolygon",
        "id": 35043,
        "arcs": [[[6291, 6292]], [[6293, 6294, 6295, 6296, 6297, -5792, -5790]]]
      }, {
        "type": "Polygon",
        "id": 35021,
        "arcs": [[-5804, 6298, 6299, -6248, -5828]]
      }, {
        "type": "Polygon",
        "id": 47045,
        "arcs": [[6300, 6301, 6302, -6189, -6127, -6119, -6291]]
      }, {
        "type": "Polygon",
        "id": 37127,
        "arcs": [[-6108, 6303, 6304, 6305, -6244]]
      }, {
        "type": "Polygon",
        "id": 47089,
        "arcs": [[-6223, 6306, 6307, 6308, -6195]]
      }, {
        "type": "Polygon",
        "id": 47093,
        "arcs": [[-6309, 6309, 6310, 6311, 6312, -6235, -6184, -6196]]
      }, {
        "type": "Polygon",
        "id": 47029,
        "arcs": [[6313, 6314, 6315, -6307, -6222, -6202]]
      }, {
        "type": "Polygon",
        "id": 47035,
        "arcs": [[-6210, 6316, 6317, 6318, 6319, 6320, 6321, 6322, -6232, -6048]]
      }, {
        "type": "Polygon",
        "id": 40073,
        "arcs": [[6323, 6324, 6325, -6121, -6038]]
      }, {
        "type": "Polygon",
        "id": 40083,
        "arcs": [[-6024, -6270, 6326, 6327, -6324, -6037]]
      }, {
        "type": "Polygon",
        "id": 40011,
        "arcs": [[-6326, 6328, 6329, 6330, 6331, -6122]]
      }, {
        "type": "Polygon",
        "id": 40043,
        "arcs": [[6332, 6333, -6040, -5948, -6123, -6332]]
      }, {
        "type": "Polygon",
        "id": 40037,
        "arcs": [[-6193, 6334, 6335, 6336, -6268, -6054]]
      }, {
        "type": "Polygon",
        "id": 40145,
        "arcs": [[-6110, 6337, 6338, 6339, -6191, -6029]]
      }, {
        "type": "Polygon",
        "id": 40021,
        "arcs": [[-5973, 6340, 6341, 6342, -6338, -6109]]
      }, {
        "type": "Polygon",
        "id": 40001,
        "arcs": [[-6145, -6281, 6343, 6344, -6341, -5972]]
      }, {
        "type": "Polygon",
        "id": 37121,
        "arcs": [[-6243, 6345, 6346, -6256, -6112]]
      }, {
        "type": "Polygon",
        "id": 37065,
        "arcs": [[6347, 6348, 6349, -6304, -6107]]
      }, {
        "type": "Polygon",
        "id": 47017,
        "arcs": [[-6217, 6350, 6351, 6352, -6288, -6125, -6133]]
      }, {
        "type": "Polygon",
        "id": 47041,
        "arcs": [[6353, 6354, 6355, -6218, -6187, -6234]]
      }, {
        "type": "Polygon",
        "id": 5137,
        "arcs": [[6356, 6357, 6358, 6359, -6165, -6255]]
      }, {
        "type": "Polygon",
        "id": 5101,
        "arcs": [[-6161, 6360, 6361, 6362, -6227, -6150]]
      }, {
        "type": "Polygon",
        "id": 37027,
        "arcs": [[-6181, 6363, 6364, 6365, -6240, -6204]]
      }, {
        "type": "Polygon",
        "id": 5129,
        "arcs": [[-6166, -6360, 6366, 6367, -6361, -6160, -6163]]
      }, {
        "type": "Polygon",
        "id": 47149,
        "arcs": [[6368, 6369, 6370, 6371, 6372, -6198, -6220]]
      }, {
        "type": "Polygon",
        "id": 37199,
        "arcs": [[6373, 6374, 6375, -6257, -6347]]
      }, {
        "type": "MultiPolygon",
        "id": 47185,
        "arcs": [[[6376, -6321]], [[-6323, 6377, 6378, -6354, -6233]]]
      }, {
        "type": "Polygon",
        "id": 37183,
        "arcs": [[-6245, 6379, 6380, 6381, -6278, -6094]]
      }, {
        "type": "Polygon",
        "id": 37117,
        "arcs": [[6382, 6383, 6384, -6348, -6106, -6275]]
      }, {
        "type": "Polygon",
        "id": 37115,
        "arcs": [[-6258, -6376, 6385, 6386, -6314, -6201]]
      }, {
        "type": "Polygon",
        "id": 37059,
        "arcs": [[6387, 6388, 6389, -6238, -6253]]
      }, {
        "type": "Polygon",
        "id": 48393,
        "arcs": [[-6141, 6390, 6391, 6392, 6393, -6134, -6139]]
      }, {
        "type": "Polygon",
        "id": 48211,
        "arcs": [[-6140, -6042, 6394, 6395, -6391]]
      }, {
        "type": "Polygon",
        "id": 48233,
        "arcs": [[-6135, -6394, 6396, 6397]]
      }, {
        "type": "Polygon",
        "id": 48205,
        "arcs": [[6398, 6399, 6400, -5802, -6137]]
      }, {
        "type": "Polygon",
        "id": 37097,
        "arcs": [[-6239, -6390, 6401, 6402, 6403, 6404, 6405, 6406, -6179]]
      }, {
        "type": "Polygon",
        "id": 48341,
        "arcs": [[-6398, 6407, 6408, 6409, -6399, -6129]]
      }, {
        "type": "Polygon",
        "id": 47187,
        "arcs": [[-6373, 6410, 6411, 6412, -6224, -6173, -6199]]
      }, {
        "type": "Polygon",
        "id": 37003,
        "arcs": [[6413, -6364, -6180, -6407]]
      }, {
        "type": "Polygon",
        "id": 47145,
        "arcs": [[6414, 6415, 6416, 6417, 6418, -6317, -6209, -6236, -6313, 6419]]
      }, {
        "type": "Polygon",
        "id": 47155,
        "arcs": [[-6316, 6420, 6421, 6422, -6310, -6308]]
      }, {
        "type": "Polygon",
        "id": 37057,
        "arcs": [[-6264, 6423, 6424, 6425, -6388, -6252]]
      }, {
        "type": "Polygon",
        "id": 40129,
        "arcs": [[-6334, 6426, 6427, 6428, -6395, -6041]]
      }, {
        "type": "Polygon",
        "id": 35031,
        "arcs": [[-6298, 6429, -5795, -5793]]
      }, {
        "type": "Polygon",
        "id": 35049,
        "arcs": [[-6250, 6430, 6431, 6432, -6295, 6433, -6293, 6434, -5788]]
      }, {
        "type": "Polygon",
        "id": 5093,
        "arcs": [[6435, 6436, 6437, 6438, 6439, 6440, 6441, -5996, -6190, -6303]]
      }, {
        "type": "Polygon",
        "id": 37023,
        "arcs": [[-6366, 6442, 6443, 6444, 6445, 6446, -6241]]
      }, {
        "type": "Polygon",
        "id": 47033,
        "arcs": [[6447, 6448, 6449, -6301, -6290]]
      }, {
        "type": "Polygon",
        "id": 5031,
        "arcs": [[-6442, 6450, 6451, -6259, -6246, -5997]]
      }, {
        "type": "Polygon",
        "id": 37177,
        "arcs": [[6452, 6453, 6454]]
      }, {
        "type": "Polygon",
        "id": 47081,
        "arcs": [[-6413, 6455, 6456, 6457, -6271, -6225]]
      }, {
        "type": "Polygon",
        "id": 37187,
        "arcs": [[-6454, 6458, 6459, -6383, -6274, 6460]]
      }, {
        "type": "Polygon",
        "id": 35028,
        "arcs": [[-5789, -6435, -6292, -6434, -6294]]
      }, {
        "type": "Polygon",
        "id": 47015,
        "arcs": [[6461, 6462, -6369, -6219, -6356]]
      }, {
        "type": "Polygon",
        "id": 37111,
        "arcs": [[6463, 6464, -6374, -6346, -6242, -6447]]
      }, {
        "type": "Polygon",
        "id": 47097,
        "arcs": [[-6450, 6465, 6466, -6436, -6302]]
      }, {
        "type": "Polygon",
        "id": 40081,
        "arcs": [[-6337, 6467, 6468, 6469, -6327, -6269]]
      }, {
        "type": "Polygon",
        "id": 5063,
        "arcs": [[-6261, 6470, 6471, 6472, -6357, -6254, -6154]]
      }, {
        "type": "Polygon",
        "id": 37151,
        "arcs": [[-6267, 6473, 6474, 6475, -6424, -6263]]
      }, {
        "type": "MultiPolygon",
        "id": 47105,
        "arcs": [[[6476, 6477]], [[-6415]], [[-6420, -6312, 6478, 6479, 6480, -6416]]]
      }, {
        "type": "Polygon",
        "id": 5067,
        "arcs": [[-6260, -6452, 6481, 6482, 6483, 6484, -6471]]
      }, {
        "type": "Polygon",
        "id": 47009,
        "arcs": [[6485, 6486, 6487, -6479, -6311, -6423]]
      }, {
        "type": "Polygon",
        "id": 37037,
        "arcs": [[-6279, -6382, 6488, 6489, 6490, -6474, -6266, -6277]]
      }, {
        "type": "Polygon",
        "id": 35047,
        "arcs": [[-6300, 6491, 6492, 6493, -6431, -6249]]
      }, {
        "type": "Polygon",
        "id": 37195,
        "arcs": [[6494, 6495, 6496, 6497, -6305, -6350]]
      }, {
        "type": "Polygon",
        "id": 37159,
        "arcs": [[-6426, 6498, 6499, -6402, -6389]]
      }, {
        "type": "Polygon",
        "id": 40111,
        "arcs": [[-6192, -6340, 6500, 6501, 6502, -6335]]
      }, {
        "type": "Polygon",
        "id": 40101,
        "arcs": [[-6343, 6503, 6504, 6505, -6501, -6339]]
      }, {
        "type": "Polygon",
        "id": 47177,
        "arcs": [[-6379, 6506, 6507, 6508, 6509, -6462, -6355]]
      }, {
        "type": "Polygon",
        "id": 47119,
        "arcs": [[6510, 6511, 6512, 6513, -6456, -6412]]
      }, {
        "type": "Polygon",
        "id": 47039,
        "arcs": [[6514, 6515, 6516, 6517, -6351, -6216]]
      }, {
        "type": "Polygon",
        "id": 47135,
        "arcs": [[-6458, 6518, 6519, -6515, -6215, -6272]]
      }, {
        "type": "Polygon",
        "id": 37147,
        "arcs": [[-6385, 6520, 6521, 6522, 6523, 6524, 6525, -6495, -6349]]
      }, {
        "type": "Polygon",
        "id": 37035,
        "arcs": [[-6406, 6526, -6443, -6365, -6414]]
      }, {
        "type": "Polygon",
        "id": 37021,
        "arcs": [[-6465, 6527, 6528, 6529, -6386, -6375]]
      }, {
        "type": "Polygon",
        "id": 47143,
        "arcs": [[6530, 6531, 6532, -6318, -6419]]
      }, {
        "type": "Polygon",
        "id": 47175,
        "arcs": [[-6322, -6377, -6320, 6533, 6534, -6507, -6378]]
      }, {
        "type": "Polygon",
        "id": 47077,
        "arcs": [[-6518, 6535, 6536, 6537, -6352]]
      }, {
        "type": "Polygon",
        "id": 47075,
        "arcs": [[6538, 6539, 6540, 6541, -6466, -6449]]
      }, {
        "type": "Polygon",
        "id": 37101,
        "arcs": [[-6498, 6542, 6543, 6544, -6380, -6306]]
      }, {
        "type": "Polygon",
        "id": 40039,
        "arcs": [[-6331, 6545, 6546, 6547, -6427, -6333]]
      }, {
        "type": "Polygon",
        "id": 6071,
        "arcs": [[6548, 6549, 6550, 6551, 6552, 6553, -5477, -5938]]
      }, {
        "type": "Polygon",
        "id": 6079,
        "arcs": [[-6169, 6554, 6555, 6556, -5900]]
      }, {
        "type": "Polygon",
        "id": 6029,
        "arcs": [[-6554, 6557, 6558, 6559, -6555, -6168, -5965, -5478]]
      }, {
        "type": "Polygon",
        "id": 47113,
        "arcs": [[-6353, -6538, 6560, 6561, -6539, -6448, -6289]]
      }, {
        "type": "Polygon",
        "id": 5141,
        "arcs": [[-6359, 6562, 6563, 6564, 6565, -6367]]
      }, {
        "type": "Polygon",
        "id": 37087,
        "arcs": [[-6530, 6566, 6567, 6568, -6421, -6315, -6387]]
      }, {
        "type": "Polygon",
        "id": 5047,
        "arcs": [[6569, 6570, 6571, -6229, 6572]]
      }, {
        "type": "Polygon",
        "id": 47007,
        "arcs": [[-6533, 6573, 6574, -6534, -6319]]
      }, {
        "type": "Polygon",
        "id": 5071,
        "arcs": [[-6228, -6363, 6575, 6576, -6573]]
      }, {
        "type": "Polygon",
        "id": 5033,
        "arcs": [[6577, 6578, -6344, -6280, -6230, -6572]]
      }, {
        "type": "Polygon",
        "id": 47121,
        "arcs": [[6579, 6580, 6581, -6531, -6418]]
      }, {
        "type": "Polygon",
        "id": 35037,
        "arcs": [[-6401, 6582, 6583, 6584, 6585, 6586, 6587, -6492, -6299, -5803]]
      }, {
        "type": "MultiPolygon",
        "id": 37013,
        "arcs": [[[6588, 6589, 6590, -6523]], [[-6460, 6591, 6592, -6521, -6384]]]
      }, {
        "type": "Polygon",
        "id": 5115,
        "arcs": [[-6368, -6566, 6593, 6594, 6595, -6576, -6362]]
      }, {
        "type": "Polygon",
        "id": 40017,
        "arcs": [[6596, 6597, 6598, 6599, 6600, -6329, -6325]]
      }, {
        "type": "Polygon",
        "id": 40109,
        "arcs": [[-6470, 6601, 6602, -6597, -6328]]
      }, {
        "type": "Polygon",
        "id": 5023,
        "arcs": [[-6473, 6603, 6604, -6563, -6358]]
      }, {
        "type": "Polygon",
        "id": 47117,
        "arcs": [[6605, 6606, 6607, -6511, -6411, -6372]]
      }, {
        "type": "Polygon",
        "id": 5111,
        "arcs": [[-6441, 6608, 6609, -6482, -6451]]
      }, {
        "type": "MultiPolygon",
        "id": 37095,
        "arcs": [[[-6283, 6610]], [[-6453, 6611, -6285, 6612, -6592, -6459]]]
      }, {
        "type": "Polygon",
        "id": 47031,
        "arcs": [[-6463, -6510, 6613, 6614, 6615, 6616, -6370]]
      }, {
        "type": "Polygon",
        "id": 47003,
        "arcs": [[-6617, 6617, 6618, -6606, -6371]]
      }, {
        "type": "Polygon",
        "id": 37173,
        "arcs": [[6619, 6620, 6621, -6486, -6422, -6569]]
      }, {
        "type": "Polygon",
        "id": 47123,
        "arcs": [[-6488, 6622, 6623, 6624, 6625, -6478, 6626, -6480]]
      }, {
        "type": "Polygon",
        "id": 47101,
        "arcs": [[-6514, 6627, 6628, -6519, -6457]]
      }, {
        "type": "Polygon",
        "id": 37079,
        "arcs": [[6629, 6630, -6496, -6526]]
      }, {
        "type": "MultiPolygon",
        "id": 47167,
        "arcs": [[[6631, 6632, -6439]], [[-6542, 6633, 6634, -6437, -6467]]]
      }, {
        "type": "Polygon",
        "id": 47107,
        "arcs": [[-6481, -6627, -6477, -6626, 6635, 6636, -6580, -6417]]
      }, {
        "type": "Polygon",
        "id": 40135,
        "arcs": [[-6345, -6579, 6637, 6638, 6639, -6504, -6342]]
      }, {
        "type": "Polygon",
        "id": 40107,
        "arcs": [[-6503, 6640, 6641, 6642, 6643, -6468, -6336]]
      }, {
        "type": "Polygon",
        "id": 37105,
        "arcs": [[6644, 6645, -6490]]
      }, {
        "type": "Polygon",
        "id": 48359,
        "arcs": [[-6410, 6646, 6647, -6583, -6400]]
      }, {
        "type": "Polygon",
        "id": 48065,
        "arcs": [[-6393, 6648, 6649, 6650, -6408, -6397]]
      }, {
        "type": "Polygon",
        "id": 48179,
        "arcs": [[6651, 6652, -6649, -6392]]
      }, {
        "type": "Polygon",
        "id": 48483,
        "arcs": [[-6429, 6653, 6654, -6652, -6396]]
      }, {
        "type": "Polygon",
        "id": 48375,
        "arcs": [[-6651, 6655, -6647, -6409]]
      }, {
        "type": "Polygon",
        "id": 37161,
        "arcs": [[6656, 6657, 6658, 6659, 6660, -6528, -6464, -6446]]
      }, {
        "type": "Polygon",
        "id": 37191,
        "arcs": [[-6631, 6661, 6662, 6663, -6543, -6497]]
      }, {
        "type": "Polygon",
        "id": 47023,
        "arcs": [[6664, 6665, 6666, -6561, -6537]]
      }, {
        "type": "Polygon",
        "id": 37085,
        "arcs": [[-6545, 6667, 6668, 6669, -6645, -6489, -6381]]
      }, {
        "type": "Polygon",
        "id": 37045,
        "arcs": [[6670, 6671, 6672, 6673, -6657, -6445]]
      }, {
        "type": "Polygon",
        "id": 37109,
        "arcs": [[-6405, 6674, 6675, -6671, -6444, -6527]]
      }, {
        "type": "Polygon",
        "id": 47153,
        "arcs": [[6676, 6677, 6678, -6508, -6535, -6575]]
      }, {
        "type": "Polygon",
        "id": 40091,
        "arcs": [[6679, 6680, 6681, -6641, -6502, -6506]]
      }, {
        "type": "Polygon",
        "id": 40015,
        "arcs": [[-6601, 6682, 6683, 6684, 6685, -6546, -6330]]
      }, {
        "type": "Polygon",
        "id": 5145,
        "arcs": [[-6485, 6686, 6687, 6688, 6689, -6604, -6472]]
      }, {
        "type": "Polygon",
        "id": 47061,
        "arcs": [[6690, 6691, -6614, -6509, -6679]]
      }, {
        "type": "Polygon",
        "id": 4025,
        "arcs": [[6692, 6693, 6694, 6695, -5752]]
      }, {
        "type": "Polygon",
        "id": 37099,
        "arcs": [[-6568, 6696, 6697, 6698, 6699, -6620]]
      }, {
        "type": "Polygon",
        "id": 37119,
        "arcs": [[6700, 6701, 6702, 6703, 6704, -6675, -6404]]
      }, {
        "type": "Polygon",
        "id": 37125,
        "arcs": [[-6646, -6670, 6705, 6706, 6707, 6708, -6475, -6491]]
      }, {
        "type": "Polygon",
        "id": 37123,
        "arcs": [[-6709, 6709, 6710, -6425, -6476]]
      }, {
        "type": "Polygon",
        "id": 37025,
        "arcs": [[6711, 6712, -6701, -6403, -6500]]
      }, {
        "type": "Polygon",
        "id": 40009,
        "arcs": [[-6548, 6713, 6714, 6715, 6716, 6717, -6654, -6428]]
      }, {
        "type": "Polygon",
        "id": 37167,
        "arcs": [[-6711, 6718, 6719, -6712, -6499]]
      }, {
        "type": "Polygon",
        "id": 37089,
        "arcs": [[-6661, 6720, 6721, 6722, -6529]]
      }, {
        "type": "Polygon",
        "id": 47181,
        "arcs": [[6723, 6724, 6725, -6516, -6520, -6629]]
      }, {
        "type": "Polygon",
        "id": 40133,
        "arcs": [[6726, 6727, 6728, -6643]]
      }, {
        "type": "Polygon",
        "id": 37075,
        "arcs": [[6729, 6730, -6623, -6487, -6622]]
      }, {
        "type": "Polygon",
        "id": 40149,
        "arcs": [[-6686, 6731, -6714, -6547]]
      }, {
        "type": "Polygon",
        "id": 40125,
        "arcs": [[-6644, -6729, 6732, 6733, 6734, -6602, -6469]]
      }, {
        "type": "Polygon",
        "id": 5029,
        "arcs": [[6735, 6736, 6737, -6594, -6565]]
      }, {
        "type": "Polygon",
        "id": 47099,
        "arcs": [[-6513, 6738, 6739, -6724, -6628]]
      }, {
        "type": "Polygon",
        "id": 40061,
        "arcs": [[6740, 6741, 6742, -6680, -6505, -6640]]
      }, {
        "type": "Polygon",
        "id": 47065,
        "arcs": [[-6582, 6743, 6744, 6745, 6746, 6747, -6677, -6574, -6532]]
      }, {
        "type": "Polygon",
        "id": 47055,
        "arcs": [[-6608, 6748, 6749, 6750, -6739, -6512]]
      }, {
        "type": "Polygon",
        "id": 5131,
        "arcs": [[-6571, 6751, 6752, 6753, -6638, -6578]]
      }, {
        "type": "Polygon",
        "id": 5037,
        "arcs": [[6754, 6755, 6756, -6483, -6610]]
      }, {
        "type": "Polygon",
        "id": 5147,
        "arcs": [[-6757, 6757, 6758, 6759, -6687, -6484]]
      }, {
        "type": "Polygon",
        "id": 5035,
        "arcs": [[-6440, -6633, 6760, 6761, 6762, 6763, 6764, -6755, -6609]]
      }, {
        "type": "Polygon",
        "id": 47069,
        "arcs": [[-6562, -6667, 6765, 6766, 6767, 6768, 6769, -6540]]
      }, {
        "type": "Polygon",
        "id": 37107,
        "arcs": [[6770, 6771, 6772, -6662, -6630, -6525]]
      }, {
        "type": "Polygon",
        "id": 5083,
        "arcs": [[-6577, -6596, 6773, 6774, -6752, -6570]]
      }, {
        "type": "Polygon",
        "id": 37175,
        "arcs": [[6775, 6776, 6777, -6697, -6567, -6723]]
      }, {
        "type": "Polygon",
        "id": 47071,
        "arcs": [[-6726, 6778, 6779, 6780, 6781, -6665, -6536, -6517]]
      }, {
        "type": "Polygon",
        "id": 37071,
        "arcs": [[-6705, 6782, -6672, -6676]]
      }, {
        "type": "MultiPolygon",
        "id": 37049,
        "arcs": [[[6783, 6784, 6785]], [[-6591, 6786, 6787, 6788, -6771, -6524]]]
      }, {
        "type": "Polygon",
        "id": 47127,
        "arcs": [[6789, 6790, -6618, -6616]]
      }, {
        "type": "Polygon",
        "id": 47157,
        "arcs": [[6791, 6792, 6793, -6761, -6632, -6438, -6635]]
      }, {
        "type": "Polygon",
        "id": 37149,
        "arcs": [[6794, 6795, -6721, -6660]]
      }, {
        "type": "Polygon",
        "id": 47047,
        "arcs": [[-6770, 6796, 6797, -6792, -6634, -6541]]
      }, {
        "type": "Polygon",
        "id": 47109,
        "arcs": [[-6782, 6798, -6766, -6666]]
      }, {
        "type": "Polygon",
        "id": 40079,
        "arcs": [[6799, 6800, 6801, 6802, 6803, -6741, -6639, -6754]]
      }, {
        "type": "Polygon",
        "id": 40051,
        "arcs": [[6804, 6805, 6806, 6807, -6683, -6600]]
      }, {
        "type": "Polygon",
        "id": 40027,
        "arcs": [[-6735, 6808, -6598, -6603]]
      }, {
        "type": "Polygon",
        "id": 47103,
        "arcs": [[-6791, 6809, 6810, 6811, -6749, -6607, -6619]]
      }, {
        "type": "Polygon",
        "id": 5045,
        "arcs": [[-6605, -6690, 6812, 6813, 6814, -6736, -6564]]
      }, {
        "type": "Polygon",
        "id": 47051,
        "arcs": [[-6692, 6815, 6816, 6817, -6810, -6790, -6615]]
      }, {
        "type": "Polygon",
        "id": 47011,
        "arcs": [[6818, 6819, 6820, -6744, -6581, -6637]]
      }, {
        "type": "Polygon",
        "id": 35006,
        "arcs": [[-6297, 6821, 6822, 6823, 6824, -5796, -6430]]
      }, {
        "type": "Polygon",
        "id": 40087,
        "arcs": [[-6734, 6825, 6826, -6805, -6599, -6809]]
      }, {
        "type": "Polygon",
        "id": 37113,
        "arcs": [[6827, 6828, 6829, -6730, -6621, -6700]]
      }, {
        "type": "MultiPolygon",
        "id": 37137,
        "arcs": [[[-6787, -6590, 6830]]]
      }, {
        "type": "Polygon",
        "id": 47115,
        "arcs": [[-6748, 6831, 6832, -6816, -6691, -6678]]
      }, {
        "type": "Polygon",
        "id": 37163,
        "arcs": [[-6664, 6833, 6834, 6835, 6836, -6668, -6544]]
      }, {
        "type": "Polygon",
        "id": 5149,
        "arcs": [[-6738, 6837, 6838, 6839, 6840, -6774, -6595]]
      }, {
        "type": "Polygon",
        "id": 40121,
        "arcs": [[-6743, 6841, 6842, 6843, 6844, 6845, -6681]]
      }, {
        "type": "Polygon",
        "id": 37039,
        "arcs": [[-6830, 6846, 6847, 6848, 6849, -6624, -6731]]
      }, {
        "type": "Polygon",
        "id": 40063,
        "arcs": [[-6682, -6846, 6850, 6851, -6727, -6642]]
      }, {
        "type": "Polygon",
        "id": 47139,
        "arcs": [[-6850, 6852, 6853, -6819, -6636, -6625]]
      }, {
        "type": "Polygon",
        "id": 37051,
        "arcs": [[-6837, 6854, 6855, 6856, -6706, -6669]]
      }, {
        "type": "Polygon",
        "id": 37103,
        "arcs": [[6857, -6785, 6858, 6859, 6860, -6772, -6789]]
      }, {
        "type": "Polygon",
        "id": 35001,
        "arcs": [[-6433, 6861, 6862, -6822, -6296]]
      }, {
        "type": "Polygon",
        "id": 35019,
        "arcs": [[-6588, 6863, 6864, 6865, -6493]]
      }, {
        "type": "Polygon",
        "id": 45045,
        "arcs": [[-6796, 6866, 6867, 6868, 6869, -6776, -6722]]
      }, {
        "type": "Polygon",
        "id": 37007,
        "arcs": [[6870, 6871, 6872, 6873, -6719]]
      }, {
        "type": "Polygon",
        "id": 37093,
        "arcs": [[-6857, 6874, 6875, -6707]]
      }, {
        "type": "Polygon",
        "id": 37179,
        "arcs": [[-6874, 6876, 6877, -6702, -6713, -6720]]
      }, {
        "type": "Polygon",
        "id": 45083,
        "arcs": [[6878, 6879, -6867, -6795, -6659, 6880]]
      }, {
        "type": "Polygon",
        "id": 37061,
        "arcs": [[-6773, -6861, 6881, 6882, -6834, -6663]]
      }, {
        "type": "Polygon",
        "id": 48117,
        "arcs": [[6883, 6884, 6885, 6886, -6584, -6648]]
      }, {
        "type": "Polygon",
        "id": 45021,
        "arcs": [[6887, -6881, -6658, -6674, 6888]]
      }, {
        "type": "Polygon",
        "id": 48129,
        "arcs": [[6889, 6890, 6891, 6892, -6653]]
      }, {
        "type": "Polygon",
        "id": 48087,
        "arcs": [[-6718, 6893, 6894, 6895, -6890, -6655]]
      }, {
        "type": "Polygon",
        "id": 48381,
        "arcs": [[6896, 6897, 6898, -6884, -6656]]
      }, {
        "type": "Polygon",
        "id": 37153,
        "arcs": [[-6708, 6899, 6900, -6871, -6710]]
      }, {
        "type": "Polygon",
        "id": 48011,
        "arcs": [[-6893, 6901, 6902, -6897, -6650]]
      }, {
        "type": "Polygon",
        "id": 45091,
        "arcs": [[6903, 6904, 6905, -6889, -6673, -6783, -6704]]
      }, {
        "type": "Polygon",
        "id": 37043,
        "arcs": [[-6829, 6906, 6907, 6908, -6847]]
      }, {
        "type": "Polygon",
        "id": 5123,
        "arcs": [[-6765, 6909, 6910, -6758, -6756]]
      }, {
        "type": "Polygon",
        "id": 40075,
        "arcs": [[-6685, 6911, 6912, 6913, 6914, -6715, -6732]]
      }, {
        "type": "MultiPolygon",
        "id": 37031,
        "arcs": [[[6915, -6859, -6784, 6916]]]
      }, {
        "type": "Polygon",
        "id": 40055,
        "arcs": [[-6915, 6917, 6918, -6716]]
      }, {
        "type": "MultiPolygon",
        "id": 6083,
        "arcs": [[[6919]], [[6920]], [[-6560, 6921, 6922, -6556]]]
      }, {
        "type": "Polygon",
        "id": 5105,
        "arcs": [[6923, 6924, 6925, -6838, -6737, -6815]]
      }, {
        "type": "Polygon",
        "id": 5127,
        "arcs": [[-6841, 6926, 6927, -6800, -6753, -6775]]
      }, {
        "type": "Polygon",
        "id": 5117,
        "arcs": [[-6760, 6928, 6929, 6930, -6688]]
      }, {
        "type": "Polygon",
        "id": 45077,
        "arcs": [[-6870, 6931, 6932, -6777]]
      }, {
        "type": "Polygon",
        "id": 5085,
        "arcs": [[-6931, 6933, 6934, 6935, -6813, -6689]]
      }, {
        "type": "Polygon",
        "id": 45057,
        "arcs": [[-6878, 6936, 6937, 6938, 6939, -6904, -6703]]
      }, {
        "type": "Polygon",
        "id": 40077,
        "arcs": [[-6804, 6940, -6842, -6742]]
      }, {
        "type": "Polygon",
        "id": 45073,
        "arcs": [[6941, 6942, 6943, 6944, 6945, 6946, -6698, -6778, -6933]]
      }, {
        "type": "Polygon",
        "id": 35057,
        "arcs": [[-6866, 6947, 6948, 6949, -6862, -6432, -6494]]
      }, {
        "type": "Polygon",
        "id": 37165,
        "arcs": [[6950, 6951, -6900, -6876]]
      }, {
        "type": "Polygon",
        "id": 40057,
        "arcs": [[-6919, 6952, 6953, 6954, -6894, -6717]]
      }, {
        "type": "Polygon",
        "id": 5119,
        "arcs": [[-6936, 6955, 6956, 6957, -6924, -6814]]
      }, {
        "type": "Polygon",
        "id": 1077,
        "arcs": [[6958, 6959, 6960, -6779, -6725, -6740, -6751, 6961]]
      }, {
        "type": "Polygon",
        "id": 5095,
        "arcs": [[-6911, 6962, 6963, 6964, -6929, -6759]]
      }, {
        "type": "Polygon",
        "id": 13241,
        "arcs": [[6965, 6966, -6907, -6828, -6699, -6947]]
      }, {
        "type": "Polygon",
        "id": 1083,
        "arcs": [[-6812, 6967, 6968, 6969, -6962, -6750]]
      }, {
        "type": "Polygon",
        "id": 28003,
        "arcs": [[6970, 6971, -6767, -6799, -6781, 6972]]
      }, {
        "type": "Polygon",
        "id": 28141,
        "arcs": [[6973, 6974, 6975, -6973, -6780, -6961, 6976]]
      }, {
        "type": "Polygon",
        "id": 28139,
        "arcs": [[6977, 6978, 6979, -6768, -6972]]
      }, {
        "type": "Polygon",
        "id": 28033,
        "arcs": [[6980, 6981, -6762, -6794, 6982]]
      }, {
        "type": "Polygon",
        "id": 28009,
        "arcs": [[6983, 6984, -6797, -6769, -6980]]
      }, {
        "type": "Polygon",
        "id": 28093,
        "arcs": [[6985, 6986, 6987, -6983, -6793, -6798, -6985]]
      }, {
        "type": "Polygon",
        "id": 13281,
        "arcs": [[-6967, 6988, 6989, 6990, -6908]]
      }, {
        "type": "Polygon",
        "id": 1089,
        "arcs": [[-6818, 6991, 6992, 6993, -6968, -6811]]
      }, {
        "type": "Polygon",
        "id": 1071,
        "arcs": [[6994, 6995, -6992, -6817, -6833, 6996]]
      }, {
        "type": "Polygon",
        "id": 13213,
        "arcs": [[6997, 6998, 6999, -6820, -6854, 7000]]
      }, {
        "type": "Polygon",
        "id": 13111,
        "arcs": [[-6849, 7001, 7002, 7003, 7004, -7001, -6853]]
      }, {
        "type": "Polygon",
        "id": 13313,
        "arcs": [[7005, 7006, 7007, -6821, -7000]]
      }, {
        "type": "Polygon",
        "id": 13047,
        "arcs": [[7008, -6745, -7008]]
      }, {
        "type": "Polygon",
        "id": 13291,
        "arcs": [[-6909, -6991, 7009, 7010, -7002, -6848]]
      }, {
        "type": "MultiPolygon",
        "id": 37133,
        "arcs": [[[-6916, 7011, 7012, -6882, -6860]]]
      }, {
        "type": "Polygon",
        "id": 13083,
        "arcs": [[-6832, -6747, 7013, 7014, -6997]]
      }, {
        "type": "Polygon",
        "id": 13295,
        "arcs": [[-7007, 7015, 7016, 7017, 7018, -7014, -6746, -7009]]
      }, {
        "type": "Polygon",
        "id": 40123,
        "arcs": [[-6728, -6852, 7019, 7020, 7021, 7022, -6826, -6733]]
      }, {
        "type": "Polygon",
        "id": 35061,
        "arcs": [[-6863, -6950, 7023, -6823]]
      }, {
        "type": "Polygon",
        "id": 37155,
        "arcs": [[7024, 7025, 7026, 7027, 7028, -6951, -6875, -6856]]
      }, {
        "type": "Polygon",
        "id": 35009,
        "arcs": [[-6887, 7029, 7030, 7031, -6585]]
      }, {
        "type": "Polygon",
        "id": 45087,
        "arcs": [[-6906, 7032, 7033, 7034, 7035, -6879, -6888]]
      }, {
        "type": "Polygon",
        "id": 5077,
        "arcs": [[-6764, 7036, 7037, -6963, -6910]]
      }, {
        "type": "Polygon",
        "id": 1033,
        "arcs": [[7038, 7039, -6977, -6960]]
      }, {
        "type": "MultiPolygon",
        "id": 6111,
        "arcs": [[[7040]], [[7041, -6922, -6559, 7042]]]
      }, {
        "type": "Polygon",
        "id": 28143,
        "arcs": [[-6763, -6982, 7043, 7044, 7045, 7046, 7047, -7037]]
      }, {
        "type": "Polygon",
        "id": 1049,
        "arcs": [[-7019, 7048, 7049, 7050, 7051, -6995, -7015]]
      }, {
        "type": "Polygon",
        "id": 37017,
        "arcs": [[7052, 7053, -7025, -6855, -6836]]
      }, {
        "type": "Polygon",
        "id": 40065,
        "arcs": [[7054, 7055, 7056, -6953, -6918, -6914]]
      }, {
        "type": "Polygon",
        "id": 5125,
        "arcs": [[-6958, 7057, 7058, 7059, -6925]]
      }, {
        "type": "Polygon",
        "id": 40031,
        "arcs": [[-6684, -6808, 7060, 7061, 7062, -6912]]
      }, {
        "type": "Polygon",
        "id": 40049,
        "arcs": [[-7023, 7063, 7064, 7065, -6806, -6827]]
      }, {
        "type": "Polygon",
        "id": 13123,
        "arcs": [[7066, 7067, 7068, -6998, -7005]]
      }, {
        "type": "Polygon",
        "id": 13137,
        "arcs": [[-6946, 7069, 7070, 7071, 7072, -6989, -6966]]
      }, {
        "type": "MultiPolygon",
        "id": 6037,
        "arcs": [[[7073]], [[7074]], [[-6553, 7075, 7076, -7043, -6558]]]
      }, {
        "type": "Polygon",
        "id": 45023,
        "arcs": [[-6940, 7077, -7033, -6905]]
      }, {
        "type": "Polygon",
        "id": 45007,
        "arcs": [[7078, 7079, 7080, -6942, -6932, -6869]]
      }, {
        "type": "Polygon",
        "id": 45025,
        "arcs": [[7081, 7082, -6937, -6877, -6873, 7083]]
      }, {
        "type": "Polygon",
        "id": 45069,
        "arcs": [[-7029, 7084, 7085, 7086, -7084, -6872, -6901, -6952]]
      }, {
        "type": "Polygon",
        "id": 1079,
        "arcs": [[-6970, 7087, 7088, 7089, 7090, -7039, -6959]]
      }, {
        "type": "Polygon",
        "id": 13311,
        "arcs": [[7091, 7092, -7010, -6990, -7073]]
      }, {
        "type": "Polygon",
        "id": 45059,
        "arcs": [[-7036, 7093, 7094, 7095, -6868, -6880]]
      }, {
        "type": "Polygon",
        "id": 35011,
        "arcs": [[7096, 7097, 7098, -6864, -6587]]
      }, {
        "type": "Polygon",
        "id": 28137,
        "arcs": [[-6988, 7099, 7100, -7044, -6981]]
      }, {
        "type": "Polygon",
        "id": 5051,
        "arcs": [[-7060, 7101, 7102, -6839, -6926]]
      }, {
        "type": "Polygon",
        "id": 40029,
        "arcs": [[-6845, 7103, 7104, -7020, -6851]]
      }, {
        "type": "Polygon",
        "id": 28117,
        "arcs": [[-6976, 7105, 7106, 7107, -6978, -6971]]
      }, {
        "type": "Polygon",
        "id": 48437,
        "arcs": [[-6903, 7108, 7109, 7110, 7111, -6898]]
      }, {
        "type": "Polygon",
        "id": 48045,
        "arcs": [[-6892, 7112, 7113, 7114, -7109, -6902]]
      }, {
        "type": "Polygon",
        "id": 48069,
        "arcs": [[-7112, 7115, 7116, 7117, -6885, -6899]]
      }, {
        "type": "Polygon",
        "id": 48191,
        "arcs": [[-6896, 7118, 7119, 7120, -7113, -6891]]
      }, {
        "type": "Polygon",
        "id": 48075,
        "arcs": [[-6955, 7121, 7122, -7119, -6895]]
      }, {
        "type": "Polygon",
        "id": 5097,
        "arcs": [[-7103, 7123, 7124, 7125, 7126, -6927, -6840]]
      }, {
        "type": "Polygon",
        "id": 48369,
        "arcs": [[-7118, 7127, 7128, -7030, -6886]]
      }, {
        "type": "Polygon",
        "id": 13187,
        "arcs": [[-7093, 7129, 7130, -7003, -7011]]
      }, {
        "type": "MultiPolygon",
        "id": 37141,
        "arcs": [[[7131, 7132]], [[-7013, 7133, 7134, 7135, 7136, -7053, -6835, -6883]]]
      }, {
        "type": "Polygon",
        "id": 5113,
        "arcs": [[7137, 7138, 7139, -6801, -6928, -7127]]
      }, {
        "type": "Polygon",
        "id": 1103,
        "arcs": [[-6994, 7140, 7141, -7088, -6969]]
      }, {
        "type": "Polygon",
        "id": 13257,
        "arcs": [[7142, 7143, -7070, -6945]]
      }, {
        "type": "Polygon",
        "id": 40137,
        "arcs": [[-7066, 7144, 7145, 7146, -7061, -6807]]
      }, {
        "type": "Polygon",
        "id": 40005,
        "arcs": [[7147, 7148, 7149, 7150, -7104, -6844]]
      }, {
        "type": "Polygon",
        "id": 40127,
        "arcs": [[-6803, 7151, 7152, -7148, -6843, -6941]]
      }, {
        "type": "Polygon",
        "id": 5107,
        "arcs": [[-7048, 7153, 7154, 7155, 7156, -6964, -7038]]
      }, {
        "type": "Polygon",
        "id": 40099,
        "arcs": [[-7022, 7157, 7158, -7064]]
      }, {
        "type": "Polygon",
        "id": 40141,
        "arcs": [[-7063, 7159, 7160, 7161, -7055, -6913]]
      }, {
        "type": "Polygon",
        "id": 13129,
        "arcs": [[-7069, 7162, 7163, 7164, -7016, -7006, -6999]]
      }, {
        "type": "Polygon",
        "id": 45033,
        "arcs": [[7165, 7166, 7167, -7085, -7028]]
      }, {
        "type": "Polygon",
        "id": 13085,
        "arcs": [[-7131, 7168, 7169, 7170, 7171, -7067, -7004]]
      }, {
        "type": "Polygon",
        "id": 45055,
        "arcs": [[7172, 7173, 7174, 7175, 7176, -6938, -7083]]
      }, {
        "type": "Polygon",
        "id": 35041,
        "arcs": [[-7032, 7177, 7178, 7179, 7180, -7097, -6586]]
      }, {
        "type": "Polygon",
        "id": 28145,
        "arcs": [[-7108, 7181, 7182, 7183, -6986, -6984, -6979]]
      }, {
        "type": "Polygon",
        "id": 1095,
        "arcs": [[-7052, 7184, 7185, 7186, -7141, -6993, -6996]]
      }, {
        "type": "Polygon",
        "id": 13055,
        "arcs": [[7187, 7188, -7049, -7018]]
      }, {
        "type": "Polygon",
        "id": 13115,
        "arcs": [[-7165, 7189, 7190, 7191, -7188, -7017]]
      }, {
        "type": "Polygon",
        "id": 35053,
        "arcs": [[-6949, 7192, 7193, 7194, -6824, -7024]]
      }, {
        "type": "Polygon",
        "id": 35003,
        "arcs": [[-7195, 7195, 7196, 7197, -5797, -6825]]
      }, {
        "type": "Polygon",
        "id": 1059,
        "arcs": [[-7091, 7198, 7199, 7200, -6974, -7040]]
      }, {
        "type": "Polygon",
        "id": 48197,
        "arcs": [[-7057, 7201, 7202, 7203, -7122, -6954]]
      }, {
        "type": "Polygon",
        "id": 45039,
        "arcs": [[-6939, -7177, 7204, 7205, -7034, -7078]]
      }, {
        "type": "Polygon",
        "id": 5001,
        "arcs": [[-6965, -7157, 7206, 7207, 7208, -6934, -6930]]
      }, {
        "type": "Polygon",
        "id": 13227,
        "arcs": [[-7172, 7209, -7163, -7068]]
      }, {
        "type": "Polygon",
        "id": 28071,
        "arcs": [[-7184, 7210, 7211, 7212, 7213, -7100, -6987]]
      }, {
        "type": "Polygon",
        "id": 28107,
        "arcs": [[-7214, 7214, 7215, 7216, -7045, -7101]]
      }, {
        "type": "Polygon",
        "id": 13119,
        "arcs": [[7217, 7218, 7219, -7143, -6944]]
      }, {
        "type": "Polygon",
        "id": 45031,
        "arcs": [[-7087, 7220, 7221, -7173, -7082]]
      }, {
        "type": "Polygon",
        "id": 45071,
        "arcs": [[-7206, 7222, 7223, 7224, 7225, -7094, -7035]]
      }, {
        "type": "Polygon",
        "id": 1019,
        "arcs": [[-7192, 7226, 7227, 7228, 7229, -7050, -7189]]
      }, {
        "type": "Polygon",
        "id": 28027,
        "arcs": [[7230, 7231, 7232, -7154, -7047, 7233]]
      }, {
        "type": "Polygon",
        "id": 28119,
        "arcs": [[-7217, 7234, -7234, -7046]]
      }, {
        "type": "Polygon",
        "id": 13139,
        "arcs": [[-7072, 7235, 7236, 7237, 7238, -7169, -7130, -7092]]
      }, {
        "type": "Polygon",
        "id": 28081,
        "arcs": [[7239, 7240, 7241, 7242, -7182, -7107]]
      }, {
        "type": "Polygon",
        "id": 40019,
        "arcs": [[-7159, 7243, 7244, 7245, 7246, -7145, -7065]]
      }, {
        "type": "Polygon",
        "id": 40069,
        "arcs": [[-7021, -7105, -7151, 7247, 7248, -7244, -7158]]
      }, {
        "type": "Polygon",
        "id": 40033,
        "arcs": [[-7147, 7249, 7250, 7251, -7160, -7062]]
      }, {
        "type": "Polygon",
        "id": 40089,
        "arcs": [[-7140, 7252, 7253, 7254, 7255, 7256, -7152, -6802]]
      }, {
        "type": "Polygon",
        "id": 5059,
        "arcs": [[-7059, 7257, 7258, 7259, -7124, -7102]]
      }, {
        "type": "Polygon",
        "id": 4007,
        "arcs": [[-5749, 7260, 7261, 7262, -6693, -5751]]
      }, {
        "type": "Polygon",
        "id": 13147,
        "arcs": [[-7081, 7263, 7264, -7218, -6943]]
      }, {
        "type": "Polygon",
        "id": 5053,
        "arcs": [[-6957, 7265, 7266, 7267, -7258, -7058]]
      }, {
        "type": "Polygon",
        "id": 5069,
        "arcs": [[-6935, -7209, 7268, 7269, -7266, -6956]]
      }, {
        "type": "Polygon",
        "id": 13011,
        "arcs": [[7270, 7271, -7236, -7071, -7144, -7220]]
      }, {
        "type": "Polygon",
        "id": 37047,
        "arcs": [[-7137, 7272, 7273, -7026, -7054]]
      }, {
        "type": "Polygon",
        "id": 45001,
        "arcs": [[7274, 7275, 7276, -7079, -7096]]
      }, {
        "type": "Polygon",
        "id": 28057,
        "arcs": [[-6975, -7201, 7277, 7278, -7240, -7106]]
      }, {
        "type": "Polygon",
        "id": 48487,
        "arcs": [[-7162, 7279, 7280, 7281, -7202, -7056]]
      }, {
        "type": "Polygon",
        "id": 13015,
        "arcs": [[7282, 7283, 7284, -7190, -7164, 7285]]
      }, {
        "type": "Polygon",
        "id": 13057,
        "arcs": [[-7171, 7286, 7287, 7288, -7286, -7210]]
      }, {
        "type": "Polygon",
        "id": 45047,
        "arcs": [[-7226, 7289, 7290, 7291, -7275, -7095]]
      }, {
        "type": "MultiPolygon",
        "id": 37129,
        "arcs": [[[7292, 7293]], [[7294, -7132, 7295, 7296, -7135]]]
      }, {
        "type": "Polygon",
        "id": 28115,
        "arcs": [[-7243, 7297, 7298, -7211, -7183]]
      }, {
        "type": "Polygon",
        "id": 45061,
        "arcs": [[7299, 7300, -7174, -7222]]
      }, {
        "type": "MultiPolygon",
        "id": 37019,
        "arcs": [[[7301, 7302]], [[-7293, 7303]], [[-7297, 7304, 7305, 7306, 7307, -7273, -7136]]]
      }, {
        "type": "Polygon",
        "id": 5061,
        "arcs": [[7308, 7309, 7310, 7311, -7138]]
      }, {
        "type": "Polygon",
        "id": 5109,
        "arcs": [[7312, 7313, 7314, -7309, -7126]]
      }, {
        "type": "Polygon",
        "id": 35027,
        "arcs": [[-7099, 7315, 7316, 7317, -7193, -6948, -6865]]
      }, {
        "type": "Polygon",
        "id": 5019,
        "arcs": [[-7260, 7318, 7319, 7320, -7313, -7125]]
      }, {
        "type": "Polygon",
        "id": 13117,
        "arcs": [[-7239, 7321, 7322, -7287, -7170]]
      }, {
        "type": "Polygon",
        "id": 1093,
        "arcs": [[7323, 7324, 7325, 7326, 7327, -7278, -7200]]
      }, {
        "type": "Polygon",
        "id": 4012,
        "arcs": [[-6695, 7328, 7329, 7330, 7331, -6550, 7332]]
      }, {
        "type": "Polygon",
        "id": 48345,
        "arcs": [[7333, 7334, 7335, -7114, -7121]]
      }, {
        "type": "Polygon",
        "id": 48101,
        "arcs": [[-7123, -7204, 7336, 7337, -7334, -7120]]
      }, {
        "type": "Polygon",
        "id": 1043,
        "arcs": [[-7187, 7338, 7339, 7340, -7089, -7142]]
      }, {
        "type": "Polygon",
        "id": 48153,
        "arcs": [[-7336, 7341, 7342, -7110, -7115]]
      }, {
        "type": "Polygon",
        "id": 48189,
        "arcs": [[-7116, -7111, -7343, 7343, 7344]]
      }, {
        "type": "Polygon",
        "id": 48279,
        "arcs": [[-7345, 7345, 7346, -7128, -7117]]
      }, {
        "type": "Polygon",
        "id": 45041,
        "arcs": [[7347, 7348, 7349, 7350, -7300, -7221, -7086, -7168]]
      }, {
        "type": "Polygon",
        "id": 48017,
        "arcs": [[-7347, 7351, -7178, -7031, -7129]]
      }, {
        "type": "Polygon",
        "id": 1133,
        "arcs": [[-7090, -7341, 7352, -7324, -7199]]
      }, {
        "type": "MultiPolygon",
        "id": 45051,
        "arcs": [[[-7302, 7353]], [[-7306, 7354]], [[-7274, -7308, 7355, 7356, 7357, -7166, -7027]]]
      }, {
        "type": "Polygon",
        "id": 45067,
        "arcs": [[-7358, 7358, 7359, -7348, -7167]]
      }, {
        "type": "Polygon",
        "id": 13157,
        "arcs": [[7360, 7361, 7362, -7237, -7272]]
      }, {
        "type": "Polygon",
        "id": 40067,
        "arcs": [[-7247, 7363, 7364, 7365, -7250, -7146]]
      }, {
        "type": "Polygon",
        "id": 13105,
        "arcs": [[-7277, 7366, 7367, 7368, 7369, 7370, -7264, -7080]]
      }, {
        "type": "Polygon",
        "id": 13195,
        "arcs": [[-7371, 7371, 7372, -7361, -7271, -7219, -7265]]
      }, {
        "type": "Polygon",
        "id": 45079,
        "arcs": [[7373, 7374, 7375, -7223, -7205, -7176]]
      }, {
        "type": "Polygon",
        "id": 1009,
        "arcs": [[-7186, 7376, 7377, 7378, 7379, -7339]]
      }, {
        "type": "Polygon",
        "id": 48155,
        "arcs": [[-7203, -7282, 7380, 7381, 7382, -7337]]
      }, {
        "type": "Polygon",
        "id": 48485,
        "arcs": [[-7252, 7383, 7384, -7280, -7161]]
      }, {
        "type": "Polygon",
        "id": 1055,
        "arcs": [[-7230, 7385, 7386, -7377, -7185, -7051]]
      }, {
        "type": "Polygon",
        "id": 45063,
        "arcs": [[7387, 7388, 7389, 7390, -7224, -7376]]
      }, {
        "type": "Polygon",
        "id": 28161,
        "arcs": [[7391, 7392, 7393, -7215, -7213]]
      }, {
        "type": "Polygon",
        "id": 5133,
        "arcs": [[7394, -7253, -7139, -7312]]
      }, {
        "type": "Polygon",
        "id": 45081,
        "arcs": [[-7391, 7395, 7396, -7290, -7225]]
      }, {
        "type": "Polygon",
        "id": 13121,
        "arcs": [[-7323, 7397, 7398, 7399, 7400, 7401, 7402, 7403, 7404, -7288]]
      }, {
        "type": "Polygon",
        "id": 40095,
        "arcs": [[7405, 7406, 7407, -7245, -7249]]
      }, {
        "type": "Polygon",
        "id": 5079,
        "arcs": [[-7208, 7408, 7409, 7410, -7269]]
      }, {
        "type": "Polygon",
        "id": 45085,
        "arcs": [[-7351, 7411, 7412, -7374, -7175, -7301]]
      }, {
        "type": "Polygon",
        "id": 13135,
        "arcs": [[7413, 7414, 7415, 7416, -7398, -7322, -7238]]
      }, {
        "type": "Polygon",
        "id": 28135,
        "arcs": [[-7394, 7417, 7418, 7419, -7231, -7235, -7216]]
      }, {
        "type": "Polygon",
        "id": 28013,
        "arcs": [[-7299, 7420, 7421, 7422, -7392, -7212]]
      }, {
        "type": "Polygon",
        "id": 40013,
        "arcs": [[7423, 7424, 7425, 7426, -7406, -7248, -7150]]
      }, {
        "type": "Polygon",
        "id": 40023,
        "arcs": [[-7257, 7427, 7428, -7424, -7149, -7153]]
      }, {
        "type": "Polygon",
        "id": 5039,
        "arcs": [[-7268, 7429, 7430, 7431, -7319, -7259]]
      }, {
        "type": "Polygon",
        "id": 48077,
        "arcs": [[-7366, 7432, 7433, 7434, -7384, -7251]]
      }, {
        "type": "Polygon",
        "id": 13013,
        "arcs": [[7435, 7436, -7414, -7363]]
      }, {
        "type": "Polygon",
        "id": 28011,
        "arcs": [[7437, 7438, 7439, 7440, -7155, -7233]]
      }, {
        "type": "Polygon",
        "id": 5041,
        "arcs": [[-7441, 7441, 7442, -7409, -7207, -7156]]
      }, {
        "type": "Polygon",
        "id": 13233,
        "arcs": [[-7285, 7443, 7444, 7445, -7227, -7191]]
      }, {
        "type": "Polygon",
        "id": 28095,
        "arcs": [[-7279, -7328, 7446, 7447, 7448, 7449, -7241]]
      }, {
        "type": "Polygon",
        "id": 35005,
        "arcs": [[-7181, 7450, 7451, 7452, -7316, -7098]]
      }, {
        "type": "Polygon",
        "id": 13067,
        "arcs": [[-7405, 7453, 7454, -7283, -7289]]
      }, {
        "type": "Polygon",
        "id": 6065,
        "arcs": [[7455, 7456, 7457, -6551, -7332]]
      }, {
        "type": "Polygon",
        "id": 13223,
        "arcs": [[-7455, 7458, 7459, 7460, -7444, -7284]]
      }, {
        "type": "Polygon",
        "id": 45065,
        "arcs": [[-7292, 7461, 7462, 7463, -7367, -7276]]
      }, {
        "type": "Polygon",
        "id": 28017,
        "arcs": [[-7242, -7450, 7464, 7465, -7421, -7298]]
      }, {
        "type": "Polygon",
        "id": 40085,
        "arcs": [[-7408, 7466, 7467, 7468, -7364, -7246]]
      }, {
        "type": "Polygon",
        "id": 5025,
        "arcs": [[-7411, 7469, 7470, 7471, -7430, -7267, -7270]]
      }, {
        "type": "Polygon",
        "id": 1075,
        "arcs": [[7472, 7473, 7474, -7447, -7327]]
      }, {
        "type": "Polygon",
        "id": 13221,
        "arcs": [[-7370, 7475, 7476, 7477, 7478, 7479, -7372]]
      }, {
        "type": "Polygon",
        "id": 4013,
        "arcs": [[-7263, 7480, 7481, 7482, -7329, -6694]]
      }, {
        "type": "Polygon",
        "id": 13059,
        "arcs": [[-7480, 7483, -7362, -7373]]
      }, {
        "type": "Polygon",
        "id": 5057,
        "arcs": [[7484, 7485, 7486, 7487, -7310, -7315]]
      }, {
        "type": "Polygon",
        "id": 1127,
        "arcs": [[-7340, -7380, 7488, 7489, 7490, -7325, -7353]]
      }, {
        "type": "Polygon",
        "id": 13317,
        "arcs": [[7491, 7492, 7493, 7494, -7476, -7369]]
      }, {
        "type": "Polygon",
        "id": 48337,
        "arcs": [[-7469, 7495, 7496, 7497, -7433, -7365]]
      }, {
        "type": "Polygon",
        "id": 1115,
        "arcs": [[7498, 7499, 7500, 7501, -7378, -7387]]
      }, {
        "type": "Polygon",
        "id": 28133,
        "arcs": [[-7420, 7502, 7503, 7504, -7438, -7232]]
      }, {
        "type": "Polygon",
        "id": 13181,
        "arcs": [[-7464, 7505, 7506, -7492, -7368]]
      }, {
        "type": "Polygon",
        "id": 45037,
        "arcs": [[7507, 7508, 7509, -7462, -7291, -7397]]
      }, {
        "type": "Polygon",
        "id": 13089,
        "arcs": [[-7417, 7510, 7511, 7512, -7399]]
      }, {
        "type": "Polygon",
        "id": 1015,
        "arcs": [[7513, -7499, -7386, -7229, 7514]]
      }, {
        "type": "Polygon",
        "id": 13219,
        "arcs": [[-7479, 7515, 7516, 7517, -7436, -7484]]
      }, {
        "type": "Polygon",
        "id": 1029,
        "arcs": [[-7446, 7518, 7519, 7520, 7521, 7522, -7515, -7228]]
      }, {
        "type": "Polygon",
        "id": 48387,
        "arcs": [[-7256, 7523, 7524, 7525, 7526, 7527, 7528, -7428]]
      }, {
        "type": "Polygon",
        "id": 5099,
        "arcs": [[-7321, 7529, 7530, 7531, -7485, -7314]]
      }, {
        "type": "Polygon",
        "id": 48181,
        "arcs": [[-7427, 7532, 7533, 7534, 7535, -7467, -7407]]
      }, {
        "type": "Polygon",
        "id": 48097,
        "arcs": [[-7536, 7536, 7537, -7496, -7468]]
      }, {
        "type": "Polygon",
        "id": 5081,
        "arcs": [[-7311, -7488, 7538, 7539, -7254, -7395]]
      }, {
        "type": "Polygon",
        "id": 45027,
        "arcs": [[7540, 7541, 7542, 7543, -7412, -7350]]
      }, {
        "type": "MultiPolygon",
        "id": 6059,
        "arcs": [[[-6552, -7458, 7544, 7545, -7076]]]
      }, {
        "type": "Polygon",
        "id": 48277,
        "arcs": [[-7529, 7546, 7547, -7425, -7429]]
      }, {
        "type": "Polygon",
        "id": 13297,
        "arcs": [[-7518, 7548, 7549, 7550, -7415, -7437]]
      }, {
        "type": "Polygon",
        "id": 1057,
        "arcs": [[-7491, 7551, 7552, -7473, -7326]]
      }, {
        "type": "Polygon",
        "id": 13143,
        "arcs": [[7553, -7519, -7445, -7461]]
      }, {
        "type": "Polygon",
        "id": 28043,
        "arcs": [[-7423, 7554, 7555, 7556, 7557, -7418, -7393]]
      }, {
        "type": "Polygon",
        "id": 45089,
        "arcs": [[-7360, 7558, 7559, -7541, -7349]]
      }, {
        "type": "Polygon",
        "id": 48147,
        "arcs": [[-7548, 7560, 7561, 7562, -7533, -7426]]
      }, {
        "type": "Polygon",
        "id": 45017,
        "arcs": [[-7413, -7544, 7563, -7388, -7375]]
      }, {
        "type": "Polygon",
        "id": 45003,
        "arcs": [[7564, 7565, 7566, 7567, -7508, -7396, -7390]]
      }, {
        "type": "Polygon",
        "id": 1073,
        "arcs": [[-7502, 7568, 7569, 7570, -7489, -7379]]
      }, {
        "type": "Polygon",
        "id": 48269,
        "arcs": [[-7383, 7571, 7572, 7573, -7338]]
      }, {
        "type": "Polygon",
        "id": 48275,
        "arcs": [[7574, 7575, -7572, -7382]]
      }, {
        "type": "Polygon",
        "id": 48009,
        "arcs": [[-7435, 7576, 7577, 7578, -7385]]
      }, {
        "type": "Polygon",
        "id": 48125,
        "arcs": [[-7574, 7579, 7580, -7335]]
      }, {
        "type": "Polygon",
        "id": 48107,
        "arcs": [[-7581, 7581, 7582, -7342]]
      }, {
        "type": "Polygon",
        "id": 48023,
        "arcs": [[-7579, 7583, -7575, -7381, -7281]]
      }, {
        "type": "Polygon",
        "id": 48303,
        "arcs": [[-7583, 7584, 7585, -7344]]
      }, {
        "type": "Polygon",
        "id": 48079,
        "arcs": [[7586, 7587, 7588, -7179, -7352]]
      }, {
        "type": "Polygon",
        "id": 48219,
        "arcs": [[-7586, 7589, -7587, -7346]]
      }, {
        "type": "Polygon",
        "id": 5103,
        "arcs": [[-7432, 7590, 7591, 7592, -7530, -7320]]
      }, {
        "type": "Polygon",
        "id": 13211,
        "arcs": [[7593, 7594, 7595, 7596, -7549, -7517]]
      }, {
        "type": "Polygon",
        "id": 13045,
        "arcs": [[-7403, 7597, 7598, 7599, -7520, -7554, -7460, 7600]]
      }, {
        "type": "Polygon",
        "id": 28083,
        "arcs": [[-7558, 7601, 7602, 7603, -7503, -7419]]
      }, {
        "type": "Polygon",
        "id": 28025,
        "arcs": [[-7449, 7604, 7605, 7606, -7465]]
      }, {
        "type": "Polygon",
        "id": 13097,
        "arcs": [[-7404, -7601, -7459, -7454]]
      }, {
        "type": "Polygon",
        "id": 5013,
        "arcs": [[7607, 7608, -7591, -7431, -7472]]
      }, {
        "type": "Polygon",
        "id": 5043,
        "arcs": [[-7443, 7609, 7610, 7611, -7470, -7410]]
      }, {
        "type": "Polygon",
        "id": 13247,
        "arcs": [[7612, -7511, -7416, -7551, 7613]]
      }, {
        "type": "MultiPolygon",
        "id": 45043,
        "arcs": [[[7614, 7615]], [[-7357, 7616, 7617, 7618, -7559, -7359]]]
      }, {
        "type": "Polygon",
        "id": 4011,
        "arcs": [[-7198, 7619, 7620, 7621, 7622, -5798]]
      }, {
        "type": "Polygon",
        "id": 13133,
        "arcs": [[7623, 7624, 7625, -7594, -7516, -7478]]
      }, {
        "type": "Polygon",
        "id": 28087,
        "arcs": [[-7475, 7626, 7627, 7628, -7605, -7448]]
      }, {
        "type": "Polygon",
        "id": 13217,
        "arcs": [[-7597, 7629, 7630, 7631, -7614, -7550]]
      }, {
        "type": "Polygon",
        "id": 28155,
        "arcs": [[-7607, 7632, 7633, 7634, -7555, -7422, -7466]]
      }, {
        "type": "Polygon",
        "id": 13265,
        "arcs": [[7635, 7636, -7624, -7477, -7495]]
      }, {
        "type": "Polygon",
        "id": 48037,
        "arcs": [[-7540, 7637, 7638, 7639, -7524, -7255]]
      }, {
        "type": "Polygon",
        "id": 45075,
        "arcs": [[-7543, 7640, 7641, 7642, 7643, 7644, -7565, -7389, -7564]]
      }, {
        "type": "Polygon",
        "id": 5011,
        "arcs": [[-7612, 7645, 7646, -7608, -7471]]
      }, {
        "type": "Polygon",
        "id": 13073,
        "arcs": [[-7463, -7510, 7647, 7648, -7506]]
      }, {
        "type": "Polygon",
        "id": 1121,
        "arcs": [[-7514, -7523, 7649, 7650, 7651, -7500]]
      }, {
        "type": "Polygon",
        "id": 28097,
        "arcs": [[-7635, 7652, 7653, 7654, -7556]]
      }, {
        "type": "Polygon",
        "id": 28015,
        "arcs": [[-7655, 7655, 7656, -7602, -7557]]
      }, {
        "type": "Polygon",
        "id": 13189,
        "arcs": [[-7507, -7649, 7657, 7658, 7659, -7493]]
      }, {
        "type": "Polygon",
        "id": 4009,
        "arcs": [[-7623, 7660, 7661, 7662, -7261, -5748, -5799]]
      }, {
        "type": "Polygon",
        "id": 13063,
        "arcs": [[-7513, 7663, 7664, 7665, -7400]]
      }, {
        "type": "Polygon",
        "id": 13151,
        "arcs": [[-7613, -7632, 7666, 7667, -7664, -7512]]
      }, {
        "type": "Polygon",
        "id": 5091,
        "arcs": [[7668, 7669, 7670, 7671, -7638, -7539, -7487]]
      }, {
        "type": "Polygon",
        "id": 13301,
        "arcs": [[7672, 7673, 7674, -7636, -7494, -7660]]
      }, {
        "type": "Polygon",
        "id": 1125,
        "arcs": [[-7490, -7571, 7675, 7676, 7677, 7678, -7552]]
      }, {
        "type": "Polygon",
        "id": 35025,
        "arcs": [[-7589, 7679, 7680, 7681, 7682, 7683, 7684, -7451, -7180]]
      }, {
        "type": "Polygon",
        "id": 28105,
        "arcs": [[-7629, 7685, 7686, 7687, -7633, -7606]]
      }, {
        "type": "Polygon",
        "id": 5017,
        "arcs": [[-7440, 7688, 7689, 7690, 7691, 7692, 7693, -7610, -7442]]
      }, {
        "type": "Polygon",
        "id": 13113,
        "arcs": [[7694, 7695, -7401, -7666]]
      }, {
        "type": "Polygon",
        "id": 1117,
        "arcs": [[-7652, 7696, 7697, 7698, -7569, -7501]]
      }, {
        "type": "Polygon",
        "id": 13245,
        "arcs": [[7699, 7700, -7658, -7648, -7509, -7568]]
      }, {
        "type": "Polygon",
        "id": 1107,
        "arcs": [[-7553, -7679, 7701, 7702, 7703, -7627, -7474]]
      }, {
        "type": "Polygon",
        "id": 28019,
        "arcs": [[-7688, 7704, 7705, -7653, -7634]]
      }, {
        "type": "Polygon",
        "id": 28151,
        "arcs": [[-7505, 7706, 7707, 7708, -7689, -7439]]
      }, {
        "type": "Polygon",
        "id": 13159,
        "arcs": [[7709, 7710, 7711, 7712, -7630, -7596]]
      }, {
        "type": "Polygon",
        "id": 13077,
        "arcs": [[-7696, 7713, 7714, 7715, 7716, -7598, -7402]]
      }, {
        "type": "Polygon",
        "id": 45015,
        "arcs": [[-7619, 7717, 7718, 7719, 7720, -7641, -7542, -7560]]
      }, {
        "type": "MultiPolygon",
        "id": 6073,
        "arcs": [[[7721, 7722, -7545, -7457]]]
      }, {
        "type": "Polygon",
        "id": 1111,
        "arcs": [[-7600, 7723, 7724, 7725, 7726, 7727, -7521]]
      }, {
        "type": "Polygon",
        "id": 1027,
        "arcs": [[-7728, 7728, 7729, -7650, -7522]]
      }, {
        "type": "Polygon",
        "id": 48119,
        "arcs": [[-7528, 7730, 7731, 7732, -7561, -7547]]
      }, {
        "type": "Polygon",
        "id": 45011,
        "arcs": [[7733, 7734, 7735, -7566, -7645]]
      }, {
        "type": "Polygon",
        "id": 13237,
        "arcs": [[7736, 7737, 7738, -7710, -7595, -7626]]
      }, {
        "type": "Polygon",
        "id": 35051,
        "arcs": [[-7318, 7739, 7740, 7741, 7742, -7196, -7194]]
      }, {
        "type": "Polygon",
        "id": 5073,
        "arcs": [[-7532, 7743, 7744, 7745, -7669, -7486]]
      }, {
        "type": "Polygon",
        "id": 13141,
        "arcs": [[-7675, 7746, 7747, 7748, -7737, -7625, -7637]]
      }, {
        "type": "Polygon",
        "id": 4027,
        "arcs": [[-7483, 7749, 7750, 7751, -7330]]
      }, {
        "type": "Polygon",
        "id": 4021,
        "arcs": [[-7262, -7663, 7752, -7481]]
      }, {
        "type": "Polygon",
        "id": 48237,
        "arcs": [[-7498, 7753, 7754, 7755, 7756, -7577, -7434]]
      }, {
        "type": "Polygon",
        "id": 5027,
        "arcs": [[-7593, 7757, 7758, 7759, -7744, -7531]]
      }, {
        "type": "Polygon",
        "id": 13035,
        "arcs": [[-7713, 7760, 7761, 7762, -7667, -7631]]
      }, {
        "type": "Polygon",
        "id": 45009,
        "arcs": [[7763, 7764, -7734, -7644]]
      }, {
        "type": "Polygon",
        "id": 6025,
        "arcs": [[-7752, 7765, -7722, -7456, -7331]]
      }, {
        "type": "Polygon",
        "id": 48497,
        "arcs": [[-7538, 7766, 7767, 7768, -7754, -7497]]
      }, {
        "type": "Polygon",
        "id": 48121,
        "arcs": [[7769, 7770, 7771, -7767, -7537, -7535]]
      }, {
        "type": "Polygon",
        "id": 13149,
        "arcs": [[-7717, 7772, -7724, -7599]]
      }, {
        "type": "Polygon",
        "id": 48231,
        "arcs": [[7773, 7774, 7775, 7776, 7777, -7562, -7733, 7778]]
      }, {
        "type": "Polygon",
        "id": 48085,
        "arcs": [[-7563, -7778, 7779, 7780, -7770, -7534]]
      }, {
        "type": "Polygon",
        "id": 48263,
        "arcs": [[7781, 7782, 7783, 7784, -7580]]
      }, {
        "type": "Polygon",
        "id": 48433,
        "arcs": [[7785, 7786, 7787, -7782, -7573]]
      }, {
        "type": "Polygon",
        "id": 48449,
        "arcs": [[7788, 7789, 7790, -7526]]
      }, {
        "type": "Polygon",
        "id": 48169,
        "arcs": [[-7785, 7791, 7792, 7793, -7582]]
      }, {
        "type": "Polygon",
        "id": 48447,
        "arcs": [[7794, 7795, 7796, 7797, -7584]]
      }, {
        "type": "Polygon",
        "id": 48503,
        "arcs": [[-7757, 7798, 7799, -7795, -7578]]
      }, {
        "type": "Polygon",
        "id": 48207,
        "arcs": [[-7798, 7800, 7801, -7786, -7576]]
      }, {
        "type": "Polygon",
        "id": 5003,
        "arcs": [[-7694, 7802, 7803, -7646, -7611]]
      }, {
        "type": "Polygon",
        "id": 48305,
        "arcs": [[-7794, 7804, 7805, 7806, -7585]]
      }, {
        "type": "Polygon",
        "id": 35035,
        "arcs": [[-7453, 7807, 7808, 7809, 7810, 7811, -7740, -7317]]
      }, {
        "type": "Polygon",
        "id": 48501,
        "arcs": [[7812, 7813, -7680, -7588]]
      }, {
        "type": "Polygon",
        "id": 48445,
        "arcs": [[-7807, 7814, 7815, -7813, -7590]]
      }, {
        "type": "Polygon",
        "id": 48159,
        "arcs": [[-7791, 7816, 7817, 7818, -7731, -7527]]
      }, {
        "type": "Polygon",
        "id": 5139,
        "arcs": [[-7609, -7647, -7804, 7819, 7820, -7758, -7592]]
      }, {
        "type": "Polygon",
        "id": 48223,
        "arcs": [[-7819, 7821, 7822, -7779, -7732]]
      }, {
        "type": "Polygon",
        "id": 48343,
        "arcs": [[-7640, 7823, 7824, 7825, 7826, -7789, -7525]]
      }, {
        "type": "Polygon",
        "id": 28051,
        "arcs": [[-7657, 7827, 7828, 7829, -7603]]
      }, {
        "type": "Polygon",
        "id": 13255,
        "arcs": [[-7763, 7830, 7831, 7832, -7714, -7695, -7665, -7668]]
      }, {
        "type": "Polygon",
        "id": 45035,
        "arcs": [[-7721, 7833, 7834, -7642]]
      }, {
        "type": "Polygon",
        "id": 28053,
        "arcs": [[-7604, -7830, 7835, 7836, -7707, -7504]]
      }, {
        "type": "Polygon",
        "id": 13125,
        "arcs": [[7837, 7838, -7747, -7674]]
      }, {
        "type": "Polygon",
        "id": 13163,
        "arcs": [[7839, 7840, 7841, 7842, -7838, -7673, -7659, -7701]]
      }, {
        "type": "Polygon",
        "id": 48067,
        "arcs": [[-7672, 7843, 7844, -7824, -7639]]
      }, {
        "type": "Polygon",
        "id": 13033,
        "arcs": [[-7567, -7736, 7845, 7846, 7847, 7848, -7840, -7700]]
      }, {
        "type": "Polygon",
        "id": 28103,
        "arcs": [[-7704, 7849, 7850, 7851, -7686, -7628]]
      }, {
        "type": "Polygon",
        "id": 28159,
        "arcs": [[-7852, 7852, 7853, 7854, -7705, -7687]]
      }, {
        "type": "Polygon",
        "id": 28007,
        "arcs": [[-7855, 7855, 7856, -7828, -7656, -7654, -7706]]
      }, {
        "type": "Polygon",
        "id": 1007,
        "arcs": [[7857, 7858, 7859, -7676, -7570, -7699]]
      }, {
        "type": "Polygon",
        "id": 13303,
        "arcs": [[-7839, -7843, 7860, 7861, 7862, -7748]]
      }, {
        "type": "Polygon",
        "id": 13199,
        "arcs": [[-7833, 7863, 7864, 7865, 7866, 7867, -7715]]
      }, {
        "type": "Polygon",
        "id": 13285,
        "arcs": [[-7868, 7868, 7869, -7725, -7773, -7716]]
      }, {
        "type": "Polygon",
        "id": 35017,
        "arcs": [[-7743, 7870, 7871, -7620, -7197]]
      }, {
        "type": "Polygon",
        "id": 13231,
        "arcs": [[7872, 7873, -7864, -7832]]
      }, {
        "type": "Polygon",
        "id": 13171,
        "arcs": [[7874, 7875, -7873, -7831, -7762]]
      }, {
        "type": "Polygon",
        "id": 13207,
        "arcs": [[-7712, 7876, 7877, 7878, 7879, -7875, -7761]]
      }, {
        "type": "Polygon",
        "id": 13009,
        "arcs": [[-7749, -7863, 7880, 7881, -7738]]
      }, {
        "type": "Polygon",
        "id": 13169,
        "arcs": [[-7882, 7882, 7883, 7884, -7877, -7711, -7739]]
      }, {
        "type": "MultiPolygon",
        "id": 45029,
        "arcs": [[[7885, 7886]], [[-7835, 7887, 7888, 7889, 7890, -7764, -7643]]]
      }, {
        "type": "Polygon",
        "id": 45005,
        "arcs": [[-7765, 7891, 7892, -7846, -7735]]
      }, {
        "type": "Polygon",
        "id": 1063,
        "arcs": [[7893, 7894, 7895, -7702, -7678]]
      }, {
        "type": "Polygon",
        "id": 1017,
        "arcs": [[-7870, 7896, 7897, 7898, -7726]]
      }, {
        "type": "Polygon",
        "id": 1123,
        "arcs": [[-7899, 7899, 7900, 7901, 7902, -7729, -7727]]
      }, {
        "type": "Polygon",
        "id": 1037,
        "arcs": [[-7903, 7903, 7904, -7697, -7651, -7730]]
      }, {
        "type": "Polygon",
        "id": 28125,
        "arcs": [[-7837, 7905, 7906, -7708]]
      }, {
        "type": "Polygon",
        "id": 48063,
        "arcs": [[-7827, 7907, 7908, -7817, -7790]]
      }, {
        "type": "Polygon",
        "id": 1021,
        "arcs": [[-7905, 7909, 7910, 7911, 7912, -7858, -7698]]
      }, {
        "type": "Polygon",
        "id": 35013,
        "arcs": [[7913, 7914, 7915, -7741, -7812]]
      }, {
        "type": "Polygon",
        "id": 13251,
        "arcs": [[7916, 7917, 7918, 7919, -7847, -7893]]
      }, {
        "type": "Polygon",
        "id": 45049,
        "arcs": [[7920, 7921, 7922, -7917, -7892, -7891]]
      }, {
        "type": "Polygon",
        "id": 28163,
        "arcs": [[7923, 7924, 7925, 7926, -7906, -7836, -7829]]
      }, {
        "type": "Polygon",
        "id": 22017,
        "arcs": [[7927, 7928, 7929, 7930, 7931, -7844, -7671, 7932]]
      }, {
        "type": "Polygon",
        "id": 22015,
        "arcs": [[7933, 7934, 7935, -7933, -7670, -7746]]
      }, {
        "type": "Polygon",
        "id": 22119,
        "arcs": [[7936, -7934, -7745, -7760, 7937]]
      }, {
        "type": "Polygon",
        "id": 22027,
        "arcs": [[7938, 7939, -7938, -7759, -7821, 7940]]
      }, {
        "type": "Polygon",
        "id": 22111,
        "arcs": [[7941, 7942, -7941, -7820, 7943]]
      }, {
        "type": "Polygon",
        "id": 48499,
        "arcs": [[7944, 7945, 7946, 7947, -7822, -7818, -7909]]
      }, {
        "type": "Polygon",
        "id": 28055,
        "arcs": [[-7907, -7927, 7948, 7949, -7690, -7709]]
      }, {
        "type": "Polygon",
        "id": 13319,
        "arcs": [[-7862, 7950, 7951, 7952, -7883, -7881]]
      }, {
        "type": "Polygon",
        "id": 22067,
        "arcs": [[-7693, 7953, 7954, 7955, -7944, -7803]]
      }, {
        "type": "Polygon",
        "id": 1065,
        "arcs": [[-7860, 7956, 7957, -7894, -7677]]
      }, {
        "type": "Polygon",
        "id": 22123,
        "arcs": [[7958, 7959, -7954, -7692]]
      }, {
        "type": "Polygon",
        "id": 48363,
        "arcs": [[7960, 7961, 7962, 7963, 7964, -7799, -7756]]
      }, {
        "type": "Polygon",
        "id": 22035,
        "arcs": [[7965, 7966, 7967, -7959, -7691, -7950]]
      }, {
        "type": "Polygon",
        "id": 48367,
        "arcs": [[7968, 7969, 7970, -7961, -7755, -7769]]
      }, {
        "type": "Polygon",
        "id": 13293,
        "arcs": [[-7876, -7880, 7971, 7972, 7973, -7865, -7874]]
      }, {
        "type": "Polygon",
        "id": 1119,
        "arcs": [[7974, 7975, 7976, 7977, -7850, -7703, -7896]]
      }, {
        "type": "Polygon",
        "id": 48439,
        "arcs": [[-7768, -7772, 7978, 7979, 7980, -7969]]
      }, {
        "type": "Polygon",
        "id": 48113,
        "arcs": [[-7781, 7981, 7982, 7983, -7979, -7771]]
      }, {
        "type": "Polygon",
        "id": 48397,
        "arcs": [[-7777, 7984, -7982, -7780]]
      }, {
        "type": "Polygon",
        "id": 48379,
        "arcs": [[-7948, 7985, -7774, -7823]]
      }, {
        "type": "Polygon",
        "id": 48415,
        "arcs": [[7986, 7987, 7988, -7792, -7784]]
      }, {
        "type": "Polygon",
        "id": 35015,
        "arcs": [[-7685, 7989, 7990, 7991, -7808, -7452]]
      }, {
        "type": "Polygon",
        "id": 48151,
        "arcs": [[-7788, 7992, 7993, -7987, -7783]]
      }, {
        "type": "Polygon",
        "id": 48033,
        "arcs": [[-7989, 7994, 7995, 7996, -7805, -7793]]
      }, {
        "type": "Polygon",
        "id": 48115,
        "arcs": [[-7997, 7997, 7998, -7815, -7806]]
      }, {
        "type": "Polygon",
        "id": 48165,
        "arcs": [[-7816, -7999, 7999, 8000, -7681, -7814]]
      }, {
        "type": "Polygon",
        "id": 48253,
        "arcs": [[-7802, 8001, 8002, 8003, -7993, -7787]]
      }, {
        "type": "Polygon",
        "id": 48417,
        "arcs": [[8004, 8005, 8006, -8002, -7801, -7797]]
      }, {
        "type": "Polygon",
        "id": 48429,
        "arcs": [[-7965, 8007, -8005, -7796, -7800]]
      }, {
        "type": "Polygon",
        "id": 13165,
        "arcs": [[-7920, 8008, 8009, -7848]]
      }, {
        "type": "Polygon",
        "id": 13021,
        "arcs": [[8010, 8011, 8012, -7878, -7885]]
      }, {
        "type": "Polygon",
        "id": 28099,
        "arcs": [[8013, 8014, 8015, -7854]]
      }, {
        "type": "Polygon",
        "id": 28079,
        "arcs": [[-8016, 8016, 8017, 8018, -7856]]
      }, {
        "type": "Polygon",
        "id": 28069,
        "arcs": [[-7978, 8019, -8014, -7853, -7851]]
      }, {
        "type": "Polygon",
        "id": 48459,
        "arcs": [[-7826, 8020, 8021, 8022, 8023, -7945, -7908]]
      }, {
        "type": "Polygon",
        "id": 13289,
        "arcs": [[8024, 8025, -8011, -7884, -7953]]
      }, {
        "type": "Polygon",
        "id": 13263,
        "arcs": [[8026, 8027, 8028, 8029, 8030, -7866, -7974]]
      }, {
        "type": "Polygon",
        "id": 48315,
        "arcs": [[-7932, 8031, -8021, -7825, -7845]]
      }, {
        "type": "Polygon",
        "id": 28089,
        "arcs": [[-8019, 8032, 8033, 8034, -7924, -7857]]
      }, {
        "type": "Polygon",
        "id": 1105,
        "arcs": [[-7913, 8035, 8036, -7957, -7859]]
      }, {
        "type": "Polygon",
        "id": 13145,
        "arcs": [[-8031, 8037, 8038, -7897, -7869, -7867]]
      }, {
        "type": "Polygon",
        "id": 13079,
        "arcs": [[-8013, 8039, 8040, 8041, -7972, -7879]]
      }, {
        "type": "Polygon",
        "id": 48257,
        "arcs": [[8042, 8043, 8044, -7983, -7985, -7776]]
      }, {
        "type": "Polygon",
        "id": 13107,
        "arcs": [[-7849, -8010, 8045, 8046, 8047, 8048, 8049, 8050, -7841]]
      }, {
        "type": "Polygon",
        "id": 48467,
        "arcs": [[-7986, -7947, 8051, 8052, -8043, -7775]]
      }, {
        "type": "Polygon",
        "id": 13167,
        "arcs": [[-8051, 8053, -7951, -7861, -7842]]
      }, {
        "type": "Polygon",
        "id": 48203,
        "arcs": [[-7931, 8054, 8055, 8056, -8022, -8032]]
      }, {
        "type": "Polygon",
        "id": 35023,
        "arcs": [[8057, 8058, 8059, -7621, -7872]]
      }, {
        "type": "Polygon",
        "id": 1051,
        "arcs": [[8060, 8061, 8062, -7910, -7904, -7902]]
      }, {
        "type": "Polygon",
        "id": 22061,
        "arcs": [[8063, 8064, 8065, -7939, -7943]]
      }, {
        "type": "MultiPolygon",
        "id": 45053,
        "arcs": [[[8066, 8067, 8068, 8069, 8070, 8071, 8072, 8073, 8074, 8075, -7922]]]
      }, {
        "type": "Polygon",
        "id": 13269,
        "arcs": [[-8042, 8076, 8077, 8078, 8079, -8027, -7973]]
      }, {
        "type": "Polygon",
        "id": 1081,
        "arcs": [[-8039, 8080, 8081, 8082, -7900, -7898]]
      }, {
        "type": "Polygon",
        "id": 1047,
        "arcs": [[8083, 8084, 8085, 8086, -8036, -7912]]
      }, {
        "type": "Polygon",
        "id": 22073,
        "arcs": [[8087, 8088, 8089, -8064, -7942, -7956]]
      }, {
        "type": "Polygon",
        "id": 13175,
        "arcs": [[8090, 8091, 8092, -7952, -8054, 8093]]
      }, {
        "type": "Polygon",
        "id": 1001,
        "arcs": [[-8063, 8094, 8095, -8084, -7911]]
      }, {
        "type": "MultiPolygon",
        "id": 45013,
        "arcs": [[[8096]], [[-8073, 8097]], [[-8071, 8098]], [[-8069, 8099]], [[8100]], [[8101]], [[8102, -8067, -7921, -7890]]]
      }, {
        "type": "Polygon",
        "id": 13225,
        "arcs": [[8103, -8077, -8041, 8104]]
      }, {
        "type": "Polygon",
        "id": 13153,
        "arcs": [[-8026, 8105, 8106, 8107, 8108, -8105, -8040, -8012]]
      }, {
        "type": "Polygon",
        "id": 48423,
        "arcs": [[-8024, 8109, 8110, 8111, 8112, -8052, -7946]]
      }, {
        "type": "Polygon",
        "id": 22083,
        "arcs": [[-7968, 8113, 8114, 8115, -8088, -7955, -7960]]
      }, {
        "type": "Polygon",
        "id": 48183,
        "arcs": [[-8057, 8116, -8110, -8023]]
      }, {
        "type": "Polygon",
        "id": 13031,
        "arcs": [[8117, 8118, 8119, 8120, -8046, -8009, -7919]]
      }, {
        "type": "Polygon",
        "id": 28123,
        "arcs": [[-8018, 8121, 8122, 8123, -8033]]
      }, {
        "type": "Polygon",
        "id": 28149,
        "arcs": [[8124, 8125, 8126, 8127, 8128, 8129, -7966, -7949, -7926]]
      }, {
        "type": "Polygon",
        "id": 13215,
        "arcs": [[-8030, 8130, 8131, -8081, -8038]]
      }, {
        "type": "Polygon",
        "id": 35029,
        "arcs": [[-7916, 8132, -8058, -7871, -7742]]
      }, {
        "type": "Polygon",
        "id": 13103,
        "arcs": [[-8076, 8133, 8134, -8118, -7918, -7923]]
      }, {
        "type": "Polygon",
        "id": 1087,
        "arcs": [[8135, 8136, 8137, -8061, -7901, -8083]]
      }, {
        "type": "Polygon",
        "id": 28121,
        "arcs": [[-8124, 8138, 8139, 8140, -8034]]
      }, {
        "type": "Polygon",
        "id": 22013,
        "arcs": [[-8066, 8141, 8142, 8143, 8144, -7935, -7937, -7940]]
      }, {
        "type": "Polygon",
        "id": 13023,
        "arcs": [[8145, 8146, -8106, -8025, -8093]]
      }, {
        "type": "Polygon",
        "id": 28075,
        "arcs": [[-7977, 8147, 8148, 8149, -8020]]
      }, {
        "type": "Polygon",
        "id": 28101,
        "arcs": [[-8150, 8150, -8122, -8017, -8015]]
      }, {
        "type": "Polygon",
        "id": 28049,
        "arcs": [[-8141, 8151, 8152, -8125, -7925, -8035]]
      }, {
        "type": "MultiPolygon",
        "id": 22065,
        "arcs": [[[8153, -8128]], [[8154, 8155, -8114, -7967, -8130]]]
      }, {
        "type": "Polygon",
        "id": 13197,
        "arcs": [[8156, 8157, 8158, 8159, 8160, -8028, -8080]]
      }, {
        "type": "Polygon",
        "id": 13043,
        "arcs": [[8161, 8162, -8047, -8121]]
      }, {
        "type": "Polygon",
        "id": 48221,
        "arcs": [[8163, 8164, 8165, -7962, -7971]]
      }, {
        "type": "Polygon",
        "id": 48251,
        "arcs": [[8166, 8167, 8168, 8169, -8164, -7970, -7981]]
      }, {
        "type": "Polygon",
        "id": 48139,
        "arcs": [[-7984, -8045, 8170, 8171, 8172, -8167, -7980]]
      }, {
        "type": "Polygon",
        "id": 1091,
        "arcs": [[-7958, -8037, -8087, 8173, 8174, 8175, -7975, -7895]]
      }, {
        "type": "Polygon",
        "id": 13053,
        "arcs": [[-8161, 8176, 8177, -8131, -8029]]
      }, {
        "type": "Polygon",
        "id": 48227,
        "arcs": [[8178, 8179, 8180, 8181, -7996]]
      }, {
        "type": "Polygon",
        "id": 48335,
        "arcs": [[8182, 8183, 8184, -8179, -7995, -7988]]
      }, {
        "type": "Polygon",
        "id": 48353,
        "arcs": [[8185, 8186, 8187, -8183, -7994]]
      }, {
        "type": "Polygon",
        "id": 48317,
        "arcs": [[-8182, 8188, 8189, 8190, -8000, -7998]]
      }, {
        "type": "Polygon",
        "id": 48003,
        "arcs": [[-8191, 8191, 8192, 8193, -7682, -8001]]
      }, {
        "type": "Polygon",
        "id": 13193,
        "arcs": [[-8104, -8109, 8194, 8195, 8196, -8078]]
      }, {
        "type": "Polygon",
        "id": 48441,
        "arcs": [[8197, 8198, 8199, -8186, -8004]]
      }, {
        "type": "Polygon",
        "id": 48133,
        "arcs": [[-7964, 8200, 8201, 8202, 8203, -8006, -8008]]
      }, {
        "type": "Polygon",
        "id": 48143,
        "arcs": [[-7963, -8166, 8204, 8205, 8206, 8207, -8201]]
      }, {
        "type": "Polygon",
        "id": 48059,
        "arcs": [[-8204, 8208, 8209, -8198, -8003, -8007]]
      }, {
        "type": "Polygon",
        "id": 4019,
        "arcs": [[-7662, 8210, 8211, 8212, -7750, -7482, -7753]]
      }, {
        "type": "Polygon",
        "id": 13283,
        "arcs": [[8213, 8214, -8094, -8050]]
      }, {
        "type": "Polygon",
        "id": 1113,
        "arcs": [[-8132, -8178, 8215, 8216, 8217, -8136, -8082]]
      }, {
        "type": "Polygon",
        "id": 1101,
        "arcs": [[-8138, 8218, 8219, 8220, 8221, -8095, -8062]]
      }, {
        "type": "Polygon",
        "id": 22049,
        "arcs": [[-8090, 8222, 8223, -8142, -8065]]
      }, {
        "type": "Polygon",
        "id": 13091,
        "arcs": [[8224, 8225, 8226, 8227, -8146, -8092]]
      }, {
        "type": "Polygon",
        "id": 13249,
        "arcs": [[-8197, 8228, -8157, -8079]]
      }, {
        "type": "Polygon",
        "id": 4003,
        "arcs": [[-7622, -8060, 8229, 8230, -8211, -7661]]
      }, {
        "type": "Polygon",
        "id": 1085,
        "arcs": [[-8222, 8231, 8232, 8233, -8085, -8096]]
      }, {
        "type": "Polygon",
        "id": 48401,
        "arcs": [[8234, 8235, 8236, 8237, -8111, -8117, -8056]]
      }, {
        "type": "Polygon",
        "id": 22041,
        "arcs": [[-8156, 8238, 8239, 8240, -8115]]
      }, {
        "type": "Polygon",
        "id": 13235,
        "arcs": [[-8147, -8228, 8241, 8242, -8107]]
      }, {
        "type": "Polygon",
        "id": 48365,
        "arcs": [[-7930, 8243, 8244, -8235, -8055]]
      }, {
        "type": "Polygon",
        "id": 48213,
        "arcs": [[-8053, -8113, 8245, 8246, 8247, 8248, -8171, -8044]]
      }, {
        "type": "Polygon",
        "id": 13209,
        "arcs": [[8249, 8250, -8214, 8251]]
      }, {
        "type": "Polygon",
        "id": 13279,
        "arcs": [[-8049, 8252, 8253, 8254, -8252]]
      }, {
        "type": "Polygon",
        "id": 22031,
        "arcs": [[8255, 8256, 8257, 8258, -8244, -7929]]
      }, {
        "type": "Polygon",
        "id": 48349,
        "arcs": [[8259, 8260, 8261, -8172, -8249]]
      }, {
        "type": "Polygon",
        "id": 48425,
        "arcs": [[-8170, 8262, -8205, -8165]]
      }, {
        "type": "Polygon",
        "id": 13267,
        "arcs": [[8263, 8264, 8265, 8266, 8267, -8253, -8048, -8163]]
      }, {
        "type": "Polygon",
        "id": 1023,
        "arcs": [[8268, 8269, 8270, 8271, -8148, -7976, -8176]]
      }, {
        "type": "Polygon",
        "id": 13309,
        "arcs": [[-8251, 8272, 8273, -8225, -8091, -8215]]
      }, {
        "type": "Polygon",
        "id": 1011,
        "arcs": [[-8218, 8274, 8275, -8219, -8137]]
      }, {
        "type": "Polygon",
        "id": 13093,
        "arcs": [[-8243, 8276, 8277, 8278, -8195, -8108]]
      }, {
        "type": "Polygon",
        "id": 13109,
        "arcs": [[-8120, 8279, 8280, -8264, -8162]]
      }, {
        "type": "Polygon",
        "id": 22021,
        "arcs": [[-8116, -8241, 8281, 8282, 8283, -8223, -8089]]
      }, {
        "type": "Polygon",
        "id": 1131,
        "arcs": [[-8086, -8234, 8284, 8285, 8286, -8174]]
      }, {
        "type": "Polygon",
        "id": 48217,
        "arcs": [[-8262, 8287, 8288, 8289, -8168, -8173]]
      }, {
        "type": "Polygon",
        "id": 48093,
        "arcs": [[8290, 8291, 8292, -8202, -8208]]
      }, {
        "type": "Polygon",
        "id": 22107,
        "arcs": [[-8129, -8154, -8127, 8293, 8294, 8295, 8296, 8297, -8239, -8155]]
      }, {
        "type": "MultiPolygon",
        "id": 13029,
        "arcs": [[[8298, 8299, 8300, -8280, -8119, -8135]]]
      }, {
        "type": "Polygon",
        "id": 22081,
        "arcs": [[-7936, -8145, 8301, -8256, -7928]]
      }, {
        "type": "MultiPolygon",
        "id": 13051,
        "arcs": [[[8302]], [[8303]], [[8304, -8299, -8134, -8075]]]
      }, {
        "type": "Polygon",
        "id": 13307,
        "arcs": [[8305, 8306, 8307, 8308, -8159]]
      }, {
        "type": "Polygon",
        "id": 13259,
        "arcs": [[-8309, 8309, 8310, 8311, -8216, -8177, -8160]]
      }, {
        "type": "Polygon",
        "id": 13261,
        "arcs": [[-8279, 8312, 8313, 8314, -8306, -8158, -8229, -8196]]
      }, {
        "type": "Polygon",
        "id": 28023,
        "arcs": [[-8272, 8315, 8316, -8149]]
      }, {
        "type": "Polygon",
        "id": 28021,
        "arcs": [[-8153, 8317, 8318, -8294, -8126]]
      }, {
        "type": "Polygon",
        "id": 28061,
        "arcs": [[-8317, 8319, 8320, 8321, -8151]]
      }, {
        "type": "Polygon",
        "id": 28129,
        "arcs": [[-8322, 8322, 8323, 8324, -8139, -8123]]
      }, {
        "type": "Polygon",
        "id": 48035,
        "arcs": [[-8169, -8290, 8325, 8326, 8327, -8206, -8263]]
      }, {
        "type": "Polygon",
        "id": 13271,
        "arcs": [[8328, 8329, 8330, 8331, -8226, -8274]]
      }, {
        "type": "Polygon",
        "id": 22127,
        "arcs": [[-8224, -8284, 8332, 8333, 8334, -8143]]
      }, {
        "type": "Polygon",
        "id": 22069,
        "arcs": [[-8335, 8335, 8336, 8337, 8338, -8257, -8302, -8144]]
      }, {
        "type": "Polygon",
        "id": 1005,
        "arcs": [[-8312, 8339, 8340, 8341, 8342, 8343, -8275, -8217]]
      }, {
        "type": "Polygon",
        "id": 48073,
        "arcs": [[-8238, 8344, 8345, 8346, 8347, -8246, -8112]]
      }, {
        "type": "Polygon",
        "id": 13315,
        "arcs": [[-8227, -8332, 8348, 8349, 8350, -8277, -8242]]
      }, {
        "type": "MultiPolygon",
        "id": 13179,
        "arcs": [[[8351]], [[8352, 8353, 8354, -8265, -8281, -8301, 8355]]]
      }, {
        "type": "Polygon",
        "id": 48431,
        "arcs": [[-8185, 8356, 8357, 8358, 8359, -8180]]
      }, {
        "type": "Polygon",
        "id": 48173,
        "arcs": [[-8360, 8360, 8361, -8189, -8181]]
      }, {
        "type": "Polygon",
        "id": 48329,
        "arcs": [[-8362, 8362, 8363, -8192, -8190]]
      }, {
        "type": "Polygon",
        "id": 48135,
        "arcs": [[-8364, 8364, 8365, 8366, 8367, -8193]]
      }, {
        "type": "Polygon",
        "id": 48495,
        "arcs": [[-8368, 8368, 8369, -7683, -8194]]
      }, {
        "type": "Polygon",
        "id": 48081,
        "arcs": [[-8188, 8370, 8371, -8357, -8184]]
      }, {
        "type": "Polygon",
        "id": 48001,
        "arcs": [[8372, 8373, 8374, -8247, -8348]]
      }, {
        "type": "Polygon",
        "id": 48083,
        "arcs": [[-8210, 8375, 8376, 8377, 8378, -8199]]
      }, {
        "type": "Polygon",
        "id": 48399,
        "arcs": [[-8379, 8379, 8380, -8371, -8187, -8200]]
      }, {
        "type": "Polygon",
        "id": 48049,
        "arcs": [[-8293, 8381, 8382, 8383, -8376, -8209, -8203]]
      }, {
        "type": "Polygon",
        "id": 1109,
        "arcs": [[-8344, 8384, 8385, 8386, -8220, -8276]]
      }, {
        "type": "Polygon",
        "id": 1041,
        "arcs": [[-8387, 8387, 8388, 8389, -8232, -8221]]
      }, {
        "type": "Polygon",
        "id": 28029,
        "arcs": [[8390, 8391, 8392, 8393, -8318, -8152]]
      }, {
        "type": "Polygon",
        "id": 28127,
        "arcs": [[-8325, 8394, 8395, 8396, -8391, -8140]]
      }, {
        "type": "Polygon",
        "id": 13081,
        "arcs": [[-8351, 8397, 8398, 8399, -8313, -8278]]
      }, {
        "type": "Polygon",
        "id": 48193,
        "arcs": [[8400, -8291, -8207, -8328, 8401, 8402]]
      }, {
        "type": "Polygon",
        "id": 13183,
        "arcs": [[8403, 8404, -8266, -8355]]
      }, {
        "type": "Polygon",
        "id": 48161,
        "arcs": [[8405, 8406, -8260, -8248, -8375]]
      }, {
        "type": "Polygon",
        "id": 48109,
        "arcs": [[8407, 8408, 8409, -7809, -7992]]
      }, {
        "type": "Polygon",
        "id": 48229,
        "arcs": [[8410, 8411, 8412, -7810, -8410]]
      }, {
        "type": "Polygon",
        "id": 48141,
        "arcs": [[8413, -7914, -7811, -8413]]
      }, {
        "type": "Polygon",
        "id": 48301,
        "arcs": [[8414, 8415, -7990, -7684, -8370]]
      }, {
        "type": "Polygon",
        "id": 48389,
        "arcs": [[8416, 8417, 8418, -8408, -7991, -8416]]
      }, {
        "type": "Polygon",
        "id": 13239,
        "arcs": [[8419, 8420, -8340, -8311]]
      }, {
        "type": "Polygon",
        "id": 1025,
        "arcs": [[-8287, 8421, 8422, 8423, -8269, -8175]]
      }, {
        "type": "Polygon",
        "id": 48419,
        "arcs": [[8424, 8425, 8426, 8427, -8236, -8245, -8259]]
      }, {
        "type": "Polygon",
        "id": 22025,
        "arcs": [[-8298, 8428, 8429, 8430, -8282, -8240]]
      }, {
        "type": "Polygon",
        "id": 13161,
        "arcs": [[8431, 8432, 8433, -8329, -8273, -8250, -8255]]
      }, {
        "type": "Polygon",
        "id": 13273,
        "arcs": [[8434, 8435, 8436, 8437, -8307, -8315]]
      }, {
        "type": "Polygon",
        "id": 13001,
        "arcs": [[-8268, 8438, 8439, 8440, -8432, -8254]]
      }, {
        "type": "Polygon",
        "id": 1013,
        "arcs": [[-8390, 8441, 8442, 8443, -8285, -8233]]
      }, {
        "type": "Polygon",
        "id": 13243,
        "arcs": [[-8308, -8438, 8444, 8445, -8420, -8310]]
      }, {
        "type": "Polygon",
        "id": 22059,
        "arcs": [[-8431, 8446, 8447, 8448, -8333, -8283]]
      }, {
        "type": "Polygon",
        "id": 13177,
        "arcs": [[-8400, 8449, 8450, -8435, -8314]]
      }, {
        "type": "Polygon",
        "id": 28153,
        "arcs": [[8451, 8452, 8453, -8320, -8316, -8271, 8454]]
      }, {
        "type": "Polygon",
        "id": 28063,
        "arcs": [[-8394, 8455, 8456, 8457, -8295, -8319]]
      }, {
        "type": "Polygon",
        "id": 48309,
        "arcs": [[8458, -8326, -8289, 8459, 8460, 8461]]
      }, {
        "type": "Polygon",
        "id": 13287,
        "arcs": [[8462, 8463, 8464, 8465, -8398, -8350]]
      }, {
        "type": "Polygon",
        "id": 13017,
        "arcs": [[-8331, 8466, 8467, -8463, -8349]]
      }, {
        "type": "Polygon",
        "id": 13321,
        "arcs": [[-8399, -8466, 8468, 8469, 8470, 8471, -8450]]
      }, {
        "type": "Polygon",
        "id": 48347,
        "arcs": [[-8428, 8472, 8473, -8345, -8237]]
      }, {
        "type": "Polygon",
        "id": 22085,
        "arcs": [[-8339, 8474, 8475, 8476, -8425, -8258]]
      }, {
        "type": "Polygon",
        "id": 13305,
        "arcs": [[-8267, -8405, 8477, 8478, 8479, 8480, -8439]]
      }, {
        "type": "Polygon",
        "id": 1099,
        "arcs": [[-8444, 8481, 8482, 8483, -8422, -8286]]
      }, {
        "type": "Polygon",
        "id": 28067,
        "arcs": [[8484, 8485, 8486, -8323, -8321, -8454]]
      }, {
        "type": "Polygon",
        "id": 48293,
        "arcs": [[8487, -8460, -8288, -8261, -8407, 8488, 8489]]
      }, {
        "type": "Polygon",
        "id": 13069,
        "arcs": [[8490, 8491, 8492, 8493, 8494, -8467, -8330, -8434]]
      }, {
        "type": "Polygon",
        "id": 22043,
        "arcs": [[-8449, 8495, -8336, -8334]]
      }, {
        "type": "Polygon",
        "id": 28031,
        "arcs": [[-8487, 8496, 8497, 8498, -8395, -8324]]
      }, {
        "type": "Polygon",
        "id": 13061,
        "arcs": [[-8446, 8499, 8500, 8501, -8341, -8421]]
      }, {
        "type": "Polygon",
        "id": 1067,
        "arcs": [[-8502, 8502, 8503, 8504, -8342]]
      }, {
        "type": "Polygon",
        "id": 28065,
        "arcs": [[8505, 8506, 8507, -8396, -8499]]
      }, {
        "type": "Polygon",
        "id": 13155,
        "arcs": [[-8495, 8508, 8509, -8464, -8468]]
      }, {
        "type": "Polygon",
        "id": 22029,
        "arcs": [[-8297, 8510, 8511, 8512, 8513, 8514, 8515, -8429]]
      }, {
        "type": "Polygon",
        "id": 28077,
        "arcs": [[8516, 8517, 8518, -8392, -8397, -8508]]
      }, {
        "type": "Polygon",
        "id": 1035,
        "arcs": [[8519, 8520, -8482, -8443]]
      }, {
        "type": "Polygon",
        "id": 28001,
        "arcs": [[8521, 8522, -8511, -8296, -8458]]
      }, {
        "type": "Polygon",
        "id": 4023,
        "arcs": [[-8231, 8523, -8212]]
      }, {
        "type": "Polygon",
        "id": 48333,
        "arcs": [[8524, 8525, -8382, -8292, -8401]]
      }, {
        "type": "Polygon",
        "id": 28085,
        "arcs": [[8526, 8527, 8528, 8529, -8456, -8393, -8519]]
      }, {
        "type": "Polygon",
        "id": 13005,
        "arcs": [[8530, 8531, -8491, -8433, -8441]]
      }, {
        "type": "Polygon",
        "id": 48099,
        "arcs": [[8532, -8402, -8327, -8459, 8533]]
      }, {
        "type": "Polygon",
        "id": 48451,
        "arcs": [[-8381, 8534, 8535, 8536, 8537, -8358, -8372]]
      }, {
        "type": "Polygon",
        "id": 1129,
        "arcs": [[-8424, 8538, 8539, 8540, -8455, -8270]]
      }, {
        "type": "MultiPolygon",
        "id": 13191,
        "arcs": [[[8541, 8542]], [[8543, 8544]], [[8545]], [[8546, 8547, -8478, -8404, -8354]]]
      }, {
        "type": "Polygon",
        "id": 48289,
        "arcs": [[8548, 8549, 8550, -8489, -8406, -8374]]
      }, {
        "type": "Polygon",
        "id": 48461,
        "arcs": [[8551, 8552, 8553, -8365, -8363]]
      }, {
        "type": "Polygon",
        "id": 48103,
        "arcs": [[-8554, 8554, 8555, 8556, -8366]]
      }, {
        "type": "Polygon",
        "id": 48405,
        "arcs": [[8557, 8558, 8559, -8473, -8427]]
      }, {
        "type": "Polygon",
        "id": 48383,
        "arcs": [[-8359, -8538, 8560, 8561, -8552, -8361]]
      }, {
        "type": "Polygon",
        "id": 48475,
        "arcs": [[-8415, -8369, -8367, -8557, 8562, -8417]]
      }, {
        "type": "Polygon",
        "id": 13095,
        "arcs": [[-8472, 8563, 8564, 8565, -8436, -8451]]
      }, {
        "type": "Polygon",
        "id": 13037,
        "arcs": [[-8437, -8566, 8566, 8567, -8500, -8445]]
      }, {
        "type": "Polygon",
        "id": 1045,
        "arcs": [[-8505, 8568, 8569, 8570, -8385, -8343]]
      }, {
        "type": "Polygon",
        "id": 1031,
        "arcs": [[8571, 8572, -8388, -8386, -8571]]
      }, {
        "type": "Polygon",
        "id": 28037,
        "arcs": [[-8530, 8573, 8574, -8522, -8457]]
      }, {
        "type": "Polygon",
        "id": 48403,
        "arcs": [[-8477, 8575, 8576, -8558, -8426]]
      }, {
        "type": "Polygon",
        "id": 13277,
        "arcs": [[-8510, 8577, 8578, 8579, -8469, -8465]]
      }, {
        "type": "Polygon",
        "id": 48225,
        "arcs": [[8580, 8581, 8582, 8583, -8549, -8373, -8347]]
      }, {
        "type": "Polygon",
        "id": 48095,
        "arcs": [[-8378, 8584, 8585, -8535, -8380]]
      }, {
        "type": "Polygon",
        "id": 13229,
        "arcs": [[-8481, 8586, 8587, -8531, -8440]]
      }, {
        "type": "Polygon",
        "id": 1039,
        "arcs": [[-8573, 8588, 8589, 8590, 8591, -8520, -8442, -8389]]
      }, {
        "type": "Polygon",
        "id": 48235,
        "arcs": [[8592, 8593, -8561, -8537]]
      }, {
        "type": "Polygon",
        "id": 48005,
        "arcs": [[-8560, 8594, 8595, 8596, 8597, -8581, -8346, -8474]]
      }, {
        "type": "Polygon",
        "id": 13099,
        "arcs": [[-8568, 8598, 8599, 8600, 8601, -8503, -8501]]
      }, {
        "type": "Polygon",
        "id": 48145,
        "arcs": [[8602, 8603, -8461, -8488, 8604]]
      }, {
        "type": "Polygon",
        "id": 22079,
        "arcs": [[-8448, 8605, 8606, 8607, 8608, -8337, -8496]]
      }, {
        "type": "Polygon",
        "id": 48307,
        "arcs": [[-8384, 8609, 8610, 8611, -8585, -8377]]
      }, {
        "type": "Polygon",
        "id": 48411,
        "arcs": [[-8526, 8612, 8613, 8614, 8615, -8610, -8383]]
      }, {
        "type": "Polygon",
        "id": 13019,
        "arcs": [[-8494, 8616, 8617, 8618, 8619, -8578, -8509]]
      }, {
        "type": "Polygon",
        "id": 13299,
        "arcs": [[-8588, 8620, 8621, 8622, 8623, 8624, -8492, -8532]]
      }, {
        "type": "Polygon",
        "id": 48281,
        "arcs": [[8625, 8626, -8613, -8525, -8403, -8533]]
      }, {
        "type": "MultiPolygon",
        "id": 13127,
        "arcs": [[[-8542, 8627]], [[8628, -8544, 8629, 8630, 8631, -8479, -8548]]]
      }, {
        "type": "Polygon",
        "id": 13007,
        "arcs": [[-8565, 8632, 8633, 8634, -8599, -8567]]
      }, {
        "type": "Polygon",
        "id": 13205,
        "arcs": [[-8471, 8635, 8636, 8637, 8638, -8633, -8564]]
      }, {
        "type": "Polygon",
        "id": 28041,
        "arcs": [[-8541, 8639, 8640, 8641, -8452]]
      }, {
        "type": "Polygon",
        "id": 28035,
        "arcs": [[8642, 8643, 8644, 8645, -8497, -8486]]
      }, {
        "type": "Polygon",
        "id": 28073,
        "arcs": [[-8498, -8646, 8646, 8647, -8506]]
      }, {
        "type": "Polygon",
        "id": 28111,
        "arcs": [[-8453, -8642, 8648, 8649, -8643, -8485]]
      }, {
        "type": "Polygon",
        "id": 28091,
        "arcs": [[-8648, 8650, 8651, 8652, -8517, -8507]]
      }, {
        "type": "Polygon",
        "id": 13003,
        "arcs": [[-8625, 8653, 8654, -8617, -8493]]
      }, {
        "type": "Polygon",
        "id": 48455,
        "arcs": [[8655, 8656, 8657, -8582, -8598]]
      }, {
        "type": "Polygon",
        "id": 48371,
        "arcs": [[-8556, 8658, 8659, 8660, 8661, -8418, -8563]]
      }, {
        "type": "Polygon",
        "id": 13025,
        "arcs": [[-8632, 8662, 8663, -8621, -8587, -8480]]
      }, {
        "type": "Polygon",
        "id": 28157,
        "arcs": [[-8575, 8664, 8665, 8666, -8512, -8523]]
      }, {
        "type": "Polygon",
        "id": 22115,
        "arcs": [[-8609, 8667, 8668, 8669, -8475, -8338]]
      }, {
        "type": "Polygon",
        "id": 48395,
        "arcs": [[8670, 8671, 8672, -8605, -8490, -8551]]
      }, {
        "type": "Polygon",
        "id": 13075,
        "arcs": [[8673, 8674, 8675, -8579, -8620]]
      }, {
        "type": "Polygon",
        "id": 28005,
        "arcs": [[-8529, 8676, 8677, 8678, 8679, -8665, -8574]]
      }, {
        "type": "Polygon",
        "id": 28113,
        "arcs": [[8680, 8681, 8682, -8677, -8528]]
      }, {
        "type": "Polygon",
        "id": 28147,
        "arcs": [[-8653, 8683, -8681, -8527, -8518]]
      }, {
        "type": "Polygon",
        "id": 22009,
        "arcs": [[-8430, -8516, 8684, 8685, 8686, 8687, -8606, -8447]]
      }, {
        "type": "Polygon",
        "id": 13071,
        "arcs": [[-8580, -8676, 8688, 8689, -8636, -8470]]
      }, {
        "type": "Polygon",
        "id": 48027,
        "arcs": [[-8604, 8690, 8691, 8692, -8626, -8534, -8462]]
      }, {
        "type": "MultiPolygon",
        "id": 1003,
        "arcs": [[[8693, 8694]], [[-8484, 8695, 8696, 8697, 8698, 8699, 8700, -8539, -8423]]]
      }, {
        "type": "Polygon",
        "id": 1069,
        "arcs": [[-8602, 8701, 8702, 8703, -8569, -8504]]
      }, {
        "type": "Polygon",
        "id": 1053,
        "arcs": [[-8592, 8704, 8705, 8706, -8696, -8483, -8521]]
      }, {
        "type": "Polygon",
        "id": 13201,
        "arcs": [[-8635, 8707, 8708, -8600]]
      }, {
        "type": "Polygon",
        "id": 1061,
        "arcs": [[8709, 8710, 8711, -8589, -8572, -8570, -8704]]
      }, {
        "type": "Polygon",
        "id": 48351,
        "arcs": [[8712, 8713, 8714, 8715, -8576, -8476, -8670]]
      }, {
        "type": "Polygon",
        "id": 13065,
        "arcs": [[-8624, 8716, 8717, 8718, 8719, -8654]]
      }, {
        "type": "Polygon",
        "id": 13173,
        "arcs": [[-8720, 8720, 8721, -8618, -8655]]
      }, {
        "type": "MultiPolygon",
        "id": 1097,
        "arcs": [[[-8699, 8722]], [[8723, 8724, 8725, -8640, -8540, -8701]]]
      }, {
        "type": "MultiPolygon",
        "id": 13039,
        "arcs": [[[8726]], [[8727, 8728, 8729, -8663, -8631]]]
      }, {
        "type": "Polygon",
        "id": 48241,
        "arcs": [[8730, 8731, 8732, -8595, -8559, -8577, -8716]]
      }, {
        "type": "Polygon",
        "id": 48373,
        "arcs": [[8733, 8734, 8735, 8736, -8656, -8597]]
      }, {
        "type": "Polygon",
        "id": 48331,
        "arcs": [[8737, 8738, 8739, -8691, -8603, -8673]]
      }, {
        "type": "Polygon",
        "id": 48243,
        "arcs": [[8740, -8411, -8409, -8419, -8662, 8741]]
      }, {
        "type": "Polygon",
        "id": 48313,
        "arcs": [[8742, 8743, 8744, -8550, -8584]]
      }, {
        "type": "Polygon",
        "id": 48327,
        "arcs": [[-8612, 8745, 8746, 8747, -8586]]
      }, {
        "type": "Polygon",
        "id": 48413,
        "arcs": [[-8748, 8748, 8749, -8593, -8536]]
      }, {
        "type": "Polygon",
        "id": 48105,
        "arcs": [[-8553, -8562, -8594, -8750, 8750, 8751, 8752, -8659, -8555]]
      }, {
        "type": "Polygon",
        "id": 13087,
        "arcs": [[-8634, -8639, 8753, 8754, 8755, -8708]]
      }, {
        "type": "Polygon",
        "id": 13131,
        "arcs": [[8756, 8757, 8758, -8754, -8638]]
      }, {
        "type": "MultiPolygon",
        "id": 13027,
        "arcs": [[[8759, 8760]], [[8761, 8762, 8763, 8764, -8689, -8675]]]
      }, {
        "type": "Polygon",
        "id": 13275,
        "arcs": [[-8690, -8765, 8765, 8766, -8757, -8637]]
      }, {
        "type": "Polygon",
        "id": 13253,
        "arcs": [[-8756, 8767, 8768, -8702, -8601, -8709]]
      }, {
        "type": "Polygon",
        "id": 13049,
        "arcs": [[8769, 8770, -8622, -8664, -8730]]
      }, {
        "type": "Polygon",
        "id": 48457,
        "arcs": [[-8733, 8771, -8734, -8596]]
      }, {
        "type": "Polygon",
        "id": 48471,
        "arcs": [[8772, 8773, 8774, -8743, -8583, -8658]]
      }, {
        "type": "MultiPolygon",
        "id": 22125,
        "arcs": [[[8775, 8776, -8513, -8667, 8777]], [[8778, -8685, -8515]]]
      }, {
        "type": "Polygon",
        "id": 48053,
        "arcs": [[-8693, 8779, 8780, 8781, 8782, -8614, -8627]]
      }, {
        "type": "Polygon",
        "id": 13185,
        "arcs": [[-8619, -8722, 8783, 8784, -8761, 8785, -8762, -8674]]
      }, {
        "type": "Polygon",
        "id": 22077,
        "arcs": [[-8514, -8777, 8786, 8787, 8788, 8789, -8686, -8779]]
      }, {
        "type": "Polygon",
        "id": 28109,
        "arcs": [[-8645, 8790, 8791, 8792, 8793, -8651, -8647]]
      }, {
        "type": "Polygon",
        "id": 22117,
        "arcs": [[-8794, 8794, 8795, -8682, -8684, -8652]]
      }, {
        "type": "Polygon",
        "id": 22039,
        "arcs": [[-8688, 8796, 8797, 8798, 8799, -8607]]
      }, {
        "type": "Polygon",
        "id": 12063,
        "arcs": [[-8769, 8800, 8801, 8802, 8803, 8804, -8710, -8703]]
      }, {
        "type": "Polygon",
        "id": 22105,
        "arcs": [[-8796, 8805, 8806, 8807, 8808, 8809, -8678, -8683]]
      }, {
        "type": "MultiPolygon",
        "id": 12033,
        "arcs": [[[-8695, 8810]], [[8811, 8812]], [[8813, -8697, -8707, 8814]]]
      }, {
        "type": "MultiPolygon",
        "id": 12113,
        "arcs": [[[8815, -8812, 8816, 8817]], [[8818, 8819, -8815, -8706]]]
      }, {
        "type": "Polygon",
        "id": 28039,
        "arcs": [[-8726, 8820, 8821, -8649, -8641]]
      }, {
        "type": "Polygon",
        "id": 22091,
        "arcs": [[-8810, 8822, 8823, 8824, -8679]]
      }, {
        "type": "MultiPolygon",
        "id": 12091,
        "arcs": [[[-8818, 8825]], [[8826, 8827]], [[-8591, 8828, 8829, -8819, -8705]]]
      }, {
        "type": "Polygon",
        "id": 22037,
        "arcs": [[-8825, 8830, 8831, -8778, -8666, -8680]]
      }, {
        "type": "Polygon",
        "id": 12059,
        "arcs": [[-8805, 8832, 8833, -8711]]
      }, {
        "type": "Polygon",
        "id": 12131,
        "arcs": [[-8712, -8834, 8834, 8835, 8836, -8827, 8837, -8829, -8590]]
      }, {
        "type": "Polygon",
        "id": 48041,
        "arcs": [[8838, 8839, 8840, -8671, -8745]]
      }, {
        "type": "Polygon",
        "id": 48319,
        "arcs": [[-8616, 8841, 8842, 8843, -8746, -8611]]
      }, {
        "type": "Polygon",
        "id": 48299,
        "arcs": [[-8783, 8844, 8845, -8842, -8615]]
      }, {
        "type": "Polygon",
        "id": 28131,
        "arcs": [[-8822, 8846, 8847, -8791, -8644, -8650]]
      }, {
        "type": "Polygon",
        "id": 48491,
        "arcs": [[8848, 8849, 8850, -8780, -8692, -8740]]
      }, {
        "type": "Polygon",
        "id": 48407,
        "arcs": [[-8737, 8851, 8852, -8773, -8657]]
      }, {
        "type": "Polygon",
        "id": 22003,
        "arcs": [[-8800, 8853, 8854, -8668, -8608]]
      }, {
        "type": "Polygon",
        "id": 22011,
        "arcs": [[-8855, 8855, 8856, -8713, -8669]]
      }, {
        "type": "Polygon",
        "id": 13101,
        "arcs": [[8857, 8858, -8784, -8721, -8719]]
      }, {
        "type": "Polygon",
        "id": 48185,
        "arcs": [[-8775, 8859, 8860, 8861, -8839, -8744]]
      }, {
        "type": "Polygon",
        "id": 22097,
        "arcs": [[-8790, 8862, 8863, 8864, -8797, -8687]]
      }, {
        "type": "Polygon",
        "id": 12133,
        "arcs": [[8865, -8835, -8833, -8804]]
      }, {
        "type": "MultiPolygon",
        "id": 12089,
        "arcs": [[[-8729, 8866, 8867, 8868, -8770]]]
      }, {
        "type": "MultiPolygon",
        "id": 28059,
        "arcs": [[[-8725, 8869, 8870, -8847, -8821]]]
      }, {
        "type": "Polygon",
        "id": 48051,
        "arcs": [[-8841, 8871, 8872, -8738, -8672]]
      }, {
        "type": "Polygon",
        "id": 22033,
        "arcs": [[8873, 8874, 8875, 8876, -8831, -8824]]
      }, {
        "type": "Polygon",
        "id": 22103,
        "arcs": [[-8793, 8877, 8878, 8879, 8880, -8806, -8795]]
      }, {
        "type": "Polygon",
        "id": 12039,
        "arcs": [[-8759, 8881, 8882, -8801, -8768, -8755]]
      }, {
        "type": "Polygon",
        "id": 48267,
        "arcs": [[8883, 8884, 8885, 8886, -8747, -8844]]
      }, {
        "type": "Polygon",
        "id": 48435,
        "arcs": [[-8887, 8887, 8888, -8751, -8749]]
      }, {
        "type": "Polygon",
        "id": 12073,
        "arcs": [[-8767, 8889, 8890, 8891, -8882, -8758]]
      }, {
        "type": "MultiPolygon",
        "id": 28047,
        "arcs": [[[-8871, 8892, 8893, -8848]]]
      }, {
        "type": "Polygon",
        "id": 12065,
        "arcs": [[-8764, 8894, 8895, 8896, 8897, -8890, -8766]]
      }, {
        "type": "Polygon",
        "id": 48043,
        "arcs": [[8898, -8742, -8661, 8899, 8900]]
      }, {
        "type": "Polygon",
        "id": 22121,
        "arcs": [[8901, -8787, -8776, -8832, -8877]]
      }, {
        "type": "Polygon",
        "id": 48443,
        "arcs": [[8902, 8903, -8900, -8660, -8753]]
      }, {
        "type": "Polygon",
        "id": 22063,
        "arcs": [[-8809, 8904, 8905, -8874, -8823]]
      }, {
        "type": "Polygon",
        "id": 12079,
        "arcs": [[-8786, -8760, 8906, 8907, 8908, 8909, -8895, -8763]]
      }, {
        "type": "Polygon",
        "id": 28045,
        "arcs": [[-8894, 8910, -8878, -8792]]
      }, {
        "type": "Polygon",
        "id": 12047,
        "arcs": [[-8859, 8911, 8912, -8907, -8785]]
      }, {
        "type": "Polygon",
        "id": 48377,
        "arcs": [[-8899, 8913, -8741]]
      }, {
        "type": "Polygon",
        "id": 48339,
        "arcs": [[-8853, 8914, 8915, 8916, -8860, -8774]]
      }, {
        "type": "Polygon",
        "id": 48453,
        "arcs": [[8917, 8918, 8919, 8920, -8781, -8851]]
      }, {
        "type": "Polygon",
        "id": 12013,
        "arcs": [[8921, 8922, 8923, -8802]]
      }, {
        "type": "Polygon",
        "id": 12077,
        "arcs": [[-8892, 8924, 8925, 8926, -8922, -8883]]
      }, {
        "type": "Polygon",
        "id": 12023,
        "arcs": [[-8718, 8927, 8928, 8929, 8930, 8931, -8912, -8858]]
      }, {
        "type": "MultiPolygon",
        "id": 12031,
        "arcs": [[[8932, 8933]], [[8934, 8935]], [[8936, 8937, 8938, -8868]]]
      }, {
        "type": "Polygon",
        "id": 12003,
        "arcs": [[-8869, -8939, 8939, 8940, 8941, -8928, -8717, -8623, -8771]]
      }, {
        "type": "MultiPolygon",
        "id": 12005,
        "arcs": [[[8942, 8943]], [[-8924, 8944, 8945, -8836, -8866, -8803]]]
      }, {
        "type": "Polygon",
        "id": 48287,
        "arcs": [[8946, 8947, 8948, -8849, -8739, -8873]]
      }, {
        "type": "Polygon",
        "id": 48199,
        "arcs": [[-8732, 8949, 8950, 8951, -8735, -8772]]
      }, {
        "type": "Polygon",
        "id": 48171,
        "arcs": [[-8846, 8952, 8953, 8954, -8884, -8843]]
      }, {
        "type": "Polygon",
        "id": 48031,
        "arcs": [[-8782, -8921, 8955, 8956, 8957, -8953, -8845]]
      }, {
        "type": "MultiPolygon",
        "id": 22099,
        "arcs": [[[8958, 8959, 8960]], [[8961, 8962, -8863, -8789, 8963]]]
      }, {
        "type": "Polygon",
        "id": 22047,
        "arcs": [[-8902, -8876, 8964, 8965, 8966, -8964, -8788]]
      }, {
        "type": "Polygon",
        "id": 48291,
        "arcs": [[-8952, 8967, 8968, 8969, -8915, -8852, -8736]]
      }, {
        "type": "Polygon",
        "id": 22019,
        "arcs": [[8970, 8971, 8972, -8714, -8857]]
      }, {
        "type": "Polygon",
        "id": 22053,
        "arcs": [[-8799, 8973, 8974, 8975, -8971, -8856, -8854]]
      }, {
        "type": "Polygon",
        "id": 22001,
        "arcs": [[-8865, 8976, 8977, -8974, -8798]]
      }, {
        "type": "Polygon",
        "id": 12121,
        "arcs": [[-8932, 8978, 8979, -8908, -8913]]
      }, {
        "type": "Polygon",
        "id": 48021,
        "arcs": [[8980, 8981, -8918, -8850, -8949]]
      }, {
        "type": "Polygon",
        "id": 48477,
        "arcs": [[-8862, 8982, 8983, 8984, -8947, -8872, -8840]]
      }, {
        "type": "Polygon",
        "id": 22055,
        "arcs": [[-8963, 8985, 8986, -8977, -8864]]
      }, {
        "type": "Polygon",
        "id": 48209,
        "arcs": [[8987, 8988, -8956, -8920, 8989]]
      }, {
        "type": "Polygon",
        "id": 22005,
        "arcs": [[-8906, 8990, 8991, 8992, -8965, -8875]]
      }, {
        "type": "Polygon",
        "id": 12123,
        "arcs": [[8993, 8994, 8995, -8896, -8910]]
      }, {
        "type": "MultiPolygon",
        "id": 12129,
        "arcs": [[[-8898, 8996, 8997, -8925, -8891]]]
      }, {
        "type": "Polygon",
        "id": 22095,
        "arcs": [[8998, 8999, 9000, -8991, -8905, -8808]]
      }, {
        "type": "Polygon",
        "id": 48465,
        "arcs": [[-8889, 9001, 9002, 9003, -8903, -8752]]
      }, {
        "type": "Polygon",
        "id": 48137,
        "arcs": [[9004, 9005, 9006, 9007, -9002, -8888, -8886]]
      }, {
        "type": "Polygon",
        "id": 48265,
        "arcs": [[9008, 9009, 9010, -9005, -8885, -8955]]
      }, {
        "type": "Polygon",
        "id": 12067,
        "arcs": [[-8980, 9011, 9012, -8994, -8909]]
      }, {
        "type": "MultiPolygon",
        "id": 12109,
        "arcs": [[[9013, 9014]], [[9015, 9016, 9017, 9018, 9019, -8933, 9020]], [[-8935, 9021]]]
      }, {
        "type": "Polygon",
        "id": 48361,
        "arcs": [[-8973, 9022, 9023, -8950, -8731, -8715]]
      }, {
        "type": "Polygon",
        "id": 48473,
        "arcs": [[9024, 9025, 9026, -8983, -8861, -8917]]
      }, {
        "type": "Polygon",
        "id": 22089,
        "arcs": [[9027, -8999, 9028]]
      }, {
        "type": "MultiPolygon",
        "id": 22051,
        "arcs": [[[9029, 9030]], [[9031, 9032, 9033, 9034, -9029, -8807, -8881]]]
      }, {
        "type": "Polygon",
        "id": 12045,
        "arcs": [[-8927, 9035, 9036, 9037, 9038, -8943, 9039, -8945, -8923]]
      }, {
        "type": "Polygon",
        "id": 22071,
        "arcs": [[9040, 9041, 9042, -9032, -8880]]
      }, {
        "type": "Polygon",
        "id": 12019,
        "arcs": [[9043, 9044, 9045, -8940, -8938]]
      }, {
        "type": "Polygon",
        "id": 48245,
        "arcs": [[-9024, 9046, 9047, 9048, -8968, -8951]]
      }, {
        "type": "MultiPolygon",
        "id": 48201,
        "arcs": [[[9049, 9050]], [[-8970, 9051, 9052, 9053, 9054, 9055, -9025, -8916]]]
      }, {
        "type": "MultiPolygon",
        "id": 22087,
        "arcs": [[[-9057, -9058, -9059, -9060]], [[9060, 9061, 9062, 9063, 9064, 9065, 9066, -9042, 9067]]]
      }, {
        "type": "Polygon",
        "id": 22093,
        "arcs": [[9068, 9069, -8992, -9001]]
      }, {
        "type": "Polygon",
        "id": 48149,
        "arcs": [[9070, 9071, 9072, 9073, 9074, -8981, -8948, -8985]]
      }, {
        "type": "Polygon",
        "id": 22113,
        "arcs": [[-8987, 9075, 9076, 9077, -8975, -8978]]
      }, {
        "type": "Polygon",
        "id": 12007,
        "arcs": [[-9046, 9078, 9079, 9080, -8941]]
      }, {
        "type": "Polygon",
        "id": 12125,
        "arcs": [[-9081, 9081, -8929, -8942]]
      }, {
        "type": "Polygon",
        "id": 48259,
        "arcs": [[-8958, 9082, 9083, 9084, -9009, -8954]]
      }, {
        "type": "MultiPolygon",
        "id": 22045,
        "arcs": [[[9085]], [[-8967, 9086, -8960, 9087, 9088, -9076, -8986, -8962]]]
      }, {
        "type": "Polygon",
        "id": 48015,
        "arcs": [[-9027, 9089, 9090, 9091, -9071, -8984]]
      }, {
        "type": "Polygon",
        "id": 22007,
        "arcs": [[-9070, 9092, 9093, 9094, -8961, -9087, -8966, -8993]]
      }, {
        "type": "Polygon",
        "id": 48385,
        "arcs": [[-9011, 9095, 9096, -9006]]
      }, {
        "type": "Polygon",
        "id": 48055,
        "arcs": [[-8982, -9075, 9097, 9098, -8990, -8919]]
      }, {
        "type": "Polygon",
        "id": 22023,
        "arcs": [[-8976, -9078, 9099, -9047, -9023, -8972]]
      }, {
        "type": "Polygon",
        "id": 48091,
        "arcs": [[9100, 9101, -9083, -8957, -8989]]
      }, {
        "type": "MultiPolygon",
        "id": 12037,
        "arcs": [[[9102]], [[-9038, 9103]], [[-8998, 9104, -9036, -8926]]]
      }, {
        "type": "Polygon",
        "id": 48089,
        "arcs": [[9105, 9106, 9107, -9072, -9092]]
      }, {
        "type": "MultiPolygon",
        "id": 22101,
        "arcs": [[[-9095, 9108, 9109, -9088, -8959]]]
      }, {
        "type": "Polygon",
        "id": 12001,
        "arcs": [[-9080, 9110, 9111, 9112, 9113, -8930, -9082]]
      }, {
        "type": "Polygon",
        "id": 12041,
        "arcs": [[-9114, 9114, 9115, -9012, -8979, -8931]]
      }, {
        "type": "MultiPolygon",
        "id": 22057,
        "arcs": [[[9116, 9117]], [[9118, 9119, 9120, -9030, 9121, 9122, 9123, 9124, 9125, 9126, 9127, -9093, -9069, -9000, -9028, -9035, 9128]]]
      }, {
        "type": "Polygon",
        "id": 48019,
        "arcs": [[9129, -9096, -9010, -9085, 9130, 9131]]
      }, {
        "type": "MultiPolygon",
        "id": 22075,
        "arcs": [[[9132]], [[-9059, 9133]], [[9134, -9058]], [[9135, -9065]], [[9136, 9137, 9138, 9139, -9033, -9043, -9067, 9140]]]
      }, {
        "type": "MultiPolygon",
        "id": 48071,
        "arcs": [[[-9050, 9141]], [[-9049, 9142, 9143, 9144, -9052, -8969]]]
      }, {
        "type": "Polygon",
        "id": 48187,
        "arcs": [[9145, 9146, 9147, -9101, -8988, -9099]]
      }, {
        "type": "MultiPolygon",
        "id": 12107,
        "arcs": [[[-9019, 9148, 9149, 9150]], [[9151, 9152, -9111, -9079, -9045]]]
      }, {
        "type": "Polygon",
        "id": 48157,
        "arcs": [[9153, 9154, -9090, -9026, -9056]]
      }, {
        "type": "Polygon",
        "id": 48177,
        "arcs": [[9155, 9156, 9157, 9158, -9146, -9098, -9074]]
      }, {
        "type": "MultiPolygon",
        "id": 22109,
        "arcs": [[[9159, -9117]], [[9160, -9124]], [[9161, -9126]], [[9162]], [[9163, 9164, 9165, 9166, 9167, -9109, -9094, -9128, 9168]]]
      }, {
        "type": "Polygon",
        "id": 48029,
        "arcs": [[-9148, 9169, 9170, 9171, -9131, -9084, -9102]]
      }, {
        "type": "Polygon",
        "id": 48325,
        "arcs": [[9172, 9173, 9174, -9132, -9172]]
      }, {
        "type": "MultiPolygon",
        "id": 12035,
        "arcs": [[[9175, 9176, -9149, -9018]], [[-9016, 9177]], [[9178, 9179, 9180, -9015]]]
      }, {
        "type": "Polygon",
        "id": 48481,
        "arcs": [[-9155, 9181, 9182, 9183, -9106, -9091]]
      }, {
        "type": "Polygon",
        "id": 48285,
        "arcs": [[9184, 9185, 9186, -9156, -9073, -9108]]
      }, {
        "type": "Polygon",
        "id": 48463,
        "arcs": [[-9175, 9187, 9188, -9007, -9097, -9130]]
      }, {
        "type": "Polygon",
        "id": 48271,
        "arcs": [[-9189, 9189, 9190, -9003, -9008]]
      }, {
        "type": "MultiPolygon",
        "id": 48167,
        "arcs": [[[9191]], [[9192, 9193, -9054, 9194]], [[9195, -9144]]]
      }, {
        "type": "MultiPolygon",
        "id": 48039,
        "arcs": [[[-9194, 9196, 9197, -9182, -9154, -9055]]]
      }, {
        "type": "MultiPolygon",
        "id": 12075,
        "arcs": [[[-9113, 9198, 9199, 9200, 9201, 9202, -9115]]]
      }, {
        "type": "Polygon",
        "id": 12083,
        "arcs": [[9203, 9204, 9205, 9206, -9199, -9112, -9153]]
      }, {
        "type": "Polygon",
        "id": 48493,
        "arcs": [[-9159, 9207, 9208, -9170, -9147]]
      }, {
        "type": "MultiPolygon",
        "id": 12127,
        "arcs": [[[9209, 9210]], [[9211, 9212, 9213, 9214, 9215, 9216, -9150, -9177, 9217]], [[9218, -9180]]]
      }, {
        "type": "Polygon",
        "id": 48123,
        "arcs": [[9219, 9220, -9157, -9187, 9221]]
      }, {
        "type": "Polygon",
        "id": 12069,
        "arcs": [[-9216, 9222, 9223, 9224, 9225, -9205, 9226]]
      }, {
        "type": "Polygon",
        "id": 48239,
        "arcs": [[9227, 9228, 9229, 9230, 9231, 9232, 9233, 9234, -9185, -9107, -9184]]
      }, {
        "type": "Polygon",
        "id": 48013,
        "arcs": [[9235, 9236, -9173, -9171, -9209, 9237, 9238]]
      }, {
        "type": "MultiPolygon",
        "id": 48321,
        "arcs": [[[9239, 9240, -9228, -9183, -9198, 9241]]]
      }, {
        "type": "Polygon",
        "id": 48255,
        "arcs": [[9242, 9243, -9238, -9208, -9158, -9221, 9244]]
      }, {
        "type": "MultiPolygon",
        "id": 48469,
        "arcs": [[[-9233, 9245]], [[-9235, 9246, 9247, 9248, 9249, -9222, -9186]]]
      }, {
        "type": "Polygon",
        "id": 48163,
        "arcs": [[-9237, 9250, 9251, 9252, -9174]]
      }, {
        "type": "Polygon",
        "id": 48507,
        "arcs": [[-9253, 9253, 9254, -9188]]
      }, {
        "type": "Polygon",
        "id": 48323,
        "arcs": [[-9255, 9255, 9256, 9257, -9190]]
      }, {
        "type": "MultiPolygon",
        "id": 12017,
        "arcs": [[[9258, -9201]], [[-9200, -9207, 9259, 9260, 9261]]]
      }, {
        "type": "Polygon",
        "id": 12119,
        "arcs": [[-9226, 9262, 9263, 9264, -9260, -9206]]
      }, {
        "type": "Polygon",
        "id": 48175,
        "arcs": [[-9250, 9265, 9266, -9245, -9220]]
      }, {
        "type": "Polygon",
        "id": 12117,
        "arcs": [[9267, -9223, -9215]]
      }, {
        "type": "MultiPolygon",
        "id": 12009,
        "arcs": [[[9268, 9269, 9270, 9271, -9214]], [[9272, -9210, 9273, -9212]]]
      }, {
        "type": "Polygon",
        "id": 48297,
        "arcs": [[9274, 9275, 9276, -9239, -9244, 9277, 9278]]
      }, {
        "type": "Polygon",
        "id": 12095,
        "arcs": [[-9268, -9272, 9279, -9224]]
      }, {
        "type": "MultiPolygon",
        "id": 48057,
        "arcs": [[[9280, 9281, 9282]], [[9283, 9284, 9285]], [[-9241, 9286, -9229]], [[9287, -9248, 9288]], [[9289, -9231, 9290]]]
      }, {
        "type": "Polygon",
        "id": 48025,
        "arcs": [[-9267, 9291, 9292, -9278, -9243]]
      }, {
        "type": "Polygon",
        "id": 12053,
        "arcs": [[-9265, 9293, 9294, -9261]]
      }, {
        "type": "Polygon",
        "id": 48283,
        "arcs": [[9295, 9296, 9297, -9251]]
      }, {
        "type": "Polygon",
        "id": 48311,
        "arcs": [[-9277, 9298, -9296, -9236]]
      }, {
        "type": "Polygon",
        "id": 48127,
        "arcs": [[-9252, -9298, 9299, -9256, -9254]]
      }, {
        "type": "Polygon",
        "id": 48391,
        "arcs": [[-9288, 9300, 9301, 9302, 9303, 9304, -9292, -9266, -9249]]
      }, {
        "type": "MultiPolygon",
        "id": 12101,
        "arcs": [[[9305, 9306]], [[-9264, 9307, 9308, 9309, 9310, -9294]]]
      }, {
        "type": "Polygon",
        "id": 12105,
        "arcs": [[9311, 9312, 9313, 9314, -9308, -9263, -9225]]
      }, {
        "type": "Polygon",
        "id": 12097,
        "arcs": [[-9271, 9315, 9316, -9312, -9280]]
      }, {
        "type": "MultiPolygon",
        "id": 48007,
        "arcs": [[[9317, 9318]], [[9319]], [[9320, 9321, -9304]], [[9322, 9323]], [[-9285, 9324]], [[9325, -9302, 9326, -9282, 9327]]]
      }, {
        "type": "Polygon",
        "id": 48479,
        "arcs": [[9328, 9329, 9330, 9331, -9257, -9300, -9297]]
      }, {
        "type": "Polygon",
        "id": 48409,
        "arcs": [[-9322, 9332, -9323, 9333, 9334, 9335, 9336, 9337, -9279, -9293, -9305]]
      }, {
        "type": "MultiPolygon",
        "id": 12103,
        "arcs": [[[-9306, 9338]], [[9339, 9340, -9310]]]
      }, {
        "type": "MultiPolygon",
        "id": 12057,
        "arcs": [[[-9315, 9341, 9342, -9340, -9309]]]
      }, {
        "type": "Polygon",
        "id": 48131,
        "arcs": [[9343, 9344, 9345, -9329, -9299, -9276]]
      }, {
        "type": "Polygon",
        "id": 48249,
        "arcs": [[-9338, 9346, 9347, 9348, -9344, -9275]]
      }, {
        "type": "MultiPolygon",
        "id": 48355,
        "arcs": [[[9349, 9350]], [[9351]], [[-9318, 9352]], [[-9335, 9353]], [[9354, 9355, -9347, -9337, 9356]]]
      }, {
        "type": "MultiPolygon",
        "id": 12061,
        "arcs": [[[9357, 9358, -9316, -9270, 9359]], [[9360, 9361]]]
      }, {
        "type": "Polygon",
        "id": 12055,
        "arcs": [[9362, 9363, 9364, 9365, -9313]]
      }, {
        "type": "Polygon",
        "id": 12049,
        "arcs": [[-9366, 9366, 9367, -9314]]
      }, {
        "type": "MultiPolygon",
        "id": 12081,
        "arcs": [[[9368, 9369]], [[-9368, 9370, 9371, 9372, -9342]]]
      }, {
        "type": "Polygon",
        "id": 12093,
        "arcs": [[-9359, 9373, 9374, 9375, -9363, -9317]]
      }, {
        "type": "MultiPolygon",
        "id": 48273,
        "arcs": [[[9376, 9377, -9350, 9378]], [[9379, 9380, 9381, -9348, -9356]]]
      }, {
        "type": "MultiPolygon",
        "id": 12111,
        "arcs": [[[9382, 9383]], [[9384, -9361]], [[9385, 9386, 9387, 9388, -9374, -9358]]]
      }, {
        "type": "MultiPolygon",
        "id": 12115,
        "arcs": [[[9389, 9390]], [[-9372, 9391, 9392, 9393, 9394, 9395]], [[-9369, 9396]]]
      }, {
        "type": "Polygon",
        "id": 48247,
        "arcs": [[9397, 9398, 9399, -9330, -9346]]
      }, {
        "type": "Polygon",
        "id": 12027,
        "arcs": [[-9365, 9400, -9392, -9371, -9367]]
      }, {
        "type": "Polygon",
        "id": 48505,
        "arcs": [[-9400, 9401, 9402, -9331]]
      }, {
        "type": "MultiPolygon",
        "id": 48261,
        "arcs": [[[9403, 9404]], [[9405, 9406, 9407, 9408]], [[9409, 9410, 9411, 9412]], [[9413, 9414, -9377, 9415]], [[9416, 9417, 9418, 9419, 9420, -9381, 9421]]]
      }, {
        "type": "Polygon",
        "id": 48047,
        "arcs": [[-9349, -9382, -9421, 9422, 9423, -9398, -9345]]
      }, {
        "type": "MultiPolygon",
        "id": 12085,
        "arcs": [[[9424, 9425]], [[9426, 9427, 9428, 9429, 9430, -9375, -9389, 9431]], [[9432, -9383]], [[9433, -9387]]]
      }, {
        "type": "Polygon",
        "id": 12043,
        "arcs": [[9434, 9435, -9364, -9376]]
      }, {
        "type": "MultiPolygon",
        "id": 12015,
        "arcs": [[[9436, 9437]], [[-9390, 9438]], [[-9395, 9439]], [[-9436, 9440, 9441, -9393, -9401]]]
      }, {
        "type": "MultiPolygon",
        "id": 12099,
        "arcs": [[[-9425, 9442]], [[9443, -9427]], [[9444, -9429]], [[9445, 9446, 9447, -9431]]]
      }, {
        "type": "Polygon",
        "id": 12051,
        "arcs": [[9448, 9449, 9450, -9435, -9448]]
      }, {
        "type": "MultiPolygon",
        "id": 12071,
        "arcs": [[[9451]], [[-9451, 9452, 9453, -9441]], [[-9438, 9454]]]
      }, {
        "type": "Polygon",
        "id": 48427,
        "arcs": [[-9424, 9455, 9456, -9402, -9399]]
      }, {
        "type": "Polygon",
        "id": 48215,
        "arcs": [[-9420, 9457, 9458, 9459, -9456, -9423]]
      }, {
        "type": "MultiPolygon",
        "id": 48489,
        "arcs": [[[9460, 9461]], [[-9404, 9462]], [[9463, 9464, 9465, -9407, 9466]], [[9467, 9468, 9469, 9470, -9458, -9419, 9471]]]
      }, {
        "type": "MultiPolygon",
        "id": 12021,
        "arcs": [[[9472, 9473]], [[9474, 9475, 9476, 9477, -9453, -9450]]]
      }, {
        "type": "MultiPolygon",
        "id": 48061,
        "arcs": [[[9478, -9459, -9471, 9479]], [[-9461, 9480]]]
      }, {
        "type": "Polygon",
        "id": 12011,
        "arcs": [[9481, 9482, -9475, -9449, -9447]]
      }, {
        "type": "MultiPolygon",
        "id": 12086,
        "arcs": [[[9483, 9484, 9485, 9486, 9487, 9488, -9476, -9483, 9489]]]
      }, {
        "type": "MultiPolygon",
        "id": 12087,
        "arcs": [[[-9487, 9490]], [[-9485, 9491]], [[9492]], [[9493, -9474]], [[-9489, 9494, -9477]]]
      }, {
        "type": "Polygon",
        "id": 4015,
        "arcs": [[-5753, -6696, -7333, -6549, -5937, -4613, -5352, -5426]]
      }, {
        "type": "Polygon",
        "id": 12029,
        "arcs": [[-9116, -9203, 9495, -8995, -9013]]
      }, {
        "type": "Polygon",
        "id": 27077,
        "arcs": [[-123, -170, -106, 9496]]
      }, {
        "type": "Polygon",
        "id": 27031,
        "arcs": [[-192, 9497]]
      }, {
        "type": "Polygon",
        "id": 55031,
        "arcs": [[9498, -654, -647, -573, -462, -137, 9499]]
      }, {
        "type": "Polygon",
        "id": 55007,
        "arcs": [[9500, -652, -9499, 9501]]
      }, {
        "id": 55003,
        "type": "MultiPolygon",
        "arcs": [[[-542, -699, -648, -9501, 9502]], [[9503]]]
      }, {
        "id": 26083,
        "type": "MultiPolygon",
        "arcs": [[[9504, 9505, 9506]], [[9507]]]
      }, {
        "id": 26061,
        "type": "MultiPolygon",
        "arcs": [[[-434, -572, -424, 9508]], [[9509, -9506]]]
      }, {
        "type": "Polygon",
        "id": 26103,
        "arcs": [[9510, 9511, -694, -621, -567, -432, 9512]]
      }, {
        "type": "Polygon",
        "id": 26003,
        "arcs": [[-558, 9513, -9511, 9514, -473]]
      }, {
        "type": "Polygon",
        "id": 26041,
        "arcs": [[-9514, -557, 9515, -691, -9512]]
      }, {
        "type": "Polygon",
        "id": 55075,
        "arcs": [[-693, 9516, -855, -666, -683, -619]]
      }, {
        "type": "Polygon",
        "id": 55029,
        "arcs": [[-1144, 9517]]
      }, {
        "id": 26033,
        "type": "MultiPolygon",
        "arcs": [[[9518, 9519]], [[9520]], [[9521, 9522, 9523, -470, 9524]]]
      }, {
        "id": 26097,
        "type": "MultiPolygon",
        "arcs": [[[9525]], [[9526, -9522]], [[9527, -555, -471, -9524]]]
      }, {
        "type": "Polygon",
        "id": 26047,
        "arcs": [[-749, 9528, 9529]]
      }, {
        "id": 26029,
        "type": "MultiPolygon",
        "arcs": [[[-9529, -748, -928, -925, 9530]], [[9531]]]
      }, {
        "id": 26089,
        "type": "MultiPolygon",
        "arcs": [[[9532]], [[9533, -1088, 9534]]]
      }, {
        "type": "Polygon",
        "id": 26055,
        "arcs": [[-923, -1056, -1204, -1085, -9534, 9535]]
      }, {
        "type": "Polygon",
        "id": 26007,
        "arcs": [[9536, -1053, -929, -797]]
      }, {
        "type": "Polygon",
        "id": 26011,
        "arcs": [[9537, -1413, -1374, -1214, -1212]]
      }, {
        "type": "Polygon",
        "id": 26063,
        "arcs": [[-1552, -1530, 9538]]
      }, {
        "type": "Polygon",
        "id": 26147,
        "arcs": [[-1903, -1700, -1550, 9539]]
      }, {
        "type": "Polygon",
        "id": 26163,
        "arcs": [[9540, 9541, -2106, -1904, -1901]]
      }, {
        "id": 26115,
        "type": "MultiPolygon",
        "arcs": [[[-2482, 9542]], [[9543, -2480]], [[9544, -2478, -2253, -2103, -9542]]]
      }, {
        "type": "MultiPolygon",
        "id": 45019,
        "arcs": [[[9545, -7886, 9546, -7888, -7834, -7720]], [[9547, -7615]], [[9548, -7718, -7618, 9549]]]
      }, {
        "type": "Polygon",
        "id": 15005,
        "arcs": [[9550, 9551]]
      }, {
        "type": "Polygon",
        "id": 15001,
        "arcs": [[9552]]
      }, {
        "id": 15007,
        "type": "MultiPolygon",
        "arcs": [[[9553]], [[9554]]]
      }, {
        "id": 15009,
        "type": "MultiPolygon",
        "arcs": [[[-9551, 9555]], [[9556]], [[9557]], [[9558]]]
      }, {
        "type": "Polygon",
        "id": 15003,
        "arcs": [[9559]]
      }, {
        "type": "MultiPolygon",
        "id": 2016,
        "arcs": [[[9560]], [[9561]], [[9562]], [[9563]], [[9564]], [[9565]], [[9566]], [[9567]], [[9568]], [[9569]], [[9570]], [[9571]], [[9572]], [[9573]], [[9574]], [[9575]], [[9576]], [[9577]], [[9578]], [[9579]], [[9580]], [[9581]], [[9582]], [[9583]]]
      }, {
        "type": "MultiPolygon",
        "id": 2013,
        "arcs": [[[9584]], [[9585]], [[9586]], [[9587]], [[9588]], [[9589]], [[9590]], [[9591]], [[9592]], [[9593]], [[9594]], [[9595]], [[9596, 9597, 9598, 9599]]]
      }, {
        "type": "MultiPolygon",
        "id": 2130,
        "arcs": [[[9600]], [[9601]]]
      }, {
        "type": "Polygon",
        "id": 2060,
        "arcs": [[9602, 9603]]
      }, {
        "type": "MultiPolygon",
        "id": 2070,
        "arcs": [[[9604]], [[9605, 9606]], [[9607, 9608, 9609, 9610, 9611, 9612]]]
      }, {
        "type": "MultiPolygon",
        "id": 2164,
        "arcs": [[[9613]], [[-9597, 9614]], [[9615, 9616, 9617, -9599, 9618, -9604, 9619, -9612, 9620]]]
      }, {
        "type": "MultiPolygon",
        "id": 2150,
        "arcs": [[[9621]], [[9622]], [[9623]], [[9624]], [[9625]], [[9626]], [[9627]], [[9628]], [[9629]], [[9630]], [[9631, -9617, 9632, 9633]]]
      }, {
        "type": "MultiPolygon",
        "id": 2110,
        "arcs": [[[9634, 9635]], [[9636, 9637]], [[9638, 9639, 9640, 9641]], [[9642]], [[9643, 9644, 9645, 9646, 9647, 9648]], [[9649, 9650]]]
      }, {
        "type": "MultiPolygon",
        "id": 2280,
        "arcs": [[[9651]], [[9652, 9653]], [[9654]], [[9655]], [[9656]], [[9657]], [[9658]], [[9659]], [[9660, 9661, 9662, 9663]]]
      }, {
        "type": "MultiPolygon",
        "id": 2232,
        "arcs": [[[-9647, 9664]], [[9665, 9666, 9667, 9668]], [[9669]], [[-9664, 9670, -9635, 9671, -9645, 9672]], [[-9639, 9673, -9637, 9674]], [[9675, 9676, 9677, 9678, 9679]], [[9680, 9681]], [[-9641, 9682]], [[9683, 9684, 9685, 9686, 9687]], [[9688, 9689, 9690, 9691]]]
      }, {
        "type": "MultiPolygon",
        "id": 2100,
        "arcs": [[[-9681, 9692]], [[-9649, 9693, -9650, 9694, -9689, 9695]], [[9696, -9687, 9697, -9691]]]
      }, {
        "type": "MultiPolygon",
        "id": 2220,
        "arcs": [[[9698]], [[9699, -9653, 9700]], [[-9668, 9701]], [[9702, -9666, 9703, -9679, 9704]]]
      }, {
        "type": "MultiPolygon",
        "id": 2270,
        "arcs": [[[9705]], [[9706]], [[9707]], [[9708, 9709, 9710, 9711]]]
      }, {
        "type": "MultiPolygon",
        "id": 2050,
        "arcs": [[[9712]], [[9713]], [[9714]], [[9715]], [[9716, -9711, 9717, 9718, 9719, -9621, -9611, 9720, -9607, 9721]]]
      }, {
        "type": "Polygon",
        "id": 2170,
        "arcs": [[9722, 9723, 9724, 9725, -9719, 9726, 9727, 9728]]
      }, {
        "type": "Polygon",
        "id": 2068,
        "arcs": [[9729, 9730, -9728, 9731]]
      }, {
        "type": "MultiPolygon",
        "id": 2020,
        "arcs": [[[-9724, 9732, 9733, 9734]]]
      }, {
        "type": "MultiPolygon",
        "id": 2261,
        "arcs": [[[9735]], [[9736]], [[9737]], [[9738]], [[9739]], [[9740]], [[9741]], [[9742]], [[9743, 9744]], [[9745]], [[9746]], [[9747, 9748]], [[9749]], [[9750, 9751]], [[9752]], [[9753, 9754, -9733, -9723, 9755, 9756, 9757, 9758]]]
      }, {
        "type": "MultiPolygon",
        "id": 2122,
        "arcs": [[[9759, -9634]], [[9760]], [[9761]], [[9762]], [[9763, -9748]], [[-9734, -9755, 9764, -9751, 9765, -9744, 9766]], [[-9633, -9616, -9720, -9726, 9767]]]
      }, {
        "type": "MultiPolygon",
        "id": 2282,
        "arcs": [[[9768, 9769, -9758, 9770, -9685, 9771]]]
      }, {
        "type": "Polygon",
        "id": 2290,
        "arcs": [[9772, 9773, 9774, -9732, -9727, -9718, -9710, 9775, 9776, 9777]]
      }, {
        "type": "Polygon",
        "id": 2090,
        "arcs": [[9778, -9730, -9775]]
      }, {
        "type": "Polygon",
        "id": 2240,
        "arcs": [[-9756, -9729, -9731, -9779, -9774, 9779]]
      }, {
        "type": "MultiPolygon",
        "id": 2185,
        "arcs": [[[9780]], [[9781, -9778, 9782, 9783]]]
      }, {
        "type": "MultiPolygon",
        "id": 2188,
        "arcs": [[[-9777, 9784, 9785, -9783]]]
      }, {
        "type": "MultiPolygon",
        "id": 2180,
        "arcs": [[[9786]], [[9787]], [[9788]], [[9789, -9785, -9776, -9709, 9790]]]
      }, {
        "id": 2201,
        "type": "MultiPolygon",
        "arcs": [[[9791]], [[9792]], [[9793]], [[9794]], [[9795]], [[9796]], [[9797]], [[9798]], [[9799]], [[9800]], [[9801]], [[9802]], [[9803]], [[9804]], [[9805]], [[-9662, 9806]]]
      }, {
        "type": "Polygon",
        "id": 72125,
        "arcs": [[9807, 9808, 9809, 9810, 9811, 9812]]
      }, {
        "type": "Polygon",
        "id": 72003,
        "arcs": [[9813, 9814, 9815, 9816, 9817]]
      }, {
        "type": "Polygon",
        "id": 72097,
        "arcs": [[9818, 9819, -9813, 9820, 9821, 9822, 9823]]
      }, {
        "type": "Polygon",
        "id": 72065,
        "arcs": [[9824, 9825, 9826, 9827, 9828]]
      }, {
        "type": "Polygon",
        "id": 72055,
        "arcs": [[9829, 9830, 9831, 9832]]
      }, {
        "type": "Polygon",
        "id": 72083,
        "arcs": [[9833, 9834, -9819, 9835, 9836]]
      }, {
        "type": "Polygon",
        "id": 72025,
        "arcs": [[9837, 9838, 9839, 9840, 9841, 9842, 9843]]
      }, {
        "type": "Polygon",
        "id": 72045,
        "arcs": [[9844, 9845, 9846, 9847, 9848]]
      }, {
        "type": "Polygon",
        "id": 72133,
        "arcs": [[9849, 9850, 9851, 9852]]
      }, {
        "type": "Polygon",
        "id": 72121,
        "arcs": [[-9833, 9853, -9809, 9854, 9855]]
      }, {
        "type": "Polygon",
        "id": 72027,
        "arcs": [[-9828, 9856, 9857, 9858, 9859]]
      }, {
        "type": "Polygon",
        "id": 72033,
        "arcs": [[9860, 9861, 9862, 9863]]
      }, {
        "type": "Polygon",
        "id": 72001,
        "arcs": [[9864, 9865, 9866, 9867, 9868, 9869]]
      }, {
        "type": "Polygon",
        "id": 72111,
        "arcs": [[9870, 9871, 9872, -9866]]
      }, {
        "type": "Polygon",
        "id": 72047,
        "arcs": [[9873, 9874, 9875, 9876, 9877, 9878]]
      }, {
        "type": "Polygon",
        "id": 72091,
        "arcs": [[9879, 9880, 9881, 9882, 9883, 9884]]
      }, {
        "type": "Polygon",
        "id": 72013,
        "arcs": [[9885, 9886, 9887, 9888, -9825, 9889]]
      }, {
        "type": "Polygon",
        "id": 72145,
        "arcs": [[9890, 9891, -9880, 9892]]
      }, {
        "type": "Polygon",
        "id": 72031,
        "arcs": [[9893, 9894, 9895, 9896, 9897, 9898]]
      }, {
        "type": "Polygon",
        "id": 72061,
        "arcs": [[9899, 9900, 9901, -9861, 9902]]
      }, {
        "type": "Polygon",
        "id": 72129,
        "arcs": [[9903, 9904, 9905, 9906, 9907, -9840, 9908]]
      }, {
        "type": "MultiPolygon",
        "id": 72075,
        "arcs": [[[9909, 9910, -9853, 9911, 9912, 9913, 9914]]]
      }, {
        "type": "Polygon",
        "id": 72063,
        "arcs": [[-9895, 9915, -9909, -9839, 9916]]
      }, {
        "type": "Polygon",
        "id": 72073,
        "arcs": [[9917, -9914, 9918, 9919, 9920]]
      }, {
        "type": "Polygon",
        "id": 72143,
        "arcs": [[9921, 9922, -9878, 9923, -9891, 9924]]
      }, {
        "type": "Polygon",
        "id": 72011,
        "arcs": [[9925, -9836, -9824, 9926, 9927, -9815, 9928]]
      }, {
        "type": "Polygon",
        "id": 72081,
        "arcs": [[-9827, 9929, -9869, 9930, 9931, -9834, 9932, -9857]]
      }, {
        "type": "Polygon",
        "id": 72015,
        "arcs": [[9933, 9934, 9935]]
      }, {
        "type": "Polygon",
        "id": 72079,
        "arcs": [[-9854, -9832, 9936, 9937, -9810]]
      }, {
        "type": "Polygon",
        "id": 72009,
        "arcs": [[9938, 9939, 9940, 9941, 9942]]
      }, {
        "type": "Polygon",
        "id": 72099,
        "arcs": [[9943, 9944, -9929, -9814, 9945]]
      }, {
        "type": "Polygon",
        "id": 72023,
        "arcs": [[9946, -9811, -9938, 9947, -9822]]
      }, {
        "type": "Polygon",
        "id": 72109,
        "arcs": [[9948, 9949, 9950, -9936, 9951, 9952, -9907]]
      }, {
        "type": "Polygon",
        "id": 72101,
        "arcs": [[-9924, -9877, 9953, 9954, -9881, -9892]]
      }, {
        "type": "Polygon",
        "id": 72117,
        "arcs": [[-9928, 9955, -9816]]
      }, {
        "type": "Polygon",
        "id": 72005,
        "arcs": [[-9946, -9818, 9956, 9957]]
      }, {
        "type": "Polygon",
        "id": 72059,
        "arcs": [[-9873, 9958, 9959, -9867]]
      }, {
        "type": "Polygon",
        "id": 72021,
        "arcs": [[-9902, 9960, -9845, 9961, 9962, 9963, -9862]]
      }, {
        "type": "Polygon",
        "id": 72141,
        "arcs": [[9964, -9920, 9965, -9870, -9930, -9826, -9889]]
      }, {
        "type": "Polygon",
        "id": 72041,
        "arcs": [[-9842, 9966, -9943, 9967, -9847, 9968]]
      }, {
        "type": "Polygon",
        "id": 72123,
        "arcs": [[9969, 9970, -9851, 9971, -9940, 9972]]
      }, {
        "type": "Polygon",
        "id": 72131,
        "arcs": [[9973, -9858, -9933, -9837, -9926, -9945, 9974]]
      }, {
        "type": "Polygon",
        "id": 72035,
        "arcs": [[-9908, -9953, 9975, -9973, -9939, -9967, -9841]]
      }, {
        "type": "Polygon",
        "id": 72135,
        "arcs": [[-9963, 9976, -9879, -9923, 9977, 9978]]
      }, {
        "type": "Polygon",
        "id": 72115,
        "arcs": [[-9859, -9974, 9979, 9980]]
      }, {
        "type": "Polygon",
        "id": 72054,
        "arcs": [[-9883, 9981, -9887, 9982]]
      }, {
        "type": "Polygon",
        "id": 72105,
        "arcs": [[-9962, -9849, 9983, -9874, -9977]]
      }, {
        "type": "Polygon",
        "id": 72017,
        "arcs": [[-9884, -9983, -9886, 9984]]
      }, {
        "type": "Polygon",
        "id": 72127,
        "arcs": [[-9897, 9985, -9844, 9986, -9900, 9987]]
      }, {
        "type": "Polygon",
        "id": 72139,
        "arcs": [[-9896, -9917, -9838, -9986]]
      }, {
        "type": "Polygon",
        "id": 72057,
        "arcs": [[-9952, -9935, 9988, -9970, -9976]]
      }, {
        "type": "Polygon",
        "id": 72153,
        "arcs": [[-9868, -9960, 9989, -9830, -9856, 9990, -9931]]
      }, {
        "type": "Polygon",
        "id": 72043,
        "arcs": [[9991, 9992, -9941, -9972, -9850, -9911, 9993]]
      }, {
        "type": "Polygon",
        "id": 72149,
        "arcs": [[-9994, -9910, 9994]]
      }, {
        "type": "Polygon",
        "id": 72039,
        "arcs": [[-9955, 9995, -9921, -9965, -9888, -9982, -9882]]
      }, {
        "type": "MultiPolygon",
        "id": 72113,
        "arcs": [[[-9913, 9996, -9871, -9865, -9966, -9919]]]
      }, {
        "type": "Polygon",
        "id": 72107,
        "arcs": [[9997, -9992, -9995, -9915, -9918, -9996, -9954, -9876]]
      }, {
        "type": "Polygon",
        "id": 72067,
        "arcs": [[-9812, -9947, -9821]]
      }, {
        "type": "Polygon",
        "id": 72071,
        "arcs": [[-9980, -9975, -9944, -9958, 9998]]
      }, {
        "type": "Polygon",
        "id": 72007,
        "arcs": [[-9843, -9969, -9846, -9961, -9901, -9987]]
      }, {
        "type": "Polygon",
        "id": 72019,
        "arcs": [[-9848, -9968, -9942, -9993, -9998, -9875, -9984]]
      }, {
        "type": "Polygon",
        "id": 72093,
        "arcs": [[-9932, -9991, -9855, -9808, -9820, -9835]]
      }, {
        "type": "Polygon",
        "id": 72151,
        "arcs": [[9999, 10000, 10001, -9949, -9906, 10002]]
      }, {
        "type": "Polygon",
        "id": 72137,
        "arcs": [[-9863, -9964, -9979, 10003, 10004]]
      }, {
        "type": "Polygon",
        "id": 78030,
        "arcs": [[10005]]
      }, {
        "type": "Polygon",
        "id": 72089,
        "arcs": [[10006, 10007, 10008, 10009]]
      }, {
        "type": "Polygon",
        "id": 72087,
        "arcs": [[10010, 10011, -9899, 10012]]
      }, {
        "type": "Polygon",
        "id": 72095,
        "arcs": [[10013, -9950, -10002]]
      }, {
        "type": "Polygon",
        "id": 72119,
        "arcs": [[-10009, 10014, 10015, 10016, 10017, -10011, 10018]]
      }, {
        "type": "Polygon",
        "id": 72103,
        "arcs": [[10019, 10020, 10021, 10022, -10016]]
      }, {
        "type": "Polygon",
        "id": 72085,
        "arcs": [[-10023, 10023, -10003, -9905, 10024, 10025, -10017]]
      }, {
        "type": "Polygon",
        "id": 72029,
        "arcs": [[-10018, -10026, 10026, -9894, -10012]]
      }, {
        "type": "MultiPolygon",
        "id": 72053,
        "arcs": [[[10027, -10007, 10028]]]
      }, {
        "type": "Polygon",
        "id": 72077,
        "arcs": [[-10025, -9904, -9916, -10027]]
      }, {
        "type": "MultiPolygon",
        "id": 72037,
        "arcs": [[[10029, -10020, -10015, -10008, -10028]]]
      }, {
        "type": "Polygon",
        "id": 72069,
        "arcs": [[10030, -10000, -10024, -10022]]
      }, {
        "type": "Polygon",
        "id": 72147,
        "arcs": [[10031]]
      }, {
        "type": "Polygon",
        "id": 78010,
        "arcs": [[10032]]
      }, {
        "type": "Polygon",
        "id": 72051,
        "arcs": [[-10004, -9978, -9922, 10033]]
      }]
    },
    "states": {
      "type": "GeometryCollection",
      "geometries": [{
        "type": "MultiPolygon",
        "arcs": [[[83, 78, 81, -22, 79, -113, 235, 236, -353, 382, 383, -519, 563, 494, 535, 536, 538, 483, 484, 670, 671, 672, 673, 674, 581, 582, 669, -638, 586, 587, 589, 455, 331, 222, 176, 223, 307, 265, 359, 262, 360, 309, 395, 358, 295, 185, 173, 186, 127, 124, 2, 73]], [[116]], [[117]], [[118]], [[174]], [[260]], [[292]]],
        "id": 53
      }, {
        "type": "MultiPolygon",
        "arcs": [[[108, -91, 106, -131, 210, -220, 361, -369, 496, 497, 498, 654, 655, 656, 741, 742, 743, 676, 677, 804, 805, 634, 628, 629, 630, 735, 712, 713, 714, 509, -501, 315, 316, 337, -230, 190, -110, 33, -20, 34, 18, 41, 97, 86, 44, 48, 27, 8, 51]]],
        "id": 30
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-338, -317, -316, 500, -510, -715, -714, -713, -736, -631, 1095, -1149, -1148, 1566, -1708, -1707, 2023, 2114, 2078, 2079, 1992, 1993, 1868, 1554, 1555, -1237, -1236, -1235, 1065, -945, 889, -688, 504, 517, 518, -384, -383, 352, -237, -236, 112, -80, 21, 22, 19, -34, 109, -191, 229]]],
        "id": 16
      }, {
        "type": "MultiPolygon",
        "arcs": [[[30, 62, 66, 55, 52, -155, -154, 198, -208, 305, -337, 391, -404, -529, 532, 533, 606, 607, 612, 613, 610, 611, 512, 564, 602, 603, 604, 614, -498, -497, 368, -362, 219, -211, 130, -107, 90, 91, 96, 101, 38]]],
        "id": 38
      }, {
        "type": "MultiPolygon",
        "arcs": [[[9496, 123, 140, 193, 9497, 192, 135, 136, 461, 572, 573, -646, 772, -778, 876, 877, 1025, -1049, 1113, -1137, -1162, -1161, -1165, 1343, -1397, 1476, 1477, 1478, 1485, 1486, 1473, 1474, 1475, 1469, 1470, 1491, 1492, 1498, 1499, 1488, 1489, 1490, 1466, 1467, 1463, 1464, 1309, -1194, 1154, -1019, -1018, 892, -868, 817, -724, 681, -533, 528, 403, -392, 336, -306, 207, -199, 153, 154, -53, 58, 104]]],
        "id": 27
      }, {
        "type": "MultiPolygon",
        "arcs": [[[895, 578, 1091, 1255, 1259, 1365, 1363, 1364, 1261, 1108, 1366, 1353, 1362, 1355, 1511, 1512, -1273, 864, 865, 866, 795, 548, 348, 791]], [[893]], [[894]]],
        "id": 23
      }, {
        "type": "MultiPolygon",
        "arcs": [[[464, 465, 466, 422, 9508, 434, 9512, 9514, 473, 9524, 9526, 9522, 9527, 555, 9515, 691, 692, 618, 619, 568, 569, 570]], [[9536, 1049, 1210, 9537, 1408, 1534, 9538, 1552, 9539, 1899, 9540, 9544, -2478, 2253, 2254, 2266, 2267, 2268, 2263, 2264, 2269, 2270, 2272, 2273, 2176, 2177, 2178, 2124, 1960, 1759, 1660, 1507, 1351, 1199, 1086, 9534, 9535, 923, 9530, 9529, 749, 798]], [[9506, 9504, 9509]], [[9507]], [[9518, 9519]], [[9520]], [[9525]], [[9531]], [[9532]], [[-2482, 9542]], [[9543, -2480]]],
        "id": 26
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-570, -569, -620, -619, -693, 9516, 855, 1129, 857, 1130, 1142, 9517, 1140, 1262, 1448, 1597, 1773, 1932, 1998, 1999, 2000, 1930, 1931, 1923, 1924, 1918, 1919, 1938, 1939, 1751, 1752, 1753, 1669, -1629, 1538, -1477, 1396, -1344, 1164, 1160, 1161, 1136, -1114, 1048, -1026, -878, -877, 777, -773, 645, -574, -573, -462, -137, 9499, 9501, 9502, 542, -466, -465, -571]], [[9503]]],
        "id": 55
      }, {
        "type": "MultiPolygon",
        "arcs": [[[637, -670, -583, -582, -675, -674, -673, -672, -671, -485, -484, -539, -537, -536, -495, -564, -518, -505, 687, -890, 944, -1066, 1234, 1235, 1236, 1237, 1401, 1402, 1576, 1577, 1573, 1574, 1853, 1945, 1946, 1864, 1865, 1585, 1438, 1271, 955, 754, 601, 640, -587]]],
        "id": 41
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-513, -612, -611, -614, -613, -608, -607, -534, -682, 723, -818, 867, -893, 1017, 1018, -1155, 1193, -1310, -1465, 1494, -1626, 1633, -1731, 1804, 1805, 1806, 1807, 1809, 1810, 1781, 1782, 1784, 1644, 1645, 1654, 1655, 1525, 1683, 1682, 1546, 1547, 1656, 1657, -1617, 1461, -1347, 1222, 1158, -1008, 914, -656, -655, -499, -615, -605, -604, -603, -565]]],
        "id": 46
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-1513, 1589, 1721, 1722, 1754, 1755, 1756, 1778, 1779, -1727, 1588, -1430, 1243, 1244, -1089, -971, 874, 875, -866, -865, 1272]]],
        "id": 33
      }, {
        "type": "MultiPolygon",
        "arcs": [[[973, -875, 970, 1088, -1245, -1244, 1429, -1589, 1726, 1727, 1709, 1710, 1711, -1519, 1458, 1268, -1179, 1105, -978, 975, 976, 969, 983]]],
        "id": 50
      }, {
        "type": "MultiPolygon",
        "arcs": [[[1178, -1269, -1459, 1518, -1712, 1858, -1972, -1971, 2256, 2257, -2523, -2522, 2726, 2723, 3022, 3074, 3024, 2725, 2601, 2744, 2742, 2743, 2540, 2541, 2542, 2297, 2298, 2064, 2126, 2127, 2129, 2130, 2162, 2163, 2027, 2028, 2059, 2060, 2056, 2057, 2031, 2032, 2033, 1803, 1690, 1687, 1695, 1698, 1675, 1544, 1252, 1539, 1254, 1249, 994, 1006, 980, -976, 977, -1106]], [[1799]], [[2756, 3028]], [[3031, 3099, 3132, 3101, 3033, 2758, 3029, 3096]], [[3098, 3131]], [[3217]]],
        "id": 36
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-677, -744, -743, -742, -657, -915, 1007, -1159, -1223, 1346, -1462, 1616, 1617, -1834, 2017, 2018, -2515, 2523, 2524, 2525, 2112, 2113, 2107, 2108, 2109, 2167, 2168, 2169, 2592, -2317, 1705, 1706, 1707, -1567, 1147, 1148, -1096, -630, -629, -635, -806, -805, -678]]],
        "id": 56
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-1475, -1474, -1487, -1486, -1479, -1478, -1539, 1628, -1670, -1754, -1753, 1994, -2069, 2132, -2204, 2286, 2287, -2425, -2424, -2423, 2690, -2741, 2897, -2903, 3094, 3095, 3055, 3056, 3058, 3059, 3070, 3071, 3068, 3069, 3065, 3066, 3062, 3063, 3052, 3053, 3049, 3050, 3046, 3047, -2910, 2856, -2805, 2631, 2632, -2516, 2389, -2278, 2181, -2165, 2036, 2037, -1806, -1805, 1730, -1634, 1625, -1495, -1464, -1468, -1467, -1491, -1490, -1489, -1500, -1499, -1493, -1492, -1471, -1470, -1476]]],
        "id": 19
      }, {
        "type": "MultiPolygon",
        "arcs": [[[1833, -1618, -1658, -1657, -1548, -1547, -1683, -1684, -1526, -1656, -1655, -1646, -1645, -1785, -1783, -1782, -1811, -1810, -1808, -1807, -2038, -2037, 2164, -2182, 2277, -2390, 2515, -2633, -2632, 2804, -2857, 2909, -3048, 3108, -3254, 3283, 3464, 3465, 3466, 3467, 3462, 3463, 3295, 3296, 3404, 3403, 3393, 3394, 3386, 3387, 3389, 3390, 3409, 3410, 3399, 3400, 3405, 3406, 3408, 3396, 3397, -3342, 3173, -3120, 2946, 2947, 2798, 2673, 2674, 2704, 2705, -2524, 2514, -2019, -2018]]],
        "id": 31
      }, {
        "type": "MultiPolygon",
        "arcs": [[[1977, 2092, 1979, 2089, 2140, 2151, 2138, 2147, 2261, 2260, 2149, 2221, 2222, 2223, 2224, 2225, 2143, 1986, 1987, 1988, 2144, 2145, 2146, 1969, 1970, 1971, -1859, -1711, -1710, -1728, -1780, -1779, -1757, -1756, -1755, -1723, 1906, 2093]], [[2604]], [[2700]]],
        "id": 25
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-1919, -1925, -1924, -1932, -1931, -2001, -2000, 2087, 2207, 2208, 2483, -2506, 2748, -2801, 2932, -3136, 3303, 3304, -3526, 3705, -3900, 4008, -4157, 4222, -4431, -4430, 4671, -4693, 4908, -4932, 5144, -5180, 5367, 5368, 5370, -5502, 5572, 5584, 5585, 5578, 5579, 5580, -5360, -5359, -5169, 5134, 4937, 4938, 4713, 4714, -4442, -4441, -4509, 4365, 4366, 4367, 4149, 4052, 4053, -3910, 3728, 3729, -3663, 3495, -3471, 3221, 3222, -3095, 2902, -2898, 2740, -2691, 2422, 2423, 2424, -2288, -2287, 2203, -2133, 2068, -1995, -1752, -1940, -1939, -1920]]],
        "id": 17
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-2057, -2061, -2060, -2029, -2028, -2164, -2163, -2131, -2130, -2128, -2127, -2065, -2299, -2298, -2543, 2574, -2731, 2789, -2889, -2888, -3105, 3232, 3233, -3506, 3533, 3564, 3565, 3474, 3566, 3476, 3477, 3425, 3426, 3478, 3479, 3480, 3562, 3563, 3434, 3435, 3515, 3516, 3422, 3437, 3438, 3526, 3527, 3528, 3588, 3589, -3588, 3317, 3318, 3319, -3224, 3083, -3010, 2881, -2875, 2647, -2639, 2419, -2371, 2173, 2174, -2033, -2032, -2058]]],
        "id": 42
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-2145, -1989, -1988, 2290, 2291, -2430, 2499, 2500, 2532, 2534, 2531, 2535, 2520, 2521, 2522, -2258, -2257, -1970, -2147, -2146]]],
        "id": 9
      }, {
        "type": "MultiPolygon",
        "arcs": [[[2425, 2294, 2427, 2526, -2500, 2429, -2292, -2291, -1987, -2144, -2226, -2225]], [[2517]], [[2518, -2223]]],
        "id": 44
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-1578, 2356, -2368, -2367, -2366, -2365, 4113, 4114, -4294, -4293, -4292, -3783, -4308, 4555, -4763, -4239, 5475, -5938, 6548, 6549, -7332, -7331, -7752, 7765, 7722, 7545, 7076, 7041, 6922, 6556, 5900, 5619, 5299, 5203, 5296, 5447, 5164, 5019, 4847, 4539, 4685, 4457, 4684, 4459, 4467, 4841, 4469, 3604, 2658, 2346, -1865, -1947, -1946, -1854, -1575, -1574]], [[6919]], [[6920]], [[7040]], [[7073]], [[7074]]],
        "id": 6
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-1706, 2316, -2593, -2170, -2169, -2959, -2958, 3075, 3076, -3558, 4006, -4617, 4736, 4737, 4738, 4739, 4740, 4741, 5424, 5425, 5351, -4612, -4611, -4610, 3978, -3543, -3542, 2896, -2335, 2329, -1993, -2080, -2079, -2115, -2024]]],
        "id": 49
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-1402, -1238, -1556, -1555, -1869, -1994, -2330, 2334, -2897, 3541, 3542, -3979, 4609, 4610, 4611, 4612, 5936, 5937, -5476, 4238, 4762, -4556, 4307, 3782, 4291, 4292, 4293, -4115, -4114, 2364, 2365, 2366, 2367, -2357, -1577, -1403]]],
        "id": 32
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-2648, 2874, -2882, 3009, 3010, -3226, 3242, 3243, -3500, 3508, -3587, 3715, 3716, 3874, 3875, 3876, 3973, -4051, 4212, 4210, 4348, 4349, 4480, 4481, 4482, 4483, 4357, 4358, 4335, 4336, 4164, 4165, 4142, 4143, 4144, 4119, 4120, 4121, 4122, 3912, -3790, 3693, -3593, 3383, 3384, -3272, 3147, -3016, 2994, -2771, -2770, 2689, -2594, 2511, -2444, -2268, -2267, -2255, -2254, 2477, 2478, 2479, 2480, 2481, 2482, 2487, 2641, 2489, 2642, 2567, 2608, 2553, 2416, 2374, -2174, 2370, -2420, 2638]]],
        "id": 39
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-2264, -2269, 2443, -2512, 2593, -2690, 2769, 2770, -2995, 3015, -3148, 3271, -3385, -3384, 3592, -3694, 3789, -3913, -4123, 4128, -4250, -4249, 4410, 4411, 4419, 4420, -4544, 4647, 4648, 4799, 4792, 4793, 4794, 4789, 4895, 4896, 4897, 4955, 4956, 4925, 4926, 4975, 4929, 4930, 4931, -4909, 4692, -4672, 4429, 4430, -4223, 4156, -4009, 3899, -3706, 3525, -3305, -3304, 3135, -2933, 2800, -2749, 2505, -2484, -2209, 2506, 2508, 2440, -2178, -2177, -2274, -2273, -2271, -2270, -2265]]],
        "id": 18
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-2743, 2873, 3093, 3043, 3136, 3236, 3325, 3511, 3501, 3786, 4108, 3927, 3924, 3765, 3925, 3768, -3732, 3769, -3734, 3770, 3704, 3646, 3504, 3505, -3234, -3233, 3104, 2887, 2888, -2790, 2730, -2575, -2542, -2541, -2744]]],
        "id": 34
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-2525, -2706, -2705, -2675, -2674, -2799, -2948, -2947, 3119, -3174, 3341, 3342, -3598, 3920, 3921, -4261, 4340, -4580, -4579, 4881, 4882, -5255, 5325, 5326, 5327, 5217, 5218, 5315, 5316, 5520, 5521, 5506, 5507, 5331, 5329, -4739, -4738, -4737, 4616, -4007, 3557, -3077, -3076, 2957, 2958, -2168, -2110, -2109, -2108, -2114, -2113, -2526]]],
        "id": 8
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-3529, -3528, -3804, -3803, -3802, -3800, -3799, -3798, -3796, -3795, -3794, 4004, 4005, 3890, 3845, 3979, -4025, 4171, 4172, 4386, 4387, 4388, 4521, 4522, -4881, 4885, -5131, 5283, 5284, 5188, 5384, 5385, 5386, 5419, 5420, 5108, 5109, 5110, 4797, 4798, -4733, -4482, -4481, -4350, -4349, -4211, -4213, 4050, -3974, -3877, -3876, -3875, -3717, -3716, 3586, -3509, 3499, -3244, -3243, 3225, -3011, -3084, 3223, -3320, -3319, -3318, 3587, -3590, -3589]]],
        "id": 54
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-3496, 3662, -3730, -3729, 3909, -4054, -4053, -4150, -4368, -4367, -4366, 4508, 4440, 4441, -4715, -4714, -4939, -4938, -5135, 5168, 5358, 5359, -5581, -5580, -5646, 5722, 5723, 5724, 5923, 5924, 5925, 5926, -6128, 6188, 6189, 5995, 5996, 5997, 5998, 5887, 5940, 5941, 5912, 5913, 5914, 5731, 5954, 5955, 5956, 5943, 5944, 5945, 5830, 5859, 5860, 5960, 5961, -5781, 5735, -5567, 5553, -5310, -5309, 5043, 5044, -4815, 4761, -4534, 4486, -4333, 4181, 4182, 4027, 3982, 3983, -3866, 3742, -3643, 3540, 3469, -3465, -3284, 3253, -3109, -3047, -3051, -3050, -3054, -3053, -3064, -3063, -3067, -3066, -3070, -3069, -3072, -3071, -3060, -3059, -3057, -3056, -3096, -3223, -3222, 3470]]],
        "id": 29
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-3407, -3406, -3401, -3400, -3411, -3410, -3391, -3390, -3388, -3387, -3395, -3394, -3404, -3405, -3297, -3296, -3464, -3463, -3468, -3467, -3466, -3470, -3541, 3642, -3743, 3865, -3984, -3983, -4028, -4183, -4182, 4332, -4487, 4533, -4762, 4814, -5045, -5044, 5308, 5309, -5554, 5566, 5567, 5568, 5541, 5542, 5533, 5534, 5604, 5605, 5455, 5456, 5458, 5459, 5536, 5537, 5468, 5469, 5538, 5539, 5465, 5466, 5462, 5530, 5531, 5529, 5526, 5527, -5326, 5254, -4883, -4882, 4578, 4579, -4341, 4260, -3922, -3921, 3597, -3343, -3398, -3397, -3409]]],
        "id": 20
      }, {
        "type": "MultiPolygon",
        "arcs": [[[3730, 3731]], [[3732, 3733]], [[4084, 4085, -4061, 3736, 3737, -3477, -3567, -3475, -3566, 3734, 4086, 4378, 4379, 4380, 4381, 4382, 4383, -4251]]],
        "id": 10
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-3480, -3479, -3427, -3426, -3478, -3738, -3737, 4060, -4086, -4085, 4250, -4384, -4383, -4382, 4778, 4774, 4775, 4776, 4860, 4859, 4678, 4569, 4567, 4252, 4394, 4153, 4062, 3805, 3815, 3821, 4072, 4177, 4071, 4178, 4174, 4509, 4277, 4601, 4719, 4718, 4603, 4279, 4280, 4098, 4099, 4100, 3830, 3792, 3793, 3794, 3795, 3797, 3798, 3799, 3801, 3802, 3803, -3527, -3439, -3438, -3423, -3517, -3516, -3436, -3435, -3564, -3563, -3481]], [[4150]], [[4771, 4772]], [[-4380, 4773]], [[4850, 4851]], [[4852, 4853, 4854, 4855]], [[4856, 4857, 4858]]],
        "id": 24
      }, {
        "type": "MultiPolygon",
        "arcs": [[[5598], [-4005, -3793, -3831, -4101, -4100, -4373, 4405, 4487, 4326, 4395, 4657, 4804, 4869, 5072, 5198, 5197, 5006, 4868, 4801, 4983, 5235, 5379, 5433, 5381, 5117, 5157, 5338, 5483, 5546, 5671, 5669, 5699, 5651, 5482, 5440, 5292, 5403, 5589, 5593, 5639, 5682, 5897, 5893, 5929, 5890, 5839, 5930, 5871, 5841, 5872, 5865, 5866, 5867, 5868, 5869, 5931, 5932, 5895, 5896, 5817, 5818, 5819, 5901, 5739, 5740, 5906, 5907, 5908, 5727, 5728, 5729, 5687, 5988, 5689, 5690, 5933, 5934, 5921, 5922, 5874, 5950, 5951, 5952, 5953, 5883, 5884, 5993, 5880, 5915, 5916, 5917, 5904, 5905, -5845, -5743, 5655, -5625, -5246, -5245, -5244, -5109, -5421, -5420, -5387, -5386, -5385, -5189, -5285, -5284, 5130, -4886, 4880, -4523, -4522, -4389, -4388, -4387, -4173, -4172, 4024, -3980, -3846, -3891, -4006]], [[5060, -4854]], [[5061, -4858]], [[-4851, 5062]], [[5065, 5066, -4776, 5067, 5063, 5414]], [[-4772, 5068]], [[5862, 5863, 5864]]],
        "id": 51
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-4120, -4145, -4144, -4143, -4166, -4165, -4337, -4336, -4359, -4358, -4484, -4483, 4732, -4799, -4798, -5111, -5110, 5243, 5244, 5245, 5624, -5656, 5742, 5844, 5845, 5834, 5835, 5842, 5843, 5822, 5823, 5909, 5910, 5853, 5938, 5939, 5856, 5857, 5918, 5919, 5712, 5714, 5715, 5675, 5676, 5753, 5962, 5963, 5849, 5850, 5957, 5958, 5983, 5984, -5924, -5725, -5724, -5723, 5645, -5579, -5586, -5585, -5573, 5501, -5371, -5369, -5368, 5179, -5145, -4931, -4930, -4976, -4927, -4926, -4957, -4956, -4898, -4897, -4896, -4790, -4795, -4794, -4793, -4800, -4649, -4648, 4543, -4421, -4420, -4412, -4411, 4248, 4249, -4129, -4122, -4121]], [[5982, -5926]]],
        "id": 21
      }, {
        "type": "MultiPolygon",
        "arcs": [[[4371, 4372, -4099, -4281]]],
        "id": 11
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5794, 5794, 5795, 5796, -7198, 7619, 7620, -8060, 8229, 8523, 8212, 7750, 7751, 7330, 7331, -6550, -6549, -5937, -4613, -5352, -5426, -5425, -4742, -4741, -4740]]],
        "id": 4
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5569, -5568, -5736, 5780, -5962, 5970, -6145, -6281, 6343, -6579, 6637, -6754, 6799, 6800, -7140, 7252, 7253, 7254, 7255, 7427, 7428, 7424, 7425, 7426, 7406, 7466, 7467, 7468, 7364, 7365, 7250, 7251, 7160, 7161, 7055, 7056, 6953, 6954, -6894, 6717, -6654, 6428, -6395, 6041, 6042, 5813, 5814, 5809, 5810, 5811, 5806, 5807, -5800, -5327, -5528, -5527, -5530, -5532, -5531, -5463, -5467, -5466, -5540, -5539, -5470, -5469, -5538, -5537, -5460, -5459, -5457, -5456, -5606, -5605, -5535, -5534, -5543, -5542]]],
        "id": 40
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5316, -5219, -5218, -5328, 5799, 5800, 5801, -6401, 6582, 6583, -6887, 7029, 7030, 7177, 7178, -7589, 7679, 7680, 7681, 7682, 7683, 7989, 7990, 7991, 7808, 7809, 7810, 7913, 7914, 8132, 8058, 8059, -7621, -7620, 7197, -5797, -5796, -5795, 5793, -5330, -5332, -5508, -5507, -5522, -5521, -5317]]],
        "id": 35
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5715, -5713, -5920, -5919, -5858, -5857, -5940, -5939, -5854, -5911, -5910, -5824, -5823, -5844, -5843, -5836, -5835, -5846, -5906, -5905, -5918, -5917, -5916, -5881, -5994, -5885, -5884, -5954, 6009, 6010, 6011, 6110, 6111, 6255, 6256, 6257, 6200, 6313, 6314, 6420, 6421, 6485, 6486, 6622, 6623, -6850, 6852, 6853, 6819, 6820, 6744, 6745, 6746, 6831, 6832, 6816, 6817, 6810, 6811, 6749, 6750, 6739, 6724, 6778, 6779, 6780, 6798, 6766, 6767, 6768, 6796, 6797, 6792, 6793, -6761, 6632, -6439, -6438, -6437, -6436, 6302, -6189, 6127, -5927, -5983, -5925, -5985, -5984, -5959, -5958, -5851, -5850, -5964, -5963, -5754, -5677, -5676, -5716]]],
        "id": 47
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5951, -5875, -5923, -5922, -5935, -5934, -5691, -5690, -5989, -5688, -5730, -5729, -5728, -5909, -5908, -5907, -5741, -5740, -5902, -5820, -5819, -5818, -5897, -5896, -5933, -5932, -5870, 6067, 6065, 6075, 6114, 6205, 6220, 6063, 6084, 6272, 6460, 6454, 6611, 6285, 6612, 6592, 6521, 6588, 6830, 6787, 6857, 6785, 6916, 7011, 7133, 7294, 7132, 7295, 7304, 7305, 7306, 7307, 7273, 7026, 7027, 7028, 6951, 6900, 6871, 6872, 6876, 6877, 6702, 6703, 6782, 6672, 6673, 6657, 6658, 6794, 6795, 6721, 6775, 6776, 6777, 6697, 6698, 6827, 6906, 6907, 6908, 6847, 6848, 6849, -6624, -6623, -6487, -6486, -6422, -6421, -6315, -6314, -6201, -6258, -6257, -6256, -6112, -6111, -6012, -6011, -6010, -5953, -5952]], [[6070, -5866, 6068, 6286]], [[-6072, 5863, -6073, 5867]], [[6283, 6281, 6610]], [[7293, 7303]], [[7301, 7302]]],
        "id": 37
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5808, -5807, -5812, -5811, -5810, -5815, -5814, -6043, -6042, 6394, -6429, 6653, -6718, 6893, -6955, -6954, -7057, -7056, -7162, -7161, -7252, -7251, -7366, -7365, -7469, -7468, -7467, -7407, -7427, -7426, -7425, -7429, -7428, -7256, -7255, -7540, 7637, -7672, 7843, -7932, -7931, -7930, 8243, -8259, 8424, -8477, -8476, -8670, 8712, 8713, -8973, 9022, 9046, 9047, 9142, 9195, 9144, 9052, 9194, 9192, 9196, 9241, 9239, 9286, 9229, 9290, 9289, 9231, 9245, 9233, 9246, 9288, 9300, 9326, 9282, 9280, 9327, 9325, 9302, 9320, 9332, 9323, 9333, 9353, 9335, 9356, 9354, 9379, 9421, 9416, 9417, 9471, 9467, 9468, 9469, 9479, 9478, 9459, 9456, 9402, 9331, 9257, 9190, 9003, 8903, 8900, 8913, 8411, 8413, -7914, -7811, -7810, -7809, -7992, -7991, -7990, -7684, -7683, -7682, -7681, -7680, 7588, -7179, -7178, -7031, -7030, 6886, -6584, -6583, 6400, -5802, -5801]], [[9050, 9141]], [[9191]], [[9285, 9283, 9324]], [[9318, 9352]], [[9319]], [[9413, 9414, 9377, 9350, 9378, 9415]], [[9351]], [[9404, 9462]], [[9463, 9464, 9465, 9407, 9408, 9405, 9466]], [[9409, 9410, 9411, 9412]], [[9461, 9480]]],
        "id": 48
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-5831, -5946, -5945, -5944, -5957, -5956, -5955, -5732, -5915, -5914, -5913, -5942, -5941, -5888, -5999, -5998, -5997, -5996, -6190, -6303, 6435, 6436, 6437, 6438, -6633, 6760, 6761, 6762, 7036, -7048, 7153, 7154, -7441, -7440, 7688, 7689, 7690, 7691, 7692, 7802, 7819, 7820, 7758, 7759, 7744, 7745, 7669, 7670, 7671, -7638, 7539, -7254, -7253, 7139, -6801, -6800, 6753, -6638, 6578, -6344, 6280, 6144, -5971, -5961, -5861, -5860]]],
        "id": 5
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-6658, -6674, -6673, -6783, -6704, -6703, -6878, -6877, -6873, -6872, -6901, -6952, -7029, -7028, -7027, -7274, -7308, 7355, 7616, 9549, 9548, 7718, 9545, 7886, 9546, 7888, 8102, 8067, 8099, 8069, 8098, 8071, 8097, 8073, 8074, 8075, 7922, -7917, 7892, -7846, 7735, 7566, 7567, 7508, 7509, 7462, 7463, -7367, 7276, 7079, 7080, 6942, 6943, 6944, 6945, 6946, -6698, -6778, -6777, -6776, -6722, -6796, -6795, -6659]], [[-7302, 7353]], [[-7306, 7354]], [[7615, 9547]], [[8096]], [[8100]], [[8101]]],
        "id": 45
      }, {
        "type": "MultiPolygon",
        "arcs": [[[6960, -6779, -6725, -6740, -6751, -6750, -6812, -6811, -6818, -6817, -6833, 6996, -7015, -7019, 7048, -7189, -7192, 7226, -7446, 7518, 7519, -7600, 7723, 7724, -7870, 7896, -8039, 8080, -8132, -8178, 8215, -8312, 8339, 8340, -8502, 8502, -8602, 8701, 8702, 8709, 8710, 8711, 8589, 8590, 8704, 8705, 8706, 8696, 8697, 8722, 8699, 8723, 8724, 8725, -8640, 8540, -8455, 8270, 8271, -8148, 7976, 7977, -7850, 7703, -7627, 7474, -7447, 7327, -7278, 7200, -6974, -6977]], [[8693, 8694]]],
        "id": 1
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-6945, -6944, -6943, -7081, -7080, -7277, 7366, -7464, -7463, -7510, -7509, -7568, -7567, -7736, 7845, -7893, 7916, -7923, -8076, -8075, 8304, 8299, 8355, 8352, 8546, 8628, 8544, 8629, 8727, 8728, 8769, 8770, 8622, 8716, 8717, 8857, 8858, 8784, 8759, 8785, 8762, 8763, 8765, 8766, 8757, 8758, 8754, 8767, 8768, -8702, 8601, -8503, 8501, -8341, -8340, 8311, -8216, 8177, 8131, -8081, 8038, -7897, 7869, -7725, -7724, 7599, -7520, -7519, 7445, -7227, 7191, 7188, -7049, 7018, 7014, -6997, -6832, -6747, -6746, -6745, -6821, -6820, -6854, -6853, -6849, -6848, -6909, -6908, -6907, -6828, -6699, -6947, -6946]], [[8302]], [[8303]], [[8351]], [[8542, 8627]], [[8545]], [[8726]]],
        "id": 13
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-6767, -6799, -6781, -6780, -6961, 6976, 6973, -7201, 7277, -7328, 7446, -7475, 7626, -7704, 7849, -7978, -7977, 8147, -8272, -8271, 8454, -8541, 8639, -8726, -8725, 8869, 8892, 8910, -8878, 8792, 8793, 8651, 8683, 8681, 8682, 8677, 8678, 8679, 8665, 8666, -8512, -8511, -8296, -8295, -8294, 8126, 8127, 8128, 8129, -7966, 7949, -7690, -7689, 7439, 7440, -7155, -7154, 7047, -7037, -6763, -6762, -6794, -6793, -6798, -6797, -6769, -6768]]],
        "id": 28
      }, {
        "type": "MultiPolygon",
        "arcs": [[[7929, 7930, 7931, -7844, -7671, -7670, -7746, -7745, -7760, -7759, -7821, -7820, -7803, -7693, -7692, -7691, -7950, 7965, -8130, -8129, -8128, -8127, 8293, 8294, 8295, 8510, 8511, -8667, -8666, -8680, -8679, -8678, -8683, -8682, -8684, -8652, -8794, -8793, 8877, 8878, 9040, 9067, 9060, 9061, 9062, 9063, 9135, 9065, 9140, 9136, 9137, 9138, 9139, 9033, 9128, 9118, 9119, 9120, 9030, 9121, 9122, 9160, 9124, 9161, 9126, 9168, 9163, 9164, 9165, 9166, 9167, 9109, 9088, 9076, 9099, -9047, -9023, 8972, -8714, -8713, 8669, 8475, 8476, -8425, 8258, -8244]], [[9133, 9134], [-9057], [-9060]], [[9085]], [[9117, 9159]], [[9132]], [[9162]]],
        "id": 22
      }, {
        "type": "MultiPolygon",
        "arcs": [[[-8759, -8758, -8767, -8766, -8764, -8763, -8786, -8760, -8785, -8859, -8858, -8718, -8717, -8623, -8771, -8770, -8729, 8866, 8936, 9043, 9151, 9203, 9226, 9216, 9150, 9019, 8933, 9020, 9177, 9016, 9175, 9217, 9272, 9210, 9273, 9212, 9268, 9359, 9385, 9433, 9387, 9431, 9443, 9427, 9444, 9429, 9445, 9481, 9489, 9483, 9491, 9485, 9490, 9487, 9494, 9477, 9453, 9441, 9393, 9439, 9395, 9372, 9342, 9340, 9310, 9294, 9261, 9258, 9201, 9495, 8995, 8896, 8996, 9104, 9036, 9103, 9038, 8943, 9039, 8945, 8836, 8827, 8837, 8829, 8819, 8813, -8697, -8707, -8706, -8705, -8591, -8590, -8712, -8711, -8710, -8703, -8769, -8768, -8755]], [[-8695, 8810]], [[8815, 8812, 8816, 8825]], [[8935, 9021]], [[9180, 9013, 9178, 9218]], [[9102]], [[9306, 9338]], [[9361, 9384]], [[9369, 9396]], [[9383, 9432]], [[9390, 9438]], [[9425, 9442]], [[9436, 9454]], [[9451]], [[9472, 9493]], [[9492]]],
        "id": 12
      }, {
        "type": "MultiPolygon",
        "arcs": [[[9551, 9555]], [[9552]], [[9553]], [[9554]], [[9556]], [[9557]], [[9558]], [[9559]]],
        "id": 15
      }, {
        "type": "MultiPolygon",
        "arcs": [[[9560]], [[9561]], [[9562]], [[9563]], [[9564]], [[9565]], [[9566]], [[9567]], [[9568]], [[9569]], [[9570]], [[9571]], [[9572]], [[9573]], [[9574]], [[9575]], [[9576]], [[9577]], [[9578]], [[9579]], [[9580]], [[9581]], [[9582]], [[9583]], [[9584]], [[9585]], [[9586]], [[9587]], [[9588]], [[9589]], [[9590]], [[9591]], [[9592]], [[9593]], [[9594]], [[9595]], [[9597, 9618, 9602, 9619, 9612, 9607, 9608, 9609, 9720, 9605, 9721, 9716, 9711, 9790, 9789, 9785, 9783, 9781, 9772, 9779, 9756, 9770, 9685, 9697, 9691, 9695, 9643, 9672, 9660, 9806, 9662, 9670, 9635, 9671, 9645, 9664, 9647, 9693, 9650, 9694, 9689, 9696, 9687, 9683, 9771, 9768, 9769, 9758, 9753, 9764, 9751, 9765, 9744, 9766, 9734, 9724, 9767, 9759, 9631, 9617, 9599, 9614]], [[9600]], [[9601]], [[9604]], [[9613]], [[9621]], [[9622]], [[9623]], [[9624]], [[9625]], [[9626]], [[9627]], [[9628]], [[9629]], [[9630]], [[9641, 9673, 9637, 9674, 9639, 9682]], [[9642]], [[9651]], [[9699, 9653, 9700]], [[9654]], [[9655]], [[9656]], [[9657]], [[9658]], [[9659]], [[9675, 9676, 9677, 9704, 9702, 9666, 9701, 9668, 9703, 9679]], [[9669]], [[9681, 9692]], [[9698]], [[9705]], [[9706]], [[9707]], [[9712]], [[9713]], [[9714]], [[9715]], [[9735]], [[9736]], [[9737]], [[9738]], [[9739]], [[9740]], [[9741]], [[9742]], [[9745]], [[9746]], [[9748, 9763]], [[9749]], [[9752]], [[9760]], [[9761]], [[9762]], [[9780]], [[9786]], [[9787]], [[9788]], [[9791]], [[9792]], [[9793]], [[9794]], [[9795]], [[9796]], [[9797]], [[9798]], [[9799]], [[9800]], [[9801]], [[9802]], [[9803]], [[9804]], [[9805]]],
        "id": 2
      }, {
        "type": "MultiPolygon",
        "arcs": [[[9947, 9822, 9926, 9955, 9816, 9956, 9998, 9980, 9859, 9828, 9889, 9984, 9884, 9892, 9924, 10033, 10004, 9863, 9902, 9987, 9897, 10012, 10018, 10009, 10028, 10029, 10020, 10030, 10000, 10013, 9950, 9933, 9988, 9970, 9851, 9911, 9996, 9871, 9958, 9989, 9830, 9936]], [[10031]]],
        "id": 72
      }, {
        "type": "MultiPolygon",
        "arcs": [[[10005]], [[10032]]],
        "id": 78
      }]
    },
    "land": {
      "type": "MultiPolygon",
      "arcs": [[[5598], [5868, 6067, 6065, 6075, 6114, 6205, 6220, 6063, 6084, 6272, 6460, 6454, 6611, 6285, 6612, 6592, 6521, 6588, 6830, 6787, 6857, 6785, 6916, 7011, 7133, 7294, 7132, 7295, 7304, 7354, 7306, 7355, 7616, 9549, 9548, 7718, 9545, 7886, 9546, 7888, 8102, 8067, 8099, 8069, 8098, 8071, 8097, 8073, 8304, 8299, 8355, 8352, 8546, 8628, 8544, 8629, 8727, 8866, 8936, 9043, 9151, 9203, 9226, 9216, 9150, 9019, 8933, 9020, 9177, 9016, 9175, 9217, 9272, 9210, 9273, 9212, 9268, 9359, 9385, 9433, 9387, 9431, 9443, 9427, 9444, 9429, 9445, 9481, 9489, 9483, 9491, 9485, 9490, 9487, 9494, 9477, 9453, 9441, 9393, 9439, 9395, 9372, 9342, 9340, 9310, 9294, 9261, 9258, 9201, 9495, 8995, 8896, 8996, 9104, 9036, 9103, 9038, 8943, 9039, 8945, 8836, 8827, 8837, 8829, 8819, 8813, 8697, 8722, 8699, 8723, 8869, 8892, 8910, 8878, 9040, 9067, 9060, 9061, 9062, 9063, 9135, 9065, 9140, 9136, 9137, 9138, 9139, 9033, 9128, 9118, 9119, 9120, 9030, 9121, 9122, 9160, 9124, 9161, 9126, 9168, 9163, 9164, 9165, 9166, 9167, 9109, 9088, 9076, 9099, 9047, 9142, 9195, 9144, 9052, 9194, 9192, 9196, 9241, 9239, 9286, 9229, 9290, 9289, 9231, 9245, 9233, 9246, 9288, 9300, 9326, 9282, 9280, 9327, 9325, 9302, 9320, 9332, 9323, 9333, 9353, 9335, 9356, 9354, 9379, 9421, 9416, 9417, 9471, 9467, 9468, 9469, 9479, 9478, 9459, 9456, 9402, 9331, 9257, 9190, 9003, 8903, 8900, 8913, 8411, 8413, 7914, 8132, 8058, 8229, 8523, 8212, 7750, 7765, 7722, 7545, 7076, 7041, 6922, 6556, 5900, 5619, 5299, 5203, 5296, 5447, 5164, 5019, 4847, 4539, 4685, 4457, 4684, 4459, 4467, 4841, 4469, 3604, 2658, 2346, 1865, 1585, 1438, 1271, 955, 754, 601, 640, 587, 589, 455, 331, 222, 176, 223, 307, 265, 359, 262, 360, 309, 395, 358, 295, 185, 173, 186, 127, 124, 2, 73, 83, 78, 81, 22, 34, 18, 41, 97, 86, 44, 48, 27, 8, 51, 108, 91, 96, 101, 38, 30, 62, 66, 55, 58, 104, 9496, 123, 140, 193, 9497, 192, 135, 9499, 9501, 9502, 542, 466, 422, 9508, 434, 9512, 9514, 473, 9524, 9526, 9522, 9527, 555, 9515, 691, 9516, 855, 1129, 857, 1130, 1142, 9517, 1140, 1262, 1448, 1597, 1773, 1932, 1998, 2087, 2207, 2506, 2508, 2440, 2178, 2124, 1960, 1759, 1660, 1507, 1351, 1199, 1086, 9534, 9535, 923, 9530, 9529, 749, 798, 9536, 1049, 1210, 9537, 1408, 1534, 9538, 1552, 9539, 1899, 9540, 9544, 2478, 9543, 2480, 9542, 2482, 2487, 2641, 2489, 2642, 2567, 2608, 2553, 2416, 2374, 2174, 2033, 1803, 1690, 1687, 1695, 1698, 1675, 1544, 1252, 1539, 1254, 1249, 994, 1006, 980, 976, 969, 983, 973, 875, 866, 795, 548, 348, 791, 895, 578, 1091, 1255, 1259, 1365, 1363, 1364, 1261, 1108, 1366, 1353, 1362, 1355, 1511, 1589, 1721, 1906, 2093, 1977, 2092, 1979, 2089, 2140, 2151, 2138, 2147, 2261, 2260, 2149, 2221, 2518, 2223, 2425, 2294, 2427, 2526, 2500, 2532, 2534, 2531, 2535, 2520, 2726, 2723, 3022, 3074, 3024, 2725, 2601, 2744, 2873, 3093, 3043, 3136, 3236, 3325, 3511, 3501, 3786, 4108, 3927, 3924, 3765, 3925, 3768, 3730, 3769, 3732, 3770, 3704, 3646, 3504, 3533, 3564, 3734, 4086, 4378, 4773, 4380, 4778, 4774, 5067, 5063, 5414, 5065, 5066, 4776, 4860, 4859, 4678, 4569, 4567, 4252, 4394, 4153, 4062, 3805, 3815, 3821, 4072, 4177, 4071, 4178, 4174, 4509, 4277, 4601, 4719, 4718, 4603, 4279, 4371, 4405, 4487, 4326, 4395, 4657, 4804, 4869, 5072, 5198, 5197, 5006, 4868, 4801, 4983, 5235, 5379, 5433, 5381, 5117, 5157, 5338, 5483, 5546, 5671, 5669, 5699, 5651, 5482, 5440, 5292, 5403, 5589, 5593, 5639, 5682, 5897, 5893, 5929, 5890, 5839, 5930, 5871, 5841, 5872, 6068, 6286, 6070, 5866], [5864, 5862], [-6072], [-6073]], [[116]], [[117]], [[118]], [[174]], [[260]], [[292]], [[893]], [[894]], [[9506, 9504, 9509]], [[9507]], [[9518, 9519]], [[9520]], [[9525]], [[9531]], [[9532]], [[9503]], [[1799]], [[2756, 3028]], [[3031, 3099, 3132, 3101, 3033, 2758, 3029, 3096]], [[3098, 3131]], [[3217]], [[2604]], [[2700]], [[2517]], [[6919]], [[6920]], [[7040]], [[7073]], [[7074]], [[4150]], [[4772, 5068]], [[4851, 5062]], [[4854, 4855, 4852, 5060]], [[4858, 4856, 5061]], [[6283, 6281, 6610]], [[7293, 7303]], [[7302, 7353]], [[9050, 9141]], [[9191]], [[9285, 9283, 9324]], [[9318, 9352]], [[9319]], [[9413, 9414, 9377, 9350, 9378, 9415]], [[9351]], [[9404, 9462]], [[9463, 9464, 9465, 9407, 9408, 9405, 9466]], [[9409, 9410, 9411, 9412]], [[9461, 9480]], [[7615, 9547]], [[8096]], [[8100]], [[8101]], [[8693, 8810]], [[8302]], [[8303]], [[8351]], [[8542, 8627]], [[8545]], [[8726]], [[-9060, -9057], [9133], [9134]], [[9085]], [[9117, 9159]], [[9132]], [[9162]], [[8815, 8812, 8816, 8825]], [[8935, 9021]], [[9180, 9013, 9178, 9218]], [[9102]], [[9306, 9338]], [[9361, 9384]], [[9369, 9396]], [[9383, 9432]], [[9390, 9438]], [[9425, 9442]], [[9436, 9454]], [[9451]], [[9472, 9493]], [[9492]], [[9551, 9555]], [[9552]], [[9553]], [[9554]], [[9556]], [[9557]], [[9558]], [[9559]], [[9560]], [[9561]], [[9562]], [[9563]], [[9564]], [[9565]], [[9566]], [[9567]], [[9568]], [[9569]], [[9570]], [[9571]], [[9572]], [[9573]], [[9574]], [[9575]], [[9576]], [[9577]], [[9578]], [[9579]], [[9580]], [[9581]], [[9582]], [[9583]], [[9584]], [[9585]], [[9586]], [[9587]], [[9588]], [[9589]], [[9590]], [[9591]], [[9592]], [[9593]], [[9594]], [[9595]], [[9597, 9618, 9602, 9619, 9612, 9607, 9608, 9609, 9720, 9605, 9721, 9716, 9711, 9790, 9789, 9785, 9783, 9781, 9772, 9779, 9756, 9770, 9685, 9697, 9691, 9695, 9643, 9672, 9660, 9806, 9662, 9670, 9635, 9671, 9645, 9664, 9647, 9693, 9650, 9694, 9689, 9696, 9687, 9683, 9771, 9768, 9769, 9758, 9753, 9764, 9751, 9765, 9744, 9766, 9734, 9724, 9767, 9759, 9631, 9617, 9599, 9614]], [[9600]], [[9601]], [[9604]], [[9613]], [[9621]], [[9622]], [[9623]], [[9624]], [[9625]], [[9626]], [[9627]], [[9628]], [[9629]], [[9630]], [[9641, 9673, 9637, 9674, 9639, 9682]], [[9642]], [[9651]], [[9699, 9653, 9700]], [[9654]], [[9655]], [[9656]], [[9657]], [[9658]], [[9659]], [[9675, 9676, 9677, 9704, 9702, 9666, 9701, 9668, 9703, 9679]], [[9669]], [[9681, 9692]], [[9698]], [[9705]], [[9706]], [[9707]], [[9712]], [[9713]], [[9714]], [[9715]], [[9735]], [[9736]], [[9737]], [[9738]], [[9739]], [[9740]], [[9741]], [[9742]], [[9745]], [[9746]], [[9748, 9763]], [[9749]], [[9752]], [[9760]], [[9761]], [[9762]], [[9780]], [[9786]], [[9787]], [[9788]], [[9791]], [[9792]], [[9793]], [[9794]], [[9795]], [[9796]], [[9797]], [[9798]], [[9799]], [[9800]], [[9801]], [[9802]], [[9803]], [[9804]], [[9805]], [[9947, 9822, 9926, 9955, 9816, 9956, 9998, 9980, 9859, 9828, 9889, 9984, 9884, 9892, 9924, 10033, 10004, 9863, 9902, 9987, 9897, 10012, 10018, 10009, 10028, 10029, 10020, 10030, 10000, 10013, 9950, 9933, 9988, 9970, 9851, 9911, 9996, 9871, 9958, 9989, 9830, 9936]], [[10031]], [[10005]], [[10032]]]
    }
  },
  "arcs": [[[162416, 583189], [235, -863], [96, -3199], [218, -1080], [-270, -1240]], [[162695, 576807], [-442, -309], [-4397, 83]], [[157856, 576581], [-6, 1800], [-436, 605], [-476, 3063], [168, 1173], [2781, -89], [2529, 56]], [[203483, 583172], [-111, -3267], [363, 0], [1, -4839], [604, -13]], [[204340, 575053], [0, -6407], [-109, -3], [-2, -3885]], [[204229, 564758], [-1073, 300], [-477, 661], [-51, -1946]], [[202628, 563773], [-410, -2654], [-860, -2419], [-1043, -435], [-462, 561]], [[199853, 558826], [28, 9804], [99, 1617], [303, -7], [-114, 3279], [301, 528], [-35, 7509], [73, 1627]], [[200508, 583183], [2975, -11]], [[181317, 583162], [311, -3373], [317, 707], [390, -2531], [-133, -1969], [788, -1235], [-38, -1636], [347, -663], [20, -2122]], [[183319, 570340], [342, -1417], [-25, -1100], [609, -791]], [[184245, 567032], [386, -2907], [-296, -416]], [[184335, 563709], [-284, -666], [56, -2638], [-277, -1038], [59, -2315]], [[183889, 557052], [-896, 67]], [[182993, 557119], [-467, -2]], [[182526, 557117], [100, 1561], [-233, 2073], [31, 1860], [-477, 1550], [-122, 1357], [-538, -515], [111, -1134], [-1262, -12], [41, -3203], [-354, -5]], [[179823, 560649], [-1, 1601], [-1073, -52], [-59, 2655]], [[178690, 564853], [-26, 3920], [480, 4], [-5, 6467], [-109, 1580], [659, 10], [112, 1730], [-222, 1681], [-105, 2947]], [[179474, 583192], [1843, -30]], [[175797, 583199], [0, -9287]], [[175797, 573912], [-2052, -27], [-1, 6456], [-689, -16]], [[173055, 580325], [0, 2843]], [[173055, 583168], [2742, 31]], [[199853, 558826], [-98, -1296], [-681, 144], [-597, -3335]], [[198477, 554339], [-62, 2205], [-374, 544], [-689, -278]], [[197352, 556810], [-1279, 1157], [-333, 1654]], [[195740, 559621], [7, 3507], [733, -36], [49, 1308], [485, -270], [63, 8718], [182, -420], [75, 5957], [166, -2], [64, 4792]], [[197564, 583175], [2944, 8]], [[221924, 574709], [-1819, 8]], [[220105, 574717], [-103, 3252], [0, 5200]], [[220002, 583169], [1830, 2]], [[221832, 583171], [2, -5231], [90, -3231]], [[178690, 564853], [-400, 43], [-118, -1893], [-229, -480], [-675, 326], [-47, 1381], [-616, 5246], [-699, -1924], [-111, 1019]], [[175795, 568571], [2, 5341]], [[175797, 583199], [3677, -7]], [[220105, 574717], [-364, -11]], [[219741, 574706], [-362, -1], [-1, 1625], [-1819, 10], [0, -1619]], [[217559, 574721], [-1091, 11], [0, 3239], [-126, 10], [-2, 5191]], [[216340, 583172], [3662, -3]], [[186538, 583158], [27, -9701]], [[186565, 573457], [-1094, 108], [-10, -3230], [-2142, 5]], [[181317, 583162], [5221, -4]], [[193947, 567081], [-536, -46], [0, 1653], [-331, -44], [0, 1618], [-2172, 10], [0, -1617], [-363, 1]], [[190545, 568656], [35, 14501]], [[190580, 583157], [3492, 32]], [[194072, 583189], [-44, -7981], [114, -2218], [-241, -2960], [46, -2949]], [[195740, 559621], [-133, 1040], [-935, 56], [-433, -1362], [-302, 349]], [[193937, 559704], [10, 7377]], [[194072, 583189], [3492, -14]], [[206421, 583169], [52, -6498], [182, -1619]], [[206655, 575052], [-2315, 1]], [[203483, 583172], [2938, -3]], [[228231, 583191], [207, -4516], [166, -1312], [-187, -2686]], [[228417, 574677], [-2130, 0]], [[226287, 574677], [-64, 8514]], [[226223, 583191], [2008, 0]], [[230526, 583183], [49, -8486]], [[230575, 574697], [-2158, -20]], [[228231, 583191], [2295, -8]], [[223380, 574697], [-1, -3219], [-639, -11]], [[222740, 571467], [-816, 5]], [[221924, 571472], [0, 3237]], [[221832, 583171], [1466, 10]], [[223298, 583181], [0, -5246], [82, -3238]], [[226287, 574677], [-1090, 12]], [[225197, 574689], [-1817, 8]], [[223298, 583181], [2925, 10]], [[168030, 583185], [-42, -19407]], [[167988, 563778], [-338, -263]], [[167650, 563515], [-25, 344]], [[167625, 563859], [88, 1055], [-308, 2219], [-250, 148], [-800, -1281], [-586, -1451], [-103, 1727], [-570, -649], [55, -1799]], [[165151, 563828], [-497, 4], [-264, 1945], [-610, 1930], [-82, 1382], [-532, 1416], [-331, 3958]], [[162835, 574463], [-140, 2344]], [[162416, 583189], [2209, -16], [3405, 12]], [[171950, 583192], [-373, -3049], [-182, -3367], [361, 7], [-7, -9706], [182, -1632]], [[171931, 565445], [-274, 12], [-1, -4693], [-435, 1680], [-361, -1132]], [[170860, 561312], [-165, 418], [-548, -890], [-372, 2707], [-363, -947]], [[169412, 562600], [-132, 2358], [406, 757], [-5, 1210], [289, 2381], [-187, 3288], [317, 4420], [-332, 3951], [45, 2218]], [[169813, 583183], [2137, 9]], [[173055, 580325], [-26, -14911]], [[173029, 565414], [-1098, 31]], [[171950, 583192], [1105, -24]], [[169412, 562600], [-45, -983], [-485, 620], [-109, 1069], [-446, -598], [-339, 1070]], [[168030, 583185], [1783, -2]], [[188725, 567028], [0, 1623]], [[188725, 568651], [374, 0], [10, 14481]], [[189109, 583132], [1471, 25]], [[190545, 568656], [-199, -1611], [-1621, -17]], [[212324, 583169], [-3, -5174], [149, -1639]], [[212470, 576356], [-3237, 14]], [[209233, 576370], [-1, 6810]], [[209232, 583180], [3092, -11]], [[214880, 583162], [-1, -3570]], [[214879, 579592], [-364, -1], [-2, -1615], [-225, 0], [0, -3239]], [[214288, 574737], [-1816, 1]], [[212472, 574738], [-2, 1618]], [[212324, 583169], [2556, -7]], [[186538, 583158], [2571, -26]], [[188725, 568651], [-718, -1], [2, 2422], [-362, 805], [-543, 29], [-82, 1076], [-457, 475]], [[217559, 574721], [0, -1621]], [[217559, 573100], [-2179, 20], [-1, 4853], [-499, 6], [-1, 1613]], [[214880, 583162], [1460, 10]], [[233488, 574623], [-724, -26]], [[232764, 574597], [-2189, 100]], [[230526, 583183], [3019, -20]], [[233545, 583163], [240, -2188], [403, 729], [4, -3863], [-704, -3], [0, -3215]], [[209233, 576370], [4, -4555]], [[209237, 571815], [-1620, -3], [0, 1622], [-361, 4], [0, 1612], [-601, 2]], [[206421, 583169], [2811, 11]], [[175795, 568571], [0, -4402]], [[175795, 564169], [-503, 1656], [-279, -929], [19, -2373]], [[175032, 562523], [-509, -3], [4, 1886], [-1500, -263]], [[173027, 564143], [2, 1271]], [[217559, 573100], [127, -1619], [-3, -6492], [125, -2], [-3, -3239]], [[217805, 561748], [-2509, -19]], [[215296, 561729], [1, 3269], [-141, 0], [0, 6485], [-143, 10], [1, 3259], [-726, -15]], [[156776, 574866], [145, -2337], [-336, 700], [191, 1637]], [[156017, 576188], [369, -1160], [-55, -1922], [-274, 764], [-40, 2318]], [[156711, 577873], [437, -1001], [-571, -1183], [-175, 1059], [309, 1125]], [[239768, 576252], [-26, -7172], [45, -6527]], [[239787, 562553], [-1934, 131], [-2, -977], [-1789, -11]], [[236062, 561696], [-28, 9709]], [[236034, 571405], [-5, 6210]], [[236029, 577615], [339, 174], [234, -1133], [1049, -347], [153, -2131], [908, 561], [5, 841], [718, 948], [333, -276]], [[157403, 572219], [-141, 1501], [247, 575], [362, -1247], [-15, 3533]], [[162835, 574463], [-341, 252], [-585, -931], [-105, -3299], [196, -417]], [[162000, 570068], [-3852, 30]], [[158148, 570098], [-745, 2121]], [[212472, 574738], [0, -3235], [160, 6], [-1, -4641]], [[212631, 566868], [-1041, 215], [-260, -1783], [-494, -877], [-372, 2569], [-383, -709], [-219, -2110], [-619, 322]], [[209243, 564495], [-6, 7320]], [[219741, 574706], [109, -3229], [1, -6504], [110, 0], [-1, -3243]], [[219960, 561730], [-1079, -3]], [[218881, 561727], [-1076, 21]], [[243362, 568345], [29, -12216], [-17, -11281]], [[243374, 544848], [-834, -2841], [-305, -2384]], [[242235, 539623], [-250, 56]], [[241985, 539679], [-25, 1880], [-2117, 44]], [[239843, 541603], [15, 4838]], [[239858, 546441], [-15, 12916], [-56, 3196]], [[239768, 576252], [1003, -1645], [260, 60], [-216, -1482], [572, -281], [382, -4206], [280, 489], [20, 1987], [576, 81], [136, -1748], [581, -1162]], [[209243, 564495], [-257, 1115], [-593, -179], [-307, 1362], [-1057, 19], [-145, 560], [-288, -1582], [-558, -1]], [[206038, 565789], [-93, 497], [-752, 103], [-964, -1631]], [[165151, 563828], [-359, -3363], [-515, -331], [-140, -2995], [-194, -1515], [49, -2367], [561, -1042], [-26, -1385]], [[164527, 550830], [-822, -17], [-769, 1527], [-382, 1476], [-339, 201], [-528, 3049]], [[161687, 557066], [130, 2031], [-145, 1372]], [[161672, 560469], [136, 875], [-308, 1331], [76, 2649], [386, 643], [303, 1649], [-265, 2452]], [[215296, 561729], [-1431, 3], [-1, -1673]], [[213864, 560059], [-714, 1225]], [[213150, 561284], [-16, 1451], [265, 1805], [-308, 1453], [-460, 875]], [[232764, 574597], [24, -6811]], [[232788, 567786], [-2527, 20]], [[230261, 567806], [-1798, -6]], [[228463, 567800], [13, 368]], [[228476, 568168], [71, 2440], [-130, 4069]], [[221924, 571472], [-985, 7], [-4, -6507], [100, -3249]], [[221035, 561723], [-716, 0]], [[220319, 561723], [-359, 7]], [[223962, 564053], [0, 0]], [[225197, 574689], [73, -6488]], [[225270, 568201], [-362, -8], [-2, -3234], [-287, 1], [0, -1975]], [[224619, 562985], [-263, 25], [-571, 2718], [-293, -1216], [-752, 3113], [0, 3842]], [[228476, 568168], [-2123, 27]], [[226353, 568195], [-1083, 6]], [[236062, 561696], [6, -7465]], [[236068, 554231], [0, -615], [-707, -31]], [[235361, 553585], [-1430, 49]], [[233931, 553634], [-30, 8560], [-224, 1564], [126, 1180], [-985, 11]], [[232818, 564949], [-30, 2837]], [[233488, 574623], [363, -5], [2, -3239], [2181, 26]], [[188725, 567028], [1, -2703]], [[188726, 564325], [-1602, -42], [-179, 1901], [-363, 820], [-2337, 28]], [[158090, 569229], [27, -389]], [[158117, 568840], [-233, -1009], [277, -1641], [-369, 861], [-55, 2155], [353, 23]], [[157569, 571941], [242, -1775], [-417, -309], [-219, -1057], [350, -341], [185, -3596], [45, 1501], [415, -1154], [-3, -2382], [-641, 2318], [-19, 2344], [-435, 1258], [298, 3297], [199, -104]], [[156635, 565779], [-61, -3686], [-1563, -8], [-1, 265], [-3066, -4]], [[151944, 562346], [-337, 5363], [261, 4074], [686, -1863], [395, -423], [749, -1863], [763, 57], [868, -996], [776, 702], [530, -1618]], [[224619, 562985], [0, -1281]], [[224619, 561704], [-2150, 10]], [[222469, 561714], [-1434, 9]], [[193937, 559704], [-803, -421], [-50, -3213], [-1029, -2364]], [[192055, 553706], [-1186, -7]], [[190869, 553699], [-361, 553], [1, 1468], [-266, 4], [-518, 1364], [205, 1866], [-1205, -6]], [[188725, 558948], [1, 5377]], [[161672, 560469], [-3555, -37]], [[158117, 560432], [249, 3191], [302, 1598], [-409, 1180], [-142, 2439]], [[158090, 569229], [58, 869]], [[179823, 560649], [58, -3498], [649, 4], [-91, -2233], [239, 252], [-155, -1950], [417, -649], [44, -4054]], [[180984, 548521], [-292, -236], [-171, 1187], [-552, 1163], [-685, 298]], [[179284, 550933], [-477, 836], [-38, 1569], [-836, 1676], [-964, -135]], [[176969, 554879], [-353, 1336], [183, 799], [-97, 1863], [-282, 1074], [-625, 4218]], [[245498, 568091], [24, -13480]], [[245522, 554611], [-1265, -6316], [-883, -3447]], [[243362, 568345], [243, -1594], [423, -163], [-23, -1208], [886, 751], [607, 1960]], [[226353, 568195], [59, -3242], [-1, -6490]], [[226411, 558463], [-285, 2]], [[226126, 558465], [-1436, 0]], [[224690, 558465], [-71, 3239]], [[228463, 567800], [349, -5610], [345, -3679]], [[229157, 558511], [-1604, -50]], [[227553, 558461], [-1142, 2]], [[230261, 567806], [50, -3919]], [[230311, 563887], [2, -2161], [360, -5], [3, -1615], [1434, 5], [0, 1629], [356, 6], [-1, 1625]], [[232465, 563371], [355, -35]], [[232820, 563336], [78, -8072]], [[232898, 555264], [-1430, -21]], [[231468, 555243], [-2183, 14]], [[229285, 555257], [-128, 3254]], [[232818, 564949], [2, -1613]], [[232465, 563371], [-1, 530], [-2153, -14]], [[209243, 564495], [-2, -11146]], [[209241, 553349], [-241, -807], [-804, 9]], [[208196, 552551], [-259, 2], [1, 3249], [-225, -6], [0, 1620], [-1072, 7], [1, 1621], [-715, 4], [0, 1623]], [[205927, 560671], [111, 1441], [0, 3677]], [[167625, 563859], [-339, -5], [-302, -1380], [0, -1619], [-240, -1347], [-120, -2159], [-533, -1577], [-2, -1607], [-954, -85], [-359, -2172], [-6, -1862]], [[164770, 550046], [-243, 784]], [[213150, 561284], [-1, -2790], [-1274, 11], [2, -6437]], [[211877, 552068], [-1582, 13]], [[210295, 552081], [-1054, 15]], [[209241, 552096], [0, 1253]], [[156465, 557234], [-1439, 16], [0, -1664]], [[155026, 555586], [-1512, 9], [-856, 299]], [[152658, 555894], [-216, 4014], [-498, 2438]], [[156635, 565779], [272, 1293], [567, -4577], [-189, -394], [-250, -3034], [-106, 2479], [-246, -3231], [-218, -1081]], [[188725, 558948], [-718, -7], [0, -1612], [-713, 3], [0, -1972], [-347, 194]], [[186947, 555554], [-644, -185], [-425, 1863], [-410, 507], [-656, -490], [-280, 1680], [5, 2406], [-202, 2374]], [[205927, 560671], [-357, -7], [-2, -4859], [-120, -3], [1, -6473]], [[205449, 549329], [-1188, -10], [0, -1637], [-355, -3], [0, 1642], [-353, -3]], [[203553, 549318], [-233, 0], [-1, 3235], [-355, -6], [104, 3250], [0, 6318], [-271, 1], [-169, 1657]], [[176969, 554879], [-257, -1008], [472, -1408], [61, -942], [526, -680], [549, -2997], [262, -2458], [252, -687]], [[178834, 544699], [-3821, 29]], [[175013, 544728], [0, 1637]], [[175013, 546365], [0, 7285]], [[175013, 553650], [19, 8873]], [[182526, 557117], [-825, -27], [-59, -2279], [224, -1574], [136, -3906], [-311, -809], [-707, -1]], [[173027, 564143], [7, -11380]], [[173034, 552763], [0, -1987]], [[173034, 550776], [-2182, 21]], [[170852, 550797], [8, 10515]], [[233931, 553634], [40, -4845]], [[233971, 548789], [-1065, -20]], [[232906, 548769], [-8, 6495]], [[175013, 553650], [-714, 17], [-121, -799], [-1144, -105]], [[203553, 549318], [1, -5970]], [[203554, 543348], [0, -266]], [[203554, 543082], [-1766, -14], [-2, 268], [-3263, -151]], [[198523, 543185], [-142, 488], [173, 2153], [-209, 2561], [-11, 4245], [143, 1707]], [[167650, 563515], [-17, -12698]], [[167633, 550817], [-9, -6519], [-1076, 22], [-2, -3262]], [[166546, 541058], [-233, -1080]], [[166313, 539978], [-188, 856], [-294, -1494], [-691, -305]], [[165140, 539035], [-275, 2021]], [[164865, 541056], [127, 1140], [-311, 5066], [89, 2784]], [[170852, 550797], [-379, 1]], [[170473, 550798], [-2840, 19]], [[186947, 555554], [7, -6012], [711, -1191], [-2, -4004], [368, -12]], [[188031, 544335], [35, -1328], [411, -1480]], [[188477, 541527], [-392, -450], [14, -3149], [-430, -3]], [[187669, 537925], [-672, 2], [-784, -2757]], [[186213, 535170], [46, 3441], [-325, 1748], [-347, -22], [-1, 2529], [-723, -49], [-4, 6432], [-731, 40], [-1, 5728], [-238, 2035]], [[157723, 558952], [153, -2102], [-264, 243], [111, 1859]], [[157679, 553459], [-209, 2]], [[157470, 553461], [-20, -1]], [[157450, 553460], [-465, 11]], [[156985, 553471], [3, 2162], [-620, 2]], [[156368, 555635], [296, 1874], [455, 872], [193, 2437], [440, 2119], [103, -3144], [-199, 149], [-132, -3408], [312, -1093], [-157, -1982]], [[239858, 546441], [-2005, 75]], [[237853, 546516], [-4, 4597], [-696, 1379], [-254, 2407], [-570, -1212], [-261, 544]], [[218881, 561727], [0, -3233], [-241, 6], [-5, -6449]], [[218635, 552051], [-211, -1], [0, -3173], [-602, -11]], [[217822, 548866], [-252, 2539], [-561, -512]], [[217009, 550893], [-256, 567], [-258, 3108], [38, 1844], [-853, -555], [-222, -664], [-1091, 1452]], [[214367, 556645], [-155, 784], [-3, 3079], [-345, -449]], [[224690, 558465], [0, -1585]], [[224690, 556880], [-2133, 9]], [[222557, 556889], [-88, 4825]], [[222557, 556889], [-1, -4848]], [[222556, 552041], [-598, -4]], [[221958, 552037], [-1539, 4]], [[220419, 552041], [1, 6448], [-101, 3234]], [[220419, 552041], [-222, 0]], [[220197, 552041], [-1562, 10]], [[214367, 556645], [0, -4588], [169, 0], [0, -5915]], [[214536, 546142], [-1061, -2], [0, -539], [-1412, -13]], [[212063, 545588], [-1, 6480], [-185, 0]], [[197352, 556810], [-7, -4998], [-769, -161], [-357, -670], [-49, -3205], [357, -5], [-62, -6487]], [[196465, 541284], [-1055, 22]], [[195410, 541306], [-1057, 8], [-1, -1068]], [[194352, 540246], [-993, 3]], [[193359, 540249], [-235, 2015], [207, 1753], [-4, 5387], [-1033, 1609], [0, 1620], [-239, 1073]], [[208196, 552551], [219, -2029], [101, -3785], [-297, -2572], [-534, -806]], [[207685, 543359], [-1181, 12], [-117, 1073], [-356, 1], [2, 1079], [-357, 1], [0, 3802], [-227, 2]], [[157999, 553531], [-252, -1157], [151, 3089], [101, -1932]], [[161687, 557066], [-282, -524], [-596, -2845], [-98, -1165], [461, -3837], [-227, -1130]], [[160945, 547565], [-1159, 1606], [-393, -641], [-440, 1039], [-133, 1180], [-534, 2], [-232, 1165]], [[158054, 551916], [259, 527], [-269, 4234], [225, 530], [-270, 1061], [118, 2164]], [[190869, 553699], [0, -1066], [-356, 2], [-14, -4901], [354, -2], [-21, -5066]], [[190832, 542666], [-725, 2921], [-441, 463], [-27, 1539], [-216, -1426], [-1062, -215], [0, -1611], [-330, -2]], [[227553, 558461], [-3, -6470], [62, -1591]], [[227612, 550400], [-709, 17]], [[226903, 550417], [-711, 10]], [[226192, 550427], [-71, 1593], [5, 6445]], [[226192, 550427], [-1412, -1]], [[224780, 550426], [-88, 1602]], [[224692, 552028], [-2, 4852]], [[229285, 555257], [53, -4884]], [[229338, 550373], [-1726, 27]], [[156465, 557234], [-97, -1599]], [[156985, 553471], [-2, -836]], [[156983, 552635], [-348, -1456], [-55, -1447], [-358, -1953]], [[156222, 547779], [-353, -249]], [[155869, 547530], [-800, -41], [-43, 8097]], [[182993, 557119], [1, -7838], [455, 9], [-1, -6466]], [[183448, 542824], [-493, -547], [0, -1076], [-524, -538], [2, -1074], [-447, 50]], [[181986, 539639], [-1407, -5]], [[180579, 539634], [-732, -499]], [[179847, 539135], [-221, 1916]], [[179626, 541051], [351, 195], [-48, 4029], [320, 548], [-90, 1380], [-636, 2137], [-239, 1593]], [[186213, 535170], [-690, -2887]], [[185523, 532283], [-1334, 17]], [[184189, 532300], [-5, 8737], [-215, -420], [-521, 2207]], [[198523, 543185], [180, -1781]], [[198703, 541404], [-2238, -120]], [[164865, 541056], [-1495, 17], [1, 1610], [-349, 24], [-1, 1604], [-1091, -12], [-177, 1484], [-533, 1821], [-275, -39]], [[224692, 552028], [-2136, 13]], [[217009, 550893], [-2, -451], [-1411, -2], [0, -4839]], [[215596, 545601], [-928, -4]], [[214668, 545597], [-132, 545]], [[155869, 547530], [121, -1651], [-6, -3777]], [[155984, 542102], [-587, -23]], [[155397, 542079], [-2025, 38]], [[153372, 542117], [-109, 2053], [252, -203], [623, 1196], [-914, 1191], [-230, 4847], [-241, 1362], [-95, 3331]], [[232906, 548769], [-1437, 4]], [[231469, 548773], [-1, 6470]], [[231469, 548773], [-356, -11]], [[231113, 548762], [-1799, -4]], [[229314, 548758], [24, 1615]], [[179626, 541051], [-762, 2278], [-30, 1370]], [[237853, 546516], [-1, -4237]], [[237852, 542279], [-1579, 50], [42, -9604], [-40, -224]], [[236275, 532501], [-230, 1008], [-307, -540], [-331, 855]], [[235407, 533824], [-217, 373]], [[235190, 534197], [-133, 485], [-22, 7620]], [[235035, 542302], [354, -12], [-28, 11295]], [[310206, 521388], [-674, -757]], [[309532, 520631], [-1071, -1126], [-11, 14937], [-1066, 257]], [[307384, 534699], [-8, 3291], [-2505, 26]], [[304871, 538016], [-841, 2]], [[304030, 538018], [72, 2263], [2153, 14229], [505, -617], [6, -3382], [393, -1252], [815, 1288], [76, 747], [564, 5], [41, 1253], [358, 12], [783, -2953], [455, -2410], [25, -20921], [-70, -4892]], [[193359, 540249], [-621, 1062], [-849, -749]], [[191889, 540562], [-515, -597], [-542, 2701]], [[175013, 546365], [-1409, 188], [-569, 1764]], [[173035, 548317], [-1, 2459]], [[235035, 542302], [-1048, 14]], [[233987, 542316], [-16, 6473]], [[160945, 547565], [-213, -3054], [-186, -929], [190, -1670]], [[160736, 541912], [-847, 12], [-205, -1040], [-1032, 653]], [[158652, 541537], [-352, 1508], [-447, 420], [-411, 2054], [-166, 2243]], [[157276, 547762], [314, 1630], [141, 2452], [323, 72]], [[157679, 553459], [-93, -2778], [-243, 609], [127, 2171]], [[157450, 553460], [-258, -1217], [-95, -3180], [-196, 1414], [82, 2158]], [[209241, 552096], [0, -12822]], [[209241, 539274], [-860, 0], [-178, 809], [-527, 0]], [[207676, 540083], [9, 3276]], [[212063, 545588], [-553, -13], [-2, -6517]], [[211508, 539058], [-1052, -1]], [[210456, 539057], [-1, 6518], [-160, -2], [0, 6508]], [[210456, 539057], [-534, -4], [0, -1653], [-681, 3]], [[209241, 537403], [0, 1871]], [[221958, 552037], [-1, -6447], [97, 4], [-9, -6501]], [[222045, 539093], [-1299, 22]], [[220746, 539115], [-461, 8]], [[220285, 539123], [17, 6481], [-110, 4], [5, 6433]], [[224780, 550426], [0, -4857], [79, 2], [1, -6489]], [[224860, 539082], [-1666, -10]], [[223194, 539072], [-1149, 21]], [[220285, 539123], [-1617, 19]], [[218668, 539142], [-334, 973], [-96, 2185], [-334, 3330]], [[217904, 545630], [152, 619], [-234, 2617]], [[217904, 545630], [-2308, -29]], [[170473, 550798], [4, -6433], [-150, -2316], [-550, -960]], [[169777, 541089], [-3231, -31]], [[173035, 548317], [0, -10900]], [[173035, 537417], [-1, -2156]], [[173034, 535261], [-434, -110], [-90, 788]], [[172510, 535939], [-70, 1545], [-616, 2886], [-768, -191], [-281, -1215]], [[170775, 538964], [-895, -1263], [-119, 595]], [[169761, 538296], [16, 2793]], [[226903, 550417], [68, -4869], [-1, -6486]], [[226970, 539062], [-981, 13]], [[225989, 539075], [-1129, 7]], [[229314, 548758], [6, -2653], [212, -1370], [-110, -2549], [11, -3116]], [[229433, 539070], [-1343, -23]], [[228090, 539047], [-1120, 15]], [[158652, 541537], [-2669, 25], [1, 540]], [[156222, 547779], [372, 1367], [-166, -1817], [271, 11], [248, 1910], [329, -1488]], [[207676, 540083], [-351, -1345]], [[207325, 538738], [-350, -3], [-351, -1338], [-710, 7], [-585, 557], [-127, 1620], [-225, -2], [-117, 3244], [-599, 530], [-707, -5]], [[233987, 542316], [-2, -1623]], [[233985, 540693], [-2816, 3]], [[231169, 540696], [-56, 8066]], [[231169, 540696], [6, -1622], [-302, 3]], [[230873, 539077], [-1399, -8]], [[229474, 539069], [-41, 1]], [[175013, 544728], [0, -5709], [-352, 23]], [[174661, 539042], [-461, -3], [-274, -1605], [-891, -17]], [[165140, 539035], [21, -10945]], [[165161, 528090], [-2024, 0], [-2594, 63]], [[160543, 528153], [2, 6416]], [[160545, 534569], [358, 11], [-157, 2684], [251, 3313], [-261, 1335]], [[191889, 540562], [-24, -9124]], [[191865, 531438], [0, -676]], [[191865, 530762], [-1399, 152]], [[190466, 530914], [-776, 9]], [[189690, 530923], [-179, 1516], [195, 2305], [-474, 570], [-329, 2182], [-426, 4031]], [[239843, 541603], [18, -6465]], [[239861, 535138], [3, -4862]], [[239864, 530276], [-1053, -77]], [[238811, 530199], [4, 1716], [-1019, -55]], [[237796, 531860], [-43, 6341], [94, 109], [5, 3969]], [[251183, 535146], [2, -1610]], [[251185, 533536], [-1045, -6], [0, 3216], [-1045, -7], [1, 1617], [-346, 11], [-67, 3223]], [[248683, 541590], [281, 994], [1035, 453], [493, 1189], [335, 1615], [517, 690]], [[251344, 546531], [2, -4942], [190, -1609], [-348, 14], [-5, -4848]], [[214668, 545597], [2, -4902]], [[214670, 540695], [0, -1615]], [[214670, 539080], [-2316, -18]], [[212354, 539062], [-846, -4]], [[218668, 539142], [261, -751], [-62, -3094]], [[218867, 535297], [-369, -882], [-548, 257], [-360, -2040]], [[217590, 532632], [0, 1615], [-699, 1], [0, 4816], [-1165, 16], [-2, 1619], [-1054, -4]], [[253820, 544308], [0, -2727], [148, -1606], [-346, -14], [-2, -4817]], [[253620, 535144], [-1569, 10]], [[252051, 535154], [2, 8036], [354, 0], [-2, 1614], [282, 9]], [[252687, 544813], [-46, -3488], [634, 3347], [545, -364]], [[179847, 539135], [-2885, -2989], [-517, -3856], [-988, 1959]], [[175457, 534249], [-555, 1774]], [[174902, 536023], [-221, 561], [-20, 2458]], [[207325, 538738], [0, -2428], [-482, -1], [56, -6431]], [[206899, 529878], [-149, -3], [0, -6509], [-119, 1]], [[206631, 523367], [-3371, 30]], [[203260, 523397], [1, 6486], [107, 4], [-6, 6446], [97, 2], [-1, 6474], [96, 273]], [[203260, 523397], [-118, -6], [-3, -8127], [-123, -27], [0, -3172]], [[203016, 512065], [-1361, -4], [-1, 3223], [108, -21], [0, 5981], [-511, 207], [99, 2748], [-172, 715]], [[201178, 524914], [0, 4963], [-190, -48], [-58, 4865], [-349, 2], [-59, 1616], [-1571, -11]], [[198951, 536301], [-119, 265]], [[198832, 536566], [-129, 4838]], [[184189, 532300], [0, -815], [-687, -6], [16, -3297], [-667, -1968]], [[182851, 526214], [-255, 180], [-219, 1599], [-324, 48], [141, 1391], [-197, 1673], [207, 1276], [-352, 4420], [134, 2838]], [[235190, 534197], [-1182, 4]], [[234008, 534201], [-23, 6492]], [[237796, 531860], [-40, -1612]], [[237756, 530248], [-1573, 9], [92, 2244]], [[155397, 542079], [36, -7597]], [[155433, 534482], [-1025, 26], [-5, -1764]], [[154403, 532744], [-414, -941], [-400, 1402], [-173, -854], [164, 5827], [40, -3886], [155, 66], [162, 3197], [-179, 1201], [336, 1944], [-445, -236], [-277, 1653]], [[160545, 534569], [-1999, -62]], [[158546, 534507], [-2722, -5]], [[155824, 534502], [-391, -20]], [[189690, 530923], [-791, -90], [-193, -3456], [-681, -3144]], [[188025, 524233], [-1, 4020], [-345, 10], [-10, 9662]], [[241985, 539679], [-1, -4579]], [[241984, 535100], [-2123, 38]], [[251185, 533536], [-1, -4393]], [[251184, 529143], [-281, 767], [-2333, 3002], [1, -218]], [[248571, 532694], [-534, 910], [-308, 3219], [-519, 1035]], [[247210, 537858], [1092, 2058], [381, 1674]], [[198832, 536566], [-2, -1875], [-408, 1], [-282, -2448], [-811, 5], [-234, -521], [0, -1926], [-1045, -3]], [[196050, 529799], [2, 2685], [-229, 1641], [-122, 3955], [-232, 24], [-59, 3202]], [[261640, 541399], [0, -9498]], [[261640, 531901], [-1747, -14]], [[259893, 531887], [0, 4842]], [[259893, 536729], [1, 3447]], [[259894, 540176], [1066, -173], [680, 1396]], [[196050, 529799], [-402, -5]], [[195648, 529794], [-1369, 1], [-5, -1634]], [[194274, 528161], [-523, 16], [-137, 3240]], [[193614, 531417], [700, 2], [38, 8827]], [[193614, 531417], [-1749, 21]], [[169761, 538296], [-37, 88]], [[169724, 538384], [-624, 62], [-453, -1720], [-56, -1736], [-390, -2246], [-741, -1822]], [[167460, 530922], [-633, 1584], [-9, 4567], [-505, 2905]], [[167460, 530922], [206, -1169], [-54, -2423]], [[167612, 527330], [-389, -1248], [-851, -271]], [[166372, 525811], [-389, 134], [-274, -1277], [-552, -389]], [[165157, 524279], [4, 3811]], [[234008, 534201], [28, -4881]], [[234036, 529320], [-1740, 13]], [[232296, 529333], [-1379, 22]], [[230917, 529355], [-44, 9722]], [[217590, 532632], [-397, -2553], [-436, -1342], [-920, -1191], [-478, 1151], [-416, -370]], [[214943, 528327], [2, 2829]], [[214945, 531156], [-136, 1457], [-12, 6465], [-127, 2]], [[172510, 535939], [1, -949], [-532, -522], [0, -4866], [-168, 2], [-1, -2312]], [[171810, 527292], [-342, 20]], [[171468, 527312], [-25, 6322], [-176, -17], [-173, 2491], [-351, -8], [32, 2864]], [[209241, 537403], [-2, -4854]], [[209239, 532549], [2, -6235]], [[209241, 526314], [2, -1180]], [[209243, 525134], [-251, 2], [0, 1618], [-714, 26], [2, 1575], [-351, -6], [1, 1522], [-1031, 7]], [[180579, 539634], [-28, -2628], [-263, -4539], [-67, -3326], [-131, -1223], [266, -995], [5, -2349], [-248, -34], [-188, -1419], [189, -1950], [-181, -2073]], [[179933, 519098], [-282, -1615], [-344, 765], [-14, -1409], [527, -2617], [-251, -1839]], [[179569, 512383], [-3571, -26], [-469, -1641]], [[175529, 510716], [-390, 424], [-163, 2563], [-956, -4]], [[174020, 513699], [363, 4439], [257, 2020], [-236, 2561], [-686, 1931]], [[173718, 524650], [258, 2609]], [[173976, 527259], [447, 45], [75, 2435], [241, 1362], [664, -891], [157, 1127], [336, 203], [-439, 2709]], [[182851, 526214], [3, -24]], [[182854, 526190], [-34, -1070], [-471, -700], [-670, -2752]], [[181679, 521668], [-945, -3980], [-193, -399], [-349, 1947], [-259, -138]], [[220746, 539115], [-2, -6512], [106, -6]], [[220850, 532597], [-5, -6355]], [[220845, 526242], [-1760, 43]], [[219085, 526285], [-327, 3734], [197, 1955], [-88, 3323]], [[223194, 539072], [-1, -6466]], [[223193, 532606], [-2343, -9]], [[174902, 536023], [1, -2307], [-958, -325], [31, -6132]], [[173718, 524650], [-339, 2599]], [[173379, 527249], [-121, 1925], [103, 1310], [-372, 3279], [45, 1498]], [[212354, 539062], [9, -6488]], [[212363, 532574], [-197, -15]], [[212166, 532559], [-2927, -10]], [[225989, 539075], [-2, -6478]], [[225987, 532597], [-2698, 1]], [[223289, 532598], [-96, 8]], [[214945, 531156], [-1392, 13], [0, 1436], [-1190, -31]], [[230917, 529355], [-1, -1621]], [[230916, 527734], [-866, 4]], [[230050, 527738], [45, 1765], [-114, 3994], [-380, 2927], [-127, 2645]], [[228090, 539047], [-2, -6458]], [[228088, 532589], [-2023, 4]], [[226065, 532593], [-78, 4]], [[230050, 527738], [35, -1611]], [[230085, 526127], [-1851, -1]], [[228234, 526126], [-88, 1154], [-58, 5309]], [[171468, 527312], [-1044, 34]], [[170424, 527346], [-54, 1]], [[170370, 527347], [16, 3854], [-349, 1], [1, 1631], [-349, -7], [35, 5558]], [[170370, 527347], [-2758, -17]], [[248571, 532694], [0, -5697], [-321, -1]], [[248250, 526996], [-719, -11]], [[247531, 526985], [-4, 3230], [-342, -15], [1, 1609], [-352, 7], [6, 6373]], [[246840, 538189], [370, -331]], [[304871, 538016], [-24, -11134], [233, -2084], [-240, -2015], [-258, -235], [344, -2134], [-221, -1594], [445, -9901], [739, 1165]], [[305889, 510084], [248, -6545]], [[306137, 503539], [-330, 592], [-241, -1132]], [[305566, 502999], [-450, 139], [79, -2295], [-907, 627]], [[304288, 501470], [-183, 1242], [-102, 3479], [-276, -237], [62, 1778], [-139, 3375], [-376, -344], [-347, 651], [-372, 9720]], [[302555, 521134], [466, 1248], [-87, 1100], [431, 1782], [-152, 2424], [219, 2372], [-153, 837], [286, 2948], [372, 1242], [93, 2931]], [[307384, 534699], [-16, -13241], [-374, -415], [-14, -2791], [297, 275], [227, -5337], [-292, -285], [68, -1531], [-1391, -1290]], [[188025, 524233], [-403, -668]], [[187622, 523565], [-350, 1102], [-489, -286], [-234, -1731]], [[186549, 522650], [-588, 1548], [-293, 6521], [-197, -56]], [[185471, 530663], [52, 1620]], [[259893, 531887], [-1, -5145]], [[259892, 526742], [-133, -900], [-413, 823], [-697, -828], [-157, -2486], [-258, -540]], [[258234, 522811], [-83, 2591], [0, 4874], [-349, 11]], [[257802, 530287], [0, 3250], [698, -25], [0, 3238], [1393, -21]], [[198951, 536301], [351, -3236], [408, -2428], [-126, -2499]], [[199584, 528138], [-455, 7], [0, -1079], [-344, 0], [-232, -1614], [-462, 6], [-62, -7075], [-689, -1094], [-914, 67]], [[196426, 517356], [-551, 2735]], [[195875, 520091], [-174, 1329], [10, 5161], [-63, 3213]], [[201178, 524914], [-660, 1614], [-693, 2], [0, 1610], [-241, -2]], [[173379, 527249], [-1569, 43]], [[219085, 526285], [-4142, 17]], [[214943, 526302], [0, 2025]], [[253620, 535144], [-3, -3220]], [[253617, 531924], [2, -6051]], [[253619, 525873], [-836, 1000], [-325, 853], [-417, -133]], [[252041, 527593], [-695, 1110]], [[251346, 528703], [-162, 440]], [[251183, 535146], [868, 8]], [[241984, 535100], [-2, -4839]], [[241982, 530261], [-158, -2624], [-996, -2261], [-371, -3070]], [[240457, 522306], [-838, 12]], [[239619, 522318], [-4, 4660], [246, 5], [3, 3293]], [[309532, 520631], [304, -6938], [-325, -225]], [[309511, 513468], [-690, -627], [93, -2259], [-353, -313], [61, -1593], [-355, -304], [157, -4050], [-1023, -1482]], [[307401, 502840], [-7, -12]], [[307394, 502828], [-61, 339], [-964, -1078], [-232, 1450]], [[160543, 528153], [-247, -4], [11, -4865], [240, -1077]], [[160547, 522207], [-794, -346], [-319, -1061]], [[159434, 520800], [-911, -1888]], [[158523, 518912], [10, 9425]], [[158533, 528337], [13, 6170]], [[158533, 528337], [-318, -1796], [-455, 496], [-600, -1309], [-131, -1178]], [[157029, 524550], [-330, 4340], [-600, 1895], [-259, -236]], [[155840, 530549], [-3, 55]], [[155837, 530604], [-13, 3898]], [[155837, 530604], [-182, -462], [-495, 2189], [-757, 413]], [[235407, 533824], [27, -10700]], [[235434, 523124], [-1382, -10]], [[234052, 523114], [-16, 6206]], [[237756, 530248], [0, -3231], [116, -10], [14, -2987]], [[237886, 524020], [-1641, -1], [225, -871]], [[236470, 523148], [-1036, -24]], [[251026, 525384], [-2774, 33]], [[248252, 525417], [-2, 1579]], [[251346, 528703], [-2, -1704], [-318, 1], [0, -1616]], [[155418, 529962], [8, -6731]], [[155426, 523231], [-1689, 62]], [[153737, 523293], [-68, 3038], [184, 1181], [-261, 4092], [308, -881], [393, 424], [492, -351], [260, 901], [373, -1735]], [[214943, 526302], [-5, -2]], [[214938, 526300], [-2623, 9]], [[212315, 526309], [-151, 2]], [[212164, 526311], [2, 6248]], [[228234, 526126], [-2092, 12]], [[226142, 526138], [-81, 1]], [[226061, 526139], [4, 6454]], [[223289, 532598], [-7, -6387]], [[223282, 526211], [-1985, 21]], [[221297, 526232], [-452, 10]], [[226061, 526139], [-1995, 51]], [[224066, 526190], [-784, 21]], [[212164, 526311], [-2923, 3]], [[185471, 530663], [-559, -802], [0, -1628], [-448, -1027], [40, -1092], [-451, -1375]], [[184053, 524739], [-388, 162], [-477, -1896], [-334, 3185]], [[255011, 527072], [0, -1623], [-222, 0], [-1, -3275], [-416, -8]], [[254372, 522166], [-588, 1082]], [[253784, 523248], [-214, 794], [49, 1831]], [[253617, 531924], [1399, -8], [-5, -4844]], [[238811, 530199], [-2, -3213], [-238, 7], [11, -4605]], [[238582, 522388], [9, -3269]], [[238591, 519119], [-694, 16]], [[237897, 519135], [-11, 4885]], [[194274, 528161], [-17, -1569], [-232, -20], [-118, -1642], [-36, -4874], [-1029, -1612], [-3, -3239], [-365, 3], [-2, -3289]], [[192472, 511919], [-459, 14], [21, 11395], [-199, 2], [30, 7432]], [[190466, 530914], [-30, -11209], [-346, -1209], [4, -3243], [-336, 0], [-17, -6512]], [[189741, 508741], [-31, -6239]], [[189710, 502502], [17, -3577]], [[189727, 498925], [-492, 1903], [19, 851], [-442, 2414]], [[188812, 504093], [12, 11150], [65, -2], [-3, 5425], [-517, 3], [-342, 1882], [-405, 1014]], [[192472, 511919], [741, -88]], [[193213, 511831], [-2, -3076]], [[193211, 508755], [-2525, -183], [-945, 169]], [[186549, 522650], [-757, -106], [-627, -2188]], [[185165, 520356], [-202, 2286], [-910, 2097]], [[157029, 524550], [64, -2278]], [[157093, 522272], [-464, -110]], [[156629, 522162], [-285, 1060], [-918, 9]], [[155418, 529962], [422, 587]], [[239619, 522318], [-1037, 70]], [[242662, 530268], [50, -9639]], [[242712, 520629], [-343, -3]], [[242369, 520626], [1, 1598], [-1043, 58], [-2, -1613], [-996, 39]], [[240329, 520708], [128, 1598]], [[241982, 530261], [680, 7]], [[245796, 530213], [-1, -3233], [691, 9]], [[246486, 526989], [-5, -6392]], [[246481, 520597], [-2400, -12]], [[244081, 520585], [-31, 9671]], [[244050, 530256], [1746, -43]], [[244081, 520585], [-1369, 44]], [[242662, 530268], [1388, -12]], [[209243, 525134], [13, -12456]], [[209256, 512678], [-50, -4012]], [[209206, 508666], [-2733, 56]], [[206473, 508722], [2, 6547], [142, -1], [14, 8099]], [[195875, 520091], [-795, -463], [-177, -2269], [-459, 3], [-573, -1890], [-130, -1893], [-228, 1], [-2, -1752], [-298, 3]], [[232296, 529333], [33, -6469]], [[232329, 522864], [-1381, -3]], [[230948, 522861], [-32, 4873]], [[234052, 523114], [0, -270]], [[234052, 522844], [-1723, 20]], [[252041, 527593], [20, -5421], [699, -8]], [[252760, 522164], [-8, -6431]], [[252752, 515733], [-697, 33]], [[252055, 515766], [-690, -1], [7, 1610], [-343, -7]], [[251029, 517368], [-3, 8016]], [[158523, 518912], [-1067, 1089], [-329, 767], [-34, 1504]], [[165157, 524279], [-366, -438]], [[164791, 523841], [-599, -1642], [-746, -545], [-477, 786]], [[162969, 522440], [-731, -1784]], [[162238, 520656], [-782, -457], [-46, 928], [-635, 568]], [[160775, 521695], [-228, 512]], [[203016, 512065], [45, -3465]], [[203061, 508600], [-4592, 140]], [[198469, 508740], [-941, -34]], [[197528, 508706], [338, 4066], [-1593, 0], [48, 4005], [105, 579]], [[230948, 522861], [3, -3246]], [[230951, 519615], [-1624, 13]], [[229327, 519628], [-6, 1157], [513, 1813], [251, 3529]], [[253784, 523248], [-5, -1258], [-1019, 174]], [[170424, 527346], [13, -2609]], [[170437, 524737], [-402, -3204], [0, -4053], [-225, -813], [-643, 34], [2, -1373], [-752, -187], [118, -2761], [304, 1], [77, -3741]], [[168916, 508640], [-1798, -1]], [[167118, 508639], [50, 1621], [3, 8063], [-287, 1], [0, 1597], [-520, 15], [8, 5875]], [[174020, 513699], [-270, -3512]], [[173750, 510187], [-1345, 33]], [[172405, 510220], [-1, 1583], [-585, -10], [-295, 3221], [-170, -22], [-112, 3314], [-288, 3247], [112, 3192], [-629, -8]], [[255706, 527059], [117, -1614], [-5, -6481], [175, -7]], [[255993, 518957], [-480, -4770], [-502, -3587]], [[255011, 510600], [-348, 1797], [263, 2653], [-666, 243], [263, 2751], [-117, 1109], [148, 2102], [-182, 911]], [[255011, 527072], [695, -13]], [[248252, 525417], [-2, -6367]], [[248250, 519050], [5, -3226]], [[248255, 515824], [-1774, -76]], [[246481, 515748], [0, 4849]], [[246486, 526989], [1045, -4]], [[214938, 526300], [2, -8790]], [[214940, 517510], [-1, -8088]], [[214939, 509422], [-2668, 29]], [[212271, 509451], [0, 3226]], [[212271, 512677], [44, 13632]], [[219085, 526285], [419, -1613], [147, -2780], [-338, -2103]], [[219313, 519789], [-136, -1298], [382, -972]], [[219559, 517519], [-3144, -9]], [[216415, 517510], [-1475, 0]], [[212271, 512677], [-3015, 1]], [[221297, 526232], [2, -6469]], [[221299, 519763], [-1986, 26]], [[185165, 520356], [-3, -2745], [506, -651], [135, -1729], [3, -4866], [343, -1], [-2, -1637], [399, -13], [67, -3225], [282, -799], [791, -49], [1, -1346], [860, 8]], [[188547, 503303], [-98, -3225], [-306, 273]], [[188143, 500351], [-567, -771], [-129, 1023], [-637, -764], [-534, 835], [-279, -2222], [-237, 583], [-858, 91], [-97, -2023]], [[184805, 497103], [-525, 1387], [-10, 1397], [-347, 4611], [-317, 913], [-262, -704], [-322, 1502], [12, 3599], [-287, 1010], [-383, 2792], [-233, 2701], [-86, 3614], [-272, 361], [-94, 1382]], [[224066, 526190], [-2, -6467]], [[224064, 519723], [-2738, 40]], [[221326, 519763], [-27, 0]], [[226142, 526138], [-2, -6467]], [[226140, 519671], [-5, -6480]], [[226135, 513191], [-2051, 62]], [[224084, 513253], [-13, 1]], [[224071, 513254], [-7, 6469]], [[229327, 519628], [390, -3087], [628, -1746]], [[230345, 514795], [-1456, 5], [-40, -559], [-610, 15]], [[228239, 514256], [-2, 4850]], [[228237, 519106], [-3, 7020]], [[228237, 519106], [-408, 549], [-1689, 16]], [[167118, 508639], [-1414, -27]], [[165704, 508612], [-332, 4], [2, 1360]], [[165374, 509976], [84, 1859], [-343, 39], [3, 1607], [-347, 27], [20, 10333]], [[251029, 517368], [-1054, 46]], [[249975, 517414], [-11, 1641], [-1714, -5]], [[172405, 510220], [-826, -23], [-2, -1617], [-596, -11], [-301, 1241], [-304, -1199], [-379, 943], [-317, -1615]], [[169680, 507939], [-764, 701]], [[188812, 504093], [-265, -790]], [[237897, 519135], [-1085, -11]], [[236812, 519124], [-342, 4024]], [[165374, 509976], [-1965, 16]], [[163409, 509992], [-22, 268]], [[163387, 510260], [-112, 2405], [145, 4765], [366, 768], [-140, 1600], [-677, 2642]], [[206473, 508722], [-141, 2]], [[206332, 508724], [-2606, -128]], [[203726, 508596], [-665, 4]], [[264518, 520374], [-131, -4], [15, -7955]], [[264402, 512415], [-335, 1]], [[264067, 512416], [-1024, 58]], [[263043, 512474], [5, 1629]], [[263048, 514103], [0, 9277]], [[263048, 523380], [752, -2509], [718, -497]], [[155426, 523231], [0, -1322], [-345, 8], [171, -1358], [345, -538], [-450, -2153], [-11, -1076]], [[155136, 516792], [5, -4050], [-895, -4], [-2, -2602], [170, -4]], [[154414, 510132], [-4, -597]], [[154410, 509535], [-766, 17]], [[153644, 509552], [190, 6726], [-97, 7015]], [[156629, 522162], [0, -1646], [515, -2132], [2, -1597]], [[157146, 516787], [-2, -1894], [-345, -270]], [[156799, 514623], [-745, 2159], [-918, 10]], [[236812, 519124], [284, -2537]], [[237096, 516587], [-222, -1933], [-373, -651]], [[236501, 514003], [-342, 795], [-1058, -11]], [[235101, 514787], [1, 1613], [-1027, -8]], [[234075, 516392], [-23, 6452]], [[232329, 522864], [30, -6472]], [[232359, 516392], [-1029, -8]], [[231330, 516384], [-347, 13], [-32, 3218]], [[234075, 516392], [-344, 3]], [[233731, 516395], [-1372, -3]], [[163387, 510260], [-630, 17], [17, 875], [-376, 1201], [-462, 445], [26, 1607], [414, 1539], [111, 2268], [-249, 2444]], [[239619, 522318], [0, -3213], [334, -17], [7, -2705]], [[239960, 516383], [-1367, 55]], [[238593, 516438], [-2, 2681]], [[240329, 520708], [7, -1269], [308, -146], [354, -2358], [-275, -2708]], [[240723, 514227], [-762, 14]], [[239961, 514241], [-1, 2142]], [[242369, 520626], [-5, -8010]], [[242364, 512616], [-1676, 1]], [[240688, 512617], [35, 1610]], [[159434, 520800], [0, -1906], [283, -1586]], [[159717, 517308], [-2286, -7], [-285, -514]], [[160775, 521695], [1, -3312], [-117, 6], [3, -4865], [-601, -6]], [[160061, 513518], [4, 2151], [-348, 1639]], [[163409, 509992], [121, -3800], [223, -798]], [[163753, 505394], [-3865, 76]], [[159888, 505470], [68, 1165]], [[159956, 506635], [-194, 2310], [404, 1009], [-239, 2615], [134, 949]], [[184805, 497103], [4, -2716], [-506, 66]], [[184303, 494453], [-906, -18]], [[183397, 494435], [-56, 1597], [-348, 2544], [-106, -614], [-845, 1225], [-633, 3399], [-141, 1577], [-365, -188], [51, 2181], [-180, -233], [-402, -2430], [54, -904], [-490, -1772], [-717, 3192], [21, 1139]], [[179240, 505148], [217, 1309], [9, 5101], [103, 825]], [[309697, 499439], [-326, 8145], [343, 308], [-203, 5576]], [[310206, 521388], [551, -1388], [510, -516], [-213, -1646], [200, -1812], [-163, -2048], [408, -2915], [145, 1140], [349, -533], [352, -3817], [161, -2744], [-592, -2997], [-880, -140], [-164, -1985], [-252, 636], [-149, -1354], [-202, 2089], [-181, -786], [-141, -3116], [-248, 1983]], [[304288, 501470], [-305, -405], [-9, -1933], [-241, 38]], [[303733, 499170], [-304, -527]], [[303429, 498643], [-117, 2061], [-640, 1069], [-291, 3137], [-430, -1181], [-152, 5251], [122, 81], [-151, 4818]], [[301770, 513879], [26, 2283], [518, -340], [-235, 2392], [476, 2920]], [[266792, 512570], [-1372, -94]], [[265420, 512476], [-1018, -61]], [[264518, 520374], [261, -2226], [563, -388], [377, -1460], [555, -1119], [218, 172], [319, -1624], [-19, -1159]], [[244081, 520585], [-3, -6434]], [[244078, 514151], [-2, -1590], [-344, 25]], [[243732, 512586], [-1368, 30]], [[246481, 515748], [-686, 32], [0, -1630]], [[245795, 514150], [-1717, 1]], [[197528, 508706], [-1036, 14]], [[196492, 508720], [-3281, 35]], [[221326, 519763], [-4, -6470]], [[221322, 513293], [-1536, 17]], [[219786, 513310], [-157, 1349], [118, 1153], [-188, 1707]], [[224071, 513254], [-2371, 30]], [[221700, 513284], [-378, 9]], [[228239, 514256], [0, -2714]], [[228239, 511542], [-746, -4]], [[227493, 511538], [-1359, 32]], [[226134, 511570], [1, 1621]], [[231330, 516384], [37, -4380]], [[231367, 512004], [-502, 1311], [-471, 407]], [[230394, 513722], [-49, 1073]], [[238593, 516438], [-6, -3148]], [[238587, 513290], [-26, 17]], [[238561, 513307], [-163, 843], [-522, 100], [-780, 2337]], [[249975, 517414], [-3, -6480]], [[249972, 510934], [-1722, 19]], [[248250, 510953], [5, 4871]], [[219786, 513310], [-178, -2703], [123, -1548], [-311, 141], [-36, -2390]], [[219384, 506810], [-387, -2542], [-371, 1156], [-114, -973]], [[218512, 504451], [-583, 56], [-208, -833], [-377, 333]], [[217344, 504007], [2, 4598], [-1015, -5], [84, 8910]], [[217344, 504007], [-269, -1031], [-620, -1015], [-211, -1236], [-503, 175], [-264, -1034], [-539, -244]], [[214938, 499622], [1, 9800]], [[252055, 515766], [-5, -3234], [108, -1633]], [[252158, 510899], [-950, 14], [2, -1662]], [[251210, 509251], [-676, 9]], [[250534, 509260], [0, 1663], [-562, 11]], [[159956, 506635], [-1844, -55], [-388, 967], [-169, 1540], [-533, 2059], [129, 2389], [-301, 15]], [[156850, 513550], [-51, 1073]], [[156850, 513550], [-529, -702], [118, -1992], [-202, -742]], [[156237, 510114], [-1823, 18]], [[238561, 513307], [-382, -977], [-278, -2081], [-23, -1944]], [[237878, 508305], [-684, 14]], [[237194, 508319], [-680, 14]], [[236514, 508333], [-13, 5670]], [[239961, 514241], [-4, -3219]], [[239957, 511022], [-577, 12], [2, -1654]], [[239382, 509380], [-216, 1966], [-579, 1944]], [[235101, 514787], [15, -8082]], [[235116, 506705], [-1366, -13]], [[233750, 506692], [5, 4860]], [[233755, 511552], [-24, 4843]], [[233755, 511552], [-2201, -4]], [[231554, 511548], [-187, 456]], [[248250, 510953], [-429, 7], [1, -1618], [-327, 3]], [[247495, 509345], [-1695, -50]], [[245800, 509295], [-5, 4855]], [[252752, 515733], [340, -44], [-9, -3220], [342, -70], [182, -3244], [999, -1069]], [[254606, 508086], [-385, -2584], [-242, -2788]], [[253979, 502714], [-8, -2]], [[253971, 502712], [-10, -1]], [[253961, 502711], [-693, 40]], [[253268, 502751], [-16, 3219], [-671, 53]], [[252581, 506023], [16, 4858], [-439, 18]], [[303429, 498643], [-266, -4622], [-406, -3327]], [[302757, 490694], [-370, 577], [-32, 2011], [-647, -2106], [393, -1790], [-189, -2753]], [[301912, 486633], [-573, -442]], [[301339, 486191], [-59, 9209]], [[301280, 495400], [-86, 9640], [-121, 9366]], [[301073, 514406], [217, 752], [480, -1279]], [[230394, 513722], [3, -5427]], [[230397, 508295], [-1200, -11]], [[229197, 508284], [-4, 3228], [-954, 30]], [[236514, 508333], [-685, 5], [-1, -1628]], [[235828, 506710], [-712, -5]], [[301280, 495400], [-90, -874], [-585, 120], [-254, -2830], [-201, 2230]], [[300150, 494046], [-446, 795], [-524, 2812]], [[299180, 497653], [520, 1849], [112, 1481], [-264, 3053], [383, 3038], [-19, 1892]], [[299912, 508966], [388, 4730], [214, 623], [386, -1122], [173, 1209]], [[240688, 512617], [-96, -2433], [64, -4038]], [[240656, 506146], [-96, -2136]], [[240560, 504010], [-561, 445], [-37, 2206]], [[239962, 506661], [96, 22], [-1, 4337], [-100, 2]], [[245800, 509295], [3, -3237]], [[245803, 506058], [-2029, -24]], [[243774, 506034], [-42, 6552]], [[159888, 505470], [-166, -669], [69, -1969]], [[159791, 502832], [-1153, 206], [-233, 1075], [-632, 10], [-781, 719], [-578, -1960], [-382, 1173]], [[156032, 504055], [-99, 1558], [389, 2206], [-85, 2295]], [[175529, 510716], [154, -825], [-339, -5246], [150, -1455], [0, -3804]], [[175494, 499386], [-398, -1021]], [[175096, 498365], [-633, 867], [-4, 2312], [-267, 893], [-1, 3275], [-764, 34]], [[173427, 505746], [187, 1739], [-43, 1634], [179, 1068]], [[231554, 511548], [662, -3748], [173, -272]], [[232389, 507528], [-309, -829], [-4, -1607], [-1678, 18]], [[230398, 505110], [-1, 3185]], [[307819, 495119], [63, -2040], [-255, 1148], [192, 892]], [[308823, 498239], [322, -1211], [-422, -2790], [-256, 1683], [356, 2318]], [[309697, 499439], [-194, -3152], [-121, 2655], [-613, 1158], [154, -1190], [-465, -1335], [31, 1761], [-402, -1705], [118, -3275], [-828, 3345], [180, 1912], [-237, 2131], [81, 1096]], [[221700, 513284], [0, -6479]], [[221700, 506805], [-278, 1]], [[221422, 506806], [-2038, 4]], [[224084, 513253], [3, -6455]], [[224087, 506798], [-1658, 3]], [[222429, 506801], [-729, 4]], [[239382, 509380], [135, -2743]], [[239517, 506637], [-427, -1841]], [[239090, 504796], [-535, 226]], [[238555, 505022], [9, 1659], [-688, 3], [2, 1621]], [[226134, 511570], [12, -9714]], [[226146, 501856], [-2029, 51]], [[224117, 501907], [-30, 4891]], [[179240, 505148], [-396, -1629], [-366, 938], [-230, -2311], [-308, -656], [141, -3507], [-184, -1567]], [[177897, 496416], [-298, -1464], [-331, -476], [-1622, 25], [-30, -1653], [-276, 66]], [[175340, 492914], [0, 3220], [164, 2], [-10, 3250]], [[212271, 509451], [-19, -8102], [-1680, -4]], [[210572, 501345], [-701, 13], [-660, -630]], [[209211, 500728], [-5, 7938]], [[242364, 512616], [56, -6547]], [[242420, 506069], [-1764, 77]], [[243774, 506034], [0, -3209]], [[243774, 502825], [-1350, 15]], [[242424, 502840], [-4, 3229]], [[262700, 510887], [28, -4814]], [[262728, 506073], [-1239, 26], [-114, -877]], [[261375, 505222], [-304, 884]], [[261071, 506106], [219, 4693], [-69, 1784]], [[261221, 512583], [458, -40], [0, -1634], [1021, -22]], [[264067, 512416], [-14, -6399]], [[264053, 506017], [-1325, 56]], [[262700, 510887], [342, -32], [1, 1619]], [[265420, 512476], [-20, -6430]], [[265400, 506046], [-1347, -29]], [[227493, 511538], [8, -6472]], [[227501, 505066], [-3, -4842]], [[227498, 500224], [-1006, 10]], [[226492, 500234], [-8, 1613], [-338, 9]], [[229197, 508284], [-6, -3209]], [[229191, 505075], [-1690, -9]], [[233750, 506692], [-653, -11], [0, -2565]], [[233097, 504116], [-708, 3412]], [[239962, 506661], [-445, -24]], [[250534, 509260], [0, -6477]], [[250534, 502783], [-1730, 67]], [[248804, 502850], [-1313, 5]], [[247491, 502855], [4, 6490]], [[252581, 506023], [-688, 19], [2, 1616], [-685, -6], [0, 1599]], [[173427, 505746], [-386, -1718], [-295, -3771], [-220, -1145], [9, -3403]], [[172535, 495709], [-741, 0], [0, 1608], [-293, 1056], [-1060, -21], [-726, -3487]], [[169715, 494865], [-738, -17], [245, 2193], [-29, 1555], [314, 2473], [-553, 1433], [613, 1574], [-28, 2092], [141, 1771]], [[156032, 504055], [-16, -547]], [[156016, 503508], [-1263, 17]], [[154753, 503525], [-341, 333], [-2, 5677]], [[165704, 508612], [55, -3188], [-11, -9611]], [[165748, 495813], [-675, -6], [-2, 1544], [-342, 912], [-1014, -18], [0, 2353]], [[163715, 500598], [38, 4796]], [[154753, 503525], [15, -5367], [-344, 3], [15, -1349], [-284, -294], [116, -1140]], [[154271, 495378], [-947, -137]], [[153324, 495241], [89, 2631], [44, 7615], [170, 1570], [17, 2495]], [[214938, 499622], [-2, -11]], [[214936, 499611], [-312, -1407], [-473, 240], [-223, -2776], [-71, -2959], [-2965, 11]], [[210892, 492720], [-2, 2155], [-337, -10], [19, 6480]], [[247491, 502855], [1, -4850]], [[247492, 498005], [-1354, -31], [0, 1610], [-337, 6], [2, 1611]], [[245803, 501201], [0, 4857]], [[253268, 502751], [-8, -1765]], [[253260, 500986], [-1004, 106]], [[252256, 501092], [3, 1635], [-1725, 56]], [[296979, 508865], [60, -3256], [-127, -960]], [[296912, 504649], [-471, 87], [-134, -1751], [-359, -1100]], [[295948, 501885], [-849, 1672]], [[295099, 503557], [103, 5409]], [[295202, 508966], [1777, -101]], [[299180, 497653], [-205, -1076]], [[298975, 496577], [-266, 1735], [213, 1023], [-144, 949], [183, 1194], [-188, 667], [204, 1295], [-286, 977]], [[298691, 504417], [181, 1999], [-64, 2448]], [[298808, 508864], [1104, 102]], [[295099, 503557], [-145, -2596], [-226, -367]], [[294728, 500594], [-75, 974], [149, 3512], [-119, 603], [97, 3232]], [[294780, 508915], [422, 51]], [[294728, 500594], [65, -315]], [[294793, 500279], [-930, -2003], [-662, -178]], [[293201, 498098], [-213, 5177], [-115, 5361]], [[292873, 508636], [1907, 279]], [[298691, 504417], [-203, -1307], [-284, 945], [-413, -3860], [-312, 779]], [[297479, 500974], [-299, 925], [174, 1659], [-442, 1091]], [[296979, 508865], [1829, -1]], [[196492, 508720], [81, -2399], [-1, -6524], [53, -2], [-1, -6560], [65, 0]], [[196689, 493235], [-1, -1658]], [[196688, 491577], [-673, 4], [0, -1650], [-344, -3], [9, -1602], [-503, -6], [3, -1644], [-615, -55]], [[194565, 486621], [-361, 2183], [-278, 574], [-277, -717], [-66, -1425], [-340, -839], [-199, 2910], [-376, -148], [-166, 1089]], [[192502, 490248], [0, 2320], [-271, 2957], [-405, 2563], [50, 1662], [-272, 1203], [-814, -4], [0, 1553], [-1080, 0]], [[290927, 508616], [234, -783], [324, -14557], [-26, -1329]], [[291459, 491947], [-889, -543]], [[290570, 491404], [-581, -367], [-299, 866]], [[289690, 491903], [-769, 2248]], [[288921, 494151], [-1154, 3457]], [[287767, 497608], [260, 2084], [1343, 6200], [870, 2516], [687, 208]], [[198469, 508740], [221, -3932], [453, -2058], [152, 401], [684, -2630]], [[199979, 500521], [185, -1796], [287, -398], [153, -2196], [-4, -2948]], [[200600, 493183], [-3911, 52]], [[206332, 508724], [28, -15346]], [[206360, 493378], [-1, -12616]], [[206359, 480762], [-2612, -65]], [[203747, 480697], [21, 19901]], [[203768, 500598], [-42, 7998]], [[203768, 500598], [-1168, -135], [-2621, 58]], [[293201, 498098], [-645, -418], [133, -5012], [-525, -325]], [[292164, 492343], [-705, -396]], [[290927, 508616], [1946, 20]], [[209211, 500728], [4, -7271]], [[209215, 493457], [-2855, -79]], [[169715, 494865], [13, -4022]], [[169728, 490843], [-1638, 144], [-4, -1633], [-2342, -17]], [[165744, 489337], [4, 6476]], [[237194, 508319], [5, -4866]], [[237199, 503453], [-679, 10], [-2, -1632], [-677, -5], [-1, 1625]], [[235840, 503451], [-12, 3259]], [[238555, 505022], [-264, -1738], [-417, -1265]], [[237874, 502019], [-336, 1430], [-339, 4]], [[230398, 505110], [0, -3258]], [[230398, 501852], [-1, -1634]], [[230397, 500218], [-1208, 4]], [[229189, 500222], [2, 4853]], [[233097, 504116], [341, -1014]], [[233438, 503102], [0, -2922], [-654, 12]], [[232784, 500192], [-25, 1634], [-1362, 10]], [[231397, 501836], [-999, 16]], [[240560, 504010], [201, -612]], [[240761, 503398], [-169, -3191], [-690, -567], [2, -757]], [[239904, 498883], [-675, 2], [1, 1341]], [[239230, 500226], [-140, 4570]], [[221422, 506806], [-9, -6503]], [[221413, 500303], [-2368, -14]], [[219045, 500289], [-317, 677], [77, 2216], [-293, 1269]], [[222429, 506801], [32, -13075]], [[222461, 493726], [-769, -45]], [[221692, 493681], [-243, 467]], [[221449, 494148], [-36, 6155]], [[224117, 501907], [15, -8147]], [[224132, 493760], [-628, -3]], [[223504, 493757], [-1043, -31]], [[235840, 503451], [-367, -8], [16, -4852]], [[235489, 498591], [-437, 8]], [[235052, 498599], [-236, 773]], [[234816, 499372], [-1378, 3730]], [[183397, 494435], [-268, 4], [1, -3240], [-116, 1], [10, -3445], [227, -984], [-560, -2336], [-480, -1252], [-144, -1113]], [[182067, 482070], [-654, 3911], [-113, -749], [-564, 1717], [-8, 881], [-657, 321], [-39, -922], [-426, 1523], [-370, 1], [1, 1213], [-439, -1021]], [[178798, 488945], [-55, 216]], [[178743, 489161], [-155, 1982], [61, 1849], [-397, 879], [-33, 1743], [-322, 802]], [[242424, 502840], [-1, -2696], [-504, 27]], [[241919, 500171], [-648, 507], [-510, 2720]], [[266980, 506081], [138, -2704], [-131, -3752]], [[266987, 499625], [-1582, -51]], [[265405, 499574], [-5, 6472]], [[265400, 506046], [1580, 35]], [[262728, 506073], [-10, -6460]], [[262718, 499613], [-1347, 22]], [[261371, 499635], [4, 5587]], [[264053, 506017], [3, -6476]], [[264056, 499541], [-1338, 72]], [[245803, 501201], [-678, 11]], [[245125, 501212], [-1013, -14]], [[244112, 501198], [-337, 8]], [[243775, 501206], [-1, 1619]], [[265405, 499574], [-1349, -33]], [[175096, 498365], [-133, -2277], [-31, -3180], [-260, 7]], [[174672, 492915], [-1240, 22]], [[173432, 492937], [-217, 1683], [-680, 1089]], [[163715, 500598], [-1230, -21], [0, -1606], [-450, -3], [0, -1608], [-331, 10]], [[161704, 497370], [-2048, 35]], [[159656, 497405], [135, 5427]], [[239230, 500226], [-677, -7]], [[238553, 500219], [-1077, -8]], [[237476, 500211], [398, 1808]], [[229189, 500222], [-676, -12]], [[228513, 500210], [-1015, 14]], [[297479, 500974], [-166, -1452]], [[297313, 499522], [-157, -1497], [-296, 998], [-160, -1509], [-420, 994]], [[296280, 498508], [-67, 1872], [-265, 1505]], [[159656, 497405], [120, -2500]], [[159776, 494905], [-1468, -90], [-166, -674], [-532, 205], [-411, 1118], [-499, -542], [-5, -1095], [-722, -4], [-54, 1557]], [[155919, 495380], [-124, 1127], [44, 2998], [-133, 924], [521, 1787], [-211, 1292]], [[219045, 500289], [-134, -1711], [524, -288], [58, -1572], [780, -877], [539, -1240], [-128, -868]], [[220684, 493733], [-1196, -11], [0, -483]], [[219488, 493239], [-1893, -6]], [[217595, 493233], [-335, -5], [35, 9715], [49, 1064]], [[260032, 504518], [-8, -4869]], [[260024, 499649], [-1161, 99]], [[258863, 499748], [-12, 3454], [458, 1388]], [[259309, 504590], [723, -72]], [[298975, 496577], [-544, -513], [-20, -3063]], [[298411, 493001], [-914, 898]], [[297497, 493899], [402, 4107], [-586, 1516]], [[307394, 502828], [-140, -1574], [180, -625], [-64, -1886], [-523, -588], [177, -1428], [-225, -1984]], [[306799, 494743], [-257, 114], [-412, 2029], [-390, -679]], [[305740, 496207], [-272, 275]], [[305468, 496482], [309, 2125], [8, 3413], [-219, 979]], [[189727, 498925], [6, -9134]], [[189733, 489791], [-389, -951], [-593, -175]], [[188751, 488665], [-448, -740], [-1162, 821]], [[187141, 488746], [-1, 809], [-499, 8], [1, 1608]], [[186642, 491171], [338, -6], [2, 1607], [490, 821], [16, 2404], [169, 1559], [484, 17], [2, 2778]], [[217595, 493233], [-48, -3229]], [[217547, 490004], [-2628, -7]], [[214919, 489997], [17, 9614]], [[296280, 498508], [-410, -5407]], [[295870, 493101], [-68, 2574], [-938, -658]], [[294864, 495017], [48, 3057], [-119, 2205]], [[155919, 495380], [-1648, -2]], [[305468, 496482], [-133, -1505], [-266, 329], [-18, -2929], [-277, 308]], [[304774, 492685], [-7, 9]], [[304767, 492694], [-269, 530], [-119, -1120], [-300, 314]], [[304079, 492418], [-196, 1520], [-150, 5232]], [[237476, 500211], [-51, -1567]], [[237425, 498644], [-1936, -53]], [[241919, 500171], [207, -1615]], [[242126, 498556], [-525, 16], [0, -1617], [-335, 5], [-2, -3232]], [[241264, 493728], [-356, 11]], [[240908, 493739], [-1010, 21]], [[239898, 493760], [6, 5123]], [[234816, 499372], [-1, -4020], [-673, -9], [-3, -1613]], [[234139, 493730], [-986, 18]], [[233153, 493748], [-365, -6]], [[232788, 493742], [-4, 6450]], [[250534, 502783], [-2, -8150]], [[250532, 494633], [-1040, 40]], [[249492, 494673], [-353, 36]], [[249139, 494709], [-5, 4906], [-328, 5], [-2, 3230]], [[249139, 494709], [-495, 34]], [[248644, 494743], [-1142, -13]], [[247502, 494730], [-10, 3275]], [[253979, 502714], [-8, -2]], [[253961, 502711], [-152, -2103], [333, -531], [464, 2017]], [[254606, 502094], [-10, -5905]], [[254596, 496189], [-339, 9], [-1, -1624], [-432, 11]], [[253824, 494585], [-416, 18]], [[253408, 494603], [5, 6419], [-153, -36]], [[243775, 501206], [-1056, -193], [-152, -3332]], [[242567, 497681], [-441, 875]], [[252256, 501092], [-364, 1], [-9, -6465]], [[251883, 494628], [-409, -12]], [[251474, 494616], [-942, 17]], [[255685, 502676], [-302, -3068], [-168, -3412]], [[255215, 496196], [-619, -7]], [[254606, 502094], [73, 608]], [[254679, 502702], [1006, -26]], [[192502, 490248], [5, -10113]], [[192507, 480135], [-16, -1620], [-799, 3], [0, -1616], [-653, 8], [-1, -1049]], [[191038, 475861], [-655, -1], [0, 1502], [-643, -3]], [[189740, 477359], [-2, 3452]], [[189738, 480811], [-5, 8980]], [[226492, 500234], [-1, -6499]], [[226491, 493735], [-1332, 23]], [[225159, 493758], [-1027, 2]], [[231397, 501836], [40, -8077]], [[231437, 493759], [-1042, 2]], [[230395, 493761], [2, 6457]], [[232788, 493742], [-1310, 15]], [[231478, 493757], [-41, 2]], [[210892, 492720], [-1677, 4]], [[209215, 492724], [0, 733]], [[244112, 501198], [-2, -6506], [-219, -855], [206, -1950], [-69, -1317]], [[244028, 490570], [-834, 3122]], [[243194, 493692], [-278, 3080], [-349, 909]], [[245125, 501212], [38, -9631]], [[245163, 491581], [-433, -274], [-42, -1497], [-286, -3]], [[244402, 489807], [-374, 763]], [[247502, 494730], [0, -1740]], [[247502, 492990], [-1654, 56], [-188, -1630]], [[245660, 491416], [-497, 165]], [[253408, 494603], [-589, 40]], [[252819, 494643], [-936, -15]], [[186642, 491171], [-1501, 14], [-1, -1611]], [[185140, 489574], [-834, 9], [-3, 4870]], [[203747, 480697], [-170, -9]], [[203577, 480688], [-2877, -40], [0, 148]], [[200700, 480796], [-50, 12388], [-50, -1]], [[165744, 489337], [-329, 0], [-5, -4859], [-337, 5]], [[165073, 484483], [-1002, 8], [0, 1610], [-336, -4], [-1, 1617], [-1029, -13], [0, 1607], [-664, 63], [-2, 3220], [-321, 78], [-14, 4701]], [[221449, 494148], [180, -1781], [-748, 47], [-197, 1319]], [[294864, 495017], [-214, -1346], [-132, -2762], [162, -4374]], [[294680, 486535], [-165, -91]], [[294515, 486444], [-1724, -1102]], [[292791, 485342], [28, 959], [-465, 275], [-343, 2131], [225, 833], [-72, 2803]], [[238553, 500219], [-2, -6473]], [[238551, 493746], [-677, -1]], [[237874, 493745], [1, 808], [-680, -7]], [[237195, 494546], [220, 1969], [10, 2129]], [[239898, 493760], [-12, 0]], [[239886, 493760], [-1005, -6]], [[238881, 493754], [-330, -8]], [[228513, 500210], [-4, -6464]], [[228509, 493746], [-670, -19]], [[227839, 493727], [-1336, 7]], [[226503, 493734], [-12, 1]], [[230395, 493761], [0, -2]], [[230395, 493759], [-1217, -19]], [[229178, 493740], [-669, 6]], [[260024, 499649], [-9, -6493]], [[260015, 493156], [-615, 53]], [[259400, 493209], [-964, 216]], [[258436, 493425], [364, 3555], [63, 2768]], [[261371, 499635], [-2, -6462]], [[261369, 493173], [-639, -4]], [[260730, 493169], [-715, -13]], [[260024, 499649], [1347, -14]], [[264056, 499541], [8, -6453]], [[264064, 493088], [-669, -1]], [[263395, 493087], [-679, 15]], [[262716, 493102], [2, 6511]], [[262716, 493102], [-656, 54]], [[262060, 493156], [-691, 17]], [[266987, 499625], [-62, -3376], [-470, -1067], [-157, -2039]], [[266298, 493143], [-886, -33]], [[265412, 493110], [-7, 6464]], [[265412, 493110], [-786, 0]], [[264626, 493110], [-562, -22]], [[175340, 492914], [-169, -3], [-24, -6409]], [[175147, 486502], [-645, 6]], [[174502, 486508], [-557, -1]], [[173945, 486507], [0, 3240], [392, -16], [114, 1594], [219, -12], [2, 1602]], [[214919, 489997], [-32, -5323], [-335, -146]], [[214552, 484528], [-104, -244], [-1766, 9]], [[212682, 484293], [343, 3116], [-3812, -38]], [[209213, 487371], [2, 5353]], [[297497, 493899], [-208, -1404], [-408, 589], [-262, -2738], [-163, 303]], [[296456, 490649], [-487, 788], [-99, 1664]], [[235052, 498599], [862, -2185], [273, -1379]], [[236187, 495035], [13, -2914]], [[236200, 492121], [-1368, -13]], [[234832, 492108], [-669, 3], [-24, 1619]], [[304079, 492418], [-79, -2770]], [[304000, 489648], [-229, -1287], [-556, 2439], [-134, -954], [-324, 848]], [[237195, 494546], [-163, -1485], [-845, 1974]], [[243194, 493692], [-616, 1], [0, -1603]], [[242578, 492090], [-667, 8], [-1, 1620], [-646, 10]], [[173432, 492937], [-215, -1207], [111, -1864], [-135, -2003]], [[173193, 487863], [-118, -729], [-2, -2988]], [[173073, 484146], [-1, -31286]], [[173072, 452860], [-3259, -51]], [[169813, 452809], [-49, 5195], [-6, 11887], [-34, 1], [4, 20951]], [[300150, 494046], [150, -5519], [-565, -418], [90, -2385]], [[299825, 485724], [28, -1263], [-360, -306], [-213, -2182]], [[299280, 481973], [-251, -348], [-88, 1239], [-239, -1544]], [[298702, 481320], [-1098, 1335]], [[297604, 482655], [73, 1781], [273, 1403]], [[297950, 485839], [461, 7162]], [[165073, 484483], [-1, -1675]], [[165072, 482808], [-3997, 131]], [[161075, 482939], [-1865, -3]], [[159210, 482936], [76, 4514], [297, 1024], [283, 3754], [-90, 2677]], [[286590, 490299], [-326, 1891], [242, 1614], [1261, 3804]], [[288921, 494151], [-278, -2135], [171, -536], [-163, -1981], [-600, -1657], [-229, 97], [184, -3632]], [[288006, 484307], [-698, 337], [-439, -516]], [[286869, 484128], [-30, 11]], [[286839, 484139], [-17, 6]], [[286822, 484145], [-93, 2653], [-183, 296], [473, 1067], [-221, 1528], [192, 1727], [-400, -1117]], [[306799, 494743], [-208, -3179], [83, -579], [-394, -2172], [-422, 632], [40, 936]], [[305898, 490381], [198, 676], [-157, 2940], [-190, 25], [-9, 2185]], [[178743, 489161], [-409, 649], [-98, 1866], [-373, -2892], [-524, -709], [-419, -3554], [-517, -1774], [-405, -259]], [[175998, 482488], [-851, 4014]], [[305898, 490381], [-88, 1149], [-333, -4456], [-153, 1112], [-294, -802], [27, 3032], [-191, -1420]], [[304866, 488996], [63, 1227], [-293, 336]], [[304636, 490559], [138, 2126]], [[255215, 496196], [9, -3137], [-283, -948], [-252, -4019]], [[254689, 488092], [-861, -10]], [[253828, 488082], [-4, 6503]], [[296456, 490649], [-138, -1260]], [[296318, 489389], [-526, -1475], [60, -1044]], [[295852, 486870], [-725, 198], [35, -1311], [-435, -257]], [[294727, 485500], [-47, 1035]], [[159210, 482936], [-357, -1082], [-3, -2173]], [[158850, 479681], [-1697, -61], [-2, 2000], [-1023, -131], [-80, 4508], [-585, 9], [-506, 917], [-252, 1689], [-579, 464], [-273, -1479], [-649, -39]], [[153204, 487558], [120, 7683]], [[301339, 486191], [74, -4638]], [[301413, 481553], [-561, -30]], [[300852, 481523], [-271, 609], [-756, 3592]], [[237874, 493745], [1, -6477]], [[237875, 487268], [-1336, -3]], [[236539, 487265], [-339, -1]], [[236200, 487264], [0, 4857]], [[248644, 494743], [4, -1204], [-356, -1774], [167, -1778], [17, -2211], [271, -1702], [222, -2659]], [[248969, 483415], [-1467, -1]], [[247502, 483414], [0, 1682]], [[247502, 485096], [0, 7894]], [[249492, 494673], [0, -4905]], [[249492, 489768], [-4, -6323]], [[249488, 483445], [-519, -30]], [[251474, 494616], [2, -4829]], [[251476, 489787], [-787, -8]], [[250689, 489779], [-1197, -11]], [[252819, 494643], [-1, -5695]], [[252818, 488948], [2, -842], [-1343, 42]], [[251477, 488148], [-1, 1639]], [[253828, 488082], [-336, -5]], [[253492, 488077], [2, 862], [-676, 9]], [[185140, 489574], [-8, -6495]], [[185132, 483079], [-4, -1541], [-325, -82], [-2, -1616], [-333, 6], [-31, -3058], [-167, -6]], [[184270, 476782], [-988, -2], [0, 1537], [-763, 6], [72, 2286], [-253, 1758], [-271, -297]], [[297950, 485839], [-1609, 2939], [-23, 611]], [[289857, 482936], [-1180, -3639], [-620, 942]], [[288057, 480239], [-51, 4068]], [[289690, 491903], [167, -8967]], [[222306, 488875], [139, -1400], [-276, -1472], [-157, -2285], [239, -8], [216, -2924]], [[222467, 480786], [-656, 1]], [[221811, 480787], [-251, 2], [-1, 4521], [-205, 287], [-400, -1289], [-686, -69], [-402, 533]], [[219866, 484772], [-299, 60]], [[219567, 484832], [-76, 2417], [-3, 5990]], [[221692, 493681], [38, -1693], [582, -1977], [-6, -1136]], [[231478, 493757], [-2, -6466]], [[231476, 487291], [-1083, 9]], [[230393, 487300], [2, 6459]], [[233153, 493748], [0, -6481]], [[233153, 487267], [-1643, 21]], [[231510, 487288], [-34, 3]], [[225159, 493758], [1, -4820]], [[225160, 488938], [-1327, -45]], [[223833, 488893], [-332, -2]], [[223501, 488891], [3, 4866]], [[239886, 493760], [1, -6483]], [[239887, 487277], [-12, 1]], [[239875, 487278], [-994, -7]], [[238881, 487271], [0, 6483]], [[240908, 493739], [-30, -6461]], [[240878, 487278], [-991, -1]], [[230393, 487300], [-1213, -24]], [[229180, 487276], [-2, 6464]], [[238881, 487271], [-674, 1]], [[238207, 487272], [-332, -4]], [[223501, 488891], [-1195, -16]], [[226503, 493734], [-5, -6430]], [[226498, 487304], [-323, 15]], [[226175, 487319], [-997, 6]], [[225178, 487325], [-18, 1613]], [[242578, 492090], [0, -4838]], [[242578, 487252], [-1029, -242]], [[241549, 487010], [-671, 268]], [[234832, 492108], [2, -4840]], [[234834, 487268], [-1653, 0]], [[233181, 487268], [-28, -1]], [[229180, 487276], [-670, -7]], [[228510, 487269], [-670, 12]], [[227840, 487281], [-1, 6446]], [[227840, 487281], [-667, 8]], [[227173, 487289], [-675, 15]], [[244402, 489807], [393, -2555]], [[244795, 487252], [-1245, -4]], [[243550, 487248], [-972, 4]], [[209213, 487371], [2, -6521]], [[209215, 480850], [-2355, -66]], [[206860, 480784], [-501, -22]], [[259400, 493209], [11, -6543]], [[259411, 486666], [-1095, 71]], [[258316, 486737], [-227, 4106], [347, 2582]], [[304000, 489648], [314, -1030]], [[304314, 488618], [155, 528]], [[304469, 489146], [-41, -1012]], [[304428, 488134], [-42, -1968], [-144, 1438], [-555, -1234], [-307, -2322], [164, -2049], [-435, -546]], [[303109, 481453], [-386, 1325], [-161, 2029], [-306, -177], [3, 1606], [-347, 397]], [[219567, 484832], [-690, 962], [-260, -1068], [-280, 234], [-415, 1974], [-376, 205]], [[217546, 487139], [1, 2865]], [[200700, 480796], [-1181, 19]], [[199519, 480815], [-168, 0]], [[199351, 480815], [0, 2700], [-338, -12], [1, 1632], [-671, 1], [0, 1587], [-983, 519], [1, 1056], [-333, 2], [5, 1650], [-345, 1627]], [[304469, 489146], [96, 424], [146, -4223], [-211, -753], [-72, 3540]], [[304747, 485718], [-31, 9]], [[304716, 485727], [-143, 4023], [63, 809]], [[304866, 488996], [-144, -864], [186, -1284], [-161, -1130]], [[304767, 492694], [-187, -2521], [-266, -1555]], [[260730, 493169], [6, -6502]], [[260736, 486667], [-1325, -1]], [[262060, 493156], [-6, -6526]], [[262054, 486630], [-1318, 37]], [[263395, 493087], [5, -6428]], [[263400, 486659], [-1346, -29]], [[264626, 493110], [-1, -3070]], [[264625, 490040], [-2, -3183]], [[264623, 486857], [-1223, -198]], [[247502, 485096], [-1666, -110]], [[245836, 484986], [-8, 6441], [-168, -11]], [[173945, 486507], [-391, -271], [-361, 1627]], [[292791, 485342], [-439, -294], [152, -6650]], [[292504, 478398], [55, -2188]], [[292559, 476210], [-1099, -481], [-496, 1079]], [[290964, 476808], [-432, 1001], [257, 2732], [-219, 10863]], [[236200, 487264], [-1352, 5]], [[234848, 487269], [-14, -1]], [[178798, 488945], [-51, -1480]], [[178747, 487465], [-147, -2107], [26, -2295], [-140, -364], [-9, -7525]], [[178477, 475174], [-2, -5281], [149, -48]], [[178624, 469845], [-11, -2675]], [[178613, 467170], [-1161, -3], [34, 3026], [-977, 385], [-398, 937], [-84, -1083], [-654, 1956], [-184, 1187]], [[175189, 473575], [801, 17], [8, 8896]], [[290964, 476808], [48, -2085], [-179, -2358]], [[290833, 472365], [-10, -3429]], [[290823, 468936], [-322, 652], [-79, -1361], [-540, 1549], [-309, -528]], [[289573, 469248], [-20, 3211], [418, 3255], [-260, 631], [239, 1293], [-93, 5298]], [[245836, 484986], [-965, 56]], [[244871, 485042], [-76, 2210]], [[199351, 480815], [0, -541], [-2070, -233], [-331, 808], [-664, 542], [-332, 1359], [-995, 270], [0, 1479], [-394, 2122]], [[187141, 488746], [-18, -3230], [156, 228], [838, -2596]], [[188117, 483148], [-2489, -4]], [[185628, 483144], [-496, -65]], [[169813, 452809], [-3140, -58]], [[166673, 452751], [-101, 8]], [[166572, 452759], [-14, 14051], [-1606, -148], [6, 8084], [115, 22], [-1, 8040]], [[199519, 480815], [49, -534], [44, -12867], [-117, 0], [4, -6462], [53, 0]], [[199552, 460952], [1, -3214]], [[199553, 457738], [-4238, 36]], [[195315, 457774], [-81, 8002], [-208, 644], [-622, 4048], [-507, 1247], [-388, 4711], [-175, 3679], [-827, 30]], [[265345, 488432], [-13, -4365], [594, -1607]], [[265926, 482460], [2, -2061]], [[265928, 480399], [-330, 807], [-651, 39], [-327, 828]], [[264620, 482073], [3, 4784]], [[264625, 490040], [337, 2], [2, -1583], [381, -27]], [[217546, 487139], [-458, -846], [2, -7567]], [[217090, 478726], [-2459, 15]], [[214631, 478741], [-79, 1614], [0, 4173]], [[184270, 476782], [-1, -3236]], [[184269, 473546], [-657, 2], [18, -6492], [161, -1617], [-161, -936]], [[183630, 464503], [-371, 1135], [-285, -315]], [[182974, 465323], [1, 3350], [164, 1], [-2, 6526], [-838, 4]], [[182299, 475204], [-1840, -8]], [[180459, 475196], [-55, 2307], [-389, 209], [74, 2718], [-486, 2042], [-30, 3598], [-454, 235], [-372, 1160]], [[189738, 480811], [-430, 716], [-125, 1526], [-435, 7]], [[188748, 483060], [3, 5605]], [[251477, 488148], [-1, -4871]], [[251476, 483277], [-337, -10]], [[251139, 483267], [-664, 187]], [[250475, 483454], [214, 6325]], [[250475, 483454], [-987, -9]], [[297604, 482655], [-139, -532], [-150, -6297]], [[297315, 475826], [-695, -198], [-380, 611]], [[296240, 476239], [-135, 842]], [[296105, 477081], [40, 1310], [261, -315], [91, 2133], [-178, 490], [251, 3496], [-332, 632], [104, 1630], [-255, 1002], [-235, -589]], [[158850, 479681], [187, -615], [253, -2715], [-331, -3405], [-528, -206], [-4, -1355]], [[158427, 471385], [-329, 3], [-438, -1061], [-659, -2952], [-995, -473], [-215, -851]], [[155791, 466051], [-605, -122], [-747, 708], [-3, 820]], [[154436, 467457], [-267, 105]], [[154169, 467562], [-22, 3823], [330, 1722], [-6, 3184], [-170, -24], [1, 3264], [-310, 1555], [0, 1720], [-955, 38]], [[153037, 482844], [167, 4714]], [[253492, 488077], [4, -6487]], [[253496, 481590], [-667, 11]], [[252829, 481601], [-2, 1625], [-1351, 51]], [[225178, 487325], [13, -6560]], [[225191, 480765], [-1074, 13]], [[224117, 480778], [-247, -3]], [[223870, 480775], [-37, 8118]], [[223870, 480775], [-1403, 11]], [[188748, 483060], [-631, 88]], [[254689, 488092], [84, -3796], [-251, -2704]], [[254522, 481592], [-692, -13]], [[253830, 481579], [-334, 11]], [[174502, 486508], [0, -3222], [108, -1], [1, -3245], [-110, -10], [5, -3146]], [[174506, 476884], [-750, 3480], [-170, 2161], [-513, 1621]], [[219866, 484772], [49, -6023]], [[219915, 478749], [-2825, -23]], [[180459, 475196], [-612, -24]], [[179847, 475172], [-1370, 2]], [[296105, 477081], [-1078, 261]], [[295027, 477342], [17, 4427], [-151, 1361], [-345, 332], [179, 2038]], [[212682, 484293], [-532, -1540], [1, -2394]], [[212151, 480359], [-2937, 18]], [[209214, 480377], [1, 473]], [[231510, 487288], [-2, -6495]], [[231508, 480793], [-1114, 5]], [[230394, 480798], [-1, 6502]], [[233181, 487268], [-7, -6468]], [[233174, 480800], [-1131, -9]], [[232043, 480791], [-535, 2]], [[239875, 487278], [4, -6493]], [[239879, 480785], [-1250, -4]], [[238629, 480781], [-422, 3]], [[238207, 480784], [0, 6488]], [[241549, 487010], [0, -6211]], [[241549, 480799], [-290, -4]], [[241259, 480795], [-1313, -10]], [[239946, 480785], [-67, 0]], [[244871, 485042], [-34, -2082], [143, -2160]], [[244980, 480800], [-1096, 2]], [[243884, 480802], [-334, 1]], [[243550, 480803], [0, 6445]], [[226175, 487319], [6, -6546]], [[226181, 480773], [-417, -14]], [[225764, 480759], [-573, 6]], [[227173, 487289], [6, -6502]], [[227179, 480787], [-998, -14]], [[243550, 480803], [-972, -1]], [[242578, 480802], [-1029, -3]], [[234848, 487269], [-4, -6463]], [[234844, 480806], [-164, -7]], [[234680, 480799], [-1319, -4]], [[233361, 480795], [-187, 5]], [[238207, 480784], [-899, -1]], [[237308, 480783], [-771, 10]], [[236537, 480793], [2, 6472]], [[230394, 480798], [-407, 0]], [[229987, 480798], [-908, -8]], [[229079, 480790], [-570, -5]], [[228509, 480785], [1, 6484]], [[236537, 480793], [-543, 5]], [[235994, 480798], [-1150, 8]], [[228509, 480785], [-758, 1]], [[227751, 480786], [-572, 1]], [[264620, 482073], [-6, -1618], [-556, -298]], [[264058, 480157], [-662, 0]], [[263396, 480157], [4, 6502]], [[259411, 486666], [-4, -6482]], [[259407, 480184], [-1174, 91]], [[258233, 480275], [-220, 3394], [303, 3068]], [[263396, 480157], [-664, 2]], [[262732, 480159], [-666, 1]], [[262066, 480160], [-12, 6470]], [[303109, 481453], [-237, -3362], [-309, -545], [-343, -4752], [-437, 1187]], [[301783, 473981], [56, 1697], [-493, 2897], [67, 2978]], [[262066, 480160], [-1330, 39]], [[260736, 480199], [0, 6468]], [[260736, 480199], [0, -3239]], [[260736, 476960], [-635, -23]], [[260101, 476937], [-693, 9], [-1, 3238]], [[295027, 477342], [-54, -6909]], [[294973, 470433], [-1008, -45]], [[293965, 470388], [167, 2590], [-54, 4202]], [[294078, 477180], [-94, 3357], [378, 3144], [153, 2763]], [[175189, 473575], [-333, 1506], [-129, 1913], [-221, -110]], [[294078, 477180], [-671, -974], [-134, 2686], [-769, -494]], [[221811, 480787], [-2, -9342]], [[221809, 471445], [-1850, 12]], [[219959, 471457], [-44, 7292]], [[300852, 481523], [10, -3417], [-211, -1323]], [[300651, 476783], [-895, 3174], [-123, -380], [-353, 2396]], [[266573, 485031], [2, -1115], [972, 142]], [[267547, 484058], [-7, -6487]], [[267540, 477571], [-652, -90], [7, -1620], [-304, -225]], [[266591, 475636], [-654, -33]], [[265937, 475603], [-9, 4796]], [[265926, 482460], [509, 2703], [138, -132]], [[247502, 483414], [4, -1618]], [[247506, 481796], [-1005, -19], [9, -2420]], [[246510, 479357], [-1496, -1]], [[245014, 479356], [-34, 1444]], [[286839, 484139], [-17, 6]], [[288057, 480239], [-163, 246], [-201, -2952], [7, -3155]], [[287700, 474378], [-304, 518]], [[287396, 474896], [-580, 1633], [-156, -691], [-618, -120]], [[286042, 475718], [-350, 485], [-33, 3060]], [[285659, 479263], [575, 1959], [489, 118], [146, 2788]], [[214631, 478741], [5, -4840], [73, -2431]], [[214709, 471470], [-1977, 12]], [[212732, 471482], [-581, 13]], [[212151, 471495], [0, 8864]], [[269259, 474627], [-1374, -276]], [[267885, 474351], [-11, 2435], [-334, 785]], [[267547, 484058], [1423, 278]], [[268970, 484336], [189, -4720], [100, -4989]], [[178613, 467170], [-2, -14381]], [[178611, 452789], [-3086, 40], [-2428, 19]], [[173097, 452848], [-25, 12]], [[251139, 483267], [-6, -6482]], [[251133, 476785], [-1982, 150]], [[249151, 476935], [333, 1630], [6, 3333], [-358, 175], [-163, 1342]], [[249151, 476935], [-329, -1618]], [[248822, 475317], [-991, -773]], [[247831, 474544], [7, 7270], [-332, -18]], [[252829, 481601], [-49, -6494]], [[252780, 475107], [-329, 24]], [[252451, 475131], [-1317, 31]], [[251134, 475162], [-1, 1623]], [[189740, 477359], [2, -5504]], [[189742, 471855], [-1522, -1]], [[188220, 471854], [5, 4869], [-654, 11], [0, 1562], [-614, 10], [-169, 1088], [-1161, 0], [1, 3750]], [[188220, 471854], [-1319, 43]], [[186901, 471897], [-1652, -8], [-264, -1314]], [[184985, 470575], [-184, -1640], [-531, -4], [-1, 4615]], [[161075, 482939], [-46, -16197], [1299, -28], [11, -13964]], [[162339, 452750], [-1582, 69]], [[160757, 452819], [-2347, 191]], [[158410, 453010], [17, 18375]], [[166572, 452759], [-1780, 9]], [[164792, 452768], [-2453, -18]], [[289573, 469248], [-100, -158]], [[289473, 469090], [-527, -153], [-20, 1299], [-279, -24], [-23, 1969], [-519, 2369], [-405, -172]], [[300651, 476783], [-32, -196]], [[300619, 476587], [-404, -4938]], [[300215, 471649], [-352, 1116], [-342, -274], [-74, 1832], [-524, -694], [-159, 1712], [-267, -361]], [[298497, 474980], [-226, 2507], [101, 2206], [330, 1627]], [[154169, 467562], [-316, -270], [-199, -1663], [-396, -276], [-61, 3941], [-268, 1346], [-619, 4]], [[152310, 470644], [269, 5888], [458, 6312]], [[298497, 474980], [-81, -1100]], [[298416, 473880], [-391, 59], [61, 931], [-822, -385]], [[297264, 474485], [51, 1341]], [[301783, 473981], [-163, -963]], [[301620, 473018], [-513, -14], [127, 1049], [-615, 2534]], [[265937, 475603], [-658, -19], [7, -1630]], [[265286, 473954], [-1222, -81]], [[264064, 473873], [-6, 6284]], [[247831, 474544], [-656, 678]], [[247175, 475222], [-660, -542]], [[246515, 474680], [-5, 4677]], [[254522, 481592], [-329, -5331], [50, -1204]], [[254243, 475057], [-476, 2]], [[253767, 475059], [63, 6520]], [[253767, 475059], [-987, 48]], [[238629, 480781], [-1, -4544]], [[238628, 476237], [-1318, -2]], [[237310, 476235], [-2, 4548]], [[237308, 469765], [-1314, 6]], [[235994, 469771], [-1, 6459]], [[235993, 476230], [1, 4568]], [[237310, 476235], [-2, -6470]], [[234682, 476230], [-1321, 3]], [[233361, 476233], [0, 4562]], [[234680, 480799], [2, -4569]], [[235993, 476230], [-1311, 0]], [[239946, 476238], [-1318, -1]], [[239946, 480785], [0, -4547]], [[233361, 476233], [-1320, 44]], [[232041, 476277], [2, 4514]], [[209214, 480377], [4, -8812]], [[209218, 471565], [2, -7313]], [[209220, 464252], [-1680, -40]], [[207540, 464212], [-659, -10]], [[206881, 464202], [-21, 16582]], [[241256, 475444], [-1310, 0]], [[239946, 475444], [0, 794]], [[241259, 480795], [-3, -5351]], [[232041, 476277], [-1932, 42]], [[230109, 476319], [87, 2489], [-209, 1990]], [[242578, 480802], [-3, -5356]], [[242575, 475446], [-1319, -2]], [[245014, 479356], [3, -1361], [406, -1716], [-330, -3304]], [[245093, 472975], [-1193, 27]], [[243900, 473002], [-16, 7800]], [[243900, 473002], [-1326, 21]], [[242574, 473023], [1, 2423]], [[230109, 476319], [223, -746], [59, -2539]], [[230391, 473034], [-980, 6]], [[229411, 473040], [-330, 1]], [[229081, 473041], [-2, 7749]], [[206881, 464202], [-1098, -59], [7, -3246]], [[205790, 460897], [-134, -6], [-121, -2625], [-665, 267], [162, 2347], [-1442, 51]], [[203590, 460931], [-6, -1]], [[203584, 460930], [-7, 19758]], [[224117, 480778], [91, -2393], [1571, -3238]], [[225779, 475147], [90, -531]], [[225869, 474616], [-47, -3529], [-166, -2602]], [[225656, 468485], [-436, 812]], [[225220, 469297], [-525, 2161]], [[224695, 471458], [-1032, 3040], [-78, 1581], [-470, 1324], [-243, 2027], [-405, 1356]], [[229081, 473041], [-659, -11]], [[228422, 473030], [0, 1617], [-664, -11]], [[227758, 474636], [-7, 6150]], [[227758, 474636], [-664, -12]], [[227094, 474624], [-1225, -8]], [[225779, 475147], [-15, 5612]], [[203584, 460930], [-1530, -51], [-2502, 73]], [[224695, 471458], [-2109, -11]], [[222586, 471447], [-777, -2]], [[212151, 471495], [-1401, 0]], [[210750, 471495], [-1532, 70]], [[260101, 476937], [-2, -1635]], [[260099, 475302], [-327, 13], [3, -1619], [-1017, -10]], [[258758, 473686], [-525, 6589]], [[262732, 480159], [25, -6464]], [[262757, 473695], [-1325, -1]], [[261432, 473694], [1, 3265], [-697, 1]], [[195315, 457774], [-2814, 131]], [[192501, 457905], [-1359, 126], [-5, 3184], [-131, -1], [32, 14647]], [[264064, 473873], [0, -195]], [[264064, 473678], [-1307, 17]], [[246515, 474680], [-1111, -3346], [-255, -72]], [[245149, 471262], [-56, 1713]], [[286042, 475718], [-35, -4144], [115, -2964], [261, 69], [229, -1456]], [[286612, 467223], [26, -2749]], [[286638, 464474], [-1117, -2]], [[285521, 464472], [-187, 1944], [55, 5513]], [[285389, 471929], [-24, 5903]], [[285365, 477832], [294, 1431]], [[293965, 470388], [-115, -2941]], [[293850, 467447], [-369, -82]], [[293481, 467365], [-266, 2462], [-523, 831]], [[292692, 470658], [-14, 506]], [[292678, 471164], [-119, 5046]], [[217090, 478726], [0, -7283]], [[217090, 471443], [-2381, 27]], [[219959, 471457], [-2869, -14]], [[281818, 478275], [-5, -4317]], [[281813, 473958], [-1305, -81]], [[280508, 473877], [0, 4510]], [[280508, 478387], [1310, -112]], [[280508, 473877], [4, -838]], [[280512, 473039], [-752, 7], [-414, -1124]], [[279346, 471922], [-518, 1157], [12, 3307], [719, 1122], [949, 879]], [[283548, 476627], [9, -4499]], [[283557, 472128], [-318, -2], [8, -1702], [-272, 15]], [[282975, 470439], [-429, 32], [9, 795], [-498, -12]], [[282057, 471254], [10, 2715], [-254, -11]], [[281818, 478275], [657, -444], [527, -1886], [546, 682]], [[285389, 471929], [-697, -202]], [[284692, 471727], [-474, 498], [-661, -97]], [[283548, 476627], [635, 252], [429, -526], [753, 1479]], [[267885, 474351], [36, -4847]], [[267921, 469504], [-333, -95]], [[267588, 469409], [-976, -154]], [[266612, 469255], [-21, 6381]], [[192501, 457905], [15, -12907]], [[192516, 444998], [-2779, 44]], [[189737, 445042], [-3, 7852]], [[189734, 452894], [0, 9524]], [[189734, 462418], [8, 9437]], [[296240, 476239], [-137, -2649], [-357, 111], [-31, -3520], [241, -60], [-25, -3493]], [[295931, 466628], [-259, 35]], [[295672, 466663], [-674, 89]], [[294998, 466752], [-25, 3681]], [[251134, 475162], [-13, -6522]], [[251121, 468640], [-991, -44]], [[250130, 468596], [-1308, 231]], [[248822, 468827], [0, 6490]], [[261432, 473694], [8, -6496]], [[261440, 467198], [-657, -32]], [[260783, 467166], [-660, 1]], [[260123, 467167], [-24, 8135]], [[292678, 471164], [-1239, 47], [-606, 1154]], [[301620, 473018], [189, 655], [301, -1389], [-295, -3187]], [[301815, 469097], [-594, -238], [-94, -984], [-503, -1185]], [[300624, 466690], [-506, 1532], [-67, 1969], [164, 1458]], [[287396, 474896], [215, -2007], [56, -5300]], [[287667, 467589], [-1055, -366]], [[297264, 474485], [21, -2797], [-310, -2918], [270, -2371]], [[297245, 466399], [-1314, 229]], [[232041, 476277], [7, -6487]], [[232048, 469790], [-1892, -6]], [[230156, 469784], [78, 2629], [157, 621]], [[233361, 476233], [0, -6428]], [[233361, 469805], [-1313, -15]], [[239946, 475444], [-2, -5679]], [[239944, 469765], [-1320, 14]], [[238624, 469779], [4, 6458]], [[238624, 469779], [-1316, -14]], [[235994, 469771], [-1312, 30]], [[234682, 469801], [0, 6429]], [[234682, 469801], [-1321, 4]], [[266612, 469255], [-658, -171], [8, -1637]], [[265962, 467447], [-657, -46]], [[265305, 467401], [-19, 6553]], [[242574, 473023], [-1, -3272]], [[242573, 469751], [-1317, 2]], [[241256, 469753], [0, 5691]], [[241256, 469753], [-1312, 12]], [[248822, 468827], [0, -811]], [[248822, 468016], [-1639, -18]], [[247183, 467998], [-8, 7224]], [[247183, 467998], [1, -5693]], [[247184, 462305], [-597, 23]], [[246587, 462328], [-172, 2279], [-542, 826]], [[245873, 465433], [-469, 1435], [-255, 4394]], [[300624, 466690], [-29, -122]], [[300595, 466568], [-107, -727], [-1684, 269]], [[298804, 466110], [-84, 15]], [[298720, 466125], [-215, 4313], [-157, 17], [68, 3425]], [[260123, 467167], [-1187, -13]], [[258936, 467154], [-50, 4105], [-128, 2427]], [[182299, 475204], [2, -6521], [-141, -1591], [-469, 14]], [[181691, 467106], [-326, 810], [-824, 10], [-55, 776], [-638, 0]], [[179848, 468702], [-1, 6470]], [[179848, 468702], [-62, -3749]], [[179786, 464953], [-567, 397], [-336, 2247], [112, 1245], [-371, 1003]], [[252451, 475131], [-15, -6573]], [[252436, 468558], [-656, -5]], [[251780, 468553], [-659, 87]], [[182974, 465323], [-239, -239], [-274, -2259], [-767, 3]], [[181694, 462828], [-3, 4278]], [[253767, 475059], [-17, -6494]], [[253750, 468565], [-659, -23]], [[253091, 468542], [-655, 16]], [[254243, 475057], [184, -6512]], [[254427, 468545], [-677, 20]], [[289473, 469090], [-133, -2371]], [[289340, 466719], [-1655, -378]], [[287685, 466341], [-18, 1248]], [[298720, 466125], [-986, 173]], [[297734, 466298], [-489, 101]], [[228422, 473030], [1, -5277]], [[228423, 467753], [-412, 1263], [-492, -321]], [[227519, 468695], [-420, 22]], [[227099, 468717], [-5, 5907]], [[227099, 468717], [-647, 152], [-239, -1688], [-226, -92], [-331, 1396]], [[265305, 467401], [-657, -77]], [[264648, 467324], [-572, -17]], [[264076, 467307], [-12, 6371]], [[282057, 471254], [-126, -2331]], [[281931, 468923], [-1419, 92]], [[280512, 469015], [0, 4024]], [[262757, 473695], [0, -6487]], [[262757, 467208], [-661, 6]], [[262096, 467214], [-656, -16]], [[264076, 467307], [-666, -109]], [[263410, 467198], [-653, 10]], [[184985, 470575], [7, -701], [463, 1104], [182, -1173], [55, -3295], [326, -1617], [-112, -2668]], [[185906, 462225], [-218, 4], [1, -1622], [-435, 0], [0, -1621], [-966, -26]], [[184288, 458960], [-6, 4851], [-652, 692]], [[279029, 472686], [285, -725], [-124, -1250], [-161, 1975]], [[280512, 469015], [1, -6165]], [[280513, 462850], [-1172, -1823], [-491, 1851]], [[278850, 462878], [-210, 586]], [[278640, 463464], [245, 2248], [543, 1800], [-163, 3147], [81, 1263]], [[230156, 469784], [-257, -2657], [18, -1097], [319, -1425], [30, -1300]], [[230266, 463305], [144, -1321]], [[230410, 461984], [-513, 643]], [[229897, 462627], [-186, 2345], [-301, 1002]], [[229410, 465974], [1, 7066]], [[229410, 465974], [-586, 1070]], [[228824, 467044], [-401, 709]], [[243900, 473002], [-5, -8148]], [[243895, 464854], [-1322, -36]], [[242573, 464818], [0, 4933]], [[245873, 465433], [-1, -548], [-656, 3]], [[245216, 464888], [-1321, -34]], [[292692, 470658], [24, -1087], [-500, -1877]], [[292216, 467694], [-534, -438], [-538, 1053]], [[291144, 468309], [-321, 627]], [[284692, 471727], [-24, -4635]], [[284668, 467092], [-949, -54], [-149, -3443]], [[283570, 463595], [-344, 17]], [[283226, 463612], [9, 1731], [-312, 32], [52, 5064]], [[186901, 471897], [-242, -2320], [147, -3747], [355, 398], [146, -1874], [116, -3739]], [[187423, 460615], [-60, -2973], [-639, 533]], [[186724, 458175], [-179, 1227], [-382, -494], [85, 2410], [-342, 907]], [[189734, 462418], [-524, -640], [35, 1742], [-1063, 341], [13, -3257]], [[188195, 460604], [-772, 11]], [[285521, 464472], [224, -1370], [-308, -59]], [[285437, 463043], [-555, -96]], [[284882, 462947], [2, 2099], [-216, 2046]], [[210915, 461007], [1, -6454], [118, -1622]], [[211034, 452931], [-1814, -34]], [[209220, 452897], [0, 11355]], [[210750, 471495], [65, -4017], [1, -6472], [99, 1]], [[214922, 454659], [-168, -1623]], [[214754, 453036], [-1702, -73]], [[213052, 452963], [-57, -9]], [[212995, 452954], [-125, 1631], [-19, 6469], [-66, 0]], [[212785, 461054], [0, 6429], [-53, 3999]], [[214709, 471470], [45, -10349], [76, -3], [-3, -6452], [95, -7]], [[212785, 461054], [-1870, -47]], [[225220, 469297], [14, -2262]], [[225234, 467035], [-777, 346], [-863, 1234], [-165, 870], [-849, -1646]], [[222580, 467839], [6, 3608]], [[222580, 467839], [-780, -1614], [-391, 246]], [[221409, 466471], [-1271, 1433], [-179, 712]], [[219959, 468616], [0, 2841]], [[219959, 468616], [86, -14153]], [[220045, 454463], [-279, 6]], [[219766, 454469], [-1612, 38]], [[218154, 454507], [-1617, 75]], [[216537, 454582], [-1615, 77]], [[158410, 453010], [-2620, -73]], [[155790, 452937], [1, 13114]], [[283226, 463612], [-473, 56], [-176, -2030]], [[282577, 461638], [-328, 866], [-551, 59]], [[281698, 462563], [229, 2736], [4, 3624]], [[294998, 466752], [-244, -4393]], [[294754, 462359], [-1202, -851]], [[293552, 461508], [61, 2653], [237, 3286]], [[293481, 467365], [-1033, -911]], [[292448, 466454], [-257, -291], [25, 1531]], [[154436, 467457], [-322, -2815], [-164, -2463], [-328, -78], [-48, -2548], [372, -119], [282, -2181], [-185, -1760], [100, -2713]], [[154143, 452780], [-1087, 57]], [[153056, 452837], [-394, 1953], [-208, 4302], [105, 4473], [-70, 1598], [-265, 1357], [-113, 2029], [199, 2095]], [[179786, 464953], [673, -952], [683, -1921], [360, 584]], [[181502, 462664], [-185, -222], [-7, -1813], [-600, 5], [9, -7878]], [[180719, 452756], [-2108, 33]], [[232048, 469790], [-2, -6489]], [[232046, 463301], [-1780, 4]], [[234682, 469801], [-2, -6506]], [[234680, 463295], [-1319, 28]], [[233361, 463323], [0, 6482]], [[233361, 463323], [-985, -8]], [[232376, 463315], [-330, -14]], [[235994, 469771], [0, -4896]], [[235994, 464875], [0, -1606]], [[235994, 463269], [-1314, 26]], [[238624, 469779], [-2, -6531]], [[238622, 463248], [-1316, 8]], [[237306, 463256], [0, 1612]], [[237306, 464868], [2, 4897]], [[237306, 464868], [-1312, 7]], [[239944, 469765], [-5, -6533]], [[239939, 463232], [-1317, 16]], [[241256, 469753], [-1, -4930]], [[241255, 464823], [1, -1611]], [[241256, 463212], [-1317, 20]], [[242573, 464818], [-1318, 5]], [[291144, 468309], [49, -3777], [-226, -2027]], [[290967, 462505], [-369, -97], [-984, -2871], [-607, -823]], [[289007, 458714], [112, 1788], [-67, 1882], [190, 1044], [98, 3291]], [[225234, 467035], [13, -6036]], [[225247, 460999], [-1, -6480]], [[225246, 454519], [-1283, -6]], [[223963, 454513], [-1286, -11]], [[222677, 454502], [-33, 1]], [[222644, 454503], [-31, 12930], [-33, 406]], [[268694, 465642], [-316, -1304], [-142, -3078]], [[268236, 461260], [-593, -70]], [[267643, 461190], [-55, 8219]], [[267921, 469504], [681, 71], [92, -3933]], [[267643, 461190], [-1306, -224]], [[266337, 460966], [-314, -74]], [[266023, 460892], [-61, 6555]], [[301815, 469097], [129, -3012], [504, -1290], [-172, -916], [-656, -1010], [-20, -1436], [-247, -531]], [[301353, 460902], [-115, 245]], [[301238, 461147], [-90, 2975], [-550, 962], [-3, 1484]], [[227519, 468695], [-1, -7665]], [[227518, 461030], [-973, -16]], [[226545, 461014], [-1298, -15]], [[228824, 467044], [-4, -7638]], [[228820, 459406], [-975, 10]], [[227845, 459416], [1, 1618], [-328, -4]], [[281698, 462563], [-753, 1]], [[280945, 462564], [-432, 286]], [[250130, 468596], [8, -6418]], [[250138, 462178], [-98, 3]], [[250040, 462181], [-1216, 98]], [[248824, 462279], [-2, 5737]], [[181694, 462828], [-192, -164]], [[251780, 468553], [1, -6528]], [[251781, 462025], [-456, 56]], [[251325, 462081], [-1187, 97]], [[221409, 466471], [43, -12005]], [[221452, 454466], [-68, 2]], [[221384, 454468], [-1339, -5]], [[253091, 468542], [1, -4306]], [[253092, 464236], [4, -2163]], [[253096, 462073], [-1122, -20]], [[251974, 462053], [-193, -28]], [[254427, 468545], [185, -1078], [-127, -2165]], [[254485, 465302], [-1064, 31], [0, -1088], [-329, -9]], [[292448, 466454], [-171, -3336], [-36, -2653]], [[292241, 460465], [-527, -991]], [[291714, 459474], [-489, 1292], [-258, 1739]], [[293552, 461508], [-1311, -1043]], [[248824, 462279], [-246, 1]], [[248578, 462280], [-1394, 25]], [[222644, 454503], [-1192, -37]], [[287015, 460503], [-343, -50]], [[286672, 460453], [-34, 4021]], [[287685, 466341], [71, -5738]], [[287756, 460603], [-741, -100]], [[155790, 452937], [-801, -56]], [[154989, 452881], [-846, -101]], [[266023, 460892], [-1299, -123]], [[264724, 460769], [-27, 1]], [[264697, 460770], [-49, 6554]], [[264697, 460770], [-1281, -49]], [[263416, 460721], [-6, 6477]], [[263416, 460721], [-329, -8]], [[263087, 460713], [-984, -2]], [[262103, 460711], [-7, 6503]], [[262103, 460711], [-633, -31]], [[261470, 460680], [-681, 31]], [[260789, 460711], [-6, 6455]], [[260789, 460711], [-616, -17]], [[260173, 460694], [-1419, -23]], [[258754, 460671], [182, 6483]], [[284882, 462947], [17, -1461], [-606, 385]], [[284293, 461871], [-102, 1734], [-621, -10]], [[229897, 462627], [-253, 6], [-13, -4592]], [[229631, 458041], [-267, -255]], [[229364, 457786], [-544, 3], [0, 1617]], [[295672, 466663], [201, -1870], [-69, -1579]], [[295804, 463214], [-69, -4534]], [[295735, 458680], [-148, -5074]], [[295587, 453606], [-1209, 182]], [[294378, 453788], [-26, 1]], [[294352, 453789], [-31, 693], [433, 7877]], [[289007, 458714], [-9, -2219]], [[288998, 456495], [-609, 11], [-4, 989], [-572, 204], [-57, 2904]], [[297645, 459261], [-169, 1430], [-916, -277], [9, 883], [-474, 582], [-291, 1335]], [[297734, 466298], [148, -1092], [-43, -2781], [-194, -3164]], [[301238, 461147], [-70, -968]], [[301168, 460179], [-67, -42]], [[301101, 460137], [28, -397]], [[301129, 459740], [-2, -4]], [[301127, 459736], [-256, -726]], [[300871, 459010], [-22, -491]], [[300849, 458519], [-74, -391]], [[300775, 458128], [-385, 553], [-40, -2082], [-373, -817]], [[299977, 455782], [-294, 712], [-11, 1200], [281, 1310], [-388, 368], [185, 1163], [57, 2437], [-390, -235], [39, 1514], [-540, 410], [-112, 1449]], [[299977, 455782], [-56, -2597]], [[299921, 453185], [-840, -170]], [[299081, 453015], [-844, 386]], [[298237, 453401], [-93, 26]], [[298144, 453427], [2, 2449], [-359, 413], [119, 1140]], [[297906, 457429], [27, 1227], [-288, 605]], [[184288, 458960], [0, -6129]], [[184288, 452831], [-2898, -84]], [[181390, 452747], [-671, 9]], [[246587, 462328], [-37, -555], [502, -1806]], [[247052, 459967], [-532, 14], [-3, -1630], [-647, 10]], [[245870, 458361], [-646, 9]], [[245224, 458370], [-8, 6518]], [[254485, 465302], [3, -3266]], [[254488, 462036], [-1092, 46]], [[253396, 462082], [-300, -9]], [[245224, 458370], [-650, 14]], [[244574, 458384], [-651, -1]], [[243923, 458383], [-28, 6471]], [[237306, 463256], [111, -1603], [2, -4877]], [[237419, 456776], [-650, -3]], [[236769, 456773], [-649, -14]], [[236120, 456759], [0, 4918], [-126, 1592]], [[243923, 458383], [-652, 50]], [[243271, 458433], [-651, -34]], [[242620, 458399], [-47, 6419]], [[242620, 458399], [-652, 5]], [[241968, 458404], [-654, -10]], [[241314, 458394], [-58, 4818]], [[286672, 460453], [9, -2065], [-460, 404], [-3, -1031], [-340, 350]], [[285878, 458111], [-226, 20]], [[285652, 458131], [-201, 28], [-14, 4884]], [[209220, 452897], [0, -5655]], [[209220, 447242], [0, -2490]], [[209220, 444752], [-1672, 14], [-2, 1638]], [[207546, 446404], [-6, 17808]], [[207546, 446404], [-1740, 69]], [[205806, 446473], [-16, 14424]], [[189734, 452894], [-1285, -40]], [[188449, 452854], [-244, 1758], [-87, 2140], [178, 1265], [-101, 2587]], [[284293, 461871], [21, -3935], [375, 114]], [[284689, 458050], [-2, -5188]], [[284687, 452862], [-1795, -1]], [[282892, 452861], [-390, -47]], [[282502, 452814], [75, 8824]], [[278850, 462878], [-1, -10016]], [[278849, 452862], [-1529, -46]], [[277320, 452816], [-423, 27], [0, 5035]], [[276897, 457878], [602, 1757], [633, 2570], [508, 1259]], [[232376, 463315], [-1, -1601], [202, -12], [-4, -4901]], [[232573, 456801], [-1911, 66]], [[230662, 456867], [1, 1146]], [[230663, 458013], [-154, 1202], [39, 2677], [-138, 92]], [[234680, 463295], [161, -1606], [-5, -4921]], [[234836, 456768], [-648, 13]], [[234188, 456781], [-647, 11]], [[233541, 456792], [3, 4901], [-183, 1630]], [[233541, 456792], [-968, 9]], [[236120, 456759], [-644, 5]], [[235476, 456764], [-640, 4]], [[238622, 463248], [103, -1619], [-1, -4867]], [[238724, 456762], [-656, 0]], [[238068, 456762], [-649, 14]], [[239939, 463232], [70, -6471]], [[240009, 456761], [-640, -7]], [[239369, 456754], [-645, 8]], [[241314, 458394], [-654, -6], [2, -1612]], [[240662, 456776], [-653, -15]], [[297906, 457429], [-486, -1106], [-24, 858], [-523, -375], [-118, 1160], [-154, -1681], [-621, 1035], [76, 1737], [-321, -377]], [[285652, 458131], [-963, -81]], [[280945, 462564], [4, -9702]], [[280949, 452862], [-1704, -49]], [[279245, 452813], [-396, 49]], [[230663, 458013], [-1032, 28]], [[282502, 452814], [-1272, 48]], [[281230, 452862], [-281, 0]], [[291714, 459474], [-261, -2859], [238, -599]], [[291691, 456016], [-916, -2846]], [[290775, 453170], [-1003, -3057]], [[289772, 450113], [-329, 184], [-290, 2565]], [[289153, 452862], [-165, 773], [10, 2860]], [[248578, 462280], [18, -5760]], [[248596, 456520], [-1109, -47]], [[247487, 456473], [-210, 622], [-225, 2872]], [[294352, 453789], [-85, -1334], [-514, 519], [-607, 1358]], [[293146, 454332], [53, 903]], [[293199, 455235], [352, 2851], [1, 3422]], [[249239, 456572], [-643, -52]], [[250040, 462181], [14, -5552]], [[250054, 456629], [-815, -57]], [[251325, 462081], [1, -6380]], [[251326, 455701], [-650, -39], [2, 1006], [-624, -39]], [[186724, 458175], [47, -5356]], [[186771, 452819], [-155, 1]], [[186616, 452820], [-2328, 11]], [[253396, 462082], [-8, -6345]], [[253388, 455737], [-108, 0]], [[253280, 455737], [-976, -13]], [[252304, 455724], [-325, 0]], [[251979, 455724], [-5, 6329]], [[251979, 455724], [-653, -23]], [[254614, 455702], [-1226, 35]], [[254488, 462036], [-82, -3532], [208, -2802]], [[293199, 455235], [-367, 801], [-92, -1372], [-647, 330], [-402, 1022]], [[301127, 459736], [69, -1616]], [[301196, 458120], [-253, -1012], [-168, 1020]], [[300849, 458519], [22, 491]], [[301101, 460137], [28, -397]], [[301353, 460902], [-185, -723]], [[227845, 459416], [-2, -4858]], [[227843, 454558], [-1298, -23]], [[226545, 454535], [0, 6479]], [[212995, 452954], [-1853, -34]], [[211142, 452920], [-108, 11]], [[226545, 454535], [3, -3228]], [[226548, 451307], [-1288, -26]], [[225260, 451281], [-14, 3238]], [[266372, 454458], [-653, -58]], [[265719, 454400], [-998, -202]], [[264721, 454198], [3, 6571]], [[266337, 460966], [35, -6508]], [[203590, 460931], [14, -19329], [-709, 2], [8, -7373]], [[202903, 434231], [-1501, 67]], [[201402, 434298], [-1280, 5]], [[200122, 434303], [-1672, -17]], [[198450, 434286], [-31, 12241], [1170, -39], [16, 8015], [-52, 3235]], [[205806, 446473], [3, -12257]], [[205809, 434216], [-2546, -6]], [[203263, 434210], [-360, 21]], [[188449, 452854], [-1678, -35]], [[264721, 454198], [-644, 35]], [[264077, 454233], [-965, -59]], [[263112, 454174], [-25, 6539]], [[263112, 454174], [-326, 40]], [[262786, 454214], [-1301, -17]], [[261485, 454197], [-15, 6483]], [[260173, 460694], [4, -6538]], [[260177, 454156], [-1281, 40]], [[258896, 454196], [-2, 3199], [-392, -3]], [[258502, 457392], [252, 3279]], [[261485, 454197], [-1308, -41]], [[289153, 452862], [-334, -22]], [[288819, 452840], [-1736, 22]], [[287083, 452862], [-29, 3458], [98, 835], [-137, 3348]], [[287083, 452862], [-115, 0]], [[286968, 452862], [-1145, 0]], [[285823, 452862], [55, 5249]], [[247487, 456473], [432, -1435], [25, -1576]], [[247944, 453462], [-2075, 28]], [[245869, 453490], [1, 4871]], [[229364, 457786], [-3, -3239]], [[229361, 454547], [-545, 3]], [[228816, 454550], [-973, 8]], [[301793, 457791], [116, -446]], [[301909, 457345], [-116, 446]], [[301196, 458120], [304, -647]], [[301500, 457473], [18, -1676], [-433, -1151]], [[301085, 454646], [-839, -2061]], [[300246, 452585], [-325, 600]], [[298144, 453427], [-1041, 74]], [[297103, 453501], [-1391, 88]], [[295712, 453589], [-125, 17]], [[301909, 457345], [403, -2845], [-196, -1500], [475, -1515], [5, -2152]], [[302596, 449333], [-234, -1188]], [[302362, 448145], [-280, -205], [-97, -1526], [-241, -453]], [[301744, 445961], [-218, 3011], [-291, -217], [146, 1519], [-214, 1939], [-82, 2433]], [[301500, 457473], [293, 318]], [[243271, 458433], [-1, -8140]], [[243270, 450293], [-1301, 18]], [[241969, 450311], [-1, 8093]], [[244574, 458384], [-7, -6498]], [[244567, 451886], [-1, -1627]], [[244566, 450259], [-1296, 34]], [[241969, 450311], [-1303, -7]], [[240666, 450304], [-4, 6472]], [[245869, 453490], [0, -1629]], [[245869, 451861], [-1302, 25]], [[285823, 452862], [-1027, 0]], [[284796, 452862], [-109, 0]], [[230662, 456867], [249, -1941], [-15, -1181]], [[230896, 453745], [-107, -598], [-679, 14]], [[230110, 453161], [-2, 1378], [-747, 8]], [[198450, 434286], [-3153, -25]], [[195297, 434261], [-2649, -56]], [[192648, 434205], [-132, 0]], [[192516, 434205], [0, 10793]], [[277320, 452816], [-6, -2743]], [[277314, 450073], [-2528, -13]], [[274786, 450060], [0, 2383]], [[274786, 452443], [526, 1090], [1585, 4345]], [[258896, 454196], [-10, -5792]], [[258886, 448404], [-830, -14]], [[258056, 448390], [-838, 12]], [[257218, 448402], [580, 2540], [358, 3964], [346, 2486]], [[232573, 456801], [-5, -6485]], [[232568, 450316], [-1299, 60]], [[231269, 450376], [19, 2011], [-392, 1358]], [[240666, 450304], [-1298, 5]], [[239368, 450309], [1, 6445]], [[235476, 456764], [0, -6454]], [[235476, 450310], [-324, -7]], [[235152, 450303], [-969, 19]], [[234183, 450322], [5, 6459]], [[234183, 450322], [-1294, 1]], [[232889, 450323], [-321, -7]], [[238068, 456762], [1, -6440]], [[238069, 450322], [-327, 1]], [[237742, 450323], [-971, -4]], [[236771, 450319], [-2, 6454]], [[236771, 450319], [-324, -4]], [[236447, 450315], [-971, -5]], [[239368, 450309], [-323, 7]], [[239045, 450316], [-976, 6]], [[251326, 455701], [-4, -4851]], [[251322, 450850], [-1168, -69], [-750, 255]], [[249404, 451036], [-159, 537]], [[249245, 451573], [-6, 4999]], [[249245, 451573], [-1296, -31]], [[247949, 451542], [-5, 1920]], [[293146, 454332], [-66, -9101]], [[293080, 445231], [-482, -137], [-384, 934], [-288, -777]], [[291926, 445251], [-77, 1002], [-501, 1869], [338, 2426], [-911, 2622]], [[254614, 455702], [218, -1447], [203, -4307], [236, -2529]], [[255271, 447419], [-5, -4485]], [[255266, 442934], [-738, 65], [-9, 1649], [-322, -35], [-7, 1623], [-327, 775]], [[253863, 447011], [319, 581], [-17, 5162], [-953, -145]], [[253212, 452609], [68, 3128]], [[252304, 455724], [-36, -8081]], [[252268, 447643], [-1, -1640]], [[252267, 446003], [-939, -57]], [[251328, 445946], [-6, 4904]], [[253212, 452609], [3, -4871]], [[253215, 447738], [-947, -95]], [[216537, 454582], [2, -6501]], [[216539, 448081], [-1559, -13]], [[214980, 448068], [-230, -4], [4, 4972]], [[301744, 445961], [-236, -1675], [-533, -779]], [[300975, 443507], [-36, 3034], [-176, 276]], [[300763, 446817], [-87, 708]], [[300676, 447525], [-253, 1172]], [[300423, 448697], [-177, 3888]], [[218154, 454507], [9, -6476]], [[218163, 448031], [-1570, 53]], [[216593, 448084], [-54, -3]], [[230110, 453161], [-1, -5099]], [[230109, 448062], [-977, 14]], [[229132, 448076], [-318, 4]], [[228814, 448080], [2, 6470]], [[227843, 454558], [1, -6473]], [[227844, 448085], [-1288, -18]], [[226556, 448067], [-8, 3240]], [[228814, 448080], [-648, 1]], [[228166, 448081], [-322, 4]], [[219766, 454469], [6, -6448]], [[219772, 448021], [-1243, -2]], [[218529, 448019], [-366, 12]], [[225260, 451281], [0, -3234]], [[225260, 448047], [-1272, -16]], [[223988, 448031], [-19, 0]], [[223969, 448031], [-6, 6482]], [[221384, 454468], [0, -6438]], [[221384, 448030], [-1572, -10]], [[219812, 448020], [-40, 1]], [[222677, 454502], [3, -6462]], [[222680, 448040], [-1296, -10]], [[223969, 448031], [-1262, 5]], [[222707, 448036], [-27, 4]], [[265719, 454400], [30, -6681]], [[265749, 447719], [-327, -66]], [[265422, 447653], [-1337, -250]], [[264085, 447403], [-8, 6830]], [[294378, 453788], [-86, -7125]], [[294292, 446663], [-33, -2600]], [[294259, 444063], [-1125, -724], [-133, -918]], [[293001, 442421], [79, 2810]], [[302989, 445850], [-269, -1329], [-502, -405], [144, 4029]], [[302596, 449333], [321, -1188], [408, -370], [764, 1511], [-341, 4569], [401, -2137], [107, -3240], [-210, -1768], [-1057, -860]], [[262786, 454214], [4, -5818]], [[262790, 448396], [-1035, -6]], [[261755, 448390], [-266, 4]], [[261489, 448394], [-4, 5803]], [[264085, 447403], [-109, -15]], [[263976, 447388], [-1133, -180]], [[262843, 447208], [-53, 1188]], [[261489, 448394], [-1024, -14]], [[260465, 448380], [-349, 0]], [[260116, 448380], [69, 740], [-8, 5036]], [[260116, 448380], [-774, 26]], [[259342, 448406], [-456, -2]], [[295712, 453589], [-58, -1345], [397, 121], [-173, -3103], [-189, -154], [94, -2953]], [[295783, 446155], [-481, -2335], [-431, -844]], [[294871, 442976], [-365, 419], [-214, 3268]], [[231269, 450376], [205, -1282], [-160, -2131]], [[231314, 446963], [-897, 12]], [[230417, 446975], [1, 1083], [-309, 4]], [[297103, 453501], [5, -4180], [88, 63], [182, -3932]], [[297378, 445452], [-156, -333]], [[297222, 445119], [-108, 1174], [-581, -359], [-107, -908]], [[296426, 445026], [-541, -412], [-102, 1541]], [[298237, 453401], [8, -1300], [-328, -15], [-2, -2290], [170, -1515], [-230, -737]], [[297855, 447544], [-477, -2092]], [[247949, 451542], [-252, -2717]], [[247697, 448825], [-205, -1009]], [[247492, 447816], [-439, 832], [-670, -720], [-514, 681]], [[245869, 448609], [0, 3252]], [[299081, 453015], [27, -5279]], [[299108, 447736], [6, -1575]], [[299114, 446161], [-459, -103], [-560, 583], [-240, 903]], [[300423, 448697], [-95, -430]], [[300328, 448267], [-110, 207]], [[300218, 448474], [-189, -592], [-921, -146]], [[291926, 445251], [-301, -1609], [-771, -202], [-6, -1282]], [[290848, 442158], [-634, 1016], [-245, 2281]], [[289969, 445455], [47, 2798], [-244, 1860]], [[160757, 452819], [3, -15155]], [[160760, 437664], [-2931, -16]], [[157829, 437648], [51, 2567], [-254, 887], [-643, -3073], [-237, 34], [-240, -1728], [155, -2199], [-334, 193], [-289, 1393], [-274, -63], [-470, 1938]], [[155294, 437597], [-187, 3493], [-519, 272]], [[154588, 441362], [111, 941], [-260, 2964], [145, 1892], [-111, 2512], [386, 1397], [130, 1813]], [[214980, 448068], [2, -6472]], [[214982, 441596], [-197, 8], [0, -3231]], [[214785, 438373], [-1546, 1]], [[213239, 438374], [-74, 4047]], [[213165, 442421], [1, 5662], [-117, 1089], [3, 3791]], [[213165, 442421], [-2040, -25]], [[211125, 442396], [-4, 4869]], [[211121, 447265], [21, 5655]], [[188449, 452854], [0, -2741], [227, -3238], [-47, -2736], [-188, -2015]], [[188441, 442124], [-433, 106], [-167, -982], [-444, 939]], [[187397, 442187], [-88, 2092], [-181, -89], [-194, 3078], [-2, 3038], [-316, 2514]], [[211121, 447265], [-1901, -23]], [[189737, 445042], [-2, -6107]], [[189735, 438935], [-608, -2002]], [[189127, 436933], [120, 1272], [-305, 2684], [-250, 88]], [[188692, 440977], [-251, 1147]], [[286968, 452862], [88, -6472]], [[287056, 446390], [-234, -101], [-57, -1949]], [[286765, 444340], [-1655, 895]], [[285110, 445235], [-170, 122]], [[284940, 445357], [-144, 7505]], [[284940, 445357], [-238, -844], [-1781, -169]], [[282921, 444344], [-29, 8517]], [[187397, 442187], [-204, 138], [-194, -1813], [-583, 5], [-712, -4840]], [[185704, 435677], [-852, -1424], [-3463, -6]], [[181389, 434247], [1, 18500]], [[173097, 434253], [-1, -6650], [-636, -11], [-150, -2165]], [[172310, 425427], [-25, 2929], [-932, 15], [0, 3231], [-3183, -36], [0, 1954], [-1457, -9]], [[166713, 433511], [-56, 0], [16, 19240]], [[173097, 452848], [0, -18595]], [[181389, 434247], [-14, -16438]], [[181375, 417809], [-3390, 104], [-1591, 99]], [[176394, 418012], [-463, -9], [-437, 10035], [-1, 6208], [-1194, 10]], [[174299, 434256], [-1202, -3]], [[281230, 452862], [9, -7105]], [[281239, 445757], [-601, -298]], [[280638, 445459], [-179, 515], [-1317, -111]], [[279142, 445863], [103, 6950]], [[282921, 444344], [4, -1186]], [[282925, 443158], [-1089, -71]], [[281836, 443087], [-171, 13], [-426, 2657]], [[154588, 441362], [-303, -18], [-3, 1572], [-819, -17]], [[153463, 442899], [-268, 5083], [-262, 812], [123, 4043]], [[289969, 445455], [-804, -6748]], [[289165, 438707], [-411, -130]], [[288754, 438577], [180, 478], [-59, 7138]], [[288875, 446193], [-56, 6647]], [[288875, 446193], [-721, 12]], [[288154, 446205], [-1098, 185]], [[279142, 445863], [-1549, 12]], [[277593, 445875], [-281, -12]], [[277312, 445863], [2, 4210]], [[164792, 452768], [-2, -15096]], [[164790, 437672], [-3709, -1]], [[161081, 437671], [-321, -7]], [[166713, 433511], [-10, -8230], [-71, -9], [-1, -9667], [318, 15]], [[166949, 415620], [46, -3526], [105, -405], [-51, -2898]], [[167049, 408791], [-263, -206]], [[166786, 408585], [-506, -709], [-437, -1337], [-205, 182], [103, -3534], [-151, -1502]], [[165590, 401685], [-468, -1589], [-344, 2]], [[164778, 400098], [-9, 2800]], [[164769, 402898], [11, 2457]], [[164780, 405355], [7, 5109]], [[164787, 410464], [3, 27208]], [[253863, 447011], [-4, 808], [-643, -83]], [[253216, 447736], [-1, 2]], [[274786, 450060], [0, -6514]], [[274786, 443546], [-1348, 42]], [[273438, 443588], [-1, 3973]], [[273437, 447561], [3, 2574]], [[273440, 450135], [1346, 2308]], [[245869, 448609], [-4, -3244]], [[245865, 445365], [-1300, 23]], [[244565, 445388], [1, 4871]], [[249404, 451036], [-5, -5898]], [[249399, 445138], [-644, -16]], [[248755, 445122], [-901, 10]], [[247854, 445132], [-157, 3693]], [[226556, 448067], [1, -4023]], [[226557, 444044], [-752, -845], [-533, -1]], [[225272, 443198], [-12, 4849]], [[251328, 445946], [-635, 7], [1, -814]], [[250694, 445139], [-1295, -1]], [[232889, 450323], [0, -4862], [165, -1791]], [[233054, 443670], [-1388, 16]], [[231666, 443686], [-257, 439], [-95, 2838]], [[243270, 450293], [6, -6523]], [[243276, 443770], [-325, -13]], [[242951, 443757], [-980, -19]], [[241971, 443738], [-2, 6573]], [[237742, 450323], [69, -6544]], [[237811, 443779], [-1256, -154]], [[236555, 443625], [-108, 1818], [0, 4872]], [[234183, 450322], [1, -4860], [144, -1819]], [[234328, 443643], [-318, 10]], [[234010, 443653], [-956, 17]], [[235152, 450303], [2, -4798], [122, -1872]], [[235276, 443633], [-948, 10]], [[241971, 443738], [-319, -4]], [[241652, 443734], [-960, -13]], [[240692, 443721], [-26, 6583]], [[239045, 450316], [54, -6614]], [[239099, 443702], [0, -314]], [[239099, 443388], [-1288, 391]], [[240692, 443721], [-320, -6]], [[240372, 443715], [-1273, -13]], [[236555, 443625], [-1279, 8]], [[244565, 445388], [-5, -3262]], [[244560, 442126], [-322, 13]], [[244238, 442139], [-104, 1623], [-858, 8]], [[273437, 447561], [-275, -15], [3, -1356], [-539, -11], [-3, -1321], [-265, -4]], [[272358, 444854], [-272, 1148]], [[272086, 446002], [570, 2451], [784, 1682]], [[277312, 445863], [-602, -34], [-476, -2458]], [[276234, 443371], [-1448, -19]], [[274786, 443352], [0, 194]], [[247854, 445132], [-28, -825], [-657, -1554], [-5, -2417]], [[247164, 440336], [-1778, 119]], [[245386, 440455], [0, 4]], [[245386, 440459], [89, 1581], [707, 640]], [[246182, 442680], [363, 172], [871, 2340], [76, 2624]], [[300676, 447525], [-94, -1308], [-254, 2050]], [[246182, 442680], [7, 2674], [-324, 11]], [[300218, 448474], [-108, -2110]], [[300110, 446364], [-154, -894], [-847, -110]], [[299109, 445360], [5, 801]], [[260465, 448380], [14, -4389]], [[260479, 443991], [3, -1610]], [[260482, 442381], [-1131, -19]], [[259351, 442362], [0, 805]], [[259351, 443167], [-9, 5239]], [[259351, 443167], [-1136, -48], [2, -810]], [[258217, 442309], [-163, -2]], [[258054, 442307], [104, 4029], [-102, 2054]], [[258054, 442307], [-490, -569], [-231, -2173], [-408, -905]], [[256925, 438660], [-7, 8808]], [[256918, 447468], [300, 934]], [[262847, 444117], [-1085, -68]], [[261762, 444049], [-7, 4341]], [[262843, 447208], [4, -3091]], [[261762, 444049], [-1283, -58]], [[229132, 448076], [0, -5330]], [[229132, 442746], [-759, -1482], [-211, 136]], [[228162, 441400], [4, 6681]], [[228162, 441400], [-318, 228]], [[227844, 441628], [-642, -1180]], [[227202, 440448], [0, 1150], [-293, 1]], [[226909, 441599], [0, 2457], [-352, -12]], [[230417, 446975], [2, -2973], [320, -2435]], [[230739, 441567], [-395, 2]], [[230344, 441569], [-276, 747], [-936, 373]], [[229132, 442689], [0, 57]], [[218529, 448019], [-5, -6445]], [[218524, 441574], [-1550, 26]], [[216974, 441600], [-383, 10]], [[216591, 441610], [2, 6474]], [[216591, 441610], [-1609, -14]], [[225272, 443198], [0, -1617]], [[225272, 441581], [-1263, 5]], [[224009, 441586], [-19, -2]], [[223990, 441584], [-2, 6447]], [[222707, 448036], [24, -6451]], [[222731, 441585], [-12, -6462]], [[222719, 435123], [-608, -9]], [[222111, 435114], [-2224, 2]], [[219887, 435116], [-75, 6454]], [[219812, 441570], [0, 6450]], [[219812, 441570], [-1288, 4]], [[223990, 441584], [-1259, 1]], [[267414, 445851], [-697, -80]], [[266717, 445771], [-430, -33], [-394, -2264], [-479, -1510]], [[265414, 441964], [1, 1361]], [[265415, 443325], [7, 4328]], [[265749, 447719], [781, 160]], [[266530, 447879], [6, 1]], [[266536, 447880], [30, 6]], [[266566, 447886], [16, 1]], [[266582, 447887], [26, 6]], [[266608, 447893], [806, -2042]], [[255266, 442934], [-3, -3134]], [[255263, 439800], [-1357, -110], [6, -1614], [-648, -79]], [[253264, 437997], [-23, 4867]], [[253241, 442864], [-25, 4872]], [[267414, 445851], [546, -1926], [381, 1256], [294, -1579], [-868, -836]], [[267767, 442766], [-50, -4]], [[267717, 442762], [-15, -1]], [[267702, 442761], [-769, 5], [-213, 794]], [[266720, 443560], [-3, 2211]], [[253241, 442864], [-956, -107]], [[252285, 442757], [-18, 3246]], [[265415, 443325], [-1279, -38]], [[264136, 443287], [-108, 529], [-52, 3572]], [[273438, 443588], [0, -2864]], [[273438, 440724], [-1081, 8]], [[272357, 440732], [1, 4122]], [[299109, 445360], [-23, -3357], [-140, -1619]], [[298946, 440384], [-436, -420], [-482, 288], [-416, -839], [-291, 2723]], [[297321, 442136], [350, 235], [-50, 1822], [-299, -180], [-100, 1106]], [[256110, 445861], [10, -7107]], [[256120, 438754], [-157, -435]], [[255963, 438319], [-386, -1051], [-314, 72]], [[255263, 437340], [0, 2460]], [[255271, 447419], [248, -1016], [591, -542]], [[256925, 438660], [-559, 918], [-246, -824]], [[256110, 445861], [808, 1607]], [[264136, 443287], [1, -1079]], [[264137, 442208], [-1288, -28]], [[262849, 442180], [-2, 1937]], [[211125, 442396], [-24, -802]], [[211101, 441594], [-1879, -25]], [[209222, 441569], [-2, 3183]], [[231666, 443686], [163, -2163]], [[231829, 441523], [-1090, 44]], [[300704, 446133], [-85, -2792], [-210, 504], [295, 2288]], [[300975, 443507], [-208, -748], [-4, 4058]], [[294871, 442976], [348, -1153], [336, -2034], [-121, -1229]], [[295434, 438560], [-200, -1187], [-705, -2090], [-626, -1184]], [[293903, 434099], [-195, 2024], [683, 2086], [-173, 2860]], [[294218, 441069], [41, 2994]], [[209222, 441569], [-4, -7295]], [[209218, 434274], [-2479, -59]], [[206739, 434215], [-930, 1]], [[300110, 446364], [27, -3367], [-179, -1832], [-1042, -1243], [30, 462]], [[288154, 446205], [-316, -4003]], [[287838, 442202], [-487, -795], [-761, -134]], [[286590, 441273], [175, 3067]], [[297027, 438995], [-21, 79]], [[297006, 439074], [21, -79]], [[297321, 442136], [207, -2885], [-531, -113]], [[296997, 439138], [-298, 3270], [-256, -279], [-17, 2897]], [[296997, 439138], [9, -64]], [[297027, 438995], [-1112, 59], [-473, -1600], [-8, 1106]], [[288754, 438577], [-264, -1321]], [[288490, 437256], [-133, 485], [-104, 2828], [-415, 1633]], [[293001, 442421], [-13, -2191]], [[292988, 440230], [-683, -3303]], [[292305, 436927], [-373, 1055]], [[291932, 437982], [-934, 2866]], [[290998, 440848], [-150, 1310]], [[252285, 442757], [26, -6500]], [[252311, 436257], [-960, -39], [-2, -3314]], [[251349, 432904], [-323, -34]], [[251026, 432870], [0, 3328], [-319, -13]], [[250707, 436185], [-5, 3837]], [[250702, 440022], [-8, 5117]], [[272357, 440732], [-1, 0]], [[272356, 440732], [-569, 48], [73, -1359], [-321, -13]], [[271539, 439408], [-538, -39]], [[271001, 439369], [3, 1406], [-263, 14], [8, 2859]], [[270749, 443648], [623, -330], [714, 2684]], [[280638, 445459], [-3, -3673], [463, -4], [46, -3242]], [[281144, 438540], [-1140, 433], [-177, -967]], [[279827, 438006], [-70, 1137], [-624, 1848], [-379, -397]], [[278754, 440594], [88, 2092], [292, -301], [8, 3478]], [[278754, 440594], [-317, -166]], [[278437, 440428], [5, 1839], [-538, 104], [-216, -927]], [[277688, 441444], [-95, 4431]], [[277688, 441444], [-1, -946], [-351, -263], [-253, -2768]], [[277083, 437467], [-849, -19]], [[276234, 437448], [0, 5923]], [[269692, 442196], [16, -2669]], [[269708, 439527], [-1391, 120]], [[268317, 439647], [-18, 2604], [-150, 11]], [[268149, 442262], [561, 621], [551, -1528], [431, 841]], [[266720, 443560], [-15, -4584]], [[266705, 438976], [-3, -1623]], [[266702, 437353], [-1282, 19]], [[265420, 437372], [-6, 4592]], [[281836, 443087], [1, -1968], [-292, -2832]], [[281545, 438287], [-401, 253]], [[290998, 440848], [-384, -1437], [-427, -3445]], [[290187, 435966], [-461, 1078], [82, 1910], [-643, -247]], [[245386, 440459], [-830, 46], [4, 1621]], [[285110, 445235], [175, -3415], [441, -1906], [405, -534]], [[286131, 439380], [-539, -2233]], [[285592, 437147], [-256, 304]], [[285336, 437451], [-455, -615]], [[284881, 436836], [-228, -951], [-463, -356]], [[284190, 435529], [-1068, 5402], [-197, 2227]], [[286590, 441273], [-78, -1278]], [[286512, 439995], [-381, -615]], [[250702, 440022], [-480, -174], [-57, -1257], [-306, 11], [0, -1588]], [[249859, 437014], [-479, 1]], [[249380, 437015], [-1, 1587], [-610, 11]], [[248769, 438613], [-14, 6509]], [[248769, 438613], [-31, -1592], [-323, 7]], [[248415, 437028], [-1263, 36]], [[247152, 437064], [12, 3272]], [[192516, 434205], [-2782, 5], [1, 4725]], [[262849, 442180], [1, -2881]], [[262850, 439299], [-1083, -133]], [[261767, 439166], [-5, 4883]], [[261767, 439166], [-322, -1]], [[261445, 439165], [-639, 38], [-320, 532]], [[260486, 439735], [-4, 2646]], [[226909, 441599], [-5, -1596], [-968, -298], [-620, -536], [-31, 2413]], [[225285, 441582], [-13, -1]], [[293006, 440243], [-18, -18]], [[292988, 440225], [0, 5]], [[294218, 441069], [-1212, -826]], [[302428, 442673], [372, -1939], [-773, -265], [113, 1842], [288, 362]], [[271001, 439369], [-263, 6], [-6, -1405], [-273, -2], [-271, -1168], [-5, -1369]], [[270183, 435431], [-459, 42]], [[269724, 435473], [-16, 4054]], [[269692, 442196], [936, 1652], [121, -200]], [[244238, 442139], [-5, -4867]], [[244233, 437272], [-641, 8]], [[243592, 437280], [-640, 14]], [[242952, 437294], [-1, 6463]], [[239099, 443388], [2, -6149]], [[239101, 437239], [-640, 12]], [[238461, 437251], [-646, 14]], [[237815, 437265], [-4, 6514]], [[242952, 437294], [-653, -17]], [[242299, 437277], [-643, -14]], [[241656, 437263], [-4, 6471]], [[237815, 437265], [-627, -98]], [[237188, 437167], [-633, 7]], [[236555, 437174], [0, 6451]], [[241656, 437263], [-640, -12]], [[241016, 437251], [-639, -8]], [[240377, 437243], [-5, 6472]], [[240377, 437243], [-639, -2]], [[239738, 437241], [-637, -2]], [[234010, 443653], [-2, -6441]], [[234008, 437212], [-637, 14]], [[233371, 437226], [-1383, -2]], [[231988, 437224], [-119, 577]], [[231869, 437801], [88, 2412], [-128, 1310]], [[235276, 443633], [0, -6442]], [[235276, 437191], [-632, 8]], [[234644, 437199], [-636, 13]], [[236555, 437174], [-638, 8]], [[235917, 437182], [-641, 9]], [[274786, 443352], [1, -6623]], [[274787, 436729], [-1339, 17]], [[273448, 436746], [-10, 3978]], [[267767, 442766], [-50, -4]], [[267702, 442761], [447, -499]], [[268317, 439647], [3, -645]], [[268320, 439002], [-1615, -26]], [[276234, 437448], [-271, -1901]], [[275963, 435547], [-140, 820], [-1037, 200]], [[274786, 436567], [1, 162]], [[265420, 437372], [-967, -36]], [[264453, 437336], [-1, 4876], [-315, -4]], [[259351, 442362], [15, -4890], [-65, -5]], [[259301, 437467], [-1086, -27]], [[258215, 437440], [2, 4869]], [[284190, 435529], [0, -456]], [[284190, 435073], [-1015, -1515], [-180, 1961], [-470, 731], [-132, 1393], [-289, -76], [-14, 1365], [-389, -1859]], [[281701, 437073], [-156, 1214]], [[155294, 437597], [-138, -2079], [140, -717], [-207, -2139], [-386, 313], [219, -3715], [-7, -13593]], [[154915, 415667], [-1334, -12]], [[153581, 415655], [-243, 1899], [-703, 2916], [-128, 3411], [386, 4769], [132, -280], [309, 6364], [-133, 874], [262, 7291]], [[253264, 437997], [-21, -1628]], [[253243, 436369], [-932, -112]], [[229132, 442689], [-7, -7583]], [[229125, 435106], [-7, 1]], [[229118, 435107], [-1274, 15]], [[227844, 435122], [0, 6506]], [[230344, 441569], [400, -3784]], [[230744, 437785], [23, -2700]], [[230767, 435085], [-405, -538]], [[230362, 434547], [0, 541], [-1237, 18]], [[260486, 439735], [-89, -4617]], [[260397, 435118], [-729, -71]], [[259668, 435047], [-363, 781], [-4, 1639]], [[213239, 438374], [-30, -4080]], [[213209, 434294], [-90, -2]], [[213119, 434292], [-2032, -1]], [[211087, 434291], [14, 7303]], [[278437, 440428], [-17, -5242]], [[278420, 435186], [-185, -772], [-669, -628], [-401, 1395], [-70, 2246]], [[277095, 437427], [-12, 40]], [[188692, 440977], [-211, -2505], [-449, -762], [-413, 553], [-140, -1427]], [[187479, 436836], [-928, 258], [-847, -1417]], [[258215, 437440], [-1290, 17]], [[256925, 437457], [0, 1203]], [[288490, 437256], [-135, -732]], [[288355, 436524], [-329, -580], [98, -1544], [-739, -1772]], [[287385, 432628], [-586, 684]], [[286799, 433312], [-59, 3514], [-251, 1237], [23, 1932]], [[264453, 437336], [-316, -6]], [[264137, 437330], [-325, 1637], [-962, -17]], [[262850, 438950], [0, 349]], [[245386, 440455], [-115, -1740], [343, -1568], [114, -1545]], [[245728, 435602], [-1175, 25]], [[244553, 435627], [2, 1614], [-322, 31]], [[216974, 441600], [-2, -6469], [57, -810]], [[217029, 434321], [-2234, -1]], [[214795, 434320], [-10, 4053]], [[219887, 435116], [2, -6448]], [[219889, 428668], [-1545, -2]], [[218344, 428666], [-1309, -44]], [[217035, 428622], [-6, 5699]], [[304069, 440803], [121, -1847], [-424, -198], [303, 2045]], [[227844, 435122], [-1276, -6]], [[226568, 435116], [-7, 2365]], [[226561, 437481], [641, 2967]], [[211087, 434291], [-534, -10]], [[210553, 434281], [-1335, -7]], [[226561, 437481], [-533, -2004], [-732, -3606]], [[225296, 431871], [-13, 3241]], [[225283, 435112], [2, 6470]], [[225283, 435112], [-1211, 5]], [[224072, 435117], [-74, 0]], [[223998, 435117], [11, 6469]], [[223998, 435117], [-1279, 6]], [[231869, 437801], [-1125, -16]], [[189127, 436933], [-680, -1516], [-235, -1306], [316, -2476], [-193, -1469], [-257, 341]], [[188078, 430507], [-271, 1155]], [[187807, 431662], [-215, 1796], [-113, 3378]], [[279827, 438006], [-264, -1318], [-1, -4190]], [[279562, 432498], [-1143, 100]], [[278419, 432598], [1, 2588]], [[157829, 437648], [145, -436], [-428, -4819], [-421, -4013], [145, -2151], [-835, -2813], [-186, -2443]], [[156249, 420973], [222, -711], [144, -5038]], [[156615, 415224], [-1701, -20], [1, 463]], [[293900, 433789], [-376, -1707]], [[293524, 432082], [-325, 588]], [[293199, 432670], [123, 2992], [-28, 2071], [-288, 2510]], [[293903, 434099], [-3, -310]], [[291932, 437982], [-383, -2133]], [[291549, 435849], [-417, -3054], [-322, -187]], [[290810, 432608], [-554, 3399]], [[290256, 436007], [-69, -41]], [[272356, 440732], [-5, -6697]], [[272351, 434035], [-74, -1524], [-634, 143]], [[271643, 432654], [-114, 1382]], [[271529, 434036], [10, 5372]], [[273448, 436746], [0, -2713], [-243, -5]], [[273205, 434028], [-854, 7]], [[247152, 437064], [-4, -1625]], [[247148, 435439], [-964, 89]], [[246184, 435528], [-456, 35]], [[245728, 435563], [0, 39]], [[250707, 436185], [-548, -7], [-300, 836]], [[293219, 434221], [-863, 2533]], [[292356, 436754], [-51, 173]], [[292988, 440225], [220, -3323], [11, -2681]], [[286799, 433312], [-277, -2753], [-204, -490]], [[286318, 430069], [-412, 1992]], [[285906, 432061], [44, 1187], [-292, 2181], [-66, 1718]], [[255263, 437340], [2, -2899]], [[255265, 434441], [-1688, -234]], [[253577, 434207], [-321, -57]], [[253256, 434150], [-13, 2219]], [[261445, 439165], [-77, -4819]], [[261368, 434346], [-859, -55]], [[260509, 434291], [-112, 827]], [[294555, 427007], [-1, 231]], [[294554, 427238], [1, -231]], [[294554, 427873], [-111, 3759]], [[294443, 431632], [-93, 1193], [769, -305], [174, 1129], [1072, -46], [376, 297], [903, 2986], [-441, -2840], [-371, -1388], [292, -372], [379, 1927], [532, 898], [205, -1022], [552, 1761], [82, -626], [-1554, -3633], [-192, 472], [-405, -1606], [-231, 346], [-428, -1335], [-389, 98], [-351, -945], [-238, 353], [-532, -1101]], [[269724, 435473], [-278, -7], [9, -1349]], [[269455, 434117], [-813, 50]], [[268642, 434167], [-292, 19]], [[268350, 434186], [-30, 4816]], [[256925, 437457], [-1, -4840]], [[256924, 432617], [-156, -1386], [-315, -5], [3, -1882]], [[256456, 429344], [-470, -1]], [[255986, 429343], [-23, 8976]], [[271529, 434036], [-1228, 60]], [[270301, 434096], [-118, 1335]], [[262850, 438950], [1, -4900]], [[262851, 434050], [1, -1243]], [[262852, 432807], [-756, -88]], [[262096, 432719], [-729, -14]], [[261367, 432705], [1, 1641]], [[268350, 434186], [-789, -60]], [[267561, 434126], [-857, -29]], [[266704, 434097], [-2, 3256]], [[281701, 437073], [-194, -835], [74, -2824], [-363, -706], [-462, -3037], [47, -401]], [[280803, 429270], [26, -145]], [[280829, 429125], [-1257, -6]], [[279572, 429119], [-10, 3379]], [[192648, 434205], [0, -3425]], [[192648, 430780], [-727, 406], [-315, -879], [-787, -888], [-261, 131], [-420, -1293]], [[190138, 428257], [-340, -1865], [-343, -531], [-618, 1479], [-69, 1144], [-267, -1699], [-177, 190]], [[188324, 426975], [-246, 3532]], [[284190, 435073], [-613, -3674]], [[283577, 431399], [-884, -2183]], [[282693, 429216], [-399, 260], [-333, -970], [-479, 889]], [[281482, 429395], [-679, -125]], [[290256, 436007], [-428, -2349]], [[289828, 433658], [-466, -1942], [-519, -917]], [[288843, 430799], [-280, 2543], [218, 671], [-426, 2511]], [[264137, 437330], [-1, -3255], [-160, -7]], [[263976, 434068], [-1125, -18]], [[249380, 437015], [-1, -3256]], [[249379, 433759], [-966, 18]], [[248413, 433777], [2, 3251]], [[214795, 434320], [-2, -28]], [[214793, 434292], [-1584, 2]], [[255986, 429343], [-721, 8]], [[255265, 429351], [0, 5090]], [[292587, 430897], [-395, 1441]], [[292192, 432338], [-104, 1881], [-539, 1630]], [[292356, 436754], [-165, -2165], [367, -970], [29, -2722]], [[231988, 437224], [4, -1983]], [[231992, 435241], [-431, 236], [-484, -1310], [-310, 918]], [[164787, 410464], [-407, -275]], [[164380, 410189], [102, 1082], [4, 3235], [-257, 1375], [-23, 1352], [-367, 544], [-472, 2488], [-708, 1250], [-456, -2311], [-371, 1201], [1, 3540], [-743, -22]], [[161090, 423923], [22, 8573], [-31, 5175]], [[161090, 423923], [-473, 4]], [[160617, 423927], [-1428, -350], [-830, -1031], [-549, 334], [-407, -1138], [-271, 690], [-883, -1459]], [[285336, 437451], [-167, -4196], [366, 398], [371, -1592]], [[286318, 430069], [-895, -2187]], [[285423, 427882], [-525, -888], [-165, 332]], [[284733, 427326], [26, 188]], [[284759, 427514], [265, 1448], [124, 3090]], [[285148, 432052], [-223, 1660], [-44, 3124]], [[259668, 435047], [-2, -814]], [[259666, 434233], [-619, -57], [-1, -1611]], [[259046, 432565], [-835, 5]], [[258211, 432570], [4, 4870]], [[226568, 435116], [1, -6481]], [[226569, 428635], [-1261, -3]], [[225308, 428632], [-12, -1]], [[225296, 428631], [0, 3240]], [[258211, 432570], [-314, 20]], [[257897, 432590], [-973, 27]], [[277095, 437427], [-6, -9328]], [[277089, 428099], [-1270, 89]], [[275819, 428188], [-27, 3364]], [[275792, 431552], [-19, 2705], [190, 1290]], [[278419, 432598], [1, -2521], [-655, -4576]], [[277765, 425501], [-675, 2580]], [[277090, 428081], [-1, 18]], [[266704, 434097], [-266, -3234]], [[266438, 430863], [-1015, 32]], [[265423, 430895], [-1, 1872]], [[265422, 432767], [-2, 4605]], [[265422, 432767], [-638, -293], [0, -813], [-644, -37]], [[264140, 431624], [-164, 2444]], [[243592, 437280], [-7, -4878]], [[243585, 432402], [-1284, -21]], [[242301, 432381], [-2, 4896]], [[244553, 435627], [-3, -4867], [-104, 1]], [[244446, 430761], [-862, 16]], [[243584, 430777], [1, 1625]], [[242301, 432381], [-1282, -16]], [[241019, 432365], [-3, 4886]], [[238461, 437251], [3, -4896]], [[238464, 432355], [-1277, -24]], [[237187, 432331], [1, 4836]], [[239738, 437241], [4, -4883]], [[239742, 432358], [-1278, -3]], [[241019, 432365], [-1277, -7]], [[233371, 437226], [-2, -4810]], [[233369, 432416], [-1193, 2]], [[232176, 432418], [-184, 2823]], [[234644, 437199], [-3, -4800]], [[234641, 432399], [-1272, 17]], [[235917, 437182], [-1, -4806]], [[235916, 432376], [-1275, 23]], [[237187, 432331], [-1271, 45]], [[187807, 431662], [-565, -723], [-182, 1854], [-717, -2763]], [[186343, 430030], [-639, 5647]], [[248413, 433777], [-2, -4886]], [[248411, 428891], [-1277, 44]], [[247134, 428935], [14, 6504]], [[285148, 432052], [-398, 108], [-1152, -1499]], [[283598, 430661], [-21, 738]], [[251026, 432870], [-1183, -88]], [[249843, 432782], [68, 968], [-532, 9]], [[292970, 430541], [-431, -269]], [[292539, 430272], [48, 625]], [[293219, 434221], [-249, -3680]], [[274786, 436567], [0, -4189]], [[274786, 432378], [-1580, 39]], [[273206, 432417], [-1, 1611]], [[288843, 430799], [-376, -510]], [[288467, 430289], [-415, -966]], [[288052, 429323], [-667, 3305]], [[275792, 431552], [-1004, -69]], [[274788, 431483], [-2, 895]], [[253256, 434150], [34, -7011], [-625, -15]], [[252665, 427124], [-321, -16], [-27, 2627], [-962, -80]], [[251355, 429655], [-6, 3249]], [[290810, 432608], [-339, -2310]], [[290471, 430298], [-220, -1439], [-616, -2210]], [[289635, 426649], [-20, 311]], [[289615, 426960], [68, 3155], [341, 1723], [-196, 1820]], [[292192, 432338], [-162, 209], [-116, -3153]], [[291914, 429394], [-248, -1212]], [[291666, 428182], [-265, 1561], [-471, -723]], [[290930, 429020], [-459, 1278]], [[186343, 430030], [156, -1074], [97, -4631]], [[186596, 424325], [-109, -154], [38, -2825], [149, -2528], [-96, -2970]], [[186578, 415848], [-452, -2000], [-1271, -19], [-3480, 53]], [[181375, 413882], [0, 3927]], [[245728, 435563], [-37, -2695], [-356, -1885], [-62, -2388]], [[245273, 428595], [-827, 2166]], [[246184, 435528], [-12, -8061]], [[246172, 427467], [-319, 63]], [[245853, 427530], [-783, -25]], [[245070, 427505], [203, 1090]], [[247134, 428935], [-3, -1615]], [[247131, 427320], [-959, 147]], [[270301, 434096], [8, -6024]], [[270309, 428072], [-263, -12], [2, -1850]], [[270048, 426210], [-326, -246]], [[269722, 425964], [-6, 3196], [-215, 1864], [-46, 3093]], [[232176, 432418], [-58, -2196]], [[232118, 430222], [-1754, 3]], [[230364, 430225], [-2, 4322]], [[227844, 435122], [-1, -6485]], [[227843, 428637], [-1271, -2]], [[226572, 428635], [-3, 0]], [[225296, 428631], [-1222, 11]], [[224074, 428642], [-2, 6475]], [[222111, 435114], [24, -6994]], [[222135, 428120], [-630, 262]], [[221505, 428382], [-943, 281]], [[220562, 428663], [-673, 5]], [[224074, 428642], [-9, -170]], [[224065, 428472], [-506, -689], [-761, 186]], [[222798, 427969], [-663, 151]], [[229118, 435107], [-7, -6481]], [[229111, 428626], [-1268, 11]], [[230364, 430225], [0, -4857]], [[230364, 425368], [-1251, 11]], [[229113, 425379], [-2, 3247]], [[260509, 434291], [15, -6500]], [[260524, 427791], [-631, -27]], [[259893, 427764], [-208, -13], [-19, 6482]], [[255265, 429351], [-2, -4574]], [[255263, 424777], [-1139, -99]], [[254124, 424678], [-508, 40], [-39, 9489]], [[261367, 432705], [2, -4891], [-317, -15]], [[261052, 427799], [-528, -8]], [[206643, 416247], [0, 0]], [[210532, 425375], [-1578, 17], [-6, -9744]], [[208948, 415648], [-2259, -10]], [[206689, 415638], [-255, -1]], [[206434, 415637], [-7, 4869]], [[206427, 420506], [-4, 1627], [310, -3], [6, 12085]], [[210553, 434281], [-21, -8906]], [[217035, 428622], [-272, 6]], [[216763, 428628], [-1967, -10]], [[214796, 428618], [0, 968]], [[214796, 429586], [-3, 4706]], [[201978, 423907], [55, -1917], [16, -7759]], [[202049, 414231], [-1129, -110]], [[200920, 414121], [-15, 3215]], [[200905, 417336], [-2, 2480], [-1118, -27]], [[199785, 419789], [29, 5936], [320, 1082], [-12, 7496]], [[201402, 434298], [27, -1461], [436, -669], [158, -1783], [-185, -3986], [140, -2492]], [[204199, 424684], [-292, -2571], [-164, 468], [-589, -930], [-98, 692], [-520, -163], [-107, 1114], [-339, -604], [-112, 1217]], [[203263, 434210], [16, -1192], [530, -3756], [390, -4578]], [[199785, 419789], [-1878, -31], [-2612, 19]], [[195295, 419777], [7, 8022]], [[195302, 427799], [-5, 6462]], [[213086, 423793], [-320, 0]], [[212766, 423793], [-1909, -38]], [[210857, 423755], [-6, 1618], [-319, 2]], [[213119, 434292], [6, -4709]], [[213125, 429583], [-39, -5790]], [[214796, 429586], [-1671, -3]], [[195302, 427799], [-314, 562], [-119, 3255], [-531, -10], [-250, -2209], [-269, 1600], [-807, -1146], [-299, 856]], [[192713, 430707], [-65, 73]], [[176394, 418012], [111, -5116], [-100, -2197], [49, -2636], [-263, -2402], [2, -5633]], [[176193, 400028], [-1934, -7]], [[174259, 400021], [29, 16934], [-17, 16297], [28, 1004]], [[174259, 400021], [-2037, 35], [-1236, -1303]], [[170986, 398753], [154, 2224], [-118, 2607], [482, 3074], [266, 297], [87, 1839], [-89, 2169], [75, 3206], [-204, 1482]], [[171639, 415651], [671, 9776]], [[206427, 420506], [-1666, -25]], [[204761, 420481], [-562, 4203]], [[259893, 427764], [3, -1603]], [[259896, 426161], [-839, -54]], [[259057, 426107], [-11, 6458]], [[268642, 434167], [-7, -5295]], [[268635, 428872], [-365, -115]], [[268270, 428757], [-705, -40]], [[267565, 428717], [-4, 5409]], [[254124, 424678], [8, -1609]], [[254132, 423069], [-1470, -13]], [[252662, 423056], [3, 4068]], [[269722, 425964], [-798, -95]], [[268924, 425869], [-10, 2969], [-279, 34]], [[267565, 428717], [-860, -299]], [[266705, 428418], [-211, 275], [-56, 2170]], [[271643, 432654], [-7, -4584]], [[271636, 428070], [-1327, 2]], [[264140, 431624], [-158, -802], [1, -2439]], [[263983, 428383], [-165, -1]], [[263818, 428382], [0, 807], [-964, -2]], [[262854, 429187], [-2, 3620]], [[273206, 432417], [-2, -3235]], [[273204, 429182], [-418, -81], [-224, -1339]], [[272562, 427762], [-923, -317]], [[271639, 427445], [-3, 625]], [[249843, 432782], [-231, -3232]], [[249612, 429550], [-356, -3635], [-528, -731]], [[248728, 425184], [-3, 2059], [-322, 39], [8, 1609]], [[289615, 426960], [-382, -1335]], [[289233, 425625], [-268, 2542], [-150, -335], [-348, 2457]], [[171639, 415651], [-2673, -45], [-2017, 14]], [[288052, 429323], [-372, -1084]], [[287680, 428239], [-781, -2648], [-748, -726]], [[286151, 424865], [-265, 1102]], [[285886, 425967], [-463, 1915]], [[274788, 431483], [-1, -3963]], [[274787, 427520], [-415, -1045]], [[274372, 426475], [-540, 315]], [[273832, 426790], [-154, 2375], [-474, 17]], [[251355, 429655], [-154, -1644], [-415, -1270], [-378, -47]], [[250408, 426694], [-162, 394], [-9, 2476], [-625, -14]], [[262854, 429187], [-1, -2904]], [[262853, 426283], [-741, -73]], [[262112, 426210], [-16, 6509]], [[265423, 430895], [0, -3262]], [[265423, 427633], [-634, -30], [-321, 799], [-485, -19]], [[188324, 426975], [-114, -600]], [[188210, 426375], [-465, -892], [-618, -2134], [-142, 896], [-389, 80]], [[293524, 432082], [-12, -1259], [-325, -351]], [[293187, 430472], [-27, 1524]], [[293160, 431996], [39, 674]], [[262112, 426210], [-370, -19]], [[261742, 426191], [-685, -5]], [[261057, 426186], [-5, 1613]], [[294555, 427007], [-1, 231]], [[294554, 427873], [-875, -1167]], [[293679, 426706], [-79, 470]], [[293600, 427176], [63, 322]], [[293663, 427498], [119, 2121], [-126, 536]], [[293656, 430155], [90, 1668], [410, 856], [287, -1047]], [[257897, 432590], [-1, -3261]], [[257896, 429329], [-463, 33], [-65, -3266]], [[257368, 426096], [-903, 15]], [[256465, 426111], [-9, 3233]], [[259057, 426107], [-583, -24]], [[258474, 426083], [2, 2440], [-422, -1], [-158, 807]], [[279572, 429119], [-482, -6116]], [[279090, 423003], [-351, -510], [-158, 820], [-661, 807], [-155, 1381]], [[292539, 430272], [83, -964]], [[292622, 429308], [-118, -888]], [[292504, 428420], [-590, 974]], [[233369, 432416], [31, -5977]], [[233400, 426439], [-1091, 87]], [[232309, 426526], [-329, 3028], [138, 668]], [[234641, 432399], [38, -6061]], [[234679, 426338], [-801, 62]], [[233878, 426400], [-478, 39]], [[235916, 432376], [-1, -6117]], [[235915, 426259], [-448, 10]], [[235467, 426269], [-788, 69]], [[243584, 430777], [5, -4004]], [[243589, 426773], [-630, 137]], [[242959, 426910], [-660, -98]], [[242299, 426812], [2, 5569]], [[242299, 426812], [-476, -61]], [[241823, 426751], [-800, -120]], [[241023, 426631], [-4, 5734]], [[237187, 432331], [-2, -6016]], [[237185, 426315], [-604, -36]], [[236581, 426279], [-666, -20]], [[238464, 432355], [-1, -5921]], [[238463, 426434], [-606, -50]], [[237857, 426384], [-672, -69]], [[239742, 432358], [1, -5855]], [[239743, 426503], [-772, -67]], [[238971, 426436], [-508, -2]], [[241023, 426631], [-213, -27]], [[240810, 426604], [-1067, -101]], [[284759, 427514], [-273, 767], [-697, 262]], [[283789, 428543], [-185, 151], [-6, 1967]], [[293187, 430472], [-271, -1807], [244, 3331]], [[195295, 419777], [-1, -10466]], [[195294, 409311], [0, -3031]], [[195294, 406280], [-155, -665], [-2556, -5]], [[192583, 405610], [0, 136]], [[192583, 405746], [-38, 1805], [122, 2542], [304, 1922], [-230, 5]], [[192741, 412020], [-28, 18687]], [[275819, 428188], [-81, -1216], [-510, -2450]], [[275228, 424522], [-441, -3]], [[274787, 424519], [0, 3001]], [[282497, 422684], [-451, 361], [271, 1886], [-71, 940], [431, 2360], [16, 985]], [[283789, 428543], [-584, -2081], [-708, -3778]], [[192741, 412020], [-2481, 120]], [[190260, 412140], [-95, 1613]], [[190165, 413753], [-27, 14504]], [[266705, 428418], [4, -3381]], [[266709, 425037], [-283, -22]], [[266426, 425015], [-1003, 645]], [[265423, 425660], [0, 1973]], [[292970, 430541], [-211, -2553], [-210, -377], [73, 1697]], [[245070, 427505], [-470, -581], [-146, -1017], [115, -2813], [-151, -420]], [[244418, 422674], [-829, 4099]], [[293679, 426706], [-79, 470]], [[293412, 427054], [2, 252]], [[293414, 427306], [-2, -252]], [[293663, 427498], [-315, 245]], [[293348, 427743], [-288, 1614]], [[293060, 429357], [139, 1000], [457, -202]], [[290930, 429020], [33, -2516], [-174, -1500], [76, -1477]], [[290865, 423527], [-301, -1441], [-241, -93]], [[290323, 421993], [-332, 1496], [-16, 2220], [-340, 940]], [[289233, 425625], [-418, -2204]], [[288815, 423421], [-127, 534]], [[288688, 423955], [-1008, 4284]], [[232309, 426526], [155, -1144]], [[232464, 425382], [-995, -11]], [[231469, 425371], [-1105, -3]], [[291666, 428182], [-6, -1402]], [[291660, 426780], [-177, -791], [187, -1218], [-446, -2171]], [[291224, 422600], [-359, 927]], [[252662, 423056], [2, -2182]], [[252664, 420874], [-322, -1]], [[252342, 420873], [-1598, 8]], [[250744, 420881], [-320, 804]], [[250424, 421685], [-16, 5009]], [[214796, 428618], [0, -4795]], [[214796, 423823], [-1710, -30]], [[250424, 421685], [-946, -94]], [[249478, 421591], [-311, -18], [-6, 2161], [-580, 13]], [[248581, 423747], [147, 1437]], [[282497, 422684], [136, -2142]], [[282633, 420542], [-450, -3764]], [[282183, 416778], [-753, 1928]], [[281430, 418706], [-282, 1104], [-60, 1367]], [[281088, 421177], [343, 3265], [-239, 3445], [290, 1508]], [[281088, 421177], [-85, -1012], [-408, 1094], [-38, -1089], [-480, 1549]], [[280077, 421719], [157, 812], [68, 2529], [527, 4065]], [[293412, 427054], [2, 252]], [[293348, 427743], [-53, -1237], [-451, 497], [216, 2354]], [[256465, 426111], [5, -1623]], [[256470, 424488], [-1207, 26]], [[255263, 424514], [0, 263]], [[292504, 428420], [-134, -1704]], [[292370, 426716], [-710, 64]], [[258474, 426083], [-5, -2412]], [[258469, 423671], [-888, 4]], [[257581, 423675], [-2, 2417], [-211, 4]], [[273832, 426790], [-165, -802], [-57, -2450]], [[273610, 423538], [-915, 163]], [[272695, 423701], [15, 2450], [-148, 1611]], [[263818, 428382], [2, -6071], [59, -80]], [[263879, 422231], [-1, -5]], [[263878, 422226], [-1029, -27]], [[262849, 422199], [4, 4084]], [[280077, 421719], [-106, -1565]], [[279971, 420154], [-653, 120], [-455, 660]], [[278863, 420934], [227, 2069]], [[248581, 423747], [-329, -1227], [-73, -1406], [-363, -2059]], [[247816, 419055], [-702, 92], [4, 1629]], [[247118, 420776], [13, 6544]], [[268924, 425869], [-64, -3813], [-274, 83]], [[268586, 422139], [-515, 160], [-254, 1408]], [[267817, 423707], [174, 1059], [2, 2876], [277, 1115]], [[267817, 423707], [-635, 189]], [[267182, 423896], [2, 1175], [-475, -34]], [[220562, 428663], [2, -4872], [-317, 6], [0, -1626]], [[220247, 422171], [-287, -23]], [[219960, 422148], [-1562, -11]], [[218398, 422137], [-52, 0]], [[218346, 422137], [-2, 6529]], [[225308, 428632], [0, -6478]], [[225308, 422154], [-1241, 1]], [[224067, 422155], [-2, 6317]], [[221505, 428382], [2, -6212]], [[221507, 422170], [-1260, 1]], [[218346, 422137], [-1522, 21]], [[216824, 422158], [-54, -2]], [[216770, 422156], [-7, 6472]], [[216770, 422156], [-1974, -24]], [[214796, 422132], [0, 1691]], [[227843, 428637], [0, -6482]], [[227843, 422155], [-1261, 3]], [[226582, 422158], [-8, 0]], [[226574, 422158], [-2, 6477]], [[229113, 425379], [-7, -3236]], [[229106, 422143], [-1263, 12]], [[226574, 422158], [-1253, -4]], [[225321, 422154], [-13, 0]], [[284733, 427326], [-651, -856], [-995, -3407], [-367, -2036]], [[282720, 421027], [-87, -485]], [[190165, 413753], [-530, 20], [-2, 800], [-457, 2165], [60, 2009], [-250, 2239], [-310, -13], [-357, 1411], [-183, 1614], [74, 2377]], [[224067, 422155], [-8, 0]], [[224059, 422155], [-1261, 5]], [[222798, 422160], [0, 5809]], [[265423, 425660], [-341, -1034]], [[265082, 424626], [-938, -41], [1, -1904], [-266, -450]], [[222798, 422160], [-1257, 8]], [[221541, 422168], [-34, 2]], [[278863, 420934], [-360, -3257], [-302, -1293]], [[278201, 416384], [-562, 1959], [-401, -1171], [-297, 844], [-366, -24]], [[276575, 417992], [19, 1315]], [[276594, 419307], [179, 811], [290, 5227], [-200, 1083], [227, 1653]], [[288688, 423955], [-466, -3821]], [[288222, 420134], [-493, -1945]], [[287729, 418189], [-773, 3320]], [[286956, 421509], [-805, 3356]], [[276594, 419307], [-123, 1028], [-749, 1490], [-494, 2697]], [[271639, 427445], [-58, -3551], [-110, 18]], [[271471, 423912], [-1324, 214]], [[270147, 424126], [-99, 2084]], [[272695, 423701], [-15, -2421], [-175, -1661]], [[272505, 419619], [-793, 133]], [[271712, 419752], [19, 2733], [-268, 50], [8, 1377]], [[285886, 425967], [-397, -1498], [304, -5190]], [[285793, 419279], [-424, -1382]], [[285369, 417897], [-35, 1119], [-345, 857]], [[284989, 419873], [-161, 1873]], [[284828, 421746], [-318, 1085], [208, 1376], [-107, 1918], [122, 1201]], [[261057, 426186], [8, -3497]], [[261065, 422689], [-375, 7]], [[260690, 422696], [-790, -21]], [[259900, 422675], [0, 531]], [[259900, 423206], [-4, 2955]], [[292731, 427718], [-75, -1793], [-401, -1051], [179, 2726], [297, 118]], [[245853, 427530], [-15, -6605]], [[245838, 420925], [-7, -1698]], [[245831, 419227], [-1653, 137]], [[244178, 419364], [23, 898]], [[244201, 420262], [217, 2412]], [[274787, 424519], [3, -1462]], [[274790, 423057], [-309, -64]], [[274481, 422993], [90, 1246], [-199, 2236]], [[247118, 420776], [-1280, 149]], [[284828, 421746], [-989, -927], [-267, 651], [-693, -2143]], [[282879, 419327], [-159, 1700]], [[244201, 420262], [-1264, 158]], [[242937, 420420], [3, 812]], [[242940, 421232], [19, 5678]], [[290323, 421993], [609, -3619]], [[290932, 418374], [-696, -1839]], [[290236, 416535], [-114, 1664]], [[290122, 418199], [-1307, 5222]], [[292370, 426716], [-184, -1987], [143, -699]], [[292329, 424030], [-474, -3179], [-254, -505]], [[291601, 420346], [-383, 1322], [6, 932]], [[242940, 421232], [-1109, 36]], [[241831, 421268], [-6, 814]], [[241825, 422082], [-2, 4669]], [[274481, 422993], [82, -1389], [-230, -2518]], [[274333, 419086], [-58, -528]], [[274275, 418558], [-502, 43]], [[273773, 418601], [49, 4904], [-212, 33]], [[241825, 422082], [-931, -57]], [[240894, 422025], [22, 2916], [-106, 1663]], [[240894, 422025], [-478, -13]], [[240416, 422012], [1, 804], [-1425, -54]], [[238992, 422762], [-21, 3674]], [[233878, 426400], [61, -5896]], [[233939, 420504], [-1043, 57]], [[232896, 420561], [-164, 920], [-268, 3901]], [[238992, 422762], [-1, -2172]], [[238991, 420590], [-1104, -45]], [[237887, 420545], [-30, 5839]], [[235467, 426269], [94, -3438]], [[235561, 422831], [-21, -4851]], [[235540, 417980], [-1218, 74]], [[234322, 418054], [-79, 2429], [-304, 21]], [[190260, 412140], [-1086, 14]], [[189174, 412154], [-1094, -4]], [[188080, 412150], [-519, 2499], [-397, -2608], [-337, -472], [102, 2059], [-351, 2220]], [[237887, 420545], [-2, -2439]], [[237885, 418106], [-1262, 69]], [[236623, 418175], [8, 4609]], [[236631, 422784], [-50, 3495]], [[270147, 424126], [-32, -4045]], [[270115, 420081], [-784, 127], [-762, 580]], [[268569, 420788], [17, 1351]], [[262849, 422199], [1, -795]], [[262850, 421404], [-1157, -63]], [[261693, 421341], [-3, 1349]], [[261690, 422690], [52, 3501]], [[236631, 422784], [-1070, 47]], [[261690, 422690], [-625, -1]], [[259900, 423206], [-1060, -73], [0, -542]], [[258840, 422591], [-371, 1080]], [[257581, 423675], [-3, -4054]], [[257578, 419621], [-1106, 10]], [[256472, 419631], [2, 2822]], [[256474, 422453], [-4, 2035]], [[232896, 420561], [7, -54]], [[232903, 420507], [-1276, -7]], [[231627, 420500], [-157, 10]], [[231470, 420510], [-1, 4861]], [[286956, 421509], [-435, -1129], [-728, -1101]], [[266426, 425015], [-87, -5114]], [[266339, 419901], [-1291, 821]], [[265048, 420722], [34, 3904]], [[210857, 423755], [-19, -8095], [-652, -3]], [[210186, 415657], [-1238, -9]], [[230364, 425368], [0, -4856]], [[230364, 420512], [0, -4861]], [[230364, 415651], [-953, 8]], [[229411, 415659], [-308, 1]], [[229103, 415660], [3, 6483]], [[231470, 420510], [-1106, 2]], [[267401, 418295], [-101, -658]], [[267300, 417637], [-828, 70]], [[266472, 417707], [25, 2122], [-158, 72]], [[267182, 423896], [1, -3714], [212, -4], [6, -1883]], [[255263, 424514], [-13, -6127]], [[255250, 418387], [-5, -4935]], [[255245, 413452], [-1128, -58]], [[254117, 413394], [15, 9675]], [[204761, 420481], [44, -3996], [-107, -2111]], [[204698, 414374], [-40, -1498]], [[204658, 412876], [-515, -984], [-138, -1866]], [[204005, 410026], [-269, -196], [-186, 2235], [-440, 1923], [-526, 246]], [[202584, 414234], [-535, -3]], [[265048, 420722], [-23, -1667]], [[265025, 419055], [-1141, 245]], [[263884, 419300], [-6, 2926]], [[276575, 417992], [2, -1689], [-338, -983]], [[276239, 415320], [-807, 668], [-645, -1055]], [[274787, 414933], [1, 1005]], [[274788, 415938], [-1, 2668]], [[274787, 418606], [3, 4451]], [[256474, 422453], [-391, -1025], [-571, -2641], [86, -782]], [[255598, 418005], [-348, 382]], [[292681, 417933], [-413, -100], [-60, 940], [-392, 67], [-407, -1736]], [[291409, 417104], [-97, 1100]], [[291312, 418204], [289, 2142]], [[292329, 424030], [617, -741], [71, -1974], [-164, -3757], [-172, 375]], [[271712, 419752], [-260, -1288]], [[271452, 418464], [-1312, 274]], [[270140, 418738], [-25, 1343]], [[290122, 418199], [-264, -1711], [-318, 871], [49, -1505], [-196, -651]], [[289393, 415203], [-235, 1649]], [[289158, 416852], [-265, 414], [-399, 2752], [-272, 116]], [[160617, 423927], [81, -1784], [341, -681], [-60, -1870], [-214, -1153]], [[160765, 418439], [-392, -946], [-168, -2180], [-363, -1739], [-738, -95], [-16, -1615]], [[159088, 411864], [-2484, 9]], [[156604, 411873], [11, 3351]], [[164380, 410189], [-1412, -44], [-74, -532], [-534, 1856], [-382, -2585]], [[161978, 408884], [-186, -741]], [[161792, 408143], [-928, 5114], [-32, 2656], [121, 1726], [-188, 800]], [[268569, 420788], [-30, -2813]], [[268539, 417975], [-1138, 320]], [[214796, 422132], [-1, -6444]], [[214795, 415688], [5, -7987]], [[214800, 407701], [-2098, -115]], [[212702, 407586], [-2, 8093], [66, 8114]], [[212702, 407586], [-980, -40]], [[211722, 407546], [-1539, 11]], [[210183, 407557], [1, 3232]], [[210184, 410789], [2, 4868]], [[249478, 421591], [4, -3680]], [[249482, 417911], [-1008, 385], [-87, -648]], [[248387, 417648], [-390, -862], [-421, -126], [-193, 1284]], [[247383, 417944], [433, 1111]], [[273773, 418601], [-955, 197]], [[272818, 418798], [-313, 821]], [[258840, 422591], [0, -2941]], [[258840, 419650], [1, -653]], [[258841, 418997], [-1263, -40]], [[257578, 418957], [0, 664]], [[291312, 418204], [-380, 170]], [[259900, 422675], [0, -2968]], [[259900, 419707], [-1060, -57]], [[274787, 418606], [-454, 480]], [[254117, 413394], [-1461, -14]], [[252656, 413380], [8, 7494]], [[240416, 422012], [-1, -5687]], [[240415, 416325], [-1409, -78]], [[239006, 416247], [-15, 4343]], [[236623, 418175], [-5, -1894]], [[236618, 416281], [-1077, 80]], [[235541, 416361], [-1, 1619]], [[260690, 422696], [8, -5628]], [[260698, 417068], [-1, -2446]], [[260697, 414622], [-797, -41]], [[259900, 414581], [0, 5126]], [[261693, 421341], [13, -4279]], [[261706, 417062], [-1008, 6]], [[256472, 419631], [5, -4875]], [[256477, 414756], [-917, -10]], [[255560, 414746], [38, 3259]], [[263884, 419300], [17, -5165]], [[263901, 414135], [-164, -22]], [[263737, 414113], [-912, -28]], [[262825, 414085], [5, 1641]], [[262830, 415726], [20, 5678]], [[225321, 422154], [-1, -6473]], [[225320, 415681], [-642, -7]], [[224678, 415674], [-618, 2]], [[224060, 415676], [-1, 6479]], [[224060, 415676], [-950, -1]], [[223110, 415675], [-312, -4]], [[222798, 415671], [0, 6489]], [[226582, 422158], [-2, -6488]], [[226580, 415670], [-306, 0]], [[226274, 415670], [-954, 11]], [[216824, 422158], [-6, -6476]], [[216818, 415682], [-239, -3]], [[216579, 415679], [-1784, 9]], [[221541, 422168], [6, -6503]], [[221547, 415665], [-1531, -4]], [[220016, 415661], [-44, 2]], [[219972, 415663], [-12, 6485]], [[227843, 422155], [-2, -6487]], [[227841, 415668], [-1261, 2]], [[229103, 415660], [-1262, 8]], [[219972, 415663], [-1520, 8]], [[218452, 415671], [-55, 3]], [[218397, 415674], [1, 6463]], [[218397, 415674], [-1579, 8]], [[222798, 415671], [-1243, -6]], [[221555, 415665], [-8, 0]], [[241831, 421268], [8, -4944]], [[241839, 416324], [-1400, 2]], [[240439, 416326], [-24, -1]], [[284989, 419873], [-135, -1158], [-365, -437], [-280, -1344]], [[284209, 416934], [-135, -749], [-607, -656], [-188, -940]], [[283279, 414589], [-400, 4738]], [[250744, 420881], [10, -4341]], [[250754, 416540], [4, -2437], [-207, -17]], [[250551, 414086], [-740, 300], [-264, 801]], [[249547, 415187], [-65, 2724]], [[281430, 418706], [-459, -6339], [-226, -1900]], [[280745, 410467], [-1192, 5]], [[279553, 410472], [143, 1891], [-17, 4331], [292, 3460]], [[287729, 418189], [-193, -524], [-134, -4476], [-402, -2749]], [[287000, 410440], [-272, 4]], [[286728, 410444], [-19, 0]], [[286709, 410444], [-635, 4131], [-197, 2070], [-508, 1252]], [[262830, 415726], [-1089, -10]], [[261741, 415716], [-35, 1346]], [[242937, 420420], [-5, -5730]], [[242932, 414690], [-935, 53]], [[241997, 414743], [-158, 1581]], [[283279, 414589], [33, -4170]], [[283312, 410419], [-28, 0]], [[283284, 410419], [-1756, 39]], [[281528, 410458], [270, 1945], [385, 4375]], [[279553, 410472], [-342, -1]], [[279211, 410471], [-1285, -23]], [[277926, 410448], [-70, 2460], [345, 3476]], [[252342, 420873], [-474, -4214]], [[251868, 416659], [-1114, -119]], [[247383, 417944], [-442, -2538]], [[246941, 415406], [-262, -107], [-245, 2263], [-607, 14]], [[245827, 417576], [4, 1651]], [[252656, 413380], [-31, -1625]], [[252625, 411755], [-759, 5]], [[251866, 411760], [2, 4899]], [[270140, 418738], [-33, -4033], [-98, -689]], [[270009, 414016], [-637, 319]], [[269372, 414335], [-891, 173]], [[268481, 414508], [58, 3467]], [[266472, 417707], [-35, -1886]], [[266437, 415821], [-1449, 559]], [[264988, 416380], [37, 2675]], [[239006, 416247], [0, -1218]], [[239006, 415029], [-1115, -150]], [[237891, 414879], [-6, 3227]], [[206434, 415637], [-263, -1610]], [[206171, 414027], [-698, -17]], [[205473, 414010], [-2, 411], [-773, -47]], [[231627, 420500], [-1, -4856]], [[231626, 415644], [-637, 4]], [[230989, 415648], [-625, 3]], [[232903, 420507], [433, -2548], [-67, -1277], [314, -1050]], [[233583, 415632], [-88, 0]], [[233495, 415632], [-1249, 8]], [[232246, 415640], [-620, 4]], [[234322, 418054], [138, -4323]], [[234460, 413731], [-255, -671], [-622, 2572]], [[244178, 419364], [30, -3036], [165, -1716]], [[244373, 414612], [-1128, 55]], [[243245, 414667], [-313, 23]], [[288510, 412605], [38, 23]], [[288548, 412628], [-38, -23]], [[289158, 416852], [-454, -2263], [-196, -1985]], [[288508, 412604], [-541, -2144]], [[287967, 410460], [-967, -20]], [[286709, 410444], [-918, -3]], [[285791, 410441], [-606, -7]], [[285185, 410434], [-592, -13]], [[284593, 410421], [124, 2546], [-179, 2926], [-329, 1041]], [[200905, 417336], [-779, -15], [-6, -3272], [-314, 51], [0, -1664], [-1412, -62], [0, -2430], [-1717, -17], [1, -808], [-1384, 192]], [[272795, 414724], [-423, -10], [-218, -1046], [-319, 59], [-5, -1092], [-317, 67]], [[271513, 412702], [-96, 1662], [35, 4100]], [[272818, 418798], [-23, -4074]], [[259900, 414581], [-209, -306]], [[259691, 414275], [-842, -20]], [[258849, 414255], [-8, 4742]], [[257578, 418957], [2, -4762]], [[257580, 414195], [0, -1080]], [[257580, 413115], [-876, 34]], [[256704, 413149], [-228, 11], [1, 1596]], [[245827, 417576], [-8, -4829]], [[245819, 412747], [1, -1636], [-1253, 28]], [[244567, 411139], [-193, 1581], [-1, 1892]], [[264988, 416380], [-41, -2986]], [[264947, 413394], [-298, 807], [-748, -66]], [[274788, 415938], [-600, 317]], [[274188, 416255], [87, 2303]], [[291409, 417104], [453, -5672], [-67, -3974]], [[291795, 407458], [-8, -68]], [[291787, 407390], [-674, 1374], [-215, 1839]], [[290898, 410603], [-464, 1138], [-81, 1797], [-341, 1920]], [[290012, 415458], [-13, 48]], [[289999, 415506], [237, 1029]], [[258849, 414255], [-241, -38]], [[258608, 414217], [-1028, -22]], [[274188, 416255], [-53, -2244], [-194, -1196]], [[273941, 412815], [-1155, 356]], [[272786, 413171], [9, 1553]], [[292681, 417933], [179, -418], [-159, -5398], [-46, 2228], [-255, -3465], [103, -763], [-505, -2575], [-203, -84]], [[271513, 412702], [-9, -1621]], [[271504, 411081], [-1056, 287]], [[270448, 411368], [-261, 927], [22, 1647], [-200, 74]], [[281528, 410458], [-678, 3]], [[280850, 410461], [-105, 6]], [[249547, 415187], [-334, -14], [-10, -1089], [-815, -275]], [[248388, 413809], [-1, 3839]], [[161792, 408143], [-202, -1301], [-433, -149], [-283, -3312], [-608, -862]], [[160266, 402519], [-794, 178]], [[159472, 402697], [52, 1461]], [[159524, 404158], [105, 2864], [-396, -48], [-8, 2485], [153, 592], [-290, 1813]], [[255560, 414746], [183, -1655], [-78, -4759]], [[255665, 408332], [-417, -11]], [[255248, 408321], [-3, 5131]], [[277926, 410448], [-234, -9]], [[277692, 410439], [-800, -6]], [[276892, 410433], [-426, 0]], [[276466, 410433], [-22, 3774], [-205, 1113]], [[268481, 414508], [-116, -2693]], [[268365, 411815], [-1169, 326]], [[267196, 412141], [-43, 3579], [147, 1917]], [[289999, 415506], [-235, -1942], [-206, -350]], [[289558, 413214], [-165, 1989]], [[237891, 414879], [8, -3256]], [[237899, 411623], [-1244, 79]], [[236655, 411702], [-37, 4579]], [[235541, 416361], [7, -4088]], [[235548, 412273], [-762, 19]], [[234786, 412292], [-326, 1439]], [[181375, 413882], [-2, -6764]], [[181373, 407118], [-6, -16111]], [[181367, 391007], [-2649, 0]], [[178718, 391007], [-2525, 9021]], [[248388, 413809], [0, -545]], [[248388, 413264], [-1641, 72]], [[246747, 413336], [194, 2070]], [[267196, 412141], [-24, -2179]], [[267172, 409962], [-1117, 399]], [[266055, 410361], [17, 1044]], [[266072, 411405], [162, -81], [203, 4497]], [[246747, 413336], [32, -696]], [[246779, 412640], [-960, 107]], [[200920, 414121], [-228, 4], [0, -10295]], [[200692, 403830], [-884, 2]], [[199808, 403832], [-4513, 9]], [[195295, 403841], [-1, 2439]], [[261741, 415716], [-54, -4023]], [[261687, 411693], [-224, -17]], [[261463, 411676], [-823, -18]], [[260640, 411658], [57, 2964]], [[284593, 410421], [-604, -5]], [[283989, 410416], [-677, 3]], [[289558, 413214], [-576, -1173]], [[288982, 412041], [-434, 587]], [[288510, 412605], [-2, -1]], [[251866, 411760], [-181, -2587]], [[251685, 409173], [-598, 20]], [[251087, 409193], [-316, 20], [-8, 2709], [-211, 269]], [[250552, 412191], [-1, 1895]], [[206689, 415638], [-255, -1612]], [[206434, 414026], [-263, 1]], [[241997, 414743], [-31, -6459]], [[241966, 408284], [-4, 0]], [[241962, 408284], [-1090, 93]], [[240872, 408377], [8, 1624], [-470, 45]], [[240410, 410046], [29, 6280]], [[266072, 411405], [-502, 925], [-631, 518]], [[264939, 412848], [8, 546]], [[240410, 410046], [-1140, 66]], [[239270, 410112], [-273, 4], [9, 4913]], [[236655, 411702], [-1, -802]], [[236654, 410900], [-1104, 25]], [[235550, 410925], [-2, 1348]], [[274786, 410447], [-874, -18]], [[273912, 410429], [29, 2386]], [[274787, 414933], [-1, -4486]], [[276466, 410433], [-1406, 8]], [[275060, 410441], [-274, 6]], [[188080, 412150], [153, -1356], [-371, -848], [15, -4365], [-94, -1440], [-489, -25], [-259, -1247]], [[187035, 402869], [-501, 282], [-67, 4177], [-5094, -210]], [[262825, 414085], [-5, -3544]], [[262820, 410541], [-613, -223]], [[262207, 410318], [-419, 17], [-101, 1358]], [[216579, 415679], [-7, -8084]], [[216572, 407595], [-1772, -3]], [[214800, 407592], [0, 109]], [[218452, 415671], [-5, -8082]], [[218447, 407589], [-1806, 6]], [[216641, 407595], [-69, 0]], [[156604, 411873], [136, -4011]], [[156740, 407862], [1, -963], [-483, -513], [-37, -1772], [224, -3190], [-238, -1152], [-36, -1899], [296, -1404], [110, -1803], [361, -938]], [[156938, 394228], [-728, 40], [-164, -807], [-645, -63], [-455, -695]], [[154946, 392703], [-541, 2802], [109, 2093], [-387, 5926], [151, 3427], [-35, 2229], [-193, 3368], [-469, 3107]], [[226274, 415670], [0, -6485]], [[226274, 409185], [0, -1616]], [[226274, 407569], [-1548, 10]], [[224726, 407579], [-50, 3]], [[224676, 407582], [2, 8092]], [[224676, 407582], [-1503, 7]], [[223173, 407589], [-60, 1]], [[223113, 407590], [-3, 8085]], [[227841, 415668], [2, -6478]], [[227843, 409190], [-1569, -5]], [[229411, 415659], [-2, -8099]], [[229409, 407560], [-425, -1]], [[228984, 407559], [-1141, 12]], [[227843, 407571], [0, 1619]], [[220016, 415661], [-7, -8093]], [[220009, 407568], [-1504, 21]], [[218505, 407589], [-58, 0]], [[170986, 398753], [-248, -368]], [[170738, 398385], [-2476, 19]], [[168262, 398404], [-1, 696], [-1014, 5147], [112, 6217], [-310, -1673]], [[221555, 415665], [-8, -8086]], [[221547, 407579], [-1486, -3]], [[220061, 407576], [-52, -8]], [[223113, 407590], [-1493, -13]], [[221620, 407577], [-73, 2]], [[230989, 415648], [1, -8092]], [[230990, 407556], [-955, 2]], [[230035, 407558], [-626, 2]], [[210184, 410789], [-3282, 6]], [[206902, 410795], [415, 544], [-67, 968], [390, 100], [54, 1353], [-366, -17], [-164, -1868], [-731, -133]], [[206433, 411742], [1, 2284]], [[233495, 415632], [0, -6462]], [[233495, 409170], [-625, 0]], [[232870, 409170], [-626, 1]], [[232244, 409171], [2, 6469]], [[232244, 409171], [-1, -1611], [-687, -6]], [[231556, 407554], [-566, 2]], [[234786, 412292], [-21, -1747], [-200, 349], [-276, -2272]], [[234289, 408622], [-168, 541], [-626, 7]], [[290898, 410603], [-392, -2265]], [[290506, 408338], [-409, 2276], [-302, 2865]], [[289795, 413479], [217, 1979]], [[250552, 412191], [-498, -1356], [-386, -1884], [4, -2170]], [[249672, 406781], [-468, -24]], [[249204, 406757], [-626, -23]], [[248578, 406734], [-164, 3648], [-26, 2882]], [[239270, 410112], [-32, -1636]], [[239238, 408476], [-1337, -79]], [[237901, 408397], [-2, 3226]], [[243245, 414667], [-18, -5394]], [[243227, 409273], [-942, 82], [-5, -1094], [-314, 23]], [[256704, 413149], [-10, -4875]], [[256694, 408274], [-518, 44]], [[256176, 408318], [-511, 14]], [[272786, 413171], [-213, 31], [-15, -3018], [100, -1891]], [[272658, 408293], [-850, -351]], [[271808, 407942], [-304, 3139]], [[244567, 411139], [169, -1392]], [[244736, 409747], [-1144, 48], [2, -537]], [[243594, 409258], [-367, 15]], [[260640, 411658], [-101, -1641]], [[260539, 410017], [-888, -24]], [[259651, 409993], [40, 4282]], [[269372, 414335], [-25, -1734], [207, -78], [64, -3315]], [[269618, 409208], [-318, 122], [-21, -1093], [-338, 107], [-318, -1007]], [[268623, 407337], [-310, 141], [52, 4337]], [[205473, 414010], [-1, -3087]], [[205472, 410923], [-407, 494], [-407, 1459]], [[270448, 411368], [146, -862], [-65, -3237]], [[270529, 407269], [-311, 106]], [[270218, 407375], [-615, 749], [15, 1084]], [[259651, 409993], [-1, -1095]], [[259650, 408898], [-829, -88]], [[258821, 408810], [-213, -26]], [[258608, 408784], [0, 5433]], [[202584, 414234], [137, -2937], [562, -2151], [-209, -2932], [145, -2132]], [[203219, 404082], [-612, -330]], [[202607, 403752], [-1915, 78]], [[204005, 410026], [367, -1169], [-102, -1326]], [[204270, 407531], [-525, -3718], [-329, 268]], [[203416, 404081], [-197, 1]], [[258608, 408784], [-389, -585], [-532, 8]], [[257687, 408207], [-86, 542], [-21, 4366]], [[264939, 412848], [-109, -227], [-59, -4847]], [[264771, 407774], [-700, 215]], [[264071, 407989], [-317, 29]], [[263754, 408018], [-17, 6095]], [[263754, 408018], [1, -415], [-936, -22]], [[262819, 407581], [1, 2960]], [[206433, 411742], [-1, -3288]], [[206432, 408454], [13, -902]], [[206445, 407552], [-516, -5958], [-264, -2165]], [[205665, 399429], [-5, 0]], [[205660, 399429], [-187, -2], [-3, 8128]], [[205470, 407555], [2, 3368]], [[206902, 410795], [-81, -2163], [-166, 813], [-223, -991]], [[290506, 408338], [-301, -1739]], [[290205, 406599], [-214, 1001]], [[289991, 407600], [-385, 1833], [-352, 446], [-281, 1742]], [[288973, 411621], [822, 1858]], [[255248, 408321], [1, -2424]], [[255249, 405897], [-1195, 78]], [[254054, 405975], [-16, 3810]], [[254038, 409785], [79, 3609]], [[254038, 409785], [-271, -622], [-1138, -19]], [[252629, 409144], [-4, 2611]], [[248578, 406734], [-634, -33]], [[247944, 406701], [-412, -2]], [[247532, 406699], [3, 2165], [-202, 556], [5, 1619], [-635, 684]], [[246703, 411723], [76, 917]], [[273912, 410429], [-309, -2118]], [[273603, 408311], [-264, -1244]], [[273339, 407067], [6, 599], [-687, 627]], [[257687, 408207], [-84, -2441]], [[257603, 405766], [-705, 60]], [[256898, 405826], [-210, 8], [6, 2440]], [[205470, 407555], [-1200, -24]], [[266055, 410361], [-47, -3102]], [[266008, 407259], [-855, 352]], [[265153, 407611], [-382, 163]], [[246703, 411723], [-131, -1726], [182, -3269]], [[246754, 406728], [-91, -2345]], [[246663, 404383], [-901, 73]], [[245762, 404456], [-253, 772], [-419, 2922]], [[245090, 408150], [-354, 1597]], [[288652, 406259], [12, 7]], [[288664, 406266], [-12, -7]], [[288613, 408309], [-8, 431]], [[288605, 408740], [8, -431]], [[288982, 412041], [-534, -3559], [147, -1016], [-73, -1880], [204, -1805]], [[288726, 403781], [-376, -1332], [-304, 88]], [[288046, 402537], [-18, 1506]], [[288028, 404043], [-61, 6417]], [[251087, 409193], [0, -5735], [-318, 51]], [[250769, 403509], [-1090, 4], [-7, 3268]], [[235550, 410925], [3, -4036]], [[235553, 406889], [-1398, 54]], [[234155, 406943], [134, 1679]], [[192583, 405746], [-2934, 11], [-153, 2686], [-322, 1688]], [[189174, 410131], [0, 2023]], [[189174, 410131], [2, -4419], [-151, 2], [5, -8099]], [[189030, 397615], [-1545, 13], [-446, 230]], [[187039, 397858], [-4, 5011]], [[268623, 407337], [-26, -1604]], [[268597, 405733], [-717, 219], [40, 495], [-788, 179]], [[267132, 406626], [40, 3336]], [[159524, 404158], [-693, 579], [2, -532], [-1674, -53]], [[157159, 404152], [10, 3693], [-429, 17]], [[252629, 409144], [5, -3807]], [[252634, 405337], [-317, 9], [-373, 2453], [-254, 17], [-5, 1357]], [[262207, 410318], [-5, -3507]], [[262202, 406811], [-729, -13]], [[261473, 406798], [-10, 4878]], [[261473, 406798], [1, -1346]], [[261474, 405452], [-925, -9]], [[260549, 405443], [-10, 4574]], [[247532, 406699], [-778, 29]], [[237901, 408397], [-2, -1616]], [[237899, 406781], [-1253, 49]], [[236646, 406830], [8, 4070]], [[289029, 404123], [-16, 44]], [[289013, 404167], [16, -44]], [[289991, 407600], [-61, -2065], [-434, 1890], [-494, -3194]], [[289002, 404231], [-350, 2028]], [[288664, 406266], [-51, 2043]], [[288605, 408740], [368, 2881]], [[164780, 405355], [-1400, -14], [-152, 1284], [-273, 169], [-234, -1182], [-772, -1245]], [[161949, 404367], [29, 4517]], [[271808, 407942], [-352, -103], [16, -1873], [-379, -570]], [[271093, 405396], [-587, 184], [23, 1689]], [[236646, 406830], [-5, -1350]], [[236641, 405480], [-1087, 27]], [[235554, 405507], [-1, 1382]], [[210183, 407557], [-20, 1]], [[210163, 407558], [-2636, -8]], [[207527, 407550], [-1082, 2]], [[168262, 398404], [-491, -23], [-238, -2422], [2, -1713], [314, 16], [-14, -8144], [-697, 1]], [[167138, 386119], [-481, 2256]], [[166657, 388375], [-56, 3727], [-158, -52], [-40, 4122], [307, 670], [-3, 1728], [-666, 42]], [[166041, 398612], [-32, 2040], [-419, 1033]], [[165590, 401685], [652, 1616], [544, 5284]], [[291787, 407390], [22, -3591], [-686, -1401]], [[291123, 402398], [-572, 643]], [[290551, 403041], [14, 1878], [-360, 1680]], [[262819, 407581], [-2, -849]], [[262817, 406732], [-615, 79]], [[283284, 410419], [-281, -1862], [-298, -5500]], [[282705, 403057], [-115, -74]], [[282590, 402983], [-298, 3217]], [[282292, 406200], [-167, 1078], [132, 1025], [-513, 247]], [[281744, 408550], [-440, 1436], [-237, -1383], [-192, 274]], [[280875, 408877], [-25, 1584]], [[280875, 408877], [-278, -307], [-96, -1936]], [[280501, 406634], [-526, 344]], [[279975, 406978], [-386, 1375], [-475, -3170], [-283, 769]], [[278831, 405952], [380, 4519]], [[278831, 405952], [-568, -2833]], [[278263, 403119], [-600, -2268]], [[277663, 400851], [29, 9588]], [[288028, 404043], [-186, -69]], [[287842, 403974], [-578, 294], [198, 3146], [-296, -282]], [[287166, 407132], [-438, 3312]], [[276892, 410433], [-365, -5307]], [[276527, 405126], [-123, 314]], [[276404, 405440], [-598, 2940], [-675, 502]], [[275131, 408882], [-71, 1559]], [[277663, 400851], [0, -206]], [[277663, 400645], [-557, 1423], [-342, -760]], [[276764, 401308], [-239, 1284]], [[276525, 402592], [2, 2534]], [[287166, 407132], [-74, -2014], [-419, -1266], [83, 1879], [-379, -1384]], [[286377, 404347], [-194, 1933], [-292, 889], [-100, 3272]], [[275131, 408882], [-285, -1379], [11, -1744]], [[274857, 405759], [-140, -754]], [[274717, 405005], [-207, 396]], [[274510, 405401], [-283, 562], [-368, 2260], [-256, 88]], [[286377, 404347], [69, -1032], [-251, -2455], [-293, 639]], [[285902, 401499], [0, 2434], [-506, 6], [2, -1757], [256, -747]], [[285654, 401435], [-221, -443]], [[285433, 400992], [-513, 2543]], [[284920, 403535], [-27, 1753], [292, 5146]], [[284920, 403535], [-797, 69]], [[284123, 403604], [171, 2562], [-558, 2377], [253, 1873]], [[284123, 403604], [-2, -9]], [[284121, 403595], [-805, -2420]], [[283316, 401175], [-301, 1528], [-310, 354]], [[267132, 406626], [-296, -2586]], [[266836, 404040], [-607, 25]], [[266229, 404065], [40, 3088], [-261, 106]], [[192583, 405610], [37, -824], [-294, -4892], [-129, -5401], [227, -2018], [156, -4769]], [[192580, 387706], [-3568, 0], [0, 190]], [[189012, 387896], [18, 9719]], [[240872, 408377], [-43, -5375]], [[240829, 403002], [-231, 408], [-164, -2184]], [[240434, 401226], [-712, 2930]], [[239722, 404156], [-345, 981], [-139, 3339]], [[260549, 405443], [-153, -1911]], [[260396, 403532], [-746, -50]], [[259650, 403482], [0, 5416]], [[281744, 408550], [-325, -480], [-251, -3772]], [[281168, 404298], [-330, 1392]], [[280838, 405690], [-337, 944]], [[245090, 408150], [-786, -2743], [61, -2460]], [[244365, 402947], [-779, 381]], [[243586, 403328], [8, 5930]], [[254054, 405975], [-143, -1905]], [[253911, 404070], [-1278, -83]], [[252633, 403987], [1, 1350]], [[243586, 403328], [-1650, 161]], [[241936, 403489], [26, 4795]], [[270218, 407375], [-23, -1679], [-315, 122], [-26, -1651]], [[269854, 404167], [-626, 216], [-9, -490], [-644, -25]], [[268575, 403868], [22, 1865]], [[227843, 407571], [-4, -4859]], [[227839, 402712], [-1559, 8]], [[226280, 402720], [-6, 4849]], [[232870, 409170], [-17, -4354]], [[232853, 404816], [-54, -3776]], [[232799, 401040], [-1242, 6]], [[231557, 401046], [-1, 6508]], [[234155, 406943], [373, -2131]], [[234528, 404812], [-590, 7]], [[233938, 404819], [-1085, -3]], [[252633, 403987], [0, -2969]], [[252633, 401018], [-934, 22]], [[251699, 401040], [-931, 31]], [[250768, 401071], [1, 2438]], [[279975, 406978], [-539, -3797], [-360, -1741]], [[279076, 401440], [-431, 1393], [-382, 286]], [[273339, 407067], [-230, -1523]], [[273109, 405544], [-695, -2159]], [[272414, 403385], [-195, 1248], [-314, -1223], [-55, -1445], [-293, 114], [-131, -1044]], [[271426, 401035], [10, 998], [-367, 904], [24, 2459]], [[276404, 405440], [-240, -950], [-479, -156]], [[275685, 404334], [-828, 1425]], [[259650, 403482], [-372, -60]], [[259278, 403422], [-462, -46]], [[258816, 403376], [5, 5434]], [[161949, 404367], [-300, -279], [-424, -2782], [0, -3647]], [[161225, 397659], [-377, -706]], [[160848, 396953], [-364, -450], [-89, -981], [-129, 6997]], [[258816, 403376], [-362, -36]], [[258454, 403340], [-695, 148]], [[257759, 403488], [-4, 2281], [-152, -3]], [[282292, 406200], [-394, -2353], [-185, -1907]], [[281713, 401940], [-545, 2358]], [[239722, 404156], [-202, 524], [-148, -1562], [-299, -404], [-194, -1443], [-195, 1194]], [[238684, 402465], [-29, -1189], [-453, 359], [-301, -766]], [[237901, 400869], [-2, 5912]], [[241936, 403489], [-12, -1886]], [[241924, 401603], [-322, 43]], [[241602, 401646], [-773, 1356]], [[256176, 408318], [-109, -1613], [-6, -4868]], [[256061, 401837], [-1014, 8]], [[255047, 401845], [202, 1648], [0, 2404]], [[256898, 405826], [-7, -2441], [-310, 7], [-2, -3249]], [[256579, 400143], [-519, 70]], [[256060, 400213], [1, 1624]], [[274510, 405401], [-752, -2906]], [[273758, 402495], [-136, 1718], [-196, -664]], [[273426, 403549], [-49, 2099], [-268, -104]], [[246360, 401187], [-1283, 58], [-7, -1638], [-209, 11]], [[244861, 399618], [-414, 49]], [[244447, 399667], [-82, 3280]], [[245762, 404456], [468, -1904], [130, -1365]], [[264071, 407989], [93, -711], [-59, -4822]], [[264105, 402456], [-1299, 241]], [[262806, 402697], [11, 4035]], [[265153, 407611], [-83, -5848]], [[265070, 401763], [-704, 293]], [[264366, 402056], [-261, 400]], [[157159, 404152], [-103, -1292], [316, -1811], [516, -796], [-42, -2231], [424, -2417]], [[158270, 395605], [-153, -1117]], [[158117, 394488], [-193, -2961], [-454, -703]], [[157470, 390824], [-532, 3404]], [[214800, 407592], [8, -8099]], [[214808, 399493], [2, -1603]], [[214810, 397890], [-3111, -176]], [[211699, 397714], [23, 9832]], [[289145, 403438], [-116, 685]], [[289013, 404167], [-11, 64]], [[290551, 403041], [-150, -2723]], [[290401, 400318], [-713, 1073], [-543, 2047]], [[223173, 407589], [-8, -8099]], [[223165, 399490], [-1516, -10]], [[221649, 399480], [-38, 0]], [[221611, 399480], [9, 8097]], [[265463, 401619], [-346, 126]], [[265117, 401745], [-47, 18]], [[266229, 404065], [-541, -2162], [-225, -284]], [[216641, 407595], [-7, -8065]], [[216634, 399530], [-241, -6]], [[216393, 399524], [-1585, -31]], [[218505, 407589], [-3, -8092]], [[218502, 399497], [-253, 0]], [[218249, 399497], [-1615, 33]], [[224726, 407579], [-8, -6473]], [[224718, 401106], [0, -1622]], [[224718, 399484], [-1525, 8]], [[223193, 399492], [-28, -2]], [[220061, 407576], [-8, -8104]], [[220053, 399472], [-1551, 25]], [[228984, 407559], [-7, -6447]], [[228977, 401112], [-5, -1634]], [[228972, 399478], [-1137, -7]], [[227835, 399471], [4, 3241]], [[226280, 402720], [-2, -1625]], [[226278, 401095], [-1560, 11]], [[221611, 399480], [-1512, -4]], [[220099, 399476], [-46, -4]], [[230035, 407558], [-404, -3030], [469, -4113], [472, -186]], [[230572, 400229], [-5, -2410], [-307, 8]], [[230260, 397827], [0, 542], [-975, 290], [5, 2435], [-313, 18]], [[207527, 407550], [-7, -8123]], [[207520, 399427], [-1032, 5]], [[206488, 399432], [-823, -3]], [[210163, 407558], [-15, -13022], [-936, 36]], [[209212, 394572], [12, 4830], [-1704, 25]], [[231557, 401046], [-18, -1625]], [[231539, 399421], [-119, 1200], [-442, 280], [-406, -672]], [[211699, 397714], [-28, -7915]], [[211671, 389799], [1, -1621], [-925, -166]], [[210747, 388012], [-1530, 110]], [[209217, 388122], [-5, 6450]], [[205660, 399429], [4, -8052]], [[205664, 391377], [-1785, -67]], [[203879, 391310], [176, 2110], [-338, 2530], [-236, -27], [-218, 2136]], [[203263, 398059], [20, 4732], [133, 1290]], [[271426, 401035], [-87, -662]], [[271339, 400373], [-1426, 434]], [[269913, 400807], [-59, 3360]], [[187039, 397858], [-587, -3354], [17, -2560], [-254, -957], [-384, 92], [-188, -2027]], [[185643, 389052], [-4276, 11]], [[181367, 389063], [0, 1944]], [[280838, 405690], [20, -2093], [-220, -1797], [43, -1668], [-291, -1468]], [[280390, 398664], [-1091, 2060], [-223, 716]], [[235554, 405507], [-2, -5521]], [[235552, 399986], [-482, 732]], [[235070, 400718], [-348, 1876], [57, 1415], [-251, 803]], [[262806, 402697], [-687, 37]], [[262119, 402734], [-424, 20], [-218, -745]], [[261477, 402009], [-3, 3443]], [[237901, 400869], [-183, 146], [-783, -1330]], [[236935, 399685], [-299, 1185]], [[236636, 400870], [5, 4610]], [[250768, 401071], [-307, -8], [0, -3525]], [[250461, 397538], [-935, 2], [-151, -541]], [[249375, 396999], [-163, -3]], [[249212, 396996], [-8, 9761]], [[249212, 396996], [-1247, 20]], [[247965, 397016], [-5, 4876]], [[247960, 401892], [-16, 4809]], [[164769, 402898], [-1779, -16], [-230, -509], [-693, -3276], [-169, -1785], [-673, 347]], [[247960, 401892], [-463, -687], [1, -945], [-744, 197], [-63, -1254]], [[246691, 399203], [-28, 5180]], [[268575, 403868], [-39, -2983]], [[268536, 400885], [-64, -728]], [[268472, 400157], [-1582, 535]], [[266890, 400692], [-54, 3348]], [[282590, 402983], [-306, -3505]], [[282284, 399478], [-571, 2462]], [[195295, 403841], [-25, -16135]], [[195270, 387706], [-2690, 0]], [[255047, 401845], [-69, -1899]], [[254978, 399946], [-895, 325]], [[254083, 400271], [-161, -18]], [[253922, 400253], [-11, 3817]], [[273426, 403549], [-646, -1538]], [[272780, 402011], [-366, 1374]], [[257759, 403488], [-152, -218], [7, -3170]], [[257614, 400100], [-1035, 43]], [[275685, 404334], [85, -2807]], [[275770, 401527], [-169, -2412]], [[275601, 399115], [-203, -164]], [[275398, 398951], [-825, 1176]], [[274573, 400127], [195, 794], [-216, 1514], [165, 2570]], [[281713, 401940], [-331, -4250]], [[281382, 397690], [-453, -530]], [[280929, 397160], [-54, 1697], [-336, -1327], [-249, 539]], [[280290, 398069], [100, 595]], [[281262, 400644], [0, 0]], [[236636, 400870], [-257, 453], [-437, -2067], [-406, -130]], [[235536, 399126], [16, 860]], [[261477, 402009], [-400, -1352]], [[261077, 400657], [-346, -1150], [-342, -60]], [[260389, 399447], [7, 4085]], [[276525, 402592], [-354, -958], [-401, -107]], [[274573, 400127], [-368, -1329]], [[274205, 398798], [-236, 255]], [[273969, 399053], [-281, 3044], [70, 398]], [[233938, 404819], [-18, -6983]], [[233920, 397836], [-872, 234]], [[233048, 398070], [-272, 169], [23, 2801]], [[235070, 400718], [-349, 73], [-25, -3936]], [[234696, 396855], [-411, -173]], [[234285, 396682], [-361, -327], [-4, 1481]], [[159472, 402697], [-103, -2316], [298, -2193], [10, -2578]], [[159677, 395610], [-1407, -5]], [[240434, 401226], [-265, -1912], [27, -1098]], [[240196, 398216], [-322, -2538]], [[239874, 395678], [-1243, 272]], [[238631, 395950], [53, 6515]], [[272780, 402011], [-162, -1543]], [[272618, 400468], [-357, -942], [-433, -2022]], [[271828, 397504], [-465, 1316]], [[271363, 398820], [-24, 1553]], [[246691, 399203], [104, -2425], [318, -371]], [[247113, 396407], [-269, -1766], [-327, 1148]], [[246517, 395789], [-157, 5398]], [[269913, 400807], [-106, 33], [-45, -3311]], [[269762, 397529], [-314, 139]], [[269448, 397668], [30, 1911], [-311, 801], [-631, 505]], [[273969, 399053], [-615, -1858]], [[273354, 397195], [-359, 391]], [[272995, 397586], [-242, 75], [-135, 2807]], [[288046, 402537], [11, -941]], [[288057, 401596], [-639, -5]], [[287418, 401591], [-372, -2533], [-163, 577], [-139, -1618], [-138, 1746], [461, 4161], [775, 50]], [[203263, 398059], [-1079, 33]], [[202184, 398092], [232, 2579], [24, 2142], [167, 939]], [[253922, 400253], [-982, -52]], [[252940, 400201], [-307, 817]], [[266890, 400692], [-89, -2650]], [[266801, 398042], [-801, -647]], [[266000, 397395], [-555, 16], [18, 4208]], [[285892, 400880], [-123, -37]], [[285769, 400843], [123, 37]], [[285902, 401499], [-150, -622]], [[285752, 400877], [-98, 558]], [[285433, 400992], [-397, -2058]], [[285036, 398934], [-134, 519]], [[284902, 399453], [-167, -26], [-614, 4168]], [[199808, 403832], [102, -2046]], [[199910, 401786], [-297, -715]], [[199613, 401071], [-737, -3251], [-271, 663], [-333, -353], [-440, -2814], [-665, -1481], [1, -3000]], [[197168, 390835], [-2, -3129], [-1896, 0]], [[202184, 398092], [-58, -1116]], [[202126, 396976], [-415, 809], [-150, -1175], [-542, 1041], [-197, 1576], [-600, -3], [-312, 2562]], [[289289, 396094], [-480, -883], [-190, -1250], [-469, -135]], [[288150, 393826], [-70, 5853]], [[288080, 399679], [-23, 1917]], [[288726, 403781], [311, -1993], [21, -3696], [231, -1998]], [[258454, 403340], [32, -5426], [144, 9]], [[258630, 397923], [2, -1078]], [[258632, 396845], [-1016, 27]], [[257616, 396872], [-2, 3228]], [[260389, 399447], [-315, -33], [2, -1129]], [[260076, 398285], [-172, -510], [-611, 176]], [[259293, 397951], [-15, 5471]], [[244447, 399667], [-616, 99], [-11, -1652]], [[243820, 398114], [-1328, 96]], [[242492, 398210], [16, 3270], [-584, 123]], [[284902, 399453], [-317, -3074]], [[284585, 396379], [-327, -587]], [[284258, 395792], [-575, 2284]], [[283683, 398076], [-376, 336], [-185, 1328], [194, 1435]], [[259293, 397951], [-663, -28]], [[241246, 396474], [-791, 165], [-259, 1577]], [[241602, 401646], [-356, -5172]], [[279076, 401440], [-306, -3713], [122, -2044], [-246, -2142]], [[278646, 393541], [-601, 2684]], [[278045, 396225], [-22, 131]], [[278023, 396356], [164, 2028], [-157, 243], [174, 1961], [-541, 57]], [[291123, 402398], [69, -688], [-433, -4686], [-217, -1125], [-299, -2], [197, 2821], [-39, 1600]], [[283683, 398076], [-584, -3905]], [[283099, 394171], [-333, 1775]], [[282766, 395946], [-855, 1322]], [[281911, 397268], [373, 2210]], [[164778, 400098], [2, -986]], [[164780, 399112], [3, -842]], [[164783, 398270], [-389, 10], [-272, -829], [-495, 65], [-431, -2100], [-546, 1773], [-795, -2035], [-254, -3501]], [[161601, 391653], [-949, 430]], [[160652, 392083], [46, 3550], [150, 1320]], [[264366, 402056], [-167, -4639]], [[264199, 397417], [-520, 1367]], [[263679, 398784], [-327, -385]], [[263352, 398399], [-336, 1360], [-212, -781]], [[262804, 398978], [2, 3719]], [[262119, 402734], [-185, -6687]], [[261934, 396047], [-10, -343]], [[261924, 395704], [-187, -294]], [[261737, 395410], [-674, -16]], [[261063, 395394], [14, 5263]], [[262804, 398978], [-161, -1387]], [[262643, 397591], [-709, -1544]], [[227835, 399471], [-2, -3242]], [[227833, 396229], [-1550, 10]], [[226283, 396239], [-5, 4856]], [[160652, 392083], [-329, 7]], [[160323, 392090], [-249, 593], [-93, 1588], [-304, 1339]], [[276764, 401308], [-43, -2135]], [[276721, 399173], [-197, -2652], [-527, -488]], [[275997, 396033], [78, 1671], [-474, 1411]], [[238631, 395950], [-2, -269]], [[238629, 395681], [-940, 177], [-5, -540], [-774, 156]], [[236910, 395474], [25, 4211]], [[278023, 396356], [-421, 199], [-771, 1157], [-110, 1461]], [[264942, 392757], [-495, 1044]], [[264447, 393801], [-4, 882]], [[264443, 394683], [-244, 2734]], [[265117, 401745], [-175, -8988]], [[281911, 397268], [-117, -635]], [[281794, 396633], [-412, 1057]], [[247965, 397016], [-355, -13], [-6, -1413]], [[247604, 395590], [-491, 817]], [[286601, 396689], [-270, -2437], [180, 3428], [90, -991]], [[288080, 399679], [-243, -644], [-318, -3542]], [[287519, 395493], [-452, 120]], [[287067, 395613], [-237, -814], [-18, 1650], [166, 2199], [440, 2943]], [[256060, 400213], [0, -4915]], [[256060, 395298], [-786, -99]], [[255274, 395199], [-296, 4747]], [[202126, 396976], [391, -1635], [384, -265], [-241, -1240], [-125, -2429], [202, -1122], [71, -1957], [299, -2060]], [[203107, 386268], [-2100, 54], [-1, -5187]], [[201006, 381135], [-1581, 2]], [[199425, 381137], [-185, 2880]], [[199240, 384017], [375, 1], [-2, 6826]], [[199613, 390844], [0, 10227]], [[266000, 397395], [-90, -7129]], [[265910, 390266], [-554, 2429]], [[265356, 392695], [-414, 62]], [[242492, 398210], [-119, -2235], [31, -2530], [-220, -3074]], [[242184, 390371], [-394, 741], [-90, 1046]], [[241700, 392158], [-288, 3406]], [[241412, 395564], [-166, 910]], [[166041, 398612], [-587, 525], [-674, -25]], [[280290, 398069], [-483, -2836], [-192, -318], [-231, -2314]], [[279384, 392601], [-347, 1621], [-177, -1640]], [[278860, 392582], [-214, 959]], [[286072, 395357], [-240, -2629], [72, -1052]], [[285904, 391676], [-438, 652]], [[285466, 392328], [40, 2580], [-96, 1946], [-374, 2080]], [[285752, 400877], [17, -34]], [[285892, 400880], [302, -2195], [-274, -289], [359, -1162], [-228, -562], [21, -1315]], [[236910, 395474], [-14, -1566]], [[236896, 393908], [-1362, 262]], [[235534, 394170], [2, 3666]], [[235536, 397836], [0, 1290]], [[246517, 395789], [-458, -1049], [-357, -129]], [[245702, 394611], [-426, 36], [-426, 2232]], [[244850, 396879], [11, 2739]], [[230260, 397827], [-2, -3238]], [[230258, 394589], [-1082, 7]], [[229176, 394596], [-204, 1767], [0, 3115]], [[199613, 390844], [-2445, -9]], [[226283, 396239], [-1, -1624]], [[226282, 394615], [-1550, -6]], [[224732, 394609], [-14, 4875]], [[233048, 398070], [-1, -3479]], [[233047, 394591], [-1242, 3]], [[231805, 394594], [-1, 4257], [-265, 570]], [[251699, 401040], [-2, -5670], [314, 56]], [[252011, 395426], [-4, -1645]], [[252007, 393781], [-1233, -55], [-1, -1620]], [[250773, 392106], [-323, 106]], [[250450, 392212], [11, 5326]], [[252940, 400201], [-3, -4846]], [[252937, 395355], [-926, 71]], [[231805, 394594], [2, -2436]], [[231807, 392158], [-1134, -2]], [[230673, 392156], [-105, 1611], [-310, 822]], [[269448, 397668], [-55, -3547], [-336, -2]], [[269057, 394119], [-207, 86]], [[268850, 394205], [-308, 108], [-130, 1734]], [[268412, 396047], [60, 4110]], [[270916, 394753], [20, 1087], [-281, 1701], [-269, -1233]], [[270386, 396308], [9, 757], [-633, 464]], [[271363, 398820], [-98, -3219], [-349, -848]], [[235536, 397836], [-739, 279], [-101, -1260]], [[268412, 396047], [-1128, 226], [-164, 1036]], [[267120, 397309], [-319, 733]], [[261063, 395394], [-665, -1816]], [[260398, 393578], [-311, -148]], [[260087, 393430], [-11, 4855]], [[272995, 397586], [-322, -2153]], [[272673, 395433], [-626, 50]], [[272047, 395483], [-219, 2021]], [[255274, 395199], [-23, -931]], [[255251, 394268], [-1050, -44]], [[254201, 394224], [-107, 0]], [[254094, 394224], [-11, 6047]], [[254094, 394224], [-870, -49]], [[253224, 394175], [-287, 84], [0, 1096]], [[257616, 396872], [-2, -1631]], [[257614, 395241], [-618, -10]], [[256996, 395231], [-541, -4]], [[256455, 395227], [-395, 71]], [[275398, 398951], [-49, -2704], [-193, -1561], [-17, -2748]], [[275139, 391938], [-179, 224]], [[274960, 392162], [-177, 2250], [-237, 820]], [[274546, 395232], [-309, 1940], [-32, 1626]], [[178718, 391007], [0, -11658], [-2489, -10], [-9, -22498]], [[176220, 356841], [9, -15661]], [[176229, 341180], [-3543, 18062]], [[172686, 359242], [1, 19187], [-1464, 8790]], [[171223, 387219], [-1407, 8282], [-1, 1512], [923, 1372]], [[244850, 396879], [-2, -2772], [-420, 28], [-8, -2523]], [[244420, 391612], [-356, -627], [-262, 515]], [[243802, 391500], [-19, -8]], [[243783, 391492], [37, 6622]], [[263352, 398399], [22, -5066]], [[263374, 393333], [-124, -465]], [[263250, 392868], [-377, 1491]], [[262873, 394359], [-210, 811]], [[262663, 395170], [-20, 2421]], [[288150, 393826], [43, -3599]], [[288193, 390227], [-151, 927], [-491, -152]], [[287551, 391002], [-166, 1427], [180, 785]], [[287565, 393214], [-46, 2279]], [[218249, 399497], [-19, -8070]], [[218230, 391427], [-862, 14]], [[217368, 391441], [-992, -7]], [[216376, 391434], [17, 8090]], [[216376, 391434], [-231, -10]], [[216145, 391424], [-1332, -41]], [[214813, 391383], [-3, 6507]], [[223193, 399492], [-14, -8122]], [[223179, 391370], [-1512, -4]], [[221667, 391366], [-36, -1]], [[221631, 391365], [18, 8115]], [[220099, 399476], [-16, -8097]], [[220083, 391379], [-260, 16]], [[219823, 391395], [-1228, 35]], [[218595, 391430], [-365, -3]], [[229176, 394596], [-104, -1078], [-9, -3776]], [[229063, 389742], [-1230, 0]], [[227833, 389742], [0, 6487]], [[224732, 394609], [-3, -3237]], [[224729, 391372], [-1523, -3]], [[223206, 391369], [-27, 1]], [[221631, 391365], [-1548, 14]], [[285466, 392328], [-31, -1556]], [[285435, 390772], [-7, -2277]], [[285428, 388495], [-134, 1401], [-606, 811], [-230, -838], [-81, 1376]], [[284377, 391245], [169, 2220]], [[284546, 393465], [298, 1554], [-259, 1360]], [[206488, 399432], [13, -4858], [-121, -1294], [371, -47], [-10, -2736]], [[206741, 390497], [-830, -44], [-247, 924]], [[209217, 388122], [-2473, -51]], [[206744, 388071], [-3, 2426]], [[264443, 394683], [-524, -1279]], [[263919, 393404], [-110, 900], [24, 2587], [-154, 1893]], [[278045, 396225], [-294, -513], [-232, -1659], [80, -1120], [-325, -2167]], [[277274, 390766], [-416, 1407], [-243, -3512], [-463, -1712], [-244, 275], [-358, -1592]], [[275550, 385632], [171, 2537], [-267, 3167]], [[275454, 391336], [428, 948], [115, 3749]], [[166657, 388375], [-700, 3239]], [[165957, 391614], [-901, 4159]], [[165056, 395773], [-269, 1240], [-4, 1257]], [[275454, 391336], [-315, 602]], [[274546, 395232], [-268, -471], [-788, -2997]], [[273490, 391764], [-200, 1393], [150, 995], [-86, 3043]], [[280929, 397160], [39, -1198], [-240, -2109]], [[280728, 393853], [-452, -1704], [-259, -2493]], [[280017, 389656], [-633, 2945]], [[263919, 393404], [-308, -258]], [[263611, 393146], [-237, 187]], [[272047, 395483], [-122, -4567], [68, -1110]], [[271993, 389806], [-308, -1084], [-178, 1340]], [[271507, 390062], [-213, 1013]], [[271294, 391075], [-378, 3678]], [[171223, 387219], [-1840, -10800], [-214, 47]], [[169169, 376466], [-2031, 9653]], [[260087, 393430], [-260, -1360]], [[259827, 392070], [-266, 626], [-811, -79]], [[258750, 392617], [-17, 4231], [-101, -3]], [[234285, 396682], [0, -4534]], [[234285, 392148], [-1238, 4]], [[233047, 392152], [0, 2439]], [[165056, 395773], [67, -1276], [-536, -3017]], [[164587, 391480], [-681, -2963], [-866, -753], [-371, 963], [-735, -860]], [[161934, 387867], [-256, 3852], [-77, -66]], [[243783, 391492], [-601, -672], [-237, -1353]], [[242945, 389467], [-301, -676], [-460, 1580]], [[241412, 395564], [-331, -4506], [-621, 73]], [[240460, 391131], [-613, 169]], [[239847, 391300], [27, 4378]], [[284258, 395792], [-146, -764]], [[284112, 395028], [62, -329]], [[284174, 394699], [109, -600]], [[284283, 394099], [166, -998]], [[284449, 393101], [22, -1315], [-319, -1468], [-235, 541]], [[283917, 390859], [-818, 3312]], [[283747, 394572], [0, 0]], [[283737, 394153], [0, 0]], [[203879, 391310], [232, -1351], [-62, -2148], [-284, -1101]], [[203765, 386710], [-658, -442]], [[235534, 394170], [-3, -2032]], [[235531, 392138], [-1246, 10]], [[267120, 397309], [10, -7398]], [[267130, 389911], [-689, 1521], [-363, -1183]], [[266078, 390249], [-168, 17]], [[189012, 387896], [-1284, -153]], [[187728, 387743], [-2094, 147]], [[185634, 387890], [9, 1162]], [[214813, 391383], [1, -1533]], [[214814, 389850], [-3143, -51]], [[273490, 391764], [-131, -932]], [[273359, 390832], [-145, -1040]], [[273214, 389792], [-209, 606], [-29, 1581], [-303, 3454]], [[281794, 396633], [-352, -2134]], [[281442, 394499], [-181, -1569], [-249, -398]], [[281012, 392532], [-284, 1321]], [[270386, 396308], [-126, -2313], [-210, -922], [124, -3420], [-112, -240]], [[270062, 389413], [-201, -167]], [[269861, 389246], [-208, 46], [20, 1692], [-328, 119], [-31, 1671], [-276, 128], [19, 1217]], [[262663, 395170], [-751, 42], [12, 492]], [[271294, 391075], [-509, -438], [-303, -920], [26, -2483]], [[270508, 387234], [-446, 2179]], [[250450, 392212], [-956, 22]], [[249494, 392234], [-119, 4765]], [[268850, 394205], [-252, -4691], [-210, -490]], [[268388, 389024], [-201, 3414], [-398, -532]], [[267789, 391906], [-350, -1992], [-309, -3]], [[282766, 395946], [-168, -2055], [513, -5136]], [[283111, 388755], [-288, -2729]], [[282823, 386026], [-280, 58], [-558, 5269]], [[281985, 391353], [-543, 3146]], [[249494, 392234], [6, -1626], [-311, -13]], [[249189, 390595], [-1322, 102]], [[247867, 390697], [42, 2084]], [[247909, 392781], [135, 617]], [[248044, 393398], [7, 862], [-447, 1330]], [[245702, 394611], [-17, -6020]], [[245685, 388591], [-299, 1158], [-435, 348], [-393, 1320]], [[244558, 391417], [-138, 195]], [[284546, 393465], [-223, 1827]], [[284323, 395292], [-65, 500]], [[258750, 392617], [-93, -1410]], [[258657, 391207], [-1043, -27]], [[257614, 391180], [0, 4061]], [[248044, 393398], [-494, 1527], [-406, -1104], [-259, -2536], [-553, -982]], [[246332, 390303], [-514, -1949], [-133, 237]], [[289289, 396094], [351, -2735], [270, -53], [-16, -3323], [132, -3184]], [[290026, 386799], [-57, 0]], [[289969, 386799], [-44, 0]], [[289925, 386799], [-712, 13]], [[289213, 386812], [-982, 152], [-22, 1873]], [[288209, 388837], [-16, 1390]], [[227833, 389742], [-1540, 10]], [[226293, 389752], [-11, 4863]], [[278860, 392582], [-466, -5289]], [[278394, 387293], [-254, -1223]], [[278140, 386070], [-449, 839], [-166, 1725], [-310, 767]], [[277215, 389401], [59, 1365]], [[239847, 391300], [-20, -3033]], [[239827, 388267], [-622, 98], [-4, -541], [-615, 114]], [[238586, 387938], [4, 815]], [[238590, 388753], [39, 6928]], [[287565, 393214], [-230, -1317], [167, -933], [-195, -1782], [-402, 1980], [-480, 1174], [215, 1899], [256, -1835], [-68, 1744], [239, 1469]], [[283917, 390859], [-162, -3064]], [[283755, 387795], [-414, 1424], [-230, -464]], [[283312, 392780], [-46, 162]], [[283266, 392942], [46, -162]], [[273214, 389792], [-307, -1570]], [[272907, 388222], [-755, 415], [-159, 1169]], [[238590, 388753], [-1541, 207]], [[237049, 388960], [-152, 26], [-1, 4922]], [[284458, 394060], [-175, 39]], [[284174, 394699], [-62, 329]], [[284323, 395292], [135, -1232]], [[165957, 391614], [-110, -1812], [215, -2118], [-268, -3201]], [[165794, 384483], [-317, 1674], [-351, -1063], [-391, 1451]], [[164735, 386545], [-148, 1347]], [[164587, 387892], [0, 3588]], [[262873, 394359], [-58, -1366], [-578, -417]], [[262237, 392576], [-496, -1309]], [[261741, 391267], [-4, 4143]], [[241700, 392158], [-279, -5796]], [[241421, 386362], [-363, 56]], [[241058, 386418], [-603, 3090], [5, 1623]], [[160323, 392090], [-78, -1064], [334, -1450], [-117, -1634], [135, -802], [-46, -2000], [-216, -906]], [[160335, 384234], [-267, 44], [0, 3907], [-682, 143], [-456, -373]], [[158930, 387955], [-516, 6080], [-297, 453]], [[261741, 391267], [-366, 838]], [[261375, 392105], [-331, -490], [65, -2302]], [[261109, 389313], [-394, 370]], [[260715, 389683], [-4, 1350], [-312, 1081], [-1, 1464]], [[253224, 394175], [-108, -3960], [133, -657]], [[253249, 389558], [-1250, 127]], [[251999, 389685], [8, 4096]], [[256455, 395227], [-410, -1812], [-93, -2130], [103, -2736]], [[256055, 388549], [-614, -233]], [[255441, 388316], [-373, -1489], [-409, -714]], [[254659, 386113], [-35, 904], [308, 955], [-17, 1003]], [[254915, 388975], [434, 3215], [-98, 2078]], [[257614, 391180], [2, -2983]], [[257616, 388197], [-674, -392]], [[256942, 387805], [54, 7426]], [[256942, 387805], [-413, 172]], [[256529, 387977], [-474, 572]], [[274960, 392162], [-143, -1744], [-396, -2215]], [[274421, 388203], [-376, 575], [-266, -940]], [[273779, 387838], [-420, 2994]], [[247909, 392781], [-238, -998], [-192, -2324], [176, -1160]], [[247655, 388299], [-25, -169]], [[247630, 388130], [-212, -2528]], [[247418, 385602], [-176, 2126], [-511, 9], [-410, -651]], [[246321, 387086], [11, 3217]], [[264517, 389238], [-755, -736]], [[263762, 388502], [-151, 4644]], [[264447, 393801], [70, -4563]], [[230673, 392156], [-3, -4046]], [[230670, 388110], [-1299, 14]], [[229371, 388124], [-306, -1], [-2, 1619]], [[226293, 389752], [2, -1623]], [[226295, 388129], [-1550, -16]], [[224745, 388113], [-16, 3259]], [[233047, 392152], [-21, -5676]], [[233026, 386476], [-1232, 4]], [[231794, 386480], [13, 5678]], [[158930, 387955], [-63, -1644], [170, -2032], [-401, 3], [-18, -2538], [-216, -435]], [[158402, 381309], [-24, 5]], [[158378, 381314], [-291, -21]], [[158087, 381293], [-4, 44]], [[158083, 381337], [141, 478], [-107, 2272], [-521, 4539], [-126, 2198]], [[281985, 391353], [-669, -3258], [-157, 216]], [[281159, 388311], [-296, 1764]], [[280863, 390075], [149, 2457]], [[263250, 392868], [-350, -1062]], [[262900, 391806], [-413, -1089]], [[262487, 390717], [-250, 1859]], [[158083, 381337], [-236, -852], [-152, 859]], [[157695, 381344], [-539, 907], [-435, 1971], [-295, -309]], [[156426, 383913], [-354, 2862], [-569, 2151], [-557, 3777]], [[254915, 388975], [-726, 36]], [[254189, 389011], [12, 5213]], [[280017, 389656], [-138, -1763], [572, -1648]], [[280451, 386245], [-493, -2674]], [[279958, 383571], [-240, -1325]], [[279718, 382246], [-1324, 5047]], [[279335, 387008], [0, 0]], [[254189, 389011], [-119, 3]], [[254070, 389014], [-537, -21]], [[253533, 388993], [-284, 565]], [[269861, 389246], [-95, -2475], [-512, -708]], [[269254, 386063], [-253, 186]], [[269001, 386249], [-194, 1564]], [[268807, 387813], [-419, 1211]], [[237049, 388960], [-5, -2241]], [[237044, 386719], [-1524, 569]], [[235520, 387288], [11, 4850]], [[284458, 394060], [-9, -959]], [[280863, 390075], [-319, -2825]], [[280544, 387250], [-93, -1005]], [[260715, 389683], [-623, -25], [-152, -811]], [[259940, 388847], [-105, 263], [-8, 2960]], [[265356, 392695], [-244, -3245]], [[265112, 389450], [-475, -738]], [[264637, 388712], [-120, 526]], [[251999, 389685], [-2, -2446]], [[251997, 387239], [-1241, -18]], [[250756, 387221], [2, 542]], [[250758, 387763], [15, 4343]], [[263762, 388502], [-226, -927]], [[263536, 387575], [-64, -376]], [[263472, 387199], [-541, 2721], [-31, 1886]], [[283312, 392780], [-46, 162]], [[259940, 388847], [-405, -1354], [-3, -1307]], [[259532, 386186], [-107, -9]], [[259425, 386177], [-618, 89]], [[258807, 386266], [-150, 4]], [[258657, 386270], [0, 4937]], [[247867, 390697], [-212, -2398]], [[285904, 391676], [33, -3345], [377, -2749], [-110, -1238], [-607, 2727], [-162, 3701]], [[266078, 390249], [8, -2072]], [[266086, 388177], [-605, -1280], [-198, 664]], [[265283, 387561], [-171, 1889]], [[262487, 390717], [-393, -1208]], [[262094, 389509], [-260, -210]], [[261834, 389299], [-459, 2806]], [[268807, 387813], [-424, -2455]], [[268383, 385358], [-426, 367], [-546, 2055]], [[267411, 387780], [397, 3340], [-19, 786]], [[250758, 387763], [-585, 210], [-360, -847], [-369, 59], [-249, -997]], [[249195, 386188], [-6, 4407]], [[277215, 389401], [-117, -2971], [-334, -2301], [41, -775]], [[276805, 383354], [-350, -1567], [-111, -2181]], [[276344, 379606], [-848, -339], [-274, 1262], [9, 2076]], [[275231, 382605], [22, 2224], [297, 803]], [[242945, 389467], [-266, -2385], [-345, 60], [127, -1459], [-203, -1038]], [[242258, 384645], [-596, 108], [14, 1563], [-255, 46]], [[231794, 386480], [-24, -4900]], [[231770, 381580], [-1109, 51]], [[230661, 381631], [9, 6479]], [[234285, 392148], [-26, -6490]], [[234259, 385658], [-1233, 6]], [[233026, 385664], [0, 812]], [[235520, 387288], [0, -1653]], [[235520, 385635], [-1261, 23]], [[275231, 382605], [-213, 771]], [[275018, 383376], [-482, 1700], [-115, 3127]], [[161934, 387867], [6, -3923]], [[161940, 383944], [-1041, -1302], [-209, 591], [-282, -2812]], [[160408, 380421], [-311, -432], [76, 1800]], [[160173, 381789], [162, 2445]], [[261834, 389299], [-406, -1731]], [[261428, 387568], [-332, 584]], [[261096, 388152], [13, 1161]], [[263472, 387199], [-446, -2245]], [[263026, 384954], [-363, 80]], [[262663, 385034], [-258, 1506], [-110, 2136], [-201, 833]], [[267411, 387780], [-197, -1448], [23, -1522], [-313, -464]], [[266924, 384346], [-311, 1158]], [[266613, 385504], [-354, 897], [-173, 1776]], [[244558, 391417], [4, -9114]], [[244562, 382303], [-467, 23], [2, -1088]], [[244097, 381238], [-267, 18]], [[243830, 381256], [-41, 2513]], [[243789, 383769], [13, 7731]], [[169169, 376466], [1658, -8029]], [[170827, 368437], [-2624, -35]], [[168203, 368402], [-689, 2284]], [[167514, 370686], [-267, 2691], [-422, 166]], [[166825, 373543], [188, 2774], [-291, 1077], [-121, 2597], [-313, 215], [-474, 1907], [-20, 2370]], [[246321, 387086], [-122, -4888]], [[246199, 382198], [-880, -1]], [[245319, 382197], [-757, 106]], [[243789, 383769], [-1534, 68]], [[242255, 383837], [3, 808]], [[164587, 387892], [-719, -833], [-260, 131], [-515, -1390], [-61, -1061], [-1010, -2142]], [[162022, 382597], [-82, 1347]], [[286908, 384389], [-189, 473], [-264, 2364], [218, 1227], [-54, 1255], [301, 245], [335, -1095], [296, 2144]], [[288209, 388837], [-340, -1484], [-14, -1069]], [[287855, 386284], [-365, -3226], [-582, 1331]], [[218595, 391430], [0, -8114]], [[218595, 383316], [-1157, 7]], [[217438, 383323], [-63, -1]], [[217375, 383322], [-7, 8119]], [[219823, 391395], [8, -8115]], [[219831, 383280], [-1236, 36]], [[216145, 391424], [-2, -8128]], [[216143, 383296], [-1329, -14]], [[214814, 383282], [1, 119]], [[214815, 383401], [-1, 6449]], [[217375, 383322], [-1161, -24]], [[216214, 383298], [-71, -2]], [[282823, 386026], [45, -781]], [[282868, 385245], [-236, -134]], [[282632, 385111], [-191, 602], [-899, -1518]], [[281542, 384195], [7, 1474], [-390, 2642]], [[221667, 391366], [1, -6464]], [[221668, 384902], [2, -1624]], [[221670, 383278], [-1791, 1]], [[219879, 383279], [-48, 1]], [[241058, 386418], [-180, -1533], [-17, -2355]], [[240861, 382530], [-192, -604], [-545, 141], [-327, 1182]], [[239797, 383249], [30, 5018]], [[224745, 388113], [2, -4860]], [[224747, 383253], [-1206, 6]], [[223541, 383259], [-334, 2], [0, 1622]], [[223207, 384883], [-1, 6486]], [[206744, 388071], [3, -4865], [-303, -6]], [[206444, 383200], [-2083, 132]], [[204361, 383332], [-596, 3378]], [[223207, 384883], [-1539, 19]], [[285428, 388495], [2, -844]], [[285430, 387651], [-211, 221], [-263, -2217]], [[284956, 385655], [81, -2290], [-234, 435], [-329, 2868], [-459, -1568], [-187, 2279], [549, 3866]], [[258657, 386270], [-1, -536], [-1038, 13]], [[257618, 385747], [-2, 2450]], [[270898, 384460], [-214, -1051], [-154, 1960]], [[270530, 385369], [-22, 1865]], [[271507, 390062], [-150, -656], [68, -2319], [-484, -1260], [-43, -1367]], [[181367, 389063], [0, -7899]], [[181367, 381164], [-7, -10123]], [[181360, 371041], [5, -11252]], [[181365, 359789], [1, -2928]], [[181366, 356861], [-1984, 13], [0, 179], [-2726, -7], [-436, -205]], [[199240, 384017], [-2, 564], [-1384, -10], [128, -1422], [415, -674], [-79, -1242]], [[198318, 381233], [-2999, 13]], [[195319, 381246], [-49, 6460]], [[273779, 387838], [177, -532], [-261, -1184], [-892, -2813]], [[272803, 383309], [-146, 3877], [250, 1036]], [[249195, 386188], [4, -3707]], [[249199, 382481], [-545, 27]], [[248654, 382508], [-40, 1620], [-343, 20], [-641, 3982]], [[281542, 384195], [-437, -1435], [-99, 693]], [[281006, 383453], [-396, 1781], [-66, 2016]], [[272803, 383309], [-1, -6]], [[272802, 383303], [-272, -1509], [-143, -3969]], [[272387, 377825], [-212, 338]], [[272175, 378163], [-165, 2328], [-356, 2012], [-528, -202]], [[271126, 382301], [46, 1977], [-274, 182]], [[214815, 383401], [-1945, -34]], [[212870, 383367], [-1831, -27]], [[211039, 383340], [-284, -8]], [[210755, 383332], [-8, 4680]], [[227833, 389742], [0, -8111]], [[227833, 381631], [-920, 3]], [[226913, 381634], [-612, -2]], [[226301, 381632], [-6, 6497]], [[229371, 388124], [-58, -8132]], [[229313, 379992], [-869, 38]], [[228444, 380030], [-1, 1619], [-610, -18]], [[265283, 387561], [-139, -987]], [[265144, 386574], [-341, 378]], [[264803, 386952], [-166, 1760]], [[253533, 388993], [-9, -5827]], [[253524, 383166], [-612, -14]], [[252912, 383152], [-924, 24]], [[251988, 383176], [9, 4063]], [[261096, 388152], [-572, -2670]], [[260524, 385482], [-286, -2089], [-141, 377]], [[260097, 383770], [-46, 2157], [-519, 259]], [[270530, 385369], [-363, -644], [-243, -2058]], [[269924, 382667], [-670, 3396]], [[262663, 385034], [-353, -388]], [[262310, 384646], [-796, 416]], [[261514, 385062], [-86, 2506]], [[278140, 386070], [-341, -3642], [-207, -671]], [[277592, 381757], [-787, 1597]], [[283755, 387795], [-68, -3120]], [[283687, 384675], [-6, -1713]], [[283681, 382962], [-121, 26]], [[283560, 382988], [-214, 707]], [[283346, 383695], [-232, 459]], [[283114, 384154], [-246, 1091]], [[264803, 386952], [-255, -1635]], [[264548, 385317], [-418, -1608], [-274, -41]], [[263856, 383668], [-44, 1681], [-276, 2226]], [[185634, 387890], [508, -3311], [-58, -2001], [-242, -1389]], [[185842, 381189], [-97, -49]], [[185745, 381140], [-4378, 24]], [[254070, 389014], [36, -2007], [-137, -3775]], [[253969, 383232], [-445, -66]], [[254659, 386113], [-464, -2725], [-218, -212]], [[253977, 383176], [-8, 56]], [[238586, 387938], [-30, -5629]], [[238556, 382309], [-1468, 73]], [[237088, 382382], [-70, 9], [26, 4328]], [[289213, 386812], [95, -1817], [-160, -1191], [-692, -216]], [[288456, 383588], [-506, -230]], [[287950, 383358], [-283, -697], [-32, 1164], [220, 2459]], [[275018, 383376], [-768, -3503], [-473, 452]], [[273777, 380325], [-279, 2236], [-256, -553], [-440, 1295]], [[256529, 387977], [-2, -5250]], [[256527, 382727], [-679, 252]], [[255848, 382979], [3, 2497], [-256, -92], [-154, 2932]], [[158378, 381314], [145, -1463], [-436, 1442]], [[160173, 381789], [-408, -2224], [-354, -188], [-351, 1519], [-215, -1697], [-284, 501], [-159, 1609]], [[239797, 383249], [34, -3689]], [[239831, 379560], [-1221, 173]], [[238610, 379733], [-54, 2576]], [[255848, 382979], [-1, -825], [-418, -676]], [[255429, 381478], [-616, 57]], [[254813, 381535], [-309, 1119], [-517, 33]], [[253987, 382687], [-10, 489]], [[257618, 385747], [6, -2452]], [[257624, 383295], [-312, -1078]], [[257312, 382217], [-630, -29]], [[256682, 382188], [-155, 539]], [[266613, 385504], [-146, -2036], [-362, -1580]], [[266105, 381888], [-246, 1826], [-347, 209]], [[265512, 383923], [-368, 2651]], [[261514, 385062], [-514, -1352]], [[261000, 383710], [-476, 1772]], [[230661, 381631], [-3, -1635], [-459, 10]], [[230199, 380006], [-886, -14]], [[209217, 388122], [-12, -6997]], [[209205, 381125], [-8, -7666]], [[209197, 373459], [-808, 1540]], [[208389, 374999], [-823, 1547], [-1023, -358], [-101, 636]], [[206442, 376824], [2, 6376]], [[210755, 383332], [-22, -1723], [-306, -19], [0, -1082], [-595, -9], [-627, 626]], [[226301, 381632], [-1535, -19]], [[224766, 381613], [-19, 1640]], [[248654, 382508], [-383, 34], [0, -1619], [-476, -883]], [[247795, 380040], [-127, 736]], [[247668, 380776], [-303, 1893], [53, 2933]], [[250756, 387221], [-8, -4861]], [[250748, 382360], [-1241, 120]], [[249507, 382480], [-308, 1]], [[286032, 384373], [445, -3369], [-10, -1655], [-344, 2010], [-710, 2346], [-112, -1069], [-345, 3019]], [[285430, 387651], [602, -3278]], [[164735, 386545], [-435, -1184], [-950, -7857], [-381, -2238]], [[162969, 375266], [-759, 4580]], [[162210, 379846], [-188, 2751]], [[187728, 387743], [-228, -1435], [16, -5094]], [[187516, 381214], [-1674, -25]], [[192580, 387706], [28, -2493], [350, -3273], [-106, -715]], [[192852, 381225], [-4142, -33], [-1194, 22]], [[247668, 380776], [-455, -1591]], [[247213, 379185], [-466, -722], [-158, 1359]], [[246589, 379822], [-390, 2376]], [[268978, 383007], [-530, -69]], [[268448, 382938], [-65, 2420]], [[269001, 386249], [-23, -3242]], [[268448, 382938], [-363, -1281]], [[268085, 381657], [-378, 306], [-289, 1389], [-223, -1373]], [[267195, 381979], [-271, 2367]], [[195319, 381246], [2, -5060]], [[195321, 376186], [-5, -7382]], [[195316, 368804], [-5, -9040]], [[195311, 359764], [-2663, -21]], [[192648, 359743], [-2089, 98]], [[190559, 359841], [-1844, -33]], [[188715, 359808], [653, 1884], [604, 385], [346, 3276], [287, 901], [-33, 1955], [278, 1645]], [[190850, 369854], [446, 2473], [227, 3836], [527, 218], [571, 4057], [231, 787]], [[263856, 383668], [113, -1403]], [[263969, 382265], [-621, -1696]], [[263348, 380569], [-281, 1464]], [[263067, 382033], [-41, 2921]], [[281006, 383453], [-231, -1615]], [[280775, 381838], [-817, 1733]], [[279718, 382246], [-89, -2345], [-162, -619]], [[279467, 379282], [-168, -1839], [-296, -1250], [-422, 176]], [[278581, 376369], [-906, 3632]], [[277675, 380001], [127, 1436], [-210, 320]], [[278910, 381984], [0, 0]], [[279286, 380244], [0, 0]], [[251988, 383176], [-7, -2447]], [[251981, 380729], [-1184, -9]], [[250797, 380720], [-49, 1640]], [[237088, 382382], [-23, -3302]], [[237065, 379080], [-1548, 436]], [[235517, 379516], [3, 6119]], [[172686, 359242], [-1859, 9195]], [[265512, 383923], [-362, -1946]], [[265150, 381977], [-326, 1245], [-276, 2095]], [[204361, 383332], [336, -2213], [254, -3271], [311, -1387]], [[205262, 376461], [44, -2691]], [[205306, 373770], [-1619, -57]], [[203687, 373713], [-1526, -10], [-2, 1613], [-297, 15]], [[201862, 375331], [0, 677], [-568, 1791], [-287, -219]], [[201007, 377580], [-1, 3555]], [[289490, 378911], [-53, -33]], [[289437, 378878], [53, 33]], [[290026, 386799], [-57, 0]], [[289865, 385833], [-126, -2837], [-305, -808], [-323, -3508]], [[289111, 378680], [-677, -383]], [[288434, 378297], [-6, 31]], [[288428, 378328], [-108, 835], [337, 901], [-201, 3524]], [[289925, 386799], [-60, -966]], [[166825, 373543], [-110, 722]], [[166715, 374265], [-628, 2326], [-333, -1722], [-421, -936], [-390, 89], [-379, 1183], [-853, -3609]], [[163711, 371596], [-742, 3670]], [[233026, 385664], [-30, -6554]], [[232996, 379110], [-1226, 36]], [[231770, 379146], [0, 2434]], [[242255, 383837], [29, -5135]], [[242284, 378702], [-616, 90]], [[241668, 378792], [-305, 21], [-346, 3550], [-156, 167]], [[258807, 386266], [-62, -3639], [-147, -849]], [[258598, 381778], [-366, -1124]], [[258232, 380654], [2, 1593], [-308, 13], [2, 1096], [-304, -61]], [[259425, 386177], [1, -1624], [368, -2835]], [[259794, 381718], [-135, -3194]], [[259659, 378524], [-139, -131]], [[259520, 378393], [-502, 215], [-245, 852], [-175, 2318]], [[269924, 382667], [-59, -1572], [261, -1816], [-318, -1928]], [[269808, 377351], [-304, -1660]], [[269504, 375691], [-230, 1692]], [[269274, 377383], [-144, 2308], [-237, 1272], [85, 2044]], [[260097, 383770], [-303, -2052]], [[284512, 383384], [-92, -1944]], [[284420, 381440], [-8, -28]], [[284412, 381412], [-144, -223]], [[284268, 381189], [-437, 1843], [-150, -70]], [[283687, 384675], [250, -96], [535, 1274], [40, -2469]], [[267195, 381979], [-57, -1464]], [[267138, 380515], [-472, -1482]], [[266666, 379033], [-181, 318]], [[266485, 379351], [-380, 2537]], [[282632, 385111], [-701, -4528]], [[281931, 380583], [-408, 649], [-297, -355]], [[281226, 380877], [-451, 961]], [[234259, 385658], [-34, -6559]], [[234225, 379099], [-1229, 11]], [[235517, 379516], [0, -429]], [[235517, 379087], [-1292, 12]], [[261000, 383710], [174, -405], [-53, -2163]], [[261121, 381142], [-14, -544]], [[261107, 380598], [-354, -821], [-436, 243], [-628, -1649]], [[259689, 378371], [-30, 153]], [[283114, 384154], [232, -459]], [[283560, 382988], [-758, -4755]], [[282802, 378233], [-126, 314]], [[282676, 378547], [-383, 1648], [-362, 388]], [[271126, 382301], [-263, -1063], [-13, -2367]], [[270850, 378871], [-720, -941]], [[270130, 377930], [-322, -579]], [[263067, 382033], [-389, -1466]], [[262678, 380567], [-442, 233]], [[262236, 380800], [74, 3846]], [[265150, 381977], [-286, -1440]], [[264864, 380537], [-573, -892]], [[264291, 379645], [-263, 849], [-59, 1771]], [[262236, 380800], [-219, -1714]], [[262017, 379086], [-896, 2056]], [[223541, 383259], [-1, -4854], [-304, -3]], [[223236, 378402], [-914, 10], [-2, 1608], [-609, 4]], [[221711, 380024], [-41, 3254]], [[199425, 381137], [158, -1617], [-159, -1773]], [[199424, 377747], [-472, -1109]], [[198952, 376638], [-30, 887], [-420, 1383], [23, 1649], [-207, 676]], [[157695, 381344], [162, -971], [-42, -3300], [180, -855], [-251, -1183], [-370, 1729], [-114, -334], [-478, 2413], [-375, -283], [165, 2871], [317, -1456], [-463, 3938]], [[266485, 379351], [-223, -718], [-503, -258]], [[265759, 378375], [-341, 2566], [-268, 1036]], [[162210, 379846], [3, -6324], [-189, 423], [-597, -1236], [-738, -3960]], [[160689, 368749], [-239, 1114], [0, 5132]], [[160450, 374995], [-70, 4169]], [[160380, 379164], [28, 1257]], [[243830, 381256], [-6, -1909], [-732, 4], [-351, -755]], [[242741, 378596], [-457, 106]], [[287272, 377541], [-21, -6]], [[287251, 377535], [21, 6]], [[287356, 378030], [36, -498]], [[287392, 377532], [-31, 2]], [[287361, 377534], [-41, 379]], [[287320, 377913], [36, 117]], [[287320, 377913], [-5, -375]], [[287315, 377538], [-19, -1]], [[287296, 377537], [24, 376]], [[287781, 379692], [-1, 1870], [-264, -795], [434, 2591]], [[288428, 378328], [-760, -1369], [113, 2733]], [[281226, 380877], [-275, -2360]], [[280951, 378517], [-515, -3905]], [[280436, 374612], [-425, -1182]], [[280011, 373430], [-544, 5852]], [[280484, 379686], [0, 0]], [[285766, 378696], [-155, -920]], [[285611, 377776], [-363, 656], [-314, 2281], [-163, -800]], [[284771, 379913], [-351, 1527]], [[284512, 383384], [528, -1941], [635, -277], [253, -1943], [-162, -527]], [[241668, 378792], [-8, -3016]], [[241660, 375776], [-363, -1064], [-225, 1684], [-655, 61]], [[240417, 376457], [-605, 127]], [[239812, 376584], [19, 2976]], [[269274, 377383], [-231, 160], [-89, -1393]], [[268954, 376150], [-910, 2229], [-138, -652]], [[267906, 377727], [-93, 802]], [[267813, 378529], [371, 1948], [-99, 1180]], [[277675, 380001], [-469, -3995]], [[277206, 376006], [-657, 396], [-135, 1145], [-337, -44]], [[276077, 377503], [267, 2103]], [[214814, 383282], [7, -9752]], [[214821, 373530], [2, -1754]], [[214823, 371776], [-1967, -12]], [[212856, 371764], [14, 11603]], [[276077, 377503], [-296, -1430], [-373, -3414]], [[275408, 372659], [-430, -144], [-592, 889]], [[274386, 373404], [-399, 2556]], [[273987, 375960], [102, 2168], [-312, 2197]], [[267813, 378529], [-479, 66], [-196, 1920]], [[206442, 376824], [-331, 1927], [-323, -2224], [-84, 710], [-442, -776]], [[212856, 371764], [-914, -4]], [[211942, 371760], [-915, 4]], [[211027, 371764], [12, 11576]], [[211027, 371764], [-1822, 7], [-8, 1688]], [[258232, 380654], [-83, -1403]], [[258149, 379251], [-55, -2224], [-404, -1554]], [[257690, 375473], [31, 1003], [-293, 275], [-178, 1615]], [[257250, 378366], [113, -4], [-51, 3855]], [[273987, 375960], [-386, -927]], [[273601, 375033], [-357, 1056], [-619, 250], [-238, 1486]], [[217438, 383323], [-2, -8108], [40, -1726]], [[217476, 373489], [-1219, 0]], [[216257, 373489], [-44, 1698], [1, 8111]], [[219879, 383279], [0, -4862]], [[219879, 378417], [-1218, 27], [32, -4956]], [[218693, 373488], [-1217, 1]], [[216257, 373489], [-1436, 41]], [[253987, 382687], [206, -1257], [-505, -5062]], [[253688, 376368], [-787, 325]], [[252901, 376693], [11, 6459]], [[224766, 381613], [1, -6483]], [[224767, 375130], [-1507, 15]], [[223260, 375145], [-24, 3257]], [[221711, 380024], [-1, -3245]], [[221710, 376779], [-1831, 18]], [[219879, 376797], [0, 1620]], [[252901, 376693], [0, -15]], [[252901, 376678], [-925, -16]], [[251976, 376662], [5, 4067]], [[284268, 381189], [-150, -1310], [278, -2137]], [[284396, 377742], [-309, -256], [-1, -1106]], [[284086, 376380], [-456, -1903]], [[283630, 374477], [-165, -177], [-222, 1929], [-441, 2004]], [[256682, 382188], [-153, -1592], [-545, -3576], [-1, -876]], [[255983, 376144], [-94, 369]], [[255889, 376513], [-415, 787]], [[255474, 377300], [-45, 4178]], [[254813, 381535], [-36, -5041]], [[254777, 376494], [-629, 72]], [[254148, 376566], [55, -1760], [-337, -146]], [[253866, 374660], [-178, 1708]], [[272175, 378163], [-318, -1098], [158, -2552]], [[272015, 374513], [-260, -47]], [[271755, 374466], [-295, 397], [-169, 2097], [-573, 1280], [132, 631]], [[249507, 382480], [-6, -4914]], [[249501, 377566], [-221, -2833]], [[249280, 374733], [-473, 1904], [-262, -566]], [[248545, 376071], [-165, 1642], [-585, 2327]], [[238610, 379733], [-22, -2901], [-171, -1635]], [[238417, 375197], [-154, 26]], [[238263, 375223], [-509, 95], [7, 1074], [-717, 163]], [[237044, 376555], [21, 2525]], [[250797, 380720], [-133, -3247]], [[250664, 377473], [-1163, 93]], [[245319, 382197], [-11, -8639]], [[245308, 373558], [-149, -796]], [[245159, 372762], [-438, 52], [5, 1621], [-613, 35]], [[244113, 374470], [-16, 6768]], [[264291, 379645], [-143, -3261]], [[264148, 376384], [-273, -833]], [[263875, 375551], [-122, 1731], [-504, 1186]], [[263249, 378468], [99, 2101]], [[246589, 379822], [-14, -6361]], [[246575, 373461], [-1267, 97]], [[257250, 378366], [-461, -1267]], [[256789, 377099], [-280, -2533], [-526, 1578]], [[259520, 378393], [-23, -3366], [-403, -372]], [[259094, 374655], [-945, 4596]], [[263249, 378468], [-138, -2640]], [[263111, 375828], [-141, -279], [-100, 2292]], [[262870, 377841], [-192, 2726]], [[265759, 378375], [-26, -1496]], [[265733, 376879], [-550, 230]], [[265183, 377109], [-319, 3428]], [[228444, 380030], [1, -3258]], [[228445, 376772], [-1532, -4]], [[226913, 376768], [0, 4866]], [[231770, 379146], [-5, -5694]], [[231765, 373452], [0, -2431]], [[231765, 371021], [-1573, 60]], [[230192, 371081], [7, 8925]], [[226913, 376768], [10, -3302], [-304, -23]], [[226619, 373443], [-1830, -23]], [[224789, 373420], [-22, 1710]], [[255474, 377300], [-169, -642], [-244, 1256], [-44, -2643], [-240, 1223]], [[244113, 374470], [-771, 42], [-10, -3582]], [[243332, 370930], [-613, 68]], [[242719, 370998], [22, 7598]], [[190850, 369854], [-4778, -86], [-898, 126]], [[185174, 369894], [-16, 4889], [309, -24], [-29, 1599], [336, 1], [-29, 4781]], [[285474, 374122], [-189, -777]], [[285285, 373345], [-143, 1233], [-392, -213], [-211, 1145], [-143, 2232]], [[284412, 381412], [24, -1012], [357, -713], [24, -1757], [347, -1481], [310, -2327]], [[198952, 376638], [-341, -2419]], [[198611, 374219], [-360, 1511], [-614, -664], [-130, 1368], [-1561, 19], [-625, -267]], [[282676, 378547], [-305, -5181]], [[282371, 373366], [-288, 724], [-132, 1442], [-320, 1092]], [[281631, 376624], [-680, 1893]], [[185174, 369894], [-606, 4], [0, -813]], [[184568, 369085], [-379, -469], [-603, 142], [1, 869], [-616, 2], [-2, 1663], [-315, -252], [-1294, 1]], [[262017, 379086], [-183, -1209]], [[261834, 377877], [-645, -597], [-256, 976]], [[260933, 378256], [174, 2342]], [[201007, 377580], [-383, -320], [-20, -4903], [46, -4702]], [[200650, 367655], [-984, -5]], [[199666, 367650], [-1, 4037]], [[199665, 371687], [0, 2392], [-241, 3668]], [[262870, 377841], [-381, -296], [-271, -1166]], [[262218, 376379], [-342, 112]], [[261876, 376491], [-42, 1386]], [[251976, 376662], [-1, -808]], [[251975, 375854], [-1238, -26]], [[250737, 375828], [-73, 1645]], [[285611, 377776], [352, -2379]], [[285963, 375397], [-300, -592]], [[285663, 374805], [-240, 292], [-546, 3122], [-106, 1694]], [[248545, 376071], [-481, -3792]], [[248064, 372279], [-249, -32], [-722, 3897], [380, 1913], [-260, 1128]], [[260933, 378256], [-419, -2942], [-266, -430]], [[260248, 374884], [-559, 3487]], [[267906, 377727], [-44, -1950]], [[267862, 375777], [-303, 91], [-437, -1813], [23, -1008]], [[267145, 373047], [-650, 2775]], [[266495, 375822], [171, 3211]], [[265183, 377109], [-100, -1734]], [[265083, 375375], [-218, 284]], [[264865, 375659], [-717, 725]], [[160450, 374995], [-1124, -1843], [-235, 1488], [-259, 115], [-483, 1734]], [[158349, 376489], [-209, 1239], [349, 1655], [315, -572], [373, 669], [783, -708], [357, 1506], [63, -1114]], [[230192, 371081], [-1, -2432]], [[230191, 368649], [-1748, -15]], [[228443, 368634], [2, 8138]], [[223260, 375145], [0, -1718]], [[223260, 373427], [-1521, 35]], [[221739, 373462], [-29, 3317]], [[278540, 374733], [-257, -157], [-226, -2495], [-255, -814]], [[277802, 371267], [-172, -1565]], [[277630, 369702], [-515, 2396], [26, 1889]], [[277141, 373987], [65, 2019]], [[278581, 376369], [-41, -1636]], [[277790, 374553], [0, 0]], [[278042, 373830], [0, 0]], [[248064, 372279], [-101, -554]], [[247963, 371725], [-1081, 39]], [[246882, 371764], [-315, -16], [8, 1713]], [[163711, 371596], [-1656, -4356], [43, -1065], [-726, -3846]], [[161372, 362329], [-155, 872], [-328, -611], [-162, 2473], [145, 499], [-185, 3195]], [[160687, 368757], [2, -8]], [[239812, 376584], [-308, 31], [-13, -1890]], [[239491, 374725], [-1074, 472]], [[237044, 376555], [-21, -4864]], [[237023, 371691], [-1517, 258]], [[235506, 371949], [0, 363]], [[235506, 372312], [11, 6775]], [[266495, 375822], [-378, -674]], [[266117, 375148], [-384, 1731]], [[280011, 373430], [-196, -1764], [-242, 62], [-67, -1661]], [[279506, 370067], [-122, -195]], [[279384, 369872], [-552, 4226], [-292, 635]], [[259094, 374655], [-345, -3823]], [[258749, 370832], [-373, -504], [-265, 1039], [-246, -1075]], [[257865, 370292], [-128, 1808]], [[257737, 372100], [-47, 3373]], [[232996, 379110], [-19, -5688]], [[232977, 373422], [-1212, 30]], [[234225, 379099], [-28, -5680]], [[234197, 373419], [-1220, 3]], [[235506, 372312], [-1309, 27]], [[234197, 372339], [0, 1080]], [[287392, 377532], [-31, 2]], [[287315, 377538], [-19, -1]], [[287272, 377541], [-21, -6]], [[288876, 376511], [119, -271], [-517, -3407], [-55, -2435], [-470, -1282]], [[287953, 369116], [-126, 1005]], [[287827, 370121], [-283, 133], [408, 3844]], [[287952, 374098], [291, 1243], [191, 2956]], [[289111, 378680], [-235, -2169]], [[289490, 378911], [-53, -33]], [[271755, 374466], [-438, -678], [176, -948], [-282, -760]], [[271211, 372080], [-347, 405], [-184, -776], [-249, 1134], [-83, 2840], [-218, 2247]], [[286401, 372837], [-192, 2274], [-246, 286]], [[285766, 378696], [289, -8], [647, -2450], [-301, -3401]], [[242719, 370998], [-614, 38]], [[242105, 371036], [2, 817], [-459, 1220], [12, 2703]], [[208389, 374999], [-290, -1426], [-260, -3093], [-562, -3167], [-508, -171], [-617, -1904]], [[206152, 365238], [46, 2010], [-135, 4023], [-310, 766], [-525, -1497]], [[205228, 370540], [78, 3230]], [[283630, 374477], [147, -1396], [514, -1037], [-44, -593]], [[284247, 371451], [-292, -1687]], [[283955, 369764], [-489, 1286], [-105, 1394], [-525, 504]], [[282836, 372948], [-465, 418]], [[281362, 373717], [-225, -1081]], [[281137, 372636], [-621, 1278], [-80, 698]], [[281631, 376624], [-269, -2907]], [[260248, 374884], [159, -1473]], [[260407, 373411], [-544, -3500], [-48, -1933]], [[259815, 367978], [-430, 176]], [[259385, 368154], [-185, 2176], [-451, 502]], [[263875, 375551], [-250, -1449]], [[263625, 374102], [-126, -754], [-407, 1614]], [[263092, 374962], [19, 866]], [[268954, 376150], [-162, -516], [84, -2448]], [[268876, 373186], [-340, 667], [-495, -734]], [[268041, 373119], [-179, 2658]], [[219879, 376797], [30, -8169]], [[219909, 368628], [-1216, -7]], [[218693, 368621], [0, 4867]], [[257737, 372100], [-515, 1415]], [[257222, 373515], [-85, 1916], [-348, 1668]], [[273601, 375033], [187, -2461], [-193, 531], [-410, -2364]], [[273185, 370739], [-292, -249], [-64, -1204]], [[272829, 369286], [-281, 1662], [-394, 3474], [-139, 91]], [[261876, 376491], [-287, -707], [-405, -2399]], [[261184, 373385], [-333, -3287]], [[260851, 370098], [-285, -40], [141, 1605], [-300, 1748]], [[271211, 372080], [-148, -2078]], [[271063, 370002], [-199, -676]], [[270864, 369326], [-114, 472]], [[270750, 369798], [-437, 240], [-582, 3546]], [[269731, 373584], [-227, 2107]], [[255889, 376513], [81, -2236], [-378, -1770]], [[255592, 372507], [-241, -672]], [[255351, 371835], [-666, -172]], [[254685, 371663], [-57, 1803], [-480, 3100]], [[285285, 373345], [270, -2335]], [[285555, 371010], [-138, -2862]], [[285417, 368148], [-256, 2601]], [[285161, 370749], [-819, 3092], [-256, 2539]], [[199665, 371687], [-1364, 1]], [[198301, 371688], [8, 1041], [302, 1490]], [[263092, 374962], [-79, -1906]], [[263013, 373056], [-780, -638]], [[262233, 372418], [68, 3271], [-83, 690]], [[201862, 375331], [-47, -8024]], [[201815, 367307], [-1165, -221], [0, 569]], [[269731, 373584], [-340, -1357], [-300, 302]], [[269091, 372529], [-215, 657]], [[277141, 373987], [-397, 706], [-568, -2859]], [[276176, 371834], [-345, -947], [-213, 581]], [[275618, 371468], [-210, 1191]], [[276253, 374852], [0, 0]], [[250737, 375828], [-7, -4868]], [[250730, 370960], [-827, -8], [-198, -520]], [[249705, 370432], [27, 2111], [-434, 1361], [-18, 829]], [[266117, 375148], [-215, -2029]], [[265902, 373119], [-39, -3]], [[265863, 373116], [-510, 789], [-270, 1470]], [[257222, 373515], [17, -1184], [-616, -2106]], [[256623, 370225], [-1031, 2282]], [[264865, 375659], [-28, -5333]], [[264837, 370326], [-303, -811]], [[264534, 369515], [-414, 300]], [[264120, 369815], [-495, 4287]], [[253866, 374660], [-365, -2527], [72, -1661]], [[253573, 370472], [-674, 471]], [[252899, 370943], [2, 5735]], [[262233, 372418], [-14, -886]], [[262219, 371532], [-865, 378], [-170, 1475]], [[221739, 373462], [9, -4974]], [[221748, 368488], [-1535, 133]], [[220213, 368621], [-304, 7]], [[228443, 368634], [-1823, -25]], [[226620, 368609], [-1, 4834]], [[252899, 370943], [-103, 7]], [[252796, 370950], [-826, -12]], [[251970, 370938], [5, 4916]], [[285161, 370749], [-468, -116]], [[284693, 370633], [-446, 818]], [[240417, 376457], [5, -7664]], [[240422, 368793], [-608, 45], [-4, -1332]], [[239810, 367506], [-304, 42]], [[239506, 367548], [-15, 7177]], [[160687, 368757], [-1095, 46], [-337, -405]], [[159255, 368398], [-342, 754], [-149, 3107], [-463, 2405], [48, 1825]], [[282836, 372948], [-67, -2693]], [[282769, 370255], [-815, 2166], [-30, -1006], [-320, 603]], [[281604, 372018], [-242, 1699]], [[249705, 370432], [0, -110]], [[249705, 370322], [-946, 616]], [[248759, 370938], [-796, -36]], [[247963, 370902], [0, 823]], [[238263, 375223], [34, -4780]], [[238297, 370443], [-1279, 164]], [[237018, 370607], [5, 1084]], [[166715, 374265], [-766, -4052], [-187, -2677], [-313, 4], [-791, -4319]], [[164658, 363221], [-269, 1013], [-380, 3366], [-298, 3996]], [[254685, 371663], [-553, -2946]], [[254132, 368717], [-235, 1246], [-123, -776]], [[253774, 369187], [-201, 1285]], [[242105, 371036], [-9, -2450]], [[242096, 368586], [-1209, 159]], [[240887, 368745], [-465, 48]], [[198301, 371688], [-2633, -144], [-352, -2740]], [[268041, 373119], [135, -3677], [-93, -603]], [[268083, 368839], [-64, 309]], [[268019, 369148], [-398, 2375], [-439, 725]], [[267182, 372248], [-37, 799]], [[273842, 367755], [-4, 20]], [[273838, 367775], [-653, 2964]], [[274386, 373404], [-544, -5649]], [[251970, 370938], [-927, -51]], [[251043, 370887], [-313, 73]], [[267182, 372248], [-389, 563], [-373, -1145]], [[266420, 371666], [-518, 1453]], [[265863, 373116], [-284, -991], [-227, -2237]], [[265352, 369888], [-515, 438]], [[286401, 371346], [-510, 730], [-228, 2729]], [[286401, 372837], [0, -1491]], [[203687, 373713], [-2, -6471]], [[203685, 367242], [-1780, 53]], [[201905, 367295], [-90, 12]], [[158120, 372966], [-303, -2]], [[157817, 372964], [-33, 1342], [287, 553], [49, -1893]], [[239506, 367548], [-1222, 189]], [[238284, 367737], [13, 2706]], [[264120, 369815], [-276, -991]], [[263844, 368824], [-589, 2769]], [[263255, 371593], [-242, 1463]], [[224789, 373420], [0, -4870]], [[224789, 368550], [-1528, -11]], [[223261, 368539], [-1, 4888]], [[279384, 369872], [-416, -2087]], [[278968, 367785], [-186, -655]], [[278782, 367130], [-282, 1313]], [[278500, 368443], [-442, 1075], [-256, 1749]], [[211942, 371760], [-29, -11974]], [[211913, 359786], [-2568, -76]], [[209345, 359710], [-3196, -17]], [[206149, 359693], [3, 5545]], [[277630, 369702], [-234, -1503], [-213, 615], [-430, -1508], [-95, -1769]], [[276658, 365537], [-630, 2108]], [[276028, 367645], [291, 2275], [-143, 1914]], [[245159, 372762], [-6, -2032]], [[245153, 370730], [-438, 88], [-4, -1634], [287, -71], [-2, -1601]], [[244996, 367512], [-1211, 139]], [[243785, 367651], [-302, 26], [0, 3251], [-151, 2]], [[272829, 369286], [-248, -1600]], [[272581, 367686], [-815, 1322], [-628, 339], [-75, 655]], [[281137, 372636], [-25, -1023], [-602, -5508]], [[280510, 366105], [-361, 1085]], [[280149, 367190], [-643, 2877]], [[167514, 370686], [-807, -4323], [-51, -2728], [-160, -1065], [-478, -109], [48, -890], [-436, -1627], [-318, -2892], [-1552, -1283], [-242, 1461], [-239, 3370]], [[163279, 360600], [183, 975], [522, 1047], [674, 599]], [[285850, 370354], [-295, 656]], [[285474, 374122], [422, -2950], [651, -1010], [-346, -835], [-351, 1027]], [[269091, 372529], [-167, -3366], [109, -687], [-352, -3383]], [[268681, 365093], [-160, 2647], [-438, 1099]], [[205228, 370540], [-718, -4117]], [[204510, 366423], [-823, 2], [-2, 817]], [[281604, 372018], [-166, -3772]], [[281438, 368246], [-287, -1612]], [[281151, 366634], [-415, -1159], [-226, 630]], [[270750, 369798], [-954, -4451]], [[269796, 365347], [-678, -1793]], [[269118, 363554], [-32, -123]], [[269086, 363431], [-466, 1404]], [[268620, 364835], [61, 258]], [[246882, 371764], [-41, -6070]], [[246841, 365694], [-3, -838], [-515, -29]], [[246323, 364827], [-104, 1910], [11, 4270], [-1077, -277]], [[216257, 373489], [3, -6477]], [[216260, 367012], [-85, 2]], [[216175, 367014], [-1352, 13]], [[214823, 367027], [0, 4749]], [[257865, 370292], [-200, -147], [146, -3005]], [[257811, 367140], [-547, -1925], [-253, -1483]], [[257011, 363732], [-559, 3794]], [[256452, 367526], [171, 2699]], [[217476, 373489], [0, -6490]], [[217476, 366999], [-1216, 13]], [[218693, 368621], [0, -1623]], [[218693, 366998], [-1157, 2]], [[217536, 367000], [-60, -1]], [[223261, 368539], [4, -1604]], [[223265, 366935], [-1481, -59]], [[221784, 366876], [-36, 1612]], [[226620, 368609], [1, -1637]], [[226621, 366972], [-1512, -41]], [[225109, 366931], [-321, 1], [1, 1618]], [[232977, 373422], [0, -6492]], [[232977, 366930], [-1214, 49]], [[231763, 366979], [2, 4042]], [[234197, 372339], [-1, -5412]], [[234196, 366927], [-1206, 3]], [[232990, 366930], [-13, 0]], [[260851, 370098], [153, -1651]], [[261004, 368447], [-327, 81]], [[260677, 368528], [-207, -892]], [[260470, 367636], [-655, 342]], [[262219, 371532], [-27, -1601]], [[262192, 369931], [-96, -2448]], [[262096, 367483], [-272, 950], [-279, -894], [-214, 1026], [-327, -118]], [[275618, 371468], [-300, -1181], [80, -1043], [-490, -1589]], [[274908, 367655], [-100, 1092], [-720, -2035], [-246, 1043]], [[266420, 371666], [-159, -2460]], [[266261, 369206], [-144, 586], [-553, -949], [-155, 569]], [[265409, 369412], [-57, 476]], [[263255, 371593], [-527, -1619]], [[262728, 369974], [-536, -43]], [[283955, 369764], [143, -837]], [[284098, 368927], [-199, -2026]], [[283899, 366901], [-182, 64]], [[283717, 366965], [-298, 1138]], [[283419, 368103], [99, 1639], [-146, 1185], [-444, -783]], [[282928, 370144], [-159, 111]], [[158120, 372966], [96, -2155], [271, -373], [409, -1981]], [[158896, 368457], [-209, -645], [106, -2701]], [[158793, 365111], [-4, -1305], [-464, -533], [77, -1486]], [[158402, 361787], [-315, 1659], [12, 3042], [-319, 2975], [37, 3501]], [[268019, 369148], [-408, 283], [-84, -2105]], [[267527, 367326], [-252, 703], [-463, -1951], [-186, 747], [-277, -815]], [[266349, 366010], [-88, 3196]], [[282769, 370255], [-560, -2685]], [[282209, 367570], [-433, 1403], [-338, -727]], [[256452, 367526], [-546, -454]], [[255906, 367072], [-159, 651], [-61, 2673]], [[255686, 370396], [-335, 1439]], [[235506, 371949], [0, -5388]], [[235506, 366561], [0, -480]], [[235506, 366081], [-1273, 28]], [[234233, 366109], [-37, 818]], [[276028, 367645], [-525, -1521]], [[275503, 366124], [-183, 484], [-294, -965]], [[275026, 365643], [-118, 2012]], [[206149, 359693], [-183, -2]], [[205966, 359691], [-1387, 13]], [[204579, 359704], [-147, 937], [143, 4467], [-65, 1315]], [[237018, 370607], [-20, -4323]], [[236998, 366284], [-1492, 277]], [[255686, 370396], [-1221, -4086]], [[254465, 366310], [33, 525]], [[254498, 366835], [-360, 564], [-6, 1318]], [[247963, 370902], [2, -5312], [-199, 54]], [[247766, 365644], [-925, 50]], [[214823, 367027], [-2, -7366]], [[214821, 359661], [-2674, 122]], [[212147, 359783], [-234, 3]], [[198301, 371688], [-141, -897], [-30, -2361], [-478, -2240], [-241, -2267], [2, -1425], [-247, -2726]], [[197166, 359772], [-1855, -8]], [[199666, 367650], [1, -7869]], [[199667, 359781], [-2501, -9]], [[163279, 360600], [-1048, -5634]], [[162231, 354966], [-622, 1773], [-205, 2320]], [[161404, 359059], [-32, 3270]], [[263844, 368824], [-156, -2928]], [[263688, 365896], [-150, 509], [-457, -2190]], [[263081, 364215], [-5, 2272], [-355, 1234], [7, 2253]], [[284693, 370633], [402, -619], [175, -1718]], [[285270, 368296], [-384, -510], [-28, -974]], [[284858, 366812], [-760, 2115]], [[259385, 368154], [-66, -2032], [-241, -91]], [[259078, 366031], [-869, -274]], [[258209, 365757], [-398, 1383]], [[278500, 368443], [-229, -637], [32, -1405]], [[278303, 366401], [-518, -5580]], [[277785, 360821], [-108, -927], [-313, 672]], [[277364, 360566], [-363, 2794], [-342, 619]], [[276659, 363979], [-1, 1558]], [[277509, 366213], [0, 0]], [[184568, 369085], [5, -9297]], [[184573, 359788], [-3208, 1]], [[231763, 366979], [-8, -1627]], [[231755, 365352], [-1561, 65]], [[230194, 365417], [-3, 3232]], [[246323, 364827], [-123, -4109]], [[246200, 360718], [-515, 61], [-148, 783]], [[245537, 361562], [-46, 1372], [-349, 1595], [-44, 2975], [-102, 8]], [[249705, 370322], [275, -3107], [-171, -1185]], [[249809, 366030], [-12, -1569]], [[249797, 364461], [-367, -343], [-403, -1991]], [[249027, 362127], [-283, 3]], [[248744, 362130], [15, 8808]], [[243785, 367651], [-25, -6959]], [[243760, 360692], [-1207, 135]], [[242553, 360827], [-453, 65]], [[242100, 360892], [-4, 7694]], [[253774, 369187], [-63, -597], [-543, -371], [-221, -906]], [[252947, 367313], [-159, 351]], [[252788, 367664], [8, 3286]], [[252788, 367664], [-169, -666], [-98, -2357], [240, -2056], [-183, -1538]], [[252578, 361047], [0, 1701], [-613, 3308]], [[251965, 366056], [5, 4882]], [[283419, 368103], [-491, 2041]], [[251965, 366056], [-547, -27], [-62, -614]], [[251356, 365415], [-322, 507]], [[251034, 365922], [9, 4965]], [[251034, 365922], [-568, 98]], [[250466, 366020], [-657, 10]], [[285850, 370354], [308, -1053]], [[286158, 369301], [-18, -1123]], [[286140, 368178], [152, -3489], [-321, -311], [-554, 3770]], [[248744, 362130], [-259, 19], [1, -1355], [-424, -247]], [[248062, 360547], [-312, 844], [16, 4253]], [[273838, 367775], [29, -1537], [-368, -993]], [[273499, 365245], [-679, -1092]], [[272820, 364153], [-382, 1915]], [[272438, 366068], [143, 1618]], [[168203, 368402], [-33, -2228], [201, -312], [167, -3441], [606, -1526], [212, -3239], [-22, -2583]], [[169334, 355073], [-1717, -81], [0, -1561], [-890, 26], [-3, -1596], [-459, 20], [-299, -1621]], [[165966, 350260], [-246, -1295], [-814, -376], [-3, -4046], [-991, -5107]], [[163912, 339436], [-930, 3751], [58, 1792], [-142, 1162]], [[162898, 346141], [230, 1144], [-1, 2966], [-896, 4715]], [[238284, 367737], [-14, -2706]], [[238270, 365031], [-1188, 150]], [[237082, 365181], [-84, 1103]], [[265409, 369412], [279, -3140]], [[265688, 366272], [-442, -1825]], [[265246, 364447], [-535, 1286]], [[264711, 365733], [-177, 3782]], [[255906, 367072], [-251, -1810], [146, -2558]], [[255801, 362704], [-529, -953], [-438, 810]], [[254834, 362561], [-346, 1709], [-23, 2040]], [[283717, 366965], [-7, -1437]], [[283710, 365528], [-51, 69]], [[283659, 365597], [-117, -1255]], [[283542, 364342], [-75, -143]], [[283467, 364199], [-36, -77]], [[283431, 364122], [-87, -195]], [[283344, 363927], [-565, 790]], [[282779, 364717], [-265, 33], [-366, 1829], [61, 991]], [[280149, 367190], [-243, -2778]], [[279906, 364412], [-397, -808]], [[279509, 363604], [-259, 695], [-282, 3486]], [[287953, 369116], [-346, -3596], [-150, -3564], [-151, 2651], [266, 5440], [255, 74]], [[263081, 364215], [-502, -2274]], [[262579, 361941], [-398, 1304]], [[262181, 363245], [-37, 1321], [-302, 1001]], [[261842, 365567], [254, 1916]], [[272438, 366068], [-555, -2441], [-498, 580]], [[271385, 364207], [-316, 930], [-383, 3657], [178, 532]], [[254498, 366835], [-802, -2924], [-19, -786]], [[253677, 363125], [-271, -608]], [[253406, 362517], [-71, 2346], [-388, 2450]], [[188715, 359808], [-3143, -14]], [[185572, 359794], [-999, -6]], [[266349, 366010], [57, -1413]], [[266406, 364597], [-349, 1838], [-369, -163]], [[264711, 365733], [-224, -683], [-203, -2441]], [[264284, 362609], [-596, 3287]], [[271385, 364207], [-448, -1772]], [[270937, 362435], [-326, -1378], [-364, -501]], [[270247, 360556], [-283, 4288], [-168, 503]], [[286158, 369301], [207, 217], [310, -1576], [-73, -2371], [-462, 2607]], [[268620, 364835], [-243, -49], [-502, -1356]], [[267875, 363430], [-354, 1381], [6, 2515]], [[282779, 364717], [-405, -1350]], [[282374, 363367], [-1213, 1928]], [[281161, 365295], [-10, 1339]], [[284858, 366812], [77, -164]], [[284935, 366648], [-7, -2001], [-380, 948], [-673, 137], [24, 1169]], [[240887, 368745], [2, -7717]], [[240889, 361028], [-605, 68]], [[240284, 361096], [-453, 336]], [[239831, 361432], [-21, 6074]], [[161404, 359059], [-763, 408], [-257, -1537]], [[160384, 357930], [-486, 2766], [-658, 1780], [-447, 2635]], [[158896, 368457], [359, -59]], [[261842, 365567], [-522, -2203]], [[261320, 363364], [-643, 5164]], [[242100, 360892], [-1211, 136]], [[275026, 365643], [-484, -1303]], [[274542, 364340], [-690, -1813]], [[273852, 362527], [-445, 2381], [92, 337]], [[230194, 365417], [-2, -5660]], [[230192, 359757], [-625, 5]], [[229567, 359762], [-1109, 1]], [[228458, 359763], [-15, 8871]], [[228458, 359763], [-876, -6]], [[227582, 359757], [-948, 0]], [[226634, 359757], [-13, 7215]], [[220213, 368621], [49, -8799]], [[220262, 359822], [-1515, -39]], [[218747, 359783], [-1, 7214], [-53, 1]], [[221784, 366876], [6, -7102]], [[221790, 359774], [-1286, 38]], [[220504, 359812], [-242, 10]], [[225109, 366931], [7, -7184]], [[225116, 359747], [-550, 11]], [[224566, 359758], [-1269, 13]], [[223297, 359771], [-32, 7164]], [[261320, 363364], [-485, -1545]], [[260835, 361819], [-445, 1352]], [[260390, 363171], [-31, 2226], [111, 2239]], [[278782, 367130], [-479, -729]], [[176229, 341180], [677, -3534]], [[176906, 337646], [-237, -294], [-2130, -5], [-3164, 15]], [[171375, 337362], [-1036, -166]], [[170339, 337196], [73, 1515], [-403, 8050], [80, 567], [-421, 2802], [-73, 2164], [-261, 2779]], [[285316, 364880], [167, -151]], [[285483, 364729], [247, -950]], [[285730, 363779], [-49, -868]], [[285681, 362911], [-94, 911], [-633, 480], [-19, 2346]], [[285270, 368296], [233, -1658]], [[285503, 366638], [-153, -1181]], [[285350, 365457], [-34, -577]], [[260390, 363171], [-161, -224]], [[260229, 362947], [-452, -403], [-418, 351]], [[259359, 362895], [21, 898], [-302, 2238]], [[267875, 363430], [-170, -1501], [19, -1797], [-189, -331]], [[267535, 359801], [-167, 368]], [[267368, 360169], [-60, 2883], [-338, 936], [-80, 1342], [-349, -222], [-82, -932]], [[266459, 364176], [-53, 421]], [[279509, 363604], [-224, -3409]], [[279285, 360195], [-519, 777]], [[278766, 360972], [-292, -176], [-159, 1424], [-530, -1399]], [[239831, 361432], [-1513, 176]], [[238318, 361608], [-48, 3423]], [[253406, 362517], [-128, -3093]], [[253278, 359424], [-345, 1548], [-333, -767]], [[252600, 360205], [-233, 1071]], [[252367, 361276], [211, -229]], [[245537, 361562], [-556, -177], [-16, -3766]], [[244965, 357619], [-1212, 98]], [[243753, 357717], [7, 2975]], [[201905, 367295], [0, -3259], [563, -4371]], [[202468, 359665], [-2633, 116]], [[199835, 359781], [-168, 0]], [[276659, 363979], [-321, -1647], [-128, 663], [-334, -926]], [[275876, 362069], [-139, -176]], [[275737, 361893], [-37, 2240], [-197, 1991]], [[276171, 365518], [-31, -844]], [[276140, 364674], [211, -935], [217, 1689], [-397, 90]], [[257011, 363732], [-117, -2665]], [[256894, 361067], [-313, -151]], [[256581, 360916], [-547, -372], [-28, 566]], [[256006, 361110], [-205, 1594]], [[281161, 365295], [-22, -3278]], [[281139, 362017], [-569, -758]], [[280570, 361259], [-694, 2327], [30, 826]], [[204579, 359704], [-803, -10]], [[203776, 359694], [-1308, -29]], [[258404, 362945], [-624, 205], [-143, -3375]], [[257637, 359775], [-743, 1292]], [[258209, 365757], [195, -2812]], [[216175, 367014], [3, -7320]], [[216178, 359694], [-1317, -41]], [[214861, 359653], [-40, 8]], [[217536, 367000], [3, -7258]], [[217539, 359742], [-1361, -48]], [[218747, 359783], [-871, -31]], [[217876, 359752], [-337, -10]], [[232990, 366930], [-4, -7162]], [[232986, 359768], [-736, 0]], [[232250, 359768], [-495, -4]], [[231755, 359764], [0, 5588]], [[226634, 359757], [-862, -11]], [[225772, 359746], [-656, 1]], [[223297, 359771], [-1270, 0]], [[222027, 359771], [-237, 3]], [[234233, 366109], [4, -6336]], [[234237, 359773], [-931, -5]], [[233306, 359768], [-320, 0]], [[254834, 362561], [-147, -2743]], [[254687, 359818], [-400, -772]], [[254287, 359046], [-460, 3989], [-150, 90]], [[285503, 366638], [154, -1165], [635, -2093], [-66, -1011]], [[286226, 362369], [53, -611]], [[286279, 361758], [-115, -210]], [[286164, 361548], [-434, 2231]], [[285483, 364729], [-133, 728]], [[237082, 365181], [-19, -4504]], [[237063, 360677], [-1557, 161]], [[235506, 360838], [0, 5243]], [[275737, 361893], [-473, -1711], [-546, -687]], [[274718, 359495], [-101, 1954]], [[274617, 361449], [153, 1098]], [[274770, 362547], [-228, 1793]], [[266459, 364176], [-121, -2911], [119, -2629]], [[266457, 358636], [-224, 321]], [[266233, 358957], [-784, 1845]], [[265449, 360802], [-274, 2103], [71, 1542]], [[264091, 359038], [-613, -1732]], [[263478, 357306], [-281, 2110], [-435, 319]], [[262762, 359735], [-183, 2206]], [[264284, 362609], [-193, -3571]], [[235506, 360838], [0, -1077]], [[235506, 359761], [-1085, 11]], [[234421, 359772], [-184, 1]], [[259359, 362895], [-159, -1977]], [[259200, 360918], [-469, 373], [-327, 1654]], [[276140, 364674], [31, 844]], [[252367, 361276], [-1008, 2721]], [[251359, 363997], [-3, 1418]], [[272820, 364153], [-287, -1784], [161, -863], [-535, -1063], [70, -474]], [[272229, 359969], [-685, -1435], [-271, 477]], [[271273, 359011], [-336, 3424]], [[250466, 366020], [-48, -4181], [273, -849]], [[250691, 360990], [93, -1565]], [[250784, 359425], [-347, 1557], [-155, -1006]], [[250282, 359976], [-177, 540], [-308, 3945]], [[265449, 360802], [-249, -1448], [-375, -410]], [[264825, 358944], [-564, -170]], [[264261, 358774], [-170, 264]], [[251359, 363997], [-14, -27]], [[251345, 363970], [-427, -1200], [-227, -1780]], [[267368, 360169], [-217, -969], [-641, -1367]], [[266510, 357833], [-53, 803]], [[283884, 365227], [-225, 370]], [[283710, 365528], [174, -301]], [[248062, 360547], [-410, -2218]], [[247652, 358329], [-1170, 83]], [[246482, 358412], [-282, 2306]], [[283884, 365227], [441, 265], [239, -1371]], [[284564, 364121], [-405, -2255]], [[284159, 361866], [-678, -2215]], [[283481, 359651], [-2, 3311]], [[283479, 362962], [63, 1380]], [[285316, 364880], [0, 0]], [[262181, 363245], [-452, -3530], [-71, -1326]], [[261658, 358389], [-614, 241]], [[261044, 358630], [-209, 3189]], [[270247, 360556], [-500, -1317]], [[269747, 359239], [-387, 950], [-242, 3365]], [[231755, 359764], [-101, -4]], [[231654, 359760], [-1462, -3]], [[273852, 362527], [-162, -1380]], [[273690, 361147], [-561, -945], [-310, 462], [-429, -1769]], [[272390, 358895], [-161, 1074]], [[283467, 364199], [-36, -77]], [[282112, 359573], [-317, 632]], [[281795, 360205], [-220, -115], [-436, 1927]], [[282374, 363367], [-290, -906], [28, -2888]], [[238318, 361608], [-4, -1905]], [[238314, 359703], [-2, -1358]], [[238312, 358345], [-1259, 165]], [[237053, 358510], [10, 2167]], [[160384, 357930], [-174, -102]], [[160210, 357828], [-281, 264], [-163, -998]], [[159766, 357094], [-380, 2272], [-465, -406], [-519, 2827]], [[283344, 363927], [135, -965]], [[283481, 359651], [-614, -2144]], [[282867, 357507], [-109, 310]], [[282758, 357817], [-299, 1492], [-347, 264]], [[269086, 363431], [-450, -1507], [10, -1311], [-407, -1312]], [[268239, 359301], [-193, 765], [-584, -1129], [73, 864]], [[250282, 359976], [-572, -2623]], [[249710, 357353], [-478, -187]], [[249232, 357166], [9, 1268], [-273, 2899], [59, 794]], [[280570, 361259], [-138, -3504]], [[280432, 357755], [-433, -3598]], [[279999, 354157], [-48, 2703], [-666, 3335]], [[274770, 362547], [-153, -1098]], [[274718, 359495], [-251, -985]], [[274467, 358510], [-297, -981]], [[274170, 357529], [-480, 3618]], [[285497, 362381], [-63, -1488], [-424, -1183]], [[285010, 359710], [-289, -963]], [[284721, 358747], [-34, 2055], [-528, 1064]], [[284564, 364121], [581, -507], [352, -1233]], [[277364, 360566], [-130, -3464]], [[277234, 357102], [-337, -1259], [-663, 787], [-116, -677]], [[276118, 355953], [-70, 868], [-471, 579]], [[275577, 357400], [360, 2852], [-61, 1817]], [[251671, 358926], [-486, -648], [-308, 443]], [[250877, 358721], [-93, 704]], [[251345, 363970], [326, -5044]], [[252600, 360205], [-4, -1497]], [[252596, 358708], [-916, 77]], [[251680, 358785], [-9, 141]], [[286164, 361548], [133, -1959]], [[286297, 359589], [-664, 2556], [48, 766]], [[269747, 359239], [82, -1210], [-301, -551]], [[269528, 357478], [-635, 41], [-381, -1463]], [[268512, 356056], [-298, 1723]], [[268214, 357779], [25, 1522]], [[268976, 359021], [0, 0]], [[259200, 360918], [-148, -2365]], [[259052, 358553], [-666, -2940]], [[258386, 355613], [14, 579], [-508, 429], [-79, 979]], [[257813, 357600], [-176, 2175]], [[262762, 359735], [-638, -2584]], [[262124, 357151], [-422, -77]], [[261702, 357074], [-44, 1315]], [[261044, 358630], [-402, -2235]], [[260642, 356395], [-399, 432]], [[260243, 356827], [-14, 6120]], [[254287, 359046], [-782, -1740]], [[253505, 357306], [-227, 2118]], [[286374, 362810], [-59, -946]], [[286315, 361864], [-36, -106]], [[286226, 362369], [148, 441]], [[260243, 356827], [-662, -2212]], [[259581, 354615], [-529, 3938]], [[256006, 361110], [-211, -8003]], [[255795, 353107], [-851, -64]], [[254944, 353043], [-147, -18]], [[254797, 353025], [95, 6136], [-205, 657]], [[285916, 358061], [-1039, -4907]], [[284877, 353154], [-34, 77]], [[284843, 353231], [-42, 1109]], [[284801, 354340], [305, 3818], [-96, 1552]], [[285497, 362381], [59, -1872], [467, -1558], [-107, -890]], [[271273, 359011], [-157, -551]], [[271116, 358460], [-308, -1198], [-364, -180], [-73, -1054], [-635, -1658]], [[269736, 354370], [-208, 3108]], [[278766, 360972], [-356, -9725]], [[278410, 351247], [-345, -5]], [[278065, 351242], [106, 761], [-263, 1161], [-285, -492], [86, -1440]], [[277709, 351232], [-112, -1]], [[277597, 351231], [-569, 23]], [[277028, 351254], [206, 5848]], [[275577, 357400], [-419, -1373], [-218, -1669]], [[274940, 354358], [-473, 4152]], [[249232, 357166], [-26, -4320], [-719, 34]], [[248487, 352880], [-528, 25]], [[247959, 352905], [-9, 1582], [-298, 3842]], [[281795, 360205], [-66, -4559]], [[281729, 355646], [-596, 560], [-701, 1549]], [[286315, 361864], [307, -509], [-325, -1766]], [[284721, 358747], [-1328, -4408]], [[283393, 354339], [-167, 251], [88, 2640], [-447, 277]], [[246482, 358412], [44, -2142]], [[246526, 356270], [-1264, 228]], [[245262, 356498], [-302, 38], [5, 1083]], [[240284, 361096], [-17, -4867]], [[240267, 356229], [-1101, 142]], [[239166, 356371], [-105, 9], [12, 3261], [-759, 62]], [[274170, 357529], [-841, -1353]], [[273329, 356176], [-156, -695], [-455, -110]], [[272718, 355371], [-328, 3524]], [[257813, 357600], [-222, -728], [-201, -3628]], [[257390, 353244], [-830, -106]], [[256560, 353138], [21, 7778]], [[256560, 353138], [-150, -14]], [[256410, 353124], [-615, -17]], [[242553, 360827], [-66, -4877]], [[242487, 355950], [-1818, 220]], [[240669, 356170], [-402, 59]], [[253505, 357306], [130, -2237]], [[253635, 355069], [-1044, 65]], [[252591, 355134], [5, 3574]], [[250877, 358721], [-61, -2945]], [[250816, 355776], [-215, -1257], [64, -1203]], [[250665, 353316], [-203, -1647], [-216, 1258]], [[250246, 352927], [-536, 4426]], [[279999, 354157], [-151, -413], [-88, -2490]], [[279760, 351254], [-173, -6]], [[279587, 351248], [-953, 1]], [[278634, 351249], [-224, -2]], [[243753, 357717], [-40, -7254]], [[243713, 350463], [-1248, -11]], [[242465, 350452], [22, 5498]], [[237053, 358510], [-17, -3424]], [[237036, 355086], [-1532, 348]], [[235504, 355434], [2, 4327]], [[266233, 358957], [17, -975], [-599, -2206], [-221, -1817]], [[265430, 353959], [-521, 3091], [-84, 1894]], [[282758, 357817], [6, -3369], [-310, -3129]], [[282454, 351319], [-369, -15]], [[282085, 351304], [-408, -9]], [[281677, 351295], [52, 4351]], [[268214, 357779], [-540, -707], [-177, -2081], [-906, -1449]], [[266591, 353542], [-141, 2662], [60, 1629]], [[272718, 355371], [-733, -1028], [-226, -1288]], [[271759, 353055], [-261, 2814], [-382, 2591]], [[192648, 359743], [0, -24859], [484, -3], [-46, -2692], [-3, -12919], [-57, -4901], [47, -1624], [-31, -12942], [-90, -9], [0, -3908]], [[192952, 295886], [-304, 169]], [[192648, 296055], [0, 7876], [-2089, 0], [0, 4902]], [[190559, 308833], [0, 51008]], [[190559, 308833], [-267, 68], [-549, 2096], [-586, 1353], [-625, -722], [-215, 1094]], [[188317, 312722], [9, 6149], [-629, 15], [-1, 3314], [-1550, -155], [-4, 3263], [-296, 21], [4, 2067], [-380, -317], [-149, 1052], [-899, 1045], [-616, 2800], [-445, 402]], [[183361, 332378], [1, 5119], [67, 1656], [-124, 2774], [364, 945], [70, 1118], [518, 1618], [615, 865], [469, 2332], [-89, 1927], [91, 1456], [24, 3833], [237, 2875], [-32, 898]], [[254797, 353025], [-1049, 764]], [[253748, 353789], [-113, 1280]], [[233306, 359768], [-67, -1052], [0, -6427]], [[233239, 352289], [-1054, -2]], [[232185, 352287], [0, 6411], [65, 1070]], [[231654, 359760], [-1, -10708]], [[231653, 349052], [-2, -4885], [-743, 13]], [[230908, 344180], [41, 1148], [-279, 231], [-356, 1845], [-191, -673], [-230, 2345], [-237, 377], [-143, 2237], [-300, -1766], [-371, 678]], [[228842, 350602], [273, 1700], [-394, -68]], [[228721, 352234], [-27, 1705], [357, -35], [129, 1255], [379, 564], [8, 4039]], [[224566, 359758], [31, -9970]], [[224597, 349788], [-211, -1343], [-481, 1079], [-172, 1064], [-325, 12]], [[223408, 350600], [-47, 1718], [-453, 3424], [-433, 680]], [[222475, 356422], [-448, 3349]], [[234421, 359772], [22, -6122]], [[234443, 353650], [-18, -2995]], [[234425, 350655], [-897, 9]], [[233528, 350664], [-2, 1625], [-287, 0]], [[232185, 352287], [-7, -3237]], [[232178, 349050], [-525, 2]], [[227582, 359757], [-1, -7541]], [[227581, 352216], [-1789, -1]], [[225792, 352215], [-20, 7531]], [[225792, 352215], [0, -2429]], [[225792, 349786], [-1195, 2]], [[228721, 352234], [-1137, -18]], [[227584, 352216], [-3, 0]], [[235504, 355434], [2, -1836]], [[235506, 353598], [-1063, 52]], [[222475, 356422], [0, -4178], [-865, -44]], [[221610, 352200], [-1107, 8]], [[220503, 352208], [1, 7604]], [[203776, 359694], [98, -2074], [-26, -3169], [117, -4650], [-91, -2221], [-240, -894], [560, -1233], [337, -2424], [573, -1622]], [[205104, 341407], [-115, -752], [-408, 114]], [[204581, 340769], [2, 439], [-987, -6], [48, -1327], [-534, 2]], [[203110, 339877], [-6, 660]], [[203104, 340537], [2, 655], [-1777, -47], [0, 4050], [-2059, 61]], [[199270, 345256], [16, 10890], [480, 2044], [69, 1591]], [[199270, 345256], [-7, -4087]], [[199263, 341169], [-3954, 39]], [[195309, 341208], [2, 18556]], [[195309, 341208], [0, -19411]], [[195309, 321797], [-2, -7083]], [[195307, 314714], [-2, -14912]], [[195305, 299802], [-837, -14], [-16, -899], [-396, -1421]], [[194056, 297468], [-882, -3136], [-222, 1554]], [[212147, 359783], [-1, -9303]], [[212146, 350480], [-110, 1], [3, -8288]], [[212039, 342193], [-1, -5881]], [[212038, 336312], [-930, 12]], [[211108, 336324], [28, 6447], [-1196, -11], [1, 1644], [-599, 9], [0, 810]], [[209342, 345223], [3, 14487]], [[214861, 359653], [-13, -9170]], [[214848, 350483], [-361, -4]], [[214487, 350479], [-2341, 1]], [[217876, 359752], [-23, -9286]], [[217853, 350466], [-365, -7]], [[217488, 350459], [-1502, 5]], [[215986, 350464], [-1138, 19]], [[220503, 352208], [-3, -1741]], [[220500, 350467], [-1510, -7]], [[218990, 350460], [-1137, 6]], [[284801, 354340], [42, -1109]], [[284877, 353154], [-51, -1711]], [[284826, 351443], [-1, -152]], [[284825, 351291], [-691, 42]], [[284134, 351333], [-370, -25]], [[283764, 351308], [-248, 1789], [-323, 550], [200, 692]], [[263478, 357306], [2, -788], [-559, -4123]], [[262921, 352395], [-20, 2]], [[262901, 352397], [-528, 227]], [[262373, 352624], [-249, 4527]], [[205966, 359691], [58, -1481], [-86, -3571], [-387, -996], [-23, -2199], [164, -1117], [-61, -4280]], [[205631, 346047], [-183, -448], [-37, -1983], [-307, -2209]], [[209342, 345223], [-1191, 14]], [[208151, 345237], [-1196, -14], [2, 802], [-1326, 22]], [[239166, 356371], [-30, -5933]], [[239136, 350438], [-751, 14]], [[238385, 350452], [30, 5979], [-103, 1914]], [[162898, 346141], [-230, -1190], [-457, 1973], [-260, -927], [-61, 1184], [-572, 3411], [-184, -60], [-18, 1981], [-418, 1414], [45, 778], [-533, 3123]], [[265430, 353959], [-148, -1854]], [[265282, 352105], [-222, 46]], [[265060, 352151], [-603, 36]], [[264457, 352187], [-224, 1543], [-135, 2569], [163, 2475]], [[286694, 356681], [-124, -214]], [[286570, 356467], [-12, 177]], [[286558, 356644], [136, 37]], [[286870, 358326], [-79, -1656]], [[286791, 356670], [-328, 768], [3, 1657], [404, -769]], [[264457, 352187], [-96, -3]], [[264361, 352184], [-1440, 211]], [[266591, 353542], [-596, -1194]], [[265995, 352348], [-713, -243]], [[251680, 358785], [-2, -3230]], [[251678, 355555], [-862, 221]], [[252591, 355134], [-10, -4640]], [[252581, 350494], [-77, 9]], [[252504, 350503], [-835, 21]], [[251669, 350524], [9, 5031]], [[261702, 357074], [-224, -4258]], [[261478, 352816], [-392, -139]], [[261086, 352677], [-444, 3718]], [[259581, 354615], [11, -1748]], [[259592, 352867], [-645, 209]], [[258947, 353076], [-577, 205]], [[258370, 353281], [16, 2332]], [[238385, 350452], [-786, -3]], [[237599, 350449], [-586, 0]], [[237013, 350449], [23, 4637]], [[287471, 351575], [127, -160]], [[287598, 351415], [-118, -3]], [[287480, 351412], [-9, 163]], [[287748, 351417], [-69, 0]], [[287679, 351417], [-139, 3116], [-110, -3119]], [[287430, 351414], [-90, 0]], [[287340, 351414], [-61, 1]], [[287279, 351415], [-242, -1]], [[287037, 351414], [1, 2143], [150, 497], [-378, 1440], [-61, 1238]], [[286749, 356732], [42, -62]], [[286870, 358326], [530, -178], [348, -6731]], [[274940, 354358], [-364, -883], [-48, -1925]], [[274528, 351550], [-629, 24]], [[273899, 351574], [-213, 1696]], [[273686, 353270], [-50, 396]], [[273636, 353666], [-307, 2510]], [[270321, 353192], [0, 0]], [[270321, 353192], [-338, -939]], [[269983, 352253], [-141, 0]], [[269842, 352253], [-106, 2117]], [[271759, 353055], [-114, -500]], [[271645, 352555], [-501, 44]], [[271144, 352599], [-890, -363]], [[270254, 352236], [67, 956]], [[247959, 352905], [-202, -2472]], [[247757, 350433], [-990, 13]], [[246767, 350446], [-44, 3366], [-197, 2458]], [[286570, 356467], [-316, -132]], [[286254, 356335], [304, 309]], [[286305, 356801], [-99, 491]], [[286206, 357292], [36, 564]], [[286242, 357856], [63, -1055]], [[286206, 357292], [-103, -958], [-95, -4919]], [[286008, 351415], [-140, 0]], [[285868, 351415], [-1042, 28]], [[285916, 358061], [-22, -1249], [348, 1044]], [[163912, 339436], [276, -2209]], [[164188, 337227], [-3150, 123]], [[161038, 337350], [-326, 1746], [-77, 1736], [-231, 787], [-396, 3160], [-504, 2054], [-221, 5106], [442, 1738], [41, 3417]], [[283764, 351308], [-1310, 11]], [[283158, 354580], [0, 0]], [[268512, 356056], [-491, -2311], [-105, -1527]], [[267916, 352218], [-1356, 66]], [[266560, 352284], [-565, 64]], [[281677, 351295], [-774, -7]], [[280903, 351288], [-371, -27]], [[280532, 351261], [-772, -7]], [[262373, 352624], [-838, 203]], [[261535, 352827], [-57, -11]], [[245262, 356498], [-28, -6068]], [[245234, 350430], [-783, -12]], [[244451, 350418], [-118, 11]], [[244333, 350429], [-620, 34]], [[269842, 352253], [-878, -29]], [[268964, 352224], [-617, -6]], [[268347, 352218], [-431, 0]], [[258370, 353281], [-422, -314]], [[257948, 352967], [-558, 277]], [[276118, 355953], [-148, -276], [114, -4413]], [[276084, 351264], [-1077, 151]], [[275007, 351415], [-479, 135]], [[250246, 352927], [-253, -2472]], [[249993, 350455], [-185, -21]], [[249808, 350434], [-152, 5]], [[249656, 350439], [-17, -3004]], [[249639, 347435], [-129, 1228], [-367, 440], [-80, -746], [-583, 46]], [[248480, 348403], [7, 4477]], [[286305, 356801], [-51, -466]], [[286694, 356681], [55, 51]], [[287037, 351414], [-532, -2]], [[286505, 351412], [-497, 3]], [[277028, 351254], [-871, 10]], [[276157, 351264], [-73, 0]], [[276536, 353676], [0, 0]], [[181366, 356861], [18, -12097], [-305, -3168], [-223, -193], [-382, 2417], [-725, -8], [-349, -1053], [144, -4363], [76, -6299], [227, -3470], [73, -3058], [-217, -1125], [37, -1876]], [[179740, 322568], [-2834, 15078]], [[261086, 352677], [-980, 63]], [[260106, 352740], [-514, 127]], [[246767, 350446], [-581, -1]], [[246186, 350445], [-952, -15]], [[240669, 356170], [-21, -5741]], [[240648, 350429], [-227, 4]], [[240421, 350433], [-1233, 7]], [[239188, 350440], [-52, -2]], [[223408, 350600], [13, -6429]], [[223421, 344171], [-1189, 52]], [[222232, 344223], [-595, -4], [-27, 7981]], [[273636, 353666], [50, -396]], [[273899, 351574], [-178, 49]], [[273721, 351623], [-1258, 240]], [[272463, 351863], [-903, 251]], [[271560, 352114], [85, 441]], [[242465, 350452], [-84, -5]], [[242381, 350447], [-1056, 0]], [[241325, 350447], [-677, -18]], [[251669, 350524], [-28, 4]], [[251641, 350528], [-22, -4]], [[251619, 350524], [-191, 1382], [-763, 1410]], [[237013, 350449], [-1507, 12]], [[235506, 350461], [0, 3137]], [[253748, 353789], [47, -3359]], [[253795, 350430], [-1214, 64]], [[170339, 337196], [-4266, 59]], [[166073, 337255], [29, 8918], [143, -17], [5, 2473], [-284, 1631]], [[254944, 353043], [136, -5034]], [[255080, 348009], [-639, -725], [-444, 466]], [[253997, 347750], [-26, 130]], [[253971, 347880], [-176, 2550]], [[235506, 350461], [153, -6282]], [[235659, 344179], [-652, -11]], [[235007, 344168], [-597, 9]], [[234410, 344177], [15, 6478]], [[257413, 348713], [-200, -1048], [-241, 622]], [[256972, 348287], [-208, -250], [-369, 1607]], [[256395, 349644], [15, 3480]], [[257948, 352967], [-373, -4226], [-162, -28]], [[258947, 353076], [-67, -2837]], [[258880, 350239], [-152, -2605]], [[258728, 347634], [-470, -222], [-397, -1685]], [[257861, 345727], [-448, 2986]], [[249808, 350434], [-152, 5]], [[251619, 350524], [-1425, 9]], [[250194, 350533], [-201, -78]], [[256395, 349644], [-463, -2486]], [[255932, 347158], [-632, 238]], [[255300, 347396], [-220, 613]], [[278065, 351242], [-356, -10]], [[260035, 350463], [-39, -1633]], [[259996, 348830], [-420, 265]], [[259576, 349095], [-528, 341], [-168, 803]], [[260106, 352740], [-71, -2277]], [[270254, 352236], [-271, 17]], [[248480, 348403], [6, -7255]], [[248486, 341148], [-919, -51]], [[247567, 341097], [-247, -14]], [[247320, 341083], [522, 3829]], [[247842, 344912], [352, 1894], [-43, 1810], [-211, 1819], [-183, -2]], [[262901, 352397], [149, -1465]], [[263050, 350932], [-592, 1050], [-298, -536], [-194, -2702]], [[261966, 348744], [-457, 2311]], [[261509, 351055], [26, 1772]], [[261509, 351055], [-433, -573], [-153, -1811]], [[260923, 348671], [-583, 2219], [-305, -427]], [[270706, 350628], [-572, -2009], [-308, -74]], [[269826, 348545], [-389, 914], [-672, -257]], [[268765, 349202], [199, 3022]], [[271144, 352599], [-438, -1971]], [[271560, 352114], [-142, -3667]], [[271418, 348447], [-528, -1942]], [[270890, 346505], [-41, -398]], [[270849, 346107], [-351, 1894], [300, 1976], [-92, 651]], [[264361, 352184], [5, -1438], [-252, -901], [56, -3381], [-120, -1264]], [[264050, 345200], [-190, -992]], [[263860, 344208], [-474, 1990], [-250, 1870]], [[263136, 348068], [117, 455], [-203, 2409]], [[266560, 352284], [206, -1169], [31, -2258]], [[266797, 348857], [-174, -720], [-607, -561]], [[266016, 347576], [-183, 13], [-202, 1689], [-279, -295]], [[265352, 348983], [-292, 3168]], [[228842, 350602], [-62, -3232], [299, 0], [0, -1618]], [[229079, 345752], [-602, -1], [-1, -1623], [-593, -2]], [[227883, 344126], [-297, 100]], [[227586, 344226], [-2, 7990]], [[268347, 352218], [-502, -560], [-752, -3146]], [[267093, 348512], [-296, 345]], [[233528, 350664], [-299, -2], [-13, -8097]], [[233216, 342565], [-366, 1], [-131, 1627], [-400, 1]], [[232319, 344194], [-149, -1], [8, 4857]], [[265352, 348983], [-275, -2785]], [[265077, 346198], [-193, -791], [-429, 316], [-38, -1253], [-367, 730]], [[268765, 349202], [-61, -397]], [[268704, 348805], [-665, -1447], [-393, -1683]], [[267646, 345675], [-224, 1918], [-258, -1047]], [[267164, 346546], [-71, 1966]], [[227586, 344226], [-599, 4]], [[226987, 344230], [-1193, 4]], [[225794, 344234], [-2, 5552]], [[222232, 344223], [4, -2818]], [[222236, 341405], [-226, -158], [-275, -2614], [-163, -423], [-440, 843], [-101, 2155], [-521, -2269]], [[220510, 338939], [0, 3261]], [[220510, 342200], [-10, 8267]], [[272463, 351863], [277, -3899]], [[272740, 347964], [-622, -2325]], [[272118, 345639], [-700, 2808]], [[263136, 348068], [-494, -1684], [-81, -2309]], [[262561, 344075], [-537, -331]], [[262024, 343744], [-54, 115]], [[261970, 343859], [103, 956], [-107, 3929]], [[273721, 351623], [-182, -2986]], [[273539, 348637], [-167, -515], [-189, 1242], [-443, -1400]], [[230908, 344180], [-83, 5]], [[230825, 344185], [-901, -43]], [[229924, 344142], [-551, -16], [0, 1626], [-294, 0]], [[275007, 351415], [-33, -5380]], [[274974, 346035], [-1, -378]], [[274973, 345657], [-247, 764], [-926, -861]], [[273800, 345560], [12, 1685], [-273, 1392]], [[285868, 351415], [140, -748]], [[286008, 350667], [106, -2464]], [[286114, 348203], [-296, -486]], [[285818, 347717], [-335, -961]], [[285483, 346756], [-266, 1180], [-452, 775]], [[284765, 348711], [60, 2580]], [[287518, 346134], [-187, 1417]], [[287331, 347551], [-272, 272], [-554, 3589]], [[287279, 351415], [112, -2597], [320, -2365], [229, -3945], [-422, 3626]], [[287748, 351417], [261, -5943]], [[288009, 345474], [-7, -9]], [[288002, 345465], [-124, 1107], [-199, 4845]], [[287598, 351415], [-258, -1]], [[287430, 351414], [50, -2]], [[276157, 351264], [-22, -5309]], [[276135, 345955], [-1161, 80]], [[287331, 347551], [294, -3319], [-296, 418], [-595, 3434]], [[286734, 348084], [-726, 2583]], [[282085, 351304], [5, -705]], [[282090, 350599], [-40, -2322], [-263, -3338]], [[281787, 344939], [-837, 1177]], [[280950, 346116], [82, 751], [-129, 4421]], [[284010, 345760], [-232, -1458]], [[283778, 344302], [-264, 840], [-153, 2057], [-292, -389], [-26, 2141], [-250, 1168], [-703, 480]], [[284134, 351333], [123, -1349], [-247, -4224]], [[284765, 348711], [428, -836], [170, -2171]], [[285363, 345704], [-1353, 56]], [[279587, 351248], [-16, -5692]], [[279571, 345556], [-415, 60]], [[279156, 345616], [-565, 57]], [[278591, 345673], [43, 5576]], [[280950, 346116], [-322, -1897], [-207, 206]], [[280421, 344425], [-40, 5196], [151, 1640]], [[280421, 344425], [-138, -2848]], [[280283, 341577], [-564, 913]], [[279719, 342490], [-155, 442], [7, 2624]], [[277597, 351231], [-60, -5439]], [[277537, 345792], [-1, -134]], [[277536, 345658], [-1401, 297]], [[278591, 345673], [-288, 31]], [[278303, 345704], [-766, 88]], [[261970, 343859], [-836, 1715], [-211, 1218]], [[260923, 346792], [0, 1879]], [[260923, 346792], [-350, -1704], [-444, 507]], [[260129, 345595], [-185, 949], [52, 2286]], [[283778, 344302], [137, -1341], [-235, -398]], [[283680, 342563], [-211, -1306]], [[283469, 341257], [-343, 603], [-21, 991], [-459, 1163]], [[282646, 344014], [-526, -168], [-333, 1093]], [[234410, 344177], [-298, -4], [1, -1623], [-250, 5]], [[233863, 342555], [-647, 10]], [[270849, 346107], [-412, -3020]], [[270437, 343087], [-395, 999]], [[270042, 344086], [-95, 1420], [-234, 365]], [[269713, 345871], [113, 2674]], [[286734, 348084], [37, -1380], [441, -2721], [-295, -509], [-337, 1726]], [[286580, 345200], [-247, 782], [-219, 2221]], [[251641, 350528], [29, -1722], [-373, -22], [-27, -3471]], [[251270, 345313], [-542, -338]], [[250728, 344975], [-915, 150]], [[249813, 345125], [342, 3659], [39, 1749]], [[225794, 344234], [-297, 0]], [[225497, 344234], [-1188, 0]], [[224309, 344234], [-888, -63]], [[252504, 350503], [-37, -6507]], [[252467, 343996], [-452, -1664]], [[252015, 342332], [-416, 1162], [-329, 1819]], [[249813, 345125], [-408, -510]], [[249405, 344615], [-185, 1255], [449, 35], [-218, 1039], [188, 491]], [[215988, 342195], [-1503, -2]], [[214485, 342193], [2, 8286]], [[215986, 350464], [2, -8269]], [[253971, 347880], [-287, -9], [29, -1852], [-361, -2613]], [[253352, 343406], [3, 475], [-888, 115]], [[217487, 342236], [0, -43]], [[217487, 342193], [-1499, 2]], [[217488, 350459], [-1, -8223]], [[214485, 342193], [-2446, 0]], [[218990, 350460], [-2, -8244]], [[218988, 342216], [-1501, 20]], [[220510, 342200], [-1504, 15]], [[219006, 342215], [-18, 1]], [[237599, 350449], [-66, -2391], [209, -1187]], [[237742, 346871], [-201, -1331]], [[237541, 345540], [-237, -554], [-1005, 172], [-161, -2143], [-448, 53]], [[235690, 343068], [-31, 1111]], [[244333, 350429], [-14, -3019], [-310, 36], [0, -1628], [-350, 62]], [[243659, 345880], [-1297, 147]], [[242362, 346027], [19, 4420]], [[239188, 350440], [-10, -7019]], [[239178, 343421], [-500, 72]], [[238678, 343493], [-199, 23], [-297, 3291], [-440, 64]], [[244451, 350418], [275, -1428], [138, -3024]], [[244864, 345966], [-252, -503], [-21, -6336]], [[244591, 339127], [-295, 862], [-689, 91]], [[243607, 340080], [78, 1093], [-26, 4707]], [[246125, 346133], [-9, -2184]], [[246116, 343949], [-923, 327], [-329, 1690]], [[246186, 350445], [92, -4019], [-153, -293]], [[240421, 350433], [-86, -131], [-16, -7014]], [[240319, 343288], [-151, 20]], [[240168, 343308], [-990, 113]], [[241325, 350447], [-50, -4301], [214, -303], [163, -1656], [2, -1854]], [[241654, 342333], [-1188, 137], [-147, 818]], [[242362, 346027], [-107, -2387]], [[242255, 343640], [-6, -1372], [-298, 32], [-8, -1620], [-297, 34]], [[241646, 340714], [8, 1619]], [[247842, 344912], [-364, -14], [3, 1094], [-1356, 141]], [[166073, 337255], [-1825, -23]], [[164248, 337232], [-60, -5]], [[259576, 349095], [-440, -2424]], [[259136, 346671], [-408, 963]], [[256972, 348287], [-236, -4733], [-157, -1543]], [[256579, 342011], [-357, 79]], [[256222, 342090], [89, 2409], [-69, 2509], [-310, 150]], [[256334, 346649], [0, 0]], [[269713, 345871], [-270, -1826], [-440, -1091]], [[269003, 342954], [-147, 935], [39, 5067], [-191, -151]], [[273800, 345560], [-24, -3359]], [[273776, 342201], [-410, -186]], [[273366, 342015], [-834, -920]], [[272532, 341095], [-604, 2256]], [[271928, 343351], [190, 2288]], [[266016, 347576], [-182, -3348]], [[265834, 344228], [-583, 405]], [[265251, 344633], [-174, 1565]], [[260129, 345595], [-76, -1982]], [[260053, 343613], [-159, -705], [-545, -143]], [[259349, 342765], [-213, 3906]], [[249405, 344615], [100, -1065], [-238, -810], [-78, -1541]], [[249189, 341199], [-703, -51]], [[232319, 344194], [0, -4874], [-162, -839]], [[232157, 338481], [-593, 18]], [[231564, 338499], [9, 4067], [-746, 8], [-2, 1611]], [[267164, 346546], [-203, 141], [-387, -2271]], [[266574, 344416], [-254, 92], [-305, -1844]], [[266015, 342664], [-181, 1564]], [[257861, 345727], [219, -2691]], [[258080, 343036], [-288, -2463]], [[257792, 340573], [-469, 1261], [-395, 312], [-275, -1179], [-74, 1044]], [[269003, 342954], [-22, -1048]], [[268981, 341906], [-95, 482], [-414, -1435], [-99, -1242], [-215, 431]], [[268158, 340142], [-746, 4389]], [[267412, 344531], [234, 1144]], [[271928, 343351], [-738, -111]], [[271190, 343240], [-274, 1942], [-26, 1323]], [[286580, 345200], [260, -2060], [-166, -57], [-563, 1793], [417, -1963], [-516, -159]], [[286012, 342754], [-231, 471], [37, 4492]], [[263860, 344208], [277, -2132]], [[264137, 342076], [-291, -1174], [-653, -1442]], [[263193, 339460], [-112, 1610], [-520, 3005]], [[255300, 347396], [-148, -2919]], [[255152, 344477], [-646, 1244], [-421, -30]], [[254085, 345691], [-88, 2059]], [[254085, 345691], [76, -2249], [-252, -3271], [243, -246], [-104, -1723]], [[254048, 338202], [-22, -470]], [[254026, 337732], [-577, 561]], [[253449, 338293], [-110, 15], [13, 5098]], [[259349, 342765], [126, -2327]], [[259475, 340438], [-385, -123]], [[259090, 340315], [-438, 450], [-572, 2271]], [[286012, 342754], [225, -326], [-290, -1136], [-496, 1123], [-83, 1530], [115, 2811]], [[267412, 344531], [-191, -1782]], [[267221, 342749], [-165, 989], [-482, 678]], [[256222, 342090], [-60, -1685]], [[256162, 340405], [-922, 637]], [[255240, 341042], [-88, 3435]], [[238678, 343493], [80, -2934], [-203, -1599], [13, -2198]], [[238568, 336762], [-493, 95]], [[238075, 336857], [-599, -165]], [[237476, 336692], [-145, 21]], [[237331, 336713], [53, 6146], [157, 2681]], [[262024, 343744], [-408, -706], [-50, -2262]], [[261566, 340776], [-126, 977], [-555, 938], [-378, -1246]], [[260507, 341445], [-454, 2168]], [[265251, 344633], [-424, -2186], [97, -598], [-378, -805], [-214, -1552]], [[264332, 339492], [-195, 2584]], [[274973, 345657], [38, -1938], [-162, -1684]], [[274849, 342035], [-546, 77]], [[274303, 342112], [-527, 89]], [[271190, 343240], [205, -849], [-197, -1933]], [[271198, 340458], [-379, -47]], [[270819, 340411], [-107, -893]], [[270712, 339518], [-146, 571], [-129, 2998]], [[281787, 344939], [-692, -7162]], [[281095, 337777], [-139, 1398], [-673, 2402]], [[247320, 341083], [-34, -575], [-1288, 60]], [[245998, 340568], [118, 3381]], [[208151, 345237], [293, -4777], [-163, -1892], [63, -1472]], [[208344, 337096], [-1781, -187], [-951, 1847], [-1038, 6]], [[204574, 338762], [7, 2007]], [[276135, 345955], [-22, -4593]], [[276113, 341362], [-980, -697]], [[275133, 340665], [-284, 1370]], [[243607, 340080], [-388, -1384]], [[243219, 338696], [-295, 1224], [-438, 79], [156, 1793], [-387, 1848]], [[270042, 344086], [-542, -1569]], [[269500, 342517], [-247, -1769]], [[269253, 340748], [-294, -190], [22, 1348]], [[245998, 340568], [-64, -1621], [-438, 78]], [[245496, 339025], [-463, 92]], [[245033, 339117], [-442, 10]], [[277536, 345658], [-27, -6362]], [[277509, 339296], [-1406, 390]], [[276103, 339686], [10, 1676]], [[278303, 345704], [22, -6834]], [[278325, 338870], [33, -603], [-850, -17]], [[277508, 338250], [1, 1046]], [[229924, 344142], [0, -4067]], [[229924, 340075], [-1446, 9]], [[228478, 340084], [-594, 801], [-1, 3241]], [[255240, 341042], [-479, -1636], [-28, -1244]], [[254733, 338162], [-378, -650], [-307, 690]], [[285363, 345704], [-90, -1721], [200, -3015], [-54, -1229]], [[285419, 339739], [-161, -1091]], [[285258, 338648], [-207, 365], [-191, -1125], [-97, 1431], [-186, -784], [-144, 1521], [-394, -14], [-22, 1228], [-337, 1293]], [[279156, 345616], [-183, -6997]], [[278973, 338619], [-648, 251]], [[279719, 342490], [139, -1155], [-370, -2640], [-207, 11]], [[279281, 338706], [-308, -87]], [[237331, 336713], [-1477, -32]], [[235854, 336681], [-164, 6387]], [[288818, 335050], [63, -1480], [-197, -6894], [-610, -638]], [[288074, 326038], [-5, 98]], [[288069, 326136], [643, 1433], [149, 5776], [-43, 1705]], [[287690, 334443], [-349, 562]], [[287341, 335005], [74, 4091], [488, 662], [174, -763], [41, -4813], [-337, -752], [-91, 1013]], [[288009, 345474], [568, -6868], [-469, 3338], [-106, 3521]], [[252015, 342332], [-40, -5058]], [[251975, 337274], [-584, 118]], [[251391, 337392], [-538, 1205], [-221, 2559]], [[250632, 341156], [96, 3819]], [[203103, 338170], [0, 311]], [[203103, 338481], [0, -311]], [[203104, 340537], [-422, -116], [-2, -2838], [423, -967]], [[203103, 336616], [9, -10066]], [[203112, 326550], [-2650, 81]], [[200462, 326631], [-120, 1601], [-197, -3]], [[200145, 328229], [5, 12911], [-887, 29]], [[211108, 336324], [-13, -6367], [-717, -154]], [[210378, 329803], [-244, 605], [-702, 7065], [-124, -377], [-964, 0]], [[250632, 341156], [-254, -2107], [-174, -102]], [[250204, 338947], [-181, 1223], [-661, -786]], [[249362, 339384], [-173, 1815]], [[282646, 344014], [-362, -5323]], [[282284, 338691], [-1014, -2548]], [[281270, 336143], [-175, 1634]], [[267221, 342749], [-212, -3525]], [[267009, 339224], [-457, 519], [-553, 2138]], [[265999, 341881], [16, 783]], [[265999, 341881], [52, -1239], [-389, -1579]], [[265662, 339063], [-165, -857], [-257, 652], [-539, -385], [-75, -937]], [[264626, 337536], [-271, 1710]], [[264355, 339246], [-23, 246]], [[268158, 340142], [-176, -2869]], [[267982, 337273], [-326, -26], [-492, -1366]], [[267164, 335881], [-155, 3343]], [[263193, 339460], [-282, -1554]], [[262911, 337906], [-375, -1179]], [[262536, 336727], [-941, 73]], [[261595, 336800], [1, 26]], [[261596, 336826], [-53, 386]], [[261543, 337212], [10, 105]], [[261553, 337317], [156, 2178], [-143, 1281]], [[226987, 344230], [5, -8168]], [[226992, 336062], [-1485, -16]], [[225507, 336046], [-10, 8188]], [[228478, 340084], [-1, -4053]], [[228477, 336031], [-1485, 31]], [[225507, 336046], [-296, -2], [0, -3229]], [[225211, 332815], [-863, 2]], [[224348, 332817], [-25, 4855]], [[224323, 337672], [-14, 6562]], [[224323, 337672], [-2072, -4]], [[222251, 337668], [-15, 3737]], [[231564, 338499], [-444, 4], [-1, -4058]], [[231119, 334445], [-1192, -1]], [[229927, 334444], [-3, 5631]], [[233863, 342555], [-208, -1974], [146, -1821], [-99, -1072]], [[233702, 337688], [-1043, -410], [-29, 1220], [-323, -8]], [[232307, 338490], [-150, -9]], [[235007, 344168], [-29, -9732]], [[234978, 334436], [-891, 6]], [[234087, 334442], [1, 3236], [-386, 10]], [[235854, 336681], [57, -2246]], [[235911, 334435], [-933, 1]], [[270712, 339518], [-422, -1622]], [[270290, 337896], [-183, 3519], [-607, 1102]], [[283469, 341257], [168, -1848], [-22, -1610]], [[283615, 337799], [-112, 244], [-755, -2883]], [[282748, 335160], [-250, 2798], [-214, 733]], [[253449, 338293], [-4, -540]], [[253445, 337753], [-1088, 149], [-103, -659]], [[252254, 337243], [-279, 31]], [[260507, 341445], [21, -2479], [-127, -944]], [[260401, 338022], [-564, 157]], [[259837, 338179], [-362, 2259]], [[243219, 338696], [35, -3025]], [[243254, 335671], [-1124, 135]], [[242130, 335806], [-497, 70], [6, 1353]], [[241639, 337229], [7, 3485]], [[240168, 343308], [-18, -7270]], [[240150, 336038], [-594, 77]], [[239556, 336115], [-989, 105], [1, 542]], [[272532, 341095], [-16, -3720]], [[272516, 337375], [-83, -532]], [[272433, 336843], [-535, 176], [-700, 3439]], [[241639, 337229], [-595, 40], [-2, -1348], [-498, 75]], [[240544, 335996], [-394, 42]], [[259090, 340315], [-150, -4665]], [[258940, 335650], [-106, -1338]], [[258834, 334312], [-300, 531], [-141, -774], [-313, 1294], [-345, -47]], [[257735, 335316], [-130, 450]], [[257605, 335766], [203, 1496], [-16, 3311]], [[270290, 337896], [-396, -2234]], [[269894, 335662], [-202, 1971], [-170, 144]], [[269522, 337777], [-269, 2971]], [[261596, 336826], [-53, 386]], [[261553, 337317], [-455, 475], [-475, -445]], [[260623, 337347], [-222, 675]], [[281095, 337777], [-585, -2047], [-679, -3519]], [[279831, 332211], [-571, 1186]], [[279260, 333397], [-227, 516], [248, 4793]], [[285258, 338648], [-235, -2968]], [[285023, 335680], [-392, -874], [-524, 1391]], [[284107, 336197], [-492, 1602]], [[269522, 337777], [-293, -274], [-813, -2186], [-219, -148]], [[268197, 335169], [-215, 2104]], [[275133, 340665], [83, -1450], [-296, -1327], [32, -1469]], [[274952, 336419], [-480, 1873], [-210, 138]], [[274262, 338430], [41, 3682]], [[219006, 342215], [1, -8138]], [[219007, 334077], [-1521, -4]], [[217486, 334073], [0, 114]], [[217486, 334187], [1, 8006]], [[220510, 338939], [0, -4866]], [[220510, 334073], [-1503, 4]], [[217486, 334187], [-1496, -22]], [[215990, 334165], [-2, 8030]], [[214485, 342193], [1, -7963]], [[214486, 334230], [-2449, -96]], [[212037, 334134], [1, 2178]], [[274262, 338430], [-178, -3319], [96, -3116]], [[274180, 331995], [-135, -25]], [[274045, 331970], [-450, -338]], [[273595, 331632], [-36, 1117]], [[273559, 332749], [96, 1381], [-522, 2938]], [[273133, 337068], [300, 3340], [-67, 1607]], [[215990, 334165], [0, -72]], [[215990, 334093], [-1504, -3]], [[214486, 334090], [0, 140]], [[257605, 335766], [-267, -59]], [[257338, 335707], [-1207, 2676]], [[256131, 338383], [31, 2022]], [[273133, 337068], [-79, 883], [-538, -576]], [[263585, 335028], [0, 0]], [[263585, 335028], [-124, -483]], [[263461, 334545], [-99, 4]], [[263362, 334549], [-9, 1250], [-281, 765]], [[263072, 336564], [-161, 1342]], [[264355, 339246], [-770, -4218]], [[267164, 335881], [3, -378]], [[267167, 335503], [-680, -2474], [-459, 115]], [[266028, 333144], [-109, 2607], [-257, 3312]], [[276103, 339686], [-56, -7726]], [[276047, 331960], [-323, -23]], [[275724, 331937], [-70, 1389], [-359, 2653], [-343, 440]], [[222251, 337668], [32, -5648]], [[222283, 332020], [-589, 1], [-1, -1624], [-1183, 13]], [[220510, 330410], [0, 3663]], [[200145, 328229], [-3228, 29], [-3, -6474], [-1605, 13]], [[204574, 338762], [16, -15441]], [[204590, 323321], [-1474, -29]], [[203116, 323292], [-4, 3258]], [[203103, 336616], [208, 1297], [-208, 257]], [[203103, 338481], [7, 1396]], [[249362, 339384], [-276, 30], [116, -1381], [-336, -1405], [-365, -377], [270, -1925], [-281, -846], [135, -918]], [[248625, 332562], [-364, 175], [-4, -2806]], [[248257, 329931], [-36, -136]], [[248221, 329795], [-36, 1333], [-212, -483]], [[247973, 330645], [-400, 67]], [[247573, 330712], [0, 4866]], [[247573, 335578], [-6, 5519]], [[272433, 336843], [-475, -3705]], [[271958, 333138], [-10, -82]], [[271948, 333056], [-430, 281]], [[271518, 333337], [-367, -86]], [[271151, 333251], [-126, 2692], [-326, 1639], [222, 1421], [-102, 1408]], [[251391, 337392], [-290, -2345], [-136, 397]], [[250965, 335444], [-553, 1154], [-247, 1169]], [[250165, 337767], [39, 1180]], [[247573, 335578], [-2091, 161]], [[245482, 335739], [14, 3286]], [[286926, 335501], [-145, -1821], [-233, 206], [79, 1506], [-351, 140]], [[286276, 335532], [78, 4358]], [[286354, 339890], [552, 1171], [303, -80], [50, -5635], [-333, 155]], [[256131, 338383], [-53, -2344], [-292, -1221]], [[255786, 334818], [-336, -820], [-354, 712], [-199, -818]], [[254897, 333892], [-239, 1016], [75, 3254]], [[286276, 335532], [-676, 144]], [[285600, 335676], [-577, 4]], [[285419, 339739], [847, 1101], [88, -950]], [[259837, 338179], [-278, -1956], [-1, -1387]], [[259558, 334836], [-289, -247], [-329, 1061]], [[271151, 333251], [-416, -936], [-546, 61]], [[270189, 332376], [-338, 1183], [43, 2103]], [[250165, 337767], [-126, 96], [-281, -4504]], [[249758, 333359], [-308, 1169], [-406, 124], [-419, -2090]], [[229927, 334444], [-12, -3282]], [[229915, 331162], [-1439, 23]], [[228476, 331185], [1, 4846]], [[245033, 339117], [-93, -1439], [-340, -1930], [-44, -3401], [-591, 75]], [[243965, 332422], [-591, 69]], [[243374, 332491], [12, 3307], [-132, -127]], [[277508, 338250], [-37, -6115]], [[277471, 332135], [-595, -66]], [[276876, 332069], [-829, -109]], [[263633, 333862], [1, 202]], [[263634, 334064], [-1, -202]], [[264626, 337536], [88, -2616], [-150, -1007]], [[264564, 333913], [-285, 823], [-464, 205], [-191, -773]], [[263624, 334168], [-163, 377]], [[245482, 335739], [-5, -4945]], [[245477, 330794], [-2, -1650]], [[245475, 329144], [-590, 62], [-3, 1641], [-263, -125]], [[244619, 330722], [-662, 63], [8, 1637]], [[266028, 333144], [-304, -143], [-504, -1879]], [[265220, 331122], [-22, 60]], [[265198, 331182], [-124, 1693], [-214, -288], [-296, 1326]], [[279260, 333397], [-157, -1140]], [[279103, 332257], [-411, 1984], [-648, -2053]], [[278044, 332188], [-573, -53]], [[210378, 329803], [0, -2772], [-614, 433], [-745, -2269]], [[209019, 325195], [-2, 1367], [-3248, 13], [2, -3244]], [[205771, 323331], [-1181, -10]], [[282748, 335160], [-108, -470]], [[282640, 334690], [-343, -1480]], [[282297, 333210], [-672, 236]], [[281625, 333446], [-169, 332], [-186, 2365]], [[275724, 331937], [-313, -26]], [[275411, 331911], [-1231, 84]], [[232307, 338490], [0, -2432], [148, -22], [1, -3216]], [[232456, 332820], [-305, -2], [-149, -3257], [-294, 2]], [[231708, 329563], [-296, 1], [-1, 3262], [-292, -4], [0, 1623]], [[234087, 334442], [-14, -2089], [230, -1262]], [[234303, 331091], [-538, -3687], [-283, 600]], [[233482, 328004], [-2, 4815], [-1024, 1]], [[260623, 337347], [23, -3296], [103, -1581]], [[260749, 332470], [-138, -25]], [[260611, 332445], [-752, -140]], [[259859, 332305], [-301, 2531]], [[257338, 335707], [-156, -2905], [-342, -2491]], [[256840, 330311], [-446, 714], [-239, -413]], [[256155, 330612], [-245, 215]], [[255910, 330827], [24, 1814], [-148, 2177]], [[254026, 337732], [-164, -1606], [-17, -2092], [167, -1717], [-90, -1887]], [[253922, 330430], [-46, -579]], [[253876, 329851], [-478, -217], [-127, 793]], [[253271, 330427], [-4, 1966], [146, 1494], [32, 3866]], [[254897, 333892], [-166, -2346]], [[254731, 331546], [-712, -437], [-97, -679]], [[284107, 336197], [0, -1817], [235, -1425]], [[284342, 332955], [-25, -150]], [[284317, 332805], [-216, -594], [-40, -1864]], [[284061, 330347], [-198, -1249], [-361, -217]], [[283502, 328881], [-237, 1613]], [[283265, 330494], [-76, 1698], [-549, 2498]], [[273559, 332749], [-1601, 389]], [[270189, 332376], [-269, -1122]], [[269920, 331254], [-1335, -829]], [[268585, 330425], [-153, 882], [95, 1792], [-330, 2070]], [[263072, 336564], [-195, -3682], [-172, -20], [-175, -2136], [-273, -559]], [[262257, 330167], [-331, 918]], [[261926, 331085], [77, 2096], [533, 3546]], [[261595, 336800], [-473, -3689]], [[261122, 333111], [-373, -641]], [[253271, 330427], [-332, -80]], [[252939, 330347], [-8, 1375], [-394, 358], [-302, 1418]], [[252235, 333498], [19, 3745]], [[250965, 335444], [-26, -4865]], [[250939, 330579], [-294, -638]], [[250645, 329941], [-808, 110]], [[249837, 330051], [-79, 3308]], [[281625, 333446], [-251, -3123], [4, -1253], [-421, -1195]], [[280957, 327875], [-522, -413], [-138, 954]], [[280297, 328416], [-332, 3370], [-134, 425]], [[224348, 332817], [-1, -1627]], [[224347, 331190], [-2064, 19]], [[222283, 331209], [0, 811]], [[179740, 322568], [3, -2451], [444, -2895], [104, -2181], [266, -2705], [564, -2760]], [[181121, 309576], [-326, -2417], [-494, -1592]], [[180301, 305567], [-2460, -124], [1, -805], [-4499, -64], [2, -553], [-829, -8], [-928, 528], [-315, -3026]], [[171273, 301515], [-312, 1400]], [[170961, 302915], [145, 1407], [238, 4959], [-64, 9968]], [[171280, 319249], [98, 4], [-3, 18109]], [[164248, 337232], [-2, -3234], [299, -22], [0, -1605], [245, -1640], [325, -34], [4, -1632], [193, 12], [4, -1613], [397, -45], [3, -1615], [314, 79], [-22, -1691], [246, -211], [0, -3300]], [[166254, 320681], [-755, 1376], [-937, 2624], [-283, -1410], [-421, -725], [100, -1702], [-442, 1647], [-538, -410]], [[162978, 322081], [-4, 3223], [-296, 221], [-393, 1772], [197, 1535], [-165, 1791], [-326, 508], [-445, 3199], [-341, 589], [-167, 2431]], [[171280, 319249], [-3410, -90], [36, -551]], [[167906, 318608], [-268, 446], [-749, 38], [-88, 1203], [-462, 376]], [[166339, 320671], [-85, 10]], [[252235, 333498], [-176, -1853], [-459, -1133]], [[251600, 330512], [-661, 67]], [[242130, 335806], [-34, -6487]], [[242096, 329319], [-637, 87]], [[241459, 329406], [2, 1622], [-1031, 138]], [[240430, 331166], [104, 1602], [10, 3228]], [[268585, 330425], [-242, -1949], [-248, -495]], [[268095, 327981], [-738, 4146]], [[267357, 332127], [82, 739], [-272, 2637]], [[238036, 329532], [-271, 1020], [-8, -2176], [-298, 111], [-9, -1668], [-302, -291]], [[237148, 326528], [-150, 20], [21, 4291]], [[237019, 330839], [145, 2398], [-141, 1639], [249, -28], [204, 1844]], [[238075, 336857], [-39, -7325]], [[261926, 331085], [-253, -1942]], [[261673, 329143], [-493, 2571], [-58, 1397]], [[239556, 336115], [-10, -2440], [-148, 23], [-7, -2427], [-201, 24], [-9, -2652]], [[239181, 328643], [-295, 241], [-93, 1575], [-757, -927]], [[237019, 330839], [-164, -1084], [-525, -533], [-176, 1676], [-128, -957]], [[236026, 329941], [-115, 4494]], [[263362, 334549], [-670, -5485]], [[262692, 329064], [-240, -1163]], [[262452, 327901], [-195, 2266]], [[212037, 334134], [-3, -8177]], [[212034, 325957], [0, -4264]], [[212034, 321693], [-669, 4], [-3, -1666], [-294, 7], [-2, -1618], [-293, 8], [-1, -1623], [-586, 17], [-90, -1635]], [[210096, 315187], [-586, 7]], [[209510, 315194], [-502, 3], [-1, 3242]], [[209007, 318439], [12, 6756]], [[284317, 332805], [371, -2175], [955, -1729], [26, -1207]], [[285669, 327694], [-54, -768], [-593, -356], [-140, 697]], [[284882, 327267], [-821, 3080]], [[285600, 335676], [126, -1603], [273, -883]], [[285999, 333190], [-398, -1100], [175, -2296], [-1124, 1767], [-310, 1394]], [[240430, 331166], [-12, -5402], [-114, -40]], [[240304, 325724], [-549, -591], [-186, 1872], [-331, 1452]], [[239238, 328457], [-57, 186]], [[226992, 336062], [7, -6491]], [[226999, 329571], [0, -750]], [[226999, 328821], [0, -20]], [[226999, 328801], [-475, -44], [-290, 767], [-418, 56]], [[225816, 329580], [-586, -9], [-19, 3244]], [[228476, 331185], [-1, -1622]], [[228475, 329563], [-1476, 8]], [[243374, 332491], [-161, -3273], [-723, 82]], [[242490, 329300], [-394, 19]], [[257735, 335316], [-73, -4275], [185, -1700]], [[257847, 329341], [-411, -2086], [-227, 201]], [[257209, 327456], [-369, 2855]], [[247573, 330712], [-600, 59]], [[246973, 330771], [-1496, 23]], [[288074, 326038], [-5, 98]], [[286926, 335501], [415, -496]], [[287690, 334443], [20, -1176], [-419, -3066], [-333, -1393], [-288, 214], [-380, 1513], [-221, -1048], [-325, 2540], [265, -142], [-10, 1305]], [[259859, 332305], [-102, -4380]], [[259757, 327925], [-680, 1377], [-289, -545]], [[258788, 328757], [10, 1470]], [[258798, 330227], [36, 4085]], [[258798, 330227], [-518, -1709], [-228, 634]], [[258052, 329152], [-205, 189]], [[267357, 332127], [-461, -864], [33, -2553]], [[266929, 328710], [-948, -958]], [[265981, 327752], [263, 2891], [-1024, 479]], [[265198, 331182], [-169, -1111], [-21, -2086]], [[265008, 327985], [-272, -947], [-243, 467], [-219, -1110]], [[264274, 326395], [-566, 1466]], [[263708, 327861], [264, 836], [-23, 1267], [-316, 3898]], [[263634, 334064], [-10, 104]], [[255910, 330827], [-429, 244], [-354, -1106]], [[255127, 329965], [-396, 1581]], [[283265, 330494], [-572, -1459], [-346, 397]], [[282347, 329432], [-50, 3778]], [[248221, 329795], [-59, -96]], [[248162, 329699], [-189, 946]], [[249837, 330051], [-443, -509]], [[249394, 329542], [-1137, 389]], [[263708, 327861], [-580, -827]], [[263128, 327034], [-436, 2030]], [[236026, 329941], [-3, -305]], [[236023, 329636], [-176, -1476], [-443, -195], [-252, 1214], [-191, -612]], [[234961, 328567], [-77, 885], [-581, 1639]], [[231708, 329563], [0, -1619]], [[231708, 327944], [-1283, 3]], [[230425, 327947], [0, 3299], [-260, -1413], [-247, 174]], [[229918, 330007], [-3, 1155]], [[279103, 332257], [-595, -3991]], [[278508, 328266], [-251, 856], [-213, 3066]], [[214486, 334090], [-13, -8131]], [[214473, 325959], [-2439, -2]], [[217486, 334073], [-2, -8135]], [[217484, 325938], [-1494, 19]], [[215990, 325957], [0, 8136]], [[219007, 334077], [3, -8124]], [[219010, 325953], [-1526, -15]], [[220510, 330410], [0, -4461]], [[220510, 325949], [-1500, 4]], [[215990, 325957], [-1517, 2]], [[271518, 333337], [-29, -4139], [-182, -3291]], [[271307, 325907], [-296, 68]], [[271011, 325975], [-264, 59]], [[270747, 326034], [1, 1307], [-511, 2796], [-304, -278]], [[269933, 329859], [-13, 1395]], [[282347, 329432], [-80, -3573]], [[282267, 325859], [-165, -563], [-420, 838], [-332, -61]], [[281350, 326073], [-393, 1802]], [[252939, 330347], [-6, -701]], [[252933, 329646], [-671, -91], [-323, -2399], [-173, 1]], [[251766, 327157], [-166, 3355]], [[280297, 328416], [-211, -1294]], [[280086, 327122], [-581, 256], [-754, -1251]], [[278751, 326127], [-353, 1413], [110, 726]], [[271948, 333056], [227, -2696]], [[272175, 330360], [382, -2968], [-24, -1802]], [[272533, 325590], [-107, 26]], [[272426, 325616], [-1119, 291]], [[273595, 331632], [-24, -1621]], [[273571, 330011], [-1396, 349]], [[261673, 329143], [-449, -3852]], [[261224, 325291], [-188, 2237], [-289, 964]], [[260747, 328492], [203, 1622], [-339, 2331]], [[233482, 328004], [-312, 225]], [[233170, 328229], [-399, -1548], [-1070, -1312]], [[231701, 325369], [7, 2575]], [[225816, 329580], [10, -9734]], [[225826, 319846], [-1469, 0]], [[224357, 319846], [-4, 4514]], [[224353, 324360], [-6, 6830]], [[244619, 330722], [-212, -1147], [105, -2460], [-222, -2902]], [[244290, 324213], [-331, 36], [-3, -1237], [-368, 690], [-239, -589]], [[243349, 323113], [-585, 855], [-297, -184]], [[242467, 323784], [23, 5516]], [[260747, 328492], [-421, -561], [-85, -1376], [-371, 151]], [[259870, 326706], [-113, 1219]], [[188317, 312722], [-290, -1597], [-148, -4378], [654, -3], [-47, -2818]], [[188486, 303926], [-642, 1], [-1224, 899], [-311, -3086], [-1307, 2188], [-1640, -13]], [[183362, 303915], [1, 5933]], [[183363, 309848], [-2, 22530]], [[268095, 327981], [-175, -2988], [-203, -1445], [134, -484]], [[267851, 323064], [-277, -502]], [[267574, 322562], [-1, -3]], [[267573, 322559], [-644, 6151]], [[274045, 331970], [332, -4441], [324, -1103]], [[274701, 326426], [-806, -3868]], [[273895, 322558], [-185, 1400]], [[273710, 323958], [-377, -575], [22, 1922]], [[273355, 325305], [216, 4706]], [[278751, 326127], [-5, -339]], [[278746, 325788], [-367, 681], [-294, -912], [-345, -2208]], [[277740, 323349], [-312, 426], [-120, 1819]], [[277308, 325594], [-233, 1635], [-199, 4840]], [[277308, 325594], [-662, 368], [-623, -751]], [[276023, 325211], [-58, 1791], [126, 2469], [-367, 2466]], [[275411, 331911], [-586, -5937]], [[274825, 325974], [-124, 452]], [[222283, 331209], [10, -6488]], [[222293, 324721], [-136, -42]], [[222157, 324679], [-1040, 43], [-1, -1615], [-294, 3]], [[220822, 323110], [-312, 21]], [[220510, 323131], [0, 2818]], [[276023, 325211], [-562, 988]], [[275461, 326199], [-228, -566], [-408, 341]], [[269933, 329859], [-238, -2104], [-19, -1656]], [[269676, 326099], [-619, -853]], [[269057, 325246], [-122, 2960], [-350, 2219]], [[255127, 329965], [-89, -7353]], [[255038, 322612], [-1051, 46]], [[253987, 322658], [9, 5393], [-120, 1800]], [[230425, 327947], [0, -3245], [-136, 1], [-1, -3821]], [[230288, 320882], [-666, -982], [-127, 784]], [[229495, 320684], [-3, 9492], [426, -169]], [[265981, 327752], [-64, -577]], [[265917, 327175], [-396, 127], [-315, -710], [-198, 1393]], [[224353, 324360], [-360, 353], [-1700, 8]], [[229495, 320684], [-432, 1200]], [[229063, 321884], [-239, -1061], [-352, 454]], [[228472, 321277], [3, 8286]], [[241459, 329406], [-204, -4750]], [[241255, 324656], [-448, -779], [-907, 103]], [[239900, 323980], [404, 1744]], [[256155, 330612], [-49, -8076]], [[256106, 322536], [-1068, 76]], [[234961, 328567], [-4, -2253], [-314, -6], [0, -2676]], [[234643, 323632], [-1174, 5]], [[233469, 323637], [0, 1894], [-295, 3], [-4, 2695]], [[262452, 327901], [-222, -2978], [129, -2605]], [[262359, 322318], [-796, -49]], [[261563, 322269], [-276, -32]], [[261287, 322237], [-305, -6]], [[260982, 322231], [247, 1083], [-5, 1977]], [[257209, 327456], [-20, -5059]], [[257189, 322397], [-1046, 132]], [[256143, 322529], [-37, 7]], [[237148, 326528], [-7, -1359], [-305, -767]], [[236836, 324402], [-229, -382], [-21, -2058], [-606, -644]], [[235980, 321318], [43, 8318]], [[246973, 330771], [-2, -5539]], [[246971, 325232], [-1504, 74]], [[245467, 325306], [8, 3838]], [[245467, 325306], [-8, -2743], [-290, 31]], [[245169, 322594], [-399, -325], [-210, -1346]], [[244560, 320923], [13, 2577], [-283, 713]], [[248162, 329699], [-213, -2387], [219, -627], [19, -1534], [-292, -393], [-116, -1726], [-268, -566]], [[247511, 322466], [186, -1296], [-172, -1231]], [[247525, 319939], [-289, -501]], [[247236, 319438], [-2, 1325]], [[247234, 320763], [22, 4543], [-285, -74]], [[251766, 327157], [-13, -4699]], [[251753, 322458], [-101, 0]], [[251652, 322458], [-542, -5]], [[251110, 322453], [-504, -8]], [[250606, 322445], [39, 7496]], [[283502, 328881], [-231, -2073]], [[283271, 326808], [-356, -2934], [-358, -1180]], [[282557, 322694], [-108, 2560], [-182, 605]], [[239238, 328457], [-4, -1942], [-493, 49], [-203, -1310], [-493, -195], [5, -2145]], [[238050, 322914], [-1029, 136], [-185, 1352]], [[269057, 325246], [-524, -1428]], [[268533, 323818], [-371, -223]], [[268162, 323595], [-311, -531]], [[253987, 322658], [-600, -193]], [[253387, 322465], [-454, -3]], [[252933, 322462], [-49, 3]], [[252884, 322465], [49, 7181]], [[273355, 325305], [-822, 285]], [[285469, 320638], [-203, -947], [-926, -817]], [[284340, 318874], [-64, 5013]], [[284276, 323887], [204, 503], [398, -2748], [591, -1004]], [[284882, 327267], [-235, -2199], [118, -896]], [[284765, 324172], [-259, 864], [-282, -1162]], [[284224, 323874], [-953, 2934]], [[258788, 328757], [-158, -3842]], [[258630, 324915], [-206, 2014], [-376, 1416], [4, 807]], [[249394, 329542], [-31, -7083]], [[249363, 322459], [-223, -9]], [[249140, 322450], [-1629, 16]], [[270747, 326034], [-688, 163]], [[270059, 326197], [-383, -98]], [[250606, 322445], [-430, -12]], [[250176, 322433], [-813, 26]], [[252884, 322465], [-1131, -7]], [[235980, 321318], [-18, -3816]], [[235962, 317502], [-20, -4124]], [[235942, 313378], [-1326, -11]], [[234616, 313367], [-1, 3239], [-339, -2]], [[234276, 316604], [0, 3243], [170, 1608], [197, 17], [0, 2160]], [[226999, 328801], [9, -8951]], [[227008, 319850], [-1, -3235]], [[227007, 316615], [-1173, 1]], [[225834, 316616], [-8, 3230]], [[228472, 321277], [-554, 610], [-74, 2246], [-845, 4688]], [[258630, 324915], [-1, -2532]], [[258629, 322383], [-1296, 15]], [[257333, 322398], [-144, -1]], [[242467, 323784], [-5, -1009]], [[242462, 322775], [-297, 42], [-5, -1618], [-877, 478]], [[241283, 321677], [-149, 871], [121, 2108]], [[259870, 326706], [26, -4377]], [[259896, 322329], [-1243, 53]], [[258653, 322382], [-24, 1]], [[263128, 327034], [11, -1304], [-212, -3408]], [[262927, 322322], [-101, -5]], [[262826, 322317], [-467, 1]], [[200462, 326631], [360, -4880]], [[200822, 321751], [-378, 16], [-5, -7061]], [[200439, 314706], [-1450, -15]], [[198989, 314691], [-3682, 23]], [[229063, 321884], [-6, -2046]], [[229057, 319838], [-2049, 12]], [[267573, 322559], [-1043, -136]], [[266530, 322423], [-489, 3117], [-223, -90]], [[265818, 325450], [99, 1725]], [[285669, 327694], [310, 747], [30, -1790], [-452, -993], [295, -348], [-138, -1386], [-575, -2026], [-396, 1479], [22, 795]], [[260982, 322231], [-365, 30]], [[260617, 322261], [-721, 68]], [[281350, 326073], [46, -5342], [-149, -3077], [243, -283]], [[281490, 317371], [-394, -3133]], [[281096, 314238], [-204, 2185], [-465, 3448]], [[280427, 319871], [-419, 2517], [-71, 1883], [149, 2851]], [[239900, 323980], [-689, -4023], [1, -1633]], [[239212, 318324], [-296, -554]], [[238916, 317770], [-881, 35]], [[238035, 317805], [15, 5109]], [[233469, 323637], [-441, -557], [-20, -6469]], [[233008, 316611], [1, -1619], [-439, -6]], [[232570, 314986], [-586, -6], [0, 1618], [-585, 2]], [[231399, 316600], [1, 1621]], [[231400, 318221], [8, 5252], [293, 1896]], [[265818, 325450], [-331, -347], [-413, -2793]], [[265074, 322310], [-349, 6]], [[264725, 322316], [-533, 16]], [[264192, 322332], [82, 4063]], [[231400, 318221], [-877, 0]], [[230523, 318221], [1, 2621], [-236, 40]], [[264192, 322332], [-835, -3]], [[263357, 322329], [-430, -7]], [[280427, 319871], [-1132, -401]], [[279295, 319470], [-372, 2213]], [[278923, 321683], [-155, 1648], [-22, 2457]], [[284224, 323874], [52, 13]], [[284340, 318874], [-211, -331]], [[284129, 318543], [-198, 2128], [-360, 239], [-380, 1072], [-481, 71]], [[282710, 322053], [-153, 641]], [[203116, 323292], [0, -1615], [261, 3], [1, -1550], [-729, 1]], [[202649, 320131], [-58, 615], [-705, 55], [-101, -674], [-844, 4], [-119, 1620]], [[209007, 318439], [-587, -6], [1, -1615], [-293, -11], [-4, -1618], [-1242, -7], [0, -4791]], [[206882, 310391], [-1173, -5]], [[205709, 310386], [1, 4846], [61, -6], [0, 8105]], [[270059, 326197], [-28, -6432], [221, -1212]], [[270252, 318553], [-254, -3695], [-212, -1916]], [[269786, 312942], [-390, 2634], [-91, 3609]], [[269305, 319185], [-142, 3644], [-154, 855], [-476, 134]], [[276023, 325211], [227, -1074], [186, 599], [147, -1357], [71, -2680], [-218, -1751]], [[276436, 318948], [-6, 0]], [[276430, 318948], [-1089, 137]], [[275341, 319085], [120, 7114]], [[278923, 321683], [-437, -2238], [-436, 97]], [[278050, 319542], [-14, 1963], [-296, 1844]], [[275341, 319085], [-679, 65]], [[274662, 319150], [-651, 42], [43, 2132], [-159, 1234]], [[271464, 320921], [-199, -1405], [-198, -4517]], [[271067, 314999], [-604, 2049], [-211, 1505]], [[271011, 325975], [333, -4681], [120, -373]], [[282710, 322053], [66, -1014], [-81, -3693]], [[282695, 317346], [-1205, 25]], [[214473, 325959], [-4, -8114]], [[214469, 317845], [-993, -9]], [[213476, 317836], [-1442, 8]], [[212034, 317844], [0, 3849]], [[272173, 319555], [-709, 1366]], [[272426, 325616], [-120, -2205], [-216, -216], [83, -3640]], [[219010, 325953], [-5, -8102]], [[219005, 317851], [-1127, 10]], [[217878, 317861], [-405, 0]], [[217473, 317861], [11, 8077]], [[220510, 323131], [0, -5304]], [[220510, 317827], [-1157, 20]], [[219353, 317847], [-348, 4]], [[215990, 325957], [-18, -8107]], [[215972, 317850], [-1028, 9]], [[214944, 317859], [-475, -14]], [[277740, 323349], [-316, -946], [31, -1527], [-351, -1962]], [[277104, 318914], [-668, 34]], [[217473, 317861], [-1061, -15]], [[216412, 317846], [-440, 4]], [[273710, 323958], [112, -2797], [-91, -1952]], [[273731, 319209], [-1617, 16]], [[272114, 319225], [59, 330]], [[266530, 322423], [-186, -14]], [[266344, 322409], [-1079, -93]], [[265265, 322316], [-191, -6]], [[247234, 320763], [-1924, 142], [-2, -829]], [[245308, 320076], [-139, 2518]], [[224357, 319846], [-575, 10], [0, -4860]], [[223782, 314996], [-488, -1], [-284, 812]], [[223010, 315807], [139, 1188], [-267, 11], [14, 2697], [-285, -467]], [[222611, 319236], [-167, 661], [-84, 3111], [-203, 1671]], [[284158, 318178], [-29, 365]], [[285469, 320638], [29, 1355], [695, 560], [-107, -1080], [521, 321], [-484, -2667], [-165, -1717], [-182, -43], [-131, 1683], [-204, -1777], [-551, 161], [-575, -953], [-157, 1697]], [[222611, 319236], [-441, -169], [-51, -1640], [-679, -8]], [[221440, 317419], [-149, 818], [-33, 3269], [-436, -2], [0, 1606]], [[164640, 304627], [231, -1774], [-418, -879], [-323, 2121], [510, 532]], [[165055, 305327], [975, -1439], [-461, -705], [-359, 133], [-155, 2011]], [[166339, 320671], [-2, -7969], [-90, -1807]], [[166247, 310895], [-249, 759], [-867, -158], [-358, 994], [-804, 202], [-490, -415], [-116, 1396], [-373, 1054], [124, 2397], [-24, 2470], [-171, 1150], [59, 1337]], [[241283, 321677], [-583, -794], [39, -1064]], [[240739, 319819], [-931, 87], [-3, -1605]], [[239805, 318301], [-593, 23]], [[238035, 317805], [-613, -1484]], [[237422, 316321], [-246, 501], [-833, 92], [-381, 588]], [[244560, 320923], [-21, -4593], [-199, 26], [194, -1935]], [[244534, 314421], [-604, 81], [-3, -1622], [-230, 23]], [[243697, 312903], [96, 2891], [-159, 661], [20, 4597], [-307, 36], [2, 2025]], [[269305, 319185], [-840, -2740], [-145, -912]], [[268320, 315533], [-168, 2206], [10, 5856]], [[243697, 312903], [-75, 13]], [[243622, 312916], [-905, 124]], [[242717, 313040], [1, 2459], [-234, 29], [98, 2072], [19, 5167], [-139, 8]], [[274662, 319150], [434, -3776]], [[275096, 315374], [-397, -1018], [74, -878], [-605, -586], [-6, 1089], [-378, -1530]], [[273784, 312451], [4, 1591]], [[273788, 314042], [49, 2842], [-106, 2325]], [[234276, 316604], [-1268, 7]], [[268320, 315533], [-415, -2629]], [[267905, 312904], [-174, 218]], [[267731, 313122], [-145, 796]], [[267586, 313918], [-653, 2805]], [[266933, 316723], [-40, 540]], [[266893, 317263], [305, 3008], [323, 1133], [53, 1158]], [[205709, 310386], [-1, -1615], [-1701, 0]], [[204007, 308771], [-1371, -6], [-3, 3352]], [[202633, 312117], [-147, 1516], [16, 6496], [147, 2]], [[278050, 319542], [43, -1241], [-360, -2635]], [[277733, 315666], [-629, 3248]], [[221440, 317419], [0, -4033], [-492, -32]], [[220948, 313354], [-223, 1273], [-207, -260]], [[220518, 314367], [-8, 3460]], [[242717, 313040], [-496, 64]], [[242221, 313104], [-106, 14]], [[242115, 313118], [4, 1627], [-290, 31], [-264, 1666], [-303, 323], [6, 1346], [-291, 52], [9, 1623], [-247, 33]], [[256004, 318054], [-462, 770]], [[255542, 318824], [-243, 556], [-714, -1852], [-404, 1290], [-162, 1543], [-347, 180]], [[253672, 320541], [-285, 1924]], [[256143, 322529], [-11, -3407], [-128, -1068]], [[245308, 320076], [-7, -2464], [141, -1660]], [[245442, 315952], [-8, -3255], [151, -27], [-6, -2479], [-150, 6]], [[245429, 310197], [-104, 135], [-578, 3570], [-213, 519]], [[266893, 317263], [-555, 642], [-280, 1347]], [[266058, 319252], [-12, 1037], [298, 2120]], [[257333, 322398], [-17, -8213]], [[257316, 314185], [-332, 544], [-546, 1974]], [[256438, 316703], [-434, 1351]], [[252925, 317997], [-983, 23]], [[251942, 318020], [-95, 1898], [-197, -2], [2, 2542]], [[252933, 322462], [-8, -4465]], [[253555, 314761], [-46, -2207]], [[253509, 312554], [-482, 7]], [[253027, 312561], [-4, 5160], [-98, 276]], [[253672, 320541], [-117, -5780]], [[251942, 318020], [-46, -2985]], [[251896, 315035], [-985, 33]], [[250911, 315068], [2, 4040], [197, 809], [0, 2536]], [[249142, 318305], [-519, 9], [-331, -1193], [-264, 918], [-214, -624]], [[247814, 317415], [-5, 2532], [-284, -8]], [[249140, 322450], [2, -4145]], [[250911, 315068], [-438, -279]], [[250473, 314789], [-146, -6], [-2, 4868], [-149, 0], [0, 2782]], [[250473, 314789], [0, -1631]], [[250473, 313158], [-643, 1090], [-534, 2]], [[249296, 314250], [-2, 2448], [-152, 1607]], [[266058, 319252], [-82, -421]], [[265976, 318831], [-275, -139]], [[265701, 318692], [-106, 2240], [-330, 1384]], [[258653, 322382], [-138, -6674], [90, -613]], [[258605, 315095], [-29, -1678], [-447, -518], [-145, 1195]], [[257984, 314094], [-428, 804], [-240, -713]], [[260678, 319947], [-562, -4378], [-610, -2702], [-150, -75]], [[259356, 312792], [-223, 839], [-30, 1452], [-498, 12]], [[260617, 322261], [61, -2314]], [[263365, 319855], [101, -594], [-208, -1794], [7, -2679]], [[263265, 314788], [-172, 734], [-550, 214]], [[262543, 315736], [264, 4518], [19, 2063]], [[263357, 322329], [8, -2474]], [[264725, 322316], [-135, -685], [239, -2781], [-180, -2852]], [[264649, 315998], [-86, -842]], [[264563, 315156], [-22, 278]], [[264541, 315434], [-329, 3527], [-293, 880], [-554, 14]], [[262543, 315736], [-381, -217]], [[262162, 315519], [-1, 1814], [-262, 889]], [[261899, 318222], [232, 964], [228, 3132]], [[261899, 318222], [-334, 1613], [-2, 2434]], [[265701, 318692], [-212, -1318]], [[265489, 317374], [-231, 350], [-271, -1838], [-338, 112]], [[284158, 318178], [119, -1090], [-640, -3358], [-489, -1594]], [[283148, 312136], [-159, 657], [-294, 4553]], [[261287, 322237], [-239, -2820], [0, -1352], [-233, -2520]], [[260815, 315545], [-137, 4402]], [[262162, 315519], [-52, -657]], [[262110, 314862], [-107, 4]], [[262003, 314866], [-1169, 24]], [[260834, 314890], [-19, 655]], [[230523, 318221], [0, -1629], [-295, -3], [-4, -3251]], [[230224, 313338], [-874, 13]], [[229350, 313351], [0, 1623], [-292, 811]], [[229058, 315785], [-1, 4053]], [[202633, 312117], [-979, 1704], [-317, 895], [-898, -10]], [[279295, 319470], [266, -2708], [-183, -3842]], [[279378, 312920], [-224, -635], [-333, -2784]], [[278821, 309501], [-4, 25]], [[278817, 309526], [-1052, 5966]], [[277765, 315492], [-32, 174]], [[212034, 317844], [-4, -8091]], [[212030, 309753], [0, -189]], [[212030, 309564], [-1939, 9], [5, 5614]], [[272114, 319225], [155, -4645]], [[272269, 314580], [-1, -1447]], [[272268, 313133], [-327, -920], [-286, 1649]], [[271655, 313862], [-588, 1137]], [[247236, 319438], [-214, 563], [88, -2170], [-319, -435], [282, -923], [-325, -596]], [[246748, 315877], [-1306, 75]], [[255542, 318824], [29, -627], [-316, -3711]], [[255255, 314486], [-1700, 275]], [[166087, 290611], [275, -965], [-300, -17], [25, 982]], [[167726, 304767], [-743, 1874], [-183, 2255], [-553, 1999]], [[167906, 318608], [691, -9433], [-104, -2110], [-328, 6], [-439, -2304]], [[247814, 317415], [-121, -2323], [126, -841]], [[247819, 314251], [0, -805]], [[247819, 313446], [-294, -29], [6, -1584], [-272, -12]], [[247259, 311821], [-473, 1880]], [[246786, 313701], [-38, 2176]], [[260834, 314890], [37, -1200]], [[260871, 313690], [-340, -2929], [-579, -3107]], [[259952, 307654], [-731, 15]], [[259221, 307669], [-12, 4226], [147, 897]], [[281096, 314238], [217, -1644], [-222, -1224]], [[281091, 311370], [-528, -425], [-618, 1726], [-567, 249]], [[223010, 315807], [-168, -930], [-208, -3035], [76, -1641]], [[222710, 310201], [-463, 2267], [-59, -1528], [-214, 361]], [[221974, 311301], [-293, 391], [-320, -718], [-413, 2380]], [[242115, 313118], [-438, 43], [-4, -817], [-514, 69], [-222, -772]], [[240937, 311641], [-46, 1096], [-301, 569]], [[240590, 313306], [-41, 1615], [-479, 873], [29, 2514], [-294, -7]], [[225834, 316616], [-145, -4], [-1, -3243]], [[225688, 313369], [-284, 3], [-145, -1082], [-582, 6], [-438, -808]], [[224239, 311488], [-1, 1890], [-456, -2], [0, 1620]], [[229058, 315785], [-744, -261], [154, -2163], [-579, 4]], [[227889, 313365], [-586, 3]], [[227303, 313368], [-1, 3244], [-295, 3]], [[264541, 315434], [-415, -1027]], [[264126, 314407], [-860, -257]], [[263266, 314150], [-1, 638]], [[266933, 316723], [-339, -3833]], [[266594, 312890], [-433, -921]], [[266161, 311969], [-142, 1338]], [[266019, 313307], [139, 814], [-135, 1989], [115, 1469], [-162, 1252]], [[168718, 285870], [613, -3553], [-361, 242], [-252, 3311]], [[168676, 294217], [663, -1336], [118, -1996], [-366, 420], [-148, 2046], [-267, 866]], [[170961, 302915], [-533, 9], [-383, -3729]], [[170045, 299195], [-299, 468], [-189, -1226], [-341, 667], [55, 1824], [-185, 2348], [-237, 1372], [-532, -107], [-201, -603], [-390, 829]], [[273788, 314042], [-1519, 538]], [[269786, 312942], [-1189, -5125]], [[268597, 307817], [-93, 1502]], [[268504, 309319], [-251, 3128], [-348, 457]], [[276707, 313833], [-152, -754], [-450, 18], [-676, -2348]], [[275429, 310749], [-117, 2669], [-216, 1956]], [[276430, 318948], [164, -2140], [207, -808], [-94, -2167]], [[277765, 315492], [-510, -6014]], [[277255, 309478], [-68, 131]], [[277187, 309609], [-190, 3521], [-290, 703]], [[256438, 316703], [-14, -6930]], [[256424, 309773], [0, -271]], [[256424, 309502], [-1169, 98]], [[255255, 309600], [0, 4886]], [[266019, 313307], [-494, 36]], [[265525, 313343], [-95, 2291], [59, 1740]], [[271655, 313862], [-387, -3129], [-316, -1220], [-138, -1800]], [[270814, 307713], [-619, 2359], [-220, 1485]], [[269975, 311557], [-189, 1385]], [[209510, 315194], [8, -9722]], [[209518, 305472], [-585, 10], [-2, -1637], [-1754, 86], [0, 1634], [-298, 10]], [[206879, 305575], [3, 4816]], [[249296, 314250], [-147, -1]], [[249149, 314249], [-1330, 2]], [[240590, 313306], [-340, 47], [-91, -2177], [-1279, 143]], [[238880, 311319], [36, 6451]], [[231399, 316600], [1, -3246], [-148, -1629], [-731, -2]], [[230521, 311723], [-297, 19], [0, 1596]], [[253027, 312561], [-593, 31]], [[252434, 312592], [1, 818], [-542, -5]], [[251893, 313405], [3, 1630]], [[216412, 317846], [0, -8101]], [[216412, 309745], [-260, 3]], [[216152, 309748], [-1207, 11]], [[214945, 309759], [-1, 8100]], [[217878, 317861], [-3, -8108]], [[217875, 309753], [-265, -6]], [[217610, 309747], [-1198, -2]], [[214945, 309759], [-258, 1]], [[214687, 309760], [-1212, -2]], [[213475, 309758], [1, 8078]], [[219353, 317847], [-5, -8079]], [[219348, 309768], [-278, 9]], [[219070, 309777], [-1195, -24]], [[220518, 314367], [0, -4631]], [[220518, 309736], [-1170, 32]], [[238880, 311319], [-3, -1068]], [[238877, 310251], [-196, 25]], [[238681, 310276], [-1273, 171]], [[237408, 310447], [14, 5874]], [[213475, 309758], [-250, -3]], [[213225, 309755], [-1195, -2]], [[265525, 313343], [-379, -1617]], [[265146, 311726], [-589, 2243], [6, 1187]], [[282602, 309349], [-10, 64]], [[282592, 309413], [10, -64]], [[283148, 312136], [-617, -2746]], [[282531, 309390], [-232, 1786], [-388, -117], [-188, -952]], [[281723, 310107], [-370, 469]], [[281353, 310576], [-262, 794]], [[237408, 310447], [-890, 102], [31, -3035]], [[236549, 307514], [-631, -50]], [[235918, 307464], [24, 5914]], [[257984, 314094], [-89, -4492]], [[257895, 309602], [-1471, 171]], [[267586, 313918], [-206, -1092], [-615, -311]], [[266765, 312515], [-171, 375]], [[227303, 313368], [-1, -4055]], [[227302, 309313], [-1606, 11]], [[225696, 309324], [-8, 4045]], [[232570, 314986], [1, -1620], [-301, -10], [1, -6508]], [[232271, 306848], [-593, 2]], [[231678, 306850], [-1158, 9]], [[230520, 306859], [1, 4864]], [[234616, 313367], [-304, 7], [0, -4907], [-291, 4], [-15, -1618]], [[234006, 306853], [-1735, -5]], [[246786, 313701], [-19, -2055], [-497, -862], [38, -1147], [-293, -1723], [-253, 397], [310, -1737], [-363, -408]], [[245709, 306166], [2, -23]], [[245711, 306143], [-453, 4]], [[245258, 306147], [92, 411], [79, 3639]], [[229350, 313351], [-148, -2], [-1, -3219], [-146, -6]], [[229055, 310124], [-301, 798], [-865, 13], [0, 2430]], [[224239, 311488], [147, -1345], [-2, -3288]], [[224384, 306855], [-433, -385], [-521, 1416]], [[223430, 307886], [-657, 27], [-63, 2288]], [[263266, 314150], [3, -2538]], [[263269, 311612], [-982, -375]], [[262287, 311237], [-273, 215], [96, 3410]], [[278817, 309526], [-155, -873]], [[278662, 308653], [-702, 873], [-466, -1310]], [[277494, 308216], [-239, 1262]], [[265146, 311726], [62, -1577]], [[265208, 310149], [-838, 20]], [[264370, 310169], [1, 856]], [[264371, 311025], [-245, 3382]], [[275429, 310749], [0, -39]], [[275429, 310710], [-371, -1301], [-162, -2338]], [[274896, 307071], [-379, -1287]], [[274517, 305784], [-288, -570], [-418, 2122], [121, 1598]], [[273932, 308934], [155, 2002], [-303, 1515]], [[212030, 309564], [-9, -8889]], [[212021, 300675], [-14, -4738]], [[212007, 295937], [-1275, -7]], [[210732, 295930], [1, 1617], [-581, -18], [4, 3037], [-348, -1], [0, 4886], [-290, 21]], [[251893, 313405], [-148, -263], [-98, -2422]], [[251647, 310720], [-1176, 275]], [[250471, 310995], [2, 2163]], [[259221, 307669], [-551, -1894]], [[258670, 305775], [-415, 2982]], [[258255, 308757], [-360, 845]], [[262003, 314866], [-203, -2819], [-429, -1225], [-147, -1565], [-209, 5]], [[261015, 309262], [-144, 4428]], [[262287, 311237], [-115, -5511]], [[262172, 305726], [-1045, -291]], [[261127, 305435], [-112, 3827]], [[204007, 308771], [-2, -8088], [-357, 6], [0, -3269], [-895, 189], [3, -3357]], [[202756, 294252], [-283, -80], [-3451, 20]], [[199022, 294192], [-9, 14575], [-24, 5924]], [[199022, 294192], [-801, 21], [0, -5147]], [[198221, 289066], [-2916, 137]], [[195305, 289203], [0, 10599]], [[255255, 309600], [-293, 46]], [[254962, 309646], [-1501, 262]], [[253461, 309908], [48, 2646]], [[221974, 311301], [-1, -5776]], [[221973, 305525], [-843, 203], [-612, 2378]], [[220518, 308106], [0, 1630]], [[273932, 308934], [-751, -1022], [-232, -721], [-385, 1197]], [[272564, 308388], [-296, 4745]], [[245258, 306147], [-220, -1242], [178, -1808], [-327, 48], [-478, 1054]], [[244411, 304199], [-66, 1223]], [[244345, 305422], [-235, 2561], [-507, 303], [19, 4630]], [[264371, 311025], [-903, 8], [-199, 579]], [[250471, 310995], [4, -4064]], [[250475, 306931], [-737, 17]], [[249738, 306948], [1, 538], [-590, 29]], [[249149, 307515], [0, 6734]], [[249149, 307515], [-1, -540], [-585, 14]], [[248563, 306989], [-568, -79]], [[247995, 306910], [2, 1972], [-166, 660], [-12, 3904]], [[267731, 313122], [-172, -4100]], [[267559, 309022], [-165, -649], [-348, 480], [-159, -755]], [[266887, 308098], [-122, 4417]], [[277187, 309609], [-200, -184], [-957, -3893]], [[276030, 305532], [-239, 1408], [128, 659], [-179, 3127], [-311, -16]], [[272564, 308388], [-61, -777]], [[272503, 307611], [-371, -2255]], [[272132, 305356], [-182, 81], [-533, 1971], [-394, -960]], [[271023, 306448], [-209, 1265]], [[261127, 305435], [65, -2173]], [[261192, 303262], [-366, -422]], [[260826, 302840], [-582, 504]], [[260244, 303344], [-292, 4310]], [[247116, 305288], [0, -1624]], [[247116, 303664], [-574, 36]], [[246542, 303700], [-8, 2441], [-825, 25]], [[247259, 311821], [2, -3022], [-144, 17], [-1, -3528]], [[247995, 306910], [-1, -1622], [-878, 0]], [[266161, 311969], [-151, -1209], [137, -1334]], [[266147, 309426], [-550, -3122]], [[265597, 306304], [-143, -537], [-540, 1289]], [[264914, 307056], [377, 2074], [-83, 1019]], [[252434, 312592], [-3, -7005]], [[252431, 305587], [-491, -270]], [[251940, 305317], [-293, 8]], [[251647, 305325], [0, 5395]], [[229055, 310124], [0, -2981]], [[229055, 307143], [-103, -1894]], [[228952, 305249], [-1645, 5]], [[227307, 305254], [-5, 4059]], [[230520, 306859], [-129, -799], [-366, 1]], [[230025, 306061], [-237, 1077], [-733, 5]], [[225696, 309324], [4, -2727]], [[225700, 306597], [-88, -540], [-543, 799], [-165, -1383]], [[224904, 305473], [-175, -372], [-345, 1754]], [[235918, 307464], [-20, -4633]], [[235898, 302831], [-24, -5642]], [[235874, 297189], [-725, 1210]], [[235149, 298399], [-87, 1119], [-235, -358], [-301, 2195], [-518, 1395]], [[234008, 302750], [-2, 4103]], [[240937, 311641], [-27, -4926]], [[240910, 306715], [-579, 118]], [[240331, 306833], [-389, 75], [-24, 1424], [-898, 816], [-143, 1103]], [[192648, 296055], [0, -2067], [-470, -22], [-762, -1597], [-16, -3435]], [[191400, 288934], [-518, -982], [-412, -2923], [-458, 4942], [-259, 4020]], [[189753, 293991], [-316, 3938], [-198, -1382], [-452, 2730], [42, 1283], [-343, 3366]], [[268504, 309319], [-576, -1452], [-270, 224]], [[267658, 308091], [-99, 931]], [[242221, 313104], [-71, -8013]], [[242150, 305091], [-288, -51]], [[241862, 305040], [-455, 1583], [-497, 92]], [[244345, 305422], [-785, 1743], [-49, -1485], [-582, -11], [0, -545]], [[242929, 305124], [-779, -33]], [[266887, 308098], [-133, -492]], [[266754, 307606], [-217, 1203], [-390, 617]], [[281353, 310576], [-256, -2617], [-334, -212], [-135, -1225], [-339, 132], [-50, -1712], [-247, -2039]], [[279992, 302903], [-1171, 6598]], [[269975, 311557], [-244, -1241], [240, -2298], [-54, -2070], [-167, -825]], [[269750, 305123], [-567, 148], [-179, -1082]], [[269004, 304189], [-407, 3628]], [[253461, 309908], [-84, -4366]], [[253377, 305542], [-946, 45]], [[223430, 307886], [-2, -7047]], [[223428, 300839], [-1456, 0]], [[221972, 300839], [1, 4686]], [[263252, 305383], [-219, 25]], [[263033, 305408], [-515, 59]], [[262518, 305467], [-346, 259]], [[263269, 311612], [-17, -6229]], [[264370, 310169], [-2, -2777]], [[264368, 307392], [-267, -204], [-179, -1893]], [[263922, 305295], [-670, 88]], [[271023, 306448], [-385, -3231]], [[270638, 303217], [-108, -157]], [[270530, 303060], [5, 560], [-727, -210], [-58, 1713]], [[281981, 302597], [-3, 82]], [[281978, 302679], [3, -82]], [[282531, 309390], [61, 23]], [[282602, 309349], [-405, -2626], [-165, -1819], [-109, 2614]], [[281923, 307518], [-200, 2589]], [[251647, 305325], [-876, -15]], [[250771, 305310], [-294, -4], [-2, 1625]], [[276030, 305532], [200, -730]], [[276230, 304802], [-500, -1758], [-394, 2382], [-444, 601], [4, 1044]], [[280269, 301329], [-18, 102]], [[280251, 301431], [18, -102]], [[281981, 302597], [-3, 82]], [[281923, 307518], [8, -4064], [-186, -1609], [-387, 485], [-737, -284], [-373, -588]], [[280248, 301458], [-33, 175]], [[280215, 301633], [-11, 68]], [[280204, 301701], [-212, 1202]], [[237408, 310447], [27, -3044], [293, -50], [-7, -3258]], [[237721, 304095], [-23, -4861], [-351, 60]], [[237347, 299294], [-4, 1]], [[237343, 299295], [-252, 2448], [-133, 5740], [-409, 31]], [[238681, 310276], [-66, -2358], [143, -158], [46, -2922], [169, -1709]], [[238973, 303129], [-231, -2]], [[238742, 303127], [-202, -247], [-819, 1215]], [[206879, 305575], [2, -12857], [-37, -4823], [-1146, -120]], [[205698, 287775], [-6, 3219], [-1134, -5], [-3, 1595], [-1724, 6]], [[202831, 292590], [-75, 1662]], [[240331, 306833], [-20, -6442]], [[240311, 300391], [-587, -611]], [[239724, 299780], [-512, 1234], [-239, 2115]], [[264914, 307056], [-97, -2181]], [[264817, 304875], [-449, 1092], [0, 1425]], [[254962, 309646], [-4, -5674]], [[254958, 303972], [1, -1619]], [[254959, 302353], [-880, 87]], [[254079, 302440], [-98, 2461], [-614, 116]], [[253367, 305017], [10, 525]], [[183362, 303915], [0, -11574]], [[183362, 292341], [-1739, 3], [0, 1619], [-864, -19], [-2, -8075], [-686, -61]], [[180071, 285808], [-439, 260], [-94, 887], [82, 3389], [-151, 600], [21, 1938], [272, 564]], [[179762, 293446], [283, 2148], [77, 2692], [-106, 4262], [275, 1900], [10, 1119]], [[181121, 309576], [282, -790], [1200, -587], [253, 1502], [507, 147]], [[219070, 309777], [-4, -8906]], [[219066, 300871], [-1455, -38]], [[217611, 300833], [-1, 8914]], [[220518, 308106], [-138, 101], [-4, -7330]], [[220376, 300877], [-1310, -6]], [[258255, 308757], [-186, -142], [-223, -2439], [-292, -747], [-162, -1946], [-429, -1122], [-130, -1067]], [[256833, 301294], [-358, 590], [-165, 1921]], [[256310, 303805], [109, -16], [5, 5713]], [[217611, 300833], [-1456, -59]], [[216155, 300774], [-3, 8974]], [[216155, 300774], [-1454, -108]], [[214701, 300666], [-14, 9094]], [[214701, 300666], [-1476, 9]], [[213225, 300675], [0, 9080]], [[277494, 308216], [-65, -784], [217, -4447], [468, -2796]], [[278114, 300189], [-479, -435], [-840, 1115], [-215, 921]], [[276580, 301790], [-276, 1145]], [[276304, 302935], [225, 772], [-299, 1095]], [[213225, 300675], [-1204, 0]], [[256310, 303805], [-1352, 167]], [[280269, 301329], [-18, 102]], [[280248, 301458], [-33, 175]], [[280204, 301701], [21, -472], [-685, -2075], [-529, -3190]], [[279011, 295964], [-269, -5], [-253, 2494]], [[278489, 298453], [-185, 3127], [-229, 1783], [245, 1597], [342, 3693]], [[278489, 298453], [-265, 205], [-88, 1173]], [[278136, 299831], [-22, 358]], [[266754, 307606], [118, -2920]], [[266872, 304686], [-494, -1390]], [[266378, 303296], [-72, 1226], [-571, 652], [-138, 1130]], [[227307, 305254], [-2, -3185]], [[227305, 302069], [-352, 1623], [-506, -2569], [-303, 758]], [[226144, 301881], [91, 1860], [-382, 233], [-153, 2623]], [[269004, 304189], [84, -1082]], [[269088, 303107], [-225, 528]], [[268863, 303635], [-374, -244]], [[268489, 303391], [-548, 1345]], [[267941, 304736], [-283, 3355]], [[267941, 304736], [-418, 57], [-368, -882]], [[267155, 303911], [-283, 775]], [[274517, 305784], [-85, -1864], [134, -4154], [-61, -615]], [[274505, 299151], [-581, 662], [-511, 1884]], [[273413, 301697], [-135, 2326], [-372, 1680], [-227, 41], [-176, 1867]], [[258670, 305775], [-61, -2960]], [[258609, 302815], [-230, -1971], [-471, -600], [9, -685]], [[257917, 299559], [-515, 1404], [-542, -471]], [[256860, 300492], [-27, 802]], [[221972, 300839], [4, -1864]], [[221976, 298975], [-230, 1202], [-391, 509], [-834, 191]], [[220521, 300877], [-145, 0]], [[224904, 305473], [0, -4595]], [[224904, 300878], [-1476, -39]], [[260244, 303344], [-448, -474], [-461, -1877]], [[259335, 300993], [-374, 2732], [-352, -910]], [[273413, 301697], [-85, -3219]], [[273328, 298478], [-403, -1011]], [[272925, 297467], [-503, 1412], [-567, 2766]], [[271855, 301645], [277, 3711]], [[249738, 306948], [6, -5485]], [[249744, 301463], [-729, -2], [-437, 570]], [[248578, 302031], [-15, 4958]], [[237343, 299295], [-645, 694], [-800, 2842]], [[271855, 301645], [-224, -1170]], [[271631, 300475], [-514, 966], [-162, 2030], [-317, -254]], [[264817, 304875], [-499, -1732]], [[264318, 303143], [-198, 104], [-7, -5871]], [[264113, 297376], [-299, 18], [-3, -1823]], [[263811, 295571], [-420, -901]], [[263391, 294670], [-672, 167]], [[262719, 294837], [116, 1164]], [[262835, 296001], [415, 1553], [228, 1602]], [[263478, 299156], [298, 1538], [245, 2560], [-99, 2041]], [[230025, 306061], [101, -881], [-211, -1085], [101, -2120]], [[230016, 301975], [-185, 351], [-328, -1483], [-268, 388], [-184, 1849]], [[229051, 303080], [-99, 2169]], [[244411, 304199], [-353, -700], [-26, -3601]], [[244032, 299898], [-1165, 156]], [[242867, 300054], [62, 5070]], [[276304, 302935], [-783, -2654], [-394, -673], [-382, -2307]], [[274745, 297301], [-240, 1850]], [[265597, 306304], [-143, -2281], [195, -1399]], [[265649, 302624], [-510, -2675]], [[265139, 299949], [-116, -620]], [[265023, 299329], [-659, 3102], [-46, 712]], [[248578, 302031], [0, -1381], [-586, -270], [-1, -1631]], [[247991, 298749], [-443, 543], [316, 1088], [-750, 39]], [[247114, 300419], [2, 3245]], [[250771, 305310], [3, -4877], [-150, -1369]], [[250624, 299064], [-878, -312]], [[249746, 298752], [-2, 2711]], [[231678, 306850], [150, -591], [1, -3197], [270, -1476], [225, -5]], [[232324, 301581], [-241, -630]], [[232083, 300951], [-248, 889], [-428, -565], [-250, -1798], [-558, -651]], [[230599, 298826], [-126, 948], [-567, 1262], [110, 939]], [[234008, 302750], [-177, 481], [-257, -1569]], [[233574, 301662], [-669, 199], [-133, 969], [-448, -1249]], [[241862, 305040], [-376, -47], [-11, -1571], [394, -3308]], [[241869, 300114], [-693, 134]], [[241176, 300248], [-865, 143]], [[226144, 301881], [-2, -7872]], [[226142, 294009], [-1232, -5]], [[224910, 294004], [-6, 6874]], [[266378, 303296], [-305, -1111]], [[266073, 302185], [-424, 439]], [[246542, 303700], [-6, -6913], [-291, -2], [0, -1617]], [[246245, 295168], [-1257, -5]], [[244988, 295163], [-45, 602]], [[244943, 295765], [269, 600], [-237, 1264], [283, 816], [-40, 1454], [303, -381], [-185, 3715], [560, 1251], [-185, 1659]], [[244943, 295765], [-41, -824], [-579, 867]], [[244323, 295808], [8, 4035], [-299, 55]], [[262518, 305467], [-156, -2441], [-200, -874]], [[262162, 302152], [-936, -50]], [[261226, 302102], [-34, 1160]], [[253367, 305017], [-116, -5835]], [[253251, 299182], [-739, -1765]], [[252512, 297417], [39, 554], [-611, 7], [-2, 2435]], [[251938, 300413], [2, 4904]], [[210732, 295930], [-588, -12], [-2, -3234], [-124, -7], [0, -8009], [-134, -3]], [[209884, 284665], [-2862, -34], [-27, -8244]], [[206995, 276387], [-1400, -33], [4, 8252], [101, 1], [-2, 3168]], [[263478, 299156], [-127, 1131], [-280, 34]], [[263071, 300321], [-38, 5087]], [[179762, 293446], [-4058, -182]], [[175704, 293264], [-2642, -4], [-586, 89], [-363, 1122], [-385, 245]], [[171728, 294716], [266, 2869], [-339, 972], [-382, 2958]], [[263071, 300321], [-494, -473]], [[262577, 299848], [-380, 581]], [[262197, 300429], [-35, 1723]], [[270530, 303060], [-303, -447], [112, -1813], [-159, -1241], [160, -3138]], [[270340, 296421], [-326, 1802]], [[270014, 298223], [-319, 2645], [-607, 2239]], [[251938, 300413], [-589, 25], [0, -1082], [-287, -277]], [[251062, 299079], [-438, -15]], [[229051, 303080], [-28, -98]], [[229023, 302982], [-419, -2885], [-33, -1358], [-271, 1490], [50, 1869], [-343, -239], [-176, -1290], [-249, 389], [-61, 1401]], [[227521, 302359], [-216, -290]], [[242867, 300054], [0, -1627]], [[242867, 298427], [-989, 64]], [[241878, 298491], [-9, 1623]], [[254079, 302440], [15, -7371]], [[254094, 295069], [-915, 185]], [[253179, 295254], [72, 3928]], [[268489, 303391], [-191, -580], [-387, -2962], [106, -885]], [[268017, 298964], [-130, -738]], [[267887, 298226], [-343, 97], [-450, 1172]], [[267094, 299495], [12, 1605]], [[267106, 301100], [49, 2811]], [[189753, 293991], [-1506, -3], [-6, -4849], [-1376, -19], [-350, 1601], [-4, -14590]], [[186511, 276131], [-3149, -34]], [[183362, 276097], [0, 16244]], [[267106, 301100], [-728, 2196]], [[238742, 303127], [-74, -8950]], [[238668, 294177], [-668, 109]], [[238000, 294286], [-287, 2380]], [[237713, 296666], [-388, 1100], [22, 1528]], [[256860, 300492], [-290, -2959], [-339, -792], [-245, -1878]], [[255986, 294863], [-143, 1385], [-293, 274]], [[255550, 296522], [0, 1620], [-291, 56], [-9, 3268], [-291, 887]], [[268863, 303635], [139, -2859], [323, -3557]], [[269325, 297219], [-471, -580]], [[268854, 296639], [-87, -161]], [[268767, 296478], [-371, 1044], [-216, -422], [-163, 1864]], [[227521, 302359], [-8, -8970]], [[227513, 293389], [-1201, 1]], [[226312, 293390], [-170, 619]], [[259335, 300993], [56, -1317], [-281, -1721]], [[259110, 297955], [-211, -1709], [70, -886], [-507, -2768]], [[258462, 292592], [1, 2075], [-386, 811]], [[258077, 295478], [-160, 4081]], [[247114, 300419], [-4, -8972]], [[247110, 291447], [-285, -6], [1, -1091], [-449, -9]], [[246377, 290341], [-133, 6], [1, 4821]], [[270014, 298223], [-538, -798]], [[269476, 297425], [-151, -206]], [[271631, 300475], [-1005, -5255]], [[270626, 295220], [-44, 239]], [[270582, 295459], [-242, 962]], [[265023, 299329], [-257, -2573], [-190, 586]], [[264576, 297342], [-271, 23]], [[264305, 297365], [-192, 11]], [[260085, 295669], [3, 546], [-557, 17], [-159, 1640], [-262, 83]], [[260826, 302840], [-296, -1219], [-6, -4236], [-439, -1716]], [[267094, 299495], [-351, -1180]], [[266743, 298315], [-277, 2223]], [[266466, 300538], [-393, 1647]], [[261226, 302102], [134, -4629]], [[261360, 297473], [95, -3169]], [[261455, 294304], [-945, 242]], [[260510, 294546], [-581, 51]], [[259929, 294597], [156, 1072]], [[235149, 298399], [-2, -6962]], [[235147, 291437], [-173, 647]], [[234974, 292084], [-222, 645], [-660, -166]], [[234092, 292563], [-504, -210]], [[233588, 292353], [-6, 48]], [[233582, 292401], [-8, 9261]], [[239724, 299780], [-34, -6034]], [[239690, 293746], [-694, -159]], [[238996, 293587], [-328, 590]], [[230599, 298826], [-15, -6106]], [[230584, 292720], [-1253, 143]], [[229331, 292863], [-305, 203]], [[229026, 293066], [-3, 9916]], [[229026, 293066], [-1224, 262]], [[227802, 293328], [-289, 61]], [[237713, 296666], [-606, -1072]], [[237107, 295594], [-319, 701], [-638, -835], [-276, 1729]], [[276580, 301790], [-335, -2180], [7, -1182], [-302, -3863]], [[275950, 294565], [-336, -991]], [[275614, 293574], [-478, 40], [-285, 2097]], [[274851, 295711], [-106, 1590]], [[171728, 294716], [-240, -2195]], [[171488, 292521], [-527, 2874], [-608, 2125], [-308, 1675]], [[233582, 292401], [-515, 1393], [-746, 743], [-270, -627]], [[232051, 293910], [32, 7041]], [[266466, 300538], [-488, -4111]], [[265978, 296427], [-652, 2740]], [[265326, 299167], [-187, 782]], [[255550, 296522], [-579, 144], [-98, -1640], [-485, 58]], [[254388, 295084], [-294, -15]], [[262197, 300429], [-36, -1812], [-801, -1144]], [[249746, 298752], [0, -823]], [[249746, 297929], [-780, -17]], [[248966, 297912], [-952, 5]], [[248014, 297917], [-23, 832]], [[278136, 299831], [-261, -1729], [-65, -2062], [-295, -1491], [-382, -3556]], [[277133, 290993], [-221, 469], [-599, 3177], [-363, -74]], [[232051, 293910], [-2, -967]], [[232049, 292943], [-1216, -1078]], [[230833, 291865], [-249, 855]], [[274851, 295711], [-156, 130], [-298, -1759], [-415, 2479], [-367, 86], [-287, 1831]], [[272925, 297467], [-517, -3023]], [[272408, 294444], [-1070, -5441]], [[271338, 289003], [-265, 919]], [[271073, 289922], [-257, 2317], [43, 1727], [-233, 1254]], [[258077, 295478], [-440, -1479], [-434, -2505], [-547, -1592]], [[256656, 289902], [-109, 8]], [[256547, 289910], [-268, 1112], [-471, 3450], [178, 391]], [[220521, 300877], [16, -8165]], [[220537, 292712], [-1467, 9]], [[219070, 292721], [-4, 8150]], [[221976, 298975], [5, -6234]], [[221981, 292741], [-1444, -29]], [[224910, 294004], [2, -1314]], [[224912, 292690], [-1486, 25]], [[223426, 292715], [2, 8124]], [[219070, 292721], [-1454, -13]], [[217616, 292708], [-5, 8125]], [[217616, 292708], [-1442, -46]], [[216174, 292662], [-19, 8112]], [[223426, 292715], [-1445, 26]], [[216174, 292662], [-1446, -96]], [[214728, 292566], [-27, 8100]], [[213225, 300675], [57, -8129]], [[213282, 292546], [-1287, -1]], [[211995, 292545], [12, 3392]], [[214728, 292566], [-1446, -20]], [[241176, 300248], [-11, -1320], [-519, -4119], [192, -1475], [382, -1185]], [[241220, 292149], [-1146, 189]], [[240074, 292338], [-392, 56], [8, 1352]], [[266743, 298315], [382, -3066], [-30, -933]], [[267095, 294316], [-707, -914]], [[266388, 293402], [-414, 1708]], [[265974, 295110], [4, 1317]], [[262719, 294837], [-459, -1602]], [[262260, 293235], [-776, 49]], [[261484, 293284], [-29, 1020]], [[262577, 299848], [-12, -3860], [270, 13]], [[248014, 297917], [76, -4060], [-205, -781], [1, -1556]], [[247886, 291520], [-437, -568]], [[247449, 290952], [-227, -1244], [-112, 1739]], [[252512, 297417], [69, -2402], [-507, -278]], [[252074, 294737], [0, 1098], [-968, -57]], [[251106, 295778], [-44, 3301]], [[241878, 298491], [54, -3824], [-182, -2391], [74, -1398]], [[241824, 290878], [-231, -522], [-373, 1793]], [[244323, 295808], [-11, -3254]], [[244312, 292554], [-1484, 173]], [[242828, 292727], [39, 5700]], [[264965, 295106], [-389, 2236]], [[265326, 299167], [-46, -1733], [-315, -2328]], [[278269, 287761], [-76, 264]], [[278193, 288025], [76, -264]], [[279011, 295964], [-403, -3615], [-92, -2363], [-262, 1132], [231, -2620], [-212, -590], [-375, 806]], [[277898, 288714], [-123, 574]], [[277775, 289288], [-642, 1705]], [[195305, 289203], [0, -8030]], [[195305, 281173], [-1, -6539]], [[195304, 274634], [-185, -3]], [[195119, 274631], [-313, 2178], [42, 3573], [-197, 582], [-595, 5810], [0, 10694]], [[267887, 298226], [124, -662], [-175, -1445], [3, -2071]], [[267839, 294048], [-421, -2127]], [[267418, 291921], [-323, 2395]], [[253179, 295254], [-83, -4573]], [[253096, 290681], [-1016, -27]], [[252080, 290654], [-6, 4083]], [[265974, 295110], [21, -727], [-419, -925], [-105, -1288]], [[265471, 292170], [-170, 1414]], [[265301, 293584], [-336, 1522]], [[251106, 295778], [-195, -538]], [[250911, 295240], [-465, -211], [-350, -1146]], [[250096, 293883], [-350, 16], [0, 4030]], [[268767, 296478], [-480, -2908]], [[268287, 293570], [-448, 478]], [[237107, 295594], [0, -5231]], [[237107, 290363], [-340, 756], [-196, -1322], [-639, 965], [-521, -444]], [[235411, 290318], [-264, 1119]], [[275614, 293574], [-88, -2689], [-301, -778]], [[275225, 290107], [-353, 382], [-40, 1051], [-800, -2860]], [[274032, 288680], [-22, -73]], [[274010, 288607], [-398, 2353], [-785, 2546]], [[272827, 293506], [-419, 938]], [[242828, 292727], [23, -1854], [-369, -1417], [-65, -1108]], [[242417, 288348], [-241, 1667], [-352, 863]], [[270582, 295459], [-741, -3543]], [[269841, 291916], [-395, 3623], [30, 1886]], [[259929, 294597], [-147, 0], [-211, -3807], [-383, 40], [-157, -3573]], [[259031, 287257], [-882, -27]], [[258149, 287230], [-35, 1333], [210, 2008], [198, 283], [-60, 1738]], [[250096, 293883], [-202, -504], [0, -2742]], [[249894, 290637], [-533, -8]], [[249361, 290629], [-5, 2179], [-385, 256], [-5, 4848]], [[249361, 290629], [-291, -1323]], [[249070, 289306], [-1184, 2214]], [[269841, 291916], [-165, -788]], [[269676, 291128], [-84, -5]], [[269592, 291123], [-424, 846], [-314, 4670]], [[195119, 274631], [-3726, 22]], [[191393, 274653], [0, 1609]], [[191393, 276262], [7, 12672]], [[264305, 297365], [79, -1214], [-282, -4274]], [[264102, 291877], [-95, 1]], [[264007, 291878], [19, 2058], [-215, 1635]], [[265301, 293584], [-113, -1286], [-385, -1433]], [[264803, 290865], [-134, 697], [-567, 315]], [[238000, 294286], [54, -4237], [-202, -2132], [-208, 86], [128, -2330]], [[237772, 285673], [-29, 1]], [[237743, 285674], [-636, -3]], [[237107, 285671], [0, 4692]], [[269592, 291123], [-134, -693]], [[269458, 290430], [-356, 976], [-547, -1372]], [[268555, 290034], [-268, 3536]], [[256547, 289910], [-603, -2119], [-101, -2362], [-288, -52]], [[255555, 285377], [-818, 63]], [[254737, 285440], [-325, 195], [-15, 2538]], [[254397, 288173], [-9, 6911]], [[211995, 292545], [-22, -7994]], [[211973, 284551], [0, -8132]], [[211973, 276419], [1, -8101]], [[211974, 268318], [0, -1611], [-730, -3]], [[211244, 266704], [-1105, -3]], [[210139, 266701], [0, 9724], [-254, -1], [-1, 8241]], [[252080, 290654], [-402, -8]], [[251678, 290646], [-765, -8]], [[250913, 290638], [-2, 4602]], [[244988, 295163], [-59, -1673], [289, 735], [-25, -3356], [150, -2943], [-317, -598], [225, -984], [-128, -819]], [[245123, 285525], [1, -136]], [[245124, 285389], [-272, 19]], [[244852, 285408], [-481, 19]], [[244371, 285427], [-67, -3]], [[244304, 285424], [8, 7130]], [[264007, 291878], [-125, -1789], [-179, 18]], [[263703, 290107], [-245, 1867], [-67, 2696]], [[258149, 287230], [-74, -1530]], [[258075, 285700], [-258, 915], [-757, 36], [1, -408]], [[257061, 286243], [-402, 2157], [-3, 1502]], [[271073, 289922], [-669, -320], [-229, 1237], [-260, -547]], [[269915, 290292], [-239, 836]], [[254397, 288173], [-931, -2936]], [[253466, 285237], [-470, -87]], [[252996, 285150], [100, 5531]], [[250913, 290638], [-58, -1637], [-291, -9], [-3, -1642], [-289, -10]], [[250272, 287340], [5, 3291], [-383, 6]], [[246377, 290341], [40, -3234]], [[246417, 287107], [-592, 20], [0, -1670]], [[245825, 285457], [-702, 68]], [[266388, 293402], [-34, -4888]], [[266354, 288514], [-753, -748]], [[265601, 287766], [-17, 903]], [[265584, 288669], [-113, 3501]], [[263703, 290107], [-14, -676]], [[263689, 289431], [-975, 45], [-28, -605]], [[262686, 288871], [-213, 626]], [[262473, 289497], [-213, 3738]], [[277775, 289288], [-200, -1209], [-345, -447], [-431, -3536]], [[276799, 284096], [-357, -1958], [-73, 1501]], [[276369, 283639], [-170, -184], [-119, 1854], [-263, 407]], [[275817, 285716], [-479, 2445], [-113, 1946]], [[175704, 293264], [8, -6544], [-64, -13], [-10, -8500]], [[175638, 278207], [-2839, -1563], [17, 2580], [-321, 834], [-130, 1949], [82, 972], [-206, 4489], [-531, 4208], [-222, 845]], [[261484, 293284], [160, -5559]], [[261644, 287725], [10, -399]], [[261654, 287326], [-1004, -14]], [[260650, 287312], [-168, -13]], [[260482, 287299], [28, 7247]], [[260482, 287299], [-991, -305]], [[259491, 286994], [-460, 263]], [[233588, 292353], [-6, -56]], [[233582, 292297], [-853, -556], [-398, -900], [-290, -1445]], [[232041, 289396], [8, 3547]], [[272827, 293506], [-15, -5200], [98, -785]], [[272910, 287521], [-478, -195], [-495, 933], [-201, -1171]], [[271736, 287088], [-363, 872], [-35, 1043]], [[267418, 291921], [45, -835], [-297, -952], [-55, -1334]], [[267111, 288800], [-431, -34]], [[266680, 288766], [-326, -252]], [[202831, 292590], [15, -6293]], [[202846, 286297], [-1525, -4281], [1, -812], [-1146, 19], [-2, -3253]], [[200174, 277970], [-860, -3]], [[199314, 277967], [-359, 449], [44, 2766], [-165, 3253], [-162, 392], [-103, 4258], [-348, -19]], [[238996, 293587], [-215, -3465], [-109, 32], [-25, -4497]], [[238647, 285657], [-84, 2]], [[238563, 285659], [-791, 14]], [[268555, 290034], [21, -284]], [[268576, 289750], [-391, -1857], [-455, -1077]], [[267730, 286816], [-127, 1308], [-492, 676]], [[183362, 276097], [1, -8677]], [[183363, 267420], [-4124, 8474], [12, 2286], [251, 1896]], [[179502, 280076], [536, 716], [179, 2808], [-146, 2208]], [[191393, 276262], [-1966, -34], [0, -193], [-2916, 96]], [[226312, 293390], [-10, -8052]], [[226302, 285338], [-375, 38]], [[225927, 285376], [-1032, 85]], [[224895, 285461], [17, 7229]], [[240074, 292338], [-28, -6700]], [[240046, 285638], [-697, 10]], [[239349, 285648], [-702, 9]], [[265584, 288669], [-611, 417]], [[264973, 289086], [-229, 4]], [[264744, 289090], [59, 1775]], [[274010, 288607], [-793, -2801]], [[273217, 285806], [-307, 1715]], [[179502, 280076], [-3864, -1869]], [[227802, 293328], [-42, -8197]], [[227760, 285131], [-407, 73]], [[227353, 285204], [-1051, 134]], [[229331, 292863], [-27, -7781]], [[229304, 285082], [-524, -54]], [[228780, 285028], [-1020, 103]], [[262473, 289497], [-829, -1772]], [[232039, 284934], [-231, 5], [-115, -1983], [146, -673]], [[231839, 282283], [-397, 23]], [[231442, 282306], [-615, 60]], [[230827, 282366], [1, 2607]], [[230828, 284973], [5, 6892]], [[232041, 289396], [-2, -4462]], [[230828, 284973], [-612, 12]], [[230216, 284985], [-912, 97]], [[219070, 292721], [-6, -8097]], [[219064, 284624], [-380, 9]], [[218684, 284633], [-1066, 127]], [[217618, 284760], [-2, 7948]], [[220537, 292712], [6, -8141]], [[220543, 284571], [-433, -2]], [[220110, 284569], [-1046, 55]], [[234974, 292084], [-30, -7088]], [[234944, 284996], [-291, 1575], [-562, -613]], [[234091, 285958], [1, 6605]], [[217618, 284760], [-377, -125]], [[217241, 284635], [-1069, -47]], [[216172, 284588], [2, 8074]], [[223426, 292715], [8, -8204]], [[223434, 284511], [-404, 3]], [[223030, 284514], [-1045, 0]], [[221985, 284514], [-4, 8227]], [[224895, 285461], [-2, -1035], [-413, 37]], [[224480, 284463], [-1046, 48]], [[221985, 284514], [-394, -1]], [[221591, 284513], [-1048, 58]], [[244304, 285424], [-1696, 42]], [[242608, 285466], [-191, 2882]], [[216172, 284588], [-373, 14]], [[215799, 284602], [-1072, -38]], [[214727, 284564], [1, 8002]], [[206995, 276387], [10, -9680]], [[207005, 266707], [-196, -1]], [[206809, 266706], [-3008, 34]], [[203801, 266740], [-1057, -20]], [[202744, 266720], [2, 17811], [100, 1766]], [[213282, 292546], [0, -8000]], [[213282, 284546], [-1309, 5]], [[214727, 284564], [-369, -15]], [[214358, 284549], [-1076, -3]], [[234091, 285958], [-73, -393]], [[234018, 285565], [-60, -961], [-377, 13]], [[233581, 284617], [1, 7680]], [[242608, 285466], [-1828, 114]], [[240780, 285580], [-734, 58]], [[233581, 284617], [-993, -40]], [[232588, 284577], [-549, 357]], [[235411, 290318], [-5, -7247]], [[235406, 283071], [-145, -7]], [[235261, 283064], [-39, 472]], [[235222, 283536], [-278, 1460]], [[249070, 289306], [-206, -1882], [-208, -3399], [-189, -953]], [[248467, 283072], [-1109, 2439]], [[247358, 285511], [-151, 1938], [245, 381], [-3, 3122]], [[264744, 289090], [-346, -258]], [[264398, 288832], [-567, 369], [-126, -463]], [[263705, 288738], [-16, 693]], [[275817, 285716], [197, -1749], [-222, -2037], [-677, 747]], [[275115, 282677], [4, 3611], [-520, 96], [-567, 2296]], [[247358, 285511], [-237, -30], [-2, -1592], [-572, -18]], [[246547, 283871], [-9, 3240], [-121, -4]], [[269458, 290430], [-641, -2764]], [[268817, 287666], [-241, 2084]], [[269915, 290292], [98, -679], [-163, -3128], [52, -2327], [-122, -1900]], [[269780, 282258], [-329, -1370]], [[269451, 280888], [-242, 1119]], [[269209, 282007], [-81, 3665], [-311, 1994]], [[237107, 285671], [0, -2571]], [[237107, 283100], [-1701, -29]], [[271736, 287088], [202, -924]], [[271938, 286164], [-630, -2538]], [[271308, 283626], [-251, 828], [-618, -686], [-182, -1941]], [[270257, 281827], [-477, 431]], [[252996, 285150], [-21, -1157]], [[252975, 283993], [-1295, -57]], [[251680, 283936], [-2, 6710]], [[251680, 283936], [-283, 10]], [[251397, 283946], [-1128, 95]], [[250269, 284041], [3, 3299]], [[250269, 284041], [-1132, -32], [-12, -840]], [[249125, 283169], [-658, -97]], [[257061, 286243], [15, -3977], [-399, 14]], [[256677, 282280], [-836, -104], [-284, 802]], [[255557, 282978], [-2, 2399]], [[269209, 282007], [-689, -992], [-95, 756], [-402, -936]], [[268023, 280835], [-353, 3484]], [[267670, 284319], [60, 2497]], [[263705, 288738], [-84, -3972]], [[263621, 284766], [55, -1653]], [[263676, 283113], [-539, -691]], [[263137, 282422], [-449, 518]], [[262688, 282940], [-2, 5931]], [[262688, 282940], [-898, -37]], [[261790, 282903], [-136, 4423]], [[199314, 277967], [-878, -18], [0, -1622], [-852, -5], [-2, -8136], [36, -4019]], [[197618, 264167], [-857, -7], [-37, 4023], [3, 8134], [-307, 3], [2, 1613], [-576, 1], [-4, 3233], [-537, 6]], [[264398, 288832], [-62, -3685]], [[264336, 285147], [-715, -381]], [[264973, 289086], [-7, -4742], [-221, -293]], [[264745, 284051], [2, 1069], [-411, 27]], [[265601, 287766], [265, -1984], [29, -1347]], [[265895, 284435], [-506, -1945]], [[265389, 282490], [-646, 23]], [[264743, 282513], [2, 1538]], [[267670, 284319], [-205, 1160], [-587, -1540]], [[266878, 283939], [-198, 4827]], [[266878, 283939], [-137, -520]], [[266741, 283419], [-297, -993]], [[266444, 282426], [-403, 800], [-146, 1209]], [[275274, 275950], [263, 628]], [[275537, 276578], [-263, -628]], [[275115, 282677], [-128, -2423], [77, -2306]], [[275064, 277948], [21, -1800], [-453, 1074]], [[274632, 277222], [-397, 2101], [-304, 486]], [[273931, 279809], [-206, 2389], [-508, 3608]], [[273217, 285806], [-382, -1361], [-117, -2128], [-399, -1751]], [[272319, 280566], [-381, 5598]], [[254737, 285440], [-323, -2639], [122, -3923], [141, -1191], [-210, -1224]], [[254467, 276463], [-114, 140]], [[254353, 276603], [-184, 1820], [-373, -689], [-63, 3380], [-367, 2777], [100, 1346]], [[261790, 282903], [136, -2309]], [[261926, 280594], [-1276, -335]], [[260650, 280259], [0, 7053]], [[260650, 280259], [-289, -578], [3, -1890]], [[260364, 277791], [-286, -278], [4, -1615], [-249, -23]], [[259833, 275875], [-16, 4870], [-320, 8]], [[259497, 280753], [-6, 6241]], [[259497, 280753], [-1026, -28]], [[258471, 280725], [-230, 1151], [-166, 3824]], [[246547, 283871], [-291, -1615], [175, -342], [-73, -2890]], [[246358, 279024], [-674, 12], [3, 3264], [138, 3157]], [[235222, 283536], [-1204, -38]], [[234018, 283498], [0, 2067]], [[258471, 280725], [-105, -859]], [[258366, 279866], [-840, -31], [-2, -820], [-562, 46]], [[256962, 279061], [-281, -17], [0, 1226]], [[256681, 280270], [-4, 2010]], [[202744, 266720], [-672, -15], [-49, -2500], [301, -1531]], [[202324, 262674], [-2142, -6]], [[200182, 262668], [-8, 15302]], [[272319, 280566], [44, -2784]], [[272363, 277782], [-442, -1977]], [[271921, 275805], [-817, 2976]], [[271104, 278781], [-65, 753], [269, 4092]], [[273931, 279809], [-121, -807]], [[273810, 279002], [-90, -725], [-314, 2440], [-742, -3663]], [[272664, 277054], [-301, 728]], [[248467, 283072], [-232, -2682], [-637, -1400], [-479, -1603]], [[247119, 277387], [-290, -1241]], [[246829, 276146], [-463, 2071]], [[246366, 278217], [-8, 807]], [[238701, 271113], [-400, 6]], [[238301, 271119], [-149, 1513], [-322, 445], [-466, -2739], [-255, 8]], [[237109, 270346], [-2, 3654]], [[237107, 274000], [0, 5599]], [[237107, 279599], [0, 3501]], [[237743, 285674], [-72, -1364], [156, -1652], [-2, -3964], [475, -5513], [401, -2068]], [[238563, 285659], [193, -3036], [29, -8285], [191, -5]], [[238976, 274333], [-155, -3244]], [[238821, 271089], [-120, 24]], [[239516, 277586], [89, -2415], [-250, -840], [-379, 2]], [[239349, 285648], [4, -5606], [141, -2], [22, -2454]], [[240778, 280837], [-287, -14], [-145, -3235]], [[240346, 277588], [-830, -2]], [[240780, 285580], [-2, -4743]], [[242619, 280157], [-575, -2639], [-400, 30]], [[241644, 277548], [0, 1623], [-290, 937], [-576, 729]], [[242608, 285466], [11, -5309]], [[234018, 283498], [-3, -6187]], [[234015, 277311], [-896, 740], [-334, 1437]], [[232785, 279488], [-114, 619]], [[232671, 280107], [-83, 4470]], [[246366, 278217], [-29, -987], [-362, 175], [-2, -2477], [-252, 41], [-35, 2444], [-221, 12]], [[245465, 277425], [-297, 1279], [258, 1421], [-227, 255], [-6, 1864], [185, 934], [-62, 1883], [-223, -1603], [31, 1931]], [[268023, 280835], [-29, -952]], [[267994, 279883], [-750, -2311]], [[267244, 277572], [-503, 5847]], [[244371, 285427], [-163, -2146], [-308, -2022], [-90, -2138]], [[243810, 279121], [-368, -2106], [-401, -900]], [[243041, 276115], [-25, 3010], [-397, 1032]], [[255557, 282978], [-143, -817], [-4, -3254], [-143, -3], [2, -3233]], [[255269, 275671], [-569, -21], [-233, 813]], [[244852, 285408], [-216, -2699], [-7, -2067], [-283, -3111]], [[244346, 277531], [-420, 5], [-116, 1585]], [[225927, 285376], [-30, -8276]], [[225897, 277100], [-4, -879]], [[225893, 276221], [-1134, 27]], [[224759, 276248], [-281, 40]], [[224478, 276288], [2, 8175]], [[245465, 277425], [-76, -261]], [[245389, 277164], [-175, -453], [-903, -2]], [[244311, 276709], [35, 822]], [[227353, 285204], [-17, -8167]], [[227336, 277037], [-186, 1]], [[227150, 277038], [-1253, 62]], [[264743, 282513], [-219, -2967]], [[264524, 279546], [-235, 1090]], [[264289, 280636], [-264, 581], [-349, 1896]], [[254353, 276603], [-498, -1835], [-40, -1058], [323, -1231]], [[254138, 272479], [-1368, -36]], [[252770, 272443], [91, 5017]], [[252861, 277460], [114, 6533]], [[228780, 285028], [-17, -8118]], [[228763, 276910], [-136, 16]], [[228627, 276926], [-1291, 111]], [[230216, 284985], [-7, -3142]], [[230209, 281843], [-30, -4995]], [[230179, 276848], [-1416, 62]], [[230827, 282366], [0, -512], [-618, -11]], [[232671, 280107], [-599, 940], [-233, 1236]], [[218684, 284633], [-14, -8156]], [[218670, 276477], [-1431, 44]], [[217239, 276521], [2, 8114]], [[210139, 266701], [-717, -2]], [[209422, 266699], [-123, -1]], [[209299, 266698], [-2294, 9]], [[220110, 284569], [-7, -8139]], [[220103, 276430], [-1433, 47]], [[217239, 276521], [0, -68]], [[217239, 276453], [-1432, 22]], [[215807, 276475], [-8, 8127]], [[215807, 276475], [-1432, -37]], [[214375, 276438], [-17, 8111]], [[214375, 276438], [-24, -1]], [[214351, 276437], [-2378, -18]], [[221591, 284513], [0, -8235]], [[221591, 276278], [-47, 0]], [[221544, 276278], [-1441, 152]], [[223030, 284514], [0, -8234]], [[223030, 276280], [-52, 1]], [[222978, 276281], [-1387, -3]], [[224478, 276288], [-1448, -8]], [[271104, 278781], [-447, -785]], [[270657, 277996], [-226, 1046], [-174, 2785]], [[266444, 282426], [-235, -3362]], [[266209, 279064], [-288, 518]], [[265921, 279582], [-345, 931], [-187, 1977]], [[251397, 283946], [0, -6508]], [[251397, 277438], [-1123, -10]], [[250274, 277428], [-5, 6613]], [[250274, 277428], [-14, -1]], [[250260, 277427], [-1136, 17], [0, 1059]], [[249124, 278503], [1, 4666]], [[252861, 277460], [-1464, -22]], [[235261, 283064], [11, -1602]], [[235272, 281462], [1, -2617]], [[235273, 278845], [-795, -2144]], [[234478, 276701], [-463, 610]], [[267244, 277572], [-756, -2455]], [[266488, 275117], [-124, 3123], [-155, 824]], [[264289, 280636], [-142, -523], [-197, -2955], [-99, 3]], [[263851, 277161], [-538, -506]], [[263313, 276655], [-159, -302]], [[263154, 276353], [0, 1215]], [[263154, 277568], [-17, 4854]], [[237107, 279599], [-279, 901], [-87, -871], [-299, 1006], [-286, -1036], [-342, 12], [-542, 1851]], [[249124, 278503], [-151, -880]], [[248973, 277623], [-205, -33], [-579, -3455]], [[248189, 274135], [-495, 8], [0, 1630], [-575, 8], [0, 1606]], [[256681, 280270], [-69, -2497], [-191, -1960], [-869, -125], [4, -3256], [-143, -8]], [[255413, 272424], [-143, -6], [-1, 3253]], [[263154, 277568], [-1077, 449]], [[262077, 278017], [-151, 2577]], [[265921, 279582], [1, -27]], [[265922, 279555], [-184, 34], [-659, -3026]], [[265079, 276563], [-284, 2687], [-271, 296]], [[231442, 282306], [2, -8953]], [[231444, 273353], [-1048, 20]], [[230396, 273373], [-217, 3475]], [[270657, 277996], [-80, -1270]], [[270577, 276726], [-329, -340], [-291, -3112], [55, -642]], [[270012, 272632], [0, -5]], [[270012, 272627], [-338, -490], [-153, 1146]], [[269521, 273283], [74, 1607], [-301, 1073], [-437, 275]], [[268857, 276238], [507, 2501], [87, 2149]], [[232785, 279488], [1, -3857], [404, -2322]], [[233190, 273309], [-1746, 44]], [[268857, 276238], [-59, 1856], [-542, 1928], [-262, -139]], [[237107, 274000], [-847, -1143], [-402, 1182]], [[235858, 274039], [-245, 1]], [[235613, 274040], [-341, 532], [1, 4273]], [[197618, 264167], [24, -1497]], [[197642, 262670], [0, -8384], [-2345, -23]], [[195297, 254263], [7, 20371]], [[259833, 275875], [19, -769], [-399, -590]], [[259453, 274516], [-479, 386], [-118, 1013], [-485, -1586]], [[258371, 274329], [-5, 5537]], [[241644, 277548], [-1, -1627]], [[241643, 275921], [-578, 17], [3, -798], [-433, -2]], [[240635, 275138], [-285, 12], [-4, 2438]], [[273810, 279002], [98, -1654]], [[273908, 277348], [8, -2098]], [[273916, 275250], [-11, -827]], [[273905, 274423], [15, -90]], [[273920, 274333], [-20, -184]], [[273900, 274149], [-60, -391]], [[273840, 273758], [-438, -2518], [192, -2128]], [[273594, 269112], [-42, -1026], [-431, 800]], [[273121, 268886], [-76, 2024]], [[273045, 270910], [44, 2084], [-425, 4060]], [[265079, 276563], [-41, -439]], [[265038, 276124], [-259, 143], [-399, -2643]], [[264380, 273624], [-384, 780]], [[263996, 274404], [-145, 2757]], [[262077, 278017], [223, -1817]], [[262300, 276200], [-162, -699], [-765, -80], [10, -1075], [-289, -21]], [[261094, 274325], [-155, 1623], [-575, 1843]], [[256962, 279061], [29, -2256], [255, -3763]], [[257246, 273042], [-260, -2156], [4, -3297]], [[256990, 267589], [-755, -7], [-207, 1771], [-614, 2276]], [[255414, 271629], [-1, 795]], [[243041, 276115], [-251, -2320], [-86, -1940]], [[242704, 271855], [-773, 7]], [[241931, 271862], [-288, 2425], [0, 1634]], [[268650, 272453], [-454, -2107]], [[268196, 270346], [-296, -907], [-412, 5134]], [[267488, 274573], [-244, 2999]], [[268857, 276238], [-273, -3364], [66, -421]], [[258371, 274329], [-238, -1220]], [[258133, 273109], [-632, 1134], [-255, -1201]], [[274213, 271739], [154, -1026], [-395, -1964], [241, 2990]], [[273840, 273758], [261, -1595], [-185, -2613], [-322, -438]], [[273920, 274333], [-20, -184]], [[273916, 275250], [-11, -827]], [[274414, 275981], [264, -152], [280, -1526], [-294, -988], [-167, -1800], [-139, 1960], [56, 2506]], [[274160, 276707], [170, -315], [46, -4156], [-277, 1436], [-122, 1905], [183, 1130]], [[274632, 277222], [33, -1172], [-536, 816], [-157, -985], [-64, 1467]], [[265516, 275418], [-478, 706]], [[265922, 279555], [-53, -2958], [-353, -1179]], [[266488, 275117], [0, -942]], [[266488, 274175], [-328, -2107]], [[266160, 272068], [-649, 45]], [[265511, 272113], [5, 3305]], [[234478, 276701], [5, -3100]], [[234483, 273601], [0, -4336]], [[234483, 269265], [-1322, -44]], [[233161, 269221], [-81, 1801], [110, 2287]], [[244311, 276709], [-53, -2457]], [[244258, 274252], [-441, -8], [-351, -1304], [-29, -1626], [-344, -1796]], [[243093, 269518], [-234, 270], [-155, 2067]], [[235613, 274040], [-174, -434], [-956, -5]], [[271921, 275805], [37, -1771], [275, -2846]], [[272233, 271188], [-961, -1642]], [[271272, 269546], [-98, 1565], [-427, 591]], [[270747, 271702], [140, 2717], [-310, 2307]], [[250260, 277427], [-1, -6571]], [[250259, 270856], [-1135, -30]], [[249124, 270826], [0, 2438], [-151, 4359]], [[246829, 276146], [-140, -526], [-67, -2601], [-183, 266], [-98, -2397]], [[246341, 270888], [-113, -1301], [-411, -1386], [-316, 625]], [[245501, 268826], [-1, 115]], [[245500, 268941], [-62, 69]], [[245438, 269010], [-314, 191], [117, 1425]], [[245241, 270626], [337, 223], [252, 2168], [-256, 410], [68, 1607], [-306, 123], [53, 2007]], [[263154, 276353], [-211, -1786], [-562, -838]], [[262381, 273729], [-81, 2471]], [[200182, 262668], [-2540, 2]], [[273045, 270910], [-142, 209], [-547, -2636]], [[272356, 268483], [-123, 2705]], [[261094, 274325], [1, -3262]], [[261095, 271063], [-1174, -45], [-179, 787]], [[259742, 271805], [-289, 2711]], [[249124, 270826], [0, -3253]], [[249124, 267573], [-1393, 50]], [[247731, 267623], [-42, 2293], [500, 4219]], [[240635, 275138], [6, -4081], [-110, -1625]], [[240531, 269432], [-348, 18]], [[240183, 269450], [-690, 9]], [[239493, 269459], [-75, 1633], [-597, -3]], [[267488, 274573], [-96, 548], [-482, -3351]], [[266910, 271770], [-422, 2405]], [[252770, 272443], [-27, -1508]], [[252743, 270935], [-1345, -64]], [[251398, 270871], [-1, 6567]], [[251398, 270871], [-1139, -15]], [[247731, 267623], [-1360, -27]], [[246371, 267596], [-30, 3292]], [[245500, 268941], [-62, 69]], [[245241, 270626], [-1027, -144]], [[244214, 270482], [-102, 1787], [146, 1983]], [[263996, 274404], [-106, -4613]], [[263890, 269791], [-3, -598]], [[263887, 269193], [-267, 9], [-340, 1831]], [[263280, 271033], [-27, -1]], [[263253, 271032], [60, 5623]], [[270747, 271702], [-157, 186]], [[270590, 271888], [-578, 744]], [[227150, 277038], [6, -4410]], [[227156, 272628], [-469, -47], [-452, -1538]], [[226235, 271043], [-342, 5178]], [[228627, 276926], [3, -5287]], [[228630, 271639], [-1087, -1714]], [[227543, 269925], [-107, -742], [-280, 1303]], [[227156, 270486], [0, 2142]], [[230396, 273373], [193, -555]], [[230589, 272818], [-1430, -4744]], [[229159, 268074], [-124, -407], [-405, 3972]], [[255414, 271629], [-142, -188], [4, -2272], [-284, -8], [3, -2362], [-125, -263]], [[254870, 266536], [-1130, -22]], [[253740, 266514], [-126, 1159], [208, 568], [68, 3761], [248, 477]], [[263253, 271032], [-736, -37]], [[262517, 270995], [98, 588], [-330, 1225], [96, 921]], [[217239, 276453], [-26, -8132]], [[217213, 268321], [-224, -2]], [[216989, 268319], [-1200, 8]], [[215789, 268327], [18, 8148]], [[218670, 276477], [-12, -8190]], [[218658, 268287], [-436, 22]], [[218222, 268309], [-1009, 12]], [[220103, 276430], [-15, -8194]], [[220088, 268236], [-232, -5]], [[219856, 268231], [-1198, 56]], [[215789, 268327], [-226, -12]], [[215563, 268315], [-1212, -2]], [[214351, 268313], [0, 8124]], [[214351, 268313], [-211, 4]], [[214140, 268317], [-1427, -23]], [[212713, 268294], [-739, 24]], [[265511, 272113], [-316, -756], [-183, -1476]], [[265012, 269881], [-430, 1092]], [[264582, 270973], [-206, 1237], [4, 1414]], [[221544, 276278], [-6, -8069]], [[221538, 268209], [-230, 16]], [[221308, 268225], [-1220, 11]], [[224759, 276248], [2, -3983], [-213, -702]], [[224548, 271563], [-1040, -3414]], [[223508, 268149], [-541, 30]], [[222967, 268179], [11, 8102]], [[226235, 271043], [225, -2720]], [[226460, 268323], [-392, -1294]], [[226068, 267029], [-565, -1868]], [[225503, 265161], [-119, 1166], [-213, -723], [-623, 5959]], [[222967, 268179], [-215, -7]], [[222752, 268172], [-1214, 37]], [[191393, 274653], [-1, -12960]], [[191392, 261693], [-1985, -98], [1, -3800], [-565, -10], [0, -1774]], [[188843, 256011], [-5480, 11409]], [[269521, 273283], [-686, -1045]], [[268835, 272238], [-185, 215]], [[262517, 270995], [-386, -1847], [16, -1278]], [[262147, 267870], [-361, -23], [-202, 1603], [-424, -23]], [[261160, 269427], [-65, 1636]], [[259742, 271805], [-223, -444], [6, -3715]], [[259525, 267646], [5, -1553], [-546, -20]], [[258984, 266073], [-309, -26], [-5, 1611], [-285, -16]], [[258385, 267642], [-7, 3608], [-245, 1859]], [[241931, 271862], [-1, -2446]], [[241930, 269416], [-1399, 16]], [[268196, 270346], [-120, -1131]], [[268076, 269215], [-774, -4371]], [[267302, 264844], [-222, 1407], [-144, 2419]], [[266936, 268670], [128, 1355], [-154, 1745]], [[264582, 270973], [-5, -1326], [-687, 144]], [[195297, 254263], [-3928, 9]], [[191369, 254272], [23, 7421]], [[258385, 267642], [-117, -1603]], [[258268, 266039], [-1141, -46]], [[257127, 265993], [-137, 1596]], [[235858, 274039], [-247, -3595], [-55, -4246], [247, 15]], [[235803, 266213], [164, -2415]], [[235967, 263798], [-1350, 24]], [[234617, 263822], [-133, 12], [-1, 5431]], [[244214, 270482], [8, -2104], [-240, -3867]], [[243982, 264511], [-59, 1623], [-511, -1824], [-304, 1856]], [[243108, 266166], [-15, 3352]], [[266936, 268670], [-756, 230]], [[266180, 268900], [-20, 3168]], [[237109, 270346], [75, -4024]], [[237184, 266322], [-1381, -109]], [[233161, 269221], [87, -951]], [[233248, 268270], [-1739, -1463]], [[231509, 266807], [-7, 123]], [[231502, 266930], [-161, 2702], [-752, 3186]], [[269315, 266119], [-168, -187]], [[269147, 265932], [-152, 1040], [-160, 5266]], [[269521, 273283], [-206, -7164]], [[270012, 272627], [143, -2843], [-121, -4705]], [[270034, 265079], [-575, 985]], [[269459, 266064], [-144, 55]], [[238301, 271119], [214, -818], [-11, -1664], [522, -3202]], [[239026, 265435], [-240, -346], [-1, -1273]], [[238785, 263816], [-1220, -19]], [[237565, 263797], [-381, 2525]], [[231502, 266930], [-1230, -4027]], [[230272, 262903], [-620, 348]], [[229652, 263251], [-493, 4823]], [[227156, 270486], [-696, -2163]], [[270590, 271888], [127, -3674], [608, -625]], [[271325, 267589], [-175, -615]], [[271150, 266974], [-403, -4200]], [[270747, 262774], [-221, 704]], [[270526, 263478], [-177, 1370], [-315, 231]], [[253740, 266514], [-294, -3348], [252, -2067]], [[253698, 261099], [-1047, -27]], [[252651, 261072], [-26, 3649]], [[252625, 264721], [118, 6214]], [[269147, 265932], [-285, -745]], [[268862, 265187], [-233, 1642], [-442, 1367], [-111, 1019]], [[261160, 269427], [-51, -2452], [-440, -328], [-199, -2179]], [[260470, 264468], [-371, 2], [3, 1617], [-263, 0], [-27, 1492], [-287, 67]], [[266180, 268900], [-4, -1685]], [[266176, 267215], [-979, 52]], [[265197, 267267], [-185, 2614]], [[271272, 269546], [173, -1186]], [[271445, 268360], [-120, -771]], [[243108, 266166], [-323, -822]], [[242785, 265344], [-856, 1]], [[241929, 265345], [1, 4071]], [[257127, 265993], [-143, -9], [6, -2440]], [[256990, 263544], [-1655, -26]], [[255335, 263518], [-332, -39], [-133, 3057]], [[229652, 263251], [-593, -1975]], [[229059, 261276], [-293, 2872], [-669, -2188]], [[228097, 261960], [2, 1607], [-452, 1891], [172, 816], [-273, 611], [-3, 3040]], [[225503, 265161], [144, -1411], [-855, -2936]], [[224792, 260814], [-81, 737], [-490, -429]], [[224221, 261122], [-713, 7027]], [[245501, 268826], [-126, -1816], [-314, -1032], [-166, -1704]], [[244895, 264274], [-272, -484], [78, -1751]], [[244701, 262039], [-172, -288]], [[244529, 261751], [-462, 332]], [[244067, 262083], [-85, 2428]], [[272356, 268483], [444, -3810]], [[272800, 264673], [248, -709], [-50, -2336], [-442, 1524]], [[272556, 263152], [-244, 2510], [-518, 507], [-349, 2191]], [[239493, 269459], [179, -3271], [-323, 2], [-2, -1288], [-321, 533]], [[273103, 263918], [241, -619], [-261, -1765], [-124, 1737], [144, 647]], [[273429, 267956], [229, -1122], [-211, -969], [-18, 2091]], [[273121, 268886], [209, -711], [80, -2196], [219, -966], [-158, -954], [-438, 1417], [-233, -803]], [[263887, 269193], [-34, -3123]], [[263853, 266070], [-27, -877], [-408, 18]], [[263418, 265211], [-156, 2]], [[263262, 265213], [18, 5820]], [[263262, 265213], [-700, 78]], [[262562, 265291], [-449, 1252]], [[262113, 266543], [34, 1327]], [[265197, 267267], [107, -2251]], [[265304, 265016], [-1157, 120], [0, -795]], [[264147, 264341], [-294, 1729]], [[252625, 264721], [-414, -683], [-803, -568]], [[251408, 263470], [-10, 7401]], [[246371, 267596], [-50, -4880]], [[246321, 262716], [-774, 1409], [-652, 149]], [[251408, 263470], [-92, -39]], [[251316, 263431], [-1040, -418]], [[250276, 263013], [-17, 7843]], [[250276, 263013], [-235, -98]], [[250041, 262915], [-702, -302]], [[249339, 262613], [-25, 4964], [-190, -4]], [[228097, 261960], [-913, -2937]], [[227184, 259023], [-236, 2293], [-215, -717]], [[226733, 260599], [-665, 6430]], [[268862, 265187], [-531, -2011]], [[268331, 263176], [-444, -557]], [[267887, 262619], [-507, 1247]], [[267380, 263866], [-78, 978]], [[241929, 265345], [-139, -2434]], [[241790, 262911], [-715, 10], [-2, -1631], [-985, -12]], [[240088, 261278], [65, 2738], [214, 1719], [-184, 3715]], [[240088, 261278], [187, -1589], [292, -494], [230, -1479]], [[240797, 257716], [-541, -2781], [-190, -401]], [[240066, 254534], [-710, 332]], [[239356, 254866], [-1, 3235], [-281, -4], [-4, 3280], [-287, 5], [2, 2434]], [[262113, 266543], [-202, -2490], [-1, -1443]], [[261910, 262610], [38, -331]], [[261948, 262279], [-248, -1122], [-556, 79], [-1, -1623]], [[261143, 259613], [-925, -27]], [[260218, 259586], [239, 3100], [13, 1782]], [[234617, 263822], [-104, -1184], [69, -2704], [234, -2043]], [[234816, 257891], [-383, -1879]], [[234433, 256012], [-270, 786], [-111, 1768], [-373, 551]], [[233679, 259117], [-6, 1203], [-351, 1944], [-118, 1559], [44, 4447]], [[267380, 263866], [-842, -12]], [[266538, 263854], [-369, 127]], [[266169, 263981], [7, 3234]], [[273082, 261032], [-133, -2579], [-38, 2026], [171, 553]], [[272823, 261759], [40, -1068], [-396, -433]], [[272467, 260258], [-390, 846]], [[272077, 261104], [-418, 1229], [-343, 2022], [41, 1842], [-207, 777]], [[272556, 263152], [267, -1393]], [[218222, 268309], [-10, -7270]], [[218212, 261039], [-112, -2491], [-1121, -108]], [[216979, 258440], [2, 1756]], [[216981, 260196], [8, 8123]], [[216981, 260196], [-1417, 9]], [[215564, 260205], [-1, 8110]], [[215564, 260205], [-1425, -1]], [[214139, 260204], [1, 8113]], [[214139, 260204], [-87, 1]], [[214052, 260205], [-1251, 8]], [[212801, 260213], [-88, 1]], [[212713, 260214], [0, 8080]], [[212713, 260214], [-1473, -6]], [[211240, 260208], [4, 6496]], [[219856, 268231], [-2, -7250]], [[219854, 260981], [-1642, 58]], [[233679, 259117], [-1054, -950], [-245, -706]], [[232380, 257461], [15, 2779], [-147, -649]], [[232248, 259591], [-249, 2567], [-298, 600], [38, 1654], [-230, 2395]], [[222752, 268172], [-19, -11396]], [[222733, 256776], [-311, -1069], [-354, 1218], [-198, -944], [-249, 1262]], [[221621, 257243], [-334, 1575]], [[221287, 258818], [21, 9407]], [[221287, 258818], [-1085, 65]], [[220202, 258883], [-344, 21], [-4, 2077]], [[224221, 261122], [-256, -235], [-55, -1439], [-589, -2354]], [[223321, 257094], [-276, -435]], [[223045, 256659], [-312, 117]], [[260218, 259586], [-114, -1]], [[260104, 259585], [-994, -4]], [[259110, 259581], [-7, 3223], [-142, -8], [23, 3277]], [[259110, 259581], [-134, -3309]], [[258976, 256272], [-231, 289], [-10, 1358], [-329, -1423], [-4, 1398], [-276, -34]], [[258126, 257860], [-1, 2419], [142, 7], [1, 5753]], [[247731, 267623], [274, -3564], [25, -1966]], [[248030, 262093], [-341, -655]], [[247689, 261438], [-106, -329], [-1263, -26]], [[246320, 261083], [1, 1633]], [[249339, 262613], [-284, -111]], [[249055, 262502], [-612, -242]], [[248443, 262260], [-413, -167]], [[266169, 263981], [-1, -930], [-528, -13]], [[265640, 263038], [-382, 826]], [[265258, 263864], [46, 1152]], [[225327, 255832], [-535, 4982]], [[226733, 260599], [-1151, -3886]], [[225582, 256713], [-255, -881]], [[272077, 261104], [-207, -2290], [-271, -706]], [[271599, 258108], [-852, 4666]], [[232248, 259591], [-1251, -3816]], [[230997, 255775], [-725, 7128]], [[209299, 266698], [-217, -16660]], [[209082, 250038], [-2270, -8220]], [[206812, 241818], [27, 3208], [-30, 21680]], [[206812, 241818], [-175, -639]], [[206637, 241179], [-655, 3287], [-500, 980], [-452, 2433], [-137, 1784], [-467, 1523], [-266, 2269], [-357, 1834]], [[203803, 255289], [-2, 11451]], [[203803, 255289], [-617, 1714], [-455, 4718], [-407, 953]], [[211240, 260208], [-788, 7]], [[210452, 260215], [-226, 1786], [-294, 419], [-121, 2210], [-126, -359], [-263, 2428]], [[210452, 260215], [260, -434], [176, -3774], [536, 33], [186, -1031], [512, -16]], [[212122, 254993], [-1599, -11260]], [[210523, 243733], [-1441, 6305]], [[262562, 265291], [-9, -2748], [-135, 18]], [[262418, 262561], [-508, 49]], [[255335, 263518], [-42, -2446], [-143, -14], [4, -2675], [-155, -741], [132, -1478], [-365, -603], [-167, -1944]], [[254599, 253617], [-506, -1946]], [[254093, 251671], [-64, 1221], [230, 2448], [-147, -275], [95, 2172], [-484, 2051], [-25, 1811]], [[237565, 263797], [235, -2648], [-112, -2156]], [[237688, 258993], [-417, -312]], [[237271, 258681], [-296, 953], [-858, 613]], [[236117, 260247], [-150, 3551]], [[244067, 262083], [-416, -314], [-36, -1776], [-276, -171], [-1, -3573], [-157, -1570], [80, -1640]], [[243261, 253039], [-257, 529], [-179, -1295], [-48, 1872]], [[242777, 254145], [8, 11199]], [[269459, 266064], [0, -2383], [-247, 6], [-4, -2375]], [[269208, 261312], [-295, -709]], [[268913, 260603], [-583, -23], [1, 2596]], [[264147, 264341], [212, -841], [-100, -3841]], [[264259, 259659], [-425, -13]], [[263834, 259646], [-269, 0]], [[263565, 259646], [-156, 2806], [9, 2759]], [[270526, 263478], [-236, -1000], [1, -5622]], [[270291, 256856], [-262, 1104]], [[270029, 257960], [-821, 3352]], [[258126, 257860], [-564, -26]], [[257562, 257834], [-384, 25], [-188, 2000], [3, 2240]], [[256993, 262099], [-3, 1445]], [[263565, 259646], [-754, -28]], [[262811, 259618], [-348, -21], [-45, 2964]], [[242777, 254145], [-218, 179]], [[242559, 254324], [-306, 2653]], [[242253, 256977], [-194, 277], [-241, 2435], [-28, 3222]], [[265258, 263864], [-181, -812], [-39, -2866]], [[265038, 260186], [-69, -498], [-710, -29]], [[252692, 256193], [-1093, -40]], [[251599, 256153], [-283, -4]], [[251316, 256149], [0, 7282]], [[252651, 261072], [41, -4879]], [[246320, 261083], [-2, -1627]], [[246318, 259456], [-1160, -18]], [[245158, 259438], [-408, 1159], [-49, 1442]], [[227703, 254041], [-519, 4982]], [[229059, 261276], [365, -3473]], [[229424, 257803], [-1329, -4514]], [[228095, 253289], [-182, -662], [-210, 1414]], [[266538, 263854], [73, -1664]], [[266611, 262190], [-131, -3052]], [[266480, 259138], [-414, -483]], [[266066, 258655], [-411, 1022], [-15, 3361]], [[267887, 262619], [-7, -2007]], [[267880, 260612], [-912, 139], [0, 1414], [-357, 25]], [[266066, 258655], [-13, -4420]], [[266053, 254235], [-962, 81]], [[265091, 254316], [4, 2023]], [[265095, 256339], [-57, 3847]], [[236117, 260247], [244, -1197], [-44, -6786]], [[236317, 252264], [-312, 1643], [-176, 1815], [-633, 882], [-380, 1287]], [[239356, 254866], [-430, -7], [-147, -1627], [-239, 7], [-65, -1705]], [[238475, 251534], [-134, -174]], [[238341, 251360], [-233, 2339], [-88, 3955], [-332, 1339]], [[271599, 258108], [109, -1595]], [[271708, 256513], [-299, -2289]], [[271409, 254224], [-861, 805]], [[270548, 255029], [-29, 1448], [-228, 379]], [[256993, 262099], [-405, -645], [-234, -1413], [-90, -2315], [-724, -4798]], [[255540, 252928], [-525, -297]], [[255015, 252631], [-416, 986]], [[251316, 256149], [-565, 12]], [[250751, 256161], [-705, 0]], [[250046, 256161], [-5, 6754]], [[229993, 252192], [-569, 5611]], [[230997, 255775], [-230, -1046]], [[230767, 254729], [-774, -2537]], [[268913, 260603], [84, -3784]], [[268997, 256819], [-88, -1964]], [[268909, 254855], [-525, 11], [-61, 691], [-839, 350]], [[267484, 255907], [-15, 965]], [[267469, 256872], [411, 3740]], [[242253, 256977], [-1211, -1625], [-245, 2364]], [[250046, 256161], [-147, 0]], [[249899, 256161], [-375, -8]], [[249524, 256153], [-46, 1960], [-425, 1319], [2, 3070]], [[262811, 259618], [-6, -2208]], [[262805, 257410], [-584, -282], [-45, 580]], [[262176, 257708], [-228, 4571]], [[262176, 257708], [-117, -3881]], [[262059, 253827], [-919, 118]], [[261140, 253945], [3, 5668]], [[249524, 256153], [-188, 3]], [[249336, 256156], [-474, -1], [2, -814], [-377, 8]], [[248487, 255349], [-44, 6911]], [[267469, 256872], [-538, 69]], [[266931, 256941], [-451, 2197]], [[244529, 261751], [-61, -2123], [-260, 460], [230, -1495], [-276, -598], [18, -3120], [-205, 749], [175, -2365], [-388, -521], [182, -1099]], [[243944, 251639], [-102, -1383], [173, -932], [-203, -1255]], [[243812, 248069], [-72, -542]], [[243740, 247527], [12, 448]], [[243752, 247975], [-183, 929]], [[243569, 248904], [130, 2676], [-438, 1459]], [[248487, 255349], [-226, -1014]], [[248261, 254335], [-568, 266]], [[247693, 254601], [-4, 6837]], [[257562, 257834], [96, -2877], [-99, -437], [7, -2857]], [[257566, 251663], [-178, 1282], [-1848, -17]], [[245158, 259438], [-12, -4903]], [[245146, 254535], [-217, 449], [-648, -954], [-50, -1687], [-287, -704]], [[191369, 254272], [-1713, -9], [-813, 1748]], [[225327, 255832], [-811, -3460]], [[224516, 252372], [-178, 743], [-193, 2531], [-444, 142], [-380, 1306]], [[247693, 254601], [-46, 0]], [[247647, 254601], [-803, -13]], [[246844, 254588], [-236, -7]], [[246608, 254581], [0, 4882], [-290, -7]], [[270029, 257960], [-328, -1872], [-203, -243]], [[269498, 255845], [-501, 974]], [[226341, 249372], [-759, 7341]], [[227703, 254041], [-1362, -4669]], [[220202, 258883], [-12, -9166]], [[220190, 249717], [-1597, -25]], [[218593, 249692], [-13, 8143], [-1601, 87]], [[216979, 257922], [0, 518]], [[254093, 251671], [-73, -562]], [[254020, 251109], [-140, -343], [-854, -8], [-285, -550]], [[252741, 250208], [-49, 5985]], [[272538, 253809], [-20, -18]], [[272518, 253791], [20, 18]], [[272206, 254211], [-81, 132]], [[272125, 254343], [81, -132]], [[272895, 258076], [-221, -2948], [-140, 1838], [361, 1110]], [[272467, 260258], [359, -497], [69, -955], [-372, -536], [-14, -3438], [142, -739], [-530, 301]], [[272121, 254394], [-413, 2119]], [[232380, 257461], [233, -3411], [-191, -918], [-110, -3298]], [[232312, 249834], [-586, -39], [-742, -2204]], [[230984, 247591], [-247, 5282], [30, 1856]], [[215564, 260205], [-1, -10639]], [[215563, 249566], [-1463, 119]], [[214100, 249685], [-48, 10520]], [[214100, 249685], [-245, 17]], [[213855, 249702], [-113, 1973], [-687, 2490], [-254, -616]], [[212801, 253549], [0, 6664]], [[237271, 258681], [4, -1924], [-170, -1044], [14, -5133]], [[237119, 250580], [-253, -651]], [[236866, 249929], [-549, 2335]], [[216979, 257922], [-19, -8364]], [[216960, 249558], [-1397, 8]], [[212801, 253549], [-158, -489], [-521, 1933]], [[265095, 256339], [-399, -65]], [[264696, 256274], [-805, -62]], [[263891, 256212], [-57, 3434]], [[263891, 256212], [-578, -53]], [[263313, 256159], [-423, 45], [-85, 1206]], [[261140, 253945], [-191, -1283], [-485, 461], [-142, -1409]], [[260322, 251714], [-225, 22]], [[260097, 251736], [7, 7849]], [[260097, 251736], [-1119, -78]], [[258978, 251658], [-2, 4614]], [[246608, 254581], [-1059, -7], [-229, -519]], [[245320, 254055], [-174, 480]], [[238341, 251360], [-865, -338]], [[237476, 251022], [-357, -442]], [[266931, 256941], [-267, -2338]], [[266664, 254603], [-217, -427]], [[266447, 254176], [-394, 59]], [[234433, 256012], [126, -727]], [[234559, 255285], [-1328, -6124]], [[233231, 249161], [-511, -2377]], [[232720, 246784], [-160, 1025], [32, 1831], [-280, 194]], [[221621, 257243], [-5, -7538]], [[221616, 249705], [-1426, 12]], [[270548, 255029], [135, -1216], [-559, -1966], [-260, 400]], [[269864, 252247], [-282, 1361], [-84, 2237]], [[258978, 251658], [17, -3689]], [[258995, 247969], [-561, 3]], [[258434, 247972], [-835, 6]], [[257599, 247978], [-33, 3685]], [[218593, 249692], [-762, -76]], [[217831, 249616], [-871, -58]], [[236866, 249929], [-913, -1226]], [[235953, 248703], [-290, 477]], [[235663, 249180], [-783, 1632]], [[234880, 250812], [-187, 3541], [-134, 932]], [[263313, 256159], [-12, -3258]], [[263301, 252901], [-768, -61], [-14, -3408]], [[262519, 249432], [-296, 56]], [[262223, 249488], [-201, 1665], [37, 2674]], [[229346, 250050], [-672, -2226]], [[228674, 247824], [-579, 5465]], [[229993, 252192], [-647, -2142]], [[242559, 254324], [-409, -314], [69, -6632], [-201, 52]], [[242018, 247430], [-298, 679], [-277, -1715], [-308, -248]], [[241135, 246146], [-630, -114]], [[240505, 246032], [-16, 6744], [-423, 1758]], [[223045, 256659], [-5, -9677]], [[223040, 246982], [-1093, -8]], [[221947, 246974], [-331, 2], [0, 2729]], [[224516, 252372], [109, -2637], [234, -1105]], [[224859, 248630], [-17, -2012]], [[224842, 246618], [-1447, -2]], [[223395, 246616], [-355, 366]], [[267484, 255907], [289, -2605], [-29, -1803]], [[267744, 251499], [-329, -679], [-91, -2266]], [[267324, 248554], [-270, 36]], [[267054, 248590], [-114, 4038], [-276, 1975]], [[269864, 252247], [216, -987], [1, -1603], [213, -1378]], [[270294, 248279], [-791, 54], [-15, -4066], [756, -202], [-181, -4018]], [[270063, 240047], [-569, 247]], [[269494, 240294], [-47, 4436], [-166, -9], [13, 2674], [-283, 1030], [-221, 3070]], [[268790, 251495], [-78, 1759], [195, -13], [2, 1614]], [[226341, 249372], [-11, -642]], [[226330, 248730], [-1471, -100]], [[272538, 253809], [99, -1698], [-281, -1545], [-109, 1279], [124, 2060], [147, -114]], [[272121, 254394], [4, -51]], [[272206, 254211], [155, -844], [-204, -1997], [71, -2599], [-325, 802]], [[271903, 249573], [-591, 1665]], [[271312, 251238], [97, 2986]], [[264696, 256274], [-167, -1562], [-391, -949], [-69, -1201], [-328, -1573], [-68, -1447]], [[263673, 249542], [-96, 10]], [[263577, 249552], [15, 3292], [-291, 57]], [[265091, 254316], [-12, -4797]], [[265079, 249519], [-315, 11]], [[264764, 249530], [-724, 19]], [[264040, 249549], [-367, -7]], [[252741, 250208], [18, -2160]], [[252759, 248048], [-1139, -6]], [[251620, 248042], [-21, 8111]], [[250751, 256161], [23, -9759]], [[250774, 246402], [-565, 1]], [[250209, 246403], [-23, 1869]], [[250186, 248272], [3, 6263], [-288, -6], [-2, 1632]], [[250186, 248272], [-850, -145]], [[249336, 248127], [0, 8029]], [[251620, 248042], [-141, -1624]], [[251479, 246418], [-705, -16]], [[249336, 248127], [-206, -4]], [[249130, 248123], [-300, -5]], [[248830, 248118], [0, 1358], [-237, -5], [-309, 1880], [-23, 2984]], [[268790, 251495], [-833, 10]], [[267957, 251505], [-213, -6]], [[234880, 250812], [-269, -1952], [-727, -4046]], [[233884, 244814], [-145, 1530], [-209, -880]], [[233530, 245464], [-193, -34], [-106, 3731]], [[213855, 249702], [556, -1561], [548, -265], [329, -1469], [180, -3867], [116, -913]], [[215584, 241627], [-1029, 49], [-1, -1090], [-570, 24], [-1, -5858], [-623, -15], [0, -4294]], [[213360, 230443], [-2433, 11418]], [[210927, 241861], [-404, 1872]], [[271312, 251238], [-472, -2258]], [[270840, 248980], [-349, 502], [-197, -1203]], [[245320, 254055], [101, -733], [-2, -5262]], [[245419, 248060], [-324, 3]], [[245095, 248063], [-1283, 6]], [[240505, 246032], [-431, -221]], [[240074, 245811], [-1233, 93], [-383, -266]], [[238458, 245638], [138, 2981], [-121, 2915]], [[230984, 247591], [-297, -1133], [-306, -3132], [-308, -919]], [[230073, 242407], [-149, 660]], [[229924, 243067], [-83, 1791], [-230, 1423], [-92, 2593], [-173, 1176]], [[267054, 248590], [-504, 85]], [[266550, 248675], [-277, 857]], [[266273, 249532], [181, 2385], [-7, 2259]], [[246844, 254588], [2, -6513]], [[246846, 248075], [-54, 0]], [[246792, 248075], [-721, -7]], [[246071, 248068], [-652, -8]], [[247647, 254601], [2, -6509]], [[247649, 248092], [-244, -5]], [[247405, 248087], [-559, -12]], [[248830, 248118], [-1181, -26]], [[243569, 248904], [-73, -473]], [[243496, 248431], [-155, -910], [-26, -2269]], [[243315, 245252], [-1108, 10]], [[242207, 245262], [-189, 2168]], [[266273, 249532], [3, -821], [-452, 71]], [[265824, 248782], [-746, 72], [1, 665]], [[228674, 247824], [-526, -1799], [-158, -2555]], [[227990, 243470], [-862, 2197], [-567, 667]], [[226561, 246334], [-231, 2396]], [[255286, 234666], [0, 83]], [[255286, 234749], [0, -83]], [[255015, 252631], [47, -4598]], [[255062, 248033], [-100, -2449], [293, -2294], [342, -1258], [-72, -3552]], [[255525, 238480], [118, -709], [-472, -3244], [-776, -835], [-364, 139], [619, 1003], [-446, 2269], [13, 2457], [-100, 3216], [-226, 557]], [[253891, 243333], [-3, 422]], [[253888, 243755], [51, 358]], [[253939, 244113], [171, 4894], [-90, 2102]], [[262223, 249488], [73, -1396]], [[262296, 248092], [-1354, -66]], [[260942, 248026], [7, 3775], [-627, -87]], [[257599, 247978], [-272, 46]], [[257327, 248024], [-1052, 38]], [[256275, 248062], [-1213, -29]], [[263577, 249552], [-524, -184]], [[263053, 249368], [-534, 64]], [[260942, 248026], [-27, -3]], [[260915, 248023], [-1496, -68]], [[259419, 247955], [-424, 14]], [[238458, 245638], [-203, -3554], [-301, -2556], [116, -1802], [-122, -774]], [[237948, 236952], [-68, -1096], [158, -1846]], [[238038, 234010], [-535, -30]], [[237503, 233980], [99, 13118], [-126, 3924]], [[269494, 240294], [-114, 46]], [[269380, 240340], [-346, 136]], [[269034, 240476], [-18, 2136], [-493, 492], [-222, 1907], [-346, 638]], [[267955, 245649], [2, 5856]], [[267955, 245649], [-134, -371]], [[267821, 245278], [-66, 1821], [-380, 53], [-51, 1402]], [[253891, 243333], [-3, 422]], [[253939, 244113], [-283, -5326], [-10, -2294], [-805, 176]], [[252841, 236669], [-46, 6488]], [[252795, 243157], [-36, 4891]], [[272307, 246842], [-203, -3711], [-81, 2743], [284, 968]], [[271903, 249573], [306, -2479], [-160, -4072], [-292, -203]], [[271757, 242819], [-831, 2065]], [[270926, 244884], [0, 3896], [-86, 200]], [[237503, 233980], [-603, -18]], [[236900, 233962], [96, 1937], [-93, 1644], [125, 1714]], [[237028, 239257], [58, 2122], [-200, 796], [-363, 6259], [-570, 269]], [[235663, 249180], [-268, -876], [313, -9030]], [[235708, 239274], [21, -669], [-542, -19]], [[235187, 238586], [-329, 78]], [[234858, 238664], [55, 883], [-383, 657], [-240, 1921], [-169, -356], [-46, 2247], [-191, 798]], [[229924, 243067], [-953, -3232]], [[228971, 239835], [-534, -1858]], [[228437, 237977], [-325, 5187], [-122, 306]], [[209922, 237142], [-279, -5], [-3006, 4042]], [[210927, 241861], [-1005, -4719]], [[232720, 246784], [-683, -1233]], [[232037, 245551], [-850, -767]], [[231187, 244784], [-203, 2807]], [[221947, 246974], [2, -4278]], [[221949, 242696], [-1762, -9]], [[220187, 242687], [3, 7030]], [[220187, 242687], [-2353, -79]], [[217834, 242608], [-3, 7008]], [[217834, 242608], [0, -7788]], [[217834, 234820], [-2222, 6]], [[215612, 234826], [279, 1284], [-230, 1215], [264, 2566], [-18, 1121], [-323, 615]], [[264040, 249549], [-12, -7240]], [[264028, 242309], [-1345, 402]], [[262683, 242711], [300, 3247], [70, 3410]], [[264764, 249530], [114, -3091], [-22, -4394]], [[264856, 242045], [-554, 175]], [[264302, 242220], [-274, 89]], [[267013, 241274], [-88, 36]], [[266925, 241310], [88, -36]], [[266550, 248675], [98, -2368], [249, -1172], [-274, -445], [-99, -1220], [356, -2142]], [[266880, 241328], [-709, 260]], [[266171, 241588], [-368, 135]], [[265803, 241723], [21, 7059]], [[265803, 241723], [-735, 253]], [[265068, 241976], [-212, 69]], [[262683, 242711], [-3, 0]], [[262680, 242711], [-384, 5381]], [[270926, 244884], [-366, -1369], [-37, -1853], [123, -1708], [-124, -3746]], [[270522, 236208], [-335, -63], [-107, 1022], [-17, 2880]], [[237028, 239257], [-1320, 17]], [[233530, 245464], [-90, -6608]], [[233440, 238856], [-665, 83], [-646, 2257]], [[232129, 241196], [-92, 4355]], [[244740, 241602], [-76, 124]], [[244664, 241726], [-138, 1864], [-596, -162], [213, 1885], [-298, -208], [-105, 2422]], [[245095, 248063], [-355, -6461]], [[243752, 247975], [-256, 456]], [[226561, 246334], [-375, -2254], [-241, -2997]], [[225945, 241083], [-211, -3685]], [[225734, 237398], [-625, 1109]], [[225109, 238507], [-245, 3502], [174, 1353], [-6, 1658], [-190, 1598]], [[267821, 245278], [-326, -1351], [-1, -2847]], [[267494, 241080], [-481, 194]], [[266925, 241310], [-45, 18]], [[244664, 241726], [-233, -2740], [-196, -267]], [[244235, 238719], [-602, 4]], [[243633, 238723], [-154, 6]], [[243479, 238729], [63, 3798], [-227, 2725]], [[250209, 246403], [-2, -4882]], [[250207, 241521], [-565, 13], [0, -2448], [-406, -1072]], [[249236, 238014], [-349, 2359], [-75, 1498]], [[248812, 241871], [318, 6252]], [[248812, 241871], [-426, -22], [-727, 870]], [[247659, 242719], [-254, 5368]], [[242207, 245262], [113, -1503], [-109, -3719], [-662, -627], [-123, -1005]], [[241426, 238408], [-387, 13]], [[241039, 238421], [5, 124]], [[241044, 238545], [92, 1719], [-1, 5882]], [[262680, 242711], [-189, -1959]], [[262491, 240752], [-657, 30], [-10, -812], [-591, 47]], [[261233, 240017], [-142, 12]], [[261091, 240029], [7, 4056], [-466, 837]], [[260632, 244922], [283, 3101]], [[247659, 242719], [36, -9077]], [[247695, 233642], [-97, 120]], [[247598, 233762], [-55, 1170], [-290, -154]], [[247253, 234778], [-284, 1434], [-176, 2314], [-1, 3038]], [[246792, 241564], [0, 6511]], [[255286, 234749], [0, -83]], [[256954, 236440], [0, -65]], [[256954, 236375], [0, 65]], [[256231, 239600], [17, -2078], [-262, -1641], [-543, -651], [107, 1726], [233, 527], [-258, 997]], [[256275, 248062], [-333, -1385], [-81, -3537], [370, -3540]], [[257287, 236666], [-333, -291]], [[256954, 236440], [334, 329]], [[257288, 236769], [-1, -103]], [[257327, 248024], [-37, -10998]], [[257290, 237026], [-1052, -1037], [665, 1910], [-226, 962], [-136, -1053], [-250, 2450], [-60, -658]], [[252795, 243157], [-1316, 0]], [[251479, 243157], [0, 3261]], [[246792, 241564], [-958, -11]], [[245834, 241553], [168, 1301]], [[246002, 242854], [-21, 4096], [90, 1118]], [[257288, 236769], [-1, -103]], [[258411, 236876], [-1, -356]], [[258410, 236520], [1, 356]], [[258434, 247972], [-17, -10056]], [[258417, 237916], [-166, 1066], [-410, -2043], [-551, 87]], [[246002, 242854], [-1125, -261], [-120, -1037]], [[244757, 241556], [-17, 46]], [[260632, 244922], [-55, -1606], [-562, 869], [-66, -1634]], [[259949, 242551], [-537, 37], [7, 5367]], [[259949, 242551], [-196, -1238], [99, -2458], [-315, -2141]], [[259537, 236714], [-10, -2239]], [[259527, 234475], [-1117, 2045]], [[258411, 236876], [815, -134], [-426, 1780], [-383, -606]], [[231187, 244784], [-45, -4378], [221, -3088], [-139, -1696]], [[231224, 235622], [12, 735], [-415, 181]], [[230821, 236538], [-164, 3014], [-358, 1437], [-319, 391], [93, 1027]], [[223395, 246616], [2, -7872]], [[223397, 238744], [-947, 25]], [[222450, 238769], [-502, -4], [1, 3931]], [[225109, 238507], [-674, 262]], [[224435, 238769], [-1038, -25]], [[251479, 243157], [0, -1085]], [[251479, 242072], [-989, -2], [-283, -549]], [[228437, 237977], [-499, -1007]], [[227938, 236970], [-97, 304]], [[227841, 237274], [-634, 1522], [-437, -1264], [-263, 726], [-303, 2901], [-259, -76]], [[234858, 238664], [-878, -2779]], [[233980, 235885], [-396, 1125], [-144, 1846]], [[241044, 238545], [-396, 9], [-9, -944], [-990, -260]], [[239649, 237350], [2, 3243], [421, 10], [2, 5208]], [[239649, 237350], [0, -383]], [[239649, 236967], [-708, -9], [1, 1629], [-283, 7], [1, -1638], [-712, -4]], [[269034, 240476], [-293, 113]], [[268741, 240589], [-1247, 491]], [[232129, 241196], [72, -7161]], [[232201, 234035], [-806, -384]], [[231395, 233651], [-171, 1971]], [[243479, 238729], [216, -1917], [-535, 412], [-328, -898]], [[242832, 236326], [-172, 207], [-256, -1507]], [[242404, 235026], [-95, 2567], [-194, 809], [-689, 6]], [[261091, 240029], [-143, 0], [-5, -2436], [-1018, 73], [-388, -952]], [[271757, 242819], [498, -308], [-34, -3431], [-155, 926], [-295, -108]], [[271771, 239898], [-322, 204], [-925, -5549]], [[270524, 234553], [-2, 1655]], [[252841, 236669], [-233, -1277], [-178, 1269], [-576, -701], [-371, 1452]], [[251483, 237412], [-4, 4660]], [[230821, 236538], [-951, -1549]], [[229870, 234989], [-279, 410], [-620, 4436]], [[245834, 241553], [-209, -1460], [-15, -2062], [278, -2141]], [[245888, 235890], [-360, -438]], [[245528, 235452], [-338, 30]], [[245190, 235482], [-278, 638], [125, 2785], [-183, -37], [-97, 2688]], [[249236, 238014], [202, -4320], [262, -906]], [[249700, 232788], [-283, -441]], [[249417, 232347], [-471, -66], [-254, 868], [-304, -895], [-309, 780]], [[248079, 233034], [-384, 608]], [[264302, 242220], [-267, -2073], [-54, -1702], [-693, -1752]], [[263288, 236693], [-375, 1330], [-2, 1097], [-281, 268], [-139, 1364]], [[222450, 238769], [7, -3969]], [[222457, 234800], [-1262, 75]], [[221195, 234875], [-1008, -8]], [[220187, 234867], [0, 7820]], [[220187, 234867], [-1628, -37]], [[218559, 234830], [-725, -10]], [[265068, 241976], [85, -2795], [-178, -1], [-97, -4623]], [[264878, 234557], [-479, 557], [-1297, -63]], [[263102, 235051], [186, 1642]], [[251483, 237412], [-1133, -2305], [-141, 1297]], [[250209, 236404], [-2, 5117]], [[266171, 241588], [21, -1291], [-370, -1384], [42, -1368], [-274, -2432]], [[265590, 235113], [-266, -1103], [-213, -2776]], [[265111, 231234], [-234, 66]], [[264877, 231300], [1, 3257]], [[209945, 215738], [-23, 21404]], [[213360, 230443], [686, -3231]], [[214046, 227212], [-191, -2194], [-355, 428], [-421, -724], [-394, -4187], [-190, -3082], [-26, -2697], [-288, -495], [-452, -3923], [-784, 1354], [-338, 2103], [-458, 443], [-204, 1500]], [[245190, 235482], [-472, -16], [-483, 3253]], [[215612, 234826], [-8, -9436]], [[215604, 225390], [-988, 209], [-570, 1613]], [[247253, 234778], [-437, -1708], [-207, 515]], [[246609, 233585], [-184, -840], [-537, 3145]], [[267013, 241274], [105, -135], [78, -2865], [203, -1639]], [[267399, 236635], [-213, -2318]], [[267186, 234317], [-334, -5]], [[266852, 234312], [-283, 815], [-979, -14]], [[250209, 236404], [34, -1300], [-543, -2316]], [[268741, 240589], [-104, -714], [226, -2819], [-101, -1192], [-315, -129]], [[268447, 235735], [-586, 1763], [-462, -863]], [[209945, 215738], [-500, 620], [-308, 933], [-500, 3116], [-209, 111], [-482, 2314], [-466, 5014], [-27, 4955], [-481, 3934], [-34, 2230], [-301, 2214]], [[233980, 235885], [192, -3310]], [[234172, 232575], [-466, -2513], [-754, 2534], [-380, -1252], [-368, -203]], [[232204, 231141], [-3, 2894]], [[227841, 237274], [-343, -3902], [-438, -2645]], [[227060, 230727], [-170, -807]], [[226890, 229920], [-1288, 6177]], [[225602, 236097], [132, 1301]], [[262491, 240752], [-511, -7567]], [[261980, 233185], [-764, 19]], [[261216, 233204], [17, 6813]], [[263102, 235051], [119, -3212], [349, -2173]], [[263570, 229666], [-1288, 56], [-50, -792]], [[262232, 228930], [-307, 1351], [55, 2904]], [[269380, 240340], [4, -8336]], [[269384, 232004], [-309, -3002], [110, -639]], [[269185, 228363], [-359, -2063]], [[268826, 226300], [-394, 1902]], [[268432, 228202], [15, 7533]], [[272248, 234158], [-9, -2721], [-434, 369]], [[271805, 231806], [-186, 99], [91, 1895], [-113, 886], [151, 2028], [471, -633], [29, -1923]], [[272388, 234172], [-135, -13]], [[272253, 234159], [-2, 2673], [137, -2660]], [[271771, 239898], [387, -695], [23, -1979], [-488, -403], [1, -1428], [-265, -959], [92, -1411]], [[271521, 233023], [-998, -79]], [[270523, 232944], [1, 1609]], [[270523, 232944], [0, -816]], [[270523, 232128], [-259, 0]], [[270264, 232128], [-880, -124]], [[261213, 230026], [7, -1939]], [[261220, 228087], [-832, 3622], [181, 87], [318, -1693], [326, -77]], [[261216, 233204], [-3, -3056]], [[261213, 230148], [-257, -46], [-113, 1656], [-199, -122], [-385, 1289], [-7, -1143], [-725, 2693]], [[229870, 234989], [-428, -2537]], [[229442, 232452], [-641, -2031]], [[228801, 230421], [-159, 3871], [-704, 2678]], [[236900, 233962], [5, -1513]], [[236905, 232449], [-444, 185], [-186, -1246], [-287, 179]], [[235988, 231567], [-421, -17], [-380, 7036]], [[224435, 238769], [11, -6719]], [[224446, 232050], [-926, -12]], [[223520, 232038], [-1061, -74], [-2, 2836]], [[225602, 236097], [-347, -5926]], [[225255, 230171], [-325, -1871]], [[224930, 228300], [-484, 3750]], [[245308, 223866], [-799, 1570], [36, 944], [-274, 2264]], [[244271, 228644], [604, 288]], [[244875, 228932], [202, -2332], [250, -831], [-19, -1903]], [[244558, 230559], [-644, -478], [-352, 1660], [-259, -1458], [-366, 543]], [[242937, 230826], [125, 1509], [-230, 3991]], [[243633, 238723], [170, -1018], [53, -2472], [406, -1497], [39, -2366], [257, -811]], [[245528, 235452], [-237, -4826]], [[245291, 230626], [-330, -691]], [[244961, 229935], [-403, 624]], [[235988, 231567], [8, -4161]], [[235996, 227406], [-1499, -98]], [[234497, 227308], [-325, 5267]], [[239649, 236967], [279, -441], [96, -4141], [287, -11], [13, -1374], [-300, -818]], [[240024, 230182], [-369, 259], [-1651, -18]], [[238004, 230423], [34, 3587]], [[241039, 238421], [19, -7240]], [[241058, 231181], [-312, -1023]], [[240746, 230158], [-722, 24]], [[242404, 235026], [-397, -2819]], [[242007, 232207], [-408, -1798], [-383, 1123], [-158, -351]], [[268432, 228202], [-222, -844]], [[268210, 227358], [-526, 3595], [-439, 645], [-59, 2719]], [[228801, 230421], [-811, -4931]], [[227990, 225490], [-930, 5237]], [[231395, 233651], [-274, -1643], [130, -1238]], [[231251, 230770], [-412, 483], [-917, -965]], [[229922, 230288], [-70, 1867], [-410, 297]], [[242937, 230826], [-38, -675]], [[242899, 230151], [-457, 1472], [-435, 584]], [[226432, 226825], [-346, -1971]], [[226086, 224854], [-87, 1790], [-744, 3527]], [[226890, 229920], [-511, -2621], [53, -474]], [[246609, 233585], [-25, -1023]], [[246584, 232562], [-762, -995], [-135, -867]], [[245687, 230700], [-396, -74]], [[266852, 234312], [-10, -6935], [145, -1216]], [[266987, 226161], [-200, -2815]], [[266787, 223346], [-399, 936], [-283, 2980], [-405, 1944], [-589, 2028]], [[264877, 231300], [-794, -652], [8, -1736], [-255, 55]], [[263836, 228967], [-266, 699]], [[247598, 233762], [-477, -3687], [-248, -295], [-10, -2337]], [[246863, 227443], [-319, -38]], [[246544, 227405], [-91, 2728], [131, 2429]], [[218559, 234830], [2, -12368]], [[218561, 222462], [3, -3802], [-131, -3064], [-136, -247]], [[218297, 215349], [-585, 2296], [-155, 1737], [-559, 1473], [-109, 1937], [-428, 2705], [-230, -538], [-627, 431]], [[221195, 234875], [-8, -4031]], [[221187, 230844], [-585, 152], [-126, -5326], [-4, -3216]], [[220472, 222454], [-273, -4]], [[220199, 222450], [-1638, 12]], [[223520, 232038], [7, -6644]], [[223527, 225394], [-721, 2114], [-1182, 236]], [[221624, 227744], [-253, 18], [4, 3078], [-188, 4]], [[268210, 227358], [-114, -1168]], [[268096, 226190], [-1109, -29]], [[272842, 223332], [13, 0]], [[272855, 223332], [-13, 0]], [[272837, 223331], [-14, 0]], [[272823, 223331], [-64, -213]], [[272759, 223118], [-215, -625], [-556, -55]], [[271988, 222438], [-4, 2545]], [[271984, 224983], [-177, 2427], [99, 1442], [-322, 1680], [221, 1274]], [[272248, 234158], [350, -6433], [-19, -1080], [258, -3314]], [[272388, 234172], [216, -5656], [-351, 5643]], [[238004, 230423], [-371, -3473]], [[237633, 226950], [-14, 2086], [-480, 949], [-234, 2464]], [[232204, 231141], [-439, 1365], [374, -6984]], [[232139, 225522], [-574, -1123]], [[231565, 224399], [-195, 1520], [-119, 4851]], [[247737, 223729], [-329, 25], [-91, 1326], [-454, 2363]], [[247598, 233762], [-8, -4806], [113, -2060], [203, -840], [-169, -2327]], [[248125, 213950], [70, 748]], [[248195, 214698], [-70, -748]], [[248079, 233034], [-93, -5082], [222, 493], [142, -926]], [[248350, 227519], [-169, -1242], [4, -1676], [243, -2463], [7, -2736]], [[248435, 219402], [-412, 1680], [32, 1884], [-166, 601]], [[247889, 223567], [-152, 162]], [[262232, 228930], [-64, -3572]], [[262168, 225358], [-1, -31]], [[262167, 225327], [-471, -1559]], [[261696, 223768], [-262, -97], [31, 2044], [-245, 2372]], [[261213, 230026], [0, 122]], [[249417, 232347], [-289, -1734], [-364, -1099]], [[248764, 229514], [-363, -245], [-63, -811], [283, -1441]], [[248621, 227017], [-271, 502]], [[271521, 233023], [-209, -1367], [211, 19], [-61, -1459], [280, -1434], [17, -2306]], [[271759, 226476], [-575, -57], [-356, -1658], [-304, -535]], [[270524, 224226], [-1, 7902]], [[237633, 226950], [-208, -1155], [251, -2061]], [[237676, 223734], [-488, -232], [-947, -2204]], [[236241, 221298], [-10, 6069], [-235, 39]], [[234522, 223522], [-12, -43]], [[234510, 223479], [12, 43]], [[234497, 227308], [188, -999], [-40, -2779]], [[234645, 223530], [-248, 563], [-164, 2138], [-76, -1074], [333, -1692], [-99, -2415]], [[234391, 221050], [-400, -947], [-152, 1096]], [[233839, 221199], [-128, 697], [-451, -247]], [[233260, 221649], [-1121, 3873]], [[249700, 222967], [-38, 168]], [[249749, 222685], [-49, 282]], [[249760, 222644], [-11, 41]], [[249662, 223135], [98, -491]], [[249979, 228312], [58, -697]], [[250037, 227615], [219, -583], [-251, -836], [181, -671]], [[250186, 225525], [-338, 382], [72, -1088]], [[249920, 224819], [-579, 0], [296, -1820]], [[249637, 222999], [-31, 137]], [[249606, 223136], [-17, -12]], [[249589, 223124], [-855, 2531], [-113, 1362]], [[248764, 229514], [179, -1316], [187, 486], [63, -1578], [278, -40], [74, 2257], [373, 1266], [61, -2277]], [[246544, 227405], [-360, 599], [-279, -303]], [[245905, 227701], [-207, 1351], [-11, 1648]], [[229922, 230288], [146, -1541]], [[230068, 228747], [-848, -6121]], [[229220, 222626], [-748, -86]], [[228472, 222540], [-488, 2913]], [[227984, 225453], [6, 37]], [[242899, 230151], [-21, -3786]], [[242878, 226365], [-34, -728], [-509, -1742], [180, -15], [-21, -1563], [-530, -1558], [-885, 887]], [[241079, 221646], [5, 8528], [-338, -16]], [[270524, 224226], [-18, -8]], [[270506, 224218], [-216, 2191], [-389, 132], [-406, 1491]], [[269495, 228032], [311, 620], [458, 3476]], [[269495, 228032], [-310, 331]], [[224930, 228300], [-647, -3578]], [[224283, 224722], [-370, -473]], [[223913, 224249], [-386, 1145]], [[243094, 222650], [507, -1498], [-373, -1379], [-504, 1635], [370, 1242]], [[244961, 229935], [-86, -1003]], [[244271, 228644], [-426, -209], [-645, -3853]], [[243200, 224582], [80, 1698], [-402, 85]], [[231565, 224399], [21, -2330], [-178, -21]], [[231408, 222048], [-241, 599]], [[231167, 222647], [-226, 617], [-208, 2751], [-251, 273], [-414, 2459]], [[245905, 227701], [-338, -3549]], [[245567, 224152], [-211, -1644]], [[245356, 222508], [-48, 1358]], [[221624, 227744], [-8, -5222]], [[221616, 222522], [-1144, -68]], [[227984, 225453], [-780, -2864], [-98, 356]], [[227106, 222945], [-308, 894], [-366, 2986]], [[241079, 221646], [-915, 2301], [-643, 1244], [-860, -33], [-722, -624], [-263, -800]], [[226086, 224854], [-252, -1275], [-616, -1665]], [[225218, 221914], [-189, 1266], [72, 1337], [-818, 205]], [[261985, 223666], [46, -1027], [-348, 842], [302, 185]], [[262167, 225327], [153, -1173], [-624, -386]], [[263836, 228967], [267, -1311], [-501, 150], [-1029, -3275], [-405, 827]], [[231167, 222647], [-369, -2223], [-113, -1977], [-813, -2987]], [[229872, 215460], [-51, 299]], [[229821, 215759], [273, 1332], [-648, 4505], [-226, 1030]], [[245356, 222508], [-369, -725]], [[244987, 221783], [-279, -1858], [-257, 1227], [-396, -629], [-7, 2090], [-205, -83], [-21, 2141], [-622, -89]], [[270506, 224218], [-1, -4598]], [[270505, 219620], [-384, -936], [-50, 1175], [-543, 18]], [[269528, 219877], [-418, -93], [-2, 1071], [-275, 503]], [[268833, 221358], [-7, 4942]], [[268833, 221358], [-783, 496]], [[268050, 221854], [-36, 3076], [82, 1260]], [[247232, 214624], [0, 134]], [[247232, 214758], [0, -134]], [[248242, 218852], [-13, -1968]], [[248229, 216884], [-88, -464]], [[248141, 216420], [54, -1722]], [[248125, 213950], [-368, -1497], [-123, 993]], [[247634, 213446], [-257, 3161], [-145, -1653]], [[247232, 214954], [0, 260]], [[247232, 215214], [0, 104]], [[247232, 215318], [15, 317]], [[247247, 215635], [12, 85]], [[247259, 215720], [56, 1625], [-668, 4636], [-413, 1833], [-106, 1451], [-208, -1074], [-353, -39]], [[247889, 223567], [32, -2069], [-180, -981], [501, -1665]], [[222150, 222529], [-534, -7]], [[223913, 224249], [-73, -520]], [[223840, 223729], [-339, -2416], [-158, 1140], [-1193, 76]], [[249172, 217874], [111, -1305], [-398, 134], [287, 1171]], [[249760, 222644], [-11, 41]], [[249749, 222685], [-49, 282]], [[249637, 222999], [-31, 137]], [[249371, 222960], [-15, -479]], [[249356, 222481], [-255, -314], [203, -1847], [362, -1191], [-111, -778], [530, -230], [375, -1687], [141, 832], [308, -3041], [-51, -1666], [-255, -1182], [-171, 580], [-447, -2431], [421, 3794], [-137, 1556], [-368, -602], [-134, 2620], [-304, 1183], [-511, -72], [-60, 606]], [[248892, 218611], [-160, 572]], [[248732, 219183], [-297, 219]], [[249589, 223124], [-218, -164]], [[234522, 223522], [-12, -43]], [[236241, 221298], [-46, -111]], [[236195, 221187], [-276, 33]], [[235919, 221220], [-211, 270], [-540, -841], [124, 4279], [-301, 699], [-199, -2304], [-147, 207]], [[227106, 222945], [-578, -5085]], [[226528, 217860], [-680, 52], [-139, 1116]], [[225709, 219028], [23, 815], [-514, 2071]], [[271988, 222438], [9, -2348], [241, -1825]], [[272238, 218265], [-390, -928]], [[271848, 217337], [-291, 1591], [-5, 2836], [246, 455], [-91, 1669], [277, 1095]], [[271759, 226476], [138, -1240], [-266, -1803], [-119, -4401], [73, -1266]], [[271585, 217766], [-204, -12], [-96, 2167], [-186, 605], [-594, -906]], [[233260, 221649], [-107, -2626], [-243, -14], [-79, -1781], [-212, -962], [-275, 621], [-264, -1151]], [[232080, 215736], [-403, 3185], [-269, 3127]], [[228472, 222540], [-171, -903], [-100, -3633]], [[228201, 218004], [-1039, -5114]], [[227162, 212890], [-322, 2084]], [[226840, 214974], [-363, 2442], [51, 444]], [[247232, 214624], [0, 134]], [[247232, 214954], [0, 260]], [[247232, 215318], [15, 317]], [[244928, 217715], [211, -933], [-106, -1819], [-306, 1568], [201, 1184]], [[246756, 215343], [-83, -581]], [[246673, 214762], [-79, 239]], [[246594, 215001], [-200, -1714]], [[246394, 213287], [-354, 100]], [[246040, 213387], [-298, 518], [375, 1326], [-331, 809], [-84, 1095], [-260, -2776], [-234, 825], [15, 1953], [-359, 1999], [123, 2647]], [[247259, 215720], [-524, 941], [21, -1318]], [[225709, 219028], [-760, -6052]], [[224949, 212976], [-1107, 2537]], [[223842, 215513], [-2, 8216]], [[223842, 215513], [-1, -2983]], [[223841, 212530], [-1697, 17]], [[222144, 212547], [6, 9982]], [[272759, 223118], [386, -4324]], [[273145, 218794], [-132, -297], [16, -2699], [-744, -89], [-47, 2556]], [[272837, 223331], [-14, 0]], [[272855, 223332], [309, -4536]], [[273164, 218796], [-14, -2]], [[273150, 218794], [-308, 4538]], [[232080, 215736], [-73, -613]], [[232007, 215123], [-254, -1543], [-959, -3417]], [[230794, 210163], [-922, 5297]], [[229821, 215759], [-781, -3735]], [[229040, 212024], [-105, 759]], [[228935, 212783], [-734, 5221]], [[222144, 212547], [-1943, -93]], [[220201, 212454], [-2, 9996]], [[220201, 212454], [-1549, -38]], [[218652, 212416], [-301, 1679], [-54, 1254]], [[235183, 217122], [-168, -987], [-898, -3581], [739, 3848], [327, 720]], [[234707, 216436], [-104, 255], [-319, -2118]], [[234284, 214573], [-492, 4941], [47, 1685]], [[234391, 221050], [302, -995], [-118, -527], [193, -1648], [-61, -1444]], [[236195, 221187], [-1085, -2978], [545, 2519], [264, 492]], [[234284, 214573], [-259, -342], [-244, -3554], [-457, -2356], [-295, -717]], [[233029, 207604], [-168, 76], [-313, 2527], [-238, 32], [-6, 1604], [-193, 733], [-104, 2547]], [[269528, 219877], [10, -5016], [-370, -17], [1, -3162]], [[269169, 211682], [-610, -874]], [[268559, 210808], [-4, -28]], [[268555, 210780], [11, 1182], [-229, 1768], [-631, 424], [-130, 2752]], [[267576, 216906], [349, 3016], [125, 1932]], [[271585, 217766], [74, -1764]], [[271659, 216002], [-47, -5892], [-823, -7]], [[270789, 210103], [-996, 7]], [[269793, 210110], [-470, 1716], [-154, -144]], [[226840, 214974], [-1288, -6318]], [[225552, 208656], [-603, 4320]], [[274192, 206959], [-19, 0]], [[274173, 206959], [19, 0]], [[274038, 206958], [-133, 1]], [[273905, 206959], [-39, -1]], [[273866, 206958], [-329, -17], [-54, -3299]], [[273483, 203642], [-228, 3744], [-313, -577], [-517, 1780]], [[272425, 208589], [33, 1991], [-410, 2090], [-148, 1729]], [[271900, 214399], [73, 2024], [-125, 914]], [[273145, 218794], [71, -1438], [822, -10398]], [[273164, 218796], [-14, -2]], [[228017, 208314], [-310, 1141], [-438, -2084]], [[227269, 207371], [-501, 3616], [394, 1903]], [[228935, 212783], [-918, -4469]], [[272425, 208589], [-133, -1746]], [[272292, 206843], [-680, -114], [4, -8037]], [[271616, 198692], [-837, -36]], [[270779, 198656], [10, 11447]], [[271659, 216002], [241, -1603]], [[230794, 210163], [-40, -5356]], [[230754, 204807], [-187, -17]], [[230567, 204790], [-105, 612]], [[230462, 205402], [-406, -39]], [[230056, 205363], [-228, 274]], [[229828, 205637], [-8, -8]], [[229820, 205629], [-3, 30]], [[229817, 205659], [-203, 3107], [-295, 2552], [-279, 706]], [[225150, 203636], [-1, 663], [-1297, -17]], [[223852, 204282], [-11, 8248]], [[225552, 208656], [257, -1776]], [[225809, 206880], [-659, -3244]], [[231527, 203108], [199, 1337], [-526, -947], [-444, 705]], [[230756, 204203], [-2, 604]], [[233029, 207604], [-515, -1809], [-269, 336], [-408, -941], [-74, -1320], [716, 1769], [-1754, -5264], [802, 2733]], [[226700, 204665], [-382, 957], [-249, -542]], [[226069, 205080], [-260, 1800]], [[227269, 207371], [-569, -2706]], [[229828, 205637], [-8, -8]], [[229817, 205659], [1, -375]], [[229818, 205284], [-753, -2126], [109, -1486]], [[229174, 201672], [-68, -398], [-684, 1260]], [[228422, 202534], [4, 4145], [-121, 1446], [-288, 189]], [[223852, 204282], [-1657, -123]], [[222195, 204159], [-37, -4]], [[222158, 204155], [-14, 8392]], [[222158, 204155], [-1965, 141]], [[220193, 204296], [8, 8158]], [[220193, 204296], [2, -8383]], [[220195, 195913], [-276, -20]], [[219919, 195893], [-227, 1634], [-299, 5632], [-269, 1346], [-138, 3110], [-290, 2182], [-44, 2619]], [[268559, 210808], [-4, -28]], [[269793, 210110], [391, -3170], [-256, -2281]], [[269928, 204659], [-433, 507], [-598, -8]], [[268897, 205158], [-149, 697], [-6, 3293], [-183, 1660]], [[270779, 198656], [-274, -620]], [[270505, 198036], [2, 3100]], [[270507, 201136], [2, 765], [-428, 978], [-153, 1780]], [[228422, 202534], [-599, -3073]], [[227823, 199461], [-497, 1216], [-65, 1282], [-333, 364], [-228, 2342]], [[273483, 203642], [-949, -51], [-367, 555], [125, 2697]], [[273866, 206958], [152, -4434], [384, -6703], [460, -6126], [-21, -546]], [[274841, 189149], [-1029, -223]], [[273812, 188926], [17, 9773]], [[273829, 198699], [-61, 3006], [-285, 1937]], [[274038, 206958], [411, -2425], [-276, 2426]], [[274192, 206959], [437, -3793], [144, -2447], [-167, -836], [-12, 3070], [-288, -3646], [-72, 101], [-11, 3804], [-174, 605], [153, 1506], [-297, 1636]], [[226408, 193289], [-980, 20]], [[225428, 193309], [-277, -3]], [[225151, 193306], [-1, 10330]], [[226069, 205080], [-235, -508], [782, -8929], [-25, -122]], [[226591, 195521], [-240, -1164], [57, -1068]], [[273829, 198699], [-2213, -7]], [[229435, 196419], [-34, -86]], [[229401, 196333], [30, 1031]], [[229431, 197364], [4, -945]], [[229989, 197536], [539, 1175], [-1215, -4810]], [[229313, 193901], [29, 366]], [[229342, 194267], [112, 1477], [225, 126], [310, 1666]], [[230756, 204203], [-189, 587]], [[229467, 200563], [-293, 1109]], [[229818, 205284], [138, -1955], [593, -2862], [-702, -2229], [-380, 2325]], [[230125, 204169], [-69, 1194]], [[230462, 205402], [-19, -1857], [-318, 624]], [[227823, 199461], [-461, -4166]], [[227362, 195295], [-76, -648], [-695, 874]], [[270507, 201136], [-552, 1], [0, -812], [-1166, -25]], [[268789, 200300], [108, 4858]], [[223852, 204282], [-6, -10982]], [[223846, 193300], [-1632, -504], [-15, 3243]], [[222199, 196039], [-4, 8120]], [[225151, 193306], [-1305, -6]], [[222199, 196039], [-2004, -126]], [[229467, 200563], [-207, -609], [193, -1783]], [[229453, 198171], [-927, -863], [294, -1303]], [[228820, 196005], [-625, -2605]], [[228195, 193400], [-52, 239]], [[228143, 193639], [-159, 1152], [-622, 504]], [[268308, 195427], [-9, -1]], [[268299, 195426], [9, 1]], [[270505, 198036], [-139, -2611]], [[270366, 195425], [-1519, 30]], [[268847, 195455], [-374, -12]], [[268473, 195443], [316, 4857]], [[271616, 198692], [0, -1636], [277, 2], [94, -2170], [192, -1069], [303, -12], [-262, -960], [585, -3548], [246, -3712]], [[273051, 185587], [-1173, 64]], [[271878, 185651], [-1368, -4]], [[270510, 185647], [-6, 9777], [-138, 1]], [[273812, 188926], [-11, -3355]], [[273801, 185571], [-750, 16]], [[228692, 189439], [14, 358]], [[228706, 189797], [-14, -358]], [[229222, 193536], [-326, -2723], [39, 1456], [287, 1267]], [[228195, 193400], [229, -264], [-76, -1379]], [[228348, 191757], [-205, 1882]], [[228490, 190446], [-134, 1236]], [[228356, 191682], [443, 2663], [-6, -1493], [-303, -2406]], [[229313, 193901], [29, 366]], [[229311, 195731], [-328, -1202], [-163, 1476]], [[229453, 198171], [-22, -807]], [[229401, 196333], [-90, -602]], [[223846, 193300], [12, -13096]], [[223858, 180204], [2, -1602], [-436, 26]], [[223424, 178628], [-1056, 71], [-103, 856], [-232, -1007]], [[222033, 178548], [-140, 1380], [71, 2611], [-322, 2959], [-327, 370], [-463, 2628], [-155, 3393], [-154, 197], [-278, 2896], [-346, 911]], [[228348, 191757], [8, -75]], [[228490, 190446], [-3, -28]], [[228487, 190418], [-15, -156]], [[228472, 190262], [-134, -1330], [-231, 1091], [-605, -773]], [[227502, 189250], [-411, 475], [-458, 1287], [12, 1136]], [[226645, 192148], [-237, 1141]], [[268308, 195427], [-9, -1]], [[268847, 195455], [7, -2886]], [[268854, 192569], [-198, -1538], [342, -1333], [-115, -2958], [-287, 863], [-300, 2065], [148, 2365], [29, 3410]], [[270510, 185647], [-1388, -19]], [[269122, 185628], [467, 3254], [-294, 1838], [49, -1786], [-175, 308], [19, 1797], [-334, 1530]], [[225428, 193309], [8, -14809]], [[225436, 178500], [-811, 48]], [[224625, 178548], [2, 1455], [-769, 201]], [[226645, 192148], [-378, -2055], [-22, -4642]], [[226245, 185451], [-328, -1], [5, -6978]], [[225922, 178472], [-486, 28]], [[228250, 184343], [-70, 94]], [[228180, 184437], [70, -94]], [[228402, 187096], [249, 1940], [-343, -3972], [94, 2032]], [[228692, 189439], [14, 358]], [[228487, 190418], [-15, -156]], [[227948, 186969], [214, -388], [-199, -2527]], [[227963, 184054], [-1437, -47], [-281, 1444]], [[227502, 189250], [289, 8], [157, -2289]], [[275241, 183986], [-902, 23]], [[274339, 184009], [-271, 6], [-3, 1571], [-264, -15]], [[274841, 189149], [341, -3282], [59, -1881]], [[275339, 183990], [-31, -2]], [[275308, 183988], [31, 2]], [[273051, 185587], [-176, -2846], [396, -2050], [334, -3158]], [[273605, 177533], [-628, -16], [1, -1638], [-277, -12], [2, -1650], [-824, 23]], [[271879, 174240], [-2, 5715]], [[271877, 179955], [1, 5696]], [[271877, 179955], [-1371, -46]], [[270506, 179909], [4, 5738]], [[268884, 180868], [-11, 1]], [[268873, 180869], [11, -1]], [[270506, 179909], [-2, -2429]], [[270504, 177480], [-549, 22], [3, 3302], [-874, 53]], [[269084, 180857], [-345, 1646], [240, 735], [143, 2390]], [[274339, 184009], [6, -6561]], [[274345, 177448], [1, -1562], [-580, -3038]], [[273766, 172848], [42, 3613], [-203, 1072]], [[227900, 178787], [-36, 1]], [[227864, 178788], [9, 1767], [307, 3882]], [[228250, 184343], [-350, -5556]], [[227963, 184054], [-251, -4476], [-258, -851], [114, 2438], [-407, -1627], [-336, 1830], [200, -2389], [-320, -88]], [[226705, 178891], [-582, -1386]], [[226123, 177505], [-201, 967]], [[275676, 178509], [-28, 1]], [[275648, 178510], [28, -1]], [[275339, 183990], [-31, -2]], [[275241, 183986], [343, -5477]], [[275584, 178509], [-145, -584]], [[275439, 177925], [-1, -410]], [[275438, 177515], [-1093, -67]], [[269628, 172609], [-7, -1]], [[269621, 172608], [7, 1]], [[270504, 177480], [-3, -3269]], [[270501, 174211], [-551, 15], [0, -505]], [[269950, 173721], [0, -130]], [[269950, 173591], [-1, -996], [-273, 12]], [[269676, 172607], [-254, 2093], [-338, 6157]], [[268884, 180868], [-11, 1]], [[224625, 178548], [159, -3916], [135, 9], [-13, -5058]], [[224906, 169583], [-1481, 40]], [[223425, 169623], [-1, 9005]], [[271879, 174240], [-1378, -29]], [[223425, 169623], [-158, -2061], [-442, -1922]], [[222825, 165640], [-275, 5054], [-494, 3303], [54, 2885], [-77, 1666]], [[227998, 166170], [-12, 1]], [[227986, 166171], [12, -1]], [[228016, 167092], [52, -919]], [[228068, 166173], [-55, -3]], [[228013, 166170], [-73, 1392]], [[227940, 167562], [76, -470]], [[228016, 167092], [-141, 1393]], [[227875, 168485], [-65, 3026]], [[227810, 171511], [31, 176]], [[227841, 171687], [175, -4595]], [[227841, 171687], [-58, 4800], [50, 1667]], [[227833, 178154], [31, 634]], [[227900, 178787], [-81, -3293], [22, -3807]], [[227619, 175770], [-62, -1844], [-237, -795]], [[227320, 173131], [22, -2788], [212, -1258], [78, -2922]], [[227632, 166163], [-1163, -34], [-267, 256]], [[226202, 166385], [-78, 3149]], [[226124, 169534], [-1, 7971]], [[226705, 178891], [359, -136], [285, -872], [340, 625], [-70, -2738]], [[226124, 169534], [-934, 41]], [[225190, 169575], [-284, 8]], [[276009, 173063], [-4, 0]], [[276005, 173063], [4, 0]], [[275994, 173067], [-63, 2]], [[275931, 173069], [-9, 1]], [[275922, 173070], [-37, 2]], [[275885, 173072], [-22, 0]], [[275863, 173072], [-26, -266], [-2071, 42]], [[275438, 177515], [375, -1551], [181, -2897]], [[275676, 178509], [-28, 1]], [[275584, 178509], [-145, -584]], [[273766, 172848], [-167, -3535], [-1729, 10]], [[271870, 169323], [9, 4917]], [[269903, 169694], [11, 1]], [[269914, 169695], [-11, -1]], [[269628, 172609], [-7, -1]], [[269950, 173591], [197, -1158], [100, -2595], [-427, 921], [-144, 1848]], [[271870, 169323], [-1374, 15]], [[270496, 169338], [-105, 2644], [304, 1032], [-368, 5], [-94, -804], [-283, 1506]], [[276009, 173063], [-4, 0]], [[275994, 173067], [-63, 2]], [[275922, 173070], [-37, 2]], [[275863, 173072], [173, -517], [58, -7156], [-69, -4426]], [[276025, 160973], [-424, 252], [-1823, -64]], [[273778, 161161], [-12, 11687]], [[273778, 161161], [4, -1336]], [[273782, 159825], [-1083, -118], [-9, 4915], [-814, -69]], [[271876, 164553], [-6, 4770]], [[270224, 168130], [277, -3879], [-101, -152], [-176, 4031]], [[271876, 164553], [5, -1690], [-271, -29], [4, -1926], [-522, 238]], [[271092, 161146], [-65, 2473], [-474, 1226], [-124, 2786], [67, 1707]], [[269914, 169695], [-11, -1]], [[225190, 169575], [-741, -9780]], [[224449, 159795], [-248, -323], [-357, 2360], [-856, 1102], [53, 932], [-216, 1774]], [[226202, 166385], [-130, -3036], [396, -281], [0, -1592]], [[226468, 161476], [1, -5174]], [[226469, 156302], [-922, -316], [-540, 1945], [-164, 1243], [-394, 621]], [[228231, 162657], [-36, 0]], [[228195, 162657], [36, 0]], [[227998, 166170], [-12, 1]], [[228159, 164435], [-24, 128]], [[228135, 164563], [-189, 860]], [[227946, 165423], [67, 747]], [[228068, 166173], [91, -1738]], [[227684, 164583], [-2, -1372]], [[227682, 163211], [-57, -570]], [[227625, 162641], [156, -4]], [[227781, 162637], [-161, -1601], [-220, -468], [-932, 908]], [[227632, 166163], [52, -1580]], [[272238, 151333], [13, 1]], [[272251, 151334], [-13, -1]], [[273782, 159825], [19, -5213]], [[273801, 154612], [0, -3237]], [[273801, 151375], [-1312, -39]], [[272489, 151336], [-461, 1867], [-228, -193], [-395, 1935], [-191, 1815], [-122, 4386]], [[228287, 156177], [-113, -1804], [-350, -1094], [6, -1267], [-410, 862], [-516, 2812], [-435, 616]], [[227781, 162637], [266, -4006], [-45, -1341], [285, -1113]], [[228231, 162657], [-36, 0]], [[276025, 160973], [-123, -6439]], [[275902, 154534], [-491, -344], [-1072, 2], [-538, 420]], [[275887, 153137], [-181, -2634], [-305, -2457], [-117, -2921], [81, -1855], [-329, -2502]], [[275036, 140768], [-16, 1]], [[275020, 140769], [-149, -433]], [[274871, 140336], [3, -77]], [[274874, 140259], [-199, 601], [-388, -1467], [-445, 273]], [[273842, 139666], [-42, 3489], [1, 8220]], [[275902, 154534], [-15, -1397]], [[274871, 140336], [3, -77]], [[275036, 140768], [-16, 1]], [[275491, 142866], [-401, -4416], [-362, -2015], [523, 3741], [240, 2690]], [[272251, 151334], [-13, -1]], [[273842, 139666], [-118, -685], [-512, -438], [-244, 1965], [102, 2256], [184, -1642], [296, -971], [166, 920], [-246, 1771], [-349, 147], [-259, 2833], [-188, 3419], [234, 600], [-210, 869], [-82, -1357], [-127, 1983]], [[267576, 216906], [-181, 85], [-177, 1931], [-468, 2014], [37, 2410]], [[233545, 583163], [470, -1], [0, 7179], [546, -267], [367, -1411], [396, -7637], [-21, -1976], [287, -1125], [439, -310]], [[245498, 568091], [407, 1054], [402, -2818], [1697, 311], [722, -2325], [297, 673], [566, -549], [-1155, -3041], [-1287, -1848], [-816, -1938], [-809, -2999]], [[244050, 541402], [0, -11146]], [[242235, 539623], [262, 1549], [296, -1142], [509, 151], [748, 1221]], [[245788, 538230], [8, -8017]], [[244050, 541402], [832, 1558], [406, 334], [672, 1956], [310, -1206], [-364, -2639], [91, -1053], [-209, -2122]], [[245788, 538230], [630, 1480], [422, -1521]], [[246668, 543604], [119, -491], [-601, -1771], [482, 2262]], [[254360, 554779], [387, -1343], [-682, -275], [51, -770], [-806, -2719]], [[253310, 549672], [-198, 1604], [-596, -3]], [[252516, 551273], [245, 1548], [576, 1487], [1023, 471]], [[252129, 567028], [638, 1076], [-743, -3451], [-872, -1785], [142, -551], [-582, -1037], [-166, 1628], [1583, 4120]], [[251344, 546531], [128, 1308], [718, 2354], [11, -1815], [317, -391], [169, -3174]], [[253310, 549672], [-511, -4125], [-63, 2159], [-507, 612], [-28, 1852], [315, 1103]], [[256405, 536544], [2, -6252]], [[256407, 530292], [-349, -1], [-5, -3236], [-347, 4]], [[253820, 544308], [634, -392], [509, -1456], [171, -1720], [674, -4188], [597, -8]], [[257802, 530287], [-1395, 5]], [[256405, 536544], [266, 725], [573, -1785], [182, 768], [315, -1250], [489, 2627], [901, 2228], [763, 319]], [[258234, 522811], [-689, -1998], [491, 3712], [-698, 206], [-250, -2796], [-467, 641], [-361, -1503], [-267, -2116]], [[255011, 510600], [-35, -2168], [-370, -346]], [[254679, 502702], [345, 2967], [570, 1287], [473, 4864], [330, 490], [143, 1897], [235, 8], [-572, -6085], [-44, -1741], [-319, -1642], [-155, -2071]], [[266291, 525882], [-781, 768]], [[265510, 526650], [490, 1336], [-121, 1234], [374, -217], [304, -1926], [-266, -1195]], [[264534, 537282], [192, -120], [-169, -2149], [-263, 1388], [240, 881]], [[264771, 527002], [-281, 51]], [[264490, 527053], [-48, -2]], [[264442, 527051], [-19, 1612], [-346, 2], [-1, 1612], [-2087, 1], [-2, 1628], [-347, -5]], [[261640, 541399], [788, 243], [-207, -1485], [-13, -3741], [568, -815], [557, 744], [103, -1308], [702, 1641], [226, -1324], [215, -3356], [-110, -1628], [279, 286], [140, -1587], [477, -2057], [-594, -10]], [[263518, 523913], [579, -848], [-387, -678], [-192, 1526]], [[264771, 527002], [-281, 51]], [[264442, 527051], [-1182, 1275], [-230, -2015], [-35, -1966], [-708, 3124], [-1172, 1763], [-254, -167], [-380, -2335], [-589, 12]], [[263048, 514103], [-754, -310], [-259, 1734]], [[262035, 515527], [484, 1048], [-316, 239], [-233, 2466], [498, 2961], [580, 1139]], [[261221, 512583], [62, 1279], [458, 1590], [294, 75]], [[260809, 522685], [124, -2642], [-358, -488], [234, 3130]], [[259619, 509895], [-266, 698], [189, 945], [77, -1643]], [[260516, 504529], [-484, -11]], [[259309, 504590], [9, 2169], [372, 1309], [375, -215], [514, 4334], [145, -2358], [-222, -3319], [14, -1981]], [[260516, 504529], [127, -152], [342, 4122], [-150, -4480], [236, 2087]], [[266792, 512570], [208, -2837], [-312, 125], [-6, -2477], [298, -1300]], [[266298, 493143], [-35, -2126], [-276, -1072], [-460, 40], [-182, -1553]], [[266573, 485031], [572, 4601], [580, 621], [347, 1131], [524, -1430], [297, -2969], [77, -2649]], [[269259, 474627], [236, -3607], [-157, -1605], [-122, -4884], [-353, 81], [-169, 1030]], [[268236, 461260], [-80, -1234], [-498, -1329], [-248, -2669], [-87, -2522]], [[267323, 453506], [-275, 1114], [-676, -162]], [[266582, 447887], [26, 6]], [[266536, 447880], [30, 6]], [[267323, 453506], [-736, -4607], [-57, -1020]], [[276369, 283639], [51, -2897], [155, -81], [-317, -2464], [-721, -1619]], [[275274, 275950], [-210, 1998]], [[278269, 287761], [-76, 264]], [[276907, 282488], [-285, -1501], [-132, 340], [309, 2769]], [[277898, 288714], [355, -1067], [-412, -2026], [-412, -58], [-522, -3075]], [[61944, 65038], [-273, 273]], [[61671, 65311], [273, -273]], [[64908, 48284], [736, -2763], [362, -390], [489, -1482], [554, -3197], [-25, -2085], [243, 13], [56, -1738], [491, -2284], [-473, -3219], [-430, -1374], [-451, -185], [-606, -2496], [-404, -3858], [-627, 2124], [-104, 1502], [90, 4218], [-292, 5439], [-197, 1716], [344, 2264], [318, 3335], [-188, 1775], [-21, 2013], [135, 672]], [[55029, 84760], [231, -812], [-50, -4138], [-316, -1725], [-532, 857], [-340, 1190], [-70, 1625], [168, 1567], [390, 1358], [519, 78]], [[53118, 80468], [25, -1793], [-233, -683], [-126, -1603], [-76, 1953], [410, 2126]], [[61944, 65038], [565, -356], [-456, -1899], [-525, 1010], [-689, 11], [161, 2281], [671, -774]], [[61752, 60573], [246, -293], [244, -1960], [-83, -860], [-350, -533], [-259, 3326], [202, 320]], [[62904, 54516], [45, -1246], [-351, -600], [8, 966], [298, 880]], [[62814, 62495], [341, -2479], [437, 901], [263, -353], [322, -1915], [311, -601], [36, -1558], [-162, -1020], [-712, -1318], [-390, 413], [-55, 3220], [-458, 617], [-171, 1326], [59, 2294], [179, 473]], [[58972, 75139], [408, -3431], [-18, -1219], [214, 21], [315, -3032], [-403, -785], [-272, 1418], [-579, -705], [-494, 5220], [436, 170], [393, 2343]], [[996992, 632383], [818, -1163], [91, -906], [715, -2639], [-620, 1211], [-351, 1709], [-879, 1733], [226, 55]], [[949, 635992], [100, -1643], [-281, 619], [181, 1024]], [[7984, 636500], [-24, -2275], [-306, -73], [-67, 2101], [397, 247]], [[8254, 636861], [430, -729], [-176, -972], [-344, 387], [90, 1314]], [[8791, 637399], [78, -1228], [-422, 750], [344, 478]], [[2943, 637533], [354, -28], [111, -1138], [763, -730], [-473, -573], [-84, -1947], [-423, -823], [-299, 1293], [442, 1084], [-738, 1715], [347, 1147]], [[5406, 633633], [-183, -598], [-330, 1038], [-855, -380], [1117, 1264], [254, 737], [16, 1940], [428, -501], [-229, -1193], [22, -1774], [-240, -533]], [[996377, 638802], [311, -784], [-244, -853], [-67, 1637]], [[7152, 639094], [-123, -3160], [552, 52], [-112, -1993], [-620, -692], [-248, -1116], [-150, 1715], [-276, -2445], [-148, 1181], [344, 1636], [-141, 1180], [574, -355], [-294, 2578], [642, 1419]], [[999633, 639522], [334, -975], [-327, -1865], [-356, 430], [-110, 1602], [459, 808]], [[8394, 641129], [361, -843], [-150, -1151], [-356, -113], [145, 2107]], [[993962, 641501], [134, -1164], [-300, -1592], [3, -1344], [-561, -90], [-111, -1517], [-310, 1266], [482, 1562], [297, 122], [366, 2757]], [[15680, 641866], [-88, -643], [552, -599], [499, 441], [599, -277], [-1373, -851], [-663, 468], [-396, -613], [-511, 1117], [345, 752], [243, -726], [793, 931]], [[18717, 646240], [353, -1060], [-311, -985], [-542, -451], [86, 1790], [414, 706]], [[13936, 646817], [445, -1871], [-208, -1713], [-379, -563], [294, -1046], [-845, -838], [-954, -1616], [-415, 665], [-938, -680], [1038, 1800], [664, 138], [757, 1388], [293, 1606], [-347, 796], [247, 1637], [348, 297]], [[983194, 648582], [-58, -2898], [-305, 735], [-724, 157], [687, 1802], [400, 204]], [[23638, 652034], [279, -453], [-114, -1345], [-515, -1145], [-82, 1788], [432, 1155]], [[26147, 655623], [247, -1330], [-168, -813], [-713, 1495], [634, 648]], [[980647, 657671], [764, -147], [436, -2390], [463, -235], [-708, -1136], [-317, 775], [-432, -1614], [-470, 872], [165, 1668], [-516, -336], [77, 1140], [-541, -71], [552, 1546], [527, -72]], [[28034, 654543], [907, 4624], [-95, 1472], [528, 2185], [746, 67], [-272, 830], [82, 1804], [501, 2015], [614, 648], [608, -970], [-157, -2372], [-1193, -2675], [-518, -3466], [-1751, -4162]], [[36357, 673363], [-391, -2467], [-196, 1415], [587, 1052]], [[34797, 676523], [213, -3286], [495, 2734], [387, -122], [70, -1818], [-314, -391], [-519, -2697], [581, 1301], [181, -1596], [-674, -868], [-156, -1539], [-278, 590], [46, -1876], [-401, 265], [-1841, -3579], [-467, -1377], [-651, 1241], [1053, 2460], [1096, 1206], [-225, 1759], [468, 337], [-151, 1493], [937, 464], [-873, 524], [-342, 2033], [352, 1704], [1013, 1038]], [[26198, 724966], [754, -263], [-288, -1192], [-466, 1455]], [[25147, 736552], [-441, -1991], [-390, 1137], [831, 854]], [[39420, 678834], [125, -1114], [-549, -30], [-134, 746], [558, 398]], [[36825, 680387], [730, -1661], [-578, -1781], [-479, 150], [-104, 2381], [431, 911]], [[38082, 681762], [-168, -1483], [356, -62], [-385, -1861], [-335, 2175], [180, 1214], [352, 17]], [[45571, 685391], [687, -1487], [-645, -37], [-42, 1524]], [[46951, 694607], [167, -1890], [-230, -1028], [-300, 1739], [363, 1179]], [[42854, 695877], [634, 14], [265, -1568], [337, -4089], [371, 437], [216, -1478], [-489, 52], [-123, 932], [-254, -1722], [-453, -779], [-609, 441], [-827, -359], [-642, -1585], [-62, -1249], [-802, -1375], [-569, 492], [-277, 2147], [71, 1348], [583, 1047], [406, 3984], [356, 1064], [528, -514], [981, 2494], [359, 266]], [[48298, 698203], [503, -1314], [-281, -971], [-459, 2013], [237, 272]], [[54720, 699114], [33, -1697], [-429, -1611], [396, 3308]], [[53768, 699716], [-56, -3065], [-690, -2054], [14, 3270], [393, -758], [86, 2465], [253, 142]], [[52386, 701641], [20, -2213], [-523, 1390], [503, 823]], [[51367, 702388], [93, -1872], [271, 219], [341, -2313], [-185, -1094], [-922, 1412], [40, 2470], [362, 1178]], [[52632, 703466], [225, -1137], [-484, 351], [259, 786]], [[56429, 729876], [0, -164]], [[56429, 729712], [0, -1271]], [[56429, 728441], [-377, -902], [0, -1576], [-687, 44], [0, -1691], [-885, 0], [-1, -1609], [-854, -47], [-11, -3154], [263, -16], [12, -6313], [-175, -1752], [845, 0], [1, -4664]], [[54560, 706761], [-222, 3583], [-465, 487], [-226, -1331], [-227, 543], [-129, -1791], [-940, -1953], [-503, -2559], [-202, 1961], [-157, -2246], [-320, -160], [-389, 1335], [-213, -1550], [-894, -1527], [-527, 87], [101, 2154], [312, 2133], [-635, 501], [-314, -1612], [37, -2336], [-533, -3433], [-423, 296], [235, -2134], [-319, -953], [-327, 1503], [-197, -2494], [-615, 575], [-125, 3742], [-386, 953], [-194, -965], [303, -1471], [137, -4091], [-323, 1731], [-87, -1650], [-582, -104], [-227, 2389], [-557, 961], [-45, -1927], [534, -1473], [-912, -2585], [204, 4150], [-79, 1484], [293, 977], [935, 318], [218, 2402], [378, 1261], [397, -106], [-126, 1804], [846, 4218], [1241, 3632], [1202, 1198], [763, 131], [637, 709], [-431, -1918], [671, -3199], [315, -565], [-272, 3532], [664, -283], [156, -1434], [616, -516], [79, 1328], [-803, 1925], [-146, 1183], [589, 5125], [1474, 4921], [1402, 2353], [1202, 3896]], [[131840, 702692], [477, -1813], [-260, -3591], [-338, 3444], [121, 1960]], [[133474, 712615], [473, -2306], [365, -3908], [-109, -3956], [-237, -2723], [-412, -1256], [-725, 1926], [512, 3110], [-666, -3077], [-840, 2748], [551, 2915], [-269, 716], [-18, 1677], [520, 1253], [-148, 1905], [1003, 976]], [[60956, 762087], [580, 2152], [206, 3039]], [[61742, 767278], [1862, 118], [0, -5313], [-2648, 4]], [[51409, 765657], [-524, -4199], [-534, -542], [51, 2808], [1007, 1933]], [[50361, 766039], [-742, -1613]], [[49619, 764426], [-84, 1634], [826, -21]], [[55885, 766355], [509, -1408], [386, -3700]], [[56780, 761247], [191, -1494], [-550, -1757], [-436, 893], [-942, 6038], [-709, 1488], [71, 1756], [-303, -417], [-191, -2035], [-311, -514], [-282, 1932], [-661, 238], [-84, 2398], [-286, 617], [-1293, -3499]], [[50994, 766891], [-531, -524]], [[50463, 766367], [-1, 3048], [448, 4], [154, 1512], [-6, 3289], [476, 13], [-1, 1619], [475, 67], [154, 1547], [1, 3270], [485, -4], [6, 3225], [637, 43], [12, 3203], [445, 89], [15, 3067], [182, 1579], [477, 25], [0, 3224], [493, -11], [186, 1563], [8, 3225], [507, 4], [5, 1610], [467, 16], [198, 3194], [2956, 4], [8, -1469], [510, -22], [-8, 1633], [498, 0], [-2, 1661], [984, -7], [4, -1637], [3362, -86]], [[64598, 804865], [7, -22905], [-456, -39], [-2, -1619], [-951, 22], [-2, -1609], [-471, 19], [-265, -3261], [-958, 50], [-3, -1622], [-474, 33], [8, -3299], [225, -22], [8, -3864]], [[61264, 766749], [-1094, -1968], [-1643, -2597], [-488, 694], [-101, 1404], [-594, 1396], [200, 3649], [-345, -1592], [-443, -553], [-70, -2804], [-801, 1977]], [[61034, 724293], [684, -546], [-930, -219], [246, 765]], [[56429, 729876], [0, -164]], [[71633, 804882], [114, -1587], [2, -6528], [-372, -12], [-8, -6508], [-349, -18], [4, -6266], [-358, 2], [-1, -1645], [-479, -10], [4, -3277], [-474, -9], [9, -1643], [-817, -49], [13, -3241], [-942, -28], [7, -3279], [147, -19], [0, -6355], [154, -1634], [923, 0]], [[69210, 762776], [6, -3471], [-451, -1843], [-737, -1056], [-775, -256], [-137, -1018], [-764, -799], [5, -5901], [-324, -916], [-690, -542], [-206, -2415], [-364, -3], [217, -1278], [-364, -813], [-335, 533], [-168, -1391], [-665, 236], [-689, -3490], [-376, -3218], [1106, -40]], [[63499, 735095], [-533, -3229], [-498, 991], [-282, -2643], [-166, 1250], [-876, -3730], [-513, 1840], [-92, -1738], [-418, -1466], [296, -1221], [-476, -272], [-290, 1208], [-838, -1435], [-237, -1294], [834, 518], [-97, -1512], [-772, 886], [46, -1061], [-586, 328], [-1006, -4054], [729, 1416], [657, -1055], [-889, -5668], [-359, 2476], [4, -2388], [-570, 564], [-201, -1661], [-1170, -914], [-208, -1647], [-122, 1992], [-210, -168], [97, -2311], [-193, -2336]], [[56429, 728441], [767, -812], [-200, 4018], [209, 1634], [849, 4197], [641, 1528], [416, 1983], [586, 1663], [449, -1863], [-120, 2913], [-249, -206], [-33, 2059], [290, 6723], [197, 1491], [339, 172], [-417, 2930], [210, 2814], [593, 2402]], [[61742, 767278], [-122, 1251], [-356, -1780]], [[64598, 804865], [4289, -12], [2746, 29]], [[65699, 709070], [-504, 743], [538, 1338], [-34, -2081]], [[70400, 724037], [-204, -1087], [-507, -19], [711, 1106]], [[68717, 724702], [-248, -2013], [-521, -1695], [195, 2304], [574, 1404]], [[69851, 724354], [-436, -1711], [-363, 958], [373, 1308], [426, -555]], [[72264, 735888], [652, -276], [179, -1133], [-749, -602], [-369, -1913], [-211, 2137], [498, 1787]], [[71587, 750055], [468, -1112], [219, -1969], [-713, 1537], [26, 1544]], [[72120, 750653], [753, -1609], [143, 801], [402, -896], [-318, -1580], [497, -23], [268, 1873], [865, -1804], [-646, -1899], [256, -25], [-10, -2224], [878, 340], [-525, -3652], [-487, 209], [-630, 1356], [-203, -636], [516, -1216], [-217, -2411], [-308, -183], [-530, 1368], [-252, -544], [428, -942], [-369, -902], [-532, 226], [-638, -2935], [-448, 348], [322, -1679], [-993, -4198], [-692, -436], [210, 1779], [607, 2267], [-322, -122], [145, 1970], [-434, -1663], [-185, 436], [446, 2279], [-692, 794], [-670, -678], [121, -1421], [343, 1135], [574, 213], [-521, -3914], [-672, 1507], [-36, 3723], [-598, 1836], [84, 2427], [258, 1668], [756, 2433], [973, 103], [65, -1861], [626, -4463], [-146, 2063], [79, 2795], [-205, 1554], [707, -247], [-927, 1791], [6, 1470], [589, 1559], [420, -1165], [70, -2442], [173, 2477], [785, -907], [-89, 1984], [525, -1432], [-620, 2635], [25, 690]], [[72294, 752633], [298, -243], [385, -2001], [-773, 1279], [-524, 168], [436, 1600], [178, -803]], [[74768, 758553], [203, -1495], [404, 602], [-151, -1955], [514, 1173], [-65, -2164], [-262, -1096], [-683, 1715], [168, -2076], [-474, 81], [-333, -1022], [-38, 2484], [-168, -2623], [-420, -227], [-2, -1319], [-1062, 2147], [-116, 1830], [591, -260], [-304, 1148], [155, 946], [718, -477], [-71, 2281], [415, 1422], [495, -330], [342, -2521], [144, 1736]], [[73815, 761335], [865, 1186], [-377, -3031], [-415, 471], [-73, 1374]], [[72144, 766667], [-256, -165], [-280, -2562], [-647, -1820], [-614, -90], [-174, -2212], [-343, -44], [105, -2404], [-386, -649], [215, -848], [-603, -2221], [-48, -1387], [-356, 1779], [54, -1574], [-326, 275], [-477, -1769], [-794, 237], [-111, -2260], [-819, -2015], [-130, -1037], [-601, 883], [69, -2348], [-396, -579], [8, -1505], [-775, 384], [-34, -2432], [-519, 654], [-902, -2724], [-22, -1053], [572, 813], [-197, -1902], [142, -997]], [[69210, 762776], [1367, 8], [-4, 1619], [1015, 11], [-7, 2250], [404, -14]], [[71985, 766650], [159, 17]], [[127092, 749125], [-108, -525]], [[126984, 748600], [108, 525]], [[125289, 753706], [-418, -538]], [[124871, 753168], [418, 538]], [[124853, 753145], [-548, -606], [-395, -1297], [-254, 1283]], [[123656, 752525], [58, 1722]], [[123714, 754247], [93, 682]], [[123807, 754929], [26, -1188], [798, 113], [222, -709]], [[124293, 757146], [750, -2547], [-1015, 763], [-163, 962], [428, 822]], [[124853, 768717], [212, -1953], [1164, -2450], [370, -2181], [920, -3383], [-234, -797], [806, -4371]], [[128091, 753582], [-944, -4191]], [[127147, 749391], [-328, -1604]], [[126819, 747787], [-268, -754]], [[126551, 747033], [-347, 2791], [-601, 2743], [-35, 3375], [303, 711], [-120, 1531], [-569, -3645], [-843, 2824], [-590, 340], [-224, 2827], [-377, 2538], [-7, 5750]], [[123141, 768818], [1712, -101]], [[122508, 768865], [607, -35]], [[123115, 768830], [93, -1237], [-283, -3191], [-329, 1969], [-88, 2494]], [[125029, 711856], [426, 56], [-445, -1309], [19, 1253]], [[123927, 716625], [1, 1610]], [[123928, 718235], [-1, -1610]], [[130215, 719801], [108, -2063], [754, -2315], [-336, -626], [253, -2100], [-617, -805], [-300, 1242], [211, 718], [-488, 1319], [-281, -690], [-163, 3076], [325, 412], [163, 1719], [371, 113]], [[129377, 721918], [250, -1134], [-116, -2167], [-588, -789], [-541, 1883], [181, 1807], [814, 400]], [[130831, 716911], [-490, 1839], [74, 2204], [-143, 1693], [378, -777], [303, -2038], [326, 198], [294, -2758], [-436, -1557], [-306, 1196]], [[128815, 728558], [1034, -4174], [-771, -1664], [-361, 266], [61, 2359], [-148, 3100], [185, 113]], [[126153, 727422], [-66, 1104], [447, -558], [-460, -4949], [-272, -4761], [208, 396], [-146, -3602], [-196, 615], [-111, 3651], [-137, -5807], [-277, 1260], [-135, 3642], [145, 2920], [526, 49], [-192, 2101], [-590, 341], [100, 963], [-331, 2219], [-29, 2428], [339, -758], [184, 2186], [563, -1046], [430, -2394]], [[126096, 733937], [1281, -1597], [901, -116], [344, -1458], [134, -4906], [-200, -1131], [-499, 1925], [-370, 3180], [207, -4438], [380, -383], [50, -1490], [-322, -1689], [-658, 1032], [13, -897], [-616, -308], [-202, 4527], [180, 2218], [-302, 119], [-133, 1682], [-635, 2448], [447, 1282]], [[130328, 738612], [338, -2561], [-338, -2230], [903, -864], [-220, -3192], [700, -1259], [104, -3850], [709, 243], [1429, -3886]], [[133953, 721013], [216, -2256], [-268, -1574], [-451, 60], [-521, -1243], [215, -2328], [-365, 57], [-534, 1418], [-527, -1313], [-53, -1739], [-415, -1188], [272, -1077], [-69, -1917], [-376, -1020], [-347, 1785]], [[130730, 708678], [461, 1375], [54, 2694], [202, 40], [-9, 3932], [574, 625], [-465, 526], [-185, 2188], [-506, 719], [-71, 1280], [-436, 1390], [255, 2614], [-502, -62], [-114, 1369], [-779, 1724], [-462, 2944], [356, -608], [-84, 2468], [-160, -1289], [-1098, 1537], [-631, 1283]], [[127130, 735427], [606, 1116], [480, -957], [393, 2691], [951, 1778], [768, -1443]], [[126819, 747787], [-268, -754]], [[120135, 747679], [-912, -75]], [[119223, 747604], [-113, -8]], [[119110, 747596], [-67, -6]], [[119043, 747590], [175, 3136], [917, -3047]], [[118824, 752542], [436, -1596], [-323, -3068], [-280, 1218], [167, 3446]], [[127130, 735427], [-12, 1829], [1069, 643], [-784, 626], [-295, 2733], [131, 1559], [-541, 1078], [246, 1825], [1153, -2770], [-708, 2710], [-430, 722], [25, 2218]], [[127092, 749125], [55, 266]], [[128091, 753582], [284, -2841], [560, -2991], [878, -6389], [515, -2749]], [[124853, 753145], [18, 23]], [[125289, 753706], [-147, -677], [907, -5880], [24, -2256], [-213, 92], [-809, 7066], [77, -1904], [-257, 510], [590, -4994], [507, -2211], [51, -2144], [-522, 218], [645, -2298], [-310, -1473], [-532, 1666], [53, -3416], [-405, -716], [-195, -1446], [-545, -1275], [-191, 2104], [52, 2518], [366, 839], [-4, 1567], [-686, 5962], [71, 2065], [-287, 4181], [127, 721]], [[121078, 751604], [-276, -1102]], [[120802, 750502], [345, -330], [594, 2364], [322, 432]], [[122063, 752968], [1024, -1345], [153, -1323], [-237, -1608], [-620, 1179], [756, -2767], [-774, -494], [-453, 1350], [-1420, 2800]], [[120492, 750760], [-345, -2996]], [[120147, 747764], [-1106, 4388], [167, 2241], [346, -765], [279, 1062], [445, -194], [426, 1507], [912, -2103], [-538, -2296]], [[121729, 756782], [0, -124]], [[121729, 756658], [0, 124]], [[123714, 754247], [-96, -1670], [-340, 1775], [-158, 4018], [687, -3441]], [[120618, 759891], [-327, 4038], [-328, 1992], [899, 1274], [-790, 545], [-394, 2927], [235, -3862], [-191, -2032], [-885, 1580], [-102, 2460], [-280, -1505], [-688, 1343], [-390, -1137], [760, -460], [670, -1418], [-345, -493], [774, -1580], [-470, -1770], [539, 847], [340, -512], [457, -4298], [-641, -1196], [-12, 909], [-620, -1129], [-299, 1069], [42, -2620], [-717, 2665], [-654, 322], [-1471, 4078], [-936, 3744]], [[114794, 765672], [1165, 1936]], [[115959, 767608], [1943, 4721], [682, 110], [264, 1748]], [[118848, 774187], [1665, -1619], [529, -1279], [326, -2198], [-479, -4537], [582, -819], [408, -1530], [231, -2152], [-488, -12]], [[121622, 760041], [48, -2295], [-406, 960], [-823, -873], [177, 2058]], [[122913, 775799], [-901, -103]], [[122012, 775696], [-90, 222]], [[121922, 775918], [-936, 7001]], [[120986, 782919], [676, 1289], [685, -1897], [571, -2466], [-201, -2534], [196, -1512]], [[121729, 756782], [0, -124]], [[123141, 768818], [-26, 12]], [[122508, 768865], [-496, 6831]], [[122913, 775799], [197, -1218], [722, -594], [59, -1056], [547, -1130], [415, -3084]], [[121922, 775918], [-144, -2315], [-359, 300], [514, -2661], [-51, -2482], [722, -6540], [-70, -1017], [303, -3963], [-99, -2100], [-512, -56], [-321, 1677], [-283, 3280]], [[118848, 774187], [34, 3836], [479, -24], [183, 1767], [-318, 751], [1118, 1162], [642, 1240]], [[120877, 738496], [390, -2216], [135, -2451], [-165, -1458], [-606, -381], [12, 6413], [234, 93]], [[122848, 727161], [-437, -147], [76, 1437], [-513, 245], [-61, 2351], [448, 1679], [-481, 1224], [98, 2801], [-465, -185], [-451, 2135], [587, 60], [-327, 842], [147, 1990], [629, 564], [-76, -1197], [394, 257], [556, -1676], [492, 7], [-82, -2392], [463, -6885], [222, -4906], [-139, -7130]], [[123927, 716625], [-394, 1362], [-698, 5371], [279, 1647], [-447, -368], [181, 2524]], [[119110, 747596], [-67, -6]], [[119342, 746836], [-119, 768]], [[120135, 747679], [12, 85]], [[120492, 750760], [1454, -3708], [395, -1834], [350, 1018], [503, 16], [257, -5147], [-688, -337], [-264, 1058], [-1794, 4643], [717, -3300], [33, -2583], [-443, -1626], [-365, 435], [-452, 2590], [539, -1592], [-959, 3723], [85, 790], [-518, 1930]], [[40063, 839903], [771, -536], [-861, -2773], [-123, 3413], [213, -104]], [[40964, 844347], [884, -2223], [77, -1915], [441, -2172], [-39, -1739], [-704, 2419], [-1775, 1536], [91, 1825], [445, 2301], [580, -32]], [[42066, 848667], [903, -976], [561, -1663], [-705, -1821], [-339, -2285], [-564, -2], [-710, 2401], [-621, 812], [14, 1297], [651, 1760], [810, 477]], [[46154, 848898], [568, 1], [10, -1610], [528, 1], [18, -1676], [523, -12], [-2, -1547], [3175, 0]], [[50974, 844055], [-395, -2136], [-21, -6445], [-125, -25], [-6, -6437], [382, -5], [-9, -4748], [1057, -39]], [[51857, 824220], [181, -1451], [603, -215], [-1455, -2220], [-980, -2588], [-900, -571], [-1212, -1602], [-1236, 662], [-494, 709], [-1853, -1999], [-659, 648], [-690, -2756], [-940, 669], [30, -2392], [-390, -2165], [-92, -1943], [-1045, -1524], [-745, 777], [-937, -1159]], [[39043, 805100], [-170, 1112], [663, 830], [-1128, 3201], [-12, -2176], [-520, 182], [-235, 2567], [115, 849], [-613, 570], [-206, 2124], [417, 1187], [-482, 1393], [-545, -1186], [-96, 2644], [1075, 795], [-527, 599], [-414, 1924], [1382, 581], [-440, 3024], [250, 2550], [1108, 5288], [620, 2101], [570, -118], [934, 3976], [822, -896], [964, -4031], [-209, 4581], [-455, 1793], [10, 1197], [849, 640], [78, 1725], [725, 1785], [524, -1400], [778, 465], [611, 2670], [668, 1252]], [[46896, 791982], [260, -1285], [-269, -665], [9, 1950]], [[36192, 795959], [181, -1952], [581, 363], [562, -947], [-125, -4413], [449, -2402], [-1266, -1162], [-486, -2126], [-684, 2000], [-494, -131], [-1055, 2670], [-324, -89], [-642, 1570], [-208, 2198], [273, 856], [1285, -623], [56, 1282], [1009, 2111], [905, -187], [-17, 982]], [[17304, 799216], [127, -1746], [803, -2157], [617, -183], [448, -1365], [-1030, 65], [-999, 3082], [-322, 373], [356, 1931]], [[39654, 805231], [135, -1106], [641, 589], [-99, -1482], [647, 41], [525, -808], [141, -1889], [-483, -1833], [-426, -534], [213, -1308], [-376, -571], [-318, -2845], [-421, 135], [-776, 2413], [438, 1980], [-611, -775], [-639, 998], [1250, 2977], [-198, 1359], [400, 589], [-43, 2070]], [[49028, 771386], [-725, 158], [-208, -907], [-382, 2903], [195, 2895], [687, 2210], [-440, 2484], [-275, 3082], [-345, 1471], [-415, 3726], [136, 1138], [-767, 3115], [394, 1259], [285, 3791], [-130, 576], [-403, -4188], [-432, -1001], [310, -2534], [-70, -3037], [-404, -1084], [-1629, -2447], [-1521, -851], [-1010, 789], [-259, 2086], [268, 429], [-760, 1956], [-695, 3087], [-88, 1177], [383, 1597], [-109, 1291], [397, 379], [-182, 1458], [363, 50], [278, 1573], [409, 341], [230, 1753], [700, -118], [-14, -3249], [424, 240], [608, 2498], [-385, 1562], [-1050, 843], [630, 147], [398, 1002], [-599, 266], [-481, -1345], [-126, 3490], [-457, -1833], [195, -1308], [-1243, -569], [-215, 1520], [-538, -627], [-174, 927], [-744, -457]], [[51857, 824220], [3537, -32], [11, 1610], [2034, -6], [-4, 1618], [4082, 202], [1, -1838], [5893, -29], [3388, 4], [-14, 1715], [961, 61], [4, 1569], [902, -10], [192, 1616]], [[72844, 830700], [-1, -16190]], [[72843, 814510], [-1303, 45], [-16, -5422], [126, -21], [-17, -4230]], [[50463, 766367], [-102, -328]], [[49619, 764426], [-138, -1468], [-1061, -1905], [-96, 1293], [-1035, 446], [860, 1205], [618, 1650], [-308, 160], [-106, 3181], [675, 2398]], [[91002, 847056], [9, -3989], [146, -1794], [7, -11469], [-1549, 27], [57, -1647], [46, -12768], [-727, 13], [0, -927], [-3493, 32]], [[85498, 814534], [-2027, -32], [-141, 994]], [[83330, 815496], [-403, 602], [-737, -459], [-671, -2022], [-282, -2604], [-1336, 126], [-327, 2166], [-17, -1517], [-1057, -1636]], [[78500, 810152], [-3, 1151], [-1003, 22], [-4, 3165], [-4647, 20]], [[72844, 830700], [0, 8044]], [[72844, 838744], [3089, -82], [11, 1347], [6636, 9993], [4097, -25], [10, 2587], [2946, 186]], [[89633, 852750], [1355, 59], [14, -5753]], [[86653, 868811], [757, -1569], [2146, 14]], [[89556, 867256], [85, -6324], [-8, -8182]], [[72844, 838744], [1580, 8235], [0, 2535], [-536, -83], [-516, 926], [-151, 2433], [36, 3161], [1704, 93], [23, 3109], [496, -4], [22, 3291], [619, 94], [97, 1433], [589, 57], [151, -984], [624, -420], [1536, 6613], [4538, -402], [2997, -20]], [[85498, 814534], [-39, -10730], [-759, -83], [2, -2090]], [[84702, 801631], [-828, 17], [8, 1987]], [[83882, 803635], [-435, 1931], [-461, -308], [-1060, 1668], [-902, 2472], [707, 3049], [1129, 2748], [470, 301]], [[97243, 787641], [-969, -3439], [63, 996], [906, 2443]], [[87222, 789210], [-180, -1772], [-423, -410], [603, 2182]], [[86635, 788749], [222, 2200], [234, -961], [-456, -1239]], [[86657, 791573], [-367, -3115], [-331, 1166], [698, 1949]], [[89187, 794370], [361, -14], [-243, -1523], [503, 637], [-806, -2688], [-815, -3927], [158, -1241], [-672, -1392], [-694, -249], [129, 1479], [1250, 4306], [686, 2953], [143, 1659]], [[86770, 795107], [-72, -1859], [-323, 817], [395, 1042]], [[90856, 797012], [511, -366], [-55, -1276], [665, 500], [124, -712], [-949, -1371], [-533, -1467], [-220, 828], [596, 1566], [-651, -377], [-24, 893], [536, 1782]], [[87021, 792777], [236, 3392], [602, -294], [-414, -4995], [-424, 1897]], [[84910, 786500], [234, 323], [67, 9012], [-285, 661]], [[84926, 796496], [583, 1622], [519, -1020], [524, 1882], [285, -1347], [30, -1922], [-995, -2869], [605, -1030], [-718, -2215], [-216, -2677], [-633, -420]], [[92921, 798974], [-9, -545], [-1146, -2071], [-223, 1207], [1378, 1409]], [[88340, 800844], [382, -576], [-511, -770], [129, 1346]], [[84951, 800675], [-1, 141]], [[84950, 800816], [1, -141]], [[86236, 802132], [283, -1843], [-420, 600], [137, 1243]], [[84951, 797243], [-1, 3142]], [[84950, 800385], [697, 2105], [-37, -2998], [389, 2501], [243, -2671], [-389, -1481], [-417, 814], [-485, -1412]], [[86677, 805210], [323, -2117], [-624, -286], [301, 2403]], [[87479, 803390], [-298, -138], [-587, 2075], [325, 2591], [505, 2085], [121, 1742], [-770, -3524], [-194, -1549], [-273, 1236], [-414, -4415], [-943, -1986]], [[84951, 801507], [-249, 124]], [[91002, 847056], [976, 234], [64, 648], [2681, 18], [1, -1651], [1593, -292], [4039, -37], [350, -2273], [-455, -2972], [436, -1269], [-269, -2840], [730, -302], [297, 1950], [1174, -335], [-16, -1588], [538, -65], [-11, -1551], [466, -23], [-40, -6434], [413, -697], [3, -4218], [2305, 16]], [[106277, 823375], [-1, -28115]], [[106276, 795260], [-590, 822], [-1600, -31], [3, 1610], [-3846, -34], [-2013, -8871], [13, -855]], [[98243, 787901], [-1022, 2714], [46, 774], [-1003, -33], [-278, 1650], [-683, 426], [370, 3141], [18, 2628], [-612, -1565], [-177, -1401], [-661, -2022], [-456, 1505], [-714, 1071], [-573, -359], [943, 3800], [-1115, -764], [259, 1691], [-925, -1558], [532, 2101], [-1010, -888], [-678, 62], [-93, 801], [1014, 956], [445, 1115], [-1048, -704], [-517, 1833], [317, 3213], [1054, 57], [-177, 903], [-745, -283], [-1115, -3389], [-360, 1426], [-192, -1467], [-587, -1116], [-377, 408], [7, 3472], [-279, -1340], [36, -2946], [-408, -423]], [[71985, 766650], [159, 17]], [[71670, 777076], [234, -1111], [-578, -409], [344, 1520]], [[79473, 776784], [-279, -2074], [91, 2387], [188, -313]], [[75949, 796147], [-338, -1237], [225, 2636], [113, -1399]], [[84951, 800675], [-1, 141]], [[84951, 801507], [-1, -1122]], [[84951, 797243], [-25, -747]], [[84910, 786500], [-1246, 807], [242, 1474], [-372, -167], [-386, -2037], [-206, 3701], [-28, -2396], [-482, -1666], [-172, -1732], [-184, 2620], [-197, -5326], [-848, 3357], [-38, -1545], [418, -800], [-370, -1104], [-67, -1569], [-636, -858], [208, 3841], [-674, -5212], [-362, 1475], [21, -2088], [-388, -20], [-756, -4011], [-74, 2111], [-348, -2231], [-659, 934], [-174, -858], [-797, -888], [-20, 1049], [-622, 715], [206, 2741], [545, 1203], [719, 24], [15, 1316], [737, 963], [-65, 842], [764, 2927], [-372, 25], [-1226, -2967], [-387, 246], [-630, 2275], [461, 4880], [785, 3381], [113, 2715], [230, 475], [103, 3025], [-412, 3227], [967, 1254], [994, 2799], [846, 1832], [515, -1977], [449, -352], [796, 1052], [346, -814], [1490, -887], [200, -646]], [[78500, 810152], [-530, -2655], [-888, -709], [-891, -2927], [269, -2258], [-403, 43], [-549, -1340], [-154, -1303], [-582, -1608], [-230, -3803], [-475, -1478], [-1034, 410], [708, -1448], [308, -1772], [-383, -2913], [-286, -680], [-1149, -274], [-158, -989], [796, 2], [-164, -2224], [-453, -1067], [-564, 295], [229, 1314], [-338, 1411], [33, -1984], [-398, -2576], [-670, -197], [277, -1966], [-1054, -1700], [-61, -2764], [-262, -488], [165, -2860], [276, 1050], [1026, 35], [412, -1681], [604, -1165], [58, -1233]], [[110729, 776964], [-495, 571], [-782, 1958], [461, 899]], [[109913, 780392], [89, -474], [541, 2603], [-419, 3604], [332, 1618], [530, -2532], [165, 177], [-481, 2635], [-359, 838], [-174, -1871], [-465, -2242], [-1471, -2407], [-1544, 735], [-1624, 2726], [528, 2089], [-370, 3152], [-376, -855], [438, -1616], [-624, -1272], [-2761, 2302], [-2698, -711], [-927, -990]], [[106276, 795260], [0, -1588], [1342, -1612], [173, 1644], [1330, -2348], [802, 2853], [1723, 322], [-346, -4919], [404, -1740], [965, -1648], [226, -2564], [2839, -9770], [299, -4811], [-74, -1471]], [[114794, 765672], [-73, 1821], [-695, 2541], [-827, 1292], [164, 1473], [-569, -631], [-2065, 4796]], [[106278, 946179], [-1, -49412]], [[106277, 896767], [-929, -2456], [-130, -1602], [-1321, -3358], [-906, 419], [-783, -1692], [-450, 406], [-348, -3371], [-325, -1449], [-654, -436], [-1189, -2953], [58, -3794], [-685, -1988], [-823, 655]], [[97792, 875148], [-203, 2150], [357, 3326], [-316, 717], [514, 847], [-160, 1080], [-963, -156], [-338, -900], [-1243, 1394], [-888, -1195], [-579, 220], [-637, -952], [-288, 1202], [375, 852], [-1289, 1884], [-167, 1203], [400, 1802], [-515, 869], [-625, -619], [-460, -1403], [-1060, -1320], [-1074, -9], [-602, -1160], [-3101, 7], [49, -11364], [273, 317], [852, -2473], [549, -2656]], [[50974, 844055], [11, 4776], [491, 30], [-59, 4948], [549, 10], [5, 1425], [1101, 13], [-16, 1635], [486, 23], [-4, 1682], [645, -27], [-88, 4840], [-628, -25], [-60, 12985], [569, 32], [-10, 3218], [559, 13], [-6, 6310], [540, -19], [-4, 4867], [-576, -8]], [[54479, 890783], [-6, 8106], [1752, -15], [3, 3093], [2984, 34], [5, 6544], [2342, 37], [2, -3291], [1183, 54], [6, 3237], [1193, 13], [-3, -1578], [602, 62], [1, -1631], [1167, -18], [135, 4837], [1805, -29], [9, 2777], [1841, -6], [167, 1644], [-9, 6647], [-439, -22], [-9, 1684], [-1233, 60], [2, 4808], [171, 1666], [-625, -6], [17, 1605], [-635, -28], [7, 1646], [-620, 10], [151, 4213]], [[66445, 936936], [6420, -4], [8315, -29], [7299, 19], [3886, 4], [-10, 9097], [4664, 308], [4791, -299], [4468, 147]], [[97792, 875148], [-1157, -1861], [-1437, -203], [-262, -1097], [-804, -486], [-476, -1290], [-576, 795], [-732, -1427], [-433, 44], [-568, -2104], [-1791, -263]], [[106277, 896767], [0, -73392]], [[79658, 983425], [-185, -1457], [-394, 1372], [579, 85]], [[47581, 977020], [610, -137], [635, 1732], [830, 26], [1623, 2411], [1469, 3493], [882, 526], [-302, -3710], [454, -2620], [-61, 3461], [378, 971], [-494, 2434], [-541, 44], [1262, 3273], [1370, 1209], [-524, -1006], [415, -852], [3298, 1403], [1420, 2119], [704, 1934], [1322, 4592], [409, 808], [628, -1392], [914, -472], [118, -1343], [1297, -96], [153, -1576], [-590, -1822], [-1262, -1268], [607, -390], [-401, -1320], [1303, -53], [456, 606], [-100, 1673], [703, 1368], [285, 1695], [248, -1304], [706, 927], [681, -1755], [-272, -1974], [1375, -2190], [694, 2096], [1211, 87], [986, 692], [972, -831], [277, -2576], [300, 2683], [990, -1071], [-562, -2518], [5, -1534], [1010, -523], [-1484, -682], [2476, 170], [-501, -2281], [1553, -378], [327, -1081], [239, 1607], [1279, 271], [-193, -2495], [904, 1575], [843, 524], [666, 1465], [1962, -426], [888, -1702], [687, 50], [281, -1516], [1081, 465], [877, -2131], [2069, -1579], [1437, 785], [1494, -1037], [433, 636], [1636, -3239], [1773, -386], [360, 910], [3398, 1866], [1397, -1342], [1104, -2166], [387, -1504], [1266, -1053], [1132, -2958], [448, 853], [589, -630], [-2, -21362]], [[66445, 936936], [-1, 524], [-2610, -22], [-8, 1898], [-2540, -186], [-17, 1670], [-3117, 28], [-4015, 91], [-18, 1253], [-1130, 59], [26, -1251], [-2704, 20], [-18, 1270], [-1182, 3], [10, -1281], [-1329, 46], [-5, 1284], [-2022, 164], [0, -1272], [-4956, -97], [15, -3781], [-2411, 69]], [[38413, 937425], [-1696, 2109], [-331, 1546], [-1318, 2643], [529, 805], [402, 3101], [39, 5653], [2426, -417], [2904, 1306], [906, 1070], [1222, 2915], [1185, 4351], [538, 5905], [-331, 649], [1232, 3475], [364, 2386], [847, 2064], [658, 2579], [521, -1587], [-929, -958]], [[54479, 890783], [-578, 0], [-11, -1618], [-6225, 44], [-4789, -36], [-3, 3199], [-591, 6], [0, 3250], [-768, -9], [6, 6455], [-204, 26], [-6, 6429], [-226, 1957]], [[41084, 910486], [1579, 206], [201, -2555], [-310, -1226], [121, -2179], [-264, -1027], [215, -1763], [590, -1196], [376, 539], [1137, -444], [965, 699], [321, -1177], [667, -159], [981, 798], [547, -2005], [189, 2045], [810, 3513], [796, -959], [610, 527], [-497, 1901], [-1493, 1021], [-695, -1271], [194, 3234], [-839, 3465], [-837, 787], [-420, 2412], [385, 1580], [445, 29], [876, -3093], [-152, -2499], [446, -1912], [933, -1943], [1112, 1831], [1076, -3146], [1509, 330], [133, 1771], [-332, 2163], [-932, -161], [-461, 1239], [-884, -261], [-253, -1862], [-716, -283], [-1101, 3517], [233, 3055], [871, 1517], [-975, 1716], [-1120, -1075], [-1026, -154], [-390, 1249], [-528, -563], [-2239, 1823], [-398, 5493], [-678, 3577], [-1095, 2080], [-2354, 5735]], [[46592, 855663], [132, -1524], [-911, 379], [779, 1145]], [[20846, 858391], [155, -1916], [1767, -2170], [1394, 2515], [527, -233], [507, -1478], [154, -2243], [1091, -1044], [302, -1308], [1484, -327], [900, -741], [-444, -2851], [-1263, 663], [-757, -2936], [125, -925], [-598, -398], [121, 1508], [-579, 2032], [-993, 769], [95, 1587], [-982, 2254], [-776, 1164], [-1178, -1499], [-407, -1269], [-853, 1089], [-307, 2233], [515, 5524]], [[40155, 909679], [-379, -812], [-1697, -1707], [2076, 2519]], [[50524, 879793], [-439, -61], [-575, -2905], [-898, 82], [-597, -1411], [-710, -398], [-196, -1163], [-839, -1617], [-254, -2636], [-445, -1193], [-160, 3172], [-951, 2837], [-460, -1140], [679, -1515], [9, -1793], [-1367, 2871], [-2017, -59], [-2019, -2250], [-808, 901], [-2507, 1784], [-688, 2790], [278, 1486], [-107, 1445], [-748, 1759], [-608, 2844], [665, -529], [574, 1255], [300, 1828], [875, -777], [602, -2903], [499, -323], [641, 1345], [-383, 829], [-828, 195], [-166, -711], [-668, 2577], [-1943, 1612], [-1533, 483], [-1421, 2817], [-463, 460], [785, 2443], [578, 22], [0, 1593], [845, 1741], [325, -909], [992, 2482], [419, 1887], [1043, 1672], [643, -1027], [1215, 98], [319, 782], [-1041, 1555], [504, 1845], [720, 1193], [1099, 506], [108, -679], [852, 2834], [830, 667]], [[46154, 848898], [640, 3384], [126, 1617], [837, -1042], [-393, -958], [1743, 358], [1078, 995], [1027, 4968], [-512, 5797], [-74, 2808], [-781, 2760], [-730, 206], [138, 2075], [1090, -247], [768, 2179], [53, 1989], [-321, 1964], [-700, 1681], [381, 361]], [[129335, 693546], [271, -1010], [-141, -1955], [-386, 2864], [256, 101]], [[133465, 694933], [143, -1619], [-432, -1116], [-420, 1401], [709, 1334]], [[129050, 698432], [385, -3029], [-188, -665], [-381, 868], [234, 1060], [-50, 1766]], [[128270, 699419], [265, -2151], [-73, -1620], [898, -5179], [113, -1526], [-466, 199], [-649, 4105], [-450, 3522], [51, 2603], [311, 47]], [[132791, 699517], [330, -1553], [-34, -2741], [-744, 304], [318, 2135], [-200, 1262], [330, 593]], [[127590, 701351], [341, -1447], [-98, -960], [-490, -120], [13, 2204], [234, 323]], [[126996, 702605], [285, -601], [-587, -1676], [302, 2277]], [[127348, 703974], [-506, -707], [254, 1440], [252, -733]], [[126550, 705223], [399, -333], [-241, -1814], [-292, 1013], [134, 1134]], [[127577, 705503], [193, -1280], [-213, -947], [-254, 1520], [274, 707]], [[126975, 710441], [673, -1209], [-594, 136], [47, -1542], [-469, 1638], [343, 977]], [[127738, 711890], [120, -2595], [-287, 1329], [167, 1266]], [[132952, 712558], [-518, -394], [513, 1289], [5, -895]], [[127378, 716539], [385, -260], [-14, -2495], [-237, 369], [-704, -1255], [-241, -1211], [-256, 709], [517, 3076], [550, 1067]], [[126878, 720141], [452, -580], [748, 57], [385, -2788], [-192, -1470], [384, -1821], [435, 266], [496, -1761], [457, -2620], [48, -3196], [266, 734], [170, -1960], [371, -1718], [-851, 2044], [-551, -1434], [684, 586], [160, -2342], [298, 487], [445, -2791], [-465, -922], [455, -352], [205, 1480], [89, -3147], [-431, -827], [397, -512], [100, -2503], [-398, -58], [420, -1193], [-181, -2479], [-613, 701], [-450, 4337], [-562, -35], [259, 2639], [-330, -709], [133, 1822], [-301, -502], [-724, 2251], [-726, 264], [29, 1948], [514, -22], [-360, 1667], [235, 2818], [-439, -874], [-449, 797], [645, 3530], [-239, 1458], [-150, 5159], [-813, 307], [-188, 1878], [133, 1386]], [[133953, 721013], [796, -683], [443, -1861], [433, -443], [117, -1890], [501, -840], [396, 491], [280, -2136], [-1, -1873], [-414, -2628], [68, -3449], [428, -5570], [-358, -1661], [-236, -2416], [-442, -2702], [-867, -2699], [-212, 1931], [-287, -2059], [-268, 662], [-207, 4192], [490, 1687], [-537, -477], [-157, 1948], [583, 2169], [-76, 7458], [-888, 5088], [-486, -470], [-72, 869], [-948, -2430], [-397, -118], [344, -1651], [-544, -5283], [-589, 1664], [-116, 2845]], [[312327, 9345], [187, -606]], [[312514, 8739], [-15, -1700]], [[312499, 7039], [-350, 67]], [[312149, 7106], [17, 912]], [[312166, 8018], [43, 812]], [[312209, 8830], [118, 515]], [[312084, 13310], [6, -1329]], [[312090, 11981], [-147, -93]], [[311943, 11888], [-157, 1159]], [[311786, 13047], [223, 739]], [[312009, 13786], [75, -476]], [[312224, 10808], [178, -1249]], [[312402, 9559], [-75, -214]], [[312209, 8830], [-202, 83]], [[312007, 8913], [-56, 275]], [[311951, 9188], [-19, 1838]], [[311932, 11026], [292, -218]], [[313107, 15064], [-14, -2950]], [[313093, 12114], [-156, -33]], [[312937, 12081], [5, 366]], [[312942, 12447], [-35, 2685]], [[312907, 15132], [200, -68]], [[312774, 6524], [70, -1309]], [[312844, 5215], [-339, -40]], [[312505, 5175], [62, 1491]], [[312567, 6666], [207, -142]], [[312709, 10760], [26, -1201]], [[312735, 9559], [-333, 0]], [[312224, 10808], [123, 645]], [[312347, 11453], [362, -693]], [[315123, 11875], [54, -127]], [[315177, 11748], [78, -1804]], [[315255, 9944], [-163, -1769]], [[315092, 8175], [-119, 1033]], [[314973, 9208], [-63, 762]], [[314910, 9970], [144, 1735]], [[315054, 11705], [69, 170]], [[314670, 11208], [37, -329]], [[314707, 10879], [60, -643]], [[314767, 10236], [-199, -737]], [[314568, 9499], [-72, 1129]], [[314496, 10628], [174, 580]], [[314052, 6833], [264, -477]], [[314316, 6356], [-19, -702]], [[314297, 5654], [-318, 76]], [[313979, 5730], [73, 1103]], [[312567, 6666], [-68, 373]], [[312514, 8739], [144, 137]], [[312658, 8876], [116, -2352]], [[312942, 12447], [-192, 448]], [[312750, 12895], [-16, -17]], [[312734, 12878], [-7, 2191]], [[312727, 15069], [180, 63]], [[314923, 14259], [-51, -293]], [[314872, 13966], [-106, 119]], [[314766, 14085], [83, 583]], [[314849, 14668], [74, -409]], [[313370, 8907], [-65, -416]], [[313305, 8491], [-209, 84]], [[313096, 8575], [-80, -30]], [[313016, 8545], [-82, 706]], [[312934, 9251], [27, 1093]], [[312961, 10344], [345, -245], [64, -1192]], [[313305, 8491], [-14, -2845]], [[313291, 5646], [-154, 397]], [[313137, 6043], [-41, 2532]], [[314464, 12205], [-98, -1502]], [[314366, 10703], [-105, -150]], [[314261, 10553], [-75, 982]], [[314186, 11535], [35, 729]], [[314221, 12264], [129, 638]], [[314350, 12902], [114, -697]], [[314016, 15104], [-14, -2136]], [[314002, 12968], [-54, 9]], [[313948, 12977], [-196, -375]], [[313752, 12602], [-27, 1007]], [[313725, 13609], [25, 1393]], [[313750, 15002], [266, 102]], [[313604, 15085], [-4, -1775]], [[313600, 13310], [-8, -956]], [[313592, 12354], [-45, -184]], [[313547, 12170], [-454, -56]], [[313107, 15064], [497, 21]], [[314264, 15070], [-76, -2601]], [[314188, 12469], [-186, 499]], [[314016, 15104], [248, -34]], [[315464, 13512], [1, -2420]], [[315465, 11092], [-66, 435]], [[315399, 11527], [-159, 1610]], [[315240, 13137], [-103, 1306]], [[315137, 14443], [122, 139]], [[315259, 14582], [205, -1070]], [[314938, 14053], [76, -2458]], [[315014, 11595], [-176, -329]], [[314838, 11266], [34, 2700]], [[314923, 14259], [15, -206]], [[315375, 10329], [63, -1608]], [[315438, 8721], [6, -426]], [[315444, 8295], [-234, -828]], [[315210, 7467], [-116, 641]], [[315094, 8108], [-2, 67]], [[315255, 9944], [120, 385]], [[313784, 8890], [255, -1302]], [[314039, 7588], [13, -755]], [[313979, 5730], [-242, -150]], [[313737, 5580], [-39, 3312]], [[313698, 8892], [16, 20]], [[313714, 8912], [70, -22]], [[315465, 11092], [-90, -763]], [[315177, 11748], [222, -221]], [[313725, 9097], [-11, -185]], [[313698, 8892], [-269, 127]], [[313429, 9019], [231, 2603]], [[313660, 11622], [65, -2525]], [[314361, 14912], [31, -1700]], [[314392, 13212], [-42, -310]], [[314221, 12264], [-33, 205]], [[314264, 15070], [97, -158]], [[312306, 11771], [41, -318]], [[311932, 11026], [-107, 568]], [[311825, 11594], [118, 294]], [[312090, 11981], [216, -210]], [[312937, 12081], [24, -1737]], [[312934, 9251], [-27, -14]], [[312907, 9237], [-172, 322]], [[312709, 10760], [41, 2135]], [[315183, 5666], [-140, -215]], [[315043, 5451], [-34, 1223]], [[315009, 6674], [174, -1008]], [[312505, 5175], [-359, -115]], [[312146, 5060], [3, 2046]], [[314634, 8727], [-21, -891]], [[314613, 7836], [-92, -363]], [[314521, 7473], [-160, 1419]], [[314361, 8892], [201, 526]], [[314562, 9418], [72, -691]], [[312295, 14639], [81, -1252]], [[312376, 13387], [-70, -1616]], [[312084, 13310], [211, 1329]], [[312007, 8913], [159, -895]], [[312146, 5060], [-281, 902], [86, 3226]], [[315210, 7467], [60, -308]], [[315270, 7159], [221, -1461]], [[315491, 5698], [-308, -32]], [[315009, 6674], [81, 1385]], [[315090, 8059], [4, 49]], [[314186, 11535], [-217, -675]], [[313969, 10860], [-21, 2117]], [[311825, 11594], [-39, 1453]], [[312009, 13786], [157, 1825]], [[312166, 15611], [129, -972]], [[313137, 6043], [-273, -820]], [[312864, 5223], [152, 3322]], [[314838, 11266], [-131, -387]], [[314670, 11208], [-8, 752]], [[314662, 11960], [28, 1348]], [[314690, 13308], [76, 777]], [[313547, 12170], [113, -548]], [[313429, 9019], [-59, -112]], [[314973, 9208], [-339, -481]], [[314562, 9418], [6, 81]], [[314767, 10236], [143, -266]], [[314776, 6994], [-112, -1631]], [[314664, 5363], [-367, 291]], [[314316, 6356], [205, 1117]], [[314613, 7836], [163, -842]], [[312679, 13384], [55, -506]], [[312376, 13387], [303, -3]], [[315090, 8059], [-314, -1065]], [[314662, 11960], [-198, 245]], [[314392, 13212], [143, 200]], [[314535, 13412], [155, -104]], [[312679, 13384], [-109, 1773]], [[312570, 15157], [157, -88]], [[313752, 12602], [-160, -248]], [[313600, 13310], [125, 299]], [[314496, 10628], [-130, 75]], [[313604, 15085], [146, -83]], [[315240, 13137], [-117, -1262]], [[315054, 11705], [-40, -110]], [[314938, 14053], [199, 390]], [[315043, 5451], [-379, -88]], [[312864, 5223], [-20, -8]], [[312658, 8876], [249, 361]], [[314001, 9349], [196, -56]], [[314197, 9293], [164, -401]], [[314039, 7588], [-38, 1761]], [[313784, 8890], [217, 459]], [[313969, 10860], [-244, -1763]], [[313737, 5580], [-446, 66]], [[314261, 10553], [-64, -1260]], [[312166, 15611], [404, -454]], [[315579, 8261], [226, -899]], [[315805, 7362], [-150, -1087]], [[315655, 6275], [-385, 884]], [[315444, 8295], [135, -34]], [[314535, 13412], [108, 1312]], [[314643, 14724], [206, -56]], [[318309, 12803], [169, -865], [-544, 830], [375, 35]], [[316158, 12800], [-233, -1215]], [[315925, 11585], [-15, -114]], [[315910, 11471], [23, 1757]], [[315933, 13228], [225, -428]], [[315714, 13936], [-106, -834]], [[315608, 13102], [-144, 410]], [[315259, 14582], [455, -646]], [[315655, 6275], [-164, -577]], [[315910, 11471], [-22, -196]], [[315888, 11275], [-160, -131]], [[315728, 11144], [-34, 42]], [[315694, 11186], [-86, 1916]], [[315714, 13936], [219, -708]], [[315888, 11275], [293, -1349]], [[316181, 9926], [-216, -625]], [[315965, 9301], [-242, 491]], [[315723, 9792], [5, 1352]], [[315723, 9792], [-144, -1531]], [[315438, 8721], [211, 2085]], [[315649, 10806], [45, 380]], [[315649, 10806], [-184, 286]], [[316256, 11347], [-331, 238]], [[316158, 12800], [154, 393], [-56, -1846]], [[316256, 11347], [125, -1005], [-200, -416]], [[315965, 9301], [-160, -1939]], [[316936, 9054], [328, -560], [-757, -908], [-91, 685], [520, 783]], [[318661, 1986], [376, -1085], [-740, -781], [24, 1181], [340, 685]], [[314361, 14912], [282, -188]]],
  "transform": {
    "scale": [0.0003589261789261791, 0.0000537148685138684],
    "translate": [-179.1473399999999, 17.67439566600018]
  }
};
},{}],"javasript/covidMap.js":[function(require,module,exports) {
"use strict";

var _adult_prevalance_ = _interopRequireDefault(require("../../static/adult_prevalance_2019.csv"));

var _adult_mh_prevalance_ = _interopRequireDefault(require("../../static/adult_mh_prevalance_2020 (2).csv"));

var _us = _interopRequireDefault(require("../../static/us.json"));

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
drawLineVegaLite();

function drawLineVegaLite() {
  var Covid2019 = vl.layer(vl.markGeoshape({
    stroke: '#aaa',
    strokeWidth: 0.25
  }).title("Percentage of Adult with any Mental illness by State in 2019").data(vl.topojson(_us.default).feature('states')).transform(vl.lookup('id').from(vl.data(_adult_prevalance_.default).key('id').fields(['state', 'rank', 'percentage', 'number']))).encode(vl.color().fieldQ('percentage').scale({
    scheme: 'Reds'
  }).legend({
    title: 'Percentage (%)'
  }), vl.tooltip(['state', 'percentage']))).width(400).height(300).config({
    view: {
      stroke: null
    }
  }).project(vl.projection('albersUsa'));
  var Covid2020 = vl.layer(vl.markGeoshape({
    stroke: '#aaa',
    strokeWidth: 0.25
  }).title("Percentage of Adult with any Mental illness by State in 2020").data(vl.topojson(_us.default).feature('states')).transform(vl.lookup('id').from(vl.data(_adult_mh_prevalance_.default).key('id ').fields(['state', 'rank', 'percentage', 'number']))).encode(vl.color().fieldQ('percentage').scale({
    scheme: 'Reds'
  }).legend({
    title: 'Percentage (%)'
  }), vl.tooltip(['state', 'percentage']))).width(400).height(300).config({
    view: {
      stroke: null
    }
  }).project(vl.projection('albersUsa'));
  return vl.hconcat(Covid2019, Covid2020).render().then(function (viewElement) {
    // render returns a promise to a DOM element containing the chart
    // viewElement.value contains the Vega View object instance
    document.getElementById('covid-Map-data').appendChild(viewElement);
  });
}
},{"../../static/adult_prevalance_2019.csv":"../static/adult_prevalance_2019.csv","../../static/adult_mh_prevalance_2020 (2).csv":"../static/adult_mh_prevalance_2020 (2).csv","../../static/us.json":"../static/us.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49175" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javasript/covidMap.js"], null)
//# sourceMappingURL=/covidMap.06d7672e.js.map