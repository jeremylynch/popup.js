var popupContainerId = uuidv4();
var cname = 'locale-popup';

function showPopup(html) {

  var cookie = getCookie(cname);

  // if true, region locale popup has already been seen, so we do not proceed
  if (getCookie(cname) === 'true') {
    return
  }

  var popupContainer = document.createElement('div');
  popupContainer.style.cssText = `
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `
  popupContainer.id = popupContainerId;
  var close_button = document.createElement('div');
  close_button.style.cssText = `
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 24px;
    width: 24px;
    cursor: pointer;
  `
  close_button.innerHTML = "<a onClick='hidePopup()'><svg viewBox='0 0 24 24'><path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'/><path d='M0 0h24v24h-24z' fill='none'/></svg></a>";


  html_with_close = html;
  var popup = document.createElement('div');
  popup.id = 'popup';
  popupContainer.appendChild(popup);
  popup.innerHTML = html_with_close;
  popup.appendChild(close_button);

  popup.style.cssText = `
    position: absolute;
    top: 300px;
    left: 300px;
    width: 400px;
    max-width: 90vw;
    min-height: 200px;
    border: 1px solid #ddd;
    box-shadow: 0 5px 20px #ccc;
    border-radius: 0.8rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  `;

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(popupContainer);

  setCookie(cname, true);

  popupContainer.addEventListener('click', function(e) {
    if (e.target.id != 'popup') {
      hidePopup()
    }
  })
}

function hidePopup() {
  const popupContainer = document.getElementById(popupContainerId);
  while (popupContainer && popupContainer.firstChild) {
    popupContainer.removeChild(popupContainer.firstChild);
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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
