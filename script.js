  (function() {
    setTimeout(() => {

      var isUK = true;
      var auLink = '#';
      var ukLink = '#';
      var modalContainerId = uuidv4();
      var cname = 'locale-modal';

      function showModal() {
        var modalContainer = document.createElement('div');
        modalContainer.id = modalContainerId;
        modalContainer.innerHTML = "<div style='all: initial'><div style='position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 1060; opacity: 0.7; background-color: #6c757d;'></div><div style='z-index: 1070; font-family: Arial; background: white; border-radius: 5px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 50px; color: gray;'><h2>Are you visiting from outside Australia? Visit the regional website for more relevant content.</h2><div style='width: 100%; margin-bottom: 20px; text-align: center; font-size: 1.5em;'><a href=\"".concat(ukLink, "\">Continue to UK</a></div>\n<div style='width: 100%; margin-bottom: 20px; text-align: center; font-size: 1.5em;'><a href=\"").concat(auLink, "\">Continue to Australia</a></div></div></div>");

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(modalContainer);
      }

      function hideModal() {
        const modalContainer = document.getElementById(modalContainerId);
        while (modalContainer && modalContainer.firstChild) {
          modalContainer.removeChild(modalContainer.firstChild);
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

      var cookie = getCookie(cname);

      // if true, region locale modal has already been seen, so we do not proceed
      if (getCookie(cname) === 'true') {
        return
      }

      // TODO: check user locale
      // if region not aus, then set cookie and show modal
      // setCookie(cname, true);
      showModal();

    });
  })()
