"use strict";

//value of the input
const number_lenght = document.getElementById("number-lenght");

//we call to the button show
const showBtn = document.getElementById("show");

//we call class container
const container = document.querySelector('.container');

//we create a element
const div = document.createElement("div");
div.classList.add('new-div');

//add event to the button showBtn
showBtn.addEventListener('click', () => {
    let numberL = parseInt(number_lenght.value);
    
    //array with two number 0 and 1;
    let array = [0, 1];
    let result;
    //string
    let stringA = "";
    //increment
    let i = 2;//i=2
    stringA += array[0] + " <br> ";
    stringA += array[1] + " <br> ";
    while(i <= numberL)//si
    {
        result = array[i - 1] + array[i - 2]//
        array.push(result)
        stringA += result + " <br> ";
        i++;
    }
    div.innerHTML =  `${stringA}`;
    //we enter the element div a the element container
    container.appendChild(div);
    
})