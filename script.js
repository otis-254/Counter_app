// const add = document.querySelector(".Add");
// const resetCout = document.querySelector(".Reset");
// const sub = document.querySelector(".Subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('Add')) {   
        count.innerHTML++
        setColor()

    }
    if (e.target.classList.contains('Subtract')) {
        count.innerHTML--;
        setColor()
    }
    if (e.target.classList.contains('Reset')) {
        count.innerHTML = 0;
        setColor()
    }
});



function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow"
    }
    else if (count.innerHTML < 0) {
        count.style.color = "red"
    }
    else {
        count.style.color = "white"
    }
}











// add.addEventListener('click', () => {
//     count.innerHTML++
// });
// sub.addEventListener('click', () => {
//     count.innerHTML--;
// });
// resetCout.addEventListener('click', () => {
//     count.innerHTML = 0;
// });

