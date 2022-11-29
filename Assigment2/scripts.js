

// document.getElementById("submit").onclick = 

// function() { 

//     const para = document.querySelector("p");       
//     var str = document.getElementById("sentence").value.toLowerCase();
//     console.log("The string you entered: ", str)
//     var letter = document.getElementById("letter").value.toLowerCase();
//     console.log("The letter you entered: ", letter)

//      if(str.indexOf(letter) == -1 ) {
//         alert("Letter does not exist in the string")
//     }
//     else {
//         var afterLetter = str.substring(str.indexOf(letter)+1);
//         console.log("Substring:",afterLetter)
//     }
//     submit.addEventListener("click", function () {
//         para.textContent= `The String You Entered ${str}, The Letter You Entered ${letter}, Final Output ${afterLetter}`;
//     });
// }

// let sentence = document.getElementById("sentence").value;

// let letter = document.getElementById("letter").value;

// document.getElementById("submit").addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(sentence.value); 
       
// });

///////////////////////////////
// let first = document.getElementById('sentence').addEventListener('input', function() {
//     console.log(this.value);
// });

// document.getElementById('letter').addEventListener('input', function() {
//     console.log(this.value);
//     console.log(first);
// });


/* **************************************************************************** */



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


// function english_Sentance(){
//     var sentance =document.getElementById("sentance").value;
//     var letter = document.getElementById("letter").value;
//     var position = sentance.indexOf(letter);
//     if(position>0){
//     var output = sentance.substring(position+1, sentance.length);
//       document.getElementById("result").value = output;
//     } else {
//     var out = "The letter does not exist in the sentance";
//       document.getElementById("result").value = out;
//     }
    
//     }

    