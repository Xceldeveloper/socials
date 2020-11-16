<template>
  <div id="textfield" ref="text" > 
   <textarea id="inputbox" v-model="input"></textarea>
   <div id="fake-textarea" v-html="metext">
      
   </div>
   {{hello}}
  </div>

</template>

<script>
export default {
    name:'textfield',
    data(){
        return{
            input:"",
            hello:""
        }
    },
    mounted(){
               
             
     this.setStyle();
    },
    methods:{
        setStyle(){
             var box =  document.getElementById("inputbox");
            
             var mm = document.getElementById("fake-textarea");
           
               box.style.width = mm.getBoundingClientRect().width + "px";
                 box.style.height = mm.getBoundingClientRect().height + "px";
              
        },
        cleanHash(dd){
          for(var i = 0; i < dd.lengt; i++){
              dd[i]
          }
        },
        keymonitor(event){
          if(event.key === "Enter" || event.keyCode == 13){
              console.log("yes");
                var box =  document.getElementById("inputbox");
             //     box.style.height = box.getBoundingClientRect().height + "20px";
          }
        },
        texting(){
            var box =  document.getElementById("inputbox");
            this.hello = box.innerText
        }
        
    }, 
    computed:{
        metext(){
              var mm = this.input;
          // var text = mm.replace(/\n/g, "<br>");
    //         var aa = mm.match(/(?:^|\s)(?:#)([a-zA-Z\d]+)/gm);
    //          console.log(aa)
    //        if(aa !== null){
    //  //     console.log("runningxxx")
    //        for(var i = 0; i < aa.length; i++){
    //            var ddd = [];
    //            ddd.push(aa[i])
    //            console.log(aa[i]);
    //            var regExp = new RegExp(ddd.join('|'),'i');  // regex pattern string

    //       //  text.replace(, '');
    //            text.replace(regExp,"40");
    //        }
    //        }
         
            return mm;
        }
    },
    watch:{
        input:function(){
         
                              this.setStyle();

           
            
        }
    }


}







/* Extract hashtags text from string as an array */
// function getHashTags(inputText) {  
//     var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
//     var matches = [];
//     var match;

//     while ((match = regex.exec(inputText))) {
//         matches.push(match[1]);
//     }

//     return matches;
// }
</script>

<style>
*{
    box-sizing: border-box;
}
#textfield{
    width: 300px;
    height: auto;
    /* position: relative;
     */
}

#inputbox{
    width: 100%;
    height: auto;
    border: 1px solid red;
    resize: none;
    outline-style: none;
    padding: 5px;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
     font-size: 16px;
    font-family: Arial, sans-serif;
    z-index: 50;

      word-wrap: break-word;
     white-space: pre-wrap;
 
 
  box-sizing: padding-box;
    
}

#fake-textarea{
    width: 100%;
    min-height: 40px;
    
        font-size: 16px;
  font-family: Arial, sans-serif;
    padding: 5px;
    
  box-sizing: padding-box;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 40;
     word-wrap: break-word;
     white-space: pre-wrap;
     color: red;
     border: 1px solid yellow;
  

}

#hashtag, #mention{
    color: cornflowerblue;
    text-decoration: none;
}
</style>