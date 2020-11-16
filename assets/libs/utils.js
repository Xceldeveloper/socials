var Utils = {
  /**
   * 
   * @param {string value} val 
   */
  wordCount(val) {
    var wom = val.match(/\S+/g);
    return {
      charactersNoSpaces: val.replace(/\s+/g, "").length,
      characters: val.length,
      words: wom ? wom.length : 0,
      lines: val.split(/\r*\n/).length
    };
  },

  formatText(val) {
    return val.replace(/\n/g, "<br>");
  },

  /**
   * 
   * @param {insert character} input 
   * @param {target element} element 
   * @param {target v-model} value 
   * @param {target context} context 
   */
  insertChar(input, element, value, context, callback) {
    var callBackFunc = callback || function (swipedir) {
      alert(swipedir);
    }
    const insertText = input;
    if (!insertText.length) return

    const textarea = element;
    const sentence = textarea.value
    const len = sentence.length
    let pos = textarea.selectionStart
    if (pos === undefined) {
      pos = 0
      console.log("out")
    }

    const before = sentence.substr(0, pos)
    const after = sentence.substr(pos, len)

    value = before + insertText + after

    context.$nextTick().then(() => {
      textarea.selectionStart = pos + insertText.length
    })
  
    callBackFunc(value);
  },


  cancelFullScreen(el = "") {
    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);
    if (isInFullScreen)
      if (el == "") {
        el = document
      }
    var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
    if (requestMethod) { // cancel full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }

  },

  requestFullScreen(el = "") {
    var elem = document.body; // Make the body go full screen.

    if (el == "") {
      el = elem
    }
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (requestMethod) { // Native full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
    return false
  },

  toggleFullScreen() {
    var elem = document.body; // Make the body go full screen.
    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);

    if (isInFullScreen) {
      this.cancelFullScreen(document);

    } else {
      this.requestFullScreen(elem);

    }
    return false;
  },

  parseTime(time) {
    var ptime = moment(time).calendar();
    if (/[/]/.test(ptime)) {
      return moment(ptime, "MM-DD-YYYY");
    } else {
      return ptime;
    }
  },

  formatNumber(x) {
    if (isNaN(x)) return x;

    if (x < 9999) {
      return x;
    }
    // if(x > 9999 < 1000000){
    //   return (x/1000).toFixed(2) + "k";
    // }

    if (x < 1000000) {
      return Math.round(x / 1000) + "K";
    }
    if (x < 10000000) {
      return (x / 1000000).toFixed(2) + "M";
    }

    if (x < 1000000000) {
      return Math.round((x / 1000000)) + "M";
    }

    if (x < 1000000000000) {
      return Math.round((x / 1000000000)) + "B";
    }

    return "1T+";
  },

  setPostTime(moment,date, withOutSuffix = false, limited = false) {
    var result;
    if (date == "") {
      date = new Date().toISOString();
    }
    var timezone = moment.tz.guess(),
      convertedTime = moment(date).tz(timezone),
      xdate = moment(convertedTime).calendar(null, {
        lastDay: limited ? 'ddd, LT' : '[Yesterday at] LT',
        lastWeek: limited ? 'MMM D, LT' : '[Last] dddd [at] LT',
        sameElse: limited ? 'MMM D, YYYY h:mm A' : "dddd, MMMM D, YYYY h:mm A",
      });
    var isToday = /Today/.test(xdate);
    if (isToday) {
      var t = moment(convertedTime).from(new Date().toISOString(), withOutSuffix);
      var jesNow = /a few seconds ago|a few seconds/.test(t);
      var isSec = /seconds/.test(t);

      var isMin = /minutes|minute/.test(t),
        oneMin = /a minute/.test(t);

      var isHour = /hour|hours/.test(t),
        oneHour = /1 hour/.test(t);
      t = jesNow ? 'Just now' : t;
      if (limited) {
        if (isHour) {
          t = oneHour ? t.replace(/hour/, 'hr') : t.replace(/hours/, 'hrs');
        } else if (isMin) {
          t = oneMin ? t.replace(/minute/, 'min') : t.replace(/minutes/, 'mins');
        } else if (isSec && !jesNow) {
          t = t.replace(/seconds/, 'secs');
        }

      }
      result = t;

    } else {
      result = xdate;
    }  
      return result;
  }


}




export {
  Utils
}
