$(document).ready(function() {

   var pcArray = randomArray();
   // show 5 random numbers
   $(".array-box").text(pcArray);

   // after 30 seconds hide numbers
   setTimeout(function () {
      $(".array-box").hide();
      var attempts = 0;
      var userArray = [];
      while (attempts < 5) {
         var nmb = prompt("write a number");
         userArray.push(parseInt(nmb));
         attempts += 1;
      }
      var guessed = compareArrays(pcArray, userArray)
      $(".array-box").text("Hai indovinato " + guessed.length + " numeri, " + guessed ).show();

   }, 5000);
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
