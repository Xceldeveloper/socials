
     /***
      * @abstract
      */
     export default String.prototype.TEST = function(){
         if(typeof this !== "string"){
             console.log("Input is not a String");
             return
         }
        var tests = {
          hasWhiteSpaceAndComma: /[ ,]+/.test(this),
          hasSpecialCharactersLast:/[._]+$/.test(this),
          hasAlphaNumeric:/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(this),
          hasNumber:/\d+/.test(this),
          hasAlphabets:/[a-zA-Z]/.test(this),
          hasSpecialCharacters:/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this),
          hasExcludedCharacters:/[ `!@#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/.test(this),
          hasOnlyNumber:/^[0-9]+$/.test(this),
          hasOnlyAlphabets:/^[A-Za-z]+$/.test(this),
          hasOnlyMixOfAlphaNumeric:/^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/.test(this),
          hasOnlyAlphabetsAndNumbers: /^[A-Za-z0-9 ]+$/.test(this),
          startsWithNumber:/^\d/.test(this),
          startsAlphabet :/^\D/.test(this),
          isEmail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this),
          isEmpty:!this || this.length === 0 || this == "" || /^\s*$/.test(this),
        }
        return tests;
      }


//       var myInterval;// Used to save previous interval if one has been started
// function run(){
//   var timeZone = document.getElementById("selectTimezone");
  
//   var i = timeZone.selectedIndex;
//   var removeParenthesis = timeZone.options[i].text.replace(/[()]/g, '')
//   var splitString = removeParenthesis.split(' ')
//   var d = new Date('Nov 1, 2017 ' + ' ' +  splitString[0])
  
//   var $clock = $('#clock'),
//       eventTime = moment(d.getTime()).unix(),
//       currentTime = moment(new Date().getTime()).unix(),
//       diffTime = eventTime - currentTime,
//       duration = moment.duration(diffTime * 1000, 'milliseconds'),
//       interval = 1000;
  
//   // if time to countdown
//   if(diffTime > 0) {
    
//     // Show clock
//     // $clock.show();
    
//     clearInterval(myInterval);
//     myInterval = setInterval(function(){
      
//       duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
//       var d = moment.duration(duration).days(),
//           h = moment.duration(duration).hours(),
//           m = moment.duration(duration).minutes(),
//           s = moment.duration(duration).seconds();
      
//       d = $.trim(d).length === 1 ? '0' + d : d;
//       h = $.trim(h).length === 1 ? '0' + h : h;
//       m = $.trim(m).length === 1 ? '0' + m : m;
//       s = $.trim(s).length === 1 ? '0' + s : s;
      
//       // show how many hours, minutes and seconds are left
//       $('.days').text(d + 'days');
//       $('.hours').text(h + 'hours');
//       $('.minutes').text(m + 'minutes');
//       $('.seconds').text(s + 'seconds');
      
//     }, interval);
    
//   }  

       