var vacaItems = document.querySelector('li.vaca'); // Store NodeList in array

if (vacaItems.length > 2) {                          // If it contains items
 
  for (var i = 2; i < vacaItems.length; i++) {       // Loop through each item
    
    vacaItems[i].className = 'tbd';         // Change value of class attribute
  }
 
}




