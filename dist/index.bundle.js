"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* After CSS Reset */

* {
  box-sizing: border-box;
}

:root {
  font-size: 24px;
  color: white;
  --dark-cyan: #0e9594;
  --wheat: #f5dfbb;
  --mountbatten-pink: #95818d;
}

html,
body {
  padding: 0;
  margin: 0;
  font-size: 100%;
}

main {
  min-height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.background-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.7;
  z-index: -1;
}

.weather-container {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.location-form {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
}

.display-error {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
}

.hide-error {
  display: none;
}

.current-weather {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 10px 0px 0 20px;
}

.additional-info {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 0 0;
}

.box {
  display: flex;
  gap: 8px;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.weather-icon {
  max-width: 3rem;
}

.icon {
  max-width: 1rem;
}

.high {
  font-weight: 400;
}

.low {
  font-size: 0.7rem;
}

.forecast-container {
  display: flex;
  justify-content: space-evenly;
  gap: 5px;
}

.forecast-day {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 5px;
  padding: 10px;
  width: 4.5rem;
}

.icon {
  scale: 2;
}

.forecast-icon {
  fill: white;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

/* Toggle Styling */

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: transparent;
}

input:focus + .slider {
  box-shadow: 0 0 1px transparent;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}

.switch .labels {
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  font-family: sans-serif;
  cursor: pointer;
}

.switch .labels::after {
  content: attr(data-off);
  position: absolute;
  font-size: 0.8rem;
  bottom: 12px;
  right: 5px;
  color: #ffffff;
  opacity: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease-in-out;
}

.switch .labels::before {
  content: attr(data-on);
  position: absolute;
  font-size: 0.8rem;
  bottom: 12px;
  left: 5px;
  color: #ffffff;
  opacity: 0;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
  transition: all 0.4s ease-in-out;
}

.switch input:checked ~ .labels::after {
  opacity: 0;
}

.switch input:checked ~ .labels::before {
  opacity: 1;
}

/* Style text input */

.form_field {
  border: none;
  outline: 2px solid white;
  border-radius: 3px;
  background-color: transparent;
  color: white;
}

.form_field::placeholder {
  color: white;
}

footer {
  font-size: 0.5rem;
}

footer > a {
  text-decoration: none;
  color: white;
}

/* Media queries */

body {
  font-size: 100%;
}

/* Media query for screens up to 768px (typical mobile devices) */
@media (max-width: 768px) {
  body {
    font-size: 0.6rem;
  }

  main {
    gap: 4rem;
  }
  .weather-container {
    flex-direction: column;
    gap: 1rem;
  }
  .current-weather,
  .additional-info {
    padding: 5px;
  }

  .current-weather {
    align-self: center;
    align-items: center;
  }

  .additional-info {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .box {
    flex-direction: column-reverse;
    align-items: center;
  }

  .forecast-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .forecast-day {
    flex-basis: 10%;
    margin: 5px;
    align-items: center;
  }
}

/* Media query for screens between 769px and 1024px (small tablets) */
@media (min-width: 769px) and (max-width: 1024px) {
  body {
    font-size: 0.7rem;
  }

  main {
    gap: 5rem;
  }

  .weather-container {
    flex-direction: column;
    gap: 2rem;
  }
  .current-weather,
  .additional-info {
    gap: 15px;
    padding: 10px;
  }

  .current-weather {
    padding-top: 20px;
    align-self: center;
    align-items: center;
  }

  .additional-info {
    flex-direction: row;
  }

  .forecast-container {
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
  }

  .forecast-day {
    flex-basis: 12%;
    margin: 5px;
    align-items: center;
  }
}

/* Media query for screens larger than 1024px (desktop) */
@media (min-width: 1025px) {
  body {
    font-size: 1.2rem;
  }

  main {
    gap: 8rem;
  }

  .weather-container {
    flex-direction: row;
  }
  .current-weather,
  .additional-info {
    padding: 15px;
  }

  .current-weather {
    padding-left: 20px;
    padding-top: 20px;
  }

  .additional-info {
    padding-right: 20px;
    padding-top: 20px;
  }

  .forecast-container {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
  .forecast-day {
    width: 20%;
    margin: 15px;
    align-items: center;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* After CSS Reset */\n\n* {\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 24px;\n  color: white;\n  --dark-cyan: #0e9594;\n  --wheat: #f5dfbb;\n  --mountbatten-pink: #95818d;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n}\n\nmain {\n  min-height: 100vh;\n  border: 1px solid red;\n  display: flex;\n  flex-direction: column;\n  gap: 8rem;\n}\n\n.background-img {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  opacity: 0.7;\n  z-index: -1;\n}\n\n.weather-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n\n.location-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  align-items: center;\n}\n\n.display-error {\n  display: block;\n  font-weight: 600;\n  font-size: 1rem;\n  text-align: center;\n}\n\n.hide-error {\n  display: none;\n}\n\n.current-weather {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 5px;\n  padding: 10px 0px 0 20px;\n}\n\n.additional-info {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px 20px 0 0;\n}\n\n.box {\n  display: flex;\n  gap: 8px;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n}\n\n.weather-icon {\n  max-width: 3rem;\n}\n\n.icon {\n  max-width: 1rem;\n}\n\n.high {\n  font-weight: 400;\n}\n\n.low {\n  font-size: 0.7rem;\n}\n\n.forecast-container {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 5px;\n}\n\n.forecast-day {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  border-radius: 5px;\n  padding: 10px;\n  width: 4.5rem;\n}\n\n.icon {\n  scale: 2;\n}\n\n.forecast-icon {\n  fill: white;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n\n/* Toggle Styling */\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: transparent;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px transparent;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 24px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.switch .labels {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 0.8rem;\n  font-family: sans-serif;\n  cursor: pointer;\n}\n\n.switch .labels::after {\n  content: attr(data-off);\n  position: absolute;\n  font-size: 0.8rem;\n  bottom: 12px;\n  right: 5px;\n  color: #ffffff;\n  opacity: 1;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.switch .labels::before {\n  content: attr(data-on);\n  position: absolute;\n  font-size: 0.8rem;\n  bottom: 12px;\n  left: 5px;\n  color: #ffffff;\n  opacity: 0;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.switch input:checked ~ .labels::after {\n  opacity: 0;\n}\n\n.switch input:checked ~ .labels::before {\n  opacity: 1;\n}\n\n/* Style text input */\n\n.form_field {\n  border: none;\n  outline: 2px solid white;\n  border-radius: 3px;\n  background-color: transparent;\n  color: white;\n}\n\n.form_field::placeholder {\n  color: white;\n}\n\nfooter {\n  font-size: 0.5rem;\n}\n\nfooter > a {\n  text-decoration: none;\n  color: white;\n}\n\n/* Media queries */\n\nbody {\n  font-size: 100%;\n}\n\n/* Media query for screens up to 768px (typical mobile devices) */\n@media (max-width: 768px) {\n  body {\n    font-size: 0.6rem;\n  }\n\n  main {\n    gap: 4rem;\n  }\n  .weather-container {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .current-weather,\n  .additional-info {\n    padding: 5px;\n  }\n\n  .current-weather {\n    align-self: center;\n    align-items: center;\n  }\n\n  .additional-info {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n  }\n\n  .box {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  .forecast-container {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .forecast-day {\n    flex-basis: 10%;\n    margin: 5px;\n    align-items: center;\n  }\n}\n\n/* Media query for screens between 769px and 1024px (small tablets) */\n@media (min-width: 769px) and (max-width: 1024px) {\n  body {\n    font-size: 0.7rem;\n  }\n\n  main {\n    gap: 5rem;\n  }\n\n  .weather-container {\n    flex-direction: column;\n    gap: 2rem;\n  }\n  .current-weather,\n  .additional-info {\n    gap: 15px;\n    padding: 10px;\n  }\n\n  .current-weather {\n    padding-top: 20px;\n    align-self: center;\n    align-items: center;\n  }\n\n  .additional-info {\n    flex-direction: row;\n  }\n\n  .forecast-container {\n    display: flex;\n    justify-content: space-around;\n    overflow-x: auto;\n  }\n\n  .forecast-day {\n    flex-basis: 12%;\n    margin: 5px;\n    align-items: center;\n  }\n}\n\n/* Media query for screens larger than 1024px (desktop) */\n@media (min-width: 1025px) {\n  body {\n    font-size: 1.2rem;\n  }\n\n  main {\n    gap: 8rem;\n  }\n\n  .weather-container {\n    flex-direction: row;\n  }\n  .current-weather,\n  .additional-info {\n    padding: 15px;\n  }\n\n  .current-weather {\n    padding-left: 20px;\n    padding-top: 20px;\n  }\n\n  .additional-info {\n    padding-right: 20px;\n    padding-top: 20px;\n  }\n\n  .forecast-container {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n  }\n  .forecast-day {\n    width: 20%;\n    margin: 15px;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_background_mountain_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/background-mountain.jpg */ "./src/images/background-mountain.jpg");
/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/humidity.svg */ "./src/images/humidity.svg");
/* harmony import */ var _images_1189_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/1189.svg */ "./src/images/1189.svg");
/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/wind.svg */ "./src/images/wind.svg");
/* harmony import */ var _images_thermometer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/thermometer.svg */ "./src/images/thermometer.svg");
/* harmony import */ var _images_1000_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/1000.svg */ "./src/images/1000.svg");
/* harmony import */ var _images_1003_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/1003.svg */ "./src/images/1003.svg");
/* harmony import */ var _images_1006_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/1006.svg */ "./src/images/1006.svg");
/* harmony import */ var _images_1009_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/1009.svg */ "./src/images/1009.svg");
/* harmony import */ var _images_1030_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/1030.svg */ "./src/images/1030.svg");
/* harmony import */ var _images_1063_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/1063.svg */ "./src/images/1063.svg");
/* harmony import */ var _images_1066_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/1066.svg */ "./src/images/1066.svg");
/* harmony import */ var _images_1069_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/1069.svg */ "./src/images/1069.svg");
/* harmony import */ var _images_1072_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/1072.svg */ "./src/images/1072.svg");
/* harmony import */ var _images_1087_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/1087.svg */ "./src/images/1087.svg");
/* harmony import */ var _images_1135_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/1135.svg */ "./src/images/1135.svg");
/* harmony import */ var _images_1180_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/1180.svg */ "./src/images/1180.svg");
/* harmony import */ var _images_1195_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/1195.svg */ "./src/images/1195.svg");



 // rain
















let celsius = true;
let locationResult = "london";

// Set Images & Icons

const tempScale = document.querySelector("[data-temp-scale");
const searchInput = document.querySelector("[data-weather-search");
const currentTempDisplay = document.querySelector("[data-current-temperature]");
const currentLocationDisplay = document.querySelector(
  "[data-current-location]",
);
const currentWeatherDescription = document.querySelector(
  "[data-current-weather-description]",
);
const weatherIcon = document.querySelector(".weather-icon");
const dateAndTime = document.querySelector("[data-date-and-time]");
const feelsLike = document.querySelector("[data-feels-like]");
const humidity = document.querySelector("[data-humidity]");
const rainChance = document.querySelector("[data-rain-chance]");
const windChance = document.querySelector("[data-wind-chance]");
const locationForm = document.querySelector(".location-form");

const errorSpan = document.querySelector("span");

// Forecast elements
const SundayTempHigh = document.querySelector("[data-sunday-temp-high]");
const SundayTempLow = document.querySelector("[data-sunday-temp-low]");
const SundayWeatherIcon = document.querySelector("[data-sunday-icon");
const mondayTempHigh = document.querySelector("[data-monday-temp-high]");
const mondayTempLow = document.querySelector("[data-monday-temp-low]");
const mondayWeatherIcon = document.querySelector("[data-monday-icon");
const tuesdayTempHigh = document.querySelector("[data-tuesday-temp-high]");
const tuesdayTempLow = document.querySelector("[data-tuesday-temp-low]");
const tuesdayWeatherIcon = document.querySelector("[data-tuesday-icon");
const wednesdayTempHigh = document.querySelector("[data-wednesday-temp-high]");
const wednesdayTempLow = document.querySelector("[data-wednesday-temp-low]");
const wednesdayWeatherIcon = document.querySelector("[data-wednesday-icon");
const thursdayTempHigh = document.querySelector("[data-thursday-temp-high]");
const thursdayTempLow = document.querySelector("[data-thursday-temp-low]");
const thursdayWeatherIcon = document.querySelector("[data-thursday-icon");
const fridayTempHigh = document.querySelector("[data-friday-temp-high]");
const fridayTempLow = document.querySelector("[data-friday-temp-low]");
const fridayWeatherIcon = document.querySelector("[data-friday-icon");
const saturdayTempHigh = document.querySelector("[data-saturday-temp-high]");
const saturdayTempLow = document.querySelector("[data-saturday-temp-low]");
const saturdayWeatherIcon = document.querySelector("[data-saturday-icon");

searchInput.addEventListener("change", (e) => {
  e.preventDefault();
  locationResult = e.target.value;
  getWeather(locationResult);
});

tempScale.addEventListener("change", () => {
  if (tempScale.checked) {
    celsius = false;
  } else {
    celsius = true;
  }
  getWeather(locationResult);
});

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=5566193aad5d49be87572056231107&q=${location}&days=7&aqi=no`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    setWeather(weatherData);
    errorSpan.classList.replace("display-error", "hide-error");
  } catch (err) {
    errorSpan.textContent = `Oops, "${location}" is not a valid location, try again`;
    errorSpan.classList.replace("hide-error", "display-error");
  }
}

function setWeather(weatherData) {
  // Check if C or F selected and update values
  const scale = celsius ? "_c" : "_f";
  const displayScale = celsius ? "°C" : "°F";

  // Format the date before setting
  const localTime = new Date(weatherData.location.localtime);
  const formattedDateTime = localTime.toLocaleString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  // Set content of current weather
  currentTempDisplay.textContent = `${
    weatherData.current[`temp${scale}`]
  } ${displayScale}`;
  currentLocationDisplay.textContent = weatherData.location.name;
  currentWeatherDescription.textContent = weatherData.current.condition.text;
  weatherIcon.src = `./images/${weatherData.current.condition.code}.svg`;

  dateAndTime.textContent = `${formattedDateTime}`;

  // Set content of additional info

  feelsLike.textContent = `Feels like ${
    weatherData.current[`feelslike${scale}`]
  } ${displayScale}`;
  humidity.textContent = `Humidity ${weatherData.current.humidity} %`;
  rainChance.textContent = `Chance of rain: ${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %`;
  windChance.textContent = `Wind Speed: ${weatherData.forecast.forecastday[0].day.maxwind_mph} mph`;

  // set content of DAILY forecast container (Add later for hourly)
  SundayTempHigh.textContent = `${
    weatherData.forecast.forecastday[0].day[`maxtemp${scale}`]
  } ${displayScale}`;
  SundayTempLow.textContent = `${
    weatherData.forecast.forecastday[0].day[`mintemp${scale}`]
  } ${displayScale}`;

  mondayTempHigh.textContent = `${
    weatherData.forecast.forecastday[1].day[`maxtemp${scale}`]
  } ${displayScale}`;
  mondayTempLow.textContent = `${
    weatherData.forecast.forecastday[1].day[`mintemp${scale}`]
  } ${displayScale}`;

  tuesdayTempHigh.textContent = `${
    weatherData.forecast.forecastday[2].day[`maxtemp${scale}`]
  } ${displayScale}`;
  tuesdayTempLow.textContent = `${
    weatherData.forecast.forecastday[2].day[`mintemp${scale}`]
  } ${displayScale}`;

  wednesdayTempHigh.textContent = `${
    weatherData.forecast.forecastday[3].day[`maxtemp${scale}`]
  } ${displayScale}`;
  wednesdayTempLow.textContent = `${
    weatherData.forecast.forecastday[3].day[`mintemp${scale}`]
  } ${displayScale}`;

  thursdayTempHigh.textContent = `${
    weatherData.forecast.forecastday[4].day[`maxtemp${scale}`]
  } ${displayScale}`;
  thursdayTempLow.textContent = `${
    weatherData.forecast.forecastday[4].day[`mintemp${scale}`]
  } ${displayScale}`;

  fridayTempHigh.textContent = `${
    weatherData.forecast.forecastday[5].day[`maxtemp${scale}`]
  } ${displayScale}`;
  fridayTempLow.textContent = `${
    weatherData.forecast.forecastday[5].day[`mintemp${scale}`]
  } ${displayScale}`;

  saturdayTempHigh.textContent = `${
    weatherData.forecast.forecastday[6].day[`maxtemp${scale}`]
  } ${displayScale}`;
  saturdayTempLow.textContent = `${
    weatherData.forecast.forecastday[6].day[`mintemp${scale}`]
  } ${displayScale}`;

  // Set Icons

  SundayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[0].day.condition.code}.svg`;
  mondayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[1].day.condition.code}.svg`;
  tuesdayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[2].day.condition.code}.svg`;
  wednesdayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[3].day.condition.code}.svg`;
  thursdayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[4].day.condition.code}.svg`;
  fridayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[5].day.condition.code}.svg`;
  saturdayWeatherIcon.src = `./images/${weatherData.forecast.forecastday[6].day.condition.code}.svg`;

  locationForm.reset();
}

getWeather(locationResult);


/***/ }),

/***/ "./src/images/1000.svg":
/*!*****************************!*\
  !*** ./src/images/1000.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e7823e9df0048bf8bbf.svg";

/***/ }),

/***/ "./src/images/1003.svg":
/*!*****************************!*\
  !*** ./src/images/1003.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3546eb4a59bc612937d0.svg";

/***/ }),

/***/ "./src/images/1006.svg":
/*!*****************************!*\
  !*** ./src/images/1006.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fce32026c4da12f80c53.svg";

/***/ }),

/***/ "./src/images/1009.svg":
/*!*****************************!*\
  !*** ./src/images/1009.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd235a8798e817eaf366.svg";

/***/ }),

/***/ "./src/images/1030.svg":
/*!*****************************!*\
  !*** ./src/images/1030.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2656141e742bc998ff9.svg";

/***/ }),

/***/ "./src/images/1063.svg":
/*!*****************************!*\
  !*** ./src/images/1063.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7e6f5daf5cab4006adc.svg";

/***/ }),

/***/ "./src/images/1066.svg":
/*!*****************************!*\
  !*** ./src/images/1066.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdf17460d5e17b90de75.svg";

/***/ }),

/***/ "./src/images/1069.svg":
/*!*****************************!*\
  !*** ./src/images/1069.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e0942c17dd35b4b7a6b.svg";

/***/ }),

/***/ "./src/images/1072.svg":
/*!*****************************!*\
  !*** ./src/images/1072.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7534f83dd3fd2e5739d6.svg";

/***/ }),

/***/ "./src/images/1087.svg":
/*!*****************************!*\
  !*** ./src/images/1087.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad0e20171b9a75d04698.svg";

/***/ }),

/***/ "./src/images/1135.svg":
/*!*****************************!*\
  !*** ./src/images/1135.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "648e2be8b1233a932fee.svg";

/***/ }),

/***/ "./src/images/1180.svg":
/*!*****************************!*\
  !*** ./src/images/1180.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba647cf08e6c91af4211.svg";

/***/ }),

/***/ "./src/images/1189.svg":
/*!*****************************!*\
  !*** ./src/images/1189.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "713661ffa031f207335f.svg";

/***/ }),

/***/ "./src/images/1195.svg":
/*!*****************************!*\
  !*** ./src/images/1195.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9c24237e16189c4a854.svg";

/***/ }),

/***/ "./src/images/background-mountain.jpg":
/*!********************************************!*\
  !*** ./src/images/background-mountain.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a16e2205a6e35f497d4.jpg";

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79984da65eb645738461.svg";

/***/ }),

/***/ "./src/images/thermometer.svg":
/*!************************************!*\
  !*** ./src/images/thermometer.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95b8fc7c3b6b664bc948.svg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbb6d480d6146972a107.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpS0FBaUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssUUFBUSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVks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TTtBQUM1RCxJQUFJLEVBQUUsYUFBYTtBQUNuQjtBQUNBLHNEQUFzRCxNQUFNO0FBQzVELElBQUksRUFBRSxhQUFhOztBQUVuQjtBQUNBLHNEQUFzRCxNQUFNO0FBQzVELElBQUksRUFBRSxhQUFhO0FBQ25CO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQsSUFBSSxFQUFFLGFBQWE7O0FBRW5CO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQsSUFBSSxFQUFFLGFBQWE7QUFDbkI7QUFDQSxzREFBc0QsTUFBTTtBQUM1RCxJQUFJLEVBQUUsYUFBYTs7QUFFbkI7QUFDQSxzREFBc0QsTUFBTTtBQUM1RCxJQUFJLEVBQUUsYUFBYTtBQUNuQjtBQUNBLHNEQUFzRCxNQUFNO0FBQzVELElBQUksRUFBRSxhQUFhOztBQUVuQjtBQUNBLHNEQUFzRCxNQUFNO0FBQzVELElBQUksRUFBRSxhQUFhO0FBQ25CO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQsSUFBSSxFQUFFLGFBQWE7O0FBRW5CO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQsSUFBSSxFQUFFLGFBQWE7QUFDbkI7QUFDQSxzREFBc0QsTUFBTTtBQUM1RCxJQUFJLEVBQUUsYUFBYTs7QUFFbkI7O0FBRUEsc0NBQXNDLHVEQUF1RDtBQUM3RixzQ0FBc0MsdURBQXVEO0FBQzdGLHVDQUF1Qyx1REFBdUQ7QUFDOUYseUNBQXlDLHVEQUF1RDtBQUNoRyx3Q0FBd0MsdURBQXVEO0FBQy9GLHNDQUFzQyx1REFBdUQ7QUFDN0Ysd0NBQXdDLHVEQUF1RDs7QUFFL0Y7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogQWZ0ZXIgQ1NTIFJlc2V0ICovXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWRhcmstY3lhbjogIzBlOTU5NDtcbiAgLS13aGVhdDogI2Y1ZGZiYjtcbiAgLS1tb3VudGJhdHRlbi1waW5rOiAjOTU4MThkO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cmVtO1xufVxuXG4uYmFja2dyb3VuZC1pbWcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ud2VhdGhlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmxvY2F0aW9uLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktZXJyb3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oaWRlLWVycm9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1cnJlbnQtd2VhdGhlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogMTBweCAwcHggMCAyMHB4O1xufVxuXG4uYWRkaXRpb25hbC1pbmZvIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMCAwO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLndlYXRoZXItaWNvbiB7XG4gIG1heC13aWR0aDogM3JlbTtcbn1cblxuLmljb24ge1xuICBtYXgtd2lkdGg6IDFyZW07XG59XG5cbi5oaWdoIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvdyB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdhcDogNXB4O1xufVxuXG4uZm9yZWNhc3QtZGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDQuNXJlbTtcbn1cblxuLmljb24ge1xuICBzY2FsZTogMjtcbn1cblxuLmZvcmVjYXN0LWljb24ge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLyogVG9nZ2xlIFN0eWxpbmcgKi9cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3dpdGNoIC5sYWJlbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXRjaCAubGFiZWxzOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3R0b206IDEycHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaCAubGFiZWxzOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtb24pO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgfiAubGFiZWxzOjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIFN0eWxlIHRleHQgaW5wdXQgKi9cblxuLmZvcm1fZmllbGQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybV9maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuXG5mb290ZXIgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIE1lZGlhIHF1ZXJpZXMgKi9cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogTWVkaWEgcXVlcnkgZm9yIHNjcmVlbnMgdXAgdG8gNzY4cHggKHR5cGljYWwgbW9iaWxlIGRldmljZXMpICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICBtYWluIHtcbiAgICBnYXA6IDRyZW07XG4gIH1cbiAgLndlYXRoZXItY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAuY3VycmVudC13ZWF0aGVyLFxuICAuYWRkaXRpb25hbC1pbmZvIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuY3VycmVudC13ZWF0aGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5hZGRpdGlvbmFsLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5ib3gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmZvcmVjYXN0LWRheSB7XG4gICAgZmxleC1iYXNpczogMTAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLyogTWVkaWEgcXVlcnkgZm9yIHNjcmVlbnMgYmV0d2VlbiA3NjlweCBhbmQgMTAyNHB4IChzbWFsbCB0YWJsZXRzKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG5cbiAgLndlYXRoZXItY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgfVxuICAuY3VycmVudC13ZWF0aGVyLFxuICAuYWRkaXRpb25hbC1pbmZvIHtcbiAgICBnYXA6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5jdXJyZW50LXdlYXRoZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmFkZGl0aW9uYWwtaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5mb3JlY2FzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gIC5mb3JlY2FzdC1kYXkge1xuICAgIGZsZXgtYmFzaXM6IDEyJTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIGxhcmdlciB0aGFuIDEwMjRweCAoZGVza3RvcCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICBtYWluIHtcbiAgICBnYXA6IDhyZW07XG4gIH1cblxuICAud2VhdGhlci1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmN1cnJlbnQtd2VhdGhlcixcbiAgLmFkZGl0aW9uYWwtaW5mbyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5jdXJyZW50LXdlYXRoZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5hZGRpdGlvbmFsLWluZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cblxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG4gIC5mb3JlY2FzdC1kYXkge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBLG9CQUFv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bUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLHlEQUF5RDtBQUN6RDtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIEFmdGVyIENTUyBSZXNldCAqL1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLS1kYXJrLWN5YW46ICMwZTk1OTQ7XFxuICAtLXdoZWF0OiAjZjVkZmJiO1xcbiAgLS1tb3VudGJhdHRlbi1waW5rOiAjOTU4MThkO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cmVtO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxvY2F0aW9uLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWVycm9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUtZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMTBweCAwcHggMCAyMHB4O1xcbn1cXG5cXG4uYWRkaXRpb25hbC1pbmZvIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAwIDA7XFxufVxcblxcbi5ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICBtYXgtd2lkdGg6IDNyZW07XFxufVxcblxcbi5pY29uIHtcXG4gIG1heC13aWR0aDogMXJlbTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmxvdyB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA0LjVyZW07XFxufVxcblxcbi5pY29uIHtcXG4gIHNjYWxlOiAyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiB7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLyogVG9nZ2xlIFN0eWxpbmcgKi9cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc3dpdGNoIC5sYWJlbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3dpdGNoIC5sYWJlbHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1vZmYpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3R0b206IDEycHg7XFxuICByaWdodDogNXB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvcGFjaXR5OiAxO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc3dpdGNoIC5sYWJlbHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtb24pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3R0b206IDEycHg7XFxuICBsZWZ0OiA1cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBTdHlsZSB0ZXh0IGlucHV0ICovXFxuXFxuLmZvcm1fZmllbGQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JtX2ZpZWxkOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuZm9vdGVyID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogTWVkaWEgcXVlcnkgZm9yIHNjcmVlbnMgdXAgdG8gNzY4cHggKHR5cGljYWwgbW9iaWxlIGRldmljZXMpICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgfVxcbiAgLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlcixcXG4gIC5hZGRpdGlvbmFsLWluZm8ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuICAuY3VycmVudC13ZWF0aGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFkZGl0aW9uYWwtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib3gge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5mb3JlY2FzdC1kYXkge1xcbiAgICBmbGV4LWJhc2lzOiAxMCU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBxdWVyeSBmb3Igc2NyZWVucyBiZXR3ZWVuIDc2OXB4IGFuZCAxMDI0cHggKHNtYWxsIHRhYmxldHMpICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgfVxcbiAgLmN1cnJlbnQtd2VhdGhlcixcXG4gIC5hZGRpdGlvbmFsLWluZm8ge1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuY3VycmVudC13ZWF0aGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbmFsLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWRheSB7XFxuICAgIGZsZXgtYmFzaXM6IDEyJTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJ5IGZvciBzY3JlZW5zIGxhcmdlciB0aGFuIDEwMjRweCAoZGVza3RvcCkgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZ2FwOiA4cmVtO1xcbiAgfVxcblxcbiAgLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5jdXJyZW50LXdlYXRoZXIsXFxuICAuYWRkaXRpb25hbC1pbmZvIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLmFkZGl0aW9uYWwtaW5mbyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIC5mb3JlY2FzdC1kYXkge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvYmFja2dyb3VuZC1tb3VudGFpbi5qcGdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvMTE4OS5zdmdcIjsgLy8gcmFpblxuaW1wb3J0IFwiLi9pbWFnZXMvd2luZC5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL3RoZXJtb21ldGVyLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvMTAwMC5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLzEwMDMuc3ZnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy8xMDA2LnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvMTAwOS5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLzEwMzAuc3ZnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy8xMDYzLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvMTA2Ni5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLzEwNjkuc3ZnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy8xMDcyLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvMTA4Ny5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzLzExMzUuc3ZnXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy8xMTgwLnN2Z1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvMTE5NS5zdmdcIjtcblxubGV0IGNlbHNpdXMgPSB0cnVlO1xubGV0IGxvY2F0aW9uUmVzdWx0ID0gXCJsb25kb25cIjtcblxuLy8gU2V0IEltYWdlcyAmIEljb25zXG5cbmNvbnN0IHRlbXBTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10ZW1wLXNjYWxlXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtd2VhdGhlci1zZWFyY2hcIik7XG5jb25zdCBjdXJyZW50VGVtcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY3VycmVudC10ZW1wZXJhdHVyZV1cIik7XG5jb25zdCBjdXJyZW50TG9jYXRpb25EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJbZGF0YS1jdXJyZW50LWxvY2F0aW9uXVwiLFxuKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWN1cnJlbnQtd2VhdGhlci1kZXNjcmlwdGlvbl1cIixcbik7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1pY29uXCIpO1xuY29uc3QgZGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGF0ZS1hbmQtdGltZV1cIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZmVlbHMtbGlrZV1cIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1odW1pZGl0eV1cIik7XG5jb25zdCByYWluQ2hhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXJhaW4tY2hhbmNlXVwiKTtcbmNvbnN0IHdpbmRDaGFuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtd2luZC1jaGFuY2VdXCIpO1xuY29uc3QgbG9jYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1mb3JtXCIpO1xuXG5jb25zdCBlcnJvclNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcblxuLy8gRm9yZWNhc3QgZWxlbWVudHNcbmNvbnN0IFN1bmRheVRlbXBIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXN1bmRheS10ZW1wLWhpZ2hdXCIpO1xuY29uc3QgU3VuZGF5VGVtcExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zdW5kYXktdGVtcC1sb3ddXCIpO1xuY29uc3QgU3VuZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc3VuZGF5LWljb25cIik7XG5jb25zdCBtb25kYXlUZW1wSGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb25kYXktdGVtcC1oaWdoXVwiKTtcbmNvbnN0IG1vbmRheVRlbXBMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbW9uZGF5LXRlbXAtbG93XVwiKTtcbmNvbnN0IG1vbmRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vbmRheS1pY29uXCIpO1xuY29uc3QgdHVlc2RheVRlbXBIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXR1ZXNkYXktdGVtcC1oaWdoXVwiKTtcbmNvbnN0IHR1ZXNkYXlUZW1wTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXR1ZXNkYXktdGVtcC1sb3ddXCIpO1xuY29uc3QgdHVlc2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXR1ZXNkYXktaWNvblwiKTtcbmNvbnN0IHdlZG5lc2RheVRlbXBIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXdlZG5lc2RheS10ZW1wLWhpZ2hdXCIpO1xuY29uc3Qgd2VkbmVzZGF5VGVtcExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS13ZWRuZXNkYXktdGVtcC1sb3ddXCIpO1xuY29uc3Qgd2VkbmVzZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtd2VkbmVzZGF5LWljb25cIik7XG5jb25zdCB0aHVyc2RheVRlbXBIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRodXJzZGF5LXRlbXAtaGlnaF1cIik7XG5jb25zdCB0aHVyc2RheVRlbXBMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGh1cnNkYXktdGVtcC1sb3ddXCIpO1xuY29uc3QgdGh1cnNkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aHVyc2RheS1pY29uXCIpO1xuY29uc3QgZnJpZGF5VGVtcEhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZnJpZGF5LXRlbXAtaGlnaF1cIik7XG5jb25zdCBmcmlkYXlUZW1wTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWZyaWRheS10ZW1wLWxvd11cIik7XG5jb25zdCBmcmlkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mcmlkYXktaWNvblwiKTtcbmNvbnN0IHNhdHVyZGF5VGVtcEhpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2F0dXJkYXktdGVtcC1oaWdoXVwiKTtcbmNvbnN0IHNhdHVyZGF5VGVtcExvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zYXR1cmRheS10ZW1wLWxvd11cIik7XG5jb25zdCBzYXR1cmRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNhdHVyZGF5LWljb25cIik7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsb2NhdGlvblJlc3VsdCA9IGUudGFyZ2V0LnZhbHVlO1xuICBnZXRXZWF0aGVyKGxvY2F0aW9uUmVzdWx0KTtcbn0pO1xuXG50ZW1wU2NhbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGlmICh0ZW1wU2NhbGUuY2hlY2tlZCkge1xuICAgIGNlbHNpdXMgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjZWxzaXVzID0gdHJ1ZTtcbiAgfVxuICBnZXRXZWF0aGVyKGxvY2F0aW9uUmVzdWx0KTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTU1NjYxOTNhYWQ1ZDQ5YmU4NzU3MjA1NjIzMTEwNyZxPSR7bG9jYXRpb259JmRheXM9NyZhcWk9bm9gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZXBsYWNlKFwiZGlzcGxheS1lcnJvclwiLCBcImhpZGUtZXJyb3JcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IGBPb3BzLCBcIiR7bG9jYXRpb259XCIgaXMgbm90IGEgdmFsaWQgbG9jYXRpb24sIHRyeSBhZ2FpbmA7XG4gICAgZXJyb3JTcGFuLmNsYXNzTGlzdC5yZXBsYWNlKFwiaGlkZS1lcnJvclwiLCBcImRpc3BsYXktZXJyb3JcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSkge1xuICAvLyBDaGVjayBpZiBDIG9yIEYgc2VsZWN0ZWQgYW5kIHVwZGF0ZSB2YWx1ZXNcbiAgY29uc3Qgc2NhbGUgPSBjZWxzaXVzID8gXCJfY1wiIDogXCJfZlwiO1xuICBjb25zdCBkaXNwbGF5U2NhbGUgPSBjZWxzaXVzID8gXCLCsENcIiA6IFwiwrBGXCI7XG5cbiAgLy8gRm9ybWF0IHRoZSBkYXRlIGJlZm9yZSBzZXR0aW5nXG4gIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIGNvbnN0IGZvcm1hdHRlZERhdGVUaW1lID0gbG9jYWxUaW1lLnRvTG9jYWxlU3RyaW5nKFwiZW4tR0JcIiwge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwibG9uZ1wiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gIH0pO1xuICAvLyBTZXQgY29udGVudCBvZiBjdXJyZW50IHdlYXRoZXJcbiAgY3VycmVudFRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuY3VycmVudFtgdGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuICBjdXJyZW50TG9jYXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgY3VycmVudFdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIHdlYXRoZXJJY29uLnNyYyA9IGAuL2ltYWdlcy8ke3dlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGV9LnN2Z2A7XG5cbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0ZWREYXRlVGltZX1gO1xuXG4gIC8vIFNldCBjb250ZW50IG9mIGFkZGl0aW9uYWwgaW5mb1xuXG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7XG4gICAgd2VhdGhlckRhdGEuY3VycmVudFtgZmVlbHNsaWtlJHtzY2FsZX1gXVxuICB9ICR7ZGlzcGxheVNjYWxlfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5ICR7d2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eX0gJWA7XG4gIHJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIHJhaW46ICR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSAlYDtcbiAgd2luZENoYW5jZS50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh3aW5kX21waH0gbXBoYDtcblxuICAvLyBzZXQgY29udGVudCBvZiBEQUlMWSBmb3JlY2FzdCBjb250YWluZXIgKEFkZCBsYXRlciBmb3IgaG91cmx5KVxuICBTdW5kYXlUZW1wSGlnaC50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheVtgbWF4dGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuICBTdW5kYXlUZW1wTG93LnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5W2BtaW50ZW1wJHtzY2FsZX1gXVxuICB9ICR7ZGlzcGxheVNjYWxlfWA7XG5cbiAgbW9uZGF5VGVtcEhpZ2gudGV4dENvbnRlbnQgPSBgJHtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXlbYG1heHRlbXAke3NjYWxlfWBdXG4gIH0gJHtkaXNwbGF5U2NhbGV9YDtcbiAgbW9uZGF5VGVtcExvdy50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheVtgbWludGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuXG4gIHR1ZXNkYXlUZW1wSGlnaC50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheVtgbWF4dGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuICB0dWVzZGF5VGVtcExvdy50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheVtgbWludGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuXG4gIHdlZG5lc2RheVRlbXBIaWdoLnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5W2BtYXh0ZW1wJHtzY2FsZX1gXVxuICB9ICR7ZGlzcGxheVNjYWxlfWA7XG4gIHdlZG5lc2RheVRlbXBMb3cudGV4dENvbnRlbnQgPSBgJHtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXlbYG1pbnRlbXAke3NjYWxlfWBdXG4gIH0gJHtkaXNwbGF5U2NhbGV9YDtcblxuICB0aHVyc2RheVRlbXBIaWdoLnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5W2BtYXh0ZW1wJHtzY2FsZX1gXVxuICB9ICR7ZGlzcGxheVNjYWxlfWA7XG4gIHRodXJzZGF5VGVtcExvdy50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheVtgbWludGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuXG4gIGZyaWRheVRlbXBIaWdoLnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNV0uZGF5W2BtYXh0ZW1wJHtzY2FsZX1gXVxuICB9ICR7ZGlzcGxheVNjYWxlfWA7XG4gIGZyaWRheVRlbXBMb3cudGV4dENvbnRlbnQgPSBgJHtcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXlbYG1pbnRlbXAke3NjYWxlfWBdXG4gIH0gJHtkaXNwbGF5U2NhbGV9YDtcblxuICBzYXR1cmRheVRlbXBIaWdoLnRleHRDb250ZW50ID0gYCR7XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNl0uZGF5W2BtYXh0ZW1wJHtzY2FsZX1gXVxuICB9ICR7ZGlzcGxheVNjYWxlfWA7XG4gIHNhdHVyZGF5VGVtcExvdy50ZXh0Q29udGVudCA9IGAke1xuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzZdLmRheVtgbWludGVtcCR7c2NhbGV9YF1cbiAgfSAke2Rpc3BsYXlTY2FsZX1gO1xuXG4gIC8vIFNldCBJY29uc1xuXG4gIFN1bmRheVdlYXRoZXJJY29uLnNyYyA9IGAuL2ltYWdlcy8ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uY29kZX0uc3ZnYDtcbiAgbW9uZGF5V2VhdGhlckljb24uc3JjID0gYC4vaW1hZ2VzLyR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5jb2RlfS5zdmdgO1xuICB0dWVzZGF5V2VhdGhlckljb24uc3JjID0gYC4vaW1hZ2VzLyR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5jb2RlfS5zdmdgO1xuICB3ZWRuZXNkYXlXZWF0aGVySWNvbi5zcmMgPSBgLi9pbWFnZXMvJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLmNvZGV9LnN2Z2A7XG4gIHRodXJzZGF5V2VhdGhlckljb24uc3JjID0gYC4vaW1hZ2VzLyR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5LmNvbmRpdGlvbi5jb2RlfS5zdmdgO1xuICBmcmlkYXlXZWF0aGVySWNvbi5zcmMgPSBgLi9pbWFnZXMvJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXkuY29uZGl0aW9uLmNvZGV9LnN2Z2A7XG4gIHNhdHVyZGF5V2VhdGhlckljb24uc3JjID0gYC4vaW1hZ2VzLyR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNl0uZGF5LmNvbmRpdGlvbi5jb2RlfS5zdmdgO1xuXG4gIGxvY2F0aW9uRm9ybS5yZXNldCgpO1xufVxuXG5nZXRXZWF0aGVyKGxvY2F0aW9uUmVzdWx0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==