parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wZzi":[function(require,module,exports) {
var t=document.getElementById("js-weather"),n="0cfac8ddc4cf4f32c83925b3cd30f994",o="COORDS";function e(o,e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(o,"&lon=").concat(e,"&appid=").concat(n,"&units=metric")).then(function(t){return t.json()}).then(function(n){var o=n.main.temp,e=n.name;t.innerText="".concat(o,"°C @").concat(e)})}function c(t){localStorage.setItem(o,JSON.stringify(t))}function a(t){var n=t.coords.latitude,o=t.coords.longitude;c({latitude:n,longitude:o}),e(n,o)}function i(){console.log("Can't access geo location.")}function r(){navigator.geolocation.getCurrentPosition(a,i)}function l(){var t=localStorage.getItem(o);if(null===t)r();else{var n=JSON.parse(t);e(n.latitude,n.longitude)}}function u(){l()}u();
},{}]},{},["wZzi"], null)
//# sourceMappingURL=/weather.e2c55f4a.js.map