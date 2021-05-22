var welcome = "Welcome to my Calculator "
var x = 5;
var y = 7;
var total = x + y;

// x = 5;
// y = 7;
 
// total = x + y;
 
var el = document.getElementById("welcome");
var el2 = document.getElementById("total");


el.textContent = welcome; 
el2.textContent = `The sum of ${x} + ${y} is : ${total}`; 


















// // textContent is part of JavaScript that indicates that there is test (intuitve) 
// document.getElementById("total").textContent = "The sum of" + ${x} + ${y} + "+" + total;


// element "content" is the text that is below (the sun of...) and the above var (x & y) are filling in at id "element" 

// document.getElementById("welcome").textContent = welcome;