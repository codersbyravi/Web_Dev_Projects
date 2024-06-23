const counter = document.querySelector('.number');

function increment() {
    let negativeNumber = (parseInt(counter.innerText));
    negativeNumber = negativeNumber + 1;
    counter.innerText = negativeNumber;
}

function decrement() {
    let positiveNumber = (parseInt(counter.innerText));
    positiveNumber = positiveNumber - 1;
    counter.innerText = positiveNumber;
}