const count = document.querySelector("#count");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");
const plusBtn = document.querySelector("#plusBtn");


let value = 0;
plusBtn.addEventListener("click", () => {
    value++;
    count.textContent = value;
})

minusBtn.addEventListener("click", () => {
    value--;
    count.textContent = value;
})

resetBtn.addEventListener("click", () => {
    value = 0;
    count.textContent = value;
})