"use strict";

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.replace");

var popupContainerId = uuidv4();
var cname = 'locale-popup';

function showPopup(popupBodyHtml) {
  var cookie = getCookie(cname); // if true, region locale popup has already been seen, so we do not proceed

  if (getCookie(cname) === 'true') {
    return;
  }

  var popupContainer = document.createElement('div');
  popupContainer.style.cssText = "\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  ";
  popupContainer.id = popupContainerId;
  var popupBackdrop = document.createElement('div');
  popupBackdrop.style.cssText = "\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1060;\n    opacity: 0.5;\n    background-color: #6c757d;\n  ";
  popupContainer.appendChild(popupBackdrop);
  var popup = document.createElement('div');
  popup.innerHTML = "\n    <style>\n      @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n    </style>\n    <div style=\"position: absolute; right: 0.5rem; top: 0.5rem;\">\n      <div onClick='hidePopup()' style=\"cursor: pointer; height: 24px; width: 24px;\"><svg viewBox='0 0 24 24'><path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'/><path d='M0 0h24v24h-24z' fill='none'/></svg></div>\n    </div>\n    <div style=\"text-align: center\">\n      ".concat(popupBodyHtml, "\n    </div>\n  ");
  popup.style.cssText = "\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width:400px;\n    max-width: 90vw;\n    min-height: 200px;\n    box-shadow: 0 5px 20px #ccc;\n    border-radius: 0.8rem;\n    transform: translate(-50%, -50%);\n    justify-content: center;\n    padding: 1rem 2rem 1rem 2rem;\n    z-index: 1070;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Open Sans', sans-serif;\n  ";
  popupContainer.appendChild(popup);
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(popupContainer);
  setCookie(cname, true);
  document.addEventListener('click', function (e) {
    if (!popup.contains(e.target)) {
      hidePopup();
    }
  });
}

function hidePopup() {
  const popupContainer = document.getElementById(popupContainerId);

  while (popupContainer && popupContainer.firstChild) {
    popupContainer.removeChild(popupContainer.firstChild);
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

window.showPopup = showPopup;
window.hidePopup = hidePopup;