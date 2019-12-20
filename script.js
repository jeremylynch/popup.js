  (function() {
    setTimeout(() => {

      var popupContainerId = uuidv4();
      var cname = 'locale-popup';

      function showPopup(html) {

        var cookie = getCookie(cname);

        // if true, region locale popup has already been seen, so we do not proceed
        if (getCookie(cname) === 'true') {
          return
        }

        var popupContainer = document.createElement('div');
        popupContainer.id = popupContainerId;
        popupContainer.innerHTML = html;

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(popupContainer);

        setCookie(cname, true);
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
    });
  })()
