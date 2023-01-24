//**************************RESOURCES************************************* */
const subtract = document.getElementById('subtractButton')
const reset = document.getElementById('resetButton')
const add = document.getElementById('addButton')
const countDisplay = document.getElementById('numCounter')

let count = countDisplay;

// Subtract Button
subtract.addEventListener("click" , function (e) {
    count.innerHTML--;
})

//  Reset Button
reset.addEventListener("click" , function (e) {
    count.innerHTML = " 0 ";
})

// Add Button
add.addEventListener("click" , function (e) {
    count.innerHTML++;
})