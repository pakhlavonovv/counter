let plus_global = document.getElementById("plus_global")
let minus_global = document.getElementById("minus_global")
let a_count = document.querySelector(".a_count")
let b_count = document.querySelector(".b_count")
let c_count = document.querySelector(".c_count")
let d_count = document.querySelector(".d_count")
let b = document.querySelector("#count_b")
let c = document.querySelector("#count_c")
let d = document.querySelector("#count_d")
let a_plus = document.querySelector("#a_plus")
let a_minus = document.querySelector("#a_minus")
let b_plus = document.querySelector("#b_plus")
let b_minus = document.querySelector("#b_minus")
let c_plus = document.querySelector("#c_plus")
let c_minus = document.querySelector("#c_minus")
let d_plus = document.querySelector("#d_plus")
let d_minus = document.querySelector("#d_minus")
let count = document.querySelector("#count")
let result = 0
plus_global.addEventListener("click", function(event){
    event.preventDefault()
    result++
    count.textContent = result
    b.textContent = result
    c.textContent = result
    d.textContent = result
})
minus_global.addEventListener("click", function(event){
    event.preventDefault()
    result--
    count.textContent =  result
    b.textContent = result
    c.textContent = result
    d.textContent = result
})
a_plus.addEventListener("click", function(event){
    event.preventDefault()
    result++
    count.textContent = result
})
a_minus.addEventListener("click", function(event){
    event.preventDefault()
    result--
    count.textContent = result
})
b_plus.addEventListener("click", function(event){
    event.preventDefault()
    result++
    b.textContent = result
})
b_minus.addEventListener("click", function(event){
    event.preventDefault()
    result--
    b.textContent = result
});
c_plus.addEventListener("click", function(event){
    event.preventDefault()
    result++
    c.textContent = result
})
c_minus.addEventListener("click", function(event){
    event.preventDefault()
    result--
    c.textContent = result
})
d_plus.addEventListener("click", function(event){
    event.preventDefault()
    result++
    d.textContent = result
})
d_minus.addEventListener("click", function(event){
    event.preventDefault()
    result--
    d.textContent = result
})