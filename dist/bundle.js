!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})),o="locale-popup";function r(){const e=document.getElementById(t);for(;e&&e.firstChild;)e.removeChild(e.firstChild)}function i(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""}window.showPopup=function(e){if(i(o),"true"!==i(o)){var n=document.createElement("div");n.style.cssText="\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  ",n.id=t;var d=document.createElement("div");d.style.cssText="\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1060;\n    opacity: 0.5;\n    background-color: #6c757d;\n  ",n.appendChild(d);var a=document.createElement("div");a.innerHTML=`\n    <style>\n      @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n    </style>\n    <div style="position: absolute; right: 0.5rem; top: 0.5rem;">\n      <div onClick='hidePopup()' style="cursor: pointer; height: 24px; width: 24px;"><svg viewBox='0 0 24 24'><path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'/><path d='M0 0h24v24h-24z' fill='none'/></svg></div>\n    </div>\n    <div style="text-align: center">\n      ${e}\n    </div>\n  `,a.style.cssText="\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width:400px;\n    max-width: 90vw;\n    min-height: 200px;\n    box-shadow: 0 5px 20px #ccc;\n    border-radius: 0.8rem;\n    transform: translate(-50%, -50%);\n    justify-content: center;\n    padding: 1rem 2rem 1rem 2rem;\n    z-index: 1070;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Open Sans', sans-serif;\n  ",n.appendChild(a),document.getElementsByTagName("body")[0].appendChild(n),function(e,n,t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var r="expires="+o.toUTCString();document.cookie=e+"="+n+";"+r+";path=/"}(o,!0),document.addEventListener("click",(function(e){a.contains(e.target)||r()}))}},window.hidePopup=r}]);