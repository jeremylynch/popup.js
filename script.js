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
    position: relative;
    height: 100%;
    width: 100%;
  `
  popupContainer.id = popupContainerId;
  html_with_close = html + "<div><a onClick='hidePopup()'>Close</a></div>"
  var popup = document.createElement('div');
  popup.id = 'popup'
  popupContainer.appendChild(popup)
  popup.innerHTML = html_with_close;

  popup.style.cssText = `
    position:absolute;
    top:300px;
    left:300px;
    width:400px;
    max-width: 90vw;
    min-height:200px;
    border:1px solid #ddd;
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
