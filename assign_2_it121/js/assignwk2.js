// Set up the object
var person = prompt("Let's Play the Sum Game. Please enter your name");
     
var firstNum = parseInt(prompt ("Enter First Number"));
var secondNum = parseInt(prompt ("Enter Second Number"));
var total = firstNum + secondNum; 

  var el = document.getElementById("greeting")

  el.textContent = `Hi ${person}! The sum of ${firstNum} + ${secondNum} = ${total}`;   
