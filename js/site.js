function getValues(){

    //get values from the page

    let startValue = document.getElementById("startValue").value;

    let endValue = document.getElementById("endValue").value;
    
    //parse into Integers

    startValue = parseInt(startValue);

    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
       
        let numbers = generateNumbers(startValue, endValue);
        
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }  
}

//generate numbers from the startValue to the endValue

function generateNumbers(startValue, endValue){

    let numbers = [];

    //we want to get all numbers from start to end

    for(let index = startValue; index <= endValue; index++){

        //this will execute in a loop until index = endValue
        
        numbers.push(index);   
    }
    return numbers;
}

//display the numbers 

function displayNumbers(numbers){

    let templateRows = ""; 

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}


