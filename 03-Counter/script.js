const count = document.querySelector("#count");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");
const plusBtn = document.querySelector("#plusBtn");


let value = 0;
function updateCount() {
    if (value > 0) {
        count.style.color = "#42da89";
    } else if (value < 0) {
        count.style.color = "#d20505";
    } else {
        count.style.color = "white";
    }
}

plusBtn.addEventListener("click", () => {
    value++;
    count.textContent = value;
    updateCount();
})

minusBtn.addEventListener("click", () => {
    value--;
    count.textContent = value;
    updateCount();
})

resetBtn.addEventListener("click", () => {
    value = 0;
    count.textContent = value;
    updateCount();
})