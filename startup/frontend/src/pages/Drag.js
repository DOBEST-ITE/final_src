
//import React, { useEffect } from "react";
//import * as Product from './Product.js'

function selectText() {
    var selectionText = ""; //마우스로 드래그한 글
                 
    if (document.getSelection) {
        selectionText = document.getSelection();
        console.log(selectText);
    } else if (document.selection) {
        selectionText = document.selection.createRange().text;
        console.log(selectText);
    }
    
   return selectionText;
   }

   document.onmouseup = function() {
    if(!document.getElementById("console")){
        return;
    }
    document.getElementById("console").innerHTML = selectText();
    if(document.getElementById("console").innerHTML=="" || document.getElementById("console").innerHTML == null){
        document.getElementById("console").style.display = "none";
    }
    else{
        document.getElementById("console").style.display = "block";
    }
    
}

