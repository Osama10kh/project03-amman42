let count = 0

const counterValueElement = document.getElementById("counter-value");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");


function update() {
    counterValueElement.textContent = count;

    counterValueElement.classList.remove("positive", "negative", "zero");

    if (count > 0) {
        counterValueElement.classList.add("positive");
    } else if (count < 0) {
        counterValueElement.classList.add("negative");
    } else {
        counterValueElement.classList.add("zero");
    }
}

btnIncrement.addEventListener("click", function () {
    count++;
    update();
});

btnDecrement.addEventListener("click", function () {
    count--;
    update();
});

btnReset.addEventListener("click", function () {
    count = 0;
    update();
});