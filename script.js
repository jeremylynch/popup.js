var popupContainerId = uuidv4();

function showPopup(options) {

  let defaultConfig = {
    onceOnly: true
  }

  let config = {...defaultConfig, ...options}

  if (config.onceOnly && window.sessionStorage.popupShown === "true") {
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
    z-index: 10000;
    opacity: 0.5;
    background-color: #6c757d;
  `;

  popupContainer.appendChild(popupBackdrop);

  var popup = document.createElement('div');

  let html = config.html ? config.html : document.querySelector(config.htmlQuerySelector).innerHTML

  popup.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    </style>
    <div style="position: absolute; right: 0.5rem; top: 0.5rem;">
      <div onClick='hidePopup()' style="cursor: pointer; height: 24px; width: 24px;"><svg viewBox='0 0 24 24'><path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'/><path d='M0 0h24v24h-24z' fill='none'/></svg></div>
    </div>
    <div style="text-align: center">
      ${html}
    </div>
  `;

  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    width:400px;
    max-width: 90vw;
    min-height: 200px;
    box-shadow: 0 5px 20px #ccc;
    border-radius: 0.8rem;
    transform: translate(-50%, -50%);
    justify-content: center;
    padding: 1rem 2rem 1rem 2rem;
    z-index: 10070;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    border-top: 0.25rem solid #00357e;
  `;

  popupContainer.appendChild(popup);

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(popupContainer);

  sessionStorage.popupShown = true

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

window.showPopup = showPopup;
window.hidePopup = hidePopup;
