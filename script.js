var popupContainerId = uuidv4();
var cname = 'locale-popup';

function showPopup(popupBodyHtml) {

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

  var popupBackdrop = document.createElement('div');
  popupBackdrop.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1060;
    opacity: 0.5;
    background-color: #6c757d;
  `;

  popupContainer.appendChild(popupBackdrop);

  var popup = document.createElement('div');
  popup.innerHTML = `
    <div style="width: 100%; text-align: right;">
      <button onClick='hidePopup()' style="cursor: pointer;"><i>&times;</i></button>
    </div>
    <div style="text-align: center">
      ${popupBodyHtml}
    </div>
  `;

  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    width:400px;
    max-width: 90vw;
    min-height: 200px;
    border: 1px solid #ddd;
    box-shadow: 0 5px 20px #ccc;
    border-radius: 0.8rem;
    transform: translate(-50%, -50%);
    justify-content: center;
    padding: 1rem 2rem 1rem 2rem;
    z-index: 1070;
    background: white;
  `;

  popupContainer.appendChild(popup);

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(popupContainer);

  setCookie(cname, true);

  document.addEventListener('click', function(e) {
    if (!popup.contains(e.target)) {
      hidePopup();
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
