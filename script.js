const toggleContainer = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle-btn");
const prices = [...document.querySelectorAll(".value")];

const changePricing = () => {
    if (toggleBtn.style.float == "right") {
        toggleBtn.style.float = "left";
        prices.forEach(price => {
            price.textContent = Math.round(price.textContent / 10) - 0.01;
        })
    } else {
        toggleBtn.style.float = "right";
        prices.forEach(price => {
            price.textContent = Math.round(price.textContent * 10) - 0.01;
        })
    }


}


toggleContainer.addEventListener("click", changePricing);