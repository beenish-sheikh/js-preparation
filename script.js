function showAlert() {
    alert("hello world");
}

function easy() {
    alert("hello,this is level easy");
}

function medium() {
    alert("hello, this is level medium");
}

function hard() {
    alert("hello, this is level hard");
}

function consoleLog() {
    console.log("hello,hi this is console.log");
}

function sources() {
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
    console.log('6');
    console.log('7');
}

function showPrice() {
    let costOfApple = 5;
    console.log("cost of 1 apple ");
    console.log(costOfApple * 1);

    console.log("cost of 2 apple");
    console.log(costOfApple * 2);

    console.log("cost of 3 apple");
    console.log(costOfApple * 3);

    console.log("cost of 4 apple");
    console.log(costOfApple * 4);

    console.log("cost of 5apple");

}

function check() {
    // access input

    let inputElement = document.querySelector("input");
    console.log(inputElement);
    // get input valu

    let inputValue = inputElement.value;
    console.log(inputValue);

    let headingElement = document.querySelector("h1 > span");
    console.log(headingElement);


}
headingElement.innerHTML = inputValue;