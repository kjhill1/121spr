// need prompt to allow user to enter scores 

// need to use alert to display average score

// need var to store the: average, number of input, score total.

var inputTotal = 0, inputCount = 0, average, entry;


// prompt that allows users to enter scores

do{
    entry = parseInt(prompt('Enter test score\nOR enter 999 to end entries')),
    inputTotal += entry;
    inputCount++;
    average = ((inputTotal - 999) / (inputCount -1 ));
}while(entry != 999);

alert("Average score is " + average);
