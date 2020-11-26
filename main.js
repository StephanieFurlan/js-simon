$(document).ready(function() {

   $(".inputs-box").hide();
   var pcArray = randomArray();

   // show 5 random numbers
   for (number of pcArray) {
      var newDiv = document.createElement("div");
      var newContent = document.createTextNode(number);
      newDiv.classList.add("square");
      newDiv.appendChild(newContent);
      $(".numbers-box").append(newDiv);
   }

   // show counter
   var start = 30;
   $(".counter").text(start);
   var countdown = setInterval(function() {
      $(".counter").text(start);
      if (start == 0) {
         clearInterval(countdown)
      }
      start -= 1;
   }, 1000);

   // after 30 seconds hide numbers
   setTimeout(function () {
      $(".message-box").hide();
      $(".inputs-box").show();

      var userArray = [];
      $("#check-btn").click(function(){
         $(".input-number").each(function(){
            userArray.push(parseInt($(this).val()));
         });
         $(".inputs-box").hide();
         console.log(userArray);
         console.log(pcArray);
         var guessed = compareArrays(pcArray, userArray)
         $(".result-box h1").text("You remembered " + guessed.length + " numbers. ");
         $(".text").text("These are: " + guessed);
      });



   }, 1000);






});



// return random number from 1 - 100
function randomNbr() {
   return Math.floor(Math.random() * 100) + 1;
}

// return array with 5 different random numbers
function randomArray() {
   var array = [];
   while (array.length != 5) {
      var rndNmb = randomNbr();
      if (!array.includes(rndNmb)) {
         array.push(rndNmb);
      }
   }
   return array;
}

function compareArrays(pcArray, userArray) {
   var guessed = [];
   for (i = 0; i < userArray.length; i++) {
      if (pcArray.includes(userArray[i])) {
         guessed.push(userArray[i]);
         pcArray = removeItemOnce(pcArray, userArray[i]);
      }
   }
   return guessed;
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
