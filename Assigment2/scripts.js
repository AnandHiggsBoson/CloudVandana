
function english_Sentance(){

    let sentance =document.getElementById("sentance").value;
    let  letter = document.getElementById("letter").value;
    let  position = sentance.indexOf(letter);

   if(sentance.indexOf(letter) == -1 ) {
                 alert("Letter does not exist in the string")
             }
            else{ 
                 let output = sentance.substring(position+1, sentance.length);
                 document.getElementById("result").value = output;
            } 
    }


    
