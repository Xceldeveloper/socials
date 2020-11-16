export default {
  methods: {

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

    setPostTime(moment, date, withOutSuffix = false, limited = false) {
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
    },

    
    getCountDown(date,now,moment) {
      // var date = "Thu Sep 12 2020 00:00:00 GMT+0100";
      var timezone = moment.tz.guess(),
        convertedTime = moment(date).tz(timezone),
        eventTime = moment(convertedTime).unix(),
        currentTime = moment(now).unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, "milliseconds"),
        interval = 1000;

      // if time to countdown
      if (diffTime > 0) {
        duration = moment.duration(
          duration.asMilliseconds() - interval,
          "milliseconds"
        );
        var d = moment.duration(duration).days(),
          h = moment.duration(duration).hours(),
          m = moment.duration(duration).minutes(),
          s = moment.duration(duration).seconds(),
          mm = moment.duration(duration).months();

        if (!this.isMobile) {
          mm = mm > 0 ? (mm > 1 ? mm + " Months : " : mm + " Month : ") : "";
          d = d > 0 ? (d > 1 ? d + " Days : " : d + " Day : ") : "";
          h = h > 0 ? (h > 1 ? h + " Hours : " : h + " Hour : ") : "";
          m = m > 0 ? (m > 1 ? m + " Minutes : " : m + " Minute : ") : "";
          s = s > 0 ? (s > 1 ? s + " Seconds  " : s + " Second ") : "";
        } else {
          mm = mm > 0 ? (mm > 1 ? mm + " Mts : " : mm + " Mt :") : "";
          d = d > 0 ? (d > 1 ? d + " Days : " : d + " Day : ") : "";
          h = h > 0 ? (h > 1 ? h + " Hrs : " : h + " Hr : ") : "";
          m = m > 0 ? (m > 1 ? m + " Mins : " : m + " Min : ") : "";
          s = s > 0 ? (s > 1 ? s + " Secs " : s + " Sec") : "";
        }

        return mm + d + h + m + s;
      }else{
          return "Has Already or Still Taking Place";
      }
    },



    getBoxPos(el, parent) {
      var viewportOffset = el.getBoundingClientRect();
      var elHeight = el.clientHeight;
      var elWidth = el.clientWidth
      // these are relative to the viewport, i.e. the window
      var top = viewportOffset.top;
      var left = viewportOffset.left;
      return {
        top: top - parent.top,
        left: left - parent.left,
        right: (elWidth - left) - parent.width - parent.left,
        bottom: (elHeight - top) - parent.height - parent.top,
        awayLeft: parent.left - left,
        height: elHeight,
        width: elWidth
      }

    },

    getParentPosition(parent) {
      var height = parent.clientHeight,
        width = parent.clientWidth;

      var top = parent.getBoundingClientRect().top,
        left = parent.getBoundingClientRect().left,
        right = width - left,
        bottom = height - top;

      return {
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        height: height,
        width: width
      }
    },



    getViewPosition(view, parent, callback) {
      var callBackFunc = callback || function (swipedir) {}
      if (view.top < parent.height) {
        if (view.top + view.height <= 0) {
          callBackFunc({
            top: true
          });
        } else if (view.top > 0) {
          callBackFunc({
            inside: true
          });
        }
      } else if (parent.height > view.bottom) {
        callBackFunc({
          bottom: true
        });
      }
    },



























    finalize_BOOKMARK(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        let isAdd = target.isAdd

        if (isAdd) {
          console.log('bookmarked')
        } else {
          console.log('un-bookmarked')
        }

        this.$emit("bookmarked", target);
      }

    },

    finalize_COMMENT(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        let comment = target.comment;
        let isAdd = target.isAdd

        if (isAdd) {
          console.log('commented')
        } else {
          console.log('deleted comment')
        }

        this.$emit("commented", target);
      }

    },

    finalize_LIKE(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        let isAdd = target.isAdd

        if (isAdd) {
          console.log('liked')
        } else {
          console.log('un-liked')
        }

        this.$emit("liked", target);
      }

    },

    finalize_REPORT(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        console.log("reported");
        this.$emit("reported", target);
      }

    },

    finalize_REPOST(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        console.log("reposted");
        this.$emit("reposted", target);
      }

    },

    
    finalize_REMINDER(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        let isAdd = target.isAdd

        if (isAdd) {
          console.log('to be reminded')
        } else {
          console.log('un-remind')
        }

        this.$emit("reminded", target);
      }

    },
        
    finalize_CART(target) {
      if (target !== undefined || target !== "" || target !== null || target.length !== 0) {
        let type = target.type;
        let postId = target.id;
        let userId = target.userId;
        let isAdd = target.isAdd

        if (isAdd) {
          console.log('added to cart')
        } else {
          console.log('removed from card')
        }

        this.$emit("cart", target);
      }

    },


   


  }
}