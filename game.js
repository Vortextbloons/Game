let onclick_uppgrade = 1
let onclick_price = 25
let apple_tree_price = 250
let apple = 0
let apple_tree_upgrade = 0
let apple_per_second = 0


onclick_uppgrade = 1
const display_apple_per_second = document.getElementById("apple_per")
const display_apple = document.getElementById("Money")/*  */
console.log(display_apple_per_second)
function apple_per_function(){
    apple = apple + apple_per_second
    display_apple.innerText = "You Have " + apple 
}
function onclick_apple () {
    apple = apple + onclick_uppgrade
    display_apple.innerText = "You Have " + apple   
}
function Fonclick_uppgrade(){ 
    const display_click_upgrade_stat = document.getElementById("upgrade_stats")
    console.log(display_click_upgrade_stat)
    const display_price_onclick_uppgrade = document.getElementById("click_uppgrade")
    display_click_upgrade_stat.innerText = "You Get " + onclick_uppgrade + " " + "Per Click"
    if (apple > onclick_price){
        console.log(onclick_uppgrade)
        onclick_uppgrade = onclick_uppgrade + 1
        apple = apple - onclick_price
        onclick_price = onclick_price * 1.25
        onclick_price = Math.round(onclick_price)
        display_apple.innerText = "You Have " + apple 
        display_price_onclick_uppgrade.innerText = "Buy Click Uppgrade Price $" + onclick_price }}   
        
function fapple_tree_upgrade(){
            const display_apple_tree_upgrade_stat = document.getElementById("apple_upgrade_stat")
            const display_price_apple_tree_uppgrade = document.getElementById("apple_tree_upgrade")
            display_apple_tree_upgrade_stat.innerText = "You Have " + apple_tree_upgrade + " " + "Apple Trees"
            if (apple > apple_tree_price){
                apple_tree_uppgrade = apple_tree_upgrade + 1
                apple = apple - apple_tree_price
                apple_tree_price = apple_tree_price * 1.25
                apple_tree_price = Math.round(apple_tree_price)
                display_apple.innerText = "You Have " + apple 
                apple_per_second = apple_per_second + 1
                display_price_apple_tree_uppgrade.innerText = "Buy Apple Tree $" +  apple_tree_price
                console.log(apple_per_second)
                display_apple_per_second.innerText = "You Get " + apple_per_second + " " + "Per Second"}}
                apple_tree_upgrade = apple_tree_upgrade + 1
                display_apple.innerText = "You Have " + apple 
        
                
setInterval(apple_per_function,1000)